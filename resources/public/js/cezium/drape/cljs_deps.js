goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.Uri', 'goog.object', 'goog.math.Integer', 'goog.string.StringBuffer', 'goog.array', 'goog.math.Long']);
goog.addDependency("../process/env.js", ['process.env'], ['cljs.core']);
goog.addDependency("../cesium/client.js", ['cesium.client'], ['cljs.core']);
goog.addDependency("../test/client.js", ['test.client'], ['cesium.client', 'cljs.core']);
goog.addDependency("../workshop2/client.js", ['workshop2.client'], ['cesium.client', 'cljs.core']);
goog.addDependency("../drape/client.js", ['drape.client'], ['cesium.client', 'cljs.core']);
