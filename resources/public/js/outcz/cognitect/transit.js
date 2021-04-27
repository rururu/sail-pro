// Compiled by ClojureScript 1.10.439 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if((((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID)))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if((((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID)))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,["#uuid \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid__$1.toString()),"\""].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__8546_8550 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__8547_8551 = null;
var count__8548_8552 = (0);
var i__8549_8553 = (0);
while(true){
if((i__8549_8553 < count__8548_8552)){
var k_8554 = cljs.core._nth.call(null,chunk__8547_8551,i__8549_8553);
var v_8555 = (b[k_8554]);
(a[k_8554] = v_8555);


var G__8556 = seq__8546_8550;
var G__8557 = chunk__8547_8551;
var G__8558 = count__8548_8552;
var G__8559 = (i__8549_8553 + (1));
seq__8546_8550 = G__8556;
chunk__8547_8551 = G__8557;
count__8548_8552 = G__8558;
i__8549_8553 = G__8559;
continue;
} else {
var temp__5735__auto___8560 = cljs.core.seq.call(null,seq__8546_8550);
if(temp__5735__auto___8560){
var seq__8546_8561__$1 = temp__5735__auto___8560;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8546_8561__$1)){
var c__4461__auto___8562 = cljs.core.chunk_first.call(null,seq__8546_8561__$1);
var G__8563 = cljs.core.chunk_rest.call(null,seq__8546_8561__$1);
var G__8564 = c__4461__auto___8562;
var G__8565 = cljs.core.count.call(null,c__4461__auto___8562);
var G__8566 = (0);
seq__8546_8550 = G__8563;
chunk__8547_8551 = G__8564;
count__8548_8552 = G__8565;
i__8549_8553 = G__8566;
continue;
} else {
var k_8567 = cljs.core.first.call(null,seq__8546_8561__$1);
var v_8568 = (b[k_8567]);
(a[k_8567] = v_8568);


var G__8569 = cljs.core.next.call(null,seq__8546_8561__$1);
var G__8570 = null;
var G__8571 = (0);
var G__8572 = (0);
seq__8546_8550 = G__8569;
chunk__8547_8551 = G__8570;
count__8548_8552 = G__8571;
i__8549_8553 = G__8572;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
});
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cognitect.transit/MapBuilder");
});

/**
 * Positional factory function for cognitect.transit/MapBuilder.
 */
cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cognitect.transit/VectorBuilder");
});

/**
 * Positional factory function for cognitect.transit/VectorBuilder.
 */
cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var G__8574 = arguments.length;
switch (G__8574) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader(cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__8576 = (i + (2));
var G__8577 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__8576;
ret = G__8577;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
}),"with-meta",(function (v){
return cljs.core.with_meta.call(null,(v[(0)]),(v[(1)]));
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cognitect.transit/KeywordHandler");
});

/**
 * Positional factory function for cognitect.transit/KeywordHandler.
 */
cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cognitect.transit/SymbolHandler");
});

/**
 * Positional factory function for cognitect.transit/SymbolHandler.
 */
cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
});
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__8578_8582 = cljs.core.seq.call(null,v);
var chunk__8579_8583 = null;
var count__8580_8584 = (0);
var i__8581_8585 = (0);
while(true){
if((i__8581_8585 < count__8580_8584)){
var x_8586 = cljs.core._nth.call(null,chunk__8579_8583,i__8581_8585);
ret.push(x_8586);


var G__8587 = seq__8578_8582;
var G__8588 = chunk__8579_8583;
var G__8589 = count__8580_8584;
var G__8590 = (i__8581_8585 + (1));
seq__8578_8582 = G__8587;
chunk__8579_8583 = G__8588;
count__8580_8584 = G__8589;
i__8581_8585 = G__8590;
continue;
} else {
var temp__5735__auto___8591 = cljs.core.seq.call(null,seq__8578_8582);
if(temp__5735__auto___8591){
var seq__8578_8592__$1 = temp__5735__auto___8591;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8578_8592__$1)){
var c__4461__auto___8593 = cljs.core.chunk_first.call(null,seq__8578_8592__$1);
var G__8594 = cljs.core.chunk_rest.call(null,seq__8578_8592__$1);
var G__8595 = c__4461__auto___8593;
var G__8596 = cljs.core.count.call(null,c__4461__auto___8593);
var G__8597 = (0);
seq__8578_8582 = G__8594;
chunk__8579_8583 = G__8595;
count__8580_8584 = G__8596;
i__8581_8585 = G__8597;
continue;
} else {
var x_8598 = cljs.core.first.call(null,seq__8578_8592__$1);
ret.push(x_8598);


var G__8599 = cljs.core.next.call(null,seq__8578_8592__$1);
var G__8600 = null;
var G__8601 = (0);
var G__8602 = (0);
seq__8578_8582 = G__8599;
chunk__8579_8583 = G__8600;
count__8580_8584 = G__8601;
i__8581_8585 = G__8602;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cognitect.transit/ListHandler");
});

/**
 * Positional factory function for cognitect.transit/ListHandler.
 */
cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
});
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cognitect.transit/MapHandler");
});

/**
 * Positional factory function for cognitect.transit/MapHandler.
 */
cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
});
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__8603_8607 = cljs.core.seq.call(null,v);
var chunk__8604_8608 = null;
var count__8605_8609 = (0);
var i__8606_8610 = (0);
while(true){
if((i__8606_8610 < count__8605_8609)){
var x_8611 = cljs.core._nth.call(null,chunk__8604_8608,i__8606_8610);
ret.push(x_8611);


var G__8612 = seq__8603_8607;
var G__8613 = chunk__8604_8608;
var G__8614 = count__8605_8609;
var G__8615 = (i__8606_8610 + (1));
seq__8603_8607 = G__8612;
chunk__8604_8608 = G__8613;
count__8605_8609 = G__8614;
i__8606_8610 = G__8615;
continue;
} else {
var temp__5735__auto___8616 = cljs.core.seq.call(null,seq__8603_8607);
if(temp__5735__auto___8616){
var seq__8603_8617__$1 = temp__5735__auto___8616;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8603_8617__$1)){
var c__4461__auto___8618 = cljs.core.chunk_first.call(null,seq__8603_8617__$1);
var G__8619 = cljs.core.chunk_rest.call(null,seq__8603_8617__$1);
var G__8620 = c__4461__auto___8618;
var G__8621 = cljs.core.count.call(null,c__4461__auto___8618);
var G__8622 = (0);
seq__8603_8607 = G__8619;
chunk__8604_8608 = G__8620;
count__8605_8609 = G__8621;
i__8606_8610 = G__8622;
continue;
} else {
var x_8623 = cljs.core.first.call(null,seq__8603_8617__$1);
ret.push(x_8623);


var G__8624 = cljs.core.next.call(null,seq__8603_8617__$1);
var G__8625 = null;
var G__8626 = (0);
var G__8627 = (0);
seq__8603_8607 = G__8624;
chunk__8604_8608 = G__8625;
count__8605_8609 = G__8626;
i__8606_8610 = G__8627;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cognitect.transit/SetHandler");
});

/**
 * Positional factory function for cognitect.transit/SetHandler.
 */
cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__8628_8632 = cljs.core.seq.call(null,v);
var chunk__8629_8633 = null;
var count__8630_8634 = (0);
var i__8631_8635 = (0);
while(true){
if((i__8631_8635 < count__8630_8634)){
var x_8636 = cljs.core._nth.call(null,chunk__8629_8633,i__8631_8635);
ret.push(x_8636);


var G__8637 = seq__8628_8632;
var G__8638 = chunk__8629_8633;
var G__8639 = count__8630_8634;
var G__8640 = (i__8631_8635 + (1));
seq__8628_8632 = G__8637;
chunk__8629_8633 = G__8638;
count__8630_8634 = G__8639;
i__8631_8635 = G__8640;
continue;
} else {
var temp__5735__auto___8641 = cljs.core.seq.call(null,seq__8628_8632);
if(temp__5735__auto___8641){
var seq__8628_8642__$1 = temp__5735__auto___8641;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8628_8642__$1)){
var c__4461__auto___8643 = cljs.core.chunk_first.call(null,seq__8628_8642__$1);
var G__8644 = cljs.core.chunk_rest.call(null,seq__8628_8642__$1);
var G__8645 = c__4461__auto___8643;
var G__8646 = cljs.core.count.call(null,c__4461__auto___8643);
var G__8647 = (0);
seq__8628_8632 = G__8644;
chunk__8629_8633 = G__8645;
count__8630_8634 = G__8646;
i__8631_8635 = G__8647;
continue;
} else {
var x_8648 = cljs.core.first.call(null,seq__8628_8642__$1);
ret.push(x_8648);


var G__8649 = cljs.core.next.call(null,seq__8628_8642__$1);
var G__8650 = null;
var G__8651 = (0);
var G__8652 = (0);
seq__8628_8632 = G__8649;
chunk__8629_8633 = G__8650;
count__8630_8634 = G__8651;
i__8631_8635 = G__8652;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cognitect.transit/VectorHandler");
});

/**
 * Positional factory function for cognitect.transit/VectorHandler.
 */
cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
});
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cognitect.transit/UUIDHandler");
});

/**
 * Positional factory function for cognitect.transit/UUIDHandler.
 */
cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});


/**
* @constructor
*/
cognitect.transit.WithMeta = (function (value,meta){
this.value = value;
this.meta = meta;
});

cognitect.transit.WithMeta.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
});

cognitect.transit.WithMeta.cljs$lang$type = true;

cognitect.transit.WithMeta.cljs$lang$ctorStr = "cognitect.transit/WithMeta";

cognitect.transit.WithMeta.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cognitect.transit/WithMeta");
});

/**
 * Positional factory function for cognitect.transit/WithMeta.
 */
cognitect.transit.__GT_WithMeta = (function cognitect$transit$__GT_WithMeta(value,meta){
return (new cognitect.transit.WithMeta(value,meta));
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.WithMetaHandler = (function (){
});
cognitect.transit.WithMetaHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "with-meta";
});

cognitect.transit.WithMetaHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return com.cognitect.transit.tagged("array",[v.value,v.meta]);
});

cognitect.transit.WithMetaHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.WithMetaHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.WithMetaHandler.cljs$lang$type = true;

cognitect.transit.WithMetaHandler.cljs$lang$ctorStr = "cognitect.transit/WithMetaHandler";

cognitect.transit.WithMetaHandler.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cognitect.transit/WithMetaHandler");
});

/**
 * Positional factory function for cognitect.transit/WithMetaHandler.
 */
