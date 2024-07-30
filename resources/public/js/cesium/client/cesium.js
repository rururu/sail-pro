// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('client.cesium');
goog.require('cljs.core');
goog.require('geo.calc');
goog.require('cljs.core.async');
goog.require('cljs.core.async.interop');
client.cesium.VIEWER = null;
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
client.cesium.sample_height = (function client$cesium$sample_height(p__2430,alt){
var vec__2431 = p__2430;
var phi = cljs.core.nth.call(null,vec__2431,(0),null);
var lam = cljs.core.nth.call(null,vec__2431,(1),null);
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
return client.cesium.fly_control.call(null,lat,lon,alt,head,pitch,roll,per);
});
client.cesium.init_3D_view = (function client$cesium$init_3D_view(url){
var c__2355__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2356__auto__ = (function (){var switch__2332__auto__ = (function (state_2506){
var state_val_2507 = (state_2506[(1)]);
if((state_val_2507 === (7))){
var inst_2438 = (state_2506[(7)]);
var state_2506__$1 = state_2506;
var statearr_2508_2544 = state_2506__$1;
(statearr_2508_2544[(2)] = inst_2438);

(statearr_2508_2544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2507 === (1))){
var inst_2434 = cljs.core.println.call(null,"Cesium initialisation..");
var inst_2435 = Cesium.createWorldImageryAsync();
var inst_2436 = cljs.core.async.interop.p__GT_c.call(null,inst_2435);
var state_2506__$1 = (function (){var statearr_2509 = state_2506;
(statearr_2509[(8)] = inst_2434);

return statearr_2509;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2506__$1,(2),inst_2436);
} else {
if((state_val_2507 === (4))){
var inst_2439 = (state_2506[(9)]);
var state_2506__$1 = state_2506;
var statearr_2510_2545 = state_2506__$1;
(statearr_2510_2545[(2)] = inst_2439);

(statearr_2510_2545[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2507 === (15))){
var inst_2468 = (state_2506[(2)]);
var inst_2469 = cljs.core.println.call(null," 1.Image and Terrain providers set..");
var state_2506__$1 = (function (){var statearr_2511 = state_2506;
(statearr_2511[(10)] = inst_2468);

(statearr_2511[(11)] = inst_2469);

return statearr_2511;
})();
var statearr_2512_2546 = state_2506__$1;
(statearr_2512_2546[(2)] = null);

(statearr_2512_2546[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2507 === (13))){
var inst_2455 = (state_2506[(12)]);
var inst_2465 = (function(){throw inst_2455})();
var state_2506__$1 = state_2506;
var statearr_2513_2547 = state_2506__$1;
(statearr_2513_2547[(2)] = inst_2465);

(statearr_2513_2547[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2507 === (6))){
var inst_2438 = (state_2506[(7)]);
var inst_2448 = (function(){throw inst_2438})();
var state_2506__$1 = state_2506;
var statearr_2514_2548 = state_2506__$1;
(statearr_2514_2548[(2)] = inst_2448);

(statearr_2514_2548[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2507 === (17))){
var inst_2504 = (state_2506[(2)]);
var state_2506__$1 = state_2506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2506__$1,inst_2504);
} else {
if((state_val_2507 === (3))){
var inst_2438 = (state_2506[(7)]);
var inst_2441 = cljs.core.ex_data.call(null,inst_2438);
var inst_2442 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_2441);
var inst_2443 = cljs.core._EQ_.call(null,inst_2442,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_2506__$1 = state_2506;
var statearr_2515_2549 = state_2506__$1;
(statearr_2515_2549[(2)] = inst_2443);

(statearr_2515_2549[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2507 === (12))){
var inst_2463 = (state_2506[(2)]);
var state_2506__$1 = state_2506;
if(cljs.core.truth_(inst_2463)){
var statearr_2517_2550 = state_2506__$1;
(statearr_2517_2550[(1)] = (13));

} else {
var statearr_2518_2551 = state_2506__$1;
(statearr_2518_2551[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2507 === (2))){
var inst_2438 = (state_2506[(7)]);
var inst_2439 = (state_2506[(9)]);
var inst_2438__$1 = (state_2506[(2)]);
var inst_2439__$1 = (inst_2438__$1 instanceof cljs.core.ExceptionInfo);
var state_2506__$1 = (function (){var statearr_2519 = state_2506;
(statearr_2519[(7)] = inst_2438__$1);

(statearr_2519[(9)] = inst_2439__$1);

return statearr_2519;
})();
if(cljs.core.truth_(inst_2439__$1)){
var statearr_2520_2552 = state_2506__$1;
(statearr_2520_2552[(1)] = (3));

} else {
var statearr_2521_2553 = state_2506__$1;
(statearr_2521_2553[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2507 === (19))){
var _ = (function (){var statearr_2522 = state_2506;
(statearr_2522[(4)] = cljs.core.rest.call(null,(state_2506[(4)])));

return statearr_2522;
})();
var state_2506__$1 = state_2506;
var ex2516 = (state_2506__$1[(2)]);
var statearr_2523_2554 = state_2506__$1;
(statearr_2523_2554[(5)] = ex2516);


if((ex2516 instanceof Error)){
var statearr_2524_2555 = state_2506__$1;
(statearr_2524_2555[(1)] = (18));

(statearr_2524_2555[(5)] = null);

} else {
throw ex2516;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2507 === (11))){
var inst_2456 = (state_2506[(13)]);
var state_2506__$1 = state_2506;
var statearr_2525_2556 = state_2506__$1;
(statearr_2525_2556[(2)] = inst_2456);

(statearr_2525_2556[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2507 === (9))){
var inst_2455 = (state_2506[(12)]);
var inst_2456 = (state_2506[(13)]);
var inst_2455__$1 = (state_2506[(2)]);
var inst_2456__$1 = (inst_2455__$1 instanceof cljs.core.ExceptionInfo);
var state_2506__$1 = (function (){var statearr_2526 = state_2506;
(statearr_2526[(12)] = inst_2455__$1);

(statearr_2526[(13)] = inst_2456__$1);

return statearr_2526;
})();
if(cljs.core.truth_(inst_2456__$1)){
var statearr_2527_2557 = state_2506__$1;
(statearr_2527_2557[(1)] = (10));

} else {
var statearr_2528_2558 = state_2506__$1;
(statearr_2528_2558[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2507 === (5))){
var inst_2446 = (state_2506[(2)]);
var state_2506__$1 = state_2506;
if(cljs.core.truth_(inst_2446)){
var statearr_2529_2559 = state_2506__$1;
(statearr_2529_2559[(1)] = (6));

} else {
var statearr_2530_2560 = state_2506__$1;
(statearr_2530_2560[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2507 === (14))){
var inst_2455 = (state_2506[(12)]);
var state_2506__$1 = state_2506;
var statearr_2531_2561 = state_2506__$1;
(statearr_2531_2561[(2)] = inst_2455);

(statearr_2531_2561[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2507 === (16))){
var inst_2451 = (state_2506[(14)]);
var inst_2468 = (state_2506[(10)]);
var _ = (function (){var statearr_2532 = state_2506;
(statearr_2532[(4)] = cljs.core.cons.call(null,(19),(state_2506[(4)])));

return statearr_2532;
})();
var inst_2480 = ({"imageryProvider":inst_2451,"terrainProvider":inst_2468,"scene3DOnly":true,"animation":false,"shouldAnimate":true});
var inst_2481 = (new Cesium.Viewer("cesiumContainer",inst_2480));
var inst_2482 = cljs.core.println.call(null," 2.Cesium Viewer created..");
var inst_2483 = inst_2481.scene;
var inst_2484 = inst_2483.globe;
var inst_2485 = (inst_2484.enableLighting = true);
var inst_2486 = cljs.core.println.call(null," 3.Night and Day Lightning enabled..");
var inst_2487 = client.cesium.VIEWER = inst_2481;
var inst_2488 = cljs.core.println.call(null," 4.VIEWER Var set..");
var inst_2489 = client.cesium.VIEWER.dataSources;
var inst_2490 = inst_2489.add(client.cesium.CZML_SRC);
var inst_2491 = cljs.core.println.call(null," 5.CZML Data Source added..");
var inst_2492 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"/czml"].join('');
var inst_2493 = (new EventSource(inst_2492));
var inst_2494 = inst_2493.addEventListener("czml",client.cesium.cz_processor,false);
var inst_2495 = cljs.core.println.call(null," 6.CZML Event Source Listener added..");
var inst_2496 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_2497 = [new cljs.core.Keyword(null,"INIT-3D-VIEW","INIT-3D-VIEW",-1398074686),url];
var inst_2498 = (new cljs.core.PersistentVector(null,2,(5),inst_2496,inst_2497,null));
var inst_2499 = cljs.core.println.call(null,inst_2498);
var inst_2500 = cljs.core.println.call(null,"Cesium initialisation done.");
var inst_2501 = cljs.core.println.call(null,"777");
var ___$1 = (function (){var statearr_2533 = state_2506;
(statearr_2533[(4)] = cljs.core.rest.call(null,(state_2506[(4)])));

return statearr_2533;
})();
var state_2506__$1 = (function (){var statearr_2534 = state_2506;
(statearr_2534[(15)] = inst_2482);

(statearr_2534[(16)] = inst_2485);

(statearr_2534[(17)] = inst_2486);

(statearr_2534[(18)] = inst_2487);

(statearr_2534[(19)] = inst_2488);

(statearr_2534[(20)] = inst_2490);

(statearr_2534[(21)] = inst_2491);

(statearr_2534[(22)] = inst_2494);

(statearr_2534[(23)] = inst_2495);

(statearr_2534[(24)] = inst_2499);

(statearr_2534[(25)] = inst_2500);

return statearr_2534;
})();
var statearr_2535_2562 = state_2506__$1;
(statearr_2535_2562[(2)] = inst_2501);

(statearr_2535_2562[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2507 === (10))){
var inst_2455 = (state_2506[(12)]);
var inst_2458 = cljs.core.ex_data.call(null,inst_2455);
var inst_2459 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_2458);
var inst_2460 = cljs.core._EQ_.call(null,inst_2459,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_2506__$1 = state_2506;
var statearr_2536_2563 = state_2506__$1;
(statearr_2536_2563[(2)] = inst_2460);

(statearr_2536_2563[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2507 === (18))){
var inst_2470 = (state_2506[(2)]);
var inst_2471 = cljs.core.ex_cause.call(null,inst_2470);
var inst_2472 = console.log(inst_2471);
var state_2506__$1 = state_2506;
var statearr_2537_2564 = state_2506__$1;
(statearr_2537_2564[(2)] = inst_2472);

(statearr_2537_2564[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2507 === (8))){
var inst_2451 = (state_2506[(2)]);
var inst_2452 = Cesium.createWorldTerrainAsync();
var inst_2453 = cljs.core.async.interop.p__GT_c.call(null,inst_2452);
var state_2506__$1 = (function (){var statearr_2538 = state_2506;
(statearr_2538[(14)] = inst_2451);

return statearr_2538;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2506__$1,(9),inst_2453);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var client$cesium$init_3D_view_$_state_machine__2333__auto__ = null;
var client$cesium$init_3D_view_$_state_machine__2333__auto____0 = (function (){
var statearr_2539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2539[(0)] = client$cesium$init_3D_view_$_state_machine__2333__auto__);

(statearr_2539[(1)] = (1));

return statearr_2539;
});
var client$cesium$init_3D_view_$_state_machine__2333__auto____1 = (function (state_2506){
while(true){
var ret_value__2334__auto__ = (function (){try{while(true){
var result__2335__auto__ = switch__2332__auto__.call(null,state_2506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2335__auto__;
}
break;
}
}catch (e2540){var ex__2336__auto__ = e2540;
var statearr_2541_2565 = state_2506;
(statearr_2541_2565[(2)] = ex__2336__auto__);


if(cljs.core.seq.call(null,(state_2506[(4)]))){
var statearr_2542_2566 = state_2506;
(statearr_2542_2566[(1)] = cljs.core.first.call(null,(state_2506[(4)])));

} else {
throw ex__2336__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2567 = state_2506;
state_2506 = G__2567;
continue;
} else {
return ret_value__2334__auto__;
}
break;
}
});
client$cesium$init_3D_view_$_state_machine__2333__auto__ = function(state_2506){
switch(arguments.length){
case 0:
return client$cesium$init_3D_view_$_state_machine__2333__auto____0.call(this);
case 1:
return client$cesium$init_3D_view_$_state_machine__2333__auto____1.call(this,state_2506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
client$cesium$init_3D_view_$_state_machine__2333__auto__.cljs$core$IFn$_invoke$arity$0 = client$cesium$init_3D_view_$_state_machine__2333__auto____0;
client$cesium$init_3D_view_$_state_machine__2333__auto__.cljs$core$IFn$_invoke$arity$1 = client$cesium$init_3D_view_$_state_machine__2333__auto____1;
return client$cesium$init_3D_view_$_state_machine__2333__auto__;
})()
})();
var state__2357__auto__ = (function (){var statearr_2543 = f__2356__auto__.call(null);
(statearr_2543[(6)] = c__2355__auto__);

return statearr_2543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2357__auto__);
}));

return c__2355__auto__;
});
client.cesium.hig_ray = (function client$cesium$hig_ray(lat,lon,bea,dis,step,alt){
var ray = geo.calc.ray.call(null,lat,lon,bea,dis,step);
return cljs.core.map.call(null,(function (p1__2568_SHARP_){
return client.cesium.sample_height.call(null,p1__2568_SHARP_,alt);
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
var G__2569 = fr;
var G__2570 = cljs.core.rest.call(null,r);
f = G__2569;
r = G__2570;
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
var vec__2571 = center;
var lat = cljs.core.nth.call(null,vec__2571,(0),null);
var lon = cljs.core.nth.call(null,vec__2571,(1),null);
var vec__2574 = sector;
var start = cljs.core.nth.call(null,vec__2574,(0),null);
var end = cljs.core.nth.call(null,vec__2574,(1),null);
var losec = (function (){var iter__5480__auto__ = (function client$cesium$los_sector_$_iter__2577(s__2578){
return (new cljs.core.LazySeq(null,(function (){
var s__2578__$1 = s__2578;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__2578__$1);
if(temp__5804__auto__){
var s__2578__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2578__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__2578__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__2580 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__2579 = (0);
while(true){
if((i__2579 < size__5479__auto__)){
var bea = cljs.core._nth.call(null,c__5478__auto__,i__2579);
cljs.core.chunk_append.call(null,b__2580,client.cesium.los_end.call(null,lat,lon,bea,dist,dist_step,alt));

var G__2581 = (i__2579 + (1));
i__2579 = G__2581;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2580),client$cesium$los_sector_$_iter__2577.call(null,cljs.core.chunk_rest.call(null,s__2578__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2580),null);
}
} else {
var bea = cljs.core.first.call(null,s__2578__$2);
return cljs.core.cons.call(null,client.cesium.los_end.call(null,lat,lon,bea,dist,dist_step,alt),client$cesium$los_sector_$_iter__2577.call(null,cljs.core.rest.call(null,s__2578__$2)));
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
