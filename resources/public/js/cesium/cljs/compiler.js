// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('cljs.analyzer');
goog.require('cljs.analyzer.impl');
goog.require('cljs.env');
goog.require('cljs.source_map');
goog.require('cljs.tools.reader');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-2018","ecmascript-2018",-811131980),new cljs.core.Keyword(null,"ecmascript-2019","ecmascript-2019",-1872209910),new cljs.core.Keyword(null,"ecmascript-2020","ecmascript-2020",1452286525),new cljs.core.Keyword(null,"ecmascript-2021","ecmascript-2021",-724420359),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__5087 = s;
var map__5087__$1 = cljs.core.__destructure_map.call(null,map__5087);
var name = cljs.core.get.call(null,map__5087__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__5087__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__5089 = info;
var map__5090 = G__5089;
var map__5090__$1 = cljs.core.__destructure_map.call(null,map__5090);
var shadow = cljs.core.get.call(null,map__5090__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__5089__$1 = G__5089;
while(true){
var d__$2 = d__$1;
var map__5092 = G__5089__$1;
var map__5092__$1 = cljs.core.__destructure_map.call(null,map__5092);
var shadow__$1 = cljs.core.get.call(null,map__5092__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__5093 = (d__$2 + (1));
var G__5094 = shadow__$1;
d__$1 = G__5093;
G__5089__$1 = G__5094;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__5095){
var map__5096 = p__5095;
var map__5096__$1 = cljs.core.__destructure_map.call(null,map__5096);
var name_var = map__5096__$1;
var name = cljs.core.get.call(null,map__5096__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__5096__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__5097 = info;
var map__5097__$1 = cljs.core.__destructure_map.call(null,map__5097);
var ns = cljs.core.get.call(null,map__5097__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__5097__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.call(null,reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__5099 = arguments.length;
switch (G__5099) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
}));

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.impl.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",(25),(1),(11982),(11982),new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)])).call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
}));

(cljs.compiler.munge.cljs$lang$maxFixedArity = 2);

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__5101 = cp;
switch (G__5101) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",pad,cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__5103_5107 = cljs.core.seq.call(null,s);
var chunk__5104_5108 = null;
var count__5105_5109 = (0);
var i__5106_5110 = (0);
while(true){
if((i__5106_5110 < count__5105_5109)){
var c_5111 = cljs.core._nth.call(null,chunk__5104_5108,i__5106_5110);
sb.append(cljs.compiler.escape_char.call(null,c_5111));


var G__5112 = seq__5103_5107;
var G__5113 = chunk__5104_5108;
var G__5114 = count__5105_5109;
var G__5115 = (i__5106_5110 + (1));
seq__5103_5107 = G__5112;
chunk__5104_5108 = G__5113;
count__5105_5109 = G__5114;
i__5106_5110 = G__5115;
continue;
} else {
var temp__5804__auto___5116 = cljs.core.seq.call(null,seq__5103_5107);
if(temp__5804__auto___5116){
var seq__5103_5117__$1 = temp__5804__auto___5116;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5103_5117__$1)){
var c__5525__auto___5118 = cljs.core.chunk_first.call(null,seq__5103_5117__$1);
var G__5119 = cljs.core.chunk_rest.call(null,seq__5103_5117__$1);
var G__5120 = c__5525__auto___5118;
var G__5121 = cljs.core.count.call(null,c__5525__auto___5118);
var G__5122 = (0);
seq__5103_5107 = G__5119;
chunk__5104_5108 = G__5120;
count__5105_5109 = G__5121;
i__5106_5110 = G__5122;
continue;
} else {
var c_5123 = cljs.core.first.call(null,seq__5103_5117__$1);
sb.append(cljs.compiler.escape_char.call(null,c_5123));


var G__5124 = cljs.core.next.call(null,seq__5103_5117__$1);
var G__5125 = null;
var G__5126 = (0);
var G__5127 = (0);
seq__5103_5107 = G__5124;
chunk__5104_5108 = G__5125;
count__5105_5109 = G__5126;
i__5106_5110 = G__5127;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__5128_5131 = ast;
var map__5128_5132__$1 = cljs.core.__destructure_map.call(null,map__5128_5131);
var env_5133 = cljs.core.get.call(null,map__5128_5132__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_5133))){
var map__5129_5134 = env_5133;
var map__5129_5135__$1 = cljs.core.__destructure_map.call(null,map__5129_5134);
var line_5136 = cljs.core.get.call(null,map__5129_5135__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_5137 = cljs.core.get.call(null,map__5129_5135__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__5130 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__5130,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__5130;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_5136 - (1))], null),cljs.core.fnil.call(null,(function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_5137)?(column_5137 - (1)):(0))], null),cljs.core.fnil.call(null,(function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
}));
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__5146 = arguments.length;
switch (G__5146) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___5153 = arguments.length;
var i__5727__auto___5154 = (0);
while(true){
if((i__5727__auto___5154 < len__5726__auto___5153)){
args_arr__5751__auto__.push((arguments[i__5727__auto___5154]));

var G__5155 = (i__5727__auto___5154 + (1));
i__5727__auto___5154 = G__5155;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((5) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((5)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5752__auto__);

}
});

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_.call(null,a)){
cljs.compiler.emit.call(null,a);
} else {
if(cljs.analyzer.impl.cljs_seq_QMARK_.call(null,a)){
cljs.core.apply.call(null,cljs.compiler.emits,a);
} else {
if(typeof a === 'function'){
a.call(null);
} else {
var s_5156 = (function (){var G__5147 = a;
if((!(typeof a === 'string'))){
return G__5147.toString();
} else {
return G__5147;
}
})();
var temp__5808__auto___5157 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5808__auto___5157 == null)){
} else {
var sm_data_5158 = temp__5808__auto___5157;
cljs.core.swap_BANG_.call(null,sm_data_5158,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__5138_SHARP_){
return (p1__5138_SHARP_ + s_5156.length);
}));
}

cljs.core.print.call(null,s_5156);

}
}
}
}

return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

return cljs.compiler.emits.call(null,b);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler.emits.call(null,c);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler.emits.call(null,d);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler.emits.call(null,e);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__5148 = cljs.core.seq.call(null,xs);
var chunk__5149 = null;
var count__5150 = (0);
var i__5151 = (0);
while(true){
if((i__5151 < count__5150)){
var x = cljs.core._nth.call(null,chunk__5149,i__5151);
cljs.compiler.emits.call(null,x);


var G__5159 = seq__5148;
var G__5160 = chunk__5149;
var G__5161 = count__5150;
var G__5162 = (i__5151 + (1));
seq__5148 = G__5159;
chunk__5149 = G__5160;
count__5150 = G__5161;
i__5151 = G__5162;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5148);
if(temp__5804__auto__){
var seq__5148__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5148__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__5148__$1);
var G__5163 = cljs.core.chunk_rest.call(null,seq__5148__$1);
var G__5164 = c__5525__auto__;
var G__5165 = cljs.core.count.call(null,c__5525__auto__);
var G__5166 = (0);
seq__5148 = G__5163;
chunk__5149 = G__5164;
count__5150 = G__5165;
i__5151 = G__5166;
continue;
} else {
var x = cljs.core.first.call(null,seq__5148__$1);
cljs.compiler.emits.call(null,x);


var G__5167 = cljs.core.next.call(null,seq__5148__$1);
var G__5168 = null;
var G__5169 = (0);
var G__5170 = (0);
seq__5148 = G__5167;
chunk__5149 = G__5168;
count__5150 = G__5169;
i__5151 = G__5170;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq5140){
var G__5141 = cljs.core.first.call(null,seq5140);
var seq5140__$1 = cljs.core.next.call(null,seq5140);
var G__5142 = cljs.core.first.call(null,seq5140__$1);
var seq5140__$2 = cljs.core.next.call(null,seq5140__$1);
var G__5143 = cljs.core.first.call(null,seq5140__$2);
var seq5140__$3 = cljs.core.next.call(null,seq5140__$2);
var G__5144 = cljs.core.first.call(null,seq5140__$3);
var seq5140__$4 = cljs.core.next.call(null,seq5140__$3);
var G__5145 = cljs.core.first.call(null,seq5140__$4);
var seq5140__$5 = cljs.core.next.call(null,seq5140__$4);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5141,G__5142,G__5143,G__5144,G__5145,seq5140__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__5171){
var map__5172 = p__5171;
var map__5172__$1 = cljs.core.__destructure_map.call(null,map__5172);
var m = map__5172__$1;
var gen_line = cljs.core.get.call(null,map__5172__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__5180 = arguments.length;
switch (G__5180) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___5186 = arguments.length;
var i__5727__auto___5187 = (0);
while(true){
if((i__5727__auto___5187 < len__5726__auto___5186)){
args_arr__5751__auto__.push((arguments[i__5727__auto___5187]));

var G__5188 = (i__5727__auto___5187 + (1));
i__5727__auto___5187 = G__5188;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((5) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((5)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5752__auto__);

}
});

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.call(null,a);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__5181_5189 = cljs.core.seq.call(null,xs);
var chunk__5182_5190 = null;
var count__5183_5191 = (0);
var i__5184_5192 = (0);
while(true){
if((i__5184_5192 < count__5183_5191)){
var x_5193 = cljs.core._nth.call(null,chunk__5182_5190,i__5184_5192);
cljs.compiler.emits.call(null,x_5193);


var G__5194 = seq__5181_5189;
var G__5195 = chunk__5182_5190;
var G__5196 = count__5183_5191;
var G__5197 = (i__5184_5192 + (1));
seq__5181_5189 = G__5194;
chunk__5182_5190 = G__5195;
count__5183_5191 = G__5196;
i__5184_5192 = G__5197;
continue;
} else {
var temp__5804__auto___5198 = cljs.core.seq.call(null,seq__5181_5189);
if(temp__5804__auto___5198){
var seq__5181_5199__$1 = temp__5804__auto___5198;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5181_5199__$1)){
var c__5525__auto___5200 = cljs.core.chunk_first.call(null,seq__5181_5199__$1);
var G__5201 = cljs.core.chunk_rest.call(null,seq__5181_5199__$1);
var G__5202 = c__5525__auto___5200;
var G__5203 = cljs.core.count.call(null,c__5525__auto___5200);
var G__5204 = (0);
seq__5181_5189 = G__5201;
chunk__5182_5190 = G__5202;
count__5183_5191 = G__5203;
i__5184_5192 = G__5204;
continue;
} else {
var x_5205 = cljs.core.first.call(null,seq__5181_5199__$1);
cljs.compiler.emits.call(null,x_5205);


var G__5206 = cljs.core.next.call(null,seq__5181_5199__$1);
var G__5207 = null;
var G__5208 = (0);
var G__5209 = (0);
seq__5181_5189 = G__5206;
chunk__5182_5190 = G__5207;
count__5183_5191 = G__5208;
i__5184_5192 = G__5209;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln.call(null);
}));

/** @this {Function} */
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq5174){
var G__5175 = cljs.core.first.call(null,seq5174);
var seq5174__$1 = cljs.core.next.call(null,seq5174);
var G__5176 = cljs.core.first.call(null,seq5174__$1);
var seq5174__$2 = cljs.core.next.call(null,seq5174__$1);
var G__5177 = cljs.core.first.call(null,seq5174__$2);
var seq5174__$3 = cljs.core.next.call(null,seq5174__$2);
var G__5178 = cljs.core.first.call(null,seq5174__$3);
var seq5174__$4 = cljs.core.next.call(null,seq5174__$3);
var G__5179 = cljs.core.first.call(null,seq5174__$4);
var seq5174__$5 = cljs.core.next.call(null,seq5174__$4);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5175,G__5176,G__5177,G__5178,G__5179,seq5174__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__5210_5214 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__5211_5215 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__5212_5216 = true;
var _STAR_print_fn_STAR__temp_val__5213_5217 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__5212_5216);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__5213_5217);

