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
var G__10031 = arguments.length;
switch (G__10031) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10032 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10032 = (function (f,blockable,meta10033){
this.f = f;
this.blockable = blockable;
this.meta10033 = meta10033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10034,meta10033__$1){
var self__ = this;
var _10034__$1 = this;
return (new cljs.core.async.t_cljs$core$async10032(self__.f,self__.blockable,meta10033__$1));
});

cljs.core.async.t_cljs$core$async10032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10034){
var self__ = this;
var _10034__$1 = this;
return self__.meta10033;
});

cljs.core.async.t_cljs$core$async10032.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10032.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10032.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async10032.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async10032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10033","meta10033",1845299874,null)], null);
});

cljs.core.async.t_cljs$core$async10032.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10032.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10032";

cljs.core.async.t_cljs$core$async10032.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async10032");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10032.
 */
cljs.core.async.__GT_t_cljs$core$async10032 = (function cljs$core$async$__GT_t_cljs$core$async10032(f__$1,blockable__$1,meta10033){
return (new cljs.core.async.t_cljs$core$async10032(f__$1,blockable__$1,meta10033));
});

}

return (new cljs.core.async.t_cljs$core$async10032(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__10038 = arguments.length;
switch (G__10038) {
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
var G__10041 = arguments.length;
switch (G__10041) {
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
var G__10044 = arguments.length;
switch (G__10044) {
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
var val_10046 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_10046);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_10046,ret){
return (function (){
return fn1.call(null,val_10046);
});})(val_10046,ret))
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
var G__10048 = arguments.length;
switch (G__10048) {
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
var n__4518__auto___10050 = n;
var x_10051 = (0);
while(true){
if((x_10051 < n__4518__auto___10050)){
(a[x_10051] = (0));

var G__10052 = (x_10051 + (1));
x_10051 = G__10052;
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

var G__10053 = (i + (1));
i = G__10053;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10054 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10054 = (function (flag,meta10055){
this.flag = flag;
this.meta10055 = meta10055;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10056,meta10055__$1){
var self__ = this;
var _10056__$1 = this;
return (new cljs.core.async.t_cljs$core$async10054(self__.flag,meta10055__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async10054.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10056){
var self__ = this;
var _10056__$1 = this;
return self__.meta10055;
});})(flag))
;

cljs.core.async.t_cljs$core$async10054.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10054.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async10054.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10054.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10054.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10055","meta10055",2136380611,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async10054.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10054.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10054";

cljs.core.async.t_cljs$core$async10054.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async10054");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10054.
 */
cljs.core.async.__GT_t_cljs$core$async10054 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10054(flag__$1,meta10055){
return (new cljs.core.async.t_cljs$core$async10054(flag__$1,meta10055));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async10054(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10057 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10057 = (function (flag,cb,meta10058){
this.flag = flag;
this.cb = cb;
this.meta10058 = meta10058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10059,meta10058__$1){
var self__ = this;
var _10059__$1 = this;
return (new cljs.core.async.t_cljs$core$async10057(self__.flag,self__.cb,meta10058__$1));
});

cljs.core.async.t_cljs$core$async10057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10059){
var self__ = this;
var _10059__$1 = this;
return self__.meta10058;
});

cljs.core.async.t_cljs$core$async10057.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10057.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async10057.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10057.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async10057.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10058","meta10058",-1909463964,null)], null);
});

cljs.core.async.t_cljs$core$async10057.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10057.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10057";

cljs.core.async.t_cljs$core$async10057.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async10057");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10057.
 */
cljs.core.async.__GT_t_cljs$core$async10057 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10057(flag__$1,cb__$1,meta10058){
return (new cljs.core.async.t_cljs$core$async10057(flag__$1,cb__$1,meta10058));
});

}

