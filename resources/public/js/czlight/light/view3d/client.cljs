(ns light.view3d.client
(:require
  [cljs.js :as eva]
  [goog.string :as gstring]
  [goog.string.format]
  [cljs.core.async :refer [<! timeout close!]]
  [cognitect.transit :as t]
  [ajax.core :refer (GET)]
  [cljs.reader :as rdr]
  [light.geo.calc :as geo]
  [light.czm.core :as czm])
(:require-macros 
  [cljs.core.async.macros :refer [go]]))
(def VEHICLE (volatile! {:name "Аврора"
               :coord [60 30]
               :altitude 4000
               :speed 160
               :course 270}))
(def error-handler (fn [response]
  (let [{:keys [status status-text]} response]
    (println (str "AJAX ERROR: " status " " status-text)))))
(def CLI-REPL (volatile! 
  {:state (eva/empty-state)
   :value nil}))
(def RESPONSE (volatile! {}))
(def PORT 8448)
(def ZOOM-STEP 100)
(defn format [fmt & args]
  (apply gstring/format fmt args))

(defn repeater
  ([func time-out]
  (go (while true
           (func)
           (<! (timeout time-out)))))
([func param time-out]
  (go (while true
           (func param)
           (<! (timeout time-out))))))

(defn repeater!
  ([func time-out]
  (go (while true
           (func)
           (<! (timeout @time-out)))))
([func param time-out]
  (go (while true
           (func param)
           (<! (timeout @time-out))))))

(defn read-transit [x]
  (t/read (t/reader :json) x))

(defn by-id [id]
  (.getElementById js/document id))

(defn get-html! [id]
  (.-innerHTML (.getElementById js/document id)))

(defn set-html! [id msg]
  (set! (.-innerHTML (.getElementById js/document id)) msg))

(defn num-val [x]
  (if (number? x) x (rdr/read-string x)))

(defn viewM []
  (let [deg (num-val (get-html! "view-fld"))
      deg (if (= deg -180) 180 (dec deg))]
    (vswap! czm/CAMERA assoc :view deg)
    (set-html! "view-fld" deg)
    (set! (. (by-id "view-vals") -value) deg)))

(defn view [deg]
  (let [deg (num-val deg)]
  (when (<= -180 deg 180)
    (vswap! czm/CAMERA assoc :view deg)
    (set-html! "view-fld" deg))))

(defn viewP []
  (let [deg (num-val (get-html! "view-fld"))
      deg (if (= deg 180) -180 (inc deg))]
    (vswap! czm/CAMERA assoc :view deg)
    (set-html! "view-fld" deg)
    (set! (. (by-id "view-vals") -value) deg)))

(defn pitch [deg]
  (let [deg (num-val deg)]
  (when (<= -90 deg 90)
    (vswap! czm/CAMERA assoc :pitch deg)
    (set-html! "pitch-fld" deg))))

(defn roll [deg]
  (let [deg (num-val deg)]
  (when (<= -180 deg 180)
    (vswap! czm/CAMERA assoc :roll deg)
    (set-html! "roll-fld" deg))))

(defn zoom-format [m]
  (format "%.1f km" (/ m 1000)))

(defn zoomP []
  (let [v (num-val (czm/get-zoom))
      v (+ v ZOOM-STEP)]
  (czm/set-zoom v)
  (set-html! "zoom-val" (zoom-format v))
  (set! (. (by-id "zoom-slv") -value) v)))

(defn zoomM []
  (let [v (num-val (czm/get-zoom))
      v (- v ZOOM-STEP)
      v (if (< v 0) 0 v)]
    (czm/set-zoom v)
    (set-html! "zoom-val" (zoom-format v))
    (set! (. (by-id "zoom-slv") -value) v)))

(defn zoom_amount [amount]
  (let [v (num-val amount)]
  (czm/set-zoom v)
  (set-html! "zoom-val" (zoom-format v))))

(defn response-request []
  (let [resp @RESPONSE]
  (when (not (empty? resp))
    (GET "/response"
	{:params {:response
                             (try
                               (t/write (t/writer :json) resp)
                               (catch js/Error e
                                 (t/write (t/writer :json) :NOT-TRANSIT)))}
                         :error-handler error-handler})
    (vreset! RESPONSE {}))))

(defn handle-request [request]
  (if-let [vie (:view request)]
  (view vie))
(if-let [pit (:pitch request)]
  (pitch pit))
(if-let [rol (:roll request)]
  (roll rol))
(if-let [[lat lon] (:elevation request)]
  (let [[_ _ sh] (czm/sample-height [(geo/radians lat) (geo/radians lon)] 0)]
    (vswap! RESPONSE assoc :elevation (int sh))))
(response-request))

(defn handle-vehicle [vehicle]
  (let [[lat lon] (:coord vehicle)
       alt (:altitude vehicle)
       vev (:view-elevation @VEHICLE)
       crs (:course vehicle)
       head (czm/norm-crs (+ crs (:view @czm/CAMERA)))]
  (vswap! VEHICLE merge vehicle)
  (set-html! "onboard-fld" (:name vehicle))
  (set-html! "name-fld" (:name vehicle))
  (set-html! "latitude-fld" (format "%.3f" (first (:coord vehicle))))
  (set-html! "longitude-fld" (format "%.3f" (second (:coord vehicle))))
  (set-html! "course-fld" (:course vehicle))
  (set-html! "speed-fld" (:speed vehicle))
  (set-html! "altitude-fld" czm/ALT)
  (set-html! "view-dir" (geo/rumb head))
  (if (= czm/ZOOM 0)
    (czm/fly-to lat lon (+ alt vev) crs 5))))

