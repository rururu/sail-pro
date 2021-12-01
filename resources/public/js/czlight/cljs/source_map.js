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
return cljs.core.reduce.call(null,(function (m,p__4777){
var vec__4778 = p__4777;
var i = cljs.core.nth.call(null,vec__4778,(0),null);
var v = cljs.core.nth.call(null,vec__4778,(1),null);
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
var vec__4781 = seg;
var gcol = cljs.core.nth.call(null,vec__4781,(0),null);
var source = cljs.core.nth.call(null,vec__4781,(1),null);
var line = cljs.core.nth.call(null,vec__4781,(2),null);
var col = cljs.core.nth.call(null,vec__4781,(3),null);
var name = cljs.core.nth.call(null,vec__4781,(4),null);
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
var vec__4784 = seg;
var gcol = cljs.core.nth.call(null,vec__4784,(0),null);
var source = cljs.core.nth.call(null,vec__4784,(1),null);
var line = cljs.core.nth.call(null,vec__4784,(2),null);
var col = cljs.core.nth.call(null,vec__4784,(3),null);
var name = cljs.core.nth.call(null,vec__4784,(4),null);
var vec__4787 = relseg;
var rgcol = cljs.core.nth.call(null,vec__4787,(0),null);
var rsource = cljs.core.nth.call(null,vec__4787,(1),null);
var rline = cljs.core.nth.call(null,vec__4787,(2),null);
var rcol = cljs.core.nth.call(null,vec__4787,(3),null);
var rname = cljs.core.nth.call(null,vec__4787,(4),null);
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
var map__4790 = segmap;
var map__4790__$1 = (((((!((map__4790 == null))))?(((((map__4790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4790):map__4790);
var gcol = cljs.core.get.call(null,map__4790__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__4790__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__4790__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__4790__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__4790__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__4790,map__4790__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__4790,map__4790__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__4790,map__4790__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__4790,map__4790__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__4790,map__4790__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__4790,map__4790__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__4793 = arguments.length;
switch (G__4793) {
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
var vec__4794 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__4798 = cljs.core.next.call(null,segs__$1);
var G__4799 = nrelseg;
var G__4800 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__4798;
relseg__$1 = G__4799;
result__$1 = G__4800;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__4794,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__4794,(1),null);
var G__4801 = (gline + (1));
var G__4802 = cljs.core.next.call(null,lines__$1);
var G__4803 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__4804 = result__$1;
gline = G__4801;
lines__$1 = G__4802;
relseg = G__4803;
result = G__4804;
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
var map__4806 = segmap;
var map__4806__$1 = (((((!((map__4806 == null))))?(((((map__4806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4806):map__4806);
var gcol = cljs.core.get.call(null,map__4806__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__4806__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__4806__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__4806__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__4806__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__4806,map__4806__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__4806,map__4806__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__4805_SHARP_){
return cljs.core.conj.call(null,p1__4805_SHARP_,d__$1);
});})(map__4806,map__4806__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__4806,map__4806__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__4809 = arguments.length;
switch (G__4809) {
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
var vec__4810 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__4814 = cljs.core.next.call(null,segs__$1);
var G__4815 = nrelseg;
var G__4816 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__4814;
relseg__$1 = G__4815;
result__$1 = G__4816;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__4810,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__4810,(1),null);
var G__4817 = (gline + (1));
var G__4818 = cljs.core.next.call(null,lines__$1);
var G__4819 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__4820 = result__$1;
gline = G__4817;
lines__$1 = G__4818;
relseg = G__4819;
result = G__4820;
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
return (function (p__4821){
var vec__4822 = p__4821;
var _ = cljs.core.nth.call(null,vec__4822,(0),null);
var source = cljs.core.nth.call(null,vec__4822,(1),null);
var line = cljs.core.nth.call(null,vec__4822,(2),null);
var col = cljs.core.nth.call(null,vec__4822,(3),null);
var name = cljs.core.nth.call(null,vec__4822,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__4825){
var vec__4826 = p__4825;
var gcol = cljs.core.nth.call(null,vec__4826,(0),null);
var sidx = cljs.core.nth.call(null,vec__4826,(1),null);
var line = cljs.core.nth.call(null,vec__4826,(2),null);
var col = cljs.core.nth.call(null,vec__4826,(3),null);
var name = cljs.core.nth.call(null,vec__4826,(4),null);
var seg = vec__4826;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__4826,gcol,sidx,line,col,name,seg,relseg){
return (function (p__4829){
var vec__4830 = p__4829;
var _ = cljs.core.nth.call(null,vec__4830,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__4830,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__4830,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__4830,(3),null);
var lname = cljs.core.nth.call(null,vec__4830,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__4826,gcol,sidx,line,col,name,seg,relseg))
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
var seq__4836 = cljs.core.seq.call(null,infos);
var chunk__4837 = null;
var count__4838 = (0);
var i__4839 = (0);
while(true){
if((i__4839 < count__4838)){
var info = cljs.core._nth.call(null,chunk__4837,i__4839);
var segv_4918 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_4919 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_4920 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_4919 > (lc_4920 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__4836,chunk__4837,count__4838,i__4839,segv_4918,gline_4919,lc_4920,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_4919 - (lc_4920 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_4918], null));
});})(seq__4836,chunk__4837,count__4838,i__4839,segv_4918,gline_4919,lc_4920,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__4836,chunk__4837,count__4838,i__4839,segv_4918,gline_4919,lc_4920,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4919], null),cljs.core.conj,segv_4918);
});})(seq__4836,chunk__4837,count__4838,i__4839,segv_4918,gline_4919,lc_4920,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__4921 = seq__4836;
var G__4922 = chunk__4837;
var G__4923 = count__4838;
var G__4924 = (i__4839 + (1));
seq__4836 = G__4921;
chunk__4837 = G__4922;
count__4838 = G__4923;
i__4839 = G__4924;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__4836);
if(temp__5735__auto__){
var seq__4836__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4836__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__4836__$1);
var G__4925 = cljs.core.chunk_rest.call(null,seq__4836__$1);
var G__4926 = c__4461__auto__;
var G__4927 = cljs.core.count.call(null,c__4461__auto__);
var G__4928 = (0);
seq__4836 = G__4925;
chunk__4837 = G__4926;
count__4838 = G__4927;
i__4839 = G__4928;
continue;
} else {
var info = cljs.core.first.call(null,seq__4836__$1);
var segv_4929 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_4930 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_4931 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_4930 > (lc_4931 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__4836,chunk__4837,count__4838,i__4839,segv_4929,gline_4930,lc_4931,info,seq__4836__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_4930 - (lc_4931 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_4929], null));
});})(seq__4836,chunk__4837,count__4838,i__4839,segv_4929,gline_4930,lc_4931,info,seq__4836__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__4836,chunk__4837,count__4838,i__4839,segv_4929,gline_4930,lc_4931,info,seq__4836__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4930], null),cljs.core.conj,segv_4929);
});})(seq__4836,chunk__4837,count__4838,i__4839,segv_4929,gline_4930,lc_4931,info,seq__4836__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__4932 = cljs.core.next.call(null,seq__4836__$1);
var G__4933 = null;
var G__4934 = (0);
var G__4935 = (0);
seq__4836 = G__4932;
chunk__4837 = G__4933;
count__4838 = G__4934;
i__4839 = G__4935;
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
var seq__4840_4936 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__4841_4937 = null;
var count__4842_4938 = (0);
var i__4843_4939 = (0);
while(true){
if((i__4843_4939 < count__4842_4938)){
var vec__4844_4940 = cljs.core._nth.call(null,chunk__4841_4937,i__4843_4939);
var source_idx_4941 = cljs.core.nth.call(null,vec__4844_4940,(0),null);
var vec__4847_4942 = cljs.core.nth.call(null,vec__4844_4940,(1),null);
var __4943 = cljs.core.nth.call(null,vec__4847_4942,(0),null);
var lines_4944__$1 = cljs.core.nth.call(null,vec__4847_4942,(1),null);
var seq__4850_4945 = cljs.core.seq.call(null,lines_4944__$1);
var chunk__4851_4946 = null;
var count__4852_4947 = (0);
var i__4853_4948 = (0);
while(true){
if((i__4853_4948 < count__4852_4947)){
var vec__4854_4949 = cljs.core._nth.call(null,chunk__4851_4946,i__4853_4948);
var line_4950 = cljs.core.nth.call(null,vec__4854_4949,(0),null);
var cols_4951 = cljs.core.nth.call(null,vec__4854_4949,(1),null);
var seq__4857_4952 = cljs.core.seq.call(null,cols_4951);
var chunk__4858_4953 = null;
var count__4859_4954 = (0);
var i__4860_4955 = (0);
while(true){
if((i__4860_4955 < count__4859_4954)){
var vec__4861_4956 = cljs.core._nth.call(null,chunk__4858_4953,i__4860_4955);
var col_4957 = cljs.core.nth.call(null,vec__4861_4956,(0),null);
var infos_4958 = cljs.core.nth.call(null,vec__4861_4956,(1),null);
encode_cols.call(null,infos_4958,source_idx_4941,line_4950,col_4957);


var G__4959 = seq__4857_4952;
var G__4960 = chunk__4858_4953;
var G__4961 = count__4859_4954;
var G__4962 = (i__4860_4955 + (1));
seq__4857_4952 = G__4959;
chunk__4858_4953 = G__4960;
count__4859_4954 = G__4961;
i__4860_4955 = G__4962;
continue;
} else {
var temp__5735__auto___4963 = cljs.core.seq.call(null,seq__4857_4952);
if(temp__5735__auto___4963){
var seq__4857_4964__$1 = temp__5735__auto___4963;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4857_4964__$1)){
var c__4461__auto___4965 = cljs.core.chunk_first.call(null,seq__4857_4964__$1);
var G__4966 = cljs.core.chunk_rest.call(null,seq__4857_4964__$1);
var G__4967 = c__4461__auto___4965;
var G__4968 = cljs.core.count.call(null,c__4461__auto___4965);
var G__4969 = (0);
seq__4857_4952 = G__4966;
chunk__4858_4953 = G__4967;
count__4859_4954 = G__4968;
i__4860_4955 = G__4969;
continue;
} else {
var vec__4864_4970 = cljs.core.first.call(null,seq__4857_4964__$1);
var col_4971 = cljs.core.nth.call(null,vec__4864_4970,(0),null);
var infos_4972 = cljs.core.nth.call(null,vec__4864_4970,(1),null);
encode_cols.call(null,infos_4972,source_idx_4941,line_4950,col_4971);


var G__4973 = cljs.core.next.call(null,seq__4857_4964__$1);
var G__4974 = null;
var G__4975 = (0);
var G__4976 = (0);
seq__4857_4952 = G__4973;
chunk__4858_4953 = G__4974;
count__4859_4954 = G__4975;
i__4860_4955 = G__4976;
continue;
}
} else {
}
}
break;
}


var G__4977 = seq__4850_4945;
var G__4978 = chunk__4851_4946;
var G__4979 = count__4852_4947;
var G__4980 = (i__4853_4948 + (1));
seq__4850_4945 = G__4977;
chunk__4851_4946 = G__4978;
count__4852_4947 = G__4979;
i__4853_4948 = G__4980;
continue;
} else {
var temp__5735__auto___4981 = cljs.core.seq.call(null,seq__4850_4945);
if(temp__5735__auto___4981){
var seq__4850_4982__$1 = temp__5735__auto___4981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4850_4982__$1)){
var c__4461__auto___4983 = cljs.core.chunk_first.call(null,seq__4850_4982__$1);
var G__4984 = cljs.core.chunk_rest.call(null,seq__4850_4982__$1);
var G__4985 = c__4461__auto___4983;
var G__4986 = cljs.core.count.call(null,c__4461__auto___4983);
var G__4987 = (0);
seq__4850_4945 = G__4984;
chunk__4851_4946 = G__4985;
count__4852_4947 = G__4986;
i__4853_4948 = G__4987;
continue;
} else {
var vec__4867_4988 = cljs.core.first.call(null,seq__4850_4982__$1);
var line_4989 = cljs.core.nth.call(null,vec__4867_4988,(0),null);
var cols_4990 = cljs.core.nth.call(null,vec__4867_4988,(1),null);
var seq__4870_4991 = cljs.core.seq.call(null,cols_4990);
var chunk__4871_4992 = null;
var count__4872_4993 = (0);
var i__4873_4994 = (0);
while(true){
if((i__4873_4994 < count__4872_4993)){
var vec__4874_4995 = cljs.core._nth.call(null,chunk__4871_4992,i__4873_4994);
var col_4996 = cljs.core.nth.call(null,vec__4874_4995,(0),null);
var infos_4997 = cljs.core.nth.call(null,vec__4874_4995,(1),null);
encode_cols.call(null,infos_4997,source_idx_4941,line_4989,col_4996);


var G__4998 = seq__4870_4991;
var G__4999 = chunk__4871_4992;
var G__5000 = count__4872_4993;
var G__5001 = (i__4873_4994 + (1));
seq__4870_4991 = G__4998;
chunk__4871_4992 = G__4999;
count__4872_4993 = G__5000;
i__4873_4994 = G__5001;
continue;
} else {
var temp__5735__auto___5002__$1 = cljs.core.seq.call(null,seq__4870_4991);
if(temp__5735__auto___5002__$1){
var seq__4870_5003__$1 = temp__5735__auto___5002__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4870_5003__$1)){
var c__4461__auto___5004 = cljs.core.chunk_first.call(null,seq__4870_5003__$1);
var G__5005 = cljs.core.chunk_rest.call(null,seq__4870_5003__$1);
var G__5006 = c__4461__auto___5004;
var G__5007 = cljs.core.count.call(null,c__4461__auto___5004);
var G__5008 = (0);
seq__4870_4991 = G__5005;
chunk__4871_4992 = G__5006;
count__4872_4993 = G__5007;
i__4873_4994 = G__5008;
continue;
} else {
var vec__4877_5009 = cljs.core.first.call(null,seq__4870_5003__$1);
var col_5010 = cljs.core.nth.call(null,vec__4877_5009,(0),null);
var infos_5011 = cljs.core.nth.call(null,vec__4877_5009,(1),null);
encode_cols.call(null,infos_5011,source_idx_4941,line_4989,col_5010);


var G__5012 = cljs.core.next.call(null,seq__4870_5003__$1);
var G__5013 = null;
var G__5014 = (0);
var G__5015 = (0);
seq__4870_4991 = G__5012;
chunk__4871_4992 = G__5013;
count__4872_4993 = G__5014;
i__4873_4994 = G__5015;
continue;
}
} else {
}
}
break;
}


var G__5016 = cljs.core.next.call(null,seq__4850_4982__$1);
var G__5017 = null;
var G__5018 = (0);
var G__5019 = (0);
seq__4850_4945 = G__5016;
chunk__4851_4946 = G__5017;
count__4852_4947 = G__5018;
i__4853_4948 = G__5019;
continue;
}
} else {
}
}
break;
}


