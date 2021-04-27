// Compiled by ClojureScript 1.10.439 {}
goog.provide('cesium.client');
goog.require('cljs.core');
cesium.client.VIEWER = (new Cesium.Viewer("cesiumContainer"));
cesium.client.CLOCK = cesium.client.VIEWER.clock;
cesium.client.SCENE = cesium.client.VIEWER.scene;
cesium.client.CAMERA = cesium.client.SCENE.camera;
cesium.client.CANVAS = cesium.client.SCENE.canvas;
cesium.client.HOME_VIEW = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"latitude","latitude",394867543),28.02,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),86.93,new cljs.core.Keyword(null,"height","height",1025178622),(8848),new cljs.core.Keyword(null,"heading","heading",-1312171873),(180),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(-10),new cljs.core.Keyword(null,"roll","roll",11266999),(0)], null);
cesium.client.CLOCK_SET = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"animate","animate",1850194573),true,new cljs.core.Keyword(null,"start","start",-355208981),"2020-08-08T16:00:00Z",new cljs.core.Keyword(null,"stop","stop",-2140911342),"2020-08-08T16:20:00Z",new cljs.core.Keyword(null,"current","current",-1088038603),"2020-08-08T16:00:00Z",new cljs.core.Keyword(null,"mult","mult",1466794774),(4),new cljs.core.Keyword(null,"step","step",1288888124),"SYSTEM_CLOCK_MULTIPLIER",new cljs.core.Keyword(null,"range","range",1639692286),"LOOP_STOP"], null);
cesium.client.CZML_DS = (new Cesium.CzmlDataSource());
cesium.client.KML_DS = (new Cesium.KmlDataSource(({"camera": cesium.client.CAMERA, "canvas": cesium.client.CANVAS})));
cesium.client.EVENT_URL = "http://localhost:4448/event";
cesium.client.EVENT_DEBUG = false;
cesium.client.ORBIT = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"steps","steps",-128433302),(24),new cljs.core.Keyword(null,"ring","ring",-974350330),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"headings","headings",-383220458),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"next","next",-117701485),(0),new cljs.core.Keyword(null,"center","center",-748944368),null,new cljs.core.Keyword(null,"radius-m","radius-m",-1490686729),(4000),new cljs.core.Keyword(null,"step-sec","step-sec",-1096271625),(2)], null));
cesium.client.HANDLER = (new Cesium.ScreenSpaceEventHandler(cesium.client.SCENE.canvas));
cesium.client.set_html_BANG_ = (function cesium$client$set_html_BANG_(id,msg){
return document.getElementById(id).innerHTML = msg;
});
cesium.client.add_imagery_by_asset_id = (function cesium$client$add_imagery_by_asset_id(id,viewer){
var ilays = viewer.imageryLayers;
ilays.remove(ilays.get((0)));

return ilays.addImageryProvider((new Cesium.IonImageryProvider(({"assetId": id}))));
});
cesium.client.add_terrain = (function cesium$client$add_terrain(options,viewer){
viewer.terrainProvider = (new Cesium.createWorldTerrain(options));

return viewer.scene.globe.depthTestAgainstTerrain = true;
});
cesium.client.camera_fly = (function cesium$client$camera_fly(camera,longitude,latitude,height,heading,pitch,roll){
var pos = (new Cesium.Cartesian3.fromDegrees(longitude,latitude,height));
var orient = Cesium.HeadingPitchRoll.fromDegrees(heading,pitch,roll);
var fvw = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"destination","destination",-253872483),pos,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"heading","heading",-1312171873),orient.heading,new cljs.core.Keyword(null,"pitch","pitch",1495126700),orient.pitch,new cljs.core.Keyword(null,"roll","roll",11266999),orient.roll], null)], null));
camera.flyTo(fvw);

