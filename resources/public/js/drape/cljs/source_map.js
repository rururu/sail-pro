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
return cljs.core.reduce.call(null,(function (m,p__19952){
var vec__19953 = p__19952;
var i = cljs.core.nth.call(null,vec__19953,(0),null);
var v = cljs.core.nth.call(null,vec__19953,(1),null);
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
var vec__19956 = seg;
var gcol = cljs.core.nth.call(null,vec__19956,(0),null);
var source = cljs.core.nth.call(null,vec__19956,(1),null);
var line = cljs.core.nth.call(null,vec__19956,(2),null);
var col = cljs.core.nth.call(null,vec__19956,(3),null);
var name = cljs.core.nth.call(null,vec__19956,(4),null);
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
var vec__19959 = seg;
var gcol = cljs.core.nth.call(null,vec__19959,(0),null);
var source = cljs.core.nth.call(null,vec__19959,(1),null);
var line = cljs.core.nth.call(null,vec__19959,(2),null);
var col = cljs.core.nth.call(null,vec__19959,(3),null);
var name = cljs.core.nth.call(null,vec__19959,(4),null);
var vec__19962 = relseg;
var rgcol = cljs.core.nth.call(null,vec__19962,(0),null);
var rsource = cljs.core.nth.call(null,vec__19962,(1),null);
var rline = cljs.core.nth.call(null,vec__19962,(2),null);
var rcol = cljs.core.nth.call(null,vec__19962,(3),null);
var rname = cljs.core.nth.call(null,vec__19962,(4),null);
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
var map__19965 = segmap;
var map__19965__$1 = (((((!((map__19965 == null))))?(((((map__19965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19965):map__19965);
var gcol = cljs.core.get.call(null,map__19965__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__19965__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__19965__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__19965__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__19965__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__19965,map__19965__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__19965,map__19965__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__19965,map__19965__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__19965,map__19965__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__19965,map__19965__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__19965,map__19965__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__19968 = arguments.length;
switch (G__19968) {
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
var vec__19969 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__19973 = cljs.core.next.call(null,segs__$1);
var G__19974 = nrelseg;
var G__19975 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__19973;
relseg__$1 = G__19974;
result__$1 = G__19975;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__19969,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__19969,(1),null);
var G__19976 = (gline + (1));
var G__19977 = cljs.core.next.call(null,lines__$1);
var G__19978 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__19979 = result__$1;
gline = G__19976;
lines__$1 = G__19977;
relseg = G__19978;
result = G__19979;
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
var map__19981 = segmap;
var map__19981__$1 = (((((!((map__19981 == null))))?(((((map__19981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19981):map__19981);
var gcol = cljs.core.get.call(null,map__19981__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__19981__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__19981__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__19981__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__19981__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__19981,map__19981__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__19981,map__19981__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__19980_SHARP_){
return cljs.core.conj.call(null,p1__19980_SHARP_,d__$1);
});})(map__19981,map__19981__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__19981,map__19981__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__19984 = arguments.length;
switch (G__19984) {
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
var vec__19985 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__19989 = cljs.core.next.call(null,segs__$1);
var G__19990 = nrelseg;
var G__19991 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__19989;
relseg__$1 = G__19990;
result__$1 = G__19991;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__19985,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__19985,(1),null);
var G__19992 = (gline + (1));
var G__19993 = cljs.core.next.call(null,lines__$1);
var G__19994 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__19995 = result__$1;
gline = G__19992;
lines__$1 = G__19993;
relseg = G__19994;
result = G__19995;
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
return (function (p__19996){
var vec__19997 = p__19996;
var _ = cljs.core.nth.call(null,vec__19997,(0),null);
var source = cljs.core.nth.call(null,vec__19997,(1),null);
var line = cljs.core.nth.call(null,vec__19997,(2),null);
var col = cljs.core.nth.call(null,vec__19997,(3),null);
var name = cljs.core.nth.call(null,vec__19997,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__20000){
var vec__20001 = p__20000;
var gcol = cljs.core.nth.call(null,vec__20001,(0),null);
var sidx = cljs.core.nth.call(null,vec__20001,(1),null);
var line = cljs.core.nth.call(null,vec__20001,(2),null);
var col = cljs.core.nth.call(null,vec__20001,(3),null);
var name = cljs.core.nth.call(null,vec__20001,(4),null);
var seg = vec__20001;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__20001,gcol,sidx,line,col,name,seg,relseg){
return (function (p__20004){
var vec__20005 = p__20004;
var _ = cljs.core.nth.call(null,vec__20005,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__20005,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__20005,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__20005,(3),null);
var lname = cljs.core.nth.call(null,vec__20005,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__20001,gcol,sidx,line,col,name,seg,relseg))
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
var seq__20011 = cljs.core.seq.call(null,infos);
var chunk__20012 = null;
var count__20013 = (0);
var i__20014 = (0);
while(true){
if((i__20014 < count__20013)){
var info = cljs.core._nth.call(null,chunk__20012,i__20014);
var segv_20093 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_20094 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_20095 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_20094 > (lc_20095 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__20011,chunk__20012,count__20013,i__20014,segv_20093,gline_20094,lc_20095,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_20094 - (lc_20095 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_20093], null));
});})(seq__20011,chunk__20012,count__20013,i__20014,segv_20093,gline_20094,lc_20095,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__20011,chunk__20012,count__20013,i__20014,segv_20093,gline_20094,lc_20095,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20094], null),cljs.core.conj,segv_20093);
});})(seq__20011,chunk__20012,count__20013,i__20014,segv_20093,gline_20094,lc_20095,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__20096 = seq__20011;
var G__20097 = chunk__20012;
var G__20098 = count__20013;
var G__20099 = (i__20014 + (1));
seq__20011 = G__20096;
chunk__20012 = G__20097;
count__20013 = G__20098;
i__20014 = G__20099;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__20011);
if(temp__5735__auto__){
var seq__20011__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20011__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__20011__$1);
var G__20100 = cljs.core.chunk_rest.call(null,seq__20011__$1);
var G__20101 = c__4461__auto__;
var G__20102 = cljs.core.count.call(null,c__4461__auto__);
var G__20103 = (0);
seq__20011 = G__20100;
chunk__20012 = G__20101;
count__20013 = G__20102;
i__20014 = G__20103;
continue;
} else {
var info = cljs.core.first.call(null,seq__20011__$1);
var segv_20104 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_20105 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_20106 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_20105 > (lc_20106 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__20011,chunk__20012,count__20013,i__20014,segv_20104,gline_20105,lc_20106,info,seq__20011__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_20105 - (lc_20106 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_20104], null));
});})(seq__20011,chunk__20012,count__20013,i__20014,segv_20104,gline_20105,lc_20106,info,seq__20011__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__20011,chunk__20012,count__20013,i__20014,segv_20104,gline_20105,lc_20106,info,seq__20011__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20105], null),cljs.core.conj,segv_20104);
});})(seq__20011,chunk__20012,count__20013,i__20014,segv_20104,gline_20105,lc_20106,info,seq__20011__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__20107 = cljs.core.next.call(null,seq__20011__$1);
var G__20108 = null;
var G__20109 = (0);
var G__20110 = (0);
seq__20011 = G__20107;
chunk__20012 = G__20108;
count__20013 = G__20109;
i__20014 = G__20110;
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
var seq__20015_20111 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__20016_20112 = null;
var count__20017_20113 = (0);
var i__20018_20114 = (0);
while(true){
if((i__20018_20114 < count__20017_20113)){
var vec__20019_20115 = cljs.core._nth.call(null,chunk__20016_20112,i__20018_20114);
var source_idx_20116 = cljs.core.nth.call(null,vec__20019_20115,(0),null);
var vec__20022_20117 = cljs.core.nth.call(null,vec__20019_20115,(1),null);
var __20118 = cljs.core.nth.call(null,vec__20022_20117,(0),null);
var lines_20119__$1 = cljs.core.nth.call(null,vec__20022_20117,(1),null);
var seq__20025_20120 = cljs.core.seq.call(null,lines_20119__$1);
var chunk__20026_20121 = null;
var count__20027_20122 = (0);
var i__20028_20123 = (0);
while(true){
if((i__20028_20123 < count__20027_20122)){
var vec__20029_20124 = cljs.core._nth.call(null,chunk__20026_20121,i__20028_20123);
var line_20125 = cljs.core.nth.call(null,vec__20029_20124,(0),null);
var cols_20126 = cljs.core.nth.call(null,vec__20029_20124,(1),null);
var seq__20032_20127 = cljs.core.seq.call(null,cols_20126);
var chunk__20033_20128 = null;
var count__20034_20129 = (0);
var i__20035_20130 = (0);
while(true){
if((i__20035_20130 < count__20034_20129)){
var vec__20036_20131 = cljs.core._nth.call(null,chunk__20033_20128,i__20035_20130);
var col_20132 = cljs.core.nth.call(null,vec__20036_20131,(0),null);
var infos_20133 = cljs.core.nth.call(null,vec__20036_20131,(1),null);
encode_cols.call(null,infos_20133,source_idx_20116,line_20125,col_20132);


var G__20134 = seq__20032_20127;
var G__20135 = chunk__20033_20128;
var G__20136 = count__20034_20129;
var G__20137 = (i__20035_20130 + (1));
seq__20032_20127 = G__20134;
chunk__20033_20128 = G__20135;
count__20034_20129 = G__20136;
i__20035_20130 = G__20137;
continue;
} else {
var temp__5735__auto___20138 = cljs.core.seq.call(null,seq__20032_20127);
if(temp__5735__auto___20138){
var seq__20032_20139__$1 = temp__5735__auto___20138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20032_20139__$1)){
var c__4461__auto___20140 = cljs.core.chunk_first.call(null,seq__20032_20139__$1);
var G__20141 = cljs.core.chunk_rest.call(null,seq__20032_20139__$1);
var G__20142 = c__4461__auto___20140;
var G__20143 = cljs.core.count.call(null,c__4461__auto___20140);
var G__20144 = (0);
seq__20032_20127 = G__20141;
chunk__20033_20128 = G__20142;
count__20034_20129 = G__20143;
i__20035_20130 = G__20144;
continue;
} else {
var vec__20039_20145 = cljs.core.first.call(null,seq__20032_20139__$1);
var col_20146 = cljs.core.nth.call(null,vec__20039_20145,(0),null);
var infos_20147 = cljs.core.nth.call(null,vec__20039_20145,(1),null);
encode_cols.call(null,infos_20147,source_idx_20116,line_20125,col_20146);


var G__20148 = cljs.core.next.call(null,seq__20032_20139__$1);
var G__20149 = null;
var G__20150 = (0);
var G__20151 = (0);
seq__20032_20127 = G__20148;
chunk__20033_20128 = G__20149;
count__20034_20129 = G__20150;
i__20035_20130 = G__20151;
continue;
}
} else {
}
}
break;
}


var G__20152 = seq__20025_20120;
var G__20153 = chunk__20026_20121;
var G__20154 = count__20027_20122;
var G__20155 = (i__20028_20123 + (1));
seq__20025_20120 = G__20152;
chunk__20026_20121 = G__20153;
count__20027_20122 = G__20154;
i__20028_20123 = G__20155;
continue;
} else {
var temp__5735__auto___20156 = cljs.core.seq.call(null,seq__20025_20120);
if(temp__5735__auto___20156){
var seq__20025_20157__$1 = temp__5735__auto___20156;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20025_20157__$1)){
var c__4461__auto___20158 = cljs.core.chunk_first.call(null,seq__20025_20157__$1);
var G__20159 = cljs.core.chunk_rest.call(null,seq__20025_20157__$1);
var G__20160 = c__4461__auto___20158;
var G__20161 = cljs.core.count.call(null,c__4461__auto___20158);
var G__20162 = (0);
seq__20025_20120 = G__20159;
chunk__20026_20121 = G__20160;
count__20027_20122 = G__20161;
i__20028_20123 = G__20162;
continue;
} else {
var vec__20042_20163 = cljs.core.first.call(null,seq__20025_20157__$1);
var line_20164 = cljs.core.nth.call(null,vec__20042_20163,(0),null);
var cols_20165 = cljs.core.nth.call(null,vec__20042_20163,(1),null);
var seq__20045_20166 = cljs.core.seq.call(null,cols_20165);
var chunk__20046_20167 = null;
var count__20047_20168 = (0);
var i__20048_20169 = (0);
while(true){
if((i__20048_20169 < count__20047_20168)){
var vec__20049_20170 = cljs.core._nth.call(null,chunk__20046_20167,i__20048_20169);
var col_20171 = cljs.core.nth.call(null,vec__20049_20170,(0),null);
var infos_20172 = cljs.core.nth.call(null,vec__20049_20170,(1),null);
encode_cols.call(null,infos_20172,source_idx_20116,line_20164,col_20171);


var G__20173 = seq__20045_20166;
var G__20174 = chunk__20046_20167;
var G__20175 = count__20047_20168;
var G__20176 = (i__20048_20169 + (1));
seq__20045_20166 = G__20173;
chunk__20046_20167 = G__20174;
count__20047_20168 = G__20175;
i__20048_20169 = G__20176;
continue;
} else {
var temp__5735__auto___20177__$1 = cljs.core.seq.call(null,seq__20045_20166);
if(temp__5735__auto___20177__$1){
var seq__20045_20178__$1 = temp__5735__auto___20177__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20045_20178__$1)){
var c__4461__auto___20179 = cljs.core.chunk_first.call(null,seq__20045_20178__$1);
var G__20180 = cljs.core.chunk_rest.call(null,seq__20045_20178__$1);
var G__20181 = c__4461__auto___20179;
var G__20182 = cljs.core.count.call(null,c__4461__auto___20179);
var G__20183 = (0);
seq__20045_20166 = G__20180;
chunk__20046_20167 = G__20181;
count__20047_20168 = G__20182;
i__20048_20169 = G__20183;
continue;
} else {
var vec__20052_20184 = cljs.core.first.call(null,seq__20045_20178__$1);
var col_20185 = cljs.core.nth.call(null,vec__20052_20184,(0),null);
var infos_20186 = cljs.core.nth.call(null,vec__20052_20184,(1),null);
encode_cols.call(null,infos_20186,source_idx_20116,line_20164,col_20185);


var G__20187 = cljs.core.next.call(null,seq__20045_20178__$1);
var G__20188 = null;
var G__20189 = (0);
var G__20190 = (0);
seq__20045_20166 = G__20187;
chunk__20046_20167 = G__20188;
count__20047_20168 = G__20189;
i__20048_20169 = G__20190;
continue;
}
} else {
}
}
break;
}


var G__20191 = cljs.core.next.call(null,seq__20025_20157__$1);
var G__20192 = null;
var G__20193 = (0);
var G__20194 = (0);
seq__20025_20120 = G__20191;
chunk__20026_20121 = G__20192;
count__20027_20122 = G__20193;
i__20028_20123 = G__20194;
continue;
}
} else {
}
}
break;
}


