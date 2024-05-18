// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('client.v3d');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('cljs.reader');
goog.require('geo.calc');
goog.require('client.cesium');
client.v3d.VEHICLE = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"\u0410\u0432\u0440\u043E\u0440\u0430",new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),(30)], null),new cljs.core.Keyword(null,"altitude","altitude",463588637),(4000),new cljs.core.Keyword(null,"speed","speed",1257663751),(160),new cljs.core.Keyword(null,"course","course",1455432948),(270)], null));
client.v3d.error_handler = (function client$v3d$error_handler(response){
var map__2529 = response;
var map__2529__$1 = cljs.core.__destructure_map.call(null,map__2529);
var status = cljs.core.get.call(null,map__2529__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__2529__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
client.v3d.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
client.v3d.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
client.v3d.ZOOM_STEP = (100);
client.v3d.PORT = (8448);
client.v3d.format = (function client$v3d$format(var_args){
var args__5732__auto__ = [];
var len__5726__auto___2532 = arguments.length;
var i__5727__auto___2533 = (0);
while(true){
if((i__5727__auto___2533 < len__5726__auto___2532)){
args__5732__auto__.push((arguments[i__5727__auto___2533]));

var G__2534 = (i__5727__auto___2533 + (1));
i__5727__auto___2533 = G__2534;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return client.v3d.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(client.v3d.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
}));

(client.v3d.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(client.v3d.format.cljs$lang$applyTo = (function (seq2530){
var G__2531 = cljs.core.first.call(null,seq2530);
var seq2530__$1 = cljs.core.next.call(null,seq2530);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2531,seq2530__$1);
}));

client.v3d.repeater = (function client$v3d$repeater(var_args){
var G__2536 = arguments.length;
switch (G__2536) {
case 2:
return client.v3d.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return client.v3d.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(client.v3d.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__2435__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2436__auto__ = (function (){var switch__2412__auto__ = (function (state_2550){
var state_val_2551 = (state_2550[(1)]);
if((state_val_2551 === (1))){
var state_2550__$1 = state_2550;
var statearr_2552_2594 = state_2550__$1;
(statearr_2552_2594[(2)] = null);

(statearr_2552_2594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2551 === (2))){
var state_2550__$1 = state_2550;
var statearr_2553_2595 = state_2550__$1;
(statearr_2553_2595[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2551 === (3))){
var inst_2548 = (state_2550[(2)]);
var state_2550__$1 = state_2550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2550__$1,inst_2548);
} else {
if((state_val_2551 === (4))){
var inst_2539 = func.call(null);
var inst_2540 = cljs.core.async.timeout.call(null,time_out);
var state_2550__$1 = (function (){var statearr_2555 = state_2550;
(statearr_2555[(7)] = inst_2539);

return statearr_2555;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2550__$1,(7),inst_2540);
} else {
if((state_val_2551 === (5))){
var state_2550__$1 = state_2550;
var statearr_2556_2596 = state_2550__$1;
(statearr_2556_2596[(2)] = null);

(statearr_2556_2596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2551 === (6))){
var inst_2546 = (state_2550[(2)]);
var state_2550__$1 = state_2550;
var statearr_2557_2597 = state_2550__$1;
(statearr_2557_2597[(2)] = inst_2546);

(statearr_2557_2597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2551 === (7))){
var inst_2542 = (state_2550[(2)]);
var state_2550__$1 = (function (){var statearr_2558 = state_2550;
(statearr_2558[(8)] = inst_2542);

return statearr_2558;
})();
var statearr_2559_2598 = state_2550__$1;
(statearr_2559_2598[(2)] = null);

(statearr_2559_2598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var client$v3d$state_machine__2413__auto__ = null;
var client$v3d$state_machine__2413__auto____0 = (function (){
var statearr_2560 = [null,null,null,null,null,null,null,null,null];
(statearr_2560[(0)] = client$v3d$state_machine__2413__auto__);

(statearr_2560[(1)] = (1));

return statearr_2560;
});
var client$v3d$state_machine__2413__auto____1 = (function (state_2550){
while(true){
var ret_value__2414__auto__ = (function (){try{while(true){
var result__2415__auto__ = switch__2412__auto__.call(null,state_2550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2415__auto__;
}
break;
}
}catch (e2561){var ex__2416__auto__ = e2561;
var statearr_2562_2599 = state_2550;
(statearr_2562_2599[(2)] = ex__2416__auto__);


if(cljs.core.seq.call(null,(state_2550[(4)]))){
var statearr_2563_2600 = state_2550;
(statearr_2563_2600[(1)] = cljs.core.first.call(null,(state_2550[(4)])));

} else {
throw ex__2416__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2601 = state_2550;
state_2550 = G__2601;
continue;
} else {
return ret_value__2414__auto__;
}
break;
}
});
client$v3d$state_machine__2413__auto__ = function(state_2550){
switch(arguments.length){
case 0:
return client$v3d$state_machine__2413__auto____0.call(this);
case 1:
return client$v3d$state_machine__2413__auto____1.call(this,state_2550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
client$v3d$state_machine__2413__auto__.cljs$core$IFn$_invoke$arity$0 = client$v3d$state_machine__2413__auto____0;
client$v3d$state_machine__2413__auto__.cljs$core$IFn$_invoke$arity$1 = client$v3d$state_machine__2413__auto____1;
return client$v3d$state_machine__2413__auto__;
})()
})();
var state__2437__auto__ = (function (){var statearr_2564 = f__2436__auto__.call(null);
(statearr_2564[(6)] = c__2435__auto__);

return statearr_2564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2437__auto__);
}));

return c__2435__auto__;
}));

(client.v3d.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__2435__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2436__auto__ = (function (){var switch__2412__auto__ = (function (state_2578){
var state_val_2579 = (state_2578[(1)]);
if((state_val_2579 === (1))){
var state_2578__$1 = state_2578;
var statearr_2580_2602 = state_2578__$1;
(statearr_2580_2602[(2)] = null);

(statearr_2580_2602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2579 === (2))){
var state_2578__$1 = state_2578;
var statearr_2581_2603 = state_2578__$1;
(statearr_2581_2603[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2579 === (3))){
var inst_2576 = (state_2578[(2)]);
var state_2578__$1 = state_2578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2578__$1,inst_2576);
} else {
if((state_val_2579 === (4))){
var inst_2567 = func.call(null,param);
var inst_2568 = cljs.core.async.timeout.call(null,time_out);
var state_2578__$1 = (function (){var statearr_2583 = state_2578;
(statearr_2583[(7)] = inst_2567);

return statearr_2583;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2578__$1,(7),inst_2568);
} else {
if((state_val_2579 === (5))){
var state_2578__$1 = state_2578;
var statearr_2584_2604 = state_2578__$1;
(statearr_2584_2604[(2)] = null);

(statearr_2584_2604[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2579 === (6))){
var inst_2574 = (state_2578[(2)]);
var state_2578__$1 = state_2578;
var statearr_2585_2605 = state_2578__$1;
(statearr_2585_2605[(2)] = inst_2574);

(statearr_2585_2605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2579 === (7))){
var inst_2570 = (state_2578[(2)]);
var state_2578__$1 = (function (){var statearr_2586 = state_2578;
(statearr_2586[(8)] = inst_2570);

return statearr_2586;
})();
var statearr_2587_2606 = state_2578__$1;
(statearr_2587_2606[(2)] = null);

(statearr_2587_2606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var client$v3d$state_machine__2413__auto__ = null;
var client$v3d$state_machine__2413__auto____0 = (function (){
var statearr_2588 = [null,null,null,null,null,null,null,null,null];
(statearr_2588[(0)] = client$v3d$state_machine__2413__auto__);

(statearr_2588[(1)] = (1));

return statearr_2588;
});
var client$v3d$state_machine__2413__auto____1 = (function (state_2578){
while(true){
var ret_value__2414__auto__ = (function (){try{while(true){
var result__2415__auto__ = switch__2412__auto__.call(null,state_2578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2415__auto__;
}
break;
}
}catch (e2589){var ex__2416__auto__ = e2589;
var statearr_2590_2607 = state_2578;
(statearr_2590_2607[(2)] = ex__2416__auto__);


if(cljs.core.seq.call(null,(state_2578[(4)]))){
var statearr_2591_2608 = state_2578;
(statearr_2591_2608[(1)] = cljs.core.first.call(null,(state_2578[(4)])));

} else {
throw ex__2416__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2609 = state_2578;
state_2578 = G__2609;
continue;
} else {
return ret_value__2414__auto__;
}
break;
}
});
client$v3d$state_machine__2413__auto__ = function(state_2578){
switch(arguments.length){
case 0:
return client$v3d$state_machine__2413__auto____0.call(this);
case 1:
return client$v3d$state_machine__2413__auto____1.call(this,state_2578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
client$v3d$state_machine__2413__auto__.cljs$core$IFn$_invoke$arity$0 = client$v3d$state_machine__2413__auto____0;
client$v3d$state_machine__2413__auto__.cljs$core$IFn$_invoke$arity$1 = client$v3d$state_machine__2413__auto____1;
return client$v3d$state_machine__2413__auto__;
})()
})();
var state__2437__auto__ = (function (){var statearr_2592 = f__2436__auto__.call(null);
(statearr_2592[(6)] = c__2435__auto__);

return statearr_2592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2437__auto__);
}));

return c__2435__auto__;
}));

(client.v3d.repeater.cljs$lang$maxFixedArity = 3);

client.v3d.delayer = (function client$v3d$delayer(func,time){
var c__2435__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2436__auto__ = (function (){var switch__2412__auto__ = (function (state_2615){
var state_val_2616 = (state_2615[(1)]);
if((state_val_2616 === (1))){
var inst_2610 = cljs.core.async.timeout.call(null,time);
var state_2615__$1 = state_2615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2615__$1,(2),inst_2610);
} else {
if((state_val_2616 === (2))){
var inst_2612 = (state_2615[(2)]);
var inst_2613 = func.call(null);
var state_2615__$1 = (function (){var statearr_2617 = state_2615;
(statearr_2617[(7)] = inst_2612);

return statearr_2617;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2615__$1,inst_2613);
} else {
return null;
}
}
});
return (function() {
var client$v3d$delayer_$_state_machine__2413__auto__ = null;
var client$v3d$delayer_$_state_machine__2413__auto____0 = (function (){
var statearr_2618 = [null,null,null,null,null,null,null,null];
(statearr_2618[(0)] = client$v3d$delayer_$_state_machine__2413__auto__);

(statearr_2618[(1)] = (1));

return statearr_2618;
});
var client$v3d$delayer_$_state_machine__2413__auto____1 = (function (state_2615){
while(true){
var ret_value__2414__auto__ = (function (){try{while(true){
var result__2415__auto__ = switch__2412__auto__.call(null,state_2615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2415__auto__;
}
break;
}
}catch (e2619){var ex__2416__auto__ = e2619;
var statearr_2620_2623 = state_2615;
(statearr_2620_2623[(2)] = ex__2416__auto__);


if(cljs.core.seq.call(null,(state_2615[(4)]))){
var statearr_2621_2624 = state_2615;
(statearr_2621_2624[(1)] = cljs.core.first.call(null,(state_2615[(4)])));

} else {
throw ex__2416__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2625 = state_2615;
state_2615 = G__2625;
continue;
} else {
return ret_value__2414__auto__;
}
break;
}
});
client$v3d$delayer_$_state_machine__2413__auto__ = function(state_2615){
switch(arguments.length){
case 0:
return client$v3d$delayer_$_state_machine__2413__auto____0.call(this);
case 1:
return client$v3d$delayer_$_state_machine__2413__auto____1.call(this,state_2615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
client$v3d$delayer_$_state_machine__2413__auto__.cljs$core$IFn$_invoke$arity$0 = client$v3d$delayer_$_state_machine__2413__auto____0;
client$v3d$delayer_$_state_machine__2413__auto__.cljs$core$IFn$_invoke$arity$1 = client$v3d$delayer_$_state_machine__2413__auto____1;
return client$v3d$delayer_$_state_machine__2413__auto__;
})()
})();
var state__2437__auto__ = (function (){var statearr_2622 = f__2436__auto__.call(null);
(statearr_2622[(6)] = c__2435__auto__);

return statearr_2622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2437__auto__);
}));

return c__2435__auto__;
});
client.v3d.read_transit = (function client$v3d$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
client.v3d.by_id = (function client$v3d$by_id(id){
return document.getElementById(id);
});
client.v3d.get_html_BANG_ = (function client$v3d$get_html_BANG_(id){
return document.getElementById(id).innerHTML;
});
client.v3d.set_html_BANG_ = (function client$v3d$set_html_BANG_(id,msg){
return (document.getElementById(id).innerHTML = msg);
});
client.v3d.num_val = (function client$v3d$num_val(x){
if(typeof x === 'number'){
return x;
} else {
return cljs.reader.read_string.call(null,x);
}
});
client.v3d.viewM = (function client$v3d$viewM(){
var deg = client.v3d.num_val.call(null,client.v3d.get_html_BANG_.call(null,"view-fld"));
var deg__$1 = ((cljs.core._EQ_.call(null,deg,(-180)))?(180):(deg - (1)));
cljs.core._vreset_BANG_.call(null,client.cesium.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,client.cesium.CAMERA),new cljs.core.Keyword(null,"view","view",1247994814),deg__$1));

client.v3d.set_html_BANG_.call(null,"view-fld",deg__$1);

return (client.v3d.by_id.call(null,"view-vals").value = deg__$1);
});
client.v3d.view = (function client$v3d$view(deg){
var deg__$1 = client.v3d.num_val.call(null,deg);
if(((((-180) <= deg__$1)) && ((deg__$1 <= (180))))){
cljs.core._vreset_BANG_.call(null,client.cesium.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,client.cesium.CAMERA),new cljs.core.Keyword(null,"view","view",1247994814),deg__$1));

return client.v3d.set_html_BANG_.call(null,"view-fld",deg__$1);
} else {
return null;
}
});
client.v3d.viewP = (function client$v3d$viewP(){
var deg = client.v3d.num_val.call(null,client.v3d.get_html_BANG_.call(null,"view-fld"));
var deg__$1 = ((cljs.core._EQ_.call(null,deg,(180)))?(-180):(deg + (1)));
cljs.core._vreset_BANG_.call(null,client.cesium.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,client.cesium.CAMERA),new cljs.core.Keyword(null,"view","view",1247994814),deg__$1));

client.v3d.set_html_BANG_.call(null,"view-fld",deg__$1);

return (client.v3d.by_id.call(null,"view-vals").value = deg__$1);
});
client.v3d.pitch = (function client$v3d$pitch(deg){
var deg__$1 = client.v3d.num_val.call(null,deg);
if(((((-90) <= deg__$1)) && ((deg__$1 <= (90))))){
cljs.core._vreset_BANG_.call(null,client.cesium.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,client.cesium.CAMERA),new cljs.core.Keyword(null,"pitch","pitch",1495126700),deg__$1));

return client.v3d.set_html_BANG_.call(null,"pitch-fld",deg__$1);
} else {
return null;
}
});
client.v3d.roll = (function client$v3d$roll(deg){
var deg__$1 = client.v3d.num_val.call(null,deg);
if(((((-180) <= deg__$1)) && ((deg__$1 <= (180))))){
cljs.core._vreset_BANG_.call(null,client.cesium.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,client.cesium.CAMERA),new cljs.core.Keyword(null,"roll","roll",11266999),deg__$1));

return client.v3d.set_html_BANG_.call(null,"roll-fld",deg__$1);
} else {
return null;
}
});
client.v3d.zoom_format = (function client$v3d$zoom_format(m){
return client.v3d.format.call(null,"%.1f km",(m / (1000)));
});
client.v3d.zoomP = (function client$v3d$zoomP(){
var v = client.v3d.num_val.call(null,client.cesium.get_zoom.call(null));
var v__$1 = (v + client.v3d.ZOOM_STEP);
client.cesium.set_zoom.call(null,v__$1);

client.v3d.set_html_BANG_.call(null,"zoom-val",client.v3d.zoom_format.call(null,v__$1));

return (client.v3d.by_id.call(null,"zoom-slv").value = v__$1);
});
client.v3d.zoomM = (function client$v3d$zoomM(){
var v = client.v3d.num_val.call(null,client.cesium.get_zoom.call(null));
var v__$1 = (v - client.v3d.ZOOM_STEP);
var v__$2 = (((v__$1 < (0)))?(0):v__$1);
client.cesium.set_zoom.call(null,v__$2);

client.v3d.set_html_BANG_.call(null,"zoom-val",client.v3d.zoom_format.call(null,v__$2));

return (client.v3d.by_id.call(null,"zoom-slv").value = v__$2);
});
client.v3d.zoom_amount = (function client$v3d$zoom_amount(amount){
var v = client.v3d.num_val.call(null,amount);
client.cesium.set_zoom.call(null,v);

return client.v3d.set_html_BANG_.call(null,"zoom-val",client.v3d.zoom_format.call(null,v));
});
client.v3d.response_request = (function client$v3d$response_request(){
var resp = cljs.core.deref.call(null,client.v3d.RESPONSE);
if((!(cljs.core.empty_QMARK_.call(null,resp)))){
ajax.core.GET.call(null,"/response",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response","response",-1068424192),(function (){try{return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),resp);
}catch (e2626){if((e2626 instanceof Error)){
var e = e2626;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e2626;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),client.v3d.error_handler], null));

return cljs.core.vreset_BANG_.call(null,client.v3d.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
client.v3d.handle_request = (function client$v3d$handle_request(request){
var temp__5802__auto___2633 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto___2633)){
var vie_2634 = temp__5802__auto___2633;
client.v3d.view.call(null,vie_2634);
} else {
}

var temp__5802__auto___2635 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto___2635)){
var pit_2636 = temp__5802__auto___2635;
client.v3d.pitch.call(null,pit_2636);
} else {
}

var temp__5802__auto___2637 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto___2637)){
var rol_2638 = temp__5802__auto___2637;
client.v3d.roll.call(null,rol_2638);
} else {
}

var temp__5802__auto___2639 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto___2639)){
var vec__2627_2640 = temp__5802__auto___2639;
var lat_2641 = cljs.core.nth.call(null,vec__2627_2640,(0),null);
var lon_2642 = cljs.core.nth.call(null,vec__2627_2640,(1),null);
var vec__2630_2643 = client.cesium.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [geo.calc.radians.call(null,lat_2641),geo.calc.radians.call(null,lon_2642)], null),(0));
var __2644 = cljs.core.nth.call(null,vec__2630_2643,(0),null);
var __2645__$1 = cljs.core.nth.call(null,vec__2630_2643,(1),null);
var sh_2646 = cljs.core.nth.call(null,vec__2630_2643,(2),null);
cljs.core._vreset_BANG_.call(null,client.v3d.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,client.v3d.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_2646 | (0))));
} else {
}

return client.v3d.response_request.call(null);
});
client.v3d.handle_vehicle = (function client$v3d$handle_vehicle(vehicle){
var vec__2647 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__2647,(0),null);
var lon = cljs.core.nth.call(null,vec__2647,(1),null);
var alt = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle);
var vev = new cljs.core.Keyword(null,"view-elevation","view-elevation",-681076231).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client.v3d.VEHICLE));
var crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle);
var head = client.cesium.norm_crs.call(null,(crs + new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client.cesium.CAMERA))));
cljs.core._vreset_BANG_.call(null,client.v3d.VEHICLE,cljs.core.merge.call(null,cljs.core._deref.call(null,client.v3d.VEHICLE),vehicle));

client.v3d.set_html_BANG_.call(null,"onboard-fld",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(vehicle));

client.v3d.set_html_BANG_.call(null,"name-fld",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(vehicle));

client.v3d.set_html_BANG_.call(null,"latitude-fld",client.v3d.format.call(null,"%.3f",cljs.core.first.call(null,new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle))));

client.v3d.set_html_BANG_.call(null,"longitude-fld",client.v3d.format.call(null,"%.3f",cljs.core.second.call(null,new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle))));

client.v3d.set_html_BANG_.call(null,"course-fld",new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle));

