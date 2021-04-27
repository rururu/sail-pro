(ns drape.client
(:require 
  [cesium.client :refer
    [add-terrain
     camera-home
     start-event-processing
     add-orbit-button
     PORT
     VIEWER
     CAMERA
     HOME-VIEW
     EVENT-DEBUG]]))
(defn init-drape []
  (add-terrain nil VIEWER)
(camera-home CAMERA HOME-VIEW)
(start-event-processing PORT VIEWER)
(add-orbit-button CAMERA))


(enable-console-print!)
(set! (.-onload js/window) (init-drape))