var G__5020 = seq__4840_4936;
var G__5021 = chunk__4841_4937;
var G__5022 = count__4842_4938;
var G__5023 = (i__4843_4939 + (1));
seq__4840_4936 = G__5020;
chunk__4841_4937 = G__5021;
count__4842_4938 = G__5022;
i__4843_4939 = G__5023;
continue;
} else {
var temp__5735__auto___5024 = cljs.core.seq.call(null,seq__4840_4936);
if(temp__5735__auto___5024){
var seq__4840_5025__$1 = temp__5735__auto___5024;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4840_5025__$1)){
var c__4461__auto___5026 = cljs.core.chunk_first.call(null,seq__4840_5025__$1);
var G__5027 = cljs.core.chunk_rest.call(null,seq__4840_5025__$1);
var G__5028 = c__4461__auto___5026;
var G__5029 = cljs.core.count.call(null,c__4461__auto___5026);
var G__5030 = (0);
seq__4840_4936 = G__5027;
chunk__4841_4937 = G__5028;
count__4842_4938 = G__5029;
i__4843_4939 = G__5030;
continue;
} else {
var vec__4880_5031 = cljs.core.first.call(null,seq__4840_5025__$1);
var source_idx_5032 = cljs.core.nth.call(null,vec__4880_5031,(0),null);
var vec__4883_5033 = cljs.core.nth.call(null,vec__4880_5031,(1),null);
var __5034 = cljs.core.nth.call(null,vec__4883_5033,(0),null);
var lines_5035__$1 = cljs.core.nth.call(null,vec__4883_5033,(1),null);
var seq__4886_5036 = cljs.core.seq.call(null,lines_5035__$1);
var chunk__4887_5037 = null;
var count__4888_5038 = (0);
var i__4889_5039 = (0);
while(true){
if((i__4889_5039 < count__4888_5038)){
var vec__4890_5040 = cljs.core._nth.call(null,chunk__4887_5037,i__4889_5039);
var line_5041 = cljs.core.nth.call(null,vec__4890_5040,(0),null);
var cols_5042 = cljs.core.nth.call(null,vec__4890_5040,(1),null);
var seq__4893_5043 = cljs.core.seq.call(null,cols_5042);
var chunk__4894_5044 = null;
var count__4895_5045 = (0);
var i__4896_5046 = (0);
while(true){
if((i__4896_5046 < count__4895_5045)){
var vec__4897_5047 = cljs.core._nth.call(null,chunk__4894_5044,i__4896_5046);
var col_5048 = cljs.core.nth.call(null,vec__4897_5047,(0),null);
var infos_5049 = cljs.core.nth.call(null,vec__4897_5047,(1),null);
encode_cols.call(null,infos_5049,source_idx_5032,line_5041,col_5048);


var G__5050 = seq__4893_5043;
var G__5051 = chunk__4894_5044;
var G__5052 = count__4895_5045;
var G__5053 = (i__4896_5046 + (1));
seq__4893_5043 = G__5050;
chunk__4894_5044 = G__5051;
count__4895_5045 = G__5052;
i__4896_5046 = G__5053;
continue;
} else {
var temp__5735__auto___5054__$1 = cljs.core.seq.call(null,seq__4893_5043);
if(temp__5735__auto___5054__$1){
var seq__4893_5055__$1 = temp__5735__auto___5054__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4893_5055__$1)){
var c__4461__auto___5056 = cljs.core.chunk_first.call(null,seq__4893_5055__$1);
var G__5057 = cljs.core.chunk_rest.call(null,seq__4893_5055__$1);
var G__5058 = c__4461__auto___5056;
var G__5059 = cljs.core.count.call(null,c__4461__auto___5056);
var G__5060 = (0);
seq__4893_5043 = G__5057;
chunk__4894_5044 = G__5058;
count__4895_5045 = G__5059;
i__4896_5046 = G__5060;
continue;
} else {
var vec__4900_5061 = cljs.core.first.call(null,seq__4893_5055__$1);
var col_5062 = cljs.core.nth.call(null,vec__4900_5061,(0),null);
var infos_5063 = cljs.core.nth.call(null,vec__4900_5061,(1),null);
encode_cols.call(null,infos_5063,source_idx_5032,line_5041,col_5062);


var G__5064 = cljs.core.next.call(null,seq__4893_5055__$1);
var G__5065 = null;
var G__5066 = (0);
var G__5067 = (0);
seq__4893_5043 = G__5064;
chunk__4894_5044 = G__5065;
count__4895_5045 = G__5066;
i__4896_5046 = G__5067;
continue;
}
} else {
}
}
break;
}


var G__5068 = seq__4886_5036;
var G__5069 = chunk__4887_5037;
var G__5070 = count__4888_5038;
var G__5071 = (i__4889_5039 + (1));
seq__4886_5036 = G__5068;
chunk__4887_5037 = G__5069;
count__4888_5038 = G__5070;
i__4889_5039 = G__5071;
continue;
} else {
var temp__5735__auto___5072__$1 = cljs.core.seq.call(null,seq__4886_5036);
if(temp__5735__auto___5072__$1){
var seq__4886_5073__$1 = temp__5735__auto___5072__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4886_5073__$1)){
var c__4461__auto___5074 = cljs.core.chunk_first.call(null,seq__4886_5073__$1);
var G__5075 = cljs.core.chunk_rest.call(null,seq__4886_5073__$1);
var G__5076 = c__4461__auto___5074;
var G__5077 = cljs.core.count.call(null,c__4461__auto___5074);
var G__5078 = (0);
seq__4886_5036 = G__5075;
chunk__4887_5037 = G__5076;
count__4888_5038 = G__5077;
i__4889_5039 = G__5078;
continue;
} else {
var vec__4903_5079 = cljs.core.first.call(null,seq__4886_5073__$1);
var line_5080 = cljs.core.nth.call(null,vec__4903_5079,(0),null);
var cols_5081 = cljs.core.nth.call(null,vec__4903_5079,(1),null);
var seq__4906_5082 = cljs.core.seq.call(null,cols_5081);
var chunk__4907_5083 = null;
var count__4908_5084 = (0);
var i__4909_5085 = (0);
while(true){
if((i__4909_5085 < count__4908_5084)){
var vec__4910_5086 = cljs.core._nth.call(null,chunk__4907_5083,i__4909_5085);
var col_5087 = cljs.core.nth.call(null,vec__4910_5086,(0),null);
var infos_5088 = cljs.core.nth.call(null,vec__4910_5086,(1),null);
encode_cols.call(null,infos_5088,source_idx_5032,line_5080,col_5087);


var G__5089 = seq__4906_5082;
var G__5090 = chunk__4907_5083;
var G__5091 = count__4908_5084;
var G__5092 = (i__4909_5085 + (1));
seq__4906_5082 = G__5089;
chunk__4907_5083 = G__5090;
count__4908_5084 = G__5091;
i__4909_5085 = G__5092;
continue;
} else {
var temp__5735__auto___5093__$2 = cljs.core.seq.call(null,seq__4906_5082);
if(temp__5735__auto___5093__$2){
var seq__4906_5094__$1 = temp__5735__auto___5093__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4906_5094__$1)){
var c__4461__auto___5095 = cljs.core.chunk_first.call(null,seq__4906_5094__$1);
var G__5096 = cljs.core.chunk_rest.call(null,seq__4906_5094__$1);
var G__5097 = c__4461__auto___5095;
var G__5098 = cljs.core.count.call(null,c__4461__auto___5095);
var G__5099 = (0);
seq__4906_5082 = G__5096;
chunk__4907_5083 = G__5097;
count__4908_5084 = G__5098;
i__4909_5085 = G__5099;
continue;
} else {
var vec__4913_5100 = cljs.core.first.call(null,seq__4906_5094__$1);
var col_5101 = cljs.core.nth.call(null,vec__4913_5100,(0),null);
var infos_5102 = cljs.core.nth.call(null,vec__4913_5100,(1),null);
encode_cols.call(null,infos_5102,source_idx_5032,line_5080,col_5101);


var G__5103 = cljs.core.next.call(null,seq__4906_5094__$1);
var G__5104 = null;
var G__5105 = (0);
var G__5106 = (0);
seq__4906_5082 = G__5103;
chunk__4907_5083 = G__5104;
count__4908_5084 = G__5105;
i__4909_5085 = G__5106;
continue;
}
} else {
}
}
break;
}


