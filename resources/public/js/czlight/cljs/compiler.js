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
var map__6244 = s;
var map__6244__$1 = (((((!((map__6244 == null))))?(((((map__6244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6244):map__6244);
var name = cljs.core.get.call(null,map__6244__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__6244__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__6247 = info;
var map__6248 = G__6247;
var map__6248__$1 = (((((!((map__6248 == null))))?(((((map__6248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6248):map__6248);
var shadow = cljs.core.get.call(null,map__6248__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__6247__$1 = G__6247;
while(true){
var d__$2 = d__$1;
var map__6250 = G__6247__$1;
var map__6250__$1 = (((((!((map__6250 == null))))?(((((map__6250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6250):map__6250);
var shadow__$1 = cljs.core.get.call(null,map__6250__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__6252 = (d__$2 + (1));
var G__6253 = shadow__$1;
d__$1 = G__6252;
G__6247__$1 = G__6253;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__6254){
var map__6255 = p__6254;
var map__6255__$1 = (((((!((map__6255 == null))))?(((((map__6255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6255):map__6255);
var name_var = map__6255__$1;
var name = cljs.core.get.call(null,map__6255__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__6255__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__6257 = info;
var map__6257__$1 = (((((!((map__6257 == null))))?(((((map__6257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6257):map__6257);
var ns = cljs.core.get.call(null,map__6257__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__6257__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__6260 = arguments.length;
switch (G__6260) {
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
var G__6262 = cp;
switch (G__6262) {
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
var seq__6264_6268 = cljs.core.seq.call(null,s);
var chunk__6265_6269 = null;
var count__6266_6270 = (0);
var i__6267_6271 = (0);
while(true){
if((i__6267_6271 < count__6266_6270)){
var c_6272 = cljs.core._nth.call(null,chunk__6265_6269,i__6267_6271);
sb.append(cljs.compiler.escape_char.call(null,c_6272));


var G__6273 = seq__6264_6268;
var G__6274 = chunk__6265_6269;
var G__6275 = count__6266_6270;
var G__6276 = (i__6267_6271 + (1));
seq__6264_6268 = G__6273;
chunk__6265_6269 = G__6274;
count__6266_6270 = G__6275;
i__6267_6271 = G__6276;
continue;
} else {
var temp__5735__auto___6277 = cljs.core.seq.call(null,seq__6264_6268);
if(temp__5735__auto___6277){
var seq__6264_6278__$1 = temp__5735__auto___6277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6264_6278__$1)){
var c__4461__auto___6279 = cljs.core.chunk_first.call(null,seq__6264_6278__$1);
var G__6280 = cljs.core.chunk_rest.call(null,seq__6264_6278__$1);
var G__6281 = c__4461__auto___6279;
var G__6282 = cljs.core.count.call(null,c__4461__auto___6279);
var G__6283 = (0);
seq__6264_6268 = G__6280;
chunk__6265_6269 = G__6281;
count__6266_6270 = G__6282;
i__6267_6271 = G__6283;
continue;
} else {
var c_6284 = cljs.core.first.call(null,seq__6264_6278__$1);
sb.append(cljs.compiler.escape_char.call(null,c_6284));


var G__6285 = cljs.core.next.call(null,seq__6264_6278__$1);
var G__6286 = null;
var G__6287 = (0);
var G__6288 = (0);
seq__6264_6268 = G__6285;
chunk__6265_6269 = G__6286;
count__6266_6270 = G__6287;
i__6267_6271 = G__6288;
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
var map__6289_6294 = ast;
var map__6289_6295__$1 = (((((!((map__6289_6294 == null))))?(((((map__6289_6294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6289_6294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6289_6294):map__6289_6294);
var env_6296 = cljs.core.get.call(null,map__6289_6295__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_6296))){
var map__6291_6297 = env_6296;
var map__6291_6298__$1 = (((((!((map__6291_6297 == null))))?(((((map__6291_6297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6291_6297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6291_6297):map__6291_6297);
var line_6299 = cljs.core.get.call(null,map__6291_6298__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_6300 = cljs.core.get.call(null,map__6291_6298__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__6291_6297,map__6291_6298__$1,line_6299,column_6300,map__6289_6294,map__6289_6295__$1,env_6296){
return (function (m){
var minfo = (function (){var G__6293 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__6293,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__6293;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_6299 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__6291_6297,map__6291_6298__$1,line_6299,column_6300,map__6289_6294,map__6289_6295__$1,env_6296){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_6300)?(column_6300 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__6291_6297,map__6291_6298__$1,line_6299,column_6300,map__6289_6294,map__6289_6295__$1,env_6296){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__6291_6297,map__6291_6298__$1,line_6299,column_6300,map__6289_6294,map__6289_6295__$1,env_6296))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__6291_6297,map__6291_6298__$1,line_6299,column_6300,map__6289_6294,map__6289_6295__$1,env_6296))
,cljs.core.sorted_map.call(null)));
});})(map__6291_6297,map__6291_6298__$1,line_6299,column_6300,map__6289_6294,map__6289_6295__$1,env_6296))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__6309 = arguments.length;
switch (G__6309) {
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
var len__4641__auto___6316 = arguments.length;
var i__4642__auto___6317 = (0);
while(true){
if((i__4642__auto___6317 < len__4641__auto___6316)){
args_arr__4662__auto__.push((arguments[i__4642__auto___6317]));

var G__6318 = (i__4642__auto___6317 + (1));
i__4642__auto___6317 = G__6318;
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
var s_6319 = (function (){var G__6310 = a;
if((!(typeof a === 'string'))){
return G__6310.toString();
} else {
return G__6310;
}
})();
var temp__5739__auto___6320 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___6320 == null)){
} else {
var sm_data_6321 = temp__5739__auto___6320;
cljs.core.swap_BANG_.call(null,sm_data_6321,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_6321,temp__5739__auto___6320,s_6319){
return (function (p1__6301_SHARP_){
return (p1__6301_SHARP_ + s_6319.length);
});})(sm_data_6321,temp__5739__auto___6320,s_6319))
);
}

cljs.core.print.call(null,s_6319);

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

var seq__6311 = cljs.core.seq.call(null,xs);
var chunk__6312 = null;
var count__6313 = (0);
var i__6314 = (0);
while(true){
if((i__6314 < count__6313)){
var x = cljs.core._nth.call(null,chunk__6312,i__6314);
cljs.compiler.emits.call(null,x);


var G__6322 = seq__6311;
var G__6323 = chunk__6312;
var G__6324 = count__6313;
var G__6325 = (i__6314 + (1));
seq__6311 = G__6322;
chunk__6312 = G__6323;
count__6313 = G__6324;
i__6314 = G__6325;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__6311);
if(temp__5735__auto__){
var seq__6311__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6311__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__6311__$1);
var G__6326 = cljs.core.chunk_rest.call(null,seq__6311__$1);
var G__6327 = c__4461__auto__;
var G__6328 = cljs.core.count.call(null,c__4461__auto__);
var G__6329 = (0);
seq__6311 = G__6326;
chunk__6312 = G__6327;
count__6313 = G__6328;
i__6314 = G__6329;
continue;
} else {
var x = cljs.core.first.call(null,seq__6311__$1);
cljs.compiler.emits.call(null,x);


var G__6330 = cljs.core.next.call(null,seq__6311__$1);
var G__6331 = null;
var G__6332 = (0);
var G__6333 = (0);
seq__6311 = G__6330;
chunk__6312 = G__6331;
count__6313 = G__6332;
i__6314 = G__6333;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq6303){
var G__6304 = cljs.core.first.call(null,seq6303);
var seq6303__$1 = cljs.core.next.call(null,seq6303);
var G__6305 = cljs.core.first.call(null,seq6303__$1);
var seq6303__$2 = cljs.core.next.call(null,seq6303__$1);
var G__6306 = cljs.core.first.call(null,seq6303__$2);
var seq6303__$3 = cljs.core.next.call(null,seq6303__$2);
var G__6307 = cljs.core.first.call(null,seq6303__$3);
var seq6303__$4 = cljs.core.next.call(null,seq6303__$3);
var G__6308 = cljs.core.first.call(null,seq6303__$4);
var seq6303__$5 = cljs.core.next.call(null,seq6303__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6304,G__6305,G__6306,G__6307,G__6308,seq6303__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__6334){
var map__6335 = p__6334;
var map__6335__$1 = (((((!((map__6335 == null))))?(((((map__6335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6335):map__6335);
var m = map__6335__$1;
var gen_line = cljs.core.get.call(null,map__6335__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__6344 = arguments.length;
switch (G__6344) {
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
var len__4641__auto___6350 = arguments.length;
var i__4642__auto___6351 = (0);
while(true){
if((i__4642__auto___6351 < len__4641__auto___6350)){
args_arr__4662__auto__.push((arguments[i__4642__auto___6351]));

var G__6352 = (i__4642__auto___6351 + (1));
i__4642__auto___6351 = G__6352;
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

var seq__6345_6353 = cljs.core.seq.call(null,xs);
var chunk__6346_6354 = null;
var count__6347_6355 = (0);
var i__6348_6356 = (0);
while(true){
if((i__6348_6356 < count__6347_6355)){
var x_6357 = cljs.core._nth.call(null,chunk__6346_6354,i__6348_6356);
cljs.compiler.emits.call(null,x_6357);


var G__6358 = seq__6345_6353;
var G__6359 = chunk__6346_6354;
var G__6360 = count__6347_6355;
var G__6361 = (i__6348_6356 + (1));
seq__6345_6353 = G__6358;
chunk__6346_6354 = G__6359;
count__6347_6355 = G__6360;
i__6348_6356 = G__6361;
continue;
} else {
var temp__5735__auto___6362 = cljs.core.seq.call(null,seq__6345_6353);
if(temp__5735__auto___6362){
var seq__6345_6363__$1 = temp__5735__auto___6362;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6345_6363__$1)){
var c__4461__auto___6364 = cljs.core.chunk_first.call(null,seq__6345_6363__$1);
var G__6365 = cljs.core.chunk_rest.call(null,seq__6345_6363__$1);
var G__6366 = c__4461__auto___6364;
var G__6367 = cljs.core.count.call(null,c__4461__auto___6364);
var G__6368 = (0);
seq__6345_6353 = G__6365;
chunk__6346_6354 = G__6366;
count__6347_6355 = G__6367;
i__6348_6356 = G__6368;
continue;
} else {
var x_6369 = cljs.core.first.call(null,seq__6345_6363__$1);
cljs.compiler.emits.call(null,x_6369);


var G__6370 = cljs.core.next.call(null,seq__6345_6363__$1);
var G__6371 = null;
var G__6372 = (0);
var G__6373 = (0);
seq__6345_6353 = G__6370;
chunk__6346_6354 = G__6371;
count__6347_6355 = G__6372;
i__6348_6356 = G__6373;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq6338){
var G__6339 = cljs.core.first.call(null,seq6338);
var seq6338__$1 = cljs.core.next.call(null,seq6338);
var G__6340 = cljs.core.first.call(null,seq6338__$1);
var seq6338__$2 = cljs.core.next.call(null,seq6338__$1);
var G__6341 = cljs.core.first.call(null,seq6338__$2);
var seq6338__$3 = cljs.core.next.call(null,seq6338__$2);
var G__6342 = cljs.core.first.call(null,seq6338__$3);
var seq6338__$4 = cljs.core.next.call(null,seq6338__$3);
var G__6343 = cljs.core.first.call(null,seq6338__$4);
var seq6338__$5 = cljs.core.next.call(null,seq6338__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6339,G__6340,G__6341,G__6342,G__6343,seq6338__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__6374_6378 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__6375_6379 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__6376_6380 = true;
var _STAR_print_fn_STAR__temp_val__6377_6381 = ((function (_STAR_print_newline_STAR__orig_val__6374_6378,_STAR_print_fn_STAR__orig_val__6375_6379,_STAR_print_newline_STAR__temp_val__6376_6380,sb__4572__auto__){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__6374_6378,_STAR_print_fn_STAR__orig_val__6375_6379,_STAR_print_newline_STAR__temp_val__6376_6380,sb__4572__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__6376_6380;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__6377_6381;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__6375_6379;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__6374_6378;
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
var vec__6382 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__6382,(0),null);
var name = cljs.core.nth.call(null,vec__6382,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__6382,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__6382,ns,name))
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
var vec__6385 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__6385,(0),null);
var flags = cljs.core.nth.call(null,vec__6385,(1),null);
var pattern = cljs.core.nth.call(null,vec__6385,(2),null);
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
return (function (p1__6388_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__6388_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__6390){
var map__6391 = p__6390;
var map__6391__$1 = (((((!((map__6391 == null))))?(((((map__6391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6391):map__6391);
var ast = map__6391__$1;
var info = cljs.core.get.call(null,map__6391__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__6391__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__6391__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__6393 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__6393__$1 = (((((!((map__6393 == null))))?(((((map__6393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6393):map__6393);
var cenv = map__6393__$1;
var options = cljs.core.get.call(null,map__6393__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__6395 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4036__auto__;
}
})())){
return clojure.set.difference.call(null,G__6395,cljs.analyzer.es5_allowed);
} else {
return G__6395;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4047__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__6396 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__6396,reserved);
} else {
return G__6396;
}
})();
var env__5064__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__6397_6398 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__6397_6399__$1 = (((G__6397_6398 instanceof cljs.core.Keyword))?G__6397_6398.fqn:null);
switch (G__6397_6399__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__6401){
var map__6402 = p__6401;
var map__6402__$1 = (((((!((map__6402 == null))))?(((((map__6402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6402):map__6402);
var arg = map__6402__$1;
var env = cljs.core.get.call(null,map__6402__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__6402__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__6402__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__6402__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__6404 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__6404__$1 = (((((!((map__6404 == null))))?(((((map__6404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6404):map__6404);
var name = cljs.core.get.call(null,map__6404__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__5064__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__6406){
var map__6407 = p__6406;
var map__6407__$1 = (((((!((map__6407 == null))))?(((((map__6407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6407):map__6407);
var expr = cljs.core.get.call(null,map__6407__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__6407__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__6407__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5064__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__6409_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__6409_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__6410){
var map__6411 = p__6410;
var map__6411__$1 = (((((!((map__6411 == null))))?(((((map__6411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6411):map__6411);
var env = cljs.core.get.call(null,map__6411__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__6411__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__6411__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__5064__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__6413){
var map__6414 = p__6413;
var map__6414__$1 = (((((!((map__6414 == null))))?(((((map__6414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6414):map__6414);
var items = cljs.core.get.call(null,map__6414__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__6414__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5064__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__6416_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__6416_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__6417){
var map__6418 = p__6417;
var map__6418__$1 = (((((!((map__6418 == null))))?(((((map__6418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6418):map__6418);
var items = cljs.core.get.call(null,map__6418__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__6418__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5064__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5735__auto___6436 = cljs.core.seq.call(null,items);
if(temp__5735__auto___6436){
var items_6437__$1 = temp__5735__auto___6436;
var vec__6420_6438 = items_6437__$1;
var seq__6421_6439 = cljs.core.seq.call(null,vec__6420_6438);
var first__6422_6440 = cljs.core.first.call(null,seq__6421_6439);
var seq__6421_6441__$1 = cljs.core.next.call(null,seq__6421_6439);
var vec__6423_6442 = first__6422_6440;
var k_6443 = cljs.core.nth.call(null,vec__6423_6442,(0),null);
var v_6444 = cljs.core.nth.call(null,vec__6423_6442,(1),null);
var r_6445 = seq__6421_6441__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_6443),"\": ",emit_js_object_val.call(null,v_6444));

var seq__6426_6446 = cljs.core.seq.call(null,r_6445);
var chunk__6427_6447 = null;
var count__6428_6448 = (0);
var i__6429_6449 = (0);
while(true){
if((i__6429_6449 < count__6428_6448)){
var vec__6430_6450 = cljs.core._nth.call(null,chunk__6427_6447,i__6429_6449);
var k_6451__$1 = cljs.core.nth.call(null,vec__6430_6450,(0),null);
var v_6452__$1 = cljs.core.nth.call(null,vec__6430_6450,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_6451__$1),"\": ",emit_js_object_val.call(null,v_6452__$1));


var G__6453 = seq__6426_6446;
var G__6454 = chunk__6427_6447;
var G__6455 = count__6428_6448;
var G__6456 = (i__6429_6449 + (1));
seq__6426_6446 = G__6453;
chunk__6427_6447 = G__6454;
count__6428_6448 = G__6455;
i__6429_6449 = G__6456;
continue;
} else {
var temp__5735__auto___6457__$1 = cljs.core.seq.call(null,seq__6426_6446);
if(temp__5735__auto___6457__$1){
var seq__6426_6458__$1 = temp__5735__auto___6457__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6426_6458__$1)){
var c__4461__auto___6459 = cljs.core.chunk_first.call(null,seq__6426_6458__$1);
var G__6460 = cljs.core.chunk_rest.call(null,seq__6426_6458__$1);
var G__6461 = c__4461__auto___6459;
var G__6462 = cljs.core.count.call(null,c__4461__auto___6459);
var G__6463 = (0);
seq__6426_6446 = G__6460;
chunk__6427_6447 = G__6461;
count__6428_6448 = G__6462;
i__6429_6449 = G__6463;
continue;
} else {
var vec__6433_6464 = cljs.core.first.call(null,seq__6426_6458__$1);
var k_6465__$1 = cljs.core.nth.call(null,vec__6433_6464,(0),null);
var v_6466__$1 = cljs.core.nth.call(null,vec__6433_6464,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_6465__$1),"\": ",emit_js_object_val.call(null,v_6466__$1));


var G__6467 = cljs.core.next.call(null,seq__6426_6458__$1);
var G__6468 = null;
var G__6469 = (0);
var G__6470 = (0);
seq__6426_6446 = G__6467;
chunk__6427_6447 = G__6468;
count__6428_6448 = G__6469;
i__6429_6449 = G__6470;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__6471){
var map__6472 = p__6471;
var map__6472__$1 = (((((!((map__6472 == null))))?(((((map__6472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6472):map__6472);
var keys = cljs.core.get.call(null,map__6472__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__6472__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__6472__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5064__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__6474){
var map__6475 = p__6474;
var map__6475__$1 = (((((!((map__6475 == null))))?(((((map__6475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6475):map__6475);
var items = cljs.core.get.call(null,map__6475__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__6475__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5064__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__6477){
var map__6478 = p__6477;
var map__6478__$1 = (((((!((map__6478 == null))))?(((((map__6478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6478):map__6478);
var expr = cljs.core.get.call(null,map__6478__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__6480){
var map__6481 = p__6480;
var map__6481__$1 = (((((!((map__6481 == null))))?(((((map__6481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6481):map__6481);
var form = cljs.core.get.call(null,map__6481__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__6481__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__5064__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__6483 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__6483__$1 = (((((!((map__6483 == null))))?(((((map__6483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6483):map__6483);
var op = cljs.core.get.call(null,map__6483__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__6483__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__6483__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__6485 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__6485__$1 = (((((!((map__6485 == null))))?(((((map__6485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6485):map__6485);
var op = cljs.core.get.call(null,map__6485__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__6485__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__6485__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__6487){
var map__6488 = p__6487;
var map__6488__$1 = (((((!((map__6488 == null))))?(((((map__6488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6488):map__6488);
var test = cljs.core.get.call(null,map__6488__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__6488__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__6488__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__6488__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__6488__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__6490){
var map__6491 = p__6490;
var map__6491__$1 = (((((!((map__6491 == null))))?(((((map__6491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6491):map__6491);
var v = cljs.core.get.call(null,map__6491__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__6491__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__6491__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__6491__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__6493_6513 = cljs.core.seq.call(null,nodes);
var chunk__6494_6514 = null;
var count__6495_6515 = (0);
var i__6496_6516 = (0);
while(true){
if((i__6496_6516 < count__6495_6515)){
var map__6497_6517 = cljs.core._nth.call(null,chunk__6494_6514,i__6496_6516);
var map__6497_6518__$1 = (((((!((map__6497_6517 == null))))?(((((map__6497_6517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6497_6517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6497_6517):map__6497_6517);
var ts_6519 = cljs.core.get.call(null,map__6497_6518__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__6498_6520 = cljs.core.get.call(null,map__6497_6518__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__6498_6521__$1 = (((((!((map__6498_6520 == null))))?(((((map__6498_6520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6498_6520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6498_6520):map__6498_6520);
var then_6522 = cljs.core.get.call(null,map__6498_6521__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__6501_6523 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_6519));
var chunk__6502_6524 = null;
var count__6503_6525 = (0);
var i__6504_6526 = (0);
while(true){
if((i__6504_6526 < count__6503_6525)){
var test_6527 = cljs.core._nth.call(null,chunk__6502_6524,i__6504_6526);
cljs.compiler.emitln.call(null,"case ",test_6527,":");


var G__6528 = seq__6501_6523;
var G__6529 = chunk__6502_6524;
var G__6530 = count__6503_6525;
var G__6531 = (i__6504_6526 + (1));
seq__6501_6523 = G__6528;
chunk__6502_6524 = G__6529;
count__6503_6525 = G__6530;
i__6504_6526 = G__6531;
continue;
} else {
var temp__5735__auto___6532 = cljs.core.seq.call(null,seq__6501_6523);
if(temp__5735__auto___6532){
var seq__6501_6533__$1 = temp__5735__auto___6532;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6501_6533__$1)){
var c__4461__auto___6534 = cljs.core.chunk_first.call(null,seq__6501_6533__$1);
var G__6535 = cljs.core.chunk_rest.call(null,seq__6501_6533__$1);
var G__6536 = c__4461__auto___6534;
var G__6537 = cljs.core.count.call(null,c__4461__auto___6534);
var G__6538 = (0);
seq__6501_6523 = G__6535;
chunk__6502_6524 = G__6536;
count__6503_6525 = G__6537;
i__6504_6526 = G__6538;
continue;
} else {
var test_6539 = cljs.core.first.call(null,seq__6501_6533__$1);
cljs.compiler.emitln.call(null,"case ",test_6539,":");


var G__6540 = cljs.core.next.call(null,seq__6501_6533__$1);
var G__6541 = null;
var G__6542 = (0);
var G__6543 = (0);
seq__6501_6523 = G__6540;
chunk__6502_6524 = G__6541;
count__6503_6525 = G__6542;
i__6504_6526 = G__6543;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_6522);
} else {
cljs.compiler.emitln.call(null,then_6522);
}

cljs.compiler.emitln.call(null,"break;");


var G__6544 = seq__6493_6513;
var G__6545 = chunk__6494_6514;
var G__6546 = count__6495_6515;
var G__6547 = (i__6496_6516 + (1));
seq__6493_6513 = G__6544;
chunk__6494_6514 = G__6545;
count__6495_6515 = G__6546;
i__6496_6516 = G__6547;
continue;
} else {
var temp__5735__auto___6548 = cljs.core.seq.call(null,seq__6493_6513);
if(temp__5735__auto___6548){
var seq__6493_6549__$1 = temp__5735__auto___6548;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6493_6549__$1)){
var c__4461__auto___6550 = cljs.core.chunk_first.call(null,seq__6493_6549__$1);
var G__6551 = cljs.core.chunk_rest.call(null,seq__6493_6549__$1);
var G__6552 = c__4461__auto___6550;
var G__6553 = cljs.core.count.call(null,c__4461__auto___6550);
var G__6554 = (0);
seq__6493_6513 = G__6551;
chunk__6494_6514 = G__6552;
count__6495_6515 = G__6553;
i__6496_6516 = G__6554;
continue;
} else {
var map__6505_6555 = cljs.core.first.call(null,seq__6493_6549__$1);
var map__6505_6556__$1 = (((((!((map__6505_6555 == null))))?(((((map__6505_6555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6505_6555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6505_6555):map__6505_6555);
var ts_6557 = cljs.core.get.call(null,map__6505_6556__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__6506_6558 = cljs.core.get.call(null,map__6505_6556__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__6506_6559__$1 = (((((!((map__6506_6558 == null))))?(((((map__6506_6558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6506_6558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6506_6558):map__6506_6558);
var then_6560 = cljs.core.get.call(null,map__6506_6559__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__6509_6561 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_6557));
var chunk__6510_6562 = null;
var count__6511_6563 = (0);
var i__6512_6564 = (0);
while(true){
if((i__6512_6564 < count__6511_6563)){
var test_6565 = cljs.core._nth.call(null,chunk__6510_6562,i__6512_6564);
cljs.compiler.emitln.call(null,"case ",test_6565,":");


var G__6566 = seq__6509_6561;
var G__6567 = chunk__6510_6562;
var G__6568 = count__6511_6563;
var G__6569 = (i__6512_6564 + (1));
seq__6509_6561 = G__6566;
chunk__6510_6562 = G__6567;
count__6511_6563 = G__6568;
i__6512_6564 = G__6569;
continue;
} else {
var temp__5735__auto___6570__$1 = cljs.core.seq.call(null,seq__6509_6561);
if(temp__5735__auto___6570__$1){
var seq__6509_6571__$1 = temp__5735__auto___6570__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6509_6571__$1)){
var c__4461__auto___6572 = cljs.core.chunk_first.call(null,seq__6509_6571__$1);
var G__6573 = cljs.core.chunk_rest.call(null,seq__6509_6571__$1);
var G__6574 = c__4461__auto___6572;
var G__6575 = cljs.core.count.call(null,c__4461__auto___6572);
var G__6576 = (0);
seq__6509_6561 = G__6573;
chunk__6510_6562 = G__6574;
count__6511_6563 = G__6575;
i__6512_6564 = G__6576;
continue;
} else {
var test_6577 = cljs.core.first.call(null,seq__6509_6571__$1);
cljs.compiler.emitln.call(null,"case ",test_6577,":");


var G__6578 = cljs.core.next.call(null,seq__6509_6571__$1);
var G__6579 = null;
var G__6580 = (0);
var G__6581 = (0);
seq__6509_6561 = G__6578;
chunk__6510_6562 = G__6579;
count__6511_6563 = G__6580;
i__6512_6564 = G__6581;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_6560);
} else {
cljs.compiler.emitln.call(null,then_6560);
}

cljs.compiler.emitln.call(null,"break;");


var G__6582 = cljs.core.next.call(null,seq__6493_6549__$1);
var G__6583 = null;
var G__6584 = (0);
var G__6585 = (0);
seq__6493_6513 = G__6582;
chunk__6494_6514 = G__6583;
count__6495_6515 = G__6584;
i__6496_6516 = G__6585;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__6586){
var map__6587 = p__6586;
var map__6587__$1 = (((((!((map__6587 == null))))?(((((map__6587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6587):map__6587);
var throw$ = cljs.core.get.call(null,map__6587__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__6587__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__6590 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__6590,(0),null);
var rstr = cljs.core.nth.call(null,vec__6590,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__6590,fstr,rstr,ret_t,axstr){
return (function (p1__6589_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__6589_SHARP_);
});})(idx,vec__6590,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__6593 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6593),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__6593;
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
return (function (p1__6594_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__6594_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__6595 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__6596 = cljs.core.seq.call(null,vec__6595);
var first__6597 = cljs.core.first.call(null,seq__6596);
var seq__6596__$1 = cljs.core.next.call(null,seq__6596);
var p = first__6597;
var first__6597__$1 = cljs.core.first.call(null,seq__6596__$1);
var seq__6596__$2 = cljs.core.next.call(null,seq__6596__$1);
var ts = first__6597__$1;
var first__6597__$2 = cljs.core.first.call(null,seq__6596__$2);
var seq__6596__$3 = cljs.core.next.call(null,seq__6596__$2);
var n = first__6597__$2;
var xs = seq__6596__$3;
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
var vec__6598 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__6599 = cljs.core.seq.call(null,vec__6598);
var first__6600 = cljs.core.first.call(null,seq__6599);
var seq__6599__$1 = cljs.core.next.call(null,seq__6599);
var p = first__6600;
var first__6600__$1 = cljs.core.first.call(null,seq__6599__$1);
var seq__6599__$2 = cljs.core.next.call(null,seq__6599__$1);
var ts = first__6600__$1;
var xs = seq__6599__$2;
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
var G__6603 = arguments.length;
switch (G__6603) {
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
var vec__6611 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__6601_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__6601_SHARP_);
} else {
return p1__6601_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__6612 = cljs.core.seq.call(null,vec__6611);
var first__6613 = cljs.core.first.call(null,seq__6612);
var seq__6612__$1 = cljs.core.next.call(null,seq__6612);
var x = first__6613;
var ys = seq__6612__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__6614 = cljs.core.seq.call(null,ys);
var chunk__6615 = null;
var count__6616 = (0);
var i__6617 = (0);
while(true){
if((i__6617 < count__6616)){
var next_line = cljs.core._nth.call(null,chunk__6615,i__6617);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__6623 = seq__6614;
var G__6624 = chunk__6615;
var G__6625 = count__6616;
var G__6626 = (i__6617 + (1));
seq__6614 = G__6623;
chunk__6615 = G__6624;
count__6616 = G__6625;
i__6617 = G__6626;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__6614);
if(temp__5735__auto__){
var seq__6614__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6614__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__6614__$1);
var G__6627 = cljs.core.chunk_rest.call(null,seq__6614__$1);
var G__6628 = c__4461__auto__;
var G__6629 = cljs.core.count.call(null,c__4461__auto__);
var G__6630 = (0);
seq__6614 = G__6627;
chunk__6615 = G__6628;
count__6616 = G__6629;
i__6617 = G__6630;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__6614__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__6631 = cljs.core.next.call(null,seq__6614__$1);
var G__6632 = null;
var G__6633 = (0);
var G__6634 = (0);
seq__6614 = G__6631;
chunk__6615 = G__6632;
count__6616 = G__6633;
i__6617 = G__6634;
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

var seq__6618_6635 = cljs.core.seq.call(null,docs__$2);
var chunk__6619_6636 = null;
var count__6620_6637 = (0);
var i__6621_6638 = (0);
while(true){
if((i__6621_6638 < count__6620_6637)){
var e_6639 = cljs.core._nth.call(null,chunk__6619_6636,i__6621_6638);
if(cljs.core.truth_(e_6639)){
print_comment_lines.call(null,e_6639);
} else {
}


var G__6640 = seq__6618_6635;
var G__6641 = chunk__6619_6636;
var G__6642 = count__6620_6637;
var G__6643 = (i__6621_6638 + (1));
seq__6618_6635 = G__6640;
chunk__6619_6636 = G__6641;
count__6620_6637 = G__6642;
i__6621_6638 = G__6643;
continue;
} else {
var temp__5735__auto___6644 = cljs.core.seq.call(null,seq__6618_6635);
if(temp__5735__auto___6644){
var seq__6618_6645__$1 = temp__5735__auto___6644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6618_6645__$1)){
var c__4461__auto___6646 = cljs.core.chunk_first.call(null,seq__6618_6645__$1);
var G__6647 = cljs.core.chunk_rest.call(null,seq__6618_6645__$1);
var G__6648 = c__4461__auto___6646;
var G__6649 = cljs.core.count.call(null,c__4461__auto___6646);
var G__6650 = (0);
seq__6618_6635 = G__6647;
chunk__6619_6636 = G__6648;
count__6620_6637 = G__6649;
i__6621_6638 = G__6650;
continue;
} else {
var e_6651 = cljs.core.first.call(null,seq__6618_6645__$1);
if(cljs.core.truth_(e_6651)){
print_comment_lines.call(null,e_6651);
} else {
}


var G__6652 = cljs.core.next.call(null,seq__6618_6645__$1);
var G__6653 = null;
var G__6654 = (0);
var G__6655 = (0);
seq__6618_6635 = G__6652;
chunk__6619_6636 = G__6653;
count__6620_6637 = G__6654;
i__6621_6638 = G__6655;
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
return (function (p1__6657_SHARP_){
return goog.string.startsWith(p1__6657_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__6658){
var map__6659 = p__6658;
var map__6659__$1 = (((((!((map__6659 == null))))?(((((map__6659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6659):map__6659);
var doc = cljs.core.get.call(null,map__6659__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__6659__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__6659__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__6659__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__6659__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__6659__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__6659__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__6659__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__6659__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__6661){
var map__6662 = p__6661;
var map__6662__$1 = (((((!((map__6662 == null))))?(((((map__6662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6662):map__6662);
var name = cljs.core.get.call(null,map__6662__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__6662__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__6662__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__6664_6682 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__6665_6683 = null;
var count__6666_6684 = (0);
var i__6667_6685 = (0);
while(true){
if((i__6667_6685 < count__6666_6684)){
var vec__6668_6686 = cljs.core._nth.call(null,chunk__6665_6683,i__6667_6685);
var i_6687 = cljs.core.nth.call(null,vec__6668_6686,(0),null);
var param_6688 = cljs.core.nth.call(null,vec__6668_6686,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_6688);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__6689 = seq__6664_6682;
var G__6690 = chunk__6665_6683;
var G__6691 = count__6666_6684;
var G__6692 = (i__6667_6685 + (1));
seq__6664_6682 = G__6689;
chunk__6665_6683 = G__6690;
count__6666_6684 = G__6691;
i__6667_6685 = G__6692;
continue;
} else {
var temp__5735__auto___6693 = cljs.core.seq.call(null,seq__6664_6682);
if(temp__5735__auto___6693){
var seq__6664_6694__$1 = temp__5735__auto___6693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6664_6694__$1)){
var c__4461__auto___6695 = cljs.core.chunk_first.call(null,seq__6664_6694__$1);
var G__6696 = cljs.core.chunk_rest.call(null,seq__6664_6694__$1);
var G__6697 = c__4461__auto___6695;
var G__6698 = cljs.core.count.call(null,c__4461__auto___6695);
var G__6699 = (0);
seq__6664_6682 = G__6696;
chunk__6665_6683 = G__6697;
count__6666_6684 = G__6698;
i__6667_6685 = G__6699;
continue;
} else {
var vec__6671_6700 = cljs.core.first.call(null,seq__6664_6694__$1);
var i_6701 = cljs.core.nth.call(null,vec__6671_6700,(0),null);
var param_6702 = cljs.core.nth.call(null,vec__6671_6700,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_6702);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__6703 = cljs.core.next.call(null,seq__6664_6694__$1);
var G__6704 = null;
var G__6705 = (0);
var G__6706 = (0);
seq__6664_6682 = G__6703;
chunk__6665_6683 = G__6704;
count__6666_6684 = G__6705;
i__6667_6685 = G__6706;
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

var seq__6674_6707 = cljs.core.seq.call(null,params);
var chunk__6675_6708 = null;
var count__6676_6709 = (0);
var i__6677_6710 = (0);
while(true){
if((i__6677_6710 < count__6676_6709)){
var param_6711 = cljs.core._nth.call(null,chunk__6675_6708,i__6677_6710);
cljs.compiler.emit.call(null,param_6711);

if(cljs.core._EQ_.call(null,param_6711,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__6712 = seq__6674_6707;
var G__6713 = chunk__6675_6708;
var G__6714 = count__6676_6709;
var G__6715 = (i__6677_6710 + (1));
seq__6674_6707 = G__6712;
chunk__6675_6708 = G__6713;
count__6676_6709 = G__6714;
i__6677_6710 = G__6715;
continue;
} else {
var temp__5735__auto___6716 = cljs.core.seq.call(null,seq__6674_6707);
if(temp__5735__auto___6716){
var seq__6674_6717__$1 = temp__5735__auto___6716;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6674_6717__$1)){
var c__4461__auto___6718 = cljs.core.chunk_first.call(null,seq__6674_6717__$1);
var G__6719 = cljs.core.chunk_rest.call(null,seq__6674_6717__$1);
var G__6720 = c__4461__auto___6718;
var G__6721 = cljs.core.count.call(null,c__4461__auto___6718);
var G__6722 = (0);
seq__6674_6707 = G__6719;
chunk__6675_6708 = G__6720;
count__6676_6709 = G__6721;
i__6677_6710 = G__6722;
continue;
} else {
var param_6723 = cljs.core.first.call(null,seq__6674_6717__$1);
cljs.compiler.emit.call(null,param_6723);

if(cljs.core._EQ_.call(null,param_6723,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__6724 = cljs.core.next.call(null,seq__6674_6717__$1);
var G__6725 = null;
var G__6726 = (0);
var G__6727 = (0);
seq__6674_6707 = G__6724;
chunk__6675_6708 = G__6725;
count__6676_6709 = G__6726;
i__6677_6710 = G__6727;
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

var seq__6678_6728 = cljs.core.seq.call(null,params);
var chunk__6679_6729 = null;
var count__6680_6730 = (0);
var i__6681_6731 = (0);
while(true){
if((i__6681_6731 < count__6680_6730)){
var param_6732 = cljs.core._nth.call(null,chunk__6679_6729,i__6681_6731);
cljs.compiler.emit.call(null,param_6732);

if(cljs.core._EQ_.call(null,param_6732,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__6733 = seq__6678_6728;
var G__6734 = chunk__6679_6729;
var G__6735 = count__6680_6730;
var G__6736 = (i__6681_6731 + (1));
seq__6678_6728 = G__6733;
chunk__6679_6729 = G__6734;
count__6680_6730 = G__6735;
i__6681_6731 = G__6736;
continue;
} else {
var temp__5735__auto___6737 = cljs.core.seq.call(null,seq__6678_6728);
if(temp__5735__auto___6737){
var seq__6678_6738__$1 = temp__5735__auto___6737;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6678_6738__$1)){
var c__4461__auto___6739 = cljs.core.chunk_first.call(null,seq__6678_6738__$1);
var G__6740 = cljs.core.chunk_rest.call(null,seq__6678_6738__$1);
var G__6741 = c__4461__auto___6739;
var G__6742 = cljs.core.count.call(null,c__4461__auto___6739);
var G__6743 = (0);
seq__6678_6728 = G__6740;
chunk__6679_6729 = G__6741;
count__6680_6730 = G__6742;
i__6681_6731 = G__6743;
continue;
} else {
var param_6744 = cljs.core.first.call(null,seq__6678_6738__$1);
cljs.compiler.emit.call(null,param_6744);

if(cljs.core._EQ_.call(null,param_6744,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__6745 = cljs.core.next.call(null,seq__6678_6738__$1);
var G__6746 = null;
var G__6747 = (0);
var G__6748 = (0);
seq__6678_6728 = G__6745;
chunk__6679_6729 = G__6746;
count__6680_6730 = G__6747;
i__6681_6731 = G__6748;
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
var seq__6749 = cljs.core.seq.call(null,params);
var chunk__6750 = null;
var count__6751 = (0);
var i__6752 = (0);
while(true){
if((i__6752 < count__6751)){
var param = cljs.core._nth.call(null,chunk__6750,i__6752);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__6753 = seq__6749;
var G__6754 = chunk__6750;
var G__6755 = count__6751;
var G__6756 = (i__6752 + (1));
seq__6749 = G__6753;
chunk__6750 = G__6754;
count__6751 = G__6755;
i__6752 = G__6756;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__6749);
if(temp__5735__auto__){
var seq__6749__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6749__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__6749__$1);
var G__6757 = cljs.core.chunk_rest.call(null,seq__6749__$1);
var G__6758 = c__4461__auto__;
var G__6759 = cljs.core.count.call(null,c__4461__auto__);
var G__6760 = (0);
seq__6749 = G__6757;
chunk__6750 = G__6758;
count__6751 = G__6759;
i__6752 = G__6760;
continue;
} else {
var param = cljs.core.first.call(null,seq__6749__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__6761 = cljs.core.next.call(null,seq__6749__$1);
var G__6762 = null;
var G__6763 = (0);
var G__6764 = (0);
seq__6749 = G__6761;
chunk__6750 = G__6762;
count__6751 = G__6763;
i__6752 = G__6764;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__6765){
var map__6766 = p__6765;
var map__6766__$1 = (((((!((map__6766 == null))))?(((((map__6766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6766):map__6766);
var expr = cljs.core.get.call(null,map__6766__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__6766__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__6766__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__6766__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__6766__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__6766__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__5064__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__6768){
var map__6769 = p__6768;
var map__6769__$1 = (((((!((map__6769 == null))))?(((((map__6769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6769):map__6769);
var f = map__6769__$1;
var expr = cljs.core.get.call(null,map__6769__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__6769__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__6769__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__6769__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__6769__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__6769__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__6769__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__6769__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__5064__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_6779__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_6780 = cljs.compiler.munge.call(null,name_6779__$1);
var delegate_name_6781 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_6780),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_6781," = function (");

var seq__6771_6782 = cljs.core.seq.call(null,params);
var chunk__6772_6783 = null;
var count__6773_6784 = (0);
var i__6774_6785 = (0);
while(true){
if((i__6774_6785 < count__6773_6784)){
var param_6786 = cljs.core._nth.call(null,chunk__6772_6783,i__6774_6785);
cljs.compiler.emit.call(null,param_6786);

if(cljs.core._EQ_.call(null,param_6786,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__6787 = seq__6771_6782;
var G__6788 = chunk__6772_6783;
var G__6789 = count__6773_6784;
var G__6790 = (i__6774_6785 + (1));
seq__6771_6782 = G__6787;
chunk__6772_6783 = G__6788;
count__6773_6784 = G__6789;
i__6774_6785 = G__6790;
continue;
} else {
var temp__5735__auto___6791 = cljs.core.seq.call(null,seq__6771_6782);
if(temp__5735__auto___6791){
var seq__6771_6792__$1 = temp__5735__auto___6791;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6771_6792__$1)){
var c__4461__auto___6793 = cljs.core.chunk_first.call(null,seq__6771_6792__$1);
var G__6794 = cljs.core.chunk_rest.call(null,seq__6771_6792__$1);
var G__6795 = c__4461__auto___6793;
var G__6796 = cljs.core.count.call(null,c__4461__auto___6793);
var G__6797 = (0);
seq__6771_6782 = G__6794;
chunk__6772_6783 = G__6795;
count__6773_6784 = G__6796;
i__6774_6785 = G__6797;
continue;
} else {
var param_6798 = cljs.core.first.call(null,seq__6771_6792__$1);
cljs.compiler.emit.call(null,param_6798);

if(cljs.core._EQ_.call(null,param_6798,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__6799 = cljs.core.next.call(null,seq__6771_6792__$1);
var G__6800 = null;
var G__6801 = (0);
var G__6802 = (0);
seq__6771_6782 = G__6799;
chunk__6772_6783 = G__6800;
count__6773_6784 = G__6801;
i__6774_6785 = G__6802;
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

cljs.compiler.emitln.call(null,"var ",mname_6780," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_6803 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_6803,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_6781,".call(this,");

var seq__6775_6804 = cljs.core.seq.call(null,params);
var chunk__6776_6805 = null;
var count__6777_6806 = (0);
var i__6778_6807 = (0);
while(true){
if((i__6778_6807 < count__6777_6806)){
var param_6808 = cljs.core._nth.call(null,chunk__6776_6805,i__6778_6807);
cljs.compiler.emit.call(null,param_6808);

if(cljs.core._EQ_.call(null,param_6808,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__6809 = seq__6775_6804;
var G__6810 = chunk__6776_6805;
var G__6811 = count__6777_6806;
var G__6812 = (i__6778_6807 + (1));
seq__6775_6804 = G__6809;
chunk__6776_6805 = G__6810;
count__6777_6806 = G__6811;
i__6778_6807 = G__6812;
continue;
} else {
var temp__5735__auto___6813 = cljs.core.seq.call(null,seq__6775_6804);
if(temp__5735__auto___6813){
var seq__6775_6814__$1 = temp__5735__auto___6813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6775_6814__$1)){
var c__4461__auto___6815 = cljs.core.chunk_first.call(null,seq__6775_6814__$1);
var G__6816 = cljs.core.chunk_rest.call(null,seq__6775_6814__$1);
var G__6817 = c__4461__auto___6815;
var G__6818 = cljs.core.count.call(null,c__4461__auto___6815);
var G__6819 = (0);
seq__6775_6804 = G__6816;
chunk__6776_6805 = G__6817;
count__6777_6806 = G__6818;
i__6778_6807 = G__6819;
continue;
} else {
var param_6820 = cljs.core.first.call(null,seq__6775_6814__$1);
cljs.compiler.emit.call(null,param_6820);

if(cljs.core._EQ_.call(null,param_6820,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__6821 = cljs.core.next.call(null,seq__6775_6814__$1);
var G__6822 = null;
var G__6823 = (0);
var G__6824 = (0);
seq__6775_6804 = G__6821;
chunk__6776_6805 = G__6822;
count__6777_6806 = G__6823;
i__6778_6807 = G__6824;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_6780,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_6780,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_6779__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_6780,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_6781,";");

cljs.compiler.emitln.call(null,"return ",mname_6780,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__6828){
var map__6829 = p__6828;
var map__6829__$1 = (((((!((map__6829 == null))))?(((((map__6829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6829):map__6829);
var variadic = cljs.core.get.call(null,map__6829__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__6829__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__6829__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__6829__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__6829__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__6829__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__6829__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__6829,map__6829__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__6825_SHARP_){
var and__4036__auto__ = p1__6825_SHARP_;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__6825_SHARP_));
} else {
return and__4036__auto__;
}
});})(map__6829,map__6829__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_6864__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_6865 = cljs.compiler.munge.call(null,name_6864__$1);
var maxparams_6866 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_6867 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_6864__$1,mname_6865,maxparams_6866,loop_locals,map__6829,map__6829__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_6865),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_6864__$1,mname_6865,maxparams_6866,loop_locals,map__6829,map__6829__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_6868 = cljs.core.sort_by.call(null,((function (name_6864__$1,mname_6865,maxparams_6866,mmap_6867,loop_locals,map__6829,map__6829__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__6826_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__6826_SHARP_)));
});})(name_6864__$1,mname_6865,maxparams_6866,mmap_6867,loop_locals,map__6829,map__6829__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_6867));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_6865," = null;");

var seq__6831_6869 = cljs.core.seq.call(null,ms_6868);
var chunk__6832_6870 = null;
var count__6833_6871 = (0);
var i__6834_6872 = (0);
while(true){
if((i__6834_6872 < count__6833_6871)){
var vec__6835_6873 = cljs.core._nth.call(null,chunk__6832_6870,i__6834_6872);
var n_6874 = cljs.core.nth.call(null,vec__6835_6873,(0),null);
var meth_6875 = cljs.core.nth.call(null,vec__6835_6873,(1),null);
cljs.compiler.emits.call(null,"var ",n_6874," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_6875))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_6875);
} else {
cljs.compiler.emit_fn_method.call(null,meth_6875);
}

cljs.compiler.emitln.call(null,";");


var G__6876 = seq__6831_6869;
var G__6877 = chunk__6832_6870;
var G__6878 = count__6833_6871;
var G__6879 = (i__6834_6872 + (1));
seq__6831_6869 = G__6876;
chunk__6832_6870 = G__6877;
count__6833_6871 = G__6878;
i__6834_6872 = G__6879;
continue;
} else {
var temp__5735__auto___6880 = cljs.core.seq.call(null,seq__6831_6869);
if(temp__5735__auto___6880){
var seq__6831_6881__$1 = temp__5735__auto___6880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6831_6881__$1)){
var c__4461__auto___6882 = cljs.core.chunk_first.call(null,seq__6831_6881__$1);
var G__6883 = cljs.core.chunk_rest.call(null,seq__6831_6881__$1);
var G__6884 = c__4461__auto___6882;
var G__6885 = cljs.core.count.call(null,c__4461__auto___6882);
var G__6886 = (0);
seq__6831_6869 = G__6883;
chunk__6832_6870 = G__6884;
count__6833_6871 = G__6885;
i__6834_6872 = G__6886;
continue;
} else {
var vec__6838_6887 = cljs.core.first.call(null,seq__6831_6881__$1);
var n_6888 = cljs.core.nth.call(null,vec__6838_6887,(0),null);
var meth_6889 = cljs.core.nth.call(null,vec__6838_6887,(1),null);
cljs.compiler.emits.call(null,"var ",n_6888," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_6889))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_6889);
} else {
cljs.compiler.emit_fn_method.call(null,meth_6889);
}

cljs.compiler.emitln.call(null,";");


var G__6890 = cljs.core.next.call(null,seq__6831_6881__$1);
var G__6891 = null;
var G__6892 = (0);
var G__6893 = (0);
seq__6831_6869 = G__6890;
chunk__6832_6870 = G__6891;
count__6833_6871 = G__6892;
i__6834_6872 = G__6893;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_6865," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_6866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_6866)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_6866));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__6841_6894 = cljs.core.seq.call(null,ms_6868);
var chunk__6842_6895 = null;
var count__6843_6896 = (0);
var i__6844_6897 = (0);
while(true){
if((i__6844_6897 < count__6843_6896)){
var vec__6845_6898 = cljs.core._nth.call(null,chunk__6842_6895,i__6844_6897);
var n_6899 = cljs.core.nth.call(null,vec__6845_6898,(0),null);
var meth_6900 = cljs.core.nth.call(null,vec__6845_6898,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_6900))){
cljs.compiler.emitln.call(null,"default:");

var restarg_6901 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_6901," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_6902 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_6901," = new cljs.core.IndexedSeq(",a_6902,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_6899,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_6866)),(((cljs.core.count.call(null,maxparams_6866) > (1)))?", ":null),restarg_6901,");");
} else {
var pcnt_6903 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_6900));
cljs.compiler.emitln.call(null,"case ",pcnt_6903,":");

cljs.compiler.emitln.call(null,"return ",n_6899,".call(this",(((pcnt_6903 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_6903,maxparams_6866)),null,(1),null)),(2),null))),");");
}


var G__6904 = seq__6841_6894;
var G__6905 = chunk__6842_6895;
var G__6906 = count__6843_6896;
var G__6907 = (i__6844_6897 + (1));
seq__6841_6894 = G__6904;
chunk__6842_6895 = G__6905;
count__6843_6896 = G__6906;
i__6844_6897 = G__6907;
continue;
} else {
var temp__5735__auto___6908 = cljs.core.seq.call(null,seq__6841_6894);
if(temp__5735__auto___6908){
var seq__6841_6909__$1 = temp__5735__auto___6908;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6841_6909__$1)){
var c__4461__auto___6910 = cljs.core.chunk_first.call(null,seq__6841_6909__$1);
var G__6911 = cljs.core.chunk_rest.call(null,seq__6841_6909__$1);
var G__6912 = c__4461__auto___6910;
var G__6913 = cljs.core.count.call(null,c__4461__auto___6910);
var G__6914 = (0);
seq__6841_6894 = G__6911;
chunk__6842_6895 = G__6912;
count__6843_6896 = G__6913;
i__6844_6897 = G__6914;
continue;
} else {
var vec__6848_6915 = cljs.core.first.call(null,seq__6841_6909__$1);
var n_6916 = cljs.core.nth.call(null,vec__6848_6915,(0),null);
var meth_6917 = cljs.core.nth.call(null,vec__6848_6915,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_6917))){
cljs.compiler.emitln.call(null,"default:");

var restarg_6918 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_6918," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_6919 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_6918," = new cljs.core.IndexedSeq(",a_6919,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_6916,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_6866)),(((cljs.core.count.call(null,maxparams_6866) > (1)))?", ":null),restarg_6918,");");
} else {
var pcnt_6920 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_6917));
cljs.compiler.emitln.call(null,"case ",pcnt_6920,":");

cljs.compiler.emitln.call(null,"return ",n_6916,".call(this",(((pcnt_6920 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_6920,maxparams_6866)),null,(1),null)),(2),null))),");");
}


var G__6921 = cljs.core.next.call(null,seq__6841_6909__$1);
var G__6922 = null;
var G__6923 = (0);
var G__6924 = (0);
seq__6841_6894 = G__6921;
chunk__6842_6895 = G__6922;
count__6843_6896 = G__6923;
i__6844_6897 = G__6924;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_6925 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_6868)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_6925,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_6865,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_6865,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_6864__$1,mname_6865,maxparams_6866,mmap_6867,ms_6868,loop_locals,map__6829,map__6829__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__6827_SHARP_){
var vec__6851 = p1__6827_SHARP_;
var n = cljs.core.nth.call(null,vec__6851,(0),null);
var m = cljs.core.nth.call(null,vec__6851,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_6864__$1,mname_6865,maxparams_6866,mmap_6867,ms_6868,loop_locals,map__6829,map__6829__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_6868),".cljs$lang$applyTo;");
} else {
}

var seq__6854_6926 = cljs.core.seq.call(null,ms_6868);
var chunk__6855_6927 = null;
var count__6856_6928 = (0);
var i__6857_6929 = (0);
while(true){
if((i__6857_6929 < count__6856_6928)){
var vec__6858_6930 = cljs.core._nth.call(null,chunk__6855_6927,i__6857_6929);
var n_6931 = cljs.core.nth.call(null,vec__6858_6930,(0),null);
var meth_6932 = cljs.core.nth.call(null,vec__6858_6930,(1),null);
var c_6933 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_6932));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_6932))){
cljs.compiler.emitln.call(null,mname_6865,".cljs$core$IFn$_invoke$arity$variadic = ",n_6931,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_6865,".cljs$core$IFn$_invoke$arity$",c_6933," = ",n_6931,";");
}


var G__6934 = seq__6854_6926;
var G__6935 = chunk__6855_6927;
var G__6936 = count__6856_6928;
var G__6937 = (i__6857_6929 + (1));
seq__6854_6926 = G__6934;
chunk__6855_6927 = G__6935;
count__6856_6928 = G__6936;
i__6857_6929 = G__6937;
continue;
} else {
var temp__5735__auto___6938 = cljs.core.seq.call(null,seq__6854_6926);
if(temp__5735__auto___6938){
var seq__6854_6939__$1 = temp__5735__auto___6938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6854_6939__$1)){
var c__4461__auto___6940 = cljs.core.chunk_first.call(null,seq__6854_6939__$1);
var G__6941 = cljs.core.chunk_rest.call(null,seq__6854_6939__$1);
var G__6942 = c__4461__auto___6940;
var G__6943 = cljs.core.count.call(null,c__4461__auto___6940);
var G__6944 = (0);
seq__6854_6926 = G__6941;
chunk__6855_6927 = G__6942;
count__6856_6928 = G__6943;
i__6857_6929 = G__6944;
continue;
} else {
var vec__6861_6945 = cljs.core.first.call(null,seq__6854_6939__$1);
var n_6946 = cljs.core.nth.call(null,vec__6861_6945,(0),null);
var meth_6947 = cljs.core.nth.call(null,vec__6861_6945,(1),null);
var c_6948 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_6947));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_6947))){
cljs.compiler.emitln.call(null,mname_6865,".cljs$core$IFn$_invoke$arity$variadic = ",n_6946,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_6865,".cljs$core$IFn$_invoke$arity$",c_6948," = ",n_6946,";");
}


var G__6949 = cljs.core.next.call(null,seq__6854_6939__$1);
var G__6950 = null;
var G__6951 = (0);
var G__6952 = (0);
seq__6854_6926 = G__6949;
chunk__6855_6927 = G__6950;
count__6856_6928 = G__6951;
i__6857_6929 = G__6952;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_6865,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__6953){
var map__6954 = p__6953;
var map__6954__$1 = (((((!((map__6954 == null))))?(((((map__6954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6954):map__6954);
var statements = cljs.core.get.call(null,map__6954__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__6954__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__6954__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__6956_6960 = cljs.core.seq.call(null,statements);
var chunk__6957_6961 = null;
var count__6958_6962 = (0);
var i__6959_6963 = (0);
while(true){
if((i__6959_6963 < count__6958_6962)){
var s_6964 = cljs.core._nth.call(null,chunk__6957_6961,i__6959_6963);
cljs.compiler.emitln.call(null,s_6964);


var G__6965 = seq__6956_6960;
var G__6966 = chunk__6957_6961;
var G__6967 = count__6958_6962;
var G__6968 = (i__6959_6963 + (1));
seq__6956_6960 = G__6965;
chunk__6957_6961 = G__6966;
count__6958_6962 = G__6967;
i__6959_6963 = G__6968;
continue;
} else {
var temp__5735__auto___6969 = cljs.core.seq.call(null,seq__6956_6960);
if(temp__5735__auto___6969){
var seq__6956_6970__$1 = temp__5735__auto___6969;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6956_6970__$1)){
var c__4461__auto___6971 = cljs.core.chunk_first.call(null,seq__6956_6970__$1);
var G__6972 = cljs.core.chunk_rest.call(null,seq__6956_6970__$1);
var G__6973 = c__4461__auto___6971;
var G__6974 = cljs.core.count.call(null,c__4461__auto___6971);
var G__6975 = (0);
seq__6956_6960 = G__6972;
chunk__6957_6961 = G__6973;
count__6958_6962 = G__6974;
i__6959_6963 = G__6975;
continue;
} else {
var s_6976 = cljs.core.first.call(null,seq__6956_6970__$1);
cljs.compiler.emitln.call(null,s_6976);


var G__6977 = cljs.core.next.call(null,seq__6956_6970__$1);
var G__6978 = null;
var G__6979 = (0);
var G__6980 = (0);
seq__6956_6960 = G__6977;
chunk__6957_6961 = G__6978;
count__6958_6962 = G__6979;
i__6959_6963 = G__6980;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__6981){
var map__6982 = p__6981;
var map__6982__$1 = (((((!((map__6982 == null))))?(((((map__6982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6982):map__6982);
var try$ = cljs.core.get.call(null,map__6982__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__6982__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__6982__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__6982__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__6982__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__6984,is_loop){
var map__6985 = p__6984;
var map__6985__$1 = (((((!((map__6985 == null))))?(((((map__6985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6985):map__6985);
var expr = cljs.core.get.call(null,map__6985__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__6985__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__6985__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__6987_6997 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__6988_6998 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__6987_6997,context,map__6985,map__6985__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__6987_6997,context,map__6985,map__6985__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__6988_6998;

try{var seq__6989_6999 = cljs.core.seq.call(null,bindings);
var chunk__6990_7000 = null;
var count__6991_7001 = (0);
var i__6992_7002 = (0);
while(true){
if((i__6992_7002 < count__6991_7001)){
var map__6993_7003 = cljs.core._nth.call(null,chunk__6990_7000,i__6992_7002);
var map__6993_7004__$1 = (((((!((map__6993_7003 == null))))?(((((map__6993_7003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6993_7003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6993_7003):map__6993_7003);
var binding_7005 = map__6993_7004__$1;
var init_7006 = cljs.core.get.call(null,map__6993_7004__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_7005);

cljs.compiler.emitln.call(null," = ",init_7006,";");


var G__7007 = seq__6989_6999;
var G__7008 = chunk__6990_7000;
var G__7009 = count__6991_7001;
var G__7010 = (i__6992_7002 + (1));
seq__6989_6999 = G__7007;
chunk__6990_7000 = G__7008;
count__6991_7001 = G__7009;
i__6992_7002 = G__7010;
continue;
} else {
var temp__5735__auto___7011 = cljs.core.seq.call(null,seq__6989_6999);
if(temp__5735__auto___7011){
var seq__6989_7012__$1 = temp__5735__auto___7011;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6989_7012__$1)){
var c__4461__auto___7013 = cljs.core.chunk_first.call(null,seq__6989_7012__$1);
var G__7014 = cljs.core.chunk_rest.call(null,seq__6989_7012__$1);
var G__7015 = c__4461__auto___7013;
var G__7016 = cljs.core.count.call(null,c__4461__auto___7013);
var G__7017 = (0);
seq__6989_6999 = G__7014;
chunk__6990_7000 = G__7015;
count__6991_7001 = G__7016;
i__6992_7002 = G__7017;
continue;
} else {
var map__6995_7018 = cljs.core.first.call(null,seq__6989_7012__$1);
var map__6995_7019__$1 = (((((!((map__6995_7018 == null))))?(((((map__6995_7018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6995_7018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6995_7018):map__6995_7018);
var binding_7020 = map__6995_7019__$1;
var init_7021 = cljs.core.get.call(null,map__6995_7019__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_7020);

cljs.compiler.emitln.call(null," = ",init_7021,";");


var G__7022 = cljs.core.next.call(null,seq__6989_7012__$1);
var G__7023 = null;
var G__7024 = (0);
var G__7025 = (0);
seq__6989_6999 = G__7022;
chunk__6990_7000 = G__7023;
count__6991_7001 = G__7024;
i__6992_7002 = G__7025;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__6987_6997;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__7026){
var map__7027 = p__7026;
var map__7027__$1 = (((((!((map__7027 == null))))?(((((map__7027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7027):map__7027);
var frame = cljs.core.get.call(null,map__7027__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__7027__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__7027__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4518__auto___7029 = cljs.core.count.call(null,exprs);
var i_7030 = (0);
while(true){
if((i_7030 < n__4518__auto___7029)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_7030)," = ",exprs.call(null,i_7030),";");

var G__7031 = (i_7030 + (1));
i_7030 = G__7031;
continue;
} else {
}
break;
}

var n__4518__auto___7032 = cljs.core.count.call(null,exprs);
var i_7033 = (0);
while(true){
if((i_7033 < n__4518__auto___7032)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_7033))," = ",temps.call(null,i_7033),";");

var G__7034 = (i_7033 + (1));
i_7033 = G__7034;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__7035){
var map__7036 = p__7035;
var map__7036__$1 = (((((!((map__7036 == null))))?(((((map__7036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7036):map__7036);
var expr = cljs.core.get.call(null,map__7036__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__7036__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__7036__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__7038_7046 = cljs.core.seq.call(null,bindings);
var chunk__7039_7047 = null;
var count__7040_7048 = (0);
var i__7041_7049 = (0);
while(true){
if((i__7041_7049 < count__7040_7048)){
var map__7042_7050 = cljs.core._nth.call(null,chunk__7039_7047,i__7041_7049);
var map__7042_7051__$1 = (((((!((map__7042_7050 == null))))?(((((map__7042_7050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7042_7050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7042_7050):map__7042_7050);
var binding_7052 = map__7042_7051__$1;
var init_7053 = cljs.core.get.call(null,map__7042_7051__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_7052)," = ",init_7053,";");


var G__7054 = seq__7038_7046;
var G__7055 = chunk__7039_7047;
var G__7056 = count__7040_7048;
var G__7057 = (i__7041_7049 + (1));
seq__7038_7046 = G__7054;
chunk__7039_7047 = G__7055;
count__7040_7048 = G__7056;
i__7041_7049 = G__7057;
continue;
} else {
var temp__5735__auto___7058 = cljs.core.seq.call(null,seq__7038_7046);
if(temp__5735__auto___7058){
var seq__7038_7059__$1 = temp__5735__auto___7058;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7038_7059__$1)){
var c__4461__auto___7060 = cljs.core.chunk_first.call(null,seq__7038_7059__$1);
var G__7061 = cljs.core.chunk_rest.call(null,seq__7038_7059__$1);
var G__7062 = c__4461__auto___7060;
var G__7063 = cljs.core.count.call(null,c__4461__auto___7060);
var G__7064 = (0);
seq__7038_7046 = G__7061;
chunk__7039_7047 = G__7062;
count__7040_7048 = G__7063;
i__7041_7049 = G__7064;
continue;
} else {
var map__7044_7065 = cljs.core.first.call(null,seq__7038_7059__$1);
var map__7044_7066__$1 = (((((!((map__7044_7065 == null))))?(((((map__7044_7065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7044_7065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7044_7065):map__7044_7065);
var binding_7067 = map__7044_7066__$1;
var init_7068 = cljs.core.get.call(null,map__7044_7066__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_7067)," = ",init_7068,";");


var G__7069 = cljs.core.next.call(null,seq__7038_7059__$1);
var G__7070 = null;
var G__7071 = (0);
var G__7072 = (0);
seq__7038_7046 = G__7069;
chunk__7039_7047 = G__7070;
count__7040_7048 = G__7071;
i__7041_7049 = G__7072;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__7075){
var map__7076 = p__7075;
var map__7076__$1 = (((((!((map__7076 == null))))?(((((map__7076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7076):map__7076);
var expr = map__7076__$1;
var f = cljs.core.get.call(null,map__7076__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__7076__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__7076__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__7078 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7076,map__7076__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7076,map__7076__$1,expr,f,args,env){
return (function (p1__7073_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__7073_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7076,map__7076__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7076,map__7076__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7076,map__7076__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7076,map__7076__$1,expr,f,args,env){
return (function (p1__7074_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__7074_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7076,map__7076__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7076,map__7076__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__7078,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__7078,(1),null);
var env__5064__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_7081 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_7081,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_7082 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_7082,args)),(((mfa_7082 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_7082,args)),"], 0))");
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
var fprop_7083 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_7083," ? ",f__$1,fprop_7083,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_7083," ? ",f__$1,fprop_7083,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__7084){
var map__7085 = p__7084;
var map__7085__$1 = (((((!((map__7085 == null))))?(((((map__7085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7085):map__7085);
var ctor = cljs.core.get.call(null,map__7085__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__7085__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__7085__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5064__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__7087){
var map__7088 = p__7087;
var map__7088__$1 = (((((!((map__7088 == null))))?(((((map__7088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7088):map__7088);
var target = cljs.core.get.call(null,map__7088__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__7088__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__7088__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5064__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
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
var map__7090 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__7090__$1 = (((((!((map__7090 == null))))?(((((map__7090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7090):map__7090);
var options = cljs.core.get.call(null,map__7090__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__7090__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__7091 = options;
var map__7091__$1 = (((((!((map__7091 == null))))?(((((map__7091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7091):map__7091);
var target = cljs.core.get.call(null,map__7091__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__7091__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__7092 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__7097 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__7097__$1 = (((((!((map__7097 == null))))?(((((map__7097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7097):map__7097);
var node_libs = cljs.core.get.call(null,map__7097__$1,true);
var libs_to_load = cljs.core.get.call(null,map__7097__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__7092,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__7092,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__7099_7115 = cljs.core.seq.call(null,libs_to_load);
var chunk__7100_7116 = null;
var count__7101_7117 = (0);
var i__7102_7118 = (0);
while(true){
if((i__7102_7118 < count__7101_7117)){
var lib_7119 = cljs.core._nth.call(null,chunk__7100_7116,i__7102_7118);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_7119)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7119),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7119),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7119),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7119),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_7119,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7119),"');");
}

}
}
}


var G__7120 = seq__7099_7115;
var G__7121 = chunk__7100_7116;
var G__7122 = count__7101_7117;
var G__7123 = (i__7102_7118 + (1));
seq__7099_7115 = G__7120;
chunk__7100_7116 = G__7121;
count__7101_7117 = G__7122;
i__7102_7118 = G__7123;
continue;
} else {
var temp__5735__auto___7124 = cljs.core.seq.call(null,seq__7099_7115);
if(temp__5735__auto___7124){
var seq__7099_7125__$1 = temp__5735__auto___7124;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7099_7125__$1)){
var c__4461__auto___7126 = cljs.core.chunk_first.call(null,seq__7099_7125__$1);
var G__7127 = cljs.core.chunk_rest.call(null,seq__7099_7125__$1);
var G__7128 = c__4461__auto___7126;
var G__7129 = cljs.core.count.call(null,c__4461__auto___7126);
var G__7130 = (0);
seq__7099_7115 = G__7127;
chunk__7100_7116 = G__7128;
count__7101_7117 = G__7129;
i__7102_7118 = G__7130;
continue;
} else {
var lib_7131 = cljs.core.first.call(null,seq__7099_7125__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_7131)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7131),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7131),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7131),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7131),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_7131,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7131),"');");
}

}
}
}


var G__7132 = cljs.core.next.call(null,seq__7099_7125__$1);
var G__7133 = null;
var G__7134 = (0);
var G__7135 = (0);
seq__7099_7115 = G__7132;
chunk__7100_7116 = G__7133;
count__7101_7117 = G__7134;
i__7102_7118 = G__7135;
continue;
}
} else {
}
}
break;
}

var seq__7103_7136 = cljs.core.seq.call(null,node_libs);
var chunk__7104_7137 = null;
var count__7105_7138 = (0);
var i__7106_7139 = (0);
while(true){
if((i__7106_7139 < count__7105_7138)){
var lib_7140 = cljs.core._nth.call(null,chunk__7104_7137,i__7106_7139);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_7140)," = require('",lib_7140,"');");


var G__7141 = seq__7103_7136;
var G__7142 = chunk__7104_7137;
var G__7143 = count__7105_7138;
var G__7144 = (i__7106_7139 + (1));
seq__7103_7136 = G__7141;
chunk__7104_7137 = G__7142;
count__7105_7138 = G__7143;
i__7106_7139 = G__7144;
continue;
} else {
var temp__5735__auto___7145 = cljs.core.seq.call(null,seq__7103_7136);
if(temp__5735__auto___7145){
var seq__7103_7146__$1 = temp__5735__auto___7145;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7103_7146__$1)){
var c__4461__auto___7147 = cljs.core.chunk_first.call(null,seq__7103_7146__$1);
var G__7148 = cljs.core.chunk_rest.call(null,seq__7103_7146__$1);
var G__7149 = c__4461__auto___7147;
var G__7150 = cljs.core.count.call(null,c__4461__auto___7147);
var G__7151 = (0);
seq__7103_7136 = G__7148;
chunk__7104_7137 = G__7149;
count__7105_7138 = G__7150;
i__7106_7139 = G__7151;
continue;
} else {
var lib_7152 = cljs.core.first.call(null,seq__7103_7146__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_7152)," = require('",lib_7152,"');");


var G__7153 = cljs.core.next.call(null,seq__7103_7146__$1);
var G__7154 = null;
var G__7155 = (0);
var G__7156 = (0);
seq__7103_7136 = G__7153;
chunk__7104_7137 = G__7154;
count__7105_7138 = G__7155;
i__7106_7139 = G__7156;
continue;
}
} else {
}
}
break;
}

var seq__7107_7157 = cljs.core.seq.call(null,global_exports_libs);
var chunk__7108_7158 = null;
var count__7109_7159 = (0);
var i__7110_7160 = (0);
while(true){
if((i__7110_7160 < count__7109_7159)){
var lib_7161 = cljs.core._nth.call(null,chunk__7108_7158,i__7110_7160);
var map__7111_7162 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_7161));
var map__7111_7163__$1 = (((((!((map__7111_7162 == null))))?(((((map__7111_7162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7111_7162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7111_7162):map__7111_7162);
var global_exports_7164 = cljs.core.get.call(null,map__7111_7163__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_7164,lib_7161);


var G__7165 = seq__7107_7157;
var G__7166 = chunk__7108_7158;
var G__7167 = count__7109_7159;
var G__7168 = (i__7110_7160 + (1));
seq__7107_7157 = G__7165;
chunk__7108_7158 = G__7166;
count__7109_7159 = G__7167;
i__7110_7160 = G__7168;
continue;
} else {
var temp__5735__auto___7169 = cljs.core.seq.call(null,seq__7107_7157);
if(temp__5735__auto___7169){
var seq__7107_7170__$1 = temp__5735__auto___7169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7107_7170__$1)){
var c__4461__auto___7171 = cljs.core.chunk_first.call(null,seq__7107_7170__$1);
var G__7172 = cljs.core.chunk_rest.call(null,seq__7107_7170__$1);
var G__7173 = c__4461__auto___7171;
var G__7174 = cljs.core.count.call(null,c__4461__auto___7171);
var G__7175 = (0);
seq__7107_7157 = G__7172;
chunk__7108_7158 = G__7173;
count__7109_7159 = G__7174;
i__7110_7160 = G__7175;
continue;
} else {
var lib_7176 = cljs.core.first.call(null,seq__7107_7170__$1);
var map__7113_7177 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_7176));
var map__7113_7178__$1 = (((((!((map__7113_7177 == null))))?(((((map__7113_7177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7113_7177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7113_7177):map__7113_7177);
var global_exports_7179 = cljs.core.get.call(null,map__7113_7178__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_7179,lib_7176);


var G__7180 = cljs.core.next.call(null,seq__7107_7170__$1);
var G__7181 = null;
var G__7182 = (0);
var G__7183 = (0);
seq__7107_7157 = G__7180;
chunk__7108_7158 = G__7181;
count__7109_7159 = G__7182;
i__7110_7160 = G__7183;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__7184){
var map__7185 = p__7184;
var map__7185__$1 = (((((!((map__7185 == null))))?(((((map__7185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7185):map__7185);
var name = cljs.core.get.call(null,map__7185__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__7185__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__7185__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__7185__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__7185__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__7185__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__7185__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__7187){
var map__7188 = p__7187;
var map__7188__$1 = (((((!((map__7188 == null))))?(((((map__7188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7188):map__7188);
var name = cljs.core.get.call(null,map__7188__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__7188__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__7188__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__7188__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__7188__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__7188__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__7188__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__7190){
var map__7191 = p__7190;
var map__7191__$1 = (((((!((map__7191 == null))))?(((((map__7191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7191):map__7191);
var t = cljs.core.get.call(null,map__7191__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__7191__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__7191__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__7191__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__7191__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__7193_7211 = cljs.core.seq.call(null,protocols);
var chunk__7194_7212 = null;
var count__7195_7213 = (0);
var i__7196_7214 = (0);
while(true){
if((i__7196_7214 < count__7195_7213)){
var protocol_7215 = cljs.core._nth.call(null,chunk__7194_7212,i__7196_7214);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_7215)),"}");


var G__7216 = seq__7193_7211;
var G__7217 = chunk__7194_7212;
var G__7218 = count__7195_7213;
var G__7219 = (i__7196_7214 + (1));
seq__7193_7211 = G__7216;
chunk__7194_7212 = G__7217;
count__7195_7213 = G__7218;
i__7196_7214 = G__7219;
continue;
} else {
var temp__5735__auto___7220 = cljs.core.seq.call(null,seq__7193_7211);
if(temp__5735__auto___7220){
var seq__7193_7221__$1 = temp__5735__auto___7220;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7193_7221__$1)){
var c__4461__auto___7222 = cljs.core.chunk_first.call(null,seq__7193_7221__$1);
var G__7223 = cljs.core.chunk_rest.call(null,seq__7193_7221__$1);
var G__7224 = c__4461__auto___7222;
var G__7225 = cljs.core.count.call(null,c__4461__auto___7222);
var G__7226 = (0);
seq__7193_7211 = G__7223;
chunk__7194_7212 = G__7224;
count__7195_7213 = G__7225;
i__7196_7214 = G__7226;
continue;
} else {
var protocol_7227 = cljs.core.first.call(null,seq__7193_7221__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_7227)),"}");


var G__7228 = cljs.core.next.call(null,seq__7193_7221__$1);
var G__7229 = null;
var G__7230 = (0);
var G__7231 = (0);
seq__7193_7211 = G__7228;
chunk__7194_7212 = G__7229;
count__7195_7213 = G__7230;
i__7196_7214 = G__7231;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__7197_7232 = cljs.core.seq.call(null,fields__$1);
var chunk__7198_7233 = null;
var count__7199_7234 = (0);
var i__7200_7235 = (0);
while(true){
if((i__7200_7235 < count__7199_7234)){
var fld_7236 = cljs.core._nth.call(null,chunk__7198_7233,i__7200_7235);
cljs.compiler.emitln.call(null,"this.",fld_7236," = ",fld_7236,";");


var G__7237 = seq__7197_7232;
var G__7238 = chunk__7198_7233;
var G__7239 = count__7199_7234;
var G__7240 = (i__7200_7235 + (1));
seq__7197_7232 = G__7237;
chunk__7198_7233 = G__7238;
count__7199_7234 = G__7239;
i__7200_7235 = G__7240;
continue;
} else {
var temp__5735__auto___7241 = cljs.core.seq.call(null,seq__7197_7232);
if(temp__5735__auto___7241){
var seq__7197_7242__$1 = temp__5735__auto___7241;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7197_7242__$1)){
var c__4461__auto___7243 = cljs.core.chunk_first.call(null,seq__7197_7242__$1);
var G__7244 = cljs.core.chunk_rest.call(null,seq__7197_7242__$1);
var G__7245 = c__4461__auto___7243;
var G__7246 = cljs.core.count.call(null,c__4461__auto___7243);
var G__7247 = (0);
seq__7197_7232 = G__7244;
chunk__7198_7233 = G__7245;
count__7199_7234 = G__7246;
i__7200_7235 = G__7247;
continue;
} else {
var fld_7248 = cljs.core.first.call(null,seq__7197_7242__$1);
cljs.compiler.emitln.call(null,"this.",fld_7248," = ",fld_7248,";");


var G__7249 = cljs.core.next.call(null,seq__7197_7242__$1);
var G__7250 = null;
var G__7251 = (0);
var G__7252 = (0);
seq__7197_7232 = G__7249;
chunk__7198_7233 = G__7250;
count__7199_7234 = G__7251;
i__7200_7235 = G__7252;
continue;
}
} else {
}
}
break;
}

var seq__7201_7253 = cljs.core.seq.call(null,pmasks);
var chunk__7202_7254 = null;
var count__7203_7255 = (0);
var i__7204_7256 = (0);
while(true){
if((i__7204_7256 < count__7203_7255)){
var vec__7205_7257 = cljs.core._nth.call(null,chunk__7202_7254,i__7204_7256);
var pno_7258 = cljs.core.nth.call(null,vec__7205_7257,(0),null);
var pmask_7259 = cljs.core.nth.call(null,vec__7205_7257,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_7258,"$ = ",pmask_7259,";");


var G__7260 = seq__7201_7253;
var G__7261 = chunk__7202_7254;
var G__7262 = count__7203_7255;
var G__7263 = (i__7204_7256 + (1));
seq__7201_7253 = G__7260;
chunk__7202_7254 = G__7261;
count__7203_7255 = G__7262;
i__7204_7256 = G__7263;
continue;
} else {
var temp__5735__auto___7264 = cljs.core.seq.call(null,seq__7201_7253);
if(temp__5735__auto___7264){
var seq__7201_7265__$1 = temp__5735__auto___7264;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7201_7265__$1)){
var c__4461__auto___7266 = cljs.core.chunk_first.call(null,seq__7201_7265__$1);
var G__7267 = cljs.core.chunk_rest.call(null,seq__7201_7265__$1);
var G__7268 = c__4461__auto___7266;
var G__7269 = cljs.core.count.call(null,c__4461__auto___7266);
var G__7270 = (0);
seq__7201_7253 = G__7267;
chunk__7202_7254 = G__7268;
count__7203_7255 = G__7269;
i__7204_7256 = G__7270;
continue;
} else {
var vec__7208_7271 = cljs.core.first.call(null,seq__7201_7265__$1);
var pno_7272 = cljs.core.nth.call(null,vec__7208_7271,(0),null);
var pmask_7273 = cljs.core.nth.call(null,vec__7208_7271,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_7272,"$ = ",pmask_7273,";");


var G__7274 = cljs.core.next.call(null,seq__7201_7265__$1);
var G__7275 = null;
var G__7276 = (0);
var G__7277 = (0);
seq__7201_7253 = G__7274;
chunk__7202_7254 = G__7275;
count__7203_7255 = G__7276;
i__7204_7256 = G__7277;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__7278){
var map__7279 = p__7278;
var map__7279__$1 = (((((!((map__7279 == null))))?(((((map__7279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7279):map__7279);
var t = cljs.core.get.call(null,map__7279__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__7279__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__7279__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__7279__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__7279__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__7281_7299 = cljs.core.seq.call(null,protocols);
var chunk__7282_7300 = null;
var count__7283_7301 = (0);
var i__7284_7302 = (0);
while(true){
if((i__7284_7302 < count__7283_7301)){
var protocol_7303 = cljs.core._nth.call(null,chunk__7282_7300,i__7284_7302);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_7303)),"}");


var G__7304 = seq__7281_7299;
var G__7305 = chunk__7282_7300;
var G__7306 = count__7283_7301;
var G__7307 = (i__7284_7302 + (1));
seq__7281_7299 = G__7304;
chunk__7282_7300 = G__7305;
count__7283_7301 = G__7306;
i__7284_7302 = G__7307;
continue;
} else {
var temp__5735__auto___7308 = cljs.core.seq.call(null,seq__7281_7299);
if(temp__5735__auto___7308){
var seq__7281_7309__$1 = temp__5735__auto___7308;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7281_7309__$1)){
var c__4461__auto___7310 = cljs.core.chunk_first.call(null,seq__7281_7309__$1);
var G__7311 = cljs.core.chunk_rest.call(null,seq__7281_7309__$1);
var G__7312 = c__4461__auto___7310;
var G__7313 = cljs.core.count.call(null,c__4461__auto___7310);
var G__7314 = (0);
seq__7281_7299 = G__7311;
chunk__7282_7300 = G__7312;
count__7283_7301 = G__7313;
i__7284_7302 = G__7314;
continue;
} else {
var protocol_7315 = cljs.core.first.call(null,seq__7281_7309__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_7315)),"}");


var G__7316 = cljs.core.next.call(null,seq__7281_7309__$1);
var G__7317 = null;
var G__7318 = (0);
var G__7319 = (0);
seq__7281_7299 = G__7316;
chunk__7282_7300 = G__7317;
count__7283_7301 = G__7318;
i__7284_7302 = G__7319;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__7285_7320 = cljs.core.seq.call(null,fields__$1);
var chunk__7286_7321 = null;
var count__7287_7322 = (0);
var i__7288_7323 = (0);
while(true){
if((i__7288_7323 < count__7287_7322)){
var fld_7324 = cljs.core._nth.call(null,chunk__7286_7321,i__7288_7323);
cljs.compiler.emitln.call(null,"this.",fld_7324," = ",fld_7324,";");


var G__7325 = seq__7285_7320;
var G__7326 = chunk__7286_7321;
var G__7327 = count__7287_7322;
var G__7328 = (i__7288_7323 + (1));
seq__7285_7320 = G__7325;
chunk__7286_7321 = G__7326;
count__7287_7322 = G__7327;
i__7288_7323 = G__7328;
continue;
} else {
var temp__5735__auto___7329 = cljs.core.seq.call(null,seq__7285_7320);
if(temp__5735__auto___7329){
var seq__7285_7330__$1 = temp__5735__auto___7329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7285_7330__$1)){
var c__4461__auto___7331 = cljs.core.chunk_first.call(null,seq__7285_7330__$1);
var G__7332 = cljs.core.chunk_rest.call(null,seq__7285_7330__$1);
var G__7333 = c__4461__auto___7331;
var G__7334 = cljs.core.count.call(null,c__4461__auto___7331);
var G__7335 = (0);
seq__7285_7320 = G__7332;
chunk__7286_7321 = G__7333;
count__7287_7322 = G__7334;
i__7288_7323 = G__7335;
continue;
} else {
var fld_7336 = cljs.core.first.call(null,seq__7285_7330__$1);
cljs.compiler.emitln.call(null,"this.",fld_7336," = ",fld_7336,";");


var G__7337 = cljs.core.next.call(null,seq__7285_7330__$1);
var G__7338 = null;
var G__7339 = (0);
var G__7340 = (0);
seq__7285_7320 = G__7337;
chunk__7286_7321 = G__7338;
count__7287_7322 = G__7339;
i__7288_7323 = G__7340;
continue;
}
} else {
}
}
break;
}

var seq__7289_7341 = cljs.core.seq.call(null,pmasks);
var chunk__7290_7342 = null;
var count__7291_7343 = (0);
var i__7292_7344 = (0);
while(true){
if((i__7292_7344 < count__7291_7343)){
var vec__7293_7345 = cljs.core._nth.call(null,chunk__7290_7342,i__7292_7344);
var pno_7346 = cljs.core.nth.call(null,vec__7293_7345,(0),null);
var pmask_7347 = cljs.core.nth.call(null,vec__7293_7345,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_7346,"$ = ",pmask_7347,";");


var G__7348 = seq__7289_7341;
var G__7349 = chunk__7290_7342;
var G__7350 = count__7291_7343;
var G__7351 = (i__7292_7344 + (1));
seq__7289_7341 = G__7348;
chunk__7290_7342 = G__7349;
count__7291_7343 = G__7350;
i__7292_7344 = G__7351;
continue;
} else {
var temp__5735__auto___7352 = cljs.core.seq.call(null,seq__7289_7341);
if(temp__5735__auto___7352){
var seq__7289_7353__$1 = temp__5735__auto___7352;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7289_7353__$1)){
var c__4461__auto___7354 = cljs.core.chunk_first.call(null,seq__7289_7353__$1);
var G__7355 = cljs.core.chunk_rest.call(null,seq__7289_7353__$1);
var G__7356 = c__4461__auto___7354;
var G__7357 = cljs.core.count.call(null,c__4461__auto___7354);
var G__7358 = (0);
seq__7289_7341 = G__7355;
chunk__7290_7342 = G__7356;
count__7291_7343 = G__7357;
i__7292_7344 = G__7358;
continue;
} else {
var vec__7296_7359 = cljs.core.first.call(null,seq__7289_7353__$1);
var pno_7360 = cljs.core.nth.call(null,vec__7296_7359,(0),null);
var pmask_7361 = cljs.core.nth.call(null,vec__7296_7359,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_7360,"$ = ",pmask_7361,";");


var G__7362 = cljs.core.next.call(null,seq__7289_7353__$1);
var G__7363 = null;
var G__7364 = (0);
var G__7365 = (0);
seq__7289_7341 = G__7362;
chunk__7290_7342 = G__7363;
count__7291_7343 = G__7364;
i__7292_7344 = G__7365;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__7366){
var map__7367 = p__7366;
var map__7367__$1 = (((((!((map__7367 == null))))?(((((map__7367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7367):map__7367);
var target = cljs.core.get.call(null,map__7367__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__7367__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__7367__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__7367__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__7367__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5064__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__7369){
var map__7370 = p__7369;
var map__7370__$1 = (((((!((map__7370 == null))))?(((((map__7370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7370):map__7370);
var op = cljs.core.get.call(null,map__7370__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__7370__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__7370__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__7370__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__7370__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4036__auto__ = code;
if(cljs.core.truth_(and__4036__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4036__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__5064__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5064__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__7376 = cljs.core.seq.call(null,table);
var chunk__7377 = null;
var count__7378 = (0);
var i__7379 = (0);
while(true){
if((i__7379 < count__7378)){
var vec__7380 = cljs.core._nth.call(null,chunk__7377,i__7379);
var sym = cljs.core.nth.call(null,vec__7380,(0),null);
var value = cljs.core.nth.call(null,vec__7380,(1),null);
var ns_7386 = cljs.core.namespace.call(null,sym);
var name_7387 = cljs.core.name.call(null,sym);
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


var G__7388 = seq__7376;
var G__7389 = chunk__7377;
var G__7390 = count__7378;
var G__7391 = (i__7379 + (1));
seq__7376 = G__7388;
chunk__7377 = G__7389;
count__7378 = G__7390;
i__7379 = G__7391;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__7376);
if(temp__5735__auto__){
var seq__7376__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7376__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__7376__$1);
var G__7392 = cljs.core.chunk_rest.call(null,seq__7376__$1);
var G__7393 = c__4461__auto__;
var G__7394 = cljs.core.count.call(null,c__4461__auto__);
var G__7395 = (0);
seq__7376 = G__7392;
chunk__7377 = G__7393;
count__7378 = G__7394;
i__7379 = G__7395;
continue;
} else {
var vec__7383 = cljs.core.first.call(null,seq__7376__$1);
var sym = cljs.core.nth.call(null,vec__7383,(0),null);
var value = cljs.core.nth.call(null,vec__7383,(1),null);
var ns_7396 = cljs.core.namespace.call(null,sym);
var name_7397 = cljs.core.name.call(null,sym);
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


var G__7398 = cljs.core.next.call(null,seq__7376__$1);
var G__7399 = null;
var G__7400 = (0);
var G__7401 = (0);
seq__7376 = G__7398;
chunk__7377 = G__7399;
count__7378 = G__7400;
i__7379 = G__7401;
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
var G__7403 = arguments.length;
switch (G__7403) {
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
var k_7408 = cljs.core.first.call(null,ks);
var vec__7404_7409 = cljs.core.conj.call(null,prefix,k_7408);
var top_7410 = cljs.core.nth.call(null,vec__7404_7409,(0),null);
var prefix_SINGLEQUOTE__7411 = vec__7404_7409;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_7408)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__7411) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_7410)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_7410)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__7411)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_7410);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__7411)),";");
}
} else {
}

var m_7412 = cljs.core.get.call(null,externs,k_7408);
if(cljs.core.empty_QMARK_.call(null,m_7412)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__7411,m_7412,top_level,known_externs);
}

var G__7413 = cljs.core.next.call(null,ks);
ks = G__7413;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