try{cljs.compiler.emit.call(null,expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__5211_5215);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__5210_5214);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.impl.cljs_seq_QMARK_.call(null,x)){
return cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.core.record_QMARK_.call(null,x)){
var vec__5218 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__5218,(0),null);
var name = cljs.core.nth.call(null,vec__5218,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,(function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
}));
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_.call(null,x)){
return cljs.compiler.emit_map.call(null,cljs.core.keys.call(null,x),cljs.core.vals.call(null,x),cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
if(cljs.analyzer.impl.cljs_vector_QMARK_.call(null,x)){
return cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.analyzer.impl.cljs_set_QMARK_.call(null,x)){
return cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
return cljs.compiler.emit_constant_STAR_.call(null,x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta.call(null,cljs.core.meta.call(null,v));
if((!((cljs.core.seq.call(null,m) == null)))){
return cljs.compiler.emit_with_meta.call(null,(function (){
return cljs.compiler.emit_constant_no_meta.call(null,v);
}),(function (){
return cljs.compiler.emit_constant_no_meta.call(null,m);
}));
} else {
return cljs.compiler.emit_constant_no_meta.call(null,v);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.call(null,cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.call(null,"NaN");
} else {
if(cljs.core.not.call(null,isFinite(x))){
return cljs.compiler.emits.call(null,(((x > (0)))?"Infinity":"-Infinity"));
} else {
if((((x === (0))) && ((((1) / x) < (0))))){
return cljs.compiler.emits.call(null,"(-0)");
} else {
return cljs.compiler.emits.call(null,"(",x,")");

}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__5221 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__5221,(0),null);
var flags = cljs.core.nth.call(null,vec__5221,(1),null);
var pattern = cljs.core.nth.call(null,vec__5221,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Keyword,(function (x){
var temp__5802__auto__ = (function (){var and__5000__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__5000__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Symbol,(function (x){
var temp__5802__auto__ = (function (){var and__5000__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__5000__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (i,m){
if(cljs.core.even_QMARK_.call(null,i)){
return cljs.compiler.emit_constant.call(null,m);
} else {
return cljs.compiler.emits.call(null,m);
}
}),cljs.compiler.comma_sep.call(null,cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.compiler.emit_inst = (function cljs$compiler$emit_inst(inst_ms){
return cljs.compiler.emits.call(null,"new Date(",inst_ms,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Date,(function (date){
return cljs.compiler.emit_inst.call(null,date.getTime());
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_.call(null,items)){
return cljs.compiler.emit_js_object.call(null,items,(function (p1__5224_SHARP_){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__5224_SHARP_);
});
}));
} else {
return cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__5226){
var map__5227 = p__5226;
var map__5227__$1 = cljs.core.__destructure_map.call(null,map__5227);
var ast = map__5227__$1;
var info = cljs.core.get.call(null,map__5227__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__5227__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__5227__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5802__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5802__auto__)){
var const_expr = temp__5802__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__5228 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__5228__$1 = cljs.core.__destructure_map.call(null,map__5228);
var cenv = map__5228__$1;
var options = cljs.core.get.call(null,map__5228__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__5002__auto__ = js_module_name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__5229 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__5000__auto__;
}
})())){
return clojure.set.difference.call(null,G__5229,cljs.analyzer.es5_allowed);
} else {
return G__5229;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__5002__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__5230 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__5230,reserved);
} else {
return G__5230;
}
})();
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__5231_5232 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__5231_5233__$1 = (((G__5231_5232 instanceof cljs.core.Keyword))?G__5231_5232.fqn:null);
switch (G__5231_5233__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__5000__auto__;
}
})())){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.call(null,info__$2);
}

break;
default:
cljs.compiler.emits.call(null,info__$2);

}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__5235){
var map__5236 = p__5235;
var map__5236__$1 = cljs.core.__destructure_map.call(null,map__5236);
var arg = map__5236__$1;
var env = cljs.core.get.call(null,map__5236__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__5236__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__5236__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__5236__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__5237 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__5237__$1 = cljs.core.__destructure_map.call(null,map__5237);
var name = cljs.core.get.call(null,map__5237__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__5238){
var map__5239 = p__5238;
var map__5239__$1 = cljs.core.__destructure_map.call(null,map__5239);
var expr = cljs.core.get.call(null,map__5239__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__5239__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__5239__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,(function (p1__5240_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__5240_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count.call(null,keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count.call(null,keys) === (0))){
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(distinct_keys_QMARK_.call(null,keys))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",comma_sep.call(null,keys),"],[",comma_sep.call(null,vals),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__5241){
var map__5242 = p__5241;
var map__5242__$1 = cljs.core.__destructure_map.call(null,map__5242);
var env = cljs.core.get.call(null,map__5242__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__5242__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__5242__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.call(null,"cljs.core.list(",comma_sep.call(null,items),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count.call(null,items);
if((cnt < (32))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",comma_sep.call(null,items),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",comma_sep.call(null,items),"], true)");
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__5243){
var map__5244 = p__5243;
var map__5244__$1 = cljs.core.__destructure_map.call(null,map__5244);
var items = cljs.core.get.call(null,map__5244__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__5244__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,(function (p1__5245_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__5245_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count.call(null,items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(distinct_constants_QMARK_.call(null,items))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",comma_sep.call(null,items),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__5246){
var map__5247 = p__5246;
var map__5247__$1 = cljs.core.__destructure_map.call(null,map__5247);
var items = cljs.core.get.call(null,map__5247__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__5247__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5804__auto___5270 = cljs.core.seq.call(null,items);
if(temp__5804__auto___5270){
var items_5271__$1 = temp__5804__auto___5270;
var vec__5248_5272 = items_5271__$1;
var seq__5249_5273 = cljs.core.seq.call(null,vec__5248_5272);
var first__5250_5274 = cljs.core.first.call(null,seq__5249_5273);
var seq__5249_5275__$1 = cljs.core.next.call(null,seq__5249_5273);
var vec__5251_5276 = first__5250_5274;
var k_5277 = cljs.core.nth.call(null,vec__5251_5276,(0),null);
var v_5278 = cljs.core.nth.call(null,vec__5251_5276,(1),null);
var r_5279 = seq__5249_5275__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_5277),"\": ",emit_js_object_val.call(null,v_5278));

var seq__5254_5280 = cljs.core.seq.call(null,r_5279);
var chunk__5255_5281 = null;
var count__5256_5282 = (0);
var i__5257_5283 = (0);
while(true){
if((i__5257_5283 < count__5256_5282)){
var vec__5264_5284 = cljs.core._nth.call(null,chunk__5255_5281,i__5257_5283);
var k_5285__$1 = cljs.core.nth.call(null,vec__5264_5284,(0),null);
var v_5286__$1 = cljs.core.nth.call(null,vec__5264_5284,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_5285__$1),"\": ",emit_js_object_val.call(null,v_5286__$1));


var G__5287 = seq__5254_5280;
var G__5288 = chunk__5255_5281;
var G__5289 = count__5256_5282;
var G__5290 = (i__5257_5283 + (1));
seq__5254_5280 = G__5287;
chunk__5255_5281 = G__5288;
count__5256_5282 = G__5289;
i__5257_5283 = G__5290;
continue;
} else {
var temp__5804__auto___5291__$1 = cljs.core.seq.call(null,seq__5254_5280);
if(temp__5804__auto___5291__$1){
var seq__5254_5292__$1 = temp__5804__auto___5291__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5254_5292__$1)){
var c__5525__auto___5293 = cljs.core.chunk_first.call(null,seq__5254_5292__$1);
var G__5294 = cljs.core.chunk_rest.call(null,seq__5254_5292__$1);
var G__5295 = c__5525__auto___5293;
var G__5296 = cljs.core.count.call(null,c__5525__auto___5293);
var G__5297 = (0);
seq__5254_5280 = G__5294;
chunk__5255_5281 = G__5295;
count__5256_5282 = G__5296;
i__5257_5283 = G__5297;
continue;
} else {
var vec__5267_5298 = cljs.core.first.call(null,seq__5254_5292__$1);
var k_5299__$1 = cljs.core.nth.call(null,vec__5267_5298,(0),null);
var v_5300__$1 = cljs.core.nth.call(null,vec__5267_5298,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_5299__$1),"\": ",emit_js_object_val.call(null,v_5300__$1));


var G__5301 = cljs.core.next.call(null,seq__5254_5292__$1);
var G__5302 = null;
var G__5303 = (0);
var G__5304 = (0);
seq__5254_5280 = G__5301;
chunk__5255_5281 = G__5302;
count__5256_5282 = G__5303;
i__5257_5283 = G__5304;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.call(null,"[",comma_sep.call(null,items),"]");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__5305){
var map__5306 = p__5305;
var map__5306__$1 = cljs.core.__destructure_map.call(null,map__5306);
var keys = cljs.core.get.call(null,map__5306__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__5306__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__5306__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__5307){
var map__5308 = p__5307;
var map__5308__$1 = cljs.core.__destructure_map.call(null,map__5308);
var items = cljs.core.get.call(null,map__5308__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__5308__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__5309){
var map__5310 = p__5309;
var map__5310__$1 = cljs.core.__destructure_map.call(null,map__5310);
var expr = cljs.core.get.call(null,map__5310__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__5311){
var map__5312 = p__5311;
var map__5312__$1 = cljs.core.__destructure_map.call(null,map__5312);
var form = cljs.core.get.call(null,map__5312__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__5312__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__5313 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__5313__$1 = cljs.core.__destructure_map.call(null,map__5313);
var op = cljs.core.get.call(null,map__5313__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__5313__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__5313__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__5002__auto__ = (function (){var and__5000__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__5000__auto__){
var and__5000__auto____$1 = form;
if(cljs.core.truth_(and__5000__auto____$1)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = (!((const_expr == null)));
if(and__5000__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__5000__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__5314 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__5314__$1 = cljs.core.__destructure_map.call(null,map__5314);
var op = cljs.core.get.call(null,map__5314__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__5314__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__5314__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__5002__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__5002__auto__){
return or__5002__auto__;
} else {
var and__5000__auto__ = (!((const_expr == null)));
if(and__5000__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__5000__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__5002__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__5315){
var map__5316 = p__5315;
var map__5316__$1 = cljs.core.__destructure_map.call(null,map__5316);
var test = cljs.core.get.call(null,map__5316__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__5316__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__5316__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__5316__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__5316__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__5002__auto__ = unchecked;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__5317){
var map__5318 = p__5317;
var map__5318__$1 = cljs.core.__destructure_map.call(null,map__5318);
var v = cljs.core.get.call(null,map__5318__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__5318__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__5318__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__5318__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__5319_5347 = cljs.core.seq.call(null,nodes);
var chunk__5320_5348 = null;
var count__5321_5349 = (0);
var i__5322_5350 = (0);
while(true){
if((i__5322_5350 < count__5321_5349)){
var map__5335_5351 = cljs.core._nth.call(null,chunk__5320_5348,i__5322_5350);
var map__5335_5352__$1 = cljs.core.__destructure_map.call(null,map__5335_5351);
var ts_5353 = cljs.core.get.call(null,map__5335_5352__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__5336_5354 = cljs.core.get.call(null,map__5335_5352__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__5336_5355__$1 = cljs.core.__destructure_map.call(null,map__5336_5354);
var then_5356 = cljs.core.get.call(null,map__5336_5355__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__5337_5357 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_5353));
var chunk__5338_5358 = null;
var count__5339_5359 = (0);
var i__5340_5360 = (0);
while(true){
if((i__5340_5360 < count__5339_5359)){
var test_5361 = cljs.core._nth.call(null,chunk__5338_5358,i__5340_5360);
cljs.compiler.emitln.call(null,"case ",test_5361,":");


var G__5362 = seq__5337_5357;
var G__5363 = chunk__5338_5358;
var G__5364 = count__5339_5359;
var G__5365 = (i__5340_5360 + (1));
seq__5337_5357 = G__5362;
chunk__5338_5358 = G__5363;
count__5339_5359 = G__5364;
i__5340_5360 = G__5365;
continue;
} else {
var temp__5804__auto___5366 = cljs.core.seq.call(null,seq__5337_5357);
if(temp__5804__auto___5366){
var seq__5337_5367__$1 = temp__5804__auto___5366;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5337_5367__$1)){
var c__5525__auto___5368 = cljs.core.chunk_first.call(null,seq__5337_5367__$1);
var G__5369 = cljs.core.chunk_rest.call(null,seq__5337_5367__$1);
var G__5370 = c__5525__auto___5368;
var G__5371 = cljs.core.count.call(null,c__5525__auto___5368);
var G__5372 = (0);
seq__5337_5357 = G__5369;
chunk__5338_5358 = G__5370;
count__5339_5359 = G__5371;
i__5340_5360 = G__5372;
continue;
} else {
var test_5373 = cljs.core.first.call(null,seq__5337_5367__$1);
cljs.compiler.emitln.call(null,"case ",test_5373,":");


var G__5374 = cljs.core.next.call(null,seq__5337_5367__$1);
var G__5375 = null;
var G__5376 = (0);
var G__5377 = (0);
seq__5337_5357 = G__5374;
chunk__5338_5358 = G__5375;
count__5339_5359 = G__5376;
i__5340_5360 = G__5377;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_5356);
} else {
cljs.compiler.emitln.call(null,then_5356);
}

cljs.compiler.emitln.call(null,"break;");


var G__5378 = seq__5319_5347;
var G__5379 = chunk__5320_5348;
var G__5380 = count__5321_5349;
var G__5381 = (i__5322_5350 + (1));
seq__5319_5347 = G__5378;
chunk__5320_5348 = G__5379;
count__5321_5349 = G__5380;
i__5322_5350 = G__5381;
continue;
} else {
var temp__5804__auto___5382 = cljs.core.seq.call(null,seq__5319_5347);
if(temp__5804__auto___5382){
var seq__5319_5383__$1 = temp__5804__auto___5382;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5319_5383__$1)){
var c__5525__auto___5384 = cljs.core.chunk_first.call(null,seq__5319_5383__$1);
var G__5385 = cljs.core.chunk_rest.call(null,seq__5319_5383__$1);
var G__5386 = c__5525__auto___5384;
var G__5387 = cljs.core.count.call(null,c__5525__auto___5384);
var G__5388 = (0);
seq__5319_5347 = G__5385;
chunk__5320_5348 = G__5386;
count__5321_5349 = G__5387;
i__5322_5350 = G__5388;
continue;
} else {
var map__5341_5389 = cljs.core.first.call(null,seq__5319_5383__$1);
var map__5341_5390__$1 = cljs.core.__destructure_map.call(null,map__5341_5389);
var ts_5391 = cljs.core.get.call(null,map__5341_5390__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__5342_5392 = cljs.core.get.call(null,map__5341_5390__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__5342_5393__$1 = cljs.core.__destructure_map.call(null,map__5342_5392);
var then_5394 = cljs.core.get.call(null,map__5342_5393__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__5343_5395 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_5391));
var chunk__5344_5396 = null;
var count__5345_5397 = (0);
var i__5346_5398 = (0);
while(true){
if((i__5346_5398 < count__5345_5397)){
var test_5399 = cljs.core._nth.call(null,chunk__5344_5396,i__5346_5398);
cljs.compiler.emitln.call(null,"case ",test_5399,":");


var G__5400 = seq__5343_5395;
var G__5401 = chunk__5344_5396;
var G__5402 = count__5345_5397;
var G__5403 = (i__5346_5398 + (1));
seq__5343_5395 = G__5400;
chunk__5344_5396 = G__5401;
count__5345_5397 = G__5402;
i__5346_5398 = G__5403;
continue;
} else {
var temp__5804__auto___5404__$1 = cljs.core.seq.call(null,seq__5343_5395);
if(temp__5804__auto___5404__$1){
var seq__5343_5405__$1 = temp__5804__auto___5404__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5343_5405__$1)){
var c__5525__auto___5406 = cljs.core.chunk_first.call(null,seq__5343_5405__$1);
var G__5407 = cljs.core.chunk_rest.call(null,seq__5343_5405__$1);
var G__5408 = c__5525__auto___5406;
var G__5409 = cljs.core.count.call(null,c__5525__auto___5406);
var G__5410 = (0);
seq__5343_5395 = G__5407;
chunk__5344_5396 = G__5408;
count__5345_5397 = G__5409;
i__5346_5398 = G__5410;
continue;
} else {
var test_5411 = cljs.core.first.call(null,seq__5343_5405__$1);
cljs.compiler.emitln.call(null,"case ",test_5411,":");


var G__5412 = cljs.core.next.call(null,seq__5343_5405__$1);
var G__5413 = null;
var G__5414 = (0);
var G__5415 = (0);
seq__5343_5395 = G__5412;
chunk__5344_5396 = G__5413;
count__5345_5397 = G__5414;
i__5346_5398 = G__5415;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_5394);
} else {
cljs.compiler.emitln.call(null,then_5394);
}

cljs.compiler.emitln.call(null,"break;");


var G__5416 = cljs.core.next.call(null,seq__5319_5383__$1);
var G__5417 = null;
var G__5418 = (0);
var G__5419 = (0);
seq__5319_5347 = G__5416;
chunk__5320_5348 = G__5417;
count__5321_5349 = G__5418;
i__5322_5350 = G__5419;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__5420){
var map__5421 = p__5420;
var map__5421__$1 = cljs.core.__destructure_map.call(null,map__5421);
var throw$ = cljs.core.get.call(null,map__5421__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__5421__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(goog.string.startsWith(t,"!")){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(goog.string.startsWith(t,"{")){
return t;
} else {
if(goog.string.startsWith(t,"function")){
var idx = t.lastIndexOf(":");
var vec__5423 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__5423,(0),null);
var rstr = cljs.core.nth.call(null,vec__5423,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,(function (p1__5422_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__5422_SHARP_);
}),clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__5426 = ["function(",clojure.string.join.call(null,",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__5426,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__5426;
}
} else {
if(goog.string.endsWith(t,"=")){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",clojure.string.join.call(null,"|",cljs.core.map.call(null,(function (p1__5427_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__5427_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__5428 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__5429 = cljs.core.seq.call(null,vec__5428);
var first__5430 = cljs.core.first.call(null,seq__5429);
var seq__5429__$1 = cljs.core.next.call(null,seq__5429);
var p = first__5430;
var first__5430__$1 = cljs.core.first.call(null,seq__5429__$1);
var seq__5429__$2 = cljs.core.next.call(null,seq__5429__$1);
var ts = first__5430__$1;
var first__5430__$2 = cljs.core.first.call(null,seq__5429__$2);
var seq__5429__$3 = cljs.core.next.call(null,seq__5429__$2);
var n = first__5430__$2;
var xs = seq__5429__$3;
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__5000__auto__){
var and__5000__auto____$1 = ts;
if(cljs.core.truth_(and__5000__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__5431 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__5432 = cljs.core.seq.call(null,vec__5431);
var first__5433 = cljs.core.first.call(null,seq__5432);
var seq__5432__$1 = cljs.core.next.call(null,seq__5432);
var p = first__5433;
var first__5433__$1 = cljs.core.first.call(null,seq__5432__$1);
var seq__5432__$2 = cljs.core.next.call(null,seq__5432__$1);
var ts = first__5433__$1;
var xs = seq__5432__$2;
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__5000__auto__){
var and__5000__auto____$1 = ts;
if(cljs.core.truth_(and__5000__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__5436 = arguments.length;
switch (G__5436) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
}));

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = (function cljs$compiler$print_comment_lines(e){
var vec__5444 = cljs.core.map.call(null,(function (p1__5434_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__5434_SHARP_);
} else {
return p1__5434_SHARP_;
}
}),clojure.string.split_lines.call(null,e));
var seq__5445 = cljs.core.seq.call(null,vec__5444);
var first__5446 = cljs.core.first.call(null,seq__5445);
var seq__5445__$1 = cljs.core.next.call(null,seq__5445);
var x = first__5446;
var ys = seq__5445__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__5447 = cljs.core.seq.call(null,ys);
var chunk__5448 = null;
var count__5449 = (0);
var i__5450 = (0);
while(true){
if((i__5450 < count__5449)){
var next_line = cljs.core._nth.call(null,chunk__5448,i__5450);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__5456 = seq__5447;
var G__5457 = chunk__5448;
var G__5458 = count__5449;
var G__5459 = (i__5450 + (1));
seq__5447 = G__5456;
chunk__5448 = G__5457;
count__5449 = G__5458;
i__5450 = G__5459;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5447);
if(temp__5804__auto__){
var seq__5447__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5447__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__5447__$1);
var G__5460 = cljs.core.chunk_rest.call(null,seq__5447__$1);
var G__5461 = c__5525__auto__;
var G__5462 = cljs.core.count.call(null,c__5525__auto__);
var G__5463 = (0);
seq__5447 = G__5460;
chunk__5448 = G__5461;
count__5449 = G__5462;
i__5450 = G__5463;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__5447__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__5464 = cljs.core.next.call(null,seq__5447__$1);
var G__5465 = null;
var G__5466 = (0);
var G__5467 = (0);
seq__5447 = G__5464;
chunk__5448 = G__5465;
count__5449 = G__5466;
i__5450 = G__5467;
continue;
}
} else {
return null;
}
}
break;
}
});
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__5451_5468 = cljs.core.seq.call(null,docs__$2);
var chunk__5452_5469 = null;
var count__5453_5470 = (0);
var i__5454_5471 = (0);
while(true){
if((i__5454_5471 < count__5453_5470)){
var e_5472 = cljs.core._nth.call(null,chunk__5452_5469,i__5454_5471);
if(cljs.core.truth_(e_5472)){
print_comment_lines.call(null,e_5472);
} else {
}


var G__5473 = seq__5451_5468;
var G__5474 = chunk__5452_5469;
var G__5475 = count__5453_5470;
var G__5476 = (i__5454_5471 + (1));
seq__5451_5468 = G__5473;
chunk__5452_5469 = G__5474;
count__5453_5470 = G__5475;
i__5454_5471 = G__5476;
continue;
} else {
var temp__5804__auto___5477 = cljs.core.seq.call(null,seq__5451_5468);
if(temp__5804__auto___5477){
var seq__5451_5478__$1 = temp__5804__auto___5477;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5451_5478__$1)){
var c__5525__auto___5479 = cljs.core.chunk_first.call(null,seq__5451_5478__$1);
var G__5480 = cljs.core.chunk_rest.call(null,seq__5451_5478__$1);
var G__5481 = c__5525__auto___5479;
var G__5482 = cljs.core.count.call(null,c__5525__auto___5479);
var G__5483 = (0);
seq__5451_5468 = G__5480;
chunk__5452_5469 = G__5481;
count__5453_5470 = G__5482;
i__5454_5471 = G__5483;
continue;
} else {
var e_5484 = cljs.core.first.call(null,seq__5451_5478__$1);
if(cljs.core.truth_(e_5484)){
print_comment_lines.call(null,e_5484);
} else {
}


var G__5485 = cljs.core.next.call(null,seq__5451_5478__$1);
var G__5486 = null;
var G__5487 = (0);
var G__5488 = (0);
seq__5451_5468 = G__5485;
chunk__5452_5469 = G__5486;
count__5453_5470 = G__5487;
i__5454_5471 = G__5488;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
}));

(cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3);

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (((x === true) || (((x === false) || (typeof x === 'number'))))));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__5000__auto__ = cljs.core.some.call(null,(function (p1__5490_SHARP_){
return goog.string.startsWith(p1__5490_SHARP_,"@define");
}),jsdoc);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = opts;
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__5000__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_.call(null,define)){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__5491){
var map__5492 = p__5491;
var map__5492__$1 = cljs.core.__destructure_map.call(null,map__5492);
var doc = cljs.core.get.call(null,map__5492__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__5492__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__5492__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.call(null,map__5492__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.call(null,map__5492__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__5492__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__5492__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__5492__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__5492__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__5492__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__5002__auto__ = init;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,(cljs.core.truth_(goog_define)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["@define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog_define),"}"].join('')], null):null),jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__5802__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5802__auto__)){
var define = temp__5802__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__5000__auto__)){
return test;
} else {
return and__5000__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__5493){
var map__5494 = p__5493;
var map__5494__$1 = cljs.core.__destructure_map.call(null,map__5494);
var name = cljs.core.get.call(null,map__5494__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__5494__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__5494__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__5495_5519 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__5496_5520 = null;
var count__5497_5521 = (0);
var i__5498_5522 = (0);
while(true){
if((i__5498_5522 < count__5497_5521)){
var vec__5505_5523 = cljs.core._nth.call(null,chunk__5496_5520,i__5498_5522);
var i_5524 = cljs.core.nth.call(null,vec__5505_5523,(0),null);
var param_5525 = cljs.core.nth.call(null,vec__5505_5523,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_5525);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__5526 = seq__5495_5519;
var G__5527 = chunk__5496_5520;
var G__5528 = count__5497_5521;
var G__5529 = (i__5498_5522 + (1));
seq__5495_5519 = G__5526;
chunk__5496_5520 = G__5527;
count__5497_5521 = G__5528;
i__5498_5522 = G__5529;
continue;
} else {
var temp__5804__auto___5530 = cljs.core.seq.call(null,seq__5495_5519);
if(temp__5804__auto___5530){
var seq__5495_5531__$1 = temp__5804__auto___5530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5495_5531__$1)){
var c__5525__auto___5532 = cljs.core.chunk_first.call(null,seq__5495_5531__$1);
var G__5533 = cljs.core.chunk_rest.call(null,seq__5495_5531__$1);
var G__5534 = c__5525__auto___5532;
var G__5535 = cljs.core.count.call(null,c__5525__auto___5532);
var G__5536 = (0);
seq__5495_5519 = G__5533;
chunk__5496_5520 = G__5534;
count__5497_5521 = G__5535;
i__5498_5522 = G__5536;
continue;
} else {
var vec__5508_5537 = cljs.core.first.call(null,seq__5495_5531__$1);
var i_5538 = cljs.core.nth.call(null,vec__5508_5537,(0),null);
var param_5539 = cljs.core.nth.call(null,vec__5508_5537,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_5539);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__5540 = cljs.core.next.call(null,seq__5495_5531__$1);
var G__5541 = null;
var G__5542 = (0);
var G__5543 = (0);
seq__5495_5519 = G__5540;
chunk__5496_5520 = G__5541;
count__5497_5521 = G__5542;
i__5498_5522 = G__5543;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__5511_5544 = cljs.core.seq.call(null,params);
var chunk__5512_5545 = null;
var count__5513_5546 = (0);
var i__5514_5547 = (0);
while(true){
if((i__5514_5547 < count__5513_5546)){
var param_5548 = cljs.core._nth.call(null,chunk__5512_5545,i__5514_5547);
cljs.compiler.emit.call(null,param_5548);

if(cljs.core._EQ_.call(null,param_5548,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__5549 = seq__5511_5544;
var G__5550 = chunk__5512_5545;
var G__5551 = count__5513_5546;
var G__5552 = (i__5514_5547 + (1));
seq__5511_5544 = G__5549;
chunk__5512_5545 = G__5550;
count__5513_5546 = G__5551;
i__5514_5547 = G__5552;
continue;
} else {
var temp__5804__auto___5553 = cljs.core.seq.call(null,seq__5511_5544);
if(temp__5804__auto___5553){
var seq__5511_5554__$1 = temp__5804__auto___5553;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5511_5554__$1)){
var c__5525__auto___5555 = cljs.core.chunk_first.call(null,seq__5511_5554__$1);
var G__5556 = cljs.core.chunk_rest.call(null,seq__5511_5554__$1);
var G__5557 = c__5525__auto___5555;
var G__5558 = cljs.core.count.call(null,c__5525__auto___5555);
var G__5559 = (0);
seq__5511_5544 = G__5556;
chunk__5512_5545 = G__5557;
count__5513_5546 = G__5558;
i__5514_5547 = G__5559;
continue;
} else {
var param_5560 = cljs.core.first.call(null,seq__5511_5554__$1);
cljs.compiler.emit.call(null,param_5560);

if(cljs.core._EQ_.call(null,param_5560,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__5561 = cljs.core.next.call(null,seq__5511_5554__$1);
var G__5562 = null;
var G__5563 = (0);
var G__5564 = (0);
seq__5511_5544 = G__5561;
chunk__5512_5545 = G__5562;
count__5513_5546 = G__5563;
i__5514_5547 = G__5564;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__5515_5565 = cljs.core.seq.call(null,params);
var chunk__5516_5566 = null;
var count__5517_5567 = (0);
var i__5518_5568 = (0);
while(true){
if((i__5518_5568 < count__5517_5567)){
var param_5569 = cljs.core._nth.call(null,chunk__5516_5566,i__5518_5568);
cljs.compiler.emit.call(null,param_5569);

if(cljs.core._EQ_.call(null,param_5569,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__5570 = seq__5515_5565;
var G__5571 = chunk__5516_5566;
var G__5572 = count__5517_5567;
var G__5573 = (i__5518_5568 + (1));
seq__5515_5565 = G__5570;
chunk__5516_5566 = G__5571;
count__5517_5567 = G__5572;
i__5518_5568 = G__5573;
continue;
} else {
var temp__5804__auto___5574 = cljs.core.seq.call(null,seq__5515_5565);
if(temp__5804__auto___5574){
var seq__5515_5575__$1 = temp__5804__auto___5574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5515_5575__$1)){
var c__5525__auto___5576 = cljs.core.chunk_first.call(null,seq__5515_5575__$1);
var G__5577 = cljs.core.chunk_rest.call(null,seq__5515_5575__$1);
var G__5578 = c__5525__auto___5576;
var G__5579 = cljs.core.count.call(null,c__5525__auto___5576);
var G__5580 = (0);
seq__5515_5565 = G__5577;
chunk__5516_5566 = G__5578;
count__5517_5567 = G__5579;
i__5518_5568 = G__5580;
continue;
} else {
var param_5581 = cljs.core.first.call(null,seq__5515_5575__$1);
cljs.compiler.emit.call(null,param_5581);

if(cljs.core._EQ_.call(null,param_5581,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__5582 = cljs.core.next.call(null,seq__5515_5575__$1);
var G__5583 = null;
var G__5584 = (0);
var G__5585 = (0);
seq__5515_5565 = G__5582;
chunk__5516_5566 = G__5583;
count__5517_5567 = G__5584;
i__5518_5568 = G__5585;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__5586 = cljs.core.seq.call(null,params);
var chunk__5587 = null;
var count__5588 = (0);
var i__5589 = (0);
while(true){
if((i__5589 < count__5588)){
var param = cljs.core._nth.call(null,chunk__5587,i__5589);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__5590 = seq__5586;
var G__5591 = chunk__5587;
var G__5592 = count__5588;
var G__5593 = (i__5589 + (1));
seq__5586 = G__5590;
chunk__5587 = G__5591;
count__5588 = G__5592;
i__5589 = G__5593;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5586);
if(temp__5804__auto__){
var seq__5586__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5586__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__5586__$1);
var G__5594 = cljs.core.chunk_rest.call(null,seq__5586__$1);
var G__5595 = c__5525__auto__;
var G__5596 = cljs.core.count.call(null,c__5525__auto__);
var G__5597 = (0);
seq__5586 = G__5594;
chunk__5587 = G__5595;
count__5588 = G__5596;
i__5589 = G__5597;
continue;
} else {
var param = cljs.core.first.call(null,seq__5586__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__5598 = cljs.core.next.call(null,seq__5586__$1);
var G__5599 = null;
var G__5600 = (0);
var G__5601 = (0);
seq__5586 = G__5598;
chunk__5587 = G__5599;
count__5588 = G__5600;
i__5589 = G__5601;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__5602){
var map__5603 = p__5602;
var map__5603__$1 = cljs.core.__destructure_map.call(null,map__5603);
var expr = cljs.core.get.call(null,map__5603__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__5603__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__5603__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__5603__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__5603__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__5603__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__5604){
var map__5605 = p__5604;
var map__5605__$1 = cljs.core.__destructure_map.call(null,map__5605);
var f = map__5605__$1;
var expr = cljs.core.get.call(null,map__5605__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__5605__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__5605__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__5605__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__5605__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__5605__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__5605__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__5605__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_5614__$1 = (function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_5615 = cljs.compiler.munge.call(null,name_5614__$1);
var delegate_name_5616 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_5615),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_5616," = function (");

var seq__5606_5617 = cljs.core.seq.call(null,params);
var chunk__5607_5618 = null;
var count__5608_5619 = (0);
var i__5609_5620 = (0);
while(true){
if((i__5609_5620 < count__5608_5619)){
var param_5621 = cljs.core._nth.call(null,chunk__5607_5618,i__5609_5620);
cljs.compiler.emit.call(null,param_5621);

if(cljs.core._EQ_.call(null,param_5621,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__5622 = seq__5606_5617;
var G__5623 = chunk__5607_5618;
var G__5624 = count__5608_5619;
var G__5625 = (i__5609_5620 + (1));
seq__5606_5617 = G__5622;
chunk__5607_5618 = G__5623;
count__5608_5619 = G__5624;
i__5609_5620 = G__5625;
continue;
} else {
var temp__5804__auto___5626 = cljs.core.seq.call(null,seq__5606_5617);
if(temp__5804__auto___5626){
var seq__5606_5627__$1 = temp__5804__auto___5626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5606_5627__$1)){
var c__5525__auto___5628 = cljs.core.chunk_first.call(null,seq__5606_5627__$1);
var G__5629 = cljs.core.chunk_rest.call(null,seq__5606_5627__$1);
var G__5630 = c__5525__auto___5628;
var G__5631 = cljs.core.count.call(null,c__5525__auto___5628);
var G__5632 = (0);
seq__5606_5617 = G__5629;
chunk__5607_5618 = G__5630;
count__5608_5619 = G__5631;
i__5609_5620 = G__5632;
continue;
} else {
var param_5633 = cljs.core.first.call(null,seq__5606_5627__$1);
cljs.compiler.emit.call(null,param_5633);

if(cljs.core._EQ_.call(null,param_5633,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__5634 = cljs.core.next.call(null,seq__5606_5627__$1);
var G__5635 = null;
var G__5636 = (0);
var G__5637 = (0);
seq__5606_5617 = G__5634;
chunk__5607_5618 = G__5635;
count__5608_5619 = G__5636;
i__5609_5620 = G__5637;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_5615," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_5638 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_5638,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_5616,".call(this,");

var seq__5610_5639 = cljs.core.seq.call(null,params);
var chunk__5611_5640 = null;
var count__5612_5641 = (0);
var i__5613_5642 = (0);
while(true){
if((i__5613_5642 < count__5612_5641)){
var param_5643 = cljs.core._nth.call(null,chunk__5611_5640,i__5613_5642);
cljs.compiler.emit.call(null,param_5643);

if(cljs.core._EQ_.call(null,param_5643,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__5644 = seq__5610_5639;
var G__5645 = chunk__5611_5640;
var G__5646 = count__5612_5641;
var G__5647 = (i__5613_5642 + (1));
seq__5610_5639 = G__5644;
chunk__5611_5640 = G__5645;
count__5612_5641 = G__5646;
i__5613_5642 = G__5647;
continue;
} else {
var temp__5804__auto___5648 = cljs.core.seq.call(null,seq__5610_5639);
if(temp__5804__auto___5648){
var seq__5610_5649__$1 = temp__5804__auto___5648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5610_5649__$1)){
var c__5525__auto___5650 = cljs.core.chunk_first.call(null,seq__5610_5649__$1);
var G__5651 = cljs.core.chunk_rest.call(null,seq__5610_5649__$1);
var G__5652 = c__5525__auto___5650;
var G__5653 = cljs.core.count.call(null,c__5525__auto___5650);
var G__5654 = (0);
seq__5610_5639 = G__5651;
chunk__5611_5640 = G__5652;
count__5612_5641 = G__5653;
i__5613_5642 = G__5654;
continue;
} else {
var param_5655 = cljs.core.first.call(null,seq__5610_5649__$1);
cljs.compiler.emit.call(null,param_5655);

if(cljs.core._EQ_.call(null,param_5655,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__5656 = cljs.core.next.call(null,seq__5610_5649__$1);
var G__5657 = null;
var G__5658 = (0);
var G__5659 = (0);
seq__5610_5639 = G__5656;
chunk__5611_5640 = G__5657;
count__5612_5641 = G__5658;
i__5613_5642 = G__5659;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_5615,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_5615,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_5614__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_5615,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_5616,";");

cljs.compiler.emitln.call(null,"return ",mname_5615,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__5663){
var map__5664 = p__5663;
var map__5664__$1 = cljs.core.__destructure_map.call(null,map__5664);
var variadic = cljs.core.get.call(null,map__5664__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__5664__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__5664__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__5664__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__5664__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__5664__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.call(null,map__5664__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.call(null,map__5664__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,(function (p1__5660_SHARP_){
var and__5000__auto__ = p1__5660_SHARP_;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__5660_SHARP_));
} else {
return and__5000__auto__;
}
}),recur_frames));
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,recur_params,(cljs.core.truth_((function (){var or__5002__auto__ = in_loop;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.seq.call(null,recur_params);
}
})())?cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets):null))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_5716__$1 = (function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_5717 = cljs.compiler.munge.call(null,name_5716__$1);
var maxparams_5718 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_5719 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_5717),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_5720 = cljs.core.sort_by.call(null,(function (p1__5661_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__5661_SHARP_)));
}),cljs.core.seq.call(null,mmap_5719));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_5717," = null;");

var seq__5665_5721 = cljs.core.seq.call(null,ms_5720);
var chunk__5666_5722 = null;
var count__5667_5723 = (0);
var i__5668_5724 = (0);
while(true){
if((i__5668_5724 < count__5667_5723)){
var vec__5675_5725 = cljs.core._nth.call(null,chunk__5666_5722,i__5668_5724);
var n_5726 = cljs.core.nth.call(null,vec__5675_5725,(0),null);
var meth_5727 = cljs.core.nth.call(null,vec__5675_5725,(1),null);
cljs.compiler.emits.call(null,"var ",n_5726," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_5727))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_5727);
} else {
cljs.compiler.emit_fn_method.call(null,meth_5727);
}

cljs.compiler.emitln.call(null,";");


var G__5728 = seq__5665_5721;
var G__5729 = chunk__5666_5722;
var G__5730 = count__5667_5723;
var G__5731 = (i__5668_5724 + (1));
seq__5665_5721 = G__5728;
chunk__5666_5722 = G__5729;
count__5667_5723 = G__5730;
i__5668_5724 = G__5731;
continue;
} else {
var temp__5804__auto___5732 = cljs.core.seq.call(null,seq__5665_5721);
if(temp__5804__auto___5732){
var seq__5665_5733__$1 = temp__5804__auto___5732;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5665_5733__$1)){
var c__5525__auto___5734 = cljs.core.chunk_first.call(null,seq__5665_5733__$1);
var G__5735 = cljs.core.chunk_rest.call(null,seq__5665_5733__$1);
var G__5736 = c__5525__auto___5734;
var G__5737 = cljs.core.count.call(null,c__5525__auto___5734);
var G__5738 = (0);
seq__5665_5721 = G__5735;
chunk__5666_5722 = G__5736;
count__5667_5723 = G__5737;
i__5668_5724 = G__5738;
continue;
} else {
var vec__5678_5739 = cljs.core.first.call(null,seq__5665_5733__$1);
var n_5740 = cljs.core.nth.call(null,vec__5678_5739,(0),null);
var meth_5741 = cljs.core.nth.call(null,vec__5678_5739,(1),null);
cljs.compiler.emits.call(null,"var ",n_5740," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_5741))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_5741);
} else {
cljs.compiler.emit_fn_method.call(null,meth_5741);
}

cljs.compiler.emitln.call(null,";");


var G__5742 = cljs.core.next.call(null,seq__5665_5733__$1);
var G__5743 = null;
var G__5744 = (0);
var G__5745 = (0);
seq__5665_5721 = G__5742;
chunk__5666_5722 = G__5743;
count__5667_5723 = G__5744;
i__5668_5724 = G__5745;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_5717," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_5718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_5718)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_5718));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__5681_5746 = cljs.core.seq.call(null,ms_5720);
var chunk__5682_5747 = null;
var count__5683_5748 = (0);
var i__5684_5749 = (0);
while(true){
if((i__5684_5749 < count__5683_5748)){
var vec__5691_5750 = cljs.core._nth.call(null,chunk__5682_5747,i__5684_5749);
var n_5751 = cljs.core.nth.call(null,vec__5691_5750,(0),null);
var meth_5752 = cljs.core.nth.call(null,vec__5691_5750,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_5752))){
cljs.compiler.emitln.call(null,"default:");

var restarg_5753 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_5753," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_5754 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_5753," = new cljs.core.IndexedSeq(",a_5754,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_5751,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_5718)),(((cljs.core.count.call(null,maxparams_5718) > (1)))?", ":null),restarg_5753,");");
} else {
var pcnt_5755 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_5752));
cljs.compiler.emitln.call(null,"case ",pcnt_5755,":");

cljs.compiler.emitln.call(null,"return ",n_5751,".call(this",(((pcnt_5755 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_5755,maxparams_5718)),null,(1),null)),(2),null))),");");
}


var G__5756 = seq__5681_5746;
var G__5757 = chunk__5682_5747;
var G__5758 = count__5683_5748;
var G__5759 = (i__5684_5749 + (1));
seq__5681_5746 = G__5756;
chunk__5682_5747 = G__5757;
count__5683_5748 = G__5758;
i__5684_5749 = G__5759;
continue;
} else {
var temp__5804__auto___5760 = cljs.core.seq.call(null,seq__5681_5746);
if(temp__5804__auto___5760){
var seq__5681_5761__$1 = temp__5804__auto___5760;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5681_5761__$1)){
var c__5525__auto___5762 = cljs.core.chunk_first.call(null,seq__5681_5761__$1);
var G__5763 = cljs.core.chunk_rest.call(null,seq__5681_5761__$1);
var G__5764 = c__5525__auto___5762;
var G__5765 = cljs.core.count.call(null,c__5525__auto___5762);
var G__5766 = (0);
seq__5681_5746 = G__5763;
chunk__5682_5747 = G__5764;
count__5683_5748 = G__5765;
i__5684_5749 = G__5766;
continue;
} else {
var vec__5694_5767 = cljs.core.first.call(null,seq__5681_5761__$1);
var n_5768 = cljs.core.nth.call(null,vec__5694_5767,(0),null);
var meth_5769 = cljs.core.nth.call(null,vec__5694_5767,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_5769))){
cljs.compiler.emitln.call(null,"default:");

var restarg_5770 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_5770," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_5771 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_5770," = new cljs.core.IndexedSeq(",a_5771,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_5768,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_5718)),(((cljs.core.count.call(null,maxparams_5718) > (1)))?", ":null),restarg_5770,");");
} else {
var pcnt_5772 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_5769));
cljs.compiler.emitln.call(null,"case ",pcnt_5772,":");

cljs.compiler.emitln.call(null,"return ",n_5768,".call(this",(((pcnt_5772 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_5772,maxparams_5718)),null,(1),null)),(2),null))),");");
}


var G__5773 = cljs.core.next.call(null,seq__5681_5761__$1);
var G__5774 = null;
var G__5775 = (0);
var G__5776 = (0);
seq__5681_5746 = G__5773;
chunk__5682_5747 = G__5774;
count__5683_5748 = G__5775;
i__5684_5749 = G__5776;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_5777 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_5720)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_5777,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_5717,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_5717,".cljs$lang$applyTo = ",cljs.core.some.call(null,(function (p1__5662_SHARP_){
var vec__5697 = p1__5662_SHARP_;
var n = cljs.core.nth.call(null,vec__5697,(0),null);
var m = cljs.core.nth.call(null,vec__5697,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_5720),".cljs$lang$applyTo;");
} else {
}

var seq__5700_5778 = cljs.core.seq.call(null,ms_5720);
var chunk__5701_5779 = null;
var count__5702_5780 = (0);
var i__5703_5781 = (0);
while(true){
if((i__5703_5781 < count__5702_5780)){
var vec__5710_5782 = cljs.core._nth.call(null,chunk__5701_5779,i__5703_5781);
var n_5783 = cljs.core.nth.call(null,vec__5710_5782,(0),null);
var meth_5784 = cljs.core.nth.call(null,vec__5710_5782,(1),null);
var c_5785 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_5784));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_5784))){
cljs.compiler.emitln.call(null,mname_5717,".cljs$core$IFn$_invoke$arity$variadic = ",n_5783,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_5717,".cljs$core$IFn$_invoke$arity$",c_5785," = ",n_5783,";");
}


var G__5786 = seq__5700_5778;
var G__5787 = chunk__5701_5779;
var G__5788 = count__5702_5780;
var G__5789 = (i__5703_5781 + (1));
seq__5700_5778 = G__5786;
chunk__5701_5779 = G__5787;
count__5702_5780 = G__5788;
i__5703_5781 = G__5789;
continue;
} else {
var temp__5804__auto___5790 = cljs.core.seq.call(null,seq__5700_5778);
if(temp__5804__auto___5790){
var seq__5700_5791__$1 = temp__5804__auto___5790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5700_5791__$1)){
var c__5525__auto___5792 = cljs.core.chunk_first.call(null,seq__5700_5791__$1);
var G__5793 = cljs.core.chunk_rest.call(null,seq__5700_5791__$1);
var G__5794 = c__5525__auto___5792;
var G__5795 = cljs.core.count.call(null,c__5525__auto___5792);
var G__5796 = (0);
seq__5700_5778 = G__5793;
chunk__5701_5779 = G__5794;
count__5702_5780 = G__5795;
i__5703_5781 = G__5796;
continue;
} else {
var vec__5713_5797 = cljs.core.first.call(null,seq__5700_5791__$1);
var n_5798 = cljs.core.nth.call(null,vec__5713_5797,(0),null);
var meth_5799 = cljs.core.nth.call(null,vec__5713_5797,(1),null);
var c_5800 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_5799));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_5799))){
cljs.compiler.emitln.call(null,mname_5717,".cljs$core$IFn$_invoke$arity$variadic = ",n_5798,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_5717,".cljs$core$IFn$_invoke$arity$",c_5800," = ",n_5798,";");
}


var G__5801 = cljs.core.next.call(null,seq__5700_5791__$1);
var G__5802 = null;
var G__5803 = (0);
var G__5804 = (0);
seq__5700_5778 = G__5801;
chunk__5701_5779 = G__5802;
count__5702_5780 = G__5803;
i__5703_5781 = G__5804;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_5717,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__5805){
var map__5806 = p__5805;
var map__5806__$1 = cljs.core.__destructure_map.call(null,map__5806);
var statements = cljs.core.get.call(null,map__5806__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__5806__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__5806__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__5807_5811 = cljs.core.seq.call(null,statements);
var chunk__5808_5812 = null;
var count__5809_5813 = (0);
var i__5810_5814 = (0);
while(true){
if((i__5810_5814 < count__5809_5813)){
var s_5815 = cljs.core._nth.call(null,chunk__5808_5812,i__5810_5814);
cljs.compiler.emitln.call(null,s_5815);


var G__5816 = seq__5807_5811;
var G__5817 = chunk__5808_5812;
var G__5818 = count__5809_5813;
var G__5819 = (i__5810_5814 + (1));
seq__5807_5811 = G__5816;
chunk__5808_5812 = G__5817;
count__5809_5813 = G__5818;
i__5810_5814 = G__5819;
continue;
} else {
var temp__5804__auto___5820 = cljs.core.seq.call(null,seq__5807_5811);
if(temp__5804__auto___5820){
var seq__5807_5821__$1 = temp__5804__auto___5820;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5807_5821__$1)){
var c__5525__auto___5822 = cljs.core.chunk_first.call(null,seq__5807_5821__$1);
var G__5823 = cljs.core.chunk_rest.call(null,seq__5807_5821__$1);
var G__5824 = c__5525__auto___5822;
var G__5825 = cljs.core.count.call(null,c__5525__auto___5822);
var G__5826 = (0);
seq__5807_5811 = G__5823;
chunk__5808_5812 = G__5824;
count__5809_5813 = G__5825;
i__5810_5814 = G__5826;
continue;
} else {
var s_5827 = cljs.core.first.call(null,seq__5807_5821__$1);
cljs.compiler.emitln.call(null,s_5827);


var G__5828 = cljs.core.next.call(null,seq__5807_5821__$1);
var G__5829 = null;
var G__5830 = (0);
var G__5831 = (0);
seq__5807_5811 = G__5828;
chunk__5808_5812 = G__5829;
count__5809_5813 = G__5830;
i__5810_5814 = G__5831;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__5832){
var map__5833 = p__5832;
var map__5833__$1 = cljs.core.__destructure_map.call(null,map__5833);
var try$ = cljs.core.get.call(null,map__5833__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__5833__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__5833__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__5833__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__5833__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote.call(null,finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__5834,is_loop){
var map__5835 = p__5834;
var map__5835__$1 = cljs.core.__destructure_map.call(null,map__5835);
var expr = cljs.core.get.call(null,map__5835__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__5835__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__5835__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__5836_5846 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__5837_5847 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,(function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__5837_5847);

try{var seq__5838_5848 = cljs.core.seq.call(null,bindings);
var chunk__5839_5849 = null;
var count__5840_5850 = (0);
var i__5841_5851 = (0);
while(true){
if((i__5841_5851 < count__5840_5850)){
var map__5844_5852 = cljs.core._nth.call(null,chunk__5839_5849,i__5841_5851);
var map__5844_5853__$1 = cljs.core.__destructure_map.call(null,map__5844_5852);
var binding_5854 = map__5844_5853__$1;
var init_5855 = cljs.core.get.call(null,map__5844_5853__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_5854);

cljs.compiler.emitln.call(null," = ",init_5855,";");


var G__5856 = seq__5838_5848;
var G__5857 = chunk__5839_5849;
var G__5858 = count__5840_5850;
var G__5859 = (i__5841_5851 + (1));
seq__5838_5848 = G__5856;
chunk__5839_5849 = G__5857;
count__5840_5850 = G__5858;
i__5841_5851 = G__5859;
continue;
} else {
var temp__5804__auto___5860 = cljs.core.seq.call(null,seq__5838_5848);
if(temp__5804__auto___5860){
var seq__5838_5861__$1 = temp__5804__auto___5860;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5838_5861__$1)){
var c__5525__auto___5862 = cljs.core.chunk_first.call(null,seq__5838_5861__$1);
var G__5863 = cljs.core.chunk_rest.call(null,seq__5838_5861__$1);
var G__5864 = c__5525__auto___5862;
var G__5865 = cljs.core.count.call(null,c__5525__auto___5862);
var G__5866 = (0);
seq__5838_5848 = G__5863;
chunk__5839_5849 = G__5864;
count__5840_5850 = G__5865;
i__5841_5851 = G__5866;
continue;
} else {
var map__5845_5867 = cljs.core.first.call(null,seq__5838_5861__$1);
var map__5845_5868__$1 = cljs.core.__destructure_map.call(null,map__5845_5867);
var binding_5869 = map__5845_5868__$1;
var init_5870 = cljs.core.get.call(null,map__5845_5868__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_5869);

cljs.compiler.emitln.call(null," = ",init_5870,";");


var G__5871 = cljs.core.next.call(null,seq__5838_5861__$1);
var G__5872 = null;
var G__5873 = (0);
var G__5874 = (0);
seq__5838_5848 = G__5871;
chunk__5839_5849 = G__5872;
count__5840_5850 = G__5873;
i__5841_5851 = G__5874;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__5836_5846);
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__5875){
var map__5876 = p__5875;
var map__5876__$1 = cljs.core.__destructure_map.call(null,map__5876);
var frame = cljs.core.get.call(null,map__5876__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__5876__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__5876__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__5593__auto___5877 = cljs.core.count.call(null,exprs);
var i_5878 = (0);
while(true){
if((i_5878 < n__5593__auto___5877)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_5878)," = ",exprs.call(null,i_5878),";");

var G__5879 = (i_5878 + (1));
i_5878 = G__5879;
continue;
} else {
}
break;
}

var n__5593__auto___5880 = cljs.core.count.call(null,exprs);
var i_5881 = (0);
while(true){
if((i_5881 < n__5593__auto___5880)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_5881))," = ",temps.call(null,i_5881),";");

var G__5882 = (i_5881 + (1));
i_5881 = G__5882;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__5883){
var map__5884 = p__5883;
var map__5884__$1 = cljs.core.__destructure_map.call(null,map__5884);
var expr = cljs.core.get.call(null,map__5884__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__5884__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__5884__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__5885_5893 = cljs.core.seq.call(null,bindings);
var chunk__5886_5894 = null;
var count__5887_5895 = (0);
var i__5888_5896 = (0);
while(true){
if((i__5888_5896 < count__5887_5895)){
var map__5891_5897 = cljs.core._nth.call(null,chunk__5886_5894,i__5888_5896);
var map__5891_5898__$1 = cljs.core.__destructure_map.call(null,map__5891_5897);
var binding_5899 = map__5891_5898__$1;
var init_5900 = cljs.core.get.call(null,map__5891_5898__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_5899)," = ",init_5900,";");


var G__5901 = seq__5885_5893;
var G__5902 = chunk__5886_5894;
var G__5903 = count__5887_5895;
var G__5904 = (i__5888_5896 + (1));
seq__5885_5893 = G__5901;
chunk__5886_5894 = G__5902;
count__5887_5895 = G__5903;
i__5888_5896 = G__5904;
continue;
} else {
var temp__5804__auto___5905 = cljs.core.seq.call(null,seq__5885_5893);
if(temp__5804__auto___5905){
var seq__5885_5906__$1 = temp__5804__auto___5905;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5885_5906__$1)){
var c__5525__auto___5907 = cljs.core.chunk_first.call(null,seq__5885_5906__$1);
var G__5908 = cljs.core.chunk_rest.call(null,seq__5885_5906__$1);
var G__5909 = c__5525__auto___5907;
var G__5910 = cljs.core.count.call(null,c__5525__auto___5907);
var G__5911 = (0);
seq__5885_5893 = G__5908;
chunk__5886_5894 = G__5909;
count__5887_5895 = G__5910;
i__5888_5896 = G__5911;
continue;
} else {
var map__5892_5912 = cljs.core.first.call(null,seq__5885_5906__$1);
var map__5892_5913__$1 = cljs.core.__destructure_map.call(null,map__5892_5912);
var binding_5914 = map__5892_5913__$1;
var init_5915 = cljs.core.get.call(null,map__5892_5913__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_5914)," = ",init_5915,";");


var G__5916 = cljs.core.next.call(null,seq__5885_5906__$1);
var G__5917 = null;
var G__5918 = (0);
var G__5919 = (0);
seq__5885_5893 = G__5916;
chunk__5886_5894 = G__5917;
count__5887_5895 = G__5918;
i__5888_5896 = G__5919;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__5922){
var map__5923 = p__5922;
var map__5923__$1 = cljs.core.__destructure_map.call(null,map__5923);
var expr = map__5923__$1;
var f = cljs.core.get.call(null,map__5923__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__5923__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__5923__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__5000__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__5000__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__5000__auto__ = protocol;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = tag;
if(cljs.core.truth_(and__5000__auto____$1)){
var or__5002__auto__ = (function (){var and__5000__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__5000__auto____$2)){
var and__5000__auto____$3 = protocol;
if(cljs.core.truth_(and__5000__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__5000__auto____$3;
}
} else {
return and__5000__auto____$2;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto____$2 = (function (){var or__5002__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__5000__auto____$2)){
var or__5002__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__5002__auto____$1){
return or__5002__auto____$1;
} else {
var and__5000__auto____$3 = (!(cljs.core.set_QMARK_.call(null,tag)));
if(and__5000__auto____$3){
var and__5000__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null).call(null,tag));
if(and__5000__auto____$4){
var temp__5804__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.vary_meta.call(null,tag,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true)));
if(cljs.core.truth_(temp__5804__auto__)){
var ps = temp__5804__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__5000__auto____$4;
}
} else {
return and__5000__auto____$3;
}
}
} else {
return and__5000__auto____$2;
}
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
var first_arg_tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,first_arg_tag,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var opt_count_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null).call(null,first_arg_tag))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var ftag = cljs.analyzer.infer_tag.call(null,env,f);
var js_QMARK_ = (function (){var or__5002__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__5002__auto__){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null));
if(or__5002__auto____$1){
return or__5002__auto____$1;
} else {
return new cljs.core.Keyword(null,"foreign","foreign",990521149).cljs$core$IFn$_invoke$arity$1(info);
}
}
})();
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__5002__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__5002__auto__){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (function (){var temp__5804__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5804__auto__)){
var ns_str = temp__5804__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__5002__auto__ = cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),ftag);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote.call(null,f);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__5924 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return (arity > mfa);
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__5920_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__5920_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__5921_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__5921_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__5924,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__5924,(1),null);
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(opt_count_QMARK_){
cljs.compiler.emits.call(null,"((",cljs.core.first.call(null,args),").length)");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_5927 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_5927,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_5928 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_5928,args)),(((mfa_5928 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_5928,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = js_QMARK_;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__5000__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1));
} else {
return and__5000__auto__;
}
})())){
var fprop_5929 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.call(null,"(",f__$1,fprop_5929," ? ",f__$1,fprop_5929,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_5929," ? ",f__$1,fprop_5929,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__5930){
var map__5931 = p__5930;
var map__5931__$1 = cljs.core.__destructure_map.call(null,map__5931);
var ctor = cljs.core.get.call(null,map__5931__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__5931__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__5931__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__5932){
var map__5933 = p__5932;
var map__5933__$1 = cljs.core.__destructure_map.call(null,map__5933);
var target = cljs.core.get.call(null,map__5933__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__5933__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__5933__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(",target," = ",val,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.sublib_select = (function cljs$compiler$sublib_select(sublib){
if(cljs.core.truth_(sublib)){
var xs = clojure.string.split.call(null,sublib,/\./);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__5934_SHARP_){
return ["['",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5934_SHARP_),"']"].join('');
}),xs));
} else {
return null;
}
});
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
var vec__5935 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib);
var lib_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__5935,(0),null);
var sublib = cljs.core.nth.call(null,vec__5935,(1),null);
return cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib)," = goog.global",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.call(null,cljs.core.name.call(null,(function (){var or__5002__auto__ = cljs.core.get.call(null,global_exports,cljs.core.symbol.call(null,lib_SINGLEQUOTE_));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.call(null,global_exports,cljs.core.name.call(null,lib_SINGLEQUOTE_));
}
})()),/\./))),cljs.compiler.sublib_select.call(null,sublib),";");
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__5938 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__5938__$1 = cljs.core.__destructure_map.call(null,map__5938);
var options = cljs.core.get.call(null,map__5938__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__5938__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__5939 = options;
var map__5939__$1 = cljs.core.__destructure_map.call(null,map__5939);
var target = cljs.core.get.call(null,map__5939__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.call(null,map__5939__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.call(null,map__5939__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__5940 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__5946 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__5946__$1 = cljs.core.__destructure_map.call(null,map__5946);
var node_libs = cljs.core.get.call(null,map__5946__$1,true);
var libs_to_load = cljs.core.get.call(null,map__5946__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__5940,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__5940,(1),null);
var vec__5943 = (function (){var map__5947 = cljs.core.group_by.call(null,cljs.analyzer.goog_module_dep_QMARK_,libs_to_load);
var map__5947__$1 = cljs.core.__destructure_map.call(null,map__5947);
var goog_modules = cljs.core.get.call(null,map__5947__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__5947__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog_modules,libs_to_load__$1], null);
})();
var goog_modules = cljs.core.nth.call(null,vec__5943,(0),null);
var libs_to_load__$1 = cljs.core.nth.call(null,vec__5943,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__5948_5992 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__5949_5993 = null;
var count__5950_5994 = (0);
var i__5951_5995 = (0);
while(true){
if((i__5951_5995 < count__5950_5994)){
var lib_5996 = cljs.core._nth.call(null,chunk__5949_5993,i__5951_5995);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_5996)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_5996),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_5996),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_5996),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_5996),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_5996,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_5996),"');");
}

}
}
}


var G__5997 = seq__5948_5992;
var G__5998 = chunk__5949_5993;
var G__5999 = count__5950_5994;
var G__6000 = (i__5951_5995 + (1));
seq__5948_5992 = G__5997;
chunk__5949_5993 = G__5998;
count__5950_5994 = G__5999;
i__5951_5995 = G__6000;
continue;
} else {
var temp__5804__auto___6001 = cljs.core.seq.call(null,seq__5948_5992);
if(temp__5804__auto___6001){
var seq__5948_6002__$1 = temp__5804__auto___6001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5948_6002__$1)){
var c__5525__auto___6003 = cljs.core.chunk_first.call(null,seq__5948_6002__$1);
var G__6004 = cljs.core.chunk_rest.call(null,seq__5948_6002__$1);
var G__6005 = c__5525__auto___6003;
var G__6006 = cljs.core.count.call(null,c__5525__auto___6003);
var G__6007 = (0);
seq__5948_5992 = G__6004;
chunk__5949_5993 = G__6005;
count__5950_5994 = G__6006;
i__5951_5995 = G__6007;
continue;
} else {
var lib_6008 = cljs.core.first.call(null,seq__5948_6002__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_6008)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_6008),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_6008),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_6008),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_6008),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_6008,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_6008),"');");
}

}
}
}


var G__6009 = cljs.core.next.call(null,seq__5948_6002__$1);
var G__6010 = null;
var G__6011 = (0);
var G__6012 = (0);
seq__5948_5992 = G__6009;
chunk__5949_5993 = G__6010;
count__5950_5994 = G__6011;
i__5951_5995 = G__6012;
continue;
}
} else {
}
}
break;
}

var seq__5952_6013 = cljs.core.seq.call(null,node_libs);
var chunk__5953_6014 = null;
var count__5954_6015 = (0);
var i__5955_6016 = (0);
while(true){
if((i__5955_6016 < count__5954_6015)){
var lib_6017 = cljs.core._nth.call(null,chunk__5953_6014,i__5955_6016);
var vec__5962_6018 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_6017);
var lib_SINGLEQUOTE__6019 = cljs.core.nth.call(null,vec__5962_6018,(0),null);
var sublib_6020 = cljs.core.nth.call(null,vec__5962_6018,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_6017)," = require('",lib_SINGLEQUOTE__6019,"')",cljs.compiler.sublib_select.call(null,sublib_6020),";");


var G__6021 = seq__5952_6013;
var G__6022 = chunk__5953_6014;
var G__6023 = count__5954_6015;
var G__6024 = (i__5955_6016 + (1));
seq__5952_6013 = G__6021;
chunk__5953_6014 = G__6022;
count__5954_6015 = G__6023;
i__5955_6016 = G__6024;
continue;
} else {
var temp__5804__auto___6025 = cljs.core.seq.call(null,seq__5952_6013);
if(temp__5804__auto___6025){
var seq__5952_6026__$1 = temp__5804__auto___6025;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5952_6026__$1)){
var c__5525__auto___6027 = cljs.core.chunk_first.call(null,seq__5952_6026__$1);
var G__6028 = cljs.core.chunk_rest.call(null,seq__5952_6026__$1);
var G__6029 = c__5525__auto___6027;
var G__6030 = cljs.core.count.call(null,c__5525__auto___6027);
var G__6031 = (0);
seq__5952_6013 = G__6028;
chunk__5953_6014 = G__6029;
count__5954_6015 = G__6030;
i__5955_6016 = G__6031;
continue;
} else {
var lib_6032 = cljs.core.first.call(null,seq__5952_6026__$1);
var vec__5965_6033 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_6032);
var lib_SINGLEQUOTE__6034 = cljs.core.nth.call(null,vec__5965_6033,(0),null);
var sublib_6035 = cljs.core.nth.call(null,vec__5965_6033,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_6032)," = require('",lib_SINGLEQUOTE__6034,"')",cljs.compiler.sublib_select.call(null,sublib_6035),";");


var G__6036 = cljs.core.next.call(null,seq__5952_6026__$1);
var G__6037 = null;
var G__6038 = (0);
var G__6039 = (0);
seq__5952_6013 = G__6036;
chunk__5953_6014 = G__6037;
count__5954_6015 = G__6038;
i__5955_6016 = G__6039;
continue;
}
} else {
}
}
break;
}

