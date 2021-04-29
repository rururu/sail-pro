(ns light.cesium.core
(:require
    [ring.util.response :as r]
    [light.async.proc :as asp]
    [clojure.data.json :as json])
(:import java.util.Calendar))

(def defo-CZ-CHAN (defonce CZ-CHAN (asp/mk-chan)))
(def DOC-SENT false)
(def BASE-URL "")
(def IMG-PATH "img/")
(defn icon-file [url]
  (if (and (string? url) (not (empty? url)))
  (last (seq (.split url "/")))))

(defn send-event [typ dat]
  (asp/pump-in CZ-CHAN [typ (.trim dat)]))

(defn events []
  (let [evt-hr (fn [[typ dat]]
                   (str "event: " typ "\ndata: " dat "\n\n"))
       ee (deref (future (asp/pump-out CZ-CHAN)))
       resp (if (seq ee)
                 (apply str (map evt-hr ee))
                 "")]
  (-> (r/response resp)
         (r/header "Access-Control-Allow-Origin" "*")
         (r/header "Content-Type" "text/event-stream;charset=utf-8"))))

(defn iso8601curt []
  (let [cld (Calendar/getInstance)
       yar (.get cld Calendar/YEAR )
       mon (inc (.get cld Calendar/MONTH))
       dat (.get cld Calendar/DATE)
       hor (.get cld Calendar/HOUR_OF_DAY)
       min (.get cld Calendar/MINUTE)
       sec (.get cld Calendar/SECOND)]
    (format "%04d-%02d-%02dT%02d:%02d:%02dZ" yar mon dat hor min sec)))

(defn iso8601futt [sec]
  (let [cld (Calendar/getInstance)
       mil (.getTimeInMillis cld)
       _ (.setTimeInMillis cld (+ mil (* sec 1000)))
        yar (.get cld Calendar/YEAR )
        mon (inc (.get cld Calendar/MONTH))
        dat (.get cld Calendar/DATE)
        hor (.get cld Calendar/HOUR_OF_DAY)
        min (.get cld Calendar/MINUTE)
        sec (.get cld Calendar/SECOND)]
    (format "%04d-%02d-%02dT%02d:%02d:%02dZ" yar mon dat hor min sec)))

(defn doc
  ([]
  (json/write-str {:id "document" :version "1.0"}))
([iso]
  (json/write-str {:id "document" :version "1.0" :clock {:currentTime iso}})))

(defn send-doc
  ([]
  (send-doc (doc)))
([doc]
  (send-event "czml" doc)
  (def DOC-SENT true))
([_ iso]
  (send-event "czml" (doc iso))
  (def DOC-SENT true)))

(defn send-doc-curt []
  (send-doc (doc (iso8601curt))))

(defn location [label scale img-url lat lon alt span-sec]
  (let [p {:id label
           :availability (str (iso8601curt) "/" (iso8601futt span-sec))
           :label {:scale scale
                     :pixelOffset {:cartesian2 [8, -24]}
                     :text label}
           :billboard {:scale scale
                            :image img-url}
           :position {:cartographicDegrees [lon lat alt]}}]
  (if (not DOC-SENT)
    (send-doc-curt))
  (send-event "czml" (json/write-str p))))

(defn billboard-leg [label lab-scl lab-off img-url bil-scl bil-rot [tim1 lon1 lat1 alt1] [tim2 lon2 lat2 alt2]]
  (let [p {:id label
           :label {:scale lab-scl
                     :pixelOffset {:cartesian2 lab-off}
                     :heightReference "RELATIVE_TO_GROUND"
                     :text label}
           :billboard {:scale bil-scl
                            :heightReference "RELATIVE_TO_GROUND"
                            :verticalOrigin "BOTTOM"
                            :rotation bil-rot
                            :image img-url}
           :position {:cartographicDegrees [tim1 lon1 lat1 alt1 tim2 lon2 lat2 alt2]}}]
  (if (not DOC-SENT)
    (send-doc-curt))
  (send-event "czml" (json/write-str p))))

(defn point-out [txt [lat lon] dist max-dist]
  (let [min-scl 0.25
       scl (+ min-scl (* (- 1 min-scl) (- 1 (/ dist max-dist))))]
  (location txt scl "img/arrdn.png" lat lon 100 40)))