return fvw;
});
cesium.client.camera_home = (function cesium$client$camera_home(camera,view){
var map__11870 = view;
var map__11870__$1 = (((((!((map__11870 == null))))?(((((map__11870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11870):map__11870);
var longitude = cljs.core.get.call(null,map__11870__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.call(null,map__11870__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var height = cljs.core.get.call(null,map__11870__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var heading = cljs.core.get.call(null,map__11870__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var pitch = cljs.core.get.call(null,map__11870__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
var roll = cljs.core.get.call(null,map__11870__$1,new cljs.core.Keyword(null,"roll","roll",11266999));
var fvw = cesium.client.camera_fly.call(null,camera,longitude,latitude,height,heading,pitch,roll);
cesium.client.HOME_VIEW = fvw;

cesium.client.VIEWER.homeButton.viewModel.command.beforeExecute.addEventListener(((function (map__11870,map__11870__$1,longitude,latitude,height,heading,pitch,roll,fvw){
return (function (e){
e.cancel = true;

return camera.flyTo(cesium.client.HOME_VIEW);
});})(map__11870,map__11870__$1,longitude,latitude,height,heading,pitch,roll,fvw))
);

return camera.flyTo(cesium.client.HOME_VIEW);
});
cesium.client.clock_settings = (function cesium$client$clock_settings(var_args){
var G__11873 = arguments.length;
switch (G__11873) {
case 3:
return cesium.client.clock_settings.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 9:
return cesium.client.clock_settings.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cesium.client.clock_settings.cljs$core$IFn$_invoke$arity$3 = (function (clock,settings,viewer){
var map__11874 = settings;
var map__11874__$1 = (((((!((map__11874 == null))))?(((((map__11874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11874):map__11874);
var animate = cljs.core.get.call(null,map__11874__$1,new cljs.core.Keyword(null,"animate","animate",1850194573));
var start = cljs.core.get.call(null,map__11874__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__11874__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var current = cljs.core.get.call(null,map__11874__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var mult = cljs.core.get.call(null,map__11874__$1,new cljs.core.Keyword(null,"mult","mult",1466794774));
var step = cljs.core.get.call(null,map__11874__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var range = cljs.core.get.call(null,map__11874__$1,new cljs.core.Keyword(null,"range","range",1639692286));
return cesium.client.clock_settings.call(null,clock,animate,start,stop,current,mult,step,range,viewer);
});

cesium.client.clock_settings.cljs$core$IFn$_invoke$arity$9 = (function (clock,animate,start,stop,current,mult,step,range,viewer){
clock.shouldAnimate = animate;

clock.startTime = Cesium.JulianDate.fromIso8601(start);

clock.stopTime = Cesium.JulianDate.fromIso8601(stop);

clock.currentTime = Cesium.JulianDate.fromIso8601(current);

clock.multiplier = mult;

clock.clockStep = (function (){var pred__11876 = cljs.core._EQ_;
var expr__11877 = step;
if(cljs.core.truth_(pred__11876.call(null,"TICK_DEPENDENT",expr__11877))){
return Cesium.ClockStep.TICK_DEPENDENT;
} else {
if(cljs.core.truth_(pred__11876.call(null,"SYSTEM_CLOCK_MULTIPLIER",expr__11877))){
return Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER;
} else {
if(cljs.core.truth_(pred__11876.call(null,"SYSTEM_CLOCK",expr__11877))){
return Cesium.ClockStep.SYSTEM_CLOCK;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__11877)].join('')));
}
}
}
})();

clock.clockRange = (function (){var pred__11879 = cljs.core._EQ_;
var expr__11880 = range;
if(cljs.core.truth_(pred__11879.call(null,"UNBOUNDED",expr__11880))){
return Cesium.ClockRange.UNBOUNDED;
} else {
if(cljs.core.truth_(pred__11879.call(null,"CLAMPED",expr__11880))){
return Cesium.ClockRange.CLAMPED;
} else {
if(cljs.core.truth_(pred__11879.call(null,"LOOP_STOP",expr__11880))){
return Cesium.ClockRange.LOOP_STOP;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__11880)].join('')));
}
}
}
})();

return viewer.timeline.zoomTo(clock.startTime,clock.stopTime);
});

cesium.client.clock_settings.cljs$lang$maxFixedArity = 9;

cesium.client.load_data = (function cesium$client$load_data(format,source,options,viewer,processor){
var promise = (function (){var pred__11883 = cljs.core._EQ_;
var expr__11884 = format;
if(cljs.core.truth_(pred__11883.call(null,new cljs.core.Keyword(null,"GeoJSON","GeoJSON",33508860),expr__11884))){
return Cesium.GeoJsonDataSource.load(source,options);
} else {
if(cljs.core.truth_(pred__11883.call(null,new cljs.core.Keyword(null,"CZML","CZML",-1539311408),expr__11884))){
return Cesium.CzmlDataSource.load(source,options);
} else {
if(cljs.core.truth_(pred__11883.call(null,new cljs.core.Keyword(null,"KML","KML",1829561453),expr__11884))){
return Cesium.KmlDataSource.load(source,options);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__11884)].join('')));
}
}
}
})();
return promise.then(((function (promise){
return (function (ds){
viewer.dataSources.add(ds);

return processor.call(null,ds);
});})(promise))
);
});
cesium.client.start_event_processing = (function cesium$client$start_event_processing(viewer){
var cz_processor = (function cesium$client$start_event_processing_$_cz_processor(e){
var data = e.data;
if(cesium.client.EVENT_DEBUG){
cljs.core.println.call(null,new cljs.core.Keyword(null,"CZML","CZML",-1539311408),data);
} else {
}

return cesium.client.CZML_DS.process(JSON.parse(data));
});
var km_processor = (function cesium$client$start_event_processing_$_km_processor(e){
var data = e.data;
if(cesium.client.EVENT_DEBUG){
cljs.core.println.call(null,new cljs.core.Keyword(null,"KML","KML",1829561453),data);
} else {
}

return cesium.client.KML_DS.load((new DOMParser()).parseFromString(data,"text/xml"));
});
var js_processor = (function cesium$client$start_event_processing_$_js_processor(e){
var data = e.data;
if(cesium.client.EVENT_DEBUG){
cljs.core.println.call(null,new cljs.core.Keyword(null,"JS","JS",-602288316),data);
} else {
}

return eval(data);
});
var es = (new EventSource(cesium.client.EVENT_URL));
viewer.dataSources.add(cesium.client.CZML_DS);

viewer.dataSources.add(cesium.client.KML_DS);

es.addEventListener("czml",cz_processor,false);

es.addEventListener("kml",km_processor,false);

return es.addEventListener("js",js_processor,false);
});
cesium.client.position_js = (function cesium$client$position_js(lambda0,phi1,c,az){
var cosphi1 = Math.cos(phi1);
var sinphi1 = Math.sin(phi1);
var cosaz = Math.cos(az);
var sinaz = Math.sin(az);
var sinc = Math.sin(c);
var cosc = Math.cos(c);
var phi2 = Math.asin(((sinphi1 * cosc) + ((cosphi1 * sinc) * cosaz)));
var lam2 = (Math.atan2((sinc * sinaz),((cosphi1 * cosc) - ((sinphi1 * sinc) * cosaz))) + lambda0);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lam2,phi2], null);
});
cesium.client.normaz = (function cesium$client$normaz(az){
if((az > Math.PI)){
return (az - ((2) * Math.PI));
} else {
if((az < (- Math.PI))){
return (az + ((2) * Math.PI));
} else {
return az;

}
}
});
cesium.client.azimuths_AMPERSAND_points = (function cesium$client$azimuths_AMPERSAND_points(p__11887,radr,hgt,N){
var vec__11888 = p__11887;
var c_lambda = cljs.core.nth.call(null,vec__11888,(0),null);
var c_phi = cljs.core.nth.call(null,vec__11888,(1),null);
var s = ((Math.PI * (2)) / N);
var azs = cljs.core.range.call(null,(0),(N * s),s);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [azs,cljs.core.vec.call(null,cljs.core.map.call(null,((function (s,azs,vec__11888,c_lambda,c_phi){
return (function (p1__11886_SHARP_){
return cljs.core.concat.call(null,cesium.client.position_js.call(null,c_lambda,c_phi,radr,p1__11886_SHARP_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hgt], null));
});})(s,azs,vec__11888,c_lambda,c_phi))
,azs))], null);
});
cesium.client.look_at = (function cesium$client$look_at(camera,dist_m){
var cmp = camera.position;
var cmp__$1 = Cesium.Cartographic.fromCartesian(cmp);
var vec__11891 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cmp__$1.longitude,cmp__$1.latitude,cmp__$1.height], null);
var lam = cljs.core.nth.call(null,vec__11891,(0),null);
var phi = cljs.core.nth.call(null,vec__11891,(1),null);
var hgt = cljs.core.nth.call(null,vec__11891,(2),null);
var az = camera.heading;
var c = ((((dist_m / (1852)) / (60)) / (180)) * Math.PI);
var vec__11894 = cesium.client.position_js.call(null,lam,phi,c,az);
var lam2 = cljs.core.nth.call(null,vec__11894,(0),null);
var phi2 = cljs.core.nth.call(null,vec__11894,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lam2,phi2,hgt], null);
});
cesium.client.add_orbit_button = (function cesium$client$add_orbit_button(camera){
var fly_one = (function cesium$client$add_orbit_button_$_fly_one(cam,next__$1){
var orient = (new Cesium.HeadingPitchRoll(cljs.core.nth.call(null,cljs.core.deref.call(null,cesium.client.ORBIT).call(null,new cljs.core.Keyword(null,"headings","headings",-383220458)),next__$1),cam.pitch,cam.roll));
return cam.flyTo(({"destination": cljs.core.nth.call(null,cljs.core.deref.call(null,cesium.client.ORBIT).call(null,new cljs.core.Keyword(null,"ring","ring",-974350330)),next__$1), "orientation": ({"heading": orient.heading, "pitch": orient.pitch, "roll": orient.roll}), "duration": cljs.core.deref.call(null,cesium.client.ORBIT).call(null,new cljs.core.Keyword(null,"step-sec","step-sec",-1096271625)), "easingFunction": Cesium.EasingFunction.LINEAR_NONE, "complete": ((function (orient){
return (function (){
return fly_next.call(null,cam,(next__$1 + (1)));
});})(orient))
, "cancel": ((function (orient){
return (function (){
return fly_cancel.call(null,cam,next__$1);
});})(orient))
}));
});
var fly_next = (function cesium$client$add_orbit_button_$_fly_next(cam,next__$1){
if((next__$1 < cljs.core.count.call(null,cljs.core.deref.call(null,cesium.client.ORBIT).call(null,new cljs.core.Keyword(null,"ring","ring",-974350330))))){
return fly_one.call(null,cam,next__$1);
} else {
return fly_one.call(null,cam,(0));
}
});
var fly_cancel = (function cesium$client$add_orbit_button_$_fly_cancel(cam,next__$1){
return cljs.core._vreset_BANG_.call(null,cesium.client.ORBIT,cljs.core.assoc.call(null,cljs.core._deref.call(null,cesium.client.ORBIT),new cljs.core.Keyword(null,"next","next",-117701485),next__$1));
});
var next = (function cesium$client$add_orbit_button_$_next(az,azs){
var N = cljs.core.count.call(null,azs);
var n = ((N / (2)) + cljs.core.count.call(null,cljs.core.filter.call(null,((function (N){
return (function (p1__11897_SHARP_){
return (p1__11897_SHARP_ < az);
});})(N))
,azs)));
if((n > (N - (1)))){
return (n - N);
} else {
return n;
}
});
var obut = document.createElement("button");
obut.innerHTML = "Toggle orbit";

obut.classList.add("cesium-button");

document.querySelector(".cesium-viewer-toolbar").prepend(obut);

return obut.onclick = ((function (obut){
return (function (){
var pred__11900 = cljs.core._EQ_;
var expr__11901 = cljs.core.deref.call(null,cesium.client.ORBIT).call(null,new cljs.core.Keyword(null,"status","status",-1997798413));
if(cljs.core.truth_(pred__11900.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),expr__11901))){
return cljs.core._vreset_BANG_.call(null,cesium.client.ORBIT,cljs.core.assoc.call(null,cljs.core._deref.call(null,cesium.client.ORBIT),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"stop","stop",-2140911342)));
} else {
if(cljs.core.truth_(pred__11900.call(null,new cljs.core.Keyword(null,"stop","stop",-2140911342),expr__11901))){
var steps = cljs.core.deref.call(null,cesium.client.ORBIT).call(null,new cljs.core.Keyword(null,"steps","steps",-128433302));
var radm = cljs.core.deref.call(null,cesium.client.ORBIT).call(null,new cljs.core.Keyword(null,"radius-m","radius-m",-1490686729));
var radr = ((((radm / (1852)) / (60)) / (180)) * Math.PI);
var vec__11903 = cesium.client.look_at.call(null,camera,radm);
var lam = cljs.core.nth.call(null,vec__11903,(0),null);
var phi = cljs.core.nth.call(null,vec__11903,(1),null);
var hgt = cljs.core.nth.call(null,vec__11903,(2),null);
var look = vec__11903;
var vec__11906 = cesium.client.azimuths_AMPERSAND_points.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lam,phi], null),radr,hgt,steps);
var azs = cljs.core.nth.call(null,vec__11906,(0),null);
var pts = cljs.core.nth.call(null,vec__11906,(1),null);
var ring = cljs.core.vec.call(null,cljs.core.map.call(null,((function (steps,radm,radr,vec__11903,lam,phi,hgt,look,vec__11906,azs,pts,pred__11900,expr__11901,obut){
return (function (p1__11898_SHARP_){
return Cesium.Cartesian3.fromRadians(cljs.core.first.call(null,p1__11898_SHARP_),cljs.core.second.call(null,p1__11898_SHARP_),cljs.core.nth.call(null,p1__11898_SHARP_,(2)));
});})(steps,radm,radr,vec__11903,lam,phi,hgt,look,vec__11906,azs,pts,pred__11900,expr__11901,obut))
,pts));
var headings = cljs.core.vec.call(null,cljs.core.map.call(null,((function (steps,radm,radr,vec__11903,lam,phi,hgt,look,vec__11906,azs,pts,ring,pred__11900,expr__11901,obut){
return (function (p1__11899_SHARP_){
return cesium.client.normaz.call(null,(p1__11899_SHARP_ + Math.PI));
});})(steps,radm,radr,vec__11903,lam,phi,hgt,look,vec__11906,azs,pts,ring,pred__11900,expr__11901,obut))
,azs));
var begin = next.call(null,camera.heading,azs);
cljs.core._vreset_BANG_.call(null,cesium.client.ORBIT,cljs.core.assoc.call(null,cljs.core._deref.call(null,cesium.client.ORBIT),new cljs.core.Keyword(null,"ring","ring",-974350330),ring,new cljs.core.Keyword(null,"headings","headings",-383220458),headings,new cljs.core.Keyword(null,"center","center",-748944368),Cesium.Cartesian3.fromRadians(lam,phi,hgt),new cljs.core.Keyword(null,"next","next",-117701485),begin,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"run","run",-1821166653)));

return fly_one.call(null,camera,begin);
} else {
if(cljs.core.truth_(pred__11900.call(null,new cljs.core.Keyword(null,"run","run",-1821166653),expr__11901))){
camera.cancelFlight();

return cljs.core._vreset_BANG_.call(null,cesium.client.ORBIT,cljs.core.assoc.call(null,cljs.core._deref.call(null,cesium.client.ORBIT),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"stop","stop",-2140911342)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__11901)].join('')));
}
}
}
});})(obut))
;
});
cesium.client.mouse_move = (function cesium$client$mouse_move(){
return cesium.client.HANDLER.setInputAction((function (mov){
var temp__5733__auto__ = cesium.client.VIEWER.camera.pickEllipsoid(mov.endPosition,cesium.client.SCENE.globe.ellipsoid);
if(cljs.core.truth_(temp__5733__auto__)){
var crt = temp__5733__auto__;
var crg = Cesium.Cartographic.fromCartesian(crt);
var lon = Cesium.Math.toDegrees(crg.longitude).toFixed((3));
var lat = Cesium.Math.toDegrees(crg.latitude).toFixed((3));
return cesium.client.set_html_BANG_.call(null,"mouse-pos",["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat),"]"].join(''));
} else {
return null;
}
}),Cesium.ScreenSpaceEventType.MOUSE_MOVE);
});

//# sourceMappingURL=client.js.map
