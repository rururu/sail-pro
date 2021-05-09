(ns http.server.java
(:import
  com.sun.net.httpserver.HttpServer
  com.sun.net.httpserver.HttpHandler
  java.net.InetSocketAddress))
(defn request-info [hex]
  (println "headers:")
  (doseq [h (.entrySet (.getRequestHeaders hex))]
    (println h))
(println "Principal:")
  (println (.getPrincipal hex))
(println "HTTP method:")
  (println (.getRequestMethod hex))
(println "query:")
  (println (.getQuery (.getRequestURI hex))))

(defn handler [http-exchange]
  (reify HttpHandler
  (handle [_ http-exchange]
    (request-info http-exchange)
    (let [resp ""
          _ (.sendResponseHeaders 204 (count resp))
          os (.getResponseBody http-exchange)]
      (.write os (.getBytes resp))
      (.close os)))))

(defn start-server [handler]
  (let [serv (HttpServer/create (InetSocketAddress. 8081) 0)
      ctx (.createContext serv "/nmea/482.3")]
  (.setHandler ctx handler)
  (.start serv)))

