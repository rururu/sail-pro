(ns sail-pro.core
  (:gen-class))

(defn -main [& args]
  (println "\nProtege-3.5")
  (println "A free, open-source ontology editor and framework for building intelligent systems")
  (println "(http://protege.stanford.edu/)\n")
  (ru.igis.scena.Starter/main (into-array String ["pprj_examples/VRDashboardClient"])))
