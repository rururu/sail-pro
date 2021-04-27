// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
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
var map__21746 = s;
var map__21746__$1 = (((((!((map__21746 == null))))?(((((map__21746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21746):map__21746);
var name = cljs.core.get.call(null,map__21746__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__21746__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__21749 = info;
var map__21750 = G__21749;
var map__21750__$1 = (((((!((map__21750 == null))))?(((((map__21750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21750):map__21750);
var shadow = cljs.core.get.call(null,map__21750__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__21749__$1 = G__21749;
while(true){
var d__$2 = d__$1;
var map__21752 = G__21749__$1;
var map__21752__$1 = (((((!((map__21752 == null))))?(((((map__21752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21752):map__21752);
var shadow__$1 = cljs.core.get.call(null,map__21752__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__21754 = (d__$2 + (1));
var G__21755 = shadow__$1;
d__$1 = G__21754;
G__21749__$1 = G__21755;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__21756){
var map__21757 = p__21756;
var map__21757__$1 = (((((!((map__21757 == null))))?(((((map__21757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21757):map__21757);
var name_var = map__21757__$1;
var name = cljs.core.get.call(null,map__21757__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__21757__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__21759 = info;
var map__21759__$1 = (((((!((map__21759 == null))))?(((((map__21759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21759):map__21759);
var ns = cljs.core.get.call(null,map__21759__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__21759__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
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
var G__21762 = arguments.length;
switch (G__21762) {
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

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
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
var ms = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",(17),(1),(11321),(11321),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)])).call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__21764 = cp;
switch (G__21764) {
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
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__21766_21770 = cljs.core.seq.call(null,s);
var chunk__21767_21771 = null;
var count__21768_21772 = (0);
var i__21769_21773 = (0);
while(true){
if((i__21769_21773 < count__21768_21772)){
var c_21774 = cljs.core._nth.call(null,chunk__21767_21771,i__21769_21773);
sb.append(cljs.compiler.escape_char.call(null,c_21774));


var G__21775 = seq__21766_21770;
var G__21776 = chunk__21767_21771;
var G__21777 = count__21768_21772;
var G__21778 = (i__21769_21773 + (1));
seq__21766_21770 = G__21775;
chunk__21767_21771 = G__21776;
count__21768_21772 = G__21777;
i__21769_21773 = G__21778;
continue;
} else {
var temp__5735__auto___21779 = cljs.core.seq.call(null,seq__21766_21770);
if(temp__5735__auto___21779){
var seq__21766_21780__$1 = temp__5735__auto___21779;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21766_21780__$1)){
var c__4461__auto___21781 = cljs.core.chunk_first.call(null,seq__21766_21780__$1);
var G__21782 = cljs.core.chunk_rest.call(null,seq__21766_21780__$1);
var G__21783 = c__4461__auto___21781;
var G__21784 = cljs.core.count.call(null,c__4461__auto___21781);
var G__21785 = (0);
seq__21766_21770 = G__21782;
chunk__21767_21771 = G__21783;
count__21768_21772 = G__21784;
i__21769_21773 = G__21785;
continue;
} else {
var c_21786 = cljs.core.first.call(null,seq__21766_21780__$1);
sb.append(cljs.compiler.escape_char.call(null,c_21786));


var G__21787 = cljs.core.next.call(null,seq__21766_21780__$1);
var G__21788 = null;
var G__21789 = (0);
var G__21790 = (0);
seq__21766_21770 = G__21787;
chunk__21767_21771 = G__21788;
count__21768_21772 = G__21789;
i__21769_21773 = G__21790;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__21791_21796 = ast;
var map__21791_21797__$1 = (((((!((map__21791_21796 == null))))?(((((map__21791_21796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21791_21796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21791_21796):map__21791_21796);
var env_21798 = cljs.core.get.call(null,map__21791_21797__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_21798))){
var map__21793_21799 = env_21798;
var map__21793_21800__$1 = (((((!((map__21793_21799 == null))))?(((((map__21793_21799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21793_21799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21793_21799):map__21793_21799);
var line_21801 = cljs.core.get.call(null,map__21793_21800__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21802 = cljs.core.get.call(null,map__21793_21800__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__21793_21799,map__21793_21800__$1,line_21801,column_21802,map__21791_21796,map__21791_21797__$1,env_21798){
return (function (m){
var minfo = (function (){var G__21795 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__21795,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__21795;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_21801 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__21793_21799,map__21793_21800__$1,line_21801,column_21802,map__21791_21796,map__21791_21797__$1,env_21798){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_21802)?(column_21802 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__21793_21799,map__21793_21800__$1,line_21801,column_21802,map__21791_21796,map__21791_21797__$1,env_21798){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__21793_21799,map__21793_21800__$1,line_21801,column_21802,map__21791_21796,map__21791_21797__$1,env_21798))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__21793_21799,map__21793_21800__$1,line_21801,column_21802,map__21791_21796,map__21791_21797__$1,env_21798))
,cljs.core.sorted_map.call(null)));
});})(map__21793_21799,map__21793_21800__$1,line_21801,column_21802,map__21791_21796,map__21791_21797__$1,env_21798))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__21811 = arguments.length;
switch (G__21811) {
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
var args_arr__4662__auto__ = [];
var len__4641__auto___21818 = arguments.length;
var i__4642__auto___21819 = (0);
while(true){
if((i__4642__auto___21819 < len__4641__auto___21818)){
args_arr__4662__auto__.push((arguments[i__4642__auto___21819]));

var G__21820 = (i__4642__auto___21819 + (1));
i__4642__auto___21819 = G__21820;
continue;
} else {
}
break;
}

var argseq__4663__auto__ = (new cljs.core.IndexedSeq(args_arr__4662__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4663__auto__);

}
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,a)){
cljs.compiler.emit.call(null,a);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,a)){
cljs.core.apply.call(null,cljs.compiler.emits,a);
} else {
if(goog.isFunction(a)){
a.call(null);
} else {
var s_21821 = (function (){var G__21812 = a;
if((!(typeof a === 'string'))){
return G__21812.toString();
} else {
return G__21812;
}
})();
var temp__5739__auto___21822 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___21822 == null)){
} else {
var sm_data_21823 = temp__5739__auto___21822;
cljs.core.swap_BANG_.call(null,sm_data_21823,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_21823,temp__5739__auto___21822,s_21821){
return (function (p1__21803_SHARP_){
return (p1__21803_SHARP_ + s_21821.length);
});})(sm_data_21823,temp__5739__auto___21822,s_21821))
);
}

cljs.core.print.call(null,s_21821);

}
}
}
}

return null;
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

return cljs.compiler.emits.call(null,b);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler.emits.call(null,c);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler.emits.call(null,d);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler.emits.call(null,e);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__21813 = cljs.core.seq.call(null,xs);
var chunk__21814 = null;
var count__21815 = (0);
var i__21816 = (0);
while(true){
if((i__21816 < count__21815)){
var x = cljs.core._nth.call(null,chunk__21814,i__21816);
cljs.compiler.emits.call(null,x);


var G__21824 = seq__21813;
var G__21825 = chunk__21814;
var G__21826 = count__21815;
var G__21827 = (i__21816 + (1));
seq__21813 = G__21824;
chunk__21814 = G__21825;
count__21815 = G__21826;
i__21816 = G__21827;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__21813);
if(temp__5735__auto__){
var seq__21813__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21813__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__21813__$1);
var G__21828 = cljs.core.chunk_rest.call(null,seq__21813__$1);
var G__21829 = c__4461__auto__;
var G__21830 = cljs.core.count.call(null,c__4461__auto__);
var G__21831 = (0);
seq__21813 = G__21828;
chunk__21814 = G__21829;
count__21815 = G__21830;
i__21816 = G__21831;
continue;
} else {
var x = cljs.core.first.call(null,seq__21813__$1);
cljs.compiler.emits.call(null,x);


var G__21832 = cljs.core.next.call(null,seq__21813__$1);
var G__21833 = null;
var G__21834 = (0);
var G__21835 = (0);
seq__21813 = G__21832;
chunk__21814 = G__21833;
count__21815 = G__21834;
i__21816 = G__21835;
continue;
}
} else {
return null;
}
}
break;
}
});

/** @this {Function} */
cljs.compiler.emits.cljs$lang$applyTo = (function (seq21805){
var G__21806 = cljs.core.first.call(null,seq21805);
var seq21805__$1 = cljs.core.next.call(null,seq21805);
var G__21807 = cljs.core.first.call(null,seq21805__$1);
var seq21805__$2 = cljs.core.next.call(null,seq21805__$1);
var G__21808 = cljs.core.first.call(null,seq21805__$2);
var seq21805__$3 = cljs.core.next.call(null,seq21805__$2);
var G__21809 = cljs.core.first.call(null,seq21805__$3);
var seq21805__$4 = cljs.core.next.call(null,seq21805__$3);
var G__21810 = cljs.core.first.call(null,seq21805__$4);
var seq21805__$5 = cljs.core.next.call(null,seq21805__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21806,G__21807,G__21808,G__21809,G__21810,seq21805__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__21836){
var map__21837 = p__21836;
var map__21837__$1 = (((((!((map__21837 == null))))?(((((map__21837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21837):map__21837);
var m = map__21837__$1;
var gen_line = cljs.core.get.call(null,map__21837__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__21846 = arguments.length;
switch (G__21846) {
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
var args_arr__4662__auto__ = [];
var len__4641__auto___21852 = arguments.length;
var i__4642__auto___21853 = (0);
while(true){
if((i__4642__auto___21853 < len__4641__auto___21852)){
args_arr__4662__auto__.push((arguments[i__4642__auto___21853]));

var G__21854 = (i__4642__auto___21853 + (1));
i__4642__auto___21853 = G__21854;
continue;
} else {
}
break;
}

var argseq__4663__auto__ = (new cljs.core.IndexedSeq(args_arr__4662__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4663__auto__);

}
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.call(null,a);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__21847_21855 = cljs.core.seq.call(null,xs);
var chunk__21848_21856 = null;
var count__21849_21857 = (0);
var i__21850_21858 = (0);
while(true){
if((i__21850_21858 < count__21849_21857)){
var x_21859 = cljs.core._nth.call(null,chunk__21848_21856,i__21850_21858);
cljs.compiler.emits.call(null,x_21859);


var G__21860 = seq__21847_21855;
var G__21861 = chunk__21848_21856;
var G__21862 = count__21849_21857;
var G__21863 = (i__21850_21858 + (1));
seq__21847_21855 = G__21860;
chunk__21848_21856 = G__21861;
count__21849_21857 = G__21862;
i__21850_21858 = G__21863;
continue;
} else {
var temp__5735__auto___21864 = cljs.core.seq.call(null,seq__21847_21855);
if(temp__5735__auto___21864){
var seq__21847_21865__$1 = temp__5735__auto___21864;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21847_21865__$1)){
var c__4461__auto___21866 = cljs.core.chunk_first.call(null,seq__21847_21865__$1);
var G__21867 = cljs.core.chunk_rest.call(null,seq__21847_21865__$1);
var G__21868 = c__4461__auto___21866;
var G__21869 = cljs.core.count.call(null,c__4461__auto___21866);
var G__21870 = (0);
seq__21847_21855 = G__21867;
chunk__21848_21856 = G__21868;
count__21849_21857 = G__21869;
i__21850_21858 = G__21870;
continue;
} else {
var x_21871 = cljs.core.first.call(null,seq__21847_21865__$1);
cljs.compiler.emits.call(null,x_21871);


var G__21872 = cljs.core.next.call(null,seq__21847_21865__$1);
var G__21873 = null;
var G__21874 = (0);
var G__21875 = (0);
seq__21847_21855 = G__21872;
chunk__21848_21856 = G__21873;
count__21849_21857 = G__21874;
i__21850_21858 = G__21875;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln.call(null);
});

/** @this {Function} */
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq21840){
var G__21841 = cljs.core.first.call(null,seq21840);
var seq21840__$1 = cljs.core.next.call(null,seq21840);
var G__21842 = cljs.core.first.call(null,seq21840__$1);
var seq21840__$2 = cljs.core.next.call(null,seq21840__$1);
var G__21843 = cljs.core.first.call(null,seq21840__$2);
var seq21840__$3 = cljs.core.next.call(null,seq21840__$2);
var G__21844 = cljs.core.first.call(null,seq21840__$3);
var seq21840__$4 = cljs.core.next.call(null,seq21840__$3);
var G__21845 = cljs.core.first.call(null,seq21840__$4);
var seq21840__$5 = cljs.core.next.call(null,seq21840__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21841,G__21842,G__21843,G__21844,G__21845,seq21840__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21876_21880 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21877_21881 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21878_21882 = true;
var _STAR_print_fn_STAR__temp_val__21879_21883 = ((function (_STAR_print_newline_STAR__orig_val__21876_21880,_STAR_print_fn_STAR__orig_val__21877_21881,_STAR_print_newline_STAR__temp_val__21878_21882,sb__4572__auto__){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__21876_21880,_STAR_print_fn_STAR__orig_val__21877_21881,_STAR_print_newline_STAR__temp_val__21878_21882,sb__4572__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21878_21882;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21879_21883;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21877_21881;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21876_21880;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x)){
return cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.core.record_QMARK_.call(null,x)){
var vec__21884 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__21884,(0),null);
var name = cljs.core.nth.call(null,vec__21884,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__21884,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__21884,ns,name))
);
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x)){
return cljs.compiler.emit_map.call(null,cljs.core.keys.call(null,x),cljs.core.vals.call(null,x),cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
if(cljs.analyzer.cljs_vector_QMARK_.call(null,x)){
return cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.analyzer.cljs_set_QMARK_.call(null,x)){
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
return cljs.compiler.emit_with_meta.call(null,((function (m){
return (function (){
return cljs.compiler.emit_constant_no_meta.call(null,v);
});})(m))
,((function (m){
return (function (){
return cljs.compiler.emit_constant_no_meta.call(null,m);
});})(m))
);
} else {
return cljs.compiler.emit_constant_no_meta.call(null,v);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.type.call(null,x)))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
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
return cljs.compiler.emits.call(null,"(",x,")");

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
var vec__21887 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__21887,(0),null);
var flags = cljs.core.nth.call(null,vec__21887,(1),null);
var pattern = cljs.core.nth.call(null,vec__21887,(2),null);
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

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = (((!((ns == null))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
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
var temp__5733__auto__ = (function (){var and__4036__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4036__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Symbol,(function (x){
var temp__5733__auto__ = (function (){var and__4036__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4036__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_.call(null,items)){
return cljs.compiler.emit_js_object.call(null,items,((function (items){
return (function (p1__21890_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__21890_SHARP_);
});
;})(items))
});})(items))
);
} else {
return cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__21892){
var map__21893 = p__21892;
var map__21893__$1 = (((((!((map__21893 == null))))?(((((map__21893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21893):map__21893);
var ast = map__21893__$1;
var info = cljs.core.get.call(null,map__21893__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__21893__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__21893__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__21895 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__21895__$1 = (((((!((map__21895 == null))))?(((((map__21895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21895):map__21895);
var cenv = map__21895__$1;
var options = cljs.core.get.call(null,map__21895__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4047__auto__ = js_module_name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
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
var reserved = (function (){var G__21897 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4036__auto__;
}
})())){
return clojure.set.difference.call(null,G__21897,cljs.analyzer.es5_allowed);
} else {
return G__21897;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4047__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__21898 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__21898,reserved);
} else {
return G__21898;
}
})();
var env__20566__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__21899_21900 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__21899_21901__$1 = (((G__21899_21900 instanceof cljs.core.Keyword))?G__21899_21900.fqn:null);
switch (G__21899_21901__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__4036__auto__;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__21903){
var map__21904 = p__21903;
var map__21904__$1 = (((((!((map__21904 == null))))?(((((map__21904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21904):map__21904);
var arg = map__21904__$1;
var env = cljs.core.get.call(null,map__21904__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__21904__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__21904__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__21904__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__21906 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__21906__$1 = (((((!((map__21906 == null))))?(((((map__21906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21906):map__21906);
var name = cljs.core.get.call(null,map__21906__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__20566__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__21908){
var map__21909 = p__21908;
var map__21909__$1 = (((((!((map__21909 == null))))?(((((map__21909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21909):map__21909);
var expr = cljs.core.get.call(null,map__21909__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__21909__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__21909__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20566__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__21911_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__21911_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
});})(keys__$1))
,keys__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count.call(null,keys__$1))));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__21912){
var map__21913 = p__21912;
var map__21913__$1 = (((((!((map__21913 == null))))?(((((map__21913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21913):map__21913);
var env = cljs.core.get.call(null,map__21913__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__21913__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__21913__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__20566__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__21915){
var map__21916 = p__21915;
var map__21916__$1 = (((((!((map__21916 == null))))?(((((map__21916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21916):map__21916);
var items = cljs.core.get.call(null,map__21916__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__21916__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20566__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__21918_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__21918_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
});})(items__$1))
,items__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count.call(null,items__$1))));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__21919){
var map__21920 = p__21919;
var map__21920__$1 = (((((!((map__21920 == null))))?(((((map__21920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21920):map__21920);
var items = cljs.core.get.call(null,map__21920__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__21920__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20566__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5735__auto___21938 = cljs.core.seq.call(null,items);
if(temp__5735__auto___21938){
var items_21939__$1 = temp__5735__auto___21938;
var vec__21922_21940 = items_21939__$1;
var seq__21923_21941 = cljs.core.seq.call(null,vec__21922_21940);
var first__21924_21942 = cljs.core.first.call(null,seq__21923_21941);
var seq__21923_21943__$1 = cljs.core.next.call(null,seq__21923_21941);
var vec__21925_21944 = first__21924_21942;
var k_21945 = cljs.core.nth.call(null,vec__21925_21944,(0),null);
var v_21946 = cljs.core.nth.call(null,vec__21925_21944,(1),null);
var r_21947 = seq__21923_21943__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_21945),"\": ",emit_js_object_val.call(null,v_21946));

var seq__21928_21948 = cljs.core.seq.call(null,r_21947);
var chunk__21929_21949 = null;
var count__21930_21950 = (0);
var i__21931_21951 = (0);
while(true){
if((i__21931_21951 < count__21930_21950)){
var vec__21932_21952 = cljs.core._nth.call(null,chunk__21929_21949,i__21931_21951);
var k_21953__$1 = cljs.core.nth.call(null,vec__21932_21952,(0),null);
var v_21954__$1 = cljs.core.nth.call(null,vec__21932_21952,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_21953__$1),"\": ",emit_js_object_val.call(null,v_21954__$1));


var G__21955 = seq__21928_21948;
var G__21956 = chunk__21929_21949;
var G__21957 = count__21930_21950;
var G__21958 = (i__21931_21951 + (1));
seq__21928_21948 = G__21955;
chunk__21929_21949 = G__21956;
count__21930_21950 = G__21957;
i__21931_21951 = G__21958;
continue;
} else {
var temp__5735__auto___21959__$1 = cljs.core.seq.call(null,seq__21928_21948);
if(temp__5735__auto___21959__$1){
var seq__21928_21960__$1 = temp__5735__auto___21959__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21928_21960__$1)){
var c__4461__auto___21961 = cljs.core.chunk_first.call(null,seq__21928_21960__$1);
var G__21962 = cljs.core.chunk_rest.call(null,seq__21928_21960__$1);
var G__21963 = c__4461__auto___21961;
var G__21964 = cljs.core.count.call(null,c__4461__auto___21961);
var G__21965 = (0);
seq__21928_21948 = G__21962;
chunk__21929_21949 = G__21963;
count__21930_21950 = G__21964;
i__21931_21951 = G__21965;
continue;
} else {
var vec__21935_21966 = cljs.core.first.call(null,seq__21928_21960__$1);
var k_21967__$1 = cljs.core.nth.call(null,vec__21935_21966,(0),null);
var v_21968__$1 = cljs.core.nth.call(null,vec__21935_21966,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_21967__$1),"\": ",emit_js_object_val.call(null,v_21968__$1));


var G__21969 = cljs.core.next.call(null,seq__21928_21960__$1);
var G__21970 = null;
var G__21971 = (0);
var G__21972 = (0);
seq__21928_21948 = G__21969;
chunk__21929_21949 = G__21970;
count__21930_21950 = G__21971;
i__21931_21951 = G__21972;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__21973){
var map__21974 = p__21973;
var map__21974__$1 = (((((!((map__21974 == null))))?(((((map__21974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21974):map__21974);
var keys = cljs.core.get.call(null,map__21974__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__21974__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__21974__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20566__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__21976){
var map__21977 = p__21976;
var map__21977__$1 = (((((!((map__21977 == null))))?(((((map__21977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21977):map__21977);
var items = cljs.core.get.call(null,map__21977__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__21977__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20566__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__21979){
var map__21980 = p__21979;
var map__21980__$1 = (((((!((map__21980 == null))))?(((((map__21980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21980):map__21980);
var expr = cljs.core.get.call(null,map__21980__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__21982){
var map__21983 = p__21982;
var map__21983__$1 = (((((!((map__21983 == null))))?(((((map__21983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21983):map__21983);
var form = cljs.core.get.call(null,map__21983__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__21983__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__20566__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__21985 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__21985__$1 = (((((!((map__21985 == null))))?(((((map__21985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21985):map__21985);
var op = cljs.core.get.call(null,map__21985__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__21985__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__21985__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4047__auto__ = (function (){var and__4036__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__4036__auto__){
var and__4036__auto____$1 = form;
if(cljs.core.truth_(and__4036__auto____$1)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var and__4036__auto__ = (!((const_expr == null)));
if(and__4036__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__4036__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__21987 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__21987__$1 = (((((!((map__21987 == null))))?(((((map__21987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21987):map__21987);
var op = cljs.core.get.call(null,map__21987__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__21987__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__21987__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4047__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
var and__4036__auto__ = (!((const_expr == null)));
if(and__4036__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__4036__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__4047__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__21989){
var map__21990 = p__21989;
var map__21990__$1 = (((((!((map__21990 == null))))?(((((map__21990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21990):map__21990);
var test = cljs.core.get.call(null,map__21990__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__21990__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__21990__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__21990__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__21990__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__4047__auto__ = unchecked;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__21992){
var map__21993 = p__21992;
var map__21993__$1 = (((((!((map__21993 == null))))?(((((map__21993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21993):map__21993);
var v = cljs.core.get.call(null,map__21993__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__21993__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__21993__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__21993__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__21995_22015 = cljs.core.seq.call(null,nodes);
var chunk__21996_22016 = null;
var count__21997_22017 = (0);
var i__21998_22018 = (0);
while(true){
if((i__21998_22018 < count__21997_22017)){
var map__21999_22019 = cljs.core._nth.call(null,chunk__21996_22016,i__21998_22018);
var map__21999_22020__$1 = (((((!((map__21999_22019 == null))))?(((((map__21999_22019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21999_22019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21999_22019):map__21999_22019);
var ts_22021 = cljs.core.get.call(null,map__21999_22020__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__22000_22022 = cljs.core.get.call(null,map__21999_22020__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__22000_22023__$1 = (((((!((map__22000_22022 == null))))?(((((map__22000_22022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22000_22022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22000_22022):map__22000_22022);
var then_22024 = cljs.core.get.call(null,map__22000_22023__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__22003_22025 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_22021));
var chunk__22004_22026 = null;
var count__22005_22027 = (0);
var i__22006_22028 = (0);
while(true){
if((i__22006_22028 < count__22005_22027)){
var test_22029 = cljs.core._nth.call(null,chunk__22004_22026,i__22006_22028);
cljs.compiler.emitln.call(null,"case ",test_22029,":");


var G__22030 = seq__22003_22025;
var G__22031 = chunk__22004_22026;
var G__22032 = count__22005_22027;
var G__22033 = (i__22006_22028 + (1));
seq__22003_22025 = G__22030;
chunk__22004_22026 = G__22031;
count__22005_22027 = G__22032;
i__22006_22028 = G__22033;
continue;
} else {
var temp__5735__auto___22034 = cljs.core.seq.call(null,seq__22003_22025);
if(temp__5735__auto___22034){
var seq__22003_22035__$1 = temp__5735__auto___22034;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22003_22035__$1)){
var c__4461__auto___22036 = cljs.core.chunk_first.call(null,seq__22003_22035__$1);
var G__22037 = cljs.core.chunk_rest.call(null,seq__22003_22035__$1);
var G__22038 = c__4461__auto___22036;
var G__22039 = cljs.core.count.call(null,c__4461__auto___22036);
var G__22040 = (0);
seq__22003_22025 = G__22037;
chunk__22004_22026 = G__22038;
count__22005_22027 = G__22039;
i__22006_22028 = G__22040;
continue;
} else {
var test_22041 = cljs.core.first.call(null,seq__22003_22035__$1);
cljs.compiler.emitln.call(null,"case ",test_22041,":");


var G__22042 = cljs.core.next.call(null,seq__22003_22035__$1);
var G__22043 = null;
var G__22044 = (0);
var G__22045 = (0);
seq__22003_22025 = G__22042;
chunk__22004_22026 = G__22043;
count__22005_22027 = G__22044;
i__22006_22028 = G__22045;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_22024);
} else {
cljs.compiler.emitln.call(null,then_22024);
}

cljs.compiler.emitln.call(null,"break;");


var G__22046 = seq__21995_22015;
var G__22047 = chunk__21996_22016;
var G__22048 = count__21997_22017;
var G__22049 = (i__21998_22018 + (1));
seq__21995_22015 = G__22046;
chunk__21996_22016 = G__22047;
count__21997_22017 = G__22048;
i__21998_22018 = G__22049;
continue;
} else {
var temp__5735__auto___22050 = cljs.core.seq.call(null,seq__21995_22015);
if(temp__5735__auto___22050){
var seq__21995_22051__$1 = temp__5735__auto___22050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21995_22051__$1)){
var c__4461__auto___22052 = cljs.core.chunk_first.call(null,seq__21995_22051__$1);
var G__22053 = cljs.core.chunk_rest.call(null,seq__21995_22051__$1);
var G__22054 = c__4461__auto___22052;
var G__22055 = cljs.core.count.call(null,c__4461__auto___22052);
var G__22056 = (0);
seq__21995_22015 = G__22053;
chunk__21996_22016 = G__22054;
count__21997_22017 = G__22055;
i__21998_22018 = G__22056;
continue;
} else {
var map__22007_22057 = cljs.core.first.call(null,seq__21995_22051__$1);
var map__22007_22058__$1 = (((((!((map__22007_22057 == null))))?(((((map__22007_22057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22007_22057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22007_22057):map__22007_22057);
var ts_22059 = cljs.core.get.call(null,map__22007_22058__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__22008_22060 = cljs.core.get.call(null,map__22007_22058__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__22008_22061__$1 = (((((!((map__22008_22060 == null))))?(((((map__22008_22060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22008_22060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22008_22060):map__22008_22060);
var then_22062 = cljs.core.get.call(null,map__22008_22061__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__22011_22063 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_22059));
var chunk__22012_22064 = null;
var count__22013_22065 = (0);
var i__22014_22066 = (0);
while(true){
if((i__22014_22066 < count__22013_22065)){
var test_22067 = cljs.core._nth.call(null,chunk__22012_22064,i__22014_22066);
cljs.compiler.emitln.call(null,"case ",test_22067,":");


var G__22068 = seq__22011_22063;
var G__22069 = chunk__22012_22064;
var G__22070 = count__22013_22065;
var G__22071 = (i__22014_22066 + (1));
seq__22011_22063 = G__22068;
chunk__22012_22064 = G__22069;
count__22013_22065 = G__22070;
i__22014_22066 = G__22071;
continue;
} else {
var temp__5735__auto___22072__$1 = cljs.core.seq.call(null,seq__22011_22063);
if(temp__5735__auto___22072__$1){
var seq__22011_22073__$1 = temp__5735__auto___22072__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22011_22073__$1)){
var c__4461__auto___22074 = cljs.core.chunk_first.call(null,seq__22011_22073__$1);
var G__22075 = cljs.core.chunk_rest.call(null,seq__22011_22073__$1);
var G__22076 = c__4461__auto___22074;
var G__22077 = cljs.core.count.call(null,c__4461__auto___22074);
var G__22078 = (0);
seq__22011_22063 = G__22075;
chunk__22012_22064 = G__22076;
count__22013_22065 = G__22077;
i__22014_22066 = G__22078;
continue;
} else {
var test_22079 = cljs.core.first.call(null,seq__22011_22073__$1);
cljs.compiler.emitln.call(null,"case ",test_22079,":");


var G__22080 = cljs.core.next.call(null,seq__22011_22073__$1);
var G__22081 = null;
var G__22082 = (0);
var G__22083 = (0);
seq__22011_22063 = G__22080;
chunk__22012_22064 = G__22081;
count__22013_22065 = G__22082;
i__22014_22066 = G__22083;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_22062);
} else {
cljs.compiler.emitln.call(null,then_22062);
}

cljs.compiler.emitln.call(null,"break;");


var G__22084 = cljs.core.next.call(null,seq__21995_22051__$1);
var G__22085 = null;
var G__22086 = (0);
var G__22087 = (0);
seq__21995_22015 = G__22084;
chunk__21996_22016 = G__22085;
count__21997_22017 = G__22086;
i__21998_22018 = G__22087;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__22088){
var map__22089 = p__22088;
var map__22089__$1 = (((((!((map__22089 == null))))?(((((map__22089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22089):map__22089);
var throw$ = cljs.core.get.call(null,map__22089__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__22089__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__22092 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__22092,(0),null);
var rstr = cljs.core.nth.call(null,vec__22092,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__22092,fstr,rstr,ret_t,axstr){
return (function (p1__22091_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__22091_SHARP_);
});})(idx,vec__22092,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__22095 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22095),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__22095;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
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
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__22096_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__22096_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__22097 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__22098 = cljs.core.seq.call(null,vec__22097);
var first__22099 = cljs.core.first.call(null,seq__22098);
var seq__22098__$1 = cljs.core.next.call(null,seq__22098);
var p = first__22099;
var first__22099__$1 = cljs.core.first.call(null,seq__22098__$1);
var seq__22098__$2 = cljs.core.next.call(null,seq__22098__$1);
var ts = first__22099__$1;
var first__22099__$2 = cljs.core.first.call(null,seq__22098__$2);
var seq__22098__$3 = cljs.core.next.call(null,seq__22098__$2);
var n = first__22099__$2;
var xs = seq__22098__$3;
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__4036__auto__){
var and__4036__auto____$1 = ts;
if(cljs.core.truth_(and__4036__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__22100 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__22101 = cljs.core.seq.call(null,vec__22100);
var first__22102 = cljs.core.first.call(null,seq__22101);
var seq__22101__$1 = cljs.core.next.call(null,seq__22101);
var p = first__22102;
var first__22102__$1 = cljs.core.first.call(null,seq__22101__$1);
var seq__22101__$2 = cljs.core.next.call(null,seq__22101__$1);
var ts = first__22102__$1;
var xs = seq__22101__$2;
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__4036__auto__){
var and__4036__auto____$1 = ts;
if(cljs.core.truth_(and__4036__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
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
var G__22105 = arguments.length;
switch (G__22105) {
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

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__22113 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__22103_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__22103_SHARP_);
} else {
return p1__22103_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__22114 = cljs.core.seq.call(null,vec__22113);
var first__22115 = cljs.core.first.call(null,seq__22114);
var seq__22114__$1 = cljs.core.next.call(null,seq__22114);
var x = first__22115;
var ys = seq__22114__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__22116 = cljs.core.seq.call(null,ys);
var chunk__22117 = null;
var count__22118 = (0);
var i__22119 = (0);
while(true){
if((i__22119 < count__22118)){
var next_line = cljs.core._nth.call(null,chunk__22117,i__22119);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__22125 = seq__22116;
var G__22126 = chunk__22117;
var G__22127 = count__22118;
var G__22128 = (i__22119 + (1));
seq__22116 = G__22125;
chunk__22117 = G__22126;
count__22118 = G__22127;
i__22119 = G__22128;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__22116);
if(temp__5735__auto__){
var seq__22116__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22116__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__22116__$1);
var G__22129 = cljs.core.chunk_rest.call(null,seq__22116__$1);
var G__22130 = c__4461__auto__;
var G__22131 = cljs.core.count.call(null,c__4461__auto__);
var G__22132 = (0);
seq__22116 = G__22129;
chunk__22117 = G__22130;
count__22118 = G__22131;
i__22119 = G__22132;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__22116__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__22133 = cljs.core.next.call(null,seq__22116__$1);
var G__22134 = null;
var G__22135 = (0);
var G__22136 = (0);
seq__22116 = G__22133;
chunk__22117 = G__22134;
count__22118 = G__22135;
i__22119 = G__22136;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__22120_22137 = cljs.core.seq.call(null,docs__$2);
var chunk__22121_22138 = null;
var count__22122_22139 = (0);
var i__22123_22140 = (0);
while(true){
if((i__22123_22140 < count__22122_22139)){
var e_22141 = cljs.core._nth.call(null,chunk__22121_22138,i__22123_22140);
if(cljs.core.truth_(e_22141)){
print_comment_lines.call(null,e_22141);
} else {
}


var G__22142 = seq__22120_22137;
var G__22143 = chunk__22121_22138;
var G__22144 = count__22122_22139;
var G__22145 = (i__22123_22140 + (1));
seq__22120_22137 = G__22142;
chunk__22121_22138 = G__22143;
count__22122_22139 = G__22144;
i__22123_22140 = G__22145;
continue;
} else {
var temp__5735__auto___22146 = cljs.core.seq.call(null,seq__22120_22137);
if(temp__5735__auto___22146){
var seq__22120_22147__$1 = temp__5735__auto___22146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22120_22147__$1)){
var c__4461__auto___22148 = cljs.core.chunk_first.call(null,seq__22120_22147__$1);
var G__22149 = cljs.core.chunk_rest.call(null,seq__22120_22147__$1);
var G__22150 = c__4461__auto___22148;
var G__22151 = cljs.core.count.call(null,c__4461__auto___22148);
var G__22152 = (0);
seq__22120_22137 = G__22149;
chunk__22121_22138 = G__22150;
count__22122_22139 = G__22151;
i__22123_22140 = G__22152;
continue;
} else {
var e_22153 = cljs.core.first.call(null,seq__22120_22147__$1);
if(cljs.core.truth_(e_22153)){
print_comment_lines.call(null,e_22153);
} else {
}


var G__22154 = cljs.core.next.call(null,seq__22120_22147__$1);
var G__22155 = null;
var G__22156 = (0);
var G__22157 = (0);
seq__22120_22137 = G__22154;
chunk__22121_22138 = G__22155;
count__22122_22139 = G__22156;
i__22123_22140 = G__22157;
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
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4036__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__22159_SHARP_){
return goog.string.startsWith(p1__22159_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = opts;
if(cljs.core.truth_(and__4036__auto____$1)){
var and__4036__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__4036__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_.call(null,define)){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__4036__auto____$2;
}
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__22160){
var map__22161 = p__22160;
var map__22161__$1 = (((((!((map__22161 == null))))?(((((map__22161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22161):map__22161);
var doc = cljs.core.get.call(null,map__22161__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__22161__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__22161__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__22161__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__22161__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__22161__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__22161__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__22161__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__22161__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4047__auto__ = init;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

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
cljs.compiler.emits.call(null," = ",(function (){var temp__5733__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5733__auto__)){
var define = temp__5733__auto__;
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

if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__4036__auto__){
return test;
} else {
return and__4036__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__22163){
var map__22164 = p__22163;
var map__22164__$1 = (((((!((map__22164 == null))))?(((((map__22164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22164):map__22164);
var name = cljs.core.get.call(null,map__22164__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__22164__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__22164__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__22166_22184 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__22167_22185 = null;
var count__22168_22186 = (0);
var i__22169_22187 = (0);
while(true){
if((i__22169_22187 < count__22168_22186)){
var vec__22170_22188 = cljs.core._nth.call(null,chunk__22167_22185,i__22169_22187);
var i_22189 = cljs.core.nth.call(null,vec__22170_22188,(0),null);
var param_22190 = cljs.core.nth.call(null,vec__22170_22188,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_22190);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__22191 = seq__22166_22184;
var G__22192 = chunk__22167_22185;
var G__22193 = count__22168_22186;
var G__22194 = (i__22169_22187 + (1));
seq__22166_22184 = G__22191;
chunk__22167_22185 = G__22192;
count__22168_22186 = G__22193;
i__22169_22187 = G__22194;
continue;
} else {
var temp__5735__auto___22195 = cljs.core.seq.call(null,seq__22166_22184);
if(temp__5735__auto___22195){
var seq__22166_22196__$1 = temp__5735__auto___22195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22166_22196__$1)){
var c__4461__auto___22197 = cljs.core.chunk_first.call(null,seq__22166_22196__$1);
var G__22198 = cljs.core.chunk_rest.call(null,seq__22166_22196__$1);
var G__22199 = c__4461__auto___22197;
var G__22200 = cljs.core.count.call(null,c__4461__auto___22197);
var G__22201 = (0);
seq__22166_22184 = G__22198;
chunk__22167_22185 = G__22199;
count__22168_22186 = G__22200;
i__22169_22187 = G__22201;
continue;
} else {
var vec__22173_22202 = cljs.core.first.call(null,seq__22166_22196__$1);
var i_22203 = cljs.core.nth.call(null,vec__22173_22202,(0),null);
var param_22204 = cljs.core.nth.call(null,vec__22173_22202,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_22204);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__22205 = cljs.core.next.call(null,seq__22166_22196__$1);
var G__22206 = null;
var G__22207 = (0);
var G__22208 = (0);
seq__22166_22184 = G__22205;
chunk__22167_22185 = G__22206;
count__22168_22186 = G__22207;
i__22169_22187 = G__22208;
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

var seq__22176_22209 = cljs.core.seq.call(null,params);
var chunk__22177_22210 = null;
var count__22178_22211 = (0);
var i__22179_22212 = (0);
while(true){
if((i__22179_22212 < count__22178_22211)){
var param_22213 = cljs.core._nth.call(null,chunk__22177_22210,i__22179_22212);
cljs.compiler.emit.call(null,param_22213);

if(cljs.core._EQ_.call(null,param_22213,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22214 = seq__22176_22209;
var G__22215 = chunk__22177_22210;
var G__22216 = count__22178_22211;
var G__22217 = (i__22179_22212 + (1));
seq__22176_22209 = G__22214;
chunk__22177_22210 = G__22215;
count__22178_22211 = G__22216;
i__22179_22212 = G__22217;
continue;
} else {
var temp__5735__auto___22218 = cljs.core.seq.call(null,seq__22176_22209);
if(temp__5735__auto___22218){
var seq__22176_22219__$1 = temp__5735__auto___22218;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22176_22219__$1)){
var c__4461__auto___22220 = cljs.core.chunk_first.call(null,seq__22176_22219__$1);
var G__22221 = cljs.core.chunk_rest.call(null,seq__22176_22219__$1);
var G__22222 = c__4461__auto___22220;
var G__22223 = cljs.core.count.call(null,c__4461__auto___22220);
var G__22224 = (0);
seq__22176_22209 = G__22221;
chunk__22177_22210 = G__22222;
count__22178_22211 = G__22223;
i__22179_22212 = G__22224;
continue;
} else {
var param_22225 = cljs.core.first.call(null,seq__22176_22219__$1);
cljs.compiler.emit.call(null,param_22225);

if(cljs.core._EQ_.call(null,param_22225,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22226 = cljs.core.next.call(null,seq__22176_22219__$1);
var G__22227 = null;
var G__22228 = (0);
var G__22229 = (0);
seq__22176_22209 = G__22226;
chunk__22177_22210 = G__22227;
count__22178_22211 = G__22228;
i__22179_22212 = G__22229;
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

var seq__22180_22230 = cljs.core.seq.call(null,params);
var chunk__22181_22231 = null;
var count__22182_22232 = (0);
var i__22183_22233 = (0);
while(true){
if((i__22183_22233 < count__22182_22232)){
var param_22234 = cljs.core._nth.call(null,chunk__22181_22231,i__22183_22233);
cljs.compiler.emit.call(null,param_22234);

if(cljs.core._EQ_.call(null,param_22234,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22235 = seq__22180_22230;
var G__22236 = chunk__22181_22231;
var G__22237 = count__22182_22232;
var G__22238 = (i__22183_22233 + (1));
seq__22180_22230 = G__22235;
chunk__22181_22231 = G__22236;
count__22182_22232 = G__22237;
i__22183_22233 = G__22238;
continue;
} else {
var temp__5735__auto___22239 = cljs.core.seq.call(null,seq__22180_22230);
if(temp__5735__auto___22239){
var seq__22180_22240__$1 = temp__5735__auto___22239;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22180_22240__$1)){
var c__4461__auto___22241 = cljs.core.chunk_first.call(null,seq__22180_22240__$1);
var G__22242 = cljs.core.chunk_rest.call(null,seq__22180_22240__$1);
var G__22243 = c__4461__auto___22241;
var G__22244 = cljs.core.count.call(null,c__4461__auto___22241);
var G__22245 = (0);
seq__22180_22230 = G__22242;
chunk__22181_22231 = G__22243;
count__22182_22232 = G__22244;
i__22183_22233 = G__22245;
continue;
} else {
var param_22246 = cljs.core.first.call(null,seq__22180_22240__$1);
cljs.compiler.emit.call(null,param_22246);

if(cljs.core._EQ_.call(null,param_22246,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22247 = cljs.core.next.call(null,seq__22180_22240__$1);
var G__22248 = null;
var G__22249 = (0);
var G__22250 = (0);
seq__22180_22230 = G__22247;
chunk__22181_22231 = G__22248;
count__22182_22232 = G__22249;
i__22183_22233 = G__22250;
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
var seq__22251 = cljs.core.seq.call(null,params);
var chunk__22252 = null;
var count__22253 = (0);
var i__22254 = (0);
while(true){
if((i__22254 < count__22253)){
var param = cljs.core._nth.call(null,chunk__22252,i__22254);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22255 = seq__22251;
var G__22256 = chunk__22252;
var G__22257 = count__22253;
var G__22258 = (i__22254 + (1));
seq__22251 = G__22255;
chunk__22252 = G__22256;
count__22253 = G__22257;
i__22254 = G__22258;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__22251);
if(temp__5735__auto__){
var seq__22251__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22251__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__22251__$1);
var G__22259 = cljs.core.chunk_rest.call(null,seq__22251__$1);
var G__22260 = c__4461__auto__;
var G__22261 = cljs.core.count.call(null,c__4461__auto__);
var G__22262 = (0);
seq__22251 = G__22259;
chunk__22252 = G__22260;
count__22253 = G__22261;
i__22254 = G__22262;
continue;
} else {
var param = cljs.core.first.call(null,seq__22251__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22263 = cljs.core.next.call(null,seq__22251__$1);
var G__22264 = null;
var G__22265 = (0);
var G__22266 = (0);
seq__22251 = G__22263;
chunk__22252 = G__22264;
count__22253 = G__22265;
i__22254 = G__22266;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__22267){
var map__22268 = p__22267;
var map__22268__$1 = (((((!((map__22268 == null))))?(((((map__22268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22268):map__22268);
var expr = cljs.core.get.call(null,map__22268__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__22268__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__22268__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__22268__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__22268__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__22268__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__20566__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__22270){
var map__22271 = p__22270;
var map__22271__$1 = (((((!((map__22271 == null))))?(((((map__22271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22271):map__22271);
var f = map__22271__$1;
var expr = cljs.core.get.call(null,map__22271__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__22271__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__22271__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__22271__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__22271__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__22271__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__22271__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__22271__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__20566__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_22281__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_22282 = cljs.compiler.munge.call(null,name_22281__$1);
var delegate_name_22283 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_22282),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_22283," = function (");

var seq__22273_22284 = cljs.core.seq.call(null,params);
var chunk__22274_22285 = null;
var count__22275_22286 = (0);
var i__22276_22287 = (0);
while(true){
if((i__22276_22287 < count__22275_22286)){
var param_22288 = cljs.core._nth.call(null,chunk__22274_22285,i__22276_22287);
cljs.compiler.emit.call(null,param_22288);

if(cljs.core._EQ_.call(null,param_22288,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22289 = seq__22273_22284;
var G__22290 = chunk__22274_22285;
var G__22291 = count__22275_22286;
var G__22292 = (i__22276_22287 + (1));
seq__22273_22284 = G__22289;
chunk__22274_22285 = G__22290;
count__22275_22286 = G__22291;
i__22276_22287 = G__22292;
continue;
} else {
var temp__5735__auto___22293 = cljs.core.seq.call(null,seq__22273_22284);
if(temp__5735__auto___22293){
var seq__22273_22294__$1 = temp__5735__auto___22293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22273_22294__$1)){
var c__4461__auto___22295 = cljs.core.chunk_first.call(null,seq__22273_22294__$1);
var G__22296 = cljs.core.chunk_rest.call(null,seq__22273_22294__$1);
var G__22297 = c__4461__auto___22295;
var G__22298 = cljs.core.count.call(null,c__4461__auto___22295);
var G__22299 = (0);
seq__22273_22284 = G__22296;
chunk__22274_22285 = G__22297;
count__22275_22286 = G__22298;
i__22276_22287 = G__22299;
continue;
} else {
var param_22300 = cljs.core.first.call(null,seq__22273_22294__$1);
cljs.compiler.emit.call(null,param_22300);

if(cljs.core._EQ_.call(null,param_22300,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22301 = cljs.core.next.call(null,seq__22273_22294__$1);
var G__22302 = null;
var G__22303 = (0);
var G__22304 = (0);
seq__22273_22284 = G__22301;
chunk__22274_22285 = G__22302;
count__22275_22286 = G__22303;
i__22276_22287 = G__22304;
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

cljs.compiler.emitln.call(null,"var ",mname_22282," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_22305 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_22305,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_22283,".call(this,");

var seq__22277_22306 = cljs.core.seq.call(null,params);
var chunk__22278_22307 = null;
var count__22279_22308 = (0);
var i__22280_22309 = (0);
while(true){
if((i__22280_22309 < count__22279_22308)){
var param_22310 = cljs.core._nth.call(null,chunk__22278_22307,i__22280_22309);
cljs.compiler.emit.call(null,param_22310);

if(cljs.core._EQ_.call(null,param_22310,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22311 = seq__22277_22306;
var G__22312 = chunk__22278_22307;
var G__22313 = count__22279_22308;
var G__22314 = (i__22280_22309 + (1));
seq__22277_22306 = G__22311;
chunk__22278_22307 = G__22312;
count__22279_22308 = G__22313;
i__22280_22309 = G__22314;
continue;
} else {
var temp__5735__auto___22315 = cljs.core.seq.call(null,seq__22277_22306);
if(temp__5735__auto___22315){
var seq__22277_22316__$1 = temp__5735__auto___22315;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22277_22316__$1)){
var c__4461__auto___22317 = cljs.core.chunk_first.call(null,seq__22277_22316__$1);
var G__22318 = cljs.core.chunk_rest.call(null,seq__22277_22316__$1);
var G__22319 = c__4461__auto___22317;
var G__22320 = cljs.core.count.call(null,c__4461__auto___22317);
var G__22321 = (0);
seq__22277_22306 = G__22318;
chunk__22278_22307 = G__22319;
count__22279_22308 = G__22320;
i__22280_22309 = G__22321;
continue;
} else {
var param_22322 = cljs.core.first.call(null,seq__22277_22316__$1);
cljs.compiler.emit.call(null,param_22322);

if(cljs.core._EQ_.call(null,param_22322,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22323 = cljs.core.next.call(null,seq__22277_22316__$1);
var G__22324 = null;
var G__22325 = (0);
var G__22326 = (0);
seq__22277_22306 = G__22323;
chunk__22278_22307 = G__22324;
count__22279_22308 = G__22325;
i__22280_22309 = G__22326;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_22282,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_22282,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_22281__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_22282,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_22283,";");

cljs.compiler.emitln.call(null,"return ",mname_22282,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__22330){
var map__22331 = p__22330;
var map__22331__$1 = (((((!((map__22331 == null))))?(((((map__22331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22331):map__22331);
var variadic = cljs.core.get.call(null,map__22331__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__22331__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__22331__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__22331__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__22331__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__22331__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__22331__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__22331,map__22331__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__22327_SHARP_){
var and__4036__auto__ = p1__22327_SHARP_;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__22327_SHARP_));
} else {
return and__4036__auto__;
}
});})(map__22331,map__22331__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
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
var name_22366__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_22367 = cljs.compiler.munge.call(null,name_22366__$1);
var maxparams_22368 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_22369 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_22366__$1,mname_22367,maxparams_22368,loop_locals,map__22331,map__22331__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_22367),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_22366__$1,mname_22367,maxparams_22368,loop_locals,map__22331,map__22331__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_22370 = cljs.core.sort_by.call(null,((function (name_22366__$1,mname_22367,maxparams_22368,mmap_22369,loop_locals,map__22331,map__22331__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__22328_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__22328_SHARP_)));
});})(name_22366__$1,mname_22367,maxparams_22368,mmap_22369,loop_locals,map__22331,map__22331__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_22369));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_22367," = null;");

var seq__22333_22371 = cljs.core.seq.call(null,ms_22370);
var chunk__22334_22372 = null;
var count__22335_22373 = (0);
var i__22336_22374 = (0);
while(true){
if((i__22336_22374 < count__22335_22373)){
var vec__22337_22375 = cljs.core._nth.call(null,chunk__22334_22372,i__22336_22374);
var n_22376 = cljs.core.nth.call(null,vec__22337_22375,(0),null);
var meth_22377 = cljs.core.nth.call(null,vec__22337_22375,(1),null);
cljs.compiler.emits.call(null,"var ",n_22376," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_22377))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_22377);
} else {
cljs.compiler.emit_fn_method.call(null,meth_22377);
}

cljs.compiler.emitln.call(null,";");


var G__22378 = seq__22333_22371;
var G__22379 = chunk__22334_22372;
var G__22380 = count__22335_22373;
var G__22381 = (i__22336_22374 + (1));
seq__22333_22371 = G__22378;
chunk__22334_22372 = G__22379;
count__22335_22373 = G__22380;
i__22336_22374 = G__22381;
continue;
} else {
var temp__5735__auto___22382 = cljs.core.seq.call(null,seq__22333_22371);
if(temp__5735__auto___22382){
var seq__22333_22383__$1 = temp__5735__auto___22382;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22333_22383__$1)){
var c__4461__auto___22384 = cljs.core.chunk_first.call(null,seq__22333_22383__$1);
var G__22385 = cljs.core.chunk_rest.call(null,seq__22333_22383__$1);
var G__22386 = c__4461__auto___22384;
var G__22387 = cljs.core.count.call(null,c__4461__auto___22384);
var G__22388 = (0);
seq__22333_22371 = G__22385;
chunk__22334_22372 = G__22386;
count__22335_22373 = G__22387;
i__22336_22374 = G__22388;
continue;
} else {
var vec__22340_22389 = cljs.core.first.call(null,seq__22333_22383__$1);
var n_22390 = cljs.core.nth.call(null,vec__22340_22389,(0),null);
var meth_22391 = cljs.core.nth.call(null,vec__22340_22389,(1),null);
cljs.compiler.emits.call(null,"var ",n_22390," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_22391))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_22391);
} else {
cljs.compiler.emit_fn_method.call(null,meth_22391);
}

cljs.compiler.emitln.call(null,";");


var G__22392 = cljs.core.next.call(null,seq__22333_22383__$1);
var G__22393 = null;
var G__22394 = (0);
var G__22395 = (0);
seq__22333_22371 = G__22392;
chunk__22334_22372 = G__22393;
count__22335_22373 = G__22394;
i__22336_22374 = G__22395;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_22367," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_22368),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_22368)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_22368));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__22343_22396 = cljs.core.seq.call(null,ms_22370);
var chunk__22344_22397 = null;
var count__22345_22398 = (0);
var i__22346_22399 = (0);
while(true){
if((i__22346_22399 < count__22345_22398)){
var vec__22347_22400 = cljs.core._nth.call(null,chunk__22344_22397,i__22346_22399);
var n_22401 = cljs.core.nth.call(null,vec__22347_22400,(0),null);
var meth_22402 = cljs.core.nth.call(null,vec__22347_22400,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_22402))){
cljs.compiler.emitln.call(null,"default:");

var restarg_22403 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_22403," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_22404 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_22403," = new cljs.core.IndexedSeq(",a_22404,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_22401,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_22368)),(((cljs.core.count.call(null,maxparams_22368) > (1)))?", ":null),restarg_22403,");");
} else {
var pcnt_22405 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_22402));
cljs.compiler.emitln.call(null,"case ",pcnt_22405,":");

cljs.compiler.emitln.call(null,"return ",n_22401,".call(this",(((pcnt_22405 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_22405,maxparams_22368)),null,(1),null)),(2),null))),");");
}


var G__22406 = seq__22343_22396;
var G__22407 = chunk__22344_22397;
var G__22408 = count__22345_22398;
var G__22409 = (i__22346_22399 + (1));
seq__22343_22396 = G__22406;
chunk__22344_22397 = G__22407;
count__22345_22398 = G__22408;
i__22346_22399 = G__22409;
continue;
} else {
var temp__5735__auto___22410 = cljs.core.seq.call(null,seq__22343_22396);
if(temp__5735__auto___22410){
var seq__22343_22411__$1 = temp__5735__auto___22410;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22343_22411__$1)){
var c__4461__auto___22412 = cljs.core.chunk_first.call(null,seq__22343_22411__$1);
var G__22413 = cljs.core.chunk_rest.call(null,seq__22343_22411__$1);
var G__22414 = c__4461__auto___22412;
var G__22415 = cljs.core.count.call(null,c__4461__auto___22412);
var G__22416 = (0);
seq__22343_22396 = G__22413;
chunk__22344_22397 = G__22414;
count__22345_22398 = G__22415;
i__22346_22399 = G__22416;
continue;
} else {
var vec__22350_22417 = cljs.core.first.call(null,seq__22343_22411__$1);
var n_22418 = cljs.core.nth.call(null,vec__22350_22417,(0),null);
var meth_22419 = cljs.core.nth.call(null,vec__22350_22417,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_22419))){
cljs.compiler.emitln.call(null,"default:");

var restarg_22420 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_22420," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_22421 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_22420," = new cljs.core.IndexedSeq(",a_22421,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_22418,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_22368)),(((cljs.core.count.call(null,maxparams_22368) > (1)))?", ":null),restarg_22420,");");
} else {
var pcnt_22422 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_22419));
cljs.compiler.emitln.call(null,"case ",pcnt_22422,":");

cljs.compiler.emitln.call(null,"return ",n_22418,".call(this",(((pcnt_22422 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_22422,maxparams_22368)),null,(1),null)),(2),null))),");");
}


var G__22423 = cljs.core.next.call(null,seq__22343_22411__$1);
var G__22424 = null;
var G__22425 = (0);
var G__22426 = (0);
seq__22343_22396 = G__22423;
chunk__22344_22397 = G__22424;
count__22345_22398 = G__22425;
i__22346_22399 = G__22426;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_22427 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_22370)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_22427,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_22367,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_22367,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_22366__$1,mname_22367,maxparams_22368,mmap_22369,ms_22370,loop_locals,map__22331,map__22331__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__22329_SHARP_){
var vec__22353 = p1__22329_SHARP_;
var n = cljs.core.nth.call(null,vec__22353,(0),null);
var m = cljs.core.nth.call(null,vec__22353,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_22366__$1,mname_22367,maxparams_22368,mmap_22369,ms_22370,loop_locals,map__22331,map__22331__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_22370),".cljs$lang$applyTo;");
} else {
}

var seq__22356_22428 = cljs.core.seq.call(null,ms_22370);
var chunk__22357_22429 = null;
var count__22358_22430 = (0);
var i__22359_22431 = (0);
while(true){
if((i__22359_22431 < count__22358_22430)){
var vec__22360_22432 = cljs.core._nth.call(null,chunk__22357_22429,i__22359_22431);
var n_22433 = cljs.core.nth.call(null,vec__22360_22432,(0),null);
var meth_22434 = cljs.core.nth.call(null,vec__22360_22432,(1),null);
var c_22435 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_22434));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_22434))){
cljs.compiler.emitln.call(null,mname_22367,".cljs$core$IFn$_invoke$arity$variadic = ",n_22433,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_22367,".cljs$core$IFn$_invoke$arity$",c_22435," = ",n_22433,";");
}


var G__22436 = seq__22356_22428;
var G__22437 = chunk__22357_22429;
var G__22438 = count__22358_22430;
var G__22439 = (i__22359_22431 + (1));
seq__22356_22428 = G__22436;
chunk__22357_22429 = G__22437;
count__22358_22430 = G__22438;
i__22359_22431 = G__22439;
continue;
} else {
var temp__5735__auto___22440 = cljs.core.seq.call(null,seq__22356_22428);
if(temp__5735__auto___22440){
var seq__22356_22441__$1 = temp__5735__auto___22440;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22356_22441__$1)){
var c__4461__auto___22442 = cljs.core.chunk_first.call(null,seq__22356_22441__$1);
var G__22443 = cljs.core.chunk_rest.call(null,seq__22356_22441__$1);
var G__22444 = c__4461__auto___22442;
var G__22445 = cljs.core.count.call(null,c__4461__auto___22442);
var G__22446 = (0);
seq__22356_22428 = G__22443;
chunk__22357_22429 = G__22444;
count__22358_22430 = G__22445;
i__22359_22431 = G__22446;
continue;
} else {
var vec__22363_22447 = cljs.core.first.call(null,seq__22356_22441__$1);
var n_22448 = cljs.core.nth.call(null,vec__22363_22447,(0),null);
var meth_22449 = cljs.core.nth.call(null,vec__22363_22447,(1),null);
var c_22450 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_22449));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_22449))){
cljs.compiler.emitln.call(null,mname_22367,".cljs$core$IFn$_invoke$arity$variadic = ",n_22448,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_22367,".cljs$core$IFn$_invoke$arity$",c_22450," = ",n_22448,";");
}


var G__22451 = cljs.core.next.call(null,seq__22356_22441__$1);
var G__22452 = null;
var G__22453 = (0);
var G__22454 = (0);
seq__22356_22428 = G__22451;
chunk__22357_22429 = G__22452;
count__22358_22430 = G__22453;
i__22359_22431 = G__22454;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_22367,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__22455){
var map__22456 = p__22455;
var map__22456__$1 = (((((!((map__22456 == null))))?(((((map__22456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22456):map__22456);
var statements = cljs.core.get.call(null,map__22456__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__22456__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__22456__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__22458_22462 = cljs.core.seq.call(null,statements);
var chunk__22459_22463 = null;
var count__22460_22464 = (0);
var i__22461_22465 = (0);
while(true){
if((i__22461_22465 < count__22460_22464)){
var s_22466 = cljs.core._nth.call(null,chunk__22459_22463,i__22461_22465);
cljs.compiler.emitln.call(null,s_22466);


var G__22467 = seq__22458_22462;
var G__22468 = chunk__22459_22463;
var G__22469 = count__22460_22464;
var G__22470 = (i__22461_22465 + (1));
seq__22458_22462 = G__22467;
chunk__22459_22463 = G__22468;
count__22460_22464 = G__22469;
i__22461_22465 = G__22470;
continue;
} else {
var temp__5735__auto___22471 = cljs.core.seq.call(null,seq__22458_22462);
if(temp__5735__auto___22471){
var seq__22458_22472__$1 = temp__5735__auto___22471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22458_22472__$1)){
var c__4461__auto___22473 = cljs.core.chunk_first.call(null,seq__22458_22472__$1);
var G__22474 = cljs.core.chunk_rest.call(null,seq__22458_22472__$1);
var G__22475 = c__4461__auto___22473;
var G__22476 = cljs.core.count.call(null,c__4461__auto___22473);
var G__22477 = (0);
seq__22458_22462 = G__22474;
chunk__22459_22463 = G__22475;
count__22460_22464 = G__22476;
i__22461_22465 = G__22477;
continue;
} else {
var s_22478 = cljs.core.first.call(null,seq__22458_22472__$1);
cljs.compiler.emitln.call(null,s_22478);


var G__22479 = cljs.core.next.call(null,seq__22458_22472__$1);
var G__22480 = null;
var G__22481 = (0);
var G__22482 = (0);
seq__22458_22462 = G__22479;
chunk__22459_22463 = G__22480;
count__22460_22464 = G__22481;
i__22461_22465 = G__22482;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__22483){
var map__22484 = p__22483;
var map__22484__$1 = (((((!((map__22484 == null))))?(((((map__22484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22484):map__22484);
var try$ = cljs.core.get.call(null,map__22484__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__22484__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__22484__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__22484__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__22484__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__22486,is_loop){
var map__22487 = p__22486;
var map__22487__$1 = (((((!((map__22487 == null))))?(((((map__22487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22487):map__22487);
var expr = cljs.core.get.call(null,map__22487__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__22487__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__22487__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__22489_22499 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__22490_22500 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__22489_22499,context,map__22487,map__22487__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__22489_22499,context,map__22487,map__22487__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__22490_22500;

try{var seq__22491_22501 = cljs.core.seq.call(null,bindings);
var chunk__22492_22502 = null;
var count__22493_22503 = (0);
var i__22494_22504 = (0);
while(true){
if((i__22494_22504 < count__22493_22503)){
var map__22495_22505 = cljs.core._nth.call(null,chunk__22492_22502,i__22494_22504);
var map__22495_22506__$1 = (((((!((map__22495_22505 == null))))?(((((map__22495_22505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22495_22505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22495_22505):map__22495_22505);
var binding_22507 = map__22495_22506__$1;
var init_22508 = cljs.core.get.call(null,map__22495_22506__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_22507);

cljs.compiler.emitln.call(null," = ",init_22508,";");


var G__22509 = seq__22491_22501;
var G__22510 = chunk__22492_22502;
var G__22511 = count__22493_22503;
var G__22512 = (i__22494_22504 + (1));
seq__22491_22501 = G__22509;
chunk__22492_22502 = G__22510;
count__22493_22503 = G__22511;
i__22494_22504 = G__22512;
continue;
} else {
var temp__5735__auto___22513 = cljs.core.seq.call(null,seq__22491_22501);
if(temp__5735__auto___22513){
var seq__22491_22514__$1 = temp__5735__auto___22513;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22491_22514__$1)){
var c__4461__auto___22515 = cljs.core.chunk_first.call(null,seq__22491_22514__$1);
var G__22516 = cljs.core.chunk_rest.call(null,seq__22491_22514__$1);
var G__22517 = c__4461__auto___22515;
var G__22518 = cljs.core.count.call(null,c__4461__auto___22515);
var G__22519 = (0);
seq__22491_22501 = G__22516;
chunk__22492_22502 = G__22517;
count__22493_22503 = G__22518;
i__22494_22504 = G__22519;
continue;
} else {
var map__22497_22520 = cljs.core.first.call(null,seq__22491_22514__$1);
var map__22497_22521__$1 = (((((!((map__22497_22520 == null))))?(((((map__22497_22520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22497_22520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22497_22520):map__22497_22520);
var binding_22522 = map__22497_22521__$1;
var init_22523 = cljs.core.get.call(null,map__22497_22521__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_22522);

cljs.compiler.emitln.call(null," = ",init_22523,";");


var G__22524 = cljs.core.next.call(null,seq__22491_22514__$1);
var G__22525 = null;
var G__22526 = (0);
var G__22527 = (0);
seq__22491_22501 = G__22524;
chunk__22492_22502 = G__22525;
count__22493_22503 = G__22526;
i__22494_22504 = G__22527;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__22489_22499;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__22528){
var map__22529 = p__22528;
var map__22529__$1 = (((((!((map__22529 == null))))?(((((map__22529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22529):map__22529);
var frame = cljs.core.get.call(null,map__22529__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__22529__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__22529__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4518__auto___22531 = cljs.core.count.call(null,exprs);
var i_22532 = (0);
while(true){
if((i_22532 < n__4518__auto___22531)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_22532)," = ",exprs.call(null,i_22532),";");

var G__22533 = (i_22532 + (1));
i_22532 = G__22533;
continue;
} else {
}
break;
}

var n__4518__auto___22534 = cljs.core.count.call(null,exprs);
var i_22535 = (0);
while(true){
if((i_22535 < n__4518__auto___22534)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_22535))," = ",temps.call(null,i_22535),";");

var G__22536 = (i_22535 + (1));
i_22535 = G__22536;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__22537){
var map__22538 = p__22537;
var map__22538__$1 = (((((!((map__22538 == null))))?(((((map__22538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22538):map__22538);
var expr = cljs.core.get.call(null,map__22538__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__22538__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__22538__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__22540_22548 = cljs.core.seq.call(null,bindings);
var chunk__22541_22549 = null;
var count__22542_22550 = (0);
var i__22543_22551 = (0);
while(true){
if((i__22543_22551 < count__22542_22550)){
var map__22544_22552 = cljs.core._nth.call(null,chunk__22541_22549,i__22543_22551);
var map__22544_22553__$1 = (((((!((map__22544_22552 == null))))?(((((map__22544_22552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22544_22552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22544_22552):map__22544_22552);
var binding_22554 = map__22544_22553__$1;
var init_22555 = cljs.core.get.call(null,map__22544_22553__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_22554)," = ",init_22555,";");


var G__22556 = seq__22540_22548;
var G__22557 = chunk__22541_22549;
var G__22558 = count__22542_22550;
var G__22559 = (i__22543_22551 + (1));
seq__22540_22548 = G__22556;
chunk__22541_22549 = G__22557;
count__22542_22550 = G__22558;
i__22543_22551 = G__22559;
continue;
} else {
var temp__5735__auto___22560 = cljs.core.seq.call(null,seq__22540_22548);
if(temp__5735__auto___22560){
var seq__22540_22561__$1 = temp__5735__auto___22560;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22540_22561__$1)){
var c__4461__auto___22562 = cljs.core.chunk_first.call(null,seq__22540_22561__$1);
var G__22563 = cljs.core.chunk_rest.call(null,seq__22540_22561__$1);
var G__22564 = c__4461__auto___22562;
var G__22565 = cljs.core.count.call(null,c__4461__auto___22562);
var G__22566 = (0);
seq__22540_22548 = G__22563;
chunk__22541_22549 = G__22564;
count__22542_22550 = G__22565;
i__22543_22551 = G__22566;
continue;
} else {
var map__22546_22567 = cljs.core.first.call(null,seq__22540_22561__$1);
var map__22546_22568__$1 = (((((!((map__22546_22567 == null))))?(((((map__22546_22567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22546_22567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22546_22567):map__22546_22567);
var binding_22569 = map__22546_22568__$1;
var init_22570 = cljs.core.get.call(null,map__22546_22568__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_22569)," = ",init_22570,";");


var G__22571 = cljs.core.next.call(null,seq__22540_22561__$1);
var G__22572 = null;
var G__22573 = (0);
var G__22574 = (0);
seq__22540_22548 = G__22571;
chunk__22541_22549 = G__22572;
count__22542_22550 = G__22573;
i__22543_22551 = G__22574;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__22577){
var map__22578 = p__22577;
var map__22578__$1 = (((((!((map__22578 == null))))?(((((map__22578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22578):map__22578);
var expr = map__22578__$1;
var f = cljs.core.get.call(null,map__22578__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__22578__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__22578__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4036__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4036__auto__){
var and__4036__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__4036__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4036__auto__ = protocol;
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = tag;
if(cljs.core.truth_(and__4036__auto____$1)){
var or__4047__auto__ = (function (){var and__4036__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4036__auto____$2){
var and__4036__auto____$3 = protocol;
if(cljs.core.truth_(and__4036__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4036__auto____$3;
}
} else {
return and__4036__auto____$2;
}
})();
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var and__4036__auto____$2 = (function (){var or__4047__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__4047__auto____$1){
return or__4047__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4036__auto____$2)){
var or__4047__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__4047__auto____$1){
return or__4047__auto____$1;
} else {
var and__4036__auto____$3 = (!(cljs.core.set_QMARK_.call(null,tag)));
if(and__4036__auto____$3){
var and__4036__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null).call(null,tag));
if(and__4036__auto____$4){
var temp__5735__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__5735__auto__)){
var ps = temp__5735__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__4036__auto____$4;
}
} else {
return and__4036__auto____$3;
}
}
} else {
return and__4036__auto____$2;
}
}
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})();
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = ((cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null))));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4047__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4047__auto__){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = (function (){var temp__5735__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5735__auto__)){
var ns_str = temp__5735__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4047__auto__ = cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f));
if(or__4047__auto__){
return or__4047__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote.call(null,f);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__22580 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
return (arity > mfa);
} else {
return and__4036__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22578,map__22578__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22578,map__22578__$1,expr,f,args,env){
return (function (p1__22575_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__22575_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22578,map__22578__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22578,map__22578__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22578,map__22578__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22578,map__22578__$1,expr,f,args,env){
return (function (p1__22576_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__22576_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22578,map__22578__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22578,map__22578__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__22580,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__22580,(1),null);
var env__20566__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_22583 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_22583,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_22584 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_22584,args)),(((mfa_22584 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_22584,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = js_QMARK_;
if(or__4047__auto____$1){
return or__4047__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4036__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1));
} else {
return and__4036__auto__;
}
})())){
var fprop_22585 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_22585," ? ",f__$1,fprop_22585,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_22585," ? ",f__$1,fprop_22585,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__22586){
var map__22587 = p__22586;
var map__22587__$1 = (((((!((map__22587 == null))))?(((((map__22587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22587):map__22587);
var ctor = cljs.core.get.call(null,map__22587__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__22587__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__22587__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20566__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__22589){
var map__22590 = p__22589;
var map__22590__$1 = (((((!((map__22590 == null))))?(((((map__22590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22590):map__22590);
var target = cljs.core.get.call(null,map__22590__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__22590__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__22590__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20566__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib)," = goog.global",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.call(null,cljs.core.name.call(null,(function (){var or__4047__auto__ = cljs.core.get.call(null,global_exports,cljs.core.symbol.call(null,lib));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,global_exports,cljs.core.name.call(null,lib));
}
})()),/\./))),";");
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__22592 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__22592__$1 = (((((!((map__22592 == null))))?(((((map__22592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22592):map__22592);
var options = cljs.core.get.call(null,map__22592__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__22592__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__22593 = options;
var map__22593__$1 = (((((!((map__22593 == null))))?(((((map__22593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22593):map__22593);
var target = cljs.core.get.call(null,map__22593__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__22593__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__22594 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__22599 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__22599__$1 = (((((!((map__22599 == null))))?(((((map__22599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22599):map__22599);
var node_libs = cljs.core.get.call(null,map__22599__$1,true);
var libs_to_load = cljs.core.get.call(null,map__22599__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__22594,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__22594,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__22601_22617 = cljs.core.seq.call(null,libs_to_load);
var chunk__22602_22618 = null;
var count__22603_22619 = (0);
var i__22604_22620 = (0);
while(true){
if((i__22604_22620 < count__22603_22619)){
var lib_22621 = cljs.core._nth.call(null,chunk__22602_22618,i__22604_22620);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_22621)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_22621),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_22621),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_22621),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_22621),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_22621,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_22621),"');");
}

}
}
}


var G__22622 = seq__22601_22617;
var G__22623 = chunk__22602_22618;
var G__22624 = count__22603_22619;
var G__22625 = (i__22604_22620 + (1));
seq__22601_22617 = G__22622;
chunk__22602_22618 = G__22623;
count__22603_22619 = G__22624;
i__22604_22620 = G__22625;
continue;
} else {
var temp__5735__auto___22626 = cljs.core.seq.call(null,seq__22601_22617);
if(temp__5735__auto___22626){
var seq__22601_22627__$1 = temp__5735__auto___22626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22601_22627__$1)){
var c__4461__auto___22628 = cljs.core.chunk_first.call(null,seq__22601_22627__$1);
var G__22629 = cljs.core.chunk_rest.call(null,seq__22601_22627__$1);
var G__22630 = c__4461__auto___22628;
var G__22631 = cljs.core.count.call(null,c__4461__auto___22628);
var G__22632 = (0);
seq__22601_22617 = G__22629;
chunk__22602_22618 = G__22630;
count__22603_22619 = G__22631;
i__22604_22620 = G__22632;
continue;
} else {
var lib_22633 = cljs.core.first.call(null,seq__22601_22627__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_22633)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_22633),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_22633),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_22633),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_22633),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_22633,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_22633),"');");
}

}
}
}


var G__22634 = cljs.core.next.call(null,seq__22601_22627__$1);
var G__22635 = null;
var G__22636 = (0);
var G__22637 = (0);
seq__22601_22617 = G__22634;
chunk__22602_22618 = G__22635;
count__22603_22619 = G__22636;
i__22604_22620 = G__22637;
continue;
}
} else {
}
}
break;
}

var seq__22605_22638 = cljs.core.seq.call(null,node_libs);
var chunk__22606_22639 = null;
var count__22607_22640 = (0);
var i__22608_22641 = (0);
while(true){
if((i__22608_22641 < count__22607_22640)){
var lib_22642 = cljs.core._nth.call(null,chunk__22606_22639,i__22608_22641);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_22642)," = require('",lib_22642,"');");


var G__22643 = seq__22605_22638;
var G__22644 = chunk__22606_22639;
var G__22645 = count__22607_22640;
var G__22646 = (i__22608_22641 + (1));
seq__22605_22638 = G__22643;
chunk__22606_22639 = G__22644;
count__22607_22640 = G__22645;
i__22608_22641 = G__22646;
continue;
} else {
var temp__5735__auto___22647 = cljs.core.seq.call(null,seq__22605_22638);
if(temp__5735__auto___22647){
var seq__22605_22648__$1 = temp__5735__auto___22647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22605_22648__$1)){
var c__4461__auto___22649 = cljs.core.chunk_first.call(null,seq__22605_22648__$1);
var G__22650 = cljs.core.chunk_rest.call(null,seq__22605_22648__$1);
var G__22651 = c__4461__auto___22649;
var G__22652 = cljs.core.count.call(null,c__4461__auto___22649);
var G__22653 = (0);
seq__22605_22638 = G__22650;
chunk__22606_22639 = G__22651;
count__22607_22640 = G__22652;
i__22608_22641 = G__22653;
continue;
} else {
var lib_22654 = cljs.core.first.call(null,seq__22605_22648__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_22654)," = require('",lib_22654,"');");


var G__22655 = cljs.core.next.call(null,seq__22605_22648__$1);
var G__22656 = null;
var G__22657 = (0);
var G__22658 = (0);
seq__22605_22638 = G__22655;
chunk__22606_22639 = G__22656;
count__22607_22640 = G__22657;
i__22608_22641 = G__22658;
continue;
}
} else {
}
}
break;
}

var seq__22609_22659 = cljs.core.seq.call(null,global_exports_libs);
var chunk__22610_22660 = null;
var count__22611_22661 = (0);
var i__22612_22662 = (0);
while(true){
if((i__22612_22662 < count__22611_22661)){
var lib_22663 = cljs.core._nth.call(null,chunk__22610_22660,i__22612_22662);
var map__22613_22664 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_22663));
var map__22613_22665__$1 = (((((!((map__22613_22664 == null))))?(((((map__22613_22664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22613_22664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22613_22664):map__22613_22664);
var global_exports_22666 = cljs.core.get.call(null,map__22613_22665__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_22666,lib_22663);


var G__22667 = seq__22609_22659;
var G__22668 = chunk__22610_22660;
var G__22669 = count__22611_22661;
var G__22670 = (i__22612_22662 + (1));
seq__22609_22659 = G__22667;
chunk__22610_22660 = G__22668;
count__22611_22661 = G__22669;
i__22612_22662 = G__22670;
continue;
} else {
var temp__5735__auto___22671 = cljs.core.seq.call(null,seq__22609_22659);
if(temp__5735__auto___22671){
var seq__22609_22672__$1 = temp__5735__auto___22671;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22609_22672__$1)){
var c__4461__auto___22673 = cljs.core.chunk_first.call(null,seq__22609_22672__$1);
var G__22674 = cljs.core.chunk_rest.call(null,seq__22609_22672__$1);
var G__22675 = c__4461__auto___22673;
var G__22676 = cljs.core.count.call(null,c__4461__auto___22673);
var G__22677 = (0);
seq__22609_22659 = G__22674;
chunk__22610_22660 = G__22675;
count__22611_22661 = G__22676;
i__22612_22662 = G__22677;
continue;
} else {
var lib_22678 = cljs.core.first.call(null,seq__22609_22672__$1);
var map__22615_22679 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_22678));
var map__22615_22680__$1 = (((((!((map__22615_22679 == null))))?(((((map__22615_22679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22615_22679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22615_22679):map__22615_22679);
var global_exports_22681 = cljs.core.get.call(null,map__22615_22680__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_22681,lib_22678);


var G__22682 = cljs.core.next.call(null,seq__22609_22672__$1);
var G__22683 = null;
var G__22684 = (0);
var G__22685 = (0);
seq__22609_22659 = G__22682;
chunk__22610_22660 = G__22683;
count__22611_22661 = G__22684;
i__22612_22662 = G__22685;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__22686){
var map__22687 = p__22686;
var map__22687__$1 = (((((!((map__22687 == null))))?(((((map__22687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22687):map__22687);
var name = cljs.core.get.call(null,map__22687__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__22687__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__22687__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__22687__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__22687__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__22687__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__22687__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__22689){
var map__22690 = p__22689;
var map__22690__$1 = (((((!((map__22690 == null))))?(((((map__22690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22690):map__22690);
var name = cljs.core.get.call(null,map__22690__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__22690__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__22690__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__22690__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__22690__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__22690__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__22690__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__22692){
var map__22693 = p__22692;
var map__22693__$1 = (((((!((map__22693 == null))))?(((((map__22693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22693):map__22693);
var t = cljs.core.get.call(null,map__22693__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__22693__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__22693__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__22693__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__22693__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__22695_22713 = cljs.core.seq.call(null,protocols);
var chunk__22696_22714 = null;
var count__22697_22715 = (0);
var i__22698_22716 = (0);
while(true){
if((i__22698_22716 < count__22697_22715)){
var protocol_22717 = cljs.core._nth.call(null,chunk__22696_22714,i__22698_22716);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22717)),"}");


var G__22718 = seq__22695_22713;
var G__22719 = chunk__22696_22714;
var G__22720 = count__22697_22715;
var G__22721 = (i__22698_22716 + (1));
seq__22695_22713 = G__22718;
chunk__22696_22714 = G__22719;
count__22697_22715 = G__22720;
i__22698_22716 = G__22721;
continue;
} else {
var temp__5735__auto___22722 = cljs.core.seq.call(null,seq__22695_22713);
if(temp__5735__auto___22722){
var seq__22695_22723__$1 = temp__5735__auto___22722;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22695_22723__$1)){
var c__4461__auto___22724 = cljs.core.chunk_first.call(null,seq__22695_22723__$1);
var G__22725 = cljs.core.chunk_rest.call(null,seq__22695_22723__$1);
var G__22726 = c__4461__auto___22724;
var G__22727 = cljs.core.count.call(null,c__4461__auto___22724);
var G__22728 = (0);
seq__22695_22713 = G__22725;
chunk__22696_22714 = G__22726;
count__22697_22715 = G__22727;
i__22698_22716 = G__22728;
continue;
} else {
var protocol_22729 = cljs.core.first.call(null,seq__22695_22723__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22729)),"}");


var G__22730 = cljs.core.next.call(null,seq__22695_22723__$1);
var G__22731 = null;
var G__22732 = (0);
var G__22733 = (0);
seq__22695_22713 = G__22730;
chunk__22696_22714 = G__22731;
count__22697_22715 = G__22732;
i__22698_22716 = G__22733;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__22699_22734 = cljs.core.seq.call(null,fields__$1);
var chunk__22700_22735 = null;
var count__22701_22736 = (0);
var i__22702_22737 = (0);
while(true){
if((i__22702_22737 < count__22701_22736)){
var fld_22738 = cljs.core._nth.call(null,chunk__22700_22735,i__22702_22737);
cljs.compiler.emitln.call(null,"this.",fld_22738," = ",fld_22738,";");


var G__22739 = seq__22699_22734;
var G__22740 = chunk__22700_22735;
var G__22741 = count__22701_22736;
var G__22742 = (i__22702_22737 + (1));
seq__22699_22734 = G__22739;
chunk__22700_22735 = G__22740;
count__22701_22736 = G__22741;
i__22702_22737 = G__22742;
continue;
} else {
var temp__5735__auto___22743 = cljs.core.seq.call(null,seq__22699_22734);
if(temp__5735__auto___22743){
var seq__22699_22744__$1 = temp__5735__auto___22743;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22699_22744__$1)){
var c__4461__auto___22745 = cljs.core.chunk_first.call(null,seq__22699_22744__$1);
var G__22746 = cljs.core.chunk_rest.call(null,seq__22699_22744__$1);
var G__22747 = c__4461__auto___22745;
var G__22748 = cljs.core.count.call(null,c__4461__auto___22745);
var G__22749 = (0);
seq__22699_22734 = G__22746;
chunk__22700_22735 = G__22747;
count__22701_22736 = G__22748;
i__22702_22737 = G__22749;
continue;
} else {
var fld_22750 = cljs.core.first.call(null,seq__22699_22744__$1);
cljs.compiler.emitln.call(null,"this.",fld_22750," = ",fld_22750,";");


var G__22751 = cljs.core.next.call(null,seq__22699_22744__$1);
var G__22752 = null;
var G__22753 = (0);
var G__22754 = (0);
seq__22699_22734 = G__22751;
chunk__22700_22735 = G__22752;
count__22701_22736 = G__22753;
i__22702_22737 = G__22754;
continue;
}
} else {
}
}
break;
}

var seq__22703_22755 = cljs.core.seq.call(null,pmasks);
var chunk__22704_22756 = null;
var count__22705_22757 = (0);
var i__22706_22758 = (0);
while(true){
if((i__22706_22758 < count__22705_22757)){
var vec__22707_22759 = cljs.core._nth.call(null,chunk__22704_22756,i__22706_22758);
var pno_22760 = cljs.core.nth.call(null,vec__22707_22759,(0),null);
var pmask_22761 = cljs.core.nth.call(null,vec__22707_22759,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_22760,"$ = ",pmask_22761,";");


var G__22762 = seq__22703_22755;
var G__22763 = chunk__22704_22756;
var G__22764 = count__22705_22757;
var G__22765 = (i__22706_22758 + (1));
seq__22703_22755 = G__22762;
chunk__22704_22756 = G__22763;
count__22705_22757 = G__22764;
i__22706_22758 = G__22765;
continue;
} else {
var temp__5735__auto___22766 = cljs.core.seq.call(null,seq__22703_22755);
if(temp__5735__auto___22766){
var seq__22703_22767__$1 = temp__5735__auto___22766;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22703_22767__$1)){
var c__4461__auto___22768 = cljs.core.chunk_first.call(null,seq__22703_22767__$1);
var G__22769 = cljs.core.chunk_rest.call(null,seq__22703_22767__$1);
var G__22770 = c__4461__auto___22768;
var G__22771 = cljs.core.count.call(null,c__4461__auto___22768);
var G__22772 = (0);
seq__22703_22755 = G__22769;
chunk__22704_22756 = G__22770;
count__22705_22757 = G__22771;
i__22706_22758 = G__22772;
continue;
} else {
var vec__22710_22773 = cljs.core.first.call(null,seq__22703_22767__$1);
var pno_22774 = cljs.core.nth.call(null,vec__22710_22773,(0),null);
var pmask_22775 = cljs.core.nth.call(null,vec__22710_22773,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_22774,"$ = ",pmask_22775,";");


var G__22776 = cljs.core.next.call(null,seq__22703_22767__$1);
var G__22777 = null;
var G__22778 = (0);
var G__22779 = (0);
seq__22703_22755 = G__22776;
chunk__22704_22756 = G__22777;
count__22705_22757 = G__22778;
i__22706_22758 = G__22779;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__22780){
var map__22781 = p__22780;
var map__22781__$1 = (((((!((map__22781 == null))))?(((((map__22781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22781):map__22781);
var t = cljs.core.get.call(null,map__22781__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__22781__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__22781__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__22781__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__22781__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__22783_22801 = cljs.core.seq.call(null,protocols);
var chunk__22784_22802 = null;
var count__22785_22803 = (0);
var i__22786_22804 = (0);
while(true){
if((i__22786_22804 < count__22785_22803)){
var protocol_22805 = cljs.core._nth.call(null,chunk__22784_22802,i__22786_22804);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22805)),"}");


var G__22806 = seq__22783_22801;
var G__22807 = chunk__22784_22802;
var G__22808 = count__22785_22803;
var G__22809 = (i__22786_22804 + (1));
seq__22783_22801 = G__22806;
chunk__22784_22802 = G__22807;
count__22785_22803 = G__22808;
i__22786_22804 = G__22809;
continue;
} else {
var temp__5735__auto___22810 = cljs.core.seq.call(null,seq__22783_22801);
if(temp__5735__auto___22810){
var seq__22783_22811__$1 = temp__5735__auto___22810;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22783_22811__$1)){
var c__4461__auto___22812 = cljs.core.chunk_first.call(null,seq__22783_22811__$1);
var G__22813 = cljs.core.chunk_rest.call(null,seq__22783_22811__$1);
var G__22814 = c__4461__auto___22812;
var G__22815 = cljs.core.count.call(null,c__4461__auto___22812);
var G__22816 = (0);
seq__22783_22801 = G__22813;
chunk__22784_22802 = G__22814;
count__22785_22803 = G__22815;
i__22786_22804 = G__22816;
continue;
} else {
var protocol_22817 = cljs.core.first.call(null,seq__22783_22811__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22817)),"}");


var G__22818 = cljs.core.next.call(null,seq__22783_22811__$1);
var G__22819 = null;
var G__22820 = (0);
var G__22821 = (0);
seq__22783_22801 = G__22818;
chunk__22784_22802 = G__22819;
count__22785_22803 = G__22820;
i__22786_22804 = G__22821;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__22787_22822 = cljs.core.seq.call(null,fields__$1);
var chunk__22788_22823 = null;
var count__22789_22824 = (0);
var i__22790_22825 = (0);
while(true){
if((i__22790_22825 < count__22789_22824)){
var fld_22826 = cljs.core._nth.call(null,chunk__22788_22823,i__22790_22825);
cljs.compiler.emitln.call(null,"this.",fld_22826," = ",fld_22826,";");


var G__22827 = seq__22787_22822;
var G__22828 = chunk__22788_22823;
var G__22829 = count__22789_22824;
var G__22830 = (i__22790_22825 + (1));
seq__22787_22822 = G__22827;
chunk__22788_22823 = G__22828;
count__22789_22824 = G__22829;
i__22790_22825 = G__22830;
continue;
} else {
var temp__5735__auto___22831 = cljs.core.seq.call(null,seq__22787_22822);
if(temp__5735__auto___22831){
var seq__22787_22832__$1 = temp__5735__auto___22831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22787_22832__$1)){
var c__4461__auto___22833 = cljs.core.chunk_first.call(null,seq__22787_22832__$1);
var G__22834 = cljs.core.chunk_rest.call(null,seq__22787_22832__$1);
var G__22835 = c__4461__auto___22833;
var G__22836 = cljs.core.count.call(null,c__4461__auto___22833);
var G__22837 = (0);
seq__22787_22822 = G__22834;
chunk__22788_22823 = G__22835;
count__22789_22824 = G__22836;
i__22790_22825 = G__22837;
continue;
} else {
var fld_22838 = cljs.core.first.call(null,seq__22787_22832__$1);
cljs.compiler.emitln.call(null,"this.",fld_22838," = ",fld_22838,";");


var G__22839 = cljs.core.next.call(null,seq__22787_22832__$1);
var G__22840 = null;
var G__22841 = (0);
var G__22842 = (0);
seq__22787_22822 = G__22839;
chunk__22788_22823 = G__22840;
count__22789_22824 = G__22841;
i__22790_22825 = G__22842;
continue;
}
} else {
}
}
break;
}

var seq__22791_22843 = cljs.core.seq.call(null,pmasks);
var chunk__22792_22844 = null;
var count__22793_22845 = (0);
var i__22794_22846 = (0);
while(true){
if((i__22794_22846 < count__22793_22845)){
var vec__22795_22847 = cljs.core._nth.call(null,chunk__22792_22844,i__22794_22846);
var pno_22848 = cljs.core.nth.call(null,vec__22795_22847,(0),null);
var pmask_22849 = cljs.core.nth.call(null,vec__22795_22847,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_22848,"$ = ",pmask_22849,";");


var G__22850 = seq__22791_22843;
var G__22851 = chunk__22792_22844;
var G__22852 = count__22793_22845;
var G__22853 = (i__22794_22846 + (1));
seq__22791_22843 = G__22850;
chunk__22792_22844 = G__22851;
count__22793_22845 = G__22852;
i__22794_22846 = G__22853;
continue;
} else {
var temp__5735__auto___22854 = cljs.core.seq.call(null,seq__22791_22843);
if(temp__5735__auto___22854){
var seq__22791_22855__$1 = temp__5735__auto___22854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22791_22855__$1)){
var c__4461__auto___22856 = cljs.core.chunk_first.call(null,seq__22791_22855__$1);
var G__22857 = cljs.core.chunk_rest.call(null,seq__22791_22855__$1);
var G__22858 = c__4461__auto___22856;
var G__22859 = cljs.core.count.call(null,c__4461__auto___22856);
var G__22860 = (0);
seq__22791_22843 = G__22857;
chunk__22792_22844 = G__22858;
count__22793_22845 = G__22859;
i__22794_22846 = G__22860;
continue;
} else {
var vec__22798_22861 = cljs.core.first.call(null,seq__22791_22855__$1);
var pno_22862 = cljs.core.nth.call(null,vec__22798_22861,(0),null);
var pmask_22863 = cljs.core.nth.call(null,vec__22798_22861,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_22862,"$ = ",pmask_22863,";");


var G__22864 = cljs.core.next.call(null,seq__22791_22855__$1);
var G__22865 = null;
var G__22866 = (0);
var G__22867 = (0);
seq__22791_22843 = G__22864;
chunk__22792_22844 = G__22865;
count__22793_22845 = G__22866;
i__22794_22846 = G__22867;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__22868){
var map__22869 = p__22868;
var map__22869__$1 = (((((!((map__22869 == null))))?(((((map__22869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22869):map__22869);
var target = cljs.core.get.call(null,map__22869__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__22869__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__22869__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__22869__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__22869__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20566__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__22871){
var map__22872 = p__22871;
var map__22872__$1 = (((((!((map__22872 == null))))?(((((map__22872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22872):map__22872);
var op = cljs.core.get.call(null,map__22872__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__22872__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__22872__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__22872__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__22872__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4036__auto__ = code;
if(cljs.core.truth_(and__4036__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4036__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__20566__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20566__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__22878 = cljs.core.seq.call(null,table);
var chunk__22879 = null;
var count__22880 = (0);
var i__22881 = (0);
while(true){
if((i__22881 < count__22880)){
var vec__22882 = cljs.core._nth.call(null,chunk__22879,i__22881);
var sym = cljs.core.nth.call(null,vec__22882,(0),null);
var value = cljs.core.nth.call(null,vec__22882,(1),null);
var ns_22888 = cljs.core.namespace.call(null,sym);
var name_22889 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__22890 = seq__22878;
var G__22891 = chunk__22879;
var G__22892 = count__22880;
var G__22893 = (i__22881 + (1));
seq__22878 = G__22890;
chunk__22879 = G__22891;
count__22880 = G__22892;
i__22881 = G__22893;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__22878);
if(temp__5735__auto__){
var seq__22878__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22878__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__22878__$1);
var G__22894 = cljs.core.chunk_rest.call(null,seq__22878__$1);
var G__22895 = c__4461__auto__;
var G__22896 = cljs.core.count.call(null,c__4461__auto__);
var G__22897 = (0);
seq__22878 = G__22894;
chunk__22879 = G__22895;
count__22880 = G__22896;
i__22881 = G__22897;
continue;
} else {
var vec__22885 = cljs.core.first.call(null,seq__22878__$1);
var sym = cljs.core.nth.call(null,vec__22885,(0),null);
var value = cljs.core.nth.call(null,vec__22885,(1),null);
var ns_22898 = cljs.core.namespace.call(null,sym);
var name_22899 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__22900 = cljs.core.next.call(null,seq__22878__$1);
var G__22901 = null;
var G__22902 = (0);
var G__22903 = (0);
seq__22878 = G__22900;
chunk__22879 = G__22901;
count__22880 = G__22902;
i__22881 = G__22903;
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
var G__22905 = arguments.length;
switch (G__22905) {
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

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_22910 = cljs.core.first.call(null,ks);
var vec__22906_22911 = cljs.core.conj.call(null,prefix,k_22910);
var top_22912 = cljs.core.nth.call(null,vec__22906_22911,(0),null);
var prefix_SINGLEQUOTE__22913 = vec__22906_22911;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_22910)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__22913) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_22912)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_22912)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__22913)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_22912);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__22913)),";");
}
} else {
}

var m_22914 = cljs.core.get.call(null,externs,k_22910);
if(cljs.core.empty_QMARK_.call(null,m_22914)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__22913,m_22914,top_level,known_externs);
}

var G__22915 = cljs.core.next.call(null,ks);
ks = G__22915;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
