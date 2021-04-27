(ns wint.client
(:require
  [ajax.core :refer (GET)]
  [cognitect.transit :as t]
  [mvo.move :as mvo]))
(def MAP nil)
(def TO-EVENTS 2000)
(def TO-MOVE 200)
(def OBJECTS (volatile! {}))
(def MOVERS (volatile! {}))
(def DATA nil)
(def T-SCALE 1.0)
(defn by-id [id]
  (.getElementById js/document id))

(defn set-html! [id html]
  (set! (.-innerHTML (by-id id)) html))

(defn read-transit [x]
  (t/read (t/reader :json) x))

(defn error-handler [resp]
  (let [{:keys [status status-text]} resp]
  (println "AJAX ERROR:" status status-text)))

(defn base-layers []
  (let [tile1 (js/L.tileLayer "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                                   #js{:maxZoom 20
                                       :attribution "Ru, OpenStreetMap &copy;"})
        tile2 (js/L.tileLayer "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
                                   #js{:maxZoom 20
                                       :subdomains #js["mt0" "mt1" "mt2" "mt3"]
                                       :attribution "Ru, Google &copy;"})
        tile3 (js/L.tileLayer "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                                   #js{:maxZoom 20
                                       :subdomains #js["mt0" "mt1" "mt2" "mt3"]
                                       :attribution "Ru, Google &copy;"})
        tile4 (js/L.tileLayer "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
                                   #js{:maxZoom 20
                                       :subdomains #js["mt0" "mt1" "mt2" "mt3"]
                                       :attribution "Ru, Google &copy;"})
        tile5 (js/L.tileLayer "http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}"
                                   #js{:maxZoom 20
                                       :subdomains #js["mt0" "mt1" "mt2" "mt3"]
                                       :attribution "Ru, Google &copy;"})]
  {"OpenStreetMap" tile1
    "Google Satellite" tile2
    "Google Streets" tile3
    "Google Hybrid" tile4
    "Google Terrain" tile5}))

(defn create-layer [lmp]
  (condp = (lmp :type)
  :Base (base-layers)
  :GeoJSON {(lmp :title) (L.GeoJSON.AJAX. (lmp :source) (clj->js (lmp :attributes)))}
  :Tile {(lmp :title) (L.tileLayer (lmp :source) (clj->js (lmp :attributes)))}
  (js/alert (str "Unknown layer class " (lmp :type)))))

(defn remove-layer [params]
  (if-let [tit (params :title)]
  (do
    (when-let [lay (@OBJECTS tit)]
      (.remove lay)
      (vswap! OBJECTS dissoc tit))
    (if-let [mov (@MOVERS tit)]
      (vswap! MOVERS dissoc mov)))))

(defn add-path [params]
  (let [{:keys [title type coord options]} params]
  (when title
    (if (@OBJECTS title)
      (remove-layer params))
    (let [ops (clj->js options)
           crd (clj->js coord)
           lay (condp = type
                   :polyline (js/L.polyline. crd ops)
                   :polygon (js/L.polygon. crd ops)
                   :rectangle (js/L.rectangle. crd ops)
                   :circle (js/L.circle. crd ops)
                   :circle-marker (js/L.circleMarker. crd ops)
                   nil)]
         (when lay
           (vswap! OBJECTS assoc title lay)
           (.addTo lay MAP))))))

(defn add-marker [params]
  (let [{:keys [title coord course speed url icon-size draggable]} params]
  (when title
    (if (@OBJECTS title)
      (remove-layer params))
    (let [[lat lon] coord
           pos (js/L.LatLng. lat lon)
           ico (js/L.icon #js{:iconUrl url :iconSize (or (clj->js icon-size) #js[32, 32])})
           ops #js{:title title
                         :icon ico 
                         :rotationAngle course
                         :rotationOrigin "center center"
                         :draggable (or (clj->js draggable) true)}
            mrk (js/L.marker. pos ops)]
       (vswap! OBJECTS assoc title mrk)
       (if speed
         (vswap! MOVERS assoc title
           (mvo/create-mover [lat lon] course speed mrk)))
       (.addTo mrk MAP)
       mrk))))

