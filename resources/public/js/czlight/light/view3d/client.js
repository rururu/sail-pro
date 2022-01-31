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
var map__16578 = response;
var map__16578__$1 = (((((!((map__16578 == null))))?(((((map__16578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16578):map__16578);
var status = cljs.core.get.call(null,map__16578__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__16578__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
light.view3d.client.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
light.view3d.client.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
light.view3d.client.PORT = (8448);
light.view3d.client.format = (function light$view3d$client$format(var_args){
var args__4647__auto__ = [];
var len__4641__auto___16582 = arguments.length;
var i__4642__auto___16583 = (0);
while(true){
if((i__4642__auto___16583 < len__4641__auto___16582)){
args__4647__auto__.push((arguments[i__4642__auto___16583]));

var G__16584 = (i__4642__auto___16583 + (1));
i__4642__auto___16583 = G__16584;
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
light.view3d.client.format.cljs$lang$applyTo = (function (seq16580){
var G__16581 = cljs.core.first.call(null,seq16580);
var seq16580__$1 = cljs.core.next.call(null,seq16580);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16581,seq16580__$1);
});

light.view3d.client.repeater = (function light$view3d$client$repeater(var_args){
var G__16586 = arguments.length;
switch (G__16586) {
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
var c__2964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2964__auto__){
return (function (){
var f__2965__auto__ = (function (){var switch__2941__auto__ = ((function (c__2964__auto__){
return (function (state_16600){
var state_val_16601 = (state_16600[(1)]);
if((state_val_16601 === (1))){
var state_16600__$1 = state_16600;
var statearr_16602_16642 = state_16600__$1;
(statearr_16602_16642[(2)] = null);

(statearr_16602_16642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16601 === (2))){
var state_16600__$1 = state_16600;
var statearr_16603_16643 = state_16600__$1;
(statearr_16603_16643[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16601 === (3))){
var inst_16598 = (state_16600[(2)]);
var state_16600__$1 = state_16600;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16600__$1,inst_16598);
} else {
if((state_val_16601 === (4))){
var inst_16589 = func.call(null);
var inst_16590 = cljs.core.async.timeout.call(null,time_out);
var state_16600__$1 = (function (){var statearr_16605 = state_16600;
(statearr_16605[(7)] = inst_16589);

return statearr_16605;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16600__$1,(7),inst_16590);
} else {
if((state_val_16601 === (5))){
var state_16600__$1 = state_16600;
var statearr_16606_16644 = state_16600__$1;
(statearr_16606_16644[(2)] = null);

(statearr_16606_16644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16601 === (6))){
var inst_16596 = (state_16600[(2)]);
var state_16600__$1 = state_16600;
var statearr_16607_16645 = state_16600__$1;
(statearr_16607_16645[(2)] = inst_16596);

(statearr_16607_16645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16601 === (7))){
var inst_16592 = (state_16600[(2)]);
var state_16600__$1 = (function (){var statearr_16608 = state_16600;
(statearr_16608[(8)] = inst_16592);

return statearr_16608;
})();
var statearr_16609_16646 = state_16600__$1;
(statearr_16609_16646[(2)] = null);

(statearr_16609_16646[(1)] = (2));


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
});})(c__2964__auto__))
;
return ((function (switch__2941__auto__,c__2964__auto__){
return (function() {
var light$view3d$client$state_machine__2942__auto__ = null;
var light$view3d$client$state_machine__2942__auto____0 = (function (){
var statearr_16610 = [null,null,null,null,null,null,null,null,null];
(statearr_16610[(0)] = light$view3d$client$state_machine__2942__auto__);

(statearr_16610[(1)] = (1));

return statearr_16610;
});
var light$view3d$client$state_machine__2942__auto____1 = (function (state_16600){
while(true){
var ret_value__2943__auto__ = (function (){try{while(true){
var result__2944__auto__ = switch__2941__auto__.call(null,state_16600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2944__auto__;
}
break;
}
}catch (e16611){if((e16611 instanceof Object)){
var ex__2945__auto__ = e16611;
var statearr_16612_16647 = state_16600;
(statearr_16612_16647[(5)] = ex__2945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16648 = state_16600;
state_16600 = G__16648;
continue;
} else {
return ret_value__2943__auto__;
}
break;
}
});
light$view3d$client$state_machine__2942__auto__ = function(state_16600){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2942__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2942__auto____1.call(this,state_16600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2942__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2942__auto____0;
light$view3d$client$state_machine__2942__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2942__auto____1;
return light$view3d$client$state_machine__2942__auto__;
})()
;})(switch__2941__auto__,c__2964__auto__))
})();
var state__2966__auto__ = (function (){var statearr_16613 = f__2965__auto__.call(null);
(statearr_16613[(6)] = c__2964__auto__);

return statearr_16613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2966__auto__);
});})(c__2964__auto__))
);

return c__2964__auto__;
});

light.view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__2964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2964__auto__){
return (function (){
var f__2965__auto__ = (function (){var switch__2941__auto__ = ((function (c__2964__auto__){
return (function (state_16627){
var state_val_16628 = (state_16627[(1)]);
if((state_val_16628 === (1))){
var state_16627__$1 = state_16627;
var statearr_16629_16649 = state_16627__$1;
(statearr_16629_16649[(2)] = null);

(statearr_16629_16649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16628 === (2))){
var state_16627__$1 = state_16627;
var statearr_16630_16650 = state_16627__$1;
(statearr_16630_16650[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16628 === (3))){
var inst_16625 = (state_16627[(2)]);
var state_16627__$1 = state_16627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16627__$1,inst_16625);
} else {
if((state_val_16628 === (4))){
var inst_16616 = func.call(null,param);
var inst_16617 = cljs.core.async.timeout.call(null,time_out);
var state_16627__$1 = (function (){var statearr_16632 = state_16627;
(statearr_16632[(7)] = inst_16616);

return statearr_16632;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16627__$1,(7),inst_16617);
} else {
if((state_val_16628 === (5))){
var state_16627__$1 = state_16627;
var statearr_16633_16651 = state_16627__$1;
(statearr_16633_16651[(2)] = null);

(statearr_16633_16651[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16628 === (6))){
var inst_16623 = (state_16627[(2)]);
var state_16627__$1 = state_16627;
var statearr_16634_16652 = state_16627__$1;
(statearr_16634_16652[(2)] = inst_16623);

(statearr_16634_16652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16628 === (7))){
var inst_16619 = (state_16627[(2)]);
var state_16627__$1 = (function (){var statearr_16635 = state_16627;
(statearr_16635[(8)] = inst_16619);

return statearr_16635;
})();
var statearr_16636_16653 = state_16627__$1;
(statearr_16636_16653[(2)] = null);

(statearr_16636_16653[(1)] = (2));


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
});})(c__2964__auto__))
;
return ((function (switch__2941__auto__,c__2964__auto__){
return (function() {
var light$view3d$client$state_machine__2942__auto__ = null;
var light$view3d$client$state_machine__2942__auto____0 = (function (){
var statearr_16637 = [null,null,null,null,null,null,null,null,null];
(statearr_16637[(0)] = light$view3d$client$state_machine__2942__auto__);

(statearr_16637[(1)] = (1));

return statearr_16637;
});
var light$view3d$client$state_machine__2942__auto____1 = (function (state_16627){
while(true){
var ret_value__2943__auto__ = (function (){try{while(true){
var result__2944__auto__ = switch__2941__auto__.call(null,state_16627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2944__auto__;
}
break;
}
}catch (e16638){if((e16638 instanceof Object)){
var ex__2945__auto__ = e16638;
var statearr_16639_16654 = state_16627;
(statearr_16639_16654[(5)] = ex__2945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16655 = state_16627;
state_16627 = G__16655;
continue;
} else {
return ret_value__2943__auto__;
}
break;
}
});
light$view3d$client$state_machine__2942__auto__ = function(state_16627){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2942__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2942__auto____1.call(this,state_16627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2942__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2942__auto____0;
light$view3d$client$state_machine__2942__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2942__auto____1;
return light$view3d$client$state_machine__2942__auto__;
})()
;})(switch__2941__auto__,c__2964__auto__))
})();
var state__2966__auto__ = (function (){var statearr_16640 = f__2965__auto__.call(null);
(statearr_16640[(6)] = c__2964__auto__);

return statearr_16640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2966__auto__);
});})(c__2964__auto__))
);

return c__2964__auto__;
});

light.view3d.client.repeater.cljs$lang$maxFixedArity = 3;

light.view3d.client.repeater_BANG_ = (function light$view3d$client$repeater_BANG_(var_args){
var G__16657 = arguments.length;
switch (G__16657) {
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
var c__2964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2964__auto__){
return (function (){
var f__2965__auto__ = (function (){var switch__2941__auto__ = ((function (c__2964__auto__){
return (function (state_16672){
var state_val_16673 = (state_16672[(1)]);
if((state_val_16673 === (1))){
var state_16672__$1 = state_16672;
var statearr_16674_16715 = state_16672__$1;
(statearr_16674_16715[(2)] = null);

(statearr_16674_16715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16673 === (2))){
var state_16672__$1 = state_16672;
var statearr_16675_16716 = state_16672__$1;
(statearr_16675_16716[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16673 === (3))){
var inst_16670 = (state_16672[(2)]);
var state_16672__$1 = state_16672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16672__$1,inst_16670);
} else {
if((state_val_16673 === (4))){
var inst_16660 = func.call(null);
var inst_16661 = cljs.core.deref.call(null,time_out);
var inst_16662 = cljs.core.async.timeout.call(null,inst_16661);
var state_16672__$1 = (function (){var statearr_16677 = state_16672;
(statearr_16677[(7)] = inst_16660);

return statearr_16677;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16672__$1,(7),inst_16662);
} else {
if((state_val_16673 === (5))){
var state_16672__$1 = state_16672;
var statearr_16678_16717 = state_16672__$1;
(statearr_16678_16717[(2)] = null);

(statearr_16678_16717[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16673 === (6))){
var inst_16668 = (state_16672[(2)]);
var state_16672__$1 = state_16672;
var statearr_16679_16718 = state_16672__$1;
(statearr_16679_16718[(2)] = inst_16668);

(statearr_16679_16718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16673 === (7))){
var inst_16664 = (state_16672[(2)]);
var state_16672__$1 = (function (){var statearr_16680 = state_16672;
(statearr_16680[(8)] = inst_16664);

return statearr_16680;
})();
var statearr_16681_16719 = state_16672__$1;
(statearr_16681_16719[(2)] = null);

(statearr_16681_16719[(1)] = (2));


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
});})(c__2964__auto__))
;
return ((function (switch__2941__auto__,c__2964__auto__){
return (function() {
var light$view3d$client$state_machine__2942__auto__ = null;
var light$view3d$client$state_machine__2942__auto____0 = (function (){
var statearr_16682 = [null,null,null,null,null,null,null,null,null];
(statearr_16682[(0)] = light$view3d$client$state_machine__2942__auto__);

(statearr_16682[(1)] = (1));

return statearr_16682;
});
var light$view3d$client$state_machine__2942__auto____1 = (function (state_16672){
while(true){
var ret_value__2943__auto__ = (function (){try{while(true){
var result__2944__auto__ = switch__2941__auto__.call(null,state_16672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2944__auto__;
}
break;
}
}catch (e16683){if((e16683 instanceof Object)){
var ex__2945__auto__ = e16683;
var statearr_16684_16720 = state_16672;
(statearr_16684_16720[(5)] = ex__2945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16721 = state_16672;
state_16672 = G__16721;
continue;
} else {
return ret_value__2943__auto__;
}
break;
}
});
light$view3d$client$state_machine__2942__auto__ = function(state_16672){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2942__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2942__auto____1.call(this,state_16672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2942__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2942__auto____0;
light$view3d$client$state_machine__2942__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2942__auto____1;
return light$view3d$client$state_machine__2942__auto__;
})()
;})(switch__2941__auto__,c__2964__auto__))
})();
var state__2966__auto__ = (function (){var statearr_16685 = f__2965__auto__.call(null);
(statearr_16685[(6)] = c__2964__auto__);

return statearr_16685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2966__auto__);
});})(c__2964__auto__))
);

return c__2964__auto__;
});

light.view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__2964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2964__auto__){
return (function (){
var f__2965__auto__ = (function (){var switch__2941__auto__ = ((function (c__2964__auto__){
return (function (state_16700){
var state_val_16701 = (state_16700[(1)]);
if((state_val_16701 === (1))){
var state_16700__$1 = state_16700;
var statearr_16702_16722 = state_16700__$1;
(statearr_16702_16722[(2)] = null);

(statearr_16702_16722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16701 === (2))){
var state_16700__$1 = state_16700;
var statearr_16703_16723 = state_16700__$1;
(statearr_16703_16723[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16701 === (3))){
var inst_16698 = (state_16700[(2)]);
var state_16700__$1 = state_16700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16700__$1,inst_16698);
} else {
if((state_val_16701 === (4))){
var inst_16688 = func.call(null,param);
var inst_16689 = cljs.core.deref.call(null,time_out);
var inst_16690 = cljs.core.async.timeout.call(null,inst_16689);
var state_16700__$1 = (function (){var statearr_16705 = state_16700;
(statearr_16705[(7)] = inst_16688);

return statearr_16705;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16700__$1,(7),inst_16690);
} else {
if((state_val_16701 === (5))){
var state_16700__$1 = state_16700;
var statearr_16706_16724 = state_16700__$1;
(statearr_16706_16724[(2)] = null);

(statearr_16706_16724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16701 === (6))){
var inst_16696 = (state_16700[(2)]);
var state_16700__$1 = state_16700;
var statearr_16707_16725 = state_16700__$1;
(statearr_16707_16725[(2)] = inst_16696);

(statearr_16707_16725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16701 === (7))){
var inst_16692 = (state_16700[(2)]);
var state_16700__$1 = (function (){var statearr_16708 = state_16700;
(statearr_16708[(8)] = inst_16692);

return statearr_16708;
})();
var statearr_16709_16726 = state_16700__$1;
(statearr_16709_16726[(2)] = null);

(statearr_16709_16726[(1)] = (2));


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
});})(c__2964__auto__))
;
return ((function (switch__2941__auto__,c__2964__auto__){
return (function() {
var light$view3d$client$state_machine__2942__auto__ = null;
var light$view3d$client$state_machine__2942__auto____0 = (function (){
var statearr_16710 = [null,null,null,null,null,null,null,null,null];
(statearr_16710[(0)] = light$view3d$client$state_machine__2942__auto__);

(statearr_16710[(1)] = (1));

return statearr_16710;
});
var light$view3d$client$state_machine__2942__auto____1 = (function (state_16700){
while(true){
var ret_value__2943__auto__ = (function (){try{while(true){
var result__2944__auto__ = switch__2941__auto__.call(null,state_16700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2944__auto__;
}
break;
}
}catch (e16711){if((e16711 instanceof Object)){
var ex__2945__auto__ = e16711;
var statearr_16712_16727 = state_16700;
(statearr_16712_16727[(5)] = ex__2945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16728 = state_16700;
state_16700 = G__16728;
continue;
} else {
return ret_value__2943__auto__;
}
break;
}
});
light$view3d$client$state_machine__2942__auto__ = function(state_16700){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2942__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2942__auto____1.call(this,state_16700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2942__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2942__auto____0;
light$view3d$client$state_machine__2942__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2942__auto____1;
return light$view3d$client$state_machine__2942__auto__;
})()
;})(switch__2941__auto__,c__2964__auto__))
})();
var state__2966__auto__ = (function (){var statearr_16713 = f__2965__auto__.call(null);
(statearr_16713[(6)] = c__2964__auto__);

return statearr_16713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2966__auto__);
});})(c__2964__auto__))
);

return c__2964__auto__;
});

light.view3d.client.repeater_BANG_.cljs$lang$maxFixedArity = 3;

light.view3d.client.read_transit = (function light$view3d$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
light.view3d.client.by_id = (function light$view3d$client$by_id(id){
return document.getElementById(id);
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
light.view3d.client.view = (function light$view3d$client$view(deg){
var deg__$1 = light.view3d.client.num_val.call(null,deg);
if(((((-180) <= deg__$1)) && ((deg__$1 <= (180))))){
cljs.core._vreset_BANG_.call(null,light.czm.core.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.czm.core.CAMERA),new cljs.core.Keyword(null,"view","view",1247994814),deg__$1));

if((((deg__$1 < (-90))) || ((deg__$1 > (90))))){
light.view3d.client.set_html_BANG_.call(null,"viewF-fld","");

return light.view3d.client.set_html_BANG_.call(null,"viewB-fld",cljs.core.val);
} else {
light.view3d.client.set_html_BANG_.call(null,"viewF-fld",deg__$1);

return light.view3d.client.set_html_BANG_.call(null,"view-fld","");
}
} else {
return null;
}
});
light.view3d.client.viewF = (function light$view3d$client$viewF(deg){
var deg__$1 = light.view3d.client.num_val.call(null,deg);
if(((((-90) <= deg__$1)) && ((deg__$1 <= (90))))){
cljs.core._vreset_BANG_.call(null,light.czm.core.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.czm.core.CAMERA),new cljs.core.Keyword(null,"view","view",1247994814),deg__$1));

light.view3d.client.set_html_BANG_.call(null,"viewF-fld",deg__$1);

return light.view3d.client.set_html_BANG_.call(null,"viewB-fld","");
} else {
return null;
}
});
light.view3d.client.viewB = (function light$view3d$client$viewB(deg){
var deg__$1 = light.view3d.client.num_val.call(null,deg);
if(((((-90) <= deg__$1)) && ((deg__$1 <= (90))))){
var val = (((deg__$1 < (0)))?(deg__$1 + (180)):(deg__$1 - (180)));
cljs.core._vreset_BANG_.call(null,light.czm.core.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.czm.core.CAMERA),new cljs.core.Keyword(null,"view","view",1247994814),val));

light.view3d.client.set_html_BANG_.call(null,"viewF-fld","");

return light.view3d.client.set_html_BANG_.call(null,"viewB-fld",val);
} else {
return null;
}
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
if((m >= (1000))){
return light.view3d.client.format.call(null,"%.0f km",(m / 1000.0));
} else {
return light.view3d.client.format.call(null,"%.0f \u043C",(m / 1.0));
}
});
light.view3d.client.zoom = (function light$view3d$client$zoom(mode){
var zoom_on = (function (){
light.view3d.client.set_html_BANG_.call(null,"zoom-dn","<img src='img/binS.png' width='24' height='24' id='zdn'\n           onclick='javascript:light.view3d.client.zoom(-1);'>");

return light.view3d.client.set_html_BANG_.call(null,"zoom-no","<img src='img/binN.png' width='24' height='24' id='zno'\n           onclick='javascript:light.view3d.client.zoom(0);'>");
});
var zoom_off = ((function (zoom_on){
return (function (){
light.view3d.client.set_html_BANG_.call(null,"zoom-dn","");

return light.view3d.client.set_html_BANG_.call(null,"zoom-no","");
});})(zoom_on))
;
var pred__16729_16732 = cljs.core._EQ_;
var expr__16730_16733 = mode;
if(cljs.core.truth_(pred__16729_16732.call(null,(1),expr__16730_16733))){
light.czm.core.zoom_in.call(null);

zoom_on.call(null);
} else {
if(cljs.core.truth_(pred__16729_16732.call(null,(-1),expr__16730_16733))){
light.czm.core.zoom_out.call(null);

if(cljs.core.empty_QMARK_.call(null,light.czm.core.ZOOM)){
zoom_off.call(null);
} else {
}
} else {
if(cljs.core.truth_(pred__16729_16732.call(null,(0),expr__16730_16733))){
light.czm.core.zoom_no.call(null);

zoom_off.call(null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16730_16733)].join('')));
}
}
}

return light.view3d.client.set_html_BANG_.call(null,"zoom-val",light.view3d.client.zoom_format.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,light.czm.core.ZOOM)));
});
light.view3d.client.zoom_amount = (function light$view3d$client$zoom_amount(amount){
return light.czm.core.zoom_amount.call(null,light.view3d.client.num_val.call(null,amount));
});
light.view3d.client.response_request = (function light$view3d$client$response_request(){
var resp = cljs.core.deref.call(null,light.view3d.client.RESPONSE);
if((!(cljs.core.empty_QMARK_.call(null,resp)))){
ajax.core.GET.call(null,"/response",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response","response",-1068424192),(function (){try{return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),resp);
}catch (e16734){if((e16734 instanceof Error)){
var e = e16734;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e16734;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),light.view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
light.view3d.client.handle_request = (function light$view3d$client$handle_request(request){
var temp__5733__auto___16741 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___16741)){
var vie_16742 = temp__5733__auto___16741;
light.view3d.client.view.call(null,vie_16742);
} else {
}

var temp__5733__auto___16743 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___16743)){
var pit_16744 = temp__5733__auto___16743;
light.view3d.client.pitch.call(null,pit_16744);
} else {
}

var temp__5733__auto___16745 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___16745)){
var rol_16746 = temp__5733__auto___16745;
light.view3d.client.roll.call(null,rol_16746);
} else {
}

var temp__5733__auto___16747 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___16747)){
var vec__16735_16748 = temp__5733__auto___16747;
var lat_16749 = cljs.core.nth.call(null,vec__16735_16748,(0),null);
var lon_16750 = cljs.core.nth.call(null,vec__16735_16748,(1),null);
var vec__16738_16751 = light.czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [light.geo.calc.radians.call(null,lat_16749),light.geo.calc.radians.call(null,lon_16750)], null),(0));
var __16752 = cljs.core.nth.call(null,vec__16738_16751,(0),null);
var __16753__$1 = cljs.core.nth.call(null,vec__16738_16751,(1),null);
var sh_16754 = cljs.core.nth.call(null,vec__16738_16751,(2),null);
cljs.core._vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_16754 | (0))));
} else {
}

return light.view3d.client.response_request.call(null);
});
light.view3d.client.handle_vehicle = (function light$view3d$client$handle_vehicle(vehicle){
var vec__16755 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__16755,(0),null);
var lon = cljs.core.nth.call(null,vec__16755,(1),null);
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

if(cljs.core.empty_QMARK_.call(null,light.czm.core.ZOOM)){
return light.czm.core.fly_to.call(null,lat,lon,(alt + vev),crs,(5));
} else {
return null;
}
});
light.view3d.client.vehicle_hr = (function light$view3d$client$vehicle_hr(response){
var resp = light.view3d.client.read_transit.call(null,response);
var temp__5733__auto___16758 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5733__auto___16758)){
var vehicle_16759 = temp__5733__auto___16758;
light.view3d.client.handle_vehicle.call(null,vehicle_16759);
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

light.view3d.client.set_html_BANG_.call(null,"pitch-sld","<input type='range' style='width:400px' id='pitch-vals'\n               min='-90' value='0' max='90'\n               oninput='javascript:light.view3d.client.pitch(this.value)'>");

light.view3d.client.set_html_BANG_.call(null,"viewF","View Fwd:");

light.view3d.client.set_html_BANG_.call(null,"viewF-fld",(0));

light.view3d.client.set_html_BANG_.call(null,"viewF-sld","<input type='range' style='width:400px' id='roll-vals'\n               min='-90' value='0' max='90'\n               oninput='javascript:light.view3d.client.viewF(this.value)'>");

light.view3d.client.set_html_BANG_.call(null,"viewB","View Bwd:");

light.view3d.client.set_html_BANG_.call(null,"viewB-fld",(0));

return light.view3d.client.set_html_BANG_.call(null,"viewB-sld","<input type='range' style='width:400px' id='roll-vals'\n               min='-90' value='0' max='90'\n               oninput='javascript:light.view3d.client.viewB(this.value)'>");
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

light.view3d.client.set_html_BANG_.call(null,"zoostep","zoom step");

light.view3d.client.set_html_BANG_.call(null,"zoomin","10 m");

light.view3d.client.set_html_BANG_.call(null,"zoomax","10 km");

light.view3d.client.set_html_BANG_.call(null,"zooup","zoom up");

light.view3d.client.set_html_BANG_.call(null,"zoodn","zoom dn");

light.view3d.client.set_html_BANG_.call(null,"zoono","zoom no");

light.view3d.client.set_html_BANG_.call(null,"zoom-up","<img src='img/binB.png' width='24' height='24' id='zup' \n    onclick='javascript:light.view3d.client.zoom(1);'>");

return light.view3d.client.set_html_BANG_.call(null,"zoom-amount","<input type='range' style='width:150px' id='zfa'\n               min='10' value='200' max='10000'\n               oninput='javascript:light.view3d.client.zoom_amount(this.value)'>");
});
light.view3d.client.show_controls = (function light$view3d$client$show_controls(){
light.view3d.client.right_controls.call(null);

light.view3d.client.left_controls.call(null);

return light.view3d.client.middle_controls.call(null);
});
light.view3d.client.on_load = (function light$view3d$client$on_load(){
light.czm.core.init_3D_view.call(null,["http://0.0.0.0:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(light.view3d.client.PORT)].join(''));

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
}catch (e16760){if((e16760 instanceof Error)){
var e = e16760;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e16760;

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
