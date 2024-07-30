(ns eva
(:use 
  protege.core))
(defn envalue-n [args envals]
  (loop [aa args ss ""]
  (if (seq aa) 
    (let [evv (vec envals)
           v (sv (evv (dec (first aa))) "value")]
      (recur (rest aa) (str ss " " v)))
    ss)))

(defn eval-func [hm inst]
  (let [mp (into {} hm)
       func (first (selection mp "funcalls"))
       evs (mp "envalues")
       rvar (mp "result-variable")]
  (if func
    (let [fun (sv func "function")
           refs (.getReferences fun)
           frms (map #(.getFrame %) refs)
           is-prg? #(= (.getDirectType %) (cls "CloProgram"))
           prg (first (filter is-prg? frms))
           nsi (sv prg "cloNamespace")
           nsn (sv nsi "title")
           ftit (sv fun "title")
           fnm (first (.split ftit "\\["))
           args (read-string (sv func "arguments"))
           args (envalue-n args evs)
           fc (str "(" nsn "/" fnm args ")")
           _ (println :EVAL fc)
           r (eval (read-string fc))]
      (if (not (empty? rvar))
        (eval (list 'def (symbol rvar) r)))
      r))))

