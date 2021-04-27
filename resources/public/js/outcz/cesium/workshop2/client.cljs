(ns cesium.workshop2.client
(:require 
  [cesium.client :refer
    [add-imagery-by-asset-id
     add-terrain
     camera-home
     clock-settings
     load-data
     start-event-processing
     VIEWER
     CLOCK
     SCENE
     CAMERA
     CANVAS
     HOME-VIEW
     CLOCK-SET
     CZML-DS
     KML-DS
     EVENT-URL
     EVENT-DEBUG]]))
(def W2-HOME-VIEW {:longitude -73.998114468289017509
  :latitude 40.674512895646692812
  :height 2631.082799425431
  :heading 7.1077496389876024807
  :pitch -31.987223091598949054
  :roll 0.025883251314954971306})
(def W2-CLOCK-SET {:animate true
  :start "2017-07-11T16:00:00Z"
  :stop "2017-07-11T16:20:00Z"
  :current "2017-07-11T16:00:00Z"
  :mult 2})
(def Neighborhoods (.add (.-entities VIEWER) (js/Cesium.Entity.)))
(def PEPIC nil)
(defn kml-adjustment [ds]
  (.add (.-dataSources VIEWER) ds)
(let [vals (.-values (.-entities ds))
       ebbs (filter #(js/Cesium.defined (.-billboard %)) vals)]
  (doseq [ebb ebbs]
    (set! (.-verticalOrigin (.-billboard ebb)) js/Cesium.VerticalOrigin.BOTTOM)
    (set! (.-label ebb) nil)
    (set! (.-distanceDisplayCondition (.-billboard ebb)) (js/Cesium.DistanceDisplayCondition. 10.0 20000.0))
    ;; Infobox modification
    (let [pos (.getValue (.-position ebb) (js/Cesium.JulianDate.now))
           pos (js/Cesium.Cartographic.fromCartesian pos)
           lat (js/Cesium.Math.toDegrees (.-latitude pos))
           lon (js/Cesium.Math.toDegrees (.-longitude pos))
           desc (str "<table class=\"cesium-infoBox-defaultTable cesium-infoBox-defaultTable-lighter\"><tbody>"
                          "<tr><th>Longitude</th><td>" (.toFixed lon 5) "</td></tr>"
                          "<tr><th>Latitude</th><td>" (.toFixed lat 5) "</td></tr>"
                          "</tbody></table>")]
      (set! (.-description ebb) desc)))))

(defn geojson-adjustment [ds]
  (.add (.-dataSources VIEWER) ds)
(let [vals (.-values (.-entities ds))
       epls (filter #(js/Cesium.defined (.-polygon %)) vals)]
  (doseq [epl epls]
    (set! (.-name epl) (.-neighborhood (.-properties epl)))
    (set! (.-material (.-polygon epl)) (js/Cesium.Color.fromRandom #js{:red 0.1
                                                                                                            :maximumGreen 0.5
                                                                                                            :minimumBlue 0.5
                                                                                                            :alpha 0.6}))
    (set! (.-classificationType (.-polygon epl)) js/Cesium.ClassificationType.TERRAIN)
    (let [poss (.-positions (.getValue (.-hierarchy (.-polygon epl)) (js/Cesium.JulianDate.now)))
           cntr (.-center (js/Cesium.BoundingSphere.fromPoints poss))
           cntr (js/Cesium.Ellipsoid.WGS84.scaleToGeodeticSurface cntr)]
      (set! (.-position epl) cntr)
      (set! (.-parent epl) Neighborhoods)
      (set! (.-label epl) #js{:text (.-name epl)
                                        :showBackground true
                                        :scale 0.6
                                        :horizontalOrigin js/Cesium.HorizontalOrigin.CENTER
                                        :verticalOrigin js/Cesium.VerticalOrigin.BOTTOM
                                        :distanceDisplayCondition (js/Cesium.DistanceDisplayCondition. 10.0 8000.0)
                                        :disableDepthTestDistance 100.0})))))

(defn camera-modes [entity]
  (let [fme (.getElementById js/document "freeMode")
       dme (.getElementById js/document "droneMode")
       cmf (fn [e]
                (if (.-checked dme)
                  (set! (.-trackedEntity VIEWER) entity)
                  (do (set! (.-trackedEntity VIEWER) nil)
                    (.flyTo CAMERA W2-HOME-VIEW))))]
  (.addEventListener fme "change" cmf)
  (.addEventListener dme "change" cmf)
  (.addEventListener (.-trackedEntityChanged VIEWER)
    (fn [e]
      (when (= (.-trackedEntity VIEWER) entity)
        (set! (.-checked fme) false)
        (set! (.-checked dme) true))))))

(defn drone-flight [drone]
  (camera-modes drone)
(let [dpos (.-position drone)]
  (set! (.-model drone) #js{:uri "models/drone/CesiumDrone.gltf"
                                           :minimumPixelSize 128
                                           :maximumScale 1000
                                           :silhouetteColor js/Cesium.Color.WHITE
                                           :silhouetteSize 2})
  (set! (.-orientation drone) (js/Cesium.VelocityOrientationProperty. dpos))
  (.setInterpolationOptions dpos #js{:interpolationDegree 3
                                                          :interpolationAlgorithm js/Cesium.HermitePolynomialApproximation})))

