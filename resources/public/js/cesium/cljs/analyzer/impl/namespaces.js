// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.analyzer.impl.namespaces');
goog.require('cljs.core');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__43312 = libspec;
var seq__43313 = cljs.core.seq.call(null,vec__43312);
var first__43314 = cljs.core.first.call(null,seq__43313);
var seq__43313__$1 = cljs.core.next.call(null,seq__43313);
var lib = first__43314;
var spec = seq__43313__$1;
var libspec__$1 = vec__43312;
var vec__43315 = cljs.core.split_with.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.call(null,vec__43315,(0),null);
var vec__43318 = cljs.core.nth.call(null,vec__43315,(1),null);
var seq__43319 = cljs.core.seq.call(null,vec__43318);
var first__43320 = cljs.core.first.call(null,seq__43319);
var seq__43319__$1 = cljs.core.next.call(null,seq__43319);
var _ = first__43320;
var first__43320__$1 = cljs.core.first.call(null,seq__43319__$1);
var seq__43319__$2 = cljs.core.next.call(null,seq__43319__$1);
var alias = first__43320__$1;
var post_spec = seq__43319__$2;
var post = vec__43318;
if(cljs.core.seq.call(null,post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.call(null,pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__43321 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count.call(null,libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.call(null,G__43321,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__43321;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__43322 = cljs.core.seq.call(null,new_as_aliases);
var chunk__43323 = null;
var count__43324 = (0);
var i__43325 = (0);
while(true){
if((i__43325 < count__43324)){
var vec__43332 = cljs.core._nth.call(null,chunk__43323,i__43325);
var alias = cljs.core.nth.call(null,vec__43332,(0),null);
var _ = cljs.core.nth.call(null,vec__43332,(1),null);
if((!(cljs.core.contains_QMARK_.call(null,as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__43338 = seq__43322;
var G__43339 = chunk__43323;
var G__43340 = count__43324;
var G__43341 = (i__43325 + (1));
seq__43322 = G__43338;
chunk__43323 = G__43339;
count__43324 = G__43340;
i__43325 = G__43341;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__43322);
if(temp__5804__auto__){
var seq__43322__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43322__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__43322__$1);
var G__43342 = cljs.core.chunk_rest.call(null,seq__43322__$1);
var G__43343 = c__5525__auto__;
var G__43344 = cljs.core.count.call(null,c__5525__auto__);
var G__43345 = (0);
seq__43322 = G__43342;
chunk__43323 = G__43343;
count__43324 = G__43344;
i__43325 = G__43345;
continue;
} else {
var vec__43335 = cljs.core.first.call(null,seq__43322__$1);
var alias = cljs.core.nth.call(null,vec__43335,(0),null);
var _ = cljs.core.nth.call(null,vec__43335,(1),null);
if((!(cljs.core.contains_QMARK_.call(null,as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__43346 = cljs.core.next.call(null,seq__43322__$1);
var G__43347 = null;
var G__43348 = (0);
var G__43349 = (0);
seq__43322 = G__43346;
chunk__43323 = G__43347;
count__43324 = G__43348;
i__43325 = G__43349;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__43351 = arguments.length;
switch (G__43351) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.call(null,libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.call(null,(function (ret__$1,libspec){
var map__43352 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias.call(null,libspec);
var map__43352__$1 = cljs.core.__destructure_map.call(null,map__43352);
var as_alias = cljs.core.get.call(null,map__43352__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.call(null,map__43352__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates.call(null,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__43353 = ret__$1;
var G__43353__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.call(null,G__43353,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__43353);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.call(null,G__43353__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__43353__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.call(null,(function (p__43355,p__43356){
var map__43357 = p__43355;
var map__43357__$1 = cljs.core.__destructure_map.call(null,map__43357);
var ret__$1 = map__43357__$1;
var as_aliases = cljs.core.get.call(null,map__43357__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__43358 = p__43356;
var seq__43359 = cljs.core.seq.call(null,vec__43358);
var first__43360 = cljs.core.first.call(null,seq__43359);
var seq__43359__$1 = cljs.core.next.call(null,seq__43359);
var spec_key = first__43360;
var libspecs = seq__43359__$1;
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__43361 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.call(null,libspecs,as_aliases);
var map__43361__$1 = cljs.core.__destructure_map.call(null,map__43361);
var as_aliases__$1 = cljs.core.get.call(null,map__43361__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.call(null,map__43361__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__43362 = ret__$1;
var G__43362__$1 = (((!(cljs.core.empty_QMARK_.call(null,as_aliases__$1))))?cljs.core.update.call(null,G__43362,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__43362);
if((!(cljs.core.empty_QMARK_.call(null,libspecs__$1)))){
return cljs.core.update.call(null,G__43362__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.call(null,spec_key,libspecs__$1));
} else {
return G__43362__$1;
}
} else {
return cljs.core.update.call(null,ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.call(null,spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=namespaces.js.map
