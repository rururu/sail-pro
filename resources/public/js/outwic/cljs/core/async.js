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
var G__18034 = arguments.length;
switch (G__18034) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18035 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18035 = (function (f,blockable,meta18036){
this.f = f;
this.blockable = blockable;
this.meta18036 = meta18036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18037,meta18036__$1){
var self__ = this;
var _18037__$1 = this;
return (new cljs.core.async.t_cljs$core$async18035(self__.f,self__.blockable,meta18036__$1));
});

cljs.core.async.t_cljs$core$async18035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18037){
var self__ = this;
var _18037__$1 = this;
return self__.meta18036;
});

cljs.core.async.t_cljs$core$async18035.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18035.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18035.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async18035.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async18035.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18036","meta18036",-289481531,null)], null);
});

cljs.core.async.t_cljs$core$async18035.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18035.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18035";

cljs.core.async.t_cljs$core$async18035.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async18035");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18035.
 */
cljs.core.async.__GT_t_cljs$core$async18035 = (function cljs$core$async$__GT_t_cljs$core$async18035(f__$1,blockable__$1,meta18036){
return (new cljs.core.async.t_cljs$core$async18035(f__$1,blockable__$1,meta18036));
});

}

return (new cljs.core.async.t_cljs$core$async18035(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18041 = arguments.length;
switch (G__18041) {
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
var G__18044 = arguments.length;
switch (G__18044) {
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
var G__18047 = arguments.length;
switch (G__18047) {
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
var val_18049 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18049);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18049,ret){
return (function (){
return fn1.call(null,val_18049);
});})(val_18049,ret))
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
var G__18051 = arguments.length;
switch (G__18051) {
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
var n__4518__auto___18053 = n;
var x_18054 = (0);
while(true){
if((x_18054 < n__4518__auto___18053)){
(a[x_18054] = (0));

var G__18055 = (x_18054 + (1));
x_18054 = G__18055;
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

var G__18056 = (i + (1));
i = G__18056;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18057 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18057 = (function (flag,meta18058){
this.flag = flag;
this.meta18058 = meta18058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18059,meta18058__$1){
var self__ = this;
var _18059__$1 = this;
return (new cljs.core.async.t_cljs$core$async18057(self__.flag,meta18058__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async18057.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18059){
var self__ = this;
var _18059__$1 = this;
return self__.meta18058;
});})(flag))
;

cljs.core.async.t_cljs$core$async18057.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18057.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async18057.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18057.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18057.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18058","meta18058",-939717901,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async18057.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18057.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18057";

cljs.core.async.t_cljs$core$async18057.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async18057");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18057.
 */
cljs.core.async.__GT_t_cljs$core$async18057 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18057(flag__$1,meta18058){
return (new cljs.core.async.t_cljs$core$async18057(flag__$1,meta18058));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async18057(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18060 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18060 = (function (flag,cb,meta18061){
this.flag = flag;
this.cb = cb;
this.meta18061 = meta18061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18062,meta18061__$1){
var self__ = this;
var _18062__$1 = this;
return (new cljs.core.async.t_cljs$core$async18060(self__.flag,self__.cb,meta18061__$1));
});

cljs.core.async.t_cljs$core$async18060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18062){
var self__ = this;
var _18062__$1 = this;
return self__.meta18061;
});

cljs.core.async.t_cljs$core$async18060.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18060.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async18060.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18060.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async18060.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18061","meta18061",-1009040903,null)], null);
});

cljs.core.async.t_cljs$core$async18060.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18060.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18060";

cljs.core.async.t_cljs$core$async18060.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async18060");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18060.
 */
cljs.core.async.__GT_t_cljs$core$async18060 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18060(flag__$1,cb__$1,meta18061){
return (new cljs.core.async.t_cljs$core$async18060(flag__$1,cb__$1,meta18061));
});

}

