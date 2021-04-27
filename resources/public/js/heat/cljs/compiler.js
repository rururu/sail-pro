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
var map__21171 = s;
var map__21171__$1 = (((((!((map__21171 == null))))?(((((map__21171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21171):map__21171);
var name = cljs.core.get.call(null,map__21171__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__21171__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__21174 = info;
var map__21175 = G__21174;
var map__21175__$1 = (((((!((map__21175 == null))))?(((((map__21175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21175):map__21175);
var shadow = cljs.core.get.call(null,map__21175__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__21174__$1 = G__21174;
while(true){
var d__$2 = d__$1;
var map__21177 = G__21174__$1;
var map__21177__$1 = (((((!((map__21177 == null))))?(((((map__21177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21177):map__21177);
var shadow__$1 = cljs.core.get.call(null,map__21177__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__21179 = (d__$2 + (1));
var G__21180 = shadow__$1;
d__$1 = G__21179;
G__21174__$1 = G__21180;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__21181){
var map__21182 = p__21181;
var map__21182__$1 = (((((!((map__21182 == null))))?(((((map__21182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21182):map__21182);
var name_var = map__21182__$1;
var name = cljs.core.get.call(null,map__21182__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__21182__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__21184 = info;
var map__21184__$1 = (((((!((map__21184 == null))))?(((((map__21184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21184):map__21184);
var ns = cljs.core.get.call(null,map__21184__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__21184__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__21187 = arguments.length;
switch (G__21187) {
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
var G__21189 = cp;
switch (G__21189) {
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
var seq__21191_21195 = cljs.core.seq.call(null,s);
var chunk__21192_21196 = null;
var count__21193_21197 = (0);
var i__21194_21198 = (0);
while(true){
if((i__21194_21198 < count__21193_21197)){
var c_21199 = cljs.core._nth.call(null,chunk__21192_21196,i__21194_21198);
sb.append(cljs.compiler.escape_char.call(null,c_21199));


var G__21200 = seq__21191_21195;
var G__21201 = chunk__21192_21196;
var G__21202 = count__21193_21197;
var G__21203 = (i__21194_21198 + (1));
seq__21191_21195 = G__21200;
chunk__21192_21196 = G__21201;
count__21193_21197 = G__21202;
i__21194_21198 = G__21203;
continue;
} else {
var temp__5735__auto___21204 = cljs.core.seq.call(null,seq__21191_21195);
if(temp__5735__auto___21204){
var seq__21191_21205__$1 = temp__5735__auto___21204;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21191_21205__$1)){
var c__4461__auto___21206 = cljs.core.chunk_first.call(null,seq__21191_21205__$1);
var G__21207 = cljs.core.chunk_rest.call(null,seq__21191_21205__$1);
var G__21208 = c__4461__auto___21206;
var G__21209 = cljs.core.count.call(null,c__4461__auto___21206);
var G__21210 = (0);
seq__21191_21195 = G__21207;
chunk__21192_21196 = G__21208;
count__21193_21197 = G__21209;
i__21194_21198 = G__21210;
continue;
} else {
var c_21211 = cljs.core.first.call(null,seq__21191_21205__$1);
sb.append(cljs.compiler.escape_char.call(null,c_21211));


var G__21212 = cljs.core.next.call(null,seq__21191_21205__$1);
var G__21213 = null;
var G__21214 = (0);
var G__21215 = (0);
seq__21191_21195 = G__21212;
chunk__21192_21196 = G__21213;
count__21193_21197 = G__21214;
i__21194_21198 = G__21215;
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
var map__21216_21221 = ast;
var map__21216_21222__$1 = (((((!((map__21216_21221 == null))))?(((((map__21216_21221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21216_21221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21216_21221):map__21216_21221);
var env_21223 = cljs.core.get.call(null,map__21216_21222__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_21223))){
var map__21218_21224 = env_21223;
var map__21218_21225__$1 = (((((!((map__21218_21224 == null))))?(((((map__21218_21224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21218_21224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21218_21224):map__21218_21224);
var line_21226 = cljs.core.get.call(null,map__21218_21225__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21227 = cljs.core.get.call(null,map__21218_21225__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__21218_21224,map__21218_21225__$1,line_21226,column_21227,map__21216_21221,map__21216_21222__$1,env_21223){
return (function (m){
var minfo = (function (){var G__21220 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__21220,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__21220;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_21226 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__21218_21224,map__21218_21225__$1,line_21226,column_21227,map__21216_21221,map__21216_21222__$1,env_21223){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_21227)?(column_21227 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__21218_21224,map__21218_21225__$1,line_21226,column_21227,map__21216_21221,map__21216_21222__$1,env_21223){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__21218_21224,map__21218_21225__$1,line_21226,column_21227,map__21216_21221,map__21216_21222__$1,env_21223))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__21218_21224,map__21218_21225__$1,line_21226,column_21227,map__21216_21221,map__21216_21222__$1,env_21223))
,cljs.core.sorted_map.call(null)));
});})(map__21218_21224,map__21218_21225__$1,line_21226,column_21227,map__21216_21221,map__21216_21222__$1,env_21223))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__21236 = arguments.length;
switch (G__21236) {
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
var len__4641__auto___21243 = arguments.length;
var i__4642__auto___21244 = (0);
while(true){
if((i__4642__auto___21244 < len__4641__auto___21243)){
args_arr__4662__auto__.push((arguments[i__4642__auto___21244]));

var G__21245 = (i__4642__auto___21244 + (1));
i__4642__auto___21244 = G__21245;
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
var s_21246 = (function (){var G__21237 = a;
if((!(typeof a === 'string'))){
return G__21237.toString();
} else {
return G__21237;
}
})();
var temp__5739__auto___21247 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___21247 == null)){
} else {
var sm_data_21248 = temp__5739__auto___21247;
cljs.core.swap_BANG_.call(null,sm_data_21248,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_21248,temp__5739__auto___21247,s_21246){
return (function (p1__21228_SHARP_){
return (p1__21228_SHARP_ + s_21246.length);
});})(sm_data_21248,temp__5739__auto___21247,s_21246))
);
}

cljs.core.print.call(null,s_21246);

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

var seq__21238 = cljs.core.seq.call(null,xs);
var chunk__21239 = null;
var count__21240 = (0);
var i__21241 = (0);
while(true){
if((i__21241 < count__21240)){
var x = cljs.core._nth.call(null,chunk__21239,i__21241);
cljs.compiler.emits.call(null,x);


var G__21249 = seq__21238;
var G__21250 = chunk__21239;
var G__21251 = count__21240;
var G__21252 = (i__21241 + (1));
seq__21238 = G__21249;
chunk__21239 = G__21250;
count__21240 = G__21251;
i__21241 = G__21252;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__21238);
if(temp__5735__auto__){
var seq__21238__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21238__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__21238__$1);
var G__21253 = cljs.core.chunk_rest.call(null,seq__21238__$1);
var G__21254 = c__4461__auto__;
var G__21255 = cljs.core.count.call(null,c__4461__auto__);
var G__21256 = (0);
seq__21238 = G__21253;
chunk__21239 = G__21254;
count__21240 = G__21255;
i__21241 = G__21256;
continue;
} else {
var x = cljs.core.first.call(null,seq__21238__$1);
cljs.compiler.emits.call(null,x);


var G__21257 = cljs.core.next.call(null,seq__21238__$1);
var G__21258 = null;
var G__21259 = (0);
var G__21260 = (0);
seq__21238 = G__21257;
chunk__21239 = G__21258;
count__21240 = G__21259;
i__21241 = G__21260;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq21230){
var G__21231 = cljs.core.first.call(null,seq21230);
var seq21230__$1 = cljs.core.next.call(null,seq21230);
var G__21232 = cljs.core.first.call(null,seq21230__$1);
var seq21230__$2 = cljs.core.next.call(null,seq21230__$1);
var G__21233 = cljs.core.first.call(null,seq21230__$2);
var seq21230__$3 = cljs.core.next.call(null,seq21230__$2);
var G__21234 = cljs.core.first.call(null,seq21230__$3);
var seq21230__$4 = cljs.core.next.call(null,seq21230__$3);
var G__21235 = cljs.core.first.call(null,seq21230__$4);
var seq21230__$5 = cljs.core.next.call(null,seq21230__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21231,G__21232,G__21233,G__21234,G__21235,seq21230__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__21261){
var map__21262 = p__21261;
var map__21262__$1 = (((((!((map__21262 == null))))?(((((map__21262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21262):map__21262);
var m = map__21262__$1;
var gen_line = cljs.core.get.call(null,map__21262__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__21271 = arguments.length;
switch (G__21271) {
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
var len__4641__auto___21277 = arguments.length;
var i__4642__auto___21278 = (0);
while(true){
if((i__4642__auto___21278 < len__4641__auto___21277)){
args_arr__4662__auto__.push((arguments[i__4642__auto___21278]));

var G__21279 = (i__4642__auto___21278 + (1));
i__4642__auto___21278 = G__21279;
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

var seq__21272_21280 = cljs.core.seq.call(null,xs);
var chunk__21273_21281 = null;
var count__21274_21282 = (0);
var i__21275_21283 = (0);
while(true){
if((i__21275_21283 < count__21274_21282)){
var x_21284 = cljs.core._nth.call(null,chunk__21273_21281,i__21275_21283);
cljs.compiler.emits.call(null,x_21284);


var G__21285 = seq__21272_21280;
var G__21286 = chunk__21273_21281;
var G__21287 = count__21274_21282;
var G__21288 = (i__21275_21283 + (1));
seq__21272_21280 = G__21285;
chunk__21273_21281 = G__21286;
count__21274_21282 = G__21287;
i__21275_21283 = G__21288;
continue;
} else {
var temp__5735__auto___21289 = cljs.core.seq.call(null,seq__21272_21280);
if(temp__5735__auto___21289){
var seq__21272_21290__$1 = temp__5735__auto___21289;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21272_21290__$1)){
var c__4461__auto___21291 = cljs.core.chunk_first.call(null,seq__21272_21290__$1);
var G__21292 = cljs.core.chunk_rest.call(null,seq__21272_21290__$1);
var G__21293 = c__4461__auto___21291;
var G__21294 = cljs.core.count.call(null,c__4461__auto___21291);
var G__21295 = (0);
seq__21272_21280 = G__21292;
chunk__21273_21281 = G__21293;
count__21274_21282 = G__21294;
i__21275_21283 = G__21295;
continue;
} else {
var x_21296 = cljs.core.first.call(null,seq__21272_21290__$1);
cljs.compiler.emits.call(null,x_21296);


var G__21297 = cljs.core.next.call(null,seq__21272_21290__$1);
var G__21298 = null;
var G__21299 = (0);
var G__21300 = (0);
seq__21272_21280 = G__21297;
chunk__21273_21281 = G__21298;
count__21274_21282 = G__21299;
i__21275_21283 = G__21300;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq21265){
var G__21266 = cljs.core.first.call(null,seq21265);
var seq21265__$1 = cljs.core.next.call(null,seq21265);
var G__21267 = cljs.core.first.call(null,seq21265__$1);
var seq21265__$2 = cljs.core.next.call(null,seq21265__$1);
var G__21268 = cljs.core.first.call(null,seq21265__$2);
var seq21265__$3 = cljs.core.next.call(null,seq21265__$2);
var G__21269 = cljs.core.first.call(null,seq21265__$3);
var seq21265__$4 = cljs.core.next.call(null,seq21265__$3);
var G__21270 = cljs.core.first.call(null,seq21265__$4);
var seq21265__$5 = cljs.core.next.call(null,seq21265__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21266,G__21267,G__21268,G__21269,G__21270,seq21265__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21301_21305 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21302_21306 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21303_21307 = true;
var _STAR_print_fn_STAR__temp_val__21304_21308 = ((function (_STAR_print_newline_STAR__orig_val__21301_21305,_STAR_print_fn_STAR__orig_val__21302_21306,_STAR_print_newline_STAR__temp_val__21303_21307,sb__4572__auto__){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__21301_21305,_STAR_print_fn_STAR__orig_val__21302_21306,_STAR_print_newline_STAR__temp_val__21303_21307,sb__4572__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21303_21307;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21304_21308;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21302_21306;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21301_21305;
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
var vec__21309 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__21309,(0),null);
var name = cljs.core.nth.call(null,vec__21309,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__21309,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__21309,ns,name))
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
var vec__21312 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__21312,(0),null);
var flags = cljs.core.nth.call(null,vec__21312,(1),null);
var pattern = cljs.core.nth.call(null,vec__21312,(2),null);
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
return (function (p1__21315_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__21315_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__21317){
var map__21318 = p__21317;
var map__21318__$1 = (((((!((map__21318 == null))))?(((((map__21318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21318):map__21318);
var ast = map__21318__$1;
var info = cljs.core.get.call(null,map__21318__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__21318__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__21318__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__21320 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__21320__$1 = (((((!((map__21320 == null))))?(((((map__21320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21320):map__21320);
var cenv = map__21320__$1;
var options = cljs.core.get.call(null,map__21320__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__21322 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4036__auto__;
}
})())){
return clojure.set.difference.call(null,G__21322,cljs.analyzer.es5_allowed);
} else {
return G__21322;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4047__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__21323 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__21323,reserved);
} else {
return G__21323;
}
})();
var env__21163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__21324_21325 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__21324_21326__$1 = (((G__21324_21325 instanceof cljs.core.Keyword))?G__21324_21325.fqn:null);
switch (G__21324_21326__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__21328){
var map__21329 = p__21328;
var map__21329__$1 = (((((!((map__21329 == null))))?(((((map__21329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21329):map__21329);
var arg = map__21329__$1;
var env = cljs.core.get.call(null,map__21329__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__21329__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__21329__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__21329__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__21331 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__21331__$1 = (((((!((map__21331 == null))))?(((((map__21331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21331):map__21331);
var name = cljs.core.get.call(null,map__21331__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__21163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__21333){
var map__21334 = p__21333;
var map__21334__$1 = (((((!((map__21334 == null))))?(((((map__21334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21334):map__21334);
var expr = cljs.core.get.call(null,map__21334__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__21334__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__21334__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__21163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__21336_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__21336_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__21337){
var map__21338 = p__21337;
var map__21338__$1 = (((((!((map__21338 == null))))?(((((map__21338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21338):map__21338);
var env = cljs.core.get.call(null,map__21338__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__21338__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__21338__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__21163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__21340){
var map__21341 = p__21340;
var map__21341__$1 = (((((!((map__21341 == null))))?(((((map__21341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21341):map__21341);
var items = cljs.core.get.call(null,map__21341__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__21341__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__21163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__21343_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__21343_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__21344){
var map__21345 = p__21344;
var map__21345__$1 = (((((!((map__21345 == null))))?(((((map__21345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21345):map__21345);
var items = cljs.core.get.call(null,map__21345__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__21345__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__21163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5735__auto___21363 = cljs.core.seq.call(null,items);
if(temp__5735__auto___21363){
var items_21364__$1 = temp__5735__auto___21363;
var vec__21347_21365 = items_21364__$1;
var seq__21348_21366 = cljs.core.seq.call(null,vec__21347_21365);
var first__21349_21367 = cljs.core.first.call(null,seq__21348_21366);
var seq__21348_21368__$1 = cljs.core.next.call(null,seq__21348_21366);
var vec__21350_21369 = first__21349_21367;
var k_21370 = cljs.core.nth.call(null,vec__21350_21369,(0),null);
var v_21371 = cljs.core.nth.call(null,vec__21350_21369,(1),null);
var r_21372 = seq__21348_21368__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_21370),"\": ",emit_js_object_val.call(null,v_21371));

var seq__21353_21373 = cljs.core.seq.call(null,r_21372);
var chunk__21354_21374 = null;
var count__21355_21375 = (0);
var i__21356_21376 = (0);
while(true){
if((i__21356_21376 < count__21355_21375)){
var vec__21357_21377 = cljs.core._nth.call(null,chunk__21354_21374,i__21356_21376);
var k_21378__$1 = cljs.core.nth.call(null,vec__21357_21377,(0),null);
var v_21379__$1 = cljs.core.nth.call(null,vec__21357_21377,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_21378__$1),"\": ",emit_js_object_val.call(null,v_21379__$1));


var G__21380 = seq__21353_21373;
var G__21381 = chunk__21354_21374;
var G__21382 = count__21355_21375;
var G__21383 = (i__21356_21376 + (1));
seq__21353_21373 = G__21380;
chunk__21354_21374 = G__21381;
count__21355_21375 = G__21382;
i__21356_21376 = G__21383;
continue;
} else {
var temp__5735__auto___21384__$1 = cljs.core.seq.call(null,seq__21353_21373);
if(temp__5735__auto___21384__$1){
var seq__21353_21385__$1 = temp__5735__auto___21384__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21353_21385__$1)){
var c__4461__auto___21386 = cljs.core.chunk_first.call(null,seq__21353_21385__$1);
var G__21387 = cljs.core.chunk_rest.call(null,seq__21353_21385__$1);
var G__21388 = c__4461__auto___21386;
var G__21389 = cljs.core.count.call(null,c__4461__auto___21386);
var G__21390 = (0);
seq__21353_21373 = G__21387;
chunk__21354_21374 = G__21388;
count__21355_21375 = G__21389;
i__21356_21376 = G__21390;
continue;
} else {
var vec__21360_21391 = cljs.core.first.call(null,seq__21353_21385__$1);
var k_21392__$1 = cljs.core.nth.call(null,vec__21360_21391,(0),null);
var v_21393__$1 = cljs.core.nth.call(null,vec__21360_21391,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_21392__$1),"\": ",emit_js_object_val.call(null,v_21393__$1));


var G__21394 = cljs.core.next.call(null,seq__21353_21385__$1);
var G__21395 = null;
var G__21396 = (0);
var G__21397 = (0);
seq__21353_21373 = G__21394;
chunk__21354_21374 = G__21395;
count__21355_21375 = G__21396;
i__21356_21376 = G__21397;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__21398){
var map__21399 = p__21398;
var map__21399__$1 = (((((!((map__21399 == null))))?(((((map__21399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21399):map__21399);
var keys = cljs.core.get.call(null,map__21399__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__21399__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__21399__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__21163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__21401){
var map__21402 = p__21401;
var map__21402__$1 = (((((!((map__21402 == null))))?(((((map__21402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21402):map__21402);
var items = cljs.core.get.call(null,map__21402__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__21402__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__21163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__21404){
var map__21405 = p__21404;
var map__21405__$1 = (((((!((map__21405 == null))))?(((((map__21405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21405):map__21405);
var expr = cljs.core.get.call(null,map__21405__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__21407){
var map__21408 = p__21407;
var map__21408__$1 = (((((!((map__21408 == null))))?(((((map__21408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21408):map__21408);
var form = cljs.core.get.call(null,map__21408__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__21408__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__21163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__21410 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__21410__$1 = (((((!((map__21410 == null))))?(((((map__21410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21410):map__21410);
var op = cljs.core.get.call(null,map__21410__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__21410__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__21410__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__21412 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__21412__$1 = (((((!((map__21412 == null))))?(((((map__21412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21412):map__21412);
var op = cljs.core.get.call(null,map__21412__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__21412__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__21412__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__21414){
var map__21415 = p__21414;
var map__21415__$1 = (((((!((map__21415 == null))))?(((((map__21415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21415):map__21415);
var test = cljs.core.get.call(null,map__21415__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__21415__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__21415__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__21415__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__21415__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__21417){
var map__21418 = p__21417;
var map__21418__$1 = (((((!((map__21418 == null))))?(((((map__21418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21418):map__21418);
var v = cljs.core.get.call(null,map__21418__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__21418__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__21418__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__21418__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__21420_21440 = cljs.core.seq.call(null,nodes);
var chunk__21421_21441 = null;
var count__21422_21442 = (0);
var i__21423_21443 = (0);
while(true){
if((i__21423_21443 < count__21422_21442)){
var map__21424_21444 = cljs.core._nth.call(null,chunk__21421_21441,i__21423_21443);
var map__21424_21445__$1 = (((((!((map__21424_21444 == null))))?(((((map__21424_21444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21424_21444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21424_21444):map__21424_21444);
var ts_21446 = cljs.core.get.call(null,map__21424_21445__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__21425_21447 = cljs.core.get.call(null,map__21424_21445__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__21425_21448__$1 = (((((!((map__21425_21447 == null))))?(((((map__21425_21447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21425_21447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21425_21447):map__21425_21447);
var then_21449 = cljs.core.get.call(null,map__21425_21448__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__21428_21450 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_21446));
var chunk__21429_21451 = null;
var count__21430_21452 = (0);
var i__21431_21453 = (0);
while(true){
if((i__21431_21453 < count__21430_21452)){
var test_21454 = cljs.core._nth.call(null,chunk__21429_21451,i__21431_21453);
cljs.compiler.emitln.call(null,"case ",test_21454,":");


var G__21455 = seq__21428_21450;
var G__21456 = chunk__21429_21451;
var G__21457 = count__21430_21452;
var G__21458 = (i__21431_21453 + (1));
seq__21428_21450 = G__21455;
chunk__21429_21451 = G__21456;
count__21430_21452 = G__21457;
i__21431_21453 = G__21458;
continue;
} else {
var temp__5735__auto___21459 = cljs.core.seq.call(null,seq__21428_21450);
if(temp__5735__auto___21459){
var seq__21428_21460__$1 = temp__5735__auto___21459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21428_21460__$1)){
var c__4461__auto___21461 = cljs.core.chunk_first.call(null,seq__21428_21460__$1);
var G__21462 = cljs.core.chunk_rest.call(null,seq__21428_21460__$1);
var G__21463 = c__4461__auto___21461;
var G__21464 = cljs.core.count.call(null,c__4461__auto___21461);
var G__21465 = (0);
seq__21428_21450 = G__21462;
chunk__21429_21451 = G__21463;
count__21430_21452 = G__21464;
i__21431_21453 = G__21465;
continue;
} else {
var test_21466 = cljs.core.first.call(null,seq__21428_21460__$1);
cljs.compiler.emitln.call(null,"case ",test_21466,":");


var G__21467 = cljs.core.next.call(null,seq__21428_21460__$1);
var G__21468 = null;
var G__21469 = (0);
var G__21470 = (0);
seq__21428_21450 = G__21467;
chunk__21429_21451 = G__21468;
count__21430_21452 = G__21469;
i__21431_21453 = G__21470;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_21449);
} else {
cljs.compiler.emitln.call(null,then_21449);
}

cljs.compiler.emitln.call(null,"break;");


var G__21471 = seq__21420_21440;
var G__21472 = chunk__21421_21441;
var G__21473 = count__21422_21442;
var G__21474 = (i__21423_21443 + (1));
seq__21420_21440 = G__21471;
chunk__21421_21441 = G__21472;
count__21422_21442 = G__21473;
i__21423_21443 = G__21474;
continue;
} else {
var temp__5735__auto___21475 = cljs.core.seq.call(null,seq__21420_21440);
if(temp__5735__auto___21475){
var seq__21420_21476__$1 = temp__5735__auto___21475;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21420_21476__$1)){
var c__4461__auto___21477 = cljs.core.chunk_first.call(null,seq__21420_21476__$1);
var G__21478 = cljs.core.chunk_rest.call(null,seq__21420_21476__$1);
var G__21479 = c__4461__auto___21477;
var G__21480 = cljs.core.count.call(null,c__4461__auto___21477);
var G__21481 = (0);
seq__21420_21440 = G__21478;
chunk__21421_21441 = G__21479;
count__21422_21442 = G__21480;
i__21423_21443 = G__21481;
continue;
} else {
var map__21432_21482 = cljs.core.first.call(null,seq__21420_21476__$1);
var map__21432_21483__$1 = (((((!((map__21432_21482 == null))))?(((((map__21432_21482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21432_21482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21432_21482):map__21432_21482);
var ts_21484 = cljs.core.get.call(null,map__21432_21483__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__21433_21485 = cljs.core.get.call(null,map__21432_21483__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__21433_21486__$1 = (((((!((map__21433_21485 == null))))?(((((map__21433_21485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21433_21485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21433_21485):map__21433_21485);
var then_21487 = cljs.core.get.call(null,map__21433_21486__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__21436_21488 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_21484));
var chunk__21437_21489 = null;
var count__21438_21490 = (0);
var i__21439_21491 = (0);
while(true){
if((i__21439_21491 < count__21438_21490)){
var test_21492 = cljs.core._nth.call(null,chunk__21437_21489,i__21439_21491);
cljs.compiler.emitln.call(null,"case ",test_21492,":");


var G__21493 = seq__21436_21488;
var G__21494 = chunk__21437_21489;
var G__21495 = count__21438_21490;
var G__21496 = (i__21439_21491 + (1));
seq__21436_21488 = G__21493;
chunk__21437_21489 = G__21494;
count__21438_21490 = G__21495;
i__21439_21491 = G__21496;
continue;
} else {
var temp__5735__auto___21497__$1 = cljs.core.seq.call(null,seq__21436_21488);
if(temp__5735__auto___21497__$1){
var seq__21436_21498__$1 = temp__5735__auto___21497__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21436_21498__$1)){
var c__4461__auto___21499 = cljs.core.chunk_first.call(null,seq__21436_21498__$1);
var G__21500 = cljs.core.chunk_rest.call(null,seq__21436_21498__$1);
var G__21501 = c__4461__auto___21499;
var G__21502 = cljs.core.count.call(null,c__4461__auto___21499);
var G__21503 = (0);
seq__21436_21488 = G__21500;
chunk__21437_21489 = G__21501;
count__21438_21490 = G__21502;
i__21439_21491 = G__21503;
continue;
} else {
var test_21504 = cljs.core.first.call(null,seq__21436_21498__$1);
cljs.compiler.emitln.call(null,"case ",test_21504,":");


var G__21505 = cljs.core.next.call(null,seq__21436_21498__$1);
var G__21506 = null;
var G__21507 = (0);
var G__21508 = (0);
seq__21436_21488 = G__21505;
chunk__21437_21489 = G__21506;
count__21438_21490 = G__21507;
i__21439_21491 = G__21508;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_21487);
} else {
cljs.compiler.emitln.call(null,then_21487);
}

cljs.compiler.emitln.call(null,"break;");


var G__21509 = cljs.core.next.call(null,seq__21420_21476__$1);
var G__21510 = null;
var G__21511 = (0);
var G__21512 = (0);
seq__21420_21440 = G__21509;
chunk__21421_21441 = G__21510;
count__21422_21442 = G__21511;
i__21423_21443 = G__21512;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__21513){
var map__21514 = p__21513;
var map__21514__$1 = (((((!((map__21514 == null))))?(((((map__21514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21514):map__21514);
var throw$ = cljs.core.get.call(null,map__21514__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__21514__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__21517 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__21517,(0),null);
var rstr = cljs.core.nth.call(null,vec__21517,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__21517,fstr,rstr,ret_t,axstr){
return (function (p1__21516_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__21516_SHARP_);
});})(idx,vec__21517,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__21520 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21520),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__21520;
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
return (function (p1__21521_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__21521_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__21522 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__21523 = cljs.core.seq.call(null,vec__21522);
var first__21524 = cljs.core.first.call(null,seq__21523);
var seq__21523__$1 = cljs.core.next.call(null,seq__21523);
var p = first__21524;
var first__21524__$1 = cljs.core.first.call(null,seq__21523__$1);
var seq__21523__$2 = cljs.core.next.call(null,seq__21523__$1);
var ts = first__21524__$1;
var first__21524__$2 = cljs.core.first.call(null,seq__21523__$2);
var seq__21523__$3 = cljs.core.next.call(null,seq__21523__$2);
var n = first__21524__$2;
var xs = seq__21523__$3;
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
var vec__21525 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__21526 = cljs.core.seq.call(null,vec__21525);
var first__21527 = cljs.core.first.call(null,seq__21526);
var seq__21526__$1 = cljs.core.next.call(null,seq__21526);
var p = first__21527;
var first__21527__$1 = cljs.core.first.call(null,seq__21526__$1);
var seq__21526__$2 = cljs.core.next.call(null,seq__21526__$1);
var ts = first__21527__$1;
var xs = seq__21526__$2;
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
var G__21530 = arguments.length;
switch (G__21530) {
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
var vec__21538 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__21528_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__21528_SHARP_);
} else {
return p1__21528_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__21539 = cljs.core.seq.call(null,vec__21538);
var first__21540 = cljs.core.first.call(null,seq__21539);
var seq__21539__$1 = cljs.core.next.call(null,seq__21539);
var x = first__21540;
var ys = seq__21539__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__21541 = cljs.core.seq.call(null,ys);
var chunk__21542 = null;
var count__21543 = (0);
var i__21544 = (0);
while(true){
if((i__21544 < count__21543)){
var next_line = cljs.core._nth.call(null,chunk__21542,i__21544);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__21550 = seq__21541;
var G__21551 = chunk__21542;
var G__21552 = count__21543;
var G__21553 = (i__21544 + (1));
seq__21541 = G__21550;
chunk__21542 = G__21551;
count__21543 = G__21552;
i__21544 = G__21553;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__21541);
if(temp__5735__auto__){
var seq__21541__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21541__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__21541__$1);
var G__21554 = cljs.core.chunk_rest.call(null,seq__21541__$1);
var G__21555 = c__4461__auto__;
var G__21556 = cljs.core.count.call(null,c__4461__auto__);
var G__21557 = (0);
seq__21541 = G__21554;
chunk__21542 = G__21555;
count__21543 = G__21556;
i__21544 = G__21557;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__21541__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__21558 = cljs.core.next.call(null,seq__21541__$1);
var G__21559 = null;
var G__21560 = (0);
var G__21561 = (0);
seq__21541 = G__21558;
chunk__21542 = G__21559;
count__21543 = G__21560;
i__21544 = G__21561;
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

var seq__21545_21562 = cljs.core.seq.call(null,docs__$2);
var chunk__21546_21563 = null;
var count__21547_21564 = (0);
var i__21548_21565 = (0);
while(true){
if((i__21548_21565 < count__21547_21564)){
var e_21566 = cljs.core._nth.call(null,chunk__21546_21563,i__21548_21565);
if(cljs.core.truth_(e_21566)){
print_comment_lines.call(null,e_21566);
} else {
}


var G__21567 = seq__21545_21562;
var G__21568 = chunk__21546_21563;
var G__21569 = count__21547_21564;
var G__21570 = (i__21548_21565 + (1));
seq__21545_21562 = G__21567;
chunk__21546_21563 = G__21568;
count__21547_21564 = G__21569;
i__21548_21565 = G__21570;
continue;
} else {
var temp__5735__auto___21571 = cljs.core.seq.call(null,seq__21545_21562);
if(temp__5735__auto___21571){
var seq__21545_21572__$1 = temp__5735__auto___21571;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21545_21572__$1)){
var c__4461__auto___21573 = cljs.core.chunk_first.call(null,seq__21545_21572__$1);
var G__21574 = cljs.core.chunk_rest.call(null,seq__21545_21572__$1);
var G__21575 = c__4461__auto___21573;
var G__21576 = cljs.core.count.call(null,c__4461__auto___21573);
var G__21577 = (0);
seq__21545_21562 = G__21574;
chunk__21546_21563 = G__21575;
count__21547_21564 = G__21576;
i__21548_21565 = G__21577;
continue;
} else {
var e_21578 = cljs.core.first.call(null,seq__21545_21572__$1);
if(cljs.core.truth_(e_21578)){
print_comment_lines.call(null,e_21578);
} else {
}


var G__21579 = cljs.core.next.call(null,seq__21545_21572__$1);
var G__21580 = null;
var G__21581 = (0);
var G__21582 = (0);
seq__21545_21562 = G__21579;
chunk__21546_21563 = G__21580;
count__21547_21564 = G__21581;
i__21548_21565 = G__21582;
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
return (function (p1__21584_SHARP_){
return goog.string.startsWith(p1__21584_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__21585){
var map__21586 = p__21585;
var map__21586__$1 = (((((!((map__21586 == null))))?(((((map__21586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21586):map__21586);
var doc = cljs.core.get.call(null,map__21586__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__21586__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__21586__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__21586__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__21586__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__21586__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__21586__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__21586__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__21586__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__21588){
var map__21589 = p__21588;
var map__21589__$1 = (((((!((map__21589 == null))))?(((((map__21589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21589):map__21589);
var name = cljs.core.get.call(null,map__21589__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__21589__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__21589__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__21591_21609 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__21592_21610 = null;
var count__21593_21611 = (0);
var i__21594_21612 = (0);
while(true){
if((i__21594_21612 < count__21593_21611)){
var vec__21595_21613 = cljs.core._nth.call(null,chunk__21592_21610,i__21594_21612);
var i_21614 = cljs.core.nth.call(null,vec__21595_21613,(0),null);
var param_21615 = cljs.core.nth.call(null,vec__21595_21613,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_21615);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__21616 = seq__21591_21609;
var G__21617 = chunk__21592_21610;
var G__21618 = count__21593_21611;
var G__21619 = (i__21594_21612 + (1));
seq__21591_21609 = G__21616;
chunk__21592_21610 = G__21617;
count__21593_21611 = G__21618;
i__21594_21612 = G__21619;
continue;
} else {
var temp__5735__auto___21620 = cljs.core.seq.call(null,seq__21591_21609);
if(temp__5735__auto___21620){
var seq__21591_21621__$1 = temp__5735__auto___21620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21591_21621__$1)){
var c__4461__auto___21622 = cljs.core.chunk_first.call(null,seq__21591_21621__$1);
var G__21623 = cljs.core.chunk_rest.call(null,seq__21591_21621__$1);
var G__21624 = c__4461__auto___21622;
var G__21625 = cljs.core.count.call(null,c__4461__auto___21622);
var G__21626 = (0);
seq__21591_21609 = G__21623;
chunk__21592_21610 = G__21624;
count__21593_21611 = G__21625;
i__21594_21612 = G__21626;
continue;
} else {
var vec__21598_21627 = cljs.core.first.call(null,seq__21591_21621__$1);
var i_21628 = cljs.core.nth.call(null,vec__21598_21627,(0),null);
var param_21629 = cljs.core.nth.call(null,vec__21598_21627,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_21629);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__21630 = cljs.core.next.call(null,seq__21591_21621__$1);
var G__21631 = null;
var G__21632 = (0);
var G__21633 = (0);
seq__21591_21609 = G__21630;
chunk__21592_21610 = G__21631;
count__21593_21611 = G__21632;
i__21594_21612 = G__21633;
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

var seq__21601_21634 = cljs.core.seq.call(null,params);
var chunk__21602_21635 = null;
var count__21603_21636 = (0);
var i__21604_21637 = (0);
while(true){
if((i__21604_21637 < count__21603_21636)){
var param_21638 = cljs.core._nth.call(null,chunk__21602_21635,i__21604_21637);
cljs.compiler.emit.call(null,param_21638);

if(cljs.core._EQ_.call(null,param_21638,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__21639 = seq__21601_21634;
var G__21640 = chunk__21602_21635;
var G__21641 = count__21603_21636;
var G__21642 = (i__21604_21637 + (1));
seq__21601_21634 = G__21639;
chunk__21602_21635 = G__21640;
count__21603_21636 = G__21641;
i__21604_21637 = G__21642;
continue;
} else {
var temp__5735__auto___21643 = cljs.core.seq.call(null,seq__21601_21634);
if(temp__5735__auto___21643){
var seq__21601_21644__$1 = temp__5735__auto___21643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21601_21644__$1)){
var c__4461__auto___21645 = cljs.core.chunk_first.call(null,seq__21601_21644__$1);
var G__21646 = cljs.core.chunk_rest.call(null,seq__21601_21644__$1);
var G__21647 = c__4461__auto___21645;
var G__21648 = cljs.core.count.call(null,c__4461__auto___21645);
var G__21649 = (0);
seq__21601_21634 = G__21646;
chunk__21602_21635 = G__21647;
count__21603_21636 = G__21648;
i__21604_21637 = G__21649;
continue;
} else {
var param_21650 = cljs.core.first.call(null,seq__21601_21644__$1);
cljs.compiler.emit.call(null,param_21650);

if(cljs.core._EQ_.call(null,param_21650,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__21651 = cljs.core.next.call(null,seq__21601_21644__$1);
var G__21652 = null;
var G__21653 = (0);
var G__21654 = (0);
seq__21601_21634 = G__21651;
chunk__21602_21635 = G__21652;
count__21603_21636 = G__21653;
i__21604_21637 = G__21654;
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

var seq__21605_21655 = cljs.core.seq.call(null,params);
var chunk__21606_21656 = null;
var count__21607_21657 = (0);
var i__21608_21658 = (0);
while(true){
if((i__21608_21658 < count__21607_21657)){
var param_21659 = cljs.core._nth.call(null,chunk__21606_21656,i__21608_21658);
cljs.compiler.emit.call(null,param_21659);

if(cljs.core._EQ_.call(null,param_21659,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__21660 = seq__21605_21655;
var G__21661 = chunk__21606_21656;
var G__21662 = count__21607_21657;
var G__21663 = (i__21608_21658 + (1));
seq__21605_21655 = G__21660;
chunk__21606_21656 = G__21661;
count__21607_21657 = G__21662;
i__21608_21658 = G__21663;
continue;
} else {
var temp__5735__auto___21664 = cljs.core.seq.call(null,seq__21605_21655);
if(temp__5735__auto___21664){
var seq__21605_21665__$1 = temp__5735__auto___21664;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21605_21665__$1)){
var c__4461__auto___21666 = cljs.core.chunk_first.call(null,seq__21605_21665__$1);
var G__21667 = cljs.core.chunk_rest.call(null,seq__21605_21665__$1);
var G__21668 = c__4461__auto___21666;
var G__21669 = cljs.core.count.call(null,c__4461__auto___21666);
var G__21670 = (0);
seq__21605_21655 = G__21667;
chunk__21606_21656 = G__21668;
count__21607_21657 = G__21669;
i__21608_21658 = G__21670;
continue;
} else {
var param_21671 = cljs.core.first.call(null,seq__21605_21665__$1);
cljs.compiler.emit.call(null,param_21671);

if(cljs.core._EQ_.call(null,param_21671,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__21672 = cljs.core.next.call(null,seq__21605_21665__$1);
var G__21673 = null;
var G__21674 = (0);
var G__21675 = (0);
seq__21605_21655 = G__21672;
chunk__21606_21656 = G__21673;
count__21607_21657 = G__21674;
i__21608_21658 = G__21675;
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
var seq__21676 = cljs.core.seq.call(null,params);
var chunk__21677 = null;
var count__21678 = (0);
var i__21679 = (0);
while(true){
if((i__21679 < count__21678)){
var param = cljs.core._nth.call(null,chunk__21677,i__21679);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__21680 = seq__21676;
var G__21681 = chunk__21677;
var G__21682 = count__21678;
var G__21683 = (i__21679 + (1));
seq__21676 = G__21680;
chunk__21677 = G__21681;
count__21678 = G__21682;
i__21679 = G__21683;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__21676);
if(temp__5735__auto__){
var seq__21676__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21676__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__21676__$1);
var G__21684 = cljs.core.chunk_rest.call(null,seq__21676__$1);
var G__21685 = c__4461__auto__;
var G__21686 = cljs.core.count.call(null,c__4461__auto__);
var G__21687 = (0);
seq__21676 = G__21684;
chunk__21677 = G__21685;
count__21678 = G__21686;
i__21679 = G__21687;
continue;
} else {
var param = cljs.core.first.call(null,seq__21676__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__21688 = cljs.core.next.call(null,seq__21676__$1);
var G__21689 = null;
var G__21690 = (0);
var G__21691 = (0);
seq__21676 = G__21688;
chunk__21677 = G__21689;
count__21678 = G__21690;
i__21679 = G__21691;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__21692){
var map__21693 = p__21692;
var map__21693__$1 = (((((!((map__21693 == null))))?(((((map__21693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21693):map__21693);
var expr = cljs.core.get.call(null,map__21693__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__21693__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__21693__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__21693__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__21693__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__21693__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__21163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__21695){
var map__21696 = p__21695;
var map__21696__$1 = (((((!((map__21696 == null))))?(((((map__21696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21696):map__21696);
var f = map__21696__$1;
var expr = cljs.core.get.call(null,map__21696__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__21696__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__21696__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__21696__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__21696__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__21696__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__21696__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__21696__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__21163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_21706__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_21707 = cljs.compiler.munge.call(null,name_21706__$1);
var delegate_name_21708 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_21707),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_21708," = function (");

var seq__21698_21709 = cljs.core.seq.call(null,params);
var chunk__21699_21710 = null;
var count__21700_21711 = (0);
var i__21701_21712 = (0);
while(true){
if((i__21701_21712 < count__21700_21711)){
var param_21713 = cljs.core._nth.call(null,chunk__21699_21710,i__21701_21712);
cljs.compiler.emit.call(null,param_21713);

if(cljs.core._EQ_.call(null,param_21713,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__21714 = seq__21698_21709;
var G__21715 = chunk__21699_21710;
var G__21716 = count__21700_21711;
var G__21717 = (i__21701_21712 + (1));
seq__21698_21709 = G__21714;
chunk__21699_21710 = G__21715;
count__21700_21711 = G__21716;
i__21701_21712 = G__21717;
continue;
} else {
var temp__5735__auto___21718 = cljs.core.seq.call(null,seq__21698_21709);
if(temp__5735__auto___21718){
var seq__21698_21719__$1 = temp__5735__auto___21718;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21698_21719__$1)){
var c__4461__auto___21720 = cljs.core.chunk_first.call(null,seq__21698_21719__$1);
var G__21721 = cljs.core.chunk_rest.call(null,seq__21698_21719__$1);
var G__21722 = c__4461__auto___21720;
var G__21723 = cljs.core.count.call(null,c__4461__auto___21720);
var G__21724 = (0);
seq__21698_21709 = G__21721;
chunk__21699_21710 = G__21722;
count__21700_21711 = G__21723;
i__21701_21712 = G__21724;
continue;
} else {
var param_21725 = cljs.core.first.call(null,seq__21698_21719__$1);
cljs.compiler.emit.call(null,param_21725);

if(cljs.core._EQ_.call(null,param_21725,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__21726 = cljs.core.next.call(null,seq__21698_21719__$1);
var G__21727 = null;
var G__21728 = (0);
var G__21729 = (0);
seq__21698_21709 = G__21726;
chunk__21699_21710 = G__21727;
count__21700_21711 = G__21728;
i__21701_21712 = G__21729;
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

cljs.compiler.emitln.call(null,"var ",mname_21707," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_21730 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_21730,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_21708,".call(this,");

var seq__21702_21731 = cljs.core.seq.call(null,params);
var chunk__21703_21732 = null;
var count__21704_21733 = (0);
var i__21705_21734 = (0);
while(true){
if((i__21705_21734 < count__21704_21733)){
var param_21735 = cljs.core._nth.call(null,chunk__21703_21732,i__21705_21734);
cljs.compiler.emit.call(null,param_21735);

if(cljs.core._EQ_.call(null,param_21735,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__21736 = seq__21702_21731;
var G__21737 = chunk__21703_21732;
var G__21738 = count__21704_21733;
var G__21739 = (i__21705_21734 + (1));
seq__21702_21731 = G__21736;
chunk__21703_21732 = G__21737;
count__21704_21733 = G__21738;
i__21705_21734 = G__21739;
continue;
} else {
var temp__5735__auto___21740 = cljs.core.seq.call(null,seq__21702_21731);
if(temp__5735__auto___21740){
var seq__21702_21741__$1 = temp__5735__auto___21740;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21702_21741__$1)){
var c__4461__auto___21742 = cljs.core.chunk_first.call(null,seq__21702_21741__$1);
var G__21743 = cljs.core.chunk_rest.call(null,seq__21702_21741__$1);
var G__21744 = c__4461__auto___21742;
var G__21745 = cljs.core.count.call(null,c__4461__auto___21742);
var G__21746 = (0);
seq__21702_21731 = G__21743;
chunk__21703_21732 = G__21744;
count__21704_21733 = G__21745;
i__21705_21734 = G__21746;
continue;
} else {
var param_21747 = cljs.core.first.call(null,seq__21702_21741__$1);
cljs.compiler.emit.call(null,param_21747);

if(cljs.core._EQ_.call(null,param_21747,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__21748 = cljs.core.next.call(null,seq__21702_21741__$1);
var G__21749 = null;
var G__21750 = (0);
var G__21751 = (0);
seq__21702_21731 = G__21748;
chunk__21703_21732 = G__21749;
count__21704_21733 = G__21750;
i__21705_21734 = G__21751;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_21707,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_21707,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_21706__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_21707,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_21708,";");

cljs.compiler.emitln.call(null,"return ",mname_21707,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__21755){
var map__21756 = p__21755;
var map__21756__$1 = (((((!((map__21756 == null))))?(((((map__21756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21756):map__21756);
var variadic = cljs.core.get.call(null,map__21756__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__21756__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__21756__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__21756__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__21756__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__21756__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__21756__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__21756,map__21756__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__21752_SHARP_){
var and__4036__auto__ = p1__21752_SHARP_;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__21752_SHARP_));
} else {
return and__4036__auto__;
}
});})(map__21756,map__21756__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_21791__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_21792 = cljs.compiler.munge.call(null,name_21791__$1);
var maxparams_21793 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_21794 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_21791__$1,mname_21792,maxparams_21793,loop_locals,map__21756,map__21756__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_21792),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_21791__$1,mname_21792,maxparams_21793,loop_locals,map__21756,map__21756__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_21795 = cljs.core.sort_by.call(null,((function (name_21791__$1,mname_21792,maxparams_21793,mmap_21794,loop_locals,map__21756,map__21756__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__21753_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__21753_SHARP_)));
});})(name_21791__$1,mname_21792,maxparams_21793,mmap_21794,loop_locals,map__21756,map__21756__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_21794));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_21792," = null;");

var seq__21758_21796 = cljs.core.seq.call(null,ms_21795);
var chunk__21759_21797 = null;
var count__21760_21798 = (0);
var i__21761_21799 = (0);
while(true){
if((i__21761_21799 < count__21760_21798)){
var vec__21762_21800 = cljs.core._nth.call(null,chunk__21759_21797,i__21761_21799);
var n_21801 = cljs.core.nth.call(null,vec__21762_21800,(0),null);
var meth_21802 = cljs.core.nth.call(null,vec__21762_21800,(1),null);
cljs.compiler.emits.call(null,"var ",n_21801," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_21802))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_21802);
} else {
cljs.compiler.emit_fn_method.call(null,meth_21802);
}

cljs.compiler.emitln.call(null,";");


var G__21803 = seq__21758_21796;
var G__21804 = chunk__21759_21797;
var G__21805 = count__21760_21798;
var G__21806 = (i__21761_21799 + (1));
seq__21758_21796 = G__21803;
chunk__21759_21797 = G__21804;
count__21760_21798 = G__21805;
i__21761_21799 = G__21806;
continue;
} else {
var temp__5735__auto___21807 = cljs.core.seq.call(null,seq__21758_21796);
if(temp__5735__auto___21807){
var seq__21758_21808__$1 = temp__5735__auto___21807;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21758_21808__$1)){
var c__4461__auto___21809 = cljs.core.chunk_first.call(null,seq__21758_21808__$1);
var G__21810 = cljs.core.chunk_rest.call(null,seq__21758_21808__$1);
var G__21811 = c__4461__auto___21809;
var G__21812 = cljs.core.count.call(null,c__4461__auto___21809);
var G__21813 = (0);
seq__21758_21796 = G__21810;
chunk__21759_21797 = G__21811;
count__21760_21798 = G__21812;
i__21761_21799 = G__21813;
continue;
} else {
var vec__21765_21814 = cljs.core.first.call(null,seq__21758_21808__$1);
var n_21815 = cljs.core.nth.call(null,vec__21765_21814,(0),null);
var meth_21816 = cljs.core.nth.call(null,vec__21765_21814,(1),null);
cljs.compiler.emits.call(null,"var ",n_21815," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_21816))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_21816);
} else {
cljs.compiler.emit_fn_method.call(null,meth_21816);
}

cljs.compiler.emitln.call(null,";");


var G__21817 = cljs.core.next.call(null,seq__21758_21808__$1);
var G__21818 = null;
var G__21819 = (0);
var G__21820 = (0);
seq__21758_21796 = G__21817;
chunk__21759_21797 = G__21818;
count__21760_21798 = G__21819;
i__21761_21799 = G__21820;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_21792," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_21793),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_21793)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_21793));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__21768_21821 = cljs.core.seq.call(null,ms_21795);
var chunk__21769_21822 = null;
var count__21770_21823 = (0);
var i__21771_21824 = (0);
while(true){
if((i__21771_21824 < count__21770_21823)){
var vec__21772_21825 = cljs.core._nth.call(null,chunk__21769_21822,i__21771_21824);
var n_21826 = cljs.core.nth.call(null,vec__21772_21825,(0),null);
var meth_21827 = cljs.core.nth.call(null,vec__21772_21825,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_21827))){
cljs.compiler.emitln.call(null,"default:");

var restarg_21828 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_21828," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_21829 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_21828," = new cljs.core.IndexedSeq(",a_21829,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_21826,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_21793)),(((cljs.core.count.call(null,maxparams_21793) > (1)))?", ":null),restarg_21828,");");
} else {
var pcnt_21830 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_21827));
cljs.compiler.emitln.call(null,"case ",pcnt_21830,":");

cljs.compiler.emitln.call(null,"return ",n_21826,".call(this",(((pcnt_21830 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_21830,maxparams_21793)),null,(1),null)),(2),null))),");");
}


var G__21831 = seq__21768_21821;
var G__21832 = chunk__21769_21822;
var G__21833 = count__21770_21823;
var G__21834 = (i__21771_21824 + (1));
seq__21768_21821 = G__21831;
chunk__21769_21822 = G__21832;
count__21770_21823 = G__21833;
i__21771_21824 = G__21834;
continue;
} else {
var temp__5735__auto___21835 = cljs.core.seq.call(null,seq__21768_21821);
if(temp__5735__auto___21835){
var seq__21768_21836__$1 = temp__5735__auto___21835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21768_21836__$1)){
var c__4461__auto___21837 = cljs.core.chunk_first.call(null,seq__21768_21836__$1);
var G__21838 = cljs.core.chunk_rest.call(null,seq__21768_21836__$1);
var G__21839 = c__4461__auto___21837;
var G__21840 = cljs.core.count.call(null,c__4461__auto___21837);
var G__21841 = (0);
seq__21768_21821 = G__21838;
chunk__21769_21822 = G__21839;
count__21770_21823 = G__21840;
i__21771_21824 = G__21841;
continue;
} else {
var vec__21775_21842 = cljs.core.first.call(null,seq__21768_21836__$1);
var n_21843 = cljs.core.nth.call(null,vec__21775_21842,(0),null);
var meth_21844 = cljs.core.nth.call(null,vec__21775_21842,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_21844))){
cljs.compiler.emitln.call(null,"default:");

var restarg_21845 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_21845," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_21846 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_21845," = new cljs.core.IndexedSeq(",a_21846,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_21843,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_21793)),(((cljs.core.count.call(null,maxparams_21793) > (1)))?", ":null),restarg_21845,");");
} else {
var pcnt_21847 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_21844));
cljs.compiler.emitln.call(null,"case ",pcnt_21847,":");

cljs.compiler.emitln.call(null,"return ",n_21843,".call(this",(((pcnt_21847 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_21847,maxparams_21793)),null,(1),null)),(2),null))),");");
}


var G__21848 = cljs.core.next.call(null,seq__21768_21836__$1);
var G__21849 = null;
var G__21850 = (0);
var G__21851 = (0);
seq__21768_21821 = G__21848;
chunk__21769_21822 = G__21849;
count__21770_21823 = G__21850;
i__21771_21824 = G__21851;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_21852 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_21795)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_21852,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_21792,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_21792,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_21791__$1,mname_21792,maxparams_21793,mmap_21794,ms_21795,loop_locals,map__21756,map__21756__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__21754_SHARP_){
var vec__21778 = p1__21754_SHARP_;
var n = cljs.core.nth.call(null,vec__21778,(0),null);
var m = cljs.core.nth.call(null,vec__21778,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_21791__$1,mname_21792,maxparams_21793,mmap_21794,ms_21795,loop_locals,map__21756,map__21756__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_21795),".cljs$lang$applyTo;");
} else {
}

var seq__21781_21853 = cljs.core.seq.call(null,ms_21795);
var chunk__21782_21854 = null;
var count__21783_21855 = (0);
var i__21784_21856 = (0);
while(true){
if((i__21784_21856 < count__21783_21855)){
var vec__21785_21857 = cljs.core._nth.call(null,chunk__21782_21854,i__21784_21856);
var n_21858 = cljs.core.nth.call(null,vec__21785_21857,(0),null);
var meth_21859 = cljs.core.nth.call(null,vec__21785_21857,(1),null);
var c_21860 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_21859));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_21859))){
cljs.compiler.emitln.call(null,mname_21792,".cljs$core$IFn$_invoke$arity$variadic = ",n_21858,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_21792,".cljs$core$IFn$_invoke$arity$",c_21860," = ",n_21858,";");
}


var G__21861 = seq__21781_21853;
var G__21862 = chunk__21782_21854;
var G__21863 = count__21783_21855;
var G__21864 = (i__21784_21856 + (1));
seq__21781_21853 = G__21861;
chunk__21782_21854 = G__21862;
count__21783_21855 = G__21863;
i__21784_21856 = G__21864;
continue;
} else {
var temp__5735__auto___21865 = cljs.core.seq.call(null,seq__21781_21853);
if(temp__5735__auto___21865){
var seq__21781_21866__$1 = temp__5735__auto___21865;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21781_21866__$1)){
var c__4461__auto___21867 = cljs.core.chunk_first.call(null,seq__21781_21866__$1);
var G__21868 = cljs.core.chunk_rest.call(null,seq__21781_21866__$1);
var G__21869 = c__4461__auto___21867;
var G__21870 = cljs.core.count.call(null,c__4461__auto___21867);
var G__21871 = (0);
seq__21781_21853 = G__21868;
chunk__21782_21854 = G__21869;
count__21783_21855 = G__21870;
i__21784_21856 = G__21871;
continue;
} else {
var vec__21788_21872 = cljs.core.first.call(null,seq__21781_21866__$1);
var n_21873 = cljs.core.nth.call(null,vec__21788_21872,(0),null);
var meth_21874 = cljs.core.nth.call(null,vec__21788_21872,(1),null);
var c_21875 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_21874));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_21874))){
cljs.compiler.emitln.call(null,mname_21792,".cljs$core$IFn$_invoke$arity$variadic = ",n_21873,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_21792,".cljs$core$IFn$_invoke$arity$",c_21875," = ",n_21873,";");
}


var G__21876 = cljs.core.next.call(null,seq__21781_21866__$1);
var G__21877 = null;
var G__21878 = (0);
var G__21879 = (0);
seq__21781_21853 = G__21876;
chunk__21782_21854 = G__21877;
count__21783_21855 = G__21878;
i__21784_21856 = G__21879;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_21792,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__21880){
var map__21881 = p__21880;
var map__21881__$1 = (((((!((map__21881 == null))))?(((((map__21881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21881):map__21881);
var statements = cljs.core.get.call(null,map__21881__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__21881__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__21881__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__21883_21887 = cljs.core.seq.call(null,statements);
var chunk__21884_21888 = null;
var count__21885_21889 = (0);
var i__21886_21890 = (0);
while(true){
if((i__21886_21890 < count__21885_21889)){
var s_21891 = cljs.core._nth.call(null,chunk__21884_21888,i__21886_21890);
cljs.compiler.emitln.call(null,s_21891);


var G__21892 = seq__21883_21887;
var G__21893 = chunk__21884_21888;
var G__21894 = count__21885_21889;
var G__21895 = (i__21886_21890 + (1));
seq__21883_21887 = G__21892;
chunk__21884_21888 = G__21893;
count__21885_21889 = G__21894;
i__21886_21890 = G__21895;
continue;
} else {
var temp__5735__auto___21896 = cljs.core.seq.call(null,seq__21883_21887);
if(temp__5735__auto___21896){
var seq__21883_21897__$1 = temp__5735__auto___21896;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21883_21897__$1)){
var c__4461__auto___21898 = cljs.core.chunk_first.call(null,seq__21883_21897__$1);
var G__21899 = cljs.core.chunk_rest.call(null,seq__21883_21897__$1);
var G__21900 = c__4461__auto___21898;
var G__21901 = cljs.core.count.call(null,c__4461__auto___21898);
var G__21902 = (0);
seq__21883_21887 = G__21899;
chunk__21884_21888 = G__21900;
count__21885_21889 = G__21901;
i__21886_21890 = G__21902;
continue;
} else {
var s_21903 = cljs.core.first.call(null,seq__21883_21897__$1);
cljs.compiler.emitln.call(null,s_21903);


var G__21904 = cljs.core.next.call(null,seq__21883_21897__$1);
var G__21905 = null;
var G__21906 = (0);
var G__21907 = (0);
seq__21883_21887 = G__21904;
chunk__21884_21888 = G__21905;
count__21885_21889 = G__21906;
i__21886_21890 = G__21907;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__21908){
var map__21909 = p__21908;
var map__21909__$1 = (((((!((map__21909 == null))))?(((((map__21909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21909):map__21909);
var try$ = cljs.core.get.call(null,map__21909__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__21909__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__21909__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__21909__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__21909__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__21911,is_loop){
var map__21912 = p__21911;
var map__21912__$1 = (((((!((map__21912 == null))))?(((((map__21912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21912):map__21912);
var expr = cljs.core.get.call(null,map__21912__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__21912__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__21912__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__21914_21924 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__21915_21925 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__21914_21924,context,map__21912,map__21912__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__21914_21924,context,map__21912,map__21912__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__21915_21925;

try{var seq__21916_21926 = cljs.core.seq.call(null,bindings);
var chunk__21917_21927 = null;
var count__21918_21928 = (0);
var i__21919_21929 = (0);
while(true){
if((i__21919_21929 < count__21918_21928)){
var map__21920_21930 = cljs.core._nth.call(null,chunk__21917_21927,i__21919_21929);
var map__21920_21931__$1 = (((((!((map__21920_21930 == null))))?(((((map__21920_21930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21920_21930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21920_21930):map__21920_21930);
var binding_21932 = map__21920_21931__$1;
var init_21933 = cljs.core.get.call(null,map__21920_21931__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_21932);

cljs.compiler.emitln.call(null," = ",init_21933,";");


var G__21934 = seq__21916_21926;
var G__21935 = chunk__21917_21927;
var G__21936 = count__21918_21928;
var G__21937 = (i__21919_21929 + (1));
seq__21916_21926 = G__21934;
chunk__21917_21927 = G__21935;
count__21918_21928 = G__21936;
i__21919_21929 = G__21937;
continue;
} else {
var temp__5735__auto___21938 = cljs.core.seq.call(null,seq__21916_21926);
if(temp__5735__auto___21938){
var seq__21916_21939__$1 = temp__5735__auto___21938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21916_21939__$1)){
var c__4461__auto___21940 = cljs.core.chunk_first.call(null,seq__21916_21939__$1);
var G__21941 = cljs.core.chunk_rest.call(null,seq__21916_21939__$1);
var G__21942 = c__4461__auto___21940;
var G__21943 = cljs.core.count.call(null,c__4461__auto___21940);
var G__21944 = (0);
seq__21916_21926 = G__21941;
chunk__21917_21927 = G__21942;
count__21918_21928 = G__21943;
i__21919_21929 = G__21944;
continue;
} else {
var map__21922_21945 = cljs.core.first.call(null,seq__21916_21939__$1);
var map__21922_21946__$1 = (((((!((map__21922_21945 == null))))?(((((map__21922_21945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21922_21945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21922_21945):map__21922_21945);
var binding_21947 = map__21922_21946__$1;
var init_21948 = cljs.core.get.call(null,map__21922_21946__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_21947);

cljs.compiler.emitln.call(null," = ",init_21948,";");


var G__21949 = cljs.core.next.call(null,seq__21916_21939__$1);
var G__21950 = null;
var G__21951 = (0);
var G__21952 = (0);
seq__21916_21926 = G__21949;
chunk__21917_21927 = G__21950;
count__21918_21928 = G__21951;
i__21919_21929 = G__21952;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__21914_21924;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__21953){
var map__21954 = p__21953;
var map__21954__$1 = (((((!((map__21954 == null))))?(((((map__21954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21954):map__21954);
var frame = cljs.core.get.call(null,map__21954__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__21954__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__21954__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4518__auto___21956 = cljs.core.count.call(null,exprs);
var i_21957 = (0);
while(true){
if((i_21957 < n__4518__auto___21956)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_21957)," = ",exprs.call(null,i_21957),";");

var G__21958 = (i_21957 + (1));
i_21957 = G__21958;
continue;
} else {
}
break;
}

var n__4518__auto___21959 = cljs.core.count.call(null,exprs);
var i_21960 = (0);
while(true){
if((i_21960 < n__4518__auto___21959)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_21960))," = ",temps.call(null,i_21960),";");

var G__21961 = (i_21960 + (1));
i_21960 = G__21961;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__21962){
var map__21963 = p__21962;
var map__21963__$1 = (((((!((map__21963 == null))))?(((((map__21963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21963):map__21963);
var expr = cljs.core.get.call(null,map__21963__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__21963__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__21963__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__21965_21973 = cljs.core.seq.call(null,bindings);
var chunk__21966_21974 = null;
var count__21967_21975 = (0);
var i__21968_21976 = (0);
while(true){
if((i__21968_21976 < count__21967_21975)){
var map__21969_21977 = cljs.core._nth.call(null,chunk__21966_21974,i__21968_21976);
var map__21969_21978__$1 = (((((!((map__21969_21977 == null))))?(((((map__21969_21977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21969_21977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21969_21977):map__21969_21977);
var binding_21979 = map__21969_21978__$1;
var init_21980 = cljs.core.get.call(null,map__21969_21978__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_21979)," = ",init_21980,";");


var G__21981 = seq__21965_21973;
var G__21982 = chunk__21966_21974;
var G__21983 = count__21967_21975;
var G__21984 = (i__21968_21976 + (1));
seq__21965_21973 = G__21981;
chunk__21966_21974 = G__21982;
count__21967_21975 = G__21983;
i__21968_21976 = G__21984;
continue;
} else {
var temp__5735__auto___21985 = cljs.core.seq.call(null,seq__21965_21973);
if(temp__5735__auto___21985){
var seq__21965_21986__$1 = temp__5735__auto___21985;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21965_21986__$1)){
var c__4461__auto___21987 = cljs.core.chunk_first.call(null,seq__21965_21986__$1);
var G__21988 = cljs.core.chunk_rest.call(null,seq__21965_21986__$1);
var G__21989 = c__4461__auto___21987;
var G__21990 = cljs.core.count.call(null,c__4461__auto___21987);
var G__21991 = (0);
seq__21965_21973 = G__21988;
chunk__21966_21974 = G__21989;
count__21967_21975 = G__21990;
i__21968_21976 = G__21991;
continue;
} else {
var map__21971_21992 = cljs.core.first.call(null,seq__21965_21986__$1);
var map__21971_21993__$1 = (((((!((map__21971_21992 == null))))?(((((map__21971_21992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21971_21992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21971_21992):map__21971_21992);
var binding_21994 = map__21971_21993__$1;
var init_21995 = cljs.core.get.call(null,map__21971_21993__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_21994)," = ",init_21995,";");


var G__21996 = cljs.core.next.call(null,seq__21965_21986__$1);
var G__21997 = null;
var G__21998 = (0);
var G__21999 = (0);
seq__21965_21973 = G__21996;
chunk__21966_21974 = G__21997;
count__21967_21975 = G__21998;
i__21968_21976 = G__21999;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__22002){
var map__22003 = p__22002;
var map__22003__$1 = (((((!((map__22003 == null))))?(((((map__22003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22003):map__22003);
var expr = map__22003__$1;
var f = cljs.core.get.call(null,map__22003__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__22003__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__22003__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__22005 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22003,map__22003__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22003,map__22003__$1,expr,f,args,env){
return (function (p1__22000_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__22000_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22003,map__22003__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22003,map__22003__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22003,map__22003__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22003,map__22003__$1,expr,f,args,env){
return (function (p1__22001_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__22001_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22003,map__22003__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22003,map__22003__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__22005,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__22005,(1),null);
var env__21163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_22008 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_22008,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_22009 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_22009,args)),(((mfa_22009 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_22009,args)),"], 0))");
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
var fprop_22010 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_22010," ? ",f__$1,fprop_22010,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_22010," ? ",f__$1,fprop_22010,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__22011){
var map__22012 = p__22011;
var map__22012__$1 = (((((!((map__22012 == null))))?(((((map__22012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22012):map__22012);
var ctor = cljs.core.get.call(null,map__22012__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__22012__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__22012__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__21163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__22014){
var map__22015 = p__22014;
var map__22015__$1 = (((((!((map__22015 == null))))?(((((map__22015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22015):map__22015);
var target = cljs.core.get.call(null,map__22015__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__22015__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__22015__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__21163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
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
var map__22017 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__22017__$1 = (((((!((map__22017 == null))))?(((((map__22017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22017):map__22017);
var options = cljs.core.get.call(null,map__22017__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__22017__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__22018 = options;
var map__22018__$1 = (((((!((map__22018 == null))))?(((((map__22018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22018):map__22018);
var target = cljs.core.get.call(null,map__22018__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__22018__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__22019 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__22024 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__22024__$1 = (((((!((map__22024 == null))))?(((((map__22024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22024):map__22024);
var node_libs = cljs.core.get.call(null,map__22024__$1,true);
var libs_to_load = cljs.core.get.call(null,map__22024__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__22019,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__22019,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__22026_22042 = cljs.core.seq.call(null,libs_to_load);
var chunk__22027_22043 = null;
var count__22028_22044 = (0);
var i__22029_22045 = (0);
while(true){
if((i__22029_22045 < count__22028_22044)){
var lib_22046 = cljs.core._nth.call(null,chunk__22027_22043,i__22029_22045);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_22046)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_22046),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_22046),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_22046),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_22046),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_22046,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_22046),"');");
}

}
}
}


var G__22047 = seq__22026_22042;
var G__22048 = chunk__22027_22043;
var G__22049 = count__22028_22044;
var G__22050 = (i__22029_22045 + (1));
seq__22026_22042 = G__22047;
chunk__22027_22043 = G__22048;
count__22028_22044 = G__22049;
i__22029_22045 = G__22050;
continue;
} else {
var temp__5735__auto___22051 = cljs.core.seq.call(null,seq__22026_22042);
if(temp__5735__auto___22051){
var seq__22026_22052__$1 = temp__5735__auto___22051;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22026_22052__$1)){
var c__4461__auto___22053 = cljs.core.chunk_first.call(null,seq__22026_22052__$1);
var G__22054 = cljs.core.chunk_rest.call(null,seq__22026_22052__$1);
var G__22055 = c__4461__auto___22053;
var G__22056 = cljs.core.count.call(null,c__4461__auto___22053);
var G__22057 = (0);
seq__22026_22042 = G__22054;
chunk__22027_22043 = G__22055;
count__22028_22044 = G__22056;
i__22029_22045 = G__22057;
continue;
} else {
var lib_22058 = cljs.core.first.call(null,seq__22026_22052__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_22058)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_22058),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_22058),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_22058),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_22058),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_22058,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_22058),"');");
}

}
}
}


var G__22059 = cljs.core.next.call(null,seq__22026_22052__$1);
var G__22060 = null;
var G__22061 = (0);
var G__22062 = (0);
seq__22026_22042 = G__22059;
chunk__22027_22043 = G__22060;
count__22028_22044 = G__22061;
i__22029_22045 = G__22062;
continue;
}
} else {
}
}
break;
}

var seq__22030_22063 = cljs.core.seq.call(null,node_libs);
var chunk__22031_22064 = null;
var count__22032_22065 = (0);
var i__22033_22066 = (0);
while(true){
if((i__22033_22066 < count__22032_22065)){
var lib_22067 = cljs.core._nth.call(null,chunk__22031_22064,i__22033_22066);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_22067)," = require('",lib_22067,"');");


var G__22068 = seq__22030_22063;
var G__22069 = chunk__22031_22064;
var G__22070 = count__22032_22065;
var G__22071 = (i__22033_22066 + (1));
seq__22030_22063 = G__22068;
chunk__22031_22064 = G__22069;
count__22032_22065 = G__22070;
i__22033_22066 = G__22071;
continue;
} else {
var temp__5735__auto___22072 = cljs.core.seq.call(null,seq__22030_22063);
if(temp__5735__auto___22072){
var seq__22030_22073__$1 = temp__5735__auto___22072;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22030_22073__$1)){
var c__4461__auto___22074 = cljs.core.chunk_first.call(null,seq__22030_22073__$1);
var G__22075 = cljs.core.chunk_rest.call(null,seq__22030_22073__$1);
var G__22076 = c__4461__auto___22074;
var G__22077 = cljs.core.count.call(null,c__4461__auto___22074);
var G__22078 = (0);
seq__22030_22063 = G__22075;
chunk__22031_22064 = G__22076;
count__22032_22065 = G__22077;
i__22033_22066 = G__22078;
continue;
} else {
var lib_22079 = cljs.core.first.call(null,seq__22030_22073__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_22079)," = require('",lib_22079,"');");


var G__22080 = cljs.core.next.call(null,seq__22030_22073__$1);
var G__22081 = null;
var G__22082 = (0);
var G__22083 = (0);
seq__22030_22063 = G__22080;
chunk__22031_22064 = G__22081;
count__22032_22065 = G__22082;
i__22033_22066 = G__22083;
continue;
}
} else {
}
}
break;
}

var seq__22034_22084 = cljs.core.seq.call(null,global_exports_libs);
var chunk__22035_22085 = null;
var count__22036_22086 = (0);
var i__22037_22087 = (0);
while(true){
if((i__22037_22087 < count__22036_22086)){
var lib_22088 = cljs.core._nth.call(null,chunk__22035_22085,i__22037_22087);
var map__22038_22089 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_22088));
var map__22038_22090__$1 = (((((!((map__22038_22089 == null))))?(((((map__22038_22089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22038_22089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22038_22089):map__22038_22089);
var global_exports_22091 = cljs.core.get.call(null,map__22038_22090__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_22091,lib_22088);


var G__22092 = seq__22034_22084;
var G__22093 = chunk__22035_22085;
var G__22094 = count__22036_22086;
var G__22095 = (i__22037_22087 + (1));
seq__22034_22084 = G__22092;
chunk__22035_22085 = G__22093;
count__22036_22086 = G__22094;
i__22037_22087 = G__22095;
continue;
} else {
var temp__5735__auto___22096 = cljs.core.seq.call(null,seq__22034_22084);
if(temp__5735__auto___22096){
var seq__22034_22097__$1 = temp__5735__auto___22096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22034_22097__$1)){
var c__4461__auto___22098 = cljs.core.chunk_first.call(null,seq__22034_22097__$1);
var G__22099 = cljs.core.chunk_rest.call(null,seq__22034_22097__$1);
var G__22100 = c__4461__auto___22098;
var G__22101 = cljs.core.count.call(null,c__4461__auto___22098);
var G__22102 = (0);
seq__22034_22084 = G__22099;
chunk__22035_22085 = G__22100;
count__22036_22086 = G__22101;
i__22037_22087 = G__22102;
continue;
} else {
var lib_22103 = cljs.core.first.call(null,seq__22034_22097__$1);
var map__22040_22104 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_22103));
var map__22040_22105__$1 = (((((!((map__22040_22104 == null))))?(((((map__22040_22104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22040_22104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22040_22104):map__22040_22104);
var global_exports_22106 = cljs.core.get.call(null,map__22040_22105__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_22106,lib_22103);


var G__22107 = cljs.core.next.call(null,seq__22034_22097__$1);
var G__22108 = null;
var G__22109 = (0);
var G__22110 = (0);
seq__22034_22084 = G__22107;
chunk__22035_22085 = G__22108;
count__22036_22086 = G__22109;
i__22037_22087 = G__22110;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__22111){
var map__22112 = p__22111;
var map__22112__$1 = (((((!((map__22112 == null))))?(((((map__22112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22112):map__22112);
var name = cljs.core.get.call(null,map__22112__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__22112__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__22112__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__22112__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__22112__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__22112__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__22112__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__22114){
var map__22115 = p__22114;
var map__22115__$1 = (((((!((map__22115 == null))))?(((((map__22115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22115):map__22115);
var name = cljs.core.get.call(null,map__22115__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__22115__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__22115__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__22115__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__22115__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__22115__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__22115__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__22117){
var map__22118 = p__22117;
var map__22118__$1 = (((((!((map__22118 == null))))?(((((map__22118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22118):map__22118);
var t = cljs.core.get.call(null,map__22118__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__22118__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__22118__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__22118__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__22118__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__22120_22138 = cljs.core.seq.call(null,protocols);
var chunk__22121_22139 = null;
var count__22122_22140 = (0);
var i__22123_22141 = (0);
while(true){
if((i__22123_22141 < count__22122_22140)){
var protocol_22142 = cljs.core._nth.call(null,chunk__22121_22139,i__22123_22141);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22142)),"}");


var G__22143 = seq__22120_22138;
var G__22144 = chunk__22121_22139;
var G__22145 = count__22122_22140;
var G__22146 = (i__22123_22141 + (1));
seq__22120_22138 = G__22143;
chunk__22121_22139 = G__22144;
count__22122_22140 = G__22145;
i__22123_22141 = G__22146;
continue;
} else {
var temp__5735__auto___22147 = cljs.core.seq.call(null,seq__22120_22138);
if(temp__5735__auto___22147){
var seq__22120_22148__$1 = temp__5735__auto___22147;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22120_22148__$1)){
var c__4461__auto___22149 = cljs.core.chunk_first.call(null,seq__22120_22148__$1);
var G__22150 = cljs.core.chunk_rest.call(null,seq__22120_22148__$1);
var G__22151 = c__4461__auto___22149;
var G__22152 = cljs.core.count.call(null,c__4461__auto___22149);
var G__22153 = (0);
seq__22120_22138 = G__22150;
chunk__22121_22139 = G__22151;
count__22122_22140 = G__22152;
i__22123_22141 = G__22153;
continue;
} else {
var protocol_22154 = cljs.core.first.call(null,seq__22120_22148__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22154)),"}");


var G__22155 = cljs.core.next.call(null,seq__22120_22148__$1);
var G__22156 = null;
var G__22157 = (0);
var G__22158 = (0);
seq__22120_22138 = G__22155;
chunk__22121_22139 = G__22156;
count__22122_22140 = G__22157;
i__22123_22141 = G__22158;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__22124_22159 = cljs.core.seq.call(null,fields__$1);
var chunk__22125_22160 = null;
var count__22126_22161 = (0);
var i__22127_22162 = (0);
while(true){
if((i__22127_22162 < count__22126_22161)){
var fld_22163 = cljs.core._nth.call(null,chunk__22125_22160,i__22127_22162);
cljs.compiler.emitln.call(null,"this.",fld_22163," = ",fld_22163,";");


var G__22164 = seq__22124_22159;
var G__22165 = chunk__22125_22160;
var G__22166 = count__22126_22161;
var G__22167 = (i__22127_22162 + (1));
seq__22124_22159 = G__22164;
chunk__22125_22160 = G__22165;
count__22126_22161 = G__22166;
i__22127_22162 = G__22167;
continue;
} else {
var temp__5735__auto___22168 = cljs.core.seq.call(null,seq__22124_22159);
if(temp__5735__auto___22168){
var seq__22124_22169__$1 = temp__5735__auto___22168;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22124_22169__$1)){
var c__4461__auto___22170 = cljs.core.chunk_first.call(null,seq__22124_22169__$1);
var G__22171 = cljs.core.chunk_rest.call(null,seq__22124_22169__$1);
var G__22172 = c__4461__auto___22170;
var G__22173 = cljs.core.count.call(null,c__4461__auto___22170);
var G__22174 = (0);
seq__22124_22159 = G__22171;
chunk__22125_22160 = G__22172;
count__22126_22161 = G__22173;
i__22127_22162 = G__22174;
continue;
} else {
var fld_22175 = cljs.core.first.call(null,seq__22124_22169__$1);
cljs.compiler.emitln.call(null,"this.",fld_22175," = ",fld_22175,";");


var G__22176 = cljs.core.next.call(null,seq__22124_22169__$1);
var G__22177 = null;
var G__22178 = (0);
var G__22179 = (0);
seq__22124_22159 = G__22176;
chunk__22125_22160 = G__22177;
count__22126_22161 = G__22178;
i__22127_22162 = G__22179;
continue;
}
} else {
}
}
break;
}

var seq__22128_22180 = cljs.core.seq.call(null,pmasks);
var chunk__22129_22181 = null;
var count__22130_22182 = (0);
var i__22131_22183 = (0);
while(true){
if((i__22131_22183 < count__22130_22182)){
var vec__22132_22184 = cljs.core._nth.call(null,chunk__22129_22181,i__22131_22183);
var pno_22185 = cljs.core.nth.call(null,vec__22132_22184,(0),null);
var pmask_22186 = cljs.core.nth.call(null,vec__22132_22184,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_22185,"$ = ",pmask_22186,";");


var G__22187 = seq__22128_22180;
var G__22188 = chunk__22129_22181;
var G__22189 = count__22130_22182;
var G__22190 = (i__22131_22183 + (1));
seq__22128_22180 = G__22187;
chunk__22129_22181 = G__22188;
count__22130_22182 = G__22189;
i__22131_22183 = G__22190;
continue;
} else {
var temp__5735__auto___22191 = cljs.core.seq.call(null,seq__22128_22180);
if(temp__5735__auto___22191){
var seq__22128_22192__$1 = temp__5735__auto___22191;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22128_22192__$1)){
var c__4461__auto___22193 = cljs.core.chunk_first.call(null,seq__22128_22192__$1);
var G__22194 = cljs.core.chunk_rest.call(null,seq__22128_22192__$1);
var G__22195 = c__4461__auto___22193;
var G__22196 = cljs.core.count.call(null,c__4461__auto___22193);
var G__22197 = (0);
seq__22128_22180 = G__22194;
chunk__22129_22181 = G__22195;
count__22130_22182 = G__22196;
i__22131_22183 = G__22197;
continue;
} else {
var vec__22135_22198 = cljs.core.first.call(null,seq__22128_22192__$1);
var pno_22199 = cljs.core.nth.call(null,vec__22135_22198,(0),null);
var pmask_22200 = cljs.core.nth.call(null,vec__22135_22198,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_22199,"$ = ",pmask_22200,";");


var G__22201 = cljs.core.next.call(null,seq__22128_22192__$1);
var G__22202 = null;
var G__22203 = (0);
var G__22204 = (0);
seq__22128_22180 = G__22201;
chunk__22129_22181 = G__22202;
count__22130_22182 = G__22203;
i__22131_22183 = G__22204;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__22205){
var map__22206 = p__22205;
var map__22206__$1 = (((((!((map__22206 == null))))?(((((map__22206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22206):map__22206);
var t = cljs.core.get.call(null,map__22206__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__22206__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__22206__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__22206__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__22206__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__22208_22226 = cljs.core.seq.call(null,protocols);
var chunk__22209_22227 = null;
var count__22210_22228 = (0);
var i__22211_22229 = (0);
while(true){
if((i__22211_22229 < count__22210_22228)){
var protocol_22230 = cljs.core._nth.call(null,chunk__22209_22227,i__22211_22229);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22230)),"}");


var G__22231 = seq__22208_22226;
var G__22232 = chunk__22209_22227;
var G__22233 = count__22210_22228;
var G__22234 = (i__22211_22229 + (1));
seq__22208_22226 = G__22231;
chunk__22209_22227 = G__22232;
count__22210_22228 = G__22233;
i__22211_22229 = G__22234;
continue;
} else {
var temp__5735__auto___22235 = cljs.core.seq.call(null,seq__22208_22226);
if(temp__5735__auto___22235){
var seq__22208_22236__$1 = temp__5735__auto___22235;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22208_22236__$1)){
var c__4461__auto___22237 = cljs.core.chunk_first.call(null,seq__22208_22236__$1);
var G__22238 = cljs.core.chunk_rest.call(null,seq__22208_22236__$1);
var G__22239 = c__4461__auto___22237;
var G__22240 = cljs.core.count.call(null,c__4461__auto___22237);
var G__22241 = (0);
seq__22208_22226 = G__22238;
chunk__22209_22227 = G__22239;
count__22210_22228 = G__22240;
i__22211_22229 = G__22241;
continue;
} else {
var protocol_22242 = cljs.core.first.call(null,seq__22208_22236__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22242)),"}");


var G__22243 = cljs.core.next.call(null,seq__22208_22236__$1);
var G__22244 = null;
var G__22245 = (0);
var G__22246 = (0);
seq__22208_22226 = G__22243;
chunk__22209_22227 = G__22244;
count__22210_22228 = G__22245;
i__22211_22229 = G__22246;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__22212_22247 = cljs.core.seq.call(null,fields__$1);
var chunk__22213_22248 = null;
var count__22214_22249 = (0);
var i__22215_22250 = (0);
while(true){
if((i__22215_22250 < count__22214_22249)){
var fld_22251 = cljs.core._nth.call(null,chunk__22213_22248,i__22215_22250);
cljs.compiler.emitln.call(null,"this.",fld_22251," = ",fld_22251,";");


var G__22252 = seq__22212_22247;
var G__22253 = chunk__22213_22248;
var G__22254 = count__22214_22249;
var G__22255 = (i__22215_22250 + (1));
seq__22212_22247 = G__22252;
chunk__22213_22248 = G__22253;
count__22214_22249 = G__22254;
i__22215_22250 = G__22255;
continue;
} else {
var temp__5735__auto___22256 = cljs.core.seq.call(null,seq__22212_22247);
if(temp__5735__auto___22256){
var seq__22212_22257__$1 = temp__5735__auto___22256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22212_22257__$1)){
var c__4461__auto___22258 = cljs.core.chunk_first.call(null,seq__22212_22257__$1);
var G__22259 = cljs.core.chunk_rest.call(null,seq__22212_22257__$1);
var G__22260 = c__4461__auto___22258;
var G__22261 = cljs.core.count.call(null,c__4461__auto___22258);
var G__22262 = (0);
seq__22212_22247 = G__22259;
chunk__22213_22248 = G__22260;
count__22214_22249 = G__22261;
i__22215_22250 = G__22262;
continue;
} else {
var fld_22263 = cljs.core.first.call(null,seq__22212_22257__$1);
cljs.compiler.emitln.call(null,"this.",fld_22263," = ",fld_22263,";");


var G__22264 = cljs.core.next.call(null,seq__22212_22257__$1);
var G__22265 = null;
var G__22266 = (0);
var G__22267 = (0);
seq__22212_22247 = G__22264;
chunk__22213_22248 = G__22265;
count__22214_22249 = G__22266;
i__22215_22250 = G__22267;
continue;
}
} else {
}
}
break;
}

var seq__22216_22268 = cljs.core.seq.call(null,pmasks);
var chunk__22217_22269 = null;
var count__22218_22270 = (0);
var i__22219_22271 = (0);
while(true){
if((i__22219_22271 < count__22218_22270)){
var vec__22220_22272 = cljs.core._nth.call(null,chunk__22217_22269,i__22219_22271);
var pno_22273 = cljs.core.nth.call(null,vec__22220_22272,(0),null);
var pmask_22274 = cljs.core.nth.call(null,vec__22220_22272,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_22273,"$ = ",pmask_22274,";");


var G__22275 = seq__22216_22268;
var G__22276 = chunk__22217_22269;
var G__22277 = count__22218_22270;
var G__22278 = (i__22219_22271 + (1));
seq__22216_22268 = G__22275;
chunk__22217_22269 = G__22276;
count__22218_22270 = G__22277;
i__22219_22271 = G__22278;
continue;
} else {
var temp__5735__auto___22279 = cljs.core.seq.call(null,seq__22216_22268);
if(temp__5735__auto___22279){
var seq__22216_22280__$1 = temp__5735__auto___22279;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22216_22280__$1)){
var c__4461__auto___22281 = cljs.core.chunk_first.call(null,seq__22216_22280__$1);
var G__22282 = cljs.core.chunk_rest.call(null,seq__22216_22280__$1);
var G__22283 = c__4461__auto___22281;
var G__22284 = cljs.core.count.call(null,c__4461__auto___22281);
var G__22285 = (0);
seq__22216_22268 = G__22282;
chunk__22217_22269 = G__22283;
count__22218_22270 = G__22284;
i__22219_22271 = G__22285;
continue;
} else {
var vec__22223_22286 = cljs.core.first.call(null,seq__22216_22280__$1);
var pno_22287 = cljs.core.nth.call(null,vec__22223_22286,(0),null);
var pmask_22288 = cljs.core.nth.call(null,vec__22223_22286,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_22287,"$ = ",pmask_22288,";");


var G__22289 = cljs.core.next.call(null,seq__22216_22280__$1);
var G__22290 = null;
var G__22291 = (0);
var G__22292 = (0);
seq__22216_22268 = G__22289;
chunk__22217_22269 = G__22290;
count__22218_22270 = G__22291;
i__22219_22271 = G__22292;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__22293){
var map__22294 = p__22293;
var map__22294__$1 = (((((!((map__22294 == null))))?(((((map__22294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22294):map__22294);
var target = cljs.core.get.call(null,map__22294__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__22294__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__22294__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__22294__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__22294__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__21163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__22296){
var map__22297 = p__22296;
var map__22297__$1 = (((((!((map__22297 == null))))?(((((map__22297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22297):map__22297);
var op = cljs.core.get.call(null,map__22297__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__22297__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__22297__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__22297__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__22297__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4036__auto__ = code;
if(cljs.core.truth_(and__4036__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4036__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__21163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21163__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__22303 = cljs.core.seq.call(null,table);
var chunk__22304 = null;
var count__22305 = (0);
var i__22306 = (0);
while(true){
if((i__22306 < count__22305)){
var vec__22307 = cljs.core._nth.call(null,chunk__22304,i__22306);
var sym = cljs.core.nth.call(null,vec__22307,(0),null);
var value = cljs.core.nth.call(null,vec__22307,(1),null);
var ns_22313 = cljs.core.namespace.call(null,sym);
var name_22314 = cljs.core.name.call(null,sym);
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


var G__22315 = seq__22303;
var G__22316 = chunk__22304;
var G__22317 = count__22305;
var G__22318 = (i__22306 + (1));
seq__22303 = G__22315;
chunk__22304 = G__22316;
count__22305 = G__22317;
i__22306 = G__22318;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__22303);
if(temp__5735__auto__){
var seq__22303__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22303__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__22303__$1);
var G__22319 = cljs.core.chunk_rest.call(null,seq__22303__$1);
var G__22320 = c__4461__auto__;
var G__22321 = cljs.core.count.call(null,c__4461__auto__);
var G__22322 = (0);
seq__22303 = G__22319;
chunk__22304 = G__22320;
count__22305 = G__22321;
i__22306 = G__22322;
continue;
} else {
var vec__22310 = cljs.core.first.call(null,seq__22303__$1);
var sym = cljs.core.nth.call(null,vec__22310,(0),null);
var value = cljs.core.nth.call(null,vec__22310,(1),null);
var ns_22323 = cljs.core.namespace.call(null,sym);
var name_22324 = cljs.core.name.call(null,sym);
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


var G__22325 = cljs.core.next.call(null,seq__22303__$1);
var G__22326 = null;
var G__22327 = (0);
var G__22328 = (0);
seq__22303 = G__22325;
chunk__22304 = G__22326;
count__22305 = G__22327;
i__22306 = G__22328;
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
var G__22330 = arguments.length;
switch (G__22330) {
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
var k_22335 = cljs.core.first.call(null,ks);
var vec__22331_22336 = cljs.core.conj.call(null,prefix,k_22335);
var top_22337 = cljs.core.nth.call(null,vec__22331_22336,(0),null);
var prefix_SINGLEQUOTE__22338 = vec__22331_22336;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_22335)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__22338) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_22337)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_22337)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__22338)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_22337);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__22338)),";");
}
} else {
}

var m_22339 = cljs.core.get.call(null,externs,k_22335);
if(cljs.core.empty_QMARK_.call(null,m_22339)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__22338,m_22339,top_level,known_externs);
}

var G__22340 = cljs.core.next.call(null,ks);
ks = G__22340;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
