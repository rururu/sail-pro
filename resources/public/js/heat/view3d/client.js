// Compiled by ClojureScript 1.10.439 {}
goog.provide('view3d.client');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('cljs.reader');
goog.require('geo.calc');
goog.require('czm.core');
view3d.client.VEHICLE = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"\u0410\u0432\u0440\u043E\u0440\u0430",new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),(30)], null),new cljs.core.Keyword(null,"altitude","altitude",463588637),(4000),new cljs.core.Keyword(null,"speed","speed",1257663751),(160),new cljs.core.Keyword(null,"course","course",1455432948),(270)], null));
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__29331 = response;
var map__29331__$1 = (((((!((map__29331 == null))))?(((((map__29331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29331):map__29331);
var status = cljs.core.get.call(null,map__29331__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__29331__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
view3d.client.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
view3d.client.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
view3d.client.repeater = (function view3d$client$repeater(var_args){
var G__29334 = arguments.length;
switch (G__29334) {
case 2:
return view3d.client.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return view3d.client.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

view3d.client.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__27242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27242__auto__){
return (function (){
var f__27243__auto__ = (function (){var switch__27147__auto__ = ((function (c__27242__auto__){
return (function (state_29348){
var state_val_29349 = (state_29348[(1)]);
if((state_val_29349 === (1))){
var state_29348__$1 = state_29348;
var statearr_29350_29390 = state_29348__$1;
(statearr_29350_29390[(2)] = null);

(statearr_29350_29390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (2))){
var state_29348__$1 = state_29348;
var statearr_29351_29391 = state_29348__$1;
(statearr_29351_29391[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (3))){
var inst_29346 = (state_29348[(2)]);
var state_29348__$1 = state_29348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29348__$1,inst_29346);
} else {
if((state_val_29349 === (4))){
var inst_29337 = func.call(null);
var inst_29338 = cljs.core.async.timeout.call(null,time_out);
var state_29348__$1 = (function (){var statearr_29353 = state_29348;
(statearr_29353[(7)] = inst_29337);

return statearr_29353;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29348__$1,(7),inst_29338);
} else {
if((state_val_29349 === (5))){
var state_29348__$1 = state_29348;
var statearr_29354_29392 = state_29348__$1;
(statearr_29354_29392[(2)] = null);

(statearr_29354_29392[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (6))){
var inst_29344 = (state_29348[(2)]);
var state_29348__$1 = state_29348;
var statearr_29355_29393 = state_29348__$1;
(statearr_29355_29393[(2)] = inst_29344);

(statearr_29355_29393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (7))){
var inst_29340 = (state_29348[(2)]);
var state_29348__$1 = (function (){var statearr_29356 = state_29348;
(statearr_29356[(8)] = inst_29340);

return statearr_29356;
})();
var statearr_29357_29394 = state_29348__$1;
(statearr_29357_29394[(2)] = null);

(statearr_29357_29394[(1)] = (2));


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
});})(c__27242__auto__))
;
return ((function (switch__27147__auto__,c__27242__auto__){
return (function() {
var view3d$client$state_machine__27148__auto__ = null;
var view3d$client$state_machine__27148__auto____0 = (function (){
var statearr_29358 = [null,null,null,null,null,null,null,null,null];
(statearr_29358[(0)] = view3d$client$state_machine__27148__auto__);

(statearr_29358[(1)] = (1));

return statearr_29358;
});
var view3d$client$state_machine__27148__auto____1 = (function (state_29348){
while(true){
var ret_value__27149__auto__ = (function (){try{while(true){
var result__27150__auto__ = switch__27147__auto__.call(null,state_29348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27150__auto__;
}
break;
}
}catch (e29359){if((e29359 instanceof Object)){
var ex__27151__auto__ = e29359;
var statearr_29360_29395 = state_29348;
(statearr_29360_29395[(5)] = ex__27151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29396 = state_29348;
state_29348 = G__29396;
continue;
} else {
return ret_value__27149__auto__;
}
break;
}
});
view3d$client$state_machine__27148__auto__ = function(state_29348){
switch(arguments.length){
case 0:
return view3d$client$state_machine__27148__auto____0.call(this);
case 1:
return view3d$client$state_machine__27148__auto____1.call(this,state_29348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__27148__auto____0;
view3d$client$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__27148__auto____1;
return view3d$client$state_machine__27148__auto__;
})()
;})(switch__27147__auto__,c__27242__auto__))
})();
var state__27244__auto__ = (function (){var statearr_29361 = f__27243__auto__.call(null);
(statearr_29361[(6)] = c__27242__auto__);

return statearr_29361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27244__auto__);
});})(c__27242__auto__))
);

return c__27242__auto__;
});

view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__27242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27242__auto__){
return (function (){
var f__27243__auto__ = (function (){var switch__27147__auto__ = ((function (c__27242__auto__){
return (function (state_29375){
var state_val_29376 = (state_29375[(1)]);
if((state_val_29376 === (1))){
var state_29375__$1 = state_29375;
var statearr_29377_29397 = state_29375__$1;
(statearr_29377_29397[(2)] = null);

(statearr_29377_29397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (2))){
var state_29375__$1 = state_29375;
var statearr_29378_29398 = state_29375__$1;
(statearr_29378_29398[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (3))){
var inst_29373 = (state_29375[(2)]);
var state_29375__$1 = state_29375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29375__$1,inst_29373);
} else {
if((state_val_29376 === (4))){
var inst_29364 = func.call(null,param);
var inst_29365 = cljs.core.async.timeout.call(null,time_out);
var state_29375__$1 = (function (){var statearr_29380 = state_29375;
(statearr_29380[(7)] = inst_29364);

return statearr_29380;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29375__$1,(7),inst_29365);
} else {
if((state_val_29376 === (5))){
var state_29375__$1 = state_29375;
var statearr_29381_29399 = state_29375__$1;
(statearr_29381_29399[(2)] = null);

(statearr_29381_29399[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (6))){
var inst_29371 = (state_29375[(2)]);
var state_29375__$1 = state_29375;
var statearr_29382_29400 = state_29375__$1;
(statearr_29382_29400[(2)] = inst_29371);

(statearr_29382_29400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (7))){
var inst_29367 = (state_29375[(2)]);
var state_29375__$1 = (function (){var statearr_29383 = state_29375;
(statearr_29383[(8)] = inst_29367);

return statearr_29383;
})();
var statearr_29384_29401 = state_29375__$1;
(statearr_29384_29401[(2)] = null);

(statearr_29384_29401[(1)] = (2));


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
});})(c__27242__auto__))
;
return ((function (switch__27147__auto__,c__27242__auto__){
return (function() {
var view3d$client$state_machine__27148__auto__ = null;
var view3d$client$state_machine__27148__auto____0 = (function (){
var statearr_29385 = [null,null,null,null,null,null,null,null,null];
(statearr_29385[(0)] = view3d$client$state_machine__27148__auto__);

(statearr_29385[(1)] = (1));

return statearr_29385;
});
var view3d$client$state_machine__27148__auto____1 = (function (state_29375){
while(true){
var ret_value__27149__auto__ = (function (){try{while(true){
var result__27150__auto__ = switch__27147__auto__.call(null,state_29375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27150__auto__;
}
break;
}
}catch (e29386){if((e29386 instanceof Object)){
var ex__27151__auto__ = e29386;
var statearr_29387_29402 = state_29375;
(statearr_29387_29402[(5)] = ex__27151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29403 = state_29375;
state_29375 = G__29403;
continue;
} else {
return ret_value__27149__auto__;
}
break;
}
});
view3d$client$state_machine__27148__auto__ = function(state_29375){
switch(arguments.length){
case 0:
return view3d$client$state_machine__27148__auto____0.call(this);
case 1:
return view3d$client$state_machine__27148__auto____1.call(this,state_29375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__27148__auto____0;
view3d$client$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__27148__auto____1;
return view3d$client$state_machine__27148__auto__;
})()
;})(switch__27147__auto__,c__27242__auto__))
})();
var state__27244__auto__ = (function (){var statearr_29388 = f__27243__auto__.call(null);
(statearr_29388[(6)] = c__27242__auto__);

return statearr_29388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27244__auto__);
});})(c__27242__auto__))
);

return c__27242__auto__;
});

view3d.client.repeater.cljs$lang$maxFixedArity = 3;

view3d.client.repeater_BANG_ = (function view3d$client$repeater_BANG_(var_args){
var G__29405 = arguments.length;
switch (G__29405) {
case 2:
return view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__27242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27242__auto__){
return (function (){
var f__27243__auto__ = (function (){var switch__27147__auto__ = ((function (c__27242__auto__){
return (function (state_29420){
var state_val_29421 = (state_29420[(1)]);
if((state_val_29421 === (1))){
var state_29420__$1 = state_29420;
var statearr_29422_29463 = state_29420__$1;
(statearr_29422_29463[(2)] = null);

(statearr_29422_29463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (2))){
var state_29420__$1 = state_29420;
var statearr_29423_29464 = state_29420__$1;
(statearr_29423_29464[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (3))){
var inst_29418 = (state_29420[(2)]);
var state_29420__$1 = state_29420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29420__$1,inst_29418);
} else {
if((state_val_29421 === (4))){
var inst_29408 = func.call(null);
var inst_29409 = cljs.core.deref.call(null,time_out);
var inst_29410 = cljs.core.async.timeout.call(null,inst_29409);
var state_29420__$1 = (function (){var statearr_29425 = state_29420;
(statearr_29425[(7)] = inst_29408);

return statearr_29425;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29420__$1,(7),inst_29410);
} else {
if((state_val_29421 === (5))){
var state_29420__$1 = state_29420;
var statearr_29426_29465 = state_29420__$1;
(statearr_29426_29465[(2)] = null);

(statearr_29426_29465[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (6))){
var inst_29416 = (state_29420[(2)]);
var state_29420__$1 = state_29420;
var statearr_29427_29466 = state_29420__$1;
(statearr_29427_29466[(2)] = inst_29416);

(statearr_29427_29466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (7))){
var inst_29412 = (state_29420[(2)]);
var state_29420__$1 = (function (){var statearr_29428 = state_29420;
(statearr_29428[(8)] = inst_29412);

return statearr_29428;
})();
var statearr_29429_29467 = state_29420__$1;
(statearr_29429_29467[(2)] = null);

(statearr_29429_29467[(1)] = (2));


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
});})(c__27242__auto__))
;
return ((function (switch__27147__auto__,c__27242__auto__){
return (function() {
var view3d$client$state_machine__27148__auto__ = null;
var view3d$client$state_machine__27148__auto____0 = (function (){
var statearr_29430 = [null,null,null,null,null,null,null,null,null];
(statearr_29430[(0)] = view3d$client$state_machine__27148__auto__);

(statearr_29430[(1)] = (1));

return statearr_29430;
});
var view3d$client$state_machine__27148__auto____1 = (function (state_29420){
while(true){
var ret_value__27149__auto__ = (function (){try{while(true){
var result__27150__auto__ = switch__27147__auto__.call(null,state_29420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27150__auto__;
}
break;
}
}catch (e29431){if((e29431 instanceof Object)){
var ex__27151__auto__ = e29431;
var statearr_29432_29468 = state_29420;
(statearr_29432_29468[(5)] = ex__27151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29469 = state_29420;
state_29420 = G__29469;
continue;
} else {
return ret_value__27149__auto__;
}
break;
}
});
view3d$client$state_machine__27148__auto__ = function(state_29420){
switch(arguments.length){
case 0:
return view3d$client$state_machine__27148__auto____0.call(this);
case 1:
return view3d$client$state_machine__27148__auto____1.call(this,state_29420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__27148__auto____0;
view3d$client$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__27148__auto____1;
return view3d$client$state_machine__27148__auto__;
})()
;})(switch__27147__auto__,c__27242__auto__))
})();
var state__27244__auto__ = (function (){var statearr_29433 = f__27243__auto__.call(null);
(statearr_29433[(6)] = c__27242__auto__);

return statearr_29433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27244__auto__);
});})(c__27242__auto__))
);

return c__27242__auto__;
});

view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__27242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27242__auto__){
return (function (){
var f__27243__auto__ = (function (){var switch__27147__auto__ = ((function (c__27242__auto__){
return (function (state_29448){
var state_val_29449 = (state_29448[(1)]);
if((state_val_29449 === (1))){
var state_29448__$1 = state_29448;
var statearr_29450_29470 = state_29448__$1;
(statearr_29450_29470[(2)] = null);

(statearr_29450_29470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (2))){
var state_29448__$1 = state_29448;
var statearr_29451_29471 = state_29448__$1;
(statearr_29451_29471[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (3))){
var inst_29446 = (state_29448[(2)]);
var state_29448__$1 = state_29448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29448__$1,inst_29446);
} else {
if((state_val_29449 === (4))){
var inst_29436 = func.call(null,param);
var inst_29437 = cljs.core.deref.call(null,time_out);
var inst_29438 = cljs.core.async.timeout.call(null,inst_29437);
var state_29448__$1 = (function (){var statearr_29453 = state_29448;
(statearr_29453[(7)] = inst_29436);

return statearr_29453;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29448__$1,(7),inst_29438);
} else {
if((state_val_29449 === (5))){
var state_29448__$1 = state_29448;
var statearr_29454_29472 = state_29448__$1;
(statearr_29454_29472[(2)] = null);

(statearr_29454_29472[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (6))){
var inst_29444 = (state_29448[(2)]);
var state_29448__$1 = state_29448;
var statearr_29455_29473 = state_29448__$1;
(statearr_29455_29473[(2)] = inst_29444);

(statearr_29455_29473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (7))){
var inst_29440 = (state_29448[(2)]);
var state_29448__$1 = (function (){var statearr_29456 = state_29448;
(statearr_29456[(8)] = inst_29440);

return statearr_29456;
})();
var statearr_29457_29474 = state_29448__$1;
(statearr_29457_29474[(2)] = null);

(statearr_29457_29474[(1)] = (2));


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
});})(c__27242__auto__))
;
return ((function (switch__27147__auto__,c__27242__auto__){
return (function() {
var view3d$client$state_machine__27148__auto__ = null;
var view3d$client$state_machine__27148__auto____0 = (function (){
var statearr_29458 = [null,null,null,null,null,null,null,null,null];
(statearr_29458[(0)] = view3d$client$state_machine__27148__auto__);

(statearr_29458[(1)] = (1));

return statearr_29458;
});
var view3d$client$state_machine__27148__auto____1 = (function (state_29448){
while(true){
var ret_value__27149__auto__ = (function (){try{while(true){
var result__27150__auto__ = switch__27147__auto__.call(null,state_29448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27150__auto__;
}
break;
}
}catch (e29459){if((e29459 instanceof Object)){
var ex__27151__auto__ = e29459;
var statearr_29460_29475 = state_29448;
(statearr_29460_29475[(5)] = ex__27151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29476 = state_29448;
state_29448 = G__29476;
continue;
} else {
return ret_value__27149__auto__;
}
break;
}
});
view3d$client$state_machine__27148__auto__ = function(state_29448){
switch(arguments.length){
case 0:
return view3d$client$state_machine__27148__auto____0.call(this);
case 1:
return view3d$client$state_machine__27148__auto____1.call(this,state_29448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__27148__auto____0;
view3d$client$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__27148__auto____1;
return view3d$client$state_machine__27148__auto__;
})()
;})(switch__27147__auto__,c__27242__auto__))
})();
var state__27244__auto__ = (function (){var statearr_29461 = f__27243__auto__.call(null);
(statearr_29461[(6)] = c__27242__auto__);

return statearr_29461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27244__auto__);
});})(c__27242__auto__))
);

return c__27242__auto__;
});

view3d.client.repeater_BANG_.cljs$lang$maxFixedArity = 3;

view3d.client.read_transit = (function view3d$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
view3d.client.by_id = (function view3d$client$by_id(id){
return document.getElementById(id);
});
view3d.client.set_html_BANG_ = (function view3d$client$set_html_BANG_(id,msg){
return document.getElementById(id).innerHTML = msg;
});
view3d.client.num_val = (function view3d$client$num_val(x){
if(typeof x === 'number'){
return x;
} else {
return cljs.reader.read_string.call(null,x);
}
});
view3d.client.view = (function view3d$client$view(deg){
var deg__$1 = view3d.client.num_val.call(null,deg);
if(((((-180) <= deg__$1)) && ((deg__$1 <= (180))))){
cljs.core._vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,czm.core.CAMERA),new cljs.core.Keyword(null,"view","view",1247994814),deg__$1));

return view3d.client.set_html_BANG_.call(null,"view-fld",deg__$1);
} else {
return null;
}
});
view3d.client.pitch = (function view3d$client$pitch(deg){
var deg__$1 = view3d.client.num_val.call(null,deg);
if(((((-90) <= deg__$1)) && ((deg__$1 <= (90))))){
cljs.core._vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,czm.core.CAMERA),new cljs.core.Keyword(null,"pitch","pitch",1495126700),deg__$1));

return view3d.client.set_html_BANG_.call(null,"pitch-fld",deg__$1);
} else {
return null;
}
});
view3d.client.roll = (function view3d$client$roll(deg){
var deg__$1 = view3d.client.num_val.call(null,deg);
if(((((-180) <= deg__$1)) && ((deg__$1 <= (180))))){
cljs.core._vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,czm.core.CAMERA),new cljs.core.Keyword(null,"roll","roll",11266999),deg__$1));

return view3d.client.set_html_BANG_.call(null,"roll-fld",deg__$1);
} else {
return null;
}
});
view3d.client.response_request = (function view3d$client$response_request(){
var resp = cljs.core.deref.call(null,view3d.client.RESPONSE);
if((!(cljs.core.empty_QMARK_.call(null,resp)))){
ajax.core.GET.call(null,"/response",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response","response",-1068424192),(function (){try{return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),resp);
}catch (e29477){if((e29477 instanceof Error)){
var e = e29477;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e29477;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
view3d.client.handle_request = (function view3d$client$handle_request(request){
var temp__5733__auto___29484 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___29484)){
var vie_29485 = temp__5733__auto___29484;
view3d.client.view.call(null,vie_29485);
} else {
}

var temp__5733__auto___29486 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___29486)){
var pit_29487 = temp__5733__auto___29486;
view3d.client.pitch.call(null,pit_29487);
} else {
}

var temp__5733__auto___29488 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___29488)){
var rol_29489 = temp__5733__auto___29488;
view3d.client.roll.call(null,rol_29489);
} else {
}

var temp__5733__auto___29490 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___29490)){
var vec__29478_29491 = temp__5733__auto___29490;
var lat_29492 = cljs.core.nth.call(null,vec__29478_29491,(0),null);
var lon_29493 = cljs.core.nth.call(null,vec__29478_29491,(1),null);
var vec__29481_29494 = czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [geo.calc.radians.call(null,lat_29492),geo.calc.radians.call(null,lon_29493)], null),(0));
var __29495 = cljs.core.nth.call(null,vec__29481_29494,(0),null);
var __29496__$1 = cljs.core.nth.call(null,vec__29481_29494,(1),null);
var sh_29497 = cljs.core.nth.call(null,vec__29481_29494,(2),null);
cljs.core._vreset_BANG_.call(null,view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_29497 | (0))));
} else {
}

return view3d.client.response_request.call(null);
});
view3d.client.handle_vehicle = (function view3d$client$handle_vehicle(vehicle){
var vec__29498 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__29498,(0),null);
var lon = cljs.core.nth.call(null,vec__29498,(1),null);
var alt = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle);
var crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle);
var head = czm.core.norm_crs.call(null,(crs + new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA))));
cljs.core._vreset_BANG_.call(null,view3d.client.VEHICLE,cljs.core.merge.call(null,cljs.core._deref.call(null,view3d.client.VEHICLE),vehicle));

view3d.client.set_html_BANG_.call(null,"onboard-fld",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(vehicle));

view3d.client.set_html_BANG_.call(null,"name-fld",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(vehicle));

view3d.client.set_html_BANG_.call(null,"course-fld",new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle));

view3d.client.set_html_BANG_.call(null,"speed-fld",new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(vehicle));

view3d.client.set_html_BANG_.call(null,"altitude-fld",czm.core.ALT);

view3d.client.set_html_BANG_.call(null,"view-dir",geo.calc.rumb.call(null,head));

return czm.core.fly_to.call(null,lat,lon,alt,crs,1.2);
});
view3d.client.vehicle_hr = (function view3d$client$vehicle_hr(response){
var resp = view3d.client.read_transit.call(null,response);
var temp__5733__auto___29501 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5733__auto___29501)){
var vehicle_29502 = temp__5733__auto___29501;
view3d.client.handle_vehicle.call(null,vehicle_29502);
} else {
}

var temp__5733__auto__ = new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5733__auto__)){
var request = temp__5733__auto__;
return view3d.client.handle_request.call(null,request);
} else {
return null;
}
});
view3d.client.receive_vehicle = (function view3d$client$receive_vehicle(){
return ajax.core.GET.call(null,"/vehicle",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.deref.call(null,czm.core.CAMERA),new cljs.core.Keyword(null,"handler","handler",-195596612),view3d.client.vehicle_hr,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
});
view3d.client.left_controls = (function view3d$client$left_controls(){
view3d.client.set_html_BANG_.call(null,"camera","<h4>Camera</h4>");

view3d.client.set_html_BANG_.call(null,"onboard","Onboard:");

view3d.client.set_html_BANG_.call(null,"onboard-fld","");

view3d.client.set_html_BANG_.call(null,"view","View:");

view3d.client.set_html_BANG_.call(null,"view-fld",(0));

view3d.client.set_html_BANG_.call(null,"view-sld","<input type='range' style='width:150px' id='roll-vals'\n               min='-180' value='0' max='180'\n               oninput='javascript:view3d.client.view(this.value)'>");

view3d.client.set_html_BANG_.call(null,"pitch","Pitch:");

view3d.client.set_html_BANG_.call(null,"pitch-fld",(0));

view3d.client.set_html_BANG_.call(null,"pitch-sld","<input type='range' style='width:150px' id='pitch-vals'\n               min='-90' value='0' max='90'\n               oninput='javascript:view3d.client.pitch(this.value)'>");

view3d.client.set_html_BANG_.call(null,"roll","Roll:");

view3d.client.set_html_BANG_.call(null,"roll-fld",(0));

return view3d.client.set_html_BANG_.call(null,"roll-sld","<input type='range' style='width:150px' id='roll-vals'\n               min='-180' value='0' max='180'\n               oninput='javascript:view3d.client.roll(this.value)'>");
});
view3d.client.right_controls = (function view3d$client$right_controls(){
view3d.client.set_html_BANG_.call(null,"vehicle","<h4>Vehicle</h4>");

view3d.client.set_html_BANG_.call(null,"name","Name:");

view3d.client.set_html_BANG_.call(null,"name-fld","");

view3d.client.set_html_BANG_.call(null,"course","Course:");

view3d.client.set_html_BANG_.call(null,"course-fld","");

view3d.client.set_html_BANG_.call(null,"speed","Speed:");

view3d.client.set_html_BANG_.call(null,"speed-fld","");

view3d.client.set_html_BANG_.call(null,"altitude","Altitude:");

return view3d.client.set_html_BANG_.call(null,"altitude-fld","");
});
view3d.client.show_controls = (function view3d$client$show_controls(){
view3d.client.right_controls.call(null);

return view3d.client.left_controls.call(null);
});
view3d.client.on_load = (function view3d$client$on_load(){
czm.core.init_3D_view.call(null);

view3d.client.repeater.call(null,view3d.client.receive_vehicle,(1000));

return view3d.client.show_controls.call(null);
});
view3d.client.run_repl = (function view3d$client$run_repl(){
var result = (function view3d$client$run_repl_$_result(res){
cljs.core.println.call(null,res);

return cljs.core._vreset_BANG_.call(null,view3d.client.CLI_REPL,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CLI_REPL),new cljs.core.Keyword(null,"value","value",305978217),res.call(null,new cljs.core.Keyword(null,"value","value",305978217))));
});
var evaluate = (function view3d$client$run_repl_$_evaluate(source){
return cljs.js.eval_str.call(null,cljs.core.deref.call(null,view3d.client.CLI_REPL).call(null,new cljs.core.Keyword(null,"state","state",-1988618099)),source,null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null),result);
});
var hand = (function view3d$client$run_repl_$_hand(response){
var temp__5735__auto__ = cljs.core.first.call(null,view3d.client.read_transit.call(null,response));
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
ajax.core.GET.call(null,"/cli-repl",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transit","transit",359458387),(function (){try{return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),cljs.core.deref.call(null,view3d.client.CLI_REPL).call(null,new cljs.core.Keyword(null,"value","value",305978217)));
}catch (e29503){if((e29503 instanceof Error)){
var e = e29503;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e29503;

}
}})()], null),new cljs.core.Keyword(null,"handler","handler",-195596612),hand,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

return setTimeout(view3d.client.run_repl,(1000));
});
view3d.client.tst = (function view3d$client$tst(){
czm.core.VIEWER.scene.globe.depthTestAgainstTerrain = true;

cljs.core.println.call(null,new cljs.core.Keyword(null,"D","D",-8015893),czm.core.VIEWER.scene.globe.depthTestAgainstTerrain);

var ppc = (new Cesium.PointPrimitiveCollection(({"heightReference": Cesium.HeightReference.CLAMP_TO_GROUND})));
var lla = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.6,7.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.61,7.51], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.6,7.52], null)], null);
var clr = Cesium.Color.YELLOW;
var size = (10);
var prims = czm.core.VIEWER.scene.primitives.add(ppc);
return fillPointPrimColl(prims,cljs.core.clj__GT_js.call(null,lla),clr,size);
});
cljs.core.enable_console_print_BANG_.call(null);
window.onload = view3d.client.on_load.call(null);
view3d.client.run_repl.call(null);
view3d.client.tst.call(null);

//# sourceMappingURL=client.js.map
