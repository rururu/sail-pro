// Compiled by ClojureScript 1.10.439 {}
goog.provide('drape.client');
goog.require('cljs.core');
goog.require('cesium.client');
drape.client.init_drape = (function drape$client$init_drape(){
cesium.client.add_terrain.call(null,null,cesium.client.VIEWER);

cesium.client.camera_home.call(null,cesium.client.CAMERA,cesium.client.HOME_VIEW);

cesium.client.start_event_processing.call(null,cesium.client.PORT,cesium.client.VIEWER);

return cesium.client.add_orbit_button.call(null,cesium.client.CAMERA);
});
cljs.core.enable_console_print_BANG_.call(null);
window.onload = drape.client.init_drape.call(null);

//# sourceMappingURL=client.js.map
