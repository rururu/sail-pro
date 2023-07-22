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
?moe (MapObEvent0)
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
        (light.cesium.core/model-leg 
	nmo
	(+ ?del 4)
	(read-string (.getDescription nmo))))
      (modify ?cs time (+ ?t ?del))))))

(vr:NMEA Start 0
(VRDashboardControl race ?rce)
?c (NMEAControl status "START"
	delay ?del)
?d (NMEAData object ?obj)
(Clock0 time ?t)
=>
(println "NMEA Start boat" (protege.core/sv ?obj "label"))
(vr.dashcli/clear-external-data (str "NMEA_CACHE/" ?rce "/GPRMC.txt"))
(vr.dashcli/clear-external-data (str "NMEA_CACHE/" ?rce "/AIVDM.txt"))
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
(VRDashboardControl onboard ?onb 
	visibility ?vis 
                      boat_skin ?bsk
	race ?rce)
(NMEAControl status "RUN"
	delay ?del)
?d (NMEAData object ?obj
	time ?t0)
?cv (CesiumView status ?cesium-status)
(Clock0 time ?t1 (> ?t1 ?t0))
=>
(future (vr.dashcli/get-external-data (str "NMEA_CACHE/" ?rce "/GPRMC.txt") vr.dashcli/GPRMC))
(when-let [[tim lat lon spd crs dat :as bdata] (vr.dashcli/get-boat-data)]
  (when-let [mo (ru.igis.omtab.OMT/getOrAdd ?obj)]
    (.setLatitude mo lat)
    (.setLongitude mo lon)
    (.setCourse mo (int crs))
    (.setSpeed mo spd)
    (println "boat:" (protege.core/sv ?obj "label") bdata))
  (vr.dashcli/get-external-data (str "NMEA_CACHE/" ?rce "/AIVDM.txt") vr.dashcli/AIVDM)
  (vr.dashcli/get-fleet-data)
  (vr.dashcli/show-neighbors ?onb ?vis ?bsk)
  (vr.dashcli/unvisible-offmap ?onb)
  (when (= ?cesium-status "START")
    (light.pro.server/start-server)
    (light.pro.server/start-client) 
    (light.pro.server/go-onboard ?onb) 
    (modify ?cv status "ONBOARD")))
(modify ?d time (+ ?t1 ?del)))

(vr:NMEA Init 0
?vc (VRDashboardControl race ?rce)
?nc (NMEAControl status "INIT")
(Clock0 time ?t)
=>
(let [race (slurp "NMEA_CACHE/RACE.txt")]
  (println :RACE race)
  (if (= race "")
    (println ".. waiting for race data ..")
    (do (println "Race" race)
      (when (not= ?rce race)
        (vr.dashcli/new-race)
        (modify ?vc race race)
      (modify ?nc status "START")))))

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
	time ?t)
(println "NavOb on map:" ?lab))

