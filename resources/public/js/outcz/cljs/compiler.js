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
var map__6671 = s;
var map__6671__$1 = (((((!((map__6671 == null))))?(((((map__6671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6671):map__6671);
var name = cljs.core.get.call(null,map__6671__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__6671__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__6674 = info;
var map__6675 = G__6674;
var map__6675__$1 = (((((!((map__6675 == null))))?(((((map__6675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6675):map__6675);
var shadow = cljs.core.get.call(null,map__6675__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__6674__$1 = G__6674;
while(true){
var d__$2 = d__$1;
var map__6677 = G__6674__$1;
var map__6677__$1 = (((((!((map__6677 == null))))?(((((map__6677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6677):map__6677);
var shadow__$1 = cljs.core.get.call(null,map__6677__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__6679 = (d__$2 + (1));
var G__6680 = shadow__$1;
d__$1 = G__6679;
G__6674__$1 = G__6680;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__6681){
var map__6682 = p__6681;
var map__6682__$1 = (((((!((map__6682 == null))))?(((((map__6682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6682):map__6682);
var name_var = map__6682__$1;
var name = cljs.core.get.call(null,map__6682__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__6682__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__6684 = info;
var map__6684__$1 = (((((!((map__6684 == null))))?(((((map__6684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6684):map__6684);
var ns = cljs.core.get.call(null,map__6684__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__6684__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__6687 = arguments.length;
switch (G__6687) {
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
var G__6689 = cp;
switch (G__6689) {
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
var seq__6691_6695 = cljs.core.seq.call(null,s);
var chunk__6692_6696 = null;
var count__6693_6697 = (0);
var i__6694_6698 = (0);
while(true){
if((i__6694_6698 < count__6693_6697)){
var c_6699 = cljs.core._nth.call(null,chunk__6692_6696,i__6694_6698);
sb.append(cljs.compiler.escape_char.call(null,c_6699));


var G__6700 = seq__6691_6695;
var G__6701 = chunk__6692_6696;
var G__6702 = count__6693_6697;
var G__6703 = (i__6694_6698 + (1));
seq__6691_6695 = G__6700;
chunk__6692_6696 = G__6701;
count__6693_6697 = G__6702;
i__6694_6698 = G__6703;
continue;
} else {
var temp__5735__auto___6704 = cljs.core.seq.call(null,seq__6691_6695);
if(temp__5735__auto___6704){
var seq__6691_6705__$1 = temp__5735__auto___6704;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6691_6705__$1)){
var c__4461__auto___6706 = cljs.core.chunk_first.call(null,seq__6691_6705__$1);
var G__6707 = cljs.core.chunk_rest.call(null,seq__6691_6705__$1);
var G__6708 = c__4461__auto___6706;
var G__6709 = cljs.core.count.call(null,c__4461__auto___6706);
var G__6710 = (0);
seq__6691_6695 = G__6707;
chunk__6692_6696 = G__6708;
count__6693_6697 = G__6709;
i__6694_6698 = G__6710;
continue;
} else {
var c_6711 = cljs.core.first.call(null,seq__6691_6705__$1);
sb.append(cljs.compiler.escape_char.call(null,c_6711));


var G__6712 = cljs.core.next.call(null,seq__6691_6705__$1);
var G__6713 = null;
var G__6714 = (0);
var G__6715 = (0);
seq__6691_6695 = G__6712;
chunk__6692_6696 = G__6713;
count__6693_6697 = G__6714;
i__6694_6698 = G__6715;
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
var map__6716_6721 = ast;
var map__6716_6722__$1 = (((((!((map__6716_6721 == null))))?(((((map__6716_6721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6716_6721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6716_6721):map__6716_6721);
var env_6723 = cljs.core.get.call(null,map__6716_6722__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_6723))){
var map__6718_6724 = env_6723;
var map__6718_6725__$1 = (((((!((map__6718_6724 == null))))?(((((map__6718_6724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6718_6724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6718_6724):map__6718_6724);
var line_6726 = cljs.core.get.call(null,map__6718_6725__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_6727 = cljs.core.get.call(null,map__6718_6725__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__6718_6724,map__6718_6725__$1,line_6726,column_6727,map__6716_6721,map__6716_6722__$1,env_6723){
return (function (m){
var minfo = (function (){var G__6720 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__6720,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__6720;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_6726 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__6718_6724,map__6718_6725__$1,line_6726,column_6727,map__6716_6721,map__6716_6722__$1,env_6723){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_6727)?(column_6727 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__6718_6724,map__6718_6725__$1,line_6726,column_6727,map__6716_6721,map__6716_6722__$1,env_6723){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__6718_6724,map__6718_6725__$1,line_6726,column_6727,map__6716_6721,map__6716_6722__$1,env_6723))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__6718_6724,map__6718_6725__$1,line_6726,column_6727,map__6716_6721,map__6716_6722__$1,env_6723))
,cljs.core.sorted_map.call(null)));
});})(map__6718_6724,map__6718_6725__$1,line_6726,column_6727,map__6716_6721,map__6716_6722__$1,env_6723))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__6736 = arguments.length;
switch (G__6736) {
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
var len__4641__auto___6743 = arguments.length;
var i__4642__auto___6744 = (0);
while(true){
if((i__4642__auto___6744 < len__4641__auto___6743)){
args_arr__4662__auto__.push((arguments[i__4642__auto___6744]));

var G__6745 = (i__4642__auto___6744 + (1));
i__4642__auto___6744 = G__6745;
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
var s_6746 = (function (){var G__6737 = a;
if((!(typeof a === 'string'))){
return G__6737.toString();
} else {
return G__6737;
}
})();
var temp__5739__auto___6747 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___6747 == null)){
} else {
var sm_data_6748 = temp__5739__auto___6747;
cljs.core.swap_BANG_.call(null,sm_data_6748,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_6748,temp__5739__auto___6747,s_6746){
return (function (p1__6728_SHARP_){
return (p1__6728_SHARP_ + s_6746.length);
});})(sm_data_6748,temp__5739__auto___6747,s_6746))
);
}

cljs.core.print.call(null,s_6746);

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

var seq__6738 = cljs.core.seq.call(null,xs);
var chunk__6739 = null;
var count__6740 = (0);
var i__6741 = (0);
while(true){
if((i__6741 < count__6740)){
var x = cljs.core._nth.call(null,chunk__6739,i__6741);
cljs.compiler.emits.call(null,x);


var G__6749 = seq__6738;
var G__6750 = chunk__6739;
var G__6751 = count__6740;
var G__6752 = (i__6741 + (1));
seq__6738 = G__6749;
chunk__6739 = G__6750;
count__6740 = G__6751;
i__6741 = G__6752;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__6738);
if(temp__5735__auto__){
var seq__6738__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6738__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__6738__$1);
var G__6753 = cljs.core.chunk_rest.call(null,seq__6738__$1);
var G__6754 = c__4461__auto__;
var G__6755 = cljs.core.count.call(null,c__4461__auto__);
var G__6756 = (0);
seq__6738 = G__6753;
chunk__6739 = G__6754;
count__6740 = G__6755;
i__6741 = G__6756;
continue;
} else {
var x = cljs.core.first.call(null,seq__6738__$1);
cljs.compiler.emits.call(null,x);


var G__6757 = cljs.core.next.call(null,seq__6738__$1);
var G__6758 = null;
var G__6759 = (0);
var G__6760 = (0);
seq__6738 = G__6757;
chunk__6739 = G__6758;
count__6740 = G__6759;
i__6741 = G__6760;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq6730){
var G__6731 = cljs.core.first.call(null,seq6730);
var seq6730__$1 = cljs.core.next.call(null,seq6730);
var G__6732 = cljs.core.first.call(null,seq6730__$1);
var seq6730__$2 = cljs.core.next.call(null,seq6730__$1);
var G__6733 = cljs.core.first.call(null,seq6730__$2);
var seq6730__$3 = cljs.core.next.call(null,seq6730__$2);
var G__6734 = cljs.core.first.call(null,seq6730__$3);
var seq6730__$4 = cljs.core.next.call(null,seq6730__$3);
var G__6735 = cljs.core.first.call(null,seq6730__$4);
var seq6730__$5 = cljs.core.next.call(null,seq6730__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6731,G__6732,G__6733,G__6734,G__6735,seq6730__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__6761){
var map__6762 = p__6761;
var map__6762__$1 = (((((!((map__6762 == null))))?(((((map__6762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6762):map__6762);
var m = map__6762__$1;
var gen_line = cljs.core.get.call(null,map__6762__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__6771 = arguments.length;
switch (G__6771) {
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
var len__4641__auto___6777 = arguments.length;
var i__4642__auto___6778 = (0);
while(true){
if((i__4642__auto___6778 < len__4641__auto___6777)){
args_arr__4662__auto__.push((arguments[i__4642__auto___6778]));

var G__6779 = (i__4642__auto___6778 + (1));
i__4642__auto___6778 = G__6779;
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

var seq__6772_6780 = cljs.core.seq.call(null,xs);
var chunk__6773_6781 = null;
var count__6774_6782 = (0);
var i__6775_6783 = (0);
while(true){
if((i__6775_6783 < count__6774_6782)){
var x_6784 = cljs.core._nth.call(null,chunk__6773_6781,i__6775_6783);
cljs.compiler.emits.call(null,x_6784);


var G__6785 = seq__6772_6780;
var G__6786 = chunk__6773_6781;
var G__6787 = count__6774_6782;
var G__6788 = (i__6775_6783 + (1));
seq__6772_6780 = G__6785;
chunk__6773_6781 = G__6786;
count__6774_6782 = G__6787;
i__6775_6783 = G__6788;
continue;
} else {
var temp__5735__auto___6789 = cljs.core.seq.call(null,seq__6772_6780);
if(temp__5735__auto___6789){
var seq__6772_6790__$1 = temp__5735__auto___6789;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6772_6790__$1)){
var c__4461__auto___6791 = cljs.core.chunk_first.call(null,seq__6772_6790__$1);
var G__6792 = cljs.core.chunk_rest.call(null,seq__6772_6790__$1);
var G__6793 = c__4461__auto___6791;
var G__6794 = cljs.core.count.call(null,c__4461__auto___6791);
var G__6795 = (0);
seq__6772_6780 = G__6792;
chunk__6773_6781 = G__6793;
count__6774_6782 = G__6794;
i__6775_6783 = G__6795;
continue;
} else {
var x_6796 = cljs.core.first.call(null,seq__6772_6790__$1);
cljs.compiler.emits.call(null,x_6796);


var G__6797 = cljs.core.next.call(null,seq__6772_6790__$1);
var G__6798 = null;
var G__6799 = (0);
var G__6800 = (0);
seq__6772_6780 = G__6797;
chunk__6773_6781 = G__6798;
count__6774_6782 = G__6799;
i__6775_6783 = G__6800;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq6765){
var G__6766 = cljs.core.first.call(null,seq6765);
var seq6765__$1 = cljs.core.next.call(null,seq6765);
var G__6767 = cljs.core.first.call(null,seq6765__$1);
var seq6765__$2 = cljs.core.next.call(null,seq6765__$1);
var G__6768 = cljs.core.first.call(null,seq6765__$2);
var seq6765__$3 = cljs.core.next.call(null,seq6765__$2);
var G__6769 = cljs.core.first.call(null,seq6765__$3);
var seq6765__$4 = cljs.core.next.call(null,seq6765__$3);
var G__6770 = cljs.core.first.call(null,seq6765__$4);
var seq6765__$5 = cljs.core.next.call(null,seq6765__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6766,G__6767,G__6768,G__6769,G__6770,seq6765__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__6801_6805 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__6802_6806 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__6803_6807 = true;
var _STAR_print_fn_STAR__temp_val__6804_6808 = ((function (_STAR_print_newline_STAR__orig_val__6801_6805,_STAR_print_fn_STAR__orig_val__6802_6806,_STAR_print_newline_STAR__temp_val__6803_6807,sb__4572__auto__){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__6801_6805,_STAR_print_fn_STAR__orig_val__6802_6806,_STAR_print_newline_STAR__temp_val__6803_6807,sb__4572__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__6803_6807;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__6804_6808;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__6802_6806;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__6801_6805;
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
var vec__6809 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__6809,(0),null);
var name = cljs.core.nth.call(null,vec__6809,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__6809,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__6809,ns,name))
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
var vec__6812 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__6812,(0),null);
var flags = cljs.core.nth.call(null,vec__6812,(1),null);
var pattern = cljs.core.nth.call(null,vec__6812,(2),null);
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
return (function (p1__6815_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__6815_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__6817){
var map__6818 = p__6817;
var map__6818__$1 = (((((!((map__6818 == null))))?(((((map__6818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6818):map__6818);
var ast = map__6818__$1;
var info = cljs.core.get.call(null,map__6818__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__6818__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__6818__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__6820 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__6820__$1 = (((((!((map__6820 == null))))?(((((map__6820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6820):map__6820);
var cenv = map__6820__$1;
var options = cljs.core.get.call(null,map__6820__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__6822 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4036__auto__;
}
})())){
return clojure.set.difference.call(null,G__6822,cljs.analyzer.es5_allowed);
} else {
return G__6822;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4047__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__6823 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__6823,reserved);
} else {
return G__6823;
}
})();
var env__5491__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__6824_6825 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__6824_6826__$1 = (((G__6824_6825 instanceof cljs.core.Keyword))?G__6824_6825.fqn:null);
switch (G__6824_6826__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__6828){
var map__6829 = p__6828;
var map__6829__$1 = (((((!((map__6829 == null))))?(((((map__6829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6829):map__6829);
var arg = map__6829__$1;
var env = cljs.core.get.call(null,map__6829__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__6829__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__6829__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__6829__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__6831 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__6831__$1 = (((((!((map__6831 == null))))?(((((map__6831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6831):map__6831);
var name = cljs.core.get.call(null,map__6831__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__5491__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__6833){
var map__6834 = p__6833;
var map__6834__$1 = (((((!((map__6834 == null))))?(((((map__6834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6834):map__6834);
var expr = cljs.core.get.call(null,map__6834__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__6834__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__6834__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5491__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__6836_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__6836_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__6837){
var map__6838 = p__6837;
var map__6838__$1 = (((((!((map__6838 == null))))?(((((map__6838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6838):map__6838);
var env = cljs.core.get.call(null,map__6838__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__6838__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__6838__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__5491__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__6840){
var map__6841 = p__6840;
var map__6841__$1 = (((((!((map__6841 == null))))?(((((map__6841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6841):map__6841);
var items = cljs.core.get.call(null,map__6841__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__6841__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5491__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__6843_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__6843_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__6844){
var map__6845 = p__6844;
var map__6845__$1 = (((((!((map__6845 == null))))?(((((map__6845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6845):map__6845);
var items = cljs.core.get.call(null,map__6845__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__6845__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5491__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5735__auto___6863 = cljs.core.seq.call(null,items);
if(temp__5735__auto___6863){
var items_6864__$1 = temp__5735__auto___6863;
var vec__6847_6865 = items_6864__$1;
var seq__6848_6866 = cljs.core.seq.call(null,vec__6847_6865);
var first__6849_6867 = cljs.core.first.call(null,seq__6848_6866);
var seq__6848_6868__$1 = cljs.core.next.call(null,seq__6848_6866);
var vec__6850_6869 = first__6849_6867;
var k_6870 = cljs.core.nth.call(null,vec__6850_6869,(0),null);
var v_6871 = cljs.core.nth.call(null,vec__6850_6869,(1),null);
var r_6872 = seq__6848_6868__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_6870),"\": ",emit_js_object_val.call(null,v_6871));

var seq__6853_6873 = cljs.core.seq.call(null,r_6872);
var chunk__6854_6874 = null;
var count__6855_6875 = (0);
var i__6856_6876 = (0);
while(true){
if((i__6856_6876 < count__6855_6875)){
var vec__6857_6877 = cljs.core._nth.call(null,chunk__6854_6874,i__6856_6876);
var k_6878__$1 = cljs.core.nth.call(null,vec__6857_6877,(0),null);
var v_6879__$1 = cljs.core.nth.call(null,vec__6857_6877,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_6878__$1),"\": ",emit_js_object_val.call(null,v_6879__$1));


var G__6880 = seq__6853_6873;
var G__6881 = chunk__6854_6874;
var G__6882 = count__6855_6875;
var G__6883 = (i__6856_6876 + (1));
seq__6853_6873 = G__6880;
chunk__6854_6874 = G__6881;
count__6855_6875 = G__6882;
i__6856_6876 = G__6883;
continue;
} else {
var temp__5735__auto___6884__$1 = cljs.core.seq.call(null,seq__6853_6873);
if(temp__5735__auto___6884__$1){
var seq__6853_6885__$1 = temp__5735__auto___6884__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6853_6885__$1)){
var c__4461__auto___6886 = cljs.core.chunk_first.call(null,seq__6853_6885__$1);
var G__6887 = cljs.core.chunk_rest.call(null,seq__6853_6885__$1);
var G__6888 = c__4461__auto___6886;
var G__6889 = cljs.core.count.call(null,c__4461__auto___6886);
var G__6890 = (0);
seq__6853_6873 = G__6887;
chunk__6854_6874 = G__6888;
count__6855_6875 = G__6889;
i__6856_6876 = G__6890;
continue;
} else {
var vec__6860_6891 = cljs.core.first.call(null,seq__6853_6885__$1);
var k_6892__$1 = cljs.core.nth.call(null,vec__6860_6891,(0),null);
var v_6893__$1 = cljs.core.nth.call(null,vec__6860_6891,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_6892__$1),"\": ",emit_js_object_val.call(null,v_6893__$1));


var G__6894 = cljs.core.next.call(null,seq__6853_6885__$1);
var G__6895 = null;
var G__6896 = (0);
var G__6897 = (0);
seq__6853_6873 = G__6894;
chunk__6854_6874 = G__6895;
count__6855_6875 = G__6896;
i__6856_6876 = G__6897;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__6898){
var map__6899 = p__6898;
var map__6899__$1 = (((((!((map__6899 == null))))?(((((map__6899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6899):map__6899);
var keys = cljs.core.get.call(null,map__6899__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__6899__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__6899__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5491__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__6901){
var map__6902 = p__6901;
var map__6902__$1 = (((((!((map__6902 == null))))?(((((map__6902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6902):map__6902);
var items = cljs.core.get.call(null,map__6902__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__6902__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5491__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__6904){
var map__6905 = p__6904;
var map__6905__$1 = (((((!((map__6905 == null))))?(((((map__6905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6905):map__6905);
var expr = cljs.core.get.call(null,map__6905__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__6907){
var map__6908 = p__6907;
var map__6908__$1 = (((((!((map__6908 == null))))?(((((map__6908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6908):map__6908);
var form = cljs.core.get.call(null,map__6908__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__6908__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__5491__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__6910 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__6910__$1 = (((((!((map__6910 == null))))?(((((map__6910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6910):map__6910);
var op = cljs.core.get.call(null,map__6910__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__6910__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__6910__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__6912 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__6912__$1 = (((((!((map__6912 == null))))?(((((map__6912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6912):map__6912);
var op = cljs.core.get.call(null,map__6912__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__6912__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__6912__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__6914){
var map__6915 = p__6914;
var map__6915__$1 = (((((!((map__6915 == null))))?(((((map__6915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6915):map__6915);
var test = cljs.core.get.call(null,map__6915__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__6915__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__6915__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__6915__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__6915__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__6917){
var map__6918 = p__6917;
var map__6918__$1 = (((((!((map__6918 == null))))?(((((map__6918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6918):map__6918);
var v = cljs.core.get.call(null,map__6918__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__6918__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__6918__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__6918__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__6920_6940 = cljs.core.seq.call(null,nodes);
var chunk__6921_6941 = null;
var count__6922_6942 = (0);
var i__6923_6943 = (0);
while(true){
if((i__6923_6943 < count__6922_6942)){
var map__6924_6944 = cljs.core._nth.call(null,chunk__6921_6941,i__6923_6943);
var map__6924_6945__$1 = (((((!((map__6924_6944 == null))))?(((((map__6924_6944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6924_6944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6924_6944):map__6924_6944);
var ts_6946 = cljs.core.get.call(null,map__6924_6945__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__6925_6947 = cljs.core.get.call(null,map__6924_6945__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__6925_6948__$1 = (((((!((map__6925_6947 == null))))?(((((map__6925_6947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6925_6947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6925_6947):map__6925_6947);
var then_6949 = cljs.core.get.call(null,map__6925_6948__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__6928_6950 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_6946));
var chunk__6929_6951 = null;
var count__6930_6952 = (0);
var i__6931_6953 = (0);
while(true){
if((i__6931_6953 < count__6930_6952)){
var test_6954 = cljs.core._nth.call(null,chunk__6929_6951,i__6931_6953);
cljs.compiler.emitln.call(null,"case ",test_6954,":");


var G__6955 = seq__6928_6950;
var G__6956 = chunk__6929_6951;
var G__6957 = count__6930_6952;
var G__6958 = (i__6931_6953 + (1));
seq__6928_6950 = G__6955;
chunk__6929_6951 = G__6956;
count__6930_6952 = G__6957;
i__6931_6953 = G__6958;
continue;
} else {
var temp__5735__auto___6959 = cljs.core.seq.call(null,seq__6928_6950);
if(temp__5735__auto___6959){
var seq__6928_6960__$1 = temp__5735__auto___6959;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6928_6960__$1)){
var c__4461__auto___6961 = cljs.core.chunk_first.call(null,seq__6928_6960__$1);
var G__6962 = cljs.core.chunk_rest.call(null,seq__6928_6960__$1);
var G__6963 = c__4461__auto___6961;
var G__6964 = cljs.core.count.call(null,c__4461__auto___6961);
var G__6965 = (0);
seq__6928_6950 = G__6962;
chunk__6929_6951 = G__6963;
count__6930_6952 = G__6964;
i__6931_6953 = G__6965;
continue;
} else {
var test_6966 = cljs.core.first.call(null,seq__6928_6960__$1);
cljs.compiler.emitln.call(null,"case ",test_6966,":");


var G__6967 = cljs.core.next.call(null,seq__6928_6960__$1);
var G__6968 = null;
var G__6969 = (0);
var G__6970 = (0);
seq__6928_6950 = G__6967;
chunk__6929_6951 = G__6968;
count__6930_6952 = G__6969;
i__6931_6953 = G__6970;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_6949);
} else {
cljs.compiler.emitln.call(null,then_6949);
}

cljs.compiler.emitln.call(null,"break;");


var G__6971 = seq__6920_6940;
var G__6972 = chunk__6921_6941;
var G__6973 = count__6922_6942;
var G__6974 = (i__6923_6943 + (1));
seq__6920_6940 = G__6971;
chunk__6921_6941 = G__6972;
count__6922_6942 = G__6973;
i__6923_6943 = G__6974;
continue;
} else {
var temp__5735__auto___6975 = cljs.core.seq.call(null,seq__6920_6940);
if(temp__5735__auto___6975){
var seq__6920_6976__$1 = temp__5735__auto___6975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6920_6976__$1)){
var c__4461__auto___6977 = cljs.core.chunk_first.call(null,seq__6920_6976__$1);
var G__6978 = cljs.core.chunk_rest.call(null,seq__6920_6976__$1);
var G__6979 = c__4461__auto___6977;
var G__6980 = cljs.core.count.call(null,c__4461__auto___6977);
var G__6981 = (0);
seq__6920_6940 = G__6978;
chunk__6921_6941 = G__6979;
count__6922_6942 = G__6980;
i__6923_6943 = G__6981;
continue;
} else {
var map__6932_6982 = cljs.core.first.call(null,seq__6920_6976__$1);
var map__6932_6983__$1 = (((((!((map__6932_6982 == null))))?(((((map__6932_6982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6932_6982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6932_6982):map__6932_6982);
var ts_6984 = cljs.core.get.call(null,map__6932_6983__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__6933_6985 = cljs.core.get.call(null,map__6932_6983__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__6933_6986__$1 = (((((!((map__6933_6985 == null))))?(((((map__6933_6985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6933_6985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6933_6985):map__6933_6985);
var then_6987 = cljs.core.get.call(null,map__6933_6986__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__6936_6988 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_6984));
var chunk__6937_6989 = null;
var count__6938_6990 = (0);
var i__6939_6991 = (0);
while(true){
if((i__6939_6991 < count__6938_6990)){
var test_6992 = cljs.core._nth.call(null,chunk__6937_6989,i__6939_6991);
cljs.compiler.emitln.call(null,"case ",test_6992,":");


var G__6993 = seq__6936_6988;
var G__6994 = chunk__6937_6989;
var G__6995 = count__6938_6990;
var G__6996 = (i__6939_6991 + (1));
seq__6936_6988 = G__6993;
chunk__6937_6989 = G__6994;
count__6938_6990 = G__6995;
i__6939_6991 = G__6996;
continue;
} else {
var temp__5735__auto___6997__$1 = cljs.core.seq.call(null,seq__6936_6988);
if(temp__5735__auto___6997__$1){
var seq__6936_6998__$1 = temp__5735__auto___6997__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6936_6998__$1)){
var c__4461__auto___6999 = cljs.core.chunk_first.call(null,seq__6936_6998__$1);
var G__7000 = cljs.core.chunk_rest.call(null,seq__6936_6998__$1);
var G__7001 = c__4461__auto___6999;
var G__7002 = cljs.core.count.call(null,c__4461__auto___6999);
var G__7003 = (0);
seq__6936_6988 = G__7000;
chunk__6937_6989 = G__7001;
count__6938_6990 = G__7002;
i__6939_6991 = G__7003;
continue;
} else {
var test_7004 = cljs.core.first.call(null,seq__6936_6998__$1);
cljs.compiler.emitln.call(null,"case ",test_7004,":");


var G__7005 = cljs.core.next.call(null,seq__6936_6998__$1);
var G__7006 = null;
var G__7007 = (0);
var G__7008 = (0);
seq__6936_6988 = G__7005;
chunk__6937_6989 = G__7006;
count__6938_6990 = G__7007;
i__6939_6991 = G__7008;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_6987);
} else {
cljs.compiler.emitln.call(null,then_6987);
}

cljs.compiler.emitln.call(null,"break;");


var G__7009 = cljs.core.next.call(null,seq__6920_6976__$1);
var G__7010 = null;
var G__7011 = (0);
var G__7012 = (0);
seq__6920_6940 = G__7009;
chunk__6921_6941 = G__7010;
count__6922_6942 = G__7011;
i__6923_6943 = G__7012;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__7013){
var map__7014 = p__7013;
var map__7014__$1 = (((((!((map__7014 == null))))?(((((map__7014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7014):map__7014);
var throw$ = cljs.core.get.call(null,map__7014__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__7014__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__7017 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__7017,(0),null);
var rstr = cljs.core.nth.call(null,vec__7017,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__7017,fstr,rstr,ret_t,axstr){
return (function (p1__7016_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__7016_SHARP_);
});})(idx,vec__7017,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__7020 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7020),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__7020;
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
return (function (p1__7021_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__7021_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__7022 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__7023 = cljs.core.seq.call(null,vec__7022);
var first__7024 = cljs.core.first.call(null,seq__7023);
var seq__7023__$1 = cljs.core.next.call(null,seq__7023);
var p = first__7024;
var first__7024__$1 = cljs.core.first.call(null,seq__7023__$1);
var seq__7023__$2 = cljs.core.next.call(null,seq__7023__$1);
var ts = first__7024__$1;
var first__7024__$2 = cljs.core.first.call(null,seq__7023__$2);
var seq__7023__$3 = cljs.core.next.call(null,seq__7023__$2);
var n = first__7024__$2;
var xs = seq__7023__$3;
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
var vec__7025 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__7026 = cljs.core.seq.call(null,vec__7025);
var first__7027 = cljs.core.first.call(null,seq__7026);
var seq__7026__$1 = cljs.core.next.call(null,seq__7026);
var p = first__7027;
var first__7027__$1 = cljs.core.first.call(null,seq__7026__$1);
var seq__7026__$2 = cljs.core.next.call(null,seq__7026__$1);
var ts = first__7027__$1;
var xs = seq__7026__$2;
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
var G__7030 = arguments.length;
switch (G__7030) {
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
var vec__7038 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__7028_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__7028_SHARP_);
} else {
return p1__7028_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__7039 = cljs.core.seq.call(null,vec__7038);
var first__7040 = cljs.core.first.call(null,seq__7039);
var seq__7039__$1 = cljs.core.next.call(null,seq__7039);
var x = first__7040;
var ys = seq__7039__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__7041 = cljs.core.seq.call(null,ys);
var chunk__7042 = null;
var count__7043 = (0);
var i__7044 = (0);
while(true){
if((i__7044 < count__7043)){
var next_line = cljs.core._nth.call(null,chunk__7042,i__7044);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__7050 = seq__7041;
var G__7051 = chunk__7042;
var G__7052 = count__7043;
var G__7053 = (i__7044 + (1));
seq__7041 = G__7050;
chunk__7042 = G__7051;
count__7043 = G__7052;
i__7044 = G__7053;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__7041);
if(temp__5735__auto__){
var seq__7041__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7041__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__7041__$1);
var G__7054 = cljs.core.chunk_rest.call(null,seq__7041__$1);
var G__7055 = c__4461__auto__;
var G__7056 = cljs.core.count.call(null,c__4461__auto__);
var G__7057 = (0);
seq__7041 = G__7054;
chunk__7042 = G__7055;
count__7043 = G__7056;
i__7044 = G__7057;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__7041__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__7058 = cljs.core.next.call(null,seq__7041__$1);
var G__7059 = null;
var G__7060 = (0);
var G__7061 = (0);
seq__7041 = G__7058;
chunk__7042 = G__7059;
count__7043 = G__7060;
i__7044 = G__7061;
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

var seq__7045_7062 = cljs.core.seq.call(null,docs__$2);
var chunk__7046_7063 = null;
var count__7047_7064 = (0);
var i__7048_7065 = (0);
while(true){
if((i__7048_7065 < count__7047_7064)){
var e_7066 = cljs.core._nth.call(null,chunk__7046_7063,i__7048_7065);
if(cljs.core.truth_(e_7066)){
print_comment_lines.call(null,e_7066);
} else {
}


var G__7067 = seq__7045_7062;
var G__7068 = chunk__7046_7063;
var G__7069 = count__7047_7064;
var G__7070 = (i__7048_7065 + (1));
seq__7045_7062 = G__7067;
chunk__7046_7063 = G__7068;
count__7047_7064 = G__7069;
i__7048_7065 = G__7070;
continue;
} else {
var temp__5735__auto___7071 = cljs.core.seq.call(null,seq__7045_7062);
if(temp__5735__auto___7071){
var seq__7045_7072__$1 = temp__5735__auto___7071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7045_7072__$1)){
var c__4461__auto___7073 = cljs.core.chunk_first.call(null,seq__7045_7072__$1);
var G__7074 = cljs.core.chunk_rest.call(null,seq__7045_7072__$1);
var G__7075 = c__4461__auto___7073;
var G__7076 = cljs.core.count.call(null,c__4461__auto___7073);
var G__7077 = (0);
seq__7045_7062 = G__7074;
chunk__7046_7063 = G__7075;
count__7047_7064 = G__7076;
i__7048_7065 = G__7077;
continue;
} else {
var e_7078 = cljs.core.first.call(null,seq__7045_7072__$1);
if(cljs.core.truth_(e_7078)){
print_comment_lines.call(null,e_7078);
} else {
}


var G__7079 = cljs.core.next.call(null,seq__7045_7072__$1);
var G__7080 = null;
var G__7081 = (0);
var G__7082 = (0);
seq__7045_7062 = G__7079;
chunk__7046_7063 = G__7080;
count__7047_7064 = G__7081;
i__7048_7065 = G__7082;
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
return (function (p1__7084_SHARP_){
return goog.string.startsWith(p1__7084_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__7085){
var map__7086 = p__7085;
var map__7086__$1 = (((((!((map__7086 == null))))?(((((map__7086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7086):map__7086);
var doc = cljs.core.get.call(null,map__7086__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__7086__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__7086__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__7086__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__7086__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__7086__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__7086__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__7086__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__7086__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__7088){
var map__7089 = p__7088;
var map__7089__$1 = (((((!((map__7089 == null))))?(((((map__7089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7089):map__7089);
var name = cljs.core.get.call(null,map__7089__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__7089__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__7089__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__7091_7109 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__7092_7110 = null;
var count__7093_7111 = (0);
var i__7094_7112 = (0);
while(true){
if((i__7094_7112 < count__7093_7111)){
var vec__7095_7113 = cljs.core._nth.call(null,chunk__7092_7110,i__7094_7112);
var i_7114 = cljs.core.nth.call(null,vec__7095_7113,(0),null);
var param_7115 = cljs.core.nth.call(null,vec__7095_7113,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_7115);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__7116 = seq__7091_7109;
var G__7117 = chunk__7092_7110;
var G__7118 = count__7093_7111;
var G__7119 = (i__7094_7112 + (1));
seq__7091_7109 = G__7116;
chunk__7092_7110 = G__7117;
count__7093_7111 = G__7118;
i__7094_7112 = G__7119;
continue;
} else {
var temp__5735__auto___7120 = cljs.core.seq.call(null,seq__7091_7109);
if(temp__5735__auto___7120){
var seq__7091_7121__$1 = temp__5735__auto___7120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7091_7121__$1)){
var c__4461__auto___7122 = cljs.core.chunk_first.call(null,seq__7091_7121__$1);
var G__7123 = cljs.core.chunk_rest.call(null,seq__7091_7121__$1);
var G__7124 = c__4461__auto___7122;
var G__7125 = cljs.core.count.call(null,c__4461__auto___7122);
var G__7126 = (0);
seq__7091_7109 = G__7123;
chunk__7092_7110 = G__7124;
count__7093_7111 = G__7125;
i__7094_7112 = G__7126;
continue;
} else {
var vec__7098_7127 = cljs.core.first.call(null,seq__7091_7121__$1);
var i_7128 = cljs.core.nth.call(null,vec__7098_7127,(0),null);
var param_7129 = cljs.core.nth.call(null,vec__7098_7127,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_7129);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__7130 = cljs.core.next.call(null,seq__7091_7121__$1);
var G__7131 = null;
var G__7132 = (0);
var G__7133 = (0);
seq__7091_7109 = G__7130;
chunk__7092_7110 = G__7131;
count__7093_7111 = G__7132;
i__7094_7112 = G__7133;
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

var seq__7101_7134 = cljs.core.seq.call(null,params);
var chunk__7102_7135 = null;
var count__7103_7136 = (0);
var i__7104_7137 = (0);
while(true){
if((i__7104_7137 < count__7103_7136)){
var param_7138 = cljs.core._nth.call(null,chunk__7102_7135,i__7104_7137);
cljs.compiler.emit.call(null,param_7138);

if(cljs.core._EQ_.call(null,param_7138,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7139 = seq__7101_7134;
var G__7140 = chunk__7102_7135;
var G__7141 = count__7103_7136;
var G__7142 = (i__7104_7137 + (1));
seq__7101_7134 = G__7139;
chunk__7102_7135 = G__7140;
count__7103_7136 = G__7141;
i__7104_7137 = G__7142;
continue;
} else {
var temp__5735__auto___7143 = cljs.core.seq.call(null,seq__7101_7134);
if(temp__5735__auto___7143){
var seq__7101_7144__$1 = temp__5735__auto___7143;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7101_7144__$1)){
var c__4461__auto___7145 = cljs.core.chunk_first.call(null,seq__7101_7144__$1);
var G__7146 = cljs.core.chunk_rest.call(null,seq__7101_7144__$1);
var G__7147 = c__4461__auto___7145;
var G__7148 = cljs.core.count.call(null,c__4461__auto___7145);
var G__7149 = (0);
seq__7101_7134 = G__7146;
chunk__7102_7135 = G__7147;
count__7103_7136 = G__7148;
i__7104_7137 = G__7149;
continue;
} else {
var param_7150 = cljs.core.first.call(null,seq__7101_7144__$1);
cljs.compiler.emit.call(null,param_7150);

if(cljs.core._EQ_.call(null,param_7150,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7151 = cljs.core.next.call(null,seq__7101_7144__$1);
var G__7152 = null;
var G__7153 = (0);
var G__7154 = (0);
seq__7101_7134 = G__7151;
chunk__7102_7135 = G__7152;
count__7103_7136 = G__7153;
i__7104_7137 = G__7154;
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

var seq__7105_7155 = cljs.core.seq.call(null,params);
var chunk__7106_7156 = null;
var count__7107_7157 = (0);
var i__7108_7158 = (0);
while(true){
if((i__7108_7158 < count__7107_7157)){
var param_7159 = cljs.core._nth.call(null,chunk__7106_7156,i__7108_7158);
cljs.compiler.emit.call(null,param_7159);

if(cljs.core._EQ_.call(null,param_7159,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7160 = seq__7105_7155;
var G__7161 = chunk__7106_7156;
var G__7162 = count__7107_7157;
var G__7163 = (i__7108_7158 + (1));
seq__7105_7155 = G__7160;
chunk__7106_7156 = G__7161;
count__7107_7157 = G__7162;
i__7108_7158 = G__7163;
continue;
} else {
var temp__5735__auto___7164 = cljs.core.seq.call(null,seq__7105_7155);
if(temp__5735__auto___7164){
var seq__7105_7165__$1 = temp__5735__auto___7164;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7105_7165__$1)){
var c__4461__auto___7166 = cljs.core.chunk_first.call(null,seq__7105_7165__$1);
var G__7167 = cljs.core.chunk_rest.call(null,seq__7105_7165__$1);
var G__7168 = c__4461__auto___7166;
var G__7169 = cljs.core.count.call(null,c__4461__auto___7166);
var G__7170 = (0);
seq__7105_7155 = G__7167;
chunk__7106_7156 = G__7168;
count__7107_7157 = G__7169;
i__7108_7158 = G__7170;
continue;
} else {
var param_7171 = cljs.core.first.call(null,seq__7105_7165__$1);
cljs.compiler.emit.call(null,param_7171);

if(cljs.core._EQ_.call(null,param_7171,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7172 = cljs.core.next.call(null,seq__7105_7165__$1);
var G__7173 = null;
var G__7174 = (0);
var G__7175 = (0);
seq__7105_7155 = G__7172;
chunk__7106_7156 = G__7173;
count__7107_7157 = G__7174;
i__7108_7158 = G__7175;
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
var seq__7176 = cljs.core.seq.call(null,params);
var chunk__7177 = null;
var count__7178 = (0);
var i__7179 = (0);
while(true){
if((i__7179 < count__7178)){
var param = cljs.core._nth.call(null,chunk__7177,i__7179);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7180 = seq__7176;
var G__7181 = chunk__7177;
var G__7182 = count__7178;
var G__7183 = (i__7179 + (1));
seq__7176 = G__7180;
chunk__7177 = G__7181;
count__7178 = G__7182;
i__7179 = G__7183;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__7176);
if(temp__5735__auto__){
var seq__7176__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7176__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__7176__$1);
var G__7184 = cljs.core.chunk_rest.call(null,seq__7176__$1);
var G__7185 = c__4461__auto__;
var G__7186 = cljs.core.count.call(null,c__4461__auto__);
var G__7187 = (0);
seq__7176 = G__7184;
chunk__7177 = G__7185;
count__7178 = G__7186;
i__7179 = G__7187;
continue;
} else {
var param = cljs.core.first.call(null,seq__7176__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7188 = cljs.core.next.call(null,seq__7176__$1);
var G__7189 = null;
var G__7190 = (0);
var G__7191 = (0);
seq__7176 = G__7188;
chunk__7177 = G__7189;
count__7178 = G__7190;
i__7179 = G__7191;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__7192){
var map__7193 = p__7192;
var map__7193__$1 = (((((!((map__7193 == null))))?(((((map__7193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7193):map__7193);
var expr = cljs.core.get.call(null,map__7193__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__7193__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__7193__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__7193__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__7193__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__7193__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__5491__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__7195){
var map__7196 = p__7195;
var map__7196__$1 = (((((!((map__7196 == null))))?(((((map__7196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7196):map__7196);
var f = map__7196__$1;
var expr = cljs.core.get.call(null,map__7196__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__7196__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__7196__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__7196__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__7196__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__7196__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__7196__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__7196__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__5491__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_7206__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_7207 = cljs.compiler.munge.call(null,name_7206__$1);
var delegate_name_7208 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_7207),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_7208," = function (");

var seq__7198_7209 = cljs.core.seq.call(null,params);
var chunk__7199_7210 = null;
var count__7200_7211 = (0);
var i__7201_7212 = (0);
while(true){
if((i__7201_7212 < count__7200_7211)){
var param_7213 = cljs.core._nth.call(null,chunk__7199_7210,i__7201_7212);
cljs.compiler.emit.call(null,param_7213);

if(cljs.core._EQ_.call(null,param_7213,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7214 = seq__7198_7209;
var G__7215 = chunk__7199_7210;
var G__7216 = count__7200_7211;
var G__7217 = (i__7201_7212 + (1));
seq__7198_7209 = G__7214;
chunk__7199_7210 = G__7215;
count__7200_7211 = G__7216;
i__7201_7212 = G__7217;
continue;
} else {
var temp__5735__auto___7218 = cljs.core.seq.call(null,seq__7198_7209);
if(temp__5735__auto___7218){
var seq__7198_7219__$1 = temp__5735__auto___7218;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7198_7219__$1)){
var c__4461__auto___7220 = cljs.core.chunk_first.call(null,seq__7198_7219__$1);
var G__7221 = cljs.core.chunk_rest.call(null,seq__7198_7219__$1);
var G__7222 = c__4461__auto___7220;
var G__7223 = cljs.core.count.call(null,c__4461__auto___7220);
var G__7224 = (0);
seq__7198_7209 = G__7221;
chunk__7199_7210 = G__7222;
count__7200_7211 = G__7223;
i__7201_7212 = G__7224;
continue;
} else {
var param_7225 = cljs.core.first.call(null,seq__7198_7219__$1);
cljs.compiler.emit.call(null,param_7225);

if(cljs.core._EQ_.call(null,param_7225,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7226 = cljs.core.next.call(null,seq__7198_7219__$1);
var G__7227 = null;
var G__7228 = (0);
var G__7229 = (0);
seq__7198_7209 = G__7226;
chunk__7199_7210 = G__7227;
count__7200_7211 = G__7228;
i__7201_7212 = G__7229;
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

cljs.compiler.emitln.call(null,"var ",mname_7207," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_7230 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_7230,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_7208,".call(this,");

var seq__7202_7231 = cljs.core.seq.call(null,params);
var chunk__7203_7232 = null;
var count__7204_7233 = (0);
var i__7205_7234 = (0);
while(true){
if((i__7205_7234 < count__7204_7233)){
var param_7235 = cljs.core._nth.call(null,chunk__7203_7232,i__7205_7234);
cljs.compiler.emit.call(null,param_7235);

if(cljs.core._EQ_.call(null,param_7235,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7236 = seq__7202_7231;
var G__7237 = chunk__7203_7232;
var G__7238 = count__7204_7233;
var G__7239 = (i__7205_7234 + (1));
seq__7202_7231 = G__7236;
chunk__7203_7232 = G__7237;
count__7204_7233 = G__7238;
i__7205_7234 = G__7239;
continue;
} else {
var temp__5735__auto___7240 = cljs.core.seq.call(null,seq__7202_7231);
if(temp__5735__auto___7240){
var seq__7202_7241__$1 = temp__5735__auto___7240;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7202_7241__$1)){
var c__4461__auto___7242 = cljs.core.chunk_first.call(null,seq__7202_7241__$1);
var G__7243 = cljs.core.chunk_rest.call(null,seq__7202_7241__$1);
var G__7244 = c__4461__auto___7242;
var G__7245 = cljs.core.count.call(null,c__4461__auto___7242);
var G__7246 = (0);
seq__7202_7231 = G__7243;
chunk__7203_7232 = G__7244;
count__7204_7233 = G__7245;
i__7205_7234 = G__7246;
continue;
} else {
var param_7247 = cljs.core.first.call(null,seq__7202_7241__$1);
cljs.compiler.emit.call(null,param_7247);

if(cljs.core._EQ_.call(null,param_7247,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7248 = cljs.core.next.call(null,seq__7202_7241__$1);
var G__7249 = null;
var G__7250 = (0);
var G__7251 = (0);
seq__7202_7231 = G__7248;
chunk__7203_7232 = G__7249;
count__7204_7233 = G__7250;
i__7205_7234 = G__7251;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_7207,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_7207,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_7206__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_7207,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_7208,";");

cljs.compiler.emitln.call(null,"return ",mname_7207,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__7255){
var map__7256 = p__7255;
var map__7256__$1 = (((((!((map__7256 == null))))?(((((map__7256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7256):map__7256);
var variadic = cljs.core.get.call(null,map__7256__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__7256__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__7256__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__7256__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__7256__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__7256__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__7256__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__7256,map__7256__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__7252_SHARP_){
var and__4036__auto__ = p1__7252_SHARP_;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__7252_SHARP_));
} else {
return and__4036__auto__;
}
});})(map__7256,map__7256__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_7291__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_7292 = cljs.compiler.munge.call(null,name_7291__$1);
var maxparams_7293 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_7294 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_7291__$1,mname_7292,maxparams_7293,loop_locals,map__7256,map__7256__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_7292),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_7291__$1,mname_7292,maxparams_7293,loop_locals,map__7256,map__7256__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_7295 = cljs.core.sort_by.call(null,((function (name_7291__$1,mname_7292,maxparams_7293,mmap_7294,loop_locals,map__7256,map__7256__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__7253_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__7253_SHARP_)));
});})(name_7291__$1,mname_7292,maxparams_7293,mmap_7294,loop_locals,map__7256,map__7256__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_7294));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_7292," = null;");

var seq__7258_7296 = cljs.core.seq.call(null,ms_7295);
var chunk__7259_7297 = null;
var count__7260_7298 = (0);
var i__7261_7299 = (0);
while(true){
if((i__7261_7299 < count__7260_7298)){
var vec__7262_7300 = cljs.core._nth.call(null,chunk__7259_7297,i__7261_7299);
var n_7301 = cljs.core.nth.call(null,vec__7262_7300,(0),null);
var meth_7302 = cljs.core.nth.call(null,vec__7262_7300,(1),null);
cljs.compiler.emits.call(null,"var ",n_7301," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7302))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_7302);
} else {
cljs.compiler.emit_fn_method.call(null,meth_7302);
}

cljs.compiler.emitln.call(null,";");


var G__7303 = seq__7258_7296;
var G__7304 = chunk__7259_7297;
var G__7305 = count__7260_7298;
var G__7306 = (i__7261_7299 + (1));
seq__7258_7296 = G__7303;
chunk__7259_7297 = G__7304;
count__7260_7298 = G__7305;
i__7261_7299 = G__7306;
continue;
} else {
var temp__5735__auto___7307 = cljs.core.seq.call(null,seq__7258_7296);
if(temp__5735__auto___7307){
var seq__7258_7308__$1 = temp__5735__auto___7307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7258_7308__$1)){
var c__4461__auto___7309 = cljs.core.chunk_first.call(null,seq__7258_7308__$1);
var G__7310 = cljs.core.chunk_rest.call(null,seq__7258_7308__$1);
var G__7311 = c__4461__auto___7309;
var G__7312 = cljs.core.count.call(null,c__4461__auto___7309);
var G__7313 = (0);
seq__7258_7296 = G__7310;
chunk__7259_7297 = G__7311;
count__7260_7298 = G__7312;
i__7261_7299 = G__7313;
continue;
} else {
var vec__7265_7314 = cljs.core.first.call(null,seq__7258_7308__$1);
var n_7315 = cljs.core.nth.call(null,vec__7265_7314,(0),null);
var meth_7316 = cljs.core.nth.call(null,vec__7265_7314,(1),null);
cljs.compiler.emits.call(null,"var ",n_7315," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7316))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_7316);
} else {
cljs.compiler.emit_fn_method.call(null,meth_7316);
}

cljs.compiler.emitln.call(null,";");


var G__7317 = cljs.core.next.call(null,seq__7258_7308__$1);
var G__7318 = null;
var G__7319 = (0);
var G__7320 = (0);
seq__7258_7296 = G__7317;
chunk__7259_7297 = G__7318;
count__7260_7298 = G__7319;
i__7261_7299 = G__7320;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_7292," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_7293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_7293)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_7293));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__7268_7321 = cljs.core.seq.call(null,ms_7295);
var chunk__7269_7322 = null;
var count__7270_7323 = (0);
var i__7271_7324 = (0);
while(true){
if((i__7271_7324 < count__7270_7323)){
var vec__7272_7325 = cljs.core._nth.call(null,chunk__7269_7322,i__7271_7324);
var n_7326 = cljs.core.nth.call(null,vec__7272_7325,(0),null);
var meth_7327 = cljs.core.nth.call(null,vec__7272_7325,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7327))){
cljs.compiler.emitln.call(null,"default:");

var restarg_7328 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_7328," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_7329 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_7328," = new cljs.core.IndexedSeq(",a_7329,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_7326,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_7293)),(((cljs.core.count.call(null,maxparams_7293) > (1)))?", ":null),restarg_7328,");");
} else {
var pcnt_7330 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7327));
cljs.compiler.emitln.call(null,"case ",pcnt_7330,":");

cljs.compiler.emitln.call(null,"return ",n_7326,".call(this",(((pcnt_7330 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_7330,maxparams_7293)),null,(1),null)),(2),null))),");");
}


var G__7331 = seq__7268_7321;
var G__7332 = chunk__7269_7322;
var G__7333 = count__7270_7323;
var G__7334 = (i__7271_7324 + (1));
seq__7268_7321 = G__7331;
chunk__7269_7322 = G__7332;
count__7270_7323 = G__7333;
i__7271_7324 = G__7334;
continue;
} else {
var temp__5735__auto___7335 = cljs.core.seq.call(null,seq__7268_7321);
if(temp__5735__auto___7335){
var seq__7268_7336__$1 = temp__5735__auto___7335;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7268_7336__$1)){
var c__4461__auto___7337 = cljs.core.chunk_first.call(null,seq__7268_7336__$1);
var G__7338 = cljs.core.chunk_rest.call(null,seq__7268_7336__$1);
var G__7339 = c__4461__auto___7337;
var G__7340 = cljs.core.count.call(null,c__4461__auto___7337);
var G__7341 = (0);
seq__7268_7321 = G__7338;
chunk__7269_7322 = G__7339;
count__7270_7323 = G__7340;
i__7271_7324 = G__7341;
continue;
} else {
var vec__7275_7342 = cljs.core.first.call(null,seq__7268_7336__$1);
var n_7343 = cljs.core.nth.call(null,vec__7275_7342,(0),null);
var meth_7344 = cljs.core.nth.call(null,vec__7275_7342,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7344))){
cljs.compiler.emitln.call(null,"default:");

var restarg_7345 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_7345," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_7346 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_7345," = new cljs.core.IndexedSeq(",a_7346,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_7343,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_7293)),(((cljs.core.count.call(null,maxparams_7293) > (1)))?", ":null),restarg_7345,");");
} else {
var pcnt_7347 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7344));
cljs.compiler.emitln.call(null,"case ",pcnt_7347,":");

cljs.compiler.emitln.call(null,"return ",n_7343,".call(this",(((pcnt_7347 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_7347,maxparams_7293)),null,(1),null)),(2),null))),");");
}


var G__7348 = cljs.core.next.call(null,seq__7268_7336__$1);
var G__7349 = null;
var G__7350 = (0);
var G__7351 = (0);
seq__7268_7321 = G__7348;
chunk__7269_7322 = G__7349;
count__7270_7323 = G__7350;
i__7271_7324 = G__7351;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_7352 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_7295)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_7352,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_7292,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_7292,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_7291__$1,mname_7292,maxparams_7293,mmap_7294,ms_7295,loop_locals,map__7256,map__7256__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__7254_SHARP_){
var vec__7278 = p1__7254_SHARP_;
var n = cljs.core.nth.call(null,vec__7278,(0),null);
var m = cljs.core.nth.call(null,vec__7278,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_7291__$1,mname_7292,maxparams_7293,mmap_7294,ms_7295,loop_locals,map__7256,map__7256__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_7295),".cljs$lang$applyTo;");
} else {
}

var seq__7281_7353 = cljs.core.seq.call(null,ms_7295);
var chunk__7282_7354 = null;
var count__7283_7355 = (0);
var i__7284_7356 = (0);
while(true){
if((i__7284_7356 < count__7283_7355)){
var vec__7285_7357 = cljs.core._nth.call(null,chunk__7282_7354,i__7284_7356);
var n_7358 = cljs.core.nth.call(null,vec__7285_7357,(0),null);
var meth_7359 = cljs.core.nth.call(null,vec__7285_7357,(1),null);
var c_7360 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7359));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7359))){
cljs.compiler.emitln.call(null,mname_7292,".cljs$core$IFn$_invoke$arity$variadic = ",n_7358,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_7292,".cljs$core$IFn$_invoke$arity$",c_7360," = ",n_7358,";");
}


var G__7361 = seq__7281_7353;
var G__7362 = chunk__7282_7354;
var G__7363 = count__7283_7355;
var G__7364 = (i__7284_7356 + (1));
seq__7281_7353 = G__7361;
chunk__7282_7354 = G__7362;
count__7283_7355 = G__7363;
i__7284_7356 = G__7364;
continue;
} else {
var temp__5735__auto___7365 = cljs.core.seq.call(null,seq__7281_7353);
if(temp__5735__auto___7365){
var seq__7281_7366__$1 = temp__5735__auto___7365;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7281_7366__$1)){
var c__4461__auto___7367 = cljs.core.chunk_first.call(null,seq__7281_7366__$1);
var G__7368 = cljs.core.chunk_rest.call(null,seq__7281_7366__$1);
var G__7369 = c__4461__auto___7367;
var G__7370 = cljs.core.count.call(null,c__4461__auto___7367);
var G__7371 = (0);
seq__7281_7353 = G__7368;
chunk__7282_7354 = G__7369;
count__7283_7355 = G__7370;
i__7284_7356 = G__7371;
continue;
} else {
var vec__7288_7372 = cljs.core.first.call(null,seq__7281_7366__$1);
var n_7373 = cljs.core.nth.call(null,vec__7288_7372,(0),null);
var meth_7374 = cljs.core.nth.call(null,vec__7288_7372,(1),null);
var c_7375 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7374));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7374))){
cljs.compiler.emitln.call(null,mname_7292,".cljs$core$IFn$_invoke$arity$variadic = ",n_7373,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_7292,".cljs$core$IFn$_invoke$arity$",c_7375," = ",n_7373,";");
}


var G__7376 = cljs.core.next.call(null,seq__7281_7366__$1);
var G__7377 = null;
var G__7378 = (0);
var G__7379 = (0);
seq__7281_7353 = G__7376;
chunk__7282_7354 = G__7377;
count__7283_7355 = G__7378;
i__7284_7356 = G__7379;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_7292,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__7380){
var map__7381 = p__7380;
var map__7381__$1 = (((((!((map__7381 == null))))?(((((map__7381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7381):map__7381);
var statements = cljs.core.get.call(null,map__7381__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__7381__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__7381__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__7383_7387 = cljs.core.seq.call(null,statements);
var chunk__7384_7388 = null;
var count__7385_7389 = (0);
var i__7386_7390 = (0);
while(true){
if((i__7386_7390 < count__7385_7389)){
var s_7391 = cljs.core._nth.call(null,chunk__7384_7388,i__7386_7390);
cljs.compiler.emitln.call(null,s_7391);


var G__7392 = seq__7383_7387;
var G__7393 = chunk__7384_7388;
var G__7394 = count__7385_7389;
var G__7395 = (i__7386_7390 + (1));
seq__7383_7387 = G__7392;
chunk__7384_7388 = G__7393;
count__7385_7389 = G__7394;
i__7386_7390 = G__7395;
continue;
} else {
var temp__5735__auto___7396 = cljs.core.seq.call(null,seq__7383_7387);
if(temp__5735__auto___7396){
var seq__7383_7397__$1 = temp__5735__auto___7396;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7383_7397__$1)){
var c__4461__auto___7398 = cljs.core.chunk_first.call(null,seq__7383_7397__$1);
var G__7399 = cljs.core.chunk_rest.call(null,seq__7383_7397__$1);
var G__7400 = c__4461__auto___7398;
var G__7401 = cljs.core.count.call(null,c__4461__auto___7398);
var G__7402 = (0);
seq__7383_7387 = G__7399;
chunk__7384_7388 = G__7400;
count__7385_7389 = G__7401;
i__7386_7390 = G__7402;
continue;
} else {
var s_7403 = cljs.core.first.call(null,seq__7383_7397__$1);
cljs.compiler.emitln.call(null,s_7403);


var G__7404 = cljs.core.next.call(null,seq__7383_7397__$1);
var G__7405 = null;
var G__7406 = (0);
var G__7407 = (0);
seq__7383_7387 = G__7404;
chunk__7384_7388 = G__7405;
count__7385_7389 = G__7406;
i__7386_7390 = G__7407;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__7408){
var map__7409 = p__7408;
var map__7409__$1 = (((((!((map__7409 == null))))?(((((map__7409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7409):map__7409);
var try$ = cljs.core.get.call(null,map__7409__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__7409__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__7409__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__7409__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__7409__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__7411,is_loop){
var map__7412 = p__7411;
var map__7412__$1 = (((((!((map__7412 == null))))?(((((map__7412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7412):map__7412);
var expr = cljs.core.get.call(null,map__7412__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__7412__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__7412__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__7414_7424 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__7415_7425 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__7414_7424,context,map__7412,map__7412__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__7414_7424,context,map__7412,map__7412__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__7415_7425;

try{var seq__7416_7426 = cljs.core.seq.call(null,bindings);
var chunk__7417_7427 = null;
var count__7418_7428 = (0);
var i__7419_7429 = (0);
while(true){
if((i__7419_7429 < count__7418_7428)){
var map__7420_7430 = cljs.core._nth.call(null,chunk__7417_7427,i__7419_7429);
var map__7420_7431__$1 = (((((!((map__7420_7430 == null))))?(((((map__7420_7430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7420_7430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7420_7430):map__7420_7430);
var binding_7432 = map__7420_7431__$1;
var init_7433 = cljs.core.get.call(null,map__7420_7431__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_7432);

cljs.compiler.emitln.call(null," = ",init_7433,";");


var G__7434 = seq__7416_7426;
var G__7435 = chunk__7417_7427;
var G__7436 = count__7418_7428;
var G__7437 = (i__7419_7429 + (1));
seq__7416_7426 = G__7434;
chunk__7417_7427 = G__7435;
count__7418_7428 = G__7436;
i__7419_7429 = G__7437;
continue;
} else {
var temp__5735__auto___7438 = cljs.core.seq.call(null,seq__7416_7426);
if(temp__5735__auto___7438){
var seq__7416_7439__$1 = temp__5735__auto___7438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7416_7439__$1)){
var c__4461__auto___7440 = cljs.core.chunk_first.call(null,seq__7416_7439__$1);
var G__7441 = cljs.core.chunk_rest.call(null,seq__7416_7439__$1);
var G__7442 = c__4461__auto___7440;
var G__7443 = cljs.core.count.call(null,c__4461__auto___7440);
var G__7444 = (0);
seq__7416_7426 = G__7441;
chunk__7417_7427 = G__7442;
count__7418_7428 = G__7443;
i__7419_7429 = G__7444;
continue;
} else {
var map__7422_7445 = cljs.core.first.call(null,seq__7416_7439__$1);
var map__7422_7446__$1 = (((((!((map__7422_7445 == null))))?(((((map__7422_7445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7422_7445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7422_7445):map__7422_7445);
var binding_7447 = map__7422_7446__$1;
var init_7448 = cljs.core.get.call(null,map__7422_7446__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_7447);

cljs.compiler.emitln.call(null," = ",init_7448,";");


var G__7449 = cljs.core.next.call(null,seq__7416_7439__$1);
var G__7450 = null;
var G__7451 = (0);
var G__7452 = (0);
seq__7416_7426 = G__7449;
chunk__7417_7427 = G__7450;
count__7418_7428 = G__7451;
i__7419_7429 = G__7452;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__7414_7424;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__7453){
var map__7454 = p__7453;
var map__7454__$1 = (((((!((map__7454 == null))))?(((((map__7454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7454):map__7454);
var frame = cljs.core.get.call(null,map__7454__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__7454__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__7454__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4518__auto___7456 = cljs.core.count.call(null,exprs);
var i_7457 = (0);
while(true){
if((i_7457 < n__4518__auto___7456)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_7457)," = ",exprs.call(null,i_7457),";");

var G__7458 = (i_7457 + (1));
i_7457 = G__7458;
continue;
} else {
}
break;
}

var n__4518__auto___7459 = cljs.core.count.call(null,exprs);
var i_7460 = (0);
while(true){
if((i_7460 < n__4518__auto___7459)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_7460))," = ",temps.call(null,i_7460),";");

var G__7461 = (i_7460 + (1));
i_7460 = G__7461;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__7462){
var map__7463 = p__7462;
var map__7463__$1 = (((((!((map__7463 == null))))?(((((map__7463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7463):map__7463);
var expr = cljs.core.get.call(null,map__7463__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__7463__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__7463__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__7465_7473 = cljs.core.seq.call(null,bindings);
var chunk__7466_7474 = null;
var count__7467_7475 = (0);
var i__7468_7476 = (0);
while(true){
if((i__7468_7476 < count__7467_7475)){
var map__7469_7477 = cljs.core._nth.call(null,chunk__7466_7474,i__7468_7476);
var map__7469_7478__$1 = (((((!((map__7469_7477 == null))))?(((((map__7469_7477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7469_7477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7469_7477):map__7469_7477);
var binding_7479 = map__7469_7478__$1;
var init_7480 = cljs.core.get.call(null,map__7469_7478__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_7479)," = ",init_7480,";");


var G__7481 = seq__7465_7473;
var G__7482 = chunk__7466_7474;
var G__7483 = count__7467_7475;
var G__7484 = (i__7468_7476 + (1));
seq__7465_7473 = G__7481;
chunk__7466_7474 = G__7482;
count__7467_7475 = G__7483;
i__7468_7476 = G__7484;
continue;
} else {
var temp__5735__auto___7485 = cljs.core.seq.call(null,seq__7465_7473);
if(temp__5735__auto___7485){
var seq__7465_7486__$1 = temp__5735__auto___7485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7465_7486__$1)){
var c__4461__auto___7487 = cljs.core.chunk_first.call(null,seq__7465_7486__$1);
var G__7488 = cljs.core.chunk_rest.call(null,seq__7465_7486__$1);
var G__7489 = c__4461__auto___7487;
var G__7490 = cljs.core.count.call(null,c__4461__auto___7487);
var G__7491 = (0);
seq__7465_7473 = G__7488;
chunk__7466_7474 = G__7489;
count__7467_7475 = G__7490;
i__7468_7476 = G__7491;
continue;
} else {
var map__7471_7492 = cljs.core.first.call(null,seq__7465_7486__$1);
var map__7471_7493__$1 = (((((!((map__7471_7492 == null))))?(((((map__7471_7492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7471_7492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7471_7492):map__7471_7492);
var binding_7494 = map__7471_7493__$1;
var init_7495 = cljs.core.get.call(null,map__7471_7493__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_7494)," = ",init_7495,";");


var G__7496 = cljs.core.next.call(null,seq__7465_7486__$1);
var G__7497 = null;
var G__7498 = (0);
var G__7499 = (0);
seq__7465_7473 = G__7496;
chunk__7466_7474 = G__7497;
count__7467_7475 = G__7498;
i__7468_7476 = G__7499;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__7502){
var map__7503 = p__7502;
var map__7503__$1 = (((((!((map__7503 == null))))?(((((map__7503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7503):map__7503);
var expr = map__7503__$1;
var f = cljs.core.get.call(null,map__7503__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__7503__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__7503__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__7505 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7503,map__7503__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7503,map__7503__$1,expr,f,args,env){
return (function (p1__7500_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__7500_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7503,map__7503__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7503,map__7503__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7503,map__7503__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7503,map__7503__$1,expr,f,args,env){
return (function (p1__7501_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__7501_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7503,map__7503__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7503,map__7503__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__7505,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__7505,(1),null);
var env__5491__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_7508 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_7508,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_7509 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_7509,args)),(((mfa_7509 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_7509,args)),"], 0))");
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
var fprop_7510 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_7510," ? ",f__$1,fprop_7510,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_7510," ? ",f__$1,fprop_7510,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__7511){
var map__7512 = p__7511;
var map__7512__$1 = (((((!((map__7512 == null))))?(((((map__7512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7512):map__7512);
var ctor = cljs.core.get.call(null,map__7512__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__7512__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__7512__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5491__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__7514){
var map__7515 = p__7514;
var map__7515__$1 = (((((!((map__7515 == null))))?(((((map__7515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7515):map__7515);
var target = cljs.core.get.call(null,map__7515__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__7515__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__7515__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5491__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
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
var map__7517 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__7517__$1 = (((((!((map__7517 == null))))?(((((map__7517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7517):map__7517);
var options = cljs.core.get.call(null,map__7517__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__7517__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__7518 = options;
var map__7518__$1 = (((((!((map__7518 == null))))?(((((map__7518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7518):map__7518);
var target = cljs.core.get.call(null,map__7518__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__7518__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__7519 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__7524 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__7524__$1 = (((((!((map__7524 == null))))?(((((map__7524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7524):map__7524);
var node_libs = cljs.core.get.call(null,map__7524__$1,true);
var libs_to_load = cljs.core.get.call(null,map__7524__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__7519,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__7519,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__7526_7542 = cljs.core.seq.call(null,libs_to_load);
var chunk__7527_7543 = null;
var count__7528_7544 = (0);
var i__7529_7545 = (0);
while(true){
if((i__7529_7545 < count__7528_7544)){
var lib_7546 = cljs.core._nth.call(null,chunk__7527_7543,i__7529_7545);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_7546)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7546),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7546),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7546),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7546),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_7546,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7546),"');");
}

}
}
}


var G__7547 = seq__7526_7542;
var G__7548 = chunk__7527_7543;
var G__7549 = count__7528_7544;
var G__7550 = (i__7529_7545 + (1));
seq__7526_7542 = G__7547;
chunk__7527_7543 = G__7548;
count__7528_7544 = G__7549;
i__7529_7545 = G__7550;
continue;
} else {
var temp__5735__auto___7551 = cljs.core.seq.call(null,seq__7526_7542);
if(temp__5735__auto___7551){
var seq__7526_7552__$1 = temp__5735__auto___7551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7526_7552__$1)){
var c__4461__auto___7553 = cljs.core.chunk_first.call(null,seq__7526_7552__$1);
var G__7554 = cljs.core.chunk_rest.call(null,seq__7526_7552__$1);
var G__7555 = c__4461__auto___7553;
var G__7556 = cljs.core.count.call(null,c__4461__auto___7553);
var G__7557 = (0);
seq__7526_7542 = G__7554;
chunk__7527_7543 = G__7555;
count__7528_7544 = G__7556;
i__7529_7545 = G__7557;
continue;
} else {
var lib_7558 = cljs.core.first.call(null,seq__7526_7552__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_7558)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7558),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7558),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7558),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7558),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_7558,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7558),"');");
}

}
}
}


var G__7559 = cljs.core.next.call(null,seq__7526_7552__$1);
var G__7560 = null;
var G__7561 = (0);
var G__7562 = (0);
seq__7526_7542 = G__7559;
chunk__7527_7543 = G__7560;
count__7528_7544 = G__7561;
i__7529_7545 = G__7562;
continue;
}
} else {
}
}
break;
}

var seq__7530_7563 = cljs.core.seq.call(null,node_libs);
var chunk__7531_7564 = null;
var count__7532_7565 = (0);
var i__7533_7566 = (0);
while(true){
if((i__7533_7566 < count__7532_7565)){
var lib_7567 = cljs.core._nth.call(null,chunk__7531_7564,i__7533_7566);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_7567)," = require('",lib_7567,"');");


var G__7568 = seq__7530_7563;
var G__7569 = chunk__7531_7564;
var G__7570 = count__7532_7565;
var G__7571 = (i__7533_7566 + (1));
seq__7530_7563 = G__7568;
chunk__7531_7564 = G__7569;
count__7532_7565 = G__7570;
i__7533_7566 = G__7571;
continue;
} else {
var temp__5735__auto___7572 = cljs.core.seq.call(null,seq__7530_7563);
if(temp__5735__auto___7572){
var seq__7530_7573__$1 = temp__5735__auto___7572;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7530_7573__$1)){
var c__4461__auto___7574 = cljs.core.chunk_first.call(null,seq__7530_7573__$1);
var G__7575 = cljs.core.chunk_rest.call(null,seq__7530_7573__$1);
var G__7576 = c__4461__auto___7574;
var G__7577 = cljs.core.count.call(null,c__4461__auto___7574);
var G__7578 = (0);
seq__7530_7563 = G__7575;
chunk__7531_7564 = G__7576;
count__7532_7565 = G__7577;
i__7533_7566 = G__7578;
continue;
} else {
var lib_7579 = cljs.core.first.call(null,seq__7530_7573__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_7579)," = require('",lib_7579,"');");


var G__7580 = cljs.core.next.call(null,seq__7530_7573__$1);
var G__7581 = null;
var G__7582 = (0);
var G__7583 = (0);
seq__7530_7563 = G__7580;
chunk__7531_7564 = G__7581;
count__7532_7565 = G__7582;
i__7533_7566 = G__7583;
continue;
}
} else {
}
}
break;
}

var seq__7534_7584 = cljs.core.seq.call(null,global_exports_libs);
var chunk__7535_7585 = null;
var count__7536_7586 = (0);
var i__7537_7587 = (0);
while(true){
if((i__7537_7587 < count__7536_7586)){
var lib_7588 = cljs.core._nth.call(null,chunk__7535_7585,i__7537_7587);
var map__7538_7589 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_7588));
var map__7538_7590__$1 = (((((!((map__7538_7589 == null))))?(((((map__7538_7589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7538_7589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7538_7589):map__7538_7589);
var global_exports_7591 = cljs.core.get.call(null,map__7538_7590__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_7591,lib_7588);


var G__7592 = seq__7534_7584;
var G__7593 = chunk__7535_7585;
var G__7594 = count__7536_7586;
var G__7595 = (i__7537_7587 + (1));
seq__7534_7584 = G__7592;
chunk__7535_7585 = G__7593;
count__7536_7586 = G__7594;
i__7537_7587 = G__7595;
continue;
} else {
var temp__5735__auto___7596 = cljs.core.seq.call(null,seq__7534_7584);
if(temp__5735__auto___7596){
var seq__7534_7597__$1 = temp__5735__auto___7596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7534_7597__$1)){
var c__4461__auto___7598 = cljs.core.chunk_first.call(null,seq__7534_7597__$1);
var G__7599 = cljs.core.chunk_rest.call(null,seq__7534_7597__$1);
var G__7600 = c__4461__auto___7598;
var G__7601 = cljs.core.count.call(null,c__4461__auto___7598);
var G__7602 = (0);
seq__7534_7584 = G__7599;
chunk__7535_7585 = G__7600;
count__7536_7586 = G__7601;
i__7537_7587 = G__7602;
continue;
} else {
var lib_7603 = cljs.core.first.call(null,seq__7534_7597__$1);
var map__7540_7604 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_7603));
var map__7540_7605__$1 = (((((!((map__7540_7604 == null))))?(((((map__7540_7604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7540_7604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7540_7604):map__7540_7604);
var global_exports_7606 = cljs.core.get.call(null,map__7540_7605__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_7606,lib_7603);


var G__7607 = cljs.core.next.call(null,seq__7534_7597__$1);
var G__7608 = null;
var G__7609 = (0);
var G__7610 = (0);
seq__7534_7584 = G__7607;
chunk__7535_7585 = G__7608;
count__7536_7586 = G__7609;
i__7537_7587 = G__7610;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__7611){
var map__7612 = p__7611;
var map__7612__$1 = (((((!((map__7612 == null))))?(((((map__7612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7612):map__7612);
var name = cljs.core.get.call(null,map__7612__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__7612__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__7612__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__7612__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__7612__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__7612__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__7612__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__7614){
var map__7615 = p__7614;
var map__7615__$1 = (((((!((map__7615 == null))))?(((((map__7615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7615):map__7615);
var name = cljs.core.get.call(null,map__7615__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__7615__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__7615__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__7615__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__7615__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__7615__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__7615__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__7617){
var map__7618 = p__7617;
var map__7618__$1 = (((((!((map__7618 == null))))?(((((map__7618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7618):map__7618);
var t = cljs.core.get.call(null,map__7618__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__7618__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__7618__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__7618__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__7618__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__7620_7638 = cljs.core.seq.call(null,protocols);
var chunk__7621_7639 = null;
var count__7622_7640 = (0);
var i__7623_7641 = (0);
while(true){
if((i__7623_7641 < count__7622_7640)){
var protocol_7642 = cljs.core._nth.call(null,chunk__7621_7639,i__7623_7641);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_7642)),"}");


var G__7643 = seq__7620_7638;
var G__7644 = chunk__7621_7639;
var G__7645 = count__7622_7640;
var G__7646 = (i__7623_7641 + (1));
seq__7620_7638 = G__7643;
chunk__7621_7639 = G__7644;
count__7622_7640 = G__7645;
i__7623_7641 = G__7646;
continue;
} else {
var temp__5735__auto___7647 = cljs.core.seq.call(null,seq__7620_7638);
if(temp__5735__auto___7647){
var seq__7620_7648__$1 = temp__5735__auto___7647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7620_7648__$1)){
var c__4461__auto___7649 = cljs.core.chunk_first.call(null,seq__7620_7648__$1);
var G__7650 = cljs.core.chunk_rest.call(null,seq__7620_7648__$1);
var G__7651 = c__4461__auto___7649;
var G__7652 = cljs.core.count.call(null,c__4461__auto___7649);
var G__7653 = (0);
seq__7620_7638 = G__7650;
chunk__7621_7639 = G__7651;
count__7622_7640 = G__7652;
i__7623_7641 = G__7653;
continue;
} else {
var protocol_7654 = cljs.core.first.call(null,seq__7620_7648__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_7654)),"}");


var G__7655 = cljs.core.next.call(null,seq__7620_7648__$1);
var G__7656 = null;
var G__7657 = (0);
var G__7658 = (0);
seq__7620_7638 = G__7655;
chunk__7621_7639 = G__7656;
count__7622_7640 = G__7657;
i__7623_7641 = G__7658;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__7624_7659 = cljs.core.seq.call(null,fields__$1);
var chunk__7625_7660 = null;
var count__7626_7661 = (0);
var i__7627_7662 = (0);
while(true){
if((i__7627_7662 < count__7626_7661)){
var fld_7663 = cljs.core._nth.call(null,chunk__7625_7660,i__7627_7662);
cljs.compiler.emitln.call(null,"this.",fld_7663," = ",fld_7663,";");


var G__7664 = seq__7624_7659;
var G__7665 = chunk__7625_7660;
var G__7666 = count__7626_7661;
var G__7667 = (i__7627_7662 + (1));
seq__7624_7659 = G__7664;
chunk__7625_7660 = G__7665;
count__7626_7661 = G__7666;
i__7627_7662 = G__7667;
continue;
} else {
var temp__5735__auto___7668 = cljs.core.seq.call(null,seq__7624_7659);
if(temp__5735__auto___7668){
var seq__7624_7669__$1 = temp__5735__auto___7668;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7624_7669__$1)){
var c__4461__auto___7670 = cljs.core.chunk_first.call(null,seq__7624_7669__$1);
var G__7671 = cljs.core.chunk_rest.call(null,seq__7624_7669__$1);
var G__7672 = c__4461__auto___7670;
var G__7673 = cljs.core.count.call(null,c__4461__auto___7670);
var G__7674 = (0);
seq__7624_7659 = G__7671;
chunk__7625_7660 = G__7672;
count__7626_7661 = G__7673;
i__7627_7662 = G__7674;
continue;
} else {
var fld_7675 = cljs.core.first.call(null,seq__7624_7669__$1);
cljs.compiler.emitln.call(null,"this.",fld_7675," = ",fld_7675,";");


var G__7676 = cljs.core.next.call(null,seq__7624_7669__$1);
var G__7677 = null;
var G__7678 = (0);
var G__7679 = (0);
seq__7624_7659 = G__7676;
chunk__7625_7660 = G__7677;
count__7626_7661 = G__7678;
i__7627_7662 = G__7679;
continue;
}
} else {
}
}
break;
}

var seq__7628_7680 = cljs.core.seq.call(null,pmasks);
var chunk__7629_7681 = null;
var count__7630_7682 = (0);
var i__7631_7683 = (0);
while(true){
if((i__7631_7683 < count__7630_7682)){
var vec__7632_7684 = cljs.core._nth.call(null,chunk__7629_7681,i__7631_7683);
var pno_7685 = cljs.core.nth.call(null,vec__7632_7684,(0),null);
var pmask_7686 = cljs.core.nth.call(null,vec__7632_7684,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_7685,"$ = ",pmask_7686,";");


var G__7687 = seq__7628_7680;
var G__7688 = chunk__7629_7681;
var G__7689 = count__7630_7682;
var G__7690 = (i__7631_7683 + (1));
seq__7628_7680 = G__7687;
chunk__7629_7681 = G__7688;
count__7630_7682 = G__7689;
i__7631_7683 = G__7690;
continue;
} else {
var temp__5735__auto___7691 = cljs.core.seq.call(null,seq__7628_7680);
if(temp__5735__auto___7691){
var seq__7628_7692__$1 = temp__5735__auto___7691;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7628_7692__$1)){
var c__4461__auto___7693 = cljs.core.chunk_first.call(null,seq__7628_7692__$1);
var G__7694 = cljs.core.chunk_rest.call(null,seq__7628_7692__$1);
var G__7695 = c__4461__auto___7693;
var G__7696 = cljs.core.count.call(null,c__4461__auto___7693);
var G__7697 = (0);
seq__7628_7680 = G__7694;
chunk__7629_7681 = G__7695;
count__7630_7682 = G__7696;
i__7631_7683 = G__7697;
continue;
} else {
var vec__7635_7698 = cljs.core.first.call(null,seq__7628_7692__$1);
var pno_7699 = cljs.core.nth.call(null,vec__7635_7698,(0),null);
var pmask_7700 = cljs.core.nth.call(null,vec__7635_7698,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_7699,"$ = ",pmask_7700,";");


var G__7701 = cljs.core.next.call(null,seq__7628_7692__$1);
var G__7702 = null;
var G__7703 = (0);
var G__7704 = (0);
seq__7628_7680 = G__7701;
chunk__7629_7681 = G__7702;
count__7630_7682 = G__7703;
i__7631_7683 = G__7704;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__7705){
var map__7706 = p__7705;
var map__7706__$1 = (((((!((map__7706 == null))))?(((((map__7706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7706):map__7706);
var t = cljs.core.get.call(null,map__7706__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__7706__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__7706__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__7706__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__7706__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__7708_7726 = cljs.core.seq.call(null,protocols);
var chunk__7709_7727 = null;
var count__7710_7728 = (0);
var i__7711_7729 = (0);
while(true){
if((i__7711_7729 < count__7710_7728)){
var protocol_7730 = cljs.core._nth.call(null,chunk__7709_7727,i__7711_7729);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_7730)),"}");


var G__7731 = seq__7708_7726;
var G__7732 = chunk__7709_7727;
var G__7733 = count__7710_7728;
var G__7734 = (i__7711_7729 + (1));
seq__7708_7726 = G__7731;
chunk__7709_7727 = G__7732;
count__7710_7728 = G__7733;
i__7711_7729 = G__7734;
continue;
} else {
var temp__5735__auto___7735 = cljs.core.seq.call(null,seq__7708_7726);
if(temp__5735__auto___7735){
var seq__7708_7736__$1 = temp__5735__auto___7735;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7708_7736__$1)){
var c__4461__auto___7737 = cljs.core.chunk_first.call(null,seq__7708_7736__$1);
var G__7738 = cljs.core.chunk_rest.call(null,seq__7708_7736__$1);
var G__7739 = c__4461__auto___7737;
var G__7740 = cljs.core.count.call(null,c__4461__auto___7737);
var G__7741 = (0);
seq__7708_7726 = G__7738;
chunk__7709_7727 = G__7739;
count__7710_7728 = G__7740;
i__7711_7729 = G__7741;
continue;
} else {
var protocol_7742 = cljs.core.first.call(null,seq__7708_7736__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_7742)),"}");


var G__7743 = cljs.core.next.call(null,seq__7708_7736__$1);
var G__7744 = null;
var G__7745 = (0);
var G__7746 = (0);
seq__7708_7726 = G__7743;
chunk__7709_7727 = G__7744;
count__7710_7728 = G__7745;
i__7711_7729 = G__7746;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__7712_7747 = cljs.core.seq.call(null,fields__$1);
var chunk__7713_7748 = null;
var count__7714_7749 = (0);
var i__7715_7750 = (0);
while(true){
if((i__7715_7750 < count__7714_7749)){
var fld_7751 = cljs.core._nth.call(null,chunk__7713_7748,i__7715_7750);
cljs.compiler.emitln.call(null,"this.",fld_7751," = ",fld_7751,";");


var G__7752 = seq__7712_7747;
var G__7753 = chunk__7713_7748;
var G__7754 = count__7714_7749;
var G__7755 = (i__7715_7750 + (1));
seq__7712_7747 = G__7752;
chunk__7713_7748 = G__7753;
count__7714_7749 = G__7754;
i__7715_7750 = G__7755;
continue;
} else {
var temp__5735__auto___7756 = cljs.core.seq.call(null,seq__7712_7747);
if(temp__5735__auto___7756){
var seq__7712_7757__$1 = temp__5735__auto___7756;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7712_7757__$1)){
var c__4461__auto___7758 = cljs.core.chunk_first.call(null,seq__7712_7757__$1);
var G__7759 = cljs.core.chunk_rest.call(null,seq__7712_7757__$1);
var G__7760 = c__4461__auto___7758;
var G__7761 = cljs.core.count.call(null,c__4461__auto___7758);
var G__7762 = (0);
seq__7712_7747 = G__7759;
chunk__7713_7748 = G__7760;
count__7714_7749 = G__7761;
i__7715_7750 = G__7762;
continue;
} else {
var fld_7763 = cljs.core.first.call(null,seq__7712_7757__$1);
cljs.compiler.emitln.call(null,"this.",fld_7763," = ",fld_7763,";");


var G__7764 = cljs.core.next.call(null,seq__7712_7757__$1);
var G__7765 = null;
var G__7766 = (0);
var G__7767 = (0);
seq__7712_7747 = G__7764;
chunk__7713_7748 = G__7765;
count__7714_7749 = G__7766;
i__7715_7750 = G__7767;
continue;
}
} else {
}
}
break;
}

var seq__7716_7768 = cljs.core.seq.call(null,pmasks);
var chunk__7717_7769 = null;
var count__7718_7770 = (0);
var i__7719_7771 = (0);
while(true){
if((i__7719_7771 < count__7718_7770)){
var vec__7720_7772 = cljs.core._nth.call(null,chunk__7717_7769,i__7719_7771);
var pno_7773 = cljs.core.nth.call(null,vec__7720_7772,(0),null);
var pmask_7774 = cljs.core.nth.call(null,vec__7720_7772,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_7773,"$ = ",pmask_7774,";");


var G__7775 = seq__7716_7768;
var G__7776 = chunk__7717_7769;
var G__7777 = count__7718_7770;
var G__7778 = (i__7719_7771 + (1));
seq__7716_7768 = G__7775;
chunk__7717_7769 = G__7776;
count__7718_7770 = G__7777;
i__7719_7771 = G__7778;
continue;
} else {
var temp__5735__auto___7779 = cljs.core.seq.call(null,seq__7716_7768);
if(temp__5735__auto___7779){
var seq__7716_7780__$1 = temp__5735__auto___7779;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7716_7780__$1)){
var c__4461__auto___7781 = cljs.core.chunk_first.call(null,seq__7716_7780__$1);
var G__7782 = cljs.core.chunk_rest.call(null,seq__7716_7780__$1);
var G__7783 = c__4461__auto___7781;
var G__7784 = cljs.core.count.call(null,c__4461__auto___7781);
var G__7785 = (0);
seq__7716_7768 = G__7782;
chunk__7717_7769 = G__7783;
count__7718_7770 = G__7784;
i__7719_7771 = G__7785;
continue;
} else {
var vec__7723_7786 = cljs.core.first.call(null,seq__7716_7780__$1);
var pno_7787 = cljs.core.nth.call(null,vec__7723_7786,(0),null);
var pmask_7788 = cljs.core.nth.call(null,vec__7723_7786,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_7787,"$ = ",pmask_7788,";");


var G__7789 = cljs.core.next.call(null,seq__7716_7780__$1);
var G__7790 = null;
var G__7791 = (0);
var G__7792 = (0);
seq__7716_7768 = G__7789;
chunk__7717_7769 = G__7790;
count__7718_7770 = G__7791;
i__7719_7771 = G__7792;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__7793){
var map__7794 = p__7793;
var map__7794__$1 = (((((!((map__7794 == null))))?(((((map__7794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7794):map__7794);
var target = cljs.core.get.call(null,map__7794__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__7794__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__7794__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__7794__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__7794__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__5491__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__7796){
var map__7797 = p__7796;
var map__7797__$1 = (((((!((map__7797 == null))))?(((((map__7797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7797):map__7797);
var op = cljs.core.get.call(null,map__7797__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__7797__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__7797__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__7797__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__7797__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4036__auto__ = code;
if(cljs.core.truth_(and__4036__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4036__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__5491__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__5491__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__7803 = cljs.core.seq.call(null,table);
var chunk__7804 = null;
var count__7805 = (0);
var i__7806 = (0);
while(true){
if((i__7806 < count__7805)){
var vec__7807 = cljs.core._nth.call(null,chunk__7804,i__7806);
var sym = cljs.core.nth.call(null,vec__7807,(0),null);
var value = cljs.core.nth.call(null,vec__7807,(1),null);
var ns_7813 = cljs.core.namespace.call(null,sym);
var name_7814 = cljs.core.name.call(null,sym);
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


var G__7815 = seq__7803;
var G__7816 = chunk__7804;
var G__7817 = count__7805;
var G__7818 = (i__7806 + (1));
seq__7803 = G__7815;
chunk__7804 = G__7816;
count__7805 = G__7817;
i__7806 = G__7818;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__7803);
if(temp__5735__auto__){
var seq__7803__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7803__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__7803__$1);
var G__7819 = cljs.core.chunk_rest.call(null,seq__7803__$1);
var G__7820 = c__4461__auto__;
var G__7821 = cljs.core.count.call(null,c__4461__auto__);
var G__7822 = (0);
seq__7803 = G__7819;
chunk__7804 = G__7820;
count__7805 = G__7821;
i__7806 = G__7822;
continue;
} else {
var vec__7810 = cljs.core.first.call(null,seq__7803__$1);
var sym = cljs.core.nth.call(null,vec__7810,(0),null);
var value = cljs.core.nth.call(null,vec__7810,(1),null);
var ns_7823 = cljs.core.namespace.call(null,sym);
var name_7824 = cljs.core.name.call(null,sym);
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


var G__7825 = cljs.core.next.call(null,seq__7803__$1);
var G__7826 = null;
var G__7827 = (0);
var G__7828 = (0);
seq__7803 = G__7825;
chunk__7804 = G__7826;
count__7805 = G__7827;
i__7806 = G__7828;
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
var G__7830 = arguments.length;
switch (G__7830) {
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
var k_7835 = cljs.core.first.call(null,ks);
var vec__7831_7836 = cljs.core.conj.call(null,prefix,k_7835);
var top_7837 = cljs.core.nth.call(null,vec__7831_7836,(0),null);
var prefix_SINGLEQUOTE__7838 = vec__7831_7836;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_7835)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__7838) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_7837)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_7837)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__7838)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_7837);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__7838)),";");
}
} else {
}

var m_7839 = cljs.core.get.call(null,externs,k_7835);
if(cljs.core.empty_QMARK_.call(null,m_7839)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__7838,m_7839,top_level,known_externs);
}

var G__7840 = cljs.core.next.call(null,ks);
ks = G__7840;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