var seq__5968_6040 = cljs.core.seq.call(null,goog_modules);
var chunk__5969_6041 = null;
var count__5970_6042 = (0);
var i__5971_6043 = (0);
while(true){
if((i__5971_6043 < count__5970_6042)){
var lib_6044 = cljs.core._nth.call(null,chunk__5969_6041,i__5971_6043);
var vec__5978_6045 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_6044);
var lib_SINGLEQUOTE__6046 = cljs.core.nth.call(null,vec__5978_6045,(0),null);
var sublib_6047 = cljs.core.nth.call(null,vec__5978_6045,(1),null);
cljs.compiler.emitln.call(null,"goog.require('",lib_SINGLEQUOTE__6046,"');");

cljs.compiler.emitln.call(null,"goog.scope(function(){");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_goog_module_lib.call(null,lib_6044)," = goog.module.get('",lib_SINGLEQUOTE__6046,"')",cljs.compiler.sublib_select.call(null,sublib_6047),";");

cljs.compiler.emitln.call(null,"});");


var G__6048 = seq__5968_6040;
var G__6049 = chunk__5969_6041;
var G__6050 = count__5970_6042;
var G__6051 = (i__5971_6043 + (1));
seq__5968_6040 = G__6048;
chunk__5969_6041 = G__6049;
count__5970_6042 = G__6050;
i__5971_6043 = G__6051;
continue;
} else {
var temp__5804__auto___6052 = cljs.core.seq.call(null,seq__5968_6040);
if(temp__5804__auto___6052){
var seq__5968_6053__$1 = temp__5804__auto___6052;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5968_6053__$1)){
var c__5525__auto___6054 = cljs.core.chunk_first.call(null,seq__5968_6053__$1);
var G__6055 = cljs.core.chunk_rest.call(null,seq__5968_6053__$1);
var G__6056 = c__5525__auto___6054;
var G__6057 = cljs.core.count.call(null,c__5525__auto___6054);
var G__6058 = (0);
seq__5968_6040 = G__6055;
chunk__5969_6041 = G__6056;
count__5970_6042 = G__6057;
i__5971_6043 = G__6058;
continue;
} else {
var lib_6059 = cljs.core.first.call(null,seq__5968_6053__$1);
var vec__5981_6060 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_6059);
var lib_SINGLEQUOTE__6061 = cljs.core.nth.call(null,vec__5981_6060,(0),null);
var sublib_6062 = cljs.core.nth.call(null,vec__5981_6060,(1),null);
cljs.compiler.emitln.call(null,"goog.require('",lib_SINGLEQUOTE__6061,"');");

