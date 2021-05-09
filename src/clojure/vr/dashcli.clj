(ns vr.dashcli
(:use protege.core)
(:require
  [clj-telnet.core :as tn]
  [light.pro.server :as lps]
  [clj-json.core :as json])
(:import
  ru.igis.omtab.OMT
  ru.igis.omtab.MapOb
  ru.igis.omtab.Util
  edu.stanford.smi.protege.ui.DisplayUtilities
  ru.vrd.nmea.VRdNMEAReciever))
(def defTELNET (defonce TELNET nil))
(def defVRDdNMEA (defonce VRDdNMEA false))
(def START-TOKEN "RMC")
(def END-TOKEN "\r\n")
(def BOAT-DATA [0 0 0 0 0 0])
(def RACES-URL "http://zezo.org/races2.json")
(defn round-speed [s]
  (let [s (* s 100)
       s (Math/round s)]
  (double (/ s 100))))

(defn parse-coord [c1 c2]
  (let [c (read-string c1)
      mf (- c (int c))
      dm (/ (int c) 100)
      d (int dm)
      m (int (* (- dm d) 100))
      m (+ m mf)
      d (if (or (= c2 "S") (= c2 "W")) (* d -1) d)]
  (MapOb/getDeg (str d " " m))))

(defn parse-nmea-data [data]
  (let [d (.split data ",")]
  (if (>= (count d) 10)
    (let [[_ time sts lat1 lat2 lon1 lon2 spd crs date] d]
      [time
       (parse-coord lat1 lat2)
       (parse-coord lon1 lon2)
       (round-speed (read-string spd))
       (read-string crs)
       date]))))

(defn get-nmea-data [port]
  (try
  (when (nil? TELNET)
    (def TELNET (tn/get-telnet "localhost" port))
    (println :TELNET "connected" :PORT port))
  (let [nmea (tn/read-all TELNET)]
    (if (.contains nmea START-TOKEN)
      (first (.split nmea END-TOKEN))))
  (catch Exception e
    (println :TELNET (.getMessage e) :PORT port)
    nil)))

(defn get-nmea-data2 [port path]
  ;; Next call after > 20 sec
(when (not VRDdNMEA)
  (VRdNMEAReciever/startServer port path) 
  (def VRDdNMEA true))
(Thread/sleep 10000)
(let [buf (VRdNMEAReciever/getBuffer)
      cap (.capacity buf)]
  (if (> cap 16)
    (let [nmea (.toString buf)]
      (VRdNMEAReciever/clearBuffer)
      (if (.contains nmea START-TOKEN)
        (first (.split nmea END-TOKEN)))))))

(defn close-telnet []
  (when (some? TELNET)
  (tn/kill-telnet TELNET)
  (def TELNET nil)))

(defn diff-vector? [ndata odata]
  (let [[tim1 lat1 lon1 spd1 crs1] ndata
       [tim2 lat2 lon2 spd2 crs2] odata]
  (or (not= lat1 lat2)
       (not= lon1 lon2)
       (not= spd1 spd2)
       (not= crs1 crs2))))

(defn get-boat-data [port]
  (let [bdata (if-let [nmea (get-nmea-data port)]
                 (if-let [bd (parse-nmea-data nmea)]            
                   (when (diff-vector? bd BOAT-DATA)
                     (def BOAT-DATA bd)
                     bd)))]
  bdata))

(defn get-boat-data2 [port path]
  (let [bdata (if-let [nmea (get-nmea-data2 port path)]
                 (if-let [bd (parse-nmea-data nmea)]            
                   (when (diff-vector? bd BOAT-DATA)
                     (def BOAT-DATA bd)
                     bd)))]
  bdata))

(defn srand [d]
  (- (rand (* d 2)) d))

