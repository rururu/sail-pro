// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('light.view3d.client');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('cljs.reader');
goog.require('light.geo.calc');
goog.require('light.czm.core');
light.view3d.client.VEHICLE = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"\u0410\u0432\u0440\u043E\u0440\u0430",new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),(30)], null),new cljs.core.Keyword(null,"altitude","altitude",463588637),(4000),new cljs.core.Keyword(null,"speed","speed",1257663751),(160),new cljs.core.Keyword(null,"course","course",1455432948),(270)], null));
light.view3d.client.error_handler = (function light$view3d$client$error_handler(response){
var map__22422 = response;
var map__22422__$1 = cljs.core.__destructure_map.call(null,map__22422);
var status = cljs.core.get.call(null,map__22422__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__22422__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
light.view3d.client.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
light.view3d.client.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
light.view3d.client.PORT = (8448);
light.view3d.client.ZOOM_STEP = (100);
light.view3d.client.format = (function light$view3d$client$format(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22425 = arguments.length;
var i__5727__auto___22426 = (0);
while(true){
if((i__5727__auto___22426 < len__5726__auto___22425)){
args__5732__auto__.push((arguments[i__5727__auto___22426]));

var G__22427 = (i__5727__auto___22426 + (1));
i__5727__auto___22426 = G__22427;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return light.view3d.client.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(light.view3d.client.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
}));

(light.view3d.client.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(light.view3d.client.format.cljs$lang$applyTo = (function (seq22423){
var G__22424 = cljs.core.first.call(null,seq22423);
var seq22423__$1 = cljs.core.next.call(null,seq22423);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22424,seq22423__$1);
}));

light.view3d.client.repeater = (function light$view3d$client$repeater(var_args){
var G__22429 = arguments.length;
switch (G__22429) {
case 2:
return light.view3d.client.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return light.view3d.client.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(light.view3d.client.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__16539__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16540__auto__ = (function (){var switch__2331__auto__ = (function (state_22443){
var state_val_22444 = (state_22443[(1)]);
if((state_val_22444 === (1))){
var state_22443__$1 = state_22443;
var statearr_22445_22487 = state_22443__$1;
(statearr_22445_22487[(2)] = null);

(statearr_22445_22487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22444 === (2))){
var state_22443__$1 = state_22443;
var statearr_22446_22488 = state_22443__$1;
(statearr_22446_22488[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22444 === (3))){
var inst_22441 = (state_22443[(2)]);
var state_22443__$1 = state_22443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22443__$1,inst_22441);
} else {
if((state_val_22444 === (4))){
var inst_22432 = func.call(null);
var inst_22433 = cljs.core.async.timeout.call(null,time_out);
var state_22443__$1 = (function (){var statearr_22448 = state_22443;
(statearr_22448[(7)] = inst_22432);

return statearr_22448;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22443__$1,(7),inst_22433);
} else {
if((state_val_22444 === (5))){
var state_22443__$1 = state_22443;
var statearr_22449_22489 = state_22443__$1;
(statearr_22449_22489[(2)] = null);

(statearr_22449_22489[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22444 === (6))){
var inst_22439 = (state_22443[(2)]);
var state_22443__$1 = state_22443;
var statearr_22450_22490 = state_22443__$1;
(statearr_22450_22490[(2)] = inst_22439);

(statearr_22450_22490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22444 === (7))){
var inst_22435 = (state_22443[(2)]);
var state_22443__$1 = (function (){var statearr_22451 = state_22443;
(statearr_22451[(8)] = inst_22435);

return statearr_22451;
})();
var statearr_22452_22491 = state_22443__$1;
(statearr_22452_22491[(2)] = null);

(statearr_22452_22491[(1)] = (2));


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
var light$view3d$client$state_machine__2332__auto__ = null;
var light$view3d$client$state_machine__2332__auto____0 = (function (){
var statearr_22453 = [null,null,null,null,null,null,null,null,null];
(statearr_22453[(0)] = light$view3d$client$state_machine__2332__auto__);

(statearr_22453[(1)] = (1));

return statearr_22453;
});
var light$view3d$client$state_machine__2332__auto____1 = (function (state_22443){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_22443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e22454){var ex__2335__auto__ = e22454;
var statearr_22455_22492 = state_22443;
(statearr_22455_22492[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_22443[(4)]))){
var statearr_22456_22493 = state_22443;
(statearr_22456_22493[(1)] = cljs.core.first.call(null,(state_22443[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22494 = state_22443;
state_22443 = G__22494;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
light$view3d$client$state_machine__2332__auto__ = function(state_22443){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2332__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2332__auto____1.call(this,state_22443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2332__auto____0;
light$view3d$client$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2332__auto____1;
return light$view3d$client$state_machine__2332__auto__;
})()
})();
var state__16541__auto__ = (function (){var statearr_22457 = f__16540__auto__.call(null);
(statearr_22457[(6)] = c__16539__auto__);

return statearr_22457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16541__auto__);
}));

return c__16539__auto__;
}));

(light.view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__16539__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16540__auto__ = (function (){var switch__2331__auto__ = (function (state_22471){
var state_val_22472 = (state_22471[(1)]);
if((state_val_22472 === (1))){
var state_22471__$1 = state_22471;
var statearr_22473_22495 = state_22471__$1;
(statearr_22473_22495[(2)] = null);

(statearr_22473_22495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (2))){
var state_22471__$1 = state_22471;
var statearr_22474_22496 = state_22471__$1;
(statearr_22474_22496[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (3))){
var inst_22469 = (state_22471[(2)]);
var state_22471__$1 = state_22471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22471__$1,inst_22469);
} else {
if((state_val_22472 === (4))){
var inst_22460 = func.call(null,param);
var inst_22461 = cljs.core.async.timeout.call(null,time_out);
var state_22471__$1 = (function (){var statearr_22476 = state_22471;
(statearr_22476[(7)] = inst_22460);

return statearr_22476;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22471__$1,(7),inst_22461);
} else {
if((state_val_22472 === (5))){
var state_22471__$1 = state_22471;
var statearr_22477_22497 = state_22471__$1;
(statearr_22477_22497[(2)] = null);

(statearr_22477_22497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (6))){
var inst_22467 = (state_22471[(2)]);
var state_22471__$1 = state_22471;
var statearr_22478_22498 = state_22471__$1;
(statearr_22478_22498[(2)] = inst_22467);

(statearr_22478_22498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (7))){
var inst_22463 = (state_22471[(2)]);
var state_22471__$1 = (function (){var statearr_22479 = state_22471;
(statearr_22479[(8)] = inst_22463);

return statearr_22479;
})();
var statearr_22480_22499 = state_22471__$1;
(statearr_22480_22499[(2)] = null);

(statearr_22480_22499[(1)] = (2));


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
var light$view3d$client$state_machine__2332__auto__ = null;
var light$view3d$client$state_machine__2332__auto____0 = (function (){
var statearr_22481 = [null,null,null,null,null,null,null,null,null];
(statearr_22481[(0)] = light$view3d$client$state_machine__2332__auto__);

(statearr_22481[(1)] = (1));

return statearr_22481;
});
var light$view3d$client$state_machine__2332__auto____1 = (function (state_22471){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_22471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e22482){var ex__2335__auto__ = e22482;
var statearr_22483_22500 = state_22471;
(statearr_22483_22500[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_22471[(4)]))){
var statearr_22484_22501 = state_22471;
(statearr_22484_22501[(1)] = cljs.core.first.call(null,(state_22471[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22502 = state_22471;
state_22471 = G__22502;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
light$view3d$client$state_machine__2332__auto__ = function(state_22471){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2332__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2332__auto____1.call(this,state_22471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2332__auto____0;
light$view3d$client$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2332__auto____1;
return light$view3d$client$state_machine__2332__auto__;
})()
})();
var state__16541__auto__ = (function (){var statearr_22485 = f__16540__auto__.call(null);
(statearr_22485[(6)] = c__16539__auto__);

return statearr_22485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16541__auto__);
}));

return c__16539__auto__;
}));

(light.view3d.client.repeater.cljs$lang$maxFixedArity = 3);

light.view3d.client.repeater_BANG_ = (function light$view3d$client$repeater_BANG_(var_args){
var G__22504 = arguments.length;
switch (G__22504) {
case 2:
return light.view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return light.view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(light.view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__16539__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16540__auto__ = (function (){var switch__2331__auto__ = (function (state_22519){
var state_val_22520 = (state_22519[(1)]);
if((state_val_22520 === (1))){
var state_22519__$1 = state_22519;
var statearr_22521_22564 = state_22519__$1;
(statearr_22521_22564[(2)] = null);

(statearr_22521_22564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22520 === (2))){
var state_22519__$1 = state_22519;
var statearr_22522_22565 = state_22519__$1;
(statearr_22522_22565[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22520 === (3))){
var inst_22517 = (state_22519[(2)]);
var state_22519__$1 = state_22519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22519__$1,inst_22517);
} else {
if((state_val_22520 === (4))){
var inst_22507 = func.call(null);
var inst_22508 = cljs.core.deref.call(null,time_out);
var inst_22509 = cljs.core.async.timeout.call(null,inst_22508);
var state_22519__$1 = (function (){var statearr_22524 = state_22519;
(statearr_22524[(7)] = inst_22507);

return statearr_22524;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22519__$1,(7),inst_22509);
} else {
if((state_val_22520 === (5))){
var state_22519__$1 = state_22519;
var statearr_22525_22566 = state_22519__$1;
(statearr_22525_22566[(2)] = null);

(statearr_22525_22566[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22520 === (6))){
var inst_22515 = (state_22519[(2)]);
var state_22519__$1 = state_22519;
var statearr_22526_22567 = state_22519__$1;
(statearr_22526_22567[(2)] = inst_22515);

(statearr_22526_22567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22520 === (7))){
var inst_22511 = (state_22519[(2)]);
var state_22519__$1 = (function (){var statearr_22527 = state_22519;
(statearr_22527[(8)] = inst_22511);

return statearr_22527;
})();
var statearr_22528_22568 = state_22519__$1;
(statearr_22528_22568[(2)] = null);

(statearr_22528_22568[(1)] = (2));


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
var light$view3d$client$state_machine__2332__auto__ = null;
var light$view3d$client$state_machine__2332__auto____0 = (function (){
var statearr_22529 = [null,null,null,null,null,null,null,null,null];
(statearr_22529[(0)] = light$view3d$client$state_machine__2332__auto__);

(statearr_22529[(1)] = (1));

return statearr_22529;
});
var light$view3d$client$state_machine__2332__auto____1 = (function (state_22519){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_22519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e22530){var ex__2335__auto__ = e22530;
var statearr_22531_22569 = state_22519;
(statearr_22531_22569[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_22519[(4)]))){
var statearr_22532_22570 = state_22519;
(statearr_22532_22570[(1)] = cljs.core.first.call(null,(state_22519[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22571 = state_22519;
state_22519 = G__22571;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
light$view3d$client$state_machine__2332__auto__ = function(state_22519){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2332__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2332__auto____1.call(this,state_22519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2332__auto____0;
light$view3d$client$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2332__auto____1;
return light$view3d$client$state_machine__2332__auto__;
})()
})();
var state__16541__auto__ = (function (){var statearr_22533 = f__16540__auto__.call(null);
(statearr_22533[(6)] = c__16539__auto__);

return statearr_22533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16541__auto__);
}));

return c__16539__auto__;
}));

(light.view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__16539__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16540__auto__ = (function (){var switch__2331__auto__ = (function (state_22548){
var state_val_22549 = (state_22548[(1)]);
if((state_val_22549 === (1))){
var state_22548__$1 = state_22548;
var statearr_22550_22572 = state_22548__$1;
(statearr_22550_22572[(2)] = null);

(statearr_22550_22572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22549 === (2))){
var state_22548__$1 = state_22548;
var statearr_22551_22573 = state_22548__$1;
(statearr_22551_22573[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22549 === (3))){
var inst_22546 = (state_22548[(2)]);
var state_22548__$1 = state_22548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22548__$1,inst_22546);
} else {
if((state_val_22549 === (4))){
var inst_22536 = func.call(null,param);
var inst_22537 = cljs.core.deref.call(null,time_out);
var inst_22538 = cljs.core.async.timeout.call(null,inst_22537);
var state_22548__$1 = (function (){var statearr_22553 = state_22548;
(statearr_22553[(7)] = inst_22536);

return statearr_22553;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22548__$1,(7),inst_22538);
} else {
if((state_val_22549 === (5))){
var state_22548__$1 = state_22548;
var statearr_22554_22574 = state_22548__$1;
(statearr_22554_22574[(2)] = null);

(statearr_22554_22574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22549 === (6))){
var inst_22544 = (state_22548[(2)]);
var state_22548__$1 = state_22548;
var statearr_22555_22575 = state_22548__$1;
(statearr_22555_22575[(2)] = inst_22544);

(statearr_22555_22575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22549 === (7))){
var inst_22540 = (state_22548[(2)]);
var state_22548__$1 = (function (){var statearr_22556 = state_22548;
(statearr_22556[(8)] = inst_22540);

return statearr_22556;
})();
var statearr_22557_22576 = state_22548__$1;
(statearr_22557_22576[(2)] = null);

(statearr_22557_22576[(1)] = (2));


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
var light$view3d$client$state_machine__2332__auto__ = null;
var light$view3d$client$state_machine__2332__auto____0 = (function (){
var statearr_22558 = [null,null,null,null,null,null,null,null,null];
(statearr_22558[(0)] = light$view3d$client$state_machine__2332__auto__);

(statearr_22558[(1)] = (1));

return statearr_22558;
});
var light$view3d$client$state_machine__2332__auto____1 = (function (state_22548){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_22548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e22559){var ex__2335__auto__ = e22559;
var statearr_22560_22577 = state_22548;
(statearr_22560_22577[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_22548[(4)]))){
var statearr_22561_22578 = state_22548;
(statearr_22561_22578[(1)] = cljs.core.first.call(null,(state_22548[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22579 = state_22548;
state_22548 = G__22579;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
light$view3d$client$state_machine__2332__auto__ = function(state_22548){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2332__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2332__auto____1.call(this,state_22548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2332__auto____0;
light$view3d$client$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2332__auto____1;
return light$view3d$client$state_machine__2332__auto__;
})()
})();
var state__16541__auto__ = (function (){var statearr_22562 = f__16540__auto__.call(null);
(statearr_22562[(6)] = c__16539__auto__);

return statearr_22562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16541__auto__);
}));

return c__16539__auto__;
}));

(light.view3d.client.repeater_BANG_.cljs$lang$maxFixedArity = 3);

light.view3d.client.read_transit = (function light$view3d$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
light.view3d.client.by_id = (function light$view3d$client$by_id(id){
return document.getElementById(id);
});
light.view3d.client.get_html_BANG_ = (function light$view3d$client$get_html_BANG_(id){
return document.getElementById(id).innerHTML;
});
light.view3d.client.set_html_BANG_ = (function light$view3d$client$set_html_BANG_(id,msg){
return (document.getElementById(id).innerHTML = msg);
});
light.view3d.client.num_val = (function light$view3d$client$num_val(x){
if(typeof x === 'number'){
return x;
} else {
return cljs.reader.read_string.call(null,x);
}
});
light.view3d.client.viewM = (function light$view3d$client$viewM(){
var deg = light.view3d.client.num_val.call(null,light.view3d.client.get_html_BANG_.call(null,"view-fld"));
var deg__$1 = ((cljs.core._EQ_.call(null,deg,(-180)))?(180):(deg - (1)));
cljs.core._vreset_BANG_.call(null,light.czm.core.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.czm.core.CAMERA),new cljs.core.Keyword(null,"view","view",1247994814),deg__$1));

light.view3d.client.set_html_BANG_.call(null,"view-fld",deg__$1);

return (light.view3d.client.by_id.call(null,"view-vals").value = deg__$1);
});
light.view3d.client.view = (function light$view3d$client$view(deg){
var deg__$1 = light.view3d.client.num_val.call(null,deg);
if(((((-180) <= deg__$1)) && ((deg__$1 <= (180))))){
cljs.core._vreset_BANG_.call(null,light.czm.core.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.czm.core.CAMERA),new cljs.core.Keyword(null,"view","view",1247994814),deg__$1));

return light.view3d.client.set_html_BANG_.call(null,"view-fld",deg__$1);
} else {
return null;
}
});
light.view3d.client.viewP = (function light$view3d$client$viewP(){
var deg = light.view3d.client.num_val.call(null,light.view3d.client.get_html_BANG_.call(null,"view-fld"));
var deg__$1 = ((cljs.core._EQ_.call(null,deg,(180)))?(-180):(deg + (1)));
cljs.core._vreset_BANG_.call(null,light.czm.core.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.czm.core.CAMERA),new cljs.core.Keyword(null,"view","view",1247994814),deg__$1));

light.view3d.client.set_html_BANG_.call(null,"view-fld",deg__$1);

return (light.view3d.client.by_id.call(null,"view-vals").value = deg__$1);
});
light.view3d.client.pitch = (function light$view3d$client$pitch(deg){
var deg__$1 = light.view3d.client.num_val.call(null,deg);
if(((((-90) <= deg__$1)) && ((deg__$1 <= (90))))){
cljs.core._vreset_BANG_.call(null,light.czm.core.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.czm.core.CAMERA),new cljs.core.Keyword(null,"pitch","pitch",1495126700),deg__$1));

return light.view3d.client.set_html_BANG_.call(null,"pitch-fld",deg__$1);
} else {
return null;
}
});
light.view3d.client.roll = (function light$view3d$client$roll(deg){
var deg__$1 = light.view3d.client.num_val.call(null,deg);
if(((((-180) <= deg__$1)) && ((deg__$1 <= (180))))){
cljs.core._vreset_BANG_.call(null,light.czm.core.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.czm.core.CAMERA),new cljs.core.Keyword(null,"roll","roll",11266999),deg__$1));

return light.view3d.client.set_html_BANG_.call(null,"roll-fld",deg__$1);
} else {
return null;
}
});
light.view3d.client.zoom_format = (function light$view3d$client$zoom_format(m){
return light.view3d.client.format.call(null,"%.1f km",(m / (1000)));
});
light.view3d.client.zoomP = (function light$view3d$client$zoomP(){
var v = light.view3d.client.num_val.call(null,light.czm.core.get_zoom.call(null));
var v__$1 = (v + light.view3d.client.ZOOM_STEP);
light.czm.core.set_zoom.call(null,v__$1);

light.view3d.client.set_html_BANG_.call(null,"zoom-val",light.view3d.client.zoom_format.call(null,v__$1));

return (light.view3d.client.by_id.call(null,"zoom-slv").value = v__$1);
});
light.view3d.client.zoomM = (function light$view3d$client$zoomM(){
var v = light.view3d.client.num_val.call(null,light.czm.core.get_zoom.call(null));
var v__$1 = (v - light.view3d.client.ZOOM_STEP);
var v__$2 = (((v__$1 < (0)))?(0):v__$1);
light.czm.core.set_zoom.call(null,v__$2);

light.view3d.client.set_html_BANG_.call(null,"zoom-val",light.view3d.client.zoom_format.call(null,v__$2));

return (light.view3d.client.by_id.call(null,"zoom-slv").value = v__$2);
});
light.view3d.client.zoom_amount = (function light$view3d$client$zoom_amount(amount){
var v = light.view3d.client.num_val.call(null,amount);
light.czm.core.set_zoom.call(null,v);

return light.view3d.client.set_html_BANG_.call(null,"zoom-val",light.view3d.client.zoom_format.call(null,v));
});
light.view3d.client.response_request = (function light$view3d$client$response_request(){
var resp = cljs.core.deref.call(null,light.view3d.client.RESPONSE);
if((!(cljs.core.empty_QMARK_.call(null,resp)))){
ajax.core.GET.call(null,"/response",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response","response",-1068424192),(function (){try{return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),resp);
}catch (e22580){if((e22580 instanceof Error)){
var e = e22580;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e22580;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),light.view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
light.view3d.client.handle_request = (function light$view3d$client$handle_request(request){
var temp__5802__auto___22587 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto___22587)){
var vie_22588 = temp__5802__auto___22587;
light.view3d.client.view.call(null,vie_22588);
} else {
}

var temp__5802__auto___22589 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto___22589)){
var pit_22590 = temp__5802__auto___22589;
light.view3d.client.pitch.call(null,pit_22590);
} else {
}

var temp__5802__auto___22591 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto___22591)){
var rol_22592 = temp__5802__auto___22591;
light.view3d.client.roll.call(null,rol_22592);
} else {
}

var temp__5802__auto___22593 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto___22593)){
var vec__22581_22594 = temp__5802__auto___22593;
var lat_22595 = cljs.core.nth.call(null,vec__22581_22594,(0),null);
var lon_22596 = cljs.core.nth.call(null,vec__22581_22594,(1),null);
var vec__22584_22597 = light.czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [light.geo.calc.radians.call(null,lat_22595),light.geo.calc.radians.call(null,lon_22596)], null),(0));
var __22598 = cljs.core.nth.call(null,vec__22584_22597,(0),null);
var __22599__$1 = cljs.core.nth.call(null,vec__22584_22597,(1),null);
var sh_22600 = cljs.core.nth.call(null,vec__22584_22597,(2),null);
cljs.core._vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_22600 | (0))));
} else {
}

return light.view3d.client.response_request.call(null);
});
light.view3d.client.handle_vehicle = (function light$view3d$client$handle_vehicle(vehicle){
var vec__22601 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__22601,(0),null);
var lon = cljs.core.nth.call(null,vec__22601,(1),null);
var alt = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle);
var vev = new cljs.core.Keyword(null,"view-elevation","view-elevation",-681076231).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,light.view3d.client.VEHICLE));
var crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle);
var head = light.czm.core.norm_crs.call(null,(crs + new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,light.czm.core.CAMERA))));
cljs.core._vreset_BANG_.call(null,light.view3d.client.VEHICLE,cljs.core.merge.call(null,cljs.core._deref.call(null,light.view3d.client.VEHICLE),vehicle));

light.view3d.client.set_html_BANG_.call(null,"onboard-fld",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(vehicle));

light.view3d.client.set_html_BANG_.call(null,"name-fld",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(vehicle));

light.view3d.client.set_html_BANG_.call(null,"latitude-fld",light.view3d.client.format.call(null,"%.3f",cljs.core.first.call(null,new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle))));

light.view3d.client.set_html_BANG_.call(null,"longitude-fld",light.view3d.client.format.call(null,"%.3f",cljs.core.second.call(null,new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle))));

light.view3d.client.set_html_BANG_.call(null,"course-fld",new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle));

light.view3d.client.set_html_BANG_.call(null,"speed-fld",new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(vehicle));

light.view3d.client.set_html_BANG_.call(null,"altitude-fld",light.czm.core.ALT);

light.view3d.client.set_html_BANG_.call(null,"view-dir",light.geo.calc.rumb.call(null,head));

if(cljs.core._EQ_.call(null,light.czm.core.ZOOM,(0))){
return light.czm.core.fly_to.call(null,lat,lon,(alt + vev),crs,(5));
} else {
return null;
}
});
light.view3d.client.vehicle_hr = (function light$view3d$client$vehicle_hr(response){
var resp = light.view3d.client.read_transit.call(null,response);
var temp__5802__auto___22604 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5802__auto___22604)){
var vehicle_22605 = temp__5802__auto___22604;
light.view3d.client.handle_vehicle.call(null,vehicle_22605);
} else {
}

var temp__5802__auto__ = new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5802__auto__)){
var request = temp__5802__auto__;
return light.view3d.client.handle_request.call(null,request);
} else {
return null;
}
});
light.view3d.client.receive_vehicle = (function light$view3d$client$receive_vehicle(){
return ajax.core.GET.call(null,"/vehicle",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.deref.call(null,light.czm.core.CAMERA),new cljs.core.Keyword(null,"handler","handler",-195596612),light.view3d.client.vehicle_hr,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),light.view3d.client.error_handler], null));
});
light.view3d.client.elev = (function light$view3d$client$elev(vev){
return cljs.core._vreset_BANG_.call(null,light.view3d.client.VEHICLE,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.view3d.client.VEHICLE),new cljs.core.Keyword(null,"view-elevation","view-elevation",-681076231),light.view3d.client.num_val.call(null,vev)));
});
light.view3d.client.left_controls = (function light$view3d$client$left_controls(){
light.view3d.client.set_html_BANG_.call(null,"camera","<h4>Camera</h4>");

light.view3d.client.set_html_BANG_.call(null,"onboard","Onboard:");

light.view3d.client.set_html_BANG_.call(null,"onboard-fld","");

light.view3d.client.set_html_BANG_.call(null,"elev","Elevation:");

light.view3d.client.set_html_BANG_.call(null,"elev-fld","<input value='4' style='width:100px' id='input-elev'\n                     onchange='javascript:light.view3d.client.elev(this.value)'>");

light.view3d.client.set_html_BANG_.call(null,"roll","Roll:");

light.view3d.client.set_html_BANG_.call(null,"roll-fld",(0));

light.view3d.client.set_html_BANG_.call(null,"roll-sld","<input type='range' style='width:200px' id='roll-vals'\n               min='-180' value='0' max='180'\n               oninput='javascript:light.view3d.client.roll(this.value)'>");

light.view3d.client.set_html_BANG_.call(null,"pitch","Pitch:");

light.view3d.client.set_html_BANG_.call(null,"pitch-fld",(0));

light.view3d.client.set_html_BANG_.call(null,"pitch-sld","<input type='range' style='width:200px' id='pitch-vals'\n               min='-90' value='0' max='90'\n               oninput='javascript:light.view3d.client.pitch(this.value)'>");

light.view3d.client.set_html_BANG_.call(null,"view","View:");

light.view3d.client.set_html_BANG_.call(null,"view-fld",(0));

light.view3d.client.set_html_BANG_.call(null,"view-sld","<input type='range' style='width:200px' id='view-vals'\n               min='-180' value='0' max='180'\n               oninput='javascript:light.view3d.client.view(this.value)'>");

light.view3d.client.set_html_BANG_.call(null,"viewM-btn","<button onclick='javascript:light.view3d.client.viewM()'>view-</button>");

return light.view3d.client.set_html_BANG_.call(null,"viewP-btn","<button onclick='javascript:light.view3d.client.viewP()'>view+</button>");
});
light.view3d.client.right_controls = (function light$view3d$client$right_controls(){
light.view3d.client.set_html_BANG_.call(null,"vehicle","<h4>Vehicle</h4>");

light.view3d.client.set_html_BANG_.call(null,"name","Name:");

light.view3d.client.set_html_BANG_.call(null,"name-fld","");

light.view3d.client.set_html_BANG_.call(null,"latitude","Latitude:");

light.view3d.client.set_html_BANG_.call(null,"latitude-fld","");

light.view3d.client.set_html_BANG_.call(null,"longitude","Longitude:");

light.view3d.client.set_html_BANG_.call(null,"longitude-fld","");

light.view3d.client.set_html_BANG_.call(null,"course","Course:");

light.view3d.client.set_html_BANG_.call(null,"course-fld","");

light.view3d.client.set_html_BANG_.call(null,"speed","Speed:");

light.view3d.client.set_html_BANG_.call(null,"speed-fld","");

light.view3d.client.set_html_BANG_.call(null,"altitude","Altitude:");

return light.view3d.client.set_html_BANG_.call(null,"altitude-fld","");
});
light.view3d.client.middle_controls = (function light$view3d$client$middle_controls(){
light.view3d.client.set_html_BANG_.call(null,"binocular","<h4>Binocular</h4>");

light.view3d.client.set_html_BANG_.call(null,"zoom-sld","<input type='range' style='width:200px' id='zoom-slv'\n               min='0' value='0' max='40000'\n               oninput='javascript:light.view3d.client.zoom_amount(this.value)'>");

light.view3d.client.set_html_BANG_.call(null,"zoom-val","0 m");

light.view3d.client.set_html_BANG_.call(null,"zoomM","<button onclick='javascript:light.view3d.client.zoomM()'>-</button>");

return light.view3d.client.set_html_BANG_.call(null,"zoomP","<button onclick='javascript:light.view3d.client.zoomP()'>+</button>");
});
light.view3d.client.show_controls = (function light$view3d$client$show_controls(){
light.view3d.client.right_controls.call(null);

light.view3d.client.left_controls.call(null);

return light.view3d.client.middle_controls.call(null);
});
light.view3d.client.on_load = (function light$view3d$client$on_load(){
light.czm.core.init_3D_view.call(null,["http://localhost:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(light.view3d.client.PORT)].join(''));

light.view3d.client.repeater.call(null,light.view3d.client.receive_vehicle,(4000));

return light.view3d.client.show_controls.call(null);
});
light.view3d.client.run_repl = (function light$view3d$client$run_repl(){
var result = (function light$view3d$client$run_repl_$_result(res){
cljs.core.println.call(null,res);

return cljs.core._vreset_BANG_.call(null,light.view3d.client.CLI_REPL,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.view3d.client.CLI_REPL),new cljs.core.Keyword(null,"value","value",305978217),res.call(null,new cljs.core.Keyword(null,"value","value",305978217))));
});
var evaluate = (function light$view3d$client$run_repl_$_evaluate(source){
return cljs.js.eval_str.call(null,cljs.core.deref.call(null,light.view3d.client.CLI_REPL).call(null,new cljs.core.Keyword(null,"state","state",-1988618099)),source,null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null),result);
});
var hand = (function light$view3d$client$run_repl_$_hand(response){
var temp__5804__auto__ = cljs.core.first.call(null,light.view3d.client.read_transit.call(null,response));
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
ajax.core.GET.call(null,"/cli-repl",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transit","transit",359458387),(function (){try{return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),cljs.core.deref.call(null,light.view3d.client.CLI_REPL).call(null,new cljs.core.Keyword(null,"value","value",305978217)));
}catch (e22606){if((e22606 instanceof Error)){
var e = e22606;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e22606;

}
}})()], null),new cljs.core.Keyword(null,"handler","handler",-195596612),hand,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),light.view3d.client.error_handler], null));

return setTimeout(light.view3d.client.run_repl,(1000));
});
light.view3d.client.tst = (function light$view3d$client$tst(){
(light.czm.core.VIEWER.scene.globe.depthTestAgainstTerrain = true);

cljs.core.println.call(null,new cljs.core.Keyword(null,"D","D",-8015893),light.czm.core.VIEWER.scene.globe.depthTestAgainstTerrain);

var ppc = (new Cesium.PointPrimitiveCollection(({"heightReference": Cesium.HeightReference.CLAMP_TO_GROUND})));
var lla = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.6,7.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.61,7.51], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.6,7.52], null)], null);
var clr = Cesium.Color.YELLOW;
var size = (10);
var prims = light.czm.core.VIEWER.scene.primitives.add(ppc);
return fillPointPrimColl(prims,cljs.core.clj__GT_js.call(null,lla),clr,size);
});
cljs.core.enable_console_print_BANG_.call(null);
(window.onload = light.view3d.client.on_load.call(null));

//# sourceMappingURL=client.js.map
