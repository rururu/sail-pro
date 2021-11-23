// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.tagged_literals');
goog.require('cljs.core');
goog.require('cljs.reader');
cljs.tagged_literals.read_queue = (function cljs$tagged_literals$read_queue(form){
if(cljs.core.vector_QMARK_.call(null,form)){
} else {
throw (new Error("Queue literal expects a vector for its elements."));
}

return (new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"cljs.core.PersistentQueue.EMPTY","cljs.core.PersistentQueue.EMPTY",399917828,null),(new cljs.core.List(null,form,null,(1),null)),(2),null)),(3),null));
});
cljs.tagged_literals.read_uuid = (function cljs$tagged_literals$read_uuid(form){
if(typeof form === 'string'){
} else {
throw (new Error("UUID literal expects a string as its representation."));
}

try{return cljs.core.uuid.call(null,form);
}catch (e2210){var e = e2210;
throw (new Error(e.message));
}});
cljs.tagged_literals.read_inst = (function cljs$tagged_literals$read_inst(form){
if(typeof form === 'string'){
} else {
throw (new Error("Instance literal expects a string for its timestamp."));
}

try{return new cljs.core.Var(function(){return cljs.reader.read_date;},new cljs.core.Symbol("cljs.reader","read-date","cljs.reader/read-date",1663417238,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.reader","cljs.reader",1327473948,null),new cljs.core.Symbol(null,"read-date","read-date",1874308181,null),"resources/public/js/czlight/cljs/reader.cljs",26,1,92,92,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null)], null)),null,(cljs.core.truth_(cljs.reader.read_date)?cljs.reader.read_date.cljs$lang$test:null)])).call(null,form);
}catch (e2211){var e = e2211;
throw (new Error(e.message));
}});
cljs.tagged_literals.valid_js_literal_key_QMARK_ = (function cljs$tagged_literals$valid_js_literal_key_QMARK_(k){
return ((typeof k === 'string') || ((((k instanceof cljs.core.Keyword)) && ((cljs.core.namespace.call(null,k) == null)))));
});

/**
* @constructor
*/
cljs.tagged_literals.JSValue = (function (val){
this.val = val;
});

cljs.tagged_literals.JSValue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

cljs.tagged_literals.JSValue.cljs$lang$type = true;

cljs.tagged_literals.JSValue.cljs$lang$ctorStr = "cljs.tagged-literals/JSValue";

cljs.tagged_literals.JSValue.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.tagged-literals/JSValue");
});

/**
 * Positional factory function for cljs.tagged-literals/JSValue.
 */
cljs.tagged_literals.__GT_JSValue = (function cljs$tagged_literals$__GT_JSValue(val){
return (new cljs.tagged_literals.JSValue(val));
});

cljs.tagged_literals.read_js = (function cljs$tagged_literals$read_js(form){
if(((cljs.core.vector_QMARK_.call(null,form)) || (cljs.core.map_QMARK_.call(null,form)))){
} else {
throw (new Error("JavaScript literal must use map or vector notation"));
}

if((((!(cljs.core.map_QMARK_.call(null,form)))) || (cljs.core.every_QMARK_.call(null,cljs.tagged_literals.valid_js_literal_key_QMARK_,cljs.core.keys.call(null,form))))){
} else {
throw (new Error("JavaScript literal keys must be strings or unqualified keywords"));
}

return (new cljs.tagged_literals.JSValue(form));
});
cljs.tagged_literals._STAR_cljs_data_readers_STAR_ = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"queue","queue",-1198599890,null),cljs.tagged_literals.read_queue,new cljs.core.Symbol(null,"uuid","uuid",-504564192,null),cljs.tagged_literals.read_uuid,new cljs.core.Symbol(null,"inst","inst",-2008473268,null),cljs.tagged_literals.read_inst,new cljs.core.Symbol(null,"js","js",-886355190,null),cljs.tagged_literals.read_js], null));

//# sourceMappingURL=tagged_literals.js.map
