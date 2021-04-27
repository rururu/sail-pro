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
var map__11623 = response;
var map__11623__$1 = (((((!((map__11623 == null))))?(((((map__11623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11623):map__11623);
var status = cljs.core.get.call(null,map__11623__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__11623__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
view3d.client.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
view3d.client.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
view3d.client.repeater = (function view3d$client$repeater(var_args){
var G__11626 = arguments.length;
switch (G__11626) {
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
var c__9536__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9536__auto__){
return (function (){
var f__9537__auto__ = (function (){var switch__9441__auto__ = ((function (c__9536__auto__){
return (function (state_11640){
var state_val_11641 = (state_11640[(1)]);
if((state_val_11641 === (1))){
var state_11640__$1 = state_11640;
var statearr_11642_11682 = state_11640__$1;
(statearr_11642_11682[(2)] = null);

(statearr_11642_11682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11641 === (2))){
var state_11640__$1 = state_11640;
var statearr_11643_11683 = state_11640__$1;
(statearr_11643_11683[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11641 === (3))){
var inst_11638 = (state_11640[(2)]);
var state_11640__$1 = state_11640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11640__$1,inst_11638);
} else {
if((state_val_11641 === (4))){
var inst_11629 = func.call(null);
var inst_11630 = cljs.core.async.timeout.call(null,time_out);
var state_11640__$1 = (function (){var statearr_11645 = state_11640;
(statearr_11645[(7)] = inst_11629);

return statearr_11645;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11640__$1,(7),inst_11630);
} else {
if((state_val_11641 === (5))){
var state_11640__$1 = state_11640;
var statearr_11646_11684 = state_11640__$1;
(statearr_11646_11684[(2)] = null);

(statearr_11646_11684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11641 === (6))){
var inst_11636 = (state_11640[(2)]);
var state_11640__$1 = state_11640;
var statearr_11647_11685 = state_11640__$1;
(statearr_11647_11685[(2)] = inst_11636);

(statearr_11647_11685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11641 === (7))){
var inst_11632 = (state_11640[(2)]);
var state_11640__$1 = (function (){var statearr_11648 = state_11640;
(statearr_11648[(8)] = inst_11632);

return statearr_11648;
})();
var statearr_11649_11686 = state_11640__$1;
(statearr_11649_11686[(2)] = null);

(statearr_11649_11686[(1)] = (2));


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
});})(c__9536__auto__))
;
return ((function (switch__9441__auto__,c__9536__auto__){
return (function() {
var view3d$client$state_machine__9442__auto__ = null;
var view3d$client$state_machine__9442__auto____0 = (function (){
var statearr_11650 = [null,null,null,null,null,null,null,null,null];
(statearr_11650[(0)] = view3d$client$state_machine__9442__auto__);

(statearr_11650[(1)] = (1));

return statearr_11650;
});
var view3d$client$state_machine__9442__auto____1 = (function (state_11640){
while(true){
var ret_value__9443__auto__ = (function (){try{while(true){
var result__9444__auto__ = switch__9441__auto__.call(null,state_11640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9444__auto__;
}
break;
}
}catch (e11651){if((e11651 instanceof Object)){
var ex__9445__auto__ = e11651;
var statearr_11652_11687 = state_11640;
(statearr_11652_11687[(5)] = ex__9445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11688 = state_11640;
state_11640 = G__11688;
continue;
} else {
return ret_value__9443__auto__;
}
break;
}
});
view3d$client$state_machine__9442__auto__ = function(state_11640){
switch(arguments.length){
case 0:
return view3d$client$state_machine__9442__auto____0.call(this);
case 1:
return view3d$client$state_machine__9442__auto____1.call(this,state_11640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__9442__auto____0;
view3d$client$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__9442__auto____1;
return view3d$client$state_machine__9442__auto__;
})()
;})(switch__9441__auto__,c__9536__auto__))
})();
var state__9538__auto__ = (function (){var statearr_11653 = f__9537__auto__.call(null);
(statearr_11653[(6)] = c__9536__auto__);

return statearr_11653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9538__auto__);
});})(c__9536__auto__))
);

return c__9536__auto__;
});

view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__9536__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9536__auto__){
return (function (){
var f__9537__auto__ = (function (){var switch__9441__auto__ = ((function (c__9536__auto__){
return (function (state_11667){
var state_val_11668 = (state_11667[(1)]);
if((state_val_11668 === (1))){
var state_11667__$1 = state_11667;
var statearr_11669_11689 = state_11667__$1;
(statearr_11669_11689[(2)] = null);

(statearr_11669_11689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11668 === (2))){
var state_11667__$1 = state_11667;
var statearr_11670_11690 = state_11667__$1;
(statearr_11670_11690[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11668 === (3))){
var inst_11665 = (state_11667[(2)]);
var state_11667__$1 = state_11667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11667__$1,inst_11665);
} else {
if((state_val_11668 === (4))){
var inst_11656 = func.call(null,param);
var inst_11657 = cljs.core.async.timeout.call(null,time_out);
var state_11667__$1 = (function (){var statearr_11672 = state_11667;
(statearr_11672[(7)] = inst_11656);

return statearr_11672;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11667__$1,(7),inst_11657);
} else {
if((state_val_11668 === (5))){
var state_11667__$1 = state_11667;
var statearr_11673_11691 = state_11667__$1;
(statearr_11673_11691[(2)] = null);

(statearr_11673_11691[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11668 === (6))){
var inst_11663 = (state_11667[(2)]);
var state_11667__$1 = state_11667;
var statearr_11674_11692 = state_11667__$1;
(statearr_11674_11692[(2)] = inst_11663);

(statearr_11674_11692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11668 === (7))){
var inst_11659 = (state_11667[(2)]);
var state_11667__$1 = (function (){var statearr_11675 = state_11667;
(statearr_11675[(8)] = inst_11659);

return statearr_11675;
})();
var statearr_11676_11693 = state_11667__$1;
(statearr_11676_11693[(2)] = null);

(statearr_11676_11693[(1)] = (2));


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
});})(c__9536__auto__))
;
return ((function (switch__9441__auto__,c__9536__auto__){
return (function() {
var view3d$client$state_machine__9442__auto__ = null;
var view3d$client$state_machine__9442__auto____0 = (function (){
var statearr_11677 = [null,null,null,null,null,null,null,null,null];
(statearr_11677[(0)] = view3d$client$state_machine__9442__auto__);

(statearr_11677[(1)] = (1));

return statearr_11677;
});
var view3d$client$state_machine__9442__auto____1 = (function (state_11667){
while(true){
var ret_value__9443__auto__ = (function (){try{while(true){
var result__9444__auto__ = switch__9441__auto__.call(null,state_11667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9444__auto__;
}
break;
}
}catch (e11678){if((e11678 instanceof Object)){
var ex__9445__auto__ = e11678;
var statearr_11679_11694 = state_11667;
(statearr_11679_11694[(5)] = ex__9445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11695 = state_11667;
state_11667 = G__11695;
continue;
} else {
return ret_value__9443__auto__;
}
break;
}
});
view3d$client$state_machine__9442__auto__ = function(state_11667){
switch(arguments.length){
case 0:
return view3d$client$state_machine__9442__auto____0.call(this);
case 1:
return view3d$client$state_machine__9442__auto____1.call(this,state_11667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__9442__auto____0;
view3d$client$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__9442__auto____1;
return view3d$client$state_machine__9442__auto__;
})()
;})(switch__9441__auto__,c__9536__auto__))
})();
var state__9538__auto__ = (function (){var statearr_11680 = f__9537__auto__.call(null);
(statearr_11680[(6)] = c__9536__auto__);

return statearr_11680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9538__auto__);
});})(c__9536__auto__))
);

return c__9536__auto__;
});

view3d.client.repeater.cljs$lang$maxFixedArity = 3;

view3d.client.repeater_BANG_ = (function view3d$client$repeater_BANG_(var_args){
var G__11697 = arguments.length;
switch (G__11697) {
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
var c__9536__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9536__auto__){
return (function (){
var f__9537__auto__ = (function (){var switch__9441__auto__ = ((function (c__9536__auto__){
return (function (state_11712){
var state_val_11713 = (state_11712[(1)]);
if((state_val_11713 === (1))){
var state_11712__$1 = state_11712;
var statearr_11714_11755 = state_11712__$1;
(statearr_11714_11755[(2)] = null);

(statearr_11714_11755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11713 === (2))){
var state_11712__$1 = state_11712;
var statearr_11715_11756 = state_11712__$1;
(statearr_11715_11756[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11713 === (3))){
var inst_11710 = (state_11712[(2)]);
var state_11712__$1 = state_11712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11712__$1,inst_11710);
} else {
if((state_val_11713 === (4))){
var inst_11700 = func.call(null);
var inst_11701 = cljs.core.deref.call(null,time_out);
var inst_11702 = cljs.core.async.timeout.call(null,inst_11701);
var state_11712__$1 = (function (){var statearr_11717 = state_11712;
(statearr_11717[(7)] = inst_11700);

return statearr_11717;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11712__$1,(7),inst_11702);
} else {
if((state_val_11713 === (5))){
var state_11712__$1 = state_11712;
var statearr_11718_11757 = state_11712__$1;
(statearr_11718_11757[(2)] = null);

(statearr_11718_11757[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11713 === (6))){
var inst_11708 = (state_11712[(2)]);
var state_11712__$1 = state_11712;
var statearr_11719_11758 = state_11712__$1;
(statearr_11719_11758[(2)] = inst_11708);

(statearr_11719_11758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11713 === (7))){
var inst_11704 = (state_11712[(2)]);
var state_11712__$1 = (function (){var statearr_11720 = state_11712;
(statearr_11720[(8)] = inst_11704);

return statearr_11720;
})();
var statearr_11721_11759 = state_11712__$1;
(statearr_11721_11759[(2)] = null);

(statearr_11721_11759[(1)] = (2));


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
});})(c__9536__auto__))
;
return ((function (switch__9441__auto__,c__9536__auto__){
return (function() {
var view3d$client$state_machine__9442__auto__ = null;
var view3d$client$state_machine__9442__auto____0 = (function (){
var statearr_11722 = [null,null,null,null,null,null,null,null,null];
(statearr_11722[(0)] = view3d$client$state_machine__9442__auto__);

(statearr_11722[(1)] = (1));

return statearr_11722;
});
var view3d$client$state_machine__9442__auto____1 = (function (state_11712){
while(true){
var ret_value__9443__auto__ = (function (){try{while(true){
var result__9444__auto__ = switch__9441__auto__.call(null,state_11712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9444__auto__;
}
break;
}
}catch (e11723){if((e11723 instanceof Object)){
var ex__9445__auto__ = e11723;
var statearr_11724_11760 = state_11712;
(statearr_11724_11760[(5)] = ex__9445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11761 = state_11712;
state_11712 = G__11761;
continue;
} else {
return ret_value__9443__auto__;
}
break;
}
});
view3d$client$state_machine__9442__auto__ = function(state_11712){
switch(arguments.length){
case 0:
return view3d$client$state_machine__9442__auto____0.call(this);
case 1:
return view3d$client$state_machine__9442__auto____1.call(this,state_11712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__9442__auto____0;
view3d$client$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__9442__auto____1;
return view3d$client$state_machine__9442__auto__;
})()
;})(switch__9441__auto__,c__9536__auto__))
})();
var state__9538__auto__ = (function (){var statearr_11725 = f__9537__auto__.call(null);
(statearr_11725[(6)] = c__9536__auto__);

return statearr_11725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9538__auto__);
});})(c__9536__auto__))
);

return c__9536__auto__;
});

view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__9536__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9536__auto__){
return (function (){
var f__9537__auto__ = (function (){var switch__9441__auto__ = ((function (c__9536__auto__){
return (function (state_11740){
var state_val_11741 = (state_11740[(1)]);
if((state_val_11741 === (1))){
var state_11740__$1 = state_11740;
var statearr_11742_11762 = state_11740__$1;
(statearr_11742_11762[(2)] = null);

(statearr_11742_11762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11741 === (2))){
var state_11740__$1 = state_11740;
var statearr_11743_11763 = state_11740__$1;
(statearr_11743_11763[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11741 === (3))){
var inst_11738 = (state_11740[(2)]);
var state_11740__$1 = state_11740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11740__$1,inst_11738);
} else {
if((state_val_11741 === (4))){
var inst_11728 = func.call(null,param);
var inst_11729 = cljs.core.deref.call(null,time_out);
var inst_11730 = cljs.core.async.timeout.call(null,inst_11729);
var state_11740__$1 = (function (){var statearr_11745 = state_11740;
(statearr_11745[(7)] = inst_11728);

return statearr_11745;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11740__$1,(7),inst_11730);
} else {
if((state_val_11741 === (5))){
var state_11740__$1 = state_11740;
var statearr_11746_11764 = state_11740__$1;
(statearr_11746_11764[(2)] = null);

(statearr_11746_11764[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11741 === (6))){
var inst_11736 = (state_11740[(2)]);
var state_11740__$1 = state_11740;
var statearr_11747_11765 = state_11740__$1;
(statearr_11747_11765[(2)] = inst_11736);

(statearr_11747_11765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11741 === (7))){
var inst_11732 = (state_11740[(2)]);
var state_11740__$1 = (function (){var statearr_11748 = state_11740;
(statearr_11748[(8)] = inst_11732);

return statearr_11748;
})();
var statearr_11749_11766 = state_11740__$1;
(statearr_11749_11766[(2)] = null);

(statearr_11749_11766[(1)] = (2));


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
});})(c__9536__auto__))
;
return ((function (switch__9441__auto__,c__9536__auto__){
return (function() {
var view3d$client$state_machine__9442__auto__ = null;
var view3d$client$state_machine__9442__auto____0 = (function (){
var statearr_11750 = [null,null,null,null,null,null,null,null,null];
(statearr_11750[(0)] = view3d$client$state_machine__9442__auto__);

(statearr_11750[(1)] = (1));

return statearr_11750;
});
var view3d$client$state_machine__9442__auto____1 = (function (state_11740){
while(true){
var ret_value__9443__auto__ = (function (){try{while(true){
var result__9444__auto__ = switch__9441__auto__.call(null,state_11740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9444__auto__;
}
break;
}
}catch (e11751){if((e11751 instanceof Object)){
var ex__9445__auto__ = e11751;
var statearr_11752_11767 = state_11740;
(statearr_11752_11767[(5)] = ex__9445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11768 = state_11740;
state_11740 = G__11768;
continue;
} else {
return ret_value__9443__auto__;
}
break;
}
});
view3d$client$state_machine__9442__auto__ = function(state_11740){
switch(arguments.length){
case 0:
return view3d$client$state_machine__9442__auto____0.call(this);
case 1:
return view3d$client$state_machine__9442__auto____1.call(this,state_11740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__9442__auto____0;
view3d$client$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__9442__auto____1;
return view3d$client$state_machine__9442__auto__;
})()
;})(switch__9441__auto__,c__9536__auto__))
})();
var state__9538__auto__ = (function (){var statearr_11753 = f__9537__auto__.call(null);
(statearr_11753[(6)] = c__9536__auto__);

return statearr_11753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9538__auto__);
});})(c__9536__auto__))
);

return c__9536__auto__;
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
}catch (e11769){if((e11769 instanceof Error)){
var e = e11769;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e11769;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
view3d.client.handle_request = (function view3d$client$handle_request(request){
var temp__5733__auto___11776 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___11776)){
var vie_11777 = temp__5733__auto___11776;
view3d.client.view.call(null,vie_11777);
} else {
}

var temp__5733__auto___11778 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___11778)){
var pit_11779 = temp__5733__auto___11778;
view3d.client.pitch.call(null,pit_11779);
} else {
}

var temp__5733__auto___11780 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___11780)){
var rol_11781 = temp__5733__auto___11780;
view3d.client.roll.call(null,rol_11781);
} else {
}

var temp__5733__auto___11782 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___11782)){
var vec__11770_11783 = temp__5733__auto___11782;
var lat_11784 = cljs.core.nth.call(null,vec__11770_11783,(0),null);
var lon_11785 = cljs.core.nth.call(null,vec__11770_11783,(1),null);
var vec__11773_11786 = czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [geo.calc.radians.call(null,lat_11784),geo.calc.radians.call(null,lon_11785)], null),(0));
var __11787 = cljs.core.nth.call(null,vec__11773_11786,(0),null);
var __11788__$1 = cljs.core.nth.call(null,vec__11773_11786,(1),null);
var sh_11789 = cljs.core.nth.call(null,vec__11773_11786,(2),null);
cljs.core._vreset_BANG_.call(null,view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_11789 | (0))));
} else {
}

return view3d.client.response_request.call(null);
});
view3d.client.handle_vehicle = (function view3d$client$handle_vehicle(vehicle){
var vec__11790 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__11790,(0),null);
var lon = cljs.core.nth.call(null,vec__11790,(1),null);
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
var temp__5733__auto___11793 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5733__auto___11793)){
var vehicle_11794 = temp__5733__auto___11793;
view3d.client.handle_vehicle.call(null,vehicle_11794);
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
}catch (e11795){if((e11795 instanceof Error)){
var e = e11795;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e11795;

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
