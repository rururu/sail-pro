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
return cljs.core.reduce.call(null,(function (m,p__4450){
var vec__4451 = p__4450;
var i = cljs.core.nth.call(null,vec__4451,(0),null);
var v = cljs.core.nth.call(null,vec__4451,(1),null);
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
var vec__4454 = seg;
var gcol = cljs.core.nth.call(null,vec__4454,(0),null);
var source = cljs.core.nth.call(null,vec__4454,(1),null);
var line = cljs.core.nth.call(null,vec__4454,(2),null);
var col = cljs.core.nth.call(null,vec__4454,(3),null);
var name = cljs.core.nth.call(null,vec__4454,(4),null);
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
var vec__4457 = seg;
var gcol = cljs.core.nth.call(null,vec__4457,(0),null);
var source = cljs.core.nth.call(null,vec__4457,(1),null);
var line = cljs.core.nth.call(null,vec__4457,(2),null);
var col = cljs.core.nth.call(null,vec__4457,(3),null);
var name = cljs.core.nth.call(null,vec__4457,(4),null);
var vec__4460 = relseg;
var rgcol = cljs.core.nth.call(null,vec__4460,(0),null);
var rsource = cljs.core.nth.call(null,vec__4460,(1),null);
var rline = cljs.core.nth.call(null,vec__4460,(2),null);
var rcol = cljs.core.nth.call(null,vec__4460,(3),null);
var rname = cljs.core.nth.call(null,vec__4460,(4),null);
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
var map__4463 = segmap;
var map__4463__$1 = (((((!((map__4463 == null))))?(((((map__4463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4463):map__4463);
var gcol = cljs.core.get.call(null,map__4463__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__4463__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__4463__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__4463__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__4463__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__4463,map__4463__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__4463,map__4463__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__4463,map__4463__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__4463,map__4463__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__4463,map__4463__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__4463,map__4463__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__4466 = arguments.length;
switch (G__4466) {
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
var vec__4467 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__4471 = cljs.core.next.call(null,segs__$1);
var G__4472 = nrelseg;
var G__4473 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__4471;
relseg__$1 = G__4472;
result__$1 = G__4473;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__4467,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__4467,(1),null);
var G__4474 = (gline + (1));
var G__4475 = cljs.core.next.call(null,lines__$1);
var G__4476 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__4477 = result__$1;
gline = G__4474;
lines__$1 = G__4475;
relseg = G__4476;
result = G__4477;
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
var map__4479 = segmap;
var map__4479__$1 = (((((!((map__4479 == null))))?(((((map__4479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4479):map__4479);
var gcol = cljs.core.get.call(null,map__4479__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__4479__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__4479__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__4479__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__4479__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__4479,map__4479__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__4479,map__4479__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__4478_SHARP_){
return cljs.core.conj.call(null,p1__4478_SHARP_,d__$1);
});})(map__4479,map__4479__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__4479,map__4479__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__4482 = arguments.length;
switch (G__4482) {
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
var vec__4483 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__4487 = cljs.core.next.call(null,segs__$1);
var G__4488 = nrelseg;
var G__4489 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__4487;
relseg__$1 = G__4488;
result__$1 = G__4489;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__4483,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__4483,(1),null);
var G__4490 = (gline + (1));
var G__4491 = cljs.core.next.call(null,lines__$1);
var G__4492 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__4493 = result__$1;
gline = G__4490;
lines__$1 = G__4491;
relseg = G__4492;
result = G__4493;
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
return (function (p__4494){
var vec__4495 = p__4494;
var _ = cljs.core.nth.call(null,vec__4495,(0),null);
var source = cljs.core.nth.call(null,vec__4495,(1),null);
var line = cljs.core.nth.call(null,vec__4495,(2),null);
var col = cljs.core.nth.call(null,vec__4495,(3),null);
var name = cljs.core.nth.call(null,vec__4495,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__4498){
var vec__4499 = p__4498;
var gcol = cljs.core.nth.call(null,vec__4499,(0),null);
var sidx = cljs.core.nth.call(null,vec__4499,(1),null);
var line = cljs.core.nth.call(null,vec__4499,(2),null);
var col = cljs.core.nth.call(null,vec__4499,(3),null);
var name = cljs.core.nth.call(null,vec__4499,(4),null);
var seg = vec__4499;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__4499,gcol,sidx,line,col,name,seg,relseg){
return (function (p__4502){
var vec__4503 = p__4502;
var _ = cljs.core.nth.call(null,vec__4503,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__4503,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__4503,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__4503,(3),null);
var lname = cljs.core.nth.call(null,vec__4503,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__4499,gcol,sidx,line,col,name,seg,relseg))
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
var seq__4509 = cljs.core.seq.call(null,infos);
var chunk__4510 = null;
var count__4511 = (0);
var i__4512 = (0);
while(true){
if((i__4512 < count__4511)){
var info = cljs.core._nth.call(null,chunk__4510,i__4512);
var segv_4591 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_4592 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_4593 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_4592 > (lc_4593 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__4509,chunk__4510,count__4511,i__4512,segv_4591,gline_4592,lc_4593,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_4592 - (lc_4593 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_4591], null));
});})(seq__4509,chunk__4510,count__4511,i__4512,segv_4591,gline_4592,lc_4593,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__4509,chunk__4510,count__4511,i__4512,segv_4591,gline_4592,lc_4593,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4592], null),cljs.core.conj,segv_4591);
});})(seq__4509,chunk__4510,count__4511,i__4512,segv_4591,gline_4592,lc_4593,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__4594 = seq__4509;
var G__4595 = chunk__4510;
var G__4596 = count__4511;
var G__4597 = (i__4512 + (1));
seq__4509 = G__4594;
chunk__4510 = G__4595;
count__4511 = G__4596;
i__4512 = G__4597;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__4509);
if(temp__5735__auto__){
var seq__4509__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4509__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__4509__$1);
var G__4598 = cljs.core.chunk_rest.call(null,seq__4509__$1);
var G__4599 = c__4461__auto__;
var G__4600 = cljs.core.count.call(null,c__4461__auto__);
var G__4601 = (0);
seq__4509 = G__4598;
chunk__4510 = G__4599;
count__4511 = G__4600;
i__4512 = G__4601;
continue;
} else {
var info = cljs.core.first.call(null,seq__4509__$1);
var segv_4602 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_4603 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_4604 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_4603 > (lc_4604 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__4509,chunk__4510,count__4511,i__4512,segv_4602,gline_4603,lc_4604,info,seq__4509__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_4603 - (lc_4604 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_4602], null));
});})(seq__4509,chunk__4510,count__4511,i__4512,segv_4602,gline_4603,lc_4604,info,seq__4509__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__4509,chunk__4510,count__4511,i__4512,segv_4602,gline_4603,lc_4604,info,seq__4509__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4603], null),cljs.core.conj,segv_4602);
});})(seq__4509,chunk__4510,count__4511,i__4512,segv_4602,gline_4603,lc_4604,info,seq__4509__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__4605 = cljs.core.next.call(null,seq__4509__$1);
var G__4606 = null;
var G__4607 = (0);
var G__4608 = (0);
seq__4509 = G__4605;
chunk__4510 = G__4606;
count__4511 = G__4607;
i__4512 = G__4608;
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
var seq__4513_4609 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__4514_4610 = null;
var count__4515_4611 = (0);
var i__4516_4612 = (0);
while(true){
if((i__4516_4612 < count__4515_4611)){
var vec__4517_4613 = cljs.core._nth.call(null,chunk__4514_4610,i__4516_4612);
var source_idx_4614 = cljs.core.nth.call(null,vec__4517_4613,(0),null);
var vec__4520_4615 = cljs.core.nth.call(null,vec__4517_4613,(1),null);
var __4616 = cljs.core.nth.call(null,vec__4520_4615,(0),null);
var lines_4617__$1 = cljs.core.nth.call(null,vec__4520_4615,(1),null);
var seq__4523_4618 = cljs.core.seq.call(null,lines_4617__$1);
var chunk__4524_4619 = null;
var count__4525_4620 = (0);
var i__4526_4621 = (0);
while(true){
if((i__4526_4621 < count__4525_4620)){
var vec__4527_4622 = cljs.core._nth.call(null,chunk__4524_4619,i__4526_4621);
var line_4623 = cljs.core.nth.call(null,vec__4527_4622,(0),null);
var cols_4624 = cljs.core.nth.call(null,vec__4527_4622,(1),null);
var seq__4530_4625 = cljs.core.seq.call(null,cols_4624);
var chunk__4531_4626 = null;
var count__4532_4627 = (0);
var i__4533_4628 = (0);
while(true){
if((i__4533_4628 < count__4532_4627)){
var vec__4534_4629 = cljs.core._nth.call(null,chunk__4531_4626,i__4533_4628);
var col_4630 = cljs.core.nth.call(null,vec__4534_4629,(0),null);
var infos_4631 = cljs.core.nth.call(null,vec__4534_4629,(1),null);
encode_cols.call(null,infos_4631,source_idx_4614,line_4623,col_4630);


var G__4632 = seq__4530_4625;
var G__4633 = chunk__4531_4626;
var G__4634 = count__4532_4627;
var G__4635 = (i__4533_4628 + (1));
seq__4530_4625 = G__4632;
chunk__4531_4626 = G__4633;
count__4532_4627 = G__4634;
i__4533_4628 = G__4635;
continue;
} else {
var temp__5735__auto___4636 = cljs.core.seq.call(null,seq__4530_4625);
if(temp__5735__auto___4636){
var seq__4530_4637__$1 = temp__5735__auto___4636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4530_4637__$1)){
var c__4461__auto___4638 = cljs.core.chunk_first.call(null,seq__4530_4637__$1);
var G__4639 = cljs.core.chunk_rest.call(null,seq__4530_4637__$1);
var G__4640 = c__4461__auto___4638;
var G__4641 = cljs.core.count.call(null,c__4461__auto___4638);
var G__4642 = (0);
seq__4530_4625 = G__4639;
chunk__4531_4626 = G__4640;
count__4532_4627 = G__4641;
i__4533_4628 = G__4642;
continue;
} else {
var vec__4537_4643 = cljs.core.first.call(null,seq__4530_4637__$1);
var col_4644 = cljs.core.nth.call(null,vec__4537_4643,(0),null);
var infos_4645 = cljs.core.nth.call(null,vec__4537_4643,(1),null);
encode_cols.call(null,infos_4645,source_idx_4614,line_4623,col_4644);


var G__4646 = cljs.core.next.call(null,seq__4530_4637__$1);
var G__4647 = null;
var G__4648 = (0);
var G__4649 = (0);
seq__4530_4625 = G__4646;
chunk__4531_4626 = G__4647;
count__4532_4627 = G__4648;
i__4533_4628 = G__4649;
continue;
}
} else {
}
}
break;
}


var G__4650 = seq__4523_4618;
var G__4651 = chunk__4524_4619;
var G__4652 = count__4525_4620;
var G__4653 = (i__4526_4621 + (1));
seq__4523_4618 = G__4650;
chunk__4524_4619 = G__4651;
count__4525_4620 = G__4652;
i__4526_4621 = G__4653;
continue;
} else {
var temp__5735__auto___4654 = cljs.core.seq.call(null,seq__4523_4618);
if(temp__5735__auto___4654){
var seq__4523_4655__$1 = temp__5735__auto___4654;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4523_4655__$1)){
var c__4461__auto___4656 = cljs.core.chunk_first.call(null,seq__4523_4655__$1);
var G__4657 = cljs.core.chunk_rest.call(null,seq__4523_4655__$1);
var G__4658 = c__4461__auto___4656;
var G__4659 = cljs.core.count.call(null,c__4461__auto___4656);
var G__4660 = (0);
seq__4523_4618 = G__4657;
chunk__4524_4619 = G__4658;
count__4525_4620 = G__4659;
i__4526_4621 = G__4660;
continue;
} else {
var vec__4540_4661 = cljs.core.first.call(null,seq__4523_4655__$1);
var line_4662 = cljs.core.nth.call(null,vec__4540_4661,(0),null);
var cols_4663 = cljs.core.nth.call(null,vec__4540_4661,(1),null);
var seq__4543_4664 = cljs.core.seq.call(null,cols_4663);
var chunk__4544_4665 = null;
var count__4545_4666 = (0);
var i__4546_4667 = (0);
while(true){
if((i__4546_4667 < count__4545_4666)){
var vec__4547_4668 = cljs.core._nth.call(null,chunk__4544_4665,i__4546_4667);
var col_4669 = cljs.core.nth.call(null,vec__4547_4668,(0),null);
var infos_4670 = cljs.core.nth.call(null,vec__4547_4668,(1),null);
encode_cols.call(null,infos_4670,source_idx_4614,line_4662,col_4669);


var G__4671 = seq__4543_4664;
var G__4672 = chunk__4544_4665;
var G__4673 = count__4545_4666;
var G__4674 = (i__4546_4667 + (1));
seq__4543_4664 = G__4671;
chunk__4544_4665 = G__4672;
count__4545_4666 = G__4673;
i__4546_4667 = G__4674;
continue;
} else {
var temp__5735__auto___4675__$1 = cljs.core.seq.call(null,seq__4543_4664);
if(temp__5735__auto___4675__$1){
var seq__4543_4676__$1 = temp__5735__auto___4675__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4543_4676__$1)){
var c__4461__auto___4677 = cljs.core.chunk_first.call(null,seq__4543_4676__$1);
var G__4678 = cljs.core.chunk_rest.call(null,seq__4543_4676__$1);
var G__4679 = c__4461__auto___4677;
var G__4680 = cljs.core.count.call(null,c__4461__auto___4677);
var G__4681 = (0);
seq__4543_4664 = G__4678;
chunk__4544_4665 = G__4679;
count__4545_4666 = G__4680;
i__4546_4667 = G__4681;
continue;
} else {
var vec__4550_4682 = cljs.core.first.call(null,seq__4543_4676__$1);
var col_4683 = cljs.core.nth.call(null,vec__4550_4682,(0),null);
var infos_4684 = cljs.core.nth.call(null,vec__4550_4682,(1),null);
encode_cols.call(null,infos_4684,source_idx_4614,line_4662,col_4683);


var G__4685 = cljs.core.next.call(null,seq__4543_4676__$1);
var G__4686 = null;
var G__4687 = (0);
var G__4688 = (0);
seq__4543_4664 = G__4685;
chunk__4544_4665 = G__4686;
count__4545_4666 = G__4687;
i__4546_4667 = G__4688;
continue;
}
} else {
}
}
break;
}


var G__4689 = cljs.core.next.call(null,seq__4523_4655__$1);
var G__4690 = null;
var G__4691 = (0);
var G__4692 = (0);
seq__4523_4618 = G__4689;
chunk__4524_4619 = G__4690;
count__4525_4620 = G__4691;
i__4526_4621 = G__4692;
continue;
}
} else {
}
}
break;
}


