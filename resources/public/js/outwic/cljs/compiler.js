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
var map__6676 = s;
var map__6676__$1 = (((((!((map__6676 == null))))?(((((map__6676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6676):map__6676);
var name = cljs.core.get.call(null,map__6676__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__6676__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__6679 = info;
var map__6680 = G__6679;
var map__6680__$1 = (((((!((map__6680 == null))))?(((((map__6680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6680):map__6680);
var shadow = cljs.core.get.call(null,map__6680__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__6679__$1 = G__6679;
while(true){
var d__$2 = d__$1;
var map__6682 = G__6679__$1;
var map__6682__$1 = (((((!((map__6682 == null))))?(((((map__6682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6682):map__6682);
var shadow__$1 = cljs.core.get.call(null,map__6682__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__6684 = (d__$2 + (1));
var G__6685 = shadow__$1;
d__$1 = G__6684;
G__6679__$1 = G__6685;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__6686){
var map__6687 = p__6686;
var map__6687__$1 = (((((!((map__6687 == null))))?(((((map__6687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6687):map__6687);
var name_var = map__6687__$1;
var name = cljs.core.get.call(null,map__6687__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__6687__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__6689 = info;
var map__6689__$1 = (((((!((map__6689 == null))))?(((((map__6689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6689):map__6689);
var ns = cljs.core.get.call(null,map__6689__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__6689__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__6692 = arguments.length;
switch (G__6692) {
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
var G__6694 = cp;
switch (G__6694) {
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
var seq__6696_6700 = cljs.core.seq.call(null,s);
var chunk__6697_6701 = null;
var count__6698_6702 = (0);
var i__6699_6703 = (0);
while(true){
if((i__6699_6703 < count__6698_6702)){
var c_6704 = cljs.core._nth.call(null,chunk__6697_6701,i__6699_6703);
sb.append(cljs.compiler.escape_char.call(null,c_6704));


var G__6705 = seq__6696_6700;
var G__6706 = chunk__6697_6701;
var G__6707 = count__6698_6702;
var G__6708 = (i__6699_6703 + (1));
seq__6696_6700 = G__6705;
chunk__6697_6701 = G__6706;
count__6698_6702 = G__6707;
i__6699_6703 = G__6708;
continue;
} else {
var temp__5735__auto___6709 = cljs.core.seq.call(null,seq__6696_6700);
if(temp__5735__auto___6709){
var seq__6696_6710__$1 = temp__5735__auto___6709;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6696_6710__$1)){
var c__4461__auto___6711 = cljs.core.chunk_first.call(null,seq__6696_6710__$1);
var G__6712 = cljs.core.chunk_rest.call(null,seq__6696_6710__$1);
var G__6713 = c__4461__auto___6711;
var G__6714 = cljs.core.count.call(null,c__4461__auto___6711);
var G__6715 = (0);
seq__6696_6700 = G__6712;
chunk__6697_6701 = G__6713;
count__6698_6702 = G__6714;
i__6699_6703 = G__6715;
continue;
} else {
var c_6716 = cljs.core.first.call(null,seq__6696_6710__$1);
sb.append(cljs.compiler.escape_char.call(null,c_6716));


var G__6717 = cljs.core.next.call(null,seq__6696_6710__$1);
var G__6718 = null;
var G__6719 = (0);
var G__6720 = (0);
seq__6696_6700 = G__6717;
chunk__6697_6701 = G__6718;
count__6698_6702 = G__6719;
i__6699_6703 = G__6720;
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
var map__6721_6726 = ast;
var map__6721_6727__$1 = (((((!((map__6721_6726 == null))))?(((((map__6721_6726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6721_6726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6721_6726):map__6721_6726);
var env_6728 = cljs.core.get.call(null,map__6721_6727__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_6728))){
var map__6723_6729 = env_6728;
var map__6723_6730__$1 = (((((!((map__6723_6729 == null))))?(((((map__6723_6729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6723_6729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6723_6729):map__6723_6729);
var line_6731 = cljs.core.get.call(null,map__6723_6730__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_6732 = cljs.core.get.call(null,map__6723_6730__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__6723_6729,map__6723_6730__$1,line_6731,column_6732,map__6721_6726,map__6721_6727__$1,env_6728){
return (function (m){
var minfo = (function (){var G__6725 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__6725,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__6725;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_6731 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__6723_6729,map__6723_6730__$1,line_6731,column_6732,map__6721_6726,map__6721_6727__$1,env_6728){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_6732)?(column_6732 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__6723_6729,map__6723_6730__$1,line_6731,column_6732,map__6721_6726,map__6721_6727__$1,env_6728){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__6723_6729,map__6723_6730__$1,line_6731,column_6732,map__6721_6726,map__6721_6727__$1,env_6728))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__6723_6729,map__6723_6730__$1,line_6731,column_6732,map__6721_6726,map__6721_6727__$1,env_6728))
,cljs.core.sorted_map.call(null)));
});})(map__6723_6729,map__6723_6730__$1,line_6731,column_6732,map__6721_6726,map__6721_6727__$1,env_6728))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__6741 = arguments.length;
switch (G__6741) {
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
var len__4641__auto___6748 = arguments.length;
var i__4642__auto___6749 = (0);
while(true){
if((i__4642__auto___6749 < len__4641__auto___6748)){
args_arr__4662__auto__.push((arguments[i__4642__auto___6749]));

var G__6750 = (i__4642__auto___6749 + (1));
i__4642__auto___6749 = G__6750;
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
var s_6751 = (function (){var G__6742 = a;
if((!(typeof a === 'string'))){
return G__6742.toString();
} else {
return G__6742;
}
})();
var temp__5739__auto___6752 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___6752 == null)){
} else {
var sm_data_6753 = temp__5739__auto___6752;
cljs.core.swap_BANG_.call(null,sm_data_6753,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_6753,temp__5739__auto___6752,s_6751){
return (function (p1__6733_SHARP_){
return (p1__6733_SHARP_ + s_6751.length);
});})(sm_data_6753,temp__5739__auto___6752,s_6751))
);
}

cljs.core.print.call(null,s_6751);

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

var seq__6743 = cljs.core.seq.call(null,xs);
var chunk__6744 = null;
var count__6745 = (0);
var i__6746 = (0);
while(true){
if((i__6746 < count__6745)){
var x = cljs.core._nth.call(null,chunk__6744,i__6746);
cljs.compiler.emits.call(null,x);


var G__6754 = seq__6743;
var G__6755 = chunk__6744;
var G__6756 = count__6745;
var G__6757 = (i__6746 + (1));
seq__6743 = G__6754;
chunk__6744 = G__6755;
count__6745 = G__6756;
i__6746 = G__6757;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__6743);
if(temp__5735__auto__){
var seq__6743__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6743__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__6743__$1);
var G__6758 = cljs.core.chunk_rest.call(null,seq__6743__$1);
var G__6759 = c__4461__auto__;
var G__6760 = cljs.core.count.call(null,c__4461__auto__);
var G__6761 = (0);
seq__6743 = G__6758;
chunk__6744 = G__6759;
count__6745 = G__6760;
i__6746 = G__6761;
continue;
} else {
var x = cljs.core.first.call(null,seq__6743__$1);
cljs.compiler.emits.call(null,x);


var G__6762 = cljs.core.next.call(null,seq__6743__$1);
var G__6763 = null;
var G__6764 = (0);
var G__6765 = (0);
seq__6743 = G__6762;
chunk__6744 = G__6763;
count__6745 = G__6764;
i__6746 = G__6765;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq6735){
var G__6736 = cljs.core.first.call(null,seq6735);
var seq6735__$1 = cljs.core.next.call(null,seq6735);
var G__6737 = cljs.core.first.call(null,seq6735__$1);
var seq6735__$2 = cljs.core.next.call(null,seq6735__$1);
var G__6738 = cljs.core.first.call(null,seq6735__$2);
var seq6735__$3 = cljs.core.next.call(null,seq6735__$2);
var G__6739 = cljs.core.first.call(null,seq6735__$3);
var seq6735__$4 = cljs.core.next.call(null,seq6735__$3);
var G__6740 = cljs.core.first.call(null,seq6735__$4);
var seq6735__$5 = cljs.core.next.call(null,seq6735__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6736,G__6737,G__6738,G__6739,G__6740,seq6735__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__6766){
var map__6767 = p__6766;
var map__6767__$1 = (((((!((map__6767 == null))))?(((((map__6767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6767):map__6767);
var m = map__6767__$1;
var gen_line = cljs.core.get.call(null,map__6767__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__6776 = arguments.length;
switch (G__6776) {
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
var len__4641__auto___6782 = arguments.length;
var i__4642__auto___6783 = (0);
while(true){
if((i__4642__auto___6783 < len__4641__auto___6782)){
args_arr__4662__auto__.push((arguments[i__4642__auto___6783]));

var G__6784 = (i__4642__auto___6783 + (1));
i__4642__auto___6783 = G__6784;
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

var seq__6777_6785 = cljs.core.seq.call(null,xs);
var chunk__6778_6786 = null;
var count__6779_6787 = (0);
var i__6780_6788 = (0);
while(true){
if((i__6780_6788 < count__6779_6787)){
var x_6789 = cljs.core._nth.call(null,chunk__6778_6786,i__6780_6788);
cljs.compiler.emits.call(null,x_6789);


var G__6790 = seq__6777_6785;
var G__6791 = chunk__6778_6786;
var G__6792 = count__6779_6787;
var G__6793 = (i__6780_6788 + (1));
seq__6777_6785 = G__6790;
chunk__6778_6786 = G__6791;
count__6779_6787 = G__6792;
i__6780_6788 = G__6793;
continue;
} else {
var temp__5735__auto___6794 = cljs.core.seq.call(null,seq__6777_6785);
if(temp__5735__auto___6794){
var seq__6777_6795__$1 = temp__5735__auto___6794;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6777_6795__$1)){
var c__4461__auto___6796 = cljs.core.chunk_first.call(null,seq__6777_6795__$1);
var G__6797 = cljs.core.chunk_rest.call(null,seq__6777_6795__$1);
var G__6798 = c__4461__auto___6796;
var G__6799 = cljs.core.count.call(null,c__4461__auto___6796);
var G__6800 = (0);
seq__6777_6785 = G__6797;
chunk__6778_6786 = G__6798;
count__6779_6787 = G__6799;
i__6780_6788 = G__6800;
continue;
} else {
var x_6801 = cljs.core.first.call(null,seq__6777_6795__$1);
cljs.compiler.emits.call(null,x_6801);


var G__6802 = cljs.core.next.call(null,seq__6777_6795__$1);
var G__6803 = null;
var G__6804 = (0);
var G__6805 = (0);
seq__6777_6785 = G__6802;
chunk__6778_6786 = G__6803;
count__6779_6787 = G__6804;
i__6780_6788 = G__6805;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq6770){
var G__6771 = cljs.core.first.call(null,seq6770);
var seq6770__$1 = cljs.core.next.call(null,seq6770);
var G__6772 = cljs.core.first.call(null,seq6770__$1);
var seq6770__$2 = cljs.core.next.call(null,seq6770__$1);
var G__6773 = cljs.core.first.call(null,seq6770__$2);
var seq6770__$3 = cljs.core.next.call(null,seq6770__$2);
var G__6774 = cljs.core.first.call(null,seq6770__$3);
var seq6770__$4 = cljs.core.next.call(null,seq6770__$3);
var G__6775 = cljs.core.first.call(null,seq6770__$4);
var seq6770__$5 = cljs.core.next.call(null,seq6770__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6771,G__6772,G__6773,G__6774,G__6775,seq6770__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__6806_6810 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__6807_6811 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__6808_6812 = true;
var _STAR_print_fn_STAR__temp_val__6809_6813 = ((function (_STAR_print_newline_STAR__orig_val__6806_6810,_STAR_print_fn_STAR__orig_val__6807_6811,_STAR_print_newline_STAR__temp_val__6808_6812,sb__4572__auto__){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__6806_6810,_STAR_print_fn_STAR__orig_val__6807_6811,_STAR_print_newline_STAR__temp_val__6808_6812,sb__4572__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__6808_6812;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__6809_6813;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__6807_6811;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__6806_6810;
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
var vec__6814 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__6814,(0),null);
var name = cljs.core.nth.call(null,vec__6814,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__6814,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__6814,ns,name))
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
var vec__6817 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__6817,(0),null);
var flags = cljs.core.nth.call(null,vec__6817,(1),null);
var pattern = cljs.core.nth.call(null,vec__6817,(2),null);
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
return (function (p1__6820_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__6820_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__6822){
var map__6823 = p__6822;
var map__6823__$1 = (((((!((map__6823 == null))))?(((((map__6823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6823):map__6823);
var ast = map__6823__$1;
var info = cljs.core.get.call(null,map__6823__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__6823__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__6823__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__6825 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__6825__$1 = (((((!((map__6825 == null))))?(((((map__6825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6825):map__6825);
var cenv = map__6825__$1;
var options = cljs.core.get.call(null,map__6825__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__6827 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4036__auto__;
}
})())){
return clojure.set.difference.call(null,G__6827,cljs.analyzer.es5_allowed);
} else {
return G__6827;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4047__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__6828 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__6828,reserved);
} else {
return G__6828;
}
})();
var env__5496__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__6829_6830 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__6829_6831__$1 = (((G__6829_6830 instanceof cljs.core.Keyword))?G__6829_6830.fqn:null);
switch (G__6829_6831__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__6833){
var map__6834 = p__6833;
var map__6834__$1 = (((((!((map__6834 == null))))?(((((map__6834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6834):map__6834);
var arg = map__6834__$1;
var env = cljs.core.get.call(null,map__6834__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__6834__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__6834__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__6834__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__6836 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__6836__$1 = (((((!((map__6836 == null))))?(((((map__6836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6836):map__6836);
var name = cljs.core.get.call(null,map__6836__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__5496__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__6838){
var map__6839 = p__6838;
var map__6839__$1 = (((((!((map__6839 == null))))?(((((map__6839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6839):map__6839);
var expr = cljs.core.get.call(null,map__6839__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__6839__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__6839__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5496__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__6841_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__6841_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__6842){
var map__6843 = p__6842;
var map__6843__$1 = (((((!((map__6843 == null))))?(((((map__6843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6843):map__6843);
var env = cljs.core.get.call(null,map__6843__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__6843__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__6843__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__5496__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__6845){
var map__6846 = p__6845;
var map__6846__$1 = (((((!((map__6846 == null))))?(((((map__6846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6846):map__6846);
var items = cljs.core.get.call(null,map__6846__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__6846__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5496__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__6848_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__6848_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__6849){
var map__6850 = p__6849;
var map__6850__$1 = (((((!((map__6850 == null))))?(((((map__6850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6850):map__6850);
var items = cljs.core.get.call(null,map__6850__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__6850__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5496__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5735__auto___6868 = cljs.core.seq.call(null,items);
if(temp__5735__auto___6868){
var items_6869__$1 = temp__5735__auto___6868;
var vec__6852_6870 = items_6869__$1;
var seq__6853_6871 = cljs.core.seq.call(null,vec__6852_6870);
var first__6854_6872 = cljs.core.first.call(null,seq__6853_6871);
var seq__6853_6873__$1 = cljs.core.next.call(null,seq__6853_6871);
var vec__6855_6874 = first__6854_6872;
var k_6875 = cljs.core.nth.call(null,vec__6855_6874,(0),null);
var v_6876 = cljs.core.nth.call(null,vec__6855_6874,(1),null);
var r_6877 = seq__6853_6873__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_6875),"\": ",emit_js_object_val.call(null,v_6876));

var seq__6858_6878 = cljs.core.seq.call(null,r_6877);
var chunk__6859_6879 = null;
var count__6860_6880 = (0);
var i__6861_6881 = (0);
while(true){
if((i__6861_6881 < count__6860_6880)){
var vec__6862_6882 = cljs.core._nth.call(null,chunk__6859_6879,i__6861_6881);
var k_6883__$1 = cljs.core.nth.call(null,vec__6862_6882,(0),null);
var v_6884__$1 = cljs.core.nth.call(null,vec__6862_6882,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_6883__$1),"\": ",emit_js_object_val.call(null,v_6884__$1));


var G__6885 = seq__6858_6878;
var G__6886 = chunk__6859_6879;
var G__6887 = count__6860_6880;
var G__6888 = (i__6861_6881 + (1));
seq__6858_6878 = G__6885;
chunk__6859_6879 = G__6886;
count__6860_6880 = G__6887;
i__6861_6881 = G__6888;
continue;
} else {
var temp__5735__auto___6889__$1 = cljs.core.seq.call(null,seq__6858_6878);
if(temp__5735__auto___6889__$1){
var seq__6858_6890__$1 = temp__5735__auto___6889__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6858_6890__$1)){
var c__4461__auto___6891 = cljs.core.chunk_first.call(null,seq__6858_6890__$1);
var G__6892 = cljs.core.chunk_rest.call(null,seq__6858_6890__$1);
var G__6893 = c__4461__auto___6891;
var G__6894 = cljs.core.count.call(null,c__4461__auto___6891);
var G__6895 = (0);
seq__6858_6878 = G__6892;
chunk__6859_6879 = G__6893;
count__6860_6880 = G__6894;
i__6861_6881 = G__6895;
continue;
} else {
var vec__6865_6896 = cljs.core.first.call(null,seq__6858_6890__$1);
var k_6897__$1 = cljs.core.nth.call(null,vec__6865_6896,(0),null);
var v_6898__$1 = cljs.core.nth.call(null,vec__6865_6896,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_6897__$1),"\": ",emit_js_object_val.call(null,v_6898__$1));


var G__6899 = cljs.core.next.call(null,seq__6858_6890__$1);
var G__6900 = null;
var G__6901 = (0);
var G__6902 = (0);
seq__6858_6878 = G__6899;
chunk__6859_6879 = G__6900;
count__6860_6880 = G__6901;
i__6861_6881 = G__6902;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__6903){
var map__6904 = p__6903;
var map__6904__$1 = (((((!((map__6904 == null))))?(((((map__6904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6904):map__6904);
var keys = cljs.core.get.call(null,map__6904__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__6904__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__6904__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5496__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__6906){
var map__6907 = p__6906;
var map__6907__$1 = (((((!((map__6907 == null))))?(((((map__6907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6907):map__6907);
var items = cljs.core.get.call(null,map__6907__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__6907__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5496__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__6909){
var map__6910 = p__6909;
var map__6910__$1 = (((((!((map__6910 == null))))?(((((map__6910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6910):map__6910);
var expr = cljs.core.get.call(null,map__6910__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__6912){
var map__6913 = p__6912;
var map__6913__$1 = (((((!((map__6913 == null))))?(((((map__6913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6913):map__6913);
var form = cljs.core.get.call(null,map__6913__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__6913__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__5496__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__6915 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__6915__$1 = (((((!((map__6915 == null))))?(((((map__6915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6915):map__6915);
var op = cljs.core.get.call(null,map__6915__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__6915__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__6915__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__6917 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__6917__$1 = (((((!((map__6917 == null))))?(((((map__6917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6917):map__6917);
var op = cljs.core.get.call(null,map__6917__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__6917__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__6917__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__6919){
var map__6920 = p__6919;
var map__6920__$1 = (((((!((map__6920 == null))))?(((((map__6920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6920):map__6920);
var test = cljs.core.get.call(null,map__6920__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__6920__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__6920__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__6920__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__6920__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__6922){
var map__6923 = p__6922;
var map__6923__$1 = (((((!((map__6923 == null))))?(((((map__6923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6923):map__6923);
var v = cljs.core.get.call(null,map__6923__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__6923__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__6923__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__6923__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__6925_6945 = cljs.core.seq.call(null,nodes);
var chunk__6926_6946 = null;
var count__6927_6947 = (0);
var i__6928_6948 = (0);
while(true){
if((i__6928_6948 < count__6927_6947)){
var map__6929_6949 = cljs.core._nth.call(null,chunk__6926_6946,i__6928_6948);
var map__6929_6950__$1 = (((((!((map__6929_6949 == null))))?(((((map__6929_6949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6929_6949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6929_6949):map__6929_6949);
var ts_6951 = cljs.core.get.call(null,map__6929_6950__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__6930_6952 = cljs.core.get.call(null,map__6929_6950__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__6930_6953__$1 = (((((!((map__6930_6952 == null))))?(((((map__6930_6952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6930_6952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6930_6952):map__6930_6952);
var then_6954 = cljs.core.get.call(null,map__6930_6953__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__6933_6955 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_6951));
var chunk__6934_6956 = null;
var count__6935_6957 = (0);
var i__6936_6958 = (0);
while(true){
if((i__6936_6958 < count__6935_6957)){
var test_6959 = cljs.core._nth.call(null,chunk__6934_6956,i__6936_6958);
cljs.compiler.emitln.call(null,"case ",test_6959,":");


var G__6960 = seq__6933_6955;
var G__6961 = chunk__6934_6956;
var G__6962 = count__6935_6957;
var G__6963 = (i__6936_6958 + (1));
seq__6933_6955 = G__6960;
chunk__6934_6956 = G__6961;
count__6935_6957 = G__6962;
i__6936_6958 = G__6963;
continue;
} else {
var temp__5735__auto___6964 = cljs.core.seq.call(null,seq__6933_6955);
if(temp__5735__auto___6964){
var seq__6933_6965__$1 = temp__5735__auto___6964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6933_6965__$1)){
var c__4461__auto___6966 = cljs.core.chunk_first.call(null,seq__6933_6965__$1);
var G__6967 = cljs.core.chunk_rest.call(null,seq__6933_6965__$1);
var G__6968 = c__4461__auto___6966;
var G__6969 = cljs.core.count.call(null,c__4461__auto___6966);
var G__6970 = (0);
seq__6933_6955 = G__6967;
chunk__6934_6956 = G__6968;
count__6935_6957 = G__6969;
i__6936_6958 = G__6970;
continue;
} else {
var test_6971 = cljs.core.first.call(null,seq__6933_6965__$1);
cljs.compiler.emitln.call(null,"case ",test_6971,":");


var G__6972 = cljs.core.next.call(null,seq__6933_6965__$1);
var G__6973 = null;
var G__6974 = (0);
var G__6975 = (0);
seq__6933_6955 = G__6972;
chunk__6934_6956 = G__6973;
count__6935_6957 = G__6974;
i__6936_6958 = G__6975;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_6954);
} else {
cljs.compiler.emitln.call(null,then_6954);
}

cljs.compiler.emitln.call(null,"break;");


var G__6976 = seq__6925_6945;
var G__6977 = chunk__6926_6946;
var G__6978 = count__6927_6947;
var G__6979 = (i__6928_6948 + (1));
seq__6925_6945 = G__6976;
chunk__6926_6946 = G__6977;
count__6927_6947 = G__6978;
i__6928_6948 = G__6979;
continue;
} else {
var temp__5735__auto___6980 = cljs.core.seq.call(null,seq__6925_6945);
if(temp__5735__auto___6980){
var seq__6925_6981__$1 = temp__5735__auto___6980;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6925_6981__$1)){
var c__4461__auto___6982 = cljs.core.chunk_first.call(null,seq__6925_6981__$1);
var G__6983 = cljs.core.chunk_rest.call(null,seq__6925_6981__$1);
var G__6984 = c__4461__auto___6982;
var G__6985 = cljs.core.count.call(null,c__4461__auto___6982);
var G__6986 = (0);
seq__6925_6945 = G__6983;
chunk__6926_6946 = G__6984;
count__6927_6947 = G__6985;
i__6928_6948 = G__6986;
continue;
} else {
var map__6937_6987 = cljs.core.first.call(null,seq__6925_6981__$1);
var map__6937_6988__$1 = (((((!((map__6937_6987 == null))))?(((((map__6937_6987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6937_6987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6937_6987):map__6937_6987);
var ts_6989 = cljs.core.get.call(null,map__6937_6988__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__6938_6990 = cljs.core.get.call(null,map__6937_6988__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__6938_6991__$1 = (((((!((map__6938_6990 == null))))?(((((map__6938_6990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6938_6990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6938_6990):map__6938_6990);
var then_6992 = cljs.core.get.call(null,map__6938_6991__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__6941_6993 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_6989));
var chunk__6942_6994 = null;
var count__6943_6995 = (0);
var i__6944_6996 = (0);
while(true){
if((i__6944_6996 < count__6943_6995)){
var test_6997 = cljs.core._nth.call(null,chunk__6942_6994,i__6944_6996);
cljs.compiler.emitln.call(null,"case ",test_6997,":");


var G__6998 = seq__6941_6993;
var G__6999 = chunk__6942_6994;
var G__7000 = count__6943_6995;
var G__7001 = (i__6944_6996 + (1));
seq__6941_6993 = G__6998;
chunk__6942_6994 = G__6999;
count__6943_6995 = G__7000;
i__6944_6996 = G__7001;
continue;
} else {
var temp__5735__auto___7002__$1 = cljs.core.seq.call(null,seq__6941_6993);
if(temp__5735__auto___7002__$1){
var seq__6941_7003__$1 = temp__5735__auto___7002__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6941_7003__$1)){
var c__4461__auto___7004 = cljs.core.chunk_first.call(null,seq__6941_7003__$1);
var G__7005 = cljs.core.chunk_rest.call(null,seq__6941_7003__$1);
var G__7006 = c__4461__auto___7004;
var G__7007 = cljs.core.count.call(null,c__4461__auto___7004);
var G__7008 = (0);
seq__6941_6993 = G__7005;
chunk__6942_6994 = G__7006;
count__6943_6995 = G__7007;
i__6944_6996 = G__7008;
continue;
} else {
var test_7009 = cljs.core.first.call(null,seq__6941_7003__$1);
cljs.compiler.emitln.call(null,"case ",test_7009,":");


var G__7010 = cljs.core.next.call(null,seq__6941_7003__$1);
var G__7011 = null;
var G__7012 = (0);
var G__7013 = (0);
seq__6941_6993 = G__7010;
chunk__6942_6994 = G__7011;
count__6943_6995 = G__7012;
i__6944_6996 = G__7013;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_6992);
} else {
cljs.compiler.emitln.call(null,then_6992);
}

cljs.compiler.emitln.call(null,"break;");


var G__7014 = cljs.core.next.call(null,seq__6925_6981__$1);
var G__7015 = null;
var G__7016 = (0);
var G__7017 = (0);
seq__6925_6945 = G__7014;
chunk__6926_6946 = G__7015;
count__6927_6947 = G__7016;
i__6928_6948 = G__7017;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__7018){
var map__7019 = p__7018;
var map__7019__$1 = (((((!((map__7019 == null))))?(((((map__7019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7019):map__7019);
var throw$ = cljs.core.get.call(null,map__7019__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__7019__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__7022 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__7022,(0),null);
var rstr = cljs.core.nth.call(null,vec__7022,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__7022,fstr,rstr,ret_t,axstr){
return (function (p1__7021_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__7021_SHARP_);
});})(idx,vec__7022,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__7025 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7025),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__7025;
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
return (function (p1__7026_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__7026_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__7027 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__7028 = cljs.core.seq.call(null,vec__7027);
var first__7029 = cljs.core.first.call(null,seq__7028);
var seq__7028__$1 = cljs.core.next.call(null,seq__7028);
var p = first__7029;
var first__7029__$1 = cljs.core.first.call(null,seq__7028__$1);
var seq__7028__$2 = cljs.core.next.call(null,seq__7028__$1);
var ts = first__7029__$1;
var first__7029__$2 = cljs.core.first.call(null,seq__7028__$2);
var seq__7028__$3 = cljs.core.next.call(null,seq__7028__$2);
var n = first__7029__$2;
var xs = seq__7028__$3;
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
var vec__7030 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__7031 = cljs.core.seq.call(null,vec__7030);
var first__7032 = cljs.core.first.call(null,seq__7031);
var seq__7031__$1 = cljs.core.next.call(null,seq__7031);
var p = first__7032;
var first__7032__$1 = cljs.core.first.call(null,seq__7031__$1);
var seq__7031__$2 = cljs.core.next.call(null,seq__7031__$1);
var ts = first__7032__$1;
var xs = seq__7031__$2;
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
var G__7035 = arguments.length;
switch (G__7035) {
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
var vec__7043 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__7033_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__7033_SHARP_);
} else {
return p1__7033_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__7044 = cljs.core.seq.call(null,vec__7043);
var first__7045 = cljs.core.first.call(null,seq__7044);
var seq__7044__$1 = cljs.core.next.call(null,seq__7044);
var x = first__7045;
var ys = seq__7044__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__7046 = cljs.core.seq.call(null,ys);
var chunk__7047 = null;
var count__7048 = (0);
var i__7049 = (0);
while(true){
if((i__7049 < count__7048)){
var next_line = cljs.core._nth.call(null,chunk__7047,i__7049);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__7055 = seq__7046;
var G__7056 = chunk__7047;
var G__7057 = count__7048;
var G__7058 = (i__7049 + (1));
seq__7046 = G__7055;
chunk__7047 = G__7056;
count__7048 = G__7057;
i__7049 = G__7058;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__7046);
if(temp__5735__auto__){
var seq__7046__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7046__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__7046__$1);
var G__7059 = cljs.core.chunk_rest.call(null,seq__7046__$1);
var G__7060 = c__4461__auto__;
var G__7061 = cljs.core.count.call(null,c__4461__auto__);
var G__7062 = (0);
seq__7046 = G__7059;
chunk__7047 = G__7060;
count__7048 = G__7061;
i__7049 = G__7062;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__7046__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__7063 = cljs.core.next.call(null,seq__7046__$1);
var G__7064 = null;
var G__7065 = (0);
var G__7066 = (0);
seq__7046 = G__7063;
chunk__7047 = G__7064;
count__7048 = G__7065;
i__7049 = G__7066;
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

var seq__7050_7067 = cljs.core.seq.call(null,docs__$2);
var chunk__7051_7068 = null;
var count__7052_7069 = (0);
var i__7053_7070 = (0);
while(true){
if((i__7053_7070 < count__7052_7069)){
var e_7071 = cljs.core._nth.call(null,chunk__7051_7068,i__7053_7070);
if(cljs.core.truth_(e_7071)){
print_comment_lines.call(null,e_7071);
} else {
}


var G__7072 = seq__7050_7067;
var G__7073 = chunk__7051_7068;
var G__7074 = count__7052_7069;
var G__7075 = (i__7053_7070 + (1));
seq__7050_7067 = G__7072;
chunk__7051_7068 = G__7073;
count__7052_7069 = G__7074;
i__7053_7070 = G__7075;
continue;
} else {
var temp__5735__auto___7076 = cljs.core.seq.call(null,seq__7050_7067);
if(temp__5735__auto___7076){
var seq__7050_7077__$1 = temp__5735__auto___7076;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7050_7077__$1)){
var c__4461__auto___7078 = cljs.core.chunk_first.call(null,seq__7050_7077__$1);
var G__7079 = cljs.core.chunk_rest.call(null,seq__7050_7077__$1);
var G__7080 = c__4461__auto___7078;
var G__7081 = cljs.core.count.call(null,c__4461__auto___7078);
var G__7082 = (0);
seq__7050_7067 = G__7079;
chunk__7051_7068 = G__7080;
count__7052_7069 = G__7081;
i__7053_7070 = G__7082;
continue;
} else {
var e_7083 = cljs.core.first.call(null,seq__7050_7077__$1);
if(cljs.core.truth_(e_7083)){
print_comment_lines.call(null,e_7083);
} else {
}


var G__7084 = cljs.core.next.call(null,seq__7050_7077__$1);
var G__7085 = null;
var G__7086 = (0);
var G__7087 = (0);
seq__7050_7067 = G__7084;
chunk__7051_7068 = G__7085;
count__7052_7069 = G__7086;
i__7053_7070 = G__7087;
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
return (function (p1__7089_SHARP_){
return goog.string.startsWith(p1__7089_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__7090){
var map__7091 = p__7090;
var map__7091__$1 = (((((!((map__7091 == null))))?(((((map__7091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7091):map__7091);
var doc = cljs.core.get.call(null,map__7091__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__7091__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__7091__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__7091__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__7091__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__7091__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__7091__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__7091__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__7091__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__7093){
var map__7094 = p__7093;
var map__7094__$1 = (((((!((map__7094 == null))))?(((((map__7094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7094):map__7094);
var name = cljs.core.get.call(null,map__7094__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__7094__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__7094__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__7096_7114 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__7097_7115 = null;
var count__7098_7116 = (0);
var i__7099_7117 = (0);
while(true){
if((i__7099_7117 < count__7098_7116)){
var vec__7100_7118 = cljs.core._nth.call(null,chunk__7097_7115,i__7099_7117);
var i_7119 = cljs.core.nth.call(null,vec__7100_7118,(0),null);
var param_7120 = cljs.core.nth.call(null,vec__7100_7118,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_7120);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__7121 = seq__7096_7114;
var G__7122 = chunk__7097_7115;
var G__7123 = count__7098_7116;
var G__7124 = (i__7099_7117 + (1));
seq__7096_7114 = G__7121;
chunk__7097_7115 = G__7122;
count__7098_7116 = G__7123;
i__7099_7117 = G__7124;
continue;
} else {
var temp__5735__auto___7125 = cljs.core.seq.call(null,seq__7096_7114);
if(temp__5735__auto___7125){
var seq__7096_7126__$1 = temp__5735__auto___7125;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7096_7126__$1)){
var c__4461__auto___7127 = cljs.core.chunk_first.call(null,seq__7096_7126__$1);
var G__7128 = cljs.core.chunk_rest.call(null,seq__7096_7126__$1);
var G__7129 = c__4461__auto___7127;
var G__7130 = cljs.core.count.call(null,c__4461__auto___7127);
var G__7131 = (0);
seq__7096_7114 = G__7128;
chunk__7097_7115 = G__7129;
count__7098_7116 = G__7130;
i__7099_7117 = G__7131;
continue;
} else {
var vec__7103_7132 = cljs.core.first.call(null,seq__7096_7126__$1);
var i_7133 = cljs.core.nth.call(null,vec__7103_7132,(0),null);
var param_7134 = cljs.core.nth.call(null,vec__7103_7132,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_7134);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__7135 = cljs.core.next.call(null,seq__7096_7126__$1);
var G__7136 = null;
var G__7137 = (0);
var G__7138 = (0);
seq__7096_7114 = G__7135;
chunk__7097_7115 = G__7136;
count__7098_7116 = G__7137;
i__7099_7117 = G__7138;
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

var seq__7106_7139 = cljs.core.seq.call(null,params);
var chunk__7107_7140 = null;
var count__7108_7141 = (0);
var i__7109_7142 = (0);
while(true){
if((i__7109_7142 < count__7108_7141)){
var param_7143 = cljs.core._nth.call(null,chunk__7107_7140,i__7109_7142);
cljs.compiler.emit.call(null,param_7143);

if(cljs.core._EQ_.call(null,param_7143,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7144 = seq__7106_7139;
var G__7145 = chunk__7107_7140;
var G__7146 = count__7108_7141;
var G__7147 = (i__7109_7142 + (1));
seq__7106_7139 = G__7144;
chunk__7107_7140 = G__7145;
count__7108_7141 = G__7146;
i__7109_7142 = G__7147;
continue;
} else {
var temp__5735__auto___7148 = cljs.core.seq.call(null,seq__7106_7139);
if(temp__5735__auto___7148){
var seq__7106_7149__$1 = temp__5735__auto___7148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7106_7149__$1)){
var c__4461__auto___7150 = cljs.core.chunk_first.call(null,seq__7106_7149__$1);
var G__7151 = cljs.core.chunk_rest.call(null,seq__7106_7149__$1);
var G__7152 = c__4461__auto___7150;
var G__7153 = cljs.core.count.call(null,c__4461__auto___7150);
var G__7154 = (0);
seq__7106_7139 = G__7151;
chunk__7107_7140 = G__7152;
count__7108_7141 = G__7153;
i__7109_7142 = G__7154;
continue;
} else {
var param_7155 = cljs.core.first.call(null,seq__7106_7149__$1);
cljs.compiler.emit.call(null,param_7155);

if(cljs.core._EQ_.call(null,param_7155,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7156 = cljs.core.next.call(null,seq__7106_7149__$1);
var G__7157 = null;
var G__7158 = (0);
var G__7159 = (0);
seq__7106_7139 = G__7156;
chunk__7107_7140 = G__7157;
count__7108_7141 = G__7158;
i__7109_7142 = G__7159;
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

var seq__7110_7160 = cljs.core.seq.call(null,params);
var chunk__7111_7161 = null;
var count__7112_7162 = (0);
var i__7113_7163 = (0);
while(true){
if((i__7113_7163 < count__7112_7162)){
var param_7164 = cljs.core._nth.call(null,chunk__7111_7161,i__7113_7163);
cljs.compiler.emit.call(null,param_7164);

if(cljs.core._EQ_.call(null,param_7164,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7165 = seq__7110_7160;
var G__7166 = chunk__7111_7161;
var G__7167 = count__7112_7162;
var G__7168 = (i__7113_7163 + (1));
seq__7110_7160 = G__7165;
chunk__7111_7161 = G__7166;
count__7112_7162 = G__7167;
i__7113_7163 = G__7168;
continue;
} else {
var temp__5735__auto___7169 = cljs.core.seq.call(null,seq__7110_7160);
if(temp__5735__auto___7169){
var seq__7110_7170__$1 = temp__5735__auto___7169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7110_7170__$1)){
var c__4461__auto___7171 = cljs.core.chunk_first.call(null,seq__7110_7170__$1);
var G__7172 = cljs.core.chunk_rest.call(null,seq__7110_7170__$1);
var G__7173 = c__4461__auto___7171;
var G__7174 = cljs.core.count.call(null,c__4461__auto___7171);
var G__7175 = (0);
seq__7110_7160 = G__7172;
chunk__7111_7161 = G__7173;
count__7112_7162 = G__7174;
i__7113_7163 = G__7175;
continue;
} else {
var param_7176 = cljs.core.first.call(null,seq__7110_7170__$1);
cljs.compiler.emit.call(null,param_7176);

if(cljs.core._EQ_.call(null,param_7176,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7177 = cljs.core.next.call(null,seq__7110_7170__$1);
var G__7178 = null;
var G__7179 = (0);
var G__7180 = (0);
seq__7110_7160 = G__7177;
chunk__7111_7161 = G__7178;
count__7112_7162 = G__7179;
i__7113_7163 = G__7180;
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
var seq__7181 = cljs.core.seq.call(null,params);
var chunk__7182 = null;
var count__7183 = (0);
var i__7184 = (0);
while(true){
if((i__7184 < count__7183)){
var param = cljs.core._nth.call(null,chunk__7182,i__7184);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7185 = seq__7181;
var G__7186 = chunk__7182;
var G__7187 = count__7183;
var G__7188 = (i__7184 + (1));
seq__7181 = G__7185;
chunk__7182 = G__7186;
count__7183 = G__7187;
i__7184 = G__7188;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__7181);
if(temp__5735__auto__){
var seq__7181__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7181__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__7181__$1);
var G__7189 = cljs.core.chunk_rest.call(null,seq__7181__$1);
var G__7190 = c__4461__auto__;
var G__7191 = cljs.core.count.call(null,c__4461__auto__);
var G__7192 = (0);
seq__7181 = G__7189;
chunk__7182 = G__7190;
count__7183 = G__7191;
i__7184 = G__7192;
continue;
} else {
var param = cljs.core.first.call(null,seq__7181__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7193 = cljs.core.next.call(null,seq__7181__$1);
var G__7194 = null;
var G__7195 = (0);
var G__7196 = (0);
seq__7181 = G__7193;
chunk__7182 = G__7194;
count__7183 = G__7195;
i__7184 = G__7196;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__7197){
var map__7198 = p__7197;
var map__7198__$1 = (((((!((map__7198 == null))))?(((((map__7198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7198):map__7198);
var expr = cljs.core.get.call(null,map__7198__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__7198__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__7198__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__7198__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__7198__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__7198__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__5496__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__7200){
var map__7201 = p__7200;
var map__7201__$1 = (((((!((map__7201 == null))))?(((((map__7201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7201):map__7201);
var f = map__7201__$1;
var expr = cljs.core.get.call(null,map__7201__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__7201__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__7201__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__7201__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__7201__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__7201__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__7201__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__7201__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__5496__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_7211__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_7212 = cljs.compiler.munge.call(null,name_7211__$1);
var delegate_name_7213 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_7212),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_7213," = function (");

var seq__7203_7214 = cljs.core.seq.call(null,params);
var chunk__7204_7215 = null;
var count__7205_7216 = (0);
var i__7206_7217 = (0);
while(true){
if((i__7206_7217 < count__7205_7216)){
var param_7218 = cljs.core._nth.call(null,chunk__7204_7215,i__7206_7217);
cljs.compiler.emit.call(null,param_7218);

if(cljs.core._EQ_.call(null,param_7218,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7219 = seq__7203_7214;
var G__7220 = chunk__7204_7215;
var G__7221 = count__7205_7216;
var G__7222 = (i__7206_7217 + (1));
seq__7203_7214 = G__7219;
chunk__7204_7215 = G__7220;
count__7205_7216 = G__7221;
i__7206_7217 = G__7222;
continue;
} else {
var temp__5735__auto___7223 = cljs.core.seq.call(null,seq__7203_7214);
if(temp__5735__auto___7223){
var seq__7203_7224__$1 = temp__5735__auto___7223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7203_7224__$1)){
var c__4461__auto___7225 = cljs.core.chunk_first.call(null,seq__7203_7224__$1);
var G__7226 = cljs.core.chunk_rest.call(null,seq__7203_7224__$1);
var G__7227 = c__4461__auto___7225;
var G__7228 = cljs.core.count.call(null,c__4461__auto___7225);
var G__7229 = (0);
seq__7203_7214 = G__7226;
chunk__7204_7215 = G__7227;
count__7205_7216 = G__7228;
i__7206_7217 = G__7229;
continue;
} else {
var param_7230 = cljs.core.first.call(null,seq__7203_7224__$1);
cljs.compiler.emit.call(null,param_7230);

if(cljs.core._EQ_.call(null,param_7230,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7231 = cljs.core.next.call(null,seq__7203_7224__$1);
var G__7232 = null;
var G__7233 = (0);
var G__7234 = (0);
seq__7203_7214 = G__7231;
chunk__7204_7215 = G__7232;
count__7205_7216 = G__7233;
i__7206_7217 = G__7234;
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

cljs.compiler.emitln.call(null,"var ",mname_7212," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_7235 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_7235,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_7213,".call(this,");

var seq__7207_7236 = cljs.core.seq.call(null,params);
var chunk__7208_7237 = null;
var count__7209_7238 = (0);
var i__7210_7239 = (0);
while(true){
if((i__7210_7239 < count__7209_7238)){
var param_7240 = cljs.core._nth.call(null,chunk__7208_7237,i__7210_7239);
cljs.compiler.emit.call(null,param_7240);

if(cljs.core._EQ_.call(null,param_7240,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7241 = seq__7207_7236;
var G__7242 = chunk__7208_7237;
var G__7243 = count__7209_7238;
var G__7244 = (i__7210_7239 + (1));
seq__7207_7236 = G__7241;
chunk__7208_7237 = G__7242;
count__7209_7238 = G__7243;
i__7210_7239 = G__7244;
continue;
} else {
var temp__5735__auto___7245 = cljs.core.seq.call(null,seq__7207_7236);
if(temp__5735__auto___7245){
var seq__7207_7246__$1 = temp__5735__auto___7245;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7207_7246__$1)){
var c__4461__auto___7247 = cljs.core.chunk_first.call(null,seq__7207_7246__$1);
var G__7248 = cljs.core.chunk_rest.call(null,seq__7207_7246__$1);
var G__7249 = c__4461__auto___7247;
var G__7250 = cljs.core.count.call(null,c__4461__auto___7247);
var G__7251 = (0);
seq__7207_7236 = G__7248;
chunk__7208_7237 = G__7249;
count__7209_7238 = G__7250;
i__7210_7239 = G__7251;
continue;
} else {
var param_7252 = cljs.core.first.call(null,seq__7207_7246__$1);
cljs.compiler.emit.call(null,param_7252);

if(cljs.core._EQ_.call(null,param_7252,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7253 = cljs.core.next.call(null,seq__7207_7246__$1);
var G__7254 = null;
var G__7255 = (0);
var G__7256 = (0);
seq__7207_7236 = G__7253;
chunk__7208_7237 = G__7254;
count__7209_7238 = G__7255;
i__7210_7239 = G__7256;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_7212,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_7212,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_7211__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_7212,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_7213,";");

cljs.compiler.emitln.call(null,"return ",mname_7212,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__7260){
var map__7261 = p__7260;
var map__7261__$1 = (((((!((map__7261 == null))))?(((((map__7261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7261):map__7261);
var variadic = cljs.core.get.call(null,map__7261__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__7261__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__7261__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__7261__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__7261__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__7261__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__7261__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__7261,map__7261__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__7257_SHARP_){
var and__4036__auto__ = p1__7257_SHARP_;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__7257_SHARP_));
} else {
return and__4036__auto__;
}
});})(map__7261,map__7261__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_7296__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_7297 = cljs.compiler.munge.call(null,name_7296__$1);
var maxparams_7298 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_7299 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_7296__$1,mname_7297,maxparams_7298,loop_locals,map__7261,map__7261__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_7297),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_7296__$1,mname_7297,maxparams_7298,loop_locals,map__7261,map__7261__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_7300 = cljs.core.sort_by.call(null,((function (name_7296__$1,mname_7297,maxparams_7298,mmap_7299,loop_locals,map__7261,map__7261__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__7258_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__7258_SHARP_)));
});})(name_7296__$1,mname_7297,maxparams_7298,mmap_7299,loop_locals,map__7261,map__7261__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_7299));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_7297," = null;");

var seq__7263_7301 = cljs.core.seq.call(null,ms_7300);
var chunk__7264_7302 = null;
var count__7265_7303 = (0);
var i__7266_7304 = (0);
while(true){
if((i__7266_7304 < count__7265_7303)){
var vec__7267_7305 = cljs.core._nth.call(null,chunk__7264_7302,i__7266_7304);
var n_7306 = cljs.core.nth.call(null,vec__7267_7305,(0),null);
var meth_7307 = cljs.core.nth.call(null,vec__7267_7305,(1),null);
cljs.compiler.emits.call(null,"var ",n_7306," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7307))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_7307);
} else {
cljs.compiler.emit_fn_method.call(null,meth_7307);
}

cljs.compiler.emitln.call(null,";");


var G__7308 = seq__7263_7301;
var G__7309 = chunk__7264_7302;
var G__7310 = count__7265_7303;
var G__7311 = (i__7266_7304 + (1));
seq__7263_7301 = G__7308;
chunk__7264_7302 = G__7309;
count__7265_7303 = G__7310;
i__7266_7304 = G__7311;
continue;
} else {
var temp__5735__auto___7312 = cljs.core.seq.call(null,seq__7263_7301);
if(temp__5735__auto___7312){
var seq__7263_7313__$1 = temp__5735__auto___7312;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7263_7313__$1)){
var c__4461__auto___7314 = cljs.core.chunk_first.call(null,seq__7263_7313__$1);
var G__7315 = cljs.core.chunk_rest.call(null,seq__7263_7313__$1);
var G__7316 = c__4461__auto___7314;
var G__7317 = cljs.core.count.call(null,c__4461__auto___7314);
var G__7318 = (0);
seq__7263_7301 = G__7315;
chunk__7264_7302 = G__7316;
count__7265_7303 = G__7317;
i__7266_7304 = G__7318;
continue;
} else {
var vec__7270_7319 = cljs.core.first.call(null,seq__7263_7313__$1);
var n_7320 = cljs.core.nth.call(null,vec__7270_7319,(0),null);
var meth_7321 = cljs.core.nth.call(null,vec__7270_7319,(1),null);
cljs.compiler.emits.call(null,"var ",n_7320," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7321))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_7321);
} else {
cljs.compiler.emit_fn_method.call(null,meth_7321);
}

cljs.compiler.emitln.call(null,";");


var G__7322 = cljs.core.next.call(null,seq__7263_7313__$1);
var G__7323 = null;
var G__7324 = (0);
var G__7325 = (0);
seq__7263_7301 = G__7322;
chunk__7264_7302 = G__7323;
count__7265_7303 = G__7324;
i__7266_7304 = G__7325;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_7297," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_7298),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_7298)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_7298));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__7273_7326 = cljs.core.seq.call(null,ms_7300);
var chunk__7274_7327 = null;
var count__7275_7328 = (0);
var i__7276_7329 = (0);
while(true){
if((i__7276_7329 < count__7275_7328)){
var vec__7277_7330 = cljs.core._nth.call(null,chunk__7274_7327,i__7276_7329);
var n_7331 = cljs.core.nth.call(null,vec__7277_7330,(0),null);
var meth_7332 = cljs.core.nth.call(null,vec__7277_7330,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7332))){
cljs.compiler.emitln.call(null,"default:");

var restarg_7333 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_7333," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_7334 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_7333," = new cljs.core.IndexedSeq(",a_7334,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_7331,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_7298)),(((cljs.core.count.call(null,maxparams_7298) > (1)))?", ":null),restarg_7333,");");
} else {
var pcnt_7335 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7332));
cljs.compiler.emitln.call(null,"case ",pcnt_7335,":");

cljs.compiler.emitln.call(null,"return ",n_7331,".call(this",(((pcnt_7335 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_7335,maxparams_7298)),null,(1),null)),(2),null))),");");
}


var G__7336 = seq__7273_7326;
var G__7337 = chunk__7274_7327;
var G__7338 = count__7275_7328;
var G__7339 = (i__7276_7329 + (1));
seq__7273_7326 = G__7336;
chunk__7274_7327 = G__7337;
count__7275_7328 = G__7338;
i__7276_7329 = G__7339;
continue;
} else {
var temp__5735__auto___7340 = cljs.core.seq.call(null,seq__7273_7326);
if(temp__5735__auto___7340){
var seq__7273_7341__$1 = temp__5735__auto___7340;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7273_7341__$1)){
var c__4461__auto___7342 = cljs.core.chunk_first.call(null,seq__7273_7341__$1);
var G__7343 = cljs.core.chunk_rest.call(null,seq__7273_7341__$1);
var G__7344 = c__4461__auto___7342;
var G__7345 = cljs.core.count.call(null,c__4461__auto___7342);
var G__7346 = (0);
seq__7273_7326 = G__7343;
chunk__7274_7327 = G__7344;
count__7275_7328 = G__7345;
i__7276_7329 = G__7346;
continue;
} else {
var vec__7280_7347 = cljs.core.first.call(null,seq__7273_7341__$1);
var n_7348 = cljs.core.nth.call(null,vec__7280_7347,(0),null);
var meth_7349 = cljs.core.nth.call(null,vec__7280_7347,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7349))){
cljs.compiler.emitln.call(null,"default:");

var restarg_7350 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_7350," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_7351 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_7350," = new cljs.core.IndexedSeq(",a_7351,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_7348,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_7298)),(((cljs.core.count.call(null,maxparams_7298) > (1)))?", ":null),restarg_7350,");");
} else {
var pcnt_7352 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7349));
cljs.compiler.emitln.call(null,"case ",pcnt_7352,":");

cljs.compiler.emitln.call(null,"return ",n_7348,".call(this",(((pcnt_7352 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_7352,maxparams_7298)),null,(1),null)),(2),null))),");");
}


var G__7353 = cljs.core.next.call(null,seq__7273_7341__$1);
var G__7354 = null;
var G__7355 = (0);
var G__7356 = (0);
seq__7273_7326 = G__7353;
chunk__7274_7327 = G__7354;
count__7275_7328 = G__7355;
i__7276_7329 = G__7356;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_7357 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_7300)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_7357,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_7297,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_7297,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_7296__$1,mname_7297,maxparams_7298,mmap_7299,ms_7300,loop_locals,map__7261,map__7261__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__7259_SHARP_){
var vec__7283 = p1__7259_SHARP_;
var n = cljs.core.nth.call(null,vec__7283,(0),null);
var m = cljs.core.nth.call(null,vec__7283,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_7296__$1,mname_7297,maxparams_7298,mmap_7299,ms_7300,loop_locals,map__7261,map__7261__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_7300),".cljs$lang$applyTo;");
} else {
}

var seq__7286_7358 = cljs.core.seq.call(null,ms_7300);
var chunk__7287_7359 = null;
var count__7288_7360 = (0);
var i__7289_7361 = (0);
while(true){
if((i__7289_7361 < count__7288_7360)){
var vec__7290_7362 = cljs.core._nth.call(null,chunk__7287_7359,i__7289_7361);
var n_7363 = cljs.core.nth.call(null,vec__7290_7362,(0),null);
var meth_7364 = cljs.core.nth.call(null,vec__7290_7362,(1),null);
var c_7365 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7364));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7364))){
cljs.compiler.emitln.call(null,mname_7297,".cljs$core$IFn$_invoke$arity$variadic = ",n_7363,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_7297,".cljs$core$IFn$_invoke$arity$",c_7365," = ",n_7363,";");
}


var G__7366 = seq__7286_7358;
var G__7367 = chunk__7287_7359;
var G__7368 = count__7288_7360;
var G__7369 = (i__7289_7361 + (1));
seq__7286_7358 = G__7366;
chunk__7287_7359 = G__7367;
count__7288_7360 = G__7368;
i__7289_7361 = G__7369;
continue;
} else {
var temp__5735__auto___7370 = cljs.core.seq.call(null,seq__7286_7358);
if(temp__5735__auto___7370){
var seq__7286_7371__$1 = temp__5735__auto___7370;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7286_7371__$1)){
var c__4461__auto___7372 = cljs.core.chunk_first.call(null,seq__7286_7371__$1);
var G__7373 = cljs.core.chunk_rest.call(null,seq__7286_7371__$1);
var G__7374 = c__4461__auto___7372;
var G__7375 = cljs.core.count.call(null,c__4461__auto___7372);
var G__7376 = (0);
seq__7286_7358 = G__7373;
chunk__7287_7359 = G__7374;
count__7288_7360 = G__7375;
i__7289_7361 = G__7376;
continue;
} else {
var vec__7293_7377 = cljs.core.first.call(null,seq__7286_7371__$1);
var n_7378 = cljs.core.nth.call(null,vec__7293_7377,(0),null);
var meth_7379 = cljs.core.nth.call(null,vec__7293_7377,(1),null);
var c_7380 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7379));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7379))){
cljs.compiler.emitln.call(null,mname_7297,".cljs$core$IFn$_invoke$arity$variadic = ",n_7378,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_7297,".cljs$core$IFn$_invoke$arity$",c_7380," = ",n_7378,";");
}


var G__7381 = cljs.core.next.call(null,seq__7286_7371__$1);
var G__7382 = null;
var G__7383 = (0);
var G__7384 = (0);
seq__7286_7358 = G__7381;
chunk__7287_7359 = G__7382;
count__7288_7360 = G__7383;
i__7289_7361 = G__7384;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_7297,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__7385){
var map__7386 = p__7385;
var map__7386__$1 = (((((!((map__7386 == null))))?(((((map__7386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7386):map__7386);
var statements = cljs.core.get.call(null,map__7386__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__7386__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__7386__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__7388_7392 = cljs.core.seq.call(null,statements);
var chunk__7389_7393 = null;
var count__7390_7394 = (0);
var i__7391_7395 = (0);
while(true){
if((i__7391_7395 < count__7390_7394)){
var s_7396 = cljs.core._nth.call(null,chunk__7389_7393,i__7391_7395);
cljs.compiler.emitln.call(null,s_7396);


var G__7397 = seq__7388_7392;
var G__7398 = chunk__7389_7393;
var G__7399 = count__7390_7394;
var G__7400 = (i__7391_7395 + (1));
seq__7388_7392 = G__7397;
chunk__7389_7393 = G__7398;
count__7390_7394 = G__7399;
i__7391_7395 = G__7400;
continue;
} else {
var temp__5735__auto___7401 = cljs.core.seq.call(null,seq__7388_7392);
if(temp__5735__auto___7401){
var seq__7388_7402__$1 = temp__5735__auto___7401;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7388_7402__$1)){
var c__4461__auto___7403 = cljs.core.chunk_first.call(null,seq__7388_7402__$1);
var G__7404 = cljs.core.chunk_rest.call(null,seq__7388_7402__$1);
var G__7405 = c__4461__auto___7403;
var G__7406 = cljs.core.count.call(null,c__4461__auto___7403);
var G__7407 = (0);
seq__7388_7392 = G__7404;
chunk__7389_7393 = G__7405;
count__7390_7394 = G__7406;
i__7391_7395 = G__7407;
continue;
} else {
var s_7408 = cljs.core.first.call(null,seq__7388_7402__$1);
cljs.compiler.emitln.call(null,s_7408);


var G__7409 = cljs.core.next.call(null,seq__7388_7402__$1);
var G__7410 = null;
var G__7411 = (0);
var G__7412 = (0);
seq__7388_7392 = G__7409;
chunk__7389_7393 = G__7410;
count__7390_7394 = G__7411;
i__7391_7395 = G__7412;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__7413){
var map__7414 = p__7413;
var map__7414__$1 = (((((!((map__7414 == null))))?(((((map__7414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7414):map__7414);
var try$ = cljs.core.get.call(null,map__7414__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__7414__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__7414__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__7414__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__7414__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__7416,is_loop){
var map__7417 = p__7416;
var map__7417__$1 = (((((!((map__7417 == null))))?(((((map__7417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7417):map__7417);
var expr = cljs.core.get.call(null,map__7417__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__7417__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__7417__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__7419_7429 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__7420_7430 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__7419_7429,context,map__7417,map__7417__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__7419_7429,context,map__7417,map__7417__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__7420_7430;

try{var seq__7421_7431 = cljs.core.seq.call(null,bindings);
var chunk__7422_7432 = null;
var count__7423_7433 = (0);
var i__7424_7434 = (0);
while(true){
if((i__7424_7434 < count__7423_7433)){
var map__7425_7435 = cljs.core._nth.call(null,chunk__7422_7432,i__7424_7434);
var map__7425_7436__$1 = (((((!((map__7425_7435 == null))))?(((((map__7425_7435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7425_7435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7425_7435):map__7425_7435);
var binding_7437 = map__7425_7436__$1;
var init_7438 = cljs.core.get.call(null,map__7425_7436__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_7437);

cljs.compiler.emitln.call(null," = ",init_7438,";");


var G__7439 = seq__7421_7431;
var G__7440 = chunk__7422_7432;
var G__7441 = count__7423_7433;
var G__7442 = (i__7424_7434 + (1));
seq__7421_7431 = G__7439;
chunk__7422_7432 = G__7440;
count__7423_7433 = G__7441;
i__7424_7434 = G__7442;
continue;
} else {
var temp__5735__auto___7443 = cljs.core.seq.call(null,seq__7421_7431);
if(temp__5735__auto___7443){
var seq__7421_7444__$1 = temp__5735__auto___7443;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7421_7444__$1)){
var c__4461__auto___7445 = cljs.core.chunk_first.call(null,seq__7421_7444__$1);
var G__7446 = cljs.core.chunk_rest.call(null,seq__7421_7444__$1);
var G__7447 = c__4461__auto___7445;
var G__7448 = cljs.core.count.call(null,c__4461__auto___7445);
var G__7449 = (0);
seq__7421_7431 = G__7446;
chunk__7422_7432 = G__7447;
count__7423_7433 = G__7448;
i__7424_7434 = G__7449;
continue;
} else {
var map__7427_7450 = cljs.core.first.call(null,seq__7421_7444__$1);
var map__7427_7451__$1 = (((((!((map__7427_7450 == null))))?(((((map__7427_7450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7427_7450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7427_7450):map__7427_7450);
var binding_7452 = map__7427_7451__$1;
var init_7453 = cljs.core.get.call(null,map__7427_7451__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_7452);

cljs.compiler.emitln.call(null," = ",init_7453,";");


var G__7454 = cljs.core.next.call(null,seq__7421_7444__$1);
var G__7455 = null;
var G__7456 = (0);
var G__7457 = (0);
seq__7421_7431 = G__7454;
chunk__7422_7432 = G__7455;
count__7423_7433 = G__7456;
i__7424_7434 = G__7457;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__7419_7429;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__7458){
var map__7459 = p__7458;
var map__7459__$1 = (((((!((map__7459 == null))))?(((((map__7459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7459):map__7459);
var frame = cljs.core.get.call(null,map__7459__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__7459__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__7459__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4518__auto___7461 = cljs.core.count.call(null,exprs);
var i_7462 = (0);
while(true){
if((i_7462 < n__4518__auto___7461)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_7462)," = ",exprs.call(null,i_7462),";");

var G__7463 = (i_7462 + (1));
i_7462 = G__7463;
continue;
} else {
}
break;
}

var n__4518__auto___7464 = cljs.core.count.call(null,exprs);
var i_7465 = (0);
while(true){
if((i_7465 < n__4518__auto___7464)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_7465))," = ",temps.call(null,i_7465),";");

var G__7466 = (i_7465 + (1));
i_7465 = G__7466;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__7467){
var map__7468 = p__7467;
var map__7468__$1 = (((((!((map__7468 == null))))?(((((map__7468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7468):map__7468);
var expr = cljs.core.get.call(null,map__7468__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__7468__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__7468__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__7470_7478 = cljs.core.seq.call(null,bindings);
var chunk__7471_7479 = null;
var count__7472_7480 = (0);
var i__7473_7481 = (0);
while(true){
if((i__7473_7481 < count__7472_7480)){
var map__7474_7482 = cljs.core._nth.call(null,chunk__7471_7479,i__7473_7481);
var map__7474_7483__$1 = (((((!((map__7474_7482 == null))))?(((((map__7474_7482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7474_7482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7474_7482):map__7474_7482);
var binding_7484 = map__7474_7483__$1;
var init_7485 = cljs.core.get.call(null,map__7474_7483__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_7484)," = ",init_7485,";");


var G__7486 = seq__7470_7478;
var G__7487 = chunk__7471_7479;
var G__7488 = count__7472_7480;
var G__7489 = (i__7473_7481 + (1));
seq__7470_7478 = G__7486;
chunk__7471_7479 = G__7487;
count__7472_7480 = G__7488;
i__7473_7481 = G__7489;
continue;
} else {
var temp__5735__auto___7490 = cljs.core.seq.call(null,seq__7470_7478);
if(temp__5735__auto___7490){
var seq__7470_7491__$1 = temp__5735__auto___7490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7470_7491__$1)){
var c__4461__auto___7492 = cljs.core.chunk_first.call(null,seq__7470_7491__$1);
var G__7493 = cljs.core.chunk_rest.call(null,seq__7470_7491__$1);
var G__7494 = c__4461__auto___7492;
var G__7495 = cljs.core.count.call(null,c__4461__auto___7492);
var G__7496 = (0);
seq__7470_7478 = G__7493;
chunk__7471_7479 = G__7494;
count__7472_7480 = G__7495;
i__7473_7481 = G__7496;
continue;
} else {
var map__7476_7497 = cljs.core.first.call(null,seq__7470_7491__$1);
var map__7476_7498__$1 = (((((!((map__7476_7497 == null))))?(((((map__7476_7497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7476_7497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7476_7497):map__7476_7497);
var binding_7499 = map__7476_7498__$1;
var init_7500 = cljs.core.get.call(null,map__7476_7498__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_7499)," = ",init_7500,";");


var G__7501 = cljs.core.next.call(null,seq__7470_7491__$1);
var G__7502 = null;
var G__7503 = (0);
var G__7504 = (0);
seq__7470_7478 = G__7501;
chunk__7471_7479 = G__7502;
count__7472_7480 = G__7503;
i__7473_7481 = G__7504;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__7507){
var map__7508 = p__7507;
var map__7508__$1 = (((((!((map__7508 == null))))?(((((map__7508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7508):map__7508);
var expr = map__7508__$1;
var f = cljs.core.get.call(null,map__7508__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__7508__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__7508__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__7510 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7508,map__7508__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7508,map__7508__$1,expr,f,args,env){
return (function (p1__7505_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__7505_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7508,map__7508__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7508,map__7508__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7508,map__7508__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7508,map__7508__$1,expr,f,args,env){
return (function (p1__7506_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__7506_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7508,map__7508__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7508,map__7508__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__7510,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__7510,(1),null);
var env__5496__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_7513 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_7513,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_7514 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_7514,args)),(((mfa_7514 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_7514,args)),"], 0))");
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
var fprop_7515 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_7515," ? ",f__$1,fprop_7515,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_7515," ? ",f__$1,fprop_7515,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__7516){
var map__7517 = p__7516;
var map__7517__$1 = (((((!((map__7517 == null))))?(((((map__7517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7517):map__7517);
var ctor = cljs.core.get.call(null,map__7517__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__7517__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__7517__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5496__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__7519){
var map__7520 = p__7519;
var map__7520__$1 = (((((!((map__7520 == null))))?(((((map__7520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7520):map__7520);
var target = cljs.core.get.call(null,map__7520__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__7520__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__7520__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5496__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
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
var map__7522 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__7522__$1 = (((((!((map__7522 == null))))?(((((map__7522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7522):map__7522);
var options = cljs.core.get.call(null,map__7522__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__7522__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__7523 = options;
var map__7523__$1 = (((((!((map__7523 == null))))?(((((map__7523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7523):map__7523);
var target = cljs.core.get.call(null,map__7523__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__7523__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__7524 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__7529 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__7529__$1 = (((((!((map__7529 == null))))?(((((map__7529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7529):map__7529);
var node_libs = cljs.core.get.call(null,map__7529__$1,true);
var libs_to_load = cljs.core.get.call(null,map__7529__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__7524,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__7524,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__7531_7547 = cljs.core.seq.call(null,libs_to_load);
var chunk__7532_7548 = null;
var count__7533_7549 = (0);
var i__7534_7550 = (0);
while(true){
if((i__7534_7550 < count__7533_7549)){
var lib_7551 = cljs.core._nth.call(null,chunk__7532_7548,i__7534_7550);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_7551)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7551),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7551),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7551),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7551),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_7551,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7551),"');");
}

}
}
}


var G__7552 = seq__7531_7547;
var G__7553 = chunk__7532_7548;
var G__7554 = count__7533_7549;
var G__7555 = (i__7534_7550 + (1));
seq__7531_7547 = G__7552;
chunk__7532_7548 = G__7553;
count__7533_7549 = G__7554;
i__7534_7550 = G__7555;
continue;
} else {
var temp__5735__auto___7556 = cljs.core.seq.call(null,seq__7531_7547);
if(temp__5735__auto___7556){
var seq__7531_7557__$1 = temp__5735__auto___7556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7531_7557__$1)){
var c__4461__auto___7558 = cljs.core.chunk_first.call(null,seq__7531_7557__$1);
var G__7559 = cljs.core.chunk_rest.call(null,seq__7531_7557__$1);
var G__7560 = c__4461__auto___7558;
var G__7561 = cljs.core.count.call(null,c__4461__auto___7558);
var G__7562 = (0);
seq__7531_7547 = G__7559;
chunk__7532_7548 = G__7560;
count__7533_7549 = G__7561;
i__7534_7550 = G__7562;
continue;
} else {
var lib_7563 = cljs.core.first.call(null,seq__7531_7557__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_7563)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7563),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7563),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7563),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7563),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_7563,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7563),"');");
}

}
}
}


var G__7564 = cljs.core.next.call(null,seq__7531_7557__$1);
var G__7565 = null;
var G__7566 = (0);
var G__7567 = (0);
seq__7531_7547 = G__7564;
chunk__7532_7548 = G__7565;
count__7533_7549 = G__7566;
i__7534_7550 = G__7567;
continue;
}
} else {
}
}
break;
}

var seq__7535_7568 = cljs.core.seq.call(null,node_libs);
var chunk__7536_7569 = null;
var count__7537_7570 = (0);
var i__7538_7571 = (0);
while(true){
if((i__7538_7571 < count__7537_7570)){
var lib_7572 = cljs.core._nth.call(null,chunk__7536_7569,i__7538_7571);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_7572)," = require('",lib_7572,"');");


var G__7573 = seq__7535_7568;
var G__7574 = chunk__7536_7569;
var G__7575 = count__7537_7570;
var G__7576 = (i__7538_7571 + (1));
seq__7535_7568 = G__7573;
chunk__7536_7569 = G__7574;
count__7537_7570 = G__7575;
i__7538_7571 = G__7576;
continue;
} else {
var temp__5735__auto___7577 = cljs.core.seq.call(null,seq__7535_7568);
if(temp__5735__auto___7577){
var seq__7535_7578__$1 = temp__5735__auto___7577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7535_7578__$1)){
var c__4461__auto___7579 = cljs.core.chunk_first.call(null,seq__7535_7578__$1);
var G__7580 = cljs.core.chunk_rest.call(null,seq__7535_7578__$1);
var G__7581 = c__4461__auto___7579;
var G__7582 = cljs.core.count.call(null,c__4461__auto___7579);
var G__7583 = (0);
seq__7535_7568 = G__7580;
chunk__7536_7569 = G__7581;
count__7537_7570 = G__7582;
i__7538_7571 = G__7583;
continue;
} else {
var lib_7584 = cljs.core.first.call(null,seq__7535_7578__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_7584)," = require('",lib_7584,"');");


var G__7585 = cljs.core.next.call(null,seq__7535_7578__$1);
var G__7586 = null;
var G__7587 = (0);
var G__7588 = (0);
seq__7535_7568 = G__7585;
chunk__7536_7569 = G__7586;
count__7537_7570 = G__7587;
i__7538_7571 = G__7588;
continue;
}
} else {
}
}
break;
}

var seq__7539_7589 = cljs.core.seq.call(null,global_exports_libs);
var chunk__7540_7590 = null;
var count__7541_7591 = (0);
var i__7542_7592 = (0);
while(true){
if((i__7542_7592 < count__7541_7591)){
var lib_7593 = cljs.core._nth.call(null,chunk__7540_7590,i__7542_7592);
var map__7543_7594 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_7593));
var map__7543_7595__$1 = (((((!((map__7543_7594 == null))))?(((((map__7543_7594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7543_7594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7543_7594):map__7543_7594);
var global_exports_7596 = cljs.core.get.call(null,map__7543_7595__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_7596,lib_7593);


var G__7597 = seq__7539_7589;
var G__7598 = chunk__7540_7590;
var G__7599 = count__7541_7591;
var G__7600 = (i__7542_7592 + (1));
seq__7539_7589 = G__7597;
chunk__7540_7590 = G__7598;
count__7541_7591 = G__7599;
i__7542_7592 = G__7600;
continue;
} else {
var temp__5735__auto___7601 = cljs.core.seq.call(null,seq__7539_7589);
if(temp__5735__auto___7601){
var seq__7539_7602__$1 = temp__5735__auto___7601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7539_7602__$1)){
var c__4461__auto___7603 = cljs.core.chunk_first.call(null,seq__7539_7602__$1);
var G__7604 = cljs.core.chunk_rest.call(null,seq__7539_7602__$1);
var G__7605 = c__4461__auto___7603;
var G__7606 = cljs.core.count.call(null,c__4461__auto___7603);
var G__7607 = (0);
seq__7539_7589 = G__7604;
chunk__7540_7590 = G__7605;
count__7541_7591 = G__7606;
i__7542_7592 = G__7607;
continue;
} else {
var lib_7608 = cljs.core.first.call(null,seq__7539_7602__$1);
var map__7545_7609 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_7608));
var map__7545_7610__$1 = (((((!((map__7545_7609 == null))))?(((((map__7545_7609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7545_7609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7545_7609):map__7545_7609);
var global_exports_7611 = cljs.core.get.call(null,map__7545_7610__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_7611,lib_7608);


var G__7612 = cljs.core.next.call(null,seq__7539_7602__$1);
var G__7613 = null;
var G__7614 = (0);
var G__7615 = (0);
seq__7539_7589 = G__7612;
chunk__7540_7590 = G__7613;
count__7541_7591 = G__7614;
i__7542_7592 = G__7615;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__7616){
var map__7617 = p__7616;
var map__7617__$1 = (((((!((map__7617 == null))))?(((((map__7617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7617):map__7617);
var name = cljs.core.get.call(null,map__7617__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__7617__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__7617__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__7617__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__7617__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__7617__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__7617__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__7619){
var map__7620 = p__7619;
var map__7620__$1 = (((((!((map__7620 == null))))?(((((map__7620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7620):map__7620);
var name = cljs.core.get.call(null,map__7620__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__7620__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__7620__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__7620__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__7620__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__7620__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__7620__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__7622){
var map__7623 = p__7622;
var map__7623__$1 = (((((!((map__7623 == null))))?(((((map__7623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7623):map__7623);
var t = cljs.core.get.call(null,map__7623__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__7623__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__7623__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__7623__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__7623__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__7625_7643 = cljs.core.seq.call(null,protocols);
var chunk__7626_7644 = null;
var count__7627_7645 = (0);
var i__7628_7646 = (0);
while(true){
if((i__7628_7646 < count__7627_7645)){
var protocol_7647 = cljs.core._nth.call(null,chunk__7626_7644,i__7628_7646);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_7647)),"}");


var G__7648 = seq__7625_7643;
var G__7649 = chunk__7626_7644;
var G__7650 = count__7627_7645;
var G__7651 = (i__7628_7646 + (1));
seq__7625_7643 = G__7648;
chunk__7626_7644 = G__7649;
count__7627_7645 = G__7650;
i__7628_7646 = G__7651;
continue;
} else {
var temp__5735__auto___7652 = cljs.core.seq.call(null,seq__7625_7643);
if(temp__5735__auto___7652){
var seq__7625_7653__$1 = temp__5735__auto___7652;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7625_7653__$1)){
var c__4461__auto___7654 = cljs.core.chunk_first.call(null,seq__7625_7653__$1);
var G__7655 = cljs.core.chunk_rest.call(null,seq__7625_7653__$1);
var G__7656 = c__4461__auto___7654;
var G__7657 = cljs.core.count.call(null,c__4461__auto___7654);
var G__7658 = (0);
seq__7625_7643 = G__7655;
chunk__7626_7644 = G__7656;
count__7627_7645 = G__7657;
i__7628_7646 = G__7658;
continue;
} else {
var protocol_7659 = cljs.core.first.call(null,seq__7625_7653__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_7659)),"}");


var G__7660 = cljs.core.next.call(null,seq__7625_7653__$1);
var G__7661 = null;
var G__7662 = (0);
var G__7663 = (0);
seq__7625_7643 = G__7660;
chunk__7626_7644 = G__7661;
count__7627_7645 = G__7662;
i__7628_7646 = G__7663;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__7629_7664 = cljs.core.seq.call(null,fields__$1);
var chunk__7630_7665 = null;
var count__7631_7666 = (0);
var i__7632_7667 = (0);
while(true){
if((i__7632_7667 < count__7631_7666)){
var fld_7668 = cljs.core._nth.call(null,chunk__7630_7665,i__7632_7667);
cljs.compiler.emitln.call(null,"this.",fld_7668," = ",fld_7668,";");


var G__7669 = seq__7629_7664;
var G__7670 = chunk__7630_7665;
var G__7671 = count__7631_7666;
var G__7672 = (i__7632_7667 + (1));
seq__7629_7664 = G__7669;
chunk__7630_7665 = G__7670;
count__7631_7666 = G__7671;
i__7632_7667 = G__7672;
continue;
} else {
var temp__5735__auto___7673 = cljs.core.seq.call(null,seq__7629_7664);
if(temp__5735__auto___7673){
var seq__7629_7674__$1 = temp__5735__auto___7673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7629_7674__$1)){
var c__4461__auto___7675 = cljs.core.chunk_first.call(null,seq__7629_7674__$1);
var G__7676 = cljs.core.chunk_rest.call(null,seq__7629_7674__$1);
var G__7677 = c__4461__auto___7675;
var G__7678 = cljs.core.count.call(null,c__4461__auto___7675);
var G__7679 = (0);
seq__7629_7664 = G__7676;
chunk__7630_7665 = G__7677;
count__7631_7666 = G__7678;
i__7632_7667 = G__7679;
continue;
} else {
var fld_7680 = cljs.core.first.call(null,seq__7629_7674__$1);
cljs.compiler.emitln.call(null,"this.",fld_7680," = ",fld_7680,";");


var G__7681 = cljs.core.next.call(null,seq__7629_7674__$1);
var G__7682 = null;
var G__7683 = (0);
var G__7684 = (0);
seq__7629_7664 = G__7681;
chunk__7630_7665 = G__7682;
count__7631_7666 = G__7683;
i__7632_7667 = G__7684;
continue;
}
} else {
}
}
break;
}

var seq__7633_7685 = cljs.core.seq.call(null,pmasks);
var chunk__7634_7686 = null;
var count__7635_7687 = (0);
var i__7636_7688 = (0);
while(true){
if((i__7636_7688 < count__7635_7687)){
var vec__7637_7689 = cljs.core._nth.call(null,chunk__7634_7686,i__7636_7688);
var pno_7690 = cljs.core.nth.call(null,vec__7637_7689,(0),null);
var pmask_7691 = cljs.core.nth.call(null,vec__7637_7689,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_7690,"$ = ",pmask_7691,";");


var G__7692 = seq__7633_7685;
var G__7693 = chunk__7634_7686;
var G__7694 = count__7635_7687;
var G__7695 = (i__7636_7688 + (1));
seq__7633_7685 = G__7692;
chunk__7634_7686 = G__7693;
count__7635_7687 = G__7694;
i__7636_7688 = G__7695;
continue;
} else {
var temp__5735__auto___7696 = cljs.core.seq.call(null,seq__7633_7685);
if(temp__5735__auto___7696){
var seq__7633_7697__$1 = temp__5735__auto___7696;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7633_7697__$1)){
var c__4461__auto___7698 = cljs.core.chunk_first.call(null,seq__7633_7697__$1);
var G__7699 = cljs.core.chunk_rest.call(null,seq__7633_7697__$1);
var G__7700 = c__4461__auto___7698;
var G__7701 = cljs.core.count.call(null,c__4461__auto___7698);
var G__7702 = (0);
seq__7633_7685 = G__7699;
chunk__7634_7686 = G__7700;
count__7635_7687 = G__7701;
i__7636_7688 = G__7702;
continue;
} else {
var vec__7640_7703 = cljs.core.first.call(null,seq__7633_7697__$1);
var pno_7704 = cljs.core.nth.call(null,vec__7640_7703,(0),null);
var pmask_7705 = cljs.core.nth.call(null,vec__7640_7703,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_7704,"$ = ",pmask_7705,";");


var G__7706 = cljs.core.next.call(null,seq__7633_7697__$1);
var G__7707 = null;
var G__7708 = (0);
var G__7709 = (0);
seq__7633_7685 = G__7706;
chunk__7634_7686 = G__7707;
count__7635_7687 = G__7708;
i__7636_7688 = G__7709;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__7710){
var map__7711 = p__7710;
var map__7711__$1 = (((((!((map__7711 == null))))?(((((map__7711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7711):map__7711);
var t = cljs.core.get.call(null,map__7711__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__7711__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__7711__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__7711__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__7711__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__7713_7731 = cljs.core.seq.call(null,protocols);
var chunk__7714_7732 = null;
var count__7715_7733 = (0);
var i__7716_7734 = (0);
while(true){
if((i__7716_7734 < count__7715_7733)){
var protocol_7735 = cljs.core._nth.call(null,chunk__7714_7732,i__7716_7734);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_7735)),"}");


var G__7736 = seq__7713_7731;
var G__7737 = chunk__7714_7732;
var G__7738 = count__7715_7733;
var G__7739 = (i__7716_7734 + (1));
seq__7713_7731 = G__7736;
chunk__7714_7732 = G__7737;
count__7715_7733 = G__7738;
i__7716_7734 = G__7739;
continue;
} else {
var temp__5735__auto___7740 = cljs.core.seq.call(null,seq__7713_7731);
if(temp__5735__auto___7740){
var seq__7713_7741__$1 = temp__5735__auto___7740;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7713_7741__$1)){
var c__4461__auto___7742 = cljs.core.chunk_first.call(null,seq__7713_7741__$1);
var G__7743 = cljs.core.chunk_rest.call(null,seq__7713_7741__$1);
var G__7744 = c__4461__auto___7742;
var G__7745 = cljs.core.count.call(null,c__4461__auto___7742);
var G__7746 = (0);
seq__7713_7731 = G__7743;
chunk__7714_7732 = G__7744;
count__7715_7733 = G__7745;
i__7716_7734 = G__7746;
continue;
} else {
var protocol_7747 = cljs.core.first.call(null,seq__7713_7741__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_7747)),"}");


var G__7748 = cljs.core.next.call(null,seq__7713_7741__$1);
var G__7749 = null;
var G__7750 = (0);
var G__7751 = (0);
seq__7713_7731 = G__7748;
chunk__7714_7732 = G__7749;
count__7715_7733 = G__7750;
i__7716_7734 = G__7751;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__7717_7752 = cljs.core.seq.call(null,fields__$1);
var chunk__7718_7753 = null;
var count__7719_7754 = (0);
var i__7720_7755 = (0);
while(true){
if((i__7720_7755 < count__7719_7754)){
var fld_7756 = cljs.core._nth.call(null,chunk__7718_7753,i__7720_7755);
cljs.compiler.emitln.call(null,"this.",fld_7756," = ",fld_7756,";");


var G__7757 = seq__7717_7752;
var G__7758 = chunk__7718_7753;
var G__7759 = count__7719_7754;
var G__7760 = (i__7720_7755 + (1));
seq__7717_7752 = G__7757;
chunk__7718_7753 = G__7758;
count__7719_7754 = G__7759;
i__7720_7755 = G__7760;
continue;
} else {
var temp__5735__auto___7761 = cljs.core.seq.call(null,seq__7717_7752);
if(temp__5735__auto___7761){
var seq__7717_7762__$1 = temp__5735__auto___7761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7717_7762__$1)){
var c__4461__auto___7763 = cljs.core.chunk_first.call(null,seq__7717_7762__$1);
var G__7764 = cljs.core.chunk_rest.call(null,seq__7717_7762__$1);
var G__7765 = c__4461__auto___7763;
var G__7766 = cljs.core.count.call(null,c__4461__auto___7763);
var G__7767 = (0);
seq__7717_7752 = G__7764;
chunk__7718_7753 = G__7765;
count__7719_7754 = G__7766;
i__7720_7755 = G__7767;
continue;
} else {
var fld_7768 = cljs.core.first.call(null,seq__7717_7762__$1);
cljs.compiler.emitln.call(null,"this.",fld_7768," = ",fld_7768,";");


var G__7769 = cljs.core.next.call(null,seq__7717_7762__$1);
var G__7770 = null;
var G__7771 = (0);
var G__7772 = (0);
seq__7717_7752 = G__7769;
chunk__7718_7753 = G__7770;
count__7719_7754 = G__7771;
i__7720_7755 = G__7772;
continue;
}
} else {
}
}
break;
}

var seq__7721_7773 = cljs.core.seq.call(null,pmasks);
var chunk__7722_7774 = null;
var count__7723_7775 = (0);
var i__7724_7776 = (0);
while(true){
if((i__7724_7776 < count__7723_7775)){
var vec__7725_7777 = cljs.core._nth.call(null,chunk__7722_7774,i__7724_7776);
var pno_7778 = cljs.core.nth.call(null,vec__7725_7777,(0),null);
var pmask_7779 = cljs.core.nth.call(null,vec__7725_7777,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_7778,"$ = ",pmask_7779,";");


var G__7780 = seq__7721_7773;
var G__7781 = chunk__7722_7774;
var G__7782 = count__7723_7775;
var G__7783 = (i__7724_7776 + (1));
seq__7721_7773 = G__7780;
chunk__7722_7774 = G__7781;
count__7723_7775 = G__7782;
i__7724_7776 = G__7783;
continue;
} else {
var temp__5735__auto___7784 = cljs.core.seq.call(null,seq__7721_7773);
if(temp__5735__auto___7784){
var seq__7721_7785__$1 = temp__5735__auto___7784;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7721_7785__$1)){
var c__4461__auto___7786 = cljs.core.chunk_first.call(null,seq__7721_7785__$1);
var G__7787 = cljs.core.chunk_rest.call(null,seq__7721_7785__$1);
var G__7788 = c__4461__auto___7786;
var G__7789 = cljs.core.count.call(null,c__4461__auto___7786);
var G__7790 = (0);
seq__7721_7773 = G__7787;
chunk__7722_7774 = G__7788;
count__7723_7775 = G__7789;
i__7724_7776 = G__7790;
continue;
} else {
var vec__7728_7791 = cljs.core.first.call(null,seq__7721_7785__$1);
var pno_7792 = cljs.core.nth.call(null,vec__7728_7791,(0),null);
var pmask_7793 = cljs.core.nth.call(null,vec__7728_7791,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_7792,"$ = ",pmask_7793,";");


var G__7794 = cljs.core.next.call(null,seq__7721_7785__$1);
var G__7795 = null;
var G__7796 = (0);
var G__7797 = (0);
seq__7721_7773 = G__7794;
chunk__7722_7774 = G__7795;
count__7723_7775 = G__7796;
i__7724_7776 = G__7797;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__7798){
var map__7799 = p__7798;
var map__7799__$1 = (((((!((map__7799 == null))))?(((((map__7799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7799):map__7799);
var target = cljs.core.get.call(null,map__7799__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__7799__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__7799__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__7799__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__7799__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5496__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__7801){
var map__7802 = p__7801;
var map__7802__$1 = (((((!((map__7802 == null))))?(((((map__7802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7802):map__7802);
var op = cljs.core.get.call(null,map__7802__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__7802__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__7802__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__7802__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__7802__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4036__auto__ = code;
if(cljs.core.truth_(and__4036__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4036__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__5496__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5496__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__7808 = cljs.core.seq.call(null,table);
var chunk__7809 = null;
var count__7810 = (0);
var i__7811 = (0);
while(true){
if((i__7811 < count__7810)){
var vec__7812 = cljs.core._nth.call(null,chunk__7809,i__7811);
var sym = cljs.core.nth.call(null,vec__7812,(0),null);
var value = cljs.core.nth.call(null,vec__7812,(1),null);
var ns_7818 = cljs.core.namespace.call(null,sym);
var name_7819 = cljs.core.name.call(null,sym);
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


var G__7820 = seq__7808;
var G__7821 = chunk__7809;
var G__7822 = count__7810;
var G__7823 = (i__7811 + (1));
seq__7808 = G__7820;
chunk__7809 = G__7821;
count__7810 = G__7822;
i__7811 = G__7823;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__7808);
if(temp__5735__auto__){
var seq__7808__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7808__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__7808__$1);
var G__7824 = cljs.core.chunk_rest.call(null,seq__7808__$1);
var G__7825 = c__4461__auto__;
var G__7826 = cljs.core.count.call(null,c__4461__auto__);
var G__7827 = (0);
seq__7808 = G__7824;
chunk__7809 = G__7825;
count__7810 = G__7826;
i__7811 = G__7827;
continue;
} else {
var vec__7815 = cljs.core.first.call(null,seq__7808__$1);
var sym = cljs.core.nth.call(null,vec__7815,(0),null);
var value = cljs.core.nth.call(null,vec__7815,(1),null);
var ns_7828 = cljs.core.namespace.call(null,sym);
var name_7829 = cljs.core.name.call(null,sym);
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


var G__7830 = cljs.core.next.call(null,seq__7808__$1);
var G__7831 = null;
var G__7832 = (0);
var G__7833 = (0);
seq__7808 = G__7830;
chunk__7809 = G__7831;
count__7810 = G__7832;
i__7811 = G__7833;
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
var G__7835 = arguments.length;
switch (G__7835) {
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
var k_7840 = cljs.core.first.call(null,ks);
var vec__7836_7841 = cljs.core.conj.call(null,prefix,k_7840);
var top_7842 = cljs.core.nth.call(null,vec__7836_7841,(0),null);
var prefix_SINGLEQUOTE__7843 = vec__7836_7841;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_7840)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__7843) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_7842)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_7842)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__7843)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_7842);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__7843)),";");
}
} else {
}

var m_7844 = cljs.core.get.call(null,externs,k_7840);
if(cljs.core.empty_QMARK_.call(null,m_7844)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__7843,m_7844,top_level,known_externs);
}

var G__7845 = cljs.core.next.call(null,ks);
ks = G__7845;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
