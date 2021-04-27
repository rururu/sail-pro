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
return cljs.core.reduce.call(null,(function (m,p__20549){
var vec__20550 = p__20549;
var i = cljs.core.nth.call(null,vec__20550,(0),null);
var v = cljs.core.nth.call(null,vec__20550,(1),null);
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
var vec__20553 = seg;
var gcol = cljs.core.nth.call(null,vec__20553,(0),null);
var source = cljs.core.nth.call(null,vec__20553,(1),null);
var line = cljs.core.nth.call(null,vec__20553,(2),null);
var col = cljs.core.nth.call(null,vec__20553,(3),null);
var name = cljs.core.nth.call(null,vec__20553,(4),null);
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
var vec__20556 = seg;
var gcol = cljs.core.nth.call(null,vec__20556,(0),null);
var source = cljs.core.nth.call(null,vec__20556,(1),null);
var line = cljs.core.nth.call(null,vec__20556,(2),null);
var col = cljs.core.nth.call(null,vec__20556,(3),null);
var name = cljs.core.nth.call(null,vec__20556,(4),null);
var vec__20559 = relseg;
var rgcol = cljs.core.nth.call(null,vec__20559,(0),null);
var rsource = cljs.core.nth.call(null,vec__20559,(1),null);
var rline = cljs.core.nth.call(null,vec__20559,(2),null);
var rcol = cljs.core.nth.call(null,vec__20559,(3),null);
var rname = cljs.core.nth.call(null,vec__20559,(4),null);
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
var map__20562 = segmap;
var map__20562__$1 = (((((!((map__20562 == null))))?(((((map__20562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20562):map__20562);
var gcol = cljs.core.get.call(null,map__20562__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__20562__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__20562__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__20562__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__20562__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__20562,map__20562__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__20562,map__20562__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__20562,map__20562__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__20562,map__20562__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__20562,map__20562__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__20562,map__20562__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__20565 = arguments.length;
switch (G__20565) {
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
var vec__20566 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__20570 = cljs.core.next.call(null,segs__$1);
var G__20571 = nrelseg;
var G__20572 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__20570;
relseg__$1 = G__20571;
result__$1 = G__20572;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__20566,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__20566,(1),null);
var G__20573 = (gline + (1));
var G__20574 = cljs.core.next.call(null,lines__$1);
var G__20575 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__20576 = result__$1;
gline = G__20573;
lines__$1 = G__20574;
relseg = G__20575;
result = G__20576;
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
var map__20578 = segmap;
var map__20578__$1 = (((((!((map__20578 == null))))?(((((map__20578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20578):map__20578);
var gcol = cljs.core.get.call(null,map__20578__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__20578__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__20578__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__20578__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__20578__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__20578,map__20578__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__20578,map__20578__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__20577_SHARP_){
return cljs.core.conj.call(null,p1__20577_SHARP_,d__$1);
});})(map__20578,map__20578__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__20578,map__20578__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__20581 = arguments.length;
switch (G__20581) {
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
var vec__20582 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__20586 = cljs.core.next.call(null,segs__$1);
var G__20587 = nrelseg;
var G__20588 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__20586;
relseg__$1 = G__20587;
result__$1 = G__20588;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__20582,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__20582,(1),null);
var G__20589 = (gline + (1));
var G__20590 = cljs.core.next.call(null,lines__$1);
var G__20591 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__20592 = result__$1;
gline = G__20589;
lines__$1 = G__20590;
relseg = G__20591;
result = G__20592;
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
return (function (p__20593){
var vec__20594 = p__20593;
var _ = cljs.core.nth.call(null,vec__20594,(0),null);
var source = cljs.core.nth.call(null,vec__20594,(1),null);
var line = cljs.core.nth.call(null,vec__20594,(2),null);
var col = cljs.core.nth.call(null,vec__20594,(3),null);
var name = cljs.core.nth.call(null,vec__20594,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__20597){
var vec__20598 = p__20597;
var gcol = cljs.core.nth.call(null,vec__20598,(0),null);
var sidx = cljs.core.nth.call(null,vec__20598,(1),null);
var line = cljs.core.nth.call(null,vec__20598,(2),null);
var col = cljs.core.nth.call(null,vec__20598,(3),null);
var name = cljs.core.nth.call(null,vec__20598,(4),null);
var seg = vec__20598;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__20598,gcol,sidx,line,col,name,seg,relseg){
return (function (p__20601){
var vec__20602 = p__20601;
var _ = cljs.core.nth.call(null,vec__20602,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__20602,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__20602,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__20602,(3),null);
var lname = cljs.core.nth.call(null,vec__20602,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__20598,gcol,sidx,line,col,name,seg,relseg))
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
var seq__20608 = cljs.core.seq.call(null,infos);
var chunk__20609 = null;
var count__20610 = (0);
var i__20611 = (0);
while(true){
if((i__20611 < count__20610)){
var info = cljs.core._nth.call(null,chunk__20609,i__20611);
var segv_20690 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_20691 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_20692 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_20691 > (lc_20692 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__20608,chunk__20609,count__20610,i__20611,segv_20690,gline_20691,lc_20692,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_20691 - (lc_20692 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_20690], null));
});})(seq__20608,chunk__20609,count__20610,i__20611,segv_20690,gline_20691,lc_20692,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__20608,chunk__20609,count__20610,i__20611,segv_20690,gline_20691,lc_20692,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20691], null),cljs.core.conj,segv_20690);
});})(seq__20608,chunk__20609,count__20610,i__20611,segv_20690,gline_20691,lc_20692,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__20693 = seq__20608;
var G__20694 = chunk__20609;
var G__20695 = count__20610;
var G__20696 = (i__20611 + (1));
seq__20608 = G__20693;
chunk__20609 = G__20694;
count__20610 = G__20695;
i__20611 = G__20696;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__20608);
if(temp__5735__auto__){
var seq__20608__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20608__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__20608__$1);
var G__20697 = cljs.core.chunk_rest.call(null,seq__20608__$1);
var G__20698 = c__4461__auto__;
var G__20699 = cljs.core.count.call(null,c__4461__auto__);
var G__20700 = (0);
seq__20608 = G__20697;
chunk__20609 = G__20698;
count__20610 = G__20699;
i__20611 = G__20700;
continue;
} else {
var info = cljs.core.first.call(null,seq__20608__$1);
var segv_20701 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_20702 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_20703 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_20702 > (lc_20703 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__20608,chunk__20609,count__20610,i__20611,segv_20701,gline_20702,lc_20703,info,seq__20608__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_20702 - (lc_20703 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_20701], null));
});})(seq__20608,chunk__20609,count__20610,i__20611,segv_20701,gline_20702,lc_20703,info,seq__20608__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__20608,chunk__20609,count__20610,i__20611,segv_20701,gline_20702,lc_20703,info,seq__20608__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20702], null),cljs.core.conj,segv_20701);
});})(seq__20608,chunk__20609,count__20610,i__20611,segv_20701,gline_20702,lc_20703,info,seq__20608__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__20704 = cljs.core.next.call(null,seq__20608__$1);
var G__20705 = null;
var G__20706 = (0);
var G__20707 = (0);
seq__20608 = G__20704;
chunk__20609 = G__20705;
count__20610 = G__20706;
i__20611 = G__20707;
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
var seq__20612_20708 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__20613_20709 = null;
var count__20614_20710 = (0);
var i__20615_20711 = (0);
while(true){
if((i__20615_20711 < count__20614_20710)){
var vec__20616_20712 = cljs.core._nth.call(null,chunk__20613_20709,i__20615_20711);
var source_idx_20713 = cljs.core.nth.call(null,vec__20616_20712,(0),null);
var vec__20619_20714 = cljs.core.nth.call(null,vec__20616_20712,(1),null);
var __20715 = cljs.core.nth.call(null,vec__20619_20714,(0),null);
var lines_20716__$1 = cljs.core.nth.call(null,vec__20619_20714,(1),null);
var seq__20622_20717 = cljs.core.seq.call(null,lines_20716__$1);
var chunk__20623_20718 = null;
var count__20624_20719 = (0);
var i__20625_20720 = (0);
while(true){
if((i__20625_20720 < count__20624_20719)){
var vec__20626_20721 = cljs.core._nth.call(null,chunk__20623_20718,i__20625_20720);
var line_20722 = cljs.core.nth.call(null,vec__20626_20721,(0),null);
var cols_20723 = cljs.core.nth.call(null,vec__20626_20721,(1),null);
var seq__20629_20724 = cljs.core.seq.call(null,cols_20723);
var chunk__20630_20725 = null;
var count__20631_20726 = (0);
var i__20632_20727 = (0);
while(true){
if((i__20632_20727 < count__20631_20726)){
var vec__20633_20728 = cljs.core._nth.call(null,chunk__20630_20725,i__20632_20727);
var col_20729 = cljs.core.nth.call(null,vec__20633_20728,(0),null);
var infos_20730 = cljs.core.nth.call(null,vec__20633_20728,(1),null);
encode_cols.call(null,infos_20730,source_idx_20713,line_20722,col_20729);


var G__20731 = seq__20629_20724;
var G__20732 = chunk__20630_20725;
var G__20733 = count__20631_20726;
var G__20734 = (i__20632_20727 + (1));
seq__20629_20724 = G__20731;
chunk__20630_20725 = G__20732;
count__20631_20726 = G__20733;
i__20632_20727 = G__20734;
continue;
} else {
var temp__5735__auto___20735 = cljs.core.seq.call(null,seq__20629_20724);
if(temp__5735__auto___20735){
var seq__20629_20736__$1 = temp__5735__auto___20735;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20629_20736__$1)){
var c__4461__auto___20737 = cljs.core.chunk_first.call(null,seq__20629_20736__$1);
var G__20738 = cljs.core.chunk_rest.call(null,seq__20629_20736__$1);
var G__20739 = c__4461__auto___20737;
var G__20740 = cljs.core.count.call(null,c__4461__auto___20737);
var G__20741 = (0);
seq__20629_20724 = G__20738;
chunk__20630_20725 = G__20739;
count__20631_20726 = G__20740;
i__20632_20727 = G__20741;
continue;
} else {
var vec__20636_20742 = cljs.core.first.call(null,seq__20629_20736__$1);
var col_20743 = cljs.core.nth.call(null,vec__20636_20742,(0),null);
var infos_20744 = cljs.core.nth.call(null,vec__20636_20742,(1),null);
encode_cols.call(null,infos_20744,source_idx_20713,line_20722,col_20743);


var G__20745 = cljs.core.next.call(null,seq__20629_20736__$1);
var G__20746 = null;
var G__20747 = (0);
var G__20748 = (0);
seq__20629_20724 = G__20745;
chunk__20630_20725 = G__20746;
count__20631_20726 = G__20747;
i__20632_20727 = G__20748;
continue;
}
} else {
}
}
break;
}


var G__20749 = seq__20622_20717;
var G__20750 = chunk__20623_20718;
var G__20751 = count__20624_20719;
var G__20752 = (i__20625_20720 + (1));
seq__20622_20717 = G__20749;
chunk__20623_20718 = G__20750;
count__20624_20719 = G__20751;
i__20625_20720 = G__20752;
continue;
} else {
var temp__5735__auto___20753 = cljs.core.seq.call(null,seq__20622_20717);
if(temp__5735__auto___20753){
var seq__20622_20754__$1 = temp__5735__auto___20753;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20622_20754__$1)){
var c__4461__auto___20755 = cljs.core.chunk_first.call(null,seq__20622_20754__$1);
var G__20756 = cljs.core.chunk_rest.call(null,seq__20622_20754__$1);
var G__20757 = c__4461__auto___20755;
var G__20758 = cljs.core.count.call(null,c__4461__auto___20755);
var G__20759 = (0);
seq__20622_20717 = G__20756;
chunk__20623_20718 = G__20757;
count__20624_20719 = G__20758;
i__20625_20720 = G__20759;
continue;
} else {
var vec__20639_20760 = cljs.core.first.call(null,seq__20622_20754__$1);
var line_20761 = cljs.core.nth.call(null,vec__20639_20760,(0),null);
var cols_20762 = cljs.core.nth.call(null,vec__20639_20760,(1),null);
var seq__20642_20763 = cljs.core.seq.call(null,cols_20762);
var chunk__20643_20764 = null;
var count__20644_20765 = (0);
var i__20645_20766 = (0);
while(true){
if((i__20645_20766 < count__20644_20765)){
var vec__20646_20767 = cljs.core._nth.call(null,chunk__20643_20764,i__20645_20766);
var col_20768 = cljs.core.nth.call(null,vec__20646_20767,(0),null);
var infos_20769 = cljs.core.nth.call(null,vec__20646_20767,(1),null);
encode_cols.call(null,infos_20769,source_idx_20713,line_20761,col_20768);


var G__20770 = seq__20642_20763;
var G__20771 = chunk__20643_20764;
var G__20772 = count__20644_20765;
var G__20773 = (i__20645_20766 + (1));
seq__20642_20763 = G__20770;
chunk__20643_20764 = G__20771;
count__20644_20765 = G__20772;
i__20645_20766 = G__20773;
continue;
} else {
var temp__5735__auto___20774__$1 = cljs.core.seq.call(null,seq__20642_20763);
if(temp__5735__auto___20774__$1){
var seq__20642_20775__$1 = temp__5735__auto___20774__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20642_20775__$1)){
var c__4461__auto___20776 = cljs.core.chunk_first.call(null,seq__20642_20775__$1);
var G__20777 = cljs.core.chunk_rest.call(null,seq__20642_20775__$1);
var G__20778 = c__4461__auto___20776;
var G__20779 = cljs.core.count.call(null,c__4461__auto___20776);
var G__20780 = (0);
seq__20642_20763 = G__20777;
chunk__20643_20764 = G__20778;
count__20644_20765 = G__20779;
i__20645_20766 = G__20780;
continue;
} else {
var vec__20649_20781 = cljs.core.first.call(null,seq__20642_20775__$1);
var col_20782 = cljs.core.nth.call(null,vec__20649_20781,(0),null);
var infos_20783 = cljs.core.nth.call(null,vec__20649_20781,(1),null);
encode_cols.call(null,infos_20783,source_idx_20713,line_20761,col_20782);


var G__20784 = cljs.core.next.call(null,seq__20642_20775__$1);
var G__20785 = null;
var G__20786 = (0);
var G__20787 = (0);
seq__20642_20763 = G__20784;
chunk__20643_20764 = G__20785;
count__20644_20765 = G__20786;
i__20645_20766 = G__20787;
continue;
}
} else {
}
}
break;
}


var G__20788 = cljs.core.next.call(null,seq__20622_20754__$1);
var G__20789 = null;
var G__20790 = (0);
var G__20791 = (0);
seq__20622_20717 = G__20788;
chunk__20623_20718 = G__20789;
count__20624_20719 = G__20790;
i__20625_20720 = G__20791;
continue;
}
} else {
}
}
break;
}


