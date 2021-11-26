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
var map__21894 = response;
var map__21894__$1 = (((((!((map__21894 == null))))?(((((map__21894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21894):map__21894);
var status = cljs.core.get.call(null,map__21894__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__21894__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
light.view3d.client.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
light.view3d.client.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
light.view3d.client.PORT = (8448);
light.view3d.client.format = (function light$view3d$client$format(var_args){
var args__4647__auto__ = [];
var len__4641__auto___21898 = arguments.length;
var i__4642__auto___21899 = (0);
while(true){
if((i__4642__auto___21899 < len__4641__auto___21898)){
args__4647__auto__.push((arguments[i__4642__auto___21899]));

var G__21900 = (i__4642__auto___21899 + (1));
i__4642__auto___21899 = G__21900;
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
light.view3d.client.format.cljs$lang$applyTo = (function (seq21896){
var G__21897 = cljs.core.first.call(null,seq21896);
var seq21896__$1 = cljs.core.next.call(null,seq21896);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21897,seq21896__$1);
});

light.view3d.client.repeater = (function light$view3d$client$repeater(var_args){
var G__21902 = arguments.length;
switch (G__21902) {
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
var c__3320__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3320__auto__){
return (function (){
var f__3321__auto__ = (function (){var switch__3297__auto__ = ((function (c__3320__auto__){
return (function (state_21916){
var state_val_21917 = (state_21916[(1)]);
if((state_val_21917 === (1))){
var state_21916__$1 = state_21916;
var statearr_21918_21958 = state_21916__$1;
(statearr_21918_21958[(2)] = null);

(statearr_21918_21958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21917 === (2))){
var state_21916__$1 = state_21916;
var statearr_21919_21959 = state_21916__$1;
(statearr_21919_21959[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21917 === (3))){
var inst_21914 = (state_21916[(2)]);
var state_21916__$1 = state_21916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21916__$1,inst_21914);
} else {
if((state_val_21917 === (4))){
var inst_21905 = func.call(null);
var inst_21906 = cljs.core.async.timeout.call(null,time_out);
var state_21916__$1 = (function (){var statearr_21921 = state_21916;
(statearr_21921[(7)] = inst_21905);

return statearr_21921;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21916__$1,(7),inst_21906);
} else {
if((state_val_21917 === (5))){
var state_21916__$1 = state_21916;
var statearr_21922_21960 = state_21916__$1;
(statearr_21922_21960[(2)] = null);

(statearr_21922_21960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21917 === (6))){
var inst_21912 = (state_21916[(2)]);
var state_21916__$1 = state_21916;
var statearr_21923_21961 = state_21916__$1;
(statearr_21923_21961[(2)] = inst_21912);

(statearr_21923_21961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21917 === (7))){
var inst_21908 = (state_21916[(2)]);
var state_21916__$1 = (function (){var statearr_21924 = state_21916;
(statearr_21924[(8)] = inst_21908);

return statearr_21924;
})();
var statearr_21925_21962 = state_21916__$1;
(statearr_21925_21962[(2)] = null);

(statearr_21925_21962[(1)] = (2));


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
});})(c__3320__auto__))
;
return ((function (switch__3297__auto__,c__3320__auto__){
return (function() {
var light$view3d$client$state_machine__3298__auto__ = null;
var light$view3d$client$state_machine__3298__auto____0 = (function (){
var statearr_21926 = [null,null,null,null,null,null,null,null,null];
(statearr_21926[(0)] = light$view3d$client$state_machine__3298__auto__);

(statearr_21926[(1)] = (1));

return statearr_21926;
});
var light$view3d$client$state_machine__3298__auto____1 = (function (state_21916){
while(true){
var ret_value__3299__auto__ = (function (){try{while(true){
var result__3300__auto__ = switch__3297__auto__.call(null,state_21916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3300__auto__;
}
break;
}
}catch (e21927){if((e21927 instanceof Object)){
var ex__3301__auto__ = e21927;
var statearr_21928_21963 = state_21916;
(statearr_21928_21963[(5)] = ex__3301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21964 = state_21916;
state_21916 = G__21964;
continue;
} else {
return ret_value__3299__auto__;
}
break;
}
});
light$view3d$client$state_machine__3298__auto__ = function(state_21916){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__3298__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__3298__auto____1.call(this,state_21916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__3298__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__3298__auto____0;
light$view3d$client$state_machine__3298__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__3298__auto____1;
return light$view3d$client$state_machine__3298__auto__;
})()
;})(switch__3297__auto__,c__3320__auto__))
})();
var state__3322__auto__ = (function (){var statearr_21929 = f__3321__auto__.call(null);
(statearr_21929[(6)] = c__3320__auto__);

return statearr_21929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3322__auto__);
});})(c__3320__auto__))
);

return c__3320__auto__;
});

light.view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__3320__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3320__auto__){
return (function (){
var f__3321__auto__ = (function (){var switch__3297__auto__ = ((function (c__3320__auto__){
return (function (state_21943){
var state_val_21944 = (state_21943[(1)]);
if((state_val_21944 === (1))){
var state_21943__$1 = state_21943;
var statearr_21945_21965 = state_21943__$1;
(statearr_21945_21965[(2)] = null);

(statearr_21945_21965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21944 === (2))){
var state_21943__$1 = state_21943;
var statearr_21946_21966 = state_21943__$1;
(statearr_21946_21966[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21944 === (3))){
var inst_21941 = (state_21943[(2)]);
var state_21943__$1 = state_21943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21943__$1,inst_21941);
} else {
if((state_val_21944 === (4))){
var inst_21932 = func.call(null,param);
var inst_21933 = cljs.core.async.timeout.call(null,time_out);
var state_21943__$1 = (function (){var statearr_21948 = state_21943;
(statearr_21948[(7)] = inst_21932);

return statearr_21948;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21943__$1,(7),inst_21933);
} else {
if((state_val_21944 === (5))){
var state_21943__$1 = state_21943;
var statearr_21949_21967 = state_21943__$1;
(statearr_21949_21967[(2)] = null);

(statearr_21949_21967[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21944 === (6))){
var inst_21939 = (state_21943[(2)]);
var state_21943__$1 = state_21943;
var statearr_21950_21968 = state_21943__$1;
(statearr_21950_21968[(2)] = inst_21939);

(statearr_21950_21968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21944 === (7))){
var inst_21935 = (state_21943[(2)]);
var state_21943__$1 = (function (){var statearr_21951 = state_21943;
(statearr_21951[(8)] = inst_21935);

return statearr_21951;
})();
var statearr_21952_21969 = state_21943__$1;
(statearr_21952_21969[(2)] = null);

(statearr_21952_21969[(1)] = (2));


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
});})(c__3320__auto__))
;
return ((function (switch__3297__auto__,c__3320__auto__){
return (function() {
var light$view3d$client$state_machine__3298__auto__ = null;
var light$view3d$client$state_machine__3298__auto____0 = (function (){
var statearr_21953 = [null,null,null,null,null,null,null,null,null];
(statearr_21953[(0)] = light$view3d$client$state_machine__3298__auto__);

(statearr_21953[(1)] = (1));

return statearr_21953;
});
var light$view3d$client$state_machine__3298__auto____1 = (function (state_21943){
while(true){
var ret_value__3299__auto__ = (function (){try{while(true){
var result__3300__auto__ = switch__3297__auto__.call(null,state_21943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3300__auto__;
}
break;
}
}catch (e21954){if((e21954 instanceof Object)){
var ex__3301__auto__ = e21954;
var statearr_21955_21970 = state_21943;
(statearr_21955_21970[(5)] = ex__3301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21971 = state_21943;
state_21943 = G__21971;
continue;
} else {
return ret_value__3299__auto__;
}
break;
}
});
light$view3d$client$state_machine__3298__auto__ = function(state_21943){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__3298__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__3298__auto____1.call(this,state_21943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__3298__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__3298__auto____0;
light$view3d$client$state_machine__3298__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__3298__auto____1;
return light$view3d$client$state_machine__3298__auto__;
})()
;})(switch__3297__auto__,c__3320__auto__))
})();
var state__3322__auto__ = (function (){var statearr_21956 = f__3321__auto__.call(null);
(statearr_21956[(6)] = c__3320__auto__);

return statearr_21956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3322__auto__);
});})(c__3320__auto__))
);

return c__3320__auto__;
});

light.view3d.client.repeater.cljs$lang$maxFixedArity = 3;

light.view3d.client.repeater_BANG_ = (function light$view3d$client$repeater_BANG_(var_args){
var G__21973 = arguments.length;
switch (G__21973) {
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
var c__3320__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3320__auto__){
return (function (){
var f__3321__auto__ = (function (){var switch__3297__auto__ = ((function (c__3320__auto__){
return (function (state_21988){
var state_val_21989 = (state_21988[(1)]);
if((state_val_21989 === (1))){
var state_21988__$1 = state_21988;
var statearr_21990_22031 = state_21988__$1;
(statearr_21990_22031[(2)] = null);

(statearr_21990_22031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21989 === (2))){
var state_21988__$1 = state_21988;
var statearr_21991_22032 = state_21988__$1;
(statearr_21991_22032[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21989 === (3))){
var inst_21986 = (state_21988[(2)]);
var state_21988__$1 = state_21988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21988__$1,inst_21986);
} else {
if((state_val_21989 === (4))){
var inst_21976 = func.call(null);
var inst_21977 = cljs.core.deref.call(null,time_out);
var inst_21978 = cljs.core.async.timeout.call(null,inst_21977);
var state_21988__$1 = (function (){var statearr_21993 = state_21988;
(statearr_21993[(7)] = inst_21976);

return statearr_21993;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21988__$1,(7),inst_21978);
} else {
if((state_val_21989 === (5))){
var state_21988__$1 = state_21988;
var statearr_21994_22033 = state_21988__$1;
(statearr_21994_22033[(2)] = null);

(statearr_21994_22033[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21989 === (6))){
var inst_21984 = (state_21988[(2)]);
var state_21988__$1 = state_21988;
var statearr_21995_22034 = state_21988__$1;
(statearr_21995_22034[(2)] = inst_21984);

(statearr_21995_22034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21989 === (7))){
var inst_21980 = (state_21988[(2)]);
var state_21988__$1 = (function (){var statearr_21996 = state_21988;
(statearr_21996[(8)] = inst_21980);

return statearr_21996;
})();
var statearr_21997_22035 = state_21988__$1;
(statearr_21997_22035[(2)] = null);

(statearr_21997_22035[(1)] = (2));


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
});})(c__3320__auto__))
;
return ((function (switch__3297__auto__,c__3320__auto__){
return (function() {
var light$view3d$client$state_machine__3298__auto__ = null;
var light$view3d$client$state_machine__3298__auto____0 = (function (){
var statearr_21998 = [null,null,null,null,null,null,null,null,null];
(statearr_21998[(0)] = light$view3d$client$state_machine__3298__auto__);

(statearr_21998[(1)] = (1));

return statearr_21998;
});
var light$view3d$client$state_machine__3298__auto____1 = (function (state_21988){
while(true){
var ret_value__3299__auto__ = (function (){try{while(true){
var result__3300__auto__ = switch__3297__auto__.call(null,state_21988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3300__auto__;
}
break;
}
}catch (e21999){if((e21999 instanceof Object)){
var ex__3301__auto__ = e21999;
var statearr_22000_22036 = state_21988;
(statearr_22000_22036[(5)] = ex__3301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22037 = state_21988;
state_21988 = G__22037;
continue;
} else {
return ret_value__3299__auto__;
}
break;
}
});
light$view3d$client$state_machine__3298__auto__ = function(state_21988){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__3298__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__3298__auto____1.call(this,state_21988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__3298__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__3298__auto____0;
light$view3d$client$state_machine__3298__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__3298__auto____1;
return light$view3d$client$state_machine__3298__auto__;
})()
;})(switch__3297__auto__,c__3320__auto__))
})();
var state__3322__auto__ = (function (){var statearr_22001 = f__3321__auto__.call(null);
(statearr_22001[(6)] = c__3320__auto__);

return statearr_22001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3322__auto__);
});})(c__3320__auto__))
);

return c__3320__auto__;
});

light.view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__3320__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3320__auto__){
return (function (){
var f__3321__auto__ = (function (){var switch__3297__auto__ = ((function (c__3320__auto__){
return (function (state_22016){
var state_val_22017 = (state_22016[(1)]);
if((state_val_22017 === (1))){
var state_22016__$1 = state_22016;
var statearr_22018_22038 = state_22016__$1;
(statearr_22018_22038[(2)] = null);

(statearr_22018_22038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22017 === (2))){
var state_22016__$1 = state_22016;
var statearr_22019_22039 = state_22016__$1;
(statearr_22019_22039[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22017 === (3))){
var inst_22014 = (state_22016[(2)]);
var state_22016__$1 = state_22016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22016__$1,inst_22014);
} else {
if((state_val_22017 === (4))){
var inst_22004 = func.call(null,param);
var inst_22005 = cljs.core.deref.call(null,time_out);
var inst_22006 = cljs.core.async.timeout.call(null,inst_22005);
var state_22016__$1 = (function (){var statearr_22021 = state_22016;
(statearr_22021[(7)] = inst_22004);

return statearr_22021;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22016__$1,(7),inst_22006);
} else {
if((state_val_22017 === (5))){
var state_22016__$1 = state_22016;
var statearr_22022_22040 = state_22016__$1;
(statearr_22022_22040[(2)] = null);

(statearr_22022_22040[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22017 === (6))){
var inst_22012 = (state_22016[(2)]);
var state_22016__$1 = state_22016;
var statearr_22023_22041 = state_22016__$1;
(statearr_22023_22041[(2)] = inst_22012);

(statearr_22023_22041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22017 === (7))){
var inst_22008 = (state_22016[(2)]);
var state_22016__$1 = (function (){var statearr_22024 = state_22016;
(statearr_22024[(8)] = inst_22008);

return statearr_22024;
})();
var statearr_22025_22042 = state_22016__$1;
(statearr_22025_22042[(2)] = null);

(statearr_22025_22042[(1)] = (2));


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
});})(c__3320__auto__))
;
return ((function (switch__3297__auto__,c__3320__auto__){
return (function() {
var light$view3d$client$state_machine__3298__auto__ = null;
var light$view3d$client$state_machine__3298__auto____0 = (function (){
var statearr_22026 = [null,null,null,null,null,null,null,null,null];
(statearr_22026[(0)] = light$view3d$client$state_machine__3298__auto__);

(statearr_22026[(1)] = (1));

return statearr_22026;
});
var light$view3d$client$state_machine__3298__auto____1 = (function (state_22016){
while(true){
var ret_value__3299__auto__ = (function (){try{while(true){
var result__3300__auto__ = switch__3297__auto__.call(null,state_22016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3300__auto__;
}
break;
}
}catch (e22027){if((e22027 instanceof Object)){
var ex__3301__auto__ = e22027;
var statearr_22028_22043 = state_22016;
(statearr_22028_22043[(5)] = ex__3301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22044 = state_22016;
state_22016 = G__22044;
continue;
} else {
return ret_value__3299__auto__;
}
break;
}
});
light$view3d$client$state_machine__3298__auto__ = function(state_22016){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__3298__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__3298__auto____1.call(this,state_22016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__3298__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__3298__auto____0;
light$view3d$client$state_machine__3298__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__3298__auto____1;
return light$view3d$client$state_machine__3298__auto__;
})()
;})(switch__3297__auto__,c__3320__auto__))
})();
var state__3322__auto__ = (function (){var statearr_22029 = f__3321__auto__.call(null);
(statearr_22029[(6)] = c__3320__auto__);

return statearr_22029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3322__auto__);
});})(c__3320__auto__))
);

return c__3320__auto__;
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
light.view3d.client.zoom_format = (function light$view3d$client$zoom_format(m){
if((m >= (1000))){
return light.view3d.client.format.call(null,"%.0f \u043A\u043C",(m / 1000.0));
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
var pred__22045_22048 = cljs.core._EQ_;
var expr__22046_22049 = mode;
if(cljs.core.truth_(pred__22045_22048.call(null,(1),expr__22046_22049))){
light.czm.core.zoom_in.call(null);

zoom_on.call(null);
} else {
if(cljs.core.truth_(pred__22045_22048.call(null,(-1),expr__22046_22049))){
light.czm.core.zoom_out.call(null);

if(cljs.core.empty_QMARK_.call(null,light.czm.core.ZOOM)){
zoom_off.call(null);
} else {
}
} else {
if(cljs.core.truth_(pred__22045_22048.call(null,(0),expr__22046_22049))){
light.czm.core.zoom_no.call(null);

zoom_off.call(null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__22046_22049)].join('')));
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
}catch (e22050){if((e22050 instanceof Error)){
var e = e22050;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e22050;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),light.view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
light.view3d.client.handle_request = (function light$view3d$client$handle_request(request){
var temp__5733__auto___22057 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___22057)){
var vie_22058 = temp__5733__auto___22057;
light.view3d.client.view.call(null,vie_22058);
} else {
}

var temp__5733__auto___22059 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___22059)){
var pit_22060 = temp__5733__auto___22059;
light.view3d.client.pitch.call(null,pit_22060);
} else {
}

var temp__5733__auto___22061 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___22061)){
var rol_22062 = temp__5733__auto___22061;
light.view3d.client.roll.call(null,rol_22062);
} else {
}

var temp__5733__auto___22063 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___22063)){
var vec__22051_22064 = temp__5733__auto___22063;
var lat_22065 = cljs.core.nth.call(null,vec__22051_22064,(0),null);
var lon_22066 = cljs.core.nth.call(null,vec__22051_22064,(1),null);
var vec__22054_22067 = light.czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [light.geo.calc.radians.call(null,lat_22065),light.geo.calc.radians.call(null,lon_22066)], null),(0));
var __22068 = cljs.core.nth.call(null,vec__22054_22067,(0),null);
var __22069__$1 = cljs.core.nth.call(null,vec__22054_22067,(1),null);
var sh_22070 = cljs.core.nth.call(null,vec__22054_22067,(2),null);
cljs.core._vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_22070 | (0))));
} else {
}

return light.view3d.client.response_request.call(null);
});
light.view3d.client.handle_vehicle = (function light$view3d$client$handle_vehicle(vehicle){
var vec__22071 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__22071,(0),null);
var lon = cljs.core.nth.call(null,vec__22071,(1),null);
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
var temp__5733__auto___22074 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5733__auto___22074)){
var vehicle_22075 = temp__5733__auto___22074;
light.view3d.client.handle_vehicle.call(null,vehicle_22075);
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
}catch (e22076){if((e22076 instanceof Error)){
var e = e22076;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e22076;

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
