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
var map__20065 = response;
var map__20065__$1 = (((((!((map__20065 == null))))?(((((map__20065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20065):map__20065);
var status = cljs.core.get.call(null,map__20065__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__20065__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
view3d.client.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
view3d.client.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
view3d.client.PORT = (8421);
view3d.client.repeater = (function view3d$client$repeater(var_args){
var G__20068 = arguments.length;
switch (G__20068) {
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
var c__16110__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16110__auto__){
return (function (){
var f__16111__auto__ = (function (){var switch__15943__auto__ = ((function (c__16110__auto__){
return (function (state_20082){
var state_val_20083 = (state_20082[(1)]);
if((state_val_20083 === (1))){
var state_20082__$1 = state_20082;
var statearr_20084_20124 = state_20082__$1;
(statearr_20084_20124[(2)] = null);

(statearr_20084_20124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20083 === (2))){
var state_20082__$1 = state_20082;
var statearr_20085_20125 = state_20082__$1;
(statearr_20085_20125[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20083 === (3))){
var inst_20080 = (state_20082[(2)]);
var state_20082__$1 = state_20082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20082__$1,inst_20080);
} else {
if((state_val_20083 === (4))){
var inst_20071 = func.call(null);
var inst_20072 = cljs.core.async.timeout.call(null,time_out);
var state_20082__$1 = (function (){var statearr_20087 = state_20082;
(statearr_20087[(7)] = inst_20071);

return statearr_20087;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20082__$1,(7),inst_20072);
} else {
if((state_val_20083 === (5))){
var state_20082__$1 = state_20082;
var statearr_20088_20126 = state_20082__$1;
(statearr_20088_20126[(2)] = null);

(statearr_20088_20126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20083 === (6))){
var inst_20078 = (state_20082[(2)]);
var state_20082__$1 = state_20082;
var statearr_20089_20127 = state_20082__$1;
(statearr_20089_20127[(2)] = inst_20078);

(statearr_20089_20127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20083 === (7))){
var inst_20074 = (state_20082[(2)]);
var state_20082__$1 = (function (){var statearr_20090 = state_20082;
(statearr_20090[(8)] = inst_20074);

return statearr_20090;
})();
var statearr_20091_20128 = state_20082__$1;
(statearr_20091_20128[(2)] = null);

(statearr_20091_20128[(1)] = (2));


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
});})(c__16110__auto__))
;
return ((function (switch__15943__auto__,c__16110__auto__){
return (function() {
var view3d$client$state_machine__15944__auto__ = null;
var view3d$client$state_machine__15944__auto____0 = (function (){
var statearr_20092 = [null,null,null,null,null,null,null,null,null];
(statearr_20092[(0)] = view3d$client$state_machine__15944__auto__);

(statearr_20092[(1)] = (1));

return statearr_20092;
});
var view3d$client$state_machine__15944__auto____1 = (function (state_20082){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_20082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e20093){if((e20093 instanceof Object)){
var ex__15947__auto__ = e20093;
var statearr_20094_20129 = state_20082;
(statearr_20094_20129[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20130 = state_20082;
state_20082 = G__20130;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
view3d$client$state_machine__15944__auto__ = function(state_20082){
switch(arguments.length){
case 0:
return view3d$client$state_machine__15944__auto____0.call(this);
case 1:
return view3d$client$state_machine__15944__auto____1.call(this,state_20082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__15944__auto____0;
view3d$client$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__15944__auto____1;
return view3d$client$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16110__auto__))
})();
var state__16112__auto__ = (function (){var statearr_20095 = f__16111__auto__.call(null);
(statearr_20095[(6)] = c__16110__auto__);

return statearr_20095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16112__auto__);
});})(c__16110__auto__))
);

return c__16110__auto__;
});

view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__16110__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16110__auto__){
return (function (){
var f__16111__auto__ = (function (){var switch__15943__auto__ = ((function (c__16110__auto__){
return (function (state_20109){
var state_val_20110 = (state_20109[(1)]);
if((state_val_20110 === (1))){
var state_20109__$1 = state_20109;
var statearr_20111_20131 = state_20109__$1;
(statearr_20111_20131[(2)] = null);

(statearr_20111_20131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20110 === (2))){
var state_20109__$1 = state_20109;
var statearr_20112_20132 = state_20109__$1;
(statearr_20112_20132[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20110 === (3))){
var inst_20107 = (state_20109[(2)]);
var state_20109__$1 = state_20109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20109__$1,inst_20107);
} else {
if((state_val_20110 === (4))){
var inst_20098 = func.call(null,param);
var inst_20099 = cljs.core.async.timeout.call(null,time_out);
var state_20109__$1 = (function (){var statearr_20114 = state_20109;
(statearr_20114[(7)] = inst_20098);

return statearr_20114;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20109__$1,(7),inst_20099);
} else {
if((state_val_20110 === (5))){
var state_20109__$1 = state_20109;
var statearr_20115_20133 = state_20109__$1;
(statearr_20115_20133[(2)] = null);

(statearr_20115_20133[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20110 === (6))){
var inst_20105 = (state_20109[(2)]);
var state_20109__$1 = state_20109;
var statearr_20116_20134 = state_20109__$1;
(statearr_20116_20134[(2)] = inst_20105);

(statearr_20116_20134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20110 === (7))){
var inst_20101 = (state_20109[(2)]);
var state_20109__$1 = (function (){var statearr_20117 = state_20109;
(statearr_20117[(8)] = inst_20101);

return statearr_20117;
})();
var statearr_20118_20135 = state_20109__$1;
(statearr_20118_20135[(2)] = null);

(statearr_20118_20135[(1)] = (2));


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
});})(c__16110__auto__))
;
return ((function (switch__15943__auto__,c__16110__auto__){
return (function() {
var view3d$client$state_machine__15944__auto__ = null;
var view3d$client$state_machine__15944__auto____0 = (function (){
var statearr_20119 = [null,null,null,null,null,null,null,null,null];
(statearr_20119[(0)] = view3d$client$state_machine__15944__auto__);

(statearr_20119[(1)] = (1));

return statearr_20119;
});
var view3d$client$state_machine__15944__auto____1 = (function (state_20109){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_20109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e20120){if((e20120 instanceof Object)){
var ex__15947__auto__ = e20120;
var statearr_20121_20136 = state_20109;
(statearr_20121_20136[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20137 = state_20109;
state_20109 = G__20137;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
view3d$client$state_machine__15944__auto__ = function(state_20109){
switch(arguments.length){
case 0:
return view3d$client$state_machine__15944__auto____0.call(this);
case 1:
return view3d$client$state_machine__15944__auto____1.call(this,state_20109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__15944__auto____0;
view3d$client$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__15944__auto____1;
return view3d$client$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16110__auto__))
})();
var state__16112__auto__ = (function (){var statearr_20122 = f__16111__auto__.call(null);
(statearr_20122[(6)] = c__16110__auto__);

return statearr_20122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16112__auto__);
});})(c__16110__auto__))
);

return c__16110__auto__;
});

view3d.client.repeater.cljs$lang$maxFixedArity = 3;

view3d.client.repeater_BANG_ = (function view3d$client$repeater_BANG_(var_args){
var G__20139 = arguments.length;
switch (G__20139) {
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
var c__16110__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16110__auto__){
return (function (){
var f__16111__auto__ = (function (){var switch__15943__auto__ = ((function (c__16110__auto__){
return (function (state_20154){
var state_val_20155 = (state_20154[(1)]);
if((state_val_20155 === (1))){
var state_20154__$1 = state_20154;
var statearr_20156_20197 = state_20154__$1;
(statearr_20156_20197[(2)] = null);

(statearr_20156_20197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (2))){
var state_20154__$1 = state_20154;
var statearr_20157_20198 = state_20154__$1;
(statearr_20157_20198[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (3))){
var inst_20152 = (state_20154[(2)]);
var state_20154__$1 = state_20154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20154__$1,inst_20152);
} else {
if((state_val_20155 === (4))){
var inst_20142 = func.call(null);
var inst_20143 = cljs.core.deref.call(null,time_out);
var inst_20144 = cljs.core.async.timeout.call(null,inst_20143);
var state_20154__$1 = (function (){var statearr_20159 = state_20154;
(statearr_20159[(7)] = inst_20142);

return statearr_20159;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20154__$1,(7),inst_20144);
} else {
if((state_val_20155 === (5))){
var state_20154__$1 = state_20154;
var statearr_20160_20199 = state_20154__$1;
(statearr_20160_20199[(2)] = null);

(statearr_20160_20199[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (6))){
var inst_20150 = (state_20154[(2)]);
var state_20154__$1 = state_20154;
var statearr_20161_20200 = state_20154__$1;
(statearr_20161_20200[(2)] = inst_20150);

(statearr_20161_20200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20155 === (7))){
var inst_20146 = (state_20154[(2)]);
var state_20154__$1 = (function (){var statearr_20162 = state_20154;
(statearr_20162[(8)] = inst_20146);

return statearr_20162;
})();
var statearr_20163_20201 = state_20154__$1;
(statearr_20163_20201[(2)] = null);

(statearr_20163_20201[(1)] = (2));


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
});})(c__16110__auto__))
;
return ((function (switch__15943__auto__,c__16110__auto__){
return (function() {
var view3d$client$state_machine__15944__auto__ = null;
var view3d$client$state_machine__15944__auto____0 = (function (){
var statearr_20164 = [null,null,null,null,null,null,null,null,null];
(statearr_20164[(0)] = view3d$client$state_machine__15944__auto__);

(statearr_20164[(1)] = (1));

return statearr_20164;
});
var view3d$client$state_machine__15944__auto____1 = (function (state_20154){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_20154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e20165){if((e20165 instanceof Object)){
var ex__15947__auto__ = e20165;
var statearr_20166_20202 = state_20154;
(statearr_20166_20202[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20203 = state_20154;
state_20154 = G__20203;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
view3d$client$state_machine__15944__auto__ = function(state_20154){
switch(arguments.length){
case 0:
return view3d$client$state_machine__15944__auto____0.call(this);
case 1:
return view3d$client$state_machine__15944__auto____1.call(this,state_20154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__15944__auto____0;
view3d$client$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__15944__auto____1;
return view3d$client$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16110__auto__))
})();
var state__16112__auto__ = (function (){var statearr_20167 = f__16111__auto__.call(null);
(statearr_20167[(6)] = c__16110__auto__);

return statearr_20167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16112__auto__);
});})(c__16110__auto__))
);

return c__16110__auto__;
});

view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__16110__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16110__auto__){
return (function (){
var f__16111__auto__ = (function (){var switch__15943__auto__ = ((function (c__16110__auto__){
return (function (state_20182){
var state_val_20183 = (state_20182[(1)]);
if((state_val_20183 === (1))){
var state_20182__$1 = state_20182;
var statearr_20184_20204 = state_20182__$1;
(statearr_20184_20204[(2)] = null);

(statearr_20184_20204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20183 === (2))){
var state_20182__$1 = state_20182;
var statearr_20185_20205 = state_20182__$1;
(statearr_20185_20205[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20183 === (3))){
var inst_20180 = (state_20182[(2)]);
var state_20182__$1 = state_20182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20182__$1,inst_20180);
} else {
if((state_val_20183 === (4))){
var inst_20170 = func.call(null,param);
var inst_20171 = cljs.core.deref.call(null,time_out);
var inst_20172 = cljs.core.async.timeout.call(null,inst_20171);
var state_20182__$1 = (function (){var statearr_20187 = state_20182;
(statearr_20187[(7)] = inst_20170);

return statearr_20187;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20182__$1,(7),inst_20172);
} else {
if((state_val_20183 === (5))){
var state_20182__$1 = state_20182;
var statearr_20188_20206 = state_20182__$1;
(statearr_20188_20206[(2)] = null);

(statearr_20188_20206[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20183 === (6))){
var inst_20178 = (state_20182[(2)]);
var state_20182__$1 = state_20182;
var statearr_20189_20207 = state_20182__$1;
(statearr_20189_20207[(2)] = inst_20178);

(statearr_20189_20207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20183 === (7))){
var inst_20174 = (state_20182[(2)]);
var state_20182__$1 = (function (){var statearr_20190 = state_20182;
(statearr_20190[(8)] = inst_20174);

return statearr_20190;
})();
var statearr_20191_20208 = state_20182__$1;
(statearr_20191_20208[(2)] = null);

(statearr_20191_20208[(1)] = (2));


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
});})(c__16110__auto__))
;
return ((function (switch__15943__auto__,c__16110__auto__){
return (function() {
var view3d$client$state_machine__15944__auto__ = null;
var view3d$client$state_machine__15944__auto____0 = (function (){
var statearr_20192 = [null,null,null,null,null,null,null,null,null];
(statearr_20192[(0)] = view3d$client$state_machine__15944__auto__);

(statearr_20192[(1)] = (1));

return statearr_20192;
});
var view3d$client$state_machine__15944__auto____1 = (function (state_20182){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_20182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e20193){if((e20193 instanceof Object)){
var ex__15947__auto__ = e20193;
var statearr_20194_20209 = state_20182;
(statearr_20194_20209[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20210 = state_20182;
state_20182 = G__20210;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
view3d$client$state_machine__15944__auto__ = function(state_20182){
switch(arguments.length){
case 0:
return view3d$client$state_machine__15944__auto____0.call(this);
case 1:
return view3d$client$state_machine__15944__auto____1.call(this,state_20182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__15944__auto____0;
view3d$client$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__15944__auto____1;
return view3d$client$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16110__auto__))
})();
var state__16112__auto__ = (function (){var statearr_20195 = f__16111__auto__.call(null);
(statearr_20195[(6)] = c__16110__auto__);

return statearr_20195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16112__auto__);
});})(c__16110__auto__))
);

return c__16110__auto__;
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
}catch (e20211){if((e20211 instanceof Error)){
var e = e20211;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e20211;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
view3d.client.handle_request = (function view3d$client$handle_request(request){
var temp__5733__auto___20218 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___20218)){
var vie_20219 = temp__5733__auto___20218;
view3d.client.view.call(null,vie_20219);
} else {
}

var temp__5733__auto___20220 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___20220)){
var pit_20221 = temp__5733__auto___20220;
view3d.client.pitch.call(null,pit_20221);
} else {
}

var temp__5733__auto___20222 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___20222)){
var rol_20223 = temp__5733__auto___20222;
view3d.client.roll.call(null,rol_20223);
} else {
}

var temp__5733__auto___20224 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___20224)){
var vec__20212_20225 = temp__5733__auto___20224;
var lat_20226 = cljs.core.nth.call(null,vec__20212_20225,(0),null);
var lon_20227 = cljs.core.nth.call(null,vec__20212_20225,(1),null);
var vec__20215_20228 = czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [geo.calc.radians.call(null,lat_20226),geo.calc.radians.call(null,lon_20227)], null),(0));
var __20229 = cljs.core.nth.call(null,vec__20215_20228,(0),null);
var __20230__$1 = cljs.core.nth.call(null,vec__20215_20228,(1),null);
var sh_20231 = cljs.core.nth.call(null,vec__20215_20228,(2),null);
cljs.core._vreset_BANG_.call(null,view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_20231 | (0))));
} else {
}

return view3d.client.response_request.call(null);
});
view3d.client.handle_vehicle = (function view3d$client$handle_vehicle(vehicle){
var vec__20232 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__20232,(0),null);
var lon = cljs.core.nth.call(null,vec__20232,(1),null);
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
var temp__5733__auto___20235 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5733__auto___20235)){
var vehicle_20236 = temp__5733__auto___20235;
view3d.client.handle_vehicle.call(null,vehicle_20236);
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
czm.core.init_3D_view.call(null,["http://0.0.0.0/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.PORT)].join(''));

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
}catch (e20237){if((e20237 instanceof Error)){
var e = e20237;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e20237;

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
