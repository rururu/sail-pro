// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
goog.require('goog.object');
goog.scope(function(){
cljs.source_map.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__44622){
var vec__44623 = p__44622;
var i = cljs.core.nth.call(null,vec__44623,(0),null);
var v = cljs.core.nth.call(null,vec__44623,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__44626 = seg;
var gcol = cljs.core.nth.call(null,vec__44626,(0),null);
var source = cljs.core.nth.call(null,vec__44626,(1),null);
var line = cljs.core.nth.call(null,vec__44626,(2),null);
var col = cljs.core.nth.call(null,vec__44626,(3),null);
var name = cljs.core.nth.call(null,vec__44626,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(cljs.source_map.goog$module$goog$object.get.call(null,source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5804__auto__)){
var name__$1 = temp__5804__auto__;
return (cljs.source_map.goog$module$goog$object.get.call(null,source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__44629 = seg;
var gcol = cljs.core.nth.call(null,vec__44629,(0),null);
var source = cljs.core.nth.call(null,vec__44629,(1),null);
var line = cljs.core.nth.call(null,vec__44629,(2),null);
var col = cljs.core.nth.call(null,vec__44629,(3),null);
var name = cljs.core.nth.call(null,vec__44629,(4),null);
var vec__44632 = relseg;
var rgcol = cljs.core.nth.call(null,vec__44632,(0),null);
var rsource = cljs.core.nth.call(null,vec__44632,(1),null);
var rline = cljs.core.nth.call(null,vec__44632,(2),null);
var rcol = cljs.core.nth.call(null,vec__44632,(3),null);
var rname = cljs.core.nth.call(null,vec__44632,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__5002__auto__ = col;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__44635 = segmap;
var map__44635__$1 = cljs.core.__destructure_map.call(null,map__44635);
var gcol = cljs.core.get.call(null,map__44635__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__44635__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__44635__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__44635__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__44635__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,(function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,(function (v){
return cljs.core.conj.call(null,v,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__44637 = arguments.length;
switch (G__44637) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,cljs.source_map.goog$module$goog$object.get.call(null,source_map,"mappings"),source_map);
}));

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = cljs.source_map.goog$module$goog$object.get.call(null,source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__44641 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__44645 = cljs.core.next.call(null,segs__$1);
var G__44646 = nrelseg;
var G__44647 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__44645;
relseg__$1 = G__44646;
result__$1 = G__44647;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__44641,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__44641,(1),null);
var G__44648 = (gline + (1));
var G__44649 = cljs.core.next.call(null,lines__$1);
var G__44650 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__44651 = result__$1;
gline = G__44648;
lines__$1 = G__44649;
relseg = G__44650;
result = G__44651;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2);

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__44653 = segmap;
var map__44653__$1 = cljs.core.__destructure_map.call(null,map__44653);
var gcol = cljs.core.get.call(null,map__44653__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__44653__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__44653__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__44653__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__44653__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,(function (p1__44652_SHARP_){
return cljs.core.conj.call(null,p1__44652_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__44655 = arguments.length;
switch (G__44655) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,cljs.source_map.goog$module$goog$object.get.call(null,source_map,"mappings"),source_map);
}));

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = cljs.source_map.goog$module$goog$object.get.call(null,source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__44659 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__44663 = cljs.core.next.call(null,segs__$1);
var G__44664 = nrelseg;
var G__44665 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__44663;
relseg__$1 = G__44664;
result__$1 = G__44665;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__44659,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__44659,(1),null);
var G__44666 = (gline + (1));
var G__44667 = cljs.core.next.call(null,lines__$1);
var G__44668 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__44669 = result__$1;
gline = G__44666;
lines__$1 = G__44667;
relseg = G__44668;
result = G__44669;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode.cljs$lang$maxFixedArity = 2);

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,(function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,(function (p__44670){
var vec__44671 = p__44670;
var _ = cljs.core.nth.call(null,vec__44671,(0),null);
var source = cljs.core.nth.call(null,vec__44671,(1),null);
var line = cljs.core.nth.call(null,vec__44671,(2),null);
var col = cljs.core.nth.call(null,vec__44671,(3),null);
var name = cljs.core.nth.call(null,vec__44671,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,(function (cols__$1,p__44674){
var vec__44675 = p__44674;
var gcol = cljs.core.nth.call(null,vec__44675,(0),null);
var sidx = cljs.core.nth.call(null,vec__44675,(1),null);
var line = cljs.core.nth.call(null,vec__44675,(2),null);
var col = cljs.core.nth.call(null,vec__44675,(3),null);
var name = cljs.core.nth.call(null,vec__44675,(4),null);
var seg = vec__44675;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,(function (p__44678){
var vec__44679 = p__44678;
var _ = cljs.core.nth.call(null,vec__44679,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__44679,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__44679,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__44679,(3),null);
var lname = cljs.core.nth.call(null,vec__44679,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return lname;
}
})()], null);
}));

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
}),cljs.core.PersistentVector.EMPTY,cols));
}),cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5802__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5802__auto__)){
var name = temp__5802__auto__;
var idx = (function (){var temp__5802__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5802__auto____$1)){
var idx = temp__5802__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});
var encode_cols = (function (infos,source_idx,line,col){
var seq__44685 = cljs.core.seq.call(null,infos);
var chunk__44686 = null;
var count__44687 = (0);
var i__44688 = (0);
while(true){
if((i__44688 < count__44687)){
var info = cljs.core._nth.call(null,chunk__44686,i__44688);
var segv_45039 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_45040 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_45041 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_45040 > (lc_45041 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__44685,chunk__44686,count__44687,i__44688,segv_45039,gline_45040,lc_45041,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_45040 - (lc_45041 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_45039], null));
});})(seq__44685,chunk__44686,count__44687,i__44688,segv_45039,gline_45040,lc_45041,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__44685,chunk__44686,count__44687,i__44688,segv_45039,gline_45040,lc_45041,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_45040], null),cljs.core.conj,segv_45039);
});})(seq__44685,chunk__44686,count__44687,i__44688,segv_45039,gline_45040,lc_45041,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__45042 = seq__44685;
var G__45043 = chunk__44686;
var G__45044 = count__44687;
var G__45045 = (i__44688 + (1));
seq__44685 = G__45042;
chunk__44686 = G__45043;
count__44687 = G__45044;
i__44688 = G__45045;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__44685);
if(temp__5804__auto__){
var seq__44685__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44685__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__44685__$1);
var G__45046 = cljs.core.chunk_rest.call(null,seq__44685__$1);
var G__45047 = c__5525__auto__;
var G__45048 = cljs.core.count.call(null,c__5525__auto__);
var G__45049 = (0);
seq__44685 = G__45046;
chunk__44686 = G__45047;
count__44687 = G__45048;
i__44688 = G__45049;
continue;
} else {
var info = cljs.core.first.call(null,seq__44685__$1);
var segv_45050 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_45051 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_45052 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_45051 > (lc_45052 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__44685,chunk__44686,count__44687,i__44688,segv_45050,gline_45051,lc_45052,info,seq__44685__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_45051 - (lc_45052 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_45050], null));
});})(seq__44685,chunk__44686,count__44687,i__44688,segv_45050,gline_45051,lc_45052,info,seq__44685__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__44685,chunk__44686,count__44687,i__44688,segv_45050,gline_45051,lc_45052,info,seq__44685__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_45051], null),cljs.core.conj,segv_45050);
});})(seq__44685,chunk__44686,count__44687,i__44688,segv_45050,gline_45051,lc_45052,info,seq__44685__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__45053 = cljs.core.next.call(null,seq__44685__$1);
var G__45054 = null;
var G__45055 = (0);
var G__45056 = (0);
seq__44685 = G__45053;
chunk__44686 = G__45054;
count__44687 = G__45055;
i__44688 = G__45056;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__44689_45057 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__44690_45058 = null;
var count__44691_45059 = (0);
var i__44692_45060 = (0);
while(true){
if((i__44692_45060 < count__44691_45059)){
var vec__44865_45061 = cljs.core._nth.call(null,chunk__44690_45058,i__44692_45060);
var source_idx_45062 = cljs.core.nth.call(null,vec__44865_45061,(0),null);
var vec__44868_45063 = cljs.core.nth.call(null,vec__44865_45061,(1),null);
var __45064 = cljs.core.nth.call(null,vec__44868_45063,(0),null);
var lines_45065__$1 = cljs.core.nth.call(null,vec__44868_45063,(1),null);
var seq__44871_45066 = cljs.core.seq.call(null,lines_45065__$1);
var chunk__44872_45067 = null;
var count__44873_45068 = (0);
var i__44874_45069 = (0);
while(true){
if((i__44874_45069 < count__44873_45068)){
var vec__44913_45070 = cljs.core._nth.call(null,chunk__44872_45067,i__44874_45069);
var line_45071 = cljs.core.nth.call(null,vec__44913_45070,(0),null);
var cols_45072 = cljs.core.nth.call(null,vec__44913_45070,(1),null);
var seq__44916_45073 = cljs.core.seq.call(null,cols_45072);
var chunk__44917_45074 = null;
var count__44918_45075 = (0);
var i__44919_45076 = (0);
while(true){
if((i__44919_45076 < count__44918_45075)){
var vec__44926_45077 = cljs.core._nth.call(null,chunk__44917_45074,i__44919_45076);
var col_45078 = cljs.core.nth.call(null,vec__44926_45077,(0),null);
var infos_45079 = cljs.core.nth.call(null,vec__44926_45077,(1),null);
encode_cols.call(null,infos_45079,source_idx_45062,line_45071,col_45078);


var G__45080 = seq__44916_45073;
var G__45081 = chunk__44917_45074;
var G__45082 = count__44918_45075;
var G__45083 = (i__44919_45076 + (1));
seq__44916_45073 = G__45080;
chunk__44917_45074 = G__45081;
count__44918_45075 = G__45082;
i__44919_45076 = G__45083;
continue;
} else {
var temp__5804__auto___45084 = cljs.core.seq.call(null,seq__44916_45073);
if(temp__5804__auto___45084){
var seq__44916_45085__$1 = temp__5804__auto___45084;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44916_45085__$1)){
var c__5525__auto___45086 = cljs.core.chunk_first.call(null,seq__44916_45085__$1);
var G__45087 = cljs.core.chunk_rest.call(null,seq__44916_45085__$1);
var G__45088 = c__5525__auto___45086;
var G__45089 = cljs.core.count.call(null,c__5525__auto___45086);
var G__45090 = (0);
seq__44916_45073 = G__45087;
chunk__44917_45074 = G__45088;
count__44918_45075 = G__45089;
i__44919_45076 = G__45090;
continue;
} else {
var vec__44929_45091 = cljs.core.first.call(null,seq__44916_45085__$1);
var col_45092 = cljs.core.nth.call(null,vec__44929_45091,(0),null);
var infos_45093 = cljs.core.nth.call(null,vec__44929_45091,(1),null);
encode_cols.call(null,infos_45093,source_idx_45062,line_45071,col_45092);


var G__45094 = cljs.core.next.call(null,seq__44916_45085__$1);
var G__45095 = null;
var G__45096 = (0);
var G__45097 = (0);
seq__44916_45073 = G__45094;
chunk__44917_45074 = G__45095;
count__44918_45075 = G__45096;
i__44919_45076 = G__45097;
continue;
}
} else {
}
}
break;
}


var G__45098 = seq__44871_45066;
var G__45099 = chunk__44872_45067;
var G__45100 = count__44873_45068;
var G__45101 = (i__44874_45069 + (1));
seq__44871_45066 = G__45098;
chunk__44872_45067 = G__45099;
count__44873_45068 = G__45100;
i__44874_45069 = G__45101;
continue;
} else {
var temp__5804__auto___45102 = cljs.core.seq.call(null,seq__44871_45066);
if(temp__5804__auto___45102){
var seq__44871_45103__$1 = temp__5804__auto___45102;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44871_45103__$1)){
var c__5525__auto___45104 = cljs.core.chunk_first.call(null,seq__44871_45103__$1);
var G__45105 = cljs.core.chunk_rest.call(null,seq__44871_45103__$1);
var G__45106 = c__5525__auto___45104;
var G__45107 = cljs.core.count.call(null,c__5525__auto___45104);
var G__45108 = (0);
seq__44871_45066 = G__45105;
chunk__44872_45067 = G__45106;
count__44873_45068 = G__45107;
i__44874_45069 = G__45108;
continue;
} else {
var vec__44932_45109 = cljs.core.first.call(null,seq__44871_45103__$1);
var line_45110 = cljs.core.nth.call(null,vec__44932_45109,(0),null);
var cols_45111 = cljs.core.nth.call(null,vec__44932_45109,(1),null);
var seq__44935_45112 = cljs.core.seq.call(null,cols_45111);
var chunk__44936_45113 = null;
var count__44937_45114 = (0);
var i__44938_45115 = (0);
while(true){
if((i__44938_45115 < count__44937_45114)){
var vec__44945_45116 = cljs.core._nth.call(null,chunk__44936_45113,i__44938_45115);
var col_45117 = cljs.core.nth.call(null,vec__44945_45116,(0),null);
var infos_45118 = cljs.core.nth.call(null,vec__44945_45116,(1),null);
encode_cols.call(null,infos_45118,source_idx_45062,line_45110,col_45117);


var G__45119 = seq__44935_45112;
var G__45120 = chunk__44936_45113;
var G__45121 = count__44937_45114;
var G__45122 = (i__44938_45115 + (1));
seq__44935_45112 = G__45119;
chunk__44936_45113 = G__45120;
count__44937_45114 = G__45121;
i__44938_45115 = G__45122;
continue;
} else {
var temp__5804__auto___45123__$1 = cljs.core.seq.call(null,seq__44935_45112);
if(temp__5804__auto___45123__$1){
var seq__44935_45124__$1 = temp__5804__auto___45123__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44935_45124__$1)){
var c__5525__auto___45125 = cljs.core.chunk_first.call(null,seq__44935_45124__$1);
var G__45126 = cljs.core.chunk_rest.call(null,seq__44935_45124__$1);
var G__45127 = c__5525__auto___45125;
var G__45128 = cljs.core.count.call(null,c__5525__auto___45125);
var G__45129 = (0);
seq__44935_45112 = G__45126;
chunk__44936_45113 = G__45127;
count__44937_45114 = G__45128;
i__44938_45115 = G__45129;
continue;
} else {
var vec__44948_45130 = cljs.core.first.call(null,seq__44935_45124__$1);
var col_45131 = cljs.core.nth.call(null,vec__44948_45130,(0),null);
var infos_45132 = cljs.core.nth.call(null,vec__44948_45130,(1),null);
encode_cols.call(null,infos_45132,source_idx_45062,line_45110,col_45131);


var G__45133 = cljs.core.next.call(null,seq__44935_45124__$1);
var G__45134 = null;
var G__45135 = (0);
var G__45136 = (0);
seq__44935_45112 = G__45133;
chunk__44936_45113 = G__45134;
count__44937_45114 = G__45135;
i__44938_45115 = G__45136;
continue;
}
} else {
}
}
break;
}


var G__45137 = cljs.core.next.call(null,seq__44871_45103__$1);
var G__45138 = null;
var G__45139 = (0);
var G__45140 = (0);
seq__44871_45066 = G__45137;
chunk__44872_45067 = G__45138;
count__44873_45068 = G__45139;
i__44874_45069 = G__45140;
continue;
}
} else {
}
}
break;
}


