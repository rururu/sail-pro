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
return cljs.core.reduce.call(null,(function (m,p__4060){
var vec__4061 = p__4060;
var i = cljs.core.nth.call(null,vec__4061,(0),null);
var v = cljs.core.nth.call(null,vec__4061,(1),null);
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
var vec__4064 = seg;
var gcol = cljs.core.nth.call(null,vec__4064,(0),null);
var source = cljs.core.nth.call(null,vec__4064,(1),null);
var line = cljs.core.nth.call(null,vec__4064,(2),null);
var col = cljs.core.nth.call(null,vec__4064,(3),null);
var name = cljs.core.nth.call(null,vec__4064,(4),null);
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
var vec__4067 = seg;
var gcol = cljs.core.nth.call(null,vec__4067,(0),null);
var source = cljs.core.nth.call(null,vec__4067,(1),null);
var line = cljs.core.nth.call(null,vec__4067,(2),null);
var col = cljs.core.nth.call(null,vec__4067,(3),null);
var name = cljs.core.nth.call(null,vec__4067,(4),null);
var vec__4070 = relseg;
var rgcol = cljs.core.nth.call(null,vec__4070,(0),null);
var rsource = cljs.core.nth.call(null,vec__4070,(1),null);
var rline = cljs.core.nth.call(null,vec__4070,(2),null);
var rcol = cljs.core.nth.call(null,vec__4070,(3),null);
var rname = cljs.core.nth.call(null,vec__4070,(4),null);
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
var map__4073 = segmap;
var map__4073__$1 = cljs.core.__destructure_map.call(null,map__4073);
var gcol = cljs.core.get.call(null,map__4073__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__4073__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__4073__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__4073__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__4073__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__4075 = arguments.length;
switch (G__4075) {
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
var vec__4079 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__4083 = cljs.core.next.call(null,segs__$1);
var G__4084 = nrelseg;
var G__4085 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__4083;
relseg__$1 = G__4084;
result__$1 = G__4085;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__4079,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__4079,(1),null);
var G__4086 = (gline + (1));
var G__4087 = cljs.core.next.call(null,lines__$1);
var G__4088 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__4089 = result__$1;
gline = G__4086;
lines__$1 = G__4087;
relseg = G__4088;
result = G__4089;
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
var map__4091 = segmap;
var map__4091__$1 = cljs.core.__destructure_map.call(null,map__4091);
var gcol = cljs.core.get.call(null,map__4091__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__4091__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__4091__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__4091__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__4091__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,(function (p1__4090_SHARP_){
return cljs.core.conj.call(null,p1__4090_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__4093 = arguments.length;
switch (G__4093) {
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
var vec__4097 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__4101 = cljs.core.next.call(null,segs__$1);
var G__4102 = nrelseg;
var G__4103 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__4101;
relseg__$1 = G__4102;
result__$1 = G__4103;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__4097,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__4097,(1),null);
var G__4104 = (gline + (1));
var G__4105 = cljs.core.next.call(null,lines__$1);
var G__4106 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__4107 = result__$1;
gline = G__4104;
lines__$1 = G__4105;
relseg = G__4106;
result = G__4107;
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
cljs.core.swap_BANG_.call(null,relseg,(function (p__4108){
var vec__4109 = p__4108;
var _ = cljs.core.nth.call(null,vec__4109,(0),null);
var source = cljs.core.nth.call(null,vec__4109,(1),null);
var line = cljs.core.nth.call(null,vec__4109,(2),null);
var col = cljs.core.nth.call(null,vec__4109,(3),null);
var name = cljs.core.nth.call(null,vec__4109,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,(function (cols__$1,p__4112){
var vec__4113 = p__4112;
var gcol = cljs.core.nth.call(null,vec__4113,(0),null);
var sidx = cljs.core.nth.call(null,vec__4113,(1),null);
var line = cljs.core.nth.call(null,vec__4113,(2),null);
var col = cljs.core.nth.call(null,vec__4113,(3),null);
var name = cljs.core.nth.call(null,vec__4113,(4),null);
var seg = vec__4113;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,(function (p__4116){
var vec__4117 = p__4116;
var _ = cljs.core.nth.call(null,vec__4117,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__4117,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__4117,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__4117,(3),null);
var lname = cljs.core.nth.call(null,vec__4117,(4),null);
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
var seq__4123 = cljs.core.seq.call(null,infos);
var chunk__4124 = null;
var count__4125 = (0);
var i__4126 = (0);
while(true){
if((i__4126 < count__4125)){
var info = cljs.core._nth.call(null,chunk__4124,i__4126);
var segv_4477 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_4478 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_4479 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_4478 > (lc_4479 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__4123,chunk__4124,count__4125,i__4126,segv_4477,gline_4478,lc_4479,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_4478 - (lc_4479 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_4477], null));
});})(seq__4123,chunk__4124,count__4125,i__4126,segv_4477,gline_4478,lc_4479,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__4123,chunk__4124,count__4125,i__4126,segv_4477,gline_4478,lc_4479,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4478], null),cljs.core.conj,segv_4477);
});})(seq__4123,chunk__4124,count__4125,i__4126,segv_4477,gline_4478,lc_4479,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__4480 = seq__4123;
var G__4481 = chunk__4124;
var G__4482 = count__4125;
var G__4483 = (i__4126 + (1));
seq__4123 = G__4480;
chunk__4124 = G__4481;
count__4125 = G__4482;
i__4126 = G__4483;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__4123);
if(temp__5804__auto__){
var seq__4123__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4123__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__4123__$1);
var G__4484 = cljs.core.chunk_rest.call(null,seq__4123__$1);
var G__4485 = c__5525__auto__;
var G__4486 = cljs.core.count.call(null,c__5525__auto__);
var G__4487 = (0);
seq__4123 = G__4484;
chunk__4124 = G__4485;
count__4125 = G__4486;
i__4126 = G__4487;
continue;
} else {
var info = cljs.core.first.call(null,seq__4123__$1);
var segv_4488 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_4489 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_4490 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_4489 > (lc_4490 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__4123,chunk__4124,count__4125,i__4126,segv_4488,gline_4489,lc_4490,info,seq__4123__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_4489 - (lc_4490 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_4488], null));
});})(seq__4123,chunk__4124,count__4125,i__4126,segv_4488,gline_4489,lc_4490,info,seq__4123__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__4123,chunk__4124,count__4125,i__4126,segv_4488,gline_4489,lc_4490,info,seq__4123__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4489], null),cljs.core.conj,segv_4488);
});})(seq__4123,chunk__4124,count__4125,i__4126,segv_4488,gline_4489,lc_4490,info,seq__4123__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__4491 = cljs.core.next.call(null,seq__4123__$1);
var G__4492 = null;
var G__4493 = (0);
var G__4494 = (0);
seq__4123 = G__4491;
chunk__4124 = G__4492;
count__4125 = G__4493;
i__4126 = G__4494;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__4127_4495 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__4128_4496 = null;
var count__4129_4497 = (0);
var i__4130_4498 = (0);
while(true){
if((i__4130_4498 < count__4129_4497)){
var vec__4303_4499 = cljs.core._nth.call(null,chunk__4128_4496,i__4130_4498);
var source_idx_4500 = cljs.core.nth.call(null,vec__4303_4499,(0),null);
var vec__4306_4501 = cljs.core.nth.call(null,vec__4303_4499,(1),null);
var __4502 = cljs.core.nth.call(null,vec__4306_4501,(0),null);
var lines_4503__$1 = cljs.core.nth.call(null,vec__4306_4501,(1),null);
var seq__4309_4504 = cljs.core.seq.call(null,lines_4503__$1);
var chunk__4310_4505 = null;
var count__4311_4506 = (0);
var i__4312_4507 = (0);
while(true){
if((i__4312_4507 < count__4311_4506)){
var vec__4351_4508 = cljs.core._nth.call(null,chunk__4310_4505,i__4312_4507);
var line_4509 = cljs.core.nth.call(null,vec__4351_4508,(0),null);
var cols_4510 = cljs.core.nth.call(null,vec__4351_4508,(1),null);
var seq__4354_4511 = cljs.core.seq.call(null,cols_4510);
var chunk__4355_4512 = null;
var count__4356_4513 = (0);
var i__4357_4514 = (0);
while(true){
if((i__4357_4514 < count__4356_4513)){
var vec__4364_4515 = cljs.core._nth.call(null,chunk__4355_4512,i__4357_4514);
var col_4516 = cljs.core.nth.call(null,vec__4364_4515,(0),null);
var infos_4517 = cljs.core.nth.call(null,vec__4364_4515,(1),null);
encode_cols.call(null,infos_4517,source_idx_4500,line_4509,col_4516);


var G__4518 = seq__4354_4511;
var G__4519 = chunk__4355_4512;
var G__4520 = count__4356_4513;
var G__4521 = (i__4357_4514 + (1));
seq__4354_4511 = G__4518;
chunk__4355_4512 = G__4519;
count__4356_4513 = G__4520;
i__4357_4514 = G__4521;
continue;
} else {
var temp__5804__auto___4522 = cljs.core.seq.call(null,seq__4354_4511);
if(temp__5804__auto___4522){
var seq__4354_4523__$1 = temp__5804__auto___4522;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4354_4523__$1)){
var c__5525__auto___4524 = cljs.core.chunk_first.call(null,seq__4354_4523__$1);
var G__4525 = cljs.core.chunk_rest.call(null,seq__4354_4523__$1);
var G__4526 = c__5525__auto___4524;
var G__4527 = cljs.core.count.call(null,c__5525__auto___4524);
var G__4528 = (0);
seq__4354_4511 = G__4525;
chunk__4355_4512 = G__4526;
count__4356_4513 = G__4527;
i__4357_4514 = G__4528;
continue;
} else {
var vec__4367_4529 = cljs.core.first.call(null,seq__4354_4523__$1);
var col_4530 = cljs.core.nth.call(null,vec__4367_4529,(0),null);
var infos_4531 = cljs.core.nth.call(null,vec__4367_4529,(1),null);
encode_cols.call(null,infos_4531,source_idx_4500,line_4509,col_4530);


var G__4532 = cljs.core.next.call(null,seq__4354_4523__$1);
var G__4533 = null;
var G__4534 = (0);
var G__4535 = (0);
seq__4354_4511 = G__4532;
chunk__4355_4512 = G__4533;
count__4356_4513 = G__4534;
i__4357_4514 = G__4535;
continue;
}
} else {
}
}
break;
}


var G__4536 = seq__4309_4504;
var G__4537 = chunk__4310_4505;
var G__4538 = count__4311_4506;
var G__4539 = (i__4312_4507 + (1));
seq__4309_4504 = G__4536;
chunk__4310_4505 = G__4537;
count__4311_4506 = G__4538;
i__4312_4507 = G__4539;
continue;
} else {
var temp__5804__auto___4540 = cljs.core.seq.call(null,seq__4309_4504);
if(temp__5804__auto___4540){
var seq__4309_4541__$1 = temp__5804__auto___4540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4309_4541__$1)){
var c__5525__auto___4542 = cljs.core.chunk_first.call(null,seq__4309_4541__$1);
var G__4543 = cljs.core.chunk_rest.call(null,seq__4309_4541__$1);
var G__4544 = c__5525__auto___4542;
var G__4545 = cljs.core.count.call(null,c__5525__auto___4542);
var G__4546 = (0);
seq__4309_4504 = G__4543;
chunk__4310_4505 = G__4544;
count__4311_4506 = G__4545;
i__4312_4507 = G__4546;
continue;
} else {
var vec__4370_4547 = cljs.core.first.call(null,seq__4309_4541__$1);
var line_4548 = cljs.core.nth.call(null,vec__4370_4547,(0),null);
var cols_4549 = cljs.core.nth.call(null,vec__4370_4547,(1),null);
var seq__4373_4550 = cljs.core.seq.call(null,cols_4549);
var chunk__4374_4551 = null;
var count__4375_4552 = (0);
var i__4376_4553 = (0);
while(true){
if((i__4376_4553 < count__4375_4552)){
var vec__4383_4554 = cljs.core._nth.call(null,chunk__4374_4551,i__4376_4553);
var col_4555 = cljs.core.nth.call(null,vec__4383_4554,(0),null);
var infos_4556 = cljs.core.nth.call(null,vec__4383_4554,(1),null);
encode_cols.call(null,infos_4556,source_idx_4500,line_4548,col_4555);


var G__4557 = seq__4373_4550;
var G__4558 = chunk__4374_4551;
var G__4559 = count__4375_4552;
var G__4560 = (i__4376_4553 + (1));
seq__4373_4550 = G__4557;
chunk__4374_4551 = G__4558;
count__4375_4552 = G__4559;
i__4376_4553 = G__4560;
continue;
} else {
var temp__5804__auto___4561__$1 = cljs.core.seq.call(null,seq__4373_4550);
if(temp__5804__auto___4561__$1){
var seq__4373_4562__$1 = temp__5804__auto___4561__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4373_4562__$1)){
var c__5525__auto___4563 = cljs.core.chunk_first.call(null,seq__4373_4562__$1);
var G__4564 = cljs.core.chunk_rest.call(null,seq__4373_4562__$1);
var G__4565 = c__5525__auto___4563;
var G__4566 = cljs.core.count.call(null,c__5525__auto___4563);
var G__4567 = (0);
seq__4373_4550 = G__4564;
chunk__4374_4551 = G__4565;
count__4375_4552 = G__4566;
i__4376_4553 = G__4567;
continue;
} else {
var vec__4386_4568 = cljs.core.first.call(null,seq__4373_4562__$1);
var col_4569 = cljs.core.nth.call(null,vec__4386_4568,(0),null);
var infos_4570 = cljs.core.nth.call(null,vec__4386_4568,(1),null);
encode_cols.call(null,infos_4570,source_idx_4500,line_4548,col_4569);


var G__4571 = cljs.core.next.call(null,seq__4373_4562__$1);
var G__4572 = null;
var G__4573 = (0);
var G__4574 = (0);
seq__4373_4550 = G__4571;
chunk__4374_4551 = G__4572;
count__4375_4552 = G__4573;
i__4376_4553 = G__4574;
continue;
}
} else {
}
}
break;
}


var G__4575 = cljs.core.next.call(null,seq__4309_4541__$1);
var G__4576 = null;
var G__4577 = (0);
var G__4578 = (0);
seq__4309_4504 = G__4575;
chunk__4310_4505 = G__4576;
count__4311_4506 = G__4577;
i__4312_4507 = G__4578;
continue;
}
} else {
}
}
break;
}


