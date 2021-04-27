// Compiled by ClojureScript 1.10.439 {}
goog.provide('wint.client');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cognitect.transit');
goog.require('mvo.move');
wint.client.MAP = null;
wint.client.TO_EVENTS = (2000);
wint.client.TO_MOVE = (200);
wint.client.OBJECTS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
wint.client.MOVERS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
wint.client.DATA = null;
wint.client.T_SCALE = 1.0;
wint.client.by_id = (function wint$client$by_id(id){
return document.getElementById(id);
});
wint.client.set_html_BANG_ = (function wint$client$set_html_BANG_(id,html){
return wint.client.by_id.call(null,id).innerHTML = html;
});
wint.client.read_transit = (function wint$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
wint.client.error_handler = (function wint$client$error_handler(resp){
var map__29165 = resp;
var map__29165__$1 = (((((!((map__29165 == null))))?(((((map__29165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29165):map__29165);
var status = cljs.core.get.call(null,map__29165__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__29165__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,"AJAX ERROR:",status,status_text);
});
wint.client.base_layers = (function wint$client$base_layers(){
var tile1 = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",({"maxZoom": (20), "attribution": "Ru, OpenStreetMap &copy;"}));
var tile2 = L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile3 = L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile4 = L.tileLayer("http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile5 = L.tileLayer("http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
return new cljs.core.PersistentArrayMap(null, 5, ["OpenStreetMap",tile1,"Google Satellite",tile2,"Google Streets",tile3,"Google Hybrid",tile4,"Google Terrain",tile5], null);
});
wint.client.create_layer = (function wint$client$create_layer(lmp){
var pred__29167 = cljs.core._EQ_;
var expr__29168 = lmp.call(null,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core.truth_(pred__29167.call(null,new cljs.core.Keyword(null,"Base","Base",-418950037),expr__29168))){
return wint.client.base_layers.call(null);
} else {
if(cljs.core.truth_(pred__29167.call(null,new cljs.core.Keyword(null,"GeoJSON","GeoJSON",33508860),expr__29168))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([lmp.call(null,new cljs.core.Keyword(null,"title","title",636505583)),(new L.GeoJSON.AJAX(lmp.call(null,new cljs.core.Keyword(null,"source","source",-433931539)),cljs.core.clj__GT_js.call(null,lmp.call(null,new cljs.core.Keyword(null,"attributes","attributes",-74013604)))))]);
} else {
if(cljs.core.truth_(pred__29167.call(null,new cljs.core.Keyword(null,"Tile","Tile",1227624978),expr__29168))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([lmp.call(null,new cljs.core.Keyword(null,"title","title",636505583)),L.tileLayer(lmp.call(null,new cljs.core.Keyword(null,"source","source",-433931539)),cljs.core.clj__GT_js.call(null,lmp.call(null,new cljs.core.Keyword(null,"attributes","attributes",-74013604))))]);
} else {
return alert(["Unknown layer class ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lmp.call(null,new cljs.core.Keyword(null,"type","type",1174270348)))].join(''));
}
}
}
});
wint.client.remove_layer = (function wint$client$remove_layer(params){
var temp__5733__auto__ = params.call(null,new cljs.core.Keyword(null,"title","title",636505583));
if(cljs.core.truth_(temp__5733__auto__)){
var tit = temp__5733__auto__;
var temp__5735__auto___29170 = cljs.core.deref.call(null,wint.client.OBJECTS).call(null,tit);
if(cljs.core.truth_(temp__5735__auto___29170)){
var lay_29171 = temp__5735__auto___29170;
lay_29171.remove();

cljs.core._vreset_BANG_.call(null,wint.client.OBJECTS,cljs.core.dissoc.call(null,cljs.core._deref.call(null,wint.client.OBJECTS),tit));
} else {
}

var temp__5733__auto____$1 = cljs.core.deref.call(null,wint.client.MOVERS).call(null,tit);
if(cljs.core.truth_(temp__5733__auto____$1)){
var mov = temp__5733__auto____$1;
return cljs.core._vreset_BANG_.call(null,wint.client.MOVERS,cljs.core.dissoc.call(null,cljs.core._deref.call(null,wint.client.MOVERS),mov));
} else {
return null;
}
} else {
return null;
}
});
wint.client.add_path = (function wint$client$add_path(params){
var map__29172 = params;
var map__29172__$1 = (((((!((map__29172 == null))))?(((((map__29172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29172):map__29172);
var title = cljs.core.get.call(null,map__29172__$1,new cljs.core.Keyword(null,"title","title",636505583));
var type = cljs.core.get.call(null,map__29172__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var coord = cljs.core.get.call(null,map__29172__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var options = cljs.core.get.call(null,map__29172__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.truth_(title)){
if(cljs.core.truth_(cljs.core.deref.call(null,wint.client.OBJECTS).call(null,title))){
wint.client.remove_layer.call(null,params);
} else {
}

var ops = cljs.core.clj__GT_js.call(null,options);
var crd = cljs.core.clj__GT_js.call(null,coord);
var lay = (function (){var pred__29174 = cljs.core._EQ_;
var expr__29175 = type;
if(cljs.core.truth_(pred__29174.call(null,new cljs.core.Keyword(null,"polyline","polyline",-1731551044),expr__29175))){
return (new L.polyline(crd,ops));
} else {
if(cljs.core.truth_(pred__29174.call(null,new cljs.core.Keyword(null,"polygon","polygon",837053759),expr__29175))){
return (new L.polygon(crd,ops));
} else {
if(cljs.core.truth_(pred__29174.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__29175))){
return (new L.rectangle(crd,ops));
} else {
if(cljs.core.truth_(pred__29174.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__29175))){
return (new L.circle(crd,ops));
} else {
if(cljs.core.truth_(pred__29174.call(null,new cljs.core.Keyword(null,"circle-marker","circle-marker",-241178759),expr__29175))){
return (new L.circleMarker(crd,ops));
} else {
return null;
}
}
}
}
}
})();
if(cljs.core.truth_(lay)){
cljs.core._vreset_BANG_.call(null,wint.client.OBJECTS,cljs.core.assoc.call(null,cljs.core._deref.call(null,wint.client.OBJECTS),title,lay));

return lay.addTo(wint.client.MAP);
} else {
return null;
}
} else {
return null;
}
});
wint.client.add_marker = (function wint$client$add_marker(params){
var map__29177 = params;
var map__29177__$1 = (((((!((map__29177 == null))))?(((((map__29177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29177):map__29177);
var title = cljs.core.get.call(null,map__29177__$1,new cljs.core.Keyword(null,"title","title",636505583));
var coord = cljs.core.get.call(null,map__29177__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var course = cljs.core.get.call(null,map__29177__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var speed = cljs.core.get.call(null,map__29177__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var url = cljs.core.get.call(null,map__29177__$1,new cljs.core.Keyword(null,"url","url",276297046));
var icon_size = cljs.core.get.call(null,map__29177__$1,new cljs.core.Keyword(null,"icon-size","icon-size",414161352));
var draggable = cljs.core.get.call(null,map__29177__$1,new cljs.core.Keyword(null,"draggable","draggable",1676206163));
if(cljs.core.truth_(title)){
if(cljs.core.truth_(cljs.core.deref.call(null,wint.client.OBJECTS).call(null,title))){
wint.client.remove_layer.call(null,params);
} else {
}

var vec__29179 = coord;
var lat = cljs.core.nth.call(null,vec__29179,(0),null);
var lon = cljs.core.nth.call(null,vec__29179,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": url, "iconSize": (function (){var or__4047__auto__ = cljs.core.clj__GT_js.call(null,icon_size);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [(32),(32)];
}
})()}));
var ops = ({"title": title, "icon": ico, "rotationAngle": course, "rotationOrigin": "center center", "draggable": (function (){var or__4047__auto__ = cljs.core.clj__GT_js.call(null,draggable);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return true;
}
})()});
var mrk = (new L.marker(pos,ops));
cljs.core._vreset_BANG_.call(null,wint.client.OBJECTS,cljs.core.assoc.call(null,cljs.core._deref.call(null,wint.client.OBJECTS),title,mrk));

if(cljs.core.truth_(speed)){
cljs.core._vreset_BANG_.call(null,wint.client.MOVERS,cljs.core.assoc.call(null,cljs.core._deref.call(null,wint.client.MOVERS),title,mvo.move.create_mover.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon], null),course,speed,mrk)));
} else {
}

mrk.addTo(wint.client.MAP);

return mrk;
} else {
return null;
}
});
wint.client.add_heatmap = (function wint$client$add_heatmap(params){
var map__29182 = params;
var map__29182__$1 = (((((!((map__29182 == null))))?(((((map__29182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29182):map__29182);
var title = cljs.core.get.call(null,map__29182__$1,new cljs.core.Keyword(null,"title","title",636505583));
var data = cljs.core.get.call(null,map__29182__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var options = cljs.core.get.call(null,map__29182__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.truth_(title)){
if(cljs.core.truth_(cljs.core.deref.call(null,wint.client.OBJECTS).call(null,title))){
wint.client.remove_layer.call(null,params);
} else {
}

var data__$1 = cljs.core.clj__GT_js.call(null,data);
var lay = (new HeatmapOverlay(cljs.core.clj__GT_js.call(null,options)));
wint.client.DATA = data__$1;

cljs.core._vreset_BANG_.call(null,wint.client.OBJECTS,cljs.core.assoc.call(null,cljs.core._deref.call(null,wint.client.OBJECTS),title,lay));

lay.addTo(wint.client.MAP);

return lay.setData(data__$1);
} else {
return null;
}
});
wint.client.add_popup = (function wint$client$add_popup(params){
var map__29184 = params;
var map__29184__$1 = (((((!((map__29184 == null))))?(((((map__29184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29184):map__29184);
var lat = cljs.core.get.call(null,map__29184__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__29184__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html = cljs.core.get.call(null,map__29184__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var pos = (cljs.core.truth_((function (){var and__4036__auto__ = lat;
if(cljs.core.truth_(and__4036__auto__)){
return lon;
} else {
return and__4036__auto__;
}
})())?[lat,lon]:wint.client.MAP.getCenter());
return wint.client.MAP.addLayer((new L.popup(({}))).setLatLng(pos).setContent(html));
});
wint.client.set_time_scale = (function wint$client$set_time_scale(params){
wint.client.T_SCALE = params.call(null,new cljs.core.Keyword(null,"time-scale","time-scale",-650198100));

return mvo.move.set_timeout_hrs.call(null,wint.client.TO_MOVE,wint.client.T_SCALE);
});
wint.client.move_control = (function wint$client$move_control(params){
var map__29186 = params;
var map__29186__$1 = (((((!((map__29186 == null))))?(((((map__29186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29186):map__29186);
var title = cljs.core.get.call(null,map__29186__$1,new cljs.core.Keyword(null,"title","title",636505583));
var coord = cljs.core.get.call(null,map__29186__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var course = cljs.core.get.call(null,map__29186__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var speed = cljs.core.get.call(null,map__29186__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp__5735__auto__ = cljs.core.deref.call(null,wint.client.MOVERS).call(null,title);
if(cljs.core.truth_(temp__5735__auto__)){
var mv = temp__5735__auto__;
if(cljs.core.truth_(coord)){
mvo.move.set_coord.call(null,mv,coord);
} else {
}

if(cljs.core.truth_(course)){
mvo.move.set_course.call(null,mv,course);
} else {
}

if(cljs.core.truth_(speed)){
return mvo.move.set_speed.call(null,mv,speed);
} else {
return null;
}
} else {
return null;
}
});
wint.client.events_hr = (function wint$client$events_hr(resp){
var seq__29188 = cljs.core.seq.call(null,wint.client.read_transit.call(null,resp));
var chunk__29189 = null;
var count__29190 = (0);
var i__29191 = (0);
while(true){
if((i__29191 < count__29190)){
var map__29192 = cljs.core._nth.call(null,chunk__29189,i__29191);
var map__29192__$1 = (((((!((map__29192 == null))))?(((((map__29192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29192):map__29192);
var evt = map__29192__$1;
var event = cljs.core.get.call(null,map__29192__$1,new cljs.core.Keyword(null,"event","event",301435442));
cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"EVENTS-HR","EVENTS-HR",1465914618),evt], null));

var pred__29194_29202 = cljs.core._EQ_;
var expr__29195_29203 = event;
if(cljs.core.truth_(pred__29194_29202.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__29195_29203))){
wint.client.add_path.call(null,evt);
} else {
if(cljs.core.truth_(pred__29194_29202.call(null,new cljs.core.Keyword(null,"marker","marker",865118313),expr__29195_29203))){
wint.client.add_marker.call(null,evt);
} else {
if(cljs.core.truth_(pred__29194_29202.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__29195_29203))){
wint.client.add_popup.call(null,evt);
} else {
if(cljs.core.truth_(pred__29194_29202.call(null,new cljs.core.Keyword(null,"heatmap","heatmap",-7865851),expr__29195_29203))){
wint.client.add_heatmap.call(null,evt);
} else {
if(cljs.core.truth_(pred__29194_29202.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__29195_29203))){
wint.client.remove_layer.call(null,evt);
} else {
if(cljs.core.truth_(pred__29194_29202.call(null,new cljs.core.Keyword(null,"time-scale","time-scale",-650198100),expr__29195_29203))){
wint.client.set_time_scale.call(null,evt);
} else {
if(cljs.core.truth_(pred__29194_29202.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),expr__29195_29203))){
wint.client.move_control.call(null,evt);
} else {
alert("Unknown event: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,evt], null));
}
}
}
}
}
}
}


var G__29204 = seq__29188;
var G__29205 = chunk__29189;
var G__29206 = count__29190;
var G__29207 = (i__29191 + (1));
seq__29188 = G__29204;
chunk__29189 = G__29205;
count__29190 = G__29206;
i__29191 = G__29207;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29188);
if(temp__5735__auto__){
var seq__29188__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29188__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__29188__$1);
var G__29208 = cljs.core.chunk_rest.call(null,seq__29188__$1);
var G__29209 = c__4461__auto__;
var G__29210 = cljs.core.count.call(null,c__4461__auto__);
var G__29211 = (0);
seq__29188 = G__29208;
chunk__29189 = G__29209;
count__29190 = G__29210;
i__29191 = G__29211;
continue;
} else {
var map__29197 = cljs.core.first.call(null,seq__29188__$1);
var map__29197__$1 = (((((!((map__29197 == null))))?(((((map__29197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29197):map__29197);
var evt = map__29197__$1;
var event = cljs.core.get.call(null,map__29197__$1,new cljs.core.Keyword(null,"event","event",301435442));
cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"EVENTS-HR","EVENTS-HR",1465914618),evt], null));

var pred__29199_29212 = cljs.core._EQ_;
var expr__29200_29213 = event;
if(cljs.core.truth_(pred__29199_29212.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__29200_29213))){
wint.client.add_path.call(null,evt);
} else {
if(cljs.core.truth_(pred__29199_29212.call(null,new cljs.core.Keyword(null,"marker","marker",865118313),expr__29200_29213))){
wint.client.add_marker.call(null,evt);
} else {
if(cljs.core.truth_(pred__29199_29212.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__29200_29213))){
wint.client.add_popup.call(null,evt);
} else {
if(cljs.core.truth_(pred__29199_29212.call(null,new cljs.core.Keyword(null,"heatmap","heatmap",-7865851),expr__29200_29213))){
wint.client.add_heatmap.call(null,evt);
} else {
if(cljs.core.truth_(pred__29199_29212.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__29200_29213))){
wint.client.remove_layer.call(null,evt);
} else {
if(cljs.core.truth_(pred__29199_29212.call(null,new cljs.core.Keyword(null,"time-scale","time-scale",-650198100),expr__29200_29213))){
wint.client.set_time_scale.call(null,evt);
} else {
if(cljs.core.truth_(pred__29199_29212.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),expr__29200_29213))){
wint.client.move_control.call(null,evt);
} else {
alert("Unknown event: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,evt], null));
}
}
}
}
}
}
}


var G__29214 = cljs.core.next.call(null,seq__29188__$1);
var G__29215 = null;
var G__29216 = (0);
var G__29217 = (0);
seq__29188 = G__29214;
chunk__29189 = G__29215;
count__29190 = G__29216;
i__29191 = G__29217;
continue;
}
} else {
return null;
}
}
break;
}
});
wint.client.request_events = (function wint$client$request_events(){
ajax.core.GET.call(null,"/events",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),wint.client.events_hr,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),wint.client.error_handler], null));

return setTimeout(wint.client.request_events,wint.client.TO_EVENTS);
});
wint.client.map_hr = (function wint$client$map_hr(resp){
var mp = wint.client.read_transit.call(null,resp);
cljs.core.println.call(null,new cljs.core.Keyword(null,"RMR","RMR",1600693036),mp);

if(((cljs.core.map_QMARK_.call(null,mp)) && ((!(cljs.core.empty_QMARK_.call(null,mp)))))){
var lmps = cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,wint.client.create_layer,mp.call(null,new cljs.core.Keyword(null,"layers","layers",1944875032))));
var flay = cljs.core.second.call(null,cljs.core.first.call(null,lmps));
var lctl = L.control.layers(cljs.core.clj__GT_js.call(null,lmps),null);
var fzoom = ((function (lmps,flay,lctl,mp){
return (function (){
return wint.client.set_html_BANG_.call(null,"zoom",["zoom ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wint.client.MAP.getZoom())].join(''));
});})(lmps,flay,lctl,mp))
;
wint.client.add_heatmap.call(null,cljs.core.PersistentArrayMap.EMPTY);

flay.addTo(wint.client.MAP);

wint.client.MAP.setView(cljs.core.clj__GT_js.call(null,mp.call(null,new cljs.core.Keyword(null,"center","center",-748944368))),mp.call(null,new cljs.core.Keyword(null,"zoom","zoom",-1827487038)));

(new L.control.mousePosition()).addTo(wint.client.MAP);

lctl.addTo(wint.client.MAP);

fzoom.call(null);

return wint.client.MAP.on("zoomend",fzoom);
} else {
return wint.client.add_popup.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"html","html",-998796897),["<h1>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mp),"</h1>"].join('')], null));
}
});
wint.client.request_map = (function wint$client$request_map(){
return ajax.core.GET.call(null,"/map",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),wint.client.map_hr,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),wint.client.error_handler], null));
});
wint.client.init = (function wint$client$init(){
wint.client.MAP = L.map("MAP");

wint.client.MAP.setView([(0),(0)],(4));

if(cljs.core.truth_(wint.client.by_id.call(null,"LEFT"))){
L.control.sidebar("LEFT",({"position": "left"})).addTo(wint.client.MAP);
} else {
}

if(cljs.core.truth_(wint.client.by_id.call(null,"RIGHT"))){
L.control.sidebar("RIGHT",({"position": "right"})).addTo(wint.client.MAP);
} else {
}

return wint.client.request_map.call(null);
});
wint.client.move_markers = (function wint$client$move_markers(){
var seq__29218_29228 = cljs.core.seq.call(null,cljs.core.deref.call(null,wint.client.MOVERS));
var chunk__29219_29229 = null;
var count__29220_29230 = (0);
var i__29221_29231 = (0);
while(true){
if((i__29221_29231 < count__29220_29230)){
var vec__29222_29232 = cljs.core._nth.call(null,chunk__29219_29229,i__29221_29231);
var n_29233 = cljs.core.nth.call(null,vec__29222_29232,(0),null);
var m_29234 = cljs.core.nth.call(null,vec__29222_29232,(1),null);
mvo.move.move.call(null,m_29234);


var G__29235 = seq__29218_29228;
var G__29236 = chunk__29219_29229;
var G__29237 = count__29220_29230;
var G__29238 = (i__29221_29231 + (1));
seq__29218_29228 = G__29235;
chunk__29219_29229 = G__29236;
count__29220_29230 = G__29237;
i__29221_29231 = G__29238;
continue;
} else {
var temp__5735__auto___29239 = cljs.core.seq.call(null,seq__29218_29228);
if(temp__5735__auto___29239){
var seq__29218_29240__$1 = temp__5735__auto___29239;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29218_29240__$1)){
var c__4461__auto___29241 = cljs.core.chunk_first.call(null,seq__29218_29240__$1);
var G__29242 = cljs.core.chunk_rest.call(null,seq__29218_29240__$1);
var G__29243 = c__4461__auto___29241;
var G__29244 = cljs.core.count.call(null,c__4461__auto___29241);
var G__29245 = (0);
seq__29218_29228 = G__29242;
chunk__29219_29229 = G__29243;
count__29220_29230 = G__29244;
i__29221_29231 = G__29245;
continue;
} else {
var vec__29225_29246 = cljs.core.first.call(null,seq__29218_29240__$1);
var n_29247 = cljs.core.nth.call(null,vec__29225_29246,(0),null);
var m_29248 = cljs.core.nth.call(null,vec__29225_29246,(1),null);
mvo.move.move.call(null,m_29248);


var G__29249 = cljs.core.next.call(null,seq__29218_29240__$1);
var G__29250 = null;
var G__29251 = (0);
var G__29252 = (0);
seq__29218_29228 = G__29249;
chunk__29219_29229 = G__29250;
count__29220_29230 = G__29251;
i__29221_29231 = G__29252;
continue;
}
} else {
}
}
break;
}

return setTimeout(wint.client.move_markers,wint.client.TO_MOVE);
});
wint.client.tst = (function wint$client$tst(){
return wint.client.add_heatmap.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"hm1",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max","max",61366548),(8),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lat","lat",-580793929),(60),new cljs.core.Keyword(null,"lng","lng",1667213918),(30),new cljs.core.Keyword(null,"value","value",305978217),(8)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lat","lat",-580793929),(63),new cljs.core.Keyword(null,"lng","lng",1667213918),(30),new cljs.core.Keyword(null,"value","value",305978217),(6)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lat","lat",-580793929),(66),new cljs.core.Keyword(null,"lng","lng",1667213918),(30),new cljs.core.Keyword(null,"value","value",305978217),(3)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lat","lat",-580793929),(69),new cljs.core.Keyword(null,"lng","lng",1667213918),(30),new cljs.core.Keyword(null,"value","value",305978217),(1)], null)], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scaleRadius","scaleRadius",-59738660),true,new cljs.core.Keyword(null,"radius","radius",-2073122258),(2),new cljs.core.Keyword(null,"useLocalExtrema","useLocalExtrema",1349969296),true], null)], null));
});
cljs.core.enable_console_print_BANG_.call(null);
window.onload = wint.client.init.call(null);
wint.client.request_events.call(null);
mvo.move.set_timeout_hrs.call(null,wint.client.TO_MOVE,wint.client.T_SCALE);
wint.client.move_markers.call(null);

//# sourceMappingURL=client.js.map
