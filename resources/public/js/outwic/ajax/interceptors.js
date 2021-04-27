// Compiled by ClojureScript 1.10.439 {}
goog.provide('ajax.interceptors');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.util');
goog.require('ajax.url');
goog.require('ajax.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k8279,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__8283 = k8279;
var G__8283__$1 = (((G__8283 instanceof cljs.core.Keyword))?G__8283.fqn:null);
switch (G__8283__$1) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k8279,else__4304__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__8284){
var vec__8285 = p__8284;
var k__4324__auto__ = cljs.core.nth.call(null,vec__8285,(0),null);
var v__4325__auto__ = cljs.core.nth.call(null,vec__8285,(1),null);
return f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__);
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__8288,opts){
var self__ = this;
var map__8289 = p__8288;
var map__8289__$1 = (((((!((map__8289 == null))))?(((((map__8289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8289):map__8289);
var request__$1 = cljs.core.get.call(null,map__8289__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__8291 = this;
var map__8291__$1 = (((((!((map__8291 == null))))?(((((map__8291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8291):map__8291);
var request__$2 = cljs.core.get.call(null,map__8291__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__8293,xhrio){
var self__ = this;
var map__8294 = p__8293;
var map__8294__$1 = (((((!((map__8294 == null))))?(((((map__8294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8294):map__8294);
var response__$1 = cljs.core.get.call(null,map__8294__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__8296 = this;
var map__8296__$1 = (((((!((map__8296 == null))))?(((((map__8296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8296):map__8296);
var response__$2 = cljs.core.get.call(null,map__8296__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,pr_pair__4318__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__4317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8278){
var self__ = this;
var G__8278__$1 = this;
return (new cljs.core.RecordIter((0),G__8278__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (1482887116 ^ cljs.core.hash_unordered_coll.call(null,coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
.call(null,this__4297__auto____$1);
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8280,other8281){
var self__ = this;
var this8280__$1 = this;
return (((!((other8281 == null)))) && ((this8280__$1.constructor === other8281.constructor)) && (cljs.core._EQ_.call(null,this8280__$1.name,other8281.name)) && (cljs.core._EQ_.call(null,this8280__$1.request,other8281.request)) && (cljs.core._EQ_.call(null,this8280__$1.response,other8281.response)) && (cljs.core._EQ_.call(null,this8280__$1.__extmap,other8281.__extmap)));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4311__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__8278){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__8298 = cljs.core.keyword_identical_QMARK_;
var expr__8299 = k__4309__auto__;
if(cljs.core.truth_(pred__8298.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__8299))){
return (new ajax.interceptors.StandardInterceptor(G__8278,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8298.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__8299))){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__8278,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8298.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__8299))){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__8278,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4309__auto__,G__8278),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"request","request",1772954723),self__.request,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"response","response",-1068424192),self__.response,null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__8278){
var self__ = this;
var this__4300__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__8278,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4307__auto__,(0)),cljs.core._nth.call(null,entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"ajax.interceptors/StandardInterceptor",null,(1),null));
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"ajax.interceptors/StandardInterceptor");
});

/**
 * Positional factory function for ajax.interceptors/StandardInterceptor.
 */
ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

/**
 * Factory function for ajax.interceptors/StandardInterceptor, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__8282){
var extmap__4340__auto__ = (function (){var G__8301 = cljs.core.dissoc.call(null,G__8282,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192));
if(cljs.core.record_QMARK_.call(null,G__8282)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__8301);
} else {
return G__8301;
}
})();
return (new ajax.interceptors.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__8282),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__8282),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__8282),null,cljs.core.not_empty.call(null,extmap__4340__auto__),null));
});

ajax.interceptors.to_interceptor = (function ajax$interceptors$to_interceptor(m){

return ajax.interceptors.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.interceptors.exception_message = (function ajax$interceptors$exception_message(e){
return e.message;
});
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__8303,xhrio){
var map__8304 = p__8303;
var map__8304__$1 = (((((!((map__8304 == null))))?(((((map__8304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8304):map__8304);
var description = cljs.core.get.call(null,map__8304__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.interceptors.exception_message.call(null,e)),"  Format should have been ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(ajax.util.success_QMARK_.call(null,status)){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.interceptors.fail = (function ajax$interceptors$fail(var_args){
var args__4647__auto__ = [];
var len__4641__auto___8310 = arguments.length;
var i__4642__auto___8311 = (0);
while(true){
if((i__4642__auto___8311 < len__4641__auto___8310)){
args__4647__auto__.push((arguments[i__4642__auto___8311]));

var G__8312 = (i__4642__auto___8311 + (1));
i__4642__auto___8311 = G__8312;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
ajax.interceptors.fail.cljs$lang$applyTo = (function (seq8306){
var G__8307 = cljs.core.first.call(null,seq8306);
var seq8306__$1 = cljs.core.next.call(null,seq8306);
var G__8308 = cljs.core.first.call(null,seq8306__$1);
var seq8306__$2 = cljs.core.next.call(null,seq8306__$1);
var G__8309 = cljs.core.first.call(null,seq8306__$2);
var seq8306__$3 = cljs.core.next.call(null,seq8306__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8307,G__8308,G__8309,seq8306__$3);
});

ajax.interceptors.content_type_to_request_header = (function ajax$interceptors$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k8315,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__8319 = k8315;
var G__8319__$1 = (((G__8319 instanceof cljs.core.Keyword))?G__8319.fqn:null);
switch (G__8319__$1) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k8315,else__4304__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__8320){
var vec__8321 = p__8320;
var k__4324__auto__ = cljs.core.nth.call(null,vec__8321,(0),null);
var v__4325__auto__ = cljs.core.nth.call(null,vec__8321,(1),null);
return f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__);
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__8324,request){
var self__ = this;
var map__8325 = p__8324;
var map__8325__$1 = (((((!((map__8325 == null))))?(((((map__8325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8325):map__8325);
var content_type__$1 = cljs.core.get.call(null,map__8325__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__8327 = this;
var map__8327__$1 = (((((!((map__8327 == null))))?(((((map__8327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8327):map__8327);
var content_type__$2 = cljs.core.get.call(null,map__8327__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__8327,map__8327__$1,content_type__$2,map__8325,map__8325__$1,content_type__$1){
return (function (p1__8313_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__4047__auto__ = p1__8313_SHARP_;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__8327,map__8327__$1,content_type__$2,map__8325,map__8325__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__8329,xhrio){
var self__ = this;
var map__8330 = p__8329;
var map__8330__$1 = (((((!((map__8330 == null))))?(((((map__8330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8330):map__8330);
var format = map__8330__$1;
var read__$1 = cljs.core.get.call(null,map__8330__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__8332 = this;
var map__8332__$1 = (((((!((map__8332 == null))))?(((((map__8332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8332):map__8332);
var format__$1 = map__8332__$1;
var read__$2 = cljs.core.get.call(null,map__8332__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.interceptors.fail,status);
var G__8335 = status;
switch (G__8335) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(ajax.util.success_QMARK_.call(null,status)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e8336){if((e8336 instanceof Object)){
var e = e8336;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e8336;

}
}
}
}catch (e8334){if((e8334 instanceof Object)){
var e = e8334;
var message = e.message;
return ajax.interceptors.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e8334;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,pr_pair__4318__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__4317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8314){
var self__ = this;
var G__8314__$1 = this;
return (new cljs.core.RecordIter((0),G__8314__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-2103965186 ^ cljs.core.hash_unordered_coll.call(null,coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
.call(null,this__4297__auto____$1);
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8316,other8317){
var self__ = this;
var this8316__$1 = this;
return (((!((other8317 == null)))) && ((this8316__$1.constructor === other8317.constructor)) && (cljs.core._EQ_.call(null,this8316__$1.read,other8317.read)) && (cljs.core._EQ_.call(null,this8316__$1.description,other8317.description)) && (cljs.core._EQ_.call(null,this8316__$1.content_type,other8317.content_type)) && (cljs.core._EQ_.call(null,this8316__$1.__extmap,other8317.__extmap)));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4311__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__8314){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__8337 = cljs.core.keyword_identical_QMARK_;
var expr__8338 = k__4309__auto__;
if(cljs.core.truth_(pred__8337.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__8338))){
return (new ajax.interceptors.ResponseFormat(G__8314,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8337.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__8338))){
return (new ajax.interceptors.ResponseFormat(self__.read,G__8314,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8337.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__8338))){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__8314,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4309__auto__,G__8314),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"read","read",1140058661),self__.read,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"description","description",-1428560544),self__.description,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type,null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__8314){
var self__ = this;
var this__4300__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__8314,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4307__auto__,(0)),cljs.core._nth.call(null,entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"ajax.interceptors/ResponseFormat",null,(1),null));
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"ajax.interceptors/ResponseFormat");
});

/**
 * Positional factory function for ajax.interceptors/ResponseFormat.
 */
ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

/**
 * Factory function for ajax.interceptors/ResponseFormat, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__8318){
var extmap__4340__auto__ = (function (){var G__8340 = cljs.core.dissoc.call(null,G__8318,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634));
if(cljs.core.record_QMARK_.call(null,G__8318)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__8340);
} else {
return G__8340;
}
})();
return (new ajax.interceptors.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__8318),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__8318),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__8318),null,cljs.core.not_empty.call(null,extmap__4340__auto__),null));
});

ajax.interceptors.get_request_format = (function ajax$interceptors$get_request_format(format){

if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
ajax.interceptors.apply_request_format = (function ajax$interceptors$apply_request_format(write,params){
return write.call(null,params);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k8344,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__8348 = k8344;
switch (G__8348) {
default:
return cljs.core.get.call(null,self__.__extmap,k8344,else__4304__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__8349){
var vec__8350 = p__8349;
var k__4324__auto__ = cljs.core.nth.call(null,vec__8350,(0),null);
var v__4325__auto__ = cljs.core.nth.call(null,vec__8350,(1),null);
return f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__);
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__8353){
var self__ = this;
var map__8354 = p__8353;
var map__8354__$1 = (((((!((map__8354 == null))))?(((((map__8354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8354):map__8354);
var request = map__8354__$1;
var uri = cljs.core.get.call(null,map__8354__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__8354__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__8354__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__8354__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__8354__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__8356 = ajax.interceptors.get_request_format.call(null,format);
var map__8356__$1 = (((((!((map__8356 == null))))?(((((map__8356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8356):map__8356);
var write = cljs.core.get.call(null,map__8356__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__8356__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = (((!((write == null))))?ajax.interceptors.apply_request_format.call(null,write,params):ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__4047__auto__ = headers;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.interceptors.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,pr_pair__4318__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__4317__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8343){
var self__ = this;
var G__8343__$1 = this;
return (new cljs.core.RecordIter((0),G__8343__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (1698259290 ^ cljs.core.hash_unordered_coll.call(null,coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
.call(null,this__4297__auto____$1);
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8345,other8346){
var self__ = this;
var this8345__$1 = this;
return (((!((other8346 == null)))) && ((this8345__$1.constructor === other8346.constructor)) && (cljs.core._EQ_.call(null,this8345__$1.__extmap,other8346.__extmap)));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4311__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__8343){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__8358 = cljs.core.keyword_identical_QMARK_;
var expr__8359 = k__4309__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4309__auto__,G__8343),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__8343){
var self__ = this;
var this__4300__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__8343,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4307__auto__,(0)),cljs.core._nth.call(null,entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"ajax.interceptors/ApplyRequestFormat",null,(1),null));
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"ajax.interceptors/ApplyRequestFormat");
});

/**
 * Positional factory function for ajax.interceptors/ApplyRequestFormat.
 */
ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

/**
 * Factory function for ajax.interceptors/ApplyRequestFormat, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__8347){
var extmap__4340__auto__ = (function (){var G__8361 = cljs.core.dissoc.call(null,G__8347);
if(cljs.core.record_QMARK_.call(null,G__8347)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__8361);
} else {
return G__8361;
}
})();
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty.call(null,extmap__4340__auto__),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var G__8364 = arguments.length;
switch (G__8364) {
case 2:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__8365,uri){
var map__8366 = p__8365;
var map__8366__$1 = (((((!((map__8366 == null))))?(((((map__8366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8366):map__8366);
var vec_strategy = cljs.core.get.call(null,map__8366__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__8366__$1,new cljs.core.Keyword(null,"params","params",710516235));
var method = cljs.core.get.call(null,map__8366__$1,new cljs.core.Keyword(null,"method","method",55703592));
var url_params = cljs.core.get.call(null,map__8366__$1,new cljs.core.Keyword(null,"url-params","url-params",-697567619));

var temp__5733__auto__ = ((((cljs.core._EQ_.call(null,method,"GET")) && ((url_params == null))))?params:url_params);
if(cljs.core.truth_(temp__5733__auto__)){
var final_url_params = temp__5733__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,final_url_params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__8368){
var map__8369 = p__8368;
var map__8369__$1 = (((((!((map__8369 == null))))?(((((map__8369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8369):map__8369);
var vec_strategy = cljs.core.get.call(null,map__8369__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__8369__$1,new cljs.core.Keyword(null,"params","params",710516235));
var method = cljs.core.get.call(null,map__8369__$1,new cljs.core.Keyword(null,"method","method",55703592));
var url_params = cljs.core.get.call(null,map__8369__$1,new cljs.core.Keyword(null,"url-params","url-params",-697567619));
return ((function (map__8369,map__8369__$1,vec_strategy,params,method,url_params){
return (function (uri){

var temp__5733__auto__ = ((((cljs.core._EQ_.call(null,method,"GET")) && ((url_params == null))))?params:url_params);
if(cljs.core.truth_(temp__5733__auto__)){
var final_url_params = temp__5733__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,final_url_params))].join('');
} else {
return uri;
}
});
;})(map__8369,map__8369__$1,vec_strategy,params,method,url_params))
});

ajax.interceptors.uri_with_params.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ProcessUrlParameters = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k8373,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__8377 = k8373;
switch (G__8377) {
default:
return cljs.core.get.call(null,self__.__extmap,k8373,else__4304__auto__);

}
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__8378){
var vec__8379 = p__8378;
var k__4324__auto__ = cljs.core.nth.call(null,vec__8379,(0),null);
var v__4325__auto__ = cljs.core.nth.call(null,vec__8379,(1),null);
return f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__);
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

ajax.interceptors.ProcessUrlParameters.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessUrlParameters.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__8382){
var self__ = this;
var map__8383 = p__8382;
var map__8383__$1 = (((((!((map__8383 == null))))?(((((map__8383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8383):map__8383);
var request = map__8383__$1;
var method = cljs.core.get.call(null,map__8383__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
var if_get_reduce = ((cljs.core._EQ_.call(null,method,"GET"))?cljs.core.reduced:cljs.core.identity);
return if_get_reduce.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),ajax.interceptors.uri_with_params.call(null,request)));
});

ajax.interceptors.ProcessUrlParameters.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,pr_pair__4318__auto__,"#ajax.interceptors.ProcessUrlParameters{",", ","}",opts__4317__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8372){
var self__ = this;
var G__8372__$1 = this;
return (new cljs.core.RecordIter((0),G__8372__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new ajax.interceptors.ProcessUrlParameters(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-516728758 ^ cljs.core.hash_unordered_coll.call(null,coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
.call(null,this__4297__auto____$1);
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8374,other8375){
var self__ = this;
var this8374__$1 = this;
return (((!((other8375 == null)))) && ((this8374__$1.constructor === other8375.constructor)) && (cljs.core._EQ_.call(null,this8374__$1.__extmap,other8375.__extmap)));
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new ajax.interceptors.ProcessUrlParameters(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4311__auto__)),null));
}
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__8372){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__8385 = cljs.core.keyword_identical_QMARK_;
var expr__8386 = k__4309__auto__;
return (new ajax.interceptors.ProcessUrlParameters(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4309__auto__,G__8372),null));
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__8372){
var self__ = this;
var this__4300__auto____$1 = this;
return (new ajax.interceptors.ProcessUrlParameters(G__8372,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4307__auto__,(0)),cljs.core._nth.call(null,entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

ajax.interceptors.ProcessUrlParameters.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessUrlParameters.cljs$lang$type = true;

ajax.interceptors.ProcessUrlParameters.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"ajax.interceptors/ProcessUrlParameters",null,(1),null));
});

ajax.interceptors.ProcessUrlParameters.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"ajax.interceptors/ProcessUrlParameters");
});

/**
 * Positional factory function for ajax.interceptors/ProcessUrlParameters.
 */
ajax.interceptors.__GT_ProcessUrlParameters = (function ajax$interceptors$__GT_ProcessUrlParameters(){
return (new ajax.interceptors.ProcessUrlParameters(null,null,null));
});

/**
 * Factory function for ajax.interceptors/ProcessUrlParameters, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_ProcessUrlParameters = (function ajax$interceptors$map__GT_ProcessUrlParameters(G__8376){
var extmap__4340__auto__ = (function (){var G__8388 = cljs.core.dissoc.call(null,G__8376);
if(cljs.core.record_QMARK_.call(null,G__8376)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__8388);
} else {
return G__8388;
}
})();
return (new ajax.interceptors.ProcessUrlParameters(null,cljs.core.not_empty.call(null,extmap__4340__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k8391,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__8395 = k8391;
switch (G__8395) {
default:
return cljs.core.get.call(null,self__.__extmap,k8391,else__4304__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__8396){
var vec__8397 = p__8396;
var k__4324__auto__ = cljs.core.nth.call(null,vec__8397,(0),null);
var v__4325__auto__ = cljs.core.nth.call(null,vec__8397,(1),null);
return f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__);
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__8400){
var self__ = this;
var map__8401 = p__8400;
var map__8401__$1 = (((((!((map__8401 == null))))?(((((map__8401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8401):map__8401);
var request = map__8401__$1;
var body = cljs.core.get.call(null,map__8401__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,pr_pair__4318__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__4317__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8390){
var self__ = this;
var G__8390__$1 = this;
return (new cljs.core.RecordIter((0),G__8390__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-1077152635 ^ cljs.core.hash_unordered_coll.call(null,coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
.call(null,this__4297__auto____$1);
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8392,other8393){
var self__ = this;
var this8392__$1 = this;
return (((!((other8393 == null)))) && ((this8392__$1.constructor === other8393.constructor)) && (cljs.core._EQ_.call(null,this8392__$1.__extmap,other8393.__extmap)));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4311__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__8390){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__8403 = cljs.core.keyword_identical_QMARK_;
var expr__8404 = k__4309__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4309__auto__,G__8390),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__8390){
var self__ = this;
var this__4300__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__8390,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4307__auto__,(0)),cljs.core._nth.call(null,entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"ajax.interceptors/DirectSubmission",null,(1),null));
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"ajax.interceptors/DirectSubmission");
});

/**
 * Positional factory function for ajax.interceptors/DirectSubmission.
 */
ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

/**
 * Factory function for ajax.interceptors/DirectSubmission, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__8394){
var extmap__4340__auto__ = (function (){var G__8406 = cljs.core.dissoc.call(null,G__8394);
if(cljs.core.record_QMARK_.call(null,G__8394)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__8406);
} else {
return G__8406;
}
})();
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty.call(null,extmap__4340__auto__),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessUrlParameters(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__8408){
var map__8409 = p__8408;
var map__8409__$1 = (((((!((map__8409 == null))))?(((((map__8409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8409):map__8409);
var opts = map__8409__$1;
var response_format = cljs.core.get.call(null,map__8409__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(ajax.interceptors.is_response_format_QMARK_.call(null,response_format)){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return interpret_vector.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
});

//# sourceMappingURL=interceptors.js.map
