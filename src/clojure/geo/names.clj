(ns geo.names
(:use 
  protege.core
  clojure.xml)
(:import java.net.URL)
(:gen-class :load-impl-ns false))
(def ^:dynamic *ocean-url* "http://api.geonames.org/ocean")
(def ^:dynamic *country-code-url* "http://api.geonames.org/countryCodeXML")
(def ^:dynamic *country-info-url* "http://ws.geonames.org/countryInfo")
(def ^:dynamic *nearby-url* "http://api.geonames.org/findNearby")
(def ^:dynamic *ext-nearby-url* "http://api.geonames.org/extendedFindNearby")
(def ^:dynamic *wiki-bbx* "http://api.geonames.org/wikipediaBoundingBox")
(def ^:dynamic *wiki-nearby* "http://api.geonames.org/findNearbyWikipedia")
(def ^:dynamic *wiki-search* "http://api.geonames.org/wikipediaSearch")
(def ^:dynamic *rss-georss* "http://api.geonames.org/rssToGeoRSS")
(def ^:dynamic *elev30-url* "http://api.geonames.org/astergdemXML")
(def ^:dynamic *nearby-pois-osm* "http://api.geonames.org/findNearbyPOIsOSM")
(def ^:dynamic *weather-url* "http://api.geonames.org/findNearByWeather")
(def ^:dynamic *username* "liikalanjoki")
(def ^:dynamic *strm3-url* "http://api.geonames.org/srtm3")
(def ^:dynamic *gtopo30* "http://api.geonames.org/gtopo30")
(def ^:dynamic *hierarchy-url* "http://api.geonames.org/hierarchy")
(def ^:dynamic *pois-osm-url* "http://api.geonames.org/findNearbyPOIsOSM")
(def ^:dynamic *search-url* "http://api.geonames.org/search")
(defn map-into-inst [mp inst]
  (doseq [[k v] mp]
   (if (slt k)
       (ssv inst k v)))
inst)

