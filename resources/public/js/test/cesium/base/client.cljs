(ns cesium.base.client
)
(def VIEWER (js/Cesium.Viewer. "cesiumContainer"))
(def CLOCK (.-clock VIEWER))
(def SCENE (.-scene VIEWER))
(def CAMERA (.-camera SCENE))
(def CANVAS (.-canvas SCENE))
(def HOME-VIEW {:longitude 30.1
  :latitude 60.0
  :height 2500
  :heading 120
  :pitch -20
  :roll 0})
(def CLOCK-SET {:animate true
  :start "2020-08-08T16:00:00Z"
  :stop "2020-08-08T16:20:00Z"
  :current "2020-08-08T16:00:00Z"
  :mult 4})
(def CZML-DS (js/Cesium.CzmlDataSource.))
(def CZML-URL "http://localhost:4448/czml")
(def CZML-DEBUG false)
(defn add-imagery-by-asset-id [id viewer]
  (let [ilays (.-imageryLayers viewer)]
  (.remove ilays (.get ilays 0))
  (.addImageryProvider ilays (js/Cesium.IonImageryProvider. #js{:assetId id}))))

(defn add-terrain [options viewer]
  (set! (.-terrainProvider viewer) (js/Cesium.createWorldTerrain. options))
(set! (.-depthTestAgainstTerrain (.-globe (.-scene viewer))) true))

(defn camera-home [camera view ]
  (let [{:keys [longitude latitude height heading pitch roll]} view
       pos (js/Cesium.Cartesian3.fromDegrees. longitude latitude height)
       orient (js/Cesium.HeadingPitchRoll.fromDegrees. heading pitch roll)]
  (def HOME-VIEW (clj->js {:destination pos
                                         :orientation {:heading (.-heading orient)
                                                              :pitch (.-pitch orient)
                                                              :roll (.-roll orient)}
                                         ;; animation options
                                         :duration 4.0
                                         :maximumHeight 2000
                                         :pitchAdjustHeight 2000
                                         :endTransform js/Cesium.Matrix4.IDENTITY}))
  (.addEventListener (.-beforeExecute (.-command (.-viewModel (.-homeButton VIEWER))))
                                 (fn [e]
                                   (set! (.-cancel e) true)
                                   (.flyTo camera HOME-VIEW)))
  (.flyTo camera HOME-VIEW)))

(defn clock-settings [clock settings viewer]
  (let [{:keys [animate start stop current mult]} settings]
  (set! (.-shouldAnimate clock) animate)
  (set! (.-startTime clock) (js/Cesium.JulianDate.fromIso8601 start))
  (set! (.-stopTime clock) (js/Cesium.JulianDate.fromIso8601 stop))
  (set! (.-currentTime clock) (js/Cesium.JulianDate.fromIso8601 current))
  (set! (.-multiplier clock) mult)
  (set! (.-clockStep clock) js/Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER)
  (set! (.-clockRange clock) js/Cesium.ClockRange.LOOP_STOP)
  (.zoomTo (.-timeline viewer) (.-startTime clock) (.-stopTime clock))))

(defn load-data [format source options viewer processor]
  (let [promise (condp = format
                       :GeoJSON (js/Cesium.GeoJsonDataSource.load source options)
                       :CZML (js/Cesium.CzmlDataSource.load source options)
                       :KML (js/Cesium.KmlDataSource.load source options))]
  (.then promise (fn [ds] 
                            (.add (.-dataSources viewer) ds)
                            (processor ds)))))

(defn start-czml-processing [czml-url viewer]
  (letfn [(cz-processor [e]
             (let [data (.-data e)]
               (if CZML-DEBUG
                 (println :data data))
               (.process CZML-DS (js/JSON.parse data))))]
  (.add (.-dataSources viewer) CZML-DS)
  (.addEventListener (js/EventSource. CZML-URL) "czml" cz-processor false)))

