// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('client.v3d');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('cljs.reader');
goog.require('geo.calc');
goog.require('client.cesium');
client.v3d.VEHICLE = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"\u0410\u0432\u0440\u043E\u0440\u0430",new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),(30)], null),new cljs.core.Keyword(null,"altitude","altitude",463588637),(4000),new cljs.core.Keyword(null,"speed","speed",1257663751),(160),new cljs.core.Keyword(null,"course","course",1455432948),(270)], null));
client.v3d.error_handler = (function client$v3d$error_handler(response){
var map__2676 = response;
var map__2676__$1 = cljs.core.__destructure_map.call(null,map__2676);
var status = cljs.core.get.call(null,map__2676__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__2676__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
client.v3d.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
client.v3d.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
client.v3d.ZOOM_STEP = (100);
client.v3d.PORT = (8448);
client.v3d.format = (function client$v3d$format(var_args){
var args__5732__auto__ = [];
var len__5726__auto___2679 = arguments.length;
var i__5727__auto___2680 = (0);
while(true){
if((i__5727__auto___2680 < len__5726__auto___2679)){
args__5732__auto__.push((arguments[i__5727__auto___2680]));

var G__2681 = (i__5727__auto___2680 + (1));
i__5727__auto___2680 = G__2681;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return client.v3d.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(client.v3d.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
}));

(client.v3d.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(client.v3d.format.cljs$lang$applyTo = (function (seq2677){
var G__2678 = cljs.core.first.call(null,seq2677);
var seq2677__$1 = cljs.core.next.call(null,seq2677);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2678,seq2677__$1);
}));

client.v3d.repeater = (function client$v3d$repeater(var_args){
var G__2683 = arguments.length;
switch (G__2683) {
case 2:
return client.v3d.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return client.v3d.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(client.v3d.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__2355__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2356__auto__ = (function (){var switch__2332__auto__ = (function (state_2697){
var state_val_2698 = (state_2697[(1)]);
if((state_val_2698 === (1))){
var state_2697__$1 = state_2697;
var statearr_2699_2741 = state_2697__$1;
(statearr_2699_2741[(2)] = null);

(statearr_2699_2741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2698 === (2))){
var state_2697__$1 = state_2697;
var statearr_2700_2742 = state_2697__$1;
(statearr_2700_2742[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2698 === (3))){
var inst_2695 = (state_2697[(2)]);
var state_2697__$1 = state_2697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2697__$1,inst_2695);
} else {
if((state_val_2698 === (4))){
var inst_2686 = func.call(null);
var inst_2687 = cljs.core.async.timeout.call(null,time_out);
var state_2697__$1 = (function (){var statearr_2702 = state_2697;
(statearr_2702[(7)] = inst_2686);

return statearr_2702;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2697__$1,(7),inst_2687);
} else {
if((state_val_2698 === (5))){
var state_2697__$1 = state_2697;
var statearr_2703_2743 = state_2697__$1;
(statearr_2703_2743[(2)] = null);

(statearr_2703_2743[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2698 === (6))){
var inst_2693 = (state_2697[(2)]);
var state_2697__$1 = state_2697;
var statearr_2704_2744 = state_2697__$1;
(statearr_2704_2744[(2)] = inst_2693);

(statearr_2704_2744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2698 === (7))){
var inst_2689 = (state_2697[(2)]);
var state_2697__$1 = (function (){var statearr_2705 = state_2697;
(statearr_2705[(8)] = inst_2689);

return statearr_2705;
})();
var statearr_2706_2745 = state_2697__$1;
(statearr_2706_2745[(2)] = null);

(statearr_2706_2745[(1)] = (2));


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
var client$v3d$state_machine__2333__auto__ = null;
var client$v3d$state_machine__2333__auto____0 = (function (){
var statearr_2707 = [null,null,null,null,null,null,null,null,null];
(statearr_2707[(0)] = client$v3d$state_machine__2333__auto__);

(statearr_2707[(1)] = (1));

return statearr_2707;
});
var client$v3d$state_machine__2333__auto____1 = (function (state_2697){
while(true){
var ret_value__2334__auto__ = (function (){try{while(true){
var result__2335__auto__ = switch__2332__auto__.call(null,state_2697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2335__auto__;
}
break;
}
}catch (e2708){var ex__2336__auto__ = e2708;
var statearr_2709_2746 = state_2697;
(statearr_2709_2746[(2)] = ex__2336__auto__);


if(cljs.core.seq.call(null,(state_2697[(4)]))){
var statearr_2710_2747 = state_2697;
(statearr_2710_2747[(1)] = cljs.core.first.call(null,(state_2697[(4)])));

} else {
throw ex__2336__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2748 = state_2697;
state_2697 = G__2748;
continue;
} else {
return ret_value__2334__auto__;
}
break;
}
});
client$v3d$state_machine__2333__auto__ = function(state_2697){
switch(arguments.length){
case 0:
return client$v3d$state_machine__2333__auto____0.call(this);
case 1:
return client$v3d$state_machine__2333__auto____1.call(this,state_2697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
client$v3d$state_machine__2333__auto__.cljs$core$IFn$_invoke$arity$0 = client$v3d$state_machine__2333__auto____0;
client$v3d$state_machine__2333__auto__.cljs$core$IFn$_invoke$arity$1 = client$v3d$state_machine__2333__auto____1;
return client$v3d$state_machine__2333__auto__;
})()
})();
var state__2357__auto__ = (function (){var statearr_2711 = f__2356__auto__.call(null);
(statearr_2711[(6)] = c__2355__auto__);

return statearr_2711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2357__auto__);
}));

return c__2355__auto__;
}));

(client.v3d.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__2355__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2356__auto__ = (function (){var switch__2332__auto__ = (function (state_2725){
var state_val_2726 = (state_2725[(1)]);
if((state_val_2726 === (1))){
var state_2725__$1 = state_2725;
var statearr_2727_2749 = state_2725__$1;
(statearr_2727_2749[(2)] = null);

(statearr_2727_2749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2726 === (2))){
var state_2725__$1 = state_2725;
var statearr_2728_2750 = state_2725__$1;
(statearr_2728_2750[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2726 === (3))){
var inst_2723 = (state_2725[(2)]);
var state_2725__$1 = state_2725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2725__$1,inst_2723);
} else {
if((state_val_2726 === (4))){
var inst_2714 = func.call(null,param);
var inst_2715 = cljs.core.async.timeout.call(null,time_out);
var state_2725__$1 = (function (){var statearr_2730 = state_2725;
(statearr_2730[(7)] = inst_2714);

return statearr_2730;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2725__$1,(7),inst_2715);
} else {
if((state_val_2726 === (5))){
var state_2725__$1 = state_2725;
var statearr_2731_2751 = state_2725__$1;
(statearr_2731_2751[(2)] = null);

(statearr_2731_2751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2726 === (6))){
var inst_2721 = (state_2725[(2)]);
var state_2725__$1 = state_2725;
var statearr_2732_2752 = state_2725__$1;
(statearr_2732_2752[(2)] = inst_2721);

(statearr_2732_2752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2726 === (7))){
var inst_2717 = (state_2725[(2)]);
var state_2725__$1 = (function (){var statearr_2733 = state_2725;
(statearr_2733[(8)] = inst_2717);

return statearr_2733;
})();
var statearr_2734_2753 = state_2725__$1;
(statearr_2734_2753[(2)] = null);

(statearr_2734_2753[(1)] = (2));


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
var client$v3d$state_machine__2333__auto__ = null;
var client$v3d$state_machine__2333__auto____0 = (function (){
var statearr_2735 = [null,null,null,null,null,null,null,null,null];
(statearr_2735[(0)] = client$v3d$state_machine__2333__auto__);

(statearr_2735[(1)] = (1));

return statearr_2735;
});
var client$v3d$state_machine__2333__auto____1 = (function (state_2725){
while(true){
var ret_value__2334__auto__ = (function (){try{while(true){
var result__2335__auto__ = switch__2332__auto__.call(null,state_2725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2335__auto__;
}
break;
}
}catch (e2736){var ex__2336__auto__ = e2736;
var statearr_2737_2754 = state_2725;
(statearr_2737_2754[(2)] = ex__2336__auto__);


if(cljs.core.seq.call(null,(state_2725[(4)]))){
var statearr_2738_2755 = state_2725;
(statearr_2738_2755[(1)] = cljs.core.first.call(null,(state_2725[(4)])));

} else {
throw ex__2336__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2756 = state_2725;
state_2725 = G__2756;
continue;
} else {
return ret_value__2334__auto__;
}
break;
}
});
client$v3d$state_machine__2333__auto__ = function(state_2725){
switch(arguments.length){
case 0:
return client$v3d$state_machine__2333__auto____0.call(this);
case 1:
return client$v3d$state_machine__2333__auto____1.call(this,state_2725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
client$v3d$state_machine__2333__auto__.cljs$core$IFn$_invoke$arity$0 = client$v3d$state_machine__2333__auto____0;
client$v3d$state_machine__2333__auto__.cljs$core$IFn$_invoke$arity$1 = client$v3d$state_machine__2333__auto____1;
return client$v3d$state_machine__2333__auto__;
})()
})();
var state__2357__auto__ = (function (){var statearr_2739 = f__2356__auto__.call(null);
(statearr_2739[(6)] = c__2355__auto__);

return statearr_2739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2357__auto__);
}));

return c__2355__auto__;
}));

(client.v3d.repeater.cljs$lang$maxFixedArity = 3);

client.v3d.delayer = (function client$v3d$delayer(func,time){
var c__2355__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2356__auto__ = (function (){var switch__2332__auto__ = (function (state_2762){
var state_val_2763 = (state_2762[(1)]);
if((state_val_2763 === (1))){
var inst_2757 = cljs.core.async.timeout.call(null,time);
var state_2762__$1 = state_2762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2762__$1,(2),inst_2757);
} else {
if((state_val_2763 === (2))){
var inst_2759 = (state_2762[(2)]);
var inst_2760 = func.call(null);
var state_2762__$1 = (function (){var statearr_2764 = state_2762;
(statearr_2764[(7)] = inst_2759);

return statearr_2764;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2762__$1,inst_2760);
} else {
return null;
}
}
});
return (function() {
var client$v3d$delayer_$_state_machine__2333__auto__ = null;
var client$v3d$delayer_$_state_machine__2333__auto____0 = (function (){
var statearr_2765 = [null,null,null,null,null,null,null,null];
(statearr_2765[(0)] = client$v3d$delayer_$_state_machine__2333__auto__);

(statearr_2765[(1)] = (1));

return statearr_2765;
});
var client$v3d$delayer_$_state_machine__2333__auto____1 = (function (state_2762){
while(true){
var ret_value__2334__auto__ = (function (){try{while(true){
var result__2335__auto__ = switch__2332__auto__.call(null,state_2762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2335__auto__;
}
break;
}
}catch (e2766){var ex__2336__auto__ = e2766;
var statearr_2767_2770 = state_2762;
(statearr_2767_2770[(2)] = ex__2336__auto__);


if(cljs.core.seq.call(null,(state_2762[(4)]))){
var statearr_2768_2771 = state_2762;
(statearr_2768_2771[(1)] = cljs.core.first.call(null,(state_2762[(4)])));

} else {
throw ex__2336__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2772 = state_2762;
state_2762 = G__2772;
continue;
} else {
return ret_value__2334__auto__;
}
break;
}
});
client$v3d$delayer_$_state_machine__2333__auto__ = function(state_2762){
switch(arguments.length){
case 0:
return client$v3d$delayer_$_state_machine__2333__auto____0.call(this);
case 1:
return client$v3d$delayer_$_state_machine__2333__auto____1.call(this,state_2762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
client$v3d$delayer_$_state_machine__2333__auto__.cljs$core$IFn$_invoke$arity$0 = client$v3d$delayer_$_state_machine__2333__auto____0;
client$v3d$delayer_$_state_machine__2333__auto__.cljs$core$IFn$_invoke$arity$1 = client$v3d$delayer_$_state_machine__2333__auto____1;
return client$v3d$delayer_$_state_machine__2333__auto__;
})()
})();
var state__2357__auto__ = (function (){var statearr_2769 = f__2356__auto__.call(null);
(statearr_2769[(6)] = c__2355__auto__);

return statearr_2769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2357__auto__);
}));

return c__2355__auto__;
});
client.v3d.read_transit = (function client$v3d$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
client.v3d.by_id = (function client$v3d$by_id(id){
return document.getElementById(id);
});
client.v3d.get_html_BANG_ = (function client$v3d$get_html_BANG_(id){
return document.getElementById(id).innerHTML;
});
client.v3d.set_html_BANG_ = (function client$v3d$set_html_BANG_(id,msg){
return (document.getElementById(id).innerHTML = msg);
});
client.v3d.num_val = (function client$v3d$num_val(x){
if(typeof x === 'number'){
return x;
} else {
return cljs.reader.read_string.call(null,x);
}
});
client.v3d.viewM = (function client$v3d$viewM(){
var deg = client.v3d.num_val.call(null,client.v3d.get_html_BANG_.call(null,"view-fld"));
var deg__$1 = ((cljs.core._EQ_.call(null,deg,(-180)))?(180):(deg - (1)));
cljs.core._vreset_BANG_.call(null,client.cesium.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,client.cesium.CAMERA),new cljs.core.Keyword(null,"view","view",1247994814),deg__$1));

client.v3d.set_html_BANG_.call(null,"view-fld",deg__$1);

return (client.v3d.by_id.call(null,"view-vals").value = deg__$1);
});
client.v3d.view = (function client$v3d$view(deg){
var deg__$1 = client.v3d.num_val.call(null,deg);
if(((((-180) <= deg__$1)) && ((deg__$1 <= (180))))){
cljs.core._vreset_BANG_.call(null,client.cesium.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,client.cesium.CAMERA),new cljs.core.Keyword(null,"view","view",1247994814),deg__$1));

return client.v3d.set_html_BANG_.call(null,"view-fld",deg__$1);
} else {
return null;
}
});
client.v3d.viewP = (function client$v3d$viewP(){
var deg = client.v3d.num_val.call(null,client.v3d.get_html_BANG_.call(null,"view-fld"));
var deg__$1 = ((cljs.core._EQ_.call(null,deg,(180)))?(-180):(deg + (1)));
cljs.core._vreset_BANG_.call(null,client.cesium.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,client.cesium.CAMERA),new cljs.core.Keyword(null,"view","view",1247994814),deg__$1));

client.v3d.set_html_BANG_.call(null,"view-fld",deg__$1);

return (client.v3d.by_id.call(null,"view-vals").value = deg__$1);
});
client.v3d.pitch = (function client$v3d$pitch(deg){
var deg__$1 = client.v3d.num_val.call(null,deg);
if(((((-90) <= deg__$1)) && ((deg__$1 <= (90))))){
cljs.core._vreset_BANG_.call(null,client.cesium.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,client.cesium.CAMERA),new cljs.core.Keyword(null,"pitch","pitch",1495126700),deg__$1));

return client.v3d.set_html_BANG_.call(null,"pitch-fld",deg__$1);
} else {
return null;
}
});
client.v3d.roll = (function client$v3d$roll(deg){
var deg__$1 = client.v3d.num_val.call(null,deg);
if(((((-180) <= deg__$1)) && ((deg__$1 <= (180))))){
cljs.core._vreset_BANG_.call(null,client.cesium.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,client.cesium.CAMERA),new cljs.core.Keyword(null,"roll","roll",11266999),deg__$1));

return client.v3d.set_html_BANG_.call(null,"roll-fld",deg__$1);
} else {
return null;
}
});
client.v3d.zoom_format = (function client$v3d$zoom_format(m){
return client.v3d.format.call(null,"%.1f km",(m / (1000)));
});
client.v3d.zoomP = (function client$v3d$zoomP(){
var v = client.v3d.num_val.call(null,client.cesium.get_zoom.call(null));
var v__$1 = (v + client.v3d.ZOOM_STEP);
client.cesium.set_zoom.call(null,v__$1);

client.v3d.set_html_BANG_.call(null,"zoom-val",client.v3d.zoom_format.call(null,v__$1));

return (client.v3d.by_id.call(null,"zoom-slv").value = v__$1);
});
client.v3d.zoomM = (function client$v3d$zoomM(){
var v = client.v3d.num_val.call(null,client.cesium.get_zoom.call(null));
var v__$1 = (v - client.v3d.ZOOM_STEP);
var v__$2 = (((v__$1 < (0)))?(0):v__$1);
client.cesium.set_zoom.call(null,v__$2);

client.v3d.set_html_BANG_.call(null,"zoom-val",client.v3d.zoom_format.call(null,v__$2));

return (client.v3d.by_id.call(null,"zoom-slv").value = v__$2);
});
client.v3d.zoom_amount = (function client$v3d$zoom_amount(amount){
var v = client.v3d.num_val.call(null,amount);
client.cesium.set_zoom.call(null,v);

return client.v3d.set_html_BANG_.call(null,"zoom-val",client.v3d.zoom_format.call(null,v));
});
client.v3d.response_request = (function client$v3d$response_request(){
var resp = cljs.core.deref.call(null,client.v3d.RESPONSE);
if((!(cljs.core.empty_QMARK_.call(null,resp)))){
ajax.core.GET.call(null,"/response",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response","response",-1068424192),(function (){try{return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),resp);
}catch (e2773){if((e2773 instanceof Error)){
var e = e2773;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e2773;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),client.v3d.error_handler], null));

return cljs.core.vreset_BANG_.call(null,client.v3d.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
client.v3d.handle_request = (function client$v3d$handle_request(request){
var temp__5802__auto___2780 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto___2780)){
var vie_2781 = temp__5802__auto___2780;
client.v3d.view.call(null,vie_2781);
} else {
}

var temp__5802__auto___2782 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto___2782)){
var pit_2783 = temp__5802__auto___2782;
client.v3d.pitch.call(null,pit_2783);
} else {
}

var temp__5802__auto___2784 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto___2784)){
var rol_2785 = temp__5802__auto___2784;
client.v3d.roll.call(null,rol_2785);
} else {
}

var temp__5802__auto___2786 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto___2786)){
var vec__2774_2787 = temp__5802__auto___2786;
var lat_2788 = cljs.core.nth.call(null,vec__2774_2787,(0),null);
var lon_2789 = cljs.core.nth.call(null,vec__2774_2787,(1),null);
var vec__2777_2790 = client.cesium.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [geo.calc.radians.call(null,lat_2788),geo.calc.radians.call(null,lon_2789)], null),(0));
var __2791 = cljs.core.nth.call(null,vec__2777_2790,(0),null);
var __2792__$1 = cljs.core.nth.call(null,vec__2777_2790,(1),null);
var sh_2793 = cljs.core.nth.call(null,vec__2777_2790,(2),null);
cljs.core._vreset_BANG_.call(null,client.v3d.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,client.v3d.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_2793 | (0))));
} else {
}

return client.v3d.response_request.call(null);
});
client.v3d.handle_vehicle = (function client$v3d$handle_vehicle(vehicle){
var vec__2794 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__2794,(0),null);
var lon = cljs.core.nth.call(null,vec__2794,(1),null);
var alt = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle);
var vev = new cljs.core.Keyword(null,"view-elevation","view-elevation",-681076231).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client.v3d.VEHICLE));
var crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle);
var head = client.cesium.norm_crs.call(null,(crs + new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client.cesium.CAMERA))));
cljs.core._vreset_BANG_.call(null,client.v3d.VEHICLE,cljs.core.merge.call(null,cljs.core._deref.call(null,client.v3d.VEHICLE),vehicle));

client.v3d.set_html_BANG_.call(null,"onboard-fld",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(vehicle));

client.v3d.set_html_BANG_.call(null,"name-fld",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(vehicle));

client.v3d.set_html_BANG_.call(null,"latitude-fld",client.v3d.format.call(null,"%.3f",cljs.core.first.call(null,new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle))));

