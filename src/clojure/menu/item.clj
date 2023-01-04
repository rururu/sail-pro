(ns menu.item
(:use protege.core)
(:import 
  clojuretab.ClojureTab
  ru.igis.omtab.OMT))
(defn clojure-work []
  (println "INITIALIZING EXPERT SYSTEM")
(println "1. Loading Clojure Programs...")
(if-let [wps (ClojureTab/findAnnotated (cls-instances "WorkingPrograms") nil)]
  (loop [i 1 pins (svs wps "cloPrograms")]
    (when (seq pins)
      (println (str " 1." i " " (sv (first pins) "title") " = " (ClojureTab/loadProgram (first pins)) ))
      (recur (inc i) (rest pins)) ) )
  (println "  Annotated instance of WorkingPrograms not found!"))
(println "2. Define Race and Boat.")
(ClojureTab/invoke "vr.dashcli" "ask-race-and-boat-name")
(println "3. Start Expert System.")
(if-let [run (ClojureTab/findAnnotated (cls-instances "Run") nil)]
  (ClojureTab/invoke "ru.rules" "run-engine" run)
  (println "  Annotated instance of Run not found!"))
(println "4. Start Time.")
(OMT/setTimerRunning true)
(println "EXPERT SYSTEM INITIALIZED AND STARTED"))

