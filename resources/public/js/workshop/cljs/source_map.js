// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__2502){
var vec__2503 = p__2502;
var i = cljs.core.nth.call(null,vec__2503,(0),null);
var v = cljs.core.nth.call(null,vec__2503,(1),null);
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
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__2506 = seg;
var gcol = cljs.core.nth.call(null,vec__2506,(0),null);
var source = cljs.core.nth.call(null,vec__2506,(1),null);
var line = cljs.core.nth.call(null,vec__2506,(2),null);
var col = cljs.core.nth.call(null,vec__2506,(3),null);
var name = cljs.core.nth.call(null,vec__2506,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5735__auto__)){
var name__$1 = temp__5735__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
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
var vec__2509 = seg;
var gcol = cljs.core.nth.call(null,vec__2509,(0),null);
var source = cljs.core.nth.call(null,vec__2509,(1),null);
var line = cljs.core.nth.call(null,vec__2509,(2),null);
var col = cljs.core.nth.call(null,vec__2509,(3),null);
var name = cljs.core.nth.call(null,vec__2509,(4),null);
var vec__2512 = relseg;
var rgcol = cljs.core.nth.call(null,vec__2512,(0),null);
var rsource = cljs.core.nth.call(null,vec__2512,(1),null);
var rline = cljs.core.nth.call(null,vec__2512,(2),null);
var rcol = cljs.core.nth.call(null,vec__2512,(3),null);
var rname = cljs.core.nth.call(null,vec__2512,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4047__auto__ = source;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4047__auto__ = line;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4047__auto__ = col;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
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
var map__2515 = segmap;
var map__2515__$1 = (((((!((map__2515 == null))))?(((((map__2515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2515):map__2515);
var gcol = cljs.core.get.call(null,map__2515__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__2515__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__2515__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__2515__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__2515__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__2515,map__2515__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__2515,map__2515__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__2515,map__2515__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__2515,map__2515__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__2515,map__2515__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__2515,map__2515__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__2518 = arguments.length;
switch (G__2518) {
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

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__2519 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__2523 = cljs.core.next.call(null,segs__$1);
var G__2524 = nrelseg;
var G__2525 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__2523;
relseg__$1 = G__2524;
result__$1 = G__2525;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__2519,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__2519,(1),null);
var G__2526 = (gline + (1));
var G__2527 = cljs.core.next.call(null,lines__$1);
var G__2528 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__2529 = result__$1;
gline = G__2526;
lines__$1 = G__2527;
relseg = G__2528;
result = G__2529;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__2531 = segmap;
var map__2531__$1 = (((((!((map__2531 == null))))?(((((map__2531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2531):map__2531);
var gcol = cljs.core.get.call(null,map__2531__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__2531__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__2531__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__2531__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__2531__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__2531,map__2531__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__2531,map__2531__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__2530_SHARP_){
return cljs.core.conj.call(null,p1__2530_SHARP_,d__$1);
});})(map__2531,map__2531__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__2531,map__2531__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__2534 = arguments.length;
switch (G__2534) {
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

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__2535 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__2539 = cljs.core.next.call(null,segs__$1);
var G__2540 = nrelseg;
var G__2541 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__2539;
relseg__$1 = G__2540;
result__$1 = G__2541;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__2535,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__2535,(1),null);
var G__2542 = (gline + (1));
var G__2543 = cljs.core.next.call(null,lines__$1);
var G__2544 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__2545 = result__$1;
gline = G__2542;
lines__$1 = G__2543;
relseg = G__2544;
result = G__2545;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__2546){
var vec__2547 = p__2546;
var _ = cljs.core.nth.call(null,vec__2547,(0),null);
var source = cljs.core.nth.call(null,vec__2547,(1),null);
var line = cljs.core.nth.call(null,vec__2547,(2),null);
var col = cljs.core.nth.call(null,vec__2547,(3),null);
var name = cljs.core.nth.call(null,vec__2547,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__2550){
var vec__2551 = p__2550;
var gcol = cljs.core.nth.call(null,vec__2551,(0),null);
var sidx = cljs.core.nth.call(null,vec__2551,(1),null);
var line = cljs.core.nth.call(null,vec__2551,(2),null);
var col = cljs.core.nth.call(null,vec__2551,(3),null);
var name = cljs.core.nth.call(null,vec__2551,(4),null);
var seg = vec__2551;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__2551,gcol,sidx,line,col,name,seg,relseg){
return (function (p__2554){
var vec__2555 = p__2554;
var _ = cljs.core.nth.call(null,vec__2555,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__2555,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__2555,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__2555,(3),null);
var lname = cljs.core.nth.call(null,vec__2555,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__2551,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5733__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
var idx = (function (){var temp__5733__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5733__auto____$1)){
var idx = temp__5733__auto____$1;
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
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__2561 = cljs.core.seq.call(null,infos);
var chunk__2562 = null;
var count__2563 = (0);
var i__2564 = (0);
while(true){
if((i__2564 < count__2563)){
var info = cljs.core._nth.call(null,chunk__2562,i__2564);
var segv_2643 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_2644 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_2645 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_2644 > (lc_2645 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__2561,chunk__2562,count__2563,i__2564,segv_2643,gline_2644,lc_2645,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_2644 - (lc_2645 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_2643], null));
});})(seq__2561,chunk__2562,count__2563,i__2564,segv_2643,gline_2644,lc_2645,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__2561,chunk__2562,count__2563,i__2564,segv_2643,gline_2644,lc_2645,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_2644], null),cljs.core.conj,segv_2643);
});})(seq__2561,chunk__2562,count__2563,i__2564,segv_2643,gline_2644,lc_2645,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__2646 = seq__2561;
var G__2647 = chunk__2562;
var G__2648 = count__2563;
var G__2649 = (i__2564 + (1));
seq__2561 = G__2646;
chunk__2562 = G__2647;
count__2563 = G__2648;
i__2564 = G__2649;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__2561);
if(temp__5735__auto__){
var seq__2561__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2561__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__2561__$1);
var G__2650 = cljs.core.chunk_rest.call(null,seq__2561__$1);
var G__2651 = c__4461__auto__;
var G__2652 = cljs.core.count.call(null,c__4461__auto__);
var G__2653 = (0);
seq__2561 = G__2650;
chunk__2562 = G__2651;
count__2563 = G__2652;
i__2564 = G__2653;
continue;
} else {
var info = cljs.core.first.call(null,seq__2561__$1);
var segv_2654 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_2655 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_2656 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_2655 > (lc_2656 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__2561,chunk__2562,count__2563,i__2564,segv_2654,gline_2655,lc_2656,info,seq__2561__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_2655 - (lc_2656 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_2654], null));
});})(seq__2561,chunk__2562,count__2563,i__2564,segv_2654,gline_2655,lc_2656,info,seq__2561__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__2561,chunk__2562,count__2563,i__2564,segv_2654,gline_2655,lc_2656,info,seq__2561__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_2655], null),cljs.core.conj,segv_2654);
});})(seq__2561,chunk__2562,count__2563,i__2564,segv_2654,gline_2655,lc_2656,info,seq__2561__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__2657 = cljs.core.next.call(null,seq__2561__$1);
var G__2658 = null;
var G__2659 = (0);
var G__2660 = (0);
seq__2561 = G__2657;
chunk__2562 = G__2658;
count__2563 = G__2659;
i__2564 = G__2660;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__2565_2661 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__2566_2662 = null;
var count__2567_2663 = (0);
var i__2568_2664 = (0);
while(true){
if((i__2568_2664 < count__2567_2663)){
var vec__2569_2665 = cljs.core._nth.call(null,chunk__2566_2662,i__2568_2664);
var source_idx_2666 = cljs.core.nth.call(null,vec__2569_2665,(0),null);
var vec__2572_2667 = cljs.core.nth.call(null,vec__2569_2665,(1),null);
var __2668 = cljs.core.nth.call(null,vec__2572_2667,(0),null);
var lines_2669__$1 = cljs.core.nth.call(null,vec__2572_2667,(1),null);
var seq__2575_2670 = cljs.core.seq.call(null,lines_2669__$1);
var chunk__2576_2671 = null;
var count__2577_2672 = (0);
var i__2578_2673 = (0);
while(true){
if((i__2578_2673 < count__2577_2672)){
var vec__2579_2674 = cljs.core._nth.call(null,chunk__2576_2671,i__2578_2673);
var line_2675 = cljs.core.nth.call(null,vec__2579_2674,(0),null);
var cols_2676 = cljs.core.nth.call(null,vec__2579_2674,(1),null);
var seq__2582_2677 = cljs.core.seq.call(null,cols_2676);
var chunk__2583_2678 = null;
var count__2584_2679 = (0);
var i__2585_2680 = (0);
while(true){
if((i__2585_2680 < count__2584_2679)){
var vec__2586_2681 = cljs.core._nth.call(null,chunk__2583_2678,i__2585_2680);
var col_2682 = cljs.core.nth.call(null,vec__2586_2681,(0),null);
var infos_2683 = cljs.core.nth.call(null,vec__2586_2681,(1),null);
encode_cols.call(null,infos_2683,source_idx_2666,line_2675,col_2682);


var G__2684 = seq__2582_2677;
var G__2685 = chunk__2583_2678;
var G__2686 = count__2584_2679;
var G__2687 = (i__2585_2680 + (1));
seq__2582_2677 = G__2684;
chunk__2583_2678 = G__2685;
count__2584_2679 = G__2686;
i__2585_2680 = G__2687;
continue;
} else {
var temp__5735__auto___2688 = cljs.core.seq.call(null,seq__2582_2677);
if(temp__5735__auto___2688){
var seq__2582_2689__$1 = temp__5735__auto___2688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2582_2689__$1)){
var c__4461__auto___2690 = cljs.core.chunk_first.call(null,seq__2582_2689__$1);
var G__2691 = cljs.core.chunk_rest.call(null,seq__2582_2689__$1);
var G__2692 = c__4461__auto___2690;
var G__2693 = cljs.core.count.call(null,c__4461__auto___2690);
var G__2694 = (0);
seq__2582_2677 = G__2691;
chunk__2583_2678 = G__2692;
count__2584_2679 = G__2693;
i__2585_2680 = G__2694;
continue;
} else {
var vec__2589_2695 = cljs.core.first.call(null,seq__2582_2689__$1);
var col_2696 = cljs.core.nth.call(null,vec__2589_2695,(0),null);
var infos_2697 = cljs.core.nth.call(null,vec__2589_2695,(1),null);
encode_cols.call(null,infos_2697,source_idx_2666,line_2675,col_2696);


var G__2698 = cljs.core.next.call(null,seq__2582_2689__$1);
var G__2699 = null;
var G__2700 = (0);
var G__2701 = (0);
seq__2582_2677 = G__2698;
chunk__2583_2678 = G__2699;
count__2584_2679 = G__2700;
i__2585_2680 = G__2701;
continue;
}
} else {
}
}
break;
}


var G__2702 = seq__2575_2670;
var G__2703 = chunk__2576_2671;
var G__2704 = count__2577_2672;
var G__2705 = (i__2578_2673 + (1));
seq__2575_2670 = G__2702;
chunk__2576_2671 = G__2703;
count__2577_2672 = G__2704;
i__2578_2673 = G__2705;
continue;
} else {
var temp__5735__auto___2706 = cljs.core.seq.call(null,seq__2575_2670);
if(temp__5735__auto___2706){
var seq__2575_2707__$1 = temp__5735__auto___2706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2575_2707__$1)){
var c__4461__auto___2708 = cljs.core.chunk_first.call(null,seq__2575_2707__$1);
var G__2709 = cljs.core.chunk_rest.call(null,seq__2575_2707__$1);
var G__2710 = c__4461__auto___2708;
var G__2711 = cljs.core.count.call(null,c__4461__auto___2708);
var G__2712 = (0);
seq__2575_2670 = G__2709;
chunk__2576_2671 = G__2710;
count__2577_2672 = G__2711;
i__2578_2673 = G__2712;
continue;
} else {
var vec__2592_2713 = cljs.core.first.call(null,seq__2575_2707__$1);
var line_2714 = cljs.core.nth.call(null,vec__2592_2713,(0),null);
var cols_2715 = cljs.core.nth.call(null,vec__2592_2713,(1),null);
var seq__2595_2716 = cljs.core.seq.call(null,cols_2715);
var chunk__2596_2717 = null;
var count__2597_2718 = (0);
var i__2598_2719 = (0);
while(true){
if((i__2598_2719 < count__2597_2718)){
var vec__2599_2720 = cljs.core._nth.call(null,chunk__2596_2717,i__2598_2719);
var col_2721 = cljs.core.nth.call(null,vec__2599_2720,(0),null);
var infos_2722 = cljs.core.nth.call(null,vec__2599_2720,(1),null);
encode_cols.call(null,infos_2722,source_idx_2666,line_2714,col_2721);


var G__2723 = seq__2595_2716;
var G__2724 = chunk__2596_2717;
var G__2725 = count__2597_2718;
var G__2726 = (i__2598_2719 + (1));
seq__2595_2716 = G__2723;
chunk__2596_2717 = G__2724;
count__2597_2718 = G__2725;
i__2598_2719 = G__2726;
continue;
} else {
var temp__5735__auto___2727__$1 = cljs.core.seq.call(null,seq__2595_2716);
if(temp__5735__auto___2727__$1){
var seq__2595_2728__$1 = temp__5735__auto___2727__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2595_2728__$1)){
var c__4461__auto___2729 = cljs.core.chunk_first.call(null,seq__2595_2728__$1);
var G__2730 = cljs.core.chunk_rest.call(null,seq__2595_2728__$1);
var G__2731 = c__4461__auto___2729;
var G__2732 = cljs.core.count.call(null,c__4461__auto___2729);
var G__2733 = (0);
seq__2595_2716 = G__2730;
chunk__2596_2717 = G__2731;
count__2597_2718 = G__2732;
i__2598_2719 = G__2733;
continue;
} else {
var vec__2602_2734 = cljs.core.first.call(null,seq__2595_2728__$1);
var col_2735 = cljs.core.nth.call(null,vec__2602_2734,(0),null);
var infos_2736 = cljs.core.nth.call(null,vec__2602_2734,(1),null);
encode_cols.call(null,infos_2736,source_idx_2666,line_2714,col_2735);


var G__2737 = cljs.core.next.call(null,seq__2595_2728__$1);
var G__2738 = null;
var G__2739 = (0);
var G__2740 = (0);
seq__2595_2716 = G__2737;
chunk__2596_2717 = G__2738;
count__2597_2718 = G__2739;
i__2598_2719 = G__2740;
continue;
}
} else {
}
}
break;
}


var G__2741 = cljs.core.next.call(null,seq__2575_2707__$1);
var G__2742 = null;
var G__2743 = (0);
var G__2744 = (0);
seq__2575_2670 = G__2741;
chunk__2576_2671 = G__2742;
count__2577_2672 = G__2743;
i__2578_2673 = G__2744;
continue;
}
} else {
}
}
break;
}


