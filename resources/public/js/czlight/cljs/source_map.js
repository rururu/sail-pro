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
return cljs.core.reduce.call(null,(function (m,p__6588){
var vec__6589 = p__6588;
var i = cljs.core.nth.call(null,vec__6589,(0),null);
var v = cljs.core.nth.call(null,vec__6589,(1),null);
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
var vec__6592 = seg;
var gcol = cljs.core.nth.call(null,vec__6592,(0),null);
var source = cljs.core.nth.call(null,vec__6592,(1),null);
var line = cljs.core.nth.call(null,vec__6592,(2),null);
var col = cljs.core.nth.call(null,vec__6592,(3),null);
var name = cljs.core.nth.call(null,vec__6592,(4),null);
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
var vec__6595 = seg;
var gcol = cljs.core.nth.call(null,vec__6595,(0),null);
var source = cljs.core.nth.call(null,vec__6595,(1),null);
var line = cljs.core.nth.call(null,vec__6595,(2),null);
var col = cljs.core.nth.call(null,vec__6595,(3),null);
var name = cljs.core.nth.call(null,vec__6595,(4),null);
var vec__6598 = relseg;
var rgcol = cljs.core.nth.call(null,vec__6598,(0),null);
var rsource = cljs.core.nth.call(null,vec__6598,(1),null);
var rline = cljs.core.nth.call(null,vec__6598,(2),null);
var rcol = cljs.core.nth.call(null,vec__6598,(3),null);
var rname = cljs.core.nth.call(null,vec__6598,(4),null);
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
var map__6601 = segmap;
var map__6601__$1 = cljs.core.__destructure_map.call(null,map__6601);
var gcol = cljs.core.get.call(null,map__6601__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__6601__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__6601__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__6601__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__6601__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__6603 = arguments.length;
switch (G__6603) {
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
var vec__6607 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__6611 = cljs.core.next.call(null,segs__$1);
var G__6612 = nrelseg;
var G__6613 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__6611;
relseg__$1 = G__6612;
result__$1 = G__6613;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__6607,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__6607,(1),null);
var G__6614 = (gline + (1));
var G__6615 = cljs.core.next.call(null,lines__$1);
var G__6616 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__6617 = result__$1;
gline = G__6614;
lines__$1 = G__6615;
relseg = G__6616;
result = G__6617;
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
var map__6619 = segmap;
var map__6619__$1 = cljs.core.__destructure_map.call(null,map__6619);
var gcol = cljs.core.get.call(null,map__6619__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__6619__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__6619__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__6619__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__6619__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,(function (p1__6618_SHARP_){
return cljs.core.conj.call(null,p1__6618_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__6621 = arguments.length;
switch (G__6621) {
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
var vec__6625 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__6629 = cljs.core.next.call(null,segs__$1);
var G__6630 = nrelseg;
var G__6631 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__6629;
relseg__$1 = G__6630;
result__$1 = G__6631;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__6625,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__6625,(1),null);
var G__6632 = (gline + (1));
var G__6633 = cljs.core.next.call(null,lines__$1);
var G__6634 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__6635 = result__$1;
gline = G__6632;
lines__$1 = G__6633;
relseg = G__6634;
result = G__6635;
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
cljs.core.swap_BANG_.call(null,relseg,(function (p__6636){
var vec__6637 = p__6636;
var _ = cljs.core.nth.call(null,vec__6637,(0),null);
var source = cljs.core.nth.call(null,vec__6637,(1),null);
var line = cljs.core.nth.call(null,vec__6637,(2),null);
var col = cljs.core.nth.call(null,vec__6637,(3),null);
var name = cljs.core.nth.call(null,vec__6637,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,(function (cols__$1,p__6640){
var vec__6641 = p__6640;
var gcol = cljs.core.nth.call(null,vec__6641,(0),null);
var sidx = cljs.core.nth.call(null,vec__6641,(1),null);
var line = cljs.core.nth.call(null,vec__6641,(2),null);
var col = cljs.core.nth.call(null,vec__6641,(3),null);
var name = cljs.core.nth.call(null,vec__6641,(4),null);
var seg = vec__6641;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,(function (p__6644){
var vec__6645 = p__6644;
var _ = cljs.core.nth.call(null,vec__6645,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__6645,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__6645,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__6645,(3),null);
var lname = cljs.core.nth.call(null,vec__6645,(4),null);
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
var seq__6651 = cljs.core.seq.call(null,infos);
var chunk__6652 = null;
var count__6653 = (0);
var i__6654 = (0);
while(true){
if((i__6654 < count__6653)){
var info = cljs.core._nth.call(null,chunk__6652,i__6654);
var segv_7005 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_7006 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_7007 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_7006 > (lc_7007 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__6651,chunk__6652,count__6653,i__6654,segv_7005,gline_7006,lc_7007,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_7006 - (lc_7007 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_7005], null));
});})(seq__6651,chunk__6652,count__6653,i__6654,segv_7005,gline_7006,lc_7007,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__6651,chunk__6652,count__6653,i__6654,segv_7005,gline_7006,lc_7007,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7006], null),cljs.core.conj,segv_7005);
});})(seq__6651,chunk__6652,count__6653,i__6654,segv_7005,gline_7006,lc_7007,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__7008 = seq__6651;
var G__7009 = chunk__6652;
var G__7010 = count__6653;
var G__7011 = (i__6654 + (1));
seq__6651 = G__7008;
chunk__6652 = G__7009;
count__6653 = G__7010;
i__6654 = G__7011;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__6651);
if(temp__5804__auto__){
var seq__6651__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6651__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__6651__$1);
var G__7012 = cljs.core.chunk_rest.call(null,seq__6651__$1);
var G__7013 = c__5525__auto__;
var G__7014 = cljs.core.count.call(null,c__5525__auto__);
var G__7015 = (0);
seq__6651 = G__7012;
chunk__6652 = G__7013;
count__6653 = G__7014;
i__6654 = G__7015;
continue;
} else {
var info = cljs.core.first.call(null,seq__6651__$1);
var segv_7016 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_7017 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_7018 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_7017 > (lc_7018 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__6651,chunk__6652,count__6653,i__6654,segv_7016,gline_7017,lc_7018,info,seq__6651__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_7017 - (lc_7018 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_7016], null));
});})(seq__6651,chunk__6652,count__6653,i__6654,segv_7016,gline_7017,lc_7018,info,seq__6651__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__6651,chunk__6652,count__6653,i__6654,segv_7016,gline_7017,lc_7018,info,seq__6651__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7017], null),cljs.core.conj,segv_7016);
});})(seq__6651,chunk__6652,count__6653,i__6654,segv_7016,gline_7017,lc_7018,info,seq__6651__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__7019 = cljs.core.next.call(null,seq__6651__$1);
var G__7020 = null;
var G__7021 = (0);
var G__7022 = (0);
seq__6651 = G__7019;
chunk__6652 = G__7020;
count__6653 = G__7021;
i__6654 = G__7022;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__6655_7023 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__6656_7024 = null;
var count__6657_7025 = (0);
var i__6658_7026 = (0);
while(true){
if((i__6658_7026 < count__6657_7025)){
var vec__6831_7027 = cljs.core._nth.call(null,chunk__6656_7024,i__6658_7026);
var source_idx_7028 = cljs.core.nth.call(null,vec__6831_7027,(0),null);
var vec__6834_7029 = cljs.core.nth.call(null,vec__6831_7027,(1),null);
var __7030 = cljs.core.nth.call(null,vec__6834_7029,(0),null);
var lines_7031__$1 = cljs.core.nth.call(null,vec__6834_7029,(1),null);
var seq__6837_7032 = cljs.core.seq.call(null,lines_7031__$1);
var chunk__6838_7033 = null;
var count__6839_7034 = (0);
var i__6840_7035 = (0);
while(true){
if((i__6840_7035 < count__6839_7034)){
var vec__6879_7036 = cljs.core._nth.call(null,chunk__6838_7033,i__6840_7035);
var line_7037 = cljs.core.nth.call(null,vec__6879_7036,(0),null);
var cols_7038 = cljs.core.nth.call(null,vec__6879_7036,(1),null);
var seq__6882_7039 = cljs.core.seq.call(null,cols_7038);
var chunk__6883_7040 = null;
var count__6884_7041 = (0);
var i__6885_7042 = (0);
while(true){
if((i__6885_7042 < count__6884_7041)){
var vec__6892_7043 = cljs.core._nth.call(null,chunk__6883_7040,i__6885_7042);
var col_7044 = cljs.core.nth.call(null,vec__6892_7043,(0),null);
var infos_7045 = cljs.core.nth.call(null,vec__6892_7043,(1),null);
encode_cols.call(null,infos_7045,source_idx_7028,line_7037,col_7044);


var G__7046 = seq__6882_7039;
var G__7047 = chunk__6883_7040;
var G__7048 = count__6884_7041;
var G__7049 = (i__6885_7042 + (1));
seq__6882_7039 = G__7046;
chunk__6883_7040 = G__7047;
count__6884_7041 = G__7048;
i__6885_7042 = G__7049;
continue;
} else {
var temp__5804__auto___7050 = cljs.core.seq.call(null,seq__6882_7039);
if(temp__5804__auto___7050){
var seq__6882_7051__$1 = temp__5804__auto___7050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6882_7051__$1)){
var c__5525__auto___7052 = cljs.core.chunk_first.call(null,seq__6882_7051__$1);
var G__7053 = cljs.core.chunk_rest.call(null,seq__6882_7051__$1);
var G__7054 = c__5525__auto___7052;
var G__7055 = cljs.core.count.call(null,c__5525__auto___7052);
var G__7056 = (0);
seq__6882_7039 = G__7053;
chunk__6883_7040 = G__7054;
count__6884_7041 = G__7055;
i__6885_7042 = G__7056;
continue;
} else {
var vec__6895_7057 = cljs.core.first.call(null,seq__6882_7051__$1);
var col_7058 = cljs.core.nth.call(null,vec__6895_7057,(0),null);
var infos_7059 = cljs.core.nth.call(null,vec__6895_7057,(1),null);
encode_cols.call(null,infos_7059,source_idx_7028,line_7037,col_7058);


var G__7060 = cljs.core.next.call(null,seq__6882_7051__$1);
var G__7061 = null;
var G__7062 = (0);
var G__7063 = (0);
seq__6882_7039 = G__7060;
chunk__6883_7040 = G__7061;
count__6884_7041 = G__7062;
i__6885_7042 = G__7063;
continue;
}
} else {
}
}
break;
}


var G__7064 = seq__6837_7032;
var G__7065 = chunk__6838_7033;
var G__7066 = count__6839_7034;
var G__7067 = (i__6840_7035 + (1));
seq__6837_7032 = G__7064;
chunk__6838_7033 = G__7065;
count__6839_7034 = G__7066;
i__6840_7035 = G__7067;
continue;
} else {
var temp__5804__auto___7068 = cljs.core.seq.call(null,seq__6837_7032);
if(temp__5804__auto___7068){
var seq__6837_7069__$1 = temp__5804__auto___7068;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6837_7069__$1)){
var c__5525__auto___7070 = cljs.core.chunk_first.call(null,seq__6837_7069__$1);
var G__7071 = cljs.core.chunk_rest.call(null,seq__6837_7069__$1);
var G__7072 = c__5525__auto___7070;
var G__7073 = cljs.core.count.call(null,c__5525__auto___7070);
var G__7074 = (0);
seq__6837_7032 = G__7071;
chunk__6838_7033 = G__7072;
count__6839_7034 = G__7073;
i__6840_7035 = G__7074;
continue;
} else {
var vec__6898_7075 = cljs.core.first.call(null,seq__6837_7069__$1);
var line_7076 = cljs.core.nth.call(null,vec__6898_7075,(0),null);
var cols_7077 = cljs.core.nth.call(null,vec__6898_7075,(1),null);
var seq__6901_7078 = cljs.core.seq.call(null,cols_7077);
var chunk__6902_7079 = null;
var count__6903_7080 = (0);
var i__6904_7081 = (0);
while(true){
if((i__6904_7081 < count__6903_7080)){
var vec__6911_7082 = cljs.core._nth.call(null,chunk__6902_7079,i__6904_7081);
var col_7083 = cljs.core.nth.call(null,vec__6911_7082,(0),null);
var infos_7084 = cljs.core.nth.call(null,vec__6911_7082,(1),null);
encode_cols.call(null,infos_7084,source_idx_7028,line_7076,col_7083);


var G__7085 = seq__6901_7078;
var G__7086 = chunk__6902_7079;
var G__7087 = count__6903_7080;
var G__7088 = (i__6904_7081 + (1));
seq__6901_7078 = G__7085;
chunk__6902_7079 = G__7086;
count__6903_7080 = G__7087;
i__6904_7081 = G__7088;
continue;
} else {
var temp__5804__auto___7089__$1 = cljs.core.seq.call(null,seq__6901_7078);
if(temp__5804__auto___7089__$1){
var seq__6901_7090__$1 = temp__5804__auto___7089__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6901_7090__$1)){
var c__5525__auto___7091 = cljs.core.chunk_first.call(null,seq__6901_7090__$1);
var G__7092 = cljs.core.chunk_rest.call(null,seq__6901_7090__$1);
var G__7093 = c__5525__auto___7091;
var G__7094 = cljs.core.count.call(null,c__5525__auto___7091);
var G__7095 = (0);
seq__6901_7078 = G__7092;
chunk__6902_7079 = G__7093;
count__6903_7080 = G__7094;
i__6904_7081 = G__7095;
continue;
} else {
var vec__6914_7096 = cljs.core.first.call(null,seq__6901_7090__$1);
var col_7097 = cljs.core.nth.call(null,vec__6914_7096,(0),null);
var infos_7098 = cljs.core.nth.call(null,vec__6914_7096,(1),null);
encode_cols.call(null,infos_7098,source_idx_7028,line_7076,col_7097);


var G__7099 = cljs.core.next.call(null,seq__6901_7090__$1);
var G__7100 = null;
var G__7101 = (0);
var G__7102 = (0);
seq__6901_7078 = G__7099;
chunk__6902_7079 = G__7100;
count__6903_7080 = G__7101;
i__6904_7081 = G__7102;
continue;
}
} else {
}
}
break;
}


var G__7103 = cljs.core.next.call(null,seq__6837_7069__$1);
var G__7104 = null;
var G__7105 = (0);
var G__7106 = (0);
seq__6837_7032 = G__7103;
chunk__6838_7033 = G__7104;
count__6839_7034 = G__7105;
i__6840_7035 = G__7106;
continue;
}
} else {
}
}
break;
}


