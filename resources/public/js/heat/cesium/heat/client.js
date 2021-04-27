// Compiled by ClojureScript 1.10.439 {}
goog.provide('cesium.heat.client');
goog.require('cljs.core');
goog.require('cesium.client');
cesium.heat.client.MY_HOME_VIEW = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"latitude","latitude",394867543),60.0,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),30.15,new cljs.core.Keyword(null,"height","height",1025178622),(2000),new cljs.core.Keyword(null,"heading","heading",-1312171873),(130),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(-15),new cljs.core.Keyword(null,"roll","roll",11266999),(0)], null);
cesium.heat.client.HEATMAP = null;
cesium.heat.client.heatmap_init = (function cesium$heat$client$heatmap_init(bounds,options){
return (
cesium.heat.client.HEATMAP = CesiumHeatmap.create(cesium.client.VIEWER,bounds,options))
;
});
cesium.heat.client.heatmap_data = (function cesium$heat$client$heatmap_data(valmin,valmax,data){
var data__$1 = (function (){var iter__4434__auto__ = (function cesium$heat$client$heatmap_data_$_iter__14194(s__14195){
return (new cljs.core.LazySeq(null,(function (){
var s__14195__$1 = s__14195;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__14195__$1);
if(temp__5735__auto__){
var s__14195__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14195__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__14195__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__14197 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__14196 = (0);
while(true){
if((i__14196 < size__4433__auto__)){
var vec__14198 = cljs.core._nth.call(null,c__4432__auto__,i__14196);
var x = cljs.core.nth.call(null,vec__14198,(0),null);
var y = cljs.core.nth.call(null,vec__14198,(1),null);
var v = cljs.core.nth.call(null,vec__14198,(2),null);
cljs.core.chunk_append.call(null,b__14197,new cljs.core.PersistentArrayMap(null, 3, ["x",x,"y",y,"value",v], null));

var G__14204 = (i__14196 + (1));
i__14196 = G__14204;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14197),cesium$heat$client$heatmap_data_$_iter__14194.call(null,cljs.core.chunk_rest.call(null,s__14195__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14197),null);
}
} else {
var vec__14201 = cljs.core.first.call(null,s__14195__$2);
var x = cljs.core.nth.call(null,vec__14201,(0),null);
var y = cljs.core.nth.call(null,vec__14201,(1),null);
var v = cljs.core.nth.call(null,vec__14201,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, ["x",x,"y",y,"value",v], null),cesium$heat$client$heatmap_data_$_iter__14194.call(null,cljs.core.rest.call(null,s__14195__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,data);
})();
var data__$2 = cljs.core.clj__GT_js.call(null,data__$1);
return cesium.heat.client.HEATMAP.setWGS84Data(valmin,valmax,data__$2);
});
cesium.heat.client.init_heat = (function cesium$heat$client$init_heat(){
cesium.client.add_terrain.call(null,null,cesium.client.VIEWER);

cesium.client.start_event_processing.call(null,cesium.client.VIEWER);

return cesium.client.add_orbit_button.call(null,cesium.client.CAMERA);
});
cljs.core.enable_console_print_BANG_.call(null);
window.onload = cesium.heat.client.init_heat.call(null);

//# sourceMappingURL=client.js.map
