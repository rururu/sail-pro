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
var G__17695 = arguments.length;
switch (G__17695) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17696 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17696 = (function (f,blockable,meta17697){
this.f = f;
this.blockable = blockable;
this.meta17697 = meta17697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17698,meta17697__$1){
var self__ = this;
var _17698__$1 = this;
return (new cljs.core.async.t_cljs$core$async17696(self__.f,self__.blockable,meta17697__$1));
});

cljs.core.async.t_cljs$core$async17696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17698){
var self__ = this;
var _17698__$1 = this;
return self__.meta17697;
});

cljs.core.async.t_cljs$core$async17696.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17696.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17696.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17696.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17696.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17697","meta17697",1848521777,null)], null);
});

cljs.core.async.t_cljs$core$async17696.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17696.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17696";

cljs.core.async.t_cljs$core$async17696.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async17696");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17696.
 */
cljs.core.async.__GT_t_cljs$core$async17696 = (function cljs$core$async$__GT_t_cljs$core$async17696(f__$1,blockable__$1,meta17697){
return (new cljs.core.async.t_cljs$core$async17696(f__$1,blockable__$1,meta17697));
});

}

return (new cljs.core.async.t_cljs$core$async17696(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17702 = arguments.length;
switch (G__17702) {
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
var G__17705 = arguments.length;
switch (G__17705) {
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
var G__17708 = arguments.length;
switch (G__17708) {
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
var val_17710 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17710);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17710,ret){
return (function (){
return fn1.call(null,val_17710);
});})(val_17710,ret))
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
var G__17712 = arguments.length;
switch (G__17712) {
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
var n__4518__auto___17714 = n;
var x_17715 = (0);
while(true){
if((x_17715 < n__4518__auto___17714)){
(a[x_17715] = (0));

var G__17716 = (x_17715 + (1));
x_17715 = G__17716;
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

var G__17717 = (i + (1));
i = G__17717;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17718 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17718 = (function (flag,meta17719){
this.flag = flag;
this.meta17719 = meta17719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17720,meta17719__$1){
var self__ = this;
var _17720__$1 = this;
return (new cljs.core.async.t_cljs$core$async17718(self__.flag,meta17719__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17718.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17720){
var self__ = this;
var _17720__$1 = this;
return self__.meta17719;
});})(flag))
;

cljs.core.async.t_cljs$core$async17718.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17718.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17718.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17718.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17718.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17719","meta17719",1712448481,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17718.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17718";

cljs.core.async.t_cljs$core$async17718.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async17718");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17718.
 */
cljs.core.async.__GT_t_cljs$core$async17718 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17718(flag__$1,meta17719){
return (new cljs.core.async.t_cljs$core$async17718(flag__$1,meta17719));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17718(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17721 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17721 = (function (flag,cb,meta17722){
this.flag = flag;
this.cb = cb;
this.meta17722 = meta17722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17723,meta17722__$1){
var self__ = this;
var _17723__$1 = this;
return (new cljs.core.async.t_cljs$core$async17721(self__.flag,self__.cb,meta17722__$1));
});

cljs.core.async.t_cljs$core$async17721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17723){
var self__ = this;
var _17723__$1 = this;
return self__.meta17722;
});

cljs.core.async.t_cljs$core$async17721.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17721.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17721.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17721.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17721.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17722","meta17722",-384376810,null)], null);
});

cljs.core.async.t_cljs$core$async17721.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17721.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17721";

cljs.core.async.t_cljs$core$async17721.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async17721");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17721.
 */
cljs.core.async.__GT_t_cljs$core$async17721 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17721(flag__$1,cb__$1,meta17722){
return (new cljs.core.async.t_cljs$core$async17721(flag__$1,cb__$1,meta17722));
});

}

