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
var G__32716 = arguments.length;
switch (G__32716) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32717 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32717 = (function (f,blockable,meta32718){
this.f = f;
this.blockable = blockable;
this.meta32718 = meta32718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32719,meta32718__$1){
var self__ = this;
var _32719__$1 = this;
return (new cljs.core.async.t_cljs$core$async32717(self__.f,self__.blockable,meta32718__$1));
});

cljs.core.async.t_cljs$core$async32717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32719){
var self__ = this;
var _32719__$1 = this;
return self__.meta32718;
});

cljs.core.async.t_cljs$core$async32717.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32717.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32717.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32717.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32717.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32718","meta32718",-53642644,null)], null);
});

cljs.core.async.t_cljs$core$async32717.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32717";

cljs.core.async.t_cljs$core$async32717.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32717");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32717.
 */
cljs.core.async.__GT_t_cljs$core$async32717 = (function cljs$core$async$__GT_t_cljs$core$async32717(f__$1,blockable__$1,meta32718){
return (new cljs.core.async.t_cljs$core$async32717(f__$1,blockable__$1,meta32718));
});

}

return (new cljs.core.async.t_cljs$core$async32717(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32723 = arguments.length;
switch (G__32723) {
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
var G__32726 = arguments.length;
switch (G__32726) {
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
var G__32729 = arguments.length;
switch (G__32729) {
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
var val_32731 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32731);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32731,ret){
return (function (){
return fn1.call(null,val_32731);
});})(val_32731,ret))
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
var G__32733 = arguments.length;
switch (G__32733) {
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
var n__4518__auto___32735 = n;
var x_32736 = (0);
while(true){
if((x_32736 < n__4518__auto___32735)){
(a[x_32736] = (0));

var G__32737 = (x_32736 + (1));
x_32736 = G__32737;
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

var G__32738 = (i + (1));
i = G__32738;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32739 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32739 = (function (flag,meta32740){
this.flag = flag;
this.meta32740 = meta32740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32741,meta32740__$1){
var self__ = this;
var _32741__$1 = this;
return (new cljs.core.async.t_cljs$core$async32739(self__.flag,meta32740__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32739.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32741){
var self__ = this;
var _32741__$1 = this;
return self__.meta32740;
});})(flag))
;

cljs.core.async.t_cljs$core$async32739.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32739.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32739.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32739.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32739.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32740","meta32740",-781246219,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32739.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32739";

cljs.core.async.t_cljs$core$async32739.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32739");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32739.
 */
cljs.core.async.__GT_t_cljs$core$async32739 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32739(flag__$1,meta32740){
return (new cljs.core.async.t_cljs$core$async32739(flag__$1,meta32740));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32739(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32742 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32742 = (function (flag,cb,meta32743){
this.flag = flag;
this.cb = cb;
this.meta32743 = meta32743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32744,meta32743__$1){
var self__ = this;
var _32744__$1 = this;
return (new cljs.core.async.t_cljs$core$async32742(self__.flag,self__.cb,meta32743__$1));
});

cljs.core.async.t_cljs$core$async32742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32744){
var self__ = this;
var _32744__$1 = this;
return self__.meta32743;
});

cljs.core.async.t_cljs$core$async32742.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32742.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32742.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32742.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32742.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32743","meta32743",-1624039086,null)], null);
});

cljs.core.async.t_cljs$core$async32742.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32742.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32742";

cljs.core.async.t_cljs$core$async32742.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32742");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32742.
 */
cljs.core.async.__GT_t_cljs$core$async32742 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32742(flag__$1,cb__$1,meta32743){
return (new cljs.core.async.t_cljs$core$async32742(flag__$1,cb__$1,meta32743));
});

}

