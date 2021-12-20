// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17368 = arguments.length;
switch (G__17368) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17369 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17369 = (function (f,blockable,meta17370){
this.f = f;
this.blockable = blockable;
this.meta17370 = meta17370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17371,meta17370__$1){
var self__ = this;
var _17371__$1 = this;
return (new cljs.core.async.t_cljs$core$async17369(self__.f,self__.blockable,meta17370__$1));
});

cljs.core.async.t_cljs$core$async17369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17371){
var self__ = this;
var _17371__$1 = this;
return self__.meta17370;
});

cljs.core.async.t_cljs$core$async17369.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17369.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17369.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17369.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17369.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17370","meta17370",-1866081832,null)], null);
});

cljs.core.async.t_cljs$core$async17369.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17369.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17369";

cljs.core.async.t_cljs$core$async17369.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async17369");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17369.
 */
cljs.core.async.__GT_t_cljs$core$async17369 = (function cljs$core$async$__GT_t_cljs$core$async17369(f__$1,blockable__$1,meta17370){
return (new cljs.core.async.t_cljs$core$async17369(f__$1,blockable__$1,meta17370));
});

}

return (new cljs.core.async.t_cljs$core$async17369(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
var G__17375 = arguments.length;
switch (G__17375) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17378 = arguments.length;
switch (G__17378) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var G__17381 = arguments.length;
switch (G__17381) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17383 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17383);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17383,ret){
return (function (){
return fn1.call(null,val_17383);
});})(val_17383,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

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
var G__17385 = arguments.length;
switch (G__17385) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___17387 = n;
var x_17388 = (0);
while(true){
if((x_17388 < n__4518__auto___17387)){
(a[x_17388] = (0));

var G__17389 = (x_17388 + (1));
x_17388 = G__17389;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__17390 = (i + (1));
i = G__17390;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17391 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17391 = (function (flag,meta17392){
this.flag = flag;
this.meta17392 = meta17392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17393,meta17392__$1){
var self__ = this;
var _17393__$1 = this;
return (new cljs.core.async.t_cljs$core$async17391(self__.flag,meta17392__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17391.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17393){
var self__ = this;
var _17393__$1 = this;
return self__.meta17392;
});})(flag))
;

cljs.core.async.t_cljs$core$async17391.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17391.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17391.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17391.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17391.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17392","meta17392",-1407053245,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17391.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17391.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17391";

cljs.core.async.t_cljs$core$async17391.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async17391");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17391.
 */
cljs.core.async.__GT_t_cljs$core$async17391 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17391(flag__$1,meta17392){
return (new cljs.core.async.t_cljs$core$async17391(flag__$1,meta17392));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17391(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17394 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17394 = (function (flag,cb,meta17395){
this.flag = flag;
this.cb = cb;
this.meta17395 = meta17395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17396,meta17395__$1){
var self__ = this;
var _17396__$1 = this;
return (new cljs.core.async.t_cljs$core$async17394(self__.flag,self__.cb,meta17395__$1));
});

cljs.core.async.t_cljs$core$async17394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17396){
var self__ = this;
var _17396__$1 = this;
return self__.meta17395;
});

cljs.core.async.t_cljs$core$async17394.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17394.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17394.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17394.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17394.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17395","meta17395",1686512922,null)], null);
});

cljs.core.async.t_cljs$core$async17394.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17394.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17394";

cljs.core.async.t_cljs$core$async17394.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async17394");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17394.
 */
cljs.core.async.__GT_t_cljs$core$async17394 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17394(flag__$1,cb__$1,meta17395){
return (new cljs.core.async.t_cljs$core$async17394(flag__$1,cb__$1,meta17395));
});

}