(defn xml-to-map [xml]
  (let [cnt (:content xml)
       keys (map #(name (:tag %)) cnt)
       vals (map #(first (:content %)) cnt)]
  (apply hash-map (interleave keys vals))))

(defn ws-map-list [url]
  ; Get list of maps from url returning collection of entries
(try
  (if-let [xml (parse url)]
    (if-let [all (:content xml)]
       (filter #(not (empty? %)) (map xml-to-map all)) ))
  (catch Exception e
    (ctpl e)
    ())))

(defn rss-item-map-list [url]
  ; Get list of maps from url returning collection of entries
(try
  (if-let [xml (parse url)]
    (if-let [tags (:content (first (:content xml)))]
       (if-let [items (seq (filter #(= (:tag %) :item) tags))]
           (filter #(not (empty? %)) (map xml-to-map items)))
       (do (println ["rss-item-map-list:" xml]) nil)))
  (catch Exception e
    (ctpl e)
    ())))

(defn bearing [lat1 lon1 lat2 lon2]
  (let [phi1 (Math/toRadians lat1)
       lam1 (Math/toRadians lon1)
       phi2 (Math/toRadians lat2)
       lam2 (Math/toRadians lon2)
       ldiff (- lam2 lam1)
       cosp2 (Math/cos phi2)
       cosin (* (Math/cos phi1)(Math/sin phi2))
       sicos (* (Math/sin phi1) cosp2 (Math/cos ldiff))
       diff2 (- cosin sicos)
       cosil (* cosp2 (Math/sin ldiff))
       azrad (Math/atan2 cosil diff2)
       azdeg (Math/toDegrees azrad)]
  (cond
    (< azdeg 0)(+ azdeg 360)
    (> azdeg 360)(- azdeg 360)
    true  azdeg)))

(defn direction [bear]
  (condp > bear
    22.5 "north"
    67.5 "north-east"
  112.5 "east"
  157.5 "south-east"
  202.5 "south"
  247.5 "south-west"
  292.5 "west"
  337.5 "north-west"
  "north"))

(defn call-geonames-search [mp]
  ;; mp - parameters map 
;; see http://www.geonames.org/export/geonames-search.html
(let [url (str *search-url* "?username=" *username*
              (apply str (for [[k v] (seq mp)] (str "&" (name k) "=" v))))]
 (try
   (if-let [xml (clojure.xml/parse url)]
      (map xml-to-map (rest (:content xml))) )
 (catch Exception e
   (ctpl e)
   nil))))

(defn call-geonames-ocean [lat lng]
  ; Get ocean from Geonames Web Service
(let [url (str *ocean-url* "?lat=" lat "&lng=" lng "&username=" *username*)]
 (try
  (if-let [xml (clojure.xml/parse url)]
    (if-let [mes (:message (:attrs (first (:content xml))))]
       "Land"
       (first (:content (first (:content (first (:content xml)))))) ))
  (catch Exception e
   (ctpl e)
   ()))))

(defn call-geonames-country-code [lat lng]
  ; Get country code from Geonames Web Service
(let [url (str *country-code-url* "?type=xml&lat=" lat "&lng=" lng "&username=" *username*)]
 (try
  (if-let [xml (clojure.xml/parse url)]
    (if-let [mes (:message (:attrs (first (:content xml))))]
       "Not a country"
       (first (:content (first (:content (first (:content xml)))))) ))
  (catch Exception e
   (ctpl e)
   ()))))

(defn call-geonames-country-info [code lang]
  ; Get country info from Geonames Web Service
(let [url (str *country-info-url* "?lang=" lang "&country=" code "&username=" *username*)]
 (try
  (if-let [xml (clojure.xml/parse url)]
    (xml-to-map (first (:content xml))) )
  (catch Exception e
   (ctpl e)
   ()))))

(defn call-geonames-nearby [lat lng fea-class fea-code maxr rad]
  ;; Get near by place from Geonames Web Service
;; max radius = 300
(let [url (str *nearby-url* "?lat=" lat "&lng=" lng "&username=" *username*)
       url (if (some? fea-class) (str url "&featureClass=" fea-class) url)
       url (if (some? fea-code) (str url "&featureCode=" fea-code) url)
       url (if (number? maxr) (str url "&maxRows=" maxr) url)
       url (if (and (number? rad) (<= rad 300)) (str url "&radius=" rad) url)]
 (try
   (if-let [xml (clojure.xml/parse url)]
      (xml-to-map (first (:content xml))) )
 (catch Exception e
   (ctpl e)
   nil))))

(defn call-geonames-nearby-ext [lat lng]
  ; Get  the most detailed information available for the lat/lng from Geonames Web Service
(let [url (str *ext-nearby-url* "?lat=" lat "&lng=" lng "&username=" *username*)]
 (try
   (if-let [xml (clojure.xml/parse url)]
      (map xml-to-map (:content xml)) )
 (catch Exception e
   (ctpl e)
   nil))))

(defn call-geonames-rss [feed]
  ; Get GeoRSS for RSS feed <item>s from Geonames Web Service
(let [url (str *rss-georss* "?feedUrl=" feed "&username=" *username*)]
  (seq (rss-item-map-list url))))

(defn call-geonames-elev30 [lat lng]
  ;; Get elevation (step 30m) from Geonames Web Service
;; Arguments can be vectors (length <= 20 on free server)
(let [url (if (vector? lat)
	(let [lats (apply str (interpose "," lat))
	       lngs (apply str (interpose "," lng))]
	   (str *elev30-url* "?lats=" lats "&lngs=" lngs))
	(str *elev30-url* "?lat=" lat "&lng=" lng))
       url (str url "&type=XML&username=" *username*)]
 (try
  (if-let [xml (clojure.xml/parse url)]
    (if (vector? lat)
        (map #(first (:content %)) (filter #(some #{:astergdem} (vals %)) (:content xml)))
        (first (:content (first (:content xml)) )) ))
  (catch Exception e
   (ctpl e)
   ()))))

(defn call-geonames-weather [lat lng]
  ; Get near by weather from Geonames Web Service
(let [url (str *weather-url* "?lat=" lat "&lng=" lng "&style=full&username="  *username*)]
 (try
   (if-let [xml (clojure.xml/parse url)]
      (xml-to-map (first (:content xml))) )
 (catch Exception e
   (ctpl e)
   nil))))

(defn call-wiki-search [text max lang]
  ; Get Wikipedia articles containing text
(let [url (str *wiki-search* "?q=" (java.net.URLEncoder/encode text "utf-8") "&lang=" lang "&maxRows=" max "&username=" *username*)]
  (seq (ws-map-list url))))

(defn call-wiki-bbx [north west south east max lang]
  ; Get Wikipedia articles for given bounding box
(let [url (str *wiki-bbx* "?north=" north "&south=" south "&west=" west "&east=" east "&lang=" lang "&maxRows=" max "&username=" *username*)]
  (seq (ws-map-list url))))

(defn call-wiki-nearby [lat lon radius-km max lang]
  ; Get Wikipedia articles near some point
(let [url (str *wiki-nearby* "?lat=" lat "&lng=" lon "&radius=" radius-km "&maxRows=" max "&username=" *username*)]
  (seq (ws-map-list url))))

(defn call-geonames-20elevations [coords]
  ;: Get Elevation - Aster Global Digital Elevation Model V1 2009
;: Returns map {coord1 elev1coord2 elev2 ..} 
(let [crds (take 20 coords)
       lats (map first crds)
       lngs (map second crds)
       lats (apply str (interpose "," lats))
       lngs (apply str (interpose "," lngs))
       url (str *strm3-url* "?lats=" lats "&lngs=" lngs "&username=" *username*)]
 (try
  (if-let [dat (slurp url)]
    (let [v (read-string (str "[" dat "]"))
           v (interleave coords v)]
      (apply hash-map v)))
  (catch Exception e
   (ctpl e)
   nil))))

(defn call-geonames-gtopo30 [lat lng]
  ; Get Elevation - GTOPO30
(let [url (str *gtopo30* "?lat=" lat "&lng=" lng "&username="  *username*)]
 (try
   (if-let [gtp (slurp url)]
     (read-string gtp))
 (catch Exception e
   (ctpl e)
   nil))))

(defn call-geonames-hierarchy [gid]
  ;; Returns all GeoNames higher up in the hierarchy of a place name.
(let [url (str *hierarchy-url* "?geonameId=" gid "&username=" *username*)]
(ctpl url)
 (try
   (when-let [xml (clojure.xml/parse url)]
      (ctpl xml)
      (ctpl (count (:content xml)))
      (map xml-to-map (:content xml)))
 (catch Exception e
   (ctpl e)
   nil))))

(defn call-geonames-pois-osm [lat lng maxr rad]
  ;; Finds the nearest points of interests for a given lat/lng pair.
;; max rows = 50, max radius = 1
(let [url (str *pois-osm-url* "?lat=" lat "&lng=" lng "&username=" *username*)
       url (if (and (number? maxr) (<= maxr 50)) (str url "&maxRows=" maxr) url)
       url (if (and (number? rad) (<= rad 1)) (str url "&radius=" rad) url)]
 (try
   (if-let [xml (clojure.xml/parse url)]
      (map xml-to-map (:content xml)) )
 (catch Exception e
   (ctpl e)
   nil))))

(defn tag-con-map [lst]
  (letfn [(tac? [x] (let [cnt (:content x)]
	(not (or (nil? (:tag x)) (not (or (nil? cnt) (seq cnt))) ) )))
           (every-tac? [y] (every? #(tac? %) y))]
   (cond
      (nil? lst) lst
      (every-tac? lst) (reduce #(assoc %1 (:tag %2) (tag-con-map (:content %2))) {} lst)
      (> (count lst) 1) lst
      true (first lst))))

(defn gn-pois-osm [lat lng]
  ;; Get nearby places of interest in OSM data from Geonames Web Service
;; Return list of maps
(let [url (str *nearby-pois-osm* "?lat=" lat "&lng=" lng "&username=" *username*)]
 (ctpl url)
 (try
   (if-let [xml (clojure.xml/parse url)]
      (let [lst (map :content (:content xml))]
               (map tag-con-map lst)))
 (catch Exception e
   (ctpl e)
   nil))))

(defn gn-get [gid]
  ;; Return geoname attributes map by geonameId
(try
  (let [url (str "http://api.geonames.org/get?geonameId=" gid "&username=" *username*)
              xml (clojure.xml/parse url)]
          (if xml
             (tag-con-map (:content xml))))
(catch Exception e
  (ctpl e)
  nil)))

(defn gn-search-bbx-rdf [q lim w e s n]
  ;; For q="" and specified bbx return list of gn:Feature-s as rdf standard xml map
(let [url (str "http://api.geonames.org/search?q=" q "&maxRows=" lim "&type=rdf&username=" *username* "&south=" s "&east=" e "&north=" n "&west=" w)]
 (try
   (if-let [xml (clojure.xml/parse url)]
      (:content xml))
 (catch Exception e
   (ctpl e)
   nil))))

(defn gn:Feature-gid [fea]
  ;; Return geonameId of gn:Feature
(if (= (:tag fea) :gn:Feature)
    (let [rab (:rdf:about (:attrs fea))
           lst (seq (.split rab "/"))]
       (last lst))))

(defn gn:Feature-neighbor-gids [fea]
  ;; Return geonameId-s of gn:Feature gn:nearbyFeatures
(if (= (:tag fea) :gn:Feature)
    (let [rab (filter #(= (:tag %) :gn:nearbyFeatures) (:content fea))]
       (if (seq rab)
           (let [res (:rdf:resource (:attrs (first rab)))
                  xml (clojure.xml/parse res)]
               (if (map? xml)
                   (map gn:Feature-gid (:content xml)) ))) )))

(defn gn-neighbor-gids [w e s n]
  ;; Return neighbor gids in bbx=[w e s n] as set
(let [gsb (gn-search-bbx-rdf "" 10 w e s n)]
  (if (seq gsb)
      (set (mapcat gn:Feature-neighbor-gids gsb)) )))

(defn gn-wiki-title [title max lang]
  ;; Get Wikipedia articles of title
(let [url (str *wiki-search* "?title=" (java.net.URLEncoder/encode title "utf-8") "&lang=" lang "&maxRows=" max)]
  (seq (ws-map-list url))))

