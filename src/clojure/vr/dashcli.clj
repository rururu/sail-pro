(ns vr.dashcli
(:use protege.core)
(:require
  [clj-telnet.core :as tn]
  [light.async.proc :as lap])
(:import
  ru.igis.omtab.OMT
  ru.igis.omtab.MapOb
  edu.stanford.smi.protege.ui.DisplayUtilities))
(def defTELNET (defonce TELNET nil))
(def START-TOKEN "RMC")
(def END-TOKEN "\r\n")
(def BOAT-DATA [0 0 0 0 0 0])
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
  (when-let [ac (fifos "NavOb" "label" "CVN-69")]
  (let [acm (OMT/getOrAdd ac)
        rus (OMT/getMapOb "russor")
        lar (.getLatitude rus)
        lor (.getLongitude rus)
        crr (.getCourse rus)
        spr (.getSpeed rus)]
    (.setLatitude acm (+ lar (srand 0.02)))
    (.setLongitude acm (+ lor (srand 0.02)))
    (.setCourse acm crr)
    (.setSpeed acm spr))))

(defn ask-telnet-port []
  (if-let [vrdc (first (cls-instances "VRDashboardControl"))]
  (let [port (sv vrdc "telnet-port")
        port (DisplayUtilities/editString nil "Telnet Port" port nil)]
    (try
      (ssv vrdc "telnet-port" (int (read-string port)))
      port
      (catch Exception e
        nil)))))

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

