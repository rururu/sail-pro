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
var G__9596 = arguments.length;
switch (G__9596) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9597 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9597 = (function (f,blockable,meta9598){
this.f = f;
this.blockable = blockable;
this.meta9598 = meta9598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9599,meta9598__$1){
var self__ = this;
var _9599__$1 = this;
return (new cljs.core.async.t_cljs$core$async9597(self__.f,self__.blockable,meta9598__$1));
});

cljs.core.async.t_cljs$core$async9597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9599){
var self__ = this;
var _9599__$1 = this;
return self__.meta9598;
});

cljs.core.async.t_cljs$core$async9597.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9597.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9597.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async9597.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async9597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta9598","meta9598",-95794592,null)], null);
});

cljs.core.async.t_cljs$core$async9597.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9597";

cljs.core.async.t_cljs$core$async9597.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async9597");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9597.
 */
cljs.core.async.__GT_t_cljs$core$async9597 = (function cljs$core$async$__GT_t_cljs$core$async9597(f__$1,blockable__$1,meta9598){
return (new cljs.core.async.t_cljs$core$async9597(f__$1,blockable__$1,meta9598));
});

}

return (new cljs.core.async.t_cljs$core$async9597(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__9603 = arguments.length;
switch (G__9603) {
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
var G__9606 = arguments.length;
switch (G__9606) {
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
var G__9609 = arguments.length;
switch (G__9609) {
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
var val_9611 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9611);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9611,ret){
return (function (){
return fn1.call(null,val_9611);
});})(val_9611,ret))
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
var G__9613 = arguments.length;
switch (G__9613) {
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
var n__4518__auto___9615 = n;
var x_9616 = (0);
while(true){
if((x_9616 < n__4518__auto___9615)){
(a[x_9616] = (0));

var G__9617 = (x_9616 + (1));
x_9616 = G__9617;
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

var G__9618 = (i + (1));
i = G__9618;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9619 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9619 = (function (flag,meta9620){
this.flag = flag;
this.meta9620 = meta9620;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9621,meta9620__$1){
var self__ = this;
var _9621__$1 = this;
return (new cljs.core.async.t_cljs$core$async9619(self__.flag,meta9620__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async9619.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9621){
var self__ = this;
var _9621__$1 = this;
return self__.meta9620;
});})(flag))
;

cljs.core.async.t_cljs$core$async9619.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9619.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async9619.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9619.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9619.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9620","meta9620",1934534587,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async9619.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9619.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9619";

cljs.core.async.t_cljs$core$async9619.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async9619");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9619.
 */
cljs.core.async.__GT_t_cljs$core$async9619 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async9619(flag__$1,meta9620){
return (new cljs.core.async.t_cljs$core$async9619(flag__$1,meta9620));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async9619(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9622 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9622 = (function (flag,cb,meta9623){
this.flag = flag;
this.cb = cb;
this.meta9623 = meta9623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9624,meta9623__$1){
var self__ = this;
var _9624__$1 = this;
return (new cljs.core.async.t_cljs$core$async9622(self__.flag,self__.cb,meta9623__$1));
});

cljs.core.async.t_cljs$core$async9622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9624){
var self__ = this;
var _9624__$1 = this;
return self__.meta9623;
});

cljs.core.async.t_cljs$core$async9622.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9622.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async9622.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9622.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async9622.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9623","meta9623",-321080070,null)], null);
});

cljs.core.async.t_cljs$core$async9622.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9622.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9622";

cljs.core.async.t_cljs$core$async9622.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async9622");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9622.
 */
cljs.core.async.__GT_t_cljs$core$async9622 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async9622(flag__$1,cb__$1,meta9623){
return (new cljs.core.async.t_cljs$core$async9622(flag__$1,cb__$1,meta9623));
});

}

