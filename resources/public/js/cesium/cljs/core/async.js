// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
goog.scope(function(){
cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__48796 = arguments.length;
switch (G__48796) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48797 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48797 = (function (f,blockable,meta48798){
this.f = f;
this.blockable = blockable;
this.meta48798 = meta48798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48799,meta48798__$1){
var self__ = this;
var _48799__$1 = this;
return (new cljs.core.async.t_cljs$core$async48797(self__.f,self__.blockable,meta48798__$1));
}));

(cljs.core.async.t_cljs$core$async48797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48799){
var self__ = this;
var _48799__$1 = this;
return self__.meta48798;
}));

(cljs.core.async.t_cljs$core$async48797.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48797.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48797.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async48797.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async48797.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta48798","meta48798",-972203707,null)], null);
}));

(cljs.core.async.t_cljs$core$async48797.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48797.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48797");

(cljs.core.async.t_cljs$core$async48797.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async48797");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48797.
 */
cljs.core.async.__GT_t_cljs$core$async48797 = (function cljs$core$async$__GT_t_cljs$core$async48797(f__$1,blockable__$1,meta48798){
return (new cljs.core.async.t_cljs$core$async48797(f__$1,blockable__$1,meta48798));
});

}

return (new cljs.core.async.t_cljs$core$async48797(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__48803 = arguments.length;
switch (G__48803) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__48806 = arguments.length;
switch (G__48806) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__48809 = arguments.length;
switch (G__48809) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_48811 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_48811);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_48811);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__48813 = arguments.length;
switch (G__48813) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___48815 = n;
var x_48816 = (0);
while(true){
if((x_48816 < n__5593__auto___48815)){
(a[x_48816] = x_48816);

var G__48817 = (x_48816 + (1));
x_48816 = G__48817;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle.call(null,a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48818 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48818 = (function (flag,meta48819){
this.flag = flag;
this.meta48819 = meta48819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48820,meta48819__$1){
var self__ = this;
var _48820__$1 = this;
return (new cljs.core.async.t_cljs$core$async48818(self__.flag,meta48819__$1));
}));

(cljs.core.async.t_cljs$core$async48818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48820){
var self__ = this;
var _48820__$1 = this;
return self__.meta48819;
}));

(cljs.core.async.t_cljs$core$async48818.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48818.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async48818.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48818.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async48818.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta48819","meta48819",-724919734,null)], null);
}));

(cljs.core.async.t_cljs$core$async48818.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48818");

(cljs.core.async.t_cljs$core$async48818.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async48818");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48818.
 */
cljs.core.async.__GT_t_cljs$core$async48818 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async48818(flag__$1,meta48819){
return (new cljs.core.async.t_cljs$core$async48818(flag__$1,meta48819));
});

}

return (new cljs.core.async.t_cljs$core$async48818(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48821 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48821 = (function (flag,cb,meta48822){
this.flag = flag;
this.cb = cb;
this.meta48822 = meta48822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48823,meta48822__$1){
var self__ = this;
var _48823__$1 = this;
return (new cljs.core.async.t_cljs$core$async48821(self__.flag,self__.cb,meta48822__$1));
}));

(cljs.core.async.t_cljs$core$async48821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48823){
var self__ = this;
var _48823__$1 = this;
return self__.meta48822;
}));

(cljs.core.async.t_cljs$core$async48821.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48821.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async48821.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48821.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async48821.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta48822","meta48822",-1343038226,null)], null);
}));

(cljs.core.async.t_cljs$core$async48821.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48821.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48821");

(cljs.core.async.t_cljs$core$async48821.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async48821");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48821.
 */
cljs.core.async.__GT_t_cljs$core$async48821 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async48821(flag__$1,cb__$1,meta48822){
return (new cljs.core.async.t_cljs$core$async48821(flag__$1,cb__$1,meta48822));
});

}

