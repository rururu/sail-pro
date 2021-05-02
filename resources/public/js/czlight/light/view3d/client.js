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
light.view3d.client.VEHICLE = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"\u0410\u0432\u0440\u043E\u0440\u0430",new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),(30)], null),new cljs.core.Keyword(null,"altitude","altitude",463588637),(4000),new cljs.core.Keyword(null,"speed","speed",1257663751),(160),new cljs.core.Keyword(null,"course","course",1455432948),(270),new cljs.core.Keyword(null,"view-elevation","view-elevation",-681076231),(4)], null));
light.view3d.client.error_handler = (function light$view3d$client$error_handler(response){
var map__2803 = response;
var map__2803__$1 = (((((!((map__2803 == null))))?(((((map__2803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2803):map__2803);
var status = cljs.core.get.call(null,map__2803__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__2803__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
light.view3d.client.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
light.view3d.client.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
light.view3d.client.PORT = (8448);
light.view3d.client.repeater = (function light$view3d$client$repeater(var_args){
var G__2806 = arguments.length;
switch (G__2806) {
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
var c__2673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2673__auto__){
return (function (){
var f__2674__auto__ = (function (){var switch__2650__auto__ = ((function (c__2673__auto__){
return (function (state_2820){
var state_val_2821 = (state_2820[(1)]);
if((state_val_2821 === (1))){
var state_2820__$1 = state_2820;
var statearr_2822_2862 = state_2820__$1;
(statearr_2822_2862[(2)] = null);

(statearr_2822_2862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2821 === (2))){
var state_2820__$1 = state_2820;
var statearr_2823_2863 = state_2820__$1;
(statearr_2823_2863[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2821 === (3))){
var inst_2818 = (state_2820[(2)]);
var state_2820__$1 = state_2820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2820__$1,inst_2818);
} else {
if((state_val_2821 === (4))){
var inst_2809 = func.call(null);
var inst_2810 = cljs.core.async.timeout.call(null,time_out);
var state_2820__$1 = (function (){var statearr_2825 = state_2820;
(statearr_2825[(7)] = inst_2809);

return statearr_2825;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2820__$1,(7),inst_2810);
} else {
if((state_val_2821 === (5))){
var state_2820__$1 = state_2820;
var statearr_2826_2864 = state_2820__$1;
(statearr_2826_2864[(2)] = null);

(statearr_2826_2864[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2821 === (6))){
var inst_2816 = (state_2820[(2)]);
var state_2820__$1 = state_2820;
var statearr_2827_2865 = state_2820__$1;
(statearr_2827_2865[(2)] = inst_2816);

(statearr_2827_2865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2821 === (7))){
var inst_2812 = (state_2820[(2)]);
var state_2820__$1 = (function (){var statearr_2828 = state_2820;
(statearr_2828[(8)] = inst_2812);

return statearr_2828;
})();
var statearr_2829_2866 = state_2820__$1;
(statearr_2829_2866[(2)] = null);

(statearr_2829_2866[(1)] = (2));


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
});})(c__2673__auto__))
;
return ((function (switch__2650__auto__,c__2673__auto__){
return (function() {
var light$view3d$client$state_machine__2651__auto__ = null;
var light$view3d$client$state_machine__2651__auto____0 = (function (){
var statearr_2830 = [null,null,null,null,null,null,null,null,null];
(statearr_2830[(0)] = light$view3d$client$state_machine__2651__auto__);

(statearr_2830[(1)] = (1));

return statearr_2830;
});
var light$view3d$client$state_machine__2651__auto____1 = (function (state_2820){
while(true){
var ret_value__2652__auto__ = (function (){try{while(true){
var result__2653__auto__ = switch__2650__auto__.call(null,state_2820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2653__auto__;
}
break;
}
}catch (e2831){if((e2831 instanceof Object)){
var ex__2654__auto__ = e2831;
var statearr_2832_2867 = state_2820;
(statearr_2832_2867[(5)] = ex__2654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2868 = state_2820;
state_2820 = G__2868;
continue;
} else {
return ret_value__2652__auto__;
}
break;
}
});
light$view3d$client$state_machine__2651__auto__ = function(state_2820){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2651__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2651__auto____1.call(this,state_2820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2651__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2651__auto____0;
light$view3d$client$state_machine__2651__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2651__auto____1;
return light$view3d$client$state_machine__2651__auto__;
})()
;})(switch__2650__auto__,c__2673__auto__))
})();
var state__2675__auto__ = (function (){var statearr_2833 = f__2674__auto__.call(null);
(statearr_2833[(6)] = c__2673__auto__);

return statearr_2833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2675__auto__);
});})(c__2673__auto__))
);

return c__2673__auto__;
});

light.view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__2673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2673__auto__){
return (function (){
var f__2674__auto__ = (function (){var switch__2650__auto__ = ((function (c__2673__auto__){
return (function (state_2847){
var state_val_2848 = (state_2847[(1)]);
if((state_val_2848 === (1))){
var state_2847__$1 = state_2847;
var statearr_2849_2869 = state_2847__$1;
(statearr_2849_2869[(2)] = null);

(statearr_2849_2869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2848 === (2))){
var state_2847__$1 = state_2847;
var statearr_2850_2870 = state_2847__$1;
(statearr_2850_2870[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2848 === (3))){
var inst_2845 = (state_2847[(2)]);
var state_2847__$1 = state_2847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2847__$1,inst_2845);
} else {
if((state_val_2848 === (4))){
var inst_2836 = func.call(null,param);
var inst_2837 = cljs.core.async.timeout.call(null,time_out);
var state_2847__$1 = (function (){var statearr_2852 = state_2847;
(statearr_2852[(7)] = inst_2836);

return statearr_2852;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2847__$1,(7),inst_2837);
} else {
if((state_val_2848 === (5))){
var state_2847__$1 = state_2847;
var statearr_2853_2871 = state_2847__$1;
(statearr_2853_2871[(2)] = null);

(statearr_2853_2871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2848 === (6))){
var inst_2843 = (state_2847[(2)]);
var state_2847__$1 = state_2847;
var statearr_2854_2872 = state_2847__$1;
(statearr_2854_2872[(2)] = inst_2843);

(statearr_2854_2872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2848 === (7))){
var inst_2839 = (state_2847[(2)]);
var state_2847__$1 = (function (){var statearr_2855 = state_2847;
(statearr_2855[(8)] = inst_2839);

return statearr_2855;
})();
var statearr_2856_2873 = state_2847__$1;
(statearr_2856_2873[(2)] = null);

(statearr_2856_2873[(1)] = (2));


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
});})(c__2673__auto__))
;
return ((function (switch__2650__auto__,c__2673__auto__){
return (function() {
var light$view3d$client$state_machine__2651__auto__ = null;
var light$view3d$client$state_machine__2651__auto____0 = (function (){
var statearr_2857 = [null,null,null,null,null,null,null,null,null];
(statearr_2857[(0)] = light$view3d$client$state_machine__2651__auto__);

(statearr_2857[(1)] = (1));

return statearr_2857;
});
var light$view3d$client$state_machine__2651__auto____1 = (function (state_2847){
while(true){
var ret_value__2652__auto__ = (function (){try{while(true){
var result__2653__auto__ = switch__2650__auto__.call(null,state_2847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2653__auto__;
}
break;
}
}catch (e2858){if((e2858 instanceof Object)){
var ex__2654__auto__ = e2858;
var statearr_2859_2874 = state_2847;
(statearr_2859_2874[(5)] = ex__2654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2875 = state_2847;
state_2847 = G__2875;
continue;
} else {
return ret_value__2652__auto__;
}
break;
}
});
light$view3d$client$state_machine__2651__auto__ = function(state_2847){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2651__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2651__auto____1.call(this,state_2847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2651__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2651__auto____0;
light$view3d$client$state_machine__2651__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2651__auto____1;
return light$view3d$client$state_machine__2651__auto__;
})()
;})(switch__2650__auto__,c__2673__auto__))
})();
var state__2675__auto__ = (function (){var statearr_2860 = f__2674__auto__.call(null);
(statearr_2860[(6)] = c__2673__auto__);

return statearr_2860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2675__auto__);
});})(c__2673__auto__))
);

return c__2673__auto__;
});

light.view3d.client.repeater.cljs$lang$maxFixedArity = 3;

light.view3d.client.repeater_BANG_ = (function light$view3d$client$repeater_BANG_(var_args){
var G__2877 = arguments.length;
switch (G__2877) {
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
var c__2673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2673__auto__){
return (function (){
var f__2674__auto__ = (function (){var switch__2650__auto__ = ((function (c__2673__auto__){
return (function (state_2892){
var state_val_2893 = (state_2892[(1)]);
if((state_val_2893 === (1))){
var state_2892__$1 = state_2892;
var statearr_2894_2935 = state_2892__$1;
(statearr_2894_2935[(2)] = null);

(statearr_2894_2935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2893 === (2))){
var state_2892__$1 = state_2892;
var statearr_2895_2936 = state_2892__$1;
(statearr_2895_2936[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2893 === (3))){
var inst_2890 = (state_2892[(2)]);
var state_2892__$1 = state_2892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2892__$1,inst_2890);
} else {
if((state_val_2893 === (4))){
var inst_2880 = func.call(null);
var inst_2881 = cljs.core.deref.call(null,time_out);
var inst_2882 = cljs.core.async.timeout.call(null,inst_2881);
var state_2892__$1 = (function (){var statearr_2897 = state_2892;
(statearr_2897[(7)] = inst_2880);

return statearr_2897;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2892__$1,(7),inst_2882);
} else {
if((state_val_2893 === (5))){
var state_2892__$1 = state_2892;
var statearr_2898_2937 = state_2892__$1;
(statearr_2898_2937[(2)] = null);

(statearr_2898_2937[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2893 === (6))){
var inst_2888 = (state_2892[(2)]);
var state_2892__$1 = state_2892;
var statearr_2899_2938 = state_2892__$1;
(statearr_2899_2938[(2)] = inst_2888);

(statearr_2899_2938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2893 === (7))){
var inst_2884 = (state_2892[(2)]);
var state_2892__$1 = (function (){var statearr_2900 = state_2892;
(statearr_2900[(8)] = inst_2884);

return statearr_2900;
})();
var statearr_2901_2939 = state_2892__$1;
(statearr_2901_2939[(2)] = null);

(statearr_2901_2939[(1)] = (2));


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
});})(c__2673__auto__))
;
return ((function (switch__2650__auto__,c__2673__auto__){
return (function() {
var light$view3d$client$state_machine__2651__auto__ = null;
var light$view3d$client$state_machine__2651__auto____0 = (function (){
var statearr_2902 = [null,null,null,null,null,null,null,null,null];
(statearr_2902[(0)] = light$view3d$client$state_machine__2651__auto__);

(statearr_2902[(1)] = (1));

return statearr_2902;
});
var light$view3d$client$state_machine__2651__auto____1 = (function (state_2892){
while(true){
var ret_value__2652__auto__ = (function (){try{while(true){
var result__2653__auto__ = switch__2650__auto__.call(null,state_2892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2653__auto__;
}
break;
}
}catch (e2903){if((e2903 instanceof Object)){
var ex__2654__auto__ = e2903;
var statearr_2904_2940 = state_2892;
(statearr_2904_2940[(5)] = ex__2654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2941 = state_2892;
state_2892 = G__2941;
continue;
} else {
return ret_value__2652__auto__;
}
break;
}
});
light$view3d$client$state_machine__2651__auto__ = function(state_2892){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2651__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2651__auto____1.call(this,state_2892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2651__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2651__auto____0;
light$view3d$client$state_machine__2651__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2651__auto____1;
return light$view3d$client$state_machine__2651__auto__;
})()
;})(switch__2650__auto__,c__2673__auto__))
})();
var state__2675__auto__ = (function (){var statearr_2905 = f__2674__auto__.call(null);
(statearr_2905[(6)] = c__2673__auto__);

return statearr_2905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2675__auto__);
});})(c__2673__auto__))
);

return c__2673__auto__;
});

light.view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__2673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2673__auto__){
return (function (){
var f__2674__auto__ = (function (){var switch__2650__auto__ = ((function (c__2673__auto__){
return (function (state_2920){
var state_val_2921 = (state_2920[(1)]);
if((state_val_2921 === (1))){
var state_2920__$1 = state_2920;
var statearr_2922_2942 = state_2920__$1;
(statearr_2922_2942[(2)] = null);

(statearr_2922_2942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2921 === (2))){
var state_2920__$1 = state_2920;
var statearr_2923_2943 = state_2920__$1;
(statearr_2923_2943[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2921 === (3))){
var inst_2918 = (state_2920[(2)]);
var state_2920__$1 = state_2920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2920__$1,inst_2918);
} else {
if((state_val_2921 === (4))){
var inst_2908 = func.call(null,param);
var inst_2909 = cljs.core.deref.call(null,time_out);
var inst_2910 = cljs.core.async.timeout.call(null,inst_2909);
var state_2920__$1 = (function (){var statearr_2925 = state_2920;
(statearr_2925[(7)] = inst_2908);

return statearr_2925;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2920__$1,(7),inst_2910);
} else {
if((state_val_2921 === (5))){
var state_2920__$1 = state_2920;
var statearr_2926_2944 = state_2920__$1;
(statearr_2926_2944[(2)] = null);

(statearr_2926_2944[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2921 === (6))){
var inst_2916 = (state_2920[(2)]);
var state_2920__$1 = state_2920;
var statearr_2927_2945 = state_2920__$1;
(statearr_2927_2945[(2)] = inst_2916);

(statearr_2927_2945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2921 === (7))){
var inst_2912 = (state_2920[(2)]);
var state_2920__$1 = (function (){var statearr_2928 = state_2920;
(statearr_2928[(8)] = inst_2912);

return statearr_2928;
})();
var statearr_2929_2946 = state_2920__$1;
(statearr_2929_2946[(2)] = null);

(statearr_2929_2946[(1)] = (2));


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
});})(c__2673__auto__))
;
return ((function (switch__2650__auto__,c__2673__auto__){
return (function() {
var light$view3d$client$state_machine__2651__auto__ = null;
var light$view3d$client$state_machine__2651__auto____0 = (function (){
var statearr_2930 = [null,null,null,null,null,null,null,null,null];
(statearr_2930[(0)] = light$view3d$client$state_machine__2651__auto__);

(statearr_2930[(1)] = (1));

return statearr_2930;
});
var light$view3d$client$state_machine__2651__auto____1 = (function (state_2920){
while(true){
var ret_value__2652__auto__ = (function (){try{while(true){
var result__2653__auto__ = switch__2650__auto__.call(null,state_2920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2653__auto__;
}
break;
}
}catch (e2931){if((e2931 instanceof Object)){
var ex__2654__auto__ = e2931;
var statearr_2932_2947 = state_2920;
(statearr_2932_2947[(5)] = ex__2654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2948 = state_2920;
state_2920 = G__2948;
continue;
} else {
return ret_value__2652__auto__;
}
break;
}
});
light$view3d$client$state_machine__2651__auto__ = function(state_2920){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2651__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2651__auto____1.call(this,state_2920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2651__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2651__auto____0;
light$view3d$client$state_machine__2651__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2651__auto____1;
return light$view3d$client$state_machine__2651__auto__;
})()
;})(switch__2650__auto__,c__2673__auto__))
})();
var state__2675__auto__ = (function (){var statearr_2933 = f__2674__auto__.call(null);
(statearr_2933[(6)] = c__2673__auto__);

return statearr_2933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2675__auto__);
});})(c__2673__auto__))
);

return c__2673__auto__;
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
}catch (e2949){if((e2949 instanceof Error)){
var e = e2949;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e2949;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),light.view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
light.view3d.client.handle_request = (function light$view3d$client$handle_request(request){
var temp__5733__auto___2956 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___2956)){
var vie_2957 = temp__5733__auto___2956;
light.view3d.client.view.call(null,vie_2957);
} else {
}

var temp__5733__auto___2958 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___2958)){
var pit_2959 = temp__5733__auto___2958;
light.view3d.client.pitch.call(null,pit_2959);
} else {
}

var temp__5733__auto___2960 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___2960)){
var rol_2961 = temp__5733__auto___2960;
light.view3d.client.roll.call(null,rol_2961);
} else {
}

var temp__5733__auto___2962 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___2962)){
var vec__2950_2963 = temp__5733__auto___2962;
var lat_2964 = cljs.core.nth.call(null,vec__2950_2963,(0),null);
var lon_2965 = cljs.core.nth.call(null,vec__2950_2963,(1),null);
var vec__2953_2966 = light.czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [light.geo.calc.radians.call(null,lat_2964),light.geo.calc.radians.call(null,lon_2965)], null),(0));
var __2967 = cljs.core.nth.call(null,vec__2953_2966,(0),null);
var __2968__$1 = cljs.core.nth.call(null,vec__2953_2966,(1),null);
var sh_2969 = cljs.core.nth.call(null,vec__2953_2966,(2),null);
cljs.core._vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_2969 | (0))));
} else {
}

return light.view3d.client.response_request.call(null);
});
light.view3d.client.handle_vehicle = (function light$view3d$client$handle_vehicle(vehicle){
var vec__2970 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__2970,(0),null);
var lon = cljs.core.nth.call(null,vec__2970,(1),null);
var alt = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle);
var vev = new cljs.core.Keyword(null,"view-elevation","view-elevation",-681076231).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,light.view3d.client.VEHICLE));
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
var temp__5733__auto___2973 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5733__auto___2973)){
var vehicle_2974 = temp__5733__auto___2973;
light.view3d.client.handle_vehicle.call(null,vehicle_2974);
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

light.view3d.client.set_html_BANG_.call(null,"view","View:");

light.view3d.client.set_html_BANG_.call(null,"view-fld",(0));

light.view3d.client.set_html_BANG_.call(null,"view-sld","<input type='range' style='width:150px' id='roll-vals'\n               min='-180' value='0' max='180'\n               oninput='javascript:light.view3d.client.view(this.value)'>");

light.view3d.client.set_html_BANG_.call(null,"pitch","Pitch:");

light.view3d.client.set_html_BANG_.call(null,"pitch-fld",(0));

light.view3d.client.set_html_BANG_.call(null,"pitch-sld","<input type='range' style='width:150px' id='pitch-vals'\n               min='-90' value='0' max='90'\n               oninput='javascript:light.view3d.client.pitch(this.value)'>");

light.view3d.client.set_html_BANG_.call(null,"roll","Roll:");

light.view3d.client.set_html_BANG_.call(null,"roll-fld",(0));

light.view3d.client.set_html_BANG_.call(null,"roll-sld","<input type='range' style='width:150px' id='roll-vals'\n               min='-180' value='0' max='180'\n               oninput='javascript:light.view3d.client.roll(this.value)'>");

light.view3d.client.set_html_BANG_.call(null,"elev","Elevation:");

return light.view3d.client.set_html_BANG_.call(null,"elev-fld","<input value='4' style='width:144px' id='input-elev'\n                     onchange='javascript:light.view3d.client.elev(this.value)'>");
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
}catch (e2975){if((e2975 instanceof Error)){
var e = e2975;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e2975;

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
