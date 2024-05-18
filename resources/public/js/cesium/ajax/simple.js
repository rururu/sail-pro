// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('ajax.simple');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.protocols');
goog.require('ajax.interceptors');
goog.require('ajax.formats');
goog.require('ajax.util');
goog.require('goog.net.XhrIo');
ajax.simple.normalize_method = (function ajax$simple$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.simple.process_response = (function ajax$simple$process_response(response,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response);
});
ajax.simple.make_js_handler = (function ajax$simple$make_js_handler(handler,interceptors){
return (function ajax$simple$make_js_handler_$_js_handler(response){
var processed = cljs.core.reduce.call(null,ajax.simple.process_response,response,interceptors);
return handler.call(null,processed);
});
});
ajax.simple.base_handler = (function ajax$simple$base_handler(interceptors,p__6761){
var map__6762 = p__6761;
var map__6762__$1 = cljs.core.__destructure_map.call(null,map__6762);
var handler = cljs.core.get.call(null,map__6762__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.simple.make_js_handler.call(null,handler,interceptors);
} else {
return ajax.util.throw_error.call(null,"No ajax handler provided.");
}
});
ajax.simple.default_interceptors = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
ajax.simple.normalize_request = (function ajax$simple$normalize_request(request){
var response_format = ajax.interceptors.get_response_format.call(null,ajax.formats.detect_response_format,request);
return cljs.core.update.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"method","method",55703592),ajax.simple.normalize_method),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),(function (p1__6763_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__5002__auto__ = p1__6763_SHARP_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref.call(null,ajax.simple.default_interceptors);
}
})(),ajax.interceptors.request_interceptors);
}));
});
ajax.simple.new_default_api = (function ajax$simple$new_default_api(){
return (new goog.net.XhrIo());
});
/**
 * -process-request with the arguments flipped for use in reduce
 */
ajax.simple.process_request = (function ajax$simple$process_request(request,interceptor){
return ajax.protocols._process_request.call(null,interceptor,request);
});
/**
 * The main request function.
 */
ajax.simple.raw_ajax_request = (function ajax$simple$raw_ajax_request(p__6764){
var map__6765 = p__6764;
var map__6765__$1 = cljs.core.__destructure_map.call(null,map__6765);
var request = map__6765__$1;
var interceptors = cljs.core.get.call(null,map__6765__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var request__$1 = cljs.core.reduce.call(null,ajax.simple.process_request,request,interceptors);
var handler = ajax.simple.base_handler.call(null,cljs.core.reverse.call(null,interceptors),request__$1);
var api = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return ajax.simple.new_default_api.call(null);
}
})();
return ajax.protocols._js_ajax_request.call(null,api,request__$1,handler);
});
ajax.simple.ajax_request = (function ajax$simple$ajax_request(request){
return ajax.simple.raw_ajax_request.call(null,ajax.simple.normalize_request.call(null,request));
});

//# sourceMappingURL=simple.js.map