var G__45141 = seq__44689_45057;
var G__45142 = chunk__44690_45058;
var G__45143 = count__44691_45059;
var G__45144 = (i__44692_45060 + (1));
seq__44689_45057 = G__45141;
chunk__44690_45058 = G__45142;
count__44691_45059 = G__45143;
i__44692_45060 = G__45144;
continue;
} else {
var temp__5804__auto___45145 = cljs.core.seq.call(null,seq__44689_45057);
if(temp__5804__auto___45145){
var seq__44689_45146__$1 = temp__5804__auto___45145;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44689_45146__$1)){
var c__5525__auto___45147 = cljs.core.chunk_first.call(null,seq__44689_45146__$1);
var G__45148 = cljs.core.chunk_rest.call(null,seq__44689_45146__$1);
var G__45149 = c__5525__auto___45147;
var G__45150 = cljs.core.count.call(null,c__5525__auto___45147);
var G__45151 = (0);
seq__44689_45057 = G__45148;
chunk__44690_45058 = G__45149;
count__44691_45059 = G__45150;
i__44692_45060 = G__45151;
continue;
} else {
var vec__44951_45152 = cljs.core.first.call(null,seq__44689_45146__$1);
var source_idx_45153 = cljs.core.nth.call(null,vec__44951_45152,(0),null);
var vec__44954_45154 = cljs.core.nth.call(null,vec__44951_45152,(1),null);
var __45155 = cljs.core.nth.call(null,vec__44954_45154,(0),null);
var lines_45156__$1 = cljs.core.nth.call(null,vec__44954_45154,(1),null);
var seq__44957_45157 = cljs.core.seq.call(null,lines_45156__$1);
var chunk__44958_45158 = null;
var count__44959_45159 = (0);
var i__44960_45160 = (0);
while(true){
if((i__44960_45160 < count__44959_45159)){
var vec__44999_45161 = cljs.core._nth.call(null,chunk__44958_45158,i__44960_45160);
var line_45162 = cljs.core.nth.call(null,vec__44999_45161,(0),null);
var cols_45163 = cljs.core.nth.call(null,vec__44999_45161,(1),null);
var seq__45002_45164 = cljs.core.seq.call(null,cols_45163);
var chunk__45003_45165 = null;
var count__45004_45166 = (0);
var i__45005_45167 = (0);
while(true){
if((i__45005_45167 < count__45004_45166)){
var vec__45012_45168 = cljs.core._nth.call(null,chunk__45003_45165,i__45005_45167);
var col_45169 = cljs.core.nth.call(null,vec__45012_45168,(0),null);
var infos_45170 = cljs.core.nth.call(null,vec__45012_45168,(1),null);
encode_cols.call(null,infos_45170,source_idx_45153,line_45162,col_45169);


var G__45171 = seq__45002_45164;
var G__45172 = chunk__45003_45165;
var G__45173 = count__45004_45166;
var G__45174 = (i__45005_45167 + (1));
seq__45002_45164 = G__45171;
chunk__45003_45165 = G__45172;
count__45004_45166 = G__45173;
i__45005_45167 = G__45174;
continue;
} else {
var temp__5804__auto___45175__$1 = cljs.core.seq.call(null,seq__45002_45164);
if(temp__5804__auto___45175__$1){
var seq__45002_45176__$1 = temp__5804__auto___45175__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45002_45176__$1)){
var c__5525__auto___45177 = cljs.core.chunk_first.call(null,seq__45002_45176__$1);
var G__45178 = cljs.core.chunk_rest.call(null,seq__45002_45176__$1);
var G__45179 = c__5525__auto___45177;
var G__45180 = cljs.core.count.call(null,c__5525__auto___45177);
var G__45181 = (0);
seq__45002_45164 = G__45178;
chunk__45003_45165 = G__45179;
count__45004_45166 = G__45180;
i__45005_45167 = G__45181;
continue;
} else {
var vec__45015_45182 = cljs.core.first.call(null,seq__45002_45176__$1);
var col_45183 = cljs.core.nth.call(null,vec__45015_45182,(0),null);
var infos_45184 = cljs.core.nth.call(null,vec__45015_45182,(1),null);
encode_cols.call(null,infos_45184,source_idx_45153,line_45162,col_45183);


var G__45185 = cljs.core.next.call(null,seq__45002_45176__$1);
var G__45186 = null;
var G__45187 = (0);
var G__45188 = (0);
seq__45002_45164 = G__45185;
chunk__45003_45165 = G__45186;
count__45004_45166 = G__45187;
i__45005_45167 = G__45188;
continue;
}
} else {
}
}
break;
}


var G__45189 = seq__44957_45157;
var G__45190 = chunk__44958_45158;
var G__45191 = count__44959_45159;
var G__45192 = (i__44960_45160 + (1));
seq__44957_45157 = G__45189;
chunk__44958_45158 = G__45190;
count__44959_45159 = G__45191;
i__44960_45160 = G__45192;
continue;
} else {
var temp__5804__auto___45193__$1 = cljs.core.seq.call(null,seq__44957_45157);
if(temp__5804__auto___45193__$1){
var seq__44957_45194__$1 = temp__5804__auto___45193__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44957_45194__$1)){
var c__5525__auto___45195 = cljs.core.chunk_first.call(null,seq__44957_45194__$1);
var G__45196 = cljs.core.chunk_rest.call(null,seq__44957_45194__$1);
var G__45197 = c__5525__auto___45195;
var G__45198 = cljs.core.count.call(null,c__5525__auto___45195);
var G__45199 = (0);
seq__44957_45157 = G__45196;
chunk__44958_45158 = G__45197;
count__44959_45159 = G__45198;
i__44960_45160 = G__45199;
continue;
} else {
var vec__45018_45200 = cljs.core.first.call(null,seq__44957_45194__$1);
var line_45201 = cljs.core.nth.call(null,vec__45018_45200,(0),null);
var cols_45202 = cljs.core.nth.call(null,vec__45018_45200,(1),null);
var seq__45021_45203 = cljs.core.seq.call(null,cols_45202);
var chunk__45022_45204 = null;
var count__45023_45205 = (0);
var i__45024_45206 = (0);
while(true){
if((i__45024_45206 < count__45023_45205)){
var vec__45031_45207 = cljs.core._nth.call(null,chunk__45022_45204,i__45024_45206);
var col_45208 = cljs.core.nth.call(null,vec__45031_45207,(0),null);
var infos_45209 = cljs.core.nth.call(null,vec__45031_45207,(1),null);
encode_cols.call(null,infos_45209,source_idx_45153,line_45201,col_45208);


var G__45210 = seq__45021_45203;
var G__45211 = chunk__45022_45204;
var G__45212 = count__45023_45205;
var G__45213 = (i__45024_45206 + (1));
seq__45021_45203 = G__45210;
chunk__45022_45204 = G__45211;
count__45023_45205 = G__45212;
i__45024_45206 = G__45213;
continue;
} else {
var temp__5804__auto___45214__$2 = cljs.core.seq.call(null,seq__45021_45203);
if(temp__5804__auto___45214__$2){
var seq__45021_45215__$1 = temp__5804__auto___45214__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45021_45215__$1)){
var c__5525__auto___45216 = cljs.core.chunk_first.call(null,seq__45021_45215__$1);
var G__45217 = cljs.core.chunk_rest.call(null,seq__45021_45215__$1);
var G__45218 = c__5525__auto___45216;
var G__45219 = cljs.core.count.call(null,c__5525__auto___45216);
var G__45220 = (0);
seq__45021_45203 = G__45217;
chunk__45022_45204 = G__45218;
count__45023_45205 = G__45219;
i__45024_45206 = G__45220;
continue;
} else {
var vec__45034_45221 = cljs.core.first.call(null,seq__45021_45215__$1);
var col_45222 = cljs.core.nth.call(null,vec__45034_45221,(0),null);
var infos_45223 = cljs.core.nth.call(null,vec__45034_45221,(1),null);
encode_cols.call(null,infos_45223,source_idx_45153,line_45201,col_45222);


var G__45224 = cljs.core.next.call(null,seq__45021_45215__$1);
var G__45225 = null;
var G__45226 = (0);
var G__45227 = (0);
seq__45021_45203 = G__45224;
chunk__45022_45204 = G__45225;
count__45023_45205 = G__45226;
i__45024_45206 = G__45227;
continue;
}
} else {
}
}
break;
}