return (new cljs.core.async.t_cljs$core$async17721(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17724_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17724_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17725_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17725_SHARP_,port], null));
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
var G__17726 = (i + (1));
i = G__17726;
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
var len__4641__auto___17732 = arguments.length;
var i__4642__auto___17733 = (0);
while(true){
if((i__4642__auto___17733 < len__4641__auto___17732)){
args__4647__auto__.push((arguments[i__4642__auto___17733]));

var G__17734 = (i__4642__auto___17733 + (1));
i__4642__auto___17733 = G__17734;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17729){
var map__17730 = p__17729;
var map__17730__$1 = (((((!((map__17730 == null))))?(((((map__17730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17730):map__17730);
var opts = map__17730__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17727){
var G__17728 = cljs.core.first.call(null,seq17727);
var seq17727__$1 = cljs.core.next.call(null,seq17727);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17728,seq17727__$1);
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
var G__17736 = arguments.length;
switch (G__17736) {
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
var c__15771__auto___17782 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15771__auto___17782){
return (function (){
var f__15772__auto__ = (function (){var switch__15604__auto__ = ((function (c__15771__auto___17782){
return (function (state_17760){
var state_val_17761 = (state_17760[(1)]);
if((state_val_17761 === (7))){
var inst_17756 = (state_17760[(2)]);
var state_17760__$1 = state_17760;
var statearr_17762_17783 = state_17760__$1;
(statearr_17762_17783[(2)] = inst_17756);

(statearr_17762_17783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17761 === (1))){
var state_17760__$1 = state_17760;
var statearr_17763_17784 = state_17760__$1;
(statearr_17763_17784[(2)] = null);

(statearr_17763_17784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17761 === (4))){
var inst_17739 = (state_17760[(7)]);
var inst_17739__$1 = (state_17760[(2)]);
var inst_17740 = (inst_17739__$1 == null);
var state_17760__$1 = (function (){var statearr_17764 = state_17760;
(statearr_17764[(7)] = inst_17739__$1);

return statearr_17764;
})();
if(cljs.core.truth_(inst_17740)){
var statearr_17765_17785 = state_17760__$1;
(statearr_17765_17785[(1)] = (5));

} else {
var statearr_17766_17786 = state_17760__$1;
(statearr_17766_17786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17761 === (13))){
var state_17760__$1 = state_17760;
var statearr_17767_17787 = state_17760__$1;
(statearr_17767_17787[(2)] = null);

(statearr_17767_17787[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17761 === (6))){
var inst_17739 = (state_17760[(7)]);
var state_17760__$1 = state_17760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17760__$1,(11),to,inst_17739);
} else {
if((state_val_17761 === (3))){
var inst_17758 = (state_17760[(2)]);
var state_17760__$1 = state_17760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17760__$1,inst_17758);
} else {
if((state_val_17761 === (12))){
var state_17760__$1 = state_17760;
var statearr_17768_17788 = state_17760__$1;
(statearr_17768_17788[(2)] = null);

(statearr_17768_17788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17761 === (2))){
var state_17760__$1 = state_17760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17760__$1,(4),from);
} else {
if((state_val_17761 === (11))){
var inst_17749 = (state_17760[(2)]);
var state_17760__$1 = state_17760;
if(cljs.core.truth_(inst_17749)){
var statearr_17769_17789 = state_17760__$1;
(statearr_17769_17789[(1)] = (12));

} else {
var statearr_17770_17790 = state_17760__$1;
(statearr_17770_17790[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17761 === (9))){
var state_17760__$1 = state_17760;
var statearr_17771_17791 = state_17760__$1;
(statearr_17771_17791[(2)] = null);

(statearr_17771_17791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17761 === (5))){
var state_17760__$1 = state_17760;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17772_17792 = state_17760__$1;
(statearr_17772_17792[(1)] = (8));

} else {
var statearr_17773_17793 = state_17760__$1;
(statearr_17773_17793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17761 === (14))){
var inst_17754 = (state_17760[(2)]);
var state_17760__$1 = state_17760;
var statearr_17774_17794 = state_17760__$1;
(statearr_17774_17794[(2)] = inst_17754);

(statearr_17774_17794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17761 === (10))){
var inst_17746 = (state_17760[(2)]);
var state_17760__$1 = state_17760;
var statearr_17775_17795 = state_17760__$1;
(statearr_17775_17795[(2)] = inst_17746);

(statearr_17775_17795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17761 === (8))){
var inst_17743 = cljs.core.async.close_BANG_.call(null,to);
var state_17760__$1 = state_17760;
var statearr_17776_17796 = state_17760__$1;
(statearr_17776_17796[(2)] = inst_17743);

(statearr_17776_17796[(1)] = (10));


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
});})(c__15771__auto___17782))
;
return ((function (switch__15604__auto__,c__15771__auto___17782){
return (function() {
var cljs$core$async$state_machine__15605__auto__ = null;
var cljs$core$async$state_machine__15605__auto____0 = (function (){
var statearr_17777 = [null,null,null,null,null,null,null,null];
(statearr_17777[(0)] = cljs$core$async$state_machine__15605__auto__);

(statearr_17777[(1)] = (1));

return statearr_17777;
});
var cljs$core$async$state_machine__15605__auto____1 = (function (state_17760){
while(true){
var ret_value__15606__auto__ = (function (){try{while(true){
var result__15607__auto__ = switch__15604__auto__.call(null,state_17760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15607__auto__;
}
break;
}
}catch (e17778){if((e17778 instanceof Object)){
var ex__15608__auto__ = e17778;
var statearr_17779_17797 = state_17760;
(statearr_17779_17797[(5)] = ex__15608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17798 = state_17760;
state_17760 = G__17798;
continue;
} else {
return ret_value__15606__auto__;
}
break;
}
});
cljs$core$async$state_machine__15605__auto__ = function(state_17760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15605__auto____1.call(this,state_17760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15605__auto____0;
cljs$core$async$state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15605__auto____1;
return cljs$core$async$state_machine__15605__auto__;
})()
;})(switch__15604__auto__,c__15771__auto___17782))
})();
var state__15773__auto__ = (function (){var statearr_17780 = f__15772__auto__.call(null);
(statearr_17780[(6)] = c__15771__auto___17782);

return statearr_17780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15773__auto__);
});})(c__15771__auto___17782))
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
return (function (p__17799){
var vec__17800 = p__17799;
var v = cljs.core.nth.call(null,vec__17800,(0),null);
var p = cljs.core.nth.call(null,vec__17800,(1),null);
var job = vec__17800;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15771__auto___17971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15771__auto___17971,res,vec__17800,v,p,job,jobs,results){
return (function (){
var f__15772__auto__ = (function (){var switch__15604__auto__ = ((function (c__15771__auto___17971,res,vec__17800,v,p,job,jobs,results){
return (function (state_17807){
var state_val_17808 = (state_17807[(1)]);
if((state_val_17808 === (1))){
var state_17807__$1 = state_17807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17807__$1,(2),res,v);
} else {
if((state_val_17808 === (2))){
var inst_17804 = (state_17807[(2)]);
var inst_17805 = cljs.core.async.close_BANG_.call(null,res);
var state_17807__$1 = (function (){var statearr_17809 = state_17807;
(statearr_17809[(7)] = inst_17804);

return statearr_17809;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17807__$1,inst_17805);
} else {
return null;
}
}
});})(c__15771__auto___17971,res,vec__17800,v,p,job,jobs,results))
;
return ((function (switch__15604__auto__,c__15771__auto___17971,res,vec__17800,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____0 = (function (){
var statearr_17810 = [null,null,null,null,null,null,null,null];
(statearr_17810[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__);

(statearr_17810[(1)] = (1));

return statearr_17810;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____1 = (function (state_17807){
while(true){
var ret_value__15606__auto__ = (function (){try{while(true){
var result__15607__auto__ = switch__15604__auto__.call(null,state_17807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15607__auto__;
}
break;
}
}catch (e17811){if((e17811 instanceof Object)){
var ex__15608__auto__ = e17811;
var statearr_17812_17972 = state_17807;
(statearr_17812_17972[(5)] = ex__15608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17973 = state_17807;
state_17807 = G__17973;
continue;
} else {
return ret_value__15606__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__ = function(state_17807){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____1.call(this,state_17807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__;
})()
;})(switch__15604__auto__,c__15771__auto___17971,res,vec__17800,v,p,job,jobs,results))
})();
var state__15773__auto__ = (function (){var statearr_17813 = f__15772__auto__.call(null);
(statearr_17813[(6)] = c__15771__auto___17971);

return statearr_17813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15773__auto__);
});})(c__15771__auto___17971,res,vec__17800,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17814){
var vec__17815 = p__17814;
var v = cljs.core.nth.call(null,vec__17815,(0),null);
var p = cljs.core.nth.call(null,vec__17815,(1),null);
var job = vec__17815;
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
var n__4518__auto___17974 = n;
var __17975 = (0);
while(true){
if((__17975 < n__4518__auto___17974)){
var G__17818_17976 = type;
var G__17818_17977__$1 = (((G__17818_17976 instanceof cljs.core.Keyword))?G__17818_17976.fqn:null);
switch (G__17818_17977__$1) {
case "compute":
var c__15771__auto___17979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17975,c__15771__auto___17979,G__17818_17976,G__17818_17977__$1,n__4518__auto___17974,jobs,results,process,async){
return (function (){
var f__15772__auto__ = (function (){var switch__15604__auto__ = ((function (__17975,c__15771__auto___17979,G__17818_17976,G__17818_17977__$1,n__4518__auto___17974,jobs,results,process,async){
return (function (state_17831){
var state_val_17832 = (state_17831[(1)]);
if((state_val_17832 === (1))){
var state_17831__$1 = state_17831;
var statearr_17833_17980 = state_17831__$1;
(statearr_17833_17980[(2)] = null);

(statearr_17833_17980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17832 === (2))){
var state_17831__$1 = state_17831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17831__$1,(4),jobs);
} else {
if((state_val_17832 === (3))){
var inst_17829 = (state_17831[(2)]);
var state_17831__$1 = state_17831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17831__$1,inst_17829);
} else {
if((state_val_17832 === (4))){
var inst_17821 = (state_17831[(2)]);
var inst_17822 = process.call(null,inst_17821);
var state_17831__$1 = state_17831;
if(cljs.core.truth_(inst_17822)){
var statearr_17834_17981 = state_17831__$1;
(statearr_17834_17981[(1)] = (5));

} else {
var statearr_17835_17982 = state_17831__$1;
(statearr_17835_17982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17832 === (5))){
var state_17831__$1 = state_17831;
var statearr_17836_17983 = state_17831__$1;
(statearr_17836_17983[(2)] = null);

(statearr_17836_17983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17832 === (6))){
var state_17831__$1 = state_17831;
var statearr_17837_17984 = state_17831__$1;
(statearr_17837_17984[(2)] = null);

(statearr_17837_17984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17832 === (7))){
var inst_17827 = (state_17831[(2)]);
var state_17831__$1 = state_17831;
var statearr_17838_17985 = state_17831__$1;
(statearr_17838_17985[(2)] = inst_17827);

(statearr_17838_17985[(1)] = (3));


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
});})(__17975,c__15771__auto___17979,G__17818_17976,G__17818_17977__$1,n__4518__auto___17974,jobs,results,process,async))
;
return ((function (__17975,switch__15604__auto__,c__15771__auto___17979,G__17818_17976,G__17818_17977__$1,n__4518__auto___17974,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____0 = (function (){
var statearr_17839 = [null,null,null,null,null,null,null];
(statearr_17839[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__);

(statearr_17839[(1)] = (1));

return statearr_17839;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____1 = (function (state_17831){
while(true){
var ret_value__15606__auto__ = (function (){try{while(true){
var result__15607__auto__ = switch__15604__auto__.call(null,state_17831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15607__auto__;
}
break;
}
}catch (e17840){if((e17840 instanceof Object)){
var ex__15608__auto__ = e17840;
var statearr_17841_17986 = state_17831;
(statearr_17841_17986[(5)] = ex__15608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17987 = state_17831;
state_17831 = G__17987;
continue;
} else {
return ret_value__15606__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__ = function(state_17831){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____1.call(this,state_17831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__;
})()
;})(__17975,switch__15604__auto__,c__15771__auto___17979,G__17818_17976,G__17818_17977__$1,n__4518__auto___17974,jobs,results,process,async))
})();
var state__15773__auto__ = (function (){var statearr_17842 = f__15772__auto__.call(null);
(statearr_17842[(6)] = c__15771__auto___17979);

return statearr_17842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15773__auto__);
});})(__17975,c__15771__auto___17979,G__17818_17976,G__17818_17977__$1,n__4518__auto___17974,jobs,results,process,async))
);


break;
case "async":
var c__15771__auto___17988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17975,c__15771__auto___17988,G__17818_17976,G__17818_17977__$1,n__4518__auto___17974,jobs,results,process,async){
return (function (){
var f__15772__auto__ = (function (){var switch__15604__auto__ = ((function (__17975,c__15771__auto___17988,G__17818_17976,G__17818_17977__$1,n__4518__auto___17974,jobs,results,process,async){
return (function (state_17855){
var state_val_17856 = (state_17855[(1)]);
if((state_val_17856 === (1))){
var state_17855__$1 = state_17855;
var statearr_17857_17989 = state_17855__$1;
(statearr_17857_17989[(2)] = null);

(statearr_17857_17989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17856 === (2))){
var state_17855__$1 = state_17855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17855__$1,(4),jobs);
} else {
if((state_val_17856 === (3))){
var inst_17853 = (state_17855[(2)]);
var state_17855__$1 = state_17855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17855__$1,inst_17853);
} else {
if((state_val_17856 === (4))){
var inst_17845 = (state_17855[(2)]);
var inst_17846 = async.call(null,inst_17845);
var state_17855__$1 = state_17855;
if(cljs.core.truth_(inst_17846)){
var statearr_17858_17990 = state_17855__$1;
(statearr_17858_17990[(1)] = (5));

} else {
var statearr_17859_17991 = state_17855__$1;
(statearr_17859_17991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17856 === (5))){
var state_17855__$1 = state_17855;
var statearr_17860_17992 = state_17855__$1;
(statearr_17860_17992[(2)] = null);

(statearr_17860_17992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17856 === (6))){
var state_17855__$1 = state_17855;
var statearr_17861_17993 = state_17855__$1;
(statearr_17861_17993[(2)] = null);

(statearr_17861_17993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17856 === (7))){
var inst_17851 = (state_17855[(2)]);
var state_17855__$1 = state_17855;
var statearr_17862_17994 = state_17855__$1;
(statearr_17862_17994[(2)] = inst_17851);

(statearr_17862_17994[(1)] = (3));


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
});})(__17975,c__15771__auto___17988,G__17818_17976,G__17818_17977__$1,n__4518__auto___17974,jobs,results,process,async))
;
return ((function (__17975,switch__15604__auto__,c__15771__auto___17988,G__17818_17976,G__17818_17977__$1,n__4518__auto___17974,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____0 = (function (){
var statearr_17863 = [null,null,null,null,null,null,null];
(statearr_17863[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__);

(statearr_17863[(1)] = (1));

return statearr_17863;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____1 = (function (state_17855){
while(true){
var ret_value__15606__auto__ = (function (){try{while(true){
var result__15607__auto__ = switch__15604__auto__.call(null,state_17855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15607__auto__;
}
break;
}
}catch (e17864){if((e17864 instanceof Object)){
var ex__15608__auto__ = e17864;
var statearr_17865_17995 = state_17855;
(statearr_17865_17995[(5)] = ex__15608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17996 = state_17855;
state_17855 = G__17996;
continue;
} else {
return ret_value__15606__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__ = function(state_17855){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____1.call(this,state_17855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__;
})()
;})(__17975,switch__15604__auto__,c__15771__auto___17988,G__17818_17976,G__17818_17977__$1,n__4518__auto___17974,jobs,results,process,async))
})();
var state__15773__auto__ = (function (){var statearr_17866 = f__15772__auto__.call(null);
(statearr_17866[(6)] = c__15771__auto___17988);

return statearr_17866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15773__auto__);
});})(__17975,c__15771__auto___17988,G__17818_17976,G__17818_17977__$1,n__4518__auto___17974,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17818_17977__$1)].join('')));

}

var G__17997 = (__17975 + (1));
__17975 = G__17997;
continue;
} else {
}
break;
}

var c__15771__auto___17998 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15771__auto___17998,jobs,results,process,async){
return (function (){
var f__15772__auto__ = (function (){var switch__15604__auto__ = ((function (c__15771__auto___17998,jobs,results,process,async){
return (function (state_17888){
var state_val_17889 = (state_17888[(1)]);
if((state_val_17889 === (7))){
var inst_17884 = (state_17888[(2)]);
var state_17888__$1 = state_17888;
var statearr_17890_17999 = state_17888__$1;
(statearr_17890_17999[(2)] = inst_17884);

(statearr_17890_17999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17889 === (1))){
var state_17888__$1 = state_17888;
var statearr_17891_18000 = state_17888__$1;
(statearr_17891_18000[(2)] = null);

(statearr_17891_18000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17889 === (4))){
var inst_17869 = (state_17888[(7)]);
var inst_17869__$1 = (state_17888[(2)]);
var inst_17870 = (inst_17869__$1 == null);
var state_17888__$1 = (function (){var statearr_17892 = state_17888;
(statearr_17892[(7)] = inst_17869__$1);

return statearr_17892;
})();
if(cljs.core.truth_(inst_17870)){
var statearr_17893_18001 = state_17888__$1;
(statearr_17893_18001[(1)] = (5));

} else {
var statearr_17894_18002 = state_17888__$1;
(statearr_17894_18002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17889 === (6))){
var inst_17869 = (state_17888[(7)]);
var inst_17874 = (state_17888[(8)]);
var inst_17874__$1 = cljs.core.async.chan.call(null,(1));
var inst_17875 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17876 = [inst_17869,inst_17874__$1];
var inst_17877 = (new cljs.core.PersistentVector(null,2,(5),inst_17875,inst_17876,null));
var state_17888__$1 = (function (){var statearr_17895 = state_17888;
(statearr_17895[(8)] = inst_17874__$1);

return statearr_17895;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17888__$1,(8),jobs,inst_17877);
} else {
if((state_val_17889 === (3))){
var inst_17886 = (state_17888[(2)]);
var state_17888__$1 = state_17888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17888__$1,inst_17886);
} else {
if((state_val_17889 === (2))){
var state_17888__$1 = state_17888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17888__$1,(4),from);
} else {
if((state_val_17889 === (9))){
var inst_17881 = (state_17888[(2)]);
var state_17888__$1 = (function (){var statearr_17896 = state_17888;
(statearr_17896[(9)] = inst_17881);

return statearr_17896;
})();
var statearr_17897_18003 = state_17888__$1;
(statearr_17897_18003[(2)] = null);

(statearr_17897_18003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17889 === (5))){
var inst_17872 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17888__$1 = state_17888;
var statearr_17898_18004 = state_17888__$1;
(statearr_17898_18004[(2)] = inst_17872);

(statearr_17898_18004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17889 === (8))){
var inst_17874 = (state_17888[(8)]);
var inst_17879 = (state_17888[(2)]);
var state_17888__$1 = (function (){var statearr_17899 = state_17888;
(statearr_17899[(10)] = inst_17879);

return statearr_17899;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17888__$1,(9),results,inst_17874);
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
});})(c__15771__auto___17998,jobs,results,process,async))
;
return ((function (switch__15604__auto__,c__15771__auto___17998,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____0 = (function (){
var statearr_17900 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17900[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__);

(statearr_17900[(1)] = (1));

return statearr_17900;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____1 = (function (state_17888){
while(true){
var ret_value__15606__auto__ = (function (){try{while(true){
var result__15607__auto__ = switch__15604__auto__.call(null,state_17888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15607__auto__;
}
break;
}
}catch (e17901){if((e17901 instanceof Object)){
var ex__15608__auto__ = e17901;
var statearr_17902_18005 = state_17888;
(statearr_17902_18005[(5)] = ex__15608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18006 = state_17888;
state_17888 = G__18006;
continue;
} else {
return ret_value__15606__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__ = function(state_17888){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____1.call(this,state_17888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__;
})()
;})(switch__15604__auto__,c__15771__auto___17998,jobs,results,process,async))
})();
var state__15773__auto__ = (function (){var statearr_17903 = f__15772__auto__.call(null);
(statearr_17903[(6)] = c__15771__auto___17998);

return statearr_17903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15773__auto__);
});})(c__15771__auto___17998,jobs,results,process,async))
);


var c__15771__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15771__auto__,jobs,results,process,async){
return (function (){
var f__15772__auto__ = (function (){var switch__15604__auto__ = ((function (c__15771__auto__,jobs,results,process,async){
return (function (state_17941){
var state_val_17942 = (state_17941[(1)]);
if((state_val_17942 === (7))){
var inst_17937 = (state_17941[(2)]);
var state_17941__$1 = state_17941;
var statearr_17943_18007 = state_17941__$1;
(statearr_17943_18007[(2)] = inst_17937);

(statearr_17943_18007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (20))){
var state_17941__$1 = state_17941;
var statearr_17944_18008 = state_17941__$1;
(statearr_17944_18008[(2)] = null);

(statearr_17944_18008[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (1))){
var state_17941__$1 = state_17941;
var statearr_17945_18009 = state_17941__$1;
(statearr_17945_18009[(2)] = null);

(statearr_17945_18009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (4))){
var inst_17906 = (state_17941[(7)]);
var inst_17906__$1 = (state_17941[(2)]);
var inst_17907 = (inst_17906__$1 == null);
var state_17941__$1 = (function (){var statearr_17946 = state_17941;
(statearr_17946[(7)] = inst_17906__$1);

return statearr_17946;
})();
if(cljs.core.truth_(inst_17907)){
var statearr_17947_18010 = state_17941__$1;
(statearr_17947_18010[(1)] = (5));

} else {
var statearr_17948_18011 = state_17941__$1;
(statearr_17948_18011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (15))){
var inst_17919 = (state_17941[(8)]);
var state_17941__$1 = state_17941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17941__$1,(18),to,inst_17919);
} else {
if((state_val_17942 === (21))){
var inst_17932 = (state_17941[(2)]);
var state_17941__$1 = state_17941;
var statearr_17949_18012 = state_17941__$1;
(statearr_17949_18012[(2)] = inst_17932);

(statearr_17949_18012[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (13))){
var inst_17934 = (state_17941[(2)]);
var state_17941__$1 = (function (){var statearr_17950 = state_17941;
(statearr_17950[(9)] = inst_17934);

return statearr_17950;
})();
var statearr_17951_18013 = state_17941__$1;
(statearr_17951_18013[(2)] = null);

(statearr_17951_18013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (6))){
var inst_17906 = (state_17941[(7)]);
var state_17941__$1 = state_17941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17941__$1,(11),inst_17906);
} else {
if((state_val_17942 === (17))){
var inst_17927 = (state_17941[(2)]);
var state_17941__$1 = state_17941;
if(cljs.core.truth_(inst_17927)){
var statearr_17952_18014 = state_17941__$1;
(statearr_17952_18014[(1)] = (19));

} else {
var statearr_17953_18015 = state_17941__$1;
(statearr_17953_18015[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (3))){
var inst_17939 = (state_17941[(2)]);
var state_17941__$1 = state_17941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17941__$1,inst_17939);
} else {
if((state_val_17942 === (12))){
var inst_17916 = (state_17941[(10)]);
var state_17941__$1 = state_17941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17941__$1,(14),inst_17916);
} else {
if((state_val_17942 === (2))){
var state_17941__$1 = state_17941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17941__$1,(4),results);
} else {
if((state_val_17942 === (19))){
var state_17941__$1 = state_17941;
var statearr_17954_18016 = state_17941__$1;
(statearr_17954_18016[(2)] = null);

(statearr_17954_18016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (11))){
var inst_17916 = (state_17941[(2)]);
var state_17941__$1 = (function (){var statearr_17955 = state_17941;
(statearr_17955[(10)] = inst_17916);

return statearr_17955;
})();
var statearr_17956_18017 = state_17941__$1;
(statearr_17956_18017[(2)] = null);

(statearr_17956_18017[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (9))){
var state_17941__$1 = state_17941;
var statearr_17957_18018 = state_17941__$1;
(statearr_17957_18018[(2)] = null);

(statearr_17957_18018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (5))){
var state_17941__$1 = state_17941;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17958_18019 = state_17941__$1;
(statearr_17958_18019[(1)] = (8));

} else {
var statearr_17959_18020 = state_17941__$1;
(statearr_17959_18020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (14))){
var inst_17921 = (state_17941[(11)]);
var inst_17919 = (state_17941[(8)]);
var inst_17919__$1 = (state_17941[(2)]);
var inst_17920 = (inst_17919__$1 == null);
var inst_17921__$1 = cljs.core.not.call(null,inst_17920);
var state_17941__$1 = (function (){var statearr_17960 = state_17941;
(statearr_17960[(11)] = inst_17921__$1);

(statearr_17960[(8)] = inst_17919__$1);

return statearr_17960;
})();
if(inst_17921__$1){
var statearr_17961_18021 = state_17941__$1;
(statearr_17961_18021[(1)] = (15));

} else {
var statearr_17962_18022 = state_17941__$1;
(statearr_17962_18022[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (16))){
var inst_17921 = (state_17941[(11)]);
var state_17941__$1 = state_17941;
var statearr_17963_18023 = state_17941__$1;
(statearr_17963_18023[(2)] = inst_17921);

(statearr_17963_18023[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (10))){
var inst_17913 = (state_17941[(2)]);
var state_17941__$1 = state_17941;
var statearr_17964_18024 = state_17941__$1;
(statearr_17964_18024[(2)] = inst_17913);

(statearr_17964_18024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (18))){
var inst_17924 = (state_17941[(2)]);
var state_17941__$1 = state_17941;
var statearr_17965_18025 = state_17941__$1;
(statearr_17965_18025[(2)] = inst_17924);

(statearr_17965_18025[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (8))){
var inst_17910 = cljs.core.async.close_BANG_.call(null,to);
var state_17941__$1 = state_17941;
var statearr_17966_18026 = state_17941__$1;
(statearr_17966_18026[(2)] = inst_17910);

(statearr_17966_18026[(1)] = (10));


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
});})(c__15771__auto__,jobs,results,process,async))
;
return ((function (switch__15604__auto__,c__15771__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____0 = (function (){
var statearr_17967 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17967[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__);

(statearr_17967[(1)] = (1));

return statearr_17967;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____1 = (function (state_17941){
while(true){
var ret_value__15606__auto__ = (function (){try{while(true){
var result__15607__auto__ = switch__15604__auto__.call(null,state_17941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15607__auto__;
}
break;
}
}catch (e17968){if((e17968 instanceof Object)){
var ex__15608__auto__ = e17968;
var statearr_17969_18027 = state_17941;
(statearr_17969_18027[(5)] = ex__15608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18028 = state_17941;
state_17941 = G__18028;
continue;
} else {
return ret_value__15606__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__ = function(state_17941){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____1.call(this,state_17941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15605__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15605__auto__;
})()
;})(switch__15604__auto__,c__15771__auto__,jobs,results,process,async))
})();
var state__15773__auto__ = (function (){var statearr_17970 = f__15772__auto__.call(null);
(statearr_17970[(6)] = c__15771__auto__);

return statearr_17970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15773__auto__);
});})(c__15771__auto__,jobs,results,process,async))
);

return c__15771__auto__;
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
var G__18030 = arguments.length;
switch (G__18030) {
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
var G__18033 = arguments.length;
switch (G__18033) {
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
var G__18036 = arguments.length;
switch (G__18036) {
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
var c__15771__auto___18085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15771__auto___18085,tc,fc){
return (function (){
var f__15772__auto__ = (function (){var switch__15604__auto__ = ((function (c__15771__auto___18085,tc,fc){
return (function (state_18062){
var state_val_18063 = (state_18062[(1)]);
if((state_val_18063 === (7))){
var inst_18058 = (state_18062[(2)]);
var state_18062__$1 = state_18062;
var statearr_18064_18086 = state_18062__$1;
(statearr_18064_18086[(2)] = inst_18058);

(statearr_18064_18086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18063 === (1))){
var state_18062__$1 = state_18062;
var statearr_18065_18087 = state_18062__$1;
(statearr_18065_18087[(2)] = null);

(statearr_18065_18087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18063 === (4))){
var inst_18039 = (state_18062[(7)]);
var inst_18039__$1 = (state_18062[(2)]);
var inst_18040 = (inst_18039__$1 == null);
var state_18062__$1 = (function (){var statearr_18066 = state_18062;
(statearr_18066[(7)] = inst_18039__$1);

return statearr_18066;
})();
if(cljs.core.truth_(inst_18040)){
var statearr_18067_18088 = state_18062__$1;
(statearr_18067_18088[(1)] = (5));

} else {
var statearr_18068_18089 = state_18062__$1;
(statearr_18068_18089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18063 === (13))){
var state_18062__$1 = state_18062;
var statearr_18069_18090 = state_18062__$1;
(statearr_18069_18090[(2)] = null);

(statearr_18069_18090[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18063 === (6))){
var inst_18039 = (state_18062[(7)]);
var inst_18045 = p.call(null,inst_18039);
var state_18062__$1 = state_18062;
if(cljs.core.truth_(inst_18045)){
var statearr_18070_18091 = state_18062__$1;
(statearr_18070_18091[(1)] = (9));

} else {
var statearr_18071_18092 = state_18062__$1;
(statearr_18071_18092[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18063 === (3))){
var inst_18060 = (state_18062[(2)]);
var state_18062__$1 = state_18062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18062__$1,inst_18060);
} else {
if((state_val_18063 === (12))){
var state_18062__$1 = state_18062;
var statearr_18072_18093 = state_18062__$1;
(statearr_18072_18093[(2)] = null);

(statearr_18072_18093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18063 === (2))){
var state_18062__$1 = state_18062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18062__$1,(4),ch);
} else {
if((state_val_18063 === (11))){
var inst_18039 = (state_18062[(7)]);
var inst_18049 = (state_18062[(2)]);
var state_18062__$1 = state_18062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18062__$1,(8),inst_18049,inst_18039);
} else {
if((state_val_18063 === (9))){
var state_18062__$1 = state_18062;
var statearr_18073_18094 = state_18062__$1;
(statearr_18073_18094[(2)] = tc);

(statearr_18073_18094[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18063 === (5))){
var inst_18042 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18043 = cljs.core.async.close_BANG_.call(null,fc);
var state_18062__$1 = (function (){var statearr_18074 = state_18062;
(statearr_18074[(8)] = inst_18042);

return statearr_18074;
})();
var statearr_18075_18095 = state_18062__$1;
(statearr_18075_18095[(2)] = inst_18043);

(statearr_18075_18095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18063 === (14))){
var inst_18056 = (state_18062[(2)]);
var state_18062__$1 = state_18062;
var statearr_18076_18096 = state_18062__$1;
(statearr_18076_18096[(2)] = inst_18056);

(statearr_18076_18096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18063 === (10))){
var state_18062__$1 = state_18062;
var statearr_18077_18097 = state_18062__$1;
(statearr_18077_18097[(2)] = fc);

(statearr_18077_18097[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18063 === (8))){
var inst_18051 = (state_18062[(2)]);
var state_18062__$1 = state_18062;
if(cljs.core.truth_(inst_18051)){
var statearr_18078_18098 = state_18062__$1;
(statearr_18078_18098[(1)] = (12));

} else {
var statearr_18079_18099 = state_18062__$1;
(statearr_18079_18099[(1)] = (13));

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
});})(c__15771__auto___18085,tc,fc))
;
return ((function (switch__15604__auto__,c__15771__auto___18085,tc,fc){
return (function() {
var cljs$core$async$state_machine__15605__auto__ = null;
var cljs$core$async$state_machine__15605__auto____0 = (function (){
var statearr_18080 = [null,null,null,null,null,null,null,null,null];
(statearr_18080[(0)] = cljs$core$async$state_machine__15605__auto__);

(statearr_18080[(1)] = (1));

return statearr_18080;
});
var cljs$core$async$state_machine__15605__auto____1 = (function (state_18062){
while(true){
var ret_value__15606__auto__ = (function (){try{while(true){
var result__15607__auto__ = switch__15604__auto__.call(null,state_18062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15607__auto__;
}
break;
}
}catch (e18081){if((e18081 instanceof Object)){
var ex__15608__auto__ = e18081;
var statearr_18082_18100 = state_18062;
(statearr_18082_18100[(5)] = ex__15608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18101 = state_18062;
state_18062 = G__18101;
continue;
} else {
return ret_value__15606__auto__;
}
break;
}
});
cljs$core$async$state_machine__15605__auto__ = function(state_18062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15605__auto____1.call(this,state_18062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15605__auto____0;
cljs$core$async$state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15605__auto____1;
return cljs$core$async$state_machine__15605__auto__;
})()
;})(switch__15604__auto__,c__15771__auto___18085,tc,fc))
})();
var state__15773__auto__ = (function (){var statearr_18083 = f__15772__auto__.call(null);
(statearr_18083[(6)] = c__15771__auto___18085);

return statearr_18083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15773__auto__);
});})(c__15771__auto___18085,tc,fc))
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
var c__15771__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15771__auto__){
return (function (){
var f__15772__auto__ = (function (){var switch__15604__auto__ = ((function (c__15771__auto__){
return (function (state_18122){
var state_val_18123 = (state_18122[(1)]);
if((state_val_18123 === (7))){
var inst_18118 = (state_18122[(2)]);
var state_18122__$1 = state_18122;
var statearr_18124_18142 = state_18122__$1;
(statearr_18124_18142[(2)] = inst_18118);

(statearr_18124_18142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18123 === (1))){
var inst_18102 = init;
var state_18122__$1 = (function (){var statearr_18125 = state_18122;
(statearr_18125[(7)] = inst_18102);

return statearr_18125;
})();
var statearr_18126_18143 = state_18122__$1;
(statearr_18126_18143[(2)] = null);

(statearr_18126_18143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18123 === (4))){
var inst_18105 = (state_18122[(8)]);
var inst_18105__$1 = (state_18122[(2)]);
var inst_18106 = (inst_18105__$1 == null);
var state_18122__$1 = (function (){var statearr_18127 = state_18122;
(statearr_18127[(8)] = inst_18105__$1);

return statearr_18127;
})();
if(cljs.core.truth_(inst_18106)){
var statearr_18128_18144 = state_18122__$1;
(statearr_18128_18144[(1)] = (5));

} else {
var statearr_18129_18145 = state_18122__$1;
(statearr_18129_18145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18123 === (6))){
var inst_18105 = (state_18122[(8)]);
var inst_18109 = (state_18122[(9)]);
var inst_18102 = (state_18122[(7)]);
var inst_18109__$1 = f.call(null,inst_18102,inst_18105);
var inst_18110 = cljs.core.reduced_QMARK_.call(null,inst_18109__$1);
var state_18122__$1 = (function (){var statearr_18130 = state_18122;
(statearr_18130[(9)] = inst_18109__$1);

return statearr_18130;
})();
if(inst_18110){
var statearr_18131_18146 = state_18122__$1;
(statearr_18131_18146[(1)] = (8));

} else {
var statearr_18132_18147 = state_18122__$1;
(statearr_18132_18147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18123 === (3))){
var inst_18120 = (state_18122[(2)]);
var state_18122__$1 = state_18122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18122__$1,inst_18120);
} else {
if((state_val_18123 === (2))){
var state_18122__$1 = state_18122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18122__$1,(4),ch);
} else {
if((state_val_18123 === (9))){
var inst_18109 = (state_18122[(9)]);
var inst_18102 = inst_18109;
var state_18122__$1 = (function (){var statearr_18133 = state_18122;
(statearr_18133[(7)] = inst_18102);

return statearr_18133;
})();
var statearr_18134_18148 = state_18122__$1;
(statearr_18134_18148[(2)] = null);

(statearr_18134_18148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18123 === (5))){
var inst_18102 = (state_18122[(7)]);
var state_18122__$1 = state_18122;
var statearr_18135_18149 = state_18122__$1;
(statearr_18135_18149[(2)] = inst_18102);

(statearr_18135_18149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18123 === (10))){
var inst_18116 = (state_18122[(2)]);
var state_18122__$1 = state_18122;
var statearr_18136_18150 = state_18122__$1;
(statearr_18136_18150[(2)] = inst_18116);

(statearr_18136_18150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18123 === (8))){
var inst_18109 = (state_18122[(9)]);
var inst_18112 = cljs.core.deref.call(null,inst_18109);
var state_18122__$1 = state_18122;
var statearr_18137_18151 = state_18122__$1;
(statearr_18137_18151[(2)] = inst_18112);

(statearr_18137_18151[(1)] = (10));


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
});})(c__15771__auto__))
;
return ((function (switch__15604__auto__,c__15771__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15605__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15605__auto____0 = (function (){
var statearr_18138 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18138[(0)] = cljs$core$async$reduce_$_state_machine__15605__auto__);

(statearr_18138[(1)] = (1));

return statearr_18138;
});
var cljs$core$async$reduce_$_state_machine__15605__auto____1 = (function (state_18122){
while(true){
var ret_value__15606__auto__ = (function (){try{while(true){
var result__15607__auto__ = switch__15604__auto__.call(null,state_18122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15607__auto__;
}
break;
}
}catch (e18139){if((e18139 instanceof Object)){
var ex__15608__auto__ = e18139;
var statearr_18140_18152 = state_18122;
(statearr_18140_18152[(5)] = ex__15608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18153 = state_18122;
state_18122 = G__18153;
continue;
} else {
return ret_value__15606__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15605__auto__ = function(state_18122){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15605__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15605__auto____1.call(this,state_18122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15605__auto____0;
cljs$core$async$reduce_$_state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15605__auto____1;
return cljs$core$async$reduce_$_state_machine__15605__auto__;
})()
;})(switch__15604__auto__,c__15771__auto__))
})();
var state__15773__auto__ = (function (){var statearr_18141 = f__15772__auto__.call(null);
(statearr_18141[(6)] = c__15771__auto__);

return statearr_18141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15773__auto__);
});})(c__15771__auto__))
);

return c__15771__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__15771__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15771__auto__,f__$1){
return (function (){
var f__15772__auto__ = (function (){var switch__15604__auto__ = ((function (c__15771__auto__,f__$1){
return (function (state_18159){
var state_val_18160 = (state_18159[(1)]);
if((state_val_18160 === (1))){
var inst_18154 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_18159__$1 = state_18159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18159__$1,(2),inst_18154);
} else {
if((state_val_18160 === (2))){
var inst_18156 = (state_18159[(2)]);
var inst_18157 = f__$1.call(null,inst_18156);
var state_18159__$1 = state_18159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18159__$1,inst_18157);
} else {
return null;
}
}
});})(c__15771__auto__,f__$1))
;
return ((function (switch__15604__auto__,c__15771__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15605__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15605__auto____0 = (function (){
var statearr_18161 = [null,null,null,null,null,null,null];
(statearr_18161[(0)] = cljs$core$async$transduce_$_state_machine__15605__auto__);

(statearr_18161[(1)] = (1));

return statearr_18161;
});
var cljs$core$async$transduce_$_state_machine__15605__auto____1 = (function (state_18159){
while(true){
var ret_value__15606__auto__ = (function (){try{while(true){
var result__15607__auto__ = switch__15604__auto__.call(null,state_18159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15607__auto__;
}
break;
}
}catch (e18162){if((e18162 instanceof Object)){
var ex__15608__auto__ = e18162;
var statearr_18163_18165 = state_18159;
(statearr_18163_18165[(5)] = ex__15608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18166 = state_18159;
state_18159 = G__18166;
continue;
} else {
return ret_value__15606__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15605__auto__ = function(state_18159){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15605__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15605__auto____1.call(this,state_18159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15605__auto____0;
cljs$core$async$transduce_$_state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15605__auto____1;
return cljs$core$async$transduce_$_state_machine__15605__auto__;
})()
;})(switch__15604__auto__,c__15771__auto__,f__$1))
})();
var state__15773__auto__ = (function (){var statearr_18164 = f__15772__auto__.call(null);
(statearr_18164[(6)] = c__15771__auto__);

return statearr_18164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15773__auto__);
});})(c__15771__auto__,f__$1))
);

return c__15771__auto__;
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
var G__18168 = arguments.length;
switch (G__18168) {
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
var c__15771__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15771__auto__){
return (function (){
var f__15772__auto__ = (function (){var switch__15604__auto__ = ((function (c__15771__auto__){
return (function (state_18193){
var state_val_18194 = (state_18193[(1)]);
if((state_val_18194 === (7))){
var inst_18175 = (state_18193[(2)]);
var state_18193__$1 = state_18193;
var statearr_18195_18216 = state_18193__$1;
(statearr_18195_18216[(2)] = inst_18175);

(statearr_18195_18216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18194 === (1))){
var inst_18169 = cljs.core.seq.call(null,coll);
var inst_18170 = inst_18169;
var state_18193__$1 = (function (){var statearr_18196 = state_18193;
(statearr_18196[(7)] = inst_18170);

return statearr_18196;
})();
var statearr_18197_18217 = state_18193__$1;
(statearr_18197_18217[(2)] = null);

(statearr_18197_18217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18194 === (4))){
var inst_18170 = (state_18193[(7)]);
var inst_18173 = cljs.core.first.call(null,inst_18170);
var state_18193__$1 = state_18193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18193__$1,(7),ch,inst_18173);
} else {
if((state_val_18194 === (13))){
var inst_18187 = (state_18193[(2)]);
var state_18193__$1 = state_18193;
var statearr_18198_18218 = state_18193__$1;
(statearr_18198_18218[(2)] = inst_18187);

(statearr_18198_18218[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18194 === (6))){
var inst_18178 = (state_18193[(2)]);
var state_18193__$1 = state_18193;
if(cljs.core.truth_(inst_18178)){
var statearr_18199_18219 = state_18193__$1;
(statearr_18199_18219[(1)] = (8));

} else {
var statearr_18200_18220 = state_18193__$1;
(statearr_18200_18220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18194 === (3))){
var inst_18191 = (state_18193[(2)]);
var state_18193__$1 = state_18193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18193__$1,inst_18191);
} else {
if((state_val_18194 === (12))){
var state_18193__$1 = state_18193;
var statearr_18201_18221 = state_18193__$1;
(statearr_18201_18221[(2)] = null);

(statearr_18201_18221[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18194 === (2))){
var inst_18170 = (state_18193[(7)]);
var state_18193__$1 = state_18193;
if(cljs.core.truth_(inst_18170)){
var statearr_18202_18222 = state_18193__$1;
(statearr_18202_18222[(1)] = (4));

} else {
var statearr_18203_18223 = state_18193__$1;
(statearr_18203_18223[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18194 === (11))){
var inst_18184 = cljs.core.async.close_BANG_.call(null,ch);
var state_18193__$1 = state_18193;
var statearr_18204_18224 = state_18193__$1;
(statearr_18204_18224[(2)] = inst_18184);

(statearr_18204_18224[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18194 === (9))){
var state_18193__$1 = state_18193;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18205_18225 = state_18193__$1;
(statearr_18205_18225[(1)] = (11));

} else {
var statearr_18206_18226 = state_18193__$1;
(statearr_18206_18226[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18194 === (5))){
var inst_18170 = (state_18193[(7)]);
var state_18193__$1 = state_18193;
var statearr_18207_18227 = state_18193__$1;
(statearr_18207_18227[(2)] = inst_18170);

(statearr_18207_18227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18194 === (10))){
var inst_18189 = (state_18193[(2)]);
var state_18193__$1 = state_18193;
var statearr_18208_18228 = state_18193__$1;
(statearr_18208_18228[(2)] = inst_18189);

(statearr_18208_18228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18194 === (8))){
var inst_18170 = (state_18193[(7)]);
var inst_18180 = cljs.core.next.call(null,inst_18170);
var inst_18170__$1 = inst_18180;
var state_18193__$1 = (function (){var statearr_18209 = state_18193;
(statearr_18209[(7)] = inst_18170__$1);

return statearr_18209;
})();
var statearr_18210_18229 = state_18193__$1;
(statearr_18210_18229[(2)] = null);

(statearr_18210_18229[(1)] = (2));


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
});})(c__15771__auto__))
;
return ((function (switch__15604__auto__,c__15771__auto__){
return (function() {
var cljs$core$async$state_machine__15605__auto__ = null;
var cljs$core$async$state_machine__15605__auto____0 = (function (){
var statearr_18211 = [null,null,null,null,null,null,null,null];
(statearr_18211[(0)] = cljs$core$async$state_machine__15605__auto__);

(statearr_18211[(1)] = (1));

return statearr_18211;
});
var cljs$core$async$state_machine__15605__auto____1 = (function (state_18193){
while(true){
var ret_value__15606__auto__ = (function (){try{while(true){
var result__15607__auto__ = switch__15604__auto__.call(null,state_18193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15607__auto__;
}
break;
}
}catch (e18212){if((e18212 instanceof Object)){
var ex__15608__auto__ = e18212;
var statearr_18213_18230 = state_18193;
(statearr_18213_18230[(5)] = ex__15608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18231 = state_18193;
state_18193 = G__18231;
continue;
} else {
return ret_value__15606__auto__;
}
break;
}
});
cljs$core$async$state_machine__15605__auto__ = function(state_18193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15605__auto____1.call(this,state_18193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15605__auto____0;
cljs$core$async$state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15605__auto____1;
return cljs$core$async$state_machine__15605__auto__;
})()
;})(switch__15604__auto__,c__15771__auto__))
})();
var state__15773__auto__ = (function (){var statearr_18214 = f__15772__auto__.call(null);
(statearr_18214[(6)] = c__15771__auto__);

return statearr_18214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15773__auto__);
});})(c__15771__auto__))
);

return c__15771__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18232 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18232 = (function (ch,cs,meta18233){
this.ch = ch;
this.cs = cs;
this.meta18233 = meta18233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18234,meta18233__$1){
var self__ = this;
var _18234__$1 = this;
return (new cljs.core.async.t_cljs$core$async18232(self__.ch,self__.cs,meta18233__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18232.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18234){
var self__ = this;
var _18234__$1 = this;
return self__.meta18233;
});})(cs))
;

cljs.core.async.t_cljs$core$async18232.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18232.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18232.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18232.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18232.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18232.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18232.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18233","meta18233",-257544938,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18232.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18232";

cljs.core.async.t_cljs$core$async18232.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async18232");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18232.
 */
cljs.core.async.__GT_t_cljs$core$async18232 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18232(ch__$1,cs__$1,meta18233){
return (new cljs.core.async.t_cljs$core$async18232(ch__$1,cs__$1,meta18233));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18232(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15771__auto___18454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15771__auto___18454,cs,m,dchan,dctr,done){
return (function (){
var f__15772__auto__ = (function (){var switch__15604__auto__ = ((function (c__15771__auto___18454,cs,m,dchan,dctr,done){
return (function (state_18369){
var state_val_18370 = (state_18369[(1)]);
if((state_val_18370 === (7))){
var inst_18365 = (state_18369[(2)]);
var state_18369__$1 = state_18369;
var statearr_18371_18455 = state_18369__$1;
(statearr_18371_18455[(2)] = inst_18365);

(statearr_18371_18455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (20))){
var inst_18268 = (state_18369[(7)]);
var inst_18280 = cljs.core.first.call(null,inst_18268);
var inst_18281 = cljs.core.nth.call(null,inst_18280,(0),null);
var inst_18282 = cljs.core.nth.call(null,inst_18280,(1),null);
var state_18369__$1 = (function (){var statearr_18372 = state_18369;
(statearr_18372[(8)] = inst_18281);

return statearr_18372;
})();
if(cljs.core.truth_(inst_18282)){
var statearr_18373_18456 = state_18369__$1;
(statearr_18373_18456[(1)] = (22));

} else {
var statearr_18374_18457 = state_18369__$1;
(statearr_18374_18457[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (27))){
var inst_18310 = (state_18369[(9)]);
var inst_18312 = (state_18369[(10)]);
var inst_18317 = (state_18369[(11)]);
var inst_18237 = (state_18369[(12)]);
var inst_18317__$1 = cljs.core._nth.call(null,inst_18310,inst_18312);
var inst_18318 = cljs.core.async.put_BANG_.call(null,inst_18317__$1,inst_18237,done);
var state_18369__$1 = (function (){var statearr_18375 = state_18369;
(statearr_18375[(11)] = inst_18317__$1);

return statearr_18375;
})();
if(cljs.core.truth_(inst_18318)){
var statearr_18376_18458 = state_18369__$1;
(statearr_18376_18458[(1)] = (30));

} else {
var statearr_18377_18459 = state_18369__$1;
(statearr_18377_18459[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (1))){
var state_18369__$1 = state_18369;
var statearr_18378_18460 = state_18369__$1;
(statearr_18378_18460[(2)] = null);

(statearr_18378_18460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (24))){
var inst_18268 = (state_18369[(7)]);
var inst_18287 = (state_18369[(2)]);
var inst_18288 = cljs.core.next.call(null,inst_18268);
var inst_18246 = inst_18288;
var inst_18247 = null;
var inst_18248 = (0);
var inst_18249 = (0);
var state_18369__$1 = (function (){var statearr_18379 = state_18369;
(statearr_18379[(13)] = inst_18249);

(statearr_18379[(14)] = inst_18287);

(statearr_18379[(15)] = inst_18248);

(statearr_18379[(16)] = inst_18246);

(statearr_18379[(17)] = inst_18247);

return statearr_18379;
})();
var statearr_18380_18461 = state_18369__$1;
(statearr_18380_18461[(2)] = null);

(statearr_18380_18461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (39))){
var state_18369__$1 = state_18369;
var statearr_18384_18462 = state_18369__$1;
(statearr_18384_18462[(2)] = null);

(statearr_18384_18462[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (4))){
var inst_18237 = (state_18369[(12)]);
var inst_18237__$1 = (state_18369[(2)]);
var inst_18238 = (inst_18237__$1 == null);
var state_18369__$1 = (function (){var statearr_18385 = state_18369;
(statearr_18385[(12)] = inst_18237__$1);

return statearr_18385;
})();
if(cljs.core.truth_(inst_18238)){
var statearr_18386_18463 = state_18369__$1;
(statearr_18386_18463[(1)] = (5));

} else {
var statearr_18387_18464 = state_18369__$1;
(statearr_18387_18464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (15))){
var inst_18249 = (state_18369[(13)]);
var inst_18248 = (state_18369[(15)]);
var inst_18246 = (state_18369[(16)]);
var inst_18247 = (state_18369[(17)]);
var inst_18264 = (state_18369[(2)]);
var inst_18265 = (inst_18249 + (1));
var tmp18381 = inst_18248;
var tmp18382 = inst_18246;
var tmp18383 = inst_18247;
var inst_18246__$1 = tmp18382;
var inst_18247__$1 = tmp18383;
var inst_18248__$1 = tmp18381;
var inst_18249__$1 = inst_18265;
var state_18369__$1 = (function (){var statearr_18388 = state_18369;
(statearr_18388[(13)] = inst_18249__$1);

(statearr_18388[(18)] = inst_18264);

(statearr_18388[(15)] = inst_18248__$1);

(statearr_18388[(16)] = inst_18246__$1);

(statearr_18388[(17)] = inst_18247__$1);

return statearr_18388;
})();
var statearr_18389_18465 = state_18369__$1;
(statearr_18389_18465[(2)] = null);

(statearr_18389_18465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (21))){
var inst_18291 = (state_18369[(2)]);
var state_18369__$1 = state_18369;
var statearr_18393_18466 = state_18369__$1;
(statearr_18393_18466[(2)] = inst_18291);

(statearr_18393_18466[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (31))){
var inst_18317 = (state_18369[(11)]);
var inst_18321 = done.call(null,null);
var inst_18322 = cljs.core.async.untap_STAR_.call(null,m,inst_18317);
var state_18369__$1 = (function (){var statearr_18394 = state_18369;
(statearr_18394[(19)] = inst_18321);

return statearr_18394;
})();
var statearr_18395_18467 = state_18369__$1;
(statearr_18395_18467[(2)] = inst_18322);

(statearr_18395_18467[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (32))){
var inst_18309 = (state_18369[(20)]);
var inst_18310 = (state_18369[(9)]);
var inst_18312 = (state_18369[(10)]);
var inst_18311 = (state_18369[(21)]);
var inst_18324 = (state_18369[(2)]);
var inst_18325 = (inst_18312 + (1));
var tmp18390 = inst_18309;
var tmp18391 = inst_18310;
var tmp18392 = inst_18311;
var inst_18309__$1 = tmp18390;
var inst_18310__$1 = tmp18391;
var inst_18311__$1 = tmp18392;
var inst_18312__$1 = inst_18325;
var state_18369__$1 = (function (){var statearr_18396 = state_18369;
(statearr_18396[(22)] = inst_18324);

(statearr_18396[(20)] = inst_18309__$1);

(statearr_18396[(9)] = inst_18310__$1);

(statearr_18396[(10)] = inst_18312__$1);

(statearr_18396[(21)] = inst_18311__$1);

return statearr_18396;
})();
var statearr_18397_18468 = state_18369__$1;
(statearr_18397_18468[(2)] = null);

(statearr_18397_18468[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (40))){
var inst_18337 = (state_18369[(23)]);
var inst_18341 = done.call(null,null);
var inst_18342 = cljs.core.async.untap_STAR_.call(null,m,inst_18337);
var state_18369__$1 = (function (){var statearr_18398 = state_18369;
(statearr_18398[(24)] = inst_18341);

return statearr_18398;
})();
var statearr_18399_18469 = state_18369__$1;
(statearr_18399_18469[(2)] = inst_18342);

(statearr_18399_18469[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (33))){
var inst_18328 = (state_18369[(25)]);
var inst_18330 = cljs.core.chunked_seq_QMARK_.call(null,inst_18328);
var state_18369__$1 = state_18369;
if(inst_18330){
var statearr_18400_18470 = state_18369__$1;
(statearr_18400_18470[(1)] = (36));

} else {
var statearr_18401_18471 = state_18369__$1;
(statearr_18401_18471[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (13))){
var inst_18258 = (state_18369[(26)]);
var inst_18261 = cljs.core.async.close_BANG_.call(null,inst_18258);
var state_18369__$1 = state_18369;
var statearr_18402_18472 = state_18369__$1;
(statearr_18402_18472[(2)] = inst_18261);

(statearr_18402_18472[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (22))){
var inst_18281 = (state_18369[(8)]);
var inst_18284 = cljs.core.async.close_BANG_.call(null,inst_18281);
var state_18369__$1 = state_18369;
var statearr_18403_18473 = state_18369__$1;
(statearr_18403_18473[(2)] = inst_18284);

(statearr_18403_18473[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (36))){
var inst_18328 = (state_18369[(25)]);
var inst_18332 = cljs.core.chunk_first.call(null,inst_18328);
var inst_18333 = cljs.core.chunk_rest.call(null,inst_18328);
var inst_18334 = cljs.core.count.call(null,inst_18332);
var inst_18309 = inst_18333;
var inst_18310 = inst_18332;
var inst_18311 = inst_18334;
var inst_18312 = (0);
var state_18369__$1 = (function (){var statearr_18404 = state_18369;
(statearr_18404[(20)] = inst_18309);

(statearr_18404[(9)] = inst_18310);

(statearr_18404[(10)] = inst_18312);

(statearr_18404[(21)] = inst_18311);

return statearr_18404;
})();
var statearr_18405_18474 = state_18369__$1;
(statearr_18405_18474[(2)] = null);

(statearr_18405_18474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (41))){
var inst_18328 = (state_18369[(25)]);
var inst_18344 = (state_18369[(2)]);
var inst_18345 = cljs.core.next.call(null,inst_18328);
var inst_18309 = inst_18345;
var inst_18310 = null;
var inst_18311 = (0);
var inst_18312 = (0);
var state_18369__$1 = (function (){var statearr_18406 = state_18369;
(statearr_18406[(27)] = inst_18344);

(statearr_18406[(20)] = inst_18309);

(statearr_18406[(9)] = inst_18310);

(statearr_18406[(10)] = inst_18312);

(statearr_18406[(21)] = inst_18311);

return statearr_18406;
})();
var statearr_18407_18475 = state_18369__$1;
(statearr_18407_18475[(2)] = null);

(statearr_18407_18475[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (43))){
var state_18369__$1 = state_18369;
var statearr_18408_18476 = state_18369__$1;
(statearr_18408_18476[(2)] = null);

(statearr_18408_18476[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (29))){
var inst_18353 = (state_18369[(2)]);
var state_18369__$1 = state_18369;
var statearr_18409_18477 = state_18369__$1;
(statearr_18409_18477[(2)] = inst_18353);

(statearr_18409_18477[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (44))){
var inst_18362 = (state_18369[(2)]);
var state_18369__$1 = (function (){var statearr_18410 = state_18369;
(statearr_18410[(28)] = inst_18362);

return statearr_18410;
})();
var statearr_18411_18478 = state_18369__$1;
(statearr_18411_18478[(2)] = null);

(statearr_18411_18478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (6))){
var inst_18301 = (state_18369[(29)]);
var inst_18300 = cljs.core.deref.call(null,cs);
var inst_18301__$1 = cljs.core.keys.call(null,inst_18300);
var inst_18302 = cljs.core.count.call(null,inst_18301__$1);
var inst_18303 = cljs.core.reset_BANG_.call(null,dctr,inst_18302);
var inst_18308 = cljs.core.seq.call(null,inst_18301__$1);
var inst_18309 = inst_18308;
var inst_18310 = null;
var inst_18311 = (0);
var inst_18312 = (0);
var state_18369__$1 = (function (){var statearr_18412 = state_18369;
(statearr_18412[(20)] = inst_18309);

(statearr_18412[(9)] = inst_18310);

(statearr_18412[(10)] = inst_18312);

(statearr_18412[(29)] = inst_18301__$1);

(statearr_18412[(21)] = inst_18311);

(statearr_18412[(30)] = inst_18303);

return statearr_18412;
})();
var statearr_18413_18479 = state_18369__$1;
(statearr_18413_18479[(2)] = null);

(statearr_18413_18479[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (28))){
var inst_18309 = (state_18369[(20)]);
var inst_18328 = (state_18369[(25)]);
var inst_18328__$1 = cljs.core.seq.call(null,inst_18309);
var state_18369__$1 = (function (){var statearr_18414 = state_18369;
(statearr_18414[(25)] = inst_18328__$1);

return statearr_18414;
})();
if(inst_18328__$1){
var statearr_18415_18480 = state_18369__$1;
(statearr_18415_18480[(1)] = (33));

} else {
var statearr_18416_18481 = state_18369__$1;
(statearr_18416_18481[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (25))){
var inst_18312 = (state_18369[(10)]);
var inst_18311 = (state_18369[(21)]);
var inst_18314 = (inst_18312 < inst_18311);
var inst_18315 = inst_18314;
var state_18369__$1 = state_18369;
if(cljs.core.truth_(inst_18315)){
var statearr_18417_18482 = state_18369__$1;
(statearr_18417_18482[(1)] = (27));

} else {
var statearr_18418_18483 = state_18369__$1;
(statearr_18418_18483[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (34))){
var state_18369__$1 = state_18369;
var statearr_18419_18484 = state_18369__$1;
(statearr_18419_18484[(2)] = null);

(statearr_18419_18484[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (17))){
var state_18369__$1 = state_18369;
var statearr_18420_18485 = state_18369__$1;
(statearr_18420_18485[(2)] = null);

(statearr_18420_18485[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (3))){
var inst_18367 = (state_18369[(2)]);
var state_18369__$1 = state_18369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18369__$1,inst_18367);
} else {
if((state_val_18370 === (12))){
var inst_18296 = (state_18369[(2)]);
var state_18369__$1 = state_18369;
var statearr_18421_18486 = state_18369__$1;
(statearr_18421_18486[(2)] = inst_18296);

(statearr_18421_18486[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (2))){
var state_18369__$1 = state_18369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18369__$1,(4),ch);
} else {
if((state_val_18370 === (23))){
var state_18369__$1 = state_18369;
var statearr_18422_18487 = state_18369__$1;
(statearr_18422_18487[(2)] = null);

(statearr_18422_18487[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (35))){
var inst_18351 = (state_18369[(2)]);
var state_18369__$1 = state_18369;
var statearr_18423_18488 = state_18369__$1;
(statearr_18423_18488[(2)] = inst_18351);

(statearr_18423_18488[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (19))){
var inst_18268 = (state_18369[(7)]);
var inst_18272 = cljs.core.chunk_first.call(null,inst_18268);
var inst_18273 = cljs.core.chunk_rest.call(null,inst_18268);
var inst_18274 = cljs.core.count.call(null,inst_18272);
var inst_18246 = inst_18273;
var inst_18247 = inst_18272;
var inst_18248 = inst_18274;
var inst_18249 = (0);
var state_18369__$1 = (function (){var statearr_18424 = state_18369;
(statearr_18424[(13)] = inst_18249);

(statearr_18424[(15)] = inst_18248);

(statearr_18424[(16)] = inst_18246);

(statearr_18424[(17)] = inst_18247);

return statearr_18424;
})();
var statearr_18425_18489 = state_18369__$1;
(statearr_18425_18489[(2)] = null);

(statearr_18425_18489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (11))){
var inst_18246 = (state_18369[(16)]);
var inst_18268 = (state_18369[(7)]);
var inst_18268__$1 = cljs.core.seq.call(null,inst_18246);
var state_18369__$1 = (function (){var statearr_18426 = state_18369;
(statearr_18426[(7)] = inst_18268__$1);

return statearr_18426;
})();
if(inst_18268__$1){
var statearr_18427_18490 = state_18369__$1;
(statearr_18427_18490[(1)] = (16));

} else {
var statearr_18428_18491 = state_18369__$1;
(statearr_18428_18491[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (9))){
var inst_18298 = (state_18369[(2)]);
var state_18369__$1 = state_18369;
var statearr_18429_18492 = state_18369__$1;
(statearr_18429_18492[(2)] = inst_18298);

(statearr_18429_18492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (5))){
var inst_18244 = cljs.core.deref.call(null,cs);
var inst_18245 = cljs.core.seq.call(null,inst_18244);
var inst_18246 = inst_18245;
var inst_18247 = null;
var inst_18248 = (0);
var inst_18249 = (0);
var state_18369__$1 = (function (){var statearr_18430 = state_18369;
(statearr_18430[(13)] = inst_18249);

(statearr_18430[(15)] = inst_18248);

(statearr_18430[(16)] = inst_18246);

(statearr_18430[(17)] = inst_18247);

return statearr_18430;
})();
var statearr_18431_18493 = state_18369__$1;
(statearr_18431_18493[(2)] = null);

(statearr_18431_18493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (14))){
var state_18369__$1 = state_18369;
var statearr_18432_18494 = state_18369__$1;
(statearr_18432_18494[(2)] = null);

(statearr_18432_18494[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (45))){
var inst_18359 = (state_18369[(2)]);
var state_18369__$1 = state_18369;
var statearr_18433_18495 = state_18369__$1;
(statearr_18433_18495[(2)] = inst_18359);

(statearr_18433_18495[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (26))){
var inst_18301 = (state_18369[(29)]);
var inst_18355 = (state_18369[(2)]);
var inst_18356 = cljs.core.seq.call(null,inst_18301);
var state_18369__$1 = (function (){var statearr_18434 = state_18369;
(statearr_18434[(31)] = inst_18355);

return statearr_18434;
})();
if(inst_18356){
var statearr_18435_18496 = state_18369__$1;
(statearr_18435_18496[(1)] = (42));

} else {
var statearr_18436_18497 = state_18369__$1;
(statearr_18436_18497[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (16))){
var inst_18268 = (state_18369[(7)]);
var inst_18270 = cljs.core.chunked_seq_QMARK_.call(null,inst_18268);
var state_18369__$1 = state_18369;
if(inst_18270){
var statearr_18437_18498 = state_18369__$1;
(statearr_18437_18498[(1)] = (19));

} else {
var statearr_18438_18499 = state_18369__$1;
(statearr_18438_18499[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (38))){
var inst_18348 = (state_18369[(2)]);
var state_18369__$1 = state_18369;
var statearr_18439_18500 = state_18369__$1;
(statearr_18439_18500[(2)] = inst_18348);

(statearr_18439_18500[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (30))){
var state_18369__$1 = state_18369;
var statearr_18440_18501 = state_18369__$1;
(statearr_18440_18501[(2)] = null);

(statearr_18440_18501[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (10))){
var inst_18249 = (state_18369[(13)]);
var inst_18247 = (state_18369[(17)]);
var inst_18257 = cljs.core._nth.call(null,inst_18247,inst_18249);
var inst_18258 = cljs.core.nth.call(null,inst_18257,(0),null);
var inst_18259 = cljs.core.nth.call(null,inst_18257,(1),null);
var state_18369__$1 = (function (){var statearr_18441 = state_18369;
(statearr_18441[(26)] = inst_18258);

return statearr_18441;
})();
if(cljs.core.truth_(inst_18259)){
var statearr_18442_18502 = state_18369__$1;
(statearr_18442_18502[(1)] = (13));

} else {
var statearr_18443_18503 = state_18369__$1;
(statearr_18443_18503[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (18))){
var inst_18294 = (state_18369[(2)]);
var state_18369__$1 = state_18369;
var statearr_18444_18504 = state_18369__$1;
(statearr_18444_18504[(2)] = inst_18294);

(statearr_18444_18504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (42))){
var state_18369__$1 = state_18369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18369__$1,(45),dchan);
} else {
if((state_val_18370 === (37))){
var inst_18337 = (state_18369[(23)]);
var inst_18328 = (state_18369[(25)]);
var inst_18237 = (state_18369[(12)]);
var inst_18337__$1 = cljs.core.first.call(null,inst_18328);
var inst_18338 = cljs.core.async.put_BANG_.call(null,inst_18337__$1,inst_18237,done);
var state_18369__$1 = (function (){var statearr_18445 = state_18369;
(statearr_18445[(23)] = inst_18337__$1);

return statearr_18445;
})();
if(cljs.core.truth_(inst_18338)){
var statearr_18446_18505 = state_18369__$1;
(statearr_18446_18505[(1)] = (39));

} else {
var statearr_18447_18506 = state_18369__$1;
(statearr_18447_18506[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18370 === (8))){
var inst_18249 = (state_18369[(13)]);
var inst_18248 = (state_18369[(15)]);
var inst_18251 = (inst_18249 < inst_18248);
var inst_18252 = inst_18251;
var state_18369__$1 = state_18369;
if(cljs.core.truth_(inst_18252)){
var statearr_18448_18507 = state_18369__$1;
(statearr_18448_18507[(1)] = (10));

} else {
var statearr_18449_18508 = state_18369__$1;
(statearr_18449_18508[(1)] = (11));

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
});})(c__15771__auto___18454,cs,m,dchan,dctr,done))
;
return ((function (switch__15604__auto__,c__15771__auto___18454,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15605__auto__ = null;
var cljs$core$async$mult_$_state_machine__15605__auto____0 = (function (){
var statearr_18450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18450[(0)] = cljs$core$async$mult_$_state_machine__15605__auto__);

(statearr_18450[(1)] = (1));

return statearr_18450;
});
var cljs$core$async$mult_$_state_machine__15605__auto____1 = (function (state_18369){
while(true){
var ret_value__15606__auto__ = (function (){try{while(true){
var result__15607__auto__ = switch__15604__auto__.call(null,state_18369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15607__auto__;
}
break;
}
}catch (e18451){if((e18451 instanceof Object)){
var ex__15608__auto__ = e18451;
var statearr_18452_18509 = state_18369;
(statearr_18452_18509[(5)] = ex__15608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18510 = state_18369;
state_18369 = G__18510;
continue;
} else {
return ret_value__15606__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15605__auto__ = function(state_18369){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15605__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15605__auto____1.call(this,state_18369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15605__auto____0;
cljs$core$async$mult_$_state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15605__auto____1;
return cljs$core$async$mult_$_state_machine__15605__auto__;
})()
;})(switch__15604__auto__,c__15771__auto___18454,cs,m,dchan,dctr,done))
})();
var state__15773__auto__ = (function (){var statearr_18453 = f__15772__auto__.call(null);
(statearr_18453[(6)] = c__15771__auto___18454);

return statearr_18453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15773__auto__);
});})(c__15771__auto___18454,cs,m,dchan,dctr,done))
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
var G__18512 = arguments.length;
switch (G__18512) {
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
var len__4641__auto___18524 = arguments.length;
var i__4642__auto___18525 = (0);
while(true){
if((i__4642__auto___18525 < len__4641__auto___18524)){
args__4647__auto__.push((arguments[i__4642__auto___18525]));

var G__18526 = (i__4642__auto___18525 + (1));
i__4642__auto___18525 = G__18526;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18518){
var map__18519 = p__18518;
var map__18519__$1 = (((((!((map__18519 == null))))?(((((map__18519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18519):map__18519);
var opts = map__18519__$1;
var statearr_18521_18527 = state;
(statearr_18521_18527[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__18519,map__18519__$1,opts){
return (function (val){
var statearr_18522_18528 = state;
(statearr_18522_18528[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18519,map__18519__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_18523_18529 = state;
(statearr_18523_18529[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18514){
var G__18515 = cljs.core.first.call(null,seq18514);
var seq18514__$1 = cljs.core.next.call(null,seq18514);
var G__18516 = cljs.core.first.call(null,seq18514__$1);
var seq18514__$2 = cljs.core.next.call(null,seq18514__$1);
var G__18517 = cljs.core.first.call(null,seq18514__$2);
var seq18514__$3 = cljs.core.next.call(null,seq18514__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18515,G__18516,G__18517,seq18514__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18530 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18530 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18531){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18531 = meta18531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18532,meta18531__$1){
var self__ = this;
var _18532__$1 = this;
return (new cljs.core.async.t_cljs$core$async18530(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18531__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18530.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18532){
var self__ = this;
var _18532__$1 = this;
return self__.meta18531;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18530.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18530.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18530.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18530.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18530.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18530.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18530.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18530.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18530.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18531","meta18531",-169874505,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18530.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18530.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18530";

cljs.core.async.t_cljs$core$async18530.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async18530");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18530.
 */
cljs.core.async.__GT_t_cljs$core$async18530 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18530(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18531){
return (new cljs.core.async.t_cljs$core$async18530(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18531));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18530(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15771__auto___18694 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15771__auto___18694,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15772__auto__ = (function (){var switch__15604__auto__ = ((function (c__15771__auto___18694,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18634){
var state_val_18635 = (state_18634[(1)]);
if((state_val_18635 === (7))){
var inst_18549 = (state_18634[(2)]);
var state_18634__$1 = state_18634;
var statearr_18636_18695 = state_18634__$1;
(statearr_18636_18695[(2)] = inst_18549);

(statearr_18636_18695[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (20))){
var inst_18561 = (state_18634[(7)]);
var state_18634__$1 = state_18634;
var statearr_18637_18696 = state_18634__$1;
(statearr_18637_18696[(2)] = inst_18561);

(statearr_18637_18696[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (27))){
var state_18634__$1 = state_18634;
var statearr_18638_18697 = state_18634__$1;
(statearr_18638_18697[(2)] = null);

(statearr_18638_18697[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (1))){
var inst_18536 = (state_18634[(8)]);
var inst_18536__$1 = calc_state.call(null);
var inst_18538 = (inst_18536__$1 == null);
var inst_18539 = cljs.core.not.call(null,inst_18538);
var state_18634__$1 = (function (){var statearr_18639 = state_18634;
(statearr_18639[(8)] = inst_18536__$1);

return statearr_18639;
})();
if(inst_18539){
var statearr_18640_18698 = state_18634__$1;
(statearr_18640_18698[(1)] = (2));

} else {
var statearr_18641_18699 = state_18634__$1;
(statearr_18641_18699[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (24))){
var inst_18608 = (state_18634[(9)]);
var inst_18585 = (state_18634[(10)]);
var inst_18594 = (state_18634[(11)]);
var inst_18608__$1 = inst_18585.call(null,inst_18594);
var state_18634__$1 = (function (){var statearr_18642 = state_18634;
(statearr_18642[(9)] = inst_18608__$1);

return statearr_18642;
})();
if(cljs.core.truth_(inst_18608__$1)){
var statearr_18643_18700 = state_18634__$1;
(statearr_18643_18700[(1)] = (29));

} else {
var statearr_18644_18701 = state_18634__$1;
(statearr_18644_18701[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (4))){
var inst_18552 = (state_18634[(2)]);
var state_18634__$1 = state_18634;
if(cljs.core.truth_(inst_18552)){
var statearr_18645_18702 = state_18634__$1;
(statearr_18645_18702[(1)] = (8));

} else {
var statearr_18646_18703 = state_18634__$1;
(statearr_18646_18703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (15))){
var inst_18579 = (state_18634[(2)]);
var state_18634__$1 = state_18634;
if(cljs.core.truth_(inst_18579)){
var statearr_18647_18704 = state_18634__$1;
(statearr_18647_18704[(1)] = (19));

} else {
var statearr_18648_18705 = state_18634__$1;
(statearr_18648_18705[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (21))){
var inst_18584 = (state_18634[(12)]);
var inst_18584__$1 = (state_18634[(2)]);
var inst_18585 = cljs.core.get.call(null,inst_18584__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18586 = cljs.core.get.call(null,inst_18584__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18587 = cljs.core.get.call(null,inst_18584__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18634__$1 = (function (){var statearr_18649 = state_18634;
(statearr_18649[(12)] = inst_18584__$1);

(statearr_18649[(13)] = inst_18586);

(statearr_18649[(10)] = inst_18585);

return statearr_18649;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18634__$1,(22),inst_18587);
} else {
if((state_val_18635 === (31))){
var inst_18616 = (state_18634[(2)]);
var state_18634__$1 = state_18634;
if(cljs.core.truth_(inst_18616)){
var statearr_18650_18706 = state_18634__$1;
(statearr_18650_18706[(1)] = (32));

} else {
var statearr_18651_18707 = state_18634__$1;
(statearr_18651_18707[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (32))){
var inst_18593 = (state_18634[(14)]);
var state_18634__$1 = state_18634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18634__$1,(35),out,inst_18593);
} else {
if((state_val_18635 === (33))){
var inst_18584 = (state_18634[(12)]);
var inst_18561 = inst_18584;
var state_18634__$1 = (function (){var statearr_18652 = state_18634;
(statearr_18652[(7)] = inst_18561);

return statearr_18652;
})();
var statearr_18653_18708 = state_18634__$1;
(statearr_18653_18708[(2)] = null);

(statearr_18653_18708[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (13))){
var inst_18561 = (state_18634[(7)]);
var inst_18568 = inst_18561.cljs$lang$protocol_mask$partition0$;
var inst_18569 = (inst_18568 & (64));
var inst_18570 = inst_18561.cljs$core$ISeq$;
var inst_18571 = (cljs.core.PROTOCOL_SENTINEL === inst_18570);
var inst_18572 = ((inst_18569) || (inst_18571));
var state_18634__$1 = state_18634;
if(cljs.core.truth_(inst_18572)){
var statearr_18654_18709 = state_18634__$1;
(statearr_18654_18709[(1)] = (16));

} else {
var statearr_18655_18710 = state_18634__$1;
(statearr_18655_18710[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (22))){
var inst_18593 = (state_18634[(14)]);
var inst_18594 = (state_18634[(11)]);
var inst_18592 = (state_18634[(2)]);
var inst_18593__$1 = cljs.core.nth.call(null,inst_18592,(0),null);
var inst_18594__$1 = cljs.core.nth.call(null,inst_18592,(1),null);
var inst_18595 = (inst_18593__$1 == null);
var inst_18596 = cljs.core._EQ_.call(null,inst_18594__$1,change);
var inst_18597 = ((inst_18595) || (inst_18596));
var state_18634__$1 = (function (){var statearr_18656 = state_18634;
(statearr_18656[(14)] = inst_18593__$1);

(statearr_18656[(11)] = inst_18594__$1);

return statearr_18656;
})();
if(cljs.core.truth_(inst_18597)){
var statearr_18657_18711 = state_18634__$1;
(statearr_18657_18711[(1)] = (23));

} else {
var statearr_18658_18712 = state_18634__$1;
(statearr_18658_18712[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (36))){
var inst_18584 = (state_18634[(12)]);
var inst_18561 = inst_18584;
var state_18634__$1 = (function (){var statearr_18659 = state_18634;
(statearr_18659[(7)] = inst_18561);

return statearr_18659;
})();
var statearr_18660_18713 = state_18634__$1;
(statearr_18660_18713[(2)] = null);

(statearr_18660_18713[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (29))){
var inst_18608 = (state_18634[(9)]);
var state_18634__$1 = state_18634;
var statearr_18661_18714 = state_18634__$1;
(statearr_18661_18714[(2)] = inst_18608);

(statearr_18661_18714[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (6))){
var state_18634__$1 = state_18634;
var statearr_18662_18715 = state_18634__$1;
(statearr_18662_18715[(2)] = false);

(statearr_18662_18715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (28))){
var inst_18604 = (state_18634[(2)]);
var inst_18605 = calc_state.call(null);
var inst_18561 = inst_18605;
var state_18634__$1 = (function (){var statearr_18663 = state_18634;
(statearr_18663[(7)] = inst_18561);

(statearr_18663[(15)] = inst_18604);

return statearr_18663;
})();
var statearr_18664_18716 = state_18634__$1;
(statearr_18664_18716[(2)] = null);

(statearr_18664_18716[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (25))){
var inst_18630 = (state_18634[(2)]);
var state_18634__$1 = state_18634;
var statearr_18665_18717 = state_18634__$1;
(statearr_18665_18717[(2)] = inst_18630);

(statearr_18665_18717[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (34))){
var inst_18628 = (state_18634[(2)]);
var state_18634__$1 = state_18634;
var statearr_18666_18718 = state_18634__$1;
(statearr_18666_18718[(2)] = inst_18628);

(statearr_18666_18718[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (17))){
var state_18634__$1 = state_18634;
var statearr_18667_18719 = state_18634__$1;
(statearr_18667_18719[(2)] = false);

(statearr_18667_18719[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (3))){
var state_18634__$1 = state_18634;
var statearr_18668_18720 = state_18634__$1;
(statearr_18668_18720[(2)] = false);

(statearr_18668_18720[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (12))){
var inst_18632 = (state_18634[(2)]);
var state_18634__$1 = state_18634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18634__$1,inst_18632);
} else {
if((state_val_18635 === (2))){
var inst_18536 = (state_18634[(8)]);
var inst_18541 = inst_18536.cljs$lang$protocol_mask$partition0$;
var inst_18542 = (inst_18541 & (64));
var inst_18543 = inst_18536.cljs$core$ISeq$;
var inst_18544 = (cljs.core.PROTOCOL_SENTINEL === inst_18543);
var inst_18545 = ((inst_18542) || (inst_18544));
var state_18634__$1 = state_18634;
if(cljs.core.truth_(inst_18545)){
var statearr_18669_18721 = state_18634__$1;
(statearr_18669_18721[(1)] = (5));

} else {
var statearr_18670_18722 = state_18634__$1;
(statearr_18670_18722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (23))){
var inst_18593 = (state_18634[(14)]);
var inst_18599 = (inst_18593 == null);
var state_18634__$1 = state_18634;
if(cljs.core.truth_(inst_18599)){
var statearr_18671_18723 = state_18634__$1;
(statearr_18671_18723[(1)] = (26));

} else {
var statearr_18672_18724 = state_18634__$1;
(statearr_18672_18724[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (35))){
var inst_18619 = (state_18634[(2)]);
var state_18634__$1 = state_18634;
if(cljs.core.truth_(inst_18619)){
var statearr_18673_18725 = state_18634__$1;
(statearr_18673_18725[(1)] = (36));

} else {
var statearr_18674_18726 = state_18634__$1;
(statearr_18674_18726[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (19))){
var inst_18561 = (state_18634[(7)]);
var inst_18581 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18561);
var state_18634__$1 = state_18634;
var statearr_18675_18727 = state_18634__$1;
(statearr_18675_18727[(2)] = inst_18581);

(statearr_18675_18727[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (11))){
var inst_18561 = (state_18634[(7)]);
var inst_18565 = (inst_18561 == null);
var inst_18566 = cljs.core.not.call(null,inst_18565);
var state_18634__$1 = state_18634;
if(inst_18566){
var statearr_18676_18728 = state_18634__$1;
(statearr_18676_18728[(1)] = (13));

} else {
var statearr_18677_18729 = state_18634__$1;
(statearr_18677_18729[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (9))){
var inst_18536 = (state_18634[(8)]);
var state_18634__$1 = state_18634;
var statearr_18678_18730 = state_18634__$1;
(statearr_18678_18730[(2)] = inst_18536);

(statearr_18678_18730[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (5))){
var state_18634__$1 = state_18634;
var statearr_18679_18731 = state_18634__$1;
(statearr_18679_18731[(2)] = true);

(statearr_18679_18731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (14))){
var state_18634__$1 = state_18634;
var statearr_18680_18732 = state_18634__$1;
(statearr_18680_18732[(2)] = false);

(statearr_18680_18732[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (26))){
var inst_18594 = (state_18634[(11)]);
var inst_18601 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18594);
var state_18634__$1 = state_18634;
var statearr_18681_18733 = state_18634__$1;
(statearr_18681_18733[(2)] = inst_18601);

(statearr_18681_18733[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (16))){
var state_18634__$1 = state_18634;
var statearr_18682_18734 = state_18634__$1;
(statearr_18682_18734[(2)] = true);

(statearr_18682_18734[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (38))){
var inst_18624 = (state_18634[(2)]);
var state_18634__$1 = state_18634;
var statearr_18683_18735 = state_18634__$1;
(statearr_18683_18735[(2)] = inst_18624);

(statearr_18683_18735[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (30))){
var inst_18586 = (state_18634[(13)]);
var inst_18585 = (state_18634[(10)]);
var inst_18594 = (state_18634[(11)]);
var inst_18611 = cljs.core.empty_QMARK_.call(null,inst_18585);
var inst_18612 = inst_18586.call(null,inst_18594);
var inst_18613 = cljs.core.not.call(null,inst_18612);
var inst_18614 = ((inst_18611) && (inst_18613));
var state_18634__$1 = state_18634;
var statearr_18684_18736 = state_18634__$1;
(statearr_18684_18736[(2)] = inst_18614);

(statearr_18684_18736[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (10))){
var inst_18536 = (state_18634[(8)]);
var inst_18557 = (state_18634[(2)]);
var inst_18558 = cljs.core.get.call(null,inst_18557,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18559 = cljs.core.get.call(null,inst_18557,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18560 = cljs.core.get.call(null,inst_18557,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18561 = inst_18536;
var state_18634__$1 = (function (){var statearr_18685 = state_18634;
(statearr_18685[(16)] = inst_18559);

(statearr_18685[(7)] = inst_18561);

(statearr_18685[(17)] = inst_18558);

(statearr_18685[(18)] = inst_18560);

return statearr_18685;
})();
var statearr_18686_18737 = state_18634__$1;
(statearr_18686_18737[(2)] = null);

(statearr_18686_18737[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (18))){
var inst_18576 = (state_18634[(2)]);
var state_18634__$1 = state_18634;
var statearr_18687_18738 = state_18634__$1;
(statearr_18687_18738[(2)] = inst_18576);

(statearr_18687_18738[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (37))){
var state_18634__$1 = state_18634;
var statearr_18688_18739 = state_18634__$1;
(statearr_18688_18739[(2)] = null);

(statearr_18688_18739[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (8))){
var inst_18536 = (state_18634[(8)]);
var inst_18554 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18536);
var state_18634__$1 = state_18634;
var statearr_18689_18740 = state_18634__$1;
(statearr_18689_18740[(2)] = inst_18554);

(statearr_18689_18740[(1)] = (10));


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
});})(c__15771__auto___18694,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15604__auto__,c__15771__auto___18694,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15605__auto__ = null;
var cljs$core$async$mix_$_state_machine__15605__auto____0 = (function (){
var statearr_18690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18690[(0)] = cljs$core$async$mix_$_state_machine__15605__auto__);

(statearr_18690[(1)] = (1));

return statearr_18690;
});
var cljs$core$async$mix_$_state_machine__15605__auto____1 = (function (state_18634){
while(true){
var ret_value__15606__auto__ = (function (){try{while(true){
var result__15607__auto__ = switch__15604__auto__.call(null,state_18634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15607__auto__;
}
break;
}
}catch (e18691){if((e18691 instanceof Object)){
var ex__15608__auto__ = e18691;
var statearr_18692_18741 = state_18634;
(statearr_18692_18741[(5)] = ex__15608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18742 = state_18634;
state_18634 = G__18742;
continue;
} else {
return ret_value__15606__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15605__auto__ = function(state_18634){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15605__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15605__auto____1.call(this,state_18634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15605__auto____0;
cljs$core$async$mix_$_state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15605__auto____1;
return cljs$core$async$mix_$_state_machine__15605__auto__;
})()
;})(switch__15604__auto__,c__15771__auto___18694,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15773__auto__ = (function (){var statearr_18693 = f__15772__auto__.call(null);
(statearr_18693[(6)] = c__15771__auto___18694);

return statearr_18693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15773__auto__);
});})(c__15771__auto___18694,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__18744 = arguments.length;
switch (G__18744) {
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
var G__18748 = arguments.length;
switch (G__18748) {
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
return (function (p1__18746_SHARP_){
if(cljs.core.truth_(p1__18746_SHARP_.call(null,topic))){
return p1__18746_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18746_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18749 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18749 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18750){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18750 = meta18750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18751,meta18750__$1){
var self__ = this;
var _18751__$1 = this;
return (new cljs.core.async.t_cljs$core$async18749(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18750__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18749.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18751){
var self__ = this;
var _18751__$1 = this;
return self__.meta18750;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18749.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18749.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18749.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18749.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18749.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async18749.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18749.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18749.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18750","meta18750",-383414671,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18749.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18749";

cljs.core.async.t_cljs$core$async18749.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async18749");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18749.
 */
cljs.core.async.__GT_t_cljs$core$async18749 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18749(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18750){
return (new cljs.core.async.t_cljs$core$async18749(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18750));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18749(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15771__auto___18869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15771__auto___18869,mults,ensure_mult,p){
return (function (){
var f__15772__auto__ = (function (){var switch__15604__auto__ = ((function (c__15771__auto___18869,mults,ensure_mult,p){
return (function (state_18823){
var state_val_18824 = (state_18823[(1)]);
if((state_val_18824 === (7))){
var inst_18819 = (state_18823[(2)]);
var state_18823__$1 = state_18823;
var statearr_18825_18870 = state_18823__$1;
(statearr_18825_18870[(2)] = inst_18819);

(statearr_18825_18870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (20))){
var state_18823__$1 = state_18823;
var statearr_18826_18871 = state_18823__$1;
(statearr_18826_18871[(2)] = null);

(statearr_18826_18871[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (1))){
var state_18823__$1 = state_18823;
var statearr_18827_18872 = state_18823__$1;
(statearr_18827_18872[(2)] = null);

(statearr_18827_18872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (24))){
var inst_18802 = (state_18823[(7)]);
var inst_18811 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18802);
var state_18823__$1 = state_18823;
var statearr_18828_18873 = state_18823__$1;
(statearr_18828_18873[(2)] = inst_18811);

(statearr_18828_18873[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (4))){
var inst_18754 = (state_18823[(8)]);
var inst_18754__$1 = (state_18823[(2)]);
var inst_18755 = (inst_18754__$1 == null);
var state_18823__$1 = (function (){var statearr_18829 = state_18823;
(statearr_18829[(8)] = inst_18754__$1);

return statearr_18829;
})();
if(cljs.core.truth_(inst_18755)){
var statearr_18830_18874 = state_18823__$1;
(statearr_18830_18874[(1)] = (5));

} else {
var statearr_18831_18875 = state_18823__$1;
(statearr_18831_18875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (15))){
var inst_18796 = (state_18823[(2)]);
var state_18823__$1 = state_18823;
var statearr_18832_18876 = state_18823__$1;
(statearr_18832_18876[(2)] = inst_18796);

(statearr_18832_18876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (21))){
var inst_18816 = (state_18823[(2)]);
var state_18823__$1 = (function (){var statearr_18833 = state_18823;
(statearr_18833[(9)] = inst_18816);

return statearr_18833;
})();
var statearr_18834_18877 = state_18823__$1;
(statearr_18834_18877[(2)] = null);

(statearr_18834_18877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (13))){
var inst_18778 = (state_18823[(10)]);
var inst_18780 = cljs.core.chunked_seq_QMARK_.call(null,inst_18778);
var state_18823__$1 = state_18823;
if(inst_18780){
var statearr_18835_18878 = state_18823__$1;
(statearr_18835_18878[(1)] = (16));

} else {
var statearr_18836_18879 = state_18823__$1;
(statearr_18836_18879[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (22))){
var inst_18808 = (state_18823[(2)]);
var state_18823__$1 = state_18823;
if(cljs.core.truth_(inst_18808)){
var statearr_18837_18880 = state_18823__$1;
(statearr_18837_18880[(1)] = (23));

} else {
var statearr_18838_18881 = state_18823__$1;
(statearr_18838_18881[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (6))){
var inst_18802 = (state_18823[(7)]);
var inst_18804 = (state_18823[(11)]);
var inst_18754 = (state_18823[(8)]);
var inst_18802__$1 = topic_fn.call(null,inst_18754);
var inst_18803 = cljs.core.deref.call(null,mults);
var inst_18804__$1 = cljs.core.get.call(null,inst_18803,inst_18802__$1);
var state_18823__$1 = (function (){var statearr_18839 = state_18823;
(statearr_18839[(7)] = inst_18802__$1);

(statearr_18839[(11)] = inst_18804__$1);

return statearr_18839;
})();
if(cljs.core.truth_(inst_18804__$1)){
var statearr_18840_18882 = state_18823__$1;
(statearr_18840_18882[(1)] = (19));

} else {
var statearr_18841_18883 = state_18823__$1;
(statearr_18841_18883[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (25))){
var inst_18813 = (state_18823[(2)]);
var state_18823__$1 = state_18823;
var statearr_18842_18884 = state_18823__$1;
(statearr_18842_18884[(2)] = inst_18813);

(statearr_18842_18884[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (17))){
var inst_18778 = (state_18823[(10)]);
var inst_18787 = cljs.core.first.call(null,inst_18778);
var inst_18788 = cljs.core.async.muxch_STAR_.call(null,inst_18787);
var inst_18789 = cljs.core.async.close_BANG_.call(null,inst_18788);
var inst_18790 = cljs.core.next.call(null,inst_18778);
var inst_18764 = inst_18790;
var inst_18765 = null;
var inst_18766 = (0);
var inst_18767 = (0);
var state_18823__$1 = (function (){var statearr_18843 = state_18823;
(statearr_18843[(12)] = inst_18789);

(statearr_18843[(13)] = inst_18764);

(statearr_18843[(14)] = inst_18767);

(statearr_18843[(15)] = inst_18765);

(statearr_18843[(16)] = inst_18766);

return statearr_18843;
})();
var statearr_18844_18885 = state_18823__$1;
(statearr_18844_18885[(2)] = null);

(statearr_18844_18885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (3))){
var inst_18821 = (state_18823[(2)]);
var state_18823__$1 = state_18823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18823__$1,inst_18821);
} else {
if((state_val_18824 === (12))){
var inst_18798 = (state_18823[(2)]);
var state_18823__$1 = state_18823;
var statearr_18845_18886 = state_18823__$1;
(statearr_18845_18886[(2)] = inst_18798);

(statearr_18845_18886[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (2))){
var state_18823__$1 = state_18823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18823__$1,(4),ch);
} else {
if((state_val_18824 === (23))){
var state_18823__$1 = state_18823;
var statearr_18846_18887 = state_18823__$1;
(statearr_18846_18887[(2)] = null);

(statearr_18846_18887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (19))){
var inst_18804 = (state_18823[(11)]);
var inst_18754 = (state_18823[(8)]);
var inst_18806 = cljs.core.async.muxch_STAR_.call(null,inst_18804);
var state_18823__$1 = state_18823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18823__$1,(22),inst_18806,inst_18754);
} else {
if((state_val_18824 === (11))){
var inst_18764 = (state_18823[(13)]);
var inst_18778 = (state_18823[(10)]);
var inst_18778__$1 = cljs.core.seq.call(null,inst_18764);
var state_18823__$1 = (function (){var statearr_18847 = state_18823;
(statearr_18847[(10)] = inst_18778__$1);

return statearr_18847;
})();
if(inst_18778__$1){
var statearr_18848_18888 = state_18823__$1;
(statearr_18848_18888[(1)] = (13));

} else {
var statearr_18849_18889 = state_18823__$1;
(statearr_18849_18889[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (9))){
var inst_18800 = (state_18823[(2)]);
var state_18823__$1 = state_18823;
var statearr_18850_18890 = state_18823__$1;
(statearr_18850_18890[(2)] = inst_18800);

(statearr_18850_18890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (5))){
var inst_18761 = cljs.core.deref.call(null,mults);
var inst_18762 = cljs.core.vals.call(null,inst_18761);
var inst_18763 = cljs.core.seq.call(null,inst_18762);
var inst_18764 = inst_18763;
var inst_18765 = null;
var inst_18766 = (0);
var inst_18767 = (0);
var state_18823__$1 = (function (){var statearr_18851 = state_18823;
(statearr_18851[(13)] = inst_18764);

(statearr_18851[(14)] = inst_18767);

(statearr_18851[(15)] = inst_18765);

(statearr_18851[(16)] = inst_18766);

return statearr_18851;
})();
var statearr_18852_18891 = state_18823__$1;
(statearr_18852_18891[(2)] = null);

(statearr_18852_18891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (14))){
var state_18823__$1 = state_18823;
var statearr_18856_18892 = state_18823__$1;
(statearr_18856_18892[(2)] = null);

(statearr_18856_18892[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (16))){
var inst_18778 = (state_18823[(10)]);
var inst_18782 = cljs.core.chunk_first.call(null,inst_18778);
var inst_18783 = cljs.core.chunk_rest.call(null,inst_18778);
var inst_18784 = cljs.core.count.call(null,inst_18782);
var inst_18764 = inst_18783;
var inst_18765 = inst_18782;
var inst_18766 = inst_18784;
var inst_18767 = (0);
var state_18823__$1 = (function (){var statearr_18857 = state_18823;
(statearr_18857[(13)] = inst_18764);

(statearr_18857[(14)] = inst_18767);

(statearr_18857[(15)] = inst_18765);

(statearr_18857[(16)] = inst_18766);

return statearr_18857;
})();
var statearr_18858_18893 = state_18823__$1;
(statearr_18858_18893[(2)] = null);

(statearr_18858_18893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (10))){
var inst_18764 = (state_18823[(13)]);
var inst_18767 = (state_18823[(14)]);
var inst_18765 = (state_18823[(15)]);
var inst_18766 = (state_18823[(16)]);
var inst_18772 = cljs.core._nth.call(null,inst_18765,inst_18767);
var inst_18773 = cljs.core.async.muxch_STAR_.call(null,inst_18772);
var inst_18774 = cljs.core.async.close_BANG_.call(null,inst_18773);
var inst_18775 = (inst_18767 + (1));
var tmp18853 = inst_18764;
var tmp18854 = inst_18765;
var tmp18855 = inst_18766;
var inst_18764__$1 = tmp18853;
var inst_18765__$1 = tmp18854;
var inst_18766__$1 = tmp18855;
var inst_18767__$1 = inst_18775;
var state_18823__$1 = (function (){var statearr_18859 = state_18823;
(statearr_18859[(17)] = inst_18774);

(statearr_18859[(13)] = inst_18764__$1);

(statearr_18859[(14)] = inst_18767__$1);

(statearr_18859[(15)] = inst_18765__$1);

(statearr_18859[(16)] = inst_18766__$1);

return statearr_18859;
})();
var statearr_18860_18894 = state_18823__$1;
(statearr_18860_18894[(2)] = null);

(statearr_18860_18894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (18))){
var inst_18793 = (state_18823[(2)]);
var state_18823__$1 = state_18823;
var statearr_18861_18895 = state_18823__$1;
(statearr_18861_18895[(2)] = inst_18793);

(statearr_18861_18895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (8))){
var inst_18767 = (state_18823[(14)]);
var inst_18766 = (state_18823[(16)]);
var inst_18769 = (inst_18767 < inst_18766);
var inst_18770 = inst_18769;
var state_18823__$1 = state_18823;
if(cljs.core.truth_(inst_18770)){
var statearr_18862_18896 = state_18823__$1;
(statearr_18862_18896[(1)] = (10));

} else {
var statearr_18863_18897 = state_18823__$1;
(statearr_18863_18897[(1)] = (11));

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
});})(c__15771__auto___18869,mults,ensure_mult,p))
;
return ((function (switch__15604__auto__,c__15771__auto___18869,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15605__auto__ = null;
var cljs$core$async$state_machine__15605__auto____0 = (function (){
var statearr_18864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18864[(0)] = cljs$core$async$state_machine__15605__auto__);

(statearr_18864[(1)] = (1));

return statearr_18864;
});
var cljs$core$async$state_machine__15605__auto____1 = (function (state_18823){
while(true){
var ret_value__15606__auto__ = (function (){try{while(true){
var result__15607__auto__ = switch__15604__auto__.call(null,state_18823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15607__auto__;
}
break;
}
}catch (e18865){if((e18865 instanceof Object)){
var ex__15608__auto__ = e18865;
var statearr_18866_18898 = state_18823;
(statearr_18866_18898[(5)] = ex__15608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18899 = state_18823;
state_18823 = G__18899;
continue;
} else {
return ret_value__15606__auto__;
}
break;
}
});
cljs$core$async$state_machine__15605__auto__ = function(state_18823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15605__auto____1.call(this,state_18823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15605__auto____0;
cljs$core$async$state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15605__auto____1;
return cljs$core$async$state_machine__15605__auto__;
})()
;})(switch__15604__auto__,c__15771__auto___18869,mults,ensure_mult,p))
})();
var state__15773__auto__ = (function (){var statearr_18867 = f__15772__auto__.call(null);
(statearr_18867[(6)] = c__15771__auto___18869);

return statearr_18867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15773__auto__);
});})(c__15771__auto___18869,mults,ensure_mult,p))
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
var G__18901 = arguments.length;
switch (G__18901) {
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
var G__18904 = arguments.length;
switch (G__18904) {
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
var G__18907 = arguments.length;
switch (G__18907) {
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
var c__15771__auto___18974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15771__auto___18974,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15772__auto__ = (function (){var switch__15604__auto__ = ((function (c__15771__auto___18974,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18946){
var state_val_18947 = (state_18946[(1)]);
if((state_val_18947 === (7))){
var state_18946__$1 = state_18946;
var statearr_18948_18975 = state_18946__$1;
(statearr_18948_18975[(2)] = null);

(statearr_18948_18975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18947 === (1))){
var state_18946__$1 = state_18946;
var statearr_18949_18976 = state_18946__$1;
(statearr_18949_18976[(2)] = null);

(statearr_18949_18976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18947 === (4))){
var inst_18910 = (state_18946[(7)]);
var inst_18912 = (inst_18910 < cnt);
var state_18946__$1 = state_18946;
if(cljs.core.truth_(inst_18912)){
var statearr_18950_18977 = state_18946__$1;
(statearr_18950_18977[(1)] = (6));

} else {
var statearr_18951_18978 = state_18946__$1;
(statearr_18951_18978[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18947 === (15))){
var inst_18942 = (state_18946[(2)]);
var state_18946__$1 = state_18946;
var statearr_18952_18979 = state_18946__$1;
(statearr_18952_18979[(2)] = inst_18942);

(statearr_18952_18979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18947 === (13))){
var inst_18935 = cljs.core.async.close_BANG_.call(null,out);
var state_18946__$1 = state_18946;
var statearr_18953_18980 = state_18946__$1;
(statearr_18953_18980[(2)] = inst_18935);

(statearr_18953_18980[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18947 === (6))){
var state_18946__$1 = state_18946;
var statearr_18954_18981 = state_18946__$1;
(statearr_18954_18981[(2)] = null);

(statearr_18954_18981[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18947 === (3))){
var inst_18944 = (state_18946[(2)]);
var state_18946__$1 = state_18946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18946__$1,inst_18944);
} else {
if((state_val_18947 === (12))){
var inst_18932 = (state_18946[(8)]);
var inst_18932__$1 = (state_18946[(2)]);
var inst_18933 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18932__$1);
var state_18946__$1 = (function (){var statearr_18955 = state_18946;
(statearr_18955[(8)] = inst_18932__$1);

return statearr_18955;
})();
if(cljs.core.truth_(inst_18933)){
var statearr_18956_18982 = state_18946__$1;
(statearr_18956_18982[(1)] = (13));

} else {
var statearr_18957_18983 = state_18946__$1;
(statearr_18957_18983[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18947 === (2))){
var inst_18909 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18910 = (0);
var state_18946__$1 = (function (){var statearr_18958 = state_18946;
(statearr_18958[(9)] = inst_18909);

(statearr_18958[(7)] = inst_18910);

return statearr_18958;
})();
var statearr_18959_18984 = state_18946__$1;
(statearr_18959_18984[(2)] = null);

(statearr_18959_18984[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18947 === (11))){
var inst_18910 = (state_18946[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18946,(10),Object,null,(9));
var inst_18919 = chs__$1.call(null,inst_18910);
var inst_18920 = done.call(null,inst_18910);
var inst_18921 = cljs.core.async.take_BANG_.call(null,inst_18919,inst_18920);
var state_18946__$1 = state_18946;
var statearr_18960_18985 = state_18946__$1;
(statearr_18960_18985[(2)] = inst_18921);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18946__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18947 === (9))){
var inst_18910 = (state_18946[(7)]);
var inst_18923 = (state_18946[(2)]);
var inst_18924 = (inst_18910 + (1));
var inst_18910__$1 = inst_18924;
var state_18946__$1 = (function (){var statearr_18961 = state_18946;
(statearr_18961[(10)] = inst_18923);

(statearr_18961[(7)] = inst_18910__$1);

return statearr_18961;
})();
var statearr_18962_18986 = state_18946__$1;
(statearr_18962_18986[(2)] = null);

(statearr_18962_18986[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18947 === (5))){
var inst_18930 = (state_18946[(2)]);
var state_18946__$1 = (function (){var statearr_18963 = state_18946;
(statearr_18963[(11)] = inst_18930);

return statearr_18963;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18946__$1,(12),dchan);
} else {
if((state_val_18947 === (14))){
var inst_18932 = (state_18946[(8)]);
var inst_18937 = cljs.core.apply.call(null,f,inst_18932);
var state_18946__$1 = state_18946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18946__$1,(16),out,inst_18937);
} else {
if((state_val_18947 === (16))){
var inst_18939 = (state_18946[(2)]);
var state_18946__$1 = (function (){var statearr_18964 = state_18946;
(statearr_18964[(12)] = inst_18939);

return statearr_18964;
})();
var statearr_18965_18987 = state_18946__$1;
(statearr_18965_18987[(2)] = null);

(statearr_18965_18987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18947 === (10))){
var inst_18914 = (state_18946[(2)]);
var inst_18915 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18946__$1 = (function (){var statearr_18966 = state_18946;
(statearr_18966[(13)] = inst_18914);

return statearr_18966;
})();
var statearr_18967_18988 = state_18946__$1;
(statearr_18967_18988[(2)] = inst_18915);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18946__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18947 === (8))){
var inst_18928 = (state_18946[(2)]);
var state_18946__$1 = state_18946;
var statearr_18968_18989 = state_18946__$1;
(statearr_18968_18989[(2)] = inst_18928);

(statearr_18968_18989[(1)] = (5));


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
});})(c__15771__auto___18974,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15604__auto__,c__15771__auto___18974,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15605__auto__ = null;
var cljs$core$async$state_machine__15605__auto____0 = (function (){
var statearr_18969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18969[(0)] = cljs$core$async$state_machine__15605__auto__);

(statearr_18969[(1)] = (1));

return statearr_18969;
});
var cljs$core$async$state_machine__15605__auto____1 = (function (state_18946){
while(true){
var ret_value__15606__auto__ = (function (){try{while(true){
var result__15607__auto__ = switch__15604__auto__.call(null,state_18946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15607__auto__;
}
break;
}
}catch (e18970){if((e18970 instanceof Object)){
var ex__15608__auto__ = e18970;
var statearr_18971_18990 = state_18946;
(statearr_18971_18990[(5)] = ex__15608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18991 = state_18946;
state_18946 = G__18991;
continue;
} else {
return ret_value__15606__auto__;
}
break;
}
});
cljs$core$async$state_machine__15605__auto__ = function(state_18946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15605__auto____1.call(this,state_18946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15605__auto____0;
cljs$core$async$state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15605__auto____1;
return cljs$core$async$state_machine__15605__auto__;
})()
;})(switch__15604__auto__,c__15771__auto___18974,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15773__auto__ = (function (){var statearr_18972 = f__15772__auto__.call(null);
(statearr_18972[(6)] = c__15771__auto___18974);

return statearr_18972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15773__auto__);
});})(c__15771__auto___18974,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__18994 = arguments.length;
switch (G__18994) {
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
var c__15771__auto___19048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15771__auto___19048,out){
return (function (){
var f__15772__auto__ = (function (){var switch__15604__auto__ = ((function (c__15771__auto___19048,out){
return (function (state_19026){
var state_val_19027 = (state_19026[(1)]);
if((state_val_19027 === (7))){
var inst_19005 = (state_19026[(7)]);
var inst_19006 = (state_19026[(8)]);
var inst_19005__$1 = (state_19026[(2)]);
var inst_19006__$1 = cljs.core.nth.call(null,inst_19005__$1,(0),null);
var inst_19007 = cljs.core.nth.call(null,inst_19005__$1,(1),null);
var inst_19008 = (inst_19006__$1 == null);
var state_19026__$1 = (function (){var statearr_19028 = state_19026;
(statearr_19028[(7)] = inst_19005__$1);

(statearr_19028[(9)] = inst_19007);

(statearr_19028[(8)] = inst_19006__$1);

return statearr_19028;
})();
if(cljs.core.truth_(inst_19008)){
var statearr_19029_19049 = state_19026__$1;
(statearr_19029_19049[(1)] = (8));

} else {
var statearr_19030_19050 = state_19026__$1;
(statearr_19030_19050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (1))){
var inst_18995 = cljs.core.vec.call(null,chs);
var inst_18996 = inst_18995;
var state_19026__$1 = (function (){var statearr_19031 = state_19026;
(statearr_19031[(10)] = inst_18996);

return statearr_19031;
})();
var statearr_19032_19051 = state_19026__$1;
(statearr_19032_19051[(2)] = null);

(statearr_19032_19051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (4))){
var inst_18996 = (state_19026[(10)]);
var state_19026__$1 = state_19026;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19026__$1,(7),inst_18996);
} else {
if((state_val_19027 === (6))){
var inst_19022 = (state_19026[(2)]);
var state_19026__$1 = state_19026;
var statearr_19033_19052 = state_19026__$1;
(statearr_19033_19052[(2)] = inst_19022);

(statearr_19033_19052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (3))){
var inst_19024 = (state_19026[(2)]);
var state_19026__$1 = state_19026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19026__$1,inst_19024);
} else {
if((state_val_19027 === (2))){
var inst_18996 = (state_19026[(10)]);
var inst_18998 = cljs.core.count.call(null,inst_18996);
var inst_18999 = (inst_18998 > (0));
var state_19026__$1 = state_19026;
if(cljs.core.truth_(inst_18999)){
var statearr_19035_19053 = state_19026__$1;
(statearr_19035_19053[(1)] = (4));

} else {
var statearr_19036_19054 = state_19026__$1;
(statearr_19036_19054[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (11))){
var inst_18996 = (state_19026[(10)]);
var inst_19015 = (state_19026[(2)]);
var tmp19034 = inst_18996;
var inst_18996__$1 = tmp19034;
var state_19026__$1 = (function (){var statearr_19037 = state_19026;
(statearr_19037[(10)] = inst_18996__$1);

(statearr_19037[(11)] = inst_19015);

return statearr_19037;
})();
var statearr_19038_19055 = state_19026__$1;
(statearr_19038_19055[(2)] = null);

(statearr_19038_19055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (9))){
var inst_19006 = (state_19026[(8)]);
var state_19026__$1 = state_19026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19026__$1,(11),out,inst_19006);
} else {
if((state_val_19027 === (5))){
var inst_19020 = cljs.core.async.close_BANG_.call(null,out);
var state_19026__$1 = state_19026;
var statearr_19039_19056 = state_19026__$1;
(statearr_19039_19056[(2)] = inst_19020);

(statearr_19039_19056[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (10))){
var inst_19018 = (state_19026[(2)]);
var state_19026__$1 = state_19026;
var statearr_19040_19057 = state_19026__$1;
(statearr_19040_19057[(2)] = inst_19018);

(statearr_19040_19057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (8))){
var inst_19005 = (state_19026[(7)]);
var inst_18996 = (state_19026[(10)]);
var inst_19007 = (state_19026[(9)]);
var inst_19006 = (state_19026[(8)]);
var inst_19010 = (function (){var cs = inst_18996;
var vec__19001 = inst_19005;
var v = inst_19006;
var c = inst_19007;
return ((function (cs,vec__19001,v,c,inst_19005,inst_18996,inst_19007,inst_19006,state_val_19027,c__15771__auto___19048,out){
return (function (p1__18992_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18992_SHARP_);
});
;})(cs,vec__19001,v,c,inst_19005,inst_18996,inst_19007,inst_19006,state_val_19027,c__15771__auto___19048,out))
})();
var inst_19011 = cljs.core.filterv.call(null,inst_19010,inst_18996);
var inst_18996__$1 = inst_19011;
var state_19026__$1 = (function (){var statearr_19041 = state_19026;
(statearr_19041[(10)] = inst_18996__$1);

return statearr_19041;
})();
var statearr_19042_19058 = state_19026__$1;
(statearr_19042_19058[(2)] = null);

(statearr_19042_19058[(1)] = (2));


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
});})(c__15771__auto___19048,out))
;
return ((function (switch__15604__auto__,c__15771__auto___19048,out){
return (function() {
var cljs$core$async$state_machine__15605__auto__ = null;
var cljs$core$async$state_machine__15605__auto____0 = (function (){
var statearr_19043 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19043[(0)] = cljs$core$async$state_machine__15605__auto__);

(statearr_19043[(1)] = (1));

return statearr_19043;
});
var cljs$core$async$state_machine__15605__auto____1 = (function (state_19026){
while(true){
var ret_value__15606__auto__ = (function (){try{while(true){
var result__15607__auto__ = switch__15604__auto__.call(null,state_19026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15607__auto__;
}
break;
}
}catch (e19044){if((e19044 instanceof Object)){
var ex__15608__auto__ = e19044;
var statearr_19045_19059 = state_19026;
(statearr_19045_19059[(5)] = ex__15608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19060 = state_19026;
state_19026 = G__19060;
continue;
} else {
return ret_value__15606__auto__;
}
break;
}
});
cljs$core$async$state_machine__15605__auto__ = function(state_19026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15605__auto____1.call(this,state_19026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15605__auto____0;
cljs$core$async$state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15605__auto____1;
return cljs$core$async$state_machine__15605__auto__;
})()
;})(switch__15604__auto__,c__15771__auto___19048,out))
})();
var state__15773__auto__ = (function (){var statearr_19046 = f__15772__auto__.call(null);
(statearr_19046[(6)] = c__15771__auto___19048);

return statearr_19046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15773__auto__);
});})(c__15771__auto___19048,out))
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
var G__19062 = arguments.length;
switch (G__19062) {
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
var c__15771__auto___19107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15771__auto___19107,out){
return (function (){
var f__15772__auto__ = (function (){var switch__15604__auto__ = ((function (c__15771__auto___19107,out){
return (function (state_19086){
var state_val_19087 = (state_19086[(1)]);
if((state_val_19087 === (7))){
var inst_19068 = (state_19086[(7)]);
var inst_19068__$1 = (state_19086[(2)]);
var inst_19069 = (inst_19068__$1 == null);
var inst_19070 = cljs.core.not.call(null,inst_19069);
var state_19086__$1 = (function (){var statearr_19088 = state_19086;
(statearr_19088[(7)] = inst_19068__$1);

return statearr_19088;
})();
if(inst_19070){
var statearr_19089_19108 = state_19086__$1;
(statearr_19089_19108[(1)] = (8));

} else {
var statearr_19090_19109 = state_19086__$1;
(statearr_19090_19109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (1))){
var inst_19063 = (0);
var state_19086__$1 = (function (){var statearr_19091 = state_19086;
(statearr_19091[(8)] = inst_19063);

return statearr_19091;
})();
var statearr_19092_19110 = state_19086__$1;
(statearr_19092_19110[(2)] = null);

(statearr_19092_19110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (4))){
var state_19086__$1 = state_19086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19086__$1,(7),ch);
} else {
if((state_val_19087 === (6))){
var inst_19081 = (state_19086[(2)]);
var state_19086__$1 = state_19086;
var statearr_19093_19111 = state_19086__$1;
(statearr_19093_19111[(2)] = inst_19081);

(statearr_19093_19111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (3))){
var inst_19083 = (state_19086[(2)]);
var inst_19084 = cljs.core.async.close_BANG_.call(null,out);
var state_19086__$1 = (function (){var statearr_19094 = state_19086;
(statearr_19094[(9)] = inst_19083);

return statearr_19094;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19086__$1,inst_19084);
} else {
if((state_val_19087 === (2))){
var inst_19063 = (state_19086[(8)]);
var inst_19065 = (inst_19063 < n);
var state_19086__$1 = state_19086;
if(cljs.core.truth_(inst_19065)){
var statearr_19095_19112 = state_19086__$1;
(statearr_19095_19112[(1)] = (4));

} else {
var statearr_19096_19113 = state_19086__$1;
(statearr_19096_19113[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (11))){
var inst_19063 = (state_19086[(8)]);
var inst_19073 = (state_19086[(2)]);
var inst_19074 = (inst_19063 + (1));
var inst_19063__$1 = inst_19074;
var state_19086__$1 = (function (){var statearr_19097 = state_19086;
(statearr_19097[(8)] = inst_19063__$1);

(statearr_19097[(10)] = inst_19073);

return statearr_19097;
})();
var statearr_19098_19114 = state_19086__$1;
(statearr_19098_19114[(2)] = null);

(statearr_19098_19114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (9))){
var state_19086__$1 = state_19086;
var statearr_19099_19115 = state_19086__$1;
(statearr_19099_19115[(2)] = null);

(statearr_19099_19115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (5))){
var state_19086__$1 = state_19086;
var statearr_19100_19116 = state_19086__$1;
(statearr_19100_19116[(2)] = null);

(statearr_19100_19116[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (10))){
var inst_19078 = (state_19086[(2)]);
var state_19086__$1 = state_19086;
var statearr_19101_19117 = state_19086__$1;
(statearr_19101_19117[(2)] = inst_19078);

(statearr_19101_19117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (8))){
var inst_19068 = (state_19086[(7)]);
var state_19086__$1 = state_19086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19086__$1,(11),out,inst_19068);
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
});})(c__15771__auto___19107,out))
;
return ((function (switch__15604__auto__,c__15771__auto___19107,out){
return (function() {
var cljs$core$async$state_machine__15605__auto__ = null;
var cljs$core$async$state_machine__15605__auto____0 = (function (){
var statearr_19102 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19102[(0)] = cljs$core$async$state_machine__15605__auto__);

(statearr_19102[(1)] = (1));

return statearr_19102;
});
var cljs$core$async$state_machine__15605__auto____1 = (function (state_19086){
while(true){
var ret_value__15606__auto__ = (function (){try{while(true){
var result__15607__auto__ = switch__15604__auto__.call(null,state_19086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15607__auto__;
}
break;
}
}catch (e19103){if((e19103 instanceof Object)){
var ex__15608__auto__ = e19103;
var statearr_19104_19118 = state_19086;
(statearr_19104_19118[(5)] = ex__15608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19119 = state_19086;
state_19086 = G__19119;
continue;
} else {
return ret_value__15606__auto__;
}
break;
}
});
cljs$core$async$state_machine__15605__auto__ = function(state_19086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15605__auto____1.call(this,state_19086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15605__auto____0;
cljs$core$async$state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15605__auto____1;
return cljs$core$async$state_machine__15605__auto__;
})()
;})(switch__15604__auto__,c__15771__auto___19107,out))
})();
var state__15773__auto__ = (function (){var statearr_19105 = f__15772__auto__.call(null);
(statearr_19105[(6)] = c__15771__auto___19107);

return statearr_19105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15773__auto__);
});})(c__15771__auto___19107,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19121 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19121 = (function (f,ch,meta19122){
this.f = f;
this.ch = ch;
this.meta19122 = meta19122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19123,meta19122__$1){
var self__ = this;
var _19123__$1 = this;
return (new cljs.core.async.t_cljs$core$async19121(self__.f,self__.ch,meta19122__$1));
});

cljs.core.async.t_cljs$core$async19121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19123){
var self__ = this;
var _19123__$1 = this;
return self__.meta19122;
});

cljs.core.async.t_cljs$core$async19121.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19121.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19121.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19121.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19121.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19124 = (function (f,ch,meta19122,_,fn1,meta19125){
this.f = f;
this.ch = ch;
this.meta19122 = meta19122;
this._ = _;
this.fn1 = fn1;
this.meta19125 = meta19125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19126,meta19125__$1){
var self__ = this;
var _19126__$1 = this;
return (new cljs.core.async.t_cljs$core$async19124(self__.f,self__.ch,self__.meta19122,self__._,self__.fn1,meta19125__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19124.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19126){
var self__ = this;
var _19126__$1 = this;
return self__.meta19125;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19124.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19124.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19120_SHARP_){
return f1.call(null,(((p1__19120_SHARP_ == null))?null:self__.f.call(null,p1__19120_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19124.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19122","meta19122",1384507033,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19121","cljs.core.async/t_cljs$core$async19121",1027366328,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19125","meta19125",-1033328982,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19124.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19124";

cljs.core.async.t_cljs$core$async19124.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async19124");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19124.
 */
cljs.core.async.__GT_t_cljs$core$async19124 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19124(f__$1,ch__$1,meta19122__$1,___$2,fn1__$1,meta19125){
return (new cljs.core.async.t_cljs$core$async19124(f__$1,ch__$1,meta19122__$1,___$2,fn1__$1,meta19125));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19124(self__.f,self__.ch,self__.meta19122,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async19121.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19121.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19121.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19122","meta19122",1384507033,null)], null);
});

cljs.core.async.t_cljs$core$async19121.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19121";

cljs.core.async.t_cljs$core$async19121.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async19121");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19121.
 */
cljs.core.async.__GT_t_cljs$core$async19121 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19121(f__$1,ch__$1,meta19122){
return (new cljs.core.async.t_cljs$core$async19121(f__$1,ch__$1,meta19122));
});

}

return (new cljs.core.async.t_cljs$core$async19121(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19127 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19127 = (function (f,ch,meta19128){
this.f = f;
this.ch = ch;
this.meta19128 = meta19128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19129,meta19128__$1){
var self__ = this;
var _19129__$1 = this;
return (new cljs.core.async.t_cljs$core$async19127(self__.f,self__.ch,meta19128__$1));
});

cljs.core.async.t_cljs$core$async19127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19129){
var self__ = this;
var _19129__$1 = this;
return self__.meta19128;
});

cljs.core.async.t_cljs$core$async19127.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19127.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19127.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19127.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19127.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19127.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19128","meta19128",191497661,null)], null);
});

cljs.core.async.t_cljs$core$async19127.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19127";

cljs.core.async.t_cljs$core$async19127.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async19127");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19127.
 */
cljs.core.async.__GT_t_cljs$core$async19127 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19127(f__$1,ch__$1,meta19128){
return (new cljs.core.async.t_cljs$core$async19127(f__$1,ch__$1,meta19128));
});

}

return (new cljs.core.async.t_cljs$core$async19127(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19130 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19130 = (function (p,ch,meta19131){
this.p = p;
this.ch = ch;
this.meta19131 = meta19131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19132,meta19131__$1){
var self__ = this;
var _19132__$1 = this;
return (new cljs.core.async.t_cljs$core$async19130(self__.p,self__.ch,meta19131__$1));
});

cljs.core.async.t_cljs$core$async19130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19132){
var self__ = this;
var _19132__$1 = this;
return self__.meta19131;
});

cljs.core.async.t_cljs$core$async19130.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19130.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19130.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19130.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19130.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19130.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19130.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19131","meta19131",-1088108192,null)], null);
});

cljs.core.async.t_cljs$core$async19130.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19130";

cljs.core.async.t_cljs$core$async19130.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async19130");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19130.
 */
cljs.core.async.__GT_t_cljs$core$async19130 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19130(p__$1,ch__$1,meta19131){
return (new cljs.core.async.t_cljs$core$async19130(p__$1,ch__$1,meta19131));
});

}

return (new cljs.core.async.t_cljs$core$async19130(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19134 = arguments.length;
switch (G__19134) {
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
var c__15771__auto___19174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15771__auto___19174,out){
return (function (){
var f__15772__auto__ = (function (){var switch__15604__auto__ = ((function (c__15771__auto___19174,out){
return (function (state_19155){
var state_val_19156 = (state_19155[(1)]);
if((state_val_19156 === (7))){
var inst_19151 = (state_19155[(2)]);
var state_19155__$1 = state_19155;
var statearr_19157_19175 = state_19155__$1;
(statearr_19157_19175[(2)] = inst_19151);

(statearr_19157_19175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19156 === (1))){
var state_19155__$1 = state_19155;
var statearr_19158_19176 = state_19155__$1;
(statearr_19158_19176[(2)] = null);

(statearr_19158_19176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19156 === (4))){
var inst_19137 = (state_19155[(7)]);
var inst_19137__$1 = (state_19155[(2)]);
var inst_19138 = (inst_19137__$1 == null);
var state_19155__$1 = (function (){var statearr_19159 = state_19155;
(statearr_19159[(7)] = inst_19137__$1);

return statearr_19159;
})();
if(cljs.core.truth_(inst_19138)){
var statearr_19160_19177 = state_19155__$1;
(statearr_19160_19177[(1)] = (5));

} else {
var statearr_19161_19178 = state_19155__$1;
(statearr_19161_19178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19156 === (6))){
var inst_19137 = (state_19155[(7)]);
var inst_19142 = p.call(null,inst_19137);
var state_19155__$1 = state_19155;
if(cljs.core.truth_(inst_19142)){
var statearr_19162_19179 = state_19155__$1;
(statearr_19162_19179[(1)] = (8));

} else {
var statearr_19163_19180 = state_19155__$1;
(statearr_19163_19180[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19156 === (3))){
var inst_19153 = (state_19155[(2)]);
var state_19155__$1 = state_19155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19155__$1,inst_19153);
} else {
if((state_val_19156 === (2))){
var state_19155__$1 = state_19155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19155__$1,(4),ch);
} else {
if((state_val_19156 === (11))){
var inst_19145 = (state_19155[(2)]);
var state_19155__$1 = state_19155;
var statearr_19164_19181 = state_19155__$1;
(statearr_19164_19181[(2)] = inst_19145);

(statearr_19164_19181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19156 === (9))){
var state_19155__$1 = state_19155;
var statearr_19165_19182 = state_19155__$1;
(statearr_19165_19182[(2)] = null);

(statearr_19165_19182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19156 === (5))){
var inst_19140 = cljs.core.async.close_BANG_.call(null,out);
var state_19155__$1 = state_19155;
var statearr_19166_19183 = state_19155__$1;
(statearr_19166_19183[(2)] = inst_19140);

(statearr_19166_19183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19156 === (10))){
var inst_19148 = (state_19155[(2)]);
var state_19155__$1 = (function (){var statearr_19167 = state_19155;
(statearr_19167[(8)] = inst_19148);

return statearr_19167;
})();
var statearr_19168_19184 = state_19155__$1;
(statearr_19168_19184[(2)] = null);

(statearr_19168_19184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19156 === (8))){
var inst_19137 = (state_19155[(7)]);
var state_19155__$1 = state_19155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19155__$1,(11),out,inst_19137);
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
});})(c__15771__auto___19174,out))
;
return ((function (switch__15604__auto__,c__15771__auto___19174,out){
return (function() {
var cljs$core$async$state_machine__15605__auto__ = null;
var cljs$core$async$state_machine__15605__auto____0 = (function (){
var statearr_19169 = [null,null,null,null,null,null,null,null,null];
(statearr_19169[(0)] = cljs$core$async$state_machine__15605__auto__);

(statearr_19169[(1)] = (1));

return statearr_19169;
});
var cljs$core$async$state_machine__15605__auto____1 = (function (state_19155){
while(true){
var ret_value__15606__auto__ = (function (){try{while(true){
var result__15607__auto__ = switch__15604__auto__.call(null,state_19155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15607__auto__;
}
break;
}
}catch (e19170){if((e19170 instanceof Object)){
var ex__15608__auto__ = e19170;
var statearr_19171_19185 = state_19155;
(statearr_19171_19185[(5)] = ex__15608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19186 = state_19155;
state_19155 = G__19186;
continue;
} else {
return ret_value__15606__auto__;
}
break;
}
});
cljs$core$async$state_machine__15605__auto__ = function(state_19155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15605__auto____1.call(this,state_19155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15605__auto____0;
cljs$core$async$state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15605__auto____1;
return cljs$core$async$state_machine__15605__auto__;
})()
;})(switch__15604__auto__,c__15771__auto___19174,out))
})();
var state__15773__auto__ = (function (){var statearr_19172 = f__15772__auto__.call(null);
(statearr_19172[(6)] = c__15771__auto___19174);

return statearr_19172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15773__auto__);
});})(c__15771__auto___19174,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19188 = arguments.length;
switch (G__19188) {
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
var c__15771__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15771__auto__){
return (function (){
var f__15772__auto__ = (function (){var switch__15604__auto__ = ((function (c__15771__auto__){
return (function (state_19251){
var state_val_19252 = (state_19251[(1)]);
if((state_val_19252 === (7))){
var inst_19247 = (state_19251[(2)]);
var state_19251__$1 = state_19251;
var statearr_19253_19291 = state_19251__$1;
(statearr_19253_19291[(2)] = inst_19247);

(statearr_19253_19291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (20))){
var inst_19217 = (state_19251[(7)]);
var inst_19228 = (state_19251[(2)]);
var inst_19229 = cljs.core.next.call(null,inst_19217);
var inst_19203 = inst_19229;
var inst_19204 = null;
var inst_19205 = (0);
var inst_19206 = (0);
var state_19251__$1 = (function (){var statearr_19254 = state_19251;
(statearr_19254[(8)] = inst_19228);

(statearr_19254[(9)] = inst_19203);

(statearr_19254[(10)] = inst_19204);

(statearr_19254[(11)] = inst_19205);

(statearr_19254[(12)] = inst_19206);

return statearr_19254;
})();
var statearr_19255_19292 = state_19251__$1;
(statearr_19255_19292[(2)] = null);

(statearr_19255_19292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (1))){
var state_19251__$1 = state_19251;
var statearr_19256_19293 = state_19251__$1;
(statearr_19256_19293[(2)] = null);

(statearr_19256_19293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (4))){
var inst_19192 = (state_19251[(13)]);
var inst_19192__$1 = (state_19251[(2)]);
var inst_19193 = (inst_19192__$1 == null);
var state_19251__$1 = (function (){var statearr_19257 = state_19251;
(statearr_19257[(13)] = inst_19192__$1);

return statearr_19257;
})();
if(cljs.core.truth_(inst_19193)){
var statearr_19258_19294 = state_19251__$1;
(statearr_19258_19294[(1)] = (5));

} else {
var statearr_19259_19295 = state_19251__$1;
(statearr_19259_19295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (15))){
var state_19251__$1 = state_19251;
var statearr_19263_19296 = state_19251__$1;
(statearr_19263_19296[(2)] = null);

(statearr_19263_19296[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (21))){
var state_19251__$1 = state_19251;
var statearr_19264_19297 = state_19251__$1;
(statearr_19264_19297[(2)] = null);

(statearr_19264_19297[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (13))){
var inst_19203 = (state_19251[(9)]);
var inst_19204 = (state_19251[(10)]);
var inst_19205 = (state_19251[(11)]);
var inst_19206 = (state_19251[(12)]);
var inst_19213 = (state_19251[(2)]);
var inst_19214 = (inst_19206 + (1));
var tmp19260 = inst_19203;
var tmp19261 = inst_19204;
var tmp19262 = inst_19205;
var inst_19203__$1 = tmp19260;
var inst_19204__$1 = tmp19261;
var inst_19205__$1 = tmp19262;
var inst_19206__$1 = inst_19214;
var state_19251__$1 = (function (){var statearr_19265 = state_19251;
(statearr_19265[(9)] = inst_19203__$1);

(statearr_19265[(14)] = inst_19213);

(statearr_19265[(10)] = inst_19204__$1);

(statearr_19265[(11)] = inst_19205__$1);

(statearr_19265[(12)] = inst_19206__$1);

return statearr_19265;
})();
var statearr_19266_19298 = state_19251__$1;
(statearr_19266_19298[(2)] = null);

(statearr_19266_19298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (22))){
var state_19251__$1 = state_19251;
var statearr_19267_19299 = state_19251__$1;
(statearr_19267_19299[(2)] = null);

(statearr_19267_19299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (6))){
var inst_19192 = (state_19251[(13)]);
var inst_19201 = f.call(null,inst_19192);
var inst_19202 = cljs.core.seq.call(null,inst_19201);
var inst_19203 = inst_19202;
var inst_19204 = null;
var inst_19205 = (0);
var inst_19206 = (0);
var state_19251__$1 = (function (){var statearr_19268 = state_19251;
(statearr_19268[(9)] = inst_19203);

(statearr_19268[(10)] = inst_19204);

(statearr_19268[(11)] = inst_19205);

(statearr_19268[(12)] = inst_19206);

return statearr_19268;
})();
var statearr_19269_19300 = state_19251__$1;
(statearr_19269_19300[(2)] = null);

(statearr_19269_19300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (17))){
var inst_19217 = (state_19251[(7)]);
var inst_19221 = cljs.core.chunk_first.call(null,inst_19217);
var inst_19222 = cljs.core.chunk_rest.call(null,inst_19217);
var inst_19223 = cljs.core.count.call(null,inst_19221);
var inst_19203 = inst_19222;
var inst_19204 = inst_19221;
var inst_19205 = inst_19223;
var inst_19206 = (0);
var state_19251__$1 = (function (){var statearr_19270 = state_19251;
(statearr_19270[(9)] = inst_19203);

(statearr_19270[(10)] = inst_19204);

(statearr_19270[(11)] = inst_19205);

(statearr_19270[(12)] = inst_19206);

return statearr_19270;
})();
var statearr_19271_19301 = state_19251__$1;
(statearr_19271_19301[(2)] = null);

(statearr_19271_19301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (3))){
var inst_19249 = (state_19251[(2)]);
var state_19251__$1 = state_19251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19251__$1,inst_19249);
} else {
if((state_val_19252 === (12))){
var inst_19237 = (state_19251[(2)]);
var state_19251__$1 = state_19251;
var statearr_19272_19302 = state_19251__$1;
(statearr_19272_19302[(2)] = inst_19237);

(statearr_19272_19302[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (2))){
var state_19251__$1 = state_19251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19251__$1,(4),in$);
} else {
if((state_val_19252 === (23))){
var inst_19245 = (state_19251[(2)]);
var state_19251__$1 = state_19251;
var statearr_19273_19303 = state_19251__$1;
(statearr_19273_19303[(2)] = inst_19245);

(statearr_19273_19303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (19))){
var inst_19232 = (state_19251[(2)]);
var state_19251__$1 = state_19251;
var statearr_19274_19304 = state_19251__$1;
(statearr_19274_19304[(2)] = inst_19232);

(statearr_19274_19304[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (11))){
var inst_19203 = (state_19251[(9)]);
var inst_19217 = (state_19251[(7)]);
var inst_19217__$1 = cljs.core.seq.call(null,inst_19203);
var state_19251__$1 = (function (){var statearr_19275 = state_19251;
(statearr_19275[(7)] = inst_19217__$1);

return statearr_19275;
})();
if(inst_19217__$1){
var statearr_19276_19305 = state_19251__$1;
(statearr_19276_19305[(1)] = (14));

} else {
var statearr_19277_19306 = state_19251__$1;
(statearr_19277_19306[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (9))){
var inst_19239 = (state_19251[(2)]);
var inst_19240 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19251__$1 = (function (){var statearr_19278 = state_19251;
(statearr_19278[(15)] = inst_19239);

return statearr_19278;
})();
if(cljs.core.truth_(inst_19240)){
var statearr_19279_19307 = state_19251__$1;
(statearr_19279_19307[(1)] = (21));

} else {
var statearr_19280_19308 = state_19251__$1;
(statearr_19280_19308[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (5))){
var inst_19195 = cljs.core.async.close_BANG_.call(null,out);
var state_19251__$1 = state_19251;
var statearr_19281_19309 = state_19251__$1;
(statearr_19281_19309[(2)] = inst_19195);

(statearr_19281_19309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (14))){
var inst_19217 = (state_19251[(7)]);
var inst_19219 = cljs.core.chunked_seq_QMARK_.call(null,inst_19217);
var state_19251__$1 = state_19251;
if(inst_19219){
var statearr_19282_19310 = state_19251__$1;
(statearr_19282_19310[(1)] = (17));

} else {
var statearr_19283_19311 = state_19251__$1;
(statearr_19283_19311[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (16))){
var inst_19235 = (state_19251[(2)]);
var state_19251__$1 = state_19251;
var statearr_19284_19312 = state_19251__$1;
(statearr_19284_19312[(2)] = inst_19235);

(statearr_19284_19312[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (10))){
var inst_19204 = (state_19251[(10)]);
var inst_19206 = (state_19251[(12)]);
var inst_19211 = cljs.core._nth.call(null,inst_19204,inst_19206);
var state_19251__$1 = state_19251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19251__$1,(13),out,inst_19211);
} else {
if((state_val_19252 === (18))){
var inst_19217 = (state_19251[(7)]);
var inst_19226 = cljs.core.first.call(null,inst_19217);
var state_19251__$1 = state_19251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19251__$1,(20),out,inst_19226);
} else {
if((state_val_19252 === (8))){
var inst_19205 = (state_19251[(11)]);
var inst_19206 = (state_19251[(12)]);
var inst_19208 = (inst_19206 < inst_19205);
var inst_19209 = inst_19208;
var state_19251__$1 = state_19251;
if(cljs.core.truth_(inst_19209)){
var statearr_19285_19313 = state_19251__$1;
(statearr_19285_19313[(1)] = (10));

} else {
var statearr_19286_19314 = state_19251__$1;
(statearr_19286_19314[(1)] = (11));

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
});})(c__15771__auto__))
;
return ((function (switch__15604__auto__,c__15771__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15605__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15605__auto____0 = (function (){
var statearr_19287 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19287[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15605__auto__);

(statearr_19287[(1)] = (1));

return statearr_19287;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15605__auto____1 = (function (state_19251){
while(true){
var ret_value__15606__auto__ = (function (){try{while(true){
var result__15607__auto__ = switch__15604__auto__.call(null,state_19251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15607__auto__;
}
break;
}
}catch (e19288){if((e19288 instanceof Object)){
var ex__15608__auto__ = e19288;
var statearr_19289_19315 = state_19251;
(statearr_19289_19315[(5)] = ex__15608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19316 = state_19251;
state_19251 = G__19316;
continue;
} else {
return ret_value__15606__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15605__auto__ = function(state_19251){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15605__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15605__auto____1.call(this,state_19251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15605__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15605__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15605__auto__;
})()
;})(switch__15604__auto__,c__15771__auto__))
})();
var state__15773__auto__ = (function (){var statearr_19290 = f__15772__auto__.call(null);
(statearr_19290[(6)] = c__15771__auto__);

return statearr_19290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15773__auto__);
});})(c__15771__auto__))
);

return c__15771__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19318 = arguments.length;
switch (G__19318) {
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
var G__19321 = arguments.length;
switch (G__19321) {
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
var G__19324 = arguments.length;
switch (G__19324) {
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
var c__15771__auto___19371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15771__auto___19371,out){
return (function (){
var f__15772__auto__ = (function (){var switch__15604__auto__ = ((function (c__15771__auto___19371,out){
return (function (state_19348){
var state_val_19349 = (state_19348[(1)]);
if((state_val_19349 === (7))){
var inst_19343 = (state_19348[(2)]);
var state_19348__$1 = state_19348;
var statearr_19350_19372 = state_19348__$1;
(statearr_19350_19372[(2)] = inst_19343);

(statearr_19350_19372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19349 === (1))){
var inst_19325 = null;
var state_19348__$1 = (function (){var statearr_19351 = state_19348;
(statearr_19351[(7)] = inst_19325);

return statearr_19351;
})();
var statearr_19352_19373 = state_19348__$1;
(statearr_19352_19373[(2)] = null);

(statearr_19352_19373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19349 === (4))){
var inst_19328 = (state_19348[(8)]);
var inst_19328__$1 = (state_19348[(2)]);
var inst_19329 = (inst_19328__$1 == null);
var inst_19330 = cljs.core.not.call(null,inst_19329);
var state_19348__$1 = (function (){var statearr_19353 = state_19348;
(statearr_19353[(8)] = inst_19328__$1);

return statearr_19353;
})();
if(inst_19330){
var statearr_19354_19374 = state_19348__$1;
(statearr_19354_19374[(1)] = (5));

} else {
var statearr_19355_19375 = state_19348__$1;
(statearr_19355_19375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19349 === (6))){
var state_19348__$1 = state_19348;
var statearr_19356_19376 = state_19348__$1;
(statearr_19356_19376[(2)] = null);

(statearr_19356_19376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19349 === (3))){
var inst_19345 = (state_19348[(2)]);
var inst_19346 = cljs.core.async.close_BANG_.call(null,out);
var state_19348__$1 = (function (){var statearr_19357 = state_19348;
(statearr_19357[(9)] = inst_19345);

return statearr_19357;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19348__$1,inst_19346);
} else {
if((state_val_19349 === (2))){
var state_19348__$1 = state_19348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19348__$1,(4),ch);
} else {
if((state_val_19349 === (11))){
var inst_19328 = (state_19348[(8)]);
var inst_19337 = (state_19348[(2)]);
var inst_19325 = inst_19328;
var state_19348__$1 = (function (){var statearr_19358 = state_19348;
(statearr_19358[(7)] = inst_19325);

(statearr_19358[(10)] = inst_19337);

return statearr_19358;
})();
var statearr_19359_19377 = state_19348__$1;
(statearr_19359_19377[(2)] = null);

(statearr_19359_19377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19349 === (9))){
var inst_19328 = (state_19348[(8)]);
var state_19348__$1 = state_19348;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19348__$1,(11),out,inst_19328);
} else {
if((state_val_19349 === (5))){
var inst_19325 = (state_19348[(7)]);
var inst_19328 = (state_19348[(8)]);
var inst_19332 = cljs.core._EQ_.call(null,inst_19328,inst_19325);
var state_19348__$1 = state_19348;
if(inst_19332){
var statearr_19361_19378 = state_19348__$1;
(statearr_19361_19378[(1)] = (8));

} else {
var statearr_19362_19379 = state_19348__$1;
(statearr_19362_19379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19349 === (10))){
var inst_19340 = (state_19348[(2)]);
var state_19348__$1 = state_19348;
var statearr_19363_19380 = state_19348__$1;
(statearr_19363_19380[(2)] = inst_19340);

(statearr_19363_19380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19349 === (8))){
var inst_19325 = (state_19348[(7)]);
var tmp19360 = inst_19325;
var inst_19325__$1 = tmp19360;
var state_19348__$1 = (function (){var statearr_19364 = state_19348;
(statearr_19364[(7)] = inst_19325__$1);

return statearr_19364;
})();
var statearr_19365_19381 = state_19348__$1;
(statearr_19365_19381[(2)] = null);

(statearr_19365_19381[(1)] = (2));


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
});})(c__15771__auto___19371,out))
;
return ((function (switch__15604__auto__,c__15771__auto___19371,out){
return (function() {
var cljs$core$async$state_machine__15605__auto__ = null;
var cljs$core$async$state_machine__15605__auto____0 = (function (){
var statearr_19366 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19366[(0)] = cljs$core$async$state_machine__15605__auto__);

(statearr_19366[(1)] = (1));

return statearr_19366;
});
var cljs$core$async$state_machine__15605__auto____1 = (function (state_19348){
while(true){
var ret_value__15606__auto__ = (function (){try{while(true){
var result__15607__auto__ = switch__15604__auto__.call(null,state_19348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15607__auto__;
}
break;
}
}catch (e19367){if((e19367 instanceof Object)){
var ex__15608__auto__ = e19367;
var statearr_19368_19382 = state_19348;
(statearr_19368_19382[(5)] = ex__15608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19383 = state_19348;
state_19348 = G__19383;
continue;
} else {
return ret_value__15606__auto__;
}
break;
}
});
cljs$core$async$state_machine__15605__auto__ = function(state_19348){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15605__auto____1.call(this,state_19348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15605__auto____0;
cljs$core$async$state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15605__auto____1;
return cljs$core$async$state_machine__15605__auto__;
})()
;})(switch__15604__auto__,c__15771__auto___19371,out))
})();
var state__15773__auto__ = (function (){var statearr_19369 = f__15772__auto__.call(null);
(statearr_19369[(6)] = c__15771__auto___19371);

return statearr_19369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15773__auto__);
});})(c__15771__auto___19371,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19385 = arguments.length;
switch (G__19385) {
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
var c__15771__auto___19451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15771__auto___19451,out){
return (function (){
var f__15772__auto__ = (function (){var switch__15604__auto__ = ((function (c__15771__auto___19451,out){
return (function (state_19423){
var state_val_19424 = (state_19423[(1)]);
if((state_val_19424 === (7))){
var inst_19419 = (state_19423[(2)]);
var state_19423__$1 = state_19423;
var statearr_19425_19452 = state_19423__$1;
(statearr_19425_19452[(2)] = inst_19419);

(statearr_19425_19452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19424 === (1))){
var inst_19386 = (new Array(n));
var inst_19387 = inst_19386;
var inst_19388 = (0);
var state_19423__$1 = (function (){var statearr_19426 = state_19423;
(statearr_19426[(7)] = inst_19387);

(statearr_19426[(8)] = inst_19388);

return statearr_19426;
})();
var statearr_19427_19453 = state_19423__$1;
(statearr_19427_19453[(2)] = null);

(statearr_19427_19453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19424 === (4))){
var inst_19391 = (state_19423[(9)]);
var inst_19391__$1 = (state_19423[(2)]);
var inst_19392 = (inst_19391__$1 == null);
var inst_19393 = cljs.core.not.call(null,inst_19392);
var state_19423__$1 = (function (){var statearr_19428 = state_19423;
(statearr_19428[(9)] = inst_19391__$1);

return statearr_19428;
})();
if(inst_19393){
var statearr_19429_19454 = state_19423__$1;
(statearr_19429_19454[(1)] = (5));

} else {
var statearr_19430_19455 = state_19423__$1;
(statearr_19430_19455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19424 === (15))){
var inst_19413 = (state_19423[(2)]);
var state_19423__$1 = state_19423;
var statearr_19431_19456 = state_19423__$1;
(statearr_19431_19456[(2)] = inst_19413);

(statearr_19431_19456[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19424 === (13))){
var state_19423__$1 = state_19423;
var statearr_19432_19457 = state_19423__$1;
(statearr_19432_19457[(2)] = null);

(statearr_19432_19457[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19424 === (6))){
var inst_19388 = (state_19423[(8)]);
var inst_19409 = (inst_19388 > (0));
var state_19423__$1 = state_19423;
if(cljs.core.truth_(inst_19409)){
var statearr_19433_19458 = state_19423__$1;
(statearr_19433_19458[(1)] = (12));

} else {
var statearr_19434_19459 = state_19423__$1;
(statearr_19434_19459[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19424 === (3))){
var inst_19421 = (state_19423[(2)]);
var state_19423__$1 = state_19423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19423__$1,inst_19421);
} else {
if((state_val_19424 === (12))){
var inst_19387 = (state_19423[(7)]);
var inst_19411 = cljs.core.vec.call(null,inst_19387);
var state_19423__$1 = state_19423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19423__$1,(15),out,inst_19411);
} else {
if((state_val_19424 === (2))){
var state_19423__$1 = state_19423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19423__$1,(4),ch);
} else {
if((state_val_19424 === (11))){
var inst_19403 = (state_19423[(2)]);
var inst_19404 = (new Array(n));
var inst_19387 = inst_19404;
var inst_19388 = (0);
var state_19423__$1 = (function (){var statearr_19435 = state_19423;
(statearr_19435[(7)] = inst_19387);

(statearr_19435[(10)] = inst_19403);

(statearr_19435[(8)] = inst_19388);

return statearr_19435;
})();
var statearr_19436_19460 = state_19423__$1;
(statearr_19436_19460[(2)] = null);

(statearr_19436_19460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19424 === (9))){
var inst_19387 = (state_19423[(7)]);
var inst_19401 = cljs.core.vec.call(null,inst_19387);
var state_19423__$1 = state_19423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19423__$1,(11),out,inst_19401);
} else {
if((state_val_19424 === (5))){
var inst_19387 = (state_19423[(7)]);
var inst_19391 = (state_19423[(9)]);
var inst_19388 = (state_19423[(8)]);
var inst_19396 = (state_19423[(11)]);
var inst_19395 = (inst_19387[inst_19388] = inst_19391);
var inst_19396__$1 = (inst_19388 + (1));
var inst_19397 = (inst_19396__$1 < n);
var state_19423__$1 = (function (){var statearr_19437 = state_19423;
(statearr_19437[(12)] = inst_19395);

(statearr_19437[(11)] = inst_19396__$1);

return statearr_19437;
})();
if(cljs.core.truth_(inst_19397)){
var statearr_19438_19461 = state_19423__$1;
(statearr_19438_19461[(1)] = (8));

} else {
var statearr_19439_19462 = state_19423__$1;
(statearr_19439_19462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19424 === (14))){
var inst_19416 = (state_19423[(2)]);
var inst_19417 = cljs.core.async.close_BANG_.call(null,out);
var state_19423__$1 = (function (){var statearr_19441 = state_19423;
(statearr_19441[(13)] = inst_19416);

return statearr_19441;
})();
var statearr_19442_19463 = state_19423__$1;
(statearr_19442_19463[(2)] = inst_19417);

(statearr_19442_19463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19424 === (10))){
var inst_19407 = (state_19423[(2)]);
var state_19423__$1 = state_19423;
var statearr_19443_19464 = state_19423__$1;
(statearr_19443_19464[(2)] = inst_19407);

(statearr_19443_19464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19424 === (8))){
var inst_19387 = (state_19423[(7)]);
var inst_19396 = (state_19423[(11)]);
var tmp19440 = inst_19387;
var inst_19387__$1 = tmp19440;
var inst_19388 = inst_19396;
var state_19423__$1 = (function (){var statearr_19444 = state_19423;
(statearr_19444[(7)] = inst_19387__$1);

(statearr_19444[(8)] = inst_19388);

return statearr_19444;
})();
var statearr_19445_19465 = state_19423__$1;
(statearr_19445_19465[(2)] = null);

(statearr_19445_19465[(1)] = (2));


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
});})(c__15771__auto___19451,out))
;
return ((function (switch__15604__auto__,c__15771__auto___19451,out){
return (function() {
var cljs$core$async$state_machine__15605__auto__ = null;
var cljs$core$async$state_machine__15605__auto____0 = (function (){
var statearr_19446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19446[(0)] = cljs$core$async$state_machine__15605__auto__);

(statearr_19446[(1)] = (1));

return statearr_19446;
});
var cljs$core$async$state_machine__15605__auto____1 = (function (state_19423){
while(true){
var ret_value__15606__auto__ = (function (){try{while(true){
var result__15607__auto__ = switch__15604__auto__.call(null,state_19423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15607__auto__;
}
break;
}
}catch (e19447){if((e19447 instanceof Object)){
var ex__15608__auto__ = e19447;
var statearr_19448_19466 = state_19423;
(statearr_19448_19466[(5)] = ex__15608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19467 = state_19423;
state_19423 = G__19467;
continue;
} else {
return ret_value__15606__auto__;
}
break;
}
});
cljs$core$async$state_machine__15605__auto__ = function(state_19423){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15605__auto____1.call(this,state_19423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15605__auto____0;
cljs$core$async$state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15605__auto____1;
return cljs$core$async$state_machine__15605__auto__;
})()
;})(switch__15604__auto__,c__15771__auto___19451,out))
})();
var state__15773__auto__ = (function (){var statearr_19449 = f__15772__auto__.call(null);
(statearr_19449[(6)] = c__15771__auto___19451);

return statearr_19449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15773__auto__);
});})(c__15771__auto___19451,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19469 = arguments.length;
switch (G__19469) {
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
var c__15771__auto___19539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15771__auto___19539,out){
return (function (){
var f__15772__auto__ = (function (){var switch__15604__auto__ = ((function (c__15771__auto___19539,out){
return (function (state_19511){
var state_val_19512 = (state_19511[(1)]);
if((state_val_19512 === (7))){
var inst_19507 = (state_19511[(2)]);
var state_19511__$1 = state_19511;
var statearr_19513_19540 = state_19511__$1;
(statearr_19513_19540[(2)] = inst_19507);

(statearr_19513_19540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19512 === (1))){
var inst_19470 = [];
var inst_19471 = inst_19470;
var inst_19472 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19511__$1 = (function (){var statearr_19514 = state_19511;
(statearr_19514[(7)] = inst_19471);

(statearr_19514[(8)] = inst_19472);

return statearr_19514;
})();
var statearr_19515_19541 = state_19511__$1;
(statearr_19515_19541[(2)] = null);

(statearr_19515_19541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19512 === (4))){
var inst_19475 = (state_19511[(9)]);
var inst_19475__$1 = (state_19511[(2)]);
var inst_19476 = (inst_19475__$1 == null);
var inst_19477 = cljs.core.not.call(null,inst_19476);
var state_19511__$1 = (function (){var statearr_19516 = state_19511;
(statearr_19516[(9)] = inst_19475__$1);

return statearr_19516;
})();
if(inst_19477){
var statearr_19517_19542 = state_19511__$1;
(statearr_19517_19542[(1)] = (5));

} else {
var statearr_19518_19543 = state_19511__$1;
(statearr_19518_19543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19512 === (15))){
var inst_19501 = (state_19511[(2)]);
var state_19511__$1 = state_19511;
var statearr_19519_19544 = state_19511__$1;
(statearr_19519_19544[(2)] = inst_19501);

(statearr_19519_19544[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19512 === (13))){
var state_19511__$1 = state_19511;
var statearr_19520_19545 = state_19511__$1;
(statearr_19520_19545[(2)] = null);

(statearr_19520_19545[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19512 === (6))){
var inst_19471 = (state_19511[(7)]);
var inst_19496 = inst_19471.length;
var inst_19497 = (inst_19496 > (0));
var state_19511__$1 = state_19511;
if(cljs.core.truth_(inst_19497)){
var statearr_19521_19546 = state_19511__$1;
(statearr_19521_19546[(1)] = (12));

} else {
var statearr_19522_19547 = state_19511__$1;
(statearr_19522_19547[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19512 === (3))){
var inst_19509 = (state_19511[(2)]);
var state_19511__$1 = state_19511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19511__$1,inst_19509);
} else {
if((state_val_19512 === (12))){
var inst_19471 = (state_19511[(7)]);
var inst_19499 = cljs.core.vec.call(null,inst_19471);
var state_19511__$1 = state_19511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19511__$1,(15),out,inst_19499);
} else {
if((state_val_19512 === (2))){
var state_19511__$1 = state_19511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19511__$1,(4),ch);
} else {
if((state_val_19512 === (11))){
var inst_19475 = (state_19511[(9)]);
var inst_19479 = (state_19511[(10)]);
var inst_19489 = (state_19511[(2)]);
var inst_19490 = [];
var inst_19491 = inst_19490.push(inst_19475);
var inst_19471 = inst_19490;
var inst_19472 = inst_19479;
var state_19511__$1 = (function (){var statearr_19523 = state_19511;
(statearr_19523[(11)] = inst_19489);

(statearr_19523[(7)] = inst_19471);

(statearr_19523[(12)] = inst_19491);

(statearr_19523[(8)] = inst_19472);

return statearr_19523;
})();
var statearr_19524_19548 = state_19511__$1;
(statearr_19524_19548[(2)] = null);

(statearr_19524_19548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19512 === (9))){
var inst_19471 = (state_19511[(7)]);
var inst_19487 = cljs.core.vec.call(null,inst_19471);
var state_19511__$1 = state_19511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19511__$1,(11),out,inst_19487);
} else {
if((state_val_19512 === (5))){
var inst_19475 = (state_19511[(9)]);
var inst_19479 = (state_19511[(10)]);
var inst_19472 = (state_19511[(8)]);
var inst_19479__$1 = f.call(null,inst_19475);
var inst_19480 = cljs.core._EQ_.call(null,inst_19479__$1,inst_19472);
var inst_19481 = cljs.core.keyword_identical_QMARK_.call(null,inst_19472,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19482 = ((inst_19480) || (inst_19481));
var state_19511__$1 = (function (){var statearr_19525 = state_19511;
(statearr_19525[(10)] = inst_19479__$1);

return statearr_19525;
})();
if(cljs.core.truth_(inst_19482)){
var statearr_19526_19549 = state_19511__$1;
(statearr_19526_19549[(1)] = (8));

} else {
var statearr_19527_19550 = state_19511__$1;
(statearr_19527_19550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19512 === (14))){
var inst_19504 = (state_19511[(2)]);
var inst_19505 = cljs.core.async.close_BANG_.call(null,out);
var state_19511__$1 = (function (){var statearr_19529 = state_19511;
(statearr_19529[(13)] = inst_19504);

return statearr_19529;
})();
var statearr_19530_19551 = state_19511__$1;
(statearr_19530_19551[(2)] = inst_19505);

(statearr_19530_19551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19512 === (10))){
var inst_19494 = (state_19511[(2)]);
var state_19511__$1 = state_19511;
var statearr_19531_19552 = state_19511__$1;
(statearr_19531_19552[(2)] = inst_19494);

(statearr_19531_19552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19512 === (8))){
var inst_19475 = (state_19511[(9)]);
var inst_19471 = (state_19511[(7)]);
var inst_19479 = (state_19511[(10)]);
var inst_19484 = inst_19471.push(inst_19475);
var tmp19528 = inst_19471;
var inst_19471__$1 = tmp19528;
var inst_19472 = inst_19479;
var state_19511__$1 = (function (){var statearr_19532 = state_19511;
(statearr_19532[(7)] = inst_19471__$1);

(statearr_19532[(8)] = inst_19472);

(statearr_19532[(14)] = inst_19484);

return statearr_19532;
})();
var statearr_19533_19553 = state_19511__$1;
(statearr_19533_19553[(2)] = null);

(statearr_19533_19553[(1)] = (2));


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
});})(c__15771__auto___19539,out))
;
return ((function (switch__15604__auto__,c__15771__auto___19539,out){
return (function() {
var cljs$core$async$state_machine__15605__auto__ = null;
var cljs$core$async$state_machine__15605__auto____0 = (function (){
var statearr_19534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19534[(0)] = cljs$core$async$state_machine__15605__auto__);

(statearr_19534[(1)] = (1));

return statearr_19534;
});
var cljs$core$async$state_machine__15605__auto____1 = (function (state_19511){
while(true){
var ret_value__15606__auto__ = (function (){try{while(true){
var result__15607__auto__ = switch__15604__auto__.call(null,state_19511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15607__auto__;
}
break;
}
}catch (e19535){if((e19535 instanceof Object)){
var ex__15608__auto__ = e19535;
var statearr_19536_19554 = state_19511;
(statearr_19536_19554[(5)] = ex__15608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19555 = state_19511;
state_19511 = G__19555;
continue;
} else {
return ret_value__15606__auto__;
}
break;
}
});
cljs$core$async$state_machine__15605__auto__ = function(state_19511){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15605__auto____1.call(this,state_19511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15605__auto____0;
cljs$core$async$state_machine__15605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15605__auto____1;
return cljs$core$async$state_machine__15605__auto__;
})()
;})(switch__15604__auto__,c__15771__auto___19539,out))
})();
var state__15773__auto__ = (function (){var statearr_19537 = f__15772__auto__.call(null);
(statearr_19537[(6)] = c__15771__auto___19539);

return statearr_19537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15773__auto__);
});})(c__15771__auto___19539,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
