// Compiled by ClojureScript 1.11.132 {:optimizations :none}
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
var map__11924 = response;
var map__11924__$1 = cljs.core.__destructure_map.call(null,map__11924);
var status = cljs.core.get.call(null,map__11924__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__11924__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
light.view3d.client.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
light.view3d.client.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
light.view3d.client.PORT = (8448);
light.view3d.client.ZOOM_STEP = (100);
light.view3d.client.format = (function light$view3d$client$format(var_args){
var args__5732__auto__ = [];
var len__5726__auto___11927 = arguments.length;
var i__5727__auto___11928 = (0);
while(true){
if((i__5727__auto___11928 < len__5726__auto___11927)){
args__5732__auto__.push((arguments[i__5727__auto___11928]));

var G__11929 = (i__5727__auto___11928 + (1));
i__5727__auto___11928 = G__11929;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return light.view3d.client.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(light.view3d.client.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
}));

(light.view3d.client.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(light.view3d.client.format.cljs$lang$applyTo = (function (seq11925){
var G__11926 = cljs.core.first.call(null,seq11925);
var seq11925__$1 = cljs.core.next.call(null,seq11925);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11926,seq11925__$1);
}));

light.view3d.client.repeater = (function light$view3d$client$repeater(var_args){
var G__11931 = arguments.length;
switch (G__11931) {
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

(light.view3d.client.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__8277__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_11945){
var state_val_11946 = (state_11945[(1)]);
if((state_val_11946 === (1))){
var state_11945__$1 = state_11945;
var statearr_11947_11989 = state_11945__$1;
(statearr_11947_11989[(2)] = null);

(statearr_11947_11989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11946 === (2))){
var state_11945__$1 = state_11945;
var statearr_11948_11990 = state_11945__$1;
(statearr_11948_11990[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11946 === (3))){
var inst_11943 = (state_11945[(2)]);
var state_11945__$1 = state_11945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11945__$1,inst_11943);
} else {
if((state_val_11946 === (4))){
var inst_11934 = func.call(null);
var inst_11935 = cljs.core.async.timeout.call(null,time_out);
var state_11945__$1 = (function (){var statearr_11950 = state_11945;
(statearr_11950[(7)] = inst_11934);

return statearr_11950;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11945__$1,(7),inst_11935);
} else {
if((state_val_11946 === (5))){
var state_11945__$1 = state_11945;
var statearr_11951_11991 = state_11945__$1;
(statearr_11951_11991[(2)] = null);

(statearr_11951_11991[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11946 === (6))){
var inst_11941 = (state_11945[(2)]);
var state_11945__$1 = state_11945;
var statearr_11952_11992 = state_11945__$1;
(statearr_11952_11992[(2)] = inst_11941);

(statearr_11952_11992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11946 === (7))){
var inst_11937 = (state_11945[(2)]);
var state_11945__$1 = (function (){var statearr_11953 = state_11945;
(statearr_11953[(8)] = inst_11937);

return statearr_11953;
})();
var statearr_11954_11993 = state_11945__$1;
(statearr_11954_11993[(2)] = null);

(statearr_11954_11993[(1)] = (2));


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
});
return (function() {
var light$view3d$client$state_machine__2332__auto__ = null;
var light$view3d$client$state_machine__2332__auto____0 = (function (){
var statearr_11955 = [null,null,null,null,null,null,null,null,null];
(statearr_11955[(0)] = light$view3d$client$state_machine__2332__auto__);

(statearr_11955[(1)] = (1));

return statearr_11955;
});
var light$view3d$client$state_machine__2332__auto____1 = (function (state_11945){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_11945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e11956){var ex__2335__auto__ = e11956;
var statearr_11957_11994 = state_11945;
(statearr_11957_11994[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_11945[(4)]))){
var statearr_11958_11995 = state_11945;
(statearr_11958_11995[(1)] = cljs.core.first.call(null,(state_11945[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11996 = state_11945;
state_11945 = G__11996;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
light$view3d$client$state_machine__2332__auto__ = function(state_11945){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2332__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2332__auto____1.call(this,state_11945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2332__auto____0;
light$view3d$client$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2332__auto____1;
return light$view3d$client$state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_11959 = f__8278__auto__.call(null);
(statearr_11959[(6)] = c__8277__auto__);

return statearr_11959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
}));

return c__8277__auto__;
}));

(light.view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__8277__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_11973){
var state_val_11974 = (state_11973[(1)]);
if((state_val_11974 === (1))){
var state_11973__$1 = state_11973;
var statearr_11975_11997 = state_11973__$1;
(statearr_11975_11997[(2)] = null);

(statearr_11975_11997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11974 === (2))){
var state_11973__$1 = state_11973;
var statearr_11976_11998 = state_11973__$1;
(statearr_11976_11998[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11974 === (3))){
var inst_11971 = (state_11973[(2)]);
var state_11973__$1 = state_11973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11973__$1,inst_11971);
} else {
if((state_val_11974 === (4))){
var inst_11962 = func.call(null,param);
var inst_11963 = cljs.core.async.timeout.call(null,time_out);
var state_11973__$1 = (function (){var statearr_11978 = state_11973;
(statearr_11978[(7)] = inst_11962);

return statearr_11978;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11973__$1,(7),inst_11963);
} else {
if((state_val_11974 === (5))){
var state_11973__$1 = state_11973;
var statearr_11979_11999 = state_11973__$1;
(statearr_11979_11999[(2)] = null);

(statearr_11979_11999[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11974 === (6))){
var inst_11969 = (state_11973[(2)]);
var state_11973__$1 = state_11973;
var statearr_11980_12000 = state_11973__$1;
(statearr_11980_12000[(2)] = inst_11969);

(statearr_11980_12000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11974 === (7))){
var inst_11965 = (state_11973[(2)]);
var state_11973__$1 = (function (){var statearr_11981 = state_11973;
(statearr_11981[(8)] = inst_11965);

return statearr_11981;
})();
var statearr_11982_12001 = state_11973__$1;
(statearr_11982_12001[(2)] = null);

(statearr_11982_12001[(1)] = (2));


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
});
return (function() {
var light$view3d$client$state_machine__2332__auto__ = null;
var light$view3d$client$state_machine__2332__auto____0 = (function (){
var statearr_11983 = [null,null,null,null,null,null,null,null,null];
(statearr_11983[(0)] = light$view3d$client$state_machine__2332__auto__);

(statearr_11983[(1)] = (1));

return statearr_11983;
});
var light$view3d$client$state_machine__2332__auto____1 = (function (state_11973){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_11973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e11984){var ex__2335__auto__ = e11984;
var statearr_11985_12002 = state_11973;
(statearr_11985_12002[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_11973[(4)]))){
var statearr_11986_12003 = state_11973;
(statearr_11986_12003[(1)] = cljs.core.first.call(null,(state_11973[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12004 = state_11973;
state_11973 = G__12004;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
light$view3d$client$state_machine__2332__auto__ = function(state_11973){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2332__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2332__auto____1.call(this,state_11973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2332__auto____0;
light$view3d$client$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2332__auto____1;
return light$view3d$client$state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_11987 = f__8278__auto__.call(null);
(statearr_11987[(6)] = c__8277__auto__);

return statearr_11987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
}));

return c__8277__auto__;
}));

(light.view3d.client.repeater.cljs$lang$maxFixedArity = 3);

light.view3d.client.repeater_BANG_ = (function light$view3d$client$repeater_BANG_(var_args){
var G__12006 = arguments.length;
switch (G__12006) {
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

(light.view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__8277__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_12021){
var state_val_12022 = (state_12021[(1)]);
if((state_val_12022 === (1))){
var state_12021__$1 = state_12021;
var statearr_12023_12066 = state_12021__$1;
(statearr_12023_12066[(2)] = null);

(statearr_12023_12066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (2))){
var state_12021__$1 = state_12021;
var statearr_12024_12067 = state_12021__$1;
(statearr_12024_12067[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (3))){
var inst_12019 = (state_12021[(2)]);
var state_12021__$1 = state_12021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12021__$1,inst_12019);
} else {
if((state_val_12022 === (4))){
var inst_12009 = func.call(null);
var inst_12010 = cljs.core.deref.call(null,time_out);
var inst_12011 = cljs.core.async.timeout.call(null,inst_12010);
var state_12021__$1 = (function (){var statearr_12026 = state_12021;
(statearr_12026[(7)] = inst_12009);

return statearr_12026;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12021__$1,(7),inst_12011);
} else {
if((state_val_12022 === (5))){
var state_12021__$1 = state_12021;
var statearr_12027_12068 = state_12021__$1;
(statearr_12027_12068[(2)] = null);

(statearr_12027_12068[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (6))){
var inst_12017 = (state_12021[(2)]);
var state_12021__$1 = state_12021;
var statearr_12028_12069 = state_12021__$1;
(statearr_12028_12069[(2)] = inst_12017);

(statearr_12028_12069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (7))){
var inst_12013 = (state_12021[(2)]);
var state_12021__$1 = (function (){var statearr_12029 = state_12021;
(statearr_12029[(8)] = inst_12013);

return statearr_12029;
})();
var statearr_12030_12070 = state_12021__$1;
(statearr_12030_12070[(2)] = null);

(statearr_12030_12070[(1)] = (2));


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
});
return (function() {
var light$view3d$client$state_machine__2332__auto__ = null;
var light$view3d$client$state_machine__2332__auto____0 = (function (){
var statearr_12031 = [null,null,null,null,null,null,null,null,null];
(statearr_12031[(0)] = light$view3d$client$state_machine__2332__auto__);

(statearr_12031[(1)] = (1));

return statearr_12031;
});
var light$view3d$client$state_machine__2332__auto____1 = (function (state_12021){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_12021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e12032){var ex__2335__auto__ = e12032;
var statearr_12033_12071 = state_12021;
(statearr_12033_12071[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_12021[(4)]))){
var statearr_12034_12072 = state_12021;
(statearr_12034_12072[(1)] = cljs.core.first.call(null,(state_12021[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12073 = state_12021;
state_12021 = G__12073;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
light$view3d$client$state_machine__2332__auto__ = function(state_12021){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2332__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2332__auto____1.call(this,state_12021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2332__auto____0;
light$view3d$client$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2332__auto____1;
return light$view3d$client$state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_12035 = f__8278__auto__.call(null);
(statearr_12035[(6)] = c__8277__auto__);

return statearr_12035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
}));

return c__8277__auto__;
}));

(light.view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__8277__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_12050){
var state_val_12051 = (state_12050[(1)]);
if((state_val_12051 === (1))){
var state_12050__$1 = state_12050;
var statearr_12052_12074 = state_12050__$1;
(statearr_12052_12074[(2)] = null);

(statearr_12052_12074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (2))){
var state_12050__$1 = state_12050;
var statearr_12053_12075 = state_12050__$1;
(statearr_12053_12075[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (3))){
var inst_12048 = (state_12050[(2)]);
var state_12050__$1 = state_12050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12050__$1,inst_12048);
} else {
if((state_val_12051 === (4))){
var inst_12038 = func.call(null,param);
var inst_12039 = cljs.core.deref.call(null,time_out);
var inst_12040 = cljs.core.async.timeout.call(null,inst_12039);
var state_12050__$1 = (function (){var statearr_12055 = state_12050;
(statearr_12055[(7)] = inst_12038);

return statearr_12055;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12050__$1,(7),inst_12040);
} else {
if((state_val_12051 === (5))){
var state_12050__$1 = state_12050;
var statearr_12056_12076 = state_12050__$1;
(statearr_12056_12076[(2)] = null);

(statearr_12056_12076[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (6))){
var inst_12046 = (state_12050[(2)]);
var state_12050__$1 = state_12050;
var statearr_12057_12077 = state_12050__$1;
(statearr_12057_12077[(2)] = inst_12046);

(statearr_12057_12077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (7))){
var inst_12042 = (state_12050[(2)]);
var state_12050__$1 = (function (){var statearr_12058 = state_12050;
(statearr_12058[(8)] = inst_12042);

return statearr_12058;
})();
var statearr_12059_12078 = state_12050__$1;
(statearr_12059_12078[(2)] = null);

(statearr_12059_12078[(1)] = (2));


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
});
return (function() {
var light$view3d$client$state_machine__2332__auto__ = null;
var light$view3d$client$state_machine__2332__auto____0 = (function (){
var statearr_12060 = [null,null,null,null,null,null,null,null,null];
(statearr_12060[(0)] = light$view3d$client$state_machine__2332__auto__);

(statearr_12060[(1)] = (1));

return statearr_12060;
});
var light$view3d$client$state_machine__2332__auto____1 = (function (state_12050){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_12050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e12061){var ex__2335__auto__ = e12061;
var statearr_12062_12079 = state_12050;
(statearr_12062_12079[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_12050[(4)]))){
var statearr_12063_12080 = state_12050;
(statearr_12063_12080[(1)] = cljs.core.first.call(null,(state_12050[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12081 = state_12050;
state_12050 = G__12081;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
light$view3d$client$state_machine__2332__auto__ = function(state_12050){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2332__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2332__auto____1.call(this,state_12050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2332__auto____0;
light$view3d$client$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2332__auto____1;
return light$view3d$client$state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_12064 = f__8278__auto__.call(null);
(statearr_12064[(6)] = c__8277__auto__);

return statearr_12064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
}));

return c__8277__auto__;
}));

(light.view3d.client.repeater_BANG_.cljs$lang$maxFixedArity = 3);

light.view3d.client.read_transit = (function light$view3d$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
light.view3d.client.by_id = (function light$view3d$client$by_id(id){
return document.getElementById(id);
});
light.view3d.client.get_html_BANG_ = (function light$view3d$client$get_html_BANG_(id){
return document.getElementById(id).innerHTML;
});
light.view3d.client.set_html_BANG_ = (function light$view3d$client$set_html_BANG_(id,msg){
return (document.getElementById(id).innerHTML = msg);
});
light.view3d.client.num_val = (function light$view3d$client$num_val(x){
if(typeof x === 'number'){
return x;
} else {
return cljs.reader.read_string.call(null,x);
}
});
light.view3d.client.viewM = (function light$view3d$client$viewM(){
var deg = light.view3d.client.num_val.call(null,light.view3d.client.get_html_BANG_.call(null,"view-fld"));
var deg__$1 = ((cljs.core._EQ_.call(null,deg,(-180)))?(180):(deg - (1)));
cljs.core._vreset_BANG_.call(null,light.czm.core.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.czm.core.CAMERA),new cljs.core.Keyword(null,"view","view",1247994814),deg__$1));

light.view3d.client.set_html_BANG_.call(null,"view-fld",deg__$1);

return (light.view3d.client.by_id.call(null,"view-vals").value = deg__$1);
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
light.view3d.client.viewP = (function light$view3d$client$viewP(){
var deg = light.view3d.client.num_val.call(null,light.view3d.client.get_html_BANG_.call(null,"view-fld"));
var deg__$1 = ((cljs.core._EQ_.call(null,deg,(180)))?(-180):(deg + (1)));
cljs.core._vreset_BANG_.call(null,light.czm.core.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.czm.core.CAMERA),new cljs.core.Keyword(null,"view","view",1247994814),deg__$1));

light.view3d.client.set_html_BANG_.call(null,"view-fld",deg__$1);

return (light.view3d.client.by_id.call(null,"view-vals").value = deg__$1);
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
return light.view3d.client.format.call(null,"%.1f km",(m / (1000)));
});
light.view3d.client.zoomP = (function light$view3d$client$zoomP(){
var v = light.view3d.client.num_val.call(null,light.czm.core.get_zoom.call(null));
var v__$1 = (v + light.view3d.client.ZOOM_STEP);
light.czm.core.set_zoom.call(null,v__$1);

light.view3d.client.set_html_BANG_.call(null,"zoom-val",light.view3d.client.zoom_format.call(null,v__$1));

return (light.view3d.client.by_id.call(null,"zoom-slv").value = v__$1);
});
light.view3d.client.zoomM = (function light$view3d$client$zoomM(){
var v = light.view3d.client.num_val.call(null,light.czm.core.get_zoom.call(null));
var v__$1 = (v - light.view3d.client.ZOOM_STEP);
var v__$2 = (((v__$1 < (0)))?(0):v__$1);
light.czm.core.set_zoom.call(null,v__$2);

light.view3d.client.set_html_BANG_.call(null,"zoom-val",light.view3d.client.zoom_format.call(null,v__$2));

return (light.view3d.client.by_id.call(null,"zoom-slv").value = v__$2);
});
light.view3d.client.zoom_amount = (function light$view3d$client$zoom_amount(amount){
var v = light.view3d.client.num_val.call(null,amount);
light.czm.core.set_zoom.call(null,v);

return light.view3d.client.set_html_BANG_.call(null,"zoom-val",light.view3d.client.zoom_format.call(null,v));
});
light.view3d.client.response_request = (function light$view3d$client$response_request(){
var resp = cljs.core.deref.call(null,light.view3d.client.RESPONSE);
if((!(cljs.core.empty_QMARK_.call(null,resp)))){
ajax.core.GET.call(null,"/response",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response","response",-1068424192),(function (){try{return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),resp);
}catch (e12082){if((e12082 instanceof Error)){
var e = e12082;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e12082;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),light.view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
light.view3d.client.handle_request = (function light$view3d$client$handle_request(request){
var temp__5802__auto___12089 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto___12089)){
var vie_12090 = temp__5802__auto___12089;
light.view3d.client.view.call(null,vie_12090);
} else {
}

var temp__5802__auto___12091 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto___12091)){
var pit_12092 = temp__5802__auto___12091;
light.view3d.client.pitch.call(null,pit_12092);
} else {
}

var temp__5802__auto___12093 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto___12093)){
var rol_12094 = temp__5802__auto___12093;
light.view3d.client.roll.call(null,rol_12094);
} else {
}

var temp__5802__auto___12095 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto___12095)){
var vec__12083_12096 = temp__5802__auto___12095;
var lat_12097 = cljs.core.nth.call(null,vec__12083_12096,(0),null);
var lon_12098 = cljs.core.nth.call(null,vec__12083_12096,(1),null);
var vec__12086_12099 = light.czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [light.geo.calc.radians.call(null,lat_12097),light.geo.calc.radians.call(null,lon_12098)], null),(0));
var __12100 = cljs.core.nth.call(null,vec__12086_12099,(0),null);
var __12101__$1 = cljs.core.nth.call(null,vec__12086_12099,(1),null);
var sh_12102 = cljs.core.nth.call(null,vec__12086_12099,(2),null);
cljs.core._vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_12102 | (0))));
} else {
}

return light.view3d.client.response_request.call(null);
});
light.view3d.client.handle_vehicle = (function light$view3d$client$handle_vehicle(vehicle){
var vec__12103 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__12103,(0),null);
var lon = cljs.core.nth.call(null,vec__12103,(1),null);
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
var temp__5802__auto___12106 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5802__auto___12106)){
var vehicle_12107 = temp__5802__auto___12106;
light.view3d.client.handle_vehicle.call(null,vehicle_12107);
} else {
}

var temp__5802__auto__ = new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5802__auto__)){
var request = temp__5802__auto__;
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

light.view3d.client.set_html_BANG_.call(null,"pitch-sld","<input type='range' style='width:200px' id='pitch-vals'\n               min='-90' value='0' max='90'\n               oninput='javascript:light.view3d.client.pitch(this.value)'>");

light.view3d.client.set_html_BANG_.call(null,"view","View:");

light.view3d.client.set_html_BANG_.call(null,"view-fld",(0));

light.view3d.client.set_html_BANG_.call(null,"view-sld","<input type='range' style='width:200px' id='view-vals'\n               min='-180' value='0' max='180'\n               oninput='javascript:light.view3d.client.view(this.value)'>");

light.view3d.client.set_html_BANG_.call(null,"viewM-btn","<button onclick='javascript:light.view3d.client.viewM()'>view-</button>");

return light.view3d.client.set_html_BANG_.call(null,"viewP-btn","<button onclick='javascript:light.view3d.client.viewP()'>view+</button>");
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

light.view3d.client.set_html_BANG_.call(null,"zoom-sld","<input type='range' style='width:200px' id='zoom-slv'\n               min='0' value='0' max='40000'\n               oninput='javascript:light.view3d.client.zoom_amount(this.value)'>");

light.view3d.client.set_html_BANG_.call(null,"zoom-val","0 m");

light.view3d.client.set_html_BANG_.call(null,"zoomM","<button onclick='javascript:light.view3d.client.zoomM()'>-</button>");

return light.view3d.client.set_html_BANG_.call(null,"zoomP","<button onclick='javascript:light.view3d.client.zoomP()'>+</button>");
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
var temp__5804__auto__ = cljs.core.first.call(null,light.view3d.client.read_transit.call(null,response));
if(cljs.core.truth_(temp__5804__auto__)){
var req = temp__5804__auto__;
cljs.core.println.call(null,req);

var temp__5802__auto__ = new cljs.core.Keyword(null,"sexp","sexp",-1528364050).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5802__auto__)){
var sexp = temp__5802__auto__;
return evaluate.call(null,sexp);
} else {
return null;
}
} else {
return null;
}
});
ajax.core.GET.call(null,"/cli-repl",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transit","transit",359458387),(function (){try{return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),cljs.core.deref.call(null,light.view3d.client.CLI_REPL).call(null,new cljs.core.Keyword(null,"value","value",305978217)));
}catch (e12108){if((e12108 instanceof Error)){
var e = e12108;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e12108;

}
}})()], null),new cljs.core.Keyword(null,"handler","handler",-195596612),hand,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),light.view3d.client.error_handler], null));

return setTimeout(light.view3d.client.run_repl,(1000));
});
light.view3d.client.tst = (function light$view3d$client$tst(){
(light.czm.core.VIEWER.scene.globe.depthTestAgainstTerrain = true);

cljs.core.println.call(null,new cljs.core.Keyword(null,"D","D",-8015893),light.czm.core.VIEWER.scene.globe.depthTestAgainstTerrain);

var ppc = (new Cesium.PointPrimitiveCollection(({"heightReference": Cesium.HeightReference.CLAMP_TO_GROUND})));
var lla = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.6,7.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.61,7.51], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.6,7.52], null)], null);
var clr = Cesium.Color.YELLOW;
var size = (10);
var prims = light.czm.core.VIEWER.scene.primitives.add(ppc);
return fillPointPrimColl(prims,cljs.core.clj__GT_js.call(null,lla),clr,size);
});
cljs.core.enable_console_print_BANG_.call(null);
(window.onload = light.view3d.client.on_load.call(null));

//# sourceMappingURL=client.js.map
