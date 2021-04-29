(ns protege.core
(:use clojure.stacktrace)
(:import
 edu.stanford.smi.protege.ui.ProjectManager
 edu.stanford.smi.protege.model.ValueType
 edu.stanford.smi.protege.model.Instance
 edu.stanford.smi.protege.util.ComponentUtilities
 edu.stanford.smi.protege.widget.AbstractSlotWidget
 clojuretab.ClojureTab))

(def ^:dynamic *prj* (.getCurrentProject (ProjectManager/getProjectManager)))
(def ^:dynamic *kb* (.getKnowledgeBase *prj*))
(defn ins [name]
  (.getInstance *kb* name))

(defn cls-instances [cls-name]
  ; Returns instances of cls
(.getInstances (.getCls *kb* cls-name)))

(defn ctp [s]
  ; Print s into REPL and return s
(clojuretab.ClojureTab/replappend (print-str s))
s)

(defn ctpl [s]
  ; Print s as line into REPL and return s
(clojuretab.ClojureTab/replappend (str s "\n"))
s)

(defn ctpls [s]
  (doall (map ctpl s))
s)

(defn cls [name]
  (.getCls *kb* name))

(defn slt [name]
  (.getSlot *kb* name))

(defn sv [instance slot-name]
  ; Return singl slot value of instance
(.getOwnSlotValue instance (.getSlot *kb* slot-name)))

(defn svs [instance slot-name]
  ; Return multiple slot values of instance
(.getOwnSlotValues instance (.getSlot *kb* slot-name)))

(defn ssv [instance slot-name value]
  ; Set singl slot value of instance
(.setOwnSlotValue instance (.getSlot *kb* slot-name) value))

(defn ssvs [instance slot-name values]
  ; Set multiple slot values of instance
(.setOwnSlotValues instance (.getSlot *kb* slot-name) values))

