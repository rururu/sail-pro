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

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__22681,handler){
var map__22682 = p__22681;
var map__22682__$1 = (((((!((map__22682 == null))))?(((((map__22682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22682):map__22682);
var uri = cljs.core.get.call(null,map__22682__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__22682__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__22682__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__22682__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__22682__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__22682__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__22682__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__22682,map__22682__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__22680_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__22680_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__22682,map__22682__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5735__auto___22694 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___22694)){
var response_type_22695 = temp__5735__auto___22694;
this$__$1.responseType = cljs.core.name.call(null,response_type_22695);
} else {
}

var seq__22684_22696 = cljs.core.seq.call(null,headers);
var chunk__22685_22697 = null;
var count__22686_22698 = (0);
var i__22687_22699 = (0);
while(true){
if((i__22687_22699 < count__22686_22698)){
var vec__22688_22700 = cljs.core._nth.call(null,chunk__22685_22697,i__22687_22699);
var k_22701 = cljs.core.nth.call(null,vec__22688_22700,(0),null);
var v_22702 = cljs.core.nth.call(null,vec__22688_22700,(1),null);
this$__$1.setRequestHeader(k_22701,v_22702);


var G__22703 = seq__22684_22696;
var G__22704 = chunk__22685_22697;
var G__22705 = count__22686_22698;
var G__22706 = (i__22687_22699 + (1));
seq__22684_22696 = G__22703;
chunk__22685_22697 = G__22704;
count__22686_22698 = G__22705;
i__22687_22699 = G__22706;
continue;
} else {
var temp__5735__auto___22707 = cljs.core.seq.call(null,seq__22684_22696);
if(temp__5735__auto___22707){
var seq__22684_22708__$1 = temp__5735__auto___22707;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22684_22708__$1)){
var c__4461__auto___22709 = cljs.core.chunk_first.call(null,seq__22684_22708__$1);
var G__22710 = cljs.core.chunk_rest.call(null,seq__22684_22708__$1);
var G__22711 = c__4461__auto___22709;
var G__22712 = cljs.core.count.call(null,c__4461__auto___22709);
var G__22713 = (0);
seq__22684_22696 = G__22710;
chunk__22685_22697 = G__22711;
count__22686_22698 = G__22712;
i__22687_22699 = G__22713;
continue;
} else {
var vec__22691_22714 = cljs.core.first.call(null,seq__22684_22708__$1);
var k_22715 = cljs.core.nth.call(null,vec__22691_22714,(0),null);
var v_22716 = cljs.core.nth.call(null,vec__22691_22714,(1),null);
this$__$1.setRequestHeader(k_22715,v_22716);


var G__22717 = cljs.core.next.call(null,seq__22684_22708__$1);
var G__22718 = null;
var G__22719 = (0);
var G__22720 = (0);
seq__22684_22696 = G__22717;
chunk__22685_22697 = G__22718;
count__22686_22698 = G__22719;
i__22687_22699 = G__22720;
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