var G__45228 = cljs.core.next.call(null,seq__44957_45194__$1);
var G__45229 = null;
var G__45230 = (0);
var G__45231 = (0);
seq__44957_45157 = G__45228;
chunk__44958_45158 = G__45229;
count__44959_45159 = G__45230;
i__44960_45160 = G__45231;
continue;
}
} else {
}
}
break;
}


var G__45232 = cljs.core.next.call(null,seq__44689_45146__$1);
var G__45233 = null;
var G__45234 = (0);
var G__45235 = (0);
seq__44689_45057 = G__45232;
chunk__44690_45058 = G__45233;
count__44691_45059 = G__45234;
i__44692_45060 = G__45235;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__45037 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__44682_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44682_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__44683_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__44683_SHARP_,/\//));
}));
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,(function (p1__44684_SHARP_){
return clojure.string.join.call(null,",",p1__44684_SHARP_);
}),cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__45038 = G__45037;
cljs.source_map.goog$module$goog$object.set.call(null,G__45038,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__45038;
} else {
return G__45037;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__45236 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__45236,(0),null);
var col_map = cljs.core.nth.call(null,vec__45236,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__45239 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__45239,(0),null);
var infos = cljs.core.nth.call(null,vec__45239,(1),null);
var G__45244 = cljs.core.next.call(null,col_map_seq);
var G__45245 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__45239,col,infos,vec__45236,line,col_map){
return (function (v,p__45242){
var map__45243 = p__45242;
var map__45243__$1 = cljs.core.__destructure_map.call(null,map__45243);
var gline = cljs.core.get.call(null,map__45243__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__45243__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__45239,col,infos,vec__45236,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__45244;
new_cols = G__45245;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__45246 = cljs.core.next.call(null,line_map_seq);
var G__45247 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__45246;
new_lines = G__45247;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__45248_45456 = cljs.core.seq.call(null,reverse_map);
var chunk__45249_45457 = null;
var count__45250_45458 = (0);
var i__45251_45459 = (0);
while(true){
if((i__45251_45459 < count__45250_45458)){
var vec__45354_45460 = cljs.core._nth.call(null,chunk__45249_45457,i__45251_45459);
var line_45461 = cljs.core.nth.call(null,vec__45354_45460,(0),null);
var columns_45462 = cljs.core.nth.call(null,vec__45354_45460,(1),null);
var seq__45357_45463 = cljs.core.seq.call(null,columns_45462);
var chunk__45358_45464 = null;
var count__45359_45465 = (0);
var i__45360_45466 = (0);
while(true){
if((i__45360_45466 < count__45359_45465)){
var vec__45383_45467 = cljs.core._nth.call(null,chunk__45358_45464,i__45360_45466);
var column_45468 = cljs.core.nth.call(null,vec__45383_45467,(0),null);
var column_info_45469 = cljs.core.nth.call(null,vec__45383_45467,(1),null);
var seq__45386_45470 = cljs.core.seq.call(null,column_info_45469);
var chunk__45387_45471 = null;
var count__45388_45472 = (0);
var i__45389_45473 = (0);
while(true){
if((i__45389_45473 < count__45388_45472)){
var map__45392_45474 = cljs.core._nth.call(null,chunk__45387_45471,i__45389_45473);
var map__45392_45475__$1 = cljs.core.__destructure_map.call(null,map__45392_45474);
var gline_45476 = cljs.core.get.call(null,map__45392_45475__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_45477 = cljs.core.get.call(null,map__45392_45475__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_45478 = cljs.core.get.call(null,map__45392_45475__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_45476], null),cljs.core.fnil.call(null,((function (seq__45386_45470,chunk__45387_45471,count__45388_45472,i__45389_45473,seq__45357_45463,chunk__45358_45464,count__45359_45465,i__45360_45466,seq__45248_45456,chunk__45249_45457,count__45250_45458,i__45251_45459,map__45392_45474,map__45392_45475__$1,gline_45476,gcol_45477,name_45478,vec__45383_45467,column_45468,column_info_45469,vec__45354_45460,line_45461,columns_45462,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_45477], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_45461,new cljs.core.Keyword(null,"col","col",-1959363084),column_45468,new cljs.core.Keyword(null,"name","name",1843675177),name_45478], null));
});})(seq__45386_45470,chunk__45387_45471,count__45388_45472,i__45389_45473,seq__45357_45463,chunk__45358_45464,count__45359_45465,i__45360_45466,seq__45248_45456,chunk__45249_45457,count__45250_45458,i__45251_45459,map__45392_45474,map__45392_45475__$1,gline_45476,gcol_45477,name_45478,vec__45383_45467,column_45468,column_info_45469,vec__45354_45460,line_45461,columns_45462,inverted))
,cljs.core.sorted_map.call(null)));


var G__45479 = seq__45386_45470;
var G__45480 = chunk__45387_45471;
var G__45481 = count__45388_45472;
var G__45482 = (i__45389_45473 + (1));
seq__45386_45470 = G__45479;
chunk__45387_45471 = G__45480;
count__45388_45472 = G__45481;
i__45389_45473 = G__45482;
continue;
} else {
var temp__5804__auto___45483 = cljs.core.seq.call(null,seq__45386_45470);
if(temp__5804__auto___45483){
var seq__45386_45484__$1 = temp__5804__auto___45483;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45386_45484__$1)){
var c__5525__auto___45485 = cljs.core.chunk_first.call(null,seq__45386_45484__$1);
var G__45486 = cljs.core.chunk_rest.call(null,seq__45386_45484__$1);
var G__45487 = c__5525__auto___45485;
var G__45488 = cljs.core.count.call(null,c__5525__auto___45485);
var G__45489 = (0);
seq__45386_45470 = G__45486;
chunk__45387_45471 = G__45487;
count__45388_45472 = G__45488;
i__45389_45473 = G__45489;
continue;
} else {
var map__45393_45490 = cljs.core.first.call(null,seq__45386_45484__$1);
var map__45393_45491__$1 = cljs.core.__destructure_map.call(null,map__45393_45490);
var gline_45492 = cljs.core.get.call(null,map__45393_45491__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_45493 = cljs.core.get.call(null,map__45393_45491__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_45494 = cljs.core.get.call(null,map__45393_45491__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_45492], null),cljs.core.fnil.call(null,((function (seq__45386_45470,chunk__45387_45471,count__45388_45472,i__45389_45473,seq__45357_45463,chunk__45358_45464,count__45359_45465,i__45360_45466,seq__45248_45456,chunk__45249_45457,count__45250_45458,i__45251_45459,map__45393_45490,map__45393_45491__$1,gline_45492,gcol_45493,name_45494,seq__45386_45484__$1,temp__5804__auto___45483,vec__45383_45467,column_45468,column_info_45469,vec__45354_45460,line_45461,columns_45462,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_45493], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_45461,new cljs.core.Keyword(null,"col","col",-1959363084),column_45468,new cljs.core.Keyword(null,"name","name",1843675177),name_45494], null));
});})(seq__45386_45470,chunk__45387_45471,count__45388_45472,i__45389_45473,seq__45357_45463,chunk__45358_45464,count__45359_45465,i__45360_45466,seq__45248_45456,chunk__45249_45457,count__45250_45458,i__45251_45459,map__45393_45490,map__45393_45491__$1,gline_45492,gcol_45493,name_45494,seq__45386_45484__$1,temp__5804__auto___45483,vec__45383_45467,column_45468,column_info_45469,vec__45354_45460,line_45461,columns_45462,inverted))
,cljs.core.sorted_map.call(null)));


