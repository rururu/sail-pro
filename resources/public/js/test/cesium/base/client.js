// Compiled by ClojureScript 1.10.439 {}
goog.provide('cesium.base.client');
goog.require('cljs.core');
cesium.base.client.VIEWER = (new Cesium.Viewer("cesiumContainer"));
cesium.base.client.CLOCK = cesium.base.client.VIEWER.clock;
cesium.base.client.SCENE = cesium.base.client.VIEWER.scene;
cesium.base.client.CAMERA = cesium.base.client.SCENE.camera;
cesium.base.client.CANVAS = cesium.base.client.SCENE.canvas;
cesium.base.client.HOME_VIEW = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),30.1,new cljs.core.Keyword(null,"latitude","latitude",394867543),60.0,new cljs.core.Keyword(null,"height","height",1025178622),(2500),new cljs.core.Keyword(null,"heading","heading",-1312171873),(120),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(-20),new cljs.core.Keyword(null,"roll","roll",11266999),(0)], null);
cesium.base.client.CLOCK_SET = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"animate","animate",1850194573),true,new cljs.core.Keyword(null,"start","start",-355208981),"2020-08-08T16:00:00Z",new cljs.core.Keyword(null,"stop","stop",-2140911342),"2020-08-08T16:20:00Z",new cljs.core.Keyword(null,"current","current",-1088038603),"2020-08-08T16:00:00Z",new cljs.core.Keyword(null,"mult","mult",1466794774),(4)], null);
cesium.base.client.CZML_DS = (new Cesium.CzmlDataSource());
cesium.base.client.CZML_URL = "http://localhost:4448/czml";
cesium.base.client.CZML_DEBUG = false;
cesium.base.client.add_imagery_by_asset_id = (function cesium$base$client$add_imagery_by_asset_id(id,viewer){
var ilays = viewer.imageryLayers;
ilays.remove(ilays.get((0)));

return ilays.addImageryProvider((new Cesium.IonImageryProvider(({"assetId": id}))));
});
cesium.base.client.add_terrain = (function cesium$base$client$add_terrain(options,viewer){
viewer.terrainProvider = (new Cesium.createWorldTerrain(options));

return viewer.scene.globe.depthTestAgainstTerrain = true;
});
cesium.base.client.camera_home = (function cesium$base$client$camera_home(camera,view){
var map__14849 = view;
var map__14849__$1 = (((((!((map__14849 == null))))?(((((map__14849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14849):map__14849);
var longitude = cljs.core.get.call(null,map__14849__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.call(null,map__14849__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var height = cljs.core.get.call(null,map__14849__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var heading = cljs.core.get.call(null,map__14849__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var pitch = cljs.core.get.call(null,map__14849__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
var roll = cljs.core.get.call(null,map__14849__$1,new cljs.core.Keyword(null,"roll","roll",11266999));
var pos = (new Cesium.Cartesian3.fromDegrees(longitude,latitude,height));
var orient = (new Cesium.HeadingPitchRoll.fromDegrees(heading,pitch,roll));
cesium.base.client.HOME_VIEW = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"destination","destination",-253872483),pos,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"heading","heading",-1312171873),orient.heading,new cljs.core.Keyword(null,"pitch","pitch",1495126700),orient.pitch,new cljs.core.Keyword(null,"roll","roll",11266999),orient.roll], null),new cljs.core.Keyword(null,"duration","duration",1444101068),4.0,new cljs.core.Keyword(null,"maximumHeight","maximumHeight",159239809),(2000),new cljs.core.Keyword(null,"pitchAdjustHeight","pitchAdjustHeight",718386687),(2000),new cljs.core.Keyword(null,"endTransform","endTransform",-1545129030),Cesium.Matrix4.IDENTITY], null));

cesium.base.client.VIEWER.homeButton.viewModel.command.beforeExecute.addEventListener(((function (map__14849,map__14849__$1,longitude,latitude,height,heading,pitch,roll,pos,orient){
return (function (e){
e.cancel = true;

return camera.flyTo(cesium.base.client.HOME_VIEW);
});})(map__14849,map__14849__$1,longitude,latitude,height,heading,pitch,roll,pos,orient))
);

return camera.flyTo(cesium.base.client.HOME_VIEW);
});
cesium.base.client.clock_settings = (function cesium$base$client$clock_settings(clock,settings,viewer){
var map__14851 = settings;
var map__14851__$1 = (((((!((map__14851 == null))))?(((((map__14851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14851):map__14851);
var animate = cljs.core.get.call(null,map__14851__$1,new cljs.core.Keyword(null,"animate","animate",1850194573));
var start = cljs.core.get.call(null,map__14851__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__14851__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var current = cljs.core.get.call(null,map__14851__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var mult = cljs.core.get.call(null,map__14851__$1,new cljs.core.Keyword(null,"mult","mult",1466794774));
clock.shouldAnimate = animate;

clock.startTime = Cesium.JulianDate.fromIso8601(start);

clock.stopTime = Cesium.JulianDate.fromIso8601(stop);

clock.currentTime = Cesium.JulianDate.fromIso8601(current);

clock.multiplier = mult;

clock.clockStep = Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER;

clock.clockRange = Cesium.ClockRange.LOOP_STOP;

return viewer.timeline.zoomTo(clock.startTime,clock.stopTime);
});
cesium.base.client.load_data = (function cesium$base$client$load_data(format,source,options,viewer,processor){
var promise = (function (){var pred__14853 = cljs.core._EQ_;
var expr__14854 = format;
if(cljs.core.truth_(pred__14853.call(null,new cljs.core.Keyword(null,"GeoJSON","GeoJSON",33508860),expr__14854))){
return Cesium.GeoJsonDataSource.load(source,options);
} else {
if(cljs.core.truth_(pred__14853.call(null,new cljs.core.Keyword(null,"CZML","CZML",-1539311408),expr__14854))){
return Cesium.CzmlDataSource.load(source,options);
} else {
if(cljs.core.truth_(pred__14853.call(null,new cljs.core.Keyword(null,"KML","KML",1829561453),expr__14854))){
return Cesium.KmlDataSource.load(source,options);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__14854)].join('')));
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
cesium.base.client.start_czml_processing = (function cesium$base$client$start_czml_processing(czml_url,viewer){
var cz_processor = (function cesium$base$client$start_czml_processing_$_cz_processor(e){
var data = e.data;
if(cesium.base.client.CZML_DEBUG){
cljs.core.println.call(null,new cljs.core.Keyword(null,"data","data",-232669377),data);
} else {
}

return cesium.base.client.CZML_DS.process(JSON.parse(data));
});
viewer.dataSources.add(cesium.base.client.CZML_DS);

return (new EventSource(cesium.base.client.CZML_URL)).addEventListener("czml",cz_processor,false);
});

//# sourceMappingURL=client.js.map
