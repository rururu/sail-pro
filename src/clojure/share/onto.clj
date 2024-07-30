(ns share.onto
(:use protege.core)
(:import 
  javax.swing.JFileChooser
  javax.swing.JOptionPane
  edu.stanford.smi.protege.ui.DisplayUtilities
  edu.stanford.smi.protege.model.Cls
  edu.stanford.smi.protege.model.Instance
  edu.stanford.smi.protege.model.Project))
(def PRJ2 nil)
(def KB2 nil)
(def KB1 nil)
(def INSS-MAPPING (atom {}))
(def ERROR nil)
(def copy-instance nil)
(def REPL-SLOT-VAL {:class "NavOb"
 :slot "url"
 :func (fn [v] (.replace v "data/images" 
                                     "resources/public/img"))})
(defn confirm [mes]
  (= (JOptionPane/showConfirmDialog nil mes) (JOptionPane/YES_OPTION)))

(defn file-chooser [s]
  (let [fc (JFileChooser. s)]
  (if (= (.showOpenDialog fc nil) JFileChooser/APPROVE_OPTION)
    (.getPath (.getSelectedFile fc)))))

(defn titorlab-slot-val [i kb2]
  (let [tit "title"
       lab "label"]
  (if-let [val (.getOwnSlotValue i (.getSlot kb2 tit))]
    [tit val]
    (if-let [val (.getOwnSlotValue i (.getSlot kb2 lab))]
      [lab val]))))

(defn find-or-create-copy [v2 kb2 kb1 deep]
  (cond
  (not deep)
    (if (not (or (instance? Cls v2) (instance? Instance v2)))
              v2)
  (instance? Cls v2)
    (or (cls (.getName v2))
      (do (println (str "Copying Class " (.getName v2) " not exists!"))
        (def ERROR true)
        nil))    
  (instance? Instance v2)
    (copy-instance v2 kb2 kb1 deep)
  true
    v2))

(defn check-n-gen [tn sn val]
  (println :C-N-G tn sn val)
(if-let [old (fifos tn sn val)]
  (str val "." (java.util.Date.))
  val))

(defn copy-instance
  ([in deep]
  (def ERROR false)
  (copy-instance in KB2 KB1 deep)
  (if ERROR
    (do (confirm (str "Errors while copying " (titorlab-slot-val in KB2)))
      (doseq [in (vals @INSS-MAPPING)]
        (delin in))
      (def INSS-MAPPING (atom {})))
    (println (str "Deeply copied " (titorlab-slot-val in KB2)))))
([in kb2 kb1 deep]
  (or (@INSS-MAPPING in)
    (let[typ2 (.getDirectType in)
           tn (.getName typ2)
           sls2 (.getTemplateSlots typ2)]
      (if-let [typ1 (cls tn)]
        (let [cin (crin tn)]
          (swap! INSS-MAPPING assoc in cin)
          (doseq [sl2 sls2]
            (let [sn (.getName sl2)
                   sl1 (.getSlot kb1 sn)]
              (if sl1
                (if (.getAllowsMultipleValues sl1)
                  (if-let [insl2vv (seq (.getOwnSlotValues in sl2))]
                    (ssvs cin sn (map #(find-or-create-copy % kb2 kb1 deep) insl2vv)))
                  (if (or (= sn "label") (= sn "title"))
                    (ssv cin sn (check-n-gen tn sn (.getOwnSlotValue in sl2)))
                    (ssv cin sn (find-or-create-copy (.getOwnSlotValue in sl2) kb2 kb1 deep))))
                (do 
                  (def ERROR true)
                  (println  (str "Slot not exists: " sn " for class: " tn "!"))) )))
          cin)
        (do (println (str "Class " tn " not exists!"))
          (def ERROR true)
          nil))))))

(defn load-src-prj
  ([hm inst]
  (if-let [pth (file-chooser (.getPath (.getProjectDirectoryFile *prj*)))]
    (let [err (java.util.ArrayList.)]
      (if PRJ2
        (.dispose PRJ2))
      (def PRJ2 (Project. pth err))
      (if (> (.size err) 0)
        (ssv inst "source-project" (apply str (seq err)))
        (do
          (def KB1 *kb*)
          (def KB2 (.getKnowledgeBase PRJ2))
          (def INSS-MAPPING (atom {}))
          (ssv inst "source-project" (str KB2))) ) )))
([path]
  (let [err (java.util.ArrayList.)]
    (if PRJ2
      (.dispose PRJ2))
    (def PRJ2 (Project. path err))
    (if (> (.size err) 0)
      (apply println (seq err))
      (do
        (def KB1 *kb*)
        (def KB2 (.getKnowledgeBase PRJ2))
        (def INSS-MAPPING (atom {}))
        (println "Second project:" KB2 "from" path)) ) )))

(defn delete-unref [hm inst]
  (if-let [clz (DisplayUtilities/pickCls nil *kb* [(cls ":THING")])]
  (do (def cnt 0)
    (doseq [in (cls-instances (.getName clz))]
      (if (< (count (.getReferences in)) 2)
        (do
          (println (str "Deleting unreferenced instance " (or (titorlab-slot-val in *kb*) (.getName in)) " of class " (.getName clz)))
          (delin in)
          (def cnt (inc cnt)))))
    (confirm (str "Deleted " cnt)))))

(defn find-unref [hm inst]
  (if-let [clz (DisplayUtilities/pickCls nil *kb* [(cls ":THING")])]
  (do (def cnt 0)
    (doseq [in (cls-instances (.getName clz))]
      (if (< (count (.getReferences in)) 2)
        (do
          (println (str "Unreferenced instance " (or (titorlab-slot-val in *kb*) (.getName in)) " of class " (.getName clz)))
          (def cnt (inc cnt)))))
    (confirm (str "Found " cnt)))))

(defn shal-copy [hm inst]
  (if KB2
  (let [mp (into {} hm)
         inss (DisplayUtilities/pickInstances nil KB2 [(.getCls KB2 ":THING")])]
    (doseq [in inss]
      (copy-instance in KB2 KB1 false)))
  (if (confirm "Load Source Project!")
    (load-src-prj hm inst))))

(defn deep-copy [hm inst]
  (if KB2
  (let [mp (into {} hm)
         inss (DisplayUtilities/pickInstances nil KB2 [(.getCls KB2 ":THING")])]
    (doseq [in inss]
      (copy-instance in KB2 KB1 true)))
  (if (confirm "Load Source Project!")
    (load-src-prj hm inst))))

(defn delfil [hm inst]
  (let [mp (into {} hm)
       nix (mp "filter-pattern")]
  (println "Deleted:")
  (doseq [e (.getInstances *kb*)]
    (if-let [lab (sv e "label")]
      (when (.contains lab nix)
        (println (str "Label: " lab))
        (delin e)))
    (if-let [tit (sv e "title")]
      (when (.contains tit nix)
        (println (str "Title: " tit))
        (delin e))))))

(defn replace-slot-value []
  (let [clz  (REPL-SLOT-VAL :class)
       slt   (REPL-SLOT-VAL :slot)
       fun  (REPL-SLOT-VAL :func)]
  (doseq [ins (cls-instances clz)]
    (ssv ins slt (fun (sv ins slt))))))

(defn delete-instances [hm inst]
  (let [mp (into {} hm)
       sel (selection mp "instances")]
  (doseq [i sel]
    (delin i))))