(defn add-heatmap [params]
  (let [{:keys [title data options]} params]
  (when title
    (if (@OBJECTS title)
      (remove-layer params))
    (let [data (clj->js data)
           lay (js/HeatmapOverlay. (clj->js options))]
      (def DATA data)
      (vswap! OBJECTS assoc title lay)
      (.addTo lay MAP)
      (.setData lay data)))))

(defn add-popup [params]
  (let [{:keys [lat lon html]} params
       pos (if (and lat lon)
               #js[lat lon]
               (.getCenter MAP))]
  (.addLayer MAP (-> (js/L.popup. #js{})
                             (.setLatLng pos)
                             (.setContent html)))))

(defn set-time-scale [params]
  (def T-SCALE (params :time-scale))
(mvo/set-timeout-hrs TO-MOVE T-SCALE))

(defn move-control [params]
  (let [{:keys [title coord course speed]} params]
  (when-let [mv (@MOVERS title)]
    (if coord
      (mvo/set-coord mv coord))
    (if course
      (mvo/set-course mv course))
    (if speed
      (mvo/set-speed mv speed)))))

(defn events-hr [resp]
  (doseq [{:keys [event] :as evt} (read-transit resp)]
  (println [:EVENTS-HR evt])
  (condp = event
    :path (add-path evt)
    :marker (add-marker evt)
    :popup (add-popup evt)
    :heatmap (add-heatmap evt)
    :remove (remove-layer evt)
    :time-scale (set-time-scale evt)
    :move (move-control evt)
    (js/alert "Unknown event: " [event evt]))))

(defn request-events []
  (GET "/events" {:handler events-hr
                      :error-handler error-handler})
(js/setTimeout request-events TO-EVENTS))

(defn map-hr [resp]
  (let [mp (read-transit resp)]
  (println :RMR mp)
  (if (and (map? mp) (not (empty? mp)))
    (let [lmps (apply merge (map create-layer (mp :layers)))
           flay (second (first  lmps)) 
           lctl (js/L.control.layers (clj->js lmps) nil)
           fzoom (fn [] (set-html! "zoom" (str "zoom " (.getZoom MAP))))]
      (add-heatmap {})
      (.addTo flay MAP)
      (.setView MAP (clj->js (mp :center)) (mp :zoom))
      (.addTo (js/L.control.mousePosition.) MAP)
      (.addTo lctl MAP)
      (fzoom)
      (.on MAP "zoomend" fzoom))
    (add-popup {:html (str "<h1>" mp "</h1>")}))))

(defn request-map []
  (GET "/map" {:handler map-hr
                      :error-handler error-handler}))

(defn init []
  (def MAP (js/L.map "MAP"))
(.setView MAP #js[0 0] 4)
(if (by-id "LEFT")
  (.addTo (js/L.control.sidebar "LEFT" #js{:position "left"}) MAP))
(if (by-id "RIGHT")
  (.addTo (js/L.control.sidebar "RIGHT" #js{:position "right"}) MAP))
(request-map))

(defn move-markers []
  (doseq [[n m] @MOVERS]
  (mvo/move m))
(js/setTimeout move-markers TO-MOVE))

(defn tst []
  (add-heatmap 
{:title "hm1"
  :data {:max 8 :data [
             {:lat 60 :lng 30 :value 8}
             {:lat 63 :lng 30 :value 6}
             {:lat 66 :lng 30 :value 3}
             {:lat 69 :lng 30 :value 1}]}
  :options {:scaleRadius true
                  :radius 2
                  :useLocalExtrema true}}))


(enable-console-print!)
(set! (.-onload js/window) (init))
(request-events)
(mvo/set-timeout-hrs TO-MOVE T-SCALE)
(move-markers)