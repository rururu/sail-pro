(ns cesium.drape.client
(:require 
  [cesium.client :refer
    [add-terrain
     camera-home
     start-event-processing
     add-orbit-button
     VIEWER
     CAMERA
     HOME-VIEW
     EVENT-DEBUG
     EVENT-URL]]))
(defn init-drape []
  (add-terrain nil VIEWER)
(camera-home CAMERA HOME-VIEW)
(start-event-processing VIEWER)
(add-orbit-button CAMERA))


(enable-console-print!)
(set! (.-onload js/window) (init-drape))