return (new cljs.core.async.t_cljs$core$async9622(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__9625_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9625_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9626_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9626_SHARP_,port], null));
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
var G__9627 = (i + (1));
i = G__9627;
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
var len__4641__auto___9633 = arguments.length;
var i__4642__auto___9634 = (0);
while(true){
if((i__4642__auto___9634 < len__4641__auto___9633)){
args__4647__auto__.push((arguments[i__4642__auto___9634]));

var G__9635 = (i__4642__auto___9634 + (1));
i__4642__auto___9634 = G__9635;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9630){
var map__9631 = p__9630;
var map__9631__$1 = (((((!((map__9631 == null))))?(((((map__9631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9631):map__9631);
var opts = map__9631__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9628){
var G__9629 = cljs.core.first.call(null,seq9628);
var seq9628__$1 = cljs.core.next.call(null,seq9628);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9629,seq9628__$1);
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
var G__9637 = arguments.length;
switch (G__9637) {
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
var c__9536__auto___9683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9536__auto___9683){
return (function (){
var f__9537__auto__ = (function (){var switch__9441__auto__ = ((function (c__9536__auto___9683){
return (function (state_9661){
var state_val_9662 = (state_9661[(1)]);
if((state_val_9662 === (7))){
var inst_9657 = (state_9661[(2)]);
var state_9661__$1 = state_9661;
var statearr_9663_9684 = state_9661__$1;
(statearr_9663_9684[(2)] = inst_9657);

(statearr_9663_9684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9662 === (1))){
var state_9661__$1 = state_9661;
var statearr_9664_9685 = state_9661__$1;
(statearr_9664_9685[(2)] = null);

(statearr_9664_9685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9662 === (4))){
var inst_9640 = (state_9661[(7)]);
var inst_9640__$1 = (state_9661[(2)]);
var inst_9641 = (inst_9640__$1 == null);
var state_9661__$1 = (function (){var statearr_9665 = state_9661;
(statearr_9665[(7)] = inst_9640__$1);

return statearr_9665;
})();
if(cljs.core.truth_(inst_9641)){
var statearr_9666_9686 = state_9661__$1;
(statearr_9666_9686[(1)] = (5));

} else {
var statearr_9667_9687 = state_9661__$1;
(statearr_9667_9687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9662 === (13))){
var state_9661__$1 = state_9661;
var statearr_9668_9688 = state_9661__$1;
(statearr_9668_9688[(2)] = null);

(statearr_9668_9688[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9662 === (6))){
var inst_9640 = (state_9661[(7)]);
var state_9661__$1 = state_9661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9661__$1,(11),to,inst_9640);
} else {
if((state_val_9662 === (3))){
var inst_9659 = (state_9661[(2)]);
var state_9661__$1 = state_9661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9661__$1,inst_9659);
} else {
if((state_val_9662 === (12))){
var state_9661__$1 = state_9661;
var statearr_9669_9689 = state_9661__$1;
(statearr_9669_9689[(2)] = null);

(statearr_9669_9689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9662 === (2))){
var state_9661__$1 = state_9661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9661__$1,(4),from);
} else {
if((state_val_9662 === (11))){
var inst_9650 = (state_9661[(2)]);
var state_9661__$1 = state_9661;
if(cljs.core.truth_(inst_9650)){
var statearr_9670_9690 = state_9661__$1;
(statearr_9670_9690[(1)] = (12));

} else {
var statearr_9671_9691 = state_9661__$1;
(statearr_9671_9691[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9662 === (9))){
var state_9661__$1 = state_9661;
var statearr_9672_9692 = state_9661__$1;
(statearr_9672_9692[(2)] = null);

(statearr_9672_9692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9662 === (5))){
var state_9661__$1 = state_9661;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9673_9693 = state_9661__$1;
(statearr_9673_9693[(1)] = (8));

} else {
var statearr_9674_9694 = state_9661__$1;
(statearr_9674_9694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9662 === (14))){
var inst_9655 = (state_9661[(2)]);
var state_9661__$1 = state_9661;
var statearr_9675_9695 = state_9661__$1;
(statearr_9675_9695[(2)] = inst_9655);

(statearr_9675_9695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9662 === (10))){
var inst_9647 = (state_9661[(2)]);
var state_9661__$1 = state_9661;
var statearr_9676_9696 = state_9661__$1;
(statearr_9676_9696[(2)] = inst_9647);

(statearr_9676_9696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9662 === (8))){
var inst_9644 = cljs.core.async.close_BANG_.call(null,to);
var state_9661__$1 = state_9661;
var statearr_9677_9697 = state_9661__$1;
(statearr_9677_9697[(2)] = inst_9644);

(statearr_9677_9697[(1)] = (10));


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
});})(c__9536__auto___9683))
;
return ((function (switch__9441__auto__,c__9536__auto___9683){
return (function() {
var cljs$core$async$state_machine__9442__auto__ = null;
var cljs$core$async$state_machine__9442__auto____0 = (function (){
var statearr_9678 = [null,null,null,null,null,null,null,null];
(statearr_9678[(0)] = cljs$core$async$state_machine__9442__auto__);

(statearr_9678[(1)] = (1));

return statearr_9678;
});
var cljs$core$async$state_machine__9442__auto____1 = (function (state_9661){
while(true){
var ret_value__9443__auto__ = (function (){try{while(true){
var result__9444__auto__ = switch__9441__auto__.call(null,state_9661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9444__auto__;
}
break;
}
}catch (e9679){if((e9679 instanceof Object)){
var ex__9445__auto__ = e9679;
var statearr_9680_9698 = state_9661;
(statearr_9680_9698[(5)] = ex__9445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9699 = state_9661;
state_9661 = G__9699;
continue;
} else {
return ret_value__9443__auto__;
}
break;
}
});
cljs$core$async$state_machine__9442__auto__ = function(state_9661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9442__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9442__auto____1.call(this,state_9661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9442__auto____0;
cljs$core$async$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9442__auto____1;
return cljs$core$async$state_machine__9442__auto__;
})()
;})(switch__9441__auto__,c__9536__auto___9683))
})();
var state__9538__auto__ = (function (){var statearr_9681 = f__9537__auto__.call(null);
(statearr_9681[(6)] = c__9536__auto___9683);

return statearr_9681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9538__auto__);
});})(c__9536__auto___9683))
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
return (function (p__9700){
var vec__9701 = p__9700;
var v = cljs.core.nth.call(null,vec__9701,(0),null);
var p = cljs.core.nth.call(null,vec__9701,(1),null);
var job = vec__9701;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9536__auto___9872 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9536__auto___9872,res,vec__9701,v,p,job,jobs,results){
return (function (){
var f__9537__auto__ = (function (){var switch__9441__auto__ = ((function (c__9536__auto___9872,res,vec__9701,v,p,job,jobs,results){
return (function (state_9708){
var state_val_9709 = (state_9708[(1)]);
if((state_val_9709 === (1))){
var state_9708__$1 = state_9708;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9708__$1,(2),res,v);
} else {
if((state_val_9709 === (2))){
var inst_9705 = (state_9708[(2)]);
var inst_9706 = cljs.core.async.close_BANG_.call(null,res);
var state_9708__$1 = (function (){var statearr_9710 = state_9708;
(statearr_9710[(7)] = inst_9705);

return statearr_9710;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9708__$1,inst_9706);
} else {
return null;
}
}
});})(c__9536__auto___9872,res,vec__9701,v,p,job,jobs,results))
;
return ((function (switch__9441__auto__,c__9536__auto___9872,res,vec__9701,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____0 = (function (){
var statearr_9711 = [null,null,null,null,null,null,null,null];
(statearr_9711[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__);

(statearr_9711[(1)] = (1));

return statearr_9711;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____1 = (function (state_9708){
while(true){
var ret_value__9443__auto__ = (function (){try{while(true){
var result__9444__auto__ = switch__9441__auto__.call(null,state_9708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9444__auto__;
}
break;
}
}catch (e9712){if((e9712 instanceof Object)){
var ex__9445__auto__ = e9712;
var statearr_9713_9873 = state_9708;
(statearr_9713_9873[(5)] = ex__9445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9874 = state_9708;
state_9708 = G__9874;
continue;
} else {
return ret_value__9443__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__ = function(state_9708){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____1.call(this,state_9708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__;
})()
;})(switch__9441__auto__,c__9536__auto___9872,res,vec__9701,v,p,job,jobs,results))
})();
var state__9538__auto__ = (function (){var statearr_9714 = f__9537__auto__.call(null);
(statearr_9714[(6)] = c__9536__auto___9872);

return statearr_9714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9538__auto__);
});})(c__9536__auto___9872,res,vec__9701,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9715){
var vec__9716 = p__9715;
var v = cljs.core.nth.call(null,vec__9716,(0),null);
var p = cljs.core.nth.call(null,vec__9716,(1),null);
var job = vec__9716;
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
var n__4518__auto___9875 = n;
var __9876 = (0);
while(true){
if((__9876 < n__4518__auto___9875)){
var G__9719_9877 = type;
var G__9719_9878__$1 = (((G__9719_9877 instanceof cljs.core.Keyword))?G__9719_9877.fqn:null);
switch (G__9719_9878__$1) {
case "compute":
var c__9536__auto___9880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9876,c__9536__auto___9880,G__9719_9877,G__9719_9878__$1,n__4518__auto___9875,jobs,results,process,async){
return (function (){
var f__9537__auto__ = (function (){var switch__9441__auto__ = ((function (__9876,c__9536__auto___9880,G__9719_9877,G__9719_9878__$1,n__4518__auto___9875,jobs,results,process,async){
return (function (state_9732){
var state_val_9733 = (state_9732[(1)]);
if((state_val_9733 === (1))){
var state_9732__$1 = state_9732;
var statearr_9734_9881 = state_9732__$1;
(statearr_9734_9881[(2)] = null);

(statearr_9734_9881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9733 === (2))){
var state_9732__$1 = state_9732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9732__$1,(4),jobs);
} else {
if((state_val_9733 === (3))){
var inst_9730 = (state_9732[(2)]);
var state_9732__$1 = state_9732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9732__$1,inst_9730);
} else {
if((state_val_9733 === (4))){
var inst_9722 = (state_9732[(2)]);
var inst_9723 = process.call(null,inst_9722);
var state_9732__$1 = state_9732;
if(cljs.core.truth_(inst_9723)){
var statearr_9735_9882 = state_9732__$1;
(statearr_9735_9882[(1)] = (5));

} else {
var statearr_9736_9883 = state_9732__$1;
(statearr_9736_9883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9733 === (5))){
var state_9732__$1 = state_9732;
var statearr_9737_9884 = state_9732__$1;
(statearr_9737_9884[(2)] = null);

(statearr_9737_9884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9733 === (6))){
var state_9732__$1 = state_9732;
var statearr_9738_9885 = state_9732__$1;
(statearr_9738_9885[(2)] = null);

(statearr_9738_9885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9733 === (7))){
var inst_9728 = (state_9732[(2)]);
var state_9732__$1 = state_9732;
var statearr_9739_9886 = state_9732__$1;
(statearr_9739_9886[(2)] = inst_9728);

(statearr_9739_9886[(1)] = (3));


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
});})(__9876,c__9536__auto___9880,G__9719_9877,G__9719_9878__$1,n__4518__auto___9875,jobs,results,process,async))
;
return ((function (__9876,switch__9441__auto__,c__9536__auto___9880,G__9719_9877,G__9719_9878__$1,n__4518__auto___9875,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____0 = (function (){
var statearr_9740 = [null,null,null,null,null,null,null];
(statearr_9740[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__);

(statearr_9740[(1)] = (1));

return statearr_9740;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____1 = (function (state_9732){
while(true){
var ret_value__9443__auto__ = (function (){try{while(true){
var result__9444__auto__ = switch__9441__auto__.call(null,state_9732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9444__auto__;
}
break;
}
}catch (e9741){if((e9741 instanceof Object)){
var ex__9445__auto__ = e9741;
var statearr_9742_9887 = state_9732;
(statearr_9742_9887[(5)] = ex__9445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9888 = state_9732;
state_9732 = G__9888;
continue;
} else {
return ret_value__9443__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__ = function(state_9732){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____1.call(this,state_9732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__;
})()
;})(__9876,switch__9441__auto__,c__9536__auto___9880,G__9719_9877,G__9719_9878__$1,n__4518__auto___9875,jobs,results,process,async))
})();
var state__9538__auto__ = (function (){var statearr_9743 = f__9537__auto__.call(null);
(statearr_9743[(6)] = c__9536__auto___9880);

return statearr_9743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9538__auto__);
});})(__9876,c__9536__auto___9880,G__9719_9877,G__9719_9878__$1,n__4518__auto___9875,jobs,results,process,async))
);


break;
case "async":
var c__9536__auto___9889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9876,c__9536__auto___9889,G__9719_9877,G__9719_9878__$1,n__4518__auto___9875,jobs,results,process,async){
return (function (){
var f__9537__auto__ = (function (){var switch__9441__auto__ = ((function (__9876,c__9536__auto___9889,G__9719_9877,G__9719_9878__$1,n__4518__auto___9875,jobs,results,process,async){
return (function (state_9756){
var state_val_9757 = (state_9756[(1)]);
if((state_val_9757 === (1))){
var state_9756__$1 = state_9756;
var statearr_9758_9890 = state_9756__$1;
(statearr_9758_9890[(2)] = null);

(statearr_9758_9890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9757 === (2))){
var state_9756__$1 = state_9756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9756__$1,(4),jobs);
} else {
if((state_val_9757 === (3))){
var inst_9754 = (state_9756[(2)]);
var state_9756__$1 = state_9756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9756__$1,inst_9754);
} else {
if((state_val_9757 === (4))){
var inst_9746 = (state_9756[(2)]);
var inst_9747 = async.call(null,inst_9746);
var state_9756__$1 = state_9756;
if(cljs.core.truth_(inst_9747)){
var statearr_9759_9891 = state_9756__$1;
(statearr_9759_9891[(1)] = (5));

} else {
var statearr_9760_9892 = state_9756__$1;
(statearr_9760_9892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9757 === (5))){
var state_9756__$1 = state_9756;
var statearr_9761_9893 = state_9756__$1;
(statearr_9761_9893[(2)] = null);

(statearr_9761_9893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9757 === (6))){
var state_9756__$1 = state_9756;
var statearr_9762_9894 = state_9756__$1;
(statearr_9762_9894[(2)] = null);

(statearr_9762_9894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9757 === (7))){
var inst_9752 = (state_9756[(2)]);
var state_9756__$1 = state_9756;
var statearr_9763_9895 = state_9756__$1;
(statearr_9763_9895[(2)] = inst_9752);

(statearr_9763_9895[(1)] = (3));


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
});})(__9876,c__9536__auto___9889,G__9719_9877,G__9719_9878__$1,n__4518__auto___9875,jobs,results,process,async))
;
return ((function (__9876,switch__9441__auto__,c__9536__auto___9889,G__9719_9877,G__9719_9878__$1,n__4518__auto___9875,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____0 = (function (){
var statearr_9764 = [null,null,null,null,null,null,null];
(statearr_9764[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__);

(statearr_9764[(1)] = (1));

return statearr_9764;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____1 = (function (state_9756){
while(true){
var ret_value__9443__auto__ = (function (){try{while(true){
var result__9444__auto__ = switch__9441__auto__.call(null,state_9756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9444__auto__;
}
break;
}
}catch (e9765){if((e9765 instanceof Object)){
var ex__9445__auto__ = e9765;
var statearr_9766_9896 = state_9756;
(statearr_9766_9896[(5)] = ex__9445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9897 = state_9756;
state_9756 = G__9897;
continue;
} else {
return ret_value__9443__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__ = function(state_9756){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____1.call(this,state_9756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__;
})()
;})(__9876,switch__9441__auto__,c__9536__auto___9889,G__9719_9877,G__9719_9878__$1,n__4518__auto___9875,jobs,results,process,async))
})();
var state__9538__auto__ = (function (){var statearr_9767 = f__9537__auto__.call(null);
(statearr_9767[(6)] = c__9536__auto___9889);

return statearr_9767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9538__auto__);
});})(__9876,c__9536__auto___9889,G__9719_9877,G__9719_9878__$1,n__4518__auto___9875,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9719_9878__$1)].join('')));

}

var G__9898 = (__9876 + (1));
__9876 = G__9898;
continue;
} else {
}
break;
}

var c__9536__auto___9899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9536__auto___9899,jobs,results,process,async){
return (function (){
var f__9537__auto__ = (function (){var switch__9441__auto__ = ((function (c__9536__auto___9899,jobs,results,process,async){
return (function (state_9789){
var state_val_9790 = (state_9789[(1)]);
if((state_val_9790 === (7))){
var inst_9785 = (state_9789[(2)]);
var state_9789__$1 = state_9789;
var statearr_9791_9900 = state_9789__$1;
(statearr_9791_9900[(2)] = inst_9785);

(statearr_9791_9900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9790 === (1))){
var state_9789__$1 = state_9789;
var statearr_9792_9901 = state_9789__$1;
(statearr_9792_9901[(2)] = null);

(statearr_9792_9901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9790 === (4))){
var inst_9770 = (state_9789[(7)]);
var inst_9770__$1 = (state_9789[(2)]);
var inst_9771 = (inst_9770__$1 == null);
var state_9789__$1 = (function (){var statearr_9793 = state_9789;
(statearr_9793[(7)] = inst_9770__$1);

return statearr_9793;
})();
if(cljs.core.truth_(inst_9771)){
var statearr_9794_9902 = state_9789__$1;
(statearr_9794_9902[(1)] = (5));

} else {
var statearr_9795_9903 = state_9789__$1;
(statearr_9795_9903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9790 === (6))){
var inst_9775 = (state_9789[(8)]);
var inst_9770 = (state_9789[(7)]);
var inst_9775__$1 = cljs.core.async.chan.call(null,(1));
var inst_9776 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9777 = [inst_9770,inst_9775__$1];
var inst_9778 = (new cljs.core.PersistentVector(null,2,(5),inst_9776,inst_9777,null));
var state_9789__$1 = (function (){var statearr_9796 = state_9789;
(statearr_9796[(8)] = inst_9775__$1);

return statearr_9796;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9789__$1,(8),jobs,inst_9778);
} else {
if((state_val_9790 === (3))){
var inst_9787 = (state_9789[(2)]);
var state_9789__$1 = state_9789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9789__$1,inst_9787);
} else {
if((state_val_9790 === (2))){
var state_9789__$1 = state_9789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9789__$1,(4),from);
} else {
if((state_val_9790 === (9))){
var inst_9782 = (state_9789[(2)]);
var state_9789__$1 = (function (){var statearr_9797 = state_9789;
(statearr_9797[(9)] = inst_9782);

return statearr_9797;
})();
var statearr_9798_9904 = state_9789__$1;
(statearr_9798_9904[(2)] = null);

(statearr_9798_9904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9790 === (5))){
var inst_9773 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9789__$1 = state_9789;
var statearr_9799_9905 = state_9789__$1;
(statearr_9799_9905[(2)] = inst_9773);

(statearr_9799_9905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9790 === (8))){
var inst_9775 = (state_9789[(8)]);
var inst_9780 = (state_9789[(2)]);
var state_9789__$1 = (function (){var statearr_9800 = state_9789;
(statearr_9800[(10)] = inst_9780);

return statearr_9800;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9789__$1,(9),results,inst_9775);
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
});})(c__9536__auto___9899,jobs,results,process,async))
;
return ((function (switch__9441__auto__,c__9536__auto___9899,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____0 = (function (){
var statearr_9801 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9801[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__);

(statearr_9801[(1)] = (1));

return statearr_9801;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____1 = (function (state_9789){
while(true){
var ret_value__9443__auto__ = (function (){try{while(true){
var result__9444__auto__ = switch__9441__auto__.call(null,state_9789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9444__auto__;
}
break;
}
}catch (e9802){if((e9802 instanceof Object)){
var ex__9445__auto__ = e9802;
var statearr_9803_9906 = state_9789;
(statearr_9803_9906[(5)] = ex__9445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9907 = state_9789;
state_9789 = G__9907;
continue;
} else {
return ret_value__9443__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__ = function(state_9789){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____1.call(this,state_9789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__;
})()
;})(switch__9441__auto__,c__9536__auto___9899,jobs,results,process,async))
})();
var state__9538__auto__ = (function (){var statearr_9804 = f__9537__auto__.call(null);
(statearr_9804[(6)] = c__9536__auto___9899);

return statearr_9804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9538__auto__);
});})(c__9536__auto___9899,jobs,results,process,async))
);


var c__9536__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9536__auto__,jobs,results,process,async){
return (function (){
var f__9537__auto__ = (function (){var switch__9441__auto__ = ((function (c__9536__auto__,jobs,results,process,async){
return (function (state_9842){
var state_val_9843 = (state_9842[(1)]);
if((state_val_9843 === (7))){
var inst_9838 = (state_9842[(2)]);
var state_9842__$1 = state_9842;
var statearr_9844_9908 = state_9842__$1;
(statearr_9844_9908[(2)] = inst_9838);

(statearr_9844_9908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9843 === (20))){
var state_9842__$1 = state_9842;
var statearr_9845_9909 = state_9842__$1;
(statearr_9845_9909[(2)] = null);

(statearr_9845_9909[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9843 === (1))){
var state_9842__$1 = state_9842;
var statearr_9846_9910 = state_9842__$1;
(statearr_9846_9910[(2)] = null);

(statearr_9846_9910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9843 === (4))){
var inst_9807 = (state_9842[(7)]);
var inst_9807__$1 = (state_9842[(2)]);
var inst_9808 = (inst_9807__$1 == null);
var state_9842__$1 = (function (){var statearr_9847 = state_9842;
(statearr_9847[(7)] = inst_9807__$1);

return statearr_9847;
})();
if(cljs.core.truth_(inst_9808)){
var statearr_9848_9911 = state_9842__$1;
(statearr_9848_9911[(1)] = (5));

} else {
var statearr_9849_9912 = state_9842__$1;
(statearr_9849_9912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9843 === (15))){
var inst_9820 = (state_9842[(8)]);
var state_9842__$1 = state_9842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9842__$1,(18),to,inst_9820);
} else {
if((state_val_9843 === (21))){
var inst_9833 = (state_9842[(2)]);
var state_9842__$1 = state_9842;
var statearr_9850_9913 = state_9842__$1;
(statearr_9850_9913[(2)] = inst_9833);

(statearr_9850_9913[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9843 === (13))){
var inst_9835 = (state_9842[(2)]);
var state_9842__$1 = (function (){var statearr_9851 = state_9842;
(statearr_9851[(9)] = inst_9835);

return statearr_9851;
})();
var statearr_9852_9914 = state_9842__$1;
(statearr_9852_9914[(2)] = null);

(statearr_9852_9914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9843 === (6))){
var inst_9807 = (state_9842[(7)]);
var state_9842__$1 = state_9842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9842__$1,(11),inst_9807);
} else {
if((state_val_9843 === (17))){
var inst_9828 = (state_9842[(2)]);
var state_9842__$1 = state_9842;
if(cljs.core.truth_(inst_9828)){
var statearr_9853_9915 = state_9842__$1;
(statearr_9853_9915[(1)] = (19));

} else {
var statearr_9854_9916 = state_9842__$1;
(statearr_9854_9916[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9843 === (3))){
var inst_9840 = (state_9842[(2)]);
var state_9842__$1 = state_9842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9842__$1,inst_9840);
} else {
if((state_val_9843 === (12))){
var inst_9817 = (state_9842[(10)]);
var state_9842__$1 = state_9842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9842__$1,(14),inst_9817);
} else {
if((state_val_9843 === (2))){
var state_9842__$1 = state_9842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9842__$1,(4),results);
} else {
if((state_val_9843 === (19))){
var state_9842__$1 = state_9842;
var statearr_9855_9917 = state_9842__$1;
(statearr_9855_9917[(2)] = null);

(statearr_9855_9917[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9843 === (11))){
var inst_9817 = (state_9842[(2)]);
var state_9842__$1 = (function (){var statearr_9856 = state_9842;
(statearr_9856[(10)] = inst_9817);

return statearr_9856;
})();
var statearr_9857_9918 = state_9842__$1;
(statearr_9857_9918[(2)] = null);

(statearr_9857_9918[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9843 === (9))){
var state_9842__$1 = state_9842;
var statearr_9858_9919 = state_9842__$1;
(statearr_9858_9919[(2)] = null);

(statearr_9858_9919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9843 === (5))){
var state_9842__$1 = state_9842;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9859_9920 = state_9842__$1;
(statearr_9859_9920[(1)] = (8));

} else {
var statearr_9860_9921 = state_9842__$1;
(statearr_9860_9921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9843 === (14))){
var inst_9820 = (state_9842[(8)]);
var inst_9822 = (state_9842[(11)]);
var inst_9820__$1 = (state_9842[(2)]);
var inst_9821 = (inst_9820__$1 == null);
var inst_9822__$1 = cljs.core.not.call(null,inst_9821);
var state_9842__$1 = (function (){var statearr_9861 = state_9842;
(statearr_9861[(8)] = inst_9820__$1);

(statearr_9861[(11)] = inst_9822__$1);

return statearr_9861;
})();
if(inst_9822__$1){
var statearr_9862_9922 = state_9842__$1;
(statearr_9862_9922[(1)] = (15));

} else {
var statearr_9863_9923 = state_9842__$1;
(statearr_9863_9923[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9843 === (16))){
var inst_9822 = (state_9842[(11)]);
var state_9842__$1 = state_9842;
var statearr_9864_9924 = state_9842__$1;
(statearr_9864_9924[(2)] = inst_9822);

(statearr_9864_9924[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9843 === (10))){
var inst_9814 = (state_9842[(2)]);
var state_9842__$1 = state_9842;
var statearr_9865_9925 = state_9842__$1;
(statearr_9865_9925[(2)] = inst_9814);

(statearr_9865_9925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9843 === (18))){
var inst_9825 = (state_9842[(2)]);
var state_9842__$1 = state_9842;
var statearr_9866_9926 = state_9842__$1;
(statearr_9866_9926[(2)] = inst_9825);

(statearr_9866_9926[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9843 === (8))){
var inst_9811 = cljs.core.async.close_BANG_.call(null,to);
var state_9842__$1 = state_9842;
var statearr_9867_9927 = state_9842__$1;
(statearr_9867_9927[(2)] = inst_9811);

(statearr_9867_9927[(1)] = (10));


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
});})(c__9536__auto__,jobs,results,process,async))
;
return ((function (switch__9441__auto__,c__9536__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____0 = (function (){
var statearr_9868 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9868[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__);

(statearr_9868[(1)] = (1));

return statearr_9868;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____1 = (function (state_9842){
while(true){
var ret_value__9443__auto__ = (function (){try{while(true){
var result__9444__auto__ = switch__9441__auto__.call(null,state_9842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9444__auto__;
}
break;
}
}catch (e9869){if((e9869 instanceof Object)){
var ex__9445__auto__ = e9869;
var statearr_9870_9928 = state_9842;
(statearr_9870_9928[(5)] = ex__9445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9929 = state_9842;
state_9842 = G__9929;
continue;
} else {
return ret_value__9443__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__ = function(state_9842){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____1.call(this,state_9842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9442__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9442__auto__;
})()
;})(switch__9441__auto__,c__9536__auto__,jobs,results,process,async))
})();
var state__9538__auto__ = (function (){var statearr_9871 = f__9537__auto__.call(null);
(statearr_9871[(6)] = c__9536__auto__);

return statearr_9871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9538__auto__);
});})(c__9536__auto__,jobs,results,process,async))
);

return c__9536__auto__;
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
var G__9931 = arguments.length;
switch (G__9931) {
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
var G__9934 = arguments.length;
switch (G__9934) {
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
var G__9937 = arguments.length;
switch (G__9937) {
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
var c__9536__auto___9986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9536__auto___9986,tc,fc){
return (function (){
var f__9537__auto__ = (function (){var switch__9441__auto__ = ((function (c__9536__auto___9986,tc,fc){
return (function (state_9963){
var state_val_9964 = (state_9963[(1)]);
if((state_val_9964 === (7))){
var inst_9959 = (state_9963[(2)]);
var state_9963__$1 = state_9963;
var statearr_9965_9987 = state_9963__$1;
(statearr_9965_9987[(2)] = inst_9959);

(statearr_9965_9987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9964 === (1))){
var state_9963__$1 = state_9963;
var statearr_9966_9988 = state_9963__$1;
(statearr_9966_9988[(2)] = null);

(statearr_9966_9988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9964 === (4))){
var inst_9940 = (state_9963[(7)]);
var inst_9940__$1 = (state_9963[(2)]);
var inst_9941 = (inst_9940__$1 == null);
var state_9963__$1 = (function (){var statearr_9967 = state_9963;
(statearr_9967[(7)] = inst_9940__$1);

return statearr_9967;
})();
if(cljs.core.truth_(inst_9941)){
var statearr_9968_9989 = state_9963__$1;
(statearr_9968_9989[(1)] = (5));

} else {
var statearr_9969_9990 = state_9963__$1;
(statearr_9969_9990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9964 === (13))){
var state_9963__$1 = state_9963;
var statearr_9970_9991 = state_9963__$1;
(statearr_9970_9991[(2)] = null);

(statearr_9970_9991[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9964 === (6))){
var inst_9940 = (state_9963[(7)]);
var inst_9946 = p.call(null,inst_9940);
var state_9963__$1 = state_9963;
if(cljs.core.truth_(inst_9946)){
var statearr_9971_9992 = state_9963__$1;
(statearr_9971_9992[(1)] = (9));

} else {
var statearr_9972_9993 = state_9963__$1;
(statearr_9972_9993[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9964 === (3))){
var inst_9961 = (state_9963[(2)]);
var state_9963__$1 = state_9963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9963__$1,inst_9961);
} else {
if((state_val_9964 === (12))){
var state_9963__$1 = state_9963;
var statearr_9973_9994 = state_9963__$1;
(statearr_9973_9994[(2)] = null);

(statearr_9973_9994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9964 === (2))){
var state_9963__$1 = state_9963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9963__$1,(4),ch);
} else {
if((state_val_9964 === (11))){
var inst_9940 = (state_9963[(7)]);
var inst_9950 = (state_9963[(2)]);
var state_9963__$1 = state_9963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9963__$1,(8),inst_9950,inst_9940);
} else {
if((state_val_9964 === (9))){
var state_9963__$1 = state_9963;
var statearr_9974_9995 = state_9963__$1;
(statearr_9974_9995[(2)] = tc);

(statearr_9974_9995[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9964 === (5))){
var inst_9943 = cljs.core.async.close_BANG_.call(null,tc);
var inst_9944 = cljs.core.async.close_BANG_.call(null,fc);
var state_9963__$1 = (function (){var statearr_9975 = state_9963;
(statearr_9975[(8)] = inst_9943);

return statearr_9975;
})();
var statearr_9976_9996 = state_9963__$1;
(statearr_9976_9996[(2)] = inst_9944);

(statearr_9976_9996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9964 === (14))){
var inst_9957 = (state_9963[(2)]);
var state_9963__$1 = state_9963;
var statearr_9977_9997 = state_9963__$1;
(statearr_9977_9997[(2)] = inst_9957);

(statearr_9977_9997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9964 === (10))){
var state_9963__$1 = state_9963;
var statearr_9978_9998 = state_9963__$1;
(statearr_9978_9998[(2)] = fc);

(statearr_9978_9998[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9964 === (8))){
var inst_9952 = (state_9963[(2)]);
var state_9963__$1 = state_9963;
if(cljs.core.truth_(inst_9952)){
var statearr_9979_9999 = state_9963__$1;
(statearr_9979_9999[(1)] = (12));

} else {
var statearr_9980_10000 = state_9963__$1;
(statearr_9980_10000[(1)] = (13));

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
});})(c__9536__auto___9986,tc,fc))
;
return ((function (switch__9441__auto__,c__9536__auto___9986,tc,fc){
return (function() {
var cljs$core$async$state_machine__9442__auto__ = null;
var cljs$core$async$state_machine__9442__auto____0 = (function (){
var statearr_9981 = [null,null,null,null,null,null,null,null,null];
(statearr_9981[(0)] = cljs$core$async$state_machine__9442__auto__);

(statearr_9981[(1)] = (1));

return statearr_9981;
});
var cljs$core$async$state_machine__9442__auto____1 = (function (state_9963){
while(true){
var ret_value__9443__auto__ = (function (){try{while(true){
var result__9444__auto__ = switch__9441__auto__.call(null,state_9963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9444__auto__;
}
break;
}
}catch (e9982){if((e9982 instanceof Object)){
var ex__9445__auto__ = e9982;
var statearr_9983_10001 = state_9963;
(statearr_9983_10001[(5)] = ex__9445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10002 = state_9963;
state_9963 = G__10002;
continue;
} else {
return ret_value__9443__auto__;
}
break;
}
});
cljs$core$async$state_machine__9442__auto__ = function(state_9963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9442__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9442__auto____1.call(this,state_9963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9442__auto____0;
cljs$core$async$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9442__auto____1;
return cljs$core$async$state_machine__9442__auto__;
})()
;})(switch__9441__auto__,c__9536__auto___9986,tc,fc))
})();
var state__9538__auto__ = (function (){var statearr_9984 = f__9537__auto__.call(null);
(statearr_9984[(6)] = c__9536__auto___9986);

return statearr_9984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9538__auto__);
});})(c__9536__auto___9986,tc,fc))
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
var c__9536__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9536__auto__){
return (function (){
var f__9537__auto__ = (function (){var switch__9441__auto__ = ((function (c__9536__auto__){
return (function (state_10023){
var state_val_10024 = (state_10023[(1)]);
if((state_val_10024 === (7))){
var inst_10019 = (state_10023[(2)]);
var state_10023__$1 = state_10023;
var statearr_10025_10043 = state_10023__$1;
(statearr_10025_10043[(2)] = inst_10019);

(statearr_10025_10043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10024 === (1))){
var inst_10003 = init;
var state_10023__$1 = (function (){var statearr_10026 = state_10023;
(statearr_10026[(7)] = inst_10003);

return statearr_10026;
})();
var statearr_10027_10044 = state_10023__$1;
(statearr_10027_10044[(2)] = null);

(statearr_10027_10044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10024 === (4))){
var inst_10006 = (state_10023[(8)]);
var inst_10006__$1 = (state_10023[(2)]);
var inst_10007 = (inst_10006__$1 == null);
var state_10023__$1 = (function (){var statearr_10028 = state_10023;
(statearr_10028[(8)] = inst_10006__$1);

return statearr_10028;
})();
if(cljs.core.truth_(inst_10007)){
var statearr_10029_10045 = state_10023__$1;
(statearr_10029_10045[(1)] = (5));

} else {
var statearr_10030_10046 = state_10023__$1;
(statearr_10030_10046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10024 === (6))){
var inst_10006 = (state_10023[(8)]);
var inst_10010 = (state_10023[(9)]);
var inst_10003 = (state_10023[(7)]);
var inst_10010__$1 = f.call(null,inst_10003,inst_10006);
var inst_10011 = cljs.core.reduced_QMARK_.call(null,inst_10010__$1);
var state_10023__$1 = (function (){var statearr_10031 = state_10023;
(statearr_10031[(9)] = inst_10010__$1);

return statearr_10031;
})();
if(inst_10011){
var statearr_10032_10047 = state_10023__$1;
(statearr_10032_10047[(1)] = (8));

} else {
var statearr_10033_10048 = state_10023__$1;
(statearr_10033_10048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10024 === (3))){
var inst_10021 = (state_10023[(2)]);
var state_10023__$1 = state_10023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10023__$1,inst_10021);
} else {
if((state_val_10024 === (2))){
var state_10023__$1 = state_10023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10023__$1,(4),ch);
} else {
if((state_val_10024 === (9))){
var inst_10010 = (state_10023[(9)]);
var inst_10003 = inst_10010;
var state_10023__$1 = (function (){var statearr_10034 = state_10023;
(statearr_10034[(7)] = inst_10003);

return statearr_10034;
})();
var statearr_10035_10049 = state_10023__$1;
(statearr_10035_10049[(2)] = null);

(statearr_10035_10049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10024 === (5))){
var inst_10003 = (state_10023[(7)]);
var state_10023__$1 = state_10023;
var statearr_10036_10050 = state_10023__$1;
(statearr_10036_10050[(2)] = inst_10003);

(statearr_10036_10050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10024 === (10))){
var inst_10017 = (state_10023[(2)]);
var state_10023__$1 = state_10023;
var statearr_10037_10051 = state_10023__$1;
(statearr_10037_10051[(2)] = inst_10017);

(statearr_10037_10051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10024 === (8))){
var inst_10010 = (state_10023[(9)]);
var inst_10013 = cljs.core.deref.call(null,inst_10010);
var state_10023__$1 = state_10023;
var statearr_10038_10052 = state_10023__$1;
(statearr_10038_10052[(2)] = inst_10013);

(statearr_10038_10052[(1)] = (10));


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
});})(c__9536__auto__))
;
return ((function (switch__9441__auto__,c__9536__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__9442__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9442__auto____0 = (function (){
var statearr_10039 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10039[(0)] = cljs$core$async$reduce_$_state_machine__9442__auto__);

(statearr_10039[(1)] = (1));

return statearr_10039;
});
var cljs$core$async$reduce_$_state_machine__9442__auto____1 = (function (state_10023){
while(true){
var ret_value__9443__auto__ = (function (){try{while(true){
var result__9444__auto__ = switch__9441__auto__.call(null,state_10023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9444__auto__;
}
break;
}
}catch (e10040){if((e10040 instanceof Object)){
var ex__9445__auto__ = e10040;
var statearr_10041_10053 = state_10023;
(statearr_10041_10053[(5)] = ex__9445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10054 = state_10023;
state_10023 = G__10054;
continue;
} else {
return ret_value__9443__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9442__auto__ = function(state_10023){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9442__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9442__auto____1.call(this,state_10023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9442__auto____0;
cljs$core$async$reduce_$_state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9442__auto____1;
return cljs$core$async$reduce_$_state_machine__9442__auto__;
})()
;})(switch__9441__auto__,c__9536__auto__))
})();
var state__9538__auto__ = (function (){var statearr_10042 = f__9537__auto__.call(null);
(statearr_10042[(6)] = c__9536__auto__);

return statearr_10042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9538__auto__);
});})(c__9536__auto__))
);

return c__9536__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__9536__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9536__auto__,f__$1){
return (function (){
var f__9537__auto__ = (function (){var switch__9441__auto__ = ((function (c__9536__auto__,f__$1){
return (function (state_10060){
var state_val_10061 = (state_10060[(1)]);
if((state_val_10061 === (1))){
var inst_10055 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_10060__$1 = state_10060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10060__$1,(2),inst_10055);
} else {
if((state_val_10061 === (2))){
var inst_10057 = (state_10060[(2)]);
var inst_10058 = f__$1.call(null,inst_10057);
var state_10060__$1 = state_10060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10060__$1,inst_10058);
} else {
return null;
}
}
});})(c__9536__auto__,f__$1))
;
return ((function (switch__9441__auto__,c__9536__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__9442__auto__ = null;
var cljs$core$async$transduce_$_state_machine__9442__auto____0 = (function (){
var statearr_10062 = [null,null,null,null,null,null,null];
(statearr_10062[(0)] = cljs$core$async$transduce_$_state_machine__9442__auto__);

(statearr_10062[(1)] = (1));

return statearr_10062;
});
var cljs$core$async$transduce_$_state_machine__9442__auto____1 = (function (state_10060){
while(true){
var ret_value__9443__auto__ = (function (){try{while(true){
var result__9444__auto__ = switch__9441__auto__.call(null,state_10060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9444__auto__;
}
break;
}
}catch (e10063){if((e10063 instanceof Object)){
var ex__9445__auto__ = e10063;
var statearr_10064_10066 = state_10060;
(statearr_10064_10066[(5)] = ex__9445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10067 = state_10060;
state_10060 = G__10067;
continue;
} else {
return ret_value__9443__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__9442__auto__ = function(state_10060){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__9442__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__9442__auto____1.call(this,state_10060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__9442__auto____0;
cljs$core$async$transduce_$_state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__9442__auto____1;
return cljs$core$async$transduce_$_state_machine__9442__auto__;
})()
;})(switch__9441__auto__,c__9536__auto__,f__$1))
})();
var state__9538__auto__ = (function (){var statearr_10065 = f__9537__auto__.call(null);
(statearr_10065[(6)] = c__9536__auto__);

return statearr_10065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9538__auto__);
});})(c__9536__auto__,f__$1))
);

return c__9536__auto__;
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
var G__10069 = arguments.length;
switch (G__10069) {
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
var c__9536__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9536__auto__){
return (function (){
var f__9537__auto__ = (function (){var switch__9441__auto__ = ((function (c__9536__auto__){
return (function (state_10094){
var state_val_10095 = (state_10094[(1)]);
if((state_val_10095 === (7))){
var inst_10076 = (state_10094[(2)]);
var state_10094__$1 = state_10094;
var statearr_10096_10117 = state_10094__$1;
(statearr_10096_10117[(2)] = inst_10076);

(statearr_10096_10117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10095 === (1))){
var inst_10070 = cljs.core.seq.call(null,coll);
var inst_10071 = inst_10070;
var state_10094__$1 = (function (){var statearr_10097 = state_10094;
(statearr_10097[(7)] = inst_10071);

return statearr_10097;
})();
var statearr_10098_10118 = state_10094__$1;
(statearr_10098_10118[(2)] = null);

(statearr_10098_10118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10095 === (4))){
var inst_10071 = (state_10094[(7)]);
var inst_10074 = cljs.core.first.call(null,inst_10071);
var state_10094__$1 = state_10094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10094__$1,(7),ch,inst_10074);
} else {
if((state_val_10095 === (13))){
var inst_10088 = (state_10094[(2)]);
var state_10094__$1 = state_10094;
var statearr_10099_10119 = state_10094__$1;
(statearr_10099_10119[(2)] = inst_10088);

(statearr_10099_10119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10095 === (6))){
var inst_10079 = (state_10094[(2)]);
var state_10094__$1 = state_10094;
if(cljs.core.truth_(inst_10079)){
var statearr_10100_10120 = state_10094__$1;
(statearr_10100_10120[(1)] = (8));

} else {
var statearr_10101_10121 = state_10094__$1;
(statearr_10101_10121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10095 === (3))){
var inst_10092 = (state_10094[(2)]);
var state_10094__$1 = state_10094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10094__$1,inst_10092);
} else {
if((state_val_10095 === (12))){
var state_10094__$1 = state_10094;
var statearr_10102_10122 = state_10094__$1;
(statearr_10102_10122[(2)] = null);

(statearr_10102_10122[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10095 === (2))){
var inst_10071 = (state_10094[(7)]);
var state_10094__$1 = state_10094;
if(cljs.core.truth_(inst_10071)){
var statearr_10103_10123 = state_10094__$1;
(statearr_10103_10123[(1)] = (4));

} else {
var statearr_10104_10124 = state_10094__$1;
(statearr_10104_10124[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10095 === (11))){
var inst_10085 = cljs.core.async.close_BANG_.call(null,ch);
var state_10094__$1 = state_10094;
var statearr_10105_10125 = state_10094__$1;
(statearr_10105_10125[(2)] = inst_10085);

(statearr_10105_10125[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10095 === (9))){
var state_10094__$1 = state_10094;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10106_10126 = state_10094__$1;
(statearr_10106_10126[(1)] = (11));

} else {
var statearr_10107_10127 = state_10094__$1;
(statearr_10107_10127[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10095 === (5))){
var inst_10071 = (state_10094[(7)]);
var state_10094__$1 = state_10094;
var statearr_10108_10128 = state_10094__$1;
(statearr_10108_10128[(2)] = inst_10071);

(statearr_10108_10128[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10095 === (10))){
var inst_10090 = (state_10094[(2)]);
var state_10094__$1 = state_10094;
var statearr_10109_10129 = state_10094__$1;
(statearr_10109_10129[(2)] = inst_10090);

(statearr_10109_10129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10095 === (8))){
var inst_10071 = (state_10094[(7)]);
var inst_10081 = cljs.core.next.call(null,inst_10071);
var inst_10071__$1 = inst_10081;
var state_10094__$1 = (function (){var statearr_10110 = state_10094;
(statearr_10110[(7)] = inst_10071__$1);

return statearr_10110;
})();
var statearr_10111_10130 = state_10094__$1;
(statearr_10111_10130[(2)] = null);

(statearr_10111_10130[(1)] = (2));


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
});})(c__9536__auto__))
;
return ((function (switch__9441__auto__,c__9536__auto__){
return (function() {
var cljs$core$async$state_machine__9442__auto__ = null;
var cljs$core$async$state_machine__9442__auto____0 = (function (){
var statearr_10112 = [null,null,null,null,null,null,null,null];
(statearr_10112[(0)] = cljs$core$async$state_machine__9442__auto__);

(statearr_10112[(1)] = (1));

return statearr_10112;
});
var cljs$core$async$state_machine__9442__auto____1 = (function (state_10094){
while(true){
var ret_value__9443__auto__ = (function (){try{while(true){
var result__9444__auto__ = switch__9441__auto__.call(null,state_10094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9444__auto__;
}
break;
}
}catch (e10113){if((e10113 instanceof Object)){
var ex__9445__auto__ = e10113;
var statearr_10114_10131 = state_10094;
(statearr_10114_10131[(5)] = ex__9445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10132 = state_10094;
state_10094 = G__10132;
continue;
} else {
return ret_value__9443__auto__;
}
break;
}
});
cljs$core$async$state_machine__9442__auto__ = function(state_10094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9442__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9442__auto____1.call(this,state_10094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9442__auto____0;
cljs$core$async$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9442__auto____1;
return cljs$core$async$state_machine__9442__auto__;
})()
;})(switch__9441__auto__,c__9536__auto__))
})();
var state__9538__auto__ = (function (){var statearr_10115 = f__9537__auto__.call(null);
(statearr_10115[(6)] = c__9536__auto__);

return statearr_10115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9538__auto__);
});})(c__9536__auto__))
);

return c__9536__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10133 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10133 = (function (ch,cs,meta10134){
this.ch = ch;
this.cs = cs;
this.meta10134 = meta10134;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10135,meta10134__$1){
var self__ = this;
var _10135__$1 = this;
return (new cljs.core.async.t_cljs$core$async10133(self__.ch,self__.cs,meta10134__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async10133.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10135){
var self__ = this;
var _10135__$1 = this;
return self__.meta10134;
});})(cs))
;

cljs.core.async.t_cljs$core$async10133.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10133.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async10133.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10133.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10133.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10133.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10133.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10134","meta10134",-1349914306,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async10133.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10133.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10133";

cljs.core.async.t_cljs$core$async10133.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async10133");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10133.
 */
cljs.core.async.__GT_t_cljs$core$async10133 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async10133(ch__$1,cs__$1,meta10134){
return (new cljs.core.async.t_cljs$core$async10133(ch__$1,cs__$1,meta10134));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async10133(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__9536__auto___10355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9536__auto___10355,cs,m,dchan,dctr,done){
return (function (){
var f__9537__auto__ = (function (){var switch__9441__auto__ = ((function (c__9536__auto___10355,cs,m,dchan,dctr,done){
return (function (state_10270){
var state_val_10271 = (state_10270[(1)]);
if((state_val_10271 === (7))){
var inst_10266 = (state_10270[(2)]);
var state_10270__$1 = state_10270;
var statearr_10272_10356 = state_10270__$1;
(statearr_10272_10356[(2)] = inst_10266);

(statearr_10272_10356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (20))){
var inst_10169 = (state_10270[(7)]);
var inst_10181 = cljs.core.first.call(null,inst_10169);
var inst_10182 = cljs.core.nth.call(null,inst_10181,(0),null);
var inst_10183 = cljs.core.nth.call(null,inst_10181,(1),null);
var state_10270__$1 = (function (){var statearr_10273 = state_10270;
(statearr_10273[(8)] = inst_10182);

return statearr_10273;
})();
if(cljs.core.truth_(inst_10183)){
var statearr_10274_10357 = state_10270__$1;
(statearr_10274_10357[(1)] = (22));

} else {
var statearr_10275_10358 = state_10270__$1;
(statearr_10275_10358[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (27))){
var inst_10218 = (state_10270[(9)]);
var inst_10213 = (state_10270[(10)]);
var inst_10138 = (state_10270[(11)]);
var inst_10211 = (state_10270[(12)]);
var inst_10218__$1 = cljs.core._nth.call(null,inst_10211,inst_10213);
var inst_10219 = cljs.core.async.put_BANG_.call(null,inst_10218__$1,inst_10138,done);
var state_10270__$1 = (function (){var statearr_10276 = state_10270;
(statearr_10276[(9)] = inst_10218__$1);

return statearr_10276;
})();
if(cljs.core.truth_(inst_10219)){
var statearr_10277_10359 = state_10270__$1;
(statearr_10277_10359[(1)] = (30));

} else {
var statearr_10278_10360 = state_10270__$1;
(statearr_10278_10360[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (1))){
var state_10270__$1 = state_10270;
var statearr_10279_10361 = state_10270__$1;
(statearr_10279_10361[(2)] = null);

(statearr_10279_10361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (24))){
var inst_10169 = (state_10270[(7)]);
var inst_10188 = (state_10270[(2)]);
var inst_10189 = cljs.core.next.call(null,inst_10169);
var inst_10147 = inst_10189;
var inst_10148 = null;
var inst_10149 = (0);
var inst_10150 = (0);
var state_10270__$1 = (function (){var statearr_10280 = state_10270;
(statearr_10280[(13)] = inst_10150);

(statearr_10280[(14)] = inst_10148);

(statearr_10280[(15)] = inst_10149);

(statearr_10280[(16)] = inst_10147);

(statearr_10280[(17)] = inst_10188);

return statearr_10280;
})();
var statearr_10281_10362 = state_10270__$1;
(statearr_10281_10362[(2)] = null);

(statearr_10281_10362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (39))){
var state_10270__$1 = state_10270;
var statearr_10285_10363 = state_10270__$1;
(statearr_10285_10363[(2)] = null);

(statearr_10285_10363[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (4))){
var inst_10138 = (state_10270[(11)]);
var inst_10138__$1 = (state_10270[(2)]);
var inst_10139 = (inst_10138__$1 == null);
var state_10270__$1 = (function (){var statearr_10286 = state_10270;
(statearr_10286[(11)] = inst_10138__$1);

return statearr_10286;
})();
if(cljs.core.truth_(inst_10139)){
var statearr_10287_10364 = state_10270__$1;
(statearr_10287_10364[(1)] = (5));

} else {
var statearr_10288_10365 = state_10270__$1;
(statearr_10288_10365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (15))){
var inst_10150 = (state_10270[(13)]);
var inst_10148 = (state_10270[(14)]);
var inst_10149 = (state_10270[(15)]);
var inst_10147 = (state_10270[(16)]);
var inst_10165 = (state_10270[(2)]);
var inst_10166 = (inst_10150 + (1));
var tmp10282 = inst_10148;
var tmp10283 = inst_10149;
var tmp10284 = inst_10147;
var inst_10147__$1 = tmp10284;
var inst_10148__$1 = tmp10282;
var inst_10149__$1 = tmp10283;
var inst_10150__$1 = inst_10166;
var state_10270__$1 = (function (){var statearr_10289 = state_10270;
(statearr_10289[(13)] = inst_10150__$1);

(statearr_10289[(14)] = inst_10148__$1);

(statearr_10289[(18)] = inst_10165);

(statearr_10289[(15)] = inst_10149__$1);

(statearr_10289[(16)] = inst_10147__$1);

return statearr_10289;
})();
var statearr_10290_10366 = state_10270__$1;
(statearr_10290_10366[(2)] = null);

(statearr_10290_10366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (21))){
var inst_10192 = (state_10270[(2)]);
var state_10270__$1 = state_10270;
var statearr_10294_10367 = state_10270__$1;
(statearr_10294_10367[(2)] = inst_10192);

(statearr_10294_10367[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (31))){
var inst_10218 = (state_10270[(9)]);
var inst_10222 = done.call(null,null);
var inst_10223 = cljs.core.async.untap_STAR_.call(null,m,inst_10218);
var state_10270__$1 = (function (){var statearr_10295 = state_10270;
(statearr_10295[(19)] = inst_10222);

return statearr_10295;
})();
var statearr_10296_10368 = state_10270__$1;
(statearr_10296_10368[(2)] = inst_10223);

(statearr_10296_10368[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (32))){
var inst_10210 = (state_10270[(20)]);
var inst_10212 = (state_10270[(21)]);
var inst_10213 = (state_10270[(10)]);
var inst_10211 = (state_10270[(12)]);
var inst_10225 = (state_10270[(2)]);
var inst_10226 = (inst_10213 + (1));
var tmp10291 = inst_10210;
var tmp10292 = inst_10212;
var tmp10293 = inst_10211;
var inst_10210__$1 = tmp10291;
var inst_10211__$1 = tmp10293;
var inst_10212__$1 = tmp10292;
var inst_10213__$1 = inst_10226;
var state_10270__$1 = (function (){var statearr_10297 = state_10270;
(statearr_10297[(22)] = inst_10225);

(statearr_10297[(20)] = inst_10210__$1);

(statearr_10297[(21)] = inst_10212__$1);

(statearr_10297[(10)] = inst_10213__$1);

(statearr_10297[(12)] = inst_10211__$1);

return statearr_10297;
})();
var statearr_10298_10369 = state_10270__$1;
(statearr_10298_10369[(2)] = null);

(statearr_10298_10369[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (40))){
var inst_10238 = (state_10270[(23)]);
var inst_10242 = done.call(null,null);
var inst_10243 = cljs.core.async.untap_STAR_.call(null,m,inst_10238);
var state_10270__$1 = (function (){var statearr_10299 = state_10270;
(statearr_10299[(24)] = inst_10242);

return statearr_10299;
})();
var statearr_10300_10370 = state_10270__$1;
(statearr_10300_10370[(2)] = inst_10243);

(statearr_10300_10370[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (33))){
var inst_10229 = (state_10270[(25)]);
var inst_10231 = cljs.core.chunked_seq_QMARK_.call(null,inst_10229);
var state_10270__$1 = state_10270;
if(inst_10231){
var statearr_10301_10371 = state_10270__$1;
(statearr_10301_10371[(1)] = (36));

} else {
var statearr_10302_10372 = state_10270__$1;
(statearr_10302_10372[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (13))){
var inst_10159 = (state_10270[(26)]);
var inst_10162 = cljs.core.async.close_BANG_.call(null,inst_10159);
var state_10270__$1 = state_10270;
var statearr_10303_10373 = state_10270__$1;
(statearr_10303_10373[(2)] = inst_10162);

(statearr_10303_10373[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (22))){
var inst_10182 = (state_10270[(8)]);
var inst_10185 = cljs.core.async.close_BANG_.call(null,inst_10182);
var state_10270__$1 = state_10270;
var statearr_10304_10374 = state_10270__$1;
(statearr_10304_10374[(2)] = inst_10185);

(statearr_10304_10374[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (36))){
var inst_10229 = (state_10270[(25)]);
var inst_10233 = cljs.core.chunk_first.call(null,inst_10229);
var inst_10234 = cljs.core.chunk_rest.call(null,inst_10229);
var inst_10235 = cljs.core.count.call(null,inst_10233);
var inst_10210 = inst_10234;
var inst_10211 = inst_10233;
var inst_10212 = inst_10235;
var inst_10213 = (0);
var state_10270__$1 = (function (){var statearr_10305 = state_10270;
(statearr_10305[(20)] = inst_10210);

(statearr_10305[(21)] = inst_10212);

(statearr_10305[(10)] = inst_10213);

(statearr_10305[(12)] = inst_10211);

return statearr_10305;
})();
var statearr_10306_10375 = state_10270__$1;
(statearr_10306_10375[(2)] = null);

(statearr_10306_10375[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (41))){
var inst_10229 = (state_10270[(25)]);
var inst_10245 = (state_10270[(2)]);
var inst_10246 = cljs.core.next.call(null,inst_10229);
var inst_10210 = inst_10246;
var inst_10211 = null;
var inst_10212 = (0);
var inst_10213 = (0);
var state_10270__$1 = (function (){var statearr_10307 = state_10270;
(statearr_10307[(27)] = inst_10245);

(statearr_10307[(20)] = inst_10210);

(statearr_10307[(21)] = inst_10212);

(statearr_10307[(10)] = inst_10213);

(statearr_10307[(12)] = inst_10211);

return statearr_10307;
})();
var statearr_10308_10376 = state_10270__$1;
(statearr_10308_10376[(2)] = null);

(statearr_10308_10376[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (43))){
var state_10270__$1 = state_10270;
var statearr_10309_10377 = state_10270__$1;
(statearr_10309_10377[(2)] = null);

(statearr_10309_10377[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (29))){
var inst_10254 = (state_10270[(2)]);
var state_10270__$1 = state_10270;
var statearr_10310_10378 = state_10270__$1;
(statearr_10310_10378[(2)] = inst_10254);

(statearr_10310_10378[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (44))){
var inst_10263 = (state_10270[(2)]);
var state_10270__$1 = (function (){var statearr_10311 = state_10270;
(statearr_10311[(28)] = inst_10263);

return statearr_10311;
})();
var statearr_10312_10379 = state_10270__$1;
(statearr_10312_10379[(2)] = null);

(statearr_10312_10379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (6))){
var inst_10202 = (state_10270[(29)]);
var inst_10201 = cljs.core.deref.call(null,cs);
var inst_10202__$1 = cljs.core.keys.call(null,inst_10201);
var inst_10203 = cljs.core.count.call(null,inst_10202__$1);
var inst_10204 = cljs.core.reset_BANG_.call(null,dctr,inst_10203);
var inst_10209 = cljs.core.seq.call(null,inst_10202__$1);
var inst_10210 = inst_10209;
var inst_10211 = null;
var inst_10212 = (0);
var inst_10213 = (0);
var state_10270__$1 = (function (){var statearr_10313 = state_10270;
(statearr_10313[(20)] = inst_10210);

(statearr_10313[(21)] = inst_10212);

(statearr_10313[(30)] = inst_10204);

(statearr_10313[(10)] = inst_10213);

(statearr_10313[(29)] = inst_10202__$1);

(statearr_10313[(12)] = inst_10211);

return statearr_10313;
})();
var statearr_10314_10380 = state_10270__$1;
(statearr_10314_10380[(2)] = null);

(statearr_10314_10380[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (28))){
var inst_10210 = (state_10270[(20)]);
var inst_10229 = (state_10270[(25)]);
var inst_10229__$1 = cljs.core.seq.call(null,inst_10210);
var state_10270__$1 = (function (){var statearr_10315 = state_10270;
(statearr_10315[(25)] = inst_10229__$1);

return statearr_10315;
})();
if(inst_10229__$1){
var statearr_10316_10381 = state_10270__$1;
(statearr_10316_10381[(1)] = (33));

} else {
var statearr_10317_10382 = state_10270__$1;
(statearr_10317_10382[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (25))){
var inst_10212 = (state_10270[(21)]);
var inst_10213 = (state_10270[(10)]);
var inst_10215 = (inst_10213 < inst_10212);
var inst_10216 = inst_10215;
var state_10270__$1 = state_10270;
if(cljs.core.truth_(inst_10216)){
var statearr_10318_10383 = state_10270__$1;
(statearr_10318_10383[(1)] = (27));

} else {
var statearr_10319_10384 = state_10270__$1;
(statearr_10319_10384[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (34))){
var state_10270__$1 = state_10270;
var statearr_10320_10385 = state_10270__$1;
(statearr_10320_10385[(2)] = null);

(statearr_10320_10385[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (17))){
var state_10270__$1 = state_10270;
var statearr_10321_10386 = state_10270__$1;
(statearr_10321_10386[(2)] = null);

(statearr_10321_10386[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (3))){
var inst_10268 = (state_10270[(2)]);
var state_10270__$1 = state_10270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10270__$1,inst_10268);
} else {
if((state_val_10271 === (12))){
var inst_10197 = (state_10270[(2)]);
var state_10270__$1 = state_10270;
var statearr_10322_10387 = state_10270__$1;
(statearr_10322_10387[(2)] = inst_10197);

(statearr_10322_10387[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (2))){
var state_10270__$1 = state_10270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10270__$1,(4),ch);
} else {
if((state_val_10271 === (23))){
var state_10270__$1 = state_10270;
var statearr_10323_10388 = state_10270__$1;
(statearr_10323_10388[(2)] = null);

(statearr_10323_10388[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (35))){
var inst_10252 = (state_10270[(2)]);
var state_10270__$1 = state_10270;
var statearr_10324_10389 = state_10270__$1;
(statearr_10324_10389[(2)] = inst_10252);

(statearr_10324_10389[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (19))){
var inst_10169 = (state_10270[(7)]);
var inst_10173 = cljs.core.chunk_first.call(null,inst_10169);
var inst_10174 = cljs.core.chunk_rest.call(null,inst_10169);
var inst_10175 = cljs.core.count.call(null,inst_10173);
var inst_10147 = inst_10174;
var inst_10148 = inst_10173;
var inst_10149 = inst_10175;
var inst_10150 = (0);
var state_10270__$1 = (function (){var statearr_10325 = state_10270;
(statearr_10325[(13)] = inst_10150);

(statearr_10325[(14)] = inst_10148);

(statearr_10325[(15)] = inst_10149);

(statearr_10325[(16)] = inst_10147);

return statearr_10325;
})();
var statearr_10326_10390 = state_10270__$1;
(statearr_10326_10390[(2)] = null);

(statearr_10326_10390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (11))){
var inst_10169 = (state_10270[(7)]);
var inst_10147 = (state_10270[(16)]);
var inst_10169__$1 = cljs.core.seq.call(null,inst_10147);
var state_10270__$1 = (function (){var statearr_10327 = state_10270;
(statearr_10327[(7)] = inst_10169__$1);

return statearr_10327;
})();
if(inst_10169__$1){
var statearr_10328_10391 = state_10270__$1;
(statearr_10328_10391[(1)] = (16));

} else {
var statearr_10329_10392 = state_10270__$1;
(statearr_10329_10392[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (9))){
var inst_10199 = (state_10270[(2)]);
var state_10270__$1 = state_10270;
var statearr_10330_10393 = state_10270__$1;
(statearr_10330_10393[(2)] = inst_10199);

(statearr_10330_10393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (5))){
var inst_10145 = cljs.core.deref.call(null,cs);
var inst_10146 = cljs.core.seq.call(null,inst_10145);
var inst_10147 = inst_10146;
var inst_10148 = null;
var inst_10149 = (0);
var inst_10150 = (0);
var state_10270__$1 = (function (){var statearr_10331 = state_10270;
(statearr_10331[(13)] = inst_10150);

(statearr_10331[(14)] = inst_10148);

(statearr_10331[(15)] = inst_10149);

(statearr_10331[(16)] = inst_10147);

return statearr_10331;
})();
var statearr_10332_10394 = state_10270__$1;
(statearr_10332_10394[(2)] = null);

(statearr_10332_10394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (14))){
var state_10270__$1 = state_10270;
var statearr_10333_10395 = state_10270__$1;
(statearr_10333_10395[(2)] = null);

(statearr_10333_10395[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (45))){
var inst_10260 = (state_10270[(2)]);
var state_10270__$1 = state_10270;
var statearr_10334_10396 = state_10270__$1;
(statearr_10334_10396[(2)] = inst_10260);

(statearr_10334_10396[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (26))){
var inst_10202 = (state_10270[(29)]);
var inst_10256 = (state_10270[(2)]);
var inst_10257 = cljs.core.seq.call(null,inst_10202);
var state_10270__$1 = (function (){var statearr_10335 = state_10270;
(statearr_10335[(31)] = inst_10256);

return statearr_10335;
})();
if(inst_10257){
var statearr_10336_10397 = state_10270__$1;
(statearr_10336_10397[(1)] = (42));

} else {
var statearr_10337_10398 = state_10270__$1;
(statearr_10337_10398[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (16))){
var inst_10169 = (state_10270[(7)]);
var inst_10171 = cljs.core.chunked_seq_QMARK_.call(null,inst_10169);
var state_10270__$1 = state_10270;
if(inst_10171){
var statearr_10338_10399 = state_10270__$1;
(statearr_10338_10399[(1)] = (19));

} else {
var statearr_10339_10400 = state_10270__$1;
(statearr_10339_10400[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (38))){
var inst_10249 = (state_10270[(2)]);
var state_10270__$1 = state_10270;
var statearr_10340_10401 = state_10270__$1;
(statearr_10340_10401[(2)] = inst_10249);

(statearr_10340_10401[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (30))){
var state_10270__$1 = state_10270;
var statearr_10341_10402 = state_10270__$1;
(statearr_10341_10402[(2)] = null);

(statearr_10341_10402[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (10))){
var inst_10150 = (state_10270[(13)]);
var inst_10148 = (state_10270[(14)]);
var inst_10158 = cljs.core._nth.call(null,inst_10148,inst_10150);
var inst_10159 = cljs.core.nth.call(null,inst_10158,(0),null);
var inst_10160 = cljs.core.nth.call(null,inst_10158,(1),null);
var state_10270__$1 = (function (){var statearr_10342 = state_10270;
(statearr_10342[(26)] = inst_10159);

return statearr_10342;
})();
if(cljs.core.truth_(inst_10160)){
var statearr_10343_10403 = state_10270__$1;
(statearr_10343_10403[(1)] = (13));

} else {
var statearr_10344_10404 = state_10270__$1;
(statearr_10344_10404[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (18))){
var inst_10195 = (state_10270[(2)]);
var state_10270__$1 = state_10270;
var statearr_10345_10405 = state_10270__$1;
(statearr_10345_10405[(2)] = inst_10195);

(statearr_10345_10405[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (42))){
var state_10270__$1 = state_10270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10270__$1,(45),dchan);
} else {
if((state_val_10271 === (37))){
var inst_10238 = (state_10270[(23)]);
var inst_10229 = (state_10270[(25)]);
var inst_10138 = (state_10270[(11)]);
var inst_10238__$1 = cljs.core.first.call(null,inst_10229);
var inst_10239 = cljs.core.async.put_BANG_.call(null,inst_10238__$1,inst_10138,done);
var state_10270__$1 = (function (){var statearr_10346 = state_10270;
(statearr_10346[(23)] = inst_10238__$1);

return statearr_10346;
})();
if(cljs.core.truth_(inst_10239)){
var statearr_10347_10406 = state_10270__$1;
(statearr_10347_10406[(1)] = (39));

} else {
var statearr_10348_10407 = state_10270__$1;
(statearr_10348_10407[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10271 === (8))){
var inst_10150 = (state_10270[(13)]);
var inst_10149 = (state_10270[(15)]);
var inst_10152 = (inst_10150 < inst_10149);
var inst_10153 = inst_10152;
var state_10270__$1 = state_10270;
if(cljs.core.truth_(inst_10153)){
var statearr_10349_10408 = state_10270__$1;
(statearr_10349_10408[(1)] = (10));

} else {
var statearr_10350_10409 = state_10270__$1;
(statearr_10350_10409[(1)] = (11));

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
});})(c__9536__auto___10355,cs,m,dchan,dctr,done))
;
return ((function (switch__9441__auto__,c__9536__auto___10355,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9442__auto__ = null;
var cljs$core$async$mult_$_state_machine__9442__auto____0 = (function (){
var statearr_10351 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10351[(0)] = cljs$core$async$mult_$_state_machine__9442__auto__);

(statearr_10351[(1)] = (1));

return statearr_10351;
});
var cljs$core$async$mult_$_state_machine__9442__auto____1 = (function (state_10270){
while(true){
var ret_value__9443__auto__ = (function (){try{while(true){
var result__9444__auto__ = switch__9441__auto__.call(null,state_10270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9444__auto__;
}
break;
}
}catch (e10352){if((e10352 instanceof Object)){
var ex__9445__auto__ = e10352;
var statearr_10353_10410 = state_10270;
(statearr_10353_10410[(5)] = ex__9445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10411 = state_10270;
state_10270 = G__10411;
continue;
} else {
return ret_value__9443__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9442__auto__ = function(state_10270){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9442__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9442__auto____1.call(this,state_10270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9442__auto____0;
cljs$core$async$mult_$_state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9442__auto____1;
return cljs$core$async$mult_$_state_machine__9442__auto__;
})()
;})(switch__9441__auto__,c__9536__auto___10355,cs,m,dchan,dctr,done))
})();
var state__9538__auto__ = (function (){var statearr_10354 = f__9537__auto__.call(null);
(statearr_10354[(6)] = c__9536__auto___10355);

return statearr_10354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9538__auto__);
});})(c__9536__auto___10355,cs,m,dchan,dctr,done))
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
var G__10413 = arguments.length;
switch (G__10413) {
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
var len__4641__auto___10425 = arguments.length;
var i__4642__auto___10426 = (0);
while(true){
if((i__4642__auto___10426 < len__4641__auto___10425)){
args__4647__auto__.push((arguments[i__4642__auto___10426]));

var G__10427 = (i__4642__auto___10426 + (1));
i__4642__auto___10426 = G__10427;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10419){
var map__10420 = p__10419;
var map__10420__$1 = (((((!((map__10420 == null))))?(((((map__10420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10420):map__10420);
var opts = map__10420__$1;
var statearr_10422_10428 = state;
(statearr_10422_10428[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__10420,map__10420__$1,opts){
return (function (val){
var statearr_10423_10429 = state;
(statearr_10423_10429[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10420,map__10420__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_10424_10430 = state;
(statearr_10424_10430[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10415){
var G__10416 = cljs.core.first.call(null,seq10415);
var seq10415__$1 = cljs.core.next.call(null,seq10415);
var G__10417 = cljs.core.first.call(null,seq10415__$1);
var seq10415__$2 = cljs.core.next.call(null,seq10415__$1);
var G__10418 = cljs.core.first.call(null,seq10415__$2);
var seq10415__$3 = cljs.core.next.call(null,seq10415__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10416,G__10417,G__10418,seq10415__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10431 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10431 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10432){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta10432 = meta10432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10433,meta10432__$1){
var self__ = this;
var _10433__$1 = this;
return (new cljs.core.async.t_cljs$core$async10431(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10432__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10431.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10433){
var self__ = this;
var _10433__$1 = this;
return self__.meta10432;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10431.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10431.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10431.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10431.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10431.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10431.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10431.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10431.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async10431.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta10432","meta10432",1963010635,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10431.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10431";

cljs.core.async.t_cljs$core$async10431.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async10431");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10431.
 */
cljs.core.async.__GT_t_cljs$core$async10431 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async10431(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10432){
return (new cljs.core.async.t_cljs$core$async10431(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10432));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async10431(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9536__auto___10595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9536__auto___10595,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9537__auto__ = (function (){var switch__9441__auto__ = ((function (c__9536__auto___10595,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10535){
var state_val_10536 = (state_10535[(1)]);
if((state_val_10536 === (7))){
var inst_10450 = (state_10535[(2)]);
var state_10535__$1 = state_10535;
var statearr_10537_10596 = state_10535__$1;
(statearr_10537_10596[(2)] = inst_10450);

(statearr_10537_10596[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (20))){
var inst_10462 = (state_10535[(7)]);
var state_10535__$1 = state_10535;
var statearr_10538_10597 = state_10535__$1;
(statearr_10538_10597[(2)] = inst_10462);

(statearr_10538_10597[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (27))){
var state_10535__$1 = state_10535;
var statearr_10539_10598 = state_10535__$1;
(statearr_10539_10598[(2)] = null);

(statearr_10539_10598[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (1))){
var inst_10437 = (state_10535[(8)]);
var inst_10437__$1 = calc_state.call(null);
var inst_10439 = (inst_10437__$1 == null);
var inst_10440 = cljs.core.not.call(null,inst_10439);
var state_10535__$1 = (function (){var statearr_10540 = state_10535;
(statearr_10540[(8)] = inst_10437__$1);

return statearr_10540;
})();
if(inst_10440){
var statearr_10541_10599 = state_10535__$1;
(statearr_10541_10599[(1)] = (2));

} else {
var statearr_10542_10600 = state_10535__$1;
(statearr_10542_10600[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (24))){
var inst_10509 = (state_10535[(9)]);
var inst_10495 = (state_10535[(10)]);
var inst_10486 = (state_10535[(11)]);
var inst_10509__$1 = inst_10486.call(null,inst_10495);
var state_10535__$1 = (function (){var statearr_10543 = state_10535;
(statearr_10543[(9)] = inst_10509__$1);

return statearr_10543;
})();
if(cljs.core.truth_(inst_10509__$1)){
var statearr_10544_10601 = state_10535__$1;
(statearr_10544_10601[(1)] = (29));

} else {
var statearr_10545_10602 = state_10535__$1;
(statearr_10545_10602[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (4))){
var inst_10453 = (state_10535[(2)]);
var state_10535__$1 = state_10535;
if(cljs.core.truth_(inst_10453)){
var statearr_10546_10603 = state_10535__$1;
(statearr_10546_10603[(1)] = (8));

} else {
var statearr_10547_10604 = state_10535__$1;
(statearr_10547_10604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (15))){
var inst_10480 = (state_10535[(2)]);
var state_10535__$1 = state_10535;
if(cljs.core.truth_(inst_10480)){
var statearr_10548_10605 = state_10535__$1;
(statearr_10548_10605[(1)] = (19));

} else {
var statearr_10549_10606 = state_10535__$1;
(statearr_10549_10606[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (21))){
var inst_10485 = (state_10535[(12)]);
var inst_10485__$1 = (state_10535[(2)]);
var inst_10486 = cljs.core.get.call(null,inst_10485__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10487 = cljs.core.get.call(null,inst_10485__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10488 = cljs.core.get.call(null,inst_10485__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_10535__$1 = (function (){var statearr_10550 = state_10535;
(statearr_10550[(13)] = inst_10487);

(statearr_10550[(12)] = inst_10485__$1);

(statearr_10550[(11)] = inst_10486);

return statearr_10550;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10535__$1,(22),inst_10488);
} else {
if((state_val_10536 === (31))){
var inst_10517 = (state_10535[(2)]);
var state_10535__$1 = state_10535;
if(cljs.core.truth_(inst_10517)){
var statearr_10551_10607 = state_10535__$1;
(statearr_10551_10607[(1)] = (32));

} else {
var statearr_10552_10608 = state_10535__$1;
(statearr_10552_10608[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (32))){
var inst_10494 = (state_10535[(14)]);
var state_10535__$1 = state_10535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10535__$1,(35),out,inst_10494);
} else {
if((state_val_10536 === (33))){
var inst_10485 = (state_10535[(12)]);
var inst_10462 = inst_10485;
var state_10535__$1 = (function (){var statearr_10553 = state_10535;
(statearr_10553[(7)] = inst_10462);

return statearr_10553;
})();
var statearr_10554_10609 = state_10535__$1;
(statearr_10554_10609[(2)] = null);

(statearr_10554_10609[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (13))){
var inst_10462 = (state_10535[(7)]);
var inst_10469 = inst_10462.cljs$lang$protocol_mask$partition0$;
var inst_10470 = (inst_10469 & (64));
var inst_10471 = inst_10462.cljs$core$ISeq$;
var inst_10472 = (cljs.core.PROTOCOL_SENTINEL === inst_10471);
var inst_10473 = ((inst_10470) || (inst_10472));
var state_10535__$1 = state_10535;
if(cljs.core.truth_(inst_10473)){
var statearr_10555_10610 = state_10535__$1;
(statearr_10555_10610[(1)] = (16));

} else {
var statearr_10556_10611 = state_10535__$1;
(statearr_10556_10611[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (22))){
var inst_10494 = (state_10535[(14)]);
var inst_10495 = (state_10535[(10)]);
var inst_10493 = (state_10535[(2)]);
var inst_10494__$1 = cljs.core.nth.call(null,inst_10493,(0),null);
var inst_10495__$1 = cljs.core.nth.call(null,inst_10493,(1),null);
var inst_10496 = (inst_10494__$1 == null);
var inst_10497 = cljs.core._EQ_.call(null,inst_10495__$1,change);
var inst_10498 = ((inst_10496) || (inst_10497));
var state_10535__$1 = (function (){var statearr_10557 = state_10535;
(statearr_10557[(14)] = inst_10494__$1);

(statearr_10557[(10)] = inst_10495__$1);

return statearr_10557;
})();
if(cljs.core.truth_(inst_10498)){
var statearr_10558_10612 = state_10535__$1;
(statearr_10558_10612[(1)] = (23));

} else {
var statearr_10559_10613 = state_10535__$1;
(statearr_10559_10613[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (36))){
var inst_10485 = (state_10535[(12)]);
var inst_10462 = inst_10485;
var state_10535__$1 = (function (){var statearr_10560 = state_10535;
(statearr_10560[(7)] = inst_10462);

return statearr_10560;
})();
var statearr_10561_10614 = state_10535__$1;
(statearr_10561_10614[(2)] = null);

(statearr_10561_10614[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (29))){
var inst_10509 = (state_10535[(9)]);
var state_10535__$1 = state_10535;
var statearr_10562_10615 = state_10535__$1;
(statearr_10562_10615[(2)] = inst_10509);

(statearr_10562_10615[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (6))){
var state_10535__$1 = state_10535;
var statearr_10563_10616 = state_10535__$1;
(statearr_10563_10616[(2)] = false);

(statearr_10563_10616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (28))){
var inst_10505 = (state_10535[(2)]);
var inst_10506 = calc_state.call(null);
var inst_10462 = inst_10506;
var state_10535__$1 = (function (){var statearr_10564 = state_10535;
(statearr_10564[(7)] = inst_10462);

(statearr_10564[(15)] = inst_10505);

return statearr_10564;
})();
var statearr_10565_10617 = state_10535__$1;
(statearr_10565_10617[(2)] = null);

(statearr_10565_10617[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (25))){
var inst_10531 = (state_10535[(2)]);
var state_10535__$1 = state_10535;
var statearr_10566_10618 = state_10535__$1;
(statearr_10566_10618[(2)] = inst_10531);

(statearr_10566_10618[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (34))){
var inst_10529 = (state_10535[(2)]);
var state_10535__$1 = state_10535;
var statearr_10567_10619 = state_10535__$1;
(statearr_10567_10619[(2)] = inst_10529);

(statearr_10567_10619[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (17))){
var state_10535__$1 = state_10535;
var statearr_10568_10620 = state_10535__$1;
(statearr_10568_10620[(2)] = false);

(statearr_10568_10620[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (3))){
var state_10535__$1 = state_10535;
var statearr_10569_10621 = state_10535__$1;
(statearr_10569_10621[(2)] = false);

(statearr_10569_10621[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (12))){
var inst_10533 = (state_10535[(2)]);
var state_10535__$1 = state_10535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10535__$1,inst_10533);
} else {
if((state_val_10536 === (2))){
var inst_10437 = (state_10535[(8)]);
var inst_10442 = inst_10437.cljs$lang$protocol_mask$partition0$;
var inst_10443 = (inst_10442 & (64));
var inst_10444 = inst_10437.cljs$core$ISeq$;
var inst_10445 = (cljs.core.PROTOCOL_SENTINEL === inst_10444);
var inst_10446 = ((inst_10443) || (inst_10445));
var state_10535__$1 = state_10535;
if(cljs.core.truth_(inst_10446)){
var statearr_10570_10622 = state_10535__$1;
(statearr_10570_10622[(1)] = (5));

} else {
var statearr_10571_10623 = state_10535__$1;
(statearr_10571_10623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (23))){
var inst_10494 = (state_10535[(14)]);
var inst_10500 = (inst_10494 == null);
var state_10535__$1 = state_10535;
if(cljs.core.truth_(inst_10500)){
var statearr_10572_10624 = state_10535__$1;
(statearr_10572_10624[(1)] = (26));

} else {
var statearr_10573_10625 = state_10535__$1;
(statearr_10573_10625[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (35))){
var inst_10520 = (state_10535[(2)]);
var state_10535__$1 = state_10535;
if(cljs.core.truth_(inst_10520)){
var statearr_10574_10626 = state_10535__$1;
(statearr_10574_10626[(1)] = (36));

} else {
var statearr_10575_10627 = state_10535__$1;
(statearr_10575_10627[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (19))){
var inst_10462 = (state_10535[(7)]);
var inst_10482 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10462);
var state_10535__$1 = state_10535;
var statearr_10576_10628 = state_10535__$1;
(statearr_10576_10628[(2)] = inst_10482);

(statearr_10576_10628[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (11))){
var inst_10462 = (state_10535[(7)]);
var inst_10466 = (inst_10462 == null);
var inst_10467 = cljs.core.not.call(null,inst_10466);
var state_10535__$1 = state_10535;
if(inst_10467){
var statearr_10577_10629 = state_10535__$1;
(statearr_10577_10629[(1)] = (13));

} else {
var statearr_10578_10630 = state_10535__$1;
(statearr_10578_10630[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (9))){
var inst_10437 = (state_10535[(8)]);
var state_10535__$1 = state_10535;
var statearr_10579_10631 = state_10535__$1;
(statearr_10579_10631[(2)] = inst_10437);

(statearr_10579_10631[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (5))){
var state_10535__$1 = state_10535;
var statearr_10580_10632 = state_10535__$1;
(statearr_10580_10632[(2)] = true);

(statearr_10580_10632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (14))){
var state_10535__$1 = state_10535;
var statearr_10581_10633 = state_10535__$1;
(statearr_10581_10633[(2)] = false);

(statearr_10581_10633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (26))){
var inst_10495 = (state_10535[(10)]);
var inst_10502 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10495);
var state_10535__$1 = state_10535;
var statearr_10582_10634 = state_10535__$1;
(statearr_10582_10634[(2)] = inst_10502);

(statearr_10582_10634[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (16))){
var state_10535__$1 = state_10535;
var statearr_10583_10635 = state_10535__$1;
(statearr_10583_10635[(2)] = true);

(statearr_10583_10635[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (38))){
var inst_10525 = (state_10535[(2)]);
var state_10535__$1 = state_10535;
var statearr_10584_10636 = state_10535__$1;
(statearr_10584_10636[(2)] = inst_10525);

(statearr_10584_10636[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (30))){
var inst_10495 = (state_10535[(10)]);
var inst_10487 = (state_10535[(13)]);
var inst_10486 = (state_10535[(11)]);
var inst_10512 = cljs.core.empty_QMARK_.call(null,inst_10486);
var inst_10513 = inst_10487.call(null,inst_10495);
var inst_10514 = cljs.core.not.call(null,inst_10513);
var inst_10515 = ((inst_10512) && (inst_10514));
var state_10535__$1 = state_10535;
var statearr_10585_10637 = state_10535__$1;
(statearr_10585_10637[(2)] = inst_10515);

(statearr_10585_10637[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (10))){
var inst_10437 = (state_10535[(8)]);
var inst_10458 = (state_10535[(2)]);
var inst_10459 = cljs.core.get.call(null,inst_10458,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10460 = cljs.core.get.call(null,inst_10458,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10461 = cljs.core.get.call(null,inst_10458,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10462 = inst_10437;
var state_10535__$1 = (function (){var statearr_10586 = state_10535;
(statearr_10586[(7)] = inst_10462);

(statearr_10586[(16)] = inst_10459);

(statearr_10586[(17)] = inst_10460);

(statearr_10586[(18)] = inst_10461);

return statearr_10586;
})();
var statearr_10587_10638 = state_10535__$1;
(statearr_10587_10638[(2)] = null);

(statearr_10587_10638[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (18))){
var inst_10477 = (state_10535[(2)]);
var state_10535__$1 = state_10535;
var statearr_10588_10639 = state_10535__$1;
(statearr_10588_10639[(2)] = inst_10477);

(statearr_10588_10639[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (37))){
var state_10535__$1 = state_10535;
var statearr_10589_10640 = state_10535__$1;
(statearr_10589_10640[(2)] = null);

(statearr_10589_10640[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (8))){
var inst_10437 = (state_10535[(8)]);
var inst_10455 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10437);
var state_10535__$1 = state_10535;
var statearr_10590_10641 = state_10535__$1;
(statearr_10590_10641[(2)] = inst_10455);

(statearr_10590_10641[(1)] = (10));


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
});})(c__9536__auto___10595,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9441__auto__,c__9536__auto___10595,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9442__auto__ = null;
var cljs$core$async$mix_$_state_machine__9442__auto____0 = (function (){
var statearr_10591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10591[(0)] = cljs$core$async$mix_$_state_machine__9442__auto__);

(statearr_10591[(1)] = (1));

return statearr_10591;
});
var cljs$core$async$mix_$_state_machine__9442__auto____1 = (function (state_10535){
while(true){
var ret_value__9443__auto__ = (function (){try{while(true){
var result__9444__auto__ = switch__9441__auto__.call(null,state_10535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9444__auto__;
}
break;
}
}catch (e10592){if((e10592 instanceof Object)){
var ex__9445__auto__ = e10592;
var statearr_10593_10642 = state_10535;
(statearr_10593_10642[(5)] = ex__9445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10643 = state_10535;
state_10535 = G__10643;
continue;
} else {
return ret_value__9443__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9442__auto__ = function(state_10535){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9442__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9442__auto____1.call(this,state_10535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9442__auto____0;
cljs$core$async$mix_$_state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9442__auto____1;
return cljs$core$async$mix_$_state_machine__9442__auto__;
})()
;})(switch__9441__auto__,c__9536__auto___10595,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9538__auto__ = (function (){var statearr_10594 = f__9537__auto__.call(null);
(statearr_10594[(6)] = c__9536__auto___10595);

return statearr_10594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9538__auto__);
});})(c__9536__auto___10595,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__10645 = arguments.length;
switch (G__10645) {
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
var G__10649 = arguments.length;
switch (G__10649) {
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
return (function (p1__10647_SHARP_){
if(cljs.core.truth_(p1__10647_SHARP_.call(null,topic))){
return p1__10647_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__10647_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10650 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10650 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta10651){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta10651 = meta10651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10652,meta10651__$1){
var self__ = this;
var _10652__$1 = this;
return (new cljs.core.async.t_cljs$core$async10650(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta10651__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10650.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10652){
var self__ = this;
var _10652__$1 = this;
return self__.meta10651;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10650.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10650.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10650.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10650.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10650.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async10650.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10650.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10650.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta10651","meta10651",677162781,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10650.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10650";

cljs.core.async.t_cljs$core$async10650.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async10650");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10650.
 */
cljs.core.async.__GT_t_cljs$core$async10650 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async10650(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10651){
return (new cljs.core.async.t_cljs$core$async10650(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10651));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async10650(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9536__auto___10770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9536__auto___10770,mults,ensure_mult,p){
return (function (){
var f__9537__auto__ = (function (){var switch__9441__auto__ = ((function (c__9536__auto___10770,mults,ensure_mult,p){
return (function (state_10724){
var state_val_10725 = (state_10724[(1)]);
if((state_val_10725 === (7))){
var inst_10720 = (state_10724[(2)]);
var state_10724__$1 = state_10724;
var statearr_10726_10771 = state_10724__$1;
(statearr_10726_10771[(2)] = inst_10720);

(statearr_10726_10771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10725 === (20))){
var state_10724__$1 = state_10724;
var statearr_10727_10772 = state_10724__$1;
(statearr_10727_10772[(2)] = null);

(statearr_10727_10772[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10725 === (1))){
var state_10724__$1 = state_10724;
var statearr_10728_10773 = state_10724__$1;
(statearr_10728_10773[(2)] = null);

(statearr_10728_10773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10725 === (24))){
var inst_10703 = (state_10724[(7)]);
var inst_10712 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10703);
var state_10724__$1 = state_10724;
var statearr_10729_10774 = state_10724__$1;
(statearr_10729_10774[(2)] = inst_10712);

(statearr_10729_10774[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10725 === (4))){
var inst_10655 = (state_10724[(8)]);
var inst_10655__$1 = (state_10724[(2)]);
var inst_10656 = (inst_10655__$1 == null);
var state_10724__$1 = (function (){var statearr_10730 = state_10724;
(statearr_10730[(8)] = inst_10655__$1);

return statearr_10730;
})();
if(cljs.core.truth_(inst_10656)){
var statearr_10731_10775 = state_10724__$1;
(statearr_10731_10775[(1)] = (5));

} else {
var statearr_10732_10776 = state_10724__$1;
(statearr_10732_10776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10725 === (15))){
var inst_10697 = (state_10724[(2)]);
var state_10724__$1 = state_10724;
var statearr_10733_10777 = state_10724__$1;
(statearr_10733_10777[(2)] = inst_10697);

(statearr_10733_10777[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10725 === (21))){
var inst_10717 = (state_10724[(2)]);
var state_10724__$1 = (function (){var statearr_10734 = state_10724;
(statearr_10734[(9)] = inst_10717);

return statearr_10734;
})();
var statearr_10735_10778 = state_10724__$1;
(statearr_10735_10778[(2)] = null);

(statearr_10735_10778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10725 === (13))){
var inst_10679 = (state_10724[(10)]);
var inst_10681 = cljs.core.chunked_seq_QMARK_.call(null,inst_10679);
var state_10724__$1 = state_10724;
if(inst_10681){
var statearr_10736_10779 = state_10724__$1;
(statearr_10736_10779[(1)] = (16));

} else {
var statearr_10737_10780 = state_10724__$1;
(statearr_10737_10780[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10725 === (22))){
var inst_10709 = (state_10724[(2)]);
var state_10724__$1 = state_10724;
if(cljs.core.truth_(inst_10709)){
var statearr_10738_10781 = state_10724__$1;
(statearr_10738_10781[(1)] = (23));

} else {
var statearr_10739_10782 = state_10724__$1;
(statearr_10739_10782[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10725 === (6))){
var inst_10655 = (state_10724[(8)]);
var inst_10705 = (state_10724[(11)]);
var inst_10703 = (state_10724[(7)]);
var inst_10703__$1 = topic_fn.call(null,inst_10655);
var inst_10704 = cljs.core.deref.call(null,mults);
var inst_10705__$1 = cljs.core.get.call(null,inst_10704,inst_10703__$1);
var state_10724__$1 = (function (){var statearr_10740 = state_10724;
(statearr_10740[(11)] = inst_10705__$1);

(statearr_10740[(7)] = inst_10703__$1);

return statearr_10740;
})();
if(cljs.core.truth_(inst_10705__$1)){
var statearr_10741_10783 = state_10724__$1;
(statearr_10741_10783[(1)] = (19));

} else {
var statearr_10742_10784 = state_10724__$1;
(statearr_10742_10784[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10725 === (25))){
var inst_10714 = (state_10724[(2)]);
var state_10724__$1 = state_10724;
var statearr_10743_10785 = state_10724__$1;
(statearr_10743_10785[(2)] = inst_10714);

(statearr_10743_10785[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10725 === (17))){
var inst_10679 = (state_10724[(10)]);
var inst_10688 = cljs.core.first.call(null,inst_10679);
var inst_10689 = cljs.core.async.muxch_STAR_.call(null,inst_10688);
var inst_10690 = cljs.core.async.close_BANG_.call(null,inst_10689);
var inst_10691 = cljs.core.next.call(null,inst_10679);
var inst_10665 = inst_10691;
var inst_10666 = null;
var inst_10667 = (0);
var inst_10668 = (0);
var state_10724__$1 = (function (){var statearr_10744 = state_10724;
(statearr_10744[(12)] = inst_10665);

(statearr_10744[(13)] = inst_10667);

(statearr_10744[(14)] = inst_10666);

(statearr_10744[(15)] = inst_10668);

(statearr_10744[(16)] = inst_10690);

return statearr_10744;
})();
var statearr_10745_10786 = state_10724__$1;
(statearr_10745_10786[(2)] = null);

(statearr_10745_10786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10725 === (3))){
var inst_10722 = (state_10724[(2)]);
var state_10724__$1 = state_10724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10724__$1,inst_10722);
} else {
if((state_val_10725 === (12))){
var inst_10699 = (state_10724[(2)]);
var state_10724__$1 = state_10724;
var statearr_10746_10787 = state_10724__$1;
(statearr_10746_10787[(2)] = inst_10699);

(statearr_10746_10787[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10725 === (2))){
var state_10724__$1 = state_10724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10724__$1,(4),ch);
} else {
if((state_val_10725 === (23))){
var state_10724__$1 = state_10724;
var statearr_10747_10788 = state_10724__$1;
(statearr_10747_10788[(2)] = null);

(statearr_10747_10788[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10725 === (19))){
var inst_10655 = (state_10724[(8)]);
var inst_10705 = (state_10724[(11)]);
var inst_10707 = cljs.core.async.muxch_STAR_.call(null,inst_10705);
var state_10724__$1 = state_10724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10724__$1,(22),inst_10707,inst_10655);
} else {
if((state_val_10725 === (11))){
var inst_10679 = (state_10724[(10)]);
var inst_10665 = (state_10724[(12)]);
var inst_10679__$1 = cljs.core.seq.call(null,inst_10665);
var state_10724__$1 = (function (){var statearr_10748 = state_10724;
(statearr_10748[(10)] = inst_10679__$1);

return statearr_10748;
})();
if(inst_10679__$1){
var statearr_10749_10789 = state_10724__$1;
(statearr_10749_10789[(1)] = (13));

} else {
var statearr_10750_10790 = state_10724__$1;
(statearr_10750_10790[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10725 === (9))){
var inst_10701 = (state_10724[(2)]);
var state_10724__$1 = state_10724;
var statearr_10751_10791 = state_10724__$1;
(statearr_10751_10791[(2)] = inst_10701);

(statearr_10751_10791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10725 === (5))){
var inst_10662 = cljs.core.deref.call(null,mults);
var inst_10663 = cljs.core.vals.call(null,inst_10662);
var inst_10664 = cljs.core.seq.call(null,inst_10663);
var inst_10665 = inst_10664;
var inst_10666 = null;
var inst_10667 = (0);
var inst_10668 = (0);
var state_10724__$1 = (function (){var statearr_10752 = state_10724;
(statearr_10752[(12)] = inst_10665);

(statearr_10752[(13)] = inst_10667);

(statearr_10752[(14)] = inst_10666);

(statearr_10752[(15)] = inst_10668);

return statearr_10752;
})();
var statearr_10753_10792 = state_10724__$1;
(statearr_10753_10792[(2)] = null);

(statearr_10753_10792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10725 === (14))){
var state_10724__$1 = state_10724;
var statearr_10757_10793 = state_10724__$1;
(statearr_10757_10793[(2)] = null);

(statearr_10757_10793[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10725 === (16))){
var inst_10679 = (state_10724[(10)]);
var inst_10683 = cljs.core.chunk_first.call(null,inst_10679);
var inst_10684 = cljs.core.chunk_rest.call(null,inst_10679);
var inst_10685 = cljs.core.count.call(null,inst_10683);
var inst_10665 = inst_10684;
var inst_10666 = inst_10683;
var inst_10667 = inst_10685;
var inst_10668 = (0);
var state_10724__$1 = (function (){var statearr_10758 = state_10724;
(statearr_10758[(12)] = inst_10665);

(statearr_10758[(13)] = inst_10667);

(statearr_10758[(14)] = inst_10666);

(statearr_10758[(15)] = inst_10668);

return statearr_10758;
})();
var statearr_10759_10794 = state_10724__$1;
(statearr_10759_10794[(2)] = null);

(statearr_10759_10794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10725 === (10))){
var inst_10665 = (state_10724[(12)]);
var inst_10667 = (state_10724[(13)]);
var inst_10666 = (state_10724[(14)]);
var inst_10668 = (state_10724[(15)]);
var inst_10673 = cljs.core._nth.call(null,inst_10666,inst_10668);
var inst_10674 = cljs.core.async.muxch_STAR_.call(null,inst_10673);
var inst_10675 = cljs.core.async.close_BANG_.call(null,inst_10674);
var inst_10676 = (inst_10668 + (1));
var tmp10754 = inst_10665;
var tmp10755 = inst_10667;
var tmp10756 = inst_10666;
var inst_10665__$1 = tmp10754;
var inst_10666__$1 = tmp10756;
var inst_10667__$1 = tmp10755;
var inst_10668__$1 = inst_10676;
var state_10724__$1 = (function (){var statearr_10760 = state_10724;
(statearr_10760[(12)] = inst_10665__$1);

(statearr_10760[(13)] = inst_10667__$1);

(statearr_10760[(14)] = inst_10666__$1);

(statearr_10760[(15)] = inst_10668__$1);

(statearr_10760[(17)] = inst_10675);

return statearr_10760;
})();
var statearr_10761_10795 = state_10724__$1;
(statearr_10761_10795[(2)] = null);

(statearr_10761_10795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10725 === (18))){
var inst_10694 = (state_10724[(2)]);
var state_10724__$1 = state_10724;
var statearr_10762_10796 = state_10724__$1;
(statearr_10762_10796[(2)] = inst_10694);

(statearr_10762_10796[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10725 === (8))){
var inst_10667 = (state_10724[(13)]);
var inst_10668 = (state_10724[(15)]);
var inst_10670 = (inst_10668 < inst_10667);
var inst_10671 = inst_10670;
var state_10724__$1 = state_10724;
if(cljs.core.truth_(inst_10671)){
var statearr_10763_10797 = state_10724__$1;
(statearr_10763_10797[(1)] = (10));

} else {
var statearr_10764_10798 = state_10724__$1;
(statearr_10764_10798[(1)] = (11));

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
});})(c__9536__auto___10770,mults,ensure_mult,p))
;
return ((function (switch__9441__auto__,c__9536__auto___10770,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9442__auto__ = null;
var cljs$core$async$state_machine__9442__auto____0 = (function (){
var statearr_10765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10765[(0)] = cljs$core$async$state_machine__9442__auto__);

(statearr_10765[(1)] = (1));

return statearr_10765;
});
var cljs$core$async$state_machine__9442__auto____1 = (function (state_10724){
while(true){
var ret_value__9443__auto__ = (function (){try{while(true){
var result__9444__auto__ = switch__9441__auto__.call(null,state_10724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9444__auto__;
}
break;
}
}catch (e10766){if((e10766 instanceof Object)){
var ex__9445__auto__ = e10766;
var statearr_10767_10799 = state_10724;
(statearr_10767_10799[(5)] = ex__9445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10800 = state_10724;
state_10724 = G__10800;
continue;
} else {
return ret_value__9443__auto__;
}
break;
}
});
cljs$core$async$state_machine__9442__auto__ = function(state_10724){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9442__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9442__auto____1.call(this,state_10724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9442__auto____0;
cljs$core$async$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9442__auto____1;
return cljs$core$async$state_machine__9442__auto__;
})()
;})(switch__9441__auto__,c__9536__auto___10770,mults,ensure_mult,p))
})();
var state__9538__auto__ = (function (){var statearr_10768 = f__9537__auto__.call(null);
(statearr_10768[(6)] = c__9536__auto___10770);

return statearr_10768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9538__auto__);
});})(c__9536__auto___10770,mults,ensure_mult,p))
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
var G__10802 = arguments.length;
switch (G__10802) {
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
var G__10805 = arguments.length;
switch (G__10805) {
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
var G__10808 = arguments.length;
switch (G__10808) {
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
var c__9536__auto___10875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9536__auto___10875,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9537__auto__ = (function (){var switch__9441__auto__ = ((function (c__9536__auto___10875,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_10847){
var state_val_10848 = (state_10847[(1)]);
if((state_val_10848 === (7))){
var state_10847__$1 = state_10847;
var statearr_10849_10876 = state_10847__$1;
(statearr_10849_10876[(2)] = null);

(statearr_10849_10876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10848 === (1))){
var state_10847__$1 = state_10847;
var statearr_10850_10877 = state_10847__$1;
(statearr_10850_10877[(2)] = null);

(statearr_10850_10877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10848 === (4))){
var inst_10811 = (state_10847[(7)]);
var inst_10813 = (inst_10811 < cnt);
var state_10847__$1 = state_10847;
if(cljs.core.truth_(inst_10813)){
var statearr_10851_10878 = state_10847__$1;
(statearr_10851_10878[(1)] = (6));

} else {
var statearr_10852_10879 = state_10847__$1;
(statearr_10852_10879[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10848 === (15))){
var inst_10843 = (state_10847[(2)]);
var state_10847__$1 = state_10847;
var statearr_10853_10880 = state_10847__$1;
(statearr_10853_10880[(2)] = inst_10843);

(statearr_10853_10880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10848 === (13))){
var inst_10836 = cljs.core.async.close_BANG_.call(null,out);
var state_10847__$1 = state_10847;
var statearr_10854_10881 = state_10847__$1;
(statearr_10854_10881[(2)] = inst_10836);

(statearr_10854_10881[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10848 === (6))){
var state_10847__$1 = state_10847;
var statearr_10855_10882 = state_10847__$1;
(statearr_10855_10882[(2)] = null);

(statearr_10855_10882[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10848 === (3))){
var inst_10845 = (state_10847[(2)]);
var state_10847__$1 = state_10847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10847__$1,inst_10845);
} else {
if((state_val_10848 === (12))){
var inst_10833 = (state_10847[(8)]);
var inst_10833__$1 = (state_10847[(2)]);
var inst_10834 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_10833__$1);
var state_10847__$1 = (function (){var statearr_10856 = state_10847;
(statearr_10856[(8)] = inst_10833__$1);

return statearr_10856;
})();
if(cljs.core.truth_(inst_10834)){
var statearr_10857_10883 = state_10847__$1;
(statearr_10857_10883[(1)] = (13));

} else {
var statearr_10858_10884 = state_10847__$1;
(statearr_10858_10884[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10848 === (2))){
var inst_10810 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_10811 = (0);
var state_10847__$1 = (function (){var statearr_10859 = state_10847;
(statearr_10859[(9)] = inst_10810);

(statearr_10859[(7)] = inst_10811);

return statearr_10859;
})();
var statearr_10860_10885 = state_10847__$1;
(statearr_10860_10885[(2)] = null);

(statearr_10860_10885[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10848 === (11))){
var inst_10811 = (state_10847[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10847,(10),Object,null,(9));
var inst_10820 = chs__$1.call(null,inst_10811);
var inst_10821 = done.call(null,inst_10811);
var inst_10822 = cljs.core.async.take_BANG_.call(null,inst_10820,inst_10821);
var state_10847__$1 = state_10847;
var statearr_10861_10886 = state_10847__$1;
(statearr_10861_10886[(2)] = inst_10822);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10847__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10848 === (9))){
var inst_10811 = (state_10847[(7)]);
var inst_10824 = (state_10847[(2)]);
var inst_10825 = (inst_10811 + (1));
var inst_10811__$1 = inst_10825;
var state_10847__$1 = (function (){var statearr_10862 = state_10847;
(statearr_10862[(10)] = inst_10824);

(statearr_10862[(7)] = inst_10811__$1);

return statearr_10862;
})();
var statearr_10863_10887 = state_10847__$1;
(statearr_10863_10887[(2)] = null);

(statearr_10863_10887[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10848 === (5))){
var inst_10831 = (state_10847[(2)]);
var state_10847__$1 = (function (){var statearr_10864 = state_10847;
(statearr_10864[(11)] = inst_10831);

return statearr_10864;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10847__$1,(12),dchan);
} else {
if((state_val_10848 === (14))){
var inst_10833 = (state_10847[(8)]);
var inst_10838 = cljs.core.apply.call(null,f,inst_10833);
var state_10847__$1 = state_10847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10847__$1,(16),out,inst_10838);
} else {
if((state_val_10848 === (16))){
var inst_10840 = (state_10847[(2)]);
var state_10847__$1 = (function (){var statearr_10865 = state_10847;
(statearr_10865[(12)] = inst_10840);

return statearr_10865;
})();
var statearr_10866_10888 = state_10847__$1;
(statearr_10866_10888[(2)] = null);

(statearr_10866_10888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10848 === (10))){
var inst_10815 = (state_10847[(2)]);
var inst_10816 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_10847__$1 = (function (){var statearr_10867 = state_10847;
(statearr_10867[(13)] = inst_10815);

return statearr_10867;
})();
var statearr_10868_10889 = state_10847__$1;
(statearr_10868_10889[(2)] = inst_10816);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10847__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10848 === (8))){
var inst_10829 = (state_10847[(2)]);
var state_10847__$1 = state_10847;
var statearr_10869_10890 = state_10847__$1;
(statearr_10869_10890[(2)] = inst_10829);

(statearr_10869_10890[(1)] = (5));


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
});})(c__9536__auto___10875,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9441__auto__,c__9536__auto___10875,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9442__auto__ = null;
var cljs$core$async$state_machine__9442__auto____0 = (function (){
var statearr_10870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10870[(0)] = cljs$core$async$state_machine__9442__auto__);

(statearr_10870[(1)] = (1));

return statearr_10870;
});
var cljs$core$async$state_machine__9442__auto____1 = (function (state_10847){
while(true){
var ret_value__9443__auto__ = (function (){try{while(true){
var result__9444__auto__ = switch__9441__auto__.call(null,state_10847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9444__auto__;
}
break;
}
}catch (e10871){if((e10871 instanceof Object)){
var ex__9445__auto__ = e10871;
var statearr_10872_10891 = state_10847;
(statearr_10872_10891[(5)] = ex__9445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10892 = state_10847;
state_10847 = G__10892;
continue;
} else {
return ret_value__9443__auto__;
}
break;
}
});
cljs$core$async$state_machine__9442__auto__ = function(state_10847){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9442__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9442__auto____1.call(this,state_10847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9442__auto____0;
cljs$core$async$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9442__auto____1;
return cljs$core$async$state_machine__9442__auto__;
})()
;})(switch__9441__auto__,c__9536__auto___10875,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9538__auto__ = (function (){var statearr_10873 = f__9537__auto__.call(null);
(statearr_10873[(6)] = c__9536__auto___10875);

return statearr_10873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9538__auto__);
});})(c__9536__auto___10875,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__10895 = arguments.length;
switch (G__10895) {
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
var c__9536__auto___10949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9536__auto___10949,out){
return (function (){
var f__9537__auto__ = (function (){var switch__9441__auto__ = ((function (c__9536__auto___10949,out){
return (function (state_10927){
var state_val_10928 = (state_10927[(1)]);
if((state_val_10928 === (7))){
var inst_10906 = (state_10927[(7)]);
var inst_10907 = (state_10927[(8)]);
var inst_10906__$1 = (state_10927[(2)]);
var inst_10907__$1 = cljs.core.nth.call(null,inst_10906__$1,(0),null);
var inst_10908 = cljs.core.nth.call(null,inst_10906__$1,(1),null);
var inst_10909 = (inst_10907__$1 == null);
var state_10927__$1 = (function (){var statearr_10929 = state_10927;
(statearr_10929[(7)] = inst_10906__$1);

(statearr_10929[(8)] = inst_10907__$1);

(statearr_10929[(9)] = inst_10908);

return statearr_10929;
})();
if(cljs.core.truth_(inst_10909)){
var statearr_10930_10950 = state_10927__$1;
(statearr_10930_10950[(1)] = (8));

} else {
var statearr_10931_10951 = state_10927__$1;
(statearr_10931_10951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10928 === (1))){
var inst_10896 = cljs.core.vec.call(null,chs);
var inst_10897 = inst_10896;
var state_10927__$1 = (function (){var statearr_10932 = state_10927;
(statearr_10932[(10)] = inst_10897);

return statearr_10932;
})();
var statearr_10933_10952 = state_10927__$1;
(statearr_10933_10952[(2)] = null);

(statearr_10933_10952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10928 === (4))){
var inst_10897 = (state_10927[(10)]);
var state_10927__$1 = state_10927;
return cljs.core.async.ioc_alts_BANG_.call(null,state_10927__$1,(7),inst_10897);
} else {
if((state_val_10928 === (6))){
var inst_10923 = (state_10927[(2)]);
var state_10927__$1 = state_10927;
var statearr_10934_10953 = state_10927__$1;
(statearr_10934_10953[(2)] = inst_10923);

(statearr_10934_10953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10928 === (3))){
var inst_10925 = (state_10927[(2)]);
var state_10927__$1 = state_10927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10927__$1,inst_10925);
} else {
if((state_val_10928 === (2))){
var inst_10897 = (state_10927[(10)]);
var inst_10899 = cljs.core.count.call(null,inst_10897);
var inst_10900 = (inst_10899 > (0));
var state_10927__$1 = state_10927;
if(cljs.core.truth_(inst_10900)){
var statearr_10936_10954 = state_10927__$1;
(statearr_10936_10954[(1)] = (4));

} else {
var statearr_10937_10955 = state_10927__$1;
(statearr_10937_10955[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10928 === (11))){
var inst_10897 = (state_10927[(10)]);
var inst_10916 = (state_10927[(2)]);
var tmp10935 = inst_10897;
var inst_10897__$1 = tmp10935;
var state_10927__$1 = (function (){var statearr_10938 = state_10927;
(statearr_10938[(11)] = inst_10916);

(statearr_10938[(10)] = inst_10897__$1);

return statearr_10938;
})();
var statearr_10939_10956 = state_10927__$1;
(statearr_10939_10956[(2)] = null);

(statearr_10939_10956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10928 === (9))){
var inst_10907 = (state_10927[(8)]);
var state_10927__$1 = state_10927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10927__$1,(11),out,inst_10907);
} else {
if((state_val_10928 === (5))){
var inst_10921 = cljs.core.async.close_BANG_.call(null,out);
var state_10927__$1 = state_10927;
var statearr_10940_10957 = state_10927__$1;
(statearr_10940_10957[(2)] = inst_10921);

(statearr_10940_10957[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10928 === (10))){
var inst_10919 = (state_10927[(2)]);
var state_10927__$1 = state_10927;
var statearr_10941_10958 = state_10927__$1;
(statearr_10941_10958[(2)] = inst_10919);

(statearr_10941_10958[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10928 === (8))){
var inst_10906 = (state_10927[(7)]);
var inst_10907 = (state_10927[(8)]);
var inst_10908 = (state_10927[(9)]);
var inst_10897 = (state_10927[(10)]);
var inst_10911 = (function (){var cs = inst_10897;
var vec__10902 = inst_10906;
var v = inst_10907;
var c = inst_10908;
return ((function (cs,vec__10902,v,c,inst_10906,inst_10907,inst_10908,inst_10897,state_val_10928,c__9536__auto___10949,out){
return (function (p1__10893_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__10893_SHARP_);
});
;})(cs,vec__10902,v,c,inst_10906,inst_10907,inst_10908,inst_10897,state_val_10928,c__9536__auto___10949,out))
})();
var inst_10912 = cljs.core.filterv.call(null,inst_10911,inst_10897);
var inst_10897__$1 = inst_10912;
var state_10927__$1 = (function (){var statearr_10942 = state_10927;
(statearr_10942[(10)] = inst_10897__$1);

return statearr_10942;
})();
var statearr_10943_10959 = state_10927__$1;
(statearr_10943_10959[(2)] = null);

(statearr_10943_10959[(1)] = (2));


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
});})(c__9536__auto___10949,out))
;
return ((function (switch__9441__auto__,c__9536__auto___10949,out){
return (function() {
var cljs$core$async$state_machine__9442__auto__ = null;
var cljs$core$async$state_machine__9442__auto____0 = (function (){
var statearr_10944 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10944[(0)] = cljs$core$async$state_machine__9442__auto__);

(statearr_10944[(1)] = (1));

return statearr_10944;
});
var cljs$core$async$state_machine__9442__auto____1 = (function (state_10927){
while(true){
var ret_value__9443__auto__ = (function (){try{while(true){
var result__9444__auto__ = switch__9441__auto__.call(null,state_10927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9444__auto__;
}
break;
}
}catch (e10945){if((e10945 instanceof Object)){
var ex__9445__auto__ = e10945;
var statearr_10946_10960 = state_10927;
(statearr_10946_10960[(5)] = ex__9445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10961 = state_10927;
state_10927 = G__10961;
continue;
} else {
return ret_value__9443__auto__;
}
break;
}
});
cljs$core$async$state_machine__9442__auto__ = function(state_10927){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9442__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9442__auto____1.call(this,state_10927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9442__auto____0;
cljs$core$async$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9442__auto____1;
return cljs$core$async$state_machine__9442__auto__;
})()
;})(switch__9441__auto__,c__9536__auto___10949,out))
})();
var state__9538__auto__ = (function (){var statearr_10947 = f__9537__auto__.call(null);
(statearr_10947[(6)] = c__9536__auto___10949);

return statearr_10947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9538__auto__);
});})(c__9536__auto___10949,out))
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
var G__10963 = arguments.length;
switch (G__10963) {
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
var c__9536__auto___11008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9536__auto___11008,out){
return (function (){
var f__9537__auto__ = (function (){var switch__9441__auto__ = ((function (c__9536__auto___11008,out){
return (function (state_10987){
var state_val_10988 = (state_10987[(1)]);
if((state_val_10988 === (7))){
var inst_10969 = (state_10987[(7)]);
var inst_10969__$1 = (state_10987[(2)]);
var inst_10970 = (inst_10969__$1 == null);
var inst_10971 = cljs.core.not.call(null,inst_10970);
var state_10987__$1 = (function (){var statearr_10989 = state_10987;
(statearr_10989[(7)] = inst_10969__$1);

return statearr_10989;
})();
if(inst_10971){
var statearr_10990_11009 = state_10987__$1;
(statearr_10990_11009[(1)] = (8));

} else {
var statearr_10991_11010 = state_10987__$1;
(statearr_10991_11010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10988 === (1))){
var inst_10964 = (0);
var state_10987__$1 = (function (){var statearr_10992 = state_10987;
(statearr_10992[(8)] = inst_10964);

return statearr_10992;
})();
var statearr_10993_11011 = state_10987__$1;
(statearr_10993_11011[(2)] = null);

(statearr_10993_11011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10988 === (4))){
var state_10987__$1 = state_10987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10987__$1,(7),ch);
} else {
if((state_val_10988 === (6))){
var inst_10982 = (state_10987[(2)]);
var state_10987__$1 = state_10987;
var statearr_10994_11012 = state_10987__$1;
(statearr_10994_11012[(2)] = inst_10982);

(statearr_10994_11012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10988 === (3))){
var inst_10984 = (state_10987[(2)]);
var inst_10985 = cljs.core.async.close_BANG_.call(null,out);
var state_10987__$1 = (function (){var statearr_10995 = state_10987;
(statearr_10995[(9)] = inst_10984);

return statearr_10995;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10987__$1,inst_10985);
} else {
if((state_val_10988 === (2))){
var inst_10964 = (state_10987[(8)]);
var inst_10966 = (inst_10964 < n);
var state_10987__$1 = state_10987;
if(cljs.core.truth_(inst_10966)){
var statearr_10996_11013 = state_10987__$1;
(statearr_10996_11013[(1)] = (4));

} else {
var statearr_10997_11014 = state_10987__$1;
(statearr_10997_11014[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10988 === (11))){
var inst_10964 = (state_10987[(8)]);
var inst_10974 = (state_10987[(2)]);
var inst_10975 = (inst_10964 + (1));
var inst_10964__$1 = inst_10975;
var state_10987__$1 = (function (){var statearr_10998 = state_10987;
(statearr_10998[(8)] = inst_10964__$1);

(statearr_10998[(10)] = inst_10974);

return statearr_10998;
})();
var statearr_10999_11015 = state_10987__$1;
(statearr_10999_11015[(2)] = null);

(statearr_10999_11015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10988 === (9))){
var state_10987__$1 = state_10987;
var statearr_11000_11016 = state_10987__$1;
(statearr_11000_11016[(2)] = null);

(statearr_11000_11016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10988 === (5))){
var state_10987__$1 = state_10987;
var statearr_11001_11017 = state_10987__$1;
(statearr_11001_11017[(2)] = null);

(statearr_11001_11017[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10988 === (10))){
var inst_10979 = (state_10987[(2)]);
var state_10987__$1 = state_10987;
var statearr_11002_11018 = state_10987__$1;
(statearr_11002_11018[(2)] = inst_10979);

(statearr_11002_11018[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10988 === (8))){
var inst_10969 = (state_10987[(7)]);
var state_10987__$1 = state_10987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10987__$1,(11),out,inst_10969);
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
});})(c__9536__auto___11008,out))
;
return ((function (switch__9441__auto__,c__9536__auto___11008,out){
return (function() {
var cljs$core$async$state_machine__9442__auto__ = null;
var cljs$core$async$state_machine__9442__auto____0 = (function (){
var statearr_11003 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11003[(0)] = cljs$core$async$state_machine__9442__auto__);

(statearr_11003[(1)] = (1));

return statearr_11003;
});
var cljs$core$async$state_machine__9442__auto____1 = (function (state_10987){
while(true){
var ret_value__9443__auto__ = (function (){try{while(true){
var result__9444__auto__ = switch__9441__auto__.call(null,state_10987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9444__auto__;
}
break;
}
}catch (e11004){if((e11004 instanceof Object)){
var ex__9445__auto__ = e11004;
var statearr_11005_11019 = state_10987;
(statearr_11005_11019[(5)] = ex__9445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11020 = state_10987;
state_10987 = G__11020;
continue;
} else {
return ret_value__9443__auto__;
}
break;
}
});
cljs$core$async$state_machine__9442__auto__ = function(state_10987){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9442__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9442__auto____1.call(this,state_10987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9442__auto____0;
cljs$core$async$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9442__auto____1;
return cljs$core$async$state_machine__9442__auto__;
})()
;})(switch__9441__auto__,c__9536__auto___11008,out))
})();
var state__9538__auto__ = (function (){var statearr_11006 = f__9537__auto__.call(null);
(statearr_11006[(6)] = c__9536__auto___11008);

return statearr_11006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9538__auto__);
});})(c__9536__auto___11008,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11022 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11022 = (function (f,ch,meta11023){
this.f = f;
this.ch = ch;
this.meta11023 = meta11023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11024,meta11023__$1){
var self__ = this;
var _11024__$1 = this;
return (new cljs.core.async.t_cljs$core$async11022(self__.f,self__.ch,meta11023__$1));
});

cljs.core.async.t_cljs$core$async11022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11024){
var self__ = this;
var _11024__$1 = this;
return self__.meta11023;
});

cljs.core.async.t_cljs$core$async11022.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11022.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11022.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11022.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11022.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11025 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11025 = (function (f,ch,meta11023,_,fn1,meta11026){
this.f = f;
this.ch = ch;
this.meta11023 = meta11023;
this._ = _;
this.fn1 = fn1;
this.meta11026 = meta11026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11027,meta11026__$1){
var self__ = this;
var _11027__$1 = this;
return (new cljs.core.async.t_cljs$core$async11025(self__.f,self__.ch,self__.meta11023,self__._,self__.fn1,meta11026__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async11025.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11027){
var self__ = this;
var _11027__$1 = this;
return self__.meta11026;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11025.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11025.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11025.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11025.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11021_SHARP_){
return f1.call(null,(((p1__11021_SHARP_ == null))?null:self__.f.call(null,p1__11021_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async11025.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11023","meta11023",-1810346848,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11022","cljs.core.async/t_cljs$core$async11022",2069265212,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11026","meta11026",1875005482,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11025.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11025.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11025";

cljs.core.async.t_cljs$core$async11025.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async11025");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11025.
 */
cljs.core.async.__GT_t_cljs$core$async11025 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11025(f__$1,ch__$1,meta11023__$1,___$2,fn1__$1,meta11026){
return (new cljs.core.async.t_cljs$core$async11025(f__$1,ch__$1,meta11023__$1,___$2,fn1__$1,meta11026));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async11025(self__.f,self__.ch,self__.meta11023,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async11022.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11022.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async11022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11023","meta11023",-1810346848,null)], null);
});

cljs.core.async.t_cljs$core$async11022.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11022";

cljs.core.async.t_cljs$core$async11022.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async11022");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11022.
 */
cljs.core.async.__GT_t_cljs$core$async11022 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11022(f__$1,ch__$1,meta11023){
return (new cljs.core.async.t_cljs$core$async11022(f__$1,ch__$1,meta11023));
});

}

return (new cljs.core.async.t_cljs$core$async11022(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11028 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11028 = (function (f,ch,meta11029){
this.f = f;
this.ch = ch;
this.meta11029 = meta11029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11030,meta11029__$1){
var self__ = this;
var _11030__$1 = this;
return (new cljs.core.async.t_cljs$core$async11028(self__.f,self__.ch,meta11029__$1));
});

cljs.core.async.t_cljs$core$async11028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11030){
var self__ = this;
var _11030__$1 = this;
return self__.meta11029;
});

cljs.core.async.t_cljs$core$async11028.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11028.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11028.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11028.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11028.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11028.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async11028.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11029","meta11029",-196513480,null)], null);
});

cljs.core.async.t_cljs$core$async11028.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11028.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11028";

cljs.core.async.t_cljs$core$async11028.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async11028");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11028.
 */
cljs.core.async.__GT_t_cljs$core$async11028 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11028(f__$1,ch__$1,meta11029){
return (new cljs.core.async.t_cljs$core$async11028(f__$1,ch__$1,meta11029));
});

}

return (new cljs.core.async.t_cljs$core$async11028(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11031 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11031 = (function (p,ch,meta11032){
this.p = p;
this.ch = ch;
this.meta11032 = meta11032;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11033,meta11032__$1){
var self__ = this;
var _11033__$1 = this;
return (new cljs.core.async.t_cljs$core$async11031(self__.p,self__.ch,meta11032__$1));
});

cljs.core.async.t_cljs$core$async11031.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11033){
var self__ = this;
var _11033__$1 = this;
return self__.meta11032;
});

cljs.core.async.t_cljs$core$async11031.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11031.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11031.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11031.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11031.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11031.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11031.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async11031.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11032","meta11032",-143224695,null)], null);
});

cljs.core.async.t_cljs$core$async11031.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11031.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11031";

cljs.core.async.t_cljs$core$async11031.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async11031");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11031.
 */
cljs.core.async.__GT_t_cljs$core$async11031 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11031(p__$1,ch__$1,meta11032){
return (new cljs.core.async.t_cljs$core$async11031(p__$1,ch__$1,meta11032));
});

}

return (new cljs.core.async.t_cljs$core$async11031(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11035 = arguments.length;
switch (G__11035) {
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
var c__9536__auto___11075 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9536__auto___11075,out){
return (function (){
var f__9537__auto__ = (function (){var switch__9441__auto__ = ((function (c__9536__auto___11075,out){
return (function (state_11056){
var state_val_11057 = (state_11056[(1)]);
if((state_val_11057 === (7))){
var inst_11052 = (state_11056[(2)]);
var state_11056__$1 = state_11056;
var statearr_11058_11076 = state_11056__$1;
(statearr_11058_11076[(2)] = inst_11052);

(statearr_11058_11076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11057 === (1))){
var state_11056__$1 = state_11056;
var statearr_11059_11077 = state_11056__$1;
(statearr_11059_11077[(2)] = null);

(statearr_11059_11077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11057 === (4))){
var inst_11038 = (state_11056[(7)]);
var inst_11038__$1 = (state_11056[(2)]);
var inst_11039 = (inst_11038__$1 == null);
var state_11056__$1 = (function (){var statearr_11060 = state_11056;
(statearr_11060[(7)] = inst_11038__$1);

return statearr_11060;
})();
if(cljs.core.truth_(inst_11039)){
var statearr_11061_11078 = state_11056__$1;
(statearr_11061_11078[(1)] = (5));

} else {
var statearr_11062_11079 = state_11056__$1;
(statearr_11062_11079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11057 === (6))){
var inst_11038 = (state_11056[(7)]);
var inst_11043 = p.call(null,inst_11038);
var state_11056__$1 = state_11056;
if(cljs.core.truth_(inst_11043)){
var statearr_11063_11080 = state_11056__$1;
(statearr_11063_11080[(1)] = (8));

} else {
var statearr_11064_11081 = state_11056__$1;
(statearr_11064_11081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11057 === (3))){
var inst_11054 = (state_11056[(2)]);
var state_11056__$1 = state_11056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11056__$1,inst_11054);
} else {
if((state_val_11057 === (2))){
var state_11056__$1 = state_11056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11056__$1,(4),ch);
} else {
if((state_val_11057 === (11))){
var inst_11046 = (state_11056[(2)]);
var state_11056__$1 = state_11056;
var statearr_11065_11082 = state_11056__$1;
(statearr_11065_11082[(2)] = inst_11046);

(statearr_11065_11082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11057 === (9))){
var state_11056__$1 = state_11056;
var statearr_11066_11083 = state_11056__$1;
(statearr_11066_11083[(2)] = null);

(statearr_11066_11083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11057 === (5))){
var inst_11041 = cljs.core.async.close_BANG_.call(null,out);
var state_11056__$1 = state_11056;
var statearr_11067_11084 = state_11056__$1;
(statearr_11067_11084[(2)] = inst_11041);

(statearr_11067_11084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11057 === (10))){
var inst_11049 = (state_11056[(2)]);
var state_11056__$1 = (function (){var statearr_11068 = state_11056;
(statearr_11068[(8)] = inst_11049);

return statearr_11068;
})();
var statearr_11069_11085 = state_11056__$1;
(statearr_11069_11085[(2)] = null);

(statearr_11069_11085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11057 === (8))){
var inst_11038 = (state_11056[(7)]);
var state_11056__$1 = state_11056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11056__$1,(11),out,inst_11038);
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
});})(c__9536__auto___11075,out))
;
return ((function (switch__9441__auto__,c__9536__auto___11075,out){
return (function() {
var cljs$core$async$state_machine__9442__auto__ = null;
var cljs$core$async$state_machine__9442__auto____0 = (function (){
var statearr_11070 = [null,null,null,null,null,null,null,null,null];
(statearr_11070[(0)] = cljs$core$async$state_machine__9442__auto__);

(statearr_11070[(1)] = (1));

return statearr_11070;
});
var cljs$core$async$state_machine__9442__auto____1 = (function (state_11056){
while(true){
var ret_value__9443__auto__ = (function (){try{while(true){
var result__9444__auto__ = switch__9441__auto__.call(null,state_11056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9444__auto__;
}
break;
}
}catch (e11071){if((e11071 instanceof Object)){
var ex__9445__auto__ = e11071;
var statearr_11072_11086 = state_11056;
(statearr_11072_11086[(5)] = ex__9445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11087 = state_11056;
state_11056 = G__11087;
continue;
} else {
return ret_value__9443__auto__;
}
break;
}
});
cljs$core$async$state_machine__9442__auto__ = function(state_11056){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9442__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9442__auto____1.call(this,state_11056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9442__auto____0;
cljs$core$async$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9442__auto____1;
return cljs$core$async$state_machine__9442__auto__;
})()
;})(switch__9441__auto__,c__9536__auto___11075,out))
})();
var state__9538__auto__ = (function (){var statearr_11073 = f__9537__auto__.call(null);
(statearr_11073[(6)] = c__9536__auto___11075);

return statearr_11073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9538__auto__);
});})(c__9536__auto___11075,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__11089 = arguments.length;
switch (G__11089) {
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
var c__9536__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9536__auto__){
return (function (){
var f__9537__auto__ = (function (){var switch__9441__auto__ = ((function (c__9536__auto__){
return (function (state_11152){
var state_val_11153 = (state_11152[(1)]);
if((state_val_11153 === (7))){
var inst_11148 = (state_11152[(2)]);
var state_11152__$1 = state_11152;
var statearr_11154_11192 = state_11152__$1;
(statearr_11154_11192[(2)] = inst_11148);

(statearr_11154_11192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (20))){
var inst_11118 = (state_11152[(7)]);
var inst_11129 = (state_11152[(2)]);
var inst_11130 = cljs.core.next.call(null,inst_11118);
var inst_11104 = inst_11130;
var inst_11105 = null;
var inst_11106 = (0);
var inst_11107 = (0);
var state_11152__$1 = (function (){var statearr_11155 = state_11152;
(statearr_11155[(8)] = inst_11129);

(statearr_11155[(9)] = inst_11107);

(statearr_11155[(10)] = inst_11105);

(statearr_11155[(11)] = inst_11106);

(statearr_11155[(12)] = inst_11104);

return statearr_11155;
})();
var statearr_11156_11193 = state_11152__$1;
(statearr_11156_11193[(2)] = null);

(statearr_11156_11193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (1))){
var state_11152__$1 = state_11152;
var statearr_11157_11194 = state_11152__$1;
(statearr_11157_11194[(2)] = null);

(statearr_11157_11194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (4))){
var inst_11093 = (state_11152[(13)]);
var inst_11093__$1 = (state_11152[(2)]);
var inst_11094 = (inst_11093__$1 == null);
var state_11152__$1 = (function (){var statearr_11158 = state_11152;
(statearr_11158[(13)] = inst_11093__$1);

return statearr_11158;
})();
if(cljs.core.truth_(inst_11094)){
var statearr_11159_11195 = state_11152__$1;
(statearr_11159_11195[(1)] = (5));

} else {
var statearr_11160_11196 = state_11152__$1;
(statearr_11160_11196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (15))){
var state_11152__$1 = state_11152;
var statearr_11164_11197 = state_11152__$1;
(statearr_11164_11197[(2)] = null);

(statearr_11164_11197[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (21))){
var state_11152__$1 = state_11152;
var statearr_11165_11198 = state_11152__$1;
(statearr_11165_11198[(2)] = null);

(statearr_11165_11198[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (13))){
var inst_11107 = (state_11152[(9)]);
var inst_11105 = (state_11152[(10)]);
var inst_11106 = (state_11152[(11)]);
var inst_11104 = (state_11152[(12)]);
var inst_11114 = (state_11152[(2)]);
var inst_11115 = (inst_11107 + (1));
var tmp11161 = inst_11105;
var tmp11162 = inst_11106;
var tmp11163 = inst_11104;
var inst_11104__$1 = tmp11163;
var inst_11105__$1 = tmp11161;
var inst_11106__$1 = tmp11162;
var inst_11107__$1 = inst_11115;
var state_11152__$1 = (function (){var statearr_11166 = state_11152;
(statearr_11166[(14)] = inst_11114);

(statearr_11166[(9)] = inst_11107__$1);

(statearr_11166[(10)] = inst_11105__$1);

(statearr_11166[(11)] = inst_11106__$1);

(statearr_11166[(12)] = inst_11104__$1);

return statearr_11166;
})();
var statearr_11167_11199 = state_11152__$1;
(statearr_11167_11199[(2)] = null);

(statearr_11167_11199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (22))){
var state_11152__$1 = state_11152;
var statearr_11168_11200 = state_11152__$1;
(statearr_11168_11200[(2)] = null);

(statearr_11168_11200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (6))){
var inst_11093 = (state_11152[(13)]);
var inst_11102 = f.call(null,inst_11093);
var inst_11103 = cljs.core.seq.call(null,inst_11102);
var inst_11104 = inst_11103;
var inst_11105 = null;
var inst_11106 = (0);
var inst_11107 = (0);
var state_11152__$1 = (function (){var statearr_11169 = state_11152;
(statearr_11169[(9)] = inst_11107);

(statearr_11169[(10)] = inst_11105);

(statearr_11169[(11)] = inst_11106);

(statearr_11169[(12)] = inst_11104);

return statearr_11169;
})();
var statearr_11170_11201 = state_11152__$1;
(statearr_11170_11201[(2)] = null);

(statearr_11170_11201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (17))){
var inst_11118 = (state_11152[(7)]);
var inst_11122 = cljs.core.chunk_first.call(null,inst_11118);
var inst_11123 = cljs.core.chunk_rest.call(null,inst_11118);
var inst_11124 = cljs.core.count.call(null,inst_11122);
var inst_11104 = inst_11123;
var inst_11105 = inst_11122;
var inst_11106 = inst_11124;
var inst_11107 = (0);
var state_11152__$1 = (function (){var statearr_11171 = state_11152;
(statearr_11171[(9)] = inst_11107);

(statearr_11171[(10)] = inst_11105);

(statearr_11171[(11)] = inst_11106);

(statearr_11171[(12)] = inst_11104);

return statearr_11171;
})();
var statearr_11172_11202 = state_11152__$1;
(statearr_11172_11202[(2)] = null);

(statearr_11172_11202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (3))){
var inst_11150 = (state_11152[(2)]);
var state_11152__$1 = state_11152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11152__$1,inst_11150);
} else {
if((state_val_11153 === (12))){
var inst_11138 = (state_11152[(2)]);
var state_11152__$1 = state_11152;
var statearr_11173_11203 = state_11152__$1;
(statearr_11173_11203[(2)] = inst_11138);

(statearr_11173_11203[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (2))){
var state_11152__$1 = state_11152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11152__$1,(4),in$);
} else {
if((state_val_11153 === (23))){
var inst_11146 = (state_11152[(2)]);
var state_11152__$1 = state_11152;
var statearr_11174_11204 = state_11152__$1;
(statearr_11174_11204[(2)] = inst_11146);

(statearr_11174_11204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (19))){
var inst_11133 = (state_11152[(2)]);
var state_11152__$1 = state_11152;
var statearr_11175_11205 = state_11152__$1;
(statearr_11175_11205[(2)] = inst_11133);

(statearr_11175_11205[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (11))){
var inst_11118 = (state_11152[(7)]);
var inst_11104 = (state_11152[(12)]);
var inst_11118__$1 = cljs.core.seq.call(null,inst_11104);
var state_11152__$1 = (function (){var statearr_11176 = state_11152;
(statearr_11176[(7)] = inst_11118__$1);

return statearr_11176;
})();
if(inst_11118__$1){
var statearr_11177_11206 = state_11152__$1;
(statearr_11177_11206[(1)] = (14));

} else {
var statearr_11178_11207 = state_11152__$1;
(statearr_11178_11207[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (9))){
var inst_11140 = (state_11152[(2)]);
var inst_11141 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11152__$1 = (function (){var statearr_11179 = state_11152;
(statearr_11179[(15)] = inst_11140);

return statearr_11179;
})();
if(cljs.core.truth_(inst_11141)){
var statearr_11180_11208 = state_11152__$1;
(statearr_11180_11208[(1)] = (21));

} else {
var statearr_11181_11209 = state_11152__$1;
(statearr_11181_11209[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (5))){
var inst_11096 = cljs.core.async.close_BANG_.call(null,out);
var state_11152__$1 = state_11152;
var statearr_11182_11210 = state_11152__$1;
(statearr_11182_11210[(2)] = inst_11096);

(statearr_11182_11210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (14))){
var inst_11118 = (state_11152[(7)]);
var inst_11120 = cljs.core.chunked_seq_QMARK_.call(null,inst_11118);
var state_11152__$1 = state_11152;
if(inst_11120){
var statearr_11183_11211 = state_11152__$1;
(statearr_11183_11211[(1)] = (17));

} else {
var statearr_11184_11212 = state_11152__$1;
(statearr_11184_11212[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (16))){
var inst_11136 = (state_11152[(2)]);
var state_11152__$1 = state_11152;
var statearr_11185_11213 = state_11152__$1;
(statearr_11185_11213[(2)] = inst_11136);

(statearr_11185_11213[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (10))){
var inst_11107 = (state_11152[(9)]);
var inst_11105 = (state_11152[(10)]);
var inst_11112 = cljs.core._nth.call(null,inst_11105,inst_11107);
var state_11152__$1 = state_11152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11152__$1,(13),out,inst_11112);
} else {
if((state_val_11153 === (18))){
var inst_11118 = (state_11152[(7)]);
var inst_11127 = cljs.core.first.call(null,inst_11118);
var state_11152__$1 = state_11152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11152__$1,(20),out,inst_11127);
} else {
if((state_val_11153 === (8))){
var inst_11107 = (state_11152[(9)]);
var inst_11106 = (state_11152[(11)]);
var inst_11109 = (inst_11107 < inst_11106);
var inst_11110 = inst_11109;
var state_11152__$1 = state_11152;
if(cljs.core.truth_(inst_11110)){
var statearr_11186_11214 = state_11152__$1;
(statearr_11186_11214[(1)] = (10));

} else {
var statearr_11187_11215 = state_11152__$1;
(statearr_11187_11215[(1)] = (11));

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
});})(c__9536__auto__))
;
return ((function (switch__9441__auto__,c__9536__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__9442__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9442__auto____0 = (function (){
var statearr_11188 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11188[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9442__auto__);

(statearr_11188[(1)] = (1));

return statearr_11188;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9442__auto____1 = (function (state_11152){
while(true){
var ret_value__9443__auto__ = (function (){try{while(true){
var result__9444__auto__ = switch__9441__auto__.call(null,state_11152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9444__auto__;
}
break;
}
}catch (e11189){if((e11189 instanceof Object)){
var ex__9445__auto__ = e11189;
var statearr_11190_11216 = state_11152;
(statearr_11190_11216[(5)] = ex__9445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11217 = state_11152;
state_11152 = G__11217;
continue;
} else {
return ret_value__9443__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9442__auto__ = function(state_11152){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9442__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9442__auto____1.call(this,state_11152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9442__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9442__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9442__auto__;
})()
;})(switch__9441__auto__,c__9536__auto__))
})();
var state__9538__auto__ = (function (){var statearr_11191 = f__9537__auto__.call(null);
(statearr_11191[(6)] = c__9536__auto__);

return statearr_11191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9538__auto__);
});})(c__9536__auto__))
);

return c__9536__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__11219 = arguments.length;
switch (G__11219) {
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
var G__11222 = arguments.length;
switch (G__11222) {
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
var G__11225 = arguments.length;
switch (G__11225) {
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
var c__9536__auto___11272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9536__auto___11272,out){
return (function (){
var f__9537__auto__ = (function (){var switch__9441__auto__ = ((function (c__9536__auto___11272,out){
return (function (state_11249){
var state_val_11250 = (state_11249[(1)]);
if((state_val_11250 === (7))){
var inst_11244 = (state_11249[(2)]);
var state_11249__$1 = state_11249;
var statearr_11251_11273 = state_11249__$1;
(statearr_11251_11273[(2)] = inst_11244);

(statearr_11251_11273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11250 === (1))){
var inst_11226 = null;
var state_11249__$1 = (function (){var statearr_11252 = state_11249;
(statearr_11252[(7)] = inst_11226);

return statearr_11252;
})();
var statearr_11253_11274 = state_11249__$1;
(statearr_11253_11274[(2)] = null);

(statearr_11253_11274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11250 === (4))){
var inst_11229 = (state_11249[(8)]);
var inst_11229__$1 = (state_11249[(2)]);
var inst_11230 = (inst_11229__$1 == null);
var inst_11231 = cljs.core.not.call(null,inst_11230);
var state_11249__$1 = (function (){var statearr_11254 = state_11249;
(statearr_11254[(8)] = inst_11229__$1);

return statearr_11254;
})();
if(inst_11231){
var statearr_11255_11275 = state_11249__$1;
(statearr_11255_11275[(1)] = (5));

} else {
var statearr_11256_11276 = state_11249__$1;
(statearr_11256_11276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11250 === (6))){
var state_11249__$1 = state_11249;
var statearr_11257_11277 = state_11249__$1;
(statearr_11257_11277[(2)] = null);

(statearr_11257_11277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11250 === (3))){
var inst_11246 = (state_11249[(2)]);
var inst_11247 = cljs.core.async.close_BANG_.call(null,out);
var state_11249__$1 = (function (){var statearr_11258 = state_11249;
(statearr_11258[(9)] = inst_11246);

return statearr_11258;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11249__$1,inst_11247);
} else {
if((state_val_11250 === (2))){
var state_11249__$1 = state_11249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11249__$1,(4),ch);
} else {
if((state_val_11250 === (11))){
var inst_11229 = (state_11249[(8)]);
var inst_11238 = (state_11249[(2)]);
var inst_11226 = inst_11229;
var state_11249__$1 = (function (){var statearr_11259 = state_11249;
(statearr_11259[(7)] = inst_11226);

(statearr_11259[(10)] = inst_11238);

return statearr_11259;
})();
var statearr_11260_11278 = state_11249__$1;
(statearr_11260_11278[(2)] = null);

(statearr_11260_11278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11250 === (9))){
var inst_11229 = (state_11249[(8)]);
var state_11249__$1 = state_11249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11249__$1,(11),out,inst_11229);
} else {
if((state_val_11250 === (5))){
var inst_11226 = (state_11249[(7)]);
var inst_11229 = (state_11249[(8)]);
var inst_11233 = cljs.core._EQ_.call(null,inst_11229,inst_11226);
var state_11249__$1 = state_11249;
if(inst_11233){
var statearr_11262_11279 = state_11249__$1;
(statearr_11262_11279[(1)] = (8));

} else {
var statearr_11263_11280 = state_11249__$1;
(statearr_11263_11280[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11250 === (10))){
var inst_11241 = (state_11249[(2)]);
var state_11249__$1 = state_11249;
var statearr_11264_11281 = state_11249__$1;
(statearr_11264_11281[(2)] = inst_11241);

(statearr_11264_11281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11250 === (8))){
var inst_11226 = (state_11249[(7)]);
var tmp11261 = inst_11226;
var inst_11226__$1 = tmp11261;
var state_11249__$1 = (function (){var statearr_11265 = state_11249;
(statearr_11265[(7)] = inst_11226__$1);

return statearr_11265;
})();
var statearr_11266_11282 = state_11249__$1;
(statearr_11266_11282[(2)] = null);

(statearr_11266_11282[(1)] = (2));


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
});})(c__9536__auto___11272,out))
;
return ((function (switch__9441__auto__,c__9536__auto___11272,out){
return (function() {
var cljs$core$async$state_machine__9442__auto__ = null;
var cljs$core$async$state_machine__9442__auto____0 = (function (){
var statearr_11267 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11267[(0)] = cljs$core$async$state_machine__9442__auto__);

(statearr_11267[(1)] = (1));

return statearr_11267;
});
var cljs$core$async$state_machine__9442__auto____1 = (function (state_11249){
while(true){
var ret_value__9443__auto__ = (function (){try{while(true){
var result__9444__auto__ = switch__9441__auto__.call(null,state_11249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9444__auto__;
}
break;
}
}catch (e11268){if((e11268 instanceof Object)){
var ex__9445__auto__ = e11268;
var statearr_11269_11283 = state_11249;
(statearr_11269_11283[(5)] = ex__9445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11284 = state_11249;
state_11249 = G__11284;
continue;
} else {
return ret_value__9443__auto__;
}
break;
}
});
cljs$core$async$state_machine__9442__auto__ = function(state_11249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9442__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9442__auto____1.call(this,state_11249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9442__auto____0;
cljs$core$async$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9442__auto____1;
return cljs$core$async$state_machine__9442__auto__;
})()
;})(switch__9441__auto__,c__9536__auto___11272,out))
})();
var state__9538__auto__ = (function (){var statearr_11270 = f__9537__auto__.call(null);
(statearr_11270[(6)] = c__9536__auto___11272);

return statearr_11270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9538__auto__);
});})(c__9536__auto___11272,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__11286 = arguments.length;
switch (G__11286) {
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
var c__9536__auto___11352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9536__auto___11352,out){
return (function (){
var f__9537__auto__ = (function (){var switch__9441__auto__ = ((function (c__9536__auto___11352,out){
return (function (state_11324){
var state_val_11325 = (state_11324[(1)]);
if((state_val_11325 === (7))){
var inst_11320 = (state_11324[(2)]);
var state_11324__$1 = state_11324;
var statearr_11326_11353 = state_11324__$1;
(statearr_11326_11353[(2)] = inst_11320);

(statearr_11326_11353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (1))){
var inst_11287 = (new Array(n));
var inst_11288 = inst_11287;
var inst_11289 = (0);
var state_11324__$1 = (function (){var statearr_11327 = state_11324;
(statearr_11327[(7)] = inst_11289);

(statearr_11327[(8)] = inst_11288);

return statearr_11327;
})();
var statearr_11328_11354 = state_11324__$1;
(statearr_11328_11354[(2)] = null);

(statearr_11328_11354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (4))){
var inst_11292 = (state_11324[(9)]);
var inst_11292__$1 = (state_11324[(2)]);
var inst_11293 = (inst_11292__$1 == null);
var inst_11294 = cljs.core.not.call(null,inst_11293);
var state_11324__$1 = (function (){var statearr_11329 = state_11324;
(statearr_11329[(9)] = inst_11292__$1);

return statearr_11329;
})();
if(inst_11294){
var statearr_11330_11355 = state_11324__$1;
(statearr_11330_11355[(1)] = (5));

} else {
var statearr_11331_11356 = state_11324__$1;
(statearr_11331_11356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (15))){
var inst_11314 = (state_11324[(2)]);
var state_11324__$1 = state_11324;
var statearr_11332_11357 = state_11324__$1;
(statearr_11332_11357[(2)] = inst_11314);

(statearr_11332_11357[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (13))){
var state_11324__$1 = state_11324;
var statearr_11333_11358 = state_11324__$1;
(statearr_11333_11358[(2)] = null);

(statearr_11333_11358[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (6))){
var inst_11289 = (state_11324[(7)]);
var inst_11310 = (inst_11289 > (0));
var state_11324__$1 = state_11324;
if(cljs.core.truth_(inst_11310)){
var statearr_11334_11359 = state_11324__$1;
(statearr_11334_11359[(1)] = (12));

} else {
var statearr_11335_11360 = state_11324__$1;
(statearr_11335_11360[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (3))){
var inst_11322 = (state_11324[(2)]);
var state_11324__$1 = state_11324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11324__$1,inst_11322);
} else {
if((state_val_11325 === (12))){
var inst_11288 = (state_11324[(8)]);
var inst_11312 = cljs.core.vec.call(null,inst_11288);
var state_11324__$1 = state_11324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11324__$1,(15),out,inst_11312);
} else {
if((state_val_11325 === (2))){
var state_11324__$1 = state_11324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11324__$1,(4),ch);
} else {
if((state_val_11325 === (11))){
var inst_11304 = (state_11324[(2)]);
var inst_11305 = (new Array(n));
var inst_11288 = inst_11305;
var inst_11289 = (0);
var state_11324__$1 = (function (){var statearr_11336 = state_11324;
(statearr_11336[(10)] = inst_11304);

(statearr_11336[(7)] = inst_11289);

(statearr_11336[(8)] = inst_11288);

return statearr_11336;
})();
var statearr_11337_11361 = state_11324__$1;
(statearr_11337_11361[(2)] = null);

(statearr_11337_11361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (9))){
var inst_11288 = (state_11324[(8)]);
var inst_11302 = cljs.core.vec.call(null,inst_11288);
var state_11324__$1 = state_11324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11324__$1,(11),out,inst_11302);
} else {
if((state_val_11325 === (5))){
var inst_11292 = (state_11324[(9)]);
var inst_11297 = (state_11324[(11)]);
var inst_11289 = (state_11324[(7)]);
var inst_11288 = (state_11324[(8)]);
var inst_11296 = (inst_11288[inst_11289] = inst_11292);
var inst_11297__$1 = (inst_11289 + (1));
var inst_11298 = (inst_11297__$1 < n);
var state_11324__$1 = (function (){var statearr_11338 = state_11324;
(statearr_11338[(11)] = inst_11297__$1);

(statearr_11338[(12)] = inst_11296);

return statearr_11338;
})();
if(cljs.core.truth_(inst_11298)){
var statearr_11339_11362 = state_11324__$1;
(statearr_11339_11362[(1)] = (8));

} else {
var statearr_11340_11363 = state_11324__$1;
(statearr_11340_11363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (14))){
var inst_11317 = (state_11324[(2)]);
var inst_11318 = cljs.core.async.close_BANG_.call(null,out);
var state_11324__$1 = (function (){var statearr_11342 = state_11324;
(statearr_11342[(13)] = inst_11317);

return statearr_11342;
})();
var statearr_11343_11364 = state_11324__$1;
(statearr_11343_11364[(2)] = inst_11318);

(statearr_11343_11364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (10))){
var inst_11308 = (state_11324[(2)]);
var state_11324__$1 = state_11324;
var statearr_11344_11365 = state_11324__$1;
(statearr_11344_11365[(2)] = inst_11308);

(statearr_11344_11365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (8))){
var inst_11297 = (state_11324[(11)]);
var inst_11288 = (state_11324[(8)]);
var tmp11341 = inst_11288;
var inst_11288__$1 = tmp11341;
var inst_11289 = inst_11297;
var state_11324__$1 = (function (){var statearr_11345 = state_11324;
(statearr_11345[(7)] = inst_11289);

(statearr_11345[(8)] = inst_11288__$1);

return statearr_11345;
})();
var statearr_11346_11366 = state_11324__$1;
(statearr_11346_11366[(2)] = null);

(statearr_11346_11366[(1)] = (2));


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
});})(c__9536__auto___11352,out))
;
return ((function (switch__9441__auto__,c__9536__auto___11352,out){
return (function() {
var cljs$core$async$state_machine__9442__auto__ = null;
var cljs$core$async$state_machine__9442__auto____0 = (function (){
var statearr_11347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11347[(0)] = cljs$core$async$state_machine__9442__auto__);

(statearr_11347[(1)] = (1));

return statearr_11347;
});
var cljs$core$async$state_machine__9442__auto____1 = (function (state_11324){
while(true){
var ret_value__9443__auto__ = (function (){try{while(true){
var result__9444__auto__ = switch__9441__auto__.call(null,state_11324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9444__auto__;
}
break;
}
}catch (e11348){if((e11348 instanceof Object)){
var ex__9445__auto__ = e11348;
var statearr_11349_11367 = state_11324;
(statearr_11349_11367[(5)] = ex__9445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11368 = state_11324;
state_11324 = G__11368;
continue;
} else {
return ret_value__9443__auto__;
}
break;
}
});
cljs$core$async$state_machine__9442__auto__ = function(state_11324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9442__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9442__auto____1.call(this,state_11324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9442__auto____0;
cljs$core$async$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9442__auto____1;
return cljs$core$async$state_machine__9442__auto__;
})()
;})(switch__9441__auto__,c__9536__auto___11352,out))
})();
var state__9538__auto__ = (function (){var statearr_11350 = f__9537__auto__.call(null);
(statearr_11350[(6)] = c__9536__auto___11352);

return statearr_11350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9538__auto__);
});})(c__9536__auto___11352,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__11370 = arguments.length;
switch (G__11370) {
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
var c__9536__auto___11440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9536__auto___11440,out){
return (function (){
var f__9537__auto__ = (function (){var switch__9441__auto__ = ((function (c__9536__auto___11440,out){
return (function (state_11412){
var state_val_11413 = (state_11412[(1)]);
if((state_val_11413 === (7))){
var inst_11408 = (state_11412[(2)]);
var state_11412__$1 = state_11412;
var statearr_11414_11441 = state_11412__$1;
(statearr_11414_11441[(2)] = inst_11408);

(statearr_11414_11441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (1))){
var inst_11371 = [];
var inst_11372 = inst_11371;
var inst_11373 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_11412__$1 = (function (){var statearr_11415 = state_11412;
(statearr_11415[(7)] = inst_11372);

(statearr_11415[(8)] = inst_11373);

return statearr_11415;
})();
var statearr_11416_11442 = state_11412__$1;
(statearr_11416_11442[(2)] = null);

(statearr_11416_11442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (4))){
var inst_11376 = (state_11412[(9)]);
var inst_11376__$1 = (state_11412[(2)]);
var inst_11377 = (inst_11376__$1 == null);
var inst_11378 = cljs.core.not.call(null,inst_11377);
var state_11412__$1 = (function (){var statearr_11417 = state_11412;
(statearr_11417[(9)] = inst_11376__$1);

return statearr_11417;
})();
if(inst_11378){
var statearr_11418_11443 = state_11412__$1;
(statearr_11418_11443[(1)] = (5));

} else {
var statearr_11419_11444 = state_11412__$1;
(statearr_11419_11444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (15))){
var inst_11402 = (state_11412[(2)]);
var state_11412__$1 = state_11412;
var statearr_11420_11445 = state_11412__$1;
(statearr_11420_11445[(2)] = inst_11402);

(statearr_11420_11445[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (13))){
var state_11412__$1 = state_11412;
var statearr_11421_11446 = state_11412__$1;
(statearr_11421_11446[(2)] = null);

(statearr_11421_11446[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (6))){
var inst_11372 = (state_11412[(7)]);
var inst_11397 = inst_11372.length;
var inst_11398 = (inst_11397 > (0));
var state_11412__$1 = state_11412;
if(cljs.core.truth_(inst_11398)){
var statearr_11422_11447 = state_11412__$1;
(statearr_11422_11447[(1)] = (12));

} else {
var statearr_11423_11448 = state_11412__$1;
(statearr_11423_11448[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (3))){
var inst_11410 = (state_11412[(2)]);
var state_11412__$1 = state_11412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11412__$1,inst_11410);
} else {
if((state_val_11413 === (12))){
var inst_11372 = (state_11412[(7)]);
var inst_11400 = cljs.core.vec.call(null,inst_11372);
var state_11412__$1 = state_11412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11412__$1,(15),out,inst_11400);
} else {
if((state_val_11413 === (2))){
var state_11412__$1 = state_11412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11412__$1,(4),ch);
} else {
if((state_val_11413 === (11))){
var inst_11376 = (state_11412[(9)]);
var inst_11380 = (state_11412[(10)]);
var inst_11390 = (state_11412[(2)]);
var inst_11391 = [];
var inst_11392 = inst_11391.push(inst_11376);
var inst_11372 = inst_11391;
var inst_11373 = inst_11380;
var state_11412__$1 = (function (){var statearr_11424 = state_11412;
(statearr_11424[(7)] = inst_11372);

(statearr_11424[(11)] = inst_11392);

(statearr_11424[(8)] = inst_11373);

(statearr_11424[(12)] = inst_11390);

return statearr_11424;
})();
var statearr_11425_11449 = state_11412__$1;
(statearr_11425_11449[(2)] = null);

(statearr_11425_11449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (9))){
var inst_11372 = (state_11412[(7)]);
var inst_11388 = cljs.core.vec.call(null,inst_11372);
var state_11412__$1 = state_11412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11412__$1,(11),out,inst_11388);
} else {
if((state_val_11413 === (5))){
var inst_11373 = (state_11412[(8)]);
var inst_11376 = (state_11412[(9)]);
var inst_11380 = (state_11412[(10)]);
var inst_11380__$1 = f.call(null,inst_11376);
var inst_11381 = cljs.core._EQ_.call(null,inst_11380__$1,inst_11373);
var inst_11382 = cljs.core.keyword_identical_QMARK_.call(null,inst_11373,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_11383 = ((inst_11381) || (inst_11382));
var state_11412__$1 = (function (){var statearr_11426 = state_11412;
(statearr_11426[(10)] = inst_11380__$1);

return statearr_11426;
})();
if(cljs.core.truth_(inst_11383)){
var statearr_11427_11450 = state_11412__$1;
(statearr_11427_11450[(1)] = (8));

} else {
var statearr_11428_11451 = state_11412__$1;
(statearr_11428_11451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (14))){
var inst_11405 = (state_11412[(2)]);
var inst_11406 = cljs.core.async.close_BANG_.call(null,out);
var state_11412__$1 = (function (){var statearr_11430 = state_11412;
(statearr_11430[(13)] = inst_11405);

return statearr_11430;
})();
var statearr_11431_11452 = state_11412__$1;
(statearr_11431_11452[(2)] = inst_11406);

(statearr_11431_11452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (10))){
var inst_11395 = (state_11412[(2)]);
var state_11412__$1 = state_11412;
var statearr_11432_11453 = state_11412__$1;
(statearr_11432_11453[(2)] = inst_11395);

(statearr_11432_11453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (8))){
var inst_11372 = (state_11412[(7)]);
var inst_11376 = (state_11412[(9)]);
var inst_11380 = (state_11412[(10)]);
var inst_11385 = inst_11372.push(inst_11376);
var tmp11429 = inst_11372;
var inst_11372__$1 = tmp11429;
var inst_11373 = inst_11380;
var state_11412__$1 = (function (){var statearr_11433 = state_11412;
(statearr_11433[(7)] = inst_11372__$1);

(statearr_11433[(8)] = inst_11373);

(statearr_11433[(14)] = inst_11385);

return statearr_11433;
})();
var statearr_11434_11454 = state_11412__$1;
(statearr_11434_11454[(2)] = null);

(statearr_11434_11454[(1)] = (2));


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
});})(c__9536__auto___11440,out))
;
return ((function (switch__9441__auto__,c__9536__auto___11440,out){
return (function() {
var cljs$core$async$state_machine__9442__auto__ = null;
var cljs$core$async$state_machine__9442__auto____0 = (function (){
var statearr_11435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11435[(0)] = cljs$core$async$state_machine__9442__auto__);

(statearr_11435[(1)] = (1));

return statearr_11435;
});
var cljs$core$async$state_machine__9442__auto____1 = (function (state_11412){
while(true){
var ret_value__9443__auto__ = (function (){try{while(true){
var result__9444__auto__ = switch__9441__auto__.call(null,state_11412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9444__auto__;
}
break;
}
}catch (e11436){if((e11436 instanceof Object)){
var ex__9445__auto__ = e11436;
var statearr_11437_11455 = state_11412;
(statearr_11437_11455[(5)] = ex__9445__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11456 = state_11412;
state_11412 = G__11456;
continue;
} else {
return ret_value__9443__auto__;
}
break;
}
});
cljs$core$async$state_machine__9442__auto__ = function(state_11412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9442__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9442__auto____1.call(this,state_11412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9442__auto____0;
cljs$core$async$state_machine__9442__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9442__auto____1;
return cljs$core$async$state_machine__9442__auto__;
})()
;})(switch__9441__auto__,c__9536__auto___11440,out))
})();
var state__9538__auto__ = (function (){var statearr_11438 = f__9537__auto__.call(null);
(statearr_11438[(6)] = c__9536__auto___11440);

return statearr_11438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9538__auto__);
});})(c__9536__auto___11440,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
