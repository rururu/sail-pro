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
return cljs.core.reduce.call(null,(function (m,p__4875){
var vec__4876 = p__4875;
var i = cljs.core.nth.call(null,vec__4876,(0),null);
var v = cljs.core.nth.call(null,vec__4876,(1),null);
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
var vec__4879 = seg;
var gcol = cljs.core.nth.call(null,vec__4879,(0),null);
var source = cljs.core.nth.call(null,vec__4879,(1),null);
var line = cljs.core.nth.call(null,vec__4879,(2),null);
var col = cljs.core.nth.call(null,vec__4879,(3),null);
var name = cljs.core.nth.call(null,vec__4879,(4),null);
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
var vec__4882 = seg;
var gcol = cljs.core.nth.call(null,vec__4882,(0),null);
var source = cljs.core.nth.call(null,vec__4882,(1),null);
var line = cljs.core.nth.call(null,vec__4882,(2),null);
var col = cljs.core.nth.call(null,vec__4882,(3),null);
var name = cljs.core.nth.call(null,vec__4882,(4),null);
var vec__4885 = relseg;
var rgcol = cljs.core.nth.call(null,vec__4885,(0),null);
var rsource = cljs.core.nth.call(null,vec__4885,(1),null);
var rline = cljs.core.nth.call(null,vec__4885,(2),null);
var rcol = cljs.core.nth.call(null,vec__4885,(3),null);
var rname = cljs.core.nth.call(null,vec__4885,(4),null);
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
var map__4888 = segmap;
var map__4888__$1 = (((((!((map__4888 == null))))?(((((map__4888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4888):map__4888);
var gcol = cljs.core.get.call(null,map__4888__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__4888__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__4888__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__4888__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__4888__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__4888,map__4888__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__4888,map__4888__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__4888,map__4888__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__4888,map__4888__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__4888,map__4888__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__4888,map__4888__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__4891 = arguments.length;
switch (G__4891) {
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
var vec__4892 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__4896 = cljs.core.next.call(null,segs__$1);
var G__4897 = nrelseg;
var G__4898 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__4896;
relseg__$1 = G__4897;
result__$1 = G__4898;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__4892,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__4892,(1),null);
var G__4899 = (gline + (1));
var G__4900 = cljs.core.next.call(null,lines__$1);
var G__4901 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__4902 = result__$1;
gline = G__4899;
lines__$1 = G__4900;
relseg = G__4901;
result = G__4902;
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
var map__4904 = segmap;
var map__4904__$1 = (((((!((map__4904 == null))))?(((((map__4904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4904):map__4904);
var gcol = cljs.core.get.call(null,map__4904__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__4904__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__4904__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__4904__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__4904__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__4904,map__4904__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__4904,map__4904__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__4903_SHARP_){
return cljs.core.conj.call(null,p1__4903_SHARP_,d__$1);
});})(map__4904,map__4904__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__4904,map__4904__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__4907 = arguments.length;
switch (G__4907) {
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
var vec__4908 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__4912 = cljs.core.next.call(null,segs__$1);
var G__4913 = nrelseg;
var G__4914 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__4912;
relseg__$1 = G__4913;
result__$1 = G__4914;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__4908,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__4908,(1),null);
var G__4915 = (gline + (1));
var G__4916 = cljs.core.next.call(null,lines__$1);
var G__4917 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__4918 = result__$1;
gline = G__4915;
lines__$1 = G__4916;
relseg = G__4917;
result = G__4918;
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
return (function (p__4919){
var vec__4920 = p__4919;
var _ = cljs.core.nth.call(null,vec__4920,(0),null);
var source = cljs.core.nth.call(null,vec__4920,(1),null);
var line = cljs.core.nth.call(null,vec__4920,(2),null);
var col = cljs.core.nth.call(null,vec__4920,(3),null);
var name = cljs.core.nth.call(null,vec__4920,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__4923){
var vec__4924 = p__4923;
var gcol = cljs.core.nth.call(null,vec__4924,(0),null);
var sidx = cljs.core.nth.call(null,vec__4924,(1),null);
var line = cljs.core.nth.call(null,vec__4924,(2),null);
var col = cljs.core.nth.call(null,vec__4924,(3),null);
var name = cljs.core.nth.call(null,vec__4924,(4),null);
var seg = vec__4924;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__4924,gcol,sidx,line,col,name,seg,relseg){
return (function (p__4927){
var vec__4928 = p__4927;
var _ = cljs.core.nth.call(null,vec__4928,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__4928,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__4928,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__4928,(3),null);
var lname = cljs.core.nth.call(null,vec__4928,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__4924,gcol,sidx,line,col,name,seg,relseg))
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
var seq__4934 = cljs.core.seq.call(null,infos);
var chunk__4935 = null;
var count__4936 = (0);
var i__4937 = (0);
while(true){
if((i__4937 < count__4936)){
var info = cljs.core._nth.call(null,chunk__4935,i__4937);
var segv_5016 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_5017 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_5018 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_5017 > (lc_5018 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__4934,chunk__4935,count__4936,i__4937,segv_5016,gline_5017,lc_5018,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_5017 - (lc_5018 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_5016], null));
});})(seq__4934,chunk__4935,count__4936,i__4937,segv_5016,gline_5017,lc_5018,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__4934,chunk__4935,count__4936,i__4937,segv_5016,gline_5017,lc_5018,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5017], null),cljs.core.conj,segv_5016);
});})(seq__4934,chunk__4935,count__4936,i__4937,segv_5016,gline_5017,lc_5018,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__5019 = seq__4934;
var G__5020 = chunk__4935;
var G__5021 = count__4936;
var G__5022 = (i__4937 + (1));
seq__4934 = G__5019;
chunk__4935 = G__5020;
count__4936 = G__5021;
i__4937 = G__5022;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__4934);
if(temp__5735__auto__){
var seq__4934__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4934__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__4934__$1);
var G__5023 = cljs.core.chunk_rest.call(null,seq__4934__$1);
var G__5024 = c__4461__auto__;
var G__5025 = cljs.core.count.call(null,c__4461__auto__);
var G__5026 = (0);
seq__4934 = G__5023;
chunk__4935 = G__5024;
count__4936 = G__5025;
i__4937 = G__5026;
continue;
} else {
var info = cljs.core.first.call(null,seq__4934__$1);
var segv_5027 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_5028 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_5029 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_5028 > (lc_5029 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__4934,chunk__4935,count__4936,i__4937,segv_5027,gline_5028,lc_5029,info,seq__4934__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_5028 - (lc_5029 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_5027], null));
});})(seq__4934,chunk__4935,count__4936,i__4937,segv_5027,gline_5028,lc_5029,info,seq__4934__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__4934,chunk__4935,count__4936,i__4937,segv_5027,gline_5028,lc_5029,info,seq__4934__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5028], null),cljs.core.conj,segv_5027);
});})(seq__4934,chunk__4935,count__4936,i__4937,segv_5027,gline_5028,lc_5029,info,seq__4934__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__5030 = cljs.core.next.call(null,seq__4934__$1);
var G__5031 = null;
var G__5032 = (0);
var G__5033 = (0);
seq__4934 = G__5030;
chunk__4935 = G__5031;
count__4936 = G__5032;
i__4937 = G__5033;
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
var seq__4938_5034 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__4939_5035 = null;
var count__4940_5036 = (0);
var i__4941_5037 = (0);
while(true){
if((i__4941_5037 < count__4940_5036)){
var vec__4942_5038 = cljs.core._nth.call(null,chunk__4939_5035,i__4941_5037);
var source_idx_5039 = cljs.core.nth.call(null,vec__4942_5038,(0),null);
var vec__4945_5040 = cljs.core.nth.call(null,vec__4942_5038,(1),null);
var __5041 = cljs.core.nth.call(null,vec__4945_5040,(0),null);
var lines_5042__$1 = cljs.core.nth.call(null,vec__4945_5040,(1),null);
var seq__4948_5043 = cljs.core.seq.call(null,lines_5042__$1);
var chunk__4949_5044 = null;
var count__4950_5045 = (0);
var i__4951_5046 = (0);
while(true){
if((i__4951_5046 < count__4950_5045)){
var vec__4952_5047 = cljs.core._nth.call(null,chunk__4949_5044,i__4951_5046);
var line_5048 = cljs.core.nth.call(null,vec__4952_5047,(0),null);
var cols_5049 = cljs.core.nth.call(null,vec__4952_5047,(1),null);
var seq__4955_5050 = cljs.core.seq.call(null,cols_5049);
var chunk__4956_5051 = null;
var count__4957_5052 = (0);
var i__4958_5053 = (0);
while(true){
if((i__4958_5053 < count__4957_5052)){
var vec__4959_5054 = cljs.core._nth.call(null,chunk__4956_5051,i__4958_5053);
var col_5055 = cljs.core.nth.call(null,vec__4959_5054,(0),null);
var infos_5056 = cljs.core.nth.call(null,vec__4959_5054,(1),null);
encode_cols.call(null,infos_5056,source_idx_5039,line_5048,col_5055);


var G__5057 = seq__4955_5050;
var G__5058 = chunk__4956_5051;
var G__5059 = count__4957_5052;
var G__5060 = (i__4958_5053 + (1));
seq__4955_5050 = G__5057;
chunk__4956_5051 = G__5058;
count__4957_5052 = G__5059;
i__4958_5053 = G__5060;
continue;
} else {
var temp__5735__auto___5061 = cljs.core.seq.call(null,seq__4955_5050);
if(temp__5735__auto___5061){
var seq__4955_5062__$1 = temp__5735__auto___5061;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4955_5062__$1)){
var c__4461__auto___5063 = cljs.core.chunk_first.call(null,seq__4955_5062__$1);
var G__5064 = cljs.core.chunk_rest.call(null,seq__4955_5062__$1);
var G__5065 = c__4461__auto___5063;
var G__5066 = cljs.core.count.call(null,c__4461__auto___5063);
var G__5067 = (0);
seq__4955_5050 = G__5064;
chunk__4956_5051 = G__5065;
count__4957_5052 = G__5066;
i__4958_5053 = G__5067;
continue;
} else {
var vec__4962_5068 = cljs.core.first.call(null,seq__4955_5062__$1);
var col_5069 = cljs.core.nth.call(null,vec__4962_5068,(0),null);
var infos_5070 = cljs.core.nth.call(null,vec__4962_5068,(1),null);
encode_cols.call(null,infos_5070,source_idx_5039,line_5048,col_5069);


var G__5071 = cljs.core.next.call(null,seq__4955_5062__$1);
var G__5072 = null;
var G__5073 = (0);
var G__5074 = (0);
seq__4955_5050 = G__5071;
chunk__4956_5051 = G__5072;
count__4957_5052 = G__5073;
i__4958_5053 = G__5074;
continue;
}
} else {
}
}
break;
}


var G__5075 = seq__4948_5043;
var G__5076 = chunk__4949_5044;
var G__5077 = count__4950_5045;
var G__5078 = (i__4951_5046 + (1));
seq__4948_5043 = G__5075;
chunk__4949_5044 = G__5076;
count__4950_5045 = G__5077;
i__4951_5046 = G__5078;
continue;
} else {
var temp__5735__auto___5079 = cljs.core.seq.call(null,seq__4948_5043);
if(temp__5735__auto___5079){
var seq__4948_5080__$1 = temp__5735__auto___5079;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4948_5080__$1)){
var c__4461__auto___5081 = cljs.core.chunk_first.call(null,seq__4948_5080__$1);
var G__5082 = cljs.core.chunk_rest.call(null,seq__4948_5080__$1);
var G__5083 = c__4461__auto___5081;
var G__5084 = cljs.core.count.call(null,c__4461__auto___5081);
var G__5085 = (0);
seq__4948_5043 = G__5082;
chunk__4949_5044 = G__5083;
count__4950_5045 = G__5084;
i__4951_5046 = G__5085;
continue;
} else {
var vec__4965_5086 = cljs.core.first.call(null,seq__4948_5080__$1);
var line_5087 = cljs.core.nth.call(null,vec__4965_5086,(0),null);
var cols_5088 = cljs.core.nth.call(null,vec__4965_5086,(1),null);
var seq__4968_5089 = cljs.core.seq.call(null,cols_5088);
var chunk__4969_5090 = null;
var count__4970_5091 = (0);
var i__4971_5092 = (0);
while(true){
if((i__4971_5092 < count__4970_5091)){
var vec__4972_5093 = cljs.core._nth.call(null,chunk__4969_5090,i__4971_5092);
var col_5094 = cljs.core.nth.call(null,vec__4972_5093,(0),null);
var infos_5095 = cljs.core.nth.call(null,vec__4972_5093,(1),null);
encode_cols.call(null,infos_5095,source_idx_5039,line_5087,col_5094);


var G__5096 = seq__4968_5089;
var G__5097 = chunk__4969_5090;
var G__5098 = count__4970_5091;
var G__5099 = (i__4971_5092 + (1));
seq__4968_5089 = G__5096;
chunk__4969_5090 = G__5097;
count__4970_5091 = G__5098;
i__4971_5092 = G__5099;
continue;
} else {
var temp__5735__auto___5100__$1 = cljs.core.seq.call(null,seq__4968_5089);
if(temp__5735__auto___5100__$1){
var seq__4968_5101__$1 = temp__5735__auto___5100__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4968_5101__$1)){
var c__4461__auto___5102 = cljs.core.chunk_first.call(null,seq__4968_5101__$1);
var G__5103 = cljs.core.chunk_rest.call(null,seq__4968_5101__$1);
var G__5104 = c__4461__auto___5102;
var G__5105 = cljs.core.count.call(null,c__4461__auto___5102);
var G__5106 = (0);
seq__4968_5089 = G__5103;
chunk__4969_5090 = G__5104;
count__4970_5091 = G__5105;
i__4971_5092 = G__5106;
continue;
} else {
var vec__4975_5107 = cljs.core.first.call(null,seq__4968_5101__$1);
var col_5108 = cljs.core.nth.call(null,vec__4975_5107,(0),null);
var infos_5109 = cljs.core.nth.call(null,vec__4975_5107,(1),null);
encode_cols.call(null,infos_5109,source_idx_5039,line_5087,col_5108);


var G__5110 = cljs.core.next.call(null,seq__4968_5101__$1);
var G__5111 = null;
var G__5112 = (0);
var G__5113 = (0);
seq__4968_5089 = G__5110;
chunk__4969_5090 = G__5111;
count__4970_5091 = G__5112;
i__4971_5092 = G__5113;
continue;
}
} else {
}
}
break;
}


var G__5114 = cljs.core.next.call(null,seq__4948_5080__$1);
var G__5115 = null;
var G__5116 = (0);
var G__5117 = (0);
seq__4948_5043 = G__5114;
chunk__4949_5044 = G__5115;
count__4950_5045 = G__5116;
i__4951_5046 = G__5117;
continue;
}
} else {
}
}
break;
}