return (new cljs.core.async.t_cljs$core$async32742(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32745_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32745_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32746_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32746_SHARP_,port], null));
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
var G__32747 = (i + (1));
i = G__32747;
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
var len__4641__auto___32753 = arguments.length;
var i__4642__auto___32754 = (0);
while(true){
if((i__4642__auto___32754 < len__4641__auto___32753)){
args__4647__auto__.push((arguments[i__4642__auto___32754]));

var G__32755 = (i__4642__auto___32754 + (1));
i__4642__auto___32754 = G__32755;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32750){
var map__32751 = p__32750;
var map__32751__$1 = (((((!((map__32751 == null))))?(((((map__32751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32751):map__32751);
var opts = map__32751__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32748){
var G__32749 = cljs.core.first.call(null,seq32748);
var seq32748__$1 = cljs.core.next.call(null,seq32748);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32749,seq32748__$1);
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
var G__32757 = arguments.length;
switch (G__32757) {
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
var c__30792__auto___32803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___32803){
return (function (){
var f__30793__auto__ = (function (){var switch__30625__auto__ = ((function (c__30792__auto___32803){
return (function (state_32781){
var state_val_32782 = (state_32781[(1)]);
if((state_val_32782 === (7))){
var inst_32777 = (state_32781[(2)]);
var state_32781__$1 = state_32781;
var statearr_32783_32804 = state_32781__$1;
(statearr_32783_32804[(2)] = inst_32777);

(statearr_32783_32804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32782 === (1))){
var state_32781__$1 = state_32781;
var statearr_32784_32805 = state_32781__$1;
(statearr_32784_32805[(2)] = null);

(statearr_32784_32805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32782 === (4))){
var inst_32760 = (state_32781[(7)]);
var inst_32760__$1 = (state_32781[(2)]);
var inst_32761 = (inst_32760__$1 == null);
var state_32781__$1 = (function (){var statearr_32785 = state_32781;
(statearr_32785[(7)] = inst_32760__$1);

return statearr_32785;
})();
if(cljs.core.truth_(inst_32761)){
var statearr_32786_32806 = state_32781__$1;
(statearr_32786_32806[(1)] = (5));

} else {
var statearr_32787_32807 = state_32781__$1;
(statearr_32787_32807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32782 === (13))){
var state_32781__$1 = state_32781;
var statearr_32788_32808 = state_32781__$1;
(statearr_32788_32808[(2)] = null);

(statearr_32788_32808[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32782 === (6))){
var inst_32760 = (state_32781[(7)]);
var state_32781__$1 = state_32781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32781__$1,(11),to,inst_32760);
} else {
if((state_val_32782 === (3))){
var inst_32779 = (state_32781[(2)]);
var state_32781__$1 = state_32781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32781__$1,inst_32779);
} else {
if((state_val_32782 === (12))){
var state_32781__$1 = state_32781;
var statearr_32789_32809 = state_32781__$1;
(statearr_32789_32809[(2)] = null);

(statearr_32789_32809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32782 === (2))){
var state_32781__$1 = state_32781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32781__$1,(4),from);
} else {
if((state_val_32782 === (11))){
var inst_32770 = (state_32781[(2)]);
var state_32781__$1 = state_32781;
if(cljs.core.truth_(inst_32770)){
var statearr_32790_32810 = state_32781__$1;
(statearr_32790_32810[(1)] = (12));

} else {
var statearr_32791_32811 = state_32781__$1;
(statearr_32791_32811[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32782 === (9))){
var state_32781__$1 = state_32781;
var statearr_32792_32812 = state_32781__$1;
(statearr_32792_32812[(2)] = null);

(statearr_32792_32812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32782 === (5))){
var state_32781__$1 = state_32781;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32793_32813 = state_32781__$1;
(statearr_32793_32813[(1)] = (8));

} else {
var statearr_32794_32814 = state_32781__$1;
(statearr_32794_32814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32782 === (14))){
var inst_32775 = (state_32781[(2)]);
var state_32781__$1 = state_32781;
var statearr_32795_32815 = state_32781__$1;
(statearr_32795_32815[(2)] = inst_32775);

(statearr_32795_32815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32782 === (10))){
var inst_32767 = (state_32781[(2)]);
var state_32781__$1 = state_32781;
var statearr_32796_32816 = state_32781__$1;
(statearr_32796_32816[(2)] = inst_32767);

(statearr_32796_32816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32782 === (8))){
var inst_32764 = cljs.core.async.close_BANG_.call(null,to);
var state_32781__$1 = state_32781;
var statearr_32797_32817 = state_32781__$1;
(statearr_32797_32817[(2)] = inst_32764);

(statearr_32797_32817[(1)] = (10));


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
});})(c__30792__auto___32803))
;
return ((function (switch__30625__auto__,c__30792__auto___32803){
return (function() {
var cljs$core$async$state_machine__30626__auto__ = null;
var cljs$core$async$state_machine__30626__auto____0 = (function (){
var statearr_32798 = [null,null,null,null,null,null,null,null];
(statearr_32798[(0)] = cljs$core$async$state_machine__30626__auto__);

(statearr_32798[(1)] = (1));

return statearr_32798;
});
var cljs$core$async$state_machine__30626__auto____1 = (function (state_32781){
while(true){
var ret_value__30627__auto__ = (function (){try{while(true){
var result__30628__auto__ = switch__30625__auto__.call(null,state_32781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30628__auto__;
}
break;
}
}catch (e32799){if((e32799 instanceof Object)){
var ex__30629__auto__ = e32799;
var statearr_32800_32818 = state_32781;
(statearr_32800_32818[(5)] = ex__30629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32819 = state_32781;
state_32781 = G__32819;
continue;
} else {
return ret_value__30627__auto__;
}
break;
}
});
cljs$core$async$state_machine__30626__auto__ = function(state_32781){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30626__auto____1.call(this,state_32781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30626__auto____0;
cljs$core$async$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30626__auto____1;
return cljs$core$async$state_machine__30626__auto__;
})()
;})(switch__30625__auto__,c__30792__auto___32803))
})();
var state__30794__auto__ = (function (){var statearr_32801 = f__30793__auto__.call(null);
(statearr_32801[(6)] = c__30792__auto___32803);

return statearr_32801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___32803))
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
return (function (p__32820){
var vec__32821 = p__32820;
var v = cljs.core.nth.call(null,vec__32821,(0),null);
var p = cljs.core.nth.call(null,vec__32821,(1),null);
var job = vec__32821;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30792__auto___32992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___32992,res,vec__32821,v,p,job,jobs,results){
return (function (){
var f__30793__auto__ = (function (){var switch__30625__auto__ = ((function (c__30792__auto___32992,res,vec__32821,v,p,job,jobs,results){
return (function (state_32828){
var state_val_32829 = (state_32828[(1)]);
if((state_val_32829 === (1))){
var state_32828__$1 = state_32828;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32828__$1,(2),res,v);
} else {
if((state_val_32829 === (2))){
var inst_32825 = (state_32828[(2)]);
var inst_32826 = cljs.core.async.close_BANG_.call(null,res);
var state_32828__$1 = (function (){var statearr_32830 = state_32828;
(statearr_32830[(7)] = inst_32825);

return statearr_32830;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32828__$1,inst_32826);
} else {
return null;
}
}
});})(c__30792__auto___32992,res,vec__32821,v,p,job,jobs,results))
;
return ((function (switch__30625__auto__,c__30792__auto___32992,res,vec__32821,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____0 = (function (){
var statearr_32831 = [null,null,null,null,null,null,null,null];
(statearr_32831[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__);

(statearr_32831[(1)] = (1));

return statearr_32831;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____1 = (function (state_32828){
while(true){
var ret_value__30627__auto__ = (function (){try{while(true){
var result__30628__auto__ = switch__30625__auto__.call(null,state_32828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30628__auto__;
}
break;
}
}catch (e32832){if((e32832 instanceof Object)){
var ex__30629__auto__ = e32832;
var statearr_32833_32993 = state_32828;
(statearr_32833_32993[(5)] = ex__30629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32994 = state_32828;
state_32828 = G__32994;
continue;
} else {
return ret_value__30627__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__ = function(state_32828){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____1.call(this,state_32828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__;
})()
;})(switch__30625__auto__,c__30792__auto___32992,res,vec__32821,v,p,job,jobs,results))
})();
var state__30794__auto__ = (function (){var statearr_32834 = f__30793__auto__.call(null);
(statearr_32834[(6)] = c__30792__auto___32992);

return statearr_32834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___32992,res,vec__32821,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32835){
var vec__32836 = p__32835;
var v = cljs.core.nth.call(null,vec__32836,(0),null);
var p = cljs.core.nth.call(null,vec__32836,(1),null);
var job = vec__32836;
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
var n__4518__auto___32995 = n;
var __32996 = (0);
while(true){
if((__32996 < n__4518__auto___32995)){
var G__32839_32997 = type;
var G__32839_32998__$1 = (((G__32839_32997 instanceof cljs.core.Keyword))?G__32839_32997.fqn:null);
switch (G__32839_32998__$1) {
case "compute":
var c__30792__auto___33000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32996,c__30792__auto___33000,G__32839_32997,G__32839_32998__$1,n__4518__auto___32995,jobs,results,process,async){
return (function (){
var f__30793__auto__ = (function (){var switch__30625__auto__ = ((function (__32996,c__30792__auto___33000,G__32839_32997,G__32839_32998__$1,n__4518__auto___32995,jobs,results,process,async){
return (function (state_32852){
var state_val_32853 = (state_32852[(1)]);
if((state_val_32853 === (1))){
var state_32852__$1 = state_32852;
var statearr_32854_33001 = state_32852__$1;
(statearr_32854_33001[(2)] = null);

(statearr_32854_33001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32853 === (2))){
var state_32852__$1 = state_32852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32852__$1,(4),jobs);
} else {
if((state_val_32853 === (3))){
var inst_32850 = (state_32852[(2)]);
var state_32852__$1 = state_32852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32852__$1,inst_32850);
} else {
if((state_val_32853 === (4))){
var inst_32842 = (state_32852[(2)]);
var inst_32843 = process.call(null,inst_32842);
var state_32852__$1 = state_32852;
if(cljs.core.truth_(inst_32843)){
var statearr_32855_33002 = state_32852__$1;
(statearr_32855_33002[(1)] = (5));

} else {
var statearr_32856_33003 = state_32852__$1;
(statearr_32856_33003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32853 === (5))){
var state_32852__$1 = state_32852;
var statearr_32857_33004 = state_32852__$1;
(statearr_32857_33004[(2)] = null);

(statearr_32857_33004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32853 === (6))){
var state_32852__$1 = state_32852;
var statearr_32858_33005 = state_32852__$1;
(statearr_32858_33005[(2)] = null);

(statearr_32858_33005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32853 === (7))){
var inst_32848 = (state_32852[(2)]);
var state_32852__$1 = state_32852;
var statearr_32859_33006 = state_32852__$1;
(statearr_32859_33006[(2)] = inst_32848);

(statearr_32859_33006[(1)] = (3));


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
});})(__32996,c__30792__auto___33000,G__32839_32997,G__32839_32998__$1,n__4518__auto___32995,jobs,results,process,async))
;
return ((function (__32996,switch__30625__auto__,c__30792__auto___33000,G__32839_32997,G__32839_32998__$1,n__4518__auto___32995,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____0 = (function (){
var statearr_32860 = [null,null,null,null,null,null,null];
(statearr_32860[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__);

(statearr_32860[(1)] = (1));

return statearr_32860;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____1 = (function (state_32852){
while(true){
var ret_value__30627__auto__ = (function (){try{while(true){
var result__30628__auto__ = switch__30625__auto__.call(null,state_32852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30628__auto__;
}
break;
}
}catch (e32861){if((e32861 instanceof Object)){
var ex__30629__auto__ = e32861;
var statearr_32862_33007 = state_32852;
(statearr_32862_33007[(5)] = ex__30629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33008 = state_32852;
state_32852 = G__33008;
continue;
} else {
return ret_value__30627__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__ = function(state_32852){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____1.call(this,state_32852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__;
})()
;})(__32996,switch__30625__auto__,c__30792__auto___33000,G__32839_32997,G__32839_32998__$1,n__4518__auto___32995,jobs,results,process,async))
})();
var state__30794__auto__ = (function (){var statearr_32863 = f__30793__auto__.call(null);
(statearr_32863[(6)] = c__30792__auto___33000);

return statearr_32863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(__32996,c__30792__auto___33000,G__32839_32997,G__32839_32998__$1,n__4518__auto___32995,jobs,results,process,async))
);


break;
case "async":
var c__30792__auto___33009 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32996,c__30792__auto___33009,G__32839_32997,G__32839_32998__$1,n__4518__auto___32995,jobs,results,process,async){
return (function (){
var f__30793__auto__ = (function (){var switch__30625__auto__ = ((function (__32996,c__30792__auto___33009,G__32839_32997,G__32839_32998__$1,n__4518__auto___32995,jobs,results,process,async){
return (function (state_32876){
var state_val_32877 = (state_32876[(1)]);
if((state_val_32877 === (1))){
var state_32876__$1 = state_32876;
var statearr_32878_33010 = state_32876__$1;
(statearr_32878_33010[(2)] = null);

(statearr_32878_33010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32877 === (2))){
var state_32876__$1 = state_32876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32876__$1,(4),jobs);
} else {
if((state_val_32877 === (3))){
var inst_32874 = (state_32876[(2)]);
var state_32876__$1 = state_32876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32876__$1,inst_32874);
} else {
if((state_val_32877 === (4))){
var inst_32866 = (state_32876[(2)]);
var inst_32867 = async.call(null,inst_32866);
var state_32876__$1 = state_32876;
if(cljs.core.truth_(inst_32867)){
var statearr_32879_33011 = state_32876__$1;
(statearr_32879_33011[(1)] = (5));

} else {
var statearr_32880_33012 = state_32876__$1;
(statearr_32880_33012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32877 === (5))){
var state_32876__$1 = state_32876;
var statearr_32881_33013 = state_32876__$1;
(statearr_32881_33013[(2)] = null);

(statearr_32881_33013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32877 === (6))){
var state_32876__$1 = state_32876;
var statearr_32882_33014 = state_32876__$1;
(statearr_32882_33014[(2)] = null);

(statearr_32882_33014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32877 === (7))){
var inst_32872 = (state_32876[(2)]);
var state_32876__$1 = state_32876;
var statearr_32883_33015 = state_32876__$1;
(statearr_32883_33015[(2)] = inst_32872);

(statearr_32883_33015[(1)] = (3));


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
});})(__32996,c__30792__auto___33009,G__32839_32997,G__32839_32998__$1,n__4518__auto___32995,jobs,results,process,async))
;
return ((function (__32996,switch__30625__auto__,c__30792__auto___33009,G__32839_32997,G__32839_32998__$1,n__4518__auto___32995,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____0 = (function (){
var statearr_32884 = [null,null,null,null,null,null,null];
(statearr_32884[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__);

(statearr_32884[(1)] = (1));

return statearr_32884;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____1 = (function (state_32876){
while(true){
var ret_value__30627__auto__ = (function (){try{while(true){
var result__30628__auto__ = switch__30625__auto__.call(null,state_32876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30628__auto__;
}
break;
}
}catch (e32885){if((e32885 instanceof Object)){
var ex__30629__auto__ = e32885;
var statearr_32886_33016 = state_32876;
(statearr_32886_33016[(5)] = ex__30629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33017 = state_32876;
state_32876 = G__33017;
continue;
} else {
return ret_value__30627__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__ = function(state_32876){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____1.call(this,state_32876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__;
})()
;})(__32996,switch__30625__auto__,c__30792__auto___33009,G__32839_32997,G__32839_32998__$1,n__4518__auto___32995,jobs,results,process,async))
})();
var state__30794__auto__ = (function (){var statearr_32887 = f__30793__auto__.call(null);
(statearr_32887[(6)] = c__30792__auto___33009);

return statearr_32887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(__32996,c__30792__auto___33009,G__32839_32997,G__32839_32998__$1,n__4518__auto___32995,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32839_32998__$1)].join('')));

}

var G__33018 = (__32996 + (1));
__32996 = G__33018;
continue;
} else {
}
break;
}

var c__30792__auto___33019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___33019,jobs,results,process,async){
return (function (){
var f__30793__auto__ = (function (){var switch__30625__auto__ = ((function (c__30792__auto___33019,jobs,results,process,async){
return (function (state_32909){
var state_val_32910 = (state_32909[(1)]);
if((state_val_32910 === (7))){
var inst_32905 = (state_32909[(2)]);
var state_32909__$1 = state_32909;
var statearr_32911_33020 = state_32909__$1;
(statearr_32911_33020[(2)] = inst_32905);

(statearr_32911_33020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32910 === (1))){
var state_32909__$1 = state_32909;
var statearr_32912_33021 = state_32909__$1;
(statearr_32912_33021[(2)] = null);

(statearr_32912_33021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32910 === (4))){
var inst_32890 = (state_32909[(7)]);
var inst_32890__$1 = (state_32909[(2)]);
var inst_32891 = (inst_32890__$1 == null);
var state_32909__$1 = (function (){var statearr_32913 = state_32909;
(statearr_32913[(7)] = inst_32890__$1);

return statearr_32913;
})();
if(cljs.core.truth_(inst_32891)){
var statearr_32914_33022 = state_32909__$1;
(statearr_32914_33022[(1)] = (5));

} else {
var statearr_32915_33023 = state_32909__$1;
(statearr_32915_33023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32910 === (6))){
var inst_32890 = (state_32909[(7)]);
var inst_32895 = (state_32909[(8)]);
var inst_32895__$1 = cljs.core.async.chan.call(null,(1));
var inst_32896 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32897 = [inst_32890,inst_32895__$1];
var inst_32898 = (new cljs.core.PersistentVector(null,2,(5),inst_32896,inst_32897,null));
var state_32909__$1 = (function (){var statearr_32916 = state_32909;
(statearr_32916[(8)] = inst_32895__$1);

return statearr_32916;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32909__$1,(8),jobs,inst_32898);
} else {
if((state_val_32910 === (3))){
var inst_32907 = (state_32909[(2)]);
var state_32909__$1 = state_32909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32909__$1,inst_32907);
} else {
if((state_val_32910 === (2))){
var state_32909__$1 = state_32909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32909__$1,(4),from);
} else {
if((state_val_32910 === (9))){
var inst_32902 = (state_32909[(2)]);
var state_32909__$1 = (function (){var statearr_32917 = state_32909;
(statearr_32917[(9)] = inst_32902);

return statearr_32917;
})();
var statearr_32918_33024 = state_32909__$1;
(statearr_32918_33024[(2)] = null);

(statearr_32918_33024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32910 === (5))){
var inst_32893 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32909__$1 = state_32909;
var statearr_32919_33025 = state_32909__$1;
(statearr_32919_33025[(2)] = inst_32893);

(statearr_32919_33025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32910 === (8))){
var inst_32895 = (state_32909[(8)]);
var inst_32900 = (state_32909[(2)]);
var state_32909__$1 = (function (){var statearr_32920 = state_32909;
(statearr_32920[(10)] = inst_32900);

return statearr_32920;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32909__$1,(9),results,inst_32895);
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
});})(c__30792__auto___33019,jobs,results,process,async))
;
return ((function (switch__30625__auto__,c__30792__auto___33019,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____0 = (function (){
var statearr_32921 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32921[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__);

(statearr_32921[(1)] = (1));

return statearr_32921;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____1 = (function (state_32909){
while(true){
var ret_value__30627__auto__ = (function (){try{while(true){
var result__30628__auto__ = switch__30625__auto__.call(null,state_32909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30628__auto__;
}
break;
}
}catch (e32922){if((e32922 instanceof Object)){
var ex__30629__auto__ = e32922;
var statearr_32923_33026 = state_32909;
(statearr_32923_33026[(5)] = ex__30629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33027 = state_32909;
state_32909 = G__33027;
continue;
} else {
return ret_value__30627__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__ = function(state_32909){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____1.call(this,state_32909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__;
})()
;})(switch__30625__auto__,c__30792__auto___33019,jobs,results,process,async))
})();
var state__30794__auto__ = (function (){var statearr_32924 = f__30793__auto__.call(null);
(statearr_32924[(6)] = c__30792__auto___33019);

return statearr_32924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___33019,jobs,results,process,async))
);


var c__30792__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto__,jobs,results,process,async){
return (function (){
var f__30793__auto__ = (function (){var switch__30625__auto__ = ((function (c__30792__auto__,jobs,results,process,async){
return (function (state_32962){
var state_val_32963 = (state_32962[(1)]);
if((state_val_32963 === (7))){
var inst_32958 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
var statearr_32964_33028 = state_32962__$1;
(statearr_32964_33028[(2)] = inst_32958);

(statearr_32964_33028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (20))){
var state_32962__$1 = state_32962;
var statearr_32965_33029 = state_32962__$1;
(statearr_32965_33029[(2)] = null);

(statearr_32965_33029[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (1))){
var state_32962__$1 = state_32962;
var statearr_32966_33030 = state_32962__$1;
(statearr_32966_33030[(2)] = null);

(statearr_32966_33030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (4))){
var inst_32927 = (state_32962[(7)]);
var inst_32927__$1 = (state_32962[(2)]);
var inst_32928 = (inst_32927__$1 == null);
var state_32962__$1 = (function (){var statearr_32967 = state_32962;
(statearr_32967[(7)] = inst_32927__$1);

return statearr_32967;
})();
if(cljs.core.truth_(inst_32928)){
var statearr_32968_33031 = state_32962__$1;
(statearr_32968_33031[(1)] = (5));

} else {
var statearr_32969_33032 = state_32962__$1;
(statearr_32969_33032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (15))){
var inst_32940 = (state_32962[(8)]);
var state_32962__$1 = state_32962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32962__$1,(18),to,inst_32940);
} else {
if((state_val_32963 === (21))){
var inst_32953 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
var statearr_32970_33033 = state_32962__$1;
(statearr_32970_33033[(2)] = inst_32953);

(statearr_32970_33033[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (13))){
var inst_32955 = (state_32962[(2)]);
var state_32962__$1 = (function (){var statearr_32971 = state_32962;
(statearr_32971[(9)] = inst_32955);

return statearr_32971;
})();
var statearr_32972_33034 = state_32962__$1;
(statearr_32972_33034[(2)] = null);

(statearr_32972_33034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (6))){
var inst_32927 = (state_32962[(7)]);
var state_32962__$1 = state_32962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32962__$1,(11),inst_32927);
} else {
if((state_val_32963 === (17))){
var inst_32948 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
if(cljs.core.truth_(inst_32948)){
var statearr_32973_33035 = state_32962__$1;
(statearr_32973_33035[(1)] = (19));

} else {
var statearr_32974_33036 = state_32962__$1;
(statearr_32974_33036[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (3))){
var inst_32960 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32962__$1,inst_32960);
} else {
if((state_val_32963 === (12))){
var inst_32937 = (state_32962[(10)]);
var state_32962__$1 = state_32962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32962__$1,(14),inst_32937);
} else {
if((state_val_32963 === (2))){
var state_32962__$1 = state_32962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32962__$1,(4),results);
} else {
if((state_val_32963 === (19))){
var state_32962__$1 = state_32962;
var statearr_32975_33037 = state_32962__$1;
(statearr_32975_33037[(2)] = null);

(statearr_32975_33037[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (11))){
var inst_32937 = (state_32962[(2)]);
var state_32962__$1 = (function (){var statearr_32976 = state_32962;
(statearr_32976[(10)] = inst_32937);

return statearr_32976;
})();
var statearr_32977_33038 = state_32962__$1;
(statearr_32977_33038[(2)] = null);

(statearr_32977_33038[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (9))){
var state_32962__$1 = state_32962;
var statearr_32978_33039 = state_32962__$1;
(statearr_32978_33039[(2)] = null);

(statearr_32978_33039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (5))){
var state_32962__$1 = state_32962;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32979_33040 = state_32962__$1;
(statearr_32979_33040[(1)] = (8));

} else {
var statearr_32980_33041 = state_32962__$1;
(statearr_32980_33041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (14))){
var inst_32942 = (state_32962[(11)]);
var inst_32940 = (state_32962[(8)]);
var inst_32940__$1 = (state_32962[(2)]);
var inst_32941 = (inst_32940__$1 == null);
var inst_32942__$1 = cljs.core.not.call(null,inst_32941);
var state_32962__$1 = (function (){var statearr_32981 = state_32962;
(statearr_32981[(11)] = inst_32942__$1);

(statearr_32981[(8)] = inst_32940__$1);

return statearr_32981;
})();
if(inst_32942__$1){
var statearr_32982_33042 = state_32962__$1;
(statearr_32982_33042[(1)] = (15));

} else {
var statearr_32983_33043 = state_32962__$1;
(statearr_32983_33043[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (16))){
var inst_32942 = (state_32962[(11)]);
var state_32962__$1 = state_32962;
var statearr_32984_33044 = state_32962__$1;
(statearr_32984_33044[(2)] = inst_32942);

(statearr_32984_33044[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (10))){
var inst_32934 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
var statearr_32985_33045 = state_32962__$1;
(statearr_32985_33045[(2)] = inst_32934);

(statearr_32985_33045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (18))){
var inst_32945 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
var statearr_32986_33046 = state_32962__$1;
(statearr_32986_33046[(2)] = inst_32945);

(statearr_32986_33046[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (8))){
var inst_32931 = cljs.core.async.close_BANG_.call(null,to);
var state_32962__$1 = state_32962;
var statearr_32987_33047 = state_32962__$1;
(statearr_32987_33047[(2)] = inst_32931);

(statearr_32987_33047[(1)] = (10));


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
});})(c__30792__auto__,jobs,results,process,async))
;
return ((function (switch__30625__auto__,c__30792__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____0 = (function (){
var statearr_32988 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32988[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__);

(statearr_32988[(1)] = (1));

return statearr_32988;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____1 = (function (state_32962){
while(true){
var ret_value__30627__auto__ = (function (){try{while(true){
var result__30628__auto__ = switch__30625__auto__.call(null,state_32962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30628__auto__;
}
break;
}
}catch (e32989){if((e32989 instanceof Object)){
var ex__30629__auto__ = e32989;
var statearr_32990_33048 = state_32962;
(statearr_32990_33048[(5)] = ex__30629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33049 = state_32962;
state_32962 = G__33049;
continue;
} else {
return ret_value__30627__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__ = function(state_32962){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____1.call(this,state_32962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30626__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30626__auto__;
})()
;})(switch__30625__auto__,c__30792__auto__,jobs,results,process,async))
})();
var state__30794__auto__ = (function (){var statearr_32991 = f__30793__auto__.call(null);
(statearr_32991[(6)] = c__30792__auto__);

return statearr_32991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto__,jobs,results,process,async))
);

return c__30792__auto__;
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
var G__33051 = arguments.length;
switch (G__33051) {
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
var G__33054 = arguments.length;
switch (G__33054) {
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
var G__33057 = arguments.length;
switch (G__33057) {
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
var c__30792__auto___33106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___33106,tc,fc){
return (function (){
var f__30793__auto__ = (function (){var switch__30625__auto__ = ((function (c__30792__auto___33106,tc,fc){
return (function (state_33083){
var state_val_33084 = (state_33083[(1)]);
if((state_val_33084 === (7))){
var inst_33079 = (state_33083[(2)]);
var state_33083__$1 = state_33083;
var statearr_33085_33107 = state_33083__$1;
(statearr_33085_33107[(2)] = inst_33079);

(statearr_33085_33107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (1))){
var state_33083__$1 = state_33083;
var statearr_33086_33108 = state_33083__$1;
(statearr_33086_33108[(2)] = null);

(statearr_33086_33108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (4))){
var inst_33060 = (state_33083[(7)]);
var inst_33060__$1 = (state_33083[(2)]);
var inst_33061 = (inst_33060__$1 == null);
var state_33083__$1 = (function (){var statearr_33087 = state_33083;
(statearr_33087[(7)] = inst_33060__$1);

return statearr_33087;
})();
if(cljs.core.truth_(inst_33061)){
var statearr_33088_33109 = state_33083__$1;
(statearr_33088_33109[(1)] = (5));

} else {
var statearr_33089_33110 = state_33083__$1;
(statearr_33089_33110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (13))){
var state_33083__$1 = state_33083;
var statearr_33090_33111 = state_33083__$1;
(statearr_33090_33111[(2)] = null);

(statearr_33090_33111[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (6))){
var inst_33060 = (state_33083[(7)]);
var inst_33066 = p.call(null,inst_33060);
var state_33083__$1 = state_33083;
if(cljs.core.truth_(inst_33066)){
var statearr_33091_33112 = state_33083__$1;
(statearr_33091_33112[(1)] = (9));

} else {
var statearr_33092_33113 = state_33083__$1;
(statearr_33092_33113[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (3))){
var inst_33081 = (state_33083[(2)]);
var state_33083__$1 = state_33083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33083__$1,inst_33081);
} else {
if((state_val_33084 === (12))){
var state_33083__$1 = state_33083;
var statearr_33093_33114 = state_33083__$1;
(statearr_33093_33114[(2)] = null);

(statearr_33093_33114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (2))){
var state_33083__$1 = state_33083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33083__$1,(4),ch);
} else {
if((state_val_33084 === (11))){
var inst_33060 = (state_33083[(7)]);
var inst_33070 = (state_33083[(2)]);
var state_33083__$1 = state_33083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33083__$1,(8),inst_33070,inst_33060);
} else {
if((state_val_33084 === (9))){
var state_33083__$1 = state_33083;
var statearr_33094_33115 = state_33083__$1;
(statearr_33094_33115[(2)] = tc);

(statearr_33094_33115[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (5))){
var inst_33063 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33064 = cljs.core.async.close_BANG_.call(null,fc);
var state_33083__$1 = (function (){var statearr_33095 = state_33083;
(statearr_33095[(8)] = inst_33063);

return statearr_33095;
})();
var statearr_33096_33116 = state_33083__$1;
(statearr_33096_33116[(2)] = inst_33064);

(statearr_33096_33116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (14))){
var inst_33077 = (state_33083[(2)]);
var state_33083__$1 = state_33083;
var statearr_33097_33117 = state_33083__$1;
(statearr_33097_33117[(2)] = inst_33077);

(statearr_33097_33117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (10))){
var state_33083__$1 = state_33083;
var statearr_33098_33118 = state_33083__$1;
(statearr_33098_33118[(2)] = fc);

(statearr_33098_33118[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (8))){
var inst_33072 = (state_33083[(2)]);
var state_33083__$1 = state_33083;
if(cljs.core.truth_(inst_33072)){
var statearr_33099_33119 = state_33083__$1;
(statearr_33099_33119[(1)] = (12));

} else {
var statearr_33100_33120 = state_33083__$1;
(statearr_33100_33120[(1)] = (13));

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
});})(c__30792__auto___33106,tc,fc))
;
return ((function (switch__30625__auto__,c__30792__auto___33106,tc,fc){
return (function() {
var cljs$core$async$state_machine__30626__auto__ = null;
var cljs$core$async$state_machine__30626__auto____0 = (function (){
var statearr_33101 = [null,null,null,null,null,null,null,null,null];
(statearr_33101[(0)] = cljs$core$async$state_machine__30626__auto__);

(statearr_33101[(1)] = (1));

return statearr_33101;
});
var cljs$core$async$state_machine__30626__auto____1 = (function (state_33083){
while(true){
var ret_value__30627__auto__ = (function (){try{while(true){
var result__30628__auto__ = switch__30625__auto__.call(null,state_33083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30628__auto__;
}
break;
}
}catch (e33102){if((e33102 instanceof Object)){
var ex__30629__auto__ = e33102;
var statearr_33103_33121 = state_33083;
(statearr_33103_33121[(5)] = ex__30629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33122 = state_33083;
state_33083 = G__33122;
continue;
} else {
return ret_value__30627__auto__;
}
break;
}
});
cljs$core$async$state_machine__30626__auto__ = function(state_33083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30626__auto____1.call(this,state_33083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30626__auto____0;
cljs$core$async$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30626__auto____1;
return cljs$core$async$state_machine__30626__auto__;
})()
;})(switch__30625__auto__,c__30792__auto___33106,tc,fc))
})();
var state__30794__auto__ = (function (){var statearr_33104 = f__30793__auto__.call(null);
(statearr_33104[(6)] = c__30792__auto___33106);

return statearr_33104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___33106,tc,fc))
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
var c__30792__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto__){
return (function (){
var f__30793__auto__ = (function (){var switch__30625__auto__ = ((function (c__30792__auto__){
return (function (state_33143){
var state_val_33144 = (state_33143[(1)]);
if((state_val_33144 === (7))){
var inst_33139 = (state_33143[(2)]);
var state_33143__$1 = state_33143;
var statearr_33145_33163 = state_33143__$1;
(statearr_33145_33163[(2)] = inst_33139);

(statearr_33145_33163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (1))){
var inst_33123 = init;
var state_33143__$1 = (function (){var statearr_33146 = state_33143;
(statearr_33146[(7)] = inst_33123);

return statearr_33146;
})();
var statearr_33147_33164 = state_33143__$1;
(statearr_33147_33164[(2)] = null);

(statearr_33147_33164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (4))){
var inst_33126 = (state_33143[(8)]);
var inst_33126__$1 = (state_33143[(2)]);
var inst_33127 = (inst_33126__$1 == null);
var state_33143__$1 = (function (){var statearr_33148 = state_33143;
(statearr_33148[(8)] = inst_33126__$1);

return statearr_33148;
})();
if(cljs.core.truth_(inst_33127)){
var statearr_33149_33165 = state_33143__$1;
(statearr_33149_33165[(1)] = (5));

} else {
var statearr_33150_33166 = state_33143__$1;
(statearr_33150_33166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (6))){
var inst_33123 = (state_33143[(7)]);
var inst_33126 = (state_33143[(8)]);
var inst_33130 = (state_33143[(9)]);
var inst_33130__$1 = f.call(null,inst_33123,inst_33126);
var inst_33131 = cljs.core.reduced_QMARK_.call(null,inst_33130__$1);
var state_33143__$1 = (function (){var statearr_33151 = state_33143;
(statearr_33151[(9)] = inst_33130__$1);

return statearr_33151;
})();
if(inst_33131){
var statearr_33152_33167 = state_33143__$1;
(statearr_33152_33167[(1)] = (8));

} else {
var statearr_33153_33168 = state_33143__$1;
(statearr_33153_33168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (3))){
var inst_33141 = (state_33143[(2)]);
var state_33143__$1 = state_33143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33143__$1,inst_33141);
} else {
if((state_val_33144 === (2))){
var state_33143__$1 = state_33143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33143__$1,(4),ch);
} else {
if((state_val_33144 === (9))){
var inst_33130 = (state_33143[(9)]);
var inst_33123 = inst_33130;
var state_33143__$1 = (function (){var statearr_33154 = state_33143;
(statearr_33154[(7)] = inst_33123);

return statearr_33154;
})();
var statearr_33155_33169 = state_33143__$1;
(statearr_33155_33169[(2)] = null);

(statearr_33155_33169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (5))){
var inst_33123 = (state_33143[(7)]);
var state_33143__$1 = state_33143;
var statearr_33156_33170 = state_33143__$1;
(statearr_33156_33170[(2)] = inst_33123);

(statearr_33156_33170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (10))){
var inst_33137 = (state_33143[(2)]);
var state_33143__$1 = state_33143;
var statearr_33157_33171 = state_33143__$1;
(statearr_33157_33171[(2)] = inst_33137);

(statearr_33157_33171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (8))){
var inst_33130 = (state_33143[(9)]);
var inst_33133 = cljs.core.deref.call(null,inst_33130);
var state_33143__$1 = state_33143;
var statearr_33158_33172 = state_33143__$1;
(statearr_33158_33172[(2)] = inst_33133);

(statearr_33158_33172[(1)] = (10));


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
});})(c__30792__auto__))
;
return ((function (switch__30625__auto__,c__30792__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30626__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30626__auto____0 = (function (){
var statearr_33159 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33159[(0)] = cljs$core$async$reduce_$_state_machine__30626__auto__);

(statearr_33159[(1)] = (1));

return statearr_33159;
});
var cljs$core$async$reduce_$_state_machine__30626__auto____1 = (function (state_33143){
while(true){
var ret_value__30627__auto__ = (function (){try{while(true){
var result__30628__auto__ = switch__30625__auto__.call(null,state_33143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30628__auto__;
}
break;
}
}catch (e33160){if((e33160 instanceof Object)){
var ex__30629__auto__ = e33160;
var statearr_33161_33173 = state_33143;
(statearr_33161_33173[(5)] = ex__30629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33174 = state_33143;
state_33143 = G__33174;
continue;
} else {
return ret_value__30627__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30626__auto__ = function(state_33143){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30626__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30626__auto____1.call(this,state_33143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30626__auto____0;
cljs$core$async$reduce_$_state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30626__auto____1;
return cljs$core$async$reduce_$_state_machine__30626__auto__;
})()
;})(switch__30625__auto__,c__30792__auto__))
})();
var state__30794__auto__ = (function (){var statearr_33162 = f__30793__auto__.call(null);
(statearr_33162[(6)] = c__30792__auto__);

return statearr_33162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto__))
);

return c__30792__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__30792__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto__,f__$1){
return (function (){
var f__30793__auto__ = (function (){var switch__30625__auto__ = ((function (c__30792__auto__,f__$1){
return (function (state_33180){
var state_val_33181 = (state_33180[(1)]);
if((state_val_33181 === (1))){
var inst_33175 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33180__$1 = state_33180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33180__$1,(2),inst_33175);
} else {
if((state_val_33181 === (2))){
var inst_33177 = (state_33180[(2)]);
var inst_33178 = f__$1.call(null,inst_33177);
var state_33180__$1 = state_33180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33180__$1,inst_33178);
} else {
return null;
}
}
});})(c__30792__auto__,f__$1))
;
return ((function (switch__30625__auto__,c__30792__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30626__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30626__auto____0 = (function (){
var statearr_33182 = [null,null,null,null,null,null,null];
(statearr_33182[(0)] = cljs$core$async$transduce_$_state_machine__30626__auto__);

(statearr_33182[(1)] = (1));

return statearr_33182;
});
var cljs$core$async$transduce_$_state_machine__30626__auto____1 = (function (state_33180){
while(true){
var ret_value__30627__auto__ = (function (){try{while(true){
var result__30628__auto__ = switch__30625__auto__.call(null,state_33180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30628__auto__;
}
break;
}
}catch (e33183){if((e33183 instanceof Object)){
var ex__30629__auto__ = e33183;
var statearr_33184_33186 = state_33180;
(statearr_33184_33186[(5)] = ex__30629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33187 = state_33180;
state_33180 = G__33187;
continue;
} else {
return ret_value__30627__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30626__auto__ = function(state_33180){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30626__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30626__auto____1.call(this,state_33180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30626__auto____0;
cljs$core$async$transduce_$_state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30626__auto____1;
return cljs$core$async$transduce_$_state_machine__30626__auto__;
})()
;})(switch__30625__auto__,c__30792__auto__,f__$1))
})();
var state__30794__auto__ = (function (){var statearr_33185 = f__30793__auto__.call(null);
(statearr_33185[(6)] = c__30792__auto__);

return statearr_33185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto__,f__$1))
);

return c__30792__auto__;
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
var G__33189 = arguments.length;
switch (G__33189) {
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
var c__30792__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto__){
return (function (){
var f__30793__auto__ = (function (){var switch__30625__auto__ = ((function (c__30792__auto__){
return (function (state_33214){
var state_val_33215 = (state_33214[(1)]);
if((state_val_33215 === (7))){
var inst_33196 = (state_33214[(2)]);
var state_33214__$1 = state_33214;
var statearr_33216_33237 = state_33214__$1;
(statearr_33216_33237[(2)] = inst_33196);

(statearr_33216_33237[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (1))){
var inst_33190 = cljs.core.seq.call(null,coll);
var inst_33191 = inst_33190;
var state_33214__$1 = (function (){var statearr_33217 = state_33214;
(statearr_33217[(7)] = inst_33191);

return statearr_33217;
})();
var statearr_33218_33238 = state_33214__$1;
(statearr_33218_33238[(2)] = null);

(statearr_33218_33238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (4))){
var inst_33191 = (state_33214[(7)]);
var inst_33194 = cljs.core.first.call(null,inst_33191);
var state_33214__$1 = state_33214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33214__$1,(7),ch,inst_33194);
} else {
if((state_val_33215 === (13))){
var inst_33208 = (state_33214[(2)]);
var state_33214__$1 = state_33214;
var statearr_33219_33239 = state_33214__$1;
(statearr_33219_33239[(2)] = inst_33208);

(statearr_33219_33239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (6))){
var inst_33199 = (state_33214[(2)]);
var state_33214__$1 = state_33214;
if(cljs.core.truth_(inst_33199)){
var statearr_33220_33240 = state_33214__$1;
(statearr_33220_33240[(1)] = (8));

} else {
var statearr_33221_33241 = state_33214__$1;
(statearr_33221_33241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (3))){
var inst_33212 = (state_33214[(2)]);
var state_33214__$1 = state_33214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33214__$1,inst_33212);
} else {
if((state_val_33215 === (12))){
var state_33214__$1 = state_33214;
var statearr_33222_33242 = state_33214__$1;
(statearr_33222_33242[(2)] = null);

(statearr_33222_33242[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (2))){
var inst_33191 = (state_33214[(7)]);
var state_33214__$1 = state_33214;
if(cljs.core.truth_(inst_33191)){
var statearr_33223_33243 = state_33214__$1;
(statearr_33223_33243[(1)] = (4));

} else {
var statearr_33224_33244 = state_33214__$1;
(statearr_33224_33244[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (11))){
var inst_33205 = cljs.core.async.close_BANG_.call(null,ch);
var state_33214__$1 = state_33214;
var statearr_33225_33245 = state_33214__$1;
(statearr_33225_33245[(2)] = inst_33205);

(statearr_33225_33245[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (9))){
var state_33214__$1 = state_33214;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33226_33246 = state_33214__$1;
(statearr_33226_33246[(1)] = (11));

} else {
var statearr_33227_33247 = state_33214__$1;
(statearr_33227_33247[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (5))){
var inst_33191 = (state_33214[(7)]);
var state_33214__$1 = state_33214;
var statearr_33228_33248 = state_33214__$1;
(statearr_33228_33248[(2)] = inst_33191);

(statearr_33228_33248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (10))){
var inst_33210 = (state_33214[(2)]);
var state_33214__$1 = state_33214;
var statearr_33229_33249 = state_33214__$1;
(statearr_33229_33249[(2)] = inst_33210);

(statearr_33229_33249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (8))){
var inst_33191 = (state_33214[(7)]);
var inst_33201 = cljs.core.next.call(null,inst_33191);
var inst_33191__$1 = inst_33201;
var state_33214__$1 = (function (){var statearr_33230 = state_33214;
(statearr_33230[(7)] = inst_33191__$1);

return statearr_33230;
})();
var statearr_33231_33250 = state_33214__$1;
(statearr_33231_33250[(2)] = null);

(statearr_33231_33250[(1)] = (2));


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
});})(c__30792__auto__))
;
return ((function (switch__30625__auto__,c__30792__auto__){
return (function() {
var cljs$core$async$state_machine__30626__auto__ = null;
var cljs$core$async$state_machine__30626__auto____0 = (function (){
var statearr_33232 = [null,null,null,null,null,null,null,null];
(statearr_33232[(0)] = cljs$core$async$state_machine__30626__auto__);

(statearr_33232[(1)] = (1));

return statearr_33232;
});
var cljs$core$async$state_machine__30626__auto____1 = (function (state_33214){
while(true){
var ret_value__30627__auto__ = (function (){try{while(true){
var result__30628__auto__ = switch__30625__auto__.call(null,state_33214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30628__auto__;
}
break;
}
}catch (e33233){if((e33233 instanceof Object)){
var ex__30629__auto__ = e33233;
var statearr_33234_33251 = state_33214;
(statearr_33234_33251[(5)] = ex__30629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33252 = state_33214;
state_33214 = G__33252;
continue;
} else {
return ret_value__30627__auto__;
}
break;
}
});
cljs$core$async$state_machine__30626__auto__ = function(state_33214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30626__auto____1.call(this,state_33214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30626__auto____0;
cljs$core$async$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30626__auto____1;
return cljs$core$async$state_machine__30626__auto__;
})()
;})(switch__30625__auto__,c__30792__auto__))
})();
var state__30794__auto__ = (function (){var statearr_33235 = f__30793__auto__.call(null);
(statearr_33235[(6)] = c__30792__auto__);

return statearr_33235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto__))
);

return c__30792__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33253 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33253 = (function (ch,cs,meta33254){
this.ch = ch;
this.cs = cs;
this.meta33254 = meta33254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33255,meta33254__$1){
var self__ = this;
var _33255__$1 = this;
return (new cljs.core.async.t_cljs$core$async33253(self__.ch,self__.cs,meta33254__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33253.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33255){
var self__ = this;
var _33255__$1 = this;
return self__.meta33254;
});})(cs))
;

cljs.core.async.t_cljs$core$async33253.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33253.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33253.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33253.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33253.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33253.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33253.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33254","meta33254",2109345466,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33253.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33253";

cljs.core.async.t_cljs$core$async33253.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async33253");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33253.
 */
cljs.core.async.__GT_t_cljs$core$async33253 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33253(ch__$1,cs__$1,meta33254){
return (new cljs.core.async.t_cljs$core$async33253(ch__$1,cs__$1,meta33254));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33253(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30792__auto___33475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___33475,cs,m,dchan,dctr,done){
return (function (){
var f__30793__auto__ = (function (){var switch__30625__auto__ = ((function (c__30792__auto___33475,cs,m,dchan,dctr,done){
return (function (state_33390){
var state_val_33391 = (state_33390[(1)]);
if((state_val_33391 === (7))){
var inst_33386 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
var statearr_33392_33476 = state_33390__$1;
(statearr_33392_33476[(2)] = inst_33386);

(statearr_33392_33476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (20))){
var inst_33289 = (state_33390[(7)]);
var inst_33301 = cljs.core.first.call(null,inst_33289);
var inst_33302 = cljs.core.nth.call(null,inst_33301,(0),null);
var inst_33303 = cljs.core.nth.call(null,inst_33301,(1),null);
var state_33390__$1 = (function (){var statearr_33393 = state_33390;
(statearr_33393[(8)] = inst_33302);

return statearr_33393;
})();
if(cljs.core.truth_(inst_33303)){
var statearr_33394_33477 = state_33390__$1;
(statearr_33394_33477[(1)] = (22));

} else {
var statearr_33395_33478 = state_33390__$1;
(statearr_33395_33478[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (27))){
var inst_33258 = (state_33390[(9)]);
var inst_33338 = (state_33390[(10)]);
var inst_33331 = (state_33390[(11)]);
var inst_33333 = (state_33390[(12)]);
var inst_33338__$1 = cljs.core._nth.call(null,inst_33331,inst_33333);
var inst_33339 = cljs.core.async.put_BANG_.call(null,inst_33338__$1,inst_33258,done);
var state_33390__$1 = (function (){var statearr_33396 = state_33390;
(statearr_33396[(10)] = inst_33338__$1);

return statearr_33396;
})();
if(cljs.core.truth_(inst_33339)){
var statearr_33397_33479 = state_33390__$1;
(statearr_33397_33479[(1)] = (30));

} else {
var statearr_33398_33480 = state_33390__$1;
(statearr_33398_33480[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (1))){
var state_33390__$1 = state_33390;
var statearr_33399_33481 = state_33390__$1;
(statearr_33399_33481[(2)] = null);

(statearr_33399_33481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (24))){
var inst_33289 = (state_33390[(7)]);
var inst_33308 = (state_33390[(2)]);
var inst_33309 = cljs.core.next.call(null,inst_33289);
var inst_33267 = inst_33309;
var inst_33268 = null;
var inst_33269 = (0);
var inst_33270 = (0);
var state_33390__$1 = (function (){var statearr_33400 = state_33390;
(statearr_33400[(13)] = inst_33269);

(statearr_33400[(14)] = inst_33308);

(statearr_33400[(15)] = inst_33270);

(statearr_33400[(16)] = inst_33267);

(statearr_33400[(17)] = inst_33268);

return statearr_33400;
})();
var statearr_33401_33482 = state_33390__$1;
(statearr_33401_33482[(2)] = null);

(statearr_33401_33482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (39))){
var state_33390__$1 = state_33390;
var statearr_33405_33483 = state_33390__$1;
(statearr_33405_33483[(2)] = null);

(statearr_33405_33483[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (4))){
var inst_33258 = (state_33390[(9)]);
var inst_33258__$1 = (state_33390[(2)]);
var inst_33259 = (inst_33258__$1 == null);
var state_33390__$1 = (function (){var statearr_33406 = state_33390;
(statearr_33406[(9)] = inst_33258__$1);

return statearr_33406;
})();
if(cljs.core.truth_(inst_33259)){
var statearr_33407_33484 = state_33390__$1;
(statearr_33407_33484[(1)] = (5));

} else {
var statearr_33408_33485 = state_33390__$1;
(statearr_33408_33485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (15))){
var inst_33269 = (state_33390[(13)]);
var inst_33270 = (state_33390[(15)]);
var inst_33267 = (state_33390[(16)]);
var inst_33268 = (state_33390[(17)]);
var inst_33285 = (state_33390[(2)]);
var inst_33286 = (inst_33270 + (1));
var tmp33402 = inst_33269;
var tmp33403 = inst_33267;
var tmp33404 = inst_33268;
var inst_33267__$1 = tmp33403;
var inst_33268__$1 = tmp33404;
var inst_33269__$1 = tmp33402;
var inst_33270__$1 = inst_33286;
var state_33390__$1 = (function (){var statearr_33409 = state_33390;
(statearr_33409[(13)] = inst_33269__$1);

(statearr_33409[(15)] = inst_33270__$1);

(statearr_33409[(16)] = inst_33267__$1);

(statearr_33409[(18)] = inst_33285);

(statearr_33409[(17)] = inst_33268__$1);

return statearr_33409;
})();
var statearr_33410_33486 = state_33390__$1;
(statearr_33410_33486[(2)] = null);

(statearr_33410_33486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (21))){
var inst_33312 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
var statearr_33414_33487 = state_33390__$1;
(statearr_33414_33487[(2)] = inst_33312);

(statearr_33414_33487[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (31))){
var inst_33338 = (state_33390[(10)]);
var inst_33342 = done.call(null,null);
var inst_33343 = cljs.core.async.untap_STAR_.call(null,m,inst_33338);
var state_33390__$1 = (function (){var statearr_33415 = state_33390;
(statearr_33415[(19)] = inst_33342);

return statearr_33415;
})();
var statearr_33416_33488 = state_33390__$1;
(statearr_33416_33488[(2)] = inst_33343);

(statearr_33416_33488[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (32))){
var inst_33332 = (state_33390[(20)]);
var inst_33330 = (state_33390[(21)]);
var inst_33331 = (state_33390[(11)]);
var inst_33333 = (state_33390[(12)]);
var inst_33345 = (state_33390[(2)]);
var inst_33346 = (inst_33333 + (1));
var tmp33411 = inst_33332;
var tmp33412 = inst_33330;
var tmp33413 = inst_33331;
var inst_33330__$1 = tmp33412;
var inst_33331__$1 = tmp33413;
var inst_33332__$1 = tmp33411;
var inst_33333__$1 = inst_33346;
var state_33390__$1 = (function (){var statearr_33417 = state_33390;
(statearr_33417[(20)] = inst_33332__$1);

(statearr_33417[(21)] = inst_33330__$1);

(statearr_33417[(11)] = inst_33331__$1);

(statearr_33417[(22)] = inst_33345);

(statearr_33417[(12)] = inst_33333__$1);

return statearr_33417;
})();
var statearr_33418_33489 = state_33390__$1;
(statearr_33418_33489[(2)] = null);

(statearr_33418_33489[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (40))){
var inst_33358 = (state_33390[(23)]);
var inst_33362 = done.call(null,null);
var inst_33363 = cljs.core.async.untap_STAR_.call(null,m,inst_33358);
var state_33390__$1 = (function (){var statearr_33419 = state_33390;
(statearr_33419[(24)] = inst_33362);

return statearr_33419;
})();
var statearr_33420_33490 = state_33390__$1;
(statearr_33420_33490[(2)] = inst_33363);

(statearr_33420_33490[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (33))){
var inst_33349 = (state_33390[(25)]);
var inst_33351 = cljs.core.chunked_seq_QMARK_.call(null,inst_33349);
var state_33390__$1 = state_33390;
if(inst_33351){
var statearr_33421_33491 = state_33390__$1;
(statearr_33421_33491[(1)] = (36));

} else {
var statearr_33422_33492 = state_33390__$1;
(statearr_33422_33492[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (13))){
var inst_33279 = (state_33390[(26)]);
var inst_33282 = cljs.core.async.close_BANG_.call(null,inst_33279);
var state_33390__$1 = state_33390;
var statearr_33423_33493 = state_33390__$1;
(statearr_33423_33493[(2)] = inst_33282);

(statearr_33423_33493[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (22))){
var inst_33302 = (state_33390[(8)]);
var inst_33305 = cljs.core.async.close_BANG_.call(null,inst_33302);
var state_33390__$1 = state_33390;
var statearr_33424_33494 = state_33390__$1;
(statearr_33424_33494[(2)] = inst_33305);

(statearr_33424_33494[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (36))){
var inst_33349 = (state_33390[(25)]);
var inst_33353 = cljs.core.chunk_first.call(null,inst_33349);
var inst_33354 = cljs.core.chunk_rest.call(null,inst_33349);
var inst_33355 = cljs.core.count.call(null,inst_33353);
var inst_33330 = inst_33354;
var inst_33331 = inst_33353;
var inst_33332 = inst_33355;
var inst_33333 = (0);
var state_33390__$1 = (function (){var statearr_33425 = state_33390;
(statearr_33425[(20)] = inst_33332);

(statearr_33425[(21)] = inst_33330);

(statearr_33425[(11)] = inst_33331);

(statearr_33425[(12)] = inst_33333);

return statearr_33425;
})();
var statearr_33426_33495 = state_33390__$1;
(statearr_33426_33495[(2)] = null);

(statearr_33426_33495[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (41))){
var inst_33349 = (state_33390[(25)]);
var inst_33365 = (state_33390[(2)]);
var inst_33366 = cljs.core.next.call(null,inst_33349);
var inst_33330 = inst_33366;
var inst_33331 = null;
var inst_33332 = (0);
var inst_33333 = (0);
var state_33390__$1 = (function (){var statearr_33427 = state_33390;
(statearr_33427[(20)] = inst_33332);

(statearr_33427[(21)] = inst_33330);

(statearr_33427[(27)] = inst_33365);

(statearr_33427[(11)] = inst_33331);

(statearr_33427[(12)] = inst_33333);

return statearr_33427;
})();
var statearr_33428_33496 = state_33390__$1;
(statearr_33428_33496[(2)] = null);

(statearr_33428_33496[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (43))){
var state_33390__$1 = state_33390;
var statearr_33429_33497 = state_33390__$1;
(statearr_33429_33497[(2)] = null);

(statearr_33429_33497[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (29))){
var inst_33374 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
var statearr_33430_33498 = state_33390__$1;
(statearr_33430_33498[(2)] = inst_33374);

(statearr_33430_33498[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (44))){
var inst_33383 = (state_33390[(2)]);
var state_33390__$1 = (function (){var statearr_33431 = state_33390;
(statearr_33431[(28)] = inst_33383);

return statearr_33431;
})();
var statearr_33432_33499 = state_33390__$1;
(statearr_33432_33499[(2)] = null);

(statearr_33432_33499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (6))){
var inst_33322 = (state_33390[(29)]);
var inst_33321 = cljs.core.deref.call(null,cs);
var inst_33322__$1 = cljs.core.keys.call(null,inst_33321);
var inst_33323 = cljs.core.count.call(null,inst_33322__$1);
var inst_33324 = cljs.core.reset_BANG_.call(null,dctr,inst_33323);
var inst_33329 = cljs.core.seq.call(null,inst_33322__$1);
var inst_33330 = inst_33329;
var inst_33331 = null;
var inst_33332 = (0);
var inst_33333 = (0);
var state_33390__$1 = (function (){var statearr_33433 = state_33390;
(statearr_33433[(20)] = inst_33332);

(statearr_33433[(21)] = inst_33330);

(statearr_33433[(30)] = inst_33324);

(statearr_33433[(11)] = inst_33331);

(statearr_33433[(29)] = inst_33322__$1);

(statearr_33433[(12)] = inst_33333);

return statearr_33433;
})();
var statearr_33434_33500 = state_33390__$1;
(statearr_33434_33500[(2)] = null);

(statearr_33434_33500[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (28))){
var inst_33330 = (state_33390[(21)]);
var inst_33349 = (state_33390[(25)]);
var inst_33349__$1 = cljs.core.seq.call(null,inst_33330);
var state_33390__$1 = (function (){var statearr_33435 = state_33390;
(statearr_33435[(25)] = inst_33349__$1);

return statearr_33435;
})();
if(inst_33349__$1){
var statearr_33436_33501 = state_33390__$1;
(statearr_33436_33501[(1)] = (33));

} else {
var statearr_33437_33502 = state_33390__$1;
(statearr_33437_33502[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (25))){
var inst_33332 = (state_33390[(20)]);
var inst_33333 = (state_33390[(12)]);
var inst_33335 = (inst_33333 < inst_33332);
var inst_33336 = inst_33335;
var state_33390__$1 = state_33390;
if(cljs.core.truth_(inst_33336)){
var statearr_33438_33503 = state_33390__$1;
(statearr_33438_33503[(1)] = (27));

} else {
var statearr_33439_33504 = state_33390__$1;
(statearr_33439_33504[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (34))){
var state_33390__$1 = state_33390;
var statearr_33440_33505 = state_33390__$1;
(statearr_33440_33505[(2)] = null);

(statearr_33440_33505[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (17))){
var state_33390__$1 = state_33390;
var statearr_33441_33506 = state_33390__$1;
(statearr_33441_33506[(2)] = null);

(statearr_33441_33506[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (3))){
var inst_33388 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33390__$1,inst_33388);
} else {
if((state_val_33391 === (12))){
var inst_33317 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
var statearr_33442_33507 = state_33390__$1;
(statearr_33442_33507[(2)] = inst_33317);

(statearr_33442_33507[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (2))){
var state_33390__$1 = state_33390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33390__$1,(4),ch);
} else {
if((state_val_33391 === (23))){
var state_33390__$1 = state_33390;
var statearr_33443_33508 = state_33390__$1;
(statearr_33443_33508[(2)] = null);

(statearr_33443_33508[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (35))){
var inst_33372 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
var statearr_33444_33509 = state_33390__$1;
(statearr_33444_33509[(2)] = inst_33372);

(statearr_33444_33509[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (19))){
var inst_33289 = (state_33390[(7)]);
var inst_33293 = cljs.core.chunk_first.call(null,inst_33289);
var inst_33294 = cljs.core.chunk_rest.call(null,inst_33289);
var inst_33295 = cljs.core.count.call(null,inst_33293);
var inst_33267 = inst_33294;
var inst_33268 = inst_33293;
var inst_33269 = inst_33295;
var inst_33270 = (0);
var state_33390__$1 = (function (){var statearr_33445 = state_33390;
(statearr_33445[(13)] = inst_33269);

(statearr_33445[(15)] = inst_33270);

(statearr_33445[(16)] = inst_33267);

(statearr_33445[(17)] = inst_33268);

return statearr_33445;
})();
var statearr_33446_33510 = state_33390__$1;
(statearr_33446_33510[(2)] = null);

(statearr_33446_33510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (11))){
var inst_33267 = (state_33390[(16)]);
var inst_33289 = (state_33390[(7)]);
var inst_33289__$1 = cljs.core.seq.call(null,inst_33267);
var state_33390__$1 = (function (){var statearr_33447 = state_33390;
(statearr_33447[(7)] = inst_33289__$1);

return statearr_33447;
})();
if(inst_33289__$1){
var statearr_33448_33511 = state_33390__$1;
(statearr_33448_33511[(1)] = (16));

} else {
var statearr_33449_33512 = state_33390__$1;
(statearr_33449_33512[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (9))){
var inst_33319 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
var statearr_33450_33513 = state_33390__$1;
(statearr_33450_33513[(2)] = inst_33319);

(statearr_33450_33513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (5))){
var inst_33265 = cljs.core.deref.call(null,cs);
var inst_33266 = cljs.core.seq.call(null,inst_33265);
var inst_33267 = inst_33266;
var inst_33268 = null;
var inst_33269 = (0);
var inst_33270 = (0);
var state_33390__$1 = (function (){var statearr_33451 = state_33390;
(statearr_33451[(13)] = inst_33269);

(statearr_33451[(15)] = inst_33270);

(statearr_33451[(16)] = inst_33267);

(statearr_33451[(17)] = inst_33268);

return statearr_33451;
})();
var statearr_33452_33514 = state_33390__$1;
(statearr_33452_33514[(2)] = null);

(statearr_33452_33514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (14))){
var state_33390__$1 = state_33390;
var statearr_33453_33515 = state_33390__$1;
(statearr_33453_33515[(2)] = null);

(statearr_33453_33515[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (45))){
var inst_33380 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
var statearr_33454_33516 = state_33390__$1;
(statearr_33454_33516[(2)] = inst_33380);

(statearr_33454_33516[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (26))){
var inst_33322 = (state_33390[(29)]);
var inst_33376 = (state_33390[(2)]);
var inst_33377 = cljs.core.seq.call(null,inst_33322);
var state_33390__$1 = (function (){var statearr_33455 = state_33390;
(statearr_33455[(31)] = inst_33376);

return statearr_33455;
})();
if(inst_33377){
var statearr_33456_33517 = state_33390__$1;
(statearr_33456_33517[(1)] = (42));

} else {
var statearr_33457_33518 = state_33390__$1;
(statearr_33457_33518[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (16))){
var inst_33289 = (state_33390[(7)]);
var inst_33291 = cljs.core.chunked_seq_QMARK_.call(null,inst_33289);
var state_33390__$1 = state_33390;
if(inst_33291){
var statearr_33458_33519 = state_33390__$1;
(statearr_33458_33519[(1)] = (19));

} else {
var statearr_33459_33520 = state_33390__$1;
(statearr_33459_33520[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (38))){
var inst_33369 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
var statearr_33460_33521 = state_33390__$1;
(statearr_33460_33521[(2)] = inst_33369);

(statearr_33460_33521[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (30))){
var state_33390__$1 = state_33390;
var statearr_33461_33522 = state_33390__$1;
(statearr_33461_33522[(2)] = null);

(statearr_33461_33522[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (10))){
var inst_33270 = (state_33390[(15)]);
var inst_33268 = (state_33390[(17)]);
var inst_33278 = cljs.core._nth.call(null,inst_33268,inst_33270);
var inst_33279 = cljs.core.nth.call(null,inst_33278,(0),null);
var inst_33280 = cljs.core.nth.call(null,inst_33278,(1),null);
var state_33390__$1 = (function (){var statearr_33462 = state_33390;
(statearr_33462[(26)] = inst_33279);

return statearr_33462;
})();
if(cljs.core.truth_(inst_33280)){
var statearr_33463_33523 = state_33390__$1;
(statearr_33463_33523[(1)] = (13));

} else {
var statearr_33464_33524 = state_33390__$1;
(statearr_33464_33524[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (18))){
var inst_33315 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
var statearr_33465_33525 = state_33390__$1;
(statearr_33465_33525[(2)] = inst_33315);

(statearr_33465_33525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (42))){
var state_33390__$1 = state_33390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33390__$1,(45),dchan);
} else {
if((state_val_33391 === (37))){
var inst_33358 = (state_33390[(23)]);
var inst_33258 = (state_33390[(9)]);
var inst_33349 = (state_33390[(25)]);
var inst_33358__$1 = cljs.core.first.call(null,inst_33349);
var inst_33359 = cljs.core.async.put_BANG_.call(null,inst_33358__$1,inst_33258,done);
var state_33390__$1 = (function (){var statearr_33466 = state_33390;
(statearr_33466[(23)] = inst_33358__$1);

return statearr_33466;
})();
if(cljs.core.truth_(inst_33359)){
var statearr_33467_33526 = state_33390__$1;
(statearr_33467_33526[(1)] = (39));

} else {
var statearr_33468_33527 = state_33390__$1;
(statearr_33468_33527[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (8))){
var inst_33269 = (state_33390[(13)]);
var inst_33270 = (state_33390[(15)]);
var inst_33272 = (inst_33270 < inst_33269);
var inst_33273 = inst_33272;
var state_33390__$1 = state_33390;
if(cljs.core.truth_(inst_33273)){
var statearr_33469_33528 = state_33390__$1;
(statearr_33469_33528[(1)] = (10));

} else {
var statearr_33470_33529 = state_33390__$1;
(statearr_33470_33529[(1)] = (11));

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
});})(c__30792__auto___33475,cs,m,dchan,dctr,done))
;
return ((function (switch__30625__auto__,c__30792__auto___33475,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30626__auto__ = null;
var cljs$core$async$mult_$_state_machine__30626__auto____0 = (function (){
var statearr_33471 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33471[(0)] = cljs$core$async$mult_$_state_machine__30626__auto__);

(statearr_33471[(1)] = (1));

return statearr_33471;
});
var cljs$core$async$mult_$_state_machine__30626__auto____1 = (function (state_33390){
while(true){
var ret_value__30627__auto__ = (function (){try{while(true){
var result__30628__auto__ = switch__30625__auto__.call(null,state_33390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30628__auto__;
}
break;
}
}catch (e33472){if((e33472 instanceof Object)){
var ex__30629__auto__ = e33472;
var statearr_33473_33530 = state_33390;
(statearr_33473_33530[(5)] = ex__30629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33531 = state_33390;
state_33390 = G__33531;
continue;
} else {
return ret_value__30627__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30626__auto__ = function(state_33390){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30626__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30626__auto____1.call(this,state_33390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30626__auto____0;
cljs$core$async$mult_$_state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30626__auto____1;
return cljs$core$async$mult_$_state_machine__30626__auto__;
})()
;})(switch__30625__auto__,c__30792__auto___33475,cs,m,dchan,dctr,done))
})();
var state__30794__auto__ = (function (){var statearr_33474 = f__30793__auto__.call(null);
(statearr_33474[(6)] = c__30792__auto___33475);

return statearr_33474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___33475,cs,m,dchan,dctr,done))
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
var G__33533 = arguments.length;
switch (G__33533) {
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
var len__4641__auto___33545 = arguments.length;
var i__4642__auto___33546 = (0);
while(true){
if((i__4642__auto___33546 < len__4641__auto___33545)){
args__4647__auto__.push((arguments[i__4642__auto___33546]));

var G__33547 = (i__4642__auto___33546 + (1));
i__4642__auto___33546 = G__33547;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33539){
var map__33540 = p__33539;
var map__33540__$1 = (((((!((map__33540 == null))))?(((((map__33540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33540):map__33540);
var opts = map__33540__$1;
var statearr_33542_33548 = state;
(statearr_33542_33548[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__33540,map__33540__$1,opts){
return (function (val){
var statearr_33543_33549 = state;
(statearr_33543_33549[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33540,map__33540__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_33544_33550 = state;
(statearr_33544_33550[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33535){
var G__33536 = cljs.core.first.call(null,seq33535);
var seq33535__$1 = cljs.core.next.call(null,seq33535);
var G__33537 = cljs.core.first.call(null,seq33535__$1);
var seq33535__$2 = cljs.core.next.call(null,seq33535__$1);
var G__33538 = cljs.core.first.call(null,seq33535__$2);
var seq33535__$3 = cljs.core.next.call(null,seq33535__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33536,G__33537,G__33538,seq33535__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33551 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33551 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33552){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33552 = meta33552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33553,meta33552__$1){
var self__ = this;
var _33553__$1 = this;
return (new cljs.core.async.t_cljs$core$async33551(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33552__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33553){
var self__ = this;
var _33553__$1 = this;
return self__.meta33552;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async33551.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33552","meta33552",1247034604,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33551.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33551.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33551";

cljs.core.async.t_cljs$core$async33551.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async33551");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33551.
 */
cljs.core.async.__GT_t_cljs$core$async33551 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33551(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33552){
return (new cljs.core.async.t_cljs$core$async33551(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33552));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33551(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30792__auto___33715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___33715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30793__auto__ = (function (){var switch__30625__auto__ = ((function (c__30792__auto___33715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33655){
var state_val_33656 = (state_33655[(1)]);
if((state_val_33656 === (7))){
var inst_33570 = (state_33655[(2)]);
var state_33655__$1 = state_33655;
var statearr_33657_33716 = state_33655__$1;
(statearr_33657_33716[(2)] = inst_33570);

(statearr_33657_33716[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (20))){
var inst_33582 = (state_33655[(7)]);
var state_33655__$1 = state_33655;
var statearr_33658_33717 = state_33655__$1;
(statearr_33658_33717[(2)] = inst_33582);

(statearr_33658_33717[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (27))){
var state_33655__$1 = state_33655;
var statearr_33659_33718 = state_33655__$1;
(statearr_33659_33718[(2)] = null);

(statearr_33659_33718[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (1))){
var inst_33557 = (state_33655[(8)]);
var inst_33557__$1 = calc_state.call(null);
var inst_33559 = (inst_33557__$1 == null);
var inst_33560 = cljs.core.not.call(null,inst_33559);
var state_33655__$1 = (function (){var statearr_33660 = state_33655;
(statearr_33660[(8)] = inst_33557__$1);

return statearr_33660;
})();
if(inst_33560){
var statearr_33661_33719 = state_33655__$1;
(statearr_33661_33719[(1)] = (2));

} else {
var statearr_33662_33720 = state_33655__$1;
(statearr_33662_33720[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (24))){
var inst_33615 = (state_33655[(9)]);
var inst_33629 = (state_33655[(10)]);
var inst_33606 = (state_33655[(11)]);
var inst_33629__$1 = inst_33606.call(null,inst_33615);
var state_33655__$1 = (function (){var statearr_33663 = state_33655;
(statearr_33663[(10)] = inst_33629__$1);

return statearr_33663;
})();
if(cljs.core.truth_(inst_33629__$1)){
var statearr_33664_33721 = state_33655__$1;
(statearr_33664_33721[(1)] = (29));

} else {
var statearr_33665_33722 = state_33655__$1;
(statearr_33665_33722[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (4))){
var inst_33573 = (state_33655[(2)]);
var state_33655__$1 = state_33655;
if(cljs.core.truth_(inst_33573)){
var statearr_33666_33723 = state_33655__$1;
(statearr_33666_33723[(1)] = (8));

} else {
var statearr_33667_33724 = state_33655__$1;
(statearr_33667_33724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (15))){
var inst_33600 = (state_33655[(2)]);
var state_33655__$1 = state_33655;
if(cljs.core.truth_(inst_33600)){
var statearr_33668_33725 = state_33655__$1;
(statearr_33668_33725[(1)] = (19));

} else {
var statearr_33669_33726 = state_33655__$1;
(statearr_33669_33726[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (21))){
var inst_33605 = (state_33655[(12)]);
var inst_33605__$1 = (state_33655[(2)]);
var inst_33606 = cljs.core.get.call(null,inst_33605__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33607 = cljs.core.get.call(null,inst_33605__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33608 = cljs.core.get.call(null,inst_33605__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33655__$1 = (function (){var statearr_33670 = state_33655;
(statearr_33670[(12)] = inst_33605__$1);

(statearr_33670[(11)] = inst_33606);

(statearr_33670[(13)] = inst_33607);

return statearr_33670;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33655__$1,(22),inst_33608);
} else {
if((state_val_33656 === (31))){
var inst_33637 = (state_33655[(2)]);
var state_33655__$1 = state_33655;
if(cljs.core.truth_(inst_33637)){
var statearr_33671_33727 = state_33655__$1;
(statearr_33671_33727[(1)] = (32));

} else {
var statearr_33672_33728 = state_33655__$1;
(statearr_33672_33728[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (32))){
var inst_33614 = (state_33655[(14)]);
var state_33655__$1 = state_33655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33655__$1,(35),out,inst_33614);
} else {
if((state_val_33656 === (33))){
var inst_33605 = (state_33655[(12)]);
var inst_33582 = inst_33605;
var state_33655__$1 = (function (){var statearr_33673 = state_33655;
(statearr_33673[(7)] = inst_33582);

return statearr_33673;
})();
var statearr_33674_33729 = state_33655__$1;
(statearr_33674_33729[(2)] = null);

(statearr_33674_33729[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (13))){
var inst_33582 = (state_33655[(7)]);
var inst_33589 = inst_33582.cljs$lang$protocol_mask$partition0$;
var inst_33590 = (inst_33589 & (64));
var inst_33591 = inst_33582.cljs$core$ISeq$;
var inst_33592 = (cljs.core.PROTOCOL_SENTINEL === inst_33591);
var inst_33593 = ((inst_33590) || (inst_33592));
var state_33655__$1 = state_33655;
if(cljs.core.truth_(inst_33593)){
var statearr_33675_33730 = state_33655__$1;
(statearr_33675_33730[(1)] = (16));

} else {
var statearr_33676_33731 = state_33655__$1;
(statearr_33676_33731[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (22))){
var inst_33614 = (state_33655[(14)]);
var inst_33615 = (state_33655[(9)]);
var inst_33613 = (state_33655[(2)]);
var inst_33614__$1 = cljs.core.nth.call(null,inst_33613,(0),null);
var inst_33615__$1 = cljs.core.nth.call(null,inst_33613,(1),null);
var inst_33616 = (inst_33614__$1 == null);
var inst_33617 = cljs.core._EQ_.call(null,inst_33615__$1,change);
var inst_33618 = ((inst_33616) || (inst_33617));
var state_33655__$1 = (function (){var statearr_33677 = state_33655;
(statearr_33677[(14)] = inst_33614__$1);

(statearr_33677[(9)] = inst_33615__$1);

return statearr_33677;
})();
if(cljs.core.truth_(inst_33618)){
var statearr_33678_33732 = state_33655__$1;
(statearr_33678_33732[(1)] = (23));

} else {
var statearr_33679_33733 = state_33655__$1;
(statearr_33679_33733[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (36))){
var inst_33605 = (state_33655[(12)]);
var inst_33582 = inst_33605;
var state_33655__$1 = (function (){var statearr_33680 = state_33655;
(statearr_33680[(7)] = inst_33582);

return statearr_33680;
})();
var statearr_33681_33734 = state_33655__$1;
(statearr_33681_33734[(2)] = null);

(statearr_33681_33734[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (29))){
var inst_33629 = (state_33655[(10)]);
var state_33655__$1 = state_33655;
var statearr_33682_33735 = state_33655__$1;
(statearr_33682_33735[(2)] = inst_33629);

(statearr_33682_33735[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (6))){
var state_33655__$1 = state_33655;
var statearr_33683_33736 = state_33655__$1;
(statearr_33683_33736[(2)] = false);

(statearr_33683_33736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (28))){
var inst_33625 = (state_33655[(2)]);
var inst_33626 = calc_state.call(null);
var inst_33582 = inst_33626;
var state_33655__$1 = (function (){var statearr_33684 = state_33655;
(statearr_33684[(7)] = inst_33582);

(statearr_33684[(15)] = inst_33625);

return statearr_33684;
})();
var statearr_33685_33737 = state_33655__$1;
(statearr_33685_33737[(2)] = null);

(statearr_33685_33737[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (25))){
var inst_33651 = (state_33655[(2)]);
var state_33655__$1 = state_33655;
var statearr_33686_33738 = state_33655__$1;
(statearr_33686_33738[(2)] = inst_33651);

(statearr_33686_33738[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (34))){
var inst_33649 = (state_33655[(2)]);
var state_33655__$1 = state_33655;
var statearr_33687_33739 = state_33655__$1;
(statearr_33687_33739[(2)] = inst_33649);

(statearr_33687_33739[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (17))){
var state_33655__$1 = state_33655;
var statearr_33688_33740 = state_33655__$1;
(statearr_33688_33740[(2)] = false);

(statearr_33688_33740[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (3))){
var state_33655__$1 = state_33655;
var statearr_33689_33741 = state_33655__$1;
(statearr_33689_33741[(2)] = false);

(statearr_33689_33741[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (12))){
var inst_33653 = (state_33655[(2)]);
var state_33655__$1 = state_33655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33655__$1,inst_33653);
} else {
if((state_val_33656 === (2))){
var inst_33557 = (state_33655[(8)]);
var inst_33562 = inst_33557.cljs$lang$protocol_mask$partition0$;
var inst_33563 = (inst_33562 & (64));
var inst_33564 = inst_33557.cljs$core$ISeq$;
var inst_33565 = (cljs.core.PROTOCOL_SENTINEL === inst_33564);
var inst_33566 = ((inst_33563) || (inst_33565));
var state_33655__$1 = state_33655;
if(cljs.core.truth_(inst_33566)){
var statearr_33690_33742 = state_33655__$1;
(statearr_33690_33742[(1)] = (5));

} else {
var statearr_33691_33743 = state_33655__$1;
(statearr_33691_33743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (23))){
var inst_33614 = (state_33655[(14)]);
var inst_33620 = (inst_33614 == null);
var state_33655__$1 = state_33655;
if(cljs.core.truth_(inst_33620)){
var statearr_33692_33744 = state_33655__$1;
(statearr_33692_33744[(1)] = (26));

} else {
var statearr_33693_33745 = state_33655__$1;
(statearr_33693_33745[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (35))){
var inst_33640 = (state_33655[(2)]);
var state_33655__$1 = state_33655;
if(cljs.core.truth_(inst_33640)){
var statearr_33694_33746 = state_33655__$1;
(statearr_33694_33746[(1)] = (36));

} else {
var statearr_33695_33747 = state_33655__$1;
(statearr_33695_33747[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (19))){
var inst_33582 = (state_33655[(7)]);
var inst_33602 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33582);
var state_33655__$1 = state_33655;
var statearr_33696_33748 = state_33655__$1;
(statearr_33696_33748[(2)] = inst_33602);

(statearr_33696_33748[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (11))){
var inst_33582 = (state_33655[(7)]);
var inst_33586 = (inst_33582 == null);
var inst_33587 = cljs.core.not.call(null,inst_33586);
var state_33655__$1 = state_33655;
if(inst_33587){
var statearr_33697_33749 = state_33655__$1;
(statearr_33697_33749[(1)] = (13));

} else {
var statearr_33698_33750 = state_33655__$1;
(statearr_33698_33750[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (9))){
var inst_33557 = (state_33655[(8)]);
var state_33655__$1 = state_33655;
var statearr_33699_33751 = state_33655__$1;
(statearr_33699_33751[(2)] = inst_33557);

(statearr_33699_33751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (5))){
var state_33655__$1 = state_33655;
var statearr_33700_33752 = state_33655__$1;
(statearr_33700_33752[(2)] = true);

(statearr_33700_33752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (14))){
var state_33655__$1 = state_33655;
var statearr_33701_33753 = state_33655__$1;
(statearr_33701_33753[(2)] = false);

(statearr_33701_33753[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (26))){
var inst_33615 = (state_33655[(9)]);
var inst_33622 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33615);
var state_33655__$1 = state_33655;
var statearr_33702_33754 = state_33655__$1;
(statearr_33702_33754[(2)] = inst_33622);

(statearr_33702_33754[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (16))){
var state_33655__$1 = state_33655;
var statearr_33703_33755 = state_33655__$1;
(statearr_33703_33755[(2)] = true);

(statearr_33703_33755[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (38))){
var inst_33645 = (state_33655[(2)]);
var state_33655__$1 = state_33655;
var statearr_33704_33756 = state_33655__$1;
(statearr_33704_33756[(2)] = inst_33645);

(statearr_33704_33756[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (30))){
var inst_33615 = (state_33655[(9)]);
var inst_33606 = (state_33655[(11)]);
var inst_33607 = (state_33655[(13)]);
var inst_33632 = cljs.core.empty_QMARK_.call(null,inst_33606);
var inst_33633 = inst_33607.call(null,inst_33615);
var inst_33634 = cljs.core.not.call(null,inst_33633);
var inst_33635 = ((inst_33632) && (inst_33634));
var state_33655__$1 = state_33655;
var statearr_33705_33757 = state_33655__$1;
(statearr_33705_33757[(2)] = inst_33635);

(statearr_33705_33757[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (10))){
var inst_33557 = (state_33655[(8)]);
var inst_33578 = (state_33655[(2)]);
var inst_33579 = cljs.core.get.call(null,inst_33578,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33580 = cljs.core.get.call(null,inst_33578,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33581 = cljs.core.get.call(null,inst_33578,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33582 = inst_33557;
var state_33655__$1 = (function (){var statearr_33706 = state_33655;
(statearr_33706[(7)] = inst_33582);

(statearr_33706[(16)] = inst_33581);

(statearr_33706[(17)] = inst_33579);

(statearr_33706[(18)] = inst_33580);

return statearr_33706;
})();
var statearr_33707_33758 = state_33655__$1;
(statearr_33707_33758[(2)] = null);

(statearr_33707_33758[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (18))){
var inst_33597 = (state_33655[(2)]);
var state_33655__$1 = state_33655;
var statearr_33708_33759 = state_33655__$1;
(statearr_33708_33759[(2)] = inst_33597);

(statearr_33708_33759[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (37))){
var state_33655__$1 = state_33655;
var statearr_33709_33760 = state_33655__$1;
(statearr_33709_33760[(2)] = null);

(statearr_33709_33760[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (8))){
var inst_33557 = (state_33655[(8)]);
var inst_33575 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33557);
var state_33655__$1 = state_33655;
var statearr_33710_33761 = state_33655__$1;
(statearr_33710_33761[(2)] = inst_33575);

(statearr_33710_33761[(1)] = (10));


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
});})(c__30792__auto___33715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30625__auto__,c__30792__auto___33715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30626__auto__ = null;
var cljs$core$async$mix_$_state_machine__30626__auto____0 = (function (){
var statearr_33711 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33711[(0)] = cljs$core$async$mix_$_state_machine__30626__auto__);

(statearr_33711[(1)] = (1));

return statearr_33711;
});
var cljs$core$async$mix_$_state_machine__30626__auto____1 = (function (state_33655){
while(true){
var ret_value__30627__auto__ = (function (){try{while(true){
var result__30628__auto__ = switch__30625__auto__.call(null,state_33655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30628__auto__;
}
break;
}
}catch (e33712){if((e33712 instanceof Object)){
var ex__30629__auto__ = e33712;
var statearr_33713_33762 = state_33655;
(statearr_33713_33762[(5)] = ex__30629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33763 = state_33655;
state_33655 = G__33763;
continue;
} else {
return ret_value__30627__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30626__auto__ = function(state_33655){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30626__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30626__auto____1.call(this,state_33655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30626__auto____0;
cljs$core$async$mix_$_state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30626__auto____1;
return cljs$core$async$mix_$_state_machine__30626__auto__;
})()
;})(switch__30625__auto__,c__30792__auto___33715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30794__auto__ = (function (){var statearr_33714 = f__30793__auto__.call(null);
(statearr_33714[(6)] = c__30792__auto___33715);

return statearr_33714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___33715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__33765 = arguments.length;
switch (G__33765) {
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
var G__33769 = arguments.length;
switch (G__33769) {
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
return (function (p1__33767_SHARP_){
if(cljs.core.truth_(p1__33767_SHARP_.call(null,topic))){
return p1__33767_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33767_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33770 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33770 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33771){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33771 = meta33771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33772,meta33771__$1){
var self__ = this;
var _33772__$1 = this;
return (new cljs.core.async.t_cljs$core$async33770(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33771__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33770.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33772){
var self__ = this;
var _33772__$1 = this;
return self__.meta33771;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33770.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33770.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33770.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33770.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33770.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async33770.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33770.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33770.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33771","meta33771",1800743439,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33770.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33770";

cljs.core.async.t_cljs$core$async33770.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async33770");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33770.
 */
cljs.core.async.__GT_t_cljs$core$async33770 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33770(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33771){
return (new cljs.core.async.t_cljs$core$async33770(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33771));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33770(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30792__auto___33890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___33890,mults,ensure_mult,p){
return (function (){
var f__30793__auto__ = (function (){var switch__30625__auto__ = ((function (c__30792__auto___33890,mults,ensure_mult,p){
return (function (state_33844){
var state_val_33845 = (state_33844[(1)]);
if((state_val_33845 === (7))){
var inst_33840 = (state_33844[(2)]);
var state_33844__$1 = state_33844;
var statearr_33846_33891 = state_33844__$1;
(statearr_33846_33891[(2)] = inst_33840);

(statearr_33846_33891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (20))){
var state_33844__$1 = state_33844;
var statearr_33847_33892 = state_33844__$1;
(statearr_33847_33892[(2)] = null);

(statearr_33847_33892[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (1))){
var state_33844__$1 = state_33844;
var statearr_33848_33893 = state_33844__$1;
(statearr_33848_33893[(2)] = null);

(statearr_33848_33893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (24))){
var inst_33823 = (state_33844[(7)]);
var inst_33832 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33823);
var state_33844__$1 = state_33844;
var statearr_33849_33894 = state_33844__$1;
(statearr_33849_33894[(2)] = inst_33832);

(statearr_33849_33894[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (4))){
var inst_33775 = (state_33844[(8)]);
var inst_33775__$1 = (state_33844[(2)]);
var inst_33776 = (inst_33775__$1 == null);
var state_33844__$1 = (function (){var statearr_33850 = state_33844;
(statearr_33850[(8)] = inst_33775__$1);

return statearr_33850;
})();
if(cljs.core.truth_(inst_33776)){
var statearr_33851_33895 = state_33844__$1;
(statearr_33851_33895[(1)] = (5));

} else {
var statearr_33852_33896 = state_33844__$1;
(statearr_33852_33896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (15))){
var inst_33817 = (state_33844[(2)]);
var state_33844__$1 = state_33844;
var statearr_33853_33897 = state_33844__$1;
(statearr_33853_33897[(2)] = inst_33817);

(statearr_33853_33897[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (21))){
var inst_33837 = (state_33844[(2)]);
var state_33844__$1 = (function (){var statearr_33854 = state_33844;
(statearr_33854[(9)] = inst_33837);

return statearr_33854;
})();
var statearr_33855_33898 = state_33844__$1;
(statearr_33855_33898[(2)] = null);

(statearr_33855_33898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (13))){
var inst_33799 = (state_33844[(10)]);
var inst_33801 = cljs.core.chunked_seq_QMARK_.call(null,inst_33799);
var state_33844__$1 = state_33844;
if(inst_33801){
var statearr_33856_33899 = state_33844__$1;
(statearr_33856_33899[(1)] = (16));

} else {
var statearr_33857_33900 = state_33844__$1;
(statearr_33857_33900[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (22))){
var inst_33829 = (state_33844[(2)]);
var state_33844__$1 = state_33844;
if(cljs.core.truth_(inst_33829)){
var statearr_33858_33901 = state_33844__$1;
(statearr_33858_33901[(1)] = (23));

} else {
var statearr_33859_33902 = state_33844__$1;
(statearr_33859_33902[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (6))){
var inst_33775 = (state_33844[(8)]);
var inst_33823 = (state_33844[(7)]);
var inst_33825 = (state_33844[(11)]);
var inst_33823__$1 = topic_fn.call(null,inst_33775);
var inst_33824 = cljs.core.deref.call(null,mults);
var inst_33825__$1 = cljs.core.get.call(null,inst_33824,inst_33823__$1);
var state_33844__$1 = (function (){var statearr_33860 = state_33844;
(statearr_33860[(7)] = inst_33823__$1);

(statearr_33860[(11)] = inst_33825__$1);

return statearr_33860;
})();
if(cljs.core.truth_(inst_33825__$1)){
var statearr_33861_33903 = state_33844__$1;
(statearr_33861_33903[(1)] = (19));

} else {
var statearr_33862_33904 = state_33844__$1;
(statearr_33862_33904[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (25))){
var inst_33834 = (state_33844[(2)]);
var state_33844__$1 = state_33844;
var statearr_33863_33905 = state_33844__$1;
(statearr_33863_33905[(2)] = inst_33834);

(statearr_33863_33905[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (17))){
var inst_33799 = (state_33844[(10)]);
var inst_33808 = cljs.core.first.call(null,inst_33799);
var inst_33809 = cljs.core.async.muxch_STAR_.call(null,inst_33808);
var inst_33810 = cljs.core.async.close_BANG_.call(null,inst_33809);
var inst_33811 = cljs.core.next.call(null,inst_33799);
var inst_33785 = inst_33811;
var inst_33786 = null;
var inst_33787 = (0);
var inst_33788 = (0);
var state_33844__$1 = (function (){var statearr_33864 = state_33844;
(statearr_33864[(12)] = inst_33786);

(statearr_33864[(13)] = inst_33787);

(statearr_33864[(14)] = inst_33788);

(statearr_33864[(15)] = inst_33810);

(statearr_33864[(16)] = inst_33785);

return statearr_33864;
})();
var statearr_33865_33906 = state_33844__$1;
(statearr_33865_33906[(2)] = null);

(statearr_33865_33906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (3))){
var inst_33842 = (state_33844[(2)]);
var state_33844__$1 = state_33844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33844__$1,inst_33842);
} else {
if((state_val_33845 === (12))){
var inst_33819 = (state_33844[(2)]);
var state_33844__$1 = state_33844;
var statearr_33866_33907 = state_33844__$1;
(statearr_33866_33907[(2)] = inst_33819);

(statearr_33866_33907[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (2))){
var state_33844__$1 = state_33844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33844__$1,(4),ch);
} else {
if((state_val_33845 === (23))){
var state_33844__$1 = state_33844;
var statearr_33867_33908 = state_33844__$1;
(statearr_33867_33908[(2)] = null);

(statearr_33867_33908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (19))){
var inst_33775 = (state_33844[(8)]);
var inst_33825 = (state_33844[(11)]);
var inst_33827 = cljs.core.async.muxch_STAR_.call(null,inst_33825);
var state_33844__$1 = state_33844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33844__$1,(22),inst_33827,inst_33775);
} else {
if((state_val_33845 === (11))){
var inst_33799 = (state_33844[(10)]);
var inst_33785 = (state_33844[(16)]);
var inst_33799__$1 = cljs.core.seq.call(null,inst_33785);
var state_33844__$1 = (function (){var statearr_33868 = state_33844;
(statearr_33868[(10)] = inst_33799__$1);

return statearr_33868;
})();
if(inst_33799__$1){
var statearr_33869_33909 = state_33844__$1;
(statearr_33869_33909[(1)] = (13));

} else {
var statearr_33870_33910 = state_33844__$1;
(statearr_33870_33910[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (9))){
var inst_33821 = (state_33844[(2)]);
var state_33844__$1 = state_33844;
var statearr_33871_33911 = state_33844__$1;
(statearr_33871_33911[(2)] = inst_33821);

(statearr_33871_33911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (5))){
var inst_33782 = cljs.core.deref.call(null,mults);
var inst_33783 = cljs.core.vals.call(null,inst_33782);
var inst_33784 = cljs.core.seq.call(null,inst_33783);
var inst_33785 = inst_33784;
var inst_33786 = null;
var inst_33787 = (0);
var inst_33788 = (0);
var state_33844__$1 = (function (){var statearr_33872 = state_33844;
(statearr_33872[(12)] = inst_33786);

(statearr_33872[(13)] = inst_33787);

(statearr_33872[(14)] = inst_33788);

(statearr_33872[(16)] = inst_33785);

return statearr_33872;
})();
var statearr_33873_33912 = state_33844__$1;
(statearr_33873_33912[(2)] = null);

(statearr_33873_33912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (14))){
var state_33844__$1 = state_33844;
var statearr_33877_33913 = state_33844__$1;
(statearr_33877_33913[(2)] = null);

(statearr_33877_33913[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (16))){
var inst_33799 = (state_33844[(10)]);
var inst_33803 = cljs.core.chunk_first.call(null,inst_33799);
var inst_33804 = cljs.core.chunk_rest.call(null,inst_33799);
var inst_33805 = cljs.core.count.call(null,inst_33803);
var inst_33785 = inst_33804;
var inst_33786 = inst_33803;
var inst_33787 = inst_33805;
var inst_33788 = (0);
var state_33844__$1 = (function (){var statearr_33878 = state_33844;
(statearr_33878[(12)] = inst_33786);

(statearr_33878[(13)] = inst_33787);

(statearr_33878[(14)] = inst_33788);

(statearr_33878[(16)] = inst_33785);

return statearr_33878;
})();
var statearr_33879_33914 = state_33844__$1;
(statearr_33879_33914[(2)] = null);

(statearr_33879_33914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (10))){
var inst_33786 = (state_33844[(12)]);
var inst_33787 = (state_33844[(13)]);
var inst_33788 = (state_33844[(14)]);
var inst_33785 = (state_33844[(16)]);
var inst_33793 = cljs.core._nth.call(null,inst_33786,inst_33788);
var inst_33794 = cljs.core.async.muxch_STAR_.call(null,inst_33793);
var inst_33795 = cljs.core.async.close_BANG_.call(null,inst_33794);
var inst_33796 = (inst_33788 + (1));
var tmp33874 = inst_33786;
var tmp33875 = inst_33787;
var tmp33876 = inst_33785;
var inst_33785__$1 = tmp33876;
var inst_33786__$1 = tmp33874;
var inst_33787__$1 = tmp33875;
var inst_33788__$1 = inst_33796;
var state_33844__$1 = (function (){var statearr_33880 = state_33844;
(statearr_33880[(12)] = inst_33786__$1);

(statearr_33880[(13)] = inst_33787__$1);

(statearr_33880[(14)] = inst_33788__$1);

(statearr_33880[(17)] = inst_33795);

(statearr_33880[(16)] = inst_33785__$1);

return statearr_33880;
})();
var statearr_33881_33915 = state_33844__$1;
(statearr_33881_33915[(2)] = null);

(statearr_33881_33915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (18))){
var inst_33814 = (state_33844[(2)]);
var state_33844__$1 = state_33844;
var statearr_33882_33916 = state_33844__$1;
(statearr_33882_33916[(2)] = inst_33814);

(statearr_33882_33916[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (8))){
var inst_33787 = (state_33844[(13)]);
var inst_33788 = (state_33844[(14)]);
var inst_33790 = (inst_33788 < inst_33787);
var inst_33791 = inst_33790;
var state_33844__$1 = state_33844;
if(cljs.core.truth_(inst_33791)){
var statearr_33883_33917 = state_33844__$1;
(statearr_33883_33917[(1)] = (10));

} else {
var statearr_33884_33918 = state_33844__$1;
(statearr_33884_33918[(1)] = (11));

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
});})(c__30792__auto___33890,mults,ensure_mult,p))
;
return ((function (switch__30625__auto__,c__30792__auto___33890,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30626__auto__ = null;
var cljs$core$async$state_machine__30626__auto____0 = (function (){
var statearr_33885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33885[(0)] = cljs$core$async$state_machine__30626__auto__);

(statearr_33885[(1)] = (1));

return statearr_33885;
});
var cljs$core$async$state_machine__30626__auto____1 = (function (state_33844){
while(true){
var ret_value__30627__auto__ = (function (){try{while(true){
var result__30628__auto__ = switch__30625__auto__.call(null,state_33844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30628__auto__;
}
break;
}
}catch (e33886){if((e33886 instanceof Object)){
var ex__30629__auto__ = e33886;
var statearr_33887_33919 = state_33844;
(statearr_33887_33919[(5)] = ex__30629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33920 = state_33844;
state_33844 = G__33920;
continue;
} else {
return ret_value__30627__auto__;
}
break;
}
});
cljs$core$async$state_machine__30626__auto__ = function(state_33844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30626__auto____1.call(this,state_33844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30626__auto____0;
cljs$core$async$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30626__auto____1;
return cljs$core$async$state_machine__30626__auto__;
})()
;})(switch__30625__auto__,c__30792__auto___33890,mults,ensure_mult,p))
})();
var state__30794__auto__ = (function (){var statearr_33888 = f__30793__auto__.call(null);
(statearr_33888[(6)] = c__30792__auto___33890);

return statearr_33888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___33890,mults,ensure_mult,p))
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
var G__33922 = arguments.length;
switch (G__33922) {
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
var G__33925 = arguments.length;
switch (G__33925) {
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
var G__33928 = arguments.length;
switch (G__33928) {
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
var c__30792__auto___33995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___33995,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30793__auto__ = (function (){var switch__30625__auto__ = ((function (c__30792__auto___33995,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33967){
var state_val_33968 = (state_33967[(1)]);
if((state_val_33968 === (7))){
var state_33967__$1 = state_33967;
var statearr_33969_33996 = state_33967__$1;
(statearr_33969_33996[(2)] = null);

(statearr_33969_33996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (1))){
var state_33967__$1 = state_33967;
var statearr_33970_33997 = state_33967__$1;
(statearr_33970_33997[(2)] = null);

(statearr_33970_33997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (4))){
var inst_33931 = (state_33967[(7)]);
var inst_33933 = (inst_33931 < cnt);
var state_33967__$1 = state_33967;
if(cljs.core.truth_(inst_33933)){
var statearr_33971_33998 = state_33967__$1;
(statearr_33971_33998[(1)] = (6));

} else {
var statearr_33972_33999 = state_33967__$1;
(statearr_33972_33999[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (15))){
var inst_33963 = (state_33967[(2)]);
var state_33967__$1 = state_33967;
var statearr_33973_34000 = state_33967__$1;
(statearr_33973_34000[(2)] = inst_33963);

(statearr_33973_34000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (13))){
var inst_33956 = cljs.core.async.close_BANG_.call(null,out);
var state_33967__$1 = state_33967;
var statearr_33974_34001 = state_33967__$1;
(statearr_33974_34001[(2)] = inst_33956);

(statearr_33974_34001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (6))){
var state_33967__$1 = state_33967;
var statearr_33975_34002 = state_33967__$1;
(statearr_33975_34002[(2)] = null);

(statearr_33975_34002[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (3))){
var inst_33965 = (state_33967[(2)]);
var state_33967__$1 = state_33967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33967__$1,inst_33965);
} else {
if((state_val_33968 === (12))){
var inst_33953 = (state_33967[(8)]);
var inst_33953__$1 = (state_33967[(2)]);
var inst_33954 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33953__$1);
var state_33967__$1 = (function (){var statearr_33976 = state_33967;
(statearr_33976[(8)] = inst_33953__$1);

return statearr_33976;
})();
if(cljs.core.truth_(inst_33954)){
var statearr_33977_34003 = state_33967__$1;
(statearr_33977_34003[(1)] = (13));

} else {
var statearr_33978_34004 = state_33967__$1;
(statearr_33978_34004[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (2))){
var inst_33930 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33931 = (0);
var state_33967__$1 = (function (){var statearr_33979 = state_33967;
(statearr_33979[(7)] = inst_33931);

(statearr_33979[(9)] = inst_33930);

return statearr_33979;
})();
var statearr_33980_34005 = state_33967__$1;
(statearr_33980_34005[(2)] = null);

(statearr_33980_34005[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (11))){
var inst_33931 = (state_33967[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33967,(10),Object,null,(9));
var inst_33940 = chs__$1.call(null,inst_33931);
var inst_33941 = done.call(null,inst_33931);
var inst_33942 = cljs.core.async.take_BANG_.call(null,inst_33940,inst_33941);
var state_33967__$1 = state_33967;
var statearr_33981_34006 = state_33967__$1;
(statearr_33981_34006[(2)] = inst_33942);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33967__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (9))){
var inst_33931 = (state_33967[(7)]);
var inst_33944 = (state_33967[(2)]);
var inst_33945 = (inst_33931 + (1));
var inst_33931__$1 = inst_33945;
var state_33967__$1 = (function (){var statearr_33982 = state_33967;
(statearr_33982[(7)] = inst_33931__$1);

(statearr_33982[(10)] = inst_33944);

return statearr_33982;
})();
var statearr_33983_34007 = state_33967__$1;
(statearr_33983_34007[(2)] = null);

(statearr_33983_34007[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (5))){
var inst_33951 = (state_33967[(2)]);
var state_33967__$1 = (function (){var statearr_33984 = state_33967;
(statearr_33984[(11)] = inst_33951);

return statearr_33984;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33967__$1,(12),dchan);
} else {
if((state_val_33968 === (14))){
var inst_33953 = (state_33967[(8)]);
var inst_33958 = cljs.core.apply.call(null,f,inst_33953);
var state_33967__$1 = state_33967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33967__$1,(16),out,inst_33958);
} else {
if((state_val_33968 === (16))){
var inst_33960 = (state_33967[(2)]);
var state_33967__$1 = (function (){var statearr_33985 = state_33967;
(statearr_33985[(12)] = inst_33960);

return statearr_33985;
})();
var statearr_33986_34008 = state_33967__$1;
(statearr_33986_34008[(2)] = null);

(statearr_33986_34008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (10))){
var inst_33935 = (state_33967[(2)]);
var inst_33936 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33967__$1 = (function (){var statearr_33987 = state_33967;
(statearr_33987[(13)] = inst_33935);

return statearr_33987;
})();
var statearr_33988_34009 = state_33967__$1;
(statearr_33988_34009[(2)] = inst_33936);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33967__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33968 === (8))){
var inst_33949 = (state_33967[(2)]);
var state_33967__$1 = state_33967;
var statearr_33989_34010 = state_33967__$1;
(statearr_33989_34010[(2)] = inst_33949);

(statearr_33989_34010[(1)] = (5));


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
});})(c__30792__auto___33995,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30625__auto__,c__30792__auto___33995,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30626__auto__ = null;
var cljs$core$async$state_machine__30626__auto____0 = (function (){
var statearr_33990 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33990[(0)] = cljs$core$async$state_machine__30626__auto__);

(statearr_33990[(1)] = (1));

return statearr_33990;
});
var cljs$core$async$state_machine__30626__auto____1 = (function (state_33967){
while(true){
var ret_value__30627__auto__ = (function (){try{while(true){
var result__30628__auto__ = switch__30625__auto__.call(null,state_33967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30628__auto__;
}
break;
}
}catch (e33991){if((e33991 instanceof Object)){
var ex__30629__auto__ = e33991;
var statearr_33992_34011 = state_33967;
(statearr_33992_34011[(5)] = ex__30629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34012 = state_33967;
state_33967 = G__34012;
continue;
} else {
return ret_value__30627__auto__;
}
break;
}
});
cljs$core$async$state_machine__30626__auto__ = function(state_33967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30626__auto____1.call(this,state_33967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30626__auto____0;
cljs$core$async$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30626__auto____1;
return cljs$core$async$state_machine__30626__auto__;
})()
;})(switch__30625__auto__,c__30792__auto___33995,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30794__auto__ = (function (){var statearr_33993 = f__30793__auto__.call(null);
(statearr_33993[(6)] = c__30792__auto___33995);

return statearr_33993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___33995,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__34015 = arguments.length;
switch (G__34015) {
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
var c__30792__auto___34069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___34069,out){
return (function (){
var f__30793__auto__ = (function (){var switch__30625__auto__ = ((function (c__30792__auto___34069,out){
return (function (state_34047){
var state_val_34048 = (state_34047[(1)]);
if((state_val_34048 === (7))){
var inst_34027 = (state_34047[(7)]);
var inst_34026 = (state_34047[(8)]);
var inst_34026__$1 = (state_34047[(2)]);
var inst_34027__$1 = cljs.core.nth.call(null,inst_34026__$1,(0),null);
var inst_34028 = cljs.core.nth.call(null,inst_34026__$1,(1),null);
var inst_34029 = (inst_34027__$1 == null);
var state_34047__$1 = (function (){var statearr_34049 = state_34047;
(statearr_34049[(9)] = inst_34028);

(statearr_34049[(7)] = inst_34027__$1);

(statearr_34049[(8)] = inst_34026__$1);

return statearr_34049;
})();
if(cljs.core.truth_(inst_34029)){
var statearr_34050_34070 = state_34047__$1;
(statearr_34050_34070[(1)] = (8));

} else {
var statearr_34051_34071 = state_34047__$1;
(statearr_34051_34071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (1))){
var inst_34016 = cljs.core.vec.call(null,chs);
var inst_34017 = inst_34016;
var state_34047__$1 = (function (){var statearr_34052 = state_34047;
(statearr_34052[(10)] = inst_34017);

return statearr_34052;
})();
var statearr_34053_34072 = state_34047__$1;
(statearr_34053_34072[(2)] = null);

(statearr_34053_34072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (4))){
var inst_34017 = (state_34047[(10)]);
var state_34047__$1 = state_34047;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34047__$1,(7),inst_34017);
} else {
if((state_val_34048 === (6))){
var inst_34043 = (state_34047[(2)]);
var state_34047__$1 = state_34047;
var statearr_34054_34073 = state_34047__$1;
(statearr_34054_34073[(2)] = inst_34043);

(statearr_34054_34073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (3))){
var inst_34045 = (state_34047[(2)]);
var state_34047__$1 = state_34047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34047__$1,inst_34045);
} else {
if((state_val_34048 === (2))){
var inst_34017 = (state_34047[(10)]);
var inst_34019 = cljs.core.count.call(null,inst_34017);
var inst_34020 = (inst_34019 > (0));
var state_34047__$1 = state_34047;
if(cljs.core.truth_(inst_34020)){
var statearr_34056_34074 = state_34047__$1;
(statearr_34056_34074[(1)] = (4));

} else {
var statearr_34057_34075 = state_34047__$1;
(statearr_34057_34075[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (11))){
var inst_34017 = (state_34047[(10)]);
var inst_34036 = (state_34047[(2)]);
var tmp34055 = inst_34017;
var inst_34017__$1 = tmp34055;
var state_34047__$1 = (function (){var statearr_34058 = state_34047;
(statearr_34058[(11)] = inst_34036);

(statearr_34058[(10)] = inst_34017__$1);

return statearr_34058;
})();
var statearr_34059_34076 = state_34047__$1;
(statearr_34059_34076[(2)] = null);

(statearr_34059_34076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (9))){
var inst_34027 = (state_34047[(7)]);
var state_34047__$1 = state_34047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34047__$1,(11),out,inst_34027);
} else {
if((state_val_34048 === (5))){
var inst_34041 = cljs.core.async.close_BANG_.call(null,out);
var state_34047__$1 = state_34047;
var statearr_34060_34077 = state_34047__$1;
(statearr_34060_34077[(2)] = inst_34041);

(statearr_34060_34077[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (10))){
var inst_34039 = (state_34047[(2)]);
var state_34047__$1 = state_34047;
var statearr_34061_34078 = state_34047__$1;
(statearr_34061_34078[(2)] = inst_34039);

(statearr_34061_34078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (8))){
var inst_34028 = (state_34047[(9)]);
var inst_34027 = (state_34047[(7)]);
var inst_34017 = (state_34047[(10)]);
var inst_34026 = (state_34047[(8)]);
var inst_34031 = (function (){var cs = inst_34017;
var vec__34022 = inst_34026;
var v = inst_34027;
var c = inst_34028;
return ((function (cs,vec__34022,v,c,inst_34028,inst_34027,inst_34017,inst_34026,state_val_34048,c__30792__auto___34069,out){
return (function (p1__34013_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34013_SHARP_);
});
;})(cs,vec__34022,v,c,inst_34028,inst_34027,inst_34017,inst_34026,state_val_34048,c__30792__auto___34069,out))
})();
var inst_34032 = cljs.core.filterv.call(null,inst_34031,inst_34017);
var inst_34017__$1 = inst_34032;
var state_34047__$1 = (function (){var statearr_34062 = state_34047;
(statearr_34062[(10)] = inst_34017__$1);

return statearr_34062;
})();
var statearr_34063_34079 = state_34047__$1;
(statearr_34063_34079[(2)] = null);

(statearr_34063_34079[(1)] = (2));


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
});})(c__30792__auto___34069,out))
;
return ((function (switch__30625__auto__,c__30792__auto___34069,out){
return (function() {
var cljs$core$async$state_machine__30626__auto__ = null;
var cljs$core$async$state_machine__30626__auto____0 = (function (){
var statearr_34064 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34064[(0)] = cljs$core$async$state_machine__30626__auto__);

(statearr_34064[(1)] = (1));

return statearr_34064;
});
var cljs$core$async$state_machine__30626__auto____1 = (function (state_34047){
while(true){
var ret_value__30627__auto__ = (function (){try{while(true){
var result__30628__auto__ = switch__30625__auto__.call(null,state_34047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30628__auto__;
}
break;
}
}catch (e34065){if((e34065 instanceof Object)){
var ex__30629__auto__ = e34065;
var statearr_34066_34080 = state_34047;
(statearr_34066_34080[(5)] = ex__30629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34081 = state_34047;
state_34047 = G__34081;
continue;
} else {
return ret_value__30627__auto__;
}
break;
}
});
cljs$core$async$state_machine__30626__auto__ = function(state_34047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30626__auto____1.call(this,state_34047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30626__auto____0;
cljs$core$async$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30626__auto____1;
return cljs$core$async$state_machine__30626__auto__;
})()
;})(switch__30625__auto__,c__30792__auto___34069,out))
})();
var state__30794__auto__ = (function (){var statearr_34067 = f__30793__auto__.call(null);
(statearr_34067[(6)] = c__30792__auto___34069);

return statearr_34067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___34069,out))
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
var G__34083 = arguments.length;
switch (G__34083) {
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
var c__30792__auto___34128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___34128,out){
return (function (){
var f__30793__auto__ = (function (){var switch__30625__auto__ = ((function (c__30792__auto___34128,out){
return (function (state_34107){
var state_val_34108 = (state_34107[(1)]);
if((state_val_34108 === (7))){
var inst_34089 = (state_34107[(7)]);
var inst_34089__$1 = (state_34107[(2)]);
var inst_34090 = (inst_34089__$1 == null);
var inst_34091 = cljs.core.not.call(null,inst_34090);
var state_34107__$1 = (function (){var statearr_34109 = state_34107;
(statearr_34109[(7)] = inst_34089__$1);

return statearr_34109;
})();
if(inst_34091){
var statearr_34110_34129 = state_34107__$1;
(statearr_34110_34129[(1)] = (8));

} else {
var statearr_34111_34130 = state_34107__$1;
(statearr_34111_34130[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34108 === (1))){
var inst_34084 = (0);
var state_34107__$1 = (function (){var statearr_34112 = state_34107;
(statearr_34112[(8)] = inst_34084);

return statearr_34112;
})();
var statearr_34113_34131 = state_34107__$1;
(statearr_34113_34131[(2)] = null);

(statearr_34113_34131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34108 === (4))){
var state_34107__$1 = state_34107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34107__$1,(7),ch);
} else {
if((state_val_34108 === (6))){
var inst_34102 = (state_34107[(2)]);
var state_34107__$1 = state_34107;
var statearr_34114_34132 = state_34107__$1;
(statearr_34114_34132[(2)] = inst_34102);

(statearr_34114_34132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34108 === (3))){
var inst_34104 = (state_34107[(2)]);
var inst_34105 = cljs.core.async.close_BANG_.call(null,out);
var state_34107__$1 = (function (){var statearr_34115 = state_34107;
(statearr_34115[(9)] = inst_34104);

return statearr_34115;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34107__$1,inst_34105);
} else {
if((state_val_34108 === (2))){
var inst_34084 = (state_34107[(8)]);
var inst_34086 = (inst_34084 < n);
var state_34107__$1 = state_34107;
if(cljs.core.truth_(inst_34086)){
var statearr_34116_34133 = state_34107__$1;
(statearr_34116_34133[(1)] = (4));

} else {
var statearr_34117_34134 = state_34107__$1;
(statearr_34117_34134[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34108 === (11))){
var inst_34084 = (state_34107[(8)]);
var inst_34094 = (state_34107[(2)]);
var inst_34095 = (inst_34084 + (1));
var inst_34084__$1 = inst_34095;
var state_34107__$1 = (function (){var statearr_34118 = state_34107;
(statearr_34118[(10)] = inst_34094);

(statearr_34118[(8)] = inst_34084__$1);

return statearr_34118;
})();
var statearr_34119_34135 = state_34107__$1;
(statearr_34119_34135[(2)] = null);

(statearr_34119_34135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34108 === (9))){
var state_34107__$1 = state_34107;
var statearr_34120_34136 = state_34107__$1;
(statearr_34120_34136[(2)] = null);

(statearr_34120_34136[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34108 === (5))){
var state_34107__$1 = state_34107;
var statearr_34121_34137 = state_34107__$1;
(statearr_34121_34137[(2)] = null);

(statearr_34121_34137[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34108 === (10))){
var inst_34099 = (state_34107[(2)]);
var state_34107__$1 = state_34107;
var statearr_34122_34138 = state_34107__$1;
(statearr_34122_34138[(2)] = inst_34099);

(statearr_34122_34138[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34108 === (8))){
var inst_34089 = (state_34107[(7)]);
var state_34107__$1 = state_34107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34107__$1,(11),out,inst_34089);
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
});})(c__30792__auto___34128,out))
;
return ((function (switch__30625__auto__,c__30792__auto___34128,out){
return (function() {
var cljs$core$async$state_machine__30626__auto__ = null;
var cljs$core$async$state_machine__30626__auto____0 = (function (){
var statearr_34123 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34123[(0)] = cljs$core$async$state_machine__30626__auto__);

(statearr_34123[(1)] = (1));

return statearr_34123;
});
var cljs$core$async$state_machine__30626__auto____1 = (function (state_34107){
while(true){
var ret_value__30627__auto__ = (function (){try{while(true){
var result__30628__auto__ = switch__30625__auto__.call(null,state_34107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30628__auto__;
}
break;
}
}catch (e34124){if((e34124 instanceof Object)){
var ex__30629__auto__ = e34124;
var statearr_34125_34139 = state_34107;
(statearr_34125_34139[(5)] = ex__30629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34140 = state_34107;
state_34107 = G__34140;
continue;
} else {
return ret_value__30627__auto__;
}
break;
}
});
cljs$core$async$state_machine__30626__auto__ = function(state_34107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30626__auto____1.call(this,state_34107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30626__auto____0;
cljs$core$async$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30626__auto____1;
return cljs$core$async$state_machine__30626__auto__;
})()
;})(switch__30625__auto__,c__30792__auto___34128,out))
})();
var state__30794__auto__ = (function (){var statearr_34126 = f__30793__auto__.call(null);
(statearr_34126[(6)] = c__30792__auto___34128);

return statearr_34126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___34128,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34142 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34142 = (function (f,ch,meta34143){
this.f = f;
this.ch = ch;
this.meta34143 = meta34143;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34144,meta34143__$1){
var self__ = this;
var _34144__$1 = this;
return (new cljs.core.async.t_cljs$core$async34142(self__.f,self__.ch,meta34143__$1));
});

cljs.core.async.t_cljs$core$async34142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34144){
var self__ = this;
var _34144__$1 = this;
return self__.meta34143;
});

cljs.core.async.t_cljs$core$async34142.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34142.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34142.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34142.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34142.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34145 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34145 = (function (f,ch,meta34143,_,fn1,meta34146){
this.f = f;
this.ch = ch;
this.meta34143 = meta34143;
this._ = _;
this.fn1 = fn1;
this.meta34146 = meta34146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34147,meta34146__$1){
var self__ = this;
var _34147__$1 = this;
return (new cljs.core.async.t_cljs$core$async34145(self__.f,self__.ch,self__.meta34143,self__._,self__.fn1,meta34146__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34145.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34147){
var self__ = this;
var _34147__$1 = this;
return self__.meta34146;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34145.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34145.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34145.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34145.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34141_SHARP_){
return f1.call(null,(((p1__34141_SHARP_ == null))?null:self__.f.call(null,p1__34141_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34145.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34143","meta34143",918923878,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34142","cljs.core.async/t_cljs$core$async34142",1936247506,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34146","meta34146",489799482,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34145.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34145.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34145";

cljs.core.async.t_cljs$core$async34145.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async34145");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34145.
 */
cljs.core.async.__GT_t_cljs$core$async34145 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34145(f__$1,ch__$1,meta34143__$1,___$2,fn1__$1,meta34146){
return (new cljs.core.async.t_cljs$core$async34145(f__$1,ch__$1,meta34143__$1,___$2,fn1__$1,meta34146));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34145(self__.f,self__.ch,self__.meta34143,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async34142.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34142.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34142.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34143","meta34143",918923878,null)], null);
});

cljs.core.async.t_cljs$core$async34142.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34142.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34142";

cljs.core.async.t_cljs$core$async34142.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async34142");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34142.
 */
cljs.core.async.__GT_t_cljs$core$async34142 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34142(f__$1,ch__$1,meta34143){
return (new cljs.core.async.t_cljs$core$async34142(f__$1,ch__$1,meta34143));
});

}

return (new cljs.core.async.t_cljs$core$async34142(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34148 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34148 = (function (f,ch,meta34149){
this.f = f;
this.ch = ch;
this.meta34149 = meta34149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34150,meta34149__$1){
var self__ = this;
var _34150__$1 = this;
return (new cljs.core.async.t_cljs$core$async34148(self__.f,self__.ch,meta34149__$1));
});

cljs.core.async.t_cljs$core$async34148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34150){
var self__ = this;
var _34150__$1 = this;
return self__.meta34149;
});

cljs.core.async.t_cljs$core$async34148.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34148.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34148.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34148.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34148.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34148.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34148.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34149","meta34149",-804310628,null)], null);
});

cljs.core.async.t_cljs$core$async34148.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34148";

cljs.core.async.t_cljs$core$async34148.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async34148");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34148.
 */
cljs.core.async.__GT_t_cljs$core$async34148 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34148(f__$1,ch__$1,meta34149){
return (new cljs.core.async.t_cljs$core$async34148(f__$1,ch__$1,meta34149));
});

}

return (new cljs.core.async.t_cljs$core$async34148(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34151 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34151 = (function (p,ch,meta34152){
this.p = p;
this.ch = ch;
this.meta34152 = meta34152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34153,meta34152__$1){
var self__ = this;
var _34153__$1 = this;
return (new cljs.core.async.t_cljs$core$async34151(self__.p,self__.ch,meta34152__$1));
});

cljs.core.async.t_cljs$core$async34151.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34153){
var self__ = this;
var _34153__$1 = this;
return self__.meta34152;
});

cljs.core.async.t_cljs$core$async34151.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34151.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34151.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34151.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34151.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34151.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34151.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34151.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34152","meta34152",-1803152296,null)], null);
});

cljs.core.async.t_cljs$core$async34151.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34151.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34151";

cljs.core.async.t_cljs$core$async34151.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async34151");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34151.
 */
cljs.core.async.__GT_t_cljs$core$async34151 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34151(p__$1,ch__$1,meta34152){
return (new cljs.core.async.t_cljs$core$async34151(p__$1,ch__$1,meta34152));
});

}

return (new cljs.core.async.t_cljs$core$async34151(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34155 = arguments.length;
switch (G__34155) {
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
var c__30792__auto___34195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___34195,out){
return (function (){
var f__30793__auto__ = (function (){var switch__30625__auto__ = ((function (c__30792__auto___34195,out){
return (function (state_34176){
var state_val_34177 = (state_34176[(1)]);
if((state_val_34177 === (7))){
var inst_34172 = (state_34176[(2)]);
var state_34176__$1 = state_34176;
var statearr_34178_34196 = state_34176__$1;
(statearr_34178_34196[(2)] = inst_34172);

(statearr_34178_34196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34177 === (1))){
var state_34176__$1 = state_34176;
var statearr_34179_34197 = state_34176__$1;
(statearr_34179_34197[(2)] = null);

(statearr_34179_34197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34177 === (4))){
var inst_34158 = (state_34176[(7)]);
var inst_34158__$1 = (state_34176[(2)]);
var inst_34159 = (inst_34158__$1 == null);
var state_34176__$1 = (function (){var statearr_34180 = state_34176;
(statearr_34180[(7)] = inst_34158__$1);

return statearr_34180;
})();
if(cljs.core.truth_(inst_34159)){
var statearr_34181_34198 = state_34176__$1;
(statearr_34181_34198[(1)] = (5));

} else {
var statearr_34182_34199 = state_34176__$1;
(statearr_34182_34199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34177 === (6))){
var inst_34158 = (state_34176[(7)]);
var inst_34163 = p.call(null,inst_34158);
var state_34176__$1 = state_34176;
if(cljs.core.truth_(inst_34163)){
var statearr_34183_34200 = state_34176__$1;
(statearr_34183_34200[(1)] = (8));

} else {
var statearr_34184_34201 = state_34176__$1;
(statearr_34184_34201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34177 === (3))){
var inst_34174 = (state_34176[(2)]);
var state_34176__$1 = state_34176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34176__$1,inst_34174);
} else {
if((state_val_34177 === (2))){
var state_34176__$1 = state_34176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34176__$1,(4),ch);
} else {
if((state_val_34177 === (11))){
var inst_34166 = (state_34176[(2)]);
var state_34176__$1 = state_34176;
var statearr_34185_34202 = state_34176__$1;
(statearr_34185_34202[(2)] = inst_34166);

(statearr_34185_34202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34177 === (9))){
var state_34176__$1 = state_34176;
var statearr_34186_34203 = state_34176__$1;
(statearr_34186_34203[(2)] = null);

(statearr_34186_34203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34177 === (5))){
var inst_34161 = cljs.core.async.close_BANG_.call(null,out);
var state_34176__$1 = state_34176;
var statearr_34187_34204 = state_34176__$1;
(statearr_34187_34204[(2)] = inst_34161);

(statearr_34187_34204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34177 === (10))){
var inst_34169 = (state_34176[(2)]);
var state_34176__$1 = (function (){var statearr_34188 = state_34176;
(statearr_34188[(8)] = inst_34169);

return statearr_34188;
})();
var statearr_34189_34205 = state_34176__$1;
(statearr_34189_34205[(2)] = null);

(statearr_34189_34205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34177 === (8))){
var inst_34158 = (state_34176[(7)]);
var state_34176__$1 = state_34176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34176__$1,(11),out,inst_34158);
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
});})(c__30792__auto___34195,out))
;
return ((function (switch__30625__auto__,c__30792__auto___34195,out){
return (function() {
var cljs$core$async$state_machine__30626__auto__ = null;
var cljs$core$async$state_machine__30626__auto____0 = (function (){
var statearr_34190 = [null,null,null,null,null,null,null,null,null];
(statearr_34190[(0)] = cljs$core$async$state_machine__30626__auto__);

(statearr_34190[(1)] = (1));

return statearr_34190;
});
var cljs$core$async$state_machine__30626__auto____1 = (function (state_34176){
while(true){
var ret_value__30627__auto__ = (function (){try{while(true){
var result__30628__auto__ = switch__30625__auto__.call(null,state_34176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30628__auto__;
}
break;
}
}catch (e34191){if((e34191 instanceof Object)){
var ex__30629__auto__ = e34191;
var statearr_34192_34206 = state_34176;
(statearr_34192_34206[(5)] = ex__30629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34207 = state_34176;
state_34176 = G__34207;
continue;
} else {
return ret_value__30627__auto__;
}
break;
}
});
cljs$core$async$state_machine__30626__auto__ = function(state_34176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30626__auto____1.call(this,state_34176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30626__auto____0;
cljs$core$async$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30626__auto____1;
return cljs$core$async$state_machine__30626__auto__;
})()
;})(switch__30625__auto__,c__30792__auto___34195,out))
})();
var state__30794__auto__ = (function (){var statearr_34193 = f__30793__auto__.call(null);
(statearr_34193[(6)] = c__30792__auto___34195);

return statearr_34193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___34195,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34209 = arguments.length;
switch (G__34209) {
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
var c__30792__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto__){
return (function (){
var f__30793__auto__ = (function (){var switch__30625__auto__ = ((function (c__30792__auto__){
return (function (state_34272){
var state_val_34273 = (state_34272[(1)]);
if((state_val_34273 === (7))){
var inst_34268 = (state_34272[(2)]);
var state_34272__$1 = state_34272;
var statearr_34274_34312 = state_34272__$1;
(statearr_34274_34312[(2)] = inst_34268);

(statearr_34274_34312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34273 === (20))){
var inst_34238 = (state_34272[(7)]);
var inst_34249 = (state_34272[(2)]);
var inst_34250 = cljs.core.next.call(null,inst_34238);
var inst_34224 = inst_34250;
var inst_34225 = null;
var inst_34226 = (0);
var inst_34227 = (0);
var state_34272__$1 = (function (){var statearr_34275 = state_34272;
(statearr_34275[(8)] = inst_34227);

(statearr_34275[(9)] = inst_34249);

(statearr_34275[(10)] = inst_34224);

(statearr_34275[(11)] = inst_34225);

(statearr_34275[(12)] = inst_34226);

return statearr_34275;
})();
var statearr_34276_34313 = state_34272__$1;
(statearr_34276_34313[(2)] = null);

(statearr_34276_34313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34273 === (1))){
var state_34272__$1 = state_34272;
var statearr_34277_34314 = state_34272__$1;
(statearr_34277_34314[(2)] = null);

(statearr_34277_34314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34273 === (4))){
var inst_34213 = (state_34272[(13)]);
var inst_34213__$1 = (state_34272[(2)]);
var inst_34214 = (inst_34213__$1 == null);
var state_34272__$1 = (function (){var statearr_34278 = state_34272;
(statearr_34278[(13)] = inst_34213__$1);

return statearr_34278;
})();
if(cljs.core.truth_(inst_34214)){
var statearr_34279_34315 = state_34272__$1;
(statearr_34279_34315[(1)] = (5));

} else {
var statearr_34280_34316 = state_34272__$1;
(statearr_34280_34316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34273 === (15))){
var state_34272__$1 = state_34272;
var statearr_34284_34317 = state_34272__$1;
(statearr_34284_34317[(2)] = null);

(statearr_34284_34317[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34273 === (21))){
var state_34272__$1 = state_34272;
var statearr_34285_34318 = state_34272__$1;
(statearr_34285_34318[(2)] = null);

(statearr_34285_34318[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34273 === (13))){
var inst_34227 = (state_34272[(8)]);
var inst_34224 = (state_34272[(10)]);
var inst_34225 = (state_34272[(11)]);
var inst_34226 = (state_34272[(12)]);
var inst_34234 = (state_34272[(2)]);
var inst_34235 = (inst_34227 + (1));
var tmp34281 = inst_34224;
var tmp34282 = inst_34225;
var tmp34283 = inst_34226;
var inst_34224__$1 = tmp34281;
var inst_34225__$1 = tmp34282;
var inst_34226__$1 = tmp34283;
var inst_34227__$1 = inst_34235;
var state_34272__$1 = (function (){var statearr_34286 = state_34272;
(statearr_34286[(8)] = inst_34227__$1);

(statearr_34286[(14)] = inst_34234);

(statearr_34286[(10)] = inst_34224__$1);

(statearr_34286[(11)] = inst_34225__$1);

(statearr_34286[(12)] = inst_34226__$1);

return statearr_34286;
})();
var statearr_34287_34319 = state_34272__$1;
(statearr_34287_34319[(2)] = null);

(statearr_34287_34319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34273 === (22))){
var state_34272__$1 = state_34272;
var statearr_34288_34320 = state_34272__$1;
(statearr_34288_34320[(2)] = null);

(statearr_34288_34320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34273 === (6))){
var inst_34213 = (state_34272[(13)]);
var inst_34222 = f.call(null,inst_34213);
var inst_34223 = cljs.core.seq.call(null,inst_34222);
var inst_34224 = inst_34223;
var inst_34225 = null;
var inst_34226 = (0);
var inst_34227 = (0);
var state_34272__$1 = (function (){var statearr_34289 = state_34272;
(statearr_34289[(8)] = inst_34227);

(statearr_34289[(10)] = inst_34224);

(statearr_34289[(11)] = inst_34225);

(statearr_34289[(12)] = inst_34226);

return statearr_34289;
})();
var statearr_34290_34321 = state_34272__$1;
(statearr_34290_34321[(2)] = null);

(statearr_34290_34321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34273 === (17))){
var inst_34238 = (state_34272[(7)]);
var inst_34242 = cljs.core.chunk_first.call(null,inst_34238);
var inst_34243 = cljs.core.chunk_rest.call(null,inst_34238);
var inst_34244 = cljs.core.count.call(null,inst_34242);
var inst_34224 = inst_34243;
var inst_34225 = inst_34242;
var inst_34226 = inst_34244;
var inst_34227 = (0);
var state_34272__$1 = (function (){var statearr_34291 = state_34272;
(statearr_34291[(8)] = inst_34227);

(statearr_34291[(10)] = inst_34224);

(statearr_34291[(11)] = inst_34225);

(statearr_34291[(12)] = inst_34226);

return statearr_34291;
})();
var statearr_34292_34322 = state_34272__$1;
(statearr_34292_34322[(2)] = null);

(statearr_34292_34322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34273 === (3))){
var inst_34270 = (state_34272[(2)]);
var state_34272__$1 = state_34272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34272__$1,inst_34270);
} else {
if((state_val_34273 === (12))){
var inst_34258 = (state_34272[(2)]);
var state_34272__$1 = state_34272;
var statearr_34293_34323 = state_34272__$1;
(statearr_34293_34323[(2)] = inst_34258);

(statearr_34293_34323[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34273 === (2))){
var state_34272__$1 = state_34272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34272__$1,(4),in$);
} else {
if((state_val_34273 === (23))){
var inst_34266 = (state_34272[(2)]);
var state_34272__$1 = state_34272;
var statearr_34294_34324 = state_34272__$1;
(statearr_34294_34324[(2)] = inst_34266);

(statearr_34294_34324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34273 === (19))){
var inst_34253 = (state_34272[(2)]);
var state_34272__$1 = state_34272;
var statearr_34295_34325 = state_34272__$1;
(statearr_34295_34325[(2)] = inst_34253);

(statearr_34295_34325[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34273 === (11))){
var inst_34238 = (state_34272[(7)]);
var inst_34224 = (state_34272[(10)]);
var inst_34238__$1 = cljs.core.seq.call(null,inst_34224);
var state_34272__$1 = (function (){var statearr_34296 = state_34272;
(statearr_34296[(7)] = inst_34238__$1);

return statearr_34296;
})();
if(inst_34238__$1){
var statearr_34297_34326 = state_34272__$1;
(statearr_34297_34326[(1)] = (14));

} else {
var statearr_34298_34327 = state_34272__$1;
(statearr_34298_34327[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34273 === (9))){
var inst_34260 = (state_34272[(2)]);
var inst_34261 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34272__$1 = (function (){var statearr_34299 = state_34272;
(statearr_34299[(15)] = inst_34260);

return statearr_34299;
})();
if(cljs.core.truth_(inst_34261)){
var statearr_34300_34328 = state_34272__$1;
(statearr_34300_34328[(1)] = (21));

} else {
var statearr_34301_34329 = state_34272__$1;
(statearr_34301_34329[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34273 === (5))){
var inst_34216 = cljs.core.async.close_BANG_.call(null,out);
var state_34272__$1 = state_34272;
var statearr_34302_34330 = state_34272__$1;
(statearr_34302_34330[(2)] = inst_34216);

(statearr_34302_34330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34273 === (14))){
var inst_34238 = (state_34272[(7)]);
var inst_34240 = cljs.core.chunked_seq_QMARK_.call(null,inst_34238);
var state_34272__$1 = state_34272;
if(inst_34240){
var statearr_34303_34331 = state_34272__$1;
(statearr_34303_34331[(1)] = (17));

} else {
var statearr_34304_34332 = state_34272__$1;
(statearr_34304_34332[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34273 === (16))){
var inst_34256 = (state_34272[(2)]);
var state_34272__$1 = state_34272;
var statearr_34305_34333 = state_34272__$1;
(statearr_34305_34333[(2)] = inst_34256);

(statearr_34305_34333[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34273 === (10))){
var inst_34227 = (state_34272[(8)]);
var inst_34225 = (state_34272[(11)]);
var inst_34232 = cljs.core._nth.call(null,inst_34225,inst_34227);
var state_34272__$1 = state_34272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34272__$1,(13),out,inst_34232);
} else {
if((state_val_34273 === (18))){
var inst_34238 = (state_34272[(7)]);
var inst_34247 = cljs.core.first.call(null,inst_34238);
var state_34272__$1 = state_34272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34272__$1,(20),out,inst_34247);
} else {
if((state_val_34273 === (8))){
var inst_34227 = (state_34272[(8)]);
var inst_34226 = (state_34272[(12)]);
var inst_34229 = (inst_34227 < inst_34226);
var inst_34230 = inst_34229;
var state_34272__$1 = state_34272;
if(cljs.core.truth_(inst_34230)){
var statearr_34306_34334 = state_34272__$1;
(statearr_34306_34334[(1)] = (10));

} else {
var statearr_34307_34335 = state_34272__$1;
(statearr_34307_34335[(1)] = (11));

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
});})(c__30792__auto__))
;
return ((function (switch__30625__auto__,c__30792__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30626__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30626__auto____0 = (function (){
var statearr_34308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34308[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30626__auto__);

(statearr_34308[(1)] = (1));

return statearr_34308;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30626__auto____1 = (function (state_34272){
while(true){
var ret_value__30627__auto__ = (function (){try{while(true){
var result__30628__auto__ = switch__30625__auto__.call(null,state_34272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30628__auto__;
}
break;
}
}catch (e34309){if((e34309 instanceof Object)){
var ex__30629__auto__ = e34309;
var statearr_34310_34336 = state_34272;
(statearr_34310_34336[(5)] = ex__30629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34337 = state_34272;
state_34272 = G__34337;
continue;
} else {
return ret_value__30627__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30626__auto__ = function(state_34272){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30626__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30626__auto____1.call(this,state_34272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30626__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30626__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30626__auto__;
})()
;})(switch__30625__auto__,c__30792__auto__))
})();
var state__30794__auto__ = (function (){var statearr_34311 = f__30793__auto__.call(null);
(statearr_34311[(6)] = c__30792__auto__);

return statearr_34311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto__))
);

return c__30792__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34339 = arguments.length;
switch (G__34339) {
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
var G__34342 = arguments.length;
switch (G__34342) {
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
var G__34345 = arguments.length;
switch (G__34345) {
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
var c__30792__auto___34392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___34392,out){
return (function (){
var f__30793__auto__ = (function (){var switch__30625__auto__ = ((function (c__30792__auto___34392,out){
return (function (state_34369){
var state_val_34370 = (state_34369[(1)]);
if((state_val_34370 === (7))){
var inst_34364 = (state_34369[(2)]);
var state_34369__$1 = state_34369;
var statearr_34371_34393 = state_34369__$1;
(statearr_34371_34393[(2)] = inst_34364);

(statearr_34371_34393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (1))){
var inst_34346 = null;
var state_34369__$1 = (function (){var statearr_34372 = state_34369;
(statearr_34372[(7)] = inst_34346);

return statearr_34372;
})();
var statearr_34373_34394 = state_34369__$1;
(statearr_34373_34394[(2)] = null);

(statearr_34373_34394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (4))){
var inst_34349 = (state_34369[(8)]);
var inst_34349__$1 = (state_34369[(2)]);
var inst_34350 = (inst_34349__$1 == null);
var inst_34351 = cljs.core.not.call(null,inst_34350);
var state_34369__$1 = (function (){var statearr_34374 = state_34369;
(statearr_34374[(8)] = inst_34349__$1);

return statearr_34374;
})();
if(inst_34351){
var statearr_34375_34395 = state_34369__$1;
(statearr_34375_34395[(1)] = (5));

} else {
var statearr_34376_34396 = state_34369__$1;
(statearr_34376_34396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (6))){
var state_34369__$1 = state_34369;
var statearr_34377_34397 = state_34369__$1;
(statearr_34377_34397[(2)] = null);

(statearr_34377_34397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (3))){
var inst_34366 = (state_34369[(2)]);
var inst_34367 = cljs.core.async.close_BANG_.call(null,out);
var state_34369__$1 = (function (){var statearr_34378 = state_34369;
(statearr_34378[(9)] = inst_34366);

return statearr_34378;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34369__$1,inst_34367);
} else {
if((state_val_34370 === (2))){
var state_34369__$1 = state_34369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34369__$1,(4),ch);
} else {
if((state_val_34370 === (11))){
var inst_34349 = (state_34369[(8)]);
var inst_34358 = (state_34369[(2)]);
var inst_34346 = inst_34349;
var state_34369__$1 = (function (){var statearr_34379 = state_34369;
(statearr_34379[(7)] = inst_34346);

(statearr_34379[(10)] = inst_34358);

return statearr_34379;
})();
var statearr_34380_34398 = state_34369__$1;
(statearr_34380_34398[(2)] = null);

(statearr_34380_34398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (9))){
var inst_34349 = (state_34369[(8)]);
var state_34369__$1 = state_34369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34369__$1,(11),out,inst_34349);
} else {
if((state_val_34370 === (5))){
var inst_34349 = (state_34369[(8)]);
var inst_34346 = (state_34369[(7)]);
var inst_34353 = cljs.core._EQ_.call(null,inst_34349,inst_34346);
var state_34369__$1 = state_34369;
if(inst_34353){
var statearr_34382_34399 = state_34369__$1;
(statearr_34382_34399[(1)] = (8));

} else {
var statearr_34383_34400 = state_34369__$1;
(statearr_34383_34400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (10))){
var inst_34361 = (state_34369[(2)]);
var state_34369__$1 = state_34369;
var statearr_34384_34401 = state_34369__$1;
(statearr_34384_34401[(2)] = inst_34361);

(statearr_34384_34401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (8))){
var inst_34346 = (state_34369[(7)]);
var tmp34381 = inst_34346;
var inst_34346__$1 = tmp34381;
var state_34369__$1 = (function (){var statearr_34385 = state_34369;
(statearr_34385[(7)] = inst_34346__$1);

return statearr_34385;
})();
var statearr_34386_34402 = state_34369__$1;
(statearr_34386_34402[(2)] = null);

(statearr_34386_34402[(1)] = (2));


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
});})(c__30792__auto___34392,out))
;
return ((function (switch__30625__auto__,c__30792__auto___34392,out){
return (function() {
var cljs$core$async$state_machine__30626__auto__ = null;
var cljs$core$async$state_machine__30626__auto____0 = (function (){
var statearr_34387 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34387[(0)] = cljs$core$async$state_machine__30626__auto__);

(statearr_34387[(1)] = (1));

return statearr_34387;
});
var cljs$core$async$state_machine__30626__auto____1 = (function (state_34369){
while(true){
var ret_value__30627__auto__ = (function (){try{while(true){
var result__30628__auto__ = switch__30625__auto__.call(null,state_34369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30628__auto__;
}
break;
}
}catch (e34388){if((e34388 instanceof Object)){
var ex__30629__auto__ = e34388;
var statearr_34389_34403 = state_34369;
(statearr_34389_34403[(5)] = ex__30629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34404 = state_34369;
state_34369 = G__34404;
continue;
} else {
return ret_value__30627__auto__;
}
break;
}
});
cljs$core$async$state_machine__30626__auto__ = function(state_34369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30626__auto____1.call(this,state_34369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30626__auto____0;
cljs$core$async$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30626__auto____1;
return cljs$core$async$state_machine__30626__auto__;
})()
;})(switch__30625__auto__,c__30792__auto___34392,out))
})();
var state__30794__auto__ = (function (){var statearr_34390 = f__30793__auto__.call(null);
(statearr_34390[(6)] = c__30792__auto___34392);

return statearr_34390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___34392,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34406 = arguments.length;
switch (G__34406) {
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
var c__30792__auto___34472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___34472,out){
return (function (){
var f__30793__auto__ = (function (){var switch__30625__auto__ = ((function (c__30792__auto___34472,out){
return (function (state_34444){
var state_val_34445 = (state_34444[(1)]);
if((state_val_34445 === (7))){
var inst_34440 = (state_34444[(2)]);
var state_34444__$1 = state_34444;
var statearr_34446_34473 = state_34444__$1;
(statearr_34446_34473[(2)] = inst_34440);

(statearr_34446_34473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (1))){
var inst_34407 = (new Array(n));
var inst_34408 = inst_34407;
var inst_34409 = (0);
var state_34444__$1 = (function (){var statearr_34447 = state_34444;
(statearr_34447[(7)] = inst_34409);

(statearr_34447[(8)] = inst_34408);

return statearr_34447;
})();
var statearr_34448_34474 = state_34444__$1;
(statearr_34448_34474[(2)] = null);

(statearr_34448_34474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (4))){
var inst_34412 = (state_34444[(9)]);
var inst_34412__$1 = (state_34444[(2)]);
var inst_34413 = (inst_34412__$1 == null);
var inst_34414 = cljs.core.not.call(null,inst_34413);
var state_34444__$1 = (function (){var statearr_34449 = state_34444;
(statearr_34449[(9)] = inst_34412__$1);

return statearr_34449;
})();
if(inst_34414){
var statearr_34450_34475 = state_34444__$1;
(statearr_34450_34475[(1)] = (5));

} else {
var statearr_34451_34476 = state_34444__$1;
(statearr_34451_34476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (15))){
var inst_34434 = (state_34444[(2)]);
var state_34444__$1 = state_34444;
var statearr_34452_34477 = state_34444__$1;
(statearr_34452_34477[(2)] = inst_34434);

(statearr_34452_34477[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (13))){
var state_34444__$1 = state_34444;
var statearr_34453_34478 = state_34444__$1;
(statearr_34453_34478[(2)] = null);

(statearr_34453_34478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (6))){
var inst_34409 = (state_34444[(7)]);
var inst_34430 = (inst_34409 > (0));
var state_34444__$1 = state_34444;
if(cljs.core.truth_(inst_34430)){
var statearr_34454_34479 = state_34444__$1;
(statearr_34454_34479[(1)] = (12));

} else {
var statearr_34455_34480 = state_34444__$1;
(statearr_34455_34480[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (3))){
var inst_34442 = (state_34444[(2)]);
var state_34444__$1 = state_34444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34444__$1,inst_34442);
} else {
if((state_val_34445 === (12))){
var inst_34408 = (state_34444[(8)]);
var inst_34432 = cljs.core.vec.call(null,inst_34408);
var state_34444__$1 = state_34444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34444__$1,(15),out,inst_34432);
} else {
if((state_val_34445 === (2))){
var state_34444__$1 = state_34444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34444__$1,(4),ch);
} else {
if((state_val_34445 === (11))){
var inst_34424 = (state_34444[(2)]);
var inst_34425 = (new Array(n));
var inst_34408 = inst_34425;
var inst_34409 = (0);
var state_34444__$1 = (function (){var statearr_34456 = state_34444;
(statearr_34456[(7)] = inst_34409);

(statearr_34456[(8)] = inst_34408);

(statearr_34456[(10)] = inst_34424);

return statearr_34456;
})();
var statearr_34457_34481 = state_34444__$1;
(statearr_34457_34481[(2)] = null);

(statearr_34457_34481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (9))){
var inst_34408 = (state_34444[(8)]);
var inst_34422 = cljs.core.vec.call(null,inst_34408);
var state_34444__$1 = state_34444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34444__$1,(11),out,inst_34422);
} else {
if((state_val_34445 === (5))){
var inst_34409 = (state_34444[(7)]);
var inst_34408 = (state_34444[(8)]);
var inst_34412 = (state_34444[(9)]);
var inst_34417 = (state_34444[(11)]);
var inst_34416 = (inst_34408[inst_34409] = inst_34412);
var inst_34417__$1 = (inst_34409 + (1));
var inst_34418 = (inst_34417__$1 < n);
var state_34444__$1 = (function (){var statearr_34458 = state_34444;
(statearr_34458[(11)] = inst_34417__$1);

(statearr_34458[(12)] = inst_34416);

return statearr_34458;
})();
if(cljs.core.truth_(inst_34418)){
var statearr_34459_34482 = state_34444__$1;
(statearr_34459_34482[(1)] = (8));

} else {
var statearr_34460_34483 = state_34444__$1;
(statearr_34460_34483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (14))){
var inst_34437 = (state_34444[(2)]);
var inst_34438 = cljs.core.async.close_BANG_.call(null,out);
var state_34444__$1 = (function (){var statearr_34462 = state_34444;
(statearr_34462[(13)] = inst_34437);

return statearr_34462;
})();
var statearr_34463_34484 = state_34444__$1;
(statearr_34463_34484[(2)] = inst_34438);

(statearr_34463_34484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (10))){
var inst_34428 = (state_34444[(2)]);
var state_34444__$1 = state_34444;
var statearr_34464_34485 = state_34444__$1;
(statearr_34464_34485[(2)] = inst_34428);

(statearr_34464_34485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (8))){
var inst_34408 = (state_34444[(8)]);
var inst_34417 = (state_34444[(11)]);
var tmp34461 = inst_34408;
var inst_34408__$1 = tmp34461;
var inst_34409 = inst_34417;
var state_34444__$1 = (function (){var statearr_34465 = state_34444;
(statearr_34465[(7)] = inst_34409);

(statearr_34465[(8)] = inst_34408__$1);

return statearr_34465;
})();
var statearr_34466_34486 = state_34444__$1;
(statearr_34466_34486[(2)] = null);

(statearr_34466_34486[(1)] = (2));


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
});})(c__30792__auto___34472,out))
;
return ((function (switch__30625__auto__,c__30792__auto___34472,out){
return (function() {
var cljs$core$async$state_machine__30626__auto__ = null;
var cljs$core$async$state_machine__30626__auto____0 = (function (){
var statearr_34467 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34467[(0)] = cljs$core$async$state_machine__30626__auto__);

(statearr_34467[(1)] = (1));

return statearr_34467;
});
var cljs$core$async$state_machine__30626__auto____1 = (function (state_34444){
while(true){
var ret_value__30627__auto__ = (function (){try{while(true){
var result__30628__auto__ = switch__30625__auto__.call(null,state_34444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30628__auto__;
}
break;
}
}catch (e34468){if((e34468 instanceof Object)){
var ex__30629__auto__ = e34468;
var statearr_34469_34487 = state_34444;
(statearr_34469_34487[(5)] = ex__30629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34488 = state_34444;
state_34444 = G__34488;
continue;
} else {
return ret_value__30627__auto__;
}
break;
}
});
cljs$core$async$state_machine__30626__auto__ = function(state_34444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30626__auto____1.call(this,state_34444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30626__auto____0;
cljs$core$async$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30626__auto____1;
return cljs$core$async$state_machine__30626__auto__;
})()
;})(switch__30625__auto__,c__30792__auto___34472,out))
})();
var state__30794__auto__ = (function (){var statearr_34470 = f__30793__auto__.call(null);
(statearr_34470[(6)] = c__30792__auto___34472);

return statearr_34470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___34472,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34490 = arguments.length;
switch (G__34490) {
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
var c__30792__auto___34560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___34560,out){
return (function (){
var f__30793__auto__ = (function (){var switch__30625__auto__ = ((function (c__30792__auto___34560,out){
return (function (state_34532){
var state_val_34533 = (state_34532[(1)]);
if((state_val_34533 === (7))){
var inst_34528 = (state_34532[(2)]);
var state_34532__$1 = state_34532;
var statearr_34534_34561 = state_34532__$1;
(statearr_34534_34561[(2)] = inst_34528);

(statearr_34534_34561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (1))){
var inst_34491 = [];
var inst_34492 = inst_34491;
var inst_34493 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34532__$1 = (function (){var statearr_34535 = state_34532;
(statearr_34535[(7)] = inst_34493);

(statearr_34535[(8)] = inst_34492);

return statearr_34535;
})();
var statearr_34536_34562 = state_34532__$1;
(statearr_34536_34562[(2)] = null);

(statearr_34536_34562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (4))){
var inst_34496 = (state_34532[(9)]);
var inst_34496__$1 = (state_34532[(2)]);
var inst_34497 = (inst_34496__$1 == null);
var inst_34498 = cljs.core.not.call(null,inst_34497);
var state_34532__$1 = (function (){var statearr_34537 = state_34532;
(statearr_34537[(9)] = inst_34496__$1);

return statearr_34537;
})();
if(inst_34498){
var statearr_34538_34563 = state_34532__$1;
(statearr_34538_34563[(1)] = (5));

} else {
var statearr_34539_34564 = state_34532__$1;
(statearr_34539_34564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (15))){
var inst_34522 = (state_34532[(2)]);
var state_34532__$1 = state_34532;
var statearr_34540_34565 = state_34532__$1;
(statearr_34540_34565[(2)] = inst_34522);

(statearr_34540_34565[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (13))){
var state_34532__$1 = state_34532;
var statearr_34541_34566 = state_34532__$1;
(statearr_34541_34566[(2)] = null);

(statearr_34541_34566[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (6))){
var inst_34492 = (state_34532[(8)]);
var inst_34517 = inst_34492.length;
var inst_34518 = (inst_34517 > (0));
var state_34532__$1 = state_34532;
if(cljs.core.truth_(inst_34518)){
var statearr_34542_34567 = state_34532__$1;
(statearr_34542_34567[(1)] = (12));

} else {
var statearr_34543_34568 = state_34532__$1;
(statearr_34543_34568[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (3))){
var inst_34530 = (state_34532[(2)]);
var state_34532__$1 = state_34532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34532__$1,inst_34530);
} else {
if((state_val_34533 === (12))){
var inst_34492 = (state_34532[(8)]);
var inst_34520 = cljs.core.vec.call(null,inst_34492);
var state_34532__$1 = state_34532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34532__$1,(15),out,inst_34520);
} else {
if((state_val_34533 === (2))){
var state_34532__$1 = state_34532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34532__$1,(4),ch);
} else {
if((state_val_34533 === (11))){
var inst_34496 = (state_34532[(9)]);
var inst_34500 = (state_34532[(10)]);
var inst_34510 = (state_34532[(2)]);
var inst_34511 = [];
var inst_34512 = inst_34511.push(inst_34496);
var inst_34492 = inst_34511;
var inst_34493 = inst_34500;
var state_34532__$1 = (function (){var statearr_34544 = state_34532;
(statearr_34544[(7)] = inst_34493);

(statearr_34544[(11)] = inst_34510);

(statearr_34544[(8)] = inst_34492);

(statearr_34544[(12)] = inst_34512);

return statearr_34544;
})();
var statearr_34545_34569 = state_34532__$1;
(statearr_34545_34569[(2)] = null);

(statearr_34545_34569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (9))){
var inst_34492 = (state_34532[(8)]);
var inst_34508 = cljs.core.vec.call(null,inst_34492);
var state_34532__$1 = state_34532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34532__$1,(11),out,inst_34508);
} else {
if((state_val_34533 === (5))){
var inst_34493 = (state_34532[(7)]);
var inst_34496 = (state_34532[(9)]);
var inst_34500 = (state_34532[(10)]);
var inst_34500__$1 = f.call(null,inst_34496);
var inst_34501 = cljs.core._EQ_.call(null,inst_34500__$1,inst_34493);
var inst_34502 = cljs.core.keyword_identical_QMARK_.call(null,inst_34493,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34503 = ((inst_34501) || (inst_34502));
var state_34532__$1 = (function (){var statearr_34546 = state_34532;
(statearr_34546[(10)] = inst_34500__$1);

return statearr_34546;
})();
if(cljs.core.truth_(inst_34503)){
var statearr_34547_34570 = state_34532__$1;
(statearr_34547_34570[(1)] = (8));

} else {
var statearr_34548_34571 = state_34532__$1;
(statearr_34548_34571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (14))){
var inst_34525 = (state_34532[(2)]);
var inst_34526 = cljs.core.async.close_BANG_.call(null,out);
var state_34532__$1 = (function (){var statearr_34550 = state_34532;
(statearr_34550[(13)] = inst_34525);

return statearr_34550;
})();
var statearr_34551_34572 = state_34532__$1;
(statearr_34551_34572[(2)] = inst_34526);

(statearr_34551_34572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (10))){
var inst_34515 = (state_34532[(2)]);
var state_34532__$1 = state_34532;
var statearr_34552_34573 = state_34532__$1;
(statearr_34552_34573[(2)] = inst_34515);

(statearr_34552_34573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (8))){
var inst_34496 = (state_34532[(9)]);
var inst_34492 = (state_34532[(8)]);
var inst_34500 = (state_34532[(10)]);
var inst_34505 = inst_34492.push(inst_34496);
var tmp34549 = inst_34492;
var inst_34492__$1 = tmp34549;
var inst_34493 = inst_34500;
var state_34532__$1 = (function (){var statearr_34553 = state_34532;
(statearr_34553[(7)] = inst_34493);

(statearr_34553[(14)] = inst_34505);

(statearr_34553[(8)] = inst_34492__$1);

return statearr_34553;
})();
var statearr_34554_34574 = state_34532__$1;
(statearr_34554_34574[(2)] = null);

(statearr_34554_34574[(1)] = (2));


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
});})(c__30792__auto___34560,out))
;
return ((function (switch__30625__auto__,c__30792__auto___34560,out){
return (function() {
var cljs$core$async$state_machine__30626__auto__ = null;
var cljs$core$async$state_machine__30626__auto____0 = (function (){
var statearr_34555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34555[(0)] = cljs$core$async$state_machine__30626__auto__);

(statearr_34555[(1)] = (1));

return statearr_34555;
});
var cljs$core$async$state_machine__30626__auto____1 = (function (state_34532){
while(true){
var ret_value__30627__auto__ = (function (){try{while(true){
var result__30628__auto__ = switch__30625__auto__.call(null,state_34532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30628__auto__;
}
break;
}
}catch (e34556){if((e34556 instanceof Object)){
var ex__30629__auto__ = e34556;
var statearr_34557_34575 = state_34532;
(statearr_34557_34575[(5)] = ex__30629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34576 = state_34532;
state_34532 = G__34576;
continue;
} else {
return ret_value__30627__auto__;
}
break;
}
});
cljs$core$async$state_machine__30626__auto__ = function(state_34532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30626__auto____1.call(this,state_34532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30626__auto____0;
cljs$core$async$state_machine__30626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30626__auto____1;
return cljs$core$async$state_machine__30626__auto__;
})()
;})(switch__30625__auto__,c__30792__auto___34560,out))
})();
var state__30794__auto__ = (function (){var statearr_34558 = f__30793__auto__.call(null);
(statearr_34558[(6)] = c__30792__auto___34560);

return statearr_34558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___34560,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
