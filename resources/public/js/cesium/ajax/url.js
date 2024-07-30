// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('ajax.url');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.util');
ajax.url.key_encode = (function ajax$url$key_encode(key){
if(cljs.core.qualified_keyword_QMARK_.call(null,key)){
return clojure.string.join.call(null,"/",cljs.core.juxt.call(null,cljs.core.namespace,cljs.core.name).call(null,key));
} else {
if((key instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,key);
} else {
return key;

}
}
});
ajax.url.value_encode = encodeURIComponent;
ajax.url.key_value_pair_to_str = (function ajax$url$key_value_pair_to_str(p__46931){
var vec__46932 = p__46931;
var k = cljs.core.nth.call(null,vec__46932,(0),null);
var v = cljs.core.nth.call(null,vec__46932,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.key_encode.call(null,k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.value_encode.call(null,v))].join('');
});
ajax.url.vec_key_transform_fn = (function ajax$url$vec_key_transform_fn(vec_key_encode,k,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vec_key_encode.call(null,k),v], null);
});
ajax.url.to_vec_key_transform = (function ajax$url$to_vec_key_transform(vec_strategy){
var vec_key_encode = (function (){var G__46935 = (function (){var or__5002__auto__ = vec_strategy;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"java","java",1958249105);
}
})();
var G__46935__$1 = (((G__46935 instanceof cljs.core.Keyword))?G__46935.fqn:null);
switch (G__46935__$1) {
case "java":
return (function (k){
return null;
});

break;
case "rails":
return (function (k){
return "";
});

break;
case "indexed":
return cljs.core.identity;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46935__$1)].join('')));

}
})();
return cljs.core.partial.call(null,ajax.url.vec_key_transform_fn,vec_key_encode);
});
/**
 * Takes a parameter and turns it into a sequence of key-value pairs suitable
 *   for passing to `key-value-pair-to-str`. Since we can have nested maps and
 *   vectors, we need a vec-key-transform function and the current query key
 *   prefix as well as the key and value to be analysed. Ultimately, this 
 *   function walks the structure and flattens it.
 */
ajax.url.param_to_key_value_pairs = (function ajax$url$param_to_key_value_pairs(vec_key_transform,prefix,p__46937){
var vec__46938 = p__46937;
var key = cljs.core.nth.call(null,vec__46938,(0),null);
var value = cljs.core.nth.call(null,vec__46938,(1),null);
var k1 = ajax.url.key_encode.call(null,key);
var new_key = (cljs.core.truth_(prefix)?(cljs.core.truth_(key)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k1),"]"].join(''):prefix):k1);
var recurse = cljs.core.partial.call(null,ajax.url.param_to_key_value_pairs,vec_key_transform,new_key);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.qualified_keyword_QMARK_.call(null,value)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,clojure.string.join.call(null,"/",cljs.core.juxt.call(null,cljs.core.namespace,cljs.core.name).call(null,value))], null)], null);
} else {
if((value instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,cljs.core.name.call(null,value)], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,recurse,cljs.core.seq.call(null,value));
} else {
if(((cljs.core.sequential_QMARK_.call(null,value)) || (cljs.core.set_QMARK_.call(null,value)))){
return cljs.core.mapcat.call(null,recurse,cljs.core.map_indexed.call(null,vec_key_transform,cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
}
}
});
/**
 * vec-strategy is one of :rails (a[]=3&a[]=4)
 *                         :java (a=3&a=4) (this is the correct behaviour and the default)
 *                         :indexed (a[3]=1&a[4]=1)
 *   params is an arbitrary clojure map
 */
ajax.url.params_to_str = (function ajax$url$params_to_str(vec_strategy,params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,ajax.url.key_value_pair_to_str,ajax.url.param_to_key_value_pairs.call(null,ajax.url.to_vec_key_transform.call(null,vec_strategy),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,params], null))));
});
/**
 * The request format for simple POST and GET.
 */
ajax.url.url_request_format = (function ajax$url$url_request_format(var_args){
var G__46942 = arguments.length;
switch (G__46942) {
case 0:
return ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.url.url_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$1 = (function (p__46943){
var map__46944 = p__46943;
var map__46944__$1 = cljs.core.__destructure_map.call(null,map__46944);
var vec_strategy = cljs.core.get.call(null,map__46944__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.util.to_utf8_writer.call(null,cljs.core.partial.call(null,ajax.url.params_to_str,vec_strategy)),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded; charset=utf-8"], null);
}));

(ajax.url.url_request_format.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=url.js.map
