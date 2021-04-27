(ns mvo.move
)
(def PID180 (/ Math.PI 180))
(def NMRAD (/ Math.PI 10800))
(def TIMEOUT-HRS 0)
(def TIME-RUN false)
(defn spherical-between-js [phi1 lambda0 c az]
  (let [cosphi1 (js/Math.cos phi1)
       sinphi1 (js/Math.sin phi1)
       cosaz (js/Math.cos az)
       sinaz (js/Math.sin az)
       sinc (js/Math.sin c)
       cosc (js/Math.cos c)
       phi2 (js/Math.asin (+ (* sinphi1 cosc) (* cosphi1 sinc cosaz)))
       lam2 (+ (js/Math.atan2 (* sinc sinaz) (- (* cosphi1 cosc) (* sinphi1 sinc cosaz))) lambda0)]
  [phi2 lam2]))

(defn spherical-azimuth-js [phi1 lambda0 phi lambda]
  (let [ldiff (- lambda lambda0)
       cosphi (js/Math.cos phi)]
  (js/Math.atan2 (* cosphi (js.Math.sin ldiff))
                      (- (* (js/Math.cos phi1) (js/Math.sin phi)) 
                          (* (js/Math.sin phi1) cosphi (js/Math.cos ldiff))))))

(defn bear-deg-js [[la1 lo1] [la2 lo2]]
  (let [fi1 (* la1 PID180)
       ld1 (* lo1 PID180)
       fi2 (* la2 PID180)
       ld2 (* lo2 PID180)
       rad (spherical-azimuth-js fi1 ld1 fi2 ld2)
       deg (/ rad PID180)]
  (cond
    (< deg 0) (+ deg 360.0)
    (> deg 360.0) (- deg 360.0)
    true deg)))

(defn set-turn-point [mvo [lat lon] crs spd]
  (vswap! mvo assoc
  :phi-tur (* lat PID180)
  :lam-tur (* lon PID180)
  :dir (* crs PID180)
  :rdh (* spd NMRAD)
  :elt-tur 0.0))

(defn get-coord [mv]
  (let [ll (.getLatLng (mv :marker))]
  [(.-lat ll) (.-lng ll)]))

(defn get-course [mv]
  (/ (mv :dir) PID180))

(defn get-speed [mv]
  (/ (mv :rdh) NMRAD))

(defn set-course [mvo crs]
  (let [mv @mvo]
  (set-turn-point mvo (get-coord mv) crs (get-speed mv))
  (.setRotationAngle (mv :marker) crs)))

(defn set-speed [mvo spd]
  (let [mv @mvo]
  (set-turn-point mvo (get-coord mv) (get-course mv) spd)))

(defn set-coord [mvo crd]
  (let [mv @mvo
       [lat lon] crd]
  (set-turn-point mvo crd (get-course mv) (get-speed mv))
  (.setLatLng (mv :marker) (js/L.LatLng. lat lon))))

(defn create-mover [crd crs spd mrk]
  (let [mvo (volatile! {:marker mrk})]
  (set-turn-point mvo crd crs spd)
  mvo))

(defn tow [[cmk [rd az]] phi lam crs]
  (let [[phi2 lam2] (spherical-between-js phi lam rd az)
       pos2 (js/L.LatLng. (/ phi2 PID180) (/ lam2 PID180))]
  (.setLatLng cmk pos2)
  (if (instance? js/L.Marker cmk)
    (.setRotationAngle cmk crs))))

(defn move [mvo]
  (if TIME-RUN
  (let [mv @mvo
         elt (+ (mv :elt-tur) TIMEOUT-HRS)
         way (* (mv :rdh) elt)
         [phi lam] (spherical-between-js (mv :phi-tur) (mv :lam-tur) way (mv :dir))
         pos (js/L.LatLng. (/ phi PID180) (/ lam PID180))]
    (.setLatLng (mv :marker) pos)
    (doseq [twd (mv :tows)]
       (tow twd phi lam (get-course mv)))
    (vswap! mvo assoc :elt-tur elt))))

(defn set-time-run [bool]
  (def TIME-RUN bool))

(defn set-timeout-hrs [timeout-mcec time-scale]
  (def TIMEOUT-HRS (* (/ timeout-mcec 3600000) time-scale)))