var G__5107 = cljs.core.next.call(null,seq__4886_5073__$1);
var G__5108 = null;
var G__5109 = (0);
var G__5110 = (0);
seq__4886_5036 = G__5107;
chunk__4887_5037 = G__5108;
count__4888_5038 = G__5109;
i__4889_5039 = G__5110;
continue;
}
} else {
}
}
break;
}


var G__5111 = cljs.core.next.call(null,seq__4840_5025__$1);
var G__5112 = null;
var G__5113 = (0);
var G__5114 = (0);
seq__4840_4936 = G__5111;
chunk__4841_4937 = G__5112;
count__4842_4938 = G__5113;
i__4843_4939 = G__5114;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__4916 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__4833_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__4833_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__4834_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__4834_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__4835_SHARP_){
return clojure.string.join.call(null,",",p1__4835_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__4917 = G__4916;
goog.object.set(G__4917,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__4917;
} else {
return G__4916;
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
var vec__5115 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__5115,(0),null);
var col_map = cljs.core.nth.call(null,vec__5115,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__5118 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__5118,(0),null);
var infos = cljs.core.nth.call(null,vec__5118,(1),null);
var G__5124 = cljs.core.next.call(null,col_map_seq);
var G__5125 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__5118,col,infos,vec__5115,line,col_map){
return (function (v,p__5121){
var map__5122 = p__5121;
var map__5122__$1 = (((((!((map__5122 == null))))?(((((map__5122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5122):map__5122);
var gline = cljs.core.get.call(null,map__5122__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__5122__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__5118,col,infos,vec__5115,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__5124;
new_cols = G__5125;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__5126 = cljs.core.next.call(null,line_map_seq);
var G__5127 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__5126;
new_lines = G__5127;
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
var seq__5128_5190 = cljs.core.seq.call(null,reverse_map);
var chunk__5129_5191 = null;
var count__5130_5192 = (0);
var i__5131_5193 = (0);
while(true){
if((i__5131_5193 < count__5130_5192)){
var vec__5132_5194 = cljs.core._nth.call(null,chunk__5129_5191,i__5131_5193);
var line_5195 = cljs.core.nth.call(null,vec__5132_5194,(0),null);
var columns_5196 = cljs.core.nth.call(null,vec__5132_5194,(1),null);
var seq__5135_5197 = cljs.core.seq.call(null,columns_5196);
var chunk__5136_5198 = null;
var count__5137_5199 = (0);
var i__5138_5200 = (0);
while(true){
if((i__5138_5200 < count__5137_5199)){
var vec__5139_5201 = cljs.core._nth.call(null,chunk__5136_5198,i__5138_5200);
var column_5202 = cljs.core.nth.call(null,vec__5139_5201,(0),null);
var column_info_5203 = cljs.core.nth.call(null,vec__5139_5201,(1),null);
var seq__5142_5204 = cljs.core.seq.call(null,column_info_5203);
var chunk__5143_5205 = null;
var count__5144_5206 = (0);
var i__5145_5207 = (0);
while(true){
if((i__5145_5207 < count__5144_5206)){
var map__5146_5208 = cljs.core._nth.call(null,chunk__5143_5205,i__5145_5207);
var map__5146_5209__$1 = (((((!((map__5146_5208 == null))))?(((((map__5146_5208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5146_5208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5146_5208):map__5146_5208);
var gline_5210 = cljs.core.get.call(null,map__5146_5209__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5211 = cljs.core.get.call(null,map__5146_5209__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5212 = cljs.core.get.call(null,map__5146_5209__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5210], null),cljs.core.fnil.call(null,((function (seq__5142_5204,chunk__5143_5205,count__5144_5206,i__5145_5207,seq__5135_5197,chunk__5136_5198,count__5137_5199,i__5138_5200,seq__5128_5190,chunk__5129_5191,count__5130_5192,i__5131_5193,map__5146_5208,map__5146_5209__$1,gline_5210,gcol_5211,name_5212,vec__5139_5201,column_5202,column_info_5203,vec__5132_5194,line_5195,columns_5196,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5211], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5195,new cljs.core.Keyword(null,"col","col",-1959363084),column_5202,new cljs.core.Keyword(null,"name","name",1843675177),name_5212], null));
});})(seq__5142_5204,chunk__5143_5205,count__5144_5206,i__5145_5207,seq__5135_5197,chunk__5136_5198,count__5137_5199,i__5138_5200,seq__5128_5190,chunk__5129_5191,count__5130_5192,i__5131_5193,map__5146_5208,map__5146_5209__$1,gline_5210,gcol_5211,name_5212,vec__5139_5201,column_5202,column_info_5203,vec__5132_5194,line_5195,columns_5196,inverted))
,cljs.core.sorted_map.call(null)));


var G__5213 = seq__5142_5204;
var G__5214 = chunk__5143_5205;
var G__5215 = count__5144_5206;
var G__5216 = (i__5145_5207 + (1));
seq__5142_5204 = G__5213;
chunk__5143_5205 = G__5214;
count__5144_5206 = G__5215;
i__5145_5207 = G__5216;
continue;
} else {
var temp__5735__auto___5217 = cljs.core.seq.call(null,seq__5142_5204);
if(temp__5735__auto___5217){
var seq__5142_5218__$1 = temp__5735__auto___5217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5142_5218__$1)){
var c__4461__auto___5219 = cljs.core.chunk_first.call(null,seq__5142_5218__$1);
var G__5220 = cljs.core.chunk_rest.call(null,seq__5142_5218__$1);
var G__5221 = c__4461__auto___5219;
var G__5222 = cljs.core.count.call(null,c__4461__auto___5219);
var G__5223 = (0);
seq__5142_5204 = G__5220;
chunk__5143_5205 = G__5221;
count__5144_5206 = G__5222;
i__5145_5207 = G__5223;
continue;
} else {
var map__5148_5224 = cljs.core.first.call(null,seq__5142_5218__$1);
var map__5148_5225__$1 = (((((!((map__5148_5224 == null))))?(((((map__5148_5224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5148_5224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5148_5224):map__5148_5224);
var gline_5226 = cljs.core.get.call(null,map__5148_5225__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5227 = cljs.core.get.call(null,map__5148_5225__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5228 = cljs.core.get.call(null,map__5148_5225__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5226], null),cljs.core.fnil.call(null,((function (seq__5142_5204,chunk__5143_5205,count__5144_5206,i__5145_5207,seq__5135_5197,chunk__5136_5198,count__5137_5199,i__5138_5200,seq__5128_5190,chunk__5129_5191,count__5130_5192,i__5131_5193,map__5148_5224,map__5148_5225__$1,gline_5226,gcol_5227,name_5228,seq__5142_5218__$1,temp__5735__auto___5217,vec__5139_5201,column_5202,column_info_5203,vec__5132_5194,line_5195,columns_5196,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5227], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5195,new cljs.core.Keyword(null,"col","col",-1959363084),column_5202,new cljs.core.Keyword(null,"name","name",1843675177),name_5228], null));
});})(seq__5142_5204,chunk__5143_5205,count__5144_5206,i__5145_5207,seq__5135_5197,chunk__5136_5198,count__5137_5199,i__5138_5200,seq__5128_5190,chunk__5129_5191,count__5130_5192,i__5131_5193,map__5148_5224,map__5148_5225__$1,gline_5226,gcol_5227,name_5228,seq__5142_5218__$1,temp__5735__auto___5217,vec__5139_5201,column_5202,column_info_5203,vec__5132_5194,line_5195,columns_5196,inverted))
,cljs.core.sorted_map.call(null)));


var G__5229 = cljs.core.next.call(null,seq__5142_5218__$1);
var G__5230 = null;
var G__5231 = (0);
var G__5232 = (0);
seq__5142_5204 = G__5229;
chunk__5143_5205 = G__5230;
count__5144_5206 = G__5231;
i__5145_5207 = G__5232;
continue;
}
} else {
}
}
break;
}


var G__5233 = seq__5135_5197;
var G__5234 = chunk__5136_5198;
var G__5235 = count__5137_5199;
var G__5236 = (i__5138_5200 + (1));
seq__5135_5197 = G__5233;
chunk__5136_5198 = G__5234;
count__5137_5199 = G__5235;
i__5138_5200 = G__5236;
continue;
} else {
var temp__5735__auto___5237 = cljs.core.seq.call(null,seq__5135_5197);
if(temp__5735__auto___5237){
var seq__5135_5238__$1 = temp__5735__auto___5237;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5135_5238__$1)){
var c__4461__auto___5239 = cljs.core.chunk_first.call(null,seq__5135_5238__$1);
var G__5240 = cljs.core.chunk_rest.call(null,seq__5135_5238__$1);
var G__5241 = c__4461__auto___5239;
var G__5242 = cljs.core.count.call(null,c__4461__auto___5239);
var G__5243 = (0);
seq__5135_5197 = G__5240;
chunk__5136_5198 = G__5241;
count__5137_5199 = G__5242;
i__5138_5200 = G__5243;
continue;
} else {
var vec__5150_5244 = cljs.core.first.call(null,seq__5135_5238__$1);
var column_5245 = cljs.core.nth.call(null,vec__5150_5244,(0),null);
var column_info_5246 = cljs.core.nth.call(null,vec__5150_5244,(1),null);
var seq__5153_5247 = cljs.core.seq.call(null,column_info_5246);
var chunk__5154_5248 = null;
var count__5155_5249 = (0);
var i__5156_5250 = (0);
while(true){
if((i__5156_5250 < count__5155_5249)){
var map__5157_5251 = cljs.core._nth.call(null,chunk__5154_5248,i__5156_5250);
var map__5157_5252__$1 = (((((!((map__5157_5251 == null))))?(((((map__5157_5251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5157_5251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5157_5251):map__5157_5251);
var gline_5253 = cljs.core.get.call(null,map__5157_5252__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5254 = cljs.core.get.call(null,map__5157_5252__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5255 = cljs.core.get.call(null,map__5157_5252__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5253], null),cljs.core.fnil.call(null,((function (seq__5153_5247,chunk__5154_5248,count__5155_5249,i__5156_5250,seq__5135_5197,chunk__5136_5198,count__5137_5199,i__5138_5200,seq__5128_5190,chunk__5129_5191,count__5130_5192,i__5131_5193,map__5157_5251,map__5157_5252__$1,gline_5253,gcol_5254,name_5255,vec__5150_5244,column_5245,column_info_5246,seq__5135_5238__$1,temp__5735__auto___5237,vec__5132_5194,line_5195,columns_5196,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5254], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5195,new cljs.core.Keyword(null,"col","col",-1959363084),column_5245,new cljs.core.Keyword(null,"name","name",1843675177),name_5255], null));
});})(seq__5153_5247,chunk__5154_5248,count__5155_5249,i__5156_5250,seq__5135_5197,chunk__5136_5198,count__5137_5199,i__5138_5200,seq__5128_5190,chunk__5129_5191,count__5130_5192,i__5131_5193,map__5157_5251,map__5157_5252__$1,gline_5253,gcol_5254,name_5255,vec__5150_5244,column_5245,column_info_5246,seq__5135_5238__$1,temp__5735__auto___5237,vec__5132_5194,line_5195,columns_5196,inverted))
,cljs.core.sorted_map.call(null)));


var G__5256 = seq__5153_5247;
var G__5257 = chunk__5154_5248;
var G__5258 = count__5155_5249;
var G__5259 = (i__5156_5250 + (1));
seq__5153_5247 = G__5256;
chunk__5154_5248 = G__5257;
count__5155_5249 = G__5258;
i__5156_5250 = G__5259;
continue;
} else {
var temp__5735__auto___5260__$1 = cljs.core.seq.call(null,seq__5153_5247);
if(temp__5735__auto___5260__$1){
var seq__5153_5261__$1 = temp__5735__auto___5260__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5153_5261__$1)){
var c__4461__auto___5262 = cljs.core.chunk_first.call(null,seq__5153_5261__$1);
var G__5263 = cljs.core.chunk_rest.call(null,seq__5153_5261__$1);
var G__5264 = c__4461__auto___5262;
var G__5265 = cljs.core.count.call(null,c__4461__auto___5262);
var G__5266 = (0);
seq__5153_5247 = G__5263;
chunk__5154_5248 = G__5264;
count__5155_5249 = G__5265;
i__5156_5250 = G__5266;
continue;
} else {
var map__5159_5267 = cljs.core.first.call(null,seq__5153_5261__$1);
var map__5159_5268__$1 = (((((!((map__5159_5267 == null))))?(((((map__5159_5267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5159_5267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5159_5267):map__5159_5267);
var gline_5269 = cljs.core.get.call(null,map__5159_5268__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5270 = cljs.core.get.call(null,map__5159_5268__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5271 = cljs.core.get.call(null,map__5159_5268__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5269], null),cljs.core.fnil.call(null,((function (seq__5153_5247,chunk__5154_5248,count__5155_5249,i__5156_5250,seq__5135_5197,chunk__5136_5198,count__5137_5199,i__5138_5200,seq__5128_5190,chunk__5129_5191,count__5130_5192,i__5131_5193,map__5159_5267,map__5159_5268__$1,gline_5269,gcol_5270,name_5271,seq__5153_5261__$1,temp__5735__auto___5260__$1,vec__5150_5244,column_5245,column_info_5246,seq__5135_5238__$1,temp__5735__auto___5237,vec__5132_5194,line_5195,columns_5196,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5270], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5195,new cljs.core.Keyword(null,"col","col",-1959363084),column_5245,new cljs.core.Keyword(null,"name","name",1843675177),name_5271], null));
});})(seq__5153_5247,chunk__5154_5248,count__5155_5249,i__5156_5250,seq__5135_5197,chunk__5136_5198,count__5137_5199,i__5138_5200,seq__5128_5190,chunk__5129_5191,count__5130_5192,i__5131_5193,map__5159_5267,map__5159_5268__$1,gline_5269,gcol_5270,name_5271,seq__5153_5261__$1,temp__5735__auto___5260__$1,vec__5150_5244,column_5245,column_info_5246,seq__5135_5238__$1,temp__5735__auto___5237,vec__5132_5194,line_5195,columns_5196,inverted))
,cljs.core.sorted_map.call(null)));


var G__5272 = cljs.core.next.call(null,seq__5153_5261__$1);
var G__5273 = null;
var G__5274 = (0);
var G__5275 = (0);
seq__5153_5247 = G__5272;
chunk__5154_5248 = G__5273;
count__5155_5249 = G__5274;
i__5156_5250 = G__5275;
continue;
}
} else {
}
}
break;
}


var G__5276 = cljs.core.next.call(null,seq__5135_5238__$1);
var G__5277 = null;
var G__5278 = (0);
var G__5279 = (0);
seq__5135_5197 = G__5276;
chunk__5136_5198 = G__5277;
count__5137_5199 = G__5278;
i__5138_5200 = G__5279;
continue;
}
} else {
}
}
break;
}


var G__5280 = seq__5128_5190;
var G__5281 = chunk__5129_5191;
var G__5282 = count__5130_5192;
var G__5283 = (i__5131_5193 + (1));
seq__5128_5190 = G__5280;
chunk__5129_5191 = G__5281;
count__5130_5192 = G__5282;
i__5131_5193 = G__5283;
continue;
} else {
var temp__5735__auto___5284 = cljs.core.seq.call(null,seq__5128_5190);
if(temp__5735__auto___5284){
var seq__5128_5285__$1 = temp__5735__auto___5284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5128_5285__$1)){
var c__4461__auto___5286 = cljs.core.chunk_first.call(null,seq__5128_5285__$1);
var G__5287 = cljs.core.chunk_rest.call(null,seq__5128_5285__$1);
var G__5288 = c__4461__auto___5286;
var G__5289 = cljs.core.count.call(null,c__4461__auto___5286);
var G__5290 = (0);
seq__5128_5190 = G__5287;
chunk__5129_5191 = G__5288;
count__5130_5192 = G__5289;
i__5131_5193 = G__5290;
continue;
} else {
var vec__5161_5291 = cljs.core.first.call(null,seq__5128_5285__$1);
var line_5292 = cljs.core.nth.call(null,vec__5161_5291,(0),null);
var columns_5293 = cljs.core.nth.call(null,vec__5161_5291,(1),null);
var seq__5164_5294 = cljs.core.seq.call(null,columns_5293);
var chunk__5165_5295 = null;
var count__5166_5296 = (0);
var i__5167_5297 = (0);
while(true){
if((i__5167_5297 < count__5166_5296)){
var vec__5168_5298 = cljs.core._nth.call(null,chunk__5165_5295,i__5167_5297);
var column_5299 = cljs.core.nth.call(null,vec__5168_5298,(0),null);
var column_info_5300 = cljs.core.nth.call(null,vec__5168_5298,(1),null);
var seq__5171_5301 = cljs.core.seq.call(null,column_info_5300);
var chunk__5172_5302 = null;
var count__5173_5303 = (0);
var i__5174_5304 = (0);
while(true){
if((i__5174_5304 < count__5173_5303)){
var map__5175_5305 = cljs.core._nth.call(null,chunk__5172_5302,i__5174_5304);
var map__5175_5306__$1 = (((((!((map__5175_5305 == null))))?(((((map__5175_5305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5175_5305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5175_5305):map__5175_5305);
var gline_5307 = cljs.core.get.call(null,map__5175_5306__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5308 = cljs.core.get.call(null,map__5175_5306__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5309 = cljs.core.get.call(null,map__5175_5306__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5307], null),cljs.core.fnil.call(null,((function (seq__5171_5301,chunk__5172_5302,count__5173_5303,i__5174_5304,seq__5164_5294,chunk__5165_5295,count__5166_5296,i__5167_5297,seq__5128_5190,chunk__5129_5191,count__5130_5192,i__5131_5193,map__5175_5305,map__5175_5306__$1,gline_5307,gcol_5308,name_5309,vec__5168_5298,column_5299,column_info_5300,vec__5161_5291,line_5292,columns_5293,seq__5128_5285__$1,temp__5735__auto___5284,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5308], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5292,new cljs.core.Keyword(null,"col","col",-1959363084),column_5299,new cljs.core.Keyword(null,"name","name",1843675177),name_5309], null));
});})(seq__5171_5301,chunk__5172_5302,count__5173_5303,i__5174_5304,seq__5164_5294,chunk__5165_5295,count__5166_5296,i__5167_5297,seq__5128_5190,chunk__5129_5191,count__5130_5192,i__5131_5193,map__5175_5305,map__5175_5306__$1,gline_5307,gcol_5308,name_5309,vec__5168_5298,column_5299,column_info_5300,vec__5161_5291,line_5292,columns_5293,seq__5128_5285__$1,temp__5735__auto___5284,inverted))
,cljs.core.sorted_map.call(null)));


var G__5310 = seq__5171_5301;
var G__5311 = chunk__5172_5302;
var G__5312 = count__5173_5303;
var G__5313 = (i__5174_5304 + (1));
seq__5171_5301 = G__5310;
chunk__5172_5302 = G__5311;
count__5173_5303 = G__5312;
i__5174_5304 = G__5313;
continue;
} else {
var temp__5735__auto___5314__$1 = cljs.core.seq.call(null,seq__5171_5301);
if(temp__5735__auto___5314__$1){
var seq__5171_5315__$1 = temp__5735__auto___5314__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5171_5315__$1)){
var c__4461__auto___5316 = cljs.core.chunk_first.call(null,seq__5171_5315__$1);
var G__5317 = cljs.core.chunk_rest.call(null,seq__5171_5315__$1);
var G__5318 = c__4461__auto___5316;
var G__5319 = cljs.core.count.call(null,c__4461__auto___5316);
var G__5320 = (0);
seq__5171_5301 = G__5317;
chunk__5172_5302 = G__5318;
count__5173_5303 = G__5319;
i__5174_5304 = G__5320;
continue;
} else {
var map__5177_5321 = cljs.core.first.call(null,seq__5171_5315__$1);
var map__5177_5322__$1 = (((((!((map__5177_5321 == null))))?(((((map__5177_5321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5177_5321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5177_5321):map__5177_5321);
var gline_5323 = cljs.core.get.call(null,map__5177_5322__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5324 = cljs.core.get.call(null,map__5177_5322__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5325 = cljs.core.get.call(null,map__5177_5322__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5323], null),cljs.core.fnil.call(null,((function (seq__5171_5301,chunk__5172_5302,count__5173_5303,i__5174_5304,seq__5164_5294,chunk__5165_5295,count__5166_5296,i__5167_5297,seq__5128_5190,chunk__5129_5191,count__5130_5192,i__5131_5193,map__5177_5321,map__5177_5322__$1,gline_5323,gcol_5324,name_5325,seq__5171_5315__$1,temp__5735__auto___5314__$1,vec__5168_5298,column_5299,column_info_5300,vec__5161_5291,line_5292,columns_5293,seq__5128_5285__$1,temp__5735__auto___5284,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5324], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5292,new cljs.core.Keyword(null,"col","col",-1959363084),column_5299,new cljs.core.Keyword(null,"name","name",1843675177),name_5325], null));
});})(seq__5171_5301,chunk__5172_5302,count__5173_5303,i__5174_5304,seq__5164_5294,chunk__5165_5295,count__5166_5296,i__5167_5297,seq__5128_5190,chunk__5129_5191,count__5130_5192,i__5131_5193,map__5177_5321,map__5177_5322__$1,gline_5323,gcol_5324,name_5325,seq__5171_5315__$1,temp__5735__auto___5314__$1,vec__5168_5298,column_5299,column_info_5300,vec__5161_5291,line_5292,columns_5293,seq__5128_5285__$1,temp__5735__auto___5284,inverted))
,cljs.core.sorted_map.call(null)));


var G__5326 = cljs.core.next.call(null,seq__5171_5315__$1);
var G__5327 = null;
var G__5328 = (0);
var G__5329 = (0);
seq__5171_5301 = G__5326;
chunk__5172_5302 = G__5327;
count__5173_5303 = G__5328;
i__5174_5304 = G__5329;
continue;
}
} else {
}
}
break;
}


var G__5330 = seq__5164_5294;
var G__5331 = chunk__5165_5295;
var G__5332 = count__5166_5296;
var G__5333 = (i__5167_5297 + (1));
seq__5164_5294 = G__5330;
chunk__5165_5295 = G__5331;
count__5166_5296 = G__5332;
i__5167_5297 = G__5333;
continue;
} else {
var temp__5735__auto___5334__$1 = cljs.core.seq.call(null,seq__5164_5294);
if(temp__5735__auto___5334__$1){
var seq__5164_5335__$1 = temp__5735__auto___5334__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5164_5335__$1)){
var c__4461__auto___5336 = cljs.core.chunk_first.call(null,seq__5164_5335__$1);
var G__5337 = cljs.core.chunk_rest.call(null,seq__5164_5335__$1);
var G__5338 = c__4461__auto___5336;
var G__5339 = cljs.core.count.call(null,c__4461__auto___5336);
var G__5340 = (0);
seq__5164_5294 = G__5337;
chunk__5165_5295 = G__5338;
count__5166_5296 = G__5339;
i__5167_5297 = G__5340;
continue;
} else {
var vec__5179_5341 = cljs.core.first.call(null,seq__5164_5335__$1);
var column_5342 = cljs.core.nth.call(null,vec__5179_5341,(0),null);
var column_info_5343 = cljs.core.nth.call(null,vec__5179_5341,(1),null);
var seq__5182_5344 = cljs.core.seq.call(null,column_info_5343);
var chunk__5183_5345 = null;
var count__5184_5346 = (0);
var i__5185_5347 = (0);
while(true){
if((i__5185_5347 < count__5184_5346)){
var map__5186_5348 = cljs.core._nth.call(null,chunk__5183_5345,i__5185_5347);
var map__5186_5349__$1 = (((((!((map__5186_5348 == null))))?(((((map__5186_5348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5186_5348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5186_5348):map__5186_5348);
var gline_5350 = cljs.core.get.call(null,map__5186_5349__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5351 = cljs.core.get.call(null,map__5186_5349__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5352 = cljs.core.get.call(null,map__5186_5349__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5350], null),cljs.core.fnil.call(null,((function (seq__5182_5344,chunk__5183_5345,count__5184_5346,i__5185_5347,seq__5164_5294,chunk__5165_5295,count__5166_5296,i__5167_5297,seq__5128_5190,chunk__5129_5191,count__5130_5192,i__5131_5193,map__5186_5348,map__5186_5349__$1,gline_5350,gcol_5351,name_5352,vec__5179_5341,column_5342,column_info_5343,seq__5164_5335__$1,temp__5735__auto___5334__$1,vec__5161_5291,line_5292,columns_5293,seq__5128_5285__$1,temp__5735__auto___5284,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5351], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5292,new cljs.core.Keyword(null,"col","col",-1959363084),column_5342,new cljs.core.Keyword(null,"name","name",1843675177),name_5352], null));
});})(seq__5182_5344,chunk__5183_5345,count__5184_5346,i__5185_5347,seq__5164_5294,chunk__5165_5295,count__5166_5296,i__5167_5297,seq__5128_5190,chunk__5129_5191,count__5130_5192,i__5131_5193,map__5186_5348,map__5186_5349__$1,gline_5350,gcol_5351,name_5352,vec__5179_5341,column_5342,column_info_5343,seq__5164_5335__$1,temp__5735__auto___5334__$1,vec__5161_5291,line_5292,columns_5293,seq__5128_5285__$1,temp__5735__auto___5284,inverted))
,cljs.core.sorted_map.call(null)));


var G__5353 = seq__5182_5344;
var G__5354 = chunk__5183_5345;
var G__5355 = count__5184_5346;
var G__5356 = (i__5185_5347 + (1));
seq__5182_5344 = G__5353;
chunk__5183_5345 = G__5354;
count__5184_5346 = G__5355;
i__5185_5347 = G__5356;
continue;
} else {
var temp__5735__auto___5357__$2 = cljs.core.seq.call(null,seq__5182_5344);
if(temp__5735__auto___5357__$2){
var seq__5182_5358__$1 = temp__5735__auto___5357__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5182_5358__$1)){
var c__4461__auto___5359 = cljs.core.chunk_first.call(null,seq__5182_5358__$1);
var G__5360 = cljs.core.chunk_rest.call(null,seq__5182_5358__$1);
var G__5361 = c__4461__auto___5359;
var G__5362 = cljs.core.count.call(null,c__4461__auto___5359);
var G__5363 = (0);
seq__5182_5344 = G__5360;
chunk__5183_5345 = G__5361;
count__5184_5346 = G__5362;
i__5185_5347 = G__5363;
continue;
} else {
var map__5188_5364 = cljs.core.first.call(null,seq__5182_5358__$1);
var map__5188_5365__$1 = (((((!((map__5188_5364 == null))))?(((((map__5188_5364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5188_5364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5188_5364):map__5188_5364);
var gline_5366 = cljs.core.get.call(null,map__5188_5365__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5367 = cljs.core.get.call(null,map__5188_5365__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5368 = cljs.core.get.call(null,map__5188_5365__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5366], null),cljs.core.fnil.call(null,((function (seq__5182_5344,chunk__5183_5345,count__5184_5346,i__5185_5347,seq__5164_5294,chunk__5165_5295,count__5166_5296,i__5167_5297,seq__5128_5190,chunk__5129_5191,count__5130_5192,i__5131_5193,map__5188_5364,map__5188_5365__$1,gline_5366,gcol_5367,name_5368,seq__5182_5358__$1,temp__5735__auto___5357__$2,vec__5179_5341,column_5342,column_info_5343,seq__5164_5335__$1,temp__5735__auto___5334__$1,vec__5161_5291,line_5292,columns_5293,seq__5128_5285__$1,temp__5735__auto___5284,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5367], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5292,new cljs.core.Keyword(null,"col","col",-1959363084),column_5342,new cljs.core.Keyword(null,"name","name",1843675177),name_5368], null));
});})(seq__5182_5344,chunk__5183_5345,count__5184_5346,i__5185_5347,seq__5164_5294,chunk__5165_5295,count__5166_5296,i__5167_5297,seq__5128_5190,chunk__5129_5191,count__5130_5192,i__5131_5193,map__5188_5364,map__5188_5365__$1,gline_5366,gcol_5367,name_5368,seq__5182_5358__$1,temp__5735__auto___5357__$2,vec__5179_5341,column_5342,column_info_5343,seq__5164_5335__$1,temp__5735__auto___5334__$1,vec__5161_5291,line_5292,columns_5293,seq__5128_5285__$1,temp__5735__auto___5284,inverted))
,cljs.core.sorted_map.call(null)));


var G__5369 = cljs.core.next.call(null,seq__5182_5358__$1);
var G__5370 = null;
var G__5371 = (0);
var G__5372 = (0);
seq__5182_5344 = G__5369;
chunk__5183_5345 = G__5370;
count__5184_5346 = G__5371;
i__5185_5347 = G__5372;
continue;
}
} else {
}
}
break;
}


var G__5373 = cljs.core.next.call(null,seq__5164_5335__$1);
var G__5374 = null;
var G__5375 = (0);
var G__5376 = (0);
seq__5164_5294 = G__5373;
chunk__5165_5295 = G__5374;
count__5166_5296 = G__5375;
i__5167_5297 = G__5376;
continue;
}
} else {
}
}
break;
}


var G__5377 = cljs.core.next.call(null,seq__5128_5285__$1);
var G__5378 = null;
var G__5379 = (0);
var G__5380 = (0);
seq__5128_5190 = G__5377;
chunk__5129_5191 = G__5378;
count__5130_5192 = G__5379;
i__5131_5193 = G__5380;
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