var G__5118 = seq__4938_5034;
var G__5119 = chunk__4939_5035;
var G__5120 = count__4940_5036;
var G__5121 = (i__4941_5037 + (1));
seq__4938_5034 = G__5118;
chunk__4939_5035 = G__5119;
count__4940_5036 = G__5120;
i__4941_5037 = G__5121;
continue;
} else {
var temp__5735__auto___5122 = cljs.core.seq.call(null,seq__4938_5034);
if(temp__5735__auto___5122){
var seq__4938_5123__$1 = temp__5735__auto___5122;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4938_5123__$1)){
var c__4461__auto___5124 = cljs.core.chunk_first.call(null,seq__4938_5123__$1);
var G__5125 = cljs.core.chunk_rest.call(null,seq__4938_5123__$1);
var G__5126 = c__4461__auto___5124;
var G__5127 = cljs.core.count.call(null,c__4461__auto___5124);
var G__5128 = (0);
seq__4938_5034 = G__5125;
chunk__4939_5035 = G__5126;
count__4940_5036 = G__5127;
i__4941_5037 = G__5128;
continue;
} else {
var vec__4978_5129 = cljs.core.first.call(null,seq__4938_5123__$1);
var source_idx_5130 = cljs.core.nth.call(null,vec__4978_5129,(0),null);
var vec__4981_5131 = cljs.core.nth.call(null,vec__4978_5129,(1),null);
var __5132 = cljs.core.nth.call(null,vec__4981_5131,(0),null);
var lines_5133__$1 = cljs.core.nth.call(null,vec__4981_5131,(1),null);
var seq__4984_5134 = cljs.core.seq.call(null,lines_5133__$1);
var chunk__4985_5135 = null;
var count__4986_5136 = (0);
var i__4987_5137 = (0);
while(true){
if((i__4987_5137 < count__4986_5136)){
var vec__4988_5138 = cljs.core._nth.call(null,chunk__4985_5135,i__4987_5137);
var line_5139 = cljs.core.nth.call(null,vec__4988_5138,(0),null);
var cols_5140 = cljs.core.nth.call(null,vec__4988_5138,(1),null);
var seq__4991_5141 = cljs.core.seq.call(null,cols_5140);
var chunk__4992_5142 = null;
var count__4993_5143 = (0);
var i__4994_5144 = (0);
while(true){
if((i__4994_5144 < count__4993_5143)){
var vec__4995_5145 = cljs.core._nth.call(null,chunk__4992_5142,i__4994_5144);
var col_5146 = cljs.core.nth.call(null,vec__4995_5145,(0),null);
var infos_5147 = cljs.core.nth.call(null,vec__4995_5145,(1),null);
encode_cols.call(null,infos_5147,source_idx_5130,line_5139,col_5146);


var G__5148 = seq__4991_5141;
var G__5149 = chunk__4992_5142;
var G__5150 = count__4993_5143;
var G__5151 = (i__4994_5144 + (1));
seq__4991_5141 = G__5148;
chunk__4992_5142 = G__5149;
count__4993_5143 = G__5150;
i__4994_5144 = G__5151;
continue;
} else {
var temp__5735__auto___5152__$1 = cljs.core.seq.call(null,seq__4991_5141);
if(temp__5735__auto___5152__$1){
var seq__4991_5153__$1 = temp__5735__auto___5152__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4991_5153__$1)){
var c__4461__auto___5154 = cljs.core.chunk_first.call(null,seq__4991_5153__$1);
var G__5155 = cljs.core.chunk_rest.call(null,seq__4991_5153__$1);
var G__5156 = c__4461__auto___5154;
var G__5157 = cljs.core.count.call(null,c__4461__auto___5154);
var G__5158 = (0);
seq__4991_5141 = G__5155;
chunk__4992_5142 = G__5156;
count__4993_5143 = G__5157;
i__4994_5144 = G__5158;
continue;
} else {
var vec__4998_5159 = cljs.core.first.call(null,seq__4991_5153__$1);
var col_5160 = cljs.core.nth.call(null,vec__4998_5159,(0),null);
var infos_5161 = cljs.core.nth.call(null,vec__4998_5159,(1),null);
encode_cols.call(null,infos_5161,source_idx_5130,line_5139,col_5160);


var G__5162 = cljs.core.next.call(null,seq__4991_5153__$1);
var G__5163 = null;
var G__5164 = (0);
var G__5165 = (0);
seq__4991_5141 = G__5162;
chunk__4992_5142 = G__5163;
count__4993_5143 = G__5164;
i__4994_5144 = G__5165;
continue;
}
} else {
}
}
break;
}


var G__5166 = seq__4984_5134;
var G__5167 = chunk__4985_5135;
var G__5168 = count__4986_5136;
var G__5169 = (i__4987_5137 + (1));
seq__4984_5134 = G__5166;
chunk__4985_5135 = G__5167;
count__4986_5136 = G__5168;
i__4987_5137 = G__5169;
continue;
} else {
var temp__5735__auto___5170__$1 = cljs.core.seq.call(null,seq__4984_5134);
if(temp__5735__auto___5170__$1){
var seq__4984_5171__$1 = temp__5735__auto___5170__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4984_5171__$1)){
var c__4461__auto___5172 = cljs.core.chunk_first.call(null,seq__4984_5171__$1);
var G__5173 = cljs.core.chunk_rest.call(null,seq__4984_5171__$1);
var G__5174 = c__4461__auto___5172;
var G__5175 = cljs.core.count.call(null,c__4461__auto___5172);
var G__5176 = (0);
seq__4984_5134 = G__5173;
chunk__4985_5135 = G__5174;
count__4986_5136 = G__5175;
i__4987_5137 = G__5176;
continue;
} else {
var vec__5001_5177 = cljs.core.first.call(null,seq__4984_5171__$1);
var line_5178 = cljs.core.nth.call(null,vec__5001_5177,(0),null);
var cols_5179 = cljs.core.nth.call(null,vec__5001_5177,(1),null);
var seq__5004_5180 = cljs.core.seq.call(null,cols_5179);
var chunk__5005_5181 = null;
var count__5006_5182 = (0);
var i__5007_5183 = (0);
while(true){
if((i__5007_5183 < count__5006_5182)){
var vec__5008_5184 = cljs.core._nth.call(null,chunk__5005_5181,i__5007_5183);
var col_5185 = cljs.core.nth.call(null,vec__5008_5184,(0),null);
var infos_5186 = cljs.core.nth.call(null,vec__5008_5184,(1),null);
encode_cols.call(null,infos_5186,source_idx_5130,line_5178,col_5185);


var G__5187 = seq__5004_5180;
var G__5188 = chunk__5005_5181;
var G__5189 = count__5006_5182;
var G__5190 = (i__5007_5183 + (1));
seq__5004_5180 = G__5187;
chunk__5005_5181 = G__5188;
count__5006_5182 = G__5189;
i__5007_5183 = G__5190;
continue;
} else {
var temp__5735__auto___5191__$2 = cljs.core.seq.call(null,seq__5004_5180);
if(temp__5735__auto___5191__$2){
var seq__5004_5192__$1 = temp__5735__auto___5191__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5004_5192__$1)){
var c__4461__auto___5193 = cljs.core.chunk_first.call(null,seq__5004_5192__$1);
var G__5194 = cljs.core.chunk_rest.call(null,seq__5004_5192__$1);
var G__5195 = c__4461__auto___5193;
var G__5196 = cljs.core.count.call(null,c__4461__auto___5193);
var G__5197 = (0);
seq__5004_5180 = G__5194;
chunk__5005_5181 = G__5195;
count__5006_5182 = G__5196;
i__5007_5183 = G__5197;
continue;
} else {
var vec__5011_5198 = cljs.core.first.call(null,seq__5004_5192__$1);
var col_5199 = cljs.core.nth.call(null,vec__5011_5198,(0),null);
var infos_5200 = cljs.core.nth.call(null,vec__5011_5198,(1),null);
encode_cols.call(null,infos_5200,source_idx_5130,line_5178,col_5199);


var G__5201 = cljs.core.next.call(null,seq__5004_5192__$1);
var G__5202 = null;
var G__5203 = (0);
var G__5204 = (0);
seq__5004_5180 = G__5201;
chunk__5005_5181 = G__5202;
count__5006_5182 = G__5203;
i__5007_5183 = G__5204;
continue;
}
} else {
}
}
break;
}


