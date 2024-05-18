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
var G__8337 = arguments.length;
switch (G__8337) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8338 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8338 = (function (f,blockable,meta8339){
this.f = f;
this.blockable = blockable;
this.meta8339 = meta8339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async8338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8340,meta8339__$1){
var self__ = this;
var _8340__$1 = this;
return (new cljs.core.async.t_cljs$core$async8338(self__.f,self__.blockable,meta8339__$1));
}));

(cljs.core.async.t_cljs$core$async8338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8340){
var self__ = this;
var _8340__$1 = this;
return self__.meta8339;
}));

(cljs.core.async.t_cljs$core$async8338.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async8338.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async8338.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async8338.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async8338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta8339","meta8339",-808820516,null)], null);
}));

(cljs.core.async.t_cljs$core$async8338.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async8338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8338");

(cljs.core.async.t_cljs$core$async8338.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async8338");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8338.
 */
cljs.core.async.__GT_t_cljs$core$async8338 = (function cljs$core$async$__GT_t_cljs$core$async8338(f__$1,blockable__$1,meta8339){
return (new cljs.core.async.t_cljs$core$async8338(f__$1,blockable__$1,meta8339));
});

}

return (new cljs.core.async.t_cljs$core$async8338(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__8344 = arguments.length;
switch (G__8344) {
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
var G__8347 = arguments.length;
switch (G__8347) {
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
var G__8350 = arguments.length;
switch (G__8350) {
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
var val_8352 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_8352);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_8352);
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
var G__8354 = arguments.length;
switch (G__8354) {
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
var n__5593__auto___8356 = n;
var x_8357 = (0);
while(true){
if((x_8357 < n__5593__auto___8356)){
(a[x_8357] = x_8357);

var G__8358 = (x_8357 + (1));
x_8357 = G__8358;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8359 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8359 = (function (flag,meta8360){
this.flag = flag;
this.meta8360 = meta8360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async8359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8361,meta8360__$1){
var self__ = this;
var _8361__$1 = this;
return (new cljs.core.async.t_cljs$core$async8359(self__.flag,meta8360__$1));
}));

(cljs.core.async.t_cljs$core$async8359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8361){
var self__ = this;
var _8361__$1 = this;
return self__.meta8360;
}));

(cljs.core.async.t_cljs$core$async8359.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async8359.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async8359.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async8359.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async8359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta8360","meta8360",1083170837,null)], null);
}));

(cljs.core.async.t_cljs$core$async8359.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async8359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8359");

(cljs.core.async.t_cljs$core$async8359.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async8359");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8359.
 */
cljs.core.async.__GT_t_cljs$core$async8359 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async8359(flag__$1,meta8360){
return (new cljs.core.async.t_cljs$core$async8359(flag__$1,meta8360));
});

}

return (new cljs.core.async.t_cljs$core$async8359(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8362 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8362 = (function (flag,cb,meta8363){
this.flag = flag;
this.cb = cb;
this.meta8363 = meta8363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async8362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8364,meta8363__$1){
var self__ = this;
var _8364__$1 = this;
return (new cljs.core.async.t_cljs$core$async8362(self__.flag,self__.cb,meta8363__$1));
}));

(cljs.core.async.t_cljs$core$async8362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8364){
var self__ = this;
var _8364__$1 = this;
return self__.meta8363;
}));

(cljs.core.async.t_cljs$core$async8362.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async8362.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async8362.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async8362.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async8362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta8363","meta8363",-1849075297,null)], null);
}));

(cljs.core.async.t_cljs$core$async8362.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async8362.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8362");

(cljs.core.async.t_cljs$core$async8362.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async8362");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8362.
 */
cljs.core.async.__GT_t_cljs$core$async8362 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async8362(flag__$1,cb__$1,meta8363){
return (new cljs.core.async.t_cljs$core$async8362(flag__$1,cb__$1,meta8363));
});

}