var G__7107 = seq__6655_7023;
var G__7108 = chunk__6656_7024;
var G__7109 = count__6657_7025;
var G__7110 = (i__6658_7026 + (1));
seq__6655_7023 = G__7107;
chunk__6656_7024 = G__7108;
count__6657_7025 = G__7109;
i__6658_7026 = G__7110;
continue;
} else {
var temp__5804__auto___7111 = cljs.core.seq.call(null,seq__6655_7023);
if(temp__5804__auto___7111){
var seq__6655_7112__$1 = temp__5804__auto___7111;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6655_7112__$1)){
var c__5525__auto___7113 = cljs.core.chunk_first.call(null,seq__6655_7112__$1);
var G__7114 = cljs.core.chunk_rest.call(null,seq__6655_7112__$1);
var G__7115 = c__5525__auto___7113;
var G__7116 = cljs.core.count.call(null,c__5525__auto___7113);
var G__7117 = (0);
seq__6655_7023 = G__7114;
chunk__6656_7024 = G__7115;
count__6657_7025 = G__7116;
i__6658_7026 = G__7117;
continue;
} else {
var vec__6917_7118 = cljs.core.first.call(null,seq__6655_7112__$1);
var source_idx_7119 = cljs.core.nth.call(null,vec__6917_7118,(0),null);
var vec__6920_7120 = cljs.core.nth.call(null,vec__6917_7118,(1),null);
var __7121 = cljs.core.nth.call(null,vec__6920_7120,(0),null);
var lines_7122__$1 = cljs.core.nth.call(null,vec__6920_7120,(1),null);
var seq__6923_7123 = cljs.core.seq.call(null,lines_7122__$1);
var chunk__6924_7124 = null;
var count__6925_7125 = (0);
var i__6926_7126 = (0);
while(true){
if((i__6926_7126 < count__6925_7125)){
var vec__6965_7127 = cljs.core._nth.call(null,chunk__6924_7124,i__6926_7126);
var line_7128 = cljs.core.nth.call(null,vec__6965_7127,(0),null);
var cols_7129 = cljs.core.nth.call(null,vec__6965_7127,(1),null);
var seq__6968_7130 = cljs.core.seq.call(null,cols_7129);
var chunk__6969_7131 = null;
var count__6970_7132 = (0);
var i__6971_7133 = (0);
while(true){
if((i__6971_7133 < count__6970_7132)){
var vec__6978_7134 = cljs.core._nth.call(null,chunk__6969_7131,i__6971_7133);
var col_7135 = cljs.core.nth.call(null,vec__6978_7134,(0),null);
var infos_7136 = cljs.core.nth.call(null,vec__6978_7134,(1),null);
encode_cols.call(null,infos_7136,source_idx_7119,line_7128,col_7135);


var G__7137 = seq__6968_7130;
var G__7138 = chunk__6969_7131;
var G__7139 = count__6970_7132;
var G__7140 = (i__6971_7133 + (1));
seq__6968_7130 = G__7137;
chunk__6969_7131 = G__7138;
count__6970_7132 = G__7139;
i__6971_7133 = G__7140;
continue;
} else {
var temp__5804__auto___7141__$1 = cljs.core.seq.call(null,seq__6968_7130);
if(temp__5804__auto___7141__$1){
var seq__6968_7142__$1 = temp__5804__auto___7141__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6968_7142__$1)){
var c__5525__auto___7143 = cljs.core.chunk_first.call(null,seq__6968_7142__$1);
var G__7144 = cljs.core.chunk_rest.call(null,seq__6968_7142__$1);
var G__7145 = c__5525__auto___7143;
var G__7146 = cljs.core.count.call(null,c__5525__auto___7143);
var G__7147 = (0);
seq__6968_7130 = G__7144;
chunk__6969_7131 = G__7145;
count__6970_7132 = G__7146;
i__6971_7133 = G__7147;
continue;
} else {
var vec__6981_7148 = cljs.core.first.call(null,seq__6968_7142__$1);
var col_7149 = cljs.core.nth.call(null,vec__6981_7148,(0),null);
var infos_7150 = cljs.core.nth.call(null,vec__6981_7148,(1),null);
encode_cols.call(null,infos_7150,source_idx_7119,line_7128,col_7149);


var G__7151 = cljs.core.next.call(null,seq__6968_7142__$1);
var G__7152 = null;
var G__7153 = (0);
var G__7154 = (0);
seq__6968_7130 = G__7151;
chunk__6969_7131 = G__7152;
count__6970_7132 = G__7153;
i__6971_7133 = G__7154;
continue;
}
} else {
}
}
break;
}


var G__7155 = seq__6923_7123;
var G__7156 = chunk__6924_7124;
var G__7157 = count__6925_7125;
var G__7158 = (i__6926_7126 + (1));
seq__6923_7123 = G__7155;
chunk__6924_7124 = G__7156;
count__6925_7125 = G__7157;
i__6926_7126 = G__7158;
continue;
} else {
var temp__5804__auto___7159__$1 = cljs.core.seq.call(null,seq__6923_7123);
if(temp__5804__auto___7159__$1){
var seq__6923_7160__$1 = temp__5804__auto___7159__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6923_7160__$1)){
var c__5525__auto___7161 = cljs.core.chunk_first.call(null,seq__6923_7160__$1);
var G__7162 = cljs.core.chunk_rest.call(null,seq__6923_7160__$1);
var G__7163 = c__5525__auto___7161;
var G__7164 = cljs.core.count.call(null,c__5525__auto___7161);
var G__7165 = (0);
seq__6923_7123 = G__7162;
chunk__6924_7124 = G__7163;
count__6925_7125 = G__7164;
i__6926_7126 = G__7165;
continue;
} else {
var vec__6984_7166 = cljs.core.first.call(null,seq__6923_7160__$1);
var line_7167 = cljs.core.nth.call(null,vec__6984_7166,(0),null);
var cols_7168 = cljs.core.nth.call(null,vec__6984_7166,(1),null);
var seq__6987_7169 = cljs.core.seq.call(null,cols_7168);
var chunk__6988_7170 = null;
var count__6989_7171 = (0);
var i__6990_7172 = (0);
while(true){
if((i__6990_7172 < count__6989_7171)){
var vec__6997_7173 = cljs.core._nth.call(null,chunk__6988_7170,i__6990_7172);
var col_7174 = cljs.core.nth.call(null,vec__6997_7173,(0),null);
var infos_7175 = cljs.core.nth.call(null,vec__6997_7173,(1),null);
encode_cols.call(null,infos_7175,source_idx_7119,line_7167,col_7174);


var G__7176 = seq__6987_7169;
var G__7177 = chunk__6988_7170;
var G__7178 = count__6989_7171;
var G__7179 = (i__6990_7172 + (1));
seq__6987_7169 = G__7176;
chunk__6988_7170 = G__7177;
count__6989_7171 = G__7178;
i__6990_7172 = G__7179;
continue;
} else {
var temp__5804__auto___7180__$2 = cljs.core.seq.call(null,seq__6987_7169);
if(temp__5804__auto___7180__$2){
var seq__6987_7181__$1 = temp__5804__auto___7180__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6987_7181__$1)){
var c__5525__auto___7182 = cljs.core.chunk_first.call(null,seq__6987_7181__$1);
var G__7183 = cljs.core.chunk_rest.call(null,seq__6987_7181__$1);
var G__7184 = c__5525__auto___7182;
var G__7185 = cljs.core.count.call(null,c__5525__auto___7182);
var G__7186 = (0);
seq__6987_7169 = G__7183;
chunk__6988_7170 = G__7184;
count__6989_7171 = G__7185;
i__6990_7172 = G__7186;
continue;
} else {
var vec__7000_7187 = cljs.core.first.call(null,seq__6987_7181__$1);
var col_7188 = cljs.core.nth.call(null,vec__7000_7187,(0),null);
var infos_7189 = cljs.core.nth.call(null,vec__7000_7187,(1),null);
encode_cols.call(null,infos_7189,source_idx_7119,line_7167,col_7188);


var G__7190 = cljs.core.next.call(null,seq__6987_7181__$1);
var G__7191 = null;
var G__7192 = (0);
var G__7193 = (0);
seq__6987_7169 = G__7190;
chunk__6988_7170 = G__7191;
count__6989_7171 = G__7192;
i__6990_7172 = G__7193;
continue;
}
} else {
}
}
break;
}


