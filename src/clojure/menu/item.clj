(ns menu.item
(:use protege.core)
(:import clojuretab.ClojureTab))
(defn clojure-work []
  (println "INITIALIZING EXPERT SYSTEM")
(println "1. Loading Clojure Programs...")
(if-let [wps (ClojureTab/findAnnotated (cls-instances "WorkingPrograms") nil)]
  (loop [i 1 pins (svs wps "cloPrograms")]
    (when (seq pins)
      (println (str " 1." i " " (sv (first pins) "title") " = " (ClojureTab/loadProgram (first pins)) ))
      (recur (inc i) (rest pins)) ) )
  (println "  Annotated instance of WorkingPrograms not found!"))
(println "2. Assign Telnet Port")
  (println "Telnet Port" (ClojureTab/invoke "vr.dashcli" "ask-telnet-port"))
(println "3. Starting Expert System.")
(if-let [run (ClojureTab/findAnnotated (cls-instances "Run") nil)]
  (ClojureTab/invoke "ru.rules" "run-engine" run)
  (println "  Annotated instance of Run not found!"))
(println "EXPERT SYSTEM INITIALIZED"))