(defn add-3D-tileset [id]
  (let [city (.add (.-primitives SCENE) 
                       (js/Cesium.Cesium3DTileset. #js{:url (js/Cesium.IonResource.fromAssetId id)}))
       load-indi (.getElementById js/document "loadingIndicator")
       sty-default (js/Cesium.Cesium3DTileStyle. #js{:color "color('white')"
                                                                              :show true})
       sty-transp (js/Cesium.Cesium3DTileStyle. #js{:color "color('white', 0.3)"
                                                                              :show true})
       sty-height (js/Cesium.Cesium3DTileStyle. 
                           (clj->js{:color 
                                        {:conditions
                                          [["${height} >= 300" "rgba(45, 0, 75, 0.5)"]
                                           ["${height} >= 200" "rgb(102, 71, 151)"]
                                           ["${height} >= 100" "rgb(170, 162, 204)"]
                                           ["${height} >= 50" "rgb(224, 226, 238)"]
                                           ["${height} >= 25" "rgb(252, 230, 200)"]
                                           ["${height} >= 10" "rgb(248, 176, 87)"]
                                           ["${height} >= 5" "rgb(198, 106, 11)"]
                                           ["true" "rgb(127, 59, 8)"]]}}))
       tile-sty (.getElementById js/document "tileStyle")
       hoff -32]
  (set! (.-display (.-style load-indi)) "block")
  (.then (.-readyPromise city) (fn [ts]
                                                (set! (.-display (.-style load-indi)) "none")
                                                (let [bds (.-boundingSphere ts)
                                                       crt (js/Cesium.Cartographic.fromCartesian (.-center bds))
                                                       poss (js/Cesium.Cartesian3.fromRadians (.-longitude crt) (.-latitude crt) 0.0)
                                                       poso (js/Cesium.Cartesian3.fromRadians (.-longitude crt) (.-latitude crt) hoff)
                                                       trans (js/Cesium.Cartesian3.subtract poso poss (js/Cesium.Cartesian3.))]
                                                   (set! (.-modelMatrix ts) (js/Cesium.Matrix4.fromTranslation trans)))))
  (set! (.-style city) sty-default)
  (.addEventListener tile-sty "change" (fn [e]
                                                             (condp = (.-value (.item (.-options tile-sty) (.-selectedIndex tile-sty)))
                                                               "none" (set! (.-style city) sty-default)
                                                               "height" (set! (.-style city) sty-height)
                                                               "transparent" (set! (.-style city) sty-transp))))))

(defn mouse-interactivity []
  (letfn [(input-action [mov]
             (let [ppic (.pick SCENE (.-endPosition mov))
                    epic (if (js/Cesium.defined ppic) (.-id ppic))]
               (when (js/Cesium.defined PEPIC)
                 (set! (.-scale (.-billboard PEPIC)) 1.0)
                 (set! (.-color (.-billboard PEPIC)) js/Cesium.Color.WHITE))
               (when (and (js/Cesium.defined epic) (js/Cesium.defined (.-billboard epic)))
                 (set! (.-scale (.-billboard epic)) 2.0)
                 (set! (.-color (.-billboard epic)) js/Cesium.Color.ORANGERED)
                 (def PEPIC epic))))]
  (let [hand (js/Cesium.ScreenSpaceEventHandler. CANVAS)]
    (.setInputAction hand input-action js/Cesium.ScreenSpaceEventType.MOUSE_MOVE))))

(defn extras []
  (let [nbe (.getElementById js/document "neighborhoods")
       she (.getElementById js/document "shadows")]
  (.addEventListener nbe "change" 
    (fn [e]
       (set! (.-show Neighborhoods) (.-checked (.-target e)))))
  (.addEventListener she "change" 
    (fn [e]
       (set! (.-shadows VIEWER) (.-checked (.-target e)))))))

(defn init-workshop2-client []
  ;;;; Adding Imagery ::::

(add-imagery-by-asset-id 3954 VIEWER)

;;;; Adding Terrain ::::

(add-terrain #js{:requestWaterMask true
                           :requestVertexNormals true}
                    VIEWER)

;;;; Camera Control ::::

(camera-home CAMERA W2-HOME-VIEW)

;;;; Clock Control ::::

(clock-settings CLOCK W2-CLOCK-SET VIEWER)

;;;; Load Billboards from KML Source ::::

(load-data :KML "data/sampleGeocacheLocations.kml" 
                         #js{:camera CAMERA
                                :canvas CANVAS
                                :clampToGround true}
                          VIEWER
                          kml-adjustment)

;;;; Load Polygons from GeoJSON Source ::::

(load-data :GeoJSON "data/sampleNeighborhoods.geojson" 
                                 #js{:clampToGround true}
                                 VIEWER
                                 geojson-adjustment)

;;;; Drone Flight with Path from CZML Source ::::

(load-data :CZML "data/sampleFlight.czml" 
                            nil 
                            VIEWER 
                            #(drone-flight (.getById (.-entities %) "Aircraft/Aircraft1")))

;;;; City 3D Tileset ::::

(add-3D-tileset 75343)

;;;; Mouse Interactivity ::::

(mouse-interactivity)

;;;; Camera Modes ::::

;; function "camera-modes" added in function "drone-flight"

;;;; Extras ;;;;

(extras))


(enable-console-print!)
(set! (.-onload js/window) (init-workshop2-client))