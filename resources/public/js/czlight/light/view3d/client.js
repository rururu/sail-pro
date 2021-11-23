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
light.view3d.client.repeater = (function light$view3d$client$repeater(var_args){
var G__2775 = arguments.length;
switch (G__2775) {
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
return (function (state_2789){
var state_val_2790 = (state_2789[(1)]);
if((state_val_2790 === (1))){
var state_2789__$1 = state_2789;
var statearr_2791_2831 = state_2789__$1;
(statearr_2791_2831[(2)] = null);

(statearr_2791_2831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2790 === (2))){
var state_2789__$1 = state_2789;
var statearr_2792_2832 = state_2789__$1;
(statearr_2792_2832[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2790 === (3))){
var inst_2787 = (state_2789[(2)]);
var state_2789__$1 = state_2789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2789__$1,inst_2787);
} else {
if((state_val_2790 === (4))){
var inst_2778 = func.call(null);
var inst_2779 = cljs.core.async.timeout.call(null,time_out);
var state_2789__$1 = (function (){var statearr_2794 = state_2789;
(statearr_2794[(7)] = inst_2778);

return statearr_2794;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2789__$1,(7),inst_2779);
} else {
if((state_val_2790 === (5))){
var state_2789__$1 = state_2789;
var statearr_2795_2833 = state_2789__$1;
(statearr_2795_2833[(2)] = null);

(statearr_2795_2833[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2790 === (6))){
var inst_2785 = (state_2789[(2)]);
var state_2789__$1 = state_2789;
var statearr_2796_2834 = state_2789__$1;
(statearr_2796_2834[(2)] = inst_2785);

(statearr_2796_2834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2790 === (7))){
var inst_2781 = (state_2789[(2)]);
var state_2789__$1 = (function (){var statearr_2797 = state_2789;
(statearr_2797[(8)] = inst_2781);

return statearr_2797;
})();
var statearr_2798_2835 = state_2789__$1;
(statearr_2798_2835[(2)] = null);

(statearr_2798_2835[(1)] = (2));


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
var statearr_2799 = [null,null,null,null,null,null,null,null,null];
(statearr_2799[(0)] = light$view3d$client$state_machine__2620__auto__);

(statearr_2799[(1)] = (1));

return statearr_2799;
});
var light$view3d$client$state_machine__2620__auto____1 = (function (state_2789){
while(true){
var ret_value__2621__auto__ = (function (){try{while(true){
var result__2622__auto__ = switch__2619__auto__.call(null,state_2789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2622__auto__;
}
break;
}
}catch (e2800){if((e2800 instanceof Object)){
var ex__2623__auto__ = e2800;
var statearr_2801_2836 = state_2789;
(statearr_2801_2836[(5)] = ex__2623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2837 = state_2789;
state_2789 = G__2837;
continue;
} else {
return ret_value__2621__auto__;
}
break;
}
});
light$view3d$client$state_machine__2620__auto__ = function(state_2789){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2620__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2620__auto____1.call(this,state_2789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2620__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2620__auto____0;
light$view3d$client$state_machine__2620__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2620__auto____1;
return light$view3d$client$state_machine__2620__auto__;
})()
;})(switch__2619__auto__,c__2642__auto__))
})();
var state__2644__auto__ = (function (){var statearr_2802 = f__2643__auto__.call(null);
(statearr_2802[(6)] = c__2642__auto__);

return statearr_2802;
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
return (function (state_2816){
var state_val_2817 = (state_2816[(1)]);
if((state_val_2817 === (1))){
var state_2816__$1 = state_2816;
var statearr_2818_2838 = state_2816__$1;
(statearr_2818_2838[(2)] = null);

(statearr_2818_2838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2817 === (2))){
var state_2816__$1 = state_2816;
var statearr_2819_2839 = state_2816__$1;
(statearr_2819_2839[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2817 === (3))){
var inst_2814 = (state_2816[(2)]);
var state_2816__$1 = state_2816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2816__$1,inst_2814);
} else {
if((state_val_2817 === (4))){
var inst_2805 = func.call(null,param);
var inst_2806 = cljs.core.async.timeout.call(null,time_out);
var state_2816__$1 = (function (){var statearr_2821 = state_2816;
(statearr_2821[(7)] = inst_2805);

return statearr_2821;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2816__$1,(7),inst_2806);
} else {
if((state_val_2817 === (5))){
var state_2816__$1 = state_2816;
var statearr_2822_2840 = state_2816__$1;
(statearr_2822_2840[(2)] = null);

(statearr_2822_2840[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2817 === (6))){
var inst_2812 = (state_2816[(2)]);
var state_2816__$1 = state_2816;
var statearr_2823_2841 = state_2816__$1;
(statearr_2823_2841[(2)] = inst_2812);

(statearr_2823_2841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2817 === (7))){
var inst_2808 = (state_2816[(2)]);
var state_2816__$1 = (function (){var statearr_2824 = state_2816;
(statearr_2824[(8)] = inst_2808);

return statearr_2824;
})();
var statearr_2825_2842 = state_2816__$1;
(statearr_2825_2842[(2)] = null);

(statearr_2825_2842[(1)] = (2));


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
var statearr_2826 = [null,null,null,null,null,null,null,null,null];
(statearr_2826[(0)] = light$view3d$client$state_machine__2620__auto__);

(statearr_2826[(1)] = (1));

return statearr_2826;
});
var light$view3d$client$state_machine__2620__auto____1 = (function (state_2816){
while(true){
var ret_value__2621__auto__ = (function (){try{while(true){
var result__2622__auto__ = switch__2619__auto__.call(null,state_2816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2622__auto__;
}
break;
}
}catch (e2827){if((e2827 instanceof Object)){
var ex__2623__auto__ = e2827;
var statearr_2828_2843 = state_2816;
(statearr_2828_2843[(5)] = ex__2623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2844 = state_2816;
state_2816 = G__2844;
continue;
} else {
return ret_value__2621__auto__;
}
break;
}
});
light$view3d$client$state_machine__2620__auto__ = function(state_2816){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2620__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2620__auto____1.call(this,state_2816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2620__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2620__auto____0;
light$view3d$client$state_machine__2620__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2620__auto____1;
return light$view3d$client$state_machine__2620__auto__;
})()
;})(switch__2619__auto__,c__2642__auto__))
})();
var state__2644__auto__ = (function (){var statearr_2829 = f__2643__auto__.call(null);
(statearr_2829[(6)] = c__2642__auto__);

return statearr_2829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2644__auto__);
});})(c__2642__auto__))
);

return c__2642__auto__;
});

light.view3d.client.repeater.cljs$lang$maxFixedArity = 3;

light.view3d.client.repeater_BANG_ = (function light$view3d$client$repeater_BANG_(var_args){
var G__2846 = arguments.length;
switch (G__2846) {
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
return (function (state_2861){
var state_val_2862 = (state_2861[(1)]);
if((state_val_2862 === (1))){
var state_2861__$1 = state_2861;
var statearr_2863_2904 = state_2861__$1;
(statearr_2863_2904[(2)] = null);

(statearr_2863_2904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2862 === (2))){
var state_2861__$1 = state_2861;
var statearr_2864_2905 = state_2861__$1;
(statearr_2864_2905[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2862 === (3))){
var inst_2859 = (state_2861[(2)]);
var state_2861__$1 = state_2861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2861__$1,inst_2859);
} else {
if((state_val_2862 === (4))){
var inst_2849 = func.call(null);
var inst_2850 = cljs.core.deref.call(null,time_out);
var inst_2851 = cljs.core.async.timeout.call(null,inst_2850);
var state_2861__$1 = (function (){var statearr_2866 = state_2861;
(statearr_2866[(7)] = inst_2849);

return statearr_2866;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2861__$1,(7),inst_2851);
} else {
if((state_val_2862 === (5))){
var state_2861__$1 = state_2861;
var statearr_2867_2906 = state_2861__$1;
(statearr_2867_2906[(2)] = null);

(statearr_2867_2906[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2862 === (6))){
var inst_2857 = (state_2861[(2)]);
var state_2861__$1 = state_2861;
var statearr_2868_2907 = state_2861__$1;
(statearr_2868_2907[(2)] = inst_2857);

(statearr_2868_2907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2862 === (7))){
var inst_2853 = (state_2861[(2)]);
var state_2861__$1 = (function (){var statearr_2869 = state_2861;
(statearr_2869[(8)] = inst_2853);

return statearr_2869;
})();
var statearr_2870_2908 = state_2861__$1;
(statearr_2870_2908[(2)] = null);

(statearr_2870_2908[(1)] = (2));


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
var statearr_2871 = [null,null,null,null,null,null,null,null,null];
(statearr_2871[(0)] = light$view3d$client$state_machine__2620__auto__);

(statearr_2871[(1)] = (1));

return statearr_2871;
});
var light$view3d$client$state_machine__2620__auto____1 = (function (state_2861){
while(true){
var ret_value__2621__auto__ = (function (){try{while(true){
var result__2622__auto__ = switch__2619__auto__.call(null,state_2861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2622__auto__;
}
break;
}
}catch (e2872){if((e2872 instanceof Object)){
var ex__2623__auto__ = e2872;
var statearr_2873_2909 = state_2861;
(statearr_2873_2909[(5)] = ex__2623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2910 = state_2861;
state_2861 = G__2910;
continue;
} else {
return ret_value__2621__auto__;
}
break;
}
});
light$view3d$client$state_machine__2620__auto__ = function(state_2861){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2620__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2620__auto____1.call(this,state_2861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2620__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2620__auto____0;
light$view3d$client$state_machine__2620__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2620__auto____1;
return light$view3d$client$state_machine__2620__auto__;
})()
;})(switch__2619__auto__,c__2642__auto__))
})();
var state__2644__auto__ = (function (){var statearr_2874 = f__2643__auto__.call(null);
(statearr_2874[(6)] = c__2642__auto__);

return statearr_2874;
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
return (function (state_2889){
var state_val_2890 = (state_2889[(1)]);
if((state_val_2890 === (1))){
var state_2889__$1 = state_2889;
var statearr_2891_2911 = state_2889__$1;
(statearr_2891_2911[(2)] = null);

(statearr_2891_2911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2890 === (2))){
var state_2889__$1 = state_2889;
var statearr_2892_2912 = state_2889__$1;
(statearr_2892_2912[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2890 === (3))){
var inst_2887 = (state_2889[(2)]);
var state_2889__$1 = state_2889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2889__$1,inst_2887);
} else {
if((state_val_2890 === (4))){
var inst_2877 = func.call(null,param);
var inst_2878 = cljs.core.deref.call(null,time_out);
var inst_2879 = cljs.core.async.timeout.call(null,inst_2878);
var state_2889__$1 = (function (){var statearr_2894 = state_2889;
(statearr_2894[(7)] = inst_2877);

return statearr_2894;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2889__$1,(7),inst_2879);
} else {
if((state_val_2890 === (5))){
var state_2889__$1 = state_2889;
var statearr_2895_2913 = state_2889__$1;
(statearr_2895_2913[(2)] = null);

(statearr_2895_2913[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2890 === (6))){
var inst_2885 = (state_2889[(2)]);
var state_2889__$1 = state_2889;
var statearr_2896_2914 = state_2889__$1;
(statearr_2896_2914[(2)] = inst_2885);

(statearr_2896_2914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2890 === (7))){
var inst_2881 = (state_2889[(2)]);
var state_2889__$1 = (function (){var statearr_2897 = state_2889;
(statearr_2897[(8)] = inst_2881);

return statearr_2897;
})();
var statearr_2898_2915 = state_2889__$1;
(statearr_2898_2915[(2)] = null);

(statearr_2898_2915[(1)] = (2));


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
var statearr_2899 = [null,null,null,null,null,null,null,null,null];
(statearr_2899[(0)] = light$view3d$client$state_machine__2620__auto__);

(statearr_2899[(1)] = (1));

return statearr_2899;
});
var light$view3d$client$state_machine__2620__auto____1 = (function (state_2889){
while(true){
var ret_value__2621__auto__ = (function (){try{while(true){
var result__2622__auto__ = switch__2619__auto__.call(null,state_2889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2622__auto__;
}
break;
}
}catch (e2900){if((e2900 instanceof Object)){
var ex__2623__auto__ = e2900;
var statearr_2901_2916 = state_2889;
(statearr_2901_2916[(5)] = ex__2623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2917 = state_2889;
state_2889 = G__2917;
continue;
} else {
return ret_value__2621__auto__;
}
break;
}
});
light$view3d$client$state_machine__2620__auto__ = function(state_2889){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2620__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2620__auto____1.call(this,state_2889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2620__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2620__auto____0;
light$view3d$client$state_machine__2620__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2620__auto____1;
return light$view3d$client$state_machine__2620__auto__;
})()
;})(switch__2619__auto__,c__2642__auto__))
})();
var state__2644__auto__ = (function (){var statearr_2902 = f__2643__auto__.call(null);
(statearr_2902[(6)] = c__2642__auto__);

return statearr_2902;
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
var pred__2918 = cljs.core._EQ_;
var expr__2919 = mode;
if(cljs.core.truth_(pred__2918.call(null,(1),expr__2919))){
light.czm.core.zoom_in.call(null);

return zoom_on.call(null);
} else {
if(cljs.core.truth_(pred__2918.call(null,(-1),expr__2919))){
light.czm.core.zoom_out.call(null);

if(cljs.core.empty_QMARK_.call(null,light.czm.core.ZOOM)){
return zoom_off.call(null);
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__2918.call(null,(0),expr__2919))){
light.czm.core.zoom_no.call(null);

return zoom_off.call(null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__2919)].join('')));
}
}
}
});
light.view3d.client.zoom_amount = (function light$view3d$client$zoom_amount(amount){
return light.czm.core.zoom_amount.call(null,amount);
});
light.view3d.client.response_request = (function light$view3d$client$response_request(){
var resp = cljs.core.deref.call(null,light.view3d.client.RESPONSE);
if((!(cljs.core.empty_QMARK_.call(null,resp)))){
ajax.core.GET.call(null,"/response",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response","response",-1068424192),(function (){try{return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),resp);
}catch (e2921){if((e2921 instanceof Error)){
var e = e2921;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e2921;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),light.view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
light.view3d.client.handle_request = (function light$view3d$client$handle_request(request){
var temp__5733__auto___2928 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___2928)){
var vie_2929 = temp__5733__auto___2928;
light.view3d.client.view.call(null,vie_2929);
} else {
}

var temp__5733__auto___2930 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___2930)){
var pit_2931 = temp__5733__auto___2930;
light.view3d.client.pitch.call(null,pit_2931);
} else {
}

var temp__5733__auto___2932 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___2932)){
var rol_2933 = temp__5733__auto___2932;
light.view3d.client.roll.call(null,rol_2933);
} else {
}

var temp__5733__auto___2934 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___2934)){
var vec__2922_2935 = temp__5733__auto___2934;
var lat_2936 = cljs.core.nth.call(null,vec__2922_2935,(0),null);
var lon_2937 = cljs.core.nth.call(null,vec__2922_2935,(1),null);
var vec__2925_2938 = light.czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [light.geo.calc.radians.call(null,lat_2936),light.geo.calc.radians.call(null,lon_2937)], null),(0));
var __2939 = cljs.core.nth.call(null,vec__2925_2938,(0),null);
var __2940__$1 = cljs.core.nth.call(null,vec__2925_2938,(1),null);
var sh_2941 = cljs.core.nth.call(null,vec__2925_2938,(2),null);
cljs.core._vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_2941 | (0))));
} else {
}

return light.view3d.client.response_request.call(null);
});
light.view3d.client.handle_vehicle = (function light$view3d$client$handle_vehicle(vehicle){
var vec__2942 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__2942,(0),null);
var lon = cljs.core.nth.call(null,vec__2942,(1),null);
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

if(cljs.core.empty_QMARK_.call(null,light.czm.core.ZOOM)){
return light.czm.core.fly_to.call(null,lat,lon,(alt + vev),crs,1.2);
} else {
return null;
}
});
light.view3d.client.vehicle_hr = (function light$view3d$client$vehicle_hr(response){
var resp = light.view3d.client.read_transit.call(null,response);
var temp__5733__auto___2945 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5733__auto___2945)){
var vehicle_2946 = temp__5733__auto___2945;
light.view3d.client.handle_vehicle.call(null,vehicle_2946);
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
light.view3d.client.middle_controls = (function light$view3d$client$middle_controls(){
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
}catch (e2947){if((e2947 instanceof Error)){
var e = e2947;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e2947;

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
