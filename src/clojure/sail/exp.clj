(ns sail.exp
(:use protege.core)
(:require
  [light.pro.server :as ps]
  [rete.core :as rete])
(:import
  ru.igis.omtab.OMT
  ru.igis.omtab.MapOb
  ru.igis.omtab.Clock
  java.awt.event.ActionListener
  java.util.TimerTask))
(def ES-TIMER nil)
(def URLS {"Mark" "http://localhost:4444/img/buoy3.png"
 "Boat" "http://localhost:4444/img/yacht.png"})
(defn trim-bear [b]
  (cond
  (< b 0) (+ b 360)
  (> b 360) (- b 360)
  true b))

(defn difference [course windir]
  (let [dif (if (> course windir) (- course windir) (- windir course))]
  (if (> dif 180) (- 360 dif) dif)))

(defn show-route [lab]
  (if-let [mo (OMT/getMapOb lab)]
  (let [rte (.getRoute mo)
         deg (map #(map (fn[x] (Math/toDegrees x)) %) rte)
         pnt (map #(str (MapOb/getDegMin (first %)) " " (MapOb/getDegMin (second %))) deg)
         pli (foc "OMTPoly" "label" (str lab "-route"))]
    (if-let [omo (OMT/getMapOb pli)]
      (OMT/removeMapOb omo false))
    (when (> (count deg) 0)
      (ssv pli "latitude" (MapOb/getDegMin (ffirst deg)))
      (ssv pli "longitude" (MapOb/getDegMin (second (first deg)))))
    (ssvs pli "points" pnt)
    (OMT/getOrAdd pli))))

(defn near-and-abaft [boat mark radius]
  (if-let [bmo (ru.igis.omtab.OMT/getMapOb boat)]
  (if-let [mmo (ru.igis.omtab.OMT/getMapOb mark)]
    (and (.near bmo mmo radius) (.abaft bmo mmo)))))

(defn rand-mid-min [mid min]
  (let [dev (rand (- mid min))]
  (if (> (rand) 0.5)
    (+ mid dev)
    (- mid dev))))

(defn camera-control [bmo k v]
  (ps/request {k v} false))

(defn boat-heel [boat sail-point tack view]
  (let [view (cond
                 (or (and (>= view 0) (< view 46)) (and (< view 0) (> view -46))) 1
                 (or (> view 134) (< view -134)) 2
                 true 0)]
  (if-let [bmo (ru.igis.omtab.OMT/getMapOb boat)]
    (if (> view 0)
      (let [heel (condp = sail-point
	'BROADREACH  2
	'BEAMREACH    4
	'CLOSEREACH   7
	'CLOSEHAULED 10
	0)
             sign (condp = tack
	'STARBOARD (if (= view 1) -1 1)
	'PORT            (if (= view 1) 1 -1)
	1)]
        (sail.exp/camera-control bmo :roll (* heel sign)))
      (sail.exp/camera-control bmo :roll 0)))))

(defn sounding [no]
  (ps/request {:elevation [(.getLatitude no) (.getLongitude no)]} true)
(if-let [resp (ps/receive-response)]
  (let [snd (resp :elevation)]
    (if (> snd -7777)
      snd))))

