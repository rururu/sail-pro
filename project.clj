(defproject sail-pro "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.439"]
                 [protege "3.5.0"]
                 [protege/standard-extensions "3.5.0"]
                 [protege/looks "3.5.0"]
                 [protege/unicode_panel "3.5.0"]
                 [protege/JGo "3.5.0"]
                 [protege/JGoLayout "3.5.0"]
                 [protege/ClojureTab "1.5.0"]
                 [rete "5.3.0-SNAPSHOT"]
                 [org.clojure/core.async "0.4.490"]
                 [ring "1.7.1"]
                 [compojure "1.6.1"]
                 [cljs-ajax "0.8.0"]
                 [com.cognitect/transit-cljs "0.8.256"]
                 [com.cognitect/transit-clj "0.8.313"]
                 [http-kit "2.5.3"]
                 [clj-json "0.5.3"]
                 [javax.xml.bind/jaxb-api "2.3.0"]]
  :resource-paths ["src/clojure"]
  ;; :repositories [["repo" "file:repo"]] ;; for "lein deploy" only !!!!
  :repositories {"local" {:url ~(str (.toURI (java.io.File. "repo"))) :checksum :warn}}
  :main ^:skip-aot sail-pro.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all
                       :jvm-opts ["-Dclojure.compiler.direct-linking=true"]}})
