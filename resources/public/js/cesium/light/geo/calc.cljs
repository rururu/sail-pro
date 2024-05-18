(ns light.geo.calc
)
(defn radians [deg]
  (/ (* deg js/Math.PI) 180))

(defn degrees [rad]
  (/ (* rad 180) js/Math.PI))

(defn spherical-between-js [^double phi1 ^double lambda0 ^double c ^double az]
  (let [cosphi1 (js/Math.cos phi1)
       sinphi1 (js/Math.sin phi1)
       cosaz (js/Math.cos az)
       sinaz (js/Math.sin az)
       sinc (js/Math.sin c)
       cosc (js/Math.cos c)
       phi2 (js/Math.asin (+ (* sinphi1 cosc) (* cosphi1 sinc cosaz)))
       lam2 (+ (js/Math.atan2 (* sinc sinaz) (- (* cosphi1 cosc) (* sinphi1 sinc cosaz))) lambda0)]
  [phi2 lam2]))

(defn future-pos-js [[lat lon] crs spd tim]
  (let [phi (radians lat)
       lam (radians lon)
       dir (radians crs)
       way (* spd tim)
       way (radians (/ way 60))
       [phi2 lam2] (spherical-between-js phi lam way dir)]
   [(degrees phi2) (degrees lam2)]))

(defn norm-crs [x]
  (cond
   (> x 360) (- x 360)
   (< x 0) (+ x 360)
   true x))

(defn ray [lat lon bea dis step]
  (let [dtr (/ js/Math.PI 180)
       phi (* lat dtr)
       lam (* lon dtr)
       az (* bea dtr)
       mc (/ (* dis dtr) 60)
       s (/ (* step dtr) 60)]
  (for [c (range 0 mc s)] (spherical-between-js phi lam c az))))

(defn rumb [bea]
  (condp > (float bea)
  5.625 "N"
  16.875 "NtO"
  28.125 "NNO"
  39.375 "NOtN"
  50.625 "NO"
  61.875 "NOtO"
  73.125 "ONO"
  84.375 "OtN"
  95.625 "O"
  106.875 "OtS"
  118.125 "OSO"
  129.375 "SOtO"
  140.625 "SO"
  151.875 "SOtS"
  163.125 "SSO"
  174.375 "StO"
  185.625 "S"
  196.875 "StW"
  208.125 "SSW"
  219.375 "SWtS"
  230.625 "SW"
  241.875 "SWtW"
  253.125 "WSW"
  264.375 "WtS"
  275.625 "W"
  286.875 "WtN"
  298.125 "WNW"
  309.375 "NWtW"
  320.625 "NW"
  331.875 "NWtN"
  343.125 "NNW"
  354.375 "NtW"
  "N"))

