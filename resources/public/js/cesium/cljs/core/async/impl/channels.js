// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.channels !== 'undefined') && (typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels48683 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels48683 = (function (val,meta48684){
this.val = val;
this.meta48684 = meta48684;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels48683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48685,meta48684__$1){
var self__ = this;
var _48685__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels48683(self__.val,meta48684__$1));
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels48683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48685){
var self__ = this;
var _48685__$1 = this;
return self__.meta48684;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels48683.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels48683.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta48684","meta48684",1261883463,null)], null);
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels48683.cljs$lang$type = true);

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels48683.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels48683");

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels48683.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels48683");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels48683.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels48683 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels48683(val__$1,meta48684){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels48683(val__$1,meta48684));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels48683(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

(cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(cljs.core.async.impl.channels.PutBox.cljs$lang$type = true);

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox");

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async.impl.channels/PutBox");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/PutBox.
 */
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

var cljs$core$async$impl$channels$MMC$abort$dyn_48686 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$);
} else {
var m__5349__auto__ = (cljs.core.async.impl.channels.abort["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
});
cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
return cljs$core$async$impl$channels$MMC$abort$dyn_48686.call(null,this$);
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_48698 = self__.puts.pop();
if((putter_48698 == null)){
} else {
var put_handler_48699 = putter_48698.handler;
var val_48700 = putter_48698.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_48699)){
var put_cb_48701 = cljs.core.async.impl.protocols.commit.call(null,put_handler_48699);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_48701,put_handler_48699,val_48700,putter_48698,this$__$1){
return (function (){
return put_cb_48701.call(null,true);
});})(put_cb_48701,put_handler_48699,val_48700,putter_48698,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if((!((val == null)))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if((!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return cljs.core.async.impl.channels.box.call(null,(!(closed__$1)));
} else {
if(closed__$1){
cljs.core.async.impl.protocols.commit.call(null,handler);

return cljs.core.async.impl.channels.box.call(null,false);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = self__.buf;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__5000__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if((((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0))))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__48702 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__48702;
continue;
} else {
var G__48703 = takers;
takers = G__48703;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__48687_48704 = cljs.core.seq.call(null,take_cbs);
var chunk__48688_48705 = null;
var count__48689_48706 = (0);
var i__48690_48707 = (0);
while(true){
if((i__48690_48707 < count__48689_48706)){
var f_48708 = cljs.core._nth.call(null,chunk__48688_48705,i__48690_48707);
cljs.core.async.impl.dispatch.run.call(null,f_48708);


var G__48709 = seq__48687_48704;
var G__48710 = chunk__48688_48705;
var G__48711 = count__48689_48706;
var G__48712 = (i__48690_48707 + (1));
seq__48687_48704 = G__48709;
chunk__48688_48705 = G__48710;
count__48689_48706 = G__48711;
i__48690_48707 = G__48712;
continue;
} else {
var temp__5804__auto___48713 = cljs.core.seq.call(null,seq__48687_48704);
if(temp__5804__auto___48713){
var seq__48687_48714__$1 = temp__5804__auto___48713;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48687_48714__$1)){
var c__5525__auto___48715 = cljs.core.chunk_first.call(null,seq__48687_48714__$1);
var G__48716 = cljs.core.chunk_rest.call(null,seq__48687_48714__$1);
var G__48717 = c__5525__auto___48715;
var G__48718 = cljs.core.count.call(null,c__5525__auto___48715);
var G__48719 = (0);
seq__48687_48704 = G__48716;
chunk__48688_48705 = G__48717;
count__48689_48706 = G__48718;
i__48690_48707 = G__48719;
continue;
} else {
var f_48720 = cljs.core.first.call(null,seq__48687_48714__$1);
cljs.core.async.impl.dispatch.run.call(null,f_48720);


var G__48721 = cljs.core.next.call(null,seq__48687_48714__$1);
var G__48722 = null;
var G__48723 = (0);
var G__48724 = (0);
seq__48687_48704 = G__48721;
chunk__48688_48705 = G__48722;
count__48689_48706 = G__48723;
i__48690_48707 = G__48724;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,(function (){
return take_cb.call(null,val);
}));

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > (64))){
(self__.dirty_puts = (0));

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
(self__.dirty_puts = (self__.dirty_puts + (1)));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join(''),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if((!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return null;
} else {
if((((!((self__.buf == null)))) && ((cljs.core.count.call(null,self__.buf) > (0))))){
var temp__5802__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__5802__auto__)){
var take_cb = temp__5802__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__48691 = ((((cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0)))))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__5000__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__5000__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__5000__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if(((cljs.core.not.call(null,done_QMARK_)) && (((cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0))))))){
var G__48725 = cbs__$1;
cbs = G__48725;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__48691,(0),null);
var cbs = cljs.core.nth.call(null,vec__48691,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__48694_48726 = cljs.core.seq.call(null,cbs);
var chunk__48695_48727 = null;
var count__48696_48728 = (0);
var i__48697_48729 = (0);
while(true){
if((i__48697_48729 < count__48696_48728)){
var cb_48730 = cljs.core._nth.call(null,chunk__48695_48727,i__48697_48729);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__48694_48726,chunk__48695_48727,count__48696_48728,i__48697_48729,cb_48730,val,vec__48691,done_QMARK_,cbs,take_cb,temp__5802__auto__,this$__$1){
return (function (){
return cb_48730.call(null,true);
});})(seq__48694_48726,chunk__48695_48727,count__48696_48728,i__48697_48729,cb_48730,val,vec__48691,done_QMARK_,cbs,take_cb,temp__5802__auto__,this$__$1))
);


var G__48731 = seq__48694_48726;
var G__48732 = chunk__48695_48727;
var G__48733 = count__48696_48728;
var G__48734 = (i__48697_48729 + (1));
seq__48694_48726 = G__48731;
chunk__48695_48727 = G__48732;
count__48696_48728 = G__48733;
i__48697_48729 = G__48734;
continue;
} else {
var temp__5804__auto___48735 = cljs.core.seq.call(null,seq__48694_48726);
if(temp__5804__auto___48735){
var seq__48694_48736__$1 = temp__5804__auto___48735;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48694_48736__$1)){
var c__5525__auto___48737 = cljs.core.chunk_first.call(null,seq__48694_48736__$1);
var G__48738 = cljs.core.chunk_rest.call(null,seq__48694_48736__$1);
var G__48739 = c__5525__auto___48737;
var G__48740 = cljs.core.count.call(null,c__5525__auto___48737);
var G__48741 = (0);
seq__48694_48726 = G__48738;
chunk__48695_48727 = G__48739;
count__48696_48728 = G__48740;
i__48697_48729 = G__48741;
continue;
} else {
var cb_48742 = cljs.core.first.call(null,seq__48694_48736__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__48694_48726,chunk__48695_48727,count__48696_48728,i__48697_48729,cb_48742,seq__48694_48736__$1,temp__5804__auto___48735,val,vec__48691,done_QMARK_,cbs,take_cb,temp__5802__auto__,this$__$1){
return (function (){
return cb_48742.call(null,true);
});})(seq__48694_48726,chunk__48695_48727,count__48696_48728,i__48697_48729,cb_48742,seq__48694_48736__$1,temp__5804__auto___48735,val,vec__48691,done_QMARK_,cbs,take_cb,temp__5802__auto__,this$__$1))
);