(defn add-fleet []
  (let [f (atom
          {:b (fifos "NavOb" "label" "Bylina")
            :v (fifos "NavOb" "label" "Vela")
            :d (fifos "NavOb" "label" "Diana")
            :a (fifos "NavOb" "label" "Argo")
            :m (fifos "NavOb" "label" "Mars")})
      rus (OMT/getMapOb "russor")
      lar (.getLatitude rus)
      lor (.getLongitude rus)
      crr (.getCourse rus)
      spr (.getSpeed rus)]
  (doseq [k (keys @f)]
    (swap! f assoc k (OMT/getOrAdd (@f k))))
  (doseq [k (keys @f)]
    (.setLatitude (@f k) (+ lar (srand 0.02)))
    (.setLongitude (@f k) (+ lor (srand 0.02)))
    (.setCourse (@f k) crr)
    (.setSpeed (@f k) spr))))

(defn add-aircraft-carrier []
  (if-let [ac (fifos "NavOb" "label" "CVN-69")]
  (let [acm (OMT/getOrAdd ac)
        rus (OMT/getMapOb "russor")
        lar (.getLatitude rus)
        lor (.getLongitude rus)
        lac (+ lar (srand 0.02))
        loc (+ lor (srand 0.02))
        crs (int (rand 360))]
    (.setLatitude acm lac)
    (.setLongitude acm loc)
    (.setCourse acm crs)
    (if-let [h (fifos "NavOb" "label" "h1")]
      (let [hm (OMT/getOrAdd h)]
        (.setLatitude hm lac)
        (.setLongitude hm loc)))
    (if-let [i (fifos "NavOb" "label" "i1")]
      (let [im (OMT/getOrAdd i)
             icr (+ crs 180)
             icr (if (> icr 360) (- icr 360) icr)] 
        (.setLatitude im lac)
        (.setLongitude im loc)
        (.setCourse im icr))))))

(defn select-race
  ([hm inst]
  (let [mp (into {} hm)
         clw (mp "clsWidget")
         rce (first (.getSelection (.getSlotWidget clw (slt "races"))))
         tpt (first (.split rce "\\."))
         tpt (+ 10000 (read-string tpt))]
    (ssv inst "selected-race" rce)
    (ssv inst "telnet-port" (str tpt))))
([]
 (clojuretab.ClojureTab/showModalInstance
    (first (cls-instances "VRDashboardControl"))
    "Select Active Race")))

(defn diff-view [ops vel vof vpt]
  (let [vof (keyword (clojure.string/lower-case vof))]
  (or (not= vel (ops :view-elevation))
       (not= vof (ops :view-offset))
       (not= vpt (ops :view-post)))))

(defn update-view [ops vel vof vpt]
  (let [vpt (keyword (clojure.string/lower-case vpt))]
  (println :UW vel vof vpt)
  (assoc ops :view-elevation vel
                   :view-offset vof
                   :view-post vpt)))

(defn create-nearby-boat []
  (let [onm (or @lps/ONBOARD
                  (DisplayUtilities/editString nil "Exsisting Boat Name" "" nil))
       nnm (DisplayUtilities/editString nil "New Boat Name" "" nil)]
  (if (and (some? onm) (some? nnm))
    (let [oi (fifos "NavOb" "label" onm)
          ni (foc "NavOb" "label" nnm)
          _ (ssv ni "latitude" "0 0")
          _ (ssv ni "longitude" "0 0")
          _ (ssv ni "url" (sv oi "url"))
          _ (ssv ni "description" (sv oi "description"))
          omo (OMT/getOrAdd oi)
          nmo (OMT/getOrAdd ni)
          crs (.getCourse omo)
          [lat lon] (Util/relPos (.getLatitude omo) (.getLongitude omo) crs 0.1)]
      (.setLatitude nmo lat)
      (.setLongitude nmo lon)
      (.setCourse nmo crs)
      (.setSpeed nmo (.getSpeed omo))))))

(defn load-races []
  (let [txt (slurp RACES-URL)
      mp (json/parse-string txt)
      rcs (map #(get % "id") (mp "races"))
      vrd (first (cls-instances "VRDashboardControl"))]
 (ssvs vrd "races" rcs)))

(defn show-controls []
  (.show *prj* (first (cls-instances "VRDashboardControl"))))

