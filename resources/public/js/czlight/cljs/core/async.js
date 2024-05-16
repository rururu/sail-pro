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
var G__18472 = arguments.length;
switch (G__18472) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18473 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18473 = (function (f,blockable,meta18474){
this.f = f;
this.blockable = blockable;
this.meta18474 = meta18474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18475,meta18474__$1){
var self__ = this;
var _18475__$1 = this;
return (new cljs.core.async.t_cljs$core$async18473(self__.f,self__.blockable,meta18474__$1));
}));

(cljs.core.async.t_cljs$core$async18473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18475){
var self__ = this;
var _18475__$1 = this;
return self__.meta18474;
}));

(cljs.core.async.t_cljs$core$async18473.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18473.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18473.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async18473.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async18473.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18474","meta18474",834170165,null)], null);
}));

(cljs.core.async.t_cljs$core$async18473.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18473.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18473");

(cljs.core.async.t_cljs$core$async18473.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async18473");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18473.
 */
cljs.core.async.__GT_t_cljs$core$async18473 = (function cljs$core$async$__GT_t_cljs$core$async18473(f__$1,blockable__$1,meta18474){
return (new cljs.core.async.t_cljs$core$async18473(f__$1,blockable__$1,meta18474));
});

}

return (new cljs.core.async.t_cljs$core$async18473(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18479 = arguments.length;
switch (G__18479) {
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
var G__18482 = arguments.length;
switch (G__18482) {
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
var G__18485 = arguments.length;
switch (G__18485) {
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
var val_18487 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18487);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_18487);
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
var G__18489 = arguments.length;
switch (G__18489) {
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
var n__5593__auto___18491 = n;
var x_18492 = (0);
while(true){
if((x_18492 < n__5593__auto___18491)){
(a[x_18492] = x_18492);

var G__18493 = (x_18492 + (1));
x_18492 = G__18493;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18494 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18494 = (function (flag,meta18495){
this.flag = flag;
this.meta18495 = meta18495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18496,meta18495__$1){
var self__ = this;
var _18496__$1 = this;
return (new cljs.core.async.t_cljs$core$async18494(self__.flag,meta18495__$1));
}));

(cljs.core.async.t_cljs$core$async18494.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18496){
var self__ = this;
var _18496__$1 = this;
return self__.meta18495;
}));

(cljs.core.async.t_cljs$core$async18494.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18494.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async18494.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18494.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18494.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18495","meta18495",441449414,null)], null);
}));

(cljs.core.async.t_cljs$core$async18494.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18494.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18494");

(cljs.core.async.t_cljs$core$async18494.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async18494");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18494.
 */
cljs.core.async.__GT_t_cljs$core$async18494 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18494(flag__$1,meta18495){
return (new cljs.core.async.t_cljs$core$async18494(flag__$1,meta18495));
});

}

return (new cljs.core.async.t_cljs$core$async18494(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18497 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18497 = (function (flag,cb,meta18498){
this.flag = flag;
this.cb = cb;
this.meta18498 = meta18498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18499,meta18498__$1){
var self__ = this;
var _18499__$1 = this;
return (new cljs.core.async.t_cljs$core$async18497(self__.flag,self__.cb,meta18498__$1));
}));

(cljs.core.async.t_cljs$core$async18497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18499){
var self__ = this;
var _18499__$1 = this;
return self__.meta18498;
}));

(cljs.core.async.t_cljs$core$async18497.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18497.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async18497.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18497.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18498","meta18498",1218853429,null)], null);
}));

(cljs.core.async.t_cljs$core$async18497.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18497.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18497");

(cljs.core.async.t_cljs$core$async18497.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async18497");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18497.
 */
cljs.core.async.__GT_t_cljs$core$async18497 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18497(flag__$1,cb__$1,meta18498){
return (new cljs.core.async.t_cljs$core$async18497(flag__$1,cb__$1,meta18498));
});

}

