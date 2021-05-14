(ns wiki.gis
(:use
  protege.core
  geo.names)
(:import
  java.awt.Image
  javax.swing.ImageIcon
  javax.swing.JOptionPane
  com.bbn.openmap.omGraphics.OMScalingIcon
  ru.igis.omtab.OMT
  ru.igis.omtab.MapOb
  ru.igis.omtab.OpenMapTab
  ru.igis.omtab.gui.RuMapMouseAdapter))
(def TIMEOUT 15000)
(def PM-FILES {"PATH"               "file:resources/public/img/placemark/"
 "adm1st"            "admin.png"
 "adm2nd"           "admin.png"
 "adm3rd"           "admin.png"
 "airport"             "airport.png"
 "city"                  "city.png"
 "country"            "home.gif"
 "edu"                  "edu.png"
 "event"               "event.png"
 "forest"               "forest.png"
 "glacier"              "glacier.png"
 "isle"                   "isle.png"
 "landmark"          "landmark.png"
 "mountain"          "mountain.png"
 "pass"                "pass.png"
 "railwaystation"   "railwaystation.png"
 "river"                 "river.png"
 "satellite"            "satellite.png"
 "waterbody"        "waterbody.png"
 "default-pois"      "place1.png"
 "default"             "landmark.png"
 ""                       "info.png"})
