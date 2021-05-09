(ns nmea.reciever.vrd
(:use protege.core)
(:require 
  [ring.adapter.jetty :as jetty]
  [ring.util.response :as r]
  [compojure.core :refer [defroutes POST]]
  [compojure.handler :as handler]
  [compojure.route :as route])
(:import
  java.io.OutputStream))
(def PORT 8081)
(def SERV nil)
(defn handle [req]
  (println :REQ req)
(let [resp {:status 204}]
  (-> (r/response resp)
       (r/header "Access-Control-Allow-Origin" "*"))))

(defn init-server []
  (defroutes app-routes
  (POST "/nmea/:id" [id] (handle id))
  (route/not-found "Pro Server: Not Found!"))

(defonce APP
  (handler/site app-routes))

(extend-protocol StreamableResponseBody
  clojure.lang.PersistentArrayMap
  (write-body-to-stream [body _ ^OutputStream output-stream]
    (.write *out* ^bytes body)
    (.close output-stream))))

(defn start-server
  ([]
    (start-server PORT))
([port]
  (if (nil? SERV)
    (init-server))
  (def SERV (jetty/run-jetty APP {:port port :join? false})))
([hm inst]
  (if-let [port (sv inst "port")]
    (def PORT (read-string port)))
  (start-server)))

(defn stop-server
  ([]
  (when-let [serv SERV]
    (.stop serv)
    (def SERV nil)
    (println "Server stopped!")))
([hm inst]
  (stop-server)))

