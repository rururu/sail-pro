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
var G__17795 = arguments.length;
switch (G__17795) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17796 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17796 = (function (f,blockable,meta17797){
this.f = f;
this.blockable = blockable;
this.meta17797 = meta17797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17798,meta17797__$1){
var self__ = this;
var _17798__$1 = this;
return (new cljs.core.async.t_cljs$core$async17796(self__.f,self__.blockable,meta17797__$1));
});

cljs.core.async.t_cljs$core$async17796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17798){
var self__ = this;
var _17798__$1 = this;
return self__.meta17797;
});

cljs.core.async.t_cljs$core$async17796.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17796.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17796.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17796.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17796.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17797","meta17797",1002626932,null)], null);
});

cljs.core.async.t_cljs$core$async17796.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17796.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17796";

cljs.core.async.t_cljs$core$async17796.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async17796");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17796.
 */
cljs.core.async.__GT_t_cljs$core$async17796 = (function cljs$core$async$__GT_t_cljs$core$async17796(f__$1,blockable__$1,meta17797){
return (new cljs.core.async.t_cljs$core$async17796(f__$1,blockable__$1,meta17797));
});

}

return (new cljs.core.async.t_cljs$core$async17796(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17802 = arguments.length;
switch (G__17802) {
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
var G__17805 = arguments.length;
switch (G__17805) {
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
var G__17808 = arguments.length;
switch (G__17808) {
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
var val_17810 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17810);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17810,ret){
return (function (){
return fn1.call(null,val_17810);
});})(val_17810,ret))
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
var G__17812 = arguments.length;
switch (G__17812) {
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
var n__4518__auto___17814 = n;
var x_17815 = (0);
while(true){
if((x_17815 < n__4518__auto___17814)){
(a[x_17815] = (0));

var G__17816 = (x_17815 + (1));
x_17815 = G__17816;
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

var G__17817 = (i + (1));
i = G__17817;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17818 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17818 = (function (flag,meta17819){
this.flag = flag;
this.meta17819 = meta17819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17820,meta17819__$1){
var self__ = this;
var _17820__$1 = this;
return (new cljs.core.async.t_cljs$core$async17818(self__.flag,meta17819__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17818.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17820){
var self__ = this;
var _17820__$1 = this;
return self__.meta17819;
});})(flag))
;

cljs.core.async.t_cljs$core$async17818.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17818.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17818.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17818.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17818.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17819","meta17819",1145139965,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17818.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17818";

cljs.core.async.t_cljs$core$async17818.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async17818");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17818.
 */
cljs.core.async.__GT_t_cljs$core$async17818 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17818(flag__$1,meta17819){
return (new cljs.core.async.t_cljs$core$async17818(flag__$1,meta17819));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17818(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17821 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17821 = (function (flag,cb,meta17822){
this.flag = flag;
this.cb = cb;
this.meta17822 = meta17822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17823,meta17822__$1){
var self__ = this;
var _17823__$1 = this;
return (new cljs.core.async.t_cljs$core$async17821(self__.flag,self__.cb,meta17822__$1));
});

cljs.core.async.t_cljs$core$async17821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17823){
var self__ = this;
var _17823__$1 = this;
return self__.meta17822;
});

cljs.core.async.t_cljs$core$async17821.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17821.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17821.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17821.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17821.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17822","meta17822",556926955,null)], null);
});

cljs.core.async.t_cljs$core$async17821.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17821.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17821";

cljs.core.async.t_cljs$core$async17821.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async17821");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17821.
 */
cljs.core.async.__GT_t_cljs$core$async17821 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17821(flag__$1,cb__$1,meta17822){
return (new cljs.core.async.t_cljs$core$async17821(flag__$1,cb__$1,meta17822));
});

}

