// Compiled by ClojureScript 1.10.439 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.url');
goog.require('ajax.json');
goog.require('ajax.transit');
goog.require('ajax.ring');
goog.require('ajax.formats');
goog.require('ajax.util');
goog.require('ajax.interceptors');
goog.require('ajax.simple');
goog.require('ajax.easy');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
goog.require('ajax.xml_http_request');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
ajax.core.abort = (function ajax$core$abort(this$){

return ajax.protocols._abort.call(null,this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.success_QMARK_ = ajax.util.success_QMARK_;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__4647__auto__ = [];
var len__4641__auto___20085 = arguments.length;
var i__4642__auto___20086 = (0);
while(true){
if((i__4642__auto___20086 < len__4641__auto___20085)){
args__4647__auto__.push((arguments[i__4642__auto___20086]));

var G__20087 = (i__4642__auto___20086 + (1));
i__4642__auto___20086 = G__20087;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__19575__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__19575__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__19575__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.GET.cljs$lang$applyTo = (function (seq20083){
var G__20084 = cljs.core.first.call(null,seq20083);
var seq20083__$1 = cljs.core.next.call(null,seq20083);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20084,seq20083__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__4647__auto__ = [];
var len__4641__auto___20090 = arguments.length;
var i__4642__auto___20091 = (0);
while(true){
if((i__4642__auto___20091 < len__4641__auto___20090)){
args__4647__auto__.push((arguments[i__4642__auto___20091]));

var G__20092 = (i__4642__auto___20091 + (1));
i__4642__auto___20091 = G__20092;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__19575__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__19575__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__19575__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.HEAD.cljs$lang$applyTo = (function (seq20088){
var G__20089 = cljs.core.first.call(null,seq20088);
var seq20088__$1 = cljs.core.next.call(null,seq20088);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20089,seq20088__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__4647__auto__ = [];
var len__4641__auto___20095 = arguments.length;
var i__4642__auto___20096 = (0);
while(true){
if((i__4642__auto___20096 < len__4641__auto___20095)){
args__4647__auto__.push((arguments[i__4642__auto___20096]));

var G__20097 = (i__4642__auto___20096 + (1));
i__4642__auto___20096 = G__20097;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__19575__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__19575__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__19575__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.POST.cljs$lang$applyTo = (function (seq20093){
var G__20094 = cljs.core.first.call(null,seq20093);
var seq20093__$1 = cljs.core.next.call(null,seq20093);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20094,seq20093__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__4647__auto__ = [];
var len__4641__auto___20100 = arguments.length;
var i__4642__auto___20101 = (0);
while(true){
if((i__4642__auto___20101 < len__4641__auto___20100)){
args__4647__auto__.push((arguments[i__4642__auto___20101]));

var G__20102 = (i__4642__auto___20101 + (1));
i__4642__auto___20101 = G__20102;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__19575__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__19575__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__19575__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.PUT.cljs$lang$applyTo = (function (seq20098){
var G__20099 = cljs.core.first.call(null,seq20098);
var seq20098__$1 = cljs.core.next.call(null,seq20098);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20099,seq20098__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__4647__auto__ = [];
var len__4641__auto___20105 = arguments.length;
var i__4642__auto___20106 = (0);
while(true){
if((i__4642__auto___20106 < len__4641__auto___20105)){
args__4647__auto__.push((arguments[i__4642__auto___20106]));

var G__20107 = (i__4642__auto___20106 + (1));
i__4642__auto___20106 = G__20107;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__19575__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__19575__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__19575__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.DELETE.cljs$lang$applyTo = (function (seq20103){
var G__20104 = cljs.core.first.call(null,seq20103);
var seq20103__$1 = cljs.core.next.call(null,seq20103);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20104,seq20103__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__4647__auto__ = [];
var len__4641__auto___20110 = arguments.length;
var i__4642__auto___20111 = (0);
while(true){
if((i__4642__auto___20111 < len__4641__auto___20110)){
args__4647__auto__.push((arguments[i__4642__auto___20111]));

var G__20112 = (i__4642__auto___20111 + (1));
i__4642__auto___20111 = G__20112;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__19575__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__19575__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__19575__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq20108){
var G__20109 = cljs.core.first.call(null,seq20108);
var seq20108__$1 = cljs.core.next.call(null,seq20108);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20109,seq20108__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__4647__auto__ = [];
var len__4641__auto___20115 = arguments.length;
var i__4642__auto___20116 = (0);
while(true){
if((i__4642__auto___20116 < len__4641__auto___20115)){
args__4647__auto__.push((arguments[i__4642__auto___20116]));

var G__20117 = (i__4642__auto___20116 + (1));
i__4642__auto___20116 = G__20117;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__19575__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__19575__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__19575__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.TRACE.cljs$lang$applyTo = (function (seq20113){
var G__20114 = cljs.core.first.call(null,seq20113);
var seq20113__$1 = cljs.core.next.call(null,seq20113);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20114,seq20113__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__4647__auto__ = [];
var len__4641__auto___20120 = arguments.length;
var i__4642__auto___20121 = (0);
while(true){
if((i__4642__auto___20121 < len__4641__auto___20120)){
args__4647__auto__.push((arguments[i__4642__auto___20121]));

var G__20122 = (i__4642__auto___20121 + (1));
i__4642__auto___20121 = G__20122;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__19575__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__19575__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__19575__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.PATCH.cljs$lang$applyTo = (function (seq20118){
var G__20119 = cljs.core.first.call(null,seq20118);
var seq20118__$1 = cljs.core.next.call(null,seq20118);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20119,seq20118__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__4647__auto__ = [];
var len__4641__auto___20125 = arguments.length;
var i__4642__auto___20126 = (0);
while(true){
if((i__4642__auto___20126 < len__4641__auto___20125)){
args__4647__auto__.push((arguments[i__4642__auto___20126]));

var G__20127 = (i__4642__auto___20126 + (1));
i__4642__auto___20126 = G__20127;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__19575__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__19575__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__19575__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.PURGE.cljs$lang$applyTo = (function (seq20123){
var G__20124 = cljs.core.first.call(null,seq20123);
var seq20123__$1 = cljs.core.next.call(null,seq20123);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20124,seq20123__$1);
});


//# sourceMappingURL=core.js.map
