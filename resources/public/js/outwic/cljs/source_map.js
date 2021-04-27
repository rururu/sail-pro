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
return cljs.core.reduce.call(null,(function (m,p__4882){
var vec__4883 = p__4882;
var i = cljs.core.nth.call(null,vec__4883,(0),null);
var v = cljs.core.nth.call(null,vec__4883,(1),null);
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
var vec__4886 = seg;
var gcol = cljs.core.nth.call(null,vec__4886,(0),null);
var source = cljs.core.nth.call(null,vec__4886,(1),null);
var line = cljs.core.nth.call(null,vec__4886,(2),null);
var col = cljs.core.nth.call(null,vec__4886,(3),null);
var name = cljs.core.nth.call(null,vec__4886,(4),null);
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
var vec__4889 = seg;
var gcol = cljs.core.nth.call(null,vec__4889,(0),null);
var source = cljs.core.nth.call(null,vec__4889,(1),null);
var line = cljs.core.nth.call(null,vec__4889,(2),null);
var col = cljs.core.nth.call(null,vec__4889,(3),null);
var name = cljs.core.nth.call(null,vec__4889,(4),null);
var vec__4892 = relseg;
var rgcol = cljs.core.nth.call(null,vec__4892,(0),null);
var rsource = cljs.core.nth.call(null,vec__4892,(1),null);
var rline = cljs.core.nth.call(null,vec__4892,(2),null);
var rcol = cljs.core.nth.call(null,vec__4892,(3),null);
var rname = cljs.core.nth.call(null,vec__4892,(4),null);
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
var map__4895 = segmap;
var map__4895__$1 = (((((!((map__4895 == null))))?(((((map__4895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4895):map__4895);
var gcol = cljs.core.get.call(null,map__4895__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__4895__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__4895__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__4895__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__4895__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__4895,map__4895__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__4895,map__4895__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__4895,map__4895__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__4895,map__4895__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__4895,map__4895__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__4895,map__4895__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__4898 = arguments.length;
switch (G__4898) {
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
var vec__4899 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__4903 = cljs.core.next.call(null,segs__$1);
var G__4904 = nrelseg;
var G__4905 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__4903;
relseg__$1 = G__4904;
result__$1 = G__4905;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__4899,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__4899,(1),null);
var G__4906 = (gline + (1));
var G__4907 = cljs.core.next.call(null,lines__$1);
var G__4908 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__4909 = result__$1;
gline = G__4906;
lines__$1 = G__4907;
relseg = G__4908;
result = G__4909;
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
var map__4911 = segmap;
var map__4911__$1 = (((((!((map__4911 == null))))?(((((map__4911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4911):map__4911);
var gcol = cljs.core.get.call(null,map__4911__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__4911__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__4911__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__4911__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__4911__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__4911,map__4911__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__4911,map__4911__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__4910_SHARP_){
return cljs.core.conj.call(null,p1__4910_SHARP_,d__$1);
});})(map__4911,map__4911__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__4911,map__4911__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__4914 = arguments.length;
switch (G__4914) {
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
var vec__4915 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__4919 = cljs.core.next.call(null,segs__$1);
var G__4920 = nrelseg;
var G__4921 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__4919;
relseg__$1 = G__4920;
result__$1 = G__4921;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__4915,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__4915,(1),null);
var G__4922 = (gline + (1));
var G__4923 = cljs.core.next.call(null,lines__$1);
var G__4924 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__4925 = result__$1;
gline = G__4922;
lines__$1 = G__4923;
relseg = G__4924;
result = G__4925;
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
return (function (p__4926){
var vec__4927 = p__4926;
var _ = cljs.core.nth.call(null,vec__4927,(0),null);
var source = cljs.core.nth.call(null,vec__4927,(1),null);
var line = cljs.core.nth.call(null,vec__4927,(2),null);
var col = cljs.core.nth.call(null,vec__4927,(3),null);
var name = cljs.core.nth.call(null,vec__4927,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__4930){
var vec__4931 = p__4930;
var gcol = cljs.core.nth.call(null,vec__4931,(0),null);
var sidx = cljs.core.nth.call(null,vec__4931,(1),null);
var line = cljs.core.nth.call(null,vec__4931,(2),null);
var col = cljs.core.nth.call(null,vec__4931,(3),null);
var name = cljs.core.nth.call(null,vec__4931,(4),null);
var seg = vec__4931;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__4931,gcol,sidx,line,col,name,seg,relseg){
return (function (p__4934){
var vec__4935 = p__4934;
var _ = cljs.core.nth.call(null,vec__4935,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__4935,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__4935,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__4935,(3),null);
var lname = cljs.core.nth.call(null,vec__4935,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__4931,gcol,sidx,line,col,name,seg,relseg))
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
var seq__4941 = cljs.core.seq.call(null,infos);
var chunk__4942 = null;
var count__4943 = (0);
var i__4944 = (0);
while(true){
if((i__4944 < count__4943)){
var info = cljs.core._nth.call(null,chunk__4942,i__4944);
var segv_5023 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_5024 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_5025 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_5024 > (lc_5025 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__4941,chunk__4942,count__4943,i__4944,segv_5023,gline_5024,lc_5025,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_5024 - (lc_5025 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_5023], null));
});})(seq__4941,chunk__4942,count__4943,i__4944,segv_5023,gline_5024,lc_5025,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__4941,chunk__4942,count__4943,i__4944,segv_5023,gline_5024,lc_5025,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5024], null),cljs.core.conj,segv_5023);
});})(seq__4941,chunk__4942,count__4943,i__4944,segv_5023,gline_5024,lc_5025,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__5026 = seq__4941;
var G__5027 = chunk__4942;
var G__5028 = count__4943;
var G__5029 = (i__4944 + (1));
seq__4941 = G__5026;
chunk__4942 = G__5027;
count__4943 = G__5028;
i__4944 = G__5029;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__4941);
if(temp__5735__auto__){
var seq__4941__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4941__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__4941__$1);
var G__5030 = cljs.core.chunk_rest.call(null,seq__4941__$1);
var G__5031 = c__4461__auto__;
var G__5032 = cljs.core.count.call(null,c__4461__auto__);
var G__5033 = (0);
seq__4941 = G__5030;
chunk__4942 = G__5031;
count__4943 = G__5032;
i__4944 = G__5033;
continue;
} else {
var info = cljs.core.first.call(null,seq__4941__$1);
var segv_5034 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_5035 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_5036 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_5035 > (lc_5036 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__4941,chunk__4942,count__4943,i__4944,segv_5034,gline_5035,lc_5036,info,seq__4941__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_5035 - (lc_5036 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_5034], null));
});})(seq__4941,chunk__4942,count__4943,i__4944,segv_5034,gline_5035,lc_5036,info,seq__4941__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__4941,chunk__4942,count__4943,i__4944,segv_5034,gline_5035,lc_5036,info,seq__4941__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5035], null),cljs.core.conj,segv_5034);
});})(seq__4941,chunk__4942,count__4943,i__4944,segv_5034,gline_5035,lc_5036,info,seq__4941__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__5037 = cljs.core.next.call(null,seq__4941__$1);
var G__5038 = null;
var G__5039 = (0);
var G__5040 = (0);
seq__4941 = G__5037;
chunk__4942 = G__5038;
count__4943 = G__5039;
i__4944 = G__5040;
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
var seq__4945_5041 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__4946_5042 = null;
var count__4947_5043 = (0);
var i__4948_5044 = (0);
while(true){
if((i__4948_5044 < count__4947_5043)){
var vec__4949_5045 = cljs.core._nth.call(null,chunk__4946_5042,i__4948_5044);
var source_idx_5046 = cljs.core.nth.call(null,vec__4949_5045,(0),null);
var vec__4952_5047 = cljs.core.nth.call(null,vec__4949_5045,(1),null);
var __5048 = cljs.core.nth.call(null,vec__4952_5047,(0),null);
var lines_5049__$1 = cljs.core.nth.call(null,vec__4952_5047,(1),null);
var seq__4955_5050 = cljs.core.seq.call(null,lines_5049__$1);
var chunk__4956_5051 = null;
var count__4957_5052 = (0);
var i__4958_5053 = (0);
while(true){
if((i__4958_5053 < count__4957_5052)){
var vec__4959_5054 = cljs.core._nth.call(null,chunk__4956_5051,i__4958_5053);
var line_5055 = cljs.core.nth.call(null,vec__4959_5054,(0),null);
var cols_5056 = cljs.core.nth.call(null,vec__4959_5054,(1),null);
var seq__4962_5057 = cljs.core.seq.call(null,cols_5056);
var chunk__4963_5058 = null;
var count__4964_5059 = (0);
var i__4965_5060 = (0);
while(true){
if((i__4965_5060 < count__4964_5059)){
var vec__4966_5061 = cljs.core._nth.call(null,chunk__4963_5058,i__4965_5060);
var col_5062 = cljs.core.nth.call(null,vec__4966_5061,(0),null);
var infos_5063 = cljs.core.nth.call(null,vec__4966_5061,(1),null);
encode_cols.call(null,infos_5063,source_idx_5046,line_5055,col_5062);


var G__5064 = seq__4962_5057;
var G__5065 = chunk__4963_5058;
var G__5066 = count__4964_5059;
var G__5067 = (i__4965_5060 + (1));
seq__4962_5057 = G__5064;
chunk__4963_5058 = G__5065;
count__4964_5059 = G__5066;
i__4965_5060 = G__5067;
continue;
} else {
var temp__5735__auto___5068 = cljs.core.seq.call(null,seq__4962_5057);
if(temp__5735__auto___5068){
var seq__4962_5069__$1 = temp__5735__auto___5068;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4962_5069__$1)){
var c__4461__auto___5070 = cljs.core.chunk_first.call(null,seq__4962_5069__$1);
var G__5071 = cljs.core.chunk_rest.call(null,seq__4962_5069__$1);
var G__5072 = c__4461__auto___5070;
var G__5073 = cljs.core.count.call(null,c__4461__auto___5070);
var G__5074 = (0);
seq__4962_5057 = G__5071;
chunk__4963_5058 = G__5072;
count__4964_5059 = G__5073;
i__4965_5060 = G__5074;
continue;
} else {
var vec__4969_5075 = cljs.core.first.call(null,seq__4962_5069__$1);
var col_5076 = cljs.core.nth.call(null,vec__4969_5075,(0),null);
var infos_5077 = cljs.core.nth.call(null,vec__4969_5075,(1),null);
encode_cols.call(null,infos_5077,source_idx_5046,line_5055,col_5076);


var G__5078 = cljs.core.next.call(null,seq__4962_5069__$1);
var G__5079 = null;
var G__5080 = (0);
var G__5081 = (0);
seq__4962_5057 = G__5078;
chunk__4963_5058 = G__5079;
count__4964_5059 = G__5080;
i__4965_5060 = G__5081;
continue;
}
} else {
}
}
break;
}


var G__5082 = seq__4955_5050;
var G__5083 = chunk__4956_5051;
var G__5084 = count__4957_5052;
var G__5085 = (i__4958_5053 + (1));
seq__4955_5050 = G__5082;
chunk__4956_5051 = G__5083;
count__4957_5052 = G__5084;
i__4958_5053 = G__5085;
continue;
} else {
var temp__5735__auto___5086 = cljs.core.seq.call(null,seq__4955_5050);
if(temp__5735__auto___5086){
var seq__4955_5087__$1 = temp__5735__auto___5086;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4955_5087__$1)){
var c__4461__auto___5088 = cljs.core.chunk_first.call(null,seq__4955_5087__$1);
var G__5089 = cljs.core.chunk_rest.call(null,seq__4955_5087__$1);
var G__5090 = c__4461__auto___5088;
var G__5091 = cljs.core.count.call(null,c__4461__auto___5088);
var G__5092 = (0);
seq__4955_5050 = G__5089;
chunk__4956_5051 = G__5090;
count__4957_5052 = G__5091;
i__4958_5053 = G__5092;
continue;
} else {
var vec__4972_5093 = cljs.core.first.call(null,seq__4955_5087__$1);
var line_5094 = cljs.core.nth.call(null,vec__4972_5093,(0),null);
var cols_5095 = cljs.core.nth.call(null,vec__4972_5093,(1),null);
var seq__4975_5096 = cljs.core.seq.call(null,cols_5095);
var chunk__4976_5097 = null;
var count__4977_5098 = (0);
var i__4978_5099 = (0);
while(true){
if((i__4978_5099 < count__4977_5098)){
var vec__4979_5100 = cljs.core._nth.call(null,chunk__4976_5097,i__4978_5099);
var col_5101 = cljs.core.nth.call(null,vec__4979_5100,(0),null);
var infos_5102 = cljs.core.nth.call(null,vec__4979_5100,(1),null);
encode_cols.call(null,infos_5102,source_idx_5046,line_5094,col_5101);


var G__5103 = seq__4975_5096;
var G__5104 = chunk__4976_5097;
var G__5105 = count__4977_5098;
var G__5106 = (i__4978_5099 + (1));
seq__4975_5096 = G__5103;
chunk__4976_5097 = G__5104;
count__4977_5098 = G__5105;
i__4978_5099 = G__5106;
continue;
} else {
var temp__5735__auto___5107__$1 = cljs.core.seq.call(null,seq__4975_5096);
if(temp__5735__auto___5107__$1){
var seq__4975_5108__$1 = temp__5735__auto___5107__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4975_5108__$1)){
var c__4461__auto___5109 = cljs.core.chunk_first.call(null,seq__4975_5108__$1);
var G__5110 = cljs.core.chunk_rest.call(null,seq__4975_5108__$1);
var G__5111 = c__4461__auto___5109;
var G__5112 = cljs.core.count.call(null,c__4461__auto___5109);
var G__5113 = (0);
seq__4975_5096 = G__5110;
chunk__4976_5097 = G__5111;
count__4977_5098 = G__5112;
i__4978_5099 = G__5113;
continue;
} else {
var vec__4982_5114 = cljs.core.first.call(null,seq__4975_5108__$1);
var col_5115 = cljs.core.nth.call(null,vec__4982_5114,(0),null);
var infos_5116 = cljs.core.nth.call(null,vec__4982_5114,(1),null);
encode_cols.call(null,infos_5116,source_idx_5046,line_5094,col_5115);


var G__5117 = cljs.core.next.call(null,seq__4975_5108__$1);
var G__5118 = null;
var G__5119 = (0);
var G__5120 = (0);
seq__4975_5096 = G__5117;
chunk__4976_5097 = G__5118;
count__4977_5098 = G__5119;
i__4978_5099 = G__5120;
continue;
}
} else {
}
}
break;
}


var G__5121 = cljs.core.next.call(null,seq__4955_5087__$1);
var G__5122 = null;
var G__5123 = (0);
var G__5124 = (0);
seq__4955_5050 = G__5121;
chunk__4956_5051 = G__5122;
count__4957_5052 = G__5123;
i__4958_5053 = G__5124;
continue;
}
} else {
}
}
break;
}