(defn vehicle-hr [response]
  (let [resp (read-transit response)]
  ;; (println :V-RESP resp)
  (if-let [vehicle (:vehicle resp)]
    (handle-vehicle vehicle))
  (if-let [request (:request resp)]
    (handle-request request))))

(defn receive-vehicle []
  (GET "/vehicle" {:params @czm/CAMERA
                         :handler vehicle-hr
                         :error-handler error-handler}))

(defn elev [vev]
  (vswap! VEHICLE assoc :view-elevation (num-val vev)))

(defn left-controls []
  (set-html! "camera" "<h4>Camera</h4>")
(set-html! "onboard" "Onboard:")
(set-html! "onboard-fld" "")
(set-html! "elev" "Elevation:")
(set-html! "elev-fld" 
  "<input value='4' style='width:100px' id='input-elev'
                     onchange='javascript:light.view3d.client.elev(this.value)'>")
(set-html! "roll" "Roll:")
(set-html! "roll-fld" 0)
(set-html! "roll-sld" 
  "<input type='range' style='width:200px' id='roll-vals'
               min='-180' value='0' max='180'
               oninput='javascript:light.view3d.client.roll(this.value)'>")
(set-html! "pitch" "Pitch:")
(set-html! "pitch-fld" 0)
(set-html! "pitch-sld" 
  "<input type='range' style='width:200px' id='pitch-vals'
               min='-90' value='0' max='90'
               oninput='javascript:light.view3d.client.pitch(this.value)'>")
(set-html! "view" "View:")
(set-html! "view-fld" 0)
(set-html! "view-sld" 
  "<input type='range' style='width:200px' id='view-vals'
               min='-180' value='0' max='180'
               oninput='javascript:light.view3d.client.view(this.value)'>")
(set-html! "viewM-btn" 
  "<button onclick='javascript:light.view3d.client.viewM()'>view-</button>")
(set-html! "viewP-btn" 
  "<button onclick='javascript:light.view3d.client.viewP()'>view+</button>"))

(defn right-controls []
  (set-html! "vehicle" "<h4>Vehicle</h4>")
(set-html! "name" "Name:")
(set-html! "name-fld" "")
(set-html! "latitude" "Latitude:")
(set-html! "latitude-fld" "")
(set-html! "longitude" "Longitude:")
(set-html! "longitude-fld" "")
(set-html! "course" "Course:")
(set-html! "course-fld" "")
(set-html! "speed" "Speed:")
(set-html! "speed-fld" "")
(set-html! "altitude" "Altitude:")
(set-html! "altitude-fld" ""))

(defn middle-controls []
  (set-html! "binocular" "<h4>Binocular</h4>")
(set-html! "zoom-sld" 
  "<input type='range' style='width:200px' id='zoom-slv'
               min='0' value='0' max='40000'
               oninput='javascript:light.view3d.client.zoom_amount(this.value)'>")
(set-html! "zoom-val" "0 m")
(set-html! "zoomM" 
  "<button onclick='javascript:light.view3d.client.zoomM()'>-</button>")
(set-html! "zoomP" 
  "<button onclick='javascript:light.view3d.client.zoomP()'>+</button>"))

(defn show-controls []
  (right-controls)
(left-controls)
(middle-controls))

(defn on-load []
  (czm/init-3D-view (str "http://localhost:" PORT))
(repeater receive-vehicle 4000)
(show-controls))

(defn run-repl []
  ;; (:require [cljs.js :as eva]
;;               [ajax.core :refer (GET)])
(letfn [(result [res]
            (println res)
            (vswap! CLI-REPL assoc :value (res :value)))
          (evaluate [source]
	(eva/eval-str (@CLI-REPL :state)
		source 
		nil 
		{:eval eva/js-eval :context :expr}
		result))
          (hand [response]
	(when-let [req (first (read-transit response))]
	  (println req)
	  (if-let [sexp (:sexp req)]
 	   (evaluate sexp))))]
  (GET "/cli-repl" {:params {:transit
                             (try
                               (t/write (t/writer :json) (@CLI-REPL :value))
                               (catch js/Error e
                                 (t/write (t/writer :json) :NOT-TRANSIT)))}
                            :handler hand
	    :error-handler error-handler})
  (js/setTimeout run-repl 1000)))

(defn tst []
  (set! (.-depthTestAgainstTerrain (.-globe (.-scene czm/VIEWER))) true)
(println :D (.-depthTestAgainstTerrain (.-globe (.-scene czm/VIEWER))))
(let [ppc (js/Cesium.PointPrimitiveCollection. #js{
              :heightReference js/Cesium.HeightReference.CLAMP_TO_GROUND})
       lla [[61.6 7.5][61.61 7.51][61.6 7.52]]
       clr js/Cesium.Color.YELLOW
       size 10
       prims (.add (.-primitives (.-scene czm/VIEWER)) ppc)]
  (js/fillPointPrimColl prims (clj->js lla) clr size)))


(enable-console-print!)
(set! (.-onload js/window) (on-load))