var G__45495 = cljs.core.next.call(null,seq__45386_45484__$1);
var G__45496 = null;
var G__45497 = (0);
var G__45498 = (0);
seq__45386_45470 = G__45495;
chunk__45387_45471 = G__45496;
count__45388_45472 = G__45497;
i__45389_45473 = G__45498;
continue;
}
} else {
}
}
break;
}


var G__45499 = seq__45357_45463;
var G__45500 = chunk__45358_45464;
var G__45501 = count__45359_45465;
var G__45502 = (i__45360_45466 + (1));
seq__45357_45463 = G__45499;
chunk__45358_45464 = G__45500;
count__45359_45465 = G__45501;
i__45360_45466 = G__45502;
continue;
} else {
var temp__5804__auto___45503 = cljs.core.seq.call(null,seq__45357_45463);
if(temp__5804__auto___45503){
var seq__45357_45504__$1 = temp__5804__auto___45503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45357_45504__$1)){
var c__5525__auto___45505 = cljs.core.chunk_first.call(null,seq__45357_45504__$1);
var G__45506 = cljs.core.chunk_rest.call(null,seq__45357_45504__$1);
var G__45507 = c__5525__auto___45505;
var G__45508 = cljs.core.count.call(null,c__5525__auto___45505);
var G__45509 = (0);
seq__45357_45463 = G__45506;
chunk__45358_45464 = G__45507;
count__45359_45465 = G__45508;
i__45360_45466 = G__45509;
continue;
} else {
var vec__45394_45510 = cljs.core.first.call(null,seq__45357_45504__$1);
var column_45511 = cljs.core.nth.call(null,vec__45394_45510,(0),null);
var column_info_45512 = cljs.core.nth.call(null,vec__45394_45510,(1),null);
var seq__45397_45513 = cljs.core.seq.call(null,column_info_45512);
var chunk__45398_45514 = null;
var count__45399_45515 = (0);
var i__45400_45516 = (0);
while(true){
if((i__45400_45516 < count__45399_45515)){
var map__45403_45517 = cljs.core._nth.call(null,chunk__45398_45514,i__45400_45516);
var map__45403_45518__$1 = cljs.core.__destructure_map.call(null,map__45403_45517);
var gline_45519 = cljs.core.get.call(null,map__45403_45518__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_45520 = cljs.core.get.call(null,map__45403_45518__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_45521 = cljs.core.get.call(null,map__45403_45518__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_45519], null),cljs.core.fnil.call(null,((function (seq__45397_45513,chunk__45398_45514,count__45399_45515,i__45400_45516,seq__45357_45463,chunk__45358_45464,count__45359_45465,i__45360_45466,seq__45248_45456,chunk__45249_45457,count__45250_45458,i__45251_45459,map__45403_45517,map__45403_45518__$1,gline_45519,gcol_45520,name_45521,vec__45394_45510,column_45511,column_info_45512,seq__45357_45504__$1,temp__5804__auto___45503,vec__45354_45460,line_45461,columns_45462,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_45520], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_45461,new cljs.core.Keyword(null,"col","col",-1959363084),column_45511,new cljs.core.Keyword(null,"name","name",1843675177),name_45521], null));
});})(seq__45397_45513,chunk__45398_45514,count__45399_45515,i__45400_45516,seq__45357_45463,chunk__45358_45464,count__45359_45465,i__45360_45466,seq__45248_45456,chunk__45249_45457,count__45250_45458,i__45251_45459,map__45403_45517,map__45403_45518__$1,gline_45519,gcol_45520,name_45521,vec__45394_45510,column_45511,column_info_45512,seq__45357_45504__$1,temp__5804__auto___45503,vec__45354_45460,line_45461,columns_45462,inverted))
,cljs.core.sorted_map.call(null)));