var G__48743 = cljs.core.next.call(null,seq__48694_48736__$1);
var G__48744 = null;
var G__48745 = (0);
var G__48746 = (0);
seq__48694_48726 = G__48743;
chunk__48695_48727 = G__48744;
count__48696_48728 = G__48745;
i__48697_48729 = G__48746;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,(function (){
return put_cb.call(null,true);
}));

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__5000__auto__;
}
})())){
var has_val = (function (){var and__5000__auto__ = self__.buf;
if(cljs.core.truth_(and__5000__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__5000__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
(self__.dirty_takes = (0));

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
(self__.dirty_takes = (self__.dirty_takes + (1)));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join(''),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
(self__.closed = true);

if(cljs.core.truth_((function (){var and__5000__auto__ = self__.buf;
if(cljs.core.truth_(and__5000__auto__)){
return (self__.puts.length === (0));
} else {
return and__5000__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_48747 = self__.takes.pop();
if((taker_48747 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_48747)){
var take_cb_48748 = cljs.core.async.impl.protocols.commit.call(null,taker_48747);
var val_48749 = (cljs.core.truth_((function (){var and__5000__auto__ = self__.buf;
if(cljs.core.truth_(and__5000__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__5000__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_48748,val_48749,taker_48747,this$__$1){
return (function (){
return take_cb_48748.call(null,val_48749);
});})(take_cb_48748,val_48749,taker_48747,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true);

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel");

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/ManyToManyChannel.
 */
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__5002__auto__ = exh;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__48751 = arguments.length;
switch (G__48751) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return (function() {
var G__48755 = null;
var G__48755__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e48752){var t = e48752;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__48755__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e48753){var t = e48753;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__48755 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__48755__1.call(this,buf__$1);
case 2:
return G__48755__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48755.cljs$core$IFn$_invoke$arity$1 = G__48755__1;
G__48755.cljs$core$IFn$_invoke$arity$2 = G__48755__2;
return G__48755;
})()
})()));
}));

(cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=channels.js.map
