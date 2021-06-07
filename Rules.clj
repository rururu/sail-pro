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
?moe (MapObEvent0 object ?obj label ?lab)
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
	label ?lab)
?czs (CZMLSpan object ?lab)
=>
(retract ?czs)
(println "NavOb off map:" ?lab))

(vr:Set Wikipedia Coordinates 1
(CZMLGenerator)
?onb (Onboard label ?lab
	time ?tim)
(Clock0 time ?t (> ?t ?tim))
=>
(vr.dashcli/set-wiki-coords ?lab))

(czm0:CZML Navob Leg Generation2 1
(CZMLGenerator delay ?del
	visibility ?vis)
(Onboard label ?onb)
?cs (CZMLSpan time ?tim
	object ?obj
	options ?ops)
(Clock0 time ?t ((not= ?obj ?onb)
                       (> ?t ?tim)))
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

(vr:NMEA Start 0
(VRDashboardControl nmea-port ?nmp selected-race ?ser)
?c (NMEAControl status "START"
	delay ?del)
?d (NMEAData object ?obj)
(Clock0 time ?t)
=>
(println "NMEA Start boat" (protege.core/sv ?obj "label"))
(vr.dashcli/select-race)
(vr.dashcli/show-controls)
(future (vr.dashcli/get-external-data (read-string ?nmp) (str "/nmea/" ?ser)))
(when-let [mo (ru.igis.omtab.OMT/getOrAdd ?obj)]
  (modify ?d data [""
	(.getLatitude mo)
	(.getLongitude mo)
	(.getCourse mo)
	(.getSpeed mo)
	""]
	time ?t)
  (modify ?c status "RUN")
  (if (nil? light.sim/ES-TIMER)
    (light.sim/start-sim))))

(vr:NMEA Run 0
(VRDashboardControl onboard ?onb visibility ?vis)
(NMEAControl status "RUN"
	delay ?del)
?d (NMEAData object ?obj
	time ?t0)
(Clock0 time ?t1 (> ?t1 ?t0))
=>
(when-let [[tim lat lon spd crs dat :as bdata] (vr.dashcli/get-boat-data)]
  (when-let [mo (ru.igis.omtab.OMT/getOrAdd ?obj)]
    (.setLatitude mo lat)
    (.setLongitude mo lon)
    (.setCourse mo (int crs))
    (.setSpeed mo spd)
    (println "boat:" (protege.core/sv ?obj "label") bdata))
  (vr.dashcli/get-fleet-data)
  (vr.dashcli/show-neighbors ?onb ?vis)
  (vr.dashcli/unvisible-offmap ?onb))
(modify ?d time (+ ?t1 ?del)))

(vr:NavOb on Map 0
(CZMLGenerator)
(MapObEvent0 status "ADDED"
	object ?obj
	label ?lab
                      (= (.getName (class ?obj)) "ru.igis.omtab.NavOb"))
(Clock0 time ?t)
(not CZMLSpan object ?lab)
=>
(asser CZMLSpan object ?lab
	options (read-string (.getDescription ?obj))
	time ?t)
(println "NavOb on map:" ?lab))

