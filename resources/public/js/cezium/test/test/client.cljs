(ns test.client
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
     mouse-move
     PORT
     VIEWER
     CLOCK
     SCENE
     CAMERA
     CANVAS
     HOME-VIEW
     CLOCK-SET
     EVENT-DEBUG]]))
(defn init-client []
  (add-terrain nil VIEWER)
(camera-home CAMERA HOME-VIEW)
(start-event-processing PORT VIEWER)
(add-orbit-button CAMERA)
(mouse-move))


(enable-console-print!)
(set! (.-onload js/window) (init-client))