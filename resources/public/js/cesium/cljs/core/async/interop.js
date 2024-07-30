// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.core.async.interop');
goog.require('cljs.core');
goog.require('cljs.core.async');
/**
 * EXPERIMENTAL: Puts the promise resolution into a promise-chan and returns it.
 * The value of a rejected promise will be wrapped in a instance of
 * ExceptionInfo, acessible via ex-cause.
 */
cljs.core.async.interop.p__GT_c = (function cljs$core$async$interop$p__GT_c(p){
var c = cljs.core.async.promise_chan.call(null);
p.then((function (res){
if((res == null)){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return cljs.core.async.put_BANG_.call(null,c,res);
}
}),(function (err){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.ex_info.call(null,"Promise error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"promise-error","promise-error",-90673560)], null),err));
}));

return c;
});

//# sourceMappingURL=interop.js.map
