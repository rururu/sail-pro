// Compiled by ClojureScript 1.10.439 {}
goog.provide('web.client');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cognitect.transit');
web.client.MAP = null;
web.client.by_id = (function web$client$by_id(id){
return document.getElementById(id);
});
web.client.read_transit = (function web$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
web.client.error_handler = (function web$client$error_handler(resp){
var map__8937 = resp;
var map__8937__$1 = (((((!((map__8937 == null))))?(((((map__8937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8937):map__8937);
var status = cljs.core.get.call(null,map__8937__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__8937__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,"AJAX ERROR:",status,status_text);
});
web.client.request_map_hr = (function web$client$request_map_hr(resp){
return cljs.core.println.call(null,new cljs.core.Keyword(null,"RMR","RMR",1600693036),resp,web.client.read_transit.call(null,resp));
});
web.client.request_map = (function web$client$request_map(){
return ajax.core.GET.call(null,"/map",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),web.client.request_map_hr,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),web.client.error_handler], null));
});
web.client.init = (function web$client$init(){
web.client.MAP = (new ol.Map(({"target": web.client.by_id.call(null,"MAP")})));

if(cljs.core.truth_(web.client.by_id.call(null,"LEFT"))){
web.client.MAP.addControl((new ol.control.Sidebar(({"element": "LEFT", "position": "left"}))));
} else {
}

if(cljs.core.truth_(web.client.by_id.call(null,"RIGHT"))){
web.client.MAP.addControl((new ol.control.Sidebar(({"element": "RIGHT", "position": "right"}))));
} else {
}

return web.client.request_map.call(null);
});
cljs.core.enable_console_print_BANG_.call(null);
window.onload = web.client.init.call(null);

//# sourceMappingURL=client.js.map