client.v3d.set_html_BANG_.call(null,"longitude-fld",client.v3d.format.call(null,"%.3f",cljs.core.second.call(null,new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle))));

client.v3d.set_html_BANG_.call(null,"course-fld",new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle));

client.v3d.set_html_BANG_.call(null,"speed-fld",new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(vehicle));

client.v3d.set_html_BANG_.call(null,"altitude-fld",alt);

client.v3d.set_html_BANG_.call(null,"view-dir",geo.calc.rumb.call(null,head));

if(cljs.core._EQ_.call(null,client.cesium.ZOOM,(0))){
return client.cesium.fly_to.call(null,lat,lon,(alt + vev),crs,(5));
} else {
return null;
}
});
client.v3d.vehicle_hr = (function client$v3d$vehicle_hr(response){
var resp = client.v3d.read_transit.call(null,response);
var temp__5802__auto___2797 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5802__auto___2797)){
var vehicle_2798 = temp__5802__auto___2797;
client.v3d.handle_vehicle.call(null,vehicle_2798);
} else {
}

var temp__5802__auto__ = new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5802__auto__)){
var request = temp__5802__auto__;
return client.v3d.handle_request.call(null,request);
} else {
return null;
}
});
client.v3d.receive_vehicle = (function client$v3d$receive_vehicle(){
return ajax.core.GET.call(null,"/vehicle",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.deref.call(null,client.cesium.CAMERA),new cljs.core.Keyword(null,"handler","handler",-195596612),client.v3d.vehicle_hr,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),client.v3d.error_handler], null));
});
client.v3d.elev = (function client$v3d$elev(vev){
return cljs.core._vreset_BANG_.call(null,client.v3d.VEHICLE,cljs.core.assoc.call(null,cljs.core._deref.call(null,client.v3d.VEHICLE),new cljs.core.Keyword(null,"view-elevation","view-elevation",-681076231),client.v3d.num_val.call(null,vev)));
});
client.v3d.left_controls = (function client$v3d$left_controls(){
client.v3d.set_html_BANG_.call(null,"camera","<h4>Camera</h4>");

client.v3d.set_html_BANG_.call(null,"onboard","Onboard:");

client.v3d.set_html_BANG_.call(null,"onboard-fld","");

client.v3d.set_html_BANG_.call(null,"elev","Elevation:");

client.v3d.set_html_BANG_.call(null,"elev-fld","<input value='0' style='width:100px' id='input-elev'\n                     onchange='javascript:client.v3d.elev(this.value)'>");

client.v3d.set_html_BANG_.call(null,"roll","Roll:");

client.v3d.set_html_BANG_.call(null,"roll-fld",(0));

client.v3d.set_html_BANG_.call(null,"roll-sld","<input type='range' style='width:200px' id='roll-vals'\n               min='-180' value='0' max='180'\n               oninput='javascript:client.v3d.roll(this.value)'>");

client.v3d.set_html_BANG_.call(null,"pitch","Pitch:");

client.v3d.set_html_BANG_.call(null,"pitch-fld",(0));

client.v3d.set_html_BANG_.call(null,"pitch-sld","<input type='range' style='width:200px' id='pitch-vals'\n               min='-90' value='0' max='90'\n               oninput='javascript:client.v3d.pitch(this.value)'>");

client.v3d.set_html_BANG_.call(null,"view","View:");

client.v3d.set_html_BANG_.call(null,"view-fld",(0));

client.v3d.set_html_BANG_.call(null,"view-sld","<input type='range' style='width:200px' id='view-vals'\n               min='-180' value='0' max='180'\n               oninput='javascript:client.v3d.view(this.value)'>");

client.v3d.set_html_BANG_.call(null,"viewM-btn","<button onclick='javascript:client.v3d.viewM()'>view-</button>");

return client.v3d.set_html_BANG_.call(null,"viewP-btn","<button onclick='javascript:client.v3d.viewP()'>view+</button>");
});
client.v3d.right_controls = (function client$v3d$right_controls(){
client.v3d.set_html_BANG_.call(null,"vehicle","<h4>Vehicle</h4>");

client.v3d.set_html_BANG_.call(null,"name","Name:");

client.v3d.set_html_BANG_.call(null,"name-fld","");

client.v3d.set_html_BANG_.call(null,"latitude","Latitude:");

client.v3d.set_html_BANG_.call(null,"latitude-fld","");

client.v3d.set_html_BANG_.call(null,"longitude","Longitude:");

client.v3d.set_html_BANG_.call(null,"longitude-fld","");

client.v3d.set_html_BANG_.call(null,"course","Course:");

client.v3d.set_html_BANG_.call(null,"course-fld","");

client.v3d.set_html_BANG_.call(null,"speed","Speed:");

client.v3d.set_html_BANG_.call(null,"speed-fld","");

client.v3d.set_html_BANG_.call(null,"altitude","Altitude:");

return client.v3d.set_html_BANG_.call(null,"altitude-fld","");
});
client.v3d.middle_controls = (function client$v3d$middle_controls(){
client.v3d.set_html_BANG_.call(null,"binocular","<h4>Binocular</h4>");

client.v3d.set_html_BANG_.call(null,"zoom-sld","<input type='range' style='width:200px' id='zoom-slv'\n               min='0' value='0' max='40000'\n               oninput='javascript:client.v3d.zoom_amount(this.value)'>");

client.v3d.set_html_BANG_.call(null,"zoom-val","0 m");

client.v3d.set_html_BANG_.call(null,"zoomM","<button onclick='javascript:client.v3d.zoomM()'>-</button>");

return client.v3d.set_html_BANG_.call(null,"zoomP","<button onclick='javascript:client.v3d.zoomP()'>+</button>");
});
client.v3d.show_controls = (function client$v3d$show_controls(){
client.v3d.right_controls.call(null);

client.v3d.left_controls.call(null);

return client.v3d.middle_controls.call(null);
});
client.v3d.on_load = (function client$v3d$on_load(){
client.cesium.init_3D_view.call(null,["http://localhost:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(client.v3d.PORT)].join(''));

return client.v3d.delayer.call(null,(function (){
client.v3d.repeater.call(null,client.v3d.receive_vehicle,(2000));

return client.v3d.show_controls.call(null);
}),(4000));
});
client.v3d.run_repl = (function client$v3d$run_repl(){
var result = (function client$v3d$run_repl_$_result(res){
cljs.core.println.call(null,res);

return cljs.core._vreset_BANG_.call(null,client.v3d.CLI_REPL,cljs.core.assoc.call(null,cljs.core._deref.call(null,client.v3d.CLI_REPL),new cljs.core.Keyword(null,"value","value",305978217),res.call(null,new cljs.core.Keyword(null,"value","value",305978217))));
});
var evaluate = (function client$v3d$run_repl_$_evaluate(source){
return cljs.js.eval_str.call(null,cljs.core.deref.call(null,client.v3d.CLI_REPL).call(null,new cljs.core.Keyword(null,"state","state",-1988618099)),source,null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null),result);
});
var hand = (function client$v3d$run_repl_$_hand(response){
var temp__5804__auto__ = cljs.core.first.call(null,client.v3d.read_transit.call(null,response));
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
ajax.core.GET.call(null,"/cli-repl",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transit","transit",359458387),(function (){try{return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),cljs.core.deref.call(null,client.v3d.CLI_REPL).call(null,new cljs.core.Keyword(null,"value","value",305978217)));
}catch (e2799){if((e2799 instanceof Error)){
var e = e2799;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e2799;

}
}})()], null),new cljs.core.Keyword(null,"handler","handler",-195596612),hand,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),client.v3d.error_handler], null));

return setTimeout(client.v3d.run_repl,(1000));
});
client.v3d.tst = (function client$v3d$tst(){
(client.cesium.VIEWER.scene.globe.depthTestAgainstTerrain = true);

cljs.core.println.call(null,new cljs.core.Keyword(null,"D","D",-8015893),client.cesium.VIEWER.scene.globe.depthTestAgainstTerrain);

var ppc = (new Cesium.PointPrimitiveCollection(({"heightReference": Cesium.HeightReference.CLAMP_TO_GROUND})));
var lla = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.6,7.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.61,7.51], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.6,7.52], null)], null);
var clr = Cesium.Color.YELLOW;
var size = (10);
var prims = client.cesium.VIEWER.scene.primitives.add(ppc);
return fillPointPrimColl(prims,cljs.core.clj__GT_js.call(null,lla),clr,size);
});
cljs.core.enable_console_print_BANG_.call(null);
(window.onload = client.v3d.on_load.call(null));

//# sourceMappingURL=v3d.js.map
