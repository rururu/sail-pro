// Compiled by ClojureScript 1.10.439 {}
goog.provide('cesium.testclient');
goog.require('cljs.core');
goog.require('cesium.client');
cesium.testclient.init_client = (function cesium$testclient$init_client(){
cesium.client.add_terrain.call(null,null,cesium.client.VIEWER);

cesium.client.camera_home.call(null,cesium.client.CAMERA,cesium.client.HOME_VIEW);

cesium.client.start_event_processing.call(null,cesium.client.VIEWER);

cesium.client.add_orbit_button.call(null,cesium.client.CAMERA);

return cesium.client.mouse_move.call(null);
});
cljs.core.enable_console_print_BANG_.call(null);
window.onload = cesium.testclient.init_client.call(null);

//# sourceMappingURL=testclient.js.map
