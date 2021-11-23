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
return cljs.core.reduce.call(null,(function (m,p__4877){
var vec__4878 = p__4877;
var i = cljs.core.nth.call(null,vec__4878,(0),null);
var v = cljs.core.nth.call(null,vec__4878,(1),null);
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
var vec__4881 = seg;
var gcol = cljs.core.nth.call(null,vec__4881,(0),null);
var source = cljs.core.nth.call(null,vec__4881,(1),null);
var line = cljs.core.nth.call(null,vec__4881,(2),null);
var col = cljs.core.nth.call(null,vec__4881,(3),null);
var name = cljs.core.nth.call(null,vec__4881,(4),null);
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
var vec__4884 = seg;
var gcol = cljs.core.nth.call(null,vec__4884,(0),null);
var source = cljs.core.nth.call(null,vec__4884,(1),null);
var line = cljs.core.nth.call(null,vec__4884,(2),null);
var col = cljs.core.nth.call(null,vec__4884,(3),null);
var name = cljs.core.nth.call(null,vec__4884,(4),null);
var vec__4887 = relseg;
var rgcol = cljs.core.nth.call(null,vec__4887,(0),null);
var rsource = cljs.core.nth.call(null,vec__4887,(1),null);
var rline = cljs.core.nth.call(null,vec__4887,(2),null);
var rcol = cljs.core.nth.call(null,vec__4887,(3),null);
var rname = cljs.core.nth.call(null,vec__4887,(4),null);
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
var map__4890 = segmap;
var map__4890__$1 = (((((!((map__4890 == null))))?(((((map__4890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4890):map__4890);
var gcol = cljs.core.get.call(null,map__4890__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__4890__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__4890__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__4890__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__4890__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__4890,map__4890__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__4890,map__4890__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__4890,map__4890__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__4890,map__4890__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__4890,map__4890__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__4890,map__4890__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__4893 = arguments.length;
switch (G__4893) {
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
var vec__4894 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__4898 = cljs.core.next.call(null,segs__$1);
var G__4899 = nrelseg;
var G__4900 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__4898;
relseg__$1 = G__4899;
result__$1 = G__4900;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__4894,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__4894,(1),null);
var G__4901 = (gline + (1));
var G__4902 = cljs.core.next.call(null,lines__$1);
var G__4903 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__4904 = result__$1;
gline = G__4901;
lines__$1 = G__4902;
relseg = G__4903;
result = G__4904;
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
var map__4906 = segmap;
var map__4906__$1 = (((((!((map__4906 == null))))?(((((map__4906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4906):map__4906);
var gcol = cljs.core.get.call(null,map__4906__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__4906__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__4906__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__4906__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__4906__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__4906,map__4906__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__4906,map__4906__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__4905_SHARP_){
return cljs.core.conj.call(null,p1__4905_SHARP_,d__$1);
});})(map__4906,map__4906__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__4906,map__4906__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__4909 = arguments.length;
switch (G__4909) {
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
var vec__4910 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__4914 = cljs.core.next.call(null,segs__$1);
var G__4915 = nrelseg;
var G__4916 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__4914;
relseg__$1 = G__4915;
result__$1 = G__4916;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__4910,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__4910,(1),null);
var G__4917 = (gline + (1));
var G__4918 = cljs.core.next.call(null,lines__$1);
var G__4919 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__4920 = result__$1;
gline = G__4917;
lines__$1 = G__4918;
relseg = G__4919;
result = G__4920;
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
return (function (p__4921){
var vec__4922 = p__4921;
var _ = cljs.core.nth.call(null,vec__4922,(0),null);
var source = cljs.core.nth.call(null,vec__4922,(1),null);
var line = cljs.core.nth.call(null,vec__4922,(2),null);
var col = cljs.core.nth.call(null,vec__4922,(3),null);
var name = cljs.core.nth.call(null,vec__4922,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__4925){
var vec__4926 = p__4925;
var gcol = cljs.core.nth.call(null,vec__4926,(0),null);
var sidx = cljs.core.nth.call(null,vec__4926,(1),null);
var line = cljs.core.nth.call(null,vec__4926,(2),null);
var col = cljs.core.nth.call(null,vec__4926,(3),null);
var name = cljs.core.nth.call(null,vec__4926,(4),null);
var seg = vec__4926;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__4926,gcol,sidx,line,col,name,seg,relseg){
return (function (p__4929){
var vec__4930 = p__4929;
var _ = cljs.core.nth.call(null,vec__4930,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__4930,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__4930,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__4930,(3),null);
var lname = cljs.core.nth.call(null,vec__4930,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__4926,gcol,sidx,line,col,name,seg,relseg))
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
var seq__4936 = cljs.core.seq.call(null,infos);
var chunk__4937 = null;
var count__4938 = (0);
var i__4939 = (0);
while(true){
if((i__4939 < count__4938)){
var info = cljs.core._nth.call(null,chunk__4937,i__4939);
var segv_5018 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_5019 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_5020 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_5019 > (lc_5020 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__4936,chunk__4937,count__4938,i__4939,segv_5018,gline_5019,lc_5020,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_5019 - (lc_5020 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_5018], null));
});})(seq__4936,chunk__4937,count__4938,i__4939,segv_5018,gline_5019,lc_5020,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__4936,chunk__4937,count__4938,i__4939,segv_5018,gline_5019,lc_5020,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5019], null),cljs.core.conj,segv_5018);
});})(seq__4936,chunk__4937,count__4938,i__4939,segv_5018,gline_5019,lc_5020,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__5021 = seq__4936;
var G__5022 = chunk__4937;
var G__5023 = count__4938;
var G__5024 = (i__4939 + (1));
seq__4936 = G__5021;
chunk__4937 = G__5022;
count__4938 = G__5023;
i__4939 = G__5024;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__4936);
if(temp__5735__auto__){
var seq__4936__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4936__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__4936__$1);
var G__5025 = cljs.core.chunk_rest.call(null,seq__4936__$1);
var G__5026 = c__4461__auto__;
var G__5027 = cljs.core.count.call(null,c__4461__auto__);
var G__5028 = (0);
seq__4936 = G__5025;
chunk__4937 = G__5026;
count__4938 = G__5027;
i__4939 = G__5028;
continue;
} else {
var info = cljs.core.first.call(null,seq__4936__$1);
var segv_5029 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_5030 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_5031 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_5030 > (lc_5031 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__4936,chunk__4937,count__4938,i__4939,segv_5029,gline_5030,lc_5031,info,seq__4936__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_5030 - (lc_5031 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_5029], null));
});})(seq__4936,chunk__4937,count__4938,i__4939,segv_5029,gline_5030,lc_5031,info,seq__4936__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__4936,chunk__4937,count__4938,i__4939,segv_5029,gline_5030,lc_5031,info,seq__4936__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5030], null),cljs.core.conj,segv_5029);
});})(seq__4936,chunk__4937,count__4938,i__4939,segv_5029,gline_5030,lc_5031,info,seq__4936__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__5032 = cljs.core.next.call(null,seq__4936__$1);
var G__5033 = null;
var G__5034 = (0);
var G__5035 = (0);
seq__4936 = G__5032;
chunk__4937 = G__5033;
count__4938 = G__5034;
i__4939 = G__5035;
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
var seq__4940_5036 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__4941_5037 = null;
var count__4942_5038 = (0);
var i__4943_5039 = (0);
while(true){
if((i__4943_5039 < count__4942_5038)){
var vec__4944_5040 = cljs.core._nth.call(null,chunk__4941_5037,i__4943_5039);
var source_idx_5041 = cljs.core.nth.call(null,vec__4944_5040,(0),null);
var vec__4947_5042 = cljs.core.nth.call(null,vec__4944_5040,(1),null);
var __5043 = cljs.core.nth.call(null,vec__4947_5042,(0),null);
var lines_5044__$1 = cljs.core.nth.call(null,vec__4947_5042,(1),null);
var seq__4950_5045 = cljs.core.seq.call(null,lines_5044__$1);
var chunk__4951_5046 = null;
var count__4952_5047 = (0);
var i__4953_5048 = (0);
while(true){
if((i__4953_5048 < count__4952_5047)){
var vec__4954_5049 = cljs.core._nth.call(null,chunk__4951_5046,i__4953_5048);
var line_5050 = cljs.core.nth.call(null,vec__4954_5049,(0),null);
var cols_5051 = cljs.core.nth.call(null,vec__4954_5049,(1),null);
var seq__4957_5052 = cljs.core.seq.call(null,cols_5051);
var chunk__4958_5053 = null;
var count__4959_5054 = (0);
var i__4960_5055 = (0);
while(true){
if((i__4960_5055 < count__4959_5054)){
var vec__4961_5056 = cljs.core._nth.call(null,chunk__4958_5053,i__4960_5055);
var col_5057 = cljs.core.nth.call(null,vec__4961_5056,(0),null);
var infos_5058 = cljs.core.nth.call(null,vec__4961_5056,(1),null);
encode_cols.call(null,infos_5058,source_idx_5041,line_5050,col_5057);


var G__5059 = seq__4957_5052;
var G__5060 = chunk__4958_5053;
var G__5061 = count__4959_5054;
var G__5062 = (i__4960_5055 + (1));
seq__4957_5052 = G__5059;
chunk__4958_5053 = G__5060;
count__4959_5054 = G__5061;
i__4960_5055 = G__5062;
continue;
} else {
var temp__5735__auto___5063 = cljs.core.seq.call(null,seq__4957_5052);
if(temp__5735__auto___5063){
var seq__4957_5064__$1 = temp__5735__auto___5063;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4957_5064__$1)){
var c__4461__auto___5065 = cljs.core.chunk_first.call(null,seq__4957_5064__$1);
var G__5066 = cljs.core.chunk_rest.call(null,seq__4957_5064__$1);
var G__5067 = c__4461__auto___5065;
var G__5068 = cljs.core.count.call(null,c__4461__auto___5065);
var G__5069 = (0);
seq__4957_5052 = G__5066;
chunk__4958_5053 = G__5067;
count__4959_5054 = G__5068;
i__4960_5055 = G__5069;
continue;
} else {
var vec__4964_5070 = cljs.core.first.call(null,seq__4957_5064__$1);
var col_5071 = cljs.core.nth.call(null,vec__4964_5070,(0),null);
var infos_5072 = cljs.core.nth.call(null,vec__4964_5070,(1),null);
encode_cols.call(null,infos_5072,source_idx_5041,line_5050,col_5071);


var G__5073 = cljs.core.next.call(null,seq__4957_5064__$1);
var G__5074 = null;
var G__5075 = (0);
var G__5076 = (0);
seq__4957_5052 = G__5073;
chunk__4958_5053 = G__5074;
count__4959_5054 = G__5075;
i__4960_5055 = G__5076;
continue;
}
} else {
}
}
break;
}


var G__5077 = seq__4950_5045;
var G__5078 = chunk__4951_5046;
var G__5079 = count__4952_5047;
var G__5080 = (i__4953_5048 + (1));
seq__4950_5045 = G__5077;
chunk__4951_5046 = G__5078;
count__4952_5047 = G__5079;
i__4953_5048 = G__5080;
continue;
} else {
var temp__5735__auto___5081 = cljs.core.seq.call(null,seq__4950_5045);
if(temp__5735__auto___5081){
var seq__4950_5082__$1 = temp__5735__auto___5081;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4950_5082__$1)){
var c__4461__auto___5083 = cljs.core.chunk_first.call(null,seq__4950_5082__$1);
var G__5084 = cljs.core.chunk_rest.call(null,seq__4950_5082__$1);
var G__5085 = c__4461__auto___5083;
var G__5086 = cljs.core.count.call(null,c__4461__auto___5083);
var G__5087 = (0);
seq__4950_5045 = G__5084;
chunk__4951_5046 = G__5085;
count__4952_5047 = G__5086;
i__4953_5048 = G__5087;
continue;
} else {
var vec__4967_5088 = cljs.core.first.call(null,seq__4950_5082__$1);
var line_5089 = cljs.core.nth.call(null,vec__4967_5088,(0),null);
var cols_5090 = cljs.core.nth.call(null,vec__4967_5088,(1),null);
var seq__4970_5091 = cljs.core.seq.call(null,cols_5090);
var chunk__4971_5092 = null;
var count__4972_5093 = (0);
var i__4973_5094 = (0);
while(true){
if((i__4973_5094 < count__4972_5093)){
var vec__4974_5095 = cljs.core._nth.call(null,chunk__4971_5092,i__4973_5094);
var col_5096 = cljs.core.nth.call(null,vec__4974_5095,(0),null);
var infos_5097 = cljs.core.nth.call(null,vec__4974_5095,(1),null);
encode_cols.call(null,infos_5097,source_idx_5041,line_5089,col_5096);


var G__5098 = seq__4970_5091;
var G__5099 = chunk__4971_5092;
var G__5100 = count__4972_5093;
var G__5101 = (i__4973_5094 + (1));
seq__4970_5091 = G__5098;
chunk__4971_5092 = G__5099;
count__4972_5093 = G__5100;
i__4973_5094 = G__5101;
continue;
} else {
var temp__5735__auto___5102__$1 = cljs.core.seq.call(null,seq__4970_5091);
if(temp__5735__auto___5102__$1){
var seq__4970_5103__$1 = temp__5735__auto___5102__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4970_5103__$1)){
var c__4461__auto___5104 = cljs.core.chunk_first.call(null,seq__4970_5103__$1);
var G__5105 = cljs.core.chunk_rest.call(null,seq__4970_5103__$1);
var G__5106 = c__4461__auto___5104;
var G__5107 = cljs.core.count.call(null,c__4461__auto___5104);
var G__5108 = (0);
seq__4970_5091 = G__5105;
chunk__4971_5092 = G__5106;
count__4972_5093 = G__5107;
i__4973_5094 = G__5108;
continue;
} else {
var vec__4977_5109 = cljs.core.first.call(null,seq__4970_5103__$1);
var col_5110 = cljs.core.nth.call(null,vec__4977_5109,(0),null);
var infos_5111 = cljs.core.nth.call(null,vec__4977_5109,(1),null);
encode_cols.call(null,infos_5111,source_idx_5041,line_5089,col_5110);


var G__5112 = cljs.core.next.call(null,seq__4970_5103__$1);
var G__5113 = null;
var G__5114 = (0);
var G__5115 = (0);
seq__4970_5091 = G__5112;
chunk__4971_5092 = G__5113;
count__4972_5093 = G__5114;
i__4973_5094 = G__5115;
continue;
}
} else {
}
}
break;
}


var G__5116 = cljs.core.next.call(null,seq__4950_5082__$1);
var G__5117 = null;
var G__5118 = (0);
var G__5119 = (0);
seq__4950_5045 = G__5116;
chunk__4951_5046 = G__5117;
count__4952_5047 = G__5118;
i__4953_5048 = G__5119;
continue;
}
} else {
}
}
break;
}