(defn new-doc []
  (def DOC-SENT false))

(defn base-url [url]
  (def BASE-URL url))

(defn dec16 [hex]
  (vec (map (fn [[x y]] (Integer/parseInt (str x y) 16)) (partition 2 hex))))

(defn dome [label lab-scl lab-off [x y z] lin-color transp [tim1 lon1 lat1 alt1] [tim2 lon2 lat2 alt2]]
  (let [[a r g b] (dec16 lin-color)
       p {:id label
           :label {:scale lab-scl
                     :pixelOffset {:cartesian2 lab-off}
                     :text label}
           :ellipsoid {:show  true
                           :radii {:cartesian [x y z]}
                           :material {:grid {:color {:rgba [r g b a]}
                                                    :lineCount {:cartesian2 [16, 16]}
                                                    :cellAlpha transp}}}
           :position {:cartographicDegrees [tim1 lon1 lat1 alt1 tim2 lon2 lat2 alt2]}}]
  (if (not DOC-SENT)
    (send-doc-curt))
  (send-event "czml" (json/write-str p))))

(defn billboard-rotation [nmo omo]
  (let [ncrs (.getCourse nmo)]
  (if (< (.getSpeed nmo) 0.1)
  0
  (let [bon (.bearingsDeg omo nmo)
         oons (or (< bon 90) (> bon 270))
         dir (if oons
                (cond
                  (= ncrs 0) (if (< bon 180) :LE :RI)
                  (= ncrs 180) (if (< bon 180) :RI :LE)
                  (< ncrs 180) :RI 
                  true :LE)
                (cond
                  (= ncrs 0) (if (< bon 180) :RI :LE)
                  (= ncrs 180) (if (< bon 180) :LE :RI)
                  (< ncrs 180) :LE
                  true :RI))]
    (condp = dir
      :LE 1.57
      :RI 4.71)))))

(defn model-leg [label lab-scl lab-off gltf-url mod-scl [tim1 lon1 lat1 alt1] [tim2 lon2 lat2 alt2]]
  (let [p {:id label
           :label {:text label
                     :scale lab-scl
                     :pixelOffset {:cartesian2 lab-off}}
           :model {:gltf gltf-url
                       :heightReference "RELATIVE_TO_GROUND"
                       :scale mod-scl}
           :orientation {:velocityReference "#position"}
           :position {:interpolationAlgorithm "LINEAR"
                           :forwardExtrapolationType "HOLD"
                           :cartographicDegrees [tim1 lon1 lat1 alt1 tim2 lon2 lat2 alt2]}}]
  (if (not DOC-SENT)
    (send-doc-curt))
  (send-event "czml" (json/write-str p))))

(defn trace4d [no sec ops]
  (let [drf (or (ops :draft) 0)
       lat1 (.getLatitude no)
       lon1 (.getLongitude no)
       alt1 (- (.getAltitude no) drf)
       crs (.getCourse no)
       spd (.getSpeed no)
       vsd (.getVerticalSpeed no)
       dis (double (/ (* spd sec) 3600))
       [lat2 lon2] (seq (.position no (double crs) dis))
       alt2 (+ alt1 (* vsd sec))
       tim1 (iso8601curt)
       tim2 (iso8601futt sec)]
  [[tim1 lon1 lat1 alt1] [tim2 lon2 lat2 alt2]]))

(defn navob-leg
  ([no dis sec ops]
  (let [[c4d1 c4d2] (trace4d no sec ops)]
    (navob-leg no dis c4d1 c4d2 ops)))
([no dis c4d1 c4d2 ops]
  (let [lab (.getName no)
         gltf-url (ops :gltf-url)
         mod-scl (or (ops :model-scale) 1.0)
         lab-scl (or (ops :label-scale) 0.5)
         lab-off (or (ops :label-offset) [0.0 -40.0])]
    (if gltf-url 
      (model-leg lab lab-scl lab-off gltf-url mod-scl c4d1 c4d2)
      (let [url (.getURL no)
             bil (or (ops :billboard) (icon-file url) "no.png")
             bil (str BASE-URL IMG-PATH bil)
             bil-scl (or (ops :billboard-scale) 1.0)
             vis (or (ops :visibility) 4.0)
             bil-scl (if (> dis 0) 
                          (min (* 2 bil-scl) (* bil-scl 0.1 (/ vis dis)))
                          bil-scl)
             bil-rot (or (ops :billboarg-rotation) 0)]
        (billboard-leg lab lab-scl lab-off bil bil-scl bil-rot c4d1 c4d2))))))

