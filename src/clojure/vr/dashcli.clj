(ns vr.dashcli
(:use protege.core)
(:require
  [clj-telnet.core :as tn])
(:import
  ru.igis.omtab.OMT
  ru.igis.omtab.MapOb
  edu.stanford.smi.protege.ui.DisplayUtilities))

(def defTELNET (defonce TELNET nil))
(def NMEA nil)
(def STOP-TOKEN "AIVDM")
(def START-TOKEN "RMC")
(def BOAT-DATA nil)
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
  (if-let [data (seq (rest (.split data START-TOKEN)))]
  (let [[_ time sts lat1 lat2 lon1 lon2 spd crs date] (.split (first data) ",")]
    [time
     (parse-coord lat1 lat2)
     (parse-coord lon1 lon2)
     (round-speed (read-string spd))
     (read-string crs)
     date])))

(defn get-nmea-data [port]
  (try
  (when (nil? TELNET)
    (def TELNET (tn/get-telnet "localhost" port))
    (println :TELNET "connected" :PORT port))
  (let [nmea (tn/read-until TELNET STOP-TOKEN)
        len (count nmea)]
    (if (< len 100)
      (do (println "data length=" len) nil)
      (if-let [data (parse-nmea-data nmea)]
        (do (def NMEA data) data)
        (do (println "no" START-TOKEN "in data") nil))))
  (catch Exception e
    (println :TELNET (.getMessage e) :PORT port)
    nil)))

(defn close-telnet []
  (when (some? TELNET)
  (tn/kill-telnet TELNET)
  (def TELNET nil)))

(defn get-boat-data [port]
  (def BOAT-DATA 
  (or (get-nmea-data port) (Thread/sleep 10000)
       (get-nmea-data port) (Thread/sleep 10000)
       (get-nmea-data port) (Thread/sleep 10000)
       (get-nmea-data port)))                      
(close-telnet)
BOAT-DATA)

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

(defn apply-view [hm inst]
  (ru.rules/assert-instances [inst]))

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

