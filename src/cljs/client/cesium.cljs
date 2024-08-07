(ns client.cesium
(:require
  [geo.calc :as geo]
  [cljs.core.async :refer [go <!]]
  [cljs.core.async.interop :refer-macros [<p!]]))
(def VIEWER nil)
(def CZML-SRC (js/Cesium.CzmlDataSource.))
(def CZML-DATA nil)
(def CAMERA (volatile! {:view 0
               :pitch 0
               :roll 0}))
(def MAX-UPGROUND 100)
(def ALT 0)
(def ZOOM 0)
(defn norm-crs [x]
  (cond
   (> x 360) (- x 360)
   (< x 0) (+ x 360)
   true x))

(defn cz-processor [e]
  (println :CZML (.-data e))
(def CZML-DATA (js/JSON.parse (.-data e)))
(.process CZML-SRC CZML-DATA))

(defn fly-control [lat lon alt hea pit rol per]
  (let [dest (js/Cesium.Cartesian3.fromDegrees lon lat alt)]
  (.flyTo (.-camera VIEWER)
            #js{:destination dest
                  :orientation #js{:heading (js/Cesium.Math.toRadians hea)
                                           :pitch   (js/Cesium.Math.toRadians pit)
                                           :roll    (js/Cesium.Math.toRadians rol)}
                  :maximumHeight alt
                  :duration per
                  :easingFunction (fn [time] time)})))

(defn move-control [lat lon alt hea pit rol]
  ;;(println :MC lat lon alt hea pit rol)
(let [dest (js/Cesium.Cartesian3.fromDegrees lon lat alt)]
  (.setView (.-camera VIEWER)
            #js{:destination dest
                  :orientation #js{:heading (js/Cesium.Math.toRadians hea)
                                           :pitch   (js/Cesium.Math.toRadians pit)
                                           :roll    (js/Cesium.Math.toRadians rol)}})))

(defn sample-height [[phi lam] alt]
  (let [pos (js/Cesium.Cartographic. lam phi alt)
       sh (.sampleHeight (.-scene VIEWER) pos)]
  [phi lam (or sh -7777)]))

(defn fly-to [lat lon alt crs per]
  (let [pitch (:pitch @CAMERA)
       roll (:roll @CAMERA)
       head (norm-crs (+ crs (:view @CAMERA)))]
;;  (if (> alt MAX-UPGROUND) 
;;    (fly-control lat lon alt head pitch roll per)
;;    (let [[_ _ sh] (sample-height [(geo/radians lat) (geo/radians lon)] ALT)]
;;      (if (> sh -7777)
;;        (def ALT (int (+ sh alt))))
;;      (fly-control lat lon ALT head pitch roll per))))
  (fly-control lat lon alt head pitch roll per)))

(defn init-3D-view [url]
  (go
   (println "Cesium initialisation..")
   (let [imap (<p! (js/Cesium.createWorldImageryAsync))
          terp (<p! (js/Cesium.createWorldTerrainAsync))]
     (println " 1.Image and Terrain providers set..")
     (try
       (let [viewer (js/Cesium.Viewer. "cesiumContainer" #js{
                                            :imageryProvider imap
                                            :terrainProvider terp
                                            :scene3DOnly true
                                            ;;:selectionIndicator false
                                            ;;:baseLayerPicker: false
                                            :animation false
                                            :shouldAnimate true})]
         (println " 2.Cesium Viewer created..")
         (set! (.-enableLighting (.-globe (.-scene viewer))) true)
         (println " 3.Night and Day Lightning enabled..")
         (def VIEWER viewer)
         (println " 4.VIEWER Var set..")
         (.add (.-dataSources VIEWER) CZML-SRC)
         (println " 5.CZML Data Source added..")
         (.addEventListener (js/EventSource. (str url "/czml")) "czml" cz-processor false)
         (println " 6.CZML Event Source Listener added..")
         (println [:INIT-3D-VIEW url])
         (println "Cesium initialisation done.")
         (println "777"))
      (catch js/Error err (js/console.log (ex-cause err)))))))

(defn hig-ray [lat lon bea dis step alt]
  (let [ray (geo/ray lat lon bea dis step)]
  (map #(sample-height % alt) ray)))

(defn los-end [lat lon bea dis step alt]
  (let [hir (hig-ray lat lon bea dis step alt)]
  (loop [f (first hir) r (rest hir)]
    (if (seq r)
      (let [h1 (nth f 2)
             fr (first r)
             h2 (nth fr 2)]
        (cond
          (<= h2 alt) (recur fr (rest r))
          (and (> h1 -7777) (<= h1 alt)) f
          true (first hir)))
      (if (> (nth f 2) -7777) f (first hir))))))

(defn los-sector [center sector dist alt dist-step bea-step]
  (let [[lat lon] center
       [start end] sector
       losec (for [bea (range start end bea-step)]
                  (los-end lat lon bea dist dist-step alt))]
  (cons [(geo/radians lat) (geo/radians lon) alt] losec)))

(defn get-zoom []
  ZOOM)

(defn set-zoom [z]
  (cond
  (< z ZOOM)
  (.zoomOut (.-camera VIEWER) (- ZOOM z))
  (> z ZOOM)
  (.zoomIn (.-camera VIEWER) (- z ZOOM)))
(def ZOOM (if (< z 0) 0 z)))

