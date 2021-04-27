(ns cesium.heat.client
(:require 
  [cesium.client :refer
    [add-terrain
     camera-home
     start-event-processing
     add-orbit-button
     VIEWER
     CAMERA]]))
(def MY-HOME-VIEW {:latitude 60.0
  :longitude 30.15
  :height 2000
  :heading 130
  :pitch -15
  :roll 0})
(def HEATMAP nil)
(defn heatmap-init [bounds options]
  (def HEATMAP (js/CesiumHeatmap.create VIEWER bounds options)))

(defn heatmap-data [valmin valmax data]
  (let [data (for [[x y v] data] {"x" x "y" y "value" v})
        data (clj->js data)]
  (.setWGS84Data HEATMAP valmin valmax data)))

(defn init-heat []
  (add-terrain nil VIEWER)
;;(camera-home CAMERA MY-HOME-VIEW)
(start-event-processing VIEWER)
(add-orbit-button CAMERA))


(enable-console-print!)
(set! (.-onload js/window) (init-heat))