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
var map__26568 = response;
var map__26568__$1 = (((((!((map__26568 == null))))?(((((map__26568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26568):map__26568);
var status = cljs.core.get.call(null,map__26568__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__26568__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
light.view3d.client.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
light.view3d.client.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
light.view3d.client.PORT = (8448);
light.view3d.client.repeater = (function light$view3d$client$repeater(var_args){
var G__26571 = arguments.length;
switch (G__26571) {
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
var c__23491__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23491__auto__){
return (function (){
var f__23492__auto__ = (function (){var switch__23468__auto__ = ((function (c__23491__auto__){
return (function (state_26585){
var state_val_26586 = (state_26585[(1)]);
if((state_val_26586 === (1))){
var state_26585__$1 = state_26585;
var statearr_26587_26627 = state_26585__$1;
(statearr_26587_26627[(2)] = null);

(statearr_26587_26627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (2))){
var state_26585__$1 = state_26585;
var statearr_26588_26628 = state_26585__$1;
(statearr_26588_26628[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (3))){
var inst_26583 = (state_26585[(2)]);
var state_26585__$1 = state_26585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26585__$1,inst_26583);
} else {
if((state_val_26586 === (4))){
var inst_26574 = func.call(null);
var inst_26575 = cljs.core.async.timeout.call(null,time_out);
var state_26585__$1 = (function (){var statearr_26590 = state_26585;
(statearr_26590[(7)] = inst_26574);

return statearr_26590;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26585__$1,(7),inst_26575);
} else {
if((state_val_26586 === (5))){
var state_26585__$1 = state_26585;
var statearr_26591_26629 = state_26585__$1;
(statearr_26591_26629[(2)] = null);

(statearr_26591_26629[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (6))){
var inst_26581 = (state_26585[(2)]);
var state_26585__$1 = state_26585;
var statearr_26592_26630 = state_26585__$1;
(statearr_26592_26630[(2)] = inst_26581);

(statearr_26592_26630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (7))){
var inst_26577 = (state_26585[(2)]);
var state_26585__$1 = (function (){var statearr_26593 = state_26585;
(statearr_26593[(8)] = inst_26577);

return statearr_26593;
})();
var statearr_26594_26631 = state_26585__$1;
(statearr_26594_26631[(2)] = null);

(statearr_26594_26631[(1)] = (2));


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
});})(c__23491__auto__))
;
return ((function (switch__23468__auto__,c__23491__auto__){
return (function() {
var light$view3d$client$state_machine__23469__auto__ = null;
var light$view3d$client$state_machine__23469__auto____0 = (function (){
var statearr_26595 = [null,null,null,null,null,null,null,null,null];
(statearr_26595[(0)] = light$view3d$client$state_machine__23469__auto__);

(statearr_26595[(1)] = (1));

return statearr_26595;
});
var light$view3d$client$state_machine__23469__auto____1 = (function (state_26585){
while(true){
var ret_value__23470__auto__ = (function (){try{while(true){
var result__23471__auto__ = switch__23468__auto__.call(null,state_26585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23471__auto__;
}
break;
}
}catch (e26596){if((e26596 instanceof Object)){
var ex__23472__auto__ = e26596;
var statearr_26597_26632 = state_26585;
(statearr_26597_26632[(5)] = ex__23472__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26633 = state_26585;
state_26585 = G__26633;
continue;
} else {
return ret_value__23470__auto__;
}
break;
}
});
light$view3d$client$state_machine__23469__auto__ = function(state_26585){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__23469__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__23469__auto____1.call(this,state_26585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__23469__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__23469__auto____0;
light$view3d$client$state_machine__23469__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__23469__auto____1;
return light$view3d$client$state_machine__23469__auto__;
})()
;})(switch__23468__auto__,c__23491__auto__))
})();
var state__23493__auto__ = (function (){var statearr_26598 = f__23492__auto__.call(null);
(statearr_26598[(6)] = c__23491__auto__);

return statearr_26598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23493__auto__);
});})(c__23491__auto__))
);

return c__23491__auto__;
});

light.view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__23491__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23491__auto__){
return (function (){
var f__23492__auto__ = (function (){var switch__23468__auto__ = ((function (c__23491__auto__){
return (function (state_26612){
var state_val_26613 = (state_26612[(1)]);
if((state_val_26613 === (1))){
var state_26612__$1 = state_26612;
var statearr_26614_26634 = state_26612__$1;
(statearr_26614_26634[(2)] = null);

(statearr_26614_26634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (2))){
var state_26612__$1 = state_26612;
var statearr_26615_26635 = state_26612__$1;
(statearr_26615_26635[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (3))){
var inst_26610 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26612__$1,inst_26610);
} else {
if((state_val_26613 === (4))){
var inst_26601 = func.call(null,param);
var inst_26602 = cljs.core.async.timeout.call(null,time_out);
var state_26612__$1 = (function (){var statearr_26617 = state_26612;
(statearr_26617[(7)] = inst_26601);

return statearr_26617;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26612__$1,(7),inst_26602);
} else {
if((state_val_26613 === (5))){
var state_26612__$1 = state_26612;
var statearr_26618_26636 = state_26612__$1;
(statearr_26618_26636[(2)] = null);

(statearr_26618_26636[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (6))){
var inst_26608 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26619_26637 = state_26612__$1;
(statearr_26619_26637[(2)] = inst_26608);

(statearr_26619_26637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (7))){
var inst_26604 = (state_26612[(2)]);
var state_26612__$1 = (function (){var statearr_26620 = state_26612;
(statearr_26620[(8)] = inst_26604);

return statearr_26620;
})();
var statearr_26621_26638 = state_26612__$1;
(statearr_26621_26638[(2)] = null);

(statearr_26621_26638[(1)] = (2));


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
});})(c__23491__auto__))
;
return ((function (switch__23468__auto__,c__23491__auto__){
return (function() {
var light$view3d$client$state_machine__23469__auto__ = null;
var light$view3d$client$state_machine__23469__auto____0 = (function (){
var statearr_26622 = [null,null,null,null,null,null,null,null,null];
(statearr_26622[(0)] = light$view3d$client$state_machine__23469__auto__);

(statearr_26622[(1)] = (1));

return statearr_26622;
});
var light$view3d$client$state_machine__23469__auto____1 = (function (state_26612){
while(true){
var ret_value__23470__auto__ = (function (){try{while(true){
var result__23471__auto__ = switch__23468__auto__.call(null,state_26612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23471__auto__;
}
break;
}
}catch (e26623){if((e26623 instanceof Object)){
var ex__23472__auto__ = e26623;
var statearr_26624_26639 = state_26612;
(statearr_26624_26639[(5)] = ex__23472__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26640 = state_26612;
state_26612 = G__26640;
continue;
} else {
return ret_value__23470__auto__;
}
break;
}
});
light$view3d$client$state_machine__23469__auto__ = function(state_26612){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__23469__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__23469__auto____1.call(this,state_26612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__23469__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__23469__auto____0;
light$view3d$client$state_machine__23469__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__23469__auto____1;
return light$view3d$client$state_machine__23469__auto__;
})()
;})(switch__23468__auto__,c__23491__auto__))
})();
var state__23493__auto__ = (function (){var statearr_26625 = f__23492__auto__.call(null);
(statearr_26625[(6)] = c__23491__auto__);

return statearr_26625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23493__auto__);
});})(c__23491__auto__))
);

return c__23491__auto__;
});

light.view3d.client.repeater.cljs$lang$maxFixedArity = 3;

light.view3d.client.repeater_BANG_ = (function light$view3d$client$repeater_BANG_(var_args){
var G__26642 = arguments.length;
switch (G__26642) {
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
var c__23491__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23491__auto__){
return (function (){
var f__23492__auto__ = (function (){var switch__23468__auto__ = ((function (c__23491__auto__){
return (function (state_26657){
var state_val_26658 = (state_26657[(1)]);
if((state_val_26658 === (1))){
var state_26657__$1 = state_26657;
var statearr_26659_26700 = state_26657__$1;
(statearr_26659_26700[(2)] = null);

(statearr_26659_26700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26658 === (2))){
var state_26657__$1 = state_26657;
var statearr_26660_26701 = state_26657__$1;
(statearr_26660_26701[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26658 === (3))){
var inst_26655 = (state_26657[(2)]);
var state_26657__$1 = state_26657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26657__$1,inst_26655);
} else {
if((state_val_26658 === (4))){
var inst_26645 = func.call(null);
var inst_26646 = cljs.core.deref.call(null,time_out);
var inst_26647 = cljs.core.async.timeout.call(null,inst_26646);
var state_26657__$1 = (function (){var statearr_26662 = state_26657;
(statearr_26662[(7)] = inst_26645);

return statearr_26662;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26657__$1,(7),inst_26647);
} else {
if((state_val_26658 === (5))){
var state_26657__$1 = state_26657;
var statearr_26663_26702 = state_26657__$1;
(statearr_26663_26702[(2)] = null);

(statearr_26663_26702[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26658 === (6))){
var inst_26653 = (state_26657[(2)]);
var state_26657__$1 = state_26657;
var statearr_26664_26703 = state_26657__$1;
(statearr_26664_26703[(2)] = inst_26653);

(statearr_26664_26703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26658 === (7))){
var inst_26649 = (state_26657[(2)]);
var state_26657__$1 = (function (){var statearr_26665 = state_26657;
(statearr_26665[(8)] = inst_26649);

return statearr_26665;
})();
var statearr_26666_26704 = state_26657__$1;
(statearr_26666_26704[(2)] = null);

(statearr_26666_26704[(1)] = (2));


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
});})(c__23491__auto__))
;
return ((function (switch__23468__auto__,c__23491__auto__){
return (function() {
var light$view3d$client$state_machine__23469__auto__ = null;
var light$view3d$client$state_machine__23469__auto____0 = (function (){
var statearr_26667 = [null,null,null,null,null,null,null,null,null];
(statearr_26667[(0)] = light$view3d$client$state_machine__23469__auto__);

(statearr_26667[(1)] = (1));

return statearr_26667;
});
var light$view3d$client$state_machine__23469__auto____1 = (function (state_26657){
while(true){
var ret_value__23470__auto__ = (function (){try{while(true){
var result__23471__auto__ = switch__23468__auto__.call(null,state_26657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23471__auto__;
}
break;
}
}catch (e26668){if((e26668 instanceof Object)){
var ex__23472__auto__ = e26668;
var statearr_26669_26705 = state_26657;
(statearr_26669_26705[(5)] = ex__23472__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26706 = state_26657;
state_26657 = G__26706;
continue;
} else {
return ret_value__23470__auto__;
}
break;
}
});
light$view3d$client$state_machine__23469__auto__ = function(state_26657){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__23469__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__23469__auto____1.call(this,state_26657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__23469__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__23469__auto____0;
light$view3d$client$state_machine__23469__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__23469__auto____1;
return light$view3d$client$state_machine__23469__auto__;
})()
;})(switch__23468__auto__,c__23491__auto__))
})();
var state__23493__auto__ = (function (){var statearr_26670 = f__23492__auto__.call(null);
(statearr_26670[(6)] = c__23491__auto__);

return statearr_26670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23493__auto__);
});})(c__23491__auto__))
);

return c__23491__auto__;
});

light.view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__23491__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23491__auto__){
return (function (){
var f__23492__auto__ = (function (){var switch__23468__auto__ = ((function (c__23491__auto__){
return (function (state_26685){
var state_val_26686 = (state_26685[(1)]);
if((state_val_26686 === (1))){
var state_26685__$1 = state_26685;
var statearr_26687_26707 = state_26685__$1;
(statearr_26687_26707[(2)] = null);

(statearr_26687_26707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26686 === (2))){
var state_26685__$1 = state_26685;
var statearr_26688_26708 = state_26685__$1;
(statearr_26688_26708[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26686 === (3))){
var inst_26683 = (state_26685[(2)]);
var state_26685__$1 = state_26685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26685__$1,inst_26683);
} else {
if((state_val_26686 === (4))){
var inst_26673 = func.call(null,param);
var inst_26674 = cljs.core.deref.call(null,time_out);
var inst_26675 = cljs.core.async.timeout.call(null,inst_26674);
var state_26685__$1 = (function (){var statearr_26690 = state_26685;
(statearr_26690[(7)] = inst_26673);

return statearr_26690;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26685__$1,(7),inst_26675);
} else {
if((state_val_26686 === (5))){
var state_26685__$1 = state_26685;
var statearr_26691_26709 = state_26685__$1;
(statearr_26691_26709[(2)] = null);

(statearr_26691_26709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26686 === (6))){
var inst_26681 = (state_26685[(2)]);
var state_26685__$1 = state_26685;
var statearr_26692_26710 = state_26685__$1;
(statearr_26692_26710[(2)] = inst_26681);

(statearr_26692_26710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26686 === (7))){
var inst_26677 = (state_26685[(2)]);
var state_26685__$1 = (function (){var statearr_26693 = state_26685;
(statearr_26693[(8)] = inst_26677);

return statearr_26693;
})();
var statearr_26694_26711 = state_26685__$1;
(statearr_26694_26711[(2)] = null);

(statearr_26694_26711[(1)] = (2));


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
});})(c__23491__auto__))
;
return ((function (switch__23468__auto__,c__23491__auto__){
return (function() {
var light$view3d$client$state_machine__23469__auto__ = null;
var light$view3d$client$state_machine__23469__auto____0 = (function (){
var statearr_26695 = [null,null,null,null,null,null,null,null,null];
(statearr_26695[(0)] = light$view3d$client$state_machine__23469__auto__);

(statearr_26695[(1)] = (1));

return statearr_26695;
});
var light$view3d$client$state_machine__23469__auto____1 = (function (state_26685){
while(true){
var ret_value__23470__auto__ = (function (){try{while(true){
var result__23471__auto__ = switch__23468__auto__.call(null,state_26685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23471__auto__;
}
break;
}
}catch (e26696){if((e26696 instanceof Object)){
var ex__23472__auto__ = e26696;
var statearr_26697_26712 = state_26685;
(statearr_26697_26712[(5)] = ex__23472__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26713 = state_26685;
state_26685 = G__26713;
continue;
} else {
return ret_value__23470__auto__;
}
break;
}
});
light$view3d$client$state_machine__23469__auto__ = function(state_26685){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__23469__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__23469__auto____1.call(this,state_26685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__23469__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__23469__auto____0;
light$view3d$client$state_machine__23469__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__23469__auto____1;
return light$view3d$client$state_machine__23469__auto__;
})()
;})(switch__23468__auto__,c__23491__auto__))
})();
var state__23493__auto__ = (function (){var statearr_26698 = f__23492__auto__.call(null);
(statearr_26698[(6)] = c__23491__auto__);

return statearr_26698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23493__auto__);
});})(c__23491__auto__))
);

return c__23491__auto__;
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

return light.view3d.client.set_html_BANG_.call(null,"view-fld",deg__$1);
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
light.view3d.client.response_request = (function light$view3d$client$response_request(){
var resp = cljs.core.deref.call(null,light.view3d.client.RESPONSE);
if((!(cljs.core.empty_QMARK_.call(null,resp)))){
ajax.core.GET.call(null,"/response",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response","response",-1068424192),(function (){try{return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),resp);
}catch (e26714){if((e26714 instanceof Error)){
var e = e26714;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e26714;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),light.view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
light.view3d.client.handle_request = (function light$view3d$client$handle_request(request){
var temp__5733__auto___26721 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___26721)){
var vie_26722 = temp__5733__auto___26721;
light.view3d.client.view.call(null,vie_26722);
} else {
}

var temp__5733__auto___26723 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___26723)){
var pit_26724 = temp__5733__auto___26723;
light.view3d.client.pitch.call(null,pit_26724);
} else {
}

var temp__5733__auto___26725 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___26725)){
var rol_26726 = temp__5733__auto___26725;
light.view3d.client.roll.call(null,rol_26726);
} else {
}

var temp__5733__auto___26727 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___26727)){
var vec__26715_26728 = temp__5733__auto___26727;
var lat_26729 = cljs.core.nth.call(null,vec__26715_26728,(0),null);
var lon_26730 = cljs.core.nth.call(null,vec__26715_26728,(1),null);
var vec__26718_26731 = light.czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [light.geo.calc.radians.call(null,lat_26729),light.geo.calc.radians.call(null,lon_26730)], null),(0));
var __26732 = cljs.core.nth.call(null,vec__26718_26731,(0),null);
var __26733__$1 = cljs.core.nth.call(null,vec__26718_26731,(1),null);
var sh_26734 = cljs.core.nth.call(null,vec__26718_26731,(2),null);
cljs.core._vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_26734 | (0))));
} else {
}

return light.view3d.client.response_request.call(null);
});
light.view3d.client.handle_vehicle = (function light$view3d$client$handle_vehicle(vehicle){
var vec__26735 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__26735,(0),null);
var lon = cljs.core.nth.call(null,vec__26735,(1),null);
var alt = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle);
var vev = (function (){var or__4047__auto__ = new cljs.core.Keyword(null,"view-elevation","view-elevation",-681076231).cljs$core$IFn$_invoke$arity$1(vehicle);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})();
var crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle);
var head = light.czm.core.norm_crs.call(null,(crs + new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,light.czm.core.CAMERA))));
cljs.core._vreset_BANG_.call(null,light.view3d.client.VEHICLE,cljs.core.merge.call(null,cljs.core._deref.call(null,light.view3d.client.VEHICLE),vehicle));

light.view3d.client.set_html_BANG_.call(null,"onboard-fld",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(vehicle));

light.view3d.client.set_html_BANG_.call(null,"name-fld",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(vehicle));

light.view3d.client.set_html_BANG_.call(null,"course-fld",new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle));

light.view3d.client.set_html_BANG_.call(null,"speed-fld",new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(vehicle));

light.view3d.client.set_html_BANG_.call(null,"altitude-fld",light.czm.core.ALT);

light.view3d.client.set_html_BANG_.call(null,"view-dir",light.geo.calc.rumb.call(null,head));

return light.czm.core.fly_to.call(null,lat,lon,(alt + vev),crs,1.2);
});
light.view3d.client.vehicle_hr = (function light$view3d$client$vehicle_hr(response){
var resp = light.view3d.client.read_transit.call(null,response);
var temp__5733__auto___26738 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5733__auto___26738)){
var vehicle_26739 = temp__5733__auto___26738;
light.view3d.client.handle_vehicle.call(null,vehicle_26739);
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
light.view3d.client.left_controls = (function light$view3d$client$left_controls(){
light.view3d.client.set_html_BANG_.call(null,"camera","<h4>Camera</h4>");

light.view3d.client.set_html_BANG_.call(null,"onboard","Onboard:");

light.view3d.client.set_html_BANG_.call(null,"onboard-fld","");

light.view3d.client.set_html_BANG_.call(null,"view","View:");

light.view3d.client.set_html_BANG_.call(null,"view-fld",(0));

light.view3d.client.set_html_BANG_.call(null,"view-sld","<input type='range' style='width:150px' id='roll-vals'\n               min='-180' value='0' max='180'\n               oninput='javascript:light.view3d.client.view(this.value)'>");

light.view3d.client.set_html_BANG_.call(null,"pitch","Pitch:");

light.view3d.client.set_html_BANG_.call(null,"pitch-fld",(0));

light.view3d.client.set_html_BANG_.call(null,"pitch-sld","<input type='range' style='width:150px' id='pitch-vals'\n               min='-90' value='0' max='90'\n               oninput='javascript:light.view3d.client.pitch(this.value)'>");

light.view3d.client.set_html_BANG_.call(null,"roll","Roll:");

light.view3d.client.set_html_BANG_.call(null,"roll-fld",(0));

return light.view3d.client.set_html_BANG_.call(null,"roll-sld","<input type='range' style='width:150px' id='roll-vals'\n               min='-180' value='0' max='180'\n               oninput='javascript:light.view3d.client.roll(this.value)'>");
});
light.view3d.client.right_controls = (function light$view3d$client$right_controls(){
light.view3d.client.set_html_BANG_.call(null,"vehicle","<h4>Vehicle</h4>");

light.view3d.client.set_html_BANG_.call(null,"name","Name:");

light.view3d.client.set_html_BANG_.call(null,"name-fld","");

light.view3d.client.set_html_BANG_.call(null,"course","Course:");

light.view3d.client.set_html_BANG_.call(null,"course-fld","");

light.view3d.client.set_html_BANG_.call(null,"speed","Speed:");

light.view3d.client.set_html_BANG_.call(null,"speed-fld","");

light.view3d.client.set_html_BANG_.call(null,"altitude","Altitude:");

return light.view3d.client.set_html_BANG_.call(null,"altitude-fld","");
});
light.view3d.client.show_controls = (function light$view3d$client$show_controls(){
light.view3d.client.right_controls.call(null);

return light.view3d.client.left_controls.call(null);
});
light.view3d.client.on_load = (function light$view3d$client$on_load(){
light.czm.core.init_3D_view.call(null,["http://0.0.0.0:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(light.view3d.client.PORT)].join(''));

light.view3d.client.repeater.call(null,light.view3d.client.receive_vehicle,(1000));

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
}catch (e26740){if((e26740 instanceof Error)){
var e = e26740;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e26740;

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
light.view3d.client.run_repl.call(null);
light.view3d.client.tst.call(null);

//# sourceMappingURL=client.js.map