return (new cljs.core.async.t_cljs$core$async18497(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__18500_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18500_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__18501_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18501_SHARP_,port], null));
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
var G__18502 = (i + (1));
i = G__18502;
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
var len__5726__auto___18507 = arguments.length;
var i__5727__auto___18508 = (0);
while(true){
if((i__5727__auto___18508 < len__5726__auto___18507)){
args__5732__auto__.push((arguments[i__5727__auto___18508]));

var G__18509 = (i__5727__auto___18508 + (1));
i__5727__auto___18508 = G__18509;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18505){
var map__18506 = p__18505;
var map__18506__$1 = cljs.core.__destructure_map.call(null,map__18506);
var opts = map__18506__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18503){
var G__18504 = cljs.core.first.call(null,seq18503);
var seq18503__$1 = cljs.core.next.call(null,seq18503);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18504,seq18503__$1);
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
var G__18511 = arguments.length;
switch (G__18511) {
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
var c__16539__auto___18558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16540__auto__ = (function (){var switch__2331__auto__ = (function (state_18535){
var state_val_18536 = (state_18535[(1)]);
if((state_val_18536 === (7))){
var inst_18531 = (state_18535[(2)]);
var state_18535__$1 = state_18535;
var statearr_18537_18559 = state_18535__$1;
(statearr_18537_18559[(2)] = inst_18531);

(statearr_18537_18559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (1))){
var state_18535__$1 = state_18535;
var statearr_18538_18560 = state_18535__$1;
(statearr_18538_18560[(2)] = null);

(statearr_18538_18560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (4))){
var inst_18514 = (state_18535[(7)]);
var inst_18514__$1 = (state_18535[(2)]);
var inst_18515 = (inst_18514__$1 == null);
var state_18535__$1 = (function (){var statearr_18539 = state_18535;
(statearr_18539[(7)] = inst_18514__$1);

return statearr_18539;
})();
if(cljs.core.truth_(inst_18515)){
var statearr_18540_18561 = state_18535__$1;
(statearr_18540_18561[(1)] = (5));

} else {
var statearr_18541_18562 = state_18535__$1;
(statearr_18541_18562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (13))){
var state_18535__$1 = state_18535;
var statearr_18542_18563 = state_18535__$1;
(statearr_18542_18563[(2)] = null);

(statearr_18542_18563[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (6))){
var inst_18514 = (state_18535[(7)]);
var state_18535__$1 = state_18535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18535__$1,(11),to,inst_18514);
} else {
if((state_val_18536 === (3))){
var inst_18533 = (state_18535[(2)]);
var state_18535__$1 = state_18535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18535__$1,inst_18533);
} else {
if((state_val_18536 === (12))){
var state_18535__$1 = state_18535;
var statearr_18543_18564 = state_18535__$1;
(statearr_18543_18564[(2)] = null);

(statearr_18543_18564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (2))){
var state_18535__$1 = state_18535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18535__$1,(4),from);
} else {
if((state_val_18536 === (11))){
var inst_18524 = (state_18535[(2)]);
var state_18535__$1 = state_18535;
if(cljs.core.truth_(inst_18524)){
var statearr_18544_18565 = state_18535__$1;
(statearr_18544_18565[(1)] = (12));

} else {
var statearr_18545_18566 = state_18535__$1;
(statearr_18545_18566[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (9))){
var state_18535__$1 = state_18535;
var statearr_18546_18567 = state_18535__$1;
(statearr_18546_18567[(2)] = null);

(statearr_18546_18567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (5))){
var state_18535__$1 = state_18535;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18547_18568 = state_18535__$1;
(statearr_18547_18568[(1)] = (8));

} else {
var statearr_18548_18569 = state_18535__$1;
(statearr_18548_18569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (14))){
var inst_18529 = (state_18535[(2)]);
var state_18535__$1 = state_18535;
var statearr_18549_18570 = state_18535__$1;
(statearr_18549_18570[(2)] = inst_18529);

(statearr_18549_18570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (10))){
var inst_18521 = (state_18535[(2)]);
var state_18535__$1 = state_18535;
var statearr_18550_18571 = state_18535__$1;
(statearr_18550_18571[(2)] = inst_18521);

(statearr_18550_18571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18536 === (8))){
var inst_18518 = cljs.core.async.close_BANG_.call(null,to);
var state_18535__$1 = state_18535;
var statearr_18551_18572 = state_18535__$1;
(statearr_18551_18572[(2)] = inst_18518);

(statearr_18551_18572[(1)] = (10));


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
var statearr_18552 = [null,null,null,null,null,null,null,null];
(statearr_18552[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_18552[(1)] = (1));

return statearr_18552;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_18535){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_18535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e18553){var ex__2335__auto__ = e18553;
var statearr_18554_18573 = state_18535;
(statearr_18554_18573[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_18535[(4)]))){
var statearr_18555_18574 = state_18535;
(statearr_18555_18574[(1)] = cljs.core.first.call(null,(state_18535[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18575 = state_18535;
state_18535 = G__18575;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_18535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_18535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__16541__auto__ = (function (){var statearr_18556 = f__16540__auto__.call(null);
(statearr_18556[(6)] = c__16539__auto___18558);

return statearr_18556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16541__auto__);
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
var process__$1 = (function (p__18576){
var vec__18577 = p__18576;
var v = cljs.core.nth.call(null,vec__18577,(0),null);
var p = cljs.core.nth.call(null,vec__18577,(1),null);
var job = vec__18577;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__16539__auto___18753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16540__auto__ = (function (){var switch__2331__auto__ = (function (state_18584){
var state_val_18585 = (state_18584[(1)]);
if((state_val_18585 === (1))){
var state_18584__$1 = state_18584;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18584__$1,(2),res,v);
} else {
if((state_val_18585 === (2))){
var inst_18581 = (state_18584[(2)]);
var inst_18582 = cljs.core.async.close_BANG_.call(null,res);
var state_18584__$1 = (function (){var statearr_18586 = state_18584;
(statearr_18586[(7)] = inst_18581);

return statearr_18586;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18584__$1,inst_18582);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0 = (function (){
var statearr_18587 = [null,null,null,null,null,null,null,null];
(statearr_18587[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__);

(statearr_18587[(1)] = (1));

return statearr_18587;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1 = (function (state_18584){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_18584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e18588){var ex__2335__auto__ = e18588;
var statearr_18589_18754 = state_18584;
(statearr_18589_18754[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_18584[(4)]))){
var statearr_18590_18755 = state_18584;
(statearr_18590_18755[(1)] = cljs.core.first.call(null,(state_18584[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18756 = state_18584;
state_18584 = G__18756;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__ = function(state_18584){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1.call(this,state_18584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__;
})()
})();
var state__16541__auto__ = (function (){var statearr_18591 = f__16540__auto__.call(null);
(statearr_18591[(6)] = c__16539__auto___18753);

return statearr_18591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16541__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__18592){
var vec__18593 = p__18592;
var v = cljs.core.nth.call(null,vec__18593,(0),null);
var p = cljs.core.nth.call(null,vec__18593,(1),null);
var job = vec__18593;
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
var n__5593__auto___18757 = n;
var __18758 = (0);
while(true){
if((__18758 < n__5593__auto___18757)){
var G__18596_18759 = type;
var G__18596_18760__$1 = (((G__18596_18759 instanceof cljs.core.Keyword))?G__18596_18759.fqn:null);
switch (G__18596_18760__$1) {
case "compute":
var c__16539__auto___18762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18758,c__16539__auto___18762,G__18596_18759,G__18596_18760__$1,n__5593__auto___18757,jobs,results,process__$1,async){
return (function (){
var f__16540__auto__ = (function (){var switch__2331__auto__ = ((function (__18758,c__16539__auto___18762,G__18596_18759,G__18596_18760__$1,n__5593__auto___18757,jobs,results,process__$1,async){
return (function (state_18609){
var state_val_18610 = (state_18609[(1)]);
if((state_val_18610 === (1))){
var state_18609__$1 = state_18609;
var statearr_18611_18763 = state_18609__$1;
(statearr_18611_18763[(2)] = null);

(statearr_18611_18763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (2))){
var state_18609__$1 = state_18609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18609__$1,(4),jobs);
} else {
if((state_val_18610 === (3))){
var inst_18607 = (state_18609[(2)]);
var state_18609__$1 = state_18609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18609__$1,inst_18607);
} else {
if((state_val_18610 === (4))){
var inst_18599 = (state_18609[(2)]);
var inst_18600 = process__$1.call(null,inst_18599);
var state_18609__$1 = state_18609;
if(cljs.core.truth_(inst_18600)){
var statearr_18612_18764 = state_18609__$1;
(statearr_18612_18764[(1)] = (5));

} else {
var statearr_18613_18765 = state_18609__$1;
(statearr_18613_18765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (5))){
var state_18609__$1 = state_18609;
var statearr_18614_18766 = state_18609__$1;
(statearr_18614_18766[(2)] = null);

(statearr_18614_18766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (6))){
var state_18609__$1 = state_18609;
var statearr_18615_18767 = state_18609__$1;
(statearr_18615_18767[(2)] = null);

(statearr_18615_18767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (7))){
var inst_18605 = (state_18609[(2)]);
var state_18609__$1 = state_18609;
var statearr_18616_18768 = state_18609__$1;
(statearr_18616_18768[(2)] = inst_18605);

(statearr_18616_18768[(1)] = (3));


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
});})(__18758,c__16539__auto___18762,G__18596_18759,G__18596_18760__$1,n__5593__auto___18757,jobs,results,process__$1,async))
;
return ((function (__18758,switch__2331__auto__,c__16539__auto___18762,G__18596_18759,G__18596_18760__$1,n__5593__auto___18757,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0 = (function (){
var statearr_18617 = [null,null,null,null,null,null,null];
(statearr_18617[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__);

(statearr_18617[(1)] = (1));

return statearr_18617;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1 = (function (state_18609){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_18609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e18618){var ex__2335__auto__ = e18618;
var statearr_18619_18769 = state_18609;
(statearr_18619_18769[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_18609[(4)]))){
var statearr_18620_18770 = state_18609;
(statearr_18620_18770[(1)] = cljs.core.first.call(null,(state_18609[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18771 = state_18609;
state_18609 = G__18771;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__ = function(state_18609){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1.call(this,state_18609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__;
})()
;})(__18758,switch__2331__auto__,c__16539__auto___18762,G__18596_18759,G__18596_18760__$1,n__5593__auto___18757,jobs,results,process__$1,async))
})();
var state__16541__auto__ = (function (){var statearr_18621 = f__16540__auto__.call(null);
(statearr_18621[(6)] = c__16539__auto___18762);

return statearr_18621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16541__auto__);
});})(__18758,c__16539__auto___18762,G__18596_18759,G__18596_18760__$1,n__5593__auto___18757,jobs,results,process__$1,async))
);


break;
case "async":
var c__16539__auto___18772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18758,c__16539__auto___18772,G__18596_18759,G__18596_18760__$1,n__5593__auto___18757,jobs,results,process__$1,async){
return (function (){
var f__16540__auto__ = (function (){var switch__2331__auto__ = ((function (__18758,c__16539__auto___18772,G__18596_18759,G__18596_18760__$1,n__5593__auto___18757,jobs,results,process__$1,async){
return (function (state_18634){
var state_val_18635 = (state_18634[(1)]);
if((state_val_18635 === (1))){
var state_18634__$1 = state_18634;
var statearr_18636_18773 = state_18634__$1;
(statearr_18636_18773[(2)] = null);

(statearr_18636_18773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (2))){
var state_18634__$1 = state_18634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18634__$1,(4),jobs);
} else {
if((state_val_18635 === (3))){
var inst_18632 = (state_18634[(2)]);
var state_18634__$1 = state_18634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18634__$1,inst_18632);
} else {
if((state_val_18635 === (4))){
var inst_18624 = (state_18634[(2)]);
var inst_18625 = async.call(null,inst_18624);
var state_18634__$1 = state_18634;
if(cljs.core.truth_(inst_18625)){
var statearr_18637_18774 = state_18634__$1;
(statearr_18637_18774[(1)] = (5));

} else {
var statearr_18638_18775 = state_18634__$1;
(statearr_18638_18775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (5))){
var state_18634__$1 = state_18634;
var statearr_18639_18776 = state_18634__$1;
(statearr_18639_18776[(2)] = null);

(statearr_18639_18776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (6))){
var state_18634__$1 = state_18634;
var statearr_18640_18777 = state_18634__$1;
(statearr_18640_18777[(2)] = null);

(statearr_18640_18777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (7))){
var inst_18630 = (state_18634[(2)]);
var state_18634__$1 = state_18634;
var statearr_18641_18778 = state_18634__$1;
(statearr_18641_18778[(2)] = inst_18630);

(statearr_18641_18778[(1)] = (3));


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
});})(__18758,c__16539__auto___18772,G__18596_18759,G__18596_18760__$1,n__5593__auto___18757,jobs,results,process__$1,async))
;
return ((function (__18758,switch__2331__auto__,c__16539__auto___18772,G__18596_18759,G__18596_18760__$1,n__5593__auto___18757,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0 = (function (){
var statearr_18642 = [null,null,null,null,null,null,null];
(statearr_18642[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__);

(statearr_18642[(1)] = (1));

return statearr_18642;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1 = (function (state_18634){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_18634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e18643){var ex__2335__auto__ = e18643;
var statearr_18644_18779 = state_18634;
(statearr_18644_18779[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_18634[(4)]))){
var statearr_18645_18780 = state_18634;
(statearr_18645_18780[(1)] = cljs.core.first.call(null,(state_18634[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18781 = state_18634;
state_18634 = G__18781;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__ = function(state_18634){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1.call(this,state_18634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__;
})()
;})(__18758,switch__2331__auto__,c__16539__auto___18772,G__18596_18759,G__18596_18760__$1,n__5593__auto___18757,jobs,results,process__$1,async))
})();
var state__16541__auto__ = (function (){var statearr_18646 = f__16540__auto__.call(null);
(statearr_18646[(6)] = c__16539__auto___18772);

return statearr_18646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16541__auto__);
});})(__18758,c__16539__auto___18772,G__18596_18759,G__18596_18760__$1,n__5593__auto___18757,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18596_18760__$1)].join('')));

}

var G__18782 = (__18758 + (1));
__18758 = G__18782;
continue;
} else {
}
break;
}

var c__16539__auto___18783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16540__auto__ = (function (){var switch__2331__auto__ = (function (state_18668){
var state_val_18669 = (state_18668[(1)]);
if((state_val_18669 === (7))){
var inst_18664 = (state_18668[(2)]);
var state_18668__$1 = state_18668;
var statearr_18670_18784 = state_18668__$1;
(statearr_18670_18784[(2)] = inst_18664);

(statearr_18670_18784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18669 === (1))){
var state_18668__$1 = state_18668;
var statearr_18671_18785 = state_18668__$1;
(statearr_18671_18785[(2)] = null);

(statearr_18671_18785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18669 === (4))){
var inst_18649 = (state_18668[(7)]);
var inst_18649__$1 = (state_18668[(2)]);
var inst_18650 = (inst_18649__$1 == null);
var state_18668__$1 = (function (){var statearr_18672 = state_18668;
(statearr_18672[(7)] = inst_18649__$1);

return statearr_18672;
})();
if(cljs.core.truth_(inst_18650)){
var statearr_18673_18786 = state_18668__$1;
(statearr_18673_18786[(1)] = (5));

} else {
var statearr_18674_18787 = state_18668__$1;
(statearr_18674_18787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18669 === (6))){
var inst_18649 = (state_18668[(7)]);
var inst_18654 = (state_18668[(8)]);
var inst_18654__$1 = cljs.core.async.chan.call(null,(1));
var inst_18655 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18656 = [inst_18649,inst_18654__$1];
var inst_18657 = (new cljs.core.PersistentVector(null,2,(5),inst_18655,inst_18656,null));
var state_18668__$1 = (function (){var statearr_18675 = state_18668;
(statearr_18675[(8)] = inst_18654__$1);

return statearr_18675;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18668__$1,(8),jobs,inst_18657);
} else {
if((state_val_18669 === (3))){
var inst_18666 = (state_18668[(2)]);
var state_18668__$1 = state_18668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18668__$1,inst_18666);
} else {
if((state_val_18669 === (2))){
var state_18668__$1 = state_18668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18668__$1,(4),from);
} else {
if((state_val_18669 === (9))){
var inst_18661 = (state_18668[(2)]);
var state_18668__$1 = (function (){var statearr_18676 = state_18668;
(statearr_18676[(9)] = inst_18661);

return statearr_18676;
})();
var statearr_18677_18788 = state_18668__$1;
(statearr_18677_18788[(2)] = null);

(statearr_18677_18788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18669 === (5))){
var inst_18652 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18668__$1 = state_18668;
var statearr_18678_18789 = state_18668__$1;
(statearr_18678_18789[(2)] = inst_18652);

(statearr_18678_18789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18669 === (8))){
var inst_18654 = (state_18668[(8)]);
var inst_18659 = (state_18668[(2)]);
var state_18668__$1 = (function (){var statearr_18679 = state_18668;
(statearr_18679[(10)] = inst_18659);

return statearr_18679;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18668__$1,(9),results,inst_18654);
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
var statearr_18680 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18680[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__);

(statearr_18680[(1)] = (1));

return statearr_18680;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1 = (function (state_18668){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_18668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e18681){var ex__2335__auto__ = e18681;
var statearr_18682_18790 = state_18668;
(statearr_18682_18790[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_18668[(4)]))){
var statearr_18683_18791 = state_18668;
(statearr_18683_18791[(1)] = cljs.core.first.call(null,(state_18668[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18792 = state_18668;
state_18668 = G__18792;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__ = function(state_18668){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1.call(this,state_18668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__;
})()
})();
var state__16541__auto__ = (function (){var statearr_18684 = f__16540__auto__.call(null);
(statearr_18684[(6)] = c__16539__auto___18783);

return statearr_18684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16541__auto__);
}));


var c__16539__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16540__auto__ = (function (){var switch__2331__auto__ = (function (state_18722){
var state_val_18723 = (state_18722[(1)]);
if((state_val_18723 === (7))){
var inst_18718 = (state_18722[(2)]);
var state_18722__$1 = state_18722;
var statearr_18724_18793 = state_18722__$1;
(statearr_18724_18793[(2)] = inst_18718);

(statearr_18724_18793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18723 === (20))){
var state_18722__$1 = state_18722;
var statearr_18725_18794 = state_18722__$1;
(statearr_18725_18794[(2)] = null);

(statearr_18725_18794[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18723 === (1))){
var state_18722__$1 = state_18722;
var statearr_18726_18795 = state_18722__$1;
(statearr_18726_18795[(2)] = null);

(statearr_18726_18795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18723 === (4))){
var inst_18687 = (state_18722[(7)]);
var inst_18687__$1 = (state_18722[(2)]);
var inst_18688 = (inst_18687__$1 == null);
var state_18722__$1 = (function (){var statearr_18727 = state_18722;
(statearr_18727[(7)] = inst_18687__$1);

return statearr_18727;
})();
if(cljs.core.truth_(inst_18688)){
var statearr_18728_18796 = state_18722__$1;
(statearr_18728_18796[(1)] = (5));

} else {
var statearr_18729_18797 = state_18722__$1;
(statearr_18729_18797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18723 === (15))){
var inst_18700 = (state_18722[(8)]);
var state_18722__$1 = state_18722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18722__$1,(18),to,inst_18700);
} else {
if((state_val_18723 === (21))){
var inst_18713 = (state_18722[(2)]);
var state_18722__$1 = state_18722;
var statearr_18730_18798 = state_18722__$1;
(statearr_18730_18798[(2)] = inst_18713);

(statearr_18730_18798[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18723 === (13))){
var inst_18715 = (state_18722[(2)]);
var state_18722__$1 = (function (){var statearr_18731 = state_18722;
(statearr_18731[(9)] = inst_18715);

return statearr_18731;
})();
var statearr_18732_18799 = state_18722__$1;
(statearr_18732_18799[(2)] = null);

(statearr_18732_18799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18723 === (6))){
var inst_18687 = (state_18722[(7)]);
var state_18722__$1 = state_18722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18722__$1,(11),inst_18687);
} else {
if((state_val_18723 === (17))){
var inst_18708 = (state_18722[(2)]);
var state_18722__$1 = state_18722;
if(cljs.core.truth_(inst_18708)){
var statearr_18733_18800 = state_18722__$1;
(statearr_18733_18800[(1)] = (19));

} else {
var statearr_18734_18801 = state_18722__$1;
(statearr_18734_18801[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18723 === (3))){
var inst_18720 = (state_18722[(2)]);
var state_18722__$1 = state_18722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18722__$1,inst_18720);
} else {
if((state_val_18723 === (12))){
var inst_18697 = (state_18722[(10)]);
var state_18722__$1 = state_18722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18722__$1,(14),inst_18697);
} else {
if((state_val_18723 === (2))){
var state_18722__$1 = state_18722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18722__$1,(4),results);
} else {
if((state_val_18723 === (19))){
var state_18722__$1 = state_18722;
var statearr_18735_18802 = state_18722__$1;
(statearr_18735_18802[(2)] = null);

(statearr_18735_18802[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18723 === (11))){
var inst_18697 = (state_18722[(2)]);
var state_18722__$1 = (function (){var statearr_18736 = state_18722;
(statearr_18736[(10)] = inst_18697);

return statearr_18736;
})();
var statearr_18737_18803 = state_18722__$1;
(statearr_18737_18803[(2)] = null);

(statearr_18737_18803[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18723 === (9))){
var state_18722__$1 = state_18722;
var statearr_18738_18804 = state_18722__$1;
(statearr_18738_18804[(2)] = null);

(statearr_18738_18804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18723 === (5))){
var state_18722__$1 = state_18722;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18739_18805 = state_18722__$1;
(statearr_18739_18805[(1)] = (8));

} else {
var statearr_18740_18806 = state_18722__$1;
(statearr_18740_18806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18723 === (14))){
var inst_18700 = (state_18722[(8)]);
var inst_18702 = (state_18722[(11)]);
var inst_18700__$1 = (state_18722[(2)]);
var inst_18701 = (inst_18700__$1 == null);
var inst_18702__$1 = cljs.core.not.call(null,inst_18701);
var state_18722__$1 = (function (){var statearr_18741 = state_18722;
(statearr_18741[(8)] = inst_18700__$1);

(statearr_18741[(11)] = inst_18702__$1);

return statearr_18741;
})();
if(inst_18702__$1){
var statearr_18742_18807 = state_18722__$1;
(statearr_18742_18807[(1)] = (15));

} else {
var statearr_18743_18808 = state_18722__$1;
(statearr_18743_18808[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18723 === (16))){
var inst_18702 = (state_18722[(11)]);
var state_18722__$1 = state_18722;
var statearr_18744_18809 = state_18722__$1;
(statearr_18744_18809[(2)] = inst_18702);

(statearr_18744_18809[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18723 === (10))){
var inst_18694 = (state_18722[(2)]);
var state_18722__$1 = state_18722;
var statearr_18745_18810 = state_18722__$1;
(statearr_18745_18810[(2)] = inst_18694);

(statearr_18745_18810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18723 === (18))){
var inst_18705 = (state_18722[(2)]);
var state_18722__$1 = state_18722;
var statearr_18746_18811 = state_18722__$1;
(statearr_18746_18811[(2)] = inst_18705);

(statearr_18746_18811[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18723 === (8))){
var inst_18691 = cljs.core.async.close_BANG_.call(null,to);
var state_18722__$1 = state_18722;
var statearr_18747_18812 = state_18722__$1;
(statearr_18747_18812[(2)] = inst_18691);

(statearr_18747_18812[(1)] = (10));


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
var statearr_18748 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18748[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__);

(statearr_18748[(1)] = (1));

return statearr_18748;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1 = (function (state_18722){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_18722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e18749){var ex__2335__auto__ = e18749;
var statearr_18750_18813 = state_18722;
(statearr_18750_18813[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_18722[(4)]))){
var statearr_18751_18814 = state_18722;
(statearr_18751_18814[(1)] = cljs.core.first.call(null,(state_18722[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18815 = state_18722;
state_18722 = G__18815;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__ = function(state_18722){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1.call(this,state_18722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__;
})()
})();
var state__16541__auto__ = (function (){var statearr_18752 = f__16540__auto__.call(null);
(statearr_18752[(6)] = c__16539__auto__);

return statearr_18752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16541__auto__);
}));

return c__16539__auto__;
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
var G__18817 = arguments.length;
switch (G__18817) {
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
var G__18820 = arguments.length;
switch (G__18820) {
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
var G__18823 = arguments.length;
switch (G__18823) {
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
var c__16539__auto___18873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16540__auto__ = (function (){var switch__2331__auto__ = (function (state_18849){
var state_val_18850 = (state_18849[(1)]);
if((state_val_18850 === (7))){
var inst_18845 = (state_18849[(2)]);
var state_18849__$1 = state_18849;
var statearr_18851_18874 = state_18849__$1;
(statearr_18851_18874[(2)] = inst_18845);

(statearr_18851_18874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18850 === (1))){
var state_18849__$1 = state_18849;
var statearr_18852_18875 = state_18849__$1;
(statearr_18852_18875[(2)] = null);

(statearr_18852_18875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18850 === (4))){
var inst_18826 = (state_18849[(7)]);
var inst_18826__$1 = (state_18849[(2)]);
var inst_18827 = (inst_18826__$1 == null);
var state_18849__$1 = (function (){var statearr_18853 = state_18849;
(statearr_18853[(7)] = inst_18826__$1);

return statearr_18853;
})();
if(cljs.core.truth_(inst_18827)){
var statearr_18854_18876 = state_18849__$1;
(statearr_18854_18876[(1)] = (5));

} else {
var statearr_18855_18877 = state_18849__$1;
(statearr_18855_18877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18850 === (13))){
var state_18849__$1 = state_18849;
var statearr_18856_18878 = state_18849__$1;
(statearr_18856_18878[(2)] = null);

(statearr_18856_18878[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18850 === (6))){
var inst_18826 = (state_18849[(7)]);
var inst_18832 = p.call(null,inst_18826);
var state_18849__$1 = state_18849;
if(cljs.core.truth_(inst_18832)){
var statearr_18857_18879 = state_18849__$1;
(statearr_18857_18879[(1)] = (9));

} else {
var statearr_18858_18880 = state_18849__$1;
(statearr_18858_18880[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18850 === (3))){
var inst_18847 = (state_18849[(2)]);
var state_18849__$1 = state_18849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18849__$1,inst_18847);
} else {
if((state_val_18850 === (12))){
var state_18849__$1 = state_18849;
var statearr_18859_18881 = state_18849__$1;
(statearr_18859_18881[(2)] = null);

(statearr_18859_18881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18850 === (2))){
var state_18849__$1 = state_18849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18849__$1,(4),ch);
} else {
if((state_val_18850 === (11))){
var inst_18826 = (state_18849[(7)]);
var inst_18836 = (state_18849[(2)]);
var state_18849__$1 = state_18849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18849__$1,(8),inst_18836,inst_18826);
} else {
if((state_val_18850 === (9))){
var state_18849__$1 = state_18849;
var statearr_18860_18882 = state_18849__$1;
(statearr_18860_18882[(2)] = tc);

(statearr_18860_18882[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18850 === (5))){
var inst_18829 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18830 = cljs.core.async.close_BANG_.call(null,fc);
var state_18849__$1 = (function (){var statearr_18861 = state_18849;
(statearr_18861[(8)] = inst_18829);

return statearr_18861;
})();
var statearr_18862_18883 = state_18849__$1;
(statearr_18862_18883[(2)] = inst_18830);

(statearr_18862_18883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18850 === (14))){
var inst_18843 = (state_18849[(2)]);
var state_18849__$1 = state_18849;
var statearr_18863_18884 = state_18849__$1;
(statearr_18863_18884[(2)] = inst_18843);

(statearr_18863_18884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18850 === (10))){
var state_18849__$1 = state_18849;
var statearr_18864_18885 = state_18849__$1;
(statearr_18864_18885[(2)] = fc);

(statearr_18864_18885[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18850 === (8))){
var inst_18838 = (state_18849[(2)]);
var state_18849__$1 = state_18849;
if(cljs.core.truth_(inst_18838)){
var statearr_18865_18886 = state_18849__$1;
(statearr_18865_18886[(1)] = (12));

} else {
var statearr_18866_18887 = state_18849__$1;
(statearr_18866_18887[(1)] = (13));

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
var statearr_18867 = [null,null,null,null,null,null,null,null,null];
(statearr_18867[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_18867[(1)] = (1));

return statearr_18867;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_18849){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_18849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e18868){var ex__2335__auto__ = e18868;
var statearr_18869_18888 = state_18849;
(statearr_18869_18888[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_18849[(4)]))){
var statearr_18870_18889 = state_18849;
(statearr_18870_18889[(1)] = cljs.core.first.call(null,(state_18849[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18890 = state_18849;
state_18849 = G__18890;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_18849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_18849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__16541__auto__ = (function (){var statearr_18871 = f__16540__auto__.call(null);
(statearr_18871[(6)] = c__16539__auto___18873);

return statearr_18871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16541__auto__);
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
var c__16539__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16540__auto__ = (function (){var switch__2331__auto__ = (function (state_18912){
var state_val_18913 = (state_18912[(1)]);
if((state_val_18913 === (7))){
var inst_18908 = (state_18912[(2)]);
var state_18912__$1 = state_18912;
var statearr_18914_18933 = state_18912__$1;
(statearr_18914_18933[(2)] = inst_18908);

(statearr_18914_18933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18913 === (1))){
var inst_18891 = init;
var inst_18892 = inst_18891;
var state_18912__$1 = (function (){var statearr_18915 = state_18912;
(statearr_18915[(7)] = inst_18892);

return statearr_18915;
})();
var statearr_18916_18934 = state_18912__$1;
(statearr_18916_18934[(2)] = null);

(statearr_18916_18934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18913 === (4))){
var inst_18895 = (state_18912[(8)]);
var inst_18895__$1 = (state_18912[(2)]);
var inst_18896 = (inst_18895__$1 == null);
var state_18912__$1 = (function (){var statearr_18917 = state_18912;
(statearr_18917[(8)] = inst_18895__$1);

return statearr_18917;
})();
if(cljs.core.truth_(inst_18896)){
var statearr_18918_18935 = state_18912__$1;
(statearr_18918_18935[(1)] = (5));

} else {
var statearr_18919_18936 = state_18912__$1;
(statearr_18919_18936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18913 === (6))){
var inst_18892 = (state_18912[(7)]);
var inst_18895 = (state_18912[(8)]);
var inst_18899 = (state_18912[(9)]);
var inst_18899__$1 = f.call(null,inst_18892,inst_18895);
var inst_18900 = cljs.core.reduced_QMARK_.call(null,inst_18899__$1);
var state_18912__$1 = (function (){var statearr_18920 = state_18912;
(statearr_18920[(9)] = inst_18899__$1);

return statearr_18920;
})();
if(inst_18900){
var statearr_18921_18937 = state_18912__$1;
(statearr_18921_18937[(1)] = (8));

} else {
var statearr_18922_18938 = state_18912__$1;
(statearr_18922_18938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18913 === (3))){
var inst_18910 = (state_18912[(2)]);
var state_18912__$1 = state_18912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18912__$1,inst_18910);
} else {
if((state_val_18913 === (2))){
var state_18912__$1 = state_18912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18912__$1,(4),ch);
} else {
if((state_val_18913 === (9))){
var inst_18899 = (state_18912[(9)]);
var inst_18892 = inst_18899;
var state_18912__$1 = (function (){var statearr_18923 = state_18912;
(statearr_18923[(7)] = inst_18892);

return statearr_18923;
})();
var statearr_18924_18939 = state_18912__$1;
(statearr_18924_18939[(2)] = null);

(statearr_18924_18939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18913 === (5))){
var inst_18892 = (state_18912[(7)]);
var state_18912__$1 = state_18912;
var statearr_18925_18940 = state_18912__$1;
(statearr_18925_18940[(2)] = inst_18892);

(statearr_18925_18940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18913 === (10))){
var inst_18906 = (state_18912[(2)]);
var state_18912__$1 = state_18912;
var statearr_18926_18941 = state_18912__$1;
(statearr_18926_18941[(2)] = inst_18906);

(statearr_18926_18941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18913 === (8))){
var inst_18899 = (state_18912[(9)]);
var inst_18902 = cljs.core.deref.call(null,inst_18899);
var state_18912__$1 = state_18912;
var statearr_18927_18942 = state_18912__$1;
(statearr_18927_18942[(2)] = inst_18902);

(statearr_18927_18942[(1)] = (10));


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
var statearr_18928 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18928[(0)] = cljs$core$async$reduce_$_state_machine__2332__auto__);

(statearr_18928[(1)] = (1));

return statearr_18928;
});
var cljs$core$async$reduce_$_state_machine__2332__auto____1 = (function (state_18912){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_18912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e18929){var ex__2335__auto__ = e18929;
var statearr_18930_18943 = state_18912;
(statearr_18930_18943[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_18912[(4)]))){
var statearr_18931_18944 = state_18912;
(statearr_18931_18944[(1)] = cljs.core.first.call(null,(state_18912[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18945 = state_18912;
state_18912 = G__18945;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__2332__auto__ = function(state_18912){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__2332__auto____1.call(this,state_18912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__2332__auto____0;
cljs$core$async$reduce_$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__2332__auto____1;
return cljs$core$async$reduce_$_state_machine__2332__auto__;
})()
})();
var state__16541__auto__ = (function (){var statearr_18932 = f__16540__auto__.call(null);
(statearr_18932[(6)] = c__16539__auto__);

return statearr_18932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16541__auto__);
}));

return c__16539__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__16539__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16540__auto__ = (function (){var switch__2331__auto__ = (function (state_18951){
var state_val_18952 = (state_18951[(1)]);
if((state_val_18952 === (1))){
var inst_18946 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_18951__$1 = state_18951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18951__$1,(2),inst_18946);
} else {
if((state_val_18952 === (2))){
var inst_18948 = (state_18951[(2)]);
var inst_18949 = f__$1.call(null,inst_18948);
var state_18951__$1 = state_18951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18951__$1,inst_18949);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__2332__auto__ = null;
var cljs$core$async$transduce_$_state_machine__2332__auto____0 = (function (){
var statearr_18953 = [null,null,null,null,null,null,null];
(statearr_18953[(0)] = cljs$core$async$transduce_$_state_machine__2332__auto__);

(statearr_18953[(1)] = (1));

return statearr_18953;
});
var cljs$core$async$transduce_$_state_machine__2332__auto____1 = (function (state_18951){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_18951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e18954){var ex__2335__auto__ = e18954;
var statearr_18955_18958 = state_18951;
(statearr_18955_18958[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_18951[(4)]))){
var statearr_18956_18959 = state_18951;
(statearr_18956_18959[(1)] = cljs.core.first.call(null,(state_18951[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18960 = state_18951;
state_18951 = G__18960;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__2332__auto__ = function(state_18951){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__2332__auto____1.call(this,state_18951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__2332__auto____0;
cljs$core$async$transduce_$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__2332__auto____1;
return cljs$core$async$transduce_$_state_machine__2332__auto__;
})()
})();
var state__16541__auto__ = (function (){var statearr_18957 = f__16540__auto__.call(null);
(statearr_18957[(6)] = c__16539__auto__);

return statearr_18957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16541__auto__);
}));

return c__16539__auto__;
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
var G__18962 = arguments.length;
switch (G__18962) {
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
var c__16539__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16540__auto__ = (function (){var switch__2331__auto__ = (function (state_18987){
var state_val_18988 = (state_18987[(1)]);
if((state_val_18988 === (7))){
var inst_18969 = (state_18987[(2)]);
var state_18987__$1 = state_18987;
var statearr_18989_19011 = state_18987__$1;
(statearr_18989_19011[(2)] = inst_18969);

(statearr_18989_19011[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18988 === (1))){
var inst_18963 = cljs.core.seq.call(null,coll);
var inst_18964 = inst_18963;
var state_18987__$1 = (function (){var statearr_18990 = state_18987;
(statearr_18990[(7)] = inst_18964);

return statearr_18990;
})();
var statearr_18991_19012 = state_18987__$1;
(statearr_18991_19012[(2)] = null);

(statearr_18991_19012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18988 === (4))){
var inst_18964 = (state_18987[(7)]);
var inst_18967 = cljs.core.first.call(null,inst_18964);
var state_18987__$1 = state_18987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18987__$1,(7),ch,inst_18967);
} else {
if((state_val_18988 === (13))){
var inst_18981 = (state_18987[(2)]);
var state_18987__$1 = state_18987;
var statearr_18992_19013 = state_18987__$1;
(statearr_18992_19013[(2)] = inst_18981);

(statearr_18992_19013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18988 === (6))){
var inst_18972 = (state_18987[(2)]);
var state_18987__$1 = state_18987;
if(cljs.core.truth_(inst_18972)){
var statearr_18993_19014 = state_18987__$1;
(statearr_18993_19014[(1)] = (8));

} else {
var statearr_18994_19015 = state_18987__$1;
(statearr_18994_19015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18988 === (3))){
var inst_18985 = (state_18987[(2)]);
var state_18987__$1 = state_18987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18987__$1,inst_18985);
} else {
if((state_val_18988 === (12))){
var state_18987__$1 = state_18987;
var statearr_18995_19016 = state_18987__$1;
(statearr_18995_19016[(2)] = null);

(statearr_18995_19016[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18988 === (2))){
var inst_18964 = (state_18987[(7)]);
var state_18987__$1 = state_18987;
if(cljs.core.truth_(inst_18964)){
var statearr_18996_19017 = state_18987__$1;
(statearr_18996_19017[(1)] = (4));

} else {
var statearr_18997_19018 = state_18987__$1;
(statearr_18997_19018[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18988 === (11))){
var inst_18978 = cljs.core.async.close_BANG_.call(null,ch);
var state_18987__$1 = state_18987;
var statearr_18998_19019 = state_18987__$1;
(statearr_18998_19019[(2)] = inst_18978);

(statearr_18998_19019[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18988 === (9))){
var state_18987__$1 = state_18987;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18999_19020 = state_18987__$1;
(statearr_18999_19020[(1)] = (11));

} else {
var statearr_19000_19021 = state_18987__$1;
(statearr_19000_19021[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18988 === (5))){
var inst_18964 = (state_18987[(7)]);
var state_18987__$1 = state_18987;
var statearr_19001_19022 = state_18987__$1;
(statearr_19001_19022[(2)] = inst_18964);

(statearr_19001_19022[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18988 === (10))){
var inst_18983 = (state_18987[(2)]);
var state_18987__$1 = state_18987;
var statearr_19002_19023 = state_18987__$1;
(statearr_19002_19023[(2)] = inst_18983);

(statearr_19002_19023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18988 === (8))){
var inst_18964 = (state_18987[(7)]);
var inst_18974 = cljs.core.next.call(null,inst_18964);
var inst_18964__$1 = inst_18974;
var state_18987__$1 = (function (){var statearr_19003 = state_18987;
(statearr_19003[(7)] = inst_18964__$1);

return statearr_19003;
})();
var statearr_19004_19024 = state_18987__$1;
(statearr_19004_19024[(2)] = null);

(statearr_19004_19024[(1)] = (2));


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
var statearr_19005 = [null,null,null,null,null,null,null,null];
(statearr_19005[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_19005[(1)] = (1));

return statearr_19005;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_18987){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_18987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e19006){var ex__2335__auto__ = e19006;
var statearr_19007_19025 = state_18987;
(statearr_19007_19025[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_18987[(4)]))){
var statearr_19008_19026 = state_18987;
(statearr_19008_19026[(1)] = cljs.core.first.call(null,(state_18987[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19027 = state_18987;
state_18987 = G__19027;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_18987){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_18987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__16541__auto__ = (function (){var statearr_19009 = f__16540__auto__.call(null);
(statearr_19009[(6)] = c__16539__auto__);

return statearr_19009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16541__auto__);
}));

return c__16539__auto__;
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
var G__19029 = arguments.length;
switch (G__19029) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_19031 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_19031.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19032 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_19032.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19033 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_19033.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19034 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_19034.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19035 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19035 = (function (ch,cs,meta19036){
this.ch = ch;
this.cs = cs;
this.meta19036 = meta19036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19037,meta19036__$1){
var self__ = this;
var _19037__$1 = this;
return (new cljs.core.async.t_cljs$core$async19035(self__.ch,self__.cs,meta19036__$1));
}));

(cljs.core.async.t_cljs$core$async19035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19037){
var self__ = this;
var _19037__$1 = this;
return self__.meta19036;
}));

(cljs.core.async.t_cljs$core$async19035.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19035.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19035.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19035.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async19035.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async19035.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async19035.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19036","meta19036",-2103464874,null)], null);
}));

(cljs.core.async.t_cljs$core$async19035.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19035.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19035");

(cljs.core.async.t_cljs$core$async19035.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async19035");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19035.
 */
cljs.core.async.__GT_t_cljs$core$async19035 = (function cljs$core$async$mult_$___GT_t_cljs$core$async19035(ch__$1,cs__$1,meta19036){
return (new cljs.core.async.t_cljs$core$async19035(ch__$1,cs__$1,meta19036));
});

}

return (new cljs.core.async.t_cljs$core$async19035(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__16539__auto___19254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16540__auto__ = (function (){var switch__2331__auto__ = (function (state_19170){
var state_val_19171 = (state_19170[(1)]);
if((state_val_19171 === (7))){
var inst_19166 = (state_19170[(2)]);
var state_19170__$1 = state_19170;
var statearr_19172_19255 = state_19170__$1;
(statearr_19172_19255[(2)] = inst_19166);

(statearr_19172_19255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (20))){
var inst_19071 = (state_19170[(7)]);
var inst_19083 = cljs.core.first.call(null,inst_19071);
var inst_19084 = cljs.core.nth.call(null,inst_19083,(0),null);
var inst_19085 = cljs.core.nth.call(null,inst_19083,(1),null);
var state_19170__$1 = (function (){var statearr_19173 = state_19170;
(statearr_19173[(8)] = inst_19084);

return statearr_19173;
})();
if(cljs.core.truth_(inst_19085)){
var statearr_19174_19256 = state_19170__$1;
(statearr_19174_19256[(1)] = (22));

} else {
var statearr_19175_19257 = state_19170__$1;
(statearr_19175_19257[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (27))){
var inst_19113 = (state_19170[(9)]);
var inst_19115 = (state_19170[(10)]);
var inst_19120 = (state_19170[(11)]);
var inst_19040 = (state_19170[(12)]);
var inst_19120__$1 = cljs.core._nth.call(null,inst_19113,inst_19115);
var inst_19121 = cljs.core.async.put_BANG_.call(null,inst_19120__$1,inst_19040,done);
var state_19170__$1 = (function (){var statearr_19176 = state_19170;
(statearr_19176[(11)] = inst_19120__$1);

return statearr_19176;
})();
if(cljs.core.truth_(inst_19121)){
var statearr_19177_19258 = state_19170__$1;
(statearr_19177_19258[(1)] = (30));

} else {
var statearr_19178_19259 = state_19170__$1;
(statearr_19178_19259[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (1))){
var state_19170__$1 = state_19170;
var statearr_19179_19260 = state_19170__$1;
(statearr_19179_19260[(2)] = null);

(statearr_19179_19260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (24))){
var inst_19071 = (state_19170[(7)]);
var inst_19090 = (state_19170[(2)]);
var inst_19091 = cljs.core.next.call(null,inst_19071);
var inst_19049 = inst_19091;
var inst_19050 = null;
var inst_19051 = (0);
var inst_19052 = (0);
var state_19170__$1 = (function (){var statearr_19180 = state_19170;
(statearr_19180[(13)] = inst_19090);

(statearr_19180[(14)] = inst_19049);

(statearr_19180[(15)] = inst_19050);

(statearr_19180[(16)] = inst_19051);

(statearr_19180[(17)] = inst_19052);

return statearr_19180;
})();
var statearr_19181_19261 = state_19170__$1;
(statearr_19181_19261[(2)] = null);

(statearr_19181_19261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (39))){
var state_19170__$1 = state_19170;
var statearr_19185_19262 = state_19170__$1;
(statearr_19185_19262[(2)] = null);

(statearr_19185_19262[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (4))){
var inst_19040 = (state_19170[(12)]);
var inst_19040__$1 = (state_19170[(2)]);
var inst_19041 = (inst_19040__$1 == null);
var state_19170__$1 = (function (){var statearr_19186 = state_19170;
(statearr_19186[(12)] = inst_19040__$1);

return statearr_19186;
})();
if(cljs.core.truth_(inst_19041)){
var statearr_19187_19263 = state_19170__$1;
(statearr_19187_19263[(1)] = (5));

} else {
var statearr_19188_19264 = state_19170__$1;
(statearr_19188_19264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (15))){
var inst_19052 = (state_19170[(17)]);
var inst_19049 = (state_19170[(14)]);
var inst_19050 = (state_19170[(15)]);
var inst_19051 = (state_19170[(16)]);
var inst_19067 = (state_19170[(2)]);
var inst_19068 = (inst_19052 + (1));
var tmp19182 = inst_19050;
var tmp19183 = inst_19051;
var tmp19184 = inst_19049;
var inst_19049__$1 = tmp19184;
var inst_19050__$1 = tmp19182;
var inst_19051__$1 = tmp19183;
var inst_19052__$1 = inst_19068;
var state_19170__$1 = (function (){var statearr_19189 = state_19170;
(statearr_19189[(18)] = inst_19067);

(statearr_19189[(14)] = inst_19049__$1);

(statearr_19189[(15)] = inst_19050__$1);

(statearr_19189[(16)] = inst_19051__$1);

(statearr_19189[(17)] = inst_19052__$1);

return statearr_19189;
})();
var statearr_19190_19265 = state_19170__$1;
(statearr_19190_19265[(2)] = null);

(statearr_19190_19265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (21))){
var inst_19094 = (state_19170[(2)]);
var state_19170__$1 = state_19170;
var statearr_19194_19266 = state_19170__$1;
(statearr_19194_19266[(2)] = inst_19094);

(statearr_19194_19266[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (31))){
var inst_19120 = (state_19170[(11)]);
var inst_19124 = cljs.core.async.untap_STAR_.call(null,m,inst_19120);
var state_19170__$1 = state_19170;
var statearr_19195_19267 = state_19170__$1;
(statearr_19195_19267[(2)] = inst_19124);

(statearr_19195_19267[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (32))){
var inst_19115 = (state_19170[(10)]);
var inst_19112 = (state_19170[(19)]);
var inst_19113 = (state_19170[(9)]);
var inst_19114 = (state_19170[(20)]);
var inst_19126 = (state_19170[(2)]);
var inst_19127 = (inst_19115 + (1));
var tmp19191 = inst_19113;
var tmp19192 = inst_19112;
var tmp19193 = inst_19114;
var inst_19112__$1 = tmp19192;
var inst_19113__$1 = tmp19191;
var inst_19114__$1 = tmp19193;
var inst_19115__$1 = inst_19127;
var state_19170__$1 = (function (){var statearr_19196 = state_19170;
(statearr_19196[(21)] = inst_19126);

(statearr_19196[(19)] = inst_19112__$1);

(statearr_19196[(9)] = inst_19113__$1);

(statearr_19196[(20)] = inst_19114__$1);

(statearr_19196[(10)] = inst_19115__$1);

return statearr_19196;
})();
var statearr_19197_19268 = state_19170__$1;
(statearr_19197_19268[(2)] = null);

(statearr_19197_19268[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (40))){
var inst_19139 = (state_19170[(22)]);
var inst_19143 = cljs.core.async.untap_STAR_.call(null,m,inst_19139);
var state_19170__$1 = state_19170;
var statearr_19198_19269 = state_19170__$1;
(statearr_19198_19269[(2)] = inst_19143);

(statearr_19198_19269[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (33))){
var inst_19130 = (state_19170[(23)]);
var inst_19132 = cljs.core.chunked_seq_QMARK_.call(null,inst_19130);
var state_19170__$1 = state_19170;
if(inst_19132){
var statearr_19199_19270 = state_19170__$1;
(statearr_19199_19270[(1)] = (36));

} else {
var statearr_19200_19271 = state_19170__$1;
(statearr_19200_19271[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (13))){
var inst_19061 = (state_19170[(24)]);
var inst_19064 = cljs.core.async.close_BANG_.call(null,inst_19061);
var state_19170__$1 = state_19170;
var statearr_19201_19272 = state_19170__$1;
(statearr_19201_19272[(2)] = inst_19064);

(statearr_19201_19272[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (22))){
var inst_19084 = (state_19170[(8)]);
var inst_19087 = cljs.core.async.close_BANG_.call(null,inst_19084);
var state_19170__$1 = state_19170;
var statearr_19202_19273 = state_19170__$1;
(statearr_19202_19273[(2)] = inst_19087);

(statearr_19202_19273[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (36))){
var inst_19130 = (state_19170[(23)]);
var inst_19134 = cljs.core.chunk_first.call(null,inst_19130);
var inst_19135 = cljs.core.chunk_rest.call(null,inst_19130);
var inst_19136 = cljs.core.count.call(null,inst_19134);
var inst_19112 = inst_19135;
var inst_19113 = inst_19134;
var inst_19114 = inst_19136;
var inst_19115 = (0);
var state_19170__$1 = (function (){var statearr_19203 = state_19170;
(statearr_19203[(19)] = inst_19112);

(statearr_19203[(9)] = inst_19113);

(statearr_19203[(20)] = inst_19114);

(statearr_19203[(10)] = inst_19115);

return statearr_19203;
})();
var statearr_19204_19274 = state_19170__$1;
(statearr_19204_19274[(2)] = null);

(statearr_19204_19274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (41))){
var inst_19130 = (state_19170[(23)]);
var inst_19145 = (state_19170[(2)]);
var inst_19146 = cljs.core.next.call(null,inst_19130);
var inst_19112 = inst_19146;
var inst_19113 = null;
var inst_19114 = (0);
var inst_19115 = (0);
var state_19170__$1 = (function (){var statearr_19205 = state_19170;
(statearr_19205[(25)] = inst_19145);

(statearr_19205[(19)] = inst_19112);

(statearr_19205[(9)] = inst_19113);

(statearr_19205[(20)] = inst_19114);

(statearr_19205[(10)] = inst_19115);

return statearr_19205;
})();
var statearr_19206_19275 = state_19170__$1;
(statearr_19206_19275[(2)] = null);

(statearr_19206_19275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (43))){
var state_19170__$1 = state_19170;
var statearr_19207_19276 = state_19170__$1;
(statearr_19207_19276[(2)] = null);

(statearr_19207_19276[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (29))){
var inst_19154 = (state_19170[(2)]);
var state_19170__$1 = state_19170;
var statearr_19208_19277 = state_19170__$1;
(statearr_19208_19277[(2)] = inst_19154);

(statearr_19208_19277[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (44))){
var inst_19163 = (state_19170[(2)]);
var state_19170__$1 = (function (){var statearr_19209 = state_19170;
(statearr_19209[(26)] = inst_19163);

return statearr_19209;
})();
var statearr_19210_19278 = state_19170__$1;
(statearr_19210_19278[(2)] = null);

(statearr_19210_19278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (6))){
var inst_19104 = (state_19170[(27)]);
var inst_19103 = cljs.core.deref.call(null,cs);
var inst_19104__$1 = cljs.core.keys.call(null,inst_19103);
var inst_19105 = cljs.core.count.call(null,inst_19104__$1);
var inst_19106 = cljs.core.reset_BANG_.call(null,dctr,inst_19105);
var inst_19111 = cljs.core.seq.call(null,inst_19104__$1);
var inst_19112 = inst_19111;
var inst_19113 = null;
var inst_19114 = (0);
var inst_19115 = (0);
var state_19170__$1 = (function (){var statearr_19211 = state_19170;
(statearr_19211[(27)] = inst_19104__$1);

(statearr_19211[(28)] = inst_19106);

(statearr_19211[(19)] = inst_19112);

(statearr_19211[(9)] = inst_19113);

(statearr_19211[(20)] = inst_19114);

(statearr_19211[(10)] = inst_19115);

return statearr_19211;
})();
var statearr_19212_19279 = state_19170__$1;
(statearr_19212_19279[(2)] = null);

(statearr_19212_19279[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (28))){
var inst_19112 = (state_19170[(19)]);
var inst_19130 = (state_19170[(23)]);
var inst_19130__$1 = cljs.core.seq.call(null,inst_19112);
var state_19170__$1 = (function (){var statearr_19213 = state_19170;
(statearr_19213[(23)] = inst_19130__$1);

return statearr_19213;
})();
if(inst_19130__$1){
var statearr_19214_19280 = state_19170__$1;
(statearr_19214_19280[(1)] = (33));

} else {
var statearr_19215_19281 = state_19170__$1;
(statearr_19215_19281[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (25))){
var inst_19115 = (state_19170[(10)]);
var inst_19114 = (state_19170[(20)]);
var inst_19117 = (inst_19115 < inst_19114);
var inst_19118 = inst_19117;
var state_19170__$1 = state_19170;
if(cljs.core.truth_(inst_19118)){
var statearr_19216_19282 = state_19170__$1;
(statearr_19216_19282[(1)] = (27));

} else {
var statearr_19217_19283 = state_19170__$1;
(statearr_19217_19283[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (34))){
var state_19170__$1 = state_19170;
var statearr_19218_19284 = state_19170__$1;
(statearr_19218_19284[(2)] = null);

(statearr_19218_19284[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (17))){
var state_19170__$1 = state_19170;
var statearr_19219_19285 = state_19170__$1;
(statearr_19219_19285[(2)] = null);

(statearr_19219_19285[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (3))){
var inst_19168 = (state_19170[(2)]);
var state_19170__$1 = state_19170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19170__$1,inst_19168);
} else {
if((state_val_19171 === (12))){
var inst_19099 = (state_19170[(2)]);
var state_19170__$1 = state_19170;
var statearr_19220_19286 = state_19170__$1;
(statearr_19220_19286[(2)] = inst_19099);

(statearr_19220_19286[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (2))){
var state_19170__$1 = state_19170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19170__$1,(4),ch);
} else {
if((state_val_19171 === (23))){
var state_19170__$1 = state_19170;
var statearr_19221_19287 = state_19170__$1;
(statearr_19221_19287[(2)] = null);

(statearr_19221_19287[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (35))){
var inst_19152 = (state_19170[(2)]);
var state_19170__$1 = state_19170;
var statearr_19222_19288 = state_19170__$1;
(statearr_19222_19288[(2)] = inst_19152);

(statearr_19222_19288[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (19))){
var inst_19071 = (state_19170[(7)]);
var inst_19075 = cljs.core.chunk_first.call(null,inst_19071);
var inst_19076 = cljs.core.chunk_rest.call(null,inst_19071);
var inst_19077 = cljs.core.count.call(null,inst_19075);
var inst_19049 = inst_19076;
var inst_19050 = inst_19075;
var inst_19051 = inst_19077;
var inst_19052 = (0);
var state_19170__$1 = (function (){var statearr_19223 = state_19170;
(statearr_19223[(14)] = inst_19049);

(statearr_19223[(15)] = inst_19050);

(statearr_19223[(16)] = inst_19051);

(statearr_19223[(17)] = inst_19052);

return statearr_19223;
})();
var statearr_19224_19289 = state_19170__$1;
(statearr_19224_19289[(2)] = null);

(statearr_19224_19289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (11))){
var inst_19049 = (state_19170[(14)]);
var inst_19071 = (state_19170[(7)]);
var inst_19071__$1 = cljs.core.seq.call(null,inst_19049);
var state_19170__$1 = (function (){var statearr_19225 = state_19170;
(statearr_19225[(7)] = inst_19071__$1);

return statearr_19225;
})();
if(inst_19071__$1){
var statearr_19226_19290 = state_19170__$1;
(statearr_19226_19290[(1)] = (16));

} else {
var statearr_19227_19291 = state_19170__$1;
(statearr_19227_19291[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (9))){
var inst_19101 = (state_19170[(2)]);
var state_19170__$1 = state_19170;
var statearr_19228_19292 = state_19170__$1;
(statearr_19228_19292[(2)] = inst_19101);

(statearr_19228_19292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (5))){
var inst_19047 = cljs.core.deref.call(null,cs);
var inst_19048 = cljs.core.seq.call(null,inst_19047);
var inst_19049 = inst_19048;
var inst_19050 = null;
var inst_19051 = (0);
var inst_19052 = (0);
var state_19170__$1 = (function (){var statearr_19229 = state_19170;
(statearr_19229[(14)] = inst_19049);

(statearr_19229[(15)] = inst_19050);

(statearr_19229[(16)] = inst_19051);

(statearr_19229[(17)] = inst_19052);

return statearr_19229;
})();
var statearr_19230_19293 = state_19170__$1;
(statearr_19230_19293[(2)] = null);

(statearr_19230_19293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (14))){
var state_19170__$1 = state_19170;
var statearr_19231_19294 = state_19170__$1;
(statearr_19231_19294[(2)] = null);

(statearr_19231_19294[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (45))){
var inst_19160 = (state_19170[(2)]);
var state_19170__$1 = state_19170;
var statearr_19232_19295 = state_19170__$1;
(statearr_19232_19295[(2)] = inst_19160);

(statearr_19232_19295[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (26))){
var inst_19104 = (state_19170[(27)]);
var inst_19156 = (state_19170[(2)]);
var inst_19157 = cljs.core.seq.call(null,inst_19104);
var state_19170__$1 = (function (){var statearr_19233 = state_19170;
(statearr_19233[(29)] = inst_19156);

return statearr_19233;
})();
if(inst_19157){
var statearr_19234_19296 = state_19170__$1;
(statearr_19234_19296[(1)] = (42));

} else {
var statearr_19235_19297 = state_19170__$1;
(statearr_19235_19297[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (16))){
var inst_19071 = (state_19170[(7)]);
var inst_19073 = cljs.core.chunked_seq_QMARK_.call(null,inst_19071);
var state_19170__$1 = state_19170;
if(inst_19073){
var statearr_19236_19298 = state_19170__$1;
(statearr_19236_19298[(1)] = (19));

} else {
var statearr_19237_19299 = state_19170__$1;
(statearr_19237_19299[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (38))){
var inst_19149 = (state_19170[(2)]);
var state_19170__$1 = state_19170;
var statearr_19238_19300 = state_19170__$1;
(statearr_19238_19300[(2)] = inst_19149);

(statearr_19238_19300[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (30))){
var state_19170__$1 = state_19170;
var statearr_19239_19301 = state_19170__$1;
(statearr_19239_19301[(2)] = null);

(statearr_19239_19301[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (10))){
var inst_19050 = (state_19170[(15)]);
var inst_19052 = (state_19170[(17)]);
var inst_19060 = cljs.core._nth.call(null,inst_19050,inst_19052);
var inst_19061 = cljs.core.nth.call(null,inst_19060,(0),null);
var inst_19062 = cljs.core.nth.call(null,inst_19060,(1),null);
var state_19170__$1 = (function (){var statearr_19240 = state_19170;
(statearr_19240[(24)] = inst_19061);

return statearr_19240;
})();
if(cljs.core.truth_(inst_19062)){
var statearr_19241_19302 = state_19170__$1;
(statearr_19241_19302[(1)] = (13));

} else {
var statearr_19242_19303 = state_19170__$1;
(statearr_19242_19303[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (18))){
var inst_19097 = (state_19170[(2)]);
var state_19170__$1 = state_19170;
var statearr_19243_19304 = state_19170__$1;
(statearr_19243_19304[(2)] = inst_19097);

(statearr_19243_19304[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (42))){
var state_19170__$1 = state_19170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19170__$1,(45),dchan);
} else {
if((state_val_19171 === (37))){
var inst_19130 = (state_19170[(23)]);
var inst_19139 = (state_19170[(22)]);
var inst_19040 = (state_19170[(12)]);
var inst_19139__$1 = cljs.core.first.call(null,inst_19130);
var inst_19140 = cljs.core.async.put_BANG_.call(null,inst_19139__$1,inst_19040,done);
var state_19170__$1 = (function (){var statearr_19244 = state_19170;
(statearr_19244[(22)] = inst_19139__$1);

return statearr_19244;
})();
if(cljs.core.truth_(inst_19140)){
var statearr_19245_19305 = state_19170__$1;
(statearr_19245_19305[(1)] = (39));

} else {
var statearr_19246_19306 = state_19170__$1;
(statearr_19246_19306[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19171 === (8))){
var inst_19052 = (state_19170[(17)]);
var inst_19051 = (state_19170[(16)]);
var inst_19054 = (inst_19052 < inst_19051);
var inst_19055 = inst_19054;
var state_19170__$1 = state_19170;
if(cljs.core.truth_(inst_19055)){
var statearr_19247_19307 = state_19170__$1;
(statearr_19247_19307[(1)] = (10));

} else {
var statearr_19248_19308 = state_19170__$1;
(statearr_19248_19308[(1)] = (11));

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
var statearr_19249 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19249[(0)] = cljs$core$async$mult_$_state_machine__2332__auto__);

(statearr_19249[(1)] = (1));

return statearr_19249;
});
var cljs$core$async$mult_$_state_machine__2332__auto____1 = (function (state_19170){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_19170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e19250){var ex__2335__auto__ = e19250;
var statearr_19251_19309 = state_19170;
(statearr_19251_19309[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_19170[(4)]))){
var statearr_19252_19310 = state_19170;
(statearr_19252_19310[(1)] = cljs.core.first.call(null,(state_19170[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19311 = state_19170;
state_19170 = G__19311;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__2332__auto__ = function(state_19170){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__2332__auto____1.call(this,state_19170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__2332__auto____0;
cljs$core$async$mult_$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__2332__auto____1;
return cljs$core$async$mult_$_state_machine__2332__auto__;
})()
})();
var state__16541__auto__ = (function (){var statearr_19253 = f__16540__auto__.call(null);
(statearr_19253[(6)] = c__16539__auto___19254);

return statearr_19253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16541__auto__);
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
var G__19313 = arguments.length;
switch (G__19313) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_19315 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_19315.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19316 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_19316.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19317 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19317.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19318 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_19318.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19319 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19319.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19329 = arguments.length;
var i__5727__auto___19330 = (0);
while(true){
if((i__5727__auto___19330 < len__5726__auto___19329)){
args__5732__auto__.push((arguments[i__5727__auto___19330]));

var G__19331 = (i__5727__auto___19330 + (1));
i__5727__auto___19330 = G__19331;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19324){
var map__19325 = p__19324;
var map__19325__$1 = cljs.core.__destructure_map.call(null,map__19325);
var opts = map__19325__$1;
var statearr_19326_19332 = state;
(statearr_19326_19332[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_19327_19333 = state;
(statearr_19327_19333[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_19328_19334 = state;
(statearr_19328_19334[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19320){
var G__19321 = cljs.core.first.call(null,seq19320);
var seq19320__$1 = cljs.core.next.call(null,seq19320);
var G__19322 = cljs.core.first.call(null,seq19320__$1);
var seq19320__$2 = cljs.core.next.call(null,seq19320__$1);
var G__19323 = cljs.core.first.call(null,seq19320__$2);
var seq19320__$3 = cljs.core.next.call(null,seq19320__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19321,G__19322,G__19323,seq19320__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19335 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19335 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19336){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19336 = meta19336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19337,meta19336__$1){
var self__ = this;
var _19337__$1 = this;
return (new cljs.core.async.t_cljs$core$async19335(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19336__$1));
}));

(cljs.core.async.t_cljs$core$async19335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19337){
var self__ = this;
var _19337__$1 = this;
return self__.meta19336;
}));

(cljs.core.async.t_cljs$core$async19335.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19335.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async19335.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19335.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19335.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19335.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19335.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19335.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19336","meta19336",2133187068,null)], null);
}));

(cljs.core.async.t_cljs$core$async19335.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19335");

(cljs.core.async.t_cljs$core$async19335.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async19335");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19335.
 */
cljs.core.async.__GT_t_cljs$core$async19335 = (function cljs$core$async$mix_$___GT_t_cljs$core$async19335(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19336){
return (new cljs.core.async.t_cljs$core$async19335(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19336));
});

}

return (new cljs.core.async.t_cljs$core$async19335(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16539__auto___19450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16540__auto__ = (function (){var switch__2331__auto__ = (function (state_19405){
var state_val_19406 = (state_19405[(1)]);
if((state_val_19406 === (7))){
var inst_19365 = (state_19405[(2)]);
var state_19405__$1 = state_19405;
if(cljs.core.truth_(inst_19365)){
var statearr_19407_19451 = state_19405__$1;
(statearr_19407_19451[(1)] = (8));

} else {
var statearr_19408_19452 = state_19405__$1;
(statearr_19408_19452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (20))){
var inst_19358 = (state_19405[(7)]);
var state_19405__$1 = state_19405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19405__$1,(23),out,inst_19358);
} else {
if((state_val_19406 === (1))){
var inst_19341 = calc_state.call(null);
var inst_19342 = cljs.core.__destructure_map.call(null,inst_19341);
var inst_19343 = cljs.core.get.call(null,inst_19342,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19344 = cljs.core.get.call(null,inst_19342,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19345 = cljs.core.get.call(null,inst_19342,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19346 = inst_19341;
var state_19405__$1 = (function (){var statearr_19409 = state_19405;
(statearr_19409[(8)] = inst_19343);

(statearr_19409[(9)] = inst_19344);

(statearr_19409[(10)] = inst_19345);

(statearr_19409[(11)] = inst_19346);

return statearr_19409;
})();
var statearr_19410_19453 = state_19405__$1;
(statearr_19410_19453[(2)] = null);

(statearr_19410_19453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (24))){
var inst_19349 = (state_19405[(12)]);
var inst_19346 = inst_19349;
var state_19405__$1 = (function (){var statearr_19411 = state_19405;
(statearr_19411[(11)] = inst_19346);

return statearr_19411;
})();
var statearr_19412_19454 = state_19405__$1;
(statearr_19412_19454[(2)] = null);

(statearr_19412_19454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (4))){
var inst_19358 = (state_19405[(7)]);
var inst_19360 = (state_19405[(13)]);
var inst_19357 = (state_19405[(2)]);
var inst_19358__$1 = cljs.core.nth.call(null,inst_19357,(0),null);
var inst_19359 = cljs.core.nth.call(null,inst_19357,(1),null);
var inst_19360__$1 = (inst_19358__$1 == null);
var state_19405__$1 = (function (){var statearr_19413 = state_19405;
(statearr_19413[(7)] = inst_19358__$1);

(statearr_19413[(14)] = inst_19359);

(statearr_19413[(13)] = inst_19360__$1);

return statearr_19413;
})();
if(cljs.core.truth_(inst_19360__$1)){
var statearr_19414_19455 = state_19405__$1;
(statearr_19414_19455[(1)] = (5));

} else {
var statearr_19415_19456 = state_19405__$1;
(statearr_19415_19456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (15))){
var inst_19350 = (state_19405[(15)]);
var inst_19379 = (state_19405[(16)]);
var inst_19379__$1 = cljs.core.empty_QMARK_.call(null,inst_19350);
var state_19405__$1 = (function (){var statearr_19416 = state_19405;
(statearr_19416[(16)] = inst_19379__$1);

return statearr_19416;
})();
if(inst_19379__$1){
var statearr_19417_19457 = state_19405__$1;
(statearr_19417_19457[(1)] = (17));

} else {
var statearr_19418_19458 = state_19405__$1;
(statearr_19418_19458[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (21))){
var inst_19349 = (state_19405[(12)]);
var inst_19346 = inst_19349;
var state_19405__$1 = (function (){var statearr_19419 = state_19405;
(statearr_19419[(11)] = inst_19346);

return statearr_19419;
})();
var statearr_19420_19459 = state_19405__$1;
(statearr_19420_19459[(2)] = null);

(statearr_19420_19459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (13))){
var inst_19372 = (state_19405[(2)]);
var inst_19373 = calc_state.call(null);
var inst_19346 = inst_19373;
var state_19405__$1 = (function (){var statearr_19421 = state_19405;
(statearr_19421[(17)] = inst_19372);

(statearr_19421[(11)] = inst_19346);

return statearr_19421;
})();
var statearr_19422_19460 = state_19405__$1;
(statearr_19422_19460[(2)] = null);

(statearr_19422_19460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (22))){
var inst_19399 = (state_19405[(2)]);
var state_19405__$1 = state_19405;
var statearr_19423_19461 = state_19405__$1;
(statearr_19423_19461[(2)] = inst_19399);

(statearr_19423_19461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (6))){
var inst_19359 = (state_19405[(14)]);
var inst_19363 = cljs.core._EQ_.call(null,inst_19359,change);
var state_19405__$1 = state_19405;
var statearr_19424_19462 = state_19405__$1;
(statearr_19424_19462[(2)] = inst_19363);

(statearr_19424_19462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (25))){
var state_19405__$1 = state_19405;
var statearr_19425_19463 = state_19405__$1;
(statearr_19425_19463[(2)] = null);

(statearr_19425_19463[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (17))){
var inst_19351 = (state_19405[(18)]);
var inst_19359 = (state_19405[(14)]);
var inst_19381 = inst_19351.call(null,inst_19359);
var inst_19382 = cljs.core.not.call(null,inst_19381);
var state_19405__$1 = state_19405;
var statearr_19426_19464 = state_19405__$1;
(statearr_19426_19464[(2)] = inst_19382);

(statearr_19426_19464[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (3))){
var inst_19403 = (state_19405[(2)]);
var state_19405__$1 = state_19405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19405__$1,inst_19403);
} else {
if((state_val_19406 === (12))){
var state_19405__$1 = state_19405;
var statearr_19427_19465 = state_19405__$1;
(statearr_19427_19465[(2)] = null);

(statearr_19427_19465[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (2))){
var inst_19346 = (state_19405[(11)]);
var inst_19349 = (state_19405[(12)]);
var inst_19349__$1 = cljs.core.__destructure_map.call(null,inst_19346);
var inst_19350 = cljs.core.get.call(null,inst_19349__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19351 = cljs.core.get.call(null,inst_19349__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19352 = cljs.core.get.call(null,inst_19349__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19405__$1 = (function (){var statearr_19428 = state_19405;
(statearr_19428[(12)] = inst_19349__$1);

(statearr_19428[(15)] = inst_19350);

(statearr_19428[(18)] = inst_19351);

return statearr_19428;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19405__$1,(4),inst_19352);
} else {
if((state_val_19406 === (23))){
var inst_19390 = (state_19405[(2)]);
var state_19405__$1 = state_19405;
if(cljs.core.truth_(inst_19390)){
var statearr_19429_19466 = state_19405__$1;
(statearr_19429_19466[(1)] = (24));

} else {
var statearr_19430_19467 = state_19405__$1;
(statearr_19430_19467[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (19))){
var inst_19385 = (state_19405[(2)]);
var state_19405__$1 = state_19405;
var statearr_19431_19468 = state_19405__$1;
(statearr_19431_19468[(2)] = inst_19385);

(statearr_19431_19468[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (11))){
var inst_19359 = (state_19405[(14)]);
var inst_19369 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19359);
var state_19405__$1 = state_19405;
var statearr_19432_19469 = state_19405__$1;
(statearr_19432_19469[(2)] = inst_19369);

(statearr_19432_19469[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (9))){
var inst_19350 = (state_19405[(15)]);
var inst_19359 = (state_19405[(14)]);
var inst_19376 = (state_19405[(19)]);
var inst_19376__$1 = inst_19350.call(null,inst_19359);
var state_19405__$1 = (function (){var statearr_19433 = state_19405;
(statearr_19433[(19)] = inst_19376__$1);

return statearr_19433;
})();
if(cljs.core.truth_(inst_19376__$1)){
var statearr_19434_19470 = state_19405__$1;
(statearr_19434_19470[(1)] = (14));

} else {
var statearr_19435_19471 = state_19405__$1;
(statearr_19435_19471[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (5))){
var inst_19360 = (state_19405[(13)]);
var state_19405__$1 = state_19405;
var statearr_19436_19472 = state_19405__$1;
(statearr_19436_19472[(2)] = inst_19360);

(statearr_19436_19472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (14))){
var inst_19376 = (state_19405[(19)]);
var state_19405__$1 = state_19405;
var statearr_19437_19473 = state_19405__$1;
(statearr_19437_19473[(2)] = inst_19376);

(statearr_19437_19473[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (26))){
var inst_19395 = (state_19405[(2)]);
var state_19405__$1 = state_19405;
var statearr_19438_19474 = state_19405__$1;
(statearr_19438_19474[(2)] = inst_19395);

(statearr_19438_19474[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (16))){
var inst_19387 = (state_19405[(2)]);
var state_19405__$1 = state_19405;
if(cljs.core.truth_(inst_19387)){
var statearr_19439_19475 = state_19405__$1;
(statearr_19439_19475[(1)] = (20));

} else {
var statearr_19440_19476 = state_19405__$1;
(statearr_19440_19476[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (10))){
var inst_19401 = (state_19405[(2)]);
var state_19405__$1 = state_19405;
var statearr_19441_19477 = state_19405__$1;
(statearr_19441_19477[(2)] = inst_19401);

(statearr_19441_19477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (18))){
var inst_19379 = (state_19405[(16)]);
var state_19405__$1 = state_19405;
var statearr_19442_19478 = state_19405__$1;
(statearr_19442_19478[(2)] = inst_19379);

(statearr_19442_19478[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (8))){
var inst_19358 = (state_19405[(7)]);
var inst_19367 = (inst_19358 == null);
var state_19405__$1 = state_19405;
if(cljs.core.truth_(inst_19367)){
var statearr_19443_19479 = state_19405__$1;
(statearr_19443_19479[(1)] = (11));

} else {
var statearr_19444_19480 = state_19405__$1;
(statearr_19444_19480[(1)] = (12));

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
var statearr_19445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19445[(0)] = cljs$core$async$mix_$_state_machine__2332__auto__);

(statearr_19445[(1)] = (1));

return statearr_19445;
});
var cljs$core$async$mix_$_state_machine__2332__auto____1 = (function (state_19405){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_19405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e19446){var ex__2335__auto__ = e19446;
var statearr_19447_19481 = state_19405;
(statearr_19447_19481[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_19405[(4)]))){
var statearr_19448_19482 = state_19405;
(statearr_19448_19482[(1)] = cljs.core.first.call(null,(state_19405[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19483 = state_19405;
state_19405 = G__19483;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__2332__auto__ = function(state_19405){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__2332__auto____1.call(this,state_19405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__2332__auto____0;
cljs$core$async$mix_$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__2332__auto____1;
return cljs$core$async$mix_$_state_machine__2332__auto__;
})()
})();
var state__16541__auto__ = (function (){var statearr_19449 = f__16540__auto__.call(null);
(statearr_19449[(6)] = c__16539__auto___19450);

return statearr_19449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16541__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_19486 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_19486.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19487 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_19487.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19488 = (function() {
var G__19489 = null;
var G__19489__1 = (function (p){
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
var G__19489__2 = (function (p,v){
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
G__19489 = function(p,v){
switch(arguments.length){
case 1:
return G__19489__1.call(this,p);
case 2:
return G__19489__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19489.cljs$core$IFn$_invoke$arity$1 = G__19489__1;
G__19489.cljs$core$IFn$_invoke$arity$2 = G__19489__2;
return G__19489;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19485 = arguments.length;
switch (G__19485) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19488.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19488.call(null,p,v);
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
var G__19493 = arguments.length;
switch (G__19493) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__19491_SHARP_){
if(cljs.core.truth_(p1__19491_SHARP_.call(null,topic))){
return p1__19491_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19491_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19494 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19494 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19495){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19495 = meta19495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19496,meta19495__$1){
var self__ = this;
var _19496__$1 = this;
return (new cljs.core.async.t_cljs$core$async19494(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19495__$1));
}));

(cljs.core.async.t_cljs$core$async19494.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19496){
var self__ = this;
var _19496__$1 = this;
return self__.meta19495;
}));

(cljs.core.async.t_cljs$core$async19494.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19494.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19494.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19494.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async19494.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async19494.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async19494.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async19494.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19495","meta19495",2057129139,null)], null);
}));

(cljs.core.async.t_cljs$core$async19494.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19494.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19494");

(cljs.core.async.t_cljs$core$async19494.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async19494");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19494.
 */
cljs.core.async.__GT_t_cljs$core$async19494 = (function cljs$core$async$__GT_t_cljs$core$async19494(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19495){
return (new cljs.core.async.t_cljs$core$async19494(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19495));
});

}

return (new cljs.core.async.t_cljs$core$async19494(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16539__auto___19615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16540__auto__ = (function (){var switch__2331__auto__ = (function (state_19568){
var state_val_19569 = (state_19568[(1)]);
if((state_val_19569 === (7))){
var inst_19564 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
var statearr_19570_19616 = state_19568__$1;
(statearr_19570_19616[(2)] = inst_19564);

(statearr_19570_19616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (20))){
var state_19568__$1 = state_19568;
var statearr_19571_19617 = state_19568__$1;
(statearr_19571_19617[(2)] = null);

(statearr_19571_19617[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (1))){
var state_19568__$1 = state_19568;
var statearr_19572_19618 = state_19568__$1;
(statearr_19572_19618[(2)] = null);

(statearr_19572_19618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (24))){
var inst_19547 = (state_19568[(7)]);
var inst_19556 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19547);
var state_19568__$1 = state_19568;
var statearr_19573_19619 = state_19568__$1;
(statearr_19573_19619[(2)] = inst_19556);

(statearr_19573_19619[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (4))){
var inst_19499 = (state_19568[(8)]);
var inst_19499__$1 = (state_19568[(2)]);
var inst_19500 = (inst_19499__$1 == null);
var state_19568__$1 = (function (){var statearr_19574 = state_19568;
(statearr_19574[(8)] = inst_19499__$1);

return statearr_19574;
})();
if(cljs.core.truth_(inst_19500)){
var statearr_19575_19620 = state_19568__$1;
(statearr_19575_19620[(1)] = (5));

} else {
var statearr_19576_19621 = state_19568__$1;
(statearr_19576_19621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (15))){
var inst_19541 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
var statearr_19577_19622 = state_19568__$1;
(statearr_19577_19622[(2)] = inst_19541);

(statearr_19577_19622[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (21))){
var inst_19561 = (state_19568[(2)]);
var state_19568__$1 = (function (){var statearr_19578 = state_19568;
(statearr_19578[(9)] = inst_19561);

return statearr_19578;
})();
var statearr_19579_19623 = state_19568__$1;
(statearr_19579_19623[(2)] = null);

(statearr_19579_19623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (13))){
var inst_19523 = (state_19568[(10)]);
var inst_19525 = cljs.core.chunked_seq_QMARK_.call(null,inst_19523);
var state_19568__$1 = state_19568;
if(inst_19525){
var statearr_19580_19624 = state_19568__$1;
(statearr_19580_19624[(1)] = (16));

} else {
var statearr_19581_19625 = state_19568__$1;
(statearr_19581_19625[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (22))){
var inst_19553 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
if(cljs.core.truth_(inst_19553)){
var statearr_19582_19626 = state_19568__$1;
(statearr_19582_19626[(1)] = (23));

} else {
var statearr_19583_19627 = state_19568__$1;
(statearr_19583_19627[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (6))){
var inst_19499 = (state_19568[(8)]);
var inst_19547 = (state_19568[(7)]);
var inst_19549 = (state_19568[(11)]);
var inst_19547__$1 = topic_fn.call(null,inst_19499);
var inst_19548 = cljs.core.deref.call(null,mults);
var inst_19549__$1 = cljs.core.get.call(null,inst_19548,inst_19547__$1);
var state_19568__$1 = (function (){var statearr_19584 = state_19568;
(statearr_19584[(7)] = inst_19547__$1);

(statearr_19584[(11)] = inst_19549__$1);

return statearr_19584;
})();
if(cljs.core.truth_(inst_19549__$1)){
var statearr_19585_19628 = state_19568__$1;
(statearr_19585_19628[(1)] = (19));

} else {
var statearr_19586_19629 = state_19568__$1;
(statearr_19586_19629[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (25))){
var inst_19558 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
var statearr_19587_19630 = state_19568__$1;
(statearr_19587_19630[(2)] = inst_19558);

(statearr_19587_19630[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (17))){
var inst_19523 = (state_19568[(10)]);
var inst_19532 = cljs.core.first.call(null,inst_19523);
var inst_19533 = cljs.core.async.muxch_STAR_.call(null,inst_19532);
var inst_19534 = cljs.core.async.close_BANG_.call(null,inst_19533);
var inst_19535 = cljs.core.next.call(null,inst_19523);
var inst_19509 = inst_19535;
var inst_19510 = null;
var inst_19511 = (0);
var inst_19512 = (0);
var state_19568__$1 = (function (){var statearr_19588 = state_19568;
(statearr_19588[(12)] = inst_19534);

(statearr_19588[(13)] = inst_19509);

(statearr_19588[(14)] = inst_19510);

(statearr_19588[(15)] = inst_19511);

(statearr_19588[(16)] = inst_19512);

return statearr_19588;
})();
var statearr_19589_19631 = state_19568__$1;
(statearr_19589_19631[(2)] = null);

(statearr_19589_19631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (3))){
var inst_19566 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19568__$1,inst_19566);
} else {
if((state_val_19569 === (12))){
var inst_19543 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
var statearr_19590_19632 = state_19568__$1;
(statearr_19590_19632[(2)] = inst_19543);

(statearr_19590_19632[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (2))){
var state_19568__$1 = state_19568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19568__$1,(4),ch);
} else {
if((state_val_19569 === (23))){
var state_19568__$1 = state_19568;
var statearr_19591_19633 = state_19568__$1;
(statearr_19591_19633[(2)] = null);

(statearr_19591_19633[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (19))){
var inst_19549 = (state_19568[(11)]);
var inst_19499 = (state_19568[(8)]);
var inst_19551 = cljs.core.async.muxch_STAR_.call(null,inst_19549);
var state_19568__$1 = state_19568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19568__$1,(22),inst_19551,inst_19499);
} else {
if((state_val_19569 === (11))){
var inst_19509 = (state_19568[(13)]);
var inst_19523 = (state_19568[(10)]);
var inst_19523__$1 = cljs.core.seq.call(null,inst_19509);
var state_19568__$1 = (function (){var statearr_19592 = state_19568;
(statearr_19592[(10)] = inst_19523__$1);

return statearr_19592;
})();
if(inst_19523__$1){
var statearr_19593_19634 = state_19568__$1;
(statearr_19593_19634[(1)] = (13));

} else {
var statearr_19594_19635 = state_19568__$1;
(statearr_19594_19635[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (9))){
var inst_19545 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
var statearr_19595_19636 = state_19568__$1;
(statearr_19595_19636[(2)] = inst_19545);

(statearr_19595_19636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (5))){
var inst_19506 = cljs.core.deref.call(null,mults);
var inst_19507 = cljs.core.vals.call(null,inst_19506);
var inst_19508 = cljs.core.seq.call(null,inst_19507);
var inst_19509 = inst_19508;
var inst_19510 = null;
var inst_19511 = (0);
var inst_19512 = (0);
var state_19568__$1 = (function (){var statearr_19596 = state_19568;
(statearr_19596[(13)] = inst_19509);

(statearr_19596[(14)] = inst_19510);

(statearr_19596[(15)] = inst_19511);

(statearr_19596[(16)] = inst_19512);

return statearr_19596;
})();
var statearr_19597_19637 = state_19568__$1;
(statearr_19597_19637[(2)] = null);

(statearr_19597_19637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (14))){
var state_19568__$1 = state_19568;
var statearr_19601_19638 = state_19568__$1;
(statearr_19601_19638[(2)] = null);

(statearr_19601_19638[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (16))){
var inst_19523 = (state_19568[(10)]);
var inst_19527 = cljs.core.chunk_first.call(null,inst_19523);
var inst_19528 = cljs.core.chunk_rest.call(null,inst_19523);
var inst_19529 = cljs.core.count.call(null,inst_19527);
var inst_19509 = inst_19528;
var inst_19510 = inst_19527;
var inst_19511 = inst_19529;
var inst_19512 = (0);
var state_19568__$1 = (function (){var statearr_19602 = state_19568;
(statearr_19602[(13)] = inst_19509);

(statearr_19602[(14)] = inst_19510);

(statearr_19602[(15)] = inst_19511);

(statearr_19602[(16)] = inst_19512);

return statearr_19602;
})();
var statearr_19603_19639 = state_19568__$1;
(statearr_19603_19639[(2)] = null);

(statearr_19603_19639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (10))){
var inst_19510 = (state_19568[(14)]);
var inst_19512 = (state_19568[(16)]);
var inst_19509 = (state_19568[(13)]);
var inst_19511 = (state_19568[(15)]);
var inst_19517 = cljs.core._nth.call(null,inst_19510,inst_19512);
var inst_19518 = cljs.core.async.muxch_STAR_.call(null,inst_19517);
var inst_19519 = cljs.core.async.close_BANG_.call(null,inst_19518);
var inst_19520 = (inst_19512 + (1));
var tmp19598 = inst_19510;
var tmp19599 = inst_19509;
var tmp19600 = inst_19511;
var inst_19509__$1 = tmp19599;
var inst_19510__$1 = tmp19598;
var inst_19511__$1 = tmp19600;
var inst_19512__$1 = inst_19520;
var state_19568__$1 = (function (){var statearr_19604 = state_19568;
(statearr_19604[(17)] = inst_19519);

(statearr_19604[(13)] = inst_19509__$1);

(statearr_19604[(14)] = inst_19510__$1);

(statearr_19604[(15)] = inst_19511__$1);

(statearr_19604[(16)] = inst_19512__$1);

return statearr_19604;
})();
var statearr_19605_19640 = state_19568__$1;
(statearr_19605_19640[(2)] = null);

(statearr_19605_19640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (18))){
var inst_19538 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
var statearr_19606_19641 = state_19568__$1;
(statearr_19606_19641[(2)] = inst_19538);

(statearr_19606_19641[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (8))){
var inst_19512 = (state_19568[(16)]);
var inst_19511 = (state_19568[(15)]);
var inst_19514 = (inst_19512 < inst_19511);
var inst_19515 = inst_19514;
var state_19568__$1 = state_19568;
if(cljs.core.truth_(inst_19515)){
var statearr_19607_19642 = state_19568__$1;
(statearr_19607_19642[(1)] = (10));

} else {
var statearr_19608_19643 = state_19568__$1;
(statearr_19608_19643[(1)] = (11));

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
var statearr_19609 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19609[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_19609[(1)] = (1));

return statearr_19609;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_19568){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_19568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e19610){var ex__2335__auto__ = e19610;
var statearr_19611_19644 = state_19568;
(statearr_19611_19644[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_19568[(4)]))){
var statearr_19612_19645 = state_19568;
(statearr_19612_19645[(1)] = cljs.core.first.call(null,(state_19568[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19646 = state_19568;
state_19568 = G__19646;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_19568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_19568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__16541__auto__ = (function (){var statearr_19613 = f__16540__auto__.call(null);
(statearr_19613[(6)] = c__16539__auto___19615);

return statearr_19613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16541__auto__);
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
var G__19648 = arguments.length;
switch (G__19648) {
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
var G__19651 = arguments.length;
switch (G__19651) {
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
var G__19654 = arguments.length;
switch (G__19654) {
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
var c__16539__auto___19732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16540__auto__ = (function (){var switch__2331__auto__ = (function (state_19697){
var state_val_19698 = (state_19697[(1)]);
if((state_val_19698 === (7))){
var state_19697__$1 = state_19697;
var statearr_19699_19733 = state_19697__$1;
(statearr_19699_19733[(2)] = null);

(statearr_19699_19733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (1))){
var state_19697__$1 = state_19697;
var statearr_19700_19734 = state_19697__$1;
(statearr_19700_19734[(2)] = null);

(statearr_19700_19734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (4))){
var inst_19658 = (state_19697[(7)]);
var inst_19657 = (state_19697[(8)]);
var inst_19660 = (inst_19658 < inst_19657);
var state_19697__$1 = state_19697;
if(cljs.core.truth_(inst_19660)){
var statearr_19701_19735 = state_19697__$1;
(statearr_19701_19735[(1)] = (6));

} else {
var statearr_19702_19736 = state_19697__$1;
(statearr_19702_19736[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (15))){
var inst_19683 = (state_19697[(9)]);
var inst_19688 = cljs.core.apply.call(null,f,inst_19683);
var state_19697__$1 = state_19697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19697__$1,(17),out,inst_19688);
} else {
if((state_val_19698 === (13))){
var inst_19683 = (state_19697[(9)]);
var inst_19683__$1 = (state_19697[(2)]);
var inst_19684 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19683__$1);
var state_19697__$1 = (function (){var statearr_19703 = state_19697;
(statearr_19703[(9)] = inst_19683__$1);

return statearr_19703;
})();
if(cljs.core.truth_(inst_19684)){
var statearr_19704_19737 = state_19697__$1;
(statearr_19704_19737[(1)] = (14));

} else {
var statearr_19705_19738 = state_19697__$1;
(statearr_19705_19738[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (6))){
var state_19697__$1 = state_19697;
var statearr_19706_19739 = state_19697__$1;
(statearr_19706_19739[(2)] = null);

(statearr_19706_19739[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (17))){
var inst_19690 = (state_19697[(2)]);
var state_19697__$1 = (function (){var statearr_19708 = state_19697;
(statearr_19708[(10)] = inst_19690);

return statearr_19708;
})();
var statearr_19709_19740 = state_19697__$1;
(statearr_19709_19740[(2)] = null);

(statearr_19709_19740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (3))){
var inst_19695 = (state_19697[(2)]);
var state_19697__$1 = state_19697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19697__$1,inst_19695);
} else {
if((state_val_19698 === (12))){
var _ = (function (){var statearr_19710 = state_19697;
(statearr_19710[(4)] = cljs.core.rest.call(null,(state_19697[(4)])));

return statearr_19710;
})();
var state_19697__$1 = state_19697;
var ex19707 = (state_19697__$1[(2)]);
var statearr_19711_19741 = state_19697__$1;
(statearr_19711_19741[(5)] = ex19707);


if((ex19707 instanceof Object)){
var statearr_19712_19742 = state_19697__$1;
(statearr_19712_19742[(1)] = (11));

(statearr_19712_19742[(5)] = null);

} else {
throw ex19707;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (2))){
var inst_19656 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19657 = cnt;
var inst_19658 = (0);
var state_19697__$1 = (function (){var statearr_19713 = state_19697;
(statearr_19713[(11)] = inst_19656);

(statearr_19713[(8)] = inst_19657);

(statearr_19713[(7)] = inst_19658);

return statearr_19713;
})();
var statearr_19714_19743 = state_19697__$1;
(statearr_19714_19743[(2)] = null);

(statearr_19714_19743[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (11))){
var inst_19662 = (state_19697[(2)]);
var inst_19663 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19697__$1 = (function (){var statearr_19715 = state_19697;
(statearr_19715[(12)] = inst_19662);

return statearr_19715;
})();
var statearr_19716_19744 = state_19697__$1;
(statearr_19716_19744[(2)] = inst_19663);

(statearr_19716_19744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (9))){
var inst_19658 = (state_19697[(7)]);
var _ = (function (){var statearr_19717 = state_19697;
(statearr_19717[(4)] = cljs.core.cons.call(null,(12),(state_19697[(4)])));

return statearr_19717;
})();
var inst_19669 = chs__$1.call(null,inst_19658);
var inst_19670 = done.call(null,inst_19658);
var inst_19671 = cljs.core.async.take_BANG_.call(null,inst_19669,inst_19670);
var ___$1 = (function (){var statearr_19718 = state_19697;
(statearr_19718[(4)] = cljs.core.rest.call(null,(state_19697[(4)])));

return statearr_19718;
})();
var state_19697__$1 = state_19697;
var statearr_19719_19745 = state_19697__$1;
(statearr_19719_19745[(2)] = inst_19671);

(statearr_19719_19745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (5))){
var inst_19681 = (state_19697[(2)]);
var state_19697__$1 = (function (){var statearr_19720 = state_19697;
(statearr_19720[(13)] = inst_19681);

return statearr_19720;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19697__$1,(13),dchan);
} else {
if((state_val_19698 === (14))){
var inst_19686 = cljs.core.async.close_BANG_.call(null,out);
var state_19697__$1 = state_19697;
var statearr_19721_19746 = state_19697__$1;
(statearr_19721_19746[(2)] = inst_19686);

(statearr_19721_19746[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (16))){
var inst_19693 = (state_19697[(2)]);
var state_19697__$1 = state_19697;
var statearr_19722_19747 = state_19697__$1;
(statearr_19722_19747[(2)] = inst_19693);

(statearr_19722_19747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (10))){
var inst_19658 = (state_19697[(7)]);
var inst_19674 = (state_19697[(2)]);
var inst_19675 = (inst_19658 + (1));
var inst_19658__$1 = inst_19675;
var state_19697__$1 = (function (){var statearr_19723 = state_19697;
(statearr_19723[(14)] = inst_19674);

(statearr_19723[(7)] = inst_19658__$1);

return statearr_19723;
})();
var statearr_19724_19748 = state_19697__$1;
(statearr_19724_19748[(2)] = null);

(statearr_19724_19748[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (8))){
var inst_19679 = (state_19697[(2)]);
var state_19697__$1 = state_19697;
var statearr_19725_19749 = state_19697__$1;
(statearr_19725_19749[(2)] = inst_19679);

(statearr_19725_19749[(1)] = (5));


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
var statearr_19726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19726[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_19726[(1)] = (1));

return statearr_19726;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_19697){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_19697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e19727){var ex__2335__auto__ = e19727;
var statearr_19728_19750 = state_19697;
(statearr_19728_19750[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_19697[(4)]))){
var statearr_19729_19751 = state_19697;
(statearr_19729_19751[(1)] = cljs.core.first.call(null,(state_19697[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19752 = state_19697;
state_19697 = G__19752;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_19697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_19697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__16541__auto__ = (function (){var statearr_19730 = f__16540__auto__.call(null);
(statearr_19730[(6)] = c__16539__auto___19732);

return statearr_19730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16541__auto__);
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
var G__19755 = arguments.length;
switch (G__19755) {
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
var c__16539__auto___19810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16540__auto__ = (function (){var switch__2331__auto__ = (function (state_19787){
var state_val_19788 = (state_19787[(1)]);
if((state_val_19788 === (7))){
var inst_19766 = (state_19787[(7)]);
var inst_19767 = (state_19787[(8)]);
var inst_19766__$1 = (state_19787[(2)]);
var inst_19767__$1 = cljs.core.nth.call(null,inst_19766__$1,(0),null);
var inst_19768 = cljs.core.nth.call(null,inst_19766__$1,(1),null);
var inst_19769 = (inst_19767__$1 == null);
var state_19787__$1 = (function (){var statearr_19789 = state_19787;
(statearr_19789[(7)] = inst_19766__$1);

(statearr_19789[(8)] = inst_19767__$1);

(statearr_19789[(9)] = inst_19768);

return statearr_19789;
})();
if(cljs.core.truth_(inst_19769)){
var statearr_19790_19811 = state_19787__$1;
(statearr_19790_19811[(1)] = (8));

} else {
var statearr_19791_19812 = state_19787__$1;
(statearr_19791_19812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (1))){
var inst_19756 = cljs.core.vec.call(null,chs);
var inst_19757 = inst_19756;
var state_19787__$1 = (function (){var statearr_19792 = state_19787;
(statearr_19792[(10)] = inst_19757);

return statearr_19792;
})();
var statearr_19793_19813 = state_19787__$1;
(statearr_19793_19813[(2)] = null);

(statearr_19793_19813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (4))){
var inst_19757 = (state_19787[(10)]);
var state_19787__$1 = state_19787;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19787__$1,(7),inst_19757);
} else {
if((state_val_19788 === (6))){
var inst_19783 = (state_19787[(2)]);
var state_19787__$1 = state_19787;
var statearr_19794_19814 = state_19787__$1;
(statearr_19794_19814[(2)] = inst_19783);

(statearr_19794_19814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (3))){
var inst_19785 = (state_19787[(2)]);
var state_19787__$1 = state_19787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19787__$1,inst_19785);
} else {
if((state_val_19788 === (2))){
var inst_19757 = (state_19787[(10)]);
var inst_19759 = cljs.core.count.call(null,inst_19757);
var inst_19760 = (inst_19759 > (0));
var state_19787__$1 = state_19787;
if(cljs.core.truth_(inst_19760)){
var statearr_19796_19815 = state_19787__$1;
(statearr_19796_19815[(1)] = (4));

} else {
var statearr_19797_19816 = state_19787__$1;
(statearr_19797_19816[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (11))){
var inst_19757 = (state_19787[(10)]);
var inst_19776 = (state_19787[(2)]);
var tmp19795 = inst_19757;
var inst_19757__$1 = tmp19795;
var state_19787__$1 = (function (){var statearr_19798 = state_19787;
(statearr_19798[(11)] = inst_19776);

(statearr_19798[(10)] = inst_19757__$1);

return statearr_19798;
})();
var statearr_19799_19817 = state_19787__$1;
(statearr_19799_19817[(2)] = null);

(statearr_19799_19817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (9))){
var inst_19767 = (state_19787[(8)]);
var state_19787__$1 = state_19787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19787__$1,(11),out,inst_19767);
} else {
if((state_val_19788 === (5))){
var inst_19781 = cljs.core.async.close_BANG_.call(null,out);
var state_19787__$1 = state_19787;
var statearr_19800_19818 = state_19787__$1;
(statearr_19800_19818[(2)] = inst_19781);

(statearr_19800_19818[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (10))){
var inst_19779 = (state_19787[(2)]);
var state_19787__$1 = state_19787;
var statearr_19801_19819 = state_19787__$1;
(statearr_19801_19819[(2)] = inst_19779);

(statearr_19801_19819[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (8))){
var inst_19757 = (state_19787[(10)]);
var inst_19766 = (state_19787[(7)]);
var inst_19767 = (state_19787[(8)]);
var inst_19768 = (state_19787[(9)]);
var inst_19771 = (function (){var cs = inst_19757;
var vec__19762 = inst_19766;
var v = inst_19767;
var c = inst_19768;
return (function (p1__19753_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19753_SHARP_);
});
})();
var inst_19772 = cljs.core.filterv.call(null,inst_19771,inst_19757);
var inst_19757__$1 = inst_19772;
var state_19787__$1 = (function (){var statearr_19802 = state_19787;
(statearr_19802[(10)] = inst_19757__$1);

return statearr_19802;
})();
var statearr_19803_19820 = state_19787__$1;
(statearr_19803_19820[(2)] = null);

(statearr_19803_19820[(1)] = (2));


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
var statearr_19804 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19804[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_19804[(1)] = (1));

return statearr_19804;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_19787){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_19787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e19805){var ex__2335__auto__ = e19805;
var statearr_19806_19821 = state_19787;
(statearr_19806_19821[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_19787[(4)]))){
var statearr_19807_19822 = state_19787;
(statearr_19807_19822[(1)] = cljs.core.first.call(null,(state_19787[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19823 = state_19787;
state_19787 = G__19823;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_19787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_19787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__16541__auto__ = (function (){var statearr_19808 = f__16540__auto__.call(null);
(statearr_19808[(6)] = c__16539__auto___19810);

return statearr_19808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16541__auto__);
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
var G__19825 = arguments.length;
switch (G__19825) {
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
var c__16539__auto___19871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16540__auto__ = (function (){var switch__2331__auto__ = (function (state_19849){
var state_val_19850 = (state_19849[(1)]);
if((state_val_19850 === (7))){
var inst_19831 = (state_19849[(7)]);
var inst_19831__$1 = (state_19849[(2)]);
var inst_19832 = (inst_19831__$1 == null);
var inst_19833 = cljs.core.not.call(null,inst_19832);
var state_19849__$1 = (function (){var statearr_19851 = state_19849;
(statearr_19851[(7)] = inst_19831__$1);

return statearr_19851;
})();
if(inst_19833){
var statearr_19852_19872 = state_19849__$1;
(statearr_19852_19872[(1)] = (8));

} else {
var statearr_19853_19873 = state_19849__$1;
(statearr_19853_19873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19850 === (1))){
var inst_19826 = (0);
var state_19849__$1 = (function (){var statearr_19854 = state_19849;
(statearr_19854[(8)] = inst_19826);

return statearr_19854;
})();
var statearr_19855_19874 = state_19849__$1;
(statearr_19855_19874[(2)] = null);

(statearr_19855_19874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19850 === (4))){
var state_19849__$1 = state_19849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19849__$1,(7),ch);
} else {
if((state_val_19850 === (6))){
var inst_19844 = (state_19849[(2)]);
var state_19849__$1 = state_19849;
var statearr_19856_19875 = state_19849__$1;
(statearr_19856_19875[(2)] = inst_19844);

(statearr_19856_19875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19850 === (3))){
var inst_19846 = (state_19849[(2)]);
var inst_19847 = cljs.core.async.close_BANG_.call(null,out);
var state_19849__$1 = (function (){var statearr_19857 = state_19849;
(statearr_19857[(9)] = inst_19846);

return statearr_19857;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19849__$1,inst_19847);
} else {
if((state_val_19850 === (2))){
var inst_19826 = (state_19849[(8)]);
var inst_19828 = (inst_19826 < n);
var state_19849__$1 = state_19849;
if(cljs.core.truth_(inst_19828)){
var statearr_19858_19876 = state_19849__$1;
(statearr_19858_19876[(1)] = (4));

} else {
var statearr_19859_19877 = state_19849__$1;
(statearr_19859_19877[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19850 === (11))){
var inst_19826 = (state_19849[(8)]);
var inst_19836 = (state_19849[(2)]);
var inst_19837 = (inst_19826 + (1));
var inst_19826__$1 = inst_19837;
var state_19849__$1 = (function (){var statearr_19860 = state_19849;
(statearr_19860[(10)] = inst_19836);

(statearr_19860[(8)] = inst_19826__$1);

return statearr_19860;
})();
var statearr_19861_19878 = state_19849__$1;
(statearr_19861_19878[(2)] = null);

(statearr_19861_19878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19850 === (9))){
var state_19849__$1 = state_19849;
var statearr_19862_19879 = state_19849__$1;
(statearr_19862_19879[(2)] = null);

(statearr_19862_19879[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19850 === (5))){
var state_19849__$1 = state_19849;
var statearr_19863_19880 = state_19849__$1;
(statearr_19863_19880[(2)] = null);

(statearr_19863_19880[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19850 === (10))){
var inst_19841 = (state_19849[(2)]);
var state_19849__$1 = state_19849;
var statearr_19864_19881 = state_19849__$1;
(statearr_19864_19881[(2)] = inst_19841);

(statearr_19864_19881[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19850 === (8))){
var inst_19831 = (state_19849[(7)]);
var state_19849__$1 = state_19849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19849__$1,(11),out,inst_19831);
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
var statearr_19865 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19865[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_19865[(1)] = (1));

return statearr_19865;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_19849){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_19849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e19866){var ex__2335__auto__ = e19866;
var statearr_19867_19882 = state_19849;
(statearr_19867_19882[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_19849[(4)]))){
var statearr_19868_19883 = state_19849;
(statearr_19868_19883[(1)] = cljs.core.first.call(null,(state_19849[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19884 = state_19849;
state_19849 = G__19884;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_19849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_19849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__16541__auto__ = (function (){var statearr_19869 = f__16540__auto__.call(null);
(statearr_19869[(6)] = c__16539__auto___19871);

return statearr_19869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16541__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19886 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19886 = (function (f,ch,meta19887){
this.f = f;
this.ch = ch;
this.meta19887 = meta19887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19888,meta19887__$1){
var self__ = this;
var _19888__$1 = this;
return (new cljs.core.async.t_cljs$core$async19886(self__.f,self__.ch,meta19887__$1));
}));

(cljs.core.async.t_cljs$core$async19886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19888){
var self__ = this;
var _19888__$1 = this;
return self__.meta19887;
}));

(cljs.core.async.t_cljs$core$async19886.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19886.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19886.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19886.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19886.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19889 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19889 = (function (f,ch,meta19887,_,fn1,meta19890){
this.f = f;
this.ch = ch;
this.meta19887 = meta19887;
this._ = _;
this.fn1 = fn1;
this.meta19890 = meta19890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19891,meta19890__$1){
var self__ = this;
var _19891__$1 = this;
return (new cljs.core.async.t_cljs$core$async19889(self__.f,self__.ch,self__.meta19887,self__._,self__.fn1,meta19890__$1));
}));

(cljs.core.async.t_cljs$core$async19889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19891){
var self__ = this;
var _19891__$1 = this;
return self__.meta19890;
}));

(cljs.core.async.t_cljs$core$async19889.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19889.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19889.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19889.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__19885_SHARP_){
return f1.call(null,(((p1__19885_SHARP_ == null))?null:self__.f.call(null,p1__19885_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async19889.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19887","meta19887",-578649058,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19886","cljs.core.async/t_cljs$core$async19886",342878380,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19890","meta19890",1743142528,null)], null);
}));

(cljs.core.async.t_cljs$core$async19889.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19889");

(cljs.core.async.t_cljs$core$async19889.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async19889");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19889.
 */
cljs.core.async.__GT_t_cljs$core$async19889 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19889(f__$1,ch__$1,meta19887__$1,___$2,fn1__$1,meta19890){
return (new cljs.core.async.t_cljs$core$async19889(f__$1,ch__$1,meta19887__$1,___$2,fn1__$1,meta19890));
});

}

return (new cljs.core.async.t_cljs$core$async19889(self__.f,self__.ch,self__.meta19887,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async19886.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19886.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19886.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19887","meta19887",-578649058,null)], null);
}));

(cljs.core.async.t_cljs$core$async19886.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19886");

(cljs.core.async.t_cljs$core$async19886.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async19886");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19886.
 */
cljs.core.async.__GT_t_cljs$core$async19886 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19886(f__$1,ch__$1,meta19887){
return (new cljs.core.async.t_cljs$core$async19886(f__$1,ch__$1,meta19887));
});

}

return (new cljs.core.async.t_cljs$core$async19886(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19892 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19892 = (function (f,ch,meta19893){
this.f = f;
this.ch = ch;
this.meta19893 = meta19893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19894,meta19893__$1){
var self__ = this;
var _19894__$1 = this;
return (new cljs.core.async.t_cljs$core$async19892(self__.f,self__.ch,meta19893__$1));
}));

(cljs.core.async.t_cljs$core$async19892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19894){
var self__ = this;
var _19894__$1 = this;
return self__.meta19893;
}));

(cljs.core.async.t_cljs$core$async19892.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19892.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19892.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19892.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19892.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19892.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async19892.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19893","meta19893",115764348,null)], null);
}));

(cljs.core.async.t_cljs$core$async19892.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19892.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19892");

(cljs.core.async.t_cljs$core$async19892.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async19892");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19892.
 */
cljs.core.async.__GT_t_cljs$core$async19892 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19892(f__$1,ch__$1,meta19893){
return (new cljs.core.async.t_cljs$core$async19892(f__$1,ch__$1,meta19893));
});

}

return (new cljs.core.async.t_cljs$core$async19892(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19895 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19895 = (function (p,ch,meta19896){
this.p = p;
this.ch = ch;
this.meta19896 = meta19896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19897,meta19896__$1){
var self__ = this;
var _19897__$1 = this;
return (new cljs.core.async.t_cljs$core$async19895(self__.p,self__.ch,meta19896__$1));
}));

(cljs.core.async.t_cljs$core$async19895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19897){
var self__ = this;
var _19897__$1 = this;
return self__.meta19896;
}));

(cljs.core.async.t_cljs$core$async19895.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19895.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19895.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19895.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19895.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19895.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19895.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19895.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19896","meta19896",-54630028,null)], null);
}));

(cljs.core.async.t_cljs$core$async19895.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19895.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19895");

(cljs.core.async.t_cljs$core$async19895.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async19895");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19895.
 */
cljs.core.async.__GT_t_cljs$core$async19895 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19895(p__$1,ch__$1,meta19896){
return (new cljs.core.async.t_cljs$core$async19895(p__$1,ch__$1,meta19896));
});

}

return (new cljs.core.async.t_cljs$core$async19895(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19899 = arguments.length;
switch (G__19899) {
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
var c__16539__auto___19940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16540__auto__ = (function (){var switch__2331__auto__ = (function (state_19920){
var state_val_19921 = (state_19920[(1)]);
if((state_val_19921 === (7))){
var inst_19916 = (state_19920[(2)]);
var state_19920__$1 = state_19920;
var statearr_19922_19941 = state_19920__$1;
(statearr_19922_19941[(2)] = inst_19916);

(statearr_19922_19941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (1))){
var state_19920__$1 = state_19920;
var statearr_19923_19942 = state_19920__$1;
(statearr_19923_19942[(2)] = null);

(statearr_19923_19942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (4))){
var inst_19902 = (state_19920[(7)]);
var inst_19902__$1 = (state_19920[(2)]);
var inst_19903 = (inst_19902__$1 == null);
var state_19920__$1 = (function (){var statearr_19924 = state_19920;
(statearr_19924[(7)] = inst_19902__$1);

return statearr_19924;
})();
if(cljs.core.truth_(inst_19903)){
var statearr_19925_19943 = state_19920__$1;
(statearr_19925_19943[(1)] = (5));

} else {
var statearr_19926_19944 = state_19920__$1;
(statearr_19926_19944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (6))){
var inst_19902 = (state_19920[(7)]);
var inst_19907 = p.call(null,inst_19902);
var state_19920__$1 = state_19920;
if(cljs.core.truth_(inst_19907)){
var statearr_19927_19945 = state_19920__$1;
(statearr_19927_19945[(1)] = (8));

} else {
var statearr_19928_19946 = state_19920__$1;
(statearr_19928_19946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (3))){
var inst_19918 = (state_19920[(2)]);
var state_19920__$1 = state_19920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19920__$1,inst_19918);
} else {
if((state_val_19921 === (2))){
var state_19920__$1 = state_19920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19920__$1,(4),ch);
} else {
if((state_val_19921 === (11))){
var inst_19910 = (state_19920[(2)]);
var state_19920__$1 = state_19920;
var statearr_19929_19947 = state_19920__$1;
(statearr_19929_19947[(2)] = inst_19910);

(statearr_19929_19947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (9))){
var state_19920__$1 = state_19920;
var statearr_19930_19948 = state_19920__$1;
(statearr_19930_19948[(2)] = null);

(statearr_19930_19948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (5))){
var inst_19905 = cljs.core.async.close_BANG_.call(null,out);
var state_19920__$1 = state_19920;
var statearr_19931_19949 = state_19920__$1;
(statearr_19931_19949[(2)] = inst_19905);

(statearr_19931_19949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (10))){
var inst_19913 = (state_19920[(2)]);
var state_19920__$1 = (function (){var statearr_19932 = state_19920;
(statearr_19932[(8)] = inst_19913);

return statearr_19932;
})();
var statearr_19933_19950 = state_19920__$1;
(statearr_19933_19950[(2)] = null);

(statearr_19933_19950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (8))){
var inst_19902 = (state_19920[(7)]);
var state_19920__$1 = state_19920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19920__$1,(11),out,inst_19902);
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
var statearr_19934 = [null,null,null,null,null,null,null,null,null];
(statearr_19934[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_19934[(1)] = (1));

return statearr_19934;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_19920){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_19920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e19935){var ex__2335__auto__ = e19935;
var statearr_19936_19951 = state_19920;
(statearr_19936_19951[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_19920[(4)]))){
var statearr_19937_19952 = state_19920;
(statearr_19937_19952[(1)] = cljs.core.first.call(null,(state_19920[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19953 = state_19920;
state_19920 = G__19953;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_19920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_19920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__16541__auto__ = (function (){var statearr_19938 = f__16540__auto__.call(null);
(statearr_19938[(6)] = c__16539__auto___19940);

return statearr_19938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16541__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19955 = arguments.length;
switch (G__19955) {
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
var c__16539__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16540__auto__ = (function (){var switch__2331__auto__ = (function (state_20018){
var state_val_20019 = (state_20018[(1)]);
if((state_val_20019 === (7))){
var inst_20014 = (state_20018[(2)]);
var state_20018__$1 = state_20018;
var statearr_20020_20059 = state_20018__$1;
(statearr_20020_20059[(2)] = inst_20014);

(statearr_20020_20059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20019 === (20))){
var inst_19984 = (state_20018[(7)]);
var inst_19995 = (state_20018[(2)]);
var inst_19996 = cljs.core.next.call(null,inst_19984);
var inst_19970 = inst_19996;
var inst_19971 = null;
var inst_19972 = (0);
var inst_19973 = (0);
var state_20018__$1 = (function (){var statearr_20021 = state_20018;
(statearr_20021[(8)] = inst_19995);

(statearr_20021[(9)] = inst_19970);

(statearr_20021[(10)] = inst_19971);

(statearr_20021[(11)] = inst_19972);

(statearr_20021[(12)] = inst_19973);

return statearr_20021;
})();
var statearr_20022_20060 = state_20018__$1;
(statearr_20022_20060[(2)] = null);

(statearr_20022_20060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20019 === (1))){
var state_20018__$1 = state_20018;
var statearr_20023_20061 = state_20018__$1;
(statearr_20023_20061[(2)] = null);

(statearr_20023_20061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20019 === (4))){
var inst_19959 = (state_20018[(13)]);
var inst_19959__$1 = (state_20018[(2)]);
var inst_19960 = (inst_19959__$1 == null);
var state_20018__$1 = (function (){var statearr_20024 = state_20018;
(statearr_20024[(13)] = inst_19959__$1);

return statearr_20024;
})();
if(cljs.core.truth_(inst_19960)){
var statearr_20025_20062 = state_20018__$1;
(statearr_20025_20062[(1)] = (5));

} else {
var statearr_20026_20063 = state_20018__$1;
(statearr_20026_20063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20019 === (15))){
var state_20018__$1 = state_20018;
var statearr_20030_20064 = state_20018__$1;
(statearr_20030_20064[(2)] = null);

(statearr_20030_20064[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20019 === (21))){
var state_20018__$1 = state_20018;
var statearr_20031_20065 = state_20018__$1;
(statearr_20031_20065[(2)] = null);

(statearr_20031_20065[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20019 === (13))){
var inst_19973 = (state_20018[(12)]);
var inst_19970 = (state_20018[(9)]);
var inst_19971 = (state_20018[(10)]);
var inst_19972 = (state_20018[(11)]);
var inst_19980 = (state_20018[(2)]);
var inst_19981 = (inst_19973 + (1));
var tmp20027 = inst_19971;
var tmp20028 = inst_19972;
var tmp20029 = inst_19970;
var inst_19970__$1 = tmp20029;
var inst_19971__$1 = tmp20027;
var inst_19972__$1 = tmp20028;
var inst_19973__$1 = inst_19981;
var state_20018__$1 = (function (){var statearr_20032 = state_20018;
(statearr_20032[(14)] = inst_19980);

(statearr_20032[(9)] = inst_19970__$1);

(statearr_20032[(10)] = inst_19971__$1);

(statearr_20032[(11)] = inst_19972__$1);

(statearr_20032[(12)] = inst_19973__$1);

return statearr_20032;
})();
var statearr_20033_20066 = state_20018__$1;
(statearr_20033_20066[(2)] = null);

(statearr_20033_20066[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20019 === (22))){
var state_20018__$1 = state_20018;
var statearr_20034_20067 = state_20018__$1;
(statearr_20034_20067[(2)] = null);

(statearr_20034_20067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20019 === (6))){
var inst_19959 = (state_20018[(13)]);
var inst_19968 = f.call(null,inst_19959);
var inst_19969 = cljs.core.seq.call(null,inst_19968);
var inst_19970 = inst_19969;
var inst_19971 = null;
var inst_19972 = (0);
var inst_19973 = (0);
var state_20018__$1 = (function (){var statearr_20035 = state_20018;
(statearr_20035[(9)] = inst_19970);

(statearr_20035[(10)] = inst_19971);

(statearr_20035[(11)] = inst_19972);

(statearr_20035[(12)] = inst_19973);

return statearr_20035;
})();
var statearr_20036_20068 = state_20018__$1;
(statearr_20036_20068[(2)] = null);

(statearr_20036_20068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20019 === (17))){
var inst_19984 = (state_20018[(7)]);
var inst_19988 = cljs.core.chunk_first.call(null,inst_19984);
var inst_19989 = cljs.core.chunk_rest.call(null,inst_19984);
var inst_19990 = cljs.core.count.call(null,inst_19988);
var inst_19970 = inst_19989;
var inst_19971 = inst_19988;
var inst_19972 = inst_19990;
var inst_19973 = (0);
var state_20018__$1 = (function (){var statearr_20037 = state_20018;
(statearr_20037[(9)] = inst_19970);

(statearr_20037[(10)] = inst_19971);

(statearr_20037[(11)] = inst_19972);

(statearr_20037[(12)] = inst_19973);

return statearr_20037;
})();
var statearr_20038_20069 = state_20018__$1;
(statearr_20038_20069[(2)] = null);

(statearr_20038_20069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20019 === (3))){
var inst_20016 = (state_20018[(2)]);
var state_20018__$1 = state_20018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20018__$1,inst_20016);
} else {
if((state_val_20019 === (12))){
var inst_20004 = (state_20018[(2)]);
var state_20018__$1 = state_20018;
var statearr_20039_20070 = state_20018__$1;
(statearr_20039_20070[(2)] = inst_20004);

(statearr_20039_20070[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20019 === (2))){
var state_20018__$1 = state_20018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20018__$1,(4),in$);
} else {
if((state_val_20019 === (23))){
var inst_20012 = (state_20018[(2)]);
var state_20018__$1 = state_20018;
var statearr_20040_20071 = state_20018__$1;
(statearr_20040_20071[(2)] = inst_20012);

(statearr_20040_20071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20019 === (19))){
var inst_19999 = (state_20018[(2)]);
var state_20018__$1 = state_20018;
var statearr_20041_20072 = state_20018__$1;
(statearr_20041_20072[(2)] = inst_19999);

(statearr_20041_20072[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20019 === (11))){
var inst_19970 = (state_20018[(9)]);
var inst_19984 = (state_20018[(7)]);
var inst_19984__$1 = cljs.core.seq.call(null,inst_19970);
var state_20018__$1 = (function (){var statearr_20042 = state_20018;
(statearr_20042[(7)] = inst_19984__$1);

return statearr_20042;
})();
if(inst_19984__$1){
var statearr_20043_20073 = state_20018__$1;
(statearr_20043_20073[(1)] = (14));

} else {
var statearr_20044_20074 = state_20018__$1;
(statearr_20044_20074[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20019 === (9))){
var inst_20006 = (state_20018[(2)]);
var inst_20007 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20018__$1 = (function (){var statearr_20045 = state_20018;
(statearr_20045[(15)] = inst_20006);

return statearr_20045;
})();
if(cljs.core.truth_(inst_20007)){
var statearr_20046_20075 = state_20018__$1;
(statearr_20046_20075[(1)] = (21));

} else {
var statearr_20047_20076 = state_20018__$1;
(statearr_20047_20076[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20019 === (5))){
var inst_19962 = cljs.core.async.close_BANG_.call(null,out);
var state_20018__$1 = state_20018;
var statearr_20048_20077 = state_20018__$1;
(statearr_20048_20077[(2)] = inst_19962);

(statearr_20048_20077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20019 === (14))){
var inst_19984 = (state_20018[(7)]);
var inst_19986 = cljs.core.chunked_seq_QMARK_.call(null,inst_19984);
var state_20018__$1 = state_20018;
if(inst_19986){
var statearr_20049_20078 = state_20018__$1;
(statearr_20049_20078[(1)] = (17));

} else {
var statearr_20050_20079 = state_20018__$1;
(statearr_20050_20079[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20019 === (16))){
var inst_20002 = (state_20018[(2)]);
var state_20018__$1 = state_20018;
var statearr_20051_20080 = state_20018__$1;
(statearr_20051_20080[(2)] = inst_20002);

(statearr_20051_20080[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20019 === (10))){
var inst_19971 = (state_20018[(10)]);
var inst_19973 = (state_20018[(12)]);
var inst_19978 = cljs.core._nth.call(null,inst_19971,inst_19973);
var state_20018__$1 = state_20018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20018__$1,(13),out,inst_19978);
} else {
if((state_val_20019 === (18))){
var inst_19984 = (state_20018[(7)]);
var inst_19993 = cljs.core.first.call(null,inst_19984);
var state_20018__$1 = state_20018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20018__$1,(20),out,inst_19993);
} else {
if((state_val_20019 === (8))){
var inst_19973 = (state_20018[(12)]);
var inst_19972 = (state_20018[(11)]);
var inst_19975 = (inst_19973 < inst_19972);
var inst_19976 = inst_19975;
var state_20018__$1 = state_20018;
if(cljs.core.truth_(inst_19976)){
var statearr_20052_20081 = state_20018__$1;
(statearr_20052_20081[(1)] = (10));

} else {
var statearr_20053_20082 = state_20018__$1;
(statearr_20053_20082[(1)] = (11));

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
var statearr_20054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20054[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__2332__auto__);

(statearr_20054[(1)] = (1));

return statearr_20054;
});
var cljs$core$async$mapcat_STAR__$_state_machine__2332__auto____1 = (function (state_20018){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_20018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e20055){var ex__2335__auto__ = e20055;
var statearr_20056_20083 = state_20018;
(statearr_20056_20083[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_20018[(4)]))){
var statearr_20057_20084 = state_20018;
(statearr_20057_20084[(1)] = cljs.core.first.call(null,(state_20018[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20085 = state_20018;
state_20018 = G__20085;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__2332__auto__ = function(state_20018){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__2332__auto____1.call(this,state_20018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__2332__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__2332__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__2332__auto__;
})()
})();
var state__16541__auto__ = (function (){var statearr_20058 = f__16540__auto__.call(null);
(statearr_20058[(6)] = c__16539__auto__);

return statearr_20058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16541__auto__);
}));

return c__16539__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20087 = arguments.length;
switch (G__20087) {
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
var G__20090 = arguments.length;
switch (G__20090) {
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
var G__20093 = arguments.length;
switch (G__20093) {
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
var c__16539__auto___20141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16540__auto__ = (function (){var switch__2331__auto__ = (function (state_20117){
var state_val_20118 = (state_20117[(1)]);
if((state_val_20118 === (7))){
var inst_20112 = (state_20117[(2)]);
var state_20117__$1 = state_20117;
var statearr_20119_20142 = state_20117__$1;
(statearr_20119_20142[(2)] = inst_20112);

(statearr_20119_20142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20118 === (1))){
var inst_20094 = null;
var state_20117__$1 = (function (){var statearr_20120 = state_20117;
(statearr_20120[(7)] = inst_20094);

return statearr_20120;
})();
var statearr_20121_20143 = state_20117__$1;
(statearr_20121_20143[(2)] = null);

(statearr_20121_20143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20118 === (4))){
var inst_20097 = (state_20117[(8)]);
var inst_20097__$1 = (state_20117[(2)]);
var inst_20098 = (inst_20097__$1 == null);
var inst_20099 = cljs.core.not.call(null,inst_20098);
var state_20117__$1 = (function (){var statearr_20122 = state_20117;
(statearr_20122[(8)] = inst_20097__$1);

return statearr_20122;
})();
if(inst_20099){
var statearr_20123_20144 = state_20117__$1;
(statearr_20123_20144[(1)] = (5));

} else {
var statearr_20124_20145 = state_20117__$1;
(statearr_20124_20145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20118 === (6))){
var state_20117__$1 = state_20117;
var statearr_20125_20146 = state_20117__$1;
(statearr_20125_20146[(2)] = null);

(statearr_20125_20146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20118 === (3))){
var inst_20114 = (state_20117[(2)]);
var inst_20115 = cljs.core.async.close_BANG_.call(null,out);
var state_20117__$1 = (function (){var statearr_20126 = state_20117;
(statearr_20126[(9)] = inst_20114);

return statearr_20126;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20117__$1,inst_20115);
} else {
if((state_val_20118 === (2))){
var state_20117__$1 = state_20117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20117__$1,(4),ch);
} else {
if((state_val_20118 === (11))){
var inst_20097 = (state_20117[(8)]);
var inst_20106 = (state_20117[(2)]);
var inst_20094 = inst_20097;
var state_20117__$1 = (function (){var statearr_20127 = state_20117;
(statearr_20127[(10)] = inst_20106);

(statearr_20127[(7)] = inst_20094);

return statearr_20127;
})();
var statearr_20128_20147 = state_20117__$1;
(statearr_20128_20147[(2)] = null);

(statearr_20128_20147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20118 === (9))){
var inst_20097 = (state_20117[(8)]);
var state_20117__$1 = state_20117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20117__$1,(11),out,inst_20097);
} else {
if((state_val_20118 === (5))){
var inst_20097 = (state_20117[(8)]);
var inst_20094 = (state_20117[(7)]);
var inst_20101 = cljs.core._EQ_.call(null,inst_20097,inst_20094);
var state_20117__$1 = state_20117;
if(inst_20101){
var statearr_20130_20148 = state_20117__$1;
(statearr_20130_20148[(1)] = (8));

} else {
var statearr_20131_20149 = state_20117__$1;
(statearr_20131_20149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20118 === (10))){
var inst_20109 = (state_20117[(2)]);
var state_20117__$1 = state_20117;
var statearr_20132_20150 = state_20117__$1;
(statearr_20132_20150[(2)] = inst_20109);

(statearr_20132_20150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20118 === (8))){
var inst_20094 = (state_20117[(7)]);
var tmp20129 = inst_20094;
var inst_20094__$1 = tmp20129;
var state_20117__$1 = (function (){var statearr_20133 = state_20117;
(statearr_20133[(7)] = inst_20094__$1);

return statearr_20133;
})();
var statearr_20134_20151 = state_20117__$1;
(statearr_20134_20151[(2)] = null);

(statearr_20134_20151[(1)] = (2));


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
var statearr_20135 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20135[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_20135[(1)] = (1));

return statearr_20135;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_20117){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_20117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e20136){var ex__2335__auto__ = e20136;
var statearr_20137_20152 = state_20117;
(statearr_20137_20152[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_20117[(4)]))){
var statearr_20138_20153 = state_20117;
(statearr_20138_20153[(1)] = cljs.core.first.call(null,(state_20117[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20154 = state_20117;
state_20117 = G__20154;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_20117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_20117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__16541__auto__ = (function (){var statearr_20139 = f__16540__auto__.call(null);
(statearr_20139[(6)] = c__16539__auto___20141);

return statearr_20139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16541__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20156 = arguments.length;
switch (G__20156) {
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
var c__16539__auto___20223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16540__auto__ = (function (){var switch__2331__auto__ = (function (state_20194){
var state_val_20195 = (state_20194[(1)]);
if((state_val_20195 === (7))){
var inst_20190 = (state_20194[(2)]);
var state_20194__$1 = state_20194;
var statearr_20196_20224 = state_20194__$1;
(statearr_20196_20224[(2)] = inst_20190);

(statearr_20196_20224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20195 === (1))){
var inst_20157 = (new Array(n));
var inst_20158 = inst_20157;
var inst_20159 = (0);
var state_20194__$1 = (function (){var statearr_20197 = state_20194;
(statearr_20197[(7)] = inst_20158);

(statearr_20197[(8)] = inst_20159);

return statearr_20197;
})();
var statearr_20198_20225 = state_20194__$1;
(statearr_20198_20225[(2)] = null);

(statearr_20198_20225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20195 === (4))){
var inst_20162 = (state_20194[(9)]);
var inst_20162__$1 = (state_20194[(2)]);
var inst_20163 = (inst_20162__$1 == null);
var inst_20164 = cljs.core.not.call(null,inst_20163);
var state_20194__$1 = (function (){var statearr_20199 = state_20194;
(statearr_20199[(9)] = inst_20162__$1);

return statearr_20199;
})();
if(inst_20164){
var statearr_20200_20226 = state_20194__$1;
(statearr_20200_20226[(1)] = (5));

} else {
var statearr_20201_20227 = state_20194__$1;
(statearr_20201_20227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20195 === (15))){
var inst_20184 = (state_20194[(2)]);
var state_20194__$1 = state_20194;
var statearr_20202_20228 = state_20194__$1;
(statearr_20202_20228[(2)] = inst_20184);

(statearr_20202_20228[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20195 === (13))){
var state_20194__$1 = state_20194;
var statearr_20203_20229 = state_20194__$1;
(statearr_20203_20229[(2)] = null);

(statearr_20203_20229[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20195 === (6))){
var inst_20159 = (state_20194[(8)]);
var inst_20180 = (inst_20159 > (0));
var state_20194__$1 = state_20194;
if(cljs.core.truth_(inst_20180)){
var statearr_20204_20230 = state_20194__$1;
(statearr_20204_20230[(1)] = (12));

} else {
var statearr_20205_20231 = state_20194__$1;
(statearr_20205_20231[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20195 === (3))){
var inst_20192 = (state_20194[(2)]);
var state_20194__$1 = state_20194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20194__$1,inst_20192);
} else {
if((state_val_20195 === (12))){
var inst_20158 = (state_20194[(7)]);
var inst_20182 = cljs.core.vec.call(null,inst_20158);
var state_20194__$1 = state_20194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20194__$1,(15),out,inst_20182);
} else {
if((state_val_20195 === (2))){
var state_20194__$1 = state_20194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20194__$1,(4),ch);
} else {
if((state_val_20195 === (11))){
var inst_20174 = (state_20194[(2)]);
var inst_20175 = (new Array(n));
var inst_20158 = inst_20175;
var inst_20159 = (0);
var state_20194__$1 = (function (){var statearr_20206 = state_20194;
(statearr_20206[(10)] = inst_20174);

(statearr_20206[(7)] = inst_20158);

(statearr_20206[(8)] = inst_20159);

return statearr_20206;
})();
var statearr_20207_20232 = state_20194__$1;
(statearr_20207_20232[(2)] = null);

(statearr_20207_20232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20195 === (9))){
var inst_20158 = (state_20194[(7)]);
var inst_20172 = cljs.core.vec.call(null,inst_20158);
var state_20194__$1 = state_20194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20194__$1,(11),out,inst_20172);
} else {
if((state_val_20195 === (5))){
var inst_20158 = (state_20194[(7)]);
var inst_20159 = (state_20194[(8)]);
var inst_20162 = (state_20194[(9)]);
var inst_20167 = (state_20194[(11)]);
var inst_20166 = (inst_20158[inst_20159] = inst_20162);
var inst_20167__$1 = (inst_20159 + (1));
var inst_20168 = (inst_20167__$1 < n);
var state_20194__$1 = (function (){var statearr_20208 = state_20194;
(statearr_20208[(12)] = inst_20166);

(statearr_20208[(11)] = inst_20167__$1);

return statearr_20208;
})();
if(cljs.core.truth_(inst_20168)){
var statearr_20209_20233 = state_20194__$1;
(statearr_20209_20233[(1)] = (8));

} else {
var statearr_20210_20234 = state_20194__$1;
(statearr_20210_20234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20195 === (14))){
var inst_20187 = (state_20194[(2)]);
var inst_20188 = cljs.core.async.close_BANG_.call(null,out);
var state_20194__$1 = (function (){var statearr_20212 = state_20194;
(statearr_20212[(13)] = inst_20187);

return statearr_20212;
})();
var statearr_20213_20235 = state_20194__$1;
(statearr_20213_20235[(2)] = inst_20188);

(statearr_20213_20235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20195 === (10))){
var inst_20178 = (state_20194[(2)]);
var state_20194__$1 = state_20194;
var statearr_20214_20236 = state_20194__$1;
(statearr_20214_20236[(2)] = inst_20178);

(statearr_20214_20236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20195 === (8))){
var inst_20158 = (state_20194[(7)]);
var inst_20167 = (state_20194[(11)]);
var tmp20211 = inst_20158;
var inst_20158__$1 = tmp20211;
var inst_20159 = inst_20167;
var state_20194__$1 = (function (){var statearr_20215 = state_20194;
(statearr_20215[(7)] = inst_20158__$1);

(statearr_20215[(8)] = inst_20159);

return statearr_20215;
})();
var statearr_20216_20237 = state_20194__$1;
(statearr_20216_20237[(2)] = null);

(statearr_20216_20237[(1)] = (2));


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
var statearr_20217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20217[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_20217[(1)] = (1));

return statearr_20217;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_20194){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_20194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e20218){var ex__2335__auto__ = e20218;
var statearr_20219_20238 = state_20194;
(statearr_20219_20238[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_20194[(4)]))){
var statearr_20220_20239 = state_20194;
(statearr_20220_20239[(1)] = cljs.core.first.call(null,(state_20194[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20240 = state_20194;
state_20194 = G__20240;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_20194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_20194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__16541__auto__ = (function (){var statearr_20221 = f__16540__auto__.call(null);
(statearr_20221[(6)] = c__16539__auto___20223);

return statearr_20221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16541__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20242 = arguments.length;
switch (G__20242) {
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
var c__16539__auto___20320 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16540__auto__ = (function (){var switch__2331__auto__ = (function (state_20287){
var state_val_20288 = (state_20287[(1)]);
if((state_val_20288 === (7))){
var inst_20283 = (state_20287[(2)]);
var state_20287__$1 = state_20287;
var statearr_20289_20321 = state_20287__$1;
(statearr_20289_20321[(2)] = inst_20283);

(statearr_20289_20321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20288 === (1))){
var inst_20243 = [];
var inst_20244 = inst_20243;
var inst_20245 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20287__$1 = (function (){var statearr_20290 = state_20287;
(statearr_20290[(7)] = inst_20244);

(statearr_20290[(8)] = inst_20245);

return statearr_20290;
})();
var statearr_20291_20322 = state_20287__$1;
(statearr_20291_20322[(2)] = null);

(statearr_20291_20322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20288 === (4))){
var inst_20248 = (state_20287[(9)]);
var inst_20248__$1 = (state_20287[(2)]);
var inst_20249 = (inst_20248__$1 == null);
var inst_20250 = cljs.core.not.call(null,inst_20249);
var state_20287__$1 = (function (){var statearr_20292 = state_20287;
(statearr_20292[(9)] = inst_20248__$1);

return statearr_20292;
})();
if(inst_20250){
var statearr_20293_20323 = state_20287__$1;
(statearr_20293_20323[(1)] = (5));

} else {
var statearr_20294_20324 = state_20287__$1;
(statearr_20294_20324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20288 === (15))){
var inst_20244 = (state_20287[(7)]);
var inst_20275 = cljs.core.vec.call(null,inst_20244);
var state_20287__$1 = state_20287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20287__$1,(18),out,inst_20275);
} else {
if((state_val_20288 === (13))){
var inst_20270 = (state_20287[(2)]);
var state_20287__$1 = state_20287;
var statearr_20295_20325 = state_20287__$1;
(statearr_20295_20325[(2)] = inst_20270);

(statearr_20295_20325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20288 === (6))){
var inst_20244 = (state_20287[(7)]);
var inst_20272 = inst_20244.length;
var inst_20273 = (inst_20272 > (0));
var state_20287__$1 = state_20287;
if(cljs.core.truth_(inst_20273)){
var statearr_20296_20326 = state_20287__$1;
(statearr_20296_20326[(1)] = (15));

} else {
var statearr_20297_20327 = state_20287__$1;
(statearr_20297_20327[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20288 === (17))){
var inst_20280 = (state_20287[(2)]);
var inst_20281 = cljs.core.async.close_BANG_.call(null,out);
var state_20287__$1 = (function (){var statearr_20298 = state_20287;
(statearr_20298[(10)] = inst_20280);

return statearr_20298;
})();
var statearr_20299_20328 = state_20287__$1;
(statearr_20299_20328[(2)] = inst_20281);

(statearr_20299_20328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20288 === (3))){
var inst_20285 = (state_20287[(2)]);
var state_20287__$1 = state_20287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20287__$1,inst_20285);
} else {
if((state_val_20288 === (12))){
var inst_20244 = (state_20287[(7)]);
var inst_20263 = cljs.core.vec.call(null,inst_20244);
var state_20287__$1 = state_20287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20287__$1,(14),out,inst_20263);
} else {
if((state_val_20288 === (2))){
var state_20287__$1 = state_20287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20287__$1,(4),ch);
} else {
if((state_val_20288 === (11))){
var inst_20244 = (state_20287[(7)]);
var inst_20248 = (state_20287[(9)]);
var inst_20252 = (state_20287[(11)]);
var inst_20260 = inst_20244.push(inst_20248);
var tmp20300 = inst_20244;
var inst_20244__$1 = tmp20300;
var inst_20245 = inst_20252;
var state_20287__$1 = (function (){var statearr_20301 = state_20287;
(statearr_20301[(12)] = inst_20260);

(statearr_20301[(7)] = inst_20244__$1);

(statearr_20301[(8)] = inst_20245);

return statearr_20301;
})();
var statearr_20302_20329 = state_20287__$1;
(statearr_20302_20329[(2)] = null);

(statearr_20302_20329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20288 === (9))){
var inst_20245 = (state_20287[(8)]);
var inst_20256 = cljs.core.keyword_identical_QMARK_.call(null,inst_20245,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_20287__$1 = state_20287;
var statearr_20303_20330 = state_20287__$1;
(statearr_20303_20330[(2)] = inst_20256);

(statearr_20303_20330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20288 === (5))){
var inst_20248 = (state_20287[(9)]);
var inst_20252 = (state_20287[(11)]);
var inst_20245 = (state_20287[(8)]);
var inst_20253 = (state_20287[(13)]);
var inst_20252__$1 = f.call(null,inst_20248);
var inst_20253__$1 = cljs.core._EQ_.call(null,inst_20252__$1,inst_20245);
var state_20287__$1 = (function (){var statearr_20304 = state_20287;
(statearr_20304[(11)] = inst_20252__$1);

(statearr_20304[(13)] = inst_20253__$1);

return statearr_20304;
})();
if(inst_20253__$1){
var statearr_20305_20331 = state_20287__$1;
(statearr_20305_20331[(1)] = (8));

} else {
var statearr_20306_20332 = state_20287__$1;
(statearr_20306_20332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20288 === (14))){
var inst_20248 = (state_20287[(9)]);
var inst_20252 = (state_20287[(11)]);
var inst_20265 = (state_20287[(2)]);
var inst_20266 = [];
var inst_20267 = inst_20266.push(inst_20248);
var inst_20244 = inst_20266;
var inst_20245 = inst_20252;
var state_20287__$1 = (function (){var statearr_20307 = state_20287;
(statearr_20307[(14)] = inst_20265);

(statearr_20307[(15)] = inst_20267);

(statearr_20307[(7)] = inst_20244);

(statearr_20307[(8)] = inst_20245);

return statearr_20307;
})();
var statearr_20308_20333 = state_20287__$1;
(statearr_20308_20333[(2)] = null);

(statearr_20308_20333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20288 === (16))){
var state_20287__$1 = state_20287;
var statearr_20309_20334 = state_20287__$1;
(statearr_20309_20334[(2)] = null);

(statearr_20309_20334[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20288 === (10))){
var inst_20258 = (state_20287[(2)]);
var state_20287__$1 = state_20287;
if(cljs.core.truth_(inst_20258)){
var statearr_20310_20335 = state_20287__$1;
(statearr_20310_20335[(1)] = (11));

} else {
var statearr_20311_20336 = state_20287__$1;
(statearr_20311_20336[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20288 === (18))){
var inst_20277 = (state_20287[(2)]);
var state_20287__$1 = state_20287;
var statearr_20312_20337 = state_20287__$1;
(statearr_20312_20337[(2)] = inst_20277);

(statearr_20312_20337[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20288 === (8))){
var inst_20253 = (state_20287[(13)]);
var state_20287__$1 = state_20287;
var statearr_20313_20338 = state_20287__$1;
(statearr_20313_20338[(2)] = inst_20253);

(statearr_20313_20338[(1)] = (10));


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
var statearr_20314 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20314[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_20314[(1)] = (1));

return statearr_20314;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_20287){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_20287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e20315){var ex__2335__auto__ = e20315;
var statearr_20316_20339 = state_20287;
(statearr_20316_20339[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_20287[(4)]))){
var statearr_20317_20340 = state_20287;
(statearr_20317_20340[(1)] = cljs.core.first.call(null,(state_20287[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20341 = state_20287;
state_20287 = G__20341;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_20287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_20287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__16541__auto__ = (function (){var statearr_20318 = f__16540__auto__.call(null);
(statearr_20318[(6)] = c__16539__auto___20320);

return statearr_20318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16541__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