var G__5120 = seq__4940_5036;
var G__5121 = chunk__4941_5037;
var G__5122 = count__4942_5038;
var G__5123 = (i__4943_5039 + (1));
seq__4940_5036 = G__5120;
chunk__4941_5037 = G__5121;
count__4942_5038 = G__5122;
i__4943_5039 = G__5123;
continue;
} else {
var temp__5735__auto___5124 = cljs.core.seq.call(null,seq__4940_5036);
if(temp__5735__auto___5124){
var seq__4940_5125__$1 = temp__5735__auto___5124;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4940_5125__$1)){
var c__4461__auto___5126 = cljs.core.chunk_first.call(null,seq__4940_5125__$1);
var G__5127 = cljs.core.chunk_rest.call(null,seq__4940_5125__$1);
var G__5128 = c__4461__auto___5126;
var G__5129 = cljs.core.count.call(null,c__4461__auto___5126);
var G__5130 = (0);
seq__4940_5036 = G__5127;
chunk__4941_5037 = G__5128;
count__4942_5038 = G__5129;
i__4943_5039 = G__5130;
continue;
} else {
var vec__4980_5131 = cljs.core.first.call(null,seq__4940_5125__$1);
var source_idx_5132 = cljs.core.nth.call(null,vec__4980_5131,(0),null);
var vec__4983_5133 = cljs.core.nth.call(null,vec__4980_5131,(1),null);
var __5134 = cljs.core.nth.call(null,vec__4983_5133,(0),null);
var lines_5135__$1 = cljs.core.nth.call(null,vec__4983_5133,(1),null);
var seq__4986_5136 = cljs.core.seq.call(null,lines_5135__$1);
var chunk__4987_5137 = null;
var count__4988_5138 = (0);
var i__4989_5139 = (0);
while(true){
if((i__4989_5139 < count__4988_5138)){
var vec__4990_5140 = cljs.core._nth.call(null,chunk__4987_5137,i__4989_5139);
var line_5141 = cljs.core.nth.call(null,vec__4990_5140,(0),null);
var cols_5142 = cljs.core.nth.call(null,vec__4990_5140,(1),null);
var seq__4993_5143 = cljs.core.seq.call(null,cols_5142);
var chunk__4994_5144 = null;
var count__4995_5145 = (0);
var i__4996_5146 = (0);
while(true){
if((i__4996_5146 < count__4995_5145)){
var vec__4997_5147 = cljs.core._nth.call(null,chunk__4994_5144,i__4996_5146);
var col_5148 = cljs.core.nth.call(null,vec__4997_5147,(0),null);
var infos_5149 = cljs.core.nth.call(null,vec__4997_5147,(1),null);
encode_cols.call(null,infos_5149,source_idx_5132,line_5141,col_5148);


var G__5150 = seq__4993_5143;
var G__5151 = chunk__4994_5144;
var G__5152 = count__4995_5145;
var G__5153 = (i__4996_5146 + (1));
seq__4993_5143 = G__5150;
chunk__4994_5144 = G__5151;
count__4995_5145 = G__5152;
i__4996_5146 = G__5153;
continue;
} else {
var temp__5735__auto___5154__$1 = cljs.core.seq.call(null,seq__4993_5143);
if(temp__5735__auto___5154__$1){
var seq__4993_5155__$1 = temp__5735__auto___5154__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4993_5155__$1)){
var c__4461__auto___5156 = cljs.core.chunk_first.call(null,seq__4993_5155__$1);
var G__5157 = cljs.core.chunk_rest.call(null,seq__4993_5155__$1);
var G__5158 = c__4461__auto___5156;
var G__5159 = cljs.core.count.call(null,c__4461__auto___5156);
var G__5160 = (0);
seq__4993_5143 = G__5157;
chunk__4994_5144 = G__5158;
count__4995_5145 = G__5159;
i__4996_5146 = G__5160;
continue;
} else {
var vec__5000_5161 = cljs.core.first.call(null,seq__4993_5155__$1);
var col_5162 = cljs.core.nth.call(null,vec__5000_5161,(0),null);
var infos_5163 = cljs.core.nth.call(null,vec__5000_5161,(1),null);
encode_cols.call(null,infos_5163,source_idx_5132,line_5141,col_5162);


var G__5164 = cljs.core.next.call(null,seq__4993_5155__$1);
var G__5165 = null;
var G__5166 = (0);
var G__5167 = (0);
seq__4993_5143 = G__5164;
chunk__4994_5144 = G__5165;
count__4995_5145 = G__5166;
i__4996_5146 = G__5167;
continue;
}
} else {
}
}
break;
}


var G__5168 = seq__4986_5136;
var G__5169 = chunk__4987_5137;
var G__5170 = count__4988_5138;
var G__5171 = (i__4989_5139 + (1));
seq__4986_5136 = G__5168;
chunk__4987_5137 = G__5169;
count__4988_5138 = G__5170;
i__4989_5139 = G__5171;
continue;
} else {
var temp__5735__auto___5172__$1 = cljs.core.seq.call(null,seq__4986_5136);
if(temp__5735__auto___5172__$1){
var seq__4986_5173__$1 = temp__5735__auto___5172__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4986_5173__$1)){
var c__4461__auto___5174 = cljs.core.chunk_first.call(null,seq__4986_5173__$1);
var G__5175 = cljs.core.chunk_rest.call(null,seq__4986_5173__$1);
var G__5176 = c__4461__auto___5174;
var G__5177 = cljs.core.count.call(null,c__4461__auto___5174);
var G__5178 = (0);
seq__4986_5136 = G__5175;
chunk__4987_5137 = G__5176;
count__4988_5138 = G__5177;
i__4989_5139 = G__5178;
continue;
} else {
var vec__5003_5179 = cljs.core.first.call(null,seq__4986_5173__$1);
var line_5180 = cljs.core.nth.call(null,vec__5003_5179,(0),null);
var cols_5181 = cljs.core.nth.call(null,vec__5003_5179,(1),null);
var seq__5006_5182 = cljs.core.seq.call(null,cols_5181);
var chunk__5007_5183 = null;
var count__5008_5184 = (0);
var i__5009_5185 = (0);
while(true){
if((i__5009_5185 < count__5008_5184)){
var vec__5010_5186 = cljs.core._nth.call(null,chunk__5007_5183,i__5009_5185);
var col_5187 = cljs.core.nth.call(null,vec__5010_5186,(0),null);
var infos_5188 = cljs.core.nth.call(null,vec__5010_5186,(1),null);
encode_cols.call(null,infos_5188,source_idx_5132,line_5180,col_5187);


var G__5189 = seq__5006_5182;
var G__5190 = chunk__5007_5183;
var G__5191 = count__5008_5184;
var G__5192 = (i__5009_5185 + (1));
seq__5006_5182 = G__5189;
chunk__5007_5183 = G__5190;
count__5008_5184 = G__5191;
i__5009_5185 = G__5192;
continue;
} else {
var temp__5735__auto___5193__$2 = cljs.core.seq.call(null,seq__5006_5182);
if(temp__5735__auto___5193__$2){
var seq__5006_5194__$1 = temp__5735__auto___5193__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5006_5194__$1)){
var c__4461__auto___5195 = cljs.core.chunk_first.call(null,seq__5006_5194__$1);
var G__5196 = cljs.core.chunk_rest.call(null,seq__5006_5194__$1);
var G__5197 = c__4461__auto___5195;
var G__5198 = cljs.core.count.call(null,c__4461__auto___5195);
var G__5199 = (0);
seq__5006_5182 = G__5196;
chunk__5007_5183 = G__5197;
count__5008_5184 = G__5198;
i__5009_5185 = G__5199;
continue;
} else {
var vec__5013_5200 = cljs.core.first.call(null,seq__5006_5194__$1);
var col_5201 = cljs.core.nth.call(null,vec__5013_5200,(0),null);
var infos_5202 = cljs.core.nth.call(null,vec__5013_5200,(1),null);
encode_cols.call(null,infos_5202,source_idx_5132,line_5180,col_5201);


var G__5203 = cljs.core.next.call(null,seq__5006_5194__$1);
var G__5204 = null;
var G__5205 = (0);
var G__5206 = (0);
seq__5006_5182 = G__5203;
chunk__5007_5183 = G__5204;
count__5008_5184 = G__5205;
i__5009_5185 = G__5206;
continue;
}
} else {
}
}
break;
}


