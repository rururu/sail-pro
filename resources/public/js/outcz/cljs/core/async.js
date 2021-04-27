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
var G__17991 = arguments.length;
switch (G__17991) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17992 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17992 = (function (f,blockable,meta17993){
this.f = f;
this.blockable = blockable;
this.meta17993 = meta17993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17994,meta17993__$1){
var self__ = this;
var _17994__$1 = this;
return (new cljs.core.async.t_cljs$core$async17992(self__.f,self__.blockable,meta17993__$1));
});

cljs.core.async.t_cljs$core$async17992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17994){
var self__ = this;
var _17994__$1 = this;
return self__.meta17993;
});

cljs.core.async.t_cljs$core$async17992.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17992.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17992.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17992.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17992.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17993","meta17993",1037160155,null)], null);
});

cljs.core.async.t_cljs$core$async17992.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17992.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17992";

cljs.core.async.t_cljs$core$async17992.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async17992");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17992.
 */
cljs.core.async.__GT_t_cljs$core$async17992 = (function cljs$core$async$__GT_t_cljs$core$async17992(f__$1,blockable__$1,meta17993){
return (new cljs.core.async.t_cljs$core$async17992(f__$1,blockable__$1,meta17993));
});

}

return (new cljs.core.async.t_cljs$core$async17992(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17998 = arguments.length;
switch (G__17998) {
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
var G__18001 = arguments.length;
switch (G__18001) {
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
var G__18004 = arguments.length;
switch (G__18004) {
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
var val_18006 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18006);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18006,ret){
return (function (){
return fn1.call(null,val_18006);
});})(val_18006,ret))
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
var G__18008 = arguments.length;
switch (G__18008) {
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
var n__4518__auto___18010 = n;
var x_18011 = (0);
while(true){
if((x_18011 < n__4518__auto___18010)){
(a[x_18011] = (0));

var G__18012 = (x_18011 + (1));
x_18011 = G__18012;
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

var G__18013 = (i + (1));
i = G__18013;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18014 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18014 = (function (flag,meta18015){
this.flag = flag;
this.meta18015 = meta18015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18016,meta18015__$1){
var self__ = this;
var _18016__$1 = this;
return (new cljs.core.async.t_cljs$core$async18014(self__.flag,meta18015__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async18014.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18016){
var self__ = this;
var _18016__$1 = this;
return self__.meta18015;
});})(flag))
;

cljs.core.async.t_cljs$core$async18014.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18014.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async18014.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18014.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18014.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18015","meta18015",2041925687,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async18014.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18014";

cljs.core.async.t_cljs$core$async18014.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async18014");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18014.
 */
cljs.core.async.__GT_t_cljs$core$async18014 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18014(flag__$1,meta18015){
return (new cljs.core.async.t_cljs$core$async18014(flag__$1,meta18015));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async18014(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18017 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18017 = (function (flag,cb,meta18018){
this.flag = flag;
this.cb = cb;
this.meta18018 = meta18018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18019,meta18018__$1){
var self__ = this;
var _18019__$1 = this;
return (new cljs.core.async.t_cljs$core$async18017(self__.flag,self__.cb,meta18018__$1));
});

cljs.core.async.t_cljs$core$async18017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18019){
var self__ = this;
var _18019__$1 = this;
return self__.meta18018;
});

cljs.core.async.t_cljs$core$async18017.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18017.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async18017.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18017.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async18017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18018","meta18018",-647486821,null)], null);
});

cljs.core.async.t_cljs$core$async18017.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18017.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18017";

cljs.core.async.t_cljs$core$async18017.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async18017");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18017.
 */
cljs.core.async.__GT_t_cljs$core$async18017 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18017(flag__$1,cb__$1,meta18018){
return (new cljs.core.async.t_cljs$core$async18017(flag__$1,cb__$1,meta18018));
});

}

