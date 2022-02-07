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
var map__2772 = response;
var map__2772__$1 = (((((!((map__2772 == null))))?(((((map__2772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2772):map__2772);
var status = cljs.core.get.call(null,map__2772__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__2772__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
light.view3d.client.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
light.view3d.client.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
light.view3d.client.PORT = (8448);
light.view3d.client.ZOOM_STEP = (200);
light.view3d.client.format = (function light$view3d$client$format(var_args){
var args__4647__auto__ = [];
var len__4641__auto___2776 = arguments.length;
var i__4642__auto___2777 = (0);
while(true){
if((i__4642__auto___2777 < len__4641__auto___2776)){
args__4647__auto__.push((arguments[i__4642__auto___2777]));

var G__2778 = (i__4642__auto___2777 + (1));
i__4642__auto___2777 = G__2778;
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
light.view3d.client.format.cljs$lang$applyTo = (function (seq2774){
var G__2775 = cljs.core.first.call(null,seq2774);
var seq2774__$1 = cljs.core.next.call(null,seq2774);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2775,seq2774__$1);
});

light.view3d.client.repeater = (function light$view3d$client$repeater(var_args){
var G__2780 = arguments.length;
switch (G__2780) {
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
return (function (state_2794){
var state_val_2795 = (state_2794[(1)]);
if((state_val_2795 === (1))){
var state_2794__$1 = state_2794;
var statearr_2796_2836 = state_2794__$1;
(statearr_2796_2836[(2)] = null);

(statearr_2796_2836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2795 === (2))){
var state_2794__$1 = state_2794;
var statearr_2797_2837 = state_2794__$1;
(statearr_2797_2837[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2795 === (3))){
var inst_2792 = (state_2794[(2)]);
var state_2794__$1 = state_2794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2794__$1,inst_2792);
} else {
if((state_val_2795 === (4))){
var inst_2783 = func.call(null);
var inst_2784 = cljs.core.async.timeout.call(null,time_out);
var state_2794__$1 = (function (){var statearr_2799 = state_2794;
(statearr_2799[(7)] = inst_2783);

return statearr_2799;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2794__$1,(7),inst_2784);
} else {
if((state_val_2795 === (5))){
var state_2794__$1 = state_2794;
var statearr_2800_2838 = state_2794__$1;
(statearr_2800_2838[(2)] = null);

(statearr_2800_2838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2795 === (6))){
var inst_2790 = (state_2794[(2)]);
var state_2794__$1 = state_2794;
var statearr_2801_2839 = state_2794__$1;
(statearr_2801_2839[(2)] = inst_2790);

(statearr_2801_2839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2795 === (7))){
var inst_2786 = (state_2794[(2)]);
var state_2794__$1 = (function (){var statearr_2802 = state_2794;
(statearr_2802[(8)] = inst_2786);

return statearr_2802;
})();
var statearr_2803_2840 = state_2794__$1;
(statearr_2803_2840[(2)] = null);

(statearr_2803_2840[(1)] = (2));


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
var statearr_2804 = [null,null,null,null,null,null,null,null,null];
(statearr_2804[(0)] = light$view3d$client$state_machine__2620__auto__);

(statearr_2804[(1)] = (1));

return statearr_2804;
});
var light$view3d$client$state_machine__2620__auto____1 = (function (state_2794){
while(true){
var ret_value__2621__auto__ = (function (){try{while(true){
var result__2622__auto__ = switch__2619__auto__.call(null,state_2794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2622__auto__;
}
break;
}
}catch (e2805){if((e2805 instanceof Object)){
var ex__2623__auto__ = e2805;
var statearr_2806_2841 = state_2794;
(statearr_2806_2841[(5)] = ex__2623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2842 = state_2794;
state_2794 = G__2842;
continue;
} else {
return ret_value__2621__auto__;
}
break;
}
});
light$view3d$client$state_machine__2620__auto__ = function(state_2794){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2620__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2620__auto____1.call(this,state_2794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2620__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2620__auto____0;
light$view3d$client$state_machine__2620__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2620__auto____1;
return light$view3d$client$state_machine__2620__auto__;
})()
;})(switch__2619__auto__,c__2642__auto__))
})();
var state__2644__auto__ = (function (){var statearr_2807 = f__2643__auto__.call(null);
(statearr_2807[(6)] = c__2642__auto__);

return statearr_2807;
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
return (function (state_2821){
var state_val_2822 = (state_2821[(1)]);
if((state_val_2822 === (1))){
var state_2821__$1 = state_2821;
var statearr_2823_2843 = state_2821__$1;
(statearr_2823_2843[(2)] = null);

(statearr_2823_2843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2822 === (2))){
var state_2821__$1 = state_2821;
var statearr_2824_2844 = state_2821__$1;
(statearr_2824_2844[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2822 === (3))){
var inst_2819 = (state_2821[(2)]);
var state_2821__$1 = state_2821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2821__$1,inst_2819);
} else {
if((state_val_2822 === (4))){
var inst_2810 = func.call(null,param);
var inst_2811 = cljs.core.async.timeout.call(null,time_out);
var state_2821__$1 = (function (){var statearr_2826 = state_2821;
(statearr_2826[(7)] = inst_2810);

return statearr_2826;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2821__$1,(7),inst_2811);
} else {
if((state_val_2822 === (5))){
var state_2821__$1 = state_2821;
var statearr_2827_2845 = state_2821__$1;
(statearr_2827_2845[(2)] = null);

(statearr_2827_2845[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2822 === (6))){
var inst_2817 = (state_2821[(2)]);
var state_2821__$1 = state_2821;
var statearr_2828_2846 = state_2821__$1;
(statearr_2828_2846[(2)] = inst_2817);

(statearr_2828_2846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2822 === (7))){
var inst_2813 = (state_2821[(2)]);
var state_2821__$1 = (function (){var statearr_2829 = state_2821;
(statearr_2829[(8)] = inst_2813);

return statearr_2829;
})();
var statearr_2830_2847 = state_2821__$1;
(statearr_2830_2847[(2)] = null);

(statearr_2830_2847[(1)] = (2));


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
var statearr_2831 = [null,null,null,null,null,null,null,null,null];
(statearr_2831[(0)] = light$view3d$client$state_machine__2620__auto__);

(statearr_2831[(1)] = (1));

return statearr_2831;
});
var light$view3d$client$state_machine__2620__auto____1 = (function (state_2821){
while(true){
var ret_value__2621__auto__ = (function (){try{while(true){
var result__2622__auto__ = switch__2619__auto__.call(null,state_2821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2622__auto__;
}
break;
}
}catch (e2832){if((e2832 instanceof Object)){
var ex__2623__auto__ = e2832;
var statearr_2833_2848 = state_2821;
(statearr_2833_2848[(5)] = ex__2623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2849 = state_2821;
state_2821 = G__2849;
continue;
} else {
return ret_value__2621__auto__;
}
break;
}
});
light$view3d$client$state_machine__2620__auto__ = function(state_2821){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2620__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2620__auto____1.call(this,state_2821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2620__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2620__auto____0;
light$view3d$client$state_machine__2620__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2620__auto____1;
return light$view3d$client$state_machine__2620__auto__;
})()
;})(switch__2619__auto__,c__2642__auto__))
})();
var state__2644__auto__ = (function (){var statearr_2834 = f__2643__auto__.call(null);
(statearr_2834[(6)] = c__2642__auto__);

return statearr_2834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2644__auto__);
});})(c__2642__auto__))
);

return c__2642__auto__;
});

light.view3d.client.repeater.cljs$lang$maxFixedArity = 3;

light.view3d.client.repeater_BANG_ = (function light$view3d$client$repeater_BANG_(var_args){
var G__2851 = arguments.length;
switch (G__2851) {
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
return (function (state_2866){
var state_val_2867 = (state_2866[(1)]);
if((state_val_2867 === (1))){
var state_2866__$1 = state_2866;
var statearr_2868_2909 = state_2866__$1;
(statearr_2868_2909[(2)] = null);

(statearr_2868_2909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2867 === (2))){
var state_2866__$1 = state_2866;
var statearr_2869_2910 = state_2866__$1;
(statearr_2869_2910[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2867 === (3))){
var inst_2864 = (state_2866[(2)]);
var state_2866__$1 = state_2866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2866__$1,inst_2864);
} else {
if((state_val_2867 === (4))){
var inst_2854 = func.call(null);
var inst_2855 = cljs.core.deref.call(null,time_out);
var inst_2856 = cljs.core.async.timeout.call(null,inst_2855);
var state_2866__$1 = (function (){var statearr_2871 = state_2866;
(statearr_2871[(7)] = inst_2854);

return statearr_2871;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2866__$1,(7),inst_2856);
} else {
if((state_val_2867 === (5))){
var state_2866__$1 = state_2866;
var statearr_2872_2911 = state_2866__$1;
(statearr_2872_2911[(2)] = null);

(statearr_2872_2911[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2867 === (6))){
var inst_2862 = (state_2866[(2)]);
var state_2866__$1 = state_2866;
var statearr_2873_2912 = state_2866__$1;
(statearr_2873_2912[(2)] = inst_2862);

(statearr_2873_2912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2867 === (7))){
var inst_2858 = (state_2866[(2)]);
var state_2866__$1 = (function (){var statearr_2874 = state_2866;
(statearr_2874[(8)] = inst_2858);

return statearr_2874;
})();
var statearr_2875_2913 = state_2866__$1;
(statearr_2875_2913[(2)] = null);

(statearr_2875_2913[(1)] = (2));


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
var statearr_2876 = [null,null,null,null,null,null,null,null,null];
(statearr_2876[(0)] = light$view3d$client$state_machine__2620__auto__);

(statearr_2876[(1)] = (1));

return statearr_2876;
});
var light$view3d$client$state_machine__2620__auto____1 = (function (state_2866){
while(true){
var ret_value__2621__auto__ = (function (){try{while(true){
var result__2622__auto__ = switch__2619__auto__.call(null,state_2866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2622__auto__;
}
break;
}
}catch (e2877){if((e2877 instanceof Object)){
var ex__2623__auto__ = e2877;
var statearr_2878_2914 = state_2866;
(statearr_2878_2914[(5)] = ex__2623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2915 = state_2866;
state_2866 = G__2915;
continue;
} else {
return ret_value__2621__auto__;
}
break;
}
});
light$view3d$client$state_machine__2620__auto__ = function(state_2866){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2620__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2620__auto____1.call(this,state_2866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2620__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2620__auto____0;
light$view3d$client$state_machine__2620__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2620__auto____1;
return light$view3d$client$state_machine__2620__auto__;
})()
;})(switch__2619__auto__,c__2642__auto__))
})();
var state__2644__auto__ = (function (){var statearr_2879 = f__2643__auto__.call(null);
(statearr_2879[(6)] = c__2642__auto__);

return statearr_2879;
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
return (function (state_2894){
var state_val_2895 = (state_2894[(1)]);
if((state_val_2895 === (1))){
var state_2894__$1 = state_2894;
var statearr_2896_2916 = state_2894__$1;
(statearr_2896_2916[(2)] = null);

(statearr_2896_2916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2895 === (2))){
var state_2894__$1 = state_2894;
var statearr_2897_2917 = state_2894__$1;
(statearr_2897_2917[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2895 === (3))){
var inst_2892 = (state_2894[(2)]);
var state_2894__$1 = state_2894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2894__$1,inst_2892);
} else {
if((state_val_2895 === (4))){
var inst_2882 = func.call(null,param);
var inst_2883 = cljs.core.deref.call(null,time_out);
var inst_2884 = cljs.core.async.timeout.call(null,inst_2883);
var state_2894__$1 = (function (){var statearr_2899 = state_2894;
(statearr_2899[(7)] = inst_2882);

return statearr_2899;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2894__$1,(7),inst_2884);
} else {
if((state_val_2895 === (5))){
var state_2894__$1 = state_2894;
var statearr_2900_2918 = state_2894__$1;
(statearr_2900_2918[(2)] = null);

(statearr_2900_2918[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2895 === (6))){
var inst_2890 = (state_2894[(2)]);
var state_2894__$1 = state_2894;
var statearr_2901_2919 = state_2894__$1;
(statearr_2901_2919[(2)] = inst_2890);

(statearr_2901_2919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2895 === (7))){
var inst_2886 = (state_2894[(2)]);
var state_2894__$1 = (function (){var statearr_2902 = state_2894;
(statearr_2902[(8)] = inst_2886);

return statearr_2902;
})();
var statearr_2903_2920 = state_2894__$1;
(statearr_2903_2920[(2)] = null);

(statearr_2903_2920[(1)] = (2));


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
var statearr_2904 = [null,null,null,null,null,null,null,null,null];
(statearr_2904[(0)] = light$view3d$client$state_machine__2620__auto__);

(statearr_2904[(1)] = (1));

return statearr_2904;
});
var light$view3d$client$state_machine__2620__auto____1 = (function (state_2894){
while(true){
var ret_value__2621__auto__ = (function (){try{while(true){
var result__2622__auto__ = switch__2619__auto__.call(null,state_2894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2622__auto__;
}
break;
}
}catch (e2905){if((e2905 instanceof Object)){
var ex__2623__auto__ = e2905;
var statearr_2906_2921 = state_2894;
(statearr_2906_2921[(5)] = ex__2623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2922 = state_2894;
state_2894 = G__2922;
continue;
} else {
return ret_value__2621__auto__;
}
break;
}
});
light$view3d$client$state_machine__2620__auto__ = function(state_2894){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2620__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2620__auto____1.call(this,state_2894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2620__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2620__auto____0;
light$view3d$client$state_machine__2620__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2620__auto____1;
return light$view3d$client$state_machine__2620__auto__;
})()
;})(switch__2619__auto__,c__2642__auto__))
})();
var state__2644__auto__ = (function (){var statearr_2907 = f__2643__auto__.call(null);
(statearr_2907[(6)] = c__2642__auto__);

return statearr_2907;
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
light.view3d.client.zoom_step = (function light$view3d$client$zoom_step(s){
light.view3d.client.ZOOM_STEP = light.view3d.client.num_val.call(null,s);

return light.view3d.client.set_html_BANG_.call(null,"zoostepval",light.view3d.client.zoom_format.call(null,light.view3d.client.ZOOM_STEP));
});
light.view3d.client.zoom_amount = (function light$view3d$client$zoom_amount(amount){
var v = (light.view3d.client.num_val.call(null,amount) * light.view3d.client.ZOOM_STEP);
light.czm.core.zoom.call(null,v);

return light.view3d.client.set_html_BANG_.call(null,"zooval",light.view3d.client.zoom_format.call(null,v));
});
light.view3d.client.response_request = (function light$view3d$client$response_request(){
var resp = cljs.core.deref.call(null,light.view3d.client.RESPONSE);
if((!(cljs.core.empty_QMARK_.call(null,resp)))){
ajax.core.GET.call(null,"/response",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response","response",-1068424192),(function (){try{return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),resp);
}catch (e2923){if((e2923 instanceof Error)){
var e = e2923;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e2923;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),light.view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
light.view3d.client.handle_request = (function light$view3d$client$handle_request(request){
var temp__5733__auto___2930 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___2930)){
var vie_2931 = temp__5733__auto___2930;
light.view3d.client.view.call(null,vie_2931);
} else {
}

var temp__5733__auto___2932 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___2932)){
var pit_2933 = temp__5733__auto___2932;
light.view3d.client.pitch.call(null,pit_2933);
} else {
}

var temp__5733__auto___2934 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___2934)){
var rol_2935 = temp__5733__auto___2934;
light.view3d.client.roll.call(null,rol_2935);
} else {
}

var temp__5733__auto___2936 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___2936)){
var vec__2924_2937 = temp__5733__auto___2936;
var lat_2938 = cljs.core.nth.call(null,vec__2924_2937,(0),null);
var lon_2939 = cljs.core.nth.call(null,vec__2924_2937,(1),null);
var vec__2927_2940 = light.czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [light.geo.calc.radians.call(null,lat_2938),light.geo.calc.radians.call(null,lon_2939)], null),(0));
var __2941 = cljs.core.nth.call(null,vec__2927_2940,(0),null);
var __2942__$1 = cljs.core.nth.call(null,vec__2927_2940,(1),null);
var sh_2943 = cljs.core.nth.call(null,vec__2927_2940,(2),null);
cljs.core._vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_2943 | (0))));
} else {
}

return light.view3d.client.response_request.call(null);
});
light.view3d.client.handle_vehicle = (function light$view3d$client$handle_vehicle(vehicle){
var vec__2944 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__2944,(0),null);
var lon = cljs.core.nth.call(null,vec__2944,(1),null);
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
var temp__5733__auto___2947 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5733__auto___2947)){
var vehicle_2948 = temp__5733__auto___2947;
light.view3d.client.handle_vehicle.call(null,vehicle_2948);
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

light.view3d.client.set_html_BANG_.call(null,"zoom","zoom");

light.view3d.client.set_html_BANG_.call(null,"zoostepmin","1 m");

light.view3d.client.set_html_BANG_.call(null,"zoom-step","<input type='range' style='width:150px' id='zst'\n               min='1' value='100' max='10000'\n               oninput='javascript:light.view3d.client.zoom_step(this.value)'>");

light.view3d.client.set_html_BANG_.call(null,"zoostepmax","10 km");

light.view3d.client.set_html_BANG_.call(null,"zoom-amount","<input type='range' style='width:220px' id='zam'\n               min='0' value='0' max='100'\n               oninput='javascript:light.view3d.client.zoom_amount(this.value)'>");

light.view3d.client.set_html_BANG_.call(null,"zoostepval","100 m");

return light.view3d.client.set_html_BANG_.call(null,"zooval","0 m");
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
}catch (e2949){if((e2949 instanceof Error)){
var e = e2949;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e2949;

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