var G__20792 = seq__20612_20708;
var G__20793 = chunk__20613_20709;
var G__20794 = count__20614_20710;
var G__20795 = (i__20615_20711 + (1));
seq__20612_20708 = G__20792;
chunk__20613_20709 = G__20793;
count__20614_20710 = G__20794;
i__20615_20711 = G__20795;
continue;
} else {
var temp__5735__auto___20796 = cljs.core.seq.call(null,seq__20612_20708);
if(temp__5735__auto___20796){
var seq__20612_20797__$1 = temp__5735__auto___20796;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20612_20797__$1)){
var c__4461__auto___20798 = cljs.core.chunk_first.call(null,seq__20612_20797__$1);
var G__20799 = cljs.core.chunk_rest.call(null,seq__20612_20797__$1);
var G__20800 = c__4461__auto___20798;
var G__20801 = cljs.core.count.call(null,c__4461__auto___20798);
var G__20802 = (0);
seq__20612_20708 = G__20799;
chunk__20613_20709 = G__20800;
count__20614_20710 = G__20801;
i__20615_20711 = G__20802;
continue;
} else {
var vec__20652_20803 = cljs.core.first.call(null,seq__20612_20797__$1);
var source_idx_20804 = cljs.core.nth.call(null,vec__20652_20803,(0),null);
var vec__20655_20805 = cljs.core.nth.call(null,vec__20652_20803,(1),null);
var __20806 = cljs.core.nth.call(null,vec__20655_20805,(0),null);
var lines_20807__$1 = cljs.core.nth.call(null,vec__20655_20805,(1),null);
var seq__20658_20808 = cljs.core.seq.call(null,lines_20807__$1);
var chunk__20659_20809 = null;
var count__20660_20810 = (0);
var i__20661_20811 = (0);
while(true){
if((i__20661_20811 < count__20660_20810)){
var vec__20662_20812 = cljs.core._nth.call(null,chunk__20659_20809,i__20661_20811);
var line_20813 = cljs.core.nth.call(null,vec__20662_20812,(0),null);
var cols_20814 = cljs.core.nth.call(null,vec__20662_20812,(1),null);
var seq__20665_20815 = cljs.core.seq.call(null,cols_20814);
var chunk__20666_20816 = null;
var count__20667_20817 = (0);
var i__20668_20818 = (0);
while(true){
if((i__20668_20818 < count__20667_20817)){
var vec__20669_20819 = cljs.core._nth.call(null,chunk__20666_20816,i__20668_20818);
var col_20820 = cljs.core.nth.call(null,vec__20669_20819,(0),null);
var infos_20821 = cljs.core.nth.call(null,vec__20669_20819,(1),null);
encode_cols.call(null,infos_20821,source_idx_20804,line_20813,col_20820);


var G__20822 = seq__20665_20815;
var G__20823 = chunk__20666_20816;
var G__20824 = count__20667_20817;
var G__20825 = (i__20668_20818 + (1));
seq__20665_20815 = G__20822;
chunk__20666_20816 = G__20823;
count__20667_20817 = G__20824;
i__20668_20818 = G__20825;
continue;
} else {
var temp__5735__auto___20826__$1 = cljs.core.seq.call(null,seq__20665_20815);
if(temp__5735__auto___20826__$1){
var seq__20665_20827__$1 = temp__5735__auto___20826__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20665_20827__$1)){
var c__4461__auto___20828 = cljs.core.chunk_first.call(null,seq__20665_20827__$1);
var G__20829 = cljs.core.chunk_rest.call(null,seq__20665_20827__$1);
var G__20830 = c__4461__auto___20828;
var G__20831 = cljs.core.count.call(null,c__4461__auto___20828);
var G__20832 = (0);
seq__20665_20815 = G__20829;
chunk__20666_20816 = G__20830;
count__20667_20817 = G__20831;
i__20668_20818 = G__20832;
continue;
} else {
var vec__20672_20833 = cljs.core.first.call(null,seq__20665_20827__$1);
var col_20834 = cljs.core.nth.call(null,vec__20672_20833,(0),null);
var infos_20835 = cljs.core.nth.call(null,vec__20672_20833,(1),null);
encode_cols.call(null,infos_20835,source_idx_20804,line_20813,col_20834);


var G__20836 = cljs.core.next.call(null,seq__20665_20827__$1);
var G__20837 = null;
var G__20838 = (0);
var G__20839 = (0);
seq__20665_20815 = G__20836;
chunk__20666_20816 = G__20837;
count__20667_20817 = G__20838;
i__20668_20818 = G__20839;
continue;
}
} else {
}
}
break;
}


var G__20840 = seq__20658_20808;
var G__20841 = chunk__20659_20809;
var G__20842 = count__20660_20810;
var G__20843 = (i__20661_20811 + (1));
seq__20658_20808 = G__20840;
chunk__20659_20809 = G__20841;
count__20660_20810 = G__20842;
i__20661_20811 = G__20843;
continue;
} else {
var temp__5735__auto___20844__$1 = cljs.core.seq.call(null,seq__20658_20808);
if(temp__5735__auto___20844__$1){
var seq__20658_20845__$1 = temp__5735__auto___20844__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20658_20845__$1)){
var c__4461__auto___20846 = cljs.core.chunk_first.call(null,seq__20658_20845__$1);
var G__20847 = cljs.core.chunk_rest.call(null,seq__20658_20845__$1);
var G__20848 = c__4461__auto___20846;
var G__20849 = cljs.core.count.call(null,c__4461__auto___20846);
var G__20850 = (0);
seq__20658_20808 = G__20847;
chunk__20659_20809 = G__20848;
count__20660_20810 = G__20849;
i__20661_20811 = G__20850;
continue;
} else {
var vec__20675_20851 = cljs.core.first.call(null,seq__20658_20845__$1);
var line_20852 = cljs.core.nth.call(null,vec__20675_20851,(0),null);
var cols_20853 = cljs.core.nth.call(null,vec__20675_20851,(1),null);
var seq__20678_20854 = cljs.core.seq.call(null,cols_20853);
var chunk__20679_20855 = null;
var count__20680_20856 = (0);
var i__20681_20857 = (0);
while(true){
if((i__20681_20857 < count__20680_20856)){
var vec__20682_20858 = cljs.core._nth.call(null,chunk__20679_20855,i__20681_20857);
var col_20859 = cljs.core.nth.call(null,vec__20682_20858,(0),null);
var infos_20860 = cljs.core.nth.call(null,vec__20682_20858,(1),null);
encode_cols.call(null,infos_20860,source_idx_20804,line_20852,col_20859);


var G__20861 = seq__20678_20854;
var G__20862 = chunk__20679_20855;
var G__20863 = count__20680_20856;
var G__20864 = (i__20681_20857 + (1));
seq__20678_20854 = G__20861;
chunk__20679_20855 = G__20862;
count__20680_20856 = G__20863;
i__20681_20857 = G__20864;
continue;
} else {
var temp__5735__auto___20865__$2 = cljs.core.seq.call(null,seq__20678_20854);
if(temp__5735__auto___20865__$2){
var seq__20678_20866__$1 = temp__5735__auto___20865__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20678_20866__$1)){
var c__4461__auto___20867 = cljs.core.chunk_first.call(null,seq__20678_20866__$1);
var G__20868 = cljs.core.chunk_rest.call(null,seq__20678_20866__$1);
var G__20869 = c__4461__auto___20867;
var G__20870 = cljs.core.count.call(null,c__4461__auto___20867);
var G__20871 = (0);
seq__20678_20854 = G__20868;
chunk__20679_20855 = G__20869;
count__20680_20856 = G__20870;
i__20681_20857 = G__20871;
continue;
} else {
var vec__20685_20872 = cljs.core.first.call(null,seq__20678_20866__$1);
var col_20873 = cljs.core.nth.call(null,vec__20685_20872,(0),null);
var infos_20874 = cljs.core.nth.call(null,vec__20685_20872,(1),null);
encode_cols.call(null,infos_20874,source_idx_20804,line_20852,col_20873);


var G__20875 = cljs.core.next.call(null,seq__20678_20866__$1);
var G__20876 = null;
var G__20877 = (0);
var G__20878 = (0);
seq__20678_20854 = G__20875;
chunk__20679_20855 = G__20876;
count__20680_20856 = G__20877;
i__20681_20857 = G__20878;
continue;
}
} else {
}
}
break;
}