cljs.compiler.emitln.call(null,"goog.scope(function(){");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_goog_module_lib.call(null,lib_6059)," = goog.module.get('",lib_SINGLEQUOTE__6061,"')",cljs.compiler.sublib_select.call(null,sublib_6062),";");

cljs.compiler.emitln.call(null,"});");


var G__6063 = cljs.core.next.call(null,seq__5968_6053__$1);
var G__6064 = null;
var G__6065 = (0);
var G__6066 = (0);
seq__5968_6040 = G__6063;
chunk__5969_6041 = G__6064;
count__5970_6042 = G__6065;
i__5971_6043 = G__6066;
continue;
}
} else {
}
}
break;
}

var seq__5984_6067 = cljs.core.seq.call(null,global_exports_libs);
var chunk__5985_6068 = null;
var count__5986_6069 = (0);
var i__5987_6070 = (0);
while(true){
if((i__5987_6070 < count__5986_6069)){
var lib_6071 = cljs.core._nth.call(null,chunk__5985_6068,i__5987_6070);
var map__5990_6072 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_6071))));
var map__5990_6073__$1 = cljs.core.__destructure_map.call(null,map__5990_6072);
var global_exports_6074 = cljs.core.get.call(null,map__5990_6073__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_6074,lib_6071);


var G__6075 = seq__5984_6067;
var G__6076 = chunk__5985_6068;
var G__6077 = count__5986_6069;
var G__6078 = (i__5987_6070 + (1));
seq__5984_6067 = G__6075;
chunk__5985_6068 = G__6076;
count__5986_6069 = G__6077;
i__5987_6070 = G__6078;
continue;
} else {
var temp__5804__auto___6079 = cljs.core.seq.call(null,seq__5984_6067);
if(temp__5804__auto___6079){
var seq__5984_6080__$1 = temp__5804__auto___6079;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5984_6080__$1)){
var c__5525__auto___6081 = cljs.core.chunk_first.call(null,seq__5984_6080__$1);
var G__6082 = cljs.core.chunk_rest.call(null,seq__5984_6080__$1);
var G__6083 = c__5525__auto___6081;
var G__6084 = cljs.core.count.call(null,c__5525__auto___6081);
var G__6085 = (0);
seq__5984_6067 = G__6082;
chunk__5985_6068 = G__6083;
count__5986_6069 = G__6084;
i__5987_6070 = G__6085;
continue;
} else {
var lib_6086 = cljs.core.first.call(null,seq__5984_6080__$1);
var map__5991_6087 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_6086))));
var map__5991_6088__$1 = cljs.core.__destructure_map.call(null,map__5991_6087);
var global_exports_6089 = cljs.core.get.call(null,map__5991_6088__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_6089,lib_6086);