var G__2745 = seq__2565_2661;
var G__2746 = chunk__2566_2662;
var G__2747 = count__2567_2663;
var G__2748 = (i__2568_2664 + (1));
seq__2565_2661 = G__2745;
chunk__2566_2662 = G__2746;
count__2567_2663 = G__2747;
i__2568_2664 = G__2748;
continue;
} else {
var temp__5735__auto___2749 = cljs.core.seq.call(null,seq__2565_2661);
if(temp__5735__auto___2749){
var seq__2565_2750__$1 = temp__5735__auto___2749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2565_2750__$1)){
var c__4461__auto___2751 = cljs.core.chunk_first.call(null,seq__2565_2750__$1);
var G__2752 = cljs.core.chunk_rest.call(null,seq__2565_2750__$1);
var G__2753 = c__4461__auto___2751;
var G__2754 = cljs.core.count.call(null,c__4461__auto___2751);
var G__2755 = (0);
seq__2565_2661 = G__2752;
chunk__2566_2662 = G__2753;
count__2567_2663 = G__2754;
i__2568_2664 = G__2755;
continue;
} else {
var vec__2605_2756 = cljs.core.first.call(null,seq__2565_2750__$1);
var source_idx_2757 = cljs.core.nth.call(null,vec__2605_2756,(0),null);
var vec__2608_2758 = cljs.core.nth.call(null,vec__2605_2756,(1),null);
var __2759 = cljs.core.nth.call(null,vec__2608_2758,(0),null);
var lines_2760__$1 = cljs.core.nth.call(null,vec__2608_2758,(1),null);
var seq__2611_2761 = cljs.core.seq.call(null,lines_2760__$1);
var chunk__2612_2762 = null;
var count__2613_2763 = (0);
var i__2614_2764 = (0);
while(true){
if((i__2614_2764 < count__2613_2763)){
var vec__2615_2765 = cljs.core._nth.call(null,chunk__2612_2762,i__2614_2764);
var line_2766 = cljs.core.nth.call(null,vec__2615_2765,(0),null);
var cols_2767 = cljs.core.nth.call(null,vec__2615_2765,(1),null);
var seq__2618_2768 = cljs.core.seq.call(null,cols_2767);
var chunk__2619_2769 = null;
var count__2620_2770 = (0);
var i__2621_2771 = (0);
while(true){
if((i__2621_2771 < count__2620_2770)){
var vec__2622_2772 = cljs.core._nth.call(null,chunk__2619_2769,i__2621_2771);
var col_2773 = cljs.core.nth.call(null,vec__2622_2772,(0),null);
var infos_2774 = cljs.core.nth.call(null,vec__2622_2772,(1),null);
encode_cols.call(null,infos_2774,source_idx_2757,line_2766,col_2773);


var G__2775 = seq__2618_2768;
var G__2776 = chunk__2619_2769;
var G__2777 = count__2620_2770;
var G__2778 = (i__2621_2771 + (1));
seq__2618_2768 = G__2775;
chunk__2619_2769 = G__2776;
count__2620_2770 = G__2777;
i__2621_2771 = G__2778;
continue;
} else {
var temp__5735__auto___2779__$1 = cljs.core.seq.call(null,seq__2618_2768);
if(temp__5735__auto___2779__$1){
var seq__2618_2780__$1 = temp__5735__auto___2779__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2618_2780__$1)){
var c__4461__auto___2781 = cljs.core.chunk_first.call(null,seq__2618_2780__$1);
var G__2782 = cljs.core.chunk_rest.call(null,seq__2618_2780__$1);
var G__2783 = c__4461__auto___2781;
var G__2784 = cljs.core.count.call(null,c__4461__auto___2781);
var G__2785 = (0);
seq__2618_2768 = G__2782;
chunk__2619_2769 = G__2783;
count__2620_2770 = G__2784;
i__2621_2771 = G__2785;
continue;
} else {
var vec__2625_2786 = cljs.core.first.call(null,seq__2618_2780__$1);
var col_2787 = cljs.core.nth.call(null,vec__2625_2786,(0),null);
var infos_2788 = cljs.core.nth.call(null,vec__2625_2786,(1),null);
encode_cols.call(null,infos_2788,source_idx_2757,line_2766,col_2787);


var G__2789 = cljs.core.next.call(null,seq__2618_2780__$1);
var G__2790 = null;
var G__2791 = (0);
var G__2792 = (0);
seq__2618_2768 = G__2789;
chunk__2619_2769 = G__2790;
count__2620_2770 = G__2791;
i__2621_2771 = G__2792;
continue;
}
} else {
}
}
break;
}


var G__2793 = seq__2611_2761;
var G__2794 = chunk__2612_2762;
var G__2795 = count__2613_2763;
var G__2796 = (i__2614_2764 + (1));
seq__2611_2761 = G__2793;
chunk__2612_2762 = G__2794;
count__2613_2763 = G__2795;
i__2614_2764 = G__2796;
continue;
} else {
var temp__5735__auto___2797__$1 = cljs.core.seq.call(null,seq__2611_2761);
if(temp__5735__auto___2797__$1){
var seq__2611_2798__$1 = temp__5735__auto___2797__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2611_2798__$1)){
var c__4461__auto___2799 = cljs.core.chunk_first.call(null,seq__2611_2798__$1);
var G__2800 = cljs.core.chunk_rest.call(null,seq__2611_2798__$1);
var G__2801 = c__4461__auto___2799;
var G__2802 = cljs.core.count.call(null,c__4461__auto___2799);
var G__2803 = (0);
seq__2611_2761 = G__2800;
chunk__2612_2762 = G__2801;
count__2613_2763 = G__2802;
i__2614_2764 = G__2803;
continue;
} else {
var vec__2628_2804 = cljs.core.first.call(null,seq__2611_2798__$1);
var line_2805 = cljs.core.nth.call(null,vec__2628_2804,(0),null);
var cols_2806 = cljs.core.nth.call(null,vec__2628_2804,(1),null);
var seq__2631_2807 = cljs.core.seq.call(null,cols_2806);
var chunk__2632_2808 = null;
var count__2633_2809 = (0);
var i__2634_2810 = (0);
while(true){
if((i__2634_2810 < count__2633_2809)){
var vec__2635_2811 = cljs.core._nth.call(null,chunk__2632_2808,i__2634_2810);
var col_2812 = cljs.core.nth.call(null,vec__2635_2811,(0),null);
var infos_2813 = cljs.core.nth.call(null,vec__2635_2811,(1),null);
encode_cols.call(null,infos_2813,source_idx_2757,line_2805,col_2812);


var G__2814 = seq__2631_2807;
var G__2815 = chunk__2632_2808;
var G__2816 = count__2633_2809;
var G__2817 = (i__2634_2810 + (1));
seq__2631_2807 = G__2814;
chunk__2632_2808 = G__2815;
count__2633_2809 = G__2816;
i__2634_2810 = G__2817;
continue;
} else {
var temp__5735__auto___2818__$2 = cljs.core.seq.call(null,seq__2631_2807);
if(temp__5735__auto___2818__$2){
var seq__2631_2819__$1 = temp__5735__auto___2818__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2631_2819__$1)){
var c__4461__auto___2820 = cljs.core.chunk_first.call(null,seq__2631_2819__$1);
var G__2821 = cljs.core.chunk_rest.call(null,seq__2631_2819__$1);
var G__2822 = c__4461__auto___2820;
var G__2823 = cljs.core.count.call(null,c__4461__auto___2820);
var G__2824 = (0);
seq__2631_2807 = G__2821;
chunk__2632_2808 = G__2822;
count__2633_2809 = G__2823;
i__2634_2810 = G__2824;
continue;
} else {
var vec__2638_2825 = cljs.core.first.call(null,seq__2631_2819__$1);
var col_2826 = cljs.core.nth.call(null,vec__2638_2825,(0),null);
var infos_2827 = cljs.core.nth.call(null,vec__2638_2825,(1),null);
encode_cols.call(null,infos_2827,source_idx_2757,line_2805,col_2826);


var G__2828 = cljs.core.next.call(null,seq__2631_2819__$1);
var G__2829 = null;
var G__2830 = (0);
var G__2831 = (0);
seq__2631_2807 = G__2828;
chunk__2632_2808 = G__2829;
count__2633_2809 = G__2830;
i__2634_2810 = G__2831;
continue;
}
} else {
}
}
break;
}