var G__4579 = seq__4127_4495;
var G__4580 = chunk__4128_4496;
var G__4581 = count__4129_4497;
var G__4582 = (i__4130_4498 + (1));
seq__4127_4495 = G__4579;
chunk__4128_4496 = G__4580;
count__4129_4497 = G__4581;
i__4130_4498 = G__4582;
continue;
} else {
var temp__5804__auto___4583 = cljs.core.seq.call(null,seq__4127_4495);
if(temp__5804__auto___4583){
var seq__4127_4584__$1 = temp__5804__auto___4583;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4127_4584__$1)){
var c__5525__auto___4585 = cljs.core.chunk_first.call(null,seq__4127_4584__$1);
var G__4586 = cljs.core.chunk_rest.call(null,seq__4127_4584__$1);
var G__4587 = c__5525__auto___4585;
var G__4588 = cljs.core.count.call(null,c__5525__auto___4585);
var G__4589 = (0);
seq__4127_4495 = G__4586;
chunk__4128_4496 = G__4587;
count__4129_4497 = G__4588;
i__4130_4498 = G__4589;
continue;
} else {
var vec__4389_4590 = cljs.core.first.call(null,seq__4127_4584__$1);
var source_idx_4591 = cljs.core.nth.call(null,vec__4389_4590,(0),null);
var vec__4392_4592 = cljs.core.nth.call(null,vec__4389_4590,(1),null);
var __4593 = cljs.core.nth.call(null,vec__4392_4592,(0),null);
var lines_4594__$1 = cljs.core.nth.call(null,vec__4392_4592,(1),null);
var seq__4395_4595 = cljs.core.seq.call(null,lines_4594__$1);
var chunk__4396_4596 = null;
var count__4397_4597 = (0);
var i__4398_4598 = (0);
while(true){
if((i__4398_4598 < count__4397_4597)){
var vec__4437_4599 = cljs.core._nth.call(null,chunk__4396_4596,i__4398_4598);
var line_4600 = cljs.core.nth.call(null,vec__4437_4599,(0),null);
var cols_4601 = cljs.core.nth.call(null,vec__4437_4599,(1),null);
var seq__4440_4602 = cljs.core.seq.call(null,cols_4601);
var chunk__4441_4603 = null;
var count__4442_4604 = (0);
var i__4443_4605 = (0);
while(true){
if((i__4443_4605 < count__4442_4604)){
var vec__4450_4606 = cljs.core._nth.call(null,chunk__4441_4603,i__4443_4605);
var col_4607 = cljs.core.nth.call(null,vec__4450_4606,(0),null);
var infos_4608 = cljs.core.nth.call(null,vec__4450_4606,(1),null);
encode_cols.call(null,infos_4608,source_idx_4591,line_4600,col_4607);


var G__4609 = seq__4440_4602;
var G__4610 = chunk__4441_4603;
var G__4611 = count__4442_4604;
var G__4612 = (i__4443_4605 + (1));
seq__4440_4602 = G__4609;
chunk__4441_4603 = G__4610;
count__4442_4604 = G__4611;
i__4443_4605 = G__4612;
continue;
} else {
var temp__5804__auto___4613__$1 = cljs.core.seq.call(null,seq__4440_4602);
if(temp__5804__auto___4613__$1){
var seq__4440_4614__$1 = temp__5804__auto___4613__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4440_4614__$1)){
var c__5525__auto___4615 = cljs.core.chunk_first.call(null,seq__4440_4614__$1);
var G__4616 = cljs.core.chunk_rest.call(null,seq__4440_4614__$1);
var G__4617 = c__5525__auto___4615;
var G__4618 = cljs.core.count.call(null,c__5525__auto___4615);
var G__4619 = (0);
seq__4440_4602 = G__4616;
chunk__4441_4603 = G__4617;
count__4442_4604 = G__4618;
i__4443_4605 = G__4619;
continue;
} else {
var vec__4453_4620 = cljs.core.first.call(null,seq__4440_4614__$1);
var col_4621 = cljs.core.nth.call(null,vec__4453_4620,(0),null);
var infos_4622 = cljs.core.nth.call(null,vec__4453_4620,(1),null);
encode_cols.call(null,infos_4622,source_idx_4591,line_4600,col_4621);


var G__4623 = cljs.core.next.call(null,seq__4440_4614__$1);
var G__4624 = null;
var G__4625 = (0);
var G__4626 = (0);
seq__4440_4602 = G__4623;
chunk__4441_4603 = G__4624;
count__4442_4604 = G__4625;
i__4443_4605 = G__4626;
continue;
}
} else {
}
}
break;
}


var G__4627 = seq__4395_4595;
var G__4628 = chunk__4396_4596;
var G__4629 = count__4397_4597;
var G__4630 = (i__4398_4598 + (1));
seq__4395_4595 = G__4627;
chunk__4396_4596 = G__4628;
count__4397_4597 = G__4629;
i__4398_4598 = G__4630;
continue;
} else {
var temp__5804__auto___4631__$1 = cljs.core.seq.call(null,seq__4395_4595);
if(temp__5804__auto___4631__$1){
var seq__4395_4632__$1 = temp__5804__auto___4631__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4395_4632__$1)){
var c__5525__auto___4633 = cljs.core.chunk_first.call(null,seq__4395_4632__$1);
var G__4634 = cljs.core.chunk_rest.call(null,seq__4395_4632__$1);
var G__4635 = c__5525__auto___4633;
var G__4636 = cljs.core.count.call(null,c__5525__auto___4633);
var G__4637 = (0);
seq__4395_4595 = G__4634;
chunk__4396_4596 = G__4635;
count__4397_4597 = G__4636;
i__4398_4598 = G__4637;
continue;
} else {
var vec__4456_4638 = cljs.core.first.call(null,seq__4395_4632__$1);
var line_4639 = cljs.core.nth.call(null,vec__4456_4638,(0),null);
var cols_4640 = cljs.core.nth.call(null,vec__4456_4638,(1),null);
var seq__4459_4641 = cljs.core.seq.call(null,cols_4640);
var chunk__4460_4642 = null;
var count__4461_4643 = (0);
var i__4462_4644 = (0);
while(true){
if((i__4462_4644 < count__4461_4643)){
var vec__4469_4645 = cljs.core._nth.call(null,chunk__4460_4642,i__4462_4644);
var col_4646 = cljs.core.nth.call(null,vec__4469_4645,(0),null);
var infos_4647 = cljs.core.nth.call(null,vec__4469_4645,(1),null);
encode_cols.call(null,infos_4647,source_idx_4591,line_4639,col_4646);


var G__4648 = seq__4459_4641;
var G__4649 = chunk__4460_4642;
var G__4650 = count__4461_4643;
var G__4651 = (i__4462_4644 + (1));
seq__4459_4641 = G__4648;
chunk__4460_4642 = G__4649;
count__4461_4643 = G__4650;
i__4462_4644 = G__4651;
continue;
} else {
var temp__5804__auto___4652__$2 = cljs.core.seq.call(null,seq__4459_4641);
if(temp__5804__auto___4652__$2){
var seq__4459_4653__$1 = temp__5804__auto___4652__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4459_4653__$1)){
var c__5525__auto___4654 = cljs.core.chunk_first.call(null,seq__4459_4653__$1);
var G__4655 = cljs.core.chunk_rest.call(null,seq__4459_4653__$1);
var G__4656 = c__5525__auto___4654;
var G__4657 = cljs.core.count.call(null,c__5525__auto___4654);
var G__4658 = (0);
seq__4459_4641 = G__4655;
chunk__4460_4642 = G__4656;
count__4461_4643 = G__4657;
i__4462_4644 = G__4658;
continue;
} else {
var vec__4472_4659 = cljs.core.first.call(null,seq__4459_4653__$1);
var col_4660 = cljs.core.nth.call(null,vec__4472_4659,(0),null);
var infos_4661 = cljs.core.nth.call(null,vec__4472_4659,(1),null);
encode_cols.call(null,infos_4661,source_idx_4591,line_4639,col_4660);


var G__4662 = cljs.core.next.call(null,seq__4459_4653__$1);
var G__4663 = null;
var G__4664 = (0);
var G__4665 = (0);
seq__4459_4641 = G__4662;
chunk__4460_4642 = G__4663;
count__4461_4643 = G__4664;
i__4462_4644 = G__4665;
continue;
}
} else {
}
}
break;
}


