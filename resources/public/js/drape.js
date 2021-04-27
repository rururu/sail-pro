var CLOSURE_UNCOMPILED_DEFINES = {};
var CLOSURE_NO_DEPS = true;
if(typeof goog == "undefined") document.write('<script src="js/drape/goog/base.js"></script>');
document.write('<script src="js/drape/goog/deps.js"></script>');
document.write('<script src="js/drape/cljs_deps.js"></script>');
document.write('<script>if (typeof goog == "undefined") console.warn("ClojureScript could not load :main, did you forget to specify :asset-path?");</script>');
document.write('<script>goog.require("process.env");</script>');
document.write('<script>goog.require("cesium.drape.client");</script>');
