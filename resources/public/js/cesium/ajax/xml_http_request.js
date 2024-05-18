// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.call(null,(function (headers,header_line){
if(goog.string.isEmptyOrWhitespace(header_line)){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.call(null,headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return req.call(null,"xmlhttprequest").XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__6533,handler){
var map__6534 = p__6533;
var map__6534__$1 = cljs.core.__destructure_map.call(null,map__6534);
var uri = cljs.core.get.call(null,map__6534__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__6534__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__6534__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__6534__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__6534__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__6534__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__6534__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__6532_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__6532_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___6551 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___6551)){
var response_type_6552 = temp__5804__auto___6551;
(this$__$1.responseType = cljs.core.name.call(null,response_type_6552));
} else {
}

var seq__6535_6553 = cljs.core.seq.call(null,headers);
var chunk__6536_6554 = null;
var count__6537_6555 = (0);
var i__6538_6556 = (0);
while(true){
if((i__6538_6556 < count__6537_6555)){
var vec__6545_6557 = cljs.core._nth.call(null,chunk__6536_6554,i__6538_6556);
var k_6558 = cljs.core.nth.call(null,vec__6545_6557,(0),null);
var v_6559 = cljs.core.nth.call(null,vec__6545_6557,(1),null);
this$__$1.setRequestHeader(k_6558,v_6559);


var G__6560 = seq__6535_6553;
var G__6561 = chunk__6536_6554;
var G__6562 = count__6537_6555;
var G__6563 = (i__6538_6556 + (1));
seq__6535_6553 = G__6560;
chunk__6536_6554 = G__6561;
count__6537_6555 = G__6562;
i__6538_6556 = G__6563;
continue;
} else {
var temp__5804__auto___6564 = cljs.core.seq.call(null,seq__6535_6553);
if(temp__5804__auto___6564){
var seq__6535_6565__$1 = temp__5804__auto___6564;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6535_6565__$1)){
var c__5525__auto___6566 = cljs.core.chunk_first.call(null,seq__6535_6565__$1);
var G__6567 = cljs.core.chunk_rest.call(null,seq__6535_6565__$1);
var G__6568 = c__5525__auto___6566;
var G__6569 = cljs.core.count.call(null,c__5525__auto___6566);
var G__6570 = (0);
seq__6535_6553 = G__6567;
chunk__6536_6554 = G__6568;
count__6537_6555 = G__6569;
i__6538_6556 = G__6570;
continue;
} else {
var vec__6548_6571 = cljs.core.first.call(null,seq__6535_6565__$1);
var k_6572 = cljs.core.nth.call(null,vec__6548_6571,(0),null);
var v_6573 = cljs.core.nth.call(null,vec__6548_6571,(1),null);
this$__$1.setRequestHeader(k_6572,v_6573);


var G__6574 = cljs.core.next.call(null,seq__6535_6565__$1);
var G__6575 = null;
var G__6576 = (0);
var G__6577 = (0);
seq__6535_6553 = G__6574;
chunk__6536_6554 = G__6575;
count__6537_6555 = G__6576;
i__6538_6556 = G__6577;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5002__auto__ = body;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
}));

//# sourceMappingURL=xml_http_request.js.map
