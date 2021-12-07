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
var map__11883 = response;
var map__11883__$1 = (((((!((map__11883 == null))))?(((((map__11883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11883):map__11883);
var status = cljs.core.get.call(null,map__11883__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__11883__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
light.view3d.client.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
light.view3d.client.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
light.view3d.client.PORT = (8448);
light.view3d.client.format = (function light$view3d$client$format(var_args){
var args__4647__auto__ = [];
var len__4641__auto___11887 = arguments.length;
var i__4642__auto___11888 = (0);
while(true){
if((i__4642__auto___11888 < len__4641__auto___11887)){
args__4647__auto__.push((arguments[i__4642__auto___11888]));

var G__11889 = (i__4642__auto___11888 + (1));
i__4642__auto___11888 = G__11889;
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
light.view3d.client.format.cljs$lang$applyTo = (function (seq11885){
var G__11886 = cljs.core.first.call(null,seq11885);
var seq11885__$1 = cljs.core.next.call(null,seq11885);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11886,seq11885__$1);
});

light.view3d.client.repeater = (function light$view3d$client$repeater(var_args){
var G__11891 = arguments.length;
switch (G__11891) {
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
var c__11526__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11526__auto__){
return (function (){
var f__11527__auto__ = (function (){var switch__11503__auto__ = ((function (c__11526__auto__){
return (function (state_11905){
var state_val_11906 = (state_11905[(1)]);
if((state_val_11906 === (1))){
var state_11905__$1 = state_11905;
var statearr_11907_11947 = state_11905__$1;
(statearr_11907_11947[(2)] = null);

(statearr_11907_11947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11906 === (2))){
var state_11905__$1 = state_11905;
var statearr_11908_11948 = state_11905__$1;
(statearr_11908_11948[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11906 === (3))){
var inst_11903 = (state_11905[(2)]);
var state_11905__$1 = state_11905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11905__$1,inst_11903);
} else {
if((state_val_11906 === (4))){
var inst_11894 = func.call(null);
var inst_11895 = cljs.core.async.timeout.call(null,time_out);
var state_11905__$1 = (function (){var statearr_11910 = state_11905;
(statearr_11910[(7)] = inst_11894);

return statearr_11910;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11905__$1,(7),inst_11895);
} else {
if((state_val_11906 === (5))){
var state_11905__$1 = state_11905;
var statearr_11911_11949 = state_11905__$1;
(statearr_11911_11949[(2)] = null);

(statearr_11911_11949[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11906 === (6))){
var inst_11901 = (state_11905[(2)]);
var state_11905__$1 = state_11905;
var statearr_11912_11950 = state_11905__$1;
(statearr_11912_11950[(2)] = inst_11901);

(statearr_11912_11950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11906 === (7))){
var inst_11897 = (state_11905[(2)]);
var state_11905__$1 = (function (){var statearr_11913 = state_11905;
(statearr_11913[(8)] = inst_11897);

return statearr_11913;
})();
var statearr_11914_11951 = state_11905__$1;
(statearr_11914_11951[(2)] = null);

(statearr_11914_11951[(1)] = (2));


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
});})(c__11526__auto__))
;
return ((function (switch__11503__auto__,c__11526__auto__){
return (function() {
var light$view3d$client$state_machine__11504__auto__ = null;
var light$view3d$client$state_machine__11504__auto____0 = (function (){
var statearr_11915 = [null,null,null,null,null,null,null,null,null];
(statearr_11915[(0)] = light$view3d$client$state_machine__11504__auto__);

(statearr_11915[(1)] = (1));

return statearr_11915;
});
var light$view3d$client$state_machine__11504__auto____1 = (function (state_11905){
while(true){
var ret_value__11505__auto__ = (function (){try{while(true){
var result__11506__auto__ = switch__11503__auto__.call(null,state_11905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11506__auto__;
}
break;
}
}catch (e11916){if((e11916 instanceof Object)){
var ex__11507__auto__ = e11916;
var statearr_11917_11952 = state_11905;
(statearr_11917_11952[(5)] = ex__11507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11953 = state_11905;
state_11905 = G__11953;
continue;
} else {
return ret_value__11505__auto__;
}
break;
}
});
light$view3d$client$state_machine__11504__auto__ = function(state_11905){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__11504__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__11504__auto____1.call(this,state_11905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__11504__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__11504__auto____0;
light$view3d$client$state_machine__11504__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__11504__auto____1;
return light$view3d$client$state_machine__11504__auto__;
})()
;})(switch__11503__auto__,c__11526__auto__))
})();
var state__11528__auto__ = (function (){var statearr_11918 = f__11527__auto__.call(null);
(statearr_11918[(6)] = c__11526__auto__);

return statearr_11918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11528__auto__);
});})(c__11526__auto__))
);

return c__11526__auto__;
});

light.view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__11526__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11526__auto__){
return (function (){
var f__11527__auto__ = (function (){var switch__11503__auto__ = ((function (c__11526__auto__){
return (function (state_11932){
var state_val_11933 = (state_11932[(1)]);
if((state_val_11933 === (1))){
var state_11932__$1 = state_11932;
var statearr_11934_11954 = state_11932__$1;
(statearr_11934_11954[(2)] = null);

(statearr_11934_11954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (2))){
var state_11932__$1 = state_11932;
var statearr_11935_11955 = state_11932__$1;
(statearr_11935_11955[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (3))){
var inst_11930 = (state_11932[(2)]);
var state_11932__$1 = state_11932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11932__$1,inst_11930);
} else {
if((state_val_11933 === (4))){
var inst_11921 = func.call(null,param);
var inst_11922 = cljs.core.async.timeout.call(null,time_out);
var state_11932__$1 = (function (){var statearr_11937 = state_11932;
(statearr_11937[(7)] = inst_11921);

return statearr_11937;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11932__$1,(7),inst_11922);
} else {
if((state_val_11933 === (5))){
var state_11932__$1 = state_11932;
var statearr_11938_11956 = state_11932__$1;
(statearr_11938_11956[(2)] = null);

(statearr_11938_11956[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (6))){
var inst_11928 = (state_11932[(2)]);
var state_11932__$1 = state_11932;
var statearr_11939_11957 = state_11932__$1;
(statearr_11939_11957[(2)] = inst_11928);

(statearr_11939_11957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (7))){
var inst_11924 = (state_11932[(2)]);
var state_11932__$1 = (function (){var statearr_11940 = state_11932;
(statearr_11940[(8)] = inst_11924);

return statearr_11940;
})();
var statearr_11941_11958 = state_11932__$1;
(statearr_11941_11958[(2)] = null);

(statearr_11941_11958[(1)] = (2));


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
});})(c__11526__auto__))
;
return ((function (switch__11503__auto__,c__11526__auto__){
return (function() {
var light$view3d$client$state_machine__11504__auto__ = null;
var light$view3d$client$state_machine__11504__auto____0 = (function (){
var statearr_11942 = [null,null,null,null,null,null,null,null,null];
(statearr_11942[(0)] = light$view3d$client$state_machine__11504__auto__);

(statearr_11942[(1)] = (1));

return statearr_11942;
});
var light$view3d$client$state_machine__11504__auto____1 = (function (state_11932){
while(true){
var ret_value__11505__auto__ = (function (){try{while(true){
var result__11506__auto__ = switch__11503__auto__.call(null,state_11932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11506__auto__;
}
break;
}
}catch (e11943){if((e11943 instanceof Object)){
var ex__11507__auto__ = e11943;
var statearr_11944_11959 = state_11932;
(statearr_11944_11959[(5)] = ex__11507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11960 = state_11932;
state_11932 = G__11960;
continue;
} else {
return ret_value__11505__auto__;
}
break;
}
});
light$view3d$client$state_machine__11504__auto__ = function(state_11932){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__11504__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__11504__auto____1.call(this,state_11932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__11504__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__11504__auto____0;
light$view3d$client$state_machine__11504__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__11504__auto____1;
return light$view3d$client$state_machine__11504__auto__;
})()
;})(switch__11503__auto__,c__11526__auto__))
})();
var state__11528__auto__ = (function (){var statearr_11945 = f__11527__auto__.call(null);
(statearr_11945[(6)] = c__11526__auto__);

return statearr_11945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11528__auto__);
});})(c__11526__auto__))
);

return c__11526__auto__;
});

light.view3d.client.repeater.cljs$lang$maxFixedArity = 3;

light.view3d.client.repeater_BANG_ = (function light$view3d$client$repeater_BANG_(var_args){
var G__11962 = arguments.length;
switch (G__11962) {
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
var c__11526__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11526__auto__){
return (function (){
var f__11527__auto__ = (function (){var switch__11503__auto__ = ((function (c__11526__auto__){
return (function (state_11977){
var state_val_11978 = (state_11977[(1)]);
if((state_val_11978 === (1))){
var state_11977__$1 = state_11977;
var statearr_11979_12020 = state_11977__$1;
(statearr_11979_12020[(2)] = null);

(statearr_11979_12020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (2))){
var state_11977__$1 = state_11977;
var statearr_11980_12021 = state_11977__$1;
(statearr_11980_12021[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (3))){
var inst_11975 = (state_11977[(2)]);
var state_11977__$1 = state_11977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11977__$1,inst_11975);
} else {
if((state_val_11978 === (4))){
var inst_11965 = func.call(null);
var inst_11966 = cljs.core.deref.call(null,time_out);
var inst_11967 = cljs.core.async.timeout.call(null,inst_11966);
var state_11977__$1 = (function (){var statearr_11982 = state_11977;
(statearr_11982[(7)] = inst_11965);

return statearr_11982;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11977__$1,(7),inst_11967);
} else {
if((state_val_11978 === (5))){
var state_11977__$1 = state_11977;
var statearr_11983_12022 = state_11977__$1;
(statearr_11983_12022[(2)] = null);

(statearr_11983_12022[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (6))){
var inst_11973 = (state_11977[(2)]);
var state_11977__$1 = state_11977;
var statearr_11984_12023 = state_11977__$1;
(statearr_11984_12023[(2)] = inst_11973);

(statearr_11984_12023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (7))){
var inst_11969 = (state_11977[(2)]);
var state_11977__$1 = (function (){var statearr_11985 = state_11977;
(statearr_11985[(8)] = inst_11969);

return statearr_11985;
})();
var statearr_11986_12024 = state_11977__$1;
(statearr_11986_12024[(2)] = null);

(statearr_11986_12024[(1)] = (2));


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
});})(c__11526__auto__))
;
return ((function (switch__11503__auto__,c__11526__auto__){
return (function() {
var light$view3d$client$state_machine__11504__auto__ = null;
var light$view3d$client$state_machine__11504__auto____0 = (function (){
var statearr_11987 = [null,null,null,null,null,null,null,null,null];
(statearr_11987[(0)] = light$view3d$client$state_machine__11504__auto__);

(statearr_11987[(1)] = (1));

return statearr_11987;
});
var light$view3d$client$state_machine__11504__auto____1 = (function (state_11977){
while(true){
var ret_value__11505__auto__ = (function (){try{while(true){
var result__11506__auto__ = switch__11503__auto__.call(null,state_11977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11506__auto__;
}
break;
}
}catch (e11988){if((e11988 instanceof Object)){
var ex__11507__auto__ = e11988;
var statearr_11989_12025 = state_11977;
(statearr_11989_12025[(5)] = ex__11507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12026 = state_11977;
state_11977 = G__12026;
continue;
} else {
return ret_value__11505__auto__;
}
break;
}
});
light$view3d$client$state_machine__11504__auto__ = function(state_11977){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__11504__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__11504__auto____1.call(this,state_11977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__11504__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__11504__auto____0;
light$view3d$client$state_machine__11504__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__11504__auto____1;
return light$view3d$client$state_machine__11504__auto__;
})()
;})(switch__11503__auto__,c__11526__auto__))
})();
var state__11528__auto__ = (function (){var statearr_11990 = f__11527__auto__.call(null);
(statearr_11990[(6)] = c__11526__auto__);

return statearr_11990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11528__auto__);
});})(c__11526__auto__))
);

return c__11526__auto__;
});

light.view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__11526__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11526__auto__){
return (function (){
var f__11527__auto__ = (function (){var switch__11503__auto__ = ((function (c__11526__auto__){
return (function (state_12005){
var state_val_12006 = (state_12005[(1)]);
if((state_val_12006 === (1))){
var state_12005__$1 = state_12005;
var statearr_12007_12027 = state_12005__$1;
(statearr_12007_12027[(2)] = null);

(statearr_12007_12027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12006 === (2))){
var state_12005__$1 = state_12005;
var statearr_12008_12028 = state_12005__$1;
(statearr_12008_12028[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12006 === (3))){
var inst_12003 = (state_12005[(2)]);
var state_12005__$1 = state_12005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12005__$1,inst_12003);
} else {
if((state_val_12006 === (4))){
var inst_11993 = func.call(null,param);
var inst_11994 = cljs.core.deref.call(null,time_out);
var inst_11995 = cljs.core.async.timeout.call(null,inst_11994);
var state_12005__$1 = (function (){var statearr_12010 = state_12005;
(statearr_12010[(7)] = inst_11993);

return statearr_12010;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12005__$1,(7),inst_11995);
} else {
if((state_val_12006 === (5))){
var state_12005__$1 = state_12005;
var statearr_12011_12029 = state_12005__$1;
(statearr_12011_12029[(2)] = null);

(statearr_12011_12029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12006 === (6))){
var inst_12001 = (state_12005[(2)]);
var state_12005__$1 = state_12005;
var statearr_12012_12030 = state_12005__$1;
(statearr_12012_12030[(2)] = inst_12001);

(statearr_12012_12030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12006 === (7))){
var inst_11997 = (state_12005[(2)]);
var state_12005__$1 = (function (){var statearr_12013 = state_12005;
(statearr_12013[(8)] = inst_11997);

return statearr_12013;
})();
var statearr_12014_12031 = state_12005__$1;
(statearr_12014_12031[(2)] = null);

(statearr_12014_12031[(1)] = (2));


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
});})(c__11526__auto__))
;
return ((function (switch__11503__auto__,c__11526__auto__){
return (function() {
var light$view3d$client$state_machine__11504__auto__ = null;
var light$view3d$client$state_machine__11504__auto____0 = (function (){
var statearr_12015 = [null,null,null,null,null,null,null,null,null];
(statearr_12015[(0)] = light$view3d$client$state_machine__11504__auto__);

(statearr_12015[(1)] = (1));

return statearr_12015;
});
var light$view3d$client$state_machine__11504__auto____1 = (function (state_12005){
while(true){
var ret_value__11505__auto__ = (function (){try{while(true){
var result__11506__auto__ = switch__11503__auto__.call(null,state_12005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11506__auto__;
}
break;
}
}catch (e12016){if((e12016 instanceof Object)){
var ex__11507__auto__ = e12016;
var statearr_12017_12032 = state_12005;
(statearr_12017_12032[(5)] = ex__11507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12033 = state_12005;
state_12005 = G__12033;
continue;
} else {
return ret_value__11505__auto__;
}
break;
}
});
light$view3d$client$state_machine__11504__auto__ = function(state_12005){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__11504__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__11504__auto____1.call(this,state_12005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__11504__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__11504__auto____0;
light$view3d$client$state_machine__11504__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__11504__auto____1;
return light$view3d$client$state_machine__11504__auto__;
})()
;})(switch__11503__auto__,c__11526__auto__))
})();
var state__11528__auto__ = (function (){var statearr_12018 = f__11527__auto__.call(null);
(statearr_12018[(6)] = c__11526__auto__);

return statearr_12018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11528__auto__);
});})(c__11526__auto__))
);

return c__11526__auto__;
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
return light.view3d.client.format.call(null,"%.0f nm",((m / 1000.0) / 1.852));
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
var pred__12034_12037 = cljs.core._EQ_;
var expr__12035_12038 = mode;
if(cljs.core.truth_(pred__12034_12037.call(null,(1),expr__12035_12038))){
light.czm.core.zoom_in.call(null);

zoom_on.call(null);
} else {
if(cljs.core.truth_(pred__12034_12037.call(null,(-1),expr__12035_12038))){
light.czm.core.zoom_out.call(null);

if(cljs.core.empty_QMARK_.call(null,light.czm.core.ZOOM)){
zoom_off.call(null);
} else {
}
} else {
if(cljs.core.truth_(pred__12034_12037.call(null,(0),expr__12035_12038))){
light.czm.core.zoom_no.call(null);

zoom_off.call(null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__12035_12038)].join('')));
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
}catch (e12039){if((e12039 instanceof Error)){
var e = e12039;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e12039;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),light.view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
light.view3d.client.handle_request = (function light$view3d$client$handle_request(request){
var temp__5733__auto___12046 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___12046)){
var vie_12047 = temp__5733__auto___12046;
light.view3d.client.view.call(null,vie_12047);
} else {
}

var temp__5733__auto___12048 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___12048)){
var pit_12049 = temp__5733__auto___12048;
light.view3d.client.pitch.call(null,pit_12049);
} else {
}

var temp__5733__auto___12050 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___12050)){
var rol_12051 = temp__5733__auto___12050;
light.view3d.client.roll.call(null,rol_12051);
} else {
}

var temp__5733__auto___12052 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___12052)){
var vec__12040_12053 = temp__5733__auto___12052;
var lat_12054 = cljs.core.nth.call(null,vec__12040_12053,(0),null);
var lon_12055 = cljs.core.nth.call(null,vec__12040_12053,(1),null);
var vec__12043_12056 = light.czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [light.geo.calc.radians.call(null,lat_12054),light.geo.calc.radians.call(null,lon_12055)], null),(0));
var __12057 = cljs.core.nth.call(null,vec__12043_12056,(0),null);
var __12058__$1 = cljs.core.nth.call(null,vec__12043_12056,(1),null);
var sh_12059 = cljs.core.nth.call(null,vec__12043_12056,(2),null);
cljs.core._vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_12059 | (0))));
} else {
}

return light.view3d.client.response_request.call(null);
});
light.view3d.client.handle_vehicle = (function light$view3d$client$handle_vehicle(vehicle){
var vec__12060 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__12060,(0),null);
var lon = cljs.core.nth.call(null,vec__12060,(1),null);
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
var temp__5733__auto___12063 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5733__auto___12063)){
var vehicle_12064 = temp__5733__auto___12063;
light.view3d.client.handle_vehicle.call(null,vehicle_12064);
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
}catch (e12065){if((e12065 instanceof Error)){
var e = e12065;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e12065;

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
