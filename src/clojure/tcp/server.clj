(ns tcp.server
(:require 
  [clojure.java.io :as io])
(:import 
  [java.net ServerSocket]))
(def PORT 8081)
(defn receive [socket]
  ;; Read a line of textual data from the given socket
(.readLine (io/reader socket)))

(defn send [socket msg]
  ;; Send the given string message out over the given socket
(let [writer (io/writer socket)]
      (.write writer msg)
      (.flush writer)))

(defn serve [port handler]
  (let [running (atom true)]
    (future
      (with-open [server-sock (ServerSocket. port)]
        (while @running
          (with-open [sock (.accept server-sock)]
            (let [msg-in (receive sock)
                  msg-out (handler msg-in)]
              (send sock msg-out))))))
    running))