var G__45522 = seq__45397_45513;
var G__45523 = chunk__45398_45514;
var G__45524 = count__45399_45515;
var G__45525 = (i__45400_45516 + (1));
seq__45397_45513 = G__45522;
chunk__45398_45514 = G__45523;
count__45399_45515 = G__45524;
i__45400_45516 = G__45525;
continue;
} else {
var temp__5804__auto___45526__$1 = cljs.core.seq.call(null,seq__45397_45513);
if(temp__5804__auto___45526__$1){
var seq__45397_45527__$1 = temp__5804__auto___45526__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45397_45527__$1)){
var c__5525__auto___45528 = cljs.core.chunk_first.call(null,seq__45397_45527__$1);
var G__45529 = cljs.core.chunk_rest.call(null,seq__45397_45527__$1);
var G__45530 = c__5525__auto___45528;
var G__45531 = cljs.core.count.call(null,c__5525__auto___45528);
var G__45532 = (0);
seq__45397_45513 = G__45529;
chunk__45398_45514 = G__45530;
count__45399_45515 = G__45531;
i__45400_45516 = G__45532;
continue;
} else {
var map__45404_45533 = cljs.core.first.call(null,seq__45397_45527__$1);
var map__45404_45534__$1 = cljs.core.__destructure_map.call(null,map__45404_45533);
var gline_45535 = cljs.core.get.call(null,map__45404_45534__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_45536 = cljs.core.get.call(null,map__45404_45534__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_45537 = cljs.core.get.call(null,map__45404_45534__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_45535], null),cljs.core.fnil.call(null,((function (seq__45397_45513,chunk__45398_45514,count__45399_45515,i__45400_45516,seq__45357_45463,chunk__45358_45464,count__45359_45465,i__45360_45466,seq__45248_45456,chunk__45249_45457,count__45250_45458,i__45251_45459,map__45404_45533,map__45404_45534__$1,gline_45535,gcol_45536,name_45537,seq__45397_45527__$1,temp__5804__auto___45526__$1,vec__45394_45510,column_45511,column_info_45512,seq__45357_45504__$1,temp__5804__auto___45503,vec__45354_45460,line_45461,columns_45462,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_45536], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_45461,new cljs.core.Keyword(null,"col","col",-1959363084),column_45511,new cljs.core.Keyword(null,"name","name",1843675177),name_45537], null));
});})(seq__45397_45513,chunk__45398_45514,count__45399_45515,i__45400_45516,seq__45357_45463,chunk__45358_45464,count__45359_45465,i__45360_45466,seq__45248_45456,chunk__45249_45457,count__45250_45458,i__45251_45459,map__45404_45533,map__45404_45534__$1,gline_45535,gcol_45536,name_45537,seq__45397_45527__$1,temp__5804__auto___45526__$1,vec__45394_45510,column_45511,column_info_45512,seq__45357_45504__$1,temp__5804__auto___45503,vec__45354_45460,line_45461,columns_45462,inverted))
,cljs.core.sorted_map.call(null)));