var G__4693 = seq__4513_4609;
var G__4694 = chunk__4514_4610;
var G__4695 = count__4515_4611;
var G__4696 = (i__4516_4612 + (1));
seq__4513_4609 = G__4693;
chunk__4514_4610 = G__4694;
count__4515_4611 = G__4695;
i__4516_4612 = G__4696;
continue;
} else {
var temp__5735__auto___4697 = cljs.core.seq.call(null,seq__4513_4609);
if(temp__5735__auto___4697){
var seq__4513_4698__$1 = temp__5735__auto___4697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4513_4698__$1)){
var c__4461__auto___4699 = cljs.core.chunk_first.call(null,seq__4513_4698__$1);
var G__4700 = cljs.core.chunk_rest.call(null,seq__4513_4698__$1);
var G__4701 = c__4461__auto___4699;
var G__4702 = cljs.core.count.call(null,c__4461__auto___4699);
var G__4703 = (0);
seq__4513_4609 = G__4700;
chunk__4514_4610 = G__4701;
count__4515_4611 = G__4702;
i__4516_4612 = G__4703;
continue;
} else {
var vec__4553_4704 = cljs.core.first.call(null,seq__4513_4698__$1);
var source_idx_4705 = cljs.core.nth.call(null,vec__4553_4704,(0),null);
var vec__4556_4706 = cljs.core.nth.call(null,vec__4553_4704,(1),null);
var __4707 = cljs.core.nth.call(null,vec__4556_4706,(0),null);
var lines_4708__$1 = cljs.core.nth.call(null,vec__4556_4706,(1),null);
var seq__4559_4709 = cljs.core.seq.call(null,lines_4708__$1);
var chunk__4560_4710 = null;
var count__4561_4711 = (0);
var i__4562_4712 = (0);
while(true){
if((i__4562_4712 < count__4561_4711)){
var vec__4563_4713 = cljs.core._nth.call(null,chunk__4560_4710,i__4562_4712);
var line_4714 = cljs.core.nth.call(null,vec__4563_4713,(0),null);
var cols_4715 = cljs.core.nth.call(null,vec__4563_4713,(1),null);
var seq__4566_4716 = cljs.core.seq.call(null,cols_4715);
var chunk__4567_4717 = null;
var count__4568_4718 = (0);
var i__4569_4719 = (0);
while(true){
if((i__4569_4719 < count__4568_4718)){
var vec__4570_4720 = cljs.core._nth.call(null,chunk__4567_4717,i__4569_4719);
var col_4721 = cljs.core.nth.call(null,vec__4570_4720,(0),null);
var infos_4722 = cljs.core.nth.call(null,vec__4570_4720,(1),null);
encode_cols.call(null,infos_4722,source_idx_4705,line_4714,col_4721);


var G__4723 = seq__4566_4716;
var G__4724 = chunk__4567_4717;
var G__4725 = count__4568_4718;
var G__4726 = (i__4569_4719 + (1));
seq__4566_4716 = G__4723;
chunk__4567_4717 = G__4724;
count__4568_4718 = G__4725;
i__4569_4719 = G__4726;
continue;
} else {
var temp__5735__auto___4727__$1 = cljs.core.seq.call(null,seq__4566_4716);
if(temp__5735__auto___4727__$1){
var seq__4566_4728__$1 = temp__5735__auto___4727__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4566_4728__$1)){
var c__4461__auto___4729 = cljs.core.chunk_first.call(null,seq__4566_4728__$1);
var G__4730 = cljs.core.chunk_rest.call(null,seq__4566_4728__$1);
var G__4731 = c__4461__auto___4729;
var G__4732 = cljs.core.count.call(null,c__4461__auto___4729);
var G__4733 = (0);
seq__4566_4716 = G__4730;
chunk__4567_4717 = G__4731;
count__4568_4718 = G__4732;
i__4569_4719 = G__4733;
continue;
} else {
var vec__4573_4734 = cljs.core.first.call(null,seq__4566_4728__$1);
var col_4735 = cljs.core.nth.call(null,vec__4573_4734,(0),null);
var infos_4736 = cljs.core.nth.call(null,vec__4573_4734,(1),null);
encode_cols.call(null,infos_4736,source_idx_4705,line_4714,col_4735);


var G__4737 = cljs.core.next.call(null,seq__4566_4728__$1);
var G__4738 = null;
var G__4739 = (0);
var G__4740 = (0);
seq__4566_4716 = G__4737;
chunk__4567_4717 = G__4738;
count__4568_4718 = G__4739;
i__4569_4719 = G__4740;
continue;
}
} else {
}
}
break;
}


var G__4741 = seq__4559_4709;
var G__4742 = chunk__4560_4710;
var G__4743 = count__4561_4711;
var G__4744 = (i__4562_4712 + (1));
seq__4559_4709 = G__4741;
chunk__4560_4710 = G__4742;
count__4561_4711 = G__4743;
i__4562_4712 = G__4744;
continue;
} else {
var temp__5735__auto___4745__$1 = cljs.core.seq.call(null,seq__4559_4709);
if(temp__5735__auto___4745__$1){
var seq__4559_4746__$1 = temp__5735__auto___4745__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4559_4746__$1)){
var c__4461__auto___4747 = cljs.core.chunk_first.call(null,seq__4559_4746__$1);
var G__4748 = cljs.core.chunk_rest.call(null,seq__4559_4746__$1);
var G__4749 = c__4461__auto___4747;
var G__4750 = cljs.core.count.call(null,c__4461__auto___4747);
var G__4751 = (0);
seq__4559_4709 = G__4748;
chunk__4560_4710 = G__4749;
count__4561_4711 = G__4750;
i__4562_4712 = G__4751;
continue;
} else {
var vec__4576_4752 = cljs.core.first.call(null,seq__4559_4746__$1);
var line_4753 = cljs.core.nth.call(null,vec__4576_4752,(0),null);
var cols_4754 = cljs.core.nth.call(null,vec__4576_4752,(1),null);
var seq__4579_4755 = cljs.core.seq.call(null,cols_4754);
var chunk__4580_4756 = null;
var count__4581_4757 = (0);
var i__4582_4758 = (0);
while(true){
if((i__4582_4758 < count__4581_4757)){
var vec__4583_4759 = cljs.core._nth.call(null,chunk__4580_4756,i__4582_4758);
var col_4760 = cljs.core.nth.call(null,vec__4583_4759,(0),null);
var infos_4761 = cljs.core.nth.call(null,vec__4583_4759,(1),null);
encode_cols.call(null,infos_4761,source_idx_4705,line_4753,col_4760);


var G__4762 = seq__4579_4755;
var G__4763 = chunk__4580_4756;
var G__4764 = count__4581_4757;
var G__4765 = (i__4582_4758 + (1));
seq__4579_4755 = G__4762;
chunk__4580_4756 = G__4763;
count__4581_4757 = G__4764;
i__4582_4758 = G__4765;
continue;
} else {
var temp__5735__auto___4766__$2 = cljs.core.seq.call(null,seq__4579_4755);
if(temp__5735__auto___4766__$2){
var seq__4579_4767__$1 = temp__5735__auto___4766__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4579_4767__$1)){
var c__4461__auto___4768 = cljs.core.chunk_first.call(null,seq__4579_4767__$1);
var G__4769 = cljs.core.chunk_rest.call(null,seq__4579_4767__$1);
var G__4770 = c__4461__auto___4768;
var G__4771 = cljs.core.count.call(null,c__4461__auto___4768);
var G__4772 = (0);
seq__4579_4755 = G__4769;
chunk__4580_4756 = G__4770;
count__4581_4757 = G__4771;
i__4582_4758 = G__4772;
continue;
} else {
var vec__4586_4773 = cljs.core.first.call(null,seq__4579_4767__$1);
var col_4774 = cljs.core.nth.call(null,vec__4586_4773,(0),null);
var infos_4775 = cljs.core.nth.call(null,vec__4586_4773,(1),null);
encode_cols.call(null,infos_4775,source_idx_4705,line_4753,col_4774);


var G__4776 = cljs.core.next.call(null,seq__4579_4767__$1);
var G__4777 = null;
var G__4778 = (0);
var G__4779 = (0);
seq__4579_4755 = G__4776;
chunk__4580_4756 = G__4777;
count__4581_4757 = G__4778;
i__4582_4758 = G__4779;
continue;
}
} else {
}
}
break;
}