cognitect.transit.__GT_WithMetaHandler = (function cognitect$transit$__GT_WithMetaHandler(){
return (new cognitect.transit.WithMetaHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map with the following optional keys:
 * 
 *  :handlers  - a map of type constructors to handler instances.
 *  :transform - a function of one argument returning a transformed value. Will
 *               be invoked on a value before it is written.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var G__8654 = arguments.length;
switch (G__8654) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var meta_handler = (new cognitect.transit.WithMetaHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cognitect.transit.WithMeta,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,meta_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),(((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.Eduction !== 'undefined'))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.Eduction,list_handler]):null),(((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.Repeat !== 'undefined'))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.Repeat,list_handler]):null),(((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.MapEntry !== 'undefined'))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.MapEntry,vector_handler]):null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer(cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,meta_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,meta_handler,handlers){
return (function (obj,k,v){
var G__8655 = obj;
G__8655.push(kfn.call(null,k),vfn.call(null,v));

return G__8655;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,meta_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,meta_handler,handlers))
, "handlers": (function (){var x8656 = cljs.core.clone.call(null,handlers);
x8656.forEach = ((function (x8656,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,meta_handler,handlers){
return (function (f){
var coll = this;
var seq__8657 = cljs.core.seq.call(null,coll);
var chunk__8658 = null;
var count__8659 = (0);
var i__8660 = (0);
while(true){
if((i__8660 < count__8659)){
var vec__8661 = cljs.core._nth.call(null,chunk__8658,i__8660);
var k = cljs.core.nth.call(null,vec__8661,(0),null);
var v = cljs.core.nth.call(null,vec__8661,(1),null);
f.call(null,v,k);


var G__8668 = seq__8657;
var G__8669 = chunk__8658;
var G__8670 = count__8659;
var G__8671 = (i__8660 + (1));
seq__8657 = G__8668;
chunk__8658 = G__8669;
count__8659 = G__8670;
i__8660 = G__8671;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__8657);
if(temp__5735__auto__){
var seq__8657__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8657__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__8657__$1);
var G__8672 = cljs.core.chunk_rest.call(null,seq__8657__$1);
var G__8673 = c__4461__auto__;
var G__8674 = cljs.core.count.call(null,c__4461__auto__);
var G__8675 = (0);
seq__8657 = G__8672;
chunk__8658 = G__8673;
count__8659 = G__8674;
i__8660 = G__8675;
continue;
} else {
var vec__8664 = cljs.core.first.call(null,seq__8657__$1);
var k = cljs.core.nth.call(null,vec__8664,(0),null);
var v = cljs.core.nth.call(null,vec__8664,(1),null);
f.call(null,v,k);


var G__8676 = cljs.core.next.call(null,seq__8657__$1);
var G__8677 = null;
var G__8678 = (0);
var G__8679 = (0);
seq__8657 = G__8676;
chunk__8658 = G__8677;
count__8659 = G__8678;
i__8660 = G__8679;
continue;
}
} else {
return null;
}
}
break;
}
});})(x8656,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,meta_handler,handlers))
;

return x8656;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,meta_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,meta_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var G__8681 = arguments.length;
switch (G__8681) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if((typeof cognitect !== 'undefined') && (typeof cognitect.transit !== 'undefined') && (typeof cognitect.transit.t_cognitect$transit8682 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit8682 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta8683){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta8683 = meta8683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cognitect.transit.t_cognitect$transit8682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8684,meta8683__$1){
var self__ = this;
var _8684__$1 = this;
return (new cognitect.transit.t_cognitect$transit8682(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta8683__$1));
});

cognitect.transit.t_cognitect$transit8682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8684){
var self__ = this;
var _8684__$1 = this;
return self__.meta8683;
});

cognitect.transit.t_cognitect$transit8682.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit8682.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit8682.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit8682.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit8682.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta8683","meta8683",-904333093,null)], null);
});

cognitect.transit.t_cognitect$transit8682.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit8682.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit8682";

cognitect.transit.t_cognitect$transit8682.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cognitect.transit/t_cognitect$transit8682");
});

/**
 * Positional factory function for cognitect.transit/t_cognitect$transit8682.
 */
cognitect.transit.__GT_t_cognitect$transit8682 = (function cognitect$transit$__GT_t_cognitect$transit8682(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta8683){
return (new cognitect.transit.t_cognitect$transit8682(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta8683));
});

}

return (new cognitect.transit.t_cognitect$transit8682(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue(tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue(x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue(s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger(x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger(s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger(x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue(s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal(x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri(s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI(x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid(s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__4047__auto__ = com.cognitect.transit.types.isUUID(x);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary(s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary(x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted(x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted(x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link(x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink(x);
});
/**
 * For :transform. Will write any metadata present on the value.
 */
cognitect.transit.write_meta = (function cognitect$transit$write_meta(x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMeta$))))?true:false):false)){
var m = cljs.core._meta.call(null,x);
if((!((m == null)))){
return (new cognitect.transit.WithMeta(cljs.core._with_meta.call(null,x,null),m));
} else {
return x;
}
} else {
return x;
}
});

//# sourceMappingURL=transit.js.map
