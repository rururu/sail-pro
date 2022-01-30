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
var map__4592 = response;
var map__4592__$1 = (((((!((map__4592 == null))))?(((((map__4592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4592):map__4592);
var status = cljs.core.get.call(null,map__4592__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__4592__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
light.view3d.client.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
light.view3d.client.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
light.view3d.client.PORT = (8448);
light.view3d.client.format = (function light$view3d$client$format(var_args){
var args__4647__auto__ = [];
var len__4641__auto___4596 = arguments.length;
var i__4642__auto___4597 = (0);
while(true){
if((i__4642__auto___4597 < len__4641__auto___4596)){
args__4647__auto__.push((arguments[i__4642__auto___4597]));

var G__4598 = (i__4642__auto___4597 + (1));
i__4642__auto___4597 = G__4598;
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
light.view3d.client.format.cljs$lang$applyTo = (function (seq4594){
var G__4595 = cljs.core.first.call(null,seq4594);
var seq4594__$1 = cljs.core.next.call(null,seq4594);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4595,seq4594__$1);
});

light.view3d.client.repeater = (function light$view3d$client$repeater(var_args){
var G__4600 = arguments.length;
switch (G__4600) {
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
var c__2642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2642__auto__){
return (function (){
var f__2643__auto__ = (function (){var switch__2619__auto__ = ((function (c__2642__auto__){
return (function (state_4614){
var state_val_4615 = (state_4614[(1)]);
if((state_val_4615 === (1))){
var state_4614__$1 = state_4614;
var statearr_4616_4656 = state_4614__$1;
(statearr_4616_4656[(2)] = null);

(statearr_4616_4656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4615 === (2))){
var state_4614__$1 = state_4614;
var statearr_4617_4657 = state_4614__$1;
(statearr_4617_4657[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4615 === (3))){
var inst_4612 = (state_4614[(2)]);
var state_4614__$1 = state_4614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4614__$1,inst_4612);
} else {
if((state_val_4615 === (4))){
var inst_4603 = func.call(null);
var inst_4604 = cljs.core.async.timeout.call(null,time_out);
var state_4614__$1 = (function (){var statearr_4619 = state_4614;
(statearr_4619[(7)] = inst_4603);

return statearr_4619;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4614__$1,(7),inst_4604);
} else {
if((state_val_4615 === (5))){
var state_4614__$1 = state_4614;
var statearr_4620_4658 = state_4614__$1;
(statearr_4620_4658[(2)] = null);

(statearr_4620_4658[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4615 === (6))){
var inst_4610 = (state_4614[(2)]);
var state_4614__$1 = state_4614;
var statearr_4621_4659 = state_4614__$1;
(statearr_4621_4659[(2)] = inst_4610);

(statearr_4621_4659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4615 === (7))){
var inst_4606 = (state_4614[(2)]);
var state_4614__$1 = (function (){var statearr_4622 = state_4614;
(statearr_4622[(8)] = inst_4606);

return statearr_4622;
})();
var statearr_4623_4660 = state_4614__$1;
(statearr_4623_4660[(2)] = null);

(statearr_4623_4660[(1)] = (2));


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
});})(c__2642__auto__))
;
return ((function (switch__2619__auto__,c__2642__auto__){
return (function() {
var light$view3d$client$state_machine__2620__auto__ = null;
var light$view3d$client$state_machine__2620__auto____0 = (function (){
var statearr_4624 = [null,null,null,null,null,null,null,null,null];
(statearr_4624[(0)] = light$view3d$client$state_machine__2620__auto__);

(statearr_4624[(1)] = (1));

return statearr_4624;
});
var light$view3d$client$state_machine__2620__auto____1 = (function (state_4614){
while(true){
var ret_value__2621__auto__ = (function (){try{while(true){
var result__2622__auto__ = switch__2619__auto__.call(null,state_4614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2622__auto__;
}
break;
}
}catch (e4625){if((e4625 instanceof Object)){
var ex__2623__auto__ = e4625;
var statearr_4626_4661 = state_4614;
(statearr_4626_4661[(5)] = ex__2623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4662 = state_4614;
state_4614 = G__4662;
continue;
} else {
return ret_value__2621__auto__;
}
break;
}
});
light$view3d$client$state_machine__2620__auto__ = function(state_4614){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2620__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2620__auto____1.call(this,state_4614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2620__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2620__auto____0;
light$view3d$client$state_machine__2620__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2620__auto____1;
return light$view3d$client$state_machine__2620__auto__;
})()
;})(switch__2619__auto__,c__2642__auto__))
})();
var state__2644__auto__ = (function (){var statearr_4627 = f__2643__auto__.call(null);
(statearr_4627[(6)] = c__2642__auto__);

return statearr_4627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2644__auto__);
});})(c__2642__auto__))
);

return c__2642__auto__;
});

light.view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__2642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2642__auto__){
return (function (){
var f__2643__auto__ = (function (){var switch__2619__auto__ = ((function (c__2642__auto__){
return (function (state_4641){
var state_val_4642 = (state_4641[(1)]);
if((state_val_4642 === (1))){
var state_4641__$1 = state_4641;
var statearr_4643_4663 = state_4641__$1;
(statearr_4643_4663[(2)] = null);

(statearr_4643_4663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4642 === (2))){
var state_4641__$1 = state_4641;
var statearr_4644_4664 = state_4641__$1;
(statearr_4644_4664[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4642 === (3))){
var inst_4639 = (state_4641[(2)]);
var state_4641__$1 = state_4641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4641__$1,inst_4639);
} else {
if((state_val_4642 === (4))){
var inst_4630 = func.call(null,param);
var inst_4631 = cljs.core.async.timeout.call(null,time_out);
var state_4641__$1 = (function (){var statearr_4646 = state_4641;
(statearr_4646[(7)] = inst_4630);

return statearr_4646;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4641__$1,(7),inst_4631);
} else {
if((state_val_4642 === (5))){
var state_4641__$1 = state_4641;
var statearr_4647_4665 = state_4641__$1;
(statearr_4647_4665[(2)] = null);

(statearr_4647_4665[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4642 === (6))){
var inst_4637 = (state_4641[(2)]);
var state_4641__$1 = state_4641;
var statearr_4648_4666 = state_4641__$1;
(statearr_4648_4666[(2)] = inst_4637);

(statearr_4648_4666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4642 === (7))){
var inst_4633 = (state_4641[(2)]);
var state_4641__$1 = (function (){var statearr_4649 = state_4641;
(statearr_4649[(8)] = inst_4633);

return statearr_4649;
})();
var statearr_4650_4667 = state_4641__$1;
(statearr_4650_4667[(2)] = null);

(statearr_4650_4667[(1)] = (2));


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
});})(c__2642__auto__))
;
return ((function (switch__2619__auto__,c__2642__auto__){
return (function() {
var light$view3d$client$state_machine__2620__auto__ = null;
var light$view3d$client$state_machine__2620__auto____0 = (function (){
var statearr_4651 = [null,null,null,null,null,null,null,null,null];
(statearr_4651[(0)] = light$view3d$client$state_machine__2620__auto__);

(statearr_4651[(1)] = (1));

return statearr_4651;
});
var light$view3d$client$state_machine__2620__auto____1 = (function (state_4641){
while(true){
var ret_value__2621__auto__ = (function (){try{while(true){
var result__2622__auto__ = switch__2619__auto__.call(null,state_4641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2622__auto__;
}
break;
}
}catch (e4652){if((e4652 instanceof Object)){
var ex__2623__auto__ = e4652;
var statearr_4653_4668 = state_4641;
(statearr_4653_4668[(5)] = ex__2623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4669 = state_4641;
state_4641 = G__4669;
continue;
} else {
return ret_value__2621__auto__;
}
break;
}
});
light$view3d$client$state_machine__2620__auto__ = function(state_4641){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2620__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2620__auto____1.call(this,state_4641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2620__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2620__auto____0;
light$view3d$client$state_machine__2620__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2620__auto____1;
return light$view3d$client$state_machine__2620__auto__;
})()
;})(switch__2619__auto__,c__2642__auto__))
})();
var state__2644__auto__ = (function (){var statearr_4654 = f__2643__auto__.call(null);
(statearr_4654[(6)] = c__2642__auto__);

return statearr_4654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2644__auto__);
});})(c__2642__auto__))
);

return c__2642__auto__;
});

light.view3d.client.repeater.cljs$lang$maxFixedArity = 3;

light.view3d.client.repeater_BANG_ = (function light$view3d$client$repeater_BANG_(var_args){
var G__4671 = arguments.length;
switch (G__4671) {
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
var c__2642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2642__auto__){
return (function (){
var f__2643__auto__ = (function (){var switch__2619__auto__ = ((function (c__2642__auto__){
return (function (state_4686){
var state_val_4687 = (state_4686[(1)]);
if((state_val_4687 === (1))){
var state_4686__$1 = state_4686;
var statearr_4688_4729 = state_4686__$1;
(statearr_4688_4729[(2)] = null);

(statearr_4688_4729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4687 === (2))){
var state_4686__$1 = state_4686;
var statearr_4689_4730 = state_4686__$1;
(statearr_4689_4730[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4687 === (3))){
var inst_4684 = (state_4686[(2)]);
var state_4686__$1 = state_4686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4686__$1,inst_4684);
} else {
if((state_val_4687 === (4))){
var inst_4674 = func.call(null);
var inst_4675 = cljs.core.deref.call(null,time_out);
var inst_4676 = cljs.core.async.timeout.call(null,inst_4675);
var state_4686__$1 = (function (){var statearr_4691 = state_4686;
(statearr_4691[(7)] = inst_4674);

return statearr_4691;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4686__$1,(7),inst_4676);
} else {
if((state_val_4687 === (5))){
var state_4686__$1 = state_4686;
var statearr_4692_4731 = state_4686__$1;
(statearr_4692_4731[(2)] = null);

(statearr_4692_4731[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4687 === (6))){
var inst_4682 = (state_4686[(2)]);
var state_4686__$1 = state_4686;
var statearr_4693_4732 = state_4686__$1;
(statearr_4693_4732[(2)] = inst_4682);

(statearr_4693_4732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4687 === (7))){
var inst_4678 = (state_4686[(2)]);
var state_4686__$1 = (function (){var statearr_4694 = state_4686;
(statearr_4694[(8)] = inst_4678);

return statearr_4694;
})();
var statearr_4695_4733 = state_4686__$1;
(statearr_4695_4733[(2)] = null);

(statearr_4695_4733[(1)] = (2));


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
});})(c__2642__auto__))
;
return ((function (switch__2619__auto__,c__2642__auto__){
return (function() {
var light$view3d$client$state_machine__2620__auto__ = null;
var light$view3d$client$state_machine__2620__auto____0 = (function (){
var statearr_4696 = [null,null,null,null,null,null,null,null,null];
(statearr_4696[(0)] = light$view3d$client$state_machine__2620__auto__);

(statearr_4696[(1)] = (1));

return statearr_4696;
});
var light$view3d$client$state_machine__2620__auto____1 = (function (state_4686){
while(true){
var ret_value__2621__auto__ = (function (){try{while(true){
var result__2622__auto__ = switch__2619__auto__.call(null,state_4686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2622__auto__;
}
break;
}
}catch (e4697){if((e4697 instanceof Object)){
var ex__2623__auto__ = e4697;
var statearr_4698_4734 = state_4686;
(statearr_4698_4734[(5)] = ex__2623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4735 = state_4686;
state_4686 = G__4735;
continue;
} else {
return ret_value__2621__auto__;
}
break;
}
});
light$view3d$client$state_machine__2620__auto__ = function(state_4686){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2620__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2620__auto____1.call(this,state_4686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2620__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2620__auto____0;
light$view3d$client$state_machine__2620__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2620__auto____1;
return light$view3d$client$state_machine__2620__auto__;
})()
;})(switch__2619__auto__,c__2642__auto__))
})();
var state__2644__auto__ = (function (){var statearr_4699 = f__2643__auto__.call(null);
(statearr_4699[(6)] = c__2642__auto__);

return statearr_4699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2644__auto__);
});})(c__2642__auto__))
);

return c__2642__auto__;
});

light.view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__2642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2642__auto__){
return (function (){
var f__2643__auto__ = (function (){var switch__2619__auto__ = ((function (c__2642__auto__){
return (function (state_4714){
var state_val_4715 = (state_4714[(1)]);
if((state_val_4715 === (1))){
var state_4714__$1 = state_4714;
var statearr_4716_4736 = state_4714__$1;
(statearr_4716_4736[(2)] = null);

(statearr_4716_4736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4715 === (2))){
var state_4714__$1 = state_4714;
var statearr_4717_4737 = state_4714__$1;
(statearr_4717_4737[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4715 === (3))){
var inst_4712 = (state_4714[(2)]);
var state_4714__$1 = state_4714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4714__$1,inst_4712);
} else {
if((state_val_4715 === (4))){
var inst_4702 = func.call(null,param);
var inst_4703 = cljs.core.deref.call(null,time_out);
var inst_4704 = cljs.core.async.timeout.call(null,inst_4703);
var state_4714__$1 = (function (){var statearr_4719 = state_4714;
(statearr_4719[(7)] = inst_4702);

return statearr_4719;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4714__$1,(7),inst_4704);
} else {
if((state_val_4715 === (5))){
var state_4714__$1 = state_4714;
var statearr_4720_4738 = state_4714__$1;
(statearr_4720_4738[(2)] = null);

(statearr_4720_4738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4715 === (6))){
var inst_4710 = (state_4714[(2)]);
var state_4714__$1 = state_4714;
var statearr_4721_4739 = state_4714__$1;
(statearr_4721_4739[(2)] = inst_4710);

(statearr_4721_4739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4715 === (7))){
var inst_4706 = (state_4714[(2)]);
var state_4714__$1 = (function (){var statearr_4722 = state_4714;
(statearr_4722[(8)] = inst_4706);

return statearr_4722;
})();
var statearr_4723_4740 = state_4714__$1;
(statearr_4723_4740[(2)] = null);

(statearr_4723_4740[(1)] = (2));


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
});})(c__2642__auto__))
;
return ((function (switch__2619__auto__,c__2642__auto__){
return (function() {
var light$view3d$client$state_machine__2620__auto__ = null;
var light$view3d$client$state_machine__2620__auto____0 = (function (){
var statearr_4724 = [null,null,null,null,null,null,null,null,null];
(statearr_4724[(0)] = light$view3d$client$state_machine__2620__auto__);

(statearr_4724[(1)] = (1));

return statearr_4724;
});
var light$view3d$client$state_machine__2620__auto____1 = (function (state_4714){
while(true){
var ret_value__2621__auto__ = (function (){try{while(true){
var result__2622__auto__ = switch__2619__auto__.call(null,state_4714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2622__auto__;
}
break;
}
}catch (e4725){if((e4725 instanceof Object)){
var ex__2623__auto__ = e4725;
var statearr_4726_4741 = state_4714;
(statearr_4726_4741[(5)] = ex__2623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4742 = state_4714;
state_4714 = G__4742;
continue;
} else {
return ret_value__2621__auto__;
}
break;
}
});
light$view3d$client$state_machine__2620__auto__ = function(state_4714){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2620__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2620__auto____1.call(this,state_4714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2620__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2620__auto____0;
light$view3d$client$state_machine__2620__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2620__auto____1;
return light$view3d$client$state_machine__2620__auto__;
})()
;})(switch__2619__auto__,c__2642__auto__))
})();
var state__2644__auto__ = (function (){var statearr_4727 = f__2643__auto__.call(null);
(statearr_4727[(6)] = c__2642__auto__);

return statearr_4727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2644__auto__);
});})(c__2642__auto__))
);

return c__2642__auto__;
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
var val = (((deg__$1 < (0)))?((-90) - ((90) + deg__$1)):((180) - deg__$1));
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
var pred__4743_4746 = cljs.core._EQ_;
var expr__4744_4747 = mode;
if(cljs.core.truth_(pred__4743_4746.call(null,(1),expr__4744_4747))){
light.czm.core.zoom_in.call(null);

zoom_on.call(null);
} else {
if(cljs.core.truth_(pred__4743_4746.call(null,(-1),expr__4744_4747))){
light.czm.core.zoom_out.call(null);

if(cljs.core.empty_QMARK_.call(null,light.czm.core.ZOOM)){
zoom_off.call(null);
} else {
}
} else {
if(cljs.core.truth_(pred__4743_4746.call(null,(0),expr__4744_4747))){
light.czm.core.zoom_no.call(null);

zoom_off.call(null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__4744_4747)].join('')));
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
}catch (e4748){if((e4748 instanceof Error)){
var e = e4748;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e4748;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),light.view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
light.view3d.client.handle_request = (function light$view3d$client$handle_request(request){
var temp__5733__auto___4755 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___4755)){
var vie_4756 = temp__5733__auto___4755;
light.view3d.client.view.call(null,vie_4756);
} else {
}

var temp__5733__auto___4757 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___4757)){
var pit_4758 = temp__5733__auto___4757;
light.view3d.client.pitch.call(null,pit_4758);
} else {
}

var temp__5733__auto___4759 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___4759)){
var rol_4760 = temp__5733__auto___4759;
light.view3d.client.roll.call(null,rol_4760);
} else {
}

var temp__5733__auto___4761 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___4761)){
var vec__4749_4762 = temp__5733__auto___4761;
var lat_4763 = cljs.core.nth.call(null,vec__4749_4762,(0),null);
var lon_4764 = cljs.core.nth.call(null,vec__4749_4762,(1),null);
var vec__4752_4765 = light.czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [light.geo.calc.radians.call(null,lat_4763),light.geo.calc.radians.call(null,lon_4764)], null),(0));
var __4766 = cljs.core.nth.call(null,vec__4752_4765,(0),null);
var __4767__$1 = cljs.core.nth.call(null,vec__4752_4765,(1),null);
var sh_4768 = cljs.core.nth.call(null,vec__4752_4765,(2),null);
cljs.core._vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_4768 | (0))));
} else {
}

return light.view3d.client.response_request.call(null);
});
light.view3d.client.handle_vehicle = (function light$view3d$client$handle_vehicle(vehicle){
var vec__4769 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__4769,(0),null);
var lon = cljs.core.nth.call(null,vec__4769,(1),null);
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
var temp__5733__auto___4772 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5733__auto___4772)){
var vehicle_4773 = temp__5733__auto___4772;
light.view3d.client.handle_vehicle.call(null,vehicle_4773);
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
}catch (e4774){if((e4774 instanceof Error)){
var e = e4774;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e4774;

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