return (new cljs.core.async.t_cljs$core$async48821(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var ports__$1 = cljs.core.vec.call(null,ports);
var n = cljs.core.count.call(null,ports__$1);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__48824_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48824_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__48825_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48825_SHARP_,port], null));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__48826 = (i + (1));
i = G__48826;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___48831 = arguments.length;
var i__5727__auto___48832 = (0);
while(true){
if((i__5727__auto___48832 < len__5726__auto___48831)){
args__5732__auto__.push((arguments[i__5727__auto___48832]));

var G__48833 = (i__5727__auto___48832 + (1));
i__5727__auto___48832 = G__48833;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__48829){
var map__48830 = p__48829;
var map__48830__$1 = cljs.core.__destructure_map.call(null,map__48830);
var opts = map__48830__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq48827){
var G__48828 = cljs.core.first.call(null,seq48827);
var seq48827__$1 = cljs.core.next.call(null,seq48827);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48828,seq48827__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__48835 = arguments.length;
switch (G__48835) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8277__auto___48882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_48859){
var state_val_48860 = (state_48859[(1)]);
if((state_val_48860 === (7))){
var inst_48855 = (state_48859[(2)]);
var state_48859__$1 = state_48859;
var statearr_48861_48883 = state_48859__$1;
(statearr_48861_48883[(2)] = inst_48855);

(statearr_48861_48883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (1))){
var state_48859__$1 = state_48859;
var statearr_48862_48884 = state_48859__$1;
(statearr_48862_48884[(2)] = null);

(statearr_48862_48884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (4))){
var inst_48838 = (state_48859[(7)]);
var inst_48838__$1 = (state_48859[(2)]);
var inst_48839 = (inst_48838__$1 == null);
var state_48859__$1 = (function (){var statearr_48863 = state_48859;
(statearr_48863[(7)] = inst_48838__$1);

return statearr_48863;
})();
if(cljs.core.truth_(inst_48839)){
var statearr_48864_48885 = state_48859__$1;
(statearr_48864_48885[(1)] = (5));

} else {
var statearr_48865_48886 = state_48859__$1;
(statearr_48865_48886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (13))){
var state_48859__$1 = state_48859;
var statearr_48866_48887 = state_48859__$1;
(statearr_48866_48887[(2)] = null);

(statearr_48866_48887[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (6))){
var inst_48838 = (state_48859[(7)]);
var state_48859__$1 = state_48859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48859__$1,(11),to,inst_48838);
} else {
if((state_val_48860 === (3))){
var inst_48857 = (state_48859[(2)]);
var state_48859__$1 = state_48859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48859__$1,inst_48857);
} else {
if((state_val_48860 === (12))){
var state_48859__$1 = state_48859;
var statearr_48867_48888 = state_48859__$1;
(statearr_48867_48888[(2)] = null);

(statearr_48867_48888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (2))){
var state_48859__$1 = state_48859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48859__$1,(4),from);
} else {
if((state_val_48860 === (11))){
var inst_48848 = (state_48859[(2)]);
var state_48859__$1 = state_48859;
if(cljs.core.truth_(inst_48848)){
var statearr_48868_48889 = state_48859__$1;
(statearr_48868_48889[(1)] = (12));

} else {
var statearr_48869_48890 = state_48859__$1;
(statearr_48869_48890[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (9))){
var state_48859__$1 = state_48859;
var statearr_48870_48891 = state_48859__$1;
(statearr_48870_48891[(2)] = null);

(statearr_48870_48891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (5))){
var state_48859__$1 = state_48859;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48871_48892 = state_48859__$1;
(statearr_48871_48892[(1)] = (8));

} else {
var statearr_48872_48893 = state_48859__$1;
(statearr_48872_48893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (14))){
var inst_48853 = (state_48859[(2)]);
var state_48859__$1 = state_48859;
var statearr_48873_48894 = state_48859__$1;
(statearr_48873_48894[(2)] = inst_48853);

(statearr_48873_48894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (10))){
var inst_48845 = (state_48859[(2)]);
var state_48859__$1 = state_48859;
var statearr_48874_48895 = state_48859__$1;
(statearr_48874_48895[(2)] = inst_48845);

(statearr_48874_48895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48860 === (8))){
var inst_48842 = cljs.core.async.close_BANG_.call(null,to);
var state_48859__$1 = state_48859;
var statearr_48875_48896 = state_48859__$1;
(statearr_48875_48896[(2)] = inst_48842);

(statearr_48875_48896[(1)] = (10));


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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2332__auto__ = null;
var cljs$core$async$state_machine__2332__auto____0 = (function (){
var statearr_48876 = [null,null,null,null,null,null,null,null];
(statearr_48876[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_48876[(1)] = (1));

return statearr_48876;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_48859){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_48859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e48877){var ex__2335__auto__ = e48877;
var statearr_48878_48897 = state_48859;
(statearr_48878_48897[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_48859[(4)]))){
var statearr_48879_48898 = state_48859;
(statearr_48879_48898[(1)] = cljs.core.first.call(null,(state_48859[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48899 = state_48859;
state_48859 = G__48899;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_48859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_48859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_48880 = f__8278__auto__.call(null);
(statearr_48880[(6)] = c__8277__auto___48882);

return statearr_48880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = (function (p__48900){
var vec__48901 = p__48900;
var v = cljs.core.nth.call(null,vec__48901,(0),null);
var p = cljs.core.nth.call(null,vec__48901,(1),null);
var job = vec__48901;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8277__auto___49077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_48908){
var state_val_48909 = (state_48908[(1)]);
if((state_val_48909 === (1))){
var state_48908__$1 = state_48908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48908__$1,(2),res,v);
} else {
if((state_val_48909 === (2))){
var inst_48905 = (state_48908[(2)]);
var inst_48906 = cljs.core.async.close_BANG_.call(null,res);
var state_48908__$1 = (function (){var statearr_48910 = state_48908;
(statearr_48910[(7)] = inst_48905);

return statearr_48910;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48908__$1,inst_48906);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0 = (function (){
var statearr_48911 = [null,null,null,null,null,null,null,null];
(statearr_48911[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__);

(statearr_48911[(1)] = (1));

return statearr_48911;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1 = (function (state_48908){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_48908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e48912){var ex__2335__auto__ = e48912;
var statearr_48913_49078 = state_48908;
(statearr_48913_49078[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_48908[(4)]))){
var statearr_48914_49079 = state_48908;
(statearr_48914_49079[(1)] = cljs.core.first.call(null,(state_48908[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49080 = state_48908;
state_48908 = G__49080;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__ = function(state_48908){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1.call(this,state_48908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_48915 = f__8278__auto__.call(null);
(statearr_48915[(6)] = c__8277__auto___49077);

return statearr_48915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__48916){
var vec__48917 = p__48916;
var v = cljs.core.nth.call(null,vec__48917,(0),null);
var p = cljs.core.nth.call(null,vec__48917,(1),null);
var job = vec__48917;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__5593__auto___49081 = n;
var __49082 = (0);
while(true){
if((__49082 < n__5593__auto___49081)){
var G__48920_49083 = type;
var G__48920_49084__$1 = (((G__48920_49083 instanceof cljs.core.Keyword))?G__48920_49083.fqn:null);
switch (G__48920_49084__$1) {
case "compute":
var c__8277__auto___49086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__49082,c__8277__auto___49086,G__48920_49083,G__48920_49084__$1,n__5593__auto___49081,jobs,results,process__$1,async){
return (function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = ((function (__49082,c__8277__auto___49086,G__48920_49083,G__48920_49084__$1,n__5593__auto___49081,jobs,results,process__$1,async){
return (function (state_48933){
var state_val_48934 = (state_48933[(1)]);
if((state_val_48934 === (1))){
var state_48933__$1 = state_48933;
var statearr_48935_49087 = state_48933__$1;
(statearr_48935_49087[(2)] = null);

(statearr_48935_49087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48934 === (2))){
var state_48933__$1 = state_48933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48933__$1,(4),jobs);
} else {
if((state_val_48934 === (3))){
var inst_48931 = (state_48933[(2)]);
var state_48933__$1 = state_48933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48933__$1,inst_48931);
} else {
if((state_val_48934 === (4))){
var inst_48923 = (state_48933[(2)]);
var inst_48924 = process__$1.call(null,inst_48923);
var state_48933__$1 = state_48933;
if(cljs.core.truth_(inst_48924)){
var statearr_48936_49088 = state_48933__$1;
(statearr_48936_49088[(1)] = (5));

} else {
var statearr_48937_49089 = state_48933__$1;
(statearr_48937_49089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48934 === (5))){
var state_48933__$1 = state_48933;
var statearr_48938_49090 = state_48933__$1;
(statearr_48938_49090[(2)] = null);

(statearr_48938_49090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48934 === (6))){
var state_48933__$1 = state_48933;
var statearr_48939_49091 = state_48933__$1;
(statearr_48939_49091[(2)] = null);

(statearr_48939_49091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48934 === (7))){
var inst_48929 = (state_48933[(2)]);
var state_48933__$1 = state_48933;
var statearr_48940_49092 = state_48933__$1;
(statearr_48940_49092[(2)] = inst_48929);

(statearr_48940_49092[(1)] = (3));


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
});})(__49082,c__8277__auto___49086,G__48920_49083,G__48920_49084__$1,n__5593__auto___49081,jobs,results,process__$1,async))
;
return ((function (__49082,switch__2331__auto__,c__8277__auto___49086,G__48920_49083,G__48920_49084__$1,n__5593__auto___49081,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0 = (function (){
var statearr_48941 = [null,null,null,null,null,null,null];
(statearr_48941[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__);

(statearr_48941[(1)] = (1));

return statearr_48941;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1 = (function (state_48933){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_48933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e48942){var ex__2335__auto__ = e48942;
var statearr_48943_49093 = state_48933;
(statearr_48943_49093[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_48933[(4)]))){
var statearr_48944_49094 = state_48933;
(statearr_48944_49094[(1)] = cljs.core.first.call(null,(state_48933[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49095 = state_48933;
state_48933 = G__49095;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__ = function(state_48933){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1.call(this,state_48933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__;
})()
;})(__49082,switch__2331__auto__,c__8277__auto___49086,G__48920_49083,G__48920_49084__$1,n__5593__auto___49081,jobs,results,process__$1,async))
})();
var state__8279__auto__ = (function (){var statearr_48945 = f__8278__auto__.call(null);
(statearr_48945[(6)] = c__8277__auto___49086);

return statearr_48945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
});})(__49082,c__8277__auto___49086,G__48920_49083,G__48920_49084__$1,n__5593__auto___49081,jobs,results,process__$1,async))
);


break;
case "async":
var c__8277__auto___49096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__49082,c__8277__auto___49096,G__48920_49083,G__48920_49084__$1,n__5593__auto___49081,jobs,results,process__$1,async){
return (function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = ((function (__49082,c__8277__auto___49096,G__48920_49083,G__48920_49084__$1,n__5593__auto___49081,jobs,results,process__$1,async){
return (function (state_48958){
var state_val_48959 = (state_48958[(1)]);
if((state_val_48959 === (1))){
var state_48958__$1 = state_48958;
var statearr_48960_49097 = state_48958__$1;
(statearr_48960_49097[(2)] = null);

(statearr_48960_49097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48959 === (2))){
var state_48958__$1 = state_48958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48958__$1,(4),jobs);
} else {
if((state_val_48959 === (3))){
var inst_48956 = (state_48958[(2)]);
var state_48958__$1 = state_48958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48958__$1,inst_48956);
} else {
if((state_val_48959 === (4))){
var inst_48948 = (state_48958[(2)]);
var inst_48949 = async.call(null,inst_48948);
var state_48958__$1 = state_48958;
if(cljs.core.truth_(inst_48949)){
var statearr_48961_49098 = state_48958__$1;
(statearr_48961_49098[(1)] = (5));

} else {
var statearr_48962_49099 = state_48958__$1;
(statearr_48962_49099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48959 === (5))){
var state_48958__$1 = state_48958;
var statearr_48963_49100 = state_48958__$1;
(statearr_48963_49100[(2)] = null);

(statearr_48963_49100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48959 === (6))){
var state_48958__$1 = state_48958;
var statearr_48964_49101 = state_48958__$1;
(statearr_48964_49101[(2)] = null);

(statearr_48964_49101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48959 === (7))){
var inst_48954 = (state_48958[(2)]);
var state_48958__$1 = state_48958;
var statearr_48965_49102 = state_48958__$1;
(statearr_48965_49102[(2)] = inst_48954);

(statearr_48965_49102[(1)] = (3));


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
});})(__49082,c__8277__auto___49096,G__48920_49083,G__48920_49084__$1,n__5593__auto___49081,jobs,results,process__$1,async))
;
return ((function (__49082,switch__2331__auto__,c__8277__auto___49096,G__48920_49083,G__48920_49084__$1,n__5593__auto___49081,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0 = (function (){
var statearr_48966 = [null,null,null,null,null,null,null];
(statearr_48966[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__);

(statearr_48966[(1)] = (1));

return statearr_48966;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1 = (function (state_48958){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_48958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e48967){var ex__2335__auto__ = e48967;
var statearr_48968_49103 = state_48958;
(statearr_48968_49103[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_48958[(4)]))){
var statearr_48969_49104 = state_48958;
(statearr_48969_49104[(1)] = cljs.core.first.call(null,(state_48958[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49105 = state_48958;
state_48958 = G__49105;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__ = function(state_48958){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1.call(this,state_48958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__;
})()
;})(__49082,switch__2331__auto__,c__8277__auto___49096,G__48920_49083,G__48920_49084__$1,n__5593__auto___49081,jobs,results,process__$1,async))
})();
var state__8279__auto__ = (function (){var statearr_48970 = f__8278__auto__.call(null);
(statearr_48970[(6)] = c__8277__auto___49096);

return statearr_48970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
});})(__49082,c__8277__auto___49096,G__48920_49083,G__48920_49084__$1,n__5593__auto___49081,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48920_49084__$1)].join('')));

}

var G__49106 = (__49082 + (1));
__49082 = G__49106;
continue;
} else {
}
break;
}

var c__8277__auto___49107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_48992){
var state_val_48993 = (state_48992[(1)]);
if((state_val_48993 === (7))){
var inst_48988 = (state_48992[(2)]);
var state_48992__$1 = state_48992;
var statearr_48994_49108 = state_48992__$1;
(statearr_48994_49108[(2)] = inst_48988);

(statearr_48994_49108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48993 === (1))){
var state_48992__$1 = state_48992;
var statearr_48995_49109 = state_48992__$1;
(statearr_48995_49109[(2)] = null);

(statearr_48995_49109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48993 === (4))){
var inst_48973 = (state_48992[(7)]);
var inst_48973__$1 = (state_48992[(2)]);
var inst_48974 = (inst_48973__$1 == null);
var state_48992__$1 = (function (){var statearr_48996 = state_48992;
(statearr_48996[(7)] = inst_48973__$1);

return statearr_48996;
})();
if(cljs.core.truth_(inst_48974)){
var statearr_48997_49110 = state_48992__$1;
(statearr_48997_49110[(1)] = (5));

} else {
var statearr_48998_49111 = state_48992__$1;
(statearr_48998_49111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48993 === (6))){
var inst_48973 = (state_48992[(7)]);
var inst_48978 = (state_48992[(8)]);
var inst_48978__$1 = cljs.core.async.chan.call(null,(1));
var inst_48979 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48980 = [inst_48973,inst_48978__$1];
var inst_48981 = (new cljs.core.PersistentVector(null,2,(5),inst_48979,inst_48980,null));
var state_48992__$1 = (function (){var statearr_48999 = state_48992;
(statearr_48999[(8)] = inst_48978__$1);

return statearr_48999;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48992__$1,(8),jobs,inst_48981);
} else {
if((state_val_48993 === (3))){
var inst_48990 = (state_48992[(2)]);
var state_48992__$1 = state_48992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48992__$1,inst_48990);
} else {
if((state_val_48993 === (2))){
var state_48992__$1 = state_48992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48992__$1,(4),from);
} else {
if((state_val_48993 === (9))){
var inst_48985 = (state_48992[(2)]);
var state_48992__$1 = (function (){var statearr_49000 = state_48992;
(statearr_49000[(9)] = inst_48985);

return statearr_49000;
})();
var statearr_49001_49112 = state_48992__$1;
(statearr_49001_49112[(2)] = null);

(statearr_49001_49112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48993 === (5))){
var inst_48976 = cljs.core.async.close_BANG_.call(null,jobs);
var state_48992__$1 = state_48992;
var statearr_49002_49113 = state_48992__$1;
(statearr_49002_49113[(2)] = inst_48976);

(statearr_49002_49113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48993 === (8))){
var inst_48978 = (state_48992[(8)]);
var inst_48983 = (state_48992[(2)]);
var state_48992__$1 = (function (){var statearr_49003 = state_48992;
(statearr_49003[(10)] = inst_48983);

return statearr_49003;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48992__$1,(9),results,inst_48978);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0 = (function (){
var statearr_49004 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49004[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__);

(statearr_49004[(1)] = (1));

return statearr_49004;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1 = (function (state_48992){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_48992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e49005){var ex__2335__auto__ = e49005;
var statearr_49006_49114 = state_48992;
(statearr_49006_49114[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_48992[(4)]))){
var statearr_49007_49115 = state_48992;
(statearr_49007_49115[(1)] = cljs.core.first.call(null,(state_48992[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49116 = state_48992;
state_48992 = G__49116;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__ = function(state_48992){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1.call(this,state_48992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_49008 = f__8278__auto__.call(null);
(statearr_49008[(6)] = c__8277__auto___49107);

return statearr_49008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
}));


var c__8277__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_49046){
var state_val_49047 = (state_49046[(1)]);
if((state_val_49047 === (7))){
var inst_49042 = (state_49046[(2)]);
var state_49046__$1 = state_49046;
var statearr_49048_49117 = state_49046__$1;
(statearr_49048_49117[(2)] = inst_49042);

(statearr_49048_49117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49047 === (20))){
var state_49046__$1 = state_49046;
var statearr_49049_49118 = state_49046__$1;
(statearr_49049_49118[(2)] = null);

(statearr_49049_49118[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49047 === (1))){
var state_49046__$1 = state_49046;
var statearr_49050_49119 = state_49046__$1;
(statearr_49050_49119[(2)] = null);

(statearr_49050_49119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49047 === (4))){
var inst_49011 = (state_49046[(7)]);
var inst_49011__$1 = (state_49046[(2)]);
var inst_49012 = (inst_49011__$1 == null);
var state_49046__$1 = (function (){var statearr_49051 = state_49046;
(statearr_49051[(7)] = inst_49011__$1);

return statearr_49051;
})();
if(cljs.core.truth_(inst_49012)){
var statearr_49052_49120 = state_49046__$1;
(statearr_49052_49120[(1)] = (5));

} else {
var statearr_49053_49121 = state_49046__$1;
(statearr_49053_49121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49047 === (15))){
var inst_49024 = (state_49046[(8)]);
var state_49046__$1 = state_49046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49046__$1,(18),to,inst_49024);
} else {
if((state_val_49047 === (21))){
var inst_49037 = (state_49046[(2)]);
var state_49046__$1 = state_49046;
var statearr_49054_49122 = state_49046__$1;
(statearr_49054_49122[(2)] = inst_49037);

(statearr_49054_49122[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49047 === (13))){
var inst_49039 = (state_49046[(2)]);
var state_49046__$1 = (function (){var statearr_49055 = state_49046;
(statearr_49055[(9)] = inst_49039);

return statearr_49055;
})();
var statearr_49056_49123 = state_49046__$1;
(statearr_49056_49123[(2)] = null);

(statearr_49056_49123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49047 === (6))){
var inst_49011 = (state_49046[(7)]);
var state_49046__$1 = state_49046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49046__$1,(11),inst_49011);
} else {
if((state_val_49047 === (17))){
var inst_49032 = (state_49046[(2)]);
var state_49046__$1 = state_49046;
if(cljs.core.truth_(inst_49032)){
var statearr_49057_49124 = state_49046__$1;
(statearr_49057_49124[(1)] = (19));

} else {
var statearr_49058_49125 = state_49046__$1;
(statearr_49058_49125[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49047 === (3))){
var inst_49044 = (state_49046[(2)]);
var state_49046__$1 = state_49046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49046__$1,inst_49044);
} else {
if((state_val_49047 === (12))){
var inst_49021 = (state_49046[(10)]);
var state_49046__$1 = state_49046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49046__$1,(14),inst_49021);
} else {
if((state_val_49047 === (2))){
var state_49046__$1 = state_49046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49046__$1,(4),results);
} else {
if((state_val_49047 === (19))){
var state_49046__$1 = state_49046;
var statearr_49059_49126 = state_49046__$1;
(statearr_49059_49126[(2)] = null);

(statearr_49059_49126[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49047 === (11))){
var inst_49021 = (state_49046[(2)]);
var state_49046__$1 = (function (){var statearr_49060 = state_49046;
(statearr_49060[(10)] = inst_49021);

return statearr_49060;
})();
var statearr_49061_49127 = state_49046__$1;
(statearr_49061_49127[(2)] = null);

(statearr_49061_49127[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49047 === (9))){
var state_49046__$1 = state_49046;
var statearr_49062_49128 = state_49046__$1;
(statearr_49062_49128[(2)] = null);

(statearr_49062_49128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49047 === (5))){
var state_49046__$1 = state_49046;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49063_49129 = state_49046__$1;
(statearr_49063_49129[(1)] = (8));

} else {
var statearr_49064_49130 = state_49046__$1;
(statearr_49064_49130[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49047 === (14))){
var inst_49024 = (state_49046[(8)]);
var inst_49026 = (state_49046[(11)]);
var inst_49024__$1 = (state_49046[(2)]);
var inst_49025 = (inst_49024__$1 == null);
var inst_49026__$1 = cljs.core.not.call(null,inst_49025);
var state_49046__$1 = (function (){var statearr_49065 = state_49046;
(statearr_49065[(8)] = inst_49024__$1);

(statearr_49065[(11)] = inst_49026__$1);

return statearr_49065;
})();
if(inst_49026__$1){
var statearr_49066_49131 = state_49046__$1;
(statearr_49066_49131[(1)] = (15));

} else {
var statearr_49067_49132 = state_49046__$1;
(statearr_49067_49132[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49047 === (16))){
var inst_49026 = (state_49046[(11)]);
var state_49046__$1 = state_49046;
var statearr_49068_49133 = state_49046__$1;
(statearr_49068_49133[(2)] = inst_49026);

(statearr_49068_49133[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49047 === (10))){
var inst_49018 = (state_49046[(2)]);
var state_49046__$1 = state_49046;
var statearr_49069_49134 = state_49046__$1;
(statearr_49069_49134[(2)] = inst_49018);

(statearr_49069_49134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49047 === (18))){
var inst_49029 = (state_49046[(2)]);
var state_49046__$1 = state_49046;
var statearr_49070_49135 = state_49046__$1;
(statearr_49070_49135[(2)] = inst_49029);

(statearr_49070_49135[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49047 === (8))){
var inst_49015 = cljs.core.async.close_BANG_.call(null,to);
var state_49046__$1 = state_49046;
var statearr_49071_49136 = state_49046__$1;
(statearr_49071_49136[(2)] = inst_49015);

(statearr_49071_49136[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0 = (function (){
var statearr_49072 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49072[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__);

(statearr_49072[(1)] = (1));

return statearr_49072;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1 = (function (state_49046){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_49046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e49073){var ex__2335__auto__ = e49073;
var statearr_49074_49137 = state_49046;
(statearr_49074_49137[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_49046[(4)]))){
var statearr_49075_49138 = state_49046;
(statearr_49075_49138[(1)] = cljs.core.first.call(null,(state_49046[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49139 = state_49046;
state_49046 = G__49139;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__ = function(state_49046){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1.call(this,state_49046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_49076 = f__8278__auto__.call(null);
(statearr_49076[(6)] = c__8277__auto__);

return statearr_49076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
}));

return c__8277__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__49141 = arguments.length;
switch (G__49141) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__49144 = arguments.length;
switch (G__49144) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__49147 = arguments.length;
switch (G__49147) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__8277__auto___49197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_49173){
var state_val_49174 = (state_49173[(1)]);
if((state_val_49174 === (7))){
var inst_49169 = (state_49173[(2)]);
var state_49173__$1 = state_49173;
var statearr_49175_49198 = state_49173__$1;
(statearr_49175_49198[(2)] = inst_49169);

(statearr_49175_49198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (1))){
var state_49173__$1 = state_49173;
var statearr_49176_49199 = state_49173__$1;
(statearr_49176_49199[(2)] = null);

(statearr_49176_49199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (4))){
var inst_49150 = (state_49173[(7)]);
var inst_49150__$1 = (state_49173[(2)]);
var inst_49151 = (inst_49150__$1 == null);
var state_49173__$1 = (function (){var statearr_49177 = state_49173;
(statearr_49177[(7)] = inst_49150__$1);

return statearr_49177;
})();
if(cljs.core.truth_(inst_49151)){
var statearr_49178_49200 = state_49173__$1;
(statearr_49178_49200[(1)] = (5));

} else {
var statearr_49179_49201 = state_49173__$1;
(statearr_49179_49201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (13))){
var state_49173__$1 = state_49173;
var statearr_49180_49202 = state_49173__$1;
(statearr_49180_49202[(2)] = null);

(statearr_49180_49202[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (6))){
var inst_49150 = (state_49173[(7)]);
var inst_49156 = p.call(null,inst_49150);
var state_49173__$1 = state_49173;
if(cljs.core.truth_(inst_49156)){
var statearr_49181_49203 = state_49173__$1;
(statearr_49181_49203[(1)] = (9));

} else {
var statearr_49182_49204 = state_49173__$1;
(statearr_49182_49204[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (3))){
var inst_49171 = (state_49173[(2)]);
var state_49173__$1 = state_49173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49173__$1,inst_49171);
} else {
if((state_val_49174 === (12))){
var state_49173__$1 = state_49173;
var statearr_49183_49205 = state_49173__$1;
(statearr_49183_49205[(2)] = null);

(statearr_49183_49205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (2))){
var state_49173__$1 = state_49173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49173__$1,(4),ch);
} else {
if((state_val_49174 === (11))){
var inst_49150 = (state_49173[(7)]);
var inst_49160 = (state_49173[(2)]);
var state_49173__$1 = state_49173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49173__$1,(8),inst_49160,inst_49150);
} else {
if((state_val_49174 === (9))){
var state_49173__$1 = state_49173;
var statearr_49184_49206 = state_49173__$1;
(statearr_49184_49206[(2)] = tc);

(statearr_49184_49206[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (5))){
var inst_49153 = cljs.core.async.close_BANG_.call(null,tc);
var inst_49154 = cljs.core.async.close_BANG_.call(null,fc);
var state_49173__$1 = (function (){var statearr_49185 = state_49173;
(statearr_49185[(8)] = inst_49153);

return statearr_49185;
})();
var statearr_49186_49207 = state_49173__$1;
(statearr_49186_49207[(2)] = inst_49154);

(statearr_49186_49207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (14))){
var inst_49167 = (state_49173[(2)]);
var state_49173__$1 = state_49173;
var statearr_49187_49208 = state_49173__$1;
(statearr_49187_49208[(2)] = inst_49167);

(statearr_49187_49208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (10))){
var state_49173__$1 = state_49173;
var statearr_49188_49209 = state_49173__$1;
(statearr_49188_49209[(2)] = fc);

(statearr_49188_49209[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (8))){
var inst_49162 = (state_49173[(2)]);
var state_49173__$1 = state_49173;
if(cljs.core.truth_(inst_49162)){
var statearr_49189_49210 = state_49173__$1;
(statearr_49189_49210[(1)] = (12));

} else {
var statearr_49190_49211 = state_49173__$1;
(statearr_49190_49211[(1)] = (13));

}

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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2332__auto__ = null;
var cljs$core$async$state_machine__2332__auto____0 = (function (){
var statearr_49191 = [null,null,null,null,null,null,null,null,null];
(statearr_49191[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_49191[(1)] = (1));

return statearr_49191;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_49173){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_49173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e49192){var ex__2335__auto__ = e49192;
var statearr_49193_49212 = state_49173;
(statearr_49193_49212[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_49173[(4)]))){
var statearr_49194_49213 = state_49173;
(statearr_49194_49213[(1)] = cljs.core.first.call(null,(state_49173[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49214 = state_49173;
state_49173 = G__49214;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_49173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_49173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_49195 = f__8278__auto__.call(null);
(statearr_49195[(6)] = c__8277__auto___49197);

return statearr_49195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__8277__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_49236){
var state_val_49237 = (state_49236[(1)]);
if((state_val_49237 === (7))){
var inst_49232 = (state_49236[(2)]);
var state_49236__$1 = state_49236;
var statearr_49238_49257 = state_49236__$1;
(statearr_49238_49257[(2)] = inst_49232);

(statearr_49238_49257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (1))){
var inst_49215 = init;
var inst_49216 = inst_49215;
var state_49236__$1 = (function (){var statearr_49239 = state_49236;
(statearr_49239[(7)] = inst_49216);

return statearr_49239;
})();
var statearr_49240_49258 = state_49236__$1;
(statearr_49240_49258[(2)] = null);

(statearr_49240_49258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (4))){
var inst_49219 = (state_49236[(8)]);
var inst_49219__$1 = (state_49236[(2)]);
var inst_49220 = (inst_49219__$1 == null);
var state_49236__$1 = (function (){var statearr_49241 = state_49236;
(statearr_49241[(8)] = inst_49219__$1);

return statearr_49241;
})();
if(cljs.core.truth_(inst_49220)){
var statearr_49242_49259 = state_49236__$1;
(statearr_49242_49259[(1)] = (5));

} else {
var statearr_49243_49260 = state_49236__$1;
(statearr_49243_49260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (6))){
var inst_49216 = (state_49236[(7)]);
var inst_49219 = (state_49236[(8)]);
var inst_49223 = (state_49236[(9)]);
var inst_49223__$1 = f.call(null,inst_49216,inst_49219);
var inst_49224 = cljs.core.reduced_QMARK_.call(null,inst_49223__$1);
var state_49236__$1 = (function (){var statearr_49244 = state_49236;
(statearr_49244[(9)] = inst_49223__$1);

return statearr_49244;
})();
if(inst_49224){
var statearr_49245_49261 = state_49236__$1;
(statearr_49245_49261[(1)] = (8));

} else {
var statearr_49246_49262 = state_49236__$1;
(statearr_49246_49262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (3))){
var inst_49234 = (state_49236[(2)]);
var state_49236__$1 = state_49236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49236__$1,inst_49234);
} else {
if((state_val_49237 === (2))){
var state_49236__$1 = state_49236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49236__$1,(4),ch);
} else {
if((state_val_49237 === (9))){
var inst_49223 = (state_49236[(9)]);
var inst_49216 = inst_49223;
var state_49236__$1 = (function (){var statearr_49247 = state_49236;
(statearr_49247[(7)] = inst_49216);

return statearr_49247;
})();
var statearr_49248_49263 = state_49236__$1;
(statearr_49248_49263[(2)] = null);

(statearr_49248_49263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (5))){
var inst_49216 = (state_49236[(7)]);
var state_49236__$1 = state_49236;
var statearr_49249_49264 = state_49236__$1;
(statearr_49249_49264[(2)] = inst_49216);

(statearr_49249_49264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (10))){
var inst_49230 = (state_49236[(2)]);
var state_49236__$1 = state_49236;
var statearr_49250_49265 = state_49236__$1;
(statearr_49250_49265[(2)] = inst_49230);

(statearr_49250_49265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (8))){
var inst_49223 = (state_49236[(9)]);
var inst_49226 = cljs.core.deref.call(null,inst_49223);
var state_49236__$1 = state_49236;
var statearr_49251_49266 = state_49236__$1;
(statearr_49251_49266[(2)] = inst_49226);

(statearr_49251_49266[(1)] = (10));


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
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__2332__auto__ = null;
var cljs$core$async$reduce_$_state_machine__2332__auto____0 = (function (){
var statearr_49252 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49252[(0)] = cljs$core$async$reduce_$_state_machine__2332__auto__);

(statearr_49252[(1)] = (1));

return statearr_49252;
});
var cljs$core$async$reduce_$_state_machine__2332__auto____1 = (function (state_49236){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_49236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e49253){var ex__2335__auto__ = e49253;
var statearr_49254_49267 = state_49236;
(statearr_49254_49267[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_49236[(4)]))){
var statearr_49255_49268 = state_49236;
(statearr_49255_49268[(1)] = cljs.core.first.call(null,(state_49236[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49269 = state_49236;
state_49236 = G__49269;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__2332__auto__ = function(state_49236){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__2332__auto____1.call(this,state_49236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__2332__auto____0;
cljs$core$async$reduce_$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__2332__auto____1;
return cljs$core$async$reduce_$_state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_49256 = f__8278__auto__.call(null);
(statearr_49256[(6)] = c__8277__auto__);

return statearr_49256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
}));

return c__8277__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__8277__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_49275){
var state_val_49276 = (state_49275[(1)]);
if((state_val_49276 === (1))){
var inst_49270 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_49275__$1 = state_49275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49275__$1,(2),inst_49270);
} else {
if((state_val_49276 === (2))){
var inst_49272 = (state_49275[(2)]);
var inst_49273 = f__$1.call(null,inst_49272);
var state_49275__$1 = state_49275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49275__$1,inst_49273);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__2332__auto__ = null;
var cljs$core$async$transduce_$_state_machine__2332__auto____0 = (function (){
var statearr_49277 = [null,null,null,null,null,null,null];
(statearr_49277[(0)] = cljs$core$async$transduce_$_state_machine__2332__auto__);

(statearr_49277[(1)] = (1));

return statearr_49277;
});
var cljs$core$async$transduce_$_state_machine__2332__auto____1 = (function (state_49275){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_49275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e49278){var ex__2335__auto__ = e49278;
var statearr_49279_49282 = state_49275;
(statearr_49279_49282[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_49275[(4)]))){
var statearr_49280_49283 = state_49275;
(statearr_49280_49283[(1)] = cljs.core.first.call(null,(state_49275[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49284 = state_49275;
state_49275 = G__49284;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__2332__auto__ = function(state_49275){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__2332__auto____1.call(this,state_49275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__2332__auto____0;
cljs$core$async$transduce_$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__2332__auto____1;
return cljs$core$async$transduce_$_state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_49281 = f__8278__auto__.call(null);
(statearr_49281[(6)] = c__8277__auto__);

return statearr_49281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
}));

return c__8277__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__49286 = arguments.length;
switch (G__49286) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__8277__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_49311){
var state_val_49312 = (state_49311[(1)]);
if((state_val_49312 === (7))){
var inst_49293 = (state_49311[(2)]);
var state_49311__$1 = state_49311;
var statearr_49313_49335 = state_49311__$1;
(statearr_49313_49335[(2)] = inst_49293);

(statearr_49313_49335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49312 === (1))){
var inst_49287 = cljs.core.seq.call(null,coll);
var inst_49288 = inst_49287;
var state_49311__$1 = (function (){var statearr_49314 = state_49311;
(statearr_49314[(7)] = inst_49288);

return statearr_49314;
})();
var statearr_49315_49336 = state_49311__$1;
(statearr_49315_49336[(2)] = null);

(statearr_49315_49336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49312 === (4))){
var inst_49288 = (state_49311[(7)]);
var inst_49291 = cljs.core.first.call(null,inst_49288);
var state_49311__$1 = state_49311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49311__$1,(7),ch,inst_49291);
} else {
if((state_val_49312 === (13))){
var inst_49305 = (state_49311[(2)]);
var state_49311__$1 = state_49311;
var statearr_49316_49337 = state_49311__$1;
(statearr_49316_49337[(2)] = inst_49305);

(statearr_49316_49337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49312 === (6))){
var inst_49296 = (state_49311[(2)]);
var state_49311__$1 = state_49311;
if(cljs.core.truth_(inst_49296)){
var statearr_49317_49338 = state_49311__$1;
(statearr_49317_49338[(1)] = (8));

} else {
var statearr_49318_49339 = state_49311__$1;
(statearr_49318_49339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49312 === (3))){
var inst_49309 = (state_49311[(2)]);
var state_49311__$1 = state_49311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49311__$1,inst_49309);
} else {
if((state_val_49312 === (12))){
var state_49311__$1 = state_49311;
var statearr_49319_49340 = state_49311__$1;
(statearr_49319_49340[(2)] = null);

(statearr_49319_49340[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49312 === (2))){
var inst_49288 = (state_49311[(7)]);
var state_49311__$1 = state_49311;
if(cljs.core.truth_(inst_49288)){
var statearr_49320_49341 = state_49311__$1;
(statearr_49320_49341[(1)] = (4));

} else {
var statearr_49321_49342 = state_49311__$1;
(statearr_49321_49342[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49312 === (11))){
var inst_49302 = cljs.core.async.close_BANG_.call(null,ch);
var state_49311__$1 = state_49311;
var statearr_49322_49343 = state_49311__$1;
(statearr_49322_49343[(2)] = inst_49302);

(statearr_49322_49343[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49312 === (9))){
var state_49311__$1 = state_49311;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49323_49344 = state_49311__$1;
(statearr_49323_49344[(1)] = (11));

} else {
var statearr_49324_49345 = state_49311__$1;
(statearr_49324_49345[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49312 === (5))){
var inst_49288 = (state_49311[(7)]);
var state_49311__$1 = state_49311;
var statearr_49325_49346 = state_49311__$1;
(statearr_49325_49346[(2)] = inst_49288);

(statearr_49325_49346[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49312 === (10))){
var inst_49307 = (state_49311[(2)]);
var state_49311__$1 = state_49311;
var statearr_49326_49347 = state_49311__$1;
(statearr_49326_49347[(2)] = inst_49307);

(statearr_49326_49347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49312 === (8))){
var inst_49288 = (state_49311[(7)]);
var inst_49298 = cljs.core.next.call(null,inst_49288);
var inst_49288__$1 = inst_49298;
var state_49311__$1 = (function (){var statearr_49327 = state_49311;
(statearr_49327[(7)] = inst_49288__$1);

return statearr_49327;
})();
var statearr_49328_49348 = state_49311__$1;
(statearr_49328_49348[(2)] = null);

(statearr_49328_49348[(1)] = (2));


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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2332__auto__ = null;
var cljs$core$async$state_machine__2332__auto____0 = (function (){
var statearr_49329 = [null,null,null,null,null,null,null,null];
(statearr_49329[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_49329[(1)] = (1));

return statearr_49329;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_49311){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_49311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e49330){var ex__2335__auto__ = e49330;
var statearr_49331_49349 = state_49311;
(statearr_49331_49349[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_49311[(4)]))){
var statearr_49332_49350 = state_49311;
(statearr_49332_49350[(1)] = cljs.core.first.call(null,(state_49311[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49351 = state_49311;
state_49311 = G__49351;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_49311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_49311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_49333 = f__8278__auto__.call(null);
(statearr_49333[(6)] = c__8277__auto__);

return statearr_49333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
}));

return c__8277__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__49353 = arguments.length;
switch (G__49353) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_49355 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_);
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_49355.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_49356 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_49356.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_49357 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,ch);
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_49357.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_49358 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m);
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_49358.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49359 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49359 = (function (ch,cs,meta49360){
this.ch = ch;
this.cs = cs;
this.meta49360 = meta49360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49361,meta49360__$1){
var self__ = this;
var _49361__$1 = this;
return (new cljs.core.async.t_cljs$core$async49359(self__.ch,self__.cs,meta49360__$1));
}));

(cljs.core.async.t_cljs$core$async49359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49361){
var self__ = this;
var _49361__$1 = this;
return self__.meta49360;
}));

(cljs.core.async.t_cljs$core$async49359.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49359.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async49359.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49359.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async49359.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async49359.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async49359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta49360","meta49360",-1753482279,null)], null);
}));

(cljs.core.async.t_cljs$core$async49359.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49359");

(cljs.core.async.t_cljs$core$async49359.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async49359");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49359.
 */
cljs.core.async.__GT_t_cljs$core$async49359 = (function cljs$core$async$mult_$___GT_t_cljs$core$async49359(ch__$1,cs__$1,meta49360){
return (new cljs.core.async.t_cljs$core$async49359(ch__$1,cs__$1,meta49360));
});

}

return (new cljs.core.async.t_cljs$core$async49359(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__8277__auto___49578 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_49494){
var state_val_49495 = (state_49494[(1)]);
if((state_val_49495 === (7))){
var inst_49490 = (state_49494[(2)]);
var state_49494__$1 = state_49494;
var statearr_49496_49579 = state_49494__$1;
(statearr_49496_49579[(2)] = inst_49490);

(statearr_49496_49579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (20))){
var inst_49395 = (state_49494[(7)]);
var inst_49407 = cljs.core.first.call(null,inst_49395);
var inst_49408 = cljs.core.nth.call(null,inst_49407,(0),null);
var inst_49409 = cljs.core.nth.call(null,inst_49407,(1),null);
var state_49494__$1 = (function (){var statearr_49497 = state_49494;
(statearr_49497[(8)] = inst_49408);

return statearr_49497;
})();
if(cljs.core.truth_(inst_49409)){
var statearr_49498_49580 = state_49494__$1;
(statearr_49498_49580[(1)] = (22));

} else {
var statearr_49499_49581 = state_49494__$1;
(statearr_49499_49581[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (27))){
var inst_49437 = (state_49494[(9)]);
var inst_49439 = (state_49494[(10)]);
var inst_49444 = (state_49494[(11)]);
var inst_49364 = (state_49494[(12)]);
var inst_49444__$1 = cljs.core._nth.call(null,inst_49437,inst_49439);
var inst_49445 = cljs.core.async.put_BANG_.call(null,inst_49444__$1,inst_49364,done);
var state_49494__$1 = (function (){var statearr_49500 = state_49494;
(statearr_49500[(11)] = inst_49444__$1);

return statearr_49500;
})();
if(cljs.core.truth_(inst_49445)){
var statearr_49501_49582 = state_49494__$1;
(statearr_49501_49582[(1)] = (30));

} else {
var statearr_49502_49583 = state_49494__$1;
(statearr_49502_49583[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (1))){
var state_49494__$1 = state_49494;
var statearr_49503_49584 = state_49494__$1;
(statearr_49503_49584[(2)] = null);

(statearr_49503_49584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (24))){
var inst_49395 = (state_49494[(7)]);
var inst_49414 = (state_49494[(2)]);
var inst_49415 = cljs.core.next.call(null,inst_49395);
var inst_49373 = inst_49415;
var inst_49374 = null;
var inst_49375 = (0);
var inst_49376 = (0);
var state_49494__$1 = (function (){var statearr_49504 = state_49494;
(statearr_49504[(13)] = inst_49414);

(statearr_49504[(14)] = inst_49373);

(statearr_49504[(15)] = inst_49374);

(statearr_49504[(16)] = inst_49375);

(statearr_49504[(17)] = inst_49376);

return statearr_49504;
})();
var statearr_49505_49585 = state_49494__$1;
(statearr_49505_49585[(2)] = null);

(statearr_49505_49585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (39))){
var state_49494__$1 = state_49494;
var statearr_49509_49586 = state_49494__$1;
(statearr_49509_49586[(2)] = null);

(statearr_49509_49586[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (4))){
var inst_49364 = (state_49494[(12)]);
var inst_49364__$1 = (state_49494[(2)]);
var inst_49365 = (inst_49364__$1 == null);
var state_49494__$1 = (function (){var statearr_49510 = state_49494;
(statearr_49510[(12)] = inst_49364__$1);

return statearr_49510;
})();
if(cljs.core.truth_(inst_49365)){
var statearr_49511_49587 = state_49494__$1;
(statearr_49511_49587[(1)] = (5));

} else {
var statearr_49512_49588 = state_49494__$1;
(statearr_49512_49588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (15))){
var inst_49376 = (state_49494[(17)]);
var inst_49373 = (state_49494[(14)]);
var inst_49374 = (state_49494[(15)]);
var inst_49375 = (state_49494[(16)]);
var inst_49391 = (state_49494[(2)]);
var inst_49392 = (inst_49376 + (1));
var tmp49506 = inst_49373;
var tmp49507 = inst_49375;
var tmp49508 = inst_49374;
var inst_49373__$1 = tmp49506;
var inst_49374__$1 = tmp49508;
var inst_49375__$1 = tmp49507;
var inst_49376__$1 = inst_49392;
var state_49494__$1 = (function (){var statearr_49513 = state_49494;
(statearr_49513[(18)] = inst_49391);

(statearr_49513[(14)] = inst_49373__$1);

(statearr_49513[(15)] = inst_49374__$1);

(statearr_49513[(16)] = inst_49375__$1);

(statearr_49513[(17)] = inst_49376__$1);

return statearr_49513;
})();
var statearr_49514_49589 = state_49494__$1;
(statearr_49514_49589[(2)] = null);

(statearr_49514_49589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (21))){
var inst_49418 = (state_49494[(2)]);
var state_49494__$1 = state_49494;
var statearr_49518_49590 = state_49494__$1;
(statearr_49518_49590[(2)] = inst_49418);

(statearr_49518_49590[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (31))){
var inst_49444 = (state_49494[(11)]);
var inst_49448 = cljs.core.async.untap_STAR_.call(null,m,inst_49444);
var state_49494__$1 = state_49494;
var statearr_49519_49591 = state_49494__$1;
(statearr_49519_49591[(2)] = inst_49448);

(statearr_49519_49591[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (32))){
var inst_49439 = (state_49494[(10)]);
var inst_49436 = (state_49494[(19)]);
var inst_49437 = (state_49494[(9)]);
var inst_49438 = (state_49494[(20)]);
var inst_49450 = (state_49494[(2)]);
var inst_49451 = (inst_49439 + (1));
var tmp49515 = inst_49436;
var tmp49516 = inst_49438;
var tmp49517 = inst_49437;
var inst_49436__$1 = tmp49515;
var inst_49437__$1 = tmp49517;
var inst_49438__$1 = tmp49516;
var inst_49439__$1 = inst_49451;
var state_49494__$1 = (function (){var statearr_49520 = state_49494;
(statearr_49520[(21)] = inst_49450);

(statearr_49520[(19)] = inst_49436__$1);

(statearr_49520[(9)] = inst_49437__$1);

(statearr_49520[(20)] = inst_49438__$1);

(statearr_49520[(10)] = inst_49439__$1);

return statearr_49520;
})();
var statearr_49521_49592 = state_49494__$1;
(statearr_49521_49592[(2)] = null);

(statearr_49521_49592[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (40))){
var inst_49463 = (state_49494[(22)]);
var inst_49467 = cljs.core.async.untap_STAR_.call(null,m,inst_49463);
var state_49494__$1 = state_49494;
var statearr_49522_49593 = state_49494__$1;
(statearr_49522_49593[(2)] = inst_49467);

(statearr_49522_49593[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (33))){
var inst_49454 = (state_49494[(23)]);
var inst_49456 = cljs.core.chunked_seq_QMARK_.call(null,inst_49454);
var state_49494__$1 = state_49494;
if(inst_49456){
var statearr_49523_49594 = state_49494__$1;
(statearr_49523_49594[(1)] = (36));

} else {
var statearr_49524_49595 = state_49494__$1;
(statearr_49524_49595[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (13))){
var inst_49385 = (state_49494[(24)]);
var inst_49388 = cljs.core.async.close_BANG_.call(null,inst_49385);
var state_49494__$1 = state_49494;
var statearr_49525_49596 = state_49494__$1;
(statearr_49525_49596[(2)] = inst_49388);

(statearr_49525_49596[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (22))){
var inst_49408 = (state_49494[(8)]);
var inst_49411 = cljs.core.async.close_BANG_.call(null,inst_49408);
var state_49494__$1 = state_49494;
var statearr_49526_49597 = state_49494__$1;
(statearr_49526_49597[(2)] = inst_49411);

(statearr_49526_49597[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (36))){
var inst_49454 = (state_49494[(23)]);
var inst_49458 = cljs.core.chunk_first.call(null,inst_49454);
var inst_49459 = cljs.core.chunk_rest.call(null,inst_49454);
var inst_49460 = cljs.core.count.call(null,inst_49458);
var inst_49436 = inst_49459;
var inst_49437 = inst_49458;
var inst_49438 = inst_49460;
var inst_49439 = (0);
var state_49494__$1 = (function (){var statearr_49527 = state_49494;
(statearr_49527[(19)] = inst_49436);

(statearr_49527[(9)] = inst_49437);

(statearr_49527[(20)] = inst_49438);

(statearr_49527[(10)] = inst_49439);

return statearr_49527;
})();
var statearr_49528_49598 = state_49494__$1;
(statearr_49528_49598[(2)] = null);

(statearr_49528_49598[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (41))){
var inst_49454 = (state_49494[(23)]);
var inst_49469 = (state_49494[(2)]);
var inst_49470 = cljs.core.next.call(null,inst_49454);
var inst_49436 = inst_49470;
var inst_49437 = null;
var inst_49438 = (0);
var inst_49439 = (0);
var state_49494__$1 = (function (){var statearr_49529 = state_49494;
(statearr_49529[(25)] = inst_49469);

(statearr_49529[(19)] = inst_49436);

(statearr_49529[(9)] = inst_49437);

(statearr_49529[(20)] = inst_49438);

(statearr_49529[(10)] = inst_49439);

return statearr_49529;
})();
var statearr_49530_49599 = state_49494__$1;
(statearr_49530_49599[(2)] = null);

(statearr_49530_49599[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (43))){
var state_49494__$1 = state_49494;
var statearr_49531_49600 = state_49494__$1;
(statearr_49531_49600[(2)] = null);

(statearr_49531_49600[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (29))){
var inst_49478 = (state_49494[(2)]);
var state_49494__$1 = state_49494;
var statearr_49532_49601 = state_49494__$1;
(statearr_49532_49601[(2)] = inst_49478);

(statearr_49532_49601[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (44))){
var inst_49487 = (state_49494[(2)]);
var state_49494__$1 = (function (){var statearr_49533 = state_49494;
(statearr_49533[(26)] = inst_49487);

return statearr_49533;
})();
var statearr_49534_49602 = state_49494__$1;
(statearr_49534_49602[(2)] = null);

(statearr_49534_49602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (6))){
var inst_49428 = (state_49494[(27)]);
var inst_49427 = cljs.core.deref.call(null,cs);
var inst_49428__$1 = cljs.core.keys.call(null,inst_49427);
var inst_49429 = cljs.core.count.call(null,inst_49428__$1);
var inst_49430 = cljs.core.reset_BANG_.call(null,dctr,inst_49429);
var inst_49435 = cljs.core.seq.call(null,inst_49428__$1);
var inst_49436 = inst_49435;
var inst_49437 = null;
var inst_49438 = (0);
var inst_49439 = (0);
var state_49494__$1 = (function (){var statearr_49535 = state_49494;
(statearr_49535[(27)] = inst_49428__$1);

(statearr_49535[(28)] = inst_49430);

(statearr_49535[(19)] = inst_49436);

(statearr_49535[(9)] = inst_49437);

(statearr_49535[(20)] = inst_49438);

(statearr_49535[(10)] = inst_49439);

return statearr_49535;
})();
var statearr_49536_49603 = state_49494__$1;
(statearr_49536_49603[(2)] = null);

(statearr_49536_49603[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (28))){
var inst_49436 = (state_49494[(19)]);
var inst_49454 = (state_49494[(23)]);
var inst_49454__$1 = cljs.core.seq.call(null,inst_49436);
var state_49494__$1 = (function (){var statearr_49537 = state_49494;
(statearr_49537[(23)] = inst_49454__$1);

return statearr_49537;
})();
if(inst_49454__$1){
var statearr_49538_49604 = state_49494__$1;
(statearr_49538_49604[(1)] = (33));

} else {
var statearr_49539_49605 = state_49494__$1;
(statearr_49539_49605[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (25))){
var inst_49439 = (state_49494[(10)]);
var inst_49438 = (state_49494[(20)]);
var inst_49441 = (inst_49439 < inst_49438);
var inst_49442 = inst_49441;
var state_49494__$1 = state_49494;
if(cljs.core.truth_(inst_49442)){
var statearr_49540_49606 = state_49494__$1;
(statearr_49540_49606[(1)] = (27));

} else {
var statearr_49541_49607 = state_49494__$1;
(statearr_49541_49607[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (34))){
var state_49494__$1 = state_49494;
var statearr_49542_49608 = state_49494__$1;
(statearr_49542_49608[(2)] = null);

(statearr_49542_49608[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (17))){
var state_49494__$1 = state_49494;
var statearr_49543_49609 = state_49494__$1;
(statearr_49543_49609[(2)] = null);

(statearr_49543_49609[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (3))){
var inst_49492 = (state_49494[(2)]);
var state_49494__$1 = state_49494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49494__$1,inst_49492);
} else {
if((state_val_49495 === (12))){
var inst_49423 = (state_49494[(2)]);
var state_49494__$1 = state_49494;
var statearr_49544_49610 = state_49494__$1;
(statearr_49544_49610[(2)] = inst_49423);

(statearr_49544_49610[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (2))){
var state_49494__$1 = state_49494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49494__$1,(4),ch);
} else {
if((state_val_49495 === (23))){
var state_49494__$1 = state_49494;
var statearr_49545_49611 = state_49494__$1;
(statearr_49545_49611[(2)] = null);

(statearr_49545_49611[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (35))){
var inst_49476 = (state_49494[(2)]);
var state_49494__$1 = state_49494;
var statearr_49546_49612 = state_49494__$1;
(statearr_49546_49612[(2)] = inst_49476);

(statearr_49546_49612[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (19))){
var inst_49395 = (state_49494[(7)]);
var inst_49399 = cljs.core.chunk_first.call(null,inst_49395);
var inst_49400 = cljs.core.chunk_rest.call(null,inst_49395);
var inst_49401 = cljs.core.count.call(null,inst_49399);
var inst_49373 = inst_49400;
var inst_49374 = inst_49399;
var inst_49375 = inst_49401;
var inst_49376 = (0);
var state_49494__$1 = (function (){var statearr_49547 = state_49494;
(statearr_49547[(14)] = inst_49373);

(statearr_49547[(15)] = inst_49374);

(statearr_49547[(16)] = inst_49375);

(statearr_49547[(17)] = inst_49376);

return statearr_49547;
})();
var statearr_49548_49613 = state_49494__$1;
(statearr_49548_49613[(2)] = null);

(statearr_49548_49613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (11))){
var inst_49373 = (state_49494[(14)]);
var inst_49395 = (state_49494[(7)]);
var inst_49395__$1 = cljs.core.seq.call(null,inst_49373);
var state_49494__$1 = (function (){var statearr_49549 = state_49494;
(statearr_49549[(7)] = inst_49395__$1);

return statearr_49549;
})();
if(inst_49395__$1){
var statearr_49550_49614 = state_49494__$1;
(statearr_49550_49614[(1)] = (16));

} else {
var statearr_49551_49615 = state_49494__$1;
(statearr_49551_49615[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (9))){
var inst_49425 = (state_49494[(2)]);
var state_49494__$1 = state_49494;
var statearr_49552_49616 = state_49494__$1;
(statearr_49552_49616[(2)] = inst_49425);

(statearr_49552_49616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (5))){
var inst_49371 = cljs.core.deref.call(null,cs);
var inst_49372 = cljs.core.seq.call(null,inst_49371);
var inst_49373 = inst_49372;
var inst_49374 = null;
var inst_49375 = (0);
var inst_49376 = (0);
var state_49494__$1 = (function (){var statearr_49553 = state_49494;
(statearr_49553[(14)] = inst_49373);

(statearr_49553[(15)] = inst_49374);

(statearr_49553[(16)] = inst_49375);

(statearr_49553[(17)] = inst_49376);

return statearr_49553;
})();
var statearr_49554_49617 = state_49494__$1;
(statearr_49554_49617[(2)] = null);

(statearr_49554_49617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (14))){
var state_49494__$1 = state_49494;
var statearr_49555_49618 = state_49494__$1;
(statearr_49555_49618[(2)] = null);

(statearr_49555_49618[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (45))){
var inst_49484 = (state_49494[(2)]);
var state_49494__$1 = state_49494;
var statearr_49556_49619 = state_49494__$1;
(statearr_49556_49619[(2)] = inst_49484);

(statearr_49556_49619[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (26))){
var inst_49428 = (state_49494[(27)]);
var inst_49480 = (state_49494[(2)]);
var inst_49481 = cljs.core.seq.call(null,inst_49428);
var state_49494__$1 = (function (){var statearr_49557 = state_49494;
(statearr_49557[(29)] = inst_49480);

return statearr_49557;
})();
if(inst_49481){
var statearr_49558_49620 = state_49494__$1;
(statearr_49558_49620[(1)] = (42));

} else {
var statearr_49559_49621 = state_49494__$1;
(statearr_49559_49621[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (16))){
var inst_49395 = (state_49494[(7)]);
var inst_49397 = cljs.core.chunked_seq_QMARK_.call(null,inst_49395);
var state_49494__$1 = state_49494;
if(inst_49397){
var statearr_49560_49622 = state_49494__$1;
(statearr_49560_49622[(1)] = (19));

} else {
var statearr_49561_49623 = state_49494__$1;
(statearr_49561_49623[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (38))){
var inst_49473 = (state_49494[(2)]);
var state_49494__$1 = state_49494;
var statearr_49562_49624 = state_49494__$1;
(statearr_49562_49624[(2)] = inst_49473);

(statearr_49562_49624[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (30))){
var state_49494__$1 = state_49494;
var statearr_49563_49625 = state_49494__$1;
(statearr_49563_49625[(2)] = null);

(statearr_49563_49625[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (10))){
var inst_49374 = (state_49494[(15)]);
var inst_49376 = (state_49494[(17)]);
var inst_49384 = cljs.core._nth.call(null,inst_49374,inst_49376);
var inst_49385 = cljs.core.nth.call(null,inst_49384,(0),null);
var inst_49386 = cljs.core.nth.call(null,inst_49384,(1),null);
var state_49494__$1 = (function (){var statearr_49564 = state_49494;
(statearr_49564[(24)] = inst_49385);

return statearr_49564;
})();
if(cljs.core.truth_(inst_49386)){
var statearr_49565_49626 = state_49494__$1;
(statearr_49565_49626[(1)] = (13));

} else {
var statearr_49566_49627 = state_49494__$1;
(statearr_49566_49627[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (18))){
var inst_49421 = (state_49494[(2)]);
var state_49494__$1 = state_49494;
var statearr_49567_49628 = state_49494__$1;
(statearr_49567_49628[(2)] = inst_49421);

(statearr_49567_49628[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (42))){
var state_49494__$1 = state_49494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49494__$1,(45),dchan);
} else {
if((state_val_49495 === (37))){
var inst_49454 = (state_49494[(23)]);
var inst_49463 = (state_49494[(22)]);
var inst_49364 = (state_49494[(12)]);
var inst_49463__$1 = cljs.core.first.call(null,inst_49454);
var inst_49464 = cljs.core.async.put_BANG_.call(null,inst_49463__$1,inst_49364,done);
var state_49494__$1 = (function (){var statearr_49568 = state_49494;
(statearr_49568[(22)] = inst_49463__$1);

return statearr_49568;
})();
if(cljs.core.truth_(inst_49464)){
var statearr_49569_49629 = state_49494__$1;
(statearr_49569_49629[(1)] = (39));

} else {
var statearr_49570_49630 = state_49494__$1;
(statearr_49570_49630[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49495 === (8))){
var inst_49376 = (state_49494[(17)]);
var inst_49375 = (state_49494[(16)]);
var inst_49378 = (inst_49376 < inst_49375);
var inst_49379 = inst_49378;
var state_49494__$1 = state_49494;
if(cljs.core.truth_(inst_49379)){
var statearr_49571_49631 = state_49494__$1;
(statearr_49571_49631[(1)] = (10));

} else {
var statearr_49572_49632 = state_49494__$1;
(statearr_49572_49632[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__2332__auto__ = null;
var cljs$core$async$mult_$_state_machine__2332__auto____0 = (function (){
var statearr_49573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49573[(0)] = cljs$core$async$mult_$_state_machine__2332__auto__);

(statearr_49573[(1)] = (1));

return statearr_49573;
});
var cljs$core$async$mult_$_state_machine__2332__auto____1 = (function (state_49494){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_49494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e49574){var ex__2335__auto__ = e49574;
var statearr_49575_49633 = state_49494;
(statearr_49575_49633[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_49494[(4)]))){
var statearr_49576_49634 = state_49494;
(statearr_49576_49634[(1)] = cljs.core.first.call(null,(state_49494[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49635 = state_49494;
state_49494 = G__49635;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__2332__auto__ = function(state_49494){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__2332__auto____1.call(this,state_49494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__2332__auto____0;
cljs$core$async$mult_$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__2332__auto____1;
return cljs$core$async$mult_$_state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_49577 = f__8278__auto__.call(null);
(statearr_49577[(6)] = c__8277__auto___49578);

return statearr_49577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__49637 = arguments.length;
switch (G__49637) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_49639 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,ch);
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_49639.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_49640 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,ch);
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_49640.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_49641 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m);
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_49641.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_49642 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,state_map);
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_49642.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_49643 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,mode);
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_49643.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___49653 = arguments.length;
var i__5727__auto___49654 = (0);
while(true){
if((i__5727__auto___49654 < len__5726__auto___49653)){
args__5732__auto__.push((arguments[i__5727__auto___49654]));

var G__49655 = (i__5727__auto___49654 + (1));
i__5727__auto___49654 = G__49655;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__49648){
var map__49649 = p__49648;
var map__49649__$1 = cljs.core.__destructure_map.call(null,map__49649);
var opts = map__49649__$1;
var statearr_49650_49656 = state;
(statearr_49650_49656[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_49651_49657 = state;
(statearr_49651_49657[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_49652_49658 = state;
(statearr_49652_49658[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq49644){
var G__49645 = cljs.core.first.call(null,seq49644);
var seq49644__$1 = cljs.core.next.call(null,seq49644);
var G__49646 = cljs.core.first.call(null,seq49644__$1);
var seq49644__$2 = cljs.core.next.call(null,seq49644__$1);
var G__49647 = cljs.core.first.call(null,seq49644__$2);
var seq49644__$3 = cljs.core.next.call(null,seq49644__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49645,G__49646,G__49647,seq49644__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49659 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49659 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta49660){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta49660 = meta49660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49661,meta49660__$1){
var self__ = this;
var _49661__$1 = this;
return (new cljs.core.async.t_cljs$core$async49659(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta49660__$1));
}));

(cljs.core.async.t_cljs$core$async49659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49661){
var self__ = this;
var _49661__$1 = this;
return self__.meta49660;
}));

(cljs.core.async.t_cljs$core$async49659.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49659.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async49659.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49659.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async49659.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async49659.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async49659.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async49659.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async49659.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta49660","meta49660",-1960844656,null)], null);
}));

(cljs.core.async.t_cljs$core$async49659.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49659");

(cljs.core.async.t_cljs$core$async49659.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async49659");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49659.
 */
cljs.core.async.__GT_t_cljs$core$async49659 = (function cljs$core$async$mix_$___GT_t_cljs$core$async49659(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49660){
return (new cljs.core.async.t_cljs$core$async49659(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49660));
});

}

return (new cljs.core.async.t_cljs$core$async49659(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8277__auto___49774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_49729){
var state_val_49730 = (state_49729[(1)]);
if((state_val_49730 === (7))){
var inst_49689 = (state_49729[(2)]);
var state_49729__$1 = state_49729;
if(cljs.core.truth_(inst_49689)){
var statearr_49731_49775 = state_49729__$1;
(statearr_49731_49775[(1)] = (8));

} else {
var statearr_49732_49776 = state_49729__$1;
(statearr_49732_49776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49730 === (20))){
var inst_49682 = (state_49729[(7)]);
var state_49729__$1 = state_49729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49729__$1,(23),out,inst_49682);
} else {
if((state_val_49730 === (1))){
var inst_49665 = calc_state.call(null);
var inst_49666 = cljs.core.__destructure_map.call(null,inst_49665);
var inst_49667 = cljs.core.get.call(null,inst_49666,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49668 = cljs.core.get.call(null,inst_49666,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49669 = cljs.core.get.call(null,inst_49666,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_49670 = inst_49665;
var state_49729__$1 = (function (){var statearr_49733 = state_49729;
(statearr_49733[(8)] = inst_49667);

(statearr_49733[(9)] = inst_49668);

(statearr_49733[(10)] = inst_49669);

(statearr_49733[(11)] = inst_49670);

return statearr_49733;
})();
var statearr_49734_49777 = state_49729__$1;
(statearr_49734_49777[(2)] = null);

(statearr_49734_49777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49730 === (24))){
var inst_49673 = (state_49729[(12)]);
var inst_49670 = inst_49673;
var state_49729__$1 = (function (){var statearr_49735 = state_49729;
(statearr_49735[(11)] = inst_49670);

return statearr_49735;
})();
var statearr_49736_49778 = state_49729__$1;
(statearr_49736_49778[(2)] = null);

(statearr_49736_49778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49730 === (4))){
var inst_49682 = (state_49729[(7)]);
var inst_49684 = (state_49729[(13)]);
var inst_49681 = (state_49729[(2)]);
var inst_49682__$1 = cljs.core.nth.call(null,inst_49681,(0),null);
var inst_49683 = cljs.core.nth.call(null,inst_49681,(1),null);
var inst_49684__$1 = (inst_49682__$1 == null);
var state_49729__$1 = (function (){var statearr_49737 = state_49729;
(statearr_49737[(7)] = inst_49682__$1);

(statearr_49737[(14)] = inst_49683);

(statearr_49737[(13)] = inst_49684__$1);

return statearr_49737;
})();
if(cljs.core.truth_(inst_49684__$1)){
var statearr_49738_49779 = state_49729__$1;
(statearr_49738_49779[(1)] = (5));

} else {
var statearr_49739_49780 = state_49729__$1;
(statearr_49739_49780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49730 === (15))){
var inst_49674 = (state_49729[(15)]);
var inst_49703 = (state_49729[(16)]);
var inst_49703__$1 = cljs.core.empty_QMARK_.call(null,inst_49674);
var state_49729__$1 = (function (){var statearr_49740 = state_49729;
(statearr_49740[(16)] = inst_49703__$1);

return statearr_49740;
})();
if(inst_49703__$1){
var statearr_49741_49781 = state_49729__$1;
(statearr_49741_49781[(1)] = (17));

} else {
var statearr_49742_49782 = state_49729__$1;
(statearr_49742_49782[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49730 === (21))){
var inst_49673 = (state_49729[(12)]);
var inst_49670 = inst_49673;
var state_49729__$1 = (function (){var statearr_49743 = state_49729;
(statearr_49743[(11)] = inst_49670);

return statearr_49743;
})();
var statearr_49744_49783 = state_49729__$1;
(statearr_49744_49783[(2)] = null);

(statearr_49744_49783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49730 === (13))){
var inst_49696 = (state_49729[(2)]);
var inst_49697 = calc_state.call(null);
var inst_49670 = inst_49697;
var state_49729__$1 = (function (){var statearr_49745 = state_49729;
(statearr_49745[(17)] = inst_49696);

(statearr_49745[(11)] = inst_49670);

return statearr_49745;
})();
var statearr_49746_49784 = state_49729__$1;
(statearr_49746_49784[(2)] = null);

(statearr_49746_49784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49730 === (22))){
var inst_49723 = (state_49729[(2)]);
var state_49729__$1 = state_49729;
var statearr_49747_49785 = state_49729__$1;
(statearr_49747_49785[(2)] = inst_49723);

(statearr_49747_49785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49730 === (6))){
var inst_49683 = (state_49729[(14)]);
var inst_49687 = cljs.core._EQ_.call(null,inst_49683,change);
var state_49729__$1 = state_49729;
var statearr_49748_49786 = state_49729__$1;
(statearr_49748_49786[(2)] = inst_49687);

(statearr_49748_49786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49730 === (25))){
var state_49729__$1 = state_49729;
var statearr_49749_49787 = state_49729__$1;
(statearr_49749_49787[(2)] = null);

(statearr_49749_49787[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49730 === (17))){
var inst_49675 = (state_49729[(18)]);
var inst_49683 = (state_49729[(14)]);
var inst_49705 = inst_49675.call(null,inst_49683);
var inst_49706 = cljs.core.not.call(null,inst_49705);
var state_49729__$1 = state_49729;
var statearr_49750_49788 = state_49729__$1;
(statearr_49750_49788[(2)] = inst_49706);

(statearr_49750_49788[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49730 === (3))){
var inst_49727 = (state_49729[(2)]);
var state_49729__$1 = state_49729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49729__$1,inst_49727);
} else {
if((state_val_49730 === (12))){
var state_49729__$1 = state_49729;
var statearr_49751_49789 = state_49729__$1;
(statearr_49751_49789[(2)] = null);

(statearr_49751_49789[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49730 === (2))){
var inst_49670 = (state_49729[(11)]);
var inst_49673 = (state_49729[(12)]);
var inst_49673__$1 = cljs.core.__destructure_map.call(null,inst_49670);
var inst_49674 = cljs.core.get.call(null,inst_49673__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49675 = cljs.core.get.call(null,inst_49673__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49676 = cljs.core.get.call(null,inst_49673__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_49729__$1 = (function (){var statearr_49752 = state_49729;
(statearr_49752[(12)] = inst_49673__$1);

(statearr_49752[(15)] = inst_49674);

(statearr_49752[(18)] = inst_49675);

return statearr_49752;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_49729__$1,(4),inst_49676);
} else {
if((state_val_49730 === (23))){
var inst_49714 = (state_49729[(2)]);
var state_49729__$1 = state_49729;
if(cljs.core.truth_(inst_49714)){
var statearr_49753_49790 = state_49729__$1;
(statearr_49753_49790[(1)] = (24));

} else {
var statearr_49754_49791 = state_49729__$1;
(statearr_49754_49791[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49730 === (19))){
var inst_49709 = (state_49729[(2)]);
var state_49729__$1 = state_49729;
var statearr_49755_49792 = state_49729__$1;
(statearr_49755_49792[(2)] = inst_49709);

(statearr_49755_49792[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49730 === (11))){
var inst_49683 = (state_49729[(14)]);
var inst_49693 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_49683);
var state_49729__$1 = state_49729;
var statearr_49756_49793 = state_49729__$1;
(statearr_49756_49793[(2)] = inst_49693);

(statearr_49756_49793[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49730 === (9))){
var inst_49674 = (state_49729[(15)]);
var inst_49683 = (state_49729[(14)]);
var inst_49700 = (state_49729[(19)]);
var inst_49700__$1 = inst_49674.call(null,inst_49683);
var state_49729__$1 = (function (){var statearr_49757 = state_49729;
(statearr_49757[(19)] = inst_49700__$1);

return statearr_49757;
})();
if(cljs.core.truth_(inst_49700__$1)){
var statearr_49758_49794 = state_49729__$1;
(statearr_49758_49794[(1)] = (14));

} else {
var statearr_49759_49795 = state_49729__$1;
(statearr_49759_49795[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49730 === (5))){
var inst_49684 = (state_49729[(13)]);
var state_49729__$1 = state_49729;
var statearr_49760_49796 = state_49729__$1;
(statearr_49760_49796[(2)] = inst_49684);

(statearr_49760_49796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49730 === (14))){
var inst_49700 = (state_49729[(19)]);
var state_49729__$1 = state_49729;
var statearr_49761_49797 = state_49729__$1;
(statearr_49761_49797[(2)] = inst_49700);

(statearr_49761_49797[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49730 === (26))){
var inst_49719 = (state_49729[(2)]);
var state_49729__$1 = state_49729;
var statearr_49762_49798 = state_49729__$1;
(statearr_49762_49798[(2)] = inst_49719);

(statearr_49762_49798[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49730 === (16))){
var inst_49711 = (state_49729[(2)]);
var state_49729__$1 = state_49729;
if(cljs.core.truth_(inst_49711)){
var statearr_49763_49799 = state_49729__$1;
(statearr_49763_49799[(1)] = (20));

} else {
var statearr_49764_49800 = state_49729__$1;
(statearr_49764_49800[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49730 === (10))){
var inst_49725 = (state_49729[(2)]);
var state_49729__$1 = state_49729;
var statearr_49765_49801 = state_49729__$1;
(statearr_49765_49801[(2)] = inst_49725);

(statearr_49765_49801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49730 === (18))){
var inst_49703 = (state_49729[(16)]);
var state_49729__$1 = state_49729;
var statearr_49766_49802 = state_49729__$1;
(statearr_49766_49802[(2)] = inst_49703);

(statearr_49766_49802[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49730 === (8))){
var inst_49682 = (state_49729[(7)]);
var inst_49691 = (inst_49682 == null);
var state_49729__$1 = state_49729;
if(cljs.core.truth_(inst_49691)){
var statearr_49767_49803 = state_49729__$1;
(statearr_49767_49803[(1)] = (11));

} else {
var statearr_49768_49804 = state_49729__$1;
(statearr_49768_49804[(1)] = (12));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__2332__auto__ = null;
var cljs$core$async$mix_$_state_machine__2332__auto____0 = (function (){
var statearr_49769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49769[(0)] = cljs$core$async$mix_$_state_machine__2332__auto__);

(statearr_49769[(1)] = (1));

return statearr_49769;
});
var cljs$core$async$mix_$_state_machine__2332__auto____1 = (function (state_49729){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_49729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e49770){var ex__2335__auto__ = e49770;
var statearr_49771_49805 = state_49729;
(statearr_49771_49805[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_49729[(4)]))){
var statearr_49772_49806 = state_49729;
(statearr_49772_49806[(1)] = cljs.core.first.call(null,(state_49729[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49807 = state_49729;
state_49729 = G__49807;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__2332__auto__ = function(state_49729){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__2332__auto____1.call(this,state_49729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__2332__auto____0;
cljs$core$async$mix_$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__2332__auto____1;
return cljs$core$async$mix_$_state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_49773 = f__8278__auto__.call(null);
(statearr_49773[(6)] = c__8277__auto___49774);

return statearr_49773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_49810 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_49810.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_49811 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,p,v,ch);
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_49811.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_49812 = (function() {
var G__49813 = null;
var G__49813__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,p);
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__49813__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,p,v);
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__49813 = function(p,v){
switch(arguments.length){
case 1:
return G__49813__1.call(this,p);
case 2:
return G__49813__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49813.cljs$core$IFn$_invoke$arity$1 = G__49813__1;
G__49813.cljs$core$IFn$_invoke$arity$2 = G__49813__2;
return G__49813;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__49809 = arguments.length;
switch (G__49809) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49812.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49812.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__49817 = arguments.length;
switch (G__49817) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__49815_SHARP_){
if(cljs.core.truth_(p1__49815_SHARP_.call(null,topic))){
return p1__49815_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__49815_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49818 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49818 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta49819){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta49819 = meta49819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49820,meta49819__$1){
var self__ = this;
var _49820__$1 = this;
return (new cljs.core.async.t_cljs$core$async49818(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta49819__$1));
}));

(cljs.core.async.t_cljs$core$async49818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49820){
var self__ = this;
var _49820__$1 = this;
return self__.meta49819;
}));

(cljs.core.async.t_cljs$core$async49818.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49818.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async49818.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49818.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async49818.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async49818.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async49818.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async49818.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta49819","meta49819",60055657,null)], null);
}));

(cljs.core.async.t_cljs$core$async49818.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49818");

(cljs.core.async.t_cljs$core$async49818.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async49818");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49818.
 */
cljs.core.async.__GT_t_cljs$core$async49818 = (function cljs$core$async$__GT_t_cljs$core$async49818(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49819){
return (new cljs.core.async.t_cljs$core$async49818(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49819));
});

}

return (new cljs.core.async.t_cljs$core$async49818(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8277__auto___49939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_49892){
var state_val_49893 = (state_49892[(1)]);
if((state_val_49893 === (7))){
var inst_49888 = (state_49892[(2)]);
var state_49892__$1 = state_49892;
var statearr_49894_49940 = state_49892__$1;
(statearr_49894_49940[(2)] = inst_49888);

(statearr_49894_49940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49893 === (20))){
var state_49892__$1 = state_49892;
var statearr_49895_49941 = state_49892__$1;
(statearr_49895_49941[(2)] = null);

(statearr_49895_49941[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49893 === (1))){
var state_49892__$1 = state_49892;
var statearr_49896_49942 = state_49892__$1;
(statearr_49896_49942[(2)] = null);

(statearr_49896_49942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49893 === (24))){
var inst_49871 = (state_49892[(7)]);
var inst_49880 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_49871);
var state_49892__$1 = state_49892;
var statearr_49897_49943 = state_49892__$1;
(statearr_49897_49943[(2)] = inst_49880);

(statearr_49897_49943[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49893 === (4))){
var inst_49823 = (state_49892[(8)]);
var inst_49823__$1 = (state_49892[(2)]);
var inst_49824 = (inst_49823__$1 == null);
var state_49892__$1 = (function (){var statearr_49898 = state_49892;
(statearr_49898[(8)] = inst_49823__$1);

return statearr_49898;
})();
if(cljs.core.truth_(inst_49824)){
var statearr_49899_49944 = state_49892__$1;
(statearr_49899_49944[(1)] = (5));

} else {
var statearr_49900_49945 = state_49892__$1;
(statearr_49900_49945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49893 === (15))){
var inst_49865 = (state_49892[(2)]);
var state_49892__$1 = state_49892;
var statearr_49901_49946 = state_49892__$1;
(statearr_49901_49946[(2)] = inst_49865);

(statearr_49901_49946[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49893 === (21))){
var inst_49885 = (state_49892[(2)]);
var state_49892__$1 = (function (){var statearr_49902 = state_49892;
(statearr_49902[(9)] = inst_49885);

return statearr_49902;
})();
var statearr_49903_49947 = state_49892__$1;
(statearr_49903_49947[(2)] = null);

(statearr_49903_49947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49893 === (13))){
var inst_49847 = (state_49892[(10)]);
var inst_49849 = cljs.core.chunked_seq_QMARK_.call(null,inst_49847);
var state_49892__$1 = state_49892;
if(inst_49849){
var statearr_49904_49948 = state_49892__$1;
(statearr_49904_49948[(1)] = (16));

} else {
var statearr_49905_49949 = state_49892__$1;
(statearr_49905_49949[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49893 === (22))){
var inst_49877 = (state_49892[(2)]);
var state_49892__$1 = state_49892;
if(cljs.core.truth_(inst_49877)){
var statearr_49906_49950 = state_49892__$1;
(statearr_49906_49950[(1)] = (23));

} else {
var statearr_49907_49951 = state_49892__$1;
(statearr_49907_49951[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49893 === (6))){
var inst_49823 = (state_49892[(8)]);
var inst_49871 = (state_49892[(7)]);
var inst_49873 = (state_49892[(11)]);
var inst_49871__$1 = topic_fn.call(null,inst_49823);
var inst_49872 = cljs.core.deref.call(null,mults);
var inst_49873__$1 = cljs.core.get.call(null,inst_49872,inst_49871__$1);
var state_49892__$1 = (function (){var statearr_49908 = state_49892;
(statearr_49908[(7)] = inst_49871__$1);

(statearr_49908[(11)] = inst_49873__$1);

return statearr_49908;
})();
if(cljs.core.truth_(inst_49873__$1)){
var statearr_49909_49952 = state_49892__$1;
(statearr_49909_49952[(1)] = (19));

} else {
var statearr_49910_49953 = state_49892__$1;
(statearr_49910_49953[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49893 === (25))){
var inst_49882 = (state_49892[(2)]);
var state_49892__$1 = state_49892;
var statearr_49911_49954 = state_49892__$1;
(statearr_49911_49954[(2)] = inst_49882);

(statearr_49911_49954[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49893 === (17))){
var inst_49847 = (state_49892[(10)]);
var inst_49856 = cljs.core.first.call(null,inst_49847);
var inst_49857 = cljs.core.async.muxch_STAR_.call(null,inst_49856);
var inst_49858 = cljs.core.async.close_BANG_.call(null,inst_49857);
var inst_49859 = cljs.core.next.call(null,inst_49847);
var inst_49833 = inst_49859;
var inst_49834 = null;
var inst_49835 = (0);
var inst_49836 = (0);
var state_49892__$1 = (function (){var statearr_49912 = state_49892;
(statearr_49912[(12)] = inst_49858);

(statearr_49912[(13)] = inst_49833);

(statearr_49912[(14)] = inst_49834);

(statearr_49912[(15)] = inst_49835);

(statearr_49912[(16)] = inst_49836);

return statearr_49912;
})();
var statearr_49913_49955 = state_49892__$1;
(statearr_49913_49955[(2)] = null);

(statearr_49913_49955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49893 === (3))){
var inst_49890 = (state_49892[(2)]);
var state_49892__$1 = state_49892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49892__$1,inst_49890);
} else {
if((state_val_49893 === (12))){
var inst_49867 = (state_49892[(2)]);
var state_49892__$1 = state_49892;
var statearr_49914_49956 = state_49892__$1;
(statearr_49914_49956[(2)] = inst_49867);

(statearr_49914_49956[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49893 === (2))){
var state_49892__$1 = state_49892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49892__$1,(4),ch);
} else {
if((state_val_49893 === (23))){
var state_49892__$1 = state_49892;
var statearr_49915_49957 = state_49892__$1;
(statearr_49915_49957[(2)] = null);

(statearr_49915_49957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49893 === (19))){
var inst_49873 = (state_49892[(11)]);
var inst_49823 = (state_49892[(8)]);
var inst_49875 = cljs.core.async.muxch_STAR_.call(null,inst_49873);
var state_49892__$1 = state_49892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49892__$1,(22),inst_49875,inst_49823);
} else {
if((state_val_49893 === (11))){
var inst_49833 = (state_49892[(13)]);
var inst_49847 = (state_49892[(10)]);
var inst_49847__$1 = cljs.core.seq.call(null,inst_49833);
var state_49892__$1 = (function (){var statearr_49916 = state_49892;
(statearr_49916[(10)] = inst_49847__$1);

return statearr_49916;
})();
if(inst_49847__$1){
var statearr_49917_49958 = state_49892__$1;
(statearr_49917_49958[(1)] = (13));

} else {
var statearr_49918_49959 = state_49892__$1;
(statearr_49918_49959[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49893 === (9))){
var inst_49869 = (state_49892[(2)]);
var state_49892__$1 = state_49892;
var statearr_49919_49960 = state_49892__$1;
(statearr_49919_49960[(2)] = inst_49869);

(statearr_49919_49960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49893 === (5))){
var inst_49830 = cljs.core.deref.call(null,mults);
var inst_49831 = cljs.core.vals.call(null,inst_49830);
var inst_49832 = cljs.core.seq.call(null,inst_49831);
var inst_49833 = inst_49832;
var inst_49834 = null;
var inst_49835 = (0);
var inst_49836 = (0);
var state_49892__$1 = (function (){var statearr_49920 = state_49892;
(statearr_49920[(13)] = inst_49833);

(statearr_49920[(14)] = inst_49834);

(statearr_49920[(15)] = inst_49835);

(statearr_49920[(16)] = inst_49836);

return statearr_49920;
})();
var statearr_49921_49961 = state_49892__$1;
(statearr_49921_49961[(2)] = null);

(statearr_49921_49961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49893 === (14))){
var state_49892__$1 = state_49892;
var statearr_49925_49962 = state_49892__$1;
(statearr_49925_49962[(2)] = null);

(statearr_49925_49962[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49893 === (16))){
var inst_49847 = (state_49892[(10)]);
var inst_49851 = cljs.core.chunk_first.call(null,inst_49847);
var inst_49852 = cljs.core.chunk_rest.call(null,inst_49847);
var inst_49853 = cljs.core.count.call(null,inst_49851);
var inst_49833 = inst_49852;
var inst_49834 = inst_49851;
var inst_49835 = inst_49853;
var inst_49836 = (0);
var state_49892__$1 = (function (){var statearr_49926 = state_49892;
(statearr_49926[(13)] = inst_49833);

(statearr_49926[(14)] = inst_49834);

(statearr_49926[(15)] = inst_49835);

(statearr_49926[(16)] = inst_49836);

return statearr_49926;
})();
var statearr_49927_49963 = state_49892__$1;
(statearr_49927_49963[(2)] = null);

(statearr_49927_49963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49893 === (10))){
var inst_49834 = (state_49892[(14)]);
var inst_49836 = (state_49892[(16)]);
var inst_49833 = (state_49892[(13)]);
var inst_49835 = (state_49892[(15)]);
var inst_49841 = cljs.core._nth.call(null,inst_49834,inst_49836);
var inst_49842 = cljs.core.async.muxch_STAR_.call(null,inst_49841);
var inst_49843 = cljs.core.async.close_BANG_.call(null,inst_49842);
var inst_49844 = (inst_49836 + (1));
var tmp49922 = inst_49835;
var tmp49923 = inst_49833;
var tmp49924 = inst_49834;
var inst_49833__$1 = tmp49923;
var inst_49834__$1 = tmp49924;
var inst_49835__$1 = tmp49922;
var inst_49836__$1 = inst_49844;
var state_49892__$1 = (function (){var statearr_49928 = state_49892;
(statearr_49928[(17)] = inst_49843);

(statearr_49928[(13)] = inst_49833__$1);

(statearr_49928[(14)] = inst_49834__$1);

(statearr_49928[(15)] = inst_49835__$1);

(statearr_49928[(16)] = inst_49836__$1);

return statearr_49928;
})();
var statearr_49929_49964 = state_49892__$1;
(statearr_49929_49964[(2)] = null);

(statearr_49929_49964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49893 === (18))){
var inst_49862 = (state_49892[(2)]);
var state_49892__$1 = state_49892;
var statearr_49930_49965 = state_49892__$1;
(statearr_49930_49965[(2)] = inst_49862);

(statearr_49930_49965[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49893 === (8))){
var inst_49836 = (state_49892[(16)]);
var inst_49835 = (state_49892[(15)]);
var inst_49838 = (inst_49836 < inst_49835);
var inst_49839 = inst_49838;
var state_49892__$1 = state_49892;
if(cljs.core.truth_(inst_49839)){
var statearr_49931_49966 = state_49892__$1;
(statearr_49931_49966[(1)] = (10));

} else {
var statearr_49932_49967 = state_49892__$1;
(statearr_49932_49967[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2332__auto__ = null;
var cljs$core$async$state_machine__2332__auto____0 = (function (){
var statearr_49933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49933[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_49933[(1)] = (1));

return statearr_49933;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_49892){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_49892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e49934){var ex__2335__auto__ = e49934;
var statearr_49935_49968 = state_49892;
(statearr_49935_49968[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_49892[(4)]))){
var statearr_49936_49969 = state_49892;
(statearr_49936_49969[(1)] = cljs.core.first.call(null,(state_49892[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49970 = state_49892;
state_49892 = G__49970;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_49892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_49892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_49937 = f__8278__auto__.call(null);
(statearr_49937[(6)] = c__8277__auto___49939);

return statearr_49937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__49972 = arguments.length;
switch (G__49972) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__49975 = arguments.length;
switch (G__49975) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__49978 = arguments.length;
switch (G__49978) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_.call(null,out);
} else {
var c__8277__auto___50056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_50021){
var state_val_50022 = (state_50021[(1)]);
if((state_val_50022 === (7))){
var state_50021__$1 = state_50021;
var statearr_50023_50057 = state_50021__$1;
(statearr_50023_50057[(2)] = null);

(statearr_50023_50057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50022 === (1))){
var state_50021__$1 = state_50021;
var statearr_50024_50058 = state_50021__$1;
(statearr_50024_50058[(2)] = null);

(statearr_50024_50058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50022 === (4))){
var inst_49982 = (state_50021[(7)]);
var inst_49981 = (state_50021[(8)]);
var inst_49984 = (inst_49982 < inst_49981);
var state_50021__$1 = state_50021;
if(cljs.core.truth_(inst_49984)){
var statearr_50025_50059 = state_50021__$1;
(statearr_50025_50059[(1)] = (6));

} else {
var statearr_50026_50060 = state_50021__$1;
(statearr_50026_50060[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50022 === (15))){
var inst_50007 = (state_50021[(9)]);
var inst_50012 = cljs.core.apply.call(null,f,inst_50007);
var state_50021__$1 = state_50021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50021__$1,(17),out,inst_50012);
} else {
if((state_val_50022 === (13))){
var inst_50007 = (state_50021[(9)]);
var inst_50007__$1 = (state_50021[(2)]);
var inst_50008 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_50007__$1);
var state_50021__$1 = (function (){var statearr_50027 = state_50021;
(statearr_50027[(9)] = inst_50007__$1);

return statearr_50027;
})();
if(cljs.core.truth_(inst_50008)){
var statearr_50028_50061 = state_50021__$1;
(statearr_50028_50061[(1)] = (14));

} else {
var statearr_50029_50062 = state_50021__$1;
(statearr_50029_50062[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50022 === (6))){
var state_50021__$1 = state_50021;
var statearr_50030_50063 = state_50021__$1;
(statearr_50030_50063[(2)] = null);

(statearr_50030_50063[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50022 === (17))){
var inst_50014 = (state_50021[(2)]);
var state_50021__$1 = (function (){var statearr_50032 = state_50021;
(statearr_50032[(10)] = inst_50014);

return statearr_50032;
})();
var statearr_50033_50064 = state_50021__$1;
(statearr_50033_50064[(2)] = null);

(statearr_50033_50064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50022 === (3))){
var inst_50019 = (state_50021[(2)]);
var state_50021__$1 = state_50021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50021__$1,inst_50019);
} else {
if((state_val_50022 === (12))){
var _ = (function (){var statearr_50034 = state_50021;
(statearr_50034[(4)] = cljs.core.rest.call(null,(state_50021[(4)])));

return statearr_50034;
})();
var state_50021__$1 = state_50021;
var ex50031 = (state_50021__$1[(2)]);
var statearr_50035_50065 = state_50021__$1;
(statearr_50035_50065[(5)] = ex50031);


if((ex50031 instanceof Object)){
var statearr_50036_50066 = state_50021__$1;
(statearr_50036_50066[(1)] = (11));

(statearr_50036_50066[(5)] = null);

} else {
throw ex50031;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50022 === (2))){
var inst_49980 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_49981 = cnt;
var inst_49982 = (0);
var state_50021__$1 = (function (){var statearr_50037 = state_50021;
(statearr_50037[(11)] = inst_49980);

(statearr_50037[(8)] = inst_49981);

(statearr_50037[(7)] = inst_49982);

return statearr_50037;
})();
var statearr_50038_50067 = state_50021__$1;
(statearr_50038_50067[(2)] = null);

(statearr_50038_50067[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50022 === (11))){
var inst_49986 = (state_50021[(2)]);
var inst_49987 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_50021__$1 = (function (){var statearr_50039 = state_50021;
(statearr_50039[(12)] = inst_49986);

return statearr_50039;
})();
var statearr_50040_50068 = state_50021__$1;
(statearr_50040_50068[(2)] = inst_49987);

(statearr_50040_50068[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50022 === (9))){
var inst_49982 = (state_50021[(7)]);
var _ = (function (){var statearr_50041 = state_50021;
(statearr_50041[(4)] = cljs.core.cons.call(null,(12),(state_50021[(4)])));

return statearr_50041;
})();
var inst_49993 = chs__$1.call(null,inst_49982);
var inst_49994 = done.call(null,inst_49982);
var inst_49995 = cljs.core.async.take_BANG_.call(null,inst_49993,inst_49994);
var ___$1 = (function (){var statearr_50042 = state_50021;
(statearr_50042[(4)] = cljs.core.rest.call(null,(state_50021[(4)])));

return statearr_50042;
})();
var state_50021__$1 = state_50021;
var statearr_50043_50069 = state_50021__$1;
(statearr_50043_50069[(2)] = inst_49995);

(statearr_50043_50069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50022 === (5))){
var inst_50005 = (state_50021[(2)]);
var state_50021__$1 = (function (){var statearr_50044 = state_50021;
(statearr_50044[(13)] = inst_50005);

return statearr_50044;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50021__$1,(13),dchan);
} else {
if((state_val_50022 === (14))){
var inst_50010 = cljs.core.async.close_BANG_.call(null,out);
var state_50021__$1 = state_50021;
var statearr_50045_50070 = state_50021__$1;
(statearr_50045_50070[(2)] = inst_50010);

(statearr_50045_50070[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50022 === (16))){
var inst_50017 = (state_50021[(2)]);
var state_50021__$1 = state_50021;
var statearr_50046_50071 = state_50021__$1;
(statearr_50046_50071[(2)] = inst_50017);

(statearr_50046_50071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50022 === (10))){
var inst_49982 = (state_50021[(7)]);
var inst_49998 = (state_50021[(2)]);
var inst_49999 = (inst_49982 + (1));
var inst_49982__$1 = inst_49999;
var state_50021__$1 = (function (){var statearr_50047 = state_50021;
(statearr_50047[(14)] = inst_49998);

(statearr_50047[(7)] = inst_49982__$1);

return statearr_50047;
})();
var statearr_50048_50072 = state_50021__$1;
(statearr_50048_50072[(2)] = null);

(statearr_50048_50072[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50022 === (8))){
var inst_50003 = (state_50021[(2)]);
var state_50021__$1 = state_50021;
var statearr_50049_50073 = state_50021__$1;
(statearr_50049_50073[(2)] = inst_50003);

(statearr_50049_50073[(1)] = (5));


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
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2332__auto__ = null;
var cljs$core$async$state_machine__2332__auto____0 = (function (){
var statearr_50050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50050[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_50050[(1)] = (1));

return statearr_50050;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_50021){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_50021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e50051){var ex__2335__auto__ = e50051;
var statearr_50052_50074 = state_50021;
(statearr_50052_50074[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_50021[(4)]))){
var statearr_50053_50075 = state_50021;
(statearr_50053_50075[(1)] = cljs.core.first.call(null,(state_50021[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50076 = state_50021;
state_50021 = G__50076;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_50021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_50021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_50054 = f__8278__auto__.call(null);
(statearr_50054[(6)] = c__8277__auto___50056);

return statearr_50054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__50079 = arguments.length;
switch (G__50079) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8277__auto___50134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_50111){
var state_val_50112 = (state_50111[(1)]);
if((state_val_50112 === (7))){
var inst_50090 = (state_50111[(7)]);
var inst_50091 = (state_50111[(8)]);
var inst_50090__$1 = (state_50111[(2)]);
var inst_50091__$1 = cljs.core.nth.call(null,inst_50090__$1,(0),null);
var inst_50092 = cljs.core.nth.call(null,inst_50090__$1,(1),null);
var inst_50093 = (inst_50091__$1 == null);
var state_50111__$1 = (function (){var statearr_50113 = state_50111;
(statearr_50113[(7)] = inst_50090__$1);

(statearr_50113[(8)] = inst_50091__$1);

(statearr_50113[(9)] = inst_50092);

return statearr_50113;
})();
if(cljs.core.truth_(inst_50093)){
var statearr_50114_50135 = state_50111__$1;
(statearr_50114_50135[(1)] = (8));

} else {
var statearr_50115_50136 = state_50111__$1;
(statearr_50115_50136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50112 === (1))){
var inst_50080 = cljs.core.vec.call(null,chs);
var inst_50081 = inst_50080;
var state_50111__$1 = (function (){var statearr_50116 = state_50111;
(statearr_50116[(10)] = inst_50081);

return statearr_50116;
})();
var statearr_50117_50137 = state_50111__$1;
(statearr_50117_50137[(2)] = null);

(statearr_50117_50137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50112 === (4))){
var inst_50081 = (state_50111[(10)]);
var state_50111__$1 = state_50111;
return cljs.core.async.ioc_alts_BANG_.call(null,state_50111__$1,(7),inst_50081);
} else {
if((state_val_50112 === (6))){
var inst_50107 = (state_50111[(2)]);
var state_50111__$1 = state_50111;
var statearr_50118_50138 = state_50111__$1;
(statearr_50118_50138[(2)] = inst_50107);

(statearr_50118_50138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50112 === (3))){
var inst_50109 = (state_50111[(2)]);
var state_50111__$1 = state_50111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50111__$1,inst_50109);
} else {
if((state_val_50112 === (2))){
var inst_50081 = (state_50111[(10)]);
var inst_50083 = cljs.core.count.call(null,inst_50081);
var inst_50084 = (inst_50083 > (0));
var state_50111__$1 = state_50111;
if(cljs.core.truth_(inst_50084)){
var statearr_50120_50139 = state_50111__$1;
(statearr_50120_50139[(1)] = (4));

} else {
var statearr_50121_50140 = state_50111__$1;
(statearr_50121_50140[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50112 === (11))){
var inst_50081 = (state_50111[(10)]);
var inst_50100 = (state_50111[(2)]);
var tmp50119 = inst_50081;
var inst_50081__$1 = tmp50119;
var state_50111__$1 = (function (){var statearr_50122 = state_50111;
(statearr_50122[(11)] = inst_50100);

(statearr_50122[(10)] = inst_50081__$1);

return statearr_50122;
})();
var statearr_50123_50141 = state_50111__$1;
(statearr_50123_50141[(2)] = null);

(statearr_50123_50141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50112 === (9))){
var inst_50091 = (state_50111[(8)]);
var state_50111__$1 = state_50111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50111__$1,(11),out,inst_50091);
} else {
if((state_val_50112 === (5))){
var inst_50105 = cljs.core.async.close_BANG_.call(null,out);
var state_50111__$1 = state_50111;
var statearr_50124_50142 = state_50111__$1;
(statearr_50124_50142[(2)] = inst_50105);

(statearr_50124_50142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50112 === (10))){
var inst_50103 = (state_50111[(2)]);
var state_50111__$1 = state_50111;
var statearr_50125_50143 = state_50111__$1;
(statearr_50125_50143[(2)] = inst_50103);

(statearr_50125_50143[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50112 === (8))){
var inst_50081 = (state_50111[(10)]);
var inst_50090 = (state_50111[(7)]);
var inst_50091 = (state_50111[(8)]);
var inst_50092 = (state_50111[(9)]);
var inst_50095 = (function (){var cs = inst_50081;
var vec__50086 = inst_50090;
var v = inst_50091;
var c = inst_50092;
return (function (p1__50077_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__50077_SHARP_);
});
})();
var inst_50096 = cljs.core.filterv.call(null,inst_50095,inst_50081);
var inst_50081__$1 = inst_50096;
var state_50111__$1 = (function (){var statearr_50126 = state_50111;
(statearr_50126[(10)] = inst_50081__$1);

return statearr_50126;
})();
var statearr_50127_50144 = state_50111__$1;
(statearr_50127_50144[(2)] = null);

(statearr_50127_50144[(1)] = (2));


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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2332__auto__ = null;
var cljs$core$async$state_machine__2332__auto____0 = (function (){
var statearr_50128 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50128[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_50128[(1)] = (1));

return statearr_50128;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_50111){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_50111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e50129){var ex__2335__auto__ = e50129;
var statearr_50130_50145 = state_50111;
(statearr_50130_50145[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_50111[(4)]))){
var statearr_50131_50146 = state_50111;
(statearr_50131_50146[(1)] = cljs.core.first.call(null,(state_50111[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50147 = state_50111;
state_50111 = G__50147;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_50111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_50111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_50132 = f__8278__auto__.call(null);
(statearr_50132[(6)] = c__8277__auto___50134);

return statearr_50132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__50149 = arguments.length;
switch (G__50149) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8277__auto___50195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_50173){
var state_val_50174 = (state_50173[(1)]);
if((state_val_50174 === (7))){
var inst_50155 = (state_50173[(7)]);
var inst_50155__$1 = (state_50173[(2)]);
var inst_50156 = (inst_50155__$1 == null);
var inst_50157 = cljs.core.not.call(null,inst_50156);
var state_50173__$1 = (function (){var statearr_50175 = state_50173;
(statearr_50175[(7)] = inst_50155__$1);

return statearr_50175;
})();
if(inst_50157){
var statearr_50176_50196 = state_50173__$1;
(statearr_50176_50196[(1)] = (8));

} else {
var statearr_50177_50197 = state_50173__$1;
(statearr_50177_50197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50174 === (1))){
var inst_50150 = (0);
var state_50173__$1 = (function (){var statearr_50178 = state_50173;
(statearr_50178[(8)] = inst_50150);

return statearr_50178;
})();
var statearr_50179_50198 = state_50173__$1;
(statearr_50179_50198[(2)] = null);

(statearr_50179_50198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50174 === (4))){
var state_50173__$1 = state_50173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50173__$1,(7),ch);
} else {
if((state_val_50174 === (6))){
var inst_50168 = (state_50173[(2)]);
var state_50173__$1 = state_50173;
var statearr_50180_50199 = state_50173__$1;
(statearr_50180_50199[(2)] = inst_50168);

(statearr_50180_50199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50174 === (3))){
var inst_50170 = (state_50173[(2)]);
var inst_50171 = cljs.core.async.close_BANG_.call(null,out);
var state_50173__$1 = (function (){var statearr_50181 = state_50173;
(statearr_50181[(9)] = inst_50170);

return statearr_50181;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50173__$1,inst_50171);
} else {
if((state_val_50174 === (2))){
var inst_50150 = (state_50173[(8)]);
var inst_50152 = (inst_50150 < n);
var state_50173__$1 = state_50173;
if(cljs.core.truth_(inst_50152)){
var statearr_50182_50200 = state_50173__$1;
(statearr_50182_50200[(1)] = (4));

} else {
var statearr_50183_50201 = state_50173__$1;
(statearr_50183_50201[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50174 === (11))){
var inst_50150 = (state_50173[(8)]);
var inst_50160 = (state_50173[(2)]);
var inst_50161 = (inst_50150 + (1));
var inst_50150__$1 = inst_50161;
var state_50173__$1 = (function (){var statearr_50184 = state_50173;
(statearr_50184[(10)] = inst_50160);

(statearr_50184[(8)] = inst_50150__$1);

return statearr_50184;
})();
var statearr_50185_50202 = state_50173__$1;
(statearr_50185_50202[(2)] = null);

(statearr_50185_50202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50174 === (9))){
var state_50173__$1 = state_50173;
var statearr_50186_50203 = state_50173__$1;
(statearr_50186_50203[(2)] = null);

(statearr_50186_50203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50174 === (5))){
var state_50173__$1 = state_50173;
var statearr_50187_50204 = state_50173__$1;
(statearr_50187_50204[(2)] = null);

(statearr_50187_50204[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50174 === (10))){
var inst_50165 = (state_50173[(2)]);
var state_50173__$1 = state_50173;
var statearr_50188_50205 = state_50173__$1;
(statearr_50188_50205[(2)] = inst_50165);

(statearr_50188_50205[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50174 === (8))){
var inst_50155 = (state_50173[(7)]);
var state_50173__$1 = state_50173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50173__$1,(11),out,inst_50155);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2332__auto__ = null;
var cljs$core$async$state_machine__2332__auto____0 = (function (){
var statearr_50189 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50189[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_50189[(1)] = (1));

return statearr_50189;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_50173){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_50173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e50190){var ex__2335__auto__ = e50190;
var statearr_50191_50206 = state_50173;
(statearr_50191_50206[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_50173[(4)]))){
var statearr_50192_50207 = state_50173;
(statearr_50192_50207[(1)] = cljs.core.first.call(null,(state_50173[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50208 = state_50173;
state_50173 = G__50208;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_50173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_50173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_50193 = f__8278__auto__.call(null);
(statearr_50193[(6)] = c__8277__auto___50195);

return statearr_50193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50210 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50210 = (function (f,ch,meta50211){
this.f = f;
this.ch = ch;
this.meta50211 = meta50211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50212,meta50211__$1){
var self__ = this;
var _50212__$1 = this;
return (new cljs.core.async.t_cljs$core$async50210(self__.f,self__.ch,meta50211__$1));
}));

(cljs.core.async.t_cljs$core$async50210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50212){
var self__ = this;
var _50212__$1 = this;
return self__.meta50211;
}));

(cljs.core.async.t_cljs$core$async50210.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50210.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async50210.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async50210.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50210.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50213 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50213 = (function (f,ch,meta50211,_,fn1,meta50214){
this.f = f;
this.ch = ch;
this.meta50211 = meta50211;
this._ = _;
this.fn1 = fn1;
this.meta50214 = meta50214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50215,meta50214__$1){
var self__ = this;
var _50215__$1 = this;
return (new cljs.core.async.t_cljs$core$async50213(self__.f,self__.ch,self__.meta50211,self__._,self__.fn1,meta50214__$1));
}));

(cljs.core.async.t_cljs$core$async50213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50215){
var self__ = this;
var _50215__$1 = this;
return self__.meta50214;
}));

(cljs.core.async.t_cljs$core$async50213.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50213.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async50213.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50213.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__50209_SHARP_){
return f1.call(null,(((p1__50209_SHARP_ == null))?null:self__.f.call(null,p1__50209_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async50213.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50211","meta50211",50057694,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async50210","cljs.core.async/t_cljs$core$async50210",2012568996,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta50214","meta50214",-1989560511,null)], null);
}));

(cljs.core.async.t_cljs$core$async50213.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50213.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50213");

(cljs.core.async.t_cljs$core$async50213.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async50213");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50213.
 */
cljs.core.async.__GT_t_cljs$core$async50213 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async50213(f__$1,ch__$1,meta50211__$1,___$2,fn1__$1,meta50214){
return (new cljs.core.async.t_cljs$core$async50213(f__$1,ch__$1,meta50211__$1,___$2,fn1__$1,meta50214));
});

}

return (new cljs.core.async.t_cljs$core$async50213(self__.f,self__.ch,self__.meta50211,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async50210.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50210.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async50210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50211","meta50211",50057694,null)], null);
}));

(cljs.core.async.t_cljs$core$async50210.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50210.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50210");

(cljs.core.async.t_cljs$core$async50210.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async50210");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50210.
 */
cljs.core.async.__GT_t_cljs$core$async50210 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async50210(f__$1,ch__$1,meta50211){
return (new cljs.core.async.t_cljs$core$async50210(f__$1,ch__$1,meta50211));
});

}

return (new cljs.core.async.t_cljs$core$async50210(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50216 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50216 = (function (f,ch,meta50217){
this.f = f;
this.ch = ch;
this.meta50217 = meta50217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50218,meta50217__$1){
var self__ = this;
var _50218__$1 = this;
return (new cljs.core.async.t_cljs$core$async50216(self__.f,self__.ch,meta50217__$1));
}));

(cljs.core.async.t_cljs$core$async50216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50218){
var self__ = this;
var _50218__$1 = this;
return self__.meta50217;
}));

(cljs.core.async.t_cljs$core$async50216.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50216.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async50216.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50216.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async50216.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50216.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async50216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50217","meta50217",-1327280114,null)], null);
}));

(cljs.core.async.t_cljs$core$async50216.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50216");

(cljs.core.async.t_cljs$core$async50216.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async50216");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50216.
 */
cljs.core.async.__GT_t_cljs$core$async50216 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async50216(f__$1,ch__$1,meta50217){
return (new cljs.core.async.t_cljs$core$async50216(f__$1,ch__$1,meta50217));
});

}

return (new cljs.core.async.t_cljs$core$async50216(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50219 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50219 = (function (p,ch,meta50220){
this.p = p;
this.ch = ch;
this.meta50220 = meta50220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50221,meta50220__$1){
var self__ = this;
var _50221__$1 = this;
return (new cljs.core.async.t_cljs$core$async50219(self__.p,self__.ch,meta50220__$1));
}));

(cljs.core.async.t_cljs$core$async50219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50221){
var self__ = this;
var _50221__$1 = this;
return self__.meta50220;
}));

(cljs.core.async.t_cljs$core$async50219.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50219.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async50219.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async50219.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50219.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async50219.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50219.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async50219.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50220","meta50220",-932452573,null)], null);
}));

(cljs.core.async.t_cljs$core$async50219.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50219.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50219");

(cljs.core.async.t_cljs$core$async50219.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async50219");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50219.
 */
cljs.core.async.__GT_t_cljs$core$async50219 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async50219(p__$1,ch__$1,meta50220){
return (new cljs.core.async.t_cljs$core$async50219(p__$1,ch__$1,meta50220));
});

}

return (new cljs.core.async.t_cljs$core$async50219(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__50223 = arguments.length;
switch (G__50223) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8277__auto___50264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_50244){
var state_val_50245 = (state_50244[(1)]);
if((state_val_50245 === (7))){
var inst_50240 = (state_50244[(2)]);
var state_50244__$1 = state_50244;
var statearr_50246_50265 = state_50244__$1;
(statearr_50246_50265[(2)] = inst_50240);

(statearr_50246_50265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50245 === (1))){
var state_50244__$1 = state_50244;
var statearr_50247_50266 = state_50244__$1;
(statearr_50247_50266[(2)] = null);

(statearr_50247_50266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50245 === (4))){
var inst_50226 = (state_50244[(7)]);
var inst_50226__$1 = (state_50244[(2)]);
var inst_50227 = (inst_50226__$1 == null);
var state_50244__$1 = (function (){var statearr_50248 = state_50244;
(statearr_50248[(7)] = inst_50226__$1);

return statearr_50248;
})();
if(cljs.core.truth_(inst_50227)){
var statearr_50249_50267 = state_50244__$1;
(statearr_50249_50267[(1)] = (5));

} else {
var statearr_50250_50268 = state_50244__$1;
(statearr_50250_50268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50245 === (6))){
var inst_50226 = (state_50244[(7)]);
var inst_50231 = p.call(null,inst_50226);
var state_50244__$1 = state_50244;
if(cljs.core.truth_(inst_50231)){
var statearr_50251_50269 = state_50244__$1;
(statearr_50251_50269[(1)] = (8));

} else {
var statearr_50252_50270 = state_50244__$1;
(statearr_50252_50270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50245 === (3))){
var inst_50242 = (state_50244[(2)]);
var state_50244__$1 = state_50244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50244__$1,inst_50242);
} else {
if((state_val_50245 === (2))){
var state_50244__$1 = state_50244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50244__$1,(4),ch);
} else {
if((state_val_50245 === (11))){
var inst_50234 = (state_50244[(2)]);
var state_50244__$1 = state_50244;
var statearr_50253_50271 = state_50244__$1;
(statearr_50253_50271[(2)] = inst_50234);

(statearr_50253_50271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50245 === (9))){
var state_50244__$1 = state_50244;
var statearr_50254_50272 = state_50244__$1;
(statearr_50254_50272[(2)] = null);

(statearr_50254_50272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50245 === (5))){
var inst_50229 = cljs.core.async.close_BANG_.call(null,out);
var state_50244__$1 = state_50244;
var statearr_50255_50273 = state_50244__$1;
(statearr_50255_50273[(2)] = inst_50229);

(statearr_50255_50273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50245 === (10))){
var inst_50237 = (state_50244[(2)]);
var state_50244__$1 = (function (){var statearr_50256 = state_50244;
(statearr_50256[(8)] = inst_50237);

return statearr_50256;
})();
var statearr_50257_50274 = state_50244__$1;
(statearr_50257_50274[(2)] = null);

(statearr_50257_50274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50245 === (8))){
var inst_50226 = (state_50244[(7)]);
var state_50244__$1 = state_50244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50244__$1,(11),out,inst_50226);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2332__auto__ = null;
var cljs$core$async$state_machine__2332__auto____0 = (function (){
var statearr_50258 = [null,null,null,null,null,null,null,null,null];
(statearr_50258[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_50258[(1)] = (1));

return statearr_50258;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_50244){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_50244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e50259){var ex__2335__auto__ = e50259;
var statearr_50260_50275 = state_50244;
(statearr_50260_50275[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_50244[(4)]))){
var statearr_50261_50276 = state_50244;
(statearr_50261_50276[(1)] = cljs.core.first.call(null,(state_50244[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50277 = state_50244;
state_50244 = G__50277;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_50244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_50244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_50262 = f__8278__auto__.call(null);
(statearr_50262[(6)] = c__8277__auto___50264);

return statearr_50262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__50279 = arguments.length;
switch (G__50279) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__8277__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_50342){
var state_val_50343 = (state_50342[(1)]);
if((state_val_50343 === (7))){
var inst_50338 = (state_50342[(2)]);
var state_50342__$1 = state_50342;
var statearr_50344_50383 = state_50342__$1;
(statearr_50344_50383[(2)] = inst_50338);

(statearr_50344_50383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50343 === (20))){
var inst_50308 = (state_50342[(7)]);
var inst_50319 = (state_50342[(2)]);
var inst_50320 = cljs.core.next.call(null,inst_50308);
var inst_50294 = inst_50320;
var inst_50295 = null;
var inst_50296 = (0);
var inst_50297 = (0);
var state_50342__$1 = (function (){var statearr_50345 = state_50342;
(statearr_50345[(8)] = inst_50319);

(statearr_50345[(9)] = inst_50294);

(statearr_50345[(10)] = inst_50295);

(statearr_50345[(11)] = inst_50296);

(statearr_50345[(12)] = inst_50297);

return statearr_50345;
})();
var statearr_50346_50384 = state_50342__$1;
(statearr_50346_50384[(2)] = null);

(statearr_50346_50384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50343 === (1))){
var state_50342__$1 = state_50342;
var statearr_50347_50385 = state_50342__$1;
(statearr_50347_50385[(2)] = null);

(statearr_50347_50385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50343 === (4))){
var inst_50283 = (state_50342[(13)]);
var inst_50283__$1 = (state_50342[(2)]);
var inst_50284 = (inst_50283__$1 == null);
var state_50342__$1 = (function (){var statearr_50348 = state_50342;
(statearr_50348[(13)] = inst_50283__$1);

return statearr_50348;
})();
if(cljs.core.truth_(inst_50284)){
var statearr_50349_50386 = state_50342__$1;
(statearr_50349_50386[(1)] = (5));

} else {
var statearr_50350_50387 = state_50342__$1;
(statearr_50350_50387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50343 === (15))){
var state_50342__$1 = state_50342;
var statearr_50354_50388 = state_50342__$1;
(statearr_50354_50388[(2)] = null);

(statearr_50354_50388[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50343 === (21))){
var state_50342__$1 = state_50342;
var statearr_50355_50389 = state_50342__$1;
(statearr_50355_50389[(2)] = null);

(statearr_50355_50389[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50343 === (13))){
var inst_50297 = (state_50342[(12)]);
var inst_50294 = (state_50342[(9)]);
var inst_50295 = (state_50342[(10)]);
var inst_50296 = (state_50342[(11)]);
var inst_50304 = (state_50342[(2)]);
var inst_50305 = (inst_50297 + (1));
var tmp50351 = inst_50295;
var tmp50352 = inst_50294;
var tmp50353 = inst_50296;
var inst_50294__$1 = tmp50352;
var inst_50295__$1 = tmp50351;
var inst_50296__$1 = tmp50353;
var inst_50297__$1 = inst_50305;
var state_50342__$1 = (function (){var statearr_50356 = state_50342;
(statearr_50356[(14)] = inst_50304);

(statearr_50356[(9)] = inst_50294__$1);

(statearr_50356[(10)] = inst_50295__$1);

(statearr_50356[(11)] = inst_50296__$1);

(statearr_50356[(12)] = inst_50297__$1);

return statearr_50356;
})();
var statearr_50357_50390 = state_50342__$1;
(statearr_50357_50390[(2)] = null);

(statearr_50357_50390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50343 === (22))){
var state_50342__$1 = state_50342;
var statearr_50358_50391 = state_50342__$1;
(statearr_50358_50391[(2)] = null);

(statearr_50358_50391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50343 === (6))){
var inst_50283 = (state_50342[(13)]);
var inst_50292 = f.call(null,inst_50283);
var inst_50293 = cljs.core.seq.call(null,inst_50292);
var inst_50294 = inst_50293;
var inst_50295 = null;
var inst_50296 = (0);
var inst_50297 = (0);
var state_50342__$1 = (function (){var statearr_50359 = state_50342;
(statearr_50359[(9)] = inst_50294);

(statearr_50359[(10)] = inst_50295);

(statearr_50359[(11)] = inst_50296);

(statearr_50359[(12)] = inst_50297);

return statearr_50359;
})();
var statearr_50360_50392 = state_50342__$1;
(statearr_50360_50392[(2)] = null);

(statearr_50360_50392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50343 === (17))){
var inst_50308 = (state_50342[(7)]);
var inst_50312 = cljs.core.chunk_first.call(null,inst_50308);
var inst_50313 = cljs.core.chunk_rest.call(null,inst_50308);
var inst_50314 = cljs.core.count.call(null,inst_50312);
var inst_50294 = inst_50313;
var inst_50295 = inst_50312;
var inst_50296 = inst_50314;
var inst_50297 = (0);
var state_50342__$1 = (function (){var statearr_50361 = state_50342;
(statearr_50361[(9)] = inst_50294);

(statearr_50361[(10)] = inst_50295);

(statearr_50361[(11)] = inst_50296);

(statearr_50361[(12)] = inst_50297);

return statearr_50361;
})();
var statearr_50362_50393 = state_50342__$1;
(statearr_50362_50393[(2)] = null);

(statearr_50362_50393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50343 === (3))){
var inst_50340 = (state_50342[(2)]);
var state_50342__$1 = state_50342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50342__$1,inst_50340);
} else {
if((state_val_50343 === (12))){
var inst_50328 = (state_50342[(2)]);
var state_50342__$1 = state_50342;
var statearr_50363_50394 = state_50342__$1;
(statearr_50363_50394[(2)] = inst_50328);

(statearr_50363_50394[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50343 === (2))){
var state_50342__$1 = state_50342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50342__$1,(4),in$);
} else {
if((state_val_50343 === (23))){
var inst_50336 = (state_50342[(2)]);
var state_50342__$1 = state_50342;
var statearr_50364_50395 = state_50342__$1;
(statearr_50364_50395[(2)] = inst_50336);

(statearr_50364_50395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50343 === (19))){
var inst_50323 = (state_50342[(2)]);
var state_50342__$1 = state_50342;
var statearr_50365_50396 = state_50342__$1;
(statearr_50365_50396[(2)] = inst_50323);

(statearr_50365_50396[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50343 === (11))){
var inst_50294 = (state_50342[(9)]);
var inst_50308 = (state_50342[(7)]);
var inst_50308__$1 = cljs.core.seq.call(null,inst_50294);
var state_50342__$1 = (function (){var statearr_50366 = state_50342;
(statearr_50366[(7)] = inst_50308__$1);

return statearr_50366;
})();
if(inst_50308__$1){
var statearr_50367_50397 = state_50342__$1;
(statearr_50367_50397[(1)] = (14));

} else {
var statearr_50368_50398 = state_50342__$1;
(statearr_50368_50398[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50343 === (9))){
var inst_50330 = (state_50342[(2)]);
var inst_50331 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_50342__$1 = (function (){var statearr_50369 = state_50342;
(statearr_50369[(15)] = inst_50330);

return statearr_50369;
})();
if(cljs.core.truth_(inst_50331)){
var statearr_50370_50399 = state_50342__$1;
(statearr_50370_50399[(1)] = (21));

} else {
var statearr_50371_50400 = state_50342__$1;
(statearr_50371_50400[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50343 === (5))){
var inst_50286 = cljs.core.async.close_BANG_.call(null,out);
var state_50342__$1 = state_50342;
var statearr_50372_50401 = state_50342__$1;
(statearr_50372_50401[(2)] = inst_50286);

(statearr_50372_50401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50343 === (14))){
var inst_50308 = (state_50342[(7)]);
var inst_50310 = cljs.core.chunked_seq_QMARK_.call(null,inst_50308);
var state_50342__$1 = state_50342;
if(inst_50310){
var statearr_50373_50402 = state_50342__$1;
(statearr_50373_50402[(1)] = (17));

} else {
var statearr_50374_50403 = state_50342__$1;
(statearr_50374_50403[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50343 === (16))){
var inst_50326 = (state_50342[(2)]);
var state_50342__$1 = state_50342;
var statearr_50375_50404 = state_50342__$1;
(statearr_50375_50404[(2)] = inst_50326);

(statearr_50375_50404[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50343 === (10))){
var inst_50295 = (state_50342[(10)]);
var inst_50297 = (state_50342[(12)]);
var inst_50302 = cljs.core._nth.call(null,inst_50295,inst_50297);
var state_50342__$1 = state_50342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50342__$1,(13),out,inst_50302);
} else {
if((state_val_50343 === (18))){
var inst_50308 = (state_50342[(7)]);
var inst_50317 = cljs.core.first.call(null,inst_50308);
var state_50342__$1 = state_50342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50342__$1,(20),out,inst_50317);
} else {
if((state_val_50343 === (8))){
var inst_50297 = (state_50342[(12)]);
var inst_50296 = (state_50342[(11)]);
var inst_50299 = (inst_50297 < inst_50296);
var inst_50300 = inst_50299;
var state_50342__$1 = state_50342;
if(cljs.core.truth_(inst_50300)){
var statearr_50376_50405 = state_50342__$1;
(statearr_50376_50405[(1)] = (10));

} else {
var statearr_50377_50406 = state_50342__$1;
(statearr_50377_50406[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__2332__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__2332__auto____0 = (function (){
var statearr_50378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50378[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__2332__auto__);

(statearr_50378[(1)] = (1));

return statearr_50378;
});
var cljs$core$async$mapcat_STAR__$_state_machine__2332__auto____1 = (function (state_50342){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_50342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e50379){var ex__2335__auto__ = e50379;
var statearr_50380_50407 = state_50342;
(statearr_50380_50407[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_50342[(4)]))){
var statearr_50381_50408 = state_50342;
(statearr_50381_50408[(1)] = cljs.core.first.call(null,(state_50342[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50409 = state_50342;
state_50342 = G__50409;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__2332__auto__ = function(state_50342){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__2332__auto____1.call(this,state_50342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__2332__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__2332__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_50382 = f__8278__auto__.call(null);
(statearr_50382[(6)] = c__8277__auto__);

return statearr_50382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
}));

return c__8277__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__50411 = arguments.length;
switch (G__50411) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__50414 = arguments.length;
switch (G__50414) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__50417 = arguments.length;
switch (G__50417) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8277__auto___50465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_50441){
var state_val_50442 = (state_50441[(1)]);
if((state_val_50442 === (7))){
var inst_50436 = (state_50441[(2)]);
var state_50441__$1 = state_50441;
var statearr_50443_50466 = state_50441__$1;
(statearr_50443_50466[(2)] = inst_50436);

(statearr_50443_50466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50442 === (1))){
var inst_50418 = null;
var state_50441__$1 = (function (){var statearr_50444 = state_50441;
(statearr_50444[(7)] = inst_50418);

return statearr_50444;
})();
var statearr_50445_50467 = state_50441__$1;
(statearr_50445_50467[(2)] = null);

(statearr_50445_50467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50442 === (4))){
var inst_50421 = (state_50441[(8)]);
var inst_50421__$1 = (state_50441[(2)]);
var inst_50422 = (inst_50421__$1 == null);
var inst_50423 = cljs.core.not.call(null,inst_50422);
var state_50441__$1 = (function (){var statearr_50446 = state_50441;
(statearr_50446[(8)] = inst_50421__$1);

return statearr_50446;
})();
if(inst_50423){
var statearr_50447_50468 = state_50441__$1;
(statearr_50447_50468[(1)] = (5));

} else {
var statearr_50448_50469 = state_50441__$1;
(statearr_50448_50469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50442 === (6))){
var state_50441__$1 = state_50441;
var statearr_50449_50470 = state_50441__$1;
(statearr_50449_50470[(2)] = null);

(statearr_50449_50470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50442 === (3))){
var inst_50438 = (state_50441[(2)]);
var inst_50439 = cljs.core.async.close_BANG_.call(null,out);
var state_50441__$1 = (function (){var statearr_50450 = state_50441;
(statearr_50450[(9)] = inst_50438);

return statearr_50450;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50441__$1,inst_50439);
} else {
if((state_val_50442 === (2))){
var state_50441__$1 = state_50441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50441__$1,(4),ch);
} else {
if((state_val_50442 === (11))){
var inst_50421 = (state_50441[(8)]);
var inst_50430 = (state_50441[(2)]);
var inst_50418 = inst_50421;
var state_50441__$1 = (function (){var statearr_50451 = state_50441;
(statearr_50451[(10)] = inst_50430);

(statearr_50451[(7)] = inst_50418);

return statearr_50451;
})();
var statearr_50452_50471 = state_50441__$1;
(statearr_50452_50471[(2)] = null);

(statearr_50452_50471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50442 === (9))){
var inst_50421 = (state_50441[(8)]);
var state_50441__$1 = state_50441;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50441__$1,(11),out,inst_50421);
} else {
if((state_val_50442 === (5))){
var inst_50421 = (state_50441[(8)]);
var inst_50418 = (state_50441[(7)]);
var inst_50425 = cljs.core._EQ_.call(null,inst_50421,inst_50418);
var state_50441__$1 = state_50441;
if(inst_50425){
var statearr_50454_50472 = state_50441__$1;
(statearr_50454_50472[(1)] = (8));

} else {
var statearr_50455_50473 = state_50441__$1;
(statearr_50455_50473[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50442 === (10))){
var inst_50433 = (state_50441[(2)]);
var state_50441__$1 = state_50441;
var statearr_50456_50474 = state_50441__$1;
(statearr_50456_50474[(2)] = inst_50433);

(statearr_50456_50474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50442 === (8))){
var inst_50418 = (state_50441[(7)]);
var tmp50453 = inst_50418;
var inst_50418__$1 = tmp50453;
var state_50441__$1 = (function (){var statearr_50457 = state_50441;
(statearr_50457[(7)] = inst_50418__$1);

return statearr_50457;
})();
var statearr_50458_50475 = state_50441__$1;
(statearr_50458_50475[(2)] = null);

(statearr_50458_50475[(1)] = (2));


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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2332__auto__ = null;
var cljs$core$async$state_machine__2332__auto____0 = (function (){
var statearr_50459 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50459[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_50459[(1)] = (1));

return statearr_50459;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_50441){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_50441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e50460){var ex__2335__auto__ = e50460;
var statearr_50461_50476 = state_50441;
(statearr_50461_50476[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_50441[(4)]))){
var statearr_50462_50477 = state_50441;
(statearr_50462_50477[(1)] = cljs.core.first.call(null,(state_50441[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50478 = state_50441;
state_50441 = G__50478;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_50441){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_50441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_50463 = f__8278__auto__.call(null);
(statearr_50463[(6)] = c__8277__auto___50465);

return statearr_50463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__50480 = arguments.length;
switch (G__50480) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8277__auto___50547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_50518){
var state_val_50519 = (state_50518[(1)]);
if((state_val_50519 === (7))){
var inst_50514 = (state_50518[(2)]);
var state_50518__$1 = state_50518;
var statearr_50520_50548 = state_50518__$1;
(statearr_50520_50548[(2)] = inst_50514);

(statearr_50520_50548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50519 === (1))){
var inst_50481 = (new Array(n));
var inst_50482 = inst_50481;
var inst_50483 = (0);
var state_50518__$1 = (function (){var statearr_50521 = state_50518;
(statearr_50521[(7)] = inst_50482);

(statearr_50521[(8)] = inst_50483);

return statearr_50521;
})();
var statearr_50522_50549 = state_50518__$1;
(statearr_50522_50549[(2)] = null);

(statearr_50522_50549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50519 === (4))){
var inst_50486 = (state_50518[(9)]);
var inst_50486__$1 = (state_50518[(2)]);
var inst_50487 = (inst_50486__$1 == null);
var inst_50488 = cljs.core.not.call(null,inst_50487);
var state_50518__$1 = (function (){var statearr_50523 = state_50518;
(statearr_50523[(9)] = inst_50486__$1);

return statearr_50523;
})();
if(inst_50488){
var statearr_50524_50550 = state_50518__$1;
(statearr_50524_50550[(1)] = (5));

} else {
var statearr_50525_50551 = state_50518__$1;
(statearr_50525_50551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50519 === (15))){
var inst_50508 = (state_50518[(2)]);
var state_50518__$1 = state_50518;
var statearr_50526_50552 = state_50518__$1;
(statearr_50526_50552[(2)] = inst_50508);

(statearr_50526_50552[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50519 === (13))){
var state_50518__$1 = state_50518;
var statearr_50527_50553 = state_50518__$1;
(statearr_50527_50553[(2)] = null);

(statearr_50527_50553[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50519 === (6))){
var inst_50483 = (state_50518[(8)]);
var inst_50504 = (inst_50483 > (0));
var state_50518__$1 = state_50518;
if(cljs.core.truth_(inst_50504)){
var statearr_50528_50554 = state_50518__$1;
(statearr_50528_50554[(1)] = (12));

} else {
var statearr_50529_50555 = state_50518__$1;
(statearr_50529_50555[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50519 === (3))){
var inst_50516 = (state_50518[(2)]);
var state_50518__$1 = state_50518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50518__$1,inst_50516);
} else {
if((state_val_50519 === (12))){
var inst_50482 = (state_50518[(7)]);
var inst_50506 = cljs.core.vec.call(null,inst_50482);
var state_50518__$1 = state_50518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50518__$1,(15),out,inst_50506);
} else {
if((state_val_50519 === (2))){
var state_50518__$1 = state_50518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50518__$1,(4),ch);
} else {
if((state_val_50519 === (11))){
var inst_50498 = (state_50518[(2)]);
var inst_50499 = (new Array(n));
var inst_50482 = inst_50499;
var inst_50483 = (0);
var state_50518__$1 = (function (){var statearr_50530 = state_50518;
(statearr_50530[(10)] = inst_50498);

(statearr_50530[(7)] = inst_50482);

(statearr_50530[(8)] = inst_50483);

return statearr_50530;
})();
var statearr_50531_50556 = state_50518__$1;
(statearr_50531_50556[(2)] = null);

(statearr_50531_50556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50519 === (9))){
var inst_50482 = (state_50518[(7)]);
var inst_50496 = cljs.core.vec.call(null,inst_50482);
var state_50518__$1 = state_50518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50518__$1,(11),out,inst_50496);
} else {
if((state_val_50519 === (5))){
var inst_50482 = (state_50518[(7)]);
var inst_50483 = (state_50518[(8)]);
var inst_50486 = (state_50518[(9)]);
var inst_50491 = (state_50518[(11)]);
var inst_50490 = (inst_50482[inst_50483] = inst_50486);
var inst_50491__$1 = (inst_50483 + (1));
var inst_50492 = (inst_50491__$1 < n);
var state_50518__$1 = (function (){var statearr_50532 = state_50518;
(statearr_50532[(12)] = inst_50490);

(statearr_50532[(11)] = inst_50491__$1);

return statearr_50532;
})();
if(cljs.core.truth_(inst_50492)){
var statearr_50533_50557 = state_50518__$1;
(statearr_50533_50557[(1)] = (8));

} else {
var statearr_50534_50558 = state_50518__$1;
(statearr_50534_50558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50519 === (14))){
var inst_50511 = (state_50518[(2)]);
var inst_50512 = cljs.core.async.close_BANG_.call(null,out);
var state_50518__$1 = (function (){var statearr_50536 = state_50518;
(statearr_50536[(13)] = inst_50511);

return statearr_50536;
})();
var statearr_50537_50559 = state_50518__$1;
(statearr_50537_50559[(2)] = inst_50512);

(statearr_50537_50559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50519 === (10))){
var inst_50502 = (state_50518[(2)]);
var state_50518__$1 = state_50518;
var statearr_50538_50560 = state_50518__$1;
(statearr_50538_50560[(2)] = inst_50502);

(statearr_50538_50560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50519 === (8))){
var inst_50482 = (state_50518[(7)]);
var inst_50491 = (state_50518[(11)]);
var tmp50535 = inst_50482;
var inst_50482__$1 = tmp50535;
var inst_50483 = inst_50491;
var state_50518__$1 = (function (){var statearr_50539 = state_50518;
(statearr_50539[(7)] = inst_50482__$1);

(statearr_50539[(8)] = inst_50483);

return statearr_50539;
})();
var statearr_50540_50561 = state_50518__$1;
(statearr_50540_50561[(2)] = null);

(statearr_50540_50561[(1)] = (2));


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
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2332__auto__ = null;
var cljs$core$async$state_machine__2332__auto____0 = (function (){
var statearr_50541 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50541[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_50541[(1)] = (1));

return statearr_50541;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_50518){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_50518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e50542){var ex__2335__auto__ = e50542;
var statearr_50543_50562 = state_50518;
(statearr_50543_50562[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_50518[(4)]))){
var statearr_50544_50563 = state_50518;
(statearr_50544_50563[(1)] = cljs.core.first.call(null,(state_50518[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50564 = state_50518;
state_50518 = G__50564;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_50518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_50518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_50545 = f__8278__auto__.call(null);
(statearr_50545[(6)] = c__8277__auto___50547);

return statearr_50545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__50566 = arguments.length;
switch (G__50566) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8277__auto___50644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_50611){
var state_val_50612 = (state_50611[(1)]);
if((state_val_50612 === (7))){
var inst_50607 = (state_50611[(2)]);
var state_50611__$1 = state_50611;
var statearr_50613_50645 = state_50611__$1;
(statearr_50613_50645[(2)] = inst_50607);

(statearr_50613_50645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50612 === (1))){
var inst_50567 = [];
var inst_50568 = inst_50567;
var inst_50569 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_50611__$1 = (function (){var statearr_50614 = state_50611;
(statearr_50614[(7)] = inst_50568);

(statearr_50614[(8)] = inst_50569);

return statearr_50614;
})();
var statearr_50615_50646 = state_50611__$1;
(statearr_50615_50646[(2)] = null);

(statearr_50615_50646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50612 === (4))){
var inst_50572 = (state_50611[(9)]);
var inst_50572__$1 = (state_50611[(2)]);
var inst_50573 = (inst_50572__$1 == null);
var inst_50574 = cljs.core.not.call(null,inst_50573);
var state_50611__$1 = (function (){var statearr_50616 = state_50611;
(statearr_50616[(9)] = inst_50572__$1);

return statearr_50616;
})();
if(inst_50574){
var statearr_50617_50647 = state_50611__$1;
(statearr_50617_50647[(1)] = (5));

} else {
var statearr_50618_50648 = state_50611__$1;
(statearr_50618_50648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50612 === (15))){
var inst_50568 = (state_50611[(7)]);
var inst_50599 = cljs.core.vec.call(null,inst_50568);
var state_50611__$1 = state_50611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50611__$1,(18),out,inst_50599);
} else {
if((state_val_50612 === (13))){
var inst_50594 = (state_50611[(2)]);
var state_50611__$1 = state_50611;
var statearr_50619_50649 = state_50611__$1;
(statearr_50619_50649[(2)] = inst_50594);

(statearr_50619_50649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50612 === (6))){
var inst_50568 = (state_50611[(7)]);
var inst_50596 = inst_50568.length;
var inst_50597 = (inst_50596 > (0));
var state_50611__$1 = state_50611;
if(cljs.core.truth_(inst_50597)){
var statearr_50620_50650 = state_50611__$1;
(statearr_50620_50650[(1)] = (15));

} else {
var statearr_50621_50651 = state_50611__$1;
(statearr_50621_50651[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50612 === (17))){
var inst_50604 = (state_50611[(2)]);
var inst_50605 = cljs.core.async.close_BANG_.call(null,out);
var state_50611__$1 = (function (){var statearr_50622 = state_50611;
(statearr_50622[(10)] = inst_50604);

return statearr_50622;
})();
var statearr_50623_50652 = state_50611__$1;
(statearr_50623_50652[(2)] = inst_50605);

(statearr_50623_50652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50612 === (3))){
var inst_50609 = (state_50611[(2)]);
var state_50611__$1 = state_50611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50611__$1,inst_50609);
} else {
if((state_val_50612 === (12))){
var inst_50568 = (state_50611[(7)]);
var inst_50587 = cljs.core.vec.call(null,inst_50568);
var state_50611__$1 = state_50611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50611__$1,(14),out,inst_50587);
} else {
if((state_val_50612 === (2))){
var state_50611__$1 = state_50611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50611__$1,(4),ch);
} else {
if((state_val_50612 === (11))){
var inst_50568 = (state_50611[(7)]);
var inst_50572 = (state_50611[(9)]);
var inst_50576 = (state_50611[(11)]);
var inst_50584 = inst_50568.push(inst_50572);
var tmp50624 = inst_50568;
var inst_50568__$1 = tmp50624;
var inst_50569 = inst_50576;
var state_50611__$1 = (function (){var statearr_50625 = state_50611;
(statearr_50625[(12)] = inst_50584);

(statearr_50625[(7)] = inst_50568__$1);

(statearr_50625[(8)] = inst_50569);

return statearr_50625;
})();
var statearr_50626_50653 = state_50611__$1;
(statearr_50626_50653[(2)] = null);

(statearr_50626_50653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50612 === (9))){
var inst_50569 = (state_50611[(8)]);
var inst_50580 = cljs.core.keyword_identical_QMARK_.call(null,inst_50569,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_50611__$1 = state_50611;
var statearr_50627_50654 = state_50611__$1;
(statearr_50627_50654[(2)] = inst_50580);

(statearr_50627_50654[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50612 === (5))){
var inst_50572 = (state_50611[(9)]);
var inst_50576 = (state_50611[(11)]);
var inst_50569 = (state_50611[(8)]);
var inst_50577 = (state_50611[(13)]);
var inst_50576__$1 = f.call(null,inst_50572);
var inst_50577__$1 = cljs.core._EQ_.call(null,inst_50576__$1,inst_50569);
var state_50611__$1 = (function (){var statearr_50628 = state_50611;
(statearr_50628[(11)] = inst_50576__$1);

(statearr_50628[(13)] = inst_50577__$1);

return statearr_50628;
})();
if(inst_50577__$1){
var statearr_50629_50655 = state_50611__$1;
(statearr_50629_50655[(1)] = (8));

} else {
var statearr_50630_50656 = state_50611__$1;
(statearr_50630_50656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50612 === (14))){
var inst_50572 = (state_50611[(9)]);
var inst_50576 = (state_50611[(11)]);
var inst_50589 = (state_50611[(2)]);
var inst_50590 = [];
var inst_50591 = inst_50590.push(inst_50572);
var inst_50568 = inst_50590;
var inst_50569 = inst_50576;
var state_50611__$1 = (function (){var statearr_50631 = state_50611;
(statearr_50631[(14)] = inst_50589);

(statearr_50631[(15)] = inst_50591);

(statearr_50631[(7)] = inst_50568);

(statearr_50631[(8)] = inst_50569);

return statearr_50631;
})();
var statearr_50632_50657 = state_50611__$1;
(statearr_50632_50657[(2)] = null);

(statearr_50632_50657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50612 === (16))){
var state_50611__$1 = state_50611;
var statearr_50633_50658 = state_50611__$1;
(statearr_50633_50658[(2)] = null);

(statearr_50633_50658[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50612 === (10))){
var inst_50582 = (state_50611[(2)]);
var state_50611__$1 = state_50611;
if(cljs.core.truth_(inst_50582)){
var statearr_50634_50659 = state_50611__$1;
(statearr_50634_50659[(1)] = (11));

} else {
var statearr_50635_50660 = state_50611__$1;
(statearr_50635_50660[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50612 === (18))){
var inst_50601 = (state_50611[(2)]);
var state_50611__$1 = state_50611;
var statearr_50636_50661 = state_50611__$1;
(statearr_50636_50661[(2)] = inst_50601);

(statearr_50636_50661[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50612 === (8))){
var inst_50577 = (state_50611[(13)]);
var state_50611__$1 = state_50611;
var statearr_50637_50662 = state_50611__$1;
(statearr_50637_50662[(2)] = inst_50577);

(statearr_50637_50662[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2332__auto__ = null;
var cljs$core$async$state_machine__2332__auto____0 = (function (){
var statearr_50638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50638[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_50638[(1)] = (1));

return statearr_50638;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_50611){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_50611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e50639){var ex__2335__auto__ = e50639;
var statearr_50640_50663 = state_50611;
(statearr_50640_50663[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_50611[(4)]))){
var statearr_50641_50664 = state_50611;
(statearr_50641_50664[(1)] = cljs.core.first.call(null,(state_50611[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50665 = state_50611;
state_50611 = G__50665;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_50611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_50611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_50642 = f__8278__auto__.call(null);
(statearr_50642[(6)] = c__8277__auto___50644);

return statearr_50642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