var G__45538 = cljs.core.next.call(null,seq__45397_45527__$1);
var G__45539 = null;
var G__45540 = (0);
var G__45541 = (0);
seq__45397_45513 = G__45538;
chunk__45398_45514 = G__45539;
count__45399_45515 = G__45540;
i__45400_45516 = G__45541;
continue;
}
} else {
}
}
break;
}


var G__45542 = cljs.core.next.call(null,seq__45357_45504__$1);
var G__45543 = null;
var G__45544 = (0);
var G__45545 = (0);
seq__45357_45463 = G__45542;
chunk__45358_45464 = G__45543;
count__45359_45465 = G__45544;
i__45360_45466 = G__45545;
continue;
}
} else {
}
}
break;
}


var G__45546 = seq__45248_45456;
var G__45547 = chunk__45249_45457;
var G__45548 = count__45250_45458;
var G__45549 = (i__45251_45459 + (1));
seq__45248_45456 = G__45546;
chunk__45249_45457 = G__45547;
count__45250_45458 = G__45548;
i__45251_45459 = G__45549;
continue;
} else {
var temp__5804__auto___45550 = cljs.core.seq.call(null,seq__45248_45456);
if(temp__5804__auto___45550){
var seq__45248_45551__$1 = temp__5804__auto___45550;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45248_45551__$1)){
var c__5525__auto___45552 = cljs.core.chunk_first.call(null,seq__45248_45551__$1);
var G__45553 = cljs.core.chunk_rest.call(null,seq__45248_45551__$1);
var G__45554 = c__5525__auto___45552;
var G__45555 = cljs.core.count.call(null,c__5525__auto___45552);
var G__45556 = (0);
seq__45248_45456 = G__45553;
chunk__45249_45457 = G__45554;
count__45250_45458 = G__45555;
i__45251_45459 = G__45556;
continue;
} else {
var vec__45405_45557 = cljs.core.first.call(null,seq__45248_45551__$1);
var line_45558 = cljs.core.nth.call(null,vec__45405_45557,(0),null);
var columns_45559 = cljs.core.nth.call(null,vec__45405_45557,(1),null);
var seq__45408_45560 = cljs.core.seq.call(null,columns_45559);
var chunk__45409_45561 = null;
var count__45410_45562 = (0);
var i__45411_45563 = (0);
while(true){
if((i__45411_45563 < count__45410_45562)){
var vec__45434_45564 = cljs.core._nth.call(null,chunk__45409_45561,i__45411_45563);
var column_45565 = cljs.core.nth.call(null,vec__45434_45564,(0),null);
var column_info_45566 = cljs.core.nth.call(null,vec__45434_45564,(1),null);
var seq__45437_45567 = cljs.core.seq.call(null,column_info_45566);
var chunk__45438_45568 = null;
var count__45439_45569 = (0);
var i__45440_45570 = (0);
while(true){
if((i__45440_45570 < count__45439_45569)){
var map__45443_45571 = cljs.core._nth.call(null,chunk__45438_45568,i__45440_45570);
var map__45443_45572__$1 = cljs.core.__destructure_map.call(null,map__45443_45571);
var gline_45573 = cljs.core.get.call(null,map__45443_45572__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_45574 = cljs.core.get.call(null,map__45443_45572__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_45575 = cljs.core.get.call(null,map__45443_45572__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_45573], null),cljs.core.fnil.call(null,((function (seq__45437_45567,chunk__45438_45568,count__45439_45569,i__45440_45570,seq__45408_45560,chunk__45409_45561,count__45410_45562,i__45411_45563,seq__45248_45456,chunk__45249_45457,count__45250_45458,i__45251_45459,map__45443_45571,map__45443_45572__$1,gline_45573,gcol_45574,name_45575,vec__45434_45564,column_45565,column_info_45566,vec__45405_45557,line_45558,columns_45559,seq__45248_45551__$1,temp__5804__auto___45550,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_45574], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_45558,new cljs.core.Keyword(null,"col","col",-1959363084),column_45565,new cljs.core.Keyword(null,"name","name",1843675177),name_45575], null));
});})(seq__45437_45567,chunk__45438_45568,count__45439_45569,i__45440_45570,seq__45408_45560,chunk__45409_45561,count__45410_45562,i__45411_45563,seq__45248_45456,chunk__45249_45457,count__45250_45458,i__45251_45459,map__45443_45571,map__45443_45572__$1,gline_45573,gcol_45574,name_45575,vec__45434_45564,column_45565,column_info_45566,vec__45405_45557,line_45558,columns_45559,seq__45248_45551__$1,temp__5804__auto___45550,inverted))
,cljs.core.sorted_map.call(null)));


