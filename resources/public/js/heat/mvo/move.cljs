(ns mvo.move
)
(def PID180 (/ Math.PI 180))
(def NMRAD (/ Math.PI 10800))
(def TIMEOUT-HRS 0)
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

(defn set-timeout-hrs [timeout-mcec time-scale]
  (def TIMEOUT-HRS (* (/ timeout-mcec 3600000) time-scale)))

(defn set-turn-point [mvo [lat lon] crs spd]
  (vswap! mvo assoc
  :phi-tur (* lat PID180)
  :lam-tur (* lon PID180)
  :dir (* crs PID180)
  :rdh (* spd NMRAD)
  :elt-tur 0.0))

(defn get-coord [mo]
  (let [ll (.getLatLng (mo :marker))]
  [(.-lat ll) (.-lng ll)]))

(defn get-course [mo]
  (/ (mo :dir) PID180))

(defn get-speed [mo]
  (/ (mo :rdh) NMRAD))

(defn set-course [mvo crs]
  (let [mo @mvo]
  (set-turn-point mvo (get-coord mo) crs (get-speed mo))
  (.setRotationAngle (mo :marker) crs)))

(defn set-speed [mvo spd]
  (let [mo @mvo]
  (set-turn-point mvo (get-coord mo) (get-course mo) spd)))

(defn set-coord [mvo crd]
  (let [mo @mvo]
  (set-turn-point mvo crd (get-course mo) (get-speed mo))))

(defn create-mover [crd crs spd mrk]
  (let [mvo (volatile! {:marker mrk})]
  (set-turn-point mvo crd crs spd)
  mvo))

(defn move [mvo]
  (let [mo @mvo
       elt (+ (mo :elt-tur) TIMEOUT-HRS)
       way (* (mo :rdh) elt)
       [phi lam] (spherical-between-js (mo :phi-tur) (mo :lam-tur) way (mo :dir))
       pos (js/L.LatLng. (/ phi PID180) (/ lam PID180))]
  (.setLatLng (mo :marker) pos)
  (vswap! mvo assoc :elt-tur elt)))