var G__4666 = cljs.core.next.call(null,seq__4395_4632__$1);
var G__4667 = null;
var G__4668 = (0);
var G__4669 = (0);
seq__4395_4595 = G__4666;
chunk__4396_4596 = G__4667;
count__4397_4597 = G__4668;
i__4398_4598 = G__4669;
continue;
}
} else {
}
}
break;
}


var G__4670 = cljs.core.next.call(null,seq__4127_4584__$1);
var G__4671 = null;
var G__4672 = (0);
var G__4673 = (0);
seq__4127_4495 = G__4670;
chunk__4128_4496 = G__4671;
count__4129_4497 = G__4672;
i__4130_4498 = G__4673;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__4475 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__4120_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__4120_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__4121_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__4121_SHARP_,/\//));
}));
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,(function (p1__4122_SHARP_){
return clojure.string.join.call(null,",",p1__4122_SHARP_);
}),cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__4476 = G__4475;
cljs.source_map.goog$module$goog$object.set.call(null,G__4476,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__4476;
} else {
return G__4475;
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
var vec__4674 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__4674,(0),null);
var col_map = cljs.core.nth.call(null,vec__4674,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__4677 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__4677,(0),null);
var infos = cljs.core.nth.call(null,vec__4677,(1),null);
var G__4682 = cljs.core.next.call(null,col_map_seq);
var G__4683 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__4677,col,infos,vec__4674,line,col_map){
return (function (v,p__4680){
var map__4681 = p__4680;
var map__4681__$1 = cljs.core.__destructure_map.call(null,map__4681);
var gline = cljs.core.get.call(null,map__4681__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__4681__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__4677,col,infos,vec__4674,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__4682;
new_cols = G__4683;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__4684 = cljs.core.next.call(null,line_map_seq);
var G__4685 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__4684;
new_lines = G__4685;
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
var seq__4686_4894 = cljs.core.seq.call(null,reverse_map);
var chunk__4687_4895 = null;
var count__4688_4896 = (0);
var i__4689_4897 = (0);
while(true){
if((i__4689_4897 < count__4688_4896)){
var vec__4792_4898 = cljs.core._nth.call(null,chunk__4687_4895,i__4689_4897);
var line_4899 = cljs.core.nth.call(null,vec__4792_4898,(0),null);
var columns_4900 = cljs.core.nth.call(null,vec__4792_4898,(1),null);
var seq__4795_4901 = cljs.core.seq.call(null,columns_4900);
var chunk__4796_4902 = null;
var count__4797_4903 = (0);
var i__4798_4904 = (0);
while(true){
if((i__4798_4904 < count__4797_4903)){
var vec__4821_4905 = cljs.core._nth.call(null,chunk__4796_4902,i__4798_4904);
var column_4906 = cljs.core.nth.call(null,vec__4821_4905,(0),null);
var column_info_4907 = cljs.core.nth.call(null,vec__4821_4905,(1),null);
var seq__4824_4908 = cljs.core.seq.call(null,column_info_4907);
var chunk__4825_4909 = null;
var count__4826_4910 = (0);
var i__4827_4911 = (0);
while(true){
if((i__4827_4911 < count__4826_4910)){
var map__4830_4912 = cljs.core._nth.call(null,chunk__4825_4909,i__4827_4911);
var map__4830_4913__$1 = cljs.core.__destructure_map.call(null,map__4830_4912);
var gline_4914 = cljs.core.get.call(null,map__4830_4913__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_4915 = cljs.core.get.call(null,map__4830_4913__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_4916 = cljs.core.get.call(null,map__4830_4913__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4914], null),cljs.core.fnil.call(null,((function (seq__4824_4908,chunk__4825_4909,count__4826_4910,i__4827_4911,seq__4795_4901,chunk__4796_4902,count__4797_4903,i__4798_4904,seq__4686_4894,chunk__4687_4895,count__4688_4896,i__4689_4897,map__4830_4912,map__4830_4913__$1,gline_4914,gcol_4915,name_4916,vec__4821_4905,column_4906,column_info_4907,vec__4792_4898,line_4899,columns_4900,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_4915], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_4899,new cljs.core.Keyword(null,"col","col",-1959363084),column_4906,new cljs.core.Keyword(null,"name","name",1843675177),name_4916], null));
});})(seq__4824_4908,chunk__4825_4909,count__4826_4910,i__4827_4911,seq__4795_4901,chunk__4796_4902,count__4797_4903,i__4798_4904,seq__4686_4894,chunk__4687_4895,count__4688_4896,i__4689_4897,map__4830_4912,map__4830_4913__$1,gline_4914,gcol_4915,name_4916,vec__4821_4905,column_4906,column_info_4907,vec__4792_4898,line_4899,columns_4900,inverted))
,cljs.core.sorted_map.call(null)));


var G__4917 = seq__4824_4908;
var G__4918 = chunk__4825_4909;
var G__4919 = count__4826_4910;
var G__4920 = (i__4827_4911 + (1));
seq__4824_4908 = G__4917;
chunk__4825_4909 = G__4918;
count__4826_4910 = G__4919;
i__4827_4911 = G__4920;
continue;
} else {
var temp__5804__auto___4921 = cljs.core.seq.call(null,seq__4824_4908);
if(temp__5804__auto___4921){
var seq__4824_4922__$1 = temp__5804__auto___4921;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4824_4922__$1)){
var c__5525__auto___4923 = cljs.core.chunk_first.call(null,seq__4824_4922__$1);
var G__4924 = cljs.core.chunk_rest.call(null,seq__4824_4922__$1);
var G__4925 = c__5525__auto___4923;
var G__4926 = cljs.core.count.call(null,c__5525__auto___4923);
var G__4927 = (0);
seq__4824_4908 = G__4924;
chunk__4825_4909 = G__4925;
count__4826_4910 = G__4926;
i__4827_4911 = G__4927;
continue;
} else {
var map__4831_4928 = cljs.core.first.call(null,seq__4824_4922__$1);
var map__4831_4929__$1 = cljs.core.__destructure_map.call(null,map__4831_4928);
var gline_4930 = cljs.core.get.call(null,map__4831_4929__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_4931 = cljs.core.get.call(null,map__4831_4929__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_4932 = cljs.core.get.call(null,map__4831_4929__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4930], null),cljs.core.fnil.call(null,((function (seq__4824_4908,chunk__4825_4909,count__4826_4910,i__4827_4911,seq__4795_4901,chunk__4796_4902,count__4797_4903,i__4798_4904,seq__4686_4894,chunk__4687_4895,count__4688_4896,i__4689_4897,map__4831_4928,map__4831_4929__$1,gline_4930,gcol_4931,name_4932,seq__4824_4922__$1,temp__5804__auto___4921,vec__4821_4905,column_4906,column_info_4907,vec__4792_4898,line_4899,columns_4900,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_4931], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_4899,new cljs.core.Keyword(null,"col","col",-1959363084),column_4906,new cljs.core.Keyword(null,"name","name",1843675177),name_4932], null));
});})(seq__4824_4908,chunk__4825_4909,count__4826_4910,i__4827_4911,seq__4795_4901,chunk__4796_4902,count__4797_4903,i__4798_4904,seq__4686_4894,chunk__4687_4895,count__4688_4896,i__4689_4897,map__4831_4928,map__4831_4929__$1,gline_4930,gcol_4931,name_4932,seq__4824_4922__$1,temp__5804__auto___4921,vec__4821_4905,column_4906,column_info_4907,vec__4792_4898,line_4899,columns_4900,inverted))
,cljs.core.sorted_map.call(null)));