(defmacro with-timeout [msec & body]
  `(let [f# (future (do ~@body))
         v# (gensym)
         result# (deref f# ~msec v#)]
    (if (= v# result#)
      (do
        (println :FUTURE-CANCELLING)
        (future-cancel f#)
        (println :FUTURE-CANCELLED)
        nil)
      result#)))

(defn request-lang [sv]
  (let [spl (.split sv "-")]
  (aget spl 1)))

(defn trim-article [mp]
  (letfn [(trim-fea [f]
             (if f (first (.split f "}}"))))]
  (-> mp
    (assoc "feature" (trim-fea (mp "feature"))))))

(defn article-from-map [mp typ]
  (if-let [ins (fifos typ "title" (mp "title"))]
  (delin ins))
(let [mp (trim-article mp)]
  (mti (assoc mp :DIRTYP typ :DEPTH 0))))

(defn bbx-of-list
  ;; crds = ([lat lon]..)
([crds title]
  ;; return instance of BBX class
  (if-let [wsen (bbx-of-list  crds)]
    (let [ins (crin "BBX")]
       (ssv ins "title" title)
       (ssvs ins "wsen" wsen)
       ins)))
([crds]
  ;; return [west south east north] or nil
  (try
    (letfn [(apl [mx fst]
	(float (apply mx (map fst crds))))]
      [(apl min second) (apl min first) (apl max second) (apl max first)])
  (catch Exception e
     (println [:bbx-of-list crds :exception e])
     nil))))

(defn add-placemark
  ([wia]
  (let [tit (sv wia "title")
        ins (add-placemark tit (sv wia "feature") (sv wia "lat") (sv wia "lng"))]
    (ssv ins "reference" wia)
    (ssv wia "reference" ins)))
([lab feature lat lon]
  (let [ins (foc "Placemark" "label" lab)]
    (ssv ins "latitude" (MapOb/getDegMin lat))
    (ssv ins "longitude" (MapOb/getDegMin lon))
    (ssv ins "url" (str (PM-FILES "PATH") (or (PM-FILES feature) feature)))
    (OMT/getOrAdd ins)
    ins)))

(defn submit-bbx
  ([hm inst]
  (let [mp (into {} hm)
         max (mp "max-responses")
         lang (request-lang (mp "language"))
         [west south east north] (seq (svs (mp "bbx") "wsen"))
         rsp (if-let [r (with-timeout TIMEOUT
	    (call-wiki-bbx north west south east max lang))]
                 (filter some? (map #(article-from-map % "WikiArticle") r))
                 [])]
    (doall (map add-placemark rsp))
    (ssvs inst "responses" rsp)))
([inst bbx-title bbx]
  (if-let [bbx-inst (fifos "BBX" "title" bbx-title)]
    (ssv inst "bbx" bbx-inst)
    (let [[w s e n] bbx]
      (ssv inst "bbx" (bbx-of-list [[n w] [s e]] bbx-title))))
  (submit-bbx (itm inst 0) inst)
  inst))

(defn submit-search
  ([hm inst]
  (let [mp (into {} hm)
         max (mp "max-responses")
         lang (request-lang (mp "language"))
         text (mp "text")
         rsp (if-let [r (with-timeout TIMEOUT
	   (call-wiki-search text max lang))]
                 (filter some? (map #(article-from-map % "WikiArticle") r))
                 [])]
    (doall (map add-placemark rsp))
    (ssvs inst "responses" rsp)))
([inst any txt]
  (ssv inst "text" txt)
  (ssvs inst "responses" 
    (if-let [resp (call-wiki-search txt 
	(sv inst "max-responses") 
	(request-lang (sv inst  "language")))]
      (filter some? (map #(article-from-map % "WikiArticle") resp))
      []))
  (doall (map add-placemark (svs inst "responses")))
  inst))

(defn get-bbx-center [bbx-ins]
  ;; returns [lat lon]
(let [[w s e n] (seq (svs bbx-ins "wsen"))]
  [(float (/ (+ s n) 2)) (float (/ (+ w e) 2))]))

(defn submit-nearby
  ([hm inst]
  (let [mp (into {} hm)
         max (mp "max-responses")
         lang (request-lang (mp "language"))
         radius-km (mp "radius-km")
         lat (mp "lat")
         lon (mp "lng")
         rsp (if-let [r (with-timeout TIMEOUT
	   (call-wiki-nearby lat lon radius-km max lang))]
                 (filter some? (map #(article-from-map % "WikiArticle") r))
                 [])]
    (doall (map add-placemark rsp))
    (ssvs inst "responses" rsp)))
([inst lat lon]
  (ssv inst "lat" lat)
  (ssv inst "lng" lon)
  (submit-nearby (itm inst 0) inst)
  inst))

(defn coords-from-instances [list slat slon]
  ;; Collect coords from list of instances for given slot names
(map #(map read-string [(sv % slat) (sv % slon)]) list))

(defn irss-bbx [url resp]
  (let [geos (filter #(and (get % "geo:lat") (get %"geo:long")) resp)
       inss (map #(map-into-inst % (crin "GeoRSSItem")) geos)
       crds (coords-from-instances inss "geo:lat" "geo:long")
       bbx (if (seq crds) (bbx-of-list crds url))]
  [inss bbx]))

(defn submit-rss
  ([hm inst]
  (let [mp (into {} hm)
         url (first (selection mp "feedURL"))]
    (if url
      (if-let [resp (with-timeout TIMEOUT
	   (call-geonames-rss url))]
          (let [[inss bbx] (irss-bbx url resp)]
             (ssvs inst "georss_items" inss)
             (ssv inst "bbx" bbx))) )))
([inst any url]
  (if-let [resp (call-geonames-rss url)]
    (let [[inss bbx] (irss-bbx url resp)]
      (ssvs inst "georss_items" inss)
      (ssv inst "bbx" bbx)
      inst))))

(defn open-site [hm inst]
  (let [mp (into {} hm)
       url (or (mp "wikipediaUrl") (mp "link"))]
  (if url
    (.browse (java.awt.Desktop/getDesktop) (java.net.URI. url)))))

(defn del-article [ari]
  (if-let [ref (sv ari "reference")]
  (OMT/removeMapOb ref true))
(delin ari))

(defn clear-articles [hm inst]
  (let [ans (JOptionPane/showConfirmDialog nil "All articles?")]
  (if (= ans (JOptionPane/YES_OPTION))
        (doall (map del-article (cls-instances "WikiArticle")))
        (let [ans (JOptionPane/showConfirmDialog nil "Responses articles?")]
          (if (= ans (JOptionPane/YES_OPTION))
            (doall (map del-article (svs inst "responses"))) )))))

(defn clear-rss [hm inst]
  (let [ans (JOptionPane/showConfirmDialog nil "Are you shure?")]
  (if (= ans (JOptionPane/YES_OPTION))
      (doall (map delin (cls-instances "GeoRSSItem"))) )))

(defn submit-current-bbx [hm inst]
  (let [mp (into {} hm)
       max (mp "max-responses")
       lang (request-lang (mp "language"))
       mb (OpenMapTab/getMapBean)
       prj (.getProjection mb)
       lrp (.getLowerRight prj)
       ulp (.getUpperLeft prj)
       [w s e n] [(.getX ulp) (.getY lrp) (.getX lrp) (.getY ulp)]
       rsp (if-let [r (with-timeout TIMEOUT
                            (call-wiki-bbx n w s e max lang))]
               (filter some? (map #(article-from-map % "WikiArticle") r))
               [])]
  (doall (map add-placemark rsp))
  (ssvs inst "responses" rsp)))

(defn set-mouse-adapter []
  (let [rmma (proxy [RuMapMouseAdapter] []
	(mouseRightButtonClickedOn [mo llp runa]
                            (if mo
                              (if-let [art (sv (.getInstance mo) "reference")]
                                (.show *prj* art)))
	  true))
       pgs (seq (OMT/getPlaygrounds))]
  (.setRuMapMouseAdapter (first pgs) rmma)
  rmma))

