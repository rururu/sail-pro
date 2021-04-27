(ns cesium.client
)
(def VIEWER (js/Cesium.Viewer. "cesiumContainer"))
(def CLOCK (.-clock VIEWER))
(def SCENE (.-scene VIEWER))
(def CAMERA (.-camera SCENE))
(def CANVAS (.-canvas SCENE))
(def HOME-VIEW {:latitude 28.02
  :longitude 86.93
  :height 8848
  :heading 180
  :pitch -10
  :roll 0})
(def CLOCK-SET {:animate true
  :start "2020-08-08T16:00:00Z"
  :stop "2020-08-08T16:20:00Z"
  :current "2020-08-08T16:00:00Z"
  :mult 4})
(def CZML-DS (js/Cesium.CzmlDataSource.))
(def KML-DS (js/Cesium.KmlDataSource. 
  #js{:camera CAMERA
         :canvas  CANVAS}))
(def EVENT-URL "http://localhost:4448/event")
(def EVENT-DEBUG false)
(def ORBIT (volatile! 
  {:status :init
    :steps 24
    :ring []
    :headings []
    :next 0
    :center nil
    :radius-m 4000
    :step-sec 2}))
(defn add-imagery-by-asset-id [id viewer]
  (let [ilays (.-imageryLayers viewer)]
  (.remove ilays (.get ilays 0))
  (.addImageryProvider ilays (js/Cesium.IonImageryProvider. #js{:assetId id}))))

(defn add-terrain [options viewer]
  (set! (.-terrainProvider viewer) (js/Cesium.createWorldTerrain. options))
(set! (.-depthTestAgainstTerrain (.-globe (.-scene viewer))) true))

(defn camera-fly [camera longitude latitude height heading pitch roll]
  (let [pos (js/Cesium.Cartesian3.fromDegrees. longitude latitude height)
       orient (js/Cesium.HeadingPitchRoll.fromDegrees heading pitch roll)
       fvw (clj->js {:destination pos
                          :orientation {:heading (.-heading orient)
                                               :pitch (.-pitch orient)
                                               :roll (.-roll orient)}})]
  (.flyTo camera fvw)
  fvw))

(defn camera-home [camera view]
  (let [{:keys [longitude latitude height heading pitch roll]} view
       fvw (camera-fly camera longitude latitude height heading pitch roll)]
  (def HOME-VIEW fvw)
  (.addEventListener 
    (.-beforeExecute (.-command (.-viewModel (.-homeButton VIEWER))))
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

(defn start-event-processing [viewer]
  (letfn [(cz-processor [e]
             (let [data (.-data e)]
               (if EVENT-DEBUG
                 (println :CZML data))
               (.process CZML-DS (js/JSON.parse data))))
          (km-processor [e]
             (let [data (.-data e)]
               (if EVENT-DEBUG
                 (println :KML data))
               (.load KML-DS (.parseFromString (js/DOMParser.) data "text/xml"))))
          (js-processor [e]
             (let [data (.-data e)]
               (if EVENT-DEBUG
                 (println :JS data))
               (js/eval data)))]
  (let [es (js/EventSource. EVENT-URL)]
    (.add (.-dataSources viewer) CZML-DS)
    (.add (.-dataSources viewer) KML-DS)
    (.addEventListener es "czml" cz-processor false)
    (.addEventListener es "kml" km-processor false)
    (.addEventListener es "js" js-processor false))))

(defn position-js [^double lambda0 ^double phi1 ^double c ^double az]
  (let [cosphi1 (js/Math.cos phi1)
       sinphi1 (js/Math.sin phi1)
       cosaz (js/Math.cos az)
       sinaz (js/Math.sin az)
       sinc (js/Math.sin c)
       cosc (js/Math.cos c)
       phi2 (js/Math.asin (+ (* sinphi1 cosc) (* cosphi1 sinc cosaz)))
       lam2 (+ (js/Math.atan2 (* sinc sinaz) (- (* cosphi1 cosc) (* sinphi1 sinc cosaz))) lambda0)]
  [lam2 phi2]))

(defn normaz [az]
  (cond 
  (> az js/Math.PI) (- az (* 2 js/Math.PI))
  (< az (- js/Math.PI)) (+ az (* 2 js/Math.PI))
  true az))

(defn azimuths&points [[c-lambda c-phi] radr hgt N]
  (let [s (/ (* js/Math.PI 2) N)
       azs (range 0 (* N s) s)]
  [azs (vec (map #(concat (position-js c-lambda c-phi radr %) [hgt]) azs))]))

(defn look-at [camera dist-m]
  (let [cmp (.-position camera)
       cmp (js/Cesium.Cartographic.fromCartesian cmp)
       [lam phi hgt] [(.-longitude cmp) (.-latitude cmp) (.-height cmp)]
       az (.-heading camera)
       c (* (/ dist-m 1852 60 180) js/Math.PI)
       [lam2 phi2] (position-js lam phi c az)]
  [lam2 phi2 hgt]))

(defn add-orbit-button [camera]
  (letfn[(fly-one [cam next]
            (let [orient (js/Cesium.HeadingPitchRoll. (nth (@ORBIT :headings) next) (.-pitch cam) (.-roll cam))]
              (.flyTo cam #js{:destination (nth (@ORBIT :ring) next)
                                       :orientation #js{:heading (.-heading orient)
                                                               :pitch (.-pitch orient)
                                                               :roll (.-roll orient)}
                                       :duration (@ORBIT :step-sec)
                                       :easingFunction js/Cesium.EasingFunction.LINEAR_NONE
                                       :complete #(fly-next cam (inc next))
                                       :cancel #(fly-cancel cam next)})))
          (fly-next [cam next]
            (if (< next (count (@ORBIT :ring)))
              (fly-one cam next)
              (fly-one cam 0)))
          (fly-cancel [cam next]
             (vswap! ORBIT assoc :next next))
          (next [az azs]
            (let [N (count azs)
                   n (+ (/ N 2) (count (filter #(< % az) azs)))]
              (if (> n (dec N)) (- n N) n)))]
            
  (let [obut (.createElement js/document "button")]
    (set! (.-innerHTML obut) "Toggle orbit")
    (.add (.-classList obut) "cesium-button")
    (.prepend (.querySelector js/document ".cesium-viewer-toolbar") obut)
    (set! (.-onclick obut)
      (fn []
        (condp = (@ORBIT :status)
          :init
          (vswap! ORBIT assoc :status :stop)
          :stop
          (let [steps (@ORBIT :steps)
                 radm (@ORBIT :radius-m)
                 radr (* (/ radm 1852 60 180) js/Math.PI)
                 [lam phi hgt :as look] (look-at camera radm)
                 [azs pts] (azimuths&points [lam phi] radr hgt steps)
                 ring (vec (map #(js/Cesium.Cartesian3.fromRadians (first %) (second %) (nth % 2)) pts))
                 headings (vec (map #(normaz (+ % js/Math.PI)) azs))
                 begin (next (.-heading camera) azs)]
            (vswap! ORBIT assoc :ring ring
                                             :headings headings
                                             :center (js/Cesium.Cartesian3.fromRadians lam phi hgt)
                                             :next begin
                                             :status :run)
            (fly-one camera begin))
          :run
          (do (.cancelFlight camera)
            (vswap! ORBIT assoc :status :stop))))))))

