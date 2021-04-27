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
var G__27302 = arguments.length;
switch (G__27302) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27303 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27303 = (function (f,blockable,meta27304){
this.f = f;
this.blockable = blockable;
this.meta27304 = meta27304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27305,meta27304__$1){
var self__ = this;
var _27305__$1 = this;
return (new cljs.core.async.t_cljs$core$async27303(self__.f,self__.blockable,meta27304__$1));
});

cljs.core.async.t_cljs$core$async27303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27305){
var self__ = this;
var _27305__$1 = this;
return self__.meta27304;
});

cljs.core.async.t_cljs$core$async27303.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27303.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27303.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27303.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27303.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27304","meta27304",-1341231262,null)], null);
});

cljs.core.async.t_cljs$core$async27303.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27303.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27303";

cljs.core.async.t_cljs$core$async27303.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async27303");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27303.
 */
cljs.core.async.__GT_t_cljs$core$async27303 = (function cljs$core$async$__GT_t_cljs$core$async27303(f__$1,blockable__$1,meta27304){
return (new cljs.core.async.t_cljs$core$async27303(f__$1,blockable__$1,meta27304));
});

}

return (new cljs.core.async.t_cljs$core$async27303(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27309 = arguments.length;
switch (G__27309) {
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
var G__27312 = arguments.length;
switch (G__27312) {
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
var G__27315 = arguments.length;
switch (G__27315) {
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
var val_27317 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27317);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27317,ret){
return (function (){
return fn1.call(null,val_27317);
});})(val_27317,ret))
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
var G__27319 = arguments.length;
switch (G__27319) {
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
var n__4518__auto___27321 = n;
var x_27322 = (0);
while(true){
if((x_27322 < n__4518__auto___27321)){
(a[x_27322] = (0));

var G__27323 = (x_27322 + (1));
x_27322 = G__27323;
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

var G__27324 = (i + (1));
i = G__27324;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27325 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27325 = (function (flag,meta27326){
this.flag = flag;
this.meta27326 = meta27326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27327,meta27326__$1){
var self__ = this;
var _27327__$1 = this;
return (new cljs.core.async.t_cljs$core$async27325(self__.flag,meta27326__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27325.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27327){
var self__ = this;
var _27327__$1 = this;
return self__.meta27326;
});})(flag))
;

cljs.core.async.t_cljs$core$async27325.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27325.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27325.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27325.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27325.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27326","meta27326",2108666980,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27325.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27325.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27325";

cljs.core.async.t_cljs$core$async27325.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async27325");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27325.
 */
cljs.core.async.__GT_t_cljs$core$async27325 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27325(flag__$1,meta27326){
return (new cljs.core.async.t_cljs$core$async27325(flag__$1,meta27326));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27325(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27328 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27328 = (function (flag,cb,meta27329){
this.flag = flag;
this.cb = cb;
this.meta27329 = meta27329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27330,meta27329__$1){
var self__ = this;
var _27330__$1 = this;
return (new cljs.core.async.t_cljs$core$async27328(self__.flag,self__.cb,meta27329__$1));
});

cljs.core.async.t_cljs$core$async27328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27330){
var self__ = this;
var _27330__$1 = this;
return self__.meta27329;
});

cljs.core.async.t_cljs$core$async27328.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27328.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27328.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27328.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27329","meta27329",-323074310,null)], null);
});

cljs.core.async.t_cljs$core$async27328.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27328";

cljs.core.async.t_cljs$core$async27328.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async27328");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27328.
 */
cljs.core.async.__GT_t_cljs$core$async27328 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27328(flag__$1,cb__$1,meta27329){
return (new cljs.core.async.t_cljs$core$async27328(flag__$1,cb__$1,meta27329));
});

}