(defn llp-czcoords [llp alt pts?]
  (if pts?
  (let [cpts (map #(list (second %) (first %) alt) llp)]
    (vec (flatten cpts)))
  (let [degs (map #(Math/toDegrees %) llp)
         pts (partition 2 degs)]
    (llp-czcoords pts alt true))))

(defn path [id [from to] wid color points]
  ;; from, to - sec after (before, if negative) current time
(let [[a r g b] (dec16 color)
        fiso (iso8601futt from)
        tiso (iso8601futt to)
        N (count points)
        step (/ (- to from) N)
        reso (inc (max step 1))
        pts (vec (flatten (map #(cons %1 %2) (range N) points)))
        p {:id id
            :availability (str fiso "/" tiso)
            :path {:width wid
                      :material {:solidColor {:color {:rgba [r g b a]}}}
                      :resolution reso}
            :position {:interpolationAlgorithm "LINEAR"
                            :epoch fiso
                            :cartographicDegrees pts}}]
  (if (not DOC-SENT)
    (send-doc-curt))
  (send-event "czml" (json/write-str p))))

(defn polyline [id from-to llp alt wid color name pts?]
  ;; from, to - sec after (before, if negative) current time
(let [[a r g b] (dec16 color)
        pts (llp-czcoords llp alt pts?)
        p {:id id
            :name name
            :polyline {:width wid
                           :material {:solidColor {:color {:rgba [r g b a]}}}
                           :clampToGround (= alt 0)
                           :positions {:cartographicDegrees pts}}}
        p (if-let [[from to] from-to]
             (assoc p :availability (str (iso8601futt from) "/" (iso8601futt to)))
             p)]
  (if (not DOC-SENT)
    (send-doc-curt))
  (send-event "czml" (json/write-str p))))

(defn polygon [id from-to llp alt wid color fill name pts?]
  ;; from, to - sec after (before, if negative) current time
(let [[a r g b] (dec16 color)
        pts (llp-czcoords llp alt pts?)
        p {:id id
            :name name
            :polygon {:outline true
                           :outlineWidth wid
                           :outlineColor {:rgba [r g b a]}
                           :material {:solidColor {:color {:rgba
                             (let [[a r g b] (or (if fill (dec16 fill)) (dec16 "00000000"))]	                               [r g b a])}}}
                           :perPositionHeight true
                           :positions {:cartographicDegrees pts}}}
        p (if-let [[from to] from-to]
             (assoc p :availability (str (iso8601futt from) "/" (iso8601futt to)))
             p)]
  (if (not DOC-SENT)
    (send-doc-curt))
  (send-event "czml" (json/write-str p))))

(defn circle [id from-to [cla clo] radm alt wid color fill name]
  ;; radius, height - meters
(let [[a r g b] (dec16 color)
        p {:id id
            :name name
            :ellipse {:semiMinorAxis radm
                         :semiMajorAxis radm
                         :height alt
                         :material {:solidColor {:color {:rgba
                           (let [[a r g b] (or (if fill (dec16 fill)) (dec16 "00000000"))]	                             [r g b a])}}}
                         :outline true
                         :outlineWidth wid
                         :outlineColor {:rgba [r g b a]}}
            :position {:cartographicDegrees [clo cla alt]}}
        p (if-let [[from to] from-to]
             (assoc p :availability (str (iso8601futt from) "/" (iso8601futt to)))
             p)]
  (if (not DOC-SENT)
    (send-doc-curt))
  (send-event "czml" (json/write-str p))))

(defn delete [id]
  (let [p {:id id
           :delete true}]
  (if (not DOC-SENT)
    (send-doc-curt))
  (send-event "czml" (json/write-str p))))