var G__7194 = cljs.core.next.call(null,seq__6923_7160__$1);
var G__7195 = null;
var G__7196 = (0);
var G__7197 = (0);
seq__6923_7123 = G__7194;
chunk__6924_7124 = G__7195;
count__6925_7125 = G__7196;
i__6926_7126 = G__7197;
continue;
}
} else {
}
}
break;
}


var G__7198 = cljs.core.next.call(null,seq__6655_7112__$1);
var G__7199 = null;
var G__7200 = (0);
var G__7201 = (0);
seq__6655_7023 = G__7198;
chunk__6656_7024 = G__7199;
count__6657_7025 = G__7200;
i__6658_7026 = G__7201;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__7003 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__6648_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6648_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__6649_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__6649_SHARP_,/\//));
}));
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,(function (p1__6650_SHARP_){
return clojure.string.join.call(null,",",p1__6650_SHARP_);
}),cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__7004 = G__7003;
cljs.source_map.goog$module$goog$object.set.call(null,G__7004,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__7004;
} else {
return G__7003;
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
var vec__7202 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__7202,(0),null);
var col_map = cljs.core.nth.call(null,vec__7202,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__7205 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__7205,(0),null);
var infos = cljs.core.nth.call(null,vec__7205,(1),null);
var G__7210 = cljs.core.next.call(null,col_map_seq);
var G__7211 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__7205,col,infos,vec__7202,line,col_map){
return (function (v,p__7208){
var map__7209 = p__7208;
var map__7209__$1 = cljs.core.__destructure_map.call(null,map__7209);
var gline = cljs.core.get.call(null,map__7209__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__7209__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__7205,col,infos,vec__7202,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__7210;
new_cols = G__7211;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__7212 = cljs.core.next.call(null,line_map_seq);
var G__7213 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__7212;
new_lines = G__7213;
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
var seq__7214_7422 = cljs.core.seq.call(null,reverse_map);
var chunk__7215_7423 = null;
var count__7216_7424 = (0);
var i__7217_7425 = (0);
while(true){
if((i__7217_7425 < count__7216_7424)){
var vec__7320_7426 = cljs.core._nth.call(null,chunk__7215_7423,i__7217_7425);
var line_7427 = cljs.core.nth.call(null,vec__7320_7426,(0),null);
var columns_7428 = cljs.core.nth.call(null,vec__7320_7426,(1),null);
var seq__7323_7429 = cljs.core.seq.call(null,columns_7428);
var chunk__7324_7430 = null;
var count__7325_7431 = (0);
var i__7326_7432 = (0);
while(true){
if((i__7326_7432 < count__7325_7431)){
var vec__7349_7433 = cljs.core._nth.call(null,chunk__7324_7430,i__7326_7432);
var column_7434 = cljs.core.nth.call(null,vec__7349_7433,(0),null);
var column_info_7435 = cljs.core.nth.call(null,vec__7349_7433,(1),null);
var seq__7352_7436 = cljs.core.seq.call(null,column_info_7435);
var chunk__7353_7437 = null;
var count__7354_7438 = (0);
var i__7355_7439 = (0);
while(true){
if((i__7355_7439 < count__7354_7438)){
var map__7358_7440 = cljs.core._nth.call(null,chunk__7353_7437,i__7355_7439);
var map__7358_7441__$1 = cljs.core.__destructure_map.call(null,map__7358_7440);
var gline_7442 = cljs.core.get.call(null,map__7358_7441__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_7443 = cljs.core.get.call(null,map__7358_7441__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7444 = cljs.core.get.call(null,map__7358_7441__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7442], null),cljs.core.fnil.call(null,((function (seq__7352_7436,chunk__7353_7437,count__7354_7438,i__7355_7439,seq__7323_7429,chunk__7324_7430,count__7325_7431,i__7326_7432,seq__7214_7422,chunk__7215_7423,count__7216_7424,i__7217_7425,map__7358_7440,map__7358_7441__$1,gline_7442,gcol_7443,name_7444,vec__7349_7433,column_7434,column_info_7435,vec__7320_7426,line_7427,columns_7428,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_7443], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_7427,new cljs.core.Keyword(null,"col","col",-1959363084),column_7434,new cljs.core.Keyword(null,"name","name",1843675177),name_7444], null));
});})(seq__7352_7436,chunk__7353_7437,count__7354_7438,i__7355_7439,seq__7323_7429,chunk__7324_7430,count__7325_7431,i__7326_7432,seq__7214_7422,chunk__7215_7423,count__7216_7424,i__7217_7425,map__7358_7440,map__7358_7441__$1,gline_7442,gcol_7443,name_7444,vec__7349_7433,column_7434,column_info_7435,vec__7320_7426,line_7427,columns_7428,inverted))
,cljs.core.sorted_map.call(null)));


var G__7445 = seq__7352_7436;
var G__7446 = chunk__7353_7437;
var G__7447 = count__7354_7438;
var G__7448 = (i__7355_7439 + (1));
seq__7352_7436 = G__7445;
chunk__7353_7437 = G__7446;
count__7354_7438 = G__7447;
i__7355_7439 = G__7448;
continue;
} else {
var temp__5804__auto___7449 = cljs.core.seq.call(null,seq__7352_7436);
if(temp__5804__auto___7449){
var seq__7352_7450__$1 = temp__5804__auto___7449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7352_7450__$1)){
var c__5525__auto___7451 = cljs.core.chunk_first.call(null,seq__7352_7450__$1);
var G__7452 = cljs.core.chunk_rest.call(null,seq__7352_7450__$1);
var G__7453 = c__5525__auto___7451;
var G__7454 = cljs.core.count.call(null,c__5525__auto___7451);
var G__7455 = (0);
seq__7352_7436 = G__7452;
chunk__7353_7437 = G__7453;
count__7354_7438 = G__7454;
i__7355_7439 = G__7455;
continue;
} else {
var map__7359_7456 = cljs.core.first.call(null,seq__7352_7450__$1);
var map__7359_7457__$1 = cljs.core.__destructure_map.call(null,map__7359_7456);
var gline_7458 = cljs.core.get.call(null,map__7359_7457__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_7459 = cljs.core.get.call(null,map__7359_7457__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7460 = cljs.core.get.call(null,map__7359_7457__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7458], null),cljs.core.fnil.call(null,((function (seq__7352_7436,chunk__7353_7437,count__7354_7438,i__7355_7439,seq__7323_7429,chunk__7324_7430,count__7325_7431,i__7326_7432,seq__7214_7422,chunk__7215_7423,count__7216_7424,i__7217_7425,map__7359_7456,map__7359_7457__$1,gline_7458,gcol_7459,name_7460,seq__7352_7450__$1,temp__5804__auto___7449,vec__7349_7433,column_7434,column_info_7435,vec__7320_7426,line_7427,columns_7428,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_7459], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_7427,new cljs.core.Keyword(null,"col","col",-1959363084),column_7434,new cljs.core.Keyword(null,"name","name",1843675177),name_7460], null));
});})(seq__7352_7436,chunk__7353_7437,count__7354_7438,i__7355_7439,seq__7323_7429,chunk__7324_7430,count__7325_7431,i__7326_7432,seq__7214_7422,chunk__7215_7423,count__7216_7424,i__7217_7425,map__7359_7456,map__7359_7457__$1,gline_7458,gcol_7459,name_7460,seq__7352_7450__$1,temp__5804__auto___7449,vec__7349_7433,column_7434,column_info_7435,vec__7320_7426,line_7427,columns_7428,inverted))
,cljs.core.sorted_map.call(null)));


