(ns vr.dashcli
(:use protege.core)
(:require
  [clj-telnet.core :as tn]
  [light.pro.server :as lps]
  [clj-json.core :as json]
  [wiki.gis :as wig]
  [light.cesium.core :as cz])
(:import
  ru.igis.omtab.OMT
  ru.igis.omtab.MapOb
  ru.igis.omtab.Util
  edu.stanford.smi.protege.ui.DisplayUtilities
  ru.vrd.nmea.VRdNMEAReciever
  ru.igis.omtab.gui.RuMapMouseAdapter
  dk.dma.ais.sentence.Vdm
  dk.dma.ais.message.AisMessage
  ru.igis.ais.AIVDMProcessor))
(def defTELNET (defonce TELNET nil))
(def GPRMC-TOKEN "$GPRMC")
(def END-TOKEN "\r\n")
(def defBOAT-DATA (def BOAT-DATA [0 0 0 0 0 0]))
(def RACES-URL "http://zezo.org/races2.json")
(def RMMA nil)
(def DESC-MAP {"default" "{:gltf-url \"models/piramida/scene.gltf\"}"})
(def NMEA (atom nil))
(def NMEA-FLAG true)
(def FLEET (volatile! {}))
(def ONMAP (volatile! []))
(defn round-speed [s]
  (let [s (* s 100)
       s (Math/round s)]
  (double (/ s 100))))

(defn parse-coord [c1 c2]
  (let [c (read-string c1)
      mf (- c (int c))
      dm (/ (int c) 100)
      d (int dm)
      m (int (* (- dm d) 100))
      m (+ m mf)
      d (if (or (= c2 "S") (= c2 "W")) (str "-" d) d)]
  (MapOb/getDeg (str d " " m))))

(defn get-external-data [port path]
  (VRdNMEAReciever/startServer port path) 
(Thread/sleep 30000)
(let [buf (VRdNMEAReciever/getBuffer)]
  (when (> (.capacity buf) 16)
    (reset! NMEA (.split (.toString buf) END-TOKEN))
    (VRdNMEAReciever/clearBuffer)))
(VRdNMEAReciever/stopServer 10)
(if NMEA-FLAG
  (get-external-data port path)))

(defn parse-gprmc-data [data]
  (try
(let [d (.split data ",")]
  (if (>= (count d) 10)
    (let [[_ time sts lat1 lat2 lon1 lon2 spd crs date] d]
      [time
       (parse-coord lat1 lat2)
       (parse-coord lon1 lon2)
       (round-speed (read-string spd))
       (read-string crs)
       date])))
(catch Exception e
  (println :gprmc-data :FAILURE)
  nil)))

(defn close-telnet []
  (when (some? TELNET)
  (tn/kill-telnet TELNET)
  (def TELNET nil)))

(defn diff-time? [ndata odata]
  (let [[tim1 & _] ndata
       [tim2 & _] odata]
  (not= tim1 tim2)))