var G__5125 = seq__4945_5041;
var G__5126 = chunk__4946_5042;
var G__5127 = count__4947_5043;
var G__5128 = (i__4948_5044 + (1));
seq__4945_5041 = G__5125;
chunk__4946_5042 = G__5126;
count__4947_5043 = G__5127;
i__4948_5044 = G__5128;
continue;
} else {
var temp__5735__auto___5129 = cljs.core.seq.call(null,seq__4945_5041);
if(temp__5735__auto___5129){
var seq__4945_5130__$1 = temp__5735__auto___5129;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4945_5130__$1)){
var c__4461__auto___5131 = cljs.core.chunk_first.call(null,seq__4945_5130__$1);
var G__5132 = cljs.core.chunk_rest.call(null,seq__4945_5130__$1);
var G__5133 = c__4461__auto___5131;
var G__5134 = cljs.core.count.call(null,c__4461__auto___5131);
var G__5135 = (0);
seq__4945_5041 = G__5132;
chunk__4946_5042 = G__5133;
count__4947_5043 = G__5134;
i__4948_5044 = G__5135;
continue;
} else {
var vec__4985_5136 = cljs.core.first.call(null,seq__4945_5130__$1);
var source_idx_5137 = cljs.core.nth.call(null,vec__4985_5136,(0),null);
var vec__4988_5138 = cljs.core.nth.call(null,vec__4985_5136,(1),null);
var __5139 = cljs.core.nth.call(null,vec__4988_5138,(0),null);
var lines_5140__$1 = cljs.core.nth.call(null,vec__4988_5138,(1),null);
var seq__4991_5141 = cljs.core.seq.call(null,lines_5140__$1);
var chunk__4992_5142 = null;
var count__4993_5143 = (0);
var i__4994_5144 = (0);
while(true){
if((i__4994_5144 < count__4993_5143)){
var vec__4995_5145 = cljs.core._nth.call(null,chunk__4992_5142,i__4994_5144);
var line_5146 = cljs.core.nth.call(null,vec__4995_5145,(0),null);
var cols_5147 = cljs.core.nth.call(null,vec__4995_5145,(1),null);
var seq__4998_5148 = cljs.core.seq.call(null,cols_5147);
var chunk__4999_5149 = null;
var count__5000_5150 = (0);
var i__5001_5151 = (0);
while(true){
if((i__5001_5151 < count__5000_5150)){
var vec__5002_5152 = cljs.core._nth.call(null,chunk__4999_5149,i__5001_5151);
var col_5153 = cljs.core.nth.call(null,vec__5002_5152,(0),null);
var infos_5154 = cljs.core.nth.call(null,vec__5002_5152,(1),null);
encode_cols.call(null,infos_5154,source_idx_5137,line_5146,col_5153);


var G__5155 = seq__4998_5148;
var G__5156 = chunk__4999_5149;
var G__5157 = count__5000_5150;
var G__5158 = (i__5001_5151 + (1));
seq__4998_5148 = G__5155;
chunk__4999_5149 = G__5156;
count__5000_5150 = G__5157;
i__5001_5151 = G__5158;
continue;
} else {
var temp__5735__auto___5159__$1 = cljs.core.seq.call(null,seq__4998_5148);
if(temp__5735__auto___5159__$1){
var seq__4998_5160__$1 = temp__5735__auto___5159__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4998_5160__$1)){
var c__4461__auto___5161 = cljs.core.chunk_first.call(null,seq__4998_5160__$1);
var G__5162 = cljs.core.chunk_rest.call(null,seq__4998_5160__$1);
var G__5163 = c__4461__auto___5161;
var G__5164 = cljs.core.count.call(null,c__4461__auto___5161);
var G__5165 = (0);
seq__4998_5148 = G__5162;
chunk__4999_5149 = G__5163;
count__5000_5150 = G__5164;
i__5001_5151 = G__5165;
continue;
} else {
var vec__5005_5166 = cljs.core.first.call(null,seq__4998_5160__$1);
var col_5167 = cljs.core.nth.call(null,vec__5005_5166,(0),null);
var infos_5168 = cljs.core.nth.call(null,vec__5005_5166,(1),null);
encode_cols.call(null,infos_5168,source_idx_5137,line_5146,col_5167);


var G__5169 = cljs.core.next.call(null,seq__4998_5160__$1);
var G__5170 = null;
var G__5171 = (0);
var G__5172 = (0);
seq__4998_5148 = G__5169;
chunk__4999_5149 = G__5170;
count__5000_5150 = G__5171;
i__5001_5151 = G__5172;
continue;
}
} else {
}
}
break;
}


var G__5173 = seq__4991_5141;
var G__5174 = chunk__4992_5142;
var G__5175 = count__4993_5143;
var G__5176 = (i__4994_5144 + (1));
seq__4991_5141 = G__5173;
chunk__4992_5142 = G__5174;
count__4993_5143 = G__5175;
i__4994_5144 = G__5176;
continue;
} else {
var temp__5735__auto___5177__$1 = cljs.core.seq.call(null,seq__4991_5141);
if(temp__5735__auto___5177__$1){
var seq__4991_5178__$1 = temp__5735__auto___5177__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4991_5178__$1)){
var c__4461__auto___5179 = cljs.core.chunk_first.call(null,seq__4991_5178__$1);
var G__5180 = cljs.core.chunk_rest.call(null,seq__4991_5178__$1);
var G__5181 = c__4461__auto___5179;
var G__5182 = cljs.core.count.call(null,c__4461__auto___5179);
var G__5183 = (0);
seq__4991_5141 = G__5180;
chunk__4992_5142 = G__5181;
count__4993_5143 = G__5182;
i__4994_5144 = G__5183;
continue;
} else {
var vec__5008_5184 = cljs.core.first.call(null,seq__4991_5178__$1);
var line_5185 = cljs.core.nth.call(null,vec__5008_5184,(0),null);
var cols_5186 = cljs.core.nth.call(null,vec__5008_5184,(1),null);
var seq__5011_5187 = cljs.core.seq.call(null,cols_5186);
var chunk__5012_5188 = null;
var count__5013_5189 = (0);
var i__5014_5190 = (0);
while(true){
if((i__5014_5190 < count__5013_5189)){
var vec__5015_5191 = cljs.core._nth.call(null,chunk__5012_5188,i__5014_5190);
var col_5192 = cljs.core.nth.call(null,vec__5015_5191,(0),null);
var infos_5193 = cljs.core.nth.call(null,vec__5015_5191,(1),null);
encode_cols.call(null,infos_5193,source_idx_5137,line_5185,col_5192);


var G__5194 = seq__5011_5187;
var G__5195 = chunk__5012_5188;
var G__5196 = count__5013_5189;
var G__5197 = (i__5014_5190 + (1));
seq__5011_5187 = G__5194;
chunk__5012_5188 = G__5195;
count__5013_5189 = G__5196;
i__5014_5190 = G__5197;
continue;
} else {
var temp__5735__auto___5198__$2 = cljs.core.seq.call(null,seq__5011_5187);
if(temp__5735__auto___5198__$2){
var seq__5011_5199__$1 = temp__5735__auto___5198__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5011_5199__$1)){
var c__4461__auto___5200 = cljs.core.chunk_first.call(null,seq__5011_5199__$1);
var G__5201 = cljs.core.chunk_rest.call(null,seq__5011_5199__$1);
var G__5202 = c__4461__auto___5200;
var G__5203 = cljs.core.count.call(null,c__4461__auto___5200);
var G__5204 = (0);
seq__5011_5187 = G__5201;
chunk__5012_5188 = G__5202;
count__5013_5189 = G__5203;
i__5014_5190 = G__5204;
continue;
} else {
var vec__5018_5205 = cljs.core.first.call(null,seq__5011_5199__$1);
var col_5206 = cljs.core.nth.call(null,vec__5018_5205,(0),null);
var infos_5207 = cljs.core.nth.call(null,vec__5018_5205,(1),null);
encode_cols.call(null,infos_5207,source_idx_5137,line_5185,col_5206);


var G__5208 = cljs.core.next.call(null,seq__5011_5199__$1);
var G__5209 = null;
var G__5210 = (0);
var G__5211 = (0);
seq__5011_5187 = G__5208;
chunk__5012_5188 = G__5209;
count__5013_5189 = G__5210;
i__5014_5190 = G__5211;
continue;
}
} else {
}
}
break;
}