var G__4933 = cljs.core.next.call(null,seq__4824_4922__$1);
var G__4934 = null;
var G__4935 = (0);
var G__4936 = (0);
seq__4824_4908 = G__4933;
chunk__4825_4909 = G__4934;
count__4826_4910 = G__4935;
i__4827_4911 = G__4936;
continue;
}
} else {
}
}
break;
}


var G__4937 = seq__4795_4901;
var G__4938 = chunk__4796_4902;
var G__4939 = count__4797_4903;
var G__4940 = (i__4798_4904 + (1));
seq__4795_4901 = G__4937;
chunk__4796_4902 = G__4938;
count__4797_4903 = G__4939;
i__4798_4904 = G__4940;
continue;
} else {
var temp__5804__auto___4941 = cljs.core.seq.call(null,seq__4795_4901);
if(temp__5804__auto___4941){
var seq__4795_4942__$1 = temp__5804__auto___4941;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4795_4942__$1)){
var c__5525__auto___4943 = cljs.core.chunk_first.call(null,seq__4795_4942__$1);
var G__4944 = cljs.core.chunk_rest.call(null,seq__4795_4942__$1);
var G__4945 = c__5525__auto___4943;
var G__4946 = cljs.core.count.call(null,c__5525__auto___4943);
var G__4947 = (0);
seq__4795_4901 = G__4944;
chunk__4796_4902 = G__4945;
count__4797_4903 = G__4946;
i__4798_4904 = G__4947;
continue;
} else {
var vec__4832_4948 = cljs.core.first.call(null,seq__4795_4942__$1);
var column_4949 = cljs.core.nth.call(null,vec__4832_4948,(0),null);
var column_info_4950 = cljs.core.nth.call(null,vec__4832_4948,(1),null);
var seq__4835_4951 = cljs.core.seq.call(null,column_info_4950);
var chunk__4836_4952 = null;
var count__4837_4953 = (0);
var i__4838_4954 = (0);
while(true){
if((i__4838_4954 < count__4837_4953)){
var map__4841_4955 = cljs.core._nth.call(null,chunk__4836_4952,i__4838_4954);
var map__4841_4956__$1 = cljs.core.__destructure_map.call(null,map__4841_4955);
var gline_4957 = cljs.core.get.call(null,map__4841_4956__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_4958 = cljs.core.get.call(null,map__4841_4956__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_4959 = cljs.core.get.call(null,map__4841_4956__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4957], null),cljs.core.fnil.call(null,((function (seq__4835_4951,chunk__4836_4952,count__4837_4953,i__4838_4954,seq__4795_4901,chunk__4796_4902,count__4797_4903,i__4798_4904,seq__4686_4894,chunk__4687_4895,count__4688_4896,i__4689_4897,map__4841_4955,map__4841_4956__$1,gline_4957,gcol_4958,name_4959,vec__4832_4948,column_4949,column_info_4950,seq__4795_4942__$1,temp__5804__auto___4941,vec__4792_4898,line_4899,columns_4900,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_4958], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_4899,new cljs.core.Keyword(null,"col","col",-1959363084),column_4949,new cljs.core.Keyword(null,"name","name",1843675177),name_4959], null));
});})(seq__4835_4951,chunk__4836_4952,count__4837_4953,i__4838_4954,seq__4795_4901,chunk__4796_4902,count__4797_4903,i__4798_4904,seq__4686_4894,chunk__4687_4895,count__4688_4896,i__4689_4897,map__4841_4955,map__4841_4956__$1,gline_4957,gcol_4958,name_4959,vec__4832_4948,column_4949,column_info_4950,seq__4795_4942__$1,temp__5804__auto___4941,vec__4792_4898,line_4899,columns_4900,inverted))
,cljs.core.sorted_map.call(null)));