var G__7461 = cljs.core.next.call(null,seq__7352_7450__$1);
var G__7462 = null;
var G__7463 = (0);
var G__7464 = (0);
seq__7352_7436 = G__7461;
chunk__7353_7437 = G__7462;
count__7354_7438 = G__7463;
i__7355_7439 = G__7464;
continue;
}
} else {
}
}
break;
}


var G__7465 = seq__7323_7429;
var G__7466 = chunk__7324_7430;
var G__7467 = count__7325_7431;
var G__7468 = (i__7326_7432 + (1));
seq__7323_7429 = G__7465;
chunk__7324_7430 = G__7466;
count__7325_7431 = G__7467;
i__7326_7432 = G__7468;
continue;
} else {
var temp__5804__auto___7469 = cljs.core.seq.call(null,seq__7323_7429);
if(temp__5804__auto___7469){
var seq__7323_7470__$1 = temp__5804__auto___7469;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7323_7470__$1)){
var c__5525__auto___7471 = cljs.core.chunk_first.call(null,seq__7323_7470__$1);
var G__7472 = cljs.core.chunk_rest.call(null,seq__7323_7470__$1);
var G__7473 = c__5525__auto___7471;
var G__7474 = cljs.core.count.call(null,c__5525__auto___7471);
var G__7475 = (0);
seq__7323_7429 = G__7472;
chunk__7324_7430 = G__7473;
count__7325_7431 = G__7474;
i__7326_7432 = G__7475;
continue;
} else {
var vec__7360_7476 = cljs.core.first.call(null,seq__7323_7470__$1);
var column_7477 = cljs.core.nth.call(null,vec__7360_7476,(0),null);
var column_info_7478 = cljs.core.nth.call(null,vec__7360_7476,(1),null);
var seq__7363_7479 = cljs.core.seq.call(null,column_info_7478);
var chunk__7364_7480 = null;
var count__7365_7481 = (0);
var i__7366_7482 = (0);
while(true){
if((i__7366_7482 < count__7365_7481)){
var map__7369_7483 = cljs.core._nth.call(null,chunk__7364_7480,i__7366_7482);
var map__7369_7484__$1 = cljs.core.__destructure_map.call(null,map__7369_7483);
var gline_7485 = cljs.core.get.call(null,map__7369_7484__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_7486 = cljs.core.get.call(null,map__7369_7484__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7487 = cljs.core.get.call(null,map__7369_7484__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7485], null),cljs.core.fnil.call(null,((function (seq__7363_7479,chunk__7364_7480,count__7365_7481,i__7366_7482,seq__7323_7429,chunk__7324_7430,count__7325_7431,i__7326_7432,seq__7214_7422,chunk__7215_7423,count__7216_7424,i__7217_7425,map__7369_7483,map__7369_7484__$1,gline_7485,gcol_7486,name_7487,vec__7360_7476,column_7477,column_info_7478,seq__7323_7470__$1,temp__5804__auto___7469,vec__7320_7426,line_7427,columns_7428,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_7486], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_7427,new cljs.core.Keyword(null,"col","col",-1959363084),column_7477,new cljs.core.Keyword(null,"name","name",1843675177),name_7487], null));
});})(seq__7363_7479,chunk__7364_7480,count__7365_7481,i__7366_7482,seq__7323_7429,chunk__7324_7430,count__7325_7431,i__7326_7432,seq__7214_7422,chunk__7215_7423,count__7216_7424,i__7217_7425,map__7369_7483,map__7369_7484__$1,gline_7485,gcol_7486,name_7487,vec__7360_7476,column_7477,column_info_7478,seq__7323_7470__$1,temp__5804__auto___7469,vec__7320_7426,line_7427,columns_7428,inverted))
,cljs.core.sorted_map.call(null)));


