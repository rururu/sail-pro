(ns ru.rules
(:require
  [protege.core :as p]
  [rete.core :as rete]
  [clojure.inspector :as cin])
(:import
  edu.stanford.smi.protege.model.ValueType
  edu.stanford.smi.protege.ui.DisplayUtilities
  javax.swing.JOptionPane))
(def LOGS (atom {}))
(def RUN nil)
(defn mk-templates [clss]
  (letfn [(mk-tpl [cls]
	(concat [(symbol (.getName cls)) 'instance]
	  (map #(symbol (.getName %)) (.getTemplateSlots cls))))]
  (if (seq? clss)
    (map mk-tpl clss)
    (mk-templates (.getSubclasses clss)) )))

(defn mk-rule [rule mode]
  (when-let [ri (if (string? rule)
	(p/fifos "Rule" "title" rule)
	rule)]
  (let [nm (p/sv ri "title")
         _ (if (not= mode "run") (println [:MK-RULE nm]))
        sal (p/sv ri "salience")
        lhs (read-string (str "(" (p/sv ri "lhs") ")"))
        rhs (read-string (str "(" (p/sv ri "rhs") ")"))]
    (concat [nm sal] lhs ['=>] rhs))))

(defn single-value [val slt]
  (if (= (.getValueType slt) ValueType/SYMBOL)
  (symbol val)
  val))

(defn mk-frame [ins]
  (letfn [(sval [slt ins]
	(if (.getAllowsMultipleValues slt)
	  (vec (map #(single-value % slt) (.getOwnSlotValues ins slt)))
                          (if-let [val (.getOwnSlotValue ins slt)]
                            (single-value val slt)
                            :?)))]
  (let [typ (.getDirectType ins)
        slots (.getTemplateSlots typ)
        svls (mapcat #(list (symbol (.getName %)) (sval % ins)) slots)
        svls (cons 'instance (cons ins svls))]
    (cons (symbol (.getName typ)) svls))))

(defn update-frame [frm typ mp]
  (let [[otype & svals] frm
       upf (fn [[k v]]
	[k (or (mp k) v)])]
  (cons (if (= typ :same-type) otype typ)
    (mapcat upf (partition 2 svals)))))

(defn facts-from-classes [fcs]
  (mapcat #(.getInstances %) fcs))

(defn run-engine
  ([iot]
  (let [[ins tit] (if (string? iot) 
	[(p/fifos "Run" "title" iot) iot]
	[iot (p/sv iot "title")])]
    (if (and ins tit)
      (run-engine tit
	(p/svs ins "rule-sets")
	(p/svs ins "fact-classes")
	(p/svs ins "facts")
	(p/sv   ins "mode")))))
([hm inst]
  (let [mp (into {} hm)
         tit (mp "title")
         rss (mp "rule-sets")
         fcs (mp "fact-classes")
         ffs (mp "facts")
         mod (mp "mode")]
    (run-engine tit rss fcs ffs mod)))
([tit rss fcs ffs mod]
  (println [:RUN tit])
  (let [ffc (facts-from-classes fcs)
         fts (concat ffc ffs)
         fts (map mk-frame fts)
         tps (mapcat #(p/svs % "templates") rss)
         tps (mk-templates tps)
         rls (mapcat #(p/svs % "rules") rss)
         rls (map #(mk-rule % mod) rls)
         rls (map rete/trans-rule rls)]
     (println (str "Mode: " mod))
     (println (str "Templates: " (count tps)))
     (println (str "Rules: " (count rls)))
     (println (str "Facts: " (count fts)))
     (def RUN true)
     (rete/run-with mod tps rls fts))))

(defn assert-instances [inss]
  (doseq [ins inss]
  (rete/assert-frame (mk-frame ins))))

(defn retract-instances [inss]
  (doseq [ins inss]
  (doseq [fact (rete/facts-with-slot-value 'instance = ins)]
    (rete/retract-fact (first fact)))))

(defn ass-inss [hm inst]
  (let [mp (into {} hm)
      clw (mp "clsWidget")
      sel (.getSelection (.getSlotWidget clw (p/slt "instances")))]
  (if (seq sel)
    (assert-instances sel))))

(defn retr-inss [hm inst]
  (let [mp (into {} hm)
      clw (mp "clsWidget")
      sel (.getSelection (.getSlotWidget clw (p/slt "instances")))]
  (if (seq sel)
    (retract-instances sel))))

(defn pp [typ]
  ;; pretty print facts to REPL
;; typ - type of facts (symbol with ' prefix) or :all
(let [all (rete/fact-list)
      sel (if (= typ :all) all (filter #(= (second %) typ) all))]
  (doseq [fact sel]
    (p/ctpl "")
    (let [[[n typ] & rp] (partition-all 2 fact)]
      (p/ctpl (str "Fact" n " " typ))
      (doseq [sv rp]
        (p/ctpl (str "  " (first sv) " " (second sv))) ) ))))

(defn sp [typ]
  ;; short print facts to REPL
;; typ - type of facts (symbol with ' prefix) or :all
(let [all (rete/fact-list)
      sel (if (= typ :all) all (filter #(= (second %) typ) all))]
  (def k 0)
  (doseq [fact sel]
    (let [[n typ & rp] fact
          mp (apply hash-map rp)]
      (p/ctpl (str k " " typ " " (or (mp 'title) (mp 'label)) " status: " (mp 'status) " fact: " n))
      (def k (inc k)) ) )))

(defn lp [typ]
  ;; 1 line full print facts to REPL
;; typ - type of facts (symbol with ' prefix) or :all
(let [all (rete/fact-list)
      sel (if (= typ :all) all (filter #(= (second %) typ) all))]
  (doseq [fact sel]
    (p/ctpl "")
    (p/ctpl fact))))

(defn cv [val]
  ;; print fact numbers containing val to REPL
(let [all (rete/fact-list)
      sel (filter #(some #{val} %) all)]
  (def k 0)
  (doseq [fact sel]
    (let [[n typ & rp] fact
          mp (apply hash-map rp)]
      (p/ctpl (str k " " typ " " (or (mp 'title) (mp 'label)) " status: " (mp 'status) " fact: " n))
      (def k (inc k)) ) )))

(defn f [n]
  ;; print fact by number to REPL
(let [all (rete/fact-list)
      fact (first (filter #(= (first %) n) all))]
  (if fact
    (let [[[n typ] & rp] (partition-all 2 fact)]
      (p/ctpl (str "Fact" n " " typ))
      (doseq [sv rp]
        (p/ctpl (str "  " (first sv) " " (second sv))) ) ))))

(defn dr []
  ;; write rules to file Rules.clj
(if-let [rr (seq (p/cls-instances "Rule"))]
  (let [fn "Rules.clj"]
    (with-open [wrtr (clojure.java.io/writer fn)]
      (doseq [r rr]
        (.write wrtr (str "(" (p/sv r "title") " " (p/sv r "salience") "\n"))
        (.write wrtr (str (p/sv r "lhs") "\n"))
        (.write wrtr "=>\n")
        (.write wrtr (str (p/sv r "rhs") ")\n\n")) ))
    (str "Written " (count rr) " rules into " fn))))

(defn sts []
  ;; fact types statistics
(letfn [(ads [stm [fid typ mp]]
	(if-let [ste (typ stm)]
	  (assoc stm typ (inc ste))
	  (assoc stm typ 1)))]
  (let [fl (rete/fact-list)
         stm (reduce ads {} fl)
         sto (sort-by second (seq stm))
         str (reverse sto)]
    (p/ctpls str)
    (count fl))))

(defn typmap-by-id [fid]
  (if-let [funarg (@rete/IDFACT fid)]
  (rete/to-typmap funarg)))

(defn typmaps
  ([]
 (filter #(not= (second %) nil)
          (for [i (range @rete/FCNT)](typmap-by-id i))))
([typ]
 (filter #(= (first %) typ) (typmaps))))

(defn fire-all-rules [hm inst]
  (rete/fire))

(defn bnp []
  ;; create file with beta net plan
(rete/log-lst "beta-net-plan.txt" rete/BPLAN))

(defn clear-display []
  (if-let [dss (seq (p/cls-instances "Display"))]
   (p/ssv (first dss) "source" "<html>")))

(defn display [mess]
  (let [dis (if-let [dss (seq (p/cls-instances "Display"))]
                (first dss)
                (let [d (p/crin "Display")]
                  (clear-display)
                  d))
       src (p/sv dis "source")]
  (p/ssv dis "source" (str src mess "<br>"))
  (.show p/*prj* dis)))

(defn select [question answers]
  (DisplayUtilities/pickSymbol nil question (first answers) answers))

(defn confirm [question]
  (let [ans (JOptionPane/showConfirmDialog nil question)]
  (condp = ans
    JOptionPane/YES_OPTION true
    JOptionPane/NO_OPTION false
    nil)))

(defn input [question default validator]
  (loop [v nil]
  (if (or (and validator (validator v)) (some? v))
    v
    (-> (DisplayUtilities/editString nil question default nil)
      (or "nil")
      read-string
      recur))))

(defn step-engine [hm inst]
  (let [mp (into {} hm)
        sts (mp "steps")]
  (if (not RUN)
    (run-engine hm inst))
  (if (and rete/TRACE (not rete/TLONG))
    (println))
  (println [:STEPS sts])
  (rete/step sts)))

(defn mk-instance
  ([fid]
  (mk-instance fid 0))
([fid dep]
  (if-let [[typ mp] (typmap-by-id fid)]
    (mk-instance typ mp dep)))
([typ mp dep]
  (p/mti (assoc mp :DIRTYP typ :DEPTH dep))))

(defn fact-inspector []
  (cin/inspect-tree (sort-by #(name (second %)) (rete.core/fact-list))))

(defn f2 [n]
  ;; display fact as table
(let [all (rete/fact-list)
      fact (first (filter #(= (first %) n) all))]
  (if fact
    (let [[[n typ] & rp] (partition-all 2 fact)
           t2 (p/crin "Table2")]
      (p/ssv t2 "title" (str typ " " n))
      (p/ssvs t2 "column1" (map str (map first rp)))
      (p/ssvs t2 "column2" (map str (map second rp)))
      (.show p/*prj* t2)
      (str "Fact-" n)))))

(defn di [nam]
  (let [nam (if (.contains nam "(")
                 (.substring nam (inc (.indexOf nam "(")) (.indexOf nam " "))
                 nam)]
  (.show p/*prj* (.getInstance p/*kb* nam))
  nam))

(defn restart-es []
  (if-let [esi (p/fainst (p/cls-instances "Run") nil)]
  (run-engine esi)))

(defn save-bnet-plan []
  (rete/log-lst "beta-net-plan.txt" rete/BNET))

(defn modify-inst [hm inst]
  (retract-instances [inst])
(assert-instances [inst]))