var G__20195 = seq__20015_20111;
var G__20196 = chunk__20016_20112;
var G__20197 = count__20017_20113;
var G__20198 = (i__20018_20114 + (1));
seq__20015_20111 = G__20195;
chunk__20016_20112 = G__20196;
count__20017_20113 = G__20197;
i__20018_20114 = G__20198;
continue;
} else {
var temp__5735__auto___20199 = cljs.core.seq.call(null,seq__20015_20111);
if(temp__5735__auto___20199){
var seq__20015_20200__$1 = temp__5735__auto___20199;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20015_20200__$1)){
var c__4461__auto___20201 = cljs.core.chunk_first.call(null,seq__20015_20200__$1);
var G__20202 = cljs.core.chunk_rest.call(null,seq__20015_20200__$1);
var G__20203 = c__4461__auto___20201;
var G__20204 = cljs.core.count.call(null,c__4461__auto___20201);
var G__20205 = (0);
seq__20015_20111 = G__20202;
chunk__20016_20112 = G__20203;
count__20017_20113 = G__20204;
i__20018_20114 = G__20205;
continue;
} else {
var vec__20055_20206 = cljs.core.first.call(null,seq__20015_20200__$1);
var source_idx_20207 = cljs.core.nth.call(null,vec__20055_20206,(0),null);
var vec__20058_20208 = cljs.core.nth.call(null,vec__20055_20206,(1),null);
var __20209 = cljs.core.nth.call(null,vec__20058_20208,(0),null);
var lines_20210__$1 = cljs.core.nth.call(null,vec__20058_20208,(1),null);
var seq__20061_20211 = cljs.core.seq.call(null,lines_20210__$1);
var chunk__20062_20212 = null;
var count__20063_20213 = (0);
var i__20064_20214 = (0);
while(true){
if((i__20064_20214 < count__20063_20213)){
var vec__20065_20215 = cljs.core._nth.call(null,chunk__20062_20212,i__20064_20214);
var line_20216 = cljs.core.nth.call(null,vec__20065_20215,(0),null);
var cols_20217 = cljs.core.nth.call(null,vec__20065_20215,(1),null);
var seq__20068_20218 = cljs.core.seq.call(null,cols_20217);
var chunk__20069_20219 = null;
var count__20070_20220 = (0);
var i__20071_20221 = (0);
while(true){
if((i__20071_20221 < count__20070_20220)){
var vec__20072_20222 = cljs.core._nth.call(null,chunk__20069_20219,i__20071_20221);
var col_20223 = cljs.core.nth.call(null,vec__20072_20222,(0),null);
var infos_20224 = cljs.core.nth.call(null,vec__20072_20222,(1),null);
encode_cols.call(null,infos_20224,source_idx_20207,line_20216,col_20223);


var G__20225 = seq__20068_20218;
var G__20226 = chunk__20069_20219;
var G__20227 = count__20070_20220;
var G__20228 = (i__20071_20221 + (1));
seq__20068_20218 = G__20225;
chunk__20069_20219 = G__20226;
count__20070_20220 = G__20227;
i__20071_20221 = G__20228;
continue;
} else {
var temp__5735__auto___20229__$1 = cljs.core.seq.call(null,seq__20068_20218);
if(temp__5735__auto___20229__$1){
var seq__20068_20230__$1 = temp__5735__auto___20229__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20068_20230__$1)){
var c__4461__auto___20231 = cljs.core.chunk_first.call(null,seq__20068_20230__$1);
var G__20232 = cljs.core.chunk_rest.call(null,seq__20068_20230__$1);
var G__20233 = c__4461__auto___20231;
var G__20234 = cljs.core.count.call(null,c__4461__auto___20231);
var G__20235 = (0);
seq__20068_20218 = G__20232;
chunk__20069_20219 = G__20233;
count__20070_20220 = G__20234;
i__20071_20221 = G__20235;
continue;
} else {
var vec__20075_20236 = cljs.core.first.call(null,seq__20068_20230__$1);
var col_20237 = cljs.core.nth.call(null,vec__20075_20236,(0),null);
var infos_20238 = cljs.core.nth.call(null,vec__20075_20236,(1),null);
encode_cols.call(null,infos_20238,source_idx_20207,line_20216,col_20237);


var G__20239 = cljs.core.next.call(null,seq__20068_20230__$1);
var G__20240 = null;
var G__20241 = (0);
var G__20242 = (0);
seq__20068_20218 = G__20239;
chunk__20069_20219 = G__20240;
count__20070_20220 = G__20241;
i__20071_20221 = G__20242;
continue;
}
} else {
}
}
break;
}


var G__20243 = seq__20061_20211;
var G__20244 = chunk__20062_20212;
var G__20245 = count__20063_20213;
var G__20246 = (i__20064_20214 + (1));
seq__20061_20211 = G__20243;
chunk__20062_20212 = G__20244;
count__20063_20213 = G__20245;
i__20064_20214 = G__20246;
continue;
} else {
var temp__5735__auto___20247__$1 = cljs.core.seq.call(null,seq__20061_20211);
if(temp__5735__auto___20247__$1){
var seq__20061_20248__$1 = temp__5735__auto___20247__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20061_20248__$1)){
var c__4461__auto___20249 = cljs.core.chunk_first.call(null,seq__20061_20248__$1);
var G__20250 = cljs.core.chunk_rest.call(null,seq__20061_20248__$1);
var G__20251 = c__4461__auto___20249;
var G__20252 = cljs.core.count.call(null,c__4461__auto___20249);
var G__20253 = (0);
seq__20061_20211 = G__20250;
chunk__20062_20212 = G__20251;
count__20063_20213 = G__20252;
i__20064_20214 = G__20253;
continue;
} else {
var vec__20078_20254 = cljs.core.first.call(null,seq__20061_20248__$1);
var line_20255 = cljs.core.nth.call(null,vec__20078_20254,(0),null);
var cols_20256 = cljs.core.nth.call(null,vec__20078_20254,(1),null);
var seq__20081_20257 = cljs.core.seq.call(null,cols_20256);
var chunk__20082_20258 = null;
var count__20083_20259 = (0);
var i__20084_20260 = (0);
while(true){
if((i__20084_20260 < count__20083_20259)){
var vec__20085_20261 = cljs.core._nth.call(null,chunk__20082_20258,i__20084_20260);
var col_20262 = cljs.core.nth.call(null,vec__20085_20261,(0),null);
var infos_20263 = cljs.core.nth.call(null,vec__20085_20261,(1),null);
encode_cols.call(null,infos_20263,source_idx_20207,line_20255,col_20262);


var G__20264 = seq__20081_20257;
var G__20265 = chunk__20082_20258;
var G__20266 = count__20083_20259;
var G__20267 = (i__20084_20260 + (1));
seq__20081_20257 = G__20264;
chunk__20082_20258 = G__20265;
count__20083_20259 = G__20266;
i__20084_20260 = G__20267;
continue;
} else {
var temp__5735__auto___20268__$2 = cljs.core.seq.call(null,seq__20081_20257);
if(temp__5735__auto___20268__$2){
var seq__20081_20269__$1 = temp__5735__auto___20268__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20081_20269__$1)){
var c__4461__auto___20270 = cljs.core.chunk_first.call(null,seq__20081_20269__$1);
var G__20271 = cljs.core.chunk_rest.call(null,seq__20081_20269__$1);
var G__20272 = c__4461__auto___20270;
var G__20273 = cljs.core.count.call(null,c__4461__auto___20270);
var G__20274 = (0);
seq__20081_20257 = G__20271;
chunk__20082_20258 = G__20272;
count__20083_20259 = G__20273;
i__20084_20260 = G__20274;
continue;
} else {
var vec__20088_20275 = cljs.core.first.call(null,seq__20081_20269__$1);
var col_20276 = cljs.core.nth.call(null,vec__20088_20275,(0),null);
var infos_20277 = cljs.core.nth.call(null,vec__20088_20275,(1),null);
encode_cols.call(null,infos_20277,source_idx_20207,line_20255,col_20276);


var G__20278 = cljs.core.next.call(null,seq__20081_20269__$1);
var G__20279 = null;
var G__20280 = (0);
var G__20281 = (0);
seq__20081_20257 = G__20278;
chunk__20082_20258 = G__20279;
count__20083_20259 = G__20280;
i__20084_20260 = G__20281;
continue;
}
} else {
}
}
break;
}