var G__7488 = seq__7363_7479;
var G__7489 = chunk__7364_7480;
var G__7490 = count__7365_7481;
var G__7491 = (i__7366_7482 + (1));
seq__7363_7479 = G__7488;
chunk__7364_7480 = G__7489;
count__7365_7481 = G__7490;
i__7366_7482 = G__7491;
continue;
} else {
var temp__5804__auto___7492__$1 = cljs.core.seq.call(null,seq__7363_7479);
if(temp__5804__auto___7492__$1){
var seq__7363_7493__$1 = temp__5804__auto___7492__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7363_7493__$1)){
var c__5525__auto___7494 = cljs.core.chunk_first.call(null,seq__7363_7493__$1);
var G__7495 = cljs.core.chunk_rest.call(null,seq__7363_7493__$1);
var G__7496 = c__5525__auto___7494;
var G__7497 = cljs.core.count.call(null,c__5525__auto___7494);
var G__7498 = (0);
seq__7363_7479 = G__7495;
chunk__7364_7480 = G__7496;
count__7365_7481 = G__7497;
i__7366_7482 = G__7498;
continue;
} else {
var map__7370_7499 = cljs.core.first.call(null,seq__7363_7493__$1);
var map__7370_7500__$1 = cljs.core.__destructure_map.call(null,map__7370_7499);
var gline_7501 = cljs.core.get.call(null,map__7370_7500__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_7502 = cljs.core.get.call(null,map__7370_7500__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7503 = cljs.core.get.call(null,map__7370_7500__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7501], null),cljs.core.fnil.call(null,((function (seq__7363_7479,chunk__7364_7480,count__7365_7481,i__7366_7482,seq__7323_7429,chunk__7324_7430,count__7325_7431,i__7326_7432,seq__7214_7422,chunk__7215_7423,count__7216_7424,i__7217_7425,map__7370_7499,map__7370_7500__$1,gline_7501,gcol_7502,name_7503,seq__7363_7493__$1,temp__5804__auto___7492__$1,vec__7360_7476,column_7477,column_info_7478,seq__7323_7470__$1,temp__5804__auto___7469,vec__7320_7426,line_7427,columns_7428,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_7502], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_7427,new cljs.core.Keyword(null,"col","col",-1959363084),column_7477,new cljs.core.Keyword(null,"name","name",1843675177),name_7503], null));
});})(seq__7363_7479,chunk__7364_7480,count__7365_7481,i__7366_7482,seq__7323_7429,chunk__7324_7430,count__7325_7431,i__7326_7432,seq__7214_7422,chunk__7215_7423,count__7216_7424,i__7217_7425,map__7370_7499,map__7370_7500__$1,gline_7501,gcol_7502,name_7503,seq__7363_7493__$1,temp__5804__auto___7492__$1,vec__7360_7476,column_7477,column_info_7478,seq__7323_7470__$1,temp__5804__auto___7469,vec__7320_7426,line_7427,columns_7428,inverted))
,cljs.core.sorted_map.call(null)));