var G__4960 = seq__4835_4951;
var G__4961 = chunk__4836_4952;
var G__4962 = count__4837_4953;
var G__4963 = (i__4838_4954 + (1));
seq__4835_4951 = G__4960;
chunk__4836_4952 = G__4961;
count__4837_4953 = G__4962;
i__4838_4954 = G__4963;
continue;
} else {
var temp__5804__auto___4964__$1 = cljs.core.seq.call(null,seq__4835_4951);
if(temp__5804__auto___4964__$1){
var seq__4835_4965__$1 = temp__5804__auto___4964__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4835_4965__$1)){
var c__5525__auto___4966 = cljs.core.chunk_first.call(null,seq__4835_4965__$1);
var G__4967 = cljs.core.chunk_rest.call(null,seq__4835_4965__$1);
var G__4968 = c__5525__auto___4966;
var G__4969 = cljs.core.count.call(null,c__5525__auto___4966);
var G__4970 = (0);
seq__4835_4951 = G__4967;
chunk__4836_4952 = G__4968;
count__4837_4953 = G__4969;
i__4838_4954 = G__4970;
continue;
} else {
var map__4842_4971 = cljs.core.first.call(null,seq__4835_4965__$1);
var map__4842_4972__$1 = cljs.core.__destructure_map.call(null,map__4842_4971);
var gline_4973 = cljs.core.get.call(null,map__4842_4972__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_4974 = cljs.core.get.call(null,map__4842_4972__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_4975 = cljs.core.get.call(null,map__4842_4972__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4973], null),cljs.core.fnil.call(null,((function (seq__4835_4951,chunk__4836_4952,count__4837_4953,i__4838_4954,seq__4795_4901,chunk__4796_4902,count__4797_4903,i__4798_4904,seq__4686_4894,chunk__4687_4895,count__4688_4896,i__4689_4897,map__4842_4971,map__4842_4972__$1,gline_4973,gcol_4974,name_4975,seq__4835_4965__$1,temp__5804__auto___4964__$1,vec__4832_4948,column_4949,column_info_4950,seq__4795_4942__$1,temp__5804__auto___4941,vec__4792_4898,line_4899,columns_4900,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_4974], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_4899,new cljs.core.Keyword(null,"col","col",-1959363084),column_4949,new cljs.core.Keyword(null,"name","name",1843675177),name_4975], null));
});})(seq__4835_4951,chunk__4836_4952,count__4837_4953,i__4838_4954,seq__4795_4901,chunk__4796_4902,count__4797_4903,i__4798_4904,seq__4686_4894,chunk__4687_4895,count__4688_4896,i__4689_4897,map__4842_4971,map__4842_4972__$1,gline_4973,gcol_4974,name_4975,seq__4835_4965__$1,temp__5804__auto___4964__$1,vec__4832_4948,column_4949,column_info_4950,seq__4795_4942__$1,temp__5804__auto___4941,vec__4792_4898,line_4899,columns_4900,inverted))
,cljs.core.sorted_map.call(null)));