var G__45576 = seq__45437_45567;
var G__45577 = chunk__45438_45568;
var G__45578 = count__45439_45569;
var G__45579 = (i__45440_45570 + (1));
seq__45437_45567 = G__45576;
chunk__45438_45568 = G__45577;
count__45439_45569 = G__45578;
i__45440_45570 = G__45579;
continue;
} else {
var temp__5804__auto___45580__$1 = cljs.core.seq.call(null,seq__45437_45567);
if(temp__5804__auto___45580__$1){
var seq__45437_45581__$1 = temp__5804__auto___45580__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45437_45581__$1)){
var c__5525__auto___45582 = cljs.core.chunk_first.call(null,seq__45437_45581__$1);
var G__45583 = cljs.core.chunk_rest.call(null,seq__45437_45581__$1);
var G__45584 = c__5525__auto___45582;
var G__45585 = cljs.core.count.call(null,c__5525__auto___45582);
var G__45586 = (0);
seq__45437_45567 = G__45583;
chunk__45438_45568 = G__45584;
count__45439_45569 = G__45585;
i__45440_45570 = G__45586;
continue;
} else {
var map__45444_45587 = cljs.core.first.call(null,seq__45437_45581__$1);
var map__45444_45588__$1 = cljs.core.__destructure_map.call(null,map__45444_45587);
var gline_45589 = cljs.core.get.call(null,map__45444_45588__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_45590 = cljs.core.get.call(null,map__45444_45588__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_45591 = cljs.core.get.call(null,map__45444_45588__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_45589], null),cljs.core.fnil.call(null,((function (seq__45437_45567,chunk__45438_45568,count__45439_45569,i__45440_45570,seq__45408_45560,chunk__45409_45561,count__45410_45562,i__45411_45563,seq__45248_45456,chunk__45249_45457,count__45250_45458,i__45251_45459,map__45444_45587,map__45444_45588__$1,gline_45589,gcol_45590,name_45591,seq__45437_45581__$1,temp__5804__auto___45580__$1,vec__45434_45564,column_45565,column_info_45566,vec__45405_45557,line_45558,columns_45559,seq__45248_45551__$1,temp__5804__auto___45550,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_45590], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_45558,new cljs.core.Keyword(null,"col","col",-1959363084),column_45565,new cljs.core.Keyword(null,"name","name",1843675177),name_45591], null));
});})(seq__45437_45567,chunk__45438_45568,count__45439_45569,i__45440_45570,seq__45408_45560,chunk__45409_45561,count__45410_45562,i__45411_45563,seq__45248_45456,chunk__45249_45457,count__45250_45458,i__45251_45459,map__45444_45587,map__45444_45588__$1,gline_45589,gcol_45590,name_45591,seq__45437_45581__$1,temp__5804__auto___45580__$1,vec__45434_45564,column_45565,column_info_45566,vec__45405_45557,line_45558,columns_45559,seq__45248_45551__$1,temp__5804__auto___45550,inverted))
,cljs.core.sorted_map.call(null)));


var G__45592 = cljs.core.next.call(null,seq__45437_45581__$1);
var G__45593 = null;
var G__45594 = (0);
var G__45595 = (0);
seq__45437_45567 = G__45592;
chunk__45438_45568 = G__45593;
count__45439_45569 = G__45594;
i__45440_45570 = G__45595;
continue;
}
} else {
}
}
break;
}


