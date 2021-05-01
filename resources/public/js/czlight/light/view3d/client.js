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
var map__22878 = response;
var map__22878__$1 = (((((!((map__22878 == null))))?(((((map__22878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22878):map__22878);
var status = cljs.core.get.call(null,map__22878__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__22878__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
light.view3d.client.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
light.view3d.client.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
light.view3d.client.PORT = (8448);
light.view3d.client.repeater = (function light$view3d$client$repeater(var_args){
var G__22881 = arguments.length;
switch (G__22881) {
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
var c__22748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22748__auto__){
return (function (){
var f__22749__auto__ = (function (){var switch__22725__auto__ = ((function (c__22748__auto__){
return (function (state_22895){
var state_val_22896 = (state_22895[(1)]);
if((state_val_22896 === (1))){
var state_22895__$1 = state_22895;
var statearr_22897_22937 = state_22895__$1;
(statearr_22897_22937[(2)] = null);

(statearr_22897_22937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22896 === (2))){
var state_22895__$1 = state_22895;
var statearr_22898_22938 = state_22895__$1;
(statearr_22898_22938[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22896 === (3))){
var inst_22893 = (state_22895[(2)]);
var state_22895__$1 = state_22895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22895__$1,inst_22893);
} else {
if((state_val_22896 === (4))){
var inst_22884 = func.call(null);
var inst_22885 = cljs.core.async.timeout.call(null,time_out);
var state_22895__$1 = (function (){var statearr_22900 = state_22895;
(statearr_22900[(7)] = inst_22884);

return statearr_22900;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22895__$1,(7),inst_22885);
} else {
if((state_val_22896 === (5))){
var state_22895__$1 = state_22895;
var statearr_22901_22939 = state_22895__$1;
(statearr_22901_22939[(2)] = null);

(statearr_22901_22939[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22896 === (6))){
var inst_22891 = (state_22895[(2)]);
var state_22895__$1 = state_22895;
var statearr_22902_22940 = state_22895__$1;
(statearr_22902_22940[(2)] = inst_22891);

(statearr_22902_22940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22896 === (7))){
var inst_22887 = (state_22895[(2)]);
var state_22895__$1 = (function (){var statearr_22903 = state_22895;
(statearr_22903[(8)] = inst_22887);

return statearr_22903;
})();
var statearr_22904_22941 = state_22895__$1;
(statearr_22904_22941[(2)] = null);

(statearr_22904_22941[(1)] = (2));


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
});})(c__22748__auto__))
;
return ((function (switch__22725__auto__,c__22748__auto__){
return (function() {
var light$view3d$client$state_machine__22726__auto__ = null;
var light$view3d$client$state_machine__22726__auto____0 = (function (){
var statearr_22905 = [null,null,null,null,null,null,null,null,null];
(statearr_22905[(0)] = light$view3d$client$state_machine__22726__auto__);

(statearr_22905[(1)] = (1));

return statearr_22905;
});
var light$view3d$client$state_machine__22726__auto____1 = (function (state_22895){
while(true){
var ret_value__22727__auto__ = (function (){try{while(true){
var result__22728__auto__ = switch__22725__auto__.call(null,state_22895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22728__auto__;
}
break;
}
}catch (e22906){if((e22906 instanceof Object)){
var ex__22729__auto__ = e22906;
var statearr_22907_22942 = state_22895;
(statearr_22907_22942[(5)] = ex__22729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22943 = state_22895;
state_22895 = G__22943;
continue;
} else {
return ret_value__22727__auto__;
}
break;
}
});
light$view3d$client$state_machine__22726__auto__ = function(state_22895){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__22726__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__22726__auto____1.call(this,state_22895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__22726__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__22726__auto____0;
light$view3d$client$state_machine__22726__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__22726__auto____1;
return light$view3d$client$state_machine__22726__auto__;
})()
;})(switch__22725__auto__,c__22748__auto__))
})();
var state__22750__auto__ = (function (){var statearr_22908 = f__22749__auto__.call(null);
(statearr_22908[(6)] = c__22748__auto__);

return statearr_22908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22750__auto__);
});})(c__22748__auto__))
);

return c__22748__auto__;
});

light.view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__22748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22748__auto__){
return (function (){
var f__22749__auto__ = (function (){var switch__22725__auto__ = ((function (c__22748__auto__){
return (function (state_22922){
var state_val_22923 = (state_22922[(1)]);
if((state_val_22923 === (1))){
var state_22922__$1 = state_22922;
var statearr_22924_22944 = state_22922__$1;
(statearr_22924_22944[(2)] = null);

(statearr_22924_22944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (2))){
var state_22922__$1 = state_22922;
var statearr_22925_22945 = state_22922__$1;
(statearr_22925_22945[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (3))){
var inst_22920 = (state_22922[(2)]);
var state_22922__$1 = state_22922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22922__$1,inst_22920);
} else {
if((state_val_22923 === (4))){
var inst_22911 = func.call(null,param);
var inst_22912 = cljs.core.async.timeout.call(null,time_out);
var state_22922__$1 = (function (){var statearr_22927 = state_22922;
(statearr_22927[(7)] = inst_22911);

return statearr_22927;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22922__$1,(7),inst_22912);
} else {
if((state_val_22923 === (5))){
var state_22922__$1 = state_22922;
var statearr_22928_22946 = state_22922__$1;
(statearr_22928_22946[(2)] = null);

(statearr_22928_22946[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (6))){
var inst_22918 = (state_22922[(2)]);
var state_22922__$1 = state_22922;
var statearr_22929_22947 = state_22922__$1;
(statearr_22929_22947[(2)] = inst_22918);

(statearr_22929_22947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (7))){
var inst_22914 = (state_22922[(2)]);
var state_22922__$1 = (function (){var statearr_22930 = state_22922;
(statearr_22930[(8)] = inst_22914);

return statearr_22930;
})();
var statearr_22931_22948 = state_22922__$1;
(statearr_22931_22948[(2)] = null);

(statearr_22931_22948[(1)] = (2));


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
});})(c__22748__auto__))
;
return ((function (switch__22725__auto__,c__22748__auto__){
return (function() {
var light$view3d$client$state_machine__22726__auto__ = null;
var light$view3d$client$state_machine__22726__auto____0 = (function (){
var statearr_22932 = [null,null,null,null,null,null,null,null,null];
(statearr_22932[(0)] = light$view3d$client$state_machine__22726__auto__);

(statearr_22932[(1)] = (1));

return statearr_22932;
});
var light$view3d$client$state_machine__22726__auto____1 = (function (state_22922){
while(true){
var ret_value__22727__auto__ = (function (){try{while(true){
var result__22728__auto__ = switch__22725__auto__.call(null,state_22922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22728__auto__;
}
break;
}
}catch (e22933){if((e22933 instanceof Object)){
var ex__22729__auto__ = e22933;
var statearr_22934_22949 = state_22922;
(statearr_22934_22949[(5)] = ex__22729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22950 = state_22922;
state_22922 = G__22950;
continue;
} else {
return ret_value__22727__auto__;
}
break;
}
});
light$view3d$client$state_machine__22726__auto__ = function(state_22922){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__22726__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__22726__auto____1.call(this,state_22922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__22726__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__22726__auto____0;
light$view3d$client$state_machine__22726__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__22726__auto____1;
return light$view3d$client$state_machine__22726__auto__;
})()
;})(switch__22725__auto__,c__22748__auto__))
})();
var state__22750__auto__ = (function (){var statearr_22935 = f__22749__auto__.call(null);
(statearr_22935[(6)] = c__22748__auto__);

return statearr_22935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22750__auto__);
});})(c__22748__auto__))
);

return c__22748__auto__;
});

light.view3d.client.repeater.cljs$lang$maxFixedArity = 3;

light.view3d.client.repeater_BANG_ = (function light$view3d$client$repeater_BANG_(var_args){
var G__22952 = arguments.length;
switch (G__22952) {
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
var c__22748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22748__auto__){
return (function (){
var f__22749__auto__ = (function (){var switch__22725__auto__ = ((function (c__22748__auto__){
return (function (state_22967){
var state_val_22968 = (state_22967[(1)]);
if((state_val_22968 === (1))){
var state_22967__$1 = state_22967;
var statearr_22969_23010 = state_22967__$1;
(statearr_22969_23010[(2)] = null);

(statearr_22969_23010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (2))){
var state_22967__$1 = state_22967;
var statearr_22970_23011 = state_22967__$1;
(statearr_22970_23011[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (3))){
var inst_22965 = (state_22967[(2)]);
var state_22967__$1 = state_22967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22967__$1,inst_22965);
} else {
if((state_val_22968 === (4))){
var inst_22955 = func.call(null);
var inst_22956 = cljs.core.deref.call(null,time_out);
var inst_22957 = cljs.core.async.timeout.call(null,inst_22956);
var state_22967__$1 = (function (){var statearr_22972 = state_22967;
(statearr_22972[(7)] = inst_22955);

return statearr_22972;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22967__$1,(7),inst_22957);
} else {
if((state_val_22968 === (5))){
var state_22967__$1 = state_22967;
var statearr_22973_23012 = state_22967__$1;
(statearr_22973_23012[(2)] = null);

(statearr_22973_23012[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (6))){
var inst_22963 = (state_22967[(2)]);
var state_22967__$1 = state_22967;
var statearr_22974_23013 = state_22967__$1;
(statearr_22974_23013[(2)] = inst_22963);

(statearr_22974_23013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (7))){
var inst_22959 = (state_22967[(2)]);
var state_22967__$1 = (function (){var statearr_22975 = state_22967;
(statearr_22975[(8)] = inst_22959);

return statearr_22975;
})();
var statearr_22976_23014 = state_22967__$1;
(statearr_22976_23014[(2)] = null);

(statearr_22976_23014[(1)] = (2));


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
});})(c__22748__auto__))
;
return ((function (switch__22725__auto__,c__22748__auto__){
return (function() {
var light$view3d$client$state_machine__22726__auto__ = null;
var light$view3d$client$state_machine__22726__auto____0 = (function (){
var statearr_22977 = [null,null,null,null,null,null,null,null,null];
(statearr_22977[(0)] = light$view3d$client$state_machine__22726__auto__);

(statearr_22977[(1)] = (1));

return statearr_22977;
});
var light$view3d$client$state_machine__22726__auto____1 = (function (state_22967){
while(true){
var ret_value__22727__auto__ = (function (){try{while(true){
var result__22728__auto__ = switch__22725__auto__.call(null,state_22967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22728__auto__;
}
break;
}
}catch (e22978){if((e22978 instanceof Object)){
var ex__22729__auto__ = e22978;
var statearr_22979_23015 = state_22967;
(statearr_22979_23015[(5)] = ex__22729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23016 = state_22967;
state_22967 = G__23016;
continue;
} else {
return ret_value__22727__auto__;
}
break;
}
});
light$view3d$client$state_machine__22726__auto__ = function(state_22967){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__22726__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__22726__auto____1.call(this,state_22967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__22726__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__22726__auto____0;
light$view3d$client$state_machine__22726__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__22726__auto____1;
return light$view3d$client$state_machine__22726__auto__;
})()
;})(switch__22725__auto__,c__22748__auto__))
})();
var state__22750__auto__ = (function (){var statearr_22980 = f__22749__auto__.call(null);
(statearr_22980[(6)] = c__22748__auto__);

return statearr_22980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22750__auto__);
});})(c__22748__auto__))
);

return c__22748__auto__;
});

light.view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__22748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22748__auto__){
return (function (){
var f__22749__auto__ = (function (){var switch__22725__auto__ = ((function (c__22748__auto__){
return (function (state_22995){
var state_val_22996 = (state_22995[(1)]);
if((state_val_22996 === (1))){
var state_22995__$1 = state_22995;
var statearr_22997_23017 = state_22995__$1;
(statearr_22997_23017[(2)] = null);

(statearr_22997_23017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (2))){
var state_22995__$1 = state_22995;
var statearr_22998_23018 = state_22995__$1;
(statearr_22998_23018[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (3))){
var inst_22993 = (state_22995[(2)]);
var state_22995__$1 = state_22995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22995__$1,inst_22993);
} else {
if((state_val_22996 === (4))){
var inst_22983 = func.call(null,param);
var inst_22984 = cljs.core.deref.call(null,time_out);
var inst_22985 = cljs.core.async.timeout.call(null,inst_22984);
var state_22995__$1 = (function (){var statearr_23000 = state_22995;
(statearr_23000[(7)] = inst_22983);

return statearr_23000;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22995__$1,(7),inst_22985);
} else {
if((state_val_22996 === (5))){
var state_22995__$1 = state_22995;
var statearr_23001_23019 = state_22995__$1;
(statearr_23001_23019[(2)] = null);

(statearr_23001_23019[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (6))){
var inst_22991 = (state_22995[(2)]);
var state_22995__$1 = state_22995;
var statearr_23002_23020 = state_22995__$1;
(statearr_23002_23020[(2)] = inst_22991);

(statearr_23002_23020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (7))){
var inst_22987 = (state_22995[(2)]);
var state_22995__$1 = (function (){var statearr_23003 = state_22995;
(statearr_23003[(8)] = inst_22987);

return statearr_23003;
})();
var statearr_23004_23021 = state_22995__$1;
(statearr_23004_23021[(2)] = null);

(statearr_23004_23021[(1)] = (2));


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
});})(c__22748__auto__))
;
return ((function (switch__22725__auto__,c__22748__auto__){
return (function() {
var light$view3d$client$state_machine__22726__auto__ = null;
var light$view3d$client$state_machine__22726__auto____0 = (function (){
var statearr_23005 = [null,null,null,null,null,null,null,null,null];
(statearr_23005[(0)] = light$view3d$client$state_machine__22726__auto__);

(statearr_23005[(1)] = (1));

return statearr_23005;
});
var light$view3d$client$state_machine__22726__auto____1 = (function (state_22995){
while(true){
var ret_value__22727__auto__ = (function (){try{while(true){
var result__22728__auto__ = switch__22725__auto__.call(null,state_22995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22728__auto__;
}
break;
}
}catch (e23006){if((e23006 instanceof Object)){
var ex__22729__auto__ = e23006;
var statearr_23007_23022 = state_22995;
(statearr_23007_23022[(5)] = ex__22729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23023 = state_22995;
state_22995 = G__23023;
continue;
} else {
return ret_value__22727__auto__;
}
break;
}
});
light$view3d$client$state_machine__22726__auto__ = function(state_22995){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__22726__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__22726__auto____1.call(this,state_22995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__22726__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__22726__auto____0;
light$view3d$client$state_machine__22726__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__22726__auto____1;
return light$view3d$client$state_machine__22726__auto__;
})()
;})(switch__22725__auto__,c__22748__auto__))
})();
var state__22750__auto__ = (function (){var statearr_23008 = f__22749__auto__.call(null);
(statearr_23008[(6)] = c__22748__auto__);

return statearr_23008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22750__auto__);
});})(c__22748__auto__))
);

return c__22748__auto__;
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
light.view3d.client.offset_latlon = (function light$view3d$client$offset_latlon(meters,crs,post){
var dd = (function (){var pred__23024 = cljs.core._EQ_;
var expr__23025 = post;
if(cljs.core.truth_(pred__23024.call(null,"BOW",expr__23025))){
return crs;
} else {
if(cljs.core.truth_(pred__23024.call(null,"STARBOARD",expr__23025))){
return (crs + (90));
} else {
if(cljs.core.truth_(pred__23024.call(null,"STERN",expr__23025))){
return (crs + (180));
} else {
if(cljs.core.truth_(pred__23024.call(null,"PORT",expr__23025))){
return (crs + (270));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__23025)].join('')));
}
}
}
}
})();
var dd__$1 = (((dd > (360)))?(dd - (360)):dd);
var rad = ((Math.PI / (180)) * ((meters / (1852)) / (60)));
var dir = ((Math.PI / (180)) * dd__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(rad * Math.cos(dir)),(rad * Math.sin(dir))], null);
});
light.view3d.client.response_request = (function light$view3d$client$response_request(){
var resp = cljs.core.deref.call(null,light.view3d.client.RESPONSE);
if((!(cljs.core.empty_QMARK_.call(null,resp)))){
ajax.core.GET.call(null,"/response",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response","response",-1068424192),(function (){try{return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),resp);
}catch (e23027){if((e23027 instanceof Error)){
var e = e23027;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e23027;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),light.view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
light.view3d.client.handle_request = (function light$view3d$client$handle_request(request){
var temp__5733__auto___23034 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___23034)){
var vie_23035 = temp__5733__auto___23034;
light.view3d.client.view.call(null,vie_23035);
} else {
}

var temp__5733__auto___23036 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___23036)){
var pit_23037 = temp__5733__auto___23036;
light.view3d.client.pitch.call(null,pit_23037);
} else {
}

var temp__5733__auto___23038 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___23038)){
var rol_23039 = temp__5733__auto___23038;
light.view3d.client.roll.call(null,rol_23039);
} else {
}

var temp__5733__auto___23040 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___23040)){
var vec__23028_23041 = temp__5733__auto___23040;
var lat_23042 = cljs.core.nth.call(null,vec__23028_23041,(0),null);
var lon_23043 = cljs.core.nth.call(null,vec__23028_23041,(1),null);
var vec__23031_23044 = light.czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [light.geo.calc.radians.call(null,lat_23042),light.geo.calc.radians.call(null,lon_23043)], null),(0));
var __23045 = cljs.core.nth.call(null,vec__23031_23044,(0),null);
var __23046__$1 = cljs.core.nth.call(null,vec__23031_23044,(1),null);
var sh_23047 = cljs.core.nth.call(null,vec__23031_23044,(2),null);
cljs.core._vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_23047 | (0))));
} else {
}

return light.view3d.client.response_request.call(null);
});
light.view3d.client.handle_vehicle = (function light$view3d$client$handle_vehicle(vehicle){
var vec__23048 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__23048,(0),null);
var lon = cljs.core.nth.call(null,vec__23048,(1),null);
var alt = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle);
var vev = (function (){var or__4047__auto__ = new cljs.core.Keyword(null,"view-elevation","view-elevation",-681076231).cljs$core$IFn$_invoke$arity$1(vehicle);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})();
var vpo = (function (){var or__4047__auto__ = new cljs.core.Keyword(null,"view-post","view-post",1961917879).cljs$core$IFn$_invoke$arity$1(vehicle);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"stern","stern",-613074998);
}
})();
var vof = (function (){var or__4047__auto__ = new cljs.core.Keyword(null,"view-offset","view-offset",1062952687).cljs$core$IFn$_invoke$arity$1(vehicle);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})();
var crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle);
var vec__23051 = light.view3d.client.offset_latlon.call(null,vof,crs,vpo);
var vla = cljs.core.nth.call(null,vec__23051,(0),null);
var vlo = cljs.core.nth.call(null,vec__23051,(1),null);
var head = light.czm.core.norm_crs.call(null,(crs + new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,light.czm.core.CAMERA))));
cljs.core._vreset_BANG_.call(null,light.view3d.client.VEHICLE,cljs.core.merge.call(null,cljs.core._deref.call(null,light.view3d.client.VEHICLE),vehicle));

light.view3d.client.set_html_BANG_.call(null,"onboard-fld",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(vehicle));

light.view3d.client.set_html_BANG_.call(null,"name-fld",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(vehicle));

light.view3d.client.set_html_BANG_.call(null,"course-fld",new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle));

light.view3d.client.set_html_BANG_.call(null,"speed-fld",new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(vehicle));

light.view3d.client.set_html_BANG_.call(null,"altitude-fld",light.czm.core.ALT);

light.view3d.client.set_html_BANG_.call(null,"view-dir",light.geo.calc.rumb.call(null,head));

return light.czm.core.fly_to.call(null,(lat + vla),(lon + vlo),(alt + vev),crs,1.2);
});
light.view3d.client.vehicle_hr = (function light$view3d$client$vehicle_hr(response){
var resp = light.view3d.client.read_transit.call(null,response);
var temp__5733__auto___23054 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5733__auto___23054)){
var vehicle_23055 = temp__5733__auto___23054;
light.view3d.client.handle_vehicle.call(null,vehicle_23055);
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
}catch (e23056){if((e23056 instanceof Error)){
var e = e23056;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e23056;

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
