// Compiled by ClojureScript 1.10.439 {}
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
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
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
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__8509,handler){
var map__8510 = p__8509;
var map__8510__$1 = (((((!((map__8510 == null))))?(((((map__8510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8510):map__8510);
var uri = cljs.core.get.call(null,map__8510__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__8510__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__8510__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__8510__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__8510__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__8510__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__8510__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__8510,map__8510__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__8508_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__8508_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__8510,map__8510__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5735__auto___8522 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___8522)){
var response_type_8523 = temp__5735__auto___8522;
this$__$1.responseType = cljs.core.name.call(null,response_type_8523);
} else {
}

var seq__8512_8524 = cljs.core.seq.call(null,headers);
var chunk__8513_8525 = null;
var count__8514_8526 = (0);
var i__8515_8527 = (0);
while(true){
if((i__8515_8527 < count__8514_8526)){
var vec__8516_8528 = cljs.core._nth.call(null,chunk__8513_8525,i__8515_8527);
var k_8529 = cljs.core.nth.call(null,vec__8516_8528,(0),null);
var v_8530 = cljs.core.nth.call(null,vec__8516_8528,(1),null);
this$__$1.setRequestHeader(k_8529,v_8530);


var G__8531 = seq__8512_8524;
var G__8532 = chunk__8513_8525;
var G__8533 = count__8514_8526;
var G__8534 = (i__8515_8527 + (1));
seq__8512_8524 = G__8531;
chunk__8513_8525 = G__8532;
count__8514_8526 = G__8533;
i__8515_8527 = G__8534;
continue;
} else {
var temp__5735__auto___8535 = cljs.core.seq.call(null,seq__8512_8524);
if(temp__5735__auto___8535){
var seq__8512_8536__$1 = temp__5735__auto___8535;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8512_8536__$1)){
var c__4461__auto___8537 = cljs.core.chunk_first.call(null,seq__8512_8536__$1);
var G__8538 = cljs.core.chunk_rest.call(null,seq__8512_8536__$1);
var G__8539 = c__4461__auto___8537;
var G__8540 = cljs.core.count.call(null,c__4461__auto___8537);
var G__8541 = (0);
seq__8512_8524 = G__8538;
chunk__8513_8525 = G__8539;
count__8514_8526 = G__8540;
i__8515_8527 = G__8541;
continue;
} else {
var vec__8519_8542 = cljs.core.first.call(null,seq__8512_8536__$1);
var k_8543 = cljs.core.nth.call(null,vec__8519_8542,(0),null);
var v_8544 = cljs.core.nth.call(null,vec__8519_8542,(1),null);
this$__$1.setRequestHeader(k_8543,v_8544);


var G__8545 = cljs.core.next.call(null,seq__8512_8536__$1);
var G__8546 = null;
var G__8547 = (0);
var G__8548 = (0);
seq__8512_8524 = G__8545;
chunk__8513_8525 = G__8546;
count__8514_8526 = G__8547;
i__8515_8527 = G__8548;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4047__auto__ = body;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map
