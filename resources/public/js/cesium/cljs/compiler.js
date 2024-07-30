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
var map__45649 = s;
var map__45649__$1 = cljs.core.__destructure_map.call(null,map__45649);
var name = cljs.core.get.call(null,map__45649__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__45649__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__45651 = info;
var map__45652 = G__45651;
var map__45652__$1 = cljs.core.__destructure_map.call(null,map__45652);
var shadow = cljs.core.get.call(null,map__45652__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__45651__$1 = G__45651;
while(true){
var d__$2 = d__$1;
var map__45654 = G__45651__$1;
var map__45654__$1 = cljs.core.__destructure_map.call(null,map__45654);
var shadow__$1 = cljs.core.get.call(null,map__45654__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__45655 = (d__$2 + (1));
var G__45656 = shadow__$1;
d__$1 = G__45655;
G__45651__$1 = G__45656;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__45657){
var map__45658 = p__45657;
var map__45658__$1 = cljs.core.__destructure_map.call(null,map__45658);
var name_var = map__45658__$1;
var name = cljs.core.get.call(null,map__45658__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__45658__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__45659 = info;
var map__45659__$1 = cljs.core.__destructure_map.call(null,map__45659);
var ns = cljs.core.get.call(null,map__45659__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__45659__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__45661 = arguments.length;
switch (G__45661) {
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
var G__45663 = cp;
switch (G__45663) {
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
var seq__45665_45669 = cljs.core.seq.call(null,s);
var chunk__45666_45670 = null;
var count__45667_45671 = (0);
var i__45668_45672 = (0);
while(true){
if((i__45668_45672 < count__45667_45671)){
var c_45673 = cljs.core._nth.call(null,chunk__45666_45670,i__45668_45672);
sb.append(cljs.compiler.escape_char.call(null,c_45673));


var G__45674 = seq__45665_45669;
var G__45675 = chunk__45666_45670;
var G__45676 = count__45667_45671;
var G__45677 = (i__45668_45672 + (1));
seq__45665_45669 = G__45674;
chunk__45666_45670 = G__45675;
count__45667_45671 = G__45676;
i__45668_45672 = G__45677;
continue;
} else {
var temp__5804__auto___45678 = cljs.core.seq.call(null,seq__45665_45669);
if(temp__5804__auto___45678){
var seq__45665_45679__$1 = temp__5804__auto___45678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45665_45679__$1)){
var c__5525__auto___45680 = cljs.core.chunk_first.call(null,seq__45665_45679__$1);
var G__45681 = cljs.core.chunk_rest.call(null,seq__45665_45679__$1);
var G__45682 = c__5525__auto___45680;
var G__45683 = cljs.core.count.call(null,c__5525__auto___45680);
var G__45684 = (0);
seq__45665_45669 = G__45681;
chunk__45666_45670 = G__45682;
count__45667_45671 = G__45683;
i__45668_45672 = G__45684;
continue;
} else {
var c_45685 = cljs.core.first.call(null,seq__45665_45679__$1);
sb.append(cljs.compiler.escape_char.call(null,c_45685));


var G__45686 = cljs.core.next.call(null,seq__45665_45679__$1);
var G__45687 = null;
var G__45688 = (0);
var G__45689 = (0);
seq__45665_45669 = G__45686;
chunk__45666_45670 = G__45687;
count__45667_45671 = G__45688;
i__45668_45672 = G__45689;
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
var map__45690_45693 = ast;
var map__45690_45694__$1 = cljs.core.__destructure_map.call(null,map__45690_45693);
var env_45695 = cljs.core.get.call(null,map__45690_45694__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_45695))){
var map__45691_45696 = env_45695;
var map__45691_45697__$1 = cljs.core.__destructure_map.call(null,map__45691_45696);
var line_45698 = cljs.core.get.call(null,map__45691_45697__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45699 = cljs.core.get.call(null,map__45691_45697__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__45692 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__45692,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__45692;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_45698 - (1))], null),cljs.core.fnil.call(null,(function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_45699)?(column_45699 - (1)):(0))], null),cljs.core.fnil.call(null,(function (column__$1){
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
var G__45708 = arguments.length;
switch (G__45708) {
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
var len__5726__auto___45715 = arguments.length;
var i__5727__auto___45716 = (0);
while(true){
if((i__5727__auto___45716 < len__5726__auto___45715)){
args_arr__5751__auto__.push((arguments[i__5727__auto___45716]));

var G__45717 = (i__5727__auto___45716 + (1));
i__5727__auto___45716 = G__45717;
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
var s_45718 = (function (){var G__45709 = a;
if((!(typeof a === 'string'))){
return G__45709.toString();
} else {
return G__45709;
}
})();
var temp__5808__auto___45719 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5808__auto___45719 == null)){
} else {
var sm_data_45720 = temp__5808__auto___45719;
cljs.core.swap_BANG_.call(null,sm_data_45720,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__45700_SHARP_){
return (p1__45700_SHARP_ + s_45718.length);
}));
}

cljs.core.print.call(null,s_45718);

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

var seq__45710 = cljs.core.seq.call(null,xs);
var chunk__45711 = null;
var count__45712 = (0);
var i__45713 = (0);
while(true){
if((i__45713 < count__45712)){
var x = cljs.core._nth.call(null,chunk__45711,i__45713);
cljs.compiler.emits.call(null,x);


var G__45721 = seq__45710;
var G__45722 = chunk__45711;
var G__45723 = count__45712;
var G__45724 = (i__45713 + (1));
seq__45710 = G__45721;
chunk__45711 = G__45722;
count__45712 = G__45723;
i__45713 = G__45724;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__45710);
if(temp__5804__auto__){
var seq__45710__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45710__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__45710__$1);
var G__45725 = cljs.core.chunk_rest.call(null,seq__45710__$1);
var G__45726 = c__5525__auto__;
var G__45727 = cljs.core.count.call(null,c__5525__auto__);
var G__45728 = (0);
seq__45710 = G__45725;
chunk__45711 = G__45726;
count__45712 = G__45727;
i__45713 = G__45728;
continue;
} else {
var x = cljs.core.first.call(null,seq__45710__$1);
cljs.compiler.emits.call(null,x);


var G__45729 = cljs.core.next.call(null,seq__45710__$1);
var G__45730 = null;
var G__45731 = (0);
var G__45732 = (0);
seq__45710 = G__45729;
chunk__45711 = G__45730;
count__45712 = G__45731;
i__45713 = G__45732;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq45702){
var G__45703 = cljs.core.first.call(null,seq45702);
var seq45702__$1 = cljs.core.next.call(null,seq45702);
var G__45704 = cljs.core.first.call(null,seq45702__$1);
var seq45702__$2 = cljs.core.next.call(null,seq45702__$1);
var G__45705 = cljs.core.first.call(null,seq45702__$2);
var seq45702__$3 = cljs.core.next.call(null,seq45702__$2);
var G__45706 = cljs.core.first.call(null,seq45702__$3);
var seq45702__$4 = cljs.core.next.call(null,seq45702__$3);
var G__45707 = cljs.core.first.call(null,seq45702__$4);
var seq45702__$5 = cljs.core.next.call(null,seq45702__$4);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45703,G__45704,G__45705,G__45706,G__45707,seq45702__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__45733){
var map__45734 = p__45733;
var map__45734__$1 = cljs.core.__destructure_map.call(null,map__45734);
var m = map__45734__$1;
var gen_line = cljs.core.get.call(null,map__45734__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__45742 = arguments.length;
switch (G__45742) {
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
var len__5726__auto___45748 = arguments.length;
var i__5727__auto___45749 = (0);
while(true){
if((i__5727__auto___45749 < len__5726__auto___45748)){
args_arr__5751__auto__.push((arguments[i__5727__auto___45749]));

var G__45750 = (i__5727__auto___45749 + (1));
i__5727__auto___45749 = G__45750;
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

var seq__45743_45751 = cljs.core.seq.call(null,xs);
var chunk__45744_45752 = null;
var count__45745_45753 = (0);
var i__45746_45754 = (0);
while(true){
if((i__45746_45754 < count__45745_45753)){
var x_45755 = cljs.core._nth.call(null,chunk__45744_45752,i__45746_45754);
cljs.compiler.emits.call(null,x_45755);


var G__45756 = seq__45743_45751;
var G__45757 = chunk__45744_45752;
var G__45758 = count__45745_45753;
var G__45759 = (i__45746_45754 + (1));
seq__45743_45751 = G__45756;
chunk__45744_45752 = G__45757;
count__45745_45753 = G__45758;
i__45746_45754 = G__45759;
continue;
} else {
var temp__5804__auto___45760 = cljs.core.seq.call(null,seq__45743_45751);
if(temp__5804__auto___45760){
var seq__45743_45761__$1 = temp__5804__auto___45760;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45743_45761__$1)){
var c__5525__auto___45762 = cljs.core.chunk_first.call(null,seq__45743_45761__$1);
var G__45763 = cljs.core.chunk_rest.call(null,seq__45743_45761__$1);
var G__45764 = c__5525__auto___45762;
var G__45765 = cljs.core.count.call(null,c__5525__auto___45762);
var G__45766 = (0);
seq__45743_45751 = G__45763;
chunk__45744_45752 = G__45764;
count__45745_45753 = G__45765;
i__45746_45754 = G__45766;
continue;
} else {
var x_45767 = cljs.core.first.call(null,seq__45743_45761__$1);
cljs.compiler.emits.call(null,x_45767);


var G__45768 = cljs.core.next.call(null,seq__45743_45761__$1);
var G__45769 = null;
var G__45770 = (0);
var G__45771 = (0);
seq__45743_45751 = G__45768;
chunk__45744_45752 = G__45769;
count__45745_45753 = G__45770;
i__45746_45754 = G__45771;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq45736){
var G__45737 = cljs.core.first.call(null,seq45736);
var seq45736__$1 = cljs.core.next.call(null,seq45736);
var G__45738 = cljs.core.first.call(null,seq45736__$1);
var seq45736__$2 = cljs.core.next.call(null,seq45736__$1);
var G__45739 = cljs.core.first.call(null,seq45736__$2);
var seq45736__$3 = cljs.core.next.call(null,seq45736__$2);
var G__45740 = cljs.core.first.call(null,seq45736__$3);
var seq45736__$4 = cljs.core.next.call(null,seq45736__$3);
var G__45741 = cljs.core.first.call(null,seq45736__$4);
var seq45736__$5 = cljs.core.next.call(null,seq45736__$4);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45737,G__45738,G__45739,G__45740,G__45741,seq45736__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45772_45776 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45773_45777 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45774_45778 = true;
var _STAR_print_fn_STAR__temp_val__45775_45779 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45774_45778);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45775_45779);

try{cljs.compiler.emit.call(null,expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45773_45777);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45772_45776);
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
var vec__45780 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__45780,(0),null);
var name = cljs.core.nth.call(null,vec__45780,(1),null);
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
var vec__45783 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__45783,(0),null);
var flags = cljs.core.nth.call(null,vec__45783,(1),null);
var pattern = cljs.core.nth.call(null,vec__45783,(2),null);
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
return cljs.compiler.emit_js_object.call(null,items,(function (p1__45786_SHARP_){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__45786_SHARP_);
});
}));
} else {
return cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__45788){
var map__45789 = p__45788;
var map__45789__$1 = cljs.core.__destructure_map.call(null,map__45789);
var ast = map__45789__$1;
var info = cljs.core.get.call(null,map__45789__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__45789__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__45789__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5802__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5802__auto__)){
var const_expr = temp__5802__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__45790 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__45790__$1 = cljs.core.__destructure_map.call(null,map__45790);
var cenv = map__45790__$1;
var options = cljs.core.get.call(null,map__45790__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__45791 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__5000__auto__;
}
})())){
return clojure.set.difference.call(null,G__45791,cljs.analyzer.es5_allowed);
} else {
return G__45791;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__5002__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__45792 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__45792,reserved);
} else {
return G__45792;
}
})();
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__45793_45794 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__45793_45795__$1 = (((G__45793_45794 instanceof cljs.core.Keyword))?G__45793_45794.fqn:null);
switch (G__45793_45795__$1) {
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__45797){
var map__45798 = p__45797;
var map__45798__$1 = cljs.core.__destructure_map.call(null,map__45798);
var arg = map__45798__$1;
var env = cljs.core.get.call(null,map__45798__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__45798__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__45798__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__45798__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__45799 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__45799__$1 = cljs.core.__destructure_map.call(null,map__45799);
var name = cljs.core.get.call(null,map__45799__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__45800){
var map__45801 = p__45800;
var map__45801__$1 = cljs.core.__destructure_map.call(null,map__45801);
var expr = cljs.core.get.call(null,map__45801__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__45801__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__45801__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_.call(null,(function (p1__45802_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__45802_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__45803){
var map__45804 = p__45803;
var map__45804__$1 = cljs.core.__destructure_map.call(null,map__45804);
var env = cljs.core.get.call(null,map__45804__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__45804__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__45804__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__45805){
var map__45806 = p__45805;
var map__45806__$1 = cljs.core.__destructure_map.call(null,map__45806);
var items = cljs.core.get.call(null,map__45806__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__45806__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_.call(null,(function (p1__45807_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__45807_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__45808){
var map__45809 = p__45808;
var map__45809__$1 = cljs.core.__destructure_map.call(null,map__45809);
var items = cljs.core.get.call(null,map__45809__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__45809__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var temp__5804__auto___45832 = cljs.core.seq.call(null,items);
if(temp__5804__auto___45832){
var items_45833__$1 = temp__5804__auto___45832;
var vec__45810_45834 = items_45833__$1;
var seq__45811_45835 = cljs.core.seq.call(null,vec__45810_45834);
var first__45812_45836 = cljs.core.first.call(null,seq__45811_45835);
var seq__45811_45837__$1 = cljs.core.next.call(null,seq__45811_45835);
var vec__45813_45838 = first__45812_45836;
var k_45839 = cljs.core.nth.call(null,vec__45813_45838,(0),null);
var v_45840 = cljs.core.nth.call(null,vec__45813_45838,(1),null);
var r_45841 = seq__45811_45837__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_45839),"\": ",emit_js_object_val.call(null,v_45840));

var seq__45816_45842 = cljs.core.seq.call(null,r_45841);
var chunk__45817_45843 = null;
var count__45818_45844 = (0);
var i__45819_45845 = (0);
while(true){
if((i__45819_45845 < count__45818_45844)){
var vec__45826_45846 = cljs.core._nth.call(null,chunk__45817_45843,i__45819_45845);
var k_45847__$1 = cljs.core.nth.call(null,vec__45826_45846,(0),null);
var v_45848__$1 = cljs.core.nth.call(null,vec__45826_45846,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_45847__$1),"\": ",emit_js_object_val.call(null,v_45848__$1));


var G__45849 = seq__45816_45842;
var G__45850 = chunk__45817_45843;
var G__45851 = count__45818_45844;
var G__45852 = (i__45819_45845 + (1));
seq__45816_45842 = G__45849;
chunk__45817_45843 = G__45850;
count__45818_45844 = G__45851;
i__45819_45845 = G__45852;
continue;
} else {
var temp__5804__auto___45853__$1 = cljs.core.seq.call(null,seq__45816_45842);
if(temp__5804__auto___45853__$1){
var seq__45816_45854__$1 = temp__5804__auto___45853__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45816_45854__$1)){
var c__5525__auto___45855 = cljs.core.chunk_first.call(null,seq__45816_45854__$1);
var G__45856 = cljs.core.chunk_rest.call(null,seq__45816_45854__$1);
var G__45857 = c__5525__auto___45855;
var G__45858 = cljs.core.count.call(null,c__5525__auto___45855);
var G__45859 = (0);
seq__45816_45842 = G__45856;
chunk__45817_45843 = G__45857;
count__45818_45844 = G__45858;
i__45819_45845 = G__45859;
continue;
} else {
var vec__45829_45860 = cljs.core.first.call(null,seq__45816_45854__$1);
var k_45861__$1 = cljs.core.nth.call(null,vec__45829_45860,(0),null);
var v_45862__$1 = cljs.core.nth.call(null,vec__45829_45860,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_45861__$1),"\": ",emit_js_object_val.call(null,v_45862__$1));


var G__45863 = cljs.core.next.call(null,seq__45816_45854__$1);
var G__45864 = null;
var G__45865 = (0);
var G__45866 = (0);
seq__45816_45842 = G__45863;
chunk__45817_45843 = G__45864;
count__45818_45844 = G__45865;
i__45819_45845 = G__45866;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__45867){
var map__45868 = p__45867;
var map__45868__$1 = cljs.core.__destructure_map.call(null,map__45868);
var keys = cljs.core.get.call(null,map__45868__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__45868__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__45868__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__45869){
var map__45870 = p__45869;
var map__45870__$1 = cljs.core.__destructure_map.call(null,map__45870);
var items = cljs.core.get.call(null,map__45870__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__45870__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__45871){
var map__45872 = p__45871;
var map__45872__$1 = cljs.core.__destructure_map.call(null,map__45872);
var expr = cljs.core.get.call(null,map__45872__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__45873){
var map__45874 = p__45873;
var map__45874__$1 = cljs.core.__destructure_map.call(null,map__45874);
var form = cljs.core.get.call(null,map__45874__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__45874__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__45875 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__45875__$1 = cljs.core.__destructure_map.call(null,map__45875);
var op = cljs.core.get.call(null,map__45875__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__45875__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__45875__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__45876 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__45876__$1 = cljs.core.__destructure_map.call(null,map__45876);
var op = cljs.core.get.call(null,map__45876__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__45876__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__45876__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__45877){
var map__45878 = p__45877;
var map__45878__$1 = cljs.core.__destructure_map.call(null,map__45878);
var test = cljs.core.get.call(null,map__45878__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__45878__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__45878__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__45878__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__45878__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__45879){
var map__45880 = p__45879;
var map__45880__$1 = cljs.core.__destructure_map.call(null,map__45880);
var v = cljs.core.get.call(null,map__45880__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__45880__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__45880__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__45880__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__45881_45909 = cljs.core.seq.call(null,nodes);
var chunk__45882_45910 = null;
var count__45883_45911 = (0);
var i__45884_45912 = (0);
while(true){
if((i__45884_45912 < count__45883_45911)){
var map__45897_45913 = cljs.core._nth.call(null,chunk__45882_45910,i__45884_45912);
var map__45897_45914__$1 = cljs.core.__destructure_map.call(null,map__45897_45913);
var ts_45915 = cljs.core.get.call(null,map__45897_45914__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__45898_45916 = cljs.core.get.call(null,map__45897_45914__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__45898_45917__$1 = cljs.core.__destructure_map.call(null,map__45898_45916);
var then_45918 = cljs.core.get.call(null,map__45898_45917__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__45899_45919 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_45915));
var chunk__45900_45920 = null;
var count__45901_45921 = (0);
var i__45902_45922 = (0);
while(true){
if((i__45902_45922 < count__45901_45921)){
var test_45923 = cljs.core._nth.call(null,chunk__45900_45920,i__45902_45922);
cljs.compiler.emitln.call(null,"case ",test_45923,":");


var G__45924 = seq__45899_45919;
var G__45925 = chunk__45900_45920;
var G__45926 = count__45901_45921;
var G__45927 = (i__45902_45922 + (1));
seq__45899_45919 = G__45924;
chunk__45900_45920 = G__45925;
count__45901_45921 = G__45926;
i__45902_45922 = G__45927;
continue;
} else {
var temp__5804__auto___45928 = cljs.core.seq.call(null,seq__45899_45919);
if(temp__5804__auto___45928){
var seq__45899_45929__$1 = temp__5804__auto___45928;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45899_45929__$1)){
var c__5525__auto___45930 = cljs.core.chunk_first.call(null,seq__45899_45929__$1);
var G__45931 = cljs.core.chunk_rest.call(null,seq__45899_45929__$1);
var G__45932 = c__5525__auto___45930;
var G__45933 = cljs.core.count.call(null,c__5525__auto___45930);
var G__45934 = (0);
seq__45899_45919 = G__45931;
chunk__45900_45920 = G__45932;
count__45901_45921 = G__45933;
i__45902_45922 = G__45934;
continue;
} else {
var test_45935 = cljs.core.first.call(null,seq__45899_45929__$1);
cljs.compiler.emitln.call(null,"case ",test_45935,":");


var G__45936 = cljs.core.next.call(null,seq__45899_45929__$1);
var G__45937 = null;
var G__45938 = (0);
var G__45939 = (0);
seq__45899_45919 = G__45936;
chunk__45900_45920 = G__45937;
count__45901_45921 = G__45938;
i__45902_45922 = G__45939;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_45918);
} else {
cljs.compiler.emitln.call(null,then_45918);
}

cljs.compiler.emitln.call(null,"break;");


var G__45940 = seq__45881_45909;
var G__45941 = chunk__45882_45910;
var G__45942 = count__45883_45911;
var G__45943 = (i__45884_45912 + (1));
seq__45881_45909 = G__45940;
chunk__45882_45910 = G__45941;
count__45883_45911 = G__45942;
i__45884_45912 = G__45943;
continue;
} else {
var temp__5804__auto___45944 = cljs.core.seq.call(null,seq__45881_45909);
if(temp__5804__auto___45944){
var seq__45881_45945__$1 = temp__5804__auto___45944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45881_45945__$1)){
var c__5525__auto___45946 = cljs.core.chunk_first.call(null,seq__45881_45945__$1);
var G__45947 = cljs.core.chunk_rest.call(null,seq__45881_45945__$1);
var G__45948 = c__5525__auto___45946;
var G__45949 = cljs.core.count.call(null,c__5525__auto___45946);
var G__45950 = (0);
seq__45881_45909 = G__45947;
chunk__45882_45910 = G__45948;
count__45883_45911 = G__45949;
i__45884_45912 = G__45950;
continue;
} else {
var map__45903_45951 = cljs.core.first.call(null,seq__45881_45945__$1);
var map__45903_45952__$1 = cljs.core.__destructure_map.call(null,map__45903_45951);
var ts_45953 = cljs.core.get.call(null,map__45903_45952__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__45904_45954 = cljs.core.get.call(null,map__45903_45952__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__45904_45955__$1 = cljs.core.__destructure_map.call(null,map__45904_45954);
var then_45956 = cljs.core.get.call(null,map__45904_45955__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__45905_45957 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_45953));
var chunk__45906_45958 = null;
var count__45907_45959 = (0);
var i__45908_45960 = (0);
while(true){
if((i__45908_45960 < count__45907_45959)){
var test_45961 = cljs.core._nth.call(null,chunk__45906_45958,i__45908_45960);
cljs.compiler.emitln.call(null,"case ",test_45961,":");


var G__45962 = seq__45905_45957;
var G__45963 = chunk__45906_45958;
var G__45964 = count__45907_45959;
var G__45965 = (i__45908_45960 + (1));
seq__45905_45957 = G__45962;
chunk__45906_45958 = G__45963;
count__45907_45959 = G__45964;
i__45908_45960 = G__45965;
continue;
} else {
var temp__5804__auto___45966__$1 = cljs.core.seq.call(null,seq__45905_45957);
if(temp__5804__auto___45966__$1){
var seq__45905_45967__$1 = temp__5804__auto___45966__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45905_45967__$1)){
var c__5525__auto___45968 = cljs.core.chunk_first.call(null,seq__45905_45967__$1);
var G__45969 = cljs.core.chunk_rest.call(null,seq__45905_45967__$1);
var G__45970 = c__5525__auto___45968;
var G__45971 = cljs.core.count.call(null,c__5525__auto___45968);
var G__45972 = (0);
seq__45905_45957 = G__45969;
chunk__45906_45958 = G__45970;
count__45907_45959 = G__45971;
i__45908_45960 = G__45972;
continue;
} else {
var test_45973 = cljs.core.first.call(null,seq__45905_45967__$1);
cljs.compiler.emitln.call(null,"case ",test_45973,":");


var G__45974 = cljs.core.next.call(null,seq__45905_45967__$1);
var G__45975 = null;
var G__45976 = (0);
var G__45977 = (0);
seq__45905_45957 = G__45974;
chunk__45906_45958 = G__45975;
count__45907_45959 = G__45976;
i__45908_45960 = G__45977;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_45956);
} else {
cljs.compiler.emitln.call(null,then_45956);
}

cljs.compiler.emitln.call(null,"break;");


var G__45978 = cljs.core.next.call(null,seq__45881_45945__$1);
var G__45979 = null;
var G__45980 = (0);
var G__45981 = (0);
seq__45881_45909 = G__45978;
chunk__45882_45910 = G__45979;
count__45883_45911 = G__45980;
i__45884_45912 = G__45981;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__45982){
var map__45983 = p__45982;
var map__45983__$1 = cljs.core.__destructure_map.call(null,map__45983);
var throw$ = cljs.core.get.call(null,map__45983__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__45983__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__45985 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__45985,(0),null);
var rstr = cljs.core.nth.call(null,vec__45985,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,(function (p1__45984_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__45984_SHARP_);
}),clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__45988 = ["function(",clojure.string.join.call(null,",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__45988,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__45988;
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
return ["{",clojure.string.join.call(null,"|",cljs.core.map.call(null,(function (p1__45989_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__45989_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__45990 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__45991 = cljs.core.seq.call(null,vec__45990);
var first__45992 = cljs.core.first.call(null,seq__45991);
var seq__45991__$1 = cljs.core.next.call(null,seq__45991);
var p = first__45992;
var first__45992__$1 = cljs.core.first.call(null,seq__45991__$1);
var seq__45991__$2 = cljs.core.next.call(null,seq__45991__$1);
var ts = first__45992__$1;
var first__45992__$2 = cljs.core.first.call(null,seq__45991__$2);
var seq__45991__$3 = cljs.core.next.call(null,seq__45991__$2);
var n = first__45992__$2;
var xs = seq__45991__$3;
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
var vec__45993 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__45994 = cljs.core.seq.call(null,vec__45993);
var first__45995 = cljs.core.first.call(null,seq__45994);
var seq__45994__$1 = cljs.core.next.call(null,seq__45994);
var p = first__45995;
var first__45995__$1 = cljs.core.first.call(null,seq__45994__$1);
var seq__45994__$2 = cljs.core.next.call(null,seq__45994__$1);
var ts = first__45995__$1;
var xs = seq__45994__$2;
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
var G__45998 = arguments.length;
switch (G__45998) {
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
var vec__46006 = cljs.core.map.call(null,(function (p1__45996_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__45996_SHARP_);
} else {
return p1__45996_SHARP_;
}
}),clojure.string.split_lines.call(null,e));
var seq__46007 = cljs.core.seq.call(null,vec__46006);
var first__46008 = cljs.core.first.call(null,seq__46007);
var seq__46007__$1 = cljs.core.next.call(null,seq__46007);
var x = first__46008;
var ys = seq__46007__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__46009 = cljs.core.seq.call(null,ys);
var chunk__46010 = null;
var count__46011 = (0);
var i__46012 = (0);
while(true){
if((i__46012 < count__46011)){
var next_line = cljs.core._nth.call(null,chunk__46010,i__46012);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__46018 = seq__46009;
var G__46019 = chunk__46010;
var G__46020 = count__46011;
var G__46021 = (i__46012 + (1));
seq__46009 = G__46018;
chunk__46010 = G__46019;
count__46011 = G__46020;
i__46012 = G__46021;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__46009);
if(temp__5804__auto__){
var seq__46009__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46009__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__46009__$1);
var G__46022 = cljs.core.chunk_rest.call(null,seq__46009__$1);
var G__46023 = c__5525__auto__;
var G__46024 = cljs.core.count.call(null,c__5525__auto__);
var G__46025 = (0);
seq__46009 = G__46022;
chunk__46010 = G__46023;
count__46011 = G__46024;
i__46012 = G__46025;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__46009__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__46026 = cljs.core.next.call(null,seq__46009__$1);
var G__46027 = null;
var G__46028 = (0);
var G__46029 = (0);
seq__46009 = G__46026;
chunk__46010 = G__46027;
count__46011 = G__46028;
i__46012 = G__46029;
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

var seq__46013_46030 = cljs.core.seq.call(null,docs__$2);
var chunk__46014_46031 = null;
var count__46015_46032 = (0);
var i__46016_46033 = (0);
while(true){
if((i__46016_46033 < count__46015_46032)){
var e_46034 = cljs.core._nth.call(null,chunk__46014_46031,i__46016_46033);
if(cljs.core.truth_(e_46034)){
print_comment_lines.call(null,e_46034);
} else {
}


var G__46035 = seq__46013_46030;
var G__46036 = chunk__46014_46031;
var G__46037 = count__46015_46032;
var G__46038 = (i__46016_46033 + (1));
seq__46013_46030 = G__46035;
chunk__46014_46031 = G__46036;
count__46015_46032 = G__46037;
i__46016_46033 = G__46038;
continue;
} else {
var temp__5804__auto___46039 = cljs.core.seq.call(null,seq__46013_46030);
if(temp__5804__auto___46039){
var seq__46013_46040__$1 = temp__5804__auto___46039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46013_46040__$1)){
var c__5525__auto___46041 = cljs.core.chunk_first.call(null,seq__46013_46040__$1);
var G__46042 = cljs.core.chunk_rest.call(null,seq__46013_46040__$1);
var G__46043 = c__5525__auto___46041;
var G__46044 = cljs.core.count.call(null,c__5525__auto___46041);
var G__46045 = (0);
seq__46013_46030 = G__46042;
chunk__46014_46031 = G__46043;
count__46015_46032 = G__46044;
i__46016_46033 = G__46045;
continue;
} else {
var e_46046 = cljs.core.first.call(null,seq__46013_46040__$1);
if(cljs.core.truth_(e_46046)){
print_comment_lines.call(null,e_46046);
} else {
}


var G__46047 = cljs.core.next.call(null,seq__46013_46040__$1);
var G__46048 = null;
var G__46049 = (0);
var G__46050 = (0);
seq__46013_46030 = G__46047;
chunk__46014_46031 = G__46048;
count__46015_46032 = G__46049;
i__46016_46033 = G__46050;
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
var and__5000__auto__ = cljs.core.some.call(null,(function (p1__46052_SHARP_){
return goog.string.startsWith(p1__46052_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__46053){
var map__46054 = p__46053;
var map__46054__$1 = cljs.core.__destructure_map.call(null,map__46054);
var doc = cljs.core.get.call(null,map__46054__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__46054__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__46054__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.call(null,map__46054__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.call(null,map__46054__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__46054__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__46054__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__46054__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__46054__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__46054__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__46055){
var map__46056 = p__46055;
var map__46056__$1 = cljs.core.__destructure_map.call(null,map__46056);
var name = cljs.core.get.call(null,map__46056__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__46056__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__46056__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__46057_46081 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__46058_46082 = null;
var count__46059_46083 = (0);
var i__46060_46084 = (0);
while(true){
if((i__46060_46084 < count__46059_46083)){
var vec__46067_46085 = cljs.core._nth.call(null,chunk__46058_46082,i__46060_46084);
var i_46086 = cljs.core.nth.call(null,vec__46067_46085,(0),null);
var param_46087 = cljs.core.nth.call(null,vec__46067_46085,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_46087);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__46088 = seq__46057_46081;
var G__46089 = chunk__46058_46082;
var G__46090 = count__46059_46083;
var G__46091 = (i__46060_46084 + (1));
seq__46057_46081 = G__46088;
chunk__46058_46082 = G__46089;
count__46059_46083 = G__46090;
i__46060_46084 = G__46091;
continue;
} else {
var temp__5804__auto___46092 = cljs.core.seq.call(null,seq__46057_46081);
if(temp__5804__auto___46092){
var seq__46057_46093__$1 = temp__5804__auto___46092;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46057_46093__$1)){
var c__5525__auto___46094 = cljs.core.chunk_first.call(null,seq__46057_46093__$1);
var G__46095 = cljs.core.chunk_rest.call(null,seq__46057_46093__$1);
var G__46096 = c__5525__auto___46094;
var G__46097 = cljs.core.count.call(null,c__5525__auto___46094);
var G__46098 = (0);
seq__46057_46081 = G__46095;
chunk__46058_46082 = G__46096;
count__46059_46083 = G__46097;
i__46060_46084 = G__46098;
continue;
} else {
var vec__46070_46099 = cljs.core.first.call(null,seq__46057_46093__$1);
var i_46100 = cljs.core.nth.call(null,vec__46070_46099,(0),null);
var param_46101 = cljs.core.nth.call(null,vec__46070_46099,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_46101);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__46102 = cljs.core.next.call(null,seq__46057_46093__$1);
var G__46103 = null;
var G__46104 = (0);
var G__46105 = (0);
seq__46057_46081 = G__46102;
chunk__46058_46082 = G__46103;
count__46059_46083 = G__46104;
i__46060_46084 = G__46105;
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

var seq__46073_46106 = cljs.core.seq.call(null,params);
var chunk__46074_46107 = null;
var count__46075_46108 = (0);
var i__46076_46109 = (0);
while(true){
if((i__46076_46109 < count__46075_46108)){
var param_46110 = cljs.core._nth.call(null,chunk__46074_46107,i__46076_46109);
cljs.compiler.emit.call(null,param_46110);

if(cljs.core._EQ_.call(null,param_46110,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__46111 = seq__46073_46106;
var G__46112 = chunk__46074_46107;
var G__46113 = count__46075_46108;
var G__46114 = (i__46076_46109 + (1));
seq__46073_46106 = G__46111;
chunk__46074_46107 = G__46112;
count__46075_46108 = G__46113;
i__46076_46109 = G__46114;
continue;
} else {
var temp__5804__auto___46115 = cljs.core.seq.call(null,seq__46073_46106);
if(temp__5804__auto___46115){
var seq__46073_46116__$1 = temp__5804__auto___46115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46073_46116__$1)){
var c__5525__auto___46117 = cljs.core.chunk_first.call(null,seq__46073_46116__$1);
var G__46118 = cljs.core.chunk_rest.call(null,seq__46073_46116__$1);
var G__46119 = c__5525__auto___46117;
var G__46120 = cljs.core.count.call(null,c__5525__auto___46117);
var G__46121 = (0);
seq__46073_46106 = G__46118;
chunk__46074_46107 = G__46119;
count__46075_46108 = G__46120;
i__46076_46109 = G__46121;
continue;
} else {
var param_46122 = cljs.core.first.call(null,seq__46073_46116__$1);
cljs.compiler.emit.call(null,param_46122);

if(cljs.core._EQ_.call(null,param_46122,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__46123 = cljs.core.next.call(null,seq__46073_46116__$1);
var G__46124 = null;
var G__46125 = (0);
var G__46126 = (0);
seq__46073_46106 = G__46123;
chunk__46074_46107 = G__46124;
count__46075_46108 = G__46125;
i__46076_46109 = G__46126;
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

var seq__46077_46127 = cljs.core.seq.call(null,params);
var chunk__46078_46128 = null;
var count__46079_46129 = (0);
var i__46080_46130 = (0);
while(true){
if((i__46080_46130 < count__46079_46129)){
var param_46131 = cljs.core._nth.call(null,chunk__46078_46128,i__46080_46130);
cljs.compiler.emit.call(null,param_46131);

if(cljs.core._EQ_.call(null,param_46131,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__46132 = seq__46077_46127;
var G__46133 = chunk__46078_46128;
var G__46134 = count__46079_46129;
var G__46135 = (i__46080_46130 + (1));
seq__46077_46127 = G__46132;
chunk__46078_46128 = G__46133;
count__46079_46129 = G__46134;
i__46080_46130 = G__46135;
continue;
} else {
var temp__5804__auto___46136 = cljs.core.seq.call(null,seq__46077_46127);
if(temp__5804__auto___46136){
var seq__46077_46137__$1 = temp__5804__auto___46136;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46077_46137__$1)){
var c__5525__auto___46138 = cljs.core.chunk_first.call(null,seq__46077_46137__$1);
var G__46139 = cljs.core.chunk_rest.call(null,seq__46077_46137__$1);
var G__46140 = c__5525__auto___46138;
var G__46141 = cljs.core.count.call(null,c__5525__auto___46138);
var G__46142 = (0);
seq__46077_46127 = G__46139;
chunk__46078_46128 = G__46140;
count__46079_46129 = G__46141;
i__46080_46130 = G__46142;
continue;
} else {
var param_46143 = cljs.core.first.call(null,seq__46077_46137__$1);
cljs.compiler.emit.call(null,param_46143);

if(cljs.core._EQ_.call(null,param_46143,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__46144 = cljs.core.next.call(null,seq__46077_46137__$1);
var G__46145 = null;
var G__46146 = (0);
var G__46147 = (0);
seq__46077_46127 = G__46144;
chunk__46078_46128 = G__46145;
count__46079_46129 = G__46146;
i__46080_46130 = G__46147;
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
var seq__46148 = cljs.core.seq.call(null,params);
var chunk__46149 = null;
var count__46150 = (0);
var i__46151 = (0);
while(true){
if((i__46151 < count__46150)){
var param = cljs.core._nth.call(null,chunk__46149,i__46151);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__46152 = seq__46148;
var G__46153 = chunk__46149;
var G__46154 = count__46150;
var G__46155 = (i__46151 + (1));
seq__46148 = G__46152;
chunk__46149 = G__46153;
count__46150 = G__46154;
i__46151 = G__46155;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__46148);
if(temp__5804__auto__){
var seq__46148__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46148__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__46148__$1);
var G__46156 = cljs.core.chunk_rest.call(null,seq__46148__$1);
var G__46157 = c__5525__auto__;
var G__46158 = cljs.core.count.call(null,c__5525__auto__);
var G__46159 = (0);
seq__46148 = G__46156;
chunk__46149 = G__46157;
count__46150 = G__46158;
i__46151 = G__46159;
continue;
} else {
var param = cljs.core.first.call(null,seq__46148__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__46160 = cljs.core.next.call(null,seq__46148__$1);
var G__46161 = null;
var G__46162 = (0);
var G__46163 = (0);
seq__46148 = G__46160;
chunk__46149 = G__46161;
count__46150 = G__46162;
i__46151 = G__46163;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__46164){
var map__46165 = p__46164;
var map__46165__$1 = cljs.core.__destructure_map.call(null,map__46165);
var expr = cljs.core.get.call(null,map__46165__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__46165__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__46165__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__46165__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__46165__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__46165__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__46166){
var map__46167 = p__46166;
var map__46167__$1 = cljs.core.__destructure_map.call(null,map__46167);
var f = map__46167__$1;
var expr = cljs.core.get.call(null,map__46167__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__46167__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__46167__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__46167__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__46167__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__46167__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__46167__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__46167__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_46176__$1 = (function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_46177 = cljs.compiler.munge.call(null,name_46176__$1);
var delegate_name_46178 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_46177),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_46178," = function (");

var seq__46168_46179 = cljs.core.seq.call(null,params);
var chunk__46169_46180 = null;
var count__46170_46181 = (0);
var i__46171_46182 = (0);
while(true){
if((i__46171_46182 < count__46170_46181)){
var param_46183 = cljs.core._nth.call(null,chunk__46169_46180,i__46171_46182);
cljs.compiler.emit.call(null,param_46183);

if(cljs.core._EQ_.call(null,param_46183,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__46184 = seq__46168_46179;
var G__46185 = chunk__46169_46180;
var G__46186 = count__46170_46181;
var G__46187 = (i__46171_46182 + (1));
seq__46168_46179 = G__46184;
chunk__46169_46180 = G__46185;
count__46170_46181 = G__46186;
i__46171_46182 = G__46187;
continue;
} else {
var temp__5804__auto___46188 = cljs.core.seq.call(null,seq__46168_46179);
if(temp__5804__auto___46188){
var seq__46168_46189__$1 = temp__5804__auto___46188;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46168_46189__$1)){
var c__5525__auto___46190 = cljs.core.chunk_first.call(null,seq__46168_46189__$1);
var G__46191 = cljs.core.chunk_rest.call(null,seq__46168_46189__$1);
var G__46192 = c__5525__auto___46190;
var G__46193 = cljs.core.count.call(null,c__5525__auto___46190);
var G__46194 = (0);
seq__46168_46179 = G__46191;
chunk__46169_46180 = G__46192;
count__46170_46181 = G__46193;
i__46171_46182 = G__46194;
continue;
} else {
var param_46195 = cljs.core.first.call(null,seq__46168_46189__$1);
cljs.compiler.emit.call(null,param_46195);

if(cljs.core._EQ_.call(null,param_46195,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__46196 = cljs.core.next.call(null,seq__46168_46189__$1);
var G__46197 = null;
var G__46198 = (0);
var G__46199 = (0);
seq__46168_46179 = G__46196;
chunk__46169_46180 = G__46197;
count__46170_46181 = G__46198;
i__46171_46182 = G__46199;
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

cljs.compiler.emitln.call(null,"var ",mname_46177," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_46200 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_46200,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_46178,".call(this,");

var seq__46172_46201 = cljs.core.seq.call(null,params);
var chunk__46173_46202 = null;
var count__46174_46203 = (0);
var i__46175_46204 = (0);
while(true){
if((i__46175_46204 < count__46174_46203)){
var param_46205 = cljs.core._nth.call(null,chunk__46173_46202,i__46175_46204);
cljs.compiler.emit.call(null,param_46205);

if(cljs.core._EQ_.call(null,param_46205,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__46206 = seq__46172_46201;
var G__46207 = chunk__46173_46202;
var G__46208 = count__46174_46203;
var G__46209 = (i__46175_46204 + (1));
seq__46172_46201 = G__46206;
chunk__46173_46202 = G__46207;
count__46174_46203 = G__46208;
i__46175_46204 = G__46209;
continue;
} else {
var temp__5804__auto___46210 = cljs.core.seq.call(null,seq__46172_46201);
if(temp__5804__auto___46210){
var seq__46172_46211__$1 = temp__5804__auto___46210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46172_46211__$1)){
var c__5525__auto___46212 = cljs.core.chunk_first.call(null,seq__46172_46211__$1);
var G__46213 = cljs.core.chunk_rest.call(null,seq__46172_46211__$1);
var G__46214 = c__5525__auto___46212;
var G__46215 = cljs.core.count.call(null,c__5525__auto___46212);
var G__46216 = (0);
seq__46172_46201 = G__46213;
chunk__46173_46202 = G__46214;
count__46174_46203 = G__46215;
i__46175_46204 = G__46216;
continue;
} else {
var param_46217 = cljs.core.first.call(null,seq__46172_46211__$1);
cljs.compiler.emit.call(null,param_46217);

if(cljs.core._EQ_.call(null,param_46217,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__46218 = cljs.core.next.call(null,seq__46172_46211__$1);
var G__46219 = null;
var G__46220 = (0);
var G__46221 = (0);
seq__46172_46201 = G__46218;
chunk__46173_46202 = G__46219;
count__46174_46203 = G__46220;
i__46175_46204 = G__46221;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_46177,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_46177,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_46176__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_46177,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_46178,";");

cljs.compiler.emitln.call(null,"return ",mname_46177,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__46225){
var map__46226 = p__46225;
var map__46226__$1 = cljs.core.__destructure_map.call(null,map__46226);
var variadic = cljs.core.get.call(null,map__46226__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__46226__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__46226__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__46226__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__46226__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__46226__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.call(null,map__46226__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.call(null,map__46226__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,(function (p1__46222_SHARP_){
var and__5000__auto__ = p1__46222_SHARP_;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__46222_SHARP_));
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
var name_46278__$1 = (function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_46279 = cljs.compiler.munge.call(null,name_46278__$1);
var maxparams_46280 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_46281 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_46279),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_46282 = cljs.core.sort_by.call(null,(function (p1__46223_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__46223_SHARP_)));
}),cljs.core.seq.call(null,mmap_46281));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_46279," = null;");

var seq__46227_46283 = cljs.core.seq.call(null,ms_46282);
var chunk__46228_46284 = null;
var count__46229_46285 = (0);
var i__46230_46286 = (0);
while(true){
if((i__46230_46286 < count__46229_46285)){
var vec__46237_46287 = cljs.core._nth.call(null,chunk__46228_46284,i__46230_46286);
var n_46288 = cljs.core.nth.call(null,vec__46237_46287,(0),null);
var meth_46289 = cljs.core.nth.call(null,vec__46237_46287,(1),null);
cljs.compiler.emits.call(null,"var ",n_46288," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_46289))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_46289);
} else {
cljs.compiler.emit_fn_method.call(null,meth_46289);
}

cljs.compiler.emitln.call(null,";");


var G__46290 = seq__46227_46283;
var G__46291 = chunk__46228_46284;
var G__46292 = count__46229_46285;
var G__46293 = (i__46230_46286 + (1));
seq__46227_46283 = G__46290;
chunk__46228_46284 = G__46291;
count__46229_46285 = G__46292;
i__46230_46286 = G__46293;
continue;
} else {
var temp__5804__auto___46294 = cljs.core.seq.call(null,seq__46227_46283);
if(temp__5804__auto___46294){
var seq__46227_46295__$1 = temp__5804__auto___46294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46227_46295__$1)){
var c__5525__auto___46296 = cljs.core.chunk_first.call(null,seq__46227_46295__$1);
var G__46297 = cljs.core.chunk_rest.call(null,seq__46227_46295__$1);
var G__46298 = c__5525__auto___46296;
var G__46299 = cljs.core.count.call(null,c__5525__auto___46296);
var G__46300 = (0);
seq__46227_46283 = G__46297;
chunk__46228_46284 = G__46298;
count__46229_46285 = G__46299;
i__46230_46286 = G__46300;
continue;
} else {
var vec__46240_46301 = cljs.core.first.call(null,seq__46227_46295__$1);
var n_46302 = cljs.core.nth.call(null,vec__46240_46301,(0),null);
var meth_46303 = cljs.core.nth.call(null,vec__46240_46301,(1),null);
cljs.compiler.emits.call(null,"var ",n_46302," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_46303))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_46303);
} else {
cljs.compiler.emit_fn_method.call(null,meth_46303);
}

cljs.compiler.emitln.call(null,";");


var G__46304 = cljs.core.next.call(null,seq__46227_46295__$1);
var G__46305 = null;
var G__46306 = (0);
var G__46307 = (0);
seq__46227_46283 = G__46304;
chunk__46228_46284 = G__46305;
count__46229_46285 = G__46306;
i__46230_46286 = G__46307;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_46279," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_46280),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_46280)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_46280));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__46243_46308 = cljs.core.seq.call(null,ms_46282);
var chunk__46244_46309 = null;
var count__46245_46310 = (0);
var i__46246_46311 = (0);
while(true){
if((i__46246_46311 < count__46245_46310)){
var vec__46253_46312 = cljs.core._nth.call(null,chunk__46244_46309,i__46246_46311);
var n_46313 = cljs.core.nth.call(null,vec__46253_46312,(0),null);
var meth_46314 = cljs.core.nth.call(null,vec__46253_46312,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_46314))){
cljs.compiler.emitln.call(null,"default:");

var restarg_46315 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_46315," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_46316 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_46315," = new cljs.core.IndexedSeq(",a_46316,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_46313,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_46280)),(((cljs.core.count.call(null,maxparams_46280) > (1)))?", ":null),restarg_46315,");");
} else {
var pcnt_46317 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_46314));
cljs.compiler.emitln.call(null,"case ",pcnt_46317,":");

cljs.compiler.emitln.call(null,"return ",n_46313,".call(this",(((pcnt_46317 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_46317,maxparams_46280)),null,(1),null)),(2),null))),");");
}


var G__46318 = seq__46243_46308;
var G__46319 = chunk__46244_46309;
var G__46320 = count__46245_46310;
var G__46321 = (i__46246_46311 + (1));
seq__46243_46308 = G__46318;
chunk__46244_46309 = G__46319;
count__46245_46310 = G__46320;
i__46246_46311 = G__46321;
continue;
} else {
var temp__5804__auto___46322 = cljs.core.seq.call(null,seq__46243_46308);
if(temp__5804__auto___46322){
var seq__46243_46323__$1 = temp__5804__auto___46322;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46243_46323__$1)){
var c__5525__auto___46324 = cljs.core.chunk_first.call(null,seq__46243_46323__$1);
var G__46325 = cljs.core.chunk_rest.call(null,seq__46243_46323__$1);
var G__46326 = c__5525__auto___46324;
var G__46327 = cljs.core.count.call(null,c__5525__auto___46324);
var G__46328 = (0);
seq__46243_46308 = G__46325;
chunk__46244_46309 = G__46326;
count__46245_46310 = G__46327;
i__46246_46311 = G__46328;
continue;
} else {
var vec__46256_46329 = cljs.core.first.call(null,seq__46243_46323__$1);
var n_46330 = cljs.core.nth.call(null,vec__46256_46329,(0),null);
var meth_46331 = cljs.core.nth.call(null,vec__46256_46329,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_46331))){
cljs.compiler.emitln.call(null,"default:");

var restarg_46332 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_46332," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_46333 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_46332," = new cljs.core.IndexedSeq(",a_46333,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_46330,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_46280)),(((cljs.core.count.call(null,maxparams_46280) > (1)))?", ":null),restarg_46332,");");
} else {
var pcnt_46334 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_46331));
cljs.compiler.emitln.call(null,"case ",pcnt_46334,":");

cljs.compiler.emitln.call(null,"return ",n_46330,".call(this",(((pcnt_46334 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_46334,maxparams_46280)),null,(1),null)),(2),null))),");");
}


var G__46335 = cljs.core.next.call(null,seq__46243_46323__$1);
var G__46336 = null;
var G__46337 = (0);
var G__46338 = (0);
seq__46243_46308 = G__46335;
chunk__46244_46309 = G__46336;
count__46245_46310 = G__46337;
i__46246_46311 = G__46338;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_46339 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_46282)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_46339,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_46279,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_46279,".cljs$lang$applyTo = ",cljs.core.some.call(null,(function (p1__46224_SHARP_){
var vec__46259 = p1__46224_SHARP_;
var n = cljs.core.nth.call(null,vec__46259,(0),null);
var m = cljs.core.nth.call(null,vec__46259,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_46282),".cljs$lang$applyTo;");
} else {
}

var seq__46262_46340 = cljs.core.seq.call(null,ms_46282);
var chunk__46263_46341 = null;
var count__46264_46342 = (0);
var i__46265_46343 = (0);
while(true){
if((i__46265_46343 < count__46264_46342)){
var vec__46272_46344 = cljs.core._nth.call(null,chunk__46263_46341,i__46265_46343);
var n_46345 = cljs.core.nth.call(null,vec__46272_46344,(0),null);
var meth_46346 = cljs.core.nth.call(null,vec__46272_46344,(1),null);
var c_46347 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_46346));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_46346))){
cljs.compiler.emitln.call(null,mname_46279,".cljs$core$IFn$_invoke$arity$variadic = ",n_46345,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_46279,".cljs$core$IFn$_invoke$arity$",c_46347," = ",n_46345,";");
}


var G__46348 = seq__46262_46340;
var G__46349 = chunk__46263_46341;
var G__46350 = count__46264_46342;
var G__46351 = (i__46265_46343 + (1));
seq__46262_46340 = G__46348;
chunk__46263_46341 = G__46349;
count__46264_46342 = G__46350;
i__46265_46343 = G__46351;
continue;
} else {
var temp__5804__auto___46352 = cljs.core.seq.call(null,seq__46262_46340);
if(temp__5804__auto___46352){
var seq__46262_46353__$1 = temp__5804__auto___46352;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46262_46353__$1)){
var c__5525__auto___46354 = cljs.core.chunk_first.call(null,seq__46262_46353__$1);
var G__46355 = cljs.core.chunk_rest.call(null,seq__46262_46353__$1);
var G__46356 = c__5525__auto___46354;
var G__46357 = cljs.core.count.call(null,c__5525__auto___46354);
var G__46358 = (0);
seq__46262_46340 = G__46355;
chunk__46263_46341 = G__46356;
count__46264_46342 = G__46357;
i__46265_46343 = G__46358;
continue;
} else {
var vec__46275_46359 = cljs.core.first.call(null,seq__46262_46353__$1);
var n_46360 = cljs.core.nth.call(null,vec__46275_46359,(0),null);
var meth_46361 = cljs.core.nth.call(null,vec__46275_46359,(1),null);
var c_46362 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_46361));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_46361))){
cljs.compiler.emitln.call(null,mname_46279,".cljs$core$IFn$_invoke$arity$variadic = ",n_46360,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_46279,".cljs$core$IFn$_invoke$arity$",c_46362," = ",n_46360,";");
}


var G__46363 = cljs.core.next.call(null,seq__46262_46353__$1);
var G__46364 = null;
var G__46365 = (0);
var G__46366 = (0);
seq__46262_46340 = G__46363;
chunk__46263_46341 = G__46364;
count__46264_46342 = G__46365;
i__46265_46343 = G__46366;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_46279,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__46367){
var map__46368 = p__46367;
var map__46368__$1 = cljs.core.__destructure_map.call(null,map__46368);
var statements = cljs.core.get.call(null,map__46368__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__46368__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__46368__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__46369_46373 = cljs.core.seq.call(null,statements);
var chunk__46370_46374 = null;
var count__46371_46375 = (0);
var i__46372_46376 = (0);
while(true){
if((i__46372_46376 < count__46371_46375)){
var s_46377 = cljs.core._nth.call(null,chunk__46370_46374,i__46372_46376);
cljs.compiler.emitln.call(null,s_46377);


var G__46378 = seq__46369_46373;
var G__46379 = chunk__46370_46374;
var G__46380 = count__46371_46375;
var G__46381 = (i__46372_46376 + (1));
seq__46369_46373 = G__46378;
chunk__46370_46374 = G__46379;
count__46371_46375 = G__46380;
i__46372_46376 = G__46381;
continue;
} else {
var temp__5804__auto___46382 = cljs.core.seq.call(null,seq__46369_46373);
if(temp__5804__auto___46382){
var seq__46369_46383__$1 = temp__5804__auto___46382;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46369_46383__$1)){
var c__5525__auto___46384 = cljs.core.chunk_first.call(null,seq__46369_46383__$1);
var G__46385 = cljs.core.chunk_rest.call(null,seq__46369_46383__$1);
var G__46386 = c__5525__auto___46384;
var G__46387 = cljs.core.count.call(null,c__5525__auto___46384);
var G__46388 = (0);
seq__46369_46373 = G__46385;
chunk__46370_46374 = G__46386;
count__46371_46375 = G__46387;
i__46372_46376 = G__46388;
continue;
} else {
var s_46389 = cljs.core.first.call(null,seq__46369_46383__$1);
cljs.compiler.emitln.call(null,s_46389);


var G__46390 = cljs.core.next.call(null,seq__46369_46383__$1);
var G__46391 = null;
var G__46392 = (0);
var G__46393 = (0);
seq__46369_46373 = G__46390;
chunk__46370_46374 = G__46391;
count__46371_46375 = G__46392;
i__46372_46376 = G__46393;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__46394){
var map__46395 = p__46394;
var map__46395__$1 = cljs.core.__destructure_map.call(null,map__46395);
var try$ = cljs.core.get.call(null,map__46395__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__46395__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__46395__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__46395__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__46395__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__46396,is_loop){
var map__46397 = p__46396;
var map__46397__$1 = cljs.core.__destructure_map.call(null,map__46397);
var expr = cljs.core.get.call(null,map__46397__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__46397__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__46397__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__46398_46408 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__46399_46409 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,(function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__46399_46409);

try{var seq__46400_46410 = cljs.core.seq.call(null,bindings);
var chunk__46401_46411 = null;
var count__46402_46412 = (0);
var i__46403_46413 = (0);
while(true){
if((i__46403_46413 < count__46402_46412)){
var map__46406_46414 = cljs.core._nth.call(null,chunk__46401_46411,i__46403_46413);
var map__46406_46415__$1 = cljs.core.__destructure_map.call(null,map__46406_46414);
var binding_46416 = map__46406_46415__$1;
var init_46417 = cljs.core.get.call(null,map__46406_46415__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_46416);

cljs.compiler.emitln.call(null," = ",init_46417,";");


var G__46418 = seq__46400_46410;
var G__46419 = chunk__46401_46411;
var G__46420 = count__46402_46412;
var G__46421 = (i__46403_46413 + (1));
seq__46400_46410 = G__46418;
chunk__46401_46411 = G__46419;
count__46402_46412 = G__46420;
i__46403_46413 = G__46421;
continue;
} else {
var temp__5804__auto___46422 = cljs.core.seq.call(null,seq__46400_46410);
if(temp__5804__auto___46422){
var seq__46400_46423__$1 = temp__5804__auto___46422;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46400_46423__$1)){
var c__5525__auto___46424 = cljs.core.chunk_first.call(null,seq__46400_46423__$1);
var G__46425 = cljs.core.chunk_rest.call(null,seq__46400_46423__$1);
var G__46426 = c__5525__auto___46424;
var G__46427 = cljs.core.count.call(null,c__5525__auto___46424);
var G__46428 = (0);
seq__46400_46410 = G__46425;
chunk__46401_46411 = G__46426;
count__46402_46412 = G__46427;
i__46403_46413 = G__46428;
continue;
} else {
var map__46407_46429 = cljs.core.first.call(null,seq__46400_46423__$1);
var map__46407_46430__$1 = cljs.core.__destructure_map.call(null,map__46407_46429);
var binding_46431 = map__46407_46430__$1;
var init_46432 = cljs.core.get.call(null,map__46407_46430__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_46431);

cljs.compiler.emitln.call(null," = ",init_46432,";");


var G__46433 = cljs.core.next.call(null,seq__46400_46423__$1);
var G__46434 = null;
var G__46435 = (0);
var G__46436 = (0);
seq__46400_46410 = G__46433;
chunk__46401_46411 = G__46434;
count__46402_46412 = G__46435;
i__46403_46413 = G__46436;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__46398_46408);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__46437){
var map__46438 = p__46437;
var map__46438__$1 = cljs.core.__destructure_map.call(null,map__46438);
var frame = cljs.core.get.call(null,map__46438__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__46438__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__46438__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__5593__auto___46439 = cljs.core.count.call(null,exprs);
var i_46440 = (0);
while(true){
if((i_46440 < n__5593__auto___46439)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_46440)," = ",exprs.call(null,i_46440),";");

var G__46441 = (i_46440 + (1));
i_46440 = G__46441;
continue;
} else {
}
break;
}

var n__5593__auto___46442 = cljs.core.count.call(null,exprs);
var i_46443 = (0);
while(true){
if((i_46443 < n__5593__auto___46442)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_46443))," = ",temps.call(null,i_46443),";");

var G__46444 = (i_46443 + (1));
i_46443 = G__46444;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__46445){
var map__46446 = p__46445;
var map__46446__$1 = cljs.core.__destructure_map.call(null,map__46446);
var expr = cljs.core.get.call(null,map__46446__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__46446__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__46446__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__46447_46455 = cljs.core.seq.call(null,bindings);
var chunk__46448_46456 = null;
var count__46449_46457 = (0);
var i__46450_46458 = (0);
while(true){
if((i__46450_46458 < count__46449_46457)){
var map__46453_46459 = cljs.core._nth.call(null,chunk__46448_46456,i__46450_46458);
var map__46453_46460__$1 = cljs.core.__destructure_map.call(null,map__46453_46459);
var binding_46461 = map__46453_46460__$1;
var init_46462 = cljs.core.get.call(null,map__46453_46460__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_46461)," = ",init_46462,";");


var G__46463 = seq__46447_46455;
var G__46464 = chunk__46448_46456;
var G__46465 = count__46449_46457;
var G__46466 = (i__46450_46458 + (1));
seq__46447_46455 = G__46463;
chunk__46448_46456 = G__46464;
count__46449_46457 = G__46465;
i__46450_46458 = G__46466;
continue;
} else {
var temp__5804__auto___46467 = cljs.core.seq.call(null,seq__46447_46455);
if(temp__5804__auto___46467){
var seq__46447_46468__$1 = temp__5804__auto___46467;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46447_46468__$1)){
var c__5525__auto___46469 = cljs.core.chunk_first.call(null,seq__46447_46468__$1);
var G__46470 = cljs.core.chunk_rest.call(null,seq__46447_46468__$1);
var G__46471 = c__5525__auto___46469;
var G__46472 = cljs.core.count.call(null,c__5525__auto___46469);
var G__46473 = (0);
seq__46447_46455 = G__46470;
chunk__46448_46456 = G__46471;
count__46449_46457 = G__46472;
i__46450_46458 = G__46473;
continue;
} else {
var map__46454_46474 = cljs.core.first.call(null,seq__46447_46468__$1);
var map__46454_46475__$1 = cljs.core.__destructure_map.call(null,map__46454_46474);
var binding_46476 = map__46454_46475__$1;
var init_46477 = cljs.core.get.call(null,map__46454_46475__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_46476)," = ",init_46477,";");


var G__46478 = cljs.core.next.call(null,seq__46447_46468__$1);
var G__46479 = null;
var G__46480 = (0);
var G__46481 = (0);
seq__46447_46455 = G__46478;
chunk__46448_46456 = G__46479;
count__46449_46457 = G__46480;
i__46450_46458 = G__46481;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__46484){
var map__46485 = p__46484;
var map__46485__$1 = cljs.core.__destructure_map.call(null,map__46485);
var expr = map__46485__$1;
var f = cljs.core.get.call(null,map__46485__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__46485__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__46485__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__46486 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__46482_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__46482_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__46483_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__46483_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__46486,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__46486,(1),null);
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
var pimpl_46489 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_46489,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_46490 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_46490,args)),(((mfa_46490 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_46490,args)),"], 0))");
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
var fprop_46491 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.call(null,"(",f__$1,fprop_46491," ? ",f__$1,fprop_46491,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_46491," ? ",f__$1,fprop_46491,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__46492){
var map__46493 = p__46492;
var map__46493__$1 = cljs.core.__destructure_map.call(null,map__46493);
var ctor = cljs.core.get.call(null,map__46493__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__46493__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__46493__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__46494){
var map__46495 = p__46494;
var map__46495__$1 = cljs.core.__destructure_map.call(null,map__46495);
var target = cljs.core.get.call(null,map__46495__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__46495__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__46495__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__46496_SHARP_){
return ["['",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46496_SHARP_),"']"].join('');
}),xs));
} else {
return null;
}
});
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
var vec__46497 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib);
var lib_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__46497,(0),null);
var sublib = cljs.core.nth.call(null,vec__46497,(1),null);
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
var map__46500 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__46500__$1 = cljs.core.__destructure_map.call(null,map__46500);
var options = cljs.core.get.call(null,map__46500__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__46500__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__46501 = options;
var map__46501__$1 = cljs.core.__destructure_map.call(null,map__46501);
var target = cljs.core.get.call(null,map__46501__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.call(null,map__46501__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.call(null,map__46501__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__46502 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__46508 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__46508__$1 = cljs.core.__destructure_map.call(null,map__46508);
var node_libs = cljs.core.get.call(null,map__46508__$1,true);
var libs_to_load = cljs.core.get.call(null,map__46508__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__46502,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__46502,(1),null);
var vec__46505 = (function (){var map__46509 = cljs.core.group_by.call(null,cljs.analyzer.goog_module_dep_QMARK_,libs_to_load);
var map__46509__$1 = cljs.core.__destructure_map.call(null,map__46509);
var goog_modules = cljs.core.get.call(null,map__46509__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__46509__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog_modules,libs_to_load__$1], null);
})();
var goog_modules = cljs.core.nth.call(null,vec__46505,(0),null);
var libs_to_load__$1 = cljs.core.nth.call(null,vec__46505,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__46510_46554 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__46511_46555 = null;
var count__46512_46556 = (0);
var i__46513_46557 = (0);
while(true){
if((i__46513_46557 < count__46512_46556)){
var lib_46558 = cljs.core._nth.call(null,chunk__46511_46555,i__46513_46557);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_46558)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_46558),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_46558),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_46558),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_46558),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_46558,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_46558),"');");
}

}
}
}


var G__46559 = seq__46510_46554;
var G__46560 = chunk__46511_46555;
var G__46561 = count__46512_46556;
var G__46562 = (i__46513_46557 + (1));
seq__46510_46554 = G__46559;
chunk__46511_46555 = G__46560;
count__46512_46556 = G__46561;
i__46513_46557 = G__46562;
continue;
} else {
var temp__5804__auto___46563 = cljs.core.seq.call(null,seq__46510_46554);
if(temp__5804__auto___46563){
var seq__46510_46564__$1 = temp__5804__auto___46563;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46510_46564__$1)){
var c__5525__auto___46565 = cljs.core.chunk_first.call(null,seq__46510_46564__$1);
var G__46566 = cljs.core.chunk_rest.call(null,seq__46510_46564__$1);
var G__46567 = c__5525__auto___46565;
var G__46568 = cljs.core.count.call(null,c__5525__auto___46565);
var G__46569 = (0);
seq__46510_46554 = G__46566;
chunk__46511_46555 = G__46567;
count__46512_46556 = G__46568;
i__46513_46557 = G__46569;
continue;
} else {
var lib_46570 = cljs.core.first.call(null,seq__46510_46564__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_46570)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_46570),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_46570),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_46570),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_46570),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_46570,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_46570),"');");
}

}
}
}


var G__46571 = cljs.core.next.call(null,seq__46510_46564__$1);
var G__46572 = null;
var G__46573 = (0);
var G__46574 = (0);
seq__46510_46554 = G__46571;
chunk__46511_46555 = G__46572;
count__46512_46556 = G__46573;
i__46513_46557 = G__46574;
continue;
}
} else {
}
}
break;
}

var seq__46514_46575 = cljs.core.seq.call(null,node_libs);
var chunk__46515_46576 = null;
var count__46516_46577 = (0);
var i__46517_46578 = (0);
while(true){
if((i__46517_46578 < count__46516_46577)){
var lib_46579 = cljs.core._nth.call(null,chunk__46515_46576,i__46517_46578);
var vec__46524_46580 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_46579);
var lib_SINGLEQUOTE__46581 = cljs.core.nth.call(null,vec__46524_46580,(0),null);
var sublib_46582 = cljs.core.nth.call(null,vec__46524_46580,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_46579)," = require('",lib_SINGLEQUOTE__46581,"')",cljs.compiler.sublib_select.call(null,sublib_46582),";");


var G__46583 = seq__46514_46575;
var G__46584 = chunk__46515_46576;
var G__46585 = count__46516_46577;
var G__46586 = (i__46517_46578 + (1));
seq__46514_46575 = G__46583;
chunk__46515_46576 = G__46584;
count__46516_46577 = G__46585;
i__46517_46578 = G__46586;
continue;
} else {
var temp__5804__auto___46587 = cljs.core.seq.call(null,seq__46514_46575);
if(temp__5804__auto___46587){
var seq__46514_46588__$1 = temp__5804__auto___46587;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46514_46588__$1)){
var c__5525__auto___46589 = cljs.core.chunk_first.call(null,seq__46514_46588__$1);
var G__46590 = cljs.core.chunk_rest.call(null,seq__46514_46588__$1);
var G__46591 = c__5525__auto___46589;
var G__46592 = cljs.core.count.call(null,c__5525__auto___46589);
var G__46593 = (0);
seq__46514_46575 = G__46590;
chunk__46515_46576 = G__46591;
count__46516_46577 = G__46592;
i__46517_46578 = G__46593;
continue;
} else {
var lib_46594 = cljs.core.first.call(null,seq__46514_46588__$1);
var vec__46527_46595 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_46594);
var lib_SINGLEQUOTE__46596 = cljs.core.nth.call(null,vec__46527_46595,(0),null);
var sublib_46597 = cljs.core.nth.call(null,vec__46527_46595,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_46594)," = require('",lib_SINGLEQUOTE__46596,"')",cljs.compiler.sublib_select.call(null,sublib_46597),";");


var G__46598 = cljs.core.next.call(null,seq__46514_46588__$1);
var G__46599 = null;
var G__46600 = (0);
var G__46601 = (0);
seq__46514_46575 = G__46598;
chunk__46515_46576 = G__46599;
count__46516_46577 = G__46600;
i__46517_46578 = G__46601;
continue;
}
} else {
}
}
break;
}

var seq__46530_46602 = cljs.core.seq.call(null,goog_modules);
var chunk__46531_46603 = null;
var count__46532_46604 = (0);
var i__46533_46605 = (0);
while(true){
if((i__46533_46605 < count__46532_46604)){
var lib_46606 = cljs.core._nth.call(null,chunk__46531_46603,i__46533_46605);
var vec__46540_46607 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_46606);
var lib_SINGLEQUOTE__46608 = cljs.core.nth.call(null,vec__46540_46607,(0),null);
var sublib_46609 = cljs.core.nth.call(null,vec__46540_46607,(1),null);
cljs.compiler.emitln.call(null,"goog.require('",lib_SINGLEQUOTE__46608,"');");

cljs.compiler.emitln.call(null,"goog.scope(function(){");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_goog_module_lib.call(null,lib_46606)," = goog.module.get('",lib_SINGLEQUOTE__46608,"')",cljs.compiler.sublib_select.call(null,sublib_46609),";");

cljs.compiler.emitln.call(null,"});");


var G__46610 = seq__46530_46602;
var G__46611 = chunk__46531_46603;
var G__46612 = count__46532_46604;
var G__46613 = (i__46533_46605 + (1));
seq__46530_46602 = G__46610;
chunk__46531_46603 = G__46611;
count__46532_46604 = G__46612;
i__46533_46605 = G__46613;
continue;
} else {
var temp__5804__auto___46614 = cljs.core.seq.call(null,seq__46530_46602);
if(temp__5804__auto___46614){
var seq__46530_46615__$1 = temp__5804__auto___46614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46530_46615__$1)){
var c__5525__auto___46616 = cljs.core.chunk_first.call(null,seq__46530_46615__$1);
var G__46617 = cljs.core.chunk_rest.call(null,seq__46530_46615__$1);
var G__46618 = c__5525__auto___46616;
var G__46619 = cljs.core.count.call(null,c__5525__auto___46616);
var G__46620 = (0);
seq__46530_46602 = G__46617;
chunk__46531_46603 = G__46618;
count__46532_46604 = G__46619;
i__46533_46605 = G__46620;
continue;
} else {
var lib_46621 = cljs.core.first.call(null,seq__46530_46615__$1);
var vec__46543_46622 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_46621);
var lib_SINGLEQUOTE__46623 = cljs.core.nth.call(null,vec__46543_46622,(0),null);
var sublib_46624 = cljs.core.nth.call(null,vec__46543_46622,(1),null);
cljs.compiler.emitln.call(null,"goog.require('",lib_SINGLEQUOTE__46623,"');");

cljs.compiler.emitln.call(null,"goog.scope(function(){");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_goog_module_lib.call(null,lib_46621)," = goog.module.get('",lib_SINGLEQUOTE__46623,"')",cljs.compiler.sublib_select.call(null,sublib_46624),";");

cljs.compiler.emitln.call(null,"});");


var G__46625 = cljs.core.next.call(null,seq__46530_46615__$1);
var G__46626 = null;
var G__46627 = (0);
var G__46628 = (0);
seq__46530_46602 = G__46625;
chunk__46531_46603 = G__46626;
count__46532_46604 = G__46627;
i__46533_46605 = G__46628;
continue;
}
} else {
}
}
break;
}

var seq__46546_46629 = cljs.core.seq.call(null,global_exports_libs);
var chunk__46547_46630 = null;
var count__46548_46631 = (0);
var i__46549_46632 = (0);
while(true){
if((i__46549_46632 < count__46548_46631)){
var lib_46633 = cljs.core._nth.call(null,chunk__46547_46630,i__46549_46632);
var map__46552_46634 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_46633))));
var map__46552_46635__$1 = cljs.core.__destructure_map.call(null,map__46552_46634);
var global_exports_46636 = cljs.core.get.call(null,map__46552_46635__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_46636,lib_46633);


var G__46637 = seq__46546_46629;
var G__46638 = chunk__46547_46630;
var G__46639 = count__46548_46631;
var G__46640 = (i__46549_46632 + (1));
seq__46546_46629 = G__46637;
chunk__46547_46630 = G__46638;
count__46548_46631 = G__46639;
i__46549_46632 = G__46640;
continue;
} else {
var temp__5804__auto___46641 = cljs.core.seq.call(null,seq__46546_46629);
if(temp__5804__auto___46641){
var seq__46546_46642__$1 = temp__5804__auto___46641;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46546_46642__$1)){
var c__5525__auto___46643 = cljs.core.chunk_first.call(null,seq__46546_46642__$1);
var G__46644 = cljs.core.chunk_rest.call(null,seq__46546_46642__$1);
var G__46645 = c__5525__auto___46643;
var G__46646 = cljs.core.count.call(null,c__5525__auto___46643);
var G__46647 = (0);
seq__46546_46629 = G__46644;
chunk__46547_46630 = G__46645;
count__46548_46631 = G__46646;
i__46549_46632 = G__46647;
continue;
} else {
var lib_46648 = cljs.core.first.call(null,seq__46546_46642__$1);
var map__46553_46649 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_46648))));
var map__46553_46650__$1 = cljs.core.__destructure_map.call(null,map__46553_46649);
var global_exports_46651 = cljs.core.get.call(null,map__46553_46650__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_46651,lib_46648);


var G__46652 = cljs.core.next.call(null,seq__46546_46642__$1);
var G__46653 = null;
var G__46654 = (0);
var G__46655 = (0);
seq__46546_46629 = G__46652;
chunk__46547_46630 = G__46653;
count__46548_46631 = G__46654;
i__46549_46632 = G__46655;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__46656){
var map__46657 = p__46656;
var map__46657__$1 = cljs.core.__destructure_map.call(null,map__46657);
var name = cljs.core.get.call(null,map__46657__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__46657__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__46657__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__46657__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__46657__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__46657__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__46657__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__46658){
var map__46659 = p__46658;
var map__46659__$1 = cljs.core.__destructure_map.call(null,map__46659);
var name = cljs.core.get.call(null,map__46659__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__46659__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__46659__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__46659__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__46659__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__46659__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__46659__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__46660){
var map__46661 = p__46660;
var map__46661__$1 = cljs.core.__destructure_map.call(null,map__46661);
var t = cljs.core.get.call(null,map__46661__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__46661__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__46661__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__46661__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__46661__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__46662_46686 = cljs.core.seq.call(null,protocols);
var chunk__46663_46687 = null;
var count__46664_46688 = (0);
var i__46665_46689 = (0);
while(true){
if((i__46665_46689 < count__46664_46688)){
var protocol_46690 = cljs.core._nth.call(null,chunk__46663_46687,i__46665_46689);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_46690)),"}");


var G__46691 = seq__46662_46686;
var G__46692 = chunk__46663_46687;
var G__46693 = count__46664_46688;
var G__46694 = (i__46665_46689 + (1));
seq__46662_46686 = G__46691;
chunk__46663_46687 = G__46692;
count__46664_46688 = G__46693;
i__46665_46689 = G__46694;
continue;
} else {
var temp__5804__auto___46695 = cljs.core.seq.call(null,seq__46662_46686);
if(temp__5804__auto___46695){
var seq__46662_46696__$1 = temp__5804__auto___46695;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46662_46696__$1)){
var c__5525__auto___46697 = cljs.core.chunk_first.call(null,seq__46662_46696__$1);
var G__46698 = cljs.core.chunk_rest.call(null,seq__46662_46696__$1);
var G__46699 = c__5525__auto___46697;
var G__46700 = cljs.core.count.call(null,c__5525__auto___46697);
var G__46701 = (0);
seq__46662_46686 = G__46698;
chunk__46663_46687 = G__46699;
count__46664_46688 = G__46700;
i__46665_46689 = G__46701;
continue;
} else {
var protocol_46702 = cljs.core.first.call(null,seq__46662_46696__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_46702)),"}");


var G__46703 = cljs.core.next.call(null,seq__46662_46696__$1);
var G__46704 = null;
var G__46705 = (0);
var G__46706 = (0);
seq__46662_46686 = G__46703;
chunk__46663_46687 = G__46704;
count__46664_46688 = G__46705;
i__46665_46689 = G__46706;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__46666_46707 = cljs.core.seq.call(null,fields__$1);
var chunk__46667_46708 = null;
var count__46668_46709 = (0);
var i__46669_46710 = (0);
while(true){
if((i__46669_46710 < count__46668_46709)){
var fld_46711 = cljs.core._nth.call(null,chunk__46667_46708,i__46669_46710);
cljs.compiler.emitln.call(null,"this.",fld_46711," = ",fld_46711,";");


var G__46712 = seq__46666_46707;
var G__46713 = chunk__46667_46708;
var G__46714 = count__46668_46709;
var G__46715 = (i__46669_46710 + (1));
seq__46666_46707 = G__46712;
chunk__46667_46708 = G__46713;
count__46668_46709 = G__46714;
i__46669_46710 = G__46715;
continue;
} else {
var temp__5804__auto___46716 = cljs.core.seq.call(null,seq__46666_46707);
if(temp__5804__auto___46716){
var seq__46666_46717__$1 = temp__5804__auto___46716;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46666_46717__$1)){
var c__5525__auto___46718 = cljs.core.chunk_first.call(null,seq__46666_46717__$1);
var G__46719 = cljs.core.chunk_rest.call(null,seq__46666_46717__$1);
var G__46720 = c__5525__auto___46718;
var G__46721 = cljs.core.count.call(null,c__5525__auto___46718);
var G__46722 = (0);
seq__46666_46707 = G__46719;
chunk__46667_46708 = G__46720;
count__46668_46709 = G__46721;
i__46669_46710 = G__46722;
continue;
} else {
var fld_46723 = cljs.core.first.call(null,seq__46666_46717__$1);
cljs.compiler.emitln.call(null,"this.",fld_46723," = ",fld_46723,";");


var G__46724 = cljs.core.next.call(null,seq__46666_46717__$1);
var G__46725 = null;
var G__46726 = (0);
var G__46727 = (0);
seq__46666_46707 = G__46724;
chunk__46667_46708 = G__46725;
count__46668_46709 = G__46726;
i__46669_46710 = G__46727;
continue;
}
} else {
}
}
break;
}

var seq__46670_46728 = cljs.core.seq.call(null,pmasks);
var chunk__46671_46729 = null;
var count__46672_46730 = (0);
var i__46673_46731 = (0);
while(true){
if((i__46673_46731 < count__46672_46730)){
var vec__46680_46732 = cljs.core._nth.call(null,chunk__46671_46729,i__46673_46731);
var pno_46733 = cljs.core.nth.call(null,vec__46680_46732,(0),null);
var pmask_46734 = cljs.core.nth.call(null,vec__46680_46732,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_46733,"$ = ",pmask_46734,";");


var G__46735 = seq__46670_46728;
var G__46736 = chunk__46671_46729;
var G__46737 = count__46672_46730;
var G__46738 = (i__46673_46731 + (1));
seq__46670_46728 = G__46735;
chunk__46671_46729 = G__46736;
count__46672_46730 = G__46737;
i__46673_46731 = G__46738;
continue;
} else {
var temp__5804__auto___46739 = cljs.core.seq.call(null,seq__46670_46728);
if(temp__5804__auto___46739){
var seq__46670_46740__$1 = temp__5804__auto___46739;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46670_46740__$1)){
var c__5525__auto___46741 = cljs.core.chunk_first.call(null,seq__46670_46740__$1);
var G__46742 = cljs.core.chunk_rest.call(null,seq__46670_46740__$1);
var G__46743 = c__5525__auto___46741;
var G__46744 = cljs.core.count.call(null,c__5525__auto___46741);
var G__46745 = (0);
seq__46670_46728 = G__46742;
chunk__46671_46729 = G__46743;
count__46672_46730 = G__46744;
i__46673_46731 = G__46745;
continue;
} else {
var vec__46683_46746 = cljs.core.first.call(null,seq__46670_46740__$1);
var pno_46747 = cljs.core.nth.call(null,vec__46683_46746,(0),null);
var pmask_46748 = cljs.core.nth.call(null,vec__46683_46746,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_46747,"$ = ",pmask_46748,";");


var G__46749 = cljs.core.next.call(null,seq__46670_46740__$1);
var G__46750 = null;
var G__46751 = (0);
var G__46752 = (0);
seq__46670_46728 = G__46749;
chunk__46671_46729 = G__46750;
count__46672_46730 = G__46751;
i__46673_46731 = G__46752;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__46753){
var map__46754 = p__46753;
var map__46754__$1 = cljs.core.__destructure_map.call(null,map__46754);
var t = cljs.core.get.call(null,map__46754__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__46754__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__46754__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__46754__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__46754__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__46755_46779 = cljs.core.seq.call(null,protocols);
var chunk__46756_46780 = null;
var count__46757_46781 = (0);
var i__46758_46782 = (0);
while(true){
if((i__46758_46782 < count__46757_46781)){
var protocol_46783 = cljs.core._nth.call(null,chunk__46756_46780,i__46758_46782);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_46783)),"}");


var G__46784 = seq__46755_46779;
var G__46785 = chunk__46756_46780;
var G__46786 = count__46757_46781;
var G__46787 = (i__46758_46782 + (1));
seq__46755_46779 = G__46784;
chunk__46756_46780 = G__46785;
count__46757_46781 = G__46786;
i__46758_46782 = G__46787;
continue;
} else {
var temp__5804__auto___46788 = cljs.core.seq.call(null,seq__46755_46779);
if(temp__5804__auto___46788){
var seq__46755_46789__$1 = temp__5804__auto___46788;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46755_46789__$1)){
var c__5525__auto___46790 = cljs.core.chunk_first.call(null,seq__46755_46789__$1);
var G__46791 = cljs.core.chunk_rest.call(null,seq__46755_46789__$1);
var G__46792 = c__5525__auto___46790;
var G__46793 = cljs.core.count.call(null,c__5525__auto___46790);
var G__46794 = (0);
seq__46755_46779 = G__46791;
chunk__46756_46780 = G__46792;
count__46757_46781 = G__46793;
i__46758_46782 = G__46794;
continue;
} else {
var protocol_46795 = cljs.core.first.call(null,seq__46755_46789__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_46795)),"}");


var G__46796 = cljs.core.next.call(null,seq__46755_46789__$1);
var G__46797 = null;
var G__46798 = (0);
var G__46799 = (0);
seq__46755_46779 = G__46796;
chunk__46756_46780 = G__46797;
count__46757_46781 = G__46798;
i__46758_46782 = G__46799;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__46759_46800 = cljs.core.seq.call(null,fields__$1);
var chunk__46760_46801 = null;
var count__46761_46802 = (0);
var i__46762_46803 = (0);
while(true){
if((i__46762_46803 < count__46761_46802)){
var fld_46804 = cljs.core._nth.call(null,chunk__46760_46801,i__46762_46803);
cljs.compiler.emitln.call(null,"this.",fld_46804," = ",fld_46804,";");


var G__46805 = seq__46759_46800;
var G__46806 = chunk__46760_46801;
var G__46807 = count__46761_46802;
var G__46808 = (i__46762_46803 + (1));
seq__46759_46800 = G__46805;
chunk__46760_46801 = G__46806;
count__46761_46802 = G__46807;
i__46762_46803 = G__46808;
continue;
} else {
var temp__5804__auto___46809 = cljs.core.seq.call(null,seq__46759_46800);
if(temp__5804__auto___46809){
var seq__46759_46810__$1 = temp__5804__auto___46809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46759_46810__$1)){
var c__5525__auto___46811 = cljs.core.chunk_first.call(null,seq__46759_46810__$1);
var G__46812 = cljs.core.chunk_rest.call(null,seq__46759_46810__$1);
var G__46813 = c__5525__auto___46811;
var G__46814 = cljs.core.count.call(null,c__5525__auto___46811);
var G__46815 = (0);
seq__46759_46800 = G__46812;
chunk__46760_46801 = G__46813;
count__46761_46802 = G__46814;
i__46762_46803 = G__46815;
continue;
} else {
var fld_46816 = cljs.core.first.call(null,seq__46759_46810__$1);
cljs.compiler.emitln.call(null,"this.",fld_46816," = ",fld_46816,";");


var G__46817 = cljs.core.next.call(null,seq__46759_46810__$1);
var G__46818 = null;
var G__46819 = (0);
var G__46820 = (0);
seq__46759_46800 = G__46817;
chunk__46760_46801 = G__46818;
count__46761_46802 = G__46819;
i__46762_46803 = G__46820;
continue;
}
} else {
}
}
break;
}

var seq__46763_46821 = cljs.core.seq.call(null,pmasks);
var chunk__46764_46822 = null;
var count__46765_46823 = (0);
var i__46766_46824 = (0);
while(true){
if((i__46766_46824 < count__46765_46823)){
var vec__46773_46825 = cljs.core._nth.call(null,chunk__46764_46822,i__46766_46824);
var pno_46826 = cljs.core.nth.call(null,vec__46773_46825,(0),null);
var pmask_46827 = cljs.core.nth.call(null,vec__46773_46825,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_46826,"$ = ",pmask_46827,";");


var G__46828 = seq__46763_46821;
var G__46829 = chunk__46764_46822;
var G__46830 = count__46765_46823;
var G__46831 = (i__46766_46824 + (1));
seq__46763_46821 = G__46828;
chunk__46764_46822 = G__46829;
count__46765_46823 = G__46830;
i__46766_46824 = G__46831;
continue;
} else {
var temp__5804__auto___46832 = cljs.core.seq.call(null,seq__46763_46821);
if(temp__5804__auto___46832){
var seq__46763_46833__$1 = temp__5804__auto___46832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46763_46833__$1)){
var c__5525__auto___46834 = cljs.core.chunk_first.call(null,seq__46763_46833__$1);
var G__46835 = cljs.core.chunk_rest.call(null,seq__46763_46833__$1);
var G__46836 = c__5525__auto___46834;
var G__46837 = cljs.core.count.call(null,c__5525__auto___46834);
var G__46838 = (0);
seq__46763_46821 = G__46835;
chunk__46764_46822 = G__46836;
count__46765_46823 = G__46837;
i__46766_46824 = G__46838;
continue;
} else {
var vec__46776_46839 = cljs.core.first.call(null,seq__46763_46833__$1);
var pno_46840 = cljs.core.nth.call(null,vec__46776_46839,(0),null);
var pmask_46841 = cljs.core.nth.call(null,vec__46776_46839,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_46840,"$ = ",pmask_46841,";");


var G__46842 = cljs.core.next.call(null,seq__46763_46833__$1);
var G__46843 = null;
var G__46844 = (0);
var G__46845 = (0);
seq__46763_46821 = G__46842;
chunk__46764_46822 = G__46843;
count__46765_46823 = G__46844;
i__46766_46824 = G__46845;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__46846){
var map__46847 = p__46846;
var map__46847__$1 = cljs.core.__destructure_map.call(null,map__46847);
var target = cljs.core.get.call(null,map__46847__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__46847__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__46847__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__46847__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__46847__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__46848){
var map__46849 = p__46848;
var map__46849__$1 = cljs.core.__destructure_map.call(null,map__46849);
var op = cljs.core.get.call(null,map__46849__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__46849__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__46849__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__46849__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__46849__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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

var seq__46854 = cljs.core.seq.call(null,table);
var chunk__46855 = null;
var count__46856 = (0);
var i__46857 = (0);
while(true){
if((i__46857 < count__46856)){
var vec__46864 = cljs.core._nth.call(null,chunk__46855,i__46857);
var sym = cljs.core.nth.call(null,vec__46864,(0),null);
var value = cljs.core.nth.call(null,vec__46864,(1),null);
var ns_46870 = cljs.core.namespace.call(null,sym);
var name_46871 = cljs.core.name.call(null,sym);
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


var G__46872 = seq__46854;
var G__46873 = chunk__46855;
var G__46874 = count__46856;
var G__46875 = (i__46857 + (1));
seq__46854 = G__46872;
chunk__46855 = G__46873;
count__46856 = G__46874;
i__46857 = G__46875;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__46854);
if(temp__5804__auto__){
var seq__46854__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46854__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__46854__$1);
var G__46876 = cljs.core.chunk_rest.call(null,seq__46854__$1);
var G__46877 = c__5525__auto__;
var G__46878 = cljs.core.count.call(null,c__5525__auto__);
var G__46879 = (0);
seq__46854 = G__46876;
chunk__46855 = G__46877;
count__46856 = G__46878;
i__46857 = G__46879;
continue;
} else {
var vec__46867 = cljs.core.first.call(null,seq__46854__$1);
var sym = cljs.core.nth.call(null,vec__46867,(0),null);
var value = cljs.core.nth.call(null,vec__46867,(1),null);
var ns_46880 = cljs.core.namespace.call(null,sym);
var name_46881 = cljs.core.name.call(null,sym);
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


var G__46882 = cljs.core.next.call(null,seq__46854__$1);
var G__46883 = null;
var G__46884 = (0);
var G__46885 = (0);
seq__46854 = G__46882;
chunk__46855 = G__46883;
count__46856 = G__46884;
i__46857 = G__46885;
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
var G__46887 = arguments.length;
switch (G__46887) {
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
var k_46892 = cljs.core.first.call(null,ks);
var vec__46888_46893 = cljs.core.conj.call(null,prefix,k_46892);
var top_46894 = cljs.core.nth.call(null,vec__46888_46893,(0),null);
var prefix_SINGLEQUOTE__46895 = vec__46888_46893;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_46892)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__46895) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_46894)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_46894)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__46895)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_46894);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__46895)),";");
}
} else {
}

var m_46896 = cljs.core.get.call(null,externs,k_46892);
if(cljs.core.empty_QMARK_.call(null,m_46896)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__46895,m_46896,top_level,known_externs);
}

var G__46897 = cljs.core.next.call(null,ks);
ks = G__46897;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=compiler.js.map
