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
var map__8866 = s;
var map__8866__$1 = cljs.core.__destructure_map.call(null,map__8866);
var name = cljs.core.get.call(null,map__8866__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__8866__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__8868 = info;
var map__8869 = G__8868;
var map__8869__$1 = cljs.core.__destructure_map.call(null,map__8869);
var shadow = cljs.core.get.call(null,map__8869__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__8868__$1 = G__8868;
while(true){
var d__$2 = d__$1;
var map__8871 = G__8868__$1;
var map__8871__$1 = cljs.core.__destructure_map.call(null,map__8871);
var shadow__$1 = cljs.core.get.call(null,map__8871__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__8872 = (d__$2 + (1));
var G__8873 = shadow__$1;
d__$1 = G__8872;
G__8868__$1 = G__8873;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__8874){
var map__8875 = p__8874;
var map__8875__$1 = cljs.core.__destructure_map.call(null,map__8875);
var name_var = map__8875__$1;
var name = cljs.core.get.call(null,map__8875__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__8875__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__8876 = info;
var map__8876__$1 = cljs.core.__destructure_map.call(null,map__8876);
var ns = cljs.core.get.call(null,map__8876__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__8876__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__8878 = arguments.length;
switch (G__8878) {
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
var G__8880 = cp;
switch (G__8880) {
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
var seq__8882_8886 = cljs.core.seq.call(null,s);
var chunk__8883_8887 = null;
var count__8884_8888 = (0);
var i__8885_8889 = (0);
while(true){
if((i__8885_8889 < count__8884_8888)){
var c_8890 = cljs.core._nth.call(null,chunk__8883_8887,i__8885_8889);
sb.append(cljs.compiler.escape_char.call(null,c_8890));


var G__8891 = seq__8882_8886;
var G__8892 = chunk__8883_8887;
var G__8893 = count__8884_8888;
var G__8894 = (i__8885_8889 + (1));
seq__8882_8886 = G__8891;
chunk__8883_8887 = G__8892;
count__8884_8888 = G__8893;
i__8885_8889 = G__8894;
continue;
} else {
var temp__5804__auto___8895 = cljs.core.seq.call(null,seq__8882_8886);
if(temp__5804__auto___8895){
var seq__8882_8896__$1 = temp__5804__auto___8895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8882_8896__$1)){
var c__5525__auto___8897 = cljs.core.chunk_first.call(null,seq__8882_8896__$1);
var G__8898 = cljs.core.chunk_rest.call(null,seq__8882_8896__$1);
var G__8899 = c__5525__auto___8897;
var G__8900 = cljs.core.count.call(null,c__5525__auto___8897);
var G__8901 = (0);
seq__8882_8886 = G__8898;
chunk__8883_8887 = G__8899;
count__8884_8888 = G__8900;
i__8885_8889 = G__8901;
continue;
} else {
var c_8902 = cljs.core.first.call(null,seq__8882_8896__$1);
sb.append(cljs.compiler.escape_char.call(null,c_8902));


var G__8903 = cljs.core.next.call(null,seq__8882_8896__$1);
var G__8904 = null;
var G__8905 = (0);
var G__8906 = (0);
seq__8882_8886 = G__8903;
chunk__8883_8887 = G__8904;
count__8884_8888 = G__8905;
i__8885_8889 = G__8906;
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
var map__8907_8910 = ast;
var map__8907_8911__$1 = cljs.core.__destructure_map.call(null,map__8907_8910);
var env_8912 = cljs.core.get.call(null,map__8907_8911__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_8912))){
var map__8908_8913 = env_8912;
var map__8908_8914__$1 = cljs.core.__destructure_map.call(null,map__8908_8913);
var line_8915 = cljs.core.get.call(null,map__8908_8914__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_8916 = cljs.core.get.call(null,map__8908_8914__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__8909 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__8909,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__8909;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_8915 - (1))], null),cljs.core.fnil.call(null,(function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_8916)?(column_8916 - (1)):(0))], null),cljs.core.fnil.call(null,(function (column__$1){
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
var G__8925 = arguments.length;
switch (G__8925) {
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
var len__5726__auto___8932 = arguments.length;
var i__5727__auto___8933 = (0);
while(true){
if((i__5727__auto___8933 < len__5726__auto___8932)){
args_arr__5751__auto__.push((arguments[i__5727__auto___8933]));

var G__8934 = (i__5727__auto___8933 + (1));
i__5727__auto___8933 = G__8934;
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
var s_8935 = (function (){var G__8926 = a;
if((!(typeof a === 'string'))){
return G__8926.toString();
} else {
return G__8926;
}
})();
var temp__5808__auto___8936 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5808__auto___8936 == null)){
} else {
var sm_data_8937 = temp__5808__auto___8936;
cljs.core.swap_BANG_.call(null,sm_data_8937,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__8917_SHARP_){
return (p1__8917_SHARP_ + s_8935.length);
}));
}

cljs.core.print.call(null,s_8935);

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

var seq__8927 = cljs.core.seq.call(null,xs);
var chunk__8928 = null;
var count__8929 = (0);
var i__8930 = (0);
while(true){
if((i__8930 < count__8929)){
var x = cljs.core._nth.call(null,chunk__8928,i__8930);
cljs.compiler.emits.call(null,x);


var G__8938 = seq__8927;
var G__8939 = chunk__8928;
var G__8940 = count__8929;
var G__8941 = (i__8930 + (1));
seq__8927 = G__8938;
chunk__8928 = G__8939;
count__8929 = G__8940;
i__8930 = G__8941;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__8927);
if(temp__5804__auto__){
var seq__8927__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8927__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__8927__$1);
var G__8942 = cljs.core.chunk_rest.call(null,seq__8927__$1);
var G__8943 = c__5525__auto__;
var G__8944 = cljs.core.count.call(null,c__5525__auto__);
var G__8945 = (0);
seq__8927 = G__8942;
chunk__8928 = G__8943;
count__8929 = G__8944;
i__8930 = G__8945;
continue;
} else {
var x = cljs.core.first.call(null,seq__8927__$1);
cljs.compiler.emits.call(null,x);


var G__8946 = cljs.core.next.call(null,seq__8927__$1);
var G__8947 = null;
var G__8948 = (0);
var G__8949 = (0);
seq__8927 = G__8946;
chunk__8928 = G__8947;
count__8929 = G__8948;
i__8930 = G__8949;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq8919){
var G__8920 = cljs.core.first.call(null,seq8919);
var seq8919__$1 = cljs.core.next.call(null,seq8919);
var G__8921 = cljs.core.first.call(null,seq8919__$1);
var seq8919__$2 = cljs.core.next.call(null,seq8919__$1);
var G__8922 = cljs.core.first.call(null,seq8919__$2);
var seq8919__$3 = cljs.core.next.call(null,seq8919__$2);
var G__8923 = cljs.core.first.call(null,seq8919__$3);
var seq8919__$4 = cljs.core.next.call(null,seq8919__$3);
var G__8924 = cljs.core.first.call(null,seq8919__$4);
var seq8919__$5 = cljs.core.next.call(null,seq8919__$4);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8920,G__8921,G__8922,G__8923,G__8924,seq8919__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__8950){
var map__8951 = p__8950;
var map__8951__$1 = cljs.core.__destructure_map.call(null,map__8951);
var m = map__8951__$1;
var gen_line = cljs.core.get.call(null,map__8951__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__8959 = arguments.length;
switch (G__8959) {
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
var len__5726__auto___8965 = arguments.length;
var i__5727__auto___8966 = (0);
while(true){
if((i__5727__auto___8966 < len__5726__auto___8965)){
args_arr__5751__auto__.push((arguments[i__5727__auto___8966]));

var G__8967 = (i__5727__auto___8966 + (1));
i__5727__auto___8966 = G__8967;
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

var seq__8960_8968 = cljs.core.seq.call(null,xs);
var chunk__8961_8969 = null;
var count__8962_8970 = (0);
var i__8963_8971 = (0);
while(true){
if((i__8963_8971 < count__8962_8970)){
var x_8972 = cljs.core._nth.call(null,chunk__8961_8969,i__8963_8971);
cljs.compiler.emits.call(null,x_8972);


var G__8973 = seq__8960_8968;
var G__8974 = chunk__8961_8969;
var G__8975 = count__8962_8970;
var G__8976 = (i__8963_8971 + (1));
seq__8960_8968 = G__8973;
chunk__8961_8969 = G__8974;
count__8962_8970 = G__8975;
i__8963_8971 = G__8976;
continue;
} else {
var temp__5804__auto___8977 = cljs.core.seq.call(null,seq__8960_8968);
if(temp__5804__auto___8977){
var seq__8960_8978__$1 = temp__5804__auto___8977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8960_8978__$1)){
var c__5525__auto___8979 = cljs.core.chunk_first.call(null,seq__8960_8978__$1);
var G__8980 = cljs.core.chunk_rest.call(null,seq__8960_8978__$1);
var G__8981 = c__5525__auto___8979;
var G__8982 = cljs.core.count.call(null,c__5525__auto___8979);
var G__8983 = (0);
seq__8960_8968 = G__8980;
chunk__8961_8969 = G__8981;
count__8962_8970 = G__8982;
i__8963_8971 = G__8983;
continue;
} else {
var x_8984 = cljs.core.first.call(null,seq__8960_8978__$1);
cljs.compiler.emits.call(null,x_8984);


var G__8985 = cljs.core.next.call(null,seq__8960_8978__$1);
var G__8986 = null;
var G__8987 = (0);
var G__8988 = (0);
seq__8960_8968 = G__8985;
chunk__8961_8969 = G__8986;
count__8962_8970 = G__8987;
i__8963_8971 = G__8988;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq8953){
var G__8954 = cljs.core.first.call(null,seq8953);
var seq8953__$1 = cljs.core.next.call(null,seq8953);
var G__8955 = cljs.core.first.call(null,seq8953__$1);
var seq8953__$2 = cljs.core.next.call(null,seq8953__$1);
var G__8956 = cljs.core.first.call(null,seq8953__$2);
var seq8953__$3 = cljs.core.next.call(null,seq8953__$2);
var G__8957 = cljs.core.first.call(null,seq8953__$3);
var seq8953__$4 = cljs.core.next.call(null,seq8953__$3);
var G__8958 = cljs.core.first.call(null,seq8953__$4);
var seq8953__$5 = cljs.core.next.call(null,seq8953__$4);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8954,G__8955,G__8956,G__8957,G__8958,seq8953__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8989_8993 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8990_8994 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8991_8995 = true;
var _STAR_print_fn_STAR__temp_val__8992_8996 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8991_8995);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8992_8996);

try{cljs.compiler.emit.call(null,expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8990_8994);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8989_8993);
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
var vec__8997 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__8997,(0),null);
var name = cljs.core.nth.call(null,vec__8997,(1),null);
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
var vec__9000 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__9000,(0),null);
var flags = cljs.core.nth.call(null,vec__9000,(1),null);
var pattern = cljs.core.nth.call(null,vec__9000,(2),null);
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
return cljs.compiler.emit_js_object.call(null,items,(function (p1__9003_SHARP_){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__9003_SHARP_);
});
}));
} else {
return cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__9005){
var map__9006 = p__9005;
var map__9006__$1 = cljs.core.__destructure_map.call(null,map__9006);
var ast = map__9006__$1;
var info = cljs.core.get.call(null,map__9006__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__9006__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__9006__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5802__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5802__auto__)){
var const_expr = temp__5802__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__9007 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__9007__$1 = cljs.core.__destructure_map.call(null,map__9007);
var cenv = map__9007__$1;
var options = cljs.core.get.call(null,map__9007__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__9008 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__5000__auto__;
}
})())){
return clojure.set.difference.call(null,G__9008,cljs.analyzer.es5_allowed);
} else {
return G__9008;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__5002__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__9009 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__9009,reserved);
} else {
return G__9009;
}
})();
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__9010_9011 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__9010_9012__$1 = (((G__9010_9011 instanceof cljs.core.Keyword))?G__9010_9011.fqn:null);
switch (G__9010_9012__$1) {
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__9014){
var map__9015 = p__9014;
var map__9015__$1 = cljs.core.__destructure_map.call(null,map__9015);
var arg = map__9015__$1;
var env = cljs.core.get.call(null,map__9015__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__9015__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__9015__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__9015__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__9016 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__9016__$1 = cljs.core.__destructure_map.call(null,map__9016);
var name = cljs.core.get.call(null,map__9016__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__9017){
var map__9018 = p__9017;
var map__9018__$1 = cljs.core.__destructure_map.call(null,map__9018);
var expr = cljs.core.get.call(null,map__9018__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__9018__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__9018__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_.call(null,(function (p1__9019_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__9019_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__9020){
var map__9021 = p__9020;
var map__9021__$1 = cljs.core.__destructure_map.call(null,map__9021);
var env = cljs.core.get.call(null,map__9021__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__9021__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__9021__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__9022){
var map__9023 = p__9022;
var map__9023__$1 = cljs.core.__destructure_map.call(null,map__9023);
var items = cljs.core.get.call(null,map__9023__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__9023__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_.call(null,(function (p1__9024_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__9024_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__9025){
var map__9026 = p__9025;
var map__9026__$1 = cljs.core.__destructure_map.call(null,map__9026);
var items = cljs.core.get.call(null,map__9026__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__9026__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var temp__5804__auto___9049 = cljs.core.seq.call(null,items);
if(temp__5804__auto___9049){
var items_9050__$1 = temp__5804__auto___9049;
var vec__9027_9051 = items_9050__$1;
var seq__9028_9052 = cljs.core.seq.call(null,vec__9027_9051);
var first__9029_9053 = cljs.core.first.call(null,seq__9028_9052);
var seq__9028_9054__$1 = cljs.core.next.call(null,seq__9028_9052);
var vec__9030_9055 = first__9029_9053;
var k_9056 = cljs.core.nth.call(null,vec__9030_9055,(0),null);
var v_9057 = cljs.core.nth.call(null,vec__9030_9055,(1),null);
var r_9058 = seq__9028_9054__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_9056),"\": ",emit_js_object_val.call(null,v_9057));

var seq__9033_9059 = cljs.core.seq.call(null,r_9058);
var chunk__9034_9060 = null;
var count__9035_9061 = (0);
var i__9036_9062 = (0);
while(true){
if((i__9036_9062 < count__9035_9061)){
var vec__9043_9063 = cljs.core._nth.call(null,chunk__9034_9060,i__9036_9062);
var k_9064__$1 = cljs.core.nth.call(null,vec__9043_9063,(0),null);
var v_9065__$1 = cljs.core.nth.call(null,vec__9043_9063,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_9064__$1),"\": ",emit_js_object_val.call(null,v_9065__$1));


var G__9066 = seq__9033_9059;
var G__9067 = chunk__9034_9060;
var G__9068 = count__9035_9061;
var G__9069 = (i__9036_9062 + (1));
seq__9033_9059 = G__9066;
chunk__9034_9060 = G__9067;
count__9035_9061 = G__9068;
i__9036_9062 = G__9069;
continue;
} else {
var temp__5804__auto___9070__$1 = cljs.core.seq.call(null,seq__9033_9059);
if(temp__5804__auto___9070__$1){
var seq__9033_9071__$1 = temp__5804__auto___9070__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9033_9071__$1)){
var c__5525__auto___9072 = cljs.core.chunk_first.call(null,seq__9033_9071__$1);
var G__9073 = cljs.core.chunk_rest.call(null,seq__9033_9071__$1);
var G__9074 = c__5525__auto___9072;
var G__9075 = cljs.core.count.call(null,c__5525__auto___9072);
var G__9076 = (0);
seq__9033_9059 = G__9073;
chunk__9034_9060 = G__9074;
count__9035_9061 = G__9075;
i__9036_9062 = G__9076;
continue;
} else {
var vec__9046_9077 = cljs.core.first.call(null,seq__9033_9071__$1);
var k_9078__$1 = cljs.core.nth.call(null,vec__9046_9077,(0),null);
var v_9079__$1 = cljs.core.nth.call(null,vec__9046_9077,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_9078__$1),"\": ",emit_js_object_val.call(null,v_9079__$1));


var G__9080 = cljs.core.next.call(null,seq__9033_9071__$1);
var G__9081 = null;
var G__9082 = (0);
var G__9083 = (0);
seq__9033_9059 = G__9080;
chunk__9034_9060 = G__9081;
count__9035_9061 = G__9082;
i__9036_9062 = G__9083;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__9084){
var map__9085 = p__9084;
var map__9085__$1 = cljs.core.__destructure_map.call(null,map__9085);
var keys = cljs.core.get.call(null,map__9085__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__9085__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__9085__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__9086){
var map__9087 = p__9086;
var map__9087__$1 = cljs.core.__destructure_map.call(null,map__9087);
var items = cljs.core.get.call(null,map__9087__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__9087__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__9088){
var map__9089 = p__9088;
var map__9089__$1 = cljs.core.__destructure_map.call(null,map__9089);
var expr = cljs.core.get.call(null,map__9089__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__9090){
var map__9091 = p__9090;
var map__9091__$1 = cljs.core.__destructure_map.call(null,map__9091);
var form = cljs.core.get.call(null,map__9091__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__9091__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__9092 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__9092__$1 = cljs.core.__destructure_map.call(null,map__9092);
var op = cljs.core.get.call(null,map__9092__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__9092__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__9092__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__9093 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__9093__$1 = cljs.core.__destructure_map.call(null,map__9093);
var op = cljs.core.get.call(null,map__9093__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__9093__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__9093__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__9094){
var map__9095 = p__9094;
var map__9095__$1 = cljs.core.__destructure_map.call(null,map__9095);
var test = cljs.core.get.call(null,map__9095__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__9095__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__9095__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__9095__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__9095__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__9096){
var map__9097 = p__9096;
var map__9097__$1 = cljs.core.__destructure_map.call(null,map__9097);
var v = cljs.core.get.call(null,map__9097__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__9097__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__9097__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__9097__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__9098_9126 = cljs.core.seq.call(null,nodes);
var chunk__9099_9127 = null;
var count__9100_9128 = (0);
var i__9101_9129 = (0);
while(true){
if((i__9101_9129 < count__9100_9128)){
var map__9114_9130 = cljs.core._nth.call(null,chunk__9099_9127,i__9101_9129);
var map__9114_9131__$1 = cljs.core.__destructure_map.call(null,map__9114_9130);
var ts_9132 = cljs.core.get.call(null,map__9114_9131__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__9115_9133 = cljs.core.get.call(null,map__9114_9131__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__9115_9134__$1 = cljs.core.__destructure_map.call(null,map__9115_9133);
var then_9135 = cljs.core.get.call(null,map__9115_9134__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__9116_9136 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_9132));
var chunk__9117_9137 = null;
var count__9118_9138 = (0);
var i__9119_9139 = (0);
while(true){
if((i__9119_9139 < count__9118_9138)){
var test_9140 = cljs.core._nth.call(null,chunk__9117_9137,i__9119_9139);
cljs.compiler.emitln.call(null,"case ",test_9140,":");


var G__9141 = seq__9116_9136;
var G__9142 = chunk__9117_9137;
var G__9143 = count__9118_9138;
var G__9144 = (i__9119_9139 + (1));
seq__9116_9136 = G__9141;
chunk__9117_9137 = G__9142;
count__9118_9138 = G__9143;
i__9119_9139 = G__9144;
continue;
} else {
var temp__5804__auto___9145 = cljs.core.seq.call(null,seq__9116_9136);
if(temp__5804__auto___9145){
var seq__9116_9146__$1 = temp__5804__auto___9145;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9116_9146__$1)){
var c__5525__auto___9147 = cljs.core.chunk_first.call(null,seq__9116_9146__$1);
var G__9148 = cljs.core.chunk_rest.call(null,seq__9116_9146__$1);
var G__9149 = c__5525__auto___9147;
var G__9150 = cljs.core.count.call(null,c__5525__auto___9147);
var G__9151 = (0);
seq__9116_9136 = G__9148;
chunk__9117_9137 = G__9149;
count__9118_9138 = G__9150;
i__9119_9139 = G__9151;
continue;
} else {
var test_9152 = cljs.core.first.call(null,seq__9116_9146__$1);
cljs.compiler.emitln.call(null,"case ",test_9152,":");


var G__9153 = cljs.core.next.call(null,seq__9116_9146__$1);
var G__9154 = null;
var G__9155 = (0);
var G__9156 = (0);
seq__9116_9136 = G__9153;
chunk__9117_9137 = G__9154;
count__9118_9138 = G__9155;
i__9119_9139 = G__9156;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_9135);
} else {
cljs.compiler.emitln.call(null,then_9135);
}

cljs.compiler.emitln.call(null,"break;");


var G__9157 = seq__9098_9126;
var G__9158 = chunk__9099_9127;
var G__9159 = count__9100_9128;
var G__9160 = (i__9101_9129 + (1));
seq__9098_9126 = G__9157;
chunk__9099_9127 = G__9158;
count__9100_9128 = G__9159;
i__9101_9129 = G__9160;
continue;
} else {
var temp__5804__auto___9161 = cljs.core.seq.call(null,seq__9098_9126);
if(temp__5804__auto___9161){
var seq__9098_9162__$1 = temp__5804__auto___9161;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9098_9162__$1)){
var c__5525__auto___9163 = cljs.core.chunk_first.call(null,seq__9098_9162__$1);
var G__9164 = cljs.core.chunk_rest.call(null,seq__9098_9162__$1);
var G__9165 = c__5525__auto___9163;
var G__9166 = cljs.core.count.call(null,c__5525__auto___9163);
var G__9167 = (0);
seq__9098_9126 = G__9164;
chunk__9099_9127 = G__9165;
count__9100_9128 = G__9166;
i__9101_9129 = G__9167;
continue;
} else {
var map__9120_9168 = cljs.core.first.call(null,seq__9098_9162__$1);
var map__9120_9169__$1 = cljs.core.__destructure_map.call(null,map__9120_9168);
var ts_9170 = cljs.core.get.call(null,map__9120_9169__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__9121_9171 = cljs.core.get.call(null,map__9120_9169__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__9121_9172__$1 = cljs.core.__destructure_map.call(null,map__9121_9171);
var then_9173 = cljs.core.get.call(null,map__9121_9172__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__9122_9174 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_9170));
var chunk__9123_9175 = null;
var count__9124_9176 = (0);
var i__9125_9177 = (0);
while(true){
if((i__9125_9177 < count__9124_9176)){
var test_9178 = cljs.core._nth.call(null,chunk__9123_9175,i__9125_9177);
cljs.compiler.emitln.call(null,"case ",test_9178,":");


var G__9179 = seq__9122_9174;
var G__9180 = chunk__9123_9175;
var G__9181 = count__9124_9176;
var G__9182 = (i__9125_9177 + (1));
seq__9122_9174 = G__9179;
chunk__9123_9175 = G__9180;
count__9124_9176 = G__9181;
i__9125_9177 = G__9182;
continue;
} else {
var temp__5804__auto___9183__$1 = cljs.core.seq.call(null,seq__9122_9174);
if(temp__5804__auto___9183__$1){
var seq__9122_9184__$1 = temp__5804__auto___9183__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9122_9184__$1)){
var c__5525__auto___9185 = cljs.core.chunk_first.call(null,seq__9122_9184__$1);
var G__9186 = cljs.core.chunk_rest.call(null,seq__9122_9184__$1);
var G__9187 = c__5525__auto___9185;
var G__9188 = cljs.core.count.call(null,c__5525__auto___9185);
var G__9189 = (0);
seq__9122_9174 = G__9186;
chunk__9123_9175 = G__9187;
count__9124_9176 = G__9188;
i__9125_9177 = G__9189;
continue;
} else {
var test_9190 = cljs.core.first.call(null,seq__9122_9184__$1);
cljs.compiler.emitln.call(null,"case ",test_9190,":");


var G__9191 = cljs.core.next.call(null,seq__9122_9184__$1);
var G__9192 = null;
var G__9193 = (0);
var G__9194 = (0);
seq__9122_9174 = G__9191;
chunk__9123_9175 = G__9192;
count__9124_9176 = G__9193;
i__9125_9177 = G__9194;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_9173);
} else {
cljs.compiler.emitln.call(null,then_9173);
}

cljs.compiler.emitln.call(null,"break;");


var G__9195 = cljs.core.next.call(null,seq__9098_9162__$1);
var G__9196 = null;
var G__9197 = (0);
var G__9198 = (0);
seq__9098_9126 = G__9195;
chunk__9099_9127 = G__9196;
count__9100_9128 = G__9197;
i__9101_9129 = G__9198;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__9199){
var map__9200 = p__9199;
var map__9200__$1 = cljs.core.__destructure_map.call(null,map__9200);
var throw$ = cljs.core.get.call(null,map__9200__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__9200__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__9202 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__9202,(0),null);
var rstr = cljs.core.nth.call(null,vec__9202,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,(function (p1__9201_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__9201_SHARP_);
}),clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__9205 = ["function(",clojure.string.join.call(null,",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__9205,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__9205;
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
return ["{",clojure.string.join.call(null,"|",cljs.core.map.call(null,(function (p1__9206_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__9206_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__9207 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__9208 = cljs.core.seq.call(null,vec__9207);
var first__9209 = cljs.core.first.call(null,seq__9208);
var seq__9208__$1 = cljs.core.next.call(null,seq__9208);
var p = first__9209;
var first__9209__$1 = cljs.core.first.call(null,seq__9208__$1);
var seq__9208__$2 = cljs.core.next.call(null,seq__9208__$1);
var ts = first__9209__$1;
var first__9209__$2 = cljs.core.first.call(null,seq__9208__$2);
var seq__9208__$3 = cljs.core.next.call(null,seq__9208__$2);
var n = first__9209__$2;
var xs = seq__9208__$3;
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
var vec__9210 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__9211 = cljs.core.seq.call(null,vec__9210);
var first__9212 = cljs.core.first.call(null,seq__9211);
var seq__9211__$1 = cljs.core.next.call(null,seq__9211);
var p = first__9212;
var first__9212__$1 = cljs.core.first.call(null,seq__9211__$1);
var seq__9211__$2 = cljs.core.next.call(null,seq__9211__$1);
var ts = first__9212__$1;
var xs = seq__9211__$2;
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
var G__9215 = arguments.length;
switch (G__9215) {
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
var vec__9223 = cljs.core.map.call(null,(function (p1__9213_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__9213_SHARP_);
} else {
return p1__9213_SHARP_;
}
}),clojure.string.split_lines.call(null,e));
var seq__9224 = cljs.core.seq.call(null,vec__9223);
var first__9225 = cljs.core.first.call(null,seq__9224);
var seq__9224__$1 = cljs.core.next.call(null,seq__9224);
var x = first__9225;
var ys = seq__9224__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__9226 = cljs.core.seq.call(null,ys);
var chunk__9227 = null;
var count__9228 = (0);
var i__9229 = (0);
while(true){
if((i__9229 < count__9228)){
var next_line = cljs.core._nth.call(null,chunk__9227,i__9229);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__9235 = seq__9226;
var G__9236 = chunk__9227;
var G__9237 = count__9228;
var G__9238 = (i__9229 + (1));
seq__9226 = G__9235;
chunk__9227 = G__9236;
count__9228 = G__9237;
i__9229 = G__9238;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__9226);
if(temp__5804__auto__){
var seq__9226__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9226__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__9226__$1);
var G__9239 = cljs.core.chunk_rest.call(null,seq__9226__$1);
var G__9240 = c__5525__auto__;
var G__9241 = cljs.core.count.call(null,c__5525__auto__);
var G__9242 = (0);
seq__9226 = G__9239;
chunk__9227 = G__9240;
count__9228 = G__9241;
i__9229 = G__9242;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__9226__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__9243 = cljs.core.next.call(null,seq__9226__$1);
var G__9244 = null;
var G__9245 = (0);
var G__9246 = (0);
seq__9226 = G__9243;
chunk__9227 = G__9244;
count__9228 = G__9245;
i__9229 = G__9246;
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

var seq__9230_9247 = cljs.core.seq.call(null,docs__$2);
var chunk__9231_9248 = null;
var count__9232_9249 = (0);
var i__9233_9250 = (0);
while(true){
if((i__9233_9250 < count__9232_9249)){
var e_9251 = cljs.core._nth.call(null,chunk__9231_9248,i__9233_9250);
if(cljs.core.truth_(e_9251)){
print_comment_lines.call(null,e_9251);
} else {
}


var G__9252 = seq__9230_9247;
var G__9253 = chunk__9231_9248;
var G__9254 = count__9232_9249;
var G__9255 = (i__9233_9250 + (1));
seq__9230_9247 = G__9252;
chunk__9231_9248 = G__9253;
count__9232_9249 = G__9254;
i__9233_9250 = G__9255;
continue;
} else {
var temp__5804__auto___9256 = cljs.core.seq.call(null,seq__9230_9247);
if(temp__5804__auto___9256){
var seq__9230_9257__$1 = temp__5804__auto___9256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9230_9257__$1)){
var c__5525__auto___9258 = cljs.core.chunk_first.call(null,seq__9230_9257__$1);
var G__9259 = cljs.core.chunk_rest.call(null,seq__9230_9257__$1);
var G__9260 = c__5525__auto___9258;
var G__9261 = cljs.core.count.call(null,c__5525__auto___9258);
var G__9262 = (0);
seq__9230_9247 = G__9259;
chunk__9231_9248 = G__9260;
count__9232_9249 = G__9261;
i__9233_9250 = G__9262;
continue;
} else {
var e_9263 = cljs.core.first.call(null,seq__9230_9257__$1);
if(cljs.core.truth_(e_9263)){
print_comment_lines.call(null,e_9263);
} else {
}


var G__9264 = cljs.core.next.call(null,seq__9230_9257__$1);
var G__9265 = null;
var G__9266 = (0);
var G__9267 = (0);
seq__9230_9247 = G__9264;
chunk__9231_9248 = G__9265;
count__9232_9249 = G__9266;
i__9233_9250 = G__9267;
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
var and__5000__auto__ = cljs.core.some.call(null,(function (p1__9269_SHARP_){
return goog.string.startsWith(p1__9269_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__9270){
var map__9271 = p__9270;
var map__9271__$1 = cljs.core.__destructure_map.call(null,map__9271);
var doc = cljs.core.get.call(null,map__9271__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__9271__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__9271__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.call(null,map__9271__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.call(null,map__9271__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__9271__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__9271__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__9271__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__9271__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__9271__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__9272){
var map__9273 = p__9272;
var map__9273__$1 = cljs.core.__destructure_map.call(null,map__9273);
var name = cljs.core.get.call(null,map__9273__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__9273__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__9273__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__9274_9298 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__9275_9299 = null;
var count__9276_9300 = (0);
var i__9277_9301 = (0);
while(true){
if((i__9277_9301 < count__9276_9300)){
var vec__9284_9302 = cljs.core._nth.call(null,chunk__9275_9299,i__9277_9301);
var i_9303 = cljs.core.nth.call(null,vec__9284_9302,(0),null);
var param_9304 = cljs.core.nth.call(null,vec__9284_9302,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_9304);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__9305 = seq__9274_9298;
var G__9306 = chunk__9275_9299;
var G__9307 = count__9276_9300;
var G__9308 = (i__9277_9301 + (1));
seq__9274_9298 = G__9305;
chunk__9275_9299 = G__9306;
count__9276_9300 = G__9307;
i__9277_9301 = G__9308;
continue;
} else {
var temp__5804__auto___9309 = cljs.core.seq.call(null,seq__9274_9298);
if(temp__5804__auto___9309){
var seq__9274_9310__$1 = temp__5804__auto___9309;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9274_9310__$1)){
var c__5525__auto___9311 = cljs.core.chunk_first.call(null,seq__9274_9310__$1);
var G__9312 = cljs.core.chunk_rest.call(null,seq__9274_9310__$1);
var G__9313 = c__5525__auto___9311;
var G__9314 = cljs.core.count.call(null,c__5525__auto___9311);
var G__9315 = (0);
seq__9274_9298 = G__9312;
chunk__9275_9299 = G__9313;
count__9276_9300 = G__9314;
i__9277_9301 = G__9315;
continue;
} else {
var vec__9287_9316 = cljs.core.first.call(null,seq__9274_9310__$1);
var i_9317 = cljs.core.nth.call(null,vec__9287_9316,(0),null);
var param_9318 = cljs.core.nth.call(null,vec__9287_9316,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_9318);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__9319 = cljs.core.next.call(null,seq__9274_9310__$1);
var G__9320 = null;
var G__9321 = (0);
var G__9322 = (0);
seq__9274_9298 = G__9319;
chunk__9275_9299 = G__9320;
count__9276_9300 = G__9321;
i__9277_9301 = G__9322;
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

var seq__9290_9323 = cljs.core.seq.call(null,params);
var chunk__9291_9324 = null;
var count__9292_9325 = (0);
var i__9293_9326 = (0);
while(true){
if((i__9293_9326 < count__9292_9325)){
var param_9327 = cljs.core._nth.call(null,chunk__9291_9324,i__9293_9326);
cljs.compiler.emit.call(null,param_9327);

if(cljs.core._EQ_.call(null,param_9327,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9328 = seq__9290_9323;
var G__9329 = chunk__9291_9324;
var G__9330 = count__9292_9325;
var G__9331 = (i__9293_9326 + (1));
seq__9290_9323 = G__9328;
chunk__9291_9324 = G__9329;
count__9292_9325 = G__9330;
i__9293_9326 = G__9331;
continue;
} else {
var temp__5804__auto___9332 = cljs.core.seq.call(null,seq__9290_9323);
if(temp__5804__auto___9332){
var seq__9290_9333__$1 = temp__5804__auto___9332;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9290_9333__$1)){
var c__5525__auto___9334 = cljs.core.chunk_first.call(null,seq__9290_9333__$1);
var G__9335 = cljs.core.chunk_rest.call(null,seq__9290_9333__$1);
var G__9336 = c__5525__auto___9334;
var G__9337 = cljs.core.count.call(null,c__5525__auto___9334);
var G__9338 = (0);
seq__9290_9323 = G__9335;
chunk__9291_9324 = G__9336;
count__9292_9325 = G__9337;
i__9293_9326 = G__9338;
continue;
} else {
var param_9339 = cljs.core.first.call(null,seq__9290_9333__$1);
cljs.compiler.emit.call(null,param_9339);

if(cljs.core._EQ_.call(null,param_9339,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9340 = cljs.core.next.call(null,seq__9290_9333__$1);
var G__9341 = null;
var G__9342 = (0);
var G__9343 = (0);
seq__9290_9323 = G__9340;
chunk__9291_9324 = G__9341;
count__9292_9325 = G__9342;
i__9293_9326 = G__9343;
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

var seq__9294_9344 = cljs.core.seq.call(null,params);
var chunk__9295_9345 = null;
var count__9296_9346 = (0);
var i__9297_9347 = (0);
while(true){
if((i__9297_9347 < count__9296_9346)){
var param_9348 = cljs.core._nth.call(null,chunk__9295_9345,i__9297_9347);
cljs.compiler.emit.call(null,param_9348);

if(cljs.core._EQ_.call(null,param_9348,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9349 = seq__9294_9344;
var G__9350 = chunk__9295_9345;
var G__9351 = count__9296_9346;
var G__9352 = (i__9297_9347 + (1));
seq__9294_9344 = G__9349;
chunk__9295_9345 = G__9350;
count__9296_9346 = G__9351;
i__9297_9347 = G__9352;
continue;
} else {
var temp__5804__auto___9353 = cljs.core.seq.call(null,seq__9294_9344);
if(temp__5804__auto___9353){
var seq__9294_9354__$1 = temp__5804__auto___9353;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9294_9354__$1)){
var c__5525__auto___9355 = cljs.core.chunk_first.call(null,seq__9294_9354__$1);
var G__9356 = cljs.core.chunk_rest.call(null,seq__9294_9354__$1);
var G__9357 = c__5525__auto___9355;
var G__9358 = cljs.core.count.call(null,c__5525__auto___9355);
var G__9359 = (0);
seq__9294_9344 = G__9356;
chunk__9295_9345 = G__9357;
count__9296_9346 = G__9358;
i__9297_9347 = G__9359;
continue;
} else {
var param_9360 = cljs.core.first.call(null,seq__9294_9354__$1);
cljs.compiler.emit.call(null,param_9360);

if(cljs.core._EQ_.call(null,param_9360,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9361 = cljs.core.next.call(null,seq__9294_9354__$1);
var G__9362 = null;
var G__9363 = (0);
var G__9364 = (0);
seq__9294_9344 = G__9361;
chunk__9295_9345 = G__9362;
count__9296_9346 = G__9363;
i__9297_9347 = G__9364;
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
var seq__9365 = cljs.core.seq.call(null,params);
var chunk__9366 = null;
var count__9367 = (0);
var i__9368 = (0);
while(true){
if((i__9368 < count__9367)){
var param = cljs.core._nth.call(null,chunk__9366,i__9368);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9369 = seq__9365;
var G__9370 = chunk__9366;
var G__9371 = count__9367;
var G__9372 = (i__9368 + (1));
seq__9365 = G__9369;
chunk__9366 = G__9370;
count__9367 = G__9371;
i__9368 = G__9372;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__9365);
if(temp__5804__auto__){
var seq__9365__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9365__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__9365__$1);
var G__9373 = cljs.core.chunk_rest.call(null,seq__9365__$1);
var G__9374 = c__5525__auto__;
var G__9375 = cljs.core.count.call(null,c__5525__auto__);
var G__9376 = (0);
seq__9365 = G__9373;
chunk__9366 = G__9374;
count__9367 = G__9375;
i__9368 = G__9376;
continue;
} else {
var param = cljs.core.first.call(null,seq__9365__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9377 = cljs.core.next.call(null,seq__9365__$1);
var G__9378 = null;
var G__9379 = (0);
var G__9380 = (0);
seq__9365 = G__9377;
chunk__9366 = G__9378;
count__9367 = G__9379;
i__9368 = G__9380;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__9381){
var map__9382 = p__9381;
var map__9382__$1 = cljs.core.__destructure_map.call(null,map__9382);
var expr = cljs.core.get.call(null,map__9382__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__9382__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__9382__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__9382__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__9382__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__9382__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__9383){
var map__9384 = p__9383;
var map__9384__$1 = cljs.core.__destructure_map.call(null,map__9384);
var f = map__9384__$1;
var expr = cljs.core.get.call(null,map__9384__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__9384__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__9384__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__9384__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__9384__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__9384__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__9384__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__9384__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_9393__$1 = (function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_9394 = cljs.compiler.munge.call(null,name_9393__$1);
var delegate_name_9395 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_9394),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_9395," = function (");

var seq__9385_9396 = cljs.core.seq.call(null,params);
var chunk__9386_9397 = null;
var count__9387_9398 = (0);
var i__9388_9399 = (0);
while(true){
if((i__9388_9399 < count__9387_9398)){
var param_9400 = cljs.core._nth.call(null,chunk__9386_9397,i__9388_9399);
cljs.compiler.emit.call(null,param_9400);

if(cljs.core._EQ_.call(null,param_9400,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9401 = seq__9385_9396;
var G__9402 = chunk__9386_9397;
var G__9403 = count__9387_9398;
var G__9404 = (i__9388_9399 + (1));
seq__9385_9396 = G__9401;
chunk__9386_9397 = G__9402;
count__9387_9398 = G__9403;
i__9388_9399 = G__9404;
continue;
} else {
var temp__5804__auto___9405 = cljs.core.seq.call(null,seq__9385_9396);
if(temp__5804__auto___9405){
var seq__9385_9406__$1 = temp__5804__auto___9405;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9385_9406__$1)){
var c__5525__auto___9407 = cljs.core.chunk_first.call(null,seq__9385_9406__$1);
var G__9408 = cljs.core.chunk_rest.call(null,seq__9385_9406__$1);
var G__9409 = c__5525__auto___9407;
var G__9410 = cljs.core.count.call(null,c__5525__auto___9407);
var G__9411 = (0);
seq__9385_9396 = G__9408;
chunk__9386_9397 = G__9409;
count__9387_9398 = G__9410;
i__9388_9399 = G__9411;
continue;
} else {
var param_9412 = cljs.core.first.call(null,seq__9385_9406__$1);
cljs.compiler.emit.call(null,param_9412);

if(cljs.core._EQ_.call(null,param_9412,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9413 = cljs.core.next.call(null,seq__9385_9406__$1);
var G__9414 = null;
var G__9415 = (0);
var G__9416 = (0);
seq__9385_9396 = G__9413;
chunk__9386_9397 = G__9414;
count__9387_9398 = G__9415;
i__9388_9399 = G__9416;
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

cljs.compiler.emitln.call(null,"var ",mname_9394," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_9417 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_9417,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_9395,".call(this,");

var seq__9389_9418 = cljs.core.seq.call(null,params);
var chunk__9390_9419 = null;
var count__9391_9420 = (0);
var i__9392_9421 = (0);
while(true){
if((i__9392_9421 < count__9391_9420)){
var param_9422 = cljs.core._nth.call(null,chunk__9390_9419,i__9392_9421);
cljs.compiler.emit.call(null,param_9422);

if(cljs.core._EQ_.call(null,param_9422,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9423 = seq__9389_9418;
var G__9424 = chunk__9390_9419;
var G__9425 = count__9391_9420;
var G__9426 = (i__9392_9421 + (1));
seq__9389_9418 = G__9423;
chunk__9390_9419 = G__9424;
count__9391_9420 = G__9425;
i__9392_9421 = G__9426;
continue;
} else {
var temp__5804__auto___9427 = cljs.core.seq.call(null,seq__9389_9418);
if(temp__5804__auto___9427){
var seq__9389_9428__$1 = temp__5804__auto___9427;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9389_9428__$1)){
var c__5525__auto___9429 = cljs.core.chunk_first.call(null,seq__9389_9428__$1);
var G__9430 = cljs.core.chunk_rest.call(null,seq__9389_9428__$1);
var G__9431 = c__5525__auto___9429;
var G__9432 = cljs.core.count.call(null,c__5525__auto___9429);
var G__9433 = (0);
seq__9389_9418 = G__9430;
chunk__9390_9419 = G__9431;
count__9391_9420 = G__9432;
i__9392_9421 = G__9433;
continue;
} else {
var param_9434 = cljs.core.first.call(null,seq__9389_9428__$1);
cljs.compiler.emit.call(null,param_9434);

if(cljs.core._EQ_.call(null,param_9434,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9435 = cljs.core.next.call(null,seq__9389_9428__$1);
var G__9436 = null;
var G__9437 = (0);
var G__9438 = (0);
seq__9389_9418 = G__9435;
chunk__9390_9419 = G__9436;
count__9391_9420 = G__9437;
i__9392_9421 = G__9438;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_9394,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_9394,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_9393__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_9394,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_9395,";");

cljs.compiler.emitln.call(null,"return ",mname_9394,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__9442){
var map__9443 = p__9442;
var map__9443__$1 = cljs.core.__destructure_map.call(null,map__9443);
var variadic = cljs.core.get.call(null,map__9443__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__9443__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__9443__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__9443__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__9443__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__9443__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.call(null,map__9443__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.call(null,map__9443__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,(function (p1__9439_SHARP_){
var and__5000__auto__ = p1__9439_SHARP_;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__9439_SHARP_));
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
var name_9495__$1 = (function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_9496 = cljs.compiler.munge.call(null,name_9495__$1);
var maxparams_9497 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_9498 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_9496),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_9499 = cljs.core.sort_by.call(null,(function (p1__9440_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__9440_SHARP_)));
}),cljs.core.seq.call(null,mmap_9498));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_9496," = null;");

var seq__9444_9500 = cljs.core.seq.call(null,ms_9499);
var chunk__9445_9501 = null;
var count__9446_9502 = (0);
var i__9447_9503 = (0);
while(true){
if((i__9447_9503 < count__9446_9502)){
var vec__9454_9504 = cljs.core._nth.call(null,chunk__9445_9501,i__9447_9503);
var n_9505 = cljs.core.nth.call(null,vec__9454_9504,(0),null);
var meth_9506 = cljs.core.nth.call(null,vec__9454_9504,(1),null);
cljs.compiler.emits.call(null,"var ",n_9505," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_9506))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_9506);
} else {
cljs.compiler.emit_fn_method.call(null,meth_9506);
}

cljs.compiler.emitln.call(null,";");


var G__9507 = seq__9444_9500;
var G__9508 = chunk__9445_9501;
var G__9509 = count__9446_9502;
var G__9510 = (i__9447_9503 + (1));
seq__9444_9500 = G__9507;
chunk__9445_9501 = G__9508;
count__9446_9502 = G__9509;
i__9447_9503 = G__9510;
continue;
} else {
var temp__5804__auto___9511 = cljs.core.seq.call(null,seq__9444_9500);
if(temp__5804__auto___9511){
var seq__9444_9512__$1 = temp__5804__auto___9511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9444_9512__$1)){
var c__5525__auto___9513 = cljs.core.chunk_first.call(null,seq__9444_9512__$1);
var G__9514 = cljs.core.chunk_rest.call(null,seq__9444_9512__$1);
var G__9515 = c__5525__auto___9513;
var G__9516 = cljs.core.count.call(null,c__5525__auto___9513);
var G__9517 = (0);
seq__9444_9500 = G__9514;
chunk__9445_9501 = G__9515;
count__9446_9502 = G__9516;
i__9447_9503 = G__9517;
continue;
} else {
var vec__9457_9518 = cljs.core.first.call(null,seq__9444_9512__$1);
var n_9519 = cljs.core.nth.call(null,vec__9457_9518,(0),null);
var meth_9520 = cljs.core.nth.call(null,vec__9457_9518,(1),null);
cljs.compiler.emits.call(null,"var ",n_9519," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_9520))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_9520);
} else {
cljs.compiler.emit_fn_method.call(null,meth_9520);
}

cljs.compiler.emitln.call(null,";");


var G__9521 = cljs.core.next.call(null,seq__9444_9512__$1);
var G__9522 = null;
var G__9523 = (0);
var G__9524 = (0);
seq__9444_9500 = G__9521;
chunk__9445_9501 = G__9522;
count__9446_9502 = G__9523;
i__9447_9503 = G__9524;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_9496," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_9497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_9497)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_9497));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__9460_9525 = cljs.core.seq.call(null,ms_9499);
var chunk__9461_9526 = null;
var count__9462_9527 = (0);
var i__9463_9528 = (0);
while(true){
if((i__9463_9528 < count__9462_9527)){
var vec__9470_9529 = cljs.core._nth.call(null,chunk__9461_9526,i__9463_9528);
var n_9530 = cljs.core.nth.call(null,vec__9470_9529,(0),null);
var meth_9531 = cljs.core.nth.call(null,vec__9470_9529,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_9531))){
cljs.compiler.emitln.call(null,"default:");

var restarg_9532 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_9532," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_9533 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_9532," = new cljs.core.IndexedSeq(",a_9533,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_9530,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_9497)),(((cljs.core.count.call(null,maxparams_9497) > (1)))?", ":null),restarg_9532,");");
} else {
var pcnt_9534 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_9531));
cljs.compiler.emitln.call(null,"case ",pcnt_9534,":");

cljs.compiler.emitln.call(null,"return ",n_9530,".call(this",(((pcnt_9534 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_9534,maxparams_9497)),null,(1),null)),(2),null))),");");
}


var G__9535 = seq__9460_9525;
var G__9536 = chunk__9461_9526;
var G__9537 = count__9462_9527;
var G__9538 = (i__9463_9528 + (1));
seq__9460_9525 = G__9535;
chunk__9461_9526 = G__9536;
count__9462_9527 = G__9537;
i__9463_9528 = G__9538;
continue;
} else {
var temp__5804__auto___9539 = cljs.core.seq.call(null,seq__9460_9525);
if(temp__5804__auto___9539){
var seq__9460_9540__$1 = temp__5804__auto___9539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9460_9540__$1)){
var c__5525__auto___9541 = cljs.core.chunk_first.call(null,seq__9460_9540__$1);
var G__9542 = cljs.core.chunk_rest.call(null,seq__9460_9540__$1);
var G__9543 = c__5525__auto___9541;
var G__9544 = cljs.core.count.call(null,c__5525__auto___9541);
var G__9545 = (0);
seq__9460_9525 = G__9542;
chunk__9461_9526 = G__9543;
count__9462_9527 = G__9544;
i__9463_9528 = G__9545;
continue;
} else {
var vec__9473_9546 = cljs.core.first.call(null,seq__9460_9540__$1);
var n_9547 = cljs.core.nth.call(null,vec__9473_9546,(0),null);
var meth_9548 = cljs.core.nth.call(null,vec__9473_9546,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_9548))){
cljs.compiler.emitln.call(null,"default:");

var restarg_9549 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_9549," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_9550 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_9549," = new cljs.core.IndexedSeq(",a_9550,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_9547,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_9497)),(((cljs.core.count.call(null,maxparams_9497) > (1)))?", ":null),restarg_9549,");");
} else {
var pcnt_9551 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_9548));
cljs.compiler.emitln.call(null,"case ",pcnt_9551,":");

cljs.compiler.emitln.call(null,"return ",n_9547,".call(this",(((pcnt_9551 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_9551,maxparams_9497)),null,(1),null)),(2),null))),");");
}


var G__9552 = cljs.core.next.call(null,seq__9460_9540__$1);
var G__9553 = null;
var G__9554 = (0);
var G__9555 = (0);
seq__9460_9525 = G__9552;
chunk__9461_9526 = G__9553;
count__9462_9527 = G__9554;
i__9463_9528 = G__9555;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_9556 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_9499)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_9556,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_9496,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_9496,".cljs$lang$applyTo = ",cljs.core.some.call(null,(function (p1__9441_SHARP_){
var vec__9476 = p1__9441_SHARP_;
var n = cljs.core.nth.call(null,vec__9476,(0),null);
var m = cljs.core.nth.call(null,vec__9476,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_9499),".cljs$lang$applyTo;");
} else {
}

var seq__9479_9557 = cljs.core.seq.call(null,ms_9499);
var chunk__9480_9558 = null;
var count__9481_9559 = (0);
var i__9482_9560 = (0);
while(true){
if((i__9482_9560 < count__9481_9559)){
var vec__9489_9561 = cljs.core._nth.call(null,chunk__9480_9558,i__9482_9560);
var n_9562 = cljs.core.nth.call(null,vec__9489_9561,(0),null);
var meth_9563 = cljs.core.nth.call(null,vec__9489_9561,(1),null);
var c_9564 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_9563));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_9563))){
cljs.compiler.emitln.call(null,mname_9496,".cljs$core$IFn$_invoke$arity$variadic = ",n_9562,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_9496,".cljs$core$IFn$_invoke$arity$",c_9564," = ",n_9562,";");
}


var G__9565 = seq__9479_9557;
var G__9566 = chunk__9480_9558;
var G__9567 = count__9481_9559;
var G__9568 = (i__9482_9560 + (1));
seq__9479_9557 = G__9565;
chunk__9480_9558 = G__9566;
count__9481_9559 = G__9567;
i__9482_9560 = G__9568;
continue;
} else {
var temp__5804__auto___9569 = cljs.core.seq.call(null,seq__9479_9557);
if(temp__5804__auto___9569){
var seq__9479_9570__$1 = temp__5804__auto___9569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9479_9570__$1)){
var c__5525__auto___9571 = cljs.core.chunk_first.call(null,seq__9479_9570__$1);
var G__9572 = cljs.core.chunk_rest.call(null,seq__9479_9570__$1);
var G__9573 = c__5525__auto___9571;
var G__9574 = cljs.core.count.call(null,c__5525__auto___9571);
var G__9575 = (0);
seq__9479_9557 = G__9572;
chunk__9480_9558 = G__9573;
count__9481_9559 = G__9574;
i__9482_9560 = G__9575;
continue;
} else {
var vec__9492_9576 = cljs.core.first.call(null,seq__9479_9570__$1);
var n_9577 = cljs.core.nth.call(null,vec__9492_9576,(0),null);
var meth_9578 = cljs.core.nth.call(null,vec__9492_9576,(1),null);
var c_9579 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_9578));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_9578))){
cljs.compiler.emitln.call(null,mname_9496,".cljs$core$IFn$_invoke$arity$variadic = ",n_9577,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_9496,".cljs$core$IFn$_invoke$arity$",c_9579," = ",n_9577,";");
}


var G__9580 = cljs.core.next.call(null,seq__9479_9570__$1);
var G__9581 = null;
var G__9582 = (0);
var G__9583 = (0);
seq__9479_9557 = G__9580;
chunk__9480_9558 = G__9581;
count__9481_9559 = G__9582;
i__9482_9560 = G__9583;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_9496,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__9584){
var map__9585 = p__9584;
var map__9585__$1 = cljs.core.__destructure_map.call(null,map__9585);
var statements = cljs.core.get.call(null,map__9585__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__9585__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__9585__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__9586_9590 = cljs.core.seq.call(null,statements);
var chunk__9587_9591 = null;
var count__9588_9592 = (0);
var i__9589_9593 = (0);
while(true){
if((i__9589_9593 < count__9588_9592)){
var s_9594 = cljs.core._nth.call(null,chunk__9587_9591,i__9589_9593);
cljs.compiler.emitln.call(null,s_9594);


var G__9595 = seq__9586_9590;
var G__9596 = chunk__9587_9591;
var G__9597 = count__9588_9592;
var G__9598 = (i__9589_9593 + (1));
seq__9586_9590 = G__9595;
chunk__9587_9591 = G__9596;
count__9588_9592 = G__9597;
i__9589_9593 = G__9598;
continue;
} else {
var temp__5804__auto___9599 = cljs.core.seq.call(null,seq__9586_9590);
if(temp__5804__auto___9599){
var seq__9586_9600__$1 = temp__5804__auto___9599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9586_9600__$1)){
var c__5525__auto___9601 = cljs.core.chunk_first.call(null,seq__9586_9600__$1);
var G__9602 = cljs.core.chunk_rest.call(null,seq__9586_9600__$1);
var G__9603 = c__5525__auto___9601;
var G__9604 = cljs.core.count.call(null,c__5525__auto___9601);
var G__9605 = (0);
seq__9586_9590 = G__9602;
chunk__9587_9591 = G__9603;
count__9588_9592 = G__9604;
i__9589_9593 = G__9605;
continue;
} else {
var s_9606 = cljs.core.first.call(null,seq__9586_9600__$1);
cljs.compiler.emitln.call(null,s_9606);


var G__9607 = cljs.core.next.call(null,seq__9586_9600__$1);
var G__9608 = null;
var G__9609 = (0);
var G__9610 = (0);
seq__9586_9590 = G__9607;
chunk__9587_9591 = G__9608;
count__9588_9592 = G__9609;
i__9589_9593 = G__9610;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__9611){
var map__9612 = p__9611;
var map__9612__$1 = cljs.core.__destructure_map.call(null,map__9612);
var try$ = cljs.core.get.call(null,map__9612__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__9612__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__9612__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__9612__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__9612__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__9613,is_loop){
var map__9614 = p__9613;
var map__9614__$1 = cljs.core.__destructure_map.call(null,map__9614);
var expr = cljs.core.get.call(null,map__9614__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__9614__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__9614__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__9615_9625 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__9616_9626 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,(function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__9616_9626);

try{var seq__9617_9627 = cljs.core.seq.call(null,bindings);
var chunk__9618_9628 = null;
var count__9619_9629 = (0);
var i__9620_9630 = (0);
while(true){
if((i__9620_9630 < count__9619_9629)){
var map__9623_9631 = cljs.core._nth.call(null,chunk__9618_9628,i__9620_9630);
var map__9623_9632__$1 = cljs.core.__destructure_map.call(null,map__9623_9631);
var binding_9633 = map__9623_9632__$1;
var init_9634 = cljs.core.get.call(null,map__9623_9632__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_9633);

cljs.compiler.emitln.call(null," = ",init_9634,";");


var G__9635 = seq__9617_9627;
var G__9636 = chunk__9618_9628;
var G__9637 = count__9619_9629;
var G__9638 = (i__9620_9630 + (1));
seq__9617_9627 = G__9635;
chunk__9618_9628 = G__9636;
count__9619_9629 = G__9637;
i__9620_9630 = G__9638;
continue;
} else {
var temp__5804__auto___9639 = cljs.core.seq.call(null,seq__9617_9627);
if(temp__5804__auto___9639){
var seq__9617_9640__$1 = temp__5804__auto___9639;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9617_9640__$1)){
var c__5525__auto___9641 = cljs.core.chunk_first.call(null,seq__9617_9640__$1);
var G__9642 = cljs.core.chunk_rest.call(null,seq__9617_9640__$1);
var G__9643 = c__5525__auto___9641;
var G__9644 = cljs.core.count.call(null,c__5525__auto___9641);
var G__9645 = (0);
seq__9617_9627 = G__9642;
chunk__9618_9628 = G__9643;
count__9619_9629 = G__9644;
i__9620_9630 = G__9645;
continue;
} else {
var map__9624_9646 = cljs.core.first.call(null,seq__9617_9640__$1);
var map__9624_9647__$1 = cljs.core.__destructure_map.call(null,map__9624_9646);
var binding_9648 = map__9624_9647__$1;
var init_9649 = cljs.core.get.call(null,map__9624_9647__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_9648);

cljs.compiler.emitln.call(null," = ",init_9649,";");


var G__9650 = cljs.core.next.call(null,seq__9617_9640__$1);
var G__9651 = null;
var G__9652 = (0);
var G__9653 = (0);
seq__9617_9627 = G__9650;
chunk__9618_9628 = G__9651;
count__9619_9629 = G__9652;
i__9620_9630 = G__9653;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__9615_9625);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__9654){
var map__9655 = p__9654;
var map__9655__$1 = cljs.core.__destructure_map.call(null,map__9655);
var frame = cljs.core.get.call(null,map__9655__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__9655__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__9655__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__5593__auto___9656 = cljs.core.count.call(null,exprs);
var i_9657 = (0);
while(true){
if((i_9657 < n__5593__auto___9656)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_9657)," = ",exprs.call(null,i_9657),";");

var G__9658 = (i_9657 + (1));
i_9657 = G__9658;
continue;
} else {
}
break;
}

var n__5593__auto___9659 = cljs.core.count.call(null,exprs);
var i_9660 = (0);
while(true){
if((i_9660 < n__5593__auto___9659)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_9660))," = ",temps.call(null,i_9660),";");

var G__9661 = (i_9660 + (1));
i_9660 = G__9661;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__9662){
var map__9663 = p__9662;
var map__9663__$1 = cljs.core.__destructure_map.call(null,map__9663);
var expr = cljs.core.get.call(null,map__9663__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__9663__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__9663__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__9664_9672 = cljs.core.seq.call(null,bindings);
var chunk__9665_9673 = null;
var count__9666_9674 = (0);
var i__9667_9675 = (0);
while(true){
if((i__9667_9675 < count__9666_9674)){
var map__9670_9676 = cljs.core._nth.call(null,chunk__9665_9673,i__9667_9675);
var map__9670_9677__$1 = cljs.core.__destructure_map.call(null,map__9670_9676);
var binding_9678 = map__9670_9677__$1;
var init_9679 = cljs.core.get.call(null,map__9670_9677__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_9678)," = ",init_9679,";");


var G__9680 = seq__9664_9672;
var G__9681 = chunk__9665_9673;
var G__9682 = count__9666_9674;
var G__9683 = (i__9667_9675 + (1));
seq__9664_9672 = G__9680;
chunk__9665_9673 = G__9681;
count__9666_9674 = G__9682;
i__9667_9675 = G__9683;
continue;
} else {
var temp__5804__auto___9684 = cljs.core.seq.call(null,seq__9664_9672);
if(temp__5804__auto___9684){
var seq__9664_9685__$1 = temp__5804__auto___9684;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9664_9685__$1)){
var c__5525__auto___9686 = cljs.core.chunk_first.call(null,seq__9664_9685__$1);
var G__9687 = cljs.core.chunk_rest.call(null,seq__9664_9685__$1);
var G__9688 = c__5525__auto___9686;
var G__9689 = cljs.core.count.call(null,c__5525__auto___9686);
var G__9690 = (0);
seq__9664_9672 = G__9687;
chunk__9665_9673 = G__9688;
count__9666_9674 = G__9689;
i__9667_9675 = G__9690;
continue;
} else {
var map__9671_9691 = cljs.core.first.call(null,seq__9664_9685__$1);
var map__9671_9692__$1 = cljs.core.__destructure_map.call(null,map__9671_9691);
var binding_9693 = map__9671_9692__$1;
var init_9694 = cljs.core.get.call(null,map__9671_9692__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_9693)," = ",init_9694,";");


var G__9695 = cljs.core.next.call(null,seq__9664_9685__$1);
var G__9696 = null;
var G__9697 = (0);
var G__9698 = (0);
seq__9664_9672 = G__9695;
chunk__9665_9673 = G__9696;
count__9666_9674 = G__9697;
i__9667_9675 = G__9698;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__9701){
var map__9702 = p__9701;
var map__9702__$1 = cljs.core.__destructure_map.call(null,map__9702);
var expr = map__9702__$1;
var f = cljs.core.get.call(null,map__9702__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__9702__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__9702__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__9703 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__9699_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__9699_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__9700_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__9700_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__9703,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__9703,(1),null);
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
var pimpl_9706 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_9706,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_9707 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_9707,args)),(((mfa_9707 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_9707,args)),"], 0))");
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
var fprop_9708 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.call(null,"(",f__$1,fprop_9708," ? ",f__$1,fprop_9708,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_9708," ? ",f__$1,fprop_9708,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__9709){
var map__9710 = p__9709;
var map__9710__$1 = cljs.core.__destructure_map.call(null,map__9710);
var ctor = cljs.core.get.call(null,map__9710__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__9710__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__9710__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__9711){
var map__9712 = p__9711;
var map__9712__$1 = cljs.core.__destructure_map.call(null,map__9712);
var target = cljs.core.get.call(null,map__9712__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__9712__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__9712__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__9713_SHARP_){
return ["['",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__9713_SHARP_),"']"].join('');
}),xs));
} else {
return null;
}
});
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
var vec__9714 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib);
var lib_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__9714,(0),null);
var sublib = cljs.core.nth.call(null,vec__9714,(1),null);
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
var map__9717 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__9717__$1 = cljs.core.__destructure_map.call(null,map__9717);
var options = cljs.core.get.call(null,map__9717__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__9717__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__9718 = options;
var map__9718__$1 = cljs.core.__destructure_map.call(null,map__9718);
var target = cljs.core.get.call(null,map__9718__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.call(null,map__9718__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.call(null,map__9718__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__9719 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__9725 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__9725__$1 = cljs.core.__destructure_map.call(null,map__9725);
var node_libs = cljs.core.get.call(null,map__9725__$1,true);
var libs_to_load = cljs.core.get.call(null,map__9725__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__9719,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__9719,(1),null);
var vec__9722 = (function (){var map__9726 = cljs.core.group_by.call(null,cljs.analyzer.goog_module_dep_QMARK_,libs_to_load);
var map__9726__$1 = cljs.core.__destructure_map.call(null,map__9726);
var goog_modules = cljs.core.get.call(null,map__9726__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__9726__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog_modules,libs_to_load__$1], null);
})();
var goog_modules = cljs.core.nth.call(null,vec__9722,(0),null);
var libs_to_load__$1 = cljs.core.nth.call(null,vec__9722,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__9727_9771 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__9728_9772 = null;
var count__9729_9773 = (0);
var i__9730_9774 = (0);
while(true){
if((i__9730_9774 < count__9729_9773)){
var lib_9775 = cljs.core._nth.call(null,chunk__9728_9772,i__9730_9774);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_9775)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_9775),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_9775),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_9775),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_9775),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_9775,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_9775),"');");
}

}
}
}


var G__9776 = seq__9727_9771;
var G__9777 = chunk__9728_9772;
var G__9778 = count__9729_9773;
var G__9779 = (i__9730_9774 + (1));
seq__9727_9771 = G__9776;
chunk__9728_9772 = G__9777;
count__9729_9773 = G__9778;
i__9730_9774 = G__9779;
continue;
} else {
var temp__5804__auto___9780 = cljs.core.seq.call(null,seq__9727_9771);
if(temp__5804__auto___9780){
var seq__9727_9781__$1 = temp__5804__auto___9780;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9727_9781__$1)){
var c__5525__auto___9782 = cljs.core.chunk_first.call(null,seq__9727_9781__$1);
var G__9783 = cljs.core.chunk_rest.call(null,seq__9727_9781__$1);
var G__9784 = c__5525__auto___9782;
var G__9785 = cljs.core.count.call(null,c__5525__auto___9782);
var G__9786 = (0);
seq__9727_9771 = G__9783;
chunk__9728_9772 = G__9784;
count__9729_9773 = G__9785;
i__9730_9774 = G__9786;
continue;
} else {
var lib_9787 = cljs.core.first.call(null,seq__9727_9781__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_9787)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_9787),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_9787),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_9787),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_9787),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_9787,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_9787),"');");
}

}
}
}


var G__9788 = cljs.core.next.call(null,seq__9727_9781__$1);
var G__9789 = null;
var G__9790 = (0);
var G__9791 = (0);
seq__9727_9771 = G__9788;
chunk__9728_9772 = G__9789;
count__9729_9773 = G__9790;
i__9730_9774 = G__9791;
continue;
}
} else {
}
}
break;
}

var seq__9731_9792 = cljs.core.seq.call(null,node_libs);
var chunk__9732_9793 = null;
var count__9733_9794 = (0);
var i__9734_9795 = (0);
while(true){
if((i__9734_9795 < count__9733_9794)){
var lib_9796 = cljs.core._nth.call(null,chunk__9732_9793,i__9734_9795);
var vec__9741_9797 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_9796);
var lib_SINGLEQUOTE__9798 = cljs.core.nth.call(null,vec__9741_9797,(0),null);
var sublib_9799 = cljs.core.nth.call(null,vec__9741_9797,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_9796)," = require('",lib_SINGLEQUOTE__9798,"')",cljs.compiler.sublib_select.call(null,sublib_9799),";");


var G__9800 = seq__9731_9792;
var G__9801 = chunk__9732_9793;
var G__9802 = count__9733_9794;
var G__9803 = (i__9734_9795 + (1));
seq__9731_9792 = G__9800;
chunk__9732_9793 = G__9801;
count__9733_9794 = G__9802;
i__9734_9795 = G__9803;
continue;
} else {
var temp__5804__auto___9804 = cljs.core.seq.call(null,seq__9731_9792);
if(temp__5804__auto___9804){
var seq__9731_9805__$1 = temp__5804__auto___9804;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9731_9805__$1)){
var c__5525__auto___9806 = cljs.core.chunk_first.call(null,seq__9731_9805__$1);
var G__9807 = cljs.core.chunk_rest.call(null,seq__9731_9805__$1);
var G__9808 = c__5525__auto___9806;
var G__9809 = cljs.core.count.call(null,c__5525__auto___9806);
var G__9810 = (0);
seq__9731_9792 = G__9807;
chunk__9732_9793 = G__9808;
count__9733_9794 = G__9809;
i__9734_9795 = G__9810;
continue;
} else {
var lib_9811 = cljs.core.first.call(null,seq__9731_9805__$1);
var vec__9744_9812 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_9811);
var lib_SINGLEQUOTE__9813 = cljs.core.nth.call(null,vec__9744_9812,(0),null);
var sublib_9814 = cljs.core.nth.call(null,vec__9744_9812,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_9811)," = require('",lib_SINGLEQUOTE__9813,"')",cljs.compiler.sublib_select.call(null,sublib_9814),";");


var G__9815 = cljs.core.next.call(null,seq__9731_9805__$1);
var G__9816 = null;
var G__9817 = (0);
var G__9818 = (0);
seq__9731_9792 = G__9815;
chunk__9732_9793 = G__9816;
count__9733_9794 = G__9817;
i__9734_9795 = G__9818;
continue;
}
} else {
}
}
break;
}

var seq__9747_9819 = cljs.core.seq.call(null,goog_modules);
var chunk__9748_9820 = null;
var count__9749_9821 = (0);
var i__9750_9822 = (0);
while(true){
if((i__9750_9822 < count__9749_9821)){
var lib_9823 = cljs.core._nth.call(null,chunk__9748_9820,i__9750_9822);
var vec__9757_9824 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_9823);
var lib_SINGLEQUOTE__9825 = cljs.core.nth.call(null,vec__9757_9824,(0),null);
var sublib_9826 = cljs.core.nth.call(null,vec__9757_9824,(1),null);
cljs.compiler.emitln.call(null,"goog.require('",lib_SINGLEQUOTE__9825,"');");

cljs.compiler.emitln.call(null,"goog.scope(function(){");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_goog_module_lib.call(null,lib_9823)," = goog.module.get('",lib_SINGLEQUOTE__9825,"')",cljs.compiler.sublib_select.call(null,sublib_9826),";");

cljs.compiler.emitln.call(null,"});");


var G__9827 = seq__9747_9819;
var G__9828 = chunk__9748_9820;
var G__9829 = count__9749_9821;
var G__9830 = (i__9750_9822 + (1));
seq__9747_9819 = G__9827;
chunk__9748_9820 = G__9828;
count__9749_9821 = G__9829;
i__9750_9822 = G__9830;
continue;
} else {
var temp__5804__auto___9831 = cljs.core.seq.call(null,seq__9747_9819);
if(temp__5804__auto___9831){
var seq__9747_9832__$1 = temp__5804__auto___9831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9747_9832__$1)){
var c__5525__auto___9833 = cljs.core.chunk_first.call(null,seq__9747_9832__$1);
var G__9834 = cljs.core.chunk_rest.call(null,seq__9747_9832__$1);
var G__9835 = c__5525__auto___9833;
var G__9836 = cljs.core.count.call(null,c__5525__auto___9833);
var G__9837 = (0);
seq__9747_9819 = G__9834;
chunk__9748_9820 = G__9835;
count__9749_9821 = G__9836;
i__9750_9822 = G__9837;
continue;
} else {
var lib_9838 = cljs.core.first.call(null,seq__9747_9832__$1);
var vec__9760_9839 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_9838);
var lib_SINGLEQUOTE__9840 = cljs.core.nth.call(null,vec__9760_9839,(0),null);
var sublib_9841 = cljs.core.nth.call(null,vec__9760_9839,(1),null);
cljs.compiler.emitln.call(null,"goog.require('",lib_SINGLEQUOTE__9840,"');");

cljs.compiler.emitln.call(null,"goog.scope(function(){");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_goog_module_lib.call(null,lib_9838)," = goog.module.get('",lib_SINGLEQUOTE__9840,"')",cljs.compiler.sublib_select.call(null,sublib_9841),";");

cljs.compiler.emitln.call(null,"});");


var G__9842 = cljs.core.next.call(null,seq__9747_9832__$1);
var G__9843 = null;
var G__9844 = (0);
var G__9845 = (0);
seq__9747_9819 = G__9842;
chunk__9748_9820 = G__9843;
count__9749_9821 = G__9844;
i__9750_9822 = G__9845;
continue;
}
} else {
}
}
break;
}

var seq__9763_9846 = cljs.core.seq.call(null,global_exports_libs);
var chunk__9764_9847 = null;
var count__9765_9848 = (0);
var i__9766_9849 = (0);
while(true){
if((i__9766_9849 < count__9765_9848)){
var lib_9850 = cljs.core._nth.call(null,chunk__9764_9847,i__9766_9849);
var map__9769_9851 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_9850))));
var map__9769_9852__$1 = cljs.core.__destructure_map.call(null,map__9769_9851);
var global_exports_9853 = cljs.core.get.call(null,map__9769_9852__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_9853,lib_9850);


var G__9854 = seq__9763_9846;
var G__9855 = chunk__9764_9847;
var G__9856 = count__9765_9848;
var G__9857 = (i__9766_9849 + (1));
seq__9763_9846 = G__9854;
chunk__9764_9847 = G__9855;
count__9765_9848 = G__9856;
i__9766_9849 = G__9857;
continue;
} else {
var temp__5804__auto___9858 = cljs.core.seq.call(null,seq__9763_9846);
if(temp__5804__auto___9858){
var seq__9763_9859__$1 = temp__5804__auto___9858;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9763_9859__$1)){
var c__5525__auto___9860 = cljs.core.chunk_first.call(null,seq__9763_9859__$1);
var G__9861 = cljs.core.chunk_rest.call(null,seq__9763_9859__$1);
var G__9862 = c__5525__auto___9860;
var G__9863 = cljs.core.count.call(null,c__5525__auto___9860);
var G__9864 = (0);
seq__9763_9846 = G__9861;
chunk__9764_9847 = G__9862;
count__9765_9848 = G__9863;
i__9766_9849 = G__9864;
continue;
} else {
var lib_9865 = cljs.core.first.call(null,seq__9763_9859__$1);
var map__9770_9866 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_9865))));
var map__9770_9867__$1 = cljs.core.__destructure_map.call(null,map__9770_9866);
var global_exports_9868 = cljs.core.get.call(null,map__9770_9867__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_9868,lib_9865);


var G__9869 = cljs.core.next.call(null,seq__9763_9859__$1);
var G__9870 = null;
var G__9871 = (0);
var G__9872 = (0);
seq__9763_9846 = G__9869;
chunk__9764_9847 = G__9870;
count__9765_9848 = G__9871;
i__9766_9849 = G__9872;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__9873){
var map__9874 = p__9873;
var map__9874__$1 = cljs.core.__destructure_map.call(null,map__9874);
var name = cljs.core.get.call(null,map__9874__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__9874__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__9874__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__9874__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__9874__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__9874__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__9874__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__9875){
var map__9876 = p__9875;
var map__9876__$1 = cljs.core.__destructure_map.call(null,map__9876);
var name = cljs.core.get.call(null,map__9876__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__9876__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__9876__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__9876__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__9876__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__9876__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__9876__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__9877){
var map__9878 = p__9877;
var map__9878__$1 = cljs.core.__destructure_map.call(null,map__9878);
var t = cljs.core.get.call(null,map__9878__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__9878__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__9878__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__9878__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__9878__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__9879_9903 = cljs.core.seq.call(null,protocols);
var chunk__9880_9904 = null;
var count__9881_9905 = (0);
var i__9882_9906 = (0);
while(true){
if((i__9882_9906 < count__9881_9905)){
var protocol_9907 = cljs.core._nth.call(null,chunk__9880_9904,i__9882_9906);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_9907)),"}");


var G__9908 = seq__9879_9903;
var G__9909 = chunk__9880_9904;
var G__9910 = count__9881_9905;
var G__9911 = (i__9882_9906 + (1));
seq__9879_9903 = G__9908;
chunk__9880_9904 = G__9909;
count__9881_9905 = G__9910;
i__9882_9906 = G__9911;
continue;
} else {
var temp__5804__auto___9912 = cljs.core.seq.call(null,seq__9879_9903);
if(temp__5804__auto___9912){
var seq__9879_9913__$1 = temp__5804__auto___9912;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9879_9913__$1)){
var c__5525__auto___9914 = cljs.core.chunk_first.call(null,seq__9879_9913__$1);
var G__9915 = cljs.core.chunk_rest.call(null,seq__9879_9913__$1);
var G__9916 = c__5525__auto___9914;
var G__9917 = cljs.core.count.call(null,c__5525__auto___9914);
var G__9918 = (0);
seq__9879_9903 = G__9915;
chunk__9880_9904 = G__9916;
count__9881_9905 = G__9917;
i__9882_9906 = G__9918;
continue;
} else {
var protocol_9919 = cljs.core.first.call(null,seq__9879_9913__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_9919)),"}");


var G__9920 = cljs.core.next.call(null,seq__9879_9913__$1);
var G__9921 = null;
var G__9922 = (0);
var G__9923 = (0);
seq__9879_9903 = G__9920;
chunk__9880_9904 = G__9921;
count__9881_9905 = G__9922;
i__9882_9906 = G__9923;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__9883_9924 = cljs.core.seq.call(null,fields__$1);
var chunk__9884_9925 = null;
var count__9885_9926 = (0);
var i__9886_9927 = (0);
while(true){
if((i__9886_9927 < count__9885_9926)){
var fld_9928 = cljs.core._nth.call(null,chunk__9884_9925,i__9886_9927);
cljs.compiler.emitln.call(null,"this.",fld_9928," = ",fld_9928,";");


var G__9929 = seq__9883_9924;
var G__9930 = chunk__9884_9925;
var G__9931 = count__9885_9926;
var G__9932 = (i__9886_9927 + (1));
seq__9883_9924 = G__9929;
chunk__9884_9925 = G__9930;
count__9885_9926 = G__9931;
i__9886_9927 = G__9932;
continue;
} else {
var temp__5804__auto___9933 = cljs.core.seq.call(null,seq__9883_9924);
if(temp__5804__auto___9933){
var seq__9883_9934__$1 = temp__5804__auto___9933;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9883_9934__$1)){
var c__5525__auto___9935 = cljs.core.chunk_first.call(null,seq__9883_9934__$1);
var G__9936 = cljs.core.chunk_rest.call(null,seq__9883_9934__$1);
var G__9937 = c__5525__auto___9935;
var G__9938 = cljs.core.count.call(null,c__5525__auto___9935);
var G__9939 = (0);
seq__9883_9924 = G__9936;
chunk__9884_9925 = G__9937;
count__9885_9926 = G__9938;
i__9886_9927 = G__9939;
continue;
} else {
var fld_9940 = cljs.core.first.call(null,seq__9883_9934__$1);
cljs.compiler.emitln.call(null,"this.",fld_9940," = ",fld_9940,";");


var G__9941 = cljs.core.next.call(null,seq__9883_9934__$1);
var G__9942 = null;
var G__9943 = (0);
var G__9944 = (0);
seq__9883_9924 = G__9941;
chunk__9884_9925 = G__9942;
count__9885_9926 = G__9943;
i__9886_9927 = G__9944;
continue;
}
} else {
}
}
break;
}

var seq__9887_9945 = cljs.core.seq.call(null,pmasks);
var chunk__9888_9946 = null;
var count__9889_9947 = (0);
var i__9890_9948 = (0);
while(true){
if((i__9890_9948 < count__9889_9947)){
var vec__9897_9949 = cljs.core._nth.call(null,chunk__9888_9946,i__9890_9948);
var pno_9950 = cljs.core.nth.call(null,vec__9897_9949,(0),null);
var pmask_9951 = cljs.core.nth.call(null,vec__9897_9949,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_9950,"$ = ",pmask_9951,";");


var G__9952 = seq__9887_9945;
var G__9953 = chunk__9888_9946;
var G__9954 = count__9889_9947;
var G__9955 = (i__9890_9948 + (1));
seq__9887_9945 = G__9952;
chunk__9888_9946 = G__9953;
count__9889_9947 = G__9954;
i__9890_9948 = G__9955;
continue;
} else {
var temp__5804__auto___9956 = cljs.core.seq.call(null,seq__9887_9945);
if(temp__5804__auto___9956){
var seq__9887_9957__$1 = temp__5804__auto___9956;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9887_9957__$1)){
var c__5525__auto___9958 = cljs.core.chunk_first.call(null,seq__9887_9957__$1);
var G__9959 = cljs.core.chunk_rest.call(null,seq__9887_9957__$1);
var G__9960 = c__5525__auto___9958;
var G__9961 = cljs.core.count.call(null,c__5525__auto___9958);
var G__9962 = (0);
seq__9887_9945 = G__9959;
chunk__9888_9946 = G__9960;
count__9889_9947 = G__9961;
i__9890_9948 = G__9962;
continue;
} else {
var vec__9900_9963 = cljs.core.first.call(null,seq__9887_9957__$1);
var pno_9964 = cljs.core.nth.call(null,vec__9900_9963,(0),null);
var pmask_9965 = cljs.core.nth.call(null,vec__9900_9963,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_9964,"$ = ",pmask_9965,";");


var G__9966 = cljs.core.next.call(null,seq__9887_9957__$1);
var G__9967 = null;
var G__9968 = (0);
var G__9969 = (0);
seq__9887_9945 = G__9966;
chunk__9888_9946 = G__9967;
count__9889_9947 = G__9968;
i__9890_9948 = G__9969;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__9970){
var map__9971 = p__9970;
var map__9971__$1 = cljs.core.__destructure_map.call(null,map__9971);
var t = cljs.core.get.call(null,map__9971__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__9971__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__9971__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__9971__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__9971__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__9972_9996 = cljs.core.seq.call(null,protocols);
var chunk__9973_9997 = null;
var count__9974_9998 = (0);
var i__9975_9999 = (0);
while(true){
if((i__9975_9999 < count__9974_9998)){
var protocol_10000 = cljs.core._nth.call(null,chunk__9973_9997,i__9975_9999);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_10000)),"}");


var G__10001 = seq__9972_9996;
var G__10002 = chunk__9973_9997;
var G__10003 = count__9974_9998;
var G__10004 = (i__9975_9999 + (1));
seq__9972_9996 = G__10001;
chunk__9973_9997 = G__10002;
count__9974_9998 = G__10003;
i__9975_9999 = G__10004;
continue;
} else {
var temp__5804__auto___10005 = cljs.core.seq.call(null,seq__9972_9996);
if(temp__5804__auto___10005){
var seq__9972_10006__$1 = temp__5804__auto___10005;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9972_10006__$1)){
var c__5525__auto___10007 = cljs.core.chunk_first.call(null,seq__9972_10006__$1);
var G__10008 = cljs.core.chunk_rest.call(null,seq__9972_10006__$1);
var G__10009 = c__5525__auto___10007;
var G__10010 = cljs.core.count.call(null,c__5525__auto___10007);
var G__10011 = (0);
seq__9972_9996 = G__10008;
chunk__9973_9997 = G__10009;
count__9974_9998 = G__10010;
i__9975_9999 = G__10011;
continue;
} else {
var protocol_10012 = cljs.core.first.call(null,seq__9972_10006__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_10012)),"}");


var G__10013 = cljs.core.next.call(null,seq__9972_10006__$1);
var G__10014 = null;
var G__10015 = (0);
var G__10016 = (0);
seq__9972_9996 = G__10013;
chunk__9973_9997 = G__10014;
count__9974_9998 = G__10015;
i__9975_9999 = G__10016;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__9976_10017 = cljs.core.seq.call(null,fields__$1);
var chunk__9977_10018 = null;
var count__9978_10019 = (0);
var i__9979_10020 = (0);
while(true){
if((i__9979_10020 < count__9978_10019)){
var fld_10021 = cljs.core._nth.call(null,chunk__9977_10018,i__9979_10020);
cljs.compiler.emitln.call(null,"this.",fld_10021," = ",fld_10021,";");


var G__10022 = seq__9976_10017;
var G__10023 = chunk__9977_10018;
var G__10024 = count__9978_10019;
var G__10025 = (i__9979_10020 + (1));
seq__9976_10017 = G__10022;
chunk__9977_10018 = G__10023;
count__9978_10019 = G__10024;
i__9979_10020 = G__10025;
continue;
} else {
var temp__5804__auto___10026 = cljs.core.seq.call(null,seq__9976_10017);
if(temp__5804__auto___10026){
var seq__9976_10027__$1 = temp__5804__auto___10026;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9976_10027__$1)){
var c__5525__auto___10028 = cljs.core.chunk_first.call(null,seq__9976_10027__$1);
var G__10029 = cljs.core.chunk_rest.call(null,seq__9976_10027__$1);
var G__10030 = c__5525__auto___10028;
var G__10031 = cljs.core.count.call(null,c__5525__auto___10028);
var G__10032 = (0);
seq__9976_10017 = G__10029;
chunk__9977_10018 = G__10030;
count__9978_10019 = G__10031;
i__9979_10020 = G__10032;
continue;
} else {
var fld_10033 = cljs.core.first.call(null,seq__9976_10027__$1);
cljs.compiler.emitln.call(null,"this.",fld_10033," = ",fld_10033,";");


var G__10034 = cljs.core.next.call(null,seq__9976_10027__$1);
var G__10035 = null;
var G__10036 = (0);
var G__10037 = (0);
seq__9976_10017 = G__10034;
chunk__9977_10018 = G__10035;
count__9978_10019 = G__10036;
i__9979_10020 = G__10037;
continue;
}
} else {
}
}
break;
}

var seq__9980_10038 = cljs.core.seq.call(null,pmasks);
var chunk__9981_10039 = null;
var count__9982_10040 = (0);
var i__9983_10041 = (0);
while(true){
if((i__9983_10041 < count__9982_10040)){
var vec__9990_10042 = cljs.core._nth.call(null,chunk__9981_10039,i__9983_10041);
var pno_10043 = cljs.core.nth.call(null,vec__9990_10042,(0),null);
var pmask_10044 = cljs.core.nth.call(null,vec__9990_10042,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_10043,"$ = ",pmask_10044,";");


var G__10045 = seq__9980_10038;
var G__10046 = chunk__9981_10039;
var G__10047 = count__9982_10040;
var G__10048 = (i__9983_10041 + (1));
seq__9980_10038 = G__10045;
chunk__9981_10039 = G__10046;
count__9982_10040 = G__10047;
i__9983_10041 = G__10048;
continue;
} else {
var temp__5804__auto___10049 = cljs.core.seq.call(null,seq__9980_10038);
if(temp__5804__auto___10049){
var seq__9980_10050__$1 = temp__5804__auto___10049;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9980_10050__$1)){
var c__5525__auto___10051 = cljs.core.chunk_first.call(null,seq__9980_10050__$1);
var G__10052 = cljs.core.chunk_rest.call(null,seq__9980_10050__$1);
var G__10053 = c__5525__auto___10051;
var G__10054 = cljs.core.count.call(null,c__5525__auto___10051);
var G__10055 = (0);
seq__9980_10038 = G__10052;
chunk__9981_10039 = G__10053;
count__9982_10040 = G__10054;
i__9983_10041 = G__10055;
continue;
} else {
var vec__9993_10056 = cljs.core.first.call(null,seq__9980_10050__$1);
var pno_10057 = cljs.core.nth.call(null,vec__9993_10056,(0),null);
var pmask_10058 = cljs.core.nth.call(null,vec__9993_10056,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_10057,"$ = ",pmask_10058,";");


var G__10059 = cljs.core.next.call(null,seq__9980_10050__$1);
var G__10060 = null;
var G__10061 = (0);
var G__10062 = (0);
seq__9980_10038 = G__10059;
chunk__9981_10039 = G__10060;
count__9982_10040 = G__10061;
i__9983_10041 = G__10062;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__10063){
var map__10064 = p__10063;
var map__10064__$1 = cljs.core.__destructure_map.call(null,map__10064);
var target = cljs.core.get.call(null,map__10064__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__10064__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__10064__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__10064__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__10064__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__10065){
var map__10066 = p__10065;
var map__10066__$1 = cljs.core.__destructure_map.call(null,map__10066);
var op = cljs.core.get.call(null,map__10066__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__10066__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__10066__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__10066__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__10066__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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

var seq__10071 = cljs.core.seq.call(null,table);
var chunk__10072 = null;
var count__10073 = (0);
var i__10074 = (0);
while(true){
if((i__10074 < count__10073)){
var vec__10081 = cljs.core._nth.call(null,chunk__10072,i__10074);
var sym = cljs.core.nth.call(null,vec__10081,(0),null);
var value = cljs.core.nth.call(null,vec__10081,(1),null);
var ns_10087 = cljs.core.namespace.call(null,sym);
var name_10088 = cljs.core.name.call(null,sym);
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


var G__10089 = seq__10071;
var G__10090 = chunk__10072;
var G__10091 = count__10073;
var G__10092 = (i__10074 + (1));
seq__10071 = G__10089;
chunk__10072 = G__10090;
count__10073 = G__10091;
i__10074 = G__10092;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10071);
if(temp__5804__auto__){
var seq__10071__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10071__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10071__$1);
var G__10093 = cljs.core.chunk_rest.call(null,seq__10071__$1);
var G__10094 = c__5525__auto__;
var G__10095 = cljs.core.count.call(null,c__5525__auto__);
var G__10096 = (0);
seq__10071 = G__10093;
chunk__10072 = G__10094;
count__10073 = G__10095;
i__10074 = G__10096;
continue;
} else {
var vec__10084 = cljs.core.first.call(null,seq__10071__$1);
var sym = cljs.core.nth.call(null,vec__10084,(0),null);
var value = cljs.core.nth.call(null,vec__10084,(1),null);
var ns_10097 = cljs.core.namespace.call(null,sym);
var name_10098 = cljs.core.name.call(null,sym);
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


var G__10099 = cljs.core.next.call(null,seq__10071__$1);
var G__10100 = null;
var G__10101 = (0);
var G__10102 = (0);
seq__10071 = G__10099;
chunk__10072 = G__10100;
count__10073 = G__10101;
i__10074 = G__10102;
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
var G__10104 = arguments.length;
switch (G__10104) {
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
var k_10109 = cljs.core.first.call(null,ks);
var vec__10105_10110 = cljs.core.conj.call(null,prefix,k_10109);
var top_10111 = cljs.core.nth.call(null,vec__10105_10110,(0),null);
var prefix_SINGLEQUOTE__10112 = vec__10105_10110;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_10109)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__10112) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_10111)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_10111)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__10112)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_10111);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__10112)),";");
}
} else {
}

var m_10113 = cljs.core.get.call(null,externs,k_10109);
if(cljs.core.empty_QMARK_.call(null,m_10113)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__10112,m_10113,top_level,known_externs);
}

var G__10114 = cljs.core.next.call(null,ks);
ks = G__10114;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=compiler.js.map
