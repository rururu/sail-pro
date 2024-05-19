// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('client.cesium');
goog.require('cljs.core');
goog.require('geo.calc');
client.cesium.VIEWER = (new Cesium.Viewer("cesiumContainer",({"imageryProvider": Cesium.createWorldImagery(), "terrainProvider": Cesium.createWorldTerrain(), "animation": false, "shouldAnimate": true})));
client.cesium.CZML_SRC = (new Cesium.CzmlDataSource());
client.cesium.CZML_DATA = null;
client.cesium.CAMERA = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),(0),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(0),new cljs.core.Keyword(null,"roll","roll",11266999),(0)], null));
client.cesium.MAX_UPGROUND = (100);
client.cesium.ALT = (0);
client.cesium.ZOOM = (0);
client.cesium.norm_crs = (function client$cesium$norm_crs(x){
if((x > (360))){
return (x - (360));
} else {
if((x < (0))){
return (x + (360));
} else {
return x;

}
}
});
client.cesium.cz_processor = (function client$cesium$cz_processor(e){
cljs.core.println.call(null,new cljs.core.Keyword(null,"CZML","CZML",-1539311408),e.data);

client.cesium.CZML_DATA = JSON.parse(e.data);

return client.cesium.CZML_SRC.process(client.cesium.CZML_DATA);
});
client.cesium.fly_control = (function client$cesium$fly_control(lat,lon,alt,hea,pit,rol,per){
var dest = Cesium.Cartesian3.fromDegrees(lon,lat,alt);
return client.cesium.VIEWER.camera.flyTo(({"destination": dest, "orientation": ({"heading": Cesium.Math.toRadians(hea), "pitch": Cesium.Math.toRadians(pit), "roll": Cesium.Math.toRadians(rol)}), "maximumHeight": alt, "duration": per, "easingFunction": (function (time){
return time;
})}));
});
client.cesium.move_control = (function client$cesium$move_control(lat,lon,alt,hea,pit,rol){
var dest = Cesium.Cartesian3.fromDegrees(lon,lat,alt);
return client.cesium.VIEWER.camera.setView(({"destination": dest, "orientation": ({"heading": Cesium.Math.toRadians(hea), "pitch": Cesium.Math.toRadians(pit), "roll": Cesium.Math.toRadians(rol)})}));
});
client.cesium.sample_height = (function client$cesium$sample_height(p__2096,alt){
var vec__2097 = p__2096;
var phi = cljs.core.nth.call(null,vec__2097,(0),null);
var lam = cljs.core.nth.call(null,vec__2097,(1),null);
var pos = (new Cesium.Cartographic(lam,phi,alt));
var sh = client.cesium.VIEWER.scene.sampleHeight(pos);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [phi,lam,(function (){var or__5002__auto__ = sh;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (-7777);
}
})()], null);
});
client.cesium.fly_to = (function client$cesium$fly_to(lat,lon,alt,crs,per){
var pitch = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client.cesium.CAMERA));
var roll = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client.cesium.CAMERA));
var head = client.cesium.norm_crs.call(null,(crs + new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client.cesium.CAMERA))));
if((alt > client.cesium.MAX_UPGROUND)){
return client.cesium.fly_control.call(null,lat,lon,alt,head,pitch,roll,per);
} else {
var vec__2100 = client.cesium.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [geo.calc.radians.call(null,lat),geo.calc.radians.call(null,lon)], null),client.cesium.ALT);
var _ = cljs.core.nth.call(null,vec__2100,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__2100,(1),null);
var sh = cljs.core.nth.call(null,vec__2100,(2),null);
if((sh > (-7777))){
client.cesium.ALT = ((sh + alt) | (0));
} else {
}