return (new cljs.core.async.t_cljs$core$async18017(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__18020_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18020_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18021_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18021_SHARP_,port], null));
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
var G__18022 = (i + (1));
i = G__18022;
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
var len__4641__auto___18028 = arguments.length;
var i__4642__auto___18029 = (0);
while(true){
if((i__4642__auto___18029 < len__4641__auto___18028)){
args__4647__auto__.push((arguments[i__4642__auto___18029]));

var G__18030 = (i__4642__auto___18029 + (1));
i__4642__auto___18029 = G__18030;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18025){
var map__18026 = p__18025;
var map__18026__$1 = (((((!((map__18026 == null))))?(((((map__18026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18026):map__18026);
var opts = map__18026__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18023){
var G__18024 = cljs.core.first.call(null,seq18023);
var seq18023__$1 = cljs.core.next.call(null,seq18023);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18024,seq18023__$1);
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
var G__18032 = arguments.length;
switch (G__18032) {
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
var c__16067__auto___18078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16067__auto___18078){
return (function (){
var f__16068__auto__ = (function (){var switch__15900__auto__ = ((function (c__16067__auto___18078){
return (function (state_18056){
var state_val_18057 = (state_18056[(1)]);
if((state_val_18057 === (7))){
var inst_18052 = (state_18056[(2)]);
var state_18056__$1 = state_18056;
var statearr_18058_18079 = state_18056__$1;
(statearr_18058_18079[(2)] = inst_18052);

(statearr_18058_18079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18057 === (1))){
var state_18056__$1 = state_18056;
var statearr_18059_18080 = state_18056__$1;
(statearr_18059_18080[(2)] = null);

(statearr_18059_18080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18057 === (4))){
var inst_18035 = (state_18056[(7)]);
var inst_18035__$1 = (state_18056[(2)]);
var inst_18036 = (inst_18035__$1 == null);
var state_18056__$1 = (function (){var statearr_18060 = state_18056;
(statearr_18060[(7)] = inst_18035__$1);

return statearr_18060;
})();
if(cljs.core.truth_(inst_18036)){
var statearr_18061_18081 = state_18056__$1;
(statearr_18061_18081[(1)] = (5));

} else {
var statearr_18062_18082 = state_18056__$1;
(statearr_18062_18082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18057 === (13))){
var state_18056__$1 = state_18056;
var statearr_18063_18083 = state_18056__$1;
(statearr_18063_18083[(2)] = null);

(statearr_18063_18083[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18057 === (6))){
var inst_18035 = (state_18056[(7)]);
var state_18056__$1 = state_18056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18056__$1,(11),to,inst_18035);
} else {
if((state_val_18057 === (3))){
var inst_18054 = (state_18056[(2)]);
var state_18056__$1 = state_18056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18056__$1,inst_18054);
} else {
if((state_val_18057 === (12))){
var state_18056__$1 = state_18056;
var statearr_18064_18084 = state_18056__$1;
(statearr_18064_18084[(2)] = null);

(statearr_18064_18084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18057 === (2))){
var state_18056__$1 = state_18056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18056__$1,(4),from);
} else {
if((state_val_18057 === (11))){
var inst_18045 = (state_18056[(2)]);
var state_18056__$1 = state_18056;
if(cljs.core.truth_(inst_18045)){
var statearr_18065_18085 = state_18056__$1;
(statearr_18065_18085[(1)] = (12));

} else {
var statearr_18066_18086 = state_18056__$1;
(statearr_18066_18086[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18057 === (9))){
var state_18056__$1 = state_18056;
var statearr_18067_18087 = state_18056__$1;
(statearr_18067_18087[(2)] = null);

(statearr_18067_18087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18057 === (5))){
var state_18056__$1 = state_18056;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18068_18088 = state_18056__$1;
(statearr_18068_18088[(1)] = (8));

} else {
var statearr_18069_18089 = state_18056__$1;
(statearr_18069_18089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18057 === (14))){
var inst_18050 = (state_18056[(2)]);
var state_18056__$1 = state_18056;
var statearr_18070_18090 = state_18056__$1;
(statearr_18070_18090[(2)] = inst_18050);

(statearr_18070_18090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18057 === (10))){
var inst_18042 = (state_18056[(2)]);
var state_18056__$1 = state_18056;
var statearr_18071_18091 = state_18056__$1;
(statearr_18071_18091[(2)] = inst_18042);

(statearr_18071_18091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18057 === (8))){
var inst_18039 = cljs.core.async.close_BANG_.call(null,to);
var state_18056__$1 = state_18056;
var statearr_18072_18092 = state_18056__$1;
(statearr_18072_18092[(2)] = inst_18039);

(statearr_18072_18092[(1)] = (10));


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
});})(c__16067__auto___18078))
;
return ((function (switch__15900__auto__,c__16067__auto___18078){
return (function() {
var cljs$core$async$state_machine__15901__auto__ = null;
var cljs$core$async$state_machine__15901__auto____0 = (function (){
var statearr_18073 = [null,null,null,null,null,null,null,null];
(statearr_18073[(0)] = cljs$core$async$state_machine__15901__auto__);

(statearr_18073[(1)] = (1));

return statearr_18073;
});
var cljs$core$async$state_machine__15901__auto____1 = (function (state_18056){
while(true){
var ret_value__15902__auto__ = (function (){try{while(true){
var result__15903__auto__ = switch__15900__auto__.call(null,state_18056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15903__auto__;
}
break;
}
}catch (e18074){if((e18074 instanceof Object)){
var ex__15904__auto__ = e18074;
var statearr_18075_18093 = state_18056;
(statearr_18075_18093[(5)] = ex__15904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18094 = state_18056;
state_18056 = G__18094;
continue;
} else {
return ret_value__15902__auto__;
}
break;
}
});
cljs$core$async$state_machine__15901__auto__ = function(state_18056){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15901__auto____1.call(this,state_18056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15901__auto____0;
cljs$core$async$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15901__auto____1;
return cljs$core$async$state_machine__15901__auto__;
})()
;})(switch__15900__auto__,c__16067__auto___18078))
})();
var state__16069__auto__ = (function (){var statearr_18076 = f__16068__auto__.call(null);
(statearr_18076[(6)] = c__16067__auto___18078);

return statearr_18076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16069__auto__);
});})(c__16067__auto___18078))
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
return (function (p__18095){
var vec__18096 = p__18095;
var v = cljs.core.nth.call(null,vec__18096,(0),null);
var p = cljs.core.nth.call(null,vec__18096,(1),null);
var job = vec__18096;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__16067__auto___18267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16067__auto___18267,res,vec__18096,v,p,job,jobs,results){
return (function (){
var f__16068__auto__ = (function (){var switch__15900__auto__ = ((function (c__16067__auto___18267,res,vec__18096,v,p,job,jobs,results){
return (function (state_18103){
var state_val_18104 = (state_18103[(1)]);
if((state_val_18104 === (1))){
var state_18103__$1 = state_18103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18103__$1,(2),res,v);
} else {
if((state_val_18104 === (2))){
var inst_18100 = (state_18103[(2)]);
var inst_18101 = cljs.core.async.close_BANG_.call(null,res);
var state_18103__$1 = (function (){var statearr_18105 = state_18103;
(statearr_18105[(7)] = inst_18100);

return statearr_18105;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18103__$1,inst_18101);
} else {
return null;
}
}
});})(c__16067__auto___18267,res,vec__18096,v,p,job,jobs,results))
;
return ((function (switch__15900__auto__,c__16067__auto___18267,res,vec__18096,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____0 = (function (){
var statearr_18106 = [null,null,null,null,null,null,null,null];
(statearr_18106[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__);

(statearr_18106[(1)] = (1));

return statearr_18106;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____1 = (function (state_18103){
while(true){
var ret_value__15902__auto__ = (function (){try{while(true){
var result__15903__auto__ = switch__15900__auto__.call(null,state_18103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15903__auto__;
}
break;
}
}catch (e18107){if((e18107 instanceof Object)){
var ex__15904__auto__ = e18107;
var statearr_18108_18268 = state_18103;
(statearr_18108_18268[(5)] = ex__15904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18269 = state_18103;
state_18103 = G__18269;
continue;
} else {
return ret_value__15902__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__ = function(state_18103){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____1.call(this,state_18103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__;
})()
;})(switch__15900__auto__,c__16067__auto___18267,res,vec__18096,v,p,job,jobs,results))
})();
var state__16069__auto__ = (function (){var statearr_18109 = f__16068__auto__.call(null);
(statearr_18109[(6)] = c__16067__auto___18267);

return statearr_18109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16069__auto__);
});})(c__16067__auto___18267,res,vec__18096,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18110){
var vec__18111 = p__18110;
var v = cljs.core.nth.call(null,vec__18111,(0),null);
var p = cljs.core.nth.call(null,vec__18111,(1),null);
var job = vec__18111;
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
var n__4518__auto___18270 = n;
var __18271 = (0);
while(true){
if((__18271 < n__4518__auto___18270)){
var G__18114_18272 = type;
var G__18114_18273__$1 = (((G__18114_18272 instanceof cljs.core.Keyword))?G__18114_18272.fqn:null);
switch (G__18114_18273__$1) {
case "compute":
var c__16067__auto___18275 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18271,c__16067__auto___18275,G__18114_18272,G__18114_18273__$1,n__4518__auto___18270,jobs,results,process,async){
return (function (){
var f__16068__auto__ = (function (){var switch__15900__auto__ = ((function (__18271,c__16067__auto___18275,G__18114_18272,G__18114_18273__$1,n__4518__auto___18270,jobs,results,process,async){
return (function (state_18127){
var state_val_18128 = (state_18127[(1)]);
if((state_val_18128 === (1))){
var state_18127__$1 = state_18127;
var statearr_18129_18276 = state_18127__$1;
(statearr_18129_18276[(2)] = null);

(statearr_18129_18276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18128 === (2))){
var state_18127__$1 = state_18127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18127__$1,(4),jobs);
} else {
if((state_val_18128 === (3))){
var inst_18125 = (state_18127[(2)]);
var state_18127__$1 = state_18127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18127__$1,inst_18125);
} else {
if((state_val_18128 === (4))){
var inst_18117 = (state_18127[(2)]);
var inst_18118 = process.call(null,inst_18117);
var state_18127__$1 = state_18127;
if(cljs.core.truth_(inst_18118)){
var statearr_18130_18277 = state_18127__$1;
(statearr_18130_18277[(1)] = (5));

} else {
var statearr_18131_18278 = state_18127__$1;
(statearr_18131_18278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18128 === (5))){
var state_18127__$1 = state_18127;
var statearr_18132_18279 = state_18127__$1;
(statearr_18132_18279[(2)] = null);

(statearr_18132_18279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18128 === (6))){
var state_18127__$1 = state_18127;
var statearr_18133_18280 = state_18127__$1;
(statearr_18133_18280[(2)] = null);

(statearr_18133_18280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18128 === (7))){
var inst_18123 = (state_18127[(2)]);
var state_18127__$1 = state_18127;
var statearr_18134_18281 = state_18127__$1;
(statearr_18134_18281[(2)] = inst_18123);

(statearr_18134_18281[(1)] = (3));


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
});})(__18271,c__16067__auto___18275,G__18114_18272,G__18114_18273__$1,n__4518__auto___18270,jobs,results,process,async))
;
return ((function (__18271,switch__15900__auto__,c__16067__auto___18275,G__18114_18272,G__18114_18273__$1,n__4518__auto___18270,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____0 = (function (){
var statearr_18135 = [null,null,null,null,null,null,null];
(statearr_18135[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__);

(statearr_18135[(1)] = (1));

return statearr_18135;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____1 = (function (state_18127){
while(true){
var ret_value__15902__auto__ = (function (){try{while(true){
var result__15903__auto__ = switch__15900__auto__.call(null,state_18127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15903__auto__;
}
break;
}
}catch (e18136){if((e18136 instanceof Object)){
var ex__15904__auto__ = e18136;
var statearr_18137_18282 = state_18127;
(statearr_18137_18282[(5)] = ex__15904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18283 = state_18127;
state_18127 = G__18283;
continue;
} else {
return ret_value__15902__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__ = function(state_18127){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____1.call(this,state_18127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__;
})()
;})(__18271,switch__15900__auto__,c__16067__auto___18275,G__18114_18272,G__18114_18273__$1,n__4518__auto___18270,jobs,results,process,async))
})();
var state__16069__auto__ = (function (){var statearr_18138 = f__16068__auto__.call(null);
(statearr_18138[(6)] = c__16067__auto___18275);

return statearr_18138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16069__auto__);
});})(__18271,c__16067__auto___18275,G__18114_18272,G__18114_18273__$1,n__4518__auto___18270,jobs,results,process,async))
);


break;
case "async":
var c__16067__auto___18284 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18271,c__16067__auto___18284,G__18114_18272,G__18114_18273__$1,n__4518__auto___18270,jobs,results,process,async){
return (function (){
var f__16068__auto__ = (function (){var switch__15900__auto__ = ((function (__18271,c__16067__auto___18284,G__18114_18272,G__18114_18273__$1,n__4518__auto___18270,jobs,results,process,async){
return (function (state_18151){
var state_val_18152 = (state_18151[(1)]);
if((state_val_18152 === (1))){
var state_18151__$1 = state_18151;
var statearr_18153_18285 = state_18151__$1;
(statearr_18153_18285[(2)] = null);

(statearr_18153_18285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18152 === (2))){
var state_18151__$1 = state_18151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18151__$1,(4),jobs);
} else {
if((state_val_18152 === (3))){
var inst_18149 = (state_18151[(2)]);
var state_18151__$1 = state_18151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18151__$1,inst_18149);
} else {
if((state_val_18152 === (4))){
var inst_18141 = (state_18151[(2)]);
var inst_18142 = async.call(null,inst_18141);
var state_18151__$1 = state_18151;
if(cljs.core.truth_(inst_18142)){
var statearr_18154_18286 = state_18151__$1;
(statearr_18154_18286[(1)] = (5));

} else {
var statearr_18155_18287 = state_18151__$1;
(statearr_18155_18287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18152 === (5))){
var state_18151__$1 = state_18151;
var statearr_18156_18288 = state_18151__$1;
(statearr_18156_18288[(2)] = null);

(statearr_18156_18288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18152 === (6))){
var state_18151__$1 = state_18151;
var statearr_18157_18289 = state_18151__$1;
(statearr_18157_18289[(2)] = null);

(statearr_18157_18289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18152 === (7))){
var inst_18147 = (state_18151[(2)]);
var state_18151__$1 = state_18151;
var statearr_18158_18290 = state_18151__$1;
(statearr_18158_18290[(2)] = inst_18147);

(statearr_18158_18290[(1)] = (3));


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
});})(__18271,c__16067__auto___18284,G__18114_18272,G__18114_18273__$1,n__4518__auto___18270,jobs,results,process,async))
;
return ((function (__18271,switch__15900__auto__,c__16067__auto___18284,G__18114_18272,G__18114_18273__$1,n__4518__auto___18270,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____0 = (function (){
var statearr_18159 = [null,null,null,null,null,null,null];
(statearr_18159[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__);

(statearr_18159[(1)] = (1));

return statearr_18159;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____1 = (function (state_18151){
while(true){
var ret_value__15902__auto__ = (function (){try{while(true){
var result__15903__auto__ = switch__15900__auto__.call(null,state_18151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15903__auto__;
}
break;
}
}catch (e18160){if((e18160 instanceof Object)){
var ex__15904__auto__ = e18160;
var statearr_18161_18291 = state_18151;
(statearr_18161_18291[(5)] = ex__15904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18292 = state_18151;
state_18151 = G__18292;
continue;
} else {
return ret_value__15902__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__ = function(state_18151){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____1.call(this,state_18151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__;
})()
;})(__18271,switch__15900__auto__,c__16067__auto___18284,G__18114_18272,G__18114_18273__$1,n__4518__auto___18270,jobs,results,process,async))
})();
var state__16069__auto__ = (function (){var statearr_18162 = f__16068__auto__.call(null);
(statearr_18162[(6)] = c__16067__auto___18284);

return statearr_18162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16069__auto__);
});})(__18271,c__16067__auto___18284,G__18114_18272,G__18114_18273__$1,n__4518__auto___18270,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18114_18273__$1)].join('')));

}

var G__18293 = (__18271 + (1));
__18271 = G__18293;
continue;
} else {
}
break;
}

var c__16067__auto___18294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16067__auto___18294,jobs,results,process,async){
return (function (){
var f__16068__auto__ = (function (){var switch__15900__auto__ = ((function (c__16067__auto___18294,jobs,results,process,async){
return (function (state_18184){
var state_val_18185 = (state_18184[(1)]);
if((state_val_18185 === (7))){
var inst_18180 = (state_18184[(2)]);
var state_18184__$1 = state_18184;
var statearr_18186_18295 = state_18184__$1;
(statearr_18186_18295[(2)] = inst_18180);

(statearr_18186_18295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18185 === (1))){
var state_18184__$1 = state_18184;
var statearr_18187_18296 = state_18184__$1;
(statearr_18187_18296[(2)] = null);

(statearr_18187_18296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18185 === (4))){
var inst_18165 = (state_18184[(7)]);
var inst_18165__$1 = (state_18184[(2)]);
var inst_18166 = (inst_18165__$1 == null);
var state_18184__$1 = (function (){var statearr_18188 = state_18184;
(statearr_18188[(7)] = inst_18165__$1);

return statearr_18188;
})();
if(cljs.core.truth_(inst_18166)){
var statearr_18189_18297 = state_18184__$1;
(statearr_18189_18297[(1)] = (5));

} else {
var statearr_18190_18298 = state_18184__$1;
(statearr_18190_18298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18185 === (6))){
var inst_18165 = (state_18184[(7)]);
var inst_18170 = (state_18184[(8)]);
var inst_18170__$1 = cljs.core.async.chan.call(null,(1));
var inst_18171 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18172 = [inst_18165,inst_18170__$1];
var inst_18173 = (new cljs.core.PersistentVector(null,2,(5),inst_18171,inst_18172,null));
var state_18184__$1 = (function (){var statearr_18191 = state_18184;
(statearr_18191[(8)] = inst_18170__$1);

return statearr_18191;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18184__$1,(8),jobs,inst_18173);
} else {
if((state_val_18185 === (3))){
var inst_18182 = (state_18184[(2)]);
var state_18184__$1 = state_18184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18184__$1,inst_18182);
} else {
if((state_val_18185 === (2))){
var state_18184__$1 = state_18184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18184__$1,(4),from);
} else {
if((state_val_18185 === (9))){
var inst_18177 = (state_18184[(2)]);
var state_18184__$1 = (function (){var statearr_18192 = state_18184;
(statearr_18192[(9)] = inst_18177);

return statearr_18192;
})();
var statearr_18193_18299 = state_18184__$1;
(statearr_18193_18299[(2)] = null);

(statearr_18193_18299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18185 === (5))){
var inst_18168 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18184__$1 = state_18184;
var statearr_18194_18300 = state_18184__$1;
(statearr_18194_18300[(2)] = inst_18168);

(statearr_18194_18300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18185 === (8))){
var inst_18170 = (state_18184[(8)]);
var inst_18175 = (state_18184[(2)]);
var state_18184__$1 = (function (){var statearr_18195 = state_18184;
(statearr_18195[(10)] = inst_18175);

return statearr_18195;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18184__$1,(9),results,inst_18170);
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
});})(c__16067__auto___18294,jobs,results,process,async))
;
return ((function (switch__15900__auto__,c__16067__auto___18294,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____0 = (function (){
var statearr_18196 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18196[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__);

(statearr_18196[(1)] = (1));

return statearr_18196;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____1 = (function (state_18184){
while(true){
var ret_value__15902__auto__ = (function (){try{while(true){
var result__15903__auto__ = switch__15900__auto__.call(null,state_18184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15903__auto__;
}
break;
}
}catch (e18197){if((e18197 instanceof Object)){
var ex__15904__auto__ = e18197;
var statearr_18198_18301 = state_18184;
(statearr_18198_18301[(5)] = ex__15904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18302 = state_18184;
state_18184 = G__18302;
continue;
} else {
return ret_value__15902__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__ = function(state_18184){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____1.call(this,state_18184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__;
})()
;})(switch__15900__auto__,c__16067__auto___18294,jobs,results,process,async))
})();
var state__16069__auto__ = (function (){var statearr_18199 = f__16068__auto__.call(null);
(statearr_18199[(6)] = c__16067__auto___18294);

return statearr_18199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16069__auto__);
});})(c__16067__auto___18294,jobs,results,process,async))
);


var c__16067__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16067__auto__,jobs,results,process,async){
return (function (){
var f__16068__auto__ = (function (){var switch__15900__auto__ = ((function (c__16067__auto__,jobs,results,process,async){
return (function (state_18237){
var state_val_18238 = (state_18237[(1)]);
if((state_val_18238 === (7))){
var inst_18233 = (state_18237[(2)]);
var state_18237__$1 = state_18237;
var statearr_18239_18303 = state_18237__$1;
(statearr_18239_18303[(2)] = inst_18233);

(statearr_18239_18303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18238 === (20))){
var state_18237__$1 = state_18237;
var statearr_18240_18304 = state_18237__$1;
(statearr_18240_18304[(2)] = null);

(statearr_18240_18304[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18238 === (1))){
var state_18237__$1 = state_18237;
var statearr_18241_18305 = state_18237__$1;
(statearr_18241_18305[(2)] = null);

(statearr_18241_18305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18238 === (4))){
var inst_18202 = (state_18237[(7)]);
var inst_18202__$1 = (state_18237[(2)]);
var inst_18203 = (inst_18202__$1 == null);
var state_18237__$1 = (function (){var statearr_18242 = state_18237;
(statearr_18242[(7)] = inst_18202__$1);

return statearr_18242;
})();
if(cljs.core.truth_(inst_18203)){
var statearr_18243_18306 = state_18237__$1;
(statearr_18243_18306[(1)] = (5));

} else {
var statearr_18244_18307 = state_18237__$1;
(statearr_18244_18307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18238 === (15))){
var inst_18215 = (state_18237[(8)]);
var state_18237__$1 = state_18237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18237__$1,(18),to,inst_18215);
} else {
if((state_val_18238 === (21))){
var inst_18228 = (state_18237[(2)]);
var state_18237__$1 = state_18237;
var statearr_18245_18308 = state_18237__$1;
(statearr_18245_18308[(2)] = inst_18228);

(statearr_18245_18308[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18238 === (13))){
var inst_18230 = (state_18237[(2)]);
var state_18237__$1 = (function (){var statearr_18246 = state_18237;
(statearr_18246[(9)] = inst_18230);

return statearr_18246;
})();
var statearr_18247_18309 = state_18237__$1;
(statearr_18247_18309[(2)] = null);

(statearr_18247_18309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18238 === (6))){
var inst_18202 = (state_18237[(7)]);
var state_18237__$1 = state_18237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18237__$1,(11),inst_18202);
} else {
if((state_val_18238 === (17))){
var inst_18223 = (state_18237[(2)]);
var state_18237__$1 = state_18237;
if(cljs.core.truth_(inst_18223)){
var statearr_18248_18310 = state_18237__$1;
(statearr_18248_18310[(1)] = (19));

} else {
var statearr_18249_18311 = state_18237__$1;
(statearr_18249_18311[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18238 === (3))){
var inst_18235 = (state_18237[(2)]);
var state_18237__$1 = state_18237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18237__$1,inst_18235);
} else {
if((state_val_18238 === (12))){
var inst_18212 = (state_18237[(10)]);
var state_18237__$1 = state_18237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18237__$1,(14),inst_18212);
} else {
if((state_val_18238 === (2))){
var state_18237__$1 = state_18237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18237__$1,(4),results);
} else {
if((state_val_18238 === (19))){
var state_18237__$1 = state_18237;
var statearr_18250_18312 = state_18237__$1;
(statearr_18250_18312[(2)] = null);

(statearr_18250_18312[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18238 === (11))){
var inst_18212 = (state_18237[(2)]);
var state_18237__$1 = (function (){var statearr_18251 = state_18237;
(statearr_18251[(10)] = inst_18212);

return statearr_18251;
})();
var statearr_18252_18313 = state_18237__$1;
(statearr_18252_18313[(2)] = null);

(statearr_18252_18313[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18238 === (9))){
var state_18237__$1 = state_18237;
var statearr_18253_18314 = state_18237__$1;
(statearr_18253_18314[(2)] = null);

(statearr_18253_18314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18238 === (5))){
var state_18237__$1 = state_18237;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18254_18315 = state_18237__$1;
(statearr_18254_18315[(1)] = (8));

} else {
var statearr_18255_18316 = state_18237__$1;
(statearr_18255_18316[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18238 === (14))){
var inst_18215 = (state_18237[(8)]);
var inst_18217 = (state_18237[(11)]);
var inst_18215__$1 = (state_18237[(2)]);
var inst_18216 = (inst_18215__$1 == null);
var inst_18217__$1 = cljs.core.not.call(null,inst_18216);
var state_18237__$1 = (function (){var statearr_18256 = state_18237;
(statearr_18256[(8)] = inst_18215__$1);

(statearr_18256[(11)] = inst_18217__$1);

return statearr_18256;
})();
if(inst_18217__$1){
var statearr_18257_18317 = state_18237__$1;
(statearr_18257_18317[(1)] = (15));

} else {
var statearr_18258_18318 = state_18237__$1;
(statearr_18258_18318[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18238 === (16))){
var inst_18217 = (state_18237[(11)]);
var state_18237__$1 = state_18237;
var statearr_18259_18319 = state_18237__$1;
(statearr_18259_18319[(2)] = inst_18217);

(statearr_18259_18319[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18238 === (10))){
var inst_18209 = (state_18237[(2)]);
var state_18237__$1 = state_18237;
var statearr_18260_18320 = state_18237__$1;
(statearr_18260_18320[(2)] = inst_18209);

(statearr_18260_18320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18238 === (18))){
var inst_18220 = (state_18237[(2)]);
var state_18237__$1 = state_18237;
var statearr_18261_18321 = state_18237__$1;
(statearr_18261_18321[(2)] = inst_18220);

(statearr_18261_18321[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18238 === (8))){
var inst_18206 = cljs.core.async.close_BANG_.call(null,to);
var state_18237__$1 = state_18237;
var statearr_18262_18322 = state_18237__$1;
(statearr_18262_18322[(2)] = inst_18206);

(statearr_18262_18322[(1)] = (10));


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
});})(c__16067__auto__,jobs,results,process,async))
;
return ((function (switch__15900__auto__,c__16067__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____0 = (function (){
var statearr_18263 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18263[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__);

(statearr_18263[(1)] = (1));

return statearr_18263;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____1 = (function (state_18237){
while(true){
var ret_value__15902__auto__ = (function (){try{while(true){
var result__15903__auto__ = switch__15900__auto__.call(null,state_18237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15903__auto__;
}
break;
}
}catch (e18264){if((e18264 instanceof Object)){
var ex__15904__auto__ = e18264;
var statearr_18265_18323 = state_18237;
(statearr_18265_18323[(5)] = ex__15904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18324 = state_18237;
state_18237 = G__18324;
continue;
} else {
return ret_value__15902__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__ = function(state_18237){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____1.call(this,state_18237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15901__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15901__auto__;
})()
;})(switch__15900__auto__,c__16067__auto__,jobs,results,process,async))
})();
var state__16069__auto__ = (function (){var statearr_18266 = f__16068__auto__.call(null);
(statearr_18266[(6)] = c__16067__auto__);

return statearr_18266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16069__auto__);
});})(c__16067__auto__,jobs,results,process,async))
);

return c__16067__auto__;
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
var G__18326 = arguments.length;
switch (G__18326) {
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
var G__18329 = arguments.length;
switch (G__18329) {
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
var G__18332 = arguments.length;
switch (G__18332) {
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
var c__16067__auto___18381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16067__auto___18381,tc,fc){
return (function (){
var f__16068__auto__ = (function (){var switch__15900__auto__ = ((function (c__16067__auto___18381,tc,fc){
return (function (state_18358){
var state_val_18359 = (state_18358[(1)]);
if((state_val_18359 === (7))){
var inst_18354 = (state_18358[(2)]);
var state_18358__$1 = state_18358;
var statearr_18360_18382 = state_18358__$1;
(statearr_18360_18382[(2)] = inst_18354);

(statearr_18360_18382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18359 === (1))){
var state_18358__$1 = state_18358;
var statearr_18361_18383 = state_18358__$1;
(statearr_18361_18383[(2)] = null);

(statearr_18361_18383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18359 === (4))){
var inst_18335 = (state_18358[(7)]);
var inst_18335__$1 = (state_18358[(2)]);
var inst_18336 = (inst_18335__$1 == null);
var state_18358__$1 = (function (){var statearr_18362 = state_18358;
(statearr_18362[(7)] = inst_18335__$1);

return statearr_18362;
})();
if(cljs.core.truth_(inst_18336)){
var statearr_18363_18384 = state_18358__$1;
(statearr_18363_18384[(1)] = (5));

} else {
var statearr_18364_18385 = state_18358__$1;
(statearr_18364_18385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18359 === (13))){
var state_18358__$1 = state_18358;
var statearr_18365_18386 = state_18358__$1;
(statearr_18365_18386[(2)] = null);

(statearr_18365_18386[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18359 === (6))){
var inst_18335 = (state_18358[(7)]);
var inst_18341 = p.call(null,inst_18335);
var state_18358__$1 = state_18358;
if(cljs.core.truth_(inst_18341)){
var statearr_18366_18387 = state_18358__$1;
(statearr_18366_18387[(1)] = (9));

} else {
var statearr_18367_18388 = state_18358__$1;
(statearr_18367_18388[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18359 === (3))){
var inst_18356 = (state_18358[(2)]);
var state_18358__$1 = state_18358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18358__$1,inst_18356);
} else {
if((state_val_18359 === (12))){
var state_18358__$1 = state_18358;
var statearr_18368_18389 = state_18358__$1;
(statearr_18368_18389[(2)] = null);

(statearr_18368_18389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18359 === (2))){
var state_18358__$1 = state_18358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18358__$1,(4),ch);
} else {
if((state_val_18359 === (11))){
var inst_18335 = (state_18358[(7)]);
var inst_18345 = (state_18358[(2)]);
var state_18358__$1 = state_18358;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18358__$1,(8),inst_18345,inst_18335);
} else {
if((state_val_18359 === (9))){
var state_18358__$1 = state_18358;
var statearr_18369_18390 = state_18358__$1;
(statearr_18369_18390[(2)] = tc);

(statearr_18369_18390[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18359 === (5))){
var inst_18338 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18339 = cljs.core.async.close_BANG_.call(null,fc);
var state_18358__$1 = (function (){var statearr_18370 = state_18358;
(statearr_18370[(8)] = inst_18338);

return statearr_18370;
})();
var statearr_18371_18391 = state_18358__$1;
(statearr_18371_18391[(2)] = inst_18339);

(statearr_18371_18391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18359 === (14))){
var inst_18352 = (state_18358[(2)]);
var state_18358__$1 = state_18358;
var statearr_18372_18392 = state_18358__$1;
(statearr_18372_18392[(2)] = inst_18352);

(statearr_18372_18392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18359 === (10))){
var state_18358__$1 = state_18358;
var statearr_18373_18393 = state_18358__$1;
(statearr_18373_18393[(2)] = fc);

(statearr_18373_18393[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18359 === (8))){
var inst_18347 = (state_18358[(2)]);
var state_18358__$1 = state_18358;
if(cljs.core.truth_(inst_18347)){
var statearr_18374_18394 = state_18358__$1;
(statearr_18374_18394[(1)] = (12));

} else {
var statearr_18375_18395 = state_18358__$1;
(statearr_18375_18395[(1)] = (13));

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
});})(c__16067__auto___18381,tc,fc))
;
return ((function (switch__15900__auto__,c__16067__auto___18381,tc,fc){
return (function() {
var cljs$core$async$state_machine__15901__auto__ = null;
var cljs$core$async$state_machine__15901__auto____0 = (function (){
var statearr_18376 = [null,null,null,null,null,null,null,null,null];
(statearr_18376[(0)] = cljs$core$async$state_machine__15901__auto__);

(statearr_18376[(1)] = (1));

return statearr_18376;
});
var cljs$core$async$state_machine__15901__auto____1 = (function (state_18358){
while(true){
var ret_value__15902__auto__ = (function (){try{while(true){
var result__15903__auto__ = switch__15900__auto__.call(null,state_18358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15903__auto__;
}
break;
}
}catch (e18377){if((e18377 instanceof Object)){
var ex__15904__auto__ = e18377;
var statearr_18378_18396 = state_18358;
(statearr_18378_18396[(5)] = ex__15904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18397 = state_18358;
state_18358 = G__18397;
continue;
} else {
return ret_value__15902__auto__;
}
break;
}
});
cljs$core$async$state_machine__15901__auto__ = function(state_18358){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15901__auto____1.call(this,state_18358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15901__auto____0;
cljs$core$async$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15901__auto____1;
return cljs$core$async$state_machine__15901__auto__;
})()
;})(switch__15900__auto__,c__16067__auto___18381,tc,fc))
})();
var state__16069__auto__ = (function (){var statearr_18379 = f__16068__auto__.call(null);
(statearr_18379[(6)] = c__16067__auto___18381);

return statearr_18379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16069__auto__);
});})(c__16067__auto___18381,tc,fc))
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
var c__16067__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16067__auto__){
return (function (){
var f__16068__auto__ = (function (){var switch__15900__auto__ = ((function (c__16067__auto__){
return (function (state_18418){
var state_val_18419 = (state_18418[(1)]);
if((state_val_18419 === (7))){
var inst_18414 = (state_18418[(2)]);
var state_18418__$1 = state_18418;
var statearr_18420_18438 = state_18418__$1;
(statearr_18420_18438[(2)] = inst_18414);

(statearr_18420_18438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18419 === (1))){
var inst_18398 = init;
var state_18418__$1 = (function (){var statearr_18421 = state_18418;
(statearr_18421[(7)] = inst_18398);

return statearr_18421;
})();
var statearr_18422_18439 = state_18418__$1;
(statearr_18422_18439[(2)] = null);

(statearr_18422_18439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18419 === (4))){
var inst_18401 = (state_18418[(8)]);
var inst_18401__$1 = (state_18418[(2)]);
var inst_18402 = (inst_18401__$1 == null);
var state_18418__$1 = (function (){var statearr_18423 = state_18418;
(statearr_18423[(8)] = inst_18401__$1);

return statearr_18423;
})();
if(cljs.core.truth_(inst_18402)){
var statearr_18424_18440 = state_18418__$1;
(statearr_18424_18440[(1)] = (5));

} else {
var statearr_18425_18441 = state_18418__$1;
(statearr_18425_18441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18419 === (6))){
var inst_18401 = (state_18418[(8)]);
var inst_18398 = (state_18418[(7)]);
var inst_18405 = (state_18418[(9)]);
var inst_18405__$1 = f.call(null,inst_18398,inst_18401);
var inst_18406 = cljs.core.reduced_QMARK_.call(null,inst_18405__$1);
var state_18418__$1 = (function (){var statearr_18426 = state_18418;
(statearr_18426[(9)] = inst_18405__$1);

return statearr_18426;
})();
if(inst_18406){
var statearr_18427_18442 = state_18418__$1;
(statearr_18427_18442[(1)] = (8));

} else {
var statearr_18428_18443 = state_18418__$1;
(statearr_18428_18443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18419 === (3))){
var inst_18416 = (state_18418[(2)]);
var state_18418__$1 = state_18418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18418__$1,inst_18416);
} else {
if((state_val_18419 === (2))){
var state_18418__$1 = state_18418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18418__$1,(4),ch);
} else {
if((state_val_18419 === (9))){
var inst_18405 = (state_18418[(9)]);
var inst_18398 = inst_18405;
var state_18418__$1 = (function (){var statearr_18429 = state_18418;
(statearr_18429[(7)] = inst_18398);

return statearr_18429;
})();
var statearr_18430_18444 = state_18418__$1;
(statearr_18430_18444[(2)] = null);

(statearr_18430_18444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18419 === (5))){
var inst_18398 = (state_18418[(7)]);
var state_18418__$1 = state_18418;
var statearr_18431_18445 = state_18418__$1;
(statearr_18431_18445[(2)] = inst_18398);

(statearr_18431_18445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18419 === (10))){
var inst_18412 = (state_18418[(2)]);
var state_18418__$1 = state_18418;
var statearr_18432_18446 = state_18418__$1;
(statearr_18432_18446[(2)] = inst_18412);

(statearr_18432_18446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18419 === (8))){
var inst_18405 = (state_18418[(9)]);
var inst_18408 = cljs.core.deref.call(null,inst_18405);
var state_18418__$1 = state_18418;
var statearr_18433_18447 = state_18418__$1;
(statearr_18433_18447[(2)] = inst_18408);

(statearr_18433_18447[(1)] = (10));


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
});})(c__16067__auto__))
;
return ((function (switch__15900__auto__,c__16067__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15901__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15901__auto____0 = (function (){
var statearr_18434 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18434[(0)] = cljs$core$async$reduce_$_state_machine__15901__auto__);

(statearr_18434[(1)] = (1));

return statearr_18434;
});
var cljs$core$async$reduce_$_state_machine__15901__auto____1 = (function (state_18418){
while(true){
var ret_value__15902__auto__ = (function (){try{while(true){
var result__15903__auto__ = switch__15900__auto__.call(null,state_18418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15903__auto__;
}
break;
}
}catch (e18435){if((e18435 instanceof Object)){
var ex__15904__auto__ = e18435;
var statearr_18436_18448 = state_18418;
(statearr_18436_18448[(5)] = ex__15904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18449 = state_18418;
state_18418 = G__18449;
continue;
} else {
return ret_value__15902__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15901__auto__ = function(state_18418){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15901__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15901__auto____1.call(this,state_18418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15901__auto____0;
cljs$core$async$reduce_$_state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15901__auto____1;
return cljs$core$async$reduce_$_state_machine__15901__auto__;
})()
;})(switch__15900__auto__,c__16067__auto__))
})();
var state__16069__auto__ = (function (){var statearr_18437 = f__16068__auto__.call(null);
(statearr_18437[(6)] = c__16067__auto__);

return statearr_18437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16069__auto__);
});})(c__16067__auto__))
);

return c__16067__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__16067__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16067__auto__,f__$1){
return (function (){
var f__16068__auto__ = (function (){var switch__15900__auto__ = ((function (c__16067__auto__,f__$1){
return (function (state_18455){
var state_val_18456 = (state_18455[(1)]);
if((state_val_18456 === (1))){
var inst_18450 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_18455__$1 = state_18455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18455__$1,(2),inst_18450);
} else {
if((state_val_18456 === (2))){
var inst_18452 = (state_18455[(2)]);
var inst_18453 = f__$1.call(null,inst_18452);
var state_18455__$1 = state_18455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18455__$1,inst_18453);
} else {
return null;
}
}
});})(c__16067__auto__,f__$1))
;
return ((function (switch__15900__auto__,c__16067__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15901__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15901__auto____0 = (function (){
var statearr_18457 = [null,null,null,null,null,null,null];
(statearr_18457[(0)] = cljs$core$async$transduce_$_state_machine__15901__auto__);

(statearr_18457[(1)] = (1));

return statearr_18457;
});
var cljs$core$async$transduce_$_state_machine__15901__auto____1 = (function (state_18455){
while(true){
var ret_value__15902__auto__ = (function (){try{while(true){
var result__15903__auto__ = switch__15900__auto__.call(null,state_18455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15903__auto__;
}
break;
}
}catch (e18458){if((e18458 instanceof Object)){
var ex__15904__auto__ = e18458;
var statearr_18459_18461 = state_18455;
(statearr_18459_18461[(5)] = ex__15904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18462 = state_18455;
state_18455 = G__18462;
continue;
} else {
return ret_value__15902__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15901__auto__ = function(state_18455){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15901__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15901__auto____1.call(this,state_18455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15901__auto____0;
cljs$core$async$transduce_$_state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15901__auto____1;
return cljs$core$async$transduce_$_state_machine__15901__auto__;
})()
;})(switch__15900__auto__,c__16067__auto__,f__$1))
})();
var state__16069__auto__ = (function (){var statearr_18460 = f__16068__auto__.call(null);
(statearr_18460[(6)] = c__16067__auto__);

return statearr_18460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16069__auto__);
});})(c__16067__auto__,f__$1))
);

return c__16067__auto__;
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
var G__18464 = arguments.length;
switch (G__18464) {
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
var c__16067__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16067__auto__){
return (function (){
var f__16068__auto__ = (function (){var switch__15900__auto__ = ((function (c__16067__auto__){
return (function (state_18489){
var state_val_18490 = (state_18489[(1)]);
if((state_val_18490 === (7))){
var inst_18471 = (state_18489[(2)]);
var state_18489__$1 = state_18489;
var statearr_18491_18512 = state_18489__$1;
(statearr_18491_18512[(2)] = inst_18471);

(statearr_18491_18512[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18490 === (1))){
var inst_18465 = cljs.core.seq.call(null,coll);
var inst_18466 = inst_18465;
var state_18489__$1 = (function (){var statearr_18492 = state_18489;
(statearr_18492[(7)] = inst_18466);

return statearr_18492;
})();
var statearr_18493_18513 = state_18489__$1;
(statearr_18493_18513[(2)] = null);

(statearr_18493_18513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18490 === (4))){
var inst_18466 = (state_18489[(7)]);
var inst_18469 = cljs.core.first.call(null,inst_18466);
var state_18489__$1 = state_18489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18489__$1,(7),ch,inst_18469);
} else {
if((state_val_18490 === (13))){
var inst_18483 = (state_18489[(2)]);
var state_18489__$1 = state_18489;
var statearr_18494_18514 = state_18489__$1;
(statearr_18494_18514[(2)] = inst_18483);

(statearr_18494_18514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18490 === (6))){
var inst_18474 = (state_18489[(2)]);
var state_18489__$1 = state_18489;
if(cljs.core.truth_(inst_18474)){
var statearr_18495_18515 = state_18489__$1;
(statearr_18495_18515[(1)] = (8));

} else {
var statearr_18496_18516 = state_18489__$1;
(statearr_18496_18516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18490 === (3))){
var inst_18487 = (state_18489[(2)]);
var state_18489__$1 = state_18489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18489__$1,inst_18487);
} else {
if((state_val_18490 === (12))){
var state_18489__$1 = state_18489;
var statearr_18497_18517 = state_18489__$1;
(statearr_18497_18517[(2)] = null);

(statearr_18497_18517[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18490 === (2))){
var inst_18466 = (state_18489[(7)]);
var state_18489__$1 = state_18489;
if(cljs.core.truth_(inst_18466)){
var statearr_18498_18518 = state_18489__$1;
(statearr_18498_18518[(1)] = (4));

} else {
var statearr_18499_18519 = state_18489__$1;
(statearr_18499_18519[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18490 === (11))){
var inst_18480 = cljs.core.async.close_BANG_.call(null,ch);
var state_18489__$1 = state_18489;
var statearr_18500_18520 = state_18489__$1;
(statearr_18500_18520[(2)] = inst_18480);

(statearr_18500_18520[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18490 === (9))){
var state_18489__$1 = state_18489;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18501_18521 = state_18489__$1;
(statearr_18501_18521[(1)] = (11));

} else {
var statearr_18502_18522 = state_18489__$1;
(statearr_18502_18522[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18490 === (5))){
var inst_18466 = (state_18489[(7)]);
var state_18489__$1 = state_18489;
var statearr_18503_18523 = state_18489__$1;
(statearr_18503_18523[(2)] = inst_18466);

(statearr_18503_18523[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18490 === (10))){
var inst_18485 = (state_18489[(2)]);
var state_18489__$1 = state_18489;
var statearr_18504_18524 = state_18489__$1;
(statearr_18504_18524[(2)] = inst_18485);

(statearr_18504_18524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18490 === (8))){
var inst_18466 = (state_18489[(7)]);
var inst_18476 = cljs.core.next.call(null,inst_18466);
var inst_18466__$1 = inst_18476;
var state_18489__$1 = (function (){var statearr_18505 = state_18489;
(statearr_18505[(7)] = inst_18466__$1);

return statearr_18505;
})();
var statearr_18506_18525 = state_18489__$1;
(statearr_18506_18525[(2)] = null);

(statearr_18506_18525[(1)] = (2));


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
});})(c__16067__auto__))
;
return ((function (switch__15900__auto__,c__16067__auto__){
return (function() {
var cljs$core$async$state_machine__15901__auto__ = null;
var cljs$core$async$state_machine__15901__auto____0 = (function (){
var statearr_18507 = [null,null,null,null,null,null,null,null];
(statearr_18507[(0)] = cljs$core$async$state_machine__15901__auto__);

(statearr_18507[(1)] = (1));

return statearr_18507;
});
var cljs$core$async$state_machine__15901__auto____1 = (function (state_18489){
while(true){
var ret_value__15902__auto__ = (function (){try{while(true){
var result__15903__auto__ = switch__15900__auto__.call(null,state_18489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15903__auto__;
}
break;
}
}catch (e18508){if((e18508 instanceof Object)){
var ex__15904__auto__ = e18508;
var statearr_18509_18526 = state_18489;
(statearr_18509_18526[(5)] = ex__15904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18527 = state_18489;
state_18489 = G__18527;
continue;
} else {
return ret_value__15902__auto__;
}
break;
}
});
cljs$core$async$state_machine__15901__auto__ = function(state_18489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15901__auto____1.call(this,state_18489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15901__auto____0;
cljs$core$async$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15901__auto____1;
return cljs$core$async$state_machine__15901__auto__;
})()
;})(switch__15900__auto__,c__16067__auto__))
})();
var state__16069__auto__ = (function (){var statearr_18510 = f__16068__auto__.call(null);
(statearr_18510[(6)] = c__16067__auto__);

return statearr_18510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16069__auto__);
});})(c__16067__auto__))
);

return c__16067__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18528 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18528 = (function (ch,cs,meta18529){
this.ch = ch;
this.cs = cs;
this.meta18529 = meta18529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18530,meta18529__$1){
var self__ = this;
var _18530__$1 = this;
return (new cljs.core.async.t_cljs$core$async18528(self__.ch,self__.cs,meta18529__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18528.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18530){
var self__ = this;
var _18530__$1 = this;
return self__.meta18529;
});})(cs))
;

cljs.core.async.t_cljs$core$async18528.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18528.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18528.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18528.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18528.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18528.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18528.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18529","meta18529",-2123021738,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18528.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18528.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18528";

cljs.core.async.t_cljs$core$async18528.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async18528");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18528.
 */
cljs.core.async.__GT_t_cljs$core$async18528 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18528(ch__$1,cs__$1,meta18529){
return (new cljs.core.async.t_cljs$core$async18528(ch__$1,cs__$1,meta18529));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18528(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__16067__auto___18750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16067__auto___18750,cs,m,dchan,dctr,done){
return (function (){
var f__16068__auto__ = (function (){var switch__15900__auto__ = ((function (c__16067__auto___18750,cs,m,dchan,dctr,done){
return (function (state_18665){
var state_val_18666 = (state_18665[(1)]);
if((state_val_18666 === (7))){
var inst_18661 = (state_18665[(2)]);
var state_18665__$1 = state_18665;
var statearr_18667_18751 = state_18665__$1;
(statearr_18667_18751[(2)] = inst_18661);

(statearr_18667_18751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (20))){
var inst_18564 = (state_18665[(7)]);
var inst_18576 = cljs.core.first.call(null,inst_18564);
var inst_18577 = cljs.core.nth.call(null,inst_18576,(0),null);
var inst_18578 = cljs.core.nth.call(null,inst_18576,(1),null);
var state_18665__$1 = (function (){var statearr_18668 = state_18665;
(statearr_18668[(8)] = inst_18577);

return statearr_18668;
})();
if(cljs.core.truth_(inst_18578)){
var statearr_18669_18752 = state_18665__$1;
(statearr_18669_18752[(1)] = (22));

} else {
var statearr_18670_18753 = state_18665__$1;
(statearr_18670_18753[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (27))){
var inst_18608 = (state_18665[(9)]);
var inst_18606 = (state_18665[(10)]);
var inst_18613 = (state_18665[(11)]);
var inst_18533 = (state_18665[(12)]);
var inst_18613__$1 = cljs.core._nth.call(null,inst_18606,inst_18608);
var inst_18614 = cljs.core.async.put_BANG_.call(null,inst_18613__$1,inst_18533,done);
var state_18665__$1 = (function (){var statearr_18671 = state_18665;
(statearr_18671[(11)] = inst_18613__$1);

return statearr_18671;
})();
if(cljs.core.truth_(inst_18614)){
var statearr_18672_18754 = state_18665__$1;
(statearr_18672_18754[(1)] = (30));

} else {
var statearr_18673_18755 = state_18665__$1;
(statearr_18673_18755[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (1))){
var state_18665__$1 = state_18665;
var statearr_18674_18756 = state_18665__$1;
(statearr_18674_18756[(2)] = null);

(statearr_18674_18756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (24))){
var inst_18564 = (state_18665[(7)]);
var inst_18583 = (state_18665[(2)]);
var inst_18584 = cljs.core.next.call(null,inst_18564);
var inst_18542 = inst_18584;
var inst_18543 = null;
var inst_18544 = (0);
var inst_18545 = (0);
var state_18665__$1 = (function (){var statearr_18675 = state_18665;
(statearr_18675[(13)] = inst_18543);

(statearr_18675[(14)] = inst_18583);

(statearr_18675[(15)] = inst_18545);

(statearr_18675[(16)] = inst_18544);

(statearr_18675[(17)] = inst_18542);

return statearr_18675;
})();
var statearr_18676_18757 = state_18665__$1;
(statearr_18676_18757[(2)] = null);

(statearr_18676_18757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (39))){
var state_18665__$1 = state_18665;
var statearr_18680_18758 = state_18665__$1;
(statearr_18680_18758[(2)] = null);

(statearr_18680_18758[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (4))){
var inst_18533 = (state_18665[(12)]);
var inst_18533__$1 = (state_18665[(2)]);
var inst_18534 = (inst_18533__$1 == null);
var state_18665__$1 = (function (){var statearr_18681 = state_18665;
(statearr_18681[(12)] = inst_18533__$1);

return statearr_18681;
})();
if(cljs.core.truth_(inst_18534)){
var statearr_18682_18759 = state_18665__$1;
(statearr_18682_18759[(1)] = (5));

} else {
var statearr_18683_18760 = state_18665__$1;
(statearr_18683_18760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (15))){
var inst_18543 = (state_18665[(13)]);
var inst_18545 = (state_18665[(15)]);
var inst_18544 = (state_18665[(16)]);
var inst_18542 = (state_18665[(17)]);
var inst_18560 = (state_18665[(2)]);
var inst_18561 = (inst_18545 + (1));
var tmp18677 = inst_18543;
var tmp18678 = inst_18544;
var tmp18679 = inst_18542;
var inst_18542__$1 = tmp18679;
var inst_18543__$1 = tmp18677;
var inst_18544__$1 = tmp18678;
var inst_18545__$1 = inst_18561;
var state_18665__$1 = (function (){var statearr_18684 = state_18665;
(statearr_18684[(13)] = inst_18543__$1);

(statearr_18684[(15)] = inst_18545__$1);

(statearr_18684[(18)] = inst_18560);

(statearr_18684[(16)] = inst_18544__$1);

(statearr_18684[(17)] = inst_18542__$1);

return statearr_18684;
})();
var statearr_18685_18761 = state_18665__$1;
(statearr_18685_18761[(2)] = null);

(statearr_18685_18761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (21))){
var inst_18587 = (state_18665[(2)]);
var state_18665__$1 = state_18665;
var statearr_18689_18762 = state_18665__$1;
(statearr_18689_18762[(2)] = inst_18587);

(statearr_18689_18762[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (31))){
var inst_18613 = (state_18665[(11)]);
var inst_18617 = done.call(null,null);
var inst_18618 = cljs.core.async.untap_STAR_.call(null,m,inst_18613);
var state_18665__$1 = (function (){var statearr_18690 = state_18665;
(statearr_18690[(19)] = inst_18617);

return statearr_18690;
})();
var statearr_18691_18763 = state_18665__$1;
(statearr_18691_18763[(2)] = inst_18618);

(statearr_18691_18763[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (32))){
var inst_18608 = (state_18665[(9)]);
var inst_18606 = (state_18665[(10)]);
var inst_18607 = (state_18665[(20)]);
var inst_18605 = (state_18665[(21)]);
var inst_18620 = (state_18665[(2)]);
var inst_18621 = (inst_18608 + (1));
var tmp18686 = inst_18606;
var tmp18687 = inst_18607;
var tmp18688 = inst_18605;
var inst_18605__$1 = tmp18688;
var inst_18606__$1 = tmp18686;
var inst_18607__$1 = tmp18687;
var inst_18608__$1 = inst_18621;
var state_18665__$1 = (function (){var statearr_18692 = state_18665;
(statearr_18692[(9)] = inst_18608__$1);

(statearr_18692[(10)] = inst_18606__$1);

(statearr_18692[(20)] = inst_18607__$1);

(statearr_18692[(21)] = inst_18605__$1);

(statearr_18692[(22)] = inst_18620);

return statearr_18692;
})();
var statearr_18693_18764 = state_18665__$1;
(statearr_18693_18764[(2)] = null);

(statearr_18693_18764[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (40))){
var inst_18633 = (state_18665[(23)]);
var inst_18637 = done.call(null,null);
var inst_18638 = cljs.core.async.untap_STAR_.call(null,m,inst_18633);
var state_18665__$1 = (function (){var statearr_18694 = state_18665;
(statearr_18694[(24)] = inst_18637);

return statearr_18694;
})();
var statearr_18695_18765 = state_18665__$1;
(statearr_18695_18765[(2)] = inst_18638);

(statearr_18695_18765[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (33))){
var inst_18624 = (state_18665[(25)]);
var inst_18626 = cljs.core.chunked_seq_QMARK_.call(null,inst_18624);
var state_18665__$1 = state_18665;
if(inst_18626){
var statearr_18696_18766 = state_18665__$1;
(statearr_18696_18766[(1)] = (36));

} else {
var statearr_18697_18767 = state_18665__$1;
(statearr_18697_18767[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (13))){
var inst_18554 = (state_18665[(26)]);
var inst_18557 = cljs.core.async.close_BANG_.call(null,inst_18554);
var state_18665__$1 = state_18665;
var statearr_18698_18768 = state_18665__$1;
(statearr_18698_18768[(2)] = inst_18557);

(statearr_18698_18768[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (22))){
var inst_18577 = (state_18665[(8)]);
var inst_18580 = cljs.core.async.close_BANG_.call(null,inst_18577);
var state_18665__$1 = state_18665;
var statearr_18699_18769 = state_18665__$1;
(statearr_18699_18769[(2)] = inst_18580);

(statearr_18699_18769[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (36))){
var inst_18624 = (state_18665[(25)]);
var inst_18628 = cljs.core.chunk_first.call(null,inst_18624);
var inst_18629 = cljs.core.chunk_rest.call(null,inst_18624);
var inst_18630 = cljs.core.count.call(null,inst_18628);
var inst_18605 = inst_18629;
var inst_18606 = inst_18628;
var inst_18607 = inst_18630;
var inst_18608 = (0);
var state_18665__$1 = (function (){var statearr_18700 = state_18665;
(statearr_18700[(9)] = inst_18608);

(statearr_18700[(10)] = inst_18606);

(statearr_18700[(20)] = inst_18607);

(statearr_18700[(21)] = inst_18605);

return statearr_18700;
})();
var statearr_18701_18770 = state_18665__$1;
(statearr_18701_18770[(2)] = null);

(statearr_18701_18770[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (41))){
var inst_18624 = (state_18665[(25)]);
var inst_18640 = (state_18665[(2)]);
var inst_18641 = cljs.core.next.call(null,inst_18624);
var inst_18605 = inst_18641;
var inst_18606 = null;
var inst_18607 = (0);
var inst_18608 = (0);
var state_18665__$1 = (function (){var statearr_18702 = state_18665;
(statearr_18702[(9)] = inst_18608);

(statearr_18702[(10)] = inst_18606);

(statearr_18702[(20)] = inst_18607);

(statearr_18702[(27)] = inst_18640);

(statearr_18702[(21)] = inst_18605);

return statearr_18702;
})();
var statearr_18703_18771 = state_18665__$1;
(statearr_18703_18771[(2)] = null);

(statearr_18703_18771[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (43))){
var state_18665__$1 = state_18665;
var statearr_18704_18772 = state_18665__$1;
(statearr_18704_18772[(2)] = null);

(statearr_18704_18772[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (29))){
var inst_18649 = (state_18665[(2)]);
var state_18665__$1 = state_18665;
var statearr_18705_18773 = state_18665__$1;
(statearr_18705_18773[(2)] = inst_18649);

(statearr_18705_18773[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (44))){
var inst_18658 = (state_18665[(2)]);
var state_18665__$1 = (function (){var statearr_18706 = state_18665;
(statearr_18706[(28)] = inst_18658);

return statearr_18706;
})();
var statearr_18707_18774 = state_18665__$1;
(statearr_18707_18774[(2)] = null);

(statearr_18707_18774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (6))){
var inst_18597 = (state_18665[(29)]);
var inst_18596 = cljs.core.deref.call(null,cs);
var inst_18597__$1 = cljs.core.keys.call(null,inst_18596);
var inst_18598 = cljs.core.count.call(null,inst_18597__$1);
var inst_18599 = cljs.core.reset_BANG_.call(null,dctr,inst_18598);
var inst_18604 = cljs.core.seq.call(null,inst_18597__$1);
var inst_18605 = inst_18604;
var inst_18606 = null;
var inst_18607 = (0);
var inst_18608 = (0);
var state_18665__$1 = (function (){var statearr_18708 = state_18665;
(statearr_18708[(9)] = inst_18608);

(statearr_18708[(10)] = inst_18606);

(statearr_18708[(20)] = inst_18607);

(statearr_18708[(30)] = inst_18599);

(statearr_18708[(21)] = inst_18605);

(statearr_18708[(29)] = inst_18597__$1);

return statearr_18708;
})();
var statearr_18709_18775 = state_18665__$1;
(statearr_18709_18775[(2)] = null);

(statearr_18709_18775[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (28))){
var inst_18605 = (state_18665[(21)]);
var inst_18624 = (state_18665[(25)]);
var inst_18624__$1 = cljs.core.seq.call(null,inst_18605);
var state_18665__$1 = (function (){var statearr_18710 = state_18665;
(statearr_18710[(25)] = inst_18624__$1);

return statearr_18710;
})();
if(inst_18624__$1){
var statearr_18711_18776 = state_18665__$1;
(statearr_18711_18776[(1)] = (33));

} else {
var statearr_18712_18777 = state_18665__$1;
(statearr_18712_18777[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (25))){
var inst_18608 = (state_18665[(9)]);
var inst_18607 = (state_18665[(20)]);
var inst_18610 = (inst_18608 < inst_18607);
var inst_18611 = inst_18610;
var state_18665__$1 = state_18665;
if(cljs.core.truth_(inst_18611)){
var statearr_18713_18778 = state_18665__$1;
(statearr_18713_18778[(1)] = (27));

} else {
var statearr_18714_18779 = state_18665__$1;
(statearr_18714_18779[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (34))){
var state_18665__$1 = state_18665;
var statearr_18715_18780 = state_18665__$1;
(statearr_18715_18780[(2)] = null);

(statearr_18715_18780[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (17))){
var state_18665__$1 = state_18665;
var statearr_18716_18781 = state_18665__$1;
(statearr_18716_18781[(2)] = null);

(statearr_18716_18781[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (3))){
var inst_18663 = (state_18665[(2)]);
var state_18665__$1 = state_18665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18665__$1,inst_18663);
} else {
if((state_val_18666 === (12))){
var inst_18592 = (state_18665[(2)]);
var state_18665__$1 = state_18665;
var statearr_18717_18782 = state_18665__$1;
(statearr_18717_18782[(2)] = inst_18592);

(statearr_18717_18782[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (2))){
var state_18665__$1 = state_18665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18665__$1,(4),ch);
} else {
if((state_val_18666 === (23))){
var state_18665__$1 = state_18665;
var statearr_18718_18783 = state_18665__$1;
(statearr_18718_18783[(2)] = null);

(statearr_18718_18783[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (35))){
var inst_18647 = (state_18665[(2)]);
var state_18665__$1 = state_18665;
var statearr_18719_18784 = state_18665__$1;
(statearr_18719_18784[(2)] = inst_18647);

(statearr_18719_18784[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (19))){
var inst_18564 = (state_18665[(7)]);
var inst_18568 = cljs.core.chunk_first.call(null,inst_18564);
var inst_18569 = cljs.core.chunk_rest.call(null,inst_18564);
var inst_18570 = cljs.core.count.call(null,inst_18568);
var inst_18542 = inst_18569;
var inst_18543 = inst_18568;
var inst_18544 = inst_18570;
var inst_18545 = (0);
var state_18665__$1 = (function (){var statearr_18720 = state_18665;
(statearr_18720[(13)] = inst_18543);

(statearr_18720[(15)] = inst_18545);

(statearr_18720[(16)] = inst_18544);

(statearr_18720[(17)] = inst_18542);

return statearr_18720;
})();
var statearr_18721_18785 = state_18665__$1;
(statearr_18721_18785[(2)] = null);

(statearr_18721_18785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (11))){
var inst_18564 = (state_18665[(7)]);
var inst_18542 = (state_18665[(17)]);
var inst_18564__$1 = cljs.core.seq.call(null,inst_18542);
var state_18665__$1 = (function (){var statearr_18722 = state_18665;
(statearr_18722[(7)] = inst_18564__$1);

return statearr_18722;
})();
if(inst_18564__$1){
var statearr_18723_18786 = state_18665__$1;
(statearr_18723_18786[(1)] = (16));

} else {
var statearr_18724_18787 = state_18665__$1;
(statearr_18724_18787[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (9))){
var inst_18594 = (state_18665[(2)]);
var state_18665__$1 = state_18665;
var statearr_18725_18788 = state_18665__$1;
(statearr_18725_18788[(2)] = inst_18594);

(statearr_18725_18788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (5))){
var inst_18540 = cljs.core.deref.call(null,cs);
var inst_18541 = cljs.core.seq.call(null,inst_18540);
var inst_18542 = inst_18541;
var inst_18543 = null;
var inst_18544 = (0);
var inst_18545 = (0);
var state_18665__$1 = (function (){var statearr_18726 = state_18665;
(statearr_18726[(13)] = inst_18543);

(statearr_18726[(15)] = inst_18545);

(statearr_18726[(16)] = inst_18544);

(statearr_18726[(17)] = inst_18542);

return statearr_18726;
})();
var statearr_18727_18789 = state_18665__$1;
(statearr_18727_18789[(2)] = null);

(statearr_18727_18789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (14))){
var state_18665__$1 = state_18665;
var statearr_18728_18790 = state_18665__$1;
(statearr_18728_18790[(2)] = null);

(statearr_18728_18790[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (45))){
var inst_18655 = (state_18665[(2)]);
var state_18665__$1 = state_18665;
var statearr_18729_18791 = state_18665__$1;
(statearr_18729_18791[(2)] = inst_18655);

(statearr_18729_18791[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (26))){
var inst_18597 = (state_18665[(29)]);
var inst_18651 = (state_18665[(2)]);
var inst_18652 = cljs.core.seq.call(null,inst_18597);
var state_18665__$1 = (function (){var statearr_18730 = state_18665;
(statearr_18730[(31)] = inst_18651);

return statearr_18730;
})();
if(inst_18652){
var statearr_18731_18792 = state_18665__$1;
(statearr_18731_18792[(1)] = (42));

} else {
var statearr_18732_18793 = state_18665__$1;
(statearr_18732_18793[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (16))){
var inst_18564 = (state_18665[(7)]);
var inst_18566 = cljs.core.chunked_seq_QMARK_.call(null,inst_18564);
var state_18665__$1 = state_18665;
if(inst_18566){
var statearr_18733_18794 = state_18665__$1;
(statearr_18733_18794[(1)] = (19));

} else {
var statearr_18734_18795 = state_18665__$1;
(statearr_18734_18795[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (38))){
var inst_18644 = (state_18665[(2)]);
var state_18665__$1 = state_18665;
var statearr_18735_18796 = state_18665__$1;
(statearr_18735_18796[(2)] = inst_18644);

(statearr_18735_18796[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (30))){
var state_18665__$1 = state_18665;
var statearr_18736_18797 = state_18665__$1;
(statearr_18736_18797[(2)] = null);

(statearr_18736_18797[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (10))){
var inst_18543 = (state_18665[(13)]);
var inst_18545 = (state_18665[(15)]);
var inst_18553 = cljs.core._nth.call(null,inst_18543,inst_18545);
var inst_18554 = cljs.core.nth.call(null,inst_18553,(0),null);
var inst_18555 = cljs.core.nth.call(null,inst_18553,(1),null);
var state_18665__$1 = (function (){var statearr_18737 = state_18665;
(statearr_18737[(26)] = inst_18554);

return statearr_18737;
})();
if(cljs.core.truth_(inst_18555)){
var statearr_18738_18798 = state_18665__$1;
(statearr_18738_18798[(1)] = (13));

} else {
var statearr_18739_18799 = state_18665__$1;
(statearr_18739_18799[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (18))){
var inst_18590 = (state_18665[(2)]);
var state_18665__$1 = state_18665;
var statearr_18740_18800 = state_18665__$1;
(statearr_18740_18800[(2)] = inst_18590);

(statearr_18740_18800[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (42))){
var state_18665__$1 = state_18665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18665__$1,(45),dchan);
} else {
if((state_val_18666 === (37))){
var inst_18633 = (state_18665[(23)]);
var inst_18624 = (state_18665[(25)]);
var inst_18533 = (state_18665[(12)]);
var inst_18633__$1 = cljs.core.first.call(null,inst_18624);
var inst_18634 = cljs.core.async.put_BANG_.call(null,inst_18633__$1,inst_18533,done);
var state_18665__$1 = (function (){var statearr_18741 = state_18665;
(statearr_18741[(23)] = inst_18633__$1);

return statearr_18741;
})();
if(cljs.core.truth_(inst_18634)){
var statearr_18742_18801 = state_18665__$1;
(statearr_18742_18801[(1)] = (39));

} else {
var statearr_18743_18802 = state_18665__$1;
(statearr_18743_18802[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18666 === (8))){
var inst_18545 = (state_18665[(15)]);
var inst_18544 = (state_18665[(16)]);
var inst_18547 = (inst_18545 < inst_18544);
var inst_18548 = inst_18547;
var state_18665__$1 = state_18665;
if(cljs.core.truth_(inst_18548)){
var statearr_18744_18803 = state_18665__$1;
(statearr_18744_18803[(1)] = (10));

} else {
var statearr_18745_18804 = state_18665__$1;
(statearr_18745_18804[(1)] = (11));

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
});})(c__16067__auto___18750,cs,m,dchan,dctr,done))
;
return ((function (switch__15900__auto__,c__16067__auto___18750,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15901__auto__ = null;
var cljs$core$async$mult_$_state_machine__15901__auto____0 = (function (){
var statearr_18746 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18746[(0)] = cljs$core$async$mult_$_state_machine__15901__auto__);

(statearr_18746[(1)] = (1));

return statearr_18746;
});
var cljs$core$async$mult_$_state_machine__15901__auto____1 = (function (state_18665){
while(true){
var ret_value__15902__auto__ = (function (){try{while(true){
var result__15903__auto__ = switch__15900__auto__.call(null,state_18665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15903__auto__;
}
break;
}
}catch (e18747){if((e18747 instanceof Object)){
var ex__15904__auto__ = e18747;
var statearr_18748_18805 = state_18665;
(statearr_18748_18805[(5)] = ex__15904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18806 = state_18665;
state_18665 = G__18806;
continue;
} else {
return ret_value__15902__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15901__auto__ = function(state_18665){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15901__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15901__auto____1.call(this,state_18665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15901__auto____0;
cljs$core$async$mult_$_state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15901__auto____1;
return cljs$core$async$mult_$_state_machine__15901__auto__;
})()
;})(switch__15900__auto__,c__16067__auto___18750,cs,m,dchan,dctr,done))
})();
var state__16069__auto__ = (function (){var statearr_18749 = f__16068__auto__.call(null);
(statearr_18749[(6)] = c__16067__auto___18750);

return statearr_18749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16069__auto__);
});})(c__16067__auto___18750,cs,m,dchan,dctr,done))
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
var G__18808 = arguments.length;
switch (G__18808) {
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
var len__4641__auto___18820 = arguments.length;
var i__4642__auto___18821 = (0);
while(true){
if((i__4642__auto___18821 < len__4641__auto___18820)){
args__4647__auto__.push((arguments[i__4642__auto___18821]));

var G__18822 = (i__4642__auto___18821 + (1));
i__4642__auto___18821 = G__18822;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18814){
var map__18815 = p__18814;
var map__18815__$1 = (((((!((map__18815 == null))))?(((((map__18815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18815):map__18815);
var opts = map__18815__$1;
var statearr_18817_18823 = state;
(statearr_18817_18823[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__18815,map__18815__$1,opts){
return (function (val){
var statearr_18818_18824 = state;
(statearr_18818_18824[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18815,map__18815__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_18819_18825 = state;
(statearr_18819_18825[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18810){
var G__18811 = cljs.core.first.call(null,seq18810);
var seq18810__$1 = cljs.core.next.call(null,seq18810);
var G__18812 = cljs.core.first.call(null,seq18810__$1);
var seq18810__$2 = cljs.core.next.call(null,seq18810__$1);
var G__18813 = cljs.core.first.call(null,seq18810__$2);
var seq18810__$3 = cljs.core.next.call(null,seq18810__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18811,G__18812,G__18813,seq18810__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18826 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18826 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18827){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18827 = meta18827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18828,meta18827__$1){
var self__ = this;
var _18828__$1 = this;
return (new cljs.core.async.t_cljs$core$async18826(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18827__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18826.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18828){
var self__ = this;
var _18828__$1 = this;
return self__.meta18827;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18826.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18826.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18826.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18826.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18826.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18826.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18826.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18826.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18826.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18827","meta18827",2135631514,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18826.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18826.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18826";

cljs.core.async.t_cljs$core$async18826.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async18826");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18826.
 */
cljs.core.async.__GT_t_cljs$core$async18826 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18826(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18827){
return (new cljs.core.async.t_cljs$core$async18826(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18827));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18826(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16067__auto___18990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16067__auto___18990,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16068__auto__ = (function (){var switch__15900__auto__ = ((function (c__16067__auto___18990,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18930){
var state_val_18931 = (state_18930[(1)]);
if((state_val_18931 === (7))){
var inst_18845 = (state_18930[(2)]);
var state_18930__$1 = state_18930;
var statearr_18932_18991 = state_18930__$1;
(statearr_18932_18991[(2)] = inst_18845);

(statearr_18932_18991[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (20))){
var inst_18857 = (state_18930[(7)]);
var state_18930__$1 = state_18930;
var statearr_18933_18992 = state_18930__$1;
(statearr_18933_18992[(2)] = inst_18857);

(statearr_18933_18992[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (27))){
var state_18930__$1 = state_18930;
var statearr_18934_18993 = state_18930__$1;
(statearr_18934_18993[(2)] = null);

(statearr_18934_18993[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (1))){
var inst_18832 = (state_18930[(8)]);
var inst_18832__$1 = calc_state.call(null);
var inst_18834 = (inst_18832__$1 == null);
var inst_18835 = cljs.core.not.call(null,inst_18834);
var state_18930__$1 = (function (){var statearr_18935 = state_18930;
(statearr_18935[(8)] = inst_18832__$1);

return statearr_18935;
})();
if(inst_18835){
var statearr_18936_18994 = state_18930__$1;
(statearr_18936_18994[(1)] = (2));

} else {
var statearr_18937_18995 = state_18930__$1;
(statearr_18937_18995[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (24))){
var inst_18890 = (state_18930[(9)]);
var inst_18904 = (state_18930[(10)]);
var inst_18881 = (state_18930[(11)]);
var inst_18904__$1 = inst_18881.call(null,inst_18890);
var state_18930__$1 = (function (){var statearr_18938 = state_18930;
(statearr_18938[(10)] = inst_18904__$1);

return statearr_18938;
})();
if(cljs.core.truth_(inst_18904__$1)){
var statearr_18939_18996 = state_18930__$1;
(statearr_18939_18996[(1)] = (29));

} else {
var statearr_18940_18997 = state_18930__$1;
(statearr_18940_18997[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (4))){
var inst_18848 = (state_18930[(2)]);
var state_18930__$1 = state_18930;
if(cljs.core.truth_(inst_18848)){
var statearr_18941_18998 = state_18930__$1;
(statearr_18941_18998[(1)] = (8));

} else {
var statearr_18942_18999 = state_18930__$1;
(statearr_18942_18999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (15))){
var inst_18875 = (state_18930[(2)]);
var state_18930__$1 = state_18930;
if(cljs.core.truth_(inst_18875)){
var statearr_18943_19000 = state_18930__$1;
(statearr_18943_19000[(1)] = (19));

} else {
var statearr_18944_19001 = state_18930__$1;
(statearr_18944_19001[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (21))){
var inst_18880 = (state_18930[(12)]);
var inst_18880__$1 = (state_18930[(2)]);
var inst_18881 = cljs.core.get.call(null,inst_18880__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18882 = cljs.core.get.call(null,inst_18880__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18883 = cljs.core.get.call(null,inst_18880__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18930__$1 = (function (){var statearr_18945 = state_18930;
(statearr_18945[(13)] = inst_18882);

(statearr_18945[(12)] = inst_18880__$1);

(statearr_18945[(11)] = inst_18881);

return statearr_18945;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18930__$1,(22),inst_18883);
} else {
if((state_val_18931 === (31))){
var inst_18912 = (state_18930[(2)]);
var state_18930__$1 = state_18930;
if(cljs.core.truth_(inst_18912)){
var statearr_18946_19002 = state_18930__$1;
(statearr_18946_19002[(1)] = (32));

} else {
var statearr_18947_19003 = state_18930__$1;
(statearr_18947_19003[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (32))){
var inst_18889 = (state_18930[(14)]);
var state_18930__$1 = state_18930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18930__$1,(35),out,inst_18889);
} else {
if((state_val_18931 === (33))){
var inst_18880 = (state_18930[(12)]);
var inst_18857 = inst_18880;
var state_18930__$1 = (function (){var statearr_18948 = state_18930;
(statearr_18948[(7)] = inst_18857);

return statearr_18948;
})();
var statearr_18949_19004 = state_18930__$1;
(statearr_18949_19004[(2)] = null);

(statearr_18949_19004[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (13))){
var inst_18857 = (state_18930[(7)]);
var inst_18864 = inst_18857.cljs$lang$protocol_mask$partition0$;
var inst_18865 = (inst_18864 & (64));
var inst_18866 = inst_18857.cljs$core$ISeq$;
var inst_18867 = (cljs.core.PROTOCOL_SENTINEL === inst_18866);
var inst_18868 = ((inst_18865) || (inst_18867));
var state_18930__$1 = state_18930;
if(cljs.core.truth_(inst_18868)){
var statearr_18950_19005 = state_18930__$1;
(statearr_18950_19005[(1)] = (16));

} else {
var statearr_18951_19006 = state_18930__$1;
(statearr_18951_19006[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (22))){
var inst_18890 = (state_18930[(9)]);
var inst_18889 = (state_18930[(14)]);
var inst_18888 = (state_18930[(2)]);
var inst_18889__$1 = cljs.core.nth.call(null,inst_18888,(0),null);
var inst_18890__$1 = cljs.core.nth.call(null,inst_18888,(1),null);
var inst_18891 = (inst_18889__$1 == null);
var inst_18892 = cljs.core._EQ_.call(null,inst_18890__$1,change);
var inst_18893 = ((inst_18891) || (inst_18892));
var state_18930__$1 = (function (){var statearr_18952 = state_18930;
(statearr_18952[(9)] = inst_18890__$1);

(statearr_18952[(14)] = inst_18889__$1);

return statearr_18952;
})();
if(cljs.core.truth_(inst_18893)){
var statearr_18953_19007 = state_18930__$1;
(statearr_18953_19007[(1)] = (23));

} else {
var statearr_18954_19008 = state_18930__$1;
(statearr_18954_19008[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (36))){
var inst_18880 = (state_18930[(12)]);
var inst_18857 = inst_18880;
var state_18930__$1 = (function (){var statearr_18955 = state_18930;
(statearr_18955[(7)] = inst_18857);

return statearr_18955;
})();
var statearr_18956_19009 = state_18930__$1;
(statearr_18956_19009[(2)] = null);

(statearr_18956_19009[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (29))){
var inst_18904 = (state_18930[(10)]);
var state_18930__$1 = state_18930;
var statearr_18957_19010 = state_18930__$1;
(statearr_18957_19010[(2)] = inst_18904);

(statearr_18957_19010[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (6))){
var state_18930__$1 = state_18930;
var statearr_18958_19011 = state_18930__$1;
(statearr_18958_19011[(2)] = false);

(statearr_18958_19011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (28))){
var inst_18900 = (state_18930[(2)]);
var inst_18901 = calc_state.call(null);
var inst_18857 = inst_18901;
var state_18930__$1 = (function (){var statearr_18959 = state_18930;
(statearr_18959[(7)] = inst_18857);

(statearr_18959[(15)] = inst_18900);

return statearr_18959;
})();
var statearr_18960_19012 = state_18930__$1;
(statearr_18960_19012[(2)] = null);

(statearr_18960_19012[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (25))){
var inst_18926 = (state_18930[(2)]);
var state_18930__$1 = state_18930;
var statearr_18961_19013 = state_18930__$1;
(statearr_18961_19013[(2)] = inst_18926);

(statearr_18961_19013[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (34))){
var inst_18924 = (state_18930[(2)]);
var state_18930__$1 = state_18930;
var statearr_18962_19014 = state_18930__$1;
(statearr_18962_19014[(2)] = inst_18924);

(statearr_18962_19014[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (17))){
var state_18930__$1 = state_18930;
var statearr_18963_19015 = state_18930__$1;
(statearr_18963_19015[(2)] = false);

(statearr_18963_19015[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (3))){
var state_18930__$1 = state_18930;
var statearr_18964_19016 = state_18930__$1;
(statearr_18964_19016[(2)] = false);

(statearr_18964_19016[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (12))){
var inst_18928 = (state_18930[(2)]);
var state_18930__$1 = state_18930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18930__$1,inst_18928);
} else {
if((state_val_18931 === (2))){
var inst_18832 = (state_18930[(8)]);
var inst_18837 = inst_18832.cljs$lang$protocol_mask$partition0$;
var inst_18838 = (inst_18837 & (64));
var inst_18839 = inst_18832.cljs$core$ISeq$;
var inst_18840 = (cljs.core.PROTOCOL_SENTINEL === inst_18839);
var inst_18841 = ((inst_18838) || (inst_18840));
var state_18930__$1 = state_18930;
if(cljs.core.truth_(inst_18841)){
var statearr_18965_19017 = state_18930__$1;
(statearr_18965_19017[(1)] = (5));

} else {
var statearr_18966_19018 = state_18930__$1;
(statearr_18966_19018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (23))){
var inst_18889 = (state_18930[(14)]);
var inst_18895 = (inst_18889 == null);
var state_18930__$1 = state_18930;
if(cljs.core.truth_(inst_18895)){
var statearr_18967_19019 = state_18930__$1;
(statearr_18967_19019[(1)] = (26));

} else {
var statearr_18968_19020 = state_18930__$1;
(statearr_18968_19020[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (35))){
var inst_18915 = (state_18930[(2)]);
var state_18930__$1 = state_18930;
if(cljs.core.truth_(inst_18915)){
var statearr_18969_19021 = state_18930__$1;
(statearr_18969_19021[(1)] = (36));

} else {
var statearr_18970_19022 = state_18930__$1;
(statearr_18970_19022[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (19))){
var inst_18857 = (state_18930[(7)]);
var inst_18877 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18857);
var state_18930__$1 = state_18930;
var statearr_18971_19023 = state_18930__$1;
(statearr_18971_19023[(2)] = inst_18877);

(statearr_18971_19023[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (11))){
var inst_18857 = (state_18930[(7)]);
var inst_18861 = (inst_18857 == null);
var inst_18862 = cljs.core.not.call(null,inst_18861);
var state_18930__$1 = state_18930;
if(inst_18862){
var statearr_18972_19024 = state_18930__$1;
(statearr_18972_19024[(1)] = (13));

} else {
var statearr_18973_19025 = state_18930__$1;
(statearr_18973_19025[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (9))){
var inst_18832 = (state_18930[(8)]);
var state_18930__$1 = state_18930;
var statearr_18974_19026 = state_18930__$1;
(statearr_18974_19026[(2)] = inst_18832);

(statearr_18974_19026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (5))){
var state_18930__$1 = state_18930;
var statearr_18975_19027 = state_18930__$1;
(statearr_18975_19027[(2)] = true);

(statearr_18975_19027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (14))){
var state_18930__$1 = state_18930;
var statearr_18976_19028 = state_18930__$1;
(statearr_18976_19028[(2)] = false);

(statearr_18976_19028[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (26))){
var inst_18890 = (state_18930[(9)]);
var inst_18897 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18890);
var state_18930__$1 = state_18930;
var statearr_18977_19029 = state_18930__$1;
(statearr_18977_19029[(2)] = inst_18897);

(statearr_18977_19029[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (16))){
var state_18930__$1 = state_18930;
var statearr_18978_19030 = state_18930__$1;
(statearr_18978_19030[(2)] = true);

(statearr_18978_19030[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (38))){
var inst_18920 = (state_18930[(2)]);
var state_18930__$1 = state_18930;
var statearr_18979_19031 = state_18930__$1;
(statearr_18979_19031[(2)] = inst_18920);

(statearr_18979_19031[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (30))){
var inst_18890 = (state_18930[(9)]);
var inst_18882 = (state_18930[(13)]);
var inst_18881 = (state_18930[(11)]);
var inst_18907 = cljs.core.empty_QMARK_.call(null,inst_18881);
var inst_18908 = inst_18882.call(null,inst_18890);
var inst_18909 = cljs.core.not.call(null,inst_18908);
var inst_18910 = ((inst_18907) && (inst_18909));
var state_18930__$1 = state_18930;
var statearr_18980_19032 = state_18930__$1;
(statearr_18980_19032[(2)] = inst_18910);

(statearr_18980_19032[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (10))){
var inst_18832 = (state_18930[(8)]);
var inst_18853 = (state_18930[(2)]);
var inst_18854 = cljs.core.get.call(null,inst_18853,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18855 = cljs.core.get.call(null,inst_18853,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18856 = cljs.core.get.call(null,inst_18853,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18857 = inst_18832;
var state_18930__$1 = (function (){var statearr_18981 = state_18930;
(statearr_18981[(7)] = inst_18857);

(statearr_18981[(16)] = inst_18856);

(statearr_18981[(17)] = inst_18854);

(statearr_18981[(18)] = inst_18855);

return statearr_18981;
})();
var statearr_18982_19033 = state_18930__$1;
(statearr_18982_19033[(2)] = null);

(statearr_18982_19033[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (18))){
var inst_18872 = (state_18930[(2)]);
var state_18930__$1 = state_18930;
var statearr_18983_19034 = state_18930__$1;
(statearr_18983_19034[(2)] = inst_18872);

(statearr_18983_19034[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (37))){
var state_18930__$1 = state_18930;
var statearr_18984_19035 = state_18930__$1;
(statearr_18984_19035[(2)] = null);

(statearr_18984_19035[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (8))){
var inst_18832 = (state_18930[(8)]);
var inst_18850 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18832);
var state_18930__$1 = state_18930;
var statearr_18985_19036 = state_18930__$1;
(statearr_18985_19036[(2)] = inst_18850);

(statearr_18985_19036[(1)] = (10));


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
});})(c__16067__auto___18990,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15900__auto__,c__16067__auto___18990,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15901__auto__ = null;
var cljs$core$async$mix_$_state_machine__15901__auto____0 = (function (){
var statearr_18986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18986[(0)] = cljs$core$async$mix_$_state_machine__15901__auto__);

(statearr_18986[(1)] = (1));

return statearr_18986;
});
var cljs$core$async$mix_$_state_machine__15901__auto____1 = (function (state_18930){
while(true){
var ret_value__15902__auto__ = (function (){try{while(true){
var result__15903__auto__ = switch__15900__auto__.call(null,state_18930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15903__auto__;
}
break;
}
}catch (e18987){if((e18987 instanceof Object)){
var ex__15904__auto__ = e18987;
var statearr_18988_19037 = state_18930;
(statearr_18988_19037[(5)] = ex__15904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19038 = state_18930;
state_18930 = G__19038;
continue;
} else {
return ret_value__15902__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15901__auto__ = function(state_18930){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15901__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15901__auto____1.call(this,state_18930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15901__auto____0;
cljs$core$async$mix_$_state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15901__auto____1;
return cljs$core$async$mix_$_state_machine__15901__auto__;
})()
;})(switch__15900__auto__,c__16067__auto___18990,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16069__auto__ = (function (){var statearr_18989 = f__16068__auto__.call(null);
(statearr_18989[(6)] = c__16067__auto___18990);

return statearr_18989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16069__auto__);
});})(c__16067__auto___18990,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__19040 = arguments.length;
switch (G__19040) {
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
var G__19044 = arguments.length;
switch (G__19044) {
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
return (function (p1__19042_SHARP_){
if(cljs.core.truth_(p1__19042_SHARP_.call(null,topic))){
return p1__19042_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19042_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19045 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19045 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19046){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19046 = meta19046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19047,meta19046__$1){
var self__ = this;
var _19047__$1 = this;
return (new cljs.core.async.t_cljs$core$async19045(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19046__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19045.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19047){
var self__ = this;
var _19047__$1 = this;
return self__.meta19046;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19045.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19045.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19045.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19045.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19045.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19045.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19045.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19045.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19046","meta19046",1809460533,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19045.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19045.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19045";

cljs.core.async.t_cljs$core$async19045.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async19045");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19045.
 */
cljs.core.async.__GT_t_cljs$core$async19045 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19045(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19046){
return (new cljs.core.async.t_cljs$core$async19045(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19046));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19045(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16067__auto___19165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16067__auto___19165,mults,ensure_mult,p){
return (function (){
var f__16068__auto__ = (function (){var switch__15900__auto__ = ((function (c__16067__auto___19165,mults,ensure_mult,p){
return (function (state_19119){
var state_val_19120 = (state_19119[(1)]);
if((state_val_19120 === (7))){
var inst_19115 = (state_19119[(2)]);
var state_19119__$1 = state_19119;
var statearr_19121_19166 = state_19119__$1;
(statearr_19121_19166[(2)] = inst_19115);

(statearr_19121_19166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19120 === (20))){
var state_19119__$1 = state_19119;
var statearr_19122_19167 = state_19119__$1;
(statearr_19122_19167[(2)] = null);

(statearr_19122_19167[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19120 === (1))){
var state_19119__$1 = state_19119;
var statearr_19123_19168 = state_19119__$1;
(statearr_19123_19168[(2)] = null);

(statearr_19123_19168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19120 === (24))){
var inst_19098 = (state_19119[(7)]);
var inst_19107 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19098);
var state_19119__$1 = state_19119;
var statearr_19124_19169 = state_19119__$1;
(statearr_19124_19169[(2)] = inst_19107);

(statearr_19124_19169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19120 === (4))){
var inst_19050 = (state_19119[(8)]);
var inst_19050__$1 = (state_19119[(2)]);
var inst_19051 = (inst_19050__$1 == null);
var state_19119__$1 = (function (){var statearr_19125 = state_19119;
(statearr_19125[(8)] = inst_19050__$1);

return statearr_19125;
})();
if(cljs.core.truth_(inst_19051)){
var statearr_19126_19170 = state_19119__$1;
(statearr_19126_19170[(1)] = (5));

} else {
var statearr_19127_19171 = state_19119__$1;
(statearr_19127_19171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19120 === (15))){
var inst_19092 = (state_19119[(2)]);
var state_19119__$1 = state_19119;
var statearr_19128_19172 = state_19119__$1;
(statearr_19128_19172[(2)] = inst_19092);

(statearr_19128_19172[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19120 === (21))){
var inst_19112 = (state_19119[(2)]);
var state_19119__$1 = (function (){var statearr_19129 = state_19119;
(statearr_19129[(9)] = inst_19112);

return statearr_19129;
})();
var statearr_19130_19173 = state_19119__$1;
(statearr_19130_19173[(2)] = null);

(statearr_19130_19173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19120 === (13))){
var inst_19074 = (state_19119[(10)]);
var inst_19076 = cljs.core.chunked_seq_QMARK_.call(null,inst_19074);
var state_19119__$1 = state_19119;
if(inst_19076){
var statearr_19131_19174 = state_19119__$1;
(statearr_19131_19174[(1)] = (16));

} else {
var statearr_19132_19175 = state_19119__$1;
(statearr_19132_19175[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19120 === (22))){
var inst_19104 = (state_19119[(2)]);
var state_19119__$1 = state_19119;
if(cljs.core.truth_(inst_19104)){
var statearr_19133_19176 = state_19119__$1;
(statearr_19133_19176[(1)] = (23));

} else {
var statearr_19134_19177 = state_19119__$1;
(statearr_19134_19177[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19120 === (6))){
var inst_19098 = (state_19119[(7)]);
var inst_19050 = (state_19119[(8)]);
var inst_19100 = (state_19119[(11)]);
var inst_19098__$1 = topic_fn.call(null,inst_19050);
var inst_19099 = cljs.core.deref.call(null,mults);
var inst_19100__$1 = cljs.core.get.call(null,inst_19099,inst_19098__$1);
var state_19119__$1 = (function (){var statearr_19135 = state_19119;
(statearr_19135[(7)] = inst_19098__$1);

(statearr_19135[(11)] = inst_19100__$1);

return statearr_19135;
})();
if(cljs.core.truth_(inst_19100__$1)){
var statearr_19136_19178 = state_19119__$1;
(statearr_19136_19178[(1)] = (19));

} else {
var statearr_19137_19179 = state_19119__$1;
(statearr_19137_19179[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19120 === (25))){
var inst_19109 = (state_19119[(2)]);
var state_19119__$1 = state_19119;
var statearr_19138_19180 = state_19119__$1;
(statearr_19138_19180[(2)] = inst_19109);

(statearr_19138_19180[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19120 === (17))){
var inst_19074 = (state_19119[(10)]);
var inst_19083 = cljs.core.first.call(null,inst_19074);
var inst_19084 = cljs.core.async.muxch_STAR_.call(null,inst_19083);
var inst_19085 = cljs.core.async.close_BANG_.call(null,inst_19084);
var inst_19086 = cljs.core.next.call(null,inst_19074);
var inst_19060 = inst_19086;
var inst_19061 = null;
var inst_19062 = (0);
var inst_19063 = (0);
var state_19119__$1 = (function (){var statearr_19139 = state_19119;
(statearr_19139[(12)] = inst_19063);

(statearr_19139[(13)] = inst_19060);

(statearr_19139[(14)] = inst_19061);

(statearr_19139[(15)] = inst_19062);

(statearr_19139[(16)] = inst_19085);

return statearr_19139;
})();
var statearr_19140_19181 = state_19119__$1;
(statearr_19140_19181[(2)] = null);

(statearr_19140_19181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19120 === (3))){
var inst_19117 = (state_19119[(2)]);
var state_19119__$1 = state_19119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19119__$1,inst_19117);
} else {
if((state_val_19120 === (12))){
var inst_19094 = (state_19119[(2)]);
var state_19119__$1 = state_19119;
var statearr_19141_19182 = state_19119__$1;
(statearr_19141_19182[(2)] = inst_19094);

(statearr_19141_19182[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19120 === (2))){
var state_19119__$1 = state_19119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19119__$1,(4),ch);
} else {
if((state_val_19120 === (23))){
var state_19119__$1 = state_19119;
var statearr_19142_19183 = state_19119__$1;
(statearr_19142_19183[(2)] = null);

(statearr_19142_19183[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19120 === (19))){
var inst_19050 = (state_19119[(8)]);
var inst_19100 = (state_19119[(11)]);
var inst_19102 = cljs.core.async.muxch_STAR_.call(null,inst_19100);
var state_19119__$1 = state_19119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19119__$1,(22),inst_19102,inst_19050);
} else {
if((state_val_19120 === (11))){
var inst_19060 = (state_19119[(13)]);
var inst_19074 = (state_19119[(10)]);
var inst_19074__$1 = cljs.core.seq.call(null,inst_19060);
var state_19119__$1 = (function (){var statearr_19143 = state_19119;
(statearr_19143[(10)] = inst_19074__$1);

return statearr_19143;
})();
if(inst_19074__$1){
var statearr_19144_19184 = state_19119__$1;
(statearr_19144_19184[(1)] = (13));

} else {
var statearr_19145_19185 = state_19119__$1;
(statearr_19145_19185[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19120 === (9))){
var inst_19096 = (state_19119[(2)]);
var state_19119__$1 = state_19119;
var statearr_19146_19186 = state_19119__$1;
(statearr_19146_19186[(2)] = inst_19096);

(statearr_19146_19186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19120 === (5))){
var inst_19057 = cljs.core.deref.call(null,mults);
var inst_19058 = cljs.core.vals.call(null,inst_19057);
var inst_19059 = cljs.core.seq.call(null,inst_19058);
var inst_19060 = inst_19059;
var inst_19061 = null;
var inst_19062 = (0);
var inst_19063 = (0);
var state_19119__$1 = (function (){var statearr_19147 = state_19119;
(statearr_19147[(12)] = inst_19063);

(statearr_19147[(13)] = inst_19060);

(statearr_19147[(14)] = inst_19061);

(statearr_19147[(15)] = inst_19062);

return statearr_19147;
})();
var statearr_19148_19187 = state_19119__$1;
(statearr_19148_19187[(2)] = null);

(statearr_19148_19187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19120 === (14))){
var state_19119__$1 = state_19119;
var statearr_19152_19188 = state_19119__$1;
(statearr_19152_19188[(2)] = null);

(statearr_19152_19188[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19120 === (16))){
var inst_19074 = (state_19119[(10)]);
var inst_19078 = cljs.core.chunk_first.call(null,inst_19074);
var inst_19079 = cljs.core.chunk_rest.call(null,inst_19074);
var inst_19080 = cljs.core.count.call(null,inst_19078);
var inst_19060 = inst_19079;
var inst_19061 = inst_19078;
var inst_19062 = inst_19080;
var inst_19063 = (0);
var state_19119__$1 = (function (){var statearr_19153 = state_19119;
(statearr_19153[(12)] = inst_19063);

(statearr_19153[(13)] = inst_19060);

(statearr_19153[(14)] = inst_19061);

(statearr_19153[(15)] = inst_19062);

return statearr_19153;
})();
var statearr_19154_19189 = state_19119__$1;
(statearr_19154_19189[(2)] = null);

(statearr_19154_19189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19120 === (10))){
var inst_19063 = (state_19119[(12)]);
var inst_19060 = (state_19119[(13)]);
var inst_19061 = (state_19119[(14)]);
var inst_19062 = (state_19119[(15)]);
var inst_19068 = cljs.core._nth.call(null,inst_19061,inst_19063);
var inst_19069 = cljs.core.async.muxch_STAR_.call(null,inst_19068);
var inst_19070 = cljs.core.async.close_BANG_.call(null,inst_19069);
var inst_19071 = (inst_19063 + (1));
var tmp19149 = inst_19060;
var tmp19150 = inst_19061;
var tmp19151 = inst_19062;
var inst_19060__$1 = tmp19149;
var inst_19061__$1 = tmp19150;
var inst_19062__$1 = tmp19151;
var inst_19063__$1 = inst_19071;
var state_19119__$1 = (function (){var statearr_19155 = state_19119;
(statearr_19155[(12)] = inst_19063__$1);

(statearr_19155[(13)] = inst_19060__$1);

(statearr_19155[(14)] = inst_19061__$1);

(statearr_19155[(15)] = inst_19062__$1);

(statearr_19155[(17)] = inst_19070);

return statearr_19155;
})();
var statearr_19156_19190 = state_19119__$1;
(statearr_19156_19190[(2)] = null);

(statearr_19156_19190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19120 === (18))){
var inst_19089 = (state_19119[(2)]);
var state_19119__$1 = state_19119;
var statearr_19157_19191 = state_19119__$1;
(statearr_19157_19191[(2)] = inst_19089);

(statearr_19157_19191[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19120 === (8))){
var inst_19063 = (state_19119[(12)]);
var inst_19062 = (state_19119[(15)]);
var inst_19065 = (inst_19063 < inst_19062);
var inst_19066 = inst_19065;
var state_19119__$1 = state_19119;
if(cljs.core.truth_(inst_19066)){
var statearr_19158_19192 = state_19119__$1;
(statearr_19158_19192[(1)] = (10));

} else {
var statearr_19159_19193 = state_19119__$1;
(statearr_19159_19193[(1)] = (11));

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
});})(c__16067__auto___19165,mults,ensure_mult,p))
;
return ((function (switch__15900__auto__,c__16067__auto___19165,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15901__auto__ = null;
var cljs$core$async$state_machine__15901__auto____0 = (function (){
var statearr_19160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19160[(0)] = cljs$core$async$state_machine__15901__auto__);

(statearr_19160[(1)] = (1));

return statearr_19160;
});
var cljs$core$async$state_machine__15901__auto____1 = (function (state_19119){
while(true){
var ret_value__15902__auto__ = (function (){try{while(true){
var result__15903__auto__ = switch__15900__auto__.call(null,state_19119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15903__auto__;
}
break;
}
}catch (e19161){if((e19161 instanceof Object)){
var ex__15904__auto__ = e19161;
var statearr_19162_19194 = state_19119;
(statearr_19162_19194[(5)] = ex__15904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19195 = state_19119;
state_19119 = G__19195;
continue;
} else {
return ret_value__15902__auto__;
}
break;
}
});
cljs$core$async$state_machine__15901__auto__ = function(state_19119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15901__auto____1.call(this,state_19119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15901__auto____0;
cljs$core$async$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15901__auto____1;
return cljs$core$async$state_machine__15901__auto__;
})()
;})(switch__15900__auto__,c__16067__auto___19165,mults,ensure_mult,p))
})();
var state__16069__auto__ = (function (){var statearr_19163 = f__16068__auto__.call(null);
(statearr_19163[(6)] = c__16067__auto___19165);

return statearr_19163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16069__auto__);
});})(c__16067__auto___19165,mults,ensure_mult,p))
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
var G__19197 = arguments.length;
switch (G__19197) {
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
var G__19200 = arguments.length;
switch (G__19200) {
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
var G__19203 = arguments.length;
switch (G__19203) {
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
var c__16067__auto___19270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16067__auto___19270,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16068__auto__ = (function (){var switch__15900__auto__ = ((function (c__16067__auto___19270,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19242){
var state_val_19243 = (state_19242[(1)]);
if((state_val_19243 === (7))){
var state_19242__$1 = state_19242;
var statearr_19244_19271 = state_19242__$1;
(statearr_19244_19271[(2)] = null);

(statearr_19244_19271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (1))){
var state_19242__$1 = state_19242;
var statearr_19245_19272 = state_19242__$1;
(statearr_19245_19272[(2)] = null);

(statearr_19245_19272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (4))){
var inst_19206 = (state_19242[(7)]);
var inst_19208 = (inst_19206 < cnt);
var state_19242__$1 = state_19242;
if(cljs.core.truth_(inst_19208)){
var statearr_19246_19273 = state_19242__$1;
(statearr_19246_19273[(1)] = (6));

} else {
var statearr_19247_19274 = state_19242__$1;
(statearr_19247_19274[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (15))){
var inst_19238 = (state_19242[(2)]);
var state_19242__$1 = state_19242;
var statearr_19248_19275 = state_19242__$1;
(statearr_19248_19275[(2)] = inst_19238);

(statearr_19248_19275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (13))){
var inst_19231 = cljs.core.async.close_BANG_.call(null,out);
var state_19242__$1 = state_19242;
var statearr_19249_19276 = state_19242__$1;
(statearr_19249_19276[(2)] = inst_19231);

(statearr_19249_19276[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (6))){
var state_19242__$1 = state_19242;
var statearr_19250_19277 = state_19242__$1;
(statearr_19250_19277[(2)] = null);

(statearr_19250_19277[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (3))){
var inst_19240 = (state_19242[(2)]);
var state_19242__$1 = state_19242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19242__$1,inst_19240);
} else {
if((state_val_19243 === (12))){
var inst_19228 = (state_19242[(8)]);
var inst_19228__$1 = (state_19242[(2)]);
var inst_19229 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19228__$1);
var state_19242__$1 = (function (){var statearr_19251 = state_19242;
(statearr_19251[(8)] = inst_19228__$1);

return statearr_19251;
})();
if(cljs.core.truth_(inst_19229)){
var statearr_19252_19278 = state_19242__$1;
(statearr_19252_19278[(1)] = (13));

} else {
var statearr_19253_19279 = state_19242__$1;
(statearr_19253_19279[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (2))){
var inst_19205 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19206 = (0);
var state_19242__$1 = (function (){var statearr_19254 = state_19242;
(statearr_19254[(9)] = inst_19205);

(statearr_19254[(7)] = inst_19206);

return statearr_19254;
})();
var statearr_19255_19280 = state_19242__$1;
(statearr_19255_19280[(2)] = null);

(statearr_19255_19280[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (11))){
var inst_19206 = (state_19242[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19242,(10),Object,null,(9));
var inst_19215 = chs__$1.call(null,inst_19206);
var inst_19216 = done.call(null,inst_19206);
var inst_19217 = cljs.core.async.take_BANG_.call(null,inst_19215,inst_19216);
var state_19242__$1 = state_19242;
var statearr_19256_19281 = state_19242__$1;
(statearr_19256_19281[(2)] = inst_19217);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19242__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (9))){
var inst_19206 = (state_19242[(7)]);
var inst_19219 = (state_19242[(2)]);
var inst_19220 = (inst_19206 + (1));
var inst_19206__$1 = inst_19220;
var state_19242__$1 = (function (){var statearr_19257 = state_19242;
(statearr_19257[(10)] = inst_19219);

(statearr_19257[(7)] = inst_19206__$1);

return statearr_19257;
})();
var statearr_19258_19282 = state_19242__$1;
(statearr_19258_19282[(2)] = null);

(statearr_19258_19282[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (5))){
var inst_19226 = (state_19242[(2)]);
var state_19242__$1 = (function (){var statearr_19259 = state_19242;
(statearr_19259[(11)] = inst_19226);

return statearr_19259;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19242__$1,(12),dchan);
} else {
if((state_val_19243 === (14))){
var inst_19228 = (state_19242[(8)]);
var inst_19233 = cljs.core.apply.call(null,f,inst_19228);
var state_19242__$1 = state_19242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19242__$1,(16),out,inst_19233);
} else {
if((state_val_19243 === (16))){
var inst_19235 = (state_19242[(2)]);
var state_19242__$1 = (function (){var statearr_19260 = state_19242;
(statearr_19260[(12)] = inst_19235);

return statearr_19260;
})();
var statearr_19261_19283 = state_19242__$1;
(statearr_19261_19283[(2)] = null);

(statearr_19261_19283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (10))){
var inst_19210 = (state_19242[(2)]);
var inst_19211 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19242__$1 = (function (){var statearr_19262 = state_19242;
(statearr_19262[(13)] = inst_19210);

return statearr_19262;
})();
var statearr_19263_19284 = state_19242__$1;
(statearr_19263_19284[(2)] = inst_19211);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19242__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (8))){
var inst_19224 = (state_19242[(2)]);
var state_19242__$1 = state_19242;
var statearr_19264_19285 = state_19242__$1;
(statearr_19264_19285[(2)] = inst_19224);

(statearr_19264_19285[(1)] = (5));


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
});})(c__16067__auto___19270,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15900__auto__,c__16067__auto___19270,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15901__auto__ = null;
var cljs$core$async$state_machine__15901__auto____0 = (function (){
var statearr_19265 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19265[(0)] = cljs$core$async$state_machine__15901__auto__);

(statearr_19265[(1)] = (1));

return statearr_19265;
});
var cljs$core$async$state_machine__15901__auto____1 = (function (state_19242){
while(true){
var ret_value__15902__auto__ = (function (){try{while(true){
var result__15903__auto__ = switch__15900__auto__.call(null,state_19242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15903__auto__;
}
break;
}
}catch (e19266){if((e19266 instanceof Object)){
var ex__15904__auto__ = e19266;
var statearr_19267_19286 = state_19242;
(statearr_19267_19286[(5)] = ex__15904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19287 = state_19242;
state_19242 = G__19287;
continue;
} else {
return ret_value__15902__auto__;
}
break;
}
});
cljs$core$async$state_machine__15901__auto__ = function(state_19242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15901__auto____1.call(this,state_19242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15901__auto____0;
cljs$core$async$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15901__auto____1;
return cljs$core$async$state_machine__15901__auto__;
})()
;})(switch__15900__auto__,c__16067__auto___19270,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16069__auto__ = (function (){var statearr_19268 = f__16068__auto__.call(null);
(statearr_19268[(6)] = c__16067__auto___19270);

return statearr_19268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16069__auto__);
});})(c__16067__auto___19270,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__19290 = arguments.length;
switch (G__19290) {
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
var c__16067__auto___19344 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16067__auto___19344,out){
return (function (){
var f__16068__auto__ = (function (){var switch__15900__auto__ = ((function (c__16067__auto___19344,out){
return (function (state_19322){
var state_val_19323 = (state_19322[(1)]);
if((state_val_19323 === (7))){
var inst_19301 = (state_19322[(7)]);
var inst_19302 = (state_19322[(8)]);
var inst_19301__$1 = (state_19322[(2)]);
var inst_19302__$1 = cljs.core.nth.call(null,inst_19301__$1,(0),null);
var inst_19303 = cljs.core.nth.call(null,inst_19301__$1,(1),null);
var inst_19304 = (inst_19302__$1 == null);
var state_19322__$1 = (function (){var statearr_19324 = state_19322;
(statearr_19324[(7)] = inst_19301__$1);

(statearr_19324[(9)] = inst_19303);

(statearr_19324[(8)] = inst_19302__$1);

return statearr_19324;
})();
if(cljs.core.truth_(inst_19304)){
var statearr_19325_19345 = state_19322__$1;
(statearr_19325_19345[(1)] = (8));

} else {
var statearr_19326_19346 = state_19322__$1;
(statearr_19326_19346[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19323 === (1))){
var inst_19291 = cljs.core.vec.call(null,chs);
var inst_19292 = inst_19291;
var state_19322__$1 = (function (){var statearr_19327 = state_19322;
(statearr_19327[(10)] = inst_19292);

return statearr_19327;
})();
var statearr_19328_19347 = state_19322__$1;
(statearr_19328_19347[(2)] = null);

(statearr_19328_19347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19323 === (4))){
var inst_19292 = (state_19322[(10)]);
var state_19322__$1 = state_19322;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19322__$1,(7),inst_19292);
} else {
if((state_val_19323 === (6))){
var inst_19318 = (state_19322[(2)]);
var state_19322__$1 = state_19322;
var statearr_19329_19348 = state_19322__$1;
(statearr_19329_19348[(2)] = inst_19318);

(statearr_19329_19348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19323 === (3))){
var inst_19320 = (state_19322[(2)]);
var state_19322__$1 = state_19322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19322__$1,inst_19320);
} else {
if((state_val_19323 === (2))){
var inst_19292 = (state_19322[(10)]);
var inst_19294 = cljs.core.count.call(null,inst_19292);
var inst_19295 = (inst_19294 > (0));
var state_19322__$1 = state_19322;
if(cljs.core.truth_(inst_19295)){
var statearr_19331_19349 = state_19322__$1;
(statearr_19331_19349[(1)] = (4));

} else {
var statearr_19332_19350 = state_19322__$1;
(statearr_19332_19350[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19323 === (11))){
var inst_19292 = (state_19322[(10)]);
var inst_19311 = (state_19322[(2)]);
var tmp19330 = inst_19292;
var inst_19292__$1 = tmp19330;
var state_19322__$1 = (function (){var statearr_19333 = state_19322;
(statearr_19333[(11)] = inst_19311);

(statearr_19333[(10)] = inst_19292__$1);

return statearr_19333;
})();
var statearr_19334_19351 = state_19322__$1;
(statearr_19334_19351[(2)] = null);

(statearr_19334_19351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19323 === (9))){
var inst_19302 = (state_19322[(8)]);
var state_19322__$1 = state_19322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19322__$1,(11),out,inst_19302);
} else {
if((state_val_19323 === (5))){
var inst_19316 = cljs.core.async.close_BANG_.call(null,out);
var state_19322__$1 = state_19322;
var statearr_19335_19352 = state_19322__$1;
(statearr_19335_19352[(2)] = inst_19316);

(statearr_19335_19352[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19323 === (10))){
var inst_19314 = (state_19322[(2)]);
var state_19322__$1 = state_19322;
var statearr_19336_19353 = state_19322__$1;
(statearr_19336_19353[(2)] = inst_19314);

(statearr_19336_19353[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19323 === (8))){
var inst_19301 = (state_19322[(7)]);
var inst_19303 = (state_19322[(9)]);
var inst_19292 = (state_19322[(10)]);
var inst_19302 = (state_19322[(8)]);
var inst_19306 = (function (){var cs = inst_19292;
var vec__19297 = inst_19301;
var v = inst_19302;
var c = inst_19303;
return ((function (cs,vec__19297,v,c,inst_19301,inst_19303,inst_19292,inst_19302,state_val_19323,c__16067__auto___19344,out){
return (function (p1__19288_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19288_SHARP_);
});
;})(cs,vec__19297,v,c,inst_19301,inst_19303,inst_19292,inst_19302,state_val_19323,c__16067__auto___19344,out))
})();
var inst_19307 = cljs.core.filterv.call(null,inst_19306,inst_19292);
var inst_19292__$1 = inst_19307;
var state_19322__$1 = (function (){var statearr_19337 = state_19322;
(statearr_19337[(10)] = inst_19292__$1);

return statearr_19337;
})();
var statearr_19338_19354 = state_19322__$1;
(statearr_19338_19354[(2)] = null);

(statearr_19338_19354[(1)] = (2));


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
});})(c__16067__auto___19344,out))
;
return ((function (switch__15900__auto__,c__16067__auto___19344,out){
return (function() {
var cljs$core$async$state_machine__15901__auto__ = null;
var cljs$core$async$state_machine__15901__auto____0 = (function (){
var statearr_19339 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19339[(0)] = cljs$core$async$state_machine__15901__auto__);

(statearr_19339[(1)] = (1));

return statearr_19339;
});
var cljs$core$async$state_machine__15901__auto____1 = (function (state_19322){
while(true){
var ret_value__15902__auto__ = (function (){try{while(true){
var result__15903__auto__ = switch__15900__auto__.call(null,state_19322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15903__auto__;
}
break;
}
}catch (e19340){if((e19340 instanceof Object)){
var ex__15904__auto__ = e19340;
var statearr_19341_19355 = state_19322;
(statearr_19341_19355[(5)] = ex__15904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19356 = state_19322;
state_19322 = G__19356;
continue;
} else {
return ret_value__15902__auto__;
}
break;
}
});
cljs$core$async$state_machine__15901__auto__ = function(state_19322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15901__auto____1.call(this,state_19322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15901__auto____0;
cljs$core$async$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15901__auto____1;
return cljs$core$async$state_machine__15901__auto__;
})()
;})(switch__15900__auto__,c__16067__auto___19344,out))
})();
var state__16069__auto__ = (function (){var statearr_19342 = f__16068__auto__.call(null);
(statearr_19342[(6)] = c__16067__auto___19344);

return statearr_19342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16069__auto__);
});})(c__16067__auto___19344,out))
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
var G__19358 = arguments.length;
switch (G__19358) {
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
var c__16067__auto___19403 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16067__auto___19403,out){
return (function (){
var f__16068__auto__ = (function (){var switch__15900__auto__ = ((function (c__16067__auto___19403,out){
return (function (state_19382){
var state_val_19383 = (state_19382[(1)]);
if((state_val_19383 === (7))){
var inst_19364 = (state_19382[(7)]);
var inst_19364__$1 = (state_19382[(2)]);
var inst_19365 = (inst_19364__$1 == null);
var inst_19366 = cljs.core.not.call(null,inst_19365);
var state_19382__$1 = (function (){var statearr_19384 = state_19382;
(statearr_19384[(7)] = inst_19364__$1);

return statearr_19384;
})();
if(inst_19366){
var statearr_19385_19404 = state_19382__$1;
(statearr_19385_19404[(1)] = (8));

} else {
var statearr_19386_19405 = state_19382__$1;
(statearr_19386_19405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19383 === (1))){
var inst_19359 = (0);
var state_19382__$1 = (function (){var statearr_19387 = state_19382;
(statearr_19387[(8)] = inst_19359);

return statearr_19387;
})();
var statearr_19388_19406 = state_19382__$1;
(statearr_19388_19406[(2)] = null);

(statearr_19388_19406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19383 === (4))){
var state_19382__$1 = state_19382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19382__$1,(7),ch);
} else {
if((state_val_19383 === (6))){
var inst_19377 = (state_19382[(2)]);
var state_19382__$1 = state_19382;
var statearr_19389_19407 = state_19382__$1;
(statearr_19389_19407[(2)] = inst_19377);

(statearr_19389_19407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19383 === (3))){
var inst_19379 = (state_19382[(2)]);
var inst_19380 = cljs.core.async.close_BANG_.call(null,out);
var state_19382__$1 = (function (){var statearr_19390 = state_19382;
(statearr_19390[(9)] = inst_19379);

return statearr_19390;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19382__$1,inst_19380);
} else {
if((state_val_19383 === (2))){
var inst_19359 = (state_19382[(8)]);
var inst_19361 = (inst_19359 < n);
var state_19382__$1 = state_19382;
if(cljs.core.truth_(inst_19361)){
var statearr_19391_19408 = state_19382__$1;
(statearr_19391_19408[(1)] = (4));

} else {
var statearr_19392_19409 = state_19382__$1;
(statearr_19392_19409[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19383 === (11))){
var inst_19359 = (state_19382[(8)]);
var inst_19369 = (state_19382[(2)]);
var inst_19370 = (inst_19359 + (1));
var inst_19359__$1 = inst_19370;
var state_19382__$1 = (function (){var statearr_19393 = state_19382;
(statearr_19393[(8)] = inst_19359__$1);

(statearr_19393[(10)] = inst_19369);

return statearr_19393;
})();
var statearr_19394_19410 = state_19382__$1;
(statearr_19394_19410[(2)] = null);

(statearr_19394_19410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19383 === (9))){
var state_19382__$1 = state_19382;
var statearr_19395_19411 = state_19382__$1;
(statearr_19395_19411[(2)] = null);

(statearr_19395_19411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19383 === (5))){
var state_19382__$1 = state_19382;
var statearr_19396_19412 = state_19382__$1;
(statearr_19396_19412[(2)] = null);

(statearr_19396_19412[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19383 === (10))){
var inst_19374 = (state_19382[(2)]);
var state_19382__$1 = state_19382;
var statearr_19397_19413 = state_19382__$1;
(statearr_19397_19413[(2)] = inst_19374);

(statearr_19397_19413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19383 === (8))){
var inst_19364 = (state_19382[(7)]);
var state_19382__$1 = state_19382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19382__$1,(11),out,inst_19364);
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
});})(c__16067__auto___19403,out))
;
return ((function (switch__15900__auto__,c__16067__auto___19403,out){
return (function() {
var cljs$core$async$state_machine__15901__auto__ = null;
var cljs$core$async$state_machine__15901__auto____0 = (function (){
var statearr_19398 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19398[(0)] = cljs$core$async$state_machine__15901__auto__);

(statearr_19398[(1)] = (1));

return statearr_19398;
});
var cljs$core$async$state_machine__15901__auto____1 = (function (state_19382){
while(true){
var ret_value__15902__auto__ = (function (){try{while(true){
var result__15903__auto__ = switch__15900__auto__.call(null,state_19382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15903__auto__;
}
break;
}
}catch (e19399){if((e19399 instanceof Object)){
var ex__15904__auto__ = e19399;
var statearr_19400_19414 = state_19382;
(statearr_19400_19414[(5)] = ex__15904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19415 = state_19382;
state_19382 = G__19415;
continue;
} else {
return ret_value__15902__auto__;
}
break;
}
});
cljs$core$async$state_machine__15901__auto__ = function(state_19382){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15901__auto____1.call(this,state_19382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15901__auto____0;
cljs$core$async$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15901__auto____1;
return cljs$core$async$state_machine__15901__auto__;
})()
;})(switch__15900__auto__,c__16067__auto___19403,out))
})();
var state__16069__auto__ = (function (){var statearr_19401 = f__16068__auto__.call(null);
(statearr_19401[(6)] = c__16067__auto___19403);

return statearr_19401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16069__auto__);
});})(c__16067__auto___19403,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19417 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19417 = (function (f,ch,meta19418){
this.f = f;
this.ch = ch;
this.meta19418 = meta19418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19419,meta19418__$1){
var self__ = this;
var _19419__$1 = this;
return (new cljs.core.async.t_cljs$core$async19417(self__.f,self__.ch,meta19418__$1));
});

cljs.core.async.t_cljs$core$async19417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19419){
var self__ = this;
var _19419__$1 = this;
return self__.meta19418;
});

cljs.core.async.t_cljs$core$async19417.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19417.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19417.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19417.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19417.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19420 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19420 = (function (f,ch,meta19418,_,fn1,meta19421){
this.f = f;
this.ch = ch;
this.meta19418 = meta19418;
this._ = _;
this.fn1 = fn1;
this.meta19421 = meta19421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19422,meta19421__$1){
var self__ = this;
var _19422__$1 = this;
return (new cljs.core.async.t_cljs$core$async19420(self__.f,self__.ch,self__.meta19418,self__._,self__.fn1,meta19421__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19422){
var self__ = this;
var _19422__$1 = this;
return self__.meta19421;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19416_SHARP_){
return f1.call(null,(((p1__19416_SHARP_ == null))?null:self__.f.call(null,p1__19416_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19420.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19418","meta19418",1509194201,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19417","cljs.core.async/t_cljs$core$async19417",-862862898,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19421","meta19421",1915013714,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19420.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19420";

cljs.core.async.t_cljs$core$async19420.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async19420");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19420.
 */
cljs.core.async.__GT_t_cljs$core$async19420 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19420(f__$1,ch__$1,meta19418__$1,___$2,fn1__$1,meta19421){
return (new cljs.core.async.t_cljs$core$async19420(f__$1,ch__$1,meta19418__$1,___$2,fn1__$1,meta19421));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19420(self__.f,self__.ch,self__.meta19418,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async19417.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19417.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19417.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19418","meta19418",1509194201,null)], null);
});

cljs.core.async.t_cljs$core$async19417.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19417";

cljs.core.async.t_cljs$core$async19417.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async19417");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19417.
 */
cljs.core.async.__GT_t_cljs$core$async19417 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19417(f__$1,ch__$1,meta19418){
return (new cljs.core.async.t_cljs$core$async19417(f__$1,ch__$1,meta19418));
});

}

return (new cljs.core.async.t_cljs$core$async19417(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19423 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19423 = (function (f,ch,meta19424){
this.f = f;
this.ch = ch;
this.meta19424 = meta19424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19425,meta19424__$1){
var self__ = this;
var _19425__$1 = this;
return (new cljs.core.async.t_cljs$core$async19423(self__.f,self__.ch,meta19424__$1));
});

cljs.core.async.t_cljs$core$async19423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19425){
var self__ = this;
var _19425__$1 = this;
return self__.meta19424;
});

cljs.core.async.t_cljs$core$async19423.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19423.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19423.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19423.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19423.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19423.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19423.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19424","meta19424",1539285043,null)], null);
});

cljs.core.async.t_cljs$core$async19423.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19423";

cljs.core.async.t_cljs$core$async19423.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async19423");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19423.
 */
cljs.core.async.__GT_t_cljs$core$async19423 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19423(f__$1,ch__$1,meta19424){
return (new cljs.core.async.t_cljs$core$async19423(f__$1,ch__$1,meta19424));
});

}

return (new cljs.core.async.t_cljs$core$async19423(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19426 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19426 = (function (p,ch,meta19427){
this.p = p;
this.ch = ch;
this.meta19427 = meta19427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19428,meta19427__$1){
var self__ = this;
var _19428__$1 = this;
return (new cljs.core.async.t_cljs$core$async19426(self__.p,self__.ch,meta19427__$1));
});

cljs.core.async.t_cljs$core$async19426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19428){
var self__ = this;
var _19428__$1 = this;
return self__.meta19427;
});

cljs.core.async.t_cljs$core$async19426.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19426.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19426.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19426.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19426.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19426.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19426.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19426.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19427","meta19427",195477383,null)], null);
});

cljs.core.async.t_cljs$core$async19426.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19426.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19426";

cljs.core.async.t_cljs$core$async19426.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async19426");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19426.
 */
cljs.core.async.__GT_t_cljs$core$async19426 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19426(p__$1,ch__$1,meta19427){
return (new cljs.core.async.t_cljs$core$async19426(p__$1,ch__$1,meta19427));
});

}

return (new cljs.core.async.t_cljs$core$async19426(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19430 = arguments.length;
switch (G__19430) {
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
var c__16067__auto___19470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16067__auto___19470,out){
return (function (){
var f__16068__auto__ = (function (){var switch__15900__auto__ = ((function (c__16067__auto___19470,out){
return (function (state_19451){
var state_val_19452 = (state_19451[(1)]);
if((state_val_19452 === (7))){
var inst_19447 = (state_19451[(2)]);
var state_19451__$1 = state_19451;
var statearr_19453_19471 = state_19451__$1;
(statearr_19453_19471[(2)] = inst_19447);

(statearr_19453_19471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19452 === (1))){
var state_19451__$1 = state_19451;
var statearr_19454_19472 = state_19451__$1;
(statearr_19454_19472[(2)] = null);

(statearr_19454_19472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19452 === (4))){
var inst_19433 = (state_19451[(7)]);
var inst_19433__$1 = (state_19451[(2)]);
var inst_19434 = (inst_19433__$1 == null);
var state_19451__$1 = (function (){var statearr_19455 = state_19451;
(statearr_19455[(7)] = inst_19433__$1);

return statearr_19455;
})();
if(cljs.core.truth_(inst_19434)){
var statearr_19456_19473 = state_19451__$1;
(statearr_19456_19473[(1)] = (5));

} else {
var statearr_19457_19474 = state_19451__$1;
(statearr_19457_19474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19452 === (6))){
var inst_19433 = (state_19451[(7)]);
var inst_19438 = p.call(null,inst_19433);
var state_19451__$1 = state_19451;
if(cljs.core.truth_(inst_19438)){
var statearr_19458_19475 = state_19451__$1;
(statearr_19458_19475[(1)] = (8));

} else {
var statearr_19459_19476 = state_19451__$1;
(statearr_19459_19476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19452 === (3))){
var inst_19449 = (state_19451[(2)]);
var state_19451__$1 = state_19451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19451__$1,inst_19449);
} else {
if((state_val_19452 === (2))){
var state_19451__$1 = state_19451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19451__$1,(4),ch);
} else {
if((state_val_19452 === (11))){
var inst_19441 = (state_19451[(2)]);
var state_19451__$1 = state_19451;
var statearr_19460_19477 = state_19451__$1;
(statearr_19460_19477[(2)] = inst_19441);

(statearr_19460_19477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19452 === (9))){
var state_19451__$1 = state_19451;
var statearr_19461_19478 = state_19451__$1;
(statearr_19461_19478[(2)] = null);

(statearr_19461_19478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19452 === (5))){
var inst_19436 = cljs.core.async.close_BANG_.call(null,out);
var state_19451__$1 = state_19451;
var statearr_19462_19479 = state_19451__$1;
(statearr_19462_19479[(2)] = inst_19436);

(statearr_19462_19479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19452 === (10))){
var inst_19444 = (state_19451[(2)]);
var state_19451__$1 = (function (){var statearr_19463 = state_19451;
(statearr_19463[(8)] = inst_19444);

return statearr_19463;
})();
var statearr_19464_19480 = state_19451__$1;
(statearr_19464_19480[(2)] = null);

(statearr_19464_19480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19452 === (8))){
var inst_19433 = (state_19451[(7)]);
var state_19451__$1 = state_19451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19451__$1,(11),out,inst_19433);
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
});})(c__16067__auto___19470,out))
;
return ((function (switch__15900__auto__,c__16067__auto___19470,out){
return (function() {
var cljs$core$async$state_machine__15901__auto__ = null;
var cljs$core$async$state_machine__15901__auto____0 = (function (){
var statearr_19465 = [null,null,null,null,null,null,null,null,null];
(statearr_19465[(0)] = cljs$core$async$state_machine__15901__auto__);

(statearr_19465[(1)] = (1));

return statearr_19465;
});
var cljs$core$async$state_machine__15901__auto____1 = (function (state_19451){
while(true){
var ret_value__15902__auto__ = (function (){try{while(true){
var result__15903__auto__ = switch__15900__auto__.call(null,state_19451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15903__auto__;
}
break;
}
}catch (e19466){if((e19466 instanceof Object)){
var ex__15904__auto__ = e19466;
var statearr_19467_19481 = state_19451;
(statearr_19467_19481[(5)] = ex__15904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19482 = state_19451;
state_19451 = G__19482;
continue;
} else {
return ret_value__15902__auto__;
}
break;
}
});
cljs$core$async$state_machine__15901__auto__ = function(state_19451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15901__auto____1.call(this,state_19451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15901__auto____0;
cljs$core$async$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15901__auto____1;
return cljs$core$async$state_machine__15901__auto__;
})()
;})(switch__15900__auto__,c__16067__auto___19470,out))
})();
var state__16069__auto__ = (function (){var statearr_19468 = f__16068__auto__.call(null);
(statearr_19468[(6)] = c__16067__auto___19470);

return statearr_19468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16069__auto__);
});})(c__16067__auto___19470,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19484 = arguments.length;
switch (G__19484) {
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
var c__16067__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16067__auto__){
return (function (){
var f__16068__auto__ = (function (){var switch__15900__auto__ = ((function (c__16067__auto__){
return (function (state_19547){
var state_val_19548 = (state_19547[(1)]);
if((state_val_19548 === (7))){
var inst_19543 = (state_19547[(2)]);
var state_19547__$1 = state_19547;
var statearr_19549_19587 = state_19547__$1;
(statearr_19549_19587[(2)] = inst_19543);

(statearr_19549_19587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (20))){
var inst_19513 = (state_19547[(7)]);
var inst_19524 = (state_19547[(2)]);
var inst_19525 = cljs.core.next.call(null,inst_19513);
var inst_19499 = inst_19525;
var inst_19500 = null;
var inst_19501 = (0);
var inst_19502 = (0);
var state_19547__$1 = (function (){var statearr_19550 = state_19547;
(statearr_19550[(8)] = inst_19501);

(statearr_19550[(9)] = inst_19499);

(statearr_19550[(10)] = inst_19500);

(statearr_19550[(11)] = inst_19524);

(statearr_19550[(12)] = inst_19502);

return statearr_19550;
})();
var statearr_19551_19588 = state_19547__$1;
(statearr_19551_19588[(2)] = null);

(statearr_19551_19588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (1))){
var state_19547__$1 = state_19547;
var statearr_19552_19589 = state_19547__$1;
(statearr_19552_19589[(2)] = null);

(statearr_19552_19589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (4))){
var inst_19488 = (state_19547[(13)]);
var inst_19488__$1 = (state_19547[(2)]);
var inst_19489 = (inst_19488__$1 == null);
var state_19547__$1 = (function (){var statearr_19553 = state_19547;
(statearr_19553[(13)] = inst_19488__$1);

return statearr_19553;
})();
if(cljs.core.truth_(inst_19489)){
var statearr_19554_19590 = state_19547__$1;
(statearr_19554_19590[(1)] = (5));

} else {
var statearr_19555_19591 = state_19547__$1;
(statearr_19555_19591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (15))){
var state_19547__$1 = state_19547;
var statearr_19559_19592 = state_19547__$1;
(statearr_19559_19592[(2)] = null);

(statearr_19559_19592[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (21))){
var state_19547__$1 = state_19547;
var statearr_19560_19593 = state_19547__$1;
(statearr_19560_19593[(2)] = null);

(statearr_19560_19593[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (13))){
var inst_19501 = (state_19547[(8)]);
var inst_19499 = (state_19547[(9)]);
var inst_19500 = (state_19547[(10)]);
var inst_19502 = (state_19547[(12)]);
var inst_19509 = (state_19547[(2)]);
var inst_19510 = (inst_19502 + (1));
var tmp19556 = inst_19501;
var tmp19557 = inst_19499;
var tmp19558 = inst_19500;
var inst_19499__$1 = tmp19557;
var inst_19500__$1 = tmp19558;
var inst_19501__$1 = tmp19556;
var inst_19502__$1 = inst_19510;
var state_19547__$1 = (function (){var statearr_19561 = state_19547;
(statearr_19561[(8)] = inst_19501__$1);

(statearr_19561[(14)] = inst_19509);

(statearr_19561[(9)] = inst_19499__$1);

(statearr_19561[(10)] = inst_19500__$1);

(statearr_19561[(12)] = inst_19502__$1);

return statearr_19561;
})();
var statearr_19562_19594 = state_19547__$1;
(statearr_19562_19594[(2)] = null);

(statearr_19562_19594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (22))){
var state_19547__$1 = state_19547;
var statearr_19563_19595 = state_19547__$1;
(statearr_19563_19595[(2)] = null);

(statearr_19563_19595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (6))){
var inst_19488 = (state_19547[(13)]);
var inst_19497 = f.call(null,inst_19488);
var inst_19498 = cljs.core.seq.call(null,inst_19497);
var inst_19499 = inst_19498;
var inst_19500 = null;
var inst_19501 = (0);
var inst_19502 = (0);
var state_19547__$1 = (function (){var statearr_19564 = state_19547;
(statearr_19564[(8)] = inst_19501);

(statearr_19564[(9)] = inst_19499);

(statearr_19564[(10)] = inst_19500);

(statearr_19564[(12)] = inst_19502);

return statearr_19564;
})();
var statearr_19565_19596 = state_19547__$1;
(statearr_19565_19596[(2)] = null);

(statearr_19565_19596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (17))){
var inst_19513 = (state_19547[(7)]);
var inst_19517 = cljs.core.chunk_first.call(null,inst_19513);
var inst_19518 = cljs.core.chunk_rest.call(null,inst_19513);
var inst_19519 = cljs.core.count.call(null,inst_19517);
var inst_19499 = inst_19518;
var inst_19500 = inst_19517;
var inst_19501 = inst_19519;
var inst_19502 = (0);
var state_19547__$1 = (function (){var statearr_19566 = state_19547;
(statearr_19566[(8)] = inst_19501);

(statearr_19566[(9)] = inst_19499);

(statearr_19566[(10)] = inst_19500);

(statearr_19566[(12)] = inst_19502);

return statearr_19566;
})();
var statearr_19567_19597 = state_19547__$1;
(statearr_19567_19597[(2)] = null);

(statearr_19567_19597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (3))){
var inst_19545 = (state_19547[(2)]);
var state_19547__$1 = state_19547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19547__$1,inst_19545);
} else {
if((state_val_19548 === (12))){
var inst_19533 = (state_19547[(2)]);
var state_19547__$1 = state_19547;
var statearr_19568_19598 = state_19547__$1;
(statearr_19568_19598[(2)] = inst_19533);

(statearr_19568_19598[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (2))){
var state_19547__$1 = state_19547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19547__$1,(4),in$);
} else {
if((state_val_19548 === (23))){
var inst_19541 = (state_19547[(2)]);
var state_19547__$1 = state_19547;
var statearr_19569_19599 = state_19547__$1;
(statearr_19569_19599[(2)] = inst_19541);

(statearr_19569_19599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (19))){
var inst_19528 = (state_19547[(2)]);
var state_19547__$1 = state_19547;
var statearr_19570_19600 = state_19547__$1;
(statearr_19570_19600[(2)] = inst_19528);

(statearr_19570_19600[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (11))){
var inst_19499 = (state_19547[(9)]);
var inst_19513 = (state_19547[(7)]);
var inst_19513__$1 = cljs.core.seq.call(null,inst_19499);
var state_19547__$1 = (function (){var statearr_19571 = state_19547;
(statearr_19571[(7)] = inst_19513__$1);

return statearr_19571;
})();
if(inst_19513__$1){
var statearr_19572_19601 = state_19547__$1;
(statearr_19572_19601[(1)] = (14));

} else {
var statearr_19573_19602 = state_19547__$1;
(statearr_19573_19602[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (9))){
var inst_19535 = (state_19547[(2)]);
var inst_19536 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19547__$1 = (function (){var statearr_19574 = state_19547;
(statearr_19574[(15)] = inst_19535);

return statearr_19574;
})();
if(cljs.core.truth_(inst_19536)){
var statearr_19575_19603 = state_19547__$1;
(statearr_19575_19603[(1)] = (21));

} else {
var statearr_19576_19604 = state_19547__$1;
(statearr_19576_19604[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (5))){
var inst_19491 = cljs.core.async.close_BANG_.call(null,out);
var state_19547__$1 = state_19547;
var statearr_19577_19605 = state_19547__$1;
(statearr_19577_19605[(2)] = inst_19491);

(statearr_19577_19605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (14))){
var inst_19513 = (state_19547[(7)]);
var inst_19515 = cljs.core.chunked_seq_QMARK_.call(null,inst_19513);
var state_19547__$1 = state_19547;
if(inst_19515){
var statearr_19578_19606 = state_19547__$1;
(statearr_19578_19606[(1)] = (17));

} else {
var statearr_19579_19607 = state_19547__$1;
(statearr_19579_19607[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (16))){
var inst_19531 = (state_19547[(2)]);
var state_19547__$1 = state_19547;
var statearr_19580_19608 = state_19547__$1;
(statearr_19580_19608[(2)] = inst_19531);

(statearr_19580_19608[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (10))){
var inst_19500 = (state_19547[(10)]);
var inst_19502 = (state_19547[(12)]);
var inst_19507 = cljs.core._nth.call(null,inst_19500,inst_19502);
var state_19547__$1 = state_19547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19547__$1,(13),out,inst_19507);
} else {
if((state_val_19548 === (18))){
var inst_19513 = (state_19547[(7)]);
var inst_19522 = cljs.core.first.call(null,inst_19513);
var state_19547__$1 = state_19547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19547__$1,(20),out,inst_19522);
} else {
if((state_val_19548 === (8))){
var inst_19501 = (state_19547[(8)]);
var inst_19502 = (state_19547[(12)]);
var inst_19504 = (inst_19502 < inst_19501);
var inst_19505 = inst_19504;
var state_19547__$1 = state_19547;
if(cljs.core.truth_(inst_19505)){
var statearr_19581_19609 = state_19547__$1;
(statearr_19581_19609[(1)] = (10));

} else {
var statearr_19582_19610 = state_19547__$1;
(statearr_19582_19610[(1)] = (11));

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
});})(c__16067__auto__))
;
return ((function (switch__15900__auto__,c__16067__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15901__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15901__auto____0 = (function (){
var statearr_19583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19583[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15901__auto__);

(statearr_19583[(1)] = (1));

return statearr_19583;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15901__auto____1 = (function (state_19547){
while(true){
var ret_value__15902__auto__ = (function (){try{while(true){
var result__15903__auto__ = switch__15900__auto__.call(null,state_19547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15903__auto__;
}
break;
}
}catch (e19584){if((e19584 instanceof Object)){
var ex__15904__auto__ = e19584;
var statearr_19585_19611 = state_19547;
(statearr_19585_19611[(5)] = ex__15904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19612 = state_19547;
state_19547 = G__19612;
continue;
} else {
return ret_value__15902__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15901__auto__ = function(state_19547){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15901__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15901__auto____1.call(this,state_19547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15901__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15901__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15901__auto__;
})()
;})(switch__15900__auto__,c__16067__auto__))
})();
var state__16069__auto__ = (function (){var statearr_19586 = f__16068__auto__.call(null);
(statearr_19586[(6)] = c__16067__auto__);

return statearr_19586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16069__auto__);
});})(c__16067__auto__))
);

return c__16067__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19614 = arguments.length;
switch (G__19614) {
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
var G__19617 = arguments.length;
switch (G__19617) {
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
var G__19620 = arguments.length;
switch (G__19620) {
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
var c__16067__auto___19667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16067__auto___19667,out){
return (function (){
var f__16068__auto__ = (function (){var switch__15900__auto__ = ((function (c__16067__auto___19667,out){
return (function (state_19644){
var state_val_19645 = (state_19644[(1)]);
if((state_val_19645 === (7))){
var inst_19639 = (state_19644[(2)]);
var state_19644__$1 = state_19644;
var statearr_19646_19668 = state_19644__$1;
(statearr_19646_19668[(2)] = inst_19639);

(statearr_19646_19668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (1))){
var inst_19621 = null;
var state_19644__$1 = (function (){var statearr_19647 = state_19644;
(statearr_19647[(7)] = inst_19621);

return statearr_19647;
})();
var statearr_19648_19669 = state_19644__$1;
(statearr_19648_19669[(2)] = null);

(statearr_19648_19669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (4))){
var inst_19624 = (state_19644[(8)]);
var inst_19624__$1 = (state_19644[(2)]);
var inst_19625 = (inst_19624__$1 == null);
var inst_19626 = cljs.core.not.call(null,inst_19625);
var state_19644__$1 = (function (){var statearr_19649 = state_19644;
(statearr_19649[(8)] = inst_19624__$1);

return statearr_19649;
})();
if(inst_19626){
var statearr_19650_19670 = state_19644__$1;
(statearr_19650_19670[(1)] = (5));

} else {
var statearr_19651_19671 = state_19644__$1;
(statearr_19651_19671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (6))){
var state_19644__$1 = state_19644;
var statearr_19652_19672 = state_19644__$1;
(statearr_19652_19672[(2)] = null);

(statearr_19652_19672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (3))){
var inst_19641 = (state_19644[(2)]);
var inst_19642 = cljs.core.async.close_BANG_.call(null,out);
var state_19644__$1 = (function (){var statearr_19653 = state_19644;
(statearr_19653[(9)] = inst_19641);

return statearr_19653;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19644__$1,inst_19642);
} else {
if((state_val_19645 === (2))){
var state_19644__$1 = state_19644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19644__$1,(4),ch);
} else {
if((state_val_19645 === (11))){
var inst_19624 = (state_19644[(8)]);
var inst_19633 = (state_19644[(2)]);
var inst_19621 = inst_19624;
var state_19644__$1 = (function (){var statearr_19654 = state_19644;
(statearr_19654[(7)] = inst_19621);

(statearr_19654[(10)] = inst_19633);

return statearr_19654;
})();
var statearr_19655_19673 = state_19644__$1;
(statearr_19655_19673[(2)] = null);

(statearr_19655_19673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (9))){
var inst_19624 = (state_19644[(8)]);
var state_19644__$1 = state_19644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19644__$1,(11),out,inst_19624);
} else {
if((state_val_19645 === (5))){
var inst_19621 = (state_19644[(7)]);
var inst_19624 = (state_19644[(8)]);
var inst_19628 = cljs.core._EQ_.call(null,inst_19624,inst_19621);
var state_19644__$1 = state_19644;
if(inst_19628){
var statearr_19657_19674 = state_19644__$1;
(statearr_19657_19674[(1)] = (8));

} else {
var statearr_19658_19675 = state_19644__$1;
(statearr_19658_19675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (10))){
var inst_19636 = (state_19644[(2)]);
var state_19644__$1 = state_19644;
var statearr_19659_19676 = state_19644__$1;
(statearr_19659_19676[(2)] = inst_19636);

(statearr_19659_19676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (8))){
var inst_19621 = (state_19644[(7)]);
var tmp19656 = inst_19621;
var inst_19621__$1 = tmp19656;
var state_19644__$1 = (function (){var statearr_19660 = state_19644;
(statearr_19660[(7)] = inst_19621__$1);

return statearr_19660;
})();
var statearr_19661_19677 = state_19644__$1;
(statearr_19661_19677[(2)] = null);

(statearr_19661_19677[(1)] = (2));


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
});})(c__16067__auto___19667,out))
;
return ((function (switch__15900__auto__,c__16067__auto___19667,out){
return (function() {
var cljs$core$async$state_machine__15901__auto__ = null;
var cljs$core$async$state_machine__15901__auto____0 = (function (){
var statearr_19662 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19662[(0)] = cljs$core$async$state_machine__15901__auto__);

(statearr_19662[(1)] = (1));

return statearr_19662;
});
var cljs$core$async$state_machine__15901__auto____1 = (function (state_19644){
while(true){
var ret_value__15902__auto__ = (function (){try{while(true){
var result__15903__auto__ = switch__15900__auto__.call(null,state_19644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15903__auto__;
}
break;
}
}catch (e19663){if((e19663 instanceof Object)){
var ex__15904__auto__ = e19663;
var statearr_19664_19678 = state_19644;
(statearr_19664_19678[(5)] = ex__15904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19679 = state_19644;
state_19644 = G__19679;
continue;
} else {
return ret_value__15902__auto__;
}
break;
}
});
cljs$core$async$state_machine__15901__auto__ = function(state_19644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15901__auto____1.call(this,state_19644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15901__auto____0;
cljs$core$async$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15901__auto____1;
return cljs$core$async$state_machine__15901__auto__;
})()
;})(switch__15900__auto__,c__16067__auto___19667,out))
})();
var state__16069__auto__ = (function (){var statearr_19665 = f__16068__auto__.call(null);
(statearr_19665[(6)] = c__16067__auto___19667);

return statearr_19665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16069__auto__);
});})(c__16067__auto___19667,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19681 = arguments.length;
switch (G__19681) {
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
var c__16067__auto___19747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16067__auto___19747,out){
return (function (){
var f__16068__auto__ = (function (){var switch__15900__auto__ = ((function (c__16067__auto___19747,out){
return (function (state_19719){
var state_val_19720 = (state_19719[(1)]);
if((state_val_19720 === (7))){
var inst_19715 = (state_19719[(2)]);
var state_19719__$1 = state_19719;
var statearr_19721_19748 = state_19719__$1;
(statearr_19721_19748[(2)] = inst_19715);

(statearr_19721_19748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19720 === (1))){
var inst_19682 = (new Array(n));
var inst_19683 = inst_19682;
var inst_19684 = (0);
var state_19719__$1 = (function (){var statearr_19722 = state_19719;
(statearr_19722[(7)] = inst_19684);

(statearr_19722[(8)] = inst_19683);

return statearr_19722;
})();
var statearr_19723_19749 = state_19719__$1;
(statearr_19723_19749[(2)] = null);

(statearr_19723_19749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19720 === (4))){
var inst_19687 = (state_19719[(9)]);
var inst_19687__$1 = (state_19719[(2)]);
var inst_19688 = (inst_19687__$1 == null);
var inst_19689 = cljs.core.not.call(null,inst_19688);
var state_19719__$1 = (function (){var statearr_19724 = state_19719;
(statearr_19724[(9)] = inst_19687__$1);

return statearr_19724;
})();
if(inst_19689){
var statearr_19725_19750 = state_19719__$1;
(statearr_19725_19750[(1)] = (5));

} else {
var statearr_19726_19751 = state_19719__$1;
(statearr_19726_19751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19720 === (15))){
var inst_19709 = (state_19719[(2)]);
var state_19719__$1 = state_19719;
var statearr_19727_19752 = state_19719__$1;
(statearr_19727_19752[(2)] = inst_19709);

(statearr_19727_19752[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19720 === (13))){
var state_19719__$1 = state_19719;
var statearr_19728_19753 = state_19719__$1;
(statearr_19728_19753[(2)] = null);

(statearr_19728_19753[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19720 === (6))){
var inst_19684 = (state_19719[(7)]);
var inst_19705 = (inst_19684 > (0));
var state_19719__$1 = state_19719;
if(cljs.core.truth_(inst_19705)){
var statearr_19729_19754 = state_19719__$1;
(statearr_19729_19754[(1)] = (12));

} else {
var statearr_19730_19755 = state_19719__$1;
(statearr_19730_19755[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19720 === (3))){
var inst_19717 = (state_19719[(2)]);
var state_19719__$1 = state_19719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19719__$1,inst_19717);
} else {
if((state_val_19720 === (12))){
var inst_19683 = (state_19719[(8)]);
var inst_19707 = cljs.core.vec.call(null,inst_19683);
var state_19719__$1 = state_19719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19719__$1,(15),out,inst_19707);
} else {
if((state_val_19720 === (2))){
var state_19719__$1 = state_19719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19719__$1,(4),ch);
} else {
if((state_val_19720 === (11))){
var inst_19699 = (state_19719[(2)]);
var inst_19700 = (new Array(n));
var inst_19683 = inst_19700;
var inst_19684 = (0);
var state_19719__$1 = (function (){var statearr_19731 = state_19719;
(statearr_19731[(7)] = inst_19684);

(statearr_19731[(10)] = inst_19699);

(statearr_19731[(8)] = inst_19683);

return statearr_19731;
})();
var statearr_19732_19756 = state_19719__$1;
(statearr_19732_19756[(2)] = null);

(statearr_19732_19756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19720 === (9))){
var inst_19683 = (state_19719[(8)]);
var inst_19697 = cljs.core.vec.call(null,inst_19683);
var state_19719__$1 = state_19719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19719__$1,(11),out,inst_19697);
} else {
if((state_val_19720 === (5))){
var inst_19692 = (state_19719[(11)]);
var inst_19684 = (state_19719[(7)]);
var inst_19687 = (state_19719[(9)]);
var inst_19683 = (state_19719[(8)]);
var inst_19691 = (inst_19683[inst_19684] = inst_19687);
var inst_19692__$1 = (inst_19684 + (1));
var inst_19693 = (inst_19692__$1 < n);
var state_19719__$1 = (function (){var statearr_19733 = state_19719;
(statearr_19733[(11)] = inst_19692__$1);

(statearr_19733[(12)] = inst_19691);

return statearr_19733;
})();
if(cljs.core.truth_(inst_19693)){
var statearr_19734_19757 = state_19719__$1;
(statearr_19734_19757[(1)] = (8));

} else {
var statearr_19735_19758 = state_19719__$1;
(statearr_19735_19758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19720 === (14))){
var inst_19712 = (state_19719[(2)]);
var inst_19713 = cljs.core.async.close_BANG_.call(null,out);
var state_19719__$1 = (function (){var statearr_19737 = state_19719;
(statearr_19737[(13)] = inst_19712);

return statearr_19737;
})();
var statearr_19738_19759 = state_19719__$1;
(statearr_19738_19759[(2)] = inst_19713);

(statearr_19738_19759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19720 === (10))){
var inst_19703 = (state_19719[(2)]);
var state_19719__$1 = state_19719;
var statearr_19739_19760 = state_19719__$1;
(statearr_19739_19760[(2)] = inst_19703);

(statearr_19739_19760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19720 === (8))){
var inst_19692 = (state_19719[(11)]);
var inst_19683 = (state_19719[(8)]);
var tmp19736 = inst_19683;
var inst_19683__$1 = tmp19736;
var inst_19684 = inst_19692;
var state_19719__$1 = (function (){var statearr_19740 = state_19719;
(statearr_19740[(7)] = inst_19684);

(statearr_19740[(8)] = inst_19683__$1);

return statearr_19740;
})();
var statearr_19741_19761 = state_19719__$1;
(statearr_19741_19761[(2)] = null);

(statearr_19741_19761[(1)] = (2));


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
});})(c__16067__auto___19747,out))
;
return ((function (switch__15900__auto__,c__16067__auto___19747,out){
return (function() {
var cljs$core$async$state_machine__15901__auto__ = null;
var cljs$core$async$state_machine__15901__auto____0 = (function (){
var statearr_19742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19742[(0)] = cljs$core$async$state_machine__15901__auto__);

(statearr_19742[(1)] = (1));

return statearr_19742;
});
var cljs$core$async$state_machine__15901__auto____1 = (function (state_19719){
while(true){
var ret_value__15902__auto__ = (function (){try{while(true){
var result__15903__auto__ = switch__15900__auto__.call(null,state_19719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15903__auto__;
}
break;
}
}catch (e19743){if((e19743 instanceof Object)){
var ex__15904__auto__ = e19743;
var statearr_19744_19762 = state_19719;
(statearr_19744_19762[(5)] = ex__15904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19763 = state_19719;
state_19719 = G__19763;
continue;
} else {
return ret_value__15902__auto__;
}
break;
}
});
cljs$core$async$state_machine__15901__auto__ = function(state_19719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15901__auto____1.call(this,state_19719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15901__auto____0;
cljs$core$async$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15901__auto____1;
return cljs$core$async$state_machine__15901__auto__;
})()
;})(switch__15900__auto__,c__16067__auto___19747,out))
})();
var state__16069__auto__ = (function (){var statearr_19745 = f__16068__auto__.call(null);
(statearr_19745[(6)] = c__16067__auto___19747);

return statearr_19745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16069__auto__);
});})(c__16067__auto___19747,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19765 = arguments.length;
switch (G__19765) {
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
var c__16067__auto___19835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16067__auto___19835,out){
return (function (){
var f__16068__auto__ = (function (){var switch__15900__auto__ = ((function (c__16067__auto___19835,out){
return (function (state_19807){
var state_val_19808 = (state_19807[(1)]);
if((state_val_19808 === (7))){
var inst_19803 = (state_19807[(2)]);
var state_19807__$1 = state_19807;
var statearr_19809_19836 = state_19807__$1;
(statearr_19809_19836[(2)] = inst_19803);

(statearr_19809_19836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (1))){
var inst_19766 = [];
var inst_19767 = inst_19766;
var inst_19768 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19807__$1 = (function (){var statearr_19810 = state_19807;
(statearr_19810[(7)] = inst_19768);

(statearr_19810[(8)] = inst_19767);

return statearr_19810;
})();
var statearr_19811_19837 = state_19807__$1;
(statearr_19811_19837[(2)] = null);

(statearr_19811_19837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (4))){
var inst_19771 = (state_19807[(9)]);
var inst_19771__$1 = (state_19807[(2)]);
var inst_19772 = (inst_19771__$1 == null);
var inst_19773 = cljs.core.not.call(null,inst_19772);
var state_19807__$1 = (function (){var statearr_19812 = state_19807;
(statearr_19812[(9)] = inst_19771__$1);

return statearr_19812;
})();
if(inst_19773){
var statearr_19813_19838 = state_19807__$1;
(statearr_19813_19838[(1)] = (5));

} else {
var statearr_19814_19839 = state_19807__$1;
(statearr_19814_19839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (15))){
var inst_19797 = (state_19807[(2)]);
var state_19807__$1 = state_19807;
var statearr_19815_19840 = state_19807__$1;
(statearr_19815_19840[(2)] = inst_19797);

(statearr_19815_19840[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (13))){
var state_19807__$1 = state_19807;
var statearr_19816_19841 = state_19807__$1;
(statearr_19816_19841[(2)] = null);

(statearr_19816_19841[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (6))){
var inst_19767 = (state_19807[(8)]);
var inst_19792 = inst_19767.length;
var inst_19793 = (inst_19792 > (0));
var state_19807__$1 = state_19807;
if(cljs.core.truth_(inst_19793)){
var statearr_19817_19842 = state_19807__$1;
(statearr_19817_19842[(1)] = (12));

} else {
var statearr_19818_19843 = state_19807__$1;
(statearr_19818_19843[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (3))){
var inst_19805 = (state_19807[(2)]);
var state_19807__$1 = state_19807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19807__$1,inst_19805);
} else {
if((state_val_19808 === (12))){
var inst_19767 = (state_19807[(8)]);
var inst_19795 = cljs.core.vec.call(null,inst_19767);
var state_19807__$1 = state_19807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19807__$1,(15),out,inst_19795);
} else {
if((state_val_19808 === (2))){
var state_19807__$1 = state_19807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19807__$1,(4),ch);
} else {
if((state_val_19808 === (11))){
var inst_19771 = (state_19807[(9)]);
var inst_19775 = (state_19807[(10)]);
var inst_19785 = (state_19807[(2)]);
var inst_19786 = [];
var inst_19787 = inst_19786.push(inst_19771);
var inst_19767 = inst_19786;
var inst_19768 = inst_19775;
var state_19807__$1 = (function (){var statearr_19819 = state_19807;
(statearr_19819[(7)] = inst_19768);

(statearr_19819[(11)] = inst_19787);

(statearr_19819[(12)] = inst_19785);

(statearr_19819[(8)] = inst_19767);

return statearr_19819;
})();
var statearr_19820_19844 = state_19807__$1;
(statearr_19820_19844[(2)] = null);

(statearr_19820_19844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (9))){
var inst_19767 = (state_19807[(8)]);
var inst_19783 = cljs.core.vec.call(null,inst_19767);
var state_19807__$1 = state_19807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19807__$1,(11),out,inst_19783);
} else {
if((state_val_19808 === (5))){
var inst_19771 = (state_19807[(9)]);
var inst_19768 = (state_19807[(7)]);
var inst_19775 = (state_19807[(10)]);
var inst_19775__$1 = f.call(null,inst_19771);
var inst_19776 = cljs.core._EQ_.call(null,inst_19775__$1,inst_19768);
var inst_19777 = cljs.core.keyword_identical_QMARK_.call(null,inst_19768,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19778 = ((inst_19776) || (inst_19777));
var state_19807__$1 = (function (){var statearr_19821 = state_19807;
(statearr_19821[(10)] = inst_19775__$1);

return statearr_19821;
})();
if(cljs.core.truth_(inst_19778)){
var statearr_19822_19845 = state_19807__$1;
(statearr_19822_19845[(1)] = (8));

} else {
var statearr_19823_19846 = state_19807__$1;
(statearr_19823_19846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (14))){
var inst_19800 = (state_19807[(2)]);
var inst_19801 = cljs.core.async.close_BANG_.call(null,out);
var state_19807__$1 = (function (){var statearr_19825 = state_19807;
(statearr_19825[(13)] = inst_19800);

return statearr_19825;
})();
var statearr_19826_19847 = state_19807__$1;
(statearr_19826_19847[(2)] = inst_19801);

(statearr_19826_19847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (10))){
var inst_19790 = (state_19807[(2)]);
var state_19807__$1 = state_19807;
var statearr_19827_19848 = state_19807__$1;
(statearr_19827_19848[(2)] = inst_19790);

(statearr_19827_19848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (8))){
var inst_19771 = (state_19807[(9)]);
var inst_19775 = (state_19807[(10)]);
var inst_19767 = (state_19807[(8)]);
var inst_19780 = inst_19767.push(inst_19771);
var tmp19824 = inst_19767;
var inst_19767__$1 = tmp19824;
var inst_19768 = inst_19775;
var state_19807__$1 = (function (){var statearr_19828 = state_19807;
(statearr_19828[(7)] = inst_19768);

(statearr_19828[(14)] = inst_19780);

(statearr_19828[(8)] = inst_19767__$1);

return statearr_19828;
})();
var statearr_19829_19849 = state_19807__$1;
(statearr_19829_19849[(2)] = null);

(statearr_19829_19849[(1)] = (2));


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
});})(c__16067__auto___19835,out))
;
return ((function (switch__15900__auto__,c__16067__auto___19835,out){
return (function() {
var cljs$core$async$state_machine__15901__auto__ = null;
var cljs$core$async$state_machine__15901__auto____0 = (function (){
var statearr_19830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19830[(0)] = cljs$core$async$state_machine__15901__auto__);

(statearr_19830[(1)] = (1));

return statearr_19830;
});
var cljs$core$async$state_machine__15901__auto____1 = (function (state_19807){
while(true){
var ret_value__15902__auto__ = (function (){try{while(true){
var result__15903__auto__ = switch__15900__auto__.call(null,state_19807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15903__auto__;
}
break;
}
}catch (e19831){if((e19831 instanceof Object)){
var ex__15904__auto__ = e19831;
var statearr_19832_19850 = state_19807;
(statearr_19832_19850[(5)] = ex__15904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19851 = state_19807;
state_19807 = G__19851;
continue;
} else {
return ret_value__15902__auto__;
}
break;
}
});
cljs$core$async$state_machine__15901__auto__ = function(state_19807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15901__auto____1.call(this,state_19807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15901__auto____0;
cljs$core$async$state_machine__15901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15901__auto____1;
return cljs$core$async$state_machine__15901__auto__;
})()
;})(switch__15900__auto__,c__16067__auto___19835,out))
})();
var state__16069__auto__ = (function (){var statearr_19833 = f__16068__auto__.call(null);
(statearr_19833[(6)] = c__16067__auto___19835);

return statearr_19833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16069__auto__);
});})(c__16067__auto___19835,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