var G__2832 = cljs.core.next.call(null,seq__2611_2798__$1);
var G__2833 = null;
var G__2834 = (0);
var G__2835 = (0);
seq__2611_2761 = G__2832;
chunk__2612_2762 = G__2833;
count__2613_2763 = G__2834;
i__2614_2764 = G__2835;
continue;
}
} else {
}
}
break;
}


var G__2836 = cljs.core.next.call(null,seq__2565_2750__$1);
var G__2837 = null;
var G__2838 = (0);
var G__2839 = (0);
seq__2565_2661 = G__2836;
chunk__2566_2662 = G__2837;
count__2567_2663 = G__2838;
i__2568_2664 = G__2839;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__2641 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__2558_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__2558_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__2559_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__2559_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__2560_SHARP_){
return clojure.string.join.call(null,",",p1__2560_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__2642 = G__2641;
goog.object.set(G__2642,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__2642;
} else {
return G__2641;
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
var vec__2840 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__2840,(0),null);
var col_map = cljs.core.nth.call(null,vec__2840,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__2843 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__2843,(0),null);
var infos = cljs.core.nth.call(null,vec__2843,(1),null);
var G__2849 = cljs.core.next.call(null,col_map_seq);
var G__2850 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__2843,col,infos,vec__2840,line,col_map){
return (function (v,p__2846){
var map__2847 = p__2846;
var map__2847__$1 = (((((!((map__2847 == null))))?(((((map__2847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2847):map__2847);
var gline = cljs.core.get.call(null,map__2847__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__2847__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__2843,col,infos,vec__2840,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__2849;
new_cols = G__2850;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__2851 = cljs.core.next.call(null,line_map_seq);
var G__2852 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__2851;
new_lines = G__2852;
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
var seq__2853_2915 = cljs.core.seq.call(null,reverse_map);
var chunk__2854_2916 = null;
var count__2855_2917 = (0);
var i__2856_2918 = (0);
while(true){
if((i__2856_2918 < count__2855_2917)){
var vec__2857_2919 = cljs.core._nth.call(null,chunk__2854_2916,i__2856_2918);
var line_2920 = cljs.core.nth.call(null,vec__2857_2919,(0),null);
var columns_2921 = cljs.core.nth.call(null,vec__2857_2919,(1),null);
var seq__2860_2922 = cljs.core.seq.call(null,columns_2921);
var chunk__2861_2923 = null;
var count__2862_2924 = (0);
var i__2863_2925 = (0);
while(true){
if((i__2863_2925 < count__2862_2924)){
var vec__2864_2926 = cljs.core._nth.call(null,chunk__2861_2923,i__2863_2925);
var column_2927 = cljs.core.nth.call(null,vec__2864_2926,(0),null);
var column_info_2928 = cljs.core.nth.call(null,vec__2864_2926,(1),null);
var seq__2867_2929 = cljs.core.seq.call(null,column_info_2928);
var chunk__2868_2930 = null;
var count__2869_2931 = (0);
var i__2870_2932 = (0);
while(true){
if((i__2870_2932 < count__2869_2931)){
var map__2871_2933 = cljs.core._nth.call(null,chunk__2868_2930,i__2870_2932);
var map__2871_2934__$1 = (((((!((map__2871_2933 == null))))?(((((map__2871_2933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2871_2933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2871_2933):map__2871_2933);
var gline_2935 = cljs.core.get.call(null,map__2871_2934__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_2936 = cljs.core.get.call(null,map__2871_2934__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_2937 = cljs.core.get.call(null,map__2871_2934__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_2935], null),cljs.core.fnil.call(null,((function (seq__2867_2929,chunk__2868_2930,count__2869_2931,i__2870_2932,seq__2860_2922,chunk__2861_2923,count__2862_2924,i__2863_2925,seq__2853_2915,chunk__2854_2916,count__2855_2917,i__2856_2918,map__2871_2933,map__2871_2934__$1,gline_2935,gcol_2936,name_2937,vec__2864_2926,column_2927,column_info_2928,vec__2857_2919,line_2920,columns_2921,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_2936], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_2920,new cljs.core.Keyword(null,"col","col",-1959363084),column_2927,new cljs.core.Keyword(null,"name","name",1843675177),name_2937], null));
});})(seq__2867_2929,chunk__2868_2930,count__2869_2931,i__2870_2932,seq__2860_2922,chunk__2861_2923,count__2862_2924,i__2863_2925,seq__2853_2915,chunk__2854_2916,count__2855_2917,i__2856_2918,map__2871_2933,map__2871_2934__$1,gline_2935,gcol_2936,name_2937,vec__2864_2926,column_2927,column_info_2928,vec__2857_2919,line_2920,columns_2921,inverted))
,cljs.core.sorted_map.call(null)));


var G__2938 = seq__2867_2929;
var G__2939 = chunk__2868_2930;
var G__2940 = count__2869_2931;
var G__2941 = (i__2870_2932 + (1));
seq__2867_2929 = G__2938;
chunk__2868_2930 = G__2939;
count__2869_2931 = G__2940;
i__2870_2932 = G__2941;
continue;
} else {
var temp__5735__auto___2942 = cljs.core.seq.call(null,seq__2867_2929);
if(temp__5735__auto___2942){
var seq__2867_2943__$1 = temp__5735__auto___2942;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2867_2943__$1)){
var c__4461__auto___2944 = cljs.core.chunk_first.call(null,seq__2867_2943__$1);
var G__2945 = cljs.core.chunk_rest.call(null,seq__2867_2943__$1);
var G__2946 = c__4461__auto___2944;
var G__2947 = cljs.core.count.call(null,c__4461__auto___2944);
var G__2948 = (0);
seq__2867_2929 = G__2945;
chunk__2868_2930 = G__2946;
count__2869_2931 = G__2947;
i__2870_2932 = G__2948;
continue;
} else {
var map__2873_2949 = cljs.core.first.call(null,seq__2867_2943__$1);
var map__2873_2950__$1 = (((((!((map__2873_2949 == null))))?(((((map__2873_2949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2873_2949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2873_2949):map__2873_2949);
var gline_2951 = cljs.core.get.call(null,map__2873_2950__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_2952 = cljs.core.get.call(null,map__2873_2950__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_2953 = cljs.core.get.call(null,map__2873_2950__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_2951], null),cljs.core.fnil.call(null,((function (seq__2867_2929,chunk__2868_2930,count__2869_2931,i__2870_2932,seq__2860_2922,chunk__2861_2923,count__2862_2924,i__2863_2925,seq__2853_2915,chunk__2854_2916,count__2855_2917,i__2856_2918,map__2873_2949,map__2873_2950__$1,gline_2951,gcol_2952,name_2953,seq__2867_2943__$1,temp__5735__auto___2942,vec__2864_2926,column_2927,column_info_2928,vec__2857_2919,line_2920,columns_2921,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_2952], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_2920,new cljs.core.Keyword(null,"col","col",-1959363084),column_2927,new cljs.core.Keyword(null,"name","name",1843675177),name_2953], null));
});})(seq__2867_2929,chunk__2868_2930,count__2869_2931,i__2870_2932,seq__2860_2922,chunk__2861_2923,count__2862_2924,i__2863_2925,seq__2853_2915,chunk__2854_2916,count__2855_2917,i__2856_2918,map__2873_2949,map__2873_2950__$1,gline_2951,gcol_2952,name_2953,seq__2867_2943__$1,temp__5735__auto___2942,vec__2864_2926,column_2927,column_info_2928,vec__2857_2919,line_2920,columns_2921,inverted))
,cljs.core.sorted_map.call(null)));


var G__2954 = cljs.core.next.call(null,seq__2867_2943__$1);
var G__2955 = null;
var G__2956 = (0);
var G__2957 = (0);
seq__2867_2929 = G__2954;
chunk__2868_2930 = G__2955;
count__2869_2931 = G__2956;
i__2870_2932 = G__2957;
continue;
}
} else {
}
}
break;
}


var G__2958 = seq__2860_2922;
var G__2959 = chunk__2861_2923;
var G__2960 = count__2862_2924;
var G__2961 = (i__2863_2925 + (1));
seq__2860_2922 = G__2958;
chunk__2861_2923 = G__2959;
count__2862_2924 = G__2960;
i__2863_2925 = G__2961;
continue;
} else {
var temp__5735__auto___2962 = cljs.core.seq.call(null,seq__2860_2922);
if(temp__5735__auto___2962){
var seq__2860_2963__$1 = temp__5735__auto___2962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2860_2963__$1)){
var c__4461__auto___2964 = cljs.core.chunk_first.call(null,seq__2860_2963__$1);
var G__2965 = cljs.core.chunk_rest.call(null,seq__2860_2963__$1);
var G__2966 = c__4461__auto___2964;
var G__2967 = cljs.core.count.call(null,c__4461__auto___2964);
var G__2968 = (0);
seq__2860_2922 = G__2965;
chunk__2861_2923 = G__2966;
count__2862_2924 = G__2967;
i__2863_2925 = G__2968;
continue;
} else {
var vec__2875_2969 = cljs.core.first.call(null,seq__2860_2963__$1);
var column_2970 = cljs.core.nth.call(null,vec__2875_2969,(0),null);
var column_info_2971 = cljs.core.nth.call(null,vec__2875_2969,(1),null);
var seq__2878_2972 = cljs.core.seq.call(null,column_info_2971);
var chunk__2879_2973 = null;
var count__2880_2974 = (0);
var i__2881_2975 = (0);
while(true){
if((i__2881_2975 < count__2880_2974)){
var map__2882_2976 = cljs.core._nth.call(null,chunk__2879_2973,i__2881_2975);
var map__2882_2977__$1 = (((((!((map__2882_2976 == null))))?(((((map__2882_2976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2882_2976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2882_2976):map__2882_2976);
var gline_2978 = cljs.core.get.call(null,map__2882_2977__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_2979 = cljs.core.get.call(null,map__2882_2977__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_2980 = cljs.core.get.call(null,map__2882_2977__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_2978], null),cljs.core.fnil.call(null,((function (seq__2878_2972,chunk__2879_2973,count__2880_2974,i__2881_2975,seq__2860_2922,chunk__2861_2923,count__2862_2924,i__2863_2925,seq__2853_2915,chunk__2854_2916,count__2855_2917,i__2856_2918,map__2882_2976,map__2882_2977__$1,gline_2978,gcol_2979,name_2980,vec__2875_2969,column_2970,column_info_2971,seq__2860_2963__$1,temp__5735__auto___2962,vec__2857_2919,line_2920,columns_2921,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_2979], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_2920,new cljs.core.Keyword(null,"col","col",-1959363084),column_2970,new cljs.core.Keyword(null,"name","name",1843675177),name_2980], null));
});})(seq__2878_2972,chunk__2879_2973,count__2880_2974,i__2881_2975,seq__2860_2922,chunk__2861_2923,count__2862_2924,i__2863_2925,seq__2853_2915,chunk__2854_2916,count__2855_2917,i__2856_2918,map__2882_2976,map__2882_2977__$1,gline_2978,gcol_2979,name_2980,vec__2875_2969,column_2970,column_info_2971,seq__2860_2963__$1,temp__5735__auto___2962,vec__2857_2919,line_2920,columns_2921,inverted))
,cljs.core.sorted_map.call(null)));


var G__2981 = seq__2878_2972;
var G__2982 = chunk__2879_2973;
var G__2983 = count__2880_2974;
var G__2984 = (i__2881_2975 + (1));
seq__2878_2972 = G__2981;
chunk__2879_2973 = G__2982;
count__2880_2974 = G__2983;
i__2881_2975 = G__2984;
continue;
} else {
var temp__5735__auto___2985__$1 = cljs.core.seq.call(null,seq__2878_2972);
if(temp__5735__auto___2985__$1){
var seq__2878_2986__$1 = temp__5735__auto___2985__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2878_2986__$1)){
var c__4461__auto___2987 = cljs.core.chunk_first.call(null,seq__2878_2986__$1);
var G__2988 = cljs.core.chunk_rest.call(null,seq__2878_2986__$1);
var G__2989 = c__4461__auto___2987;
var G__2990 = cljs.core.count.call(null,c__4461__auto___2987);
var G__2991 = (0);
seq__2878_2972 = G__2988;
chunk__2879_2973 = G__2989;
count__2880_2974 = G__2990;
i__2881_2975 = G__2991;
continue;
} else {
var map__2884_2992 = cljs.core.first.call(null,seq__2878_2986__$1);
var map__2884_2993__$1 = (((((!((map__2884_2992 == null))))?(((((map__2884_2992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2884_2992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2884_2992):map__2884_2992);
var gline_2994 = cljs.core.get.call(null,map__2884_2993__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_2995 = cljs.core.get.call(null,map__2884_2993__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_2996 = cljs.core.get.call(null,map__2884_2993__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_2994], null),cljs.core.fnil.call(null,((function (seq__2878_2972,chunk__2879_2973,count__2880_2974,i__2881_2975,seq__2860_2922,chunk__2861_2923,count__2862_2924,i__2863_2925,seq__2853_2915,chunk__2854_2916,count__2855_2917,i__2856_2918,map__2884_2992,map__2884_2993__$1,gline_2994,gcol_2995,name_2996,seq__2878_2986__$1,temp__5735__auto___2985__$1,vec__2875_2969,column_2970,column_info_2971,seq__2860_2963__$1,temp__5735__auto___2962,vec__2857_2919,line_2920,columns_2921,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_2995], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_2920,new cljs.core.Keyword(null,"col","col",-1959363084),column_2970,new cljs.core.Keyword(null,"name","name",1843675177),name_2996], null));
});})(seq__2878_2972,chunk__2879_2973,count__2880_2974,i__2881_2975,seq__2860_2922,chunk__2861_2923,count__2862_2924,i__2863_2925,seq__2853_2915,chunk__2854_2916,count__2855_2917,i__2856_2918,map__2884_2992,map__2884_2993__$1,gline_2994,gcol_2995,name_2996,seq__2878_2986__$1,temp__5735__auto___2985__$1,vec__2875_2969,column_2970,column_info_2971,seq__2860_2963__$1,temp__5735__auto___2962,vec__2857_2919,line_2920,columns_2921,inverted))
,cljs.core.sorted_map.call(null)));


var G__2997 = cljs.core.next.call(null,seq__2878_2986__$1);
var G__2998 = null;
var G__2999 = (0);
var G__3000 = (0);
seq__2878_2972 = G__2997;
chunk__2879_2973 = G__2998;
count__2880_2974 = G__2999;
i__2881_2975 = G__3000;
continue;
}
} else {
}
}
break;
}


var G__3001 = cljs.core.next.call(null,seq__2860_2963__$1);
var G__3002 = null;
var G__3003 = (0);
var G__3004 = (0);
seq__2860_2922 = G__3001;
chunk__2861_2923 = G__3002;
count__2862_2924 = G__3003;
i__2863_2925 = G__3004;
continue;
}
} else {
}
}
break;
}


var G__3005 = seq__2853_2915;
var G__3006 = chunk__2854_2916;
var G__3007 = count__2855_2917;
var G__3008 = (i__2856_2918 + (1));
seq__2853_2915 = G__3005;
chunk__2854_2916 = G__3006;
count__2855_2917 = G__3007;
i__2856_2918 = G__3008;
continue;
} else {
var temp__5735__auto___3009 = cljs.core.seq.call(null,seq__2853_2915);
if(temp__5735__auto___3009){
var seq__2853_3010__$1 = temp__5735__auto___3009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2853_3010__$1)){
var c__4461__auto___3011 = cljs.core.chunk_first.call(null,seq__2853_3010__$1);
var G__3012 = cljs.core.chunk_rest.call(null,seq__2853_3010__$1);
var G__3013 = c__4461__auto___3011;
var G__3014 = cljs.core.count.call(null,c__4461__auto___3011);
var G__3015 = (0);
seq__2853_2915 = G__3012;
chunk__2854_2916 = G__3013;
count__2855_2917 = G__3014;
i__2856_2918 = G__3015;
continue;
} else {
var vec__2886_3016 = cljs.core.first.call(null,seq__2853_3010__$1);
var line_3017 = cljs.core.nth.call(null,vec__2886_3016,(0),null);
var columns_3018 = cljs.core.nth.call(null,vec__2886_3016,(1),null);
var seq__2889_3019 = cljs.core.seq.call(null,columns_3018);
var chunk__2890_3020 = null;
var count__2891_3021 = (0);
var i__2892_3022 = (0);
while(true){
if((i__2892_3022 < count__2891_3021)){
var vec__2893_3023 = cljs.core._nth.call(null,chunk__2890_3020,i__2892_3022);
var column_3024 = cljs.core.nth.call(null,vec__2893_3023,(0),null);
var column_info_3025 = cljs.core.nth.call(null,vec__2893_3023,(1),null);
var seq__2896_3026 = cljs.core.seq.call(null,column_info_3025);
var chunk__2897_3027 = null;
var count__2898_3028 = (0);
var i__2899_3029 = (0);
while(true){
if((i__2899_3029 < count__2898_3028)){
var map__2900_3030 = cljs.core._nth.call(null,chunk__2897_3027,i__2899_3029);
var map__2900_3031__$1 = (((((!((map__2900_3030 == null))))?(((((map__2900_3030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2900_3030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2900_3030):map__2900_3030);
var gline_3032 = cljs.core.get.call(null,map__2900_3031__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3033 = cljs.core.get.call(null,map__2900_3031__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3034 = cljs.core.get.call(null,map__2900_3031__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3032], null),cljs.core.fnil.call(null,((function (seq__2896_3026,chunk__2897_3027,count__2898_3028,i__2899_3029,seq__2889_3019,chunk__2890_3020,count__2891_3021,i__2892_3022,seq__2853_2915,chunk__2854_2916,count__2855_2917,i__2856_2918,map__2900_3030,map__2900_3031__$1,gline_3032,gcol_3033,name_3034,vec__2893_3023,column_3024,column_info_3025,vec__2886_3016,line_3017,columns_3018,seq__2853_3010__$1,temp__5735__auto___3009,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_3033], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3017,new cljs.core.Keyword(null,"col","col",-1959363084),column_3024,new cljs.core.Keyword(null,"name","name",1843675177),name_3034], null));
});})(seq__2896_3026,chunk__2897_3027,count__2898_3028,i__2899_3029,seq__2889_3019,chunk__2890_3020,count__2891_3021,i__2892_3022,seq__2853_2915,chunk__2854_2916,count__2855_2917,i__2856_2918,map__2900_3030,map__2900_3031__$1,gline_3032,gcol_3033,name_3034,vec__2893_3023,column_3024,column_info_3025,vec__2886_3016,line_3017,columns_3018,seq__2853_3010__$1,temp__5735__auto___3009,inverted))
,cljs.core.sorted_map.call(null)));


var G__3035 = seq__2896_3026;
var G__3036 = chunk__2897_3027;
var G__3037 = count__2898_3028;
var G__3038 = (i__2899_3029 + (1));
seq__2896_3026 = G__3035;
chunk__2897_3027 = G__3036;
count__2898_3028 = G__3037;
i__2899_3029 = G__3038;
continue;
} else {
var temp__5735__auto___3039__$1 = cljs.core.seq.call(null,seq__2896_3026);
if(temp__5735__auto___3039__$1){
var seq__2896_3040__$1 = temp__5735__auto___3039__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2896_3040__$1)){
var c__4461__auto___3041 = cljs.core.chunk_first.call(null,seq__2896_3040__$1);
var G__3042 = cljs.core.chunk_rest.call(null,seq__2896_3040__$1);
var G__3043 = c__4461__auto___3041;
var G__3044 = cljs.core.count.call(null,c__4461__auto___3041);
var G__3045 = (0);
seq__2896_3026 = G__3042;
chunk__2897_3027 = G__3043;
count__2898_3028 = G__3044;
i__2899_3029 = G__3045;
continue;
} else {
var map__2902_3046 = cljs.core.first.call(null,seq__2896_3040__$1);
var map__2902_3047__$1 = (((((!((map__2902_3046 == null))))?(((((map__2902_3046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2902_3046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2902_3046):map__2902_3046);
var gline_3048 = cljs.core.get.call(null,map__2902_3047__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3049 = cljs.core.get.call(null,map__2902_3047__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3050 = cljs.core.get.call(null,map__2902_3047__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3048], null),cljs.core.fnil.call(null,((function (seq__2896_3026,chunk__2897_3027,count__2898_3028,i__2899_3029,seq__2889_3019,chunk__2890_3020,count__2891_3021,i__2892_3022,seq__2853_2915,chunk__2854_2916,count__2855_2917,i__2856_2918,map__2902_3046,map__2902_3047__$1,gline_3048,gcol_3049,name_3050,seq__2896_3040__$1,temp__5735__auto___3039__$1,vec__2893_3023,column_3024,column_info_3025,vec__2886_3016,line_3017,columns_3018,seq__2853_3010__$1,temp__5735__auto___3009,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_3049], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3017,new cljs.core.Keyword(null,"col","col",-1959363084),column_3024,new cljs.core.Keyword(null,"name","name",1843675177),name_3050], null));
});})(seq__2896_3026,chunk__2897_3027,count__2898_3028,i__2899_3029,seq__2889_3019,chunk__2890_3020,count__2891_3021,i__2892_3022,seq__2853_2915,chunk__2854_2916,count__2855_2917,i__2856_2918,map__2902_3046,map__2902_3047__$1,gline_3048,gcol_3049,name_3050,seq__2896_3040__$1,temp__5735__auto___3039__$1,vec__2893_3023,column_3024,column_info_3025,vec__2886_3016,line_3017,columns_3018,seq__2853_3010__$1,temp__5735__auto___3009,inverted))
,cljs.core.sorted_map.call(null)));


var G__3051 = cljs.core.next.call(null,seq__2896_3040__$1);
var G__3052 = null;
var G__3053 = (0);
var G__3054 = (0);
seq__2896_3026 = G__3051;
chunk__2897_3027 = G__3052;
count__2898_3028 = G__3053;
i__2899_3029 = G__3054;
continue;
}
} else {
}
}
break;
}


var G__3055 = seq__2889_3019;
var G__3056 = chunk__2890_3020;
var G__3057 = count__2891_3021;
var G__3058 = (i__2892_3022 + (1));
seq__2889_3019 = G__3055;
chunk__2890_3020 = G__3056;
count__2891_3021 = G__3057;
i__2892_3022 = G__3058;
continue;
} else {
var temp__5735__auto___3059__$1 = cljs.core.seq.call(null,seq__2889_3019);
if(temp__5735__auto___3059__$1){
var seq__2889_3060__$1 = temp__5735__auto___3059__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2889_3060__$1)){
var c__4461__auto___3061 = cljs.core.chunk_first.call(null,seq__2889_3060__$1);
var G__3062 = cljs.core.chunk_rest.call(null,seq__2889_3060__$1);
var G__3063 = c__4461__auto___3061;
var G__3064 = cljs.core.count.call(null,c__4461__auto___3061);
var G__3065 = (0);
seq__2889_3019 = G__3062;
chunk__2890_3020 = G__3063;
count__2891_3021 = G__3064;
i__2892_3022 = G__3065;
continue;
} else {
var vec__2904_3066 = cljs.core.first.call(null,seq__2889_3060__$1);
var column_3067 = cljs.core.nth.call(null,vec__2904_3066,(0),null);
var column_info_3068 = cljs.core.nth.call(null,vec__2904_3066,(1),null);
var seq__2907_3069 = cljs.core.seq.call(null,column_info_3068);
var chunk__2908_3070 = null;
var count__2909_3071 = (0);
var i__2910_3072 = (0);
while(true){
if((i__2910_3072 < count__2909_3071)){
var map__2911_3073 = cljs.core._nth.call(null,chunk__2908_3070,i__2910_3072);
var map__2911_3074__$1 = (((((!((map__2911_3073 == null))))?(((((map__2911_3073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2911_3073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2911_3073):map__2911_3073);
var gline_3075 = cljs.core.get.call(null,map__2911_3074__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3076 = cljs.core.get.call(null,map__2911_3074__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3077 = cljs.core.get.call(null,map__2911_3074__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3075], null),cljs.core.fnil.call(null,((function (seq__2907_3069,chunk__2908_3070,count__2909_3071,i__2910_3072,seq__2889_3019,chunk__2890_3020,count__2891_3021,i__2892_3022,seq__2853_2915,chunk__2854_2916,count__2855_2917,i__2856_2918,map__2911_3073,map__2911_3074__$1,gline_3075,gcol_3076,name_3077,vec__2904_3066,column_3067,column_info_3068,seq__2889_3060__$1,temp__5735__auto___3059__$1,vec__2886_3016,line_3017,columns_3018,seq__2853_3010__$1,temp__5735__auto___3009,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_3076], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3017,new cljs.core.Keyword(null,"col","col",-1959363084),column_3067,new cljs.core.Keyword(null,"name","name",1843675177),name_3077], null));
});})(seq__2907_3069,chunk__2908_3070,count__2909_3071,i__2910_3072,seq__2889_3019,chunk__2890_3020,count__2891_3021,i__2892_3022,seq__2853_2915,chunk__2854_2916,count__2855_2917,i__2856_2918,map__2911_3073,map__2911_3074__$1,gline_3075,gcol_3076,name_3077,vec__2904_3066,column_3067,column_info_3068,seq__2889_3060__$1,temp__5735__auto___3059__$1,vec__2886_3016,line_3017,columns_3018,seq__2853_3010__$1,temp__5735__auto___3009,inverted))
,cljs.core.sorted_map.call(null)));


var G__3078 = seq__2907_3069;
var G__3079 = chunk__2908_3070;
var G__3080 = count__2909_3071;
var G__3081 = (i__2910_3072 + (1));
seq__2907_3069 = G__3078;
chunk__2908_3070 = G__3079;
count__2909_3071 = G__3080;
i__2910_3072 = G__3081;
continue;
} else {
var temp__5735__auto___3082__$2 = cljs.core.seq.call(null,seq__2907_3069);
if(temp__5735__auto___3082__$2){
var seq__2907_3083__$1 = temp__5735__auto___3082__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2907_3083__$1)){
var c__4461__auto___3084 = cljs.core.chunk_first.call(null,seq__2907_3083__$1);
var G__3085 = cljs.core.chunk_rest.call(null,seq__2907_3083__$1);
var G__3086 = c__4461__auto___3084;
var G__3087 = cljs.core.count.call(null,c__4461__auto___3084);
var G__3088 = (0);
seq__2907_3069 = G__3085;
chunk__2908_3070 = G__3086;
count__2909_3071 = G__3087;
i__2910_3072 = G__3088;
continue;
} else {
var map__2913_3089 = cljs.core.first.call(null,seq__2907_3083__$1);
var map__2913_3090__$1 = (((((!((map__2913_3089 == null))))?(((((map__2913_3089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2913_3089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2913_3089):map__2913_3089);
var gline_3091 = cljs.core.get.call(null,map__2913_3090__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3092 = cljs.core.get.call(null,map__2913_3090__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3093 = cljs.core.get.call(null,map__2913_3090__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3091], null),cljs.core.fnil.call(null,((function (seq__2907_3069,chunk__2908_3070,count__2909_3071,i__2910_3072,seq__2889_3019,chunk__2890_3020,count__2891_3021,i__2892_3022,seq__2853_2915,chunk__2854_2916,count__2855_2917,i__2856_2918,map__2913_3089,map__2913_3090__$1,gline_3091,gcol_3092,name_3093,seq__2907_3083__$1,temp__5735__auto___3082__$2,vec__2904_3066,column_3067,column_info_3068,seq__2889_3060__$1,temp__5735__auto___3059__$1,vec__2886_3016,line_3017,columns_3018,seq__2853_3010__$1,temp__5735__auto___3009,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_3092], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3017,new cljs.core.Keyword(null,"col","col",-1959363084),column_3067,new cljs.core.Keyword(null,"name","name",1843675177),name_3093], null));
});})(seq__2907_3069,chunk__2908_3070,count__2909_3071,i__2910_3072,seq__2889_3019,chunk__2890_3020,count__2891_3021,i__2892_3022,seq__2853_2915,chunk__2854_2916,count__2855_2917,i__2856_2918,map__2913_3089,map__2913_3090__$1,gline_3091,gcol_3092,name_3093,seq__2907_3083__$1,temp__5735__auto___3082__$2,vec__2904_3066,column_3067,column_info_3068,seq__2889_3060__$1,temp__5735__auto___3059__$1,vec__2886_3016,line_3017,columns_3018,seq__2853_3010__$1,temp__5735__auto___3009,inverted))
,cljs.core.sorted_map.call(null)));


var G__3094 = cljs.core.next.call(null,seq__2907_3083__$1);
var G__3095 = null;
var G__3096 = (0);
var G__3097 = (0);
seq__2907_3069 = G__3094;
chunk__2908_3070 = G__3095;
count__2909_3071 = G__3096;
i__2910_3072 = G__3097;
continue;
}
} else {
}
}
break;
}


var G__3098 = cljs.core.next.call(null,seq__2889_3060__$1);
var G__3099 = null;
var G__3100 = (0);
var G__3101 = (0);
seq__2889_3019 = G__3098;
chunk__2890_3020 = G__3099;
count__2891_3021 = G__3100;
i__2892_3022 = G__3101;
continue;
}
} else {
}
}
break;
}


var G__3102 = cljs.core.next.call(null,seq__2853_3010__$1);
var G__3103 = null;
var G__3104 = (0);
var G__3105 = (0);
seq__2853_2915 = G__3102;
chunk__2854_2916 = G__3103;
count__2855_2917 = G__3104;
i__2856_2918 = G__3105;
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
