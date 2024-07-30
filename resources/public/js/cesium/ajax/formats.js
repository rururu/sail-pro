// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('ajax.formats');
goog.require('cljs.core');
goog.require('ajax.interceptors');
goog.require('ajax.util');
goog.require('ajax.protocols');
/**
 * This will literally return whatever the underlying implementation
 * considers has been sent. Obviously, this is highly implementation
 * dependent, gives different results depending on your platform but
 * is nonetheless really rather useful.
 */
ajax.formats.raw_response_format = (function ajax$formats$raw_response_format(var_args){
var G__47068 = arguments.length;
switch (G__47068) {
case 0:
return ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.interceptors.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.protocols._body,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
}));

(ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.formats.raw_response_format.call(null);
}));

(ajax.formats.raw_response_format.cljs$lang$maxFixedArity = 1);

ajax.formats.text_request_format = (function ajax$formats$text_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.util.to_utf8_writer.call(null,cljs.core.identity),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain; charset=utf-8"], null);
});
ajax.formats.text_response_format = ajax.formats.raw_response_format;
/**
 * Converts one of a number of types to a response format.
 * Note that it processes `[text format]` the same as `format`,
 * which makes it easier to work with detection vectors such as
 * `default-formats`.
 * 
 * It also supports providing formats as raw functions. I don't 
 * know if anyone has ever used this.
 */
ajax.formats.get_format = (function ajax$formats$get_format(request,format_entry){
if((((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry)))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.formats.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});
ajax.formats.get_accept_entries = (function ajax$formats$get_accept_entries(request,format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.formats.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});
ajax.formats.content_type_matches = (function ajax$formats$content_type_matches(content_type,accept){
return ((cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0))));
});
ajax.formats.detect_content_type = (function ajax$formats$detect_content_type(content_type,request,format_entry){
var accept = ajax.formats.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,(function (p1__47070_SHARP_){
return ajax.formats.content_type_matches.call(null,content_type,p1__47070_SHARP_);
}),accept);
});
ajax.formats.get_default_format = (function ajax$formats$get_default_format(response,p__47071){
var map__47072 = p__47071;
var map__47072__$1 = cljs.core.__destructure_map.call(null,map__47072);
var request = map__47072__$1;
var response_format = cljs.core.get.call(null,map__47072__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var content_type = ajax.util.get_content_type.call(null,response);
var accepted_format_QMARK_ = (function ajax$formats$get_default_format_$_accepted_format_QMARK_(format_entry){
return ajax.formats.detect_content_type.call(null,content_type,request,format_entry);
});
return ajax.formats.get_format.call(null,request,cljs.core.first.call(null,cljs.core.filter.call(null,accepted_format_QMARK_,response_format)));
});
ajax.formats.detect_response_format_read = (function ajax$formats$detect_response_format_read(request){
return (function ajax$formats$detect_response_format_read_$_detect_response_format(response){
var format = ajax.formats.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});
});
ajax.formats.accept_header = (function ajax$formats$accept_header(p__47074){
var map__47075 = p__47074;
var map__47075__$1 = cljs.core.__destructure_map.call(null,map__47075);
var request = map__47075__$1;
var response_format = cljs.core.get.call(null,map__47075__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var formats = ((cljs.core.vector_QMARK_.call(null,response_format))?response_format:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null));
return cljs.core.mapcat.call(null,(function (p1__47073_SHARP_){
return ajax.formats.get_accept_entries.call(null,request,p1__47073_SHARP_);
}),formats);
});
/**
 * NB This version of the response format doesn't have a zero
 *   arity version. This is because it would involve pulling
 *   in every dependency. Instead, core.cljc adds it in.
 */
ajax.formats.detect_response_format = (function ajax$formats$detect_response_format(opts){
var accept = ajax.formats.accept_header.call(null,opts);
return ajax.interceptors.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.formats.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),["(from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(accept),")"].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),accept], null));
});

//# sourceMappingURL=formats.js.map
