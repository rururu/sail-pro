(ns http.client
(:require
  [clj-http.client :as hc]))
(defn conn []
  (def c (hc/post "http://0.0.0.0:10482" 
  {:headers {"Access-Control-Allow-Origin" "*"}})))