return (new cljs.core.async.t_cljs$core$async17821(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17824_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17824_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17825_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17825_SHARP_,port], null));
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
var G__17826 = (i + (1));
i = G__17826;
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
var len__4641__auto___17832 = arguments.length;
var i__4642__auto___17833 = (0);
while(true){
if((i__4642__auto___17833 < len__4641__auto___17832)){
args__4647__auto__.push((arguments[i__4642__auto___17833]));

var G__17834 = (i__4642__auto___17833 + (1));
i__4642__auto___17833 = G__17834;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17829){
var map__17830 = p__17829;
var map__17830__$1 = (((((!((map__17830 == null))))?(((((map__17830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17830):map__17830);
var opts = map__17830__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17827){
var G__17828 = cljs.core.first.call(null,seq17827);
var seq17827__$1 = cljs.core.next.call(null,seq17827);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17828,seq17827__$1);
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
var G__17836 = arguments.length;
switch (G__17836) {
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
var c__15871__auto___17882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15871__auto___17882){
return (function (){
var f__15872__auto__ = (function (){var switch__15704__auto__ = ((function (c__15871__auto___17882){
return (function (state_17860){
var state_val_17861 = (state_17860[(1)]);
if((state_val_17861 === (7))){
var inst_17856 = (state_17860[(2)]);
var state_17860__$1 = state_17860;
var statearr_17862_17883 = state_17860__$1;
(statearr_17862_17883[(2)] = inst_17856);

(statearr_17862_17883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17861 === (1))){
var state_17860__$1 = state_17860;
var statearr_17863_17884 = state_17860__$1;
(statearr_17863_17884[(2)] = null);

(statearr_17863_17884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17861 === (4))){
var inst_17839 = (state_17860[(7)]);
var inst_17839__$1 = (state_17860[(2)]);
var inst_17840 = (inst_17839__$1 == null);
var state_17860__$1 = (function (){var statearr_17864 = state_17860;
(statearr_17864[(7)] = inst_17839__$1);

return statearr_17864;
})();
if(cljs.core.truth_(inst_17840)){
var statearr_17865_17885 = state_17860__$1;
(statearr_17865_17885[(1)] = (5));

} else {
var statearr_17866_17886 = state_17860__$1;
(statearr_17866_17886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17861 === (13))){
var state_17860__$1 = state_17860;
var statearr_17867_17887 = state_17860__$1;
(statearr_17867_17887[(2)] = null);

(statearr_17867_17887[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17861 === (6))){
var inst_17839 = (state_17860[(7)]);
var state_17860__$1 = state_17860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17860__$1,(11),to,inst_17839);
} else {
if((state_val_17861 === (3))){
var inst_17858 = (state_17860[(2)]);
var state_17860__$1 = state_17860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17860__$1,inst_17858);
} else {
if((state_val_17861 === (12))){
var state_17860__$1 = state_17860;
var statearr_17868_17888 = state_17860__$1;
(statearr_17868_17888[(2)] = null);

(statearr_17868_17888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17861 === (2))){
var state_17860__$1 = state_17860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17860__$1,(4),from);
} else {
if((state_val_17861 === (11))){
var inst_17849 = (state_17860[(2)]);
var state_17860__$1 = state_17860;
if(cljs.core.truth_(inst_17849)){
var statearr_17869_17889 = state_17860__$1;
(statearr_17869_17889[(1)] = (12));

} else {
var statearr_17870_17890 = state_17860__$1;
(statearr_17870_17890[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17861 === (9))){
var state_17860__$1 = state_17860;
var statearr_17871_17891 = state_17860__$1;
(statearr_17871_17891[(2)] = null);

(statearr_17871_17891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17861 === (5))){
var state_17860__$1 = state_17860;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17872_17892 = state_17860__$1;
(statearr_17872_17892[(1)] = (8));

} else {
var statearr_17873_17893 = state_17860__$1;
(statearr_17873_17893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17861 === (14))){
var inst_17854 = (state_17860[(2)]);
var state_17860__$1 = state_17860;
var statearr_17874_17894 = state_17860__$1;
(statearr_17874_17894[(2)] = inst_17854);

(statearr_17874_17894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17861 === (10))){
var inst_17846 = (state_17860[(2)]);
var state_17860__$1 = state_17860;
var statearr_17875_17895 = state_17860__$1;
(statearr_17875_17895[(2)] = inst_17846);

(statearr_17875_17895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17861 === (8))){
var inst_17843 = cljs.core.async.close_BANG_.call(null,to);
var state_17860__$1 = state_17860;
var statearr_17876_17896 = state_17860__$1;
(statearr_17876_17896[(2)] = inst_17843);

(statearr_17876_17896[(1)] = (10));


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
});})(c__15871__auto___17882))
;
return ((function (switch__15704__auto__,c__15871__auto___17882){
return (function() {
var cljs$core$async$state_machine__15705__auto__ = null;
var cljs$core$async$state_machine__15705__auto____0 = (function (){
var statearr_17877 = [null,null,null,null,null,null,null,null];
(statearr_17877[(0)] = cljs$core$async$state_machine__15705__auto__);

(statearr_17877[(1)] = (1));

return statearr_17877;
});
var cljs$core$async$state_machine__15705__auto____1 = (function (state_17860){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__.call(null,state_17860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e17878){if((e17878 instanceof Object)){
var ex__15708__auto__ = e17878;
var statearr_17879_17897 = state_17860;
(statearr_17879_17897[(5)] = ex__15708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17898 = state_17860;
state_17860 = G__17898;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$state_machine__15705__auto__ = function(state_17860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15705__auto____1.call(this,state_17860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15705__auto____0;
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15705__auto____1;
return cljs$core$async$state_machine__15705__auto__;
})()
;})(switch__15704__auto__,c__15871__auto___17882))
})();
var state__15873__auto__ = (function (){var statearr_17880 = f__15872__auto__.call(null);
(statearr_17880[(6)] = c__15871__auto___17882);

return statearr_17880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15873__auto__);
});})(c__15871__auto___17882))
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
return (function (p__17899){
var vec__17900 = p__17899;
var v = cljs.core.nth.call(null,vec__17900,(0),null);
var p = cljs.core.nth.call(null,vec__17900,(1),null);
var job = vec__17900;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15871__auto___18071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15871__auto___18071,res,vec__17900,v,p,job,jobs,results){
return (function (){
var f__15872__auto__ = (function (){var switch__15704__auto__ = ((function (c__15871__auto___18071,res,vec__17900,v,p,job,jobs,results){
return (function (state_17907){
var state_val_17908 = (state_17907[(1)]);
if((state_val_17908 === (1))){
var state_17907__$1 = state_17907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17907__$1,(2),res,v);
} else {
if((state_val_17908 === (2))){
var inst_17904 = (state_17907[(2)]);
var inst_17905 = cljs.core.async.close_BANG_.call(null,res);
var state_17907__$1 = (function (){var statearr_17909 = state_17907;
(statearr_17909[(7)] = inst_17904);

return statearr_17909;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17907__$1,inst_17905);
} else {
return null;
}
}
});})(c__15871__auto___18071,res,vec__17900,v,p,job,jobs,results))
;
return ((function (switch__15704__auto__,c__15871__auto___18071,res,vec__17900,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0 = (function (){
var statearr_17910 = [null,null,null,null,null,null,null,null];
(statearr_17910[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__);

(statearr_17910[(1)] = (1));

return statearr_17910;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1 = (function (state_17907){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__.call(null,state_17907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e17911){if((e17911 instanceof Object)){
var ex__15708__auto__ = e17911;
var statearr_17912_18072 = state_17907;
(statearr_17912_18072[(5)] = ex__15708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18073 = state_17907;
state_17907 = G__18073;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__ = function(state_17907){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1.call(this,state_17907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__;
})()
;})(switch__15704__auto__,c__15871__auto___18071,res,vec__17900,v,p,job,jobs,results))
})();
var state__15873__auto__ = (function (){var statearr_17913 = f__15872__auto__.call(null);
(statearr_17913[(6)] = c__15871__auto___18071);

return statearr_17913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15873__auto__);
});})(c__15871__auto___18071,res,vec__17900,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17914){
var vec__17915 = p__17914;
var v = cljs.core.nth.call(null,vec__17915,(0),null);
var p = cljs.core.nth.call(null,vec__17915,(1),null);
var job = vec__17915;
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
var n__4518__auto___18074 = n;
var __18075 = (0);
while(true){
if((__18075 < n__4518__auto___18074)){
var G__17918_18076 = type;
var G__17918_18077__$1 = (((G__17918_18076 instanceof cljs.core.Keyword))?G__17918_18076.fqn:null);
switch (G__17918_18077__$1) {
case "compute":
var c__15871__auto___18079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18075,c__15871__auto___18079,G__17918_18076,G__17918_18077__$1,n__4518__auto___18074,jobs,results,process,async){
return (function (){
var f__15872__auto__ = (function (){var switch__15704__auto__ = ((function (__18075,c__15871__auto___18079,G__17918_18076,G__17918_18077__$1,n__4518__auto___18074,jobs,results,process,async){
return (function (state_17931){
var state_val_17932 = (state_17931[(1)]);
if((state_val_17932 === (1))){
var state_17931__$1 = state_17931;
var statearr_17933_18080 = state_17931__$1;
(statearr_17933_18080[(2)] = null);

(statearr_17933_18080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (2))){
var state_17931__$1 = state_17931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17931__$1,(4),jobs);
} else {
if((state_val_17932 === (3))){
var inst_17929 = (state_17931[(2)]);
var state_17931__$1 = state_17931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17931__$1,inst_17929);
} else {
if((state_val_17932 === (4))){
var inst_17921 = (state_17931[(2)]);
var inst_17922 = process.call(null,inst_17921);
var state_17931__$1 = state_17931;
if(cljs.core.truth_(inst_17922)){
var statearr_17934_18081 = state_17931__$1;
(statearr_17934_18081[(1)] = (5));

} else {
var statearr_17935_18082 = state_17931__$1;
(statearr_17935_18082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (5))){
var state_17931__$1 = state_17931;
var statearr_17936_18083 = state_17931__$1;
(statearr_17936_18083[(2)] = null);

(statearr_17936_18083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (6))){
var state_17931__$1 = state_17931;
var statearr_17937_18084 = state_17931__$1;
(statearr_17937_18084[(2)] = null);

(statearr_17937_18084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (7))){
var inst_17927 = (state_17931[(2)]);
var state_17931__$1 = state_17931;
var statearr_17938_18085 = state_17931__$1;
(statearr_17938_18085[(2)] = inst_17927);

(statearr_17938_18085[(1)] = (3));


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
});})(__18075,c__15871__auto___18079,G__17918_18076,G__17918_18077__$1,n__4518__auto___18074,jobs,results,process,async))
;
return ((function (__18075,switch__15704__auto__,c__15871__auto___18079,G__17918_18076,G__17918_18077__$1,n__4518__auto___18074,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0 = (function (){
var statearr_17939 = [null,null,null,null,null,null,null];
(statearr_17939[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__);

(statearr_17939[(1)] = (1));

return statearr_17939;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1 = (function (state_17931){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__.call(null,state_17931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e17940){if((e17940 instanceof Object)){
var ex__15708__auto__ = e17940;
var statearr_17941_18086 = state_17931;
(statearr_17941_18086[(5)] = ex__15708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18087 = state_17931;
state_17931 = G__18087;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__ = function(state_17931){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1.call(this,state_17931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__;
})()
;})(__18075,switch__15704__auto__,c__15871__auto___18079,G__17918_18076,G__17918_18077__$1,n__4518__auto___18074,jobs,results,process,async))
})();
var state__15873__auto__ = (function (){var statearr_17942 = f__15872__auto__.call(null);
(statearr_17942[(6)] = c__15871__auto___18079);

return statearr_17942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15873__auto__);
});})(__18075,c__15871__auto___18079,G__17918_18076,G__17918_18077__$1,n__4518__auto___18074,jobs,results,process,async))
);


break;
case "async":
var c__15871__auto___18088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18075,c__15871__auto___18088,G__17918_18076,G__17918_18077__$1,n__4518__auto___18074,jobs,results,process,async){
return (function (){
var f__15872__auto__ = (function (){var switch__15704__auto__ = ((function (__18075,c__15871__auto___18088,G__17918_18076,G__17918_18077__$1,n__4518__auto___18074,jobs,results,process,async){
return (function (state_17955){
var state_val_17956 = (state_17955[(1)]);
if((state_val_17956 === (1))){
var state_17955__$1 = state_17955;
var statearr_17957_18089 = state_17955__$1;
(statearr_17957_18089[(2)] = null);

(statearr_17957_18089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17956 === (2))){
var state_17955__$1 = state_17955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17955__$1,(4),jobs);
} else {
if((state_val_17956 === (3))){
var inst_17953 = (state_17955[(2)]);
var state_17955__$1 = state_17955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17955__$1,inst_17953);
} else {
if((state_val_17956 === (4))){
var inst_17945 = (state_17955[(2)]);
var inst_17946 = async.call(null,inst_17945);
var state_17955__$1 = state_17955;
if(cljs.core.truth_(inst_17946)){
var statearr_17958_18090 = state_17955__$1;
(statearr_17958_18090[(1)] = (5));

} else {
var statearr_17959_18091 = state_17955__$1;
(statearr_17959_18091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17956 === (5))){
var state_17955__$1 = state_17955;
var statearr_17960_18092 = state_17955__$1;
(statearr_17960_18092[(2)] = null);

(statearr_17960_18092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17956 === (6))){
var state_17955__$1 = state_17955;
var statearr_17961_18093 = state_17955__$1;
(statearr_17961_18093[(2)] = null);

(statearr_17961_18093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17956 === (7))){
var inst_17951 = (state_17955[(2)]);
var state_17955__$1 = state_17955;
var statearr_17962_18094 = state_17955__$1;
(statearr_17962_18094[(2)] = inst_17951);

(statearr_17962_18094[(1)] = (3));


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
});})(__18075,c__15871__auto___18088,G__17918_18076,G__17918_18077__$1,n__4518__auto___18074,jobs,results,process,async))
;
return ((function (__18075,switch__15704__auto__,c__15871__auto___18088,G__17918_18076,G__17918_18077__$1,n__4518__auto___18074,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0 = (function (){
var statearr_17963 = [null,null,null,null,null,null,null];
(statearr_17963[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__);

(statearr_17963[(1)] = (1));

return statearr_17963;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1 = (function (state_17955){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__.call(null,state_17955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e17964){if((e17964 instanceof Object)){
var ex__15708__auto__ = e17964;
var statearr_17965_18095 = state_17955;
(statearr_17965_18095[(5)] = ex__15708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18096 = state_17955;
state_17955 = G__18096;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__ = function(state_17955){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1.call(this,state_17955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__;
})()
;})(__18075,switch__15704__auto__,c__15871__auto___18088,G__17918_18076,G__17918_18077__$1,n__4518__auto___18074,jobs,results,process,async))
})();
var state__15873__auto__ = (function (){var statearr_17966 = f__15872__auto__.call(null);
(statearr_17966[(6)] = c__15871__auto___18088);

return statearr_17966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15873__auto__);
});})(__18075,c__15871__auto___18088,G__17918_18076,G__17918_18077__$1,n__4518__auto___18074,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17918_18077__$1)].join('')));

}

var G__18097 = (__18075 + (1));
__18075 = G__18097;
continue;
} else {
}
break;
}

var c__15871__auto___18098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15871__auto___18098,jobs,results,process,async){
return (function (){
var f__15872__auto__ = (function (){var switch__15704__auto__ = ((function (c__15871__auto___18098,jobs,results,process,async){
return (function (state_17988){
var state_val_17989 = (state_17988[(1)]);
if((state_val_17989 === (7))){
var inst_17984 = (state_17988[(2)]);
var state_17988__$1 = state_17988;
var statearr_17990_18099 = state_17988__$1;
(statearr_17990_18099[(2)] = inst_17984);

(statearr_17990_18099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17989 === (1))){
var state_17988__$1 = state_17988;
var statearr_17991_18100 = state_17988__$1;
(statearr_17991_18100[(2)] = null);

(statearr_17991_18100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17989 === (4))){
var inst_17969 = (state_17988[(7)]);
var inst_17969__$1 = (state_17988[(2)]);
var inst_17970 = (inst_17969__$1 == null);
var state_17988__$1 = (function (){var statearr_17992 = state_17988;
(statearr_17992[(7)] = inst_17969__$1);

return statearr_17992;
})();
if(cljs.core.truth_(inst_17970)){
var statearr_17993_18101 = state_17988__$1;
(statearr_17993_18101[(1)] = (5));

} else {
var statearr_17994_18102 = state_17988__$1;
(statearr_17994_18102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17989 === (6))){
var inst_17974 = (state_17988[(8)]);
var inst_17969 = (state_17988[(7)]);
var inst_17974__$1 = cljs.core.async.chan.call(null,(1));
var inst_17975 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17976 = [inst_17969,inst_17974__$1];
var inst_17977 = (new cljs.core.PersistentVector(null,2,(5),inst_17975,inst_17976,null));
var state_17988__$1 = (function (){var statearr_17995 = state_17988;
(statearr_17995[(8)] = inst_17974__$1);

return statearr_17995;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17988__$1,(8),jobs,inst_17977);
} else {
if((state_val_17989 === (3))){
var inst_17986 = (state_17988[(2)]);
var state_17988__$1 = state_17988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17988__$1,inst_17986);
} else {
if((state_val_17989 === (2))){
var state_17988__$1 = state_17988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17988__$1,(4),from);
} else {
if((state_val_17989 === (9))){
var inst_17981 = (state_17988[(2)]);
var state_17988__$1 = (function (){var statearr_17996 = state_17988;
(statearr_17996[(9)] = inst_17981);

return statearr_17996;
})();
var statearr_17997_18103 = state_17988__$1;
(statearr_17997_18103[(2)] = null);

(statearr_17997_18103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17989 === (5))){
var inst_17972 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17988__$1 = state_17988;
var statearr_17998_18104 = state_17988__$1;
(statearr_17998_18104[(2)] = inst_17972);

(statearr_17998_18104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17989 === (8))){
var inst_17974 = (state_17988[(8)]);
var inst_17979 = (state_17988[(2)]);
var state_17988__$1 = (function (){var statearr_17999 = state_17988;
(statearr_17999[(10)] = inst_17979);

return statearr_17999;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17988__$1,(9),results,inst_17974);
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
});})(c__15871__auto___18098,jobs,results,process,async))
;
return ((function (switch__15704__auto__,c__15871__auto___18098,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0 = (function (){
var statearr_18000 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18000[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__);

(statearr_18000[(1)] = (1));

return statearr_18000;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1 = (function (state_17988){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__.call(null,state_17988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e18001){if((e18001 instanceof Object)){
var ex__15708__auto__ = e18001;
var statearr_18002_18105 = state_17988;
(statearr_18002_18105[(5)] = ex__15708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18106 = state_17988;
state_17988 = G__18106;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__ = function(state_17988){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1.call(this,state_17988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__;
})()
;})(switch__15704__auto__,c__15871__auto___18098,jobs,results,process,async))
})();
var state__15873__auto__ = (function (){var statearr_18003 = f__15872__auto__.call(null);
(statearr_18003[(6)] = c__15871__auto___18098);

return statearr_18003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15873__auto__);
});})(c__15871__auto___18098,jobs,results,process,async))
);


var c__15871__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15871__auto__,jobs,results,process,async){
return (function (){
var f__15872__auto__ = (function (){var switch__15704__auto__ = ((function (c__15871__auto__,jobs,results,process,async){
return (function (state_18041){
var state_val_18042 = (state_18041[(1)]);
if((state_val_18042 === (7))){
var inst_18037 = (state_18041[(2)]);
var state_18041__$1 = state_18041;
var statearr_18043_18107 = state_18041__$1;
(statearr_18043_18107[(2)] = inst_18037);

(statearr_18043_18107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (20))){
var state_18041__$1 = state_18041;
var statearr_18044_18108 = state_18041__$1;
(statearr_18044_18108[(2)] = null);

(statearr_18044_18108[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (1))){
var state_18041__$1 = state_18041;
var statearr_18045_18109 = state_18041__$1;
(statearr_18045_18109[(2)] = null);

(statearr_18045_18109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (4))){
var inst_18006 = (state_18041[(7)]);
var inst_18006__$1 = (state_18041[(2)]);
var inst_18007 = (inst_18006__$1 == null);
var state_18041__$1 = (function (){var statearr_18046 = state_18041;
(statearr_18046[(7)] = inst_18006__$1);

return statearr_18046;
})();
if(cljs.core.truth_(inst_18007)){
var statearr_18047_18110 = state_18041__$1;
(statearr_18047_18110[(1)] = (5));

} else {
var statearr_18048_18111 = state_18041__$1;
(statearr_18048_18111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (15))){
var inst_18019 = (state_18041[(8)]);
var state_18041__$1 = state_18041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18041__$1,(18),to,inst_18019);
} else {
if((state_val_18042 === (21))){
var inst_18032 = (state_18041[(2)]);
var state_18041__$1 = state_18041;
var statearr_18049_18112 = state_18041__$1;
(statearr_18049_18112[(2)] = inst_18032);

(statearr_18049_18112[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (13))){
var inst_18034 = (state_18041[(2)]);
var state_18041__$1 = (function (){var statearr_18050 = state_18041;
(statearr_18050[(9)] = inst_18034);

return statearr_18050;
})();
var statearr_18051_18113 = state_18041__$1;
(statearr_18051_18113[(2)] = null);

(statearr_18051_18113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (6))){
var inst_18006 = (state_18041[(7)]);
var state_18041__$1 = state_18041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18041__$1,(11),inst_18006);
} else {
if((state_val_18042 === (17))){
var inst_18027 = (state_18041[(2)]);
var state_18041__$1 = state_18041;
if(cljs.core.truth_(inst_18027)){
var statearr_18052_18114 = state_18041__$1;
(statearr_18052_18114[(1)] = (19));

} else {
var statearr_18053_18115 = state_18041__$1;
(statearr_18053_18115[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (3))){
var inst_18039 = (state_18041[(2)]);
var state_18041__$1 = state_18041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18041__$1,inst_18039);
} else {
if((state_val_18042 === (12))){
var inst_18016 = (state_18041[(10)]);
var state_18041__$1 = state_18041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18041__$1,(14),inst_18016);
} else {
if((state_val_18042 === (2))){
var state_18041__$1 = state_18041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18041__$1,(4),results);
} else {
if((state_val_18042 === (19))){
var state_18041__$1 = state_18041;
var statearr_18054_18116 = state_18041__$1;
(statearr_18054_18116[(2)] = null);

(statearr_18054_18116[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (11))){
var inst_18016 = (state_18041[(2)]);
var state_18041__$1 = (function (){var statearr_18055 = state_18041;
(statearr_18055[(10)] = inst_18016);

return statearr_18055;
})();
var statearr_18056_18117 = state_18041__$1;
(statearr_18056_18117[(2)] = null);

(statearr_18056_18117[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (9))){
var state_18041__$1 = state_18041;
var statearr_18057_18118 = state_18041__$1;
(statearr_18057_18118[(2)] = null);

(statearr_18057_18118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (5))){
var state_18041__$1 = state_18041;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18058_18119 = state_18041__$1;
(statearr_18058_18119[(1)] = (8));

} else {
var statearr_18059_18120 = state_18041__$1;
(statearr_18059_18120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (14))){
var inst_18019 = (state_18041[(8)]);
var inst_18021 = (state_18041[(11)]);
var inst_18019__$1 = (state_18041[(2)]);
var inst_18020 = (inst_18019__$1 == null);
var inst_18021__$1 = cljs.core.not.call(null,inst_18020);
var state_18041__$1 = (function (){var statearr_18060 = state_18041;
(statearr_18060[(8)] = inst_18019__$1);

(statearr_18060[(11)] = inst_18021__$1);

return statearr_18060;
})();
if(inst_18021__$1){
var statearr_18061_18121 = state_18041__$1;
(statearr_18061_18121[(1)] = (15));

} else {
var statearr_18062_18122 = state_18041__$1;
(statearr_18062_18122[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (16))){
var inst_18021 = (state_18041[(11)]);
var state_18041__$1 = state_18041;
var statearr_18063_18123 = state_18041__$1;
(statearr_18063_18123[(2)] = inst_18021);

(statearr_18063_18123[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (10))){
var inst_18013 = (state_18041[(2)]);
var state_18041__$1 = state_18041;
var statearr_18064_18124 = state_18041__$1;
(statearr_18064_18124[(2)] = inst_18013);

(statearr_18064_18124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (18))){
var inst_18024 = (state_18041[(2)]);
var state_18041__$1 = state_18041;
var statearr_18065_18125 = state_18041__$1;
(statearr_18065_18125[(2)] = inst_18024);

(statearr_18065_18125[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (8))){
var inst_18010 = cljs.core.async.close_BANG_.call(null,to);
var state_18041__$1 = state_18041;
var statearr_18066_18126 = state_18041__$1;
(statearr_18066_18126[(2)] = inst_18010);

(statearr_18066_18126[(1)] = (10));


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
});})(c__15871__auto__,jobs,results,process,async))
;
return ((function (switch__15704__auto__,c__15871__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0 = (function (){
var statearr_18067 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18067[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__);

(statearr_18067[(1)] = (1));

return statearr_18067;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1 = (function (state_18041){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__.call(null,state_18041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e18068){if((e18068 instanceof Object)){
var ex__15708__auto__ = e18068;
var statearr_18069_18127 = state_18041;
(statearr_18069_18127[(5)] = ex__15708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18128 = state_18041;
state_18041 = G__18128;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__ = function(state_18041){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1.call(this,state_18041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__;
})()
;})(switch__15704__auto__,c__15871__auto__,jobs,results,process,async))
})();
var state__15873__auto__ = (function (){var statearr_18070 = f__15872__auto__.call(null);
(statearr_18070[(6)] = c__15871__auto__);

return statearr_18070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15873__auto__);
});})(c__15871__auto__,jobs,results,process,async))
);

return c__15871__auto__;
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
var G__18130 = arguments.length;
switch (G__18130) {
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
var G__18133 = arguments.length;
switch (G__18133) {
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
var G__18136 = arguments.length;
switch (G__18136) {
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
var c__15871__auto___18185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15871__auto___18185,tc,fc){
return (function (){
var f__15872__auto__ = (function (){var switch__15704__auto__ = ((function (c__15871__auto___18185,tc,fc){
return (function (state_18162){
var state_val_18163 = (state_18162[(1)]);
if((state_val_18163 === (7))){
var inst_18158 = (state_18162[(2)]);
var state_18162__$1 = state_18162;
var statearr_18164_18186 = state_18162__$1;
(statearr_18164_18186[(2)] = inst_18158);

(statearr_18164_18186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18163 === (1))){
var state_18162__$1 = state_18162;
var statearr_18165_18187 = state_18162__$1;
(statearr_18165_18187[(2)] = null);

(statearr_18165_18187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18163 === (4))){
var inst_18139 = (state_18162[(7)]);
var inst_18139__$1 = (state_18162[(2)]);
var inst_18140 = (inst_18139__$1 == null);
var state_18162__$1 = (function (){var statearr_18166 = state_18162;
(statearr_18166[(7)] = inst_18139__$1);

return statearr_18166;
})();
if(cljs.core.truth_(inst_18140)){
var statearr_18167_18188 = state_18162__$1;
(statearr_18167_18188[(1)] = (5));

} else {
var statearr_18168_18189 = state_18162__$1;
(statearr_18168_18189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18163 === (13))){
var state_18162__$1 = state_18162;
var statearr_18169_18190 = state_18162__$1;
(statearr_18169_18190[(2)] = null);

(statearr_18169_18190[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18163 === (6))){
var inst_18139 = (state_18162[(7)]);
var inst_18145 = p.call(null,inst_18139);
var state_18162__$1 = state_18162;
if(cljs.core.truth_(inst_18145)){
var statearr_18170_18191 = state_18162__$1;
(statearr_18170_18191[(1)] = (9));

} else {
var statearr_18171_18192 = state_18162__$1;
(statearr_18171_18192[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18163 === (3))){
var inst_18160 = (state_18162[(2)]);
var state_18162__$1 = state_18162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18162__$1,inst_18160);
} else {
if((state_val_18163 === (12))){
var state_18162__$1 = state_18162;
var statearr_18172_18193 = state_18162__$1;
(statearr_18172_18193[(2)] = null);

(statearr_18172_18193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18163 === (2))){
var state_18162__$1 = state_18162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18162__$1,(4),ch);
} else {
if((state_val_18163 === (11))){
var inst_18139 = (state_18162[(7)]);
var inst_18149 = (state_18162[(2)]);
var state_18162__$1 = state_18162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18162__$1,(8),inst_18149,inst_18139);
} else {
if((state_val_18163 === (9))){
var state_18162__$1 = state_18162;
var statearr_18173_18194 = state_18162__$1;
(statearr_18173_18194[(2)] = tc);

(statearr_18173_18194[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18163 === (5))){
var inst_18142 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18143 = cljs.core.async.close_BANG_.call(null,fc);
var state_18162__$1 = (function (){var statearr_18174 = state_18162;
(statearr_18174[(8)] = inst_18142);

return statearr_18174;
})();
var statearr_18175_18195 = state_18162__$1;
(statearr_18175_18195[(2)] = inst_18143);

(statearr_18175_18195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18163 === (14))){
var inst_18156 = (state_18162[(2)]);
var state_18162__$1 = state_18162;
var statearr_18176_18196 = state_18162__$1;
(statearr_18176_18196[(2)] = inst_18156);

(statearr_18176_18196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18163 === (10))){
var state_18162__$1 = state_18162;
var statearr_18177_18197 = state_18162__$1;
(statearr_18177_18197[(2)] = fc);

(statearr_18177_18197[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18163 === (8))){
var inst_18151 = (state_18162[(2)]);
var state_18162__$1 = state_18162;
if(cljs.core.truth_(inst_18151)){
var statearr_18178_18198 = state_18162__$1;
(statearr_18178_18198[(1)] = (12));

} else {
var statearr_18179_18199 = state_18162__$1;
(statearr_18179_18199[(1)] = (13));

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
});})(c__15871__auto___18185,tc,fc))
;
return ((function (switch__15704__auto__,c__15871__auto___18185,tc,fc){
return (function() {
var cljs$core$async$state_machine__15705__auto__ = null;
var cljs$core$async$state_machine__15705__auto____0 = (function (){
var statearr_18180 = [null,null,null,null,null,null,null,null,null];
(statearr_18180[(0)] = cljs$core$async$state_machine__15705__auto__);

(statearr_18180[(1)] = (1));

return statearr_18180;
});
var cljs$core$async$state_machine__15705__auto____1 = (function (state_18162){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__.call(null,state_18162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e18181){if((e18181 instanceof Object)){
var ex__15708__auto__ = e18181;
var statearr_18182_18200 = state_18162;
(statearr_18182_18200[(5)] = ex__15708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18201 = state_18162;
state_18162 = G__18201;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$state_machine__15705__auto__ = function(state_18162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15705__auto____1.call(this,state_18162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15705__auto____0;
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15705__auto____1;
return cljs$core$async$state_machine__15705__auto__;
})()
;})(switch__15704__auto__,c__15871__auto___18185,tc,fc))
})();
var state__15873__auto__ = (function (){var statearr_18183 = f__15872__auto__.call(null);
(statearr_18183[(6)] = c__15871__auto___18185);

return statearr_18183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15873__auto__);
});})(c__15871__auto___18185,tc,fc))
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
var c__15871__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15871__auto__){
return (function (){
var f__15872__auto__ = (function (){var switch__15704__auto__ = ((function (c__15871__auto__){
return (function (state_18222){
var state_val_18223 = (state_18222[(1)]);
if((state_val_18223 === (7))){
var inst_18218 = (state_18222[(2)]);
var state_18222__$1 = state_18222;
var statearr_18224_18242 = state_18222__$1;
(statearr_18224_18242[(2)] = inst_18218);

(statearr_18224_18242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18223 === (1))){
var inst_18202 = init;
var state_18222__$1 = (function (){var statearr_18225 = state_18222;
(statearr_18225[(7)] = inst_18202);

return statearr_18225;
})();
var statearr_18226_18243 = state_18222__$1;
(statearr_18226_18243[(2)] = null);

(statearr_18226_18243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18223 === (4))){
var inst_18205 = (state_18222[(8)]);
var inst_18205__$1 = (state_18222[(2)]);
var inst_18206 = (inst_18205__$1 == null);
var state_18222__$1 = (function (){var statearr_18227 = state_18222;
(statearr_18227[(8)] = inst_18205__$1);

return statearr_18227;
})();
if(cljs.core.truth_(inst_18206)){
var statearr_18228_18244 = state_18222__$1;
(statearr_18228_18244[(1)] = (5));

} else {
var statearr_18229_18245 = state_18222__$1;
(statearr_18229_18245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18223 === (6))){
var inst_18209 = (state_18222[(9)]);
var inst_18205 = (state_18222[(8)]);
var inst_18202 = (state_18222[(7)]);
var inst_18209__$1 = f.call(null,inst_18202,inst_18205);
var inst_18210 = cljs.core.reduced_QMARK_.call(null,inst_18209__$1);
var state_18222__$1 = (function (){var statearr_18230 = state_18222;
(statearr_18230[(9)] = inst_18209__$1);

return statearr_18230;
})();
if(inst_18210){
var statearr_18231_18246 = state_18222__$1;
(statearr_18231_18246[(1)] = (8));

} else {
var statearr_18232_18247 = state_18222__$1;
(statearr_18232_18247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18223 === (3))){
var inst_18220 = (state_18222[(2)]);
var state_18222__$1 = state_18222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18222__$1,inst_18220);
} else {
if((state_val_18223 === (2))){
var state_18222__$1 = state_18222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18222__$1,(4),ch);
} else {
if((state_val_18223 === (9))){
var inst_18209 = (state_18222[(9)]);
var inst_18202 = inst_18209;
var state_18222__$1 = (function (){var statearr_18233 = state_18222;
(statearr_18233[(7)] = inst_18202);

return statearr_18233;
})();
var statearr_18234_18248 = state_18222__$1;
(statearr_18234_18248[(2)] = null);

(statearr_18234_18248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18223 === (5))){
var inst_18202 = (state_18222[(7)]);
var state_18222__$1 = state_18222;
var statearr_18235_18249 = state_18222__$1;
(statearr_18235_18249[(2)] = inst_18202);

(statearr_18235_18249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18223 === (10))){
var inst_18216 = (state_18222[(2)]);
var state_18222__$1 = state_18222;
var statearr_18236_18250 = state_18222__$1;
(statearr_18236_18250[(2)] = inst_18216);

(statearr_18236_18250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18223 === (8))){
var inst_18209 = (state_18222[(9)]);
var inst_18212 = cljs.core.deref.call(null,inst_18209);
var state_18222__$1 = state_18222;
var statearr_18237_18251 = state_18222__$1;
(statearr_18237_18251[(2)] = inst_18212);

(statearr_18237_18251[(1)] = (10));


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
});})(c__15871__auto__))
;
return ((function (switch__15704__auto__,c__15871__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15705__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15705__auto____0 = (function (){
var statearr_18238 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18238[(0)] = cljs$core$async$reduce_$_state_machine__15705__auto__);

(statearr_18238[(1)] = (1));

return statearr_18238;
});
var cljs$core$async$reduce_$_state_machine__15705__auto____1 = (function (state_18222){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__.call(null,state_18222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e18239){if((e18239 instanceof Object)){
var ex__15708__auto__ = e18239;
var statearr_18240_18252 = state_18222;
(statearr_18240_18252[(5)] = ex__15708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18253 = state_18222;
state_18222 = G__18253;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15705__auto__ = function(state_18222){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15705__auto____1.call(this,state_18222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15705__auto____0;
cljs$core$async$reduce_$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15705__auto____1;
return cljs$core$async$reduce_$_state_machine__15705__auto__;
})()
;})(switch__15704__auto__,c__15871__auto__))
})();
var state__15873__auto__ = (function (){var statearr_18241 = f__15872__auto__.call(null);
(statearr_18241[(6)] = c__15871__auto__);

return statearr_18241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15873__auto__);
});})(c__15871__auto__))
);

return c__15871__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__15871__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15871__auto__,f__$1){
return (function (){
var f__15872__auto__ = (function (){var switch__15704__auto__ = ((function (c__15871__auto__,f__$1){
return (function (state_18259){
var state_val_18260 = (state_18259[(1)]);
if((state_val_18260 === (1))){
var inst_18254 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_18259__$1 = state_18259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18259__$1,(2),inst_18254);
} else {
if((state_val_18260 === (2))){
var inst_18256 = (state_18259[(2)]);
var inst_18257 = f__$1.call(null,inst_18256);
var state_18259__$1 = state_18259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18259__$1,inst_18257);
} else {
return null;
}
}
});})(c__15871__auto__,f__$1))
;
return ((function (switch__15704__auto__,c__15871__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15705__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15705__auto____0 = (function (){
var statearr_18261 = [null,null,null,null,null,null,null];
(statearr_18261[(0)] = cljs$core$async$transduce_$_state_machine__15705__auto__);

(statearr_18261[(1)] = (1));

return statearr_18261;
});
var cljs$core$async$transduce_$_state_machine__15705__auto____1 = (function (state_18259){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__.call(null,state_18259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e18262){if((e18262 instanceof Object)){
var ex__15708__auto__ = e18262;
var statearr_18263_18265 = state_18259;
(statearr_18263_18265[(5)] = ex__15708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18266 = state_18259;
state_18259 = G__18266;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15705__auto__ = function(state_18259){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15705__auto____1.call(this,state_18259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15705__auto____0;
cljs$core$async$transduce_$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15705__auto____1;
return cljs$core$async$transduce_$_state_machine__15705__auto__;
})()
;})(switch__15704__auto__,c__15871__auto__,f__$1))
})();
var state__15873__auto__ = (function (){var statearr_18264 = f__15872__auto__.call(null);
(statearr_18264[(6)] = c__15871__auto__);

return statearr_18264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15873__auto__);
});})(c__15871__auto__,f__$1))
);

return c__15871__auto__;
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
var G__18268 = arguments.length;
switch (G__18268) {
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
var c__15871__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15871__auto__){
return (function (){
var f__15872__auto__ = (function (){var switch__15704__auto__ = ((function (c__15871__auto__){
return (function (state_18293){
var state_val_18294 = (state_18293[(1)]);
if((state_val_18294 === (7))){
var inst_18275 = (state_18293[(2)]);
var state_18293__$1 = state_18293;
var statearr_18295_18316 = state_18293__$1;
(statearr_18295_18316[(2)] = inst_18275);

(statearr_18295_18316[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (1))){
var inst_18269 = cljs.core.seq.call(null,coll);
var inst_18270 = inst_18269;
var state_18293__$1 = (function (){var statearr_18296 = state_18293;
(statearr_18296[(7)] = inst_18270);

return statearr_18296;
})();
var statearr_18297_18317 = state_18293__$1;
(statearr_18297_18317[(2)] = null);

(statearr_18297_18317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (4))){
var inst_18270 = (state_18293[(7)]);
var inst_18273 = cljs.core.first.call(null,inst_18270);
var state_18293__$1 = state_18293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18293__$1,(7),ch,inst_18273);
} else {
if((state_val_18294 === (13))){
var inst_18287 = (state_18293[(2)]);
var state_18293__$1 = state_18293;
var statearr_18298_18318 = state_18293__$1;
(statearr_18298_18318[(2)] = inst_18287);

(statearr_18298_18318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (6))){
var inst_18278 = (state_18293[(2)]);
var state_18293__$1 = state_18293;
if(cljs.core.truth_(inst_18278)){
var statearr_18299_18319 = state_18293__$1;
(statearr_18299_18319[(1)] = (8));

} else {
var statearr_18300_18320 = state_18293__$1;
(statearr_18300_18320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (3))){
var inst_18291 = (state_18293[(2)]);
var state_18293__$1 = state_18293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18293__$1,inst_18291);
} else {
if((state_val_18294 === (12))){
var state_18293__$1 = state_18293;
var statearr_18301_18321 = state_18293__$1;
(statearr_18301_18321[(2)] = null);

(statearr_18301_18321[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (2))){
var inst_18270 = (state_18293[(7)]);
var state_18293__$1 = state_18293;
if(cljs.core.truth_(inst_18270)){
var statearr_18302_18322 = state_18293__$1;
(statearr_18302_18322[(1)] = (4));

} else {
var statearr_18303_18323 = state_18293__$1;
(statearr_18303_18323[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (11))){
var inst_18284 = cljs.core.async.close_BANG_.call(null,ch);
var state_18293__$1 = state_18293;
var statearr_18304_18324 = state_18293__$1;
(statearr_18304_18324[(2)] = inst_18284);

(statearr_18304_18324[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (9))){
var state_18293__$1 = state_18293;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18305_18325 = state_18293__$1;
(statearr_18305_18325[(1)] = (11));

} else {
var statearr_18306_18326 = state_18293__$1;
(statearr_18306_18326[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (5))){
var inst_18270 = (state_18293[(7)]);
var state_18293__$1 = state_18293;
var statearr_18307_18327 = state_18293__$1;
(statearr_18307_18327[(2)] = inst_18270);

(statearr_18307_18327[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (10))){
var inst_18289 = (state_18293[(2)]);
var state_18293__$1 = state_18293;
var statearr_18308_18328 = state_18293__$1;
(statearr_18308_18328[(2)] = inst_18289);

(statearr_18308_18328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (8))){
var inst_18270 = (state_18293[(7)]);
var inst_18280 = cljs.core.next.call(null,inst_18270);
var inst_18270__$1 = inst_18280;
var state_18293__$1 = (function (){var statearr_18309 = state_18293;
(statearr_18309[(7)] = inst_18270__$1);

return statearr_18309;
})();
var statearr_18310_18329 = state_18293__$1;
(statearr_18310_18329[(2)] = null);

(statearr_18310_18329[(1)] = (2));


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
});})(c__15871__auto__))
;
return ((function (switch__15704__auto__,c__15871__auto__){
return (function() {
var cljs$core$async$state_machine__15705__auto__ = null;
var cljs$core$async$state_machine__15705__auto____0 = (function (){
var statearr_18311 = [null,null,null,null,null,null,null,null];
(statearr_18311[(0)] = cljs$core$async$state_machine__15705__auto__);

(statearr_18311[(1)] = (1));

return statearr_18311;
});
var cljs$core$async$state_machine__15705__auto____1 = (function (state_18293){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__.call(null,state_18293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e18312){if((e18312 instanceof Object)){
var ex__15708__auto__ = e18312;
var statearr_18313_18330 = state_18293;
(statearr_18313_18330[(5)] = ex__15708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18331 = state_18293;
state_18293 = G__18331;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$state_machine__15705__auto__ = function(state_18293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15705__auto____1.call(this,state_18293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15705__auto____0;
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15705__auto____1;
return cljs$core$async$state_machine__15705__auto__;
})()
;})(switch__15704__auto__,c__15871__auto__))
})();
var state__15873__auto__ = (function (){var statearr_18314 = f__15872__auto__.call(null);
(statearr_18314[(6)] = c__15871__auto__);

return statearr_18314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15873__auto__);
});})(c__15871__auto__))
);

return c__15871__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18332 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18332 = (function (ch,cs,meta18333){
this.ch = ch;
this.cs = cs;
this.meta18333 = meta18333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18334,meta18333__$1){
var self__ = this;
var _18334__$1 = this;
return (new cljs.core.async.t_cljs$core$async18332(self__.ch,self__.cs,meta18333__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18332.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18334){
var self__ = this;
var _18334__$1 = this;
return self__.meta18333;
});})(cs))
;

cljs.core.async.t_cljs$core$async18332.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18332.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18332.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18332.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18332.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18332.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18332.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18333","meta18333",-598966980,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18332.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18332";

cljs.core.async.t_cljs$core$async18332.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async18332");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18332.
 */
cljs.core.async.__GT_t_cljs$core$async18332 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18332(ch__$1,cs__$1,meta18333){
return (new cljs.core.async.t_cljs$core$async18332(ch__$1,cs__$1,meta18333));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18332(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15871__auto___18554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15871__auto___18554,cs,m,dchan,dctr,done){
return (function (){
var f__15872__auto__ = (function (){var switch__15704__auto__ = ((function (c__15871__auto___18554,cs,m,dchan,dctr,done){
return (function (state_18469){
var state_val_18470 = (state_18469[(1)]);
if((state_val_18470 === (7))){
var inst_18465 = (state_18469[(2)]);
var state_18469__$1 = state_18469;
var statearr_18471_18555 = state_18469__$1;
(statearr_18471_18555[(2)] = inst_18465);

(statearr_18471_18555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (20))){
var inst_18368 = (state_18469[(7)]);
var inst_18380 = cljs.core.first.call(null,inst_18368);
var inst_18381 = cljs.core.nth.call(null,inst_18380,(0),null);
var inst_18382 = cljs.core.nth.call(null,inst_18380,(1),null);
var state_18469__$1 = (function (){var statearr_18472 = state_18469;
(statearr_18472[(8)] = inst_18381);

return statearr_18472;
})();
if(cljs.core.truth_(inst_18382)){
var statearr_18473_18556 = state_18469__$1;
(statearr_18473_18556[(1)] = (22));

} else {
var statearr_18474_18557 = state_18469__$1;
(statearr_18474_18557[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (27))){
var inst_18337 = (state_18469[(9)]);
var inst_18410 = (state_18469[(10)]);
var inst_18417 = (state_18469[(11)]);
var inst_18412 = (state_18469[(12)]);
var inst_18417__$1 = cljs.core._nth.call(null,inst_18410,inst_18412);
var inst_18418 = cljs.core.async.put_BANG_.call(null,inst_18417__$1,inst_18337,done);
var state_18469__$1 = (function (){var statearr_18475 = state_18469;
(statearr_18475[(11)] = inst_18417__$1);

return statearr_18475;
})();
if(cljs.core.truth_(inst_18418)){
var statearr_18476_18558 = state_18469__$1;
(statearr_18476_18558[(1)] = (30));

} else {
var statearr_18477_18559 = state_18469__$1;
(statearr_18477_18559[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (1))){
var state_18469__$1 = state_18469;
var statearr_18478_18560 = state_18469__$1;
(statearr_18478_18560[(2)] = null);

(statearr_18478_18560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (24))){
var inst_18368 = (state_18469[(7)]);
var inst_18387 = (state_18469[(2)]);
var inst_18388 = cljs.core.next.call(null,inst_18368);
var inst_18346 = inst_18388;
var inst_18347 = null;
var inst_18348 = (0);
var inst_18349 = (0);
var state_18469__$1 = (function (){var statearr_18479 = state_18469;
(statearr_18479[(13)] = inst_18387);

(statearr_18479[(14)] = inst_18347);

(statearr_18479[(15)] = inst_18348);

(statearr_18479[(16)] = inst_18349);

(statearr_18479[(17)] = inst_18346);

return statearr_18479;
})();
var statearr_18480_18561 = state_18469__$1;
(statearr_18480_18561[(2)] = null);

(statearr_18480_18561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (39))){
var state_18469__$1 = state_18469;
var statearr_18484_18562 = state_18469__$1;
(statearr_18484_18562[(2)] = null);

(statearr_18484_18562[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (4))){
var inst_18337 = (state_18469[(9)]);
var inst_18337__$1 = (state_18469[(2)]);
var inst_18338 = (inst_18337__$1 == null);
var state_18469__$1 = (function (){var statearr_18485 = state_18469;
(statearr_18485[(9)] = inst_18337__$1);

return statearr_18485;
})();
if(cljs.core.truth_(inst_18338)){
var statearr_18486_18563 = state_18469__$1;
(statearr_18486_18563[(1)] = (5));

} else {
var statearr_18487_18564 = state_18469__$1;
(statearr_18487_18564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (15))){
var inst_18347 = (state_18469[(14)]);
var inst_18348 = (state_18469[(15)]);
var inst_18349 = (state_18469[(16)]);
var inst_18346 = (state_18469[(17)]);
var inst_18364 = (state_18469[(2)]);
var inst_18365 = (inst_18349 + (1));
var tmp18481 = inst_18347;
var tmp18482 = inst_18348;
var tmp18483 = inst_18346;
var inst_18346__$1 = tmp18483;
var inst_18347__$1 = tmp18481;
var inst_18348__$1 = tmp18482;
var inst_18349__$1 = inst_18365;
var state_18469__$1 = (function (){var statearr_18488 = state_18469;
(statearr_18488[(18)] = inst_18364);

(statearr_18488[(14)] = inst_18347__$1);

(statearr_18488[(15)] = inst_18348__$1);

(statearr_18488[(16)] = inst_18349__$1);

(statearr_18488[(17)] = inst_18346__$1);

return statearr_18488;
})();
var statearr_18489_18565 = state_18469__$1;
(statearr_18489_18565[(2)] = null);

(statearr_18489_18565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (21))){
var inst_18391 = (state_18469[(2)]);
var state_18469__$1 = state_18469;
var statearr_18493_18566 = state_18469__$1;
(statearr_18493_18566[(2)] = inst_18391);

(statearr_18493_18566[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (31))){
var inst_18417 = (state_18469[(11)]);
var inst_18421 = done.call(null,null);
var inst_18422 = cljs.core.async.untap_STAR_.call(null,m,inst_18417);
var state_18469__$1 = (function (){var statearr_18494 = state_18469;
(statearr_18494[(19)] = inst_18421);

return statearr_18494;
})();
var statearr_18495_18567 = state_18469__$1;
(statearr_18495_18567[(2)] = inst_18422);

(statearr_18495_18567[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (32))){
var inst_18411 = (state_18469[(20)]);
var inst_18410 = (state_18469[(10)]);
var inst_18412 = (state_18469[(12)]);
var inst_18409 = (state_18469[(21)]);
var inst_18424 = (state_18469[(2)]);
var inst_18425 = (inst_18412 + (1));
var tmp18490 = inst_18411;
var tmp18491 = inst_18410;
var tmp18492 = inst_18409;
var inst_18409__$1 = tmp18492;
var inst_18410__$1 = tmp18491;
var inst_18411__$1 = tmp18490;
var inst_18412__$1 = inst_18425;
var state_18469__$1 = (function (){var statearr_18496 = state_18469;
(statearr_18496[(20)] = inst_18411__$1);

(statearr_18496[(10)] = inst_18410__$1);

(statearr_18496[(22)] = inst_18424);

(statearr_18496[(12)] = inst_18412__$1);

(statearr_18496[(21)] = inst_18409__$1);

return statearr_18496;
})();
var statearr_18497_18568 = state_18469__$1;
(statearr_18497_18568[(2)] = null);

(statearr_18497_18568[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (40))){
var inst_18437 = (state_18469[(23)]);
var inst_18441 = done.call(null,null);
var inst_18442 = cljs.core.async.untap_STAR_.call(null,m,inst_18437);
var state_18469__$1 = (function (){var statearr_18498 = state_18469;
(statearr_18498[(24)] = inst_18441);

return statearr_18498;
})();
var statearr_18499_18569 = state_18469__$1;
(statearr_18499_18569[(2)] = inst_18442);

(statearr_18499_18569[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (33))){
var inst_18428 = (state_18469[(25)]);
var inst_18430 = cljs.core.chunked_seq_QMARK_.call(null,inst_18428);
var state_18469__$1 = state_18469;
if(inst_18430){
var statearr_18500_18570 = state_18469__$1;
(statearr_18500_18570[(1)] = (36));

} else {
var statearr_18501_18571 = state_18469__$1;
(statearr_18501_18571[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (13))){
var inst_18358 = (state_18469[(26)]);
var inst_18361 = cljs.core.async.close_BANG_.call(null,inst_18358);
var state_18469__$1 = state_18469;
var statearr_18502_18572 = state_18469__$1;
(statearr_18502_18572[(2)] = inst_18361);

(statearr_18502_18572[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (22))){
var inst_18381 = (state_18469[(8)]);
var inst_18384 = cljs.core.async.close_BANG_.call(null,inst_18381);
var state_18469__$1 = state_18469;
var statearr_18503_18573 = state_18469__$1;
(statearr_18503_18573[(2)] = inst_18384);

(statearr_18503_18573[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (36))){
var inst_18428 = (state_18469[(25)]);
var inst_18432 = cljs.core.chunk_first.call(null,inst_18428);
var inst_18433 = cljs.core.chunk_rest.call(null,inst_18428);
var inst_18434 = cljs.core.count.call(null,inst_18432);
var inst_18409 = inst_18433;
var inst_18410 = inst_18432;
var inst_18411 = inst_18434;
var inst_18412 = (0);
var state_18469__$1 = (function (){var statearr_18504 = state_18469;
(statearr_18504[(20)] = inst_18411);

(statearr_18504[(10)] = inst_18410);

(statearr_18504[(12)] = inst_18412);

(statearr_18504[(21)] = inst_18409);

return statearr_18504;
})();
var statearr_18505_18574 = state_18469__$1;
(statearr_18505_18574[(2)] = null);

(statearr_18505_18574[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (41))){
var inst_18428 = (state_18469[(25)]);
var inst_18444 = (state_18469[(2)]);
var inst_18445 = cljs.core.next.call(null,inst_18428);
var inst_18409 = inst_18445;
var inst_18410 = null;
var inst_18411 = (0);
var inst_18412 = (0);
var state_18469__$1 = (function (){var statearr_18506 = state_18469;
(statearr_18506[(20)] = inst_18411);

(statearr_18506[(27)] = inst_18444);

(statearr_18506[(10)] = inst_18410);

(statearr_18506[(12)] = inst_18412);

(statearr_18506[(21)] = inst_18409);

return statearr_18506;
})();
var statearr_18507_18575 = state_18469__$1;
(statearr_18507_18575[(2)] = null);

(statearr_18507_18575[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (43))){
var state_18469__$1 = state_18469;
var statearr_18508_18576 = state_18469__$1;
(statearr_18508_18576[(2)] = null);

(statearr_18508_18576[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (29))){
var inst_18453 = (state_18469[(2)]);
var state_18469__$1 = state_18469;
var statearr_18509_18577 = state_18469__$1;
(statearr_18509_18577[(2)] = inst_18453);

(statearr_18509_18577[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (44))){
var inst_18462 = (state_18469[(2)]);
var state_18469__$1 = (function (){var statearr_18510 = state_18469;
(statearr_18510[(28)] = inst_18462);

return statearr_18510;
})();
var statearr_18511_18578 = state_18469__$1;
(statearr_18511_18578[(2)] = null);

(statearr_18511_18578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (6))){
var inst_18401 = (state_18469[(29)]);
var inst_18400 = cljs.core.deref.call(null,cs);
var inst_18401__$1 = cljs.core.keys.call(null,inst_18400);
var inst_18402 = cljs.core.count.call(null,inst_18401__$1);
var inst_18403 = cljs.core.reset_BANG_.call(null,dctr,inst_18402);
var inst_18408 = cljs.core.seq.call(null,inst_18401__$1);
var inst_18409 = inst_18408;
var inst_18410 = null;
var inst_18411 = (0);
var inst_18412 = (0);
var state_18469__$1 = (function (){var statearr_18512 = state_18469;
(statearr_18512[(20)] = inst_18411);

(statearr_18512[(29)] = inst_18401__$1);

(statearr_18512[(30)] = inst_18403);

(statearr_18512[(10)] = inst_18410);

(statearr_18512[(12)] = inst_18412);

(statearr_18512[(21)] = inst_18409);

return statearr_18512;
})();
var statearr_18513_18579 = state_18469__$1;
(statearr_18513_18579[(2)] = null);

(statearr_18513_18579[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (28))){
var inst_18409 = (state_18469[(21)]);
var inst_18428 = (state_18469[(25)]);
var inst_18428__$1 = cljs.core.seq.call(null,inst_18409);
var state_18469__$1 = (function (){var statearr_18514 = state_18469;
(statearr_18514[(25)] = inst_18428__$1);

return statearr_18514;
})();
if(inst_18428__$1){
var statearr_18515_18580 = state_18469__$1;
(statearr_18515_18580[(1)] = (33));

} else {
var statearr_18516_18581 = state_18469__$1;
(statearr_18516_18581[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (25))){
var inst_18411 = (state_18469[(20)]);
var inst_18412 = (state_18469[(12)]);
var inst_18414 = (inst_18412 < inst_18411);
var inst_18415 = inst_18414;
var state_18469__$1 = state_18469;
if(cljs.core.truth_(inst_18415)){
var statearr_18517_18582 = state_18469__$1;
(statearr_18517_18582[(1)] = (27));

} else {
var statearr_18518_18583 = state_18469__$1;
(statearr_18518_18583[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (34))){
var state_18469__$1 = state_18469;
var statearr_18519_18584 = state_18469__$1;
(statearr_18519_18584[(2)] = null);

(statearr_18519_18584[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (17))){
var state_18469__$1 = state_18469;
var statearr_18520_18585 = state_18469__$1;
(statearr_18520_18585[(2)] = null);

(statearr_18520_18585[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (3))){
var inst_18467 = (state_18469[(2)]);
var state_18469__$1 = state_18469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18469__$1,inst_18467);
} else {
if((state_val_18470 === (12))){
var inst_18396 = (state_18469[(2)]);
var state_18469__$1 = state_18469;
var statearr_18521_18586 = state_18469__$1;
(statearr_18521_18586[(2)] = inst_18396);

(statearr_18521_18586[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (2))){
var state_18469__$1 = state_18469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18469__$1,(4),ch);
} else {
if((state_val_18470 === (23))){
var state_18469__$1 = state_18469;
var statearr_18522_18587 = state_18469__$1;
(statearr_18522_18587[(2)] = null);

(statearr_18522_18587[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (35))){
var inst_18451 = (state_18469[(2)]);
var state_18469__$1 = state_18469;
var statearr_18523_18588 = state_18469__$1;
(statearr_18523_18588[(2)] = inst_18451);

(statearr_18523_18588[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (19))){
var inst_18368 = (state_18469[(7)]);
var inst_18372 = cljs.core.chunk_first.call(null,inst_18368);
var inst_18373 = cljs.core.chunk_rest.call(null,inst_18368);
var inst_18374 = cljs.core.count.call(null,inst_18372);
var inst_18346 = inst_18373;
var inst_18347 = inst_18372;
var inst_18348 = inst_18374;
var inst_18349 = (0);
var state_18469__$1 = (function (){var statearr_18524 = state_18469;
(statearr_18524[(14)] = inst_18347);

(statearr_18524[(15)] = inst_18348);

(statearr_18524[(16)] = inst_18349);

(statearr_18524[(17)] = inst_18346);

return statearr_18524;
})();
var statearr_18525_18589 = state_18469__$1;
(statearr_18525_18589[(2)] = null);

(statearr_18525_18589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (11))){
var inst_18368 = (state_18469[(7)]);
var inst_18346 = (state_18469[(17)]);
var inst_18368__$1 = cljs.core.seq.call(null,inst_18346);
var state_18469__$1 = (function (){var statearr_18526 = state_18469;
(statearr_18526[(7)] = inst_18368__$1);

return statearr_18526;
})();
if(inst_18368__$1){
var statearr_18527_18590 = state_18469__$1;
(statearr_18527_18590[(1)] = (16));

} else {
var statearr_18528_18591 = state_18469__$1;
(statearr_18528_18591[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (9))){
var inst_18398 = (state_18469[(2)]);
var state_18469__$1 = state_18469;
var statearr_18529_18592 = state_18469__$1;
(statearr_18529_18592[(2)] = inst_18398);

(statearr_18529_18592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (5))){
var inst_18344 = cljs.core.deref.call(null,cs);
var inst_18345 = cljs.core.seq.call(null,inst_18344);
var inst_18346 = inst_18345;
var inst_18347 = null;
var inst_18348 = (0);
var inst_18349 = (0);
var state_18469__$1 = (function (){var statearr_18530 = state_18469;
(statearr_18530[(14)] = inst_18347);

(statearr_18530[(15)] = inst_18348);

(statearr_18530[(16)] = inst_18349);

(statearr_18530[(17)] = inst_18346);

return statearr_18530;
})();
var statearr_18531_18593 = state_18469__$1;
(statearr_18531_18593[(2)] = null);

(statearr_18531_18593[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (14))){
var state_18469__$1 = state_18469;
var statearr_18532_18594 = state_18469__$1;
(statearr_18532_18594[(2)] = null);

(statearr_18532_18594[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (45))){
var inst_18459 = (state_18469[(2)]);
var state_18469__$1 = state_18469;
var statearr_18533_18595 = state_18469__$1;
(statearr_18533_18595[(2)] = inst_18459);

(statearr_18533_18595[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (26))){
var inst_18401 = (state_18469[(29)]);
var inst_18455 = (state_18469[(2)]);
var inst_18456 = cljs.core.seq.call(null,inst_18401);
var state_18469__$1 = (function (){var statearr_18534 = state_18469;
(statearr_18534[(31)] = inst_18455);

return statearr_18534;
})();
if(inst_18456){
var statearr_18535_18596 = state_18469__$1;
(statearr_18535_18596[(1)] = (42));

} else {
var statearr_18536_18597 = state_18469__$1;
(statearr_18536_18597[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (16))){
var inst_18368 = (state_18469[(7)]);
var inst_18370 = cljs.core.chunked_seq_QMARK_.call(null,inst_18368);
var state_18469__$1 = state_18469;
if(inst_18370){
var statearr_18537_18598 = state_18469__$1;
(statearr_18537_18598[(1)] = (19));

} else {
var statearr_18538_18599 = state_18469__$1;
(statearr_18538_18599[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (38))){
var inst_18448 = (state_18469[(2)]);
var state_18469__$1 = state_18469;
var statearr_18539_18600 = state_18469__$1;
(statearr_18539_18600[(2)] = inst_18448);

(statearr_18539_18600[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (30))){
var state_18469__$1 = state_18469;
var statearr_18540_18601 = state_18469__$1;
(statearr_18540_18601[(2)] = null);

(statearr_18540_18601[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (10))){
var inst_18347 = (state_18469[(14)]);
var inst_18349 = (state_18469[(16)]);
var inst_18357 = cljs.core._nth.call(null,inst_18347,inst_18349);
var inst_18358 = cljs.core.nth.call(null,inst_18357,(0),null);
var inst_18359 = cljs.core.nth.call(null,inst_18357,(1),null);
var state_18469__$1 = (function (){var statearr_18541 = state_18469;
(statearr_18541[(26)] = inst_18358);

return statearr_18541;
})();
if(cljs.core.truth_(inst_18359)){
var statearr_18542_18602 = state_18469__$1;
(statearr_18542_18602[(1)] = (13));

} else {
var statearr_18543_18603 = state_18469__$1;
(statearr_18543_18603[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (18))){
var inst_18394 = (state_18469[(2)]);
var state_18469__$1 = state_18469;
var statearr_18544_18604 = state_18469__$1;
(statearr_18544_18604[(2)] = inst_18394);

(statearr_18544_18604[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (42))){
var state_18469__$1 = state_18469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18469__$1,(45),dchan);
} else {
if((state_val_18470 === (37))){
var inst_18337 = (state_18469[(9)]);
var inst_18437 = (state_18469[(23)]);
var inst_18428 = (state_18469[(25)]);
var inst_18437__$1 = cljs.core.first.call(null,inst_18428);
var inst_18438 = cljs.core.async.put_BANG_.call(null,inst_18437__$1,inst_18337,done);
var state_18469__$1 = (function (){var statearr_18545 = state_18469;
(statearr_18545[(23)] = inst_18437__$1);

return statearr_18545;
})();
if(cljs.core.truth_(inst_18438)){
var statearr_18546_18605 = state_18469__$1;
(statearr_18546_18605[(1)] = (39));

} else {
var statearr_18547_18606 = state_18469__$1;
(statearr_18547_18606[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (8))){
var inst_18348 = (state_18469[(15)]);
var inst_18349 = (state_18469[(16)]);
var inst_18351 = (inst_18349 < inst_18348);
var inst_18352 = inst_18351;
var state_18469__$1 = state_18469;
if(cljs.core.truth_(inst_18352)){
var statearr_18548_18607 = state_18469__$1;
(statearr_18548_18607[(1)] = (10));

} else {
var statearr_18549_18608 = state_18469__$1;
(statearr_18549_18608[(1)] = (11));

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
});})(c__15871__auto___18554,cs,m,dchan,dctr,done))
;
return ((function (switch__15704__auto__,c__15871__auto___18554,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15705__auto__ = null;
var cljs$core$async$mult_$_state_machine__15705__auto____0 = (function (){
var statearr_18550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18550[(0)] = cljs$core$async$mult_$_state_machine__15705__auto__);

(statearr_18550[(1)] = (1));

return statearr_18550;
});
var cljs$core$async$mult_$_state_machine__15705__auto____1 = (function (state_18469){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__.call(null,state_18469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e18551){if((e18551 instanceof Object)){
var ex__15708__auto__ = e18551;
var statearr_18552_18609 = state_18469;
(statearr_18552_18609[(5)] = ex__15708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18610 = state_18469;
state_18469 = G__18610;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15705__auto__ = function(state_18469){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15705__auto____1.call(this,state_18469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15705__auto____0;
cljs$core$async$mult_$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15705__auto____1;
return cljs$core$async$mult_$_state_machine__15705__auto__;
})()
;})(switch__15704__auto__,c__15871__auto___18554,cs,m,dchan,dctr,done))
})();
var state__15873__auto__ = (function (){var statearr_18553 = f__15872__auto__.call(null);
(statearr_18553[(6)] = c__15871__auto___18554);

return statearr_18553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15873__auto__);
});})(c__15871__auto___18554,cs,m,dchan,dctr,done))
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
var G__18612 = arguments.length;
switch (G__18612) {
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
var len__4641__auto___18624 = arguments.length;
var i__4642__auto___18625 = (0);
while(true){
if((i__4642__auto___18625 < len__4641__auto___18624)){
args__4647__auto__.push((arguments[i__4642__auto___18625]));

var G__18626 = (i__4642__auto___18625 + (1));
i__4642__auto___18625 = G__18626;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18618){
var map__18619 = p__18618;
var map__18619__$1 = (((((!((map__18619 == null))))?(((((map__18619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18619):map__18619);
var opts = map__18619__$1;
var statearr_18621_18627 = state;
(statearr_18621_18627[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__18619,map__18619__$1,opts){
return (function (val){
var statearr_18622_18628 = state;
(statearr_18622_18628[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18619,map__18619__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_18623_18629 = state;
(statearr_18623_18629[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18614){
var G__18615 = cljs.core.first.call(null,seq18614);
var seq18614__$1 = cljs.core.next.call(null,seq18614);
var G__18616 = cljs.core.first.call(null,seq18614__$1);
var seq18614__$2 = cljs.core.next.call(null,seq18614__$1);
var G__18617 = cljs.core.first.call(null,seq18614__$2);
var seq18614__$3 = cljs.core.next.call(null,seq18614__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18615,G__18616,G__18617,seq18614__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18630 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18630 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18631){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18631 = meta18631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18632,meta18631__$1){
var self__ = this;
var _18632__$1 = this;
return (new cljs.core.async.t_cljs$core$async18630(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18631__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18630.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18632){
var self__ = this;
var _18632__$1 = this;
return self__.meta18631;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18630.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18630.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18630.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18630.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18630.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18630.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18630.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18630.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18630.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18631","meta18631",-285110437,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18630.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18630.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18630";

cljs.core.async.t_cljs$core$async18630.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async18630");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18630.
 */
cljs.core.async.__GT_t_cljs$core$async18630 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18630(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18631){
return (new cljs.core.async.t_cljs$core$async18630(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18631));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18630(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15871__auto___18794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15871__auto___18794,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15872__auto__ = (function (){var switch__15704__auto__ = ((function (c__15871__auto___18794,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18734){
var state_val_18735 = (state_18734[(1)]);
if((state_val_18735 === (7))){
var inst_18649 = (state_18734[(2)]);
var state_18734__$1 = state_18734;
var statearr_18736_18795 = state_18734__$1;
(statearr_18736_18795[(2)] = inst_18649);

(statearr_18736_18795[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (20))){
var inst_18661 = (state_18734[(7)]);
var state_18734__$1 = state_18734;
var statearr_18737_18796 = state_18734__$1;
(statearr_18737_18796[(2)] = inst_18661);

(statearr_18737_18796[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (27))){
var state_18734__$1 = state_18734;
var statearr_18738_18797 = state_18734__$1;
(statearr_18738_18797[(2)] = null);

(statearr_18738_18797[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (1))){
var inst_18636 = (state_18734[(8)]);
var inst_18636__$1 = calc_state.call(null);
var inst_18638 = (inst_18636__$1 == null);
var inst_18639 = cljs.core.not.call(null,inst_18638);
var state_18734__$1 = (function (){var statearr_18739 = state_18734;
(statearr_18739[(8)] = inst_18636__$1);

return statearr_18739;
})();
if(inst_18639){
var statearr_18740_18798 = state_18734__$1;
(statearr_18740_18798[(1)] = (2));

} else {
var statearr_18741_18799 = state_18734__$1;
(statearr_18741_18799[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (24))){
var inst_18685 = (state_18734[(9)]);
var inst_18708 = (state_18734[(10)]);
var inst_18694 = (state_18734[(11)]);
var inst_18708__$1 = inst_18685.call(null,inst_18694);
var state_18734__$1 = (function (){var statearr_18742 = state_18734;
(statearr_18742[(10)] = inst_18708__$1);

return statearr_18742;
})();
if(cljs.core.truth_(inst_18708__$1)){
var statearr_18743_18800 = state_18734__$1;
(statearr_18743_18800[(1)] = (29));

} else {
var statearr_18744_18801 = state_18734__$1;
(statearr_18744_18801[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (4))){
var inst_18652 = (state_18734[(2)]);
var state_18734__$1 = state_18734;
if(cljs.core.truth_(inst_18652)){
var statearr_18745_18802 = state_18734__$1;
(statearr_18745_18802[(1)] = (8));

} else {
var statearr_18746_18803 = state_18734__$1;
(statearr_18746_18803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (15))){
var inst_18679 = (state_18734[(2)]);
var state_18734__$1 = state_18734;
if(cljs.core.truth_(inst_18679)){
var statearr_18747_18804 = state_18734__$1;
(statearr_18747_18804[(1)] = (19));

} else {
var statearr_18748_18805 = state_18734__$1;
(statearr_18748_18805[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (21))){
var inst_18684 = (state_18734[(12)]);
var inst_18684__$1 = (state_18734[(2)]);
var inst_18685 = cljs.core.get.call(null,inst_18684__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18686 = cljs.core.get.call(null,inst_18684__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18687 = cljs.core.get.call(null,inst_18684__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18734__$1 = (function (){var statearr_18749 = state_18734;
(statearr_18749[(9)] = inst_18685);

(statearr_18749[(12)] = inst_18684__$1);

(statearr_18749[(13)] = inst_18686);

return statearr_18749;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18734__$1,(22),inst_18687);
} else {
if((state_val_18735 === (31))){
var inst_18716 = (state_18734[(2)]);
var state_18734__$1 = state_18734;
if(cljs.core.truth_(inst_18716)){
var statearr_18750_18806 = state_18734__$1;
(statearr_18750_18806[(1)] = (32));

} else {
var statearr_18751_18807 = state_18734__$1;
(statearr_18751_18807[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (32))){
var inst_18693 = (state_18734[(14)]);
var state_18734__$1 = state_18734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18734__$1,(35),out,inst_18693);
} else {
if((state_val_18735 === (33))){
var inst_18684 = (state_18734[(12)]);
var inst_18661 = inst_18684;
var state_18734__$1 = (function (){var statearr_18752 = state_18734;
(statearr_18752[(7)] = inst_18661);

return statearr_18752;
})();
var statearr_18753_18808 = state_18734__$1;
(statearr_18753_18808[(2)] = null);

(statearr_18753_18808[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (13))){
var inst_18661 = (state_18734[(7)]);
var inst_18668 = inst_18661.cljs$lang$protocol_mask$partition0$;
var inst_18669 = (inst_18668 & (64));
var inst_18670 = inst_18661.cljs$core$ISeq$;
var inst_18671 = (cljs.core.PROTOCOL_SENTINEL === inst_18670);
var inst_18672 = ((inst_18669) || (inst_18671));
var state_18734__$1 = state_18734;
if(cljs.core.truth_(inst_18672)){
var statearr_18754_18809 = state_18734__$1;
(statearr_18754_18809[(1)] = (16));

} else {
var statearr_18755_18810 = state_18734__$1;
(statearr_18755_18810[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (22))){
var inst_18694 = (state_18734[(11)]);
var inst_18693 = (state_18734[(14)]);
var inst_18692 = (state_18734[(2)]);
var inst_18693__$1 = cljs.core.nth.call(null,inst_18692,(0),null);
var inst_18694__$1 = cljs.core.nth.call(null,inst_18692,(1),null);
var inst_18695 = (inst_18693__$1 == null);
var inst_18696 = cljs.core._EQ_.call(null,inst_18694__$1,change);
var inst_18697 = ((inst_18695) || (inst_18696));
var state_18734__$1 = (function (){var statearr_18756 = state_18734;
(statearr_18756[(11)] = inst_18694__$1);

(statearr_18756[(14)] = inst_18693__$1);

return statearr_18756;
})();
if(cljs.core.truth_(inst_18697)){
var statearr_18757_18811 = state_18734__$1;
(statearr_18757_18811[(1)] = (23));

} else {
var statearr_18758_18812 = state_18734__$1;
(statearr_18758_18812[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (36))){
var inst_18684 = (state_18734[(12)]);
var inst_18661 = inst_18684;
var state_18734__$1 = (function (){var statearr_18759 = state_18734;
(statearr_18759[(7)] = inst_18661);

return statearr_18759;
})();
var statearr_18760_18813 = state_18734__$1;
(statearr_18760_18813[(2)] = null);

(statearr_18760_18813[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (29))){
var inst_18708 = (state_18734[(10)]);
var state_18734__$1 = state_18734;
var statearr_18761_18814 = state_18734__$1;
(statearr_18761_18814[(2)] = inst_18708);

(statearr_18761_18814[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (6))){
var state_18734__$1 = state_18734;
var statearr_18762_18815 = state_18734__$1;
(statearr_18762_18815[(2)] = false);

(statearr_18762_18815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (28))){
var inst_18704 = (state_18734[(2)]);
var inst_18705 = calc_state.call(null);
var inst_18661 = inst_18705;
var state_18734__$1 = (function (){var statearr_18763 = state_18734;
(statearr_18763[(7)] = inst_18661);

(statearr_18763[(15)] = inst_18704);

return statearr_18763;
})();
var statearr_18764_18816 = state_18734__$1;
(statearr_18764_18816[(2)] = null);

(statearr_18764_18816[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (25))){
var inst_18730 = (state_18734[(2)]);
var state_18734__$1 = state_18734;
var statearr_18765_18817 = state_18734__$1;
(statearr_18765_18817[(2)] = inst_18730);

(statearr_18765_18817[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (34))){
var inst_18728 = (state_18734[(2)]);
var state_18734__$1 = state_18734;
var statearr_18766_18818 = state_18734__$1;
(statearr_18766_18818[(2)] = inst_18728);

(statearr_18766_18818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (17))){
var state_18734__$1 = state_18734;
var statearr_18767_18819 = state_18734__$1;
(statearr_18767_18819[(2)] = false);

(statearr_18767_18819[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (3))){
var state_18734__$1 = state_18734;
var statearr_18768_18820 = state_18734__$1;
(statearr_18768_18820[(2)] = false);

(statearr_18768_18820[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (12))){
var inst_18732 = (state_18734[(2)]);
var state_18734__$1 = state_18734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18734__$1,inst_18732);
} else {
if((state_val_18735 === (2))){
var inst_18636 = (state_18734[(8)]);
var inst_18641 = inst_18636.cljs$lang$protocol_mask$partition0$;
var inst_18642 = (inst_18641 & (64));
var inst_18643 = inst_18636.cljs$core$ISeq$;
var inst_18644 = (cljs.core.PROTOCOL_SENTINEL === inst_18643);
var inst_18645 = ((inst_18642) || (inst_18644));
var state_18734__$1 = state_18734;
if(cljs.core.truth_(inst_18645)){
var statearr_18769_18821 = state_18734__$1;
(statearr_18769_18821[(1)] = (5));

} else {
var statearr_18770_18822 = state_18734__$1;
(statearr_18770_18822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (23))){
var inst_18693 = (state_18734[(14)]);
var inst_18699 = (inst_18693 == null);
var state_18734__$1 = state_18734;
if(cljs.core.truth_(inst_18699)){
var statearr_18771_18823 = state_18734__$1;
(statearr_18771_18823[(1)] = (26));

} else {
var statearr_18772_18824 = state_18734__$1;
(statearr_18772_18824[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (35))){
var inst_18719 = (state_18734[(2)]);
var state_18734__$1 = state_18734;
if(cljs.core.truth_(inst_18719)){
var statearr_18773_18825 = state_18734__$1;
(statearr_18773_18825[(1)] = (36));

} else {
var statearr_18774_18826 = state_18734__$1;
(statearr_18774_18826[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (19))){
var inst_18661 = (state_18734[(7)]);
var inst_18681 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18661);
var state_18734__$1 = state_18734;
var statearr_18775_18827 = state_18734__$1;
(statearr_18775_18827[(2)] = inst_18681);

(statearr_18775_18827[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (11))){
var inst_18661 = (state_18734[(7)]);
var inst_18665 = (inst_18661 == null);
var inst_18666 = cljs.core.not.call(null,inst_18665);
var state_18734__$1 = state_18734;
if(inst_18666){
var statearr_18776_18828 = state_18734__$1;
(statearr_18776_18828[(1)] = (13));

} else {
var statearr_18777_18829 = state_18734__$1;
(statearr_18777_18829[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (9))){
var inst_18636 = (state_18734[(8)]);
var state_18734__$1 = state_18734;
var statearr_18778_18830 = state_18734__$1;
(statearr_18778_18830[(2)] = inst_18636);

(statearr_18778_18830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (5))){
var state_18734__$1 = state_18734;
var statearr_18779_18831 = state_18734__$1;
(statearr_18779_18831[(2)] = true);

(statearr_18779_18831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (14))){
var state_18734__$1 = state_18734;
var statearr_18780_18832 = state_18734__$1;
(statearr_18780_18832[(2)] = false);

(statearr_18780_18832[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (26))){
var inst_18694 = (state_18734[(11)]);
var inst_18701 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18694);
var state_18734__$1 = state_18734;
var statearr_18781_18833 = state_18734__$1;
(statearr_18781_18833[(2)] = inst_18701);

(statearr_18781_18833[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (16))){
var state_18734__$1 = state_18734;
var statearr_18782_18834 = state_18734__$1;
(statearr_18782_18834[(2)] = true);

(statearr_18782_18834[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (38))){
var inst_18724 = (state_18734[(2)]);
var state_18734__$1 = state_18734;
var statearr_18783_18835 = state_18734__$1;
(statearr_18783_18835[(2)] = inst_18724);

(statearr_18783_18835[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (30))){
var inst_18685 = (state_18734[(9)]);
var inst_18694 = (state_18734[(11)]);
var inst_18686 = (state_18734[(13)]);
var inst_18711 = cljs.core.empty_QMARK_.call(null,inst_18685);
var inst_18712 = inst_18686.call(null,inst_18694);
var inst_18713 = cljs.core.not.call(null,inst_18712);
var inst_18714 = ((inst_18711) && (inst_18713));
var state_18734__$1 = state_18734;
var statearr_18784_18836 = state_18734__$1;
(statearr_18784_18836[(2)] = inst_18714);

(statearr_18784_18836[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (10))){
var inst_18636 = (state_18734[(8)]);
var inst_18657 = (state_18734[(2)]);
var inst_18658 = cljs.core.get.call(null,inst_18657,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18659 = cljs.core.get.call(null,inst_18657,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18660 = cljs.core.get.call(null,inst_18657,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18661 = inst_18636;
var state_18734__$1 = (function (){var statearr_18785 = state_18734;
(statearr_18785[(16)] = inst_18658);

(statearr_18785[(17)] = inst_18660);

(statearr_18785[(7)] = inst_18661);

(statearr_18785[(18)] = inst_18659);

return statearr_18785;
})();
var statearr_18786_18837 = state_18734__$1;
(statearr_18786_18837[(2)] = null);

(statearr_18786_18837[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (18))){
var inst_18676 = (state_18734[(2)]);
var state_18734__$1 = state_18734;
var statearr_18787_18838 = state_18734__$1;
(statearr_18787_18838[(2)] = inst_18676);

(statearr_18787_18838[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (37))){
var state_18734__$1 = state_18734;
var statearr_18788_18839 = state_18734__$1;
(statearr_18788_18839[(2)] = null);

(statearr_18788_18839[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18735 === (8))){
var inst_18636 = (state_18734[(8)]);
var inst_18654 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18636);
var state_18734__$1 = state_18734;
var statearr_18789_18840 = state_18734__$1;
(statearr_18789_18840[(2)] = inst_18654);

(statearr_18789_18840[(1)] = (10));


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
});})(c__15871__auto___18794,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15704__auto__,c__15871__auto___18794,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15705__auto__ = null;
var cljs$core$async$mix_$_state_machine__15705__auto____0 = (function (){
var statearr_18790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18790[(0)] = cljs$core$async$mix_$_state_machine__15705__auto__);

(statearr_18790[(1)] = (1));

return statearr_18790;
});
var cljs$core$async$mix_$_state_machine__15705__auto____1 = (function (state_18734){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__.call(null,state_18734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e18791){if((e18791 instanceof Object)){
var ex__15708__auto__ = e18791;
var statearr_18792_18841 = state_18734;
(statearr_18792_18841[(5)] = ex__15708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18842 = state_18734;
state_18734 = G__18842;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15705__auto__ = function(state_18734){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15705__auto____1.call(this,state_18734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15705__auto____0;
cljs$core$async$mix_$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15705__auto____1;
return cljs$core$async$mix_$_state_machine__15705__auto__;
})()
;})(switch__15704__auto__,c__15871__auto___18794,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15873__auto__ = (function (){var statearr_18793 = f__15872__auto__.call(null);
(statearr_18793[(6)] = c__15871__auto___18794);

return statearr_18793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15873__auto__);
});})(c__15871__auto___18794,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__18844 = arguments.length;
switch (G__18844) {
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
var G__18848 = arguments.length;
switch (G__18848) {
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
return (function (p1__18846_SHARP_){
if(cljs.core.truth_(p1__18846_SHARP_.call(null,topic))){
return p1__18846_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18846_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18849 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18849 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18850){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18850 = meta18850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18851,meta18850__$1){
var self__ = this;
var _18851__$1 = this;
return (new cljs.core.async.t_cljs$core$async18849(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18850__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18849.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18851){
var self__ = this;
var _18851__$1 = this;
return self__.meta18850;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18849.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18849.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18849.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18849.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18849.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async18849.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18849.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18849.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18850","meta18850",949828228,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18849.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18849";

cljs.core.async.t_cljs$core$async18849.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async18849");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18849.
 */
cljs.core.async.__GT_t_cljs$core$async18849 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18849(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18850){
return (new cljs.core.async.t_cljs$core$async18849(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18850));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18849(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15871__auto___18969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15871__auto___18969,mults,ensure_mult,p){
return (function (){
var f__15872__auto__ = (function (){var switch__15704__auto__ = ((function (c__15871__auto___18969,mults,ensure_mult,p){
return (function (state_18923){
var state_val_18924 = (state_18923[(1)]);
if((state_val_18924 === (7))){
var inst_18919 = (state_18923[(2)]);
var state_18923__$1 = state_18923;
var statearr_18925_18970 = state_18923__$1;
(statearr_18925_18970[(2)] = inst_18919);

(statearr_18925_18970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (20))){
var state_18923__$1 = state_18923;
var statearr_18926_18971 = state_18923__$1;
(statearr_18926_18971[(2)] = null);

(statearr_18926_18971[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (1))){
var state_18923__$1 = state_18923;
var statearr_18927_18972 = state_18923__$1;
(statearr_18927_18972[(2)] = null);

(statearr_18927_18972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (24))){
var inst_18902 = (state_18923[(7)]);
var inst_18911 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18902);
var state_18923__$1 = state_18923;
var statearr_18928_18973 = state_18923__$1;
(statearr_18928_18973[(2)] = inst_18911);

(statearr_18928_18973[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (4))){
var inst_18854 = (state_18923[(8)]);
var inst_18854__$1 = (state_18923[(2)]);
var inst_18855 = (inst_18854__$1 == null);
var state_18923__$1 = (function (){var statearr_18929 = state_18923;
(statearr_18929[(8)] = inst_18854__$1);

return statearr_18929;
})();
if(cljs.core.truth_(inst_18855)){
var statearr_18930_18974 = state_18923__$1;
(statearr_18930_18974[(1)] = (5));

} else {
var statearr_18931_18975 = state_18923__$1;
(statearr_18931_18975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (15))){
var inst_18896 = (state_18923[(2)]);
var state_18923__$1 = state_18923;
var statearr_18932_18976 = state_18923__$1;
(statearr_18932_18976[(2)] = inst_18896);

(statearr_18932_18976[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (21))){
var inst_18916 = (state_18923[(2)]);
var state_18923__$1 = (function (){var statearr_18933 = state_18923;
(statearr_18933[(9)] = inst_18916);

return statearr_18933;
})();
var statearr_18934_18977 = state_18923__$1;
(statearr_18934_18977[(2)] = null);

(statearr_18934_18977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (13))){
var inst_18878 = (state_18923[(10)]);
var inst_18880 = cljs.core.chunked_seq_QMARK_.call(null,inst_18878);
var state_18923__$1 = state_18923;
if(inst_18880){
var statearr_18935_18978 = state_18923__$1;
(statearr_18935_18978[(1)] = (16));

} else {
var statearr_18936_18979 = state_18923__$1;
(statearr_18936_18979[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (22))){
var inst_18908 = (state_18923[(2)]);
var state_18923__$1 = state_18923;
if(cljs.core.truth_(inst_18908)){
var statearr_18937_18980 = state_18923__$1;
(statearr_18937_18980[(1)] = (23));

} else {
var statearr_18938_18981 = state_18923__$1;
(statearr_18938_18981[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (6))){
var inst_18902 = (state_18923[(7)]);
var inst_18854 = (state_18923[(8)]);
var inst_18904 = (state_18923[(11)]);
var inst_18902__$1 = topic_fn.call(null,inst_18854);
var inst_18903 = cljs.core.deref.call(null,mults);
var inst_18904__$1 = cljs.core.get.call(null,inst_18903,inst_18902__$1);
var state_18923__$1 = (function (){var statearr_18939 = state_18923;
(statearr_18939[(7)] = inst_18902__$1);

(statearr_18939[(11)] = inst_18904__$1);

return statearr_18939;
})();
if(cljs.core.truth_(inst_18904__$1)){
var statearr_18940_18982 = state_18923__$1;
(statearr_18940_18982[(1)] = (19));

} else {
var statearr_18941_18983 = state_18923__$1;
(statearr_18941_18983[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (25))){
var inst_18913 = (state_18923[(2)]);
var state_18923__$1 = state_18923;
var statearr_18942_18984 = state_18923__$1;
(statearr_18942_18984[(2)] = inst_18913);

(statearr_18942_18984[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (17))){
var inst_18878 = (state_18923[(10)]);
var inst_18887 = cljs.core.first.call(null,inst_18878);
var inst_18888 = cljs.core.async.muxch_STAR_.call(null,inst_18887);
var inst_18889 = cljs.core.async.close_BANG_.call(null,inst_18888);
var inst_18890 = cljs.core.next.call(null,inst_18878);
var inst_18864 = inst_18890;
var inst_18865 = null;
var inst_18866 = (0);
var inst_18867 = (0);
var state_18923__$1 = (function (){var statearr_18943 = state_18923;
(statearr_18943[(12)] = inst_18864);

(statearr_18943[(13)] = inst_18865);

(statearr_18943[(14)] = inst_18867);

(statearr_18943[(15)] = inst_18889);

(statearr_18943[(16)] = inst_18866);

return statearr_18943;
})();
var statearr_18944_18985 = state_18923__$1;
(statearr_18944_18985[(2)] = null);

(statearr_18944_18985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (3))){
var inst_18921 = (state_18923[(2)]);
var state_18923__$1 = state_18923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18923__$1,inst_18921);
} else {
if((state_val_18924 === (12))){
var inst_18898 = (state_18923[(2)]);
var state_18923__$1 = state_18923;
var statearr_18945_18986 = state_18923__$1;
(statearr_18945_18986[(2)] = inst_18898);

(statearr_18945_18986[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (2))){
var state_18923__$1 = state_18923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18923__$1,(4),ch);
} else {
if((state_val_18924 === (23))){
var state_18923__$1 = state_18923;
var statearr_18946_18987 = state_18923__$1;
(statearr_18946_18987[(2)] = null);

(statearr_18946_18987[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (19))){
var inst_18854 = (state_18923[(8)]);
var inst_18904 = (state_18923[(11)]);
var inst_18906 = cljs.core.async.muxch_STAR_.call(null,inst_18904);
var state_18923__$1 = state_18923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18923__$1,(22),inst_18906,inst_18854);
} else {
if((state_val_18924 === (11))){
var inst_18878 = (state_18923[(10)]);
var inst_18864 = (state_18923[(12)]);
var inst_18878__$1 = cljs.core.seq.call(null,inst_18864);
var state_18923__$1 = (function (){var statearr_18947 = state_18923;
(statearr_18947[(10)] = inst_18878__$1);

return statearr_18947;
})();
if(inst_18878__$1){
var statearr_18948_18988 = state_18923__$1;
(statearr_18948_18988[(1)] = (13));

} else {
var statearr_18949_18989 = state_18923__$1;
(statearr_18949_18989[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (9))){
var inst_18900 = (state_18923[(2)]);
var state_18923__$1 = state_18923;
var statearr_18950_18990 = state_18923__$1;
(statearr_18950_18990[(2)] = inst_18900);

(statearr_18950_18990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (5))){
var inst_18861 = cljs.core.deref.call(null,mults);
var inst_18862 = cljs.core.vals.call(null,inst_18861);
var inst_18863 = cljs.core.seq.call(null,inst_18862);
var inst_18864 = inst_18863;
var inst_18865 = null;
var inst_18866 = (0);
var inst_18867 = (0);
var state_18923__$1 = (function (){var statearr_18951 = state_18923;
(statearr_18951[(12)] = inst_18864);

(statearr_18951[(13)] = inst_18865);

(statearr_18951[(14)] = inst_18867);

(statearr_18951[(16)] = inst_18866);

return statearr_18951;
})();
var statearr_18952_18991 = state_18923__$1;
(statearr_18952_18991[(2)] = null);

(statearr_18952_18991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (14))){
var state_18923__$1 = state_18923;
var statearr_18956_18992 = state_18923__$1;
(statearr_18956_18992[(2)] = null);

(statearr_18956_18992[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (16))){
var inst_18878 = (state_18923[(10)]);
var inst_18882 = cljs.core.chunk_first.call(null,inst_18878);
var inst_18883 = cljs.core.chunk_rest.call(null,inst_18878);
var inst_18884 = cljs.core.count.call(null,inst_18882);
var inst_18864 = inst_18883;
var inst_18865 = inst_18882;
var inst_18866 = inst_18884;
var inst_18867 = (0);
var state_18923__$1 = (function (){var statearr_18957 = state_18923;
(statearr_18957[(12)] = inst_18864);

(statearr_18957[(13)] = inst_18865);

(statearr_18957[(14)] = inst_18867);

(statearr_18957[(16)] = inst_18866);

return statearr_18957;
})();
var statearr_18958_18993 = state_18923__$1;
(statearr_18958_18993[(2)] = null);

(statearr_18958_18993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (10))){
var inst_18864 = (state_18923[(12)]);
var inst_18865 = (state_18923[(13)]);
var inst_18867 = (state_18923[(14)]);
var inst_18866 = (state_18923[(16)]);
var inst_18872 = cljs.core._nth.call(null,inst_18865,inst_18867);
var inst_18873 = cljs.core.async.muxch_STAR_.call(null,inst_18872);
var inst_18874 = cljs.core.async.close_BANG_.call(null,inst_18873);
var inst_18875 = (inst_18867 + (1));
var tmp18953 = inst_18864;
var tmp18954 = inst_18865;
var tmp18955 = inst_18866;
var inst_18864__$1 = tmp18953;
var inst_18865__$1 = tmp18954;
var inst_18866__$1 = tmp18955;
var inst_18867__$1 = inst_18875;
var state_18923__$1 = (function (){var statearr_18959 = state_18923;
(statearr_18959[(12)] = inst_18864__$1);

(statearr_18959[(13)] = inst_18865__$1);

(statearr_18959[(17)] = inst_18874);

(statearr_18959[(14)] = inst_18867__$1);

(statearr_18959[(16)] = inst_18866__$1);

return statearr_18959;
})();
var statearr_18960_18994 = state_18923__$1;
(statearr_18960_18994[(2)] = null);

(statearr_18960_18994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (18))){
var inst_18893 = (state_18923[(2)]);
var state_18923__$1 = state_18923;
var statearr_18961_18995 = state_18923__$1;
(statearr_18961_18995[(2)] = inst_18893);

(statearr_18961_18995[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (8))){
var inst_18867 = (state_18923[(14)]);
var inst_18866 = (state_18923[(16)]);
var inst_18869 = (inst_18867 < inst_18866);
var inst_18870 = inst_18869;
var state_18923__$1 = state_18923;
if(cljs.core.truth_(inst_18870)){
var statearr_18962_18996 = state_18923__$1;
(statearr_18962_18996[(1)] = (10));

} else {
var statearr_18963_18997 = state_18923__$1;
(statearr_18963_18997[(1)] = (11));

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
});})(c__15871__auto___18969,mults,ensure_mult,p))
;
return ((function (switch__15704__auto__,c__15871__auto___18969,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15705__auto__ = null;
var cljs$core$async$state_machine__15705__auto____0 = (function (){
var statearr_18964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18964[(0)] = cljs$core$async$state_machine__15705__auto__);

(statearr_18964[(1)] = (1));

return statearr_18964;
});
var cljs$core$async$state_machine__15705__auto____1 = (function (state_18923){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__.call(null,state_18923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e18965){if((e18965 instanceof Object)){
var ex__15708__auto__ = e18965;
var statearr_18966_18998 = state_18923;
(statearr_18966_18998[(5)] = ex__15708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18999 = state_18923;
state_18923 = G__18999;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$state_machine__15705__auto__ = function(state_18923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15705__auto____1.call(this,state_18923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15705__auto____0;
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15705__auto____1;
return cljs$core$async$state_machine__15705__auto__;
})()
;})(switch__15704__auto__,c__15871__auto___18969,mults,ensure_mult,p))
})();
var state__15873__auto__ = (function (){var statearr_18967 = f__15872__auto__.call(null);
(statearr_18967[(6)] = c__15871__auto___18969);

return statearr_18967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15873__auto__);
});})(c__15871__auto___18969,mults,ensure_mult,p))
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
var G__19001 = arguments.length;
switch (G__19001) {
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
var G__19004 = arguments.length;
switch (G__19004) {
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
var G__19007 = arguments.length;
switch (G__19007) {
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
var c__15871__auto___19074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15871__auto___19074,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15872__auto__ = (function (){var switch__15704__auto__ = ((function (c__15871__auto___19074,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19046){
var state_val_19047 = (state_19046[(1)]);
if((state_val_19047 === (7))){
var state_19046__$1 = state_19046;
var statearr_19048_19075 = state_19046__$1;
(statearr_19048_19075[(2)] = null);

(statearr_19048_19075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19047 === (1))){
var state_19046__$1 = state_19046;
var statearr_19049_19076 = state_19046__$1;
(statearr_19049_19076[(2)] = null);

(statearr_19049_19076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19047 === (4))){
var inst_19010 = (state_19046[(7)]);
var inst_19012 = (inst_19010 < cnt);
var state_19046__$1 = state_19046;
if(cljs.core.truth_(inst_19012)){
var statearr_19050_19077 = state_19046__$1;
(statearr_19050_19077[(1)] = (6));

} else {
var statearr_19051_19078 = state_19046__$1;
(statearr_19051_19078[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19047 === (15))){
var inst_19042 = (state_19046[(2)]);
var state_19046__$1 = state_19046;
var statearr_19052_19079 = state_19046__$1;
(statearr_19052_19079[(2)] = inst_19042);

(statearr_19052_19079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19047 === (13))){
var inst_19035 = cljs.core.async.close_BANG_.call(null,out);
var state_19046__$1 = state_19046;
var statearr_19053_19080 = state_19046__$1;
(statearr_19053_19080[(2)] = inst_19035);

(statearr_19053_19080[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19047 === (6))){
var state_19046__$1 = state_19046;
var statearr_19054_19081 = state_19046__$1;
(statearr_19054_19081[(2)] = null);

(statearr_19054_19081[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19047 === (3))){
var inst_19044 = (state_19046[(2)]);
var state_19046__$1 = state_19046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19046__$1,inst_19044);
} else {
if((state_val_19047 === (12))){
var inst_19032 = (state_19046[(8)]);
var inst_19032__$1 = (state_19046[(2)]);
var inst_19033 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19032__$1);
var state_19046__$1 = (function (){var statearr_19055 = state_19046;
(statearr_19055[(8)] = inst_19032__$1);

return statearr_19055;
})();
if(cljs.core.truth_(inst_19033)){
var statearr_19056_19082 = state_19046__$1;
(statearr_19056_19082[(1)] = (13));

} else {
var statearr_19057_19083 = state_19046__$1;
(statearr_19057_19083[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19047 === (2))){
var inst_19009 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19010 = (0);
var state_19046__$1 = (function (){var statearr_19058 = state_19046;
(statearr_19058[(9)] = inst_19009);

(statearr_19058[(7)] = inst_19010);

return statearr_19058;
})();
var statearr_19059_19084 = state_19046__$1;
(statearr_19059_19084[(2)] = null);

(statearr_19059_19084[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19047 === (11))){
var inst_19010 = (state_19046[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19046,(10),Object,null,(9));
var inst_19019 = chs__$1.call(null,inst_19010);
var inst_19020 = done.call(null,inst_19010);
var inst_19021 = cljs.core.async.take_BANG_.call(null,inst_19019,inst_19020);
var state_19046__$1 = state_19046;
var statearr_19060_19085 = state_19046__$1;
(statearr_19060_19085[(2)] = inst_19021);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19046__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19047 === (9))){
var inst_19010 = (state_19046[(7)]);
var inst_19023 = (state_19046[(2)]);
var inst_19024 = (inst_19010 + (1));
var inst_19010__$1 = inst_19024;
var state_19046__$1 = (function (){var statearr_19061 = state_19046;
(statearr_19061[(10)] = inst_19023);

(statearr_19061[(7)] = inst_19010__$1);

return statearr_19061;
})();
var statearr_19062_19086 = state_19046__$1;
(statearr_19062_19086[(2)] = null);

(statearr_19062_19086[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19047 === (5))){
var inst_19030 = (state_19046[(2)]);
var state_19046__$1 = (function (){var statearr_19063 = state_19046;
(statearr_19063[(11)] = inst_19030);

return statearr_19063;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19046__$1,(12),dchan);
} else {
if((state_val_19047 === (14))){
var inst_19032 = (state_19046[(8)]);
var inst_19037 = cljs.core.apply.call(null,f,inst_19032);
var state_19046__$1 = state_19046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19046__$1,(16),out,inst_19037);
} else {
if((state_val_19047 === (16))){
var inst_19039 = (state_19046[(2)]);
var state_19046__$1 = (function (){var statearr_19064 = state_19046;
(statearr_19064[(12)] = inst_19039);

return statearr_19064;
})();
var statearr_19065_19087 = state_19046__$1;
(statearr_19065_19087[(2)] = null);

(statearr_19065_19087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19047 === (10))){
var inst_19014 = (state_19046[(2)]);
var inst_19015 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19046__$1 = (function (){var statearr_19066 = state_19046;
(statearr_19066[(13)] = inst_19014);

return statearr_19066;
})();
var statearr_19067_19088 = state_19046__$1;
(statearr_19067_19088[(2)] = inst_19015);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19046__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19047 === (8))){
var inst_19028 = (state_19046[(2)]);
var state_19046__$1 = state_19046;
var statearr_19068_19089 = state_19046__$1;
(statearr_19068_19089[(2)] = inst_19028);

(statearr_19068_19089[(1)] = (5));


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
});})(c__15871__auto___19074,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15704__auto__,c__15871__auto___19074,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15705__auto__ = null;
var cljs$core$async$state_machine__15705__auto____0 = (function (){
var statearr_19069 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19069[(0)] = cljs$core$async$state_machine__15705__auto__);

(statearr_19069[(1)] = (1));

return statearr_19069;
});
var cljs$core$async$state_machine__15705__auto____1 = (function (state_19046){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__.call(null,state_19046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e19070){if((e19070 instanceof Object)){
var ex__15708__auto__ = e19070;
var statearr_19071_19090 = state_19046;
(statearr_19071_19090[(5)] = ex__15708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19091 = state_19046;
state_19046 = G__19091;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$state_machine__15705__auto__ = function(state_19046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15705__auto____1.call(this,state_19046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15705__auto____0;
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15705__auto____1;
return cljs$core$async$state_machine__15705__auto__;
})()
;})(switch__15704__auto__,c__15871__auto___19074,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15873__auto__ = (function (){var statearr_19072 = f__15872__auto__.call(null);
(statearr_19072[(6)] = c__15871__auto___19074);

return statearr_19072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15873__auto__);
});})(c__15871__auto___19074,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__19094 = arguments.length;
switch (G__19094) {
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
var c__15871__auto___19148 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15871__auto___19148,out){
return (function (){
var f__15872__auto__ = (function (){var switch__15704__auto__ = ((function (c__15871__auto___19148,out){
return (function (state_19126){
var state_val_19127 = (state_19126[(1)]);
if((state_val_19127 === (7))){
var inst_19105 = (state_19126[(7)]);
var inst_19106 = (state_19126[(8)]);
var inst_19105__$1 = (state_19126[(2)]);
var inst_19106__$1 = cljs.core.nth.call(null,inst_19105__$1,(0),null);
var inst_19107 = cljs.core.nth.call(null,inst_19105__$1,(1),null);
var inst_19108 = (inst_19106__$1 == null);
var state_19126__$1 = (function (){var statearr_19128 = state_19126;
(statearr_19128[(9)] = inst_19107);

(statearr_19128[(7)] = inst_19105__$1);

(statearr_19128[(8)] = inst_19106__$1);

return statearr_19128;
})();
if(cljs.core.truth_(inst_19108)){
var statearr_19129_19149 = state_19126__$1;
(statearr_19129_19149[(1)] = (8));

} else {
var statearr_19130_19150 = state_19126__$1;
(statearr_19130_19150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19127 === (1))){
var inst_19095 = cljs.core.vec.call(null,chs);
var inst_19096 = inst_19095;
var state_19126__$1 = (function (){var statearr_19131 = state_19126;
(statearr_19131[(10)] = inst_19096);

return statearr_19131;
})();
var statearr_19132_19151 = state_19126__$1;
(statearr_19132_19151[(2)] = null);

(statearr_19132_19151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19127 === (4))){
var inst_19096 = (state_19126[(10)]);
var state_19126__$1 = state_19126;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19126__$1,(7),inst_19096);
} else {
if((state_val_19127 === (6))){
var inst_19122 = (state_19126[(2)]);
var state_19126__$1 = state_19126;
var statearr_19133_19152 = state_19126__$1;
(statearr_19133_19152[(2)] = inst_19122);

(statearr_19133_19152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19127 === (3))){
var inst_19124 = (state_19126[(2)]);
var state_19126__$1 = state_19126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19126__$1,inst_19124);
} else {
if((state_val_19127 === (2))){
var inst_19096 = (state_19126[(10)]);
var inst_19098 = cljs.core.count.call(null,inst_19096);
var inst_19099 = (inst_19098 > (0));
var state_19126__$1 = state_19126;
if(cljs.core.truth_(inst_19099)){
var statearr_19135_19153 = state_19126__$1;
(statearr_19135_19153[(1)] = (4));

} else {
var statearr_19136_19154 = state_19126__$1;
(statearr_19136_19154[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19127 === (11))){
var inst_19096 = (state_19126[(10)]);
var inst_19115 = (state_19126[(2)]);
var tmp19134 = inst_19096;
var inst_19096__$1 = tmp19134;
var state_19126__$1 = (function (){var statearr_19137 = state_19126;
(statearr_19137[(10)] = inst_19096__$1);

(statearr_19137[(11)] = inst_19115);

return statearr_19137;
})();
var statearr_19138_19155 = state_19126__$1;
(statearr_19138_19155[(2)] = null);

(statearr_19138_19155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19127 === (9))){
var inst_19106 = (state_19126[(8)]);
var state_19126__$1 = state_19126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19126__$1,(11),out,inst_19106);
} else {
if((state_val_19127 === (5))){
var inst_19120 = cljs.core.async.close_BANG_.call(null,out);
var state_19126__$1 = state_19126;
var statearr_19139_19156 = state_19126__$1;
(statearr_19139_19156[(2)] = inst_19120);

(statearr_19139_19156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19127 === (10))){
var inst_19118 = (state_19126[(2)]);
var state_19126__$1 = state_19126;
var statearr_19140_19157 = state_19126__$1;
(statearr_19140_19157[(2)] = inst_19118);

(statearr_19140_19157[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19127 === (8))){
var inst_19096 = (state_19126[(10)]);
var inst_19107 = (state_19126[(9)]);
var inst_19105 = (state_19126[(7)]);
var inst_19106 = (state_19126[(8)]);
var inst_19110 = (function (){var cs = inst_19096;
var vec__19101 = inst_19105;
var v = inst_19106;
var c = inst_19107;
return ((function (cs,vec__19101,v,c,inst_19096,inst_19107,inst_19105,inst_19106,state_val_19127,c__15871__auto___19148,out){
return (function (p1__19092_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19092_SHARP_);
});
;})(cs,vec__19101,v,c,inst_19096,inst_19107,inst_19105,inst_19106,state_val_19127,c__15871__auto___19148,out))
})();
var inst_19111 = cljs.core.filterv.call(null,inst_19110,inst_19096);
var inst_19096__$1 = inst_19111;
var state_19126__$1 = (function (){var statearr_19141 = state_19126;
(statearr_19141[(10)] = inst_19096__$1);

return statearr_19141;
})();
var statearr_19142_19158 = state_19126__$1;
(statearr_19142_19158[(2)] = null);

(statearr_19142_19158[(1)] = (2));


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
});})(c__15871__auto___19148,out))
;
return ((function (switch__15704__auto__,c__15871__auto___19148,out){
return (function() {
var cljs$core$async$state_machine__15705__auto__ = null;
var cljs$core$async$state_machine__15705__auto____0 = (function (){
var statearr_19143 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19143[(0)] = cljs$core$async$state_machine__15705__auto__);

(statearr_19143[(1)] = (1));

return statearr_19143;
});
var cljs$core$async$state_machine__15705__auto____1 = (function (state_19126){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__.call(null,state_19126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e19144){if((e19144 instanceof Object)){
var ex__15708__auto__ = e19144;
var statearr_19145_19159 = state_19126;
(statearr_19145_19159[(5)] = ex__15708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19160 = state_19126;
state_19126 = G__19160;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$state_machine__15705__auto__ = function(state_19126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15705__auto____1.call(this,state_19126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15705__auto____0;
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15705__auto____1;
return cljs$core$async$state_machine__15705__auto__;
})()
;})(switch__15704__auto__,c__15871__auto___19148,out))
})();
var state__15873__auto__ = (function (){var statearr_19146 = f__15872__auto__.call(null);
(statearr_19146[(6)] = c__15871__auto___19148);

return statearr_19146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15873__auto__);
});})(c__15871__auto___19148,out))
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
var G__19162 = arguments.length;
switch (G__19162) {
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
var c__15871__auto___19207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15871__auto___19207,out){
return (function (){
var f__15872__auto__ = (function (){var switch__15704__auto__ = ((function (c__15871__auto___19207,out){
return (function (state_19186){
var state_val_19187 = (state_19186[(1)]);
if((state_val_19187 === (7))){
var inst_19168 = (state_19186[(7)]);
var inst_19168__$1 = (state_19186[(2)]);
var inst_19169 = (inst_19168__$1 == null);
var inst_19170 = cljs.core.not.call(null,inst_19169);
var state_19186__$1 = (function (){var statearr_19188 = state_19186;
(statearr_19188[(7)] = inst_19168__$1);

return statearr_19188;
})();
if(inst_19170){
var statearr_19189_19208 = state_19186__$1;
(statearr_19189_19208[(1)] = (8));

} else {
var statearr_19190_19209 = state_19186__$1;
(statearr_19190_19209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19187 === (1))){
var inst_19163 = (0);
var state_19186__$1 = (function (){var statearr_19191 = state_19186;
(statearr_19191[(8)] = inst_19163);

return statearr_19191;
})();
var statearr_19192_19210 = state_19186__$1;
(statearr_19192_19210[(2)] = null);

(statearr_19192_19210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19187 === (4))){
var state_19186__$1 = state_19186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19186__$1,(7),ch);
} else {
if((state_val_19187 === (6))){
var inst_19181 = (state_19186[(2)]);
var state_19186__$1 = state_19186;
var statearr_19193_19211 = state_19186__$1;
(statearr_19193_19211[(2)] = inst_19181);

(statearr_19193_19211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19187 === (3))){
var inst_19183 = (state_19186[(2)]);
var inst_19184 = cljs.core.async.close_BANG_.call(null,out);
var state_19186__$1 = (function (){var statearr_19194 = state_19186;
(statearr_19194[(9)] = inst_19183);

return statearr_19194;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19186__$1,inst_19184);
} else {
if((state_val_19187 === (2))){
var inst_19163 = (state_19186[(8)]);
var inst_19165 = (inst_19163 < n);
var state_19186__$1 = state_19186;
if(cljs.core.truth_(inst_19165)){
var statearr_19195_19212 = state_19186__$1;
(statearr_19195_19212[(1)] = (4));

} else {
var statearr_19196_19213 = state_19186__$1;
(statearr_19196_19213[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19187 === (11))){
var inst_19163 = (state_19186[(8)]);
var inst_19173 = (state_19186[(2)]);
var inst_19174 = (inst_19163 + (1));
var inst_19163__$1 = inst_19174;
var state_19186__$1 = (function (){var statearr_19197 = state_19186;
(statearr_19197[(10)] = inst_19173);

(statearr_19197[(8)] = inst_19163__$1);

return statearr_19197;
})();
var statearr_19198_19214 = state_19186__$1;
(statearr_19198_19214[(2)] = null);

(statearr_19198_19214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19187 === (9))){
var state_19186__$1 = state_19186;
var statearr_19199_19215 = state_19186__$1;
(statearr_19199_19215[(2)] = null);

(statearr_19199_19215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19187 === (5))){
var state_19186__$1 = state_19186;
var statearr_19200_19216 = state_19186__$1;
(statearr_19200_19216[(2)] = null);

(statearr_19200_19216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19187 === (10))){
var inst_19178 = (state_19186[(2)]);
var state_19186__$1 = state_19186;
var statearr_19201_19217 = state_19186__$1;
(statearr_19201_19217[(2)] = inst_19178);

(statearr_19201_19217[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19187 === (8))){
var inst_19168 = (state_19186[(7)]);
var state_19186__$1 = state_19186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19186__$1,(11),out,inst_19168);
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
});})(c__15871__auto___19207,out))
;
return ((function (switch__15704__auto__,c__15871__auto___19207,out){
return (function() {
var cljs$core$async$state_machine__15705__auto__ = null;
var cljs$core$async$state_machine__15705__auto____0 = (function (){
var statearr_19202 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19202[(0)] = cljs$core$async$state_machine__15705__auto__);

(statearr_19202[(1)] = (1));

return statearr_19202;
});
var cljs$core$async$state_machine__15705__auto____1 = (function (state_19186){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__.call(null,state_19186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e19203){if((e19203 instanceof Object)){
var ex__15708__auto__ = e19203;
var statearr_19204_19218 = state_19186;
(statearr_19204_19218[(5)] = ex__15708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19219 = state_19186;
state_19186 = G__19219;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$state_machine__15705__auto__ = function(state_19186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15705__auto____1.call(this,state_19186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15705__auto____0;
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15705__auto____1;
return cljs$core$async$state_machine__15705__auto__;
})()
;})(switch__15704__auto__,c__15871__auto___19207,out))
})();
var state__15873__auto__ = (function (){var statearr_19205 = f__15872__auto__.call(null);
(statearr_19205[(6)] = c__15871__auto___19207);

return statearr_19205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15873__auto__);
});})(c__15871__auto___19207,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19221 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19221 = (function (f,ch,meta19222){
this.f = f;
this.ch = ch;
this.meta19222 = meta19222;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19223,meta19222__$1){
var self__ = this;
var _19223__$1 = this;
return (new cljs.core.async.t_cljs$core$async19221(self__.f,self__.ch,meta19222__$1));
});

cljs.core.async.t_cljs$core$async19221.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19223){
var self__ = this;
var _19223__$1 = this;
return self__.meta19222;
});

cljs.core.async.t_cljs$core$async19221.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19221.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19221.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19221.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19221.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19224 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19224 = (function (f,ch,meta19222,_,fn1,meta19225){
this.f = f;
this.ch = ch;
this.meta19222 = meta19222;
this._ = _;
this.fn1 = fn1;
this.meta19225 = meta19225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19226,meta19225__$1){
var self__ = this;
var _19226__$1 = this;
return (new cljs.core.async.t_cljs$core$async19224(self__.f,self__.ch,self__.meta19222,self__._,self__.fn1,meta19225__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19224.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19226){
var self__ = this;
var _19226__$1 = this;
return self__.meta19225;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19224.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19224.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19224.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19224.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19220_SHARP_){
return f1.call(null,(((p1__19220_SHARP_ == null))?null:self__.f.call(null,p1__19220_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19224.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19222","meta19222",1739003607,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19221","cljs.core.async/t_cljs$core$async19221",-1070418265,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19225","meta19225",1011830324,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19224.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19224";

cljs.core.async.t_cljs$core$async19224.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async19224");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19224.
 */
cljs.core.async.__GT_t_cljs$core$async19224 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19224(f__$1,ch__$1,meta19222__$1,___$2,fn1__$1,meta19225){
return (new cljs.core.async.t_cljs$core$async19224(f__$1,ch__$1,meta19222__$1,___$2,fn1__$1,meta19225));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19224(self__.f,self__.ch,self__.meta19222,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async19221.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19221.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19221.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19222","meta19222",1739003607,null)], null);
});

cljs.core.async.t_cljs$core$async19221.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19221.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19221";

cljs.core.async.t_cljs$core$async19221.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async19221");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19221.
 */
cljs.core.async.__GT_t_cljs$core$async19221 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19221(f__$1,ch__$1,meta19222){
return (new cljs.core.async.t_cljs$core$async19221(f__$1,ch__$1,meta19222));
});

}

return (new cljs.core.async.t_cljs$core$async19221(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19227 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19227 = (function (f,ch,meta19228){
this.f = f;
this.ch = ch;
this.meta19228 = meta19228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19229,meta19228__$1){
var self__ = this;
var _19229__$1 = this;
return (new cljs.core.async.t_cljs$core$async19227(self__.f,self__.ch,meta19228__$1));
});

cljs.core.async.t_cljs$core$async19227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19229){
var self__ = this;
var _19229__$1 = this;
return self__.meta19228;
});

cljs.core.async.t_cljs$core$async19227.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19227.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19227.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19227.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19227.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19227.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19227.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19228","meta19228",92502742,null)], null);
});

cljs.core.async.t_cljs$core$async19227.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19227.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19227";

cljs.core.async.t_cljs$core$async19227.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async19227");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19227.
 */
cljs.core.async.__GT_t_cljs$core$async19227 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19227(f__$1,ch__$1,meta19228){
return (new cljs.core.async.t_cljs$core$async19227(f__$1,ch__$1,meta19228));
});

}

return (new cljs.core.async.t_cljs$core$async19227(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19230 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19230 = (function (p,ch,meta19231){
this.p = p;
this.ch = ch;
this.meta19231 = meta19231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19232,meta19231__$1){
var self__ = this;
var _19232__$1 = this;
return (new cljs.core.async.t_cljs$core$async19230(self__.p,self__.ch,meta19231__$1));
});

cljs.core.async.t_cljs$core$async19230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19232){
var self__ = this;
var _19232__$1 = this;
return self__.meta19231;
});

cljs.core.async.t_cljs$core$async19230.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19230.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19230.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19230.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19230.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19230.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19230.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19230.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19231","meta19231",800501020,null)], null);
});

cljs.core.async.t_cljs$core$async19230.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19230.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19230";

cljs.core.async.t_cljs$core$async19230.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async19230");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19230.
 */
cljs.core.async.__GT_t_cljs$core$async19230 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19230(p__$1,ch__$1,meta19231){
return (new cljs.core.async.t_cljs$core$async19230(p__$1,ch__$1,meta19231));
});

}

return (new cljs.core.async.t_cljs$core$async19230(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19234 = arguments.length;
switch (G__19234) {
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
var c__15871__auto___19274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15871__auto___19274,out){
return (function (){
var f__15872__auto__ = (function (){var switch__15704__auto__ = ((function (c__15871__auto___19274,out){
return (function (state_19255){
var state_val_19256 = (state_19255[(1)]);
if((state_val_19256 === (7))){
var inst_19251 = (state_19255[(2)]);
var state_19255__$1 = state_19255;
var statearr_19257_19275 = state_19255__$1;
(statearr_19257_19275[(2)] = inst_19251);

(statearr_19257_19275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19256 === (1))){
var state_19255__$1 = state_19255;
var statearr_19258_19276 = state_19255__$1;
(statearr_19258_19276[(2)] = null);

(statearr_19258_19276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19256 === (4))){
var inst_19237 = (state_19255[(7)]);
var inst_19237__$1 = (state_19255[(2)]);
var inst_19238 = (inst_19237__$1 == null);
var state_19255__$1 = (function (){var statearr_19259 = state_19255;
(statearr_19259[(7)] = inst_19237__$1);

return statearr_19259;
})();
if(cljs.core.truth_(inst_19238)){
var statearr_19260_19277 = state_19255__$1;
(statearr_19260_19277[(1)] = (5));

} else {
var statearr_19261_19278 = state_19255__$1;
(statearr_19261_19278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19256 === (6))){
var inst_19237 = (state_19255[(7)]);
var inst_19242 = p.call(null,inst_19237);
var state_19255__$1 = state_19255;
if(cljs.core.truth_(inst_19242)){
var statearr_19262_19279 = state_19255__$1;
(statearr_19262_19279[(1)] = (8));

} else {
var statearr_19263_19280 = state_19255__$1;
(statearr_19263_19280[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19256 === (3))){
var inst_19253 = (state_19255[(2)]);
var state_19255__$1 = state_19255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19255__$1,inst_19253);
} else {
if((state_val_19256 === (2))){
var state_19255__$1 = state_19255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19255__$1,(4),ch);
} else {
if((state_val_19256 === (11))){
var inst_19245 = (state_19255[(2)]);
var state_19255__$1 = state_19255;
var statearr_19264_19281 = state_19255__$1;
(statearr_19264_19281[(2)] = inst_19245);

(statearr_19264_19281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19256 === (9))){
var state_19255__$1 = state_19255;
var statearr_19265_19282 = state_19255__$1;
(statearr_19265_19282[(2)] = null);

(statearr_19265_19282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19256 === (5))){
var inst_19240 = cljs.core.async.close_BANG_.call(null,out);
var state_19255__$1 = state_19255;
var statearr_19266_19283 = state_19255__$1;
(statearr_19266_19283[(2)] = inst_19240);

(statearr_19266_19283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19256 === (10))){
var inst_19248 = (state_19255[(2)]);
var state_19255__$1 = (function (){var statearr_19267 = state_19255;
(statearr_19267[(8)] = inst_19248);

return statearr_19267;
})();
var statearr_19268_19284 = state_19255__$1;
(statearr_19268_19284[(2)] = null);

(statearr_19268_19284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19256 === (8))){
var inst_19237 = (state_19255[(7)]);
var state_19255__$1 = state_19255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19255__$1,(11),out,inst_19237);
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
});})(c__15871__auto___19274,out))
;
return ((function (switch__15704__auto__,c__15871__auto___19274,out){
return (function() {
var cljs$core$async$state_machine__15705__auto__ = null;
var cljs$core$async$state_machine__15705__auto____0 = (function (){
var statearr_19269 = [null,null,null,null,null,null,null,null,null];
(statearr_19269[(0)] = cljs$core$async$state_machine__15705__auto__);

(statearr_19269[(1)] = (1));

return statearr_19269;
});
var cljs$core$async$state_machine__15705__auto____1 = (function (state_19255){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__.call(null,state_19255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e19270){if((e19270 instanceof Object)){
var ex__15708__auto__ = e19270;
var statearr_19271_19285 = state_19255;
(statearr_19271_19285[(5)] = ex__15708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19286 = state_19255;
state_19255 = G__19286;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$state_machine__15705__auto__ = function(state_19255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15705__auto____1.call(this,state_19255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15705__auto____0;
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15705__auto____1;
return cljs$core$async$state_machine__15705__auto__;
})()
;})(switch__15704__auto__,c__15871__auto___19274,out))
})();
var state__15873__auto__ = (function (){var statearr_19272 = f__15872__auto__.call(null);
(statearr_19272[(6)] = c__15871__auto___19274);

return statearr_19272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15873__auto__);
});})(c__15871__auto___19274,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19288 = arguments.length;
switch (G__19288) {
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
var c__15871__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15871__auto__){
return (function (){
var f__15872__auto__ = (function (){var switch__15704__auto__ = ((function (c__15871__auto__){
return (function (state_19351){
var state_val_19352 = (state_19351[(1)]);
if((state_val_19352 === (7))){
var inst_19347 = (state_19351[(2)]);
var state_19351__$1 = state_19351;
var statearr_19353_19391 = state_19351__$1;
(statearr_19353_19391[(2)] = inst_19347);

(statearr_19353_19391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19352 === (20))){
var inst_19317 = (state_19351[(7)]);
var inst_19328 = (state_19351[(2)]);
var inst_19329 = cljs.core.next.call(null,inst_19317);
var inst_19303 = inst_19329;
var inst_19304 = null;
var inst_19305 = (0);
var inst_19306 = (0);
var state_19351__$1 = (function (){var statearr_19354 = state_19351;
(statearr_19354[(8)] = inst_19305);

(statearr_19354[(9)] = inst_19303);

(statearr_19354[(10)] = inst_19304);

(statearr_19354[(11)] = inst_19328);

(statearr_19354[(12)] = inst_19306);

return statearr_19354;
})();
var statearr_19355_19392 = state_19351__$1;
(statearr_19355_19392[(2)] = null);

(statearr_19355_19392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19352 === (1))){
var state_19351__$1 = state_19351;
var statearr_19356_19393 = state_19351__$1;
(statearr_19356_19393[(2)] = null);

(statearr_19356_19393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19352 === (4))){
var inst_19292 = (state_19351[(13)]);
var inst_19292__$1 = (state_19351[(2)]);
var inst_19293 = (inst_19292__$1 == null);
var state_19351__$1 = (function (){var statearr_19357 = state_19351;
(statearr_19357[(13)] = inst_19292__$1);

return statearr_19357;
})();
if(cljs.core.truth_(inst_19293)){
var statearr_19358_19394 = state_19351__$1;
(statearr_19358_19394[(1)] = (5));

} else {
var statearr_19359_19395 = state_19351__$1;
(statearr_19359_19395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19352 === (15))){
var state_19351__$1 = state_19351;
var statearr_19363_19396 = state_19351__$1;
(statearr_19363_19396[(2)] = null);

(statearr_19363_19396[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19352 === (21))){
var state_19351__$1 = state_19351;
var statearr_19364_19397 = state_19351__$1;
(statearr_19364_19397[(2)] = null);

(statearr_19364_19397[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19352 === (13))){
var inst_19305 = (state_19351[(8)]);
var inst_19303 = (state_19351[(9)]);
var inst_19304 = (state_19351[(10)]);
var inst_19306 = (state_19351[(12)]);
var inst_19313 = (state_19351[(2)]);
var inst_19314 = (inst_19306 + (1));
var tmp19360 = inst_19305;
var tmp19361 = inst_19303;
var tmp19362 = inst_19304;
var inst_19303__$1 = tmp19361;
var inst_19304__$1 = tmp19362;
var inst_19305__$1 = tmp19360;
var inst_19306__$1 = inst_19314;
var state_19351__$1 = (function (){var statearr_19365 = state_19351;
(statearr_19365[(8)] = inst_19305__$1);

(statearr_19365[(9)] = inst_19303__$1);

(statearr_19365[(14)] = inst_19313);

(statearr_19365[(10)] = inst_19304__$1);

(statearr_19365[(12)] = inst_19306__$1);

return statearr_19365;
})();
var statearr_19366_19398 = state_19351__$1;
(statearr_19366_19398[(2)] = null);

(statearr_19366_19398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19352 === (22))){
var state_19351__$1 = state_19351;
var statearr_19367_19399 = state_19351__$1;
(statearr_19367_19399[(2)] = null);

(statearr_19367_19399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19352 === (6))){
var inst_19292 = (state_19351[(13)]);
var inst_19301 = f.call(null,inst_19292);
var inst_19302 = cljs.core.seq.call(null,inst_19301);
var inst_19303 = inst_19302;
var inst_19304 = null;
var inst_19305 = (0);
var inst_19306 = (0);
var state_19351__$1 = (function (){var statearr_19368 = state_19351;
(statearr_19368[(8)] = inst_19305);

(statearr_19368[(9)] = inst_19303);

(statearr_19368[(10)] = inst_19304);

(statearr_19368[(12)] = inst_19306);

return statearr_19368;
})();
var statearr_19369_19400 = state_19351__$1;
(statearr_19369_19400[(2)] = null);

(statearr_19369_19400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19352 === (17))){
var inst_19317 = (state_19351[(7)]);
var inst_19321 = cljs.core.chunk_first.call(null,inst_19317);
var inst_19322 = cljs.core.chunk_rest.call(null,inst_19317);
var inst_19323 = cljs.core.count.call(null,inst_19321);
var inst_19303 = inst_19322;
var inst_19304 = inst_19321;
var inst_19305 = inst_19323;
var inst_19306 = (0);
var state_19351__$1 = (function (){var statearr_19370 = state_19351;
(statearr_19370[(8)] = inst_19305);

(statearr_19370[(9)] = inst_19303);

(statearr_19370[(10)] = inst_19304);

(statearr_19370[(12)] = inst_19306);

return statearr_19370;
})();
var statearr_19371_19401 = state_19351__$1;
(statearr_19371_19401[(2)] = null);

(statearr_19371_19401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19352 === (3))){
var inst_19349 = (state_19351[(2)]);
var state_19351__$1 = state_19351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19351__$1,inst_19349);
} else {
if((state_val_19352 === (12))){
var inst_19337 = (state_19351[(2)]);
var state_19351__$1 = state_19351;
var statearr_19372_19402 = state_19351__$1;
(statearr_19372_19402[(2)] = inst_19337);

(statearr_19372_19402[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19352 === (2))){
var state_19351__$1 = state_19351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19351__$1,(4),in$);
} else {
if((state_val_19352 === (23))){
var inst_19345 = (state_19351[(2)]);
var state_19351__$1 = state_19351;
var statearr_19373_19403 = state_19351__$1;
(statearr_19373_19403[(2)] = inst_19345);

(statearr_19373_19403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19352 === (19))){
var inst_19332 = (state_19351[(2)]);
var state_19351__$1 = state_19351;
var statearr_19374_19404 = state_19351__$1;
(statearr_19374_19404[(2)] = inst_19332);

(statearr_19374_19404[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19352 === (11))){
var inst_19303 = (state_19351[(9)]);
var inst_19317 = (state_19351[(7)]);
var inst_19317__$1 = cljs.core.seq.call(null,inst_19303);
var state_19351__$1 = (function (){var statearr_19375 = state_19351;
(statearr_19375[(7)] = inst_19317__$1);

return statearr_19375;
})();
if(inst_19317__$1){
var statearr_19376_19405 = state_19351__$1;
(statearr_19376_19405[(1)] = (14));

} else {
var statearr_19377_19406 = state_19351__$1;
(statearr_19377_19406[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19352 === (9))){
var inst_19339 = (state_19351[(2)]);
var inst_19340 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19351__$1 = (function (){var statearr_19378 = state_19351;
(statearr_19378[(15)] = inst_19339);

return statearr_19378;
})();
if(cljs.core.truth_(inst_19340)){
var statearr_19379_19407 = state_19351__$1;
(statearr_19379_19407[(1)] = (21));

} else {
var statearr_19380_19408 = state_19351__$1;
(statearr_19380_19408[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19352 === (5))){
var inst_19295 = cljs.core.async.close_BANG_.call(null,out);
var state_19351__$1 = state_19351;
var statearr_19381_19409 = state_19351__$1;
(statearr_19381_19409[(2)] = inst_19295);

(statearr_19381_19409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19352 === (14))){
var inst_19317 = (state_19351[(7)]);
var inst_19319 = cljs.core.chunked_seq_QMARK_.call(null,inst_19317);
var state_19351__$1 = state_19351;
if(inst_19319){
var statearr_19382_19410 = state_19351__$1;
(statearr_19382_19410[(1)] = (17));

} else {
var statearr_19383_19411 = state_19351__$1;
(statearr_19383_19411[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19352 === (16))){
var inst_19335 = (state_19351[(2)]);
var state_19351__$1 = state_19351;
var statearr_19384_19412 = state_19351__$1;
(statearr_19384_19412[(2)] = inst_19335);

(statearr_19384_19412[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19352 === (10))){
var inst_19304 = (state_19351[(10)]);
var inst_19306 = (state_19351[(12)]);
var inst_19311 = cljs.core._nth.call(null,inst_19304,inst_19306);
var state_19351__$1 = state_19351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19351__$1,(13),out,inst_19311);
} else {
if((state_val_19352 === (18))){
var inst_19317 = (state_19351[(7)]);
var inst_19326 = cljs.core.first.call(null,inst_19317);
var state_19351__$1 = state_19351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19351__$1,(20),out,inst_19326);
} else {
if((state_val_19352 === (8))){
var inst_19305 = (state_19351[(8)]);
var inst_19306 = (state_19351[(12)]);
var inst_19308 = (inst_19306 < inst_19305);
var inst_19309 = inst_19308;
var state_19351__$1 = state_19351;
if(cljs.core.truth_(inst_19309)){
var statearr_19385_19413 = state_19351__$1;
(statearr_19385_19413[(1)] = (10));

} else {
var statearr_19386_19414 = state_19351__$1;
(statearr_19386_19414[(1)] = (11));

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
});})(c__15871__auto__))
;
return ((function (switch__15704__auto__,c__15871__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15705__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15705__auto____0 = (function (){
var statearr_19387 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19387[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15705__auto__);

(statearr_19387[(1)] = (1));

return statearr_19387;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15705__auto____1 = (function (state_19351){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__.call(null,state_19351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e19388){if((e19388 instanceof Object)){
var ex__15708__auto__ = e19388;
var statearr_19389_19415 = state_19351;
(statearr_19389_19415[(5)] = ex__15708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19416 = state_19351;
state_19351 = G__19416;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15705__auto__ = function(state_19351){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15705__auto____1.call(this,state_19351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15705__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15705__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15705__auto__;
})()
;})(switch__15704__auto__,c__15871__auto__))
})();
var state__15873__auto__ = (function (){var statearr_19390 = f__15872__auto__.call(null);
(statearr_19390[(6)] = c__15871__auto__);

return statearr_19390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15873__auto__);
});})(c__15871__auto__))
);

return c__15871__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19418 = arguments.length;
switch (G__19418) {
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
var G__19421 = arguments.length;
switch (G__19421) {
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
var G__19424 = arguments.length;
switch (G__19424) {
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
var c__15871__auto___19471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15871__auto___19471,out){
return (function (){
var f__15872__auto__ = (function (){var switch__15704__auto__ = ((function (c__15871__auto___19471,out){
return (function (state_19448){
var state_val_19449 = (state_19448[(1)]);
if((state_val_19449 === (7))){
var inst_19443 = (state_19448[(2)]);
var state_19448__$1 = state_19448;
var statearr_19450_19472 = state_19448__$1;
(statearr_19450_19472[(2)] = inst_19443);

(statearr_19450_19472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19449 === (1))){
var inst_19425 = null;
var state_19448__$1 = (function (){var statearr_19451 = state_19448;
(statearr_19451[(7)] = inst_19425);

return statearr_19451;
})();
var statearr_19452_19473 = state_19448__$1;
(statearr_19452_19473[(2)] = null);

(statearr_19452_19473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19449 === (4))){
var inst_19428 = (state_19448[(8)]);
var inst_19428__$1 = (state_19448[(2)]);
var inst_19429 = (inst_19428__$1 == null);
var inst_19430 = cljs.core.not.call(null,inst_19429);
var state_19448__$1 = (function (){var statearr_19453 = state_19448;
(statearr_19453[(8)] = inst_19428__$1);

return statearr_19453;
})();
if(inst_19430){
var statearr_19454_19474 = state_19448__$1;
(statearr_19454_19474[(1)] = (5));

} else {
var statearr_19455_19475 = state_19448__$1;
(statearr_19455_19475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19449 === (6))){
var state_19448__$1 = state_19448;
var statearr_19456_19476 = state_19448__$1;
(statearr_19456_19476[(2)] = null);

(statearr_19456_19476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19449 === (3))){
var inst_19445 = (state_19448[(2)]);
var inst_19446 = cljs.core.async.close_BANG_.call(null,out);
var state_19448__$1 = (function (){var statearr_19457 = state_19448;
(statearr_19457[(9)] = inst_19445);

return statearr_19457;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19448__$1,inst_19446);
} else {
if((state_val_19449 === (2))){
var state_19448__$1 = state_19448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19448__$1,(4),ch);
} else {
if((state_val_19449 === (11))){
var inst_19428 = (state_19448[(8)]);
var inst_19437 = (state_19448[(2)]);
var inst_19425 = inst_19428;
var state_19448__$1 = (function (){var statearr_19458 = state_19448;
(statearr_19458[(7)] = inst_19425);

(statearr_19458[(10)] = inst_19437);

return statearr_19458;
})();
var statearr_19459_19477 = state_19448__$1;
(statearr_19459_19477[(2)] = null);

(statearr_19459_19477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19449 === (9))){
var inst_19428 = (state_19448[(8)]);
var state_19448__$1 = state_19448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19448__$1,(11),out,inst_19428);
} else {
if((state_val_19449 === (5))){
var inst_19425 = (state_19448[(7)]);
var inst_19428 = (state_19448[(8)]);
var inst_19432 = cljs.core._EQ_.call(null,inst_19428,inst_19425);
var state_19448__$1 = state_19448;
if(inst_19432){
var statearr_19461_19478 = state_19448__$1;
(statearr_19461_19478[(1)] = (8));

} else {
var statearr_19462_19479 = state_19448__$1;
(statearr_19462_19479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19449 === (10))){
var inst_19440 = (state_19448[(2)]);
var state_19448__$1 = state_19448;
var statearr_19463_19480 = state_19448__$1;
(statearr_19463_19480[(2)] = inst_19440);

(statearr_19463_19480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19449 === (8))){
var inst_19425 = (state_19448[(7)]);
var tmp19460 = inst_19425;
var inst_19425__$1 = tmp19460;
var state_19448__$1 = (function (){var statearr_19464 = state_19448;
(statearr_19464[(7)] = inst_19425__$1);

return statearr_19464;
})();
var statearr_19465_19481 = state_19448__$1;
(statearr_19465_19481[(2)] = null);

(statearr_19465_19481[(1)] = (2));


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
});})(c__15871__auto___19471,out))
;
return ((function (switch__15704__auto__,c__15871__auto___19471,out){
return (function() {
var cljs$core$async$state_machine__15705__auto__ = null;
var cljs$core$async$state_machine__15705__auto____0 = (function (){
var statearr_19466 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19466[(0)] = cljs$core$async$state_machine__15705__auto__);

(statearr_19466[(1)] = (1));

return statearr_19466;
});
var cljs$core$async$state_machine__15705__auto____1 = (function (state_19448){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__.call(null,state_19448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e19467){if((e19467 instanceof Object)){
var ex__15708__auto__ = e19467;
var statearr_19468_19482 = state_19448;
(statearr_19468_19482[(5)] = ex__15708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19483 = state_19448;
state_19448 = G__19483;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$state_machine__15705__auto__ = function(state_19448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15705__auto____1.call(this,state_19448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15705__auto____0;
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15705__auto____1;
return cljs$core$async$state_machine__15705__auto__;
})()
;})(switch__15704__auto__,c__15871__auto___19471,out))
})();
var state__15873__auto__ = (function (){var statearr_19469 = f__15872__auto__.call(null);
(statearr_19469[(6)] = c__15871__auto___19471);

return statearr_19469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15873__auto__);
});})(c__15871__auto___19471,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19485 = arguments.length;
switch (G__19485) {
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
var c__15871__auto___19551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15871__auto___19551,out){
return (function (){
var f__15872__auto__ = (function (){var switch__15704__auto__ = ((function (c__15871__auto___19551,out){
return (function (state_19523){
var state_val_19524 = (state_19523[(1)]);
if((state_val_19524 === (7))){
var inst_19519 = (state_19523[(2)]);
var state_19523__$1 = state_19523;
var statearr_19525_19552 = state_19523__$1;
(statearr_19525_19552[(2)] = inst_19519);

(statearr_19525_19552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (1))){
var inst_19486 = (new Array(n));
var inst_19487 = inst_19486;
var inst_19488 = (0);
var state_19523__$1 = (function (){var statearr_19526 = state_19523;
(statearr_19526[(7)] = inst_19488);

(statearr_19526[(8)] = inst_19487);

return statearr_19526;
})();
var statearr_19527_19553 = state_19523__$1;
(statearr_19527_19553[(2)] = null);

(statearr_19527_19553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (4))){
var inst_19491 = (state_19523[(9)]);
var inst_19491__$1 = (state_19523[(2)]);
var inst_19492 = (inst_19491__$1 == null);
var inst_19493 = cljs.core.not.call(null,inst_19492);
var state_19523__$1 = (function (){var statearr_19528 = state_19523;
(statearr_19528[(9)] = inst_19491__$1);

return statearr_19528;
})();
if(inst_19493){
var statearr_19529_19554 = state_19523__$1;
(statearr_19529_19554[(1)] = (5));

} else {
var statearr_19530_19555 = state_19523__$1;
(statearr_19530_19555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (15))){
var inst_19513 = (state_19523[(2)]);
var state_19523__$1 = state_19523;
var statearr_19531_19556 = state_19523__$1;
(statearr_19531_19556[(2)] = inst_19513);

(statearr_19531_19556[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (13))){
var state_19523__$1 = state_19523;
var statearr_19532_19557 = state_19523__$1;
(statearr_19532_19557[(2)] = null);

(statearr_19532_19557[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (6))){
var inst_19488 = (state_19523[(7)]);
var inst_19509 = (inst_19488 > (0));
var state_19523__$1 = state_19523;
if(cljs.core.truth_(inst_19509)){
var statearr_19533_19558 = state_19523__$1;
(statearr_19533_19558[(1)] = (12));

} else {
var statearr_19534_19559 = state_19523__$1;
(statearr_19534_19559[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (3))){
var inst_19521 = (state_19523[(2)]);
var state_19523__$1 = state_19523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19523__$1,inst_19521);
} else {
if((state_val_19524 === (12))){
var inst_19487 = (state_19523[(8)]);
var inst_19511 = cljs.core.vec.call(null,inst_19487);
var state_19523__$1 = state_19523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19523__$1,(15),out,inst_19511);
} else {
if((state_val_19524 === (2))){
var state_19523__$1 = state_19523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19523__$1,(4),ch);
} else {
if((state_val_19524 === (11))){
var inst_19503 = (state_19523[(2)]);
var inst_19504 = (new Array(n));
var inst_19487 = inst_19504;
var inst_19488 = (0);
var state_19523__$1 = (function (){var statearr_19535 = state_19523;
(statearr_19535[(7)] = inst_19488);

(statearr_19535[(8)] = inst_19487);

(statearr_19535[(10)] = inst_19503);

return statearr_19535;
})();
var statearr_19536_19560 = state_19523__$1;
(statearr_19536_19560[(2)] = null);

(statearr_19536_19560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (9))){
var inst_19487 = (state_19523[(8)]);
var inst_19501 = cljs.core.vec.call(null,inst_19487);
var state_19523__$1 = state_19523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19523__$1,(11),out,inst_19501);
} else {
if((state_val_19524 === (5))){
var inst_19496 = (state_19523[(11)]);
var inst_19488 = (state_19523[(7)]);
var inst_19487 = (state_19523[(8)]);
var inst_19491 = (state_19523[(9)]);
var inst_19495 = (inst_19487[inst_19488] = inst_19491);
var inst_19496__$1 = (inst_19488 + (1));
var inst_19497 = (inst_19496__$1 < n);
var state_19523__$1 = (function (){var statearr_19537 = state_19523;
(statearr_19537[(11)] = inst_19496__$1);

(statearr_19537[(12)] = inst_19495);

return statearr_19537;
})();
if(cljs.core.truth_(inst_19497)){
var statearr_19538_19561 = state_19523__$1;
(statearr_19538_19561[(1)] = (8));

} else {
var statearr_19539_19562 = state_19523__$1;
(statearr_19539_19562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (14))){
var inst_19516 = (state_19523[(2)]);
var inst_19517 = cljs.core.async.close_BANG_.call(null,out);
var state_19523__$1 = (function (){var statearr_19541 = state_19523;
(statearr_19541[(13)] = inst_19516);

return statearr_19541;
})();
var statearr_19542_19563 = state_19523__$1;
(statearr_19542_19563[(2)] = inst_19517);

(statearr_19542_19563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (10))){
var inst_19507 = (state_19523[(2)]);
var state_19523__$1 = state_19523;
var statearr_19543_19564 = state_19523__$1;
(statearr_19543_19564[(2)] = inst_19507);

(statearr_19543_19564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (8))){
var inst_19496 = (state_19523[(11)]);
var inst_19487 = (state_19523[(8)]);
var tmp19540 = inst_19487;
var inst_19487__$1 = tmp19540;
var inst_19488 = inst_19496;
var state_19523__$1 = (function (){var statearr_19544 = state_19523;
(statearr_19544[(7)] = inst_19488);

(statearr_19544[(8)] = inst_19487__$1);

return statearr_19544;
})();
var statearr_19545_19565 = state_19523__$1;
(statearr_19545_19565[(2)] = null);

(statearr_19545_19565[(1)] = (2));


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
});})(c__15871__auto___19551,out))
;
return ((function (switch__15704__auto__,c__15871__auto___19551,out){
return (function() {
var cljs$core$async$state_machine__15705__auto__ = null;
var cljs$core$async$state_machine__15705__auto____0 = (function (){
var statearr_19546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19546[(0)] = cljs$core$async$state_machine__15705__auto__);

(statearr_19546[(1)] = (1));

return statearr_19546;
});
var cljs$core$async$state_machine__15705__auto____1 = (function (state_19523){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__.call(null,state_19523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e19547){if((e19547 instanceof Object)){
var ex__15708__auto__ = e19547;
var statearr_19548_19566 = state_19523;
(statearr_19548_19566[(5)] = ex__15708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19567 = state_19523;
state_19523 = G__19567;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$state_machine__15705__auto__ = function(state_19523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15705__auto____1.call(this,state_19523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15705__auto____0;
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15705__auto____1;
return cljs$core$async$state_machine__15705__auto__;
})()
;})(switch__15704__auto__,c__15871__auto___19551,out))
})();
var state__15873__auto__ = (function (){var statearr_19549 = f__15872__auto__.call(null);
(statearr_19549[(6)] = c__15871__auto___19551);

return statearr_19549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15873__auto__);
});})(c__15871__auto___19551,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19569 = arguments.length;
switch (G__19569) {
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
var c__15871__auto___19639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15871__auto___19639,out){
return (function (){
var f__15872__auto__ = (function (){var switch__15704__auto__ = ((function (c__15871__auto___19639,out){
return (function (state_19611){
var state_val_19612 = (state_19611[(1)]);
if((state_val_19612 === (7))){
var inst_19607 = (state_19611[(2)]);
var state_19611__$1 = state_19611;
var statearr_19613_19640 = state_19611__$1;
(statearr_19613_19640[(2)] = inst_19607);

(statearr_19613_19640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19612 === (1))){
var inst_19570 = [];
var inst_19571 = inst_19570;
var inst_19572 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19611__$1 = (function (){var statearr_19614 = state_19611;
(statearr_19614[(7)] = inst_19571);

(statearr_19614[(8)] = inst_19572);

return statearr_19614;
})();
var statearr_19615_19641 = state_19611__$1;
(statearr_19615_19641[(2)] = null);

(statearr_19615_19641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19612 === (4))){
var inst_19575 = (state_19611[(9)]);
var inst_19575__$1 = (state_19611[(2)]);
var inst_19576 = (inst_19575__$1 == null);
var inst_19577 = cljs.core.not.call(null,inst_19576);
var state_19611__$1 = (function (){var statearr_19616 = state_19611;
(statearr_19616[(9)] = inst_19575__$1);

return statearr_19616;
})();
if(inst_19577){
var statearr_19617_19642 = state_19611__$1;
(statearr_19617_19642[(1)] = (5));

} else {
var statearr_19618_19643 = state_19611__$1;
(statearr_19618_19643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19612 === (15))){
var inst_19601 = (state_19611[(2)]);
var state_19611__$1 = state_19611;
var statearr_19619_19644 = state_19611__$1;
(statearr_19619_19644[(2)] = inst_19601);

(statearr_19619_19644[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19612 === (13))){
var state_19611__$1 = state_19611;
var statearr_19620_19645 = state_19611__$1;
(statearr_19620_19645[(2)] = null);

(statearr_19620_19645[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19612 === (6))){
var inst_19571 = (state_19611[(7)]);
var inst_19596 = inst_19571.length;
var inst_19597 = (inst_19596 > (0));
var state_19611__$1 = state_19611;
if(cljs.core.truth_(inst_19597)){
var statearr_19621_19646 = state_19611__$1;
(statearr_19621_19646[(1)] = (12));

} else {
var statearr_19622_19647 = state_19611__$1;
(statearr_19622_19647[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19612 === (3))){
var inst_19609 = (state_19611[(2)]);
var state_19611__$1 = state_19611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19611__$1,inst_19609);
} else {
if((state_val_19612 === (12))){
var inst_19571 = (state_19611[(7)]);
var inst_19599 = cljs.core.vec.call(null,inst_19571);
var state_19611__$1 = state_19611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19611__$1,(15),out,inst_19599);
} else {
if((state_val_19612 === (2))){
var state_19611__$1 = state_19611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19611__$1,(4),ch);
} else {
if((state_val_19612 === (11))){
var inst_19575 = (state_19611[(9)]);
var inst_19579 = (state_19611[(10)]);
var inst_19589 = (state_19611[(2)]);
var inst_19590 = [];
var inst_19591 = inst_19590.push(inst_19575);
var inst_19571 = inst_19590;
var inst_19572 = inst_19579;
var state_19611__$1 = (function (){var statearr_19623 = state_19611;
(statearr_19623[(11)] = inst_19591);

(statearr_19623[(7)] = inst_19571);

(statearr_19623[(8)] = inst_19572);

(statearr_19623[(12)] = inst_19589);

return statearr_19623;
})();
var statearr_19624_19648 = state_19611__$1;
(statearr_19624_19648[(2)] = null);

(statearr_19624_19648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19612 === (9))){
var inst_19571 = (state_19611[(7)]);
var inst_19587 = cljs.core.vec.call(null,inst_19571);
var state_19611__$1 = state_19611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19611__$1,(11),out,inst_19587);
} else {
if((state_val_19612 === (5))){
var inst_19572 = (state_19611[(8)]);
var inst_19575 = (state_19611[(9)]);
var inst_19579 = (state_19611[(10)]);
var inst_19579__$1 = f.call(null,inst_19575);
var inst_19580 = cljs.core._EQ_.call(null,inst_19579__$1,inst_19572);
var inst_19581 = cljs.core.keyword_identical_QMARK_.call(null,inst_19572,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19582 = ((inst_19580) || (inst_19581));
var state_19611__$1 = (function (){var statearr_19625 = state_19611;
(statearr_19625[(10)] = inst_19579__$1);

return statearr_19625;
})();
if(cljs.core.truth_(inst_19582)){
var statearr_19626_19649 = state_19611__$1;
(statearr_19626_19649[(1)] = (8));

} else {
var statearr_19627_19650 = state_19611__$1;
(statearr_19627_19650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19612 === (14))){
var inst_19604 = (state_19611[(2)]);
var inst_19605 = cljs.core.async.close_BANG_.call(null,out);
var state_19611__$1 = (function (){var statearr_19629 = state_19611;
(statearr_19629[(13)] = inst_19604);

return statearr_19629;
})();
var statearr_19630_19651 = state_19611__$1;
(statearr_19630_19651[(2)] = inst_19605);

(statearr_19630_19651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19612 === (10))){
var inst_19594 = (state_19611[(2)]);
var state_19611__$1 = state_19611;
var statearr_19631_19652 = state_19611__$1;
(statearr_19631_19652[(2)] = inst_19594);

(statearr_19631_19652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19612 === (8))){
var inst_19571 = (state_19611[(7)]);
var inst_19575 = (state_19611[(9)]);
var inst_19579 = (state_19611[(10)]);
var inst_19584 = inst_19571.push(inst_19575);
var tmp19628 = inst_19571;
var inst_19571__$1 = tmp19628;
var inst_19572 = inst_19579;
var state_19611__$1 = (function (){var statearr_19632 = state_19611;
(statearr_19632[(14)] = inst_19584);

(statearr_19632[(7)] = inst_19571__$1);

(statearr_19632[(8)] = inst_19572);

return statearr_19632;
})();
var statearr_19633_19653 = state_19611__$1;
(statearr_19633_19653[(2)] = null);

(statearr_19633_19653[(1)] = (2));


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
});})(c__15871__auto___19639,out))
;
return ((function (switch__15704__auto__,c__15871__auto___19639,out){
return (function() {
var cljs$core$async$state_machine__15705__auto__ = null;
var cljs$core$async$state_machine__15705__auto____0 = (function (){
var statearr_19634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19634[(0)] = cljs$core$async$state_machine__15705__auto__);

(statearr_19634[(1)] = (1));

return statearr_19634;
});
var cljs$core$async$state_machine__15705__auto____1 = (function (state_19611){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__.call(null,state_19611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e19635){if((e19635 instanceof Object)){
var ex__15708__auto__ = e19635;
var statearr_19636_19654 = state_19611;
(statearr_19636_19654[(5)] = ex__15708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19655 = state_19611;
state_19611 = G__19655;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$state_machine__15705__auto__ = function(state_19611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15705__auto____1.call(this,state_19611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15705__auto____0;
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15705__auto____1;
return cljs$core$async$state_machine__15705__auto__;
})()
;})(switch__15704__auto__,c__15871__auto___19639,out))
})();
var state__15873__auto__ = (function (){var statearr_19637 = f__15872__auto__.call(null);
(statearr_19637[(6)] = c__15871__auto___19639);

return statearr_19637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15873__auto__);
});})(c__15871__auto___19639,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