var G__5207 = cljs.core.next.call(null,seq__4986_5173__$1);
var G__5208 = null;
var G__5209 = (0);
var G__5210 = (0);
seq__4986_5136 = G__5207;
chunk__4987_5137 = G__5208;
count__4988_5138 = G__5209;
i__4989_5139 = G__5210;
continue;
}
} else {
}
}
break;
}


var G__5211 = cljs.core.next.call(null,seq__4940_5125__$1);
var G__5212 = null;
var G__5213 = (0);
var G__5214 = (0);
seq__4940_5036 = G__5211;
chunk__4941_5037 = G__5212;
count__4942_5038 = G__5213;
i__4943_5039 = G__5214;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__5016 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__4933_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__4933_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__4934_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__4934_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__4935_SHARP_){
return clojure.string.join.call(null,",",p1__4935_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__5017 = G__5016;
goog.object.set(G__5017,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__5017;
} else {
return G__5016;
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
var vec__5215 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__5215,(0),null);
var col_map = cljs.core.nth.call(null,vec__5215,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__5218 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__5218,(0),null);
var infos = cljs.core.nth.call(null,vec__5218,(1),null);
var G__5224 = cljs.core.next.call(null,col_map_seq);
var G__5225 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__5218,col,infos,vec__5215,line,col_map){
return (function (v,p__5221){
var map__5222 = p__5221;
var map__5222__$1 = (((((!((map__5222 == null))))?(((((map__5222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5222):map__5222);
var gline = cljs.core.get.call(null,map__5222__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__5222__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__5218,col,infos,vec__5215,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__5224;
new_cols = G__5225;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__5226 = cljs.core.next.call(null,line_map_seq);
var G__5227 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__5226;
new_lines = G__5227;
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
var seq__5228_5290 = cljs.core.seq.call(null,reverse_map);
var chunk__5229_5291 = null;
var count__5230_5292 = (0);
var i__5231_5293 = (0);
while(true){
if((i__5231_5293 < count__5230_5292)){
var vec__5232_5294 = cljs.core._nth.call(null,chunk__5229_5291,i__5231_5293);
var line_5295 = cljs.core.nth.call(null,vec__5232_5294,(0),null);
var columns_5296 = cljs.core.nth.call(null,vec__5232_5294,(1),null);
var seq__5235_5297 = cljs.core.seq.call(null,columns_5296);
var chunk__5236_5298 = null;
var count__5237_5299 = (0);
var i__5238_5300 = (0);
while(true){
if((i__5238_5300 < count__5237_5299)){
var vec__5239_5301 = cljs.core._nth.call(null,chunk__5236_5298,i__5238_5300);
var column_5302 = cljs.core.nth.call(null,vec__5239_5301,(0),null);
var column_info_5303 = cljs.core.nth.call(null,vec__5239_5301,(1),null);
var seq__5242_5304 = cljs.core.seq.call(null,column_info_5303);
var chunk__5243_5305 = null;
var count__5244_5306 = (0);
var i__5245_5307 = (0);
while(true){
if((i__5245_5307 < count__5244_5306)){
var map__5246_5308 = cljs.core._nth.call(null,chunk__5243_5305,i__5245_5307);
var map__5246_5309__$1 = (((((!((map__5246_5308 == null))))?(((((map__5246_5308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5246_5308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5246_5308):map__5246_5308);
var gline_5310 = cljs.core.get.call(null,map__5246_5309__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5311 = cljs.core.get.call(null,map__5246_5309__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5312 = cljs.core.get.call(null,map__5246_5309__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5310], null),cljs.core.fnil.call(null,((function (seq__5242_5304,chunk__5243_5305,count__5244_5306,i__5245_5307,seq__5235_5297,chunk__5236_5298,count__5237_5299,i__5238_5300,seq__5228_5290,chunk__5229_5291,count__5230_5292,i__5231_5293,map__5246_5308,map__5246_5309__$1,gline_5310,gcol_5311,name_5312,vec__5239_5301,column_5302,column_info_5303,vec__5232_5294,line_5295,columns_5296,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5311], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5295,new cljs.core.Keyword(null,"col","col",-1959363084),column_5302,new cljs.core.Keyword(null,"name","name",1843675177),name_5312], null));
});})(seq__5242_5304,chunk__5243_5305,count__5244_5306,i__5245_5307,seq__5235_5297,chunk__5236_5298,count__5237_5299,i__5238_5300,seq__5228_5290,chunk__5229_5291,count__5230_5292,i__5231_5293,map__5246_5308,map__5246_5309__$1,gline_5310,gcol_5311,name_5312,vec__5239_5301,column_5302,column_info_5303,vec__5232_5294,line_5295,columns_5296,inverted))
,cljs.core.sorted_map.call(null)));


var G__5313 = seq__5242_5304;
var G__5314 = chunk__5243_5305;
var G__5315 = count__5244_5306;
var G__5316 = (i__5245_5307 + (1));
seq__5242_5304 = G__5313;
chunk__5243_5305 = G__5314;
count__5244_5306 = G__5315;
i__5245_5307 = G__5316;
continue;
} else {
var temp__5735__auto___5317 = cljs.core.seq.call(null,seq__5242_5304);
if(temp__5735__auto___5317){
var seq__5242_5318__$1 = temp__5735__auto___5317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5242_5318__$1)){
var c__4461__auto___5319 = cljs.core.chunk_first.call(null,seq__5242_5318__$1);
var G__5320 = cljs.core.chunk_rest.call(null,seq__5242_5318__$1);
var G__5321 = c__4461__auto___5319;
var G__5322 = cljs.core.count.call(null,c__4461__auto___5319);
var G__5323 = (0);
seq__5242_5304 = G__5320;
chunk__5243_5305 = G__5321;
count__5244_5306 = G__5322;
i__5245_5307 = G__5323;
continue;
} else {
var map__5248_5324 = cljs.core.first.call(null,seq__5242_5318__$1);
var map__5248_5325__$1 = (((((!((map__5248_5324 == null))))?(((((map__5248_5324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5248_5324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5248_5324):map__5248_5324);
var gline_5326 = cljs.core.get.call(null,map__5248_5325__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5327 = cljs.core.get.call(null,map__5248_5325__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5328 = cljs.core.get.call(null,map__5248_5325__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5326], null),cljs.core.fnil.call(null,((function (seq__5242_5304,chunk__5243_5305,count__5244_5306,i__5245_5307,seq__5235_5297,chunk__5236_5298,count__5237_5299,i__5238_5300,seq__5228_5290,chunk__5229_5291,count__5230_5292,i__5231_5293,map__5248_5324,map__5248_5325__$1,gline_5326,gcol_5327,name_5328,seq__5242_5318__$1,temp__5735__auto___5317,vec__5239_5301,column_5302,column_info_5303,vec__5232_5294,line_5295,columns_5296,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5327], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5295,new cljs.core.Keyword(null,"col","col",-1959363084),column_5302,new cljs.core.Keyword(null,"name","name",1843675177),name_5328], null));
});})(seq__5242_5304,chunk__5243_5305,count__5244_5306,i__5245_5307,seq__5235_5297,chunk__5236_5298,count__5237_5299,i__5238_5300,seq__5228_5290,chunk__5229_5291,count__5230_5292,i__5231_5293,map__5248_5324,map__5248_5325__$1,gline_5326,gcol_5327,name_5328,seq__5242_5318__$1,temp__5735__auto___5317,vec__5239_5301,column_5302,column_info_5303,vec__5232_5294,line_5295,columns_5296,inverted))
,cljs.core.sorted_map.call(null)));


var G__5329 = cljs.core.next.call(null,seq__5242_5318__$1);
var G__5330 = null;
var G__5331 = (0);
var G__5332 = (0);
seq__5242_5304 = G__5329;
chunk__5243_5305 = G__5330;
count__5244_5306 = G__5331;
i__5245_5307 = G__5332;
continue;
}
} else {
}
}
break;
}


var G__5333 = seq__5235_5297;
var G__5334 = chunk__5236_5298;
var G__5335 = count__5237_5299;
var G__5336 = (i__5238_5300 + (1));
seq__5235_5297 = G__5333;
chunk__5236_5298 = G__5334;
count__5237_5299 = G__5335;
i__5238_5300 = G__5336;
continue;
} else {
var temp__5735__auto___5337 = cljs.core.seq.call(null,seq__5235_5297);
if(temp__5735__auto___5337){
var seq__5235_5338__$1 = temp__5735__auto___5337;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5235_5338__$1)){
var c__4461__auto___5339 = cljs.core.chunk_first.call(null,seq__5235_5338__$1);
var G__5340 = cljs.core.chunk_rest.call(null,seq__5235_5338__$1);
var G__5341 = c__4461__auto___5339;
var G__5342 = cljs.core.count.call(null,c__4461__auto___5339);
var G__5343 = (0);
seq__5235_5297 = G__5340;
chunk__5236_5298 = G__5341;
count__5237_5299 = G__5342;
i__5238_5300 = G__5343;
continue;
} else {
var vec__5250_5344 = cljs.core.first.call(null,seq__5235_5338__$1);
var column_5345 = cljs.core.nth.call(null,vec__5250_5344,(0),null);
var column_info_5346 = cljs.core.nth.call(null,vec__5250_5344,(1),null);
var seq__5253_5347 = cljs.core.seq.call(null,column_info_5346);
var chunk__5254_5348 = null;
var count__5255_5349 = (0);
var i__5256_5350 = (0);
while(true){
if((i__5256_5350 < count__5255_5349)){
var map__5257_5351 = cljs.core._nth.call(null,chunk__5254_5348,i__5256_5350);
var map__5257_5352__$1 = (((((!((map__5257_5351 == null))))?(((((map__5257_5351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5257_5351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5257_5351):map__5257_5351);
var gline_5353 = cljs.core.get.call(null,map__5257_5352__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5354 = cljs.core.get.call(null,map__5257_5352__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5355 = cljs.core.get.call(null,map__5257_5352__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5353], null),cljs.core.fnil.call(null,((function (seq__5253_5347,chunk__5254_5348,count__5255_5349,i__5256_5350,seq__5235_5297,chunk__5236_5298,count__5237_5299,i__5238_5300,seq__5228_5290,chunk__5229_5291,count__5230_5292,i__5231_5293,map__5257_5351,map__5257_5352__$1,gline_5353,gcol_5354,name_5355,vec__5250_5344,column_5345,column_info_5346,seq__5235_5338__$1,temp__5735__auto___5337,vec__5232_5294,line_5295,columns_5296,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5354], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5295,new cljs.core.Keyword(null,"col","col",-1959363084),column_5345,new cljs.core.Keyword(null,"name","name",1843675177),name_5355], null));
});})(seq__5253_5347,chunk__5254_5348,count__5255_5349,i__5256_5350,seq__5235_5297,chunk__5236_5298,count__5237_5299,i__5238_5300,seq__5228_5290,chunk__5229_5291,count__5230_5292,i__5231_5293,map__5257_5351,map__5257_5352__$1,gline_5353,gcol_5354,name_5355,vec__5250_5344,column_5345,column_info_5346,seq__5235_5338__$1,temp__5735__auto___5337,vec__5232_5294,line_5295,columns_5296,inverted))
,cljs.core.sorted_map.call(null)));


var G__5356 = seq__5253_5347;
var G__5357 = chunk__5254_5348;
var G__5358 = count__5255_5349;
var G__5359 = (i__5256_5350 + (1));
seq__5253_5347 = G__5356;
chunk__5254_5348 = G__5357;
count__5255_5349 = G__5358;
i__5256_5350 = G__5359;
continue;
} else {
var temp__5735__auto___5360__$1 = cljs.core.seq.call(null,seq__5253_5347);
if(temp__5735__auto___5360__$1){
var seq__5253_5361__$1 = temp__5735__auto___5360__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5253_5361__$1)){
var c__4461__auto___5362 = cljs.core.chunk_first.call(null,seq__5253_5361__$1);
var G__5363 = cljs.core.chunk_rest.call(null,seq__5253_5361__$1);
var G__5364 = c__4461__auto___5362;
var G__5365 = cljs.core.count.call(null,c__4461__auto___5362);
var G__5366 = (0);
seq__5253_5347 = G__5363;
chunk__5254_5348 = G__5364;
count__5255_5349 = G__5365;
i__5256_5350 = G__5366;
continue;
} else {
var map__5259_5367 = cljs.core.first.call(null,seq__5253_5361__$1);
var map__5259_5368__$1 = (((((!((map__5259_5367 == null))))?(((((map__5259_5367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5259_5367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5259_5367):map__5259_5367);
var gline_5369 = cljs.core.get.call(null,map__5259_5368__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5370 = cljs.core.get.call(null,map__5259_5368__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5371 = cljs.core.get.call(null,map__5259_5368__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5369], null),cljs.core.fnil.call(null,((function (seq__5253_5347,chunk__5254_5348,count__5255_5349,i__5256_5350,seq__5235_5297,chunk__5236_5298,count__5237_5299,i__5238_5300,seq__5228_5290,chunk__5229_5291,count__5230_5292,i__5231_5293,map__5259_5367,map__5259_5368__$1,gline_5369,gcol_5370,name_5371,seq__5253_5361__$1,temp__5735__auto___5360__$1,vec__5250_5344,column_5345,column_info_5346,seq__5235_5338__$1,temp__5735__auto___5337,vec__5232_5294,line_5295,columns_5296,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5370], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5295,new cljs.core.Keyword(null,"col","col",-1959363084),column_5345,new cljs.core.Keyword(null,"name","name",1843675177),name_5371], null));
});})(seq__5253_5347,chunk__5254_5348,count__5255_5349,i__5256_5350,seq__5235_5297,chunk__5236_5298,count__5237_5299,i__5238_5300,seq__5228_5290,chunk__5229_5291,count__5230_5292,i__5231_5293,map__5259_5367,map__5259_5368__$1,gline_5369,gcol_5370,name_5371,seq__5253_5361__$1,temp__5735__auto___5360__$1,vec__5250_5344,column_5345,column_info_5346,seq__5235_5338__$1,temp__5735__auto___5337,vec__5232_5294,line_5295,columns_5296,inverted))
,cljs.core.sorted_map.call(null)));


var G__5372 = cljs.core.next.call(null,seq__5253_5361__$1);
var G__5373 = null;
var G__5374 = (0);
var G__5375 = (0);
seq__5253_5347 = G__5372;
chunk__5254_5348 = G__5373;
count__5255_5349 = G__5374;
i__5256_5350 = G__5375;
continue;
}
} else {
}
}
break;
}


var G__5376 = cljs.core.next.call(null,seq__5235_5338__$1);
var G__5377 = null;
var G__5378 = (0);
var G__5379 = (0);
seq__5235_5297 = G__5376;
chunk__5236_5298 = G__5377;
count__5237_5299 = G__5378;
i__5238_5300 = G__5379;
continue;
}
} else {
}
}
break;
}


var G__5380 = seq__5228_5290;
var G__5381 = chunk__5229_5291;
var G__5382 = count__5230_5292;
var G__5383 = (i__5231_5293 + (1));
seq__5228_5290 = G__5380;
chunk__5229_5291 = G__5381;
count__5230_5292 = G__5382;
i__5231_5293 = G__5383;
continue;
} else {
var temp__5735__auto___5384 = cljs.core.seq.call(null,seq__5228_5290);
if(temp__5735__auto___5384){
var seq__5228_5385__$1 = temp__5735__auto___5384;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5228_5385__$1)){
var c__4461__auto___5386 = cljs.core.chunk_first.call(null,seq__5228_5385__$1);
var G__5387 = cljs.core.chunk_rest.call(null,seq__5228_5385__$1);
var G__5388 = c__4461__auto___5386;
var G__5389 = cljs.core.count.call(null,c__4461__auto___5386);
var G__5390 = (0);
seq__5228_5290 = G__5387;
chunk__5229_5291 = G__5388;
count__5230_5292 = G__5389;
i__5231_5293 = G__5390;
continue;
} else {
var vec__5261_5391 = cljs.core.first.call(null,seq__5228_5385__$1);
var line_5392 = cljs.core.nth.call(null,vec__5261_5391,(0),null);
var columns_5393 = cljs.core.nth.call(null,vec__5261_5391,(1),null);
var seq__5264_5394 = cljs.core.seq.call(null,columns_5393);
var chunk__5265_5395 = null;
var count__5266_5396 = (0);
var i__5267_5397 = (0);
while(true){
if((i__5267_5397 < count__5266_5396)){
var vec__5268_5398 = cljs.core._nth.call(null,chunk__5265_5395,i__5267_5397);
var column_5399 = cljs.core.nth.call(null,vec__5268_5398,(0),null);
var column_info_5400 = cljs.core.nth.call(null,vec__5268_5398,(1),null);
var seq__5271_5401 = cljs.core.seq.call(null,column_info_5400);
var chunk__5272_5402 = null;
var count__5273_5403 = (0);
var i__5274_5404 = (0);
while(true){
if((i__5274_5404 < count__5273_5403)){
var map__5275_5405 = cljs.core._nth.call(null,chunk__5272_5402,i__5274_5404);
var map__5275_5406__$1 = (((((!((map__5275_5405 == null))))?(((((map__5275_5405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5275_5405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5275_5405):map__5275_5405);
var gline_5407 = cljs.core.get.call(null,map__5275_5406__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5408 = cljs.core.get.call(null,map__5275_5406__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5409 = cljs.core.get.call(null,map__5275_5406__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5407], null),cljs.core.fnil.call(null,((function (seq__5271_5401,chunk__5272_5402,count__5273_5403,i__5274_5404,seq__5264_5394,chunk__5265_5395,count__5266_5396,i__5267_5397,seq__5228_5290,chunk__5229_5291,count__5230_5292,i__5231_5293,map__5275_5405,map__5275_5406__$1,gline_5407,gcol_5408,name_5409,vec__5268_5398,column_5399,column_info_5400,vec__5261_5391,line_5392,columns_5393,seq__5228_5385__$1,temp__5735__auto___5384,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5408], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5392,new cljs.core.Keyword(null,"col","col",-1959363084),column_5399,new cljs.core.Keyword(null,"name","name",1843675177),name_5409], null));
});})(seq__5271_5401,chunk__5272_5402,count__5273_5403,i__5274_5404,seq__5264_5394,chunk__5265_5395,count__5266_5396,i__5267_5397,seq__5228_5290,chunk__5229_5291,count__5230_5292,i__5231_5293,map__5275_5405,map__5275_5406__$1,gline_5407,gcol_5408,name_5409,vec__5268_5398,column_5399,column_info_5400,vec__5261_5391,line_5392,columns_5393,seq__5228_5385__$1,temp__5735__auto___5384,inverted))
,cljs.core.sorted_map.call(null)));


var G__5410 = seq__5271_5401;
var G__5411 = chunk__5272_5402;
var G__5412 = count__5273_5403;
var G__5413 = (i__5274_5404 + (1));
seq__5271_5401 = G__5410;
chunk__5272_5402 = G__5411;
count__5273_5403 = G__5412;
i__5274_5404 = G__5413;
continue;
} else {
var temp__5735__auto___5414__$1 = cljs.core.seq.call(null,seq__5271_5401);
if(temp__5735__auto___5414__$1){
var seq__5271_5415__$1 = temp__5735__auto___5414__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5271_5415__$1)){
var c__4461__auto___5416 = cljs.core.chunk_first.call(null,seq__5271_5415__$1);
var G__5417 = cljs.core.chunk_rest.call(null,seq__5271_5415__$1);
var G__5418 = c__4461__auto___5416;
var G__5419 = cljs.core.count.call(null,c__4461__auto___5416);
var G__5420 = (0);
seq__5271_5401 = G__5417;
chunk__5272_5402 = G__5418;
count__5273_5403 = G__5419;
i__5274_5404 = G__5420;
continue;
} else {
var map__5277_5421 = cljs.core.first.call(null,seq__5271_5415__$1);
var map__5277_5422__$1 = (((((!((map__5277_5421 == null))))?(((((map__5277_5421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5277_5421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5277_5421):map__5277_5421);
var gline_5423 = cljs.core.get.call(null,map__5277_5422__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5424 = cljs.core.get.call(null,map__5277_5422__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5425 = cljs.core.get.call(null,map__5277_5422__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5423], null),cljs.core.fnil.call(null,((function (seq__5271_5401,chunk__5272_5402,count__5273_5403,i__5274_5404,seq__5264_5394,chunk__5265_5395,count__5266_5396,i__5267_5397,seq__5228_5290,chunk__5229_5291,count__5230_5292,i__5231_5293,map__5277_5421,map__5277_5422__$1,gline_5423,gcol_5424,name_5425,seq__5271_5415__$1,temp__5735__auto___5414__$1,vec__5268_5398,column_5399,column_info_5400,vec__5261_5391,line_5392,columns_5393,seq__5228_5385__$1,temp__5735__auto___5384,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5424], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5392,new cljs.core.Keyword(null,"col","col",-1959363084),column_5399,new cljs.core.Keyword(null,"name","name",1843675177),name_5425], null));
});})(seq__5271_5401,chunk__5272_5402,count__5273_5403,i__5274_5404,seq__5264_5394,chunk__5265_5395,count__5266_5396,i__5267_5397,seq__5228_5290,chunk__5229_5291,count__5230_5292,i__5231_5293,map__5277_5421,map__5277_5422__$1,gline_5423,gcol_5424,name_5425,seq__5271_5415__$1,temp__5735__auto___5414__$1,vec__5268_5398,column_5399,column_info_5400,vec__5261_5391,line_5392,columns_5393,seq__5228_5385__$1,temp__5735__auto___5384,inverted))
,cljs.core.sorted_map.call(null)));


var G__5426 = cljs.core.next.call(null,seq__5271_5415__$1);
var G__5427 = null;
var G__5428 = (0);
var G__5429 = (0);
seq__5271_5401 = G__5426;
chunk__5272_5402 = G__5427;
count__5273_5403 = G__5428;
i__5274_5404 = G__5429;
continue;
}
} else {
}
}
break;
}


var G__5430 = seq__5264_5394;
var G__5431 = chunk__5265_5395;
var G__5432 = count__5266_5396;
var G__5433 = (i__5267_5397 + (1));
seq__5264_5394 = G__5430;
chunk__5265_5395 = G__5431;
count__5266_5396 = G__5432;
i__5267_5397 = G__5433;
continue;
} else {
var temp__5735__auto___5434__$1 = cljs.core.seq.call(null,seq__5264_5394);
if(temp__5735__auto___5434__$1){
var seq__5264_5435__$1 = temp__5735__auto___5434__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5264_5435__$1)){
var c__4461__auto___5436 = cljs.core.chunk_first.call(null,seq__5264_5435__$1);
var G__5437 = cljs.core.chunk_rest.call(null,seq__5264_5435__$1);
var G__5438 = c__4461__auto___5436;
var G__5439 = cljs.core.count.call(null,c__4461__auto___5436);
var G__5440 = (0);
seq__5264_5394 = G__5437;
chunk__5265_5395 = G__5438;
count__5266_5396 = G__5439;
i__5267_5397 = G__5440;
continue;
} else {
var vec__5279_5441 = cljs.core.first.call(null,seq__5264_5435__$1);
var column_5442 = cljs.core.nth.call(null,vec__5279_5441,(0),null);
var column_info_5443 = cljs.core.nth.call(null,vec__5279_5441,(1),null);
var seq__5282_5444 = cljs.core.seq.call(null,column_info_5443);
var chunk__5283_5445 = null;
var count__5284_5446 = (0);
var i__5285_5447 = (0);
while(true){
if((i__5285_5447 < count__5284_5446)){
var map__5286_5448 = cljs.core._nth.call(null,chunk__5283_5445,i__5285_5447);
var map__5286_5449__$1 = (((((!((map__5286_5448 == null))))?(((((map__5286_5448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5286_5448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5286_5448):map__5286_5448);
var gline_5450 = cljs.core.get.call(null,map__5286_5449__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5451 = cljs.core.get.call(null,map__5286_5449__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5452 = cljs.core.get.call(null,map__5286_5449__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5450], null),cljs.core.fnil.call(null,((function (seq__5282_5444,chunk__5283_5445,count__5284_5446,i__5285_5447,seq__5264_5394,chunk__5265_5395,count__5266_5396,i__5267_5397,seq__5228_5290,chunk__5229_5291,count__5230_5292,i__5231_5293,map__5286_5448,map__5286_5449__$1,gline_5450,gcol_5451,name_5452,vec__5279_5441,column_5442,column_info_5443,seq__5264_5435__$1,temp__5735__auto___5434__$1,vec__5261_5391,line_5392,columns_5393,seq__5228_5385__$1,temp__5735__auto___5384,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5451], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5392,new cljs.core.Keyword(null,"col","col",-1959363084),column_5442,new cljs.core.Keyword(null,"name","name",1843675177),name_5452], null));
});})(seq__5282_5444,chunk__5283_5445,count__5284_5446,i__5285_5447,seq__5264_5394,chunk__5265_5395,count__5266_5396,i__5267_5397,seq__5228_5290,chunk__5229_5291,count__5230_5292,i__5231_5293,map__5286_5448,map__5286_5449__$1,gline_5450,gcol_5451,name_5452,vec__5279_5441,column_5442,column_info_5443,seq__5264_5435__$1,temp__5735__auto___5434__$1,vec__5261_5391,line_5392,columns_5393,seq__5228_5385__$1,temp__5735__auto___5384,inverted))
,cljs.core.sorted_map.call(null)));


var G__5453 = seq__5282_5444;
var G__5454 = chunk__5283_5445;
var G__5455 = count__5284_5446;
var G__5456 = (i__5285_5447 + (1));
seq__5282_5444 = G__5453;
chunk__5283_5445 = G__5454;
count__5284_5446 = G__5455;
i__5285_5447 = G__5456;
continue;
} else {
var temp__5735__auto___5457__$2 = cljs.core.seq.call(null,seq__5282_5444);
if(temp__5735__auto___5457__$2){
var seq__5282_5458__$1 = temp__5735__auto___5457__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5282_5458__$1)){
var c__4461__auto___5459 = cljs.core.chunk_first.call(null,seq__5282_5458__$1);
var G__5460 = cljs.core.chunk_rest.call(null,seq__5282_5458__$1);
var G__5461 = c__4461__auto___5459;
var G__5462 = cljs.core.count.call(null,c__4461__auto___5459);
var G__5463 = (0);
seq__5282_5444 = G__5460;
chunk__5283_5445 = G__5461;
count__5284_5446 = G__5462;
i__5285_5447 = G__5463;
continue;
} else {
var map__5288_5464 = cljs.core.first.call(null,seq__5282_5458__$1);
var map__5288_5465__$1 = (((((!((map__5288_5464 == null))))?(((((map__5288_5464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5288_5464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5288_5464):map__5288_5464);
var gline_5466 = cljs.core.get.call(null,map__5288_5465__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5467 = cljs.core.get.call(null,map__5288_5465__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5468 = cljs.core.get.call(null,map__5288_5465__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5466], null),cljs.core.fnil.call(null,((function (seq__5282_5444,chunk__5283_5445,count__5284_5446,i__5285_5447,seq__5264_5394,chunk__5265_5395,count__5266_5396,i__5267_5397,seq__5228_5290,chunk__5229_5291,count__5230_5292,i__5231_5293,map__5288_5464,map__5288_5465__$1,gline_5466,gcol_5467,name_5468,seq__5282_5458__$1,temp__5735__auto___5457__$2,vec__5279_5441,column_5442,column_info_5443,seq__5264_5435__$1,temp__5735__auto___5434__$1,vec__5261_5391,line_5392,columns_5393,seq__5228_5385__$1,temp__5735__auto___5384,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5467], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5392,new cljs.core.Keyword(null,"col","col",-1959363084),column_5442,new cljs.core.Keyword(null,"name","name",1843675177),name_5468], null));
});})(seq__5282_5444,chunk__5283_5445,count__5284_5446,i__5285_5447,seq__5264_5394,chunk__5265_5395,count__5266_5396,i__5267_5397,seq__5228_5290,chunk__5229_5291,count__5230_5292,i__5231_5293,map__5288_5464,map__5288_5465__$1,gline_5466,gcol_5467,name_5468,seq__5282_5458__$1,temp__5735__auto___5457__$2,vec__5279_5441,column_5442,column_info_5443,seq__5264_5435__$1,temp__5735__auto___5434__$1,vec__5261_5391,line_5392,columns_5393,seq__5228_5385__$1,temp__5735__auto___5384,inverted))
,cljs.core.sorted_map.call(null)));


var G__5469 = cljs.core.next.call(null,seq__5282_5458__$1);
var G__5470 = null;
var G__5471 = (0);
var G__5472 = (0);
seq__5282_5444 = G__5469;
chunk__5283_5445 = G__5470;
count__5284_5446 = G__5471;
i__5285_5447 = G__5472;
continue;
}
} else {
}
}
break;
}


var G__5473 = cljs.core.next.call(null,seq__5264_5435__$1);
var G__5474 = null;
var G__5475 = (0);
var G__5476 = (0);
seq__5264_5394 = G__5473;
chunk__5265_5395 = G__5474;
count__5266_5396 = G__5475;
i__5267_5397 = G__5476;
continue;
}
} else {
}
}
break;
}


var G__5477 = cljs.core.next.call(null,seq__5228_5385__$1);
var G__5478 = null;
var G__5479 = (0);
var G__5480 = (0);
seq__5228_5290 = G__5477;
chunk__5229_5291 = G__5478;
count__5230_5292 = G__5479;
i__5231_5293 = G__5480;
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