var G__20282 = cljs.core.next.call(null,seq__20061_20248__$1);
var G__20283 = null;
var G__20284 = (0);
var G__20285 = (0);
seq__20061_20211 = G__20282;
chunk__20062_20212 = G__20283;
count__20063_20213 = G__20284;
i__20064_20214 = G__20285;
continue;
}
} else {
}
}
break;
}


var G__20286 = cljs.core.next.call(null,seq__20015_20200__$1);
var G__20287 = null;
var G__20288 = (0);
var G__20289 = (0);
seq__20015_20111 = G__20286;
chunk__20016_20112 = G__20287;
count__20017_20113 = G__20288;
i__20018_20114 = G__20289;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__20091 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__20008_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20008_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__20009_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__20009_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__20010_SHARP_){
return clojure.string.join.call(null,",",p1__20010_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__20092 = G__20091;
goog.object.set(G__20092,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__20092;
} else {
return G__20091;
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
var vec__20290 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__20290,(0),null);
var col_map = cljs.core.nth.call(null,vec__20290,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__20293 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__20293,(0),null);
var infos = cljs.core.nth.call(null,vec__20293,(1),null);
var G__20299 = cljs.core.next.call(null,col_map_seq);
var G__20300 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__20293,col,infos,vec__20290,line,col_map){
return (function (v,p__20296){
var map__20297 = p__20296;
var map__20297__$1 = (((((!((map__20297 == null))))?(((((map__20297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20297):map__20297);
var gline = cljs.core.get.call(null,map__20297__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__20297__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__20293,col,infos,vec__20290,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__20299;
new_cols = G__20300;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__20301 = cljs.core.next.call(null,line_map_seq);
var G__20302 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__20301;
new_lines = G__20302;
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
var seq__20303_20365 = cljs.core.seq.call(null,reverse_map);
var chunk__20304_20366 = null;
var count__20305_20367 = (0);
var i__20306_20368 = (0);
while(true){
if((i__20306_20368 < count__20305_20367)){
var vec__20307_20369 = cljs.core._nth.call(null,chunk__20304_20366,i__20306_20368);
var line_20370 = cljs.core.nth.call(null,vec__20307_20369,(0),null);
var columns_20371 = cljs.core.nth.call(null,vec__20307_20369,(1),null);
var seq__20310_20372 = cljs.core.seq.call(null,columns_20371);
var chunk__20311_20373 = null;
var count__20312_20374 = (0);
var i__20313_20375 = (0);
while(true){
if((i__20313_20375 < count__20312_20374)){
var vec__20314_20376 = cljs.core._nth.call(null,chunk__20311_20373,i__20313_20375);
var column_20377 = cljs.core.nth.call(null,vec__20314_20376,(0),null);
var column_info_20378 = cljs.core.nth.call(null,vec__20314_20376,(1),null);
var seq__20317_20379 = cljs.core.seq.call(null,column_info_20378);
var chunk__20318_20380 = null;
var count__20319_20381 = (0);
var i__20320_20382 = (0);
while(true){
if((i__20320_20382 < count__20319_20381)){
var map__20321_20383 = cljs.core._nth.call(null,chunk__20318_20380,i__20320_20382);
var map__20321_20384__$1 = (((((!((map__20321_20383 == null))))?(((((map__20321_20383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20321_20383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20321_20383):map__20321_20383);
var gline_20385 = cljs.core.get.call(null,map__20321_20384__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_20386 = cljs.core.get.call(null,map__20321_20384__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_20387 = cljs.core.get.call(null,map__20321_20384__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20385], null),cljs.core.fnil.call(null,((function (seq__20317_20379,chunk__20318_20380,count__20319_20381,i__20320_20382,seq__20310_20372,chunk__20311_20373,count__20312_20374,i__20313_20375,seq__20303_20365,chunk__20304_20366,count__20305_20367,i__20306_20368,map__20321_20383,map__20321_20384__$1,gline_20385,gcol_20386,name_20387,vec__20314_20376,column_20377,column_info_20378,vec__20307_20369,line_20370,columns_20371,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20386], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_20370,new cljs.core.Keyword(null,"col","col",-1959363084),column_20377,new cljs.core.Keyword(null,"name","name",1843675177),name_20387], null));
});})(seq__20317_20379,chunk__20318_20380,count__20319_20381,i__20320_20382,seq__20310_20372,chunk__20311_20373,count__20312_20374,i__20313_20375,seq__20303_20365,chunk__20304_20366,count__20305_20367,i__20306_20368,map__20321_20383,map__20321_20384__$1,gline_20385,gcol_20386,name_20387,vec__20314_20376,column_20377,column_info_20378,vec__20307_20369,line_20370,columns_20371,inverted))
,cljs.core.sorted_map.call(null)));


var G__20388 = seq__20317_20379;
var G__20389 = chunk__20318_20380;
var G__20390 = count__20319_20381;
var G__20391 = (i__20320_20382 + (1));
seq__20317_20379 = G__20388;
chunk__20318_20380 = G__20389;
count__20319_20381 = G__20390;
i__20320_20382 = G__20391;
continue;
} else {
var temp__5735__auto___20392 = cljs.core.seq.call(null,seq__20317_20379);
if(temp__5735__auto___20392){
var seq__20317_20393__$1 = temp__5735__auto___20392;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20317_20393__$1)){
var c__4461__auto___20394 = cljs.core.chunk_first.call(null,seq__20317_20393__$1);
var G__20395 = cljs.core.chunk_rest.call(null,seq__20317_20393__$1);
var G__20396 = c__4461__auto___20394;
var G__20397 = cljs.core.count.call(null,c__4461__auto___20394);
var G__20398 = (0);
seq__20317_20379 = G__20395;
chunk__20318_20380 = G__20396;
count__20319_20381 = G__20397;
i__20320_20382 = G__20398;
continue;
} else {
var map__20323_20399 = cljs.core.first.call(null,seq__20317_20393__$1);
var map__20323_20400__$1 = (((((!((map__20323_20399 == null))))?(((((map__20323_20399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20323_20399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20323_20399):map__20323_20399);
var gline_20401 = cljs.core.get.call(null,map__20323_20400__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_20402 = cljs.core.get.call(null,map__20323_20400__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_20403 = cljs.core.get.call(null,map__20323_20400__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20401], null),cljs.core.fnil.call(null,((function (seq__20317_20379,chunk__20318_20380,count__20319_20381,i__20320_20382,seq__20310_20372,chunk__20311_20373,count__20312_20374,i__20313_20375,seq__20303_20365,chunk__20304_20366,count__20305_20367,i__20306_20368,map__20323_20399,map__20323_20400__$1,gline_20401,gcol_20402,name_20403,seq__20317_20393__$1,temp__5735__auto___20392,vec__20314_20376,column_20377,column_info_20378,vec__20307_20369,line_20370,columns_20371,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20402], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_20370,new cljs.core.Keyword(null,"col","col",-1959363084),column_20377,new cljs.core.Keyword(null,"name","name",1843675177),name_20403], null));
});})(seq__20317_20379,chunk__20318_20380,count__20319_20381,i__20320_20382,seq__20310_20372,chunk__20311_20373,count__20312_20374,i__20313_20375,seq__20303_20365,chunk__20304_20366,count__20305_20367,i__20306_20368,map__20323_20399,map__20323_20400__$1,gline_20401,gcol_20402,name_20403,seq__20317_20393__$1,temp__5735__auto___20392,vec__20314_20376,column_20377,column_info_20378,vec__20307_20369,line_20370,columns_20371,inverted))
,cljs.core.sorted_map.call(null)));


var G__20404 = cljs.core.next.call(null,seq__20317_20393__$1);
var G__20405 = null;
var G__20406 = (0);
var G__20407 = (0);
seq__20317_20379 = G__20404;
chunk__20318_20380 = G__20405;
count__20319_20381 = G__20406;
i__20320_20382 = G__20407;
continue;
}
} else {
}
}
break;
}


var G__20408 = seq__20310_20372;
var G__20409 = chunk__20311_20373;
var G__20410 = count__20312_20374;
var G__20411 = (i__20313_20375 + (1));
seq__20310_20372 = G__20408;
chunk__20311_20373 = G__20409;
count__20312_20374 = G__20410;
i__20313_20375 = G__20411;
continue;
} else {
var temp__5735__auto___20412 = cljs.core.seq.call(null,seq__20310_20372);
if(temp__5735__auto___20412){
var seq__20310_20413__$1 = temp__5735__auto___20412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20310_20413__$1)){
var c__4461__auto___20414 = cljs.core.chunk_first.call(null,seq__20310_20413__$1);
var G__20415 = cljs.core.chunk_rest.call(null,seq__20310_20413__$1);
var G__20416 = c__4461__auto___20414;
var G__20417 = cljs.core.count.call(null,c__4461__auto___20414);
var G__20418 = (0);
seq__20310_20372 = G__20415;
chunk__20311_20373 = G__20416;
count__20312_20374 = G__20417;
i__20313_20375 = G__20418;
continue;
} else {
var vec__20325_20419 = cljs.core.first.call(null,seq__20310_20413__$1);
var column_20420 = cljs.core.nth.call(null,vec__20325_20419,(0),null);
var column_info_20421 = cljs.core.nth.call(null,vec__20325_20419,(1),null);
var seq__20328_20422 = cljs.core.seq.call(null,column_info_20421);
var chunk__20329_20423 = null;
var count__20330_20424 = (0);
var i__20331_20425 = (0);
while(true){
if((i__20331_20425 < count__20330_20424)){
var map__20332_20426 = cljs.core._nth.call(null,chunk__20329_20423,i__20331_20425);
var map__20332_20427__$1 = (((((!((map__20332_20426 == null))))?(((((map__20332_20426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20332_20426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20332_20426):map__20332_20426);
var gline_20428 = cljs.core.get.call(null,map__20332_20427__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_20429 = cljs.core.get.call(null,map__20332_20427__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_20430 = cljs.core.get.call(null,map__20332_20427__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20428], null),cljs.core.fnil.call(null,((function (seq__20328_20422,chunk__20329_20423,count__20330_20424,i__20331_20425,seq__20310_20372,chunk__20311_20373,count__20312_20374,i__20313_20375,seq__20303_20365,chunk__20304_20366,count__20305_20367,i__20306_20368,map__20332_20426,map__20332_20427__$1,gline_20428,gcol_20429,name_20430,vec__20325_20419,column_20420,column_info_20421,seq__20310_20413__$1,temp__5735__auto___20412,vec__20307_20369,line_20370,columns_20371,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20429], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_20370,new cljs.core.Keyword(null,"col","col",-1959363084),column_20420,new cljs.core.Keyword(null,"name","name",1843675177),name_20430], null));
});})(seq__20328_20422,chunk__20329_20423,count__20330_20424,i__20331_20425,seq__20310_20372,chunk__20311_20373,count__20312_20374,i__20313_20375,seq__20303_20365,chunk__20304_20366,count__20305_20367,i__20306_20368,map__20332_20426,map__20332_20427__$1,gline_20428,gcol_20429,name_20430,vec__20325_20419,column_20420,column_info_20421,seq__20310_20413__$1,temp__5735__auto___20412,vec__20307_20369,line_20370,columns_20371,inverted))
,cljs.core.sorted_map.call(null)));


var G__20431 = seq__20328_20422;
var G__20432 = chunk__20329_20423;
var G__20433 = count__20330_20424;
var G__20434 = (i__20331_20425 + (1));
seq__20328_20422 = G__20431;
chunk__20329_20423 = G__20432;
count__20330_20424 = G__20433;
i__20331_20425 = G__20434;
continue;
} else {
var temp__5735__auto___20435__$1 = cljs.core.seq.call(null,seq__20328_20422);
if(temp__5735__auto___20435__$1){
var seq__20328_20436__$1 = temp__5735__auto___20435__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20328_20436__$1)){
var c__4461__auto___20437 = cljs.core.chunk_first.call(null,seq__20328_20436__$1);
var G__20438 = cljs.core.chunk_rest.call(null,seq__20328_20436__$1);
var G__20439 = c__4461__auto___20437;
var G__20440 = cljs.core.count.call(null,c__4461__auto___20437);
var G__20441 = (0);
seq__20328_20422 = G__20438;
chunk__20329_20423 = G__20439;
count__20330_20424 = G__20440;
i__20331_20425 = G__20441;
continue;
} else {
var map__20334_20442 = cljs.core.first.call(null,seq__20328_20436__$1);
var map__20334_20443__$1 = (((((!((map__20334_20442 == null))))?(((((map__20334_20442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20334_20442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20334_20442):map__20334_20442);
var gline_20444 = cljs.core.get.call(null,map__20334_20443__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_20445 = cljs.core.get.call(null,map__20334_20443__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_20446 = cljs.core.get.call(null,map__20334_20443__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20444], null),cljs.core.fnil.call(null,((function (seq__20328_20422,chunk__20329_20423,count__20330_20424,i__20331_20425,seq__20310_20372,chunk__20311_20373,count__20312_20374,i__20313_20375,seq__20303_20365,chunk__20304_20366,count__20305_20367,i__20306_20368,map__20334_20442,map__20334_20443__$1,gline_20444,gcol_20445,name_20446,seq__20328_20436__$1,temp__5735__auto___20435__$1,vec__20325_20419,column_20420,column_info_20421,seq__20310_20413__$1,temp__5735__auto___20412,vec__20307_20369,line_20370,columns_20371,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20445], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_20370,new cljs.core.Keyword(null,"col","col",-1959363084),column_20420,new cljs.core.Keyword(null,"name","name",1843675177),name_20446], null));
});})(seq__20328_20422,chunk__20329_20423,count__20330_20424,i__20331_20425,seq__20310_20372,chunk__20311_20373,count__20312_20374,i__20313_20375,seq__20303_20365,chunk__20304_20366,count__20305_20367,i__20306_20368,map__20334_20442,map__20334_20443__$1,gline_20444,gcol_20445,name_20446,seq__20328_20436__$1,temp__5735__auto___20435__$1,vec__20325_20419,column_20420,column_info_20421,seq__20310_20413__$1,temp__5735__auto___20412,vec__20307_20369,line_20370,columns_20371,inverted))
,cljs.core.sorted_map.call(null)));


var G__20447 = cljs.core.next.call(null,seq__20328_20436__$1);
var G__20448 = null;
var G__20449 = (0);
var G__20450 = (0);
seq__20328_20422 = G__20447;
chunk__20329_20423 = G__20448;
count__20330_20424 = G__20449;
i__20331_20425 = G__20450;
continue;
}
} else {
}
}
break;
}


var G__20451 = cljs.core.next.call(null,seq__20310_20413__$1);
var G__20452 = null;
var G__20453 = (0);
var G__20454 = (0);
seq__20310_20372 = G__20451;
chunk__20311_20373 = G__20452;
count__20312_20374 = G__20453;
i__20313_20375 = G__20454;
continue;
}
} else {
}
}
break;
}


var G__20455 = seq__20303_20365;
var G__20456 = chunk__20304_20366;
var G__20457 = count__20305_20367;
var G__20458 = (i__20306_20368 + (1));
seq__20303_20365 = G__20455;
chunk__20304_20366 = G__20456;
count__20305_20367 = G__20457;
i__20306_20368 = G__20458;
continue;
} else {
var temp__5735__auto___20459 = cljs.core.seq.call(null,seq__20303_20365);
if(temp__5735__auto___20459){
var seq__20303_20460__$1 = temp__5735__auto___20459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20303_20460__$1)){
var c__4461__auto___20461 = cljs.core.chunk_first.call(null,seq__20303_20460__$1);
var G__20462 = cljs.core.chunk_rest.call(null,seq__20303_20460__$1);
var G__20463 = c__4461__auto___20461;
var G__20464 = cljs.core.count.call(null,c__4461__auto___20461);
var G__20465 = (0);
seq__20303_20365 = G__20462;
chunk__20304_20366 = G__20463;
count__20305_20367 = G__20464;
i__20306_20368 = G__20465;
continue;
} else {
var vec__20336_20466 = cljs.core.first.call(null,seq__20303_20460__$1);
var line_20467 = cljs.core.nth.call(null,vec__20336_20466,(0),null);
var columns_20468 = cljs.core.nth.call(null,vec__20336_20466,(1),null);
var seq__20339_20469 = cljs.core.seq.call(null,columns_20468);
var chunk__20340_20470 = null;
var count__20341_20471 = (0);
var i__20342_20472 = (0);
while(true){
if((i__20342_20472 < count__20341_20471)){
var vec__20343_20473 = cljs.core._nth.call(null,chunk__20340_20470,i__20342_20472);
var column_20474 = cljs.core.nth.call(null,vec__20343_20473,(0),null);
var column_info_20475 = cljs.core.nth.call(null,vec__20343_20473,(1),null);
var seq__20346_20476 = cljs.core.seq.call(null,column_info_20475);
var chunk__20347_20477 = null;
var count__20348_20478 = (0);
var i__20349_20479 = (0);
while(true){
if((i__20349_20479 < count__20348_20478)){
var map__20350_20480 = cljs.core._nth.call(null,chunk__20347_20477,i__20349_20479);
var map__20350_20481__$1 = (((((!((map__20350_20480 == null))))?(((((map__20350_20480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20350_20480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20350_20480):map__20350_20480);
var gline_20482 = cljs.core.get.call(null,map__20350_20481__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_20483 = cljs.core.get.call(null,map__20350_20481__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_20484 = cljs.core.get.call(null,map__20350_20481__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20482], null),cljs.core.fnil.call(null,((function (seq__20346_20476,chunk__20347_20477,count__20348_20478,i__20349_20479,seq__20339_20469,chunk__20340_20470,count__20341_20471,i__20342_20472,seq__20303_20365,chunk__20304_20366,count__20305_20367,i__20306_20368,map__20350_20480,map__20350_20481__$1,gline_20482,gcol_20483,name_20484,vec__20343_20473,column_20474,column_info_20475,vec__20336_20466,line_20467,columns_20468,seq__20303_20460__$1,temp__5735__auto___20459,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20483], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_20467,new cljs.core.Keyword(null,"col","col",-1959363084),column_20474,new cljs.core.Keyword(null,"name","name",1843675177),name_20484], null));
});})(seq__20346_20476,chunk__20347_20477,count__20348_20478,i__20349_20479,seq__20339_20469,chunk__20340_20470,count__20341_20471,i__20342_20472,seq__20303_20365,chunk__20304_20366,count__20305_20367,i__20306_20368,map__20350_20480,map__20350_20481__$1,gline_20482,gcol_20483,name_20484,vec__20343_20473,column_20474,column_info_20475,vec__20336_20466,line_20467,columns_20468,seq__20303_20460__$1,temp__5735__auto___20459,inverted))
,cljs.core.sorted_map.call(null)));


var G__20485 = seq__20346_20476;
var G__20486 = chunk__20347_20477;
var G__20487 = count__20348_20478;
var G__20488 = (i__20349_20479 + (1));
seq__20346_20476 = G__20485;
chunk__20347_20477 = G__20486;
count__20348_20478 = G__20487;
i__20349_20479 = G__20488;
continue;
} else {
var temp__5735__auto___20489__$1 = cljs.core.seq.call(null,seq__20346_20476);
if(temp__5735__auto___20489__$1){
var seq__20346_20490__$1 = temp__5735__auto___20489__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20346_20490__$1)){
var c__4461__auto___20491 = cljs.core.chunk_first.call(null,seq__20346_20490__$1);
var G__20492 = cljs.core.chunk_rest.call(null,seq__20346_20490__$1);
var G__20493 = c__4461__auto___20491;
var G__20494 = cljs.core.count.call(null,c__4461__auto___20491);
var G__20495 = (0);
seq__20346_20476 = G__20492;
chunk__20347_20477 = G__20493;
count__20348_20478 = G__20494;
i__20349_20479 = G__20495;
continue;
} else {
var map__20352_20496 = cljs.core.first.call(null,seq__20346_20490__$1);
var map__20352_20497__$1 = (((((!((map__20352_20496 == null))))?(((((map__20352_20496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20352_20496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20352_20496):map__20352_20496);
var gline_20498 = cljs.core.get.call(null,map__20352_20497__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_20499 = cljs.core.get.call(null,map__20352_20497__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_20500 = cljs.core.get.call(null,map__20352_20497__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20498], null),cljs.core.fnil.call(null,((function (seq__20346_20476,chunk__20347_20477,count__20348_20478,i__20349_20479,seq__20339_20469,chunk__20340_20470,count__20341_20471,i__20342_20472,seq__20303_20365,chunk__20304_20366,count__20305_20367,i__20306_20368,map__20352_20496,map__20352_20497__$1,gline_20498,gcol_20499,name_20500,seq__20346_20490__$1,temp__5735__auto___20489__$1,vec__20343_20473,column_20474,column_info_20475,vec__20336_20466,line_20467,columns_20468,seq__20303_20460__$1,temp__5735__auto___20459,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20499], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_20467,new cljs.core.Keyword(null,"col","col",-1959363084),column_20474,new cljs.core.Keyword(null,"name","name",1843675177),name_20500], null));
});})(seq__20346_20476,chunk__20347_20477,count__20348_20478,i__20349_20479,seq__20339_20469,chunk__20340_20470,count__20341_20471,i__20342_20472,seq__20303_20365,chunk__20304_20366,count__20305_20367,i__20306_20368,map__20352_20496,map__20352_20497__$1,gline_20498,gcol_20499,name_20500,seq__20346_20490__$1,temp__5735__auto___20489__$1,vec__20343_20473,column_20474,column_info_20475,vec__20336_20466,line_20467,columns_20468,seq__20303_20460__$1,temp__5735__auto___20459,inverted))
,cljs.core.sorted_map.call(null)));


var G__20501 = cljs.core.next.call(null,seq__20346_20490__$1);
var G__20502 = null;
var G__20503 = (0);
var G__20504 = (0);
seq__20346_20476 = G__20501;
chunk__20347_20477 = G__20502;
count__20348_20478 = G__20503;
i__20349_20479 = G__20504;
continue;
}
} else {
}
}
break;
}


var G__20505 = seq__20339_20469;
var G__20506 = chunk__20340_20470;
var G__20507 = count__20341_20471;
var G__20508 = (i__20342_20472 + (1));
seq__20339_20469 = G__20505;
chunk__20340_20470 = G__20506;
count__20341_20471 = G__20507;
i__20342_20472 = G__20508;
continue;
} else {
var temp__5735__auto___20509__$1 = cljs.core.seq.call(null,seq__20339_20469);
if(temp__5735__auto___20509__$1){
var seq__20339_20510__$1 = temp__5735__auto___20509__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20339_20510__$1)){
var c__4461__auto___20511 = cljs.core.chunk_first.call(null,seq__20339_20510__$1);
var G__20512 = cljs.core.chunk_rest.call(null,seq__20339_20510__$1);
var G__20513 = c__4461__auto___20511;
var G__20514 = cljs.core.count.call(null,c__4461__auto___20511);
var G__20515 = (0);
seq__20339_20469 = G__20512;
chunk__20340_20470 = G__20513;
count__20341_20471 = G__20514;
i__20342_20472 = G__20515;
continue;
} else {
var vec__20354_20516 = cljs.core.first.call(null,seq__20339_20510__$1);
var column_20517 = cljs.core.nth.call(null,vec__20354_20516,(0),null);
var column_info_20518 = cljs.core.nth.call(null,vec__20354_20516,(1),null);
var seq__20357_20519 = cljs.core.seq.call(null,column_info_20518);
var chunk__20358_20520 = null;
var count__20359_20521 = (0);
var i__20360_20522 = (0);
while(true){
if((i__20360_20522 < count__20359_20521)){
var map__20361_20523 = cljs.core._nth.call(null,chunk__20358_20520,i__20360_20522);
var map__20361_20524__$1 = (((((!((map__20361_20523 == null))))?(((((map__20361_20523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20361_20523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20361_20523):map__20361_20523);
var gline_20525 = cljs.core.get.call(null,map__20361_20524__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_20526 = cljs.core.get.call(null,map__20361_20524__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_20527 = cljs.core.get.call(null,map__20361_20524__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20525], null),cljs.core.fnil.call(null,((function (seq__20357_20519,chunk__20358_20520,count__20359_20521,i__20360_20522,seq__20339_20469,chunk__20340_20470,count__20341_20471,i__20342_20472,seq__20303_20365,chunk__20304_20366,count__20305_20367,i__20306_20368,map__20361_20523,map__20361_20524__$1,gline_20525,gcol_20526,name_20527,vec__20354_20516,column_20517,column_info_20518,seq__20339_20510__$1,temp__5735__auto___20509__$1,vec__20336_20466,line_20467,columns_20468,seq__20303_20460__$1,temp__5735__auto___20459,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20526], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_20467,new cljs.core.Keyword(null,"col","col",-1959363084),column_20517,new cljs.core.Keyword(null,"name","name",1843675177),name_20527], null));
});})(seq__20357_20519,chunk__20358_20520,count__20359_20521,i__20360_20522,seq__20339_20469,chunk__20340_20470,count__20341_20471,i__20342_20472,seq__20303_20365,chunk__20304_20366,count__20305_20367,i__20306_20368,map__20361_20523,map__20361_20524__$1,gline_20525,gcol_20526,name_20527,vec__20354_20516,column_20517,column_info_20518,seq__20339_20510__$1,temp__5735__auto___20509__$1,vec__20336_20466,line_20467,columns_20468,seq__20303_20460__$1,temp__5735__auto___20459,inverted))
,cljs.core.sorted_map.call(null)));


var G__20528 = seq__20357_20519;
var G__20529 = chunk__20358_20520;
var G__20530 = count__20359_20521;
var G__20531 = (i__20360_20522 + (1));
seq__20357_20519 = G__20528;
chunk__20358_20520 = G__20529;
count__20359_20521 = G__20530;
i__20360_20522 = G__20531;
continue;
} else {
var temp__5735__auto___20532__$2 = cljs.core.seq.call(null,seq__20357_20519);
if(temp__5735__auto___20532__$2){
var seq__20357_20533__$1 = temp__5735__auto___20532__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20357_20533__$1)){
var c__4461__auto___20534 = cljs.core.chunk_first.call(null,seq__20357_20533__$1);
var G__20535 = cljs.core.chunk_rest.call(null,seq__20357_20533__$1);
var G__20536 = c__4461__auto___20534;
var G__20537 = cljs.core.count.call(null,c__4461__auto___20534);
var G__20538 = (0);
seq__20357_20519 = G__20535;
chunk__20358_20520 = G__20536;
count__20359_20521 = G__20537;
i__20360_20522 = G__20538;
continue;
} else {
var map__20363_20539 = cljs.core.first.call(null,seq__20357_20533__$1);
var map__20363_20540__$1 = (((((!((map__20363_20539 == null))))?(((((map__20363_20539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20363_20539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20363_20539):map__20363_20539);
var gline_20541 = cljs.core.get.call(null,map__20363_20540__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_20542 = cljs.core.get.call(null,map__20363_20540__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_20543 = cljs.core.get.call(null,map__20363_20540__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20541], null),cljs.core.fnil.call(null,((function (seq__20357_20519,chunk__20358_20520,count__20359_20521,i__20360_20522,seq__20339_20469,chunk__20340_20470,count__20341_20471,i__20342_20472,seq__20303_20365,chunk__20304_20366,count__20305_20367,i__20306_20368,map__20363_20539,map__20363_20540__$1,gline_20541,gcol_20542,name_20543,seq__20357_20533__$1,temp__5735__auto___20532__$2,vec__20354_20516,column_20517,column_info_20518,seq__20339_20510__$1,temp__5735__auto___20509__$1,vec__20336_20466,line_20467,columns_20468,seq__20303_20460__$1,temp__5735__auto___20459,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20542], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_20467,new cljs.core.Keyword(null,"col","col",-1959363084),column_20517,new cljs.core.Keyword(null,"name","name",1843675177),name_20543], null));
});})(seq__20357_20519,chunk__20358_20520,count__20359_20521,i__20360_20522,seq__20339_20469,chunk__20340_20470,count__20341_20471,i__20342_20472,seq__20303_20365,chunk__20304_20366,count__20305_20367,i__20306_20368,map__20363_20539,map__20363_20540__$1,gline_20541,gcol_20542,name_20543,seq__20357_20533__$1,temp__5735__auto___20532__$2,vec__20354_20516,column_20517,column_info_20518,seq__20339_20510__$1,temp__5735__auto___20509__$1,vec__20336_20466,line_20467,columns_20468,seq__20303_20460__$1,temp__5735__auto___20459,inverted))
,cljs.core.sorted_map.call(null)));


var G__20544 = cljs.core.next.call(null,seq__20357_20533__$1);
var G__20545 = null;
var G__20546 = (0);
var G__20547 = (0);
seq__20357_20519 = G__20544;
chunk__20358_20520 = G__20545;
count__20359_20521 = G__20546;
i__20360_20522 = G__20547;
continue;
}
} else {
}
}
break;
}


var G__20548 = cljs.core.next.call(null,seq__20339_20510__$1);
var G__20549 = null;
var G__20550 = (0);
var G__20551 = (0);
seq__20339_20469 = G__20548;
chunk__20340_20470 = G__20549;
count__20341_20471 = G__20550;
i__20342_20472 = G__20551;
continue;
}
} else {
}
}
break;
}


var G__20552 = cljs.core.next.call(null,seq__20303_20460__$1);
var G__20553 = null;
var G__20554 = (0);
var G__20555 = (0);
seq__20303_20365 = G__20552;
chunk__20304_20366 = G__20553;
count__20305_20367 = G__20554;
i__20306_20368 = G__20555;
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
