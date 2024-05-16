// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('ajax.util');
goog.require('cljs.core');
goog.require('ajax.protocols');
/**
 * Throws an error.
 */
ajax.util.throw_error = (function ajax$util$throw_error(args){
throw (new Error(cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)));
});
ajax.util.get_content_type = (function ajax$util$get_content_type(response){
var or__5002__auto__ = ajax.protocols._get_response_header.call(null,response,"Content-Type");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
});
/**
 * Takes a function that converts to a string and transforms it
 * into a function that converts to an object that will write
 * UTF-8 to the wire. Note that this is the identity function
 * for JavaScript because the underlying implementations take
 * a string.
 */
ajax.util.to_utf8_writer = (function ajax$util$to_utf8_writer(to_str){
return to_str;
});
/**
 * A set of successful response types derived from `goog.net.HttpStatus.isSuccess`.
 */
ajax.util.successful_response_codes_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [(206),null,(204),null,(304),null,(1223),null,(201),null,(202),null,(200),null], null), null);
/**
 * Indicates whether an HTTP status code is considered successful.
 */
ajax.util.success_QMARK_ = (function ajax$util$success_QMARK_(status){
return cljs.core.contains_QMARK_.call(null,ajax.util.successful_response_codes_set,status);
});

//# sourceMappingURL=util.js.map
