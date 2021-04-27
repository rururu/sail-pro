(ns cesium.testclient
(:require 
  [cesium.client :refer
    [add-imagery-by-asset-id
     add-terrain
     camera-home
     clock-settings
     load-data
     start-event-processing
     look-at
     add-orbit-button
     VIEWER
     CLOCK
     SCENE
     CAMERA
     CANVAS
     HOME-VIEW
     CLOCK-SET
     EVENT-URL
     EVENT-DEBUG]]))
(defn init-client []
  (add-terrain nil VIEWER)
(camera-home CAMERA HOME-VIEW)
(start-event-processing VIEWER)
(add-orbit-button CAMERA))


(enable-console-print!)
(set! (.-onload js/window) (init-client))