(ns nmea.reciever.dvr
(:use protege.core)
(:require 
  [ring.adapter.jetty :as jetty]
  [compojure.core :refer [defroutes POST]]
  [compojure.handler :as handler]
  [compojure.route :as route]))
(def PORT 8081)
(def SERV nil)
(defn init-server []
  (defroutes app-routes
  (POST "/" req (println :REQ req))
  (route/not-found "Pro Server: Not Found!"))

(defonce APP
  (handler/site app-routes)))

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