return (new cljs.core.async.t_cljs$core$async17394(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17397_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17397_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17398_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17398_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17399 = (i + (1));
i = G__17399;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
var args__4647__auto__ = [];
var len__4641__auto___17405 = arguments.length;
var i__4642__auto___17406 = (0);
while(true){
if((i__4642__auto___17406 < len__4641__auto___17405)){
args__4647__auto__.push((arguments[i__4642__auto___17406]));

var G__17407 = (i__4642__auto___17406 + (1));
i__4642__auto___17406 = G__17407;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17402){
var map__17403 = p__17402;
var map__17403__$1 = (((((!((map__17403 == null))))?(((((map__17403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17403):map__17403);
var opts = map__17403__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17400){
var G__17401 = cljs.core.first.call(null,seq17400);
var seq17400__$1 = cljs.core.next.call(null,seq17400);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17401,seq17400__$1);
});

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
var G__17409 = arguments.length;
switch (G__17409) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15444__auto___17455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15444__auto___17455){
return (function (){
var f__15445__auto__ = (function (){var switch__15277__auto__ = ((function (c__15444__auto___17455){
return (function (state_17433){
var state_val_17434 = (state_17433[(1)]);
if((state_val_17434 === (7))){
var inst_17429 = (state_17433[(2)]);
var state_17433__$1 = state_17433;
var statearr_17435_17456 = state_17433__$1;
(statearr_17435_17456[(2)] = inst_17429);

(statearr_17435_17456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (1))){
var state_17433__$1 = state_17433;
var statearr_17436_17457 = state_17433__$1;
(statearr_17436_17457[(2)] = null);

(statearr_17436_17457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (4))){
var inst_17412 = (state_17433[(7)]);
var inst_17412__$1 = (state_17433[(2)]);
var inst_17413 = (inst_17412__$1 == null);
var state_17433__$1 = (function (){var statearr_17437 = state_17433;
(statearr_17437[(7)] = inst_17412__$1);

return statearr_17437;
})();
if(cljs.core.truth_(inst_17413)){
var statearr_17438_17458 = state_17433__$1;
(statearr_17438_17458[(1)] = (5));

} else {
var statearr_17439_17459 = state_17433__$1;
(statearr_17439_17459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (13))){
var state_17433__$1 = state_17433;
var statearr_17440_17460 = state_17433__$1;
(statearr_17440_17460[(2)] = null);

(statearr_17440_17460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (6))){
var inst_17412 = (state_17433[(7)]);
var state_17433__$1 = state_17433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17433__$1,(11),to,inst_17412);
} else {
if((state_val_17434 === (3))){
var inst_17431 = (state_17433[(2)]);
var state_17433__$1 = state_17433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17433__$1,inst_17431);
} else {
if((state_val_17434 === (12))){
var state_17433__$1 = state_17433;
var statearr_17441_17461 = state_17433__$1;
(statearr_17441_17461[(2)] = null);

(statearr_17441_17461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (2))){
var state_17433__$1 = state_17433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17433__$1,(4),from);
} else {
if((state_val_17434 === (11))){
var inst_17422 = (state_17433[(2)]);
var state_17433__$1 = state_17433;
if(cljs.core.truth_(inst_17422)){
var statearr_17442_17462 = state_17433__$1;
(statearr_17442_17462[(1)] = (12));

} else {
var statearr_17443_17463 = state_17433__$1;
(statearr_17443_17463[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (9))){
var state_17433__$1 = state_17433;
var statearr_17444_17464 = state_17433__$1;
(statearr_17444_17464[(2)] = null);

(statearr_17444_17464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (5))){
var state_17433__$1 = state_17433;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17445_17465 = state_17433__$1;
(statearr_17445_17465[(1)] = (8));

} else {
var statearr_17446_17466 = state_17433__$1;
(statearr_17446_17466[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (14))){
var inst_17427 = (state_17433[(2)]);
var state_17433__$1 = state_17433;
var statearr_17447_17467 = state_17433__$1;
(statearr_17447_17467[(2)] = inst_17427);

(statearr_17447_17467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (10))){
var inst_17419 = (state_17433[(2)]);
var state_17433__$1 = state_17433;
var statearr_17448_17468 = state_17433__$1;
(statearr_17448_17468[(2)] = inst_17419);

(statearr_17448_17468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (8))){
var inst_17416 = cljs.core.async.close_BANG_.call(null,to);
var state_17433__$1 = state_17433;
var statearr_17449_17469 = state_17433__$1;
(statearr_17449_17469[(2)] = inst_17416);

(statearr_17449_17469[(1)] = (10));


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
});})(c__15444__auto___17455))
;
return ((function (switch__15277__auto__,c__15444__auto___17455){
return (function() {
var cljs$core$async$state_machine__15278__auto__ = null;
var cljs$core$async$state_machine__15278__auto____0 = (function (){
var statearr_17450 = [null,null,null,null,null,null,null,null];
(statearr_17450[(0)] = cljs$core$async$state_machine__15278__auto__);

(statearr_17450[(1)] = (1));

return statearr_17450;
});
var cljs$core$async$state_machine__15278__auto____1 = (function (state_17433){
while(true){
var ret_value__15279__auto__ = (function (){try{while(true){
var result__15280__auto__ = switch__15277__auto__.call(null,state_17433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15280__auto__;
}
break;
}
}catch (e17451){if((e17451 instanceof Object)){
var ex__15281__auto__ = e17451;
var statearr_17452_17470 = state_17433;
(statearr_17452_17470[(5)] = ex__15281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17471 = state_17433;
state_17433 = G__17471;
continue;
} else {
return ret_value__15279__auto__;
}
break;
}
});
cljs$core$async$state_machine__15278__auto__ = function(state_17433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15278__auto____1.call(this,state_17433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15278__auto____0;
cljs$core$async$state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15278__auto____1;
return cljs$core$async$state_machine__15278__auto__;
})()
;})(switch__15277__auto__,c__15444__auto___17455))
})();
var state__15446__auto__ = (function (){var statearr_17453 = f__15445__auto__.call(null);
(statearr_17453[(6)] = c__15444__auto___17455);

return statearr_17453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15446__auto__);
});})(c__15444__auto___17455))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__17472){
var vec__17473 = p__17472;
var v = cljs.core.nth.call(null,vec__17473,(0),null);
var p = cljs.core.nth.call(null,vec__17473,(1),null);
var job = vec__17473;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15444__auto___17644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15444__auto___17644,res,vec__17473,v,p,job,jobs,results){
return (function (){
var f__15445__auto__ = (function (){var switch__15277__auto__ = ((function (c__15444__auto___17644,res,vec__17473,v,p,job,jobs,results){
return (function (state_17480){
var state_val_17481 = (state_17480[(1)]);
if((state_val_17481 === (1))){
var state_17480__$1 = state_17480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17480__$1,(2),res,v);
} else {
if((state_val_17481 === (2))){
var inst_17477 = (state_17480[(2)]);
var inst_17478 = cljs.core.async.close_BANG_.call(null,res);
var state_17480__$1 = (function (){var statearr_17482 = state_17480;
(statearr_17482[(7)] = inst_17477);

return statearr_17482;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17480__$1,inst_17478);
} else {
return null;
}
}
});})(c__15444__auto___17644,res,vec__17473,v,p,job,jobs,results))
;
return ((function (switch__15277__auto__,c__15444__auto___17644,res,vec__17473,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____0 = (function (){
var statearr_17483 = [null,null,null,null,null,null,null,null];
(statearr_17483[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__);

(statearr_17483[(1)] = (1));

return statearr_17483;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____1 = (function (state_17480){
while(true){
var ret_value__15279__auto__ = (function (){try{while(true){
var result__15280__auto__ = switch__15277__auto__.call(null,state_17480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15280__auto__;
}
break;
}
}catch (e17484){if((e17484 instanceof Object)){
var ex__15281__auto__ = e17484;
var statearr_17485_17645 = state_17480;
(statearr_17485_17645[(5)] = ex__15281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17646 = state_17480;
state_17480 = G__17646;
continue;
} else {
return ret_value__15279__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__ = function(state_17480){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____1.call(this,state_17480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__;
})()
;})(switch__15277__auto__,c__15444__auto___17644,res,vec__17473,v,p,job,jobs,results))
})();
var state__15446__auto__ = (function (){var statearr_17486 = f__15445__auto__.call(null);
(statearr_17486[(6)] = c__15444__auto___17644);

return statearr_17486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15446__auto__);
});})(c__15444__auto___17644,res,vec__17473,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17487){
var vec__17488 = p__17487;
var v = cljs.core.nth.call(null,vec__17488,(0),null);
var p = cljs.core.nth.call(null,vec__17488,(1),null);
var job = vec__17488;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___17647 = n;
var __17648 = (0);
while(true){
if((__17648 < n__4518__auto___17647)){
var G__17491_17649 = type;
var G__17491_17650__$1 = (((G__17491_17649 instanceof cljs.core.Keyword))?G__17491_17649.fqn:null);
switch (G__17491_17650__$1) {
case "compute":
var c__15444__auto___17652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17648,c__15444__auto___17652,G__17491_17649,G__17491_17650__$1,n__4518__auto___17647,jobs,results,process,async){
return (function (){
var f__15445__auto__ = (function (){var switch__15277__auto__ = ((function (__17648,c__15444__auto___17652,G__17491_17649,G__17491_17650__$1,n__4518__auto___17647,jobs,results,process,async){
return (function (state_17504){
var state_val_17505 = (state_17504[(1)]);
if((state_val_17505 === (1))){
var state_17504__$1 = state_17504;
var statearr_17506_17653 = state_17504__$1;
(statearr_17506_17653[(2)] = null);

(statearr_17506_17653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (2))){
var state_17504__$1 = state_17504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17504__$1,(4),jobs);
} else {
if((state_val_17505 === (3))){
var inst_17502 = (state_17504[(2)]);
var state_17504__$1 = state_17504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17504__$1,inst_17502);
} else {
if((state_val_17505 === (4))){
var inst_17494 = (state_17504[(2)]);
var inst_17495 = process.call(null,inst_17494);
var state_17504__$1 = state_17504;
if(cljs.core.truth_(inst_17495)){
var statearr_17507_17654 = state_17504__$1;
(statearr_17507_17654[(1)] = (5));

} else {
var statearr_17508_17655 = state_17504__$1;
(statearr_17508_17655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (5))){
var state_17504__$1 = state_17504;
var statearr_17509_17656 = state_17504__$1;
(statearr_17509_17656[(2)] = null);

(statearr_17509_17656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (6))){
var state_17504__$1 = state_17504;
var statearr_17510_17657 = state_17504__$1;
(statearr_17510_17657[(2)] = null);

(statearr_17510_17657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (7))){
var inst_17500 = (state_17504[(2)]);
var state_17504__$1 = state_17504;
var statearr_17511_17658 = state_17504__$1;
(statearr_17511_17658[(2)] = inst_17500);

(statearr_17511_17658[(1)] = (3));


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
});})(__17648,c__15444__auto___17652,G__17491_17649,G__17491_17650__$1,n__4518__auto___17647,jobs,results,process,async))
;
return ((function (__17648,switch__15277__auto__,c__15444__auto___17652,G__17491_17649,G__17491_17650__$1,n__4518__auto___17647,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____0 = (function (){
var statearr_17512 = [null,null,null,null,null,null,null];
(statearr_17512[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__);

(statearr_17512[(1)] = (1));

return statearr_17512;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____1 = (function (state_17504){
while(true){
var ret_value__15279__auto__ = (function (){try{while(true){
var result__15280__auto__ = switch__15277__auto__.call(null,state_17504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15280__auto__;
}
break;
}
}catch (e17513){if((e17513 instanceof Object)){
var ex__15281__auto__ = e17513;
var statearr_17514_17659 = state_17504;
(statearr_17514_17659[(5)] = ex__15281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17660 = state_17504;
state_17504 = G__17660;
continue;
} else {
return ret_value__15279__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__ = function(state_17504){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____1.call(this,state_17504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__;
})()
;})(__17648,switch__15277__auto__,c__15444__auto___17652,G__17491_17649,G__17491_17650__$1,n__4518__auto___17647,jobs,results,process,async))
})();
var state__15446__auto__ = (function (){var statearr_17515 = f__15445__auto__.call(null);
(statearr_17515[(6)] = c__15444__auto___17652);

return statearr_17515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15446__auto__);
});})(__17648,c__15444__auto___17652,G__17491_17649,G__17491_17650__$1,n__4518__auto___17647,jobs,results,process,async))
);


break;
case "async":
var c__15444__auto___17661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17648,c__15444__auto___17661,G__17491_17649,G__17491_17650__$1,n__4518__auto___17647,jobs,results,process,async){
return (function (){
var f__15445__auto__ = (function (){var switch__15277__auto__ = ((function (__17648,c__15444__auto___17661,G__17491_17649,G__17491_17650__$1,n__4518__auto___17647,jobs,results,process,async){
return (function (state_17528){
var state_val_17529 = (state_17528[(1)]);
if((state_val_17529 === (1))){
var state_17528__$1 = state_17528;
var statearr_17530_17662 = state_17528__$1;
(statearr_17530_17662[(2)] = null);

(statearr_17530_17662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17529 === (2))){
var state_17528__$1 = state_17528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17528__$1,(4),jobs);
} else {
if((state_val_17529 === (3))){
var inst_17526 = (state_17528[(2)]);
var state_17528__$1 = state_17528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17528__$1,inst_17526);
} else {
if((state_val_17529 === (4))){
var inst_17518 = (state_17528[(2)]);
var inst_17519 = async.call(null,inst_17518);
var state_17528__$1 = state_17528;
if(cljs.core.truth_(inst_17519)){
var statearr_17531_17663 = state_17528__$1;
(statearr_17531_17663[(1)] = (5));

} else {
var statearr_17532_17664 = state_17528__$1;
(statearr_17532_17664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17529 === (5))){
var state_17528__$1 = state_17528;
var statearr_17533_17665 = state_17528__$1;
(statearr_17533_17665[(2)] = null);

(statearr_17533_17665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17529 === (6))){
var state_17528__$1 = state_17528;
var statearr_17534_17666 = state_17528__$1;
(statearr_17534_17666[(2)] = null);

(statearr_17534_17666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17529 === (7))){
var inst_17524 = (state_17528[(2)]);
var state_17528__$1 = state_17528;
var statearr_17535_17667 = state_17528__$1;
(statearr_17535_17667[(2)] = inst_17524);

(statearr_17535_17667[(1)] = (3));


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
});})(__17648,c__15444__auto___17661,G__17491_17649,G__17491_17650__$1,n__4518__auto___17647,jobs,results,process,async))
;
return ((function (__17648,switch__15277__auto__,c__15444__auto___17661,G__17491_17649,G__17491_17650__$1,n__4518__auto___17647,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____0 = (function (){
var statearr_17536 = [null,null,null,null,null,null,null];
(statearr_17536[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__);

(statearr_17536[(1)] = (1));

return statearr_17536;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____1 = (function (state_17528){
while(true){
var ret_value__15279__auto__ = (function (){try{while(true){
var result__15280__auto__ = switch__15277__auto__.call(null,state_17528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15280__auto__;
}
break;
}
}catch (e17537){if((e17537 instanceof Object)){
var ex__15281__auto__ = e17537;
var statearr_17538_17668 = state_17528;
(statearr_17538_17668[(5)] = ex__15281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17669 = state_17528;
state_17528 = G__17669;
continue;
} else {
return ret_value__15279__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__ = function(state_17528){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____1.call(this,state_17528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__;
})()
;})(__17648,switch__15277__auto__,c__15444__auto___17661,G__17491_17649,G__17491_17650__$1,n__4518__auto___17647,jobs,results,process,async))
})();
var state__15446__auto__ = (function (){var statearr_17539 = f__15445__auto__.call(null);
(statearr_17539[(6)] = c__15444__auto___17661);

return statearr_17539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15446__auto__);
});})(__17648,c__15444__auto___17661,G__17491_17649,G__17491_17650__$1,n__4518__auto___17647,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17491_17650__$1)].join('')));

}

var G__17670 = (__17648 + (1));
__17648 = G__17670;
continue;
} else {
}
break;
}

var c__15444__auto___17671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15444__auto___17671,jobs,results,process,async){
return (function (){
var f__15445__auto__ = (function (){var switch__15277__auto__ = ((function (c__15444__auto___17671,jobs,results,process,async){
return (function (state_17561){
var state_val_17562 = (state_17561[(1)]);
if((state_val_17562 === (7))){
var inst_17557 = (state_17561[(2)]);
var state_17561__$1 = state_17561;
var statearr_17563_17672 = state_17561__$1;
(statearr_17563_17672[(2)] = inst_17557);

(statearr_17563_17672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17562 === (1))){
var state_17561__$1 = state_17561;
var statearr_17564_17673 = state_17561__$1;
(statearr_17564_17673[(2)] = null);

(statearr_17564_17673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17562 === (4))){
var inst_17542 = (state_17561[(7)]);
var inst_17542__$1 = (state_17561[(2)]);
var inst_17543 = (inst_17542__$1 == null);
var state_17561__$1 = (function (){var statearr_17565 = state_17561;
(statearr_17565[(7)] = inst_17542__$1);

return statearr_17565;
})();
if(cljs.core.truth_(inst_17543)){
var statearr_17566_17674 = state_17561__$1;
(statearr_17566_17674[(1)] = (5));

} else {
var statearr_17567_17675 = state_17561__$1;
(statearr_17567_17675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17562 === (6))){
var inst_17542 = (state_17561[(7)]);
var inst_17547 = (state_17561[(8)]);
var inst_17547__$1 = cljs.core.async.chan.call(null,(1));
var inst_17548 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17549 = [inst_17542,inst_17547__$1];
var inst_17550 = (new cljs.core.PersistentVector(null,2,(5),inst_17548,inst_17549,null));
var state_17561__$1 = (function (){var statearr_17568 = state_17561;
(statearr_17568[(8)] = inst_17547__$1);

return statearr_17568;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17561__$1,(8),jobs,inst_17550);
} else {
if((state_val_17562 === (3))){
var inst_17559 = (state_17561[(2)]);
var state_17561__$1 = state_17561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17561__$1,inst_17559);
} else {
if((state_val_17562 === (2))){
var state_17561__$1 = state_17561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17561__$1,(4),from);
} else {
if((state_val_17562 === (9))){
var inst_17554 = (state_17561[(2)]);
var state_17561__$1 = (function (){var statearr_17569 = state_17561;
(statearr_17569[(9)] = inst_17554);

return statearr_17569;
})();
var statearr_17570_17676 = state_17561__$1;
(statearr_17570_17676[(2)] = null);

(statearr_17570_17676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17562 === (5))){
var inst_17545 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17561__$1 = state_17561;
var statearr_17571_17677 = state_17561__$1;
(statearr_17571_17677[(2)] = inst_17545);

(statearr_17571_17677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17562 === (8))){
var inst_17547 = (state_17561[(8)]);
var inst_17552 = (state_17561[(2)]);
var state_17561__$1 = (function (){var statearr_17572 = state_17561;
(statearr_17572[(10)] = inst_17552);

return statearr_17572;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17561__$1,(9),results,inst_17547);
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
});})(c__15444__auto___17671,jobs,results,process,async))
;
return ((function (switch__15277__auto__,c__15444__auto___17671,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____0 = (function (){
var statearr_17573 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17573[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__);

(statearr_17573[(1)] = (1));

return statearr_17573;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____1 = (function (state_17561){
while(true){
var ret_value__15279__auto__ = (function (){try{while(true){
var result__15280__auto__ = switch__15277__auto__.call(null,state_17561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15280__auto__;
}
break;
}
}catch (e17574){if((e17574 instanceof Object)){
var ex__15281__auto__ = e17574;
var statearr_17575_17678 = state_17561;
(statearr_17575_17678[(5)] = ex__15281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17679 = state_17561;
state_17561 = G__17679;
continue;
} else {
return ret_value__15279__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__ = function(state_17561){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____1.call(this,state_17561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__;
})()
;})(switch__15277__auto__,c__15444__auto___17671,jobs,results,process,async))
})();
var state__15446__auto__ = (function (){var statearr_17576 = f__15445__auto__.call(null);
(statearr_17576[(6)] = c__15444__auto___17671);

return statearr_17576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15446__auto__);
});})(c__15444__auto___17671,jobs,results,process,async))
);


var c__15444__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15444__auto__,jobs,results,process,async){
return (function (){
var f__15445__auto__ = (function (){var switch__15277__auto__ = ((function (c__15444__auto__,jobs,results,process,async){
return (function (state_17614){
var state_val_17615 = (state_17614[(1)]);
if((state_val_17615 === (7))){
var inst_17610 = (state_17614[(2)]);
var state_17614__$1 = state_17614;
var statearr_17616_17680 = state_17614__$1;
(statearr_17616_17680[(2)] = inst_17610);

(statearr_17616_17680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17615 === (20))){
var state_17614__$1 = state_17614;
var statearr_17617_17681 = state_17614__$1;
(statearr_17617_17681[(2)] = null);

(statearr_17617_17681[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17615 === (1))){
var state_17614__$1 = state_17614;
var statearr_17618_17682 = state_17614__$1;
(statearr_17618_17682[(2)] = null);

(statearr_17618_17682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17615 === (4))){
var inst_17579 = (state_17614[(7)]);
var inst_17579__$1 = (state_17614[(2)]);
var inst_17580 = (inst_17579__$1 == null);
var state_17614__$1 = (function (){var statearr_17619 = state_17614;
(statearr_17619[(7)] = inst_17579__$1);

return statearr_17619;
})();
if(cljs.core.truth_(inst_17580)){
var statearr_17620_17683 = state_17614__$1;
(statearr_17620_17683[(1)] = (5));

} else {
var statearr_17621_17684 = state_17614__$1;
(statearr_17621_17684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17615 === (15))){
var inst_17592 = (state_17614[(8)]);
var state_17614__$1 = state_17614;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17614__$1,(18),to,inst_17592);
} else {
if((state_val_17615 === (21))){
var inst_17605 = (state_17614[(2)]);
var state_17614__$1 = state_17614;
var statearr_17622_17685 = state_17614__$1;
(statearr_17622_17685[(2)] = inst_17605);

(statearr_17622_17685[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17615 === (13))){
var inst_17607 = (state_17614[(2)]);
var state_17614__$1 = (function (){var statearr_17623 = state_17614;
(statearr_17623[(9)] = inst_17607);

return statearr_17623;
})();
var statearr_17624_17686 = state_17614__$1;
(statearr_17624_17686[(2)] = null);

(statearr_17624_17686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17615 === (6))){
var inst_17579 = (state_17614[(7)]);
var state_17614__$1 = state_17614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17614__$1,(11),inst_17579);
} else {
if((state_val_17615 === (17))){
var inst_17600 = (state_17614[(2)]);
var state_17614__$1 = state_17614;
if(cljs.core.truth_(inst_17600)){
var statearr_17625_17687 = state_17614__$1;
(statearr_17625_17687[(1)] = (19));

} else {
var statearr_17626_17688 = state_17614__$1;
(statearr_17626_17688[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17615 === (3))){
var inst_17612 = (state_17614[(2)]);
var state_17614__$1 = state_17614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17614__$1,inst_17612);
} else {
if((state_val_17615 === (12))){
var inst_17589 = (state_17614[(10)]);
var state_17614__$1 = state_17614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17614__$1,(14),inst_17589);
} else {
if((state_val_17615 === (2))){
var state_17614__$1 = state_17614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17614__$1,(4),results);
} else {
if((state_val_17615 === (19))){
var state_17614__$1 = state_17614;
var statearr_17627_17689 = state_17614__$1;
(statearr_17627_17689[(2)] = null);

(statearr_17627_17689[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17615 === (11))){
var inst_17589 = (state_17614[(2)]);
var state_17614__$1 = (function (){var statearr_17628 = state_17614;
(statearr_17628[(10)] = inst_17589);

return statearr_17628;
})();
var statearr_17629_17690 = state_17614__$1;
(statearr_17629_17690[(2)] = null);

(statearr_17629_17690[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17615 === (9))){
var state_17614__$1 = state_17614;
var statearr_17630_17691 = state_17614__$1;
(statearr_17630_17691[(2)] = null);

(statearr_17630_17691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17615 === (5))){
var state_17614__$1 = state_17614;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17631_17692 = state_17614__$1;
(statearr_17631_17692[(1)] = (8));

} else {
var statearr_17632_17693 = state_17614__$1;
(statearr_17632_17693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17615 === (14))){
var inst_17594 = (state_17614[(11)]);
var inst_17592 = (state_17614[(8)]);
var inst_17592__$1 = (state_17614[(2)]);
var inst_17593 = (inst_17592__$1 == null);
var inst_17594__$1 = cljs.core.not.call(null,inst_17593);
var state_17614__$1 = (function (){var statearr_17633 = state_17614;
(statearr_17633[(11)] = inst_17594__$1);

(statearr_17633[(8)] = inst_17592__$1);

return statearr_17633;
})();
if(inst_17594__$1){
var statearr_17634_17694 = state_17614__$1;
(statearr_17634_17694[(1)] = (15));

} else {
var statearr_17635_17695 = state_17614__$1;
(statearr_17635_17695[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17615 === (16))){
var inst_17594 = (state_17614[(11)]);
var state_17614__$1 = state_17614;
var statearr_17636_17696 = state_17614__$1;
(statearr_17636_17696[(2)] = inst_17594);

(statearr_17636_17696[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17615 === (10))){
var inst_17586 = (state_17614[(2)]);
var state_17614__$1 = state_17614;
var statearr_17637_17697 = state_17614__$1;
(statearr_17637_17697[(2)] = inst_17586);

(statearr_17637_17697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17615 === (18))){
var inst_17597 = (state_17614[(2)]);
var state_17614__$1 = state_17614;
var statearr_17638_17698 = state_17614__$1;
(statearr_17638_17698[(2)] = inst_17597);

(statearr_17638_17698[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17615 === (8))){
var inst_17583 = cljs.core.async.close_BANG_.call(null,to);
var state_17614__$1 = state_17614;
var statearr_17639_17699 = state_17614__$1;
(statearr_17639_17699[(2)] = inst_17583);

(statearr_17639_17699[(1)] = (10));


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
});})(c__15444__auto__,jobs,results,process,async))
;
return ((function (switch__15277__auto__,c__15444__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____0 = (function (){
var statearr_17640 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17640[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__);

(statearr_17640[(1)] = (1));

return statearr_17640;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____1 = (function (state_17614){
while(true){
var ret_value__15279__auto__ = (function (){try{while(true){
var result__15280__auto__ = switch__15277__auto__.call(null,state_17614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15280__auto__;
}
break;
}
}catch (e17641){if((e17641 instanceof Object)){
var ex__15281__auto__ = e17641;
var statearr_17642_17700 = state_17614;
(statearr_17642_17700[(5)] = ex__15281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17701 = state_17614;
state_17614 = G__17701;
continue;
} else {
return ret_value__15279__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__ = function(state_17614){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____1.call(this,state_17614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15278__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15278__auto__;
})()
;})(switch__15277__auto__,c__15444__auto__,jobs,results,process,async))
})();
var state__15446__auto__ = (function (){var statearr_17643 = f__15445__auto__.call(null);
(statearr_17643[(6)] = c__15444__auto__);

return statearr_17643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15446__auto__);
});})(c__15444__auto__,jobs,results,process,async))
);

return c__15444__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__17703 = arguments.length;
switch (G__17703) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__17706 = arguments.length;
switch (G__17706) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__17709 = arguments.length;
switch (G__17709) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__15444__auto___17758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15444__auto___17758,tc,fc){
return (function (){
var f__15445__auto__ = (function (){var switch__15277__auto__ = ((function (c__15444__auto___17758,tc,fc){
return (function (state_17735){
var state_val_17736 = (state_17735[(1)]);
if((state_val_17736 === (7))){
var inst_17731 = (state_17735[(2)]);
var state_17735__$1 = state_17735;
var statearr_17737_17759 = state_17735__$1;
(statearr_17737_17759[(2)] = inst_17731);

(statearr_17737_17759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (1))){
var state_17735__$1 = state_17735;
var statearr_17738_17760 = state_17735__$1;
(statearr_17738_17760[(2)] = null);

(statearr_17738_17760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (4))){
var inst_17712 = (state_17735[(7)]);
var inst_17712__$1 = (state_17735[(2)]);
var inst_17713 = (inst_17712__$1 == null);
var state_17735__$1 = (function (){var statearr_17739 = state_17735;
(statearr_17739[(7)] = inst_17712__$1);

return statearr_17739;
})();
if(cljs.core.truth_(inst_17713)){
var statearr_17740_17761 = state_17735__$1;
(statearr_17740_17761[(1)] = (5));

} else {
var statearr_17741_17762 = state_17735__$1;
(statearr_17741_17762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (13))){
var state_17735__$1 = state_17735;
var statearr_17742_17763 = state_17735__$1;
(statearr_17742_17763[(2)] = null);

(statearr_17742_17763[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (6))){
var inst_17712 = (state_17735[(7)]);
var inst_17718 = p.call(null,inst_17712);
var state_17735__$1 = state_17735;
if(cljs.core.truth_(inst_17718)){
var statearr_17743_17764 = state_17735__$1;
(statearr_17743_17764[(1)] = (9));

} else {
var statearr_17744_17765 = state_17735__$1;
(statearr_17744_17765[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (3))){
var inst_17733 = (state_17735[(2)]);
var state_17735__$1 = state_17735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17735__$1,inst_17733);
} else {
if((state_val_17736 === (12))){
var state_17735__$1 = state_17735;
var statearr_17745_17766 = state_17735__$1;
(statearr_17745_17766[(2)] = null);

(statearr_17745_17766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (2))){
var state_17735__$1 = state_17735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17735__$1,(4),ch);
} else {
if((state_val_17736 === (11))){
var inst_17712 = (state_17735[(7)]);
var inst_17722 = (state_17735[(2)]);
var state_17735__$1 = state_17735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17735__$1,(8),inst_17722,inst_17712);
} else {
if((state_val_17736 === (9))){
var state_17735__$1 = state_17735;
var statearr_17746_17767 = state_17735__$1;
(statearr_17746_17767[(2)] = tc);

(statearr_17746_17767[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (5))){
var inst_17715 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17716 = cljs.core.async.close_BANG_.call(null,fc);
var state_17735__$1 = (function (){var statearr_17747 = state_17735;
(statearr_17747[(8)] = inst_17715);

return statearr_17747;
})();
var statearr_17748_17768 = state_17735__$1;
(statearr_17748_17768[(2)] = inst_17716);

(statearr_17748_17768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (14))){
var inst_17729 = (state_17735[(2)]);
var state_17735__$1 = state_17735;
var statearr_17749_17769 = state_17735__$1;
(statearr_17749_17769[(2)] = inst_17729);

(statearr_17749_17769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (10))){
var state_17735__$1 = state_17735;
var statearr_17750_17770 = state_17735__$1;
(statearr_17750_17770[(2)] = fc);

(statearr_17750_17770[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (8))){
var inst_17724 = (state_17735[(2)]);
var state_17735__$1 = state_17735;
if(cljs.core.truth_(inst_17724)){
var statearr_17751_17771 = state_17735__$1;
(statearr_17751_17771[(1)] = (12));

} else {
var statearr_17752_17772 = state_17735__$1;
(statearr_17752_17772[(1)] = (13));

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
});})(c__15444__auto___17758,tc,fc))
;
return ((function (switch__15277__auto__,c__15444__auto___17758,tc,fc){
return (function() {
var cljs$core$async$state_machine__15278__auto__ = null;
var cljs$core$async$state_machine__15278__auto____0 = (function (){
var statearr_17753 = [null,null,null,null,null,null,null,null,null];
(statearr_17753[(0)] = cljs$core$async$state_machine__15278__auto__);

(statearr_17753[(1)] = (1));

return statearr_17753;
});
var cljs$core$async$state_machine__15278__auto____1 = (function (state_17735){
while(true){
var ret_value__15279__auto__ = (function (){try{while(true){
var result__15280__auto__ = switch__15277__auto__.call(null,state_17735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15280__auto__;
}
break;
}
}catch (e17754){if((e17754 instanceof Object)){
var ex__15281__auto__ = e17754;
var statearr_17755_17773 = state_17735;
(statearr_17755_17773[(5)] = ex__15281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17774 = state_17735;
state_17735 = G__17774;
continue;
} else {
return ret_value__15279__auto__;
}
break;
}
});
cljs$core$async$state_machine__15278__auto__ = function(state_17735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15278__auto____1.call(this,state_17735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15278__auto____0;
cljs$core$async$state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15278__auto____1;
return cljs$core$async$state_machine__15278__auto__;
})()
;})(switch__15277__auto__,c__15444__auto___17758,tc,fc))
})();
var state__15446__auto__ = (function (){var statearr_17756 = f__15445__auto__.call(null);
(statearr_17756[(6)] = c__15444__auto___17758);

return statearr_17756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15446__auto__);
});})(c__15444__auto___17758,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15444__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15444__auto__){
return (function (){
var f__15445__auto__ = (function (){var switch__15277__auto__ = ((function (c__15444__auto__){
return (function (state_17795){
var state_val_17796 = (state_17795[(1)]);
if((state_val_17796 === (7))){
var inst_17791 = (state_17795[(2)]);
var state_17795__$1 = state_17795;
var statearr_17797_17815 = state_17795__$1;
(statearr_17797_17815[(2)] = inst_17791);

(statearr_17797_17815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17796 === (1))){
var inst_17775 = init;
var state_17795__$1 = (function (){var statearr_17798 = state_17795;
(statearr_17798[(7)] = inst_17775);

return statearr_17798;
})();
var statearr_17799_17816 = state_17795__$1;
(statearr_17799_17816[(2)] = null);

(statearr_17799_17816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17796 === (4))){
var inst_17778 = (state_17795[(8)]);
var inst_17778__$1 = (state_17795[(2)]);
var inst_17779 = (inst_17778__$1 == null);
var state_17795__$1 = (function (){var statearr_17800 = state_17795;
(statearr_17800[(8)] = inst_17778__$1);

return statearr_17800;
})();
if(cljs.core.truth_(inst_17779)){
var statearr_17801_17817 = state_17795__$1;
(statearr_17801_17817[(1)] = (5));

} else {
var statearr_17802_17818 = state_17795__$1;
(statearr_17802_17818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17796 === (6))){
var inst_17775 = (state_17795[(7)]);
var inst_17782 = (state_17795[(9)]);
var inst_17778 = (state_17795[(8)]);
var inst_17782__$1 = f.call(null,inst_17775,inst_17778);
var inst_17783 = cljs.core.reduced_QMARK_.call(null,inst_17782__$1);
var state_17795__$1 = (function (){var statearr_17803 = state_17795;
(statearr_17803[(9)] = inst_17782__$1);

return statearr_17803;
})();
if(inst_17783){
var statearr_17804_17819 = state_17795__$1;
(statearr_17804_17819[(1)] = (8));

} else {
var statearr_17805_17820 = state_17795__$1;
(statearr_17805_17820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17796 === (3))){
var inst_17793 = (state_17795[(2)]);
var state_17795__$1 = state_17795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17795__$1,inst_17793);
} else {
if((state_val_17796 === (2))){
var state_17795__$1 = state_17795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17795__$1,(4),ch);
} else {
if((state_val_17796 === (9))){
var inst_17782 = (state_17795[(9)]);
var inst_17775 = inst_17782;
var state_17795__$1 = (function (){var statearr_17806 = state_17795;
(statearr_17806[(7)] = inst_17775);

return statearr_17806;
})();
var statearr_17807_17821 = state_17795__$1;
(statearr_17807_17821[(2)] = null);

(statearr_17807_17821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17796 === (5))){
var inst_17775 = (state_17795[(7)]);
var state_17795__$1 = state_17795;
var statearr_17808_17822 = state_17795__$1;
(statearr_17808_17822[(2)] = inst_17775);

(statearr_17808_17822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17796 === (10))){
var inst_17789 = (state_17795[(2)]);
var state_17795__$1 = state_17795;
var statearr_17809_17823 = state_17795__$1;
(statearr_17809_17823[(2)] = inst_17789);

(statearr_17809_17823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17796 === (8))){
var inst_17782 = (state_17795[(9)]);
var inst_17785 = cljs.core.deref.call(null,inst_17782);
var state_17795__$1 = state_17795;
var statearr_17810_17824 = state_17795__$1;
(statearr_17810_17824[(2)] = inst_17785);

(statearr_17810_17824[(1)] = (10));


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
});})(c__15444__auto__))
;
return ((function (switch__15277__auto__,c__15444__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15278__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15278__auto____0 = (function (){
var statearr_17811 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17811[(0)] = cljs$core$async$reduce_$_state_machine__15278__auto__);

(statearr_17811[(1)] = (1));

return statearr_17811;
});
var cljs$core$async$reduce_$_state_machine__15278__auto____1 = (function (state_17795){
while(true){
var ret_value__15279__auto__ = (function (){try{while(true){
var result__15280__auto__ = switch__15277__auto__.call(null,state_17795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15280__auto__;
}
break;
}
}catch (e17812){if((e17812 instanceof Object)){
var ex__15281__auto__ = e17812;
var statearr_17813_17825 = state_17795;
(statearr_17813_17825[(5)] = ex__15281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17826 = state_17795;
state_17795 = G__17826;
continue;
} else {
return ret_value__15279__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15278__auto__ = function(state_17795){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15278__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15278__auto____1.call(this,state_17795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15278__auto____0;
cljs$core$async$reduce_$_state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15278__auto____1;
return cljs$core$async$reduce_$_state_machine__15278__auto__;
})()
;})(switch__15277__auto__,c__15444__auto__))
})();
var state__15446__auto__ = (function (){var statearr_17814 = f__15445__auto__.call(null);
(statearr_17814[(6)] = c__15444__auto__);

return statearr_17814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15446__auto__);
});})(c__15444__auto__))
);

return c__15444__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__15444__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15444__auto__,f__$1){
return (function (){
var f__15445__auto__ = (function (){var switch__15277__auto__ = ((function (c__15444__auto__,f__$1){
return (function (state_17832){
var state_val_17833 = (state_17832[(1)]);
if((state_val_17833 === (1))){
var inst_17827 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_17832__$1 = state_17832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17832__$1,(2),inst_17827);
} else {
if((state_val_17833 === (2))){
var inst_17829 = (state_17832[(2)]);
var inst_17830 = f__$1.call(null,inst_17829);
var state_17832__$1 = state_17832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17832__$1,inst_17830);
} else {
return null;
}
}
});})(c__15444__auto__,f__$1))
;
return ((function (switch__15277__auto__,c__15444__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15278__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15278__auto____0 = (function (){
var statearr_17834 = [null,null,null,null,null,null,null];
(statearr_17834[(0)] = cljs$core$async$transduce_$_state_machine__15278__auto__);

(statearr_17834[(1)] = (1));

return statearr_17834;
});
var cljs$core$async$transduce_$_state_machine__15278__auto____1 = (function (state_17832){
while(true){
var ret_value__15279__auto__ = (function (){try{while(true){
var result__15280__auto__ = switch__15277__auto__.call(null,state_17832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15280__auto__;
}
break;
}
}catch (e17835){if((e17835 instanceof Object)){
var ex__15281__auto__ = e17835;
var statearr_17836_17838 = state_17832;
(statearr_17836_17838[(5)] = ex__15281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17839 = state_17832;
state_17832 = G__17839;
continue;
} else {
return ret_value__15279__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15278__auto__ = function(state_17832){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15278__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15278__auto____1.call(this,state_17832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15278__auto____0;
cljs$core$async$transduce_$_state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15278__auto____1;
return cljs$core$async$transduce_$_state_machine__15278__auto__;
})()
;})(switch__15277__auto__,c__15444__auto__,f__$1))
})();
var state__15446__auto__ = (function (){var statearr_17837 = f__15445__auto__.call(null);
(statearr_17837[(6)] = c__15444__auto__);

return statearr_17837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15446__auto__);
});})(c__15444__auto__,f__$1))
);

return c__15444__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__17841 = arguments.length;
switch (G__17841) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15444__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15444__auto__){
return (function (){
var f__15445__auto__ = (function (){var switch__15277__auto__ = ((function (c__15444__auto__){
return (function (state_17866){
var state_val_17867 = (state_17866[(1)]);
if((state_val_17867 === (7))){
var inst_17848 = (state_17866[(2)]);
var state_17866__$1 = state_17866;
var statearr_17868_17889 = state_17866__$1;
(statearr_17868_17889[(2)] = inst_17848);

(statearr_17868_17889[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17867 === (1))){
var inst_17842 = cljs.core.seq.call(null,coll);
var inst_17843 = inst_17842;
var state_17866__$1 = (function (){var statearr_17869 = state_17866;
(statearr_17869[(7)] = inst_17843);

return statearr_17869;
})();
var statearr_17870_17890 = state_17866__$1;
(statearr_17870_17890[(2)] = null);

(statearr_17870_17890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17867 === (4))){
var inst_17843 = (state_17866[(7)]);
var inst_17846 = cljs.core.first.call(null,inst_17843);
var state_17866__$1 = state_17866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17866__$1,(7),ch,inst_17846);
} else {
if((state_val_17867 === (13))){
var inst_17860 = (state_17866[(2)]);
var state_17866__$1 = state_17866;
var statearr_17871_17891 = state_17866__$1;
(statearr_17871_17891[(2)] = inst_17860);

(statearr_17871_17891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17867 === (6))){
var inst_17851 = (state_17866[(2)]);
var state_17866__$1 = state_17866;
if(cljs.core.truth_(inst_17851)){
var statearr_17872_17892 = state_17866__$1;
(statearr_17872_17892[(1)] = (8));

} else {
var statearr_17873_17893 = state_17866__$1;
(statearr_17873_17893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17867 === (3))){
var inst_17864 = (state_17866[(2)]);
var state_17866__$1 = state_17866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17866__$1,inst_17864);
} else {
if((state_val_17867 === (12))){
var state_17866__$1 = state_17866;
var statearr_17874_17894 = state_17866__$1;
(statearr_17874_17894[(2)] = null);

(statearr_17874_17894[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17867 === (2))){
var inst_17843 = (state_17866[(7)]);
var state_17866__$1 = state_17866;
if(cljs.core.truth_(inst_17843)){
var statearr_17875_17895 = state_17866__$1;
(statearr_17875_17895[(1)] = (4));

} else {
var statearr_17876_17896 = state_17866__$1;
(statearr_17876_17896[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17867 === (11))){
var inst_17857 = cljs.core.async.close_BANG_.call(null,ch);
var state_17866__$1 = state_17866;
var statearr_17877_17897 = state_17866__$1;
(statearr_17877_17897[(2)] = inst_17857);

(statearr_17877_17897[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17867 === (9))){
var state_17866__$1 = state_17866;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17878_17898 = state_17866__$1;
(statearr_17878_17898[(1)] = (11));

} else {
var statearr_17879_17899 = state_17866__$1;
(statearr_17879_17899[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17867 === (5))){
var inst_17843 = (state_17866[(7)]);
var state_17866__$1 = state_17866;
var statearr_17880_17900 = state_17866__$1;
(statearr_17880_17900[(2)] = inst_17843);

(statearr_17880_17900[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17867 === (10))){
var inst_17862 = (state_17866[(2)]);
var state_17866__$1 = state_17866;
var statearr_17881_17901 = state_17866__$1;
(statearr_17881_17901[(2)] = inst_17862);

(statearr_17881_17901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17867 === (8))){
var inst_17843 = (state_17866[(7)]);
var inst_17853 = cljs.core.next.call(null,inst_17843);
var inst_17843__$1 = inst_17853;
var state_17866__$1 = (function (){var statearr_17882 = state_17866;
(statearr_17882[(7)] = inst_17843__$1);

return statearr_17882;
})();
var statearr_17883_17902 = state_17866__$1;
(statearr_17883_17902[(2)] = null);

(statearr_17883_17902[(1)] = (2));


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
});})(c__15444__auto__))
;
return ((function (switch__15277__auto__,c__15444__auto__){
return (function() {
var cljs$core$async$state_machine__15278__auto__ = null;
var cljs$core$async$state_machine__15278__auto____0 = (function (){
var statearr_17884 = [null,null,null,null,null,null,null,null];
(statearr_17884[(0)] = cljs$core$async$state_machine__15278__auto__);

(statearr_17884[(1)] = (1));

return statearr_17884;
});
var cljs$core$async$state_machine__15278__auto____1 = (function (state_17866){
while(true){
var ret_value__15279__auto__ = (function (){try{while(true){
var result__15280__auto__ = switch__15277__auto__.call(null,state_17866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15280__auto__;
}
break;
}
}catch (e17885){if((e17885 instanceof Object)){
var ex__15281__auto__ = e17885;
var statearr_17886_17903 = state_17866;
(statearr_17886_17903[(5)] = ex__15281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17904 = state_17866;
state_17866 = G__17904;
continue;
} else {
return ret_value__15279__auto__;
}
break;
}
});
cljs$core$async$state_machine__15278__auto__ = function(state_17866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15278__auto____1.call(this,state_17866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15278__auto____0;
cljs$core$async$state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15278__auto____1;
return cljs$core$async$state_machine__15278__auto__;
})()
;})(switch__15277__auto__,c__15444__auto__))
})();
var state__15446__auto__ = (function (){var statearr_17887 = f__15445__auto__.call(null);
(statearr_17887[(6)] = c__15444__auto__);

return statearr_17887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15446__auto__);
});})(c__15444__auto__))
);

return c__15444__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17905 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17905 = (function (ch,cs,meta17906){
this.ch = ch;
this.cs = cs;
this.meta17906 = meta17906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17907,meta17906__$1){
var self__ = this;
var _17907__$1 = this;
return (new cljs.core.async.t_cljs$core$async17905(self__.ch,self__.cs,meta17906__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async17905.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17907){
var self__ = this;
var _17907__$1 = this;
return self__.meta17906;
});})(cs))
;

cljs.core.async.t_cljs$core$async17905.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17905.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async17905.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17905.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17905.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17905.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17905.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17906","meta17906",1610320,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async17905.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17905.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17905";

cljs.core.async.t_cljs$core$async17905.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async17905");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17905.
 */
cljs.core.async.__GT_t_cljs$core$async17905 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async17905(ch__$1,cs__$1,meta17906){
return (new cljs.core.async.t_cljs$core$async17905(ch__$1,cs__$1,meta17906));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async17905(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__15444__auto___18127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15444__auto___18127,cs,m,dchan,dctr,done){
return (function (){
var f__15445__auto__ = (function (){var switch__15277__auto__ = ((function (c__15444__auto___18127,cs,m,dchan,dctr,done){
return (function (state_18042){
var state_val_18043 = (state_18042[(1)]);
if((state_val_18043 === (7))){
var inst_18038 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
var statearr_18044_18128 = state_18042__$1;
(statearr_18044_18128[(2)] = inst_18038);

(statearr_18044_18128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (20))){
var inst_17941 = (state_18042[(7)]);
var inst_17953 = cljs.core.first.call(null,inst_17941);
var inst_17954 = cljs.core.nth.call(null,inst_17953,(0),null);
var inst_17955 = cljs.core.nth.call(null,inst_17953,(1),null);
var state_18042__$1 = (function (){var statearr_18045 = state_18042;
(statearr_18045[(8)] = inst_17954);

return statearr_18045;
})();
if(cljs.core.truth_(inst_17955)){
var statearr_18046_18129 = state_18042__$1;
(statearr_18046_18129[(1)] = (22));

} else {
var statearr_18047_18130 = state_18042__$1;
(statearr_18047_18130[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (27))){
var inst_17910 = (state_18042[(9)]);
var inst_17990 = (state_18042[(10)]);
var inst_17983 = (state_18042[(11)]);
var inst_17985 = (state_18042[(12)]);
var inst_17990__$1 = cljs.core._nth.call(null,inst_17983,inst_17985);
var inst_17991 = cljs.core.async.put_BANG_.call(null,inst_17990__$1,inst_17910,done);
var state_18042__$1 = (function (){var statearr_18048 = state_18042;
(statearr_18048[(10)] = inst_17990__$1);

return statearr_18048;
})();
if(cljs.core.truth_(inst_17991)){
var statearr_18049_18131 = state_18042__$1;
(statearr_18049_18131[(1)] = (30));

} else {
var statearr_18050_18132 = state_18042__$1;
(statearr_18050_18132[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (1))){
var state_18042__$1 = state_18042;
var statearr_18051_18133 = state_18042__$1;
(statearr_18051_18133[(2)] = null);

(statearr_18051_18133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (24))){
var inst_17941 = (state_18042[(7)]);
var inst_17960 = (state_18042[(2)]);
var inst_17961 = cljs.core.next.call(null,inst_17941);
var inst_17919 = inst_17961;
var inst_17920 = null;
var inst_17921 = (0);
var inst_17922 = (0);
var state_18042__$1 = (function (){var statearr_18052 = state_18042;
(statearr_18052[(13)] = inst_17921);

(statearr_18052[(14)] = inst_17920);

(statearr_18052[(15)] = inst_17919);

(statearr_18052[(16)] = inst_17922);

(statearr_18052[(17)] = inst_17960);

return statearr_18052;
})();
var statearr_18053_18134 = state_18042__$1;
(statearr_18053_18134[(2)] = null);

(statearr_18053_18134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (39))){
var state_18042__$1 = state_18042;
var statearr_18057_18135 = state_18042__$1;
(statearr_18057_18135[(2)] = null);

(statearr_18057_18135[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (4))){
var inst_17910 = (state_18042[(9)]);
var inst_17910__$1 = (state_18042[(2)]);
var inst_17911 = (inst_17910__$1 == null);
var state_18042__$1 = (function (){var statearr_18058 = state_18042;
(statearr_18058[(9)] = inst_17910__$1);

return statearr_18058;
})();
if(cljs.core.truth_(inst_17911)){
var statearr_18059_18136 = state_18042__$1;
(statearr_18059_18136[(1)] = (5));

} else {
var statearr_18060_18137 = state_18042__$1;
(statearr_18060_18137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (15))){
var inst_17921 = (state_18042[(13)]);
var inst_17920 = (state_18042[(14)]);
var inst_17919 = (state_18042[(15)]);
var inst_17922 = (state_18042[(16)]);
var inst_17937 = (state_18042[(2)]);
var inst_17938 = (inst_17922 + (1));
var tmp18054 = inst_17921;
var tmp18055 = inst_17920;
var tmp18056 = inst_17919;
var inst_17919__$1 = tmp18056;
var inst_17920__$1 = tmp18055;
var inst_17921__$1 = tmp18054;
var inst_17922__$1 = inst_17938;
var state_18042__$1 = (function (){var statearr_18061 = state_18042;
(statearr_18061[(13)] = inst_17921__$1);

(statearr_18061[(18)] = inst_17937);

(statearr_18061[(14)] = inst_17920__$1);

(statearr_18061[(15)] = inst_17919__$1);

(statearr_18061[(16)] = inst_17922__$1);

return statearr_18061;
})();
var statearr_18062_18138 = state_18042__$1;
(statearr_18062_18138[(2)] = null);

(statearr_18062_18138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (21))){
var inst_17964 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
var statearr_18066_18139 = state_18042__$1;
(statearr_18066_18139[(2)] = inst_17964);

(statearr_18066_18139[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (31))){
var inst_17990 = (state_18042[(10)]);
var inst_17994 = done.call(null,null);
var inst_17995 = cljs.core.async.untap_STAR_.call(null,m,inst_17990);
var state_18042__$1 = (function (){var statearr_18067 = state_18042;
(statearr_18067[(19)] = inst_17994);

return statearr_18067;
})();
var statearr_18068_18140 = state_18042__$1;
(statearr_18068_18140[(2)] = inst_17995);

(statearr_18068_18140[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (32))){
var inst_17984 = (state_18042[(20)]);
var inst_17982 = (state_18042[(21)]);
var inst_17983 = (state_18042[(11)]);
var inst_17985 = (state_18042[(12)]);
var inst_17997 = (state_18042[(2)]);
var inst_17998 = (inst_17985 + (1));
var tmp18063 = inst_17984;
var tmp18064 = inst_17982;
var tmp18065 = inst_17983;
var inst_17982__$1 = tmp18064;
var inst_17983__$1 = tmp18065;
var inst_17984__$1 = tmp18063;
var inst_17985__$1 = inst_17998;
var state_18042__$1 = (function (){var statearr_18069 = state_18042;
(statearr_18069[(22)] = inst_17997);

(statearr_18069[(20)] = inst_17984__$1);

(statearr_18069[(21)] = inst_17982__$1);

(statearr_18069[(11)] = inst_17983__$1);

(statearr_18069[(12)] = inst_17985__$1);

return statearr_18069;
})();
var statearr_18070_18141 = state_18042__$1;
(statearr_18070_18141[(2)] = null);

(statearr_18070_18141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (40))){
var inst_18010 = (state_18042[(23)]);
var inst_18014 = done.call(null,null);
var inst_18015 = cljs.core.async.untap_STAR_.call(null,m,inst_18010);
var state_18042__$1 = (function (){var statearr_18071 = state_18042;
(statearr_18071[(24)] = inst_18014);

return statearr_18071;
})();
var statearr_18072_18142 = state_18042__$1;
(statearr_18072_18142[(2)] = inst_18015);

(statearr_18072_18142[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (33))){
var inst_18001 = (state_18042[(25)]);
var inst_18003 = cljs.core.chunked_seq_QMARK_.call(null,inst_18001);
var state_18042__$1 = state_18042;
if(inst_18003){
var statearr_18073_18143 = state_18042__$1;
(statearr_18073_18143[(1)] = (36));

} else {
var statearr_18074_18144 = state_18042__$1;
(statearr_18074_18144[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (13))){
var inst_17931 = (state_18042[(26)]);
var inst_17934 = cljs.core.async.close_BANG_.call(null,inst_17931);
var state_18042__$1 = state_18042;
var statearr_18075_18145 = state_18042__$1;
(statearr_18075_18145[(2)] = inst_17934);

(statearr_18075_18145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (22))){
var inst_17954 = (state_18042[(8)]);
var inst_17957 = cljs.core.async.close_BANG_.call(null,inst_17954);
var state_18042__$1 = state_18042;
var statearr_18076_18146 = state_18042__$1;
(statearr_18076_18146[(2)] = inst_17957);

(statearr_18076_18146[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (36))){
var inst_18001 = (state_18042[(25)]);
var inst_18005 = cljs.core.chunk_first.call(null,inst_18001);
var inst_18006 = cljs.core.chunk_rest.call(null,inst_18001);
var inst_18007 = cljs.core.count.call(null,inst_18005);
var inst_17982 = inst_18006;
var inst_17983 = inst_18005;
var inst_17984 = inst_18007;
var inst_17985 = (0);
var state_18042__$1 = (function (){var statearr_18077 = state_18042;
(statearr_18077[(20)] = inst_17984);

(statearr_18077[(21)] = inst_17982);

(statearr_18077[(11)] = inst_17983);

(statearr_18077[(12)] = inst_17985);

return statearr_18077;
})();
var statearr_18078_18147 = state_18042__$1;
(statearr_18078_18147[(2)] = null);

(statearr_18078_18147[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (41))){
var inst_18001 = (state_18042[(25)]);
var inst_18017 = (state_18042[(2)]);
var inst_18018 = cljs.core.next.call(null,inst_18001);
var inst_17982 = inst_18018;
var inst_17983 = null;
var inst_17984 = (0);
var inst_17985 = (0);
var state_18042__$1 = (function (){var statearr_18079 = state_18042;
(statearr_18079[(27)] = inst_18017);

(statearr_18079[(20)] = inst_17984);

(statearr_18079[(21)] = inst_17982);

(statearr_18079[(11)] = inst_17983);

(statearr_18079[(12)] = inst_17985);

return statearr_18079;
})();
var statearr_18080_18148 = state_18042__$1;
(statearr_18080_18148[(2)] = null);

(statearr_18080_18148[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (43))){
var state_18042__$1 = state_18042;
var statearr_18081_18149 = state_18042__$1;
(statearr_18081_18149[(2)] = null);

(statearr_18081_18149[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (29))){
var inst_18026 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
var statearr_18082_18150 = state_18042__$1;
(statearr_18082_18150[(2)] = inst_18026);

(statearr_18082_18150[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (44))){
var inst_18035 = (state_18042[(2)]);
var state_18042__$1 = (function (){var statearr_18083 = state_18042;
(statearr_18083[(28)] = inst_18035);

return statearr_18083;
})();
var statearr_18084_18151 = state_18042__$1;
(statearr_18084_18151[(2)] = null);

(statearr_18084_18151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (6))){
var inst_17974 = (state_18042[(29)]);
var inst_17973 = cljs.core.deref.call(null,cs);
var inst_17974__$1 = cljs.core.keys.call(null,inst_17973);
var inst_17975 = cljs.core.count.call(null,inst_17974__$1);
var inst_17976 = cljs.core.reset_BANG_.call(null,dctr,inst_17975);
var inst_17981 = cljs.core.seq.call(null,inst_17974__$1);
var inst_17982 = inst_17981;
var inst_17983 = null;
var inst_17984 = (0);
var inst_17985 = (0);
var state_18042__$1 = (function (){var statearr_18085 = state_18042;
(statearr_18085[(29)] = inst_17974__$1);

(statearr_18085[(20)] = inst_17984);

(statearr_18085[(21)] = inst_17982);

(statearr_18085[(11)] = inst_17983);

(statearr_18085[(12)] = inst_17985);

(statearr_18085[(30)] = inst_17976);

return statearr_18085;
})();
var statearr_18086_18152 = state_18042__$1;
(statearr_18086_18152[(2)] = null);

(statearr_18086_18152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (28))){
var inst_18001 = (state_18042[(25)]);
var inst_17982 = (state_18042[(21)]);
var inst_18001__$1 = cljs.core.seq.call(null,inst_17982);
var state_18042__$1 = (function (){var statearr_18087 = state_18042;
(statearr_18087[(25)] = inst_18001__$1);

return statearr_18087;
})();
if(inst_18001__$1){
var statearr_18088_18153 = state_18042__$1;
(statearr_18088_18153[(1)] = (33));

} else {
var statearr_18089_18154 = state_18042__$1;
(statearr_18089_18154[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (25))){
var inst_17984 = (state_18042[(20)]);
var inst_17985 = (state_18042[(12)]);
var inst_17987 = (inst_17985 < inst_17984);
var inst_17988 = inst_17987;
var state_18042__$1 = state_18042;
if(cljs.core.truth_(inst_17988)){
var statearr_18090_18155 = state_18042__$1;
(statearr_18090_18155[(1)] = (27));

} else {
var statearr_18091_18156 = state_18042__$1;
(statearr_18091_18156[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (34))){
var state_18042__$1 = state_18042;
var statearr_18092_18157 = state_18042__$1;
(statearr_18092_18157[(2)] = null);

(statearr_18092_18157[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (17))){
var state_18042__$1 = state_18042;
var statearr_18093_18158 = state_18042__$1;
(statearr_18093_18158[(2)] = null);

(statearr_18093_18158[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (3))){
var inst_18040 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18042__$1,inst_18040);
} else {
if((state_val_18043 === (12))){
var inst_17969 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
var statearr_18094_18159 = state_18042__$1;
(statearr_18094_18159[(2)] = inst_17969);

(statearr_18094_18159[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (2))){
var state_18042__$1 = state_18042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18042__$1,(4),ch);
} else {
if((state_val_18043 === (23))){
var state_18042__$1 = state_18042;
var statearr_18095_18160 = state_18042__$1;
(statearr_18095_18160[(2)] = null);

(statearr_18095_18160[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (35))){
var inst_18024 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
var statearr_18096_18161 = state_18042__$1;
(statearr_18096_18161[(2)] = inst_18024);

(statearr_18096_18161[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (19))){
var inst_17941 = (state_18042[(7)]);
var inst_17945 = cljs.core.chunk_first.call(null,inst_17941);
var inst_17946 = cljs.core.chunk_rest.call(null,inst_17941);
var inst_17947 = cljs.core.count.call(null,inst_17945);
var inst_17919 = inst_17946;
var inst_17920 = inst_17945;
var inst_17921 = inst_17947;
var inst_17922 = (0);
var state_18042__$1 = (function (){var statearr_18097 = state_18042;
(statearr_18097[(13)] = inst_17921);

(statearr_18097[(14)] = inst_17920);

(statearr_18097[(15)] = inst_17919);

(statearr_18097[(16)] = inst_17922);

return statearr_18097;
})();
var statearr_18098_18162 = state_18042__$1;
(statearr_18098_18162[(2)] = null);

(statearr_18098_18162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (11))){
var inst_17941 = (state_18042[(7)]);
var inst_17919 = (state_18042[(15)]);
var inst_17941__$1 = cljs.core.seq.call(null,inst_17919);
var state_18042__$1 = (function (){var statearr_18099 = state_18042;
(statearr_18099[(7)] = inst_17941__$1);

return statearr_18099;
})();
if(inst_17941__$1){
var statearr_18100_18163 = state_18042__$1;
(statearr_18100_18163[(1)] = (16));

} else {
var statearr_18101_18164 = state_18042__$1;
(statearr_18101_18164[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (9))){
var inst_17971 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
var statearr_18102_18165 = state_18042__$1;
(statearr_18102_18165[(2)] = inst_17971);

(statearr_18102_18165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (5))){
var inst_17917 = cljs.core.deref.call(null,cs);
var inst_17918 = cljs.core.seq.call(null,inst_17917);
var inst_17919 = inst_17918;
var inst_17920 = null;
var inst_17921 = (0);
var inst_17922 = (0);
var state_18042__$1 = (function (){var statearr_18103 = state_18042;
(statearr_18103[(13)] = inst_17921);

(statearr_18103[(14)] = inst_17920);

(statearr_18103[(15)] = inst_17919);

(statearr_18103[(16)] = inst_17922);

return statearr_18103;
})();
var statearr_18104_18166 = state_18042__$1;
(statearr_18104_18166[(2)] = null);

(statearr_18104_18166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (14))){
var state_18042__$1 = state_18042;
var statearr_18105_18167 = state_18042__$1;
(statearr_18105_18167[(2)] = null);

(statearr_18105_18167[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (45))){
var inst_18032 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
var statearr_18106_18168 = state_18042__$1;
(statearr_18106_18168[(2)] = inst_18032);

(statearr_18106_18168[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (26))){
var inst_17974 = (state_18042[(29)]);
var inst_18028 = (state_18042[(2)]);
var inst_18029 = cljs.core.seq.call(null,inst_17974);
var state_18042__$1 = (function (){var statearr_18107 = state_18042;
(statearr_18107[(31)] = inst_18028);

return statearr_18107;
})();
if(inst_18029){
var statearr_18108_18169 = state_18042__$1;
(statearr_18108_18169[(1)] = (42));

} else {
var statearr_18109_18170 = state_18042__$1;
(statearr_18109_18170[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (16))){
var inst_17941 = (state_18042[(7)]);
var inst_17943 = cljs.core.chunked_seq_QMARK_.call(null,inst_17941);
var state_18042__$1 = state_18042;
if(inst_17943){
var statearr_18110_18171 = state_18042__$1;
(statearr_18110_18171[(1)] = (19));

} else {
var statearr_18111_18172 = state_18042__$1;
(statearr_18111_18172[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (38))){
var inst_18021 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
var statearr_18112_18173 = state_18042__$1;
(statearr_18112_18173[(2)] = inst_18021);

(statearr_18112_18173[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (30))){
var state_18042__$1 = state_18042;
var statearr_18113_18174 = state_18042__$1;
(statearr_18113_18174[(2)] = null);

(statearr_18113_18174[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (10))){
var inst_17920 = (state_18042[(14)]);
var inst_17922 = (state_18042[(16)]);
var inst_17930 = cljs.core._nth.call(null,inst_17920,inst_17922);
var inst_17931 = cljs.core.nth.call(null,inst_17930,(0),null);
var inst_17932 = cljs.core.nth.call(null,inst_17930,(1),null);
var state_18042__$1 = (function (){var statearr_18114 = state_18042;
(statearr_18114[(26)] = inst_17931);

return statearr_18114;
})();
if(cljs.core.truth_(inst_17932)){
var statearr_18115_18175 = state_18042__$1;
(statearr_18115_18175[(1)] = (13));

} else {
var statearr_18116_18176 = state_18042__$1;
(statearr_18116_18176[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (18))){
var inst_17967 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
var statearr_18117_18177 = state_18042__$1;
(statearr_18117_18177[(2)] = inst_17967);

(statearr_18117_18177[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (42))){
var state_18042__$1 = state_18042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18042__$1,(45),dchan);
} else {
if((state_val_18043 === (37))){
var inst_18001 = (state_18042[(25)]);
var inst_17910 = (state_18042[(9)]);
var inst_18010 = (state_18042[(23)]);
var inst_18010__$1 = cljs.core.first.call(null,inst_18001);
var inst_18011 = cljs.core.async.put_BANG_.call(null,inst_18010__$1,inst_17910,done);
var state_18042__$1 = (function (){var statearr_18118 = state_18042;
(statearr_18118[(23)] = inst_18010__$1);

return statearr_18118;
})();
if(cljs.core.truth_(inst_18011)){
var statearr_18119_18178 = state_18042__$1;
(statearr_18119_18178[(1)] = (39));

} else {
var statearr_18120_18179 = state_18042__$1;
(statearr_18120_18179[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (8))){
var inst_17921 = (state_18042[(13)]);
var inst_17922 = (state_18042[(16)]);
var inst_17924 = (inst_17922 < inst_17921);
var inst_17925 = inst_17924;
var state_18042__$1 = state_18042;
if(cljs.core.truth_(inst_17925)){
var statearr_18121_18180 = state_18042__$1;
(statearr_18121_18180[(1)] = (10));

} else {
var statearr_18122_18181 = state_18042__$1;
(statearr_18122_18181[(1)] = (11));

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
});})(c__15444__auto___18127,cs,m,dchan,dctr,done))
;
return ((function (switch__15277__auto__,c__15444__auto___18127,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15278__auto__ = null;
var cljs$core$async$mult_$_state_machine__15278__auto____0 = (function (){
var statearr_18123 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18123[(0)] = cljs$core$async$mult_$_state_machine__15278__auto__);

(statearr_18123[(1)] = (1));

return statearr_18123;
});
var cljs$core$async$mult_$_state_machine__15278__auto____1 = (function (state_18042){
while(true){
var ret_value__15279__auto__ = (function (){try{while(true){
var result__15280__auto__ = switch__15277__auto__.call(null,state_18042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15280__auto__;
}
break;
}
}catch (e18124){if((e18124 instanceof Object)){
var ex__15281__auto__ = e18124;
var statearr_18125_18182 = state_18042;
(statearr_18125_18182[(5)] = ex__15281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18183 = state_18042;
state_18042 = G__18183;
continue;
} else {
return ret_value__15279__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15278__auto__ = function(state_18042){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15278__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15278__auto____1.call(this,state_18042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15278__auto____0;
cljs$core$async$mult_$_state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15278__auto____1;
return cljs$core$async$mult_$_state_machine__15278__auto__;
})()
;})(switch__15277__auto__,c__15444__auto___18127,cs,m,dchan,dctr,done))
})();
var state__15446__auto__ = (function (){var statearr_18126 = f__15445__auto__.call(null);
(statearr_18126[(6)] = c__15444__auto___18127);

return statearr_18126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15446__auto__);
});})(c__15444__auto___18127,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18185 = arguments.length;
switch (G__18185) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

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

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___18197 = arguments.length;
var i__4642__auto___18198 = (0);
while(true){
if((i__4642__auto___18198 < len__4641__auto___18197)){
args__4647__auto__.push((arguments[i__4642__auto___18198]));

var G__18199 = (i__4642__auto___18198 + (1));
i__4642__auto___18198 = G__18199;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18191){
var map__18192 = p__18191;
var map__18192__$1 = (((((!((map__18192 == null))))?(((((map__18192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18192):map__18192);
var opts = map__18192__$1;
var statearr_18194_18200 = state;
(statearr_18194_18200[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__18192,map__18192__$1,opts){
return (function (val){
var statearr_18195_18201 = state;
(statearr_18195_18201[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18192,map__18192__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_18196_18202 = state;
(statearr_18196_18202[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18187){
var G__18188 = cljs.core.first.call(null,seq18187);
var seq18187__$1 = cljs.core.next.call(null,seq18187);
var G__18189 = cljs.core.first.call(null,seq18187__$1);
var seq18187__$2 = cljs.core.next.call(null,seq18187__$1);
var G__18190 = cljs.core.first.call(null,seq18187__$2);
var seq18187__$3 = cljs.core.next.call(null,seq18187__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18188,G__18189,G__18190,seq18187__$3);
});

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
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18203 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18203 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18204){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18204 = meta18204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18205,meta18204__$1){
var self__ = this;
var _18205__$1 = this;
return (new cljs.core.async.t_cljs$core$async18203(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18204__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18203.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18205){
var self__ = this;
var _18205__$1 = this;
return self__.meta18204;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18203.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18203.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18203.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18203.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18203.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18203.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18203.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18203.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18203.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18204","meta18204",-2137294410,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18203.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18203";

cljs.core.async.t_cljs$core$async18203.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async18203");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18203.
 */
cljs.core.async.__GT_t_cljs$core$async18203 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18203(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18204){
return (new cljs.core.async.t_cljs$core$async18203(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18204));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18203(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15444__auto___18367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15444__auto___18367,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15445__auto__ = (function (){var switch__15277__auto__ = ((function (c__15444__auto___18367,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18307){
var state_val_18308 = (state_18307[(1)]);
if((state_val_18308 === (7))){
var inst_18222 = (state_18307[(2)]);
var state_18307__$1 = state_18307;
var statearr_18309_18368 = state_18307__$1;
(statearr_18309_18368[(2)] = inst_18222);

(statearr_18309_18368[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (20))){
var inst_18234 = (state_18307[(7)]);
var state_18307__$1 = state_18307;
var statearr_18310_18369 = state_18307__$1;
(statearr_18310_18369[(2)] = inst_18234);

(statearr_18310_18369[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (27))){
var state_18307__$1 = state_18307;
var statearr_18311_18370 = state_18307__$1;
(statearr_18311_18370[(2)] = null);

(statearr_18311_18370[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (1))){
var inst_18209 = (state_18307[(8)]);
var inst_18209__$1 = calc_state.call(null);
var inst_18211 = (inst_18209__$1 == null);
var inst_18212 = cljs.core.not.call(null,inst_18211);
var state_18307__$1 = (function (){var statearr_18312 = state_18307;
(statearr_18312[(8)] = inst_18209__$1);

return statearr_18312;
})();
if(inst_18212){
var statearr_18313_18371 = state_18307__$1;
(statearr_18313_18371[(1)] = (2));

} else {
var statearr_18314_18372 = state_18307__$1;
(statearr_18314_18372[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (24))){
var inst_18281 = (state_18307[(9)]);
var inst_18258 = (state_18307[(10)]);
var inst_18267 = (state_18307[(11)]);
var inst_18281__$1 = inst_18258.call(null,inst_18267);
var state_18307__$1 = (function (){var statearr_18315 = state_18307;
(statearr_18315[(9)] = inst_18281__$1);

return statearr_18315;
})();
if(cljs.core.truth_(inst_18281__$1)){
var statearr_18316_18373 = state_18307__$1;
(statearr_18316_18373[(1)] = (29));

} else {
var statearr_18317_18374 = state_18307__$1;
(statearr_18317_18374[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (4))){
var inst_18225 = (state_18307[(2)]);
var state_18307__$1 = state_18307;
if(cljs.core.truth_(inst_18225)){
var statearr_18318_18375 = state_18307__$1;
(statearr_18318_18375[(1)] = (8));

} else {
var statearr_18319_18376 = state_18307__$1;
(statearr_18319_18376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (15))){
var inst_18252 = (state_18307[(2)]);
var state_18307__$1 = state_18307;
if(cljs.core.truth_(inst_18252)){
var statearr_18320_18377 = state_18307__$1;
(statearr_18320_18377[(1)] = (19));

} else {
var statearr_18321_18378 = state_18307__$1;
(statearr_18321_18378[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (21))){
var inst_18257 = (state_18307[(12)]);
var inst_18257__$1 = (state_18307[(2)]);
var inst_18258 = cljs.core.get.call(null,inst_18257__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18259 = cljs.core.get.call(null,inst_18257__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18260 = cljs.core.get.call(null,inst_18257__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18307__$1 = (function (){var statearr_18322 = state_18307;
(statearr_18322[(10)] = inst_18258);

(statearr_18322[(13)] = inst_18259);

(statearr_18322[(12)] = inst_18257__$1);

return statearr_18322;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18307__$1,(22),inst_18260);
} else {
if((state_val_18308 === (31))){
var inst_18289 = (state_18307[(2)]);
var state_18307__$1 = state_18307;
if(cljs.core.truth_(inst_18289)){
var statearr_18323_18379 = state_18307__$1;
(statearr_18323_18379[(1)] = (32));

} else {
var statearr_18324_18380 = state_18307__$1;
(statearr_18324_18380[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (32))){
var inst_18266 = (state_18307[(14)]);
var state_18307__$1 = state_18307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18307__$1,(35),out,inst_18266);
} else {
if((state_val_18308 === (33))){
var inst_18257 = (state_18307[(12)]);
var inst_18234 = inst_18257;
var state_18307__$1 = (function (){var statearr_18325 = state_18307;
(statearr_18325[(7)] = inst_18234);

return statearr_18325;
})();
var statearr_18326_18381 = state_18307__$1;
(statearr_18326_18381[(2)] = null);

(statearr_18326_18381[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (13))){
var inst_18234 = (state_18307[(7)]);
var inst_18241 = inst_18234.cljs$lang$protocol_mask$partition0$;
var inst_18242 = (inst_18241 & (64));
var inst_18243 = inst_18234.cljs$core$ISeq$;
var inst_18244 = (cljs.core.PROTOCOL_SENTINEL === inst_18243);
var inst_18245 = ((inst_18242) || (inst_18244));
var state_18307__$1 = state_18307;
if(cljs.core.truth_(inst_18245)){
var statearr_18327_18382 = state_18307__$1;
(statearr_18327_18382[(1)] = (16));

} else {
var statearr_18328_18383 = state_18307__$1;
(statearr_18328_18383[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (22))){
var inst_18266 = (state_18307[(14)]);
var inst_18267 = (state_18307[(11)]);
var inst_18265 = (state_18307[(2)]);
var inst_18266__$1 = cljs.core.nth.call(null,inst_18265,(0),null);
var inst_18267__$1 = cljs.core.nth.call(null,inst_18265,(1),null);
var inst_18268 = (inst_18266__$1 == null);
var inst_18269 = cljs.core._EQ_.call(null,inst_18267__$1,change);
var inst_18270 = ((inst_18268) || (inst_18269));
var state_18307__$1 = (function (){var statearr_18329 = state_18307;
(statearr_18329[(14)] = inst_18266__$1);

(statearr_18329[(11)] = inst_18267__$1);

return statearr_18329;
})();
if(cljs.core.truth_(inst_18270)){
var statearr_18330_18384 = state_18307__$1;
(statearr_18330_18384[(1)] = (23));

} else {
var statearr_18331_18385 = state_18307__$1;
(statearr_18331_18385[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (36))){
var inst_18257 = (state_18307[(12)]);
var inst_18234 = inst_18257;
var state_18307__$1 = (function (){var statearr_18332 = state_18307;
(statearr_18332[(7)] = inst_18234);

return statearr_18332;
})();
var statearr_18333_18386 = state_18307__$1;
(statearr_18333_18386[(2)] = null);

(statearr_18333_18386[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (29))){
var inst_18281 = (state_18307[(9)]);
var state_18307__$1 = state_18307;
var statearr_18334_18387 = state_18307__$1;
(statearr_18334_18387[(2)] = inst_18281);

(statearr_18334_18387[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (6))){
var state_18307__$1 = state_18307;
var statearr_18335_18388 = state_18307__$1;
(statearr_18335_18388[(2)] = false);

(statearr_18335_18388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (28))){
var inst_18277 = (state_18307[(2)]);
var inst_18278 = calc_state.call(null);
var inst_18234 = inst_18278;
var state_18307__$1 = (function (){var statearr_18336 = state_18307;
(statearr_18336[(15)] = inst_18277);

(statearr_18336[(7)] = inst_18234);

return statearr_18336;
})();
var statearr_18337_18389 = state_18307__$1;
(statearr_18337_18389[(2)] = null);

(statearr_18337_18389[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (25))){
var inst_18303 = (state_18307[(2)]);
var state_18307__$1 = state_18307;
var statearr_18338_18390 = state_18307__$1;
(statearr_18338_18390[(2)] = inst_18303);

(statearr_18338_18390[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (34))){
var inst_18301 = (state_18307[(2)]);
var state_18307__$1 = state_18307;
var statearr_18339_18391 = state_18307__$1;
(statearr_18339_18391[(2)] = inst_18301);

(statearr_18339_18391[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (17))){
var state_18307__$1 = state_18307;
var statearr_18340_18392 = state_18307__$1;
(statearr_18340_18392[(2)] = false);

(statearr_18340_18392[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (3))){
var state_18307__$1 = state_18307;
var statearr_18341_18393 = state_18307__$1;
(statearr_18341_18393[(2)] = false);

(statearr_18341_18393[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (12))){
var inst_18305 = (state_18307[(2)]);
var state_18307__$1 = state_18307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18307__$1,inst_18305);
} else {
if((state_val_18308 === (2))){
var inst_18209 = (state_18307[(8)]);
var inst_18214 = inst_18209.cljs$lang$protocol_mask$partition0$;
var inst_18215 = (inst_18214 & (64));
var inst_18216 = inst_18209.cljs$core$ISeq$;
var inst_18217 = (cljs.core.PROTOCOL_SENTINEL === inst_18216);
var inst_18218 = ((inst_18215) || (inst_18217));
var state_18307__$1 = state_18307;
if(cljs.core.truth_(inst_18218)){
var statearr_18342_18394 = state_18307__$1;
(statearr_18342_18394[(1)] = (5));

} else {
var statearr_18343_18395 = state_18307__$1;
(statearr_18343_18395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (23))){
var inst_18266 = (state_18307[(14)]);
var inst_18272 = (inst_18266 == null);
var state_18307__$1 = state_18307;
if(cljs.core.truth_(inst_18272)){
var statearr_18344_18396 = state_18307__$1;
(statearr_18344_18396[(1)] = (26));

} else {
var statearr_18345_18397 = state_18307__$1;
(statearr_18345_18397[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (35))){
var inst_18292 = (state_18307[(2)]);
var state_18307__$1 = state_18307;
if(cljs.core.truth_(inst_18292)){
var statearr_18346_18398 = state_18307__$1;
(statearr_18346_18398[(1)] = (36));

} else {
var statearr_18347_18399 = state_18307__$1;
(statearr_18347_18399[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (19))){
var inst_18234 = (state_18307[(7)]);
var inst_18254 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18234);
var state_18307__$1 = state_18307;
var statearr_18348_18400 = state_18307__$1;
(statearr_18348_18400[(2)] = inst_18254);

(statearr_18348_18400[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (11))){
var inst_18234 = (state_18307[(7)]);
var inst_18238 = (inst_18234 == null);
var inst_18239 = cljs.core.not.call(null,inst_18238);
var state_18307__$1 = state_18307;
if(inst_18239){
var statearr_18349_18401 = state_18307__$1;
(statearr_18349_18401[(1)] = (13));

} else {
var statearr_18350_18402 = state_18307__$1;
(statearr_18350_18402[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (9))){
var inst_18209 = (state_18307[(8)]);
var state_18307__$1 = state_18307;
var statearr_18351_18403 = state_18307__$1;
(statearr_18351_18403[(2)] = inst_18209);

(statearr_18351_18403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (5))){
var state_18307__$1 = state_18307;
var statearr_18352_18404 = state_18307__$1;
(statearr_18352_18404[(2)] = true);

(statearr_18352_18404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (14))){
var state_18307__$1 = state_18307;
var statearr_18353_18405 = state_18307__$1;
(statearr_18353_18405[(2)] = false);

(statearr_18353_18405[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (26))){
var inst_18267 = (state_18307[(11)]);
var inst_18274 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18267);
var state_18307__$1 = state_18307;
var statearr_18354_18406 = state_18307__$1;
(statearr_18354_18406[(2)] = inst_18274);

(statearr_18354_18406[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (16))){
var state_18307__$1 = state_18307;
var statearr_18355_18407 = state_18307__$1;
(statearr_18355_18407[(2)] = true);

(statearr_18355_18407[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (38))){
var inst_18297 = (state_18307[(2)]);
var state_18307__$1 = state_18307;
var statearr_18356_18408 = state_18307__$1;
(statearr_18356_18408[(2)] = inst_18297);

(statearr_18356_18408[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (30))){
var inst_18258 = (state_18307[(10)]);
var inst_18259 = (state_18307[(13)]);
var inst_18267 = (state_18307[(11)]);
var inst_18284 = cljs.core.empty_QMARK_.call(null,inst_18258);
var inst_18285 = inst_18259.call(null,inst_18267);
var inst_18286 = cljs.core.not.call(null,inst_18285);
var inst_18287 = ((inst_18284) && (inst_18286));
var state_18307__$1 = state_18307;
var statearr_18357_18409 = state_18307__$1;
(statearr_18357_18409[(2)] = inst_18287);

(statearr_18357_18409[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (10))){
var inst_18209 = (state_18307[(8)]);
var inst_18230 = (state_18307[(2)]);
var inst_18231 = cljs.core.get.call(null,inst_18230,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18232 = cljs.core.get.call(null,inst_18230,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18233 = cljs.core.get.call(null,inst_18230,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18234 = inst_18209;
var state_18307__$1 = (function (){var statearr_18358 = state_18307;
(statearr_18358[(16)] = inst_18231);

(statearr_18358[(17)] = inst_18233);

(statearr_18358[(7)] = inst_18234);

(statearr_18358[(18)] = inst_18232);

return statearr_18358;
})();
var statearr_18359_18410 = state_18307__$1;
(statearr_18359_18410[(2)] = null);

(statearr_18359_18410[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (18))){
var inst_18249 = (state_18307[(2)]);
var state_18307__$1 = state_18307;
var statearr_18360_18411 = state_18307__$1;
(statearr_18360_18411[(2)] = inst_18249);

(statearr_18360_18411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (37))){
var state_18307__$1 = state_18307;
var statearr_18361_18412 = state_18307__$1;
(statearr_18361_18412[(2)] = null);

(statearr_18361_18412[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18308 === (8))){
var inst_18209 = (state_18307[(8)]);
var inst_18227 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18209);
var state_18307__$1 = state_18307;
var statearr_18362_18413 = state_18307__$1;
(statearr_18362_18413[(2)] = inst_18227);

(statearr_18362_18413[(1)] = (10));


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
});})(c__15444__auto___18367,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15277__auto__,c__15444__auto___18367,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15278__auto__ = null;
var cljs$core$async$mix_$_state_machine__15278__auto____0 = (function (){
var statearr_18363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18363[(0)] = cljs$core$async$mix_$_state_machine__15278__auto__);

(statearr_18363[(1)] = (1));

return statearr_18363;
});
var cljs$core$async$mix_$_state_machine__15278__auto____1 = (function (state_18307){
while(true){
var ret_value__15279__auto__ = (function (){try{while(true){
var result__15280__auto__ = switch__15277__auto__.call(null,state_18307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15280__auto__;
}
break;
}
}catch (e18364){if((e18364 instanceof Object)){
var ex__15281__auto__ = e18364;
var statearr_18365_18414 = state_18307;
(statearr_18365_18414[(5)] = ex__15281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18415 = state_18307;
state_18307 = G__18415;
continue;
} else {
return ret_value__15279__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15278__auto__ = function(state_18307){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15278__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15278__auto____1.call(this,state_18307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15278__auto____0;
cljs$core$async$mix_$_state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15278__auto____1;
return cljs$core$async$mix_$_state_machine__15278__auto__;
})()
;})(switch__15277__auto__,c__15444__auto___18367,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15446__auto__ = (function (){var statearr_18366 = f__15445__auto__.call(null);
(statearr_18366[(6)] = c__15444__auto___18367);

return statearr_18366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15446__auto__);
});})(c__15444__auto___18367,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18417 = arguments.length;
switch (G__18417) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__18421 = arguments.length;
switch (G__18421) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__18419_SHARP_){
if(cljs.core.truth_(p1__18419_SHARP_.call(null,topic))){
return p1__18419_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18419_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18422 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18422 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18423){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18423 = meta18423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18424,meta18423__$1){
var self__ = this;
var _18424__$1 = this;
return (new cljs.core.async.t_cljs$core$async18422(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18423__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18422.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18424){
var self__ = this;
var _18424__$1 = this;
return self__.meta18423;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18422.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18422.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18422.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18422.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18422.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18422.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18422.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18422.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18423","meta18423",-1328284300,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18422.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18422.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18422";

cljs.core.async.t_cljs$core$async18422.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async18422");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18422.
 */
cljs.core.async.__GT_t_cljs$core$async18422 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18422(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18423){
return (new cljs.core.async.t_cljs$core$async18422(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18423));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18422(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15444__auto___18542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15444__auto___18542,mults,ensure_mult,p){
return (function (){
var f__15445__auto__ = (function (){var switch__15277__auto__ = ((function (c__15444__auto___18542,mults,ensure_mult,p){
return (function (state_18496){
var state_val_18497 = (state_18496[(1)]);
if((state_val_18497 === (7))){
var inst_18492 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
var statearr_18498_18543 = state_18496__$1;
(statearr_18498_18543[(2)] = inst_18492);

(statearr_18498_18543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (20))){
var state_18496__$1 = state_18496;
var statearr_18499_18544 = state_18496__$1;
(statearr_18499_18544[(2)] = null);

(statearr_18499_18544[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (1))){
var state_18496__$1 = state_18496;
var statearr_18500_18545 = state_18496__$1;
(statearr_18500_18545[(2)] = null);

(statearr_18500_18545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (24))){
var inst_18475 = (state_18496[(7)]);
var inst_18484 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18475);
var state_18496__$1 = state_18496;
var statearr_18501_18546 = state_18496__$1;
(statearr_18501_18546[(2)] = inst_18484);

(statearr_18501_18546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (4))){
var inst_18427 = (state_18496[(8)]);
var inst_18427__$1 = (state_18496[(2)]);
var inst_18428 = (inst_18427__$1 == null);
var state_18496__$1 = (function (){var statearr_18502 = state_18496;
(statearr_18502[(8)] = inst_18427__$1);

return statearr_18502;
})();
if(cljs.core.truth_(inst_18428)){
var statearr_18503_18547 = state_18496__$1;
(statearr_18503_18547[(1)] = (5));

} else {
var statearr_18504_18548 = state_18496__$1;
(statearr_18504_18548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (15))){
var inst_18469 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
var statearr_18505_18549 = state_18496__$1;
(statearr_18505_18549[(2)] = inst_18469);

(statearr_18505_18549[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (21))){
var inst_18489 = (state_18496[(2)]);
var state_18496__$1 = (function (){var statearr_18506 = state_18496;
(statearr_18506[(9)] = inst_18489);

return statearr_18506;
})();
var statearr_18507_18550 = state_18496__$1;
(statearr_18507_18550[(2)] = null);

(statearr_18507_18550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (13))){
var inst_18451 = (state_18496[(10)]);
var inst_18453 = cljs.core.chunked_seq_QMARK_.call(null,inst_18451);
var state_18496__$1 = state_18496;
if(inst_18453){
var statearr_18508_18551 = state_18496__$1;
(statearr_18508_18551[(1)] = (16));

} else {
var statearr_18509_18552 = state_18496__$1;
(statearr_18509_18552[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (22))){
var inst_18481 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
if(cljs.core.truth_(inst_18481)){
var statearr_18510_18553 = state_18496__$1;
(statearr_18510_18553[(1)] = (23));

} else {
var statearr_18511_18554 = state_18496__$1;
(statearr_18511_18554[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (6))){
var inst_18477 = (state_18496[(11)]);
var inst_18475 = (state_18496[(7)]);
var inst_18427 = (state_18496[(8)]);
var inst_18475__$1 = topic_fn.call(null,inst_18427);
var inst_18476 = cljs.core.deref.call(null,mults);
var inst_18477__$1 = cljs.core.get.call(null,inst_18476,inst_18475__$1);
var state_18496__$1 = (function (){var statearr_18512 = state_18496;
(statearr_18512[(11)] = inst_18477__$1);

(statearr_18512[(7)] = inst_18475__$1);

return statearr_18512;
})();
if(cljs.core.truth_(inst_18477__$1)){
var statearr_18513_18555 = state_18496__$1;
(statearr_18513_18555[(1)] = (19));

} else {
var statearr_18514_18556 = state_18496__$1;
(statearr_18514_18556[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (25))){
var inst_18486 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
var statearr_18515_18557 = state_18496__$1;
(statearr_18515_18557[(2)] = inst_18486);

(statearr_18515_18557[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (17))){
var inst_18451 = (state_18496[(10)]);
var inst_18460 = cljs.core.first.call(null,inst_18451);
var inst_18461 = cljs.core.async.muxch_STAR_.call(null,inst_18460);
var inst_18462 = cljs.core.async.close_BANG_.call(null,inst_18461);
var inst_18463 = cljs.core.next.call(null,inst_18451);
var inst_18437 = inst_18463;
var inst_18438 = null;
var inst_18439 = (0);
var inst_18440 = (0);
var state_18496__$1 = (function (){var statearr_18516 = state_18496;
(statearr_18516[(12)] = inst_18439);

(statearr_18516[(13)] = inst_18462);

(statearr_18516[(14)] = inst_18438);

(statearr_18516[(15)] = inst_18440);

(statearr_18516[(16)] = inst_18437);

return statearr_18516;
})();
var statearr_18517_18558 = state_18496__$1;
(statearr_18517_18558[(2)] = null);

(statearr_18517_18558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (3))){
var inst_18494 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18496__$1,inst_18494);
} else {
if((state_val_18497 === (12))){
var inst_18471 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
var statearr_18518_18559 = state_18496__$1;
(statearr_18518_18559[(2)] = inst_18471);

(statearr_18518_18559[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (2))){
var state_18496__$1 = state_18496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18496__$1,(4),ch);
} else {
if((state_val_18497 === (23))){
var state_18496__$1 = state_18496;
var statearr_18519_18560 = state_18496__$1;
(statearr_18519_18560[(2)] = null);

(statearr_18519_18560[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (19))){
var inst_18477 = (state_18496[(11)]);
var inst_18427 = (state_18496[(8)]);
var inst_18479 = cljs.core.async.muxch_STAR_.call(null,inst_18477);
var state_18496__$1 = state_18496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18496__$1,(22),inst_18479,inst_18427);
} else {
if((state_val_18497 === (11))){
var inst_18451 = (state_18496[(10)]);
var inst_18437 = (state_18496[(16)]);
var inst_18451__$1 = cljs.core.seq.call(null,inst_18437);
var state_18496__$1 = (function (){var statearr_18520 = state_18496;
(statearr_18520[(10)] = inst_18451__$1);

return statearr_18520;
})();
if(inst_18451__$1){
var statearr_18521_18561 = state_18496__$1;
(statearr_18521_18561[(1)] = (13));

} else {
var statearr_18522_18562 = state_18496__$1;
(statearr_18522_18562[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (9))){
var inst_18473 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
var statearr_18523_18563 = state_18496__$1;
(statearr_18523_18563[(2)] = inst_18473);

(statearr_18523_18563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (5))){
var inst_18434 = cljs.core.deref.call(null,mults);
var inst_18435 = cljs.core.vals.call(null,inst_18434);
var inst_18436 = cljs.core.seq.call(null,inst_18435);
var inst_18437 = inst_18436;
var inst_18438 = null;
var inst_18439 = (0);
var inst_18440 = (0);
var state_18496__$1 = (function (){var statearr_18524 = state_18496;
(statearr_18524[(12)] = inst_18439);

(statearr_18524[(14)] = inst_18438);

(statearr_18524[(15)] = inst_18440);

(statearr_18524[(16)] = inst_18437);

return statearr_18524;
})();
var statearr_18525_18564 = state_18496__$1;
(statearr_18525_18564[(2)] = null);

(statearr_18525_18564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (14))){
var state_18496__$1 = state_18496;
var statearr_18529_18565 = state_18496__$1;
(statearr_18529_18565[(2)] = null);

(statearr_18529_18565[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (16))){
var inst_18451 = (state_18496[(10)]);
var inst_18455 = cljs.core.chunk_first.call(null,inst_18451);
var inst_18456 = cljs.core.chunk_rest.call(null,inst_18451);
var inst_18457 = cljs.core.count.call(null,inst_18455);
var inst_18437 = inst_18456;
var inst_18438 = inst_18455;
var inst_18439 = inst_18457;
var inst_18440 = (0);
var state_18496__$1 = (function (){var statearr_18530 = state_18496;
(statearr_18530[(12)] = inst_18439);

(statearr_18530[(14)] = inst_18438);

(statearr_18530[(15)] = inst_18440);

(statearr_18530[(16)] = inst_18437);

return statearr_18530;
})();
var statearr_18531_18566 = state_18496__$1;
(statearr_18531_18566[(2)] = null);

(statearr_18531_18566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (10))){
var inst_18439 = (state_18496[(12)]);
var inst_18438 = (state_18496[(14)]);
var inst_18440 = (state_18496[(15)]);
var inst_18437 = (state_18496[(16)]);
var inst_18445 = cljs.core._nth.call(null,inst_18438,inst_18440);
var inst_18446 = cljs.core.async.muxch_STAR_.call(null,inst_18445);
var inst_18447 = cljs.core.async.close_BANG_.call(null,inst_18446);
var inst_18448 = (inst_18440 + (1));
var tmp18526 = inst_18439;
var tmp18527 = inst_18438;
var tmp18528 = inst_18437;
var inst_18437__$1 = tmp18528;
var inst_18438__$1 = tmp18527;
var inst_18439__$1 = tmp18526;
var inst_18440__$1 = inst_18448;
var state_18496__$1 = (function (){var statearr_18532 = state_18496;
(statearr_18532[(12)] = inst_18439__$1);

(statearr_18532[(14)] = inst_18438__$1);

(statearr_18532[(17)] = inst_18447);

(statearr_18532[(15)] = inst_18440__$1);

(statearr_18532[(16)] = inst_18437__$1);

return statearr_18532;
})();
var statearr_18533_18567 = state_18496__$1;
(statearr_18533_18567[(2)] = null);

(statearr_18533_18567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (18))){
var inst_18466 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
var statearr_18534_18568 = state_18496__$1;
(statearr_18534_18568[(2)] = inst_18466);

(statearr_18534_18568[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (8))){
var inst_18439 = (state_18496[(12)]);
var inst_18440 = (state_18496[(15)]);
var inst_18442 = (inst_18440 < inst_18439);
var inst_18443 = inst_18442;
var state_18496__$1 = state_18496;
if(cljs.core.truth_(inst_18443)){
var statearr_18535_18569 = state_18496__$1;
(statearr_18535_18569[(1)] = (10));

} else {
var statearr_18536_18570 = state_18496__$1;
(statearr_18536_18570[(1)] = (11));

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
});})(c__15444__auto___18542,mults,ensure_mult,p))
;
return ((function (switch__15277__auto__,c__15444__auto___18542,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15278__auto__ = null;
var cljs$core$async$state_machine__15278__auto____0 = (function (){
var statearr_18537 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18537[(0)] = cljs$core$async$state_machine__15278__auto__);

(statearr_18537[(1)] = (1));

return statearr_18537;
});
var cljs$core$async$state_machine__15278__auto____1 = (function (state_18496){
while(true){
var ret_value__15279__auto__ = (function (){try{while(true){
var result__15280__auto__ = switch__15277__auto__.call(null,state_18496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15280__auto__;
}
break;
}
}catch (e18538){if((e18538 instanceof Object)){
var ex__15281__auto__ = e18538;
var statearr_18539_18571 = state_18496;
(statearr_18539_18571[(5)] = ex__15281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18572 = state_18496;
state_18496 = G__18572;
continue;
} else {
return ret_value__15279__auto__;
}
break;
}
});
cljs$core$async$state_machine__15278__auto__ = function(state_18496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15278__auto____1.call(this,state_18496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15278__auto____0;
cljs$core$async$state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15278__auto____1;
return cljs$core$async$state_machine__15278__auto__;
})()
;})(switch__15277__auto__,c__15444__auto___18542,mults,ensure_mult,p))
})();
var state__15446__auto__ = (function (){var statearr_18540 = f__15445__auto__.call(null);
(statearr_18540[(6)] = c__15444__auto___18542);

return statearr_18540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15446__auto__);
});})(c__15444__auto___18542,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__18574 = arguments.length;
switch (G__18574) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

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
var G__18577 = arguments.length;
switch (G__18577) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__18580 = arguments.length;
switch (G__18580) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__15444__auto___18647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15444__auto___18647,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15445__auto__ = (function (){var switch__15277__auto__ = ((function (c__15444__auto___18647,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18619){
var state_val_18620 = (state_18619[(1)]);
if((state_val_18620 === (7))){
var state_18619__$1 = state_18619;
var statearr_18621_18648 = state_18619__$1;
(statearr_18621_18648[(2)] = null);

(statearr_18621_18648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (1))){
var state_18619__$1 = state_18619;
var statearr_18622_18649 = state_18619__$1;
(statearr_18622_18649[(2)] = null);

(statearr_18622_18649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (4))){
var inst_18583 = (state_18619[(7)]);
var inst_18585 = (inst_18583 < cnt);
var state_18619__$1 = state_18619;
if(cljs.core.truth_(inst_18585)){
var statearr_18623_18650 = state_18619__$1;
(statearr_18623_18650[(1)] = (6));

} else {
var statearr_18624_18651 = state_18619__$1;
(statearr_18624_18651[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (15))){
var inst_18615 = (state_18619[(2)]);
var state_18619__$1 = state_18619;
var statearr_18625_18652 = state_18619__$1;
(statearr_18625_18652[(2)] = inst_18615);

(statearr_18625_18652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (13))){
var inst_18608 = cljs.core.async.close_BANG_.call(null,out);
var state_18619__$1 = state_18619;
var statearr_18626_18653 = state_18619__$1;
(statearr_18626_18653[(2)] = inst_18608);

(statearr_18626_18653[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (6))){
var state_18619__$1 = state_18619;
var statearr_18627_18654 = state_18619__$1;
(statearr_18627_18654[(2)] = null);

(statearr_18627_18654[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (3))){
var inst_18617 = (state_18619[(2)]);
var state_18619__$1 = state_18619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18619__$1,inst_18617);
} else {
if((state_val_18620 === (12))){
var inst_18605 = (state_18619[(8)]);
var inst_18605__$1 = (state_18619[(2)]);
var inst_18606 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18605__$1);
var state_18619__$1 = (function (){var statearr_18628 = state_18619;
(statearr_18628[(8)] = inst_18605__$1);

return statearr_18628;
})();
if(cljs.core.truth_(inst_18606)){
var statearr_18629_18655 = state_18619__$1;
(statearr_18629_18655[(1)] = (13));

} else {
var statearr_18630_18656 = state_18619__$1;
(statearr_18630_18656[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (2))){
var inst_18582 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18583 = (0);
var state_18619__$1 = (function (){var statearr_18631 = state_18619;
(statearr_18631[(9)] = inst_18582);

(statearr_18631[(7)] = inst_18583);

return statearr_18631;
})();
var statearr_18632_18657 = state_18619__$1;
(statearr_18632_18657[(2)] = null);

(statearr_18632_18657[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (11))){
var inst_18583 = (state_18619[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18619,(10),Object,null,(9));
var inst_18592 = chs__$1.call(null,inst_18583);
var inst_18593 = done.call(null,inst_18583);
var inst_18594 = cljs.core.async.take_BANG_.call(null,inst_18592,inst_18593);
var state_18619__$1 = state_18619;
var statearr_18633_18658 = state_18619__$1;
(statearr_18633_18658[(2)] = inst_18594);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18619__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (9))){
var inst_18583 = (state_18619[(7)]);
var inst_18596 = (state_18619[(2)]);
var inst_18597 = (inst_18583 + (1));
var inst_18583__$1 = inst_18597;
var state_18619__$1 = (function (){var statearr_18634 = state_18619;
(statearr_18634[(10)] = inst_18596);

(statearr_18634[(7)] = inst_18583__$1);

return statearr_18634;
})();
var statearr_18635_18659 = state_18619__$1;
(statearr_18635_18659[(2)] = null);

(statearr_18635_18659[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (5))){
var inst_18603 = (state_18619[(2)]);
var state_18619__$1 = (function (){var statearr_18636 = state_18619;
(statearr_18636[(11)] = inst_18603);

return statearr_18636;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18619__$1,(12),dchan);
} else {
if((state_val_18620 === (14))){
var inst_18605 = (state_18619[(8)]);
var inst_18610 = cljs.core.apply.call(null,f,inst_18605);
var state_18619__$1 = state_18619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18619__$1,(16),out,inst_18610);
} else {
if((state_val_18620 === (16))){
var inst_18612 = (state_18619[(2)]);
var state_18619__$1 = (function (){var statearr_18637 = state_18619;
(statearr_18637[(12)] = inst_18612);

return statearr_18637;
})();
var statearr_18638_18660 = state_18619__$1;
(statearr_18638_18660[(2)] = null);

(statearr_18638_18660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (10))){
var inst_18587 = (state_18619[(2)]);
var inst_18588 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18619__$1 = (function (){var statearr_18639 = state_18619;
(statearr_18639[(13)] = inst_18587);

return statearr_18639;
})();
var statearr_18640_18661 = state_18619__$1;
(statearr_18640_18661[(2)] = inst_18588);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18619__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (8))){
var inst_18601 = (state_18619[(2)]);
var state_18619__$1 = state_18619;
var statearr_18641_18662 = state_18619__$1;
(statearr_18641_18662[(2)] = inst_18601);

(statearr_18641_18662[(1)] = (5));


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
});})(c__15444__auto___18647,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15277__auto__,c__15444__auto___18647,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15278__auto__ = null;
var cljs$core$async$state_machine__15278__auto____0 = (function (){
var statearr_18642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18642[(0)] = cljs$core$async$state_machine__15278__auto__);

(statearr_18642[(1)] = (1));

return statearr_18642;
});
var cljs$core$async$state_machine__15278__auto____1 = (function (state_18619){
while(true){
var ret_value__15279__auto__ = (function (){try{while(true){
var result__15280__auto__ = switch__15277__auto__.call(null,state_18619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15280__auto__;
}
break;
}
}catch (e18643){if((e18643 instanceof Object)){
var ex__15281__auto__ = e18643;
var statearr_18644_18663 = state_18619;
(statearr_18644_18663[(5)] = ex__15281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18664 = state_18619;
state_18619 = G__18664;
continue;
} else {
return ret_value__15279__auto__;
}
break;
}
});
cljs$core$async$state_machine__15278__auto__ = function(state_18619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15278__auto____1.call(this,state_18619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15278__auto____0;
cljs$core$async$state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15278__auto____1;
return cljs$core$async$state_machine__15278__auto__;
})()
;})(switch__15277__auto__,c__15444__auto___18647,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15446__auto__ = (function (){var statearr_18645 = f__15445__auto__.call(null);
(statearr_18645[(6)] = c__15444__auto___18647);

return statearr_18645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15446__auto__);
});})(c__15444__auto___18647,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__18667 = arguments.length;
switch (G__18667) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15444__auto___18721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15444__auto___18721,out){
return (function (){
var f__15445__auto__ = (function (){var switch__15277__auto__ = ((function (c__15444__auto___18721,out){
return (function (state_18699){
var state_val_18700 = (state_18699[(1)]);
if((state_val_18700 === (7))){
var inst_18678 = (state_18699[(7)]);
var inst_18679 = (state_18699[(8)]);
var inst_18678__$1 = (state_18699[(2)]);
var inst_18679__$1 = cljs.core.nth.call(null,inst_18678__$1,(0),null);
var inst_18680 = cljs.core.nth.call(null,inst_18678__$1,(1),null);
var inst_18681 = (inst_18679__$1 == null);
var state_18699__$1 = (function (){var statearr_18701 = state_18699;
(statearr_18701[(7)] = inst_18678__$1);

(statearr_18701[(9)] = inst_18680);

(statearr_18701[(8)] = inst_18679__$1);

return statearr_18701;
})();
if(cljs.core.truth_(inst_18681)){
var statearr_18702_18722 = state_18699__$1;
(statearr_18702_18722[(1)] = (8));

} else {
var statearr_18703_18723 = state_18699__$1;
(statearr_18703_18723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18700 === (1))){
var inst_18668 = cljs.core.vec.call(null,chs);
var inst_18669 = inst_18668;
var state_18699__$1 = (function (){var statearr_18704 = state_18699;
(statearr_18704[(10)] = inst_18669);

return statearr_18704;
})();
var statearr_18705_18724 = state_18699__$1;
(statearr_18705_18724[(2)] = null);

(statearr_18705_18724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18700 === (4))){
var inst_18669 = (state_18699[(10)]);
var state_18699__$1 = state_18699;
return cljs.core.async.ioc_alts_BANG_.call(null,state_18699__$1,(7),inst_18669);
} else {
if((state_val_18700 === (6))){
var inst_18695 = (state_18699[(2)]);
var state_18699__$1 = state_18699;
var statearr_18706_18725 = state_18699__$1;
(statearr_18706_18725[(2)] = inst_18695);

(statearr_18706_18725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18700 === (3))){
var inst_18697 = (state_18699[(2)]);
var state_18699__$1 = state_18699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18699__$1,inst_18697);
} else {
if((state_val_18700 === (2))){
var inst_18669 = (state_18699[(10)]);
var inst_18671 = cljs.core.count.call(null,inst_18669);
var inst_18672 = (inst_18671 > (0));
var state_18699__$1 = state_18699;
if(cljs.core.truth_(inst_18672)){
var statearr_18708_18726 = state_18699__$1;
(statearr_18708_18726[(1)] = (4));

} else {
var statearr_18709_18727 = state_18699__$1;
(statearr_18709_18727[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18700 === (11))){
var inst_18669 = (state_18699[(10)]);
var inst_18688 = (state_18699[(2)]);
var tmp18707 = inst_18669;
var inst_18669__$1 = tmp18707;
var state_18699__$1 = (function (){var statearr_18710 = state_18699;
(statearr_18710[(11)] = inst_18688);

(statearr_18710[(10)] = inst_18669__$1);

return statearr_18710;
})();
var statearr_18711_18728 = state_18699__$1;
(statearr_18711_18728[(2)] = null);

(statearr_18711_18728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18700 === (9))){
var inst_18679 = (state_18699[(8)]);
var state_18699__$1 = state_18699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18699__$1,(11),out,inst_18679);
} else {
if((state_val_18700 === (5))){
var inst_18693 = cljs.core.async.close_BANG_.call(null,out);
var state_18699__$1 = state_18699;
var statearr_18712_18729 = state_18699__$1;
(statearr_18712_18729[(2)] = inst_18693);

(statearr_18712_18729[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18700 === (10))){
var inst_18691 = (state_18699[(2)]);
var state_18699__$1 = state_18699;
var statearr_18713_18730 = state_18699__$1;
(statearr_18713_18730[(2)] = inst_18691);

(statearr_18713_18730[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18700 === (8))){
var inst_18678 = (state_18699[(7)]);
var inst_18669 = (state_18699[(10)]);
var inst_18680 = (state_18699[(9)]);
var inst_18679 = (state_18699[(8)]);
var inst_18683 = (function (){var cs = inst_18669;
var vec__18674 = inst_18678;
var v = inst_18679;
var c = inst_18680;
return ((function (cs,vec__18674,v,c,inst_18678,inst_18669,inst_18680,inst_18679,state_val_18700,c__15444__auto___18721,out){
return (function (p1__18665_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18665_SHARP_);
});
;})(cs,vec__18674,v,c,inst_18678,inst_18669,inst_18680,inst_18679,state_val_18700,c__15444__auto___18721,out))
})();
var inst_18684 = cljs.core.filterv.call(null,inst_18683,inst_18669);
var inst_18669__$1 = inst_18684;
var state_18699__$1 = (function (){var statearr_18714 = state_18699;
(statearr_18714[(10)] = inst_18669__$1);

return statearr_18714;
})();
var statearr_18715_18731 = state_18699__$1;
(statearr_18715_18731[(2)] = null);

(statearr_18715_18731[(1)] = (2));


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
});})(c__15444__auto___18721,out))
;
return ((function (switch__15277__auto__,c__15444__auto___18721,out){
return (function() {
var cljs$core$async$state_machine__15278__auto__ = null;
var cljs$core$async$state_machine__15278__auto____0 = (function (){
var statearr_18716 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18716[(0)] = cljs$core$async$state_machine__15278__auto__);

(statearr_18716[(1)] = (1));

return statearr_18716;
});
var cljs$core$async$state_machine__15278__auto____1 = (function (state_18699){
while(true){
var ret_value__15279__auto__ = (function (){try{while(true){
var result__15280__auto__ = switch__15277__auto__.call(null,state_18699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15280__auto__;
}
break;
}
}catch (e18717){if((e18717 instanceof Object)){
var ex__15281__auto__ = e18717;
var statearr_18718_18732 = state_18699;
(statearr_18718_18732[(5)] = ex__15281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18733 = state_18699;
state_18699 = G__18733;
continue;
} else {
return ret_value__15279__auto__;
}
break;
}
});
cljs$core$async$state_machine__15278__auto__ = function(state_18699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15278__auto____1.call(this,state_18699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15278__auto____0;
cljs$core$async$state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15278__auto____1;
return cljs$core$async$state_machine__15278__auto__;
})()
;})(switch__15277__auto__,c__15444__auto___18721,out))
})();
var state__15446__auto__ = (function (){var statearr_18719 = f__15445__auto__.call(null);
(statearr_18719[(6)] = c__15444__auto___18721);

return statearr_18719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15446__auto__);
});})(c__15444__auto___18721,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

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
var G__18735 = arguments.length;
switch (G__18735) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15444__auto___18780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15444__auto___18780,out){
return (function (){
var f__15445__auto__ = (function (){var switch__15277__auto__ = ((function (c__15444__auto___18780,out){
return (function (state_18759){
var state_val_18760 = (state_18759[(1)]);
if((state_val_18760 === (7))){
var inst_18741 = (state_18759[(7)]);
var inst_18741__$1 = (state_18759[(2)]);
var inst_18742 = (inst_18741__$1 == null);
var inst_18743 = cljs.core.not.call(null,inst_18742);
var state_18759__$1 = (function (){var statearr_18761 = state_18759;
(statearr_18761[(7)] = inst_18741__$1);

return statearr_18761;
})();
if(inst_18743){
var statearr_18762_18781 = state_18759__$1;
(statearr_18762_18781[(1)] = (8));

} else {
var statearr_18763_18782 = state_18759__$1;
(statearr_18763_18782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (1))){
var inst_18736 = (0);
var state_18759__$1 = (function (){var statearr_18764 = state_18759;
(statearr_18764[(8)] = inst_18736);

return statearr_18764;
})();
var statearr_18765_18783 = state_18759__$1;
(statearr_18765_18783[(2)] = null);

(statearr_18765_18783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (4))){
var state_18759__$1 = state_18759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18759__$1,(7),ch);
} else {
if((state_val_18760 === (6))){
var inst_18754 = (state_18759[(2)]);
var state_18759__$1 = state_18759;
var statearr_18766_18784 = state_18759__$1;
(statearr_18766_18784[(2)] = inst_18754);

(statearr_18766_18784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (3))){
var inst_18756 = (state_18759[(2)]);
var inst_18757 = cljs.core.async.close_BANG_.call(null,out);
var state_18759__$1 = (function (){var statearr_18767 = state_18759;
(statearr_18767[(9)] = inst_18756);

return statearr_18767;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18759__$1,inst_18757);
} else {
if((state_val_18760 === (2))){
var inst_18736 = (state_18759[(8)]);
var inst_18738 = (inst_18736 < n);
var state_18759__$1 = state_18759;
if(cljs.core.truth_(inst_18738)){
var statearr_18768_18785 = state_18759__$1;
(statearr_18768_18785[(1)] = (4));

} else {
var statearr_18769_18786 = state_18759__$1;
(statearr_18769_18786[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (11))){
var inst_18736 = (state_18759[(8)]);
var inst_18746 = (state_18759[(2)]);
var inst_18747 = (inst_18736 + (1));
var inst_18736__$1 = inst_18747;
var state_18759__$1 = (function (){var statearr_18770 = state_18759;
(statearr_18770[(10)] = inst_18746);

(statearr_18770[(8)] = inst_18736__$1);

return statearr_18770;
})();
var statearr_18771_18787 = state_18759__$1;
(statearr_18771_18787[(2)] = null);

(statearr_18771_18787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (9))){
var state_18759__$1 = state_18759;
var statearr_18772_18788 = state_18759__$1;
(statearr_18772_18788[(2)] = null);

(statearr_18772_18788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (5))){
var state_18759__$1 = state_18759;
var statearr_18773_18789 = state_18759__$1;
(statearr_18773_18789[(2)] = null);

(statearr_18773_18789[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (10))){
var inst_18751 = (state_18759[(2)]);
var state_18759__$1 = state_18759;
var statearr_18774_18790 = state_18759__$1;
(statearr_18774_18790[(2)] = inst_18751);

(statearr_18774_18790[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (8))){
var inst_18741 = (state_18759[(7)]);
var state_18759__$1 = state_18759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18759__$1,(11),out,inst_18741);
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
});})(c__15444__auto___18780,out))
;
return ((function (switch__15277__auto__,c__15444__auto___18780,out){
return (function() {
var cljs$core$async$state_machine__15278__auto__ = null;
var cljs$core$async$state_machine__15278__auto____0 = (function (){
var statearr_18775 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18775[(0)] = cljs$core$async$state_machine__15278__auto__);

(statearr_18775[(1)] = (1));

return statearr_18775;
});
var cljs$core$async$state_machine__15278__auto____1 = (function (state_18759){
while(true){
var ret_value__15279__auto__ = (function (){try{while(true){
var result__15280__auto__ = switch__15277__auto__.call(null,state_18759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15280__auto__;
}
break;
}
}catch (e18776){if((e18776 instanceof Object)){
var ex__15281__auto__ = e18776;
var statearr_18777_18791 = state_18759;
(statearr_18777_18791[(5)] = ex__15281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18792 = state_18759;
state_18759 = G__18792;
continue;
} else {
return ret_value__15279__auto__;
}
break;
}
});
cljs$core$async$state_machine__15278__auto__ = function(state_18759){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15278__auto____1.call(this,state_18759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15278__auto____0;
cljs$core$async$state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15278__auto____1;
return cljs$core$async$state_machine__15278__auto__;
})()
;})(switch__15277__auto__,c__15444__auto___18780,out))
})();
var state__15446__auto__ = (function (){var statearr_18778 = f__15445__auto__.call(null);
(statearr_18778[(6)] = c__15444__auto___18780);

return statearr_18778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15446__auto__);
});})(c__15444__auto___18780,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18794 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18794 = (function (f,ch,meta18795){
this.f = f;
this.ch = ch;
this.meta18795 = meta18795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18796,meta18795__$1){
var self__ = this;
var _18796__$1 = this;
return (new cljs.core.async.t_cljs$core$async18794(self__.f,self__.ch,meta18795__$1));
});

cljs.core.async.t_cljs$core$async18794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18796){
var self__ = this;
var _18796__$1 = this;
return self__.meta18795;
});

cljs.core.async.t_cljs$core$async18794.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18794.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18794.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18794.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18794.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18797 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18797 = (function (f,ch,meta18795,_,fn1,meta18798){
this.f = f;
this.ch = ch;
this.meta18795 = meta18795;
this._ = _;
this.fn1 = fn1;
this.meta18798 = meta18798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18799,meta18798__$1){
var self__ = this;
var _18799__$1 = this;
return (new cljs.core.async.t_cljs$core$async18797(self__.f,self__.ch,self__.meta18795,self__._,self__.fn1,meta18798__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async18797.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18799){
var self__ = this;
var _18799__$1 = this;
return self__.meta18798;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18797.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18797.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18797.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18797.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18793_SHARP_){
return f1.call(null,(((p1__18793_SHARP_ == null))?null:self__.f.call(null,p1__18793_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async18797.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18795","meta18795",1334808094,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18794","cljs.core.async/t_cljs$core$async18794",-454688188,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18798","meta18798",-279418255,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18797.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18797.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18797";

cljs.core.async.t_cljs$core$async18797.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async18797");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18797.
 */
cljs.core.async.__GT_t_cljs$core$async18797 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18797(f__$1,ch__$1,meta18795__$1,___$2,fn1__$1,meta18798){
return (new cljs.core.async.t_cljs$core$async18797(f__$1,ch__$1,meta18795__$1,___$2,fn1__$1,meta18798));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async18797(self__.f,self__.ch,self__.meta18795,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async18794.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18794.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async18794.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18795","meta18795",1334808094,null)], null);
});

cljs.core.async.t_cljs$core$async18794.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18794.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18794";

cljs.core.async.t_cljs$core$async18794.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async18794");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18794.
 */
cljs.core.async.__GT_t_cljs$core$async18794 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18794(f__$1,ch__$1,meta18795){
return (new cljs.core.async.t_cljs$core$async18794(f__$1,ch__$1,meta18795));
});

}

return (new cljs.core.async.t_cljs$core$async18794(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18800 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18800 = (function (f,ch,meta18801){
this.f = f;
this.ch = ch;
this.meta18801 = meta18801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18802,meta18801__$1){
var self__ = this;
var _18802__$1 = this;
return (new cljs.core.async.t_cljs$core$async18800(self__.f,self__.ch,meta18801__$1));
});

cljs.core.async.t_cljs$core$async18800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18802){
var self__ = this;
var _18802__$1 = this;
return self__.meta18801;
});

cljs.core.async.t_cljs$core$async18800.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18800.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18800.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18800.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18800.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18800.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async18800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18801","meta18801",-267812927,null)], null);
});

cljs.core.async.t_cljs$core$async18800.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18800";

cljs.core.async.t_cljs$core$async18800.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async18800");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18800.
 */
cljs.core.async.__GT_t_cljs$core$async18800 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18800(f__$1,ch__$1,meta18801){
return (new cljs.core.async.t_cljs$core$async18800(f__$1,ch__$1,meta18801));
});

}

return (new cljs.core.async.t_cljs$core$async18800(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18803 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18803 = (function (p,ch,meta18804){
this.p = p;
this.ch = ch;
this.meta18804 = meta18804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18805,meta18804__$1){
var self__ = this;
var _18805__$1 = this;
return (new cljs.core.async.t_cljs$core$async18803(self__.p,self__.ch,meta18804__$1));
});

cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18805){
var self__ = this;
var _18805__$1 = this;
return self__.meta18804;
});

cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async18803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18804","meta18804",1887067215,null)], null);
});

cljs.core.async.t_cljs$core$async18803.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18803";

cljs.core.async.t_cljs$core$async18803.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async18803");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18803.
 */
cljs.core.async.__GT_t_cljs$core$async18803 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18803(p__$1,ch__$1,meta18804){
return (new cljs.core.async.t_cljs$core$async18803(p__$1,ch__$1,meta18804));
});

}

return (new cljs.core.async.t_cljs$core$async18803(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18807 = arguments.length;
switch (G__18807) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15444__auto___18847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15444__auto___18847,out){
return (function (){
var f__15445__auto__ = (function (){var switch__15277__auto__ = ((function (c__15444__auto___18847,out){
return (function (state_18828){
var state_val_18829 = (state_18828[(1)]);
if((state_val_18829 === (7))){
var inst_18824 = (state_18828[(2)]);
var state_18828__$1 = state_18828;
var statearr_18830_18848 = state_18828__$1;
(statearr_18830_18848[(2)] = inst_18824);

(statearr_18830_18848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18829 === (1))){
var state_18828__$1 = state_18828;
var statearr_18831_18849 = state_18828__$1;
(statearr_18831_18849[(2)] = null);

(statearr_18831_18849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18829 === (4))){
var inst_18810 = (state_18828[(7)]);
var inst_18810__$1 = (state_18828[(2)]);
var inst_18811 = (inst_18810__$1 == null);
var state_18828__$1 = (function (){var statearr_18832 = state_18828;
(statearr_18832[(7)] = inst_18810__$1);

return statearr_18832;
})();
if(cljs.core.truth_(inst_18811)){
var statearr_18833_18850 = state_18828__$1;
(statearr_18833_18850[(1)] = (5));

} else {
var statearr_18834_18851 = state_18828__$1;
(statearr_18834_18851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18829 === (6))){
var inst_18810 = (state_18828[(7)]);
var inst_18815 = p.call(null,inst_18810);
var state_18828__$1 = state_18828;
if(cljs.core.truth_(inst_18815)){
var statearr_18835_18852 = state_18828__$1;
(statearr_18835_18852[(1)] = (8));

} else {
var statearr_18836_18853 = state_18828__$1;
(statearr_18836_18853[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18829 === (3))){
var inst_18826 = (state_18828[(2)]);
var state_18828__$1 = state_18828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18828__$1,inst_18826);
} else {
if((state_val_18829 === (2))){
var state_18828__$1 = state_18828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18828__$1,(4),ch);
} else {
if((state_val_18829 === (11))){
var inst_18818 = (state_18828[(2)]);
var state_18828__$1 = state_18828;
var statearr_18837_18854 = state_18828__$1;
(statearr_18837_18854[(2)] = inst_18818);

(statearr_18837_18854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18829 === (9))){
var state_18828__$1 = state_18828;
var statearr_18838_18855 = state_18828__$1;
(statearr_18838_18855[(2)] = null);

(statearr_18838_18855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18829 === (5))){
var inst_18813 = cljs.core.async.close_BANG_.call(null,out);
var state_18828__$1 = state_18828;
var statearr_18839_18856 = state_18828__$1;
(statearr_18839_18856[(2)] = inst_18813);

(statearr_18839_18856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18829 === (10))){
var inst_18821 = (state_18828[(2)]);
var state_18828__$1 = (function (){var statearr_18840 = state_18828;
(statearr_18840[(8)] = inst_18821);

return statearr_18840;
})();
var statearr_18841_18857 = state_18828__$1;
(statearr_18841_18857[(2)] = null);

(statearr_18841_18857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18829 === (8))){
var inst_18810 = (state_18828[(7)]);
var state_18828__$1 = state_18828;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18828__$1,(11),out,inst_18810);
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
});})(c__15444__auto___18847,out))
;
return ((function (switch__15277__auto__,c__15444__auto___18847,out){
return (function() {
var cljs$core$async$state_machine__15278__auto__ = null;
var cljs$core$async$state_machine__15278__auto____0 = (function (){
var statearr_18842 = [null,null,null,null,null,null,null,null,null];
(statearr_18842[(0)] = cljs$core$async$state_machine__15278__auto__);

(statearr_18842[(1)] = (1));

return statearr_18842;
});
var cljs$core$async$state_machine__15278__auto____1 = (function (state_18828){
while(true){
var ret_value__15279__auto__ = (function (){try{while(true){
var result__15280__auto__ = switch__15277__auto__.call(null,state_18828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15280__auto__;
}
break;
}
}catch (e18843){if((e18843 instanceof Object)){
var ex__15281__auto__ = e18843;
var statearr_18844_18858 = state_18828;
(statearr_18844_18858[(5)] = ex__15281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18859 = state_18828;
state_18828 = G__18859;
continue;
} else {
return ret_value__15279__auto__;
}
break;
}
});
cljs$core$async$state_machine__15278__auto__ = function(state_18828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15278__auto____1.call(this,state_18828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15278__auto____0;
cljs$core$async$state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15278__auto____1;
return cljs$core$async$state_machine__15278__auto__;
})()
;})(switch__15277__auto__,c__15444__auto___18847,out))
})();
var state__15446__auto__ = (function (){var statearr_18845 = f__15445__auto__.call(null);
(statearr_18845[(6)] = c__15444__auto___18847);

return statearr_18845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15446__auto__);
});})(c__15444__auto___18847,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18861 = arguments.length;
switch (G__18861) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15444__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15444__auto__){
return (function (){
var f__15445__auto__ = (function (){var switch__15277__auto__ = ((function (c__15444__auto__){
return (function (state_18924){
var state_val_18925 = (state_18924[(1)]);
if((state_val_18925 === (7))){
var inst_18920 = (state_18924[(2)]);
var state_18924__$1 = state_18924;
var statearr_18926_18964 = state_18924__$1;
(statearr_18926_18964[(2)] = inst_18920);

(statearr_18926_18964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18925 === (20))){
var inst_18890 = (state_18924[(7)]);
var inst_18901 = (state_18924[(2)]);
var inst_18902 = cljs.core.next.call(null,inst_18890);
var inst_18876 = inst_18902;
var inst_18877 = null;
var inst_18878 = (0);
var inst_18879 = (0);
var state_18924__$1 = (function (){var statearr_18927 = state_18924;
(statearr_18927[(8)] = inst_18878);

(statearr_18927[(9)] = inst_18879);

(statearr_18927[(10)] = inst_18876);

(statearr_18927[(11)] = inst_18877);

(statearr_18927[(12)] = inst_18901);

return statearr_18927;
})();
var statearr_18928_18965 = state_18924__$1;
(statearr_18928_18965[(2)] = null);

(statearr_18928_18965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18925 === (1))){
var state_18924__$1 = state_18924;
var statearr_18929_18966 = state_18924__$1;
(statearr_18929_18966[(2)] = null);

(statearr_18929_18966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18925 === (4))){
var inst_18865 = (state_18924[(13)]);
var inst_18865__$1 = (state_18924[(2)]);
var inst_18866 = (inst_18865__$1 == null);
var state_18924__$1 = (function (){var statearr_18930 = state_18924;
(statearr_18930[(13)] = inst_18865__$1);

return statearr_18930;
})();
if(cljs.core.truth_(inst_18866)){
var statearr_18931_18967 = state_18924__$1;
(statearr_18931_18967[(1)] = (5));

} else {
var statearr_18932_18968 = state_18924__$1;
(statearr_18932_18968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18925 === (15))){
var state_18924__$1 = state_18924;
var statearr_18936_18969 = state_18924__$1;
(statearr_18936_18969[(2)] = null);

(statearr_18936_18969[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18925 === (21))){
var state_18924__$1 = state_18924;
var statearr_18937_18970 = state_18924__$1;
(statearr_18937_18970[(2)] = null);

(statearr_18937_18970[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18925 === (13))){
var inst_18878 = (state_18924[(8)]);
var inst_18879 = (state_18924[(9)]);
var inst_18876 = (state_18924[(10)]);
var inst_18877 = (state_18924[(11)]);
var inst_18886 = (state_18924[(2)]);
var inst_18887 = (inst_18879 + (1));
var tmp18933 = inst_18878;
var tmp18934 = inst_18876;
var tmp18935 = inst_18877;
var inst_18876__$1 = tmp18934;
var inst_18877__$1 = tmp18935;
var inst_18878__$1 = tmp18933;
var inst_18879__$1 = inst_18887;
var state_18924__$1 = (function (){var statearr_18938 = state_18924;
(statearr_18938[(8)] = inst_18878__$1);

(statearr_18938[(9)] = inst_18879__$1);

(statearr_18938[(10)] = inst_18876__$1);

(statearr_18938[(14)] = inst_18886);

(statearr_18938[(11)] = inst_18877__$1);

return statearr_18938;
})();
var statearr_18939_18971 = state_18924__$1;
(statearr_18939_18971[(2)] = null);

(statearr_18939_18971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18925 === (22))){
var state_18924__$1 = state_18924;
var statearr_18940_18972 = state_18924__$1;
(statearr_18940_18972[(2)] = null);

(statearr_18940_18972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18925 === (6))){
var inst_18865 = (state_18924[(13)]);
var inst_18874 = f.call(null,inst_18865);
var inst_18875 = cljs.core.seq.call(null,inst_18874);
var inst_18876 = inst_18875;
var inst_18877 = null;
var inst_18878 = (0);
var inst_18879 = (0);
var state_18924__$1 = (function (){var statearr_18941 = state_18924;
(statearr_18941[(8)] = inst_18878);

(statearr_18941[(9)] = inst_18879);

(statearr_18941[(10)] = inst_18876);

(statearr_18941[(11)] = inst_18877);

return statearr_18941;
})();
var statearr_18942_18973 = state_18924__$1;
(statearr_18942_18973[(2)] = null);

(statearr_18942_18973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18925 === (17))){
var inst_18890 = (state_18924[(7)]);
var inst_18894 = cljs.core.chunk_first.call(null,inst_18890);
var inst_18895 = cljs.core.chunk_rest.call(null,inst_18890);
var inst_18896 = cljs.core.count.call(null,inst_18894);
var inst_18876 = inst_18895;
var inst_18877 = inst_18894;
var inst_18878 = inst_18896;
var inst_18879 = (0);
var state_18924__$1 = (function (){var statearr_18943 = state_18924;
(statearr_18943[(8)] = inst_18878);

(statearr_18943[(9)] = inst_18879);

(statearr_18943[(10)] = inst_18876);

(statearr_18943[(11)] = inst_18877);

return statearr_18943;
})();
var statearr_18944_18974 = state_18924__$1;
(statearr_18944_18974[(2)] = null);

(statearr_18944_18974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18925 === (3))){
var inst_18922 = (state_18924[(2)]);
var state_18924__$1 = state_18924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18924__$1,inst_18922);
} else {
if((state_val_18925 === (12))){
var inst_18910 = (state_18924[(2)]);
var state_18924__$1 = state_18924;
var statearr_18945_18975 = state_18924__$1;
(statearr_18945_18975[(2)] = inst_18910);

(statearr_18945_18975[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18925 === (2))){
var state_18924__$1 = state_18924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18924__$1,(4),in$);
} else {
if((state_val_18925 === (23))){
var inst_18918 = (state_18924[(2)]);
var state_18924__$1 = state_18924;
var statearr_18946_18976 = state_18924__$1;
(statearr_18946_18976[(2)] = inst_18918);

(statearr_18946_18976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18925 === (19))){
var inst_18905 = (state_18924[(2)]);
var state_18924__$1 = state_18924;
var statearr_18947_18977 = state_18924__$1;
(statearr_18947_18977[(2)] = inst_18905);

(statearr_18947_18977[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18925 === (11))){
var inst_18890 = (state_18924[(7)]);
var inst_18876 = (state_18924[(10)]);
var inst_18890__$1 = cljs.core.seq.call(null,inst_18876);
var state_18924__$1 = (function (){var statearr_18948 = state_18924;
(statearr_18948[(7)] = inst_18890__$1);

return statearr_18948;
})();
if(inst_18890__$1){
var statearr_18949_18978 = state_18924__$1;
(statearr_18949_18978[(1)] = (14));

} else {
var statearr_18950_18979 = state_18924__$1;
(statearr_18950_18979[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18925 === (9))){
var inst_18912 = (state_18924[(2)]);
var inst_18913 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_18924__$1 = (function (){var statearr_18951 = state_18924;
(statearr_18951[(15)] = inst_18912);

return statearr_18951;
})();
if(cljs.core.truth_(inst_18913)){
var statearr_18952_18980 = state_18924__$1;
(statearr_18952_18980[(1)] = (21));

} else {
var statearr_18953_18981 = state_18924__$1;
(statearr_18953_18981[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18925 === (5))){
var inst_18868 = cljs.core.async.close_BANG_.call(null,out);
var state_18924__$1 = state_18924;
var statearr_18954_18982 = state_18924__$1;
(statearr_18954_18982[(2)] = inst_18868);

(statearr_18954_18982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18925 === (14))){
var inst_18890 = (state_18924[(7)]);
var inst_18892 = cljs.core.chunked_seq_QMARK_.call(null,inst_18890);
var state_18924__$1 = state_18924;
if(inst_18892){
var statearr_18955_18983 = state_18924__$1;
(statearr_18955_18983[(1)] = (17));

} else {
var statearr_18956_18984 = state_18924__$1;
(statearr_18956_18984[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18925 === (16))){
var inst_18908 = (state_18924[(2)]);
var state_18924__$1 = state_18924;
var statearr_18957_18985 = state_18924__$1;
(statearr_18957_18985[(2)] = inst_18908);

(statearr_18957_18985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18925 === (10))){
var inst_18879 = (state_18924[(9)]);
var inst_18877 = (state_18924[(11)]);
var inst_18884 = cljs.core._nth.call(null,inst_18877,inst_18879);
var state_18924__$1 = state_18924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18924__$1,(13),out,inst_18884);
} else {
if((state_val_18925 === (18))){
var inst_18890 = (state_18924[(7)]);
var inst_18899 = cljs.core.first.call(null,inst_18890);
var state_18924__$1 = state_18924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18924__$1,(20),out,inst_18899);
} else {
if((state_val_18925 === (8))){
var inst_18878 = (state_18924[(8)]);
var inst_18879 = (state_18924[(9)]);
var inst_18881 = (inst_18879 < inst_18878);
var inst_18882 = inst_18881;
var state_18924__$1 = state_18924;
if(cljs.core.truth_(inst_18882)){
var statearr_18958_18986 = state_18924__$1;
(statearr_18958_18986[(1)] = (10));

} else {
var statearr_18959_18987 = state_18924__$1;
(statearr_18959_18987[(1)] = (11));

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
});})(c__15444__auto__))
;
return ((function (switch__15277__auto__,c__15444__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15278__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15278__auto____0 = (function (){
var statearr_18960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18960[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15278__auto__);

(statearr_18960[(1)] = (1));

return statearr_18960;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15278__auto____1 = (function (state_18924){
while(true){
var ret_value__15279__auto__ = (function (){try{while(true){
var result__15280__auto__ = switch__15277__auto__.call(null,state_18924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15280__auto__;
}
break;
}
}catch (e18961){if((e18961 instanceof Object)){
var ex__15281__auto__ = e18961;
var statearr_18962_18988 = state_18924;
(statearr_18962_18988[(5)] = ex__15281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18989 = state_18924;
state_18924 = G__18989;
continue;
} else {
return ret_value__15279__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15278__auto__ = function(state_18924){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15278__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15278__auto____1.call(this,state_18924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15278__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15278__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15278__auto__;
})()
;})(switch__15277__auto__,c__15444__auto__))
})();
var state__15446__auto__ = (function (){var statearr_18963 = f__15445__auto__.call(null);
(statearr_18963[(6)] = c__15444__auto__);

return statearr_18963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15446__auto__);
});})(c__15444__auto__))
);

return c__15444__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18991 = arguments.length;
switch (G__18991) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__18994 = arguments.length;
switch (G__18994) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18997 = arguments.length;
switch (G__18997) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15444__auto___19044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15444__auto___19044,out){
return (function (){
var f__15445__auto__ = (function (){var switch__15277__auto__ = ((function (c__15444__auto___19044,out){
return (function (state_19021){
var state_val_19022 = (state_19021[(1)]);
if((state_val_19022 === (7))){
var inst_19016 = (state_19021[(2)]);
var state_19021__$1 = state_19021;
var statearr_19023_19045 = state_19021__$1;
(statearr_19023_19045[(2)] = inst_19016);

(statearr_19023_19045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19022 === (1))){
var inst_18998 = null;
var state_19021__$1 = (function (){var statearr_19024 = state_19021;
(statearr_19024[(7)] = inst_18998);

return statearr_19024;
})();
var statearr_19025_19046 = state_19021__$1;
(statearr_19025_19046[(2)] = null);

(statearr_19025_19046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19022 === (4))){
var inst_19001 = (state_19021[(8)]);
var inst_19001__$1 = (state_19021[(2)]);
var inst_19002 = (inst_19001__$1 == null);
var inst_19003 = cljs.core.not.call(null,inst_19002);
var state_19021__$1 = (function (){var statearr_19026 = state_19021;
(statearr_19026[(8)] = inst_19001__$1);

return statearr_19026;
})();
if(inst_19003){
var statearr_19027_19047 = state_19021__$1;
(statearr_19027_19047[(1)] = (5));

} else {
var statearr_19028_19048 = state_19021__$1;
(statearr_19028_19048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19022 === (6))){
var state_19021__$1 = state_19021;
var statearr_19029_19049 = state_19021__$1;
(statearr_19029_19049[(2)] = null);

(statearr_19029_19049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19022 === (3))){
var inst_19018 = (state_19021[(2)]);
var inst_19019 = cljs.core.async.close_BANG_.call(null,out);
var state_19021__$1 = (function (){var statearr_19030 = state_19021;
(statearr_19030[(9)] = inst_19018);

return statearr_19030;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19021__$1,inst_19019);
} else {
if((state_val_19022 === (2))){
var state_19021__$1 = state_19021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19021__$1,(4),ch);
} else {
if((state_val_19022 === (11))){
var inst_19001 = (state_19021[(8)]);
var inst_19010 = (state_19021[(2)]);
var inst_18998 = inst_19001;
var state_19021__$1 = (function (){var statearr_19031 = state_19021;
(statearr_19031[(10)] = inst_19010);

(statearr_19031[(7)] = inst_18998);

return statearr_19031;
})();
var statearr_19032_19050 = state_19021__$1;
(statearr_19032_19050[(2)] = null);

(statearr_19032_19050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19022 === (9))){
var inst_19001 = (state_19021[(8)]);
var state_19021__$1 = state_19021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19021__$1,(11),out,inst_19001);
} else {
if((state_val_19022 === (5))){
var inst_19001 = (state_19021[(8)]);
var inst_18998 = (state_19021[(7)]);
var inst_19005 = cljs.core._EQ_.call(null,inst_19001,inst_18998);
var state_19021__$1 = state_19021;
if(inst_19005){
var statearr_19034_19051 = state_19021__$1;
(statearr_19034_19051[(1)] = (8));

} else {
var statearr_19035_19052 = state_19021__$1;
(statearr_19035_19052[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19022 === (10))){
var inst_19013 = (state_19021[(2)]);
var state_19021__$1 = state_19021;
var statearr_19036_19053 = state_19021__$1;
(statearr_19036_19053[(2)] = inst_19013);

(statearr_19036_19053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19022 === (8))){
var inst_18998 = (state_19021[(7)]);
var tmp19033 = inst_18998;
var inst_18998__$1 = tmp19033;
var state_19021__$1 = (function (){var statearr_19037 = state_19021;
(statearr_19037[(7)] = inst_18998__$1);

return statearr_19037;
})();
var statearr_19038_19054 = state_19021__$1;
(statearr_19038_19054[(2)] = null);

(statearr_19038_19054[(1)] = (2));


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
});})(c__15444__auto___19044,out))
;
return ((function (switch__15277__auto__,c__15444__auto___19044,out){
return (function() {
var cljs$core$async$state_machine__15278__auto__ = null;
var cljs$core$async$state_machine__15278__auto____0 = (function (){
var statearr_19039 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19039[(0)] = cljs$core$async$state_machine__15278__auto__);

(statearr_19039[(1)] = (1));

return statearr_19039;
});
var cljs$core$async$state_machine__15278__auto____1 = (function (state_19021){
while(true){
var ret_value__15279__auto__ = (function (){try{while(true){
var result__15280__auto__ = switch__15277__auto__.call(null,state_19021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15280__auto__;
}
break;
}
}catch (e19040){if((e19040 instanceof Object)){
var ex__15281__auto__ = e19040;
var statearr_19041_19055 = state_19021;
(statearr_19041_19055[(5)] = ex__15281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19056 = state_19021;
state_19021 = G__19056;
continue;
} else {
return ret_value__15279__auto__;
}
break;
}
});
cljs$core$async$state_machine__15278__auto__ = function(state_19021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15278__auto____1.call(this,state_19021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15278__auto____0;
cljs$core$async$state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15278__auto____1;
return cljs$core$async$state_machine__15278__auto__;
})()
;})(switch__15277__auto__,c__15444__auto___19044,out))
})();
var state__15446__auto__ = (function (){var statearr_19042 = f__15445__auto__.call(null);
(statearr_19042[(6)] = c__15444__auto___19044);

return statearr_19042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15446__auto__);
});})(c__15444__auto___19044,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19058 = arguments.length;
switch (G__19058) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15444__auto___19124 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15444__auto___19124,out){
return (function (){
var f__15445__auto__ = (function (){var switch__15277__auto__ = ((function (c__15444__auto___19124,out){
return (function (state_19096){
var state_val_19097 = (state_19096[(1)]);
if((state_val_19097 === (7))){
var inst_19092 = (state_19096[(2)]);
var state_19096__$1 = state_19096;
var statearr_19098_19125 = state_19096__$1;
(statearr_19098_19125[(2)] = inst_19092);

(statearr_19098_19125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19097 === (1))){
var inst_19059 = (new Array(n));
var inst_19060 = inst_19059;
var inst_19061 = (0);
var state_19096__$1 = (function (){var statearr_19099 = state_19096;
(statearr_19099[(7)] = inst_19060);

(statearr_19099[(8)] = inst_19061);

return statearr_19099;
})();
var statearr_19100_19126 = state_19096__$1;
(statearr_19100_19126[(2)] = null);

(statearr_19100_19126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19097 === (4))){
var inst_19064 = (state_19096[(9)]);
var inst_19064__$1 = (state_19096[(2)]);
var inst_19065 = (inst_19064__$1 == null);
var inst_19066 = cljs.core.not.call(null,inst_19065);
var state_19096__$1 = (function (){var statearr_19101 = state_19096;
(statearr_19101[(9)] = inst_19064__$1);

return statearr_19101;
})();
if(inst_19066){
var statearr_19102_19127 = state_19096__$1;
(statearr_19102_19127[(1)] = (5));

} else {
var statearr_19103_19128 = state_19096__$1;
(statearr_19103_19128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19097 === (15))){
var inst_19086 = (state_19096[(2)]);
var state_19096__$1 = state_19096;
var statearr_19104_19129 = state_19096__$1;
(statearr_19104_19129[(2)] = inst_19086);

(statearr_19104_19129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19097 === (13))){
var state_19096__$1 = state_19096;
var statearr_19105_19130 = state_19096__$1;
(statearr_19105_19130[(2)] = null);

(statearr_19105_19130[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19097 === (6))){
var inst_19061 = (state_19096[(8)]);
var inst_19082 = (inst_19061 > (0));
var state_19096__$1 = state_19096;
if(cljs.core.truth_(inst_19082)){
var statearr_19106_19131 = state_19096__$1;
(statearr_19106_19131[(1)] = (12));

} else {
var statearr_19107_19132 = state_19096__$1;
(statearr_19107_19132[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19097 === (3))){
var inst_19094 = (state_19096[(2)]);
var state_19096__$1 = state_19096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19096__$1,inst_19094);
} else {
if((state_val_19097 === (12))){
var inst_19060 = (state_19096[(7)]);
var inst_19084 = cljs.core.vec.call(null,inst_19060);
var state_19096__$1 = state_19096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19096__$1,(15),out,inst_19084);
} else {
if((state_val_19097 === (2))){
var state_19096__$1 = state_19096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19096__$1,(4),ch);
} else {
if((state_val_19097 === (11))){
var inst_19076 = (state_19096[(2)]);
var inst_19077 = (new Array(n));
var inst_19060 = inst_19077;
var inst_19061 = (0);
var state_19096__$1 = (function (){var statearr_19108 = state_19096;
(statearr_19108[(7)] = inst_19060);

(statearr_19108[(8)] = inst_19061);

(statearr_19108[(10)] = inst_19076);

return statearr_19108;
})();
var statearr_19109_19133 = state_19096__$1;
(statearr_19109_19133[(2)] = null);

(statearr_19109_19133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19097 === (9))){
var inst_19060 = (state_19096[(7)]);
var inst_19074 = cljs.core.vec.call(null,inst_19060);
var state_19096__$1 = state_19096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19096__$1,(11),out,inst_19074);
} else {
if((state_val_19097 === (5))){
var inst_19069 = (state_19096[(11)]);
var inst_19060 = (state_19096[(7)]);
var inst_19061 = (state_19096[(8)]);
var inst_19064 = (state_19096[(9)]);
var inst_19068 = (inst_19060[inst_19061] = inst_19064);
var inst_19069__$1 = (inst_19061 + (1));
var inst_19070 = (inst_19069__$1 < n);
var state_19096__$1 = (function (){var statearr_19110 = state_19096;
(statearr_19110[(11)] = inst_19069__$1);

(statearr_19110[(12)] = inst_19068);

return statearr_19110;
})();
if(cljs.core.truth_(inst_19070)){
var statearr_19111_19134 = state_19096__$1;
(statearr_19111_19134[(1)] = (8));

} else {
var statearr_19112_19135 = state_19096__$1;
(statearr_19112_19135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19097 === (14))){
var inst_19089 = (state_19096[(2)]);
var inst_19090 = cljs.core.async.close_BANG_.call(null,out);
var state_19096__$1 = (function (){var statearr_19114 = state_19096;
(statearr_19114[(13)] = inst_19089);

return statearr_19114;
})();
var statearr_19115_19136 = state_19096__$1;
(statearr_19115_19136[(2)] = inst_19090);

(statearr_19115_19136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19097 === (10))){
var inst_19080 = (state_19096[(2)]);
var state_19096__$1 = state_19096;
var statearr_19116_19137 = state_19096__$1;
(statearr_19116_19137[(2)] = inst_19080);

(statearr_19116_19137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19097 === (8))){
var inst_19069 = (state_19096[(11)]);
var inst_19060 = (state_19096[(7)]);
var tmp19113 = inst_19060;
var inst_19060__$1 = tmp19113;
var inst_19061 = inst_19069;
var state_19096__$1 = (function (){var statearr_19117 = state_19096;
(statearr_19117[(7)] = inst_19060__$1);

(statearr_19117[(8)] = inst_19061);

return statearr_19117;
})();
var statearr_19118_19138 = state_19096__$1;
(statearr_19118_19138[(2)] = null);

(statearr_19118_19138[(1)] = (2));


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
});})(c__15444__auto___19124,out))
;
return ((function (switch__15277__auto__,c__15444__auto___19124,out){
return (function() {
var cljs$core$async$state_machine__15278__auto__ = null;
var cljs$core$async$state_machine__15278__auto____0 = (function (){
var statearr_19119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19119[(0)] = cljs$core$async$state_machine__15278__auto__);

(statearr_19119[(1)] = (1));

return statearr_19119;
});
var cljs$core$async$state_machine__15278__auto____1 = (function (state_19096){
while(true){
var ret_value__15279__auto__ = (function (){try{while(true){
var result__15280__auto__ = switch__15277__auto__.call(null,state_19096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15280__auto__;
}
break;
}
}catch (e19120){if((e19120 instanceof Object)){
var ex__15281__auto__ = e19120;
var statearr_19121_19139 = state_19096;
(statearr_19121_19139[(5)] = ex__15281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19140 = state_19096;
state_19096 = G__19140;
continue;
} else {
return ret_value__15279__auto__;
}
break;
}
});
cljs$core$async$state_machine__15278__auto__ = function(state_19096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15278__auto____1.call(this,state_19096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15278__auto____0;
cljs$core$async$state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15278__auto____1;
return cljs$core$async$state_machine__15278__auto__;
})()
;})(switch__15277__auto__,c__15444__auto___19124,out))
})();
var state__15446__auto__ = (function (){var statearr_19122 = f__15445__auto__.call(null);
(statearr_19122[(6)] = c__15444__auto___19124);

return statearr_19122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15446__auto__);
});})(c__15444__auto___19124,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19142 = arguments.length;
switch (G__19142) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15444__auto___19212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15444__auto___19212,out){
return (function (){
var f__15445__auto__ = (function (){var switch__15277__auto__ = ((function (c__15444__auto___19212,out){
return (function (state_19184){
var state_val_19185 = (state_19184[(1)]);
if((state_val_19185 === (7))){
var inst_19180 = (state_19184[(2)]);
var state_19184__$1 = state_19184;
var statearr_19186_19213 = state_19184__$1;
(statearr_19186_19213[(2)] = inst_19180);

(statearr_19186_19213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19185 === (1))){
var inst_19143 = [];
var inst_19144 = inst_19143;
var inst_19145 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19184__$1 = (function (){var statearr_19187 = state_19184;
(statearr_19187[(7)] = inst_19144);

(statearr_19187[(8)] = inst_19145);

return statearr_19187;
})();
var statearr_19188_19214 = state_19184__$1;
(statearr_19188_19214[(2)] = null);

(statearr_19188_19214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19185 === (4))){
var inst_19148 = (state_19184[(9)]);
var inst_19148__$1 = (state_19184[(2)]);
var inst_19149 = (inst_19148__$1 == null);
var inst_19150 = cljs.core.not.call(null,inst_19149);
var state_19184__$1 = (function (){var statearr_19189 = state_19184;
(statearr_19189[(9)] = inst_19148__$1);

return statearr_19189;
})();
if(inst_19150){
var statearr_19190_19215 = state_19184__$1;
(statearr_19190_19215[(1)] = (5));

} else {
var statearr_19191_19216 = state_19184__$1;
(statearr_19191_19216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19185 === (15))){
var inst_19174 = (state_19184[(2)]);
var state_19184__$1 = state_19184;
var statearr_19192_19217 = state_19184__$1;
(statearr_19192_19217[(2)] = inst_19174);

(statearr_19192_19217[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19185 === (13))){
var state_19184__$1 = state_19184;
var statearr_19193_19218 = state_19184__$1;
(statearr_19193_19218[(2)] = null);

(statearr_19193_19218[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19185 === (6))){
var inst_19144 = (state_19184[(7)]);
var inst_19169 = inst_19144.length;
var inst_19170 = (inst_19169 > (0));
var state_19184__$1 = state_19184;
if(cljs.core.truth_(inst_19170)){
var statearr_19194_19219 = state_19184__$1;
(statearr_19194_19219[(1)] = (12));

} else {
var statearr_19195_19220 = state_19184__$1;
(statearr_19195_19220[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19185 === (3))){
var inst_19182 = (state_19184[(2)]);
var state_19184__$1 = state_19184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19184__$1,inst_19182);
} else {
if((state_val_19185 === (12))){
var inst_19144 = (state_19184[(7)]);
var inst_19172 = cljs.core.vec.call(null,inst_19144);
var state_19184__$1 = state_19184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19184__$1,(15),out,inst_19172);
} else {
if((state_val_19185 === (2))){
var state_19184__$1 = state_19184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19184__$1,(4),ch);
} else {
if((state_val_19185 === (11))){
var inst_19148 = (state_19184[(9)]);
var inst_19152 = (state_19184[(10)]);
var inst_19162 = (state_19184[(2)]);
var inst_19163 = [];
var inst_19164 = inst_19163.push(inst_19148);
var inst_19144 = inst_19163;
var inst_19145 = inst_19152;
var state_19184__$1 = (function (){var statearr_19196 = state_19184;
(statearr_19196[(11)] = inst_19162);

(statearr_19196[(7)] = inst_19144);

(statearr_19196[(12)] = inst_19164);

(statearr_19196[(8)] = inst_19145);

return statearr_19196;
})();
var statearr_19197_19221 = state_19184__$1;
(statearr_19197_19221[(2)] = null);

(statearr_19197_19221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19185 === (9))){
var inst_19144 = (state_19184[(7)]);
var inst_19160 = cljs.core.vec.call(null,inst_19144);
var state_19184__$1 = state_19184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19184__$1,(11),out,inst_19160);
} else {
if((state_val_19185 === (5))){
var inst_19148 = (state_19184[(9)]);
var inst_19152 = (state_19184[(10)]);
var inst_19145 = (state_19184[(8)]);
var inst_19152__$1 = f.call(null,inst_19148);
var inst_19153 = cljs.core._EQ_.call(null,inst_19152__$1,inst_19145);
var inst_19154 = cljs.core.keyword_identical_QMARK_.call(null,inst_19145,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19155 = ((inst_19153) || (inst_19154));
var state_19184__$1 = (function (){var statearr_19198 = state_19184;
(statearr_19198[(10)] = inst_19152__$1);

return statearr_19198;
})();
if(cljs.core.truth_(inst_19155)){
var statearr_19199_19222 = state_19184__$1;
(statearr_19199_19222[(1)] = (8));

} else {
var statearr_19200_19223 = state_19184__$1;
(statearr_19200_19223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19185 === (14))){
var inst_19177 = (state_19184[(2)]);
var inst_19178 = cljs.core.async.close_BANG_.call(null,out);
var state_19184__$1 = (function (){var statearr_19202 = state_19184;
(statearr_19202[(13)] = inst_19177);

return statearr_19202;
})();
var statearr_19203_19224 = state_19184__$1;
(statearr_19203_19224[(2)] = inst_19178);

(statearr_19203_19224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19185 === (10))){
var inst_19167 = (state_19184[(2)]);
var state_19184__$1 = state_19184;
var statearr_19204_19225 = state_19184__$1;
(statearr_19204_19225[(2)] = inst_19167);

(statearr_19204_19225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19185 === (8))){
var inst_19144 = (state_19184[(7)]);
var inst_19148 = (state_19184[(9)]);
var inst_19152 = (state_19184[(10)]);
var inst_19157 = inst_19144.push(inst_19148);
var tmp19201 = inst_19144;
var inst_19144__$1 = tmp19201;
var inst_19145 = inst_19152;
var state_19184__$1 = (function (){var statearr_19205 = state_19184;
(statearr_19205[(7)] = inst_19144__$1);

(statearr_19205[(14)] = inst_19157);

(statearr_19205[(8)] = inst_19145);

return statearr_19205;
})();
var statearr_19206_19226 = state_19184__$1;
(statearr_19206_19226[(2)] = null);

(statearr_19206_19226[(1)] = (2));


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
});})(c__15444__auto___19212,out))
;
return ((function (switch__15277__auto__,c__15444__auto___19212,out){
return (function() {
var cljs$core$async$state_machine__15278__auto__ = null;
var cljs$core$async$state_machine__15278__auto____0 = (function (){
var statearr_19207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19207[(0)] = cljs$core$async$state_machine__15278__auto__);

(statearr_19207[(1)] = (1));

return statearr_19207;
});
var cljs$core$async$state_machine__15278__auto____1 = (function (state_19184){
while(true){
var ret_value__15279__auto__ = (function (){try{while(true){
var result__15280__auto__ = switch__15277__auto__.call(null,state_19184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15280__auto__;
}
break;
}
}catch (e19208){if((e19208 instanceof Object)){
var ex__15281__auto__ = e19208;
var statearr_19209_19227 = state_19184;
(statearr_19209_19227[(5)] = ex__15281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19228 = state_19184;
state_19184 = G__19228;
continue;
} else {
return ret_value__15279__auto__;
}
break;
}
});
cljs$core$async$state_machine__15278__auto__ = function(state_19184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15278__auto____1.call(this,state_19184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15278__auto____0;
cljs$core$async$state_machine__15278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15278__auto____1;
return cljs$core$async$state_machine__15278__auto__;
})()
;})(switch__15277__auto__,c__15444__auto___19212,out))
})();
var state__15446__auto__ = (function (){var statearr_19210 = f__15445__auto__.call(null);
(statearr_19210[(6)] = c__15444__auto___19212);

return statearr_19210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15446__auto__);
});})(c__15444__auto___19212,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