(defn get-boat-data []
  (let [bdata (if (> (count @NMEA) 0)
                    (let [bd (filter #(.startsWith % GPRMC-TOKEN) @NMEA)
                           bd (parse-gprmc-data (first bd))]            
                     (when (diff-time? bd BOAT-DATA)
                       (def BOAT-DATA bd)
                       bd)))]
  bdata))

(defn srand [d]
  (- (rand (* d 2)) d))

(defn add-fleet []
  (let [f (atom
          {:b (fifos "NavOb" "label" "Bylina")
            :v (fifos "NavOb" "label" "Vela")
            :d (fifos "NavOb" "label" "Diana")
            :a (fifos "NavOb" "label" "Argo")
            :m (fifos "NavOb" "label" "Mars")})
      rus (OMT/getMapOb "russor")
      lar (.getLatitude rus)
      lor (.getLongitude rus)
      crr (.getCourse rus)
      spr (.getSpeed rus)]
  (doseq [k (keys @f)]
    (swap! f assoc k (OMT/getOrAdd (@f k))))
  (doseq [k (keys @f)]
    (.setLatitude (@f k) (+ lar (srand 0.02)))
    (.setLongitude (@f k) (+ lor (srand 0.02)))
    (.setCourse (@f k) crr)
    (.setSpeed (@f k) spr))))

(defn add-aircraft-carrier []
  (if-let [ac (fifos "NavOb" "label" "CVN-69")]
  (let [acm (OMT/getOrAdd ac)
        rus (OMT/getMapOb "russor")
        lar (.getLatitude rus)
        lor (.getLongitude rus)
        lac (+ lar (srand 0.02))
        loc (+ lor (srand 0.02))
        crs (int (rand 360))]
    (.setLatitude acm lac)
    (.setLongitude acm loc)
    (.setCourse acm crs)
    (if-let [h (fifos "NavOb" "label" "h1")]
      (let [hm (OMT/getOrAdd h)]
        (.setLatitude hm lac)
        (.setLongitude hm loc)))
    (if-let [i (fifos "NavOb" "label" "i1")]
      (let [im (OMT/getOrAdd i)
             icr (+ crs 180)
             icr (if (> icr 360) (- icr 360) icr)] 
        (.setLatitude im lac)
        (.setLongitude im loc)
        (.setCourse im icr))))))

(defn select-race [hm inst]
  (let [mp (into {} hm)
       clw (mp "clsWidget")
       rce (first (.getSelection (.getSlotWidget clw (slt "races"))))
       tpt (first (.split rce "\\."))
       tpt (+ 10000 (read-string tpt))]
  (ssv inst "selected-race" rce)))

(defn diff-view [ops vel vof vpt]
  (let [vof (keyword (clojure.string/lower-case vof))]
  (or (not= vel (ops :view-elevation))
       (not= vof (ops :view-offset))
       (not= vpt (ops :view-post)))))

(defn update-view [ops vel vof vpt]
  (let [vpt (keyword (clojure.string/lower-case vpt))]
  (println :UW vel vof vpt)
  (assoc ops :view-elevation vel
                   :view-offset vof
                   :view-post vpt)))

(defn create-nearby-boat []
  (let [onm (or @lps/ONBOARD
                  (DisplayUtilities/editString nil "Exsisting Boat Name" "" nil))
       nnm (DisplayUtilities/editString nil "New Boat Name" "" nil)]
  (if (and (some? onm) (some? nnm))
    (let [oi (fifos "NavOb" "label" onm)
          ni (foc "NavOb" "label" nnm)
          _ (ssv ni "latitude" "0 0")
          _ (ssv ni "longitude" "0 0")
          _ (ssv ni "url" (sv oi "url"))
          _ (ssv ni "description" (sv oi "description"))
          omo (OMT/getOrAdd oi)
          nmo (OMT/getOrAdd ni)
          crs (.getCourse omo)
          [lat lon] (Util/relPos (.getLatitude omo) (.getLongitude omo) crs 0.1)]
      (.setLatitude nmo lat)
      (.setLongitude nmo lon)
      (.setCourse nmo crs)
      (.setSpeed nmo (.getSpeed omo))))))

(defn load-races []
  (let [txt (slurp RACES-URL)
      mp (json/parse-string txt)
      rcs (map #(get % "id") (mp "races"))
      vrd (first (cls-instances "VRDashboardControl"))]
 (ssvs vrd "races" rcs)))

(defn show-controls []
  (.show *prj* (first (cls-instances "VRDashboardControl"))))

(defn set-wiki-coords
  ([onb]
  (if-let [mo (OMT/getMapOb onb)]
    (set-wiki-coords (.getLatitude mo) (.getLongitude mo))))
([lat lon]
  (when-let [wc (first (cls-instances "WikipediaControl"))]
    (ssv wc "lat" (float lat))
    (ssv wc "lng" (float lon)))))

(defn pum-out-place [wai lat lon vic]
  (let [tit (sv wai "title")
      la1 (sv wai "lat")
      lo1 (sv wai "lng")
      dis (MapOb/distanceNM lat lon la1 lo1)
      min-scl 0.25
      max-scl 1.25
      scl (min max-scl (- max-scl (/ dis vic)))]
  (cz/location tit scl "img/arrdn.png" la1 lo1 100 60)))

(defn add-pm-desc [wia]
  (let [tit (sv wia "title")
      fea (sv wia "feature")]
  (if-let [mo (OMT/getMapOb tit)]
    (.setDescription mo
      (or (DESC-MAP fea)
           (DESC-MAP "default"))))))

(defn set-mouse-adapter2 []
  (let [rmma (proxy [RuMapMouseAdapter] []
	(mouseRightButtonClickedOn [mo llp runa]
                            (if mo
                              (if-let [art (sv (.getInstance mo) "reference")]
                                (let [wc (first (cls-instances "WikipediaControl"))
                                      lat (sv wc "lat")
                                      lon (sv wc "lng")
                                      vic (sv wc "vicinity")]
                                  (pum-out-place art lat lon vic)
                                  (.show *prj* art))))
	  true))
       pgs (seq (OMT/getPlaygrounds))]
  (.setRuMapMouseAdapter (first pgs) rmma)
  rmma))

(defn wikipedia-scan [hm inst]
  (let [mp (into {} hm)
       lat (mp "lat")
       lon (mp "lng")
       vic (mp "vicinity")
       v (/ vic 60)
       [w s e n] [(- lon v) (- lat v) (+ lon v) (+ lat v)]]
  (if (nil? RMMA)
    (set-mouse-adapter2))
  (invoke-later
    (let [bbi (foc "BBX" "title" "Current")
           rqi (fainst (cls-instances "BBXWiki") "Current BBXWiki Request")]
      (if (and bbi rqi)
        (do
          (ssvs bbi "wsen" (vec (map float [w s e n])))
          (ssv rqi "bbx" bbi)
          (ssvs rqi "responses" [])
          (wig/submit-bbx (itm rqi 0) rqi)
          (if-let [rr (seq (svs rqi "responses"))]
            (doseq [r rr]
              (pum-out-place r lat lon vic)
              (add-pm-desc r))))
        (println "Instance of \"Current BBXWiki Request\" not found!"))))))

(defn parse-AIVDM [aivdm]
  (letfn [(to-map [s]
             (let [s (.substring s 1 (dec (count s)))
                    s (.split s " ")
                    s (remove #(.startsWith % "pos") s)
                    s (remove #(.startsWith % "=") s)
                    s (remove #(.startsWith % "(") s)
                    s (apply str s)
                    s (.replaceAll s "=" " ")
                    s (str "{" s "}")]   
               (read-string s)))]
  (if (.startsWith aivdm "!AIVDM")
    (try
      (let [vdm (Vdm.)
             _ (.parse vdm aivdm)
             mes (AisMessage/getInstance vdm)
             pos (.getValidPosition mes)
             tos (.toString mes)
             mp (to-map tos)
             mp (assoc mp 'pos [(.getLatitude pos) (.getLongitude pos)])
             imo (mp 'userId)]
        (vswap! FLEET assoc imo (merge mp (@FLEET imo))))
      (catch Exception e
        (let [lio (.lastIndexOf aivdm "*")]
          (when (= (.substring aivdm (dec lio) lio) "4")
            (AIVDMProcessor/process aivdm)
            (let [imo (AIVDMProcessor/getIMO)
                   snm (AIVDMProcessor/getShipName)]
              (vswap! FLEET assoc imo (assoc (@FLEET imo) 'name snm))) ))) ))))

(defn get-fleet-data []
  (doseq [nmea @NMEA]
  (parse-AIVDM nmea)))

(defn round-sog [sog]
  (let [s (str sog)
      s (str (.substring s 0 (dec (count s))) "." (last s))]
  (read-string s)))

(defn neighbor [nmp obm vis]
  (let [uid (nmp 'userId)
      [lat lon] (nmp 'pos)
      sog (nmp 'sog)
      cog (nmp 'cog)
      nam (nmp 'name)
      lab (or nam (str uid))
      sog (round-sog sog)
      cog (float (/ cog 10))
      dis (MapOb/distanceNM lat lon (.getLatitude obm) (.getLongitude obm))]
  (if (< dis vis)
    [lab lat lon sog cog dis])))

(defn show-neighbors [onb vis]
  (if-let [obm (OMT/getMapOb onb)]
  (if (not (empty? @FLEET))
    (let [nbs (map #(neighbor % obm vis) (vals @FLEET))
           nbs (filter some? nbs)]
      (def ONMAP (volatile! []))
      (doseq [[lab lat lon sog cog dis] nbs]
        ;;(println :NEIGHBOR lab (= lab "FRIGATE"))
        (let [nbi (foc "VRFleet" "label" lab)
               pat (fifos "NavOb" "label" "neighbor")
               frg (fifos "NavOb" "label" "frigate0")]
           (if (= lab "FRIGATE")
             (do (ssv nbi "url" (sv frg "url"))
               (ssv nbi "description" (sv frg "description")))
             (do (ssv nbi "url" (sv pat "url"))
               (ssv nbi "description" (sv pat "description"))))
          (let [nbm (OMT/getOrAdd nbi)]
            (.setLatitude nbm lat)
            (.setLongitude nbm lon)
            (.setCourse nbm (int cog))
            (if (number? sog)
              (.setSpeed nbm (double sog))))
          (vswap! ONMAP conj lab)))))))

(defn unvisible-offmap [onb]
  (doseq [no (OMT/getNavObInstances)]
  (let [nam (sv no "label")]
    (if (and (not= nam onb) 
          (not (some #{nam} @ONMAP)))
      (OMT/removeMapOb no false)))))

(defn start [hm inst]
  (let [mp (into {} hm)]
  (if-let [rce (mp "selected-race")]
    (let [tpt (first (.split rce "\\."))
          tpt (+ 10000 (read-string tpt))]
      (ssv inst "selected-race" rce)
      (ru.rules/assert-instances [inst]))
    (println "Select race before!"))))