return (new cljs.core.async.t_cljs$core$async18060(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__18063_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18063_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18064_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18064_SHARP_,port], null));
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
var G__18065 = (i + (1));
i = G__18065;
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
var len__4641__auto___18071 = arguments.length;
var i__4642__auto___18072 = (0);
while(true){
if((i__4642__auto___18072 < len__4641__auto___18071)){
args__4647__auto__.push((arguments[i__4642__auto___18072]));

var G__18073 = (i__4642__auto___18072 + (1));
i__4642__auto___18072 = G__18073;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18068){
var map__18069 = p__18068;
var map__18069__$1 = (((((!((map__18069 == null))))?(((((map__18069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18069):map__18069);
var opts = map__18069__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18066){
var G__18067 = cljs.core.first.call(null,seq18066);
var seq18066__$1 = cljs.core.next.call(null,seq18066);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18067,seq18066__$1);
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
var G__18075 = arguments.length;
switch (G__18075) {
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
var c__16110__auto___18121 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16110__auto___18121){
return (function (){
var f__16111__auto__ = (function (){var switch__15943__auto__ = ((function (c__16110__auto___18121){
return (function (state_18099){
var state_val_18100 = (state_18099[(1)]);
if((state_val_18100 === (7))){
var inst_18095 = (state_18099[(2)]);
var state_18099__$1 = state_18099;
var statearr_18101_18122 = state_18099__$1;
(statearr_18101_18122[(2)] = inst_18095);

(statearr_18101_18122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (1))){
var state_18099__$1 = state_18099;
var statearr_18102_18123 = state_18099__$1;
(statearr_18102_18123[(2)] = null);

(statearr_18102_18123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (4))){
var inst_18078 = (state_18099[(7)]);
var inst_18078__$1 = (state_18099[(2)]);
var inst_18079 = (inst_18078__$1 == null);
var state_18099__$1 = (function (){var statearr_18103 = state_18099;
(statearr_18103[(7)] = inst_18078__$1);

return statearr_18103;
})();
if(cljs.core.truth_(inst_18079)){
var statearr_18104_18124 = state_18099__$1;
(statearr_18104_18124[(1)] = (5));

} else {
var statearr_18105_18125 = state_18099__$1;
(statearr_18105_18125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (13))){
var state_18099__$1 = state_18099;
var statearr_18106_18126 = state_18099__$1;
(statearr_18106_18126[(2)] = null);

(statearr_18106_18126[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (6))){
var inst_18078 = (state_18099[(7)]);
var state_18099__$1 = state_18099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18099__$1,(11),to,inst_18078);
} else {
if((state_val_18100 === (3))){
var inst_18097 = (state_18099[(2)]);
var state_18099__$1 = state_18099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18099__$1,inst_18097);
} else {
if((state_val_18100 === (12))){
var state_18099__$1 = state_18099;
var statearr_18107_18127 = state_18099__$1;
(statearr_18107_18127[(2)] = null);

(statearr_18107_18127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (2))){
var state_18099__$1 = state_18099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18099__$1,(4),from);
} else {
if((state_val_18100 === (11))){
var inst_18088 = (state_18099[(2)]);
var state_18099__$1 = state_18099;
if(cljs.core.truth_(inst_18088)){
var statearr_18108_18128 = state_18099__$1;
(statearr_18108_18128[(1)] = (12));

} else {
var statearr_18109_18129 = state_18099__$1;
(statearr_18109_18129[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (9))){
var state_18099__$1 = state_18099;
var statearr_18110_18130 = state_18099__$1;
(statearr_18110_18130[(2)] = null);

(statearr_18110_18130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (5))){
var state_18099__$1 = state_18099;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18111_18131 = state_18099__$1;
(statearr_18111_18131[(1)] = (8));

} else {
var statearr_18112_18132 = state_18099__$1;
(statearr_18112_18132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (14))){
var inst_18093 = (state_18099[(2)]);
var state_18099__$1 = state_18099;
var statearr_18113_18133 = state_18099__$1;
(statearr_18113_18133[(2)] = inst_18093);

(statearr_18113_18133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (10))){
var inst_18085 = (state_18099[(2)]);
var state_18099__$1 = state_18099;
var statearr_18114_18134 = state_18099__$1;
(statearr_18114_18134[(2)] = inst_18085);

(statearr_18114_18134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (8))){
var inst_18082 = cljs.core.async.close_BANG_.call(null,to);
var state_18099__$1 = state_18099;
var statearr_18115_18135 = state_18099__$1;
(statearr_18115_18135[(2)] = inst_18082);

(statearr_18115_18135[(1)] = (10));


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
});})(c__16110__auto___18121))
;
return ((function (switch__15943__auto__,c__16110__auto___18121){
return (function() {
var cljs$core$async$state_machine__15944__auto__ = null;
var cljs$core$async$state_machine__15944__auto____0 = (function (){
var statearr_18116 = [null,null,null,null,null,null,null,null];
(statearr_18116[(0)] = cljs$core$async$state_machine__15944__auto__);

(statearr_18116[(1)] = (1));

return statearr_18116;
});
var cljs$core$async$state_machine__15944__auto____1 = (function (state_18099){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_18099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e18117){if((e18117 instanceof Object)){
var ex__15947__auto__ = e18117;
var statearr_18118_18136 = state_18099;
(statearr_18118_18136[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18137 = state_18099;
state_18099 = G__18137;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$state_machine__15944__auto__ = function(state_18099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15944__auto____1.call(this,state_18099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15944__auto____0;
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15944__auto____1;
return cljs$core$async$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16110__auto___18121))
})();
var state__16112__auto__ = (function (){var statearr_18119 = f__16111__auto__.call(null);
(statearr_18119[(6)] = c__16110__auto___18121);

return statearr_18119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16112__auto__);
});})(c__16110__auto___18121))
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
return (function (p__18138){
var vec__18139 = p__18138;
var v = cljs.core.nth.call(null,vec__18139,(0),null);
var p = cljs.core.nth.call(null,vec__18139,(1),null);
var job = vec__18139;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__16110__auto___18310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16110__auto___18310,res,vec__18139,v,p,job,jobs,results){
return (function (){
var f__16111__auto__ = (function (){var switch__15943__auto__ = ((function (c__16110__auto___18310,res,vec__18139,v,p,job,jobs,results){
return (function (state_18146){
var state_val_18147 = (state_18146[(1)]);
if((state_val_18147 === (1))){
var state_18146__$1 = state_18146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18146__$1,(2),res,v);
} else {
if((state_val_18147 === (2))){
var inst_18143 = (state_18146[(2)]);
var inst_18144 = cljs.core.async.close_BANG_.call(null,res);
var state_18146__$1 = (function (){var statearr_18148 = state_18146;
(statearr_18148[(7)] = inst_18143);

return statearr_18148;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18146__$1,inst_18144);
} else {
return null;
}
}
});})(c__16110__auto___18310,res,vec__18139,v,p,job,jobs,results))
;
return ((function (switch__15943__auto__,c__16110__auto___18310,res,vec__18139,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0 = (function (){
var statearr_18149 = [null,null,null,null,null,null,null,null];
(statearr_18149[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__);

(statearr_18149[(1)] = (1));

return statearr_18149;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1 = (function (state_18146){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_18146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e18150){if((e18150 instanceof Object)){
var ex__15947__auto__ = e18150;
var statearr_18151_18311 = state_18146;
(statearr_18151_18311[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18312 = state_18146;
state_18146 = G__18312;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__ = function(state_18146){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1.call(this,state_18146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16110__auto___18310,res,vec__18139,v,p,job,jobs,results))
})();
var state__16112__auto__ = (function (){var statearr_18152 = f__16111__auto__.call(null);
(statearr_18152[(6)] = c__16110__auto___18310);

return statearr_18152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16112__auto__);
});})(c__16110__auto___18310,res,vec__18139,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18153){
var vec__18154 = p__18153;
var v = cljs.core.nth.call(null,vec__18154,(0),null);
var p = cljs.core.nth.call(null,vec__18154,(1),null);
var job = vec__18154;
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
var n__4518__auto___18313 = n;
var __18314 = (0);
while(true){
if((__18314 < n__4518__auto___18313)){
var G__18157_18315 = type;
var G__18157_18316__$1 = (((G__18157_18315 instanceof cljs.core.Keyword))?G__18157_18315.fqn:null);
switch (G__18157_18316__$1) {
case "compute":
var c__16110__auto___18318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18314,c__16110__auto___18318,G__18157_18315,G__18157_18316__$1,n__4518__auto___18313,jobs,results,process,async){
return (function (){
var f__16111__auto__ = (function (){var switch__15943__auto__ = ((function (__18314,c__16110__auto___18318,G__18157_18315,G__18157_18316__$1,n__4518__auto___18313,jobs,results,process,async){
return (function (state_18170){
var state_val_18171 = (state_18170[(1)]);
if((state_val_18171 === (1))){
var state_18170__$1 = state_18170;
var statearr_18172_18319 = state_18170__$1;
(statearr_18172_18319[(2)] = null);

(statearr_18172_18319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (2))){
var state_18170__$1 = state_18170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18170__$1,(4),jobs);
} else {
if((state_val_18171 === (3))){
var inst_18168 = (state_18170[(2)]);
var state_18170__$1 = state_18170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18170__$1,inst_18168);
} else {
if((state_val_18171 === (4))){
var inst_18160 = (state_18170[(2)]);
var inst_18161 = process.call(null,inst_18160);
var state_18170__$1 = state_18170;
if(cljs.core.truth_(inst_18161)){
var statearr_18173_18320 = state_18170__$1;
(statearr_18173_18320[(1)] = (5));

} else {
var statearr_18174_18321 = state_18170__$1;
(statearr_18174_18321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (5))){
var state_18170__$1 = state_18170;
var statearr_18175_18322 = state_18170__$1;
(statearr_18175_18322[(2)] = null);

(statearr_18175_18322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (6))){
var state_18170__$1 = state_18170;
var statearr_18176_18323 = state_18170__$1;
(statearr_18176_18323[(2)] = null);

(statearr_18176_18323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (7))){
var inst_18166 = (state_18170[(2)]);
var state_18170__$1 = state_18170;
var statearr_18177_18324 = state_18170__$1;
(statearr_18177_18324[(2)] = inst_18166);

(statearr_18177_18324[(1)] = (3));


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
});})(__18314,c__16110__auto___18318,G__18157_18315,G__18157_18316__$1,n__4518__auto___18313,jobs,results,process,async))
;
return ((function (__18314,switch__15943__auto__,c__16110__auto___18318,G__18157_18315,G__18157_18316__$1,n__4518__auto___18313,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0 = (function (){
var statearr_18178 = [null,null,null,null,null,null,null];
(statearr_18178[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__);

(statearr_18178[(1)] = (1));

return statearr_18178;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1 = (function (state_18170){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_18170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e18179){if((e18179 instanceof Object)){
var ex__15947__auto__ = e18179;
var statearr_18180_18325 = state_18170;
(statearr_18180_18325[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18326 = state_18170;
state_18170 = G__18326;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__ = function(state_18170){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1.call(this,state_18170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__;
})()
;})(__18314,switch__15943__auto__,c__16110__auto___18318,G__18157_18315,G__18157_18316__$1,n__4518__auto___18313,jobs,results,process,async))
})();
var state__16112__auto__ = (function (){var statearr_18181 = f__16111__auto__.call(null);
(statearr_18181[(6)] = c__16110__auto___18318);

return statearr_18181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16112__auto__);
});})(__18314,c__16110__auto___18318,G__18157_18315,G__18157_18316__$1,n__4518__auto___18313,jobs,results,process,async))
);


break;
case "async":
var c__16110__auto___18327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18314,c__16110__auto___18327,G__18157_18315,G__18157_18316__$1,n__4518__auto___18313,jobs,results,process,async){
return (function (){
var f__16111__auto__ = (function (){var switch__15943__auto__ = ((function (__18314,c__16110__auto___18327,G__18157_18315,G__18157_18316__$1,n__4518__auto___18313,jobs,results,process,async){
return (function (state_18194){
var state_val_18195 = (state_18194[(1)]);
if((state_val_18195 === (1))){
var state_18194__$1 = state_18194;
var statearr_18196_18328 = state_18194__$1;
(statearr_18196_18328[(2)] = null);

(statearr_18196_18328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18195 === (2))){
var state_18194__$1 = state_18194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18194__$1,(4),jobs);
} else {
if((state_val_18195 === (3))){
var inst_18192 = (state_18194[(2)]);
var state_18194__$1 = state_18194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18194__$1,inst_18192);
} else {
if((state_val_18195 === (4))){
var inst_18184 = (state_18194[(2)]);
var inst_18185 = async.call(null,inst_18184);
var state_18194__$1 = state_18194;
if(cljs.core.truth_(inst_18185)){
var statearr_18197_18329 = state_18194__$1;
(statearr_18197_18329[(1)] = (5));

} else {
var statearr_18198_18330 = state_18194__$1;
(statearr_18198_18330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18195 === (5))){
var state_18194__$1 = state_18194;
var statearr_18199_18331 = state_18194__$1;
(statearr_18199_18331[(2)] = null);

(statearr_18199_18331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18195 === (6))){
var state_18194__$1 = state_18194;
var statearr_18200_18332 = state_18194__$1;
(statearr_18200_18332[(2)] = null);

(statearr_18200_18332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18195 === (7))){
var inst_18190 = (state_18194[(2)]);
var state_18194__$1 = state_18194;
var statearr_18201_18333 = state_18194__$1;
(statearr_18201_18333[(2)] = inst_18190);

(statearr_18201_18333[(1)] = (3));


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
});})(__18314,c__16110__auto___18327,G__18157_18315,G__18157_18316__$1,n__4518__auto___18313,jobs,results,process,async))
;
return ((function (__18314,switch__15943__auto__,c__16110__auto___18327,G__18157_18315,G__18157_18316__$1,n__4518__auto___18313,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0 = (function (){
var statearr_18202 = [null,null,null,null,null,null,null];
(statearr_18202[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__);

(statearr_18202[(1)] = (1));

return statearr_18202;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1 = (function (state_18194){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_18194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e18203){if((e18203 instanceof Object)){
var ex__15947__auto__ = e18203;
var statearr_18204_18334 = state_18194;
(statearr_18204_18334[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18335 = state_18194;
state_18194 = G__18335;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__ = function(state_18194){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1.call(this,state_18194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__;
})()
;})(__18314,switch__15943__auto__,c__16110__auto___18327,G__18157_18315,G__18157_18316__$1,n__4518__auto___18313,jobs,results,process,async))
})();
var state__16112__auto__ = (function (){var statearr_18205 = f__16111__auto__.call(null);
(statearr_18205[(6)] = c__16110__auto___18327);

return statearr_18205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16112__auto__);
});})(__18314,c__16110__auto___18327,G__18157_18315,G__18157_18316__$1,n__4518__auto___18313,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18157_18316__$1)].join('')));

}

var G__18336 = (__18314 + (1));
__18314 = G__18336;
continue;
} else {
}
break;
}

var c__16110__auto___18337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16110__auto___18337,jobs,results,process,async){
return (function (){
var f__16111__auto__ = (function (){var switch__15943__auto__ = ((function (c__16110__auto___18337,jobs,results,process,async){
return (function (state_18227){
var state_val_18228 = (state_18227[(1)]);
if((state_val_18228 === (7))){
var inst_18223 = (state_18227[(2)]);
var state_18227__$1 = state_18227;
var statearr_18229_18338 = state_18227__$1;
(statearr_18229_18338[(2)] = inst_18223);

(statearr_18229_18338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (1))){
var state_18227__$1 = state_18227;
var statearr_18230_18339 = state_18227__$1;
(statearr_18230_18339[(2)] = null);

(statearr_18230_18339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (4))){
var inst_18208 = (state_18227[(7)]);
var inst_18208__$1 = (state_18227[(2)]);
var inst_18209 = (inst_18208__$1 == null);
var state_18227__$1 = (function (){var statearr_18231 = state_18227;
(statearr_18231[(7)] = inst_18208__$1);

return statearr_18231;
})();
if(cljs.core.truth_(inst_18209)){
var statearr_18232_18340 = state_18227__$1;
(statearr_18232_18340[(1)] = (5));

} else {
var statearr_18233_18341 = state_18227__$1;
(statearr_18233_18341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (6))){
var inst_18208 = (state_18227[(7)]);
var inst_18213 = (state_18227[(8)]);
var inst_18213__$1 = cljs.core.async.chan.call(null,(1));
var inst_18214 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18215 = [inst_18208,inst_18213__$1];
var inst_18216 = (new cljs.core.PersistentVector(null,2,(5),inst_18214,inst_18215,null));
var state_18227__$1 = (function (){var statearr_18234 = state_18227;
(statearr_18234[(8)] = inst_18213__$1);

return statearr_18234;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18227__$1,(8),jobs,inst_18216);
} else {
if((state_val_18228 === (3))){
var inst_18225 = (state_18227[(2)]);
var state_18227__$1 = state_18227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18227__$1,inst_18225);
} else {
if((state_val_18228 === (2))){
var state_18227__$1 = state_18227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18227__$1,(4),from);
} else {
if((state_val_18228 === (9))){
var inst_18220 = (state_18227[(2)]);
var state_18227__$1 = (function (){var statearr_18235 = state_18227;
(statearr_18235[(9)] = inst_18220);

return statearr_18235;
})();
var statearr_18236_18342 = state_18227__$1;
(statearr_18236_18342[(2)] = null);

(statearr_18236_18342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (5))){
var inst_18211 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18227__$1 = state_18227;
var statearr_18237_18343 = state_18227__$1;
(statearr_18237_18343[(2)] = inst_18211);

(statearr_18237_18343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (8))){
var inst_18213 = (state_18227[(8)]);
var inst_18218 = (state_18227[(2)]);
var state_18227__$1 = (function (){var statearr_18238 = state_18227;
(statearr_18238[(10)] = inst_18218);

return statearr_18238;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18227__$1,(9),results,inst_18213);
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
});})(c__16110__auto___18337,jobs,results,process,async))
;
return ((function (switch__15943__auto__,c__16110__auto___18337,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0 = (function (){
var statearr_18239 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18239[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__);

(statearr_18239[(1)] = (1));

return statearr_18239;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1 = (function (state_18227){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_18227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e18240){if((e18240 instanceof Object)){
var ex__15947__auto__ = e18240;
var statearr_18241_18344 = state_18227;
(statearr_18241_18344[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18345 = state_18227;
state_18227 = G__18345;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__ = function(state_18227){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1.call(this,state_18227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16110__auto___18337,jobs,results,process,async))
})();
var state__16112__auto__ = (function (){var statearr_18242 = f__16111__auto__.call(null);
(statearr_18242[(6)] = c__16110__auto___18337);

return statearr_18242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16112__auto__);
});})(c__16110__auto___18337,jobs,results,process,async))
);


var c__16110__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16110__auto__,jobs,results,process,async){
return (function (){
var f__16111__auto__ = (function (){var switch__15943__auto__ = ((function (c__16110__auto__,jobs,results,process,async){
return (function (state_18280){
var state_val_18281 = (state_18280[(1)]);
if((state_val_18281 === (7))){
var inst_18276 = (state_18280[(2)]);
var state_18280__$1 = state_18280;
var statearr_18282_18346 = state_18280__$1;
(statearr_18282_18346[(2)] = inst_18276);

(statearr_18282_18346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18281 === (20))){
var state_18280__$1 = state_18280;
var statearr_18283_18347 = state_18280__$1;
(statearr_18283_18347[(2)] = null);

(statearr_18283_18347[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18281 === (1))){
var state_18280__$1 = state_18280;
var statearr_18284_18348 = state_18280__$1;
(statearr_18284_18348[(2)] = null);

(statearr_18284_18348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18281 === (4))){
var inst_18245 = (state_18280[(7)]);
var inst_18245__$1 = (state_18280[(2)]);
var inst_18246 = (inst_18245__$1 == null);
var state_18280__$1 = (function (){var statearr_18285 = state_18280;
(statearr_18285[(7)] = inst_18245__$1);

return statearr_18285;
})();
if(cljs.core.truth_(inst_18246)){
var statearr_18286_18349 = state_18280__$1;
(statearr_18286_18349[(1)] = (5));

} else {
var statearr_18287_18350 = state_18280__$1;
(statearr_18287_18350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18281 === (15))){
var inst_18258 = (state_18280[(8)]);
var state_18280__$1 = state_18280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18280__$1,(18),to,inst_18258);
} else {
if((state_val_18281 === (21))){
var inst_18271 = (state_18280[(2)]);
var state_18280__$1 = state_18280;
var statearr_18288_18351 = state_18280__$1;
(statearr_18288_18351[(2)] = inst_18271);

(statearr_18288_18351[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18281 === (13))){
var inst_18273 = (state_18280[(2)]);
var state_18280__$1 = (function (){var statearr_18289 = state_18280;
(statearr_18289[(9)] = inst_18273);

return statearr_18289;
})();
var statearr_18290_18352 = state_18280__$1;
(statearr_18290_18352[(2)] = null);

(statearr_18290_18352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18281 === (6))){
var inst_18245 = (state_18280[(7)]);
var state_18280__$1 = state_18280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18280__$1,(11),inst_18245);
} else {
if((state_val_18281 === (17))){
var inst_18266 = (state_18280[(2)]);
var state_18280__$1 = state_18280;
if(cljs.core.truth_(inst_18266)){
var statearr_18291_18353 = state_18280__$1;
(statearr_18291_18353[(1)] = (19));

} else {
var statearr_18292_18354 = state_18280__$1;
(statearr_18292_18354[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18281 === (3))){
var inst_18278 = (state_18280[(2)]);
var state_18280__$1 = state_18280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18280__$1,inst_18278);
} else {
if((state_val_18281 === (12))){
var inst_18255 = (state_18280[(10)]);
var state_18280__$1 = state_18280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18280__$1,(14),inst_18255);
} else {
if((state_val_18281 === (2))){
var state_18280__$1 = state_18280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18280__$1,(4),results);
} else {
if((state_val_18281 === (19))){
var state_18280__$1 = state_18280;
var statearr_18293_18355 = state_18280__$1;
(statearr_18293_18355[(2)] = null);

(statearr_18293_18355[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18281 === (11))){
var inst_18255 = (state_18280[(2)]);
var state_18280__$1 = (function (){var statearr_18294 = state_18280;
(statearr_18294[(10)] = inst_18255);

return statearr_18294;
})();
var statearr_18295_18356 = state_18280__$1;
(statearr_18295_18356[(2)] = null);

(statearr_18295_18356[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18281 === (9))){
var state_18280__$1 = state_18280;
var statearr_18296_18357 = state_18280__$1;
(statearr_18296_18357[(2)] = null);

(statearr_18296_18357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18281 === (5))){
var state_18280__$1 = state_18280;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18297_18358 = state_18280__$1;
(statearr_18297_18358[(1)] = (8));

} else {
var statearr_18298_18359 = state_18280__$1;
(statearr_18298_18359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18281 === (14))){
var inst_18260 = (state_18280[(11)]);
var inst_18258 = (state_18280[(8)]);
var inst_18258__$1 = (state_18280[(2)]);
var inst_18259 = (inst_18258__$1 == null);
var inst_18260__$1 = cljs.core.not.call(null,inst_18259);
var state_18280__$1 = (function (){var statearr_18299 = state_18280;
(statearr_18299[(11)] = inst_18260__$1);

(statearr_18299[(8)] = inst_18258__$1);

return statearr_18299;
})();
if(inst_18260__$1){
var statearr_18300_18360 = state_18280__$1;
(statearr_18300_18360[(1)] = (15));

} else {
var statearr_18301_18361 = state_18280__$1;
(statearr_18301_18361[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18281 === (16))){
var inst_18260 = (state_18280[(11)]);
var state_18280__$1 = state_18280;
var statearr_18302_18362 = state_18280__$1;
(statearr_18302_18362[(2)] = inst_18260);

(statearr_18302_18362[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18281 === (10))){
var inst_18252 = (state_18280[(2)]);
var state_18280__$1 = state_18280;
var statearr_18303_18363 = state_18280__$1;
(statearr_18303_18363[(2)] = inst_18252);

(statearr_18303_18363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18281 === (18))){
var inst_18263 = (state_18280[(2)]);
var state_18280__$1 = state_18280;
var statearr_18304_18364 = state_18280__$1;
(statearr_18304_18364[(2)] = inst_18263);

(statearr_18304_18364[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18281 === (8))){
var inst_18249 = cljs.core.async.close_BANG_.call(null,to);
var state_18280__$1 = state_18280;
var statearr_18305_18365 = state_18280__$1;
(statearr_18305_18365[(2)] = inst_18249);

(statearr_18305_18365[(1)] = (10));


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
});})(c__16110__auto__,jobs,results,process,async))
;
return ((function (switch__15943__auto__,c__16110__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0 = (function (){
var statearr_18306 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18306[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__);

(statearr_18306[(1)] = (1));

return statearr_18306;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1 = (function (state_18280){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_18280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e18307){if((e18307 instanceof Object)){
var ex__15947__auto__ = e18307;
var statearr_18308_18366 = state_18280;
(statearr_18308_18366[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18367 = state_18280;
state_18280 = G__18367;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__ = function(state_18280){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1.call(this,state_18280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16110__auto__,jobs,results,process,async))
})();
var state__16112__auto__ = (function (){var statearr_18309 = f__16111__auto__.call(null);
(statearr_18309[(6)] = c__16110__auto__);

return statearr_18309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16112__auto__);
});})(c__16110__auto__,jobs,results,process,async))
);

return c__16110__auto__;
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
var G__18369 = arguments.length;
switch (G__18369) {
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
var G__18372 = arguments.length;
switch (G__18372) {
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
var G__18375 = arguments.length;
switch (G__18375) {
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
var c__16110__auto___18424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16110__auto___18424,tc,fc){
return (function (){
var f__16111__auto__ = (function (){var switch__15943__auto__ = ((function (c__16110__auto___18424,tc,fc){
return (function (state_18401){
var state_val_18402 = (state_18401[(1)]);
if((state_val_18402 === (7))){
var inst_18397 = (state_18401[(2)]);
var state_18401__$1 = state_18401;
var statearr_18403_18425 = state_18401__$1;
(statearr_18403_18425[(2)] = inst_18397);

(statearr_18403_18425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18402 === (1))){
var state_18401__$1 = state_18401;
var statearr_18404_18426 = state_18401__$1;
(statearr_18404_18426[(2)] = null);

(statearr_18404_18426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18402 === (4))){
var inst_18378 = (state_18401[(7)]);
var inst_18378__$1 = (state_18401[(2)]);
var inst_18379 = (inst_18378__$1 == null);
var state_18401__$1 = (function (){var statearr_18405 = state_18401;
(statearr_18405[(7)] = inst_18378__$1);

return statearr_18405;
})();
if(cljs.core.truth_(inst_18379)){
var statearr_18406_18427 = state_18401__$1;
(statearr_18406_18427[(1)] = (5));

} else {
var statearr_18407_18428 = state_18401__$1;
(statearr_18407_18428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18402 === (13))){
var state_18401__$1 = state_18401;
var statearr_18408_18429 = state_18401__$1;
(statearr_18408_18429[(2)] = null);

(statearr_18408_18429[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18402 === (6))){
var inst_18378 = (state_18401[(7)]);
var inst_18384 = p.call(null,inst_18378);
var state_18401__$1 = state_18401;
if(cljs.core.truth_(inst_18384)){
var statearr_18409_18430 = state_18401__$1;
(statearr_18409_18430[(1)] = (9));

} else {
var statearr_18410_18431 = state_18401__$1;
(statearr_18410_18431[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18402 === (3))){
var inst_18399 = (state_18401[(2)]);
var state_18401__$1 = state_18401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18401__$1,inst_18399);
} else {
if((state_val_18402 === (12))){
var state_18401__$1 = state_18401;
var statearr_18411_18432 = state_18401__$1;
(statearr_18411_18432[(2)] = null);

(statearr_18411_18432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18402 === (2))){
var state_18401__$1 = state_18401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18401__$1,(4),ch);
} else {
if((state_val_18402 === (11))){
var inst_18378 = (state_18401[(7)]);
var inst_18388 = (state_18401[(2)]);
var state_18401__$1 = state_18401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18401__$1,(8),inst_18388,inst_18378);
} else {
if((state_val_18402 === (9))){
var state_18401__$1 = state_18401;
var statearr_18412_18433 = state_18401__$1;
(statearr_18412_18433[(2)] = tc);

(statearr_18412_18433[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18402 === (5))){
var inst_18381 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18382 = cljs.core.async.close_BANG_.call(null,fc);
var state_18401__$1 = (function (){var statearr_18413 = state_18401;
(statearr_18413[(8)] = inst_18381);

return statearr_18413;
})();
var statearr_18414_18434 = state_18401__$1;
(statearr_18414_18434[(2)] = inst_18382);

(statearr_18414_18434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18402 === (14))){
var inst_18395 = (state_18401[(2)]);
var state_18401__$1 = state_18401;
var statearr_18415_18435 = state_18401__$1;
(statearr_18415_18435[(2)] = inst_18395);

(statearr_18415_18435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18402 === (10))){
var state_18401__$1 = state_18401;
var statearr_18416_18436 = state_18401__$1;
(statearr_18416_18436[(2)] = fc);

(statearr_18416_18436[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18402 === (8))){
var inst_18390 = (state_18401[(2)]);
var state_18401__$1 = state_18401;
if(cljs.core.truth_(inst_18390)){
var statearr_18417_18437 = state_18401__$1;
(statearr_18417_18437[(1)] = (12));

} else {
var statearr_18418_18438 = state_18401__$1;
(statearr_18418_18438[(1)] = (13));

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
});})(c__16110__auto___18424,tc,fc))
;
return ((function (switch__15943__auto__,c__16110__auto___18424,tc,fc){
return (function() {
var cljs$core$async$state_machine__15944__auto__ = null;
var cljs$core$async$state_machine__15944__auto____0 = (function (){
var statearr_18419 = [null,null,null,null,null,null,null,null,null];
(statearr_18419[(0)] = cljs$core$async$state_machine__15944__auto__);

(statearr_18419[(1)] = (1));

return statearr_18419;
});
var cljs$core$async$state_machine__15944__auto____1 = (function (state_18401){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_18401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e18420){if((e18420 instanceof Object)){
var ex__15947__auto__ = e18420;
var statearr_18421_18439 = state_18401;
(statearr_18421_18439[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18440 = state_18401;
state_18401 = G__18440;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$state_machine__15944__auto__ = function(state_18401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15944__auto____1.call(this,state_18401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15944__auto____0;
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15944__auto____1;
return cljs$core$async$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16110__auto___18424,tc,fc))
})();
var state__16112__auto__ = (function (){var statearr_18422 = f__16111__auto__.call(null);
(statearr_18422[(6)] = c__16110__auto___18424);

return statearr_18422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16112__auto__);
});})(c__16110__auto___18424,tc,fc))
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
var c__16110__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16110__auto__){
return (function (){
var f__16111__auto__ = (function (){var switch__15943__auto__ = ((function (c__16110__auto__){
return (function (state_18461){
var state_val_18462 = (state_18461[(1)]);
if((state_val_18462 === (7))){
var inst_18457 = (state_18461[(2)]);
var state_18461__$1 = state_18461;
var statearr_18463_18481 = state_18461__$1;
(statearr_18463_18481[(2)] = inst_18457);

(statearr_18463_18481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18462 === (1))){
var inst_18441 = init;
var state_18461__$1 = (function (){var statearr_18464 = state_18461;
(statearr_18464[(7)] = inst_18441);

return statearr_18464;
})();
var statearr_18465_18482 = state_18461__$1;
(statearr_18465_18482[(2)] = null);

(statearr_18465_18482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18462 === (4))){
var inst_18444 = (state_18461[(8)]);
var inst_18444__$1 = (state_18461[(2)]);
var inst_18445 = (inst_18444__$1 == null);
var state_18461__$1 = (function (){var statearr_18466 = state_18461;
(statearr_18466[(8)] = inst_18444__$1);

return statearr_18466;
})();
if(cljs.core.truth_(inst_18445)){
var statearr_18467_18483 = state_18461__$1;
(statearr_18467_18483[(1)] = (5));

} else {
var statearr_18468_18484 = state_18461__$1;
(statearr_18468_18484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18462 === (6))){
var inst_18441 = (state_18461[(7)]);
var inst_18444 = (state_18461[(8)]);
var inst_18448 = (state_18461[(9)]);
var inst_18448__$1 = f.call(null,inst_18441,inst_18444);
var inst_18449 = cljs.core.reduced_QMARK_.call(null,inst_18448__$1);
var state_18461__$1 = (function (){var statearr_18469 = state_18461;
(statearr_18469[(9)] = inst_18448__$1);

return statearr_18469;
})();
if(inst_18449){
var statearr_18470_18485 = state_18461__$1;
(statearr_18470_18485[(1)] = (8));

} else {
var statearr_18471_18486 = state_18461__$1;
(statearr_18471_18486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18462 === (3))){
var inst_18459 = (state_18461[(2)]);
var state_18461__$1 = state_18461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18461__$1,inst_18459);
} else {
if((state_val_18462 === (2))){
var state_18461__$1 = state_18461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18461__$1,(4),ch);
} else {
if((state_val_18462 === (9))){
var inst_18448 = (state_18461[(9)]);
var inst_18441 = inst_18448;
var state_18461__$1 = (function (){var statearr_18472 = state_18461;
(statearr_18472[(7)] = inst_18441);

return statearr_18472;
})();
var statearr_18473_18487 = state_18461__$1;
(statearr_18473_18487[(2)] = null);

(statearr_18473_18487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18462 === (5))){
var inst_18441 = (state_18461[(7)]);
var state_18461__$1 = state_18461;
var statearr_18474_18488 = state_18461__$1;
(statearr_18474_18488[(2)] = inst_18441);

(statearr_18474_18488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18462 === (10))){
var inst_18455 = (state_18461[(2)]);
var state_18461__$1 = state_18461;
var statearr_18475_18489 = state_18461__$1;
(statearr_18475_18489[(2)] = inst_18455);

(statearr_18475_18489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18462 === (8))){
var inst_18448 = (state_18461[(9)]);
var inst_18451 = cljs.core.deref.call(null,inst_18448);
var state_18461__$1 = state_18461;
var statearr_18476_18490 = state_18461__$1;
(statearr_18476_18490[(2)] = inst_18451);

(statearr_18476_18490[(1)] = (10));


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
});})(c__16110__auto__))
;
return ((function (switch__15943__auto__,c__16110__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15944__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15944__auto____0 = (function (){
var statearr_18477 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18477[(0)] = cljs$core$async$reduce_$_state_machine__15944__auto__);

(statearr_18477[(1)] = (1));

return statearr_18477;
});
var cljs$core$async$reduce_$_state_machine__15944__auto____1 = (function (state_18461){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_18461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e18478){if((e18478 instanceof Object)){
var ex__15947__auto__ = e18478;
var statearr_18479_18491 = state_18461;
(statearr_18479_18491[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18492 = state_18461;
state_18461 = G__18492;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15944__auto__ = function(state_18461){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15944__auto____1.call(this,state_18461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15944__auto____0;
cljs$core$async$reduce_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15944__auto____1;
return cljs$core$async$reduce_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16110__auto__))
})();
var state__16112__auto__ = (function (){var statearr_18480 = f__16111__auto__.call(null);
(statearr_18480[(6)] = c__16110__auto__);

return statearr_18480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16112__auto__);
});})(c__16110__auto__))
);

return c__16110__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__16110__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16110__auto__,f__$1){
return (function (){
var f__16111__auto__ = (function (){var switch__15943__auto__ = ((function (c__16110__auto__,f__$1){
return (function (state_18498){
var state_val_18499 = (state_18498[(1)]);
if((state_val_18499 === (1))){
var inst_18493 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_18498__$1 = state_18498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18498__$1,(2),inst_18493);
} else {
if((state_val_18499 === (2))){
var inst_18495 = (state_18498[(2)]);
var inst_18496 = f__$1.call(null,inst_18495);
var state_18498__$1 = state_18498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18498__$1,inst_18496);
} else {
return null;
}
}
});})(c__16110__auto__,f__$1))
;
return ((function (switch__15943__auto__,c__16110__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15944__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15944__auto____0 = (function (){
var statearr_18500 = [null,null,null,null,null,null,null];
(statearr_18500[(0)] = cljs$core$async$transduce_$_state_machine__15944__auto__);

(statearr_18500[(1)] = (1));

return statearr_18500;
});
var cljs$core$async$transduce_$_state_machine__15944__auto____1 = (function (state_18498){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_18498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e18501){if((e18501 instanceof Object)){
var ex__15947__auto__ = e18501;
var statearr_18502_18504 = state_18498;
(statearr_18502_18504[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18505 = state_18498;
state_18498 = G__18505;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15944__auto__ = function(state_18498){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15944__auto____1.call(this,state_18498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15944__auto____0;
cljs$core$async$transduce_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15944__auto____1;
return cljs$core$async$transduce_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16110__auto__,f__$1))
})();
var state__16112__auto__ = (function (){var statearr_18503 = f__16111__auto__.call(null);
(statearr_18503[(6)] = c__16110__auto__);

return statearr_18503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16112__auto__);
});})(c__16110__auto__,f__$1))
);

return c__16110__auto__;
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
var G__18507 = arguments.length;
switch (G__18507) {
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
var c__16110__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16110__auto__){
return (function (){
var f__16111__auto__ = (function (){var switch__15943__auto__ = ((function (c__16110__auto__){
return (function (state_18532){
var state_val_18533 = (state_18532[(1)]);
if((state_val_18533 === (7))){
var inst_18514 = (state_18532[(2)]);
var state_18532__$1 = state_18532;
var statearr_18534_18555 = state_18532__$1;
(statearr_18534_18555[(2)] = inst_18514);

(statearr_18534_18555[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (1))){
var inst_18508 = cljs.core.seq.call(null,coll);
var inst_18509 = inst_18508;
var state_18532__$1 = (function (){var statearr_18535 = state_18532;
(statearr_18535[(7)] = inst_18509);

return statearr_18535;
})();
var statearr_18536_18556 = state_18532__$1;
(statearr_18536_18556[(2)] = null);

(statearr_18536_18556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (4))){
var inst_18509 = (state_18532[(7)]);
var inst_18512 = cljs.core.first.call(null,inst_18509);
var state_18532__$1 = state_18532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18532__$1,(7),ch,inst_18512);
} else {
if((state_val_18533 === (13))){
var inst_18526 = (state_18532[(2)]);
var state_18532__$1 = state_18532;
var statearr_18537_18557 = state_18532__$1;
(statearr_18537_18557[(2)] = inst_18526);

(statearr_18537_18557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (6))){
var inst_18517 = (state_18532[(2)]);
var state_18532__$1 = state_18532;
if(cljs.core.truth_(inst_18517)){
var statearr_18538_18558 = state_18532__$1;
(statearr_18538_18558[(1)] = (8));

} else {
var statearr_18539_18559 = state_18532__$1;
(statearr_18539_18559[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (3))){
var inst_18530 = (state_18532[(2)]);
var state_18532__$1 = state_18532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18532__$1,inst_18530);
} else {
if((state_val_18533 === (12))){
var state_18532__$1 = state_18532;
var statearr_18540_18560 = state_18532__$1;
(statearr_18540_18560[(2)] = null);

(statearr_18540_18560[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (2))){
var inst_18509 = (state_18532[(7)]);
var state_18532__$1 = state_18532;
if(cljs.core.truth_(inst_18509)){
var statearr_18541_18561 = state_18532__$1;
(statearr_18541_18561[(1)] = (4));

} else {
var statearr_18542_18562 = state_18532__$1;
(statearr_18542_18562[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (11))){
var inst_18523 = cljs.core.async.close_BANG_.call(null,ch);
var state_18532__$1 = state_18532;
var statearr_18543_18563 = state_18532__$1;
(statearr_18543_18563[(2)] = inst_18523);

(statearr_18543_18563[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (9))){
var state_18532__$1 = state_18532;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18544_18564 = state_18532__$1;
(statearr_18544_18564[(1)] = (11));

} else {
var statearr_18545_18565 = state_18532__$1;
(statearr_18545_18565[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (5))){
var inst_18509 = (state_18532[(7)]);
var state_18532__$1 = state_18532;
var statearr_18546_18566 = state_18532__$1;
(statearr_18546_18566[(2)] = inst_18509);

(statearr_18546_18566[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (10))){
var inst_18528 = (state_18532[(2)]);
var state_18532__$1 = state_18532;
var statearr_18547_18567 = state_18532__$1;
(statearr_18547_18567[(2)] = inst_18528);

(statearr_18547_18567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (8))){
var inst_18509 = (state_18532[(7)]);
var inst_18519 = cljs.core.next.call(null,inst_18509);
var inst_18509__$1 = inst_18519;
var state_18532__$1 = (function (){var statearr_18548 = state_18532;
(statearr_18548[(7)] = inst_18509__$1);

return statearr_18548;
})();
var statearr_18549_18568 = state_18532__$1;
(statearr_18549_18568[(2)] = null);

(statearr_18549_18568[(1)] = (2));


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
});})(c__16110__auto__))
;
return ((function (switch__15943__auto__,c__16110__auto__){
return (function() {
var cljs$core$async$state_machine__15944__auto__ = null;
var cljs$core$async$state_machine__15944__auto____0 = (function (){
var statearr_18550 = [null,null,null,null,null,null,null,null];
(statearr_18550[(0)] = cljs$core$async$state_machine__15944__auto__);

(statearr_18550[(1)] = (1));

return statearr_18550;
});
var cljs$core$async$state_machine__15944__auto____1 = (function (state_18532){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_18532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e18551){if((e18551 instanceof Object)){
var ex__15947__auto__ = e18551;
var statearr_18552_18569 = state_18532;
(statearr_18552_18569[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18570 = state_18532;
state_18532 = G__18570;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$state_machine__15944__auto__ = function(state_18532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15944__auto____1.call(this,state_18532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15944__auto____0;
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15944__auto____1;
return cljs$core$async$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16110__auto__))
})();
var state__16112__auto__ = (function (){var statearr_18553 = f__16111__auto__.call(null);
(statearr_18553[(6)] = c__16110__auto__);

return statearr_18553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16112__auto__);
});})(c__16110__auto__))
);

return c__16110__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18571 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18571 = (function (ch,cs,meta18572){
this.ch = ch;
this.cs = cs;
this.meta18572 = meta18572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18573,meta18572__$1){
var self__ = this;
var _18573__$1 = this;
return (new cljs.core.async.t_cljs$core$async18571(self__.ch,self__.cs,meta18572__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18571.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18573){
var self__ = this;
var _18573__$1 = this;
return self__.meta18572;
});})(cs))
;

cljs.core.async.t_cljs$core$async18571.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18571.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18571.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18571.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18571.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18571.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18571.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18572","meta18572",1827684863,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18571.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18571";

cljs.core.async.t_cljs$core$async18571.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async18571");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18571.
 */
cljs.core.async.__GT_t_cljs$core$async18571 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18571(ch__$1,cs__$1,meta18572){
return (new cljs.core.async.t_cljs$core$async18571(ch__$1,cs__$1,meta18572));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18571(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__16110__auto___18793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16110__auto___18793,cs,m,dchan,dctr,done){
return (function (){
var f__16111__auto__ = (function (){var switch__15943__auto__ = ((function (c__16110__auto___18793,cs,m,dchan,dctr,done){
return (function (state_18708){
var state_val_18709 = (state_18708[(1)]);
if((state_val_18709 === (7))){
var inst_18704 = (state_18708[(2)]);
var state_18708__$1 = state_18708;
var statearr_18710_18794 = state_18708__$1;
(statearr_18710_18794[(2)] = inst_18704);

(statearr_18710_18794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (20))){
var inst_18607 = (state_18708[(7)]);
var inst_18619 = cljs.core.first.call(null,inst_18607);
var inst_18620 = cljs.core.nth.call(null,inst_18619,(0),null);
var inst_18621 = cljs.core.nth.call(null,inst_18619,(1),null);
var state_18708__$1 = (function (){var statearr_18711 = state_18708;
(statearr_18711[(8)] = inst_18620);

return statearr_18711;
})();
if(cljs.core.truth_(inst_18621)){
var statearr_18712_18795 = state_18708__$1;
(statearr_18712_18795[(1)] = (22));

} else {
var statearr_18713_18796 = state_18708__$1;
(statearr_18713_18796[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (27))){
var inst_18649 = (state_18708[(9)]);
var inst_18651 = (state_18708[(10)]);
var inst_18656 = (state_18708[(11)]);
var inst_18576 = (state_18708[(12)]);
var inst_18656__$1 = cljs.core._nth.call(null,inst_18649,inst_18651);
var inst_18657 = cljs.core.async.put_BANG_.call(null,inst_18656__$1,inst_18576,done);
var state_18708__$1 = (function (){var statearr_18714 = state_18708;
(statearr_18714[(11)] = inst_18656__$1);

return statearr_18714;
})();
if(cljs.core.truth_(inst_18657)){
var statearr_18715_18797 = state_18708__$1;
(statearr_18715_18797[(1)] = (30));

} else {
var statearr_18716_18798 = state_18708__$1;
(statearr_18716_18798[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (1))){
var state_18708__$1 = state_18708;
var statearr_18717_18799 = state_18708__$1;
(statearr_18717_18799[(2)] = null);

(statearr_18717_18799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (24))){
var inst_18607 = (state_18708[(7)]);
var inst_18626 = (state_18708[(2)]);
var inst_18627 = cljs.core.next.call(null,inst_18607);
var inst_18585 = inst_18627;
var inst_18586 = null;
var inst_18587 = (0);
var inst_18588 = (0);
var state_18708__$1 = (function (){var statearr_18718 = state_18708;
(statearr_18718[(13)] = inst_18586);

(statearr_18718[(14)] = inst_18588);

(statearr_18718[(15)] = inst_18626);

(statearr_18718[(16)] = inst_18585);

(statearr_18718[(17)] = inst_18587);

return statearr_18718;
})();
var statearr_18719_18800 = state_18708__$1;
(statearr_18719_18800[(2)] = null);

(statearr_18719_18800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (39))){
var state_18708__$1 = state_18708;
var statearr_18723_18801 = state_18708__$1;
(statearr_18723_18801[(2)] = null);

(statearr_18723_18801[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (4))){
var inst_18576 = (state_18708[(12)]);
var inst_18576__$1 = (state_18708[(2)]);
var inst_18577 = (inst_18576__$1 == null);
var state_18708__$1 = (function (){var statearr_18724 = state_18708;
(statearr_18724[(12)] = inst_18576__$1);

return statearr_18724;
})();
if(cljs.core.truth_(inst_18577)){
var statearr_18725_18802 = state_18708__$1;
(statearr_18725_18802[(1)] = (5));

} else {
var statearr_18726_18803 = state_18708__$1;
(statearr_18726_18803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (15))){
var inst_18586 = (state_18708[(13)]);
var inst_18588 = (state_18708[(14)]);
var inst_18585 = (state_18708[(16)]);
var inst_18587 = (state_18708[(17)]);
var inst_18603 = (state_18708[(2)]);
var inst_18604 = (inst_18588 + (1));
var tmp18720 = inst_18586;
var tmp18721 = inst_18585;
var tmp18722 = inst_18587;
var inst_18585__$1 = tmp18721;
var inst_18586__$1 = tmp18720;
var inst_18587__$1 = tmp18722;
var inst_18588__$1 = inst_18604;
var state_18708__$1 = (function (){var statearr_18727 = state_18708;
(statearr_18727[(13)] = inst_18586__$1);

(statearr_18727[(14)] = inst_18588__$1);

(statearr_18727[(18)] = inst_18603);

(statearr_18727[(16)] = inst_18585__$1);

(statearr_18727[(17)] = inst_18587__$1);

return statearr_18727;
})();
var statearr_18728_18804 = state_18708__$1;
(statearr_18728_18804[(2)] = null);

(statearr_18728_18804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (21))){
var inst_18630 = (state_18708[(2)]);
var state_18708__$1 = state_18708;
var statearr_18732_18805 = state_18708__$1;
(statearr_18732_18805[(2)] = inst_18630);

(statearr_18732_18805[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (31))){
var inst_18656 = (state_18708[(11)]);
var inst_18660 = done.call(null,null);
var inst_18661 = cljs.core.async.untap_STAR_.call(null,m,inst_18656);
var state_18708__$1 = (function (){var statearr_18733 = state_18708;
(statearr_18733[(19)] = inst_18660);

return statearr_18733;
})();
var statearr_18734_18806 = state_18708__$1;
(statearr_18734_18806[(2)] = inst_18661);

(statearr_18734_18806[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (32))){
var inst_18649 = (state_18708[(9)]);
var inst_18651 = (state_18708[(10)]);
var inst_18648 = (state_18708[(20)]);
var inst_18650 = (state_18708[(21)]);
var inst_18663 = (state_18708[(2)]);
var inst_18664 = (inst_18651 + (1));
var tmp18729 = inst_18649;
var tmp18730 = inst_18648;
var tmp18731 = inst_18650;
var inst_18648__$1 = tmp18730;
var inst_18649__$1 = tmp18729;
var inst_18650__$1 = tmp18731;
var inst_18651__$1 = inst_18664;
var state_18708__$1 = (function (){var statearr_18735 = state_18708;
(statearr_18735[(9)] = inst_18649__$1);

(statearr_18735[(10)] = inst_18651__$1);

(statearr_18735[(20)] = inst_18648__$1);

(statearr_18735[(22)] = inst_18663);

(statearr_18735[(21)] = inst_18650__$1);

return statearr_18735;
})();
var statearr_18736_18807 = state_18708__$1;
(statearr_18736_18807[(2)] = null);

(statearr_18736_18807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (40))){
var inst_18676 = (state_18708[(23)]);
var inst_18680 = done.call(null,null);
var inst_18681 = cljs.core.async.untap_STAR_.call(null,m,inst_18676);
var state_18708__$1 = (function (){var statearr_18737 = state_18708;
(statearr_18737[(24)] = inst_18680);

return statearr_18737;
})();
var statearr_18738_18808 = state_18708__$1;
(statearr_18738_18808[(2)] = inst_18681);

(statearr_18738_18808[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (33))){
var inst_18667 = (state_18708[(25)]);
var inst_18669 = cljs.core.chunked_seq_QMARK_.call(null,inst_18667);
var state_18708__$1 = state_18708;
if(inst_18669){
var statearr_18739_18809 = state_18708__$1;
(statearr_18739_18809[(1)] = (36));

} else {
var statearr_18740_18810 = state_18708__$1;
(statearr_18740_18810[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (13))){
var inst_18597 = (state_18708[(26)]);
var inst_18600 = cljs.core.async.close_BANG_.call(null,inst_18597);
var state_18708__$1 = state_18708;
var statearr_18741_18811 = state_18708__$1;
(statearr_18741_18811[(2)] = inst_18600);

(statearr_18741_18811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (22))){
var inst_18620 = (state_18708[(8)]);
var inst_18623 = cljs.core.async.close_BANG_.call(null,inst_18620);
var state_18708__$1 = state_18708;
var statearr_18742_18812 = state_18708__$1;
(statearr_18742_18812[(2)] = inst_18623);

(statearr_18742_18812[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (36))){
var inst_18667 = (state_18708[(25)]);
var inst_18671 = cljs.core.chunk_first.call(null,inst_18667);
var inst_18672 = cljs.core.chunk_rest.call(null,inst_18667);
var inst_18673 = cljs.core.count.call(null,inst_18671);
var inst_18648 = inst_18672;
var inst_18649 = inst_18671;
var inst_18650 = inst_18673;
var inst_18651 = (0);
var state_18708__$1 = (function (){var statearr_18743 = state_18708;
(statearr_18743[(9)] = inst_18649);

(statearr_18743[(10)] = inst_18651);

(statearr_18743[(20)] = inst_18648);

(statearr_18743[(21)] = inst_18650);

return statearr_18743;
})();
var statearr_18744_18813 = state_18708__$1;
(statearr_18744_18813[(2)] = null);

(statearr_18744_18813[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (41))){
var inst_18667 = (state_18708[(25)]);
var inst_18683 = (state_18708[(2)]);
var inst_18684 = cljs.core.next.call(null,inst_18667);
var inst_18648 = inst_18684;
var inst_18649 = null;
var inst_18650 = (0);
var inst_18651 = (0);
var state_18708__$1 = (function (){var statearr_18745 = state_18708;
(statearr_18745[(9)] = inst_18649);

(statearr_18745[(27)] = inst_18683);

(statearr_18745[(10)] = inst_18651);

(statearr_18745[(20)] = inst_18648);

(statearr_18745[(21)] = inst_18650);

return statearr_18745;
})();
var statearr_18746_18814 = state_18708__$1;
(statearr_18746_18814[(2)] = null);

(statearr_18746_18814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (43))){
var state_18708__$1 = state_18708;
var statearr_18747_18815 = state_18708__$1;
(statearr_18747_18815[(2)] = null);

(statearr_18747_18815[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (29))){
var inst_18692 = (state_18708[(2)]);
var state_18708__$1 = state_18708;
var statearr_18748_18816 = state_18708__$1;
(statearr_18748_18816[(2)] = inst_18692);

(statearr_18748_18816[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (44))){
var inst_18701 = (state_18708[(2)]);
var state_18708__$1 = (function (){var statearr_18749 = state_18708;
(statearr_18749[(28)] = inst_18701);

return statearr_18749;
})();
var statearr_18750_18817 = state_18708__$1;
(statearr_18750_18817[(2)] = null);

(statearr_18750_18817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (6))){
var inst_18640 = (state_18708[(29)]);
var inst_18639 = cljs.core.deref.call(null,cs);
var inst_18640__$1 = cljs.core.keys.call(null,inst_18639);
var inst_18641 = cljs.core.count.call(null,inst_18640__$1);
var inst_18642 = cljs.core.reset_BANG_.call(null,dctr,inst_18641);
var inst_18647 = cljs.core.seq.call(null,inst_18640__$1);
var inst_18648 = inst_18647;
var inst_18649 = null;
var inst_18650 = (0);
var inst_18651 = (0);
var state_18708__$1 = (function (){var statearr_18751 = state_18708;
(statearr_18751[(9)] = inst_18649);

(statearr_18751[(29)] = inst_18640__$1);

(statearr_18751[(10)] = inst_18651);

(statearr_18751[(20)] = inst_18648);

(statearr_18751[(30)] = inst_18642);

(statearr_18751[(21)] = inst_18650);

return statearr_18751;
})();
var statearr_18752_18818 = state_18708__$1;
(statearr_18752_18818[(2)] = null);

(statearr_18752_18818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (28))){
var inst_18667 = (state_18708[(25)]);
var inst_18648 = (state_18708[(20)]);
var inst_18667__$1 = cljs.core.seq.call(null,inst_18648);
var state_18708__$1 = (function (){var statearr_18753 = state_18708;
(statearr_18753[(25)] = inst_18667__$1);

return statearr_18753;
})();
if(inst_18667__$1){
var statearr_18754_18819 = state_18708__$1;
(statearr_18754_18819[(1)] = (33));

} else {
var statearr_18755_18820 = state_18708__$1;
(statearr_18755_18820[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (25))){
var inst_18651 = (state_18708[(10)]);
var inst_18650 = (state_18708[(21)]);
var inst_18653 = (inst_18651 < inst_18650);
var inst_18654 = inst_18653;
var state_18708__$1 = state_18708;
if(cljs.core.truth_(inst_18654)){
var statearr_18756_18821 = state_18708__$1;
(statearr_18756_18821[(1)] = (27));

} else {
var statearr_18757_18822 = state_18708__$1;
(statearr_18757_18822[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (34))){
var state_18708__$1 = state_18708;
var statearr_18758_18823 = state_18708__$1;
(statearr_18758_18823[(2)] = null);

(statearr_18758_18823[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (17))){
var state_18708__$1 = state_18708;
var statearr_18759_18824 = state_18708__$1;
(statearr_18759_18824[(2)] = null);

(statearr_18759_18824[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (3))){
var inst_18706 = (state_18708[(2)]);
var state_18708__$1 = state_18708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18708__$1,inst_18706);
} else {
if((state_val_18709 === (12))){
var inst_18635 = (state_18708[(2)]);
var state_18708__$1 = state_18708;
var statearr_18760_18825 = state_18708__$1;
(statearr_18760_18825[(2)] = inst_18635);

(statearr_18760_18825[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (2))){
var state_18708__$1 = state_18708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18708__$1,(4),ch);
} else {
if((state_val_18709 === (23))){
var state_18708__$1 = state_18708;
var statearr_18761_18826 = state_18708__$1;
(statearr_18761_18826[(2)] = null);

(statearr_18761_18826[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (35))){
var inst_18690 = (state_18708[(2)]);
var state_18708__$1 = state_18708;
var statearr_18762_18827 = state_18708__$1;
(statearr_18762_18827[(2)] = inst_18690);

(statearr_18762_18827[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (19))){
var inst_18607 = (state_18708[(7)]);
var inst_18611 = cljs.core.chunk_first.call(null,inst_18607);
var inst_18612 = cljs.core.chunk_rest.call(null,inst_18607);
var inst_18613 = cljs.core.count.call(null,inst_18611);
var inst_18585 = inst_18612;
var inst_18586 = inst_18611;
var inst_18587 = inst_18613;
var inst_18588 = (0);
var state_18708__$1 = (function (){var statearr_18763 = state_18708;
(statearr_18763[(13)] = inst_18586);

(statearr_18763[(14)] = inst_18588);

(statearr_18763[(16)] = inst_18585);

(statearr_18763[(17)] = inst_18587);

return statearr_18763;
})();
var statearr_18764_18828 = state_18708__$1;
(statearr_18764_18828[(2)] = null);

(statearr_18764_18828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (11))){
var inst_18607 = (state_18708[(7)]);
var inst_18585 = (state_18708[(16)]);
var inst_18607__$1 = cljs.core.seq.call(null,inst_18585);
var state_18708__$1 = (function (){var statearr_18765 = state_18708;
(statearr_18765[(7)] = inst_18607__$1);

return statearr_18765;
})();
if(inst_18607__$1){
var statearr_18766_18829 = state_18708__$1;
(statearr_18766_18829[(1)] = (16));

} else {
var statearr_18767_18830 = state_18708__$1;
(statearr_18767_18830[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (9))){
var inst_18637 = (state_18708[(2)]);
var state_18708__$1 = state_18708;
var statearr_18768_18831 = state_18708__$1;
(statearr_18768_18831[(2)] = inst_18637);

(statearr_18768_18831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (5))){
var inst_18583 = cljs.core.deref.call(null,cs);
var inst_18584 = cljs.core.seq.call(null,inst_18583);
var inst_18585 = inst_18584;
var inst_18586 = null;
var inst_18587 = (0);
var inst_18588 = (0);
var state_18708__$1 = (function (){var statearr_18769 = state_18708;
(statearr_18769[(13)] = inst_18586);

(statearr_18769[(14)] = inst_18588);

(statearr_18769[(16)] = inst_18585);

(statearr_18769[(17)] = inst_18587);

return statearr_18769;
})();
var statearr_18770_18832 = state_18708__$1;
(statearr_18770_18832[(2)] = null);

(statearr_18770_18832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (14))){
var state_18708__$1 = state_18708;
var statearr_18771_18833 = state_18708__$1;
(statearr_18771_18833[(2)] = null);

(statearr_18771_18833[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (45))){
var inst_18698 = (state_18708[(2)]);
var state_18708__$1 = state_18708;
var statearr_18772_18834 = state_18708__$1;
(statearr_18772_18834[(2)] = inst_18698);

(statearr_18772_18834[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (26))){
var inst_18640 = (state_18708[(29)]);
var inst_18694 = (state_18708[(2)]);
var inst_18695 = cljs.core.seq.call(null,inst_18640);
var state_18708__$1 = (function (){var statearr_18773 = state_18708;
(statearr_18773[(31)] = inst_18694);

return statearr_18773;
})();
if(inst_18695){
var statearr_18774_18835 = state_18708__$1;
(statearr_18774_18835[(1)] = (42));

} else {
var statearr_18775_18836 = state_18708__$1;
(statearr_18775_18836[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (16))){
var inst_18607 = (state_18708[(7)]);
var inst_18609 = cljs.core.chunked_seq_QMARK_.call(null,inst_18607);
var state_18708__$1 = state_18708;
if(inst_18609){
var statearr_18776_18837 = state_18708__$1;
(statearr_18776_18837[(1)] = (19));

} else {
var statearr_18777_18838 = state_18708__$1;
(statearr_18777_18838[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (38))){
var inst_18687 = (state_18708[(2)]);
var state_18708__$1 = state_18708;
var statearr_18778_18839 = state_18708__$1;
(statearr_18778_18839[(2)] = inst_18687);

(statearr_18778_18839[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (30))){
var state_18708__$1 = state_18708;
var statearr_18779_18840 = state_18708__$1;
(statearr_18779_18840[(2)] = null);

(statearr_18779_18840[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (10))){
var inst_18586 = (state_18708[(13)]);
var inst_18588 = (state_18708[(14)]);
var inst_18596 = cljs.core._nth.call(null,inst_18586,inst_18588);
var inst_18597 = cljs.core.nth.call(null,inst_18596,(0),null);
var inst_18598 = cljs.core.nth.call(null,inst_18596,(1),null);
var state_18708__$1 = (function (){var statearr_18780 = state_18708;
(statearr_18780[(26)] = inst_18597);

return statearr_18780;
})();
if(cljs.core.truth_(inst_18598)){
var statearr_18781_18841 = state_18708__$1;
(statearr_18781_18841[(1)] = (13));

} else {
var statearr_18782_18842 = state_18708__$1;
(statearr_18782_18842[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (18))){
var inst_18633 = (state_18708[(2)]);
var state_18708__$1 = state_18708;
var statearr_18783_18843 = state_18708__$1;
(statearr_18783_18843[(2)] = inst_18633);

(statearr_18783_18843[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (42))){
var state_18708__$1 = state_18708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18708__$1,(45),dchan);
} else {
if((state_val_18709 === (37))){
var inst_18667 = (state_18708[(25)]);
var inst_18576 = (state_18708[(12)]);
var inst_18676 = (state_18708[(23)]);
var inst_18676__$1 = cljs.core.first.call(null,inst_18667);
var inst_18677 = cljs.core.async.put_BANG_.call(null,inst_18676__$1,inst_18576,done);
var state_18708__$1 = (function (){var statearr_18784 = state_18708;
(statearr_18784[(23)] = inst_18676__$1);

return statearr_18784;
})();
if(cljs.core.truth_(inst_18677)){
var statearr_18785_18844 = state_18708__$1;
(statearr_18785_18844[(1)] = (39));

} else {
var statearr_18786_18845 = state_18708__$1;
(statearr_18786_18845[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18709 === (8))){
var inst_18588 = (state_18708[(14)]);
var inst_18587 = (state_18708[(17)]);
var inst_18590 = (inst_18588 < inst_18587);
var inst_18591 = inst_18590;
var state_18708__$1 = state_18708;
if(cljs.core.truth_(inst_18591)){
var statearr_18787_18846 = state_18708__$1;
(statearr_18787_18846[(1)] = (10));

} else {
var statearr_18788_18847 = state_18708__$1;
(statearr_18788_18847[(1)] = (11));

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
});})(c__16110__auto___18793,cs,m,dchan,dctr,done))
;
return ((function (switch__15943__auto__,c__16110__auto___18793,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15944__auto__ = null;
var cljs$core$async$mult_$_state_machine__15944__auto____0 = (function (){
var statearr_18789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18789[(0)] = cljs$core$async$mult_$_state_machine__15944__auto__);

(statearr_18789[(1)] = (1));

return statearr_18789;
});
var cljs$core$async$mult_$_state_machine__15944__auto____1 = (function (state_18708){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_18708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e18790){if((e18790 instanceof Object)){
var ex__15947__auto__ = e18790;
var statearr_18791_18848 = state_18708;
(statearr_18791_18848[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18849 = state_18708;
state_18708 = G__18849;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15944__auto__ = function(state_18708){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15944__auto____1.call(this,state_18708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15944__auto____0;
cljs$core$async$mult_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15944__auto____1;
return cljs$core$async$mult_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16110__auto___18793,cs,m,dchan,dctr,done))
})();
var state__16112__auto__ = (function (){var statearr_18792 = f__16111__auto__.call(null);
(statearr_18792[(6)] = c__16110__auto___18793);

return statearr_18792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16112__auto__);
});})(c__16110__auto___18793,cs,m,dchan,dctr,done))
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
var G__18851 = arguments.length;
switch (G__18851) {
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
var len__4641__auto___18863 = arguments.length;
var i__4642__auto___18864 = (0);
while(true){
if((i__4642__auto___18864 < len__4641__auto___18863)){
args__4647__auto__.push((arguments[i__4642__auto___18864]));

var G__18865 = (i__4642__auto___18864 + (1));
i__4642__auto___18864 = G__18865;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18857){
var map__18858 = p__18857;
var map__18858__$1 = (((((!((map__18858 == null))))?(((((map__18858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18858):map__18858);
var opts = map__18858__$1;
var statearr_18860_18866 = state;
(statearr_18860_18866[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__18858,map__18858__$1,opts){
return (function (val){
var statearr_18861_18867 = state;
(statearr_18861_18867[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18858,map__18858__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_18862_18868 = state;
(statearr_18862_18868[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18853){
var G__18854 = cljs.core.first.call(null,seq18853);
var seq18853__$1 = cljs.core.next.call(null,seq18853);
var G__18855 = cljs.core.first.call(null,seq18853__$1);
var seq18853__$2 = cljs.core.next.call(null,seq18853__$1);
var G__18856 = cljs.core.first.call(null,seq18853__$2);
var seq18853__$3 = cljs.core.next.call(null,seq18853__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18854,G__18855,G__18856,seq18853__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18869 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18869 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18870){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18870 = meta18870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18871,meta18870__$1){
var self__ = this;
var _18871__$1 = this;
return (new cljs.core.async.t_cljs$core$async18869(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18870__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18869.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18871){
var self__ = this;
var _18871__$1 = this;
return self__.meta18870;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18869.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18869.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18869.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18869.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18869.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18869.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18869.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18869.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18869.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18870","meta18870",-1882133341,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18869.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18869";

cljs.core.async.t_cljs$core$async18869.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async18869");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18869.
 */
cljs.core.async.__GT_t_cljs$core$async18869 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18869(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18870){
return (new cljs.core.async.t_cljs$core$async18869(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18870));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18869(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16110__auto___19033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16110__auto___19033,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16111__auto__ = (function (){var switch__15943__auto__ = ((function (c__16110__auto___19033,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18973){
var state_val_18974 = (state_18973[(1)]);
if((state_val_18974 === (7))){
var inst_18888 = (state_18973[(2)]);
var state_18973__$1 = state_18973;
var statearr_18975_19034 = state_18973__$1;
(statearr_18975_19034[(2)] = inst_18888);

(statearr_18975_19034[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (20))){
var inst_18900 = (state_18973[(7)]);
var state_18973__$1 = state_18973;
var statearr_18976_19035 = state_18973__$1;
(statearr_18976_19035[(2)] = inst_18900);

(statearr_18976_19035[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (27))){
var state_18973__$1 = state_18973;
var statearr_18977_19036 = state_18973__$1;
(statearr_18977_19036[(2)] = null);

(statearr_18977_19036[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (1))){
var inst_18875 = (state_18973[(8)]);
var inst_18875__$1 = calc_state.call(null);
var inst_18877 = (inst_18875__$1 == null);
var inst_18878 = cljs.core.not.call(null,inst_18877);
var state_18973__$1 = (function (){var statearr_18978 = state_18973;
(statearr_18978[(8)] = inst_18875__$1);

return statearr_18978;
})();
if(inst_18878){
var statearr_18979_19037 = state_18973__$1;
(statearr_18979_19037[(1)] = (2));

} else {
var statearr_18980_19038 = state_18973__$1;
(statearr_18980_19038[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (24))){
var inst_18924 = (state_18973[(9)]);
var inst_18947 = (state_18973[(10)]);
var inst_18933 = (state_18973[(11)]);
var inst_18947__$1 = inst_18924.call(null,inst_18933);
var state_18973__$1 = (function (){var statearr_18981 = state_18973;
(statearr_18981[(10)] = inst_18947__$1);

return statearr_18981;
})();
if(cljs.core.truth_(inst_18947__$1)){
var statearr_18982_19039 = state_18973__$1;
(statearr_18982_19039[(1)] = (29));

} else {
var statearr_18983_19040 = state_18973__$1;
(statearr_18983_19040[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (4))){
var inst_18891 = (state_18973[(2)]);
var state_18973__$1 = state_18973;
if(cljs.core.truth_(inst_18891)){
var statearr_18984_19041 = state_18973__$1;
(statearr_18984_19041[(1)] = (8));

} else {
var statearr_18985_19042 = state_18973__$1;
(statearr_18985_19042[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (15))){
var inst_18918 = (state_18973[(2)]);
var state_18973__$1 = state_18973;
if(cljs.core.truth_(inst_18918)){
var statearr_18986_19043 = state_18973__$1;
(statearr_18986_19043[(1)] = (19));

} else {
var statearr_18987_19044 = state_18973__$1;
(statearr_18987_19044[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (21))){
var inst_18923 = (state_18973[(12)]);
var inst_18923__$1 = (state_18973[(2)]);
var inst_18924 = cljs.core.get.call(null,inst_18923__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18925 = cljs.core.get.call(null,inst_18923__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18926 = cljs.core.get.call(null,inst_18923__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18973__$1 = (function (){var statearr_18988 = state_18973;
(statearr_18988[(9)] = inst_18924);

(statearr_18988[(12)] = inst_18923__$1);

(statearr_18988[(13)] = inst_18925);

return statearr_18988;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18973__$1,(22),inst_18926);
} else {
if((state_val_18974 === (31))){
var inst_18955 = (state_18973[(2)]);
var state_18973__$1 = state_18973;
if(cljs.core.truth_(inst_18955)){
var statearr_18989_19045 = state_18973__$1;
(statearr_18989_19045[(1)] = (32));

} else {
var statearr_18990_19046 = state_18973__$1;
(statearr_18990_19046[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (32))){
var inst_18932 = (state_18973[(14)]);
var state_18973__$1 = state_18973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18973__$1,(35),out,inst_18932);
} else {
if((state_val_18974 === (33))){
var inst_18923 = (state_18973[(12)]);
var inst_18900 = inst_18923;
var state_18973__$1 = (function (){var statearr_18991 = state_18973;
(statearr_18991[(7)] = inst_18900);

return statearr_18991;
})();
var statearr_18992_19047 = state_18973__$1;
(statearr_18992_19047[(2)] = null);

(statearr_18992_19047[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (13))){
var inst_18900 = (state_18973[(7)]);
var inst_18907 = inst_18900.cljs$lang$protocol_mask$partition0$;
var inst_18908 = (inst_18907 & (64));
var inst_18909 = inst_18900.cljs$core$ISeq$;
var inst_18910 = (cljs.core.PROTOCOL_SENTINEL === inst_18909);
var inst_18911 = ((inst_18908) || (inst_18910));
var state_18973__$1 = state_18973;
if(cljs.core.truth_(inst_18911)){
var statearr_18993_19048 = state_18973__$1;
(statearr_18993_19048[(1)] = (16));

} else {
var statearr_18994_19049 = state_18973__$1;
(statearr_18994_19049[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (22))){
var inst_18932 = (state_18973[(14)]);
var inst_18933 = (state_18973[(11)]);
var inst_18931 = (state_18973[(2)]);
var inst_18932__$1 = cljs.core.nth.call(null,inst_18931,(0),null);
var inst_18933__$1 = cljs.core.nth.call(null,inst_18931,(1),null);
var inst_18934 = (inst_18932__$1 == null);
var inst_18935 = cljs.core._EQ_.call(null,inst_18933__$1,change);
var inst_18936 = ((inst_18934) || (inst_18935));
var state_18973__$1 = (function (){var statearr_18995 = state_18973;
(statearr_18995[(14)] = inst_18932__$1);

(statearr_18995[(11)] = inst_18933__$1);

return statearr_18995;
})();
if(cljs.core.truth_(inst_18936)){
var statearr_18996_19050 = state_18973__$1;
(statearr_18996_19050[(1)] = (23));

} else {
var statearr_18997_19051 = state_18973__$1;
(statearr_18997_19051[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (36))){
var inst_18923 = (state_18973[(12)]);
var inst_18900 = inst_18923;
var state_18973__$1 = (function (){var statearr_18998 = state_18973;
(statearr_18998[(7)] = inst_18900);

return statearr_18998;
})();
var statearr_18999_19052 = state_18973__$1;
(statearr_18999_19052[(2)] = null);

(statearr_18999_19052[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (29))){
var inst_18947 = (state_18973[(10)]);
var state_18973__$1 = state_18973;
var statearr_19000_19053 = state_18973__$1;
(statearr_19000_19053[(2)] = inst_18947);

(statearr_19000_19053[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (6))){
var state_18973__$1 = state_18973;
var statearr_19001_19054 = state_18973__$1;
(statearr_19001_19054[(2)] = false);

(statearr_19001_19054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (28))){
var inst_18943 = (state_18973[(2)]);
var inst_18944 = calc_state.call(null);
var inst_18900 = inst_18944;
var state_18973__$1 = (function (){var statearr_19002 = state_18973;
(statearr_19002[(15)] = inst_18943);

(statearr_19002[(7)] = inst_18900);

return statearr_19002;
})();
var statearr_19003_19055 = state_18973__$1;
(statearr_19003_19055[(2)] = null);

(statearr_19003_19055[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (25))){
var inst_18969 = (state_18973[(2)]);
var state_18973__$1 = state_18973;
var statearr_19004_19056 = state_18973__$1;
(statearr_19004_19056[(2)] = inst_18969);

(statearr_19004_19056[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (34))){
var inst_18967 = (state_18973[(2)]);
var state_18973__$1 = state_18973;
var statearr_19005_19057 = state_18973__$1;
(statearr_19005_19057[(2)] = inst_18967);

(statearr_19005_19057[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (17))){
var state_18973__$1 = state_18973;
var statearr_19006_19058 = state_18973__$1;
(statearr_19006_19058[(2)] = false);

(statearr_19006_19058[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (3))){
var state_18973__$1 = state_18973;
var statearr_19007_19059 = state_18973__$1;
(statearr_19007_19059[(2)] = false);

(statearr_19007_19059[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (12))){
var inst_18971 = (state_18973[(2)]);
var state_18973__$1 = state_18973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18973__$1,inst_18971);
} else {
if((state_val_18974 === (2))){
var inst_18875 = (state_18973[(8)]);
var inst_18880 = inst_18875.cljs$lang$protocol_mask$partition0$;
var inst_18881 = (inst_18880 & (64));
var inst_18882 = inst_18875.cljs$core$ISeq$;
var inst_18883 = (cljs.core.PROTOCOL_SENTINEL === inst_18882);
var inst_18884 = ((inst_18881) || (inst_18883));
var state_18973__$1 = state_18973;
if(cljs.core.truth_(inst_18884)){
var statearr_19008_19060 = state_18973__$1;
(statearr_19008_19060[(1)] = (5));

} else {
var statearr_19009_19061 = state_18973__$1;
(statearr_19009_19061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (23))){
var inst_18932 = (state_18973[(14)]);
var inst_18938 = (inst_18932 == null);
var state_18973__$1 = state_18973;
if(cljs.core.truth_(inst_18938)){
var statearr_19010_19062 = state_18973__$1;
(statearr_19010_19062[(1)] = (26));

} else {
var statearr_19011_19063 = state_18973__$1;
(statearr_19011_19063[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (35))){
var inst_18958 = (state_18973[(2)]);
var state_18973__$1 = state_18973;
if(cljs.core.truth_(inst_18958)){
var statearr_19012_19064 = state_18973__$1;
(statearr_19012_19064[(1)] = (36));

} else {
var statearr_19013_19065 = state_18973__$1;
(statearr_19013_19065[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (19))){
var inst_18900 = (state_18973[(7)]);
var inst_18920 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18900);
var state_18973__$1 = state_18973;
var statearr_19014_19066 = state_18973__$1;
(statearr_19014_19066[(2)] = inst_18920);

(statearr_19014_19066[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (11))){
var inst_18900 = (state_18973[(7)]);
var inst_18904 = (inst_18900 == null);
var inst_18905 = cljs.core.not.call(null,inst_18904);
var state_18973__$1 = state_18973;
if(inst_18905){
var statearr_19015_19067 = state_18973__$1;
(statearr_19015_19067[(1)] = (13));

} else {
var statearr_19016_19068 = state_18973__$1;
(statearr_19016_19068[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (9))){
var inst_18875 = (state_18973[(8)]);
var state_18973__$1 = state_18973;
var statearr_19017_19069 = state_18973__$1;
(statearr_19017_19069[(2)] = inst_18875);

(statearr_19017_19069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (5))){
var state_18973__$1 = state_18973;
var statearr_19018_19070 = state_18973__$1;
(statearr_19018_19070[(2)] = true);

(statearr_19018_19070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (14))){
var state_18973__$1 = state_18973;
var statearr_19019_19071 = state_18973__$1;
(statearr_19019_19071[(2)] = false);

(statearr_19019_19071[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (26))){
var inst_18933 = (state_18973[(11)]);
var inst_18940 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18933);
var state_18973__$1 = state_18973;
var statearr_19020_19072 = state_18973__$1;
(statearr_19020_19072[(2)] = inst_18940);

(statearr_19020_19072[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (16))){
var state_18973__$1 = state_18973;
var statearr_19021_19073 = state_18973__$1;
(statearr_19021_19073[(2)] = true);

(statearr_19021_19073[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (38))){
var inst_18963 = (state_18973[(2)]);
var state_18973__$1 = state_18973;
var statearr_19022_19074 = state_18973__$1;
(statearr_19022_19074[(2)] = inst_18963);

(statearr_19022_19074[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (30))){
var inst_18924 = (state_18973[(9)]);
var inst_18925 = (state_18973[(13)]);
var inst_18933 = (state_18973[(11)]);
var inst_18950 = cljs.core.empty_QMARK_.call(null,inst_18924);
var inst_18951 = inst_18925.call(null,inst_18933);
var inst_18952 = cljs.core.not.call(null,inst_18951);
var inst_18953 = ((inst_18950) && (inst_18952));
var state_18973__$1 = state_18973;
var statearr_19023_19075 = state_18973__$1;
(statearr_19023_19075[(2)] = inst_18953);

(statearr_19023_19075[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (10))){
var inst_18875 = (state_18973[(8)]);
var inst_18896 = (state_18973[(2)]);
var inst_18897 = cljs.core.get.call(null,inst_18896,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18898 = cljs.core.get.call(null,inst_18896,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18899 = cljs.core.get.call(null,inst_18896,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18900 = inst_18875;
var state_18973__$1 = (function (){var statearr_19024 = state_18973;
(statearr_19024[(16)] = inst_18898);

(statearr_19024[(7)] = inst_18900);

(statearr_19024[(17)] = inst_18899);

(statearr_19024[(18)] = inst_18897);

return statearr_19024;
})();
var statearr_19025_19076 = state_18973__$1;
(statearr_19025_19076[(2)] = null);

(statearr_19025_19076[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (18))){
var inst_18915 = (state_18973[(2)]);
var state_18973__$1 = state_18973;
var statearr_19026_19077 = state_18973__$1;
(statearr_19026_19077[(2)] = inst_18915);

(statearr_19026_19077[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (37))){
var state_18973__$1 = state_18973;
var statearr_19027_19078 = state_18973__$1;
(statearr_19027_19078[(2)] = null);

(statearr_19027_19078[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18974 === (8))){
var inst_18875 = (state_18973[(8)]);
var inst_18893 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18875);
var state_18973__$1 = state_18973;
var statearr_19028_19079 = state_18973__$1;
(statearr_19028_19079[(2)] = inst_18893);

(statearr_19028_19079[(1)] = (10));


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
});})(c__16110__auto___19033,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15943__auto__,c__16110__auto___19033,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15944__auto__ = null;
var cljs$core$async$mix_$_state_machine__15944__auto____0 = (function (){
var statearr_19029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19029[(0)] = cljs$core$async$mix_$_state_machine__15944__auto__);

(statearr_19029[(1)] = (1));

return statearr_19029;
});
var cljs$core$async$mix_$_state_machine__15944__auto____1 = (function (state_18973){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_18973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e19030){if((e19030 instanceof Object)){
var ex__15947__auto__ = e19030;
var statearr_19031_19080 = state_18973;
(statearr_19031_19080[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19081 = state_18973;
state_18973 = G__19081;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15944__auto__ = function(state_18973){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15944__auto____1.call(this,state_18973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15944__auto____0;
cljs$core$async$mix_$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15944__auto____1;
return cljs$core$async$mix_$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16110__auto___19033,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16112__auto__ = (function (){var statearr_19032 = f__16111__auto__.call(null);
(statearr_19032[(6)] = c__16110__auto___19033);

return statearr_19032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16112__auto__);
});})(c__16110__auto___19033,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__19083 = arguments.length;
switch (G__19083) {
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
var G__19087 = arguments.length;
switch (G__19087) {
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
return (function (p1__19085_SHARP_){
if(cljs.core.truth_(p1__19085_SHARP_.call(null,topic))){
return p1__19085_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19085_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19088 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19088 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19089){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19089 = meta19089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19090,meta19089__$1){
var self__ = this;
var _19090__$1 = this;
return (new cljs.core.async.t_cljs$core$async19088(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19089__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19090){
var self__ = this;
var _19090__$1 = this;
return self__.meta19089;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19088.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19089","meta19089",-944314432,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19088.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19088";

cljs.core.async.t_cljs$core$async19088.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async19088");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19088.
 */
cljs.core.async.__GT_t_cljs$core$async19088 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19088(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19089){
return (new cljs.core.async.t_cljs$core$async19088(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19089));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19088(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16110__auto___19208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16110__auto___19208,mults,ensure_mult,p){
return (function (){
var f__16111__auto__ = (function (){var switch__15943__auto__ = ((function (c__16110__auto___19208,mults,ensure_mult,p){
return (function (state_19162){
var state_val_19163 = (state_19162[(1)]);
if((state_val_19163 === (7))){
var inst_19158 = (state_19162[(2)]);
var state_19162__$1 = state_19162;
var statearr_19164_19209 = state_19162__$1;
(statearr_19164_19209[(2)] = inst_19158);

(statearr_19164_19209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (20))){
var state_19162__$1 = state_19162;
var statearr_19165_19210 = state_19162__$1;
(statearr_19165_19210[(2)] = null);

(statearr_19165_19210[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (1))){
var state_19162__$1 = state_19162;
var statearr_19166_19211 = state_19162__$1;
(statearr_19166_19211[(2)] = null);

(statearr_19166_19211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (24))){
var inst_19141 = (state_19162[(7)]);
var inst_19150 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19141);
var state_19162__$1 = state_19162;
var statearr_19167_19212 = state_19162__$1;
(statearr_19167_19212[(2)] = inst_19150);

(statearr_19167_19212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (4))){
var inst_19093 = (state_19162[(8)]);
var inst_19093__$1 = (state_19162[(2)]);
var inst_19094 = (inst_19093__$1 == null);
var state_19162__$1 = (function (){var statearr_19168 = state_19162;
(statearr_19168[(8)] = inst_19093__$1);

return statearr_19168;
})();
if(cljs.core.truth_(inst_19094)){
var statearr_19169_19213 = state_19162__$1;
(statearr_19169_19213[(1)] = (5));

} else {
var statearr_19170_19214 = state_19162__$1;
(statearr_19170_19214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (15))){
var inst_19135 = (state_19162[(2)]);
var state_19162__$1 = state_19162;
var statearr_19171_19215 = state_19162__$1;
(statearr_19171_19215[(2)] = inst_19135);

(statearr_19171_19215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (21))){
var inst_19155 = (state_19162[(2)]);
var state_19162__$1 = (function (){var statearr_19172 = state_19162;
(statearr_19172[(9)] = inst_19155);

return statearr_19172;
})();
var statearr_19173_19216 = state_19162__$1;
(statearr_19173_19216[(2)] = null);

(statearr_19173_19216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (13))){
var inst_19117 = (state_19162[(10)]);
var inst_19119 = cljs.core.chunked_seq_QMARK_.call(null,inst_19117);
var state_19162__$1 = state_19162;
if(inst_19119){
var statearr_19174_19217 = state_19162__$1;
(statearr_19174_19217[(1)] = (16));

} else {
var statearr_19175_19218 = state_19162__$1;
(statearr_19175_19218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (22))){
var inst_19147 = (state_19162[(2)]);
var state_19162__$1 = state_19162;
if(cljs.core.truth_(inst_19147)){
var statearr_19176_19219 = state_19162__$1;
(statearr_19176_19219[(1)] = (23));

} else {
var statearr_19177_19220 = state_19162__$1;
(statearr_19177_19220[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (6))){
var inst_19141 = (state_19162[(7)]);
var inst_19143 = (state_19162[(11)]);
var inst_19093 = (state_19162[(8)]);
var inst_19141__$1 = topic_fn.call(null,inst_19093);
var inst_19142 = cljs.core.deref.call(null,mults);
var inst_19143__$1 = cljs.core.get.call(null,inst_19142,inst_19141__$1);
var state_19162__$1 = (function (){var statearr_19178 = state_19162;
(statearr_19178[(7)] = inst_19141__$1);

(statearr_19178[(11)] = inst_19143__$1);

return statearr_19178;
})();
if(cljs.core.truth_(inst_19143__$1)){
var statearr_19179_19221 = state_19162__$1;
(statearr_19179_19221[(1)] = (19));

} else {
var statearr_19180_19222 = state_19162__$1;
(statearr_19180_19222[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (25))){
var inst_19152 = (state_19162[(2)]);
var state_19162__$1 = state_19162;
var statearr_19181_19223 = state_19162__$1;
(statearr_19181_19223[(2)] = inst_19152);

(statearr_19181_19223[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (17))){
var inst_19117 = (state_19162[(10)]);
var inst_19126 = cljs.core.first.call(null,inst_19117);
var inst_19127 = cljs.core.async.muxch_STAR_.call(null,inst_19126);
var inst_19128 = cljs.core.async.close_BANG_.call(null,inst_19127);
var inst_19129 = cljs.core.next.call(null,inst_19117);
var inst_19103 = inst_19129;
var inst_19104 = null;
var inst_19105 = (0);
var inst_19106 = (0);
var state_19162__$1 = (function (){var statearr_19182 = state_19162;
(statearr_19182[(12)] = inst_19103);

(statearr_19182[(13)] = inst_19105);

(statearr_19182[(14)] = inst_19128);

(statearr_19182[(15)] = inst_19104);

(statearr_19182[(16)] = inst_19106);

return statearr_19182;
})();
var statearr_19183_19224 = state_19162__$1;
(statearr_19183_19224[(2)] = null);

(statearr_19183_19224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (3))){
var inst_19160 = (state_19162[(2)]);
var state_19162__$1 = state_19162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19162__$1,inst_19160);
} else {
if((state_val_19163 === (12))){
var inst_19137 = (state_19162[(2)]);
var state_19162__$1 = state_19162;
var statearr_19184_19225 = state_19162__$1;
(statearr_19184_19225[(2)] = inst_19137);

(statearr_19184_19225[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (2))){
var state_19162__$1 = state_19162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19162__$1,(4),ch);
} else {
if((state_val_19163 === (23))){
var state_19162__$1 = state_19162;
var statearr_19185_19226 = state_19162__$1;
(statearr_19185_19226[(2)] = null);

(statearr_19185_19226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (19))){
var inst_19143 = (state_19162[(11)]);
var inst_19093 = (state_19162[(8)]);
var inst_19145 = cljs.core.async.muxch_STAR_.call(null,inst_19143);
var state_19162__$1 = state_19162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19162__$1,(22),inst_19145,inst_19093);
} else {
if((state_val_19163 === (11))){
var inst_19103 = (state_19162[(12)]);
var inst_19117 = (state_19162[(10)]);
var inst_19117__$1 = cljs.core.seq.call(null,inst_19103);
var state_19162__$1 = (function (){var statearr_19186 = state_19162;
(statearr_19186[(10)] = inst_19117__$1);

return statearr_19186;
})();
if(inst_19117__$1){
var statearr_19187_19227 = state_19162__$1;
(statearr_19187_19227[(1)] = (13));

} else {
var statearr_19188_19228 = state_19162__$1;
(statearr_19188_19228[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (9))){
var inst_19139 = (state_19162[(2)]);
var state_19162__$1 = state_19162;
var statearr_19189_19229 = state_19162__$1;
(statearr_19189_19229[(2)] = inst_19139);

(statearr_19189_19229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (5))){
var inst_19100 = cljs.core.deref.call(null,mults);
var inst_19101 = cljs.core.vals.call(null,inst_19100);
var inst_19102 = cljs.core.seq.call(null,inst_19101);
var inst_19103 = inst_19102;
var inst_19104 = null;
var inst_19105 = (0);
var inst_19106 = (0);
var state_19162__$1 = (function (){var statearr_19190 = state_19162;
(statearr_19190[(12)] = inst_19103);

(statearr_19190[(13)] = inst_19105);

(statearr_19190[(15)] = inst_19104);

(statearr_19190[(16)] = inst_19106);

return statearr_19190;
})();
var statearr_19191_19230 = state_19162__$1;
(statearr_19191_19230[(2)] = null);

(statearr_19191_19230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (14))){
var state_19162__$1 = state_19162;
var statearr_19195_19231 = state_19162__$1;
(statearr_19195_19231[(2)] = null);

(statearr_19195_19231[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (16))){
var inst_19117 = (state_19162[(10)]);
var inst_19121 = cljs.core.chunk_first.call(null,inst_19117);
var inst_19122 = cljs.core.chunk_rest.call(null,inst_19117);
var inst_19123 = cljs.core.count.call(null,inst_19121);
var inst_19103 = inst_19122;
var inst_19104 = inst_19121;
var inst_19105 = inst_19123;
var inst_19106 = (0);
var state_19162__$1 = (function (){var statearr_19196 = state_19162;
(statearr_19196[(12)] = inst_19103);

(statearr_19196[(13)] = inst_19105);

(statearr_19196[(15)] = inst_19104);

(statearr_19196[(16)] = inst_19106);

return statearr_19196;
})();
var statearr_19197_19232 = state_19162__$1;
(statearr_19197_19232[(2)] = null);

(statearr_19197_19232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (10))){
var inst_19103 = (state_19162[(12)]);
var inst_19105 = (state_19162[(13)]);
var inst_19104 = (state_19162[(15)]);
var inst_19106 = (state_19162[(16)]);
var inst_19111 = cljs.core._nth.call(null,inst_19104,inst_19106);
var inst_19112 = cljs.core.async.muxch_STAR_.call(null,inst_19111);
var inst_19113 = cljs.core.async.close_BANG_.call(null,inst_19112);
var inst_19114 = (inst_19106 + (1));
var tmp19192 = inst_19103;
var tmp19193 = inst_19105;
var tmp19194 = inst_19104;
var inst_19103__$1 = tmp19192;
var inst_19104__$1 = tmp19194;
var inst_19105__$1 = tmp19193;
var inst_19106__$1 = inst_19114;
var state_19162__$1 = (function (){var statearr_19198 = state_19162;
(statearr_19198[(12)] = inst_19103__$1);

(statearr_19198[(17)] = inst_19113);

(statearr_19198[(13)] = inst_19105__$1);

(statearr_19198[(15)] = inst_19104__$1);

(statearr_19198[(16)] = inst_19106__$1);

return statearr_19198;
})();
var statearr_19199_19233 = state_19162__$1;
(statearr_19199_19233[(2)] = null);

(statearr_19199_19233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (18))){
var inst_19132 = (state_19162[(2)]);
var state_19162__$1 = state_19162;
var statearr_19200_19234 = state_19162__$1;
(statearr_19200_19234[(2)] = inst_19132);

(statearr_19200_19234[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (8))){
var inst_19105 = (state_19162[(13)]);
var inst_19106 = (state_19162[(16)]);
var inst_19108 = (inst_19106 < inst_19105);
var inst_19109 = inst_19108;
var state_19162__$1 = state_19162;
if(cljs.core.truth_(inst_19109)){
var statearr_19201_19235 = state_19162__$1;
(statearr_19201_19235[(1)] = (10));

} else {
var statearr_19202_19236 = state_19162__$1;
(statearr_19202_19236[(1)] = (11));

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
});})(c__16110__auto___19208,mults,ensure_mult,p))
;
return ((function (switch__15943__auto__,c__16110__auto___19208,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15944__auto__ = null;
var cljs$core$async$state_machine__15944__auto____0 = (function (){
var statearr_19203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19203[(0)] = cljs$core$async$state_machine__15944__auto__);

(statearr_19203[(1)] = (1));

return statearr_19203;
});
var cljs$core$async$state_machine__15944__auto____1 = (function (state_19162){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_19162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e19204){if((e19204 instanceof Object)){
var ex__15947__auto__ = e19204;
var statearr_19205_19237 = state_19162;
(statearr_19205_19237[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19238 = state_19162;
state_19162 = G__19238;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$state_machine__15944__auto__ = function(state_19162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15944__auto____1.call(this,state_19162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15944__auto____0;
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15944__auto____1;
return cljs$core$async$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16110__auto___19208,mults,ensure_mult,p))
})();
var state__16112__auto__ = (function (){var statearr_19206 = f__16111__auto__.call(null);
(statearr_19206[(6)] = c__16110__auto___19208);

return statearr_19206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16112__auto__);
});})(c__16110__auto___19208,mults,ensure_mult,p))
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
var G__19240 = arguments.length;
switch (G__19240) {
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
var G__19243 = arguments.length;
switch (G__19243) {
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
var G__19246 = arguments.length;
switch (G__19246) {
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
var c__16110__auto___19313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16110__auto___19313,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16111__auto__ = (function (){var switch__15943__auto__ = ((function (c__16110__auto___19313,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19285){
var state_val_19286 = (state_19285[(1)]);
if((state_val_19286 === (7))){
var state_19285__$1 = state_19285;
var statearr_19287_19314 = state_19285__$1;
(statearr_19287_19314[(2)] = null);

(statearr_19287_19314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19286 === (1))){
var state_19285__$1 = state_19285;
var statearr_19288_19315 = state_19285__$1;
(statearr_19288_19315[(2)] = null);

(statearr_19288_19315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19286 === (4))){
var inst_19249 = (state_19285[(7)]);
var inst_19251 = (inst_19249 < cnt);
var state_19285__$1 = state_19285;
if(cljs.core.truth_(inst_19251)){
var statearr_19289_19316 = state_19285__$1;
(statearr_19289_19316[(1)] = (6));

} else {
var statearr_19290_19317 = state_19285__$1;
(statearr_19290_19317[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19286 === (15))){
var inst_19281 = (state_19285[(2)]);
var state_19285__$1 = state_19285;
var statearr_19291_19318 = state_19285__$1;
(statearr_19291_19318[(2)] = inst_19281);

(statearr_19291_19318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19286 === (13))){
var inst_19274 = cljs.core.async.close_BANG_.call(null,out);
var state_19285__$1 = state_19285;
var statearr_19292_19319 = state_19285__$1;
(statearr_19292_19319[(2)] = inst_19274);

(statearr_19292_19319[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19286 === (6))){
var state_19285__$1 = state_19285;
var statearr_19293_19320 = state_19285__$1;
(statearr_19293_19320[(2)] = null);

(statearr_19293_19320[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19286 === (3))){
var inst_19283 = (state_19285[(2)]);
var state_19285__$1 = state_19285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19285__$1,inst_19283);
} else {
if((state_val_19286 === (12))){
var inst_19271 = (state_19285[(8)]);
var inst_19271__$1 = (state_19285[(2)]);
var inst_19272 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19271__$1);
var state_19285__$1 = (function (){var statearr_19294 = state_19285;
(statearr_19294[(8)] = inst_19271__$1);

return statearr_19294;
})();
if(cljs.core.truth_(inst_19272)){
var statearr_19295_19321 = state_19285__$1;
(statearr_19295_19321[(1)] = (13));

} else {
var statearr_19296_19322 = state_19285__$1;
(statearr_19296_19322[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19286 === (2))){
var inst_19248 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19249 = (0);
var state_19285__$1 = (function (){var statearr_19297 = state_19285;
(statearr_19297[(7)] = inst_19249);

(statearr_19297[(9)] = inst_19248);

return statearr_19297;
})();
var statearr_19298_19323 = state_19285__$1;
(statearr_19298_19323[(2)] = null);

(statearr_19298_19323[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19286 === (11))){
var inst_19249 = (state_19285[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19285,(10),Object,null,(9));
var inst_19258 = chs__$1.call(null,inst_19249);
var inst_19259 = done.call(null,inst_19249);
var inst_19260 = cljs.core.async.take_BANG_.call(null,inst_19258,inst_19259);
var state_19285__$1 = state_19285;
var statearr_19299_19324 = state_19285__$1;
(statearr_19299_19324[(2)] = inst_19260);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19285__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19286 === (9))){
var inst_19249 = (state_19285[(7)]);
var inst_19262 = (state_19285[(2)]);
var inst_19263 = (inst_19249 + (1));
var inst_19249__$1 = inst_19263;
var state_19285__$1 = (function (){var statearr_19300 = state_19285;
(statearr_19300[(10)] = inst_19262);

(statearr_19300[(7)] = inst_19249__$1);

return statearr_19300;
})();
var statearr_19301_19325 = state_19285__$1;
(statearr_19301_19325[(2)] = null);

(statearr_19301_19325[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19286 === (5))){
var inst_19269 = (state_19285[(2)]);
var state_19285__$1 = (function (){var statearr_19302 = state_19285;
(statearr_19302[(11)] = inst_19269);

return statearr_19302;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19285__$1,(12),dchan);
} else {
if((state_val_19286 === (14))){
var inst_19271 = (state_19285[(8)]);
var inst_19276 = cljs.core.apply.call(null,f,inst_19271);
var state_19285__$1 = state_19285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19285__$1,(16),out,inst_19276);
} else {
if((state_val_19286 === (16))){
var inst_19278 = (state_19285[(2)]);
var state_19285__$1 = (function (){var statearr_19303 = state_19285;
(statearr_19303[(12)] = inst_19278);

return statearr_19303;
})();
var statearr_19304_19326 = state_19285__$1;
(statearr_19304_19326[(2)] = null);

(statearr_19304_19326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19286 === (10))){
var inst_19253 = (state_19285[(2)]);
var inst_19254 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19285__$1 = (function (){var statearr_19305 = state_19285;
(statearr_19305[(13)] = inst_19253);

return statearr_19305;
})();
var statearr_19306_19327 = state_19285__$1;
(statearr_19306_19327[(2)] = inst_19254);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19285__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19286 === (8))){
var inst_19267 = (state_19285[(2)]);
var state_19285__$1 = state_19285;
var statearr_19307_19328 = state_19285__$1;
(statearr_19307_19328[(2)] = inst_19267);

(statearr_19307_19328[(1)] = (5));


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
});})(c__16110__auto___19313,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15943__auto__,c__16110__auto___19313,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15944__auto__ = null;
var cljs$core$async$state_machine__15944__auto____0 = (function (){
var statearr_19308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19308[(0)] = cljs$core$async$state_machine__15944__auto__);

(statearr_19308[(1)] = (1));

return statearr_19308;
});
var cljs$core$async$state_machine__15944__auto____1 = (function (state_19285){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_19285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e19309){if((e19309 instanceof Object)){
var ex__15947__auto__ = e19309;
var statearr_19310_19329 = state_19285;
(statearr_19310_19329[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19330 = state_19285;
state_19285 = G__19330;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$state_machine__15944__auto__ = function(state_19285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15944__auto____1.call(this,state_19285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15944__auto____0;
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15944__auto____1;
return cljs$core$async$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16110__auto___19313,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16112__auto__ = (function (){var statearr_19311 = f__16111__auto__.call(null);
(statearr_19311[(6)] = c__16110__auto___19313);

return statearr_19311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16112__auto__);
});})(c__16110__auto___19313,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__19333 = arguments.length;
switch (G__19333) {
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
var c__16110__auto___19387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16110__auto___19387,out){
return (function (){
var f__16111__auto__ = (function (){var switch__15943__auto__ = ((function (c__16110__auto___19387,out){
return (function (state_19365){
var state_val_19366 = (state_19365[(1)]);
if((state_val_19366 === (7))){
var inst_19345 = (state_19365[(7)]);
var inst_19344 = (state_19365[(8)]);
var inst_19344__$1 = (state_19365[(2)]);
var inst_19345__$1 = cljs.core.nth.call(null,inst_19344__$1,(0),null);
var inst_19346 = cljs.core.nth.call(null,inst_19344__$1,(1),null);
var inst_19347 = (inst_19345__$1 == null);
var state_19365__$1 = (function (){var statearr_19367 = state_19365;
(statearr_19367[(9)] = inst_19346);

(statearr_19367[(7)] = inst_19345__$1);

(statearr_19367[(8)] = inst_19344__$1);

return statearr_19367;
})();
if(cljs.core.truth_(inst_19347)){
var statearr_19368_19388 = state_19365__$1;
(statearr_19368_19388[(1)] = (8));

} else {
var statearr_19369_19389 = state_19365__$1;
(statearr_19369_19389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19366 === (1))){
var inst_19334 = cljs.core.vec.call(null,chs);
var inst_19335 = inst_19334;
var state_19365__$1 = (function (){var statearr_19370 = state_19365;
(statearr_19370[(10)] = inst_19335);

return statearr_19370;
})();
var statearr_19371_19390 = state_19365__$1;
(statearr_19371_19390[(2)] = null);

(statearr_19371_19390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19366 === (4))){
var inst_19335 = (state_19365[(10)]);
var state_19365__$1 = state_19365;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19365__$1,(7),inst_19335);
} else {
if((state_val_19366 === (6))){
var inst_19361 = (state_19365[(2)]);
var state_19365__$1 = state_19365;
var statearr_19372_19391 = state_19365__$1;
(statearr_19372_19391[(2)] = inst_19361);

(statearr_19372_19391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19366 === (3))){
var inst_19363 = (state_19365[(2)]);
var state_19365__$1 = state_19365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19365__$1,inst_19363);
} else {
if((state_val_19366 === (2))){
var inst_19335 = (state_19365[(10)]);
var inst_19337 = cljs.core.count.call(null,inst_19335);
var inst_19338 = (inst_19337 > (0));
var state_19365__$1 = state_19365;
if(cljs.core.truth_(inst_19338)){
var statearr_19374_19392 = state_19365__$1;
(statearr_19374_19392[(1)] = (4));

} else {
var statearr_19375_19393 = state_19365__$1;
(statearr_19375_19393[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19366 === (11))){
var inst_19335 = (state_19365[(10)]);
var inst_19354 = (state_19365[(2)]);
var tmp19373 = inst_19335;
var inst_19335__$1 = tmp19373;
var state_19365__$1 = (function (){var statearr_19376 = state_19365;
(statearr_19376[(11)] = inst_19354);

(statearr_19376[(10)] = inst_19335__$1);

return statearr_19376;
})();
var statearr_19377_19394 = state_19365__$1;
(statearr_19377_19394[(2)] = null);

(statearr_19377_19394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19366 === (9))){
var inst_19345 = (state_19365[(7)]);
var state_19365__$1 = state_19365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19365__$1,(11),out,inst_19345);
} else {
if((state_val_19366 === (5))){
var inst_19359 = cljs.core.async.close_BANG_.call(null,out);
var state_19365__$1 = state_19365;
var statearr_19378_19395 = state_19365__$1;
(statearr_19378_19395[(2)] = inst_19359);

(statearr_19378_19395[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19366 === (10))){
var inst_19357 = (state_19365[(2)]);
var state_19365__$1 = state_19365;
var statearr_19379_19396 = state_19365__$1;
(statearr_19379_19396[(2)] = inst_19357);

(statearr_19379_19396[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19366 === (8))){
var inst_19346 = (state_19365[(9)]);
var inst_19345 = (state_19365[(7)]);
var inst_19344 = (state_19365[(8)]);
var inst_19335 = (state_19365[(10)]);
var inst_19349 = (function (){var cs = inst_19335;
var vec__19340 = inst_19344;
var v = inst_19345;
var c = inst_19346;
return ((function (cs,vec__19340,v,c,inst_19346,inst_19345,inst_19344,inst_19335,state_val_19366,c__16110__auto___19387,out){
return (function (p1__19331_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19331_SHARP_);
});
;})(cs,vec__19340,v,c,inst_19346,inst_19345,inst_19344,inst_19335,state_val_19366,c__16110__auto___19387,out))
})();
var inst_19350 = cljs.core.filterv.call(null,inst_19349,inst_19335);
var inst_19335__$1 = inst_19350;
var state_19365__$1 = (function (){var statearr_19380 = state_19365;
(statearr_19380[(10)] = inst_19335__$1);

return statearr_19380;
})();
var statearr_19381_19397 = state_19365__$1;
(statearr_19381_19397[(2)] = null);

(statearr_19381_19397[(1)] = (2));


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
});})(c__16110__auto___19387,out))
;
return ((function (switch__15943__auto__,c__16110__auto___19387,out){
return (function() {
var cljs$core$async$state_machine__15944__auto__ = null;
var cljs$core$async$state_machine__15944__auto____0 = (function (){
var statearr_19382 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19382[(0)] = cljs$core$async$state_machine__15944__auto__);

(statearr_19382[(1)] = (1));

return statearr_19382;
});
var cljs$core$async$state_machine__15944__auto____1 = (function (state_19365){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_19365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e19383){if((e19383 instanceof Object)){
var ex__15947__auto__ = e19383;
var statearr_19384_19398 = state_19365;
(statearr_19384_19398[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19399 = state_19365;
state_19365 = G__19399;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$state_machine__15944__auto__ = function(state_19365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15944__auto____1.call(this,state_19365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15944__auto____0;
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15944__auto____1;
return cljs$core$async$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16110__auto___19387,out))
})();
var state__16112__auto__ = (function (){var statearr_19385 = f__16111__auto__.call(null);
(statearr_19385[(6)] = c__16110__auto___19387);

return statearr_19385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16112__auto__);
});})(c__16110__auto___19387,out))
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
var G__19401 = arguments.length;
switch (G__19401) {
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
var c__16110__auto___19446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16110__auto___19446,out){
return (function (){
var f__16111__auto__ = (function (){var switch__15943__auto__ = ((function (c__16110__auto___19446,out){
return (function (state_19425){
var state_val_19426 = (state_19425[(1)]);
if((state_val_19426 === (7))){
var inst_19407 = (state_19425[(7)]);
var inst_19407__$1 = (state_19425[(2)]);
var inst_19408 = (inst_19407__$1 == null);
var inst_19409 = cljs.core.not.call(null,inst_19408);
var state_19425__$1 = (function (){var statearr_19427 = state_19425;
(statearr_19427[(7)] = inst_19407__$1);

return statearr_19427;
})();
if(inst_19409){
var statearr_19428_19447 = state_19425__$1;
(statearr_19428_19447[(1)] = (8));

} else {
var statearr_19429_19448 = state_19425__$1;
(statearr_19429_19448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (1))){
var inst_19402 = (0);
var state_19425__$1 = (function (){var statearr_19430 = state_19425;
(statearr_19430[(8)] = inst_19402);

return statearr_19430;
})();
var statearr_19431_19449 = state_19425__$1;
(statearr_19431_19449[(2)] = null);

(statearr_19431_19449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (4))){
var state_19425__$1 = state_19425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19425__$1,(7),ch);
} else {
if((state_val_19426 === (6))){
var inst_19420 = (state_19425[(2)]);
var state_19425__$1 = state_19425;
var statearr_19432_19450 = state_19425__$1;
(statearr_19432_19450[(2)] = inst_19420);

(statearr_19432_19450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (3))){
var inst_19422 = (state_19425[(2)]);
var inst_19423 = cljs.core.async.close_BANG_.call(null,out);
var state_19425__$1 = (function (){var statearr_19433 = state_19425;
(statearr_19433[(9)] = inst_19422);

return statearr_19433;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19425__$1,inst_19423);
} else {
if((state_val_19426 === (2))){
var inst_19402 = (state_19425[(8)]);
var inst_19404 = (inst_19402 < n);
var state_19425__$1 = state_19425;
if(cljs.core.truth_(inst_19404)){
var statearr_19434_19451 = state_19425__$1;
(statearr_19434_19451[(1)] = (4));

} else {
var statearr_19435_19452 = state_19425__$1;
(statearr_19435_19452[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (11))){
var inst_19402 = (state_19425[(8)]);
var inst_19412 = (state_19425[(2)]);
var inst_19413 = (inst_19402 + (1));
var inst_19402__$1 = inst_19413;
var state_19425__$1 = (function (){var statearr_19436 = state_19425;
(statearr_19436[(8)] = inst_19402__$1);

(statearr_19436[(10)] = inst_19412);

return statearr_19436;
})();
var statearr_19437_19453 = state_19425__$1;
(statearr_19437_19453[(2)] = null);

(statearr_19437_19453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (9))){
var state_19425__$1 = state_19425;
var statearr_19438_19454 = state_19425__$1;
(statearr_19438_19454[(2)] = null);

(statearr_19438_19454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (5))){
var state_19425__$1 = state_19425;
var statearr_19439_19455 = state_19425__$1;
(statearr_19439_19455[(2)] = null);

(statearr_19439_19455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (10))){
var inst_19417 = (state_19425[(2)]);
var state_19425__$1 = state_19425;
var statearr_19440_19456 = state_19425__$1;
(statearr_19440_19456[(2)] = inst_19417);

(statearr_19440_19456[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19426 === (8))){
var inst_19407 = (state_19425[(7)]);
var state_19425__$1 = state_19425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19425__$1,(11),out,inst_19407);
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
});})(c__16110__auto___19446,out))
;
return ((function (switch__15943__auto__,c__16110__auto___19446,out){
return (function() {
var cljs$core$async$state_machine__15944__auto__ = null;
var cljs$core$async$state_machine__15944__auto____0 = (function (){
var statearr_19441 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19441[(0)] = cljs$core$async$state_machine__15944__auto__);

(statearr_19441[(1)] = (1));

return statearr_19441;
});
var cljs$core$async$state_machine__15944__auto____1 = (function (state_19425){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_19425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e19442){if((e19442 instanceof Object)){
var ex__15947__auto__ = e19442;
var statearr_19443_19457 = state_19425;
(statearr_19443_19457[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19458 = state_19425;
state_19425 = G__19458;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$state_machine__15944__auto__ = function(state_19425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15944__auto____1.call(this,state_19425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15944__auto____0;
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15944__auto____1;
return cljs$core$async$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16110__auto___19446,out))
})();
var state__16112__auto__ = (function (){var statearr_19444 = f__16111__auto__.call(null);
(statearr_19444[(6)] = c__16110__auto___19446);

return statearr_19444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16112__auto__);
});})(c__16110__auto___19446,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19460 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19460 = (function (f,ch,meta19461){
this.f = f;
this.ch = ch;
this.meta19461 = meta19461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19462,meta19461__$1){
var self__ = this;
var _19462__$1 = this;
return (new cljs.core.async.t_cljs$core$async19460(self__.f,self__.ch,meta19461__$1));
});

cljs.core.async.t_cljs$core$async19460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19462){
var self__ = this;
var _19462__$1 = this;
return self__.meta19461;
});

cljs.core.async.t_cljs$core$async19460.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19460.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19460.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19460.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19460.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19463 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19463 = (function (f,ch,meta19461,_,fn1,meta19464){
this.f = f;
this.ch = ch;
this.meta19461 = meta19461;
this._ = _;
this.fn1 = fn1;
this.meta19464 = meta19464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19465,meta19464__$1){
var self__ = this;
var _19465__$1 = this;
return (new cljs.core.async.t_cljs$core$async19463(self__.f,self__.ch,self__.meta19461,self__._,self__.fn1,meta19464__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19463.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19465){
var self__ = this;
var _19465__$1 = this;
return self__.meta19464;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19463.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19463.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19463.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19463.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19459_SHARP_){
return f1.call(null,(((p1__19459_SHARP_ == null))?null:self__.f.call(null,p1__19459_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19463.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19461","meta19461",1096473145,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19460","cljs.core.async/t_cljs$core$async19460",868266017,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19464","meta19464",813048646,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19463.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19463";

cljs.core.async.t_cljs$core$async19463.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async19463");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19463.
 */
cljs.core.async.__GT_t_cljs$core$async19463 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19463(f__$1,ch__$1,meta19461__$1,___$2,fn1__$1,meta19464){
return (new cljs.core.async.t_cljs$core$async19463(f__$1,ch__$1,meta19461__$1,___$2,fn1__$1,meta19464));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19463(self__.f,self__.ch,self__.meta19461,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async19460.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19460.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19460.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19461","meta19461",1096473145,null)], null);
});

cljs.core.async.t_cljs$core$async19460.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19460.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19460";

cljs.core.async.t_cljs$core$async19460.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async19460");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19460.
 */
cljs.core.async.__GT_t_cljs$core$async19460 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19460(f__$1,ch__$1,meta19461){
return (new cljs.core.async.t_cljs$core$async19460(f__$1,ch__$1,meta19461));
});

}

return (new cljs.core.async.t_cljs$core$async19460(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19466 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19466 = (function (f,ch,meta19467){
this.f = f;
this.ch = ch;
this.meta19467 = meta19467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19468,meta19467__$1){
var self__ = this;
var _19468__$1 = this;
return (new cljs.core.async.t_cljs$core$async19466(self__.f,self__.ch,meta19467__$1));
});

cljs.core.async.t_cljs$core$async19466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19468){
var self__ = this;
var _19468__$1 = this;
return self__.meta19467;
});

cljs.core.async.t_cljs$core$async19466.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19466.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19466.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19466.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19466.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19466.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19467","meta19467",1501926260,null)], null);
});

cljs.core.async.t_cljs$core$async19466.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19466";

cljs.core.async.t_cljs$core$async19466.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async19466");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19466.
 */
cljs.core.async.__GT_t_cljs$core$async19466 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19466(f__$1,ch__$1,meta19467){
return (new cljs.core.async.t_cljs$core$async19466(f__$1,ch__$1,meta19467));
});

}

return (new cljs.core.async.t_cljs$core$async19466(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19469 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19469 = (function (p,ch,meta19470){
this.p = p;
this.ch = ch;
this.meta19470 = meta19470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19471,meta19470__$1){
var self__ = this;
var _19471__$1 = this;
return (new cljs.core.async.t_cljs$core$async19469(self__.p,self__.ch,meta19470__$1));
});

cljs.core.async.t_cljs$core$async19469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19471){
var self__ = this;
var _19471__$1 = this;
return self__.meta19470;
});

cljs.core.async.t_cljs$core$async19469.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19469.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19469.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19469.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19469.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19469.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19469.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19470","meta19470",731152850,null)], null);
});

cljs.core.async.t_cljs$core$async19469.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19469.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19469";

cljs.core.async.t_cljs$core$async19469.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async19469");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19469.
 */
cljs.core.async.__GT_t_cljs$core$async19469 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19469(p__$1,ch__$1,meta19470){
return (new cljs.core.async.t_cljs$core$async19469(p__$1,ch__$1,meta19470));
});

}

return (new cljs.core.async.t_cljs$core$async19469(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19473 = arguments.length;
switch (G__19473) {
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
var c__16110__auto___19513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16110__auto___19513,out){
return (function (){
var f__16111__auto__ = (function (){var switch__15943__auto__ = ((function (c__16110__auto___19513,out){
return (function (state_19494){
var state_val_19495 = (state_19494[(1)]);
if((state_val_19495 === (7))){
var inst_19490 = (state_19494[(2)]);
var state_19494__$1 = state_19494;
var statearr_19496_19514 = state_19494__$1;
(statearr_19496_19514[(2)] = inst_19490);

(statearr_19496_19514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19495 === (1))){
var state_19494__$1 = state_19494;
var statearr_19497_19515 = state_19494__$1;
(statearr_19497_19515[(2)] = null);

(statearr_19497_19515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19495 === (4))){
var inst_19476 = (state_19494[(7)]);
var inst_19476__$1 = (state_19494[(2)]);
var inst_19477 = (inst_19476__$1 == null);
var state_19494__$1 = (function (){var statearr_19498 = state_19494;
(statearr_19498[(7)] = inst_19476__$1);

return statearr_19498;
})();
if(cljs.core.truth_(inst_19477)){
var statearr_19499_19516 = state_19494__$1;
(statearr_19499_19516[(1)] = (5));

} else {
var statearr_19500_19517 = state_19494__$1;
(statearr_19500_19517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19495 === (6))){
var inst_19476 = (state_19494[(7)]);
var inst_19481 = p.call(null,inst_19476);
var state_19494__$1 = state_19494;
if(cljs.core.truth_(inst_19481)){
var statearr_19501_19518 = state_19494__$1;
(statearr_19501_19518[(1)] = (8));

} else {
var statearr_19502_19519 = state_19494__$1;
(statearr_19502_19519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19495 === (3))){
var inst_19492 = (state_19494[(2)]);
var state_19494__$1 = state_19494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19494__$1,inst_19492);
} else {
if((state_val_19495 === (2))){
var state_19494__$1 = state_19494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19494__$1,(4),ch);
} else {
if((state_val_19495 === (11))){
var inst_19484 = (state_19494[(2)]);
var state_19494__$1 = state_19494;
var statearr_19503_19520 = state_19494__$1;
(statearr_19503_19520[(2)] = inst_19484);

(statearr_19503_19520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19495 === (9))){
var state_19494__$1 = state_19494;
var statearr_19504_19521 = state_19494__$1;
(statearr_19504_19521[(2)] = null);

(statearr_19504_19521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19495 === (5))){
var inst_19479 = cljs.core.async.close_BANG_.call(null,out);
var state_19494__$1 = state_19494;
var statearr_19505_19522 = state_19494__$1;
(statearr_19505_19522[(2)] = inst_19479);

(statearr_19505_19522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19495 === (10))){
var inst_19487 = (state_19494[(2)]);
var state_19494__$1 = (function (){var statearr_19506 = state_19494;
(statearr_19506[(8)] = inst_19487);

return statearr_19506;
})();
var statearr_19507_19523 = state_19494__$1;
(statearr_19507_19523[(2)] = null);

(statearr_19507_19523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19495 === (8))){
var inst_19476 = (state_19494[(7)]);
var state_19494__$1 = state_19494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19494__$1,(11),out,inst_19476);
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
});})(c__16110__auto___19513,out))
;
return ((function (switch__15943__auto__,c__16110__auto___19513,out){
return (function() {
var cljs$core$async$state_machine__15944__auto__ = null;
var cljs$core$async$state_machine__15944__auto____0 = (function (){
var statearr_19508 = [null,null,null,null,null,null,null,null,null];
(statearr_19508[(0)] = cljs$core$async$state_machine__15944__auto__);

(statearr_19508[(1)] = (1));

return statearr_19508;
});
var cljs$core$async$state_machine__15944__auto____1 = (function (state_19494){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_19494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e19509){if((e19509 instanceof Object)){
var ex__15947__auto__ = e19509;
var statearr_19510_19524 = state_19494;
(statearr_19510_19524[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19525 = state_19494;
state_19494 = G__19525;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$state_machine__15944__auto__ = function(state_19494){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15944__auto____1.call(this,state_19494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15944__auto____0;
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15944__auto____1;
return cljs$core$async$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16110__auto___19513,out))
})();
var state__16112__auto__ = (function (){var statearr_19511 = f__16111__auto__.call(null);
(statearr_19511[(6)] = c__16110__auto___19513);

return statearr_19511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16112__auto__);
});})(c__16110__auto___19513,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19527 = arguments.length;
switch (G__19527) {
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
var c__16110__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16110__auto__){
return (function (){
var f__16111__auto__ = (function (){var switch__15943__auto__ = ((function (c__16110__auto__){
return (function (state_19590){
var state_val_19591 = (state_19590[(1)]);
if((state_val_19591 === (7))){
var inst_19586 = (state_19590[(2)]);
var state_19590__$1 = state_19590;
var statearr_19592_19630 = state_19590__$1;
(statearr_19592_19630[(2)] = inst_19586);

(statearr_19592_19630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19591 === (20))){
var inst_19556 = (state_19590[(7)]);
var inst_19567 = (state_19590[(2)]);
var inst_19568 = cljs.core.next.call(null,inst_19556);
var inst_19542 = inst_19568;
var inst_19543 = null;
var inst_19544 = (0);
var inst_19545 = (0);
var state_19590__$1 = (function (){var statearr_19593 = state_19590;
(statearr_19593[(8)] = inst_19567);

(statearr_19593[(9)] = inst_19542);

(statearr_19593[(10)] = inst_19544);

(statearr_19593[(11)] = inst_19543);

(statearr_19593[(12)] = inst_19545);

return statearr_19593;
})();
var statearr_19594_19631 = state_19590__$1;
(statearr_19594_19631[(2)] = null);

(statearr_19594_19631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19591 === (1))){
var state_19590__$1 = state_19590;
var statearr_19595_19632 = state_19590__$1;
(statearr_19595_19632[(2)] = null);

(statearr_19595_19632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19591 === (4))){
var inst_19531 = (state_19590[(13)]);
var inst_19531__$1 = (state_19590[(2)]);
var inst_19532 = (inst_19531__$1 == null);
var state_19590__$1 = (function (){var statearr_19596 = state_19590;
(statearr_19596[(13)] = inst_19531__$1);

return statearr_19596;
})();
if(cljs.core.truth_(inst_19532)){
var statearr_19597_19633 = state_19590__$1;
(statearr_19597_19633[(1)] = (5));

} else {
var statearr_19598_19634 = state_19590__$1;
(statearr_19598_19634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19591 === (15))){
var state_19590__$1 = state_19590;
var statearr_19602_19635 = state_19590__$1;
(statearr_19602_19635[(2)] = null);

(statearr_19602_19635[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19591 === (21))){
var state_19590__$1 = state_19590;
var statearr_19603_19636 = state_19590__$1;
(statearr_19603_19636[(2)] = null);

(statearr_19603_19636[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19591 === (13))){
var inst_19542 = (state_19590[(9)]);
var inst_19544 = (state_19590[(10)]);
var inst_19543 = (state_19590[(11)]);
var inst_19545 = (state_19590[(12)]);
var inst_19552 = (state_19590[(2)]);
var inst_19553 = (inst_19545 + (1));
var tmp19599 = inst_19542;
var tmp19600 = inst_19544;
var tmp19601 = inst_19543;
var inst_19542__$1 = tmp19599;
var inst_19543__$1 = tmp19601;
var inst_19544__$1 = tmp19600;
var inst_19545__$1 = inst_19553;
var state_19590__$1 = (function (){var statearr_19604 = state_19590;
(statearr_19604[(9)] = inst_19542__$1);

(statearr_19604[(10)] = inst_19544__$1);

(statearr_19604[(11)] = inst_19543__$1);

(statearr_19604[(14)] = inst_19552);

(statearr_19604[(12)] = inst_19545__$1);

return statearr_19604;
})();
var statearr_19605_19637 = state_19590__$1;
(statearr_19605_19637[(2)] = null);

(statearr_19605_19637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19591 === (22))){
var state_19590__$1 = state_19590;
var statearr_19606_19638 = state_19590__$1;
(statearr_19606_19638[(2)] = null);

(statearr_19606_19638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19591 === (6))){
var inst_19531 = (state_19590[(13)]);
var inst_19540 = f.call(null,inst_19531);
var inst_19541 = cljs.core.seq.call(null,inst_19540);
var inst_19542 = inst_19541;
var inst_19543 = null;
var inst_19544 = (0);
var inst_19545 = (0);
var state_19590__$1 = (function (){var statearr_19607 = state_19590;
(statearr_19607[(9)] = inst_19542);

(statearr_19607[(10)] = inst_19544);

(statearr_19607[(11)] = inst_19543);

(statearr_19607[(12)] = inst_19545);

return statearr_19607;
})();
var statearr_19608_19639 = state_19590__$1;
(statearr_19608_19639[(2)] = null);

(statearr_19608_19639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19591 === (17))){
var inst_19556 = (state_19590[(7)]);
var inst_19560 = cljs.core.chunk_first.call(null,inst_19556);
var inst_19561 = cljs.core.chunk_rest.call(null,inst_19556);
var inst_19562 = cljs.core.count.call(null,inst_19560);
var inst_19542 = inst_19561;
var inst_19543 = inst_19560;
var inst_19544 = inst_19562;
var inst_19545 = (0);
var state_19590__$1 = (function (){var statearr_19609 = state_19590;
(statearr_19609[(9)] = inst_19542);

(statearr_19609[(10)] = inst_19544);

(statearr_19609[(11)] = inst_19543);

(statearr_19609[(12)] = inst_19545);

return statearr_19609;
})();
var statearr_19610_19640 = state_19590__$1;
(statearr_19610_19640[(2)] = null);

(statearr_19610_19640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19591 === (3))){
var inst_19588 = (state_19590[(2)]);
var state_19590__$1 = state_19590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19590__$1,inst_19588);
} else {
if((state_val_19591 === (12))){
var inst_19576 = (state_19590[(2)]);
var state_19590__$1 = state_19590;
var statearr_19611_19641 = state_19590__$1;
(statearr_19611_19641[(2)] = inst_19576);

(statearr_19611_19641[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19591 === (2))){
var state_19590__$1 = state_19590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19590__$1,(4),in$);
} else {
if((state_val_19591 === (23))){
var inst_19584 = (state_19590[(2)]);
var state_19590__$1 = state_19590;
var statearr_19612_19642 = state_19590__$1;
(statearr_19612_19642[(2)] = inst_19584);

(statearr_19612_19642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19591 === (19))){
var inst_19571 = (state_19590[(2)]);
var state_19590__$1 = state_19590;
var statearr_19613_19643 = state_19590__$1;
(statearr_19613_19643[(2)] = inst_19571);

(statearr_19613_19643[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19591 === (11))){
var inst_19556 = (state_19590[(7)]);
var inst_19542 = (state_19590[(9)]);
var inst_19556__$1 = cljs.core.seq.call(null,inst_19542);
var state_19590__$1 = (function (){var statearr_19614 = state_19590;
(statearr_19614[(7)] = inst_19556__$1);

return statearr_19614;
})();
if(inst_19556__$1){
var statearr_19615_19644 = state_19590__$1;
(statearr_19615_19644[(1)] = (14));

} else {
var statearr_19616_19645 = state_19590__$1;
(statearr_19616_19645[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19591 === (9))){
var inst_19578 = (state_19590[(2)]);
var inst_19579 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19590__$1 = (function (){var statearr_19617 = state_19590;
(statearr_19617[(15)] = inst_19578);

return statearr_19617;
})();
if(cljs.core.truth_(inst_19579)){
var statearr_19618_19646 = state_19590__$1;
(statearr_19618_19646[(1)] = (21));

} else {
var statearr_19619_19647 = state_19590__$1;
(statearr_19619_19647[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19591 === (5))){
var inst_19534 = cljs.core.async.close_BANG_.call(null,out);
var state_19590__$1 = state_19590;
var statearr_19620_19648 = state_19590__$1;
(statearr_19620_19648[(2)] = inst_19534);

(statearr_19620_19648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19591 === (14))){
var inst_19556 = (state_19590[(7)]);
var inst_19558 = cljs.core.chunked_seq_QMARK_.call(null,inst_19556);
var state_19590__$1 = state_19590;
if(inst_19558){
var statearr_19621_19649 = state_19590__$1;
(statearr_19621_19649[(1)] = (17));

} else {
var statearr_19622_19650 = state_19590__$1;
(statearr_19622_19650[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19591 === (16))){
var inst_19574 = (state_19590[(2)]);
var state_19590__$1 = state_19590;
var statearr_19623_19651 = state_19590__$1;
(statearr_19623_19651[(2)] = inst_19574);

(statearr_19623_19651[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19591 === (10))){
var inst_19543 = (state_19590[(11)]);
var inst_19545 = (state_19590[(12)]);
var inst_19550 = cljs.core._nth.call(null,inst_19543,inst_19545);
var state_19590__$1 = state_19590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19590__$1,(13),out,inst_19550);
} else {
if((state_val_19591 === (18))){
var inst_19556 = (state_19590[(7)]);
var inst_19565 = cljs.core.first.call(null,inst_19556);
var state_19590__$1 = state_19590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19590__$1,(20),out,inst_19565);
} else {
if((state_val_19591 === (8))){
var inst_19544 = (state_19590[(10)]);
var inst_19545 = (state_19590[(12)]);
var inst_19547 = (inst_19545 < inst_19544);
var inst_19548 = inst_19547;
var state_19590__$1 = state_19590;
if(cljs.core.truth_(inst_19548)){
var statearr_19624_19652 = state_19590__$1;
(statearr_19624_19652[(1)] = (10));

} else {
var statearr_19625_19653 = state_19590__$1;
(statearr_19625_19653[(1)] = (11));

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
});})(c__16110__auto__))
;
return ((function (switch__15943__auto__,c__16110__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15944__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15944__auto____0 = (function (){
var statearr_19626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19626[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15944__auto__);

(statearr_19626[(1)] = (1));

return statearr_19626;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15944__auto____1 = (function (state_19590){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_19590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e19627){if((e19627 instanceof Object)){
var ex__15947__auto__ = e19627;
var statearr_19628_19654 = state_19590;
(statearr_19628_19654[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19655 = state_19590;
state_19590 = G__19655;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15944__auto__ = function(state_19590){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15944__auto____1.call(this,state_19590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15944__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15944__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16110__auto__))
})();
var state__16112__auto__ = (function (){var statearr_19629 = f__16111__auto__.call(null);
(statearr_19629[(6)] = c__16110__auto__);

return statearr_19629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16112__auto__);
});})(c__16110__auto__))
);

return c__16110__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19657 = arguments.length;
switch (G__19657) {
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
var G__19660 = arguments.length;
switch (G__19660) {
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
var G__19663 = arguments.length;
switch (G__19663) {
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
var c__16110__auto___19710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16110__auto___19710,out){
return (function (){
var f__16111__auto__ = (function (){var switch__15943__auto__ = ((function (c__16110__auto___19710,out){
return (function (state_19687){
var state_val_19688 = (state_19687[(1)]);
if((state_val_19688 === (7))){
var inst_19682 = (state_19687[(2)]);
var state_19687__$1 = state_19687;
var statearr_19689_19711 = state_19687__$1;
(statearr_19689_19711[(2)] = inst_19682);

(statearr_19689_19711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19688 === (1))){
var inst_19664 = null;
var state_19687__$1 = (function (){var statearr_19690 = state_19687;
(statearr_19690[(7)] = inst_19664);

return statearr_19690;
})();
var statearr_19691_19712 = state_19687__$1;
(statearr_19691_19712[(2)] = null);

(statearr_19691_19712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19688 === (4))){
var inst_19667 = (state_19687[(8)]);
var inst_19667__$1 = (state_19687[(2)]);
var inst_19668 = (inst_19667__$1 == null);
var inst_19669 = cljs.core.not.call(null,inst_19668);
var state_19687__$1 = (function (){var statearr_19692 = state_19687;
(statearr_19692[(8)] = inst_19667__$1);

return statearr_19692;
})();
if(inst_19669){
var statearr_19693_19713 = state_19687__$1;
(statearr_19693_19713[(1)] = (5));

} else {
var statearr_19694_19714 = state_19687__$1;
(statearr_19694_19714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19688 === (6))){
var state_19687__$1 = state_19687;
var statearr_19695_19715 = state_19687__$1;
(statearr_19695_19715[(2)] = null);

(statearr_19695_19715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19688 === (3))){
var inst_19684 = (state_19687[(2)]);
var inst_19685 = cljs.core.async.close_BANG_.call(null,out);
var state_19687__$1 = (function (){var statearr_19696 = state_19687;
(statearr_19696[(9)] = inst_19684);

return statearr_19696;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19687__$1,inst_19685);
} else {
if((state_val_19688 === (2))){
var state_19687__$1 = state_19687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19687__$1,(4),ch);
} else {
if((state_val_19688 === (11))){
var inst_19667 = (state_19687[(8)]);
var inst_19676 = (state_19687[(2)]);
var inst_19664 = inst_19667;
var state_19687__$1 = (function (){var statearr_19697 = state_19687;
(statearr_19697[(7)] = inst_19664);

(statearr_19697[(10)] = inst_19676);

return statearr_19697;
})();
var statearr_19698_19716 = state_19687__$1;
(statearr_19698_19716[(2)] = null);

(statearr_19698_19716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19688 === (9))){
var inst_19667 = (state_19687[(8)]);
var state_19687__$1 = state_19687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19687__$1,(11),out,inst_19667);
} else {
if((state_val_19688 === (5))){
var inst_19667 = (state_19687[(8)]);
var inst_19664 = (state_19687[(7)]);
var inst_19671 = cljs.core._EQ_.call(null,inst_19667,inst_19664);
var state_19687__$1 = state_19687;
if(inst_19671){
var statearr_19700_19717 = state_19687__$1;
(statearr_19700_19717[(1)] = (8));

} else {
var statearr_19701_19718 = state_19687__$1;
(statearr_19701_19718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19688 === (10))){
var inst_19679 = (state_19687[(2)]);
var state_19687__$1 = state_19687;
var statearr_19702_19719 = state_19687__$1;
(statearr_19702_19719[(2)] = inst_19679);

(statearr_19702_19719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19688 === (8))){
var inst_19664 = (state_19687[(7)]);
var tmp19699 = inst_19664;
var inst_19664__$1 = tmp19699;
var state_19687__$1 = (function (){var statearr_19703 = state_19687;
(statearr_19703[(7)] = inst_19664__$1);

return statearr_19703;
})();
var statearr_19704_19720 = state_19687__$1;
(statearr_19704_19720[(2)] = null);

(statearr_19704_19720[(1)] = (2));


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
});})(c__16110__auto___19710,out))
;
return ((function (switch__15943__auto__,c__16110__auto___19710,out){
return (function() {
var cljs$core$async$state_machine__15944__auto__ = null;
var cljs$core$async$state_machine__15944__auto____0 = (function (){
var statearr_19705 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19705[(0)] = cljs$core$async$state_machine__15944__auto__);

(statearr_19705[(1)] = (1));

return statearr_19705;
});
var cljs$core$async$state_machine__15944__auto____1 = (function (state_19687){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_19687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e19706){if((e19706 instanceof Object)){
var ex__15947__auto__ = e19706;
var statearr_19707_19721 = state_19687;
(statearr_19707_19721[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19722 = state_19687;
state_19687 = G__19722;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$state_machine__15944__auto__ = function(state_19687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15944__auto____1.call(this,state_19687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15944__auto____0;
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15944__auto____1;
return cljs$core$async$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16110__auto___19710,out))
})();
var state__16112__auto__ = (function (){var statearr_19708 = f__16111__auto__.call(null);
(statearr_19708[(6)] = c__16110__auto___19710);

return statearr_19708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16112__auto__);
});})(c__16110__auto___19710,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19724 = arguments.length;
switch (G__19724) {
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
var c__16110__auto___19790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16110__auto___19790,out){
return (function (){
var f__16111__auto__ = (function (){var switch__15943__auto__ = ((function (c__16110__auto___19790,out){
return (function (state_19762){
var state_val_19763 = (state_19762[(1)]);
if((state_val_19763 === (7))){
var inst_19758 = (state_19762[(2)]);
var state_19762__$1 = state_19762;
var statearr_19764_19791 = state_19762__$1;
(statearr_19764_19791[(2)] = inst_19758);

(statearr_19764_19791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19763 === (1))){
var inst_19725 = (new Array(n));
var inst_19726 = inst_19725;
var inst_19727 = (0);
var state_19762__$1 = (function (){var statearr_19765 = state_19762;
(statearr_19765[(7)] = inst_19727);

(statearr_19765[(8)] = inst_19726);

return statearr_19765;
})();
var statearr_19766_19792 = state_19762__$1;
(statearr_19766_19792[(2)] = null);

(statearr_19766_19792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19763 === (4))){
var inst_19730 = (state_19762[(9)]);
var inst_19730__$1 = (state_19762[(2)]);
var inst_19731 = (inst_19730__$1 == null);
var inst_19732 = cljs.core.not.call(null,inst_19731);
var state_19762__$1 = (function (){var statearr_19767 = state_19762;
(statearr_19767[(9)] = inst_19730__$1);

return statearr_19767;
})();
if(inst_19732){
var statearr_19768_19793 = state_19762__$1;
(statearr_19768_19793[(1)] = (5));

} else {
var statearr_19769_19794 = state_19762__$1;
(statearr_19769_19794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19763 === (15))){
var inst_19752 = (state_19762[(2)]);
var state_19762__$1 = state_19762;
var statearr_19770_19795 = state_19762__$1;
(statearr_19770_19795[(2)] = inst_19752);

(statearr_19770_19795[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19763 === (13))){
var state_19762__$1 = state_19762;
var statearr_19771_19796 = state_19762__$1;
(statearr_19771_19796[(2)] = null);

(statearr_19771_19796[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19763 === (6))){
var inst_19727 = (state_19762[(7)]);
var inst_19748 = (inst_19727 > (0));
var state_19762__$1 = state_19762;
if(cljs.core.truth_(inst_19748)){
var statearr_19772_19797 = state_19762__$1;
(statearr_19772_19797[(1)] = (12));

} else {
var statearr_19773_19798 = state_19762__$1;
(statearr_19773_19798[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19763 === (3))){
var inst_19760 = (state_19762[(2)]);
var state_19762__$1 = state_19762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19762__$1,inst_19760);
} else {
if((state_val_19763 === (12))){
var inst_19726 = (state_19762[(8)]);
var inst_19750 = cljs.core.vec.call(null,inst_19726);
var state_19762__$1 = state_19762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19762__$1,(15),out,inst_19750);
} else {
if((state_val_19763 === (2))){
var state_19762__$1 = state_19762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19762__$1,(4),ch);
} else {
if((state_val_19763 === (11))){
var inst_19742 = (state_19762[(2)]);
var inst_19743 = (new Array(n));
var inst_19726 = inst_19743;
var inst_19727 = (0);
var state_19762__$1 = (function (){var statearr_19774 = state_19762;
(statearr_19774[(7)] = inst_19727);

(statearr_19774[(8)] = inst_19726);

(statearr_19774[(10)] = inst_19742);

return statearr_19774;
})();
var statearr_19775_19799 = state_19762__$1;
(statearr_19775_19799[(2)] = null);

(statearr_19775_19799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19763 === (9))){
var inst_19726 = (state_19762[(8)]);
var inst_19740 = cljs.core.vec.call(null,inst_19726);
var state_19762__$1 = state_19762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19762__$1,(11),out,inst_19740);
} else {
if((state_val_19763 === (5))){
var inst_19727 = (state_19762[(7)]);
var inst_19730 = (state_19762[(9)]);
var inst_19726 = (state_19762[(8)]);
var inst_19735 = (state_19762[(11)]);
var inst_19734 = (inst_19726[inst_19727] = inst_19730);
var inst_19735__$1 = (inst_19727 + (1));
var inst_19736 = (inst_19735__$1 < n);
var state_19762__$1 = (function (){var statearr_19776 = state_19762;
(statearr_19776[(12)] = inst_19734);

(statearr_19776[(11)] = inst_19735__$1);

return statearr_19776;
})();
if(cljs.core.truth_(inst_19736)){
var statearr_19777_19800 = state_19762__$1;
(statearr_19777_19800[(1)] = (8));

} else {
var statearr_19778_19801 = state_19762__$1;
(statearr_19778_19801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19763 === (14))){
var inst_19755 = (state_19762[(2)]);
var inst_19756 = cljs.core.async.close_BANG_.call(null,out);
var state_19762__$1 = (function (){var statearr_19780 = state_19762;
(statearr_19780[(13)] = inst_19755);

return statearr_19780;
})();
var statearr_19781_19802 = state_19762__$1;
(statearr_19781_19802[(2)] = inst_19756);

(statearr_19781_19802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19763 === (10))){
var inst_19746 = (state_19762[(2)]);
var state_19762__$1 = state_19762;
var statearr_19782_19803 = state_19762__$1;
(statearr_19782_19803[(2)] = inst_19746);

(statearr_19782_19803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19763 === (8))){
var inst_19726 = (state_19762[(8)]);
var inst_19735 = (state_19762[(11)]);
var tmp19779 = inst_19726;
var inst_19726__$1 = tmp19779;
var inst_19727 = inst_19735;
var state_19762__$1 = (function (){var statearr_19783 = state_19762;
(statearr_19783[(7)] = inst_19727);

(statearr_19783[(8)] = inst_19726__$1);

return statearr_19783;
})();
var statearr_19784_19804 = state_19762__$1;
(statearr_19784_19804[(2)] = null);

(statearr_19784_19804[(1)] = (2));


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
});})(c__16110__auto___19790,out))
;
return ((function (switch__15943__auto__,c__16110__auto___19790,out){
return (function() {
var cljs$core$async$state_machine__15944__auto__ = null;
var cljs$core$async$state_machine__15944__auto____0 = (function (){
var statearr_19785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19785[(0)] = cljs$core$async$state_machine__15944__auto__);

(statearr_19785[(1)] = (1));

return statearr_19785;
});
var cljs$core$async$state_machine__15944__auto____1 = (function (state_19762){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_19762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e19786){if((e19786 instanceof Object)){
var ex__15947__auto__ = e19786;
var statearr_19787_19805 = state_19762;
(statearr_19787_19805[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19806 = state_19762;
state_19762 = G__19806;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$state_machine__15944__auto__ = function(state_19762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15944__auto____1.call(this,state_19762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15944__auto____0;
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15944__auto____1;
return cljs$core$async$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16110__auto___19790,out))
})();
var state__16112__auto__ = (function (){var statearr_19788 = f__16111__auto__.call(null);
(statearr_19788[(6)] = c__16110__auto___19790);

return statearr_19788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16112__auto__);
});})(c__16110__auto___19790,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19808 = arguments.length;
switch (G__19808) {
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
var c__16110__auto___19878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16110__auto___19878,out){
return (function (){
var f__16111__auto__ = (function (){var switch__15943__auto__ = ((function (c__16110__auto___19878,out){
return (function (state_19850){
var state_val_19851 = (state_19850[(1)]);
if((state_val_19851 === (7))){
var inst_19846 = (state_19850[(2)]);
var state_19850__$1 = state_19850;
var statearr_19852_19879 = state_19850__$1;
(statearr_19852_19879[(2)] = inst_19846);

(statearr_19852_19879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (1))){
var inst_19809 = [];
var inst_19810 = inst_19809;
var inst_19811 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19850__$1 = (function (){var statearr_19853 = state_19850;
(statearr_19853[(7)] = inst_19810);

(statearr_19853[(8)] = inst_19811);

return statearr_19853;
})();
var statearr_19854_19880 = state_19850__$1;
(statearr_19854_19880[(2)] = null);

(statearr_19854_19880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (4))){
var inst_19814 = (state_19850[(9)]);
var inst_19814__$1 = (state_19850[(2)]);
var inst_19815 = (inst_19814__$1 == null);
var inst_19816 = cljs.core.not.call(null,inst_19815);
var state_19850__$1 = (function (){var statearr_19855 = state_19850;
(statearr_19855[(9)] = inst_19814__$1);

return statearr_19855;
})();
if(inst_19816){
var statearr_19856_19881 = state_19850__$1;
(statearr_19856_19881[(1)] = (5));

} else {
var statearr_19857_19882 = state_19850__$1;
(statearr_19857_19882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (15))){
var inst_19840 = (state_19850[(2)]);
var state_19850__$1 = state_19850;
var statearr_19858_19883 = state_19850__$1;
(statearr_19858_19883[(2)] = inst_19840);

(statearr_19858_19883[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (13))){
var state_19850__$1 = state_19850;
var statearr_19859_19884 = state_19850__$1;
(statearr_19859_19884[(2)] = null);

(statearr_19859_19884[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (6))){
var inst_19810 = (state_19850[(7)]);
var inst_19835 = inst_19810.length;
var inst_19836 = (inst_19835 > (0));
var state_19850__$1 = state_19850;
if(cljs.core.truth_(inst_19836)){
var statearr_19860_19885 = state_19850__$1;
(statearr_19860_19885[(1)] = (12));

} else {
var statearr_19861_19886 = state_19850__$1;
(statearr_19861_19886[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (3))){
var inst_19848 = (state_19850[(2)]);
var state_19850__$1 = state_19850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19850__$1,inst_19848);
} else {
if((state_val_19851 === (12))){
var inst_19810 = (state_19850[(7)]);
var inst_19838 = cljs.core.vec.call(null,inst_19810);
var state_19850__$1 = state_19850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19850__$1,(15),out,inst_19838);
} else {
if((state_val_19851 === (2))){
var state_19850__$1 = state_19850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19850__$1,(4),ch);
} else {
if((state_val_19851 === (11))){
var inst_19818 = (state_19850[(10)]);
var inst_19814 = (state_19850[(9)]);
var inst_19828 = (state_19850[(2)]);
var inst_19829 = [];
var inst_19830 = inst_19829.push(inst_19814);
var inst_19810 = inst_19829;
var inst_19811 = inst_19818;
var state_19850__$1 = (function (){var statearr_19862 = state_19850;
(statearr_19862[(11)] = inst_19828);

(statearr_19862[(7)] = inst_19810);

(statearr_19862[(8)] = inst_19811);

(statearr_19862[(12)] = inst_19830);

return statearr_19862;
})();
var statearr_19863_19887 = state_19850__$1;
(statearr_19863_19887[(2)] = null);

(statearr_19863_19887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (9))){
var inst_19810 = (state_19850[(7)]);
var inst_19826 = cljs.core.vec.call(null,inst_19810);
var state_19850__$1 = state_19850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19850__$1,(11),out,inst_19826);
} else {
if((state_val_19851 === (5))){
var inst_19818 = (state_19850[(10)]);
var inst_19814 = (state_19850[(9)]);
var inst_19811 = (state_19850[(8)]);
var inst_19818__$1 = f.call(null,inst_19814);
var inst_19819 = cljs.core._EQ_.call(null,inst_19818__$1,inst_19811);
var inst_19820 = cljs.core.keyword_identical_QMARK_.call(null,inst_19811,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19821 = ((inst_19819) || (inst_19820));
var state_19850__$1 = (function (){var statearr_19864 = state_19850;
(statearr_19864[(10)] = inst_19818__$1);

return statearr_19864;
})();
if(cljs.core.truth_(inst_19821)){
var statearr_19865_19888 = state_19850__$1;
(statearr_19865_19888[(1)] = (8));

} else {
var statearr_19866_19889 = state_19850__$1;
(statearr_19866_19889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (14))){
var inst_19843 = (state_19850[(2)]);
var inst_19844 = cljs.core.async.close_BANG_.call(null,out);
var state_19850__$1 = (function (){var statearr_19868 = state_19850;
(statearr_19868[(13)] = inst_19843);

return statearr_19868;
})();
var statearr_19869_19890 = state_19850__$1;
(statearr_19869_19890[(2)] = inst_19844);

(statearr_19869_19890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (10))){
var inst_19833 = (state_19850[(2)]);
var state_19850__$1 = state_19850;
var statearr_19870_19891 = state_19850__$1;
(statearr_19870_19891[(2)] = inst_19833);

(statearr_19870_19891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (8))){
var inst_19818 = (state_19850[(10)]);
var inst_19810 = (state_19850[(7)]);
var inst_19814 = (state_19850[(9)]);
var inst_19823 = inst_19810.push(inst_19814);
var tmp19867 = inst_19810;
var inst_19810__$1 = tmp19867;
var inst_19811 = inst_19818;
var state_19850__$1 = (function (){var statearr_19871 = state_19850;
(statearr_19871[(7)] = inst_19810__$1);

(statearr_19871[(14)] = inst_19823);

(statearr_19871[(8)] = inst_19811);

return statearr_19871;
})();
var statearr_19872_19892 = state_19850__$1;
(statearr_19872_19892[(2)] = null);

(statearr_19872_19892[(1)] = (2));


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
});})(c__16110__auto___19878,out))
;
return ((function (switch__15943__auto__,c__16110__auto___19878,out){
return (function() {
var cljs$core$async$state_machine__15944__auto__ = null;
var cljs$core$async$state_machine__15944__auto____0 = (function (){
var statearr_19873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19873[(0)] = cljs$core$async$state_machine__15944__auto__);

(statearr_19873[(1)] = (1));

return statearr_19873;
});
var cljs$core$async$state_machine__15944__auto____1 = (function (state_19850){
while(true){
var ret_value__15945__auto__ = (function (){try{while(true){
var result__15946__auto__ = switch__15943__auto__.call(null,state_19850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15946__auto__;
}
break;
}
}catch (e19874){if((e19874 instanceof Object)){
var ex__15947__auto__ = e19874;
var statearr_19875_19893 = state_19850;
(statearr_19875_19893[(5)] = ex__15947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19894 = state_19850;
state_19850 = G__19894;
continue;
} else {
return ret_value__15945__auto__;
}
break;
}
});
cljs$core$async$state_machine__15944__auto__ = function(state_19850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15944__auto____1.call(this,state_19850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15944__auto____0;
cljs$core$async$state_machine__15944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15944__auto____1;
return cljs$core$async$state_machine__15944__auto__;
})()
;})(switch__15943__auto__,c__16110__auto___19878,out))
})();
var state__16112__auto__ = (function (){var statearr_19876 = f__16111__auto__.call(null);
(statearr_19876[(6)] = c__16110__auto___19878);

return statearr_19876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16112__auto__);
});})(c__16110__auto___19878,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