var G__6090 = cljs.core.next.call(null,seq__5984_6080__$1);
var G__6091 = null;
var G__6092 = (0);
var G__6093 = (0);
seq__5984_6067 = G__6090;
chunk__5985_6068 = G__6091;
count__5986_6069 = G__6092;
i__5987_6070 = G__6093;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__6094){
var map__6095 = p__6094;
var map__6095__$1 = cljs.core.__destructure_map.call(null,map__6095);
var name = cljs.core.get.call(null,map__6095__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__6095__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__6095__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__6095__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__6095__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__6095__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__6095__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__6096){
var map__6097 = p__6096;
var map__6097__$1 = cljs.core.__destructure_map.call(null,map__6097);
var name = cljs.core.get.call(null,map__6097__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__6097__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__6097__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__6097__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__6097__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__6097__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__6097__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__6098){
var map__6099 = p__6098;
var map__6099__$1 = cljs.core.__destructure_map.call(null,map__6099);
var t = cljs.core.get.call(null,map__6099__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__6099__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__6099__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__6099__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__6099__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__6100_6124 = cljs.core.seq.call(null,protocols);
var chunk__6101_6125 = null;
var count__6102_6126 = (0);
var i__6103_6127 = (0);
while(true){
if((i__6103_6127 < count__6102_6126)){
var protocol_6128 = cljs.core._nth.call(null,chunk__6101_6125,i__6103_6127);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_6128)),"}");


var G__6129 = seq__6100_6124;
var G__6130 = chunk__6101_6125;
var G__6131 = count__6102_6126;
var G__6132 = (i__6103_6127 + (1));
seq__6100_6124 = G__6129;
chunk__6101_6125 = G__6130;
count__6102_6126 = G__6131;
i__6103_6127 = G__6132;
continue;
} else {
var temp__5804__auto___6133 = cljs.core.seq.call(null,seq__6100_6124);
if(temp__5804__auto___6133){
var seq__6100_6134__$1 = temp__5804__auto___6133;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6100_6134__$1)){
var c__5525__auto___6135 = cljs.core.chunk_first.call(null,seq__6100_6134__$1);
var G__6136 = cljs.core.chunk_rest.call(null,seq__6100_6134__$1);
var G__6137 = c__5525__auto___6135;
var G__6138 = cljs.core.count.call(null,c__5525__auto___6135);
var G__6139 = (0);
seq__6100_6124 = G__6136;
chunk__6101_6125 = G__6137;
count__6102_6126 = G__6138;
i__6103_6127 = G__6139;
continue;
} else {
var protocol_6140 = cljs.core.first.call(null,seq__6100_6134__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_6140)),"}");


var G__6141 = cljs.core.next.call(null,seq__6100_6134__$1);
var G__6142 = null;
var G__6143 = (0);
var G__6144 = (0);
seq__6100_6124 = G__6141;
chunk__6101_6125 = G__6142;
count__6102_6126 = G__6143;
i__6103_6127 = G__6144;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__6104_6145 = cljs.core.seq.call(null,fields__$1);
var chunk__6105_6146 = null;
var count__6106_6147 = (0);
var i__6107_6148 = (0);
while(true){
if((i__6107_6148 < count__6106_6147)){
var fld_6149 = cljs.core._nth.call(null,chunk__6105_6146,i__6107_6148);
cljs.compiler.emitln.call(null,"this.",fld_6149," = ",fld_6149,";");


var G__6150 = seq__6104_6145;
var G__6151 = chunk__6105_6146;
var G__6152 = count__6106_6147;
var G__6153 = (i__6107_6148 + (1));
seq__6104_6145 = G__6150;
chunk__6105_6146 = G__6151;
count__6106_6147 = G__6152;
i__6107_6148 = G__6153;
continue;
} else {
var temp__5804__auto___6154 = cljs.core.seq.call(null,seq__6104_6145);
if(temp__5804__auto___6154){
var seq__6104_6155__$1 = temp__5804__auto___6154;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6104_6155__$1)){
var c__5525__auto___6156 = cljs.core.chunk_first.call(null,seq__6104_6155__$1);
var G__6157 = cljs.core.chunk_rest.call(null,seq__6104_6155__$1);
var G__6158 = c__5525__auto___6156;
var G__6159 = cljs.core.count.call(null,c__5525__auto___6156);
var G__6160 = (0);
seq__6104_6145 = G__6157;
chunk__6105_6146 = G__6158;
count__6106_6147 = G__6159;
i__6107_6148 = G__6160;
continue;
} else {
var fld_6161 = cljs.core.first.call(null,seq__6104_6155__$1);
cljs.compiler.emitln.call(null,"this.",fld_6161," = ",fld_6161,";");


var G__6162 = cljs.core.next.call(null,seq__6104_6155__$1);
var G__6163 = null;
var G__6164 = (0);
var G__6165 = (0);
seq__6104_6145 = G__6162;
chunk__6105_6146 = G__6163;
count__6106_6147 = G__6164;
i__6107_6148 = G__6165;
continue;
}
} else {
}
}
break;
}

