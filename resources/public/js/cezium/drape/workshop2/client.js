// Compiled by ClojureScript 1.10.439 {}
goog.provide('workshop2.client');
goog.require('cljs.core');
goog.require('cesium.client');
workshop2.client.W2_HOME_VIEW = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),-73.99811446828902,new cljs.core.Keyword(null,"latitude","latitude",394867543),40.67451289564669,new cljs.core.Keyword(null,"height","height",1025178622),2631.082799425431,new cljs.core.Keyword(null,"heading","heading",-1312171873),7.1077496389876025,new cljs.core.Keyword(null,"pitch","pitch",1495126700),-31.98722309159895,new cljs.core.Keyword(null,"roll","roll",11266999),0.02588325131495497], null);
workshop2.client.W2_CLOCK_SET = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"animate","animate",1850194573),true,new cljs.core.Keyword(null,"step","step",1288888124),"SYSTEM_CLOCK",new cljs.core.Keyword(null,"range","range",1639692286),"UNBOUNDED",new cljs.core.Keyword(null,"start","start",-355208981),"2017-07-11T16:00:00Z",new cljs.core.Keyword(null,"stop","stop",-2140911342),"2017-07-11T16:20:00Z",new cljs.core.Keyword(null,"current","current",-1088038603),"2017-07-11T16:00:00Z",new cljs.core.Keyword(null,"mult","mult",1466794774),(2)], null);
workshop2.client.Neighborhoods = cesium.client.VIEWER.entities.add((new Cesium.Entity()));
workshop2.client.PEPIC = null;
workshop2.client.kml_adjustment = (function workshop2$client$kml_adjustment(ds){
cesium.client.VIEWER.dataSources.add(ds);

var vals = ds.entities.values;
var ebbs = cljs.core.filter.call(null,((function (vals){
return (function (p1__1423_SHARP_){
return Cesium.defined(p1__1423_SHARP_.billboard);
});})(vals))
,vals);
var seq__1424 = cljs.core.seq.call(null,ebbs);
var chunk__1425 = null;
var count__1426 = (0);
var i__1427 = (0);
while(true){
if((i__1427 < count__1426)){
var ebb = cljs.core._nth.call(null,chunk__1425,i__1427);
ebb.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM;

ebb.label = null;

ebb.billboard.distanceDisplayCondition = (new Cesium.DistanceDisplayCondition(10.0,20000.0));

var pos_1428 = ebb.position.getValue(Cesium.JulianDate.now());
var pos_1429__$1 = Cesium.Cartographic.fromCartesian(pos_1428);
var lat_1430 = Cesium.Math.toDegrees(pos_1429__$1.latitude);
var lon_1431 = Cesium.Math.toDegrees(pos_1429__$1.longitude);
var desc_1432 = ["<table class=\"cesium-infoBox-defaultTable cesium-infoBox-defaultTable-lighter\"><tbody>","<tr><th>Longitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon_1431.toFixed((5))),"</td></tr>","<tr><th>Latitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_1430.toFixed((5))),"</td></tr>","</tbody></table>"].join('');
ebb.description = desc_1432;


var G__1433 = seq__1424;
var G__1434 = chunk__1425;
var G__1435 = count__1426;
var G__1436 = (i__1427 + (1));
seq__1424 = G__1433;
chunk__1425 = G__1434;
count__1426 = G__1435;
i__1427 = G__1436;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__1424);
if(temp__5735__auto__){
var seq__1424__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1424__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__1424__$1);
var G__1437 = cljs.core.chunk_rest.call(null,seq__1424__$1);
var G__1438 = c__4461__auto__;
var G__1439 = cljs.core.count.call(null,c__4461__auto__);
var G__1440 = (0);
seq__1424 = G__1437;
chunk__1425 = G__1438;
count__1426 = G__1439;
i__1427 = G__1440;
continue;
} else {
var ebb = cljs.core.first.call(null,seq__1424__$1);
ebb.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM;

ebb.label = null;

ebb.billboard.distanceDisplayCondition = (new Cesium.DistanceDisplayCondition(10.0,20000.0));

var pos_1441 = ebb.position.getValue(Cesium.JulianDate.now());
var pos_1442__$1 = Cesium.Cartographic.fromCartesian(pos_1441);
var lat_1443 = Cesium.Math.toDegrees(pos_1442__$1.latitude);
var lon_1444 = Cesium.Math.toDegrees(pos_1442__$1.longitude);
var desc_1445 = ["<table class=\"cesium-infoBox-defaultTable cesium-infoBox-defaultTable-lighter\"><tbody>","<tr><th>Longitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon_1444.toFixed((5))),"</td></tr>","<tr><th>Latitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_1443.toFixed((5))),"</td></tr>","</tbody></table>"].join('');
ebb.description = desc_1445;


var G__1446 = cljs.core.next.call(null,seq__1424__$1);
var G__1447 = null;
var G__1448 = (0);
var G__1449 = (0);
seq__1424 = G__1446;
chunk__1425 = G__1447;
count__1426 = G__1448;
i__1427 = G__1449;
continue;
}
} else {
return null;
}
}
break;
}
});
workshop2.client.geojson_adjustment = (function workshop2$client$geojson_adjustment(ds){
cesium.client.VIEWER.dataSources.add(ds);

var vals = ds.entities.values;
var epls = cljs.core.filter.call(null,((function (vals){
return (function (p1__1450_SHARP_){
return Cesium.defined(p1__1450_SHARP_.polygon);
});})(vals))
,vals);
var seq__1451 = cljs.core.seq.call(null,epls);
var chunk__1452 = null;
var count__1453 = (0);
var i__1454 = (0);
while(true){
if((i__1454 < count__1453)){
var epl = cljs.core._nth.call(null,chunk__1452,i__1454);
epl.name = epl.properties.neighborhood;

epl.polygon.material = Cesium.Color.fromRandom(({"red": 0.1, "maximumGreen": 0.5, "minimumBlue": 0.5, "alpha": 0.6}));

epl.polygon.classificationType = Cesium.ClassificationType.TERRAIN;

var poss_1455 = epl.polygon.hierarchy.getValue(Cesium.JulianDate.now()).positions;
var cntr_1456 = Cesium.BoundingSphere.fromPoints(poss_1455).center;
var cntr_1457__$1 = Cesium.Ellipsoid.WGS84.scaleToGeodeticSurface(cntr_1456);
epl.position = cntr_1457__$1;

epl.parent = workshop2.client.Neighborhoods;

epl.label = ({"text": epl.name, "showBackground": true, "scale": 0.6, "horizontalOrigin": Cesium.HorizontalOrigin.CENTER, "verticalOrigin": Cesium.VerticalOrigin.BOTTOM, "distanceDisplayCondition": (new Cesium.DistanceDisplayCondition(10.0,8000.0)), "disableDepthTestDistance": 100.0});


var G__1458 = seq__1451;
var G__1459 = chunk__1452;
var G__1460 = count__1453;
var G__1461 = (i__1454 + (1));
seq__1451 = G__1458;
chunk__1452 = G__1459;
count__1453 = G__1460;
i__1454 = G__1461;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__1451);
if(temp__5735__auto__){
var seq__1451__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1451__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__1451__$1);
var G__1462 = cljs.core.chunk_rest.call(null,seq__1451__$1);
var G__1463 = c__4461__auto__;
var G__1464 = cljs.core.count.call(null,c__4461__auto__);
var G__1465 = (0);
seq__1451 = G__1462;
chunk__1452 = G__1463;
count__1453 = G__1464;
i__1454 = G__1465;
continue;
} else {
var epl = cljs.core.first.call(null,seq__1451__$1);
epl.name = epl.properties.neighborhood;

epl.polygon.material = Cesium.Color.fromRandom(({"red": 0.1, "maximumGreen": 0.5, "minimumBlue": 0.5, "alpha": 0.6}));

epl.polygon.classificationType = Cesium.ClassificationType.TERRAIN;

var poss_1466 = epl.polygon.hierarchy.getValue(Cesium.JulianDate.now()).positions;
var cntr_1467 = Cesium.BoundingSphere.fromPoints(poss_1466).center;
var cntr_1468__$1 = Cesium.Ellipsoid.WGS84.scaleToGeodeticSurface(cntr_1467);
epl.position = cntr_1468__$1;

epl.parent = workshop2.client.Neighborhoods;

epl.label = ({"text": epl.name, "showBackground": true, "scale": 0.6, "horizontalOrigin": Cesium.HorizontalOrigin.CENTER, "verticalOrigin": Cesium.VerticalOrigin.BOTTOM, "distanceDisplayCondition": (new Cesium.DistanceDisplayCondition(10.0,8000.0)), "disableDepthTestDistance": 100.0});


var G__1469 = cljs.core.next.call(null,seq__1451__$1);
var G__1470 = null;
var G__1471 = (0);
var G__1472 = (0);
seq__1451 = G__1469;
chunk__1452 = G__1470;
count__1453 = G__1471;
i__1454 = G__1472;
continue;
}
} else {
return null;
}
}
break;
}
});
workshop2.client.camera_modes = (function workshop2$client$camera_modes(entity){
var fme = document.getElementById("freeMode");
var dme = document.getElementById("droneMode");
var cmf = ((function (fme,dme){
return (function (e){
if(cljs.core.truth_(dme.checked)){
return cesium.client.VIEWER.trackedEntity = entity;
} else {
cesium.client.VIEWER.trackedEntity = null;

return cesium.client.CAMERA.flyTo(workshop2.client.W2_HOME_VIEW);
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
workshop2.client.drone_flight = (function workshop2$client$drone_flight(drone){
workshop2.client.camera_modes.call(null,drone);

var dpos = drone.position;
drone.model = ({"uri": "models/drone/CesiumDrone.gltf", "minimumPixelSize": (128), "maximumScale": (1000), "silhouetteColor": Cesium.Color.WHITE, "silhouetteSize": (2)});

drone.orientation = (new Cesium.VelocityOrientationProperty(dpos));

return dpos.setInterpolationOptions(({"interpolationDegree": (3), "interpolationAlgorithm": Cesium.HermitePolynomialApproximation}));
});
workshop2.client.add_3D_tileset = (function workshop2$client$add_3D_tileset(id){
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
var pred__1473 = cljs.core._EQ_;
var expr__1474 = tile_sty.options.item(tile_sty.selectedIndex).value;
if(cljs.core.truth_(pred__1473.call(null,"none",expr__1474))){
return city.style = sty_default;
} else {
if(cljs.core.truth_(pred__1473.call(null,"height",expr__1474))){
return city.style = sty_height;
} else {
if(cljs.core.truth_(pred__1473.call(null,"transparent",expr__1474))){
return city.style = sty_transp;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__1474)].join('')));
}
}
}
});})(city,load_indi,sty_default,sty_transp,sty_height,tile_sty,hoff))
);
});
workshop2.client.mouse_interactivity = (function workshop2$client$mouse_interactivity(){
var input_action = (function workshop2$client$mouse_interactivity_$_input_action(mov){
var ppic = cesium.client.SCENE.pick(mov.endPosition);
var epic = (cljs.core.truth_(Cesium.defined(ppic))?ppic.id:null);
if(cljs.core.truth_(Cesium.defined(workshop2.client.PEPIC))){
workshop2.client.PEPIC.billboard.scale = 1.0;

workshop2.client.PEPIC.billboard.color = Cesium.Color.WHITE;
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
workshop2.client.PEPIC = epic)
;
} else {
return null;
}
});
var hand = (new Cesium.ScreenSpaceEventHandler(cesium.client.CANVAS));
return hand.setInputAction(input_action,Cesium.ScreenSpaceEventType.MOUSE_MOVE);
});
workshop2.client.extras = (function workshop2$client$extras(){
var nbe = document.getElementById("neighborhoods");
var she = document.getElementById("shadows");
nbe.addEventListener("change",((function (nbe,she){
return (function (e){
return workshop2.client.Neighborhoods.show = e.target.checked;
});})(nbe,she))
);

return she.addEventListener("change",((function (nbe,she){
return (function (e){
return cesium.client.VIEWER.shadows = e.target.checked;
});})(nbe,she))
);
});
workshop2.client.init_workshop2_client = (function workshop2$client$init_workshop2_client(){
cesium.client.add_imagery_by_asset_id.call(null,(3954),cesium.client.VIEWER);

cesium.client.add_terrain.call(null,({"requestWaterMask": true, "requestVertexNormals": true}),cesium.client.VIEWER);

cesium.client.camera_home.call(null,cesium.client.CAMERA,workshop2.client.W2_HOME_VIEW);

cesium.client.clock_settings.call(null,cesium.client.CLOCK,workshop2.client.W2_CLOCK_SET,cesium.client.VIEWER);

cesium.client.load_data.call(null,new cljs.core.Keyword(null,"KML","KML",1829561453),"data/sampleGeocacheLocations.kml",({"camera": cesium.client.CAMERA, "canvas": cesium.client.CANVAS, "clampToGround": true}),cesium.client.VIEWER,workshop2.client.kml_adjustment);

cesium.client.load_data.call(null,new cljs.core.Keyword(null,"GeoJSON","GeoJSON",33508860),"data/sampleNeighborhoods.geojson",({"clampToGround": true}),cesium.client.VIEWER,workshop2.client.geojson_adjustment);

cesium.client.load_data.call(null,new cljs.core.Keyword(null,"CZML","CZML",-1539311408),"data/sampleFlight.czml",null,cesium.client.VIEWER,(function (p1__1476_SHARP_){
return workshop2.client.drone_flight.call(null,p1__1476_SHARP_.entities.getById("Aircraft/Aircraft1"));
}));

workshop2.client.add_3D_tileset.call(null,(75343));

workshop2.client.mouse_interactivity.call(null);

return workshop2.client.extras.call(null);
});
cljs.core.enable_console_print_BANG_.call(null);
window.onload = workshop2.client.init_workshop2_client.call(null);

//# sourceMappingURL=client.js.map