var G__5205 = cljs.core.next.call(null,seq__4984_5171__$1);
var G__5206 = null;
var G__5207 = (0);
var G__5208 = (0);
seq__4984_5134 = G__5205;
chunk__4985_5135 = G__5206;
count__4986_5136 = G__5207;
i__4987_5137 = G__5208;
continue;
}
} else {
}
}
break;
}


var G__5209 = cljs.core.next.call(null,seq__4938_5123__$1);
var G__5210 = null;
var G__5211 = (0);
var G__5212 = (0);
seq__4938_5034 = G__5209;
chunk__4939_5035 = G__5210;
count__4940_5036 = G__5211;
i__4941_5037 = G__5212;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__5014 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__4931_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__4931_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__4932_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__4932_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__4933_SHARP_){
return clojure.string.join.call(null,",",p1__4933_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__5015 = G__5014;
goog.object.set(G__5015,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__5015;
} else {
return G__5014;
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
var vec__5213 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__5213,(0),null);
var col_map = cljs.core.nth.call(null,vec__5213,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__5216 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__5216,(0),null);
var infos = cljs.core.nth.call(null,vec__5216,(1),null);
var G__5222 = cljs.core.next.call(null,col_map_seq);
var G__5223 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__5216,col,infos,vec__5213,line,col_map){
return (function (v,p__5219){
var map__5220 = p__5219;
var map__5220__$1 = (((((!((map__5220 == null))))?(((((map__5220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5220):map__5220);
var gline = cljs.core.get.call(null,map__5220__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__5220__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__5216,col,infos,vec__5213,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__5222;
new_cols = G__5223;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__5224 = cljs.core.next.call(null,line_map_seq);
var G__5225 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__5224;
new_lines = G__5225;
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
var seq__5226_5288 = cljs.core.seq.call(null,reverse_map);
var chunk__5227_5289 = null;
var count__5228_5290 = (0);
var i__5229_5291 = (0);
while(true){
if((i__5229_5291 < count__5228_5290)){
var vec__5230_5292 = cljs.core._nth.call(null,chunk__5227_5289,i__5229_5291);
var line_5293 = cljs.core.nth.call(null,vec__5230_5292,(0),null);
var columns_5294 = cljs.core.nth.call(null,vec__5230_5292,(1),null);
var seq__5233_5295 = cljs.core.seq.call(null,columns_5294);
var chunk__5234_5296 = null;
var count__5235_5297 = (0);
var i__5236_5298 = (0);
while(true){
if((i__5236_5298 < count__5235_5297)){
var vec__5237_5299 = cljs.core._nth.call(null,chunk__5234_5296,i__5236_5298);
var column_5300 = cljs.core.nth.call(null,vec__5237_5299,(0),null);
var column_info_5301 = cljs.core.nth.call(null,vec__5237_5299,(1),null);
var seq__5240_5302 = cljs.core.seq.call(null,column_info_5301);
var chunk__5241_5303 = null;
var count__5242_5304 = (0);
var i__5243_5305 = (0);
while(true){
if((i__5243_5305 < count__5242_5304)){
var map__5244_5306 = cljs.core._nth.call(null,chunk__5241_5303,i__5243_5305);
var map__5244_5307__$1 = (((((!((map__5244_5306 == null))))?(((((map__5244_5306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5244_5306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5244_5306):map__5244_5306);
var gline_5308 = cljs.core.get.call(null,map__5244_5307__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5309 = cljs.core.get.call(null,map__5244_5307__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5310 = cljs.core.get.call(null,map__5244_5307__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5308], null),cljs.core.fnil.call(null,((function (seq__5240_5302,chunk__5241_5303,count__5242_5304,i__5243_5305,seq__5233_5295,chunk__5234_5296,count__5235_5297,i__5236_5298,seq__5226_5288,chunk__5227_5289,count__5228_5290,i__5229_5291,map__5244_5306,map__5244_5307__$1,gline_5308,gcol_5309,name_5310,vec__5237_5299,column_5300,column_info_5301,vec__5230_5292,line_5293,columns_5294,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5309], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5293,new cljs.core.Keyword(null,"col","col",-1959363084),column_5300,new cljs.core.Keyword(null,"name","name",1843675177),name_5310], null));
});})(seq__5240_5302,chunk__5241_5303,count__5242_5304,i__5243_5305,seq__5233_5295,chunk__5234_5296,count__5235_5297,i__5236_5298,seq__5226_5288,chunk__5227_5289,count__5228_5290,i__5229_5291,map__5244_5306,map__5244_5307__$1,gline_5308,gcol_5309,name_5310,vec__5237_5299,column_5300,column_info_5301,vec__5230_5292,line_5293,columns_5294,inverted))
,cljs.core.sorted_map.call(null)));


var G__5311 = seq__5240_5302;
var G__5312 = chunk__5241_5303;
var G__5313 = count__5242_5304;
var G__5314 = (i__5243_5305 + (1));
seq__5240_5302 = G__5311;
chunk__5241_5303 = G__5312;
count__5242_5304 = G__5313;
i__5243_5305 = G__5314;
continue;
} else {
var temp__5735__auto___5315 = cljs.core.seq.call(null,seq__5240_5302);
if(temp__5735__auto___5315){
var seq__5240_5316__$1 = temp__5735__auto___5315;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5240_5316__$1)){
var c__4461__auto___5317 = cljs.core.chunk_first.call(null,seq__5240_5316__$1);
var G__5318 = cljs.core.chunk_rest.call(null,seq__5240_5316__$1);
var G__5319 = c__4461__auto___5317;
var G__5320 = cljs.core.count.call(null,c__4461__auto___5317);
var G__5321 = (0);
seq__5240_5302 = G__5318;
chunk__5241_5303 = G__5319;
count__5242_5304 = G__5320;
i__5243_5305 = G__5321;
continue;
} else {
var map__5246_5322 = cljs.core.first.call(null,seq__5240_5316__$1);
var map__5246_5323__$1 = (((((!((map__5246_5322 == null))))?(((((map__5246_5322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5246_5322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5246_5322):map__5246_5322);
var gline_5324 = cljs.core.get.call(null,map__5246_5323__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5325 = cljs.core.get.call(null,map__5246_5323__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5326 = cljs.core.get.call(null,map__5246_5323__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5324], null),cljs.core.fnil.call(null,((function (seq__5240_5302,chunk__5241_5303,count__5242_5304,i__5243_5305,seq__5233_5295,chunk__5234_5296,count__5235_5297,i__5236_5298,seq__5226_5288,chunk__5227_5289,count__5228_5290,i__5229_5291,map__5246_5322,map__5246_5323__$1,gline_5324,gcol_5325,name_5326,seq__5240_5316__$1,temp__5735__auto___5315,vec__5237_5299,column_5300,column_info_5301,vec__5230_5292,line_5293,columns_5294,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5325], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5293,new cljs.core.Keyword(null,"col","col",-1959363084),column_5300,new cljs.core.Keyword(null,"name","name",1843675177),name_5326], null));
});})(seq__5240_5302,chunk__5241_5303,count__5242_5304,i__5243_5305,seq__5233_5295,chunk__5234_5296,count__5235_5297,i__5236_5298,seq__5226_5288,chunk__5227_5289,count__5228_5290,i__5229_5291,map__5246_5322,map__5246_5323__$1,gline_5324,gcol_5325,name_5326,seq__5240_5316__$1,temp__5735__auto___5315,vec__5237_5299,column_5300,column_info_5301,vec__5230_5292,line_5293,columns_5294,inverted))
,cljs.core.sorted_map.call(null)));


var G__5327 = cljs.core.next.call(null,seq__5240_5316__$1);
var G__5328 = null;
var G__5329 = (0);
var G__5330 = (0);
seq__5240_5302 = G__5327;
chunk__5241_5303 = G__5328;
count__5242_5304 = G__5329;
i__5243_5305 = G__5330;
continue;
}
} else {
}
}
break;
}


var G__5331 = seq__5233_5295;
var G__5332 = chunk__5234_5296;
var G__5333 = count__5235_5297;
var G__5334 = (i__5236_5298 + (1));
seq__5233_5295 = G__5331;
chunk__5234_5296 = G__5332;
count__5235_5297 = G__5333;
i__5236_5298 = G__5334;
continue;
} else {
var temp__5735__auto___5335 = cljs.core.seq.call(null,seq__5233_5295);
if(temp__5735__auto___5335){
var seq__5233_5336__$1 = temp__5735__auto___5335;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5233_5336__$1)){
var c__4461__auto___5337 = cljs.core.chunk_first.call(null,seq__5233_5336__$1);
var G__5338 = cljs.core.chunk_rest.call(null,seq__5233_5336__$1);
var G__5339 = c__4461__auto___5337;
var G__5340 = cljs.core.count.call(null,c__4461__auto___5337);
var G__5341 = (0);
seq__5233_5295 = G__5338;
chunk__5234_5296 = G__5339;
count__5235_5297 = G__5340;
i__5236_5298 = G__5341;
continue;
} else {
var vec__5248_5342 = cljs.core.first.call(null,seq__5233_5336__$1);
var column_5343 = cljs.core.nth.call(null,vec__5248_5342,(0),null);
var column_info_5344 = cljs.core.nth.call(null,vec__5248_5342,(1),null);
var seq__5251_5345 = cljs.core.seq.call(null,column_info_5344);
var chunk__5252_5346 = null;
var count__5253_5347 = (0);
var i__5254_5348 = (0);
while(true){
if((i__5254_5348 < count__5253_5347)){
var map__5255_5349 = cljs.core._nth.call(null,chunk__5252_5346,i__5254_5348);
var map__5255_5350__$1 = (((((!((map__5255_5349 == null))))?(((((map__5255_5349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5255_5349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5255_5349):map__5255_5349);
var gline_5351 = cljs.core.get.call(null,map__5255_5350__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5352 = cljs.core.get.call(null,map__5255_5350__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5353 = cljs.core.get.call(null,map__5255_5350__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5351], null),cljs.core.fnil.call(null,((function (seq__5251_5345,chunk__5252_5346,count__5253_5347,i__5254_5348,seq__5233_5295,chunk__5234_5296,count__5235_5297,i__5236_5298,seq__5226_5288,chunk__5227_5289,count__5228_5290,i__5229_5291,map__5255_5349,map__5255_5350__$1,gline_5351,gcol_5352,name_5353,vec__5248_5342,column_5343,column_info_5344,seq__5233_5336__$1,temp__5735__auto___5335,vec__5230_5292,line_5293,columns_5294,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5352], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5293,new cljs.core.Keyword(null,"col","col",-1959363084),column_5343,new cljs.core.Keyword(null,"name","name",1843675177),name_5353], null));
});})(seq__5251_5345,chunk__5252_5346,count__5253_5347,i__5254_5348,seq__5233_5295,chunk__5234_5296,count__5235_5297,i__5236_5298,seq__5226_5288,chunk__5227_5289,count__5228_5290,i__5229_5291,map__5255_5349,map__5255_5350__$1,gline_5351,gcol_5352,name_5353,vec__5248_5342,column_5343,column_info_5344,seq__5233_5336__$1,temp__5735__auto___5335,vec__5230_5292,line_5293,columns_5294,inverted))
,cljs.core.sorted_map.call(null)));


var G__5354 = seq__5251_5345;
var G__5355 = chunk__5252_5346;
var G__5356 = count__5253_5347;
var G__5357 = (i__5254_5348 + (1));
seq__5251_5345 = G__5354;
chunk__5252_5346 = G__5355;
count__5253_5347 = G__5356;
i__5254_5348 = G__5357;
continue;
} else {
var temp__5735__auto___5358__$1 = cljs.core.seq.call(null,seq__5251_5345);
if(temp__5735__auto___5358__$1){
var seq__5251_5359__$1 = temp__5735__auto___5358__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5251_5359__$1)){
var c__4461__auto___5360 = cljs.core.chunk_first.call(null,seq__5251_5359__$1);
var G__5361 = cljs.core.chunk_rest.call(null,seq__5251_5359__$1);
var G__5362 = c__4461__auto___5360;
var G__5363 = cljs.core.count.call(null,c__4461__auto___5360);
var G__5364 = (0);
seq__5251_5345 = G__5361;
chunk__5252_5346 = G__5362;
count__5253_5347 = G__5363;
i__5254_5348 = G__5364;
continue;
} else {
var map__5257_5365 = cljs.core.first.call(null,seq__5251_5359__$1);
var map__5257_5366__$1 = (((((!((map__5257_5365 == null))))?(((((map__5257_5365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5257_5365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5257_5365):map__5257_5365);
var gline_5367 = cljs.core.get.call(null,map__5257_5366__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5368 = cljs.core.get.call(null,map__5257_5366__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5369 = cljs.core.get.call(null,map__5257_5366__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5367], null),cljs.core.fnil.call(null,((function (seq__5251_5345,chunk__5252_5346,count__5253_5347,i__5254_5348,seq__5233_5295,chunk__5234_5296,count__5235_5297,i__5236_5298,seq__5226_5288,chunk__5227_5289,count__5228_5290,i__5229_5291,map__5257_5365,map__5257_5366__$1,gline_5367,gcol_5368,name_5369,seq__5251_5359__$1,temp__5735__auto___5358__$1,vec__5248_5342,column_5343,column_info_5344,seq__5233_5336__$1,temp__5735__auto___5335,vec__5230_5292,line_5293,columns_5294,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5368], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5293,new cljs.core.Keyword(null,"col","col",-1959363084),column_5343,new cljs.core.Keyword(null,"name","name",1843675177),name_5369], null));
});})(seq__5251_5345,chunk__5252_5346,count__5253_5347,i__5254_5348,seq__5233_5295,chunk__5234_5296,count__5235_5297,i__5236_5298,seq__5226_5288,chunk__5227_5289,count__5228_5290,i__5229_5291,map__5257_5365,map__5257_5366__$1,gline_5367,gcol_5368,name_5369,seq__5251_5359__$1,temp__5735__auto___5358__$1,vec__5248_5342,column_5343,column_info_5344,seq__5233_5336__$1,temp__5735__auto___5335,vec__5230_5292,line_5293,columns_5294,inverted))
,cljs.core.sorted_map.call(null)));


var G__5370 = cljs.core.next.call(null,seq__5251_5359__$1);
var G__5371 = null;
var G__5372 = (0);
var G__5373 = (0);
seq__5251_5345 = G__5370;
chunk__5252_5346 = G__5371;
count__5253_5347 = G__5372;
i__5254_5348 = G__5373;
continue;
}
} else {
}
}
break;
}


var G__5374 = cljs.core.next.call(null,seq__5233_5336__$1);
var G__5375 = null;
var G__5376 = (0);
var G__5377 = (0);
seq__5233_5295 = G__5374;
chunk__5234_5296 = G__5375;
count__5235_5297 = G__5376;
i__5236_5298 = G__5377;
continue;
}
} else {
}
}
break;
}


var G__5378 = seq__5226_5288;
var G__5379 = chunk__5227_5289;
var G__5380 = count__5228_5290;
var G__5381 = (i__5229_5291 + (1));
seq__5226_5288 = G__5378;
chunk__5227_5289 = G__5379;
count__5228_5290 = G__5380;
i__5229_5291 = G__5381;
continue;
} else {
var temp__5735__auto___5382 = cljs.core.seq.call(null,seq__5226_5288);
if(temp__5735__auto___5382){
var seq__5226_5383__$1 = temp__5735__auto___5382;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5226_5383__$1)){
var c__4461__auto___5384 = cljs.core.chunk_first.call(null,seq__5226_5383__$1);
var G__5385 = cljs.core.chunk_rest.call(null,seq__5226_5383__$1);
var G__5386 = c__4461__auto___5384;
var G__5387 = cljs.core.count.call(null,c__4461__auto___5384);
var G__5388 = (0);
seq__5226_5288 = G__5385;
chunk__5227_5289 = G__5386;
count__5228_5290 = G__5387;
i__5229_5291 = G__5388;
continue;
} else {
var vec__5259_5389 = cljs.core.first.call(null,seq__5226_5383__$1);
var line_5390 = cljs.core.nth.call(null,vec__5259_5389,(0),null);
var columns_5391 = cljs.core.nth.call(null,vec__5259_5389,(1),null);
var seq__5262_5392 = cljs.core.seq.call(null,columns_5391);
var chunk__5263_5393 = null;
var count__5264_5394 = (0);
var i__5265_5395 = (0);
while(true){
if((i__5265_5395 < count__5264_5394)){
var vec__5266_5396 = cljs.core._nth.call(null,chunk__5263_5393,i__5265_5395);
var column_5397 = cljs.core.nth.call(null,vec__5266_5396,(0),null);
var column_info_5398 = cljs.core.nth.call(null,vec__5266_5396,(1),null);
var seq__5269_5399 = cljs.core.seq.call(null,column_info_5398);
var chunk__5270_5400 = null;
var count__5271_5401 = (0);
var i__5272_5402 = (0);
while(true){
if((i__5272_5402 < count__5271_5401)){
var map__5273_5403 = cljs.core._nth.call(null,chunk__5270_5400,i__5272_5402);
var map__5273_5404__$1 = (((((!((map__5273_5403 == null))))?(((((map__5273_5403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5273_5403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5273_5403):map__5273_5403);
var gline_5405 = cljs.core.get.call(null,map__5273_5404__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5406 = cljs.core.get.call(null,map__5273_5404__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5407 = cljs.core.get.call(null,map__5273_5404__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5405], null),cljs.core.fnil.call(null,((function (seq__5269_5399,chunk__5270_5400,count__5271_5401,i__5272_5402,seq__5262_5392,chunk__5263_5393,count__5264_5394,i__5265_5395,seq__5226_5288,chunk__5227_5289,count__5228_5290,i__5229_5291,map__5273_5403,map__5273_5404__$1,gline_5405,gcol_5406,name_5407,vec__5266_5396,column_5397,column_info_5398,vec__5259_5389,line_5390,columns_5391,seq__5226_5383__$1,temp__5735__auto___5382,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5406], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5390,new cljs.core.Keyword(null,"col","col",-1959363084),column_5397,new cljs.core.Keyword(null,"name","name",1843675177),name_5407], null));
});})(seq__5269_5399,chunk__5270_5400,count__5271_5401,i__5272_5402,seq__5262_5392,chunk__5263_5393,count__5264_5394,i__5265_5395,seq__5226_5288,chunk__5227_5289,count__5228_5290,i__5229_5291,map__5273_5403,map__5273_5404__$1,gline_5405,gcol_5406,name_5407,vec__5266_5396,column_5397,column_info_5398,vec__5259_5389,line_5390,columns_5391,seq__5226_5383__$1,temp__5735__auto___5382,inverted))
,cljs.core.sorted_map.call(null)));


var G__5408 = seq__5269_5399;
var G__5409 = chunk__5270_5400;
var G__5410 = count__5271_5401;
var G__5411 = (i__5272_5402 + (1));
seq__5269_5399 = G__5408;
chunk__5270_5400 = G__5409;
count__5271_5401 = G__5410;
i__5272_5402 = G__5411;
continue;
} else {
var temp__5735__auto___5412__$1 = cljs.core.seq.call(null,seq__5269_5399);
if(temp__5735__auto___5412__$1){
var seq__5269_5413__$1 = temp__5735__auto___5412__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5269_5413__$1)){
var c__4461__auto___5414 = cljs.core.chunk_first.call(null,seq__5269_5413__$1);
var G__5415 = cljs.core.chunk_rest.call(null,seq__5269_5413__$1);
var G__5416 = c__4461__auto___5414;
var G__5417 = cljs.core.count.call(null,c__4461__auto___5414);
var G__5418 = (0);
seq__5269_5399 = G__5415;
chunk__5270_5400 = G__5416;
count__5271_5401 = G__5417;
i__5272_5402 = G__5418;
continue;
} else {
var map__5275_5419 = cljs.core.first.call(null,seq__5269_5413__$1);
var map__5275_5420__$1 = (((((!((map__5275_5419 == null))))?(((((map__5275_5419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5275_5419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5275_5419):map__5275_5419);
var gline_5421 = cljs.core.get.call(null,map__5275_5420__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5422 = cljs.core.get.call(null,map__5275_5420__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5423 = cljs.core.get.call(null,map__5275_5420__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5421], null),cljs.core.fnil.call(null,((function (seq__5269_5399,chunk__5270_5400,count__5271_5401,i__5272_5402,seq__5262_5392,chunk__5263_5393,count__5264_5394,i__5265_5395,seq__5226_5288,chunk__5227_5289,count__5228_5290,i__5229_5291,map__5275_5419,map__5275_5420__$1,gline_5421,gcol_5422,name_5423,seq__5269_5413__$1,temp__5735__auto___5412__$1,vec__5266_5396,column_5397,column_info_5398,vec__5259_5389,line_5390,columns_5391,seq__5226_5383__$1,temp__5735__auto___5382,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5422], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5390,new cljs.core.Keyword(null,"col","col",-1959363084),column_5397,new cljs.core.Keyword(null,"name","name",1843675177),name_5423], null));
});})(seq__5269_5399,chunk__5270_5400,count__5271_5401,i__5272_5402,seq__5262_5392,chunk__5263_5393,count__5264_5394,i__5265_5395,seq__5226_5288,chunk__5227_5289,count__5228_5290,i__5229_5291,map__5275_5419,map__5275_5420__$1,gline_5421,gcol_5422,name_5423,seq__5269_5413__$1,temp__5735__auto___5412__$1,vec__5266_5396,column_5397,column_info_5398,vec__5259_5389,line_5390,columns_5391,seq__5226_5383__$1,temp__5735__auto___5382,inverted))
,cljs.core.sorted_map.call(null)));


var G__5424 = cljs.core.next.call(null,seq__5269_5413__$1);
var G__5425 = null;
var G__5426 = (0);
var G__5427 = (0);
seq__5269_5399 = G__5424;
chunk__5270_5400 = G__5425;
count__5271_5401 = G__5426;
i__5272_5402 = G__5427;
continue;
}
} else {
}
}
break;
}


var G__5428 = seq__5262_5392;
var G__5429 = chunk__5263_5393;
var G__5430 = count__5264_5394;
var G__5431 = (i__5265_5395 + (1));
seq__5262_5392 = G__5428;
chunk__5263_5393 = G__5429;
count__5264_5394 = G__5430;
i__5265_5395 = G__5431;
continue;
} else {
var temp__5735__auto___5432__$1 = cljs.core.seq.call(null,seq__5262_5392);
if(temp__5735__auto___5432__$1){
var seq__5262_5433__$1 = temp__5735__auto___5432__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5262_5433__$1)){
var c__4461__auto___5434 = cljs.core.chunk_first.call(null,seq__5262_5433__$1);
var G__5435 = cljs.core.chunk_rest.call(null,seq__5262_5433__$1);
var G__5436 = c__4461__auto___5434;
var G__5437 = cljs.core.count.call(null,c__4461__auto___5434);
var G__5438 = (0);
seq__5262_5392 = G__5435;
chunk__5263_5393 = G__5436;
count__5264_5394 = G__5437;
i__5265_5395 = G__5438;
continue;
} else {
var vec__5277_5439 = cljs.core.first.call(null,seq__5262_5433__$1);
var column_5440 = cljs.core.nth.call(null,vec__5277_5439,(0),null);
var column_info_5441 = cljs.core.nth.call(null,vec__5277_5439,(1),null);
var seq__5280_5442 = cljs.core.seq.call(null,column_info_5441);
var chunk__5281_5443 = null;
var count__5282_5444 = (0);
var i__5283_5445 = (0);
while(true){
if((i__5283_5445 < count__5282_5444)){
var map__5284_5446 = cljs.core._nth.call(null,chunk__5281_5443,i__5283_5445);
var map__5284_5447__$1 = (((((!((map__5284_5446 == null))))?(((((map__5284_5446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5284_5446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5284_5446):map__5284_5446);
var gline_5448 = cljs.core.get.call(null,map__5284_5447__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5449 = cljs.core.get.call(null,map__5284_5447__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5450 = cljs.core.get.call(null,map__5284_5447__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5448], null),cljs.core.fnil.call(null,((function (seq__5280_5442,chunk__5281_5443,count__5282_5444,i__5283_5445,seq__5262_5392,chunk__5263_5393,count__5264_5394,i__5265_5395,seq__5226_5288,chunk__5227_5289,count__5228_5290,i__5229_5291,map__5284_5446,map__5284_5447__$1,gline_5448,gcol_5449,name_5450,vec__5277_5439,column_5440,column_info_5441,seq__5262_5433__$1,temp__5735__auto___5432__$1,vec__5259_5389,line_5390,columns_5391,seq__5226_5383__$1,temp__5735__auto___5382,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5449], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5390,new cljs.core.Keyword(null,"col","col",-1959363084),column_5440,new cljs.core.Keyword(null,"name","name",1843675177),name_5450], null));
});})(seq__5280_5442,chunk__5281_5443,count__5282_5444,i__5283_5445,seq__5262_5392,chunk__5263_5393,count__5264_5394,i__5265_5395,seq__5226_5288,chunk__5227_5289,count__5228_5290,i__5229_5291,map__5284_5446,map__5284_5447__$1,gline_5448,gcol_5449,name_5450,vec__5277_5439,column_5440,column_info_5441,seq__5262_5433__$1,temp__5735__auto___5432__$1,vec__5259_5389,line_5390,columns_5391,seq__5226_5383__$1,temp__5735__auto___5382,inverted))
,cljs.core.sorted_map.call(null)));


var G__5451 = seq__5280_5442;
var G__5452 = chunk__5281_5443;
var G__5453 = count__5282_5444;
var G__5454 = (i__5283_5445 + (1));
seq__5280_5442 = G__5451;
chunk__5281_5443 = G__5452;
count__5282_5444 = G__5453;
i__5283_5445 = G__5454;
continue;
} else {
var temp__5735__auto___5455__$2 = cljs.core.seq.call(null,seq__5280_5442);
if(temp__5735__auto___5455__$2){
var seq__5280_5456__$1 = temp__5735__auto___5455__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5280_5456__$1)){
var c__4461__auto___5457 = cljs.core.chunk_first.call(null,seq__5280_5456__$1);
var G__5458 = cljs.core.chunk_rest.call(null,seq__5280_5456__$1);
var G__5459 = c__4461__auto___5457;
var G__5460 = cljs.core.count.call(null,c__4461__auto___5457);
var G__5461 = (0);
seq__5280_5442 = G__5458;
chunk__5281_5443 = G__5459;
count__5282_5444 = G__5460;
i__5283_5445 = G__5461;
continue;
} else {
var map__5286_5462 = cljs.core.first.call(null,seq__5280_5456__$1);
var map__5286_5463__$1 = (((((!((map__5286_5462 == null))))?(((((map__5286_5462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5286_5462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5286_5462):map__5286_5462);
var gline_5464 = cljs.core.get.call(null,map__5286_5463__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5465 = cljs.core.get.call(null,map__5286_5463__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5466 = cljs.core.get.call(null,map__5286_5463__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5464], null),cljs.core.fnil.call(null,((function (seq__5280_5442,chunk__5281_5443,count__5282_5444,i__5283_5445,seq__5262_5392,chunk__5263_5393,count__5264_5394,i__5265_5395,seq__5226_5288,chunk__5227_5289,count__5228_5290,i__5229_5291,map__5286_5462,map__5286_5463__$1,gline_5464,gcol_5465,name_5466,seq__5280_5456__$1,temp__5735__auto___5455__$2,vec__5277_5439,column_5440,column_info_5441,seq__5262_5433__$1,temp__5735__auto___5432__$1,vec__5259_5389,line_5390,columns_5391,seq__5226_5383__$1,temp__5735__auto___5382,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5465], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5390,new cljs.core.Keyword(null,"col","col",-1959363084),column_5440,new cljs.core.Keyword(null,"name","name",1843675177),name_5466], null));
});})(seq__5280_5442,chunk__5281_5443,count__5282_5444,i__5283_5445,seq__5262_5392,chunk__5263_5393,count__5264_5394,i__5265_5395,seq__5226_5288,chunk__5227_5289,count__5228_5290,i__5229_5291,map__5286_5462,map__5286_5463__$1,gline_5464,gcol_5465,name_5466,seq__5280_5456__$1,temp__5735__auto___5455__$2,vec__5277_5439,column_5440,column_info_5441,seq__5262_5433__$1,temp__5735__auto___5432__$1,vec__5259_5389,line_5390,columns_5391,seq__5226_5383__$1,temp__5735__auto___5382,inverted))
,cljs.core.sorted_map.call(null)));


var G__5467 = cljs.core.next.call(null,seq__5280_5456__$1);
var G__5468 = null;
var G__5469 = (0);
var G__5470 = (0);
seq__5280_5442 = G__5467;
chunk__5281_5443 = G__5468;
count__5282_5444 = G__5469;
i__5283_5445 = G__5470;
continue;
}
} else {
}
}
break;
}


var G__5471 = cljs.core.next.call(null,seq__5262_5433__$1);
var G__5472 = null;
var G__5473 = (0);
var G__5474 = (0);
seq__5262_5392 = G__5471;
chunk__5263_5393 = G__5472;
count__5264_5394 = G__5473;
i__5265_5395 = G__5474;
continue;
}
} else {
}
}
break;
}


var G__5475 = cljs.core.next.call(null,seq__5226_5383__$1);
var G__5476 = null;
var G__5477 = (0);
var G__5478 = (0);
seq__5226_5288 = G__5475;
chunk__5227_5289 = G__5476;
count__5228_5290 = G__5477;
i__5229_5291 = G__5478;
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
