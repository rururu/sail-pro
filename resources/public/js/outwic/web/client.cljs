(ns web.client
(:require
  [ajax.core :refer (GET)]
  [cognitect.transit :as t]))
(def MAP nil)
(defn by-id [id]
  (.getElementById js/document id))

(defn read-transit [x]
  (t/read (t/reader :json) x))

(defn error-handler [resp]
  (let [{:keys [status status-text]} resp]
  (println "AJAX ERROR:" status status-text)))

(defn request-map-hr [resp]
  (println :RMR resp (read-transit resp)))

(defn request-map []
  (GET "/map" {:handler request-map-hr
                      :error-handler error-handler}))

(defn init []
  (def MAP (js/ol.Map. #js{:target (by-id "MAP")}))
(if (by-id "LEFT")
  (.addControl MAP (js/ol.control.Sidebar. #js{:element "LEFT" :position "left"})))
(if (by-id "RIGHT")
  (.addControl MAP (js/ol.control.Sidebar. #js{:element "RIGHT" :position "right"})))
(request-map))


(enable-console-print!)
(set! (.-onload js/window) (init))