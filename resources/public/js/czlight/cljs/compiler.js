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
var map__5481 = s;
var map__5481__$1 = (((((!((map__5481 == null))))?(((((map__5481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5481):map__5481);
var name = cljs.core.get.call(null,map__5481__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__5481__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__5484 = info;
var map__5485 = G__5484;
var map__5485__$1 = (((((!((map__5485 == null))))?(((((map__5485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5485):map__5485);
var shadow = cljs.core.get.call(null,map__5485__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__5484__$1 = G__5484;
while(true){
var d__$2 = d__$1;
var map__5487 = G__5484__$1;
var map__5487__$1 = (((((!((map__5487 == null))))?(((((map__5487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5487):map__5487);
var shadow__$1 = cljs.core.get.call(null,map__5487__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__5489 = (d__$2 + (1));
var G__5490 = shadow__$1;
d__$1 = G__5489;
G__5484__$1 = G__5490;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__5491){
var map__5492 = p__5491;
var map__5492__$1 = (((((!((map__5492 == null))))?(((((map__5492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5492):map__5492);
var name_var = map__5492__$1;
var name = cljs.core.get.call(null,map__5492__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__5492__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__5494 = info;
var map__5494__$1 = (((((!((map__5494 == null))))?(((((map__5494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5494):map__5494);
var ns = cljs.core.get.call(null,map__5494__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__5494__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__5497 = arguments.length;
switch (G__5497) {
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
var G__5499 = cp;
switch (G__5499) {
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
var seq__5501_5505 = cljs.core.seq.call(null,s);
var chunk__5502_5506 = null;
var count__5503_5507 = (0);
var i__5504_5508 = (0);
while(true){
if((i__5504_5508 < count__5503_5507)){
var c_5509 = cljs.core._nth.call(null,chunk__5502_5506,i__5504_5508);
sb.append(cljs.compiler.escape_char.call(null,c_5509));


var G__5510 = seq__5501_5505;
var G__5511 = chunk__5502_5506;
var G__5512 = count__5503_5507;
var G__5513 = (i__5504_5508 + (1));
seq__5501_5505 = G__5510;
chunk__5502_5506 = G__5511;
count__5503_5507 = G__5512;
i__5504_5508 = G__5513;
continue;
} else {
var temp__5735__auto___5514 = cljs.core.seq.call(null,seq__5501_5505);
if(temp__5735__auto___5514){
var seq__5501_5515__$1 = temp__5735__auto___5514;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5501_5515__$1)){
var c__4461__auto___5516 = cljs.core.chunk_first.call(null,seq__5501_5515__$1);
var G__5517 = cljs.core.chunk_rest.call(null,seq__5501_5515__$1);
var G__5518 = c__4461__auto___5516;
var G__5519 = cljs.core.count.call(null,c__4461__auto___5516);
var G__5520 = (0);
seq__5501_5505 = G__5517;
chunk__5502_5506 = G__5518;
count__5503_5507 = G__5519;
i__5504_5508 = G__5520;
continue;
} else {
var c_5521 = cljs.core.first.call(null,seq__5501_5515__$1);
sb.append(cljs.compiler.escape_char.call(null,c_5521));


var G__5522 = cljs.core.next.call(null,seq__5501_5515__$1);
var G__5523 = null;
var G__5524 = (0);
var G__5525 = (0);
seq__5501_5505 = G__5522;
chunk__5502_5506 = G__5523;
count__5503_5507 = G__5524;
i__5504_5508 = G__5525;
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
var map__5526_5531 = ast;
var map__5526_5532__$1 = (((((!((map__5526_5531 == null))))?(((((map__5526_5531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5526_5531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5526_5531):map__5526_5531);
var env_5533 = cljs.core.get.call(null,map__5526_5532__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_5533))){
var map__5528_5534 = env_5533;
var map__5528_5535__$1 = (((((!((map__5528_5534 == null))))?(((((map__5528_5534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5528_5534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5528_5534):map__5528_5534);
var line_5536 = cljs.core.get.call(null,map__5528_5535__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_5537 = cljs.core.get.call(null,map__5528_5535__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__5528_5534,map__5528_5535__$1,line_5536,column_5537,map__5526_5531,map__5526_5532__$1,env_5533){
return (function (m){
var minfo = (function (){var G__5530 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__5530,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__5530;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_5536 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__5528_5534,map__5528_5535__$1,line_5536,column_5537,map__5526_5531,map__5526_5532__$1,env_5533){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_5537)?(column_5537 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__5528_5534,map__5528_5535__$1,line_5536,column_5537,map__5526_5531,map__5526_5532__$1,env_5533){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__5528_5534,map__5528_5535__$1,line_5536,column_5537,map__5526_5531,map__5526_5532__$1,env_5533))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__5528_5534,map__5528_5535__$1,line_5536,column_5537,map__5526_5531,map__5526_5532__$1,env_5533))
,cljs.core.sorted_map.call(null)));
});})(map__5528_5534,map__5528_5535__$1,line_5536,column_5537,map__5526_5531,map__5526_5532__$1,env_5533))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__5546 = arguments.length;
switch (G__5546) {
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
var len__4641__auto___5553 = arguments.length;
var i__4642__auto___5554 = (0);
while(true){
if((i__4642__auto___5554 < len__4641__auto___5553)){
args_arr__4662__auto__.push((arguments[i__4642__auto___5554]));

var G__5555 = (i__4642__auto___5554 + (1));
i__4642__auto___5554 = G__5555;
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
var s_5556 = (function (){var G__5547 = a;
if((!(typeof a === 'string'))){
return G__5547.toString();
} else {
return G__5547;
}
})();
var temp__5739__auto___5557 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___5557 == null)){
} else {
var sm_data_5558 = temp__5739__auto___5557;
cljs.core.swap_BANG_.call(null,sm_data_5558,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_5558,temp__5739__auto___5557,s_5556){
return (function (p1__5538_SHARP_){
return (p1__5538_SHARP_ + s_5556.length);
});})(sm_data_5558,temp__5739__auto___5557,s_5556))
);
}

cljs.core.print.call(null,s_5556);

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

var seq__5548 = cljs.core.seq.call(null,xs);
var chunk__5549 = null;
var count__5550 = (0);
var i__5551 = (0);
while(true){
if((i__5551 < count__5550)){
var x = cljs.core._nth.call(null,chunk__5549,i__5551);
cljs.compiler.emits.call(null,x);


var G__5559 = seq__5548;
var G__5560 = chunk__5549;
var G__5561 = count__5550;
var G__5562 = (i__5551 + (1));
seq__5548 = G__5559;
chunk__5549 = G__5560;
count__5550 = G__5561;
i__5551 = G__5562;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__5548);
if(temp__5735__auto__){
var seq__5548__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5548__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__5548__$1);
var G__5563 = cljs.core.chunk_rest.call(null,seq__5548__$1);
var G__5564 = c__4461__auto__;
var G__5565 = cljs.core.count.call(null,c__4461__auto__);
var G__5566 = (0);
seq__5548 = G__5563;
chunk__5549 = G__5564;
count__5550 = G__5565;
i__5551 = G__5566;
continue;
} else {
var x = cljs.core.first.call(null,seq__5548__$1);
cljs.compiler.emits.call(null,x);


var G__5567 = cljs.core.next.call(null,seq__5548__$1);
var G__5568 = null;
var G__5569 = (0);
var G__5570 = (0);
seq__5548 = G__5567;
chunk__5549 = G__5568;
count__5550 = G__5569;
i__5551 = G__5570;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq5540){
var G__5541 = cljs.core.first.call(null,seq5540);
var seq5540__$1 = cljs.core.next.call(null,seq5540);
var G__5542 = cljs.core.first.call(null,seq5540__$1);
var seq5540__$2 = cljs.core.next.call(null,seq5540__$1);
var G__5543 = cljs.core.first.call(null,seq5540__$2);
var seq5540__$3 = cljs.core.next.call(null,seq5540__$2);
var G__5544 = cljs.core.first.call(null,seq5540__$3);
var seq5540__$4 = cljs.core.next.call(null,seq5540__$3);
var G__5545 = cljs.core.first.call(null,seq5540__$4);
var seq5540__$5 = cljs.core.next.call(null,seq5540__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5541,G__5542,G__5543,G__5544,G__5545,seq5540__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__5571){
var map__5572 = p__5571;
var map__5572__$1 = (((((!((map__5572 == null))))?(((((map__5572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5572):map__5572);
var m = map__5572__$1;
var gen_line = cljs.core.get.call(null,map__5572__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__5581 = arguments.length;
switch (G__5581) {
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
var len__4641__auto___5587 = arguments.length;
var i__4642__auto___5588 = (0);
while(true){
if((i__4642__auto___5588 < len__4641__auto___5587)){
args_arr__4662__auto__.push((arguments[i__4642__auto___5588]));

var G__5589 = (i__4642__auto___5588 + (1));
i__4642__auto___5588 = G__5589;
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

var seq__5582_5590 = cljs.core.seq.call(null,xs);
var chunk__5583_5591 = null;
var count__5584_5592 = (0);
var i__5585_5593 = (0);
while(true){
if((i__5585_5593 < count__5584_5592)){
var x_5594 = cljs.core._nth.call(null,chunk__5583_5591,i__5585_5593);
cljs.compiler.emits.call(null,x_5594);


var G__5595 = seq__5582_5590;
var G__5596 = chunk__5583_5591;
var G__5597 = count__5584_5592;
var G__5598 = (i__5585_5593 + (1));
seq__5582_5590 = G__5595;
chunk__5583_5591 = G__5596;
count__5584_5592 = G__5597;
i__5585_5593 = G__5598;
continue;
} else {
var temp__5735__auto___5599 = cljs.core.seq.call(null,seq__5582_5590);
if(temp__5735__auto___5599){
var seq__5582_5600__$1 = temp__5735__auto___5599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5582_5600__$1)){
var c__4461__auto___5601 = cljs.core.chunk_first.call(null,seq__5582_5600__$1);
var G__5602 = cljs.core.chunk_rest.call(null,seq__5582_5600__$1);
var G__5603 = c__4461__auto___5601;
var G__5604 = cljs.core.count.call(null,c__4461__auto___5601);
var G__5605 = (0);
seq__5582_5590 = G__5602;
chunk__5583_5591 = G__5603;
count__5584_5592 = G__5604;
i__5585_5593 = G__5605;
continue;
} else {
var x_5606 = cljs.core.first.call(null,seq__5582_5600__$1);
cljs.compiler.emits.call(null,x_5606);


var G__5607 = cljs.core.next.call(null,seq__5582_5600__$1);
var G__5608 = null;
var G__5609 = (0);
var G__5610 = (0);
seq__5582_5590 = G__5607;
chunk__5583_5591 = G__5608;
count__5584_5592 = G__5609;
i__5585_5593 = G__5610;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq5575){
var G__5576 = cljs.core.first.call(null,seq5575);
var seq5575__$1 = cljs.core.next.call(null,seq5575);
var G__5577 = cljs.core.first.call(null,seq5575__$1);
var seq5575__$2 = cljs.core.next.call(null,seq5575__$1);
var G__5578 = cljs.core.first.call(null,seq5575__$2);
var seq5575__$3 = cljs.core.next.call(null,seq5575__$2);
var G__5579 = cljs.core.first.call(null,seq5575__$3);
var seq5575__$4 = cljs.core.next.call(null,seq5575__$3);
var G__5580 = cljs.core.first.call(null,seq5575__$4);
var seq5575__$5 = cljs.core.next.call(null,seq5575__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5576,G__5577,G__5578,G__5579,G__5580,seq5575__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__5611_5615 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__5612_5616 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__5613_5617 = true;
var _STAR_print_fn_STAR__temp_val__5614_5618 = ((function (_STAR_print_newline_STAR__orig_val__5611_5615,_STAR_print_fn_STAR__orig_val__5612_5616,_STAR_print_newline_STAR__temp_val__5613_5617,sb__4572__auto__){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__5611_5615,_STAR_print_fn_STAR__orig_val__5612_5616,_STAR_print_newline_STAR__temp_val__5613_5617,sb__4572__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__5613_5617;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__5614_5618;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__5612_5616;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__5611_5615;
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
var vec__5619 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__5619,(0),null);
var name = cljs.core.nth.call(null,vec__5619,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__5619,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__5619,ns,name))
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
var vec__5622 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__5622,(0),null);
var flags = cljs.core.nth.call(null,vec__5622,(1),null);
var pattern = cljs.core.nth.call(null,vec__5622,(2),null);
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
return (function (p1__5625_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__5625_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__5627){
var map__5628 = p__5627;
var map__5628__$1 = (((((!((map__5628 == null))))?(((((map__5628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5628):map__5628);
var ast = map__5628__$1;
var info = cljs.core.get.call(null,map__5628__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__5628__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__5628__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__5630 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__5630__$1 = (((((!((map__5630 == null))))?(((((map__5630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5630):map__5630);
var cenv = map__5630__$1;
var options = cljs.core.get.call(null,map__5630__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__5632 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4036__auto__;
}
})())){
return clojure.set.difference.call(null,G__5632,cljs.analyzer.es5_allowed);
} else {
return G__5632;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4047__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__5633 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__5633,reserved);
} else {
return G__5633;
}
})();
var env__1437__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__5634_5635 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__5634_5636__$1 = (((G__5634_5635 instanceof cljs.core.Keyword))?G__5634_5635.fqn:null);
switch (G__5634_5636__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__5638){
var map__5639 = p__5638;
var map__5639__$1 = (((((!((map__5639 == null))))?(((((map__5639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5639):map__5639);
var arg = map__5639__$1;
var env = cljs.core.get.call(null,map__5639__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__5639__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__5639__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__5639__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__5641 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__5641__$1 = (((((!((map__5641 == null))))?(((((map__5641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5641):map__5641);
var name = cljs.core.get.call(null,map__5641__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__1437__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__5643){
var map__5644 = p__5643;
var map__5644__$1 = (((((!((map__5644 == null))))?(((((map__5644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5644):map__5644);
var expr = cljs.core.get.call(null,map__5644__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__5644__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__5644__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__1437__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__5646_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__5646_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__5647){
var map__5648 = p__5647;
var map__5648__$1 = (((((!((map__5648 == null))))?(((((map__5648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5648):map__5648);
var env = cljs.core.get.call(null,map__5648__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__5648__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__5648__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__1437__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__5650){
var map__5651 = p__5650;
var map__5651__$1 = (((((!((map__5651 == null))))?(((((map__5651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5651):map__5651);
var items = cljs.core.get.call(null,map__5651__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__5651__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__1437__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__5653_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__5653_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__5654){
var map__5655 = p__5654;
var map__5655__$1 = (((((!((map__5655 == null))))?(((((map__5655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5655):map__5655);
var items = cljs.core.get.call(null,map__5655__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__5655__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__1437__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5735__auto___5673 = cljs.core.seq.call(null,items);
if(temp__5735__auto___5673){
var items_5674__$1 = temp__5735__auto___5673;
var vec__5657_5675 = items_5674__$1;
var seq__5658_5676 = cljs.core.seq.call(null,vec__5657_5675);
var first__5659_5677 = cljs.core.first.call(null,seq__5658_5676);
var seq__5658_5678__$1 = cljs.core.next.call(null,seq__5658_5676);
var vec__5660_5679 = first__5659_5677;
var k_5680 = cljs.core.nth.call(null,vec__5660_5679,(0),null);
var v_5681 = cljs.core.nth.call(null,vec__5660_5679,(1),null);
var r_5682 = seq__5658_5678__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_5680),"\": ",emit_js_object_val.call(null,v_5681));

var seq__5663_5683 = cljs.core.seq.call(null,r_5682);
var chunk__5664_5684 = null;
var count__5665_5685 = (0);
var i__5666_5686 = (0);
while(true){
if((i__5666_5686 < count__5665_5685)){
var vec__5667_5687 = cljs.core._nth.call(null,chunk__5664_5684,i__5666_5686);
var k_5688__$1 = cljs.core.nth.call(null,vec__5667_5687,(0),null);
var v_5689__$1 = cljs.core.nth.call(null,vec__5667_5687,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_5688__$1),"\": ",emit_js_object_val.call(null,v_5689__$1));


var G__5690 = seq__5663_5683;
var G__5691 = chunk__5664_5684;
var G__5692 = count__5665_5685;
var G__5693 = (i__5666_5686 + (1));
seq__5663_5683 = G__5690;
chunk__5664_5684 = G__5691;
count__5665_5685 = G__5692;
i__5666_5686 = G__5693;
continue;
} else {
var temp__5735__auto___5694__$1 = cljs.core.seq.call(null,seq__5663_5683);
if(temp__5735__auto___5694__$1){
var seq__5663_5695__$1 = temp__5735__auto___5694__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5663_5695__$1)){
var c__4461__auto___5696 = cljs.core.chunk_first.call(null,seq__5663_5695__$1);
var G__5697 = cljs.core.chunk_rest.call(null,seq__5663_5695__$1);
var G__5698 = c__4461__auto___5696;
var G__5699 = cljs.core.count.call(null,c__4461__auto___5696);
var G__5700 = (0);
seq__5663_5683 = G__5697;
chunk__5664_5684 = G__5698;
count__5665_5685 = G__5699;
i__5666_5686 = G__5700;
continue;
} else {
var vec__5670_5701 = cljs.core.first.call(null,seq__5663_5695__$1);
var k_5702__$1 = cljs.core.nth.call(null,vec__5670_5701,(0),null);
var v_5703__$1 = cljs.core.nth.call(null,vec__5670_5701,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_5702__$1),"\": ",emit_js_object_val.call(null,v_5703__$1));


var G__5704 = cljs.core.next.call(null,seq__5663_5695__$1);
var G__5705 = null;
var G__5706 = (0);
var G__5707 = (0);
seq__5663_5683 = G__5704;
chunk__5664_5684 = G__5705;
count__5665_5685 = G__5706;
i__5666_5686 = G__5707;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__5708){
var map__5709 = p__5708;
var map__5709__$1 = (((((!((map__5709 == null))))?(((((map__5709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5709):map__5709);
var keys = cljs.core.get.call(null,map__5709__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__5709__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__5709__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__1437__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__5711){
var map__5712 = p__5711;
var map__5712__$1 = (((((!((map__5712 == null))))?(((((map__5712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5712):map__5712);
var items = cljs.core.get.call(null,map__5712__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__5712__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__1437__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__5714){
var map__5715 = p__5714;
var map__5715__$1 = (((((!((map__5715 == null))))?(((((map__5715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5715):map__5715);
var expr = cljs.core.get.call(null,map__5715__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__5717){
var map__5718 = p__5717;
var map__5718__$1 = (((((!((map__5718 == null))))?(((((map__5718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5718):map__5718);
var form = cljs.core.get.call(null,map__5718__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__5718__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__1437__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__5720 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__5720__$1 = (((((!((map__5720 == null))))?(((((map__5720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5720):map__5720);
var op = cljs.core.get.call(null,map__5720__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__5720__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__5720__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__5722 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__5722__$1 = (((((!((map__5722 == null))))?(((((map__5722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5722):map__5722);
var op = cljs.core.get.call(null,map__5722__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__5722__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__5722__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__5724){
var map__5725 = p__5724;
var map__5725__$1 = (((((!((map__5725 == null))))?(((((map__5725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5725):map__5725);
var test = cljs.core.get.call(null,map__5725__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__5725__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__5725__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__5725__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__5725__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__5727){
var map__5728 = p__5727;
var map__5728__$1 = (((((!((map__5728 == null))))?(((((map__5728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5728):map__5728);
var v = cljs.core.get.call(null,map__5728__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__5728__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__5728__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__5728__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__5730_5750 = cljs.core.seq.call(null,nodes);
var chunk__5731_5751 = null;
var count__5732_5752 = (0);
var i__5733_5753 = (0);
while(true){
if((i__5733_5753 < count__5732_5752)){
var map__5734_5754 = cljs.core._nth.call(null,chunk__5731_5751,i__5733_5753);
var map__5734_5755__$1 = (((((!((map__5734_5754 == null))))?(((((map__5734_5754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5734_5754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5734_5754):map__5734_5754);
var ts_5756 = cljs.core.get.call(null,map__5734_5755__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__5735_5757 = cljs.core.get.call(null,map__5734_5755__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__5735_5758__$1 = (((((!((map__5735_5757 == null))))?(((((map__5735_5757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5735_5757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5735_5757):map__5735_5757);
var then_5759 = cljs.core.get.call(null,map__5735_5758__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__5738_5760 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_5756));
var chunk__5739_5761 = null;
var count__5740_5762 = (0);
var i__5741_5763 = (0);
while(true){
if((i__5741_5763 < count__5740_5762)){
var test_5764 = cljs.core._nth.call(null,chunk__5739_5761,i__5741_5763);
cljs.compiler.emitln.call(null,"case ",test_5764,":");


var G__5765 = seq__5738_5760;
var G__5766 = chunk__5739_5761;
var G__5767 = count__5740_5762;
var G__5768 = (i__5741_5763 + (1));
seq__5738_5760 = G__5765;
chunk__5739_5761 = G__5766;
count__5740_5762 = G__5767;
i__5741_5763 = G__5768;
continue;
} else {
var temp__5735__auto___5769 = cljs.core.seq.call(null,seq__5738_5760);
if(temp__5735__auto___5769){
var seq__5738_5770__$1 = temp__5735__auto___5769;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5738_5770__$1)){
var c__4461__auto___5771 = cljs.core.chunk_first.call(null,seq__5738_5770__$1);
var G__5772 = cljs.core.chunk_rest.call(null,seq__5738_5770__$1);
var G__5773 = c__4461__auto___5771;
var G__5774 = cljs.core.count.call(null,c__4461__auto___5771);
var G__5775 = (0);
seq__5738_5760 = G__5772;
chunk__5739_5761 = G__5773;
count__5740_5762 = G__5774;
i__5741_5763 = G__5775;
continue;
} else {
var test_5776 = cljs.core.first.call(null,seq__5738_5770__$1);
cljs.compiler.emitln.call(null,"case ",test_5776,":");


var G__5777 = cljs.core.next.call(null,seq__5738_5770__$1);
var G__5778 = null;
var G__5779 = (0);
var G__5780 = (0);
seq__5738_5760 = G__5777;
chunk__5739_5761 = G__5778;
count__5740_5762 = G__5779;
i__5741_5763 = G__5780;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_5759);
} else {
cljs.compiler.emitln.call(null,then_5759);
}

cljs.compiler.emitln.call(null,"break;");


var G__5781 = seq__5730_5750;
var G__5782 = chunk__5731_5751;
var G__5783 = count__5732_5752;
var G__5784 = (i__5733_5753 + (1));
seq__5730_5750 = G__5781;
chunk__5731_5751 = G__5782;
count__5732_5752 = G__5783;
i__5733_5753 = G__5784;
continue;
} else {
var temp__5735__auto___5785 = cljs.core.seq.call(null,seq__5730_5750);
if(temp__5735__auto___5785){
var seq__5730_5786__$1 = temp__5735__auto___5785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5730_5786__$1)){
var c__4461__auto___5787 = cljs.core.chunk_first.call(null,seq__5730_5786__$1);
var G__5788 = cljs.core.chunk_rest.call(null,seq__5730_5786__$1);
var G__5789 = c__4461__auto___5787;
var G__5790 = cljs.core.count.call(null,c__4461__auto___5787);
var G__5791 = (0);
seq__5730_5750 = G__5788;
chunk__5731_5751 = G__5789;
count__5732_5752 = G__5790;
i__5733_5753 = G__5791;
continue;
} else {
var map__5742_5792 = cljs.core.first.call(null,seq__5730_5786__$1);
var map__5742_5793__$1 = (((((!((map__5742_5792 == null))))?(((((map__5742_5792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5742_5792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5742_5792):map__5742_5792);
var ts_5794 = cljs.core.get.call(null,map__5742_5793__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__5743_5795 = cljs.core.get.call(null,map__5742_5793__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__5743_5796__$1 = (((((!((map__5743_5795 == null))))?(((((map__5743_5795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5743_5795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5743_5795):map__5743_5795);
var then_5797 = cljs.core.get.call(null,map__5743_5796__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__5746_5798 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_5794));
var chunk__5747_5799 = null;
var count__5748_5800 = (0);
var i__5749_5801 = (0);
while(true){
if((i__5749_5801 < count__5748_5800)){
var test_5802 = cljs.core._nth.call(null,chunk__5747_5799,i__5749_5801);
cljs.compiler.emitln.call(null,"case ",test_5802,":");


var G__5803 = seq__5746_5798;
var G__5804 = chunk__5747_5799;
var G__5805 = count__5748_5800;
var G__5806 = (i__5749_5801 + (1));
seq__5746_5798 = G__5803;
chunk__5747_5799 = G__5804;
count__5748_5800 = G__5805;
i__5749_5801 = G__5806;
continue;
} else {
var temp__5735__auto___5807__$1 = cljs.core.seq.call(null,seq__5746_5798);
if(temp__5735__auto___5807__$1){
var seq__5746_5808__$1 = temp__5735__auto___5807__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5746_5808__$1)){
var c__4461__auto___5809 = cljs.core.chunk_first.call(null,seq__5746_5808__$1);
var G__5810 = cljs.core.chunk_rest.call(null,seq__5746_5808__$1);
var G__5811 = c__4461__auto___5809;
var G__5812 = cljs.core.count.call(null,c__4461__auto___5809);
var G__5813 = (0);
seq__5746_5798 = G__5810;
chunk__5747_5799 = G__5811;
count__5748_5800 = G__5812;
i__5749_5801 = G__5813;
continue;
} else {
var test_5814 = cljs.core.first.call(null,seq__5746_5808__$1);
cljs.compiler.emitln.call(null,"case ",test_5814,":");


var G__5815 = cljs.core.next.call(null,seq__5746_5808__$1);
var G__5816 = null;
var G__5817 = (0);
var G__5818 = (0);
seq__5746_5798 = G__5815;
chunk__5747_5799 = G__5816;
count__5748_5800 = G__5817;
i__5749_5801 = G__5818;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_5797);
} else {
cljs.compiler.emitln.call(null,then_5797);
}

cljs.compiler.emitln.call(null,"break;");


var G__5819 = cljs.core.next.call(null,seq__5730_5786__$1);
var G__5820 = null;
var G__5821 = (0);
var G__5822 = (0);
seq__5730_5750 = G__5819;
chunk__5731_5751 = G__5820;
count__5732_5752 = G__5821;
i__5733_5753 = G__5822;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__5823){
var map__5824 = p__5823;
var map__5824__$1 = (((((!((map__5824 == null))))?(((((map__5824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5824):map__5824);
var throw$ = cljs.core.get.call(null,map__5824__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__5824__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__5827 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__5827,(0),null);
var rstr = cljs.core.nth.call(null,vec__5827,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__5827,fstr,rstr,ret_t,axstr){
return (function (p1__5826_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__5826_SHARP_);
});})(idx,vec__5827,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__5830 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5830),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__5830;
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
return (function (p1__5831_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__5831_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__5832 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__5833 = cljs.core.seq.call(null,vec__5832);
var first__5834 = cljs.core.first.call(null,seq__5833);
var seq__5833__$1 = cljs.core.next.call(null,seq__5833);
var p = first__5834;
var first__5834__$1 = cljs.core.first.call(null,seq__5833__$1);
var seq__5833__$2 = cljs.core.next.call(null,seq__5833__$1);
var ts = first__5834__$1;
var first__5834__$2 = cljs.core.first.call(null,seq__5833__$2);
var seq__5833__$3 = cljs.core.next.call(null,seq__5833__$2);
var n = first__5834__$2;
var xs = seq__5833__$3;
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
var vec__5835 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__5836 = cljs.core.seq.call(null,vec__5835);
var first__5837 = cljs.core.first.call(null,seq__5836);
var seq__5836__$1 = cljs.core.next.call(null,seq__5836);
var p = first__5837;
var first__5837__$1 = cljs.core.first.call(null,seq__5836__$1);
var seq__5836__$2 = cljs.core.next.call(null,seq__5836__$1);
var ts = first__5837__$1;
var xs = seq__5836__$2;
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
var G__5840 = arguments.length;
switch (G__5840) {
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
var vec__5848 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__5838_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__5838_SHARP_);
} else {
return p1__5838_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__5849 = cljs.core.seq.call(null,vec__5848);
var first__5850 = cljs.core.first.call(null,seq__5849);
var seq__5849__$1 = cljs.core.next.call(null,seq__5849);
var x = first__5850;
var ys = seq__5849__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__5851 = cljs.core.seq.call(null,ys);
var chunk__5852 = null;
var count__5853 = (0);
var i__5854 = (0);
while(true){
if((i__5854 < count__5853)){
var next_line = cljs.core._nth.call(null,chunk__5852,i__5854);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__5860 = seq__5851;
var G__5861 = chunk__5852;
var G__5862 = count__5853;
var G__5863 = (i__5854 + (1));
seq__5851 = G__5860;
chunk__5852 = G__5861;
count__5853 = G__5862;
i__5854 = G__5863;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__5851);
if(temp__5735__auto__){
var seq__5851__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5851__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__5851__$1);
var G__5864 = cljs.core.chunk_rest.call(null,seq__5851__$1);
var G__5865 = c__4461__auto__;
var G__5866 = cljs.core.count.call(null,c__4461__auto__);
var G__5867 = (0);
seq__5851 = G__5864;
chunk__5852 = G__5865;
count__5853 = G__5866;
i__5854 = G__5867;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__5851__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__5868 = cljs.core.next.call(null,seq__5851__$1);
var G__5869 = null;
var G__5870 = (0);
var G__5871 = (0);
seq__5851 = G__5868;
chunk__5852 = G__5869;
count__5853 = G__5870;
i__5854 = G__5871;
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

var seq__5855_5872 = cljs.core.seq.call(null,docs__$2);
var chunk__5856_5873 = null;
var count__5857_5874 = (0);
var i__5858_5875 = (0);
while(true){
if((i__5858_5875 < count__5857_5874)){
var e_5876 = cljs.core._nth.call(null,chunk__5856_5873,i__5858_5875);
if(cljs.core.truth_(e_5876)){
print_comment_lines.call(null,e_5876);
} else {
}


var G__5877 = seq__5855_5872;
var G__5878 = chunk__5856_5873;
var G__5879 = count__5857_5874;
var G__5880 = (i__5858_5875 + (1));
seq__5855_5872 = G__5877;
chunk__5856_5873 = G__5878;
count__5857_5874 = G__5879;
i__5858_5875 = G__5880;
continue;
} else {
var temp__5735__auto___5881 = cljs.core.seq.call(null,seq__5855_5872);
if(temp__5735__auto___5881){
var seq__5855_5882__$1 = temp__5735__auto___5881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5855_5882__$1)){
var c__4461__auto___5883 = cljs.core.chunk_first.call(null,seq__5855_5882__$1);
var G__5884 = cljs.core.chunk_rest.call(null,seq__5855_5882__$1);
var G__5885 = c__4461__auto___5883;
var G__5886 = cljs.core.count.call(null,c__4461__auto___5883);
var G__5887 = (0);
seq__5855_5872 = G__5884;
chunk__5856_5873 = G__5885;
count__5857_5874 = G__5886;
i__5858_5875 = G__5887;
continue;
} else {
var e_5888 = cljs.core.first.call(null,seq__5855_5882__$1);
if(cljs.core.truth_(e_5888)){
print_comment_lines.call(null,e_5888);
} else {
}


var G__5889 = cljs.core.next.call(null,seq__5855_5882__$1);
var G__5890 = null;
var G__5891 = (0);
var G__5892 = (0);
seq__5855_5872 = G__5889;
chunk__5856_5873 = G__5890;
count__5857_5874 = G__5891;
i__5858_5875 = G__5892;
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
return (function (p1__5894_SHARP_){
return goog.string.startsWith(p1__5894_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__5895){
var map__5896 = p__5895;
var map__5896__$1 = (((((!((map__5896 == null))))?(((((map__5896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5896):map__5896);
var doc = cljs.core.get.call(null,map__5896__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__5896__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__5896__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__5896__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__5896__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__5896__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__5896__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__5896__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__5896__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__5898){
var map__5899 = p__5898;
var map__5899__$1 = (((((!((map__5899 == null))))?(((((map__5899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5899):map__5899);
var name = cljs.core.get.call(null,map__5899__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__5899__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__5899__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__5901_5919 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__5902_5920 = null;
var count__5903_5921 = (0);
var i__5904_5922 = (0);
while(true){
if((i__5904_5922 < count__5903_5921)){
var vec__5905_5923 = cljs.core._nth.call(null,chunk__5902_5920,i__5904_5922);
var i_5924 = cljs.core.nth.call(null,vec__5905_5923,(0),null);
var param_5925 = cljs.core.nth.call(null,vec__5905_5923,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_5925);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__5926 = seq__5901_5919;
var G__5927 = chunk__5902_5920;
var G__5928 = count__5903_5921;
var G__5929 = (i__5904_5922 + (1));
seq__5901_5919 = G__5926;
chunk__5902_5920 = G__5927;
count__5903_5921 = G__5928;
i__5904_5922 = G__5929;
continue;
} else {
var temp__5735__auto___5930 = cljs.core.seq.call(null,seq__5901_5919);
if(temp__5735__auto___5930){
var seq__5901_5931__$1 = temp__5735__auto___5930;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5901_5931__$1)){
var c__4461__auto___5932 = cljs.core.chunk_first.call(null,seq__5901_5931__$1);
var G__5933 = cljs.core.chunk_rest.call(null,seq__5901_5931__$1);
var G__5934 = c__4461__auto___5932;
var G__5935 = cljs.core.count.call(null,c__4461__auto___5932);
var G__5936 = (0);
seq__5901_5919 = G__5933;
chunk__5902_5920 = G__5934;
count__5903_5921 = G__5935;
i__5904_5922 = G__5936;
continue;
} else {
var vec__5908_5937 = cljs.core.first.call(null,seq__5901_5931__$1);
var i_5938 = cljs.core.nth.call(null,vec__5908_5937,(0),null);
var param_5939 = cljs.core.nth.call(null,vec__5908_5937,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_5939);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__5940 = cljs.core.next.call(null,seq__5901_5931__$1);
var G__5941 = null;
var G__5942 = (0);
var G__5943 = (0);
seq__5901_5919 = G__5940;
chunk__5902_5920 = G__5941;
count__5903_5921 = G__5942;
i__5904_5922 = G__5943;
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

var seq__5911_5944 = cljs.core.seq.call(null,params);
var chunk__5912_5945 = null;
var count__5913_5946 = (0);
var i__5914_5947 = (0);
while(true){
if((i__5914_5947 < count__5913_5946)){
var param_5948 = cljs.core._nth.call(null,chunk__5912_5945,i__5914_5947);
cljs.compiler.emit.call(null,param_5948);

if(cljs.core._EQ_.call(null,param_5948,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__5949 = seq__5911_5944;
var G__5950 = chunk__5912_5945;
var G__5951 = count__5913_5946;
var G__5952 = (i__5914_5947 + (1));
seq__5911_5944 = G__5949;
chunk__5912_5945 = G__5950;
count__5913_5946 = G__5951;
i__5914_5947 = G__5952;
continue;
} else {
var temp__5735__auto___5953 = cljs.core.seq.call(null,seq__5911_5944);
if(temp__5735__auto___5953){
var seq__5911_5954__$1 = temp__5735__auto___5953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5911_5954__$1)){
var c__4461__auto___5955 = cljs.core.chunk_first.call(null,seq__5911_5954__$1);
var G__5956 = cljs.core.chunk_rest.call(null,seq__5911_5954__$1);
var G__5957 = c__4461__auto___5955;
var G__5958 = cljs.core.count.call(null,c__4461__auto___5955);
var G__5959 = (0);
seq__5911_5944 = G__5956;
chunk__5912_5945 = G__5957;
count__5913_5946 = G__5958;
i__5914_5947 = G__5959;
continue;
} else {
var param_5960 = cljs.core.first.call(null,seq__5911_5954__$1);
cljs.compiler.emit.call(null,param_5960);

if(cljs.core._EQ_.call(null,param_5960,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__5961 = cljs.core.next.call(null,seq__5911_5954__$1);
var G__5962 = null;
var G__5963 = (0);
var G__5964 = (0);
seq__5911_5944 = G__5961;
chunk__5912_5945 = G__5962;
count__5913_5946 = G__5963;
i__5914_5947 = G__5964;
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

var seq__5915_5965 = cljs.core.seq.call(null,params);
var chunk__5916_5966 = null;
var count__5917_5967 = (0);
var i__5918_5968 = (0);
while(true){
if((i__5918_5968 < count__5917_5967)){
var param_5969 = cljs.core._nth.call(null,chunk__5916_5966,i__5918_5968);
cljs.compiler.emit.call(null,param_5969);

if(cljs.core._EQ_.call(null,param_5969,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__5970 = seq__5915_5965;
var G__5971 = chunk__5916_5966;
var G__5972 = count__5917_5967;
var G__5973 = (i__5918_5968 + (1));
seq__5915_5965 = G__5970;
chunk__5916_5966 = G__5971;
count__5917_5967 = G__5972;
i__5918_5968 = G__5973;
continue;
} else {
var temp__5735__auto___5974 = cljs.core.seq.call(null,seq__5915_5965);
if(temp__5735__auto___5974){
var seq__5915_5975__$1 = temp__5735__auto___5974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5915_5975__$1)){
var c__4461__auto___5976 = cljs.core.chunk_first.call(null,seq__5915_5975__$1);
var G__5977 = cljs.core.chunk_rest.call(null,seq__5915_5975__$1);
var G__5978 = c__4461__auto___5976;
var G__5979 = cljs.core.count.call(null,c__4461__auto___5976);
var G__5980 = (0);
seq__5915_5965 = G__5977;
chunk__5916_5966 = G__5978;
count__5917_5967 = G__5979;
i__5918_5968 = G__5980;
continue;
} else {
var param_5981 = cljs.core.first.call(null,seq__5915_5975__$1);
cljs.compiler.emit.call(null,param_5981);

if(cljs.core._EQ_.call(null,param_5981,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__5982 = cljs.core.next.call(null,seq__5915_5975__$1);
var G__5983 = null;
var G__5984 = (0);
var G__5985 = (0);
seq__5915_5965 = G__5982;
chunk__5916_5966 = G__5983;
count__5917_5967 = G__5984;
i__5918_5968 = G__5985;
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
var seq__5986 = cljs.core.seq.call(null,params);
var chunk__5987 = null;
var count__5988 = (0);
var i__5989 = (0);
while(true){
if((i__5989 < count__5988)){
var param = cljs.core._nth.call(null,chunk__5987,i__5989);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__5990 = seq__5986;
var G__5991 = chunk__5987;
var G__5992 = count__5988;
var G__5993 = (i__5989 + (1));
seq__5986 = G__5990;
chunk__5987 = G__5991;
count__5988 = G__5992;
i__5989 = G__5993;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__5986);
if(temp__5735__auto__){
var seq__5986__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5986__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__5986__$1);
var G__5994 = cljs.core.chunk_rest.call(null,seq__5986__$1);
var G__5995 = c__4461__auto__;
var G__5996 = cljs.core.count.call(null,c__4461__auto__);
var G__5997 = (0);
seq__5986 = G__5994;
chunk__5987 = G__5995;
count__5988 = G__5996;
i__5989 = G__5997;
continue;
} else {
var param = cljs.core.first.call(null,seq__5986__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__5998 = cljs.core.next.call(null,seq__5986__$1);
var G__5999 = null;
var G__6000 = (0);
var G__6001 = (0);
seq__5986 = G__5998;
chunk__5987 = G__5999;
count__5988 = G__6000;
i__5989 = G__6001;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__6002){
var map__6003 = p__6002;
var map__6003__$1 = (((((!((map__6003 == null))))?(((((map__6003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6003):map__6003);
var expr = cljs.core.get.call(null,map__6003__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__6003__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__6003__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__6003__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__6003__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__6003__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__1437__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__6005){
var map__6006 = p__6005;
var map__6006__$1 = (((((!((map__6006 == null))))?(((((map__6006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6006):map__6006);
var f = map__6006__$1;
var expr = cljs.core.get.call(null,map__6006__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__6006__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__6006__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__6006__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__6006__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__6006__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__6006__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__6006__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__1437__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_6016__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_6017 = cljs.compiler.munge.call(null,name_6016__$1);
var delegate_name_6018 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_6017),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_6018," = function (");

var seq__6008_6019 = cljs.core.seq.call(null,params);
var chunk__6009_6020 = null;
var count__6010_6021 = (0);
var i__6011_6022 = (0);
while(true){
if((i__6011_6022 < count__6010_6021)){
var param_6023 = cljs.core._nth.call(null,chunk__6009_6020,i__6011_6022);
cljs.compiler.emit.call(null,param_6023);

if(cljs.core._EQ_.call(null,param_6023,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__6024 = seq__6008_6019;
var G__6025 = chunk__6009_6020;
var G__6026 = count__6010_6021;
var G__6027 = (i__6011_6022 + (1));
seq__6008_6019 = G__6024;
chunk__6009_6020 = G__6025;
count__6010_6021 = G__6026;
i__6011_6022 = G__6027;
continue;
} else {
var temp__5735__auto___6028 = cljs.core.seq.call(null,seq__6008_6019);
if(temp__5735__auto___6028){
var seq__6008_6029__$1 = temp__5735__auto___6028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6008_6029__$1)){
var c__4461__auto___6030 = cljs.core.chunk_first.call(null,seq__6008_6029__$1);
var G__6031 = cljs.core.chunk_rest.call(null,seq__6008_6029__$1);
var G__6032 = c__4461__auto___6030;
var G__6033 = cljs.core.count.call(null,c__4461__auto___6030);
var G__6034 = (0);
seq__6008_6019 = G__6031;
chunk__6009_6020 = G__6032;
count__6010_6021 = G__6033;
i__6011_6022 = G__6034;
continue;
} else {
var param_6035 = cljs.core.first.call(null,seq__6008_6029__$1);
cljs.compiler.emit.call(null,param_6035);

if(cljs.core._EQ_.call(null,param_6035,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__6036 = cljs.core.next.call(null,seq__6008_6029__$1);
var G__6037 = null;
var G__6038 = (0);
var G__6039 = (0);
seq__6008_6019 = G__6036;
chunk__6009_6020 = G__6037;
count__6010_6021 = G__6038;
i__6011_6022 = G__6039;
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

cljs.compiler.emitln.call(null,"var ",mname_6017," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_6040 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_6040,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_6018,".call(this,");

var seq__6012_6041 = cljs.core.seq.call(null,params);
var chunk__6013_6042 = null;
var count__6014_6043 = (0);
var i__6015_6044 = (0);
while(true){
if((i__6015_6044 < count__6014_6043)){
var param_6045 = cljs.core._nth.call(null,chunk__6013_6042,i__6015_6044);
cljs.compiler.emit.call(null,param_6045);

if(cljs.core._EQ_.call(null,param_6045,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__6046 = seq__6012_6041;
var G__6047 = chunk__6013_6042;
var G__6048 = count__6014_6043;
var G__6049 = (i__6015_6044 + (1));
seq__6012_6041 = G__6046;
chunk__6013_6042 = G__6047;
count__6014_6043 = G__6048;
i__6015_6044 = G__6049;
continue;
} else {
var temp__5735__auto___6050 = cljs.core.seq.call(null,seq__6012_6041);
if(temp__5735__auto___6050){
var seq__6012_6051__$1 = temp__5735__auto___6050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6012_6051__$1)){
var c__4461__auto___6052 = cljs.core.chunk_first.call(null,seq__6012_6051__$1);
var G__6053 = cljs.core.chunk_rest.call(null,seq__6012_6051__$1);
var G__6054 = c__4461__auto___6052;
var G__6055 = cljs.core.count.call(null,c__4461__auto___6052);
var G__6056 = (0);
seq__6012_6041 = G__6053;
chunk__6013_6042 = G__6054;
count__6014_6043 = G__6055;
i__6015_6044 = G__6056;
continue;
} else {
var param_6057 = cljs.core.first.call(null,seq__6012_6051__$1);
cljs.compiler.emit.call(null,param_6057);

if(cljs.core._EQ_.call(null,param_6057,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__6058 = cljs.core.next.call(null,seq__6012_6051__$1);
var G__6059 = null;
var G__6060 = (0);
var G__6061 = (0);
seq__6012_6041 = G__6058;
chunk__6013_6042 = G__6059;
count__6014_6043 = G__6060;
i__6015_6044 = G__6061;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_6017,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_6017,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_6016__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_6017,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_6018,";");

cljs.compiler.emitln.call(null,"return ",mname_6017,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__6065){
var map__6066 = p__6065;
var map__6066__$1 = (((((!((map__6066 == null))))?(((((map__6066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6066):map__6066);
var variadic = cljs.core.get.call(null,map__6066__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__6066__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__6066__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__6066__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__6066__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__6066__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__6066__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__6066,map__6066__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__6062_SHARP_){
var and__4036__auto__ = p1__6062_SHARP_;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__6062_SHARP_));
} else {
return and__4036__auto__;
}
});})(map__6066,map__6066__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_6101__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_6102 = cljs.compiler.munge.call(null,name_6101__$1);
var maxparams_6103 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_6104 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_6101__$1,mname_6102,maxparams_6103,loop_locals,map__6066,map__6066__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_6102),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_6101__$1,mname_6102,maxparams_6103,loop_locals,map__6066,map__6066__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_6105 = cljs.core.sort_by.call(null,((function (name_6101__$1,mname_6102,maxparams_6103,mmap_6104,loop_locals,map__6066,map__6066__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__6063_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__6063_SHARP_)));
});})(name_6101__$1,mname_6102,maxparams_6103,mmap_6104,loop_locals,map__6066,map__6066__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_6104));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_6102," = null;");

var seq__6068_6106 = cljs.core.seq.call(null,ms_6105);
var chunk__6069_6107 = null;
var count__6070_6108 = (0);
var i__6071_6109 = (0);
while(true){
if((i__6071_6109 < count__6070_6108)){
var vec__6072_6110 = cljs.core._nth.call(null,chunk__6069_6107,i__6071_6109);
var n_6111 = cljs.core.nth.call(null,vec__6072_6110,(0),null);
var meth_6112 = cljs.core.nth.call(null,vec__6072_6110,(1),null);
cljs.compiler.emits.call(null,"var ",n_6111," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_6112))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_6112);
} else {
cljs.compiler.emit_fn_method.call(null,meth_6112);
}

cljs.compiler.emitln.call(null,";");


var G__6113 = seq__6068_6106;
var G__6114 = chunk__6069_6107;
var G__6115 = count__6070_6108;
var G__6116 = (i__6071_6109 + (1));
seq__6068_6106 = G__6113;
chunk__6069_6107 = G__6114;
count__6070_6108 = G__6115;
i__6071_6109 = G__6116;
continue;
} else {
var temp__5735__auto___6117 = cljs.core.seq.call(null,seq__6068_6106);
if(temp__5735__auto___6117){
var seq__6068_6118__$1 = temp__5735__auto___6117;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6068_6118__$1)){
var c__4461__auto___6119 = cljs.core.chunk_first.call(null,seq__6068_6118__$1);
var G__6120 = cljs.core.chunk_rest.call(null,seq__6068_6118__$1);
var G__6121 = c__4461__auto___6119;
var G__6122 = cljs.core.count.call(null,c__4461__auto___6119);
var G__6123 = (0);
seq__6068_6106 = G__6120;
chunk__6069_6107 = G__6121;
count__6070_6108 = G__6122;
i__6071_6109 = G__6123;
continue;
} else {
var vec__6075_6124 = cljs.core.first.call(null,seq__6068_6118__$1);
var n_6125 = cljs.core.nth.call(null,vec__6075_6124,(0),null);
var meth_6126 = cljs.core.nth.call(null,vec__6075_6124,(1),null);
cljs.compiler.emits.call(null,"var ",n_6125," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_6126))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_6126);
} else {
cljs.compiler.emit_fn_method.call(null,meth_6126);
}

cljs.compiler.emitln.call(null,";");


var G__6127 = cljs.core.next.call(null,seq__6068_6118__$1);
var G__6128 = null;
var G__6129 = (0);
var G__6130 = (0);
seq__6068_6106 = G__6127;
chunk__6069_6107 = G__6128;
count__6070_6108 = G__6129;
i__6071_6109 = G__6130;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_6102," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_6103),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_6103)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_6103));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__6078_6131 = cljs.core.seq.call(null,ms_6105);
var chunk__6079_6132 = null;
var count__6080_6133 = (0);
var i__6081_6134 = (0);
while(true){
if((i__6081_6134 < count__6080_6133)){
var vec__6082_6135 = cljs.core._nth.call(null,chunk__6079_6132,i__6081_6134);
var n_6136 = cljs.core.nth.call(null,vec__6082_6135,(0),null);
var meth_6137 = cljs.core.nth.call(null,vec__6082_6135,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_6137))){
cljs.compiler.emitln.call(null,"default:");

var restarg_6138 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_6138," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_6139 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_6138," = new cljs.core.IndexedSeq(",a_6139,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_6136,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_6103)),(((cljs.core.count.call(null,maxparams_6103) > (1)))?", ":null),restarg_6138,");");
} else {
var pcnt_6140 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_6137));
cljs.compiler.emitln.call(null,"case ",pcnt_6140,":");

cljs.compiler.emitln.call(null,"return ",n_6136,".call(this",(((pcnt_6140 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_6140,maxparams_6103)),null,(1),null)),(2),null))),");");
}


var G__6141 = seq__6078_6131;
var G__6142 = chunk__6079_6132;
var G__6143 = count__6080_6133;
var G__6144 = (i__6081_6134 + (1));
seq__6078_6131 = G__6141;
chunk__6079_6132 = G__6142;
count__6080_6133 = G__6143;
i__6081_6134 = G__6144;
continue;
} else {
var temp__5735__auto___6145 = cljs.core.seq.call(null,seq__6078_6131);
if(temp__5735__auto___6145){
var seq__6078_6146__$1 = temp__5735__auto___6145;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6078_6146__$1)){
var c__4461__auto___6147 = cljs.core.chunk_first.call(null,seq__6078_6146__$1);
var G__6148 = cljs.core.chunk_rest.call(null,seq__6078_6146__$1);
var G__6149 = c__4461__auto___6147;
var G__6150 = cljs.core.count.call(null,c__4461__auto___6147);
var G__6151 = (0);
seq__6078_6131 = G__6148;
chunk__6079_6132 = G__6149;
count__6080_6133 = G__6150;
i__6081_6134 = G__6151;
continue;
} else {
var vec__6085_6152 = cljs.core.first.call(null,seq__6078_6146__$1);
var n_6153 = cljs.core.nth.call(null,vec__6085_6152,(0),null);
var meth_6154 = cljs.core.nth.call(null,vec__6085_6152,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_6154))){
cljs.compiler.emitln.call(null,"default:");

var restarg_6155 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_6155," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_6156 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_6155," = new cljs.core.IndexedSeq(",a_6156,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_6153,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_6103)),(((cljs.core.count.call(null,maxparams_6103) > (1)))?", ":null),restarg_6155,");");
} else {
var pcnt_6157 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_6154));
cljs.compiler.emitln.call(null,"case ",pcnt_6157,":");

cljs.compiler.emitln.call(null,"return ",n_6153,".call(this",(((pcnt_6157 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_6157,maxparams_6103)),null,(1),null)),(2),null))),");");
}


var G__6158 = cljs.core.next.call(null,seq__6078_6146__$1);
var G__6159 = null;
var G__6160 = (0);
var G__6161 = (0);
seq__6078_6131 = G__6158;
chunk__6079_6132 = G__6159;
count__6080_6133 = G__6160;
i__6081_6134 = G__6161;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_6162 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_6105)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_6162,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_6102,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_6102,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_6101__$1,mname_6102,maxparams_6103,mmap_6104,ms_6105,loop_locals,map__6066,map__6066__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__6064_SHARP_){
var vec__6088 = p1__6064_SHARP_;
var n = cljs.core.nth.call(null,vec__6088,(0),null);
var m = cljs.core.nth.call(null,vec__6088,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_6101__$1,mname_6102,maxparams_6103,mmap_6104,ms_6105,loop_locals,map__6066,map__6066__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_6105),".cljs$lang$applyTo;");
} else {
}

var seq__6091_6163 = cljs.core.seq.call(null,ms_6105);
var chunk__6092_6164 = null;
var count__6093_6165 = (0);
var i__6094_6166 = (0);
while(true){
if((i__6094_6166 < count__6093_6165)){
var vec__6095_6167 = cljs.core._nth.call(null,chunk__6092_6164,i__6094_6166);
var n_6168 = cljs.core.nth.call(null,vec__6095_6167,(0),null);
var meth_6169 = cljs.core.nth.call(null,vec__6095_6167,(1),null);
var c_6170 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_6169));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_6169))){
cljs.compiler.emitln.call(null,mname_6102,".cljs$core$IFn$_invoke$arity$variadic = ",n_6168,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_6102,".cljs$core$IFn$_invoke$arity$",c_6170," = ",n_6168,";");
}


var G__6171 = seq__6091_6163;
var G__6172 = chunk__6092_6164;
var G__6173 = count__6093_6165;
var G__6174 = (i__6094_6166 + (1));
seq__6091_6163 = G__6171;
chunk__6092_6164 = G__6172;
count__6093_6165 = G__6173;
i__6094_6166 = G__6174;
continue;
} else {
var temp__5735__auto___6175 = cljs.core.seq.call(null,seq__6091_6163);
if(temp__5735__auto___6175){
var seq__6091_6176__$1 = temp__5735__auto___6175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6091_6176__$1)){
var c__4461__auto___6177 = cljs.core.chunk_first.call(null,seq__6091_6176__$1);
var G__6178 = cljs.core.chunk_rest.call(null,seq__6091_6176__$1);
var G__6179 = c__4461__auto___6177;
var G__6180 = cljs.core.count.call(null,c__4461__auto___6177);
var G__6181 = (0);
seq__6091_6163 = G__6178;
chunk__6092_6164 = G__6179;
count__6093_6165 = G__6180;
i__6094_6166 = G__6181;
continue;
} else {
var vec__6098_6182 = cljs.core.first.call(null,seq__6091_6176__$1);
var n_6183 = cljs.core.nth.call(null,vec__6098_6182,(0),null);
var meth_6184 = cljs.core.nth.call(null,vec__6098_6182,(1),null);
var c_6185 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_6184));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_6184))){
cljs.compiler.emitln.call(null,mname_6102,".cljs$core$IFn$_invoke$arity$variadic = ",n_6183,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_6102,".cljs$core$IFn$_invoke$arity$",c_6185," = ",n_6183,";");
}


var G__6186 = cljs.core.next.call(null,seq__6091_6176__$1);
var G__6187 = null;
var G__6188 = (0);
var G__6189 = (0);
seq__6091_6163 = G__6186;
chunk__6092_6164 = G__6187;
count__6093_6165 = G__6188;
i__6094_6166 = G__6189;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_6102,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__6190){
var map__6191 = p__6190;
var map__6191__$1 = (((((!((map__6191 == null))))?(((((map__6191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6191):map__6191);
var statements = cljs.core.get.call(null,map__6191__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__6191__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__6191__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__6193_6197 = cljs.core.seq.call(null,statements);
var chunk__6194_6198 = null;
var count__6195_6199 = (0);
var i__6196_6200 = (0);
while(true){
if((i__6196_6200 < count__6195_6199)){
var s_6201 = cljs.core._nth.call(null,chunk__6194_6198,i__6196_6200);
cljs.compiler.emitln.call(null,s_6201);


var G__6202 = seq__6193_6197;
var G__6203 = chunk__6194_6198;
var G__6204 = count__6195_6199;
var G__6205 = (i__6196_6200 + (1));
seq__6193_6197 = G__6202;
chunk__6194_6198 = G__6203;
count__6195_6199 = G__6204;
i__6196_6200 = G__6205;
continue;
} else {
var temp__5735__auto___6206 = cljs.core.seq.call(null,seq__6193_6197);
if(temp__5735__auto___6206){
var seq__6193_6207__$1 = temp__5735__auto___6206;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6193_6207__$1)){
var c__4461__auto___6208 = cljs.core.chunk_first.call(null,seq__6193_6207__$1);
var G__6209 = cljs.core.chunk_rest.call(null,seq__6193_6207__$1);
var G__6210 = c__4461__auto___6208;
var G__6211 = cljs.core.count.call(null,c__4461__auto___6208);
var G__6212 = (0);
seq__6193_6197 = G__6209;
chunk__6194_6198 = G__6210;
count__6195_6199 = G__6211;
i__6196_6200 = G__6212;
continue;
} else {
var s_6213 = cljs.core.first.call(null,seq__6193_6207__$1);
cljs.compiler.emitln.call(null,s_6213);


var G__6214 = cljs.core.next.call(null,seq__6193_6207__$1);
var G__6215 = null;
var G__6216 = (0);
var G__6217 = (0);
seq__6193_6197 = G__6214;
chunk__6194_6198 = G__6215;
count__6195_6199 = G__6216;
i__6196_6200 = G__6217;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__6218){
var map__6219 = p__6218;
var map__6219__$1 = (((((!((map__6219 == null))))?(((((map__6219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6219):map__6219);
var try$ = cljs.core.get.call(null,map__6219__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__6219__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__6219__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__6219__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__6219__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__6221,is_loop){
var map__6222 = p__6221;
var map__6222__$1 = (((((!((map__6222 == null))))?(((((map__6222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6222):map__6222);
var expr = cljs.core.get.call(null,map__6222__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__6222__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__6222__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__6224_6234 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__6225_6235 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__6224_6234,context,map__6222,map__6222__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__6224_6234,context,map__6222,map__6222__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__6225_6235;

try{var seq__6226_6236 = cljs.core.seq.call(null,bindings);
var chunk__6227_6237 = null;
var count__6228_6238 = (0);
var i__6229_6239 = (0);
while(true){
if((i__6229_6239 < count__6228_6238)){
var map__6230_6240 = cljs.core._nth.call(null,chunk__6227_6237,i__6229_6239);
var map__6230_6241__$1 = (((((!((map__6230_6240 == null))))?(((((map__6230_6240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6230_6240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6230_6240):map__6230_6240);
var binding_6242 = map__6230_6241__$1;
var init_6243 = cljs.core.get.call(null,map__6230_6241__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_6242);

cljs.compiler.emitln.call(null," = ",init_6243,";");


var G__6244 = seq__6226_6236;
var G__6245 = chunk__6227_6237;
var G__6246 = count__6228_6238;
var G__6247 = (i__6229_6239 + (1));
seq__6226_6236 = G__6244;
chunk__6227_6237 = G__6245;
count__6228_6238 = G__6246;
i__6229_6239 = G__6247;
continue;
} else {
var temp__5735__auto___6248 = cljs.core.seq.call(null,seq__6226_6236);
if(temp__5735__auto___6248){
var seq__6226_6249__$1 = temp__5735__auto___6248;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6226_6249__$1)){
var c__4461__auto___6250 = cljs.core.chunk_first.call(null,seq__6226_6249__$1);
var G__6251 = cljs.core.chunk_rest.call(null,seq__6226_6249__$1);
var G__6252 = c__4461__auto___6250;
var G__6253 = cljs.core.count.call(null,c__4461__auto___6250);
var G__6254 = (0);
seq__6226_6236 = G__6251;
chunk__6227_6237 = G__6252;
count__6228_6238 = G__6253;
i__6229_6239 = G__6254;
continue;
} else {
var map__6232_6255 = cljs.core.first.call(null,seq__6226_6249__$1);
var map__6232_6256__$1 = (((((!((map__6232_6255 == null))))?(((((map__6232_6255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6232_6255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6232_6255):map__6232_6255);
var binding_6257 = map__6232_6256__$1;
var init_6258 = cljs.core.get.call(null,map__6232_6256__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_6257);

cljs.compiler.emitln.call(null," = ",init_6258,";");


var G__6259 = cljs.core.next.call(null,seq__6226_6249__$1);
var G__6260 = null;
var G__6261 = (0);
var G__6262 = (0);
seq__6226_6236 = G__6259;
chunk__6227_6237 = G__6260;
count__6228_6238 = G__6261;
i__6229_6239 = G__6262;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__6224_6234;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__6263){
var map__6264 = p__6263;
var map__6264__$1 = (((((!((map__6264 == null))))?(((((map__6264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6264):map__6264);
var frame = cljs.core.get.call(null,map__6264__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__6264__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__6264__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4518__auto___6266 = cljs.core.count.call(null,exprs);
var i_6267 = (0);
while(true){
if((i_6267 < n__4518__auto___6266)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_6267)," = ",exprs.call(null,i_6267),";");

var G__6268 = (i_6267 + (1));
i_6267 = G__6268;
continue;
} else {
}
break;
}

var n__4518__auto___6269 = cljs.core.count.call(null,exprs);
var i_6270 = (0);
while(true){
if((i_6270 < n__4518__auto___6269)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_6270))," = ",temps.call(null,i_6270),";");

var G__6271 = (i_6270 + (1));
i_6270 = G__6271;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__6272){
var map__6273 = p__6272;
var map__6273__$1 = (((((!((map__6273 == null))))?(((((map__6273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6273):map__6273);
var expr = cljs.core.get.call(null,map__6273__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__6273__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__6273__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__6275_6283 = cljs.core.seq.call(null,bindings);
var chunk__6276_6284 = null;
var count__6277_6285 = (0);
var i__6278_6286 = (0);
while(true){
if((i__6278_6286 < count__6277_6285)){
var map__6279_6287 = cljs.core._nth.call(null,chunk__6276_6284,i__6278_6286);
var map__6279_6288__$1 = (((((!((map__6279_6287 == null))))?(((((map__6279_6287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6279_6287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6279_6287):map__6279_6287);
var binding_6289 = map__6279_6288__$1;
var init_6290 = cljs.core.get.call(null,map__6279_6288__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_6289)," = ",init_6290,";");


var G__6291 = seq__6275_6283;
var G__6292 = chunk__6276_6284;
var G__6293 = count__6277_6285;
var G__6294 = (i__6278_6286 + (1));
seq__6275_6283 = G__6291;
chunk__6276_6284 = G__6292;
count__6277_6285 = G__6293;
i__6278_6286 = G__6294;
continue;
} else {
var temp__5735__auto___6295 = cljs.core.seq.call(null,seq__6275_6283);
if(temp__5735__auto___6295){
var seq__6275_6296__$1 = temp__5735__auto___6295;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6275_6296__$1)){
var c__4461__auto___6297 = cljs.core.chunk_first.call(null,seq__6275_6296__$1);
var G__6298 = cljs.core.chunk_rest.call(null,seq__6275_6296__$1);
var G__6299 = c__4461__auto___6297;
var G__6300 = cljs.core.count.call(null,c__4461__auto___6297);
var G__6301 = (0);
seq__6275_6283 = G__6298;
chunk__6276_6284 = G__6299;
count__6277_6285 = G__6300;
i__6278_6286 = G__6301;
continue;
} else {
var map__6281_6302 = cljs.core.first.call(null,seq__6275_6296__$1);
var map__6281_6303__$1 = (((((!((map__6281_6302 == null))))?(((((map__6281_6302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6281_6302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6281_6302):map__6281_6302);
var binding_6304 = map__6281_6303__$1;
var init_6305 = cljs.core.get.call(null,map__6281_6303__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_6304)," = ",init_6305,";");


var G__6306 = cljs.core.next.call(null,seq__6275_6296__$1);
var G__6307 = null;
var G__6308 = (0);
var G__6309 = (0);
seq__6275_6283 = G__6306;
chunk__6276_6284 = G__6307;
count__6277_6285 = G__6308;
i__6278_6286 = G__6309;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__6312){
var map__6313 = p__6312;
var map__6313__$1 = (((((!((map__6313 == null))))?(((((map__6313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6313):map__6313);
var expr = map__6313__$1;
var f = cljs.core.get.call(null,map__6313__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__6313__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__6313__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__6315 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__6313,map__6313__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__6313,map__6313__$1,expr,f,args,env){
return (function (p1__6310_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__6310_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__6313,map__6313__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__6313,map__6313__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__6313,map__6313__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__6313,map__6313__$1,expr,f,args,env){
return (function (p1__6311_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__6311_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__6313,map__6313__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__6313,map__6313__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__6315,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__6315,(1),null);
var env__1437__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_6318 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_6318,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_6319 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_6319,args)),(((mfa_6319 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_6319,args)),"], 0))");
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
var fprop_6320 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_6320," ? ",f__$1,fprop_6320,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_6320," ? ",f__$1,fprop_6320,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__6321){
var map__6322 = p__6321;
var map__6322__$1 = (((((!((map__6322 == null))))?(((((map__6322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6322):map__6322);
var ctor = cljs.core.get.call(null,map__6322__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__6322__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__6322__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__1437__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__6324){
var map__6325 = p__6324;
var map__6325__$1 = (((((!((map__6325 == null))))?(((((map__6325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6325):map__6325);
var target = cljs.core.get.call(null,map__6325__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__6325__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__6325__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__1437__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
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
var map__6327 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__6327__$1 = (((((!((map__6327 == null))))?(((((map__6327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6327):map__6327);
var options = cljs.core.get.call(null,map__6327__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__6327__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__6328 = options;
var map__6328__$1 = (((((!((map__6328 == null))))?(((((map__6328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6328):map__6328);
var target = cljs.core.get.call(null,map__6328__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__6328__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__6329 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__6334 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__6334__$1 = (((((!((map__6334 == null))))?(((((map__6334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6334):map__6334);
var node_libs = cljs.core.get.call(null,map__6334__$1,true);
var libs_to_load = cljs.core.get.call(null,map__6334__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__6329,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__6329,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__6336_6352 = cljs.core.seq.call(null,libs_to_load);
var chunk__6337_6353 = null;
var count__6338_6354 = (0);
var i__6339_6355 = (0);
while(true){
if((i__6339_6355 < count__6338_6354)){
var lib_6356 = cljs.core._nth.call(null,chunk__6337_6353,i__6339_6355);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_6356)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_6356),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_6356),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_6356),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_6356),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_6356,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_6356),"');");
}

}
}
}


var G__6357 = seq__6336_6352;
var G__6358 = chunk__6337_6353;
var G__6359 = count__6338_6354;
var G__6360 = (i__6339_6355 + (1));
seq__6336_6352 = G__6357;
chunk__6337_6353 = G__6358;
count__6338_6354 = G__6359;
i__6339_6355 = G__6360;
continue;
} else {
var temp__5735__auto___6361 = cljs.core.seq.call(null,seq__6336_6352);
if(temp__5735__auto___6361){
var seq__6336_6362__$1 = temp__5735__auto___6361;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6336_6362__$1)){
var c__4461__auto___6363 = cljs.core.chunk_first.call(null,seq__6336_6362__$1);
var G__6364 = cljs.core.chunk_rest.call(null,seq__6336_6362__$1);
var G__6365 = c__4461__auto___6363;
var G__6366 = cljs.core.count.call(null,c__4461__auto___6363);
var G__6367 = (0);
seq__6336_6352 = G__6364;
chunk__6337_6353 = G__6365;
count__6338_6354 = G__6366;
i__6339_6355 = G__6367;
continue;
} else {
var lib_6368 = cljs.core.first.call(null,seq__6336_6362__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_6368)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_6368),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_6368),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_6368),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_6368),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_6368,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_6368),"');");
}

}
}
}


var G__6369 = cljs.core.next.call(null,seq__6336_6362__$1);
var G__6370 = null;
var G__6371 = (0);
var G__6372 = (0);
seq__6336_6352 = G__6369;
chunk__6337_6353 = G__6370;
count__6338_6354 = G__6371;
i__6339_6355 = G__6372;
continue;
}
} else {
}
}
break;
}

var seq__6340_6373 = cljs.core.seq.call(null,node_libs);
var chunk__6341_6374 = null;
var count__6342_6375 = (0);
var i__6343_6376 = (0);
while(true){
if((i__6343_6376 < count__6342_6375)){
var lib_6377 = cljs.core._nth.call(null,chunk__6341_6374,i__6343_6376);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_6377)," = require('",lib_6377,"');");


var G__6378 = seq__6340_6373;
var G__6379 = chunk__6341_6374;
var G__6380 = count__6342_6375;
var G__6381 = (i__6343_6376 + (1));
seq__6340_6373 = G__6378;
chunk__6341_6374 = G__6379;
count__6342_6375 = G__6380;
i__6343_6376 = G__6381;
continue;
} else {
var temp__5735__auto___6382 = cljs.core.seq.call(null,seq__6340_6373);
if(temp__5735__auto___6382){
var seq__6340_6383__$1 = temp__5735__auto___6382;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6340_6383__$1)){
var c__4461__auto___6384 = cljs.core.chunk_first.call(null,seq__6340_6383__$1);
var G__6385 = cljs.core.chunk_rest.call(null,seq__6340_6383__$1);
var G__6386 = c__4461__auto___6384;
var G__6387 = cljs.core.count.call(null,c__4461__auto___6384);
var G__6388 = (0);
seq__6340_6373 = G__6385;
chunk__6341_6374 = G__6386;
count__6342_6375 = G__6387;
i__6343_6376 = G__6388;
continue;
} else {
var lib_6389 = cljs.core.first.call(null,seq__6340_6383__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_6389)," = require('",lib_6389,"');");


var G__6390 = cljs.core.next.call(null,seq__6340_6383__$1);
var G__6391 = null;
var G__6392 = (0);
var G__6393 = (0);
seq__6340_6373 = G__6390;
chunk__6341_6374 = G__6391;
count__6342_6375 = G__6392;
i__6343_6376 = G__6393;
continue;
}
} else {
}
}
break;
}

var seq__6344_6394 = cljs.core.seq.call(null,global_exports_libs);
var chunk__6345_6395 = null;
var count__6346_6396 = (0);
var i__6347_6397 = (0);
while(true){
if((i__6347_6397 < count__6346_6396)){
var lib_6398 = cljs.core._nth.call(null,chunk__6345_6395,i__6347_6397);
var map__6348_6399 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_6398));
var map__6348_6400__$1 = (((((!((map__6348_6399 == null))))?(((((map__6348_6399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6348_6399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6348_6399):map__6348_6399);
var global_exports_6401 = cljs.core.get.call(null,map__6348_6400__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_6401,lib_6398);


var G__6402 = seq__6344_6394;
var G__6403 = chunk__6345_6395;
var G__6404 = count__6346_6396;
var G__6405 = (i__6347_6397 + (1));
seq__6344_6394 = G__6402;
chunk__6345_6395 = G__6403;
count__6346_6396 = G__6404;
i__6347_6397 = G__6405;
continue;
} else {
var temp__5735__auto___6406 = cljs.core.seq.call(null,seq__6344_6394);
if(temp__5735__auto___6406){
var seq__6344_6407__$1 = temp__5735__auto___6406;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6344_6407__$1)){
var c__4461__auto___6408 = cljs.core.chunk_first.call(null,seq__6344_6407__$1);
var G__6409 = cljs.core.chunk_rest.call(null,seq__6344_6407__$1);
var G__6410 = c__4461__auto___6408;
var G__6411 = cljs.core.count.call(null,c__4461__auto___6408);
var G__6412 = (0);
seq__6344_6394 = G__6409;
chunk__6345_6395 = G__6410;
count__6346_6396 = G__6411;
i__6347_6397 = G__6412;
continue;
} else {
var lib_6413 = cljs.core.first.call(null,seq__6344_6407__$1);
var map__6350_6414 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_6413));
var map__6350_6415__$1 = (((((!((map__6350_6414 == null))))?(((((map__6350_6414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6350_6414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6350_6414):map__6350_6414);
var global_exports_6416 = cljs.core.get.call(null,map__6350_6415__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_6416,lib_6413);


var G__6417 = cljs.core.next.call(null,seq__6344_6407__$1);
var G__6418 = null;
var G__6419 = (0);
var G__6420 = (0);
seq__6344_6394 = G__6417;
chunk__6345_6395 = G__6418;
count__6346_6396 = G__6419;
i__6347_6397 = G__6420;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__6421){
var map__6422 = p__6421;
var map__6422__$1 = (((((!((map__6422 == null))))?(((((map__6422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6422):map__6422);
var name = cljs.core.get.call(null,map__6422__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__6422__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__6422__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__6422__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__6422__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__6422__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__6422__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__6424){
var map__6425 = p__6424;
var map__6425__$1 = (((((!((map__6425 == null))))?(((((map__6425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6425):map__6425);
var name = cljs.core.get.call(null,map__6425__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__6425__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__6425__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__6425__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__6425__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__6425__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__6425__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__6427){
var map__6428 = p__6427;
var map__6428__$1 = (((((!((map__6428 == null))))?(((((map__6428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6428):map__6428);
var t = cljs.core.get.call(null,map__6428__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__6428__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__6428__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__6428__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__6428__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__6430_6448 = cljs.core.seq.call(null,protocols);
var chunk__6431_6449 = null;
var count__6432_6450 = (0);
var i__6433_6451 = (0);
while(true){
if((i__6433_6451 < count__6432_6450)){
var protocol_6452 = cljs.core._nth.call(null,chunk__6431_6449,i__6433_6451);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_6452)),"}");


var G__6453 = seq__6430_6448;
var G__6454 = chunk__6431_6449;
var G__6455 = count__6432_6450;
var G__6456 = (i__6433_6451 + (1));
seq__6430_6448 = G__6453;
chunk__6431_6449 = G__6454;
count__6432_6450 = G__6455;
i__6433_6451 = G__6456;
continue;
} else {
var temp__5735__auto___6457 = cljs.core.seq.call(null,seq__6430_6448);
if(temp__5735__auto___6457){
var seq__6430_6458__$1 = temp__5735__auto___6457;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6430_6458__$1)){
var c__4461__auto___6459 = cljs.core.chunk_first.call(null,seq__6430_6458__$1);
var G__6460 = cljs.core.chunk_rest.call(null,seq__6430_6458__$1);
var G__6461 = c__4461__auto___6459;
var G__6462 = cljs.core.count.call(null,c__4461__auto___6459);
var G__6463 = (0);
seq__6430_6448 = G__6460;
chunk__6431_6449 = G__6461;
count__6432_6450 = G__6462;
i__6433_6451 = G__6463;
continue;
} else {
var protocol_6464 = cljs.core.first.call(null,seq__6430_6458__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_6464)),"}");


var G__6465 = cljs.core.next.call(null,seq__6430_6458__$1);
var G__6466 = null;
var G__6467 = (0);
var G__6468 = (0);
seq__6430_6448 = G__6465;
chunk__6431_6449 = G__6466;
count__6432_6450 = G__6467;
i__6433_6451 = G__6468;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__6434_6469 = cljs.core.seq.call(null,fields__$1);
var chunk__6435_6470 = null;
var count__6436_6471 = (0);
var i__6437_6472 = (0);
while(true){
if((i__6437_6472 < count__6436_6471)){
var fld_6473 = cljs.core._nth.call(null,chunk__6435_6470,i__6437_6472);
cljs.compiler.emitln.call(null,"this.",fld_6473," = ",fld_6473,";");


var G__6474 = seq__6434_6469;
var G__6475 = chunk__6435_6470;
var G__6476 = count__6436_6471;
var G__6477 = (i__6437_6472 + (1));
seq__6434_6469 = G__6474;
chunk__6435_6470 = G__6475;
count__6436_6471 = G__6476;
i__6437_6472 = G__6477;
continue;
} else {
var temp__5735__auto___6478 = cljs.core.seq.call(null,seq__6434_6469);
if(temp__5735__auto___6478){
var seq__6434_6479__$1 = temp__5735__auto___6478;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6434_6479__$1)){
var c__4461__auto___6480 = cljs.core.chunk_first.call(null,seq__6434_6479__$1);
var G__6481 = cljs.core.chunk_rest.call(null,seq__6434_6479__$1);
var G__6482 = c__4461__auto___6480;
var G__6483 = cljs.core.count.call(null,c__4461__auto___6480);
var G__6484 = (0);
seq__6434_6469 = G__6481;
chunk__6435_6470 = G__6482;
count__6436_6471 = G__6483;
i__6437_6472 = G__6484;
continue;
} else {
var fld_6485 = cljs.core.first.call(null,seq__6434_6479__$1);
cljs.compiler.emitln.call(null,"this.",fld_6485," = ",fld_6485,";");


var G__6486 = cljs.core.next.call(null,seq__6434_6479__$1);
var G__6487 = null;
var G__6488 = (0);
var G__6489 = (0);
seq__6434_6469 = G__6486;
chunk__6435_6470 = G__6487;
count__6436_6471 = G__6488;
i__6437_6472 = G__6489;
continue;
}
} else {
}
}
break;
}

var seq__6438_6490 = cljs.core.seq.call(null,pmasks);
var chunk__6439_6491 = null;
var count__6440_6492 = (0);
var i__6441_6493 = (0);
while(true){
if((i__6441_6493 < count__6440_6492)){
var vec__6442_6494 = cljs.core._nth.call(null,chunk__6439_6491,i__6441_6493);
var pno_6495 = cljs.core.nth.call(null,vec__6442_6494,(0),null);
var pmask_6496 = cljs.core.nth.call(null,vec__6442_6494,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_6495,"$ = ",pmask_6496,";");


var G__6497 = seq__6438_6490;
var G__6498 = chunk__6439_6491;
var G__6499 = count__6440_6492;
var G__6500 = (i__6441_6493 + (1));
seq__6438_6490 = G__6497;
chunk__6439_6491 = G__6498;
count__6440_6492 = G__6499;
i__6441_6493 = G__6500;
continue;
} else {
var temp__5735__auto___6501 = cljs.core.seq.call(null,seq__6438_6490);
if(temp__5735__auto___6501){
var seq__6438_6502__$1 = temp__5735__auto___6501;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6438_6502__$1)){
var c__4461__auto___6503 = cljs.core.chunk_first.call(null,seq__6438_6502__$1);
var G__6504 = cljs.core.chunk_rest.call(null,seq__6438_6502__$1);
var G__6505 = c__4461__auto___6503;
var G__6506 = cljs.core.count.call(null,c__4461__auto___6503);
var G__6507 = (0);
seq__6438_6490 = G__6504;
chunk__6439_6491 = G__6505;
count__6440_6492 = G__6506;
i__6441_6493 = G__6507;
continue;
} else {
var vec__6445_6508 = cljs.core.first.call(null,seq__6438_6502__$1);
var pno_6509 = cljs.core.nth.call(null,vec__6445_6508,(0),null);
var pmask_6510 = cljs.core.nth.call(null,vec__6445_6508,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_6509,"$ = ",pmask_6510,";");


var G__6511 = cljs.core.next.call(null,seq__6438_6502__$1);
var G__6512 = null;
var G__6513 = (0);
var G__6514 = (0);
seq__6438_6490 = G__6511;
chunk__6439_6491 = G__6512;
count__6440_6492 = G__6513;
i__6441_6493 = G__6514;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__6515){
var map__6516 = p__6515;
var map__6516__$1 = (((((!((map__6516 == null))))?(((((map__6516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6516):map__6516);
var t = cljs.core.get.call(null,map__6516__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__6516__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__6516__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__6516__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__6516__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__6518_6536 = cljs.core.seq.call(null,protocols);
var chunk__6519_6537 = null;
var count__6520_6538 = (0);
var i__6521_6539 = (0);
while(true){
if((i__6521_6539 < count__6520_6538)){
var protocol_6540 = cljs.core._nth.call(null,chunk__6519_6537,i__6521_6539);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_6540)),"}");


var G__6541 = seq__6518_6536;
var G__6542 = chunk__6519_6537;
var G__6543 = count__6520_6538;
var G__6544 = (i__6521_6539 + (1));
seq__6518_6536 = G__6541;
chunk__6519_6537 = G__6542;
count__6520_6538 = G__6543;
i__6521_6539 = G__6544;
continue;
} else {
var temp__5735__auto___6545 = cljs.core.seq.call(null,seq__6518_6536);
if(temp__5735__auto___6545){
var seq__6518_6546__$1 = temp__5735__auto___6545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6518_6546__$1)){
var c__4461__auto___6547 = cljs.core.chunk_first.call(null,seq__6518_6546__$1);
var G__6548 = cljs.core.chunk_rest.call(null,seq__6518_6546__$1);
var G__6549 = c__4461__auto___6547;
var G__6550 = cljs.core.count.call(null,c__4461__auto___6547);
var G__6551 = (0);
seq__6518_6536 = G__6548;
chunk__6519_6537 = G__6549;
count__6520_6538 = G__6550;
i__6521_6539 = G__6551;
continue;
} else {
var protocol_6552 = cljs.core.first.call(null,seq__6518_6546__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_6552)),"}");


var G__6553 = cljs.core.next.call(null,seq__6518_6546__$1);
var G__6554 = null;
var G__6555 = (0);
var G__6556 = (0);
seq__6518_6536 = G__6553;
chunk__6519_6537 = G__6554;
count__6520_6538 = G__6555;
i__6521_6539 = G__6556;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__6522_6557 = cljs.core.seq.call(null,fields__$1);
var chunk__6523_6558 = null;
var count__6524_6559 = (0);
var i__6525_6560 = (0);
while(true){
if((i__6525_6560 < count__6524_6559)){
var fld_6561 = cljs.core._nth.call(null,chunk__6523_6558,i__6525_6560);
cljs.compiler.emitln.call(null,"this.",fld_6561," = ",fld_6561,";");


var G__6562 = seq__6522_6557;
var G__6563 = chunk__6523_6558;
var G__6564 = count__6524_6559;
var G__6565 = (i__6525_6560 + (1));
seq__6522_6557 = G__6562;
chunk__6523_6558 = G__6563;
count__6524_6559 = G__6564;
i__6525_6560 = G__6565;
continue;
} else {
var temp__5735__auto___6566 = cljs.core.seq.call(null,seq__6522_6557);
if(temp__5735__auto___6566){
var seq__6522_6567__$1 = temp__5735__auto___6566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6522_6567__$1)){
var c__4461__auto___6568 = cljs.core.chunk_first.call(null,seq__6522_6567__$1);
var G__6569 = cljs.core.chunk_rest.call(null,seq__6522_6567__$1);
var G__6570 = c__4461__auto___6568;
var G__6571 = cljs.core.count.call(null,c__4461__auto___6568);
var G__6572 = (0);
seq__6522_6557 = G__6569;
chunk__6523_6558 = G__6570;
count__6524_6559 = G__6571;
i__6525_6560 = G__6572;
continue;
} else {
var fld_6573 = cljs.core.first.call(null,seq__6522_6567__$1);
cljs.compiler.emitln.call(null,"this.",fld_6573," = ",fld_6573,";");


var G__6574 = cljs.core.next.call(null,seq__6522_6567__$1);
var G__6575 = null;
var G__6576 = (0);
var G__6577 = (0);
seq__6522_6557 = G__6574;
chunk__6523_6558 = G__6575;
count__6524_6559 = G__6576;
i__6525_6560 = G__6577;
continue;
}
} else {
}
}
break;
}

var seq__6526_6578 = cljs.core.seq.call(null,pmasks);
var chunk__6527_6579 = null;
var count__6528_6580 = (0);
var i__6529_6581 = (0);
while(true){
if((i__6529_6581 < count__6528_6580)){
var vec__6530_6582 = cljs.core._nth.call(null,chunk__6527_6579,i__6529_6581);
var pno_6583 = cljs.core.nth.call(null,vec__6530_6582,(0),null);
var pmask_6584 = cljs.core.nth.call(null,vec__6530_6582,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_6583,"$ = ",pmask_6584,";");


var G__6585 = seq__6526_6578;
var G__6586 = chunk__6527_6579;
var G__6587 = count__6528_6580;
var G__6588 = (i__6529_6581 + (1));
seq__6526_6578 = G__6585;
chunk__6527_6579 = G__6586;
count__6528_6580 = G__6587;
i__6529_6581 = G__6588;
continue;
} else {
var temp__5735__auto___6589 = cljs.core.seq.call(null,seq__6526_6578);
if(temp__5735__auto___6589){
var seq__6526_6590__$1 = temp__5735__auto___6589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6526_6590__$1)){
var c__4461__auto___6591 = cljs.core.chunk_first.call(null,seq__6526_6590__$1);
var G__6592 = cljs.core.chunk_rest.call(null,seq__6526_6590__$1);
var G__6593 = c__4461__auto___6591;
var G__6594 = cljs.core.count.call(null,c__4461__auto___6591);
var G__6595 = (0);
seq__6526_6578 = G__6592;
chunk__6527_6579 = G__6593;
count__6528_6580 = G__6594;
i__6529_6581 = G__6595;
continue;
} else {
var vec__6533_6596 = cljs.core.first.call(null,seq__6526_6590__$1);
var pno_6597 = cljs.core.nth.call(null,vec__6533_6596,(0),null);
var pmask_6598 = cljs.core.nth.call(null,vec__6533_6596,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_6597,"$ = ",pmask_6598,";");


var G__6599 = cljs.core.next.call(null,seq__6526_6590__$1);
var G__6600 = null;
var G__6601 = (0);
var G__6602 = (0);
seq__6526_6578 = G__6599;
chunk__6527_6579 = G__6600;
count__6528_6580 = G__6601;
i__6529_6581 = G__6602;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__6603){
var map__6604 = p__6603;
var map__6604__$1 = (((((!((map__6604 == null))))?(((((map__6604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6604):map__6604);
var target = cljs.core.get.call(null,map__6604__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__6604__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__6604__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__6604__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__6604__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__1437__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__6606){
var map__6607 = p__6606;
var map__6607__$1 = (((((!((map__6607 == null))))?(((((map__6607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6607):map__6607);
var op = cljs.core.get.call(null,map__6607__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__6607__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__6607__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__6607__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__6607__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4036__auto__ = code;
if(cljs.core.truth_(and__4036__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4036__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__1437__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__1437__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__6613 = cljs.core.seq.call(null,table);
var chunk__6614 = null;
var count__6615 = (0);
var i__6616 = (0);
while(true){
if((i__6616 < count__6615)){
var vec__6617 = cljs.core._nth.call(null,chunk__6614,i__6616);
var sym = cljs.core.nth.call(null,vec__6617,(0),null);
var value = cljs.core.nth.call(null,vec__6617,(1),null);
var ns_6623 = cljs.core.namespace.call(null,sym);
var name_6624 = cljs.core.name.call(null,sym);
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


var G__6625 = seq__6613;
var G__6626 = chunk__6614;
var G__6627 = count__6615;
var G__6628 = (i__6616 + (1));
seq__6613 = G__6625;
chunk__6614 = G__6626;
count__6615 = G__6627;
i__6616 = G__6628;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__6613);
if(temp__5735__auto__){
var seq__6613__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6613__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__6613__$1);
var G__6629 = cljs.core.chunk_rest.call(null,seq__6613__$1);
var G__6630 = c__4461__auto__;
var G__6631 = cljs.core.count.call(null,c__4461__auto__);
var G__6632 = (0);
seq__6613 = G__6629;
chunk__6614 = G__6630;
count__6615 = G__6631;
i__6616 = G__6632;
continue;
} else {
var vec__6620 = cljs.core.first.call(null,seq__6613__$1);
var sym = cljs.core.nth.call(null,vec__6620,(0),null);
var value = cljs.core.nth.call(null,vec__6620,(1),null);
var ns_6633 = cljs.core.namespace.call(null,sym);
var name_6634 = cljs.core.name.call(null,sym);
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


var G__6635 = cljs.core.next.call(null,seq__6613__$1);
var G__6636 = null;
var G__6637 = (0);
var G__6638 = (0);
seq__6613 = G__6635;
chunk__6614 = G__6636;
count__6615 = G__6637;
i__6616 = G__6638;
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
var G__6640 = arguments.length;
switch (G__6640) {
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
var k_6645 = cljs.core.first.call(null,ks);
var vec__6641_6646 = cljs.core.conj.call(null,prefix,k_6645);
var top_6647 = cljs.core.nth.call(null,vec__6641_6646,(0),null);
var prefix_SINGLEQUOTE__6648 = vec__6641_6646;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_6645)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__6648) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_6647)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_6647)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__6648)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_6647);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__6648)),";");
}
} else {
}

var m_6649 = cljs.core.get.call(null,externs,k_6645);
if(cljs.core.empty_QMARK_.call(null,m_6649)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__6648,m_6649,top_level,known_externs);
}

var G__6650 = cljs.core.next.call(null,ks);
ks = G__6650;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