var G__4976 = cljs.core.next.call(null,seq__4835_4965__$1);
var G__4977 = null;
var G__4978 = (0);
var G__4979 = (0);
seq__4835_4951 = G__4976;
chunk__4836_4952 = G__4977;
count__4837_4953 = G__4978;
i__4838_4954 = G__4979;
continue;
}
} else {
}
}
break;
}


var G__4980 = cljs.core.next.call(null,seq__4795_4942__$1);
var G__4981 = null;
var G__4982 = (0);
var G__4983 = (0);
seq__4795_4901 = G__4980;
chunk__4796_4902 = G__4981;
count__4797_4903 = G__4982;
i__4798_4904 = G__4983;
continue;
}
} else {
}
}
break;
}


var G__4984 = seq__4686_4894;
var G__4985 = chunk__4687_4895;
var G__4986 = count__4688_4896;
var G__4987 = (i__4689_4897 + (1));
seq__4686_4894 = G__4984;
chunk__4687_4895 = G__4985;
count__4688_4896 = G__4986;
i__4689_4897 = G__4987;
continue;
} else {
var temp__5804__auto___4988 = cljs.core.seq.call(null,seq__4686_4894);
if(temp__5804__auto___4988){
var seq__4686_4989__$1 = temp__5804__auto___4988;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4686_4989__$1)){
var c__5525__auto___4990 = cljs.core.chunk_first.call(null,seq__4686_4989__$1);
var G__4991 = cljs.core.chunk_rest.call(null,seq__4686_4989__$1);
var G__4992 = c__5525__auto___4990;
var G__4993 = cljs.core.count.call(null,c__5525__auto___4990);
var G__4994 = (0);
seq__4686_4894 = G__4991;
chunk__4687_4895 = G__4992;
count__4688_4896 = G__4993;
i__4689_4897 = G__4994;
continue;
} else {
var vec__4843_4995 = cljs.core.first.call(null,seq__4686_4989__$1);
var line_4996 = cljs.core.nth.call(null,vec__4843_4995,(0),null);
var columns_4997 = cljs.core.nth.call(null,vec__4843_4995,(1),null);
var seq__4846_4998 = cljs.core.seq.call(null,columns_4997);
var chunk__4847_4999 = null;
var count__4848_5000 = (0);
var i__4849_5001 = (0);
while(true){
if((i__4849_5001 < count__4848_5000)){
var vec__4872_5002 = cljs.core._nth.call(null,chunk__4847_4999,i__4849_5001);
var column_5003 = cljs.core.nth.call(null,vec__4872_5002,(0),null);
var column_info_5004 = cljs.core.nth.call(null,vec__4872_5002,(1),null);
var seq__4875_5005 = cljs.core.seq.call(null,column_info_5004);
var chunk__4876_5006 = null;
var count__4877_5007 = (0);
var i__4878_5008 = (0);
while(true){
if((i__4878_5008 < count__4877_5007)){
var map__4881_5009 = cljs.core._nth.call(null,chunk__4876_5006,i__4878_5008);
var map__4881_5010__$1 = cljs.core.__destructure_map.call(null,map__4881_5009);
var gline_5011 = cljs.core.get.call(null,map__4881_5010__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5012 = cljs.core.get.call(null,map__4881_5010__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5013 = cljs.core.get.call(null,map__4881_5010__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5011], null),cljs.core.fnil.call(null,((function (seq__4875_5005,chunk__4876_5006,count__4877_5007,i__4878_5008,seq__4846_4998,chunk__4847_4999,count__4848_5000,i__4849_5001,seq__4686_4894,chunk__4687_4895,count__4688_4896,i__4689_4897,map__4881_5009,map__4881_5010__$1,gline_5011,gcol_5012,name_5013,vec__4872_5002,column_5003,column_info_5004,vec__4843_4995,line_4996,columns_4997,seq__4686_4989__$1,temp__5804__auto___4988,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5012], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_4996,new cljs.core.Keyword(null,"col","col",-1959363084),column_5003,new cljs.core.Keyword(null,"name","name",1843675177),name_5013], null));
});})(seq__4875_5005,chunk__4876_5006,count__4877_5007,i__4878_5008,seq__4846_4998,chunk__4847_4999,count__4848_5000,i__4849_5001,seq__4686_4894,chunk__4687_4895,count__4688_4896,i__4689_4897,map__4881_5009,map__4881_5010__$1,gline_5011,gcol_5012,name_5013,vec__4872_5002,column_5003,column_info_5004,vec__4843_4995,line_4996,columns_4997,seq__4686_4989__$1,temp__5804__auto___4988,inverted))
,cljs.core.sorted_map.call(null)));