(defn crec [name & parents]
  ; Create and return class with parent classes
(let [prs (if parents
                (map #(.getCls *kb* %) parents)
                (list (.getCls *kb* ":THING")))]
 (.createCls *kb* name prs)))

(defn cres [name & options]
  ; Create and return slot.
; Key parameters: :type, :cardinality, :classes, :default
(let [opts (apply hash-map options)
       typ (condp = (opts :type)
                :instance (ValueType/INSTANCE)
                :float (ValueType/FLOAT)
                :integer (ValueType/INTEGER)
                :boolean (ValueType/BOOLEAN)
                :class (ValueType/CLS)
                :any (ValueType/ANY)
                :symbol (ValueType/SYMBOL)
                :string (ValueType/STRING)
                (ValueType/STRING))
       mlt (condp = (opts :cardinality)
                :multiple true
                false)
       cls (if (opts :classes)
                (map #(.getCls *kb* %) (opts :classes))
                (list (.getCls *kb* ":THING")))
       dfv (if (opts :default)
                (condp = typ
                  :integer (map #(Integer. %) (opts :default))
                  :float (map #(Float. %) (opts :default))
                  (opts :default)))
       slot (.createSlot *kb* name)]
  (.setValueType slot typ)
  (.setAllowsMultipleValues slot mlt)
  (if dfv
      (.setDefaultValues slot dfv))
  (if (= typ (ValueType/INSTANCE))
      (.setAllowedClses slot cls))
  slot))

(defn crin [cls]
  ; Return new instance of class cls
(.createInstance *kb* nil (.getCls *kb* cls)))

(defn delin [instance]
  ; Delete instance
(.deleteInstance *kb* instance))

(defn fifos [cls slot value]
  ;; Find insance of class cls with slot of value, or create it
(ClojureTab/findForSlotValue cls slot value))

(defn foc [cls slot value]
  ;; Find insance of class cls with slot of value, or create it
(let [ins (fifos cls slot value)]
  (or ins (let [ins (crin cls)] (ssv ins slot value) ins))))

(defn see [x]
  (if (or (seq? x) (vector? x) (map? x))
    (do (ctpls x) (count x))
    (do (ctpl x) 1)))

(defn selection [mp slot]
  ;; working inside context containing ClsWidget for corresponding instance
(.getSelection (.getSlotWidget (mp "clsWidget") (slt slot))))

(defmacro picat [code]
  `(try
   ~code
   (catch Throwable th#
      (print-cause-trace th#)
      (println))))

(defmacro dbg [x]
  `(let [x# ~x]
    (println "dbg:" '~x "=" x#)
    x#))

(defn is? [boolslot]
  (not (or (nil? boolslot) 
           (= boolslot Boolean/FALSE)
           (= boolslot :?))))

(defn fainst [inss text]
  ;; Find annotated instance
(let [sfs (.getSystemFrames *kb*)
       acl (.getAnnotationCls sfs)
       tsl (.getAnnotationTextSlot sfs)
       isl (.getAnnotatedInstanceSlot sfs)
       ais (.getInstances acl)]
  (loop [ail ais]
    (if (seq ail)
        (let [ai (first ail)
               txt (.getOwnSlotValue ai tsl)
               ins (.getOwnSlotValue ai isl)]
          (if (and (or (nil? inss) (some #{ins} inss))
	(or (nil? text) (.startsWith txt text)))
               ins
               (recur (rest ail)) ))) )))

(defn itm [val dep]
  ;; instance to map
;; val - instance
;; dep - depth of unfolding inner instances
(if (instance? Instance val)
  (let [typ (.getDirectType val)
         sls (.getTemplateSlots typ)
         mp (apply hash-map (mapcat #(list (.getName %)
		(if (.getAllowsMultipleValues %)
		  (if (= dep 0)
		    (vec (.getOwnSlotValues val %))
		    (vec (map (fn [x] (itm x (dec dep))) (.getOwnSlotValues val %))))
		  (if (= dep 0)
		    (.getOwnSlotValue val %)
		    (itm (.getOwnSlotValue val %) (dec dep))))) sls))]
    (assoc mp :DIRTYP (.getName typ) :DEPTH dep))
  val))

(defn mti
  ;; map to instance
;; mp - itm
([mp]
  (if (and (map? mp) (>= (:DEPTH mp) 0))
    (mti mp (:DEPTH mp))))
([mp dep]
  (if (< dep 0)
    mp
    (if-let [clz (cls (str (:DIRTYP mp)))]
      (reduce-kv #(mti %1 (str %2) %3 dep) 
	(crin (str (:DIRTYP mp)))
	(dissoc mp :DIRTYP :DEPTH)))))
([ins sn vmis dep]
  (if-let [sl (slt sn)]
    (let [st (.getValueType sl)
           sc (.getAllowsMultipleValues sl)
           vmis (if (symbol? vmis) (name vmis) vmis)
           tonum (fn [x] (if (number? x) x (read-string x)))
           toinst (fn [x] (if (instance? Instance x) x (.getInstance *kb* x)))]
      (cond
        (and sc (vector? vmis)) (ssvs ins sn (map #(mti % (dec dep)) vmis))
        (and sc (map? vmis)) (ssv ins sn (mti vmis (dec dep)))
        (or (= st (ValueType/STRING)) (= st (ValueType/SYMBOL))) (ssv ins sn (str vmis))
        (= st (ValueType/INTEGER)) (ssv ins sn (int (tonum vmis)))
        (= st (ValueType/FLOAT)) (ssv ins sn (float (tonum vmis)))
        (= st (ValueType/INSTANCE)) (ssv ins sn (toinst vmis))
        (= st (ValueType/BOOLEAN)) (ssv ins sn (and (not= vmis false) (not (nil? vmis)))))
      ins)
    (do (println (str "Slot " sn " not found!"))
      ins))))

(defn get-itm [itm path]
  ;; get in itm
;; path - vector of slot names or [slot_name slot_value]
(if (and (seq path) itm)
  (let [[kv & rst] path]
    (get-itm
      (if (and (vector? kv) (vector? itm))
        (first (filter #(= (get % (first kv)) (second kv)) (seq itm)))
        (get itm kv))
    rst))
  itm))

(defn put-itm [itm path val]
  ;; put into itm
;; path - vector of slot names or [slot_name slot_value](if (seq path)
;; val - new value
(let [[kv & rst] path]
  (if (and (vector? kv) (vector? itm))
    (if-let [fnd (first (filter #(= (get % (first kv)) (second kv)) itm))]
      (replace {fnd (put-itm fnd rst val)} itm)
      itm)
    (assoc itm kv
      (if (empty? rst)
        val
        (if-let [fnd (kv itm)]
          (put-itm fnd rst val)
          itm))))))

(defmacro condp-> [expr & clauses]
  (let [g (gensym) 
      pstep (fn [[pred step]] `(if (~pred ~g) (-> ~g ~step) ~g))] 
  `(let [~g ~expr 
           ~@(interleave (repeat g) (map pstep (partition 2 clauses)))] 
       ~g)))

(defmacro condas-> [expr name & clauses]
  (assert (even? (count clauses)))
(let [pstep (fn [[test step]] `(if ~test ~step ~name))]
  `(let [~name ~expr
           ~@(interleave (repeat name) (map pstep (partition 2 clauses)))]
       ~name)))

(defn reg-gen [pfx atm]
  ;; generator of regular names: <pfx>0,<pfx>1, <pfx>2,.. 
;; pfx - prfix string (can be "")
;; atm - new = (atom {}), or existing 
(let [old (or (@atm pfx) 0)
       num (inc old)]
  (swap! atm assoc pfx num)
  (str pfx num)))

(defn pins? [x]
  (instance? Instance x))

(defmacro invoke-later [& code]
  `(javax.swing.SwingUtilities/invokeLater
    (proxy [Runnable] [] (run [] ~@code))))

(defn typ [instance]
  (.getName (.getDirectType instance)))

(defn ldns
  ([ins]
  (let [ns (if (instance? Instance ins) (sv ins "title") ins)
         pth (.replace ns "." "/")]
    (try
      (load (str "/" pth))
      true
      (catch Exception e
        false))))
([hm inst]
  (let [mp (into {} hm)
        clw (mp "clsWidget")
        pms (.getSelection (.getSlotWidget clw (slt "cloPrograms")))]
    (println "Loading programs:")
    (doseq [pm pms]
      (println (str (if (ldns (sv pm "cloNamespace")) " + " " - ") (sv pm "title")))))))

(defn has-typ [instance name]
  (.hasType instance (cls name)))

(defn collect-along [instance slot-path]
  (loop [ii [instance] ss slot-path]
  (if (seq ss)
    (recur (mapcat #(svs % (first ss)) ii) (rest ss))
    ii)))

(defn get-frame-slot-selection [frm sln]
  (let [sws (ComponentUtilities/getDescendentsOfClass AbstractSlotWidget frm)
       wgs (filter #(=(.getName (.getDescriptor %)) sln) sws)]
  (if (seq wgs)
    (.getSelection (first wgs)))))