return client.cesium.fly_control.call(null,lat,lon,client.cesium.ALT,head,pitch,roll,per);
}
});
client.cesium.init_3D_view = (function client$cesium$init_3D_view(url){
(client.cesium.VIEWER.scene.globe.enableLighting = true);

client.cesium.VIEWER.dataSources.add(client.cesium.CZML_SRC);

(new EventSource([cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"/czml"].join(''))).addEventListener("czml",client.cesium.cz_processor,false);

return cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"INIT-3D-VIEW","INIT-3D-VIEW",-1398074686),url], null));
});
client.cesium.hig_ray = (function client$cesium$hig_ray(lat,lon,bea,dis,step,alt){
var ray = geo.calc.ray.call(null,lat,lon,bea,dis,step);
return cljs.core.map.call(null,(function (p1__2103_SHARP_){
return client.cesium.sample_height.call(null,p1__2103_SHARP_,alt);
}),ray);
});
client.cesium.los_end = (function client$cesium$los_end(lat,lon,bea,dis,step,alt){
var hir = client.cesium.hig_ray.call(null,lat,lon,bea,dis,step,alt);
var f = cljs.core.first.call(null,hir);
var r = cljs.core.rest.call(null,hir);
while(true){
if(cljs.core.seq.call(null,r)){
var h1 = cljs.core.nth.call(null,f,(2));
var fr = cljs.core.first.call(null,r);
var h2 = cljs.core.nth.call(null,fr,(2));
if((h2 <= alt)){
var G__2104 = fr;
var G__2105 = cljs.core.rest.call(null,r);
f = G__2104;
r = G__2105;
continue;
} else {
if((((h1 > (-7777))) && ((h1 <= alt)))){
return f;
} else {
return cljs.core.first.call(null,hir);

}
}
} else {
if((cljs.core.nth.call(null,f,(2)) > (-7777))){
return f;
} else {
return cljs.core.first.call(null,hir);
}
}
break;
}
});
client.cesium.los_sector = (function client$cesium$los_sector(center,sector,dist,alt,dist_step,bea_step){
var vec__2106 = center;
var lat = cljs.core.nth.call(null,vec__2106,(0),null);
var lon = cljs.core.nth.call(null,vec__2106,(1),null);
var vec__2109 = sector;
var start = cljs.core.nth.call(null,vec__2109,(0),null);
var end = cljs.core.nth.call(null,vec__2109,(1),null);
var losec = (function (){var iter__5480__auto__ = (function client$cesium$los_sector_$_iter__2112(s__2113){
return (new cljs.core.LazySeq(null,(function (){
var s__2113__$1 = s__2113;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__2113__$1);
if(temp__5804__auto__){
var s__2113__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2113__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__2113__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__2115 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__2114 = (0);
while(true){
if((i__2114 < size__5479__auto__)){
var bea = cljs.core._nth.call(null,c__5478__auto__,i__2114);
cljs.core.chunk_append.call(null,b__2115,client.cesium.los_end.call(null,lat,lon,bea,dist,dist_step,alt));

var G__2116 = (i__2114 + (1));
i__2114 = G__2116;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2115),client$cesium$los_sector_$_iter__2112.call(null,cljs.core.chunk_rest.call(null,s__2113__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2115),null);
}
} else {
var bea = cljs.core.first.call(null,s__2113__$2);
return cljs.core.cons.call(null,client.cesium.los_end.call(null,lat,lon,bea,dist,dist_step,alt),client$cesium$los_sector_$_iter__2112.call(null,cljs.core.rest.call(null,s__2113__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,cljs.core.range.call(null,start,end,bea_step));
})();
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [geo.calc.radians.call(null,lat),geo.calc.radians.call(null,lon),alt], null),losec);
});
client.cesium.get_zoom = (function client$cesium$get_zoom(){
return client.cesium.ZOOM;
});
client.cesium.set_zoom = (function client$cesium$set_zoom(z){
if((z < client.cesium.ZOOM)){
client.cesium.VIEWER.camera.zoomOut((client.cesium.ZOOM - z));
} else {
if((z > client.cesium.ZOOM)){
client.cesium.VIEWER.camera.zoomIn((z - client.cesium.ZOOM));
} else {
}
}

return (
client.cesium.ZOOM = (((z < (0)))?(0):z))
;
});

//# sourceMappingURL=cesium.js.map