var seq__6108_6166 = cljs.core.seq.call(null,pmasks);
var chunk__6109_6167 = null;
var count__6110_6168 = (0);
var i__6111_6169 = (0);
while(true){
if((i__6111_6169 < count__6110_6168)){
var vec__6118_6170 = cljs.core._nth.call(null,chunk__6109_6167,i__6111_6169);
var pno_6171 = cljs.core.nth.call(null,vec__6118_6170,(0),null);
var pmask_6172 = cljs.core.nth.call(null,vec__6118_6170,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_6171,"$ = ",pmask_6172,";");


var G__6173 = seq__6108_6166;
var G__6174 = chunk__6109_6167;
var G__6175 = count__6110_6168;
var G__6176 = (i__6111_6169 + (1));
seq__6108_6166 = G__6173;
chunk__6109_6167 = G__6174;
count__6110_6168 = G__6175;
i__6111_6169 = G__6176;
continue;
} else {
var temp__5804__auto___6177 = cljs.core.seq.call(null,seq__6108_6166);
if(temp__5804__auto___6177){
var seq__6108_6178__$1 = temp__5804__auto___6177;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6108_6178__$1)){
var c__5525__auto___6179 = cljs.core.chunk_first.call(null,seq__6108_6178__$1);
var G__6180 = cljs.core.chunk_rest.call(null,seq__6108_6178__$1);
var G__6181 = c__5525__auto___6179;
var G__6182 = cljs.core.count.call(null,c__5525__auto___6179);
var G__6183 = (0);
seq__6108_6166 = G__6180;
chunk__6109_6167 = G__6181;
count__6110_6168 = G__6182;
i__6111_6169 = G__6183;
continue;
} else {
var vec__6121_6184 = cljs.core.first.call(null,seq__6108_6178__$1);
var pno_6185 = cljs.core.nth.call(null,vec__6121_6184,(0),null);
var pmask_6186 = cljs.core.nth.call(null,vec__6121_6184,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_6185,"$ = ",pmask_6186,";");


var G__6187 = cljs.core.next.call(null,seq__6108_6178__$1);
var G__6188 = null;
var G__6189 = (0);
var G__6190 = (0);
seq__6108_6166 = G__6187;
chunk__6109_6167 = G__6188;
count__6110_6168 = G__6189;
i__6111_6169 = G__6190;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__6191){
var map__6192 = p__6191;
var map__6192__$1 = cljs.core.__destructure_map.call(null,map__6192);
var t = cljs.core.get.call(null,map__6192__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__6192__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__6192__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__6192__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__6192__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__6193_6217 = cljs.core.seq.call(null,protocols);
var chunk__6194_6218 = null;
var count__6195_6219 = (0);
var i__6196_6220 = (0);
while(true){
if((i__6196_6220 < count__6195_6219)){
var protocol_6221 = cljs.core._nth.call(null,chunk__6194_6218,i__6196_6220);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_6221)),"}");


var G__6222 = seq__6193_6217;
var G__6223 = chunk__6194_6218;
var G__6224 = count__6195_6219;
var G__6225 = (i__6196_6220 + (1));
seq__6193_6217 = G__6222;
chunk__6194_6218 = G__6223;
count__6195_6219 = G__6224;
i__6196_6220 = G__6225;
continue;
} else {
var temp__5804__auto___6226 = cljs.core.seq.call(null,seq__6193_6217);
if(temp__5804__auto___6226){
var seq__6193_6227__$1 = temp__5804__auto___6226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6193_6227__$1)){
var c__5525__auto___6228 = cljs.core.chunk_first.call(null,seq__6193_6227__$1);
var G__6229 = cljs.core.chunk_rest.call(null,seq__6193_6227__$1);
var G__6230 = c__5525__auto___6228;
var G__6231 = cljs.core.count.call(null,c__5525__auto___6228);
var G__6232 = (0);
seq__6193_6217 = G__6229;
chunk__6194_6218 = G__6230;
count__6195_6219 = G__6231;
i__6196_6220 = G__6232;
continue;
} else {
var protocol_6233 = cljs.core.first.call(null,seq__6193_6227__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_6233)),"}");