var G__4780 = cljs.core.next.call(null,seq__4559_4746__$1);
var G__4781 = null;
var G__4782 = (0);
var G__4783 = (0);
seq__4559_4709 = G__4780;
chunk__4560_4710 = G__4781;
count__4561_4711 = G__4782;
i__4562_4712 = G__4783;
continue;
}
} else {
}
}
break;
}


var G__4784 = cljs.core.next.call(null,seq__4513_4698__$1);
var G__4785 = null;
var G__4786 = (0);
var G__4787 = (0);
seq__4513_4609 = G__4784;
chunk__4514_4610 = G__4785;
count__4515_4611 = G__4786;
i__4516_4612 = G__4787;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__4589 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__4506_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__4506_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__4507_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__4507_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__4508_SHARP_){
return clojure.string.join.call(null,",",p1__4508_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__4590 = G__4589;
goog.object.set(G__4590,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__4590;
} else {
return G__4589;
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
var vec__4788 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__4788,(0),null);
var col_map = cljs.core.nth.call(null,vec__4788,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__4791 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__4791,(0),null);
var infos = cljs.core.nth.call(null,vec__4791,(1),null);
var G__4797 = cljs.core.next.call(null,col_map_seq);
var G__4798 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__4791,col,infos,vec__4788,line,col_map){
return (function (v,p__4794){
var map__4795 = p__4794;
var map__4795__$1 = (((((!((map__4795 == null))))?(((((map__4795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4795):map__4795);
var gline = cljs.core.get.call(null,map__4795__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__4795__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__4791,col,infos,vec__4788,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__4797;
new_cols = G__4798;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__4799 = cljs.core.next.call(null,line_map_seq);
var G__4800 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__4799;
new_lines = G__4800;
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
var seq__4801_4863 = cljs.core.seq.call(null,reverse_map);
var chunk__4802_4864 = null;
var count__4803_4865 = (0);
var i__4804_4866 = (0);
while(true){
if((i__4804_4866 < count__4803_4865)){
var vec__4805_4867 = cljs.core._nth.call(null,chunk__4802_4864,i__4804_4866);
var line_4868 = cljs.core.nth.call(null,vec__4805_4867,(0),null);
var columns_4869 = cljs.core.nth.call(null,vec__4805_4867,(1),null);
var seq__4808_4870 = cljs.core.seq.call(null,columns_4869);
var chunk__4809_4871 = null;
var count__4810_4872 = (0);
var i__4811_4873 = (0);
while(true){
if((i__4811_4873 < count__4810_4872)){
var vec__4812_4874 = cljs.core._nth.call(null,chunk__4809_4871,i__4811_4873);
var column_4875 = cljs.core.nth.call(null,vec__4812_4874,(0),null);
var column_info_4876 = cljs.core.nth.call(null,vec__4812_4874,(1),null);
var seq__4815_4877 = cljs.core.seq.call(null,column_info_4876);
var chunk__4816_4878 = null;
var count__4817_4879 = (0);
var i__4818_4880 = (0);
while(true){
if((i__4818_4880 < count__4817_4879)){
var map__4819_4881 = cljs.core._nth.call(null,chunk__4816_4878,i__4818_4880);
var map__4819_4882__$1 = (((((!((map__4819_4881 == null))))?(((((map__4819_4881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4819_4881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4819_4881):map__4819_4881);
var gline_4883 = cljs.core.get.call(null,map__4819_4882__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_4884 = cljs.core.get.call(null,map__4819_4882__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_4885 = cljs.core.get.call(null,map__4819_4882__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4883], null),cljs.core.fnil.call(null,((function (seq__4815_4877,chunk__4816_4878,count__4817_4879,i__4818_4880,seq__4808_4870,chunk__4809_4871,count__4810_4872,i__4811_4873,seq__4801_4863,chunk__4802_4864,count__4803_4865,i__4804_4866,map__4819_4881,map__4819_4882__$1,gline_4883,gcol_4884,name_4885,vec__4812_4874,column_4875,column_info_4876,vec__4805_4867,line_4868,columns_4869,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_4884], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_4868,new cljs.core.Keyword(null,"col","col",-1959363084),column_4875,new cljs.core.Keyword(null,"name","name",1843675177),name_4885], null));
});})(seq__4815_4877,chunk__4816_4878,count__4817_4879,i__4818_4880,seq__4808_4870,chunk__4809_4871,count__4810_4872,i__4811_4873,seq__4801_4863,chunk__4802_4864,count__4803_4865,i__4804_4866,map__4819_4881,map__4819_4882__$1,gline_4883,gcol_4884,name_4885,vec__4812_4874,column_4875,column_info_4876,vec__4805_4867,line_4868,columns_4869,inverted))
,cljs.core.sorted_map.call(null)));


var G__4886 = seq__4815_4877;
var G__4887 = chunk__4816_4878;
var G__4888 = count__4817_4879;
var G__4889 = (i__4818_4880 + (1));
seq__4815_4877 = G__4886;
chunk__4816_4878 = G__4887;
count__4817_4879 = G__4888;
i__4818_4880 = G__4889;
continue;
} else {
var temp__5735__auto___4890 = cljs.core.seq.call(null,seq__4815_4877);
if(temp__5735__auto___4890){
var seq__4815_4891__$1 = temp__5735__auto___4890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4815_4891__$1)){
var c__4461__auto___4892 = cljs.core.chunk_first.call(null,seq__4815_4891__$1);
var G__4893 = cljs.core.chunk_rest.call(null,seq__4815_4891__$1);
var G__4894 = c__4461__auto___4892;
var G__4895 = cljs.core.count.call(null,c__4461__auto___4892);
var G__4896 = (0);
seq__4815_4877 = G__4893;
chunk__4816_4878 = G__4894;
count__4817_4879 = G__4895;
i__4818_4880 = G__4896;
continue;
} else {
var map__4821_4897 = cljs.core.first.call(null,seq__4815_4891__$1);
var map__4821_4898__$1 = (((((!((map__4821_4897 == null))))?(((((map__4821_4897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4821_4897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4821_4897):map__4821_4897);
var gline_4899 = cljs.core.get.call(null,map__4821_4898__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_4900 = cljs.core.get.call(null,map__4821_4898__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_4901 = cljs.core.get.call(null,map__4821_4898__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4899], null),cljs.core.fnil.call(null,((function (seq__4815_4877,chunk__4816_4878,count__4817_4879,i__4818_4880,seq__4808_4870,chunk__4809_4871,count__4810_4872,i__4811_4873,seq__4801_4863,chunk__4802_4864,count__4803_4865,i__4804_4866,map__4821_4897,map__4821_4898__$1,gline_4899,gcol_4900,name_4901,seq__4815_4891__$1,temp__5735__auto___4890,vec__4812_4874,column_4875,column_info_4876,vec__4805_4867,line_4868,columns_4869,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_4900], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_4868,new cljs.core.Keyword(null,"col","col",-1959363084),column_4875,new cljs.core.Keyword(null,"name","name",1843675177),name_4901], null));
});})(seq__4815_4877,chunk__4816_4878,count__4817_4879,i__4818_4880,seq__4808_4870,chunk__4809_4871,count__4810_4872,i__4811_4873,seq__4801_4863,chunk__4802_4864,count__4803_4865,i__4804_4866,map__4821_4897,map__4821_4898__$1,gline_4899,gcol_4900,name_4901,seq__4815_4891__$1,temp__5735__auto___4890,vec__4812_4874,column_4875,column_info_4876,vec__4805_4867,line_4868,columns_4869,inverted))
,cljs.core.sorted_map.call(null)));


var G__4902 = cljs.core.next.call(null,seq__4815_4891__$1);
var G__4903 = null;
var G__4904 = (0);
var G__4905 = (0);
seq__4815_4877 = G__4902;
chunk__4816_4878 = G__4903;
count__4817_4879 = G__4904;
i__4818_4880 = G__4905;
continue;
}
} else {
}
}
break;
}


var G__4906 = seq__4808_4870;
var G__4907 = chunk__4809_4871;
var G__4908 = count__4810_4872;
var G__4909 = (i__4811_4873 + (1));
seq__4808_4870 = G__4906;
chunk__4809_4871 = G__4907;
count__4810_4872 = G__4908;
i__4811_4873 = G__4909;
continue;
} else {
var temp__5735__auto___4910 = cljs.core.seq.call(null,seq__4808_4870);
if(temp__5735__auto___4910){
var seq__4808_4911__$1 = temp__5735__auto___4910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4808_4911__$1)){
var c__4461__auto___4912 = cljs.core.chunk_first.call(null,seq__4808_4911__$1);
var G__4913 = cljs.core.chunk_rest.call(null,seq__4808_4911__$1);
var G__4914 = c__4461__auto___4912;
var G__4915 = cljs.core.count.call(null,c__4461__auto___4912);
var G__4916 = (0);
seq__4808_4870 = G__4913;
chunk__4809_4871 = G__4914;
count__4810_4872 = G__4915;
i__4811_4873 = G__4916;
continue;
} else {
var vec__4823_4917 = cljs.core.first.call(null,seq__4808_4911__$1);
var column_4918 = cljs.core.nth.call(null,vec__4823_4917,(0),null);
var column_info_4919 = cljs.core.nth.call(null,vec__4823_4917,(1),null);
var seq__4826_4920 = cljs.core.seq.call(null,column_info_4919);
var chunk__4827_4921 = null;
var count__4828_4922 = (0);
var i__4829_4923 = (0);
while(true){
if((i__4829_4923 < count__4828_4922)){
var map__4830_4924 = cljs.core._nth.call(null,chunk__4827_4921,i__4829_4923);
var map__4830_4925__$1 = (((((!((map__4830_4924 == null))))?(((((map__4830_4924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4830_4924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4830_4924):map__4830_4924);
var gline_4926 = cljs.core.get.call(null,map__4830_4925__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_4927 = cljs.core.get.call(null,map__4830_4925__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_4928 = cljs.core.get.call(null,map__4830_4925__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4926], null),cljs.core.fnil.call(null,((function (seq__4826_4920,chunk__4827_4921,count__4828_4922,i__4829_4923,seq__4808_4870,chunk__4809_4871,count__4810_4872,i__4811_4873,seq__4801_4863,chunk__4802_4864,count__4803_4865,i__4804_4866,map__4830_4924,map__4830_4925__$1,gline_4926,gcol_4927,name_4928,vec__4823_4917,column_4918,column_info_4919,seq__4808_4911__$1,temp__5735__auto___4910,vec__4805_4867,line_4868,columns_4869,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_4927], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_4868,new cljs.core.Keyword(null,"col","col",-1959363084),column_4918,new cljs.core.Keyword(null,"name","name",1843675177),name_4928], null));
});})(seq__4826_4920,chunk__4827_4921,count__4828_4922,i__4829_4923,seq__4808_4870,chunk__4809_4871,count__4810_4872,i__4811_4873,seq__4801_4863,chunk__4802_4864,count__4803_4865,i__4804_4866,map__4830_4924,map__4830_4925__$1,gline_4926,gcol_4927,name_4928,vec__4823_4917,column_4918,column_info_4919,seq__4808_4911__$1,temp__5735__auto___4910,vec__4805_4867,line_4868,columns_4869,inverted))
,cljs.core.sorted_map.call(null)));


var G__4929 = seq__4826_4920;
var G__4930 = chunk__4827_4921;
var G__4931 = count__4828_4922;
var G__4932 = (i__4829_4923 + (1));
seq__4826_4920 = G__4929;
chunk__4827_4921 = G__4930;
count__4828_4922 = G__4931;
i__4829_4923 = G__4932;
continue;
} else {
var temp__5735__auto___4933__$1 = cljs.core.seq.call(null,seq__4826_4920);
if(temp__5735__auto___4933__$1){
var seq__4826_4934__$1 = temp__5735__auto___4933__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4826_4934__$1)){
var c__4461__auto___4935 = cljs.core.chunk_first.call(null,seq__4826_4934__$1);
var G__4936 = cljs.core.chunk_rest.call(null,seq__4826_4934__$1);
var G__4937 = c__4461__auto___4935;
var G__4938 = cljs.core.count.call(null,c__4461__auto___4935);
var G__4939 = (0);
seq__4826_4920 = G__4936;
chunk__4827_4921 = G__4937;
count__4828_4922 = G__4938;
i__4829_4923 = G__4939;
continue;
} else {
var map__4832_4940 = cljs.core.first.call(null,seq__4826_4934__$1);
var map__4832_4941__$1 = (((((!((map__4832_4940 == null))))?(((((map__4832_4940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4832_4940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4832_4940):map__4832_4940);
var gline_4942 = cljs.core.get.call(null,map__4832_4941__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_4943 = cljs.core.get.call(null,map__4832_4941__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_4944 = cljs.core.get.call(null,map__4832_4941__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4942], null),cljs.core.fnil.call(null,((function (seq__4826_4920,chunk__4827_4921,count__4828_4922,i__4829_4923,seq__4808_4870,chunk__4809_4871,count__4810_4872,i__4811_4873,seq__4801_4863,chunk__4802_4864,count__4803_4865,i__4804_4866,map__4832_4940,map__4832_4941__$1,gline_4942,gcol_4943,name_4944,seq__4826_4934__$1,temp__5735__auto___4933__$1,vec__4823_4917,column_4918,column_info_4919,seq__4808_4911__$1,temp__5735__auto___4910,vec__4805_4867,line_4868,columns_4869,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_4943], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_4868,new cljs.core.Keyword(null,"col","col",-1959363084),column_4918,new cljs.core.Keyword(null,"name","name",1843675177),name_4944], null));
});})(seq__4826_4920,chunk__4827_4921,count__4828_4922,i__4829_4923,seq__4808_4870,chunk__4809_4871,count__4810_4872,i__4811_4873,seq__4801_4863,chunk__4802_4864,count__4803_4865,i__4804_4866,map__4832_4940,map__4832_4941__$1,gline_4942,gcol_4943,name_4944,seq__4826_4934__$1,temp__5735__auto___4933__$1,vec__4823_4917,column_4918,column_info_4919,seq__4808_4911__$1,temp__5735__auto___4910,vec__4805_4867,line_4868,columns_4869,inverted))
,cljs.core.sorted_map.call(null)));


var G__4945 = cljs.core.next.call(null,seq__4826_4934__$1);
var G__4946 = null;
var G__4947 = (0);
var G__4948 = (0);
seq__4826_4920 = G__4945;
chunk__4827_4921 = G__4946;
count__4828_4922 = G__4947;
i__4829_4923 = G__4948;
continue;
}
} else {
}
}
break;
}


var G__4949 = cljs.core.next.call(null,seq__4808_4911__$1);
var G__4950 = null;
var G__4951 = (0);
var G__4952 = (0);
seq__4808_4870 = G__4949;
chunk__4809_4871 = G__4950;
count__4810_4872 = G__4951;
i__4811_4873 = G__4952;
continue;
}
} else {
}
}
break;
}


var G__4953 = seq__4801_4863;
var G__4954 = chunk__4802_4864;
var G__4955 = count__4803_4865;
var G__4956 = (i__4804_4866 + (1));
seq__4801_4863 = G__4953;
chunk__4802_4864 = G__4954;
count__4803_4865 = G__4955;
i__4804_4866 = G__4956;
continue;
} else {
var temp__5735__auto___4957 = cljs.core.seq.call(null,seq__4801_4863);
if(temp__5735__auto___4957){
var seq__4801_4958__$1 = temp__5735__auto___4957;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4801_4958__$1)){
var c__4461__auto___4959 = cljs.core.chunk_first.call(null,seq__4801_4958__$1);
var G__4960 = cljs.core.chunk_rest.call(null,seq__4801_4958__$1);
var G__4961 = c__4461__auto___4959;
var G__4962 = cljs.core.count.call(null,c__4461__auto___4959);
var G__4963 = (0);
seq__4801_4863 = G__4960;
chunk__4802_4864 = G__4961;
count__4803_4865 = G__4962;
i__4804_4866 = G__4963;
continue;
} else {
var vec__4834_4964 = cljs.core.first.call(null,seq__4801_4958__$1);
var line_4965 = cljs.core.nth.call(null,vec__4834_4964,(0),null);
var columns_4966 = cljs.core.nth.call(null,vec__4834_4964,(1),null);
var seq__4837_4967 = cljs.core.seq.call(null,columns_4966);
var chunk__4838_4968 = null;
var count__4839_4969 = (0);
var i__4840_4970 = (0);
while(true){
if((i__4840_4970 < count__4839_4969)){
var vec__4841_4971 = cljs.core._nth.call(null,chunk__4838_4968,i__4840_4970);
var column_4972 = cljs.core.nth.call(null,vec__4841_4971,(0),null);
var column_info_4973 = cljs.core.nth.call(null,vec__4841_4971,(1),null);
var seq__4844_4974 = cljs.core.seq.call(null,column_info_4973);
var chunk__4845_4975 = null;
var count__4846_4976 = (0);
var i__4847_4977 = (0);
while(true){
if((i__4847_4977 < count__4846_4976)){
var map__4848_4978 = cljs.core._nth.call(null,chunk__4845_4975,i__4847_4977);
var map__4848_4979__$1 = (((((!((map__4848_4978 == null))))?(((((map__4848_4978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4848_4978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4848_4978):map__4848_4978);
var gline_4980 = cljs.core.get.call(null,map__4848_4979__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_4981 = cljs.core.get.call(null,map__4848_4979__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_4982 = cljs.core.get.call(null,map__4848_4979__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4980], null),cljs.core.fnil.call(null,((function (seq__4844_4974,chunk__4845_4975,count__4846_4976,i__4847_4977,seq__4837_4967,chunk__4838_4968,count__4839_4969,i__4840_4970,seq__4801_4863,chunk__4802_4864,count__4803_4865,i__4804_4866,map__4848_4978,map__4848_4979__$1,gline_4980,gcol_4981,name_4982,vec__4841_4971,column_4972,column_info_4973,vec__4834_4964,line_4965,columns_4966,seq__4801_4958__$1,temp__5735__auto___4957,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_4981], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_4965,new cljs.core.Keyword(null,"col","col",-1959363084),column_4972,new cljs.core.Keyword(null,"name","name",1843675177),name_4982], null));
});})(seq__4844_4974,chunk__4845_4975,count__4846_4976,i__4847_4977,seq__4837_4967,chunk__4838_4968,count__4839_4969,i__4840_4970,seq__4801_4863,chunk__4802_4864,count__4803_4865,i__4804_4866,map__4848_4978,map__4848_4979__$1,gline_4980,gcol_4981,name_4982,vec__4841_4971,column_4972,column_info_4973,vec__4834_4964,line_4965,columns_4966,seq__4801_4958__$1,temp__5735__auto___4957,inverted))
,cljs.core.sorted_map.call(null)));


var G__4983 = seq__4844_4974;
var G__4984 = chunk__4845_4975;
var G__4985 = count__4846_4976;
var G__4986 = (i__4847_4977 + (1));
seq__4844_4974 = G__4983;
chunk__4845_4975 = G__4984;
count__4846_4976 = G__4985;
i__4847_4977 = G__4986;
continue;
} else {
var temp__5735__auto___4987__$1 = cljs.core.seq.call(null,seq__4844_4974);
if(temp__5735__auto___4987__$1){
var seq__4844_4988__$1 = temp__5735__auto___4987__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4844_4988__$1)){
var c__4461__auto___4989 = cljs.core.chunk_first.call(null,seq__4844_4988__$1);
var G__4990 = cljs.core.chunk_rest.call(null,seq__4844_4988__$1);
var G__4991 = c__4461__auto___4989;
var G__4992 = cljs.core.count.call(null,c__4461__auto___4989);
var G__4993 = (0);
seq__4844_4974 = G__4990;
chunk__4845_4975 = G__4991;
count__4846_4976 = G__4992;
i__4847_4977 = G__4993;
continue;
} else {
var map__4850_4994 = cljs.core.first.call(null,seq__4844_4988__$1);
var map__4850_4995__$1 = (((((!((map__4850_4994 == null))))?(((((map__4850_4994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4850_4994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4850_4994):map__4850_4994);
var gline_4996 = cljs.core.get.call(null,map__4850_4995__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_4997 = cljs.core.get.call(null,map__4850_4995__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_4998 = cljs.core.get.call(null,map__4850_4995__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4996], null),cljs.core.fnil.call(null,((function (seq__4844_4974,chunk__4845_4975,count__4846_4976,i__4847_4977,seq__4837_4967,chunk__4838_4968,count__4839_4969,i__4840_4970,seq__4801_4863,chunk__4802_4864,count__4803_4865,i__4804_4866,map__4850_4994,map__4850_4995__$1,gline_4996,gcol_4997,name_4998,seq__4844_4988__$1,temp__5735__auto___4987__$1,vec__4841_4971,column_4972,column_info_4973,vec__4834_4964,line_4965,columns_4966,seq__4801_4958__$1,temp__5735__auto___4957,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_4997], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_4965,new cljs.core.Keyword(null,"col","col",-1959363084),column_4972,new cljs.core.Keyword(null,"name","name",1843675177),name_4998], null));
});})(seq__4844_4974,chunk__4845_4975,count__4846_4976,i__4847_4977,seq__4837_4967,chunk__4838_4968,count__4839_4969,i__4840_4970,seq__4801_4863,chunk__4802_4864,count__4803_4865,i__4804_4866,map__4850_4994,map__4850_4995__$1,gline_4996,gcol_4997,name_4998,seq__4844_4988__$1,temp__5735__auto___4987__$1,vec__4841_4971,column_4972,column_info_4973,vec__4834_4964,line_4965,columns_4966,seq__4801_4958__$1,temp__5735__auto___4957,inverted))
,cljs.core.sorted_map.call(null)));


var G__4999 = cljs.core.next.call(null,seq__4844_4988__$1);
var G__5000 = null;
var G__5001 = (0);
var G__5002 = (0);
seq__4844_4974 = G__4999;
chunk__4845_4975 = G__5000;
count__4846_4976 = G__5001;
i__4847_4977 = G__5002;
continue;
}
} else {
}
}
break;
}


var G__5003 = seq__4837_4967;
var G__5004 = chunk__4838_4968;
var G__5005 = count__4839_4969;
var G__5006 = (i__4840_4970 + (1));
seq__4837_4967 = G__5003;
chunk__4838_4968 = G__5004;
count__4839_4969 = G__5005;
i__4840_4970 = G__5006;
continue;
} else {
var temp__5735__auto___5007__$1 = cljs.core.seq.call(null,seq__4837_4967);
if(temp__5735__auto___5007__$1){
var seq__4837_5008__$1 = temp__5735__auto___5007__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4837_5008__$1)){
var c__4461__auto___5009 = cljs.core.chunk_first.call(null,seq__4837_5008__$1);
var G__5010 = cljs.core.chunk_rest.call(null,seq__4837_5008__$1);
var G__5011 = c__4461__auto___5009;
var G__5012 = cljs.core.count.call(null,c__4461__auto___5009);
var G__5013 = (0);
seq__4837_4967 = G__5010;
chunk__4838_4968 = G__5011;
count__4839_4969 = G__5012;
i__4840_4970 = G__5013;
continue;
} else {
var vec__4852_5014 = cljs.core.first.call(null,seq__4837_5008__$1);
var column_5015 = cljs.core.nth.call(null,vec__4852_5014,(0),null);
var column_info_5016 = cljs.core.nth.call(null,vec__4852_5014,(1),null);
var seq__4855_5017 = cljs.core.seq.call(null,column_info_5016);
var chunk__4856_5018 = null;
var count__4857_5019 = (0);
var i__4858_5020 = (0);
while(true){
if((i__4858_5020 < count__4857_5019)){
var map__4859_5021 = cljs.core._nth.call(null,chunk__4856_5018,i__4858_5020);
var map__4859_5022__$1 = (((((!((map__4859_5021 == null))))?(((((map__4859_5021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4859_5021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4859_5021):map__4859_5021);
var gline_5023 = cljs.core.get.call(null,map__4859_5022__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5024 = cljs.core.get.call(null,map__4859_5022__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5025 = cljs.core.get.call(null,map__4859_5022__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5023], null),cljs.core.fnil.call(null,((function (seq__4855_5017,chunk__4856_5018,count__4857_5019,i__4858_5020,seq__4837_4967,chunk__4838_4968,count__4839_4969,i__4840_4970,seq__4801_4863,chunk__4802_4864,count__4803_4865,i__4804_4866,map__4859_5021,map__4859_5022__$1,gline_5023,gcol_5024,name_5025,vec__4852_5014,column_5015,column_info_5016,seq__4837_5008__$1,temp__5735__auto___5007__$1,vec__4834_4964,line_4965,columns_4966,seq__4801_4958__$1,temp__5735__auto___4957,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5024], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_4965,new cljs.core.Keyword(null,"col","col",-1959363084),column_5015,new cljs.core.Keyword(null,"name","name",1843675177),name_5025], null));
});})(seq__4855_5017,chunk__4856_5018,count__4857_5019,i__4858_5020,seq__4837_4967,chunk__4838_4968,count__4839_4969,i__4840_4970,seq__4801_4863,chunk__4802_4864,count__4803_4865,i__4804_4866,map__4859_5021,map__4859_5022__$1,gline_5023,gcol_5024,name_5025,vec__4852_5014,column_5015,column_info_5016,seq__4837_5008__$1,temp__5735__auto___5007__$1,vec__4834_4964,line_4965,columns_4966,seq__4801_4958__$1,temp__5735__auto___4957,inverted))
,cljs.core.sorted_map.call(null)));


var G__5026 = seq__4855_5017;
var G__5027 = chunk__4856_5018;
var G__5028 = count__4857_5019;
var G__5029 = (i__4858_5020 + (1));
seq__4855_5017 = G__5026;
chunk__4856_5018 = G__5027;
count__4857_5019 = G__5028;
i__4858_5020 = G__5029;
continue;
} else {
var temp__5735__auto___5030__$2 = cljs.core.seq.call(null,seq__4855_5017);
if(temp__5735__auto___5030__$2){
var seq__4855_5031__$1 = temp__5735__auto___5030__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4855_5031__$1)){
var c__4461__auto___5032 = cljs.core.chunk_first.call(null,seq__4855_5031__$1);
var G__5033 = cljs.core.chunk_rest.call(null,seq__4855_5031__$1);
var G__5034 = c__4461__auto___5032;
var G__5035 = cljs.core.count.call(null,c__4461__auto___5032);
var G__5036 = (0);
seq__4855_5017 = G__5033;
chunk__4856_5018 = G__5034;
count__4857_5019 = G__5035;
i__4858_5020 = G__5036;
continue;
} else {
var map__4861_5037 = cljs.core.first.call(null,seq__4855_5031__$1);
var map__4861_5038__$1 = (((((!((map__4861_5037 == null))))?(((((map__4861_5037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4861_5037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4861_5037):map__4861_5037);
var gline_5039 = cljs.core.get.call(null,map__4861_5038__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5040 = cljs.core.get.call(null,map__4861_5038__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5041 = cljs.core.get.call(null,map__4861_5038__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5039], null),cljs.core.fnil.call(null,((function (seq__4855_5017,chunk__4856_5018,count__4857_5019,i__4858_5020,seq__4837_4967,chunk__4838_4968,count__4839_4969,i__4840_4970,seq__4801_4863,chunk__4802_4864,count__4803_4865,i__4804_4866,map__4861_5037,map__4861_5038__$1,gline_5039,gcol_5040,name_5041,seq__4855_5031__$1,temp__5735__auto___5030__$2,vec__4852_5014,column_5015,column_info_5016,seq__4837_5008__$1,temp__5735__auto___5007__$1,vec__4834_4964,line_4965,columns_4966,seq__4801_4958__$1,temp__5735__auto___4957,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5040], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_4965,new cljs.core.Keyword(null,"col","col",-1959363084),column_5015,new cljs.core.Keyword(null,"name","name",1843675177),name_5041], null));
});})(seq__4855_5017,chunk__4856_5018,count__4857_5019,i__4858_5020,seq__4837_4967,chunk__4838_4968,count__4839_4969,i__4840_4970,seq__4801_4863,chunk__4802_4864,count__4803_4865,i__4804_4866,map__4861_5037,map__4861_5038__$1,gline_5039,gcol_5040,name_5041,seq__4855_5031__$1,temp__5735__auto___5030__$2,vec__4852_5014,column_5015,column_info_5016,seq__4837_5008__$1,temp__5735__auto___5007__$1,vec__4834_4964,line_4965,columns_4966,seq__4801_4958__$1,temp__5735__auto___4957,inverted))
,cljs.core.sorted_map.call(null)));


var G__5042 = cljs.core.next.call(null,seq__4855_5031__$1);
var G__5043 = null;
var G__5044 = (0);
var G__5045 = (0);
seq__4855_5017 = G__5042;
chunk__4856_5018 = G__5043;
count__4857_5019 = G__5044;
i__4858_5020 = G__5045;
continue;
}
} else {
}
}
break;
}


var G__5046 = cljs.core.next.call(null,seq__4837_5008__$1);
var G__5047 = null;
var G__5048 = (0);
var G__5049 = (0);
seq__4837_4967 = G__5046;
chunk__4838_4968 = G__5047;
count__4839_4969 = G__5048;
i__4840_4970 = G__5049;
continue;
}
} else {
}
}
break;
}


var G__5050 = cljs.core.next.call(null,seq__4801_4958__$1);
var G__5051 = null;
var G__5052 = (0);
var G__5053 = (0);
seq__4801_4863 = G__5050;
chunk__4802_4864 = G__5051;
count__4803_4865 = G__5052;
i__4804_4866 = G__5053;
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
