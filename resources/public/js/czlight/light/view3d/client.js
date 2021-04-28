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
var map__3600 = response;
var map__3600__$1 = (((((!((map__3600 == null))))?(((((map__3600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3600):map__3600);
var status = cljs.core.get.call(null,map__3600__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__3600__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
light.view3d.client.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
light.view3d.client.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
light.view3d.client.PORT = (8448);
light.view3d.client.repeater = (function light$view3d$client$repeater(var_args){
var G__3603 = arguments.length;
switch (G__3603) {
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
var c__3470__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3470__auto__){
return (function (){
var f__3471__auto__ = (function (){var switch__3447__auto__ = ((function (c__3470__auto__){
return (function (state_3617){
var state_val_3618 = (state_3617[(1)]);
if((state_val_3618 === (1))){
var state_3617__$1 = state_3617;
var statearr_3619_3659 = state_3617__$1;
(statearr_3619_3659[(2)] = null);

(statearr_3619_3659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3618 === (2))){
var state_3617__$1 = state_3617;
var statearr_3620_3660 = state_3617__$1;
(statearr_3620_3660[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3618 === (3))){
var inst_3615 = (state_3617[(2)]);
var state_3617__$1 = state_3617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3617__$1,inst_3615);
} else {
if((state_val_3618 === (4))){
var inst_3606 = func.call(null);
var inst_3607 = cljs.core.async.timeout.call(null,time_out);
var state_3617__$1 = (function (){var statearr_3622 = state_3617;
(statearr_3622[(7)] = inst_3606);

return statearr_3622;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3617__$1,(7),inst_3607);
} else {
if((state_val_3618 === (5))){
var state_3617__$1 = state_3617;
var statearr_3623_3661 = state_3617__$1;
(statearr_3623_3661[(2)] = null);

(statearr_3623_3661[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3618 === (6))){
var inst_3613 = (state_3617[(2)]);
var state_3617__$1 = state_3617;
var statearr_3624_3662 = state_3617__$1;
(statearr_3624_3662[(2)] = inst_3613);

(statearr_3624_3662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3618 === (7))){
var inst_3609 = (state_3617[(2)]);
var state_3617__$1 = (function (){var statearr_3625 = state_3617;
(statearr_3625[(8)] = inst_3609);

return statearr_3625;
})();
var statearr_3626_3663 = state_3617__$1;
(statearr_3626_3663[(2)] = null);

(statearr_3626_3663[(1)] = (2));


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
});})(c__3470__auto__))
;
return ((function (switch__3447__auto__,c__3470__auto__){
return (function() {
var light$view3d$client$state_machine__3448__auto__ = null;
var light$view3d$client$state_machine__3448__auto____0 = (function (){
var statearr_3627 = [null,null,null,null,null,null,null,null,null];
(statearr_3627[(0)] = light$view3d$client$state_machine__3448__auto__);

(statearr_3627[(1)] = (1));

return statearr_3627;
});
var light$view3d$client$state_machine__3448__auto____1 = (function (state_3617){
while(true){
var ret_value__3449__auto__ = (function (){try{while(true){
var result__3450__auto__ = switch__3447__auto__.call(null,state_3617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3450__auto__;
}
break;
}
}catch (e3628){if((e3628 instanceof Object)){
var ex__3451__auto__ = e3628;
var statearr_3629_3664 = state_3617;
(statearr_3629_3664[(5)] = ex__3451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3665 = state_3617;
state_3617 = G__3665;
continue;
} else {
return ret_value__3449__auto__;
}
break;
}
});
light$view3d$client$state_machine__3448__auto__ = function(state_3617){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__3448__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__3448__auto____1.call(this,state_3617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__3448__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__3448__auto____0;
light$view3d$client$state_machine__3448__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__3448__auto____1;
return light$view3d$client$state_machine__3448__auto__;
})()
;})(switch__3447__auto__,c__3470__auto__))
})();
var state__3472__auto__ = (function (){var statearr_3630 = f__3471__auto__.call(null);
(statearr_3630[(6)] = c__3470__auto__);

return statearr_3630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3472__auto__);
});})(c__3470__auto__))
);

return c__3470__auto__;
});

light.view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__3470__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3470__auto__){
return (function (){
var f__3471__auto__ = (function (){var switch__3447__auto__ = ((function (c__3470__auto__){
return (function (state_3644){
var state_val_3645 = (state_3644[(1)]);
if((state_val_3645 === (1))){
var state_3644__$1 = state_3644;
var statearr_3646_3666 = state_3644__$1;
(statearr_3646_3666[(2)] = null);

(statearr_3646_3666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3645 === (2))){
var state_3644__$1 = state_3644;
var statearr_3647_3667 = state_3644__$1;
(statearr_3647_3667[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3645 === (3))){
var inst_3642 = (state_3644[(2)]);
var state_3644__$1 = state_3644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3644__$1,inst_3642);
} else {
if((state_val_3645 === (4))){
var inst_3633 = func.call(null,param);
var inst_3634 = cljs.core.async.timeout.call(null,time_out);
var state_3644__$1 = (function (){var statearr_3649 = state_3644;
(statearr_3649[(7)] = inst_3633);

return statearr_3649;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3644__$1,(7),inst_3634);
} else {
if((state_val_3645 === (5))){
var state_3644__$1 = state_3644;
var statearr_3650_3668 = state_3644__$1;
(statearr_3650_3668[(2)] = null);

(statearr_3650_3668[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3645 === (6))){
var inst_3640 = (state_3644[(2)]);
var state_3644__$1 = state_3644;
var statearr_3651_3669 = state_3644__$1;
(statearr_3651_3669[(2)] = inst_3640);

(statearr_3651_3669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3645 === (7))){
var inst_3636 = (state_3644[(2)]);
var state_3644__$1 = (function (){var statearr_3652 = state_3644;
(statearr_3652[(8)] = inst_3636);

return statearr_3652;
})();
var statearr_3653_3670 = state_3644__$1;
(statearr_3653_3670[(2)] = null);

(statearr_3653_3670[(1)] = (2));


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
});})(c__3470__auto__))
;
return ((function (switch__3447__auto__,c__3470__auto__){
return (function() {
var light$view3d$client$state_machine__3448__auto__ = null;
var light$view3d$client$state_machine__3448__auto____0 = (function (){
var statearr_3654 = [null,null,null,null,null,null,null,null,null];
(statearr_3654[(0)] = light$view3d$client$state_machine__3448__auto__);

(statearr_3654[(1)] = (1));

return statearr_3654;
});
var light$view3d$client$state_machine__3448__auto____1 = (function (state_3644){
while(true){
var ret_value__3449__auto__ = (function (){try{while(true){
var result__3450__auto__ = switch__3447__auto__.call(null,state_3644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3450__auto__;
}
break;
}
}catch (e3655){if((e3655 instanceof Object)){
var ex__3451__auto__ = e3655;
var statearr_3656_3671 = state_3644;
(statearr_3656_3671[(5)] = ex__3451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3672 = state_3644;
state_3644 = G__3672;
continue;
} else {
return ret_value__3449__auto__;
}
break;
}
});
light$view3d$client$state_machine__3448__auto__ = function(state_3644){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__3448__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__3448__auto____1.call(this,state_3644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__3448__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__3448__auto____0;
light$view3d$client$state_machine__3448__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__3448__auto____1;
return light$view3d$client$state_machine__3448__auto__;
})()
;})(switch__3447__auto__,c__3470__auto__))
})();
var state__3472__auto__ = (function (){var statearr_3657 = f__3471__auto__.call(null);
(statearr_3657[(6)] = c__3470__auto__);

return statearr_3657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3472__auto__);
});})(c__3470__auto__))
);

return c__3470__auto__;
});

light.view3d.client.repeater.cljs$lang$maxFixedArity = 3;

light.view3d.client.repeater_BANG_ = (function light$view3d$client$repeater_BANG_(var_args){
var G__3674 = arguments.length;
switch (G__3674) {
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
var c__3470__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3470__auto__){
return (function (){
var f__3471__auto__ = (function (){var switch__3447__auto__ = ((function (c__3470__auto__){
return (function (state_3689){
var state_val_3690 = (state_3689[(1)]);
if((state_val_3690 === (1))){
var state_3689__$1 = state_3689;
var statearr_3691_3732 = state_3689__$1;
(statearr_3691_3732[(2)] = null);

(statearr_3691_3732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3690 === (2))){
var state_3689__$1 = state_3689;
var statearr_3692_3733 = state_3689__$1;
(statearr_3692_3733[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3690 === (3))){
var inst_3687 = (state_3689[(2)]);
var state_3689__$1 = state_3689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3689__$1,inst_3687);
} else {
if((state_val_3690 === (4))){
var inst_3677 = func.call(null);
var inst_3678 = cljs.core.deref.call(null,time_out);
var inst_3679 = cljs.core.async.timeout.call(null,inst_3678);
var state_3689__$1 = (function (){var statearr_3694 = state_3689;
(statearr_3694[(7)] = inst_3677);

return statearr_3694;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3689__$1,(7),inst_3679);
} else {
if((state_val_3690 === (5))){
var state_3689__$1 = state_3689;
var statearr_3695_3734 = state_3689__$1;
(statearr_3695_3734[(2)] = null);

(statearr_3695_3734[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3690 === (6))){
var inst_3685 = (state_3689[(2)]);
var state_3689__$1 = state_3689;
var statearr_3696_3735 = state_3689__$1;
(statearr_3696_3735[(2)] = inst_3685);

(statearr_3696_3735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3690 === (7))){
var inst_3681 = (state_3689[(2)]);
var state_3689__$1 = (function (){var statearr_3697 = state_3689;
(statearr_3697[(8)] = inst_3681);

return statearr_3697;
})();
var statearr_3698_3736 = state_3689__$1;
(statearr_3698_3736[(2)] = null);

(statearr_3698_3736[(1)] = (2));


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
});})(c__3470__auto__))
;
return ((function (switch__3447__auto__,c__3470__auto__){
return (function() {
var light$view3d$client$state_machine__3448__auto__ = null;
var light$view3d$client$state_machine__3448__auto____0 = (function (){
var statearr_3699 = [null,null,null,null,null,null,null,null,null];
(statearr_3699[(0)] = light$view3d$client$state_machine__3448__auto__);

(statearr_3699[(1)] = (1));

return statearr_3699;
});
var light$view3d$client$state_machine__3448__auto____1 = (function (state_3689){
while(true){
var ret_value__3449__auto__ = (function (){try{while(true){
var result__3450__auto__ = switch__3447__auto__.call(null,state_3689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3450__auto__;
}
break;
}
}catch (e3700){if((e3700 instanceof Object)){
var ex__3451__auto__ = e3700;
var statearr_3701_3737 = state_3689;
(statearr_3701_3737[(5)] = ex__3451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3738 = state_3689;
state_3689 = G__3738;
continue;
} else {
return ret_value__3449__auto__;
}
break;
}
});
light$view3d$client$state_machine__3448__auto__ = function(state_3689){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__3448__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__3448__auto____1.call(this,state_3689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__3448__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__3448__auto____0;
light$view3d$client$state_machine__3448__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__3448__auto____1;
return light$view3d$client$state_machine__3448__auto__;
})()
;})(switch__3447__auto__,c__3470__auto__))
})();
var state__3472__auto__ = (function (){var statearr_3702 = f__3471__auto__.call(null);
(statearr_3702[(6)] = c__3470__auto__);

return statearr_3702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3472__auto__);
});})(c__3470__auto__))
);

return c__3470__auto__;
});

light.view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__3470__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3470__auto__){
return (function (){
var f__3471__auto__ = (function (){var switch__3447__auto__ = ((function (c__3470__auto__){
return (function (state_3717){
var state_val_3718 = (state_3717[(1)]);
if((state_val_3718 === (1))){
var state_3717__$1 = state_3717;
var statearr_3719_3739 = state_3717__$1;
(statearr_3719_3739[(2)] = null);

(statearr_3719_3739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3718 === (2))){
var state_3717__$1 = state_3717;
var statearr_3720_3740 = state_3717__$1;
(statearr_3720_3740[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3718 === (3))){
var inst_3715 = (state_3717[(2)]);
var state_3717__$1 = state_3717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3717__$1,inst_3715);
} else {
if((state_val_3718 === (4))){
var inst_3705 = func.call(null,param);
var inst_3706 = cljs.core.deref.call(null,time_out);
var inst_3707 = cljs.core.async.timeout.call(null,inst_3706);
var state_3717__$1 = (function (){var statearr_3722 = state_3717;
(statearr_3722[(7)] = inst_3705);

return statearr_3722;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3717__$1,(7),inst_3707);
} else {
if((state_val_3718 === (5))){
var state_3717__$1 = state_3717;
var statearr_3723_3741 = state_3717__$1;
(statearr_3723_3741[(2)] = null);

(statearr_3723_3741[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3718 === (6))){
var inst_3713 = (state_3717[(2)]);
var state_3717__$1 = state_3717;
var statearr_3724_3742 = state_3717__$1;
(statearr_3724_3742[(2)] = inst_3713);

(statearr_3724_3742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3718 === (7))){
var inst_3709 = (state_3717[(2)]);
var state_3717__$1 = (function (){var statearr_3725 = state_3717;
(statearr_3725[(8)] = inst_3709);

return statearr_3725;
})();
var statearr_3726_3743 = state_3717__$1;
(statearr_3726_3743[(2)] = null);

(statearr_3726_3743[(1)] = (2));


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
});})(c__3470__auto__))
;
return ((function (switch__3447__auto__,c__3470__auto__){
return (function() {
var light$view3d$client$state_machine__3448__auto__ = null;
var light$view3d$client$state_machine__3448__auto____0 = (function (){
var statearr_3727 = [null,null,null,null,null,null,null,null,null];
(statearr_3727[(0)] = light$view3d$client$state_machine__3448__auto__);

(statearr_3727[(1)] = (1));

return statearr_3727;
});
var light$view3d$client$state_machine__3448__auto____1 = (function (state_3717){
while(true){
var ret_value__3449__auto__ = (function (){try{while(true){
var result__3450__auto__ = switch__3447__auto__.call(null,state_3717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3450__auto__;
}
break;
}
}catch (e3728){if((e3728 instanceof Object)){
var ex__3451__auto__ = e3728;
var statearr_3729_3744 = state_3717;
(statearr_3729_3744[(5)] = ex__3451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3745 = state_3717;
state_3717 = G__3745;
continue;
} else {
return ret_value__3449__auto__;
}
break;
}
});
light$view3d$client$state_machine__3448__auto__ = function(state_3717){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__3448__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__3448__auto____1.call(this,state_3717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__3448__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__3448__auto____0;
light$view3d$client$state_machine__3448__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__3448__auto____1;
return light$view3d$client$state_machine__3448__auto__;
})()
;})(switch__3447__auto__,c__3470__auto__))
})();
var state__3472__auto__ = (function (){var statearr_3730 = f__3471__auto__.call(null);
(statearr_3730[(6)] = c__3470__auto__);

return statearr_3730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3472__auto__);
});})(c__3470__auto__))
);

return c__3470__auto__;
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
}catch (e3746){if((e3746 instanceof Error)){
var e = e3746;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e3746;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),light.view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
light.view3d.client.handle_request = (function light$view3d$client$handle_request(request){
var temp__5733__auto___3753 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___3753)){
var vie_3754 = temp__5733__auto___3753;
light.view3d.client.view.call(null,vie_3754);
} else {
}

var temp__5733__auto___3755 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___3755)){
var pit_3756 = temp__5733__auto___3755;
light.view3d.client.pitch.call(null,pit_3756);
} else {
}

var temp__5733__auto___3757 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___3757)){
var rol_3758 = temp__5733__auto___3757;
light.view3d.client.roll.call(null,rol_3758);
} else {
}

var temp__5733__auto___3759 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___3759)){
var vec__3747_3760 = temp__5733__auto___3759;
var lat_3761 = cljs.core.nth.call(null,vec__3747_3760,(0),null);
var lon_3762 = cljs.core.nth.call(null,vec__3747_3760,(1),null);
var vec__3750_3763 = light.czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [light.geo.calc.radians.call(null,lat_3761),light.geo.calc.radians.call(null,lon_3762)], null),(0));
var __3764 = cljs.core.nth.call(null,vec__3750_3763,(0),null);
var __3765__$1 = cljs.core.nth.call(null,vec__3750_3763,(1),null);
var sh_3766 = cljs.core.nth.call(null,vec__3750_3763,(2),null);
cljs.core._vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_3766 | (0))));
} else {
}

return light.view3d.client.response_request.call(null);
});
light.view3d.client.handle_vehicle = (function light$view3d$client$handle_vehicle(vehicle){
var vec__3767 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__3767,(0),null);
var lon = cljs.core.nth.call(null,vec__3767,(1),null);
var alt = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle);
var vev = (function (){var or__4047__auto__ = new cljs.core.Keyword(null,"view-elevation","view-elevation",-681076231).cljs$core$IFn$_invoke$arity$1(vehicle);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})();
var vla = (function (){var or__4047__auto__ = new cljs.core.Keyword(null,"view-offset-lat","view-offset-lat",-585670121).cljs$core$IFn$_invoke$arity$1(vehicle);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})();
var vlo = (function (){var or__4047__auto__ = new cljs.core.Keyword(null,"view-offset-lon","view-offset-lon",-164920018).cljs$core$IFn$_invoke$arity$1(vehicle);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})();
var crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle);
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
var temp__5733__auto___3770 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5733__auto___3770)){
var vehicle_3771 = temp__5733__auto___3770;
light.view3d.client.handle_vehicle.call(null,vehicle_3771);
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
}catch (e3772){if((e3772 instanceof Error)){
var e = e3772;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e3772;

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