var G__7504 = cljs.core.next.call(null,seq__7363_7493__$1);
var G__7505 = null;
var G__7506 = (0);
var G__7507 = (0);
seq__7363_7479 = G__7504;
chunk__7364_7480 = G__7505;
count__7365_7481 = G__7506;
i__7366_7482 = G__7507;
continue;
}
} else {
}
}
break;
}


var G__7508 = cljs.core.next.call(null,seq__7323_7470__$1);
var G__7509 = null;
var G__7510 = (0);
var G__7511 = (0);
seq__7323_7429 = G__7508;
chunk__7324_7430 = G__7509;
count__7325_7431 = G__7510;
i__7326_7432 = G__7511;
continue;
}
} else {
}
}
break;
}


var G__7512 = seq__7214_7422;
var G__7513 = chunk__7215_7423;
var G__7514 = count__7216_7424;
var G__7515 = (i__7217_7425 + (1));
seq__7214_7422 = G__7512;
chunk__7215_7423 = G__7513;
count__7216_7424 = G__7514;
i__7217_7425 = G__7515;
continue;
} else {
var temp__5804__auto___7516 = cljs.core.seq.call(null,seq__7214_7422);
if(temp__5804__auto___7516){
var seq__7214_7517__$1 = temp__5804__auto___7516;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7214_7517__$1)){
var c__5525__auto___7518 = cljs.core.chunk_first.call(null,seq__7214_7517__$1);
var G__7519 = cljs.core.chunk_rest.call(null,seq__7214_7517__$1);
var G__7520 = c__5525__auto___7518;
var G__7521 = cljs.core.count.call(null,c__5525__auto___7518);
var G__7522 = (0);
seq__7214_7422 = G__7519;
chunk__7215_7423 = G__7520;
count__7216_7424 = G__7521;
i__7217_7425 = G__7522;
continue;
} else {
var vec__7371_7523 = cljs.core.first.call(null,seq__7214_7517__$1);
var line_7524 = cljs.core.nth.call(null,vec__7371_7523,(0),null);
var columns_7525 = cljs.core.nth.call(null,vec__7371_7523,(1),null);
var seq__7374_7526 = cljs.core.seq.call(null,columns_7525);
var chunk__7375_7527 = null;
var count__7376_7528 = (0);
var i__7377_7529 = (0);
while(true){
if((i__7377_7529 < count__7376_7528)){
var vec__7400_7530 = cljs.core._nth.call(null,chunk__7375_7527,i__7377_7529);
var column_7531 = cljs.core.nth.call(null,vec__7400_7530,(0),null);
var column_info_7532 = cljs.core.nth.call(null,vec__7400_7530,(1),null);
var seq__7403_7533 = cljs.core.seq.call(null,column_info_7532);
var chunk__7404_7534 = null;
var count__7405_7535 = (0);
var i__7406_7536 = (0);
while(true){
if((i__7406_7536 < count__7405_7535)){
var map__7409_7537 = cljs.core._nth.call(null,chunk__7404_7534,i__7406_7536);
var map__7409_7538__$1 = cljs.core.__destructure_map.call(null,map__7409_7537);
var gline_7539 = cljs.core.get.call(null,map__7409_7538__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_7540 = cljs.core.get.call(null,map__7409_7538__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7541 = cljs.core.get.call(null,map__7409_7538__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7539], null),cljs.core.fnil.call(null,((function (seq__7403_7533,chunk__7404_7534,count__7405_7535,i__7406_7536,seq__7374_7526,chunk__7375_7527,count__7376_7528,i__7377_7529,seq__7214_7422,chunk__7215_7423,count__7216_7424,i__7217_7425,map__7409_7537,map__7409_7538__$1,gline_7539,gcol_7540,name_7541,vec__7400_7530,column_7531,column_info_7532,vec__7371_7523,line_7524,columns_7525,seq__7214_7517__$1,temp__5804__auto___7516,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_7540], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_7524,new cljs.core.Keyword(null,"col","col",-1959363084),column_7531,new cljs.core.Keyword(null,"name","name",1843675177),name_7541], null));
});})(seq__7403_7533,chunk__7404_7534,count__7405_7535,i__7406_7536,seq__7374_7526,chunk__7375_7527,count__7376_7528,i__7377_7529,seq__7214_7422,chunk__7215_7423,count__7216_7424,i__7217_7425,map__7409_7537,map__7409_7538__$1,gline_7539,gcol_7540,name_7541,vec__7400_7530,column_7531,column_info_7532,vec__7371_7523,line_7524,columns_7525,seq__7214_7517__$1,temp__5804__auto___7516,inverted))
,cljs.core.sorted_map.call(null)));