return (new cljs.core.async.t_cljs$core$async10057(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__10060_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10060_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10061_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10061_SHARP_,port], null));
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
var G__10062 = (i + (1));
i = G__10062;
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
var len__4641__auto___10068 = arguments.length;
var i__4642__auto___10069 = (0);
while(true){
if((i__4642__auto___10069 < len__4641__auto___10068)){
args__4647__auto__.push((arguments[i__4642__auto___10069]));

var G__10070 = (i__4642__auto___10069 + (1));
i__4642__auto___10069 = G__10070;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10065){
var map__10066 = p__10065;
var map__10066__$1 = (((((!((map__10066 == null))))?(((((map__10066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10066):map__10066);
var opts = map__10066__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10063){
var G__10064 = cljs.core.first.call(null,seq10063);
var seq10063__$1 = cljs.core.next.call(null,seq10063);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10064,seq10063__$1);
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
var G__10072 = arguments.length;
switch (G__10072) {
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
var c__3069__auto___10118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3069__auto___10118){
return (function (){
var f__3070__auto__ = (function (){var switch__3046__auto__ = ((function (c__3069__auto___10118){
return (function (state_10096){
var state_val_10097 = (state_10096[(1)]);
if((state_val_10097 === (7))){
var inst_10092 = (state_10096[(2)]);
var state_10096__$1 = state_10096;
var statearr_10098_10119 = state_10096__$1;
(statearr_10098_10119[(2)] = inst_10092);

(statearr_10098_10119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (1))){
var state_10096__$1 = state_10096;
var statearr_10099_10120 = state_10096__$1;
(statearr_10099_10120[(2)] = null);

(statearr_10099_10120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (4))){
var inst_10075 = (state_10096[(7)]);
var inst_10075__$1 = (state_10096[(2)]);
var inst_10076 = (inst_10075__$1 == null);
var state_10096__$1 = (function (){var statearr_10100 = state_10096;
(statearr_10100[(7)] = inst_10075__$1);

return statearr_10100;
})();
if(cljs.core.truth_(inst_10076)){
var statearr_10101_10121 = state_10096__$1;
(statearr_10101_10121[(1)] = (5));

} else {
var statearr_10102_10122 = state_10096__$1;
(statearr_10102_10122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (13))){
var state_10096__$1 = state_10096;
var statearr_10103_10123 = state_10096__$1;
(statearr_10103_10123[(2)] = null);

(statearr_10103_10123[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (6))){
var inst_10075 = (state_10096[(7)]);
var state_10096__$1 = state_10096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10096__$1,(11),to,inst_10075);
} else {
if((state_val_10097 === (3))){
var inst_10094 = (state_10096[(2)]);
var state_10096__$1 = state_10096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10096__$1,inst_10094);
} else {
if((state_val_10097 === (12))){
var state_10096__$1 = state_10096;
var statearr_10104_10124 = state_10096__$1;
(statearr_10104_10124[(2)] = null);

(statearr_10104_10124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (2))){
var state_10096__$1 = state_10096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10096__$1,(4),from);
} else {
if((state_val_10097 === (11))){
var inst_10085 = (state_10096[(2)]);
var state_10096__$1 = state_10096;
if(cljs.core.truth_(inst_10085)){
var statearr_10105_10125 = state_10096__$1;
(statearr_10105_10125[(1)] = (12));

} else {
var statearr_10106_10126 = state_10096__$1;
(statearr_10106_10126[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (9))){
var state_10096__$1 = state_10096;
var statearr_10107_10127 = state_10096__$1;
(statearr_10107_10127[(2)] = null);

(statearr_10107_10127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (5))){
var state_10096__$1 = state_10096;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10108_10128 = state_10096__$1;
(statearr_10108_10128[(1)] = (8));

} else {
var statearr_10109_10129 = state_10096__$1;
(statearr_10109_10129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (14))){
var inst_10090 = (state_10096[(2)]);
var state_10096__$1 = state_10096;
var statearr_10110_10130 = state_10096__$1;
(statearr_10110_10130[(2)] = inst_10090);

(statearr_10110_10130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (10))){
var inst_10082 = (state_10096[(2)]);
var state_10096__$1 = state_10096;
var statearr_10111_10131 = state_10096__$1;
(statearr_10111_10131[(2)] = inst_10082);

(statearr_10111_10131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10097 === (8))){
var inst_10079 = cljs.core.async.close_BANG_.call(null,to);
var state_10096__$1 = state_10096;
var statearr_10112_10132 = state_10096__$1;
(statearr_10112_10132[(2)] = inst_10079);

(statearr_10112_10132[(1)] = (10));


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
});})(c__3069__auto___10118))
;
return ((function (switch__3046__auto__,c__3069__auto___10118){
return (function() {
var cljs$core$async$state_machine__3047__auto__ = null;
var cljs$core$async$state_machine__3047__auto____0 = (function (){
var statearr_10113 = [null,null,null,null,null,null,null,null];
(statearr_10113[(0)] = cljs$core$async$state_machine__3047__auto__);

(statearr_10113[(1)] = (1));

return statearr_10113;
});
var cljs$core$async$state_machine__3047__auto____1 = (function (state_10096){
while(true){
var ret_value__3048__auto__ = (function (){try{while(true){
var result__3049__auto__ = switch__3046__auto__.call(null,state_10096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3049__auto__;
}
break;
}
}catch (e10114){if((e10114 instanceof Object)){
var ex__3050__auto__ = e10114;
var statearr_10115_10133 = state_10096;
(statearr_10115_10133[(5)] = ex__3050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10134 = state_10096;
state_10096 = G__10134;
continue;
} else {
return ret_value__3048__auto__;
}
break;
}
});
cljs$core$async$state_machine__3047__auto__ = function(state_10096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3047__auto____1.call(this,state_10096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3047__auto____0;
cljs$core$async$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3047__auto____1;
return cljs$core$async$state_machine__3047__auto__;
})()
;})(switch__3046__auto__,c__3069__auto___10118))
})();
var state__3071__auto__ = (function (){var statearr_10116 = f__3070__auto__.call(null);
(statearr_10116[(6)] = c__3069__auto___10118);

return statearr_10116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3071__auto__);
});})(c__3069__auto___10118))
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
return (function (p__10135){
var vec__10136 = p__10135;
var v = cljs.core.nth.call(null,vec__10136,(0),null);
var p = cljs.core.nth.call(null,vec__10136,(1),null);
var job = vec__10136;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__3069__auto___10307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3069__auto___10307,res,vec__10136,v,p,job,jobs,results){
return (function (){
var f__3070__auto__ = (function (){var switch__3046__auto__ = ((function (c__3069__auto___10307,res,vec__10136,v,p,job,jobs,results){
return (function (state_10143){
var state_val_10144 = (state_10143[(1)]);
if((state_val_10144 === (1))){
var state_10143__$1 = state_10143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10143__$1,(2),res,v);
} else {
if((state_val_10144 === (2))){
var inst_10140 = (state_10143[(2)]);
var inst_10141 = cljs.core.async.close_BANG_.call(null,res);
var state_10143__$1 = (function (){var statearr_10145 = state_10143;
(statearr_10145[(7)] = inst_10140);

return statearr_10145;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10143__$1,inst_10141);
} else {
return null;
}
}
});})(c__3069__auto___10307,res,vec__10136,v,p,job,jobs,results))
;
return ((function (switch__3046__auto__,c__3069__auto___10307,res,vec__10136,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____0 = (function (){
var statearr_10146 = [null,null,null,null,null,null,null,null];
(statearr_10146[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__);

(statearr_10146[(1)] = (1));

return statearr_10146;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____1 = (function (state_10143){
while(true){
var ret_value__3048__auto__ = (function (){try{while(true){
var result__3049__auto__ = switch__3046__auto__.call(null,state_10143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3049__auto__;
}
break;
}
}catch (e10147){if((e10147 instanceof Object)){
var ex__3050__auto__ = e10147;
var statearr_10148_10308 = state_10143;
(statearr_10148_10308[(5)] = ex__3050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10309 = state_10143;
state_10143 = G__10309;
continue;
} else {
return ret_value__3048__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__ = function(state_10143){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____1.call(this,state_10143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__;
})()
;})(switch__3046__auto__,c__3069__auto___10307,res,vec__10136,v,p,job,jobs,results))
})();
var state__3071__auto__ = (function (){var statearr_10149 = f__3070__auto__.call(null);
(statearr_10149[(6)] = c__3069__auto___10307);

return statearr_10149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3071__auto__);
});})(c__3069__auto___10307,res,vec__10136,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__10150){
var vec__10151 = p__10150;
var v = cljs.core.nth.call(null,vec__10151,(0),null);
var p = cljs.core.nth.call(null,vec__10151,(1),null);
var job = vec__10151;
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
var n__4518__auto___10310 = n;
var __10311 = (0);
while(true){
if((__10311 < n__4518__auto___10310)){
var G__10154_10312 = type;
var G__10154_10313__$1 = (((G__10154_10312 instanceof cljs.core.Keyword))?G__10154_10312.fqn:null);
switch (G__10154_10313__$1) {
case "compute":
var c__3069__auto___10315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10311,c__3069__auto___10315,G__10154_10312,G__10154_10313__$1,n__4518__auto___10310,jobs,results,process,async){
return (function (){
var f__3070__auto__ = (function (){var switch__3046__auto__ = ((function (__10311,c__3069__auto___10315,G__10154_10312,G__10154_10313__$1,n__4518__auto___10310,jobs,results,process,async){
return (function (state_10167){
var state_val_10168 = (state_10167[(1)]);
if((state_val_10168 === (1))){
var state_10167__$1 = state_10167;
var statearr_10169_10316 = state_10167__$1;
(statearr_10169_10316[(2)] = null);

(statearr_10169_10316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10168 === (2))){
var state_10167__$1 = state_10167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10167__$1,(4),jobs);
} else {
if((state_val_10168 === (3))){
var inst_10165 = (state_10167[(2)]);
var state_10167__$1 = state_10167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10167__$1,inst_10165);
} else {
if((state_val_10168 === (4))){
var inst_10157 = (state_10167[(2)]);
var inst_10158 = process.call(null,inst_10157);
var state_10167__$1 = state_10167;
if(cljs.core.truth_(inst_10158)){
var statearr_10170_10317 = state_10167__$1;
(statearr_10170_10317[(1)] = (5));

} else {
var statearr_10171_10318 = state_10167__$1;
(statearr_10171_10318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10168 === (5))){
var state_10167__$1 = state_10167;
var statearr_10172_10319 = state_10167__$1;
(statearr_10172_10319[(2)] = null);

(statearr_10172_10319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10168 === (6))){
var state_10167__$1 = state_10167;
var statearr_10173_10320 = state_10167__$1;
(statearr_10173_10320[(2)] = null);

(statearr_10173_10320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10168 === (7))){
var inst_10163 = (state_10167[(2)]);
var state_10167__$1 = state_10167;
var statearr_10174_10321 = state_10167__$1;
(statearr_10174_10321[(2)] = inst_10163);

(statearr_10174_10321[(1)] = (3));


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
});})(__10311,c__3069__auto___10315,G__10154_10312,G__10154_10313__$1,n__4518__auto___10310,jobs,results,process,async))
;
return ((function (__10311,switch__3046__auto__,c__3069__auto___10315,G__10154_10312,G__10154_10313__$1,n__4518__auto___10310,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____0 = (function (){
var statearr_10175 = [null,null,null,null,null,null,null];
(statearr_10175[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__);

(statearr_10175[(1)] = (1));

return statearr_10175;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____1 = (function (state_10167){
while(true){
var ret_value__3048__auto__ = (function (){try{while(true){
var result__3049__auto__ = switch__3046__auto__.call(null,state_10167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3049__auto__;
}
break;
}
}catch (e10176){if((e10176 instanceof Object)){
var ex__3050__auto__ = e10176;
var statearr_10177_10322 = state_10167;
(statearr_10177_10322[(5)] = ex__3050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10323 = state_10167;
state_10167 = G__10323;
continue;
} else {
return ret_value__3048__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__ = function(state_10167){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____1.call(this,state_10167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__;
})()
;})(__10311,switch__3046__auto__,c__3069__auto___10315,G__10154_10312,G__10154_10313__$1,n__4518__auto___10310,jobs,results,process,async))
})();
var state__3071__auto__ = (function (){var statearr_10178 = f__3070__auto__.call(null);
(statearr_10178[(6)] = c__3069__auto___10315);

return statearr_10178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3071__auto__);
});})(__10311,c__3069__auto___10315,G__10154_10312,G__10154_10313__$1,n__4518__auto___10310,jobs,results,process,async))
);


break;
case "async":
var c__3069__auto___10324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10311,c__3069__auto___10324,G__10154_10312,G__10154_10313__$1,n__4518__auto___10310,jobs,results,process,async){
return (function (){
var f__3070__auto__ = (function (){var switch__3046__auto__ = ((function (__10311,c__3069__auto___10324,G__10154_10312,G__10154_10313__$1,n__4518__auto___10310,jobs,results,process,async){
return (function (state_10191){
var state_val_10192 = (state_10191[(1)]);
if((state_val_10192 === (1))){
var state_10191__$1 = state_10191;
var statearr_10193_10325 = state_10191__$1;
(statearr_10193_10325[(2)] = null);

(statearr_10193_10325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10192 === (2))){
var state_10191__$1 = state_10191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10191__$1,(4),jobs);
} else {
if((state_val_10192 === (3))){
var inst_10189 = (state_10191[(2)]);
var state_10191__$1 = state_10191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10191__$1,inst_10189);
} else {
if((state_val_10192 === (4))){
var inst_10181 = (state_10191[(2)]);
var inst_10182 = async.call(null,inst_10181);
var state_10191__$1 = state_10191;
if(cljs.core.truth_(inst_10182)){
var statearr_10194_10326 = state_10191__$1;
(statearr_10194_10326[(1)] = (5));

} else {
var statearr_10195_10327 = state_10191__$1;
(statearr_10195_10327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10192 === (5))){
var state_10191__$1 = state_10191;
var statearr_10196_10328 = state_10191__$1;
(statearr_10196_10328[(2)] = null);

(statearr_10196_10328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10192 === (6))){
var state_10191__$1 = state_10191;
var statearr_10197_10329 = state_10191__$1;
(statearr_10197_10329[(2)] = null);

(statearr_10197_10329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10192 === (7))){
var inst_10187 = (state_10191[(2)]);
var state_10191__$1 = state_10191;
var statearr_10198_10330 = state_10191__$1;
(statearr_10198_10330[(2)] = inst_10187);

(statearr_10198_10330[(1)] = (3));


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
});})(__10311,c__3069__auto___10324,G__10154_10312,G__10154_10313__$1,n__4518__auto___10310,jobs,results,process,async))
;
return ((function (__10311,switch__3046__auto__,c__3069__auto___10324,G__10154_10312,G__10154_10313__$1,n__4518__auto___10310,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____0 = (function (){
var statearr_10199 = [null,null,null,null,null,null,null];
(statearr_10199[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__);

(statearr_10199[(1)] = (1));

return statearr_10199;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____1 = (function (state_10191){
while(true){
var ret_value__3048__auto__ = (function (){try{while(true){
var result__3049__auto__ = switch__3046__auto__.call(null,state_10191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3049__auto__;
}
break;
}
}catch (e10200){if((e10200 instanceof Object)){
var ex__3050__auto__ = e10200;
var statearr_10201_10331 = state_10191;
(statearr_10201_10331[(5)] = ex__3050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10332 = state_10191;
state_10191 = G__10332;
continue;
} else {
return ret_value__3048__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__ = function(state_10191){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____1.call(this,state_10191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__;
})()
;})(__10311,switch__3046__auto__,c__3069__auto___10324,G__10154_10312,G__10154_10313__$1,n__4518__auto___10310,jobs,results,process,async))
})();
var state__3071__auto__ = (function (){var statearr_10202 = f__3070__auto__.call(null);
(statearr_10202[(6)] = c__3069__auto___10324);

return statearr_10202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3071__auto__);
});})(__10311,c__3069__auto___10324,G__10154_10312,G__10154_10313__$1,n__4518__auto___10310,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10154_10313__$1)].join('')));

}

var G__10333 = (__10311 + (1));
__10311 = G__10333;
continue;
} else {
}
break;
}

var c__3069__auto___10334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3069__auto___10334,jobs,results,process,async){
return (function (){
var f__3070__auto__ = (function (){var switch__3046__auto__ = ((function (c__3069__auto___10334,jobs,results,process,async){
return (function (state_10224){
var state_val_10225 = (state_10224[(1)]);
if((state_val_10225 === (7))){
var inst_10220 = (state_10224[(2)]);
var state_10224__$1 = state_10224;
var statearr_10226_10335 = state_10224__$1;
(statearr_10226_10335[(2)] = inst_10220);

(statearr_10226_10335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10225 === (1))){
var state_10224__$1 = state_10224;
var statearr_10227_10336 = state_10224__$1;
(statearr_10227_10336[(2)] = null);

(statearr_10227_10336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10225 === (4))){
var inst_10205 = (state_10224[(7)]);
var inst_10205__$1 = (state_10224[(2)]);
var inst_10206 = (inst_10205__$1 == null);
var state_10224__$1 = (function (){var statearr_10228 = state_10224;
(statearr_10228[(7)] = inst_10205__$1);

return statearr_10228;
})();
if(cljs.core.truth_(inst_10206)){
var statearr_10229_10337 = state_10224__$1;
(statearr_10229_10337[(1)] = (5));

} else {
var statearr_10230_10338 = state_10224__$1;
(statearr_10230_10338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10225 === (6))){
var inst_10210 = (state_10224[(8)]);
var inst_10205 = (state_10224[(7)]);
var inst_10210__$1 = cljs.core.async.chan.call(null,(1));
var inst_10211 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10212 = [inst_10205,inst_10210__$1];
var inst_10213 = (new cljs.core.PersistentVector(null,2,(5),inst_10211,inst_10212,null));
var state_10224__$1 = (function (){var statearr_10231 = state_10224;
(statearr_10231[(8)] = inst_10210__$1);

return statearr_10231;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10224__$1,(8),jobs,inst_10213);
} else {
if((state_val_10225 === (3))){
var inst_10222 = (state_10224[(2)]);
var state_10224__$1 = state_10224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10224__$1,inst_10222);
} else {
if((state_val_10225 === (2))){
var state_10224__$1 = state_10224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10224__$1,(4),from);
} else {
if((state_val_10225 === (9))){
var inst_10217 = (state_10224[(2)]);
var state_10224__$1 = (function (){var statearr_10232 = state_10224;
(statearr_10232[(9)] = inst_10217);

return statearr_10232;
})();
var statearr_10233_10339 = state_10224__$1;
(statearr_10233_10339[(2)] = null);

(statearr_10233_10339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10225 === (5))){
var inst_10208 = cljs.core.async.close_BANG_.call(null,jobs);
var state_10224__$1 = state_10224;
var statearr_10234_10340 = state_10224__$1;
(statearr_10234_10340[(2)] = inst_10208);

(statearr_10234_10340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10225 === (8))){
var inst_10210 = (state_10224[(8)]);
var inst_10215 = (state_10224[(2)]);
var state_10224__$1 = (function (){var statearr_10235 = state_10224;
(statearr_10235[(10)] = inst_10215);

return statearr_10235;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10224__$1,(9),results,inst_10210);
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
});})(c__3069__auto___10334,jobs,results,process,async))
;
return ((function (switch__3046__auto__,c__3069__auto___10334,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____0 = (function (){
var statearr_10236 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10236[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__);

(statearr_10236[(1)] = (1));

return statearr_10236;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____1 = (function (state_10224){
while(true){
var ret_value__3048__auto__ = (function (){try{while(true){
var result__3049__auto__ = switch__3046__auto__.call(null,state_10224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3049__auto__;
}
break;
}
}catch (e10237){if((e10237 instanceof Object)){
var ex__3050__auto__ = e10237;
var statearr_10238_10341 = state_10224;
(statearr_10238_10341[(5)] = ex__3050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10342 = state_10224;
state_10224 = G__10342;
continue;
} else {
return ret_value__3048__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__ = function(state_10224){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____1.call(this,state_10224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__;
})()
;})(switch__3046__auto__,c__3069__auto___10334,jobs,results,process,async))
})();
var state__3071__auto__ = (function (){var statearr_10239 = f__3070__auto__.call(null);
(statearr_10239[(6)] = c__3069__auto___10334);

return statearr_10239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3071__auto__);
});})(c__3069__auto___10334,jobs,results,process,async))
);


var c__3069__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3069__auto__,jobs,results,process,async){
return (function (){
var f__3070__auto__ = (function (){var switch__3046__auto__ = ((function (c__3069__auto__,jobs,results,process,async){
return (function (state_10277){
var state_val_10278 = (state_10277[(1)]);
if((state_val_10278 === (7))){
var inst_10273 = (state_10277[(2)]);
var state_10277__$1 = state_10277;
var statearr_10279_10343 = state_10277__$1;
(statearr_10279_10343[(2)] = inst_10273);

(statearr_10279_10343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10278 === (20))){
var state_10277__$1 = state_10277;
var statearr_10280_10344 = state_10277__$1;
(statearr_10280_10344[(2)] = null);

(statearr_10280_10344[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10278 === (1))){
var state_10277__$1 = state_10277;
var statearr_10281_10345 = state_10277__$1;
(statearr_10281_10345[(2)] = null);

(statearr_10281_10345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10278 === (4))){
var inst_10242 = (state_10277[(7)]);
var inst_10242__$1 = (state_10277[(2)]);
var inst_10243 = (inst_10242__$1 == null);
var state_10277__$1 = (function (){var statearr_10282 = state_10277;
(statearr_10282[(7)] = inst_10242__$1);

return statearr_10282;
})();
if(cljs.core.truth_(inst_10243)){
var statearr_10283_10346 = state_10277__$1;
(statearr_10283_10346[(1)] = (5));

} else {
var statearr_10284_10347 = state_10277__$1;
(statearr_10284_10347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10278 === (15))){
var inst_10255 = (state_10277[(8)]);
var state_10277__$1 = state_10277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10277__$1,(18),to,inst_10255);
} else {
if((state_val_10278 === (21))){
var inst_10268 = (state_10277[(2)]);
var state_10277__$1 = state_10277;
var statearr_10285_10348 = state_10277__$1;
(statearr_10285_10348[(2)] = inst_10268);

(statearr_10285_10348[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10278 === (13))){
var inst_10270 = (state_10277[(2)]);
var state_10277__$1 = (function (){var statearr_10286 = state_10277;
(statearr_10286[(9)] = inst_10270);

return statearr_10286;
})();
var statearr_10287_10349 = state_10277__$1;
(statearr_10287_10349[(2)] = null);

(statearr_10287_10349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10278 === (6))){
var inst_10242 = (state_10277[(7)]);
var state_10277__$1 = state_10277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10277__$1,(11),inst_10242);
} else {
if((state_val_10278 === (17))){
var inst_10263 = (state_10277[(2)]);
var state_10277__$1 = state_10277;
if(cljs.core.truth_(inst_10263)){
var statearr_10288_10350 = state_10277__$1;
(statearr_10288_10350[(1)] = (19));

} else {
var statearr_10289_10351 = state_10277__$1;
(statearr_10289_10351[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10278 === (3))){
var inst_10275 = (state_10277[(2)]);
var state_10277__$1 = state_10277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10277__$1,inst_10275);
} else {
if((state_val_10278 === (12))){
var inst_10252 = (state_10277[(10)]);
var state_10277__$1 = state_10277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10277__$1,(14),inst_10252);
} else {
if((state_val_10278 === (2))){
var state_10277__$1 = state_10277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10277__$1,(4),results);
} else {
if((state_val_10278 === (19))){
var state_10277__$1 = state_10277;
var statearr_10290_10352 = state_10277__$1;
(statearr_10290_10352[(2)] = null);

(statearr_10290_10352[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10278 === (11))){
var inst_10252 = (state_10277[(2)]);
var state_10277__$1 = (function (){var statearr_10291 = state_10277;
(statearr_10291[(10)] = inst_10252);

return statearr_10291;
})();
var statearr_10292_10353 = state_10277__$1;
(statearr_10292_10353[(2)] = null);

(statearr_10292_10353[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10278 === (9))){
var state_10277__$1 = state_10277;
var statearr_10293_10354 = state_10277__$1;
(statearr_10293_10354[(2)] = null);

(statearr_10293_10354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10278 === (5))){
var state_10277__$1 = state_10277;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10294_10355 = state_10277__$1;
(statearr_10294_10355[(1)] = (8));

} else {
var statearr_10295_10356 = state_10277__$1;
(statearr_10295_10356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10278 === (14))){
var inst_10257 = (state_10277[(11)]);
var inst_10255 = (state_10277[(8)]);
var inst_10255__$1 = (state_10277[(2)]);
var inst_10256 = (inst_10255__$1 == null);
var inst_10257__$1 = cljs.core.not.call(null,inst_10256);
var state_10277__$1 = (function (){var statearr_10296 = state_10277;
(statearr_10296[(11)] = inst_10257__$1);

(statearr_10296[(8)] = inst_10255__$1);

return statearr_10296;
})();
if(inst_10257__$1){
var statearr_10297_10357 = state_10277__$1;
(statearr_10297_10357[(1)] = (15));

} else {
var statearr_10298_10358 = state_10277__$1;
(statearr_10298_10358[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10278 === (16))){
var inst_10257 = (state_10277[(11)]);
var state_10277__$1 = state_10277;
var statearr_10299_10359 = state_10277__$1;
(statearr_10299_10359[(2)] = inst_10257);

(statearr_10299_10359[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10278 === (10))){
var inst_10249 = (state_10277[(2)]);
var state_10277__$1 = state_10277;
var statearr_10300_10360 = state_10277__$1;
(statearr_10300_10360[(2)] = inst_10249);

(statearr_10300_10360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10278 === (18))){
var inst_10260 = (state_10277[(2)]);
var state_10277__$1 = state_10277;
var statearr_10301_10361 = state_10277__$1;
(statearr_10301_10361[(2)] = inst_10260);

(statearr_10301_10361[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10278 === (8))){
var inst_10246 = cljs.core.async.close_BANG_.call(null,to);
var state_10277__$1 = state_10277;
var statearr_10302_10362 = state_10277__$1;
(statearr_10302_10362[(2)] = inst_10246);

(statearr_10302_10362[(1)] = (10));


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
});})(c__3069__auto__,jobs,results,process,async))
;
return ((function (switch__3046__auto__,c__3069__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____0 = (function (){
var statearr_10303 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10303[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__);

(statearr_10303[(1)] = (1));

return statearr_10303;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____1 = (function (state_10277){
while(true){
var ret_value__3048__auto__ = (function (){try{while(true){
var result__3049__auto__ = switch__3046__auto__.call(null,state_10277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3049__auto__;
}
break;
}
}catch (e10304){if((e10304 instanceof Object)){
var ex__3050__auto__ = e10304;
var statearr_10305_10363 = state_10277;
(statearr_10305_10363[(5)] = ex__3050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10364 = state_10277;
state_10277 = G__10364;
continue;
} else {
return ret_value__3048__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__ = function(state_10277){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____1.call(this,state_10277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3047__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3047__auto__;
})()
;})(switch__3046__auto__,c__3069__auto__,jobs,results,process,async))
})();
var state__3071__auto__ = (function (){var statearr_10306 = f__3070__auto__.call(null);
(statearr_10306[(6)] = c__3069__auto__);

return statearr_10306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3071__auto__);
});})(c__3069__auto__,jobs,results,process,async))
);

return c__3069__auto__;
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
var G__10366 = arguments.length;
switch (G__10366) {
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
var G__10369 = arguments.length;
switch (G__10369) {
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
var G__10372 = arguments.length;
switch (G__10372) {
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
var c__3069__auto___10421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3069__auto___10421,tc,fc){
return (function (){
var f__3070__auto__ = (function (){var switch__3046__auto__ = ((function (c__3069__auto___10421,tc,fc){
return (function (state_10398){
var state_val_10399 = (state_10398[(1)]);
if((state_val_10399 === (7))){
var inst_10394 = (state_10398[(2)]);
var state_10398__$1 = state_10398;
var statearr_10400_10422 = state_10398__$1;
(statearr_10400_10422[(2)] = inst_10394);

(statearr_10400_10422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10399 === (1))){
var state_10398__$1 = state_10398;
var statearr_10401_10423 = state_10398__$1;
(statearr_10401_10423[(2)] = null);

(statearr_10401_10423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10399 === (4))){
var inst_10375 = (state_10398[(7)]);
var inst_10375__$1 = (state_10398[(2)]);
var inst_10376 = (inst_10375__$1 == null);
var state_10398__$1 = (function (){var statearr_10402 = state_10398;
(statearr_10402[(7)] = inst_10375__$1);

return statearr_10402;
})();
if(cljs.core.truth_(inst_10376)){
var statearr_10403_10424 = state_10398__$1;
(statearr_10403_10424[(1)] = (5));

} else {
var statearr_10404_10425 = state_10398__$1;
(statearr_10404_10425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10399 === (13))){
var state_10398__$1 = state_10398;
var statearr_10405_10426 = state_10398__$1;
(statearr_10405_10426[(2)] = null);

(statearr_10405_10426[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10399 === (6))){
var inst_10375 = (state_10398[(7)]);
var inst_10381 = p.call(null,inst_10375);
var state_10398__$1 = state_10398;
if(cljs.core.truth_(inst_10381)){
var statearr_10406_10427 = state_10398__$1;
(statearr_10406_10427[(1)] = (9));

} else {
var statearr_10407_10428 = state_10398__$1;
(statearr_10407_10428[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10399 === (3))){
var inst_10396 = (state_10398[(2)]);
var state_10398__$1 = state_10398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10398__$1,inst_10396);
} else {
if((state_val_10399 === (12))){
var state_10398__$1 = state_10398;
var statearr_10408_10429 = state_10398__$1;
(statearr_10408_10429[(2)] = null);

(statearr_10408_10429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10399 === (2))){
var state_10398__$1 = state_10398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10398__$1,(4),ch);
} else {
if((state_val_10399 === (11))){
var inst_10375 = (state_10398[(7)]);
var inst_10385 = (state_10398[(2)]);
var state_10398__$1 = state_10398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10398__$1,(8),inst_10385,inst_10375);
} else {
if((state_val_10399 === (9))){
var state_10398__$1 = state_10398;
var statearr_10409_10430 = state_10398__$1;
(statearr_10409_10430[(2)] = tc);

(statearr_10409_10430[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10399 === (5))){
var inst_10378 = cljs.core.async.close_BANG_.call(null,tc);
var inst_10379 = cljs.core.async.close_BANG_.call(null,fc);
var state_10398__$1 = (function (){var statearr_10410 = state_10398;
(statearr_10410[(8)] = inst_10378);

return statearr_10410;
})();
var statearr_10411_10431 = state_10398__$1;
(statearr_10411_10431[(2)] = inst_10379);

(statearr_10411_10431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10399 === (14))){
var inst_10392 = (state_10398[(2)]);
var state_10398__$1 = state_10398;
var statearr_10412_10432 = state_10398__$1;
(statearr_10412_10432[(2)] = inst_10392);

(statearr_10412_10432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10399 === (10))){
var state_10398__$1 = state_10398;
var statearr_10413_10433 = state_10398__$1;
(statearr_10413_10433[(2)] = fc);

(statearr_10413_10433[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10399 === (8))){
var inst_10387 = (state_10398[(2)]);
var state_10398__$1 = state_10398;
if(cljs.core.truth_(inst_10387)){
var statearr_10414_10434 = state_10398__$1;
(statearr_10414_10434[(1)] = (12));

} else {
var statearr_10415_10435 = state_10398__$1;
(statearr_10415_10435[(1)] = (13));

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
});})(c__3069__auto___10421,tc,fc))
;
return ((function (switch__3046__auto__,c__3069__auto___10421,tc,fc){
return (function() {
var cljs$core$async$state_machine__3047__auto__ = null;
var cljs$core$async$state_machine__3047__auto____0 = (function (){
var statearr_10416 = [null,null,null,null,null,null,null,null,null];
(statearr_10416[(0)] = cljs$core$async$state_machine__3047__auto__);

(statearr_10416[(1)] = (1));

return statearr_10416;
});
var cljs$core$async$state_machine__3047__auto____1 = (function (state_10398){
while(true){
var ret_value__3048__auto__ = (function (){try{while(true){
var result__3049__auto__ = switch__3046__auto__.call(null,state_10398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3049__auto__;
}
break;
}
}catch (e10417){if((e10417 instanceof Object)){
var ex__3050__auto__ = e10417;
var statearr_10418_10436 = state_10398;
(statearr_10418_10436[(5)] = ex__3050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10437 = state_10398;
state_10398 = G__10437;
continue;
} else {
return ret_value__3048__auto__;
}
break;
}
});
cljs$core$async$state_machine__3047__auto__ = function(state_10398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3047__auto____1.call(this,state_10398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3047__auto____0;
cljs$core$async$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3047__auto____1;
return cljs$core$async$state_machine__3047__auto__;
})()
;})(switch__3046__auto__,c__3069__auto___10421,tc,fc))
})();
var state__3071__auto__ = (function (){var statearr_10419 = f__3070__auto__.call(null);
(statearr_10419[(6)] = c__3069__auto___10421);

return statearr_10419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3071__auto__);
});})(c__3069__auto___10421,tc,fc))
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
var c__3069__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3069__auto__){
return (function (){
var f__3070__auto__ = (function (){var switch__3046__auto__ = ((function (c__3069__auto__){
return (function (state_10458){
var state_val_10459 = (state_10458[(1)]);
if((state_val_10459 === (7))){
var inst_10454 = (state_10458[(2)]);
var state_10458__$1 = state_10458;
var statearr_10460_10478 = state_10458__$1;
(statearr_10460_10478[(2)] = inst_10454);

(statearr_10460_10478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10459 === (1))){
var inst_10438 = init;
var state_10458__$1 = (function (){var statearr_10461 = state_10458;
(statearr_10461[(7)] = inst_10438);

return statearr_10461;
})();
var statearr_10462_10479 = state_10458__$1;
(statearr_10462_10479[(2)] = null);

(statearr_10462_10479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10459 === (4))){
var inst_10441 = (state_10458[(8)]);
var inst_10441__$1 = (state_10458[(2)]);
var inst_10442 = (inst_10441__$1 == null);
var state_10458__$1 = (function (){var statearr_10463 = state_10458;
(statearr_10463[(8)] = inst_10441__$1);

return statearr_10463;
})();
if(cljs.core.truth_(inst_10442)){
var statearr_10464_10480 = state_10458__$1;
(statearr_10464_10480[(1)] = (5));

} else {
var statearr_10465_10481 = state_10458__$1;
(statearr_10465_10481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10459 === (6))){
var inst_10445 = (state_10458[(9)]);
var inst_10438 = (state_10458[(7)]);
var inst_10441 = (state_10458[(8)]);
var inst_10445__$1 = f.call(null,inst_10438,inst_10441);
var inst_10446 = cljs.core.reduced_QMARK_.call(null,inst_10445__$1);
var state_10458__$1 = (function (){var statearr_10466 = state_10458;
(statearr_10466[(9)] = inst_10445__$1);

return statearr_10466;
})();
if(inst_10446){
var statearr_10467_10482 = state_10458__$1;
(statearr_10467_10482[(1)] = (8));

} else {
var statearr_10468_10483 = state_10458__$1;
(statearr_10468_10483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10459 === (3))){
var inst_10456 = (state_10458[(2)]);
var state_10458__$1 = state_10458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10458__$1,inst_10456);
} else {
if((state_val_10459 === (2))){
var state_10458__$1 = state_10458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10458__$1,(4),ch);
} else {
if((state_val_10459 === (9))){
var inst_10445 = (state_10458[(9)]);
var inst_10438 = inst_10445;
var state_10458__$1 = (function (){var statearr_10469 = state_10458;
(statearr_10469[(7)] = inst_10438);

return statearr_10469;
})();
var statearr_10470_10484 = state_10458__$1;
(statearr_10470_10484[(2)] = null);

(statearr_10470_10484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10459 === (5))){
var inst_10438 = (state_10458[(7)]);
var state_10458__$1 = state_10458;
var statearr_10471_10485 = state_10458__$1;
(statearr_10471_10485[(2)] = inst_10438);

(statearr_10471_10485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10459 === (10))){
var inst_10452 = (state_10458[(2)]);
var state_10458__$1 = state_10458;
var statearr_10472_10486 = state_10458__$1;
(statearr_10472_10486[(2)] = inst_10452);

(statearr_10472_10486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10459 === (8))){
var inst_10445 = (state_10458[(9)]);
var inst_10448 = cljs.core.deref.call(null,inst_10445);
var state_10458__$1 = state_10458;
var statearr_10473_10487 = state_10458__$1;
(statearr_10473_10487[(2)] = inst_10448);

(statearr_10473_10487[(1)] = (10));


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
});})(c__3069__auto__))
;
return ((function (switch__3046__auto__,c__3069__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__3047__auto__ = null;
var cljs$core$async$reduce_$_state_machine__3047__auto____0 = (function (){
var statearr_10474 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10474[(0)] = cljs$core$async$reduce_$_state_machine__3047__auto__);

(statearr_10474[(1)] = (1));

return statearr_10474;
});
var cljs$core$async$reduce_$_state_machine__3047__auto____1 = (function (state_10458){
while(true){
var ret_value__3048__auto__ = (function (){try{while(true){
var result__3049__auto__ = switch__3046__auto__.call(null,state_10458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3049__auto__;
}
break;
}
}catch (e10475){if((e10475 instanceof Object)){
var ex__3050__auto__ = e10475;
var statearr_10476_10488 = state_10458;
(statearr_10476_10488[(5)] = ex__3050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10489 = state_10458;
state_10458 = G__10489;
continue;
} else {
return ret_value__3048__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__3047__auto__ = function(state_10458){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__3047__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__3047__auto____1.call(this,state_10458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__3047__auto____0;
cljs$core$async$reduce_$_state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__3047__auto____1;
return cljs$core$async$reduce_$_state_machine__3047__auto__;
})()
;})(switch__3046__auto__,c__3069__auto__))
})();
var state__3071__auto__ = (function (){var statearr_10477 = f__3070__auto__.call(null);
(statearr_10477[(6)] = c__3069__auto__);

return statearr_10477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3071__auto__);
});})(c__3069__auto__))
);

return c__3069__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__3069__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3069__auto__,f__$1){
return (function (){
var f__3070__auto__ = (function (){var switch__3046__auto__ = ((function (c__3069__auto__,f__$1){
return (function (state_10495){
var state_val_10496 = (state_10495[(1)]);
if((state_val_10496 === (1))){
var inst_10490 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_10495__$1 = state_10495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10495__$1,(2),inst_10490);
} else {
if((state_val_10496 === (2))){
var inst_10492 = (state_10495[(2)]);
var inst_10493 = f__$1.call(null,inst_10492);
var state_10495__$1 = state_10495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10495__$1,inst_10493);
} else {
return null;
}
}
});})(c__3069__auto__,f__$1))
;
return ((function (switch__3046__auto__,c__3069__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__3047__auto__ = null;
var cljs$core$async$transduce_$_state_machine__3047__auto____0 = (function (){
var statearr_10497 = [null,null,null,null,null,null,null];
(statearr_10497[(0)] = cljs$core$async$transduce_$_state_machine__3047__auto__);

(statearr_10497[(1)] = (1));

return statearr_10497;
});
var cljs$core$async$transduce_$_state_machine__3047__auto____1 = (function (state_10495){
while(true){
var ret_value__3048__auto__ = (function (){try{while(true){
var result__3049__auto__ = switch__3046__auto__.call(null,state_10495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3049__auto__;
}
break;
}
}catch (e10498){if((e10498 instanceof Object)){
var ex__3050__auto__ = e10498;
var statearr_10499_10501 = state_10495;
(statearr_10499_10501[(5)] = ex__3050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10502 = state_10495;
state_10495 = G__10502;
continue;
} else {
return ret_value__3048__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__3047__auto__ = function(state_10495){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__3047__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__3047__auto____1.call(this,state_10495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__3047__auto____0;
cljs$core$async$transduce_$_state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__3047__auto____1;
return cljs$core$async$transduce_$_state_machine__3047__auto__;
})()
;})(switch__3046__auto__,c__3069__auto__,f__$1))
})();
var state__3071__auto__ = (function (){var statearr_10500 = f__3070__auto__.call(null);
(statearr_10500[(6)] = c__3069__auto__);

return statearr_10500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3071__auto__);
});})(c__3069__auto__,f__$1))
);

return c__3069__auto__;
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
var G__10504 = arguments.length;
switch (G__10504) {
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
var c__3069__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3069__auto__){
return (function (){
var f__3070__auto__ = (function (){var switch__3046__auto__ = ((function (c__3069__auto__){
return (function (state_10529){
var state_val_10530 = (state_10529[(1)]);
if((state_val_10530 === (7))){
var inst_10511 = (state_10529[(2)]);
var state_10529__$1 = state_10529;
var statearr_10531_10552 = state_10529__$1;
(statearr_10531_10552[(2)] = inst_10511);

(statearr_10531_10552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10530 === (1))){
var inst_10505 = cljs.core.seq.call(null,coll);
var inst_10506 = inst_10505;
var state_10529__$1 = (function (){var statearr_10532 = state_10529;
(statearr_10532[(7)] = inst_10506);

return statearr_10532;
})();
var statearr_10533_10553 = state_10529__$1;
(statearr_10533_10553[(2)] = null);

(statearr_10533_10553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10530 === (4))){
var inst_10506 = (state_10529[(7)]);
var inst_10509 = cljs.core.first.call(null,inst_10506);
var state_10529__$1 = state_10529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10529__$1,(7),ch,inst_10509);
} else {
if((state_val_10530 === (13))){
var inst_10523 = (state_10529[(2)]);
var state_10529__$1 = state_10529;
var statearr_10534_10554 = state_10529__$1;
(statearr_10534_10554[(2)] = inst_10523);

(statearr_10534_10554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10530 === (6))){
var inst_10514 = (state_10529[(2)]);
var state_10529__$1 = state_10529;
if(cljs.core.truth_(inst_10514)){
var statearr_10535_10555 = state_10529__$1;
(statearr_10535_10555[(1)] = (8));

} else {
var statearr_10536_10556 = state_10529__$1;
(statearr_10536_10556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10530 === (3))){
var inst_10527 = (state_10529[(2)]);
var state_10529__$1 = state_10529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10529__$1,inst_10527);
} else {
if((state_val_10530 === (12))){
var state_10529__$1 = state_10529;
var statearr_10537_10557 = state_10529__$1;
(statearr_10537_10557[(2)] = null);

(statearr_10537_10557[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10530 === (2))){
var inst_10506 = (state_10529[(7)]);
var state_10529__$1 = state_10529;
if(cljs.core.truth_(inst_10506)){
var statearr_10538_10558 = state_10529__$1;
(statearr_10538_10558[(1)] = (4));

} else {
var statearr_10539_10559 = state_10529__$1;
(statearr_10539_10559[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10530 === (11))){
var inst_10520 = cljs.core.async.close_BANG_.call(null,ch);
var state_10529__$1 = state_10529;
var statearr_10540_10560 = state_10529__$1;
(statearr_10540_10560[(2)] = inst_10520);

(statearr_10540_10560[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10530 === (9))){
var state_10529__$1 = state_10529;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10541_10561 = state_10529__$1;
(statearr_10541_10561[(1)] = (11));

} else {
var statearr_10542_10562 = state_10529__$1;
(statearr_10542_10562[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10530 === (5))){
var inst_10506 = (state_10529[(7)]);
var state_10529__$1 = state_10529;
var statearr_10543_10563 = state_10529__$1;
(statearr_10543_10563[(2)] = inst_10506);

(statearr_10543_10563[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10530 === (10))){
var inst_10525 = (state_10529[(2)]);
var state_10529__$1 = state_10529;
var statearr_10544_10564 = state_10529__$1;
(statearr_10544_10564[(2)] = inst_10525);

(statearr_10544_10564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10530 === (8))){
var inst_10506 = (state_10529[(7)]);
var inst_10516 = cljs.core.next.call(null,inst_10506);
var inst_10506__$1 = inst_10516;
var state_10529__$1 = (function (){var statearr_10545 = state_10529;
(statearr_10545[(7)] = inst_10506__$1);

return statearr_10545;
})();
var statearr_10546_10565 = state_10529__$1;
(statearr_10546_10565[(2)] = null);

(statearr_10546_10565[(1)] = (2));


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
});})(c__3069__auto__))
;
return ((function (switch__3046__auto__,c__3069__auto__){
return (function() {
var cljs$core$async$state_machine__3047__auto__ = null;
var cljs$core$async$state_machine__3047__auto____0 = (function (){
var statearr_10547 = [null,null,null,null,null,null,null,null];
(statearr_10547[(0)] = cljs$core$async$state_machine__3047__auto__);

(statearr_10547[(1)] = (1));

return statearr_10547;
});
var cljs$core$async$state_machine__3047__auto____1 = (function (state_10529){
while(true){
var ret_value__3048__auto__ = (function (){try{while(true){
var result__3049__auto__ = switch__3046__auto__.call(null,state_10529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3049__auto__;
}
break;
}
}catch (e10548){if((e10548 instanceof Object)){
var ex__3050__auto__ = e10548;
var statearr_10549_10566 = state_10529;
(statearr_10549_10566[(5)] = ex__3050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10567 = state_10529;
state_10529 = G__10567;
continue;
} else {
return ret_value__3048__auto__;
}
break;
}
});
cljs$core$async$state_machine__3047__auto__ = function(state_10529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3047__auto____1.call(this,state_10529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3047__auto____0;
cljs$core$async$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3047__auto____1;
return cljs$core$async$state_machine__3047__auto__;
})()
;})(switch__3046__auto__,c__3069__auto__))
})();
var state__3071__auto__ = (function (){var statearr_10550 = f__3070__auto__.call(null);
(statearr_10550[(6)] = c__3069__auto__);

return statearr_10550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3071__auto__);
});})(c__3069__auto__))
);

return c__3069__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10568 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10568 = (function (ch,cs,meta10569){
this.ch = ch;
this.cs = cs;
this.meta10569 = meta10569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10570,meta10569__$1){
var self__ = this;
var _10570__$1 = this;
return (new cljs.core.async.t_cljs$core$async10568(self__.ch,self__.cs,meta10569__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async10568.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10570){
var self__ = this;
var _10570__$1 = this;
return self__.meta10569;
});})(cs))
;

cljs.core.async.t_cljs$core$async10568.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10568.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async10568.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10568.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10568.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10568.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10568.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10569","meta10569",105873419,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async10568.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10568.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10568";

cljs.core.async.t_cljs$core$async10568.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async10568");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10568.
 */
cljs.core.async.__GT_t_cljs$core$async10568 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async10568(ch__$1,cs__$1,meta10569){
return (new cljs.core.async.t_cljs$core$async10568(ch__$1,cs__$1,meta10569));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async10568(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__3069__auto___10790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3069__auto___10790,cs,m,dchan,dctr,done){
return (function (){
var f__3070__auto__ = (function (){var switch__3046__auto__ = ((function (c__3069__auto___10790,cs,m,dchan,dctr,done){
return (function (state_10705){
var state_val_10706 = (state_10705[(1)]);
if((state_val_10706 === (7))){
var inst_10701 = (state_10705[(2)]);
var state_10705__$1 = state_10705;
var statearr_10707_10791 = state_10705__$1;
(statearr_10707_10791[(2)] = inst_10701);

(statearr_10707_10791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (20))){
var inst_10604 = (state_10705[(7)]);
var inst_10616 = cljs.core.first.call(null,inst_10604);
var inst_10617 = cljs.core.nth.call(null,inst_10616,(0),null);
var inst_10618 = cljs.core.nth.call(null,inst_10616,(1),null);
var state_10705__$1 = (function (){var statearr_10708 = state_10705;
(statearr_10708[(8)] = inst_10617);

return statearr_10708;
})();
if(cljs.core.truth_(inst_10618)){
var statearr_10709_10792 = state_10705__$1;
(statearr_10709_10792[(1)] = (22));

} else {
var statearr_10710_10793 = state_10705__$1;
(statearr_10710_10793[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (27))){
var inst_10573 = (state_10705[(9)]);
var inst_10646 = (state_10705[(10)]);
var inst_10653 = (state_10705[(11)]);
var inst_10648 = (state_10705[(12)]);
var inst_10653__$1 = cljs.core._nth.call(null,inst_10646,inst_10648);
var inst_10654 = cljs.core.async.put_BANG_.call(null,inst_10653__$1,inst_10573,done);
var state_10705__$1 = (function (){var statearr_10711 = state_10705;
(statearr_10711[(11)] = inst_10653__$1);

return statearr_10711;
})();
if(cljs.core.truth_(inst_10654)){
var statearr_10712_10794 = state_10705__$1;
(statearr_10712_10794[(1)] = (30));

} else {
var statearr_10713_10795 = state_10705__$1;
(statearr_10713_10795[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (1))){
var state_10705__$1 = state_10705;
var statearr_10714_10796 = state_10705__$1;
(statearr_10714_10796[(2)] = null);

(statearr_10714_10796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (24))){
var inst_10604 = (state_10705[(7)]);
var inst_10623 = (state_10705[(2)]);
var inst_10624 = cljs.core.next.call(null,inst_10604);
var inst_10582 = inst_10624;
var inst_10583 = null;
var inst_10584 = (0);
var inst_10585 = (0);
var state_10705__$1 = (function (){var statearr_10715 = state_10705;
(statearr_10715[(13)] = inst_10585);

(statearr_10715[(14)] = inst_10583);

(statearr_10715[(15)] = inst_10623);

(statearr_10715[(16)] = inst_10582);

(statearr_10715[(17)] = inst_10584);

return statearr_10715;
})();
var statearr_10716_10797 = state_10705__$1;
(statearr_10716_10797[(2)] = null);

(statearr_10716_10797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (39))){
var state_10705__$1 = state_10705;
var statearr_10720_10798 = state_10705__$1;
(statearr_10720_10798[(2)] = null);

(statearr_10720_10798[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (4))){
var inst_10573 = (state_10705[(9)]);
var inst_10573__$1 = (state_10705[(2)]);
var inst_10574 = (inst_10573__$1 == null);
var state_10705__$1 = (function (){var statearr_10721 = state_10705;
(statearr_10721[(9)] = inst_10573__$1);

return statearr_10721;
})();
if(cljs.core.truth_(inst_10574)){
var statearr_10722_10799 = state_10705__$1;
(statearr_10722_10799[(1)] = (5));

} else {
var statearr_10723_10800 = state_10705__$1;
(statearr_10723_10800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (15))){
var inst_10585 = (state_10705[(13)]);
var inst_10583 = (state_10705[(14)]);
var inst_10582 = (state_10705[(16)]);
var inst_10584 = (state_10705[(17)]);
var inst_10600 = (state_10705[(2)]);
var inst_10601 = (inst_10585 + (1));
var tmp10717 = inst_10583;
var tmp10718 = inst_10582;
var tmp10719 = inst_10584;
var inst_10582__$1 = tmp10718;
var inst_10583__$1 = tmp10717;
var inst_10584__$1 = tmp10719;
var inst_10585__$1 = inst_10601;
var state_10705__$1 = (function (){var statearr_10724 = state_10705;
(statearr_10724[(13)] = inst_10585__$1);

(statearr_10724[(14)] = inst_10583__$1);

(statearr_10724[(16)] = inst_10582__$1);

(statearr_10724[(17)] = inst_10584__$1);

(statearr_10724[(18)] = inst_10600);

return statearr_10724;
})();
var statearr_10725_10801 = state_10705__$1;
(statearr_10725_10801[(2)] = null);

(statearr_10725_10801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (21))){
var inst_10627 = (state_10705[(2)]);
var state_10705__$1 = state_10705;
var statearr_10729_10802 = state_10705__$1;
(statearr_10729_10802[(2)] = inst_10627);

(statearr_10729_10802[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (31))){
var inst_10653 = (state_10705[(11)]);
var inst_10657 = done.call(null,null);
var inst_10658 = cljs.core.async.untap_STAR_.call(null,m,inst_10653);
var state_10705__$1 = (function (){var statearr_10730 = state_10705;
(statearr_10730[(19)] = inst_10657);

return statearr_10730;
})();
var statearr_10731_10803 = state_10705__$1;
(statearr_10731_10803[(2)] = inst_10658);

(statearr_10731_10803[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (32))){
var inst_10645 = (state_10705[(20)]);
var inst_10646 = (state_10705[(10)]);
var inst_10648 = (state_10705[(12)]);
var inst_10647 = (state_10705[(21)]);
var inst_10660 = (state_10705[(2)]);
var inst_10661 = (inst_10648 + (1));
var tmp10726 = inst_10645;
var tmp10727 = inst_10646;
var tmp10728 = inst_10647;
var inst_10645__$1 = tmp10726;
var inst_10646__$1 = tmp10727;
var inst_10647__$1 = tmp10728;
var inst_10648__$1 = inst_10661;
var state_10705__$1 = (function (){var statearr_10732 = state_10705;
(statearr_10732[(22)] = inst_10660);

(statearr_10732[(20)] = inst_10645__$1);

(statearr_10732[(10)] = inst_10646__$1);

(statearr_10732[(12)] = inst_10648__$1);

(statearr_10732[(21)] = inst_10647__$1);

return statearr_10732;
})();
var statearr_10733_10804 = state_10705__$1;
(statearr_10733_10804[(2)] = null);

(statearr_10733_10804[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (40))){
var inst_10673 = (state_10705[(23)]);
var inst_10677 = done.call(null,null);
var inst_10678 = cljs.core.async.untap_STAR_.call(null,m,inst_10673);
var state_10705__$1 = (function (){var statearr_10734 = state_10705;
(statearr_10734[(24)] = inst_10677);

return statearr_10734;
})();
var statearr_10735_10805 = state_10705__$1;
(statearr_10735_10805[(2)] = inst_10678);

(statearr_10735_10805[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (33))){
var inst_10664 = (state_10705[(25)]);
var inst_10666 = cljs.core.chunked_seq_QMARK_.call(null,inst_10664);
var state_10705__$1 = state_10705;
if(inst_10666){
var statearr_10736_10806 = state_10705__$1;
(statearr_10736_10806[(1)] = (36));

} else {
var statearr_10737_10807 = state_10705__$1;
(statearr_10737_10807[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (13))){
var inst_10594 = (state_10705[(26)]);
var inst_10597 = cljs.core.async.close_BANG_.call(null,inst_10594);
var state_10705__$1 = state_10705;
var statearr_10738_10808 = state_10705__$1;
(statearr_10738_10808[(2)] = inst_10597);

(statearr_10738_10808[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (22))){
var inst_10617 = (state_10705[(8)]);
var inst_10620 = cljs.core.async.close_BANG_.call(null,inst_10617);
var state_10705__$1 = state_10705;
var statearr_10739_10809 = state_10705__$1;
(statearr_10739_10809[(2)] = inst_10620);

(statearr_10739_10809[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (36))){
var inst_10664 = (state_10705[(25)]);
var inst_10668 = cljs.core.chunk_first.call(null,inst_10664);
var inst_10669 = cljs.core.chunk_rest.call(null,inst_10664);
var inst_10670 = cljs.core.count.call(null,inst_10668);
var inst_10645 = inst_10669;
var inst_10646 = inst_10668;
var inst_10647 = inst_10670;
var inst_10648 = (0);
var state_10705__$1 = (function (){var statearr_10740 = state_10705;
(statearr_10740[(20)] = inst_10645);

(statearr_10740[(10)] = inst_10646);

(statearr_10740[(12)] = inst_10648);

(statearr_10740[(21)] = inst_10647);

return statearr_10740;
})();
var statearr_10741_10810 = state_10705__$1;
(statearr_10741_10810[(2)] = null);

(statearr_10741_10810[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (41))){
var inst_10664 = (state_10705[(25)]);
var inst_10680 = (state_10705[(2)]);
var inst_10681 = cljs.core.next.call(null,inst_10664);
var inst_10645 = inst_10681;
var inst_10646 = null;
var inst_10647 = (0);
var inst_10648 = (0);
var state_10705__$1 = (function (){var statearr_10742 = state_10705;
(statearr_10742[(20)] = inst_10645);

(statearr_10742[(10)] = inst_10646);

(statearr_10742[(12)] = inst_10648);

(statearr_10742[(27)] = inst_10680);

(statearr_10742[(21)] = inst_10647);

return statearr_10742;
})();
var statearr_10743_10811 = state_10705__$1;
(statearr_10743_10811[(2)] = null);

(statearr_10743_10811[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (43))){
var state_10705__$1 = state_10705;
var statearr_10744_10812 = state_10705__$1;
(statearr_10744_10812[(2)] = null);

(statearr_10744_10812[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (29))){
var inst_10689 = (state_10705[(2)]);
var state_10705__$1 = state_10705;
var statearr_10745_10813 = state_10705__$1;
(statearr_10745_10813[(2)] = inst_10689);

(statearr_10745_10813[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (44))){
var inst_10698 = (state_10705[(2)]);
var state_10705__$1 = (function (){var statearr_10746 = state_10705;
(statearr_10746[(28)] = inst_10698);

return statearr_10746;
})();
var statearr_10747_10814 = state_10705__$1;
(statearr_10747_10814[(2)] = null);

(statearr_10747_10814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (6))){
var inst_10637 = (state_10705[(29)]);
var inst_10636 = cljs.core.deref.call(null,cs);
var inst_10637__$1 = cljs.core.keys.call(null,inst_10636);
var inst_10638 = cljs.core.count.call(null,inst_10637__$1);
var inst_10639 = cljs.core.reset_BANG_.call(null,dctr,inst_10638);
var inst_10644 = cljs.core.seq.call(null,inst_10637__$1);
var inst_10645 = inst_10644;
var inst_10646 = null;
var inst_10647 = (0);
var inst_10648 = (0);
var state_10705__$1 = (function (){var statearr_10748 = state_10705;
(statearr_10748[(20)] = inst_10645);

(statearr_10748[(10)] = inst_10646);

(statearr_10748[(29)] = inst_10637__$1);

(statearr_10748[(30)] = inst_10639);

(statearr_10748[(12)] = inst_10648);

(statearr_10748[(21)] = inst_10647);

return statearr_10748;
})();
var statearr_10749_10815 = state_10705__$1;
(statearr_10749_10815[(2)] = null);

(statearr_10749_10815[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (28))){
var inst_10645 = (state_10705[(20)]);
var inst_10664 = (state_10705[(25)]);
var inst_10664__$1 = cljs.core.seq.call(null,inst_10645);
var state_10705__$1 = (function (){var statearr_10750 = state_10705;
(statearr_10750[(25)] = inst_10664__$1);

return statearr_10750;
})();
if(inst_10664__$1){
var statearr_10751_10816 = state_10705__$1;
(statearr_10751_10816[(1)] = (33));

} else {
var statearr_10752_10817 = state_10705__$1;
(statearr_10752_10817[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (25))){
var inst_10648 = (state_10705[(12)]);
var inst_10647 = (state_10705[(21)]);
var inst_10650 = (inst_10648 < inst_10647);
var inst_10651 = inst_10650;
var state_10705__$1 = state_10705;
if(cljs.core.truth_(inst_10651)){
var statearr_10753_10818 = state_10705__$1;
(statearr_10753_10818[(1)] = (27));

} else {
var statearr_10754_10819 = state_10705__$1;
(statearr_10754_10819[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (34))){
var state_10705__$1 = state_10705;
var statearr_10755_10820 = state_10705__$1;
(statearr_10755_10820[(2)] = null);

(statearr_10755_10820[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (17))){
var state_10705__$1 = state_10705;
var statearr_10756_10821 = state_10705__$1;
(statearr_10756_10821[(2)] = null);

(statearr_10756_10821[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (3))){
var inst_10703 = (state_10705[(2)]);
var state_10705__$1 = state_10705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10705__$1,inst_10703);
} else {
if((state_val_10706 === (12))){
var inst_10632 = (state_10705[(2)]);
var state_10705__$1 = state_10705;
var statearr_10757_10822 = state_10705__$1;
(statearr_10757_10822[(2)] = inst_10632);

(statearr_10757_10822[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (2))){
var state_10705__$1 = state_10705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10705__$1,(4),ch);
} else {
if((state_val_10706 === (23))){
var state_10705__$1 = state_10705;
var statearr_10758_10823 = state_10705__$1;
(statearr_10758_10823[(2)] = null);

(statearr_10758_10823[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (35))){
var inst_10687 = (state_10705[(2)]);
var state_10705__$1 = state_10705;
var statearr_10759_10824 = state_10705__$1;
(statearr_10759_10824[(2)] = inst_10687);

(statearr_10759_10824[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (19))){
var inst_10604 = (state_10705[(7)]);
var inst_10608 = cljs.core.chunk_first.call(null,inst_10604);
var inst_10609 = cljs.core.chunk_rest.call(null,inst_10604);
var inst_10610 = cljs.core.count.call(null,inst_10608);
var inst_10582 = inst_10609;
var inst_10583 = inst_10608;
var inst_10584 = inst_10610;
var inst_10585 = (0);
var state_10705__$1 = (function (){var statearr_10760 = state_10705;
(statearr_10760[(13)] = inst_10585);

(statearr_10760[(14)] = inst_10583);

(statearr_10760[(16)] = inst_10582);

(statearr_10760[(17)] = inst_10584);

return statearr_10760;
})();
var statearr_10761_10825 = state_10705__$1;
(statearr_10761_10825[(2)] = null);

(statearr_10761_10825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (11))){
var inst_10604 = (state_10705[(7)]);
var inst_10582 = (state_10705[(16)]);
var inst_10604__$1 = cljs.core.seq.call(null,inst_10582);
var state_10705__$1 = (function (){var statearr_10762 = state_10705;
(statearr_10762[(7)] = inst_10604__$1);

return statearr_10762;
})();
if(inst_10604__$1){
var statearr_10763_10826 = state_10705__$1;
(statearr_10763_10826[(1)] = (16));

} else {
var statearr_10764_10827 = state_10705__$1;
(statearr_10764_10827[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (9))){
var inst_10634 = (state_10705[(2)]);
var state_10705__$1 = state_10705;
var statearr_10765_10828 = state_10705__$1;
(statearr_10765_10828[(2)] = inst_10634);

(statearr_10765_10828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (5))){
var inst_10580 = cljs.core.deref.call(null,cs);
var inst_10581 = cljs.core.seq.call(null,inst_10580);
var inst_10582 = inst_10581;
var inst_10583 = null;
var inst_10584 = (0);
var inst_10585 = (0);
var state_10705__$1 = (function (){var statearr_10766 = state_10705;
(statearr_10766[(13)] = inst_10585);

(statearr_10766[(14)] = inst_10583);

(statearr_10766[(16)] = inst_10582);

(statearr_10766[(17)] = inst_10584);

return statearr_10766;
})();
var statearr_10767_10829 = state_10705__$1;
(statearr_10767_10829[(2)] = null);

(statearr_10767_10829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (14))){
var state_10705__$1 = state_10705;
var statearr_10768_10830 = state_10705__$1;
(statearr_10768_10830[(2)] = null);

(statearr_10768_10830[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (45))){
var inst_10695 = (state_10705[(2)]);
var state_10705__$1 = state_10705;
var statearr_10769_10831 = state_10705__$1;
(statearr_10769_10831[(2)] = inst_10695);

(statearr_10769_10831[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (26))){
var inst_10637 = (state_10705[(29)]);
var inst_10691 = (state_10705[(2)]);
var inst_10692 = cljs.core.seq.call(null,inst_10637);
var state_10705__$1 = (function (){var statearr_10770 = state_10705;
(statearr_10770[(31)] = inst_10691);

return statearr_10770;
})();
if(inst_10692){
var statearr_10771_10832 = state_10705__$1;
(statearr_10771_10832[(1)] = (42));

} else {
var statearr_10772_10833 = state_10705__$1;
(statearr_10772_10833[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (16))){
var inst_10604 = (state_10705[(7)]);
var inst_10606 = cljs.core.chunked_seq_QMARK_.call(null,inst_10604);
var state_10705__$1 = state_10705;
if(inst_10606){
var statearr_10773_10834 = state_10705__$1;
(statearr_10773_10834[(1)] = (19));

} else {
var statearr_10774_10835 = state_10705__$1;
(statearr_10774_10835[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (38))){
var inst_10684 = (state_10705[(2)]);
var state_10705__$1 = state_10705;
var statearr_10775_10836 = state_10705__$1;
(statearr_10775_10836[(2)] = inst_10684);

(statearr_10775_10836[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (30))){
var state_10705__$1 = state_10705;
var statearr_10776_10837 = state_10705__$1;
(statearr_10776_10837[(2)] = null);

(statearr_10776_10837[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (10))){
var inst_10585 = (state_10705[(13)]);
var inst_10583 = (state_10705[(14)]);
var inst_10593 = cljs.core._nth.call(null,inst_10583,inst_10585);
var inst_10594 = cljs.core.nth.call(null,inst_10593,(0),null);
var inst_10595 = cljs.core.nth.call(null,inst_10593,(1),null);
var state_10705__$1 = (function (){var statearr_10777 = state_10705;
(statearr_10777[(26)] = inst_10594);

return statearr_10777;
})();
if(cljs.core.truth_(inst_10595)){
var statearr_10778_10838 = state_10705__$1;
(statearr_10778_10838[(1)] = (13));

} else {
var statearr_10779_10839 = state_10705__$1;
(statearr_10779_10839[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (18))){
var inst_10630 = (state_10705[(2)]);
var state_10705__$1 = state_10705;
var statearr_10780_10840 = state_10705__$1;
(statearr_10780_10840[(2)] = inst_10630);

(statearr_10780_10840[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (42))){
var state_10705__$1 = state_10705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10705__$1,(45),dchan);
} else {
if((state_val_10706 === (37))){
var inst_10573 = (state_10705[(9)]);
var inst_10664 = (state_10705[(25)]);
var inst_10673 = (state_10705[(23)]);
var inst_10673__$1 = cljs.core.first.call(null,inst_10664);
var inst_10674 = cljs.core.async.put_BANG_.call(null,inst_10673__$1,inst_10573,done);
var state_10705__$1 = (function (){var statearr_10781 = state_10705;
(statearr_10781[(23)] = inst_10673__$1);

return statearr_10781;
})();
if(cljs.core.truth_(inst_10674)){
var statearr_10782_10841 = state_10705__$1;
(statearr_10782_10841[(1)] = (39));

} else {
var statearr_10783_10842 = state_10705__$1;
(statearr_10783_10842[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10706 === (8))){
var inst_10585 = (state_10705[(13)]);
var inst_10584 = (state_10705[(17)]);
var inst_10587 = (inst_10585 < inst_10584);
var inst_10588 = inst_10587;
var state_10705__$1 = state_10705;
if(cljs.core.truth_(inst_10588)){
var statearr_10784_10843 = state_10705__$1;
(statearr_10784_10843[(1)] = (10));

} else {
var statearr_10785_10844 = state_10705__$1;
(statearr_10785_10844[(1)] = (11));

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
});})(c__3069__auto___10790,cs,m,dchan,dctr,done))
;
return ((function (switch__3046__auto__,c__3069__auto___10790,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__3047__auto__ = null;
var cljs$core$async$mult_$_state_machine__3047__auto____0 = (function (){
var statearr_10786 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10786[(0)] = cljs$core$async$mult_$_state_machine__3047__auto__);

(statearr_10786[(1)] = (1));

return statearr_10786;
});
var cljs$core$async$mult_$_state_machine__3047__auto____1 = (function (state_10705){
while(true){
var ret_value__3048__auto__ = (function (){try{while(true){
var result__3049__auto__ = switch__3046__auto__.call(null,state_10705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3049__auto__;
}
break;
}
}catch (e10787){if((e10787 instanceof Object)){
var ex__3050__auto__ = e10787;
var statearr_10788_10845 = state_10705;
(statearr_10788_10845[(5)] = ex__3050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10846 = state_10705;
state_10705 = G__10846;
continue;
} else {
return ret_value__3048__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__3047__auto__ = function(state_10705){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__3047__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__3047__auto____1.call(this,state_10705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__3047__auto____0;
cljs$core$async$mult_$_state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__3047__auto____1;
return cljs$core$async$mult_$_state_machine__3047__auto__;
})()
;})(switch__3046__auto__,c__3069__auto___10790,cs,m,dchan,dctr,done))
})();
var state__3071__auto__ = (function (){var statearr_10789 = f__3070__auto__.call(null);
(statearr_10789[(6)] = c__3069__auto___10790);

return statearr_10789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3071__auto__);
});})(c__3069__auto___10790,cs,m,dchan,dctr,done))
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
var G__10848 = arguments.length;
switch (G__10848) {
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
var len__4641__auto___10860 = arguments.length;
var i__4642__auto___10861 = (0);
while(true){
if((i__4642__auto___10861 < len__4641__auto___10860)){
args__4647__auto__.push((arguments[i__4642__auto___10861]));

var G__10862 = (i__4642__auto___10861 + (1));
i__4642__auto___10861 = G__10862;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10854){
var map__10855 = p__10854;
var map__10855__$1 = (((((!((map__10855 == null))))?(((((map__10855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10855):map__10855);
var opts = map__10855__$1;
var statearr_10857_10863 = state;
(statearr_10857_10863[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__10855,map__10855__$1,opts){
return (function (val){
var statearr_10858_10864 = state;
(statearr_10858_10864[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10855,map__10855__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_10859_10865 = state;
(statearr_10859_10865[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10850){
var G__10851 = cljs.core.first.call(null,seq10850);
var seq10850__$1 = cljs.core.next.call(null,seq10850);
var G__10852 = cljs.core.first.call(null,seq10850__$1);
var seq10850__$2 = cljs.core.next.call(null,seq10850__$1);
var G__10853 = cljs.core.first.call(null,seq10850__$2);
var seq10850__$3 = cljs.core.next.call(null,seq10850__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10851,G__10852,G__10853,seq10850__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10866 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10866 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10867){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta10867 = meta10867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10868,meta10867__$1){
var self__ = this;
var _10868__$1 = this;
return (new cljs.core.async.t_cljs$core$async10866(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10867__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10866.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10868){
var self__ = this;
var _10868__$1 = this;
return self__.meta10867;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10866.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10866.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10866.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10866.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10866.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10866.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10866.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10866.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async10866.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta10867","meta10867",1772178000,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10866.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10866.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10866";

cljs.core.async.t_cljs$core$async10866.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async10866");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10866.
 */
cljs.core.async.__GT_t_cljs$core$async10866 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async10866(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10867){
return (new cljs.core.async.t_cljs$core$async10866(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10867));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async10866(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__3069__auto___11030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3069__auto___11030,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__3070__auto__ = (function (){var switch__3046__auto__ = ((function (c__3069__auto___11030,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10970){
var state_val_10971 = (state_10970[(1)]);
if((state_val_10971 === (7))){
var inst_10885 = (state_10970[(2)]);
var state_10970__$1 = state_10970;
var statearr_10972_11031 = state_10970__$1;
(statearr_10972_11031[(2)] = inst_10885);

(statearr_10972_11031[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (20))){
var inst_10897 = (state_10970[(7)]);
var state_10970__$1 = state_10970;
var statearr_10973_11032 = state_10970__$1;
(statearr_10973_11032[(2)] = inst_10897);

(statearr_10973_11032[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (27))){
var state_10970__$1 = state_10970;
var statearr_10974_11033 = state_10970__$1;
(statearr_10974_11033[(2)] = null);

(statearr_10974_11033[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (1))){
var inst_10872 = (state_10970[(8)]);
var inst_10872__$1 = calc_state.call(null);
var inst_10874 = (inst_10872__$1 == null);
var inst_10875 = cljs.core.not.call(null,inst_10874);
var state_10970__$1 = (function (){var statearr_10975 = state_10970;
(statearr_10975[(8)] = inst_10872__$1);

return statearr_10975;
})();
if(inst_10875){
var statearr_10976_11034 = state_10970__$1;
(statearr_10976_11034[(1)] = (2));

} else {
var statearr_10977_11035 = state_10970__$1;
(statearr_10977_11035[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (24))){
var inst_10921 = (state_10970[(9)]);
var inst_10930 = (state_10970[(10)]);
var inst_10944 = (state_10970[(11)]);
var inst_10944__$1 = inst_10921.call(null,inst_10930);
var state_10970__$1 = (function (){var statearr_10978 = state_10970;
(statearr_10978[(11)] = inst_10944__$1);

return statearr_10978;
})();
if(cljs.core.truth_(inst_10944__$1)){
var statearr_10979_11036 = state_10970__$1;
(statearr_10979_11036[(1)] = (29));

} else {
var statearr_10980_11037 = state_10970__$1;
(statearr_10980_11037[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (4))){
var inst_10888 = (state_10970[(2)]);
var state_10970__$1 = state_10970;
if(cljs.core.truth_(inst_10888)){
var statearr_10981_11038 = state_10970__$1;
(statearr_10981_11038[(1)] = (8));

} else {
var statearr_10982_11039 = state_10970__$1;
(statearr_10982_11039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (15))){
var inst_10915 = (state_10970[(2)]);
var state_10970__$1 = state_10970;
if(cljs.core.truth_(inst_10915)){
var statearr_10983_11040 = state_10970__$1;
(statearr_10983_11040[(1)] = (19));

} else {
var statearr_10984_11041 = state_10970__$1;
(statearr_10984_11041[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (21))){
var inst_10920 = (state_10970[(12)]);
var inst_10920__$1 = (state_10970[(2)]);
var inst_10921 = cljs.core.get.call(null,inst_10920__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10922 = cljs.core.get.call(null,inst_10920__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10923 = cljs.core.get.call(null,inst_10920__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_10970__$1 = (function (){var statearr_10985 = state_10970;
(statearr_10985[(9)] = inst_10921);

(statearr_10985[(12)] = inst_10920__$1);

(statearr_10985[(13)] = inst_10922);

return statearr_10985;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10970__$1,(22),inst_10923);
} else {
if((state_val_10971 === (31))){
var inst_10952 = (state_10970[(2)]);
var state_10970__$1 = state_10970;
if(cljs.core.truth_(inst_10952)){
var statearr_10986_11042 = state_10970__$1;
(statearr_10986_11042[(1)] = (32));

} else {
var statearr_10987_11043 = state_10970__$1;
(statearr_10987_11043[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (32))){
var inst_10929 = (state_10970[(14)]);
var state_10970__$1 = state_10970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10970__$1,(35),out,inst_10929);
} else {
if((state_val_10971 === (33))){
var inst_10920 = (state_10970[(12)]);
var inst_10897 = inst_10920;
var state_10970__$1 = (function (){var statearr_10988 = state_10970;
(statearr_10988[(7)] = inst_10897);

return statearr_10988;
})();
var statearr_10989_11044 = state_10970__$1;
(statearr_10989_11044[(2)] = null);

(statearr_10989_11044[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (13))){
var inst_10897 = (state_10970[(7)]);
var inst_10904 = inst_10897.cljs$lang$protocol_mask$partition0$;
var inst_10905 = (inst_10904 & (64));
var inst_10906 = inst_10897.cljs$core$ISeq$;
var inst_10907 = (cljs.core.PROTOCOL_SENTINEL === inst_10906);
var inst_10908 = ((inst_10905) || (inst_10907));
var state_10970__$1 = state_10970;
if(cljs.core.truth_(inst_10908)){
var statearr_10990_11045 = state_10970__$1;
(statearr_10990_11045[(1)] = (16));

} else {
var statearr_10991_11046 = state_10970__$1;
(statearr_10991_11046[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (22))){
var inst_10930 = (state_10970[(10)]);
var inst_10929 = (state_10970[(14)]);
var inst_10928 = (state_10970[(2)]);
var inst_10929__$1 = cljs.core.nth.call(null,inst_10928,(0),null);
var inst_10930__$1 = cljs.core.nth.call(null,inst_10928,(1),null);
var inst_10931 = (inst_10929__$1 == null);
var inst_10932 = cljs.core._EQ_.call(null,inst_10930__$1,change);
var inst_10933 = ((inst_10931) || (inst_10932));
var state_10970__$1 = (function (){var statearr_10992 = state_10970;
(statearr_10992[(10)] = inst_10930__$1);

(statearr_10992[(14)] = inst_10929__$1);

return statearr_10992;
})();
if(cljs.core.truth_(inst_10933)){
var statearr_10993_11047 = state_10970__$1;
(statearr_10993_11047[(1)] = (23));

} else {
var statearr_10994_11048 = state_10970__$1;
(statearr_10994_11048[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (36))){
var inst_10920 = (state_10970[(12)]);
var inst_10897 = inst_10920;
var state_10970__$1 = (function (){var statearr_10995 = state_10970;
(statearr_10995[(7)] = inst_10897);

return statearr_10995;
})();
var statearr_10996_11049 = state_10970__$1;
(statearr_10996_11049[(2)] = null);

(statearr_10996_11049[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (29))){
var inst_10944 = (state_10970[(11)]);
var state_10970__$1 = state_10970;
var statearr_10997_11050 = state_10970__$1;
(statearr_10997_11050[(2)] = inst_10944);

(statearr_10997_11050[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (6))){
var state_10970__$1 = state_10970;
var statearr_10998_11051 = state_10970__$1;
(statearr_10998_11051[(2)] = false);

(statearr_10998_11051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (28))){
var inst_10940 = (state_10970[(2)]);
var inst_10941 = calc_state.call(null);
var inst_10897 = inst_10941;
var state_10970__$1 = (function (){var statearr_10999 = state_10970;
(statearr_10999[(15)] = inst_10940);

(statearr_10999[(7)] = inst_10897);

return statearr_10999;
})();
var statearr_11000_11052 = state_10970__$1;
(statearr_11000_11052[(2)] = null);

(statearr_11000_11052[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (25))){
var inst_10966 = (state_10970[(2)]);
var state_10970__$1 = state_10970;
var statearr_11001_11053 = state_10970__$1;
(statearr_11001_11053[(2)] = inst_10966);

(statearr_11001_11053[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (34))){
var inst_10964 = (state_10970[(2)]);
var state_10970__$1 = state_10970;
var statearr_11002_11054 = state_10970__$1;
(statearr_11002_11054[(2)] = inst_10964);

(statearr_11002_11054[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (17))){
var state_10970__$1 = state_10970;
var statearr_11003_11055 = state_10970__$1;
(statearr_11003_11055[(2)] = false);

(statearr_11003_11055[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (3))){
var state_10970__$1 = state_10970;
var statearr_11004_11056 = state_10970__$1;
(statearr_11004_11056[(2)] = false);

(statearr_11004_11056[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (12))){
var inst_10968 = (state_10970[(2)]);
var state_10970__$1 = state_10970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10970__$1,inst_10968);
} else {
if((state_val_10971 === (2))){
var inst_10872 = (state_10970[(8)]);
var inst_10877 = inst_10872.cljs$lang$protocol_mask$partition0$;
var inst_10878 = (inst_10877 & (64));
var inst_10879 = inst_10872.cljs$core$ISeq$;
var inst_10880 = (cljs.core.PROTOCOL_SENTINEL === inst_10879);
var inst_10881 = ((inst_10878) || (inst_10880));
var state_10970__$1 = state_10970;
if(cljs.core.truth_(inst_10881)){
var statearr_11005_11057 = state_10970__$1;
(statearr_11005_11057[(1)] = (5));

} else {
var statearr_11006_11058 = state_10970__$1;
(statearr_11006_11058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (23))){
var inst_10929 = (state_10970[(14)]);
var inst_10935 = (inst_10929 == null);
var state_10970__$1 = state_10970;
if(cljs.core.truth_(inst_10935)){
var statearr_11007_11059 = state_10970__$1;
(statearr_11007_11059[(1)] = (26));

} else {
var statearr_11008_11060 = state_10970__$1;
(statearr_11008_11060[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (35))){
var inst_10955 = (state_10970[(2)]);
var state_10970__$1 = state_10970;
if(cljs.core.truth_(inst_10955)){
var statearr_11009_11061 = state_10970__$1;
(statearr_11009_11061[(1)] = (36));

} else {
var statearr_11010_11062 = state_10970__$1;
(statearr_11010_11062[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (19))){
var inst_10897 = (state_10970[(7)]);
var inst_10917 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10897);
var state_10970__$1 = state_10970;
var statearr_11011_11063 = state_10970__$1;
(statearr_11011_11063[(2)] = inst_10917);

(statearr_11011_11063[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (11))){
var inst_10897 = (state_10970[(7)]);
var inst_10901 = (inst_10897 == null);
var inst_10902 = cljs.core.not.call(null,inst_10901);
var state_10970__$1 = state_10970;
if(inst_10902){
var statearr_11012_11064 = state_10970__$1;
(statearr_11012_11064[(1)] = (13));

} else {
var statearr_11013_11065 = state_10970__$1;
(statearr_11013_11065[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (9))){
var inst_10872 = (state_10970[(8)]);
var state_10970__$1 = state_10970;
var statearr_11014_11066 = state_10970__$1;
(statearr_11014_11066[(2)] = inst_10872);

(statearr_11014_11066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (5))){
var state_10970__$1 = state_10970;
var statearr_11015_11067 = state_10970__$1;
(statearr_11015_11067[(2)] = true);

(statearr_11015_11067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (14))){
var state_10970__$1 = state_10970;
var statearr_11016_11068 = state_10970__$1;
(statearr_11016_11068[(2)] = false);

(statearr_11016_11068[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (26))){
var inst_10930 = (state_10970[(10)]);
var inst_10937 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10930);
var state_10970__$1 = state_10970;
var statearr_11017_11069 = state_10970__$1;
(statearr_11017_11069[(2)] = inst_10937);

(statearr_11017_11069[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (16))){
var state_10970__$1 = state_10970;
var statearr_11018_11070 = state_10970__$1;
(statearr_11018_11070[(2)] = true);

(statearr_11018_11070[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (38))){
var inst_10960 = (state_10970[(2)]);
var state_10970__$1 = state_10970;
var statearr_11019_11071 = state_10970__$1;
(statearr_11019_11071[(2)] = inst_10960);

(statearr_11019_11071[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (30))){
var inst_10921 = (state_10970[(9)]);
var inst_10930 = (state_10970[(10)]);
var inst_10922 = (state_10970[(13)]);
var inst_10947 = cljs.core.empty_QMARK_.call(null,inst_10921);
var inst_10948 = inst_10922.call(null,inst_10930);
var inst_10949 = cljs.core.not.call(null,inst_10948);
var inst_10950 = ((inst_10947) && (inst_10949));
var state_10970__$1 = state_10970;
var statearr_11020_11072 = state_10970__$1;
(statearr_11020_11072[(2)] = inst_10950);

(statearr_11020_11072[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (10))){
var inst_10872 = (state_10970[(8)]);
var inst_10893 = (state_10970[(2)]);
var inst_10894 = cljs.core.get.call(null,inst_10893,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10895 = cljs.core.get.call(null,inst_10893,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10896 = cljs.core.get.call(null,inst_10893,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10897 = inst_10872;
var state_10970__$1 = (function (){var statearr_11021 = state_10970;
(statearr_11021[(16)] = inst_10896);

(statearr_11021[(7)] = inst_10897);

(statearr_11021[(17)] = inst_10894);

(statearr_11021[(18)] = inst_10895);

return statearr_11021;
})();
var statearr_11022_11073 = state_10970__$1;
(statearr_11022_11073[(2)] = null);

(statearr_11022_11073[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (18))){
var inst_10912 = (state_10970[(2)]);
var state_10970__$1 = state_10970;
var statearr_11023_11074 = state_10970__$1;
(statearr_11023_11074[(2)] = inst_10912);

(statearr_11023_11074[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (37))){
var state_10970__$1 = state_10970;
var statearr_11024_11075 = state_10970__$1;
(statearr_11024_11075[(2)] = null);

(statearr_11024_11075[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (8))){
var inst_10872 = (state_10970[(8)]);
var inst_10890 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10872);
var state_10970__$1 = state_10970;
var statearr_11025_11076 = state_10970__$1;
(statearr_11025_11076[(2)] = inst_10890);

(statearr_11025_11076[(1)] = (10));


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
});})(c__3069__auto___11030,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__3046__auto__,c__3069__auto___11030,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__3047__auto__ = null;
var cljs$core$async$mix_$_state_machine__3047__auto____0 = (function (){
var statearr_11026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11026[(0)] = cljs$core$async$mix_$_state_machine__3047__auto__);

(statearr_11026[(1)] = (1));

return statearr_11026;
});
var cljs$core$async$mix_$_state_machine__3047__auto____1 = (function (state_10970){
while(true){
var ret_value__3048__auto__ = (function (){try{while(true){
var result__3049__auto__ = switch__3046__auto__.call(null,state_10970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3049__auto__;
}
break;
}
}catch (e11027){if((e11027 instanceof Object)){
var ex__3050__auto__ = e11027;
var statearr_11028_11077 = state_10970;
(statearr_11028_11077[(5)] = ex__3050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11078 = state_10970;
state_10970 = G__11078;
continue;
} else {
return ret_value__3048__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__3047__auto__ = function(state_10970){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__3047__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__3047__auto____1.call(this,state_10970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__3047__auto____0;
cljs$core$async$mix_$_state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__3047__auto____1;
return cljs$core$async$mix_$_state_machine__3047__auto__;
})()
;})(switch__3046__auto__,c__3069__auto___11030,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__3071__auto__ = (function (){var statearr_11029 = f__3070__auto__.call(null);
(statearr_11029[(6)] = c__3069__auto___11030);

return statearr_11029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3071__auto__);
});})(c__3069__auto___11030,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__11080 = arguments.length;
switch (G__11080) {
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
var G__11084 = arguments.length;
switch (G__11084) {
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
return (function (p1__11082_SHARP_){
if(cljs.core.truth_(p1__11082_SHARP_.call(null,topic))){
return p1__11082_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11082_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11085 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11085 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11086){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11086 = meta11086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11087,meta11086__$1){
var self__ = this;
var _11087__$1 = this;
return (new cljs.core.async.t_cljs$core$async11085(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11086__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11085.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11087){
var self__ = this;
var _11087__$1 = this;
return self__.meta11086;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11085.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11085.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11085.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11085.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11085.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async11085.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11085.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11085.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11086","meta11086",-1999308202,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11085.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11085.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11085";

cljs.core.async.t_cljs$core$async11085.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async11085");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11085.
 */
cljs.core.async.__GT_t_cljs$core$async11085 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async11085(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11086){
return (new cljs.core.async.t_cljs$core$async11085(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11086));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async11085(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__3069__auto___11205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3069__auto___11205,mults,ensure_mult,p){
return (function (){
var f__3070__auto__ = (function (){var switch__3046__auto__ = ((function (c__3069__auto___11205,mults,ensure_mult,p){
return (function (state_11159){
var state_val_11160 = (state_11159[(1)]);
if((state_val_11160 === (7))){
var inst_11155 = (state_11159[(2)]);
var state_11159__$1 = state_11159;
var statearr_11161_11206 = state_11159__$1;
(statearr_11161_11206[(2)] = inst_11155);

(statearr_11161_11206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11160 === (20))){
var state_11159__$1 = state_11159;
var statearr_11162_11207 = state_11159__$1;
(statearr_11162_11207[(2)] = null);

(statearr_11162_11207[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11160 === (1))){
var state_11159__$1 = state_11159;
var statearr_11163_11208 = state_11159__$1;
(statearr_11163_11208[(2)] = null);

(statearr_11163_11208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11160 === (24))){
var inst_11138 = (state_11159[(7)]);
var inst_11147 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11138);
var state_11159__$1 = state_11159;
var statearr_11164_11209 = state_11159__$1;
(statearr_11164_11209[(2)] = inst_11147);

(statearr_11164_11209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11160 === (4))){
var inst_11090 = (state_11159[(8)]);
var inst_11090__$1 = (state_11159[(2)]);
var inst_11091 = (inst_11090__$1 == null);
var state_11159__$1 = (function (){var statearr_11165 = state_11159;
(statearr_11165[(8)] = inst_11090__$1);

return statearr_11165;
})();
if(cljs.core.truth_(inst_11091)){
var statearr_11166_11210 = state_11159__$1;
(statearr_11166_11210[(1)] = (5));

} else {
var statearr_11167_11211 = state_11159__$1;
(statearr_11167_11211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11160 === (15))){
var inst_11132 = (state_11159[(2)]);
var state_11159__$1 = state_11159;
var statearr_11168_11212 = state_11159__$1;
(statearr_11168_11212[(2)] = inst_11132);

(statearr_11168_11212[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11160 === (21))){
var inst_11152 = (state_11159[(2)]);
var state_11159__$1 = (function (){var statearr_11169 = state_11159;
(statearr_11169[(9)] = inst_11152);

return statearr_11169;
})();
var statearr_11170_11213 = state_11159__$1;
(statearr_11170_11213[(2)] = null);

(statearr_11170_11213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11160 === (13))){
var inst_11114 = (state_11159[(10)]);
var inst_11116 = cljs.core.chunked_seq_QMARK_.call(null,inst_11114);
var state_11159__$1 = state_11159;
if(inst_11116){
var statearr_11171_11214 = state_11159__$1;
(statearr_11171_11214[(1)] = (16));

} else {
var statearr_11172_11215 = state_11159__$1;
(statearr_11172_11215[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11160 === (22))){
var inst_11144 = (state_11159[(2)]);
var state_11159__$1 = state_11159;
if(cljs.core.truth_(inst_11144)){
var statearr_11173_11216 = state_11159__$1;
(statearr_11173_11216[(1)] = (23));

} else {
var statearr_11174_11217 = state_11159__$1;
(statearr_11174_11217[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11160 === (6))){
var inst_11138 = (state_11159[(7)]);
var inst_11090 = (state_11159[(8)]);
var inst_11140 = (state_11159[(11)]);
var inst_11138__$1 = topic_fn.call(null,inst_11090);
var inst_11139 = cljs.core.deref.call(null,mults);
var inst_11140__$1 = cljs.core.get.call(null,inst_11139,inst_11138__$1);
var state_11159__$1 = (function (){var statearr_11175 = state_11159;
(statearr_11175[(7)] = inst_11138__$1);

(statearr_11175[(11)] = inst_11140__$1);

return statearr_11175;
})();
if(cljs.core.truth_(inst_11140__$1)){
var statearr_11176_11218 = state_11159__$1;
(statearr_11176_11218[(1)] = (19));

} else {
var statearr_11177_11219 = state_11159__$1;
(statearr_11177_11219[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11160 === (25))){
var inst_11149 = (state_11159[(2)]);
var state_11159__$1 = state_11159;
var statearr_11178_11220 = state_11159__$1;
(statearr_11178_11220[(2)] = inst_11149);

(statearr_11178_11220[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11160 === (17))){
var inst_11114 = (state_11159[(10)]);
var inst_11123 = cljs.core.first.call(null,inst_11114);
var inst_11124 = cljs.core.async.muxch_STAR_.call(null,inst_11123);
var inst_11125 = cljs.core.async.close_BANG_.call(null,inst_11124);
var inst_11126 = cljs.core.next.call(null,inst_11114);
var inst_11100 = inst_11126;
var inst_11101 = null;
var inst_11102 = (0);
var inst_11103 = (0);
var state_11159__$1 = (function (){var statearr_11179 = state_11159;
(statearr_11179[(12)] = inst_11125);

(statearr_11179[(13)] = inst_11103);

(statearr_11179[(14)] = inst_11101);

(statearr_11179[(15)] = inst_11100);

(statearr_11179[(16)] = inst_11102);

return statearr_11179;
})();
var statearr_11180_11221 = state_11159__$1;
(statearr_11180_11221[(2)] = null);

(statearr_11180_11221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11160 === (3))){
var inst_11157 = (state_11159[(2)]);
var state_11159__$1 = state_11159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11159__$1,inst_11157);
} else {
if((state_val_11160 === (12))){
var inst_11134 = (state_11159[(2)]);
var state_11159__$1 = state_11159;
var statearr_11181_11222 = state_11159__$1;
(statearr_11181_11222[(2)] = inst_11134);

(statearr_11181_11222[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11160 === (2))){
var state_11159__$1 = state_11159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11159__$1,(4),ch);
} else {
if((state_val_11160 === (23))){
var state_11159__$1 = state_11159;
var statearr_11182_11223 = state_11159__$1;
(statearr_11182_11223[(2)] = null);

(statearr_11182_11223[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11160 === (19))){
var inst_11090 = (state_11159[(8)]);
var inst_11140 = (state_11159[(11)]);
var inst_11142 = cljs.core.async.muxch_STAR_.call(null,inst_11140);
var state_11159__$1 = state_11159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11159__$1,(22),inst_11142,inst_11090);
} else {
if((state_val_11160 === (11))){
var inst_11100 = (state_11159[(15)]);
var inst_11114 = (state_11159[(10)]);
var inst_11114__$1 = cljs.core.seq.call(null,inst_11100);
var state_11159__$1 = (function (){var statearr_11183 = state_11159;
(statearr_11183[(10)] = inst_11114__$1);

return statearr_11183;
})();
if(inst_11114__$1){
var statearr_11184_11224 = state_11159__$1;
(statearr_11184_11224[(1)] = (13));

} else {
var statearr_11185_11225 = state_11159__$1;
(statearr_11185_11225[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11160 === (9))){
var inst_11136 = (state_11159[(2)]);
var state_11159__$1 = state_11159;
var statearr_11186_11226 = state_11159__$1;
(statearr_11186_11226[(2)] = inst_11136);

(statearr_11186_11226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11160 === (5))){
var inst_11097 = cljs.core.deref.call(null,mults);
var inst_11098 = cljs.core.vals.call(null,inst_11097);
var inst_11099 = cljs.core.seq.call(null,inst_11098);
var inst_11100 = inst_11099;
var inst_11101 = null;
var inst_11102 = (0);
var inst_11103 = (0);
var state_11159__$1 = (function (){var statearr_11187 = state_11159;
(statearr_11187[(13)] = inst_11103);

(statearr_11187[(14)] = inst_11101);

(statearr_11187[(15)] = inst_11100);

(statearr_11187[(16)] = inst_11102);

return statearr_11187;
})();
var statearr_11188_11227 = state_11159__$1;
(statearr_11188_11227[(2)] = null);

(statearr_11188_11227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11160 === (14))){
var state_11159__$1 = state_11159;
var statearr_11192_11228 = state_11159__$1;
(statearr_11192_11228[(2)] = null);

(statearr_11192_11228[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11160 === (16))){
var inst_11114 = (state_11159[(10)]);
var inst_11118 = cljs.core.chunk_first.call(null,inst_11114);
var inst_11119 = cljs.core.chunk_rest.call(null,inst_11114);
var inst_11120 = cljs.core.count.call(null,inst_11118);
var inst_11100 = inst_11119;
var inst_11101 = inst_11118;
var inst_11102 = inst_11120;
var inst_11103 = (0);
var state_11159__$1 = (function (){var statearr_11193 = state_11159;
(statearr_11193[(13)] = inst_11103);

(statearr_11193[(14)] = inst_11101);

(statearr_11193[(15)] = inst_11100);

(statearr_11193[(16)] = inst_11102);

return statearr_11193;
})();
var statearr_11194_11229 = state_11159__$1;
(statearr_11194_11229[(2)] = null);

(statearr_11194_11229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11160 === (10))){
var inst_11103 = (state_11159[(13)]);
var inst_11101 = (state_11159[(14)]);
var inst_11100 = (state_11159[(15)]);
var inst_11102 = (state_11159[(16)]);
var inst_11108 = cljs.core._nth.call(null,inst_11101,inst_11103);
var inst_11109 = cljs.core.async.muxch_STAR_.call(null,inst_11108);
var inst_11110 = cljs.core.async.close_BANG_.call(null,inst_11109);
var inst_11111 = (inst_11103 + (1));
var tmp11189 = inst_11101;
var tmp11190 = inst_11100;
var tmp11191 = inst_11102;
var inst_11100__$1 = tmp11190;
var inst_11101__$1 = tmp11189;
var inst_11102__$1 = tmp11191;
var inst_11103__$1 = inst_11111;
var state_11159__$1 = (function (){var statearr_11195 = state_11159;
(statearr_11195[(13)] = inst_11103__$1);

(statearr_11195[(17)] = inst_11110);

(statearr_11195[(14)] = inst_11101__$1);

(statearr_11195[(15)] = inst_11100__$1);

(statearr_11195[(16)] = inst_11102__$1);

return statearr_11195;
})();
var statearr_11196_11230 = state_11159__$1;
(statearr_11196_11230[(2)] = null);

(statearr_11196_11230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11160 === (18))){
var inst_11129 = (state_11159[(2)]);
var state_11159__$1 = state_11159;
var statearr_11197_11231 = state_11159__$1;
(statearr_11197_11231[(2)] = inst_11129);

(statearr_11197_11231[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11160 === (8))){
var inst_11103 = (state_11159[(13)]);
var inst_11102 = (state_11159[(16)]);
var inst_11105 = (inst_11103 < inst_11102);
var inst_11106 = inst_11105;
var state_11159__$1 = state_11159;
if(cljs.core.truth_(inst_11106)){
var statearr_11198_11232 = state_11159__$1;
(statearr_11198_11232[(1)] = (10));

} else {
var statearr_11199_11233 = state_11159__$1;
(statearr_11199_11233[(1)] = (11));

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
});})(c__3069__auto___11205,mults,ensure_mult,p))
;
return ((function (switch__3046__auto__,c__3069__auto___11205,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__3047__auto__ = null;
var cljs$core$async$state_machine__3047__auto____0 = (function (){
var statearr_11200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11200[(0)] = cljs$core$async$state_machine__3047__auto__);

(statearr_11200[(1)] = (1));

return statearr_11200;
});
var cljs$core$async$state_machine__3047__auto____1 = (function (state_11159){
while(true){
var ret_value__3048__auto__ = (function (){try{while(true){
var result__3049__auto__ = switch__3046__auto__.call(null,state_11159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3049__auto__;
}
break;
}
}catch (e11201){if((e11201 instanceof Object)){
var ex__3050__auto__ = e11201;
var statearr_11202_11234 = state_11159;
(statearr_11202_11234[(5)] = ex__3050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11235 = state_11159;
state_11159 = G__11235;
continue;
} else {
return ret_value__3048__auto__;
}
break;
}
});
cljs$core$async$state_machine__3047__auto__ = function(state_11159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3047__auto____1.call(this,state_11159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3047__auto____0;
cljs$core$async$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3047__auto____1;
return cljs$core$async$state_machine__3047__auto__;
})()
;})(switch__3046__auto__,c__3069__auto___11205,mults,ensure_mult,p))
})();
var state__3071__auto__ = (function (){var statearr_11203 = f__3070__auto__.call(null);
(statearr_11203[(6)] = c__3069__auto___11205);

return statearr_11203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3071__auto__);
});})(c__3069__auto___11205,mults,ensure_mult,p))
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
var G__11237 = arguments.length;
switch (G__11237) {
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
var G__11240 = arguments.length;
switch (G__11240) {
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
var G__11243 = arguments.length;
switch (G__11243) {
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
var c__3069__auto___11310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3069__auto___11310,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__3070__auto__ = (function (){var switch__3046__auto__ = ((function (c__3069__auto___11310,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11282){
var state_val_11283 = (state_11282[(1)]);
if((state_val_11283 === (7))){
var state_11282__$1 = state_11282;
var statearr_11284_11311 = state_11282__$1;
(statearr_11284_11311[(2)] = null);

(statearr_11284_11311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11283 === (1))){
var state_11282__$1 = state_11282;
var statearr_11285_11312 = state_11282__$1;
(statearr_11285_11312[(2)] = null);

(statearr_11285_11312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11283 === (4))){
var inst_11246 = (state_11282[(7)]);
var inst_11248 = (inst_11246 < cnt);
var state_11282__$1 = state_11282;
if(cljs.core.truth_(inst_11248)){
var statearr_11286_11313 = state_11282__$1;
(statearr_11286_11313[(1)] = (6));

} else {
var statearr_11287_11314 = state_11282__$1;
(statearr_11287_11314[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11283 === (15))){
var inst_11278 = (state_11282[(2)]);
var state_11282__$1 = state_11282;
var statearr_11288_11315 = state_11282__$1;
(statearr_11288_11315[(2)] = inst_11278);

(statearr_11288_11315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11283 === (13))){
var inst_11271 = cljs.core.async.close_BANG_.call(null,out);
var state_11282__$1 = state_11282;
var statearr_11289_11316 = state_11282__$1;
(statearr_11289_11316[(2)] = inst_11271);

(statearr_11289_11316[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11283 === (6))){
var state_11282__$1 = state_11282;
var statearr_11290_11317 = state_11282__$1;
(statearr_11290_11317[(2)] = null);

(statearr_11290_11317[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11283 === (3))){
var inst_11280 = (state_11282[(2)]);
var state_11282__$1 = state_11282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11282__$1,inst_11280);
} else {
if((state_val_11283 === (12))){
var inst_11268 = (state_11282[(8)]);
var inst_11268__$1 = (state_11282[(2)]);
var inst_11269 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11268__$1);
var state_11282__$1 = (function (){var statearr_11291 = state_11282;
(statearr_11291[(8)] = inst_11268__$1);

return statearr_11291;
})();
if(cljs.core.truth_(inst_11269)){
var statearr_11292_11318 = state_11282__$1;
(statearr_11292_11318[(1)] = (13));

} else {
var statearr_11293_11319 = state_11282__$1;
(statearr_11293_11319[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11283 === (2))){
var inst_11245 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11246 = (0);
var state_11282__$1 = (function (){var statearr_11294 = state_11282;
(statearr_11294[(9)] = inst_11245);

(statearr_11294[(7)] = inst_11246);

return statearr_11294;
})();
var statearr_11295_11320 = state_11282__$1;
(statearr_11295_11320[(2)] = null);

(statearr_11295_11320[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11283 === (11))){
var inst_11246 = (state_11282[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11282,(10),Object,null,(9));
var inst_11255 = chs__$1.call(null,inst_11246);
var inst_11256 = done.call(null,inst_11246);
var inst_11257 = cljs.core.async.take_BANG_.call(null,inst_11255,inst_11256);
var state_11282__$1 = state_11282;
var statearr_11296_11321 = state_11282__$1;
(statearr_11296_11321[(2)] = inst_11257);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11282__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11283 === (9))){
var inst_11246 = (state_11282[(7)]);
var inst_11259 = (state_11282[(2)]);
var inst_11260 = (inst_11246 + (1));
var inst_11246__$1 = inst_11260;
var state_11282__$1 = (function (){var statearr_11297 = state_11282;
(statearr_11297[(7)] = inst_11246__$1);

(statearr_11297[(10)] = inst_11259);

return statearr_11297;
})();
var statearr_11298_11322 = state_11282__$1;
(statearr_11298_11322[(2)] = null);

(statearr_11298_11322[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11283 === (5))){
var inst_11266 = (state_11282[(2)]);
var state_11282__$1 = (function (){var statearr_11299 = state_11282;
(statearr_11299[(11)] = inst_11266);

return statearr_11299;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11282__$1,(12),dchan);
} else {
if((state_val_11283 === (14))){
var inst_11268 = (state_11282[(8)]);
var inst_11273 = cljs.core.apply.call(null,f,inst_11268);
var state_11282__$1 = state_11282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11282__$1,(16),out,inst_11273);
} else {
if((state_val_11283 === (16))){
var inst_11275 = (state_11282[(2)]);
var state_11282__$1 = (function (){var statearr_11300 = state_11282;
(statearr_11300[(12)] = inst_11275);

return statearr_11300;
})();
var statearr_11301_11323 = state_11282__$1;
(statearr_11301_11323[(2)] = null);

(statearr_11301_11323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11283 === (10))){
var inst_11250 = (state_11282[(2)]);
var inst_11251 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11282__$1 = (function (){var statearr_11302 = state_11282;
(statearr_11302[(13)] = inst_11250);

return statearr_11302;
})();
var statearr_11303_11324 = state_11282__$1;
(statearr_11303_11324[(2)] = inst_11251);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11282__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11283 === (8))){
var inst_11264 = (state_11282[(2)]);
var state_11282__$1 = state_11282;
var statearr_11304_11325 = state_11282__$1;
(statearr_11304_11325[(2)] = inst_11264);

(statearr_11304_11325[(1)] = (5));


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
});})(c__3069__auto___11310,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__3046__auto__,c__3069__auto___11310,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__3047__auto__ = null;
var cljs$core$async$state_machine__3047__auto____0 = (function (){
var statearr_11305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11305[(0)] = cljs$core$async$state_machine__3047__auto__);

(statearr_11305[(1)] = (1));

return statearr_11305;
});
var cljs$core$async$state_machine__3047__auto____1 = (function (state_11282){
while(true){
var ret_value__3048__auto__ = (function (){try{while(true){
var result__3049__auto__ = switch__3046__auto__.call(null,state_11282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3049__auto__;
}
break;
}
}catch (e11306){if((e11306 instanceof Object)){
var ex__3050__auto__ = e11306;
var statearr_11307_11326 = state_11282;
(statearr_11307_11326[(5)] = ex__3050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11327 = state_11282;
state_11282 = G__11327;
continue;
} else {
return ret_value__3048__auto__;
}
break;
}
});
cljs$core$async$state_machine__3047__auto__ = function(state_11282){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3047__auto____1.call(this,state_11282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3047__auto____0;
cljs$core$async$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3047__auto____1;
return cljs$core$async$state_machine__3047__auto__;
})()
;})(switch__3046__auto__,c__3069__auto___11310,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__3071__auto__ = (function (){var statearr_11308 = f__3070__auto__.call(null);
(statearr_11308[(6)] = c__3069__auto___11310);

return statearr_11308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3071__auto__);
});})(c__3069__auto___11310,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__11330 = arguments.length;
switch (G__11330) {
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
var c__3069__auto___11384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3069__auto___11384,out){
return (function (){
var f__3070__auto__ = (function (){var switch__3046__auto__ = ((function (c__3069__auto___11384,out){
return (function (state_11362){
var state_val_11363 = (state_11362[(1)]);
if((state_val_11363 === (7))){
var inst_11342 = (state_11362[(7)]);
var inst_11341 = (state_11362[(8)]);
var inst_11341__$1 = (state_11362[(2)]);
var inst_11342__$1 = cljs.core.nth.call(null,inst_11341__$1,(0),null);
var inst_11343 = cljs.core.nth.call(null,inst_11341__$1,(1),null);
var inst_11344 = (inst_11342__$1 == null);
var state_11362__$1 = (function (){var statearr_11364 = state_11362;
(statearr_11364[(7)] = inst_11342__$1);

(statearr_11364[(9)] = inst_11343);

(statearr_11364[(8)] = inst_11341__$1);

return statearr_11364;
})();
if(cljs.core.truth_(inst_11344)){
var statearr_11365_11385 = state_11362__$1;
(statearr_11365_11385[(1)] = (8));

} else {
var statearr_11366_11386 = state_11362__$1;
(statearr_11366_11386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11363 === (1))){
var inst_11331 = cljs.core.vec.call(null,chs);
var inst_11332 = inst_11331;
var state_11362__$1 = (function (){var statearr_11367 = state_11362;
(statearr_11367[(10)] = inst_11332);

return statearr_11367;
})();
var statearr_11368_11387 = state_11362__$1;
(statearr_11368_11387[(2)] = null);

(statearr_11368_11387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11363 === (4))){
var inst_11332 = (state_11362[(10)]);
var state_11362__$1 = state_11362;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11362__$1,(7),inst_11332);
} else {
if((state_val_11363 === (6))){
var inst_11358 = (state_11362[(2)]);
var state_11362__$1 = state_11362;
var statearr_11369_11388 = state_11362__$1;
(statearr_11369_11388[(2)] = inst_11358);

(statearr_11369_11388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11363 === (3))){
var inst_11360 = (state_11362[(2)]);
var state_11362__$1 = state_11362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11362__$1,inst_11360);
} else {
if((state_val_11363 === (2))){
var inst_11332 = (state_11362[(10)]);
var inst_11334 = cljs.core.count.call(null,inst_11332);
var inst_11335 = (inst_11334 > (0));
var state_11362__$1 = state_11362;
if(cljs.core.truth_(inst_11335)){
var statearr_11371_11389 = state_11362__$1;
(statearr_11371_11389[(1)] = (4));

} else {
var statearr_11372_11390 = state_11362__$1;
(statearr_11372_11390[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11363 === (11))){
var inst_11332 = (state_11362[(10)]);
var inst_11351 = (state_11362[(2)]);
var tmp11370 = inst_11332;
var inst_11332__$1 = tmp11370;
var state_11362__$1 = (function (){var statearr_11373 = state_11362;
(statearr_11373[(10)] = inst_11332__$1);

(statearr_11373[(11)] = inst_11351);

return statearr_11373;
})();
var statearr_11374_11391 = state_11362__$1;
(statearr_11374_11391[(2)] = null);

(statearr_11374_11391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11363 === (9))){
var inst_11342 = (state_11362[(7)]);
var state_11362__$1 = state_11362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11362__$1,(11),out,inst_11342);
} else {
if((state_val_11363 === (5))){
var inst_11356 = cljs.core.async.close_BANG_.call(null,out);
var state_11362__$1 = state_11362;
var statearr_11375_11392 = state_11362__$1;
(statearr_11375_11392[(2)] = inst_11356);

(statearr_11375_11392[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11363 === (10))){
var inst_11354 = (state_11362[(2)]);
var state_11362__$1 = state_11362;
var statearr_11376_11393 = state_11362__$1;
(statearr_11376_11393[(2)] = inst_11354);

(statearr_11376_11393[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11363 === (8))){
var inst_11342 = (state_11362[(7)]);
var inst_11343 = (state_11362[(9)]);
var inst_11332 = (state_11362[(10)]);
var inst_11341 = (state_11362[(8)]);
var inst_11346 = (function (){var cs = inst_11332;
var vec__11337 = inst_11341;
var v = inst_11342;
var c = inst_11343;
return ((function (cs,vec__11337,v,c,inst_11342,inst_11343,inst_11332,inst_11341,state_val_11363,c__3069__auto___11384,out){
return (function (p1__11328_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11328_SHARP_);
});
;})(cs,vec__11337,v,c,inst_11342,inst_11343,inst_11332,inst_11341,state_val_11363,c__3069__auto___11384,out))
})();
var inst_11347 = cljs.core.filterv.call(null,inst_11346,inst_11332);
var inst_11332__$1 = inst_11347;
var state_11362__$1 = (function (){var statearr_11377 = state_11362;
(statearr_11377[(10)] = inst_11332__$1);

return statearr_11377;
})();
var statearr_11378_11394 = state_11362__$1;
(statearr_11378_11394[(2)] = null);

(statearr_11378_11394[(1)] = (2));


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
});})(c__3069__auto___11384,out))
;
return ((function (switch__3046__auto__,c__3069__auto___11384,out){
return (function() {
var cljs$core$async$state_machine__3047__auto__ = null;
var cljs$core$async$state_machine__3047__auto____0 = (function (){
var statearr_11379 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11379[(0)] = cljs$core$async$state_machine__3047__auto__);

(statearr_11379[(1)] = (1));

return statearr_11379;
});
var cljs$core$async$state_machine__3047__auto____1 = (function (state_11362){
while(true){
var ret_value__3048__auto__ = (function (){try{while(true){
var result__3049__auto__ = switch__3046__auto__.call(null,state_11362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3049__auto__;
}
break;
}
}catch (e11380){if((e11380 instanceof Object)){
var ex__3050__auto__ = e11380;
var statearr_11381_11395 = state_11362;
(statearr_11381_11395[(5)] = ex__3050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11396 = state_11362;
state_11362 = G__11396;
continue;
} else {
return ret_value__3048__auto__;
}
break;
}
});
cljs$core$async$state_machine__3047__auto__ = function(state_11362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3047__auto____1.call(this,state_11362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3047__auto____0;
cljs$core$async$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3047__auto____1;
return cljs$core$async$state_machine__3047__auto__;
})()
;})(switch__3046__auto__,c__3069__auto___11384,out))
})();
var state__3071__auto__ = (function (){var statearr_11382 = f__3070__auto__.call(null);
(statearr_11382[(6)] = c__3069__auto___11384);

return statearr_11382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3071__auto__);
});})(c__3069__auto___11384,out))
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
var G__11398 = arguments.length;
switch (G__11398) {
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
var c__3069__auto___11443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3069__auto___11443,out){
return (function (){
var f__3070__auto__ = (function (){var switch__3046__auto__ = ((function (c__3069__auto___11443,out){
return (function (state_11422){
var state_val_11423 = (state_11422[(1)]);
if((state_val_11423 === (7))){
var inst_11404 = (state_11422[(7)]);
var inst_11404__$1 = (state_11422[(2)]);
var inst_11405 = (inst_11404__$1 == null);
var inst_11406 = cljs.core.not.call(null,inst_11405);
var state_11422__$1 = (function (){var statearr_11424 = state_11422;
(statearr_11424[(7)] = inst_11404__$1);

return statearr_11424;
})();
if(inst_11406){
var statearr_11425_11444 = state_11422__$1;
(statearr_11425_11444[(1)] = (8));

} else {
var statearr_11426_11445 = state_11422__$1;
(statearr_11426_11445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11423 === (1))){
var inst_11399 = (0);
var state_11422__$1 = (function (){var statearr_11427 = state_11422;
(statearr_11427[(8)] = inst_11399);

return statearr_11427;
})();
var statearr_11428_11446 = state_11422__$1;
(statearr_11428_11446[(2)] = null);

(statearr_11428_11446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11423 === (4))){
var state_11422__$1 = state_11422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11422__$1,(7),ch);
} else {
if((state_val_11423 === (6))){
var inst_11417 = (state_11422[(2)]);
var state_11422__$1 = state_11422;
var statearr_11429_11447 = state_11422__$1;
(statearr_11429_11447[(2)] = inst_11417);

(statearr_11429_11447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11423 === (3))){
var inst_11419 = (state_11422[(2)]);
var inst_11420 = cljs.core.async.close_BANG_.call(null,out);
var state_11422__$1 = (function (){var statearr_11430 = state_11422;
(statearr_11430[(9)] = inst_11419);

return statearr_11430;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11422__$1,inst_11420);
} else {
if((state_val_11423 === (2))){
var inst_11399 = (state_11422[(8)]);
var inst_11401 = (inst_11399 < n);
var state_11422__$1 = state_11422;
if(cljs.core.truth_(inst_11401)){
var statearr_11431_11448 = state_11422__$1;
(statearr_11431_11448[(1)] = (4));

} else {
var statearr_11432_11449 = state_11422__$1;
(statearr_11432_11449[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11423 === (11))){
var inst_11399 = (state_11422[(8)]);
var inst_11409 = (state_11422[(2)]);
var inst_11410 = (inst_11399 + (1));
var inst_11399__$1 = inst_11410;
var state_11422__$1 = (function (){var statearr_11433 = state_11422;
(statearr_11433[(8)] = inst_11399__$1);

(statearr_11433[(10)] = inst_11409);

return statearr_11433;
})();
var statearr_11434_11450 = state_11422__$1;
(statearr_11434_11450[(2)] = null);

(statearr_11434_11450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11423 === (9))){
var state_11422__$1 = state_11422;
var statearr_11435_11451 = state_11422__$1;
(statearr_11435_11451[(2)] = null);

(statearr_11435_11451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11423 === (5))){
var state_11422__$1 = state_11422;
var statearr_11436_11452 = state_11422__$1;
(statearr_11436_11452[(2)] = null);

(statearr_11436_11452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11423 === (10))){
var inst_11414 = (state_11422[(2)]);
var state_11422__$1 = state_11422;
var statearr_11437_11453 = state_11422__$1;
(statearr_11437_11453[(2)] = inst_11414);

(statearr_11437_11453[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11423 === (8))){
var inst_11404 = (state_11422[(7)]);
var state_11422__$1 = state_11422;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11422__$1,(11),out,inst_11404);
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
});})(c__3069__auto___11443,out))
;
return ((function (switch__3046__auto__,c__3069__auto___11443,out){
return (function() {
var cljs$core$async$state_machine__3047__auto__ = null;
var cljs$core$async$state_machine__3047__auto____0 = (function (){
var statearr_11438 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11438[(0)] = cljs$core$async$state_machine__3047__auto__);

(statearr_11438[(1)] = (1));

return statearr_11438;
});
var cljs$core$async$state_machine__3047__auto____1 = (function (state_11422){
while(true){
var ret_value__3048__auto__ = (function (){try{while(true){
var result__3049__auto__ = switch__3046__auto__.call(null,state_11422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3049__auto__;
}
break;
}
}catch (e11439){if((e11439 instanceof Object)){
var ex__3050__auto__ = e11439;
var statearr_11440_11454 = state_11422;
(statearr_11440_11454[(5)] = ex__3050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11455 = state_11422;
state_11422 = G__11455;
continue;
} else {
return ret_value__3048__auto__;
}
break;
}
});
cljs$core$async$state_machine__3047__auto__ = function(state_11422){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3047__auto____1.call(this,state_11422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3047__auto____0;
cljs$core$async$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3047__auto____1;
return cljs$core$async$state_machine__3047__auto__;
})()
;})(switch__3046__auto__,c__3069__auto___11443,out))
})();
var state__3071__auto__ = (function (){var statearr_11441 = f__3070__auto__.call(null);
(statearr_11441[(6)] = c__3069__auto___11443);

return statearr_11441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3071__auto__);
});})(c__3069__auto___11443,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11457 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11457 = (function (f,ch,meta11458){
this.f = f;
this.ch = ch;
this.meta11458 = meta11458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11459,meta11458__$1){
var self__ = this;
var _11459__$1 = this;
return (new cljs.core.async.t_cljs$core$async11457(self__.f,self__.ch,meta11458__$1));
});

cljs.core.async.t_cljs$core$async11457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11459){
var self__ = this;
var _11459__$1 = this;
return self__.meta11458;
});

cljs.core.async.t_cljs$core$async11457.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11457.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11457.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11457.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11457.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11460 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11460 = (function (f,ch,meta11458,_,fn1,meta11461){
this.f = f;
this.ch = ch;
this.meta11458 = meta11458;
this._ = _;
this.fn1 = fn1;
this.meta11461 = meta11461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11462,meta11461__$1){
var self__ = this;
var _11462__$1 = this;
return (new cljs.core.async.t_cljs$core$async11460(self__.f,self__.ch,self__.meta11458,self__._,self__.fn1,meta11461__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async11460.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11462){
var self__ = this;
var _11462__$1 = this;
return self__.meta11461;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11460.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11460.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11460.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11460.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11456_SHARP_){
return f1.call(null,(((p1__11456_SHARP_ == null))?null:self__.f.call(null,p1__11456_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async11460.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11458","meta11458",1919260994,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11457","cljs.core.async/t_cljs$core$async11457",1573131842,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11461","meta11461",-1495686186,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11460.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11460.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11460";

cljs.core.async.t_cljs$core$async11460.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async11460");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11460.
 */
cljs.core.async.__GT_t_cljs$core$async11460 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11460(f__$1,ch__$1,meta11458__$1,___$2,fn1__$1,meta11461){
return (new cljs.core.async.t_cljs$core$async11460(f__$1,ch__$1,meta11458__$1,___$2,fn1__$1,meta11461));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async11460(self__.f,self__.ch,self__.meta11458,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async11457.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11457.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async11457.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11458","meta11458",1919260994,null)], null);
});

cljs.core.async.t_cljs$core$async11457.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11457.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11457";

cljs.core.async.t_cljs$core$async11457.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async11457");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11457.
 */
cljs.core.async.__GT_t_cljs$core$async11457 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11457(f__$1,ch__$1,meta11458){
return (new cljs.core.async.t_cljs$core$async11457(f__$1,ch__$1,meta11458));
});

}

return (new cljs.core.async.t_cljs$core$async11457(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11463 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11463 = (function (f,ch,meta11464){
this.f = f;
this.ch = ch;
this.meta11464 = meta11464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11465,meta11464__$1){
var self__ = this;
var _11465__$1 = this;
return (new cljs.core.async.t_cljs$core$async11463(self__.f,self__.ch,meta11464__$1));
});

cljs.core.async.t_cljs$core$async11463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11465){
var self__ = this;
var _11465__$1 = this;
return self__.meta11464;
});

cljs.core.async.t_cljs$core$async11463.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11463.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11463.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11463.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11463.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11463.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async11463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11464","meta11464",-979411135,null)], null);
});

cljs.core.async.t_cljs$core$async11463.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11463";

cljs.core.async.t_cljs$core$async11463.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async11463");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11463.
 */
cljs.core.async.__GT_t_cljs$core$async11463 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11463(f__$1,ch__$1,meta11464){
return (new cljs.core.async.t_cljs$core$async11463(f__$1,ch__$1,meta11464));
});

}

return (new cljs.core.async.t_cljs$core$async11463(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11466 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11466 = (function (p,ch,meta11467){
this.p = p;
this.ch = ch;
this.meta11467 = meta11467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11468,meta11467__$1){
var self__ = this;
var _11468__$1 = this;
return (new cljs.core.async.t_cljs$core$async11466(self__.p,self__.ch,meta11467__$1));
});

cljs.core.async.t_cljs$core$async11466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11468){
var self__ = this;
var _11468__$1 = this;
return self__.meta11467;
});

cljs.core.async.t_cljs$core$async11466.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11466.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11466.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11466.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11466.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11466.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11466.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async11466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11467","meta11467",-635040820,null)], null);
});

cljs.core.async.t_cljs$core$async11466.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11466";

cljs.core.async.t_cljs$core$async11466.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async11466");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11466.
 */
cljs.core.async.__GT_t_cljs$core$async11466 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11466(p__$1,ch__$1,meta11467){
return (new cljs.core.async.t_cljs$core$async11466(p__$1,ch__$1,meta11467));
});

}

return (new cljs.core.async.t_cljs$core$async11466(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11470 = arguments.length;
switch (G__11470) {
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
var c__3069__auto___11510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3069__auto___11510,out){
return (function (){
var f__3070__auto__ = (function (){var switch__3046__auto__ = ((function (c__3069__auto___11510,out){
return (function (state_11491){
var state_val_11492 = (state_11491[(1)]);
if((state_val_11492 === (7))){
var inst_11487 = (state_11491[(2)]);
var state_11491__$1 = state_11491;
var statearr_11493_11511 = state_11491__$1;
(statearr_11493_11511[(2)] = inst_11487);

(statearr_11493_11511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11492 === (1))){
var state_11491__$1 = state_11491;
var statearr_11494_11512 = state_11491__$1;
(statearr_11494_11512[(2)] = null);

(statearr_11494_11512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11492 === (4))){
var inst_11473 = (state_11491[(7)]);
var inst_11473__$1 = (state_11491[(2)]);
var inst_11474 = (inst_11473__$1 == null);
var state_11491__$1 = (function (){var statearr_11495 = state_11491;
(statearr_11495[(7)] = inst_11473__$1);

return statearr_11495;
})();
if(cljs.core.truth_(inst_11474)){
var statearr_11496_11513 = state_11491__$1;
(statearr_11496_11513[(1)] = (5));

} else {
var statearr_11497_11514 = state_11491__$1;
(statearr_11497_11514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11492 === (6))){
var inst_11473 = (state_11491[(7)]);
var inst_11478 = p.call(null,inst_11473);
var state_11491__$1 = state_11491;
if(cljs.core.truth_(inst_11478)){
var statearr_11498_11515 = state_11491__$1;
(statearr_11498_11515[(1)] = (8));

} else {
var statearr_11499_11516 = state_11491__$1;
(statearr_11499_11516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11492 === (3))){
var inst_11489 = (state_11491[(2)]);
var state_11491__$1 = state_11491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11491__$1,inst_11489);
} else {
if((state_val_11492 === (2))){
var state_11491__$1 = state_11491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11491__$1,(4),ch);
} else {
if((state_val_11492 === (11))){
var inst_11481 = (state_11491[(2)]);
var state_11491__$1 = state_11491;
var statearr_11500_11517 = state_11491__$1;
(statearr_11500_11517[(2)] = inst_11481);

(statearr_11500_11517[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11492 === (9))){
var state_11491__$1 = state_11491;
var statearr_11501_11518 = state_11491__$1;
(statearr_11501_11518[(2)] = null);

(statearr_11501_11518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11492 === (5))){
var inst_11476 = cljs.core.async.close_BANG_.call(null,out);
var state_11491__$1 = state_11491;
var statearr_11502_11519 = state_11491__$1;
(statearr_11502_11519[(2)] = inst_11476);

(statearr_11502_11519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11492 === (10))){
var inst_11484 = (state_11491[(2)]);
var state_11491__$1 = (function (){var statearr_11503 = state_11491;
(statearr_11503[(8)] = inst_11484);

return statearr_11503;
})();
var statearr_11504_11520 = state_11491__$1;
(statearr_11504_11520[(2)] = null);

(statearr_11504_11520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11492 === (8))){
var inst_11473 = (state_11491[(7)]);
var state_11491__$1 = state_11491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11491__$1,(11),out,inst_11473);
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
});})(c__3069__auto___11510,out))
;
return ((function (switch__3046__auto__,c__3069__auto___11510,out){
return (function() {
var cljs$core$async$state_machine__3047__auto__ = null;
var cljs$core$async$state_machine__3047__auto____0 = (function (){
var statearr_11505 = [null,null,null,null,null,null,null,null,null];
(statearr_11505[(0)] = cljs$core$async$state_machine__3047__auto__);

(statearr_11505[(1)] = (1));

return statearr_11505;
});
var cljs$core$async$state_machine__3047__auto____1 = (function (state_11491){
while(true){
var ret_value__3048__auto__ = (function (){try{while(true){
var result__3049__auto__ = switch__3046__auto__.call(null,state_11491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3049__auto__;
}
break;
}
}catch (e11506){if((e11506 instanceof Object)){
var ex__3050__auto__ = e11506;
var statearr_11507_11521 = state_11491;
(statearr_11507_11521[(5)] = ex__3050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11522 = state_11491;
state_11491 = G__11522;
continue;
} else {
return ret_value__3048__auto__;
}
break;
}
});
cljs$core$async$state_machine__3047__auto__ = function(state_11491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3047__auto____1.call(this,state_11491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3047__auto____0;
cljs$core$async$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3047__auto____1;
return cljs$core$async$state_machine__3047__auto__;
})()
;})(switch__3046__auto__,c__3069__auto___11510,out))
})();
var state__3071__auto__ = (function (){var statearr_11508 = f__3070__auto__.call(null);
(statearr_11508[(6)] = c__3069__auto___11510);

return statearr_11508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3071__auto__);
});})(c__3069__auto___11510,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__11524 = arguments.length;
switch (G__11524) {
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
var c__3069__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3069__auto__){
return (function (){
var f__3070__auto__ = (function (){var switch__3046__auto__ = ((function (c__3069__auto__){
return (function (state_11587){
var state_val_11588 = (state_11587[(1)]);
if((state_val_11588 === (7))){
var inst_11583 = (state_11587[(2)]);
var state_11587__$1 = state_11587;
var statearr_11589_11627 = state_11587__$1;
(statearr_11589_11627[(2)] = inst_11583);

(statearr_11589_11627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11588 === (20))){
var inst_11553 = (state_11587[(7)]);
var inst_11564 = (state_11587[(2)]);
var inst_11565 = cljs.core.next.call(null,inst_11553);
var inst_11539 = inst_11565;
var inst_11540 = null;
var inst_11541 = (0);
var inst_11542 = (0);
var state_11587__$1 = (function (){var statearr_11590 = state_11587;
(statearr_11590[(8)] = inst_11540);

(statearr_11590[(9)] = inst_11539);

(statearr_11590[(10)] = inst_11564);

(statearr_11590[(11)] = inst_11541);

(statearr_11590[(12)] = inst_11542);

return statearr_11590;
})();
var statearr_11591_11628 = state_11587__$1;
(statearr_11591_11628[(2)] = null);

(statearr_11591_11628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11588 === (1))){
var state_11587__$1 = state_11587;
var statearr_11592_11629 = state_11587__$1;
(statearr_11592_11629[(2)] = null);

(statearr_11592_11629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11588 === (4))){
var inst_11528 = (state_11587[(13)]);
var inst_11528__$1 = (state_11587[(2)]);
var inst_11529 = (inst_11528__$1 == null);
var state_11587__$1 = (function (){var statearr_11593 = state_11587;
(statearr_11593[(13)] = inst_11528__$1);

return statearr_11593;
})();
if(cljs.core.truth_(inst_11529)){
var statearr_11594_11630 = state_11587__$1;
(statearr_11594_11630[(1)] = (5));

} else {
var statearr_11595_11631 = state_11587__$1;
(statearr_11595_11631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11588 === (15))){
var state_11587__$1 = state_11587;
var statearr_11599_11632 = state_11587__$1;
(statearr_11599_11632[(2)] = null);

(statearr_11599_11632[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11588 === (21))){
var state_11587__$1 = state_11587;
var statearr_11600_11633 = state_11587__$1;
(statearr_11600_11633[(2)] = null);

(statearr_11600_11633[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11588 === (13))){
var inst_11540 = (state_11587[(8)]);
var inst_11539 = (state_11587[(9)]);
var inst_11541 = (state_11587[(11)]);
var inst_11542 = (state_11587[(12)]);
var inst_11549 = (state_11587[(2)]);
var inst_11550 = (inst_11542 + (1));
var tmp11596 = inst_11540;
var tmp11597 = inst_11539;
var tmp11598 = inst_11541;
var inst_11539__$1 = tmp11597;
var inst_11540__$1 = tmp11596;
var inst_11541__$1 = tmp11598;
var inst_11542__$1 = inst_11550;
var state_11587__$1 = (function (){var statearr_11601 = state_11587;
(statearr_11601[(14)] = inst_11549);

(statearr_11601[(8)] = inst_11540__$1);

(statearr_11601[(9)] = inst_11539__$1);

(statearr_11601[(11)] = inst_11541__$1);

(statearr_11601[(12)] = inst_11542__$1);

return statearr_11601;
})();
var statearr_11602_11634 = state_11587__$1;
(statearr_11602_11634[(2)] = null);

(statearr_11602_11634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11588 === (22))){
var state_11587__$1 = state_11587;
var statearr_11603_11635 = state_11587__$1;
(statearr_11603_11635[(2)] = null);

(statearr_11603_11635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11588 === (6))){
var inst_11528 = (state_11587[(13)]);
var inst_11537 = f.call(null,inst_11528);
var inst_11538 = cljs.core.seq.call(null,inst_11537);
var inst_11539 = inst_11538;
var inst_11540 = null;
var inst_11541 = (0);
var inst_11542 = (0);
var state_11587__$1 = (function (){var statearr_11604 = state_11587;
(statearr_11604[(8)] = inst_11540);

(statearr_11604[(9)] = inst_11539);

(statearr_11604[(11)] = inst_11541);

(statearr_11604[(12)] = inst_11542);

return statearr_11604;
})();
var statearr_11605_11636 = state_11587__$1;
(statearr_11605_11636[(2)] = null);

(statearr_11605_11636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11588 === (17))){
var inst_11553 = (state_11587[(7)]);
var inst_11557 = cljs.core.chunk_first.call(null,inst_11553);
var inst_11558 = cljs.core.chunk_rest.call(null,inst_11553);
var inst_11559 = cljs.core.count.call(null,inst_11557);
var inst_11539 = inst_11558;
var inst_11540 = inst_11557;
var inst_11541 = inst_11559;
var inst_11542 = (0);
var state_11587__$1 = (function (){var statearr_11606 = state_11587;
(statearr_11606[(8)] = inst_11540);

(statearr_11606[(9)] = inst_11539);

(statearr_11606[(11)] = inst_11541);

(statearr_11606[(12)] = inst_11542);

return statearr_11606;
})();
var statearr_11607_11637 = state_11587__$1;
(statearr_11607_11637[(2)] = null);

(statearr_11607_11637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11588 === (3))){
var inst_11585 = (state_11587[(2)]);
var state_11587__$1 = state_11587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11587__$1,inst_11585);
} else {
if((state_val_11588 === (12))){
var inst_11573 = (state_11587[(2)]);
var state_11587__$1 = state_11587;
var statearr_11608_11638 = state_11587__$1;
(statearr_11608_11638[(2)] = inst_11573);

(statearr_11608_11638[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11588 === (2))){
var state_11587__$1 = state_11587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11587__$1,(4),in$);
} else {
if((state_val_11588 === (23))){
var inst_11581 = (state_11587[(2)]);
var state_11587__$1 = state_11587;
var statearr_11609_11639 = state_11587__$1;
(statearr_11609_11639[(2)] = inst_11581);

(statearr_11609_11639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11588 === (19))){
var inst_11568 = (state_11587[(2)]);
var state_11587__$1 = state_11587;
var statearr_11610_11640 = state_11587__$1;
(statearr_11610_11640[(2)] = inst_11568);

(statearr_11610_11640[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11588 === (11))){
var inst_11539 = (state_11587[(9)]);
var inst_11553 = (state_11587[(7)]);
var inst_11553__$1 = cljs.core.seq.call(null,inst_11539);
var state_11587__$1 = (function (){var statearr_11611 = state_11587;
(statearr_11611[(7)] = inst_11553__$1);

return statearr_11611;
})();
if(inst_11553__$1){
var statearr_11612_11641 = state_11587__$1;
(statearr_11612_11641[(1)] = (14));

} else {
var statearr_11613_11642 = state_11587__$1;
(statearr_11613_11642[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11588 === (9))){
var inst_11575 = (state_11587[(2)]);
var inst_11576 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11587__$1 = (function (){var statearr_11614 = state_11587;
(statearr_11614[(15)] = inst_11575);

return statearr_11614;
})();
if(cljs.core.truth_(inst_11576)){
var statearr_11615_11643 = state_11587__$1;
(statearr_11615_11643[(1)] = (21));

} else {
var statearr_11616_11644 = state_11587__$1;
(statearr_11616_11644[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11588 === (5))){
var inst_11531 = cljs.core.async.close_BANG_.call(null,out);
var state_11587__$1 = state_11587;
var statearr_11617_11645 = state_11587__$1;
(statearr_11617_11645[(2)] = inst_11531);

(statearr_11617_11645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11588 === (14))){
var inst_11553 = (state_11587[(7)]);
var inst_11555 = cljs.core.chunked_seq_QMARK_.call(null,inst_11553);
var state_11587__$1 = state_11587;
if(inst_11555){
var statearr_11618_11646 = state_11587__$1;
(statearr_11618_11646[(1)] = (17));

} else {
var statearr_11619_11647 = state_11587__$1;
(statearr_11619_11647[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11588 === (16))){
var inst_11571 = (state_11587[(2)]);
var state_11587__$1 = state_11587;
var statearr_11620_11648 = state_11587__$1;
(statearr_11620_11648[(2)] = inst_11571);

(statearr_11620_11648[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11588 === (10))){
var inst_11540 = (state_11587[(8)]);
var inst_11542 = (state_11587[(12)]);
var inst_11547 = cljs.core._nth.call(null,inst_11540,inst_11542);
var state_11587__$1 = state_11587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11587__$1,(13),out,inst_11547);
} else {
if((state_val_11588 === (18))){
var inst_11553 = (state_11587[(7)]);
var inst_11562 = cljs.core.first.call(null,inst_11553);
var state_11587__$1 = state_11587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11587__$1,(20),out,inst_11562);
} else {
if((state_val_11588 === (8))){
var inst_11541 = (state_11587[(11)]);
var inst_11542 = (state_11587[(12)]);
var inst_11544 = (inst_11542 < inst_11541);
var inst_11545 = inst_11544;
var state_11587__$1 = state_11587;
if(cljs.core.truth_(inst_11545)){
var statearr_11621_11649 = state_11587__$1;
(statearr_11621_11649[(1)] = (10));

} else {
var statearr_11622_11650 = state_11587__$1;
(statearr_11622_11650[(1)] = (11));

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
});})(c__3069__auto__))
;
return ((function (switch__3046__auto__,c__3069__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__3047__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__3047__auto____0 = (function (){
var statearr_11623 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11623[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__3047__auto__);

(statearr_11623[(1)] = (1));

return statearr_11623;
});
var cljs$core$async$mapcat_STAR__$_state_machine__3047__auto____1 = (function (state_11587){
while(true){
var ret_value__3048__auto__ = (function (){try{while(true){
var result__3049__auto__ = switch__3046__auto__.call(null,state_11587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3049__auto__;
}
break;
}
}catch (e11624){if((e11624 instanceof Object)){
var ex__3050__auto__ = e11624;
var statearr_11625_11651 = state_11587;
(statearr_11625_11651[(5)] = ex__3050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11652 = state_11587;
state_11587 = G__11652;
continue;
} else {
return ret_value__3048__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__3047__auto__ = function(state_11587){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__3047__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__3047__auto____1.call(this,state_11587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__3047__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__3047__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__3047__auto__;
})()
;})(switch__3046__auto__,c__3069__auto__))
})();
var state__3071__auto__ = (function (){var statearr_11626 = f__3070__auto__.call(null);
(statearr_11626[(6)] = c__3069__auto__);

return statearr_11626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3071__auto__);
});})(c__3069__auto__))
);

return c__3069__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__11654 = arguments.length;
switch (G__11654) {
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
var G__11657 = arguments.length;
switch (G__11657) {
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
var G__11660 = arguments.length;
switch (G__11660) {
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
var c__3069__auto___11707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3069__auto___11707,out){
return (function (){
var f__3070__auto__ = (function (){var switch__3046__auto__ = ((function (c__3069__auto___11707,out){
return (function (state_11684){
var state_val_11685 = (state_11684[(1)]);
if((state_val_11685 === (7))){
var inst_11679 = (state_11684[(2)]);
var state_11684__$1 = state_11684;
var statearr_11686_11708 = state_11684__$1;
(statearr_11686_11708[(2)] = inst_11679);

(statearr_11686_11708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11685 === (1))){
var inst_11661 = null;
var state_11684__$1 = (function (){var statearr_11687 = state_11684;
(statearr_11687[(7)] = inst_11661);

return statearr_11687;
})();
var statearr_11688_11709 = state_11684__$1;
(statearr_11688_11709[(2)] = null);

(statearr_11688_11709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11685 === (4))){
var inst_11664 = (state_11684[(8)]);
var inst_11664__$1 = (state_11684[(2)]);
var inst_11665 = (inst_11664__$1 == null);
var inst_11666 = cljs.core.not.call(null,inst_11665);
var state_11684__$1 = (function (){var statearr_11689 = state_11684;
(statearr_11689[(8)] = inst_11664__$1);

return statearr_11689;
})();
if(inst_11666){
var statearr_11690_11710 = state_11684__$1;
(statearr_11690_11710[(1)] = (5));

} else {
var statearr_11691_11711 = state_11684__$1;
(statearr_11691_11711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11685 === (6))){
var state_11684__$1 = state_11684;
var statearr_11692_11712 = state_11684__$1;
(statearr_11692_11712[(2)] = null);

(statearr_11692_11712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11685 === (3))){
var inst_11681 = (state_11684[(2)]);
var inst_11682 = cljs.core.async.close_BANG_.call(null,out);
var state_11684__$1 = (function (){var statearr_11693 = state_11684;
(statearr_11693[(9)] = inst_11681);

return statearr_11693;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11684__$1,inst_11682);
} else {
if((state_val_11685 === (2))){
var state_11684__$1 = state_11684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11684__$1,(4),ch);
} else {
if((state_val_11685 === (11))){
var inst_11664 = (state_11684[(8)]);
var inst_11673 = (state_11684[(2)]);
var inst_11661 = inst_11664;
var state_11684__$1 = (function (){var statearr_11694 = state_11684;
(statearr_11694[(10)] = inst_11673);

(statearr_11694[(7)] = inst_11661);

return statearr_11694;
})();
var statearr_11695_11713 = state_11684__$1;
(statearr_11695_11713[(2)] = null);

(statearr_11695_11713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11685 === (9))){
var inst_11664 = (state_11684[(8)]);
var state_11684__$1 = state_11684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11684__$1,(11),out,inst_11664);
} else {
if((state_val_11685 === (5))){
var inst_11664 = (state_11684[(8)]);
var inst_11661 = (state_11684[(7)]);
var inst_11668 = cljs.core._EQ_.call(null,inst_11664,inst_11661);
var state_11684__$1 = state_11684;
if(inst_11668){
var statearr_11697_11714 = state_11684__$1;
(statearr_11697_11714[(1)] = (8));

} else {
var statearr_11698_11715 = state_11684__$1;
(statearr_11698_11715[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11685 === (10))){
var inst_11676 = (state_11684[(2)]);
var state_11684__$1 = state_11684;
var statearr_11699_11716 = state_11684__$1;
(statearr_11699_11716[(2)] = inst_11676);

(statearr_11699_11716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11685 === (8))){
var inst_11661 = (state_11684[(7)]);
var tmp11696 = inst_11661;
var inst_11661__$1 = tmp11696;
var state_11684__$1 = (function (){var statearr_11700 = state_11684;
(statearr_11700[(7)] = inst_11661__$1);

return statearr_11700;
})();
var statearr_11701_11717 = state_11684__$1;
(statearr_11701_11717[(2)] = null);

(statearr_11701_11717[(1)] = (2));


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
});})(c__3069__auto___11707,out))
;
return ((function (switch__3046__auto__,c__3069__auto___11707,out){
return (function() {
var cljs$core$async$state_machine__3047__auto__ = null;
var cljs$core$async$state_machine__3047__auto____0 = (function (){
var statearr_11702 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11702[(0)] = cljs$core$async$state_machine__3047__auto__);

(statearr_11702[(1)] = (1));

return statearr_11702;
});
var cljs$core$async$state_machine__3047__auto____1 = (function (state_11684){
while(true){
var ret_value__3048__auto__ = (function (){try{while(true){
var result__3049__auto__ = switch__3046__auto__.call(null,state_11684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3049__auto__;
}
break;
}
}catch (e11703){if((e11703 instanceof Object)){
var ex__3050__auto__ = e11703;
var statearr_11704_11718 = state_11684;
(statearr_11704_11718[(5)] = ex__3050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11719 = state_11684;
state_11684 = G__11719;
continue;
} else {
return ret_value__3048__auto__;
}
break;
}
});
cljs$core$async$state_machine__3047__auto__ = function(state_11684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3047__auto____1.call(this,state_11684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3047__auto____0;
cljs$core$async$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3047__auto____1;
return cljs$core$async$state_machine__3047__auto__;
})()
;})(switch__3046__auto__,c__3069__auto___11707,out))
})();
var state__3071__auto__ = (function (){var statearr_11705 = f__3070__auto__.call(null);
(statearr_11705[(6)] = c__3069__auto___11707);

return statearr_11705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3071__auto__);
});})(c__3069__auto___11707,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__11721 = arguments.length;
switch (G__11721) {
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
var c__3069__auto___11787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3069__auto___11787,out){
return (function (){
var f__3070__auto__ = (function (){var switch__3046__auto__ = ((function (c__3069__auto___11787,out){
return (function (state_11759){
var state_val_11760 = (state_11759[(1)]);
if((state_val_11760 === (7))){
var inst_11755 = (state_11759[(2)]);
var state_11759__$1 = state_11759;
var statearr_11761_11788 = state_11759__$1;
(statearr_11761_11788[(2)] = inst_11755);

(statearr_11761_11788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11760 === (1))){
var inst_11722 = (new Array(n));
var inst_11723 = inst_11722;
var inst_11724 = (0);
var state_11759__$1 = (function (){var statearr_11762 = state_11759;
(statearr_11762[(7)] = inst_11723);

(statearr_11762[(8)] = inst_11724);

return statearr_11762;
})();
var statearr_11763_11789 = state_11759__$1;
(statearr_11763_11789[(2)] = null);

(statearr_11763_11789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11760 === (4))){
var inst_11727 = (state_11759[(9)]);
var inst_11727__$1 = (state_11759[(2)]);
var inst_11728 = (inst_11727__$1 == null);
var inst_11729 = cljs.core.not.call(null,inst_11728);
var state_11759__$1 = (function (){var statearr_11764 = state_11759;
(statearr_11764[(9)] = inst_11727__$1);

return statearr_11764;
})();
if(inst_11729){
var statearr_11765_11790 = state_11759__$1;
(statearr_11765_11790[(1)] = (5));

} else {
var statearr_11766_11791 = state_11759__$1;
(statearr_11766_11791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11760 === (15))){
var inst_11749 = (state_11759[(2)]);
var state_11759__$1 = state_11759;
var statearr_11767_11792 = state_11759__$1;
(statearr_11767_11792[(2)] = inst_11749);

(statearr_11767_11792[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11760 === (13))){
var state_11759__$1 = state_11759;
var statearr_11768_11793 = state_11759__$1;
(statearr_11768_11793[(2)] = null);

(statearr_11768_11793[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11760 === (6))){
var inst_11724 = (state_11759[(8)]);
var inst_11745 = (inst_11724 > (0));
var state_11759__$1 = state_11759;
if(cljs.core.truth_(inst_11745)){
var statearr_11769_11794 = state_11759__$1;
(statearr_11769_11794[(1)] = (12));

} else {
var statearr_11770_11795 = state_11759__$1;
(statearr_11770_11795[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11760 === (3))){
var inst_11757 = (state_11759[(2)]);
var state_11759__$1 = state_11759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11759__$1,inst_11757);
} else {
if((state_val_11760 === (12))){
var inst_11723 = (state_11759[(7)]);
var inst_11747 = cljs.core.vec.call(null,inst_11723);
var state_11759__$1 = state_11759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11759__$1,(15),out,inst_11747);
} else {
if((state_val_11760 === (2))){
var state_11759__$1 = state_11759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11759__$1,(4),ch);
} else {
if((state_val_11760 === (11))){
var inst_11739 = (state_11759[(2)]);
var inst_11740 = (new Array(n));
var inst_11723 = inst_11740;
var inst_11724 = (0);
var state_11759__$1 = (function (){var statearr_11771 = state_11759;
(statearr_11771[(7)] = inst_11723);

(statearr_11771[(8)] = inst_11724);

(statearr_11771[(10)] = inst_11739);

return statearr_11771;
})();
var statearr_11772_11796 = state_11759__$1;
(statearr_11772_11796[(2)] = null);

(statearr_11772_11796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11760 === (9))){
var inst_11723 = (state_11759[(7)]);
var inst_11737 = cljs.core.vec.call(null,inst_11723);
var state_11759__$1 = state_11759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11759__$1,(11),out,inst_11737);
} else {
if((state_val_11760 === (5))){
var inst_11723 = (state_11759[(7)]);
var inst_11732 = (state_11759[(11)]);
var inst_11727 = (state_11759[(9)]);
var inst_11724 = (state_11759[(8)]);
var inst_11731 = (inst_11723[inst_11724] = inst_11727);
var inst_11732__$1 = (inst_11724 + (1));
var inst_11733 = (inst_11732__$1 < n);
var state_11759__$1 = (function (){var statearr_11773 = state_11759;
(statearr_11773[(11)] = inst_11732__$1);

(statearr_11773[(12)] = inst_11731);

return statearr_11773;
})();
if(cljs.core.truth_(inst_11733)){
var statearr_11774_11797 = state_11759__$1;
(statearr_11774_11797[(1)] = (8));

} else {
var statearr_11775_11798 = state_11759__$1;
(statearr_11775_11798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11760 === (14))){
var inst_11752 = (state_11759[(2)]);
var inst_11753 = cljs.core.async.close_BANG_.call(null,out);
var state_11759__$1 = (function (){var statearr_11777 = state_11759;
(statearr_11777[(13)] = inst_11752);

return statearr_11777;
})();
var statearr_11778_11799 = state_11759__$1;
(statearr_11778_11799[(2)] = inst_11753);

(statearr_11778_11799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11760 === (10))){
var inst_11743 = (state_11759[(2)]);
var state_11759__$1 = state_11759;
var statearr_11779_11800 = state_11759__$1;
(statearr_11779_11800[(2)] = inst_11743);

(statearr_11779_11800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11760 === (8))){
var inst_11723 = (state_11759[(7)]);
var inst_11732 = (state_11759[(11)]);
var tmp11776 = inst_11723;
var inst_11723__$1 = tmp11776;
var inst_11724 = inst_11732;
var state_11759__$1 = (function (){var statearr_11780 = state_11759;
(statearr_11780[(7)] = inst_11723__$1);

(statearr_11780[(8)] = inst_11724);

return statearr_11780;
})();
var statearr_11781_11801 = state_11759__$1;
(statearr_11781_11801[(2)] = null);

(statearr_11781_11801[(1)] = (2));


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
});})(c__3069__auto___11787,out))
;
return ((function (switch__3046__auto__,c__3069__auto___11787,out){
return (function() {
var cljs$core$async$state_machine__3047__auto__ = null;
var cljs$core$async$state_machine__3047__auto____0 = (function (){
var statearr_11782 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11782[(0)] = cljs$core$async$state_machine__3047__auto__);

(statearr_11782[(1)] = (1));

return statearr_11782;
});
var cljs$core$async$state_machine__3047__auto____1 = (function (state_11759){
while(true){
var ret_value__3048__auto__ = (function (){try{while(true){
var result__3049__auto__ = switch__3046__auto__.call(null,state_11759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3049__auto__;
}
break;
}
}catch (e11783){if((e11783 instanceof Object)){
var ex__3050__auto__ = e11783;
var statearr_11784_11802 = state_11759;
(statearr_11784_11802[(5)] = ex__3050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11803 = state_11759;
state_11759 = G__11803;
continue;
} else {
return ret_value__3048__auto__;
}
break;
}
});
cljs$core$async$state_machine__3047__auto__ = function(state_11759){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3047__auto____1.call(this,state_11759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3047__auto____0;
cljs$core$async$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3047__auto____1;
return cljs$core$async$state_machine__3047__auto__;
})()
;})(switch__3046__auto__,c__3069__auto___11787,out))
})();
var state__3071__auto__ = (function (){var statearr_11785 = f__3070__auto__.call(null);
(statearr_11785[(6)] = c__3069__auto___11787);

return statearr_11785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3071__auto__);
});})(c__3069__auto___11787,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__11805 = arguments.length;
switch (G__11805) {
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
var c__3069__auto___11875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3069__auto___11875,out){
return (function (){
var f__3070__auto__ = (function (){var switch__3046__auto__ = ((function (c__3069__auto___11875,out){
return (function (state_11847){
var state_val_11848 = (state_11847[(1)]);
if((state_val_11848 === (7))){
var inst_11843 = (state_11847[(2)]);
var state_11847__$1 = state_11847;
var statearr_11849_11876 = state_11847__$1;
(statearr_11849_11876[(2)] = inst_11843);

(statearr_11849_11876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11848 === (1))){
var inst_11806 = [];
var inst_11807 = inst_11806;
var inst_11808 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_11847__$1 = (function (){var statearr_11850 = state_11847;
(statearr_11850[(7)] = inst_11807);

(statearr_11850[(8)] = inst_11808);

return statearr_11850;
})();
var statearr_11851_11877 = state_11847__$1;
(statearr_11851_11877[(2)] = null);

(statearr_11851_11877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11848 === (4))){
var inst_11811 = (state_11847[(9)]);
var inst_11811__$1 = (state_11847[(2)]);
var inst_11812 = (inst_11811__$1 == null);
var inst_11813 = cljs.core.not.call(null,inst_11812);
var state_11847__$1 = (function (){var statearr_11852 = state_11847;
(statearr_11852[(9)] = inst_11811__$1);

return statearr_11852;
})();
if(inst_11813){
var statearr_11853_11878 = state_11847__$1;
(statearr_11853_11878[(1)] = (5));

} else {
var statearr_11854_11879 = state_11847__$1;
(statearr_11854_11879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11848 === (15))){
var inst_11837 = (state_11847[(2)]);
var state_11847__$1 = state_11847;
var statearr_11855_11880 = state_11847__$1;
(statearr_11855_11880[(2)] = inst_11837);

(statearr_11855_11880[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11848 === (13))){
var state_11847__$1 = state_11847;
var statearr_11856_11881 = state_11847__$1;
(statearr_11856_11881[(2)] = null);

(statearr_11856_11881[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11848 === (6))){
var inst_11807 = (state_11847[(7)]);
var inst_11832 = inst_11807.length;
var inst_11833 = (inst_11832 > (0));
var state_11847__$1 = state_11847;
if(cljs.core.truth_(inst_11833)){
var statearr_11857_11882 = state_11847__$1;
(statearr_11857_11882[(1)] = (12));

} else {
var statearr_11858_11883 = state_11847__$1;
(statearr_11858_11883[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11848 === (3))){
var inst_11845 = (state_11847[(2)]);
var state_11847__$1 = state_11847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11847__$1,inst_11845);
} else {
if((state_val_11848 === (12))){
var inst_11807 = (state_11847[(7)]);
var inst_11835 = cljs.core.vec.call(null,inst_11807);
var state_11847__$1 = state_11847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11847__$1,(15),out,inst_11835);
} else {
if((state_val_11848 === (2))){
var state_11847__$1 = state_11847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11847__$1,(4),ch);
} else {
if((state_val_11848 === (11))){
var inst_11811 = (state_11847[(9)]);
var inst_11815 = (state_11847[(10)]);
var inst_11825 = (state_11847[(2)]);
var inst_11826 = [];
var inst_11827 = inst_11826.push(inst_11811);
var inst_11807 = inst_11826;
var inst_11808 = inst_11815;
var state_11847__$1 = (function (){var statearr_11859 = state_11847;
(statearr_11859[(11)] = inst_11825);

(statearr_11859[(12)] = inst_11827);

(statearr_11859[(7)] = inst_11807);

(statearr_11859[(8)] = inst_11808);

return statearr_11859;
})();
var statearr_11860_11884 = state_11847__$1;
(statearr_11860_11884[(2)] = null);

(statearr_11860_11884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11848 === (9))){
var inst_11807 = (state_11847[(7)]);
var inst_11823 = cljs.core.vec.call(null,inst_11807);
var state_11847__$1 = state_11847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11847__$1,(11),out,inst_11823);
} else {
if((state_val_11848 === (5))){
var inst_11811 = (state_11847[(9)]);
var inst_11815 = (state_11847[(10)]);
var inst_11808 = (state_11847[(8)]);
var inst_11815__$1 = f.call(null,inst_11811);
var inst_11816 = cljs.core._EQ_.call(null,inst_11815__$1,inst_11808);
var inst_11817 = cljs.core.keyword_identical_QMARK_.call(null,inst_11808,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_11818 = ((inst_11816) || (inst_11817));
var state_11847__$1 = (function (){var statearr_11861 = state_11847;
(statearr_11861[(10)] = inst_11815__$1);

return statearr_11861;
})();
if(cljs.core.truth_(inst_11818)){
var statearr_11862_11885 = state_11847__$1;
(statearr_11862_11885[(1)] = (8));

} else {
var statearr_11863_11886 = state_11847__$1;
(statearr_11863_11886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11848 === (14))){
var inst_11840 = (state_11847[(2)]);
var inst_11841 = cljs.core.async.close_BANG_.call(null,out);
var state_11847__$1 = (function (){var statearr_11865 = state_11847;
(statearr_11865[(13)] = inst_11840);

return statearr_11865;
})();
var statearr_11866_11887 = state_11847__$1;
(statearr_11866_11887[(2)] = inst_11841);

(statearr_11866_11887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11848 === (10))){
var inst_11830 = (state_11847[(2)]);
var state_11847__$1 = state_11847;
var statearr_11867_11888 = state_11847__$1;
(statearr_11867_11888[(2)] = inst_11830);

(statearr_11867_11888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11848 === (8))){
var inst_11811 = (state_11847[(9)]);
var inst_11815 = (state_11847[(10)]);
var inst_11807 = (state_11847[(7)]);
var inst_11820 = inst_11807.push(inst_11811);
var tmp11864 = inst_11807;
var inst_11807__$1 = tmp11864;
var inst_11808 = inst_11815;
var state_11847__$1 = (function (){var statearr_11868 = state_11847;
(statearr_11868[(14)] = inst_11820);

(statearr_11868[(7)] = inst_11807__$1);

(statearr_11868[(8)] = inst_11808);

return statearr_11868;
})();
var statearr_11869_11889 = state_11847__$1;
(statearr_11869_11889[(2)] = null);

(statearr_11869_11889[(1)] = (2));


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
});})(c__3069__auto___11875,out))
;
return ((function (switch__3046__auto__,c__3069__auto___11875,out){
return (function() {
var cljs$core$async$state_machine__3047__auto__ = null;
var cljs$core$async$state_machine__3047__auto____0 = (function (){
var statearr_11870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11870[(0)] = cljs$core$async$state_machine__3047__auto__);

(statearr_11870[(1)] = (1));

return statearr_11870;
});
var cljs$core$async$state_machine__3047__auto____1 = (function (state_11847){
while(true){
var ret_value__3048__auto__ = (function (){try{while(true){
var result__3049__auto__ = switch__3046__auto__.call(null,state_11847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3049__auto__;
}
break;
}
}catch (e11871){if((e11871 instanceof Object)){
var ex__3050__auto__ = e11871;
var statearr_11872_11890 = state_11847;
(statearr_11872_11890[(5)] = ex__3050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11891 = state_11847;
state_11847 = G__11891;
continue;
} else {
return ret_value__3048__auto__;
}
break;
}
});
cljs$core$async$state_machine__3047__auto__ = function(state_11847){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3047__auto____1.call(this,state_11847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3047__auto____0;
cljs$core$async$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3047__auto____1;
return cljs$core$async$state_machine__3047__auto__;
})()
;})(switch__3046__auto__,c__3069__auto___11875,out))
})();
var state__3071__auto__ = (function (){var statearr_11873 = f__3070__auto__.call(null);
(statearr_11873[(6)] = c__3069__auto___11875);

return statearr_11873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3071__auto__);
});})(c__3069__auto___11875,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
