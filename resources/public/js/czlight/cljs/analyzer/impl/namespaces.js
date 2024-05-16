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
var vec__2998 = libspec;
var seq__2999 = cljs.core.seq.call(null,vec__2998);
var first__3000 = cljs.core.first.call(null,seq__2999);
var seq__2999__$1 = cljs.core.next.call(null,seq__2999);
var lib = first__3000;
var spec = seq__2999__$1;
var libspec__$1 = vec__2998;
var vec__3001 = cljs.core.split_with.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.call(null,vec__3001,(0),null);
var vec__3004 = cljs.core.nth.call(null,vec__3001,(1),null);
var seq__3005 = cljs.core.seq.call(null,vec__3004);
var first__3006 = cljs.core.first.call(null,seq__3005);
var seq__3005__$1 = cljs.core.next.call(null,seq__3005);
var _ = first__3006;
var first__3006__$1 = cljs.core.first.call(null,seq__3005__$1);
var seq__3005__$2 = cljs.core.next.call(null,seq__3005__$1);
var alias = first__3006__$1;
var post_spec = seq__3005__$2;
var post = vec__3004;
if(cljs.core.seq.call(null,post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.call(null,pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__3007 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count.call(null,libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.call(null,G__3007,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__3007;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__3008 = cljs.core.seq.call(null,new_as_aliases);
var chunk__3009 = null;
var count__3010 = (0);
var i__3011 = (0);
while(true){
if((i__3011 < count__3010)){
var vec__3018 = cljs.core._nth.call(null,chunk__3009,i__3011);
var alias = cljs.core.nth.call(null,vec__3018,(0),null);
var _ = cljs.core.nth.call(null,vec__3018,(1),null);
if((!(cljs.core.contains_QMARK_.call(null,as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__3024 = seq__3008;
var G__3025 = chunk__3009;
var G__3026 = count__3010;
var G__3027 = (i__3011 + (1));
seq__3008 = G__3024;
chunk__3009 = G__3025;
count__3010 = G__3026;
i__3011 = G__3027;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__3008);
if(temp__5804__auto__){
var seq__3008__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3008__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__3008__$1);
var G__3028 = cljs.core.chunk_rest.call(null,seq__3008__$1);
var G__3029 = c__5525__auto__;
var G__3030 = cljs.core.count.call(null,c__5525__auto__);
var G__3031 = (0);
seq__3008 = G__3028;
chunk__3009 = G__3029;
count__3010 = G__3030;
i__3011 = G__3031;
continue;
} else {
var vec__3021 = cljs.core.first.call(null,seq__3008__$1);
var alias = cljs.core.nth.call(null,vec__3021,(0),null);
var _ = cljs.core.nth.call(null,vec__3021,(1),null);
if((!(cljs.core.contains_QMARK_.call(null,as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__3032 = cljs.core.next.call(null,seq__3008__$1);
var G__3033 = null;
var G__3034 = (0);
var G__3035 = (0);
seq__3008 = G__3032;
chunk__3009 = G__3033;
count__3010 = G__3034;
i__3011 = G__3035;
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
var G__3037 = arguments.length;
switch (G__3037) {
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
var map__3038 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias.call(null,libspec);
var map__3038__$1 = cljs.core.__destructure_map.call(null,map__3038);
var as_alias = cljs.core.get.call(null,map__3038__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.call(null,map__3038__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates.call(null,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__3039 = ret__$1;
var G__3039__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.call(null,G__3039,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__3039);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.call(null,G__3039__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__3039__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.call(null,(function (p__3041,p__3042){
var map__3043 = p__3041;
var map__3043__$1 = cljs.core.__destructure_map.call(null,map__3043);
var ret__$1 = map__3043__$1;
var as_aliases = cljs.core.get.call(null,map__3043__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__3044 = p__3042;
var seq__3045 = cljs.core.seq.call(null,vec__3044);
var first__3046 = cljs.core.first.call(null,seq__3045);
var seq__3045__$1 = cljs.core.next.call(null,seq__3045);
var spec_key = first__3046;
var libspecs = seq__3045__$1;
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__3047 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.call(null,libspecs,as_aliases);
var map__3047__$1 = cljs.core.__destructure_map.call(null,map__3047);
var as_aliases__$1 = cljs.core.get.call(null,map__3047__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.call(null,map__3047__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__3048 = ret__$1;
var G__3048__$1 = (((!(cljs.core.empty_QMARK_.call(null,as_aliases__$1))))?cljs.core.update.call(null,G__3048,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__3048);
if((!(cljs.core.empty_QMARK_.call(null,libspecs__$1)))){
return cljs.core.update.call(null,G__3048__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.call(null,spec_key,libspecs__$1));
} else {
return G__3048__$1;
}
} else {
return cljs.core.update.call(null,ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.call(null,spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=namespaces.js.map
