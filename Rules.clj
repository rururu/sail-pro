(czm:Check Onboard 0
(CZMLGenerator delay ?del)
?onb (Onboard label ?lab
	time ?tim)
(Clock time ?t (> ?t ?tim))
=>
(let [onb (deref light.pro.server/ONBOARD)
       fut (+ ?t ?del)]
  (if (not= onb ?lab)
    (modify ?onb time fut label onb)
    (modify ?onb time fut))))

(czm:CZML Navob Leg Generation 1
(CZMLGenerator delay ?del
	visibility ?vis)
(Onboard label ?onb)
?cs (CZMLSpan time ?tim
	object ?obj
	options ?ops)
(Clock time ?t (> ?t ?tim))
=>
(if-let [omo (ru.igis.omtab.OMT/getMapOb ?onb)]
  (if-let [nmo (ru.igis.omtab.OMT/getMapOb ?obj)]
    (let [dis (.distanceNM omo nmo)]
      (if (< dis ?vis)
        (light.cesium.core/navob-leg 
	nmo
	dis
	(+ ?del 2)
	?ops))
      (modify ?cs time (+ ?t ?del))))))

(czm:CZMLSpan Init 0
?cs (CZMLSpan time ?tim
	object ?obj
	options ?ops
	((not (string? ?obj))
	 (not (string? ?ops))))
=>
(modify ?cs object (protege.core/sv ?obj "label")
	options (apply hash-map
		(mapcat #(list (read-string (protege.core/sv % "keyword"))
			(read-string (protege.core/sv % "argument"))) ?ops))))

(sim0:RetractMapObEvent0 -10
?moe (MapObEvent0 object ?obj)
=>
(retract ?moe))

(sim0:RetractSecondClock0 10
?c1 (Clock0 time ?t1)
?c2 (Clock0 time ?t2
	(< ?t2 ?t1))
=>
(retract ?c2))

(sim0:Start Simulation 0
(CZMLGenerator)
(not Clock0)
=>
(light.sim/start-sim))

(czm0:Check Onboard 0
(CZMLGenerator delay ?del)
?onb (Onboard label ?lab
	time ?tim)
(Clock0 time ?t (> ?t ?tim))
=>
(let [onb (deref light.pro.server/ONBOARD)
       fut (+ ?t ?del)]
  (if (not= onb ?lab)
    (modify ?onb time fut label onb)
    (modify ?onb time fut))))

(czm0:CZML Navob Leg Generation 1
(CZMLGenerator delay ?del
	visibility ?vis)
(Onboard label ?onb)
?cs (CZMLSpan time ?tim
	object ?obj
	options ?ops)
(Clock0 time ?t (> ?t ?tim))
=>
(if-let [omo (ru.igis.omtab.OMT/getMapOb ?onb)]
  (if-let [nmo (ru.igis.omtab.OMT/getMapOb ?obj)]
    (let [dis (.distanceNM omo nmo)]
      (if (< dis ?vis)
        (light.cesium.core/navob-leg 
	nmo
	dis
	(+ ?del 2)
	?ops))
      (modify ?cs time (+ ?t ?del))))))

(vr:NavOb off Map 0
(CZMLGenerator)
(MapObEvent0 status "REMOVED"
	object ?obj)
?czs (CZMLSpan object ?lab
	(= ?lab (.getName ?obj)))
=>
(retract ?czs)
(println "NavOb off map:" (.getName ?obj)))

(vr:View Updated 0
?vrc1 (VRDashboardControl onboard ?onb
	view-elevation ?vel1
	view-offset ?vof1
	view-post ?vpt1)
?vrc2 (VRDashboardControl onboard ?onb
	view-elevation ?vel2
	view-offset ?vof2
	view-post ?vpt2
	[(not= ?vel1 ?vel2)
	 (not= ?vof1 ?vof2)
	 (not= ?vpt1 ?vpt2)])
?czs (CZMLSpan object ?onb
	options ?ops)
=>
(if (vr.dashcli/same-view ?ops ?vel1 ?vof1 ?vpt1)
  (do (retract ?vrc1)
    (modify ?czs options (vr.dashcli/update-view ?ops ?vel2 ?vof2 ?vpt2))
  (do (retract ?vrc2)
    (modify ?czs options (vr.dashcli/update-view ?ops ?vel1 ?vof1 ?vpt1))))

(vr:NMEA Start 0
?c (NMEAControl status "START"
	delay ?del)
?d (NMEAData object ?obj)
(Clock0 time ?t)
=>
(println "NMEA Start boat" (protege.core/sv ?obj "label"))
(when-let [mo (ru.igis.omtab.OMT/getOrAdd ?obj)]
  (modify ?d data [""
	(.getLatitude mo)
	(.getLongitude mo)
	(.getCourse mo)
	(.getSpeed mo)
	""]
	time ?t)
  (modify ?c status "RUN")))

(vr:NMEA Run 0
(VRDashboardControl telnet-port ?tport)
?c (NMEAControl status "RUN"
	delay ?del)
?d (NMEAData object ?obj
	data ?data
	time ?t0)
(Clock0 time ?t1 (> ?t1 ?t0))
=>
(if-let [[tim lat lon spd crs dat :as nmea] (vr.dashcli/get-boat-data ?tport)]
  (let [[?tim ?lat ?lon ?spd ?crs ?dat] ?data]
    (if (or (not= lat ?lat)
             (not= lon ?lon)
             (not= crs ?crs)
             (not= spd ?spd))
      (when-let [mo (ru.igis.omtab.OMT/getOrAdd ?obj)]
        (.setLatitude mo lat)
        (.setLongitude mo lon)
        (.setCourse mo (int crs))
        (.setSpeed mo spd)
        (println (protege.core/sv ?obj "label") lat lon crs spd)
        (modify ?d data nmea
	time (+ ?t1 ?del)))))
  (modify ?d time (+ ?t1 ?del))))

(vr:NavOb on Map 0
(CZMLGenerator)
(MapObEvent0 status "ADDED"
	object ?obj)
(Clock0 time ?t)
(not CZMLSpan object ?lab
	(= ?lab (.getName ?obj)))
=>
(let [lab (.getName ?obj)
      desc (.getDescription ?obj)]
  (asser CZMLSpan object lab
	options (read-string desc)
	time ?t)
  (println "NavOb on map:" lab)))

