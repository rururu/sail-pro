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
var map__20850 = response;
var map__20850__$1 = (((((!((map__20850 == null))))?(((((map__20850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20850):map__20850);
var status = cljs.core.get.call(null,map__20850__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__20850__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
view3d.client.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
view3d.client.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
view3d.client.PORT = (8421);
view3d.client.repeater = (function view3d$client$repeater(var_args){
var G__20853 = arguments.length;
switch (G__20853) {
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
var c__16067__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16067__auto__){
return (function (){
var f__16068__auto__ = (function (){var switch__15900__auto__ = ((function (c__16067__auto__){
return (function (state_20867){
var state_val_20868 = (state_20867[(1)]);
if((state_val_20868 === (1))){
var state_20867__$1 = state_20867;
var statearr_20869_20909 = state_20867__$1;
(statearr_20869_20909[(2)] = null);

(statearr_20869_20909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20868 === (2))){
var state_20867__$1 = state_20867;
var statearr_20870_20910 = state_20867__$1;
(statearr_20870_20910[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20868 === (3))){
var inst_20865 = (state_20867[(2)]);
var state_20867__$1 = state_20867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20867__$1,inst_20865);
} else {
if((state_val_20868 === (4))){
var inst_20856 = func.call(null);
var inst_20857 = cljs.core.async.timeout.call(null,time_out);
var state_20867__$1 = (function (){var statearr_20872 = state_20867;
(statearr_20872[(7)] = inst_20856);

return statearr_20872;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20867__$1,(7),inst_20857);
} else {
if((state_val_20868 === (5))){
var state_20867__$1 = state_20867;
var statearr_20873_20911 = state_20867__$1;
(statearr_20873_20911[(2)] = null);

(statearr_20873_20911[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20868 === (6))){
var inst_20863 = (state_20867[(2)]);
var state_20867__$1 = state_20867;
var statearr_20874_20912 = state_20867__$1;
(statearr_20874_20912[(2)] = inst_20863);

(statearr_20874_20912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20868 === (7))){
var inst_20859 = (state_20867[(2)]);
var state_20867__$1 = (function (){var statearr_20875 = state_20867;
(statearr_20875[(8)] = inst_20859);

return statearr_20875;
})();
var statearr_20876_20913 = state_20867__$1;
(statearr_20876_20913[(2)] = null);

(statearr_20876_20913[(1)] = (2));


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
});})(c__16067__auto__))
;
return ((function (switch__15900__auto__,c__16067__auto__){
return (function() {
var view3d$client$state_machine__15901__auto__ = null;
var view3d$client$state_machine__15901__auto____0 = (function (){
var statearr_20877 = [null,null,null,null,null,null,null,null,null];
(statearr_20877[(0)] = view3d$client$state_machine__15901__auto__);

(statearr_20877[(1)] = (1));

return statearr_20877;
});
var view3d$client$state_machine__15901__auto____1 = (function (state_20867){
while(true){
var ret_value__15902__auto__ = (function (){try{while(true){
var result__15903__auto__ = switch__15900__auto__.call(null,state_20867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15903__auto__;
}
break;
}
}catch (e20878){if((e20878 instanceof Object)){
var ex__15904__auto__ = e20878;
var statearr_20879_20914 = state_20867;
(statearr_20879_20914[(5)] = ex__15904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20915 = state_20867;
state_20867 = G__20915;
continue;
} else {
return ret_value__15902__auto__;
}
break;
}
});
view3d$client$state_machine__15901__auto__ = function(state_20867){
switch(arguments.length){
case 0:
return view3d$client$state_machine__15901__auto____0.call(this);
case 1:
return view3d$client$state_machine__15901__auto____1.call(this,state_20867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__15901__auto____0;
view3d$client$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__15901__auto____1;
return view3d$client$state_machine__15901__auto__;
})()
;})(switch__15900__auto__,c__16067__auto__))
})();
var state__16069__auto__ = (function (){var statearr_20880 = f__16068__auto__.call(null);
(statearr_20880[(6)] = c__16067__auto__);

return statearr_20880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16069__auto__);
});})(c__16067__auto__))
);

return c__16067__auto__;
});

view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__16067__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16067__auto__){
return (function (){
var f__16068__auto__ = (function (){var switch__15900__auto__ = ((function (c__16067__auto__){
return (function (state_20894){
var state_val_20895 = (state_20894[(1)]);
if((state_val_20895 === (1))){
var state_20894__$1 = state_20894;
var statearr_20896_20916 = state_20894__$1;
(statearr_20896_20916[(2)] = null);

(statearr_20896_20916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20895 === (2))){
var state_20894__$1 = state_20894;
var statearr_20897_20917 = state_20894__$1;
(statearr_20897_20917[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20895 === (3))){
var inst_20892 = (state_20894[(2)]);
var state_20894__$1 = state_20894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20894__$1,inst_20892);
} else {
if((state_val_20895 === (4))){
var inst_20883 = func.call(null,param);
var inst_20884 = cljs.core.async.timeout.call(null,time_out);
var state_20894__$1 = (function (){var statearr_20899 = state_20894;
(statearr_20899[(7)] = inst_20883);

return statearr_20899;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20894__$1,(7),inst_20884);
} else {
if((state_val_20895 === (5))){
var state_20894__$1 = state_20894;
var statearr_20900_20918 = state_20894__$1;
(statearr_20900_20918[(2)] = null);

(statearr_20900_20918[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20895 === (6))){
var inst_20890 = (state_20894[(2)]);
var state_20894__$1 = state_20894;
var statearr_20901_20919 = state_20894__$1;
(statearr_20901_20919[(2)] = inst_20890);

(statearr_20901_20919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20895 === (7))){
var inst_20886 = (state_20894[(2)]);
var state_20894__$1 = (function (){var statearr_20902 = state_20894;
(statearr_20902[(8)] = inst_20886);

return statearr_20902;
})();
var statearr_20903_20920 = state_20894__$1;
(statearr_20903_20920[(2)] = null);

(statearr_20903_20920[(1)] = (2));


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
});})(c__16067__auto__))
;
return ((function (switch__15900__auto__,c__16067__auto__){
return (function() {
var view3d$client$state_machine__15901__auto__ = null;
var view3d$client$state_machine__15901__auto____0 = (function (){
var statearr_20904 = [null,null,null,null,null,null,null,null,null];
(statearr_20904[(0)] = view3d$client$state_machine__15901__auto__);

(statearr_20904[(1)] = (1));

return statearr_20904;
});
var view3d$client$state_machine__15901__auto____1 = (function (state_20894){
while(true){
var ret_value__15902__auto__ = (function (){try{while(true){
var result__15903__auto__ = switch__15900__auto__.call(null,state_20894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15903__auto__;
}
break;
}
}catch (e20905){if((e20905 instanceof Object)){
var ex__15904__auto__ = e20905;
var statearr_20906_20921 = state_20894;
(statearr_20906_20921[(5)] = ex__15904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20922 = state_20894;
state_20894 = G__20922;
continue;
} else {
return ret_value__15902__auto__;
}
break;
}
});
view3d$client$state_machine__15901__auto__ = function(state_20894){
switch(arguments.length){
case 0:
return view3d$client$state_machine__15901__auto____0.call(this);
case 1:
return view3d$client$state_machine__15901__auto____1.call(this,state_20894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__15901__auto____0;
view3d$client$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__15901__auto____1;
return view3d$client$state_machine__15901__auto__;
})()
;})(switch__15900__auto__,c__16067__auto__))
})();
var state__16069__auto__ = (function (){var statearr_20907 = f__16068__auto__.call(null);
(statearr_20907[(6)] = c__16067__auto__);

return statearr_20907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16069__auto__);
});})(c__16067__auto__))
);

return c__16067__auto__;
});

view3d.client.repeater.cljs$lang$maxFixedArity = 3;

view3d.client.repeater_BANG_ = (function view3d$client$repeater_BANG_(var_args){
var G__20924 = arguments.length;
switch (G__20924) {
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
var c__16067__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16067__auto__){
return (function (){
var f__16068__auto__ = (function (){var switch__15900__auto__ = ((function (c__16067__auto__){
return (function (state_20939){
var state_val_20940 = (state_20939[(1)]);
if((state_val_20940 === (1))){
var state_20939__$1 = state_20939;
var statearr_20941_20982 = state_20939__$1;
(statearr_20941_20982[(2)] = null);

(statearr_20941_20982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20940 === (2))){
var state_20939__$1 = state_20939;
var statearr_20942_20983 = state_20939__$1;
(statearr_20942_20983[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20940 === (3))){
var inst_20937 = (state_20939[(2)]);
var state_20939__$1 = state_20939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20939__$1,inst_20937);
} else {
if((state_val_20940 === (4))){
var inst_20927 = func.call(null);
var inst_20928 = cljs.core.deref.call(null,time_out);
var inst_20929 = cljs.core.async.timeout.call(null,inst_20928);
var state_20939__$1 = (function (){var statearr_20944 = state_20939;
(statearr_20944[(7)] = inst_20927);

return statearr_20944;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20939__$1,(7),inst_20929);
} else {
if((state_val_20940 === (5))){
var state_20939__$1 = state_20939;
var statearr_20945_20984 = state_20939__$1;
(statearr_20945_20984[(2)] = null);

(statearr_20945_20984[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20940 === (6))){
var inst_20935 = (state_20939[(2)]);
var state_20939__$1 = state_20939;
var statearr_20946_20985 = state_20939__$1;
(statearr_20946_20985[(2)] = inst_20935);

(statearr_20946_20985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20940 === (7))){
var inst_20931 = (state_20939[(2)]);
var state_20939__$1 = (function (){var statearr_20947 = state_20939;
(statearr_20947[(8)] = inst_20931);

return statearr_20947;
})();
var statearr_20948_20986 = state_20939__$1;
(statearr_20948_20986[(2)] = null);

(statearr_20948_20986[(1)] = (2));


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
});})(c__16067__auto__))
;
return ((function (switch__15900__auto__,c__16067__auto__){
return (function() {
var view3d$client$state_machine__15901__auto__ = null;
var view3d$client$state_machine__15901__auto____0 = (function (){
var statearr_20949 = [null,null,null,null,null,null,null,null,null];
(statearr_20949[(0)] = view3d$client$state_machine__15901__auto__);

(statearr_20949[(1)] = (1));

return statearr_20949;
});
var view3d$client$state_machine__15901__auto____1 = (function (state_20939){
while(true){
var ret_value__15902__auto__ = (function (){try{while(true){
var result__15903__auto__ = switch__15900__auto__.call(null,state_20939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15903__auto__;
}
break;
}
}catch (e20950){if((e20950 instanceof Object)){
var ex__15904__auto__ = e20950;
var statearr_20951_20987 = state_20939;
(statearr_20951_20987[(5)] = ex__15904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20988 = state_20939;
state_20939 = G__20988;
continue;
} else {
return ret_value__15902__auto__;
}
break;
}
});
view3d$client$state_machine__15901__auto__ = function(state_20939){
switch(arguments.length){
case 0:
return view3d$client$state_machine__15901__auto____0.call(this);
case 1:
return view3d$client$state_machine__15901__auto____1.call(this,state_20939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__15901__auto____0;
view3d$client$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__15901__auto____1;
return view3d$client$state_machine__15901__auto__;
})()
;})(switch__15900__auto__,c__16067__auto__))
})();
var state__16069__auto__ = (function (){var statearr_20952 = f__16068__auto__.call(null);
(statearr_20952[(6)] = c__16067__auto__);

return statearr_20952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16069__auto__);
});})(c__16067__auto__))
);

return c__16067__auto__;
});

view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__16067__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16067__auto__){
return (function (){
var f__16068__auto__ = (function (){var switch__15900__auto__ = ((function (c__16067__auto__){
return (function (state_20967){
var state_val_20968 = (state_20967[(1)]);
if((state_val_20968 === (1))){
var state_20967__$1 = state_20967;
var statearr_20969_20989 = state_20967__$1;
(statearr_20969_20989[(2)] = null);

(statearr_20969_20989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20968 === (2))){
var state_20967__$1 = state_20967;
var statearr_20970_20990 = state_20967__$1;
(statearr_20970_20990[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20968 === (3))){
var inst_20965 = (state_20967[(2)]);
var state_20967__$1 = state_20967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20967__$1,inst_20965);
} else {
if((state_val_20968 === (4))){
var inst_20955 = func.call(null,param);
var inst_20956 = cljs.core.deref.call(null,time_out);
var inst_20957 = cljs.core.async.timeout.call(null,inst_20956);
var state_20967__$1 = (function (){var statearr_20972 = state_20967;
(statearr_20972[(7)] = inst_20955);

return statearr_20972;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20967__$1,(7),inst_20957);
} else {
if((state_val_20968 === (5))){
var state_20967__$1 = state_20967;
var statearr_20973_20991 = state_20967__$1;
(statearr_20973_20991[(2)] = null);

(statearr_20973_20991[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20968 === (6))){
var inst_20963 = (state_20967[(2)]);
var state_20967__$1 = state_20967;
var statearr_20974_20992 = state_20967__$1;
(statearr_20974_20992[(2)] = inst_20963);

(statearr_20974_20992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20968 === (7))){
var inst_20959 = (state_20967[(2)]);
var state_20967__$1 = (function (){var statearr_20975 = state_20967;
(statearr_20975[(8)] = inst_20959);

return statearr_20975;
})();
var statearr_20976_20993 = state_20967__$1;
(statearr_20976_20993[(2)] = null);

(statearr_20976_20993[(1)] = (2));


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
});})(c__16067__auto__))
;
return ((function (switch__15900__auto__,c__16067__auto__){
return (function() {
var view3d$client$state_machine__15901__auto__ = null;
var view3d$client$state_machine__15901__auto____0 = (function (){
var statearr_20977 = [null,null,null,null,null,null,null,null,null];
(statearr_20977[(0)] = view3d$client$state_machine__15901__auto__);

(statearr_20977[(1)] = (1));

return statearr_20977;
});
var view3d$client$state_machine__15901__auto____1 = (function (state_20967){
while(true){
var ret_value__15902__auto__ = (function (){try{while(true){
var result__15903__auto__ = switch__15900__auto__.call(null,state_20967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15903__auto__;
}
break;
}
}catch (e20978){if((e20978 instanceof Object)){
var ex__15904__auto__ = e20978;
var statearr_20979_20994 = state_20967;
(statearr_20979_20994[(5)] = ex__15904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20995 = state_20967;
state_20967 = G__20995;
continue;
} else {
return ret_value__15902__auto__;
}
break;
}
});
view3d$client$state_machine__15901__auto__ = function(state_20967){
switch(arguments.length){
case 0:
return view3d$client$state_machine__15901__auto____0.call(this);
case 1:
return view3d$client$state_machine__15901__auto____1.call(this,state_20967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__15901__auto____0;
view3d$client$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__15901__auto____1;
return view3d$client$state_machine__15901__auto__;
})()
;})(switch__15900__auto__,c__16067__auto__))
})();
var state__16069__auto__ = (function (){var statearr_20980 = f__16068__auto__.call(null);
(statearr_20980[(6)] = c__16067__auto__);

return statearr_20980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16069__auto__);
});})(c__16067__auto__))
);

return c__16067__auto__;
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
}catch (e20996){if((e20996 instanceof Error)){
var e = e20996;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e20996;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
view3d.client.handle_request = (function view3d$client$handle_request(request){
var temp__5733__auto___21003 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___21003)){
var vie_21004 = temp__5733__auto___21003;
view3d.client.view.call(null,vie_21004);
} else {
}

var temp__5733__auto___21005 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___21005)){
var pit_21006 = temp__5733__auto___21005;
view3d.client.pitch.call(null,pit_21006);
} else {
}

var temp__5733__auto___21007 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___21007)){
var rol_21008 = temp__5733__auto___21007;
view3d.client.roll.call(null,rol_21008);
} else {
}

var temp__5733__auto___21009 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___21009)){
var vec__20997_21010 = temp__5733__auto___21009;
var lat_21011 = cljs.core.nth.call(null,vec__20997_21010,(0),null);
var lon_21012 = cljs.core.nth.call(null,vec__20997_21010,(1),null);
var vec__21000_21013 = czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [geo.calc.radians.call(null,lat_21011),geo.calc.radians.call(null,lon_21012)], null),(0));
var __21014 = cljs.core.nth.call(null,vec__21000_21013,(0),null);
var __21015__$1 = cljs.core.nth.call(null,vec__21000_21013,(1),null);
var sh_21016 = cljs.core.nth.call(null,vec__21000_21013,(2),null);
cljs.core._vreset_BANG_.call(null,view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_21016 | (0))));
} else {
}

return view3d.client.response_request.call(null);
});
view3d.client.handle_vehicle = (function view3d$client$handle_vehicle(vehicle){
var vec__21017 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__21017,(0),null);
var lon = cljs.core.nth.call(null,vec__21017,(1),null);
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
var temp__5733__auto___21020 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5733__auto___21020)){
var vehicle_21021 = temp__5733__auto___21020;
view3d.client.handle_vehicle.call(null,vehicle_21021);
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
}catch (e21022){if((e21022 instanceof Error)){
var e = e21022;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e21022;

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
