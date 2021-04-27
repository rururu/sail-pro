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
var len__4641__auto___4903 = arguments.length;
var i__4642__auto___4904 = (0);
while(true){
if((i__4642__auto___4904 < len__4641__auto___4903)){
args__4647__auto__.push((arguments[i__4642__auto___4904]));

var G__4905 = (i__4642__auto___4904 + (1));
i__4642__auto___4904 = G__4905;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__4393__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__4393__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__4393__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.GET.cljs$lang$applyTo = (function (seq4901){
var G__4902 = cljs.core.first.call(null,seq4901);
var seq4901__$1 = cljs.core.next.call(null,seq4901);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4902,seq4901__$1);
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
var len__4641__auto___4908 = arguments.length;
var i__4642__auto___4909 = (0);
while(true){
if((i__4642__auto___4909 < len__4641__auto___4908)){
args__4647__auto__.push((arguments[i__4642__auto___4909]));

var G__4910 = (i__4642__auto___4909 + (1));
i__4642__auto___4909 = G__4910;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__4393__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__4393__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__4393__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.HEAD.cljs$lang$applyTo = (function (seq4906){
var G__4907 = cljs.core.first.call(null,seq4906);
var seq4906__$1 = cljs.core.next.call(null,seq4906);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4907,seq4906__$1);
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
var len__4641__auto___4913 = arguments.length;
var i__4642__auto___4914 = (0);
while(true){
if((i__4642__auto___4914 < len__4641__auto___4913)){
args__4647__auto__.push((arguments[i__4642__auto___4914]));

var G__4915 = (i__4642__auto___4914 + (1));
i__4642__auto___4914 = G__4915;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__4393__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__4393__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__4393__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.POST.cljs$lang$applyTo = (function (seq4911){
var G__4912 = cljs.core.first.call(null,seq4911);
var seq4911__$1 = cljs.core.next.call(null,seq4911);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4912,seq4911__$1);
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
var len__4641__auto___4918 = arguments.length;
var i__4642__auto___4919 = (0);
while(true){
if((i__4642__auto___4919 < len__4641__auto___4918)){
args__4647__auto__.push((arguments[i__4642__auto___4919]));

var G__4920 = (i__4642__auto___4919 + (1));
i__4642__auto___4919 = G__4920;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__4393__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__4393__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__4393__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.PUT.cljs$lang$applyTo = (function (seq4916){
var G__4917 = cljs.core.first.call(null,seq4916);
var seq4916__$1 = cljs.core.next.call(null,seq4916);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4917,seq4916__$1);
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
var len__4641__auto___4923 = arguments.length;
var i__4642__auto___4924 = (0);
while(true){
if((i__4642__auto___4924 < len__4641__auto___4923)){
args__4647__auto__.push((arguments[i__4642__auto___4924]));

var G__4925 = (i__4642__auto___4924 + (1));
i__4642__auto___4924 = G__4925;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__4393__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__4393__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__4393__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.DELETE.cljs$lang$applyTo = (function (seq4921){
var G__4922 = cljs.core.first.call(null,seq4921);
var seq4921__$1 = cljs.core.next.call(null,seq4921);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4922,seq4921__$1);
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
var len__4641__auto___4928 = arguments.length;
var i__4642__auto___4929 = (0);
while(true){
if((i__4642__auto___4929 < len__4641__auto___4928)){
args__4647__auto__.push((arguments[i__4642__auto___4929]));

var G__4930 = (i__4642__auto___4929 + (1));
i__4642__auto___4929 = G__4930;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__4393__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__4393__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__4393__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq4926){
var G__4927 = cljs.core.first.call(null,seq4926);
var seq4926__$1 = cljs.core.next.call(null,seq4926);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4927,seq4926__$1);
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
var len__4641__auto___4933 = arguments.length;
var i__4642__auto___4934 = (0);
while(true){
if((i__4642__auto___4934 < len__4641__auto___4933)){
args__4647__auto__.push((arguments[i__4642__auto___4934]));

var G__4935 = (i__4642__auto___4934 + (1));
i__4642__auto___4934 = G__4935;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__4393__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__4393__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__4393__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.TRACE.cljs$lang$applyTo = (function (seq4931){
var G__4932 = cljs.core.first.call(null,seq4931);
var seq4931__$1 = cljs.core.next.call(null,seq4931);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4932,seq4931__$1);
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
var len__4641__auto___4938 = arguments.length;
var i__4642__auto___4939 = (0);
while(true){
if((i__4642__auto___4939 < len__4641__auto___4938)){
args__4647__auto__.push((arguments[i__4642__auto___4939]));

var G__4940 = (i__4642__auto___4939 + (1));
i__4642__auto___4939 = G__4940;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__4393__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__4393__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__4393__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.PATCH.cljs$lang$applyTo = (function (seq4936){
var G__4937 = cljs.core.first.call(null,seq4936);
var seq4936__$1 = cljs.core.next.call(null,seq4936);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4937,seq4936__$1);
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
var len__4641__auto___4943 = arguments.length;
var i__4642__auto___4944 = (0);
while(true){
if((i__4642__auto___4944 < len__4641__auto___4943)){
args__4647__auto__.push((arguments[i__4642__auto___4944]));

var G__4945 = (i__4642__auto___4944 + (1));
i__4642__auto___4944 = G__4945;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__4393__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__4393__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__4393__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.PURGE.cljs$lang$applyTo = (function (seq4941){
var G__4942 = cljs.core.first.call(null,seq4941);
var seq4941__$1 = cljs.core.next.call(null,seq4941);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4942,seq4941__$1);
});


//# sourceMappingURL=core.js.map