return (new cljs.core.async.t_cljs$core$async27328(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27331_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27331_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27332_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27332_SHARP_,port], null));
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
var G__27333 = (i + (1));
i = G__27333;
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
var len__4641__auto___27339 = arguments.length;
var i__4642__auto___27340 = (0);
while(true){
if((i__4642__auto___27340 < len__4641__auto___27339)){
args__4647__auto__.push((arguments[i__4642__auto___27340]));

var G__27341 = (i__4642__auto___27340 + (1));
i__4642__auto___27340 = G__27341;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27336){
var map__27337 = p__27336;
var map__27337__$1 = (((((!((map__27337 == null))))?(((((map__27337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27337):map__27337);
var opts = map__27337__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27334){
var G__27335 = cljs.core.first.call(null,seq27334);
var seq27334__$1 = cljs.core.next.call(null,seq27334);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27335,seq27334__$1);
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
var G__27343 = arguments.length;
switch (G__27343) {
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
var c__27242__auto___27389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27242__auto___27389){
return (function (){
var f__27243__auto__ = (function (){var switch__27147__auto__ = ((function (c__27242__auto___27389){
return (function (state_27367){
var state_val_27368 = (state_27367[(1)]);
if((state_val_27368 === (7))){
var inst_27363 = (state_27367[(2)]);
var state_27367__$1 = state_27367;
var statearr_27369_27390 = state_27367__$1;
(statearr_27369_27390[(2)] = inst_27363);

(statearr_27369_27390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27368 === (1))){
var state_27367__$1 = state_27367;
var statearr_27370_27391 = state_27367__$1;
(statearr_27370_27391[(2)] = null);

(statearr_27370_27391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27368 === (4))){
var inst_27346 = (state_27367[(7)]);
var inst_27346__$1 = (state_27367[(2)]);
var inst_27347 = (inst_27346__$1 == null);
var state_27367__$1 = (function (){var statearr_27371 = state_27367;
(statearr_27371[(7)] = inst_27346__$1);

return statearr_27371;
})();
if(cljs.core.truth_(inst_27347)){
var statearr_27372_27392 = state_27367__$1;
(statearr_27372_27392[(1)] = (5));

} else {
var statearr_27373_27393 = state_27367__$1;
(statearr_27373_27393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27368 === (13))){
var state_27367__$1 = state_27367;
var statearr_27374_27394 = state_27367__$1;
(statearr_27374_27394[(2)] = null);

(statearr_27374_27394[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27368 === (6))){
var inst_27346 = (state_27367[(7)]);
var state_27367__$1 = state_27367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27367__$1,(11),to,inst_27346);
} else {
if((state_val_27368 === (3))){
var inst_27365 = (state_27367[(2)]);
var state_27367__$1 = state_27367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27367__$1,inst_27365);
} else {
if((state_val_27368 === (12))){
var state_27367__$1 = state_27367;
var statearr_27375_27395 = state_27367__$1;
(statearr_27375_27395[(2)] = null);

(statearr_27375_27395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27368 === (2))){
var state_27367__$1 = state_27367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27367__$1,(4),from);
} else {
if((state_val_27368 === (11))){
var inst_27356 = (state_27367[(2)]);
var state_27367__$1 = state_27367;
if(cljs.core.truth_(inst_27356)){
var statearr_27376_27396 = state_27367__$1;
(statearr_27376_27396[(1)] = (12));

} else {
var statearr_27377_27397 = state_27367__$1;
(statearr_27377_27397[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27368 === (9))){
var state_27367__$1 = state_27367;
var statearr_27378_27398 = state_27367__$1;
(statearr_27378_27398[(2)] = null);

(statearr_27378_27398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27368 === (5))){
var state_27367__$1 = state_27367;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27379_27399 = state_27367__$1;
(statearr_27379_27399[(1)] = (8));

} else {
var statearr_27380_27400 = state_27367__$1;
(statearr_27380_27400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27368 === (14))){
var inst_27361 = (state_27367[(2)]);
var state_27367__$1 = state_27367;
var statearr_27381_27401 = state_27367__$1;
(statearr_27381_27401[(2)] = inst_27361);

(statearr_27381_27401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27368 === (10))){
var inst_27353 = (state_27367[(2)]);
var state_27367__$1 = state_27367;
var statearr_27382_27402 = state_27367__$1;
(statearr_27382_27402[(2)] = inst_27353);

(statearr_27382_27402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27368 === (8))){
var inst_27350 = cljs.core.async.close_BANG_.call(null,to);
var state_27367__$1 = state_27367;
var statearr_27383_27403 = state_27367__$1;
(statearr_27383_27403[(2)] = inst_27350);

(statearr_27383_27403[(1)] = (10));


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
});})(c__27242__auto___27389))
;
return ((function (switch__27147__auto__,c__27242__auto___27389){
return (function() {
var cljs$core$async$state_machine__27148__auto__ = null;
var cljs$core$async$state_machine__27148__auto____0 = (function (){
var statearr_27384 = [null,null,null,null,null,null,null,null];
(statearr_27384[(0)] = cljs$core$async$state_machine__27148__auto__);

(statearr_27384[(1)] = (1));

return statearr_27384;
});
var cljs$core$async$state_machine__27148__auto____1 = (function (state_27367){
while(true){
var ret_value__27149__auto__ = (function (){try{while(true){
var result__27150__auto__ = switch__27147__auto__.call(null,state_27367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27150__auto__;
}
break;
}
}catch (e27385){if((e27385 instanceof Object)){
var ex__27151__auto__ = e27385;
var statearr_27386_27404 = state_27367;
(statearr_27386_27404[(5)] = ex__27151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27405 = state_27367;
state_27367 = G__27405;
continue;
} else {
return ret_value__27149__auto__;
}
break;
}
});
cljs$core$async$state_machine__27148__auto__ = function(state_27367){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27148__auto____1.call(this,state_27367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27148__auto____0;
cljs$core$async$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27148__auto____1;
return cljs$core$async$state_machine__27148__auto__;
})()
;})(switch__27147__auto__,c__27242__auto___27389))
})();
var state__27244__auto__ = (function (){var statearr_27387 = f__27243__auto__.call(null);
(statearr_27387[(6)] = c__27242__auto___27389);

return statearr_27387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27244__auto__);
});})(c__27242__auto___27389))
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
return (function (p__27406){
var vec__27407 = p__27406;
var v = cljs.core.nth.call(null,vec__27407,(0),null);
var p = cljs.core.nth.call(null,vec__27407,(1),null);
var job = vec__27407;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27242__auto___27578 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27242__auto___27578,res,vec__27407,v,p,job,jobs,results){
return (function (){
var f__27243__auto__ = (function (){var switch__27147__auto__ = ((function (c__27242__auto___27578,res,vec__27407,v,p,job,jobs,results){
return (function (state_27414){
var state_val_27415 = (state_27414[(1)]);
if((state_val_27415 === (1))){
var state_27414__$1 = state_27414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27414__$1,(2),res,v);
} else {
if((state_val_27415 === (2))){
var inst_27411 = (state_27414[(2)]);
var inst_27412 = cljs.core.async.close_BANG_.call(null,res);
var state_27414__$1 = (function (){var statearr_27416 = state_27414;
(statearr_27416[(7)] = inst_27411);

return statearr_27416;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27414__$1,inst_27412);
} else {
return null;
}
}
});})(c__27242__auto___27578,res,vec__27407,v,p,job,jobs,results))
;
return ((function (switch__27147__auto__,c__27242__auto___27578,res,vec__27407,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____0 = (function (){
var statearr_27417 = [null,null,null,null,null,null,null,null];
(statearr_27417[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__);

(statearr_27417[(1)] = (1));

return statearr_27417;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____1 = (function (state_27414){
while(true){
var ret_value__27149__auto__ = (function (){try{while(true){
var result__27150__auto__ = switch__27147__auto__.call(null,state_27414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27150__auto__;
}
break;
}
}catch (e27418){if((e27418 instanceof Object)){
var ex__27151__auto__ = e27418;
var statearr_27419_27579 = state_27414;
(statearr_27419_27579[(5)] = ex__27151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27580 = state_27414;
state_27414 = G__27580;
continue;
} else {
return ret_value__27149__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__ = function(state_27414){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____1.call(this,state_27414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__;
})()
;})(switch__27147__auto__,c__27242__auto___27578,res,vec__27407,v,p,job,jobs,results))
})();
var state__27244__auto__ = (function (){var statearr_27420 = f__27243__auto__.call(null);
(statearr_27420[(6)] = c__27242__auto___27578);

return statearr_27420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27244__auto__);
});})(c__27242__auto___27578,res,vec__27407,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27421){
var vec__27422 = p__27421;
var v = cljs.core.nth.call(null,vec__27422,(0),null);
var p = cljs.core.nth.call(null,vec__27422,(1),null);
var job = vec__27422;
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
var n__4518__auto___27581 = n;
var __27582 = (0);
while(true){
if((__27582 < n__4518__auto___27581)){
var G__27425_27583 = type;
var G__27425_27584__$1 = (((G__27425_27583 instanceof cljs.core.Keyword))?G__27425_27583.fqn:null);
switch (G__27425_27584__$1) {
case "compute":
var c__27242__auto___27586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27582,c__27242__auto___27586,G__27425_27583,G__27425_27584__$1,n__4518__auto___27581,jobs,results,process,async){
return (function (){
var f__27243__auto__ = (function (){var switch__27147__auto__ = ((function (__27582,c__27242__auto___27586,G__27425_27583,G__27425_27584__$1,n__4518__auto___27581,jobs,results,process,async){
return (function (state_27438){
var state_val_27439 = (state_27438[(1)]);
if((state_val_27439 === (1))){
var state_27438__$1 = state_27438;
var statearr_27440_27587 = state_27438__$1;
(statearr_27440_27587[(2)] = null);

(statearr_27440_27587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (2))){
var state_27438__$1 = state_27438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27438__$1,(4),jobs);
} else {
if((state_val_27439 === (3))){
var inst_27436 = (state_27438[(2)]);
var state_27438__$1 = state_27438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27438__$1,inst_27436);
} else {
if((state_val_27439 === (4))){
var inst_27428 = (state_27438[(2)]);
var inst_27429 = process.call(null,inst_27428);
var state_27438__$1 = state_27438;
if(cljs.core.truth_(inst_27429)){
var statearr_27441_27588 = state_27438__$1;
(statearr_27441_27588[(1)] = (5));

} else {
var statearr_27442_27589 = state_27438__$1;
(statearr_27442_27589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (5))){
var state_27438__$1 = state_27438;
var statearr_27443_27590 = state_27438__$1;
(statearr_27443_27590[(2)] = null);

(statearr_27443_27590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (6))){
var state_27438__$1 = state_27438;
var statearr_27444_27591 = state_27438__$1;
(statearr_27444_27591[(2)] = null);

(statearr_27444_27591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (7))){
var inst_27434 = (state_27438[(2)]);
var state_27438__$1 = state_27438;
var statearr_27445_27592 = state_27438__$1;
(statearr_27445_27592[(2)] = inst_27434);

(statearr_27445_27592[(1)] = (3));


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
});})(__27582,c__27242__auto___27586,G__27425_27583,G__27425_27584__$1,n__4518__auto___27581,jobs,results,process,async))
;
return ((function (__27582,switch__27147__auto__,c__27242__auto___27586,G__27425_27583,G__27425_27584__$1,n__4518__auto___27581,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____0 = (function (){
var statearr_27446 = [null,null,null,null,null,null,null];
(statearr_27446[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__);

(statearr_27446[(1)] = (1));

return statearr_27446;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____1 = (function (state_27438){
while(true){
var ret_value__27149__auto__ = (function (){try{while(true){
var result__27150__auto__ = switch__27147__auto__.call(null,state_27438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27150__auto__;
}
break;
}
}catch (e27447){if((e27447 instanceof Object)){
var ex__27151__auto__ = e27447;
var statearr_27448_27593 = state_27438;
(statearr_27448_27593[(5)] = ex__27151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27594 = state_27438;
state_27438 = G__27594;
continue;
} else {
return ret_value__27149__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__ = function(state_27438){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____1.call(this,state_27438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__;
})()
;})(__27582,switch__27147__auto__,c__27242__auto___27586,G__27425_27583,G__27425_27584__$1,n__4518__auto___27581,jobs,results,process,async))
})();
var state__27244__auto__ = (function (){var statearr_27449 = f__27243__auto__.call(null);
(statearr_27449[(6)] = c__27242__auto___27586);

return statearr_27449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27244__auto__);
});})(__27582,c__27242__auto___27586,G__27425_27583,G__27425_27584__$1,n__4518__auto___27581,jobs,results,process,async))
);


break;
case "async":
var c__27242__auto___27595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27582,c__27242__auto___27595,G__27425_27583,G__27425_27584__$1,n__4518__auto___27581,jobs,results,process,async){
return (function (){
var f__27243__auto__ = (function (){var switch__27147__auto__ = ((function (__27582,c__27242__auto___27595,G__27425_27583,G__27425_27584__$1,n__4518__auto___27581,jobs,results,process,async){
return (function (state_27462){
var state_val_27463 = (state_27462[(1)]);
if((state_val_27463 === (1))){
var state_27462__$1 = state_27462;
var statearr_27464_27596 = state_27462__$1;
(statearr_27464_27596[(2)] = null);

(statearr_27464_27596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (2))){
var state_27462__$1 = state_27462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27462__$1,(4),jobs);
} else {
if((state_val_27463 === (3))){
var inst_27460 = (state_27462[(2)]);
var state_27462__$1 = state_27462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27462__$1,inst_27460);
} else {
if((state_val_27463 === (4))){
var inst_27452 = (state_27462[(2)]);
var inst_27453 = async.call(null,inst_27452);
var state_27462__$1 = state_27462;
if(cljs.core.truth_(inst_27453)){
var statearr_27465_27597 = state_27462__$1;
(statearr_27465_27597[(1)] = (5));

} else {
var statearr_27466_27598 = state_27462__$1;
(statearr_27466_27598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (5))){
var state_27462__$1 = state_27462;
var statearr_27467_27599 = state_27462__$1;
(statearr_27467_27599[(2)] = null);

(statearr_27467_27599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (6))){
var state_27462__$1 = state_27462;
var statearr_27468_27600 = state_27462__$1;
(statearr_27468_27600[(2)] = null);

(statearr_27468_27600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (7))){
var inst_27458 = (state_27462[(2)]);
var state_27462__$1 = state_27462;
var statearr_27469_27601 = state_27462__$1;
(statearr_27469_27601[(2)] = inst_27458);

(statearr_27469_27601[(1)] = (3));


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
});})(__27582,c__27242__auto___27595,G__27425_27583,G__27425_27584__$1,n__4518__auto___27581,jobs,results,process,async))
;
return ((function (__27582,switch__27147__auto__,c__27242__auto___27595,G__27425_27583,G__27425_27584__$1,n__4518__auto___27581,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____0 = (function (){
var statearr_27470 = [null,null,null,null,null,null,null];
(statearr_27470[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__);

(statearr_27470[(1)] = (1));

return statearr_27470;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____1 = (function (state_27462){
while(true){
var ret_value__27149__auto__ = (function (){try{while(true){
var result__27150__auto__ = switch__27147__auto__.call(null,state_27462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27150__auto__;
}
break;
}
}catch (e27471){if((e27471 instanceof Object)){
var ex__27151__auto__ = e27471;
var statearr_27472_27602 = state_27462;
(statearr_27472_27602[(5)] = ex__27151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27603 = state_27462;
state_27462 = G__27603;
continue;
} else {
return ret_value__27149__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__ = function(state_27462){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____1.call(this,state_27462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__;
})()
;})(__27582,switch__27147__auto__,c__27242__auto___27595,G__27425_27583,G__27425_27584__$1,n__4518__auto___27581,jobs,results,process,async))
})();
var state__27244__auto__ = (function (){var statearr_27473 = f__27243__auto__.call(null);
(statearr_27473[(6)] = c__27242__auto___27595);

return statearr_27473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27244__auto__);
});})(__27582,c__27242__auto___27595,G__27425_27583,G__27425_27584__$1,n__4518__auto___27581,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27425_27584__$1)].join('')));

}

var G__27604 = (__27582 + (1));
__27582 = G__27604;
continue;
} else {
}
break;
}

var c__27242__auto___27605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27242__auto___27605,jobs,results,process,async){
return (function (){
var f__27243__auto__ = (function (){var switch__27147__auto__ = ((function (c__27242__auto___27605,jobs,results,process,async){
return (function (state_27495){
var state_val_27496 = (state_27495[(1)]);
if((state_val_27496 === (7))){
var inst_27491 = (state_27495[(2)]);
var state_27495__$1 = state_27495;
var statearr_27497_27606 = state_27495__$1;
(statearr_27497_27606[(2)] = inst_27491);

(statearr_27497_27606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (1))){
var state_27495__$1 = state_27495;
var statearr_27498_27607 = state_27495__$1;
(statearr_27498_27607[(2)] = null);

(statearr_27498_27607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (4))){
var inst_27476 = (state_27495[(7)]);
var inst_27476__$1 = (state_27495[(2)]);
var inst_27477 = (inst_27476__$1 == null);
var state_27495__$1 = (function (){var statearr_27499 = state_27495;
(statearr_27499[(7)] = inst_27476__$1);

return statearr_27499;
})();
if(cljs.core.truth_(inst_27477)){
var statearr_27500_27608 = state_27495__$1;
(statearr_27500_27608[(1)] = (5));

} else {
var statearr_27501_27609 = state_27495__$1;
(statearr_27501_27609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (6))){
var inst_27481 = (state_27495[(8)]);
var inst_27476 = (state_27495[(7)]);
var inst_27481__$1 = cljs.core.async.chan.call(null,(1));
var inst_27482 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27483 = [inst_27476,inst_27481__$1];
var inst_27484 = (new cljs.core.PersistentVector(null,2,(5),inst_27482,inst_27483,null));
var state_27495__$1 = (function (){var statearr_27502 = state_27495;
(statearr_27502[(8)] = inst_27481__$1);

return statearr_27502;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27495__$1,(8),jobs,inst_27484);
} else {
if((state_val_27496 === (3))){
var inst_27493 = (state_27495[(2)]);
var state_27495__$1 = state_27495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27495__$1,inst_27493);
} else {
if((state_val_27496 === (2))){
var state_27495__$1 = state_27495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27495__$1,(4),from);
} else {
if((state_val_27496 === (9))){
var inst_27488 = (state_27495[(2)]);
var state_27495__$1 = (function (){var statearr_27503 = state_27495;
(statearr_27503[(9)] = inst_27488);

return statearr_27503;
})();
var statearr_27504_27610 = state_27495__$1;
(statearr_27504_27610[(2)] = null);

(statearr_27504_27610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (5))){
var inst_27479 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27495__$1 = state_27495;
var statearr_27505_27611 = state_27495__$1;
(statearr_27505_27611[(2)] = inst_27479);

(statearr_27505_27611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (8))){
var inst_27481 = (state_27495[(8)]);
var inst_27486 = (state_27495[(2)]);
var state_27495__$1 = (function (){var statearr_27506 = state_27495;
(statearr_27506[(10)] = inst_27486);

return statearr_27506;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27495__$1,(9),results,inst_27481);
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
});})(c__27242__auto___27605,jobs,results,process,async))
;
return ((function (switch__27147__auto__,c__27242__auto___27605,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____0 = (function (){
var statearr_27507 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27507[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__);

(statearr_27507[(1)] = (1));

return statearr_27507;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____1 = (function (state_27495){
while(true){
var ret_value__27149__auto__ = (function (){try{while(true){
var result__27150__auto__ = switch__27147__auto__.call(null,state_27495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27150__auto__;
}
break;
}
}catch (e27508){if((e27508 instanceof Object)){
var ex__27151__auto__ = e27508;
var statearr_27509_27612 = state_27495;
(statearr_27509_27612[(5)] = ex__27151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27613 = state_27495;
state_27495 = G__27613;
continue;
} else {
return ret_value__27149__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__ = function(state_27495){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____1.call(this,state_27495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__;
})()
;})(switch__27147__auto__,c__27242__auto___27605,jobs,results,process,async))
})();
var state__27244__auto__ = (function (){var statearr_27510 = f__27243__auto__.call(null);
(statearr_27510[(6)] = c__27242__auto___27605);

return statearr_27510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27244__auto__);
});})(c__27242__auto___27605,jobs,results,process,async))
);


var c__27242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27242__auto__,jobs,results,process,async){
return (function (){
var f__27243__auto__ = (function (){var switch__27147__auto__ = ((function (c__27242__auto__,jobs,results,process,async){
return (function (state_27548){
var state_val_27549 = (state_27548[(1)]);
if((state_val_27549 === (7))){
var inst_27544 = (state_27548[(2)]);
var state_27548__$1 = state_27548;
var statearr_27550_27614 = state_27548__$1;
(statearr_27550_27614[(2)] = inst_27544);

(statearr_27550_27614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (20))){
var state_27548__$1 = state_27548;
var statearr_27551_27615 = state_27548__$1;
(statearr_27551_27615[(2)] = null);

(statearr_27551_27615[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (1))){
var state_27548__$1 = state_27548;
var statearr_27552_27616 = state_27548__$1;
(statearr_27552_27616[(2)] = null);

(statearr_27552_27616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (4))){
var inst_27513 = (state_27548[(7)]);
var inst_27513__$1 = (state_27548[(2)]);
var inst_27514 = (inst_27513__$1 == null);
var state_27548__$1 = (function (){var statearr_27553 = state_27548;
(statearr_27553[(7)] = inst_27513__$1);

return statearr_27553;
})();
if(cljs.core.truth_(inst_27514)){
var statearr_27554_27617 = state_27548__$1;
(statearr_27554_27617[(1)] = (5));

} else {
var statearr_27555_27618 = state_27548__$1;
(statearr_27555_27618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (15))){
var inst_27526 = (state_27548[(8)]);
var state_27548__$1 = state_27548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27548__$1,(18),to,inst_27526);
} else {
if((state_val_27549 === (21))){
var inst_27539 = (state_27548[(2)]);
var state_27548__$1 = state_27548;
var statearr_27556_27619 = state_27548__$1;
(statearr_27556_27619[(2)] = inst_27539);

(statearr_27556_27619[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (13))){
var inst_27541 = (state_27548[(2)]);
var state_27548__$1 = (function (){var statearr_27557 = state_27548;
(statearr_27557[(9)] = inst_27541);

return statearr_27557;
})();
var statearr_27558_27620 = state_27548__$1;
(statearr_27558_27620[(2)] = null);

(statearr_27558_27620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (6))){
var inst_27513 = (state_27548[(7)]);
var state_27548__$1 = state_27548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27548__$1,(11),inst_27513);
} else {
if((state_val_27549 === (17))){
var inst_27534 = (state_27548[(2)]);
var state_27548__$1 = state_27548;
if(cljs.core.truth_(inst_27534)){
var statearr_27559_27621 = state_27548__$1;
(statearr_27559_27621[(1)] = (19));

} else {
var statearr_27560_27622 = state_27548__$1;
(statearr_27560_27622[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (3))){
var inst_27546 = (state_27548[(2)]);
var state_27548__$1 = state_27548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27548__$1,inst_27546);
} else {
if((state_val_27549 === (12))){
var inst_27523 = (state_27548[(10)]);
var state_27548__$1 = state_27548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27548__$1,(14),inst_27523);
} else {
if((state_val_27549 === (2))){
var state_27548__$1 = state_27548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27548__$1,(4),results);
} else {
if((state_val_27549 === (19))){
var state_27548__$1 = state_27548;
var statearr_27561_27623 = state_27548__$1;
(statearr_27561_27623[(2)] = null);

(statearr_27561_27623[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (11))){
var inst_27523 = (state_27548[(2)]);
var state_27548__$1 = (function (){var statearr_27562 = state_27548;
(statearr_27562[(10)] = inst_27523);

return statearr_27562;
})();
var statearr_27563_27624 = state_27548__$1;
(statearr_27563_27624[(2)] = null);

(statearr_27563_27624[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (9))){
var state_27548__$1 = state_27548;
var statearr_27564_27625 = state_27548__$1;
(statearr_27564_27625[(2)] = null);

(statearr_27564_27625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (5))){
var state_27548__$1 = state_27548;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27565_27626 = state_27548__$1;
(statearr_27565_27626[(1)] = (8));

} else {
var statearr_27566_27627 = state_27548__$1;
(statearr_27566_27627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (14))){
var inst_27526 = (state_27548[(8)]);
var inst_27528 = (state_27548[(11)]);
var inst_27526__$1 = (state_27548[(2)]);
var inst_27527 = (inst_27526__$1 == null);
var inst_27528__$1 = cljs.core.not.call(null,inst_27527);
var state_27548__$1 = (function (){var statearr_27567 = state_27548;
(statearr_27567[(8)] = inst_27526__$1);

(statearr_27567[(11)] = inst_27528__$1);

return statearr_27567;
})();
if(inst_27528__$1){
var statearr_27568_27628 = state_27548__$1;
(statearr_27568_27628[(1)] = (15));

} else {
var statearr_27569_27629 = state_27548__$1;
(statearr_27569_27629[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (16))){
var inst_27528 = (state_27548[(11)]);
var state_27548__$1 = state_27548;
var statearr_27570_27630 = state_27548__$1;
(statearr_27570_27630[(2)] = inst_27528);

(statearr_27570_27630[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (10))){
var inst_27520 = (state_27548[(2)]);
var state_27548__$1 = state_27548;
var statearr_27571_27631 = state_27548__$1;
(statearr_27571_27631[(2)] = inst_27520);

(statearr_27571_27631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (18))){
var inst_27531 = (state_27548[(2)]);
var state_27548__$1 = state_27548;
var statearr_27572_27632 = state_27548__$1;
(statearr_27572_27632[(2)] = inst_27531);

(statearr_27572_27632[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (8))){
var inst_27517 = cljs.core.async.close_BANG_.call(null,to);
var state_27548__$1 = state_27548;
var statearr_27573_27633 = state_27548__$1;
(statearr_27573_27633[(2)] = inst_27517);

(statearr_27573_27633[(1)] = (10));


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
});})(c__27242__auto__,jobs,results,process,async))
;
return ((function (switch__27147__auto__,c__27242__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____0 = (function (){
var statearr_27574 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27574[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__);

(statearr_27574[(1)] = (1));

return statearr_27574;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____1 = (function (state_27548){
while(true){
var ret_value__27149__auto__ = (function (){try{while(true){
var result__27150__auto__ = switch__27147__auto__.call(null,state_27548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27150__auto__;
}
break;
}
}catch (e27575){if((e27575 instanceof Object)){
var ex__27151__auto__ = e27575;
var statearr_27576_27634 = state_27548;
(statearr_27576_27634[(5)] = ex__27151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27635 = state_27548;
state_27548 = G__27635;
continue;
} else {
return ret_value__27149__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__ = function(state_27548){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____1.call(this,state_27548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27148__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27148__auto__;
})()
;})(switch__27147__auto__,c__27242__auto__,jobs,results,process,async))
})();
var state__27244__auto__ = (function (){var statearr_27577 = f__27243__auto__.call(null);
(statearr_27577[(6)] = c__27242__auto__);

return statearr_27577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27244__auto__);
});})(c__27242__auto__,jobs,results,process,async))
);

return c__27242__auto__;
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
var G__27637 = arguments.length;
switch (G__27637) {
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
var G__27640 = arguments.length;
switch (G__27640) {
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
var G__27643 = arguments.length;
switch (G__27643) {
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
var c__27242__auto___27692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27242__auto___27692,tc,fc){
return (function (){
var f__27243__auto__ = (function (){var switch__27147__auto__ = ((function (c__27242__auto___27692,tc,fc){
return (function (state_27669){
var state_val_27670 = (state_27669[(1)]);
if((state_val_27670 === (7))){
var inst_27665 = (state_27669[(2)]);
var state_27669__$1 = state_27669;
var statearr_27671_27693 = state_27669__$1;
(statearr_27671_27693[(2)] = inst_27665);

(statearr_27671_27693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27670 === (1))){
var state_27669__$1 = state_27669;
var statearr_27672_27694 = state_27669__$1;
(statearr_27672_27694[(2)] = null);

(statearr_27672_27694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27670 === (4))){
var inst_27646 = (state_27669[(7)]);
var inst_27646__$1 = (state_27669[(2)]);
var inst_27647 = (inst_27646__$1 == null);
var state_27669__$1 = (function (){var statearr_27673 = state_27669;
(statearr_27673[(7)] = inst_27646__$1);

return statearr_27673;
})();
if(cljs.core.truth_(inst_27647)){
var statearr_27674_27695 = state_27669__$1;
(statearr_27674_27695[(1)] = (5));

} else {
var statearr_27675_27696 = state_27669__$1;
(statearr_27675_27696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27670 === (13))){
var state_27669__$1 = state_27669;
var statearr_27676_27697 = state_27669__$1;
(statearr_27676_27697[(2)] = null);

(statearr_27676_27697[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27670 === (6))){
var inst_27646 = (state_27669[(7)]);
var inst_27652 = p.call(null,inst_27646);
var state_27669__$1 = state_27669;
if(cljs.core.truth_(inst_27652)){
var statearr_27677_27698 = state_27669__$1;
(statearr_27677_27698[(1)] = (9));

} else {
var statearr_27678_27699 = state_27669__$1;
(statearr_27678_27699[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27670 === (3))){
var inst_27667 = (state_27669[(2)]);
var state_27669__$1 = state_27669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27669__$1,inst_27667);
} else {
if((state_val_27670 === (12))){
var state_27669__$1 = state_27669;
var statearr_27679_27700 = state_27669__$1;
(statearr_27679_27700[(2)] = null);

(statearr_27679_27700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27670 === (2))){
var state_27669__$1 = state_27669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27669__$1,(4),ch);
} else {
if((state_val_27670 === (11))){
var inst_27646 = (state_27669[(7)]);
var inst_27656 = (state_27669[(2)]);
var state_27669__$1 = state_27669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27669__$1,(8),inst_27656,inst_27646);
} else {
if((state_val_27670 === (9))){
var state_27669__$1 = state_27669;
var statearr_27680_27701 = state_27669__$1;
(statearr_27680_27701[(2)] = tc);

(statearr_27680_27701[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27670 === (5))){
var inst_27649 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27650 = cljs.core.async.close_BANG_.call(null,fc);
var state_27669__$1 = (function (){var statearr_27681 = state_27669;
(statearr_27681[(8)] = inst_27649);

return statearr_27681;
})();
var statearr_27682_27702 = state_27669__$1;
(statearr_27682_27702[(2)] = inst_27650);

(statearr_27682_27702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27670 === (14))){
var inst_27663 = (state_27669[(2)]);
var state_27669__$1 = state_27669;
var statearr_27683_27703 = state_27669__$1;
(statearr_27683_27703[(2)] = inst_27663);

(statearr_27683_27703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27670 === (10))){
var state_27669__$1 = state_27669;
var statearr_27684_27704 = state_27669__$1;
(statearr_27684_27704[(2)] = fc);

(statearr_27684_27704[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27670 === (8))){
var inst_27658 = (state_27669[(2)]);
var state_27669__$1 = state_27669;
if(cljs.core.truth_(inst_27658)){
var statearr_27685_27705 = state_27669__$1;
(statearr_27685_27705[(1)] = (12));

} else {
var statearr_27686_27706 = state_27669__$1;
(statearr_27686_27706[(1)] = (13));

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
});})(c__27242__auto___27692,tc,fc))
;
return ((function (switch__27147__auto__,c__27242__auto___27692,tc,fc){
return (function() {
var cljs$core$async$state_machine__27148__auto__ = null;
var cljs$core$async$state_machine__27148__auto____0 = (function (){
var statearr_27687 = [null,null,null,null,null,null,null,null,null];
(statearr_27687[(0)] = cljs$core$async$state_machine__27148__auto__);

(statearr_27687[(1)] = (1));

return statearr_27687;
});
var cljs$core$async$state_machine__27148__auto____1 = (function (state_27669){
while(true){
var ret_value__27149__auto__ = (function (){try{while(true){
var result__27150__auto__ = switch__27147__auto__.call(null,state_27669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27150__auto__;
}
break;
}
}catch (e27688){if((e27688 instanceof Object)){
var ex__27151__auto__ = e27688;
var statearr_27689_27707 = state_27669;
(statearr_27689_27707[(5)] = ex__27151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27708 = state_27669;
state_27669 = G__27708;
continue;
} else {
return ret_value__27149__auto__;
}
break;
}
});
cljs$core$async$state_machine__27148__auto__ = function(state_27669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27148__auto____1.call(this,state_27669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27148__auto____0;
cljs$core$async$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27148__auto____1;
return cljs$core$async$state_machine__27148__auto__;
})()
;})(switch__27147__auto__,c__27242__auto___27692,tc,fc))
})();
var state__27244__auto__ = (function (){var statearr_27690 = f__27243__auto__.call(null);
(statearr_27690[(6)] = c__27242__auto___27692);

return statearr_27690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27244__auto__);
});})(c__27242__auto___27692,tc,fc))
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
var c__27242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27242__auto__){
return (function (){
var f__27243__auto__ = (function (){var switch__27147__auto__ = ((function (c__27242__auto__){
return (function (state_27729){
var state_val_27730 = (state_27729[(1)]);
if((state_val_27730 === (7))){
var inst_27725 = (state_27729[(2)]);
var state_27729__$1 = state_27729;
var statearr_27731_27749 = state_27729__$1;
(statearr_27731_27749[(2)] = inst_27725);

(statearr_27731_27749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27730 === (1))){
var inst_27709 = init;
var state_27729__$1 = (function (){var statearr_27732 = state_27729;
(statearr_27732[(7)] = inst_27709);

return statearr_27732;
})();
var statearr_27733_27750 = state_27729__$1;
(statearr_27733_27750[(2)] = null);

(statearr_27733_27750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27730 === (4))){
var inst_27712 = (state_27729[(8)]);
var inst_27712__$1 = (state_27729[(2)]);
var inst_27713 = (inst_27712__$1 == null);
var state_27729__$1 = (function (){var statearr_27734 = state_27729;
(statearr_27734[(8)] = inst_27712__$1);

return statearr_27734;
})();
if(cljs.core.truth_(inst_27713)){
var statearr_27735_27751 = state_27729__$1;
(statearr_27735_27751[(1)] = (5));

} else {
var statearr_27736_27752 = state_27729__$1;
(statearr_27736_27752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27730 === (6))){
var inst_27716 = (state_27729[(9)]);
var inst_27709 = (state_27729[(7)]);
var inst_27712 = (state_27729[(8)]);
var inst_27716__$1 = f.call(null,inst_27709,inst_27712);
var inst_27717 = cljs.core.reduced_QMARK_.call(null,inst_27716__$1);
var state_27729__$1 = (function (){var statearr_27737 = state_27729;
(statearr_27737[(9)] = inst_27716__$1);

return statearr_27737;
})();
if(inst_27717){
var statearr_27738_27753 = state_27729__$1;
(statearr_27738_27753[(1)] = (8));

} else {
var statearr_27739_27754 = state_27729__$1;
(statearr_27739_27754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27730 === (3))){
var inst_27727 = (state_27729[(2)]);
var state_27729__$1 = state_27729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27729__$1,inst_27727);
} else {
if((state_val_27730 === (2))){
var state_27729__$1 = state_27729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27729__$1,(4),ch);
} else {
if((state_val_27730 === (9))){
var inst_27716 = (state_27729[(9)]);
var inst_27709 = inst_27716;
var state_27729__$1 = (function (){var statearr_27740 = state_27729;
(statearr_27740[(7)] = inst_27709);

return statearr_27740;
})();
var statearr_27741_27755 = state_27729__$1;
(statearr_27741_27755[(2)] = null);

(statearr_27741_27755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27730 === (5))){
var inst_27709 = (state_27729[(7)]);
var state_27729__$1 = state_27729;
var statearr_27742_27756 = state_27729__$1;
(statearr_27742_27756[(2)] = inst_27709);

(statearr_27742_27756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27730 === (10))){
var inst_27723 = (state_27729[(2)]);
var state_27729__$1 = state_27729;
var statearr_27743_27757 = state_27729__$1;
(statearr_27743_27757[(2)] = inst_27723);

(statearr_27743_27757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27730 === (8))){
var inst_27716 = (state_27729[(9)]);
var inst_27719 = cljs.core.deref.call(null,inst_27716);
var state_27729__$1 = state_27729;
var statearr_27744_27758 = state_27729__$1;
(statearr_27744_27758[(2)] = inst_27719);

(statearr_27744_27758[(1)] = (10));


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
});})(c__27242__auto__))
;
return ((function (switch__27147__auto__,c__27242__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27148__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27148__auto____0 = (function (){
var statearr_27745 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27745[(0)] = cljs$core$async$reduce_$_state_machine__27148__auto__);

(statearr_27745[(1)] = (1));

return statearr_27745;
});
var cljs$core$async$reduce_$_state_machine__27148__auto____1 = (function (state_27729){
while(true){
var ret_value__27149__auto__ = (function (){try{while(true){
var result__27150__auto__ = switch__27147__auto__.call(null,state_27729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27150__auto__;
}
break;
}
}catch (e27746){if((e27746 instanceof Object)){
var ex__27151__auto__ = e27746;
var statearr_27747_27759 = state_27729;
(statearr_27747_27759[(5)] = ex__27151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27760 = state_27729;
state_27729 = G__27760;
continue;
} else {
return ret_value__27149__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27148__auto__ = function(state_27729){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27148__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27148__auto____1.call(this,state_27729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27148__auto____0;
cljs$core$async$reduce_$_state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27148__auto____1;
return cljs$core$async$reduce_$_state_machine__27148__auto__;
})()
;})(switch__27147__auto__,c__27242__auto__))
})();
var state__27244__auto__ = (function (){var statearr_27748 = f__27243__auto__.call(null);
(statearr_27748[(6)] = c__27242__auto__);

return statearr_27748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27244__auto__);
});})(c__27242__auto__))
);

return c__27242__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27242__auto__,f__$1){
return (function (){
var f__27243__auto__ = (function (){var switch__27147__auto__ = ((function (c__27242__auto__,f__$1){
return (function (state_27766){
var state_val_27767 = (state_27766[(1)]);
if((state_val_27767 === (1))){
var inst_27761 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27766__$1 = state_27766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27766__$1,(2),inst_27761);
} else {
if((state_val_27767 === (2))){
var inst_27763 = (state_27766[(2)]);
var inst_27764 = f__$1.call(null,inst_27763);
var state_27766__$1 = state_27766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27766__$1,inst_27764);
} else {
return null;
}
}
});})(c__27242__auto__,f__$1))
;
return ((function (switch__27147__auto__,c__27242__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27148__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27148__auto____0 = (function (){
var statearr_27768 = [null,null,null,null,null,null,null];
(statearr_27768[(0)] = cljs$core$async$transduce_$_state_machine__27148__auto__);

(statearr_27768[(1)] = (1));

return statearr_27768;
});
var cljs$core$async$transduce_$_state_machine__27148__auto____1 = (function (state_27766){
while(true){
var ret_value__27149__auto__ = (function (){try{while(true){
var result__27150__auto__ = switch__27147__auto__.call(null,state_27766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27150__auto__;
}
break;
}
}catch (e27769){if((e27769 instanceof Object)){
var ex__27151__auto__ = e27769;
var statearr_27770_27772 = state_27766;
(statearr_27770_27772[(5)] = ex__27151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27773 = state_27766;
state_27766 = G__27773;
continue;
} else {
return ret_value__27149__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27148__auto__ = function(state_27766){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27148__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27148__auto____1.call(this,state_27766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27148__auto____0;
cljs$core$async$transduce_$_state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27148__auto____1;
return cljs$core$async$transduce_$_state_machine__27148__auto__;
})()
;})(switch__27147__auto__,c__27242__auto__,f__$1))
})();
var state__27244__auto__ = (function (){var statearr_27771 = f__27243__auto__.call(null);
(statearr_27771[(6)] = c__27242__auto__);

return statearr_27771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27244__auto__);
});})(c__27242__auto__,f__$1))
);

return c__27242__auto__;
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
var G__27775 = arguments.length;
switch (G__27775) {
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
var c__27242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27242__auto__){
return (function (){
var f__27243__auto__ = (function (){var switch__27147__auto__ = ((function (c__27242__auto__){
return (function (state_27800){
var state_val_27801 = (state_27800[(1)]);
if((state_val_27801 === (7))){
var inst_27782 = (state_27800[(2)]);
var state_27800__$1 = state_27800;
var statearr_27802_27823 = state_27800__$1;
(statearr_27802_27823[(2)] = inst_27782);

(statearr_27802_27823[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (1))){
var inst_27776 = cljs.core.seq.call(null,coll);
var inst_27777 = inst_27776;
var state_27800__$1 = (function (){var statearr_27803 = state_27800;
(statearr_27803[(7)] = inst_27777);

return statearr_27803;
})();
var statearr_27804_27824 = state_27800__$1;
(statearr_27804_27824[(2)] = null);

(statearr_27804_27824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (4))){
var inst_27777 = (state_27800[(7)]);
var inst_27780 = cljs.core.first.call(null,inst_27777);
var state_27800__$1 = state_27800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27800__$1,(7),ch,inst_27780);
} else {
if((state_val_27801 === (13))){
var inst_27794 = (state_27800[(2)]);
var state_27800__$1 = state_27800;
var statearr_27805_27825 = state_27800__$1;
(statearr_27805_27825[(2)] = inst_27794);

(statearr_27805_27825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (6))){
var inst_27785 = (state_27800[(2)]);
var state_27800__$1 = state_27800;
if(cljs.core.truth_(inst_27785)){
var statearr_27806_27826 = state_27800__$1;
(statearr_27806_27826[(1)] = (8));

} else {
var statearr_27807_27827 = state_27800__$1;
(statearr_27807_27827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (3))){
var inst_27798 = (state_27800[(2)]);
var state_27800__$1 = state_27800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27800__$1,inst_27798);
} else {
if((state_val_27801 === (12))){
var state_27800__$1 = state_27800;
var statearr_27808_27828 = state_27800__$1;
(statearr_27808_27828[(2)] = null);

(statearr_27808_27828[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (2))){
var inst_27777 = (state_27800[(7)]);
var state_27800__$1 = state_27800;
if(cljs.core.truth_(inst_27777)){
var statearr_27809_27829 = state_27800__$1;
(statearr_27809_27829[(1)] = (4));

} else {
var statearr_27810_27830 = state_27800__$1;
(statearr_27810_27830[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (11))){
var inst_27791 = cljs.core.async.close_BANG_.call(null,ch);
var state_27800__$1 = state_27800;
var statearr_27811_27831 = state_27800__$1;
(statearr_27811_27831[(2)] = inst_27791);

(statearr_27811_27831[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (9))){
var state_27800__$1 = state_27800;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27812_27832 = state_27800__$1;
(statearr_27812_27832[(1)] = (11));

} else {
var statearr_27813_27833 = state_27800__$1;
(statearr_27813_27833[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (5))){
var inst_27777 = (state_27800[(7)]);
var state_27800__$1 = state_27800;
var statearr_27814_27834 = state_27800__$1;
(statearr_27814_27834[(2)] = inst_27777);

(statearr_27814_27834[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (10))){
var inst_27796 = (state_27800[(2)]);
var state_27800__$1 = state_27800;
var statearr_27815_27835 = state_27800__$1;
(statearr_27815_27835[(2)] = inst_27796);

(statearr_27815_27835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (8))){
var inst_27777 = (state_27800[(7)]);
var inst_27787 = cljs.core.next.call(null,inst_27777);
var inst_27777__$1 = inst_27787;
var state_27800__$1 = (function (){var statearr_27816 = state_27800;
(statearr_27816[(7)] = inst_27777__$1);

return statearr_27816;
})();
var statearr_27817_27836 = state_27800__$1;
(statearr_27817_27836[(2)] = null);

(statearr_27817_27836[(1)] = (2));


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
});})(c__27242__auto__))
;
return ((function (switch__27147__auto__,c__27242__auto__){
return (function() {
var cljs$core$async$state_machine__27148__auto__ = null;
var cljs$core$async$state_machine__27148__auto____0 = (function (){
var statearr_27818 = [null,null,null,null,null,null,null,null];
(statearr_27818[(0)] = cljs$core$async$state_machine__27148__auto__);

(statearr_27818[(1)] = (1));

return statearr_27818;
});
var cljs$core$async$state_machine__27148__auto____1 = (function (state_27800){
while(true){
var ret_value__27149__auto__ = (function (){try{while(true){
var result__27150__auto__ = switch__27147__auto__.call(null,state_27800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27150__auto__;
}
break;
}
}catch (e27819){if((e27819 instanceof Object)){
var ex__27151__auto__ = e27819;
var statearr_27820_27837 = state_27800;
(statearr_27820_27837[(5)] = ex__27151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27838 = state_27800;
state_27800 = G__27838;
continue;
} else {
return ret_value__27149__auto__;
}
break;
}
});
cljs$core$async$state_machine__27148__auto__ = function(state_27800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27148__auto____1.call(this,state_27800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27148__auto____0;
cljs$core$async$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27148__auto____1;
return cljs$core$async$state_machine__27148__auto__;
})()
;})(switch__27147__auto__,c__27242__auto__))
})();
var state__27244__auto__ = (function (){var statearr_27821 = f__27243__auto__.call(null);
(statearr_27821[(6)] = c__27242__auto__);

return statearr_27821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27244__auto__);
});})(c__27242__auto__))
);

return c__27242__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27839 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27839 = (function (ch,cs,meta27840){
this.ch = ch;
this.cs = cs;
this.meta27840 = meta27840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27841,meta27840__$1){
var self__ = this;
var _27841__$1 = this;
return (new cljs.core.async.t_cljs$core$async27839(self__.ch,self__.cs,meta27840__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27839.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27841){
var self__ = this;
var _27841__$1 = this;
return self__.meta27840;
});})(cs))
;

cljs.core.async.t_cljs$core$async27839.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27839.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27839.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27839.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27839.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27839.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27839.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27840","meta27840",1837601017,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27839.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27839.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27839";

cljs.core.async.t_cljs$core$async27839.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async27839");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27839.
 */
cljs.core.async.__GT_t_cljs$core$async27839 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27839(ch__$1,cs__$1,meta27840){
return (new cljs.core.async.t_cljs$core$async27839(ch__$1,cs__$1,meta27840));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27839(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27242__auto___28061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27242__auto___28061,cs,m,dchan,dctr,done){
return (function (){
var f__27243__auto__ = (function (){var switch__27147__auto__ = ((function (c__27242__auto___28061,cs,m,dchan,dctr,done){
return (function (state_27976){
var state_val_27977 = (state_27976[(1)]);
if((state_val_27977 === (7))){
var inst_27972 = (state_27976[(2)]);
var state_27976__$1 = state_27976;
var statearr_27978_28062 = state_27976__$1;
(statearr_27978_28062[(2)] = inst_27972);

(statearr_27978_28062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (20))){
var inst_27875 = (state_27976[(7)]);
var inst_27887 = cljs.core.first.call(null,inst_27875);
var inst_27888 = cljs.core.nth.call(null,inst_27887,(0),null);
var inst_27889 = cljs.core.nth.call(null,inst_27887,(1),null);
var state_27976__$1 = (function (){var statearr_27979 = state_27976;
(statearr_27979[(8)] = inst_27888);

return statearr_27979;
})();
if(cljs.core.truth_(inst_27889)){
var statearr_27980_28063 = state_27976__$1;
(statearr_27980_28063[(1)] = (22));

} else {
var statearr_27981_28064 = state_27976__$1;
(statearr_27981_28064[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (27))){
var inst_27844 = (state_27976[(9)]);
var inst_27917 = (state_27976[(10)]);
var inst_27919 = (state_27976[(11)]);
var inst_27924 = (state_27976[(12)]);
var inst_27924__$1 = cljs.core._nth.call(null,inst_27917,inst_27919);
var inst_27925 = cljs.core.async.put_BANG_.call(null,inst_27924__$1,inst_27844,done);
var state_27976__$1 = (function (){var statearr_27982 = state_27976;
(statearr_27982[(12)] = inst_27924__$1);

return statearr_27982;
})();
if(cljs.core.truth_(inst_27925)){
var statearr_27983_28065 = state_27976__$1;
(statearr_27983_28065[(1)] = (30));

} else {
var statearr_27984_28066 = state_27976__$1;
(statearr_27984_28066[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (1))){
var state_27976__$1 = state_27976;
var statearr_27985_28067 = state_27976__$1;
(statearr_27985_28067[(2)] = null);

(statearr_27985_28067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (24))){
var inst_27875 = (state_27976[(7)]);
var inst_27894 = (state_27976[(2)]);
var inst_27895 = cljs.core.next.call(null,inst_27875);
var inst_27853 = inst_27895;
var inst_27854 = null;
var inst_27855 = (0);
var inst_27856 = (0);
var state_27976__$1 = (function (){var statearr_27986 = state_27976;
(statearr_27986[(13)] = inst_27856);

(statearr_27986[(14)] = inst_27853);

(statearr_27986[(15)] = inst_27854);

(statearr_27986[(16)] = inst_27855);

(statearr_27986[(17)] = inst_27894);

return statearr_27986;
})();
var statearr_27987_28068 = state_27976__$1;
(statearr_27987_28068[(2)] = null);

(statearr_27987_28068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (39))){
var state_27976__$1 = state_27976;
var statearr_27991_28069 = state_27976__$1;
(statearr_27991_28069[(2)] = null);

(statearr_27991_28069[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (4))){
var inst_27844 = (state_27976[(9)]);
var inst_27844__$1 = (state_27976[(2)]);
var inst_27845 = (inst_27844__$1 == null);
var state_27976__$1 = (function (){var statearr_27992 = state_27976;
(statearr_27992[(9)] = inst_27844__$1);

return statearr_27992;
})();
if(cljs.core.truth_(inst_27845)){
var statearr_27993_28070 = state_27976__$1;
(statearr_27993_28070[(1)] = (5));

} else {
var statearr_27994_28071 = state_27976__$1;
(statearr_27994_28071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (15))){
var inst_27856 = (state_27976[(13)]);
var inst_27853 = (state_27976[(14)]);
var inst_27854 = (state_27976[(15)]);
var inst_27855 = (state_27976[(16)]);
var inst_27871 = (state_27976[(2)]);
var inst_27872 = (inst_27856 + (1));
var tmp27988 = inst_27853;
var tmp27989 = inst_27854;
var tmp27990 = inst_27855;
var inst_27853__$1 = tmp27988;
var inst_27854__$1 = tmp27989;
var inst_27855__$1 = tmp27990;
var inst_27856__$1 = inst_27872;
var state_27976__$1 = (function (){var statearr_27995 = state_27976;
(statearr_27995[(13)] = inst_27856__$1);

(statearr_27995[(14)] = inst_27853__$1);

(statearr_27995[(15)] = inst_27854__$1);

(statearr_27995[(16)] = inst_27855__$1);

(statearr_27995[(18)] = inst_27871);

return statearr_27995;
})();
var statearr_27996_28072 = state_27976__$1;
(statearr_27996_28072[(2)] = null);

(statearr_27996_28072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (21))){
var inst_27898 = (state_27976[(2)]);
var state_27976__$1 = state_27976;
var statearr_28000_28073 = state_27976__$1;
(statearr_28000_28073[(2)] = inst_27898);

(statearr_28000_28073[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (31))){
var inst_27924 = (state_27976[(12)]);
var inst_27928 = done.call(null,null);
var inst_27929 = cljs.core.async.untap_STAR_.call(null,m,inst_27924);
var state_27976__$1 = (function (){var statearr_28001 = state_27976;
(statearr_28001[(19)] = inst_27928);

return statearr_28001;
})();
var statearr_28002_28074 = state_27976__$1;
(statearr_28002_28074[(2)] = inst_27929);

(statearr_28002_28074[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (32))){
var inst_27917 = (state_27976[(10)]);
var inst_27916 = (state_27976[(20)]);
var inst_27919 = (state_27976[(11)]);
var inst_27918 = (state_27976[(21)]);
var inst_27931 = (state_27976[(2)]);
var inst_27932 = (inst_27919 + (1));
var tmp27997 = inst_27917;
var tmp27998 = inst_27916;
var tmp27999 = inst_27918;
var inst_27916__$1 = tmp27998;
var inst_27917__$1 = tmp27997;
var inst_27918__$1 = tmp27999;
var inst_27919__$1 = inst_27932;
var state_27976__$1 = (function (){var statearr_28003 = state_27976;
(statearr_28003[(10)] = inst_27917__$1);

(statearr_28003[(22)] = inst_27931);

(statearr_28003[(20)] = inst_27916__$1);

(statearr_28003[(11)] = inst_27919__$1);

(statearr_28003[(21)] = inst_27918__$1);

return statearr_28003;
})();
var statearr_28004_28075 = state_27976__$1;
(statearr_28004_28075[(2)] = null);

(statearr_28004_28075[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (40))){
var inst_27944 = (state_27976[(23)]);
var inst_27948 = done.call(null,null);
var inst_27949 = cljs.core.async.untap_STAR_.call(null,m,inst_27944);
var state_27976__$1 = (function (){var statearr_28005 = state_27976;
(statearr_28005[(24)] = inst_27948);

return statearr_28005;
})();
var statearr_28006_28076 = state_27976__$1;
(statearr_28006_28076[(2)] = inst_27949);

(statearr_28006_28076[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (33))){
var inst_27935 = (state_27976[(25)]);
var inst_27937 = cljs.core.chunked_seq_QMARK_.call(null,inst_27935);
var state_27976__$1 = state_27976;
if(inst_27937){
var statearr_28007_28077 = state_27976__$1;
(statearr_28007_28077[(1)] = (36));

} else {
var statearr_28008_28078 = state_27976__$1;
(statearr_28008_28078[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (13))){
var inst_27865 = (state_27976[(26)]);
var inst_27868 = cljs.core.async.close_BANG_.call(null,inst_27865);
var state_27976__$1 = state_27976;
var statearr_28009_28079 = state_27976__$1;
(statearr_28009_28079[(2)] = inst_27868);

(statearr_28009_28079[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (22))){
var inst_27888 = (state_27976[(8)]);
var inst_27891 = cljs.core.async.close_BANG_.call(null,inst_27888);
var state_27976__$1 = state_27976;
var statearr_28010_28080 = state_27976__$1;
(statearr_28010_28080[(2)] = inst_27891);

(statearr_28010_28080[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (36))){
var inst_27935 = (state_27976[(25)]);
var inst_27939 = cljs.core.chunk_first.call(null,inst_27935);
var inst_27940 = cljs.core.chunk_rest.call(null,inst_27935);
var inst_27941 = cljs.core.count.call(null,inst_27939);
var inst_27916 = inst_27940;
var inst_27917 = inst_27939;
var inst_27918 = inst_27941;
var inst_27919 = (0);
var state_27976__$1 = (function (){var statearr_28011 = state_27976;
(statearr_28011[(10)] = inst_27917);

(statearr_28011[(20)] = inst_27916);

(statearr_28011[(11)] = inst_27919);

(statearr_28011[(21)] = inst_27918);

return statearr_28011;
})();
var statearr_28012_28081 = state_27976__$1;
(statearr_28012_28081[(2)] = null);

(statearr_28012_28081[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (41))){
var inst_27935 = (state_27976[(25)]);
var inst_27951 = (state_27976[(2)]);
var inst_27952 = cljs.core.next.call(null,inst_27935);
var inst_27916 = inst_27952;
var inst_27917 = null;
var inst_27918 = (0);
var inst_27919 = (0);
var state_27976__$1 = (function (){var statearr_28013 = state_27976;
(statearr_28013[(27)] = inst_27951);

(statearr_28013[(10)] = inst_27917);

(statearr_28013[(20)] = inst_27916);

(statearr_28013[(11)] = inst_27919);

(statearr_28013[(21)] = inst_27918);

return statearr_28013;
})();
var statearr_28014_28082 = state_27976__$1;
(statearr_28014_28082[(2)] = null);

(statearr_28014_28082[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (43))){
var state_27976__$1 = state_27976;
var statearr_28015_28083 = state_27976__$1;
(statearr_28015_28083[(2)] = null);

(statearr_28015_28083[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (29))){
var inst_27960 = (state_27976[(2)]);
var state_27976__$1 = state_27976;
var statearr_28016_28084 = state_27976__$1;
(statearr_28016_28084[(2)] = inst_27960);

(statearr_28016_28084[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (44))){
var inst_27969 = (state_27976[(2)]);
var state_27976__$1 = (function (){var statearr_28017 = state_27976;
(statearr_28017[(28)] = inst_27969);

return statearr_28017;
})();
var statearr_28018_28085 = state_27976__$1;
(statearr_28018_28085[(2)] = null);

(statearr_28018_28085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (6))){
var inst_27908 = (state_27976[(29)]);
var inst_27907 = cljs.core.deref.call(null,cs);
var inst_27908__$1 = cljs.core.keys.call(null,inst_27907);
var inst_27909 = cljs.core.count.call(null,inst_27908__$1);
var inst_27910 = cljs.core.reset_BANG_.call(null,dctr,inst_27909);
var inst_27915 = cljs.core.seq.call(null,inst_27908__$1);
var inst_27916 = inst_27915;
var inst_27917 = null;
var inst_27918 = (0);
var inst_27919 = (0);
var state_27976__$1 = (function (){var statearr_28019 = state_27976;
(statearr_28019[(30)] = inst_27910);

(statearr_28019[(29)] = inst_27908__$1);

(statearr_28019[(10)] = inst_27917);

(statearr_28019[(20)] = inst_27916);

(statearr_28019[(11)] = inst_27919);

(statearr_28019[(21)] = inst_27918);

return statearr_28019;
})();
var statearr_28020_28086 = state_27976__$1;
(statearr_28020_28086[(2)] = null);

(statearr_28020_28086[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (28))){
var inst_27916 = (state_27976[(20)]);
var inst_27935 = (state_27976[(25)]);
var inst_27935__$1 = cljs.core.seq.call(null,inst_27916);
var state_27976__$1 = (function (){var statearr_28021 = state_27976;
(statearr_28021[(25)] = inst_27935__$1);

return statearr_28021;
})();
if(inst_27935__$1){
var statearr_28022_28087 = state_27976__$1;
(statearr_28022_28087[(1)] = (33));

} else {
var statearr_28023_28088 = state_27976__$1;
(statearr_28023_28088[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (25))){
var inst_27919 = (state_27976[(11)]);
var inst_27918 = (state_27976[(21)]);
var inst_27921 = (inst_27919 < inst_27918);
var inst_27922 = inst_27921;
var state_27976__$1 = state_27976;
if(cljs.core.truth_(inst_27922)){
var statearr_28024_28089 = state_27976__$1;
(statearr_28024_28089[(1)] = (27));

} else {
var statearr_28025_28090 = state_27976__$1;
(statearr_28025_28090[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (34))){
var state_27976__$1 = state_27976;
var statearr_28026_28091 = state_27976__$1;
(statearr_28026_28091[(2)] = null);

(statearr_28026_28091[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (17))){
var state_27976__$1 = state_27976;
var statearr_28027_28092 = state_27976__$1;
(statearr_28027_28092[(2)] = null);

(statearr_28027_28092[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (3))){
var inst_27974 = (state_27976[(2)]);
var state_27976__$1 = state_27976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27976__$1,inst_27974);
} else {
if((state_val_27977 === (12))){
var inst_27903 = (state_27976[(2)]);
var state_27976__$1 = state_27976;
var statearr_28028_28093 = state_27976__$1;
(statearr_28028_28093[(2)] = inst_27903);

(statearr_28028_28093[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (2))){
var state_27976__$1 = state_27976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27976__$1,(4),ch);
} else {
if((state_val_27977 === (23))){
var state_27976__$1 = state_27976;
var statearr_28029_28094 = state_27976__$1;
(statearr_28029_28094[(2)] = null);

(statearr_28029_28094[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (35))){
var inst_27958 = (state_27976[(2)]);
var state_27976__$1 = state_27976;
var statearr_28030_28095 = state_27976__$1;
(statearr_28030_28095[(2)] = inst_27958);

(statearr_28030_28095[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (19))){
var inst_27875 = (state_27976[(7)]);
var inst_27879 = cljs.core.chunk_first.call(null,inst_27875);
var inst_27880 = cljs.core.chunk_rest.call(null,inst_27875);
var inst_27881 = cljs.core.count.call(null,inst_27879);
var inst_27853 = inst_27880;
var inst_27854 = inst_27879;
var inst_27855 = inst_27881;
var inst_27856 = (0);
var state_27976__$1 = (function (){var statearr_28031 = state_27976;
(statearr_28031[(13)] = inst_27856);

(statearr_28031[(14)] = inst_27853);

(statearr_28031[(15)] = inst_27854);

(statearr_28031[(16)] = inst_27855);

return statearr_28031;
})();
var statearr_28032_28096 = state_27976__$1;
(statearr_28032_28096[(2)] = null);

(statearr_28032_28096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (11))){
var inst_27875 = (state_27976[(7)]);
var inst_27853 = (state_27976[(14)]);
var inst_27875__$1 = cljs.core.seq.call(null,inst_27853);
var state_27976__$1 = (function (){var statearr_28033 = state_27976;
(statearr_28033[(7)] = inst_27875__$1);

return statearr_28033;
})();
if(inst_27875__$1){
var statearr_28034_28097 = state_27976__$1;
(statearr_28034_28097[(1)] = (16));

} else {
var statearr_28035_28098 = state_27976__$1;
(statearr_28035_28098[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (9))){
var inst_27905 = (state_27976[(2)]);
var state_27976__$1 = state_27976;
var statearr_28036_28099 = state_27976__$1;
(statearr_28036_28099[(2)] = inst_27905);

(statearr_28036_28099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (5))){
var inst_27851 = cljs.core.deref.call(null,cs);
var inst_27852 = cljs.core.seq.call(null,inst_27851);
var inst_27853 = inst_27852;
var inst_27854 = null;
var inst_27855 = (0);
var inst_27856 = (0);
var state_27976__$1 = (function (){var statearr_28037 = state_27976;
(statearr_28037[(13)] = inst_27856);

(statearr_28037[(14)] = inst_27853);

(statearr_28037[(15)] = inst_27854);

(statearr_28037[(16)] = inst_27855);

return statearr_28037;
})();
var statearr_28038_28100 = state_27976__$1;
(statearr_28038_28100[(2)] = null);

(statearr_28038_28100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (14))){
var state_27976__$1 = state_27976;
var statearr_28039_28101 = state_27976__$1;
(statearr_28039_28101[(2)] = null);

(statearr_28039_28101[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (45))){
var inst_27966 = (state_27976[(2)]);
var state_27976__$1 = state_27976;
var statearr_28040_28102 = state_27976__$1;
(statearr_28040_28102[(2)] = inst_27966);

(statearr_28040_28102[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (26))){
var inst_27908 = (state_27976[(29)]);
var inst_27962 = (state_27976[(2)]);
var inst_27963 = cljs.core.seq.call(null,inst_27908);
var state_27976__$1 = (function (){var statearr_28041 = state_27976;
(statearr_28041[(31)] = inst_27962);

return statearr_28041;
})();
if(inst_27963){
var statearr_28042_28103 = state_27976__$1;
(statearr_28042_28103[(1)] = (42));

} else {
var statearr_28043_28104 = state_27976__$1;
(statearr_28043_28104[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (16))){
var inst_27875 = (state_27976[(7)]);
var inst_27877 = cljs.core.chunked_seq_QMARK_.call(null,inst_27875);
var state_27976__$1 = state_27976;
if(inst_27877){
var statearr_28044_28105 = state_27976__$1;
(statearr_28044_28105[(1)] = (19));

} else {
var statearr_28045_28106 = state_27976__$1;
(statearr_28045_28106[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (38))){
var inst_27955 = (state_27976[(2)]);
var state_27976__$1 = state_27976;
var statearr_28046_28107 = state_27976__$1;
(statearr_28046_28107[(2)] = inst_27955);

(statearr_28046_28107[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (30))){
var state_27976__$1 = state_27976;
var statearr_28047_28108 = state_27976__$1;
(statearr_28047_28108[(2)] = null);

(statearr_28047_28108[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (10))){
var inst_27856 = (state_27976[(13)]);
var inst_27854 = (state_27976[(15)]);
var inst_27864 = cljs.core._nth.call(null,inst_27854,inst_27856);
var inst_27865 = cljs.core.nth.call(null,inst_27864,(0),null);
var inst_27866 = cljs.core.nth.call(null,inst_27864,(1),null);
var state_27976__$1 = (function (){var statearr_28048 = state_27976;
(statearr_28048[(26)] = inst_27865);

return statearr_28048;
})();
if(cljs.core.truth_(inst_27866)){
var statearr_28049_28109 = state_27976__$1;
(statearr_28049_28109[(1)] = (13));

} else {
var statearr_28050_28110 = state_27976__$1;
(statearr_28050_28110[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (18))){
var inst_27901 = (state_27976[(2)]);
var state_27976__$1 = state_27976;
var statearr_28051_28111 = state_27976__$1;
(statearr_28051_28111[(2)] = inst_27901);

(statearr_28051_28111[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (42))){
var state_27976__$1 = state_27976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27976__$1,(45),dchan);
} else {
if((state_val_27977 === (37))){
var inst_27844 = (state_27976[(9)]);
var inst_27935 = (state_27976[(25)]);
var inst_27944 = (state_27976[(23)]);
var inst_27944__$1 = cljs.core.first.call(null,inst_27935);
var inst_27945 = cljs.core.async.put_BANG_.call(null,inst_27944__$1,inst_27844,done);
var state_27976__$1 = (function (){var statearr_28052 = state_27976;
(statearr_28052[(23)] = inst_27944__$1);

return statearr_28052;
})();
if(cljs.core.truth_(inst_27945)){
var statearr_28053_28112 = state_27976__$1;
(statearr_28053_28112[(1)] = (39));

} else {
var statearr_28054_28113 = state_27976__$1;
(statearr_28054_28113[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (8))){
var inst_27856 = (state_27976[(13)]);
var inst_27855 = (state_27976[(16)]);
var inst_27858 = (inst_27856 < inst_27855);
var inst_27859 = inst_27858;
var state_27976__$1 = state_27976;
if(cljs.core.truth_(inst_27859)){
var statearr_28055_28114 = state_27976__$1;
(statearr_28055_28114[(1)] = (10));

} else {
var statearr_28056_28115 = state_27976__$1;
(statearr_28056_28115[(1)] = (11));

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
});})(c__27242__auto___28061,cs,m,dchan,dctr,done))
;
return ((function (switch__27147__auto__,c__27242__auto___28061,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27148__auto__ = null;
var cljs$core$async$mult_$_state_machine__27148__auto____0 = (function (){
var statearr_28057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28057[(0)] = cljs$core$async$mult_$_state_machine__27148__auto__);

(statearr_28057[(1)] = (1));

return statearr_28057;
});
var cljs$core$async$mult_$_state_machine__27148__auto____1 = (function (state_27976){
while(true){
var ret_value__27149__auto__ = (function (){try{while(true){
var result__27150__auto__ = switch__27147__auto__.call(null,state_27976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27150__auto__;
}
break;
}
}catch (e28058){if((e28058 instanceof Object)){
var ex__27151__auto__ = e28058;
var statearr_28059_28116 = state_27976;
(statearr_28059_28116[(5)] = ex__27151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28117 = state_27976;
state_27976 = G__28117;
continue;
} else {
return ret_value__27149__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27148__auto__ = function(state_27976){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27148__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27148__auto____1.call(this,state_27976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27148__auto____0;
cljs$core$async$mult_$_state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27148__auto____1;
return cljs$core$async$mult_$_state_machine__27148__auto__;
})()
;})(switch__27147__auto__,c__27242__auto___28061,cs,m,dchan,dctr,done))
})();
var state__27244__auto__ = (function (){var statearr_28060 = f__27243__auto__.call(null);
(statearr_28060[(6)] = c__27242__auto___28061);

return statearr_28060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27244__auto__);
});})(c__27242__auto___28061,cs,m,dchan,dctr,done))
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
var G__28119 = arguments.length;
switch (G__28119) {
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
var len__4641__auto___28131 = arguments.length;
var i__4642__auto___28132 = (0);
while(true){
if((i__4642__auto___28132 < len__4641__auto___28131)){
args__4647__auto__.push((arguments[i__4642__auto___28132]));

var G__28133 = (i__4642__auto___28132 + (1));
i__4642__auto___28132 = G__28133;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28125){
var map__28126 = p__28125;
var map__28126__$1 = (((((!((map__28126 == null))))?(((((map__28126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28126):map__28126);
var opts = map__28126__$1;
var statearr_28128_28134 = state;
(statearr_28128_28134[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__28126,map__28126__$1,opts){
return (function (val){
var statearr_28129_28135 = state;
(statearr_28129_28135[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28126,map__28126__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_28130_28136 = state;
(statearr_28130_28136[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28121){
var G__28122 = cljs.core.first.call(null,seq28121);
var seq28121__$1 = cljs.core.next.call(null,seq28121);
var G__28123 = cljs.core.first.call(null,seq28121__$1);
var seq28121__$2 = cljs.core.next.call(null,seq28121__$1);
var G__28124 = cljs.core.first.call(null,seq28121__$2);
var seq28121__$3 = cljs.core.next.call(null,seq28121__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28122,G__28123,G__28124,seq28121__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28137 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28137 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28138){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28138 = meta28138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28139,meta28138__$1){
var self__ = this;
var _28139__$1 = this;
return (new cljs.core.async.t_cljs$core$async28137(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28138__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28137.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28139){
var self__ = this;
var _28139__$1 = this;
return self__.meta28138;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28137.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28137.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28137.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28137.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28137.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28137.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28137.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28137.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async28137.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28138","meta28138",698641462,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28137";

cljs.core.async.t_cljs$core$async28137.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async28137");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28137.
 */
cljs.core.async.__GT_t_cljs$core$async28137 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28137(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28138){
return (new cljs.core.async.t_cljs$core$async28137(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28138));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28137(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27242__auto___28301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27242__auto___28301,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27243__auto__ = (function (){var switch__27147__auto__ = ((function (c__27242__auto___28301,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28241){
var state_val_28242 = (state_28241[(1)]);
if((state_val_28242 === (7))){
var inst_28156 = (state_28241[(2)]);
var state_28241__$1 = state_28241;
var statearr_28243_28302 = state_28241__$1;
(statearr_28243_28302[(2)] = inst_28156);

(statearr_28243_28302[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (20))){
var inst_28168 = (state_28241[(7)]);
var state_28241__$1 = state_28241;
var statearr_28244_28303 = state_28241__$1;
(statearr_28244_28303[(2)] = inst_28168);

(statearr_28244_28303[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (27))){
var state_28241__$1 = state_28241;
var statearr_28245_28304 = state_28241__$1;
(statearr_28245_28304[(2)] = null);

(statearr_28245_28304[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (1))){
var inst_28143 = (state_28241[(8)]);
var inst_28143__$1 = calc_state.call(null);
var inst_28145 = (inst_28143__$1 == null);
var inst_28146 = cljs.core.not.call(null,inst_28145);
var state_28241__$1 = (function (){var statearr_28246 = state_28241;
(statearr_28246[(8)] = inst_28143__$1);

return statearr_28246;
})();
if(inst_28146){
var statearr_28247_28305 = state_28241__$1;
(statearr_28247_28305[(1)] = (2));

} else {
var statearr_28248_28306 = state_28241__$1;
(statearr_28248_28306[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (24))){
var inst_28201 = (state_28241[(9)]);
var inst_28215 = (state_28241[(10)]);
var inst_28192 = (state_28241[(11)]);
var inst_28215__$1 = inst_28192.call(null,inst_28201);
var state_28241__$1 = (function (){var statearr_28249 = state_28241;
(statearr_28249[(10)] = inst_28215__$1);

return statearr_28249;
})();
if(cljs.core.truth_(inst_28215__$1)){
var statearr_28250_28307 = state_28241__$1;
(statearr_28250_28307[(1)] = (29));

} else {
var statearr_28251_28308 = state_28241__$1;
(statearr_28251_28308[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (4))){
var inst_28159 = (state_28241[(2)]);
var state_28241__$1 = state_28241;
if(cljs.core.truth_(inst_28159)){
var statearr_28252_28309 = state_28241__$1;
(statearr_28252_28309[(1)] = (8));

} else {
var statearr_28253_28310 = state_28241__$1;
(statearr_28253_28310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (15))){
var inst_28186 = (state_28241[(2)]);
var state_28241__$1 = state_28241;
if(cljs.core.truth_(inst_28186)){
var statearr_28254_28311 = state_28241__$1;
(statearr_28254_28311[(1)] = (19));

} else {
var statearr_28255_28312 = state_28241__$1;
(statearr_28255_28312[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (21))){
var inst_28191 = (state_28241[(12)]);
var inst_28191__$1 = (state_28241[(2)]);
var inst_28192 = cljs.core.get.call(null,inst_28191__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28193 = cljs.core.get.call(null,inst_28191__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28194 = cljs.core.get.call(null,inst_28191__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28241__$1 = (function (){var statearr_28256 = state_28241;
(statearr_28256[(13)] = inst_28193);

(statearr_28256[(12)] = inst_28191__$1);

(statearr_28256[(11)] = inst_28192);

return statearr_28256;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28241__$1,(22),inst_28194);
} else {
if((state_val_28242 === (31))){
var inst_28223 = (state_28241[(2)]);
var state_28241__$1 = state_28241;
if(cljs.core.truth_(inst_28223)){
var statearr_28257_28313 = state_28241__$1;
(statearr_28257_28313[(1)] = (32));

} else {
var statearr_28258_28314 = state_28241__$1;
(statearr_28258_28314[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (32))){
var inst_28200 = (state_28241[(14)]);
var state_28241__$1 = state_28241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28241__$1,(35),out,inst_28200);
} else {
if((state_val_28242 === (33))){
var inst_28191 = (state_28241[(12)]);
var inst_28168 = inst_28191;
var state_28241__$1 = (function (){var statearr_28259 = state_28241;
(statearr_28259[(7)] = inst_28168);

return statearr_28259;
})();
var statearr_28260_28315 = state_28241__$1;
(statearr_28260_28315[(2)] = null);

(statearr_28260_28315[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (13))){
var inst_28168 = (state_28241[(7)]);
var inst_28175 = inst_28168.cljs$lang$protocol_mask$partition0$;
var inst_28176 = (inst_28175 & (64));
var inst_28177 = inst_28168.cljs$core$ISeq$;
var inst_28178 = (cljs.core.PROTOCOL_SENTINEL === inst_28177);
var inst_28179 = ((inst_28176) || (inst_28178));
var state_28241__$1 = state_28241;
if(cljs.core.truth_(inst_28179)){
var statearr_28261_28316 = state_28241__$1;
(statearr_28261_28316[(1)] = (16));

} else {
var statearr_28262_28317 = state_28241__$1;
(statearr_28262_28317[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (22))){
var inst_28200 = (state_28241[(14)]);
var inst_28201 = (state_28241[(9)]);
var inst_28199 = (state_28241[(2)]);
var inst_28200__$1 = cljs.core.nth.call(null,inst_28199,(0),null);
var inst_28201__$1 = cljs.core.nth.call(null,inst_28199,(1),null);
var inst_28202 = (inst_28200__$1 == null);
var inst_28203 = cljs.core._EQ_.call(null,inst_28201__$1,change);
var inst_28204 = ((inst_28202) || (inst_28203));
var state_28241__$1 = (function (){var statearr_28263 = state_28241;
(statearr_28263[(14)] = inst_28200__$1);

(statearr_28263[(9)] = inst_28201__$1);

return statearr_28263;
})();
if(cljs.core.truth_(inst_28204)){
var statearr_28264_28318 = state_28241__$1;
(statearr_28264_28318[(1)] = (23));

} else {
var statearr_28265_28319 = state_28241__$1;
(statearr_28265_28319[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (36))){
var inst_28191 = (state_28241[(12)]);
var inst_28168 = inst_28191;
var state_28241__$1 = (function (){var statearr_28266 = state_28241;
(statearr_28266[(7)] = inst_28168);

return statearr_28266;
})();
var statearr_28267_28320 = state_28241__$1;
(statearr_28267_28320[(2)] = null);

(statearr_28267_28320[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (29))){
var inst_28215 = (state_28241[(10)]);
var state_28241__$1 = state_28241;
var statearr_28268_28321 = state_28241__$1;
(statearr_28268_28321[(2)] = inst_28215);

(statearr_28268_28321[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (6))){
var state_28241__$1 = state_28241;
var statearr_28269_28322 = state_28241__$1;
(statearr_28269_28322[(2)] = false);

(statearr_28269_28322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (28))){
var inst_28211 = (state_28241[(2)]);
var inst_28212 = calc_state.call(null);
var inst_28168 = inst_28212;
var state_28241__$1 = (function (){var statearr_28270 = state_28241;
(statearr_28270[(15)] = inst_28211);

(statearr_28270[(7)] = inst_28168);

return statearr_28270;
})();
var statearr_28271_28323 = state_28241__$1;
(statearr_28271_28323[(2)] = null);

(statearr_28271_28323[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (25))){
var inst_28237 = (state_28241[(2)]);
var state_28241__$1 = state_28241;
var statearr_28272_28324 = state_28241__$1;
(statearr_28272_28324[(2)] = inst_28237);

(statearr_28272_28324[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (34))){
var inst_28235 = (state_28241[(2)]);
var state_28241__$1 = state_28241;
var statearr_28273_28325 = state_28241__$1;
(statearr_28273_28325[(2)] = inst_28235);

(statearr_28273_28325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (17))){
var state_28241__$1 = state_28241;
var statearr_28274_28326 = state_28241__$1;
(statearr_28274_28326[(2)] = false);

(statearr_28274_28326[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (3))){
var state_28241__$1 = state_28241;
var statearr_28275_28327 = state_28241__$1;
(statearr_28275_28327[(2)] = false);

(statearr_28275_28327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (12))){
var inst_28239 = (state_28241[(2)]);
var state_28241__$1 = state_28241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28241__$1,inst_28239);
} else {
if((state_val_28242 === (2))){
var inst_28143 = (state_28241[(8)]);
var inst_28148 = inst_28143.cljs$lang$protocol_mask$partition0$;
var inst_28149 = (inst_28148 & (64));
var inst_28150 = inst_28143.cljs$core$ISeq$;
var inst_28151 = (cljs.core.PROTOCOL_SENTINEL === inst_28150);
var inst_28152 = ((inst_28149) || (inst_28151));
var state_28241__$1 = state_28241;
if(cljs.core.truth_(inst_28152)){
var statearr_28276_28328 = state_28241__$1;
(statearr_28276_28328[(1)] = (5));

} else {
var statearr_28277_28329 = state_28241__$1;
(statearr_28277_28329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (23))){
var inst_28200 = (state_28241[(14)]);
var inst_28206 = (inst_28200 == null);
var state_28241__$1 = state_28241;
if(cljs.core.truth_(inst_28206)){
var statearr_28278_28330 = state_28241__$1;
(statearr_28278_28330[(1)] = (26));

} else {
var statearr_28279_28331 = state_28241__$1;
(statearr_28279_28331[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (35))){
var inst_28226 = (state_28241[(2)]);
var state_28241__$1 = state_28241;
if(cljs.core.truth_(inst_28226)){
var statearr_28280_28332 = state_28241__$1;
(statearr_28280_28332[(1)] = (36));

} else {
var statearr_28281_28333 = state_28241__$1;
(statearr_28281_28333[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (19))){
var inst_28168 = (state_28241[(7)]);
var inst_28188 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28168);
var state_28241__$1 = state_28241;
var statearr_28282_28334 = state_28241__$1;
(statearr_28282_28334[(2)] = inst_28188);

(statearr_28282_28334[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (11))){
var inst_28168 = (state_28241[(7)]);
var inst_28172 = (inst_28168 == null);
var inst_28173 = cljs.core.not.call(null,inst_28172);
var state_28241__$1 = state_28241;
if(inst_28173){
var statearr_28283_28335 = state_28241__$1;
(statearr_28283_28335[(1)] = (13));

} else {
var statearr_28284_28336 = state_28241__$1;
(statearr_28284_28336[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (9))){
var inst_28143 = (state_28241[(8)]);
var state_28241__$1 = state_28241;
var statearr_28285_28337 = state_28241__$1;
(statearr_28285_28337[(2)] = inst_28143);

(statearr_28285_28337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (5))){
var state_28241__$1 = state_28241;
var statearr_28286_28338 = state_28241__$1;
(statearr_28286_28338[(2)] = true);

(statearr_28286_28338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (14))){
var state_28241__$1 = state_28241;
var statearr_28287_28339 = state_28241__$1;
(statearr_28287_28339[(2)] = false);

(statearr_28287_28339[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (26))){
var inst_28201 = (state_28241[(9)]);
var inst_28208 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28201);
var state_28241__$1 = state_28241;
var statearr_28288_28340 = state_28241__$1;
(statearr_28288_28340[(2)] = inst_28208);

(statearr_28288_28340[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (16))){
var state_28241__$1 = state_28241;
var statearr_28289_28341 = state_28241__$1;
(statearr_28289_28341[(2)] = true);

(statearr_28289_28341[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (38))){
var inst_28231 = (state_28241[(2)]);
var state_28241__$1 = state_28241;
var statearr_28290_28342 = state_28241__$1;
(statearr_28290_28342[(2)] = inst_28231);

(statearr_28290_28342[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (30))){
var inst_28193 = (state_28241[(13)]);
var inst_28201 = (state_28241[(9)]);
var inst_28192 = (state_28241[(11)]);
var inst_28218 = cljs.core.empty_QMARK_.call(null,inst_28192);
var inst_28219 = inst_28193.call(null,inst_28201);
var inst_28220 = cljs.core.not.call(null,inst_28219);
var inst_28221 = ((inst_28218) && (inst_28220));
var state_28241__$1 = state_28241;
var statearr_28291_28343 = state_28241__$1;
(statearr_28291_28343[(2)] = inst_28221);

(statearr_28291_28343[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (10))){
var inst_28143 = (state_28241[(8)]);
var inst_28164 = (state_28241[(2)]);
var inst_28165 = cljs.core.get.call(null,inst_28164,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28166 = cljs.core.get.call(null,inst_28164,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28167 = cljs.core.get.call(null,inst_28164,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28168 = inst_28143;
var state_28241__$1 = (function (){var statearr_28292 = state_28241;
(statearr_28292[(16)] = inst_28166);

(statearr_28292[(17)] = inst_28165);

(statearr_28292[(18)] = inst_28167);

(statearr_28292[(7)] = inst_28168);

return statearr_28292;
})();
var statearr_28293_28344 = state_28241__$1;
(statearr_28293_28344[(2)] = null);

(statearr_28293_28344[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (18))){
var inst_28183 = (state_28241[(2)]);
var state_28241__$1 = state_28241;
var statearr_28294_28345 = state_28241__$1;
(statearr_28294_28345[(2)] = inst_28183);

(statearr_28294_28345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (37))){
var state_28241__$1 = state_28241;
var statearr_28295_28346 = state_28241__$1;
(statearr_28295_28346[(2)] = null);

(statearr_28295_28346[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (8))){
var inst_28143 = (state_28241[(8)]);
var inst_28161 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28143);
var state_28241__$1 = state_28241;
var statearr_28296_28347 = state_28241__$1;
(statearr_28296_28347[(2)] = inst_28161);

(statearr_28296_28347[(1)] = (10));


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
});})(c__27242__auto___28301,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27147__auto__,c__27242__auto___28301,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27148__auto__ = null;
var cljs$core$async$mix_$_state_machine__27148__auto____0 = (function (){
var statearr_28297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28297[(0)] = cljs$core$async$mix_$_state_machine__27148__auto__);

(statearr_28297[(1)] = (1));

return statearr_28297;
});
var cljs$core$async$mix_$_state_machine__27148__auto____1 = (function (state_28241){
while(true){
var ret_value__27149__auto__ = (function (){try{while(true){
var result__27150__auto__ = switch__27147__auto__.call(null,state_28241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27150__auto__;
}
break;
}
}catch (e28298){if((e28298 instanceof Object)){
var ex__27151__auto__ = e28298;
var statearr_28299_28348 = state_28241;
(statearr_28299_28348[(5)] = ex__27151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28349 = state_28241;
state_28241 = G__28349;
continue;
} else {
return ret_value__27149__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27148__auto__ = function(state_28241){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27148__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27148__auto____1.call(this,state_28241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27148__auto____0;
cljs$core$async$mix_$_state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27148__auto____1;
return cljs$core$async$mix_$_state_machine__27148__auto__;
})()
;})(switch__27147__auto__,c__27242__auto___28301,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27244__auto__ = (function (){var statearr_28300 = f__27243__auto__.call(null);
(statearr_28300[(6)] = c__27242__auto___28301);

return statearr_28300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27244__auto__);
});})(c__27242__auto___28301,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__28351 = arguments.length;
switch (G__28351) {
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
var G__28355 = arguments.length;
switch (G__28355) {
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
return (function (p1__28353_SHARP_){
if(cljs.core.truth_(p1__28353_SHARP_.call(null,topic))){
return p1__28353_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28353_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28356 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28356 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28357){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28357 = meta28357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28358,meta28357__$1){
var self__ = this;
var _28358__$1 = this;
return (new cljs.core.async.t_cljs$core$async28356(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28357__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28356.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28358){
var self__ = this;
var _28358__$1 = this;
return self__.meta28357;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28356.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28356.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28356.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28356.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28356.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28356.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28356.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28356.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28357","meta28357",376946131,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28356.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28356";

cljs.core.async.t_cljs$core$async28356.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async28356");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28356.
 */
cljs.core.async.__GT_t_cljs$core$async28356 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28356(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28357){
return (new cljs.core.async.t_cljs$core$async28356(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28357));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28356(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27242__auto___28476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27242__auto___28476,mults,ensure_mult,p){
return (function (){
var f__27243__auto__ = (function (){var switch__27147__auto__ = ((function (c__27242__auto___28476,mults,ensure_mult,p){
return (function (state_28430){
var state_val_28431 = (state_28430[(1)]);
if((state_val_28431 === (7))){
var inst_28426 = (state_28430[(2)]);
var state_28430__$1 = state_28430;
var statearr_28432_28477 = state_28430__$1;
(statearr_28432_28477[(2)] = inst_28426);

(statearr_28432_28477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (20))){
var state_28430__$1 = state_28430;
var statearr_28433_28478 = state_28430__$1;
(statearr_28433_28478[(2)] = null);

(statearr_28433_28478[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (1))){
var state_28430__$1 = state_28430;
var statearr_28434_28479 = state_28430__$1;
(statearr_28434_28479[(2)] = null);

(statearr_28434_28479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (24))){
var inst_28409 = (state_28430[(7)]);
var inst_28418 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28409);
var state_28430__$1 = state_28430;
var statearr_28435_28480 = state_28430__$1;
(statearr_28435_28480[(2)] = inst_28418);

(statearr_28435_28480[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (4))){
var inst_28361 = (state_28430[(8)]);
var inst_28361__$1 = (state_28430[(2)]);
var inst_28362 = (inst_28361__$1 == null);
var state_28430__$1 = (function (){var statearr_28436 = state_28430;
(statearr_28436[(8)] = inst_28361__$1);

return statearr_28436;
})();
if(cljs.core.truth_(inst_28362)){
var statearr_28437_28481 = state_28430__$1;
(statearr_28437_28481[(1)] = (5));

} else {
var statearr_28438_28482 = state_28430__$1;
(statearr_28438_28482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (15))){
var inst_28403 = (state_28430[(2)]);
var state_28430__$1 = state_28430;
var statearr_28439_28483 = state_28430__$1;
(statearr_28439_28483[(2)] = inst_28403);

(statearr_28439_28483[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (21))){
var inst_28423 = (state_28430[(2)]);
var state_28430__$1 = (function (){var statearr_28440 = state_28430;
(statearr_28440[(9)] = inst_28423);

return statearr_28440;
})();
var statearr_28441_28484 = state_28430__$1;
(statearr_28441_28484[(2)] = null);

(statearr_28441_28484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (13))){
var inst_28385 = (state_28430[(10)]);
var inst_28387 = cljs.core.chunked_seq_QMARK_.call(null,inst_28385);
var state_28430__$1 = state_28430;
if(inst_28387){
var statearr_28442_28485 = state_28430__$1;
(statearr_28442_28485[(1)] = (16));

} else {
var statearr_28443_28486 = state_28430__$1;
(statearr_28443_28486[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (22))){
var inst_28415 = (state_28430[(2)]);
var state_28430__$1 = state_28430;
if(cljs.core.truth_(inst_28415)){
var statearr_28444_28487 = state_28430__$1;
(statearr_28444_28487[(1)] = (23));

} else {
var statearr_28445_28488 = state_28430__$1;
(statearr_28445_28488[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (6))){
var inst_28409 = (state_28430[(7)]);
var inst_28361 = (state_28430[(8)]);
var inst_28411 = (state_28430[(11)]);
var inst_28409__$1 = topic_fn.call(null,inst_28361);
var inst_28410 = cljs.core.deref.call(null,mults);
var inst_28411__$1 = cljs.core.get.call(null,inst_28410,inst_28409__$1);
var state_28430__$1 = (function (){var statearr_28446 = state_28430;
(statearr_28446[(7)] = inst_28409__$1);

(statearr_28446[(11)] = inst_28411__$1);

return statearr_28446;
})();
if(cljs.core.truth_(inst_28411__$1)){
var statearr_28447_28489 = state_28430__$1;
(statearr_28447_28489[(1)] = (19));

} else {
var statearr_28448_28490 = state_28430__$1;
(statearr_28448_28490[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (25))){
var inst_28420 = (state_28430[(2)]);
var state_28430__$1 = state_28430;
var statearr_28449_28491 = state_28430__$1;
(statearr_28449_28491[(2)] = inst_28420);

(statearr_28449_28491[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (17))){
var inst_28385 = (state_28430[(10)]);
var inst_28394 = cljs.core.first.call(null,inst_28385);
var inst_28395 = cljs.core.async.muxch_STAR_.call(null,inst_28394);
var inst_28396 = cljs.core.async.close_BANG_.call(null,inst_28395);
var inst_28397 = cljs.core.next.call(null,inst_28385);
var inst_28371 = inst_28397;
var inst_28372 = null;
var inst_28373 = (0);
var inst_28374 = (0);
var state_28430__$1 = (function (){var statearr_28450 = state_28430;
(statearr_28450[(12)] = inst_28372);

(statearr_28450[(13)] = inst_28373);

(statearr_28450[(14)] = inst_28396);

(statearr_28450[(15)] = inst_28371);

(statearr_28450[(16)] = inst_28374);

return statearr_28450;
})();
var statearr_28451_28492 = state_28430__$1;
(statearr_28451_28492[(2)] = null);

(statearr_28451_28492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (3))){
var inst_28428 = (state_28430[(2)]);
var state_28430__$1 = state_28430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28430__$1,inst_28428);
} else {
if((state_val_28431 === (12))){
var inst_28405 = (state_28430[(2)]);
var state_28430__$1 = state_28430;
var statearr_28452_28493 = state_28430__$1;
(statearr_28452_28493[(2)] = inst_28405);

(statearr_28452_28493[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (2))){
var state_28430__$1 = state_28430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28430__$1,(4),ch);
} else {
if((state_val_28431 === (23))){
var state_28430__$1 = state_28430;
var statearr_28453_28494 = state_28430__$1;
(statearr_28453_28494[(2)] = null);

(statearr_28453_28494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (19))){
var inst_28361 = (state_28430[(8)]);
var inst_28411 = (state_28430[(11)]);
var inst_28413 = cljs.core.async.muxch_STAR_.call(null,inst_28411);
var state_28430__$1 = state_28430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28430__$1,(22),inst_28413,inst_28361);
} else {
if((state_val_28431 === (11))){
var inst_28385 = (state_28430[(10)]);
var inst_28371 = (state_28430[(15)]);
var inst_28385__$1 = cljs.core.seq.call(null,inst_28371);
var state_28430__$1 = (function (){var statearr_28454 = state_28430;
(statearr_28454[(10)] = inst_28385__$1);

return statearr_28454;
})();
if(inst_28385__$1){
var statearr_28455_28495 = state_28430__$1;
(statearr_28455_28495[(1)] = (13));

} else {
var statearr_28456_28496 = state_28430__$1;
(statearr_28456_28496[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (9))){
var inst_28407 = (state_28430[(2)]);
var state_28430__$1 = state_28430;
var statearr_28457_28497 = state_28430__$1;
(statearr_28457_28497[(2)] = inst_28407);

(statearr_28457_28497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (5))){
var inst_28368 = cljs.core.deref.call(null,mults);
var inst_28369 = cljs.core.vals.call(null,inst_28368);
var inst_28370 = cljs.core.seq.call(null,inst_28369);
var inst_28371 = inst_28370;
var inst_28372 = null;
var inst_28373 = (0);
var inst_28374 = (0);
var state_28430__$1 = (function (){var statearr_28458 = state_28430;
(statearr_28458[(12)] = inst_28372);

(statearr_28458[(13)] = inst_28373);

(statearr_28458[(15)] = inst_28371);

(statearr_28458[(16)] = inst_28374);

return statearr_28458;
})();
var statearr_28459_28498 = state_28430__$1;
(statearr_28459_28498[(2)] = null);

(statearr_28459_28498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (14))){
var state_28430__$1 = state_28430;
var statearr_28463_28499 = state_28430__$1;
(statearr_28463_28499[(2)] = null);

(statearr_28463_28499[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (16))){
var inst_28385 = (state_28430[(10)]);
var inst_28389 = cljs.core.chunk_first.call(null,inst_28385);
var inst_28390 = cljs.core.chunk_rest.call(null,inst_28385);
var inst_28391 = cljs.core.count.call(null,inst_28389);
var inst_28371 = inst_28390;
var inst_28372 = inst_28389;
var inst_28373 = inst_28391;
var inst_28374 = (0);
var state_28430__$1 = (function (){var statearr_28464 = state_28430;
(statearr_28464[(12)] = inst_28372);

(statearr_28464[(13)] = inst_28373);

(statearr_28464[(15)] = inst_28371);

(statearr_28464[(16)] = inst_28374);

return statearr_28464;
})();
var statearr_28465_28500 = state_28430__$1;
(statearr_28465_28500[(2)] = null);

(statearr_28465_28500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (10))){
var inst_28372 = (state_28430[(12)]);
var inst_28373 = (state_28430[(13)]);
var inst_28371 = (state_28430[(15)]);
var inst_28374 = (state_28430[(16)]);
var inst_28379 = cljs.core._nth.call(null,inst_28372,inst_28374);
var inst_28380 = cljs.core.async.muxch_STAR_.call(null,inst_28379);
var inst_28381 = cljs.core.async.close_BANG_.call(null,inst_28380);
var inst_28382 = (inst_28374 + (1));
var tmp28460 = inst_28372;
var tmp28461 = inst_28373;
var tmp28462 = inst_28371;
var inst_28371__$1 = tmp28462;
var inst_28372__$1 = tmp28460;
var inst_28373__$1 = tmp28461;
var inst_28374__$1 = inst_28382;
var state_28430__$1 = (function (){var statearr_28466 = state_28430;
(statearr_28466[(12)] = inst_28372__$1);

(statearr_28466[(13)] = inst_28373__$1);

(statearr_28466[(15)] = inst_28371__$1);

(statearr_28466[(16)] = inst_28374__$1);

(statearr_28466[(17)] = inst_28381);

return statearr_28466;
})();
var statearr_28467_28501 = state_28430__$1;
(statearr_28467_28501[(2)] = null);

(statearr_28467_28501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (18))){
var inst_28400 = (state_28430[(2)]);
var state_28430__$1 = state_28430;
var statearr_28468_28502 = state_28430__$1;
(statearr_28468_28502[(2)] = inst_28400);

(statearr_28468_28502[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (8))){
var inst_28373 = (state_28430[(13)]);
var inst_28374 = (state_28430[(16)]);
var inst_28376 = (inst_28374 < inst_28373);
var inst_28377 = inst_28376;
var state_28430__$1 = state_28430;
if(cljs.core.truth_(inst_28377)){
var statearr_28469_28503 = state_28430__$1;
(statearr_28469_28503[(1)] = (10));

} else {
var statearr_28470_28504 = state_28430__$1;
(statearr_28470_28504[(1)] = (11));

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
});})(c__27242__auto___28476,mults,ensure_mult,p))
;
return ((function (switch__27147__auto__,c__27242__auto___28476,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27148__auto__ = null;
var cljs$core$async$state_machine__27148__auto____0 = (function (){
var statearr_28471 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28471[(0)] = cljs$core$async$state_machine__27148__auto__);

(statearr_28471[(1)] = (1));

return statearr_28471;
});
var cljs$core$async$state_machine__27148__auto____1 = (function (state_28430){
while(true){
var ret_value__27149__auto__ = (function (){try{while(true){
var result__27150__auto__ = switch__27147__auto__.call(null,state_28430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27150__auto__;
}
break;
}
}catch (e28472){if((e28472 instanceof Object)){
var ex__27151__auto__ = e28472;
var statearr_28473_28505 = state_28430;
(statearr_28473_28505[(5)] = ex__27151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28506 = state_28430;
state_28430 = G__28506;
continue;
} else {
return ret_value__27149__auto__;
}
break;
}
});
cljs$core$async$state_machine__27148__auto__ = function(state_28430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27148__auto____1.call(this,state_28430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27148__auto____0;
cljs$core$async$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27148__auto____1;
return cljs$core$async$state_machine__27148__auto__;
})()
;})(switch__27147__auto__,c__27242__auto___28476,mults,ensure_mult,p))
})();
var state__27244__auto__ = (function (){var statearr_28474 = f__27243__auto__.call(null);
(statearr_28474[(6)] = c__27242__auto___28476);

return statearr_28474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27244__auto__);
});})(c__27242__auto___28476,mults,ensure_mult,p))
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
var G__28508 = arguments.length;
switch (G__28508) {
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
var G__28511 = arguments.length;
switch (G__28511) {
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
var G__28514 = arguments.length;
switch (G__28514) {
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
var c__27242__auto___28581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27242__auto___28581,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27243__auto__ = (function (){var switch__27147__auto__ = ((function (c__27242__auto___28581,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28553){
var state_val_28554 = (state_28553[(1)]);
if((state_val_28554 === (7))){
var state_28553__$1 = state_28553;
var statearr_28555_28582 = state_28553__$1;
(statearr_28555_28582[(2)] = null);

(statearr_28555_28582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28554 === (1))){
var state_28553__$1 = state_28553;
var statearr_28556_28583 = state_28553__$1;
(statearr_28556_28583[(2)] = null);

(statearr_28556_28583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28554 === (4))){
var inst_28517 = (state_28553[(7)]);
var inst_28519 = (inst_28517 < cnt);
var state_28553__$1 = state_28553;
if(cljs.core.truth_(inst_28519)){
var statearr_28557_28584 = state_28553__$1;
(statearr_28557_28584[(1)] = (6));

} else {
var statearr_28558_28585 = state_28553__$1;
(statearr_28558_28585[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28554 === (15))){
var inst_28549 = (state_28553[(2)]);
var state_28553__$1 = state_28553;
var statearr_28559_28586 = state_28553__$1;
(statearr_28559_28586[(2)] = inst_28549);

(statearr_28559_28586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28554 === (13))){
var inst_28542 = cljs.core.async.close_BANG_.call(null,out);
var state_28553__$1 = state_28553;
var statearr_28560_28587 = state_28553__$1;
(statearr_28560_28587[(2)] = inst_28542);

(statearr_28560_28587[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28554 === (6))){
var state_28553__$1 = state_28553;
var statearr_28561_28588 = state_28553__$1;
(statearr_28561_28588[(2)] = null);

(statearr_28561_28588[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28554 === (3))){
var inst_28551 = (state_28553[(2)]);
var state_28553__$1 = state_28553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28553__$1,inst_28551);
} else {
if((state_val_28554 === (12))){
var inst_28539 = (state_28553[(8)]);
var inst_28539__$1 = (state_28553[(2)]);
var inst_28540 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28539__$1);
var state_28553__$1 = (function (){var statearr_28562 = state_28553;
(statearr_28562[(8)] = inst_28539__$1);

return statearr_28562;
})();
if(cljs.core.truth_(inst_28540)){
var statearr_28563_28589 = state_28553__$1;
(statearr_28563_28589[(1)] = (13));

} else {
var statearr_28564_28590 = state_28553__$1;
(statearr_28564_28590[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28554 === (2))){
var inst_28516 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28517 = (0);
var state_28553__$1 = (function (){var statearr_28565 = state_28553;
(statearr_28565[(7)] = inst_28517);

(statearr_28565[(9)] = inst_28516);

return statearr_28565;
})();
var statearr_28566_28591 = state_28553__$1;
(statearr_28566_28591[(2)] = null);

(statearr_28566_28591[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28554 === (11))){
var inst_28517 = (state_28553[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28553,(10),Object,null,(9));
var inst_28526 = chs__$1.call(null,inst_28517);
var inst_28527 = done.call(null,inst_28517);
var inst_28528 = cljs.core.async.take_BANG_.call(null,inst_28526,inst_28527);
var state_28553__$1 = state_28553;
var statearr_28567_28592 = state_28553__$1;
(statearr_28567_28592[(2)] = inst_28528);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28553__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28554 === (9))){
var inst_28517 = (state_28553[(7)]);
var inst_28530 = (state_28553[(2)]);
var inst_28531 = (inst_28517 + (1));
var inst_28517__$1 = inst_28531;
var state_28553__$1 = (function (){var statearr_28568 = state_28553;
(statearr_28568[(10)] = inst_28530);

(statearr_28568[(7)] = inst_28517__$1);

return statearr_28568;
})();
var statearr_28569_28593 = state_28553__$1;
(statearr_28569_28593[(2)] = null);

(statearr_28569_28593[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28554 === (5))){
var inst_28537 = (state_28553[(2)]);
var state_28553__$1 = (function (){var statearr_28570 = state_28553;
(statearr_28570[(11)] = inst_28537);

return statearr_28570;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28553__$1,(12),dchan);
} else {
if((state_val_28554 === (14))){
var inst_28539 = (state_28553[(8)]);
var inst_28544 = cljs.core.apply.call(null,f,inst_28539);
var state_28553__$1 = state_28553;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28553__$1,(16),out,inst_28544);
} else {
if((state_val_28554 === (16))){
var inst_28546 = (state_28553[(2)]);
var state_28553__$1 = (function (){var statearr_28571 = state_28553;
(statearr_28571[(12)] = inst_28546);

return statearr_28571;
})();
var statearr_28572_28594 = state_28553__$1;
(statearr_28572_28594[(2)] = null);

(statearr_28572_28594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28554 === (10))){
var inst_28521 = (state_28553[(2)]);
var inst_28522 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28553__$1 = (function (){var statearr_28573 = state_28553;
(statearr_28573[(13)] = inst_28521);

return statearr_28573;
})();
var statearr_28574_28595 = state_28553__$1;
(statearr_28574_28595[(2)] = inst_28522);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28553__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28554 === (8))){
var inst_28535 = (state_28553[(2)]);
var state_28553__$1 = state_28553;
var statearr_28575_28596 = state_28553__$1;
(statearr_28575_28596[(2)] = inst_28535);

(statearr_28575_28596[(1)] = (5));


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
});})(c__27242__auto___28581,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27147__auto__,c__27242__auto___28581,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27148__auto__ = null;
var cljs$core$async$state_machine__27148__auto____0 = (function (){
var statearr_28576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28576[(0)] = cljs$core$async$state_machine__27148__auto__);

(statearr_28576[(1)] = (1));

return statearr_28576;
});
var cljs$core$async$state_machine__27148__auto____1 = (function (state_28553){
while(true){
var ret_value__27149__auto__ = (function (){try{while(true){
var result__27150__auto__ = switch__27147__auto__.call(null,state_28553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27150__auto__;
}
break;
}
}catch (e28577){if((e28577 instanceof Object)){
var ex__27151__auto__ = e28577;
var statearr_28578_28597 = state_28553;
(statearr_28578_28597[(5)] = ex__27151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28598 = state_28553;
state_28553 = G__28598;
continue;
} else {
return ret_value__27149__auto__;
}
break;
}
});
cljs$core$async$state_machine__27148__auto__ = function(state_28553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27148__auto____1.call(this,state_28553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27148__auto____0;
cljs$core$async$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27148__auto____1;
return cljs$core$async$state_machine__27148__auto__;
})()
;})(switch__27147__auto__,c__27242__auto___28581,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27244__auto__ = (function (){var statearr_28579 = f__27243__auto__.call(null);
(statearr_28579[(6)] = c__27242__auto___28581);

return statearr_28579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27244__auto__);
});})(c__27242__auto___28581,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__28601 = arguments.length;
switch (G__28601) {
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
var c__27242__auto___28655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27242__auto___28655,out){
return (function (){
var f__27243__auto__ = (function (){var switch__27147__auto__ = ((function (c__27242__auto___28655,out){
return (function (state_28633){
var state_val_28634 = (state_28633[(1)]);
if((state_val_28634 === (7))){
var inst_28612 = (state_28633[(7)]);
var inst_28613 = (state_28633[(8)]);
var inst_28612__$1 = (state_28633[(2)]);
var inst_28613__$1 = cljs.core.nth.call(null,inst_28612__$1,(0),null);
var inst_28614 = cljs.core.nth.call(null,inst_28612__$1,(1),null);
var inst_28615 = (inst_28613__$1 == null);
var state_28633__$1 = (function (){var statearr_28635 = state_28633;
(statearr_28635[(9)] = inst_28614);

(statearr_28635[(7)] = inst_28612__$1);

(statearr_28635[(8)] = inst_28613__$1);

return statearr_28635;
})();
if(cljs.core.truth_(inst_28615)){
var statearr_28636_28656 = state_28633__$1;
(statearr_28636_28656[(1)] = (8));

} else {
var statearr_28637_28657 = state_28633__$1;
(statearr_28637_28657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (1))){
var inst_28602 = cljs.core.vec.call(null,chs);
var inst_28603 = inst_28602;
var state_28633__$1 = (function (){var statearr_28638 = state_28633;
(statearr_28638[(10)] = inst_28603);

return statearr_28638;
})();
var statearr_28639_28658 = state_28633__$1;
(statearr_28639_28658[(2)] = null);

(statearr_28639_28658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (4))){
var inst_28603 = (state_28633[(10)]);
var state_28633__$1 = state_28633;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28633__$1,(7),inst_28603);
} else {
if((state_val_28634 === (6))){
var inst_28629 = (state_28633[(2)]);
var state_28633__$1 = state_28633;
var statearr_28640_28659 = state_28633__$1;
(statearr_28640_28659[(2)] = inst_28629);

(statearr_28640_28659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (3))){
var inst_28631 = (state_28633[(2)]);
var state_28633__$1 = state_28633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28633__$1,inst_28631);
} else {
if((state_val_28634 === (2))){
var inst_28603 = (state_28633[(10)]);
var inst_28605 = cljs.core.count.call(null,inst_28603);
var inst_28606 = (inst_28605 > (0));
var state_28633__$1 = state_28633;
if(cljs.core.truth_(inst_28606)){
var statearr_28642_28660 = state_28633__$1;
(statearr_28642_28660[(1)] = (4));

} else {
var statearr_28643_28661 = state_28633__$1;
(statearr_28643_28661[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (11))){
var inst_28603 = (state_28633[(10)]);
var inst_28622 = (state_28633[(2)]);
var tmp28641 = inst_28603;
var inst_28603__$1 = tmp28641;
var state_28633__$1 = (function (){var statearr_28644 = state_28633;
(statearr_28644[(10)] = inst_28603__$1);

(statearr_28644[(11)] = inst_28622);

return statearr_28644;
})();
var statearr_28645_28662 = state_28633__$1;
(statearr_28645_28662[(2)] = null);

(statearr_28645_28662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (9))){
var inst_28613 = (state_28633[(8)]);
var state_28633__$1 = state_28633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28633__$1,(11),out,inst_28613);
} else {
if((state_val_28634 === (5))){
var inst_28627 = cljs.core.async.close_BANG_.call(null,out);
var state_28633__$1 = state_28633;
var statearr_28646_28663 = state_28633__$1;
(statearr_28646_28663[(2)] = inst_28627);

(statearr_28646_28663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (10))){
var inst_28625 = (state_28633[(2)]);
var state_28633__$1 = state_28633;
var statearr_28647_28664 = state_28633__$1;
(statearr_28647_28664[(2)] = inst_28625);

(statearr_28647_28664[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (8))){
var inst_28603 = (state_28633[(10)]);
var inst_28614 = (state_28633[(9)]);
var inst_28612 = (state_28633[(7)]);
var inst_28613 = (state_28633[(8)]);
var inst_28617 = (function (){var cs = inst_28603;
var vec__28608 = inst_28612;
var v = inst_28613;
var c = inst_28614;
return ((function (cs,vec__28608,v,c,inst_28603,inst_28614,inst_28612,inst_28613,state_val_28634,c__27242__auto___28655,out){
return (function (p1__28599_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28599_SHARP_);
});
;})(cs,vec__28608,v,c,inst_28603,inst_28614,inst_28612,inst_28613,state_val_28634,c__27242__auto___28655,out))
})();
var inst_28618 = cljs.core.filterv.call(null,inst_28617,inst_28603);
var inst_28603__$1 = inst_28618;
var state_28633__$1 = (function (){var statearr_28648 = state_28633;
(statearr_28648[(10)] = inst_28603__$1);

return statearr_28648;
})();
var statearr_28649_28665 = state_28633__$1;
(statearr_28649_28665[(2)] = null);

(statearr_28649_28665[(1)] = (2));


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
});})(c__27242__auto___28655,out))
;
return ((function (switch__27147__auto__,c__27242__auto___28655,out){
return (function() {
var cljs$core$async$state_machine__27148__auto__ = null;
var cljs$core$async$state_machine__27148__auto____0 = (function (){
var statearr_28650 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28650[(0)] = cljs$core$async$state_machine__27148__auto__);

(statearr_28650[(1)] = (1));

return statearr_28650;
});
var cljs$core$async$state_machine__27148__auto____1 = (function (state_28633){
while(true){
var ret_value__27149__auto__ = (function (){try{while(true){
var result__27150__auto__ = switch__27147__auto__.call(null,state_28633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27150__auto__;
}
break;
}
}catch (e28651){if((e28651 instanceof Object)){
var ex__27151__auto__ = e28651;
var statearr_28652_28666 = state_28633;
(statearr_28652_28666[(5)] = ex__27151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28667 = state_28633;
state_28633 = G__28667;
continue;
} else {
return ret_value__27149__auto__;
}
break;
}
});
cljs$core$async$state_machine__27148__auto__ = function(state_28633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27148__auto____1.call(this,state_28633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27148__auto____0;
cljs$core$async$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27148__auto____1;
return cljs$core$async$state_machine__27148__auto__;
})()
;})(switch__27147__auto__,c__27242__auto___28655,out))
})();
var state__27244__auto__ = (function (){var statearr_28653 = f__27243__auto__.call(null);
(statearr_28653[(6)] = c__27242__auto___28655);

return statearr_28653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27244__auto__);
});})(c__27242__auto___28655,out))
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
var G__28669 = arguments.length;
switch (G__28669) {
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
var c__27242__auto___28714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27242__auto___28714,out){
return (function (){
var f__27243__auto__ = (function (){var switch__27147__auto__ = ((function (c__27242__auto___28714,out){
return (function (state_28693){
var state_val_28694 = (state_28693[(1)]);
if((state_val_28694 === (7))){
var inst_28675 = (state_28693[(7)]);
var inst_28675__$1 = (state_28693[(2)]);
var inst_28676 = (inst_28675__$1 == null);
var inst_28677 = cljs.core.not.call(null,inst_28676);
var state_28693__$1 = (function (){var statearr_28695 = state_28693;
(statearr_28695[(7)] = inst_28675__$1);

return statearr_28695;
})();
if(inst_28677){
var statearr_28696_28715 = state_28693__$1;
(statearr_28696_28715[(1)] = (8));

} else {
var statearr_28697_28716 = state_28693__$1;
(statearr_28697_28716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (1))){
var inst_28670 = (0);
var state_28693__$1 = (function (){var statearr_28698 = state_28693;
(statearr_28698[(8)] = inst_28670);

return statearr_28698;
})();
var statearr_28699_28717 = state_28693__$1;
(statearr_28699_28717[(2)] = null);

(statearr_28699_28717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (4))){
var state_28693__$1 = state_28693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28693__$1,(7),ch);
} else {
if((state_val_28694 === (6))){
var inst_28688 = (state_28693[(2)]);
var state_28693__$1 = state_28693;
var statearr_28700_28718 = state_28693__$1;
(statearr_28700_28718[(2)] = inst_28688);

(statearr_28700_28718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (3))){
var inst_28690 = (state_28693[(2)]);
var inst_28691 = cljs.core.async.close_BANG_.call(null,out);
var state_28693__$1 = (function (){var statearr_28701 = state_28693;
(statearr_28701[(9)] = inst_28690);

return statearr_28701;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28693__$1,inst_28691);
} else {
if((state_val_28694 === (2))){
var inst_28670 = (state_28693[(8)]);
var inst_28672 = (inst_28670 < n);
var state_28693__$1 = state_28693;
if(cljs.core.truth_(inst_28672)){
var statearr_28702_28719 = state_28693__$1;
(statearr_28702_28719[(1)] = (4));

} else {
var statearr_28703_28720 = state_28693__$1;
(statearr_28703_28720[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (11))){
var inst_28670 = (state_28693[(8)]);
var inst_28680 = (state_28693[(2)]);
var inst_28681 = (inst_28670 + (1));
var inst_28670__$1 = inst_28681;
var state_28693__$1 = (function (){var statearr_28704 = state_28693;
(statearr_28704[(10)] = inst_28680);

(statearr_28704[(8)] = inst_28670__$1);

return statearr_28704;
})();
var statearr_28705_28721 = state_28693__$1;
(statearr_28705_28721[(2)] = null);

(statearr_28705_28721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (9))){
var state_28693__$1 = state_28693;
var statearr_28706_28722 = state_28693__$1;
(statearr_28706_28722[(2)] = null);

(statearr_28706_28722[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (5))){
var state_28693__$1 = state_28693;
var statearr_28707_28723 = state_28693__$1;
(statearr_28707_28723[(2)] = null);

(statearr_28707_28723[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (10))){
var inst_28685 = (state_28693[(2)]);
var state_28693__$1 = state_28693;
var statearr_28708_28724 = state_28693__$1;
(statearr_28708_28724[(2)] = inst_28685);

(statearr_28708_28724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (8))){
var inst_28675 = (state_28693[(7)]);
var state_28693__$1 = state_28693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28693__$1,(11),out,inst_28675);
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
});})(c__27242__auto___28714,out))
;
return ((function (switch__27147__auto__,c__27242__auto___28714,out){
return (function() {
var cljs$core$async$state_machine__27148__auto__ = null;
var cljs$core$async$state_machine__27148__auto____0 = (function (){
var statearr_28709 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28709[(0)] = cljs$core$async$state_machine__27148__auto__);

(statearr_28709[(1)] = (1));

return statearr_28709;
});
var cljs$core$async$state_machine__27148__auto____1 = (function (state_28693){
while(true){
var ret_value__27149__auto__ = (function (){try{while(true){
var result__27150__auto__ = switch__27147__auto__.call(null,state_28693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27150__auto__;
}
break;
}
}catch (e28710){if((e28710 instanceof Object)){
var ex__27151__auto__ = e28710;
var statearr_28711_28725 = state_28693;
(statearr_28711_28725[(5)] = ex__27151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28726 = state_28693;
state_28693 = G__28726;
continue;
} else {
return ret_value__27149__auto__;
}
break;
}
});
cljs$core$async$state_machine__27148__auto__ = function(state_28693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27148__auto____1.call(this,state_28693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27148__auto____0;
cljs$core$async$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27148__auto____1;
return cljs$core$async$state_machine__27148__auto__;
})()
;})(switch__27147__auto__,c__27242__auto___28714,out))
})();
var state__27244__auto__ = (function (){var statearr_28712 = f__27243__auto__.call(null);
(statearr_28712[(6)] = c__27242__auto___28714);

return statearr_28712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27244__auto__);
});})(c__27242__auto___28714,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28728 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28728 = (function (f,ch,meta28729){
this.f = f;
this.ch = ch;
this.meta28729 = meta28729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28730,meta28729__$1){
var self__ = this;
var _28730__$1 = this;
return (new cljs.core.async.t_cljs$core$async28728(self__.f,self__.ch,meta28729__$1));
});

cljs.core.async.t_cljs$core$async28728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28730){
var self__ = this;
var _28730__$1 = this;
return self__.meta28729;
});

cljs.core.async.t_cljs$core$async28728.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28728.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28728.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28728.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28728.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28731 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28731 = (function (f,ch,meta28729,_,fn1,meta28732){
this.f = f;
this.ch = ch;
this.meta28729 = meta28729;
this._ = _;
this.fn1 = fn1;
this.meta28732 = meta28732;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28733,meta28732__$1){
var self__ = this;
var _28733__$1 = this;
return (new cljs.core.async.t_cljs$core$async28731(self__.f,self__.ch,self__.meta28729,self__._,self__.fn1,meta28732__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28731.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28733){
var self__ = this;
var _28733__$1 = this;
return self__.meta28732;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28731.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28731.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28731.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28731.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28727_SHARP_){
return f1.call(null,(((p1__28727_SHARP_ == null))?null:self__.f.call(null,p1__28727_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28731.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28729","meta28729",-71876822,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28728","cljs.core.async/t_cljs$core$async28728",418580901,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28732","meta28732",-847618985,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28731.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28731.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28731";

cljs.core.async.t_cljs$core$async28731.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async28731");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28731.
 */
cljs.core.async.__GT_t_cljs$core$async28731 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28731(f__$1,ch__$1,meta28729__$1,___$2,fn1__$1,meta28732){
return (new cljs.core.async.t_cljs$core$async28731(f__$1,ch__$1,meta28729__$1,___$2,fn1__$1,meta28732));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28731(self__.f,self__.ch,self__.meta28729,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async28728.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28728.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28728.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28729","meta28729",-71876822,null)], null);
});

cljs.core.async.t_cljs$core$async28728.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28728.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28728";

cljs.core.async.t_cljs$core$async28728.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async28728");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28728.
 */
cljs.core.async.__GT_t_cljs$core$async28728 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28728(f__$1,ch__$1,meta28729){
return (new cljs.core.async.t_cljs$core$async28728(f__$1,ch__$1,meta28729));
});

}

return (new cljs.core.async.t_cljs$core$async28728(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28734 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28734 = (function (f,ch,meta28735){
this.f = f;
this.ch = ch;
this.meta28735 = meta28735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28736,meta28735__$1){
var self__ = this;
var _28736__$1 = this;
return (new cljs.core.async.t_cljs$core$async28734(self__.f,self__.ch,meta28735__$1));
});

cljs.core.async.t_cljs$core$async28734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28736){
var self__ = this;
var _28736__$1 = this;
return self__.meta28735;
});

cljs.core.async.t_cljs$core$async28734.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28734.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28734.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28734.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28734.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28734.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28735","meta28735",-48763174,null)], null);
});

cljs.core.async.t_cljs$core$async28734.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28734";

cljs.core.async.t_cljs$core$async28734.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async28734");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28734.
 */
cljs.core.async.__GT_t_cljs$core$async28734 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28734(f__$1,ch__$1,meta28735){
return (new cljs.core.async.t_cljs$core$async28734(f__$1,ch__$1,meta28735));
});

}

return (new cljs.core.async.t_cljs$core$async28734(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28737 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28737 = (function (p,ch,meta28738){
this.p = p;
this.ch = ch;
this.meta28738 = meta28738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28739,meta28738__$1){
var self__ = this;
var _28739__$1 = this;
return (new cljs.core.async.t_cljs$core$async28737(self__.p,self__.ch,meta28738__$1));
});

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28739){
var self__ = this;
var _28739__$1 = this;
return self__.meta28738;
});

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28738","meta28738",-1436967506,null)], null);
});

cljs.core.async.t_cljs$core$async28737.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28737";

cljs.core.async.t_cljs$core$async28737.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async28737");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28737.
 */
cljs.core.async.__GT_t_cljs$core$async28737 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28737(p__$1,ch__$1,meta28738){
return (new cljs.core.async.t_cljs$core$async28737(p__$1,ch__$1,meta28738));
});

}

return (new cljs.core.async.t_cljs$core$async28737(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28741 = arguments.length;
switch (G__28741) {
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
var c__27242__auto___28781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27242__auto___28781,out){
return (function (){
var f__27243__auto__ = (function (){var switch__27147__auto__ = ((function (c__27242__auto___28781,out){
return (function (state_28762){
var state_val_28763 = (state_28762[(1)]);
if((state_val_28763 === (7))){
var inst_28758 = (state_28762[(2)]);
var state_28762__$1 = state_28762;
var statearr_28764_28782 = state_28762__$1;
(statearr_28764_28782[(2)] = inst_28758);

(statearr_28764_28782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (1))){
var state_28762__$1 = state_28762;
var statearr_28765_28783 = state_28762__$1;
(statearr_28765_28783[(2)] = null);

(statearr_28765_28783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (4))){
var inst_28744 = (state_28762[(7)]);
var inst_28744__$1 = (state_28762[(2)]);
var inst_28745 = (inst_28744__$1 == null);
var state_28762__$1 = (function (){var statearr_28766 = state_28762;
(statearr_28766[(7)] = inst_28744__$1);

return statearr_28766;
})();
if(cljs.core.truth_(inst_28745)){
var statearr_28767_28784 = state_28762__$1;
(statearr_28767_28784[(1)] = (5));

} else {
var statearr_28768_28785 = state_28762__$1;
(statearr_28768_28785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (6))){
var inst_28744 = (state_28762[(7)]);
var inst_28749 = p.call(null,inst_28744);
var state_28762__$1 = state_28762;
if(cljs.core.truth_(inst_28749)){
var statearr_28769_28786 = state_28762__$1;
(statearr_28769_28786[(1)] = (8));

} else {
var statearr_28770_28787 = state_28762__$1;
(statearr_28770_28787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (3))){
var inst_28760 = (state_28762[(2)]);
var state_28762__$1 = state_28762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28762__$1,inst_28760);
} else {
if((state_val_28763 === (2))){
var state_28762__$1 = state_28762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28762__$1,(4),ch);
} else {
if((state_val_28763 === (11))){
var inst_28752 = (state_28762[(2)]);
var state_28762__$1 = state_28762;
var statearr_28771_28788 = state_28762__$1;
(statearr_28771_28788[(2)] = inst_28752);

(statearr_28771_28788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (9))){
var state_28762__$1 = state_28762;
var statearr_28772_28789 = state_28762__$1;
(statearr_28772_28789[(2)] = null);

(statearr_28772_28789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (5))){
var inst_28747 = cljs.core.async.close_BANG_.call(null,out);
var state_28762__$1 = state_28762;
var statearr_28773_28790 = state_28762__$1;
(statearr_28773_28790[(2)] = inst_28747);

(statearr_28773_28790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (10))){
var inst_28755 = (state_28762[(2)]);
var state_28762__$1 = (function (){var statearr_28774 = state_28762;
(statearr_28774[(8)] = inst_28755);

return statearr_28774;
})();
var statearr_28775_28791 = state_28762__$1;
(statearr_28775_28791[(2)] = null);

(statearr_28775_28791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (8))){
var inst_28744 = (state_28762[(7)]);
var state_28762__$1 = state_28762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28762__$1,(11),out,inst_28744);
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
});})(c__27242__auto___28781,out))
;
return ((function (switch__27147__auto__,c__27242__auto___28781,out){
return (function() {
var cljs$core$async$state_machine__27148__auto__ = null;
var cljs$core$async$state_machine__27148__auto____0 = (function (){
var statearr_28776 = [null,null,null,null,null,null,null,null,null];
(statearr_28776[(0)] = cljs$core$async$state_machine__27148__auto__);

(statearr_28776[(1)] = (1));

return statearr_28776;
});
var cljs$core$async$state_machine__27148__auto____1 = (function (state_28762){
while(true){
var ret_value__27149__auto__ = (function (){try{while(true){
var result__27150__auto__ = switch__27147__auto__.call(null,state_28762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27150__auto__;
}
break;
}
}catch (e28777){if((e28777 instanceof Object)){
var ex__27151__auto__ = e28777;
var statearr_28778_28792 = state_28762;
(statearr_28778_28792[(5)] = ex__27151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28793 = state_28762;
state_28762 = G__28793;
continue;
} else {
return ret_value__27149__auto__;
}
break;
}
});
cljs$core$async$state_machine__27148__auto__ = function(state_28762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27148__auto____1.call(this,state_28762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27148__auto____0;
cljs$core$async$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27148__auto____1;
return cljs$core$async$state_machine__27148__auto__;
})()
;})(switch__27147__auto__,c__27242__auto___28781,out))
})();
var state__27244__auto__ = (function (){var statearr_28779 = f__27243__auto__.call(null);
(statearr_28779[(6)] = c__27242__auto___28781);

return statearr_28779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27244__auto__);
});})(c__27242__auto___28781,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28795 = arguments.length;
switch (G__28795) {
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
var c__27242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27242__auto__){
return (function (){
var f__27243__auto__ = (function (){var switch__27147__auto__ = ((function (c__27242__auto__){
return (function (state_28858){
var state_val_28859 = (state_28858[(1)]);
if((state_val_28859 === (7))){
var inst_28854 = (state_28858[(2)]);
var state_28858__$1 = state_28858;
var statearr_28860_28898 = state_28858__$1;
(statearr_28860_28898[(2)] = inst_28854);

(statearr_28860_28898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (20))){
var inst_28824 = (state_28858[(7)]);
var inst_28835 = (state_28858[(2)]);
var inst_28836 = cljs.core.next.call(null,inst_28824);
var inst_28810 = inst_28836;
var inst_28811 = null;
var inst_28812 = (0);
var inst_28813 = (0);
var state_28858__$1 = (function (){var statearr_28861 = state_28858;
(statearr_28861[(8)] = inst_28812);

(statearr_28861[(9)] = inst_28813);

(statearr_28861[(10)] = inst_28811);

(statearr_28861[(11)] = inst_28835);

(statearr_28861[(12)] = inst_28810);

return statearr_28861;
})();
var statearr_28862_28899 = state_28858__$1;
(statearr_28862_28899[(2)] = null);

(statearr_28862_28899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (1))){
var state_28858__$1 = state_28858;
var statearr_28863_28900 = state_28858__$1;
(statearr_28863_28900[(2)] = null);

(statearr_28863_28900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (4))){
var inst_28799 = (state_28858[(13)]);
var inst_28799__$1 = (state_28858[(2)]);
var inst_28800 = (inst_28799__$1 == null);
var state_28858__$1 = (function (){var statearr_28864 = state_28858;
(statearr_28864[(13)] = inst_28799__$1);

return statearr_28864;
})();
if(cljs.core.truth_(inst_28800)){
var statearr_28865_28901 = state_28858__$1;
(statearr_28865_28901[(1)] = (5));

} else {
var statearr_28866_28902 = state_28858__$1;
(statearr_28866_28902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (15))){
var state_28858__$1 = state_28858;
var statearr_28870_28903 = state_28858__$1;
(statearr_28870_28903[(2)] = null);

(statearr_28870_28903[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (21))){
var state_28858__$1 = state_28858;
var statearr_28871_28904 = state_28858__$1;
(statearr_28871_28904[(2)] = null);

(statearr_28871_28904[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (13))){
var inst_28812 = (state_28858[(8)]);
var inst_28813 = (state_28858[(9)]);
var inst_28811 = (state_28858[(10)]);
var inst_28810 = (state_28858[(12)]);
var inst_28820 = (state_28858[(2)]);
var inst_28821 = (inst_28813 + (1));
var tmp28867 = inst_28812;
var tmp28868 = inst_28811;
var tmp28869 = inst_28810;
var inst_28810__$1 = tmp28869;
var inst_28811__$1 = tmp28868;
var inst_28812__$1 = tmp28867;
var inst_28813__$1 = inst_28821;
var state_28858__$1 = (function (){var statearr_28872 = state_28858;
(statearr_28872[(8)] = inst_28812__$1);

(statearr_28872[(9)] = inst_28813__$1);

(statearr_28872[(10)] = inst_28811__$1);

(statearr_28872[(12)] = inst_28810__$1);

(statearr_28872[(14)] = inst_28820);

return statearr_28872;
})();
var statearr_28873_28905 = state_28858__$1;
(statearr_28873_28905[(2)] = null);

(statearr_28873_28905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (22))){
var state_28858__$1 = state_28858;
var statearr_28874_28906 = state_28858__$1;
(statearr_28874_28906[(2)] = null);

(statearr_28874_28906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (6))){
var inst_28799 = (state_28858[(13)]);
var inst_28808 = f.call(null,inst_28799);
var inst_28809 = cljs.core.seq.call(null,inst_28808);
var inst_28810 = inst_28809;
var inst_28811 = null;
var inst_28812 = (0);
var inst_28813 = (0);
var state_28858__$1 = (function (){var statearr_28875 = state_28858;
(statearr_28875[(8)] = inst_28812);

(statearr_28875[(9)] = inst_28813);

(statearr_28875[(10)] = inst_28811);

(statearr_28875[(12)] = inst_28810);

return statearr_28875;
})();
var statearr_28876_28907 = state_28858__$1;
(statearr_28876_28907[(2)] = null);

(statearr_28876_28907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (17))){
var inst_28824 = (state_28858[(7)]);
var inst_28828 = cljs.core.chunk_first.call(null,inst_28824);
var inst_28829 = cljs.core.chunk_rest.call(null,inst_28824);
var inst_28830 = cljs.core.count.call(null,inst_28828);
var inst_28810 = inst_28829;
var inst_28811 = inst_28828;
var inst_28812 = inst_28830;
var inst_28813 = (0);
var state_28858__$1 = (function (){var statearr_28877 = state_28858;
(statearr_28877[(8)] = inst_28812);

(statearr_28877[(9)] = inst_28813);

(statearr_28877[(10)] = inst_28811);

(statearr_28877[(12)] = inst_28810);

return statearr_28877;
})();
var statearr_28878_28908 = state_28858__$1;
(statearr_28878_28908[(2)] = null);

(statearr_28878_28908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (3))){
var inst_28856 = (state_28858[(2)]);
var state_28858__$1 = state_28858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28858__$1,inst_28856);
} else {
if((state_val_28859 === (12))){
var inst_28844 = (state_28858[(2)]);
var state_28858__$1 = state_28858;
var statearr_28879_28909 = state_28858__$1;
(statearr_28879_28909[(2)] = inst_28844);

(statearr_28879_28909[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (2))){
var state_28858__$1 = state_28858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28858__$1,(4),in$);
} else {
if((state_val_28859 === (23))){
var inst_28852 = (state_28858[(2)]);
var state_28858__$1 = state_28858;
var statearr_28880_28910 = state_28858__$1;
(statearr_28880_28910[(2)] = inst_28852);

(statearr_28880_28910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (19))){
var inst_28839 = (state_28858[(2)]);
var state_28858__$1 = state_28858;
var statearr_28881_28911 = state_28858__$1;
(statearr_28881_28911[(2)] = inst_28839);

(statearr_28881_28911[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (11))){
var inst_28824 = (state_28858[(7)]);
var inst_28810 = (state_28858[(12)]);
var inst_28824__$1 = cljs.core.seq.call(null,inst_28810);
var state_28858__$1 = (function (){var statearr_28882 = state_28858;
(statearr_28882[(7)] = inst_28824__$1);

return statearr_28882;
})();
if(inst_28824__$1){
var statearr_28883_28912 = state_28858__$1;
(statearr_28883_28912[(1)] = (14));

} else {
var statearr_28884_28913 = state_28858__$1;
(statearr_28884_28913[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (9))){
var inst_28846 = (state_28858[(2)]);
var inst_28847 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28858__$1 = (function (){var statearr_28885 = state_28858;
(statearr_28885[(15)] = inst_28846);

return statearr_28885;
})();
if(cljs.core.truth_(inst_28847)){
var statearr_28886_28914 = state_28858__$1;
(statearr_28886_28914[(1)] = (21));

} else {
var statearr_28887_28915 = state_28858__$1;
(statearr_28887_28915[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (5))){
var inst_28802 = cljs.core.async.close_BANG_.call(null,out);
var state_28858__$1 = state_28858;
var statearr_28888_28916 = state_28858__$1;
(statearr_28888_28916[(2)] = inst_28802);

(statearr_28888_28916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (14))){
var inst_28824 = (state_28858[(7)]);
var inst_28826 = cljs.core.chunked_seq_QMARK_.call(null,inst_28824);
var state_28858__$1 = state_28858;
if(inst_28826){
var statearr_28889_28917 = state_28858__$1;
(statearr_28889_28917[(1)] = (17));

} else {
var statearr_28890_28918 = state_28858__$1;
(statearr_28890_28918[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (16))){
var inst_28842 = (state_28858[(2)]);
var state_28858__$1 = state_28858;
var statearr_28891_28919 = state_28858__$1;
(statearr_28891_28919[(2)] = inst_28842);

(statearr_28891_28919[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (10))){
var inst_28813 = (state_28858[(9)]);
var inst_28811 = (state_28858[(10)]);
var inst_28818 = cljs.core._nth.call(null,inst_28811,inst_28813);
var state_28858__$1 = state_28858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28858__$1,(13),out,inst_28818);
} else {
if((state_val_28859 === (18))){
var inst_28824 = (state_28858[(7)]);
var inst_28833 = cljs.core.first.call(null,inst_28824);
var state_28858__$1 = state_28858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28858__$1,(20),out,inst_28833);
} else {
if((state_val_28859 === (8))){
var inst_28812 = (state_28858[(8)]);
var inst_28813 = (state_28858[(9)]);
var inst_28815 = (inst_28813 < inst_28812);
var inst_28816 = inst_28815;
var state_28858__$1 = state_28858;
if(cljs.core.truth_(inst_28816)){
var statearr_28892_28920 = state_28858__$1;
(statearr_28892_28920[(1)] = (10));

} else {
var statearr_28893_28921 = state_28858__$1;
(statearr_28893_28921[(1)] = (11));

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
});})(c__27242__auto__))
;
return ((function (switch__27147__auto__,c__27242__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27148__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27148__auto____0 = (function (){
var statearr_28894 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28894[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27148__auto__);

(statearr_28894[(1)] = (1));

return statearr_28894;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27148__auto____1 = (function (state_28858){
while(true){
var ret_value__27149__auto__ = (function (){try{while(true){
var result__27150__auto__ = switch__27147__auto__.call(null,state_28858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27150__auto__;
}
break;
}
}catch (e28895){if((e28895 instanceof Object)){
var ex__27151__auto__ = e28895;
var statearr_28896_28922 = state_28858;
(statearr_28896_28922[(5)] = ex__27151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28923 = state_28858;
state_28858 = G__28923;
continue;
} else {
return ret_value__27149__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27148__auto__ = function(state_28858){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27148__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27148__auto____1.call(this,state_28858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27148__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27148__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27148__auto__;
})()
;})(switch__27147__auto__,c__27242__auto__))
})();
var state__27244__auto__ = (function (){var statearr_28897 = f__27243__auto__.call(null);
(statearr_28897[(6)] = c__27242__auto__);

return statearr_28897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27244__auto__);
});})(c__27242__auto__))
);

return c__27242__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28925 = arguments.length;
switch (G__28925) {
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
var G__28928 = arguments.length;
switch (G__28928) {
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
var G__28931 = arguments.length;
switch (G__28931) {
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
var c__27242__auto___28978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27242__auto___28978,out){
return (function (){
var f__27243__auto__ = (function (){var switch__27147__auto__ = ((function (c__27242__auto___28978,out){
return (function (state_28955){
var state_val_28956 = (state_28955[(1)]);
if((state_val_28956 === (7))){
var inst_28950 = (state_28955[(2)]);
var state_28955__$1 = state_28955;
var statearr_28957_28979 = state_28955__$1;
(statearr_28957_28979[(2)] = inst_28950);

(statearr_28957_28979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (1))){
var inst_28932 = null;
var state_28955__$1 = (function (){var statearr_28958 = state_28955;
(statearr_28958[(7)] = inst_28932);

return statearr_28958;
})();
var statearr_28959_28980 = state_28955__$1;
(statearr_28959_28980[(2)] = null);

(statearr_28959_28980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (4))){
var inst_28935 = (state_28955[(8)]);
var inst_28935__$1 = (state_28955[(2)]);
var inst_28936 = (inst_28935__$1 == null);
var inst_28937 = cljs.core.not.call(null,inst_28936);
var state_28955__$1 = (function (){var statearr_28960 = state_28955;
(statearr_28960[(8)] = inst_28935__$1);

return statearr_28960;
})();
if(inst_28937){
var statearr_28961_28981 = state_28955__$1;
(statearr_28961_28981[(1)] = (5));

} else {
var statearr_28962_28982 = state_28955__$1;
(statearr_28962_28982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (6))){
var state_28955__$1 = state_28955;
var statearr_28963_28983 = state_28955__$1;
(statearr_28963_28983[(2)] = null);

(statearr_28963_28983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (3))){
var inst_28952 = (state_28955[(2)]);
var inst_28953 = cljs.core.async.close_BANG_.call(null,out);
var state_28955__$1 = (function (){var statearr_28964 = state_28955;
(statearr_28964[(9)] = inst_28952);

return statearr_28964;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28955__$1,inst_28953);
} else {
if((state_val_28956 === (2))){
var state_28955__$1 = state_28955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28955__$1,(4),ch);
} else {
if((state_val_28956 === (11))){
var inst_28935 = (state_28955[(8)]);
var inst_28944 = (state_28955[(2)]);
var inst_28932 = inst_28935;
var state_28955__$1 = (function (){var statearr_28965 = state_28955;
(statearr_28965[(7)] = inst_28932);

(statearr_28965[(10)] = inst_28944);

return statearr_28965;
})();
var statearr_28966_28984 = state_28955__$1;
(statearr_28966_28984[(2)] = null);

(statearr_28966_28984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (9))){
var inst_28935 = (state_28955[(8)]);
var state_28955__$1 = state_28955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28955__$1,(11),out,inst_28935);
} else {
if((state_val_28956 === (5))){
var inst_28932 = (state_28955[(7)]);
var inst_28935 = (state_28955[(8)]);
var inst_28939 = cljs.core._EQ_.call(null,inst_28935,inst_28932);
var state_28955__$1 = state_28955;
if(inst_28939){
var statearr_28968_28985 = state_28955__$1;
(statearr_28968_28985[(1)] = (8));

} else {
var statearr_28969_28986 = state_28955__$1;
(statearr_28969_28986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (10))){
var inst_28947 = (state_28955[(2)]);
var state_28955__$1 = state_28955;
var statearr_28970_28987 = state_28955__$1;
(statearr_28970_28987[(2)] = inst_28947);

(statearr_28970_28987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (8))){
var inst_28932 = (state_28955[(7)]);
var tmp28967 = inst_28932;
var inst_28932__$1 = tmp28967;
var state_28955__$1 = (function (){var statearr_28971 = state_28955;
(statearr_28971[(7)] = inst_28932__$1);

return statearr_28971;
})();
var statearr_28972_28988 = state_28955__$1;
(statearr_28972_28988[(2)] = null);

(statearr_28972_28988[(1)] = (2));


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
});})(c__27242__auto___28978,out))
;
return ((function (switch__27147__auto__,c__27242__auto___28978,out){
return (function() {
var cljs$core$async$state_machine__27148__auto__ = null;
var cljs$core$async$state_machine__27148__auto____0 = (function (){
var statearr_28973 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28973[(0)] = cljs$core$async$state_machine__27148__auto__);

(statearr_28973[(1)] = (1));

return statearr_28973;
});
var cljs$core$async$state_machine__27148__auto____1 = (function (state_28955){
while(true){
var ret_value__27149__auto__ = (function (){try{while(true){
var result__27150__auto__ = switch__27147__auto__.call(null,state_28955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27150__auto__;
}
break;
}
}catch (e28974){if((e28974 instanceof Object)){
var ex__27151__auto__ = e28974;
var statearr_28975_28989 = state_28955;
(statearr_28975_28989[(5)] = ex__27151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28990 = state_28955;
state_28955 = G__28990;
continue;
} else {
return ret_value__27149__auto__;
}
break;
}
});
cljs$core$async$state_machine__27148__auto__ = function(state_28955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27148__auto____1.call(this,state_28955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27148__auto____0;
cljs$core$async$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27148__auto____1;
return cljs$core$async$state_machine__27148__auto__;
})()
;})(switch__27147__auto__,c__27242__auto___28978,out))
})();
var state__27244__auto__ = (function (){var statearr_28976 = f__27243__auto__.call(null);
(statearr_28976[(6)] = c__27242__auto___28978);

return statearr_28976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27244__auto__);
});})(c__27242__auto___28978,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28992 = arguments.length;
switch (G__28992) {
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
var c__27242__auto___29058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27242__auto___29058,out){
return (function (){
var f__27243__auto__ = (function (){var switch__27147__auto__ = ((function (c__27242__auto___29058,out){
return (function (state_29030){
var state_val_29031 = (state_29030[(1)]);
if((state_val_29031 === (7))){
var inst_29026 = (state_29030[(2)]);
var state_29030__$1 = state_29030;
var statearr_29032_29059 = state_29030__$1;
(statearr_29032_29059[(2)] = inst_29026);

(statearr_29032_29059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (1))){
var inst_28993 = (new Array(n));
var inst_28994 = inst_28993;
var inst_28995 = (0);
var state_29030__$1 = (function (){var statearr_29033 = state_29030;
(statearr_29033[(7)] = inst_28994);

(statearr_29033[(8)] = inst_28995);

return statearr_29033;
})();
var statearr_29034_29060 = state_29030__$1;
(statearr_29034_29060[(2)] = null);

(statearr_29034_29060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (4))){
var inst_28998 = (state_29030[(9)]);
var inst_28998__$1 = (state_29030[(2)]);
var inst_28999 = (inst_28998__$1 == null);
var inst_29000 = cljs.core.not.call(null,inst_28999);
var state_29030__$1 = (function (){var statearr_29035 = state_29030;
(statearr_29035[(9)] = inst_28998__$1);

return statearr_29035;
})();
if(inst_29000){
var statearr_29036_29061 = state_29030__$1;
(statearr_29036_29061[(1)] = (5));

} else {
var statearr_29037_29062 = state_29030__$1;
(statearr_29037_29062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (15))){
var inst_29020 = (state_29030[(2)]);
var state_29030__$1 = state_29030;
var statearr_29038_29063 = state_29030__$1;
(statearr_29038_29063[(2)] = inst_29020);

(statearr_29038_29063[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (13))){
var state_29030__$1 = state_29030;
var statearr_29039_29064 = state_29030__$1;
(statearr_29039_29064[(2)] = null);

(statearr_29039_29064[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (6))){
var inst_28995 = (state_29030[(8)]);
var inst_29016 = (inst_28995 > (0));
var state_29030__$1 = state_29030;
if(cljs.core.truth_(inst_29016)){
var statearr_29040_29065 = state_29030__$1;
(statearr_29040_29065[(1)] = (12));

} else {
var statearr_29041_29066 = state_29030__$1;
(statearr_29041_29066[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (3))){
var inst_29028 = (state_29030[(2)]);
var state_29030__$1 = state_29030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29030__$1,inst_29028);
} else {
if((state_val_29031 === (12))){
var inst_28994 = (state_29030[(7)]);
var inst_29018 = cljs.core.vec.call(null,inst_28994);
var state_29030__$1 = state_29030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29030__$1,(15),out,inst_29018);
} else {
if((state_val_29031 === (2))){
var state_29030__$1 = state_29030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29030__$1,(4),ch);
} else {
if((state_val_29031 === (11))){
var inst_29010 = (state_29030[(2)]);
var inst_29011 = (new Array(n));
var inst_28994 = inst_29011;
var inst_28995 = (0);
var state_29030__$1 = (function (){var statearr_29042 = state_29030;
(statearr_29042[(7)] = inst_28994);

(statearr_29042[(8)] = inst_28995);

(statearr_29042[(10)] = inst_29010);

return statearr_29042;
})();
var statearr_29043_29067 = state_29030__$1;
(statearr_29043_29067[(2)] = null);

(statearr_29043_29067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (9))){
var inst_28994 = (state_29030[(7)]);
var inst_29008 = cljs.core.vec.call(null,inst_28994);
var state_29030__$1 = state_29030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29030__$1,(11),out,inst_29008);
} else {
if((state_val_29031 === (5))){
var inst_28994 = (state_29030[(7)]);
var inst_28995 = (state_29030[(8)]);
var inst_28998 = (state_29030[(9)]);
var inst_29003 = (state_29030[(11)]);
var inst_29002 = (inst_28994[inst_28995] = inst_28998);
var inst_29003__$1 = (inst_28995 + (1));
var inst_29004 = (inst_29003__$1 < n);
var state_29030__$1 = (function (){var statearr_29044 = state_29030;
(statearr_29044[(12)] = inst_29002);

(statearr_29044[(11)] = inst_29003__$1);

return statearr_29044;
})();
if(cljs.core.truth_(inst_29004)){
var statearr_29045_29068 = state_29030__$1;
(statearr_29045_29068[(1)] = (8));

} else {
var statearr_29046_29069 = state_29030__$1;
(statearr_29046_29069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (14))){
var inst_29023 = (state_29030[(2)]);
var inst_29024 = cljs.core.async.close_BANG_.call(null,out);
var state_29030__$1 = (function (){var statearr_29048 = state_29030;
(statearr_29048[(13)] = inst_29023);

return statearr_29048;
})();
var statearr_29049_29070 = state_29030__$1;
(statearr_29049_29070[(2)] = inst_29024);

(statearr_29049_29070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (10))){
var inst_29014 = (state_29030[(2)]);
var state_29030__$1 = state_29030;
var statearr_29050_29071 = state_29030__$1;
(statearr_29050_29071[(2)] = inst_29014);

(statearr_29050_29071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (8))){
var inst_28994 = (state_29030[(7)]);
var inst_29003 = (state_29030[(11)]);
var tmp29047 = inst_28994;
var inst_28994__$1 = tmp29047;
var inst_28995 = inst_29003;
var state_29030__$1 = (function (){var statearr_29051 = state_29030;
(statearr_29051[(7)] = inst_28994__$1);

(statearr_29051[(8)] = inst_28995);

return statearr_29051;
})();
var statearr_29052_29072 = state_29030__$1;
(statearr_29052_29072[(2)] = null);

(statearr_29052_29072[(1)] = (2));


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
});})(c__27242__auto___29058,out))
;
return ((function (switch__27147__auto__,c__27242__auto___29058,out){
return (function() {
var cljs$core$async$state_machine__27148__auto__ = null;
var cljs$core$async$state_machine__27148__auto____0 = (function (){
var statearr_29053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29053[(0)] = cljs$core$async$state_machine__27148__auto__);

(statearr_29053[(1)] = (1));

return statearr_29053;
});
var cljs$core$async$state_machine__27148__auto____1 = (function (state_29030){
while(true){
var ret_value__27149__auto__ = (function (){try{while(true){
var result__27150__auto__ = switch__27147__auto__.call(null,state_29030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27150__auto__;
}
break;
}
}catch (e29054){if((e29054 instanceof Object)){
var ex__27151__auto__ = e29054;
var statearr_29055_29073 = state_29030;
(statearr_29055_29073[(5)] = ex__27151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29074 = state_29030;
state_29030 = G__29074;
continue;
} else {
return ret_value__27149__auto__;
}
break;
}
});
cljs$core$async$state_machine__27148__auto__ = function(state_29030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27148__auto____1.call(this,state_29030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27148__auto____0;
cljs$core$async$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27148__auto____1;
return cljs$core$async$state_machine__27148__auto__;
})()
;})(switch__27147__auto__,c__27242__auto___29058,out))
})();
var state__27244__auto__ = (function (){var statearr_29056 = f__27243__auto__.call(null);
(statearr_29056[(6)] = c__27242__auto___29058);

return statearr_29056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27244__auto__);
});})(c__27242__auto___29058,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29076 = arguments.length;
switch (G__29076) {
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
var c__27242__auto___29146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27242__auto___29146,out){
return (function (){
var f__27243__auto__ = (function (){var switch__27147__auto__ = ((function (c__27242__auto___29146,out){
return (function (state_29118){
var state_val_29119 = (state_29118[(1)]);
if((state_val_29119 === (7))){
var inst_29114 = (state_29118[(2)]);
var state_29118__$1 = state_29118;
var statearr_29120_29147 = state_29118__$1;
(statearr_29120_29147[(2)] = inst_29114);

(statearr_29120_29147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (1))){
var inst_29077 = [];
var inst_29078 = inst_29077;
var inst_29079 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29118__$1 = (function (){var statearr_29121 = state_29118;
(statearr_29121[(7)] = inst_29078);

(statearr_29121[(8)] = inst_29079);

return statearr_29121;
})();
var statearr_29122_29148 = state_29118__$1;
(statearr_29122_29148[(2)] = null);

(statearr_29122_29148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (4))){
var inst_29082 = (state_29118[(9)]);
var inst_29082__$1 = (state_29118[(2)]);
var inst_29083 = (inst_29082__$1 == null);
var inst_29084 = cljs.core.not.call(null,inst_29083);
var state_29118__$1 = (function (){var statearr_29123 = state_29118;
(statearr_29123[(9)] = inst_29082__$1);

return statearr_29123;
})();
if(inst_29084){
var statearr_29124_29149 = state_29118__$1;
(statearr_29124_29149[(1)] = (5));

} else {
var statearr_29125_29150 = state_29118__$1;
(statearr_29125_29150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (15))){
var inst_29108 = (state_29118[(2)]);
var state_29118__$1 = state_29118;
var statearr_29126_29151 = state_29118__$1;
(statearr_29126_29151[(2)] = inst_29108);

(statearr_29126_29151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (13))){
var state_29118__$1 = state_29118;
var statearr_29127_29152 = state_29118__$1;
(statearr_29127_29152[(2)] = null);

(statearr_29127_29152[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (6))){
var inst_29078 = (state_29118[(7)]);
var inst_29103 = inst_29078.length;
var inst_29104 = (inst_29103 > (0));
var state_29118__$1 = state_29118;
if(cljs.core.truth_(inst_29104)){
var statearr_29128_29153 = state_29118__$1;
(statearr_29128_29153[(1)] = (12));

} else {
var statearr_29129_29154 = state_29118__$1;
(statearr_29129_29154[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (3))){
var inst_29116 = (state_29118[(2)]);
var state_29118__$1 = state_29118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29118__$1,inst_29116);
} else {
if((state_val_29119 === (12))){
var inst_29078 = (state_29118[(7)]);
var inst_29106 = cljs.core.vec.call(null,inst_29078);
var state_29118__$1 = state_29118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29118__$1,(15),out,inst_29106);
} else {
if((state_val_29119 === (2))){
var state_29118__$1 = state_29118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29118__$1,(4),ch);
} else {
if((state_val_29119 === (11))){
var inst_29086 = (state_29118[(10)]);
var inst_29082 = (state_29118[(9)]);
var inst_29096 = (state_29118[(2)]);
var inst_29097 = [];
var inst_29098 = inst_29097.push(inst_29082);
var inst_29078 = inst_29097;
var inst_29079 = inst_29086;
var state_29118__$1 = (function (){var statearr_29130 = state_29118;
(statearr_29130[(11)] = inst_29098);

(statearr_29130[(12)] = inst_29096);

(statearr_29130[(7)] = inst_29078);

(statearr_29130[(8)] = inst_29079);

return statearr_29130;
})();
var statearr_29131_29155 = state_29118__$1;
(statearr_29131_29155[(2)] = null);

(statearr_29131_29155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (9))){
var inst_29078 = (state_29118[(7)]);
var inst_29094 = cljs.core.vec.call(null,inst_29078);
var state_29118__$1 = state_29118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29118__$1,(11),out,inst_29094);
} else {
if((state_val_29119 === (5))){
var inst_29086 = (state_29118[(10)]);
var inst_29082 = (state_29118[(9)]);
var inst_29079 = (state_29118[(8)]);
var inst_29086__$1 = f.call(null,inst_29082);
var inst_29087 = cljs.core._EQ_.call(null,inst_29086__$1,inst_29079);
var inst_29088 = cljs.core.keyword_identical_QMARK_.call(null,inst_29079,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29089 = ((inst_29087) || (inst_29088));
var state_29118__$1 = (function (){var statearr_29132 = state_29118;
(statearr_29132[(10)] = inst_29086__$1);

return statearr_29132;
})();
if(cljs.core.truth_(inst_29089)){
var statearr_29133_29156 = state_29118__$1;
(statearr_29133_29156[(1)] = (8));

} else {
var statearr_29134_29157 = state_29118__$1;
(statearr_29134_29157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (14))){
var inst_29111 = (state_29118[(2)]);
var inst_29112 = cljs.core.async.close_BANG_.call(null,out);
var state_29118__$1 = (function (){var statearr_29136 = state_29118;
(statearr_29136[(13)] = inst_29111);

return statearr_29136;
})();
var statearr_29137_29158 = state_29118__$1;
(statearr_29137_29158[(2)] = inst_29112);

(statearr_29137_29158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (10))){
var inst_29101 = (state_29118[(2)]);
var state_29118__$1 = state_29118;
var statearr_29138_29159 = state_29118__$1;
(statearr_29138_29159[(2)] = inst_29101);

(statearr_29138_29159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (8))){
var inst_29086 = (state_29118[(10)]);
var inst_29082 = (state_29118[(9)]);
var inst_29078 = (state_29118[(7)]);
var inst_29091 = inst_29078.push(inst_29082);
var tmp29135 = inst_29078;
var inst_29078__$1 = tmp29135;
var inst_29079 = inst_29086;
var state_29118__$1 = (function (){var statearr_29139 = state_29118;
(statearr_29139[(14)] = inst_29091);

(statearr_29139[(7)] = inst_29078__$1);

(statearr_29139[(8)] = inst_29079);

return statearr_29139;
})();
var statearr_29140_29160 = state_29118__$1;
(statearr_29140_29160[(2)] = null);

(statearr_29140_29160[(1)] = (2));


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
});})(c__27242__auto___29146,out))
;
return ((function (switch__27147__auto__,c__27242__auto___29146,out){
return (function() {
var cljs$core$async$state_machine__27148__auto__ = null;
var cljs$core$async$state_machine__27148__auto____0 = (function (){
var statearr_29141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29141[(0)] = cljs$core$async$state_machine__27148__auto__);

(statearr_29141[(1)] = (1));

return statearr_29141;
});
var cljs$core$async$state_machine__27148__auto____1 = (function (state_29118){
while(true){
var ret_value__27149__auto__ = (function (){try{while(true){
var result__27150__auto__ = switch__27147__auto__.call(null,state_29118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27150__auto__;
}
break;
}
}catch (e29142){if((e29142 instanceof Object)){
var ex__27151__auto__ = e29142;
var statearr_29143_29161 = state_29118;
(statearr_29143_29161[(5)] = ex__27151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29162 = state_29118;
state_29118 = G__29162;
continue;
} else {
return ret_value__27149__auto__;
}
break;
}
});
cljs$core$async$state_machine__27148__auto__ = function(state_29118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27148__auto____1.call(this,state_29118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27148__auto____0;
cljs$core$async$state_machine__27148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27148__auto____1;
return cljs$core$async$state_machine__27148__auto__;
})()
;})(switch__27147__auto__,c__27242__auto___29146,out))
})();
var state__27244__auto__ = (function (){var statearr_29144 = f__27243__auto__.call(null);
(statearr_29144[(6)] = c__27242__auto___29146);

return statearr_29144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27244__auto__);
});})(c__27242__auto___29146,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