var G__45596 = seq__45408_45560;
var G__45597 = chunk__45409_45561;
var G__45598 = count__45410_45562;
var G__45599 = (i__45411_45563 + (1));
seq__45408_45560 = G__45596;
chunk__45409_45561 = G__45597;
count__45410_45562 = G__45598;
i__45411_45563 = G__45599;
continue;
} else {
var temp__5804__auto___45600__$1 = cljs.core.seq.call(null,seq__45408_45560);
if(temp__5804__auto___45600__$1){
var seq__45408_45601__$1 = temp__5804__auto___45600__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45408_45601__$1)){
var c__5525__auto___45602 = cljs.core.chunk_first.call(null,seq__45408_45601__$1);
var G__45603 = cljs.core.chunk_rest.call(null,seq__45408_45601__$1);
var G__45604 = c__5525__auto___45602;
var G__45605 = cljs.core.count.call(null,c__5525__auto___45602);
var G__45606 = (0);
seq__45408_45560 = G__45603;
chunk__45409_45561 = G__45604;
count__45410_45562 = G__45605;
i__45411_45563 = G__45606;
continue;
} else {
var vec__45445_45607 = cljs.core.first.call(null,seq__45408_45601__$1);
var column_45608 = cljs.core.nth.call(null,vec__45445_45607,(0),null);
var column_info_45609 = cljs.core.nth.call(null,vec__45445_45607,(1),null);
var seq__45448_45610 = cljs.core.seq.call(null,column_info_45609);
var chunk__45449_45611 = null;
var count__45450_45612 = (0);
var i__45451_45613 = (0);
while(true){
if((i__45451_45613 < count__45450_45612)){
var map__45454_45614 = cljs.core._nth.call(null,chunk__45449_45611,i__45451_45613);
var map__45454_45615__$1 = cljs.core.__destructure_map.call(null,map__45454_45614);
var gline_45616 = cljs.core.get.call(null,map__45454_45615__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_45617 = cljs.core.get.call(null,map__45454_45615__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_45618 = cljs.core.get.call(null,map__45454_45615__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_45616], null),cljs.core.fnil.call(null,((function (seq__45448_45610,chunk__45449_45611,count__45450_45612,i__45451_45613,seq__45408_45560,chunk__45409_45561,count__45410_45562,i__45411_45563,seq__45248_45456,chunk__45249_45457,count__45250_45458,i__45251_45459,map__45454_45614,map__45454_45615__$1,gline_45616,gcol_45617,name_45618,vec__45445_45607,column_45608,column_info_45609,seq__45408_45601__$1,temp__5804__auto___45600__$1,vec__45405_45557,line_45558,columns_45559,seq__45248_45551__$1,temp__5804__auto___45550,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_45617], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_45558,new cljs.core.Keyword(null,"col","col",-1959363084),column_45608,new cljs.core.Keyword(null,"name","name",1843675177),name_45618], null));
});})(seq__45448_45610,chunk__45449_45611,count__45450_45612,i__45451_45613,seq__45408_45560,chunk__45409_45561,count__45410_45562,i__45411_45563,seq__45248_45456,chunk__45249_45457,count__45250_45458,i__45251_45459,map__45454_45614,map__45454_45615__$1,gline_45616,gcol_45617,name_45618,vec__45445_45607,column_45608,column_info_45609,seq__45408_45601__$1,temp__5804__auto___45600__$1,vec__45405_45557,line_45558,columns_45559,seq__45248_45551__$1,temp__5804__auto___45550,inverted))
,cljs.core.sorted_map.call(null)));


var G__45619 = seq__45448_45610;
var G__45620 = chunk__45449_45611;
var G__45621 = count__45450_45612;
var G__45622 = (i__45451_45613 + (1));
seq__45448_45610 = G__45619;
chunk__45449_45611 = G__45620;
count__45450_45612 = G__45621;
i__45451_45613 = G__45622;
continue;
} else {
var temp__5804__auto___45623__$2 = cljs.core.seq.call(null,seq__45448_45610);
if(temp__5804__auto___45623__$2){
var seq__45448_45624__$1 = temp__5804__auto___45623__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45448_45624__$1)){
var c__5525__auto___45625 = cljs.core.chunk_first.call(null,seq__45448_45624__$1);
var G__45626 = cljs.core.chunk_rest.call(null,seq__45448_45624__$1);
var G__45627 = c__5525__auto___45625;
var G__45628 = cljs.core.count.call(null,c__5525__auto___45625);
var G__45629 = (0);
seq__45448_45610 = G__45626;
chunk__45449_45611 = G__45627;
count__45450_45612 = G__45628;
i__45451_45613 = G__45629;
continue;
} else {
var map__45455_45630 = cljs.core.first.call(null,seq__45448_45624__$1);
var map__45455_45631__$1 = cljs.core.__destructure_map.call(null,map__45455_45630);
var gline_45632 = cljs.core.get.call(null,map__45455_45631__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_45633 = cljs.core.get.call(null,map__45455_45631__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_45634 = cljs.core.get.call(null,map__45455_45631__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_45632], null),cljs.core.fnil.call(null,((function (seq__45448_45610,chunk__45449_45611,count__45450_45612,i__45451_45613,seq__45408_45560,chunk__45409_45561,count__45410_45562,i__45411_45563,seq__45248_45456,chunk__45249_45457,count__45250_45458,i__45251_45459,map__45455_45630,map__45455_45631__$1,gline_45632,gcol_45633,name_45634,seq__45448_45624__$1,temp__5804__auto___45623__$2,vec__45445_45607,column_45608,column_info_45609,seq__45408_45601__$1,temp__5804__auto___45600__$1,vec__45405_45557,line_45558,columns_45559,seq__45248_45551__$1,temp__5804__auto___45550,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_45633], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_45558,new cljs.core.Keyword(null,"col","col",-1959363084),column_45608,new cljs.core.Keyword(null,"name","name",1843675177),name_45634], null));
});})(seq__45448_45610,chunk__45449_45611,count__45450_45612,i__45451_45613,seq__45408_45560,chunk__45409_45561,count__45410_45562,i__45411_45563,seq__45248_45456,chunk__45249_45457,count__45250_45458,i__45251_45459,map__45455_45630,map__45455_45631__$1,gline_45632,gcol_45633,name_45634,seq__45448_45624__$1,temp__5804__auto___45623__$2,vec__45445_45607,column_45608,column_info_45609,seq__45408_45601__$1,temp__5804__auto___45600__$1,vec__45405_45557,line_45558,columns_45559,seq__45248_45551__$1,temp__5804__auto___45550,inverted))
,cljs.core.sorted_map.call(null)));


var G__45635 = cljs.core.next.call(null,seq__45448_45624__$1);
var G__45636 = null;
var G__45637 = (0);
var G__45638 = (0);
seq__45448_45610 = G__45635;
chunk__45449_45611 = G__45636;
count__45450_45612 = G__45637;
i__45451_45613 = G__45638;
continue;
}
} else {
}
}
break;
}


var G__45639 = cljs.core.next.call(null,seq__45408_45601__$1);
var G__45640 = null;
var G__45641 = (0);
var G__45642 = (0);
seq__45408_45560 = G__45639;
chunk__45409_45561 = G__45640;
count__45410_45562 = G__45641;
i__45411_45563 = G__45642;
continue;
}
} else {
}
}
break;
}


var G__45643 = cljs.core.next.call(null,seq__45248_45551__$1);
var G__45644 = null;
var G__45645 = (0);
var G__45646 = (0);
seq__45248_45456 = G__45643;
chunk__45249_45457 = G__45644;
count__45250_45458 = G__45645;
i__45251_45459 = G__45646;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map
