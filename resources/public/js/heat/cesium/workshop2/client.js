// Compiled by ClojureScript 1.10.439 {}
goog.provide('cesium.workshop2.client');
goog.require('cljs.core');
goog.require('cesium.client');
cesium.workshop2.client.W2_HOME_VIEW = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),-73.99811446828902,new cljs.core.Keyword(null,"latitude","latitude",394867543),40.67451289564669,new cljs.core.Keyword(null,"height","height",1025178622),2631.082799425431,new cljs.core.Keyword(null,"heading","heading",-1312171873),7.1077496389876025,new cljs.core.Keyword(null,"pitch","pitch",1495126700),-31.98722309159895,new cljs.core.Keyword(null,"roll","roll",11266999),0.02588325131495497], null);
cesium.workshop2.client.W2_CLOCK_SET = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"animate","animate",1850194573),true,new cljs.core.Keyword(null,"start","start",-355208981),"2017-07-11T16:00:00Z",new cljs.core.Keyword(null,"stop","stop",-2140911342),"2017-07-11T16:20:00Z",new cljs.core.Keyword(null,"current","current",-1088038603),"2017-07-11T16:00:00Z",new cljs.core.Keyword(null,"mult","mult",1466794774),(2)], null);
cesium.workshop2.client.Neighborhoods = cesium.client.VIEWER.entities.add((new Cesium.Entity()));
cesium.workshop2.client.PEPIC = null;
cesium.workshop2.client.kml_adjustment = (function cesium$workshop2$client$kml_adjustment(ds){
cesium.client.VIEWER.dataSources.add(ds);

var vals = ds.entities.values;
var ebbs = cljs.core.filter.call(null,((function (vals){
return (function (p1__24588_SHARP_){
return Cesium.defined(p1__24588_SHARP_.billboard);
});})(vals))
,vals);
var seq__24589 = cljs.core.seq.call(null,ebbs);
var chunk__24590 = null;
var count__24591 = (0);
var i__24592 = (0);
while(true){
if((i__24592 < count__24591)){
var ebb = cljs.core._nth.call(null,chunk__24590,i__24592);
ebb.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM;

ebb.label = null;

ebb.billboard.distanceDisplayCondition = (new Cesium.DistanceDisplayCondition(10.0,20000.0));

var pos_24593 = ebb.position.getValue(Cesium.JulianDate.now());
var pos_24594__$1 = Cesium.Cartographic.fromCartesian(pos_24593);
var lat_24595 = Cesium.Math.toDegrees(pos_24594__$1.latitude);
var lon_24596 = Cesium.Math.toDegrees(pos_24594__$1.longitude);
var desc_24597 = ["<table class=\"cesium-infoBox-defaultTable cesium-infoBox-defaultTable-lighter\"><tbody>","<tr><th>Longitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon_24596.toFixed((5))),"</td></tr>","<tr><th>Latitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_24595.toFixed((5))),"</td></tr>","</tbody></table>"].join('');
ebb.description = desc_24597;


var G__24598 = seq__24589;
var G__24599 = chunk__24590;
var G__24600 = count__24591;
var G__24601 = (i__24592 + (1));
seq__24589 = G__24598;
chunk__24590 = G__24599;
count__24591 = G__24600;
i__24592 = G__24601;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__24589);
if(temp__5735__auto__){
var seq__24589__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24589__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__24589__$1);
var G__24602 = cljs.core.chunk_rest.call(null,seq__24589__$1);
var G__24603 = c__4461__auto__;
var G__24604 = cljs.core.count.call(null,c__4461__auto__);
var G__24605 = (0);
seq__24589 = G__24602;
chunk__24590 = G__24603;
count__24591 = G__24604;
i__24592 = G__24605;
continue;
} else {
var ebb = cljs.core.first.call(null,seq__24589__$1);
ebb.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM;

ebb.label = null;

ebb.billboard.distanceDisplayCondition = (new Cesium.DistanceDisplayCondition(10.0,20000.0));

var pos_24606 = ebb.position.getValue(Cesium.JulianDate.now());
var pos_24607__$1 = Cesium.Cartographic.fromCartesian(pos_24606);
var lat_24608 = Cesium.Math.toDegrees(pos_24607__$1.latitude);
var lon_24609 = Cesium.Math.toDegrees(pos_24607__$1.longitude);
var desc_24610 = ["<table class=\"cesium-infoBox-defaultTable cesium-infoBox-defaultTable-lighter\"><tbody>","<tr><th>Longitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon_24609.toFixed((5))),"</td></tr>","<tr><th>Latitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_24608.toFixed((5))),"</td></tr>","</tbody></table>"].join('');
ebb.description = desc_24610;


var G__24611 = cljs.core.next.call(null,seq__24589__$1);
var G__24612 = null;
var G__24613 = (0);
var G__24614 = (0);
seq__24589 = G__24611;
chunk__24590 = G__24612;
count__24591 = G__24613;
i__24592 = G__24614;
continue;
}
} else {
return null;
}
}
break;
}
});
cesium.workshop2.client.geojson_adjustment = (function cesium$workshop2$client$geojson_adjustment(ds){
cesium.client.VIEWER.dataSources.add(ds);

var vals = ds.entities.values;
var epls = cljs.core.filter.call(null,((function (vals){
return (function (p1__24615_SHARP_){
return Cesium.defined(p1__24615_SHARP_.polygon);
});})(vals))
,vals);
var seq__24616 = cljs.core.seq.call(null,epls);
var chunk__24617 = null;
var count__24618 = (0);
var i__24619 = (0);
while(true){
if((i__24619 < count__24618)){
var epl = cljs.core._nth.call(null,chunk__24617,i__24619);
epl.name = epl.properties.neighborhood;

epl.polygon.material = Cesium.Color.fromRandom(({"red": 0.1, "maximumGreen": 0.5, "minimumBlue": 0.5, "alpha": 0.6}));

epl.polygon.classificationType = Cesium.ClassificationType.TERRAIN;

var poss_24620 = epl.polygon.hierarchy.getValue(Cesium.JulianDate.now()).positions;
var cntr_24621 = Cesium.BoundingSphere.fromPoints(poss_24620).center;
var cntr_24622__$1 = Cesium.Ellipsoid.WGS84.scaleToGeodeticSurface(cntr_24621);
epl.position = cntr_24622__$1;

epl.parent = cesium.workshop2.client.Neighborhoods;

epl.label = ({"text": epl.name, "showBackground": true, "scale": 0.6, "horizontalOrigin": Cesium.HorizontalOrigin.CENTER, "verticalOrigin": Cesium.VerticalOrigin.BOTTOM, "distanceDisplayCondition": (new Cesium.DistanceDisplayCondition(10.0,8000.0)), "disableDepthTestDistance": 100.0});


var G__24623 = seq__24616;
var G__24624 = chunk__24617;
var G__24625 = count__24618;
var G__24626 = (i__24619 + (1));
seq__24616 = G__24623;
chunk__24617 = G__24624;
count__24618 = G__24625;
i__24619 = G__24626;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__24616);
if(temp__5735__auto__){
var seq__24616__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24616__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__24616__$1);
var G__24627 = cljs.core.chunk_rest.call(null,seq__24616__$1);
var G__24628 = c__4461__auto__;
var G__24629 = cljs.core.count.call(null,c__4461__auto__);
var G__24630 = (0);
seq__24616 = G__24627;
chunk__24617 = G__24628;
count__24618 = G__24629;
i__24619 = G__24630;
continue;
} else {
var epl = cljs.core.first.call(null,seq__24616__$1);
epl.name = epl.properties.neighborhood;

epl.polygon.material = Cesium.Color.fromRandom(({"red": 0.1, "maximumGreen": 0.5, "minimumBlue": 0.5, "alpha": 0.6}));

epl.polygon.classificationType = Cesium.ClassificationType.TERRAIN;

var poss_24631 = epl.polygon.hierarchy.getValue(Cesium.JulianDate.now()).positions;
var cntr_24632 = Cesium.BoundingSphere.fromPoints(poss_24631).center;
var cntr_24633__$1 = Cesium.Ellipsoid.WGS84.scaleToGeodeticSurface(cntr_24632);
epl.position = cntr_24633__$1;

epl.parent = cesium.workshop2.client.Neighborhoods;

epl.label = ({"text": epl.name, "showBackground": true, "scale": 0.6, "horizontalOrigin": Cesium.HorizontalOrigin.CENTER, "verticalOrigin": Cesium.VerticalOrigin.BOTTOM, "distanceDisplayCondition": (new Cesium.DistanceDisplayCondition(10.0,8000.0)), "disableDepthTestDistance": 100.0});


var G__24634 = cljs.core.next.call(null,seq__24616__$1);
var G__24635 = null;
var G__24636 = (0);
var G__24637 = (0);
seq__24616 = G__24634;
chunk__24617 = G__24635;
count__24618 = G__24636;
i__24619 = G__24637;
continue;
}
} else {
return null;
}
}
break;
}
});
cesium.workshop2.client.camera_modes = (function cesium$workshop2$client$camera_modes(entity){
var fme = document.getElementById("freeMode");
var dme = document.getElementById("droneMode");
var cmf = ((function (fme,dme){
return (function (e){
if(cljs.core.truth_(dme.checked)){
return cesium.client.VIEWER.trackedEntity = entity;
} else {
cesium.client.VIEWER.trackedEntity = null;

return cesium.client.CAMERA.flyTo(cesium.workshop2.client.W2_HOME_VIEW);
}
});})(fme,dme))
;
fme.addEventListener("change",cmf);

dme.addEventListener("change",cmf);

return cesium.client.VIEWER.trackedEntityChanged.addEventListener(((function (fme,dme,cmf){
return (function (e){
if(cljs.core._EQ_.call(null,cesium.client.VIEWER.trackedEntity,entity)){
fme.checked = false;

return dme.checked = true;
} else {
return null;
}
});})(fme,dme,cmf))
);
});
cesium.workshop2.client.drone_flight = (function cesium$workshop2$client$drone_flight(drone){
cesium.workshop2.client.camera_modes.call(null,drone);

var dpos = drone.position;
drone.model = ({"uri": "models/drone/CesiumDrone.gltf", "minimumPixelSize": (128), "maximumScale": (1000), "silhouetteColor": Cesium.Color.WHITE, "silhouetteSize": (2)});

drone.orientation = (new Cesium.VelocityOrientationProperty(dpos));

return dpos.setInterpolationOptions(({"interpolationDegree": (3), "interpolationAlgorithm": Cesium.HermitePolynomialApproximation}));
});
cesium.workshop2.client.add_3D_tileset = (function cesium$workshop2$client$add_3D_tileset(id){
var city = cesium.client.SCENE.primitives.add((new Cesium.Cesium3DTileset(({"url": Cesium.IonResource.fromAssetId(id)}))));
var load_indi = document.getElementById("loadingIndicator");
var sty_default = (new Cesium.Cesium3DTileStyle(({"color": "color('white')", "show": true})));
var sty_transp = (new Cesium.Cesium3DTileStyle(({"color": "color('white', 0.3)", "show": true})));
var sty_height = (new Cesium.Cesium3DTileStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"conditions","conditions",-1647236270),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["${height} >= 300","rgba(45, 0, 75, 0.5)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["${height} >= 200","rgb(102, 71, 151)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["${height} >= 100","rgb(170, 162, 204)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["${height} >= 50","rgb(224, 226, 238)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["${height} >= 25","rgb(252, 230, 200)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["${height} >= 10","rgb(248, 176, 87)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["${height} >= 5","rgb(198, 106, 11)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["true","rgb(127, 59, 8)"], null)], null)], null)], null))));
var tile_sty = document.getElementById("tileStyle");
var hoff = (-32);
load_indi.style.display = "block";

city.readyPromise.then(((function (city,load_indi,sty_default,sty_transp,sty_height,tile_sty,hoff){
return (function (ts){
load_indi.style.display = "none";

var bds = ts.boundingSphere;
var crt = Cesium.Cartographic.fromCartesian(bds.center);
var poss = Cesium.Cartesian3.fromRadians(crt.longitude,crt.latitude,0.0);
var poso = Cesium.Cartesian3.fromRadians(crt.longitude,crt.latitude,hoff);
var trans = Cesium.Cartesian3.subtract(poso,poss,(new Cesium.Cartesian3()));
return ts.modelMatrix = Cesium.Matrix4.fromTranslation(trans);
});})(city,load_indi,sty_default,sty_transp,sty_height,tile_sty,hoff))
);

city.style = sty_default;

return tile_sty.addEventListener("change",((function (city,load_indi,sty_default,sty_transp,sty_height,tile_sty,hoff){
return (function (e){
var pred__24638 = cljs.core._EQ_;
var expr__24639 = tile_sty.options.item(tile_sty.selectedIndex).value;
if(cljs.core.truth_(pred__24638.call(null,"none",expr__24639))){
return city.style = sty_default;
} else {
if(cljs.core.truth_(pred__24638.call(null,"height",expr__24639))){
return city.style = sty_height;
} else {
if(cljs.core.truth_(pred__24638.call(null,"transparent",expr__24639))){
return city.style = sty_transp;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__24639)].join('')));
}
}
}
});})(city,load_indi,sty_default,sty_transp,sty_height,tile_sty,hoff))
);
});
cesium.workshop2.client.mouse_interactivity = (function cesium$workshop2$client$mouse_interactivity(){
var input_action = (function cesium$workshop2$client$mouse_interactivity_$_input_action(mov){
var ppic = cesium.client.SCENE.pick(mov.endPosition);
var epic = (cljs.core.truth_(Cesium.defined(ppic))?ppic.id:null);
if(cljs.core.truth_(Cesium.defined(cesium.workshop2.client.PEPIC))){
cesium.workshop2.client.PEPIC.billboard.scale = 1.0;

cesium.workshop2.client.PEPIC.billboard.color = Cesium.Color.WHITE;
} else {
}

if(cljs.core.truth_((function (){var and__4036__auto__ = Cesium.defined(epic);
if(cljs.core.truth_(and__4036__auto__)){
return Cesium.defined(epic.billboard);
} else {
return and__4036__auto__;
}
})())){
epic.billboard.scale = 2.0;

epic.billboard.color = Cesium.Color.ORANGERED;

return (
cesium.workshop2.client.PEPIC = epic)
;
} else {
return null;
}
});
var hand = (new Cesium.ScreenSpaceEventHandler(cesium.client.CANVAS));
return hand.setInputAction(input_action,Cesium.ScreenSpaceEventType.MOUSE_MOVE);
});
cesium.workshop2.client.extras = (function cesium$workshop2$client$extras(){
var nbe = document.getElementById("neighborhoods");
var she = document.getElementById("shadows");
nbe.addEventListener("change",((function (nbe,she){
return (function (e){
return cesium.workshop2.client.Neighborhoods.show = e.target.checked;
});})(nbe,she))
);

return she.addEventListener("change",((function (nbe,she){
return (function (e){
return cesium.client.VIEWER.shadows = e.target.checked;
});})(nbe,she))
);
});
cesium.workshop2.client.init_workshop2_client = (function cesium$workshop2$client$init_workshop2_client(){
cesium.client.add_imagery_by_asset_id.call(null,(3954),cesium.client.VIEWER);

cesium.client.add_terrain.call(null,({"requestWaterMask": true, "requestVertexNormals": true}),cesium.client.VIEWER);

cesium.client.camera_home.call(null,cesium.client.CAMERA,cesium.workshop2.client.W2_HOME_VIEW);

cesium.client.clock_settings.call(null,cesium.client.CLOCK,cesium.workshop2.client.W2_CLOCK_SET,cesium.client.VIEWER);

cesium.client.load_data.call(null,new cljs.core.Keyword(null,"KML","KML",1829561453),"data/sampleGeocacheLocations.kml",({"camera": cesium.client.CAMERA, "canvas": cesium.client.CANVAS, "clampToGround": true}),cesium.client.VIEWER,cesium.workshop2.client.kml_adjustment);

cesium.client.load_data.call(null,new cljs.core.Keyword(null,"GeoJSON","GeoJSON",33508860),"data/sampleNeighborhoods.geojson",({"clampToGround": true}),cesium.client.VIEWER,cesium.workshop2.client.geojson_adjustment);

cesium.client.load_data.call(null,new cljs.core.Keyword(null,"CZML","CZML",-1539311408),"data/sampleFlight.czml",null,cesium.client.VIEWER,(function (p1__24641_SHARP_){
return cesium.workshop2.client.drone_flight.call(null,p1__24641_SHARP_.entities.getById("Aircraft/Aircraft1"));
}));

cesium.workshop2.client.add_3D_tileset.call(null,(75343));

cesium.workshop2.client.mouse_interactivity.call(null);

return cesium.workshop2.client.extras.call(null);
});
cljs.core.enable_console_print_BANG_.call(null);
window.onload = cesium.workshop2.client.init_workshop2_client.call(null);

//# sourceMappingURL=client.js.map
