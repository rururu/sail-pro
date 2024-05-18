// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('ajax.transit');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('ajax.interceptors');
goog.require('ajax.protocols');
goog.require('ajax.util');
ajax.transit.transit_type = (function ajax$transit$transit_type(p__6729){
var map__6730 = p__6729;
var map__6730__$1 = cljs.core.__destructure_map.call(null,map__6730);
var type = cljs.core.get.call(null,map__6730__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var or__5002__auto__ = type;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
});
ajax.transit.transit_write_fn = (function ajax$transit$transit_write_fn(type,opts){
var writer = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cognitect.transit.writer.call(null,type,opts);
}
})();
return (function ajax$transit$transit_write_fn_$_transit_write_params(params){
return cognitect.transit.write.call(null,writer,params);
});
});
/**
 * Returns a Transit request format.
 * 
 * Options include:
 * :writer Explicit Transit writer. If not supplied one will be created using the other options.
 *         The default type is :json for ClojureScript and :msgpack for Clojure.
 * :type Override the default transit type with value :json, :json-verbose or :msgpack
 * :handlers Custom Transit handlers (refer to Transit documentation)
 */
ajax.transit.transit_request_format = (function ajax$transit$transit_request_format(var_args){
var G__6732 = arguments.length;
switch (G__6732) {
case 0:
return ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.transit.transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var type = ajax.transit.transit_type.call(null,opts);
var mime_type = ((((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"json","json",1279968570))) || (cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"json-verbose","json-verbose",-542533531)))))?"json":"msgpack");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.transit.transit_write_fn.call(null,type,opts),new cljs.core.Keyword(null,"content-type","content-type",-508222634),["application/transit+",mime_type].join('')], null);
}));

(ajax.transit.transit_request_format.cljs$lang$maxFixedArity = 1);

ajax.transit.transit_read_fn = (function ajax$transit$transit_read_fn(opts){
var reader = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),opts);
}
})();
return (function ajax$transit$transit_read_fn_$_transit_read_response(response){
return cognitect.transit.read.call(null,reader,ajax.protocols._body.call(null,response));
});
});
/**
 * Returns a Transit response format.
 * 
 * Options include:
 * :reader (CLJS only) Explicit Transit reader. If not supplied one will be created using the other options.
 * :handlers Custom Transit handlers (refer to Transit documentation)
 */
ajax.transit.transit_response_format = (function ajax$transit$transit_response_format(var_args){
var G__6735 = arguments.length;
switch (G__6735) {
case 0:
return ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.transit.transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return ajax.transit.transit_response_format.call(null,ajax.transit.transit_type.call(null,opts),opts);
}));

(ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return ajax.interceptors.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.transit.transit_read_fn.call(null,opts),new cljs.core.Keyword(null,"description","description",-1428560544),"Transit",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json"], null)], null));
}));

(ajax.transit.transit_response_format.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=transit.js.map
