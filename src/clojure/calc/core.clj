(ns calc.core
)

(defn abs [x]
  (if (< x 0) (- x) x))

(defn approx= [x y eps]
  (cond
  (> x y) (< (- x y) eps)
  (< x y) (< (- y x) eps)
  true true))

(defn linint [x [x1 y1] [x2 y2]]
  (float (+ y1 (/ (* (- y2 y1) (- x x1)) (- x2 x1)))))

(defn tabfun [x table]
  ;; left and right borders in table are exclusive
(let [[lo hi] (split-with #(< (first %) x) table)]
  (if (seq lo)
    (if (seq hi)
      (linint x (last lo) (first hi))
      [:UB (second (last table))])
    [:LB (second (first table))])))

(defn i-mono-tabfun [y table]
  ;; inverse function, only for monotone(!!!) functions
(tabfun y (map #(vector (second %)(first %)) table)))

(defn smooth-tabfun [x table]
  (let [res (tabfun x table)]
  (if (vector? res) (second res) res)))

