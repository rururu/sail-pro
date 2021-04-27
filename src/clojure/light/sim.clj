(ns light.sim
(:require
  [protege.core :as p]
  [rete.core :as rete])
(:import
  ru.igis.omtab.OMT
  ru.igis.omtab.Clock
  ru.igis.omtab.MapOb
  ru.igis.omtab.NavOb
  java.util.HashMap
  edu.stanford.smi.protege.ui.DisplayUtilities
  java.awt.event.ActionListener))

(def ES-TIMER nil)
(def EVT-LISTENERS (volatile! {}))
(defn start-evt-listen []
  (doseq[pg (OMT/getPlaygrounds)]
  (let [al (proxy [ActionListener] []
	(actionPerformed [evt] 
	  ;; (println :OMT-GEN-EVT evt)
  	(rete/assert-frame ['MapObEvent0 'status (.getActionCommand evt) 'object (.getSource evt)])))]
    (.addActionListener pg al)
    (vswap! EVT-LISTENERS assoc pg al))))

(defn stop-evt-listen []
  (doseq[[pg al] @EVT-LISTENERS]
  (.removeActionListener pg al)))

(defn work-sim []
  (if (and (some? ES-TIMER) (OMT/isRunning))
  (let [msec (Clock/getClock)
         sec (int (/ msec 1000))
         frm ['Clock0 'time sec]]
    (rete/assert-frame frm)
    (rete/fire))))

(defn stop-sim []
  (when (some? ES-TIMER)
  (.cancel ES-TIMER)
  (def ES-TIMER nil)
  (stop-evt-listen)
  (println "Simulation Stoped...")))

(defn start-sim []
  (if (some? ES-TIMER)
  (stop-sim))
(def ES-TIMER (java.util.Timer.))
(.schedule 
  ES-TIMER 
  (proxy [java.util.TimerTask] [] (run [] (work-sim)))
  (long 0) 
  (long 1000))
(start-evt-listen)
(println "Simulation Started..."))

(defn restart-sim []
  (stop-sim)
(start-sim))

(defn reset-time []
  (Clock/setClock 0))

