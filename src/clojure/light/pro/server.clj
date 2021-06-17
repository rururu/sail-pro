(ns light.pro.server
(:use protege.core)
(:require [ring.adapter.jetty :as jetty]
              [ring.util.response :as r]
              [compojure.core :refer [defroutes GET]]
              [compojure.handler :as handler]
              [compojure.route :as route]
              [cognitect.transit :as t]
              [light.cesium.core :as czs]
              [clojure.core.async :as async :refer [chan alts!! put!]])
(:import [java.io 
               ByteArrayOutputStream
               ByteArrayInputStream]
             ru.igis.omtab.OMT
             edu.stanford.smi.protege.ui.DisplayUtilities
             java.awt.Desktop
             java.net.URI))
(def PORT 8448)
(def ROOT (str (System/getProperty "user.dir") "/resources/public/"))
(def SERV nil)
(def ONBOARD (volatile! nil))
(def CAMERA (volatile! 
  {:view "0"
   :pitch "0"
   :roll "0"}))
(def REQUEST (volatile! nil))
(def RESPONSE (volatile! nil))
(def defonceCLI-REPL-CHAN (defonce CLI-REPL-CHAN (chan)))
(def CLI-REPL nil)
(defn read-transit [x]
  (let [bais (ByteArrayInputStream. (.getBytes x "UTF-8"))
        r    (t/reader bais :json)]
    (.reset bais)
    (t/read r)))

(defn write-transit [x]
  (let [baos (ByteArrayOutputStream.)
        w    (t/writer baos :json)
        _    (t/write w x)
        ret  (.toString baos)]
    (.reset baos)
    ret))

(defn mp-vehicle-request []
  (if-let [onb @ONBOARD]
  (if-let [mo (OMT/getMapOb onb)]
    (let [desc (.getDescription mo)
          ops (if desc 
                  (read-string desc) 
                  {})
          p {:vehicle
               (merge ops
                 {:name onb
                  :coord [(.getLatitude mo) (.getLongitude mo)]
                  :altitude (.getAltitude mo)
                  :speed (.getSpeed mo)
                  :course (.getCourse mo)})}]
      (if-let [req @REQUEST]
        (do (vreset! REQUEST nil)
              (assoc p :request req))
        p)))))

(defn vehicle [params]
  (vreset! CAMERA params)
(-> (r/response (write-transit (deref (future-call mp-vehicle-request))))
       (r/header "Access-Control-Allow-Origin" "*")
       (r/charset "UTF-8")))

(defn view3D-in-browser []
  (let [address (str "http://localhost:" PORT)]
  (println "Location:" address)
  (when (java.awt.Desktop/isDesktopSupported)
    (.browse (java.awt.Desktop/getDesktop) (java.net.URI. address)))))

(defn response [params]
  (vreset! RESPONSE (read-transit (params :response)))
{:status 204})

(defn cli-repl [params]
  (letfn [(cli-repl-chan-out []
	(loop [[bit ch] (alts!! [CLI-REPL-CHAN] :default :none) bits []]
	    (if (= bit :none)
	      bits
	      (recur (alts!! [CLI-REPL-CHAN] :default :none) (conj bits bit)))))]
  (def CLI-REPL params)
  (let [req (deref (future (cli-repl-chan-out)))]
    ;; (println :REQ req)
    (write-transit req))))

(defn init-server []
  (defroutes app-routes
  (GET "/" [] (slurp (str ROOT "cezium_light.html")))
  (GET "/test" [] (slurp (str ROOT "test.html")))
  (GET "/czml" [] (czs/events))
  (GET "/vehicle" [& params] (vehicle params))
  (GET "/response" [& params] (response params))
  (GET "/cli-repl" [& params] (cli-repl params))
  (route/files "/" (do (println [:ROOT-FILES ROOT]) {:root ROOT}))
  (route/resources "/")
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

(defn go-onboard
  ([hm inst]
  (czs/new-doc)
  (if-let [sel (DisplayUtilities/pickInstanceFromCollection nil (OMT/getNavObInstances) 0 "Select NavOb")]
    (let [lab (sv sel "label")]
      (ssv inst "onboard" lab)
      (vreset! ONBOARD lab))))
([lab]
  (czs/new-doc)
  (when-let [inst (first (cls-instances "CeziumControl"))]
    (ssv inst "onboard" lab)
    (vreset! ONBOARD lab))))

(defn request [req wait-response]
  (vreset! REQUEST req)
(if wait-response
  (vreset! RESPONSE :WAIT)))

(defn receive-response
  ([]
  (receive-response 10))
([sec]
  (if (> sec 0)
    (if (= @RESPONSE :WAIT)
      (do (Thread/sleep 1000)
        (receive-response (dec sec)))
      @RESPONSE))))

(defn clirepl
  ([]
  (clirepl 10))
([sec]
  (if (> sec 0)
    (if (= CLI-REPL :WAIT)
      (do (Thread/sleep 1000)
        (clirepl (dec sec)))
      (read-transit (CLI-REPL :transit))))))

(defn replcli [sexp]
  ;; sexp must be string or quote
(put! CLI-REPL-CHAN {:sexp (str sexp)})
(def CLI-REPL :WAIT)
(clirepl))

(defn start-client
  ([]
  (if-let [serv SERV]
    (invoke-later (.browse (Desktop/getDesktop) (URI/create (str "http://localhost:" PORT))))))
([hm inst]
  (start-client)))

