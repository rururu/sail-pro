(ns cljs.compile
(:require
  [protege.core :as p]
  [cljs.build.api :as bld])
(:import
  clojuretab.ProgramGenerator
  java.io.File
  java.io.FileWriter))

(def SEP ProgramGenerator/FILE_SEPARATOR)
(defn ns-folder-and-name [nss]
  (let [s (seq (.split nss "\\."))
       n (last s)
       f (apply str (interpose SEP (butlast s)))]
 [n f]))

(defn chk&mk-folder [path]
  (let [fil (File. path)]
  (if (not (.exists fil))
    (.mkdirs fil))))

(defn store-program [store-in inst epilogue]
  (let [nsi (p/sv inst "cloNamespace")
       nss (p/sv nsi "title")
       [nam nsf] (ns-folder-and-name nss)
       pgr (ProgramGenerator. inst)
       _ (chk&mk-folder (str store-in SEP nsf))
       fwr (FileWriter. (str store-in SEP nsf SEP nam ".cljs"))]
  (.generateProgram pgr fwr)
  (if (not (empty? epilogue))
    (.write fwr (str "\n" epilogue)))
  (.close fwr)))

(defn store-asset [inst ext]
  (let [tit (p/sv inst "title")
       src (p/sv inst "source")
       sin (p/sv inst "store-in")
       _ (chk&mk-folder sin)
       fwr (FileWriter. (str sin SEP tit ext))]
  (.write fwr src)
  (.close fwr)))

(defn build [hm inst]
  (let [mp (into {} hm)
       sin (mp "store-in")
       out (mp "output-to")
       dir (mp "output-dir")
       asp (mp "asset-path")
       req (mp "required")
       epi (mp "epilogue")
       htm (mp "html")
       css (mp "css")
       nsi (mp "cloNamespace")
       nss (p/sv nsi "title")
       opt (assoc {} :output-to out
                           :output-dir dir
                           :asset-path asp
                           :main nss)
       opt (if-let [ado (mp "compiler-options")]
               (merge opt (read-string ado))
               opt)]
  (doseq [c css]
    (store-asset c ".css"))
  (doseq [h htm]
    (store-asset h ".html"))
  (doseq [r req]
    (store-program sin r ""))
  (store-program sin inst epi)
  (println [:CLJS-BUILD sin opt])
  (bld/build sin opt)))