var G__7542 = seq__7403_7533;
var G__7543 = chunk__7404_7534;
var G__7544 = count__7405_7535;
var G__7545 = (i__7406_7536 + (1));
seq__7403_7533 = G__7542;
chunk__7404_7534 = G__7543;
count__7405_7535 = G__7544;
i__7406_7536 = G__7545;
continue;
} else {
var temp__5804__auto___7546__$1 = cljs.core.seq.call(null,seq__7403_7533);
if(temp__5804__auto___7546__$1){
var seq__7403_7547__$1 = temp__5804__auto___7546__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7403_7547__$1)){
var c__5525__auto___7548 = cljs.core.chunk_first.call(null,seq__7403_7547__$1);
var G__7549 = cljs.core.chunk_rest.call(null,seq__7403_7547__$1);
var G__7550 = c__5525__auto___7548;
var G__7551 = cljs.core.count.call(null,c__5525__auto___7548);
var G__7552 = (0);
seq__7403_7533 = G__7549;
chunk__7404_7534 = G__7550;
count__7405_7535 = G__7551;
i__7406_7536 = G__7552;
continue;
} else {
var map__7410_7553 = cljs.core.first.call(null,seq__7403_7547__$1);
var map__7410_7554__$1 = cljs.core.__destructure_map.call(null,map__7410_7553);
var gline_7555 = cljs.core.get.call(null,map__7410_7554__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_7556 = cljs.core.get.call(null,map__7410_7554__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7557 = cljs.core.get.call(null,map__7410_7554__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7555], null),cljs.core.fnil.call(null,((function (seq__7403_7533,chunk__7404_7534,count__7405_7535,i__7406_7536,seq__7374_7526,chunk__7375_7527,count__7376_7528,i__7377_7529,seq__7214_7422,chunk__7215_7423,count__7216_7424,i__7217_7425,map__7410_7553,map__7410_7554__$1,gline_7555,gcol_7556,name_7557,seq__7403_7547__$1,temp__5804__auto___7546__$1,vec__7400_7530,column_7531,column_info_7532,vec__7371_7523,line_7524,columns_7525,seq__7214_7517__$1,temp__5804__auto___7516,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_7556], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_7524,new cljs.core.Keyword(null,"col","col",-1959363084),column_7531,new cljs.core.Keyword(null,"name","name",1843675177),name_7557], null));
});})(seq__7403_7533,chunk__7404_7534,count__7405_7535,i__7406_7536,seq__7374_7526,chunk__7375_7527,count__7376_7528,i__7377_7529,seq__7214_7422,chunk__7215_7423,count__7216_7424,i__7217_7425,map__7410_7553,map__7410_7554__$1,gline_7555,gcol_7556,name_7557,seq__7403_7547__$1,temp__5804__auto___7546__$1,vec__7400_7530,column_7531,column_info_7532,vec__7371_7523,line_7524,columns_7525,seq__7214_7517__$1,temp__5804__auto___7516,inverted))
,cljs.core.sorted_map.call(null)));


var G__7558 = cljs.core.next.call(null,seq__7403_7547__$1);
var G__7559 = null;
var G__7560 = (0);
var G__7561 = (0);
seq__7403_7533 = G__7558;
chunk__7404_7534 = G__7559;
count__7405_7535 = G__7560;
i__7406_7536 = G__7561;
continue;
}
} else {
}
}
break;
}