var G__5014 = seq__4875_5005;
var G__5015 = chunk__4876_5006;
var G__5016 = count__4877_5007;
var G__5017 = (i__4878_5008 + (1));
seq__4875_5005 = G__5014;
chunk__4876_5006 = G__5015;
count__4877_5007 = G__5016;
i__4878_5008 = G__5017;
continue;
} else {
var temp__5804__auto___5018__$1 = cljs.core.seq.call(null,seq__4875_5005);
if(temp__5804__auto___5018__$1){
var seq__4875_5019__$1 = temp__5804__auto___5018__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4875_5019__$1)){
var c__5525__auto___5020 = cljs.core.chunk_first.call(null,seq__4875_5019__$1);
var G__5021 = cljs.core.chunk_rest.call(null,seq__4875_5019__$1);
var G__5022 = c__5525__auto___5020;
var G__5023 = cljs.core.count.call(null,c__5525__auto___5020);
var G__5024 = (0);
seq__4875_5005 = G__5021;
chunk__4876_5006 = G__5022;
count__4877_5007 = G__5023;
i__4878_5008 = G__5024;
continue;
} else {
var map__4882_5025 = cljs.core.first.call(null,seq__4875_5019__$1);
var map__4882_5026__$1 = cljs.core.__destructure_map.call(null,map__4882_5025);
var gline_5027 = cljs.core.get.call(null,map__4882_5026__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5028 = cljs.core.get.call(null,map__4882_5026__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5029 = cljs.core.get.call(null,map__4882_5026__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5027], null),cljs.core.fnil.call(null,((function (seq__4875_5005,chunk__4876_5006,count__4877_5007,i__4878_5008,seq__4846_4998,chunk__4847_4999,count__4848_5000,i__4849_5001,seq__4686_4894,chunk__4687_4895,count__4688_4896,i__4689_4897,map__4882_5025,map__4882_5026__$1,gline_5027,gcol_5028,name_5029,seq__4875_5019__$1,temp__5804__auto___5018__$1,vec__4872_5002,column_5003,column_info_5004,vec__4843_4995,line_4996,columns_4997,seq__4686_4989__$1,temp__5804__auto___4988,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5028], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_4996,new cljs.core.Keyword(null,"col","col",-1959363084),column_5003,new cljs.core.Keyword(null,"name","name",1843675177),name_5029], null));
});})(seq__4875_5005,chunk__4876_5006,count__4877_5007,i__4878_5008,seq__4846_4998,chunk__4847_4999,count__4848_5000,i__4849_5001,seq__4686_4894,chunk__4687_4895,count__4688_4896,i__4689_4897,map__4882_5025,map__4882_5026__$1,gline_5027,gcol_5028,name_5029,seq__4875_5019__$1,temp__5804__auto___5018__$1,vec__4872_5002,column_5003,column_info_5004,vec__4843_4995,line_4996,columns_4997,seq__4686_4989__$1,temp__5804__auto___4988,inverted))
,cljs.core.sorted_map.call(null)));


var G__5030 = cljs.core.next.call(null,seq__4875_5019__$1);
var G__5031 = null;
var G__5032 = (0);
var G__5033 = (0);
seq__4875_5005 = G__5030;
chunk__4876_5006 = G__5031;
count__4877_5007 = G__5032;
i__4878_5008 = G__5033;
continue;
}
} else {
}
}
break;
}


