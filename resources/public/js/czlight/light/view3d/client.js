// Compiled by ClojureScript 1.10.439 {}
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
var map__17366 = response;
var map__17366__$1 = (((((!((map__17366 == null))))?(((((map__17366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17366):map__17366);
var status = cljs.core.get.call(null,map__17366__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__17366__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
light.view3d.client.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
light.view3d.client.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
light.view3d.client.PORT = (8448);
light.view3d.client.ZOOM_STEP = (100);
light.view3d.client.format = (function light$view3d$client$format(var_args){
var args__4647__auto__ = [];
var len__4641__auto___17370 = arguments.length;
var i__4642__auto___17371 = (0);
while(true){
if((i__4642__auto___17371 < len__4641__auto___17370)){
args__4647__auto__.push((arguments[i__4642__auto___17371]));

var G__17372 = (i__4642__auto___17371 + (1));
i__4642__auto___17371 = G__17372;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return light.view3d.client.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

light.view3d.client.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

light.view3d.client.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
light.view3d.client.format.cljs$lang$applyTo = (function (seq17368){
var G__17369 = cljs.core.first.call(null,seq17368);
var seq17368__$1 = cljs.core.next.call(null,seq17368);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17369,seq17368__$1);
});

light.view3d.client.repeater = (function light$view3d$client$repeater(var_args){
var G__17374 = arguments.length;
switch (G__17374) {
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

light.view3d.client.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__17236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17236__auto__){
return (function (){
var f__17237__auto__ = (function (){var switch__17213__auto__ = ((function (c__17236__auto__){
return (function (state_17388){
var state_val_17389 = (state_17388[(1)]);
if((state_val_17389 === (1))){
var state_17388__$1 = state_17388;
var statearr_17390_17430 = state_17388__$1;
(statearr_17390_17430[(2)] = null);

(statearr_17390_17430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17389 === (2))){
var state_17388__$1 = state_17388;
var statearr_17391_17431 = state_17388__$1;
(statearr_17391_17431[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17389 === (3))){
var inst_17386 = (state_17388[(2)]);
var state_17388__$1 = state_17388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17388__$1,inst_17386);
} else {
if((state_val_17389 === (4))){
var inst_17377 = func.call(null);
var inst_17378 = cljs.core.async.timeout.call(null,time_out);
var state_17388__$1 = (function (){var statearr_17393 = state_17388;
(statearr_17393[(7)] = inst_17377);

return statearr_17393;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17388__$1,(7),inst_17378);
} else {
if((state_val_17389 === (5))){
var state_17388__$1 = state_17388;
var statearr_17394_17432 = state_17388__$1;
(statearr_17394_17432[(2)] = null);

(statearr_17394_17432[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17389 === (6))){
var inst_17384 = (state_17388[(2)]);
var state_17388__$1 = state_17388;
var statearr_17395_17433 = state_17388__$1;
(statearr_17395_17433[(2)] = inst_17384);

(statearr_17395_17433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17389 === (7))){
var inst_17380 = (state_17388[(2)]);
var state_17388__$1 = (function (){var statearr_17396 = state_17388;
(statearr_17396[(8)] = inst_17380);

return statearr_17396;
})();
var statearr_17397_17434 = state_17388__$1;
(statearr_17397_17434[(2)] = null);

(statearr_17397_17434[(1)] = (2));


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
});})(c__17236__auto__))
;
return ((function (switch__17213__auto__,c__17236__auto__){
return (function() {
var light$view3d$client$state_machine__17214__auto__ = null;
var light$view3d$client$state_machine__17214__auto____0 = (function (){
var statearr_17398 = [null,null,null,null,null,null,null,null,null];
(statearr_17398[(0)] = light$view3d$client$state_machine__17214__auto__);

(statearr_17398[(1)] = (1));

return statearr_17398;
});
var light$view3d$client$state_machine__17214__auto____1 = (function (state_17388){
while(true){
var ret_value__17215__auto__ = (function (){try{while(true){
var result__17216__auto__ = switch__17213__auto__.call(null,state_17388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17216__auto__;
}
break;
}
}catch (e17399){if((e17399 instanceof Object)){
var ex__17217__auto__ = e17399;
var statearr_17400_17435 = state_17388;
(statearr_17400_17435[(5)] = ex__17217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17436 = state_17388;
state_17388 = G__17436;
continue;
} else {
return ret_value__17215__auto__;
}
break;
}
});
light$view3d$client$state_machine__17214__auto__ = function(state_17388){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__17214__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__17214__auto____1.call(this,state_17388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__17214__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__17214__auto____0;
light$view3d$client$state_machine__17214__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__17214__auto____1;
return light$view3d$client$state_machine__17214__auto__;
})()
;})(switch__17213__auto__,c__17236__auto__))
})();
var state__17238__auto__ = (function (){var statearr_17401 = f__17237__auto__.call(null);
(statearr_17401[(6)] = c__17236__auto__);

return statearr_17401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17238__auto__);
});})(c__17236__auto__))
);

return c__17236__auto__;
});

light.view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__17236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17236__auto__){
return (function (){
var f__17237__auto__ = (function (){var switch__17213__auto__ = ((function (c__17236__auto__){
return (function (state_17415){
var state_val_17416 = (state_17415[(1)]);
if((state_val_17416 === (1))){
var state_17415__$1 = state_17415;
var statearr_17417_17437 = state_17415__$1;
(statearr_17417_17437[(2)] = null);

(statearr_17417_17437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17416 === (2))){
var state_17415__$1 = state_17415;
var statearr_17418_17438 = state_17415__$1;
(statearr_17418_17438[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17416 === (3))){
var inst_17413 = (state_17415[(2)]);
var state_17415__$1 = state_17415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17415__$1,inst_17413);
} else {
if((state_val_17416 === (4))){
var inst_17404 = func.call(null,param);
var inst_17405 = cljs.core.async.timeout.call(null,time_out);
var state_17415__$1 = (function (){var statearr_17420 = state_17415;
(statearr_17420[(7)] = inst_17404);

return statearr_17420;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17415__$1,(7),inst_17405);
} else {
if((state_val_17416 === (5))){
var state_17415__$1 = state_17415;
var statearr_17421_17439 = state_17415__$1;
(statearr_17421_17439[(2)] = null);

(statearr_17421_17439[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17416 === (6))){
var inst_17411 = (state_17415[(2)]);
var state_17415__$1 = state_17415;
var statearr_17422_17440 = state_17415__$1;
(statearr_17422_17440[(2)] = inst_17411);

(statearr_17422_17440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17416 === (7))){
var inst_17407 = (state_17415[(2)]);
var state_17415__$1 = (function (){var statearr_17423 = state_17415;
(statearr_17423[(8)] = inst_17407);

return statearr_17423;
})();
var statearr_17424_17441 = state_17415__$1;
(statearr_17424_17441[(2)] = null);

(statearr_17424_17441[(1)] = (2));


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
});})(c__17236__auto__))
;
return ((function (switch__17213__auto__,c__17236__auto__){
return (function() {
var light$view3d$client$state_machine__17214__auto__ = null;
var light$view3d$client$state_machine__17214__auto____0 = (function (){
var statearr_17425 = [null,null,null,null,null,null,null,null,null];
(statearr_17425[(0)] = light$view3d$client$state_machine__17214__auto__);

(statearr_17425[(1)] = (1));

return statearr_17425;
});
var light$view3d$client$state_machine__17214__auto____1 = (function (state_17415){
while(true){
var ret_value__17215__auto__ = (function (){try{while(true){
var result__17216__auto__ = switch__17213__auto__.call(null,state_17415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17216__auto__;
}
break;
}
}catch (e17426){if((e17426 instanceof Object)){
var ex__17217__auto__ = e17426;
var statearr_17427_17442 = state_17415;
(statearr_17427_17442[(5)] = ex__17217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17443 = state_17415;
state_17415 = G__17443;
continue;
} else {
return ret_value__17215__auto__;
}
break;
}
});
light$view3d$client$state_machine__17214__auto__ = function(state_17415){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__17214__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__17214__auto____1.call(this,state_17415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__17214__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__17214__auto____0;
light$view3d$client$state_machine__17214__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__17214__auto____1;
return light$view3d$client$state_machine__17214__auto__;
})()
;})(switch__17213__auto__,c__17236__auto__))
})();
var state__17238__auto__ = (function (){var statearr_17428 = f__17237__auto__.call(null);
(statearr_17428[(6)] = c__17236__auto__);

return statearr_17428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17238__auto__);
});})(c__17236__auto__))
);

return c__17236__auto__;
});

light.view3d.client.repeater.cljs$lang$maxFixedArity = 3;

light.view3d.client.repeater_BANG_ = (function light$view3d$client$repeater_BANG_(var_args){
var G__17445 = arguments.length;
switch (G__17445) {
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

light.view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__17236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17236__auto__){
return (function (){
var f__17237__auto__ = (function (){var switch__17213__auto__ = ((function (c__17236__auto__){
return (function (state_17460){
var state_val_17461 = (state_17460[(1)]);
if((state_val_17461 === (1))){
var state_17460__$1 = state_17460;
var statearr_17462_17503 = state_17460__$1;
(statearr_17462_17503[(2)] = null);

(statearr_17462_17503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17461 === (2))){
var state_17460__$1 = state_17460;
var statearr_17463_17504 = state_17460__$1;
(statearr_17463_17504[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17461 === (3))){
var inst_17458 = (state_17460[(2)]);
var state_17460__$1 = state_17460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17460__$1,inst_17458);
} else {
if((state_val_17461 === (4))){
var inst_17448 = func.call(null);
var inst_17449 = cljs.core.deref.call(null,time_out);
var inst_17450 = cljs.core.async.timeout.call(null,inst_17449);
var state_17460__$1 = (function (){var statearr_17465 = state_17460;
(statearr_17465[(7)] = inst_17448);

return statearr_17465;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17460__$1,(7),inst_17450);
} else {
if((state_val_17461 === (5))){
var state_17460__$1 = state_17460;
var statearr_17466_17505 = state_17460__$1;
(statearr_17466_17505[(2)] = null);

(statearr_17466_17505[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17461 === (6))){
var inst_17456 = (state_17460[(2)]);
var state_17460__$1 = state_17460;
var statearr_17467_17506 = state_17460__$1;
(statearr_17467_17506[(2)] = inst_17456);

(statearr_17467_17506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17461 === (7))){
var inst_17452 = (state_17460[(2)]);
var state_17460__$1 = (function (){var statearr_17468 = state_17460;
(statearr_17468[(8)] = inst_17452);

return statearr_17468;
})();
var statearr_17469_17507 = state_17460__$1;
(statearr_17469_17507[(2)] = null);

(statearr_17469_17507[(1)] = (2));


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
});})(c__17236__auto__))
;
return ((function (switch__17213__auto__,c__17236__auto__){
return (function() {
var light$view3d$client$state_machine__17214__auto__ = null;
var light$view3d$client$state_machine__17214__auto____0 = (function (){
var statearr_17470 = [null,null,null,null,null,null,null,null,null];
(statearr_17470[(0)] = light$view3d$client$state_machine__17214__auto__);

(statearr_17470[(1)] = (1));

return statearr_17470;
});
var light$view3d$client$state_machine__17214__auto____1 = (function (state_17460){
while(true){
var ret_value__17215__auto__ = (function (){try{while(true){
var result__17216__auto__ = switch__17213__auto__.call(null,state_17460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17216__auto__;
}
break;
}
}catch (e17471){if((e17471 instanceof Object)){
var ex__17217__auto__ = e17471;
var statearr_17472_17508 = state_17460;
(statearr_17472_17508[(5)] = ex__17217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17509 = state_17460;
state_17460 = G__17509;
continue;
} else {
return ret_value__17215__auto__;
}
break;
}
});
light$view3d$client$state_machine__17214__auto__ = function(state_17460){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__17214__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__17214__auto____1.call(this,state_17460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__17214__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__17214__auto____0;
light$view3d$client$state_machine__17214__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__17214__auto____1;
return light$view3d$client$state_machine__17214__auto__;
})()
;})(switch__17213__auto__,c__17236__auto__))
})();
var state__17238__auto__ = (function (){var statearr_17473 = f__17237__auto__.call(null);
(statearr_17473[(6)] = c__17236__auto__);

return statearr_17473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17238__auto__);
});})(c__17236__auto__))
);

return c__17236__auto__;
});

light.view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__17236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17236__auto__){
return (function (){
var f__17237__auto__ = (function (){var switch__17213__auto__ = ((function (c__17236__auto__){
return (function (state_17488){
var state_val_17489 = (state_17488[(1)]);
if((state_val_17489 === (1))){
var state_17488__$1 = state_17488;
var statearr_17490_17510 = state_17488__$1;
(statearr_17490_17510[(2)] = null);

(statearr_17490_17510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17489 === (2))){
var state_17488__$1 = state_17488;
var statearr_17491_17511 = state_17488__$1;
(statearr_17491_17511[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17489 === (3))){
var inst_17486 = (state_17488[(2)]);
var state_17488__$1 = state_17488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17488__$1,inst_17486);
} else {
if((state_val_17489 === (4))){
var inst_17476 = func.call(null,param);
var inst_17477 = cljs.core.deref.call(null,time_out);
var inst_17478 = cljs.core.async.timeout.call(null,inst_17477);
var state_17488__$1 = (function (){var statearr_17493 = state_17488;
(statearr_17493[(7)] = inst_17476);

return statearr_17493;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17488__$1,(7),inst_17478);
} else {
if((state_val_17489 === (5))){
var state_17488__$1 = state_17488;
var statearr_17494_17512 = state_17488__$1;
(statearr_17494_17512[(2)] = null);

(statearr_17494_17512[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17489 === (6))){
var inst_17484 = (state_17488[(2)]);
var state_17488__$1 = state_17488;
var statearr_17495_17513 = state_17488__$1;
(statearr_17495_17513[(2)] = inst_17484);

(statearr_17495_17513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17489 === (7))){
var inst_17480 = (state_17488[(2)]);
var state_17488__$1 = (function (){var statearr_17496 = state_17488;
(statearr_17496[(8)] = inst_17480);

return statearr_17496;
})();
var statearr_17497_17514 = state_17488__$1;
(statearr_17497_17514[(2)] = null);

(statearr_17497_17514[(1)] = (2));


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
});})(c__17236__auto__))
;
return ((function (switch__17213__auto__,c__17236__auto__){
return (function() {
var light$view3d$client$state_machine__17214__auto__ = null;
var light$view3d$client$state_machine__17214__auto____0 = (function (){
var statearr_17498 = [null,null,null,null,null,null,null,null,null];
(statearr_17498[(0)] = light$view3d$client$state_machine__17214__auto__);

(statearr_17498[(1)] = (1));

return statearr_17498;
});
var light$view3d$client$state_machine__17214__auto____1 = (function (state_17488){
while(true){
var ret_value__17215__auto__ = (function (){try{while(true){
var result__17216__auto__ = switch__17213__auto__.call(null,state_17488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17216__auto__;
}
break;
}
}catch (e17499){if((e17499 instanceof Object)){
var ex__17217__auto__ = e17499;
var statearr_17500_17515 = state_17488;
(statearr_17500_17515[(5)] = ex__17217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17516 = state_17488;
state_17488 = G__17516;
continue;
} else {
return ret_value__17215__auto__;
}
break;
}
});
light$view3d$client$state_machine__17214__auto__ = function(state_17488){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__17214__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__17214__auto____1.call(this,state_17488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__17214__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__17214__auto____0;
light$view3d$client$state_machine__17214__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__17214__auto____1;
return light$view3d$client$state_machine__17214__auto__;
})()
;})(switch__17213__auto__,c__17236__auto__))
})();
var state__17238__auto__ = (function (){var statearr_17501 = f__17237__auto__.call(null);
(statearr_17501[(6)] = c__17236__auto__);

return statearr_17501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17238__auto__);
});})(c__17236__auto__))
);

return c__17236__auto__;
});

light.view3d.client.repeater_BANG_.cljs$lang$maxFixedArity = 3;

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
return document.getElementById(id).innerHTML = msg;
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

return light.view3d.client.by_id.call(null,"view-vals").value = deg__$1;
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

return light.view3d.client.by_id.call(null,"view-vals").value = deg__$1;
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

return light.view3d.client.by_id.call(null,"zoom-slv").value = v__$1;
});
light.view3d.client.zoomM = (function light$view3d$client$zoomM(){
var v = light.view3d.client.num_val.call(null,light.czm.core.get_zoom.call(null));
var v__$1 = (v - light.view3d.client.ZOOM_STEP);
var v__$2 = (((v__$1 < (0)))?(0):v__$1);
light.czm.core.set_zoom.call(null,v__$2);

light.view3d.client.set_html_BANG_.call(null,"zoom-val",light.view3d.client.zoom_format.call(null,v__$2));

return light.view3d.client.by_id.call(null,"zoom-slv").value = v__$2;
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
}catch (e17517){if((e17517 instanceof Error)){
var e = e17517;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e17517;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),light.view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
light.view3d.client.handle_request = (function light$view3d$client$handle_request(request){
var temp__5733__auto___17524 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___17524)){
var vie_17525 = temp__5733__auto___17524;
light.view3d.client.view.call(null,vie_17525);
} else {
}

var temp__5733__auto___17526 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___17526)){
var pit_17527 = temp__5733__auto___17526;
light.view3d.client.pitch.call(null,pit_17527);
} else {
}

var temp__5733__auto___17528 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___17528)){
var rol_17529 = temp__5733__auto___17528;
light.view3d.client.roll.call(null,rol_17529);
} else {
}

var temp__5733__auto___17530 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___17530)){
var vec__17518_17531 = temp__5733__auto___17530;
var lat_17532 = cljs.core.nth.call(null,vec__17518_17531,(0),null);
var lon_17533 = cljs.core.nth.call(null,vec__17518_17531,(1),null);
var vec__17521_17534 = light.czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [light.geo.calc.radians.call(null,lat_17532),light.geo.calc.radians.call(null,lon_17533)], null),(0));
var __17535 = cljs.core.nth.call(null,vec__17521_17534,(0),null);
var __17536__$1 = cljs.core.nth.call(null,vec__17521_17534,(1),null);
var sh_17537 = cljs.core.nth.call(null,vec__17521_17534,(2),null);
cljs.core._vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_17537 | (0))));
} else {
}

return light.view3d.client.response_request.call(null);
});
light.view3d.client.handle_vehicle = (function light$view3d$client$handle_vehicle(vehicle){
var vec__17538 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__17538,(0),null);
var lon = cljs.core.nth.call(null,vec__17538,(1),null);
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
var temp__5733__auto___17541 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5733__auto___17541)){
var vehicle_17542 = temp__5733__auto___17541;
light.view3d.client.handle_vehicle.call(null,vehicle_17542);
} else {
}

var temp__5733__auto__ = new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5733__auto__)){
var request = temp__5733__auto__;
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
var temp__5735__auto__ = cljs.core.first.call(null,light.view3d.client.read_transit.call(null,response));
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.println.call(null,req);

var temp__5733__auto__ = new cljs.core.Keyword(null,"sexp","sexp",-1528364050).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5733__auto__)){
var sexp = temp__5733__auto__;
return evaluate.call(null,sexp);
} else {
return null;
}
} else {
return null;
}
});
ajax.core.GET.call(null,"/cli-repl",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transit","transit",359458387),(function (){try{return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),cljs.core.deref.call(null,light.view3d.client.CLI_REPL).call(null,new cljs.core.Keyword(null,"value","value",305978217)));
}catch (e17543){if((e17543 instanceof Error)){
var e = e17543;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e17543;

}
}})()], null),new cljs.core.Keyword(null,"handler","handler",-195596612),hand,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),light.view3d.client.error_handler], null));

return setTimeout(light.view3d.client.run_repl,(1000));
});
light.view3d.client.tst = (function light$view3d$client$tst(){
light.czm.core.VIEWER.scene.globe.depthTestAgainstTerrain = true;

cljs.core.println.call(null,new cljs.core.Keyword(null,"D","D",-8015893),light.czm.core.VIEWER.scene.globe.depthTestAgainstTerrain);

var ppc = (new Cesium.PointPrimitiveCollection(({"heightReference": Cesium.HeightReference.CLAMP_TO_GROUND})));
var lla = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.6,7.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.61,7.51], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.6,7.52], null)], null);
var clr = Cesium.Color.YELLOW;
var size = (10);
var prims = light.czm.core.VIEWER.scene.primitives.add(ppc);
return fillPointPrimColl(prims,cljs.core.clj__GT_js.call(null,lla),clr,size);
});
cljs.core.enable_console_print_BANG_.call(null);
window.onload = light.view3d.client.on_load.call(null);

//# sourceMappingURL=client.js.map
