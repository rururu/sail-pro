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
var vec__2728 = libspec;
var seq__2729 = cljs.core.seq.call(null,vec__2728);
var first__2730 = cljs.core.first.call(null,seq__2729);
var seq__2729__$1 = cljs.core.next.call(null,seq__2729);
var lib = first__2730;
var spec = seq__2729__$1;
var libspec__$1 = vec__2728;
var vec__2731 = cljs.core.split_with.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.call(null,vec__2731,(0),null);
var vec__2734 = cljs.core.nth.call(null,vec__2731,(1),null);
var seq__2735 = cljs.core.seq.call(null,vec__2734);
var first__2736 = cljs.core.first.call(null,seq__2735);
var seq__2735__$1 = cljs.core.next.call(null,seq__2735);
var _ = first__2736;
var first__2736__$1 = cljs.core.first.call(null,seq__2735__$1);
var seq__2735__$2 = cljs.core.next.call(null,seq__2735__$1);
var alias = first__2736__$1;
var post_spec = seq__2735__$2;
var post = vec__2734;
if(cljs.core.seq.call(null,post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.call(null,pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__2737 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count.call(null,libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.call(null,G__2737,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__2737;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__2738 = cljs.core.seq.call(null,new_as_aliases);
var chunk__2739 = null;
var count__2740 = (0);
var i__2741 = (0);
while(true){
if((i__2741 < count__2740)){
var vec__2748 = cljs.core._nth.call(null,chunk__2739,i__2741);
var alias = cljs.core.nth.call(null,vec__2748,(0),null);
var _ = cljs.core.nth.call(null,vec__2748,(1),null);
if((!(cljs.core.contains_QMARK_.call(null,as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__2754 = seq__2738;
var G__2755 = chunk__2739;
var G__2756 = count__2740;
var G__2757 = (i__2741 + (1));
seq__2738 = G__2754;
chunk__2739 = G__2755;
count__2740 = G__2756;
i__2741 = G__2757;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__2738);
if(temp__5804__auto__){
var seq__2738__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2738__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__2738__$1);
var G__2758 = cljs.core.chunk_rest.call(null,seq__2738__$1);
var G__2759 = c__5525__auto__;
var G__2760 = cljs.core.count.call(null,c__5525__auto__);
var G__2761 = (0);
seq__2738 = G__2758;
chunk__2739 = G__2759;
count__2740 = G__2760;
i__2741 = G__2761;
continue;
} else {
var vec__2751 = cljs.core.first.call(null,seq__2738__$1);
var alias = cljs.core.nth.call(null,vec__2751,(0),null);
var _ = cljs.core.nth.call(null,vec__2751,(1),null);
if((!(cljs.core.contains_QMARK_.call(null,as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__2762 = cljs.core.next.call(null,seq__2738__$1);
var G__2763 = null;
var G__2764 = (0);
var G__2765 = (0);
seq__2738 = G__2762;
chunk__2739 = G__2763;
count__2740 = G__2764;
i__2741 = G__2765;
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
var G__2767 = arguments.length;
switch (G__2767) {
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
var map__2768 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias.call(null,libspec);
var map__2768__$1 = cljs.core.__destructure_map.call(null,map__2768);
var as_alias = cljs.core.get.call(null,map__2768__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.call(null,map__2768__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates.call(null,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__2769 = ret__$1;
var G__2769__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.call(null,G__2769,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__2769);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.call(null,G__2769__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__2769__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.call(null,(function (p__2771,p__2772){
var map__2773 = p__2771;
var map__2773__$1 = cljs.core.__destructure_map.call(null,map__2773);
var ret__$1 = map__2773__$1;
var as_aliases = cljs.core.get.call(null,map__2773__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__2774 = p__2772;
var seq__2775 = cljs.core.seq.call(null,vec__2774);
var first__2776 = cljs.core.first.call(null,seq__2775);
var seq__2775__$1 = cljs.core.next.call(null,seq__2775);
var spec_key = first__2776;
var libspecs = seq__2775__$1;
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__2777 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.call(null,libspecs,as_aliases);
var map__2777__$1 = cljs.core.__destructure_map.call(null,map__2777);
var as_aliases__$1 = cljs.core.get.call(null,map__2777__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.call(null,map__2777__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__2778 = ret__$1;
var G__2778__$1 = (((!(cljs.core.empty_QMARK_.call(null,as_aliases__$1))))?cljs.core.update.call(null,G__2778,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__2778);
if((!(cljs.core.empty_QMARK_.call(null,libspecs__$1)))){
return cljs.core.update.call(null,G__2778__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.call(null,spec_key,libspecs__$1));
} else {
return G__2778__$1;
}
} else {
return cljs.core.update.call(null,ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.call(null,spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=namespaces.js.map