var G__6234 = cljs.core.next.call(null,seq__6193_6227__$1);
var G__6235 = null;
var G__6236 = (0);
var G__6237 = (0);
seq__6193_6217 = G__6234;
chunk__6194_6218 = G__6235;
count__6195_6219 = G__6236;
i__6196_6220 = G__6237;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__6197_6238 = cljs.core.seq.call(null,fields__$1);
var chunk__6198_6239 = null;
var count__6199_6240 = (0);
var i__6200_6241 = (0);
while(true){
if((i__6200_6241 < count__6199_6240)){
var fld_6242 = cljs.core._nth.call(null,chunk__6198_6239,i__6200_6241);
cljs.compiler.emitln.call(null,"this.",fld_6242," = ",fld_6242,";");


var G__6243 = seq__6197_6238;
var G__6244 = chunk__6198_6239;
var G__6245 = count__6199_6240;
var G__6246 = (i__6200_6241 + (1));
seq__6197_6238 = G__6243;
chunk__6198_6239 = G__6244;
count__6199_6240 = G__6245;
i__6200_6241 = G__6246;
continue;
} else {
var temp__5804__auto___6247 = cljs.core.seq.call(null,seq__6197_6238);
if(temp__5804__auto___6247){
var seq__6197_6248__$1 = temp__5804__auto___6247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6197_6248__$1)){
var c__5525__auto___6249 = cljs.core.chunk_first.call(null,seq__6197_6248__$1);
var G__6250 = cljs.core.chunk_rest.call(null,seq__6197_6248__$1);
var G__6251 = c__5525__auto___6249;
var G__6252 = cljs.core.count.call(null,c__5525__auto___6249);
var G__6253 = (0);
seq__6197_6238 = G__6250;
chunk__6198_6239 = G__6251;
count__6199_6240 = G__6252;
i__6200_6241 = G__6253;
continue;
} else {
var fld_6254 = cljs.core.first.call(null,seq__6197_6248__$1);
cljs.compiler.emitln.call(null,"this.",fld_6254," = ",fld_6254,";");


var G__6255 = cljs.core.next.call(null,seq__6197_6248__$1);
var G__6256 = null;
var G__6257 = (0);
var G__6258 = (0);
seq__6197_6238 = G__6255;
chunk__6198_6239 = G__6256;
count__6199_6240 = G__6257;
i__6200_6241 = G__6258;
continue;
}
} else {
}
}
break;
}

