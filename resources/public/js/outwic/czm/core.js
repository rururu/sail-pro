// Compiled by ClojureScript 1.10.439 {}
goog.provide('czm.core');
goog.require('cljs.core');
goog.require('geo.calc');
czm.core.VIEWER = (new Cesium.Viewer("cesiumContainer",({"imageryProvider": Cesium.createWorldImagery(), "terrainProvider": Cesium.createWorldTerrain(), "animation": false, "shouldAnimate": true})));
czm.core.CZML_SRC = (new Cesium.CzmlDataSource());
czm.core.CAMERA = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),(0),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(0),new cljs.core.Keyword(null,"roll","roll",11266999),(0)], null));
czm.core.MAX_UPGROUND = (100);
czm.core.ALT = (0);
czm.core.norm_crs = (function czm$core$norm_crs(x){
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
czm.core.cz_processor = (function czm$core$cz_processor(e){
var data = e.data;
var data__$1 = JSON.parse(data);
return czm.core.CZML_SRC.process(data__$1);
});
czm.core.fly_control = (function czm$core$fly_control(lat,lon,alt,hea,pit,rol,per){
var dest = Cesium.Cartesian3.fromDegrees(lon,lat,alt);
return czm.core.VIEWER.camera.flyTo(({"destination": dest, "orientation": ({"heading": Cesium.Math.toRadians(hea), "pitch": Cesium.Math.toRadians(pit), "roll": Cesium.Math.toRadians(rol)}), "maximumHeight": alt, "duration": per, "easingFunction": ((function (dest){
return (function (time){
return time;
});})(dest))
}));
});
czm.core.move_control = (function czm$core$move_control(lat,lon,alt,hea,pit,rol){
var dest = Cesium.Cartesian3.fromDegrees(lon,lat,alt);
return czm.core.VIEWER.camera.setView(({"destination": dest, "orientation": ({"heading": Cesium.Math.toRadians(hea), "pitch": Cesium.Math.toRadians(pit), "roll": Cesium.Math.toRadians(rol)})}));
});
czm.core.sample_height = (function czm$core$sample_height(p__11983,alt){
var vec__11984 = p__11983;
var phi = cljs.core.nth.call(null,vec__11984,(0),null);
var lam = cljs.core.nth.call(null,vec__11984,(1),null);
var pos = (new Cesium.Cartographic(lam,phi,alt));
var sh = czm.core.VIEWER.scene.sampleHeight(pos);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [phi,lam,(function (){var or__4047__auto__ = sh;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (-7777);
}
})()], null);
});
czm.core.fly_to = (function czm$core$fly_to(lat,lon,alt,crs,per){
var pitch = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA));
var roll = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA));
var head = czm.core.norm_crs.call(null,(crs + new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA))));
if((alt > czm.core.MAX_UPGROUND)){
return czm.core.fly_control.call(null,lat,lon,alt,head,pitch,roll,per);
} else {
var vec__11987 = czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [geo.calc.radians.call(null,lat),geo.calc.radians.call(null,lon)], null),czm.core.ALT);
var _ = cljs.core.nth.call(null,vec__11987,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__11987,(1),null);
var sh = cljs.core.nth.call(null,vec__11987,(2),null);
if((sh > (-7777))){
czm.core.ALT = ((sh + alt) | (0));
} else {
}

return czm.core.fly_control.call(null,lat,lon,czm.core.ALT,head,pitch,roll,per);
}
});
czm.core.init_3D_view = (function czm$core$init_3D_view(url){
czm.core.VIEWER.dataSources.add(czm.core.CZML_SRC);

(new EventSource(url)).addEventListener("czml",czm.core.cz_processor,false);

return cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"INIT-3D-VIEW","INIT-3D-VIEW",-1398074686),url], null));
});
czm.core.hig_ray = (function czm$core$hig_ray(lat,lon,bea,dis,step,alt){
var ray = geo.calc.ray.call(null,lat,lon,bea,dis,step);
return cljs.core.map.call(null,((function (ray){
return (function (p1__11990_SHARP_){
return czm.core.sample_height.call(null,p1__11990_SHARP_,alt);
});})(ray))
,ray);
});
czm.core.los_end = (function czm$core$los_end(lat,lon,bea,dis,step,alt){
var hir = czm.core.hig_ray.call(null,lat,lon,bea,dis,step,alt);
var f = cljs.core.first.call(null,hir);
var r = cljs.core.rest.call(null,hir);
while(true){
if(cljs.core.seq.call(null,r)){
var h1 = cljs.core.nth.call(null,f,(2));
var fr = cljs.core.first.call(null,r);
var h2 = cljs.core.nth.call(null,fr,(2));
if((h2 <= alt)){
var G__11991 = fr;
var G__11992 = cljs.core.rest.call(null,r);
f = G__11991;
r = G__11992;
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
czm.core.los_sector = (function czm$core$los_sector(center,sector,dist,alt,dist_step,bea_step){
var vec__11993 = center;
var lat = cljs.core.nth.call(null,vec__11993,(0),null);
var lon = cljs.core.nth.call(null,vec__11993,(1),null);
var vec__11996 = sector;
var start = cljs.core.nth.call(null,vec__11996,(0),null);
var end = cljs.core.nth.call(null,vec__11996,(1),null);
var losec = (function (){var iter__4434__auto__ = ((function (vec__11993,lat,lon,vec__11996,start,end){
return (function czm$core$los_sector_$_iter__11999(s__12000){
return (new cljs.core.LazySeq(null,((function (vec__11993,lat,lon,vec__11996,start,end){
return (function (){
var s__12000__$1 = s__12000;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__12000__$1);
if(temp__5735__auto__){
var s__12000__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12000__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__12000__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__12002 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__12001 = (0);
while(true){
if((i__12001 < size__4433__auto__)){
var bea = cljs.core._nth.call(null,c__4432__auto__,i__12001);
cljs.core.chunk_append.call(null,b__12002,czm.core.los_end.call(null,lat,lon,bea,dist,dist_step,alt));

var G__12003 = (i__12001 + (1));
i__12001 = G__12003;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12002),czm$core$los_sector_$_iter__11999.call(null,cljs.core.chunk_rest.call(null,s__12000__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12002),null);
}
} else {
var bea = cljs.core.first.call(null,s__12000__$2);
return cljs.core.cons.call(null,czm.core.los_end.call(null,lat,lon,bea,dist,dist_step,alt),czm$core$los_sector_$_iter__11999.call(null,cljs.core.rest.call(null,s__12000__$2)));
}
} else {
return null;
}
break;
}
});})(vec__11993,lat,lon,vec__11996,start,end))
,null,null));
});})(vec__11993,lat,lon,vec__11996,start,end))
;
return iter__4434__auto__.call(null,cljs.core.range.call(null,start,end,bea_step));
})();
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [geo.calc.radians.call(null,lat),geo.calc.radians.call(null,lon),alt], null),losec);
});

//# sourceMappingURL=core.js.map