var G__7562 = seq__7374_7526;
var G__7563 = chunk__7375_7527;
var G__7564 = count__7376_7528;
var G__7565 = (i__7377_7529 + (1));
seq__7374_7526 = G__7562;
chunk__7375_7527 = G__7563;
count__7376_7528 = G__7564;
i__7377_7529 = G__7565;
continue;
} else {
var temp__5804__auto___7566__$1 = cljs.core.seq.call(null,seq__7374_7526);
if(temp__5804__auto___7566__$1){
var seq__7374_7567__$1 = temp__5804__auto___7566__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7374_7567__$1)){
var c__5525__auto___7568 = cljs.core.chunk_first.call(null,seq__7374_7567__$1);
var G__7569 = cljs.core.chunk_rest.call(null,seq__7374_7567__$1);
var G__7570 = c__5525__auto___7568;
var G__7571 = cljs.core.count.call(null,c__5525__auto___7568);
var G__7572 = (0);
seq__7374_7526 = G__7569;
chunk__7375_7527 = G__7570;
count__7376_7528 = G__7571;
i__7377_7529 = G__7572;
continue;
} else {
var vec__7411_7573 = cljs.core.first.call(null,seq__7374_7567__$1);
var column_7574 = cljs.core.nth.call(null,vec__7411_7573,(0),null);
var column_info_7575 = cljs.core.nth.call(null,vec__7411_7573,(1),null);
var seq__7414_7576 = cljs.core.seq.call(null,column_info_7575);
var chunk__7415_7577 = null;
var count__7416_7578 = (0);
var i__7417_7579 = (0);
while(true){
if((i__7417_7579 < count__7416_7578)){
var map__7420_7580 = cljs.core._nth.call(null,chunk__7415_7577,i__7417_7579);
var map__7420_7581__$1 = cljs.core.__destructure_map.call(null,map__7420_7580);
var gline_7582 = cljs.core.get.call(null,map__7420_7581__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_7583 = cljs.core.get.call(null,map__7420_7581__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7584 = cljs.core.get.call(null,map__7420_7581__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7582], null),cljs.core.fnil.call(null,((function (seq__7414_7576,chunk__7415_7577,count__7416_7578,i__7417_7579,seq__7374_7526,chunk__7375_7527,count__7376_7528,i__7377_7529,seq__7214_7422,chunk__7215_7423,count__7216_7424,i__7217_7425,map__7420_7580,map__7420_7581__$1,gline_7582,gcol_7583,name_7584,vec__7411_7573,column_7574,column_info_7575,seq__7374_7567__$1,temp__5804__auto___7566__$1,vec__7371_7523,line_7524,columns_7525,seq__7214_7517__$1,temp__5804__auto___7516,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_7583], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_7524,new cljs.core.Keyword(null,"col","col",-1959363084),column_7574,new cljs.core.Keyword(null,"name","name",1843675177),name_7584], null));
});})(seq__7414_7576,chunk__7415_7577,count__7416_7578,i__7417_7579,seq__7374_7526,chunk__7375_7527,count__7376_7528,i__7377_7529,seq__7214_7422,chunk__7215_7423,count__7216_7424,i__7217_7425,map__7420_7580,map__7420_7581__$1,gline_7582,gcol_7583,name_7584,vec__7411_7573,column_7574,column_info_7575,seq__7374_7567__$1,temp__5804__auto___7566__$1,vec__7371_7523,line_7524,columns_7525,seq__7214_7517__$1,temp__5804__auto___7516,inverted))
,cljs.core.sorted_map.call(null)));


var G__7585 = seq__7414_7576;
var G__7586 = chunk__7415_7577;
var G__7587 = count__7416_7578;
var G__7588 = (i__7417_7579 + (1));
seq__7414_7576 = G__7585;
chunk__7415_7577 = G__7586;
count__7416_7578 = G__7587;
i__7417_7579 = G__7588;
continue;
} else {
var temp__5804__auto___7589__$2 = cljs.core.seq.call(null,seq__7414_7576);
if(temp__5804__auto___7589__$2){
var seq__7414_7590__$1 = temp__5804__auto___7589__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7414_7590__$1)){
var c__5525__auto___7591 = cljs.core.chunk_first.call(null,seq__7414_7590__$1);
var G__7592 = cljs.core.chunk_rest.call(null,seq__7414_7590__$1);
var G__7593 = c__5525__auto___7591;
var G__7594 = cljs.core.count.call(null,c__5525__auto___7591);
var G__7595 = (0);
seq__7414_7576 = G__7592;
chunk__7415_7577 = G__7593;
count__7416_7578 = G__7594;
i__7417_7579 = G__7595;
continue;
} else {
var map__7421_7596 = cljs.core.first.call(null,seq__7414_7590__$1);
var map__7421_7597__$1 = cljs.core.__destructure_map.call(null,map__7421_7596);
var gline_7598 = cljs.core.get.call(null,map__7421_7597__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_7599 = cljs.core.get.call(null,map__7421_7597__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7600 = cljs.core.get.call(null,map__7421_7597__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7598], null),cljs.core.fnil.call(null,((function (seq__7414_7576,chunk__7415_7577,count__7416_7578,i__7417_7579,seq__7374_7526,chunk__7375_7527,count__7376_7528,i__7377_7529,seq__7214_7422,chunk__7215_7423,count__7216_7424,i__7217_7425,map__7421_7596,map__7421_7597__$1,gline_7598,gcol_7599,name_7600,seq__7414_7590__$1,temp__5804__auto___7589__$2,vec__7411_7573,column_7574,column_info_7575,seq__7374_7567__$1,temp__5804__auto___7566__$1,vec__7371_7523,line_7524,columns_7525,seq__7214_7517__$1,temp__5804__auto___7516,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_7599], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_7524,new cljs.core.Keyword(null,"col","col",-1959363084),column_7574,new cljs.core.Keyword(null,"name","name",1843675177),name_7600], null));
});})(seq__7414_7576,chunk__7415_7577,count__7416_7578,i__7417_7579,seq__7374_7526,chunk__7375_7527,count__7376_7528,i__7377_7529,seq__7214_7422,chunk__7215_7423,count__7216_7424,i__7217_7425,map__7421_7596,map__7421_7597__$1,gline_7598,gcol_7599,name_7600,seq__7414_7590__$1,temp__5804__auto___7589__$2,vec__7411_7573,column_7574,column_info_7575,seq__7374_7567__$1,temp__5804__auto___7566__$1,vec__7371_7523,line_7524,columns_7525,seq__7214_7517__$1,temp__5804__auto___7516,inverted))
,cljs.core.sorted_map.call(null)));


var G__7601 = cljs.core.next.call(null,seq__7414_7590__$1);
var G__7602 = null;
var G__7603 = (0);
var G__7604 = (0);
seq__7414_7576 = G__7601;
chunk__7415_7577 = G__7602;
count__7416_7578 = G__7603;
i__7417_7579 = G__7604;
continue;
}
} else {
}
}
break;
}


var G__7605 = cljs.core.next.call(null,seq__7374_7567__$1);
var G__7606 = null;
var G__7607 = (0);
var G__7608 = (0);
seq__7374_7526 = G__7605;
chunk__7375_7527 = G__7606;
count__7376_7528 = G__7607;
i__7377_7529 = G__7608;
continue;
}
} else {
}
}
break;
}


var G__7609 = cljs.core.next.call(null,seq__7214_7517__$1);
var G__7610 = null;
var G__7611 = (0);
var G__7612 = (0);
seq__7214_7422 = G__7609;
chunk__7215_7423 = G__7610;
count__7216_7424 = G__7611;
i__7217_7425 = G__7612;
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