var seq__6201_6259 = cljs.core.seq.call(null,pmasks);
var chunk__6202_6260 = null;
var count__6203_6261 = (0);
var i__6204_6262 = (0);
while(true){
if((i__6204_6262 < count__6203_6261)){
var vec__6211_6263 = cljs.core._nth.call(null,chunk__6202_6260,i__6204_6262);
var pno_6264 = cljs.core.nth.call(null,vec__6211_6263,(0),null);
var pmask_6265 = cljs.core.nth.call(null,vec__6211_6263,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_6264,"$ = ",pmask_6265,";");


var G__6266 = seq__6201_6259;
var G__6267 = chunk__6202_6260;
var G__6268 = count__6203_6261;
var G__6269 = (i__6204_6262 + (1));
seq__6201_6259 = G__6266;
chunk__6202_6260 = G__6267;
count__6203_6261 = G__6268;
i__6204_6262 = G__6269;
continue;
} else {
var temp__5804__auto___6270 = cljs.core.seq.call(null,seq__6201_6259);
if(temp__5804__auto___6270){
var seq__6201_6271__$1 = temp__5804__auto___6270;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6201_6271__$1)){
var c__5525__auto___6272 = cljs.core.chunk_first.call(null,seq__6201_6271__$1);
var G__6273 = cljs.core.chunk_rest.call(null,seq__6201_6271__$1);
var G__6274 = c__5525__auto___6272;
var G__6275 = cljs.core.count.call(null,c__5525__auto___6272);
var G__6276 = (0);
seq__6201_6259 = G__6273;
chunk__6202_6260 = G__6274;
count__6203_6261 = G__6275;
i__6204_6262 = G__6276;
continue;
} else {
var vec__6214_6277 = cljs.core.first.call(null,seq__6201_6271__$1);
var pno_6278 = cljs.core.nth.call(null,vec__6214_6277,(0),null);
var pmask_6279 = cljs.core.nth.call(null,vec__6214_6277,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_6278,"$ = ",pmask_6279,";");


var G__6280 = cljs.core.next.call(null,seq__6201_6271__$1);
var G__6281 = null;
var G__6282 = (0);
var G__6283 = (0);
seq__6201_6259 = G__6280;
chunk__6202_6260 = G__6281;
count__6203_6261 = G__6282;
i__6204_6262 = G__6283;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__6284){
var map__6285 = p__6284;
var map__6285__$1 = cljs.core.__destructure_map.call(null,map__6285);
var target = cljs.core.get.call(null,map__6285__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__6285__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__6285__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__6285__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__6285__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__6286){
var map__6287 = p__6286;
var map__6287__$1 = cljs.core.__destructure_map.call(null,map__6287);
var op = cljs.core.get.call(null,map__6287__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__6287__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__6287__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__6287__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__6287__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__5000__auto__ = code;
if(cljs.core.truth_(and__5000__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__5000__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__6292 = cljs.core.seq.call(null,table);
var chunk__6293 = null;
var count__6294 = (0);
var i__6295 = (0);
while(true){
if((i__6295 < count__6294)){
var vec__6302 = cljs.core._nth.call(null,chunk__6293,i__6295);
var sym = cljs.core.nth.call(null,vec__6302,(0),null);
var value = cljs.core.nth.call(null,vec__6302,(1),null);
var ns_6308 = cljs.core.namespace.call(null,sym);
var name_6309 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__6310 = seq__6292;
var G__6311 = chunk__6293;
var G__6312 = count__6294;
var G__6313 = (i__6295 + (1));
seq__6292 = G__6310;
chunk__6293 = G__6311;
count__6294 = G__6312;
i__6295 = G__6313;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__6292);
if(temp__5804__auto__){
var seq__6292__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6292__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__6292__$1);
var G__6314 = cljs.core.chunk_rest.call(null,seq__6292__$1);
var G__6315 = c__5525__auto__;
var G__6316 = cljs.core.count.call(null,c__5525__auto__);
var G__6317 = (0);
seq__6292 = G__6314;
chunk__6293 = G__6315;
count__6294 = G__6316;
i__6295 = G__6317;
continue;
} else {
var vec__6305 = cljs.core.first.call(null,seq__6292__$1);
var sym = cljs.core.nth.call(null,vec__6305,(0),null);
var value = cljs.core.nth.call(null,vec__6305,(1),null);
var ns_6318 = cljs.core.namespace.call(null,sym);
var name_6319 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__6320 = cljs.core.next.call(null,seq__6292__$1);
var G__6321 = null;
var G__6322 = (0);
var G__6323 = (0);
seq__6292 = G__6320;
chunk__6293 = G__6321;
count__6294 = G__6322;
i__6295 = G__6323;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__6325 = arguments.length;
switch (G__6325) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.analyzer.get_externs.call(null):null));
}));

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_6330 = cljs.core.first.call(null,ks);
var vec__6326_6331 = cljs.core.conj.call(null,prefix,k_6330);
var top_6332 = cljs.core.nth.call(null,vec__6326_6331,(0),null);
var prefix_SINGLEQUOTE__6333 = vec__6326_6331;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_6330)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__6333) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_6332)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_6332)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__6333)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_6332);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__6333)),";");
}
} else {
}

var m_6334 = cljs.core.get.call(null,externs,k_6330);
if(cljs.core.empty_QMARK_.call(null,m_6334)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__6333,m_6334,top_level,known_externs);
}

var G__6335 = cljs.core.next.call(null,ks);
ks = G__6335;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=compiler.js.map
