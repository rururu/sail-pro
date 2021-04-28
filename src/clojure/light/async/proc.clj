(ns light.async.proc
(:require 
  [clojure.core.async :refer [chan alts!! put! <! <!! go timeout close!]]))
(defn repeater
  ([func time-out]
  (go (while true
           (func)
           (<! (timeout time-out)))))
([func param time-out]
  (go (while true
           (func param)
           (<! (timeout time-out))))))

(defn start-process [status proc-fn time-out final-fun]
  (when (not= @status "RUN") 
  (vreset! status "RUN")
  (go (do 
          (while (and (= @status "RUN")
                            (proc-fn))
                (<! (timeout time-out)))
          (if (instance? clojure.lang.IFn final-fun) (final-fun))
          (vreset! status "STOP")))
  @status))

(defn stop-process [status]
  (vreset! status "FINISH"))

(defn running? [status]
  (= @status "RUN"))

(defn pump-in [chn val]
  (put! chn val))

(defn pump-out [chn]
  (loop [[bit ch] (alts!! [chn] :default :none) bits []]
  (if (= bit :none)
    bits
    (recur (alts!! [chn] :default :none) (conj bits bit)))))

(defn one-out [chn]
  (loop [out []]
  (if (empty? out)
    (recur (<!! chn))
    out)))

(defn mk-chan []
  (chan))

(defn close-chan [chn]
  (close! chn))

(defn delayer [func time]
  (go (<! (timeout time))
  (func)))