client.v3d.set_html_BANG_.call(null,"speed-fld",new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(vehicle));

client.v3d.set_html_BANG_.call(null,"altitude-fld",alt);

client.v3d.set_html_BANG_.call(null,"view-dir",geo.calc.rumb.call(null,head));

if(cljs.core._EQ_.call(null,client.cesium.ZOOM,(0))){
return client.cesium.fly_to.call(null,lat,lon,(alt + vev),crs,(5));
} else {
return null;
}
});
client.v3d.vehicle_hr = (function client$v3d$vehicle_hr(response){
var resp = client.v3d.read_transit.call(null,response);
var temp__5802__auto___2650 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5802__auto___2650)){
var vehicle_2651 = temp__5802__auto___2650;
client.v3d.handle_vehicle.call(null,vehicle_2651);
} else {
}

var temp__5802__auto__ = new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5802__auto__)){
var request = temp__5802__auto__;
return client.v3d.handle_request.call(null,request);
} else {
return null;
}
});
client.v3d.receive_vehicle = (function client$v3d$receive_vehicle(){
return ajax.core.GET.call(null,"/vehicle",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.deref.call(null,client.cesium.CAMERA),new cljs.core.Keyword(null,"handler","handler",-195596612),client.v3d.vehicle_hr,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),client.v3d.error_handler], null));
});
client.v3d.elev = (function client$v3d$elev(vev){
return cljs.core._vreset_BANG_.call(null,client.v3d.VEHICLE,cljs.core.assoc.call(null,cljs.core._deref.call(null,client.v3d.VEHICLE),new cljs.core.Keyword(null,"view-elevation","view-elevation",-681076231),client.v3d.num_val.call(null,vev)));
});
client.v3d.left_controls = (function client$v3d$left_controls(){
client.v3d.set_html_BANG_.call(null,"camera","<h4>Camera</h4>");

client.v3d.set_html_BANG_.call(null,"onboard","Onboard:");

client.v3d.set_html_BANG_.call(null,"onboard-fld","");

client.v3d.set_html_BANG_.call(null,"elev","Elevation:");

client.v3d.set_html_BANG_.call(null,"elev-fld","<input value='0' style='width:100px' id='input-elev'\n                     onchange='javascript:client.v3d.elev(this.value)'>");

client.v3d.set_html_BANG_.call(null,"roll","Roll:");

client.v3d.set_html_BANG_.call(null,"roll-fld",(0));

client.v3d.set_html_BANG_.call(null,"roll-sld","<input type='range' style='width:200px' id='roll-vals'\n               min='-180' value='0' max='180'\n               oninput='javascript:client.v3d.roll(this.value)'>");

client.v3d.set_html_BANG_.call(null,"pitch","Pitch:");

client.v3d.set_html_BANG_.call(null,"pitch-fld",(0));

client.v3d.set_html_BANG_.call(null,"pitch-sld","<input type='range' style='width:200px' id='pitch-vals'\n               min='-90' value='0' max='90'\n               oninput='javascript:client.v3d.pitch(this.value)'>");

client.v3d.set_html_BANG_.call(null,"view","View:");

client.v3d.set_html_BANG_.call(null,"view-fld",(0));

client.v3d.set_html_BANG_.call(null,"view-sld","<input type='range' style='width:200px' id='view-vals'\n               min='-180' value='0' max='180'\n               oninput='javascript:client.v3d.view(this.value)'>");

client.v3d.set_html_BANG_.call(null,"viewM-btn","<button onclick='javascript:client.v3d.viewM()'>view-</button>");

return client.v3d.set_html_BANG_.call(null,"viewP-btn","<button onclick='javascript:client.v3d.viewP()'>view+</button>");
});
client.v3d.right_controls = (function client$v3d$right_controls(){
client.v3d.set_html_BANG_.call(null,"vehicle","<h4>Vehicle</h4>");

client.v3d.set_html_BANG_.call(null,"name","Name:");

client.v3d.set_html_BANG_.call(null,"name-fld","");

client.v3d.set_html_BANG_.call(null,"latitude","Latitude:");

client.v3d.set_html_BANG_.call(null,"latitude-fld","");

client.v3d.set_html_BANG_.call(null,"longitude","Longitude:");

client.v3d.set_html_BANG_.call(null,"longitude-fld","");

client.v3d.set_html_BANG_.call(null,"course","Course:");

client.v3d.set_html_BANG_.call(null,"course-fld","");

client.v3d.set_html_BANG_.call(null,"speed","Speed:");

client.v3d.set_html_BANG_.call(null,"speed-fld","");

client.v3d.set_html_BANG_.call(null,"altitude","Altitude:");

return client.v3d.set_html_BANG_.call(null,"altitude-fld","");
});
client.v3d.middle_controls = (function client$v3d$middle_controls(){
client.v3d.set_html_BANG_.call(null,"binocular","<h4>Binocular</h4>");

client.v3d.set_html_BANG_.call(null,"zoom-sld","<input type='range' style='width:200px' id='zoom-slv'\n               min='0' value='0' max='40000'\n               oninput='javascript:client.v3d.zoom_amount(this.value)'>");

client.v3d.set_html_BANG_.call(null,"zoom-val","0 m");

client.v3d.set_html_BANG_.call(null,"zoomM","<button onclick='javascript:client.v3d.zoomM()'>-</button>");

return client.v3d.set_html_BANG_.call(null,"zoomP","<button onclick='javascript:client.v3d.zoomP()'>+</button>");
});
client.v3d.show_controls = (function client$v3d$show_controls(){
client.v3d.right_controls.call(null);

client.v3d.left_controls.call(null);

return client.v3d.middle_controls.call(null);
});
client.v3d.on_load = (function client$v3d$on_load(){
client.cesium.init_3D_view.call(null,["http://localhost:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(client.v3d.PORT)].join(''));

client.v3d.repeater.call(null,client.v3d.receive_vehicle,(4000));

return client.v3d.show_controls.call(null);
});
client.v3d.run_repl = (function client$v3d$run_repl(){
var result = (function client$v3d$run_repl_$_result(res){
cljs.core.println.call(null,res);

return cljs.core._vreset_BANG_.call(null,client.v3d.CLI_REPL,cljs.core.assoc.call(null,cljs.core._deref.call(null,client.v3d.CLI_REPL),new cljs.core.Keyword(null,"value","value",305978217),res.call(null,new cljs.core.Keyword(null,"value","value",305978217))));
});
var evaluate = (function client$v3d$run_repl_$_evaluate(source){
return cljs.js.eval_str.call(null,cljs.core.deref.call(null,client.v3d.CLI_REPL).call(null,new cljs.core.Keyword(null,"state","state",-1988618099)),source,null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null),result);
});
var hand = (function client$v3d$run_repl_$_hand(response){
var temp__5804__auto__ = cljs.core.first.call(null,client.v3d.read_transit.call(null,response));
if(cljs.core.truth_(temp__5804__auto__)){
var req = temp__5804__auto__;
cljs.core.println.call(null,req);

var temp__5802__auto__ = new cljs.core.Keyword(null,"sexp","sexp",-1528364050).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5802__auto__)){
var sexp = temp__5802__auto__;
return evaluate.call(null,sexp);
} else {
return null;
}
} else {
return null;
}
});
ajax.core.GET.call(null,"/cli-repl",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transit","transit",359458387),(function (){try{return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),cljs.core.deref.call(null,client.v3d.CLI_REPL).call(null,new cljs.core.Keyword(null,"value","value",305978217)));
}catch (e2652){if((e2652 instanceof Error)){
var e = e2652;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e2652;

}
}})()], null),new cljs.core.Keyword(null,"handler","handler",-195596612),hand,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),client.v3d.error_handler], null));

return setTimeout(client.v3d.run_repl,(1000));
});
client.v3d.tst = (function client$v3d$tst(){
(client.cesium.VIEWER.scene.globe.depthTestAgainstTerrain = true);

cljs.core.println.call(null,new cljs.core.Keyword(null,"D","D",-8015893),client.cesium.VIEWER.scene.globe.depthTestAgainstTerrain);

var ppc = (new Cesium.PointPrimitiveCollection(({"heightReference": Cesium.HeightReference.CLAMP_TO_GROUND})));
var lla = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.6,7.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.61,7.51], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.6,7.52], null)], null);
var clr = Cesium.Color.YELLOW;
var size = (10);
var prims = client.cesium.VIEWER.scene.primitives.add(ppc);
return fillPointPrimColl(prims,cljs.core.clj__GT_js.call(null,lla),clr,size);
});
cljs.core.enable_console_print_BANG_.call(null);
(window.onload = client.v3d.on_load.call(null));

//# sourceMappingURL=v3d.js.map
