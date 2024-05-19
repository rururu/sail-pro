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
var map__3677 = response;
var map__3677__$1 = cljs.core.__destructure_map.call(null,map__3677);
var status = cljs.core.get.call(null,map__3677__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__3677__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
client.v3d.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
client.v3d.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
client.v3d.ZOOM_STEP = (100);
client.v3d.PORT = (8448);
client.v3d.format = (function client$v3d$format(var_args){
var args__5732__auto__ = [];
var len__5726__auto___3680 = arguments.length;
var i__5727__auto___3681 = (0);
while(true){
if((i__5727__auto___3681 < len__5726__auto___3680)){
args__5732__auto__.push((arguments[i__5727__auto___3681]));

var G__3682 = (i__5727__auto___3681 + (1));
i__5727__auto___3681 = G__3682;
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
(client.v3d.format.cljs$lang$applyTo = (function (seq3678){
var G__3679 = cljs.core.first.call(null,seq3678);
var seq3678__$1 = cljs.core.next.call(null,seq3678);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3679,seq3678__$1);
}));

client.v3d.repeater = (function client$v3d$repeater(var_args){
var G__3684 = arguments.length;
switch (G__3684) {
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
var c__3583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__3584__auto__ = (function (){var switch__3560__auto__ = (function (state_3698){
var state_val_3699 = (state_3698[(1)]);
if((state_val_3699 === (1))){
var state_3698__$1 = state_3698;
var statearr_3700_3742 = state_3698__$1;
(statearr_3700_3742[(2)] = null);

(statearr_3700_3742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3699 === (2))){
var state_3698__$1 = state_3698;
var statearr_3701_3743 = state_3698__$1;
(statearr_3701_3743[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3699 === (3))){
var inst_3696 = (state_3698[(2)]);
var state_3698__$1 = state_3698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3698__$1,inst_3696);
} else {
if((state_val_3699 === (4))){
var inst_3687 = func.call(null);
var inst_3688 = cljs.core.async.timeout.call(null,time_out);
var state_3698__$1 = (function (){var statearr_3703 = state_3698;
(statearr_3703[(7)] = inst_3687);

return statearr_3703;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3698__$1,(7),inst_3688);
} else {
if((state_val_3699 === (5))){
var state_3698__$1 = state_3698;
var statearr_3704_3744 = state_3698__$1;
(statearr_3704_3744[(2)] = null);

(statearr_3704_3744[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3699 === (6))){
var inst_3694 = (state_3698[(2)]);
var state_3698__$1 = state_3698;
var statearr_3705_3745 = state_3698__$1;
(statearr_3705_3745[(2)] = inst_3694);

(statearr_3705_3745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3699 === (7))){
var inst_3690 = (state_3698[(2)]);
var state_3698__$1 = (function (){var statearr_3706 = state_3698;
(statearr_3706[(8)] = inst_3690);

return statearr_3706;
})();
var statearr_3707_3746 = state_3698__$1;
(statearr_3707_3746[(2)] = null);

(statearr_3707_3746[(1)] = (2));


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
var client$v3d$state_machine__3561__auto__ = null;
var client$v3d$state_machine__3561__auto____0 = (function (){
var statearr_3708 = [null,null,null,null,null,null,null,null,null];
(statearr_3708[(0)] = client$v3d$state_machine__3561__auto__);

(statearr_3708[(1)] = (1));

return statearr_3708;
});
var client$v3d$state_machine__3561__auto____1 = (function (state_3698){
while(true){
var ret_value__3562__auto__ = (function (){try{while(true){
var result__3563__auto__ = switch__3560__auto__.call(null,state_3698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3563__auto__;
}
break;
}
}catch (e3709){var ex__3564__auto__ = e3709;
var statearr_3710_3747 = state_3698;
(statearr_3710_3747[(2)] = ex__3564__auto__);


if(cljs.core.seq.call(null,(state_3698[(4)]))){
var statearr_3711_3748 = state_3698;
(statearr_3711_3748[(1)] = cljs.core.first.call(null,(state_3698[(4)])));

} else {
throw ex__3564__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3749 = state_3698;
state_3698 = G__3749;
continue;
} else {
return ret_value__3562__auto__;
}
break;
}
});
client$v3d$state_machine__3561__auto__ = function(state_3698){
switch(arguments.length){
case 0:
return client$v3d$state_machine__3561__auto____0.call(this);
case 1:
return client$v3d$state_machine__3561__auto____1.call(this,state_3698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
client$v3d$state_machine__3561__auto__.cljs$core$IFn$_invoke$arity$0 = client$v3d$state_machine__3561__auto____0;
client$v3d$state_machine__3561__auto__.cljs$core$IFn$_invoke$arity$1 = client$v3d$state_machine__3561__auto____1;
return client$v3d$state_machine__3561__auto__;
})()
})();
var state__3585__auto__ = (function (){var statearr_3712 = f__3584__auto__.call(null);
(statearr_3712[(6)] = c__3583__auto__);

return statearr_3712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3585__auto__);
}));

return c__3583__auto__;
}));

(client.v3d.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__3583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__3584__auto__ = (function (){var switch__3560__auto__ = (function (state_3726){
var state_val_3727 = (state_3726[(1)]);
if((state_val_3727 === (1))){
var state_3726__$1 = state_3726;
var statearr_3728_3750 = state_3726__$1;
(statearr_3728_3750[(2)] = null);

(statearr_3728_3750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3727 === (2))){
var state_3726__$1 = state_3726;
var statearr_3729_3751 = state_3726__$1;
(statearr_3729_3751[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3727 === (3))){
var inst_3724 = (state_3726[(2)]);
var state_3726__$1 = state_3726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3726__$1,inst_3724);
} else {
if((state_val_3727 === (4))){
var inst_3715 = func.call(null,param);
var inst_3716 = cljs.core.async.timeout.call(null,time_out);
var state_3726__$1 = (function (){var statearr_3731 = state_3726;
(statearr_3731[(7)] = inst_3715);

return statearr_3731;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3726__$1,(7),inst_3716);
} else {
if((state_val_3727 === (5))){
var state_3726__$1 = state_3726;
var statearr_3732_3752 = state_3726__$1;
(statearr_3732_3752[(2)] = null);

(statearr_3732_3752[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3727 === (6))){
var inst_3722 = (state_3726[(2)]);
var state_3726__$1 = state_3726;
var statearr_3733_3753 = state_3726__$1;
(statearr_3733_3753[(2)] = inst_3722);

(statearr_3733_3753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3727 === (7))){
var inst_3718 = (state_3726[(2)]);
var state_3726__$1 = (function (){var statearr_3734 = state_3726;
(statearr_3734[(8)] = inst_3718);

return statearr_3734;
})();
var statearr_3735_3754 = state_3726__$1;
(statearr_3735_3754[(2)] = null);

(statearr_3735_3754[(1)] = (2));


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
var client$v3d$state_machine__3561__auto__ = null;
var client$v3d$state_machine__3561__auto____0 = (function (){
var statearr_3736 = [null,null,null,null,null,null,null,null,null];
(statearr_3736[(0)] = client$v3d$state_machine__3561__auto__);

(statearr_3736[(1)] = (1));

return statearr_3736;
});
var client$v3d$state_machine__3561__auto____1 = (function (state_3726){
while(true){
var ret_value__3562__auto__ = (function (){try{while(true){
var result__3563__auto__ = switch__3560__auto__.call(null,state_3726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3563__auto__;
}
break;
}
}catch (e3737){var ex__3564__auto__ = e3737;
var statearr_3738_3755 = state_3726;
(statearr_3738_3755[(2)] = ex__3564__auto__);


if(cljs.core.seq.call(null,(state_3726[(4)]))){
var statearr_3739_3756 = state_3726;
(statearr_3739_3756[(1)] = cljs.core.first.call(null,(state_3726[(4)])));

} else {
throw ex__3564__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3757 = state_3726;
state_3726 = G__3757;
continue;
} else {
return ret_value__3562__auto__;
}
break;
}
});
client$v3d$state_machine__3561__auto__ = function(state_3726){
switch(arguments.length){
case 0:
return client$v3d$state_machine__3561__auto____0.call(this);
case 1:
return client$v3d$state_machine__3561__auto____1.call(this,state_3726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
client$v3d$state_machine__3561__auto__.cljs$core$IFn$_invoke$arity$0 = client$v3d$state_machine__3561__auto____0;
client$v3d$state_machine__3561__auto__.cljs$core$IFn$_invoke$arity$1 = client$v3d$state_machine__3561__auto____1;
return client$v3d$state_machine__3561__auto__;
})()
})();
var state__3585__auto__ = (function (){var statearr_3740 = f__3584__auto__.call(null);
(statearr_3740[(6)] = c__3583__auto__);

return statearr_3740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3585__auto__);
}));

return c__3583__auto__;
}));

(client.v3d.repeater.cljs$lang$maxFixedArity = 3);

client.v3d.delayer = (function client$v3d$delayer(func,time){
var c__3583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__3584__auto__ = (function (){var switch__3560__auto__ = (function (state_3763){
var state_val_3764 = (state_3763[(1)]);
if((state_val_3764 === (1))){
var inst_3758 = cljs.core.async.timeout.call(null,time);
var state_3763__$1 = state_3763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3763__$1,(2),inst_3758);
} else {
if((state_val_3764 === (2))){
var inst_3760 = (state_3763[(2)]);
var inst_3761 = func.call(null);
var state_3763__$1 = (function (){var statearr_3765 = state_3763;
(statearr_3765[(7)] = inst_3760);

return statearr_3765;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3763__$1,inst_3761);
} else {
return null;
}
}
});
return (function() {
var client$v3d$delayer_$_state_machine__3561__auto__ = null;
var client$v3d$delayer_$_state_machine__3561__auto____0 = (function (){
var statearr_3766 = [null,null,null,null,null,null,null,null];
(statearr_3766[(0)] = client$v3d$delayer_$_state_machine__3561__auto__);

(statearr_3766[(1)] = (1));

return statearr_3766;
});
var client$v3d$delayer_$_state_machine__3561__auto____1 = (function (state_3763){
while(true){
var ret_value__3562__auto__ = (function (){try{while(true){
var result__3563__auto__ = switch__3560__auto__.call(null,state_3763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3563__auto__;
}
break;
}
}catch (e3767){var ex__3564__auto__ = e3767;
var statearr_3768_3771 = state_3763;
(statearr_3768_3771[(2)] = ex__3564__auto__);


if(cljs.core.seq.call(null,(state_3763[(4)]))){
var statearr_3769_3772 = state_3763;
(statearr_3769_3772[(1)] = cljs.core.first.call(null,(state_3763[(4)])));

} else {
throw ex__3564__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3773 = state_3763;
state_3763 = G__3773;
continue;
} else {
return ret_value__3562__auto__;
}
break;
}
});
client$v3d$delayer_$_state_machine__3561__auto__ = function(state_3763){
switch(arguments.length){
case 0:
return client$v3d$delayer_$_state_machine__3561__auto____0.call(this);
case 1:
return client$v3d$delayer_$_state_machine__3561__auto____1.call(this,state_3763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
client$v3d$delayer_$_state_machine__3561__auto__.cljs$core$IFn$_invoke$arity$0 = client$v3d$delayer_$_state_machine__3561__auto____0;
client$v3d$delayer_$_state_machine__3561__auto__.cljs$core$IFn$_invoke$arity$1 = client$v3d$delayer_$_state_machine__3561__auto____1;
return client$v3d$delayer_$_state_machine__3561__auto__;
})()
})();
var state__3585__auto__ = (function (){var statearr_3770 = f__3584__auto__.call(null);
(statearr_3770[(6)] = c__3583__auto__);

return statearr_3770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3585__auto__);
}));

return c__3583__auto__;
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
}catch (e3774){if((e3774 instanceof Error)){
var e = e3774;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e3774;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),client.v3d.error_handler], null));

return cljs.core.vreset_BANG_.call(null,client.v3d.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
client.v3d.handle_request = (function client$v3d$handle_request(request){
var temp__5802__auto___3781 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto___3781)){
var vie_3782 = temp__5802__auto___3781;
client.v3d.view.call(null,vie_3782);
} else {
}

var temp__5802__auto___3783 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto___3783)){
var pit_3784 = temp__5802__auto___3783;
client.v3d.pitch.call(null,pit_3784);
} else {
}

var temp__5802__auto___3785 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto___3785)){
var rol_3786 = temp__5802__auto___3785;
client.v3d.roll.call(null,rol_3786);
} else {
}

var temp__5802__auto___3787 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto___3787)){
var vec__3775_3788 = temp__5802__auto___3787;
var lat_3789 = cljs.core.nth.call(null,vec__3775_3788,(0),null);
var lon_3790 = cljs.core.nth.call(null,vec__3775_3788,(1),null);
var vec__3778_3791 = client.cesium.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [geo.calc.radians.call(null,lat_3789),geo.calc.radians.call(null,lon_3790)], null),(0));
var __3792 = cljs.core.nth.call(null,vec__3778_3791,(0),null);
var __3793__$1 = cljs.core.nth.call(null,vec__3778_3791,(1),null);
var sh_3794 = cljs.core.nth.call(null,vec__3778_3791,(2),null);
cljs.core._vreset_BANG_.call(null,client.v3d.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,client.v3d.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_3794 | (0))));
} else {
}

return client.v3d.response_request.call(null);
});
client.v3d.handle_vehicle = (function client$v3d$handle_vehicle(vehicle){
var vec__3795 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__3795,(0),null);
var lon = cljs.core.nth.call(null,vec__3795,(1),null);
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
var temp__5802__auto___3798 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5802__auto___3798)){
var vehicle_3799 = temp__5802__auto___3798;
client.v3d.handle_vehicle.call(null,vehicle_3799);
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

client.v3d.repeater.call(null,client.v3d.receive_vehicle,(4000));

return client.v3d.show_controls.call(null);
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
}catch (e3800){if((e3800 instanceof Error)){
var e = e3800;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e3800;

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
