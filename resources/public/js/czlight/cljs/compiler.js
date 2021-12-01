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
var map__6571 = s;
var map__6571__$1 = (((((!((map__6571 == null))))?(((((map__6571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6571):map__6571);
var name = cljs.core.get.call(null,map__6571__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__6571__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__6574 = info;
var map__6575 = G__6574;
var map__6575__$1 = (((((!((map__6575 == null))))?(((((map__6575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6575):map__6575);
var shadow = cljs.core.get.call(null,map__6575__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__6574__$1 = G__6574;
while(true){
var d__$2 = d__$1;
var map__6577 = G__6574__$1;
var map__6577__$1 = (((((!((map__6577 == null))))?(((((map__6577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6577):map__6577);
var shadow__$1 = cljs.core.get.call(null,map__6577__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__6579 = (d__$2 + (1));
var G__6580 = shadow__$1;
d__$1 = G__6579;
G__6574__$1 = G__6580;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__6581){
var map__6582 = p__6581;
var map__6582__$1 = (((((!((map__6582 == null))))?(((((map__6582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6582):map__6582);
var name_var = map__6582__$1;
var name = cljs.core.get.call(null,map__6582__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__6582__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__6584 = info;
var map__6584__$1 = (((((!((map__6584 == null))))?(((((map__6584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6584):map__6584);
var ns = cljs.core.get.call(null,map__6584__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__6584__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__6587 = arguments.length;
switch (G__6587) {
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
var G__6589 = cp;
switch (G__6589) {
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
var seq__6591_6595 = cljs.core.seq.call(null,s);
var chunk__6592_6596 = null;
var count__6593_6597 = (0);
var i__6594_6598 = (0);
while(true){
if((i__6594_6598 < count__6593_6597)){
var c_6599 = cljs.core._nth.call(null,chunk__6592_6596,i__6594_6598);
sb.append(cljs.compiler.escape_char.call(null,c_6599));


var G__6600 = seq__6591_6595;
var G__6601 = chunk__6592_6596;
var G__6602 = count__6593_6597;
var G__6603 = (i__6594_6598 + (1));
seq__6591_6595 = G__6600;
chunk__6592_6596 = G__6601;
count__6593_6597 = G__6602;
i__6594_6598 = G__6603;
continue;
} else {
var temp__5735__auto___6604 = cljs.core.seq.call(null,seq__6591_6595);
if(temp__5735__auto___6604){
var seq__6591_6605__$1 = temp__5735__auto___6604;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6591_6605__$1)){
var c__4461__auto___6606 = cljs.core.chunk_first.call(null,seq__6591_6605__$1);
var G__6607 = cljs.core.chunk_rest.call(null,seq__6591_6605__$1);
var G__6608 = c__4461__auto___6606;
var G__6609 = cljs.core.count.call(null,c__4461__auto___6606);
var G__6610 = (0);
seq__6591_6595 = G__6607;
chunk__6592_6596 = G__6608;
count__6593_6597 = G__6609;
i__6594_6598 = G__6610;
continue;
} else {
var c_6611 = cljs.core.first.call(null,seq__6591_6605__$1);
sb.append(cljs.compiler.escape_char.call(null,c_6611));


var G__6612 = cljs.core.next.call(null,seq__6591_6605__$1);
var G__6613 = null;
var G__6614 = (0);
var G__6615 = (0);
seq__6591_6595 = G__6612;
chunk__6592_6596 = G__6613;
count__6593_6597 = G__6614;
i__6594_6598 = G__6615;
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
var map__6616_6621 = ast;
var map__6616_6622__$1 = (((((!((map__6616_6621 == null))))?(((((map__6616_6621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6616_6621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6616_6621):map__6616_6621);
var env_6623 = cljs.core.get.call(null,map__6616_6622__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_6623))){
var map__6618_6624 = env_6623;
var map__6618_6625__$1 = (((((!((map__6618_6624 == null))))?(((((map__6618_6624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6618_6624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6618_6624):map__6618_6624);
var line_6626 = cljs.core.get.call(null,map__6618_6625__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_6627 = cljs.core.get.call(null,map__6618_6625__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__6618_6624,map__6618_6625__$1,line_6626,column_6627,map__6616_6621,map__6616_6622__$1,env_6623){
return (function (m){
var minfo = (function (){var G__6620 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__6620,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__6620;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_6626 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__6618_6624,map__6618_6625__$1,line_6626,column_6627,map__6616_6621,map__6616_6622__$1,env_6623){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_6627)?(column_6627 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__6618_6624,map__6618_6625__$1,line_6626,column_6627,map__6616_6621,map__6616_6622__$1,env_6623){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__6618_6624,map__6618_6625__$1,line_6626,column_6627,map__6616_6621,map__6616_6622__$1,env_6623))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__6618_6624,map__6618_6625__$1,line_6626,column_6627,map__6616_6621,map__6616_6622__$1,env_6623))
,cljs.core.sorted_map.call(null)));
});})(map__6618_6624,map__6618_6625__$1,line_6626,column_6627,map__6616_6621,map__6616_6622__$1,env_6623))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__6636 = arguments.length;
switch (G__6636) {
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
var len__4641__auto___6643 = arguments.length;
var i__4642__auto___6644 = (0);
while(true){
if((i__4642__auto___6644 < len__4641__auto___6643)){
args_arr__4662__auto__.push((arguments[i__4642__auto___6644]));

var G__6645 = (i__4642__auto___6644 + (1));
i__4642__auto___6644 = G__6645;
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
var s_6646 = (function (){var G__6637 = a;
if((!(typeof a === 'string'))){
return G__6637.toString();
} else {
return G__6637;
}
})();
var temp__5739__auto___6647 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___6647 == null)){
} else {
var sm_data_6648 = temp__5739__auto___6647;
cljs.core.swap_BANG_.call(null,sm_data_6648,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_6648,temp__5739__auto___6647,s_6646){
return (function (p1__6628_SHARP_){
return (p1__6628_SHARP_ + s_6646.length);
});})(sm_data_6648,temp__5739__auto___6647,s_6646))
);
}

cljs.core.print.call(null,s_6646);

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

var seq__6638 = cljs.core.seq.call(null,xs);
var chunk__6639 = null;
var count__6640 = (0);
var i__6641 = (0);
while(true){
if((i__6641 < count__6640)){
var x = cljs.core._nth.call(null,chunk__6639,i__6641);
cljs.compiler.emits.call(null,x);


var G__6649 = seq__6638;
var G__6650 = chunk__6639;
var G__6651 = count__6640;
var G__6652 = (i__6641 + (1));
seq__6638 = G__6649;
chunk__6639 = G__6650;
count__6640 = G__6651;
i__6641 = G__6652;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__6638);
if(temp__5735__auto__){
var seq__6638__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6638__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__6638__$1);
var G__6653 = cljs.core.chunk_rest.call(null,seq__6638__$1);
var G__6654 = c__4461__auto__;
var G__6655 = cljs.core.count.call(null,c__4461__auto__);
var G__6656 = (0);
seq__6638 = G__6653;
chunk__6639 = G__6654;
count__6640 = G__6655;
i__6641 = G__6656;
continue;
} else {
var x = cljs.core.first.call(null,seq__6638__$1);
cljs.compiler.emits.call(null,x);


var G__6657 = cljs.core.next.call(null,seq__6638__$1);
var G__6658 = null;
var G__6659 = (0);
var G__6660 = (0);
seq__6638 = G__6657;
chunk__6639 = G__6658;
count__6640 = G__6659;
i__6641 = G__6660;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq6630){
var G__6631 = cljs.core.first.call(null,seq6630);
var seq6630__$1 = cljs.core.next.call(null,seq6630);
var G__6632 = cljs.core.first.call(null,seq6630__$1);
var seq6630__$2 = cljs.core.next.call(null,seq6630__$1);
var G__6633 = cljs.core.first.call(null,seq6630__$2);
var seq6630__$3 = cljs.core.next.call(null,seq6630__$2);
var G__6634 = cljs.core.first.call(null,seq6630__$3);
var seq6630__$4 = cljs.core.next.call(null,seq6630__$3);
var G__6635 = cljs.core.first.call(null,seq6630__$4);
var seq6630__$5 = cljs.core.next.call(null,seq6630__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6631,G__6632,G__6633,G__6634,G__6635,seq6630__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__6661){
var map__6662 = p__6661;
var map__6662__$1 = (((((!((map__6662 == null))))?(((((map__6662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6662):map__6662);
var m = map__6662__$1;
var gen_line = cljs.core.get.call(null,map__6662__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__6671 = arguments.length;
switch (G__6671) {
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
var len__4641__auto___6677 = arguments.length;
var i__4642__auto___6678 = (0);
while(true){
if((i__4642__auto___6678 < len__4641__auto___6677)){
args_arr__4662__auto__.push((arguments[i__4642__auto___6678]));

var G__6679 = (i__4642__auto___6678 + (1));
i__4642__auto___6678 = G__6679;
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

var seq__6672_6680 = cljs.core.seq.call(null,xs);
var chunk__6673_6681 = null;
var count__6674_6682 = (0);
var i__6675_6683 = (0);
while(true){
if((i__6675_6683 < count__6674_6682)){
var x_6684 = cljs.core._nth.call(null,chunk__6673_6681,i__6675_6683);
cljs.compiler.emits.call(null,x_6684);


var G__6685 = seq__6672_6680;
var G__6686 = chunk__6673_6681;
var G__6687 = count__6674_6682;
var G__6688 = (i__6675_6683 + (1));
seq__6672_6680 = G__6685;
chunk__6673_6681 = G__6686;
count__6674_6682 = G__6687;
i__6675_6683 = G__6688;
continue;
} else {
var temp__5735__auto___6689 = cljs.core.seq.call(null,seq__6672_6680);
if(temp__5735__auto___6689){
var seq__6672_6690__$1 = temp__5735__auto___6689;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6672_6690__$1)){
var c__4461__auto___6691 = cljs.core.chunk_first.call(null,seq__6672_6690__$1);
var G__6692 = cljs.core.chunk_rest.call(null,seq__6672_6690__$1);
var G__6693 = c__4461__auto___6691;
var G__6694 = cljs.core.count.call(null,c__4461__auto___6691);
var G__6695 = (0);
seq__6672_6680 = G__6692;
chunk__6673_6681 = G__6693;
count__6674_6682 = G__6694;
i__6675_6683 = G__6695;
continue;
} else {
var x_6696 = cljs.core.first.call(null,seq__6672_6690__$1);
cljs.compiler.emits.call(null,x_6696);


var G__6697 = cljs.core.next.call(null,seq__6672_6690__$1);
var G__6698 = null;
var G__6699 = (0);
var G__6700 = (0);
seq__6672_6680 = G__6697;
chunk__6673_6681 = G__6698;
count__6674_6682 = G__6699;
i__6675_6683 = G__6700;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq6665){
var G__6666 = cljs.core.first.call(null,seq6665);
var seq6665__$1 = cljs.core.next.call(null,seq6665);
var G__6667 = cljs.core.first.call(null,seq6665__$1);
var seq6665__$2 = cljs.core.next.call(null,seq6665__$1);
var G__6668 = cljs.core.first.call(null,seq6665__$2);
var seq6665__$3 = cljs.core.next.call(null,seq6665__$2);
var G__6669 = cljs.core.first.call(null,seq6665__$3);
var seq6665__$4 = cljs.core.next.call(null,seq6665__$3);
var G__6670 = cljs.core.first.call(null,seq6665__$4);
var seq6665__$5 = cljs.core.next.call(null,seq6665__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6666,G__6667,G__6668,G__6669,G__6670,seq6665__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__6701_6705 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__6702_6706 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__6703_6707 = true;
var _STAR_print_fn_STAR__temp_val__6704_6708 = ((function (_STAR_print_newline_STAR__orig_val__6701_6705,_STAR_print_fn_STAR__orig_val__6702_6706,_STAR_print_newline_STAR__temp_val__6703_6707,sb__4572__auto__){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__6701_6705,_STAR_print_fn_STAR__orig_val__6702_6706,_STAR_print_newline_STAR__temp_val__6703_6707,sb__4572__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__6703_6707;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__6704_6708;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__6702_6706;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__6701_6705;
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
var vec__6709 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__6709,(0),null);
var name = cljs.core.nth.call(null,vec__6709,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__6709,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__6709,ns,name))
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
var vec__6712 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__6712,(0),null);
var flags = cljs.core.nth.call(null,vec__6712,(1),null);
var pattern = cljs.core.nth.call(null,vec__6712,(2),null);
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
return (function (p1__6715_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__6715_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__6717){
var map__6718 = p__6717;
var map__6718__$1 = (((((!((map__6718 == null))))?(((((map__6718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6718):map__6718);
var ast = map__6718__$1;
var info = cljs.core.get.call(null,map__6718__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__6718__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__6718__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__6720 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__6720__$1 = (((((!((map__6720 == null))))?(((((map__6720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6720):map__6720);
var cenv = map__6720__$1;
var options = cljs.core.get.call(null,map__6720__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__6722 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4036__auto__;
}
})())){
return clojure.set.difference.call(null,G__6722,cljs.analyzer.es5_allowed);
} else {
return G__6722;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4047__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__6723 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__6723,reserved);
} else {
return G__6723;
}
})();
var env__5391__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__6724_6725 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__6724_6726__$1 = (((G__6724_6725 instanceof cljs.core.Keyword))?G__6724_6725.fqn:null);
switch (G__6724_6726__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__6728){
var map__6729 = p__6728;
var map__6729__$1 = (((((!((map__6729 == null))))?(((((map__6729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6729):map__6729);
var arg = map__6729__$1;
var env = cljs.core.get.call(null,map__6729__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__6729__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__6729__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__6729__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__6731 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__6731__$1 = (((((!((map__6731 == null))))?(((((map__6731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6731):map__6731);
var name = cljs.core.get.call(null,map__6731__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__5391__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__6733){
var map__6734 = p__6733;
var map__6734__$1 = (((((!((map__6734 == null))))?(((((map__6734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6734):map__6734);
var expr = cljs.core.get.call(null,map__6734__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__6734__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__6734__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5391__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__6736_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__6736_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__6737){
var map__6738 = p__6737;
var map__6738__$1 = (((((!((map__6738 == null))))?(((((map__6738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6738):map__6738);
var env = cljs.core.get.call(null,map__6738__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__6738__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__6738__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__5391__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__6740){
var map__6741 = p__6740;
var map__6741__$1 = (((((!((map__6741 == null))))?(((((map__6741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6741):map__6741);
var items = cljs.core.get.call(null,map__6741__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__6741__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5391__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__6743_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__6743_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__6744){
var map__6745 = p__6744;
var map__6745__$1 = (((((!((map__6745 == null))))?(((((map__6745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6745):map__6745);
var items = cljs.core.get.call(null,map__6745__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__6745__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5391__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5735__auto___6763 = cljs.core.seq.call(null,items);
if(temp__5735__auto___6763){
var items_6764__$1 = temp__5735__auto___6763;
var vec__6747_6765 = items_6764__$1;
var seq__6748_6766 = cljs.core.seq.call(null,vec__6747_6765);
var first__6749_6767 = cljs.core.first.call(null,seq__6748_6766);
var seq__6748_6768__$1 = cljs.core.next.call(null,seq__6748_6766);
var vec__6750_6769 = first__6749_6767;
var k_6770 = cljs.core.nth.call(null,vec__6750_6769,(0),null);
var v_6771 = cljs.core.nth.call(null,vec__6750_6769,(1),null);
var r_6772 = seq__6748_6768__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_6770),"\": ",emit_js_object_val.call(null,v_6771));

var seq__6753_6773 = cljs.core.seq.call(null,r_6772);
var chunk__6754_6774 = null;
var count__6755_6775 = (0);
var i__6756_6776 = (0);
while(true){
if((i__6756_6776 < count__6755_6775)){
var vec__6757_6777 = cljs.core._nth.call(null,chunk__6754_6774,i__6756_6776);
var k_6778__$1 = cljs.core.nth.call(null,vec__6757_6777,(0),null);
var v_6779__$1 = cljs.core.nth.call(null,vec__6757_6777,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_6778__$1),"\": ",emit_js_object_val.call(null,v_6779__$1));


var G__6780 = seq__6753_6773;
var G__6781 = chunk__6754_6774;
var G__6782 = count__6755_6775;
var G__6783 = (i__6756_6776 + (1));
seq__6753_6773 = G__6780;
chunk__6754_6774 = G__6781;
count__6755_6775 = G__6782;
i__6756_6776 = G__6783;
continue;
} else {
var temp__5735__auto___6784__$1 = cljs.core.seq.call(null,seq__6753_6773);
if(temp__5735__auto___6784__$1){
var seq__6753_6785__$1 = temp__5735__auto___6784__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6753_6785__$1)){
var c__4461__auto___6786 = cljs.core.chunk_first.call(null,seq__6753_6785__$1);
var G__6787 = cljs.core.chunk_rest.call(null,seq__6753_6785__$1);
var G__6788 = c__4461__auto___6786;
var G__6789 = cljs.core.count.call(null,c__4461__auto___6786);
var G__6790 = (0);
seq__6753_6773 = G__6787;
chunk__6754_6774 = G__6788;
count__6755_6775 = G__6789;
i__6756_6776 = G__6790;
continue;
} else {
var vec__6760_6791 = cljs.core.first.call(null,seq__6753_6785__$1);
var k_6792__$1 = cljs.core.nth.call(null,vec__6760_6791,(0),null);
var v_6793__$1 = cljs.core.nth.call(null,vec__6760_6791,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_6792__$1),"\": ",emit_js_object_val.call(null,v_6793__$1));


var G__6794 = cljs.core.next.call(null,seq__6753_6785__$1);
var G__6795 = null;
var G__6796 = (0);
var G__6797 = (0);
seq__6753_6773 = G__6794;
chunk__6754_6774 = G__6795;
count__6755_6775 = G__6796;
i__6756_6776 = G__6797;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__6798){
var map__6799 = p__6798;
var map__6799__$1 = (((((!((map__6799 == null))))?(((((map__6799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6799):map__6799);
var keys = cljs.core.get.call(null,map__6799__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__6799__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__6799__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5391__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__6801){
var map__6802 = p__6801;
var map__6802__$1 = (((((!((map__6802 == null))))?(((((map__6802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6802):map__6802);
var items = cljs.core.get.call(null,map__6802__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__6802__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5391__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__6804){
var map__6805 = p__6804;
var map__6805__$1 = (((((!((map__6805 == null))))?(((((map__6805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6805):map__6805);
var expr = cljs.core.get.call(null,map__6805__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__6807){
var map__6808 = p__6807;
var map__6808__$1 = (((((!((map__6808 == null))))?(((((map__6808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6808):map__6808);
var form = cljs.core.get.call(null,map__6808__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__6808__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__5391__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__6810 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__6810__$1 = (((((!((map__6810 == null))))?(((((map__6810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6810):map__6810);
var op = cljs.core.get.call(null,map__6810__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__6810__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__6810__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__6812 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__6812__$1 = (((((!((map__6812 == null))))?(((((map__6812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6812):map__6812);
var op = cljs.core.get.call(null,map__6812__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__6812__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__6812__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__6814){
var map__6815 = p__6814;
var map__6815__$1 = (((((!((map__6815 == null))))?(((((map__6815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6815):map__6815);
var test = cljs.core.get.call(null,map__6815__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__6815__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__6815__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__6815__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__6815__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__6817){
var map__6818 = p__6817;
var map__6818__$1 = (((((!((map__6818 == null))))?(((((map__6818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6818):map__6818);
var v = cljs.core.get.call(null,map__6818__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__6818__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__6818__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__6818__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__6820_6840 = cljs.core.seq.call(null,nodes);
var chunk__6821_6841 = null;
var count__6822_6842 = (0);
var i__6823_6843 = (0);
while(true){
if((i__6823_6843 < count__6822_6842)){
var map__6824_6844 = cljs.core._nth.call(null,chunk__6821_6841,i__6823_6843);
var map__6824_6845__$1 = (((((!((map__6824_6844 == null))))?(((((map__6824_6844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6824_6844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6824_6844):map__6824_6844);
var ts_6846 = cljs.core.get.call(null,map__6824_6845__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__6825_6847 = cljs.core.get.call(null,map__6824_6845__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__6825_6848__$1 = (((((!((map__6825_6847 == null))))?(((((map__6825_6847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6825_6847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6825_6847):map__6825_6847);
var then_6849 = cljs.core.get.call(null,map__6825_6848__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__6828_6850 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_6846));
var chunk__6829_6851 = null;
var count__6830_6852 = (0);
var i__6831_6853 = (0);
while(true){
if((i__6831_6853 < count__6830_6852)){
var test_6854 = cljs.core._nth.call(null,chunk__6829_6851,i__6831_6853);
cljs.compiler.emitln.call(null,"case ",test_6854,":");


var G__6855 = seq__6828_6850;
var G__6856 = chunk__6829_6851;
var G__6857 = count__6830_6852;
var G__6858 = (i__6831_6853 + (1));
seq__6828_6850 = G__6855;
chunk__6829_6851 = G__6856;
count__6830_6852 = G__6857;
i__6831_6853 = G__6858;
continue;
} else {
var temp__5735__auto___6859 = cljs.core.seq.call(null,seq__6828_6850);
if(temp__5735__auto___6859){
var seq__6828_6860__$1 = temp__5735__auto___6859;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6828_6860__$1)){
var c__4461__auto___6861 = cljs.core.chunk_first.call(null,seq__6828_6860__$1);
var G__6862 = cljs.core.chunk_rest.call(null,seq__6828_6860__$1);
var G__6863 = c__4461__auto___6861;
var G__6864 = cljs.core.count.call(null,c__4461__auto___6861);
var G__6865 = (0);
seq__6828_6850 = G__6862;
chunk__6829_6851 = G__6863;
count__6830_6852 = G__6864;
i__6831_6853 = G__6865;
continue;
} else {
var test_6866 = cljs.core.first.call(null,seq__6828_6860__$1);
cljs.compiler.emitln.call(null,"case ",test_6866,":");


var G__6867 = cljs.core.next.call(null,seq__6828_6860__$1);
var G__6868 = null;
var G__6869 = (0);
var G__6870 = (0);
seq__6828_6850 = G__6867;
chunk__6829_6851 = G__6868;
count__6830_6852 = G__6869;
i__6831_6853 = G__6870;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_6849);
} else {
cljs.compiler.emitln.call(null,then_6849);
}

cljs.compiler.emitln.call(null,"break;");


var G__6871 = seq__6820_6840;
var G__6872 = chunk__6821_6841;
var G__6873 = count__6822_6842;
var G__6874 = (i__6823_6843 + (1));
seq__6820_6840 = G__6871;
chunk__6821_6841 = G__6872;
count__6822_6842 = G__6873;
i__6823_6843 = G__6874;
continue;
} else {
var temp__5735__auto___6875 = cljs.core.seq.call(null,seq__6820_6840);
if(temp__5735__auto___6875){
var seq__6820_6876__$1 = temp__5735__auto___6875;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6820_6876__$1)){
var c__4461__auto___6877 = cljs.core.chunk_first.call(null,seq__6820_6876__$1);
var G__6878 = cljs.core.chunk_rest.call(null,seq__6820_6876__$1);
var G__6879 = c__4461__auto___6877;
var G__6880 = cljs.core.count.call(null,c__4461__auto___6877);
var G__6881 = (0);
seq__6820_6840 = G__6878;
chunk__6821_6841 = G__6879;
count__6822_6842 = G__6880;
i__6823_6843 = G__6881;
continue;
} else {
var map__6832_6882 = cljs.core.first.call(null,seq__6820_6876__$1);
var map__6832_6883__$1 = (((((!((map__6832_6882 == null))))?(((((map__6832_6882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6832_6882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6832_6882):map__6832_6882);
var ts_6884 = cljs.core.get.call(null,map__6832_6883__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__6833_6885 = cljs.core.get.call(null,map__6832_6883__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__6833_6886__$1 = (((((!((map__6833_6885 == null))))?(((((map__6833_6885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6833_6885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6833_6885):map__6833_6885);
var then_6887 = cljs.core.get.call(null,map__6833_6886__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__6836_6888 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_6884));
var chunk__6837_6889 = null;
var count__6838_6890 = (0);
var i__6839_6891 = (0);
while(true){
if((i__6839_6891 < count__6838_6890)){
var test_6892 = cljs.core._nth.call(null,chunk__6837_6889,i__6839_6891);
cljs.compiler.emitln.call(null,"case ",test_6892,":");


var G__6893 = seq__6836_6888;
var G__6894 = chunk__6837_6889;
var G__6895 = count__6838_6890;
var G__6896 = (i__6839_6891 + (1));
seq__6836_6888 = G__6893;
chunk__6837_6889 = G__6894;
count__6838_6890 = G__6895;
i__6839_6891 = G__6896;
continue;
} else {
var temp__5735__auto___6897__$1 = cljs.core.seq.call(null,seq__6836_6888);
if(temp__5735__auto___6897__$1){
var seq__6836_6898__$1 = temp__5735__auto___6897__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6836_6898__$1)){
var c__4461__auto___6899 = cljs.core.chunk_first.call(null,seq__6836_6898__$1);
var G__6900 = cljs.core.chunk_rest.call(null,seq__6836_6898__$1);
var G__6901 = c__4461__auto___6899;
var G__6902 = cljs.core.count.call(null,c__4461__auto___6899);
var G__6903 = (0);
seq__6836_6888 = G__6900;
chunk__6837_6889 = G__6901;
count__6838_6890 = G__6902;
i__6839_6891 = G__6903;
continue;
} else {
var test_6904 = cljs.core.first.call(null,seq__6836_6898__$1);
cljs.compiler.emitln.call(null,"case ",test_6904,":");


var G__6905 = cljs.core.next.call(null,seq__6836_6898__$1);
var G__6906 = null;
var G__6907 = (0);
var G__6908 = (0);
seq__6836_6888 = G__6905;
chunk__6837_6889 = G__6906;
count__6838_6890 = G__6907;
i__6839_6891 = G__6908;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_6887);
} else {
cljs.compiler.emitln.call(null,then_6887);
}

cljs.compiler.emitln.call(null,"break;");


var G__6909 = cljs.core.next.call(null,seq__6820_6876__$1);
var G__6910 = null;
var G__6911 = (0);
var G__6912 = (0);
seq__6820_6840 = G__6909;
chunk__6821_6841 = G__6910;
count__6822_6842 = G__6911;
i__6823_6843 = G__6912;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__6913){
var map__6914 = p__6913;
var map__6914__$1 = (((((!((map__6914 == null))))?(((((map__6914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6914):map__6914);
var throw$ = cljs.core.get.call(null,map__6914__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__6914__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__6917 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__6917,(0),null);
var rstr = cljs.core.nth.call(null,vec__6917,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__6917,fstr,rstr,ret_t,axstr){
return (function (p1__6916_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__6916_SHARP_);
});})(idx,vec__6917,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__6920 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6920),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__6920;
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
return (function (p1__6921_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__6921_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__6922 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__6923 = cljs.core.seq.call(null,vec__6922);
var first__6924 = cljs.core.first.call(null,seq__6923);
var seq__6923__$1 = cljs.core.next.call(null,seq__6923);
var p = first__6924;
var first__6924__$1 = cljs.core.first.call(null,seq__6923__$1);
var seq__6923__$2 = cljs.core.next.call(null,seq__6923__$1);
var ts = first__6924__$1;
var first__6924__$2 = cljs.core.first.call(null,seq__6923__$2);
var seq__6923__$3 = cljs.core.next.call(null,seq__6923__$2);
var n = first__6924__$2;
var xs = seq__6923__$3;
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
var vec__6925 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__6926 = cljs.core.seq.call(null,vec__6925);
var first__6927 = cljs.core.first.call(null,seq__6926);
var seq__6926__$1 = cljs.core.next.call(null,seq__6926);
var p = first__6927;
var first__6927__$1 = cljs.core.first.call(null,seq__6926__$1);
var seq__6926__$2 = cljs.core.next.call(null,seq__6926__$1);
var ts = first__6927__$1;
var xs = seq__6926__$2;
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
var G__6930 = arguments.length;
switch (G__6930) {
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
var vec__6938 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__6928_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__6928_SHARP_);
} else {
return p1__6928_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__6939 = cljs.core.seq.call(null,vec__6938);
var first__6940 = cljs.core.first.call(null,seq__6939);
var seq__6939__$1 = cljs.core.next.call(null,seq__6939);
var x = first__6940;
var ys = seq__6939__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__6941 = cljs.core.seq.call(null,ys);
var chunk__6942 = null;
var count__6943 = (0);
var i__6944 = (0);
while(true){
if((i__6944 < count__6943)){
var next_line = cljs.core._nth.call(null,chunk__6942,i__6944);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__6950 = seq__6941;
var G__6951 = chunk__6942;
var G__6952 = count__6943;
var G__6953 = (i__6944 + (1));
seq__6941 = G__6950;
chunk__6942 = G__6951;
count__6943 = G__6952;
i__6944 = G__6953;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__6941);
if(temp__5735__auto__){
var seq__6941__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6941__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__6941__$1);
var G__6954 = cljs.core.chunk_rest.call(null,seq__6941__$1);
var G__6955 = c__4461__auto__;
var G__6956 = cljs.core.count.call(null,c__4461__auto__);
var G__6957 = (0);
seq__6941 = G__6954;
chunk__6942 = G__6955;
count__6943 = G__6956;
i__6944 = G__6957;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__6941__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__6958 = cljs.core.next.call(null,seq__6941__$1);
var G__6959 = null;
var G__6960 = (0);
var G__6961 = (0);
seq__6941 = G__6958;
chunk__6942 = G__6959;
count__6943 = G__6960;
i__6944 = G__6961;
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

var seq__6945_6962 = cljs.core.seq.call(null,docs__$2);
var chunk__6946_6963 = null;
var count__6947_6964 = (0);
var i__6948_6965 = (0);
while(true){
if((i__6948_6965 < count__6947_6964)){
var e_6966 = cljs.core._nth.call(null,chunk__6946_6963,i__6948_6965);
if(cljs.core.truth_(e_6966)){
print_comment_lines.call(null,e_6966);
} else {
}


var G__6967 = seq__6945_6962;
var G__6968 = chunk__6946_6963;
var G__6969 = count__6947_6964;
var G__6970 = (i__6948_6965 + (1));
seq__6945_6962 = G__6967;
chunk__6946_6963 = G__6968;
count__6947_6964 = G__6969;
i__6948_6965 = G__6970;
continue;
} else {
var temp__5735__auto___6971 = cljs.core.seq.call(null,seq__6945_6962);
if(temp__5735__auto___6971){
var seq__6945_6972__$1 = temp__5735__auto___6971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6945_6972__$1)){
var c__4461__auto___6973 = cljs.core.chunk_first.call(null,seq__6945_6972__$1);
var G__6974 = cljs.core.chunk_rest.call(null,seq__6945_6972__$1);
var G__6975 = c__4461__auto___6973;
var G__6976 = cljs.core.count.call(null,c__4461__auto___6973);
var G__6977 = (0);
seq__6945_6962 = G__6974;
chunk__6946_6963 = G__6975;
count__6947_6964 = G__6976;
i__6948_6965 = G__6977;
continue;
} else {
var e_6978 = cljs.core.first.call(null,seq__6945_6972__$1);
if(cljs.core.truth_(e_6978)){
print_comment_lines.call(null,e_6978);
} else {
}


var G__6979 = cljs.core.next.call(null,seq__6945_6972__$1);
var G__6980 = null;
var G__6981 = (0);
var G__6982 = (0);
seq__6945_6962 = G__6979;
chunk__6946_6963 = G__6980;
count__6947_6964 = G__6981;
i__6948_6965 = G__6982;
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
return (function (p1__6984_SHARP_){
return goog.string.startsWith(p1__6984_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__6985){
var map__6986 = p__6985;
var map__6986__$1 = (((((!((map__6986 == null))))?(((((map__6986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6986):map__6986);
var doc = cljs.core.get.call(null,map__6986__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__6986__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__6986__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__6986__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__6986__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__6986__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__6986__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__6986__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__6986__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__6988){
var map__6989 = p__6988;
var map__6989__$1 = (((((!((map__6989 == null))))?(((((map__6989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6989):map__6989);
var name = cljs.core.get.call(null,map__6989__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__6989__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__6989__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__6991_7009 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__6992_7010 = null;
var count__6993_7011 = (0);
var i__6994_7012 = (0);
while(true){
if((i__6994_7012 < count__6993_7011)){
var vec__6995_7013 = cljs.core._nth.call(null,chunk__6992_7010,i__6994_7012);
var i_7014 = cljs.core.nth.call(null,vec__6995_7013,(0),null);
var param_7015 = cljs.core.nth.call(null,vec__6995_7013,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_7015);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__7016 = seq__6991_7009;
var G__7017 = chunk__6992_7010;
var G__7018 = count__6993_7011;
var G__7019 = (i__6994_7012 + (1));
seq__6991_7009 = G__7016;
chunk__6992_7010 = G__7017;
count__6993_7011 = G__7018;
i__6994_7012 = G__7019;
continue;
} else {
var temp__5735__auto___7020 = cljs.core.seq.call(null,seq__6991_7009);
if(temp__5735__auto___7020){
var seq__6991_7021__$1 = temp__5735__auto___7020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6991_7021__$1)){
var c__4461__auto___7022 = cljs.core.chunk_first.call(null,seq__6991_7021__$1);
var G__7023 = cljs.core.chunk_rest.call(null,seq__6991_7021__$1);
var G__7024 = c__4461__auto___7022;
var G__7025 = cljs.core.count.call(null,c__4461__auto___7022);
var G__7026 = (0);
seq__6991_7009 = G__7023;
chunk__6992_7010 = G__7024;
count__6993_7011 = G__7025;
i__6994_7012 = G__7026;
continue;
} else {
var vec__6998_7027 = cljs.core.first.call(null,seq__6991_7021__$1);
var i_7028 = cljs.core.nth.call(null,vec__6998_7027,(0),null);
var param_7029 = cljs.core.nth.call(null,vec__6998_7027,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_7029);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__7030 = cljs.core.next.call(null,seq__6991_7021__$1);
var G__7031 = null;
var G__7032 = (0);
var G__7033 = (0);
seq__6991_7009 = G__7030;
chunk__6992_7010 = G__7031;
count__6993_7011 = G__7032;
i__6994_7012 = G__7033;
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

var seq__7001_7034 = cljs.core.seq.call(null,params);
var chunk__7002_7035 = null;
var count__7003_7036 = (0);
var i__7004_7037 = (0);
while(true){
if((i__7004_7037 < count__7003_7036)){
var param_7038 = cljs.core._nth.call(null,chunk__7002_7035,i__7004_7037);
cljs.compiler.emit.call(null,param_7038);

if(cljs.core._EQ_.call(null,param_7038,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7039 = seq__7001_7034;
var G__7040 = chunk__7002_7035;
var G__7041 = count__7003_7036;
var G__7042 = (i__7004_7037 + (1));
seq__7001_7034 = G__7039;
chunk__7002_7035 = G__7040;
count__7003_7036 = G__7041;
i__7004_7037 = G__7042;
continue;
} else {
var temp__5735__auto___7043 = cljs.core.seq.call(null,seq__7001_7034);
if(temp__5735__auto___7043){
var seq__7001_7044__$1 = temp__5735__auto___7043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7001_7044__$1)){
var c__4461__auto___7045 = cljs.core.chunk_first.call(null,seq__7001_7044__$1);
var G__7046 = cljs.core.chunk_rest.call(null,seq__7001_7044__$1);
var G__7047 = c__4461__auto___7045;
var G__7048 = cljs.core.count.call(null,c__4461__auto___7045);
var G__7049 = (0);
seq__7001_7034 = G__7046;
chunk__7002_7035 = G__7047;
count__7003_7036 = G__7048;
i__7004_7037 = G__7049;
continue;
} else {
var param_7050 = cljs.core.first.call(null,seq__7001_7044__$1);
cljs.compiler.emit.call(null,param_7050);

if(cljs.core._EQ_.call(null,param_7050,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7051 = cljs.core.next.call(null,seq__7001_7044__$1);
var G__7052 = null;
var G__7053 = (0);
var G__7054 = (0);
seq__7001_7034 = G__7051;
chunk__7002_7035 = G__7052;
count__7003_7036 = G__7053;
i__7004_7037 = G__7054;
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

var seq__7005_7055 = cljs.core.seq.call(null,params);
var chunk__7006_7056 = null;
var count__7007_7057 = (0);
var i__7008_7058 = (0);
while(true){
if((i__7008_7058 < count__7007_7057)){
var param_7059 = cljs.core._nth.call(null,chunk__7006_7056,i__7008_7058);
cljs.compiler.emit.call(null,param_7059);

if(cljs.core._EQ_.call(null,param_7059,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7060 = seq__7005_7055;
var G__7061 = chunk__7006_7056;
var G__7062 = count__7007_7057;
var G__7063 = (i__7008_7058 + (1));
seq__7005_7055 = G__7060;
chunk__7006_7056 = G__7061;
count__7007_7057 = G__7062;
i__7008_7058 = G__7063;
continue;
} else {
var temp__5735__auto___7064 = cljs.core.seq.call(null,seq__7005_7055);
if(temp__5735__auto___7064){
var seq__7005_7065__$1 = temp__5735__auto___7064;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7005_7065__$1)){
var c__4461__auto___7066 = cljs.core.chunk_first.call(null,seq__7005_7065__$1);
var G__7067 = cljs.core.chunk_rest.call(null,seq__7005_7065__$1);
var G__7068 = c__4461__auto___7066;
var G__7069 = cljs.core.count.call(null,c__4461__auto___7066);
var G__7070 = (0);
seq__7005_7055 = G__7067;
chunk__7006_7056 = G__7068;
count__7007_7057 = G__7069;
i__7008_7058 = G__7070;
continue;
} else {
var param_7071 = cljs.core.first.call(null,seq__7005_7065__$1);
cljs.compiler.emit.call(null,param_7071);

if(cljs.core._EQ_.call(null,param_7071,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7072 = cljs.core.next.call(null,seq__7005_7065__$1);
var G__7073 = null;
var G__7074 = (0);
var G__7075 = (0);
seq__7005_7055 = G__7072;
chunk__7006_7056 = G__7073;
count__7007_7057 = G__7074;
i__7008_7058 = G__7075;
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
var seq__7076 = cljs.core.seq.call(null,params);
var chunk__7077 = null;
var count__7078 = (0);
var i__7079 = (0);
while(true){
if((i__7079 < count__7078)){
var param = cljs.core._nth.call(null,chunk__7077,i__7079);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7080 = seq__7076;
var G__7081 = chunk__7077;
var G__7082 = count__7078;
var G__7083 = (i__7079 + (1));
seq__7076 = G__7080;
chunk__7077 = G__7081;
count__7078 = G__7082;
i__7079 = G__7083;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__7076);
if(temp__5735__auto__){
var seq__7076__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7076__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__7076__$1);
var G__7084 = cljs.core.chunk_rest.call(null,seq__7076__$1);
var G__7085 = c__4461__auto__;
var G__7086 = cljs.core.count.call(null,c__4461__auto__);
var G__7087 = (0);
seq__7076 = G__7084;
chunk__7077 = G__7085;
count__7078 = G__7086;
i__7079 = G__7087;
continue;
} else {
var param = cljs.core.first.call(null,seq__7076__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7088 = cljs.core.next.call(null,seq__7076__$1);
var G__7089 = null;
var G__7090 = (0);
var G__7091 = (0);
seq__7076 = G__7088;
chunk__7077 = G__7089;
count__7078 = G__7090;
i__7079 = G__7091;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__7092){
var map__7093 = p__7092;
var map__7093__$1 = (((((!((map__7093 == null))))?(((((map__7093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7093):map__7093);
var expr = cljs.core.get.call(null,map__7093__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__7093__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__7093__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__7093__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__7093__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__7093__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__5391__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__7095){
var map__7096 = p__7095;
var map__7096__$1 = (((((!((map__7096 == null))))?(((((map__7096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7096):map__7096);
var f = map__7096__$1;
var expr = cljs.core.get.call(null,map__7096__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__7096__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__7096__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__7096__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__7096__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__7096__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__7096__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__7096__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__5391__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_7106__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_7107 = cljs.compiler.munge.call(null,name_7106__$1);
var delegate_name_7108 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_7107),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_7108," = function (");

var seq__7098_7109 = cljs.core.seq.call(null,params);
var chunk__7099_7110 = null;
var count__7100_7111 = (0);
var i__7101_7112 = (0);
while(true){
if((i__7101_7112 < count__7100_7111)){
var param_7113 = cljs.core._nth.call(null,chunk__7099_7110,i__7101_7112);
cljs.compiler.emit.call(null,param_7113);

if(cljs.core._EQ_.call(null,param_7113,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7114 = seq__7098_7109;
var G__7115 = chunk__7099_7110;
var G__7116 = count__7100_7111;
var G__7117 = (i__7101_7112 + (1));
seq__7098_7109 = G__7114;
chunk__7099_7110 = G__7115;
count__7100_7111 = G__7116;
i__7101_7112 = G__7117;
continue;
} else {
var temp__5735__auto___7118 = cljs.core.seq.call(null,seq__7098_7109);
if(temp__5735__auto___7118){
var seq__7098_7119__$1 = temp__5735__auto___7118;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7098_7119__$1)){
var c__4461__auto___7120 = cljs.core.chunk_first.call(null,seq__7098_7119__$1);
var G__7121 = cljs.core.chunk_rest.call(null,seq__7098_7119__$1);
var G__7122 = c__4461__auto___7120;
var G__7123 = cljs.core.count.call(null,c__4461__auto___7120);
var G__7124 = (0);
seq__7098_7109 = G__7121;
chunk__7099_7110 = G__7122;
count__7100_7111 = G__7123;
i__7101_7112 = G__7124;
continue;
} else {
var param_7125 = cljs.core.first.call(null,seq__7098_7119__$1);
cljs.compiler.emit.call(null,param_7125);

if(cljs.core._EQ_.call(null,param_7125,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7126 = cljs.core.next.call(null,seq__7098_7119__$1);
var G__7127 = null;
var G__7128 = (0);
var G__7129 = (0);
seq__7098_7109 = G__7126;
chunk__7099_7110 = G__7127;
count__7100_7111 = G__7128;
i__7101_7112 = G__7129;
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

cljs.compiler.emitln.call(null,"var ",mname_7107," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_7130 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_7130,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_7108,".call(this,");

var seq__7102_7131 = cljs.core.seq.call(null,params);
var chunk__7103_7132 = null;
var count__7104_7133 = (0);
var i__7105_7134 = (0);
while(true){
if((i__7105_7134 < count__7104_7133)){
var param_7135 = cljs.core._nth.call(null,chunk__7103_7132,i__7105_7134);
cljs.compiler.emit.call(null,param_7135);

if(cljs.core._EQ_.call(null,param_7135,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7136 = seq__7102_7131;
var G__7137 = chunk__7103_7132;
var G__7138 = count__7104_7133;
var G__7139 = (i__7105_7134 + (1));
seq__7102_7131 = G__7136;
chunk__7103_7132 = G__7137;
count__7104_7133 = G__7138;
i__7105_7134 = G__7139;
continue;
} else {
var temp__5735__auto___7140 = cljs.core.seq.call(null,seq__7102_7131);
if(temp__5735__auto___7140){
var seq__7102_7141__$1 = temp__5735__auto___7140;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7102_7141__$1)){
var c__4461__auto___7142 = cljs.core.chunk_first.call(null,seq__7102_7141__$1);
var G__7143 = cljs.core.chunk_rest.call(null,seq__7102_7141__$1);
var G__7144 = c__4461__auto___7142;
var G__7145 = cljs.core.count.call(null,c__4461__auto___7142);
var G__7146 = (0);
seq__7102_7131 = G__7143;
chunk__7103_7132 = G__7144;
count__7104_7133 = G__7145;
i__7105_7134 = G__7146;
continue;
} else {
var param_7147 = cljs.core.first.call(null,seq__7102_7141__$1);
cljs.compiler.emit.call(null,param_7147);

if(cljs.core._EQ_.call(null,param_7147,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7148 = cljs.core.next.call(null,seq__7102_7141__$1);
var G__7149 = null;
var G__7150 = (0);
var G__7151 = (0);
seq__7102_7131 = G__7148;
chunk__7103_7132 = G__7149;
count__7104_7133 = G__7150;
i__7105_7134 = G__7151;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_7107,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_7107,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_7106__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_7107,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_7108,";");

cljs.compiler.emitln.call(null,"return ",mname_7107,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__7155){
var map__7156 = p__7155;
var map__7156__$1 = (((((!((map__7156 == null))))?(((((map__7156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7156):map__7156);
var variadic = cljs.core.get.call(null,map__7156__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__7156__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__7156__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__7156__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__7156__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__7156__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__7156__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__7156,map__7156__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__7152_SHARP_){
var and__4036__auto__ = p1__7152_SHARP_;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__7152_SHARP_));
} else {
return and__4036__auto__;
}
});})(map__7156,map__7156__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_7191__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_7192 = cljs.compiler.munge.call(null,name_7191__$1);
var maxparams_7193 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_7194 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_7191__$1,mname_7192,maxparams_7193,loop_locals,map__7156,map__7156__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_7192),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_7191__$1,mname_7192,maxparams_7193,loop_locals,map__7156,map__7156__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_7195 = cljs.core.sort_by.call(null,((function (name_7191__$1,mname_7192,maxparams_7193,mmap_7194,loop_locals,map__7156,map__7156__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__7153_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__7153_SHARP_)));
});})(name_7191__$1,mname_7192,maxparams_7193,mmap_7194,loop_locals,map__7156,map__7156__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_7194));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_7192," = null;");

var seq__7158_7196 = cljs.core.seq.call(null,ms_7195);
var chunk__7159_7197 = null;
var count__7160_7198 = (0);
var i__7161_7199 = (0);
while(true){
if((i__7161_7199 < count__7160_7198)){
var vec__7162_7200 = cljs.core._nth.call(null,chunk__7159_7197,i__7161_7199);
var n_7201 = cljs.core.nth.call(null,vec__7162_7200,(0),null);
var meth_7202 = cljs.core.nth.call(null,vec__7162_7200,(1),null);
cljs.compiler.emits.call(null,"var ",n_7201," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7202))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_7202);
} else {
cljs.compiler.emit_fn_method.call(null,meth_7202);
}

cljs.compiler.emitln.call(null,";");


var G__7203 = seq__7158_7196;
var G__7204 = chunk__7159_7197;
var G__7205 = count__7160_7198;
var G__7206 = (i__7161_7199 + (1));
seq__7158_7196 = G__7203;
chunk__7159_7197 = G__7204;
count__7160_7198 = G__7205;
i__7161_7199 = G__7206;
continue;
} else {
var temp__5735__auto___7207 = cljs.core.seq.call(null,seq__7158_7196);
if(temp__5735__auto___7207){
var seq__7158_7208__$1 = temp__5735__auto___7207;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7158_7208__$1)){
var c__4461__auto___7209 = cljs.core.chunk_first.call(null,seq__7158_7208__$1);
var G__7210 = cljs.core.chunk_rest.call(null,seq__7158_7208__$1);
var G__7211 = c__4461__auto___7209;
var G__7212 = cljs.core.count.call(null,c__4461__auto___7209);
var G__7213 = (0);
seq__7158_7196 = G__7210;
chunk__7159_7197 = G__7211;
count__7160_7198 = G__7212;
i__7161_7199 = G__7213;
continue;
} else {
var vec__7165_7214 = cljs.core.first.call(null,seq__7158_7208__$1);
var n_7215 = cljs.core.nth.call(null,vec__7165_7214,(0),null);
var meth_7216 = cljs.core.nth.call(null,vec__7165_7214,(1),null);
cljs.compiler.emits.call(null,"var ",n_7215," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7216))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_7216);
} else {
cljs.compiler.emit_fn_method.call(null,meth_7216);
}

cljs.compiler.emitln.call(null,";");


var G__7217 = cljs.core.next.call(null,seq__7158_7208__$1);
var G__7218 = null;
var G__7219 = (0);
var G__7220 = (0);
seq__7158_7196 = G__7217;
chunk__7159_7197 = G__7218;
count__7160_7198 = G__7219;
i__7161_7199 = G__7220;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_7192," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_7193),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_7193)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_7193));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__7168_7221 = cljs.core.seq.call(null,ms_7195);
var chunk__7169_7222 = null;
var count__7170_7223 = (0);
var i__7171_7224 = (0);
while(true){
if((i__7171_7224 < count__7170_7223)){
var vec__7172_7225 = cljs.core._nth.call(null,chunk__7169_7222,i__7171_7224);
var n_7226 = cljs.core.nth.call(null,vec__7172_7225,(0),null);
var meth_7227 = cljs.core.nth.call(null,vec__7172_7225,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7227))){
cljs.compiler.emitln.call(null,"default:");

var restarg_7228 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_7228," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_7229 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_7228," = new cljs.core.IndexedSeq(",a_7229,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_7226,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_7193)),(((cljs.core.count.call(null,maxparams_7193) > (1)))?", ":null),restarg_7228,");");
} else {
var pcnt_7230 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7227));
cljs.compiler.emitln.call(null,"case ",pcnt_7230,":");

cljs.compiler.emitln.call(null,"return ",n_7226,".call(this",(((pcnt_7230 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_7230,maxparams_7193)),null,(1),null)),(2),null))),");");
}


var G__7231 = seq__7168_7221;
var G__7232 = chunk__7169_7222;
var G__7233 = count__7170_7223;
var G__7234 = (i__7171_7224 + (1));
seq__7168_7221 = G__7231;
chunk__7169_7222 = G__7232;
count__7170_7223 = G__7233;
i__7171_7224 = G__7234;
continue;
} else {
var temp__5735__auto___7235 = cljs.core.seq.call(null,seq__7168_7221);
if(temp__5735__auto___7235){
var seq__7168_7236__$1 = temp__5735__auto___7235;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7168_7236__$1)){
var c__4461__auto___7237 = cljs.core.chunk_first.call(null,seq__7168_7236__$1);
var G__7238 = cljs.core.chunk_rest.call(null,seq__7168_7236__$1);
var G__7239 = c__4461__auto___7237;
var G__7240 = cljs.core.count.call(null,c__4461__auto___7237);
var G__7241 = (0);
seq__7168_7221 = G__7238;
chunk__7169_7222 = G__7239;
count__7170_7223 = G__7240;
i__7171_7224 = G__7241;
continue;
} else {
var vec__7175_7242 = cljs.core.first.call(null,seq__7168_7236__$1);
var n_7243 = cljs.core.nth.call(null,vec__7175_7242,(0),null);
var meth_7244 = cljs.core.nth.call(null,vec__7175_7242,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7244))){
cljs.compiler.emitln.call(null,"default:");

var restarg_7245 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_7245," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_7246 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_7245," = new cljs.core.IndexedSeq(",a_7246,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_7243,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_7193)),(((cljs.core.count.call(null,maxparams_7193) > (1)))?", ":null),restarg_7245,");");
} else {
var pcnt_7247 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7244));
cljs.compiler.emitln.call(null,"case ",pcnt_7247,":");

cljs.compiler.emitln.call(null,"return ",n_7243,".call(this",(((pcnt_7247 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_7247,maxparams_7193)),null,(1),null)),(2),null))),");");
}


var G__7248 = cljs.core.next.call(null,seq__7168_7236__$1);
var G__7249 = null;
var G__7250 = (0);
var G__7251 = (0);
seq__7168_7221 = G__7248;
chunk__7169_7222 = G__7249;
count__7170_7223 = G__7250;
i__7171_7224 = G__7251;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_7252 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_7195)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_7252,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_7192,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_7192,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_7191__$1,mname_7192,maxparams_7193,mmap_7194,ms_7195,loop_locals,map__7156,map__7156__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__7154_SHARP_){
var vec__7178 = p1__7154_SHARP_;
var n = cljs.core.nth.call(null,vec__7178,(0),null);
var m = cljs.core.nth.call(null,vec__7178,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_7191__$1,mname_7192,maxparams_7193,mmap_7194,ms_7195,loop_locals,map__7156,map__7156__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_7195),".cljs$lang$applyTo;");
} else {
}

var seq__7181_7253 = cljs.core.seq.call(null,ms_7195);
var chunk__7182_7254 = null;
var count__7183_7255 = (0);
var i__7184_7256 = (0);
while(true){
if((i__7184_7256 < count__7183_7255)){
var vec__7185_7257 = cljs.core._nth.call(null,chunk__7182_7254,i__7184_7256);
var n_7258 = cljs.core.nth.call(null,vec__7185_7257,(0),null);
var meth_7259 = cljs.core.nth.call(null,vec__7185_7257,(1),null);
var c_7260 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7259));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7259))){
cljs.compiler.emitln.call(null,mname_7192,".cljs$core$IFn$_invoke$arity$variadic = ",n_7258,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_7192,".cljs$core$IFn$_invoke$arity$",c_7260," = ",n_7258,";");
}


var G__7261 = seq__7181_7253;
var G__7262 = chunk__7182_7254;
var G__7263 = count__7183_7255;
var G__7264 = (i__7184_7256 + (1));
seq__7181_7253 = G__7261;
chunk__7182_7254 = G__7262;
count__7183_7255 = G__7263;
i__7184_7256 = G__7264;
continue;
} else {
var temp__5735__auto___7265 = cljs.core.seq.call(null,seq__7181_7253);
if(temp__5735__auto___7265){
var seq__7181_7266__$1 = temp__5735__auto___7265;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7181_7266__$1)){
var c__4461__auto___7267 = cljs.core.chunk_first.call(null,seq__7181_7266__$1);
var G__7268 = cljs.core.chunk_rest.call(null,seq__7181_7266__$1);
var G__7269 = c__4461__auto___7267;
var G__7270 = cljs.core.count.call(null,c__4461__auto___7267);
var G__7271 = (0);
seq__7181_7253 = G__7268;
chunk__7182_7254 = G__7269;
count__7183_7255 = G__7270;
i__7184_7256 = G__7271;
continue;
} else {
var vec__7188_7272 = cljs.core.first.call(null,seq__7181_7266__$1);
var n_7273 = cljs.core.nth.call(null,vec__7188_7272,(0),null);
var meth_7274 = cljs.core.nth.call(null,vec__7188_7272,(1),null);
var c_7275 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7274));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7274))){
cljs.compiler.emitln.call(null,mname_7192,".cljs$core$IFn$_invoke$arity$variadic = ",n_7273,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_7192,".cljs$core$IFn$_invoke$arity$",c_7275," = ",n_7273,";");
}


var G__7276 = cljs.core.next.call(null,seq__7181_7266__$1);
var G__7277 = null;
var G__7278 = (0);
var G__7279 = (0);
seq__7181_7253 = G__7276;
chunk__7182_7254 = G__7277;
count__7183_7255 = G__7278;
i__7184_7256 = G__7279;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_7192,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__7280){
var map__7281 = p__7280;
var map__7281__$1 = (((((!((map__7281 == null))))?(((((map__7281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7281):map__7281);
var statements = cljs.core.get.call(null,map__7281__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__7281__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__7281__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__7283_7287 = cljs.core.seq.call(null,statements);
var chunk__7284_7288 = null;
var count__7285_7289 = (0);
var i__7286_7290 = (0);
while(true){
if((i__7286_7290 < count__7285_7289)){
var s_7291 = cljs.core._nth.call(null,chunk__7284_7288,i__7286_7290);
cljs.compiler.emitln.call(null,s_7291);


var G__7292 = seq__7283_7287;
var G__7293 = chunk__7284_7288;
var G__7294 = count__7285_7289;
var G__7295 = (i__7286_7290 + (1));
seq__7283_7287 = G__7292;
chunk__7284_7288 = G__7293;
count__7285_7289 = G__7294;
i__7286_7290 = G__7295;
continue;
} else {
var temp__5735__auto___7296 = cljs.core.seq.call(null,seq__7283_7287);
if(temp__5735__auto___7296){
var seq__7283_7297__$1 = temp__5735__auto___7296;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7283_7297__$1)){
var c__4461__auto___7298 = cljs.core.chunk_first.call(null,seq__7283_7297__$1);
var G__7299 = cljs.core.chunk_rest.call(null,seq__7283_7297__$1);
var G__7300 = c__4461__auto___7298;
var G__7301 = cljs.core.count.call(null,c__4461__auto___7298);
var G__7302 = (0);
seq__7283_7287 = G__7299;
chunk__7284_7288 = G__7300;
count__7285_7289 = G__7301;
i__7286_7290 = G__7302;
continue;
} else {
var s_7303 = cljs.core.first.call(null,seq__7283_7297__$1);
cljs.compiler.emitln.call(null,s_7303);


var G__7304 = cljs.core.next.call(null,seq__7283_7297__$1);
var G__7305 = null;
var G__7306 = (0);
var G__7307 = (0);
seq__7283_7287 = G__7304;
chunk__7284_7288 = G__7305;
count__7285_7289 = G__7306;
i__7286_7290 = G__7307;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__7308){
var map__7309 = p__7308;
var map__7309__$1 = (((((!((map__7309 == null))))?(((((map__7309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7309):map__7309);
var try$ = cljs.core.get.call(null,map__7309__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__7309__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__7309__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__7309__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__7309__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__7311,is_loop){
var map__7312 = p__7311;
var map__7312__$1 = (((((!((map__7312 == null))))?(((((map__7312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7312):map__7312);
var expr = cljs.core.get.call(null,map__7312__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__7312__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__7312__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__7314_7324 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__7315_7325 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__7314_7324,context,map__7312,map__7312__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__7314_7324,context,map__7312,map__7312__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__7315_7325;

try{var seq__7316_7326 = cljs.core.seq.call(null,bindings);
var chunk__7317_7327 = null;
var count__7318_7328 = (0);
var i__7319_7329 = (0);
while(true){
if((i__7319_7329 < count__7318_7328)){
var map__7320_7330 = cljs.core._nth.call(null,chunk__7317_7327,i__7319_7329);
var map__7320_7331__$1 = (((((!((map__7320_7330 == null))))?(((((map__7320_7330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7320_7330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7320_7330):map__7320_7330);
var binding_7332 = map__7320_7331__$1;
var init_7333 = cljs.core.get.call(null,map__7320_7331__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_7332);

cljs.compiler.emitln.call(null," = ",init_7333,";");


var G__7334 = seq__7316_7326;
var G__7335 = chunk__7317_7327;
var G__7336 = count__7318_7328;
var G__7337 = (i__7319_7329 + (1));
seq__7316_7326 = G__7334;
chunk__7317_7327 = G__7335;
count__7318_7328 = G__7336;
i__7319_7329 = G__7337;
continue;
} else {
var temp__5735__auto___7338 = cljs.core.seq.call(null,seq__7316_7326);
if(temp__5735__auto___7338){
var seq__7316_7339__$1 = temp__5735__auto___7338;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7316_7339__$1)){
var c__4461__auto___7340 = cljs.core.chunk_first.call(null,seq__7316_7339__$1);
var G__7341 = cljs.core.chunk_rest.call(null,seq__7316_7339__$1);
var G__7342 = c__4461__auto___7340;
var G__7343 = cljs.core.count.call(null,c__4461__auto___7340);
var G__7344 = (0);
seq__7316_7326 = G__7341;
chunk__7317_7327 = G__7342;
count__7318_7328 = G__7343;
i__7319_7329 = G__7344;
continue;
} else {
var map__7322_7345 = cljs.core.first.call(null,seq__7316_7339__$1);
var map__7322_7346__$1 = (((((!((map__7322_7345 == null))))?(((((map__7322_7345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7322_7345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7322_7345):map__7322_7345);
var binding_7347 = map__7322_7346__$1;
var init_7348 = cljs.core.get.call(null,map__7322_7346__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_7347);

cljs.compiler.emitln.call(null," = ",init_7348,";");


var G__7349 = cljs.core.next.call(null,seq__7316_7339__$1);
var G__7350 = null;
var G__7351 = (0);
var G__7352 = (0);
seq__7316_7326 = G__7349;
chunk__7317_7327 = G__7350;
count__7318_7328 = G__7351;
i__7319_7329 = G__7352;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__7314_7324;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__7353){
var map__7354 = p__7353;
var map__7354__$1 = (((((!((map__7354 == null))))?(((((map__7354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7354):map__7354);
var frame = cljs.core.get.call(null,map__7354__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__7354__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__7354__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4518__auto___7356 = cljs.core.count.call(null,exprs);
var i_7357 = (0);
while(true){
if((i_7357 < n__4518__auto___7356)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_7357)," = ",exprs.call(null,i_7357),";");

var G__7358 = (i_7357 + (1));
i_7357 = G__7358;
continue;
} else {
}
break;
}

var n__4518__auto___7359 = cljs.core.count.call(null,exprs);
var i_7360 = (0);
while(true){
if((i_7360 < n__4518__auto___7359)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_7360))," = ",temps.call(null,i_7360),";");

var G__7361 = (i_7360 + (1));
i_7360 = G__7361;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__7362){
var map__7363 = p__7362;
var map__7363__$1 = (((((!((map__7363 == null))))?(((((map__7363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7363):map__7363);
var expr = cljs.core.get.call(null,map__7363__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__7363__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__7363__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__7365_7373 = cljs.core.seq.call(null,bindings);
var chunk__7366_7374 = null;
var count__7367_7375 = (0);
var i__7368_7376 = (0);
while(true){
if((i__7368_7376 < count__7367_7375)){
var map__7369_7377 = cljs.core._nth.call(null,chunk__7366_7374,i__7368_7376);
var map__7369_7378__$1 = (((((!((map__7369_7377 == null))))?(((((map__7369_7377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7369_7377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7369_7377):map__7369_7377);
var binding_7379 = map__7369_7378__$1;
var init_7380 = cljs.core.get.call(null,map__7369_7378__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_7379)," = ",init_7380,";");


var G__7381 = seq__7365_7373;
var G__7382 = chunk__7366_7374;
var G__7383 = count__7367_7375;
var G__7384 = (i__7368_7376 + (1));
seq__7365_7373 = G__7381;
chunk__7366_7374 = G__7382;
count__7367_7375 = G__7383;
i__7368_7376 = G__7384;
continue;
} else {
var temp__5735__auto___7385 = cljs.core.seq.call(null,seq__7365_7373);
if(temp__5735__auto___7385){
var seq__7365_7386__$1 = temp__5735__auto___7385;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7365_7386__$1)){
var c__4461__auto___7387 = cljs.core.chunk_first.call(null,seq__7365_7386__$1);
var G__7388 = cljs.core.chunk_rest.call(null,seq__7365_7386__$1);
var G__7389 = c__4461__auto___7387;
var G__7390 = cljs.core.count.call(null,c__4461__auto___7387);
var G__7391 = (0);
seq__7365_7373 = G__7388;
chunk__7366_7374 = G__7389;
count__7367_7375 = G__7390;
i__7368_7376 = G__7391;
continue;
} else {
var map__7371_7392 = cljs.core.first.call(null,seq__7365_7386__$1);
var map__7371_7393__$1 = (((((!((map__7371_7392 == null))))?(((((map__7371_7392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7371_7392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7371_7392):map__7371_7392);
var binding_7394 = map__7371_7393__$1;
var init_7395 = cljs.core.get.call(null,map__7371_7393__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_7394)," = ",init_7395,";");


var G__7396 = cljs.core.next.call(null,seq__7365_7386__$1);
var G__7397 = null;
var G__7398 = (0);
var G__7399 = (0);
seq__7365_7373 = G__7396;
chunk__7366_7374 = G__7397;
count__7367_7375 = G__7398;
i__7368_7376 = G__7399;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__7402){
var map__7403 = p__7402;
var map__7403__$1 = (((((!((map__7403 == null))))?(((((map__7403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7403):map__7403);
var expr = map__7403__$1;
var f = cljs.core.get.call(null,map__7403__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__7403__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__7403__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__7405 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7403,map__7403__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7403,map__7403__$1,expr,f,args,env){
return (function (p1__7400_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__7400_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7403,map__7403__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7403,map__7403__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7403,map__7403__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7403,map__7403__$1,expr,f,args,env){
return (function (p1__7401_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__7401_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7403,map__7403__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7403,map__7403__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__7405,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__7405,(1),null);
var env__5391__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_7408 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_7408,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_7409 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_7409,args)),(((mfa_7409 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_7409,args)),"], 0))");
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
var fprop_7410 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_7410," ? ",f__$1,fprop_7410,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_7410," ? ",f__$1,fprop_7410,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__7411){
var map__7412 = p__7411;
var map__7412__$1 = (((((!((map__7412 == null))))?(((((map__7412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7412):map__7412);
var ctor = cljs.core.get.call(null,map__7412__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__7412__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__7412__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5391__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__7414){
var map__7415 = p__7414;
var map__7415__$1 = (((((!((map__7415 == null))))?(((((map__7415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7415):map__7415);
var target = cljs.core.get.call(null,map__7415__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__7415__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__7415__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5391__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
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
var map__7417 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__7417__$1 = (((((!((map__7417 == null))))?(((((map__7417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7417):map__7417);
var options = cljs.core.get.call(null,map__7417__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__7417__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__7418 = options;
var map__7418__$1 = (((((!((map__7418 == null))))?(((((map__7418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7418):map__7418);
var target = cljs.core.get.call(null,map__7418__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__7418__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__7419 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__7424 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__7424__$1 = (((((!((map__7424 == null))))?(((((map__7424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7424):map__7424);
var node_libs = cljs.core.get.call(null,map__7424__$1,true);
var libs_to_load = cljs.core.get.call(null,map__7424__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__7419,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__7419,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__7426_7442 = cljs.core.seq.call(null,libs_to_load);
var chunk__7427_7443 = null;
var count__7428_7444 = (0);
var i__7429_7445 = (0);
while(true){
if((i__7429_7445 < count__7428_7444)){
var lib_7446 = cljs.core._nth.call(null,chunk__7427_7443,i__7429_7445);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_7446)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7446),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7446),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7446),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7446),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_7446,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7446),"');");
}

}
}
}


var G__7447 = seq__7426_7442;
var G__7448 = chunk__7427_7443;
var G__7449 = count__7428_7444;
var G__7450 = (i__7429_7445 + (1));
seq__7426_7442 = G__7447;
chunk__7427_7443 = G__7448;
count__7428_7444 = G__7449;
i__7429_7445 = G__7450;
continue;
} else {
var temp__5735__auto___7451 = cljs.core.seq.call(null,seq__7426_7442);
if(temp__5735__auto___7451){
var seq__7426_7452__$1 = temp__5735__auto___7451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7426_7452__$1)){
var c__4461__auto___7453 = cljs.core.chunk_first.call(null,seq__7426_7452__$1);
var G__7454 = cljs.core.chunk_rest.call(null,seq__7426_7452__$1);
var G__7455 = c__4461__auto___7453;
var G__7456 = cljs.core.count.call(null,c__4461__auto___7453);
var G__7457 = (0);
seq__7426_7442 = G__7454;
chunk__7427_7443 = G__7455;
count__7428_7444 = G__7456;
i__7429_7445 = G__7457;
continue;
} else {
var lib_7458 = cljs.core.first.call(null,seq__7426_7452__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_7458)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7458),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7458),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7458),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7458),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_7458,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7458),"');");
}

}
}
}


var G__7459 = cljs.core.next.call(null,seq__7426_7452__$1);
var G__7460 = null;
var G__7461 = (0);
var G__7462 = (0);
seq__7426_7442 = G__7459;
chunk__7427_7443 = G__7460;
count__7428_7444 = G__7461;
i__7429_7445 = G__7462;
continue;
}
} else {
}
}
break;
}

var seq__7430_7463 = cljs.core.seq.call(null,node_libs);
var chunk__7431_7464 = null;
var count__7432_7465 = (0);
var i__7433_7466 = (0);
while(true){
if((i__7433_7466 < count__7432_7465)){
var lib_7467 = cljs.core._nth.call(null,chunk__7431_7464,i__7433_7466);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_7467)," = require('",lib_7467,"');");


var G__7468 = seq__7430_7463;
var G__7469 = chunk__7431_7464;
var G__7470 = count__7432_7465;
var G__7471 = (i__7433_7466 + (1));
seq__7430_7463 = G__7468;
chunk__7431_7464 = G__7469;
count__7432_7465 = G__7470;
i__7433_7466 = G__7471;
continue;
} else {
var temp__5735__auto___7472 = cljs.core.seq.call(null,seq__7430_7463);
if(temp__5735__auto___7472){
var seq__7430_7473__$1 = temp__5735__auto___7472;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7430_7473__$1)){
var c__4461__auto___7474 = cljs.core.chunk_first.call(null,seq__7430_7473__$1);
var G__7475 = cljs.core.chunk_rest.call(null,seq__7430_7473__$1);
var G__7476 = c__4461__auto___7474;
var G__7477 = cljs.core.count.call(null,c__4461__auto___7474);
var G__7478 = (0);
seq__7430_7463 = G__7475;
chunk__7431_7464 = G__7476;
count__7432_7465 = G__7477;
i__7433_7466 = G__7478;
continue;
} else {
var lib_7479 = cljs.core.first.call(null,seq__7430_7473__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_7479)," = require('",lib_7479,"');");


var G__7480 = cljs.core.next.call(null,seq__7430_7473__$1);
var G__7481 = null;
var G__7482 = (0);
var G__7483 = (0);
seq__7430_7463 = G__7480;
chunk__7431_7464 = G__7481;
count__7432_7465 = G__7482;
i__7433_7466 = G__7483;
continue;
}
} else {
}
}
break;
}

var seq__7434_7484 = cljs.core.seq.call(null,global_exports_libs);
var chunk__7435_7485 = null;
var count__7436_7486 = (0);
var i__7437_7487 = (0);
while(true){
if((i__7437_7487 < count__7436_7486)){
var lib_7488 = cljs.core._nth.call(null,chunk__7435_7485,i__7437_7487);
var map__7438_7489 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_7488));
var map__7438_7490__$1 = (((((!((map__7438_7489 == null))))?(((((map__7438_7489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7438_7489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7438_7489):map__7438_7489);
var global_exports_7491 = cljs.core.get.call(null,map__7438_7490__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_7491,lib_7488);


var G__7492 = seq__7434_7484;
var G__7493 = chunk__7435_7485;
var G__7494 = count__7436_7486;
var G__7495 = (i__7437_7487 + (1));
seq__7434_7484 = G__7492;
chunk__7435_7485 = G__7493;
count__7436_7486 = G__7494;
i__7437_7487 = G__7495;
continue;
} else {
var temp__5735__auto___7496 = cljs.core.seq.call(null,seq__7434_7484);
if(temp__5735__auto___7496){
var seq__7434_7497__$1 = temp__5735__auto___7496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7434_7497__$1)){
var c__4461__auto___7498 = cljs.core.chunk_first.call(null,seq__7434_7497__$1);
var G__7499 = cljs.core.chunk_rest.call(null,seq__7434_7497__$1);
var G__7500 = c__4461__auto___7498;
var G__7501 = cljs.core.count.call(null,c__4461__auto___7498);
var G__7502 = (0);
seq__7434_7484 = G__7499;
chunk__7435_7485 = G__7500;
count__7436_7486 = G__7501;
i__7437_7487 = G__7502;
continue;
} else {
var lib_7503 = cljs.core.first.call(null,seq__7434_7497__$1);
var map__7440_7504 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_7503));
var map__7440_7505__$1 = (((((!((map__7440_7504 == null))))?(((((map__7440_7504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7440_7504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7440_7504):map__7440_7504);
var global_exports_7506 = cljs.core.get.call(null,map__7440_7505__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_7506,lib_7503);


var G__7507 = cljs.core.next.call(null,seq__7434_7497__$1);
var G__7508 = null;
var G__7509 = (0);
var G__7510 = (0);
seq__7434_7484 = G__7507;
chunk__7435_7485 = G__7508;
count__7436_7486 = G__7509;
i__7437_7487 = G__7510;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__7511){
var map__7512 = p__7511;
var map__7512__$1 = (((((!((map__7512 == null))))?(((((map__7512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7512):map__7512);
var name = cljs.core.get.call(null,map__7512__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__7512__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__7512__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__7512__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__7512__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__7512__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__7512__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__7514){
var map__7515 = p__7514;
var map__7515__$1 = (((((!((map__7515 == null))))?(((((map__7515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7515):map__7515);
var name = cljs.core.get.call(null,map__7515__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__7515__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__7515__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__7515__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__7515__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__7515__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__7515__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__7517){
var map__7518 = p__7517;
var map__7518__$1 = (((((!((map__7518 == null))))?(((((map__7518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7518):map__7518);
var t = cljs.core.get.call(null,map__7518__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__7518__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__7518__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__7518__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__7518__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__7520_7538 = cljs.core.seq.call(null,protocols);
var chunk__7521_7539 = null;
var count__7522_7540 = (0);
var i__7523_7541 = (0);
while(true){
if((i__7523_7541 < count__7522_7540)){
var protocol_7542 = cljs.core._nth.call(null,chunk__7521_7539,i__7523_7541);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_7542)),"}");


var G__7543 = seq__7520_7538;
var G__7544 = chunk__7521_7539;
var G__7545 = count__7522_7540;
var G__7546 = (i__7523_7541 + (1));
seq__7520_7538 = G__7543;
chunk__7521_7539 = G__7544;
count__7522_7540 = G__7545;
i__7523_7541 = G__7546;
continue;
} else {
var temp__5735__auto___7547 = cljs.core.seq.call(null,seq__7520_7538);
if(temp__5735__auto___7547){
var seq__7520_7548__$1 = temp__5735__auto___7547;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7520_7548__$1)){
var c__4461__auto___7549 = cljs.core.chunk_first.call(null,seq__7520_7548__$1);
var G__7550 = cljs.core.chunk_rest.call(null,seq__7520_7548__$1);
var G__7551 = c__4461__auto___7549;
var G__7552 = cljs.core.count.call(null,c__4461__auto___7549);
var G__7553 = (0);
seq__7520_7538 = G__7550;
chunk__7521_7539 = G__7551;
count__7522_7540 = G__7552;
i__7523_7541 = G__7553;
continue;
} else {
var protocol_7554 = cljs.core.first.call(null,seq__7520_7548__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_7554)),"}");


var G__7555 = cljs.core.next.call(null,seq__7520_7548__$1);
var G__7556 = null;
var G__7557 = (0);
var G__7558 = (0);
seq__7520_7538 = G__7555;
chunk__7521_7539 = G__7556;
count__7522_7540 = G__7557;
i__7523_7541 = G__7558;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__7524_7559 = cljs.core.seq.call(null,fields__$1);
var chunk__7525_7560 = null;
var count__7526_7561 = (0);
var i__7527_7562 = (0);
while(true){
if((i__7527_7562 < count__7526_7561)){
var fld_7563 = cljs.core._nth.call(null,chunk__7525_7560,i__7527_7562);
cljs.compiler.emitln.call(null,"this.",fld_7563," = ",fld_7563,";");


var G__7564 = seq__7524_7559;
var G__7565 = chunk__7525_7560;
var G__7566 = count__7526_7561;
var G__7567 = (i__7527_7562 + (1));
seq__7524_7559 = G__7564;
chunk__7525_7560 = G__7565;
count__7526_7561 = G__7566;
i__7527_7562 = G__7567;
continue;
} else {
var temp__5735__auto___7568 = cljs.core.seq.call(null,seq__7524_7559);
if(temp__5735__auto___7568){
var seq__7524_7569__$1 = temp__5735__auto___7568;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7524_7569__$1)){
var c__4461__auto___7570 = cljs.core.chunk_first.call(null,seq__7524_7569__$1);
var G__7571 = cljs.core.chunk_rest.call(null,seq__7524_7569__$1);
var G__7572 = c__4461__auto___7570;
var G__7573 = cljs.core.count.call(null,c__4461__auto___7570);
var G__7574 = (0);
seq__7524_7559 = G__7571;
chunk__7525_7560 = G__7572;
count__7526_7561 = G__7573;
i__7527_7562 = G__7574;
continue;
} else {
var fld_7575 = cljs.core.first.call(null,seq__7524_7569__$1);
cljs.compiler.emitln.call(null,"this.",fld_7575," = ",fld_7575,";");


var G__7576 = cljs.core.next.call(null,seq__7524_7569__$1);
var G__7577 = null;
var G__7578 = (0);
var G__7579 = (0);
seq__7524_7559 = G__7576;
chunk__7525_7560 = G__7577;
count__7526_7561 = G__7578;
i__7527_7562 = G__7579;
continue;
}
} else {
}
}
break;
}

var seq__7528_7580 = cljs.core.seq.call(null,pmasks);
var chunk__7529_7581 = null;
var count__7530_7582 = (0);
var i__7531_7583 = (0);
while(true){
if((i__7531_7583 < count__7530_7582)){
var vec__7532_7584 = cljs.core._nth.call(null,chunk__7529_7581,i__7531_7583);
var pno_7585 = cljs.core.nth.call(null,vec__7532_7584,(0),null);
var pmask_7586 = cljs.core.nth.call(null,vec__7532_7584,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_7585,"$ = ",pmask_7586,";");


var G__7587 = seq__7528_7580;
var G__7588 = chunk__7529_7581;
var G__7589 = count__7530_7582;
var G__7590 = (i__7531_7583 + (1));
seq__7528_7580 = G__7587;
chunk__7529_7581 = G__7588;
count__7530_7582 = G__7589;
i__7531_7583 = G__7590;
continue;
} else {
var temp__5735__auto___7591 = cljs.core.seq.call(null,seq__7528_7580);
if(temp__5735__auto___7591){
var seq__7528_7592__$1 = temp__5735__auto___7591;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7528_7592__$1)){
var c__4461__auto___7593 = cljs.core.chunk_first.call(null,seq__7528_7592__$1);
var G__7594 = cljs.core.chunk_rest.call(null,seq__7528_7592__$1);
var G__7595 = c__4461__auto___7593;
var G__7596 = cljs.core.count.call(null,c__4461__auto___7593);
var G__7597 = (0);
seq__7528_7580 = G__7594;
chunk__7529_7581 = G__7595;
count__7530_7582 = G__7596;
i__7531_7583 = G__7597;
continue;
} else {
var vec__7535_7598 = cljs.core.first.call(null,seq__7528_7592__$1);
var pno_7599 = cljs.core.nth.call(null,vec__7535_7598,(0),null);
var pmask_7600 = cljs.core.nth.call(null,vec__7535_7598,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_7599,"$ = ",pmask_7600,";");


var G__7601 = cljs.core.next.call(null,seq__7528_7592__$1);
var G__7602 = null;
var G__7603 = (0);
var G__7604 = (0);
seq__7528_7580 = G__7601;
chunk__7529_7581 = G__7602;
count__7530_7582 = G__7603;
i__7531_7583 = G__7604;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__7605){
var map__7606 = p__7605;
var map__7606__$1 = (((((!((map__7606 == null))))?(((((map__7606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7606):map__7606);
var t = cljs.core.get.call(null,map__7606__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__7606__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__7606__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__7606__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__7606__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__7608_7626 = cljs.core.seq.call(null,protocols);
var chunk__7609_7627 = null;
var count__7610_7628 = (0);
var i__7611_7629 = (0);
while(true){
if((i__7611_7629 < count__7610_7628)){
var protocol_7630 = cljs.core._nth.call(null,chunk__7609_7627,i__7611_7629);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_7630)),"}");


var G__7631 = seq__7608_7626;
var G__7632 = chunk__7609_7627;
var G__7633 = count__7610_7628;
var G__7634 = (i__7611_7629 + (1));
seq__7608_7626 = G__7631;
chunk__7609_7627 = G__7632;
count__7610_7628 = G__7633;
i__7611_7629 = G__7634;
continue;
} else {
var temp__5735__auto___7635 = cljs.core.seq.call(null,seq__7608_7626);
if(temp__5735__auto___7635){
var seq__7608_7636__$1 = temp__5735__auto___7635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7608_7636__$1)){
var c__4461__auto___7637 = cljs.core.chunk_first.call(null,seq__7608_7636__$1);
var G__7638 = cljs.core.chunk_rest.call(null,seq__7608_7636__$1);
var G__7639 = c__4461__auto___7637;
var G__7640 = cljs.core.count.call(null,c__4461__auto___7637);
var G__7641 = (0);
seq__7608_7626 = G__7638;
chunk__7609_7627 = G__7639;
count__7610_7628 = G__7640;
i__7611_7629 = G__7641;
continue;
} else {
var protocol_7642 = cljs.core.first.call(null,seq__7608_7636__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_7642)),"}");


var G__7643 = cljs.core.next.call(null,seq__7608_7636__$1);
var G__7644 = null;
var G__7645 = (0);
var G__7646 = (0);
seq__7608_7626 = G__7643;
chunk__7609_7627 = G__7644;
count__7610_7628 = G__7645;
i__7611_7629 = G__7646;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__7612_7647 = cljs.core.seq.call(null,fields__$1);
var chunk__7613_7648 = null;
var count__7614_7649 = (0);
var i__7615_7650 = (0);
while(true){
if((i__7615_7650 < count__7614_7649)){
var fld_7651 = cljs.core._nth.call(null,chunk__7613_7648,i__7615_7650);
cljs.compiler.emitln.call(null,"this.",fld_7651," = ",fld_7651,";");


var G__7652 = seq__7612_7647;
var G__7653 = chunk__7613_7648;
var G__7654 = count__7614_7649;
var G__7655 = (i__7615_7650 + (1));
seq__7612_7647 = G__7652;
chunk__7613_7648 = G__7653;
count__7614_7649 = G__7654;
i__7615_7650 = G__7655;
continue;
} else {
var temp__5735__auto___7656 = cljs.core.seq.call(null,seq__7612_7647);
if(temp__5735__auto___7656){
var seq__7612_7657__$1 = temp__5735__auto___7656;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7612_7657__$1)){
var c__4461__auto___7658 = cljs.core.chunk_first.call(null,seq__7612_7657__$1);
var G__7659 = cljs.core.chunk_rest.call(null,seq__7612_7657__$1);
var G__7660 = c__4461__auto___7658;
var G__7661 = cljs.core.count.call(null,c__4461__auto___7658);
var G__7662 = (0);
seq__7612_7647 = G__7659;
chunk__7613_7648 = G__7660;
count__7614_7649 = G__7661;
i__7615_7650 = G__7662;
continue;
} else {
var fld_7663 = cljs.core.first.call(null,seq__7612_7657__$1);
cljs.compiler.emitln.call(null,"this.",fld_7663," = ",fld_7663,";");


var G__7664 = cljs.core.next.call(null,seq__7612_7657__$1);
var G__7665 = null;
var G__7666 = (0);
var G__7667 = (0);
seq__7612_7647 = G__7664;
chunk__7613_7648 = G__7665;
count__7614_7649 = G__7666;
i__7615_7650 = G__7667;
continue;
}
} else {
}
}
break;
}

var seq__7616_7668 = cljs.core.seq.call(null,pmasks);
var chunk__7617_7669 = null;
var count__7618_7670 = (0);
var i__7619_7671 = (0);
while(true){
if((i__7619_7671 < count__7618_7670)){
var vec__7620_7672 = cljs.core._nth.call(null,chunk__7617_7669,i__7619_7671);
var pno_7673 = cljs.core.nth.call(null,vec__7620_7672,(0),null);
var pmask_7674 = cljs.core.nth.call(null,vec__7620_7672,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_7673,"$ = ",pmask_7674,";");


var G__7675 = seq__7616_7668;
var G__7676 = chunk__7617_7669;
var G__7677 = count__7618_7670;
var G__7678 = (i__7619_7671 + (1));
seq__7616_7668 = G__7675;
chunk__7617_7669 = G__7676;
count__7618_7670 = G__7677;
i__7619_7671 = G__7678;
continue;
} else {
var temp__5735__auto___7679 = cljs.core.seq.call(null,seq__7616_7668);
if(temp__5735__auto___7679){
var seq__7616_7680__$1 = temp__5735__auto___7679;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7616_7680__$1)){
var c__4461__auto___7681 = cljs.core.chunk_first.call(null,seq__7616_7680__$1);
var G__7682 = cljs.core.chunk_rest.call(null,seq__7616_7680__$1);
var G__7683 = c__4461__auto___7681;
var G__7684 = cljs.core.count.call(null,c__4461__auto___7681);
var G__7685 = (0);
seq__7616_7668 = G__7682;
chunk__7617_7669 = G__7683;
count__7618_7670 = G__7684;
i__7619_7671 = G__7685;
continue;
} else {
var vec__7623_7686 = cljs.core.first.call(null,seq__7616_7680__$1);
var pno_7687 = cljs.core.nth.call(null,vec__7623_7686,(0),null);
var pmask_7688 = cljs.core.nth.call(null,vec__7623_7686,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_7687,"$ = ",pmask_7688,";");


var G__7689 = cljs.core.next.call(null,seq__7616_7680__$1);
var G__7690 = null;
var G__7691 = (0);
var G__7692 = (0);
seq__7616_7668 = G__7689;
chunk__7617_7669 = G__7690;
count__7618_7670 = G__7691;
i__7619_7671 = G__7692;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__7693){
var map__7694 = p__7693;
var map__7694__$1 = (((((!((map__7694 == null))))?(((((map__7694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7694):map__7694);
var target = cljs.core.get.call(null,map__7694__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__7694__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__7694__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__7694__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__7694__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5391__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__7696){
var map__7697 = p__7696;
var map__7697__$1 = (((((!((map__7697 == null))))?(((((map__7697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7697):map__7697);
var op = cljs.core.get.call(null,map__7697__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__7697__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__7697__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__7697__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__7697__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4036__auto__ = code;
if(cljs.core.truth_(and__4036__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4036__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__5391__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5391__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__7703 = cljs.core.seq.call(null,table);
var chunk__7704 = null;
var count__7705 = (0);
var i__7706 = (0);
while(true){
if((i__7706 < count__7705)){
var vec__7707 = cljs.core._nth.call(null,chunk__7704,i__7706);
var sym = cljs.core.nth.call(null,vec__7707,(0),null);
var value = cljs.core.nth.call(null,vec__7707,(1),null);
var ns_7713 = cljs.core.namespace.call(null,sym);
var name_7714 = cljs.core.name.call(null,sym);
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


var G__7715 = seq__7703;
var G__7716 = chunk__7704;
var G__7717 = count__7705;
var G__7718 = (i__7706 + (1));
seq__7703 = G__7715;
chunk__7704 = G__7716;
count__7705 = G__7717;
i__7706 = G__7718;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__7703);
if(temp__5735__auto__){
var seq__7703__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7703__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__7703__$1);
var G__7719 = cljs.core.chunk_rest.call(null,seq__7703__$1);
var G__7720 = c__4461__auto__;
var G__7721 = cljs.core.count.call(null,c__4461__auto__);
var G__7722 = (0);
seq__7703 = G__7719;
chunk__7704 = G__7720;
count__7705 = G__7721;
i__7706 = G__7722;
continue;
} else {
var vec__7710 = cljs.core.first.call(null,seq__7703__$1);
var sym = cljs.core.nth.call(null,vec__7710,(0),null);
var value = cljs.core.nth.call(null,vec__7710,(1),null);
var ns_7723 = cljs.core.namespace.call(null,sym);
var name_7724 = cljs.core.name.call(null,sym);
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


var G__7725 = cljs.core.next.call(null,seq__7703__$1);
var G__7726 = null;
var G__7727 = (0);
var G__7728 = (0);
seq__7703 = G__7725;
chunk__7704 = G__7726;
count__7705 = G__7727;
i__7706 = G__7728;
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
var G__7730 = arguments.length;
switch (G__7730) {
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
var k_7735 = cljs.core.first.call(null,ks);
var vec__7731_7736 = cljs.core.conj.call(null,prefix,k_7735);
var top_7737 = cljs.core.nth.call(null,vec__7731_7736,(0),null);
var prefix_SINGLEQUOTE__7738 = vec__7731_7736;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_7735)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__7738) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_7737)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_7737)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__7738)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_7737);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__7738)),";");
}
} else {
}

var m_7739 = cljs.core.get.call(null,externs,k_7735);
if(cljs.core.empty_QMARK_.call(null,m_7739)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__7738,m_7739,top_level,known_externs);
}

var G__7740 = cljs.core.next.call(null,ks);
ks = G__7740;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