return (new cljs.core.async.t_cljs$core$async8362(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__8365_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8365_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__8366_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8366_SHARP_,port], null));
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
var G__8367 = (i + (1));
i = G__8367;
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
var len__5726__auto___8372 = arguments.length;
var i__5727__auto___8373 = (0);
while(true){
if((i__5727__auto___8373 < len__5726__auto___8372)){
args__5732__auto__.push((arguments[i__5727__auto___8373]));

var G__8374 = (i__5727__auto___8373 + (1));
i__5727__auto___8373 = G__8374;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__8370){
var map__8371 = p__8370;
var map__8371__$1 = cljs.core.__destructure_map.call(null,map__8371);
var opts = map__8371__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq8368){
var G__8369 = cljs.core.first.call(null,seq8368);
var seq8368__$1 = cljs.core.next.call(null,seq8368);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8369,seq8368__$1);
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
var G__8376 = arguments.length;
switch (G__8376) {
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
var c__8277__auto___8423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_8400){
var state_val_8401 = (state_8400[(1)]);
if((state_val_8401 === (7))){
var inst_8396 = (state_8400[(2)]);
var state_8400__$1 = state_8400;
var statearr_8402_8424 = state_8400__$1;
(statearr_8402_8424[(2)] = inst_8396);

(statearr_8402_8424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8401 === (1))){
var state_8400__$1 = state_8400;
var statearr_8403_8425 = state_8400__$1;
(statearr_8403_8425[(2)] = null);

(statearr_8403_8425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8401 === (4))){
var inst_8379 = (state_8400[(7)]);
var inst_8379__$1 = (state_8400[(2)]);
var inst_8380 = (inst_8379__$1 == null);
var state_8400__$1 = (function (){var statearr_8404 = state_8400;
(statearr_8404[(7)] = inst_8379__$1);

return statearr_8404;
})();
if(cljs.core.truth_(inst_8380)){
var statearr_8405_8426 = state_8400__$1;
(statearr_8405_8426[(1)] = (5));

} else {
var statearr_8406_8427 = state_8400__$1;
(statearr_8406_8427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8401 === (13))){
var state_8400__$1 = state_8400;
var statearr_8407_8428 = state_8400__$1;
(statearr_8407_8428[(2)] = null);

(statearr_8407_8428[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8401 === (6))){
var inst_8379 = (state_8400[(7)]);
var state_8400__$1 = state_8400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8400__$1,(11),to,inst_8379);
} else {
if((state_val_8401 === (3))){
var inst_8398 = (state_8400[(2)]);
var state_8400__$1 = state_8400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8400__$1,inst_8398);
} else {
if((state_val_8401 === (12))){
var state_8400__$1 = state_8400;
var statearr_8408_8429 = state_8400__$1;
(statearr_8408_8429[(2)] = null);

(statearr_8408_8429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8401 === (2))){
var state_8400__$1 = state_8400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8400__$1,(4),from);
} else {
if((state_val_8401 === (11))){
var inst_8389 = (state_8400[(2)]);
var state_8400__$1 = state_8400;
if(cljs.core.truth_(inst_8389)){
var statearr_8409_8430 = state_8400__$1;
(statearr_8409_8430[(1)] = (12));

} else {
var statearr_8410_8431 = state_8400__$1;
(statearr_8410_8431[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8401 === (9))){
var state_8400__$1 = state_8400;
var statearr_8411_8432 = state_8400__$1;
(statearr_8411_8432[(2)] = null);

(statearr_8411_8432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8401 === (5))){
var state_8400__$1 = state_8400;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8412_8433 = state_8400__$1;
(statearr_8412_8433[(1)] = (8));

} else {
var statearr_8413_8434 = state_8400__$1;
(statearr_8413_8434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8401 === (14))){
var inst_8394 = (state_8400[(2)]);
var state_8400__$1 = state_8400;
var statearr_8414_8435 = state_8400__$1;
(statearr_8414_8435[(2)] = inst_8394);

(statearr_8414_8435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8401 === (10))){
var inst_8386 = (state_8400[(2)]);
var state_8400__$1 = state_8400;
var statearr_8415_8436 = state_8400__$1;
(statearr_8415_8436[(2)] = inst_8386);

(statearr_8415_8436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8401 === (8))){
var inst_8383 = cljs.core.async.close_BANG_.call(null,to);
var state_8400__$1 = state_8400;
var statearr_8416_8437 = state_8400__$1;
(statearr_8416_8437[(2)] = inst_8383);

(statearr_8416_8437[(1)] = (10));


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
var statearr_8417 = [null,null,null,null,null,null,null,null];
(statearr_8417[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_8417[(1)] = (1));

return statearr_8417;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_8400){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_8400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e8418){var ex__2335__auto__ = e8418;
var statearr_8419_8438 = state_8400;
(statearr_8419_8438[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_8400[(4)]))){
var statearr_8420_8439 = state_8400;
(statearr_8420_8439[(1)] = cljs.core.first.call(null,(state_8400[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8440 = state_8400;
state_8400 = G__8440;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_8400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_8400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_8421 = f__8278__auto__.call(null);
(statearr_8421[(6)] = c__8277__auto___8423);

return statearr_8421;
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
var process__$1 = (function (p__8441){
var vec__8442 = p__8441;
var v = cljs.core.nth.call(null,vec__8442,(0),null);
var p = cljs.core.nth.call(null,vec__8442,(1),null);
var job = vec__8442;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8277__auto___8618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_8449){
var state_val_8450 = (state_8449[(1)]);
if((state_val_8450 === (1))){
var state_8449__$1 = state_8449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8449__$1,(2),res,v);
} else {
if((state_val_8450 === (2))){
var inst_8446 = (state_8449[(2)]);
var inst_8447 = cljs.core.async.close_BANG_.call(null,res);
var state_8449__$1 = (function (){var statearr_8451 = state_8449;
(statearr_8451[(7)] = inst_8446);

return statearr_8451;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8449__$1,inst_8447);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0 = (function (){
var statearr_8452 = [null,null,null,null,null,null,null,null];
(statearr_8452[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__);

(statearr_8452[(1)] = (1));

return statearr_8452;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1 = (function (state_8449){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_8449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e8453){var ex__2335__auto__ = e8453;
var statearr_8454_8619 = state_8449;
(statearr_8454_8619[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_8449[(4)]))){
var statearr_8455_8620 = state_8449;
(statearr_8455_8620[(1)] = cljs.core.first.call(null,(state_8449[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8621 = state_8449;
state_8449 = G__8621;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__ = function(state_8449){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1.call(this,state_8449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_8456 = f__8278__auto__.call(null);
(statearr_8456[(6)] = c__8277__auto___8618);

return statearr_8456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__8457){
var vec__8458 = p__8457;
var v = cljs.core.nth.call(null,vec__8458,(0),null);
var p = cljs.core.nth.call(null,vec__8458,(1),null);
var job = vec__8458;
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
var n__5593__auto___8622 = n;
var __8623 = (0);
while(true){
if((__8623 < n__5593__auto___8622)){
var G__8461_8624 = type;
var G__8461_8625__$1 = (((G__8461_8624 instanceof cljs.core.Keyword))?G__8461_8624.fqn:null);
switch (G__8461_8625__$1) {
case "compute":
var c__8277__auto___8627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__8623,c__8277__auto___8627,G__8461_8624,G__8461_8625__$1,n__5593__auto___8622,jobs,results,process__$1,async){
return (function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = ((function (__8623,c__8277__auto___8627,G__8461_8624,G__8461_8625__$1,n__5593__auto___8622,jobs,results,process__$1,async){
return (function (state_8474){
var state_val_8475 = (state_8474[(1)]);
if((state_val_8475 === (1))){
var state_8474__$1 = state_8474;
var statearr_8476_8628 = state_8474__$1;
(statearr_8476_8628[(2)] = null);

(statearr_8476_8628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8475 === (2))){
var state_8474__$1 = state_8474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8474__$1,(4),jobs);
} else {
if((state_val_8475 === (3))){
var inst_8472 = (state_8474[(2)]);
var state_8474__$1 = state_8474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8474__$1,inst_8472);
} else {
if((state_val_8475 === (4))){
var inst_8464 = (state_8474[(2)]);
var inst_8465 = process__$1.call(null,inst_8464);
var state_8474__$1 = state_8474;
if(cljs.core.truth_(inst_8465)){
var statearr_8477_8629 = state_8474__$1;
(statearr_8477_8629[(1)] = (5));

} else {
var statearr_8478_8630 = state_8474__$1;
(statearr_8478_8630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8475 === (5))){
var state_8474__$1 = state_8474;
var statearr_8479_8631 = state_8474__$1;
(statearr_8479_8631[(2)] = null);

(statearr_8479_8631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8475 === (6))){
var state_8474__$1 = state_8474;
var statearr_8480_8632 = state_8474__$1;
(statearr_8480_8632[(2)] = null);

(statearr_8480_8632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8475 === (7))){
var inst_8470 = (state_8474[(2)]);
var state_8474__$1 = state_8474;
var statearr_8481_8633 = state_8474__$1;
(statearr_8481_8633[(2)] = inst_8470);

(statearr_8481_8633[(1)] = (3));


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
});})(__8623,c__8277__auto___8627,G__8461_8624,G__8461_8625__$1,n__5593__auto___8622,jobs,results,process__$1,async))
;
return ((function (__8623,switch__2331__auto__,c__8277__auto___8627,G__8461_8624,G__8461_8625__$1,n__5593__auto___8622,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0 = (function (){
var statearr_8482 = [null,null,null,null,null,null,null];
(statearr_8482[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__);

(statearr_8482[(1)] = (1));

return statearr_8482;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1 = (function (state_8474){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_8474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e8483){var ex__2335__auto__ = e8483;
var statearr_8484_8634 = state_8474;
(statearr_8484_8634[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_8474[(4)]))){
var statearr_8485_8635 = state_8474;
(statearr_8485_8635[(1)] = cljs.core.first.call(null,(state_8474[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8636 = state_8474;
state_8474 = G__8636;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__ = function(state_8474){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1.call(this,state_8474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__;
})()
;})(__8623,switch__2331__auto__,c__8277__auto___8627,G__8461_8624,G__8461_8625__$1,n__5593__auto___8622,jobs,results,process__$1,async))
})();
var state__8279__auto__ = (function (){var statearr_8486 = f__8278__auto__.call(null);
(statearr_8486[(6)] = c__8277__auto___8627);

return statearr_8486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
});})(__8623,c__8277__auto___8627,G__8461_8624,G__8461_8625__$1,n__5593__auto___8622,jobs,results,process__$1,async))
);


break;
case "async":
var c__8277__auto___8637 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__8623,c__8277__auto___8637,G__8461_8624,G__8461_8625__$1,n__5593__auto___8622,jobs,results,process__$1,async){
return (function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = ((function (__8623,c__8277__auto___8637,G__8461_8624,G__8461_8625__$1,n__5593__auto___8622,jobs,results,process__$1,async){
return (function (state_8499){
var state_val_8500 = (state_8499[(1)]);
if((state_val_8500 === (1))){
var state_8499__$1 = state_8499;
var statearr_8501_8638 = state_8499__$1;
(statearr_8501_8638[(2)] = null);

(statearr_8501_8638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8500 === (2))){
var state_8499__$1 = state_8499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8499__$1,(4),jobs);
} else {
if((state_val_8500 === (3))){
var inst_8497 = (state_8499[(2)]);
var state_8499__$1 = state_8499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8499__$1,inst_8497);
} else {
if((state_val_8500 === (4))){
var inst_8489 = (state_8499[(2)]);
var inst_8490 = async.call(null,inst_8489);
var state_8499__$1 = state_8499;
if(cljs.core.truth_(inst_8490)){
var statearr_8502_8639 = state_8499__$1;
(statearr_8502_8639[(1)] = (5));

} else {
var statearr_8503_8640 = state_8499__$1;
(statearr_8503_8640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8500 === (5))){
var state_8499__$1 = state_8499;
var statearr_8504_8641 = state_8499__$1;
(statearr_8504_8641[(2)] = null);

(statearr_8504_8641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8500 === (6))){
var state_8499__$1 = state_8499;
var statearr_8505_8642 = state_8499__$1;
(statearr_8505_8642[(2)] = null);

(statearr_8505_8642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8500 === (7))){
var inst_8495 = (state_8499[(2)]);
var state_8499__$1 = state_8499;
var statearr_8506_8643 = state_8499__$1;
(statearr_8506_8643[(2)] = inst_8495);

(statearr_8506_8643[(1)] = (3));


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
});})(__8623,c__8277__auto___8637,G__8461_8624,G__8461_8625__$1,n__5593__auto___8622,jobs,results,process__$1,async))
;
return ((function (__8623,switch__2331__auto__,c__8277__auto___8637,G__8461_8624,G__8461_8625__$1,n__5593__auto___8622,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0 = (function (){
var statearr_8507 = [null,null,null,null,null,null,null];
(statearr_8507[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__);

(statearr_8507[(1)] = (1));

return statearr_8507;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1 = (function (state_8499){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_8499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e8508){var ex__2335__auto__ = e8508;
var statearr_8509_8644 = state_8499;
(statearr_8509_8644[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_8499[(4)]))){
var statearr_8510_8645 = state_8499;
(statearr_8510_8645[(1)] = cljs.core.first.call(null,(state_8499[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8646 = state_8499;
state_8499 = G__8646;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__ = function(state_8499){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1.call(this,state_8499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__;
})()
;})(__8623,switch__2331__auto__,c__8277__auto___8637,G__8461_8624,G__8461_8625__$1,n__5593__auto___8622,jobs,results,process__$1,async))
})();
var state__8279__auto__ = (function (){var statearr_8511 = f__8278__auto__.call(null);
(statearr_8511[(6)] = c__8277__auto___8637);

return statearr_8511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
});})(__8623,c__8277__auto___8637,G__8461_8624,G__8461_8625__$1,n__5593__auto___8622,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8461_8625__$1)].join('')));

}

var G__8647 = (__8623 + (1));
__8623 = G__8647;
continue;
} else {
}
break;
}

var c__8277__auto___8648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_8533){
var state_val_8534 = (state_8533[(1)]);
if((state_val_8534 === (7))){
var inst_8529 = (state_8533[(2)]);
var state_8533__$1 = state_8533;
var statearr_8535_8649 = state_8533__$1;
(statearr_8535_8649[(2)] = inst_8529);

(statearr_8535_8649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8534 === (1))){
var state_8533__$1 = state_8533;
var statearr_8536_8650 = state_8533__$1;
(statearr_8536_8650[(2)] = null);

(statearr_8536_8650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8534 === (4))){
var inst_8514 = (state_8533[(7)]);
var inst_8514__$1 = (state_8533[(2)]);
var inst_8515 = (inst_8514__$1 == null);
var state_8533__$1 = (function (){var statearr_8537 = state_8533;
(statearr_8537[(7)] = inst_8514__$1);

return statearr_8537;
})();
if(cljs.core.truth_(inst_8515)){
var statearr_8538_8651 = state_8533__$1;
(statearr_8538_8651[(1)] = (5));

} else {
var statearr_8539_8652 = state_8533__$1;
(statearr_8539_8652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8534 === (6))){
var inst_8514 = (state_8533[(7)]);
var inst_8519 = (state_8533[(8)]);
var inst_8519__$1 = cljs.core.async.chan.call(null,(1));
var inst_8520 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8521 = [inst_8514,inst_8519__$1];
var inst_8522 = (new cljs.core.PersistentVector(null,2,(5),inst_8520,inst_8521,null));
var state_8533__$1 = (function (){var statearr_8540 = state_8533;
(statearr_8540[(8)] = inst_8519__$1);

return statearr_8540;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8533__$1,(8),jobs,inst_8522);
} else {
if((state_val_8534 === (3))){
var inst_8531 = (state_8533[(2)]);
var state_8533__$1 = state_8533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8533__$1,inst_8531);
} else {
if((state_val_8534 === (2))){
var state_8533__$1 = state_8533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8533__$1,(4),from);
} else {
if((state_val_8534 === (9))){
var inst_8526 = (state_8533[(2)]);
var state_8533__$1 = (function (){var statearr_8541 = state_8533;
(statearr_8541[(9)] = inst_8526);

return statearr_8541;
})();
var statearr_8542_8653 = state_8533__$1;
(statearr_8542_8653[(2)] = null);

(statearr_8542_8653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8534 === (5))){
var inst_8517 = cljs.core.async.close_BANG_.call(null,jobs);
var state_8533__$1 = state_8533;
var statearr_8543_8654 = state_8533__$1;
(statearr_8543_8654[(2)] = inst_8517);

(statearr_8543_8654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8534 === (8))){
var inst_8519 = (state_8533[(8)]);
var inst_8524 = (state_8533[(2)]);
var state_8533__$1 = (function (){var statearr_8544 = state_8533;
(statearr_8544[(10)] = inst_8524);

return statearr_8544;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8533__$1,(9),results,inst_8519);
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
var statearr_8545 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8545[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__);

(statearr_8545[(1)] = (1));

return statearr_8545;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1 = (function (state_8533){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_8533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e8546){var ex__2335__auto__ = e8546;
var statearr_8547_8655 = state_8533;
(statearr_8547_8655[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_8533[(4)]))){
var statearr_8548_8656 = state_8533;
(statearr_8548_8656[(1)] = cljs.core.first.call(null,(state_8533[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8657 = state_8533;
state_8533 = G__8657;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__ = function(state_8533){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1.call(this,state_8533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_8549 = f__8278__auto__.call(null);
(statearr_8549[(6)] = c__8277__auto___8648);

return statearr_8549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
}));


var c__8277__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_8587){
var state_val_8588 = (state_8587[(1)]);
if((state_val_8588 === (7))){
var inst_8583 = (state_8587[(2)]);
var state_8587__$1 = state_8587;
var statearr_8589_8658 = state_8587__$1;
(statearr_8589_8658[(2)] = inst_8583);

(statearr_8589_8658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8588 === (20))){
var state_8587__$1 = state_8587;
var statearr_8590_8659 = state_8587__$1;
(statearr_8590_8659[(2)] = null);

(statearr_8590_8659[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8588 === (1))){
var state_8587__$1 = state_8587;
var statearr_8591_8660 = state_8587__$1;
(statearr_8591_8660[(2)] = null);

(statearr_8591_8660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8588 === (4))){
var inst_8552 = (state_8587[(7)]);
var inst_8552__$1 = (state_8587[(2)]);
var inst_8553 = (inst_8552__$1 == null);
var state_8587__$1 = (function (){var statearr_8592 = state_8587;
(statearr_8592[(7)] = inst_8552__$1);

return statearr_8592;
})();
if(cljs.core.truth_(inst_8553)){
var statearr_8593_8661 = state_8587__$1;
(statearr_8593_8661[(1)] = (5));

} else {
var statearr_8594_8662 = state_8587__$1;
(statearr_8594_8662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8588 === (15))){
var inst_8565 = (state_8587[(8)]);
var state_8587__$1 = state_8587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8587__$1,(18),to,inst_8565);
} else {
if((state_val_8588 === (21))){
var inst_8578 = (state_8587[(2)]);
var state_8587__$1 = state_8587;
var statearr_8595_8663 = state_8587__$1;
(statearr_8595_8663[(2)] = inst_8578);

(statearr_8595_8663[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8588 === (13))){
var inst_8580 = (state_8587[(2)]);
var state_8587__$1 = (function (){var statearr_8596 = state_8587;
(statearr_8596[(9)] = inst_8580);

return statearr_8596;
})();
var statearr_8597_8664 = state_8587__$1;
(statearr_8597_8664[(2)] = null);

(statearr_8597_8664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8588 === (6))){
var inst_8552 = (state_8587[(7)]);
var state_8587__$1 = state_8587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8587__$1,(11),inst_8552);
} else {
if((state_val_8588 === (17))){
var inst_8573 = (state_8587[(2)]);
var state_8587__$1 = state_8587;
if(cljs.core.truth_(inst_8573)){
var statearr_8598_8665 = state_8587__$1;
(statearr_8598_8665[(1)] = (19));

} else {
var statearr_8599_8666 = state_8587__$1;
(statearr_8599_8666[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8588 === (3))){
var inst_8585 = (state_8587[(2)]);
var state_8587__$1 = state_8587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8587__$1,inst_8585);
} else {
if((state_val_8588 === (12))){
var inst_8562 = (state_8587[(10)]);
var state_8587__$1 = state_8587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8587__$1,(14),inst_8562);
} else {
if((state_val_8588 === (2))){
var state_8587__$1 = state_8587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8587__$1,(4),results);
} else {
if((state_val_8588 === (19))){
var state_8587__$1 = state_8587;
var statearr_8600_8667 = state_8587__$1;
(statearr_8600_8667[(2)] = null);

(statearr_8600_8667[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8588 === (11))){
var inst_8562 = (state_8587[(2)]);
var state_8587__$1 = (function (){var statearr_8601 = state_8587;
(statearr_8601[(10)] = inst_8562);

return statearr_8601;
})();
var statearr_8602_8668 = state_8587__$1;
(statearr_8602_8668[(2)] = null);

(statearr_8602_8668[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8588 === (9))){
var state_8587__$1 = state_8587;
var statearr_8603_8669 = state_8587__$1;
(statearr_8603_8669[(2)] = null);

(statearr_8603_8669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8588 === (5))){
var state_8587__$1 = state_8587;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8604_8670 = state_8587__$1;
(statearr_8604_8670[(1)] = (8));

} else {
var statearr_8605_8671 = state_8587__$1;
(statearr_8605_8671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8588 === (14))){
var inst_8565 = (state_8587[(8)]);
var inst_8567 = (state_8587[(11)]);
var inst_8565__$1 = (state_8587[(2)]);
var inst_8566 = (inst_8565__$1 == null);
var inst_8567__$1 = cljs.core.not.call(null,inst_8566);
var state_8587__$1 = (function (){var statearr_8606 = state_8587;
(statearr_8606[(8)] = inst_8565__$1);

(statearr_8606[(11)] = inst_8567__$1);

return statearr_8606;
})();
if(inst_8567__$1){
var statearr_8607_8672 = state_8587__$1;
(statearr_8607_8672[(1)] = (15));

} else {
var statearr_8608_8673 = state_8587__$1;
(statearr_8608_8673[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8588 === (16))){
var inst_8567 = (state_8587[(11)]);
var state_8587__$1 = state_8587;
var statearr_8609_8674 = state_8587__$1;
(statearr_8609_8674[(2)] = inst_8567);

(statearr_8609_8674[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8588 === (10))){
var inst_8559 = (state_8587[(2)]);
var state_8587__$1 = state_8587;
var statearr_8610_8675 = state_8587__$1;
(statearr_8610_8675[(2)] = inst_8559);

(statearr_8610_8675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8588 === (18))){
var inst_8570 = (state_8587[(2)]);
var state_8587__$1 = state_8587;
var statearr_8611_8676 = state_8587__$1;
(statearr_8611_8676[(2)] = inst_8570);

(statearr_8611_8676[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8588 === (8))){
var inst_8556 = cljs.core.async.close_BANG_.call(null,to);
var state_8587__$1 = state_8587;
var statearr_8612_8677 = state_8587__$1;
(statearr_8612_8677[(2)] = inst_8556);

(statearr_8612_8677[(1)] = (10));


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
var statearr_8613 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8613[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__);

(statearr_8613[(1)] = (1));

return statearr_8613;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1 = (function (state_8587){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_8587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e8614){var ex__2335__auto__ = e8614;
var statearr_8615_8678 = state_8587;
(statearr_8615_8678[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_8587[(4)]))){
var statearr_8616_8679 = state_8587;
(statearr_8616_8679[(1)] = cljs.core.first.call(null,(state_8587[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8680 = state_8587;
state_8587 = G__8680;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__ = function(state_8587){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1.call(this,state_8587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2332__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_8617 = f__8278__auto__.call(null);
(statearr_8617[(6)] = c__8277__auto__);

return statearr_8617;
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
var G__8682 = arguments.length;
switch (G__8682) {
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
var G__8685 = arguments.length;
switch (G__8685) {
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
var G__8688 = arguments.length;
switch (G__8688) {
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
var c__8277__auto___8738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_8714){
var state_val_8715 = (state_8714[(1)]);
if((state_val_8715 === (7))){
var inst_8710 = (state_8714[(2)]);
var state_8714__$1 = state_8714;
var statearr_8716_8739 = state_8714__$1;
(statearr_8716_8739[(2)] = inst_8710);

(statearr_8716_8739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8715 === (1))){
var state_8714__$1 = state_8714;
var statearr_8717_8740 = state_8714__$1;
(statearr_8717_8740[(2)] = null);

(statearr_8717_8740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8715 === (4))){
var inst_8691 = (state_8714[(7)]);
var inst_8691__$1 = (state_8714[(2)]);
var inst_8692 = (inst_8691__$1 == null);
var state_8714__$1 = (function (){var statearr_8718 = state_8714;
(statearr_8718[(7)] = inst_8691__$1);

return statearr_8718;
})();
if(cljs.core.truth_(inst_8692)){
var statearr_8719_8741 = state_8714__$1;
(statearr_8719_8741[(1)] = (5));

} else {
var statearr_8720_8742 = state_8714__$1;
(statearr_8720_8742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8715 === (13))){
var state_8714__$1 = state_8714;
var statearr_8721_8743 = state_8714__$1;
(statearr_8721_8743[(2)] = null);

(statearr_8721_8743[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8715 === (6))){
var inst_8691 = (state_8714[(7)]);
var inst_8697 = p.call(null,inst_8691);
var state_8714__$1 = state_8714;
if(cljs.core.truth_(inst_8697)){
var statearr_8722_8744 = state_8714__$1;
(statearr_8722_8744[(1)] = (9));

} else {
var statearr_8723_8745 = state_8714__$1;
(statearr_8723_8745[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8715 === (3))){
var inst_8712 = (state_8714[(2)]);
var state_8714__$1 = state_8714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8714__$1,inst_8712);
} else {
if((state_val_8715 === (12))){
var state_8714__$1 = state_8714;
var statearr_8724_8746 = state_8714__$1;
(statearr_8724_8746[(2)] = null);

(statearr_8724_8746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8715 === (2))){
var state_8714__$1 = state_8714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8714__$1,(4),ch);
} else {
if((state_val_8715 === (11))){
var inst_8691 = (state_8714[(7)]);
var inst_8701 = (state_8714[(2)]);
var state_8714__$1 = state_8714;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8714__$1,(8),inst_8701,inst_8691);
} else {
if((state_val_8715 === (9))){
var state_8714__$1 = state_8714;
var statearr_8725_8747 = state_8714__$1;
(statearr_8725_8747[(2)] = tc);

(statearr_8725_8747[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8715 === (5))){
var inst_8694 = cljs.core.async.close_BANG_.call(null,tc);
var inst_8695 = cljs.core.async.close_BANG_.call(null,fc);
var state_8714__$1 = (function (){var statearr_8726 = state_8714;
(statearr_8726[(8)] = inst_8694);

return statearr_8726;
})();
var statearr_8727_8748 = state_8714__$1;
(statearr_8727_8748[(2)] = inst_8695);

(statearr_8727_8748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8715 === (14))){
var inst_8708 = (state_8714[(2)]);
var state_8714__$1 = state_8714;
var statearr_8728_8749 = state_8714__$1;
(statearr_8728_8749[(2)] = inst_8708);

(statearr_8728_8749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8715 === (10))){
var state_8714__$1 = state_8714;
var statearr_8729_8750 = state_8714__$1;
(statearr_8729_8750[(2)] = fc);

(statearr_8729_8750[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8715 === (8))){
var inst_8703 = (state_8714[(2)]);
var state_8714__$1 = state_8714;
if(cljs.core.truth_(inst_8703)){
var statearr_8730_8751 = state_8714__$1;
(statearr_8730_8751[(1)] = (12));

} else {
var statearr_8731_8752 = state_8714__$1;
(statearr_8731_8752[(1)] = (13));

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
var statearr_8732 = [null,null,null,null,null,null,null,null,null];
(statearr_8732[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_8732[(1)] = (1));

return statearr_8732;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_8714){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_8714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e8733){var ex__2335__auto__ = e8733;
var statearr_8734_8753 = state_8714;
(statearr_8734_8753[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_8714[(4)]))){
var statearr_8735_8754 = state_8714;
(statearr_8735_8754[(1)] = cljs.core.first.call(null,(state_8714[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8755 = state_8714;
state_8714 = G__8755;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_8714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_8714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_8736 = f__8278__auto__.call(null);
(statearr_8736[(6)] = c__8277__auto___8738);

return statearr_8736;
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
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_8777){
var state_val_8778 = (state_8777[(1)]);
if((state_val_8778 === (7))){
var inst_8773 = (state_8777[(2)]);
var state_8777__$1 = state_8777;
var statearr_8779_8798 = state_8777__$1;
(statearr_8779_8798[(2)] = inst_8773);

(statearr_8779_8798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8778 === (1))){
var inst_8756 = init;
var inst_8757 = inst_8756;
var state_8777__$1 = (function (){var statearr_8780 = state_8777;
(statearr_8780[(7)] = inst_8757);

return statearr_8780;
})();
var statearr_8781_8799 = state_8777__$1;
(statearr_8781_8799[(2)] = null);

(statearr_8781_8799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8778 === (4))){
var inst_8760 = (state_8777[(8)]);
var inst_8760__$1 = (state_8777[(2)]);
var inst_8761 = (inst_8760__$1 == null);
var state_8777__$1 = (function (){var statearr_8782 = state_8777;
(statearr_8782[(8)] = inst_8760__$1);

return statearr_8782;
})();
if(cljs.core.truth_(inst_8761)){
var statearr_8783_8800 = state_8777__$1;
(statearr_8783_8800[(1)] = (5));

} else {
var statearr_8784_8801 = state_8777__$1;
(statearr_8784_8801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8778 === (6))){
var inst_8757 = (state_8777[(7)]);
var inst_8760 = (state_8777[(8)]);
var inst_8764 = (state_8777[(9)]);
var inst_8764__$1 = f.call(null,inst_8757,inst_8760);
var inst_8765 = cljs.core.reduced_QMARK_.call(null,inst_8764__$1);
var state_8777__$1 = (function (){var statearr_8785 = state_8777;
(statearr_8785[(9)] = inst_8764__$1);

return statearr_8785;
})();
if(inst_8765){
var statearr_8786_8802 = state_8777__$1;
(statearr_8786_8802[(1)] = (8));

} else {
var statearr_8787_8803 = state_8777__$1;
(statearr_8787_8803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8778 === (3))){
var inst_8775 = (state_8777[(2)]);
var state_8777__$1 = state_8777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8777__$1,inst_8775);
} else {
if((state_val_8778 === (2))){
var state_8777__$1 = state_8777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8777__$1,(4),ch);
} else {
if((state_val_8778 === (9))){
var inst_8764 = (state_8777[(9)]);
var inst_8757 = inst_8764;
var state_8777__$1 = (function (){var statearr_8788 = state_8777;
(statearr_8788[(7)] = inst_8757);

return statearr_8788;
})();
var statearr_8789_8804 = state_8777__$1;
(statearr_8789_8804[(2)] = null);

(statearr_8789_8804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8778 === (5))){
var inst_8757 = (state_8777[(7)]);
var state_8777__$1 = state_8777;
var statearr_8790_8805 = state_8777__$1;
(statearr_8790_8805[(2)] = inst_8757);

(statearr_8790_8805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8778 === (10))){
var inst_8771 = (state_8777[(2)]);
var state_8777__$1 = state_8777;
var statearr_8791_8806 = state_8777__$1;
(statearr_8791_8806[(2)] = inst_8771);

(statearr_8791_8806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8778 === (8))){
var inst_8764 = (state_8777[(9)]);
var inst_8767 = cljs.core.deref.call(null,inst_8764);
var state_8777__$1 = state_8777;
var statearr_8792_8807 = state_8777__$1;
(statearr_8792_8807[(2)] = inst_8767);

(statearr_8792_8807[(1)] = (10));


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
var statearr_8793 = [null,null,null,null,null,null,null,null,null,null];
(statearr_8793[(0)] = cljs$core$async$reduce_$_state_machine__2332__auto__);

(statearr_8793[(1)] = (1));

return statearr_8793;
});
var cljs$core$async$reduce_$_state_machine__2332__auto____1 = (function (state_8777){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_8777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e8794){var ex__2335__auto__ = e8794;
var statearr_8795_8808 = state_8777;
(statearr_8795_8808[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_8777[(4)]))){
var statearr_8796_8809 = state_8777;
(statearr_8796_8809[(1)] = cljs.core.first.call(null,(state_8777[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8810 = state_8777;
state_8777 = G__8810;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__2332__auto__ = function(state_8777){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__2332__auto____1.call(this,state_8777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__2332__auto____0;
cljs$core$async$reduce_$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__2332__auto____1;
return cljs$core$async$reduce_$_state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_8797 = f__8278__auto__.call(null);
(statearr_8797[(6)] = c__8277__auto__);

return statearr_8797;
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
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_8816){
var state_val_8817 = (state_8816[(1)]);
if((state_val_8817 === (1))){
var inst_8811 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_8816__$1 = state_8816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8816__$1,(2),inst_8811);
} else {
if((state_val_8817 === (2))){
var inst_8813 = (state_8816[(2)]);
var inst_8814 = f__$1.call(null,inst_8813);
var state_8816__$1 = state_8816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8816__$1,inst_8814);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__2332__auto__ = null;
var cljs$core$async$transduce_$_state_machine__2332__auto____0 = (function (){
var statearr_8818 = [null,null,null,null,null,null,null];
(statearr_8818[(0)] = cljs$core$async$transduce_$_state_machine__2332__auto__);

(statearr_8818[(1)] = (1));

return statearr_8818;
});
var cljs$core$async$transduce_$_state_machine__2332__auto____1 = (function (state_8816){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_8816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e8819){var ex__2335__auto__ = e8819;
var statearr_8820_8823 = state_8816;
(statearr_8820_8823[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_8816[(4)]))){
var statearr_8821_8824 = state_8816;
(statearr_8821_8824[(1)] = cljs.core.first.call(null,(state_8816[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8825 = state_8816;
state_8816 = G__8825;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__2332__auto__ = function(state_8816){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__2332__auto____1.call(this,state_8816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__2332__auto____0;
cljs$core$async$transduce_$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__2332__auto____1;
return cljs$core$async$transduce_$_state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_8822 = f__8278__auto__.call(null);
(statearr_8822[(6)] = c__8277__auto__);

return statearr_8822;
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
var G__8827 = arguments.length;
switch (G__8827) {
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
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_8852){
var state_val_8853 = (state_8852[(1)]);
if((state_val_8853 === (7))){
var inst_8834 = (state_8852[(2)]);
var state_8852__$1 = state_8852;
var statearr_8854_8876 = state_8852__$1;
(statearr_8854_8876[(2)] = inst_8834);

(statearr_8854_8876[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8853 === (1))){
var inst_8828 = cljs.core.seq.call(null,coll);
var inst_8829 = inst_8828;
var state_8852__$1 = (function (){var statearr_8855 = state_8852;
(statearr_8855[(7)] = inst_8829);

return statearr_8855;
})();
var statearr_8856_8877 = state_8852__$1;
(statearr_8856_8877[(2)] = null);

(statearr_8856_8877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8853 === (4))){
var inst_8829 = (state_8852[(7)]);
var inst_8832 = cljs.core.first.call(null,inst_8829);
var state_8852__$1 = state_8852;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8852__$1,(7),ch,inst_8832);
} else {
if((state_val_8853 === (13))){
var inst_8846 = (state_8852[(2)]);
var state_8852__$1 = state_8852;
var statearr_8857_8878 = state_8852__$1;
(statearr_8857_8878[(2)] = inst_8846);

(statearr_8857_8878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8853 === (6))){
var inst_8837 = (state_8852[(2)]);
var state_8852__$1 = state_8852;
if(cljs.core.truth_(inst_8837)){
var statearr_8858_8879 = state_8852__$1;
(statearr_8858_8879[(1)] = (8));

} else {
var statearr_8859_8880 = state_8852__$1;
(statearr_8859_8880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8853 === (3))){
var inst_8850 = (state_8852[(2)]);
var state_8852__$1 = state_8852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8852__$1,inst_8850);
} else {
if((state_val_8853 === (12))){
var state_8852__$1 = state_8852;
var statearr_8860_8881 = state_8852__$1;
(statearr_8860_8881[(2)] = null);

(statearr_8860_8881[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8853 === (2))){
var inst_8829 = (state_8852[(7)]);
var state_8852__$1 = state_8852;
if(cljs.core.truth_(inst_8829)){
var statearr_8861_8882 = state_8852__$1;
(statearr_8861_8882[(1)] = (4));

} else {
var statearr_8862_8883 = state_8852__$1;
(statearr_8862_8883[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8853 === (11))){
var inst_8843 = cljs.core.async.close_BANG_.call(null,ch);
var state_8852__$1 = state_8852;
var statearr_8863_8884 = state_8852__$1;
(statearr_8863_8884[(2)] = inst_8843);

(statearr_8863_8884[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8853 === (9))){
var state_8852__$1 = state_8852;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8864_8885 = state_8852__$1;
(statearr_8864_8885[(1)] = (11));

} else {
var statearr_8865_8886 = state_8852__$1;
(statearr_8865_8886[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8853 === (5))){
var inst_8829 = (state_8852[(7)]);
var state_8852__$1 = state_8852;
var statearr_8866_8887 = state_8852__$1;
(statearr_8866_8887[(2)] = inst_8829);

(statearr_8866_8887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8853 === (10))){
var inst_8848 = (state_8852[(2)]);
var state_8852__$1 = state_8852;
var statearr_8867_8888 = state_8852__$1;
(statearr_8867_8888[(2)] = inst_8848);

(statearr_8867_8888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8853 === (8))){
var inst_8829 = (state_8852[(7)]);
var inst_8839 = cljs.core.next.call(null,inst_8829);
var inst_8829__$1 = inst_8839;
var state_8852__$1 = (function (){var statearr_8868 = state_8852;
(statearr_8868[(7)] = inst_8829__$1);

return statearr_8868;
})();
var statearr_8869_8889 = state_8852__$1;
(statearr_8869_8889[(2)] = null);

(statearr_8869_8889[(1)] = (2));


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
var statearr_8870 = [null,null,null,null,null,null,null,null];
(statearr_8870[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_8870[(1)] = (1));

return statearr_8870;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_8852){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_8852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e8871){var ex__2335__auto__ = e8871;
var statearr_8872_8890 = state_8852;
(statearr_8872_8890[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_8852[(4)]))){
var statearr_8873_8891 = state_8852;
(statearr_8873_8891[(1)] = cljs.core.first.call(null,(state_8852[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8892 = state_8852;
state_8852 = G__8892;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_8852){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_8852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_8874 = f__8278__auto__.call(null);
(statearr_8874[(6)] = c__8277__auto__);

return statearr_8874;
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
var G__8894 = arguments.length;
switch (G__8894) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_8896 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_8896.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_8897 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_8897.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_8898 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_8898.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_8899 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_8899.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8900 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8900 = (function (ch,cs,meta8901){
this.ch = ch;
this.cs = cs;
this.meta8901 = meta8901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async8900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8902,meta8901__$1){
var self__ = this;
var _8902__$1 = this;
return (new cljs.core.async.t_cljs$core$async8900(self__.ch,self__.cs,meta8901__$1));
}));

(cljs.core.async.t_cljs$core$async8900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8902){
var self__ = this;
var _8902__$1 = this;
return self__.meta8901;
}));

(cljs.core.async.t_cljs$core$async8900.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async8900.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async8900.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async8900.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async8900.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async8900.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async8900.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta8901","meta8901",57538886,null)], null);
}));

(cljs.core.async.t_cljs$core$async8900.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async8900.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8900");

(cljs.core.async.t_cljs$core$async8900.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async8900");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8900.
 */
cljs.core.async.__GT_t_cljs$core$async8900 = (function cljs$core$async$mult_$___GT_t_cljs$core$async8900(ch__$1,cs__$1,meta8901){
return (new cljs.core.async.t_cljs$core$async8900(ch__$1,cs__$1,meta8901));
});

}

return (new cljs.core.async.t_cljs$core$async8900(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__8277__auto___9119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_9035){
var state_val_9036 = (state_9035[(1)]);
if((state_val_9036 === (7))){
var inst_9031 = (state_9035[(2)]);
var state_9035__$1 = state_9035;
var statearr_9037_9120 = state_9035__$1;
(statearr_9037_9120[(2)] = inst_9031);

(statearr_9037_9120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (20))){
var inst_8936 = (state_9035[(7)]);
var inst_8948 = cljs.core.first.call(null,inst_8936);
var inst_8949 = cljs.core.nth.call(null,inst_8948,(0),null);
var inst_8950 = cljs.core.nth.call(null,inst_8948,(1),null);
var state_9035__$1 = (function (){var statearr_9038 = state_9035;
(statearr_9038[(8)] = inst_8949);

return statearr_9038;
})();
if(cljs.core.truth_(inst_8950)){
var statearr_9039_9121 = state_9035__$1;
(statearr_9039_9121[(1)] = (22));

} else {
var statearr_9040_9122 = state_9035__$1;
(statearr_9040_9122[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (27))){
var inst_8978 = (state_9035[(9)]);
var inst_8980 = (state_9035[(10)]);
var inst_8985 = (state_9035[(11)]);
var inst_8905 = (state_9035[(12)]);
var inst_8985__$1 = cljs.core._nth.call(null,inst_8978,inst_8980);
var inst_8986 = cljs.core.async.put_BANG_.call(null,inst_8985__$1,inst_8905,done);
var state_9035__$1 = (function (){var statearr_9041 = state_9035;
(statearr_9041[(11)] = inst_8985__$1);

return statearr_9041;
})();
if(cljs.core.truth_(inst_8986)){
var statearr_9042_9123 = state_9035__$1;
(statearr_9042_9123[(1)] = (30));

} else {
var statearr_9043_9124 = state_9035__$1;
(statearr_9043_9124[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (1))){
var state_9035__$1 = state_9035;
var statearr_9044_9125 = state_9035__$1;
(statearr_9044_9125[(2)] = null);

(statearr_9044_9125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (24))){
var inst_8936 = (state_9035[(7)]);
var inst_8955 = (state_9035[(2)]);
var inst_8956 = cljs.core.next.call(null,inst_8936);
var inst_8914 = inst_8956;
var inst_8915 = null;
var inst_8916 = (0);
var inst_8917 = (0);
var state_9035__$1 = (function (){var statearr_9045 = state_9035;
(statearr_9045[(13)] = inst_8955);

(statearr_9045[(14)] = inst_8914);

(statearr_9045[(15)] = inst_8915);

(statearr_9045[(16)] = inst_8916);

(statearr_9045[(17)] = inst_8917);

return statearr_9045;
})();
var statearr_9046_9126 = state_9035__$1;
(statearr_9046_9126[(2)] = null);

(statearr_9046_9126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (39))){
var state_9035__$1 = state_9035;
var statearr_9050_9127 = state_9035__$1;
(statearr_9050_9127[(2)] = null);

(statearr_9050_9127[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (4))){
var inst_8905 = (state_9035[(12)]);
var inst_8905__$1 = (state_9035[(2)]);
var inst_8906 = (inst_8905__$1 == null);
var state_9035__$1 = (function (){var statearr_9051 = state_9035;
(statearr_9051[(12)] = inst_8905__$1);

return statearr_9051;
})();
if(cljs.core.truth_(inst_8906)){
var statearr_9052_9128 = state_9035__$1;
(statearr_9052_9128[(1)] = (5));

} else {
var statearr_9053_9129 = state_9035__$1;
(statearr_9053_9129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (15))){
var inst_8917 = (state_9035[(17)]);
var inst_8914 = (state_9035[(14)]);
var inst_8915 = (state_9035[(15)]);
var inst_8916 = (state_9035[(16)]);
var inst_8932 = (state_9035[(2)]);
var inst_8933 = (inst_8917 + (1));
var tmp9047 = inst_8916;
var tmp9048 = inst_8914;
var tmp9049 = inst_8915;
var inst_8914__$1 = tmp9048;
var inst_8915__$1 = tmp9049;
var inst_8916__$1 = tmp9047;
var inst_8917__$1 = inst_8933;
var state_9035__$1 = (function (){var statearr_9054 = state_9035;
(statearr_9054[(18)] = inst_8932);

(statearr_9054[(14)] = inst_8914__$1);

(statearr_9054[(15)] = inst_8915__$1);

(statearr_9054[(16)] = inst_8916__$1);

(statearr_9054[(17)] = inst_8917__$1);

return statearr_9054;
})();
var statearr_9055_9130 = state_9035__$1;
(statearr_9055_9130[(2)] = null);

(statearr_9055_9130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (21))){
var inst_8959 = (state_9035[(2)]);
var state_9035__$1 = state_9035;
var statearr_9059_9131 = state_9035__$1;
(statearr_9059_9131[(2)] = inst_8959);

(statearr_9059_9131[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (31))){
var inst_8985 = (state_9035[(11)]);
var inst_8989 = cljs.core.async.untap_STAR_.call(null,m,inst_8985);
var state_9035__$1 = state_9035;
var statearr_9060_9132 = state_9035__$1;
(statearr_9060_9132[(2)] = inst_8989);

(statearr_9060_9132[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (32))){
var inst_8980 = (state_9035[(10)]);
var inst_8977 = (state_9035[(19)]);
var inst_8978 = (state_9035[(9)]);
var inst_8979 = (state_9035[(20)]);
var inst_8991 = (state_9035[(2)]);
var inst_8992 = (inst_8980 + (1));
var tmp9056 = inst_8977;
var tmp9057 = inst_8978;
var tmp9058 = inst_8979;
var inst_8977__$1 = tmp9056;
var inst_8978__$1 = tmp9057;
var inst_8979__$1 = tmp9058;
var inst_8980__$1 = inst_8992;
var state_9035__$1 = (function (){var statearr_9061 = state_9035;
(statearr_9061[(21)] = inst_8991);

(statearr_9061[(19)] = inst_8977__$1);

(statearr_9061[(9)] = inst_8978__$1);

(statearr_9061[(20)] = inst_8979__$1);

(statearr_9061[(10)] = inst_8980__$1);

return statearr_9061;
})();
var statearr_9062_9133 = state_9035__$1;
(statearr_9062_9133[(2)] = null);

(statearr_9062_9133[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (40))){
var inst_9004 = (state_9035[(22)]);
var inst_9008 = cljs.core.async.untap_STAR_.call(null,m,inst_9004);
var state_9035__$1 = state_9035;
var statearr_9063_9134 = state_9035__$1;
(statearr_9063_9134[(2)] = inst_9008);

(statearr_9063_9134[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (33))){
var inst_8995 = (state_9035[(23)]);
var inst_8997 = cljs.core.chunked_seq_QMARK_.call(null,inst_8995);
var state_9035__$1 = state_9035;
if(inst_8997){
var statearr_9064_9135 = state_9035__$1;
(statearr_9064_9135[(1)] = (36));

} else {
var statearr_9065_9136 = state_9035__$1;
(statearr_9065_9136[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (13))){
var inst_8926 = (state_9035[(24)]);
var inst_8929 = cljs.core.async.close_BANG_.call(null,inst_8926);
var state_9035__$1 = state_9035;
var statearr_9066_9137 = state_9035__$1;
(statearr_9066_9137[(2)] = inst_8929);

(statearr_9066_9137[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (22))){
var inst_8949 = (state_9035[(8)]);
var inst_8952 = cljs.core.async.close_BANG_.call(null,inst_8949);
var state_9035__$1 = state_9035;
var statearr_9067_9138 = state_9035__$1;
(statearr_9067_9138[(2)] = inst_8952);

(statearr_9067_9138[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (36))){
var inst_8995 = (state_9035[(23)]);
var inst_8999 = cljs.core.chunk_first.call(null,inst_8995);
var inst_9000 = cljs.core.chunk_rest.call(null,inst_8995);
var inst_9001 = cljs.core.count.call(null,inst_8999);
var inst_8977 = inst_9000;
var inst_8978 = inst_8999;
var inst_8979 = inst_9001;
var inst_8980 = (0);
var state_9035__$1 = (function (){var statearr_9068 = state_9035;
(statearr_9068[(19)] = inst_8977);

(statearr_9068[(9)] = inst_8978);

(statearr_9068[(20)] = inst_8979);

(statearr_9068[(10)] = inst_8980);

return statearr_9068;
})();
var statearr_9069_9139 = state_9035__$1;
(statearr_9069_9139[(2)] = null);

(statearr_9069_9139[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (41))){
var inst_8995 = (state_9035[(23)]);
var inst_9010 = (state_9035[(2)]);
var inst_9011 = cljs.core.next.call(null,inst_8995);
var inst_8977 = inst_9011;
var inst_8978 = null;
var inst_8979 = (0);
var inst_8980 = (0);
var state_9035__$1 = (function (){var statearr_9070 = state_9035;
(statearr_9070[(25)] = inst_9010);

(statearr_9070[(19)] = inst_8977);

(statearr_9070[(9)] = inst_8978);

(statearr_9070[(20)] = inst_8979);

(statearr_9070[(10)] = inst_8980);

return statearr_9070;
})();
var statearr_9071_9140 = state_9035__$1;
(statearr_9071_9140[(2)] = null);

(statearr_9071_9140[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (43))){
var state_9035__$1 = state_9035;
var statearr_9072_9141 = state_9035__$1;
(statearr_9072_9141[(2)] = null);

(statearr_9072_9141[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (29))){
var inst_9019 = (state_9035[(2)]);
var state_9035__$1 = state_9035;
var statearr_9073_9142 = state_9035__$1;
(statearr_9073_9142[(2)] = inst_9019);

(statearr_9073_9142[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (44))){
var inst_9028 = (state_9035[(2)]);
var state_9035__$1 = (function (){var statearr_9074 = state_9035;
(statearr_9074[(26)] = inst_9028);

return statearr_9074;
})();
var statearr_9075_9143 = state_9035__$1;
(statearr_9075_9143[(2)] = null);

(statearr_9075_9143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (6))){
var inst_8969 = (state_9035[(27)]);
var inst_8968 = cljs.core.deref.call(null,cs);
var inst_8969__$1 = cljs.core.keys.call(null,inst_8968);
var inst_8970 = cljs.core.count.call(null,inst_8969__$1);
var inst_8971 = cljs.core.reset_BANG_.call(null,dctr,inst_8970);
var inst_8976 = cljs.core.seq.call(null,inst_8969__$1);
var inst_8977 = inst_8976;
var inst_8978 = null;
var inst_8979 = (0);
var inst_8980 = (0);
var state_9035__$1 = (function (){var statearr_9076 = state_9035;
(statearr_9076[(27)] = inst_8969__$1);

(statearr_9076[(28)] = inst_8971);

(statearr_9076[(19)] = inst_8977);

(statearr_9076[(9)] = inst_8978);

(statearr_9076[(20)] = inst_8979);

(statearr_9076[(10)] = inst_8980);

return statearr_9076;
})();
var statearr_9077_9144 = state_9035__$1;
(statearr_9077_9144[(2)] = null);

(statearr_9077_9144[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (28))){
var inst_8977 = (state_9035[(19)]);
var inst_8995 = (state_9035[(23)]);
var inst_8995__$1 = cljs.core.seq.call(null,inst_8977);
var state_9035__$1 = (function (){var statearr_9078 = state_9035;
(statearr_9078[(23)] = inst_8995__$1);

return statearr_9078;
})();
if(inst_8995__$1){
var statearr_9079_9145 = state_9035__$1;
(statearr_9079_9145[(1)] = (33));

} else {
var statearr_9080_9146 = state_9035__$1;
(statearr_9080_9146[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (25))){
var inst_8980 = (state_9035[(10)]);
var inst_8979 = (state_9035[(20)]);
var inst_8982 = (inst_8980 < inst_8979);
var inst_8983 = inst_8982;
var state_9035__$1 = state_9035;
if(cljs.core.truth_(inst_8983)){
var statearr_9081_9147 = state_9035__$1;
(statearr_9081_9147[(1)] = (27));

} else {
var statearr_9082_9148 = state_9035__$1;
(statearr_9082_9148[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (34))){
var state_9035__$1 = state_9035;
var statearr_9083_9149 = state_9035__$1;
(statearr_9083_9149[(2)] = null);

(statearr_9083_9149[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (17))){
var state_9035__$1 = state_9035;
var statearr_9084_9150 = state_9035__$1;
(statearr_9084_9150[(2)] = null);

(statearr_9084_9150[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (3))){
var inst_9033 = (state_9035[(2)]);
var state_9035__$1 = state_9035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9035__$1,inst_9033);
} else {
if((state_val_9036 === (12))){
var inst_8964 = (state_9035[(2)]);
var state_9035__$1 = state_9035;
var statearr_9085_9151 = state_9035__$1;
(statearr_9085_9151[(2)] = inst_8964);

(statearr_9085_9151[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (2))){
var state_9035__$1 = state_9035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9035__$1,(4),ch);
} else {
if((state_val_9036 === (23))){
var state_9035__$1 = state_9035;
var statearr_9086_9152 = state_9035__$1;
(statearr_9086_9152[(2)] = null);

(statearr_9086_9152[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (35))){
var inst_9017 = (state_9035[(2)]);
var state_9035__$1 = state_9035;
var statearr_9087_9153 = state_9035__$1;
(statearr_9087_9153[(2)] = inst_9017);

(statearr_9087_9153[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (19))){
var inst_8936 = (state_9035[(7)]);
var inst_8940 = cljs.core.chunk_first.call(null,inst_8936);
var inst_8941 = cljs.core.chunk_rest.call(null,inst_8936);
var inst_8942 = cljs.core.count.call(null,inst_8940);
var inst_8914 = inst_8941;
var inst_8915 = inst_8940;
var inst_8916 = inst_8942;
var inst_8917 = (0);
var state_9035__$1 = (function (){var statearr_9088 = state_9035;
(statearr_9088[(14)] = inst_8914);

(statearr_9088[(15)] = inst_8915);

(statearr_9088[(16)] = inst_8916);

(statearr_9088[(17)] = inst_8917);

return statearr_9088;
})();
var statearr_9089_9154 = state_9035__$1;
(statearr_9089_9154[(2)] = null);

(statearr_9089_9154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (11))){
var inst_8914 = (state_9035[(14)]);
var inst_8936 = (state_9035[(7)]);
var inst_8936__$1 = cljs.core.seq.call(null,inst_8914);
var state_9035__$1 = (function (){var statearr_9090 = state_9035;
(statearr_9090[(7)] = inst_8936__$1);

return statearr_9090;
})();
if(inst_8936__$1){
var statearr_9091_9155 = state_9035__$1;
(statearr_9091_9155[(1)] = (16));

} else {
var statearr_9092_9156 = state_9035__$1;
(statearr_9092_9156[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (9))){
var inst_8966 = (state_9035[(2)]);
var state_9035__$1 = state_9035;
var statearr_9093_9157 = state_9035__$1;
(statearr_9093_9157[(2)] = inst_8966);

(statearr_9093_9157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (5))){
var inst_8912 = cljs.core.deref.call(null,cs);
var inst_8913 = cljs.core.seq.call(null,inst_8912);
var inst_8914 = inst_8913;
var inst_8915 = null;
var inst_8916 = (0);
var inst_8917 = (0);
var state_9035__$1 = (function (){var statearr_9094 = state_9035;
(statearr_9094[(14)] = inst_8914);

(statearr_9094[(15)] = inst_8915);

(statearr_9094[(16)] = inst_8916);

(statearr_9094[(17)] = inst_8917);

return statearr_9094;
})();
var statearr_9095_9158 = state_9035__$1;
(statearr_9095_9158[(2)] = null);

(statearr_9095_9158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (14))){
var state_9035__$1 = state_9035;
var statearr_9096_9159 = state_9035__$1;
(statearr_9096_9159[(2)] = null);

(statearr_9096_9159[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (45))){
var inst_9025 = (state_9035[(2)]);
var state_9035__$1 = state_9035;
var statearr_9097_9160 = state_9035__$1;
(statearr_9097_9160[(2)] = inst_9025);

(statearr_9097_9160[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (26))){
var inst_8969 = (state_9035[(27)]);
var inst_9021 = (state_9035[(2)]);
var inst_9022 = cljs.core.seq.call(null,inst_8969);
var state_9035__$1 = (function (){var statearr_9098 = state_9035;
(statearr_9098[(29)] = inst_9021);

return statearr_9098;
})();
if(inst_9022){
var statearr_9099_9161 = state_9035__$1;
(statearr_9099_9161[(1)] = (42));

} else {
var statearr_9100_9162 = state_9035__$1;
(statearr_9100_9162[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (16))){
var inst_8936 = (state_9035[(7)]);
var inst_8938 = cljs.core.chunked_seq_QMARK_.call(null,inst_8936);
var state_9035__$1 = state_9035;
if(inst_8938){
var statearr_9101_9163 = state_9035__$1;
(statearr_9101_9163[(1)] = (19));

} else {
var statearr_9102_9164 = state_9035__$1;
(statearr_9102_9164[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (38))){
var inst_9014 = (state_9035[(2)]);
var state_9035__$1 = state_9035;
var statearr_9103_9165 = state_9035__$1;
(statearr_9103_9165[(2)] = inst_9014);

(statearr_9103_9165[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (30))){
var state_9035__$1 = state_9035;
var statearr_9104_9166 = state_9035__$1;
(statearr_9104_9166[(2)] = null);

(statearr_9104_9166[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (10))){
var inst_8915 = (state_9035[(15)]);
var inst_8917 = (state_9035[(17)]);
var inst_8925 = cljs.core._nth.call(null,inst_8915,inst_8917);
var inst_8926 = cljs.core.nth.call(null,inst_8925,(0),null);
var inst_8927 = cljs.core.nth.call(null,inst_8925,(1),null);
var state_9035__$1 = (function (){var statearr_9105 = state_9035;
(statearr_9105[(24)] = inst_8926);

return statearr_9105;
})();
if(cljs.core.truth_(inst_8927)){
var statearr_9106_9167 = state_9035__$1;
(statearr_9106_9167[(1)] = (13));

} else {
var statearr_9107_9168 = state_9035__$1;
(statearr_9107_9168[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (18))){
var inst_8962 = (state_9035[(2)]);
var state_9035__$1 = state_9035;
var statearr_9108_9169 = state_9035__$1;
(statearr_9108_9169[(2)] = inst_8962);

(statearr_9108_9169[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (42))){
var state_9035__$1 = state_9035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9035__$1,(45),dchan);
} else {
if((state_val_9036 === (37))){
var inst_8995 = (state_9035[(23)]);
var inst_9004 = (state_9035[(22)]);
var inst_8905 = (state_9035[(12)]);
var inst_9004__$1 = cljs.core.first.call(null,inst_8995);
var inst_9005 = cljs.core.async.put_BANG_.call(null,inst_9004__$1,inst_8905,done);
var state_9035__$1 = (function (){var statearr_9109 = state_9035;
(statearr_9109[(22)] = inst_9004__$1);

return statearr_9109;
})();
if(cljs.core.truth_(inst_9005)){
var statearr_9110_9170 = state_9035__$1;
(statearr_9110_9170[(1)] = (39));

} else {
var statearr_9111_9171 = state_9035__$1;
(statearr_9111_9171[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9036 === (8))){
var inst_8917 = (state_9035[(17)]);
var inst_8916 = (state_9035[(16)]);
var inst_8919 = (inst_8917 < inst_8916);
var inst_8920 = inst_8919;
var state_9035__$1 = state_9035;
if(cljs.core.truth_(inst_8920)){
var statearr_9112_9172 = state_9035__$1;
(statearr_9112_9172[(1)] = (10));

} else {
var statearr_9113_9173 = state_9035__$1;
(statearr_9113_9173[(1)] = (11));

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
var statearr_9114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9114[(0)] = cljs$core$async$mult_$_state_machine__2332__auto__);

(statearr_9114[(1)] = (1));

return statearr_9114;
});
var cljs$core$async$mult_$_state_machine__2332__auto____1 = (function (state_9035){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_9035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e9115){var ex__2335__auto__ = e9115;
var statearr_9116_9174 = state_9035;
(statearr_9116_9174[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_9035[(4)]))){
var statearr_9117_9175 = state_9035;
(statearr_9117_9175[(1)] = cljs.core.first.call(null,(state_9035[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9176 = state_9035;
state_9035 = G__9176;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__2332__auto__ = function(state_9035){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__2332__auto____1.call(this,state_9035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__2332__auto____0;
cljs$core$async$mult_$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__2332__auto____1;
return cljs$core$async$mult_$_state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_9118 = f__8278__auto__.call(null);
(statearr_9118[(6)] = c__8277__auto___9119);

return statearr_9118;
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
var G__9178 = arguments.length;
switch (G__9178) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_9180 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_9180.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_9181 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_9181.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_9182 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_9182.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_9183 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_9183.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_9184 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_9184.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___9194 = arguments.length;
var i__5727__auto___9195 = (0);
while(true){
if((i__5727__auto___9195 < len__5726__auto___9194)){
args__5732__auto__.push((arguments[i__5727__auto___9195]));

var G__9196 = (i__5727__auto___9195 + (1));
i__5727__auto___9195 = G__9196;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__9189){
var map__9190 = p__9189;
var map__9190__$1 = cljs.core.__destructure_map.call(null,map__9190);
var opts = map__9190__$1;
var statearr_9191_9197 = state;
(statearr_9191_9197[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_9192_9198 = state;
(statearr_9192_9198[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_9193_9199 = state;
(statearr_9193_9199[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq9185){
var G__9186 = cljs.core.first.call(null,seq9185);
var seq9185__$1 = cljs.core.next.call(null,seq9185);
var G__9187 = cljs.core.first.call(null,seq9185__$1);
var seq9185__$2 = cljs.core.next.call(null,seq9185__$1);
var G__9188 = cljs.core.first.call(null,seq9185__$2);
var seq9185__$3 = cljs.core.next.call(null,seq9185__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9186,G__9187,G__9188,seq9185__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9200 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9200 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta9201){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta9201 = meta9201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async9200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9202,meta9201__$1){
var self__ = this;
var _9202__$1 = this;
return (new cljs.core.async.t_cljs$core$async9200(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta9201__$1));
}));

(cljs.core.async.t_cljs$core$async9200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9202){
var self__ = this;
var _9202__$1 = this;
return self__.meta9201;
}));

(cljs.core.async.t_cljs$core$async9200.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9200.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async9200.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9200.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async9200.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async9200.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async9200.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async9200.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async9200.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta9201","meta9201",-490789770,null)], null);
}));

(cljs.core.async.t_cljs$core$async9200.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async9200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9200");

(cljs.core.async.t_cljs$core$async9200.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async9200");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9200.
 */
cljs.core.async.__GT_t_cljs$core$async9200 = (function cljs$core$async$mix_$___GT_t_cljs$core$async9200(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta9201){
return (new cljs.core.async.t_cljs$core$async9200(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta9201));
});

}

return (new cljs.core.async.t_cljs$core$async9200(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8277__auto___9315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_9270){
var state_val_9271 = (state_9270[(1)]);
if((state_val_9271 === (7))){
var inst_9230 = (state_9270[(2)]);
var state_9270__$1 = state_9270;
if(cljs.core.truth_(inst_9230)){
var statearr_9272_9316 = state_9270__$1;
(statearr_9272_9316[(1)] = (8));

} else {
var statearr_9273_9317 = state_9270__$1;
(statearr_9273_9317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (20))){
var inst_9223 = (state_9270[(7)]);
var state_9270__$1 = state_9270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9270__$1,(23),out,inst_9223);
} else {
if((state_val_9271 === (1))){
var inst_9206 = calc_state.call(null);
var inst_9207 = cljs.core.__destructure_map.call(null,inst_9206);
var inst_9208 = cljs.core.get.call(null,inst_9207,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_9209 = cljs.core.get.call(null,inst_9207,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_9210 = cljs.core.get.call(null,inst_9207,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_9211 = inst_9206;
var state_9270__$1 = (function (){var statearr_9274 = state_9270;
(statearr_9274[(8)] = inst_9208);

(statearr_9274[(9)] = inst_9209);

(statearr_9274[(10)] = inst_9210);

(statearr_9274[(11)] = inst_9211);

return statearr_9274;
})();
var statearr_9275_9318 = state_9270__$1;
(statearr_9275_9318[(2)] = null);

(statearr_9275_9318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (24))){
var inst_9214 = (state_9270[(12)]);
var inst_9211 = inst_9214;
var state_9270__$1 = (function (){var statearr_9276 = state_9270;
(statearr_9276[(11)] = inst_9211);

return statearr_9276;
})();
var statearr_9277_9319 = state_9270__$1;
(statearr_9277_9319[(2)] = null);

(statearr_9277_9319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (4))){
var inst_9223 = (state_9270[(7)]);
var inst_9225 = (state_9270[(13)]);
var inst_9222 = (state_9270[(2)]);
var inst_9223__$1 = cljs.core.nth.call(null,inst_9222,(0),null);
var inst_9224 = cljs.core.nth.call(null,inst_9222,(1),null);
var inst_9225__$1 = (inst_9223__$1 == null);
var state_9270__$1 = (function (){var statearr_9278 = state_9270;
(statearr_9278[(7)] = inst_9223__$1);

(statearr_9278[(14)] = inst_9224);

(statearr_9278[(13)] = inst_9225__$1);

return statearr_9278;
})();
if(cljs.core.truth_(inst_9225__$1)){
var statearr_9279_9320 = state_9270__$1;
(statearr_9279_9320[(1)] = (5));

} else {
var statearr_9280_9321 = state_9270__$1;
(statearr_9280_9321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (15))){
var inst_9215 = (state_9270[(15)]);
var inst_9244 = (state_9270[(16)]);
var inst_9244__$1 = cljs.core.empty_QMARK_.call(null,inst_9215);
var state_9270__$1 = (function (){var statearr_9281 = state_9270;
(statearr_9281[(16)] = inst_9244__$1);

return statearr_9281;
})();
if(inst_9244__$1){
var statearr_9282_9322 = state_9270__$1;
(statearr_9282_9322[(1)] = (17));

} else {
var statearr_9283_9323 = state_9270__$1;
(statearr_9283_9323[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (21))){
var inst_9214 = (state_9270[(12)]);
var inst_9211 = inst_9214;
var state_9270__$1 = (function (){var statearr_9284 = state_9270;
(statearr_9284[(11)] = inst_9211);

return statearr_9284;
})();
var statearr_9285_9324 = state_9270__$1;
(statearr_9285_9324[(2)] = null);

(statearr_9285_9324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (13))){
var inst_9237 = (state_9270[(2)]);
var inst_9238 = calc_state.call(null);
var inst_9211 = inst_9238;
var state_9270__$1 = (function (){var statearr_9286 = state_9270;
(statearr_9286[(17)] = inst_9237);

(statearr_9286[(11)] = inst_9211);

return statearr_9286;
})();
var statearr_9287_9325 = state_9270__$1;
(statearr_9287_9325[(2)] = null);

(statearr_9287_9325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (22))){
var inst_9264 = (state_9270[(2)]);
var state_9270__$1 = state_9270;
var statearr_9288_9326 = state_9270__$1;
(statearr_9288_9326[(2)] = inst_9264);

(statearr_9288_9326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (6))){
var inst_9224 = (state_9270[(14)]);
var inst_9228 = cljs.core._EQ_.call(null,inst_9224,change);
var state_9270__$1 = state_9270;
var statearr_9289_9327 = state_9270__$1;
(statearr_9289_9327[(2)] = inst_9228);

(statearr_9289_9327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (25))){
var state_9270__$1 = state_9270;
var statearr_9290_9328 = state_9270__$1;
(statearr_9290_9328[(2)] = null);

(statearr_9290_9328[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (17))){
var inst_9216 = (state_9270[(18)]);
var inst_9224 = (state_9270[(14)]);
var inst_9246 = inst_9216.call(null,inst_9224);
var inst_9247 = cljs.core.not.call(null,inst_9246);
var state_9270__$1 = state_9270;
var statearr_9291_9329 = state_9270__$1;
(statearr_9291_9329[(2)] = inst_9247);

(statearr_9291_9329[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (3))){
var inst_9268 = (state_9270[(2)]);
var state_9270__$1 = state_9270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9270__$1,inst_9268);
} else {
if((state_val_9271 === (12))){
var state_9270__$1 = state_9270;
var statearr_9292_9330 = state_9270__$1;
(statearr_9292_9330[(2)] = null);

(statearr_9292_9330[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (2))){
var inst_9211 = (state_9270[(11)]);
var inst_9214 = (state_9270[(12)]);
var inst_9214__$1 = cljs.core.__destructure_map.call(null,inst_9211);
var inst_9215 = cljs.core.get.call(null,inst_9214__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_9216 = cljs.core.get.call(null,inst_9214__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_9217 = cljs.core.get.call(null,inst_9214__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_9270__$1 = (function (){var statearr_9293 = state_9270;
(statearr_9293[(12)] = inst_9214__$1);

(statearr_9293[(15)] = inst_9215);

(statearr_9293[(18)] = inst_9216);

return statearr_9293;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_9270__$1,(4),inst_9217);
} else {
if((state_val_9271 === (23))){
var inst_9255 = (state_9270[(2)]);
var state_9270__$1 = state_9270;
if(cljs.core.truth_(inst_9255)){
var statearr_9294_9331 = state_9270__$1;
(statearr_9294_9331[(1)] = (24));

} else {
var statearr_9295_9332 = state_9270__$1;
(statearr_9295_9332[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (19))){
var inst_9250 = (state_9270[(2)]);
var state_9270__$1 = state_9270;
var statearr_9296_9333 = state_9270__$1;
(statearr_9296_9333[(2)] = inst_9250);

(statearr_9296_9333[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (11))){
var inst_9224 = (state_9270[(14)]);
var inst_9234 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_9224);
var state_9270__$1 = state_9270;
var statearr_9297_9334 = state_9270__$1;
(statearr_9297_9334[(2)] = inst_9234);

(statearr_9297_9334[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (9))){
var inst_9215 = (state_9270[(15)]);
var inst_9224 = (state_9270[(14)]);
var inst_9241 = (state_9270[(19)]);
var inst_9241__$1 = inst_9215.call(null,inst_9224);
var state_9270__$1 = (function (){var statearr_9298 = state_9270;
(statearr_9298[(19)] = inst_9241__$1);

return statearr_9298;
})();
if(cljs.core.truth_(inst_9241__$1)){
var statearr_9299_9335 = state_9270__$1;
(statearr_9299_9335[(1)] = (14));

} else {
var statearr_9300_9336 = state_9270__$1;
(statearr_9300_9336[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (5))){
var inst_9225 = (state_9270[(13)]);
var state_9270__$1 = state_9270;
var statearr_9301_9337 = state_9270__$1;
(statearr_9301_9337[(2)] = inst_9225);

(statearr_9301_9337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (14))){
var inst_9241 = (state_9270[(19)]);
var state_9270__$1 = state_9270;
var statearr_9302_9338 = state_9270__$1;
(statearr_9302_9338[(2)] = inst_9241);

(statearr_9302_9338[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (26))){
var inst_9260 = (state_9270[(2)]);
var state_9270__$1 = state_9270;
var statearr_9303_9339 = state_9270__$1;
(statearr_9303_9339[(2)] = inst_9260);

(statearr_9303_9339[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (16))){
var inst_9252 = (state_9270[(2)]);
var state_9270__$1 = state_9270;
if(cljs.core.truth_(inst_9252)){
var statearr_9304_9340 = state_9270__$1;
(statearr_9304_9340[(1)] = (20));

} else {
var statearr_9305_9341 = state_9270__$1;
(statearr_9305_9341[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (10))){
var inst_9266 = (state_9270[(2)]);
var state_9270__$1 = state_9270;
var statearr_9306_9342 = state_9270__$1;
(statearr_9306_9342[(2)] = inst_9266);

(statearr_9306_9342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (18))){
var inst_9244 = (state_9270[(16)]);
var state_9270__$1 = state_9270;
var statearr_9307_9343 = state_9270__$1;
(statearr_9307_9343[(2)] = inst_9244);

(statearr_9307_9343[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9271 === (8))){
var inst_9223 = (state_9270[(7)]);
var inst_9232 = (inst_9223 == null);
var state_9270__$1 = state_9270;
if(cljs.core.truth_(inst_9232)){
var statearr_9308_9344 = state_9270__$1;
(statearr_9308_9344[(1)] = (11));

} else {
var statearr_9309_9345 = state_9270__$1;
(statearr_9309_9345[(1)] = (12));

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
var statearr_9310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9310[(0)] = cljs$core$async$mix_$_state_machine__2332__auto__);

(statearr_9310[(1)] = (1));

return statearr_9310;
});
var cljs$core$async$mix_$_state_machine__2332__auto____1 = (function (state_9270){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_9270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e9311){var ex__2335__auto__ = e9311;
var statearr_9312_9346 = state_9270;
(statearr_9312_9346[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_9270[(4)]))){
var statearr_9313_9347 = state_9270;
(statearr_9313_9347[(1)] = cljs.core.first.call(null,(state_9270[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9348 = state_9270;
state_9270 = G__9348;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__2332__auto__ = function(state_9270){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__2332__auto____1.call(this,state_9270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__2332__auto____0;
cljs$core$async$mix_$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__2332__auto____1;
return cljs$core$async$mix_$_state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_9314 = f__8278__auto__.call(null);
(statearr_9314[(6)] = c__8277__auto___9315);

return statearr_9314;
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

var cljs$core$async$Pub$sub_STAR_$dyn_9351 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_9351.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_9352 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_9352.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_9353 = (function() {
var G__9354 = null;
var G__9354__1 = (function (p){
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
var G__9354__2 = (function (p,v){
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
G__9354 = function(p,v){
switch(arguments.length){
case 1:
return G__9354__1.call(this,p);
case 2:
return G__9354__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__9354.cljs$core$IFn$_invoke$arity$1 = G__9354__1;
G__9354.cljs$core$IFn$_invoke$arity$2 = G__9354__2;
return G__9354;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__9350 = arguments.length;
switch (G__9350) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_9353.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_9353.call(null,p,v);
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
var G__9358 = arguments.length;
switch (G__9358) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__9356_SHARP_){
if(cljs.core.truth_(p1__9356_SHARP_.call(null,topic))){
return p1__9356_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__9356_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9359 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9359 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta9360){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta9360 = meta9360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async9359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9361,meta9360__$1){
var self__ = this;
var _9361__$1 = this;
return (new cljs.core.async.t_cljs$core$async9359(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta9360__$1));
}));

(cljs.core.async.t_cljs$core$async9359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9361){
var self__ = this;
var _9361__$1 = this;
return self__.meta9360;
}));

(cljs.core.async.t_cljs$core$async9359.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9359.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async9359.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9359.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async9359.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async9359.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async9359.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async9359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta9360","meta9360",1375521101,null)], null);
}));

(cljs.core.async.t_cljs$core$async9359.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async9359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9359");

(cljs.core.async.t_cljs$core$async9359.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async9359");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9359.
 */
cljs.core.async.__GT_t_cljs$core$async9359 = (function cljs$core$async$__GT_t_cljs$core$async9359(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9360){
return (new cljs.core.async.t_cljs$core$async9359(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9360));
});

}

return (new cljs.core.async.t_cljs$core$async9359(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8277__auto___9480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_9433){
var state_val_9434 = (state_9433[(1)]);
if((state_val_9434 === (7))){
var inst_9429 = (state_9433[(2)]);
var state_9433__$1 = state_9433;
var statearr_9435_9481 = state_9433__$1;
(statearr_9435_9481[(2)] = inst_9429);

(statearr_9435_9481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9434 === (20))){
var state_9433__$1 = state_9433;
var statearr_9436_9482 = state_9433__$1;
(statearr_9436_9482[(2)] = null);

(statearr_9436_9482[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9434 === (1))){
var state_9433__$1 = state_9433;
var statearr_9437_9483 = state_9433__$1;
(statearr_9437_9483[(2)] = null);

(statearr_9437_9483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9434 === (24))){
var inst_9412 = (state_9433[(7)]);
var inst_9421 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_9412);
var state_9433__$1 = state_9433;
var statearr_9438_9484 = state_9433__$1;
(statearr_9438_9484[(2)] = inst_9421);

(statearr_9438_9484[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9434 === (4))){
var inst_9364 = (state_9433[(8)]);
var inst_9364__$1 = (state_9433[(2)]);
var inst_9365 = (inst_9364__$1 == null);
var state_9433__$1 = (function (){var statearr_9439 = state_9433;
(statearr_9439[(8)] = inst_9364__$1);

return statearr_9439;
})();
if(cljs.core.truth_(inst_9365)){
var statearr_9440_9485 = state_9433__$1;
(statearr_9440_9485[(1)] = (5));

} else {
var statearr_9441_9486 = state_9433__$1;
(statearr_9441_9486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9434 === (15))){
var inst_9406 = (state_9433[(2)]);
var state_9433__$1 = state_9433;
var statearr_9442_9487 = state_9433__$1;
(statearr_9442_9487[(2)] = inst_9406);

(statearr_9442_9487[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9434 === (21))){
var inst_9426 = (state_9433[(2)]);
var state_9433__$1 = (function (){var statearr_9443 = state_9433;
(statearr_9443[(9)] = inst_9426);

return statearr_9443;
})();
var statearr_9444_9488 = state_9433__$1;
(statearr_9444_9488[(2)] = null);

(statearr_9444_9488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9434 === (13))){
var inst_9388 = (state_9433[(10)]);
var inst_9390 = cljs.core.chunked_seq_QMARK_.call(null,inst_9388);
var state_9433__$1 = state_9433;
if(inst_9390){
var statearr_9445_9489 = state_9433__$1;
(statearr_9445_9489[(1)] = (16));

} else {
var statearr_9446_9490 = state_9433__$1;
(statearr_9446_9490[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9434 === (22))){
var inst_9418 = (state_9433[(2)]);
var state_9433__$1 = state_9433;
if(cljs.core.truth_(inst_9418)){
var statearr_9447_9491 = state_9433__$1;
(statearr_9447_9491[(1)] = (23));

} else {
var statearr_9448_9492 = state_9433__$1;
(statearr_9448_9492[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9434 === (6))){
var inst_9364 = (state_9433[(8)]);
var inst_9412 = (state_9433[(7)]);
var inst_9414 = (state_9433[(11)]);
var inst_9412__$1 = topic_fn.call(null,inst_9364);
var inst_9413 = cljs.core.deref.call(null,mults);
var inst_9414__$1 = cljs.core.get.call(null,inst_9413,inst_9412__$1);
var state_9433__$1 = (function (){var statearr_9449 = state_9433;
(statearr_9449[(7)] = inst_9412__$1);

(statearr_9449[(11)] = inst_9414__$1);

return statearr_9449;
})();
if(cljs.core.truth_(inst_9414__$1)){
var statearr_9450_9493 = state_9433__$1;
(statearr_9450_9493[(1)] = (19));

} else {
var statearr_9451_9494 = state_9433__$1;
(statearr_9451_9494[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9434 === (25))){
var inst_9423 = (state_9433[(2)]);
var state_9433__$1 = state_9433;
var statearr_9452_9495 = state_9433__$1;
(statearr_9452_9495[(2)] = inst_9423);

(statearr_9452_9495[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9434 === (17))){
var inst_9388 = (state_9433[(10)]);
var inst_9397 = cljs.core.first.call(null,inst_9388);
var inst_9398 = cljs.core.async.muxch_STAR_.call(null,inst_9397);
var inst_9399 = cljs.core.async.close_BANG_.call(null,inst_9398);
var inst_9400 = cljs.core.next.call(null,inst_9388);
var inst_9374 = inst_9400;
var inst_9375 = null;
var inst_9376 = (0);
var inst_9377 = (0);
var state_9433__$1 = (function (){var statearr_9453 = state_9433;
(statearr_9453[(12)] = inst_9399);

(statearr_9453[(13)] = inst_9374);

(statearr_9453[(14)] = inst_9375);

(statearr_9453[(15)] = inst_9376);

(statearr_9453[(16)] = inst_9377);

return statearr_9453;
})();
var statearr_9454_9496 = state_9433__$1;
(statearr_9454_9496[(2)] = null);

(statearr_9454_9496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9434 === (3))){
var inst_9431 = (state_9433[(2)]);
var state_9433__$1 = state_9433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9433__$1,inst_9431);
} else {
if((state_val_9434 === (12))){
var inst_9408 = (state_9433[(2)]);
var state_9433__$1 = state_9433;
var statearr_9455_9497 = state_9433__$1;
(statearr_9455_9497[(2)] = inst_9408);

(statearr_9455_9497[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9434 === (2))){
var state_9433__$1 = state_9433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9433__$1,(4),ch);
} else {
if((state_val_9434 === (23))){
var state_9433__$1 = state_9433;
var statearr_9456_9498 = state_9433__$1;
(statearr_9456_9498[(2)] = null);

(statearr_9456_9498[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9434 === (19))){
var inst_9414 = (state_9433[(11)]);
var inst_9364 = (state_9433[(8)]);
var inst_9416 = cljs.core.async.muxch_STAR_.call(null,inst_9414);
var state_9433__$1 = state_9433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9433__$1,(22),inst_9416,inst_9364);
} else {
if((state_val_9434 === (11))){
var inst_9374 = (state_9433[(13)]);
var inst_9388 = (state_9433[(10)]);
var inst_9388__$1 = cljs.core.seq.call(null,inst_9374);
var state_9433__$1 = (function (){var statearr_9457 = state_9433;
(statearr_9457[(10)] = inst_9388__$1);

return statearr_9457;
})();
if(inst_9388__$1){
var statearr_9458_9499 = state_9433__$1;
(statearr_9458_9499[(1)] = (13));

} else {
var statearr_9459_9500 = state_9433__$1;
(statearr_9459_9500[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9434 === (9))){
var inst_9410 = (state_9433[(2)]);
var state_9433__$1 = state_9433;
var statearr_9460_9501 = state_9433__$1;
(statearr_9460_9501[(2)] = inst_9410);

(statearr_9460_9501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9434 === (5))){
var inst_9371 = cljs.core.deref.call(null,mults);
var inst_9372 = cljs.core.vals.call(null,inst_9371);
var inst_9373 = cljs.core.seq.call(null,inst_9372);
var inst_9374 = inst_9373;
var inst_9375 = null;
var inst_9376 = (0);
var inst_9377 = (0);
var state_9433__$1 = (function (){var statearr_9461 = state_9433;
(statearr_9461[(13)] = inst_9374);

(statearr_9461[(14)] = inst_9375);

(statearr_9461[(15)] = inst_9376);

(statearr_9461[(16)] = inst_9377);

return statearr_9461;
})();
var statearr_9462_9502 = state_9433__$1;
(statearr_9462_9502[(2)] = null);

(statearr_9462_9502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9434 === (14))){
var state_9433__$1 = state_9433;
var statearr_9466_9503 = state_9433__$1;
(statearr_9466_9503[(2)] = null);

(statearr_9466_9503[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9434 === (16))){
var inst_9388 = (state_9433[(10)]);
var inst_9392 = cljs.core.chunk_first.call(null,inst_9388);
var inst_9393 = cljs.core.chunk_rest.call(null,inst_9388);
var inst_9394 = cljs.core.count.call(null,inst_9392);
var inst_9374 = inst_9393;
var inst_9375 = inst_9392;
var inst_9376 = inst_9394;
var inst_9377 = (0);
var state_9433__$1 = (function (){var statearr_9467 = state_9433;
(statearr_9467[(13)] = inst_9374);

(statearr_9467[(14)] = inst_9375);

(statearr_9467[(15)] = inst_9376);

(statearr_9467[(16)] = inst_9377);

return statearr_9467;
})();
var statearr_9468_9504 = state_9433__$1;
(statearr_9468_9504[(2)] = null);

(statearr_9468_9504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9434 === (10))){
var inst_9375 = (state_9433[(14)]);
var inst_9377 = (state_9433[(16)]);
var inst_9374 = (state_9433[(13)]);
var inst_9376 = (state_9433[(15)]);
var inst_9382 = cljs.core._nth.call(null,inst_9375,inst_9377);
var inst_9383 = cljs.core.async.muxch_STAR_.call(null,inst_9382);
var inst_9384 = cljs.core.async.close_BANG_.call(null,inst_9383);
var inst_9385 = (inst_9377 + (1));
var tmp9463 = inst_9374;
var tmp9464 = inst_9375;
var tmp9465 = inst_9376;
var inst_9374__$1 = tmp9463;
var inst_9375__$1 = tmp9464;
var inst_9376__$1 = tmp9465;
var inst_9377__$1 = inst_9385;
var state_9433__$1 = (function (){var statearr_9469 = state_9433;
(statearr_9469[(17)] = inst_9384);

(statearr_9469[(13)] = inst_9374__$1);

(statearr_9469[(14)] = inst_9375__$1);

(statearr_9469[(15)] = inst_9376__$1);

(statearr_9469[(16)] = inst_9377__$1);

return statearr_9469;
})();
var statearr_9470_9505 = state_9433__$1;
(statearr_9470_9505[(2)] = null);

(statearr_9470_9505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9434 === (18))){
var inst_9403 = (state_9433[(2)]);
var state_9433__$1 = state_9433;
var statearr_9471_9506 = state_9433__$1;
(statearr_9471_9506[(2)] = inst_9403);

(statearr_9471_9506[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9434 === (8))){
var inst_9377 = (state_9433[(16)]);
var inst_9376 = (state_9433[(15)]);
var inst_9379 = (inst_9377 < inst_9376);
var inst_9380 = inst_9379;
var state_9433__$1 = state_9433;
if(cljs.core.truth_(inst_9380)){
var statearr_9472_9507 = state_9433__$1;
(statearr_9472_9507[(1)] = (10));

} else {
var statearr_9473_9508 = state_9433__$1;
(statearr_9473_9508[(1)] = (11));

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
var statearr_9474 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9474[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_9474[(1)] = (1));

return statearr_9474;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_9433){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_9433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e9475){var ex__2335__auto__ = e9475;
var statearr_9476_9509 = state_9433;
(statearr_9476_9509[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_9433[(4)]))){
var statearr_9477_9510 = state_9433;
(statearr_9477_9510[(1)] = cljs.core.first.call(null,(state_9433[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9511 = state_9433;
state_9433 = G__9511;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_9433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_9433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_9478 = f__8278__auto__.call(null);
(statearr_9478[(6)] = c__8277__auto___9480);

return statearr_9478;
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
var G__9513 = arguments.length;
switch (G__9513) {
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
var G__9516 = arguments.length;
switch (G__9516) {
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
var G__9519 = arguments.length;
switch (G__9519) {
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
var c__8277__auto___9597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_9562){
var state_val_9563 = (state_9562[(1)]);
if((state_val_9563 === (7))){
var state_9562__$1 = state_9562;
var statearr_9564_9598 = state_9562__$1;
(statearr_9564_9598[(2)] = null);

(statearr_9564_9598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9563 === (1))){
var state_9562__$1 = state_9562;
var statearr_9565_9599 = state_9562__$1;
(statearr_9565_9599[(2)] = null);

(statearr_9565_9599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9563 === (4))){
var inst_9523 = (state_9562[(7)]);
var inst_9522 = (state_9562[(8)]);
var inst_9525 = (inst_9523 < inst_9522);
var state_9562__$1 = state_9562;
if(cljs.core.truth_(inst_9525)){
var statearr_9566_9600 = state_9562__$1;
(statearr_9566_9600[(1)] = (6));

} else {
var statearr_9567_9601 = state_9562__$1;
(statearr_9567_9601[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9563 === (15))){
var inst_9548 = (state_9562[(9)]);
var inst_9553 = cljs.core.apply.call(null,f,inst_9548);
var state_9562__$1 = state_9562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9562__$1,(17),out,inst_9553);
} else {
if((state_val_9563 === (13))){
var inst_9548 = (state_9562[(9)]);
var inst_9548__$1 = (state_9562[(2)]);
var inst_9549 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_9548__$1);
var state_9562__$1 = (function (){var statearr_9568 = state_9562;
(statearr_9568[(9)] = inst_9548__$1);

return statearr_9568;
})();
if(cljs.core.truth_(inst_9549)){
var statearr_9569_9602 = state_9562__$1;
(statearr_9569_9602[(1)] = (14));

} else {
var statearr_9570_9603 = state_9562__$1;
(statearr_9570_9603[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9563 === (6))){
var state_9562__$1 = state_9562;
var statearr_9571_9604 = state_9562__$1;
(statearr_9571_9604[(2)] = null);

(statearr_9571_9604[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9563 === (17))){
var inst_9555 = (state_9562[(2)]);
var state_9562__$1 = (function (){var statearr_9573 = state_9562;
(statearr_9573[(10)] = inst_9555);

return statearr_9573;
})();
var statearr_9574_9605 = state_9562__$1;
(statearr_9574_9605[(2)] = null);

(statearr_9574_9605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9563 === (3))){
var inst_9560 = (state_9562[(2)]);
var state_9562__$1 = state_9562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9562__$1,inst_9560);
} else {
if((state_val_9563 === (12))){
var _ = (function (){var statearr_9575 = state_9562;
(statearr_9575[(4)] = cljs.core.rest.call(null,(state_9562[(4)])));

return statearr_9575;
})();
var state_9562__$1 = state_9562;
var ex9572 = (state_9562__$1[(2)]);
var statearr_9576_9606 = state_9562__$1;
(statearr_9576_9606[(5)] = ex9572);


if((ex9572 instanceof Object)){
var statearr_9577_9607 = state_9562__$1;
(statearr_9577_9607[(1)] = (11));

(statearr_9577_9607[(5)] = null);

} else {
throw ex9572;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9563 === (2))){
var inst_9521 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_9522 = cnt;
var inst_9523 = (0);
var state_9562__$1 = (function (){var statearr_9578 = state_9562;
(statearr_9578[(11)] = inst_9521);

(statearr_9578[(8)] = inst_9522);

(statearr_9578[(7)] = inst_9523);

return statearr_9578;
})();
var statearr_9579_9608 = state_9562__$1;
(statearr_9579_9608[(2)] = null);

(statearr_9579_9608[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9563 === (11))){
var inst_9527 = (state_9562[(2)]);
var inst_9528 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_9562__$1 = (function (){var statearr_9580 = state_9562;
(statearr_9580[(12)] = inst_9527);

return statearr_9580;
})();
var statearr_9581_9609 = state_9562__$1;
(statearr_9581_9609[(2)] = inst_9528);

(statearr_9581_9609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9563 === (9))){
var inst_9523 = (state_9562[(7)]);
var _ = (function (){var statearr_9582 = state_9562;
(statearr_9582[(4)] = cljs.core.cons.call(null,(12),(state_9562[(4)])));

return statearr_9582;
})();
var inst_9534 = chs__$1.call(null,inst_9523);
var inst_9535 = done.call(null,inst_9523);
var inst_9536 = cljs.core.async.take_BANG_.call(null,inst_9534,inst_9535);
var ___$1 = (function (){var statearr_9583 = state_9562;
(statearr_9583[(4)] = cljs.core.rest.call(null,(state_9562[(4)])));

return statearr_9583;
})();
var state_9562__$1 = state_9562;
var statearr_9584_9610 = state_9562__$1;
(statearr_9584_9610[(2)] = inst_9536);

(statearr_9584_9610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9563 === (5))){
var inst_9546 = (state_9562[(2)]);
var state_9562__$1 = (function (){var statearr_9585 = state_9562;
(statearr_9585[(13)] = inst_9546);

return statearr_9585;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9562__$1,(13),dchan);
} else {
if((state_val_9563 === (14))){
var inst_9551 = cljs.core.async.close_BANG_.call(null,out);
var state_9562__$1 = state_9562;
var statearr_9586_9611 = state_9562__$1;
(statearr_9586_9611[(2)] = inst_9551);

(statearr_9586_9611[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9563 === (16))){
var inst_9558 = (state_9562[(2)]);
var state_9562__$1 = state_9562;
var statearr_9587_9612 = state_9562__$1;
(statearr_9587_9612[(2)] = inst_9558);

(statearr_9587_9612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9563 === (10))){
var inst_9523 = (state_9562[(7)]);
var inst_9539 = (state_9562[(2)]);
var inst_9540 = (inst_9523 + (1));
var inst_9523__$1 = inst_9540;
var state_9562__$1 = (function (){var statearr_9588 = state_9562;
(statearr_9588[(14)] = inst_9539);

(statearr_9588[(7)] = inst_9523__$1);

return statearr_9588;
})();
var statearr_9589_9613 = state_9562__$1;
(statearr_9589_9613[(2)] = null);

(statearr_9589_9613[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9563 === (8))){
var inst_9544 = (state_9562[(2)]);
var state_9562__$1 = state_9562;
var statearr_9590_9614 = state_9562__$1;
(statearr_9590_9614[(2)] = inst_9544);

(statearr_9590_9614[(1)] = (5));


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
var statearr_9591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9591[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_9591[(1)] = (1));

return statearr_9591;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_9562){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_9562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e9592){var ex__2335__auto__ = e9592;
var statearr_9593_9615 = state_9562;
(statearr_9593_9615[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_9562[(4)]))){
var statearr_9594_9616 = state_9562;
(statearr_9594_9616[(1)] = cljs.core.first.call(null,(state_9562[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9617 = state_9562;
state_9562 = G__9617;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_9562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_9562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_9595 = f__8278__auto__.call(null);
(statearr_9595[(6)] = c__8277__auto___9597);

return statearr_9595;
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
var G__9620 = arguments.length;
switch (G__9620) {
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
var c__8277__auto___9675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_9652){
var state_val_9653 = (state_9652[(1)]);
if((state_val_9653 === (7))){
var inst_9631 = (state_9652[(7)]);
var inst_9632 = (state_9652[(8)]);
var inst_9631__$1 = (state_9652[(2)]);
var inst_9632__$1 = cljs.core.nth.call(null,inst_9631__$1,(0),null);
var inst_9633 = cljs.core.nth.call(null,inst_9631__$1,(1),null);
var inst_9634 = (inst_9632__$1 == null);
var state_9652__$1 = (function (){var statearr_9654 = state_9652;
(statearr_9654[(7)] = inst_9631__$1);

(statearr_9654[(8)] = inst_9632__$1);

(statearr_9654[(9)] = inst_9633);

return statearr_9654;
})();
if(cljs.core.truth_(inst_9634)){
var statearr_9655_9676 = state_9652__$1;
(statearr_9655_9676[(1)] = (8));

} else {
var statearr_9656_9677 = state_9652__$1;
(statearr_9656_9677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9653 === (1))){
var inst_9621 = cljs.core.vec.call(null,chs);
var inst_9622 = inst_9621;
var state_9652__$1 = (function (){var statearr_9657 = state_9652;
(statearr_9657[(10)] = inst_9622);

return statearr_9657;
})();
var statearr_9658_9678 = state_9652__$1;
(statearr_9658_9678[(2)] = null);

(statearr_9658_9678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9653 === (4))){
var inst_9622 = (state_9652[(10)]);
var state_9652__$1 = state_9652;
return cljs.core.async.ioc_alts_BANG_.call(null,state_9652__$1,(7),inst_9622);
} else {
if((state_val_9653 === (6))){
var inst_9648 = (state_9652[(2)]);
var state_9652__$1 = state_9652;
var statearr_9659_9679 = state_9652__$1;
(statearr_9659_9679[(2)] = inst_9648);

(statearr_9659_9679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9653 === (3))){
var inst_9650 = (state_9652[(2)]);
var state_9652__$1 = state_9652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9652__$1,inst_9650);
} else {
if((state_val_9653 === (2))){
var inst_9622 = (state_9652[(10)]);
var inst_9624 = cljs.core.count.call(null,inst_9622);
var inst_9625 = (inst_9624 > (0));
var state_9652__$1 = state_9652;
if(cljs.core.truth_(inst_9625)){
var statearr_9661_9680 = state_9652__$1;
(statearr_9661_9680[(1)] = (4));

} else {
var statearr_9662_9681 = state_9652__$1;
(statearr_9662_9681[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9653 === (11))){
var inst_9622 = (state_9652[(10)]);
var inst_9641 = (state_9652[(2)]);
var tmp9660 = inst_9622;
var inst_9622__$1 = tmp9660;
var state_9652__$1 = (function (){var statearr_9663 = state_9652;
(statearr_9663[(11)] = inst_9641);

(statearr_9663[(10)] = inst_9622__$1);

return statearr_9663;
})();
var statearr_9664_9682 = state_9652__$1;
(statearr_9664_9682[(2)] = null);

(statearr_9664_9682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9653 === (9))){
var inst_9632 = (state_9652[(8)]);
var state_9652__$1 = state_9652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9652__$1,(11),out,inst_9632);
} else {
if((state_val_9653 === (5))){
var inst_9646 = cljs.core.async.close_BANG_.call(null,out);
var state_9652__$1 = state_9652;
var statearr_9665_9683 = state_9652__$1;
(statearr_9665_9683[(2)] = inst_9646);

(statearr_9665_9683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9653 === (10))){
var inst_9644 = (state_9652[(2)]);
var state_9652__$1 = state_9652;
var statearr_9666_9684 = state_9652__$1;
(statearr_9666_9684[(2)] = inst_9644);

(statearr_9666_9684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9653 === (8))){
var inst_9622 = (state_9652[(10)]);
var inst_9631 = (state_9652[(7)]);
var inst_9632 = (state_9652[(8)]);
var inst_9633 = (state_9652[(9)]);
var inst_9636 = (function (){var cs = inst_9622;
var vec__9627 = inst_9631;
var v = inst_9632;
var c = inst_9633;
return (function (p1__9618_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__9618_SHARP_);
});
})();
var inst_9637 = cljs.core.filterv.call(null,inst_9636,inst_9622);
var inst_9622__$1 = inst_9637;
var state_9652__$1 = (function (){var statearr_9667 = state_9652;
(statearr_9667[(10)] = inst_9622__$1);

return statearr_9667;
})();
var statearr_9668_9685 = state_9652__$1;
(statearr_9668_9685[(2)] = null);

(statearr_9668_9685[(1)] = (2));


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
var statearr_9669 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9669[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_9669[(1)] = (1));

return statearr_9669;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_9652){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_9652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e9670){var ex__2335__auto__ = e9670;
var statearr_9671_9686 = state_9652;
(statearr_9671_9686[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_9652[(4)]))){
var statearr_9672_9687 = state_9652;
(statearr_9672_9687[(1)] = cljs.core.first.call(null,(state_9652[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9688 = state_9652;
state_9652 = G__9688;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_9652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_9652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_9673 = f__8278__auto__.call(null);
(statearr_9673[(6)] = c__8277__auto___9675);

return statearr_9673;
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
var G__9690 = arguments.length;
switch (G__9690) {
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
var c__8277__auto___9736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_9714){
var state_val_9715 = (state_9714[(1)]);
if((state_val_9715 === (7))){
var inst_9696 = (state_9714[(7)]);
var inst_9696__$1 = (state_9714[(2)]);
var inst_9697 = (inst_9696__$1 == null);
var inst_9698 = cljs.core.not.call(null,inst_9697);
var state_9714__$1 = (function (){var statearr_9716 = state_9714;
(statearr_9716[(7)] = inst_9696__$1);

return statearr_9716;
})();
if(inst_9698){
var statearr_9717_9737 = state_9714__$1;
(statearr_9717_9737[(1)] = (8));

} else {
var statearr_9718_9738 = state_9714__$1;
(statearr_9718_9738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9715 === (1))){
var inst_9691 = (0);
var state_9714__$1 = (function (){var statearr_9719 = state_9714;
(statearr_9719[(8)] = inst_9691);

return statearr_9719;
})();
var statearr_9720_9739 = state_9714__$1;
(statearr_9720_9739[(2)] = null);

(statearr_9720_9739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9715 === (4))){
var state_9714__$1 = state_9714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9714__$1,(7),ch);
} else {
if((state_val_9715 === (6))){
var inst_9709 = (state_9714[(2)]);
var state_9714__$1 = state_9714;
var statearr_9721_9740 = state_9714__$1;
(statearr_9721_9740[(2)] = inst_9709);

(statearr_9721_9740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9715 === (3))){
var inst_9711 = (state_9714[(2)]);
var inst_9712 = cljs.core.async.close_BANG_.call(null,out);
var state_9714__$1 = (function (){var statearr_9722 = state_9714;
(statearr_9722[(9)] = inst_9711);

return statearr_9722;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9714__$1,inst_9712);
} else {
if((state_val_9715 === (2))){
var inst_9691 = (state_9714[(8)]);
var inst_9693 = (inst_9691 < n);
var state_9714__$1 = state_9714;
if(cljs.core.truth_(inst_9693)){
var statearr_9723_9741 = state_9714__$1;
(statearr_9723_9741[(1)] = (4));

} else {
var statearr_9724_9742 = state_9714__$1;
(statearr_9724_9742[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9715 === (11))){
var inst_9691 = (state_9714[(8)]);
var inst_9701 = (state_9714[(2)]);
var inst_9702 = (inst_9691 + (1));
var inst_9691__$1 = inst_9702;
var state_9714__$1 = (function (){var statearr_9725 = state_9714;
(statearr_9725[(10)] = inst_9701);

(statearr_9725[(8)] = inst_9691__$1);

return statearr_9725;
})();
var statearr_9726_9743 = state_9714__$1;
(statearr_9726_9743[(2)] = null);

(statearr_9726_9743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9715 === (9))){
var state_9714__$1 = state_9714;
var statearr_9727_9744 = state_9714__$1;
(statearr_9727_9744[(2)] = null);

(statearr_9727_9744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9715 === (5))){
var state_9714__$1 = state_9714;
var statearr_9728_9745 = state_9714__$1;
(statearr_9728_9745[(2)] = null);

(statearr_9728_9745[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9715 === (10))){
var inst_9706 = (state_9714[(2)]);
var state_9714__$1 = state_9714;
var statearr_9729_9746 = state_9714__$1;
(statearr_9729_9746[(2)] = inst_9706);

(statearr_9729_9746[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9715 === (8))){
var inst_9696 = (state_9714[(7)]);
var state_9714__$1 = state_9714;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9714__$1,(11),out,inst_9696);
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
var statearr_9730 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9730[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_9730[(1)] = (1));

return statearr_9730;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_9714){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_9714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e9731){var ex__2335__auto__ = e9731;
var statearr_9732_9747 = state_9714;
(statearr_9732_9747[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_9714[(4)]))){
var statearr_9733_9748 = state_9714;
(statearr_9733_9748[(1)] = cljs.core.first.call(null,(state_9714[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9749 = state_9714;
state_9714 = G__9749;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_9714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_9714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_9734 = f__8278__auto__.call(null);
(statearr_9734[(6)] = c__8277__auto___9736);

return statearr_9734;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9751 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9751 = (function (f,ch,meta9752){
this.f = f;
this.ch = ch;
this.meta9752 = meta9752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async9751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9753,meta9752__$1){
var self__ = this;
var _9753__$1 = this;
return (new cljs.core.async.t_cljs$core$async9751(self__.f,self__.ch,meta9752__$1));
}));

(cljs.core.async.t_cljs$core$async9751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9753){
var self__ = this;
var _9753__$1 = this;
return self__.meta9752;
}));

(cljs.core.async.t_cljs$core$async9751.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9751.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async9751.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async9751.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9751.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9754 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9754 = (function (f,ch,meta9752,_,fn1,meta9755){
this.f = f;
this.ch = ch;
this.meta9752 = meta9752;
this._ = _;
this.fn1 = fn1;
this.meta9755 = meta9755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async9754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9756,meta9755__$1){
var self__ = this;
var _9756__$1 = this;
return (new cljs.core.async.t_cljs$core$async9754(self__.f,self__.ch,self__.meta9752,self__._,self__.fn1,meta9755__$1));
}));

(cljs.core.async.t_cljs$core$async9754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9756){
var self__ = this;
var _9756__$1 = this;
return self__.meta9755;
}));

(cljs.core.async.t_cljs$core$async9754.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9754.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async9754.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async9754.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__9750_SHARP_){
return f1.call(null,(((p1__9750_SHARP_ == null))?null:self__.f.call(null,p1__9750_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async9754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9752","meta9752",-934489995,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async9751","cljs.core.async/t_cljs$core$async9751",-581130414,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta9755","meta9755",748459895,null)], null);
}));

(cljs.core.async.t_cljs$core$async9754.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async9754.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9754");

(cljs.core.async.t_cljs$core$async9754.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async9754");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9754.
 */
cljs.core.async.__GT_t_cljs$core$async9754 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9754(f__$1,ch__$1,meta9752__$1,___$2,fn1__$1,meta9755){
return (new cljs.core.async.t_cljs$core$async9754(f__$1,ch__$1,meta9752__$1,___$2,fn1__$1,meta9755));
});

}

return (new cljs.core.async.t_cljs$core$async9754(self__.f,self__.ch,self__.meta9752,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async9751.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9751.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async9751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9752","meta9752",-934489995,null)], null);
}));

(cljs.core.async.t_cljs$core$async9751.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async9751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9751");

(cljs.core.async.t_cljs$core$async9751.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async9751");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9751.
 */
cljs.core.async.__GT_t_cljs$core$async9751 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9751(f__$1,ch__$1,meta9752){
return (new cljs.core.async.t_cljs$core$async9751(f__$1,ch__$1,meta9752));
});

}

return (new cljs.core.async.t_cljs$core$async9751(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9757 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9757 = (function (f,ch,meta9758){
this.f = f;
this.ch = ch;
this.meta9758 = meta9758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async9757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9759,meta9758__$1){
var self__ = this;
var _9759__$1 = this;
return (new cljs.core.async.t_cljs$core$async9757(self__.f,self__.ch,meta9758__$1));
}));

(cljs.core.async.t_cljs$core$async9757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9759){
var self__ = this;
var _9759__$1 = this;
return self__.meta9758;
}));

(cljs.core.async.t_cljs$core$async9757.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9757.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async9757.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9757.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async9757.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9757.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async9757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9758","meta9758",1592250341,null)], null);
}));

(cljs.core.async.t_cljs$core$async9757.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async9757.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9757");

(cljs.core.async.t_cljs$core$async9757.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async9757");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9757.
 */
cljs.core.async.__GT_t_cljs$core$async9757 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async9757(f__$1,ch__$1,meta9758){
return (new cljs.core.async.t_cljs$core$async9757(f__$1,ch__$1,meta9758));
});

}

return (new cljs.core.async.t_cljs$core$async9757(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9760 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9760 = (function (p,ch,meta9761){
this.p = p;
this.ch = ch;
this.meta9761 = meta9761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async9760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9762,meta9761__$1){
var self__ = this;
var _9762__$1 = this;
return (new cljs.core.async.t_cljs$core$async9760(self__.p,self__.ch,meta9761__$1));
}));

(cljs.core.async.t_cljs$core$async9760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9762){
var self__ = this;
var _9762__$1 = this;
return self__.meta9761;
}));

(cljs.core.async.t_cljs$core$async9760.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9760.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async9760.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async9760.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9760.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async9760.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9760.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async9760.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9761","meta9761",1729038966,null)], null);
}));

(cljs.core.async.t_cljs$core$async9760.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async9760.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9760");

(cljs.core.async.t_cljs$core$async9760.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async9760");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9760.
 */
cljs.core.async.__GT_t_cljs$core$async9760 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async9760(p__$1,ch__$1,meta9761){
return (new cljs.core.async.t_cljs$core$async9760(p__$1,ch__$1,meta9761));
});

}

return (new cljs.core.async.t_cljs$core$async9760(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__9764 = arguments.length;
switch (G__9764) {
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
var c__8277__auto___9805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_9785){
var state_val_9786 = (state_9785[(1)]);
if((state_val_9786 === (7))){
var inst_9781 = (state_9785[(2)]);
var state_9785__$1 = state_9785;
var statearr_9787_9806 = state_9785__$1;
(statearr_9787_9806[(2)] = inst_9781);

(statearr_9787_9806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9786 === (1))){
var state_9785__$1 = state_9785;
var statearr_9788_9807 = state_9785__$1;
(statearr_9788_9807[(2)] = null);

(statearr_9788_9807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9786 === (4))){
var inst_9767 = (state_9785[(7)]);
var inst_9767__$1 = (state_9785[(2)]);
var inst_9768 = (inst_9767__$1 == null);
var state_9785__$1 = (function (){var statearr_9789 = state_9785;
(statearr_9789[(7)] = inst_9767__$1);

return statearr_9789;
})();
if(cljs.core.truth_(inst_9768)){
var statearr_9790_9808 = state_9785__$1;
(statearr_9790_9808[(1)] = (5));

} else {
var statearr_9791_9809 = state_9785__$1;
(statearr_9791_9809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9786 === (6))){
var inst_9767 = (state_9785[(7)]);
var inst_9772 = p.call(null,inst_9767);
var state_9785__$1 = state_9785;
if(cljs.core.truth_(inst_9772)){
var statearr_9792_9810 = state_9785__$1;
(statearr_9792_9810[(1)] = (8));

} else {
var statearr_9793_9811 = state_9785__$1;
(statearr_9793_9811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9786 === (3))){
var inst_9783 = (state_9785[(2)]);
var state_9785__$1 = state_9785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9785__$1,inst_9783);
} else {
if((state_val_9786 === (2))){
var state_9785__$1 = state_9785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9785__$1,(4),ch);
} else {
if((state_val_9786 === (11))){
var inst_9775 = (state_9785[(2)]);
var state_9785__$1 = state_9785;
var statearr_9794_9812 = state_9785__$1;
(statearr_9794_9812[(2)] = inst_9775);

(statearr_9794_9812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9786 === (9))){
var state_9785__$1 = state_9785;
var statearr_9795_9813 = state_9785__$1;
(statearr_9795_9813[(2)] = null);

(statearr_9795_9813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9786 === (5))){
var inst_9770 = cljs.core.async.close_BANG_.call(null,out);
var state_9785__$1 = state_9785;
var statearr_9796_9814 = state_9785__$1;
(statearr_9796_9814[(2)] = inst_9770);

(statearr_9796_9814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9786 === (10))){
var inst_9778 = (state_9785[(2)]);
var state_9785__$1 = (function (){var statearr_9797 = state_9785;
(statearr_9797[(8)] = inst_9778);

return statearr_9797;
})();
var statearr_9798_9815 = state_9785__$1;
(statearr_9798_9815[(2)] = null);

(statearr_9798_9815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9786 === (8))){
var inst_9767 = (state_9785[(7)]);
var state_9785__$1 = state_9785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9785__$1,(11),out,inst_9767);
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
var statearr_9799 = [null,null,null,null,null,null,null,null,null];
(statearr_9799[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_9799[(1)] = (1));

return statearr_9799;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_9785){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_9785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e9800){var ex__2335__auto__ = e9800;
var statearr_9801_9816 = state_9785;
(statearr_9801_9816[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_9785[(4)]))){
var statearr_9802_9817 = state_9785;
(statearr_9802_9817[(1)] = cljs.core.first.call(null,(state_9785[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9818 = state_9785;
state_9785 = G__9818;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_9785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_9785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_9803 = f__8278__auto__.call(null);
(statearr_9803[(6)] = c__8277__auto___9805);

return statearr_9803;
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
var G__9820 = arguments.length;
switch (G__9820) {
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
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_9883){
var state_val_9884 = (state_9883[(1)]);
if((state_val_9884 === (7))){
var inst_9879 = (state_9883[(2)]);
var state_9883__$1 = state_9883;
var statearr_9885_9924 = state_9883__$1;
(statearr_9885_9924[(2)] = inst_9879);

(statearr_9885_9924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9884 === (20))){
var inst_9849 = (state_9883[(7)]);
var inst_9860 = (state_9883[(2)]);
var inst_9861 = cljs.core.next.call(null,inst_9849);
var inst_9835 = inst_9861;
var inst_9836 = null;
var inst_9837 = (0);
var inst_9838 = (0);
var state_9883__$1 = (function (){var statearr_9886 = state_9883;
(statearr_9886[(8)] = inst_9860);

(statearr_9886[(9)] = inst_9835);

(statearr_9886[(10)] = inst_9836);

(statearr_9886[(11)] = inst_9837);

(statearr_9886[(12)] = inst_9838);

return statearr_9886;
})();
var statearr_9887_9925 = state_9883__$1;
(statearr_9887_9925[(2)] = null);

(statearr_9887_9925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9884 === (1))){
var state_9883__$1 = state_9883;
var statearr_9888_9926 = state_9883__$1;
(statearr_9888_9926[(2)] = null);

(statearr_9888_9926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9884 === (4))){
var inst_9824 = (state_9883[(13)]);
var inst_9824__$1 = (state_9883[(2)]);
var inst_9825 = (inst_9824__$1 == null);
var state_9883__$1 = (function (){var statearr_9889 = state_9883;
(statearr_9889[(13)] = inst_9824__$1);

return statearr_9889;
})();
if(cljs.core.truth_(inst_9825)){
var statearr_9890_9927 = state_9883__$1;
(statearr_9890_9927[(1)] = (5));

} else {
var statearr_9891_9928 = state_9883__$1;
(statearr_9891_9928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9884 === (15))){
var state_9883__$1 = state_9883;
var statearr_9895_9929 = state_9883__$1;
(statearr_9895_9929[(2)] = null);

(statearr_9895_9929[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9884 === (21))){
var state_9883__$1 = state_9883;
var statearr_9896_9930 = state_9883__$1;
(statearr_9896_9930[(2)] = null);

(statearr_9896_9930[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9884 === (13))){
var inst_9838 = (state_9883[(12)]);
var inst_9835 = (state_9883[(9)]);
var inst_9836 = (state_9883[(10)]);
var inst_9837 = (state_9883[(11)]);
var inst_9845 = (state_9883[(2)]);
var inst_9846 = (inst_9838 + (1));
var tmp9892 = inst_9837;
var tmp9893 = inst_9835;
var tmp9894 = inst_9836;
var inst_9835__$1 = tmp9893;
var inst_9836__$1 = tmp9894;
var inst_9837__$1 = tmp9892;
var inst_9838__$1 = inst_9846;
var state_9883__$1 = (function (){var statearr_9897 = state_9883;
(statearr_9897[(14)] = inst_9845);

(statearr_9897[(9)] = inst_9835__$1);

(statearr_9897[(10)] = inst_9836__$1);

(statearr_9897[(11)] = inst_9837__$1);

(statearr_9897[(12)] = inst_9838__$1);

return statearr_9897;
})();
var statearr_9898_9931 = state_9883__$1;
(statearr_9898_9931[(2)] = null);

(statearr_9898_9931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9884 === (22))){
var state_9883__$1 = state_9883;
var statearr_9899_9932 = state_9883__$1;
(statearr_9899_9932[(2)] = null);

(statearr_9899_9932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9884 === (6))){
var inst_9824 = (state_9883[(13)]);
var inst_9833 = f.call(null,inst_9824);
var inst_9834 = cljs.core.seq.call(null,inst_9833);
var inst_9835 = inst_9834;
var inst_9836 = null;
var inst_9837 = (0);
var inst_9838 = (0);
var state_9883__$1 = (function (){var statearr_9900 = state_9883;
(statearr_9900[(9)] = inst_9835);

(statearr_9900[(10)] = inst_9836);

(statearr_9900[(11)] = inst_9837);

(statearr_9900[(12)] = inst_9838);

return statearr_9900;
})();
var statearr_9901_9933 = state_9883__$1;
(statearr_9901_9933[(2)] = null);

(statearr_9901_9933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9884 === (17))){
var inst_9849 = (state_9883[(7)]);
var inst_9853 = cljs.core.chunk_first.call(null,inst_9849);
var inst_9854 = cljs.core.chunk_rest.call(null,inst_9849);
var inst_9855 = cljs.core.count.call(null,inst_9853);
var inst_9835 = inst_9854;
var inst_9836 = inst_9853;
var inst_9837 = inst_9855;
var inst_9838 = (0);
var state_9883__$1 = (function (){var statearr_9902 = state_9883;
(statearr_9902[(9)] = inst_9835);

(statearr_9902[(10)] = inst_9836);

(statearr_9902[(11)] = inst_9837);

(statearr_9902[(12)] = inst_9838);

return statearr_9902;
})();
var statearr_9903_9934 = state_9883__$1;
(statearr_9903_9934[(2)] = null);

(statearr_9903_9934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9884 === (3))){
var inst_9881 = (state_9883[(2)]);
var state_9883__$1 = state_9883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9883__$1,inst_9881);
} else {
if((state_val_9884 === (12))){
var inst_9869 = (state_9883[(2)]);
var state_9883__$1 = state_9883;
var statearr_9904_9935 = state_9883__$1;
(statearr_9904_9935[(2)] = inst_9869);

(statearr_9904_9935[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9884 === (2))){
var state_9883__$1 = state_9883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9883__$1,(4),in$);
} else {
if((state_val_9884 === (23))){
var inst_9877 = (state_9883[(2)]);
var state_9883__$1 = state_9883;
var statearr_9905_9936 = state_9883__$1;
(statearr_9905_9936[(2)] = inst_9877);

(statearr_9905_9936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9884 === (19))){
var inst_9864 = (state_9883[(2)]);
var state_9883__$1 = state_9883;
var statearr_9906_9937 = state_9883__$1;
(statearr_9906_9937[(2)] = inst_9864);

(statearr_9906_9937[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9884 === (11))){
var inst_9835 = (state_9883[(9)]);
var inst_9849 = (state_9883[(7)]);
var inst_9849__$1 = cljs.core.seq.call(null,inst_9835);
var state_9883__$1 = (function (){var statearr_9907 = state_9883;
(statearr_9907[(7)] = inst_9849__$1);

return statearr_9907;
})();
if(inst_9849__$1){
var statearr_9908_9938 = state_9883__$1;
(statearr_9908_9938[(1)] = (14));

} else {
var statearr_9909_9939 = state_9883__$1;
(statearr_9909_9939[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9884 === (9))){
var inst_9871 = (state_9883[(2)]);
var inst_9872 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_9883__$1 = (function (){var statearr_9910 = state_9883;
(statearr_9910[(15)] = inst_9871);

return statearr_9910;
})();
if(cljs.core.truth_(inst_9872)){
var statearr_9911_9940 = state_9883__$1;
(statearr_9911_9940[(1)] = (21));

} else {
var statearr_9912_9941 = state_9883__$1;
(statearr_9912_9941[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9884 === (5))){
var inst_9827 = cljs.core.async.close_BANG_.call(null,out);
var state_9883__$1 = state_9883;
var statearr_9913_9942 = state_9883__$1;
(statearr_9913_9942[(2)] = inst_9827);

(statearr_9913_9942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9884 === (14))){
var inst_9849 = (state_9883[(7)]);
var inst_9851 = cljs.core.chunked_seq_QMARK_.call(null,inst_9849);
var state_9883__$1 = state_9883;
if(inst_9851){
var statearr_9914_9943 = state_9883__$1;
(statearr_9914_9943[(1)] = (17));

} else {
var statearr_9915_9944 = state_9883__$1;
(statearr_9915_9944[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9884 === (16))){
var inst_9867 = (state_9883[(2)]);
var state_9883__$1 = state_9883;
var statearr_9916_9945 = state_9883__$1;
(statearr_9916_9945[(2)] = inst_9867);

(statearr_9916_9945[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9884 === (10))){
var inst_9836 = (state_9883[(10)]);
var inst_9838 = (state_9883[(12)]);
var inst_9843 = cljs.core._nth.call(null,inst_9836,inst_9838);
var state_9883__$1 = state_9883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9883__$1,(13),out,inst_9843);
} else {
if((state_val_9884 === (18))){
var inst_9849 = (state_9883[(7)]);
var inst_9858 = cljs.core.first.call(null,inst_9849);
var state_9883__$1 = state_9883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9883__$1,(20),out,inst_9858);
} else {
if((state_val_9884 === (8))){
var inst_9838 = (state_9883[(12)]);
var inst_9837 = (state_9883[(11)]);
var inst_9840 = (inst_9838 < inst_9837);
var inst_9841 = inst_9840;
var state_9883__$1 = state_9883;
if(cljs.core.truth_(inst_9841)){
var statearr_9917_9946 = state_9883__$1;
(statearr_9917_9946[(1)] = (10));

} else {
var statearr_9918_9947 = state_9883__$1;
(statearr_9918_9947[(1)] = (11));

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
var statearr_9919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9919[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__2332__auto__);

(statearr_9919[(1)] = (1));

return statearr_9919;
});
var cljs$core$async$mapcat_STAR__$_state_machine__2332__auto____1 = (function (state_9883){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_9883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e9920){var ex__2335__auto__ = e9920;
var statearr_9921_9948 = state_9883;
(statearr_9921_9948[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_9883[(4)]))){
var statearr_9922_9949 = state_9883;
(statearr_9922_9949[(1)] = cljs.core.first.call(null,(state_9883[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9950 = state_9883;
state_9883 = G__9950;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__2332__auto__ = function(state_9883){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__2332__auto____1.call(this,state_9883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__2332__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__2332__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_9923 = f__8278__auto__.call(null);
(statearr_9923[(6)] = c__8277__auto__);

return statearr_9923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
}));

return c__8277__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__9952 = arguments.length;
switch (G__9952) {
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
var G__9955 = arguments.length;
switch (G__9955) {
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
var G__9958 = arguments.length;
switch (G__9958) {
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
var c__8277__auto___10006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_9982){
var state_val_9983 = (state_9982[(1)]);
if((state_val_9983 === (7))){
var inst_9977 = (state_9982[(2)]);
var state_9982__$1 = state_9982;
var statearr_9984_10007 = state_9982__$1;
(statearr_9984_10007[(2)] = inst_9977);

(statearr_9984_10007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9983 === (1))){
var inst_9959 = null;
var state_9982__$1 = (function (){var statearr_9985 = state_9982;
(statearr_9985[(7)] = inst_9959);

return statearr_9985;
})();
var statearr_9986_10008 = state_9982__$1;
(statearr_9986_10008[(2)] = null);

(statearr_9986_10008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9983 === (4))){
var inst_9962 = (state_9982[(8)]);
var inst_9962__$1 = (state_9982[(2)]);
var inst_9963 = (inst_9962__$1 == null);
var inst_9964 = cljs.core.not.call(null,inst_9963);
var state_9982__$1 = (function (){var statearr_9987 = state_9982;
(statearr_9987[(8)] = inst_9962__$1);

return statearr_9987;
})();
if(inst_9964){
var statearr_9988_10009 = state_9982__$1;
(statearr_9988_10009[(1)] = (5));

} else {
var statearr_9989_10010 = state_9982__$1;
(statearr_9989_10010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9983 === (6))){
var state_9982__$1 = state_9982;
var statearr_9990_10011 = state_9982__$1;
(statearr_9990_10011[(2)] = null);

(statearr_9990_10011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9983 === (3))){
var inst_9979 = (state_9982[(2)]);
var inst_9980 = cljs.core.async.close_BANG_.call(null,out);
var state_9982__$1 = (function (){var statearr_9991 = state_9982;
(statearr_9991[(9)] = inst_9979);

return statearr_9991;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9982__$1,inst_9980);
} else {
if((state_val_9983 === (2))){
var state_9982__$1 = state_9982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9982__$1,(4),ch);
} else {
if((state_val_9983 === (11))){
var inst_9962 = (state_9982[(8)]);
var inst_9971 = (state_9982[(2)]);
var inst_9959 = inst_9962;
var state_9982__$1 = (function (){var statearr_9992 = state_9982;
(statearr_9992[(10)] = inst_9971);

(statearr_9992[(7)] = inst_9959);

return statearr_9992;
})();
var statearr_9993_10012 = state_9982__$1;
(statearr_9993_10012[(2)] = null);

(statearr_9993_10012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9983 === (9))){
var inst_9962 = (state_9982[(8)]);
var state_9982__$1 = state_9982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9982__$1,(11),out,inst_9962);
} else {
if((state_val_9983 === (5))){
var inst_9962 = (state_9982[(8)]);
var inst_9959 = (state_9982[(7)]);
var inst_9966 = cljs.core._EQ_.call(null,inst_9962,inst_9959);
var state_9982__$1 = state_9982;
if(inst_9966){
var statearr_9995_10013 = state_9982__$1;
(statearr_9995_10013[(1)] = (8));

} else {
var statearr_9996_10014 = state_9982__$1;
(statearr_9996_10014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9983 === (10))){
var inst_9974 = (state_9982[(2)]);
var state_9982__$1 = state_9982;
var statearr_9997_10015 = state_9982__$1;
(statearr_9997_10015[(2)] = inst_9974);

(statearr_9997_10015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9983 === (8))){
var inst_9959 = (state_9982[(7)]);
var tmp9994 = inst_9959;
var inst_9959__$1 = tmp9994;
var state_9982__$1 = (function (){var statearr_9998 = state_9982;
(statearr_9998[(7)] = inst_9959__$1);

return statearr_9998;
})();
var statearr_9999_10016 = state_9982__$1;
(statearr_9999_10016[(2)] = null);

(statearr_9999_10016[(1)] = (2));


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
var statearr_10000 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10000[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_10000[(1)] = (1));

return statearr_10000;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_9982){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_9982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e10001){var ex__2335__auto__ = e10001;
var statearr_10002_10017 = state_9982;
(statearr_10002_10017[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_9982[(4)]))){
var statearr_10003_10018 = state_9982;
(statearr_10003_10018[(1)] = cljs.core.first.call(null,(state_9982[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10019 = state_9982;
state_9982 = G__10019;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_9982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_9982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_10004 = f__8278__auto__.call(null);
(statearr_10004[(6)] = c__8277__auto___10006);

return statearr_10004;
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
var G__10021 = arguments.length;
switch (G__10021) {
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
var c__8277__auto___10088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_10059){
var state_val_10060 = (state_10059[(1)]);
if((state_val_10060 === (7))){
var inst_10055 = (state_10059[(2)]);
var state_10059__$1 = state_10059;
var statearr_10061_10089 = state_10059__$1;
(statearr_10061_10089[(2)] = inst_10055);

(statearr_10061_10089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10060 === (1))){
var inst_10022 = (new Array(n));
var inst_10023 = inst_10022;
var inst_10024 = (0);
var state_10059__$1 = (function (){var statearr_10062 = state_10059;
(statearr_10062[(7)] = inst_10023);

(statearr_10062[(8)] = inst_10024);

return statearr_10062;
})();
var statearr_10063_10090 = state_10059__$1;
(statearr_10063_10090[(2)] = null);

(statearr_10063_10090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10060 === (4))){
var inst_10027 = (state_10059[(9)]);
var inst_10027__$1 = (state_10059[(2)]);
var inst_10028 = (inst_10027__$1 == null);
var inst_10029 = cljs.core.not.call(null,inst_10028);
var state_10059__$1 = (function (){var statearr_10064 = state_10059;
(statearr_10064[(9)] = inst_10027__$1);

return statearr_10064;
})();
if(inst_10029){
var statearr_10065_10091 = state_10059__$1;
(statearr_10065_10091[(1)] = (5));

} else {
var statearr_10066_10092 = state_10059__$1;
(statearr_10066_10092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10060 === (15))){
var inst_10049 = (state_10059[(2)]);
var state_10059__$1 = state_10059;
var statearr_10067_10093 = state_10059__$1;
(statearr_10067_10093[(2)] = inst_10049);

(statearr_10067_10093[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10060 === (13))){
var state_10059__$1 = state_10059;
var statearr_10068_10094 = state_10059__$1;
(statearr_10068_10094[(2)] = null);

(statearr_10068_10094[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10060 === (6))){
var inst_10024 = (state_10059[(8)]);
var inst_10045 = (inst_10024 > (0));
var state_10059__$1 = state_10059;
if(cljs.core.truth_(inst_10045)){
var statearr_10069_10095 = state_10059__$1;
(statearr_10069_10095[(1)] = (12));

} else {
var statearr_10070_10096 = state_10059__$1;
(statearr_10070_10096[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10060 === (3))){
var inst_10057 = (state_10059[(2)]);
var state_10059__$1 = state_10059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10059__$1,inst_10057);
} else {
if((state_val_10060 === (12))){
var inst_10023 = (state_10059[(7)]);
var inst_10047 = cljs.core.vec.call(null,inst_10023);
var state_10059__$1 = state_10059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10059__$1,(15),out,inst_10047);
} else {
if((state_val_10060 === (2))){
var state_10059__$1 = state_10059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10059__$1,(4),ch);
} else {
if((state_val_10060 === (11))){
var inst_10039 = (state_10059[(2)]);
var inst_10040 = (new Array(n));
var inst_10023 = inst_10040;
var inst_10024 = (0);
var state_10059__$1 = (function (){var statearr_10071 = state_10059;
(statearr_10071[(10)] = inst_10039);

(statearr_10071[(7)] = inst_10023);

(statearr_10071[(8)] = inst_10024);

return statearr_10071;
})();
var statearr_10072_10097 = state_10059__$1;
(statearr_10072_10097[(2)] = null);

(statearr_10072_10097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10060 === (9))){
var inst_10023 = (state_10059[(7)]);
var inst_10037 = cljs.core.vec.call(null,inst_10023);
var state_10059__$1 = state_10059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10059__$1,(11),out,inst_10037);
} else {
if((state_val_10060 === (5))){
var inst_10023 = (state_10059[(7)]);
var inst_10024 = (state_10059[(8)]);
var inst_10027 = (state_10059[(9)]);
var inst_10032 = (state_10059[(11)]);
var inst_10031 = (inst_10023[inst_10024] = inst_10027);
var inst_10032__$1 = (inst_10024 + (1));
var inst_10033 = (inst_10032__$1 < n);
var state_10059__$1 = (function (){var statearr_10073 = state_10059;
(statearr_10073[(12)] = inst_10031);

(statearr_10073[(11)] = inst_10032__$1);

return statearr_10073;
})();
if(cljs.core.truth_(inst_10033)){
var statearr_10074_10098 = state_10059__$1;
(statearr_10074_10098[(1)] = (8));

} else {
var statearr_10075_10099 = state_10059__$1;
(statearr_10075_10099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10060 === (14))){
var inst_10052 = (state_10059[(2)]);
var inst_10053 = cljs.core.async.close_BANG_.call(null,out);
var state_10059__$1 = (function (){var statearr_10077 = state_10059;
(statearr_10077[(13)] = inst_10052);

return statearr_10077;
})();
var statearr_10078_10100 = state_10059__$1;
(statearr_10078_10100[(2)] = inst_10053);

(statearr_10078_10100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10060 === (10))){
var inst_10043 = (state_10059[(2)]);
var state_10059__$1 = state_10059;
var statearr_10079_10101 = state_10059__$1;
(statearr_10079_10101[(2)] = inst_10043);

(statearr_10079_10101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10060 === (8))){
var inst_10023 = (state_10059[(7)]);
var inst_10032 = (state_10059[(11)]);
var tmp10076 = inst_10023;
var inst_10023__$1 = tmp10076;
var inst_10024 = inst_10032;
var state_10059__$1 = (function (){var statearr_10080 = state_10059;
(statearr_10080[(7)] = inst_10023__$1);

(statearr_10080[(8)] = inst_10024);

return statearr_10080;
})();
var statearr_10081_10102 = state_10059__$1;
(statearr_10081_10102[(2)] = null);

(statearr_10081_10102[(1)] = (2));


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
var statearr_10082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10082[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_10082[(1)] = (1));

return statearr_10082;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_10059){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_10059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e10083){var ex__2335__auto__ = e10083;
var statearr_10084_10103 = state_10059;
(statearr_10084_10103[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_10059[(4)]))){
var statearr_10085_10104 = state_10059;
(statearr_10085_10104[(1)] = cljs.core.first.call(null,(state_10059[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10105 = state_10059;
state_10059 = G__10105;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_10059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_10059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_10086 = f__8278__auto__.call(null);
(statearr_10086[(6)] = c__8277__auto___10088);

return statearr_10086;
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
var G__10107 = arguments.length;
switch (G__10107) {
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
var c__8277__auto___10185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__8278__auto__ = (function (){var switch__2331__auto__ = (function (state_10152){
var state_val_10153 = (state_10152[(1)]);
if((state_val_10153 === (7))){
var inst_10148 = (state_10152[(2)]);
var state_10152__$1 = state_10152;
var statearr_10154_10186 = state_10152__$1;
(statearr_10154_10186[(2)] = inst_10148);

(statearr_10154_10186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10153 === (1))){
var inst_10108 = [];
var inst_10109 = inst_10108;
var inst_10110 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_10152__$1 = (function (){var statearr_10155 = state_10152;
(statearr_10155[(7)] = inst_10109);

(statearr_10155[(8)] = inst_10110);

return statearr_10155;
})();
var statearr_10156_10187 = state_10152__$1;
(statearr_10156_10187[(2)] = null);

(statearr_10156_10187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10153 === (4))){
var inst_10113 = (state_10152[(9)]);
var inst_10113__$1 = (state_10152[(2)]);
var inst_10114 = (inst_10113__$1 == null);
var inst_10115 = cljs.core.not.call(null,inst_10114);
var state_10152__$1 = (function (){var statearr_10157 = state_10152;
(statearr_10157[(9)] = inst_10113__$1);

return statearr_10157;
})();
if(inst_10115){
var statearr_10158_10188 = state_10152__$1;
(statearr_10158_10188[(1)] = (5));

} else {
var statearr_10159_10189 = state_10152__$1;
(statearr_10159_10189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10153 === (15))){
var inst_10109 = (state_10152[(7)]);
var inst_10140 = cljs.core.vec.call(null,inst_10109);
var state_10152__$1 = state_10152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10152__$1,(18),out,inst_10140);
} else {
if((state_val_10153 === (13))){
var inst_10135 = (state_10152[(2)]);
var state_10152__$1 = state_10152;
var statearr_10160_10190 = state_10152__$1;
(statearr_10160_10190[(2)] = inst_10135);

(statearr_10160_10190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10153 === (6))){
var inst_10109 = (state_10152[(7)]);
var inst_10137 = inst_10109.length;
var inst_10138 = (inst_10137 > (0));
var state_10152__$1 = state_10152;
if(cljs.core.truth_(inst_10138)){
var statearr_10161_10191 = state_10152__$1;
(statearr_10161_10191[(1)] = (15));

} else {
var statearr_10162_10192 = state_10152__$1;
(statearr_10162_10192[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10153 === (17))){
var inst_10145 = (state_10152[(2)]);
var inst_10146 = cljs.core.async.close_BANG_.call(null,out);
var state_10152__$1 = (function (){var statearr_10163 = state_10152;
(statearr_10163[(10)] = inst_10145);

return statearr_10163;
})();
var statearr_10164_10193 = state_10152__$1;
(statearr_10164_10193[(2)] = inst_10146);

(statearr_10164_10193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10153 === (3))){
var inst_10150 = (state_10152[(2)]);
var state_10152__$1 = state_10152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10152__$1,inst_10150);
} else {
if((state_val_10153 === (12))){
var inst_10109 = (state_10152[(7)]);
var inst_10128 = cljs.core.vec.call(null,inst_10109);
var state_10152__$1 = state_10152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10152__$1,(14),out,inst_10128);
} else {
if((state_val_10153 === (2))){
var state_10152__$1 = state_10152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10152__$1,(4),ch);
} else {
if((state_val_10153 === (11))){
var inst_10109 = (state_10152[(7)]);
var inst_10113 = (state_10152[(9)]);
var inst_10117 = (state_10152[(11)]);
var inst_10125 = inst_10109.push(inst_10113);
var tmp10165 = inst_10109;
var inst_10109__$1 = tmp10165;
var inst_10110 = inst_10117;
var state_10152__$1 = (function (){var statearr_10166 = state_10152;
(statearr_10166[(12)] = inst_10125);

(statearr_10166[(7)] = inst_10109__$1);

(statearr_10166[(8)] = inst_10110);

return statearr_10166;
})();
var statearr_10167_10194 = state_10152__$1;
(statearr_10167_10194[(2)] = null);

(statearr_10167_10194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10153 === (9))){
var inst_10110 = (state_10152[(8)]);
var inst_10121 = cljs.core.keyword_identical_QMARK_.call(null,inst_10110,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_10152__$1 = state_10152;
var statearr_10168_10195 = state_10152__$1;
(statearr_10168_10195[(2)] = inst_10121);

(statearr_10168_10195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10153 === (5))){
var inst_10113 = (state_10152[(9)]);
var inst_10117 = (state_10152[(11)]);
var inst_10110 = (state_10152[(8)]);
var inst_10118 = (state_10152[(13)]);
var inst_10117__$1 = f.call(null,inst_10113);
var inst_10118__$1 = cljs.core._EQ_.call(null,inst_10117__$1,inst_10110);
var state_10152__$1 = (function (){var statearr_10169 = state_10152;
(statearr_10169[(11)] = inst_10117__$1);

(statearr_10169[(13)] = inst_10118__$1);

return statearr_10169;
})();
if(inst_10118__$1){
var statearr_10170_10196 = state_10152__$1;
(statearr_10170_10196[(1)] = (8));

} else {
var statearr_10171_10197 = state_10152__$1;
(statearr_10171_10197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10153 === (14))){
var inst_10113 = (state_10152[(9)]);
var inst_10117 = (state_10152[(11)]);
var inst_10130 = (state_10152[(2)]);
var inst_10131 = [];
var inst_10132 = inst_10131.push(inst_10113);
var inst_10109 = inst_10131;
var inst_10110 = inst_10117;
var state_10152__$1 = (function (){var statearr_10172 = state_10152;
(statearr_10172[(14)] = inst_10130);

(statearr_10172[(15)] = inst_10132);

(statearr_10172[(7)] = inst_10109);

(statearr_10172[(8)] = inst_10110);

return statearr_10172;
})();
var statearr_10173_10198 = state_10152__$1;
(statearr_10173_10198[(2)] = null);

(statearr_10173_10198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10153 === (16))){
var state_10152__$1 = state_10152;
var statearr_10174_10199 = state_10152__$1;
(statearr_10174_10199[(2)] = null);

(statearr_10174_10199[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10153 === (10))){
var inst_10123 = (state_10152[(2)]);
var state_10152__$1 = state_10152;
if(cljs.core.truth_(inst_10123)){
var statearr_10175_10200 = state_10152__$1;
(statearr_10175_10200[(1)] = (11));

} else {
var statearr_10176_10201 = state_10152__$1;
(statearr_10176_10201[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10153 === (18))){
var inst_10142 = (state_10152[(2)]);
var state_10152__$1 = state_10152;
var statearr_10177_10202 = state_10152__$1;
(statearr_10177_10202[(2)] = inst_10142);

(statearr_10177_10202[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10153 === (8))){
var inst_10118 = (state_10152[(13)]);
var state_10152__$1 = state_10152;
var statearr_10178_10203 = state_10152__$1;
(statearr_10178_10203[(2)] = inst_10118);

(statearr_10178_10203[(1)] = (10));


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
var statearr_10179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10179[(0)] = cljs$core$async$state_machine__2332__auto__);

(statearr_10179[(1)] = (1));

return statearr_10179;
});
var cljs$core$async$state_machine__2332__auto____1 = (function (state_10152){
while(true){
var ret_value__2333__auto__ = (function (){try{while(true){
var result__2334__auto__ = switch__2331__auto__.call(null,state_10152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2334__auto__;
}
break;
}
}catch (e10180){var ex__2335__auto__ = e10180;
var statearr_10181_10204 = state_10152;
(statearr_10181_10204[(2)] = ex__2335__auto__);


if(cljs.core.seq.call(null,(state_10152[(4)]))){
var statearr_10182_10205 = state_10152;
(statearr_10182_10205[(1)] = cljs.core.first.call(null,(state_10152[(4)])));

} else {
throw ex__2335__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10206 = state_10152;
state_10152 = G__10206;
continue;
} else {
return ret_value__2333__auto__;
}
break;
}
});
cljs$core$async$state_machine__2332__auto__ = function(state_10152){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2332__auto____1.call(this,state_10152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2332__auto____0;
cljs$core$async$state_machine__2332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2332__auto____1;
return cljs$core$async$state_machine__2332__auto__;
})()
})();
var state__8279__auto__ = (function (){var statearr_10183 = f__8278__auto__.call(null);
(statearr_10183[(6)] = c__8277__auto___10185);

return statearr_10183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8279__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