var G__5212 = cljs.core.next.call(null,seq__4991_5178__$1);
var G__5213 = null;
var G__5214 = (0);
var G__5215 = (0);
seq__4991_5141 = G__5212;
chunk__4992_5142 = G__5213;
count__4993_5143 = G__5214;
i__4994_5144 = G__5215;
continue;
}
} else {
}
}
break;
}


var G__5216 = cljs.core.next.call(null,seq__4945_5130__$1);
var G__5217 = null;
var G__5218 = (0);
var G__5219 = (0);
seq__4945_5041 = G__5216;
chunk__4946_5042 = G__5217;
count__4947_5043 = G__5218;
i__4948_5044 = G__5219;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__5021 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__4938_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__4938_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__4939_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__4939_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__4940_SHARP_){
return clojure.string.join.call(null,",",p1__4940_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__5022 = G__5021;
goog.object.set(G__5022,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__5022;
} else {
return G__5021;
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
var vec__5220 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__5220,(0),null);
var col_map = cljs.core.nth.call(null,vec__5220,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__5223 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__5223,(0),null);
var infos = cljs.core.nth.call(null,vec__5223,(1),null);
var G__5229 = cljs.core.next.call(null,col_map_seq);
var G__5230 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__5223,col,infos,vec__5220,line,col_map){
return (function (v,p__5226){
var map__5227 = p__5226;
var map__5227__$1 = (((((!((map__5227 == null))))?(((((map__5227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5227):map__5227);
var gline = cljs.core.get.call(null,map__5227__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__5227__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__5223,col,infos,vec__5220,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__5229;
new_cols = G__5230;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__5231 = cljs.core.next.call(null,line_map_seq);
var G__5232 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__5231;
new_lines = G__5232;
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
var seq__5233_5295 = cljs.core.seq.call(null,reverse_map);
var chunk__5234_5296 = null;
var count__5235_5297 = (0);
var i__5236_5298 = (0);
while(true){
if((i__5236_5298 < count__5235_5297)){
var vec__5237_5299 = cljs.core._nth.call(null,chunk__5234_5296,i__5236_5298);
var line_5300 = cljs.core.nth.call(null,vec__5237_5299,(0),null);
var columns_5301 = cljs.core.nth.call(null,vec__5237_5299,(1),null);
var seq__5240_5302 = cljs.core.seq.call(null,columns_5301);
var chunk__5241_5303 = null;
var count__5242_5304 = (0);
var i__5243_5305 = (0);
while(true){
if((i__5243_5305 < count__5242_5304)){
var vec__5244_5306 = cljs.core._nth.call(null,chunk__5241_5303,i__5243_5305);
var column_5307 = cljs.core.nth.call(null,vec__5244_5306,(0),null);
var column_info_5308 = cljs.core.nth.call(null,vec__5244_5306,(1),null);
var seq__5247_5309 = cljs.core.seq.call(null,column_info_5308);
var chunk__5248_5310 = null;
var count__5249_5311 = (0);
var i__5250_5312 = (0);
while(true){
if((i__5250_5312 < count__5249_5311)){
var map__5251_5313 = cljs.core._nth.call(null,chunk__5248_5310,i__5250_5312);
var map__5251_5314__$1 = (((((!((map__5251_5313 == null))))?(((((map__5251_5313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5251_5313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5251_5313):map__5251_5313);
var gline_5315 = cljs.core.get.call(null,map__5251_5314__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5316 = cljs.core.get.call(null,map__5251_5314__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5317 = cljs.core.get.call(null,map__5251_5314__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5315], null),cljs.core.fnil.call(null,((function (seq__5247_5309,chunk__5248_5310,count__5249_5311,i__5250_5312,seq__5240_5302,chunk__5241_5303,count__5242_5304,i__5243_5305,seq__5233_5295,chunk__5234_5296,count__5235_5297,i__5236_5298,map__5251_5313,map__5251_5314__$1,gline_5315,gcol_5316,name_5317,vec__5244_5306,column_5307,column_info_5308,vec__5237_5299,line_5300,columns_5301,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5316], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5300,new cljs.core.Keyword(null,"col","col",-1959363084),column_5307,new cljs.core.Keyword(null,"name","name",1843675177),name_5317], null));
});})(seq__5247_5309,chunk__5248_5310,count__5249_5311,i__5250_5312,seq__5240_5302,chunk__5241_5303,count__5242_5304,i__5243_5305,seq__5233_5295,chunk__5234_5296,count__5235_5297,i__5236_5298,map__5251_5313,map__5251_5314__$1,gline_5315,gcol_5316,name_5317,vec__5244_5306,column_5307,column_info_5308,vec__5237_5299,line_5300,columns_5301,inverted))
,cljs.core.sorted_map.call(null)));


var G__5318 = seq__5247_5309;
var G__5319 = chunk__5248_5310;
var G__5320 = count__5249_5311;
var G__5321 = (i__5250_5312 + (1));
seq__5247_5309 = G__5318;
chunk__5248_5310 = G__5319;
count__5249_5311 = G__5320;
i__5250_5312 = G__5321;
continue;
} else {
var temp__5735__auto___5322 = cljs.core.seq.call(null,seq__5247_5309);
if(temp__5735__auto___5322){
var seq__5247_5323__$1 = temp__5735__auto___5322;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5247_5323__$1)){
var c__4461__auto___5324 = cljs.core.chunk_first.call(null,seq__5247_5323__$1);
var G__5325 = cljs.core.chunk_rest.call(null,seq__5247_5323__$1);
var G__5326 = c__4461__auto___5324;
var G__5327 = cljs.core.count.call(null,c__4461__auto___5324);
var G__5328 = (0);
seq__5247_5309 = G__5325;
chunk__5248_5310 = G__5326;
count__5249_5311 = G__5327;
i__5250_5312 = G__5328;
continue;
} else {
var map__5253_5329 = cljs.core.first.call(null,seq__5247_5323__$1);
var map__5253_5330__$1 = (((((!((map__5253_5329 == null))))?(((((map__5253_5329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5253_5329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5253_5329):map__5253_5329);
var gline_5331 = cljs.core.get.call(null,map__5253_5330__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5332 = cljs.core.get.call(null,map__5253_5330__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5333 = cljs.core.get.call(null,map__5253_5330__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5331], null),cljs.core.fnil.call(null,((function (seq__5247_5309,chunk__5248_5310,count__5249_5311,i__5250_5312,seq__5240_5302,chunk__5241_5303,count__5242_5304,i__5243_5305,seq__5233_5295,chunk__5234_5296,count__5235_5297,i__5236_5298,map__5253_5329,map__5253_5330__$1,gline_5331,gcol_5332,name_5333,seq__5247_5323__$1,temp__5735__auto___5322,vec__5244_5306,column_5307,column_info_5308,vec__5237_5299,line_5300,columns_5301,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5332], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5300,new cljs.core.Keyword(null,"col","col",-1959363084),column_5307,new cljs.core.Keyword(null,"name","name",1843675177),name_5333], null));
});})(seq__5247_5309,chunk__5248_5310,count__5249_5311,i__5250_5312,seq__5240_5302,chunk__5241_5303,count__5242_5304,i__5243_5305,seq__5233_5295,chunk__5234_5296,count__5235_5297,i__5236_5298,map__5253_5329,map__5253_5330__$1,gline_5331,gcol_5332,name_5333,seq__5247_5323__$1,temp__5735__auto___5322,vec__5244_5306,column_5307,column_info_5308,vec__5237_5299,line_5300,columns_5301,inverted))
,cljs.core.sorted_map.call(null)));


var G__5334 = cljs.core.next.call(null,seq__5247_5323__$1);
var G__5335 = null;
var G__5336 = (0);
var G__5337 = (0);
seq__5247_5309 = G__5334;
chunk__5248_5310 = G__5335;
count__5249_5311 = G__5336;
i__5250_5312 = G__5337;
continue;
}
} else {
}
}
break;
}


var G__5338 = seq__5240_5302;
var G__5339 = chunk__5241_5303;
var G__5340 = count__5242_5304;
var G__5341 = (i__5243_5305 + (1));
seq__5240_5302 = G__5338;
chunk__5241_5303 = G__5339;
count__5242_5304 = G__5340;
i__5243_5305 = G__5341;
continue;
} else {
var temp__5735__auto___5342 = cljs.core.seq.call(null,seq__5240_5302);
if(temp__5735__auto___5342){
var seq__5240_5343__$1 = temp__5735__auto___5342;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5240_5343__$1)){
var c__4461__auto___5344 = cljs.core.chunk_first.call(null,seq__5240_5343__$1);
var G__5345 = cljs.core.chunk_rest.call(null,seq__5240_5343__$1);
var G__5346 = c__4461__auto___5344;
var G__5347 = cljs.core.count.call(null,c__4461__auto___5344);
var G__5348 = (0);
seq__5240_5302 = G__5345;
chunk__5241_5303 = G__5346;
count__5242_5304 = G__5347;
i__5243_5305 = G__5348;
continue;
} else {
var vec__5255_5349 = cljs.core.first.call(null,seq__5240_5343__$1);
var column_5350 = cljs.core.nth.call(null,vec__5255_5349,(0),null);
var column_info_5351 = cljs.core.nth.call(null,vec__5255_5349,(1),null);
var seq__5258_5352 = cljs.core.seq.call(null,column_info_5351);
var chunk__5259_5353 = null;
var count__5260_5354 = (0);
var i__5261_5355 = (0);
while(true){
if((i__5261_5355 < count__5260_5354)){
var map__5262_5356 = cljs.core._nth.call(null,chunk__5259_5353,i__5261_5355);
var map__5262_5357__$1 = (((((!((map__5262_5356 == null))))?(((((map__5262_5356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5262_5356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5262_5356):map__5262_5356);
var gline_5358 = cljs.core.get.call(null,map__5262_5357__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5359 = cljs.core.get.call(null,map__5262_5357__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5360 = cljs.core.get.call(null,map__5262_5357__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5358], null),cljs.core.fnil.call(null,((function (seq__5258_5352,chunk__5259_5353,count__5260_5354,i__5261_5355,seq__5240_5302,chunk__5241_5303,count__5242_5304,i__5243_5305,seq__5233_5295,chunk__5234_5296,count__5235_5297,i__5236_5298,map__5262_5356,map__5262_5357__$1,gline_5358,gcol_5359,name_5360,vec__5255_5349,column_5350,column_info_5351,seq__5240_5343__$1,temp__5735__auto___5342,vec__5237_5299,line_5300,columns_5301,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5359], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5300,new cljs.core.Keyword(null,"col","col",-1959363084),column_5350,new cljs.core.Keyword(null,"name","name",1843675177),name_5360], null));
});})(seq__5258_5352,chunk__5259_5353,count__5260_5354,i__5261_5355,seq__5240_5302,chunk__5241_5303,count__5242_5304,i__5243_5305,seq__5233_5295,chunk__5234_5296,count__5235_5297,i__5236_5298,map__5262_5356,map__5262_5357__$1,gline_5358,gcol_5359,name_5360,vec__5255_5349,column_5350,column_info_5351,seq__5240_5343__$1,temp__5735__auto___5342,vec__5237_5299,line_5300,columns_5301,inverted))
,cljs.core.sorted_map.call(null)));


var G__5361 = seq__5258_5352;
var G__5362 = chunk__5259_5353;
var G__5363 = count__5260_5354;
var G__5364 = (i__5261_5355 + (1));
seq__5258_5352 = G__5361;
chunk__5259_5353 = G__5362;
count__5260_5354 = G__5363;
i__5261_5355 = G__5364;
continue;
} else {
var temp__5735__auto___5365__$1 = cljs.core.seq.call(null,seq__5258_5352);
if(temp__5735__auto___5365__$1){
var seq__5258_5366__$1 = temp__5735__auto___5365__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5258_5366__$1)){
var c__4461__auto___5367 = cljs.core.chunk_first.call(null,seq__5258_5366__$1);
var G__5368 = cljs.core.chunk_rest.call(null,seq__5258_5366__$1);
var G__5369 = c__4461__auto___5367;
var G__5370 = cljs.core.count.call(null,c__4461__auto___5367);
var G__5371 = (0);
seq__5258_5352 = G__5368;
chunk__5259_5353 = G__5369;
count__5260_5354 = G__5370;
i__5261_5355 = G__5371;
continue;
} else {
var map__5264_5372 = cljs.core.first.call(null,seq__5258_5366__$1);
var map__5264_5373__$1 = (((((!((map__5264_5372 == null))))?(((((map__5264_5372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5264_5372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5264_5372):map__5264_5372);
var gline_5374 = cljs.core.get.call(null,map__5264_5373__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5375 = cljs.core.get.call(null,map__5264_5373__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5376 = cljs.core.get.call(null,map__5264_5373__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5374], null),cljs.core.fnil.call(null,((function (seq__5258_5352,chunk__5259_5353,count__5260_5354,i__5261_5355,seq__5240_5302,chunk__5241_5303,count__5242_5304,i__5243_5305,seq__5233_5295,chunk__5234_5296,count__5235_5297,i__5236_5298,map__5264_5372,map__5264_5373__$1,gline_5374,gcol_5375,name_5376,seq__5258_5366__$1,temp__5735__auto___5365__$1,vec__5255_5349,column_5350,column_info_5351,seq__5240_5343__$1,temp__5735__auto___5342,vec__5237_5299,line_5300,columns_5301,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5375], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5300,new cljs.core.Keyword(null,"col","col",-1959363084),column_5350,new cljs.core.Keyword(null,"name","name",1843675177),name_5376], null));
});})(seq__5258_5352,chunk__5259_5353,count__5260_5354,i__5261_5355,seq__5240_5302,chunk__5241_5303,count__5242_5304,i__5243_5305,seq__5233_5295,chunk__5234_5296,count__5235_5297,i__5236_5298,map__5264_5372,map__5264_5373__$1,gline_5374,gcol_5375,name_5376,seq__5258_5366__$1,temp__5735__auto___5365__$1,vec__5255_5349,column_5350,column_info_5351,seq__5240_5343__$1,temp__5735__auto___5342,vec__5237_5299,line_5300,columns_5301,inverted))
,cljs.core.sorted_map.call(null)));


var G__5377 = cljs.core.next.call(null,seq__5258_5366__$1);
var G__5378 = null;
var G__5379 = (0);
var G__5380 = (0);
seq__5258_5352 = G__5377;
chunk__5259_5353 = G__5378;
count__5260_5354 = G__5379;
i__5261_5355 = G__5380;
continue;
}
} else {
}
}
break;
}


var G__5381 = cljs.core.next.call(null,seq__5240_5343__$1);
var G__5382 = null;
var G__5383 = (0);
var G__5384 = (0);
seq__5240_5302 = G__5381;
chunk__5241_5303 = G__5382;
count__5242_5304 = G__5383;
i__5243_5305 = G__5384;
continue;
}
} else {
}
}
break;
}


var G__5385 = seq__5233_5295;
var G__5386 = chunk__5234_5296;
var G__5387 = count__5235_5297;
var G__5388 = (i__5236_5298 + (1));
seq__5233_5295 = G__5385;
chunk__5234_5296 = G__5386;
count__5235_5297 = G__5387;
i__5236_5298 = G__5388;
continue;
} else {
var temp__5735__auto___5389 = cljs.core.seq.call(null,seq__5233_5295);
if(temp__5735__auto___5389){
var seq__5233_5390__$1 = temp__5735__auto___5389;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5233_5390__$1)){
var c__4461__auto___5391 = cljs.core.chunk_first.call(null,seq__5233_5390__$1);
var G__5392 = cljs.core.chunk_rest.call(null,seq__5233_5390__$1);
var G__5393 = c__4461__auto___5391;
var G__5394 = cljs.core.count.call(null,c__4461__auto___5391);
var G__5395 = (0);
seq__5233_5295 = G__5392;
chunk__5234_5296 = G__5393;
count__5235_5297 = G__5394;
i__5236_5298 = G__5395;
continue;
} else {
var vec__5266_5396 = cljs.core.first.call(null,seq__5233_5390__$1);
var line_5397 = cljs.core.nth.call(null,vec__5266_5396,(0),null);
var columns_5398 = cljs.core.nth.call(null,vec__5266_5396,(1),null);
var seq__5269_5399 = cljs.core.seq.call(null,columns_5398);
var chunk__5270_5400 = null;
var count__5271_5401 = (0);
var i__5272_5402 = (0);
while(true){
if((i__5272_5402 < count__5271_5401)){
var vec__5273_5403 = cljs.core._nth.call(null,chunk__5270_5400,i__5272_5402);
var column_5404 = cljs.core.nth.call(null,vec__5273_5403,(0),null);
var column_info_5405 = cljs.core.nth.call(null,vec__5273_5403,(1),null);
var seq__5276_5406 = cljs.core.seq.call(null,column_info_5405);
var chunk__5277_5407 = null;
var count__5278_5408 = (0);
var i__5279_5409 = (0);
while(true){
if((i__5279_5409 < count__5278_5408)){
var map__5280_5410 = cljs.core._nth.call(null,chunk__5277_5407,i__5279_5409);
var map__5280_5411__$1 = (((((!((map__5280_5410 == null))))?(((((map__5280_5410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5280_5410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5280_5410):map__5280_5410);
var gline_5412 = cljs.core.get.call(null,map__5280_5411__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5413 = cljs.core.get.call(null,map__5280_5411__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5414 = cljs.core.get.call(null,map__5280_5411__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5412], null),cljs.core.fnil.call(null,((function (seq__5276_5406,chunk__5277_5407,count__5278_5408,i__5279_5409,seq__5269_5399,chunk__5270_5400,count__5271_5401,i__5272_5402,seq__5233_5295,chunk__5234_5296,count__5235_5297,i__5236_5298,map__5280_5410,map__5280_5411__$1,gline_5412,gcol_5413,name_5414,vec__5273_5403,column_5404,column_info_5405,vec__5266_5396,line_5397,columns_5398,seq__5233_5390__$1,temp__5735__auto___5389,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5413], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5397,new cljs.core.Keyword(null,"col","col",-1959363084),column_5404,new cljs.core.Keyword(null,"name","name",1843675177),name_5414], null));
});})(seq__5276_5406,chunk__5277_5407,count__5278_5408,i__5279_5409,seq__5269_5399,chunk__5270_5400,count__5271_5401,i__5272_5402,seq__5233_5295,chunk__5234_5296,count__5235_5297,i__5236_5298,map__5280_5410,map__5280_5411__$1,gline_5412,gcol_5413,name_5414,vec__5273_5403,column_5404,column_info_5405,vec__5266_5396,line_5397,columns_5398,seq__5233_5390__$1,temp__5735__auto___5389,inverted))
,cljs.core.sorted_map.call(null)));


var G__5415 = seq__5276_5406;
var G__5416 = chunk__5277_5407;
var G__5417 = count__5278_5408;
var G__5418 = (i__5279_5409 + (1));
seq__5276_5406 = G__5415;
chunk__5277_5407 = G__5416;
count__5278_5408 = G__5417;
i__5279_5409 = G__5418;
continue;
} else {
var temp__5735__auto___5419__$1 = cljs.core.seq.call(null,seq__5276_5406);
if(temp__5735__auto___5419__$1){
var seq__5276_5420__$1 = temp__5735__auto___5419__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5276_5420__$1)){
var c__4461__auto___5421 = cljs.core.chunk_first.call(null,seq__5276_5420__$1);
var G__5422 = cljs.core.chunk_rest.call(null,seq__5276_5420__$1);
var G__5423 = c__4461__auto___5421;
var G__5424 = cljs.core.count.call(null,c__4461__auto___5421);
var G__5425 = (0);
seq__5276_5406 = G__5422;
chunk__5277_5407 = G__5423;
count__5278_5408 = G__5424;
i__5279_5409 = G__5425;
continue;
} else {
var map__5282_5426 = cljs.core.first.call(null,seq__5276_5420__$1);
var map__5282_5427__$1 = (((((!((map__5282_5426 == null))))?(((((map__5282_5426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5282_5426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5282_5426):map__5282_5426);
var gline_5428 = cljs.core.get.call(null,map__5282_5427__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5429 = cljs.core.get.call(null,map__5282_5427__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5430 = cljs.core.get.call(null,map__5282_5427__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5428], null),cljs.core.fnil.call(null,((function (seq__5276_5406,chunk__5277_5407,count__5278_5408,i__5279_5409,seq__5269_5399,chunk__5270_5400,count__5271_5401,i__5272_5402,seq__5233_5295,chunk__5234_5296,count__5235_5297,i__5236_5298,map__5282_5426,map__5282_5427__$1,gline_5428,gcol_5429,name_5430,seq__5276_5420__$1,temp__5735__auto___5419__$1,vec__5273_5403,column_5404,column_info_5405,vec__5266_5396,line_5397,columns_5398,seq__5233_5390__$1,temp__5735__auto___5389,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5429], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5397,new cljs.core.Keyword(null,"col","col",-1959363084),column_5404,new cljs.core.Keyword(null,"name","name",1843675177),name_5430], null));
});})(seq__5276_5406,chunk__5277_5407,count__5278_5408,i__5279_5409,seq__5269_5399,chunk__5270_5400,count__5271_5401,i__5272_5402,seq__5233_5295,chunk__5234_5296,count__5235_5297,i__5236_5298,map__5282_5426,map__5282_5427__$1,gline_5428,gcol_5429,name_5430,seq__5276_5420__$1,temp__5735__auto___5419__$1,vec__5273_5403,column_5404,column_info_5405,vec__5266_5396,line_5397,columns_5398,seq__5233_5390__$1,temp__5735__auto___5389,inverted))
,cljs.core.sorted_map.call(null)));


var G__5431 = cljs.core.next.call(null,seq__5276_5420__$1);
var G__5432 = null;
var G__5433 = (0);
var G__5434 = (0);
seq__5276_5406 = G__5431;
chunk__5277_5407 = G__5432;
count__5278_5408 = G__5433;
i__5279_5409 = G__5434;
continue;
}
} else {
}
}
break;
}


var G__5435 = seq__5269_5399;
var G__5436 = chunk__5270_5400;
var G__5437 = count__5271_5401;
var G__5438 = (i__5272_5402 + (1));
seq__5269_5399 = G__5435;
chunk__5270_5400 = G__5436;
count__5271_5401 = G__5437;
i__5272_5402 = G__5438;
continue;
} else {
var temp__5735__auto___5439__$1 = cljs.core.seq.call(null,seq__5269_5399);
if(temp__5735__auto___5439__$1){
var seq__5269_5440__$1 = temp__5735__auto___5439__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5269_5440__$1)){
var c__4461__auto___5441 = cljs.core.chunk_first.call(null,seq__5269_5440__$1);
var G__5442 = cljs.core.chunk_rest.call(null,seq__5269_5440__$1);
var G__5443 = c__4461__auto___5441;
var G__5444 = cljs.core.count.call(null,c__4461__auto___5441);
var G__5445 = (0);
seq__5269_5399 = G__5442;
chunk__5270_5400 = G__5443;
count__5271_5401 = G__5444;
i__5272_5402 = G__5445;
continue;
} else {
var vec__5284_5446 = cljs.core.first.call(null,seq__5269_5440__$1);
var column_5447 = cljs.core.nth.call(null,vec__5284_5446,(0),null);
var column_info_5448 = cljs.core.nth.call(null,vec__5284_5446,(1),null);
var seq__5287_5449 = cljs.core.seq.call(null,column_info_5448);
var chunk__5288_5450 = null;
var count__5289_5451 = (0);
var i__5290_5452 = (0);
while(true){
if((i__5290_5452 < count__5289_5451)){
var map__5291_5453 = cljs.core._nth.call(null,chunk__5288_5450,i__5290_5452);
var map__5291_5454__$1 = (((((!((map__5291_5453 == null))))?(((((map__5291_5453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5291_5453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5291_5453):map__5291_5453);
var gline_5455 = cljs.core.get.call(null,map__5291_5454__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5456 = cljs.core.get.call(null,map__5291_5454__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5457 = cljs.core.get.call(null,map__5291_5454__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5455], null),cljs.core.fnil.call(null,((function (seq__5287_5449,chunk__5288_5450,count__5289_5451,i__5290_5452,seq__5269_5399,chunk__5270_5400,count__5271_5401,i__5272_5402,seq__5233_5295,chunk__5234_5296,count__5235_5297,i__5236_5298,map__5291_5453,map__5291_5454__$1,gline_5455,gcol_5456,name_5457,vec__5284_5446,column_5447,column_info_5448,seq__5269_5440__$1,temp__5735__auto___5439__$1,vec__5266_5396,line_5397,columns_5398,seq__5233_5390__$1,temp__5735__auto___5389,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5456], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5397,new cljs.core.Keyword(null,"col","col",-1959363084),column_5447,new cljs.core.Keyword(null,"name","name",1843675177),name_5457], null));
});})(seq__5287_5449,chunk__5288_5450,count__5289_5451,i__5290_5452,seq__5269_5399,chunk__5270_5400,count__5271_5401,i__5272_5402,seq__5233_5295,chunk__5234_5296,count__5235_5297,i__5236_5298,map__5291_5453,map__5291_5454__$1,gline_5455,gcol_5456,name_5457,vec__5284_5446,column_5447,column_info_5448,seq__5269_5440__$1,temp__5735__auto___5439__$1,vec__5266_5396,line_5397,columns_5398,seq__5233_5390__$1,temp__5735__auto___5389,inverted))
,cljs.core.sorted_map.call(null)));


var G__5458 = seq__5287_5449;
var G__5459 = chunk__5288_5450;
var G__5460 = count__5289_5451;
var G__5461 = (i__5290_5452 + (1));
seq__5287_5449 = G__5458;
chunk__5288_5450 = G__5459;
count__5289_5451 = G__5460;
i__5290_5452 = G__5461;
continue;
} else {
var temp__5735__auto___5462__$2 = cljs.core.seq.call(null,seq__5287_5449);
if(temp__5735__auto___5462__$2){
var seq__5287_5463__$1 = temp__5735__auto___5462__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5287_5463__$1)){
var c__4461__auto___5464 = cljs.core.chunk_first.call(null,seq__5287_5463__$1);
var G__5465 = cljs.core.chunk_rest.call(null,seq__5287_5463__$1);
var G__5466 = c__4461__auto___5464;
var G__5467 = cljs.core.count.call(null,c__4461__auto___5464);
var G__5468 = (0);
seq__5287_5449 = G__5465;
chunk__5288_5450 = G__5466;
count__5289_5451 = G__5467;
i__5290_5452 = G__5468;
continue;
} else {
var map__5293_5469 = cljs.core.first.call(null,seq__5287_5463__$1);
var map__5293_5470__$1 = (((((!((map__5293_5469 == null))))?(((((map__5293_5469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5293_5469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5293_5469):map__5293_5469);
var gline_5471 = cljs.core.get.call(null,map__5293_5470__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5472 = cljs.core.get.call(null,map__5293_5470__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5473 = cljs.core.get.call(null,map__5293_5470__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5471], null),cljs.core.fnil.call(null,((function (seq__5287_5449,chunk__5288_5450,count__5289_5451,i__5290_5452,seq__5269_5399,chunk__5270_5400,count__5271_5401,i__5272_5402,seq__5233_5295,chunk__5234_5296,count__5235_5297,i__5236_5298,map__5293_5469,map__5293_5470__$1,gline_5471,gcol_5472,name_5473,seq__5287_5463__$1,temp__5735__auto___5462__$2,vec__5284_5446,column_5447,column_info_5448,seq__5269_5440__$1,temp__5735__auto___5439__$1,vec__5266_5396,line_5397,columns_5398,seq__5233_5390__$1,temp__5735__auto___5389,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5472], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5397,new cljs.core.Keyword(null,"col","col",-1959363084),column_5447,new cljs.core.Keyword(null,"name","name",1843675177),name_5473], null));
});})(seq__5287_5449,chunk__5288_5450,count__5289_5451,i__5290_5452,seq__5269_5399,chunk__5270_5400,count__5271_5401,i__5272_5402,seq__5233_5295,chunk__5234_5296,count__5235_5297,i__5236_5298,map__5293_5469,map__5293_5470__$1,gline_5471,gcol_5472,name_5473,seq__5287_5463__$1,temp__5735__auto___5462__$2,vec__5284_5446,column_5447,column_info_5448,seq__5269_5440__$1,temp__5735__auto___5439__$1,vec__5266_5396,line_5397,columns_5398,seq__5233_5390__$1,temp__5735__auto___5389,inverted))
,cljs.core.sorted_map.call(null)));


var G__5474 = cljs.core.next.call(null,seq__5287_5463__$1);
var G__5475 = null;
var G__5476 = (0);
var G__5477 = (0);
seq__5287_5449 = G__5474;
chunk__5288_5450 = G__5475;
count__5289_5451 = G__5476;
i__5290_5452 = G__5477;
continue;
}
} else {
}
}
break;
}


var G__5478 = cljs.core.next.call(null,seq__5269_5440__$1);
var G__5479 = null;
var G__5480 = (0);
var G__5481 = (0);
seq__5269_5399 = G__5478;
chunk__5270_5400 = G__5479;
count__5271_5401 = G__5480;
i__5272_5402 = G__5481;
continue;
}
} else {
}
}
break;
}


var G__5482 = cljs.core.next.call(null,seq__5233_5390__$1);
var G__5483 = null;
var G__5484 = (0);
var G__5485 = (0);
seq__5233_5295 = G__5482;
chunk__5234_5296 = G__5483;
count__5235_5297 = G__5484;
i__5236_5298 = G__5485;
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
