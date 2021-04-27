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
var map__34743 = response;
var map__34743__$1 = (((((!((map__34743 == null))))?(((((map__34743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34743):map__34743);
var status = cljs.core.get.call(null,map__34743__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__34743__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
view3d.client.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
view3d.client.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
view3d.client.repeater = (function view3d$client$repeater(var_args){
var G__34746 = arguments.length;
switch (G__34746) {
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
var c__30792__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto__){
return (function (){
var f__30793__auto__ = (function (){var switch__30625__auto__ = ((function (c__30792__auto__){
return (function (state_34760){
var state_val_34761 = (state_34760[(1)]);
if((state_val_34761 === (1))){
var state_34760__$1 = state_34760;
var statearr_34762_34802 = state_34760__$1;
(statearr_34762_34802[(2)] = null);

(statearr_34762_34802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34761 === (2))){
var state_34760__$1 = state_34760;
var statearr_34763_34803 = state_34760__$1;
(statearr_34763_34803[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34761 === (3))){
var inst_34758 = (state_34760[(2)]);
var state_34760__$1 = state_34760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34760__$1,inst_34758);
} else {
if((state_val_34761 === (4))){
var inst_34749 = func.call(null);
var inst_34750 = cljs.core.async.timeout.call(null,time_out);
var state_34760__$1 = (function (){var statearr_34765 = state_34760;
(statearr_34765[(7)] = inst_34749);

return statearr_34765;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34760__$1,(7),inst_34750);
} else {
if((state_val_34761 === (5))){
var state_34760__$1 = state_34760;
var statearr_34766_34804 = state_34760__$1;
(statearr_34766_34804[(2)] = null);

(statearr_34766_34804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34761 === (6))){
var inst_34756 = (state_34760[(2)]);
var state_34760__$1 = state_34760;
var statearr_34767_34805 = state_34760__$1;
(statearr_34767_34805[(2)] = inst_34756);

(statearr_34767_34805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34761 === (7))){
var inst_34752 = (state_34760[(2)]);
var state_34760__$1 = (function (){var statearr_34768 = state_34760;
(statearr_34768[(8)] = inst_34752);

return statearr_34768;
})();
var statearr_34769_34806 = state_34760__$1;
(statearr_34769_34806[(2)] = null);

(statearr_34769_34806[(1)] = (2));


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
});})(c__30792__auto__))
;
return ((function (switch__30625__auto__,c__30792__auto__){
return (function() {
var view3d$client$state_machine__30626__auto__ = null;
var view3d$client$state_machine__30626__auto____0 = (function (){
var statearr_34770 = [null,null,null,null,null,null,null,null,null];
(statearr_34770[(0)] = view3d$client$state_machine__30626__auto__);

(statearr_34770[(1)] = (1));

return statearr_34770;
});
var view3d$client$state_machine__30626__auto____1 = (function (state_34760){
while(true){
var ret_value__30627__auto__ = (function (){try{while(true){
var result__30628__auto__ = switch__30625__auto__.call(null,state_34760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30628__auto__;
}
break;
}
}catch (e34771){if((e34771 instanceof Object)){
var ex__30629__auto__ = e34771;
var statearr_34772_34807 = state_34760;
(statearr_34772_34807[(5)] = ex__30629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34808 = state_34760;
state_34760 = G__34808;
continue;
} else {
return ret_value__30627__auto__;
}
break;
}
});
view3d$client$state_machine__30626__auto__ = function(state_34760){
switch(arguments.length){
case 0:
return view3d$client$state_machine__30626__auto____0.call(this);
case 1:
return view3d$client$state_machine__30626__auto____1.call(this,state_34760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__30626__auto____0;
view3d$client$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__30626__auto____1;
return view3d$client$state_machine__30626__auto__;
})()
;})(switch__30625__auto__,c__30792__auto__))
})();
var state__30794__auto__ = (function (){var statearr_34773 = f__30793__auto__.call(null);
(statearr_34773[(6)] = c__30792__auto__);

return statearr_34773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto__))
);

return c__30792__auto__;
});

view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__30792__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto__){
return (function (){
var f__30793__auto__ = (function (){var switch__30625__auto__ = ((function (c__30792__auto__){
return (function (state_34787){
var state_val_34788 = (state_34787[(1)]);
if((state_val_34788 === (1))){
var state_34787__$1 = state_34787;
var statearr_34789_34809 = state_34787__$1;
(statearr_34789_34809[(2)] = null);

(statearr_34789_34809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (2))){
var state_34787__$1 = state_34787;
var statearr_34790_34810 = state_34787__$1;
(statearr_34790_34810[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (3))){
var inst_34785 = (state_34787[(2)]);
var state_34787__$1 = state_34787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34787__$1,inst_34785);
} else {
if((state_val_34788 === (4))){
var inst_34776 = func.call(null,param);
var inst_34777 = cljs.core.async.timeout.call(null,time_out);
var state_34787__$1 = (function (){var statearr_34792 = state_34787;
(statearr_34792[(7)] = inst_34776);

return statearr_34792;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34787__$1,(7),inst_34777);
} else {
if((state_val_34788 === (5))){
var state_34787__$1 = state_34787;
var statearr_34793_34811 = state_34787__$1;
(statearr_34793_34811[(2)] = null);

(statearr_34793_34811[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (6))){
var inst_34783 = (state_34787[(2)]);
var state_34787__$1 = state_34787;
var statearr_34794_34812 = state_34787__$1;
(statearr_34794_34812[(2)] = inst_34783);

(statearr_34794_34812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (7))){
var inst_34779 = (state_34787[(2)]);
var state_34787__$1 = (function (){var statearr_34795 = state_34787;
(statearr_34795[(8)] = inst_34779);

return statearr_34795;
})();
var statearr_34796_34813 = state_34787__$1;
(statearr_34796_34813[(2)] = null);

(statearr_34796_34813[(1)] = (2));


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
});})(c__30792__auto__))
;
return ((function (switch__30625__auto__,c__30792__auto__){
return (function() {
var view3d$client$state_machine__30626__auto__ = null;
var view3d$client$state_machine__30626__auto____0 = (function (){
var statearr_34797 = [null,null,null,null,null,null,null,null,null];
(statearr_34797[(0)] = view3d$client$state_machine__30626__auto__);

(statearr_34797[(1)] = (1));

return statearr_34797;
});
var view3d$client$state_machine__30626__auto____1 = (function (state_34787){
while(true){
var ret_value__30627__auto__ = (function (){try{while(true){
var result__30628__auto__ = switch__30625__auto__.call(null,state_34787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30628__auto__;
}
break;
}
}catch (e34798){if((e34798 instanceof Object)){
var ex__30629__auto__ = e34798;
var statearr_34799_34814 = state_34787;
(statearr_34799_34814[(5)] = ex__30629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34815 = state_34787;
state_34787 = G__34815;
continue;
} else {
return ret_value__30627__auto__;
}
break;
}
});
view3d$client$state_machine__30626__auto__ = function(state_34787){
switch(arguments.length){
case 0:
return view3d$client$state_machine__30626__auto____0.call(this);
case 1:
return view3d$client$state_machine__30626__auto____1.call(this,state_34787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__30626__auto____0;
view3d$client$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__30626__auto____1;
return view3d$client$state_machine__30626__auto__;
})()
;})(switch__30625__auto__,c__30792__auto__))
})();
var state__30794__auto__ = (function (){var statearr_34800 = f__30793__auto__.call(null);
(statearr_34800[(6)] = c__30792__auto__);

return statearr_34800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto__))
);

return c__30792__auto__;
});

view3d.client.repeater.cljs$lang$maxFixedArity = 3;

view3d.client.repeater_BANG_ = (function view3d$client$repeater_BANG_(var_args){
var G__34817 = arguments.length;
switch (G__34817) {
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
var c__30792__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto__){
return (function (){
var f__30793__auto__ = (function (){var switch__30625__auto__ = ((function (c__30792__auto__){
return (function (state_34832){
var state_val_34833 = (state_34832[(1)]);
if((state_val_34833 === (1))){
var state_34832__$1 = state_34832;
var statearr_34834_34875 = state_34832__$1;
(statearr_34834_34875[(2)] = null);

(statearr_34834_34875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (2))){
var state_34832__$1 = state_34832;
var statearr_34835_34876 = state_34832__$1;
(statearr_34835_34876[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (3))){
var inst_34830 = (state_34832[(2)]);
var state_34832__$1 = state_34832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34832__$1,inst_34830);
} else {
if((state_val_34833 === (4))){
var inst_34820 = func.call(null);
var inst_34821 = cljs.core.deref.call(null,time_out);
var inst_34822 = cljs.core.async.timeout.call(null,inst_34821);
var state_34832__$1 = (function (){var statearr_34837 = state_34832;
(statearr_34837[(7)] = inst_34820);

return statearr_34837;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34832__$1,(7),inst_34822);
} else {
if((state_val_34833 === (5))){
var state_34832__$1 = state_34832;
var statearr_34838_34877 = state_34832__$1;
(statearr_34838_34877[(2)] = null);

(statearr_34838_34877[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (6))){
var inst_34828 = (state_34832[(2)]);
var state_34832__$1 = state_34832;
var statearr_34839_34878 = state_34832__$1;
(statearr_34839_34878[(2)] = inst_34828);

(statearr_34839_34878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (7))){
var inst_34824 = (state_34832[(2)]);
var state_34832__$1 = (function (){var statearr_34840 = state_34832;
(statearr_34840[(8)] = inst_34824);

return statearr_34840;
})();
var statearr_34841_34879 = state_34832__$1;
(statearr_34841_34879[(2)] = null);

(statearr_34841_34879[(1)] = (2));


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
});})(c__30792__auto__))
;
return ((function (switch__30625__auto__,c__30792__auto__){
return (function() {
var view3d$client$state_machine__30626__auto__ = null;
var view3d$client$state_machine__30626__auto____0 = (function (){
var statearr_34842 = [null,null,null,null,null,null,null,null,null];
(statearr_34842[(0)] = view3d$client$state_machine__30626__auto__);

(statearr_34842[(1)] = (1));

return statearr_34842;
});
var view3d$client$state_machine__30626__auto____1 = (function (state_34832){
while(true){
var ret_value__30627__auto__ = (function (){try{while(true){
var result__30628__auto__ = switch__30625__auto__.call(null,state_34832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30628__auto__;
}
break;
}
}catch (e34843){if((e34843 instanceof Object)){
var ex__30629__auto__ = e34843;
var statearr_34844_34880 = state_34832;
(statearr_34844_34880[(5)] = ex__30629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34881 = state_34832;
state_34832 = G__34881;
continue;
} else {
return ret_value__30627__auto__;
}
break;
}
});
view3d$client$state_machine__30626__auto__ = function(state_34832){
switch(arguments.length){
case 0:
return view3d$client$state_machine__30626__auto____0.call(this);
case 1:
return view3d$client$state_machine__30626__auto____1.call(this,state_34832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__30626__auto____0;
view3d$client$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__30626__auto____1;
return view3d$client$state_machine__30626__auto__;
})()
;})(switch__30625__auto__,c__30792__auto__))
})();
var state__30794__auto__ = (function (){var statearr_34845 = f__30793__auto__.call(null);
(statearr_34845[(6)] = c__30792__auto__);

return statearr_34845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto__))
);

return c__30792__auto__;
});

view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__30792__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto__){
return (function (){
var f__30793__auto__ = (function (){var switch__30625__auto__ = ((function (c__30792__auto__){
return (function (state_34860){
var state_val_34861 = (state_34860[(1)]);
if((state_val_34861 === (1))){
var state_34860__$1 = state_34860;
var statearr_34862_34882 = state_34860__$1;
(statearr_34862_34882[(2)] = null);

(statearr_34862_34882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34861 === (2))){
var state_34860__$1 = state_34860;
var statearr_34863_34883 = state_34860__$1;
(statearr_34863_34883[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34861 === (3))){
var inst_34858 = (state_34860[(2)]);
var state_34860__$1 = state_34860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34860__$1,inst_34858);
} else {
if((state_val_34861 === (4))){
var inst_34848 = func.call(null,param);
var inst_34849 = cljs.core.deref.call(null,time_out);
var inst_34850 = cljs.core.async.timeout.call(null,inst_34849);
var state_34860__$1 = (function (){var statearr_34865 = state_34860;
(statearr_34865[(7)] = inst_34848);

return statearr_34865;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34860__$1,(7),inst_34850);
} else {
if((state_val_34861 === (5))){
var state_34860__$1 = state_34860;
var statearr_34866_34884 = state_34860__$1;
(statearr_34866_34884[(2)] = null);

(statearr_34866_34884[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34861 === (6))){
var inst_34856 = (state_34860[(2)]);
var state_34860__$1 = state_34860;
var statearr_34867_34885 = state_34860__$1;
(statearr_34867_34885[(2)] = inst_34856);

(statearr_34867_34885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34861 === (7))){
var inst_34852 = (state_34860[(2)]);
var state_34860__$1 = (function (){var statearr_34868 = state_34860;
(statearr_34868[(8)] = inst_34852);

return statearr_34868;
})();
var statearr_34869_34886 = state_34860__$1;
(statearr_34869_34886[(2)] = null);

(statearr_34869_34886[(1)] = (2));


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
});})(c__30792__auto__))
;
return ((function (switch__30625__auto__,c__30792__auto__){
return (function() {
var view3d$client$state_machine__30626__auto__ = null;
var view3d$client$state_machine__30626__auto____0 = (function (){
var statearr_34870 = [null,null,null,null,null,null,null,null,null];
(statearr_34870[(0)] = view3d$client$state_machine__30626__auto__);

(statearr_34870[(1)] = (1));

return statearr_34870;
});
var view3d$client$state_machine__30626__auto____1 = (function (state_34860){
while(true){
var ret_value__30627__auto__ = (function (){try{while(true){
var result__30628__auto__ = switch__30625__auto__.call(null,state_34860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30628__auto__;
}
break;
}
}catch (e34871){if((e34871 instanceof Object)){
var ex__30629__auto__ = e34871;
var statearr_34872_34887 = state_34860;
(statearr_34872_34887[(5)] = ex__30629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34888 = state_34860;
state_34860 = G__34888;
continue;
} else {
return ret_value__30627__auto__;
}
break;
}
});
view3d$client$state_machine__30626__auto__ = function(state_34860){
switch(arguments.length){
case 0:
return view3d$client$state_machine__30626__auto____0.call(this);
case 1:
return view3d$client$state_machine__30626__auto____1.call(this,state_34860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__30626__auto____0;
view3d$client$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__30626__auto____1;
return view3d$client$state_machine__30626__auto__;
})()
;})(switch__30625__auto__,c__30792__auto__))
})();
var state__30794__auto__ = (function (){var statearr_34873 = f__30793__auto__.call(null);
(statearr_34873[(6)] = c__30792__auto__);

return statearr_34873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto__))
);

return c__30792__auto__;
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
}catch (e34889){if((e34889 instanceof Error)){
var e = e34889;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e34889;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
view3d.client.handle_request = (function view3d$client$handle_request(request){
var temp__5733__auto___34896 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___34896)){
var vie_34897 = temp__5733__auto___34896;
view3d.client.view.call(null,vie_34897);
} else {
}

var temp__5733__auto___34898 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___34898)){
var pit_34899 = temp__5733__auto___34898;
view3d.client.pitch.call(null,pit_34899);
} else {
}

var temp__5733__auto___34900 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___34900)){
var rol_34901 = temp__5733__auto___34900;
view3d.client.roll.call(null,rol_34901);
} else {
}

var temp__5733__auto___34902 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___34902)){
var vec__34890_34903 = temp__5733__auto___34902;
var lat_34904 = cljs.core.nth.call(null,vec__34890_34903,(0),null);
var lon_34905 = cljs.core.nth.call(null,vec__34890_34903,(1),null);
var vec__34893_34906 = czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [geo.calc.radians.call(null,lat_34904),geo.calc.radians.call(null,lon_34905)], null),(0));
var __34907 = cljs.core.nth.call(null,vec__34893_34906,(0),null);
var __34908__$1 = cljs.core.nth.call(null,vec__34893_34906,(1),null);
var sh_34909 = cljs.core.nth.call(null,vec__34893_34906,(2),null);
cljs.core._vreset_BANG_.call(null,view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_34909 | (0))));
} else {
}

return view3d.client.response_request.call(null);
});
view3d.client.handle_vehicle = (function view3d$client$handle_vehicle(vehicle){
var vec__34910 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__34910,(0),null);
var lon = cljs.core.nth.call(null,vec__34910,(1),null);
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
var temp__5733__auto___34913 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5733__auto___34913)){
var vehicle_34914 = temp__5733__auto___34913;
view3d.client.handle_vehicle.call(null,vehicle_34914);
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
}catch (e34915){if((e34915 instanceof Error)){
var e = e34915;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e34915;

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