var G__20879 = cljs.core.next.call(null,seq__20658_20845__$1);
var G__20880 = null;
var G__20881 = (0);
var G__20882 = (0);
seq__20658_20808 = G__20879;
chunk__20659_20809 = G__20880;
count__20660_20810 = G__20881;
i__20661_20811 = G__20882;
continue;
}
} else {
}
}
break;
}


var G__20883 = cljs.core.next.call(null,seq__20612_20797__$1);
var G__20884 = null;
var G__20885 = (0);
var G__20886 = (0);
seq__20612_20708 = G__20883;
chunk__20613_20709 = G__20884;
count__20614_20710 = G__20885;
i__20615_20711 = G__20886;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__20688 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__20605_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20605_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__20606_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__20606_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__20607_SHARP_){
return clojure.string.join.call(null,",",p1__20607_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__20689 = G__20688;
goog.object.set(G__20689,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__20689;
} else {
return G__20688;
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
var vec__20887 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__20887,(0),null);
var col_map = cljs.core.nth.call(null,vec__20887,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__20890 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__20890,(0),null);
var infos = cljs.core.nth.call(null,vec__20890,(1),null);
var G__20896 = cljs.core.next.call(null,col_map_seq);
var G__20897 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__20890,col,infos,vec__20887,line,col_map){
return (function (v,p__20893){
var map__20894 = p__20893;
var map__20894__$1 = (((((!((map__20894 == null))))?(((((map__20894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20894):map__20894);
var gline = cljs.core.get.call(null,map__20894__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__20894__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__20890,col,infos,vec__20887,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__20896;
new_cols = G__20897;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__20898 = cljs.core.next.call(null,line_map_seq);
var G__20899 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__20898;
new_lines = G__20899;
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
var seq__20900_20962 = cljs.core.seq.call(null,reverse_map);
var chunk__20901_20963 = null;
var count__20902_20964 = (0);
var i__20903_20965 = (0);
while(true){
if((i__20903_20965 < count__20902_20964)){
var vec__20904_20966 = cljs.core._nth.call(null,chunk__20901_20963,i__20903_20965);
var line_20967 = cljs.core.nth.call(null,vec__20904_20966,(0),null);
var columns_20968 = cljs.core.nth.call(null,vec__20904_20966,(1),null);
var seq__20907_20969 = cljs.core.seq.call(null,columns_20968);
var chunk__20908_20970 = null;
var count__20909_20971 = (0);
var i__20910_20972 = (0);
while(true){
if((i__20910_20972 < count__20909_20971)){
var vec__20911_20973 = cljs.core._nth.call(null,chunk__20908_20970,i__20910_20972);
var column_20974 = cljs.core.nth.call(null,vec__20911_20973,(0),null);
var column_info_20975 = cljs.core.nth.call(null,vec__20911_20973,(1),null);
var seq__20914_20976 = cljs.core.seq.call(null,column_info_20975);
var chunk__20915_20977 = null;
var count__20916_20978 = (0);
var i__20917_20979 = (0);
while(true){
if((i__20917_20979 < count__20916_20978)){
var map__20918_20980 = cljs.core._nth.call(null,chunk__20915_20977,i__20917_20979);
var map__20918_20981__$1 = (((((!((map__20918_20980 == null))))?(((((map__20918_20980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20918_20980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20918_20980):map__20918_20980);
var gline_20982 = cljs.core.get.call(null,map__20918_20981__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_20983 = cljs.core.get.call(null,map__20918_20981__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_20984 = cljs.core.get.call(null,map__20918_20981__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20982], null),cljs.core.fnil.call(null,((function (seq__20914_20976,chunk__20915_20977,count__20916_20978,i__20917_20979,seq__20907_20969,chunk__20908_20970,count__20909_20971,i__20910_20972,seq__20900_20962,chunk__20901_20963,count__20902_20964,i__20903_20965,map__20918_20980,map__20918_20981__$1,gline_20982,gcol_20983,name_20984,vec__20911_20973,column_20974,column_info_20975,vec__20904_20966,line_20967,columns_20968,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20983], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_20967,new cljs.core.Keyword(null,"col","col",-1959363084),column_20974,new cljs.core.Keyword(null,"name","name",1843675177),name_20984], null));
});})(seq__20914_20976,chunk__20915_20977,count__20916_20978,i__20917_20979,seq__20907_20969,chunk__20908_20970,count__20909_20971,i__20910_20972,seq__20900_20962,chunk__20901_20963,count__20902_20964,i__20903_20965,map__20918_20980,map__20918_20981__$1,gline_20982,gcol_20983,name_20984,vec__20911_20973,column_20974,column_info_20975,vec__20904_20966,line_20967,columns_20968,inverted))
,cljs.core.sorted_map.call(null)));


var G__20985 = seq__20914_20976;
var G__20986 = chunk__20915_20977;
var G__20987 = count__20916_20978;
var G__20988 = (i__20917_20979 + (1));
seq__20914_20976 = G__20985;
chunk__20915_20977 = G__20986;
count__20916_20978 = G__20987;
i__20917_20979 = G__20988;
continue;
} else {
var temp__5735__auto___20989 = cljs.core.seq.call(null,seq__20914_20976);
if(temp__5735__auto___20989){
var seq__20914_20990__$1 = temp__5735__auto___20989;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20914_20990__$1)){
var c__4461__auto___20991 = cljs.core.chunk_first.call(null,seq__20914_20990__$1);
var G__20992 = cljs.core.chunk_rest.call(null,seq__20914_20990__$1);
var G__20993 = c__4461__auto___20991;
var G__20994 = cljs.core.count.call(null,c__4461__auto___20991);
var G__20995 = (0);
seq__20914_20976 = G__20992;
chunk__20915_20977 = G__20993;
count__20916_20978 = G__20994;
i__20917_20979 = G__20995;
continue;
} else {
var map__20920_20996 = cljs.core.first.call(null,seq__20914_20990__$1);
var map__20920_20997__$1 = (((((!((map__20920_20996 == null))))?(((((map__20920_20996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20920_20996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20920_20996):map__20920_20996);
var gline_20998 = cljs.core.get.call(null,map__20920_20997__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_20999 = cljs.core.get.call(null,map__20920_20997__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_21000 = cljs.core.get.call(null,map__20920_20997__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20998], null),cljs.core.fnil.call(null,((function (seq__20914_20976,chunk__20915_20977,count__20916_20978,i__20917_20979,seq__20907_20969,chunk__20908_20970,count__20909_20971,i__20910_20972,seq__20900_20962,chunk__20901_20963,count__20902_20964,i__20903_20965,map__20920_20996,map__20920_20997__$1,gline_20998,gcol_20999,name_21000,seq__20914_20990__$1,temp__5735__auto___20989,vec__20911_20973,column_20974,column_info_20975,vec__20904_20966,line_20967,columns_20968,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20999], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_20967,new cljs.core.Keyword(null,"col","col",-1959363084),column_20974,new cljs.core.Keyword(null,"name","name",1843675177),name_21000], null));
});})(seq__20914_20976,chunk__20915_20977,count__20916_20978,i__20917_20979,seq__20907_20969,chunk__20908_20970,count__20909_20971,i__20910_20972,seq__20900_20962,chunk__20901_20963,count__20902_20964,i__20903_20965,map__20920_20996,map__20920_20997__$1,gline_20998,gcol_20999,name_21000,seq__20914_20990__$1,temp__5735__auto___20989,vec__20911_20973,column_20974,column_info_20975,vec__20904_20966,line_20967,columns_20968,inverted))
,cljs.core.sorted_map.call(null)));


var G__21001 = cljs.core.next.call(null,seq__20914_20990__$1);
var G__21002 = null;
var G__21003 = (0);
var G__21004 = (0);
seq__20914_20976 = G__21001;
chunk__20915_20977 = G__21002;
count__20916_20978 = G__21003;
i__20917_20979 = G__21004;
continue;
}
} else {
}
}
break;
}


var G__21005 = seq__20907_20969;
var G__21006 = chunk__20908_20970;
var G__21007 = count__20909_20971;
var G__21008 = (i__20910_20972 + (1));
seq__20907_20969 = G__21005;
chunk__20908_20970 = G__21006;
count__20909_20971 = G__21007;
i__20910_20972 = G__21008;
continue;
} else {
var temp__5735__auto___21009 = cljs.core.seq.call(null,seq__20907_20969);
if(temp__5735__auto___21009){
var seq__20907_21010__$1 = temp__5735__auto___21009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20907_21010__$1)){
var c__4461__auto___21011 = cljs.core.chunk_first.call(null,seq__20907_21010__$1);
var G__21012 = cljs.core.chunk_rest.call(null,seq__20907_21010__$1);
var G__21013 = c__4461__auto___21011;
var G__21014 = cljs.core.count.call(null,c__4461__auto___21011);
var G__21015 = (0);
seq__20907_20969 = G__21012;
chunk__20908_20970 = G__21013;
count__20909_20971 = G__21014;
i__20910_20972 = G__21015;
continue;
} else {
var vec__20922_21016 = cljs.core.first.call(null,seq__20907_21010__$1);
var column_21017 = cljs.core.nth.call(null,vec__20922_21016,(0),null);
var column_info_21018 = cljs.core.nth.call(null,vec__20922_21016,(1),null);
var seq__20925_21019 = cljs.core.seq.call(null,column_info_21018);
var chunk__20926_21020 = null;
var count__20927_21021 = (0);
var i__20928_21022 = (0);
while(true){
if((i__20928_21022 < count__20927_21021)){
var map__20929_21023 = cljs.core._nth.call(null,chunk__20926_21020,i__20928_21022);
var map__20929_21024__$1 = (((((!((map__20929_21023 == null))))?(((((map__20929_21023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20929_21023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20929_21023):map__20929_21023);
var gline_21025 = cljs.core.get.call(null,map__20929_21024__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_21026 = cljs.core.get.call(null,map__20929_21024__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_21027 = cljs.core.get.call(null,map__20929_21024__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_21025], null),cljs.core.fnil.call(null,((function (seq__20925_21019,chunk__20926_21020,count__20927_21021,i__20928_21022,seq__20907_20969,chunk__20908_20970,count__20909_20971,i__20910_20972,seq__20900_20962,chunk__20901_20963,count__20902_20964,i__20903_20965,map__20929_21023,map__20929_21024__$1,gline_21025,gcol_21026,name_21027,vec__20922_21016,column_21017,column_info_21018,seq__20907_21010__$1,temp__5735__auto___21009,vec__20904_20966,line_20967,columns_20968,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_21026], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_20967,new cljs.core.Keyword(null,"col","col",-1959363084),column_21017,new cljs.core.Keyword(null,"name","name",1843675177),name_21027], null));
});})(seq__20925_21019,chunk__20926_21020,count__20927_21021,i__20928_21022,seq__20907_20969,chunk__20908_20970,count__20909_20971,i__20910_20972,seq__20900_20962,chunk__20901_20963,count__20902_20964,i__20903_20965,map__20929_21023,map__20929_21024__$1,gline_21025,gcol_21026,name_21027,vec__20922_21016,column_21017,column_info_21018,seq__20907_21010__$1,temp__5735__auto___21009,vec__20904_20966,line_20967,columns_20968,inverted))
,cljs.core.sorted_map.call(null)));


var G__21028 = seq__20925_21019;
var G__21029 = chunk__20926_21020;
var G__21030 = count__20927_21021;
var G__21031 = (i__20928_21022 + (1));
seq__20925_21019 = G__21028;
chunk__20926_21020 = G__21029;
count__20927_21021 = G__21030;
i__20928_21022 = G__21031;
continue;
} else {
var temp__5735__auto___21032__$1 = cljs.core.seq.call(null,seq__20925_21019);
if(temp__5735__auto___21032__$1){
var seq__20925_21033__$1 = temp__5735__auto___21032__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20925_21033__$1)){
var c__4461__auto___21034 = cljs.core.chunk_first.call(null,seq__20925_21033__$1);
var G__21035 = cljs.core.chunk_rest.call(null,seq__20925_21033__$1);
var G__21036 = c__4461__auto___21034;
var G__21037 = cljs.core.count.call(null,c__4461__auto___21034);
var G__21038 = (0);
seq__20925_21019 = G__21035;
chunk__20926_21020 = G__21036;
count__20927_21021 = G__21037;
i__20928_21022 = G__21038;
continue;
} else {
var map__20931_21039 = cljs.core.first.call(null,seq__20925_21033__$1);
var map__20931_21040__$1 = (((((!((map__20931_21039 == null))))?(((((map__20931_21039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20931_21039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20931_21039):map__20931_21039);
var gline_21041 = cljs.core.get.call(null,map__20931_21040__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_21042 = cljs.core.get.call(null,map__20931_21040__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_21043 = cljs.core.get.call(null,map__20931_21040__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_21041], null),cljs.core.fnil.call(null,((function (seq__20925_21019,chunk__20926_21020,count__20927_21021,i__20928_21022,seq__20907_20969,chunk__20908_20970,count__20909_20971,i__20910_20972,seq__20900_20962,chunk__20901_20963,count__20902_20964,i__20903_20965,map__20931_21039,map__20931_21040__$1,gline_21041,gcol_21042,name_21043,seq__20925_21033__$1,temp__5735__auto___21032__$1,vec__20922_21016,column_21017,column_info_21018,seq__20907_21010__$1,temp__5735__auto___21009,vec__20904_20966,line_20967,columns_20968,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_21042], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_20967,new cljs.core.Keyword(null,"col","col",-1959363084),column_21017,new cljs.core.Keyword(null,"name","name",1843675177),name_21043], null));
});})(seq__20925_21019,chunk__20926_21020,count__20927_21021,i__20928_21022,seq__20907_20969,chunk__20908_20970,count__20909_20971,i__20910_20972,seq__20900_20962,chunk__20901_20963,count__20902_20964,i__20903_20965,map__20931_21039,map__20931_21040__$1,gline_21041,gcol_21042,name_21043,seq__20925_21033__$1,temp__5735__auto___21032__$1,vec__20922_21016,column_21017,column_info_21018,seq__20907_21010__$1,temp__5735__auto___21009,vec__20904_20966,line_20967,columns_20968,inverted))
,cljs.core.sorted_map.call(null)));


var G__21044 = cljs.core.next.call(null,seq__20925_21033__$1);
var G__21045 = null;
var G__21046 = (0);
var G__21047 = (0);
seq__20925_21019 = G__21044;
chunk__20926_21020 = G__21045;
count__20927_21021 = G__21046;
i__20928_21022 = G__21047;
continue;
}
} else {
}
}
break;
}


var G__21048 = cljs.core.next.call(null,seq__20907_21010__$1);
var G__21049 = null;
var G__21050 = (0);
var G__21051 = (0);
seq__20907_20969 = G__21048;
chunk__20908_20970 = G__21049;
count__20909_20971 = G__21050;
i__20910_20972 = G__21051;
continue;
}
} else {
}
}
break;
}


var G__21052 = seq__20900_20962;
var G__21053 = chunk__20901_20963;
var G__21054 = count__20902_20964;
var G__21055 = (i__20903_20965 + (1));
seq__20900_20962 = G__21052;
chunk__20901_20963 = G__21053;
count__20902_20964 = G__21054;
i__20903_20965 = G__21055;
continue;
} else {
var temp__5735__auto___21056 = cljs.core.seq.call(null,seq__20900_20962);
if(temp__5735__auto___21056){
var seq__20900_21057__$1 = temp__5735__auto___21056;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20900_21057__$1)){
var c__4461__auto___21058 = cljs.core.chunk_first.call(null,seq__20900_21057__$1);
var G__21059 = cljs.core.chunk_rest.call(null,seq__20900_21057__$1);
var G__21060 = c__4461__auto___21058;
var G__21061 = cljs.core.count.call(null,c__4461__auto___21058);
var G__21062 = (0);
seq__20900_20962 = G__21059;
chunk__20901_20963 = G__21060;
count__20902_20964 = G__21061;
i__20903_20965 = G__21062;
continue;
} else {
var vec__20933_21063 = cljs.core.first.call(null,seq__20900_21057__$1);
var line_21064 = cljs.core.nth.call(null,vec__20933_21063,(0),null);
var columns_21065 = cljs.core.nth.call(null,vec__20933_21063,(1),null);
var seq__20936_21066 = cljs.core.seq.call(null,columns_21065);
var chunk__20937_21067 = null;
var count__20938_21068 = (0);
var i__20939_21069 = (0);
while(true){
if((i__20939_21069 < count__20938_21068)){
var vec__20940_21070 = cljs.core._nth.call(null,chunk__20937_21067,i__20939_21069);
var column_21071 = cljs.core.nth.call(null,vec__20940_21070,(0),null);
var column_info_21072 = cljs.core.nth.call(null,vec__20940_21070,(1),null);
var seq__20943_21073 = cljs.core.seq.call(null,column_info_21072);
var chunk__20944_21074 = null;
var count__20945_21075 = (0);
var i__20946_21076 = (0);
while(true){
if((i__20946_21076 < count__20945_21075)){
var map__20947_21077 = cljs.core._nth.call(null,chunk__20944_21074,i__20946_21076);
var map__20947_21078__$1 = (((((!((map__20947_21077 == null))))?(((((map__20947_21077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20947_21077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20947_21077):map__20947_21077);
var gline_21079 = cljs.core.get.call(null,map__20947_21078__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_21080 = cljs.core.get.call(null,map__20947_21078__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_21081 = cljs.core.get.call(null,map__20947_21078__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_21079], null),cljs.core.fnil.call(null,((function (seq__20943_21073,chunk__20944_21074,count__20945_21075,i__20946_21076,seq__20936_21066,chunk__20937_21067,count__20938_21068,i__20939_21069,seq__20900_20962,chunk__20901_20963,count__20902_20964,i__20903_20965,map__20947_21077,map__20947_21078__$1,gline_21079,gcol_21080,name_21081,vec__20940_21070,column_21071,column_info_21072,vec__20933_21063,line_21064,columns_21065,seq__20900_21057__$1,temp__5735__auto___21056,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_21080], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_21064,new cljs.core.Keyword(null,"col","col",-1959363084),column_21071,new cljs.core.Keyword(null,"name","name",1843675177),name_21081], null));
});})(seq__20943_21073,chunk__20944_21074,count__20945_21075,i__20946_21076,seq__20936_21066,chunk__20937_21067,count__20938_21068,i__20939_21069,seq__20900_20962,chunk__20901_20963,count__20902_20964,i__20903_20965,map__20947_21077,map__20947_21078__$1,gline_21079,gcol_21080,name_21081,vec__20940_21070,column_21071,column_info_21072,vec__20933_21063,line_21064,columns_21065,seq__20900_21057__$1,temp__5735__auto___21056,inverted))
,cljs.core.sorted_map.call(null)));


var G__21082 = seq__20943_21073;
var G__21083 = chunk__20944_21074;
var G__21084 = count__20945_21075;
var G__21085 = (i__20946_21076 + (1));
seq__20943_21073 = G__21082;
chunk__20944_21074 = G__21083;
count__20945_21075 = G__21084;
i__20946_21076 = G__21085;
continue;
} else {
var temp__5735__auto___21086__$1 = cljs.core.seq.call(null,seq__20943_21073);
if(temp__5735__auto___21086__$1){
var seq__20943_21087__$1 = temp__5735__auto___21086__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20943_21087__$1)){
var c__4461__auto___21088 = cljs.core.chunk_first.call(null,seq__20943_21087__$1);
var G__21089 = cljs.core.chunk_rest.call(null,seq__20943_21087__$1);
var G__21090 = c__4461__auto___21088;
var G__21091 = cljs.core.count.call(null,c__4461__auto___21088);
var G__21092 = (0);
seq__20943_21073 = G__21089;
chunk__20944_21074 = G__21090;
count__20945_21075 = G__21091;
i__20946_21076 = G__21092;
continue;
} else {
var map__20949_21093 = cljs.core.first.call(null,seq__20943_21087__$1);
var map__20949_21094__$1 = (((((!((map__20949_21093 == null))))?(((((map__20949_21093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20949_21093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20949_21093):map__20949_21093);
var gline_21095 = cljs.core.get.call(null,map__20949_21094__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_21096 = cljs.core.get.call(null,map__20949_21094__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_21097 = cljs.core.get.call(null,map__20949_21094__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_21095], null),cljs.core.fnil.call(null,((function (seq__20943_21073,chunk__20944_21074,count__20945_21075,i__20946_21076,seq__20936_21066,chunk__20937_21067,count__20938_21068,i__20939_21069,seq__20900_20962,chunk__20901_20963,count__20902_20964,i__20903_20965,map__20949_21093,map__20949_21094__$1,gline_21095,gcol_21096,name_21097,seq__20943_21087__$1,temp__5735__auto___21086__$1,vec__20940_21070,column_21071,column_info_21072,vec__20933_21063,line_21064,columns_21065,seq__20900_21057__$1,temp__5735__auto___21056,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_21096], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_21064,new cljs.core.Keyword(null,"col","col",-1959363084),column_21071,new cljs.core.Keyword(null,"name","name",1843675177),name_21097], null));
});})(seq__20943_21073,chunk__20944_21074,count__20945_21075,i__20946_21076,seq__20936_21066,chunk__20937_21067,count__20938_21068,i__20939_21069,seq__20900_20962,chunk__20901_20963,count__20902_20964,i__20903_20965,map__20949_21093,map__20949_21094__$1,gline_21095,gcol_21096,name_21097,seq__20943_21087__$1,temp__5735__auto___21086__$1,vec__20940_21070,column_21071,column_info_21072,vec__20933_21063,line_21064,columns_21065,seq__20900_21057__$1,temp__5735__auto___21056,inverted))
,cljs.core.sorted_map.call(null)));


var G__21098 = cljs.core.next.call(null,seq__20943_21087__$1);
var G__21099 = null;
var G__21100 = (0);
var G__21101 = (0);
seq__20943_21073 = G__21098;
chunk__20944_21074 = G__21099;
count__20945_21075 = G__21100;
i__20946_21076 = G__21101;
continue;
}
} else {
}
}
break;
}


var G__21102 = seq__20936_21066;
var G__21103 = chunk__20937_21067;
var G__21104 = count__20938_21068;
var G__21105 = (i__20939_21069 + (1));
seq__20936_21066 = G__21102;
chunk__20937_21067 = G__21103;
count__20938_21068 = G__21104;
i__20939_21069 = G__21105;
continue;
} else {
var temp__5735__auto___21106__$1 = cljs.core.seq.call(null,seq__20936_21066);
if(temp__5735__auto___21106__$1){
var seq__20936_21107__$1 = temp__5735__auto___21106__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20936_21107__$1)){
var c__4461__auto___21108 = cljs.core.chunk_first.call(null,seq__20936_21107__$1);
var G__21109 = cljs.core.chunk_rest.call(null,seq__20936_21107__$1);
var G__21110 = c__4461__auto___21108;
var G__21111 = cljs.core.count.call(null,c__4461__auto___21108);
var G__21112 = (0);
seq__20936_21066 = G__21109;
chunk__20937_21067 = G__21110;
count__20938_21068 = G__21111;
i__20939_21069 = G__21112;
continue;
} else {
var vec__20951_21113 = cljs.core.first.call(null,seq__20936_21107__$1);
var column_21114 = cljs.core.nth.call(null,vec__20951_21113,(0),null);
var column_info_21115 = cljs.core.nth.call(null,vec__20951_21113,(1),null);
var seq__20954_21116 = cljs.core.seq.call(null,column_info_21115);
var chunk__20955_21117 = null;
var count__20956_21118 = (0);
var i__20957_21119 = (0);
while(true){
if((i__20957_21119 < count__20956_21118)){
var map__20958_21120 = cljs.core._nth.call(null,chunk__20955_21117,i__20957_21119);
var map__20958_21121__$1 = (((((!((map__20958_21120 == null))))?(((((map__20958_21120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20958_21120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20958_21120):map__20958_21120);
var gline_21122 = cljs.core.get.call(null,map__20958_21121__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_21123 = cljs.core.get.call(null,map__20958_21121__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_21124 = cljs.core.get.call(null,map__20958_21121__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_21122], null),cljs.core.fnil.call(null,((function (seq__20954_21116,chunk__20955_21117,count__20956_21118,i__20957_21119,seq__20936_21066,chunk__20937_21067,count__20938_21068,i__20939_21069,seq__20900_20962,chunk__20901_20963,count__20902_20964,i__20903_20965,map__20958_21120,map__20958_21121__$1,gline_21122,gcol_21123,name_21124,vec__20951_21113,column_21114,column_info_21115,seq__20936_21107__$1,temp__5735__auto___21106__$1,vec__20933_21063,line_21064,columns_21065,seq__20900_21057__$1,temp__5735__auto___21056,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_21123], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_21064,new cljs.core.Keyword(null,"col","col",-1959363084),column_21114,new cljs.core.Keyword(null,"name","name",1843675177),name_21124], null));
});})(seq__20954_21116,chunk__20955_21117,count__20956_21118,i__20957_21119,seq__20936_21066,chunk__20937_21067,count__20938_21068,i__20939_21069,seq__20900_20962,chunk__20901_20963,count__20902_20964,i__20903_20965,map__20958_21120,map__20958_21121__$1,gline_21122,gcol_21123,name_21124,vec__20951_21113,column_21114,column_info_21115,seq__20936_21107__$1,temp__5735__auto___21106__$1,vec__20933_21063,line_21064,columns_21065,seq__20900_21057__$1,temp__5735__auto___21056,inverted))
,cljs.core.sorted_map.call(null)));


var G__21125 = seq__20954_21116;
var G__21126 = chunk__20955_21117;
var G__21127 = count__20956_21118;
var G__21128 = (i__20957_21119 + (1));
seq__20954_21116 = G__21125;
chunk__20955_21117 = G__21126;
count__20956_21118 = G__21127;
i__20957_21119 = G__21128;
continue;
} else {
var temp__5735__auto___21129__$2 = cljs.core.seq.call(null,seq__20954_21116);
if(temp__5735__auto___21129__$2){
var seq__20954_21130__$1 = temp__5735__auto___21129__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20954_21130__$1)){
var c__4461__auto___21131 = cljs.core.chunk_first.call(null,seq__20954_21130__$1);
var G__21132 = cljs.core.chunk_rest.call(null,seq__20954_21130__$1);
var G__21133 = c__4461__auto___21131;
var G__21134 = cljs.core.count.call(null,c__4461__auto___21131);
var G__21135 = (0);
seq__20954_21116 = G__21132;
chunk__20955_21117 = G__21133;
count__20956_21118 = G__21134;
i__20957_21119 = G__21135;
continue;
} else {
var map__20960_21136 = cljs.core.first.call(null,seq__20954_21130__$1);
var map__20960_21137__$1 = (((((!((map__20960_21136 == null))))?(((((map__20960_21136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20960_21136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20960_21136):map__20960_21136);
var gline_21138 = cljs.core.get.call(null,map__20960_21137__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_21139 = cljs.core.get.call(null,map__20960_21137__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_21140 = cljs.core.get.call(null,map__20960_21137__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_21138], null),cljs.core.fnil.call(null,((function (seq__20954_21116,chunk__20955_21117,count__20956_21118,i__20957_21119,seq__20936_21066,chunk__20937_21067,count__20938_21068,i__20939_21069,seq__20900_20962,chunk__20901_20963,count__20902_20964,i__20903_20965,map__20960_21136,map__20960_21137__$1,gline_21138,gcol_21139,name_21140,seq__20954_21130__$1,temp__5735__auto___21129__$2,vec__20951_21113,column_21114,column_info_21115,seq__20936_21107__$1,temp__5735__auto___21106__$1,vec__20933_21063,line_21064,columns_21065,seq__20900_21057__$1,temp__5735__auto___21056,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_21139], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_21064,new cljs.core.Keyword(null,"col","col",-1959363084),column_21114,new cljs.core.Keyword(null,"name","name",1843675177),name_21140], null));
});})(seq__20954_21116,chunk__20955_21117,count__20956_21118,i__20957_21119,seq__20936_21066,chunk__20937_21067,count__20938_21068,i__20939_21069,seq__20900_20962,chunk__20901_20963,count__20902_20964,i__20903_20965,map__20960_21136,map__20960_21137__$1,gline_21138,gcol_21139,name_21140,seq__20954_21130__$1,temp__5735__auto___21129__$2,vec__20951_21113,column_21114,column_info_21115,seq__20936_21107__$1,temp__5735__auto___21106__$1,vec__20933_21063,line_21064,columns_21065,seq__20900_21057__$1,temp__5735__auto___21056,inverted))
,cljs.core.sorted_map.call(null)));


var G__21141 = cljs.core.next.call(null,seq__20954_21130__$1);
var G__21142 = null;
var G__21143 = (0);
var G__21144 = (0);
seq__20954_21116 = G__21141;
chunk__20955_21117 = G__21142;
count__20956_21118 = G__21143;
i__20957_21119 = G__21144;
continue;
}
} else {
}
}
break;
}


var G__21145 = cljs.core.next.call(null,seq__20936_21107__$1);
var G__21146 = null;
var G__21147 = (0);
var G__21148 = (0);
seq__20936_21066 = G__21145;
chunk__20937_21067 = G__21146;
count__20938_21068 = G__21147;
i__20939_21069 = G__21148;
continue;
}
} else {
}
}
break;
}


var G__21149 = cljs.core.next.call(null,seq__20900_21057__$1);
var G__21150 = null;
var G__21151 = (0);
var G__21152 = (0);
seq__20900_20962 = G__21149;
chunk__20901_20963 = G__21150;
count__20902_20964 = G__21151;
i__20903_20965 = G__21152;
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