var G__5034 = seq__4846_4998;
var G__5035 = chunk__4847_4999;
var G__5036 = count__4848_5000;
var G__5037 = (i__4849_5001 + (1));
seq__4846_4998 = G__5034;
chunk__4847_4999 = G__5035;
count__4848_5000 = G__5036;
i__4849_5001 = G__5037;
continue;
} else {
var temp__5804__auto___5038__$1 = cljs.core.seq.call(null,seq__4846_4998);
if(temp__5804__auto___5038__$1){
var seq__4846_5039__$1 = temp__5804__auto___5038__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4846_5039__$1)){
var c__5525__auto___5040 = cljs.core.chunk_first.call(null,seq__4846_5039__$1);
var G__5041 = cljs.core.chunk_rest.call(null,seq__4846_5039__$1);
var G__5042 = c__5525__auto___5040;
var G__5043 = cljs.core.count.call(null,c__5525__auto___5040);
var G__5044 = (0);
seq__4846_4998 = G__5041;
chunk__4847_4999 = G__5042;
count__4848_5000 = G__5043;
i__4849_5001 = G__5044;
continue;
} else {
var vec__4883_5045 = cljs.core.first.call(null,seq__4846_5039__$1);
var column_5046 = cljs.core.nth.call(null,vec__4883_5045,(0),null);
var column_info_5047 = cljs.core.nth.call(null,vec__4883_5045,(1),null);
var seq__4886_5048 = cljs.core.seq.call(null,column_info_5047);
var chunk__4887_5049 = null;
var count__4888_5050 = (0);
var i__4889_5051 = (0);
while(true){
if((i__4889_5051 < count__4888_5050)){
var map__4892_5052 = cljs.core._nth.call(null,chunk__4887_5049,i__4889_5051);
var map__4892_5053__$1 = cljs.core.__destructure_map.call(null,map__4892_5052);
var gline_5054 = cljs.core.get.call(null,map__4892_5053__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5055 = cljs.core.get.call(null,map__4892_5053__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5056 = cljs.core.get.call(null,map__4892_5053__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5054], null),cljs.core.fnil.call(null,((function (seq__4886_5048,chunk__4887_5049,count__4888_5050,i__4889_5051,seq__4846_4998,chunk__4847_4999,count__4848_5000,i__4849_5001,seq__4686_4894,chunk__4687_4895,count__4688_4896,i__4689_4897,map__4892_5052,map__4892_5053__$1,gline_5054,gcol_5055,name_5056,vec__4883_5045,column_5046,column_info_5047,seq__4846_5039__$1,temp__5804__auto___5038__$1,vec__4843_4995,line_4996,columns_4997,seq__4686_4989__$1,temp__5804__auto___4988,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5055], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_4996,new cljs.core.Keyword(null,"col","col",-1959363084),column_5046,new cljs.core.Keyword(null,"name","name",1843675177),name_5056], null));
});})(seq__4886_5048,chunk__4887_5049,count__4888_5050,i__4889_5051,seq__4846_4998,chunk__4847_4999,count__4848_5000,i__4849_5001,seq__4686_4894,chunk__4687_4895,count__4688_4896,i__4689_4897,map__4892_5052,map__4892_5053__$1,gline_5054,gcol_5055,name_5056,vec__4883_5045,column_5046,column_info_5047,seq__4846_5039__$1,temp__5804__auto___5038__$1,vec__4843_4995,line_4996,columns_4997,seq__4686_4989__$1,temp__5804__auto___4988,inverted))
,cljs.core.sorted_map.call(null)));


var G__5057 = seq__4886_5048;
var G__5058 = chunk__4887_5049;
var G__5059 = count__4888_5050;
var G__5060 = (i__4889_5051 + (1));
seq__4886_5048 = G__5057;
chunk__4887_5049 = G__5058;
count__4888_5050 = G__5059;
i__4889_5051 = G__5060;
continue;
} else {
var temp__5804__auto___5061__$2 = cljs.core.seq.call(null,seq__4886_5048);
if(temp__5804__auto___5061__$2){
var seq__4886_5062__$1 = temp__5804__auto___5061__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4886_5062__$1)){
var c__5525__auto___5063 = cljs.core.chunk_first.call(null,seq__4886_5062__$1);
var G__5064 = cljs.core.chunk_rest.call(null,seq__4886_5062__$1);
var G__5065 = c__5525__auto___5063;
var G__5066 = cljs.core.count.call(null,c__5525__auto___5063);
var G__5067 = (0);
seq__4886_5048 = G__5064;
chunk__4887_5049 = G__5065;
count__4888_5050 = G__5066;
i__4889_5051 = G__5067;
continue;
} else {
var map__4893_5068 = cljs.core.first.call(null,seq__4886_5062__$1);
var map__4893_5069__$1 = cljs.core.__destructure_map.call(null,map__4893_5068);
var gline_5070 = cljs.core.get.call(null,map__4893_5069__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5071 = cljs.core.get.call(null,map__4893_5069__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5072 = cljs.core.get.call(null,map__4893_5069__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5070], null),cljs.core.fnil.call(null,((function (seq__4886_5048,chunk__4887_5049,count__4888_5050,i__4889_5051,seq__4846_4998,chunk__4847_4999,count__4848_5000,i__4849_5001,seq__4686_4894,chunk__4687_4895,count__4688_4896,i__4689_4897,map__4893_5068,map__4893_5069__$1,gline_5070,gcol_5071,name_5072,seq__4886_5062__$1,temp__5804__auto___5061__$2,vec__4883_5045,column_5046,column_info_5047,seq__4846_5039__$1,temp__5804__auto___5038__$1,vec__4843_4995,line_4996,columns_4997,seq__4686_4989__$1,temp__5804__auto___4988,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5071], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_4996,new cljs.core.Keyword(null,"col","col",-1959363084),column_5046,new cljs.core.Keyword(null,"name","name",1843675177),name_5072], null));
});})(seq__4886_5048,chunk__4887_5049,count__4888_5050,i__4889_5051,seq__4846_4998,chunk__4847_4999,count__4848_5000,i__4849_5001,seq__4686_4894,chunk__4687_4895,count__4688_4896,i__4689_4897,map__4893_5068,map__4893_5069__$1,gline_5070,gcol_5071,name_5072,seq__4886_5062__$1,temp__5804__auto___5061__$2,vec__4883_5045,column_5046,column_info_5047,seq__4846_5039__$1,temp__5804__auto___5038__$1,vec__4843_4995,line_4996,columns_4997,seq__4686_4989__$1,temp__5804__auto___4988,inverted))
,cljs.core.sorted_map.call(null)));


var G__5073 = cljs.core.next.call(null,seq__4886_5062__$1);
var G__5074 = null;
var G__5075 = (0);
var G__5076 = (0);
seq__4886_5048 = G__5073;
chunk__4887_5049 = G__5074;
count__4888_5050 = G__5075;
i__4889_5051 = G__5076;
continue;
}
} else {
}
}
break;
}


var G__5077 = cljs.core.next.call(null,seq__4846_5039__$1);
var G__5078 = null;
var G__5079 = (0);
var G__5080 = (0);
seq__4846_4998 = G__5077;
chunk__4847_4999 = G__5078;
count__4848_5000 = G__5079;
i__4849_5001 = G__5080;
continue;
}
} else {
}
}
break;
}


var G__5081 = cljs.core.next.call(null,seq__4686_4989__$1);
var G__5082 = null;
var G__5083 = (0);
var G__5084 = (0);
seq__4686_4894 = G__5081;
chunk__4687_4895 = G__5082;
count__4688_4896 = G__5083;
i__4689_4897 = G__5084;